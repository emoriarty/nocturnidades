function rAF (func) {
  var ticking = false;
  function updaterAF () {
    func();
    ticking = false;
  }

  return function () {
    if (!ticking) requestAnimationFrame(updaterAF);
    ticking = true;
  }
}