import CD from 'cropduster';

export default class Backpack {

  constructor(){

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
