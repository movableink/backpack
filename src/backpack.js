export default class Backpack {

  /**
   * Triggers the fallback image to show.
   *
   * Determine the type of error we have passed.
   * Was it something we were looking for:
   * i.e not enough items (in which case it is a cancelRequest)
   *
   * Or was it an error we didn't catch:
   * i.e API returned non JSON information when we were expecting JSON
   * (in which case we throw an error, which in turns notifies Dev)
   *
   * @param e
   * @returns {*}
   */
  forceFallback(e){

    const extraData = this.getState();
    this.setState('default', true);
    CD.setExtraData(extraData);

    if(e instanceof Error){
      CD.log(e);
      return CD.throwError(e);
    } else{
      CD.log(new Error(e).stack);
      return CD.cancelRequest(e);
    }
  }

  /****
   * Creates a synthetic event
   * @param eventType
   * @param eventMsg
   * @returns {Event}
   */
  trigger(eventType, eventMsg){

    const event = new CustomEvent(eventType, {
      detail     : eventMsg,
      bubbles    : true,
      cancelable : true
    });

    document.dispatchEvent(event);

  }


  /***
   * Attaches an event
   * @param event
   * @param callback
   */
  on(event, callback){

    document.addEventListener(event, (e) =>{
      callback(e);
    });

  }

  /***
   * Sets a value to a key for extraData
   * @param key
   * @param value
   */
  setState(key, value){
    this.extraData = this.getState();
    this.extraData[key] = value;
  }

  /***
   * Returns all data currently in extraData object
   * @returns {object}
   */
  getState(){
    this.extraData = (this.extraData) ? this.extraData : {};
    return this.extraData;
  }

}
