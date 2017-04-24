function throttle(func, wait) {
  var args, result, thisArg, timeoutId, lastCalled = 0;

  function trailingCall() {
    lastCalled = new Date;
    timeoutId = null;
    func.apply(thisArg, args);
  }

  return function() {
    var now = new Date
      , remain = wait - (now - lastCalled);

    args = arguments;
    thisArg = this;

    if (remain <= 0) {
        lastCalled = now;
        result = func.apply(thisArg, args);
    } else if (!timeoutId) {
        timeoutId = delay(trailingCall, remain);
    }
    return result;
  };
}

function delay(func, wait) {
    var args = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
}