/**
 * TODO
 * - Improve throttling performance: prevent once the loader image is executed
 *   being called again.
 */
(function () {
  var reduce = (function () {
    var reduce = Array.prototype.reduce;
    return function reduceFn (list, fn, acc) {
      return reduce.call(list, fn, acc);
    };
  })();

  var push = (function () {
    var concat = Array.prototype.concat;
    return function pushFn (list, item) {
      return concat.call(list, [item]);
    };
  })();

  function getViewportBottomPosition () {
    return window.scrollY + window.innerHeight;
  }

  function throttle (func, wait) {
    var timeout;
    return function () {
      if (!timeout) {
        var context = this, args = arguments;
        timeout = setTimeout(function() {
          func.apply(context, args);
          timeout = null;
        }, wait);
      }
    };
  }

  function curry (uncurried) {
    var parameters = Array.prototype.slice.call(arguments, 1);
    return function() {
      return uncurried.apply(this, parameters.concat(
        Array.prototype.slice.call(arguments, 0)
      ));
    };
  }

  function getCurrentThreshold () {
    return {
      top: window.scrollY,
      bottom: getViewportBottomPosition()
    }
  }

  function loadImage(placeholder) {
    var small = placeholder.querySelector('.img-small');

    // 1: load small image and show it
    // var img = new Image();
    // img.src = small.src;
    // img.onload = function () {
    //   small.classList.add('loaded');
    // };

    // 2: load large image
    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large; 
    imgLarge.alt = small.alt;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
    };
    placeholder.appendChild(imgLarge);
  }

  function isVisible (placeholder) {
    var offsetTop = placeholder.offsetTop;
    var offsetBottom = offsetTop + placeholder.offsetHeight;

    return offsetTop < (window.scrollY + window.innerHeight) &&
      offsetBottom > window.scrollY;
  }

  function checkCurrentThreshold (fn, acc, placeholder) {
    if (isVisible(placeholder)) {
      fn(placeholder);
      return acc;
    }
    return push(acc, placeholder);
  }

  function loadImages (placeholders, endFn) {
    var curriedCheckThreshold = curry(checkCurrentThreshold, loadImage);
    var images = reduce(placeholders, curriedCheckThreshold, []);

    return function loader () {
      images = reduce(images, curriedCheckThreshold, []);
      images.length === 0 &&  endFn();
    }
  }

  window.addEventListener('load', function() {
    var placeholders = document.querySelectorAll('.placeholder');

    var loader = loadImages(
      placeholders,
      function () {
        document.removeEventListener('scroll', loader);
        console.log('loader images listener removed');
      }
    );
    document.addEventListener('scroll', throttle(loader, 200));
  });
})();
