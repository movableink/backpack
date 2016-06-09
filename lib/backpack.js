'use strict';

/***
 * Dont forget to take your Backpack :)
 * @returns {Window.Backpack}
 * @constructor
 */
window.Backpack = function(){

  if(!(this instanceof Backpack)){
    return new Backpack();
  }

  this.setPolyfills();

};

/***
 * Methods for the Backpack class
 *
 * */
Backpack.prototype = {

  /**
   * Trigger the fallback image to show
   * @param el
   */
  forceFallback : function(el){
    el = el || "#mi_size_container";
    document.querySelector(el).outerHTML = '';
  },

  /****
   * Helper method.
   * Makes it easier to follow logs inside the app debugger
   * @param msg
   */
  logger : function(msg){
    console.log('-------------');
    console.log(msg);
    console.log('-------------');
  },

  /****
   * Creates a synthetic event
   * @param eventType
   * @param eventMsg
   * @returns {Event}
   */
  trigger : function(eventType, eventMsg){

    var event = new CustomEvent(eventType, {
      detail     : eventMsg,
      bubbles    : true,
      cancelable : true
    });

    document.dispatchEvent(event);

  },

  /***
   * Attaches an event
   * @param event
   * @param callback
   */
  on : function(event, callback){

    document.addEventListener(event, function(e){
      callback(e);
    });

  },

  /***
   * Needed to further enhance our JS rendering engine.
   */
  setPolyfills : function(){

    var self      = this;
    var polyfills = ['objectAssign', 'customEvent'];

    polyfills.forEach(function(poly){
      self['_' + poly]();
    });

  },

  /***
   * Polyfill from:
   * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
   * @private
   */
  _customEvent : function(){
    (function(){

      if(typeof window.CustomEvent === "function") return false;
      function CustomEvent(event, params){
        params  = params || {
            bubbles    : false,
            cancelable : false,
            detail     : undefined
          };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }

      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent    = CustomEvent;
    })();
  },

  /***
   * Polyfill from:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
   * @private
   */
  _objectAssign : function(){
    if(typeof Object.assign != 'function'){
      Object.assign = function(target){
        'use strict';
        if(target == null){
          throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for(var index = 1; index < arguments.length; index++){
          var source = arguments[index];
          if(source != null){
            for(var key in source){
              if(Object.prototype.hasOwnProperty.call(source, key)){
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
    }
  }

};