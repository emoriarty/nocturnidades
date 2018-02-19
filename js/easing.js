(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : (factory((global.App = global.App || {})));
}(this, (function (exports) { 'use strict';
  function easeLinear (t, d) { 
    return 1 * (t / d) + 0;
  }

  function setEaseIn (power) {
    return function easeIn (t, d) {
      return Math.pow(t/d, power);
    }
  }

  function setEaseOut (power) {
    return function easeOut (t, d) {
      return 1 - Math.pow(1 - (t / d), power);
    }
  }

  exports.easing = {
    linear: easeLinear,
    in: setEaseIn(2),
    out: setEaseOut(2),
    inCubic: setEaseIn(3),
    outCubic: setEaseOut(3),
    inQuart: setEaseIn(4),
    outQuart: setEaseOut(4),
    inStrong: setEaseIn(5),
    outString: setEaseOut(5)
  };
})));