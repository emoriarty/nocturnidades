(function () {
  var NIGHT_CLASSNAME = 'night-mode';
  var NIGHT_MODE = 'modo=noche';

  window.addEventListener('DOMContentLoaded', initVisualizationMode);

  function initVisualizationMode () {
    if (isNightMode()) {
      toggleNight();
      setModeToInternalLinks();
      hideNightModeTrigger();
    } else {
      setToggleMode();
      hideDayModeTrigger();
    }
  }

  function isNightMode () {
    return document.location.search.indexOf(NIGHT_MODE) > 0;
  }

  function toggleNight () {
    document.body.className += ' ' + NIGHT_CLASSNAME;
  }

  function setToggleMode () {
    var link = document.getElementById('trigger-night');
    link.search = appendToSearchParams(NIGHT_MODE, link);
  }

  function setModeToInternalLinks () {
    var links = getRelativeLinks();
    Array.prototype.map.call(links, appendMode(NIGHT_MODE));
  }

  function getRelativeLinks () {
    var links = document.querySelectorAll('a:not([href^=\'http\'])');
    return Array.prototype.filter.call(links, hasBlankUrl);
  }

  function hasBlankUrl (link) {
    return link.href !== '';
  }

  function appendMode (mode) {
    return function (link) {
      link.search = appendToSearchParams(mode, link);
      return link;
    }
  }

  function appendToSearchParams (mode, url) {
    return url.search.startsWith('?')
      ? '&' + mode
      : '?' + mode;
  }

  function hideDayModeTrigger () {
    hideModeTrigger('day');
  }

  function hideNightModeTrigger () {
    hideModeTrigger('night');
  }

  function hideModeTrigger (mode) {
    var trigger = document.querySelector('.trigger-mode.' + mode);
    trigger.style.display = 'none';
  }
})();
