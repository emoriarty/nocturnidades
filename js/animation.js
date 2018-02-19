(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : (factory((global)));
}(this, (function (global) { 'use strict';
  var exports = global.App || {}
  function performAnimation (duration, fn) {
    var start = null;
    var animationId = 0;

    function animateStep (timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      fn(progress);
      if (progress < duration) {
        animationId = global.requestAnimationFrame(animateStep);
      }
    }

    function cancelAnimation () {
      global.cancelAnimationFrame(animationId);
    }

    return function () {
      animationId = global.requestAnimationFrame(animateStep);
      return cancelAnimation;
    }
  }

  exports.performAnimation = performAnimation;
})));