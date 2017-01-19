import CD from 'cropduster';

export default class Backpack {

  constructor(){

  }

  /**
   * @param {string} msg
   * create error so we can have a stack trace
   */
  cancel(msg) {
      this.message = msg;
      this.stack = (new Error(msg)).stack;
      this.handleFallback({message : this.message, stack : this.stack});
  }
  ​
  handleFallback(e){
    /*
     *  Determine the type of error we just had
     *  Was it something we were looking for i.e not enough items (in which case it is a cancelRequest)
     *  Or was it an error we didn't catch i.e API returned non JSON information when we were expecting JSON (in which case we throw an error, which in turns notifies Dev)
     */
    if(e instanceof Error) {
      console.log(e);
      //CD.throwError(e);
    } else {
      console.log(e.message);
      console.log(e.stack);
      CD.cancelRequest(e.message);
    }
  }

  /**
   * Triggers the fallback image to show
   * @param msg
   */
  forceFallback(msg){
    CD.cancelRequest(msg);
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

    document.addEventListener(event, (e)=>{
      callback(e);
    });

  }

}
