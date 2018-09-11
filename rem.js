(function (designWidth, rem2px) {
  var win = window;
  var doc = win.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var dpr = 0;
  var scale = 0;
  var tid;

  if (!dpr && !scale) {
    var devicePixelRatio = win.devicePixelRatio;
    if (win.navigator.appVersion.match(/iphone/gi)) {
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      dpr = 1;
    }
    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', dpr);
  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  } else {
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  }
  function refreshRem(_designWidth, _rem2px) {
    var width = docEl.getBoundingClientRect().width;
    var d = window.document.createElement('div');
    d.style.width = '1rem';
    d.style.display = "none";
    docEl.firstElementChild.appendChild(d);
    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
    var portrait = "@media screen and (width: " + width + "px) {html{font-size:" + ((width / (_designWidth / _rem2px) / defaultFontSize) * 100) + "%;}}";
    var dpStyleEl = doc.getElementById('dpAdapt');
    if (!dpStyleEl) {
      dpStyleEl = document.createElement('style');
      dpStyleEl.id = 'dpAdapt';
      dpStyleEl.innerHTML = portrait;
      docEl.firstElementChild.appendChild(dpStyleEl);
    } else {
      dpStyleEl.innerHTML = portrait;
    }
    setTimeout(function () {
      var height = docEl.getBoundingClientRect().height;
      var landscape = "@media screen and (width: " + height + "px) {html{font-size:" + ((height / (_designWidth / _rem2px) / defaultFontSize) * 100) + "%;}}"
      var dlStyleEl = doc.getElementById('dlAdapt');
      if (!dlStyleEl) {
        dlStyleEl = document.createElement('style');
        dlStyleEl.id = 'dlAdapt'
        dlStyleEl.innerHTML = landscape;
        docEl.firstElementChild.appendChild(dlStyleEl);
      } else {
        dlStyleEl.innerHTML = landscape;
      }
    }, 500);
  }
  setTimeout(function () {
    refreshRem(designWidth, rem2px);
  }, 1);

})(640, 100);