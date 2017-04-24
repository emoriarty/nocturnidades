(function () {
  // var reduce = (function () {
  //   var reduce = Array.prototype.reduce;
  //   return function reduceFn (fn, list, acc) {
  //     return reduce.call(list, fn, acc);
  //   };
  // })();

  // var push = (function () {
  //   var concat = Array.prototype.concat;
  //   return function pushFn (list, item) {
  //     return concat.call(list, [item]);
  //   };
  // })();

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
    return acc.concat([placeholder]);
  }

  function loadImages (placeholders, endFn) {
    var curriedCheckThreshold = curry(checkCurrentThreshold, loadImage);
    // First execution to check if there are images on current viewport
    var images = Array.prototype.reduce.call(placeholders, curriedCheckThreshold, []);

    return function loader () {
      images = Array.prototype.reduce.call(images, curriedCheckThreshold, []);
      images.length === 0 && endFn();
    }
  }

  window.addEventListener('load', function() {
    var placeholders = document.querySelectorAll('.placeholder');
    var listener;
    var loader = loadImages(
      placeholders,
      function () {
        document.removeEventListener('scroll', listener);
      }
    );
    document.addEventListener('scroll', listener = throttle(loader, 250, true));
  });
})();
