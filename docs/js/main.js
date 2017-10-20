(function () {
  var NIGHT_CLASSNAME = 'night-mode';
  var NIGHT_MODE = 'modo=noche';

  isNightMode() && window.addEventListener('load', toggleNight);
  isNightMode() && window.addEventListener('load', setModeToInternalLinks);
  !isNightMode() && window.addEventListener('load', setToggleModeLink)

  function isNightMode () {
    return document.location.search.indexOf(NIGHT_MODE) > 0;
  }

  function toggleNight () {
    document.body.className += ' ' + NIGHT_CLASSNAME;
  }

  function setToggleModeLink () {
    var link = document.getElementById('trigger-night');
    console.log(link)
    link.search = appendToSearchParams(NIGHT_MODE, link);
  }

  function setModeToInternalLinks () {
    var links = getRelativeLinks();
    Array.prototype.map.call(links, appendMode(NIGHT_MODE));
  }

  function getRelativeLinks () {
    var links = document.querySelectorAll('a:not([href^=\'http\'])');
    return Array.prototype.filter.call(links, removeBlankLinks);
  }

  function removeBlankLinks (link) {
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
})();
