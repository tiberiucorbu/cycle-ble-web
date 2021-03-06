"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([,, function (e, t, n) {
  e.exports = n(3);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  n(4);

  function o(e) {
    var t = document.createElement("script");
    return t.setAttribute("src", e), t.setAttribute("async", "async"), document.head.appendChild(t), t;
  }

  !function () {
    if ("undefined" == typeof Symbol) return !0;

    try {
      return Function("()=>{}"), !1;
    } catch (e) {
      return !0;
    }

    return !1;
  }() ? o("./dist/es-next-bundle.js") : (!function (e) {
    var t = document.createElement("script");
    t.setAttribute("src", e), document.head.appendChild(t);
  }("./dist/custom-elements-es5-adapter.js"), o("./dist/es5-bundle.js"));
}, function (e, t) {
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  !function () {
    "use strict";

    var e,
        t = !1,
        n = [],
        o = !1;

    function r() {
      window.WebComponents.ready = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {
        bubbles: !0
      }));
    }

    function i() {
      window.customElements && customElements.polyfillWrapFlushCallback && customElements.polyfillWrapFlushCallback(function (t) {
        e = t, o && e();
      });
    }

    function d() {
      window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(window.document), t = !0, c().then(r);
    }

    function c() {
      o = !1;
      var t = n.map(function (e) {
        return e instanceof Function ? e() : e;
      });
      return n = [], Promise.all(t).then(function () {
        o = !0, e && e();
      }).catch(function (e) {
        console.error(e);
      });
    }

    window.WebComponents = window.WebComponents || {}, window.WebComponents.ready = window.WebComponents.ready || !1, window.WebComponents.waitFor = window.WebComponents.waitFor || function (e) {
      e && (n.push(e), t && c());
    }, window.WebComponents._batchCustomElements = i;
    var u = "webcomponents-loader.js",
        s = [];
    (!("attachShadow" in Element.prototype && "getRootNode" in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) && s.push("sd"), window.customElements && !window.customElements.forcePolyfill || s.push("ce");

    var l = function () {
      var e = document.createElement("template");
      if (!("content" in e)) return !0;
      if (!(e.content.cloneNode() instanceof DocumentFragment)) return !0;
      var t = document.createElement("template");
      t.content.appendChild(document.createElement("div")), e.content.appendChild(t);
      var n = e.cloneNode(!0);
      return 0 === n.content.childNodes.length || 0 === n.content.firstChild.content.childNodes.length;
    }();

    if (window.Promise && Array.from && window.URL && window.Symbol && !l || (s = ["sd-ce-pf"]), s.length) {
      var a,
          m = "bundles/webcomponents-" + s.join("-") + ".js";
      if (window.WebComponents.root) a = window.WebComponents.root + m;else {
        var p = document.querySelector('script[src*="' + u + '"]');
        a = p.src.replace(u, m);
      }
      var f = document.createElement("script");
      f.src = a, "loading" === document.readyState ? (f.setAttribute("onload", "window.WebComponents._batchCustomElements()"), document.write(f.outerHTML), document.addEventListener("DOMContentLoaded", d)) : (f.addEventListener("load", function () {
        i(), d();
      }), f.addEventListener("error", function () {
        throw new Error("Could not load polyfill bundle" + a);
      }), document.head.appendChild(f));
    } else "complete" === document.readyState ? (t = !0, r()) : (window.addEventListener("load", d), window.addEventListener("DOMContentLoaded", function () {
      window.removeEventListener("load", d), d();
    }));
  }();
}]);