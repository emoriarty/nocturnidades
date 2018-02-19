(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : (factory((global.App = global.App || {})));
}(this, (function (exports) { 'use strict';
  function performAnimation (duration, fn) {
    var start = null;
    var animationId = 0;

    function animateStep (timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      fn(progress);
      if (progress < duration) {
        animationId = requestAnimationFrame(animateStep);
      }
    }

    function cancelAnimation () {
      cancelAnimationFrame(animationId);
    }

    return function () {
      animationId = requestAnimationFrame(animateStep);
      return cancelAnimation;
    }
  }

  exports.performAnimation = performAnimation;
})));