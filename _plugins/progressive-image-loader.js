(function () {
  var remove = (function () {
    var slice = Array.prototype.slice;
    var concat = Array.prototype.concat;
    return function removeFn (list, idx) {
      return concat.call(slice.call(list, 0, idx), slice.call(list, idx + 1)); 
    }
  })();

  var shift = (function () {
    return function shiftFn (list) {
      return remove(list, 0);
    }
  })();

  var head = (function () {
    return function headFn (list) {
      return list[0];
    }
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

  window.addEventListener('load', function() {
    var placeholders = document.querySelectorAll('.placeholder');
    function checkImages () {
      return function checker () {
        var placeholder = head(placeholders);
        if (placeholder && placeholder.offsetTop <= getViewportBottomPosition()) {
          var small = placeholder.querySelector('.img-small');
    
          // 1: load small image and show it
          var img = new Image();
          img.src = small.src;
          img.onload = function () {
            small.classList.add('loaded');
          };
  
          // 2: load large image
          var imgLarge = new Image();
          imgLarge.src = placeholder.dataset.large; 
          imgLarge.alt = small.alt;
          imgLarge.onload = function () {
            imgLarge.classList.add('loaded');
          };
          placeholder.appendChild(imgLarge);
          placeholders = shift(placeholders);
        }
      }
    }

    document.addEventListener('scroll', throttle(checkImages(), 200));
  });
})()
