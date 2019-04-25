"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(i, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 53);
}({
  35: function _(t, e, n) {
    /* @preserve
     * Leaflet 1.4.0, a JS library for interactive maps. http://leafletjs.com
     * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
     */
    !function (t) {
      "use strict";

      var e = Object.freeze;

      function n(t) {
        var e, n, i, o;

        for (n = 1, i = arguments.length; n < i; n++) {
          for (e in o = arguments[n]) {
            t[e] = o[e];
          }
        }

        return t;
      }

      Object.freeze = function (t) {
        return t;
      };

      var i = Object.create || function () {
        function t() {}

        return function (e) {
          return t.prototype = e, new t();
        };
      }();

      function o(t, e) {
        var n = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
        var i = n.call(arguments, 2);
        return function () {
          return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
        };
      }

      var s = 0;

      function a(t) {
        return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id;
      }

      function r(t, e, n) {
        var i, o, s, a;
        return a = function a() {
          i = !1, o && (s.apply(n, o), o = !1);
        }, s = function s() {
          i ? o = arguments : (t.apply(n, arguments), setTimeout(a, e), i = !0);
        };
      }

      function h(t, e, n) {
        var i = e[1],
            o = e[0],
            s = i - o;
        return t === i && n ? t : ((t - o) % s + s) % s + o;
      }

      function l() {
        return !1;
      }

      function u(t, e) {
        var n = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * n) / n;
      }

      function c(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }

      function d(t) {
        return c(t).split(/\s+/);
      }

      function p(t, e) {
        for (var n in t.hasOwnProperty("options") || (t.options = t.options ? i(t.options) : {}), e) {
          t.options[n] = e[n];
        }

        return t.options;
      }

      function _(t, e, n) {
        var i = [];

        for (var o in t) {
          i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        }

        return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&");
      }

      var f = /\{ *([\w_-]+) *\}/g;

      function m(t, e) {
        return t.replace(f, function (t, n) {
          var i = e[n];
          if (void 0 === i) throw new Error("No value provided for variable " + t);
          return "function" == typeof i && (i = i(e)), i;
        });
      }

      var g = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };

      function v(t, e) {
        for (var n = 0; n < t.length; n++) {
          if (t[n] === e) return n;
        }

        return -1;
      }

      var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

      function x(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }

      var b = 0;

      function w(t) {
        var e = +new Date(),
            n = Math.max(0, 16 - (e - b));
        return b = e + n, window.setTimeout(t, n);
      }

      var P = window.requestAnimationFrame || x("RequestAnimationFrame") || w,
          T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function (t) {
        window.clearTimeout(t);
      };

      function z(t, e, n) {
        if (!n || P !== w) return P.call(window, o(t, e));
        t.call(e);
      }

      function M(t) {
        t && T.call(window, t);
      }

      var k = (Object.freeze || Object)({
        freeze: e,
        extend: n,
        create: i,
        bind: o,
        lastId: s,
        stamp: a,
        throttle: r,
        wrapNum: h,
        falseFn: l,
        formatNum: u,
        trim: c,
        splitWords: d,
        setOptions: p,
        getParamString: _,
        template: m,
        isArray: g,
        indexOf: v,
        emptyImageUrl: y,
        requestFn: P,
        cancelFn: T,
        requestAnimFrame: z,
        cancelAnimFrame: M
      });

      function C() {}

      C.extend = function (t) {
        var e = function e() {
          this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        },
            o = e.__super__ = this.prototype,
            s = i(o);

        for (var a in s.constructor = e, e.prototype = s, this) {
          this.hasOwnProperty(a) && "prototype" !== a && "__super__" !== a && (e[a] = this[a]);
        }

        return t.statics && (n(e, t.statics), delete t.statics), t.includes && (function (t) {
          if ("undefined" != typeof L && L && L.Mixin) {
            t = g(t) ? t : [t];

            for (var e = 0; e < t.length; e++) {
              t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
          }
        }(t.includes), n.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = n(i(s.options), t.options)), n(s, t), s._initHooks = [], s.callInitHooks = function () {
          if (!this._initHooksCalled) {
            o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;

            for (var t = 0, e = s._initHooks.length; t < e; t++) {
              s._initHooks[t].call(this);
            }
          }
        }, e;
      }, C.include = function (t) {
        return n(this.prototype, t), this;
      }, C.mergeOptions = function (t) {
        return n(this.prototype.options, t), this;
      }, C.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
            n = "function" == typeof t ? t : function () {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this;
      };
      var E = {
        on: function on(t, e, n) {
          if ("object" == _typeof(t)) for (var i in t) {
            this._on(i, t[i], e);
          } else {
            t = d(t);

            for (var o = 0, s = t.length; o < s; o++) {
              this._on(t[o], e, n);
            }
          }
          return this;
        },
        off: function off(t, e, n) {
          if (t) {
            if ("object" == _typeof(t)) for (var i in t) {
              this._off(i, t[i], e);
            } else {
              t = d(t);

              for (var o = 0, s = t.length; o < s; o++) {
                this._off(t[o], e, n);
              }
            }
          } else delete this._events;
          return this;
        },
        _on: function _on(t, e, n) {
          this._events = this._events || {};
          var i = this._events[t];
          i || (i = [], this._events[t] = i), n === this && (n = void 0);

          for (var o = {
            fn: e,
            ctx: n
          }, s = i, a = 0, r = s.length; a < r; a++) {
            if (s[a].fn === e && s[a].ctx === n) return;
          }

          s.push(o);
        },
        _off: function _off(t, e, n) {
          var i, o, s;
          if (this._events && (i = this._events[t])) if (e) {
            if (n === this && (n = void 0), i) for (o = 0, s = i.length; o < s; o++) {
              var a = i[o];
              if (a.ctx === n && a.fn === e) return a.fn = l, this._firingCount && (this._events[t] = i = i.slice()), void i.splice(o, 1);
            }
          } else {
            for (o = 0, s = i.length; o < s; o++) {
              i[o].fn = l;
            }

            delete this._events[t];
          }
        },
        fire: function fire(t, e, i) {
          if (!this.listens(t, i)) return this;
          var o = n({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });

          if (this._events) {
            var s = this._events[t];

            if (s) {
              this._firingCount = this._firingCount + 1 || 1;

              for (var a = 0, r = s.length; a < r; a++) {
                var h = s[a];
                h.fn.call(h.ctx || this, o);
              }

              this._firingCount--;
            }
          }

          return i && this._propagateEvent(o), this;
        },
        listens: function listens(t, e) {
          var n = this._events && this._events[t];
          if (n && n.length) return !0;
          if (e) for (var i in this._eventParents) {
            if (this._eventParents[i].listens(t, e)) return !0;
          }
          return !1;
        },
        once: function once(t, e, n) {
          if ("object" == _typeof(t)) {
            for (var i in t) {
              this.once(i, t[i], e);
            }

            return this;
          }

          var s = o(function () {
            this.off(t, e, n).off(t, s, n);
          }, this);
          return this.on(t, e, n).on(t, s, n);
        },
        addEventParent: function addEventParent(t) {
          return this._eventParents = this._eventParents || {}, this._eventParents[a(t)] = t, this;
        },
        removeEventParent: function removeEventParent(t) {
          return this._eventParents && delete this._eventParents[a(t)], this;
        },
        _propagateEvent: function _propagateEvent(t) {
          for (var e in this._eventParents) {
            this._eventParents[e].fire(t.type, n({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
          }
        }
      };
      E.addEventListener = E.on, E.removeEventListener = E.clearAllEventListeners = E.off, E.addOneTimeEventListener = E.once, E.fireEvent = E.fire, E.hasEventListeners = E.listens;
      var S = C.extend(E);

      function Z(t, e, n) {
        this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e;
      }

      var B = Math.trunc || function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };

      function I(t, e, n) {
        return t instanceof Z ? t : g(t) ? new Z(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new Z(t.x, t.y) : new Z(t, e, n);
      }

      function O(t, e) {
        if (t) for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) {
          this.extend(n[i]);
        }
      }

      function A(t, e) {
        return !t || t instanceof O ? t : new O(t, e);
      }

      function R(t, e) {
        if (t) for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) {
          this.extend(n[i]);
        }
      }

      function D(t, e) {
        return t instanceof R ? t : new R(t, e);
      }

      function N(t, e, n) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== n && (this.alt = +n);
      }

      function j(t, e, n) {
        return t instanceof N ? t : g(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new N(t[0], t[1], t[2]) : 2 === t.length ? new N(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new N(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new N(t, e, n);
      }

      Z.prototype = {
        clone: function clone() {
          return new Z(this.x, this.y);
        },
        add: function add(t) {
          return this.clone()._add(I(t));
        },
        _add: function _add(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        subtract: function subtract(t) {
          return this.clone()._subtract(I(t));
        },
        _subtract: function _subtract(t) {
          return this.x -= t.x, this.y -= t.y, this;
        },
        divideBy: function divideBy(t) {
          return this.clone()._divideBy(t);
        },
        _divideBy: function _divideBy(t) {
          return this.x /= t, this.y /= t, this;
        },
        multiplyBy: function multiplyBy(t) {
          return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function _multiplyBy(t) {
          return this.x *= t, this.y *= t, this;
        },
        scaleBy: function scaleBy(t) {
          return new Z(this.x * t.x, this.y * t.y);
        },
        unscaleBy: function unscaleBy(t) {
          return new Z(this.x / t.x, this.y / t.y);
        },
        round: function round() {
          return this.clone()._round();
        },
        _round: function _round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        floor: function floor() {
          return this.clone()._floor();
        },
        _floor: function _floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        ceil: function ceil() {
          return this.clone()._ceil();
        },
        _ceil: function _ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        trunc: function trunc() {
          return this.clone()._trunc();
        },
        _trunc: function _trunc() {
          return this.x = B(this.x), this.y = B(this.y), this;
        },
        distanceTo: function distanceTo(t) {
          var e = (t = I(t)).x - this.x,
              n = t.y - this.y;
          return Math.sqrt(e * e + n * n);
        },
        equals: function equals(t) {
          return (t = I(t)).x === this.x && t.y === this.y;
        },
        contains: function contains(t) {
          return t = I(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        toString: function toString() {
          return "Point(" + u(this.x) + ", " + u(this.y) + ")";
        }
      }, O.prototype = {
        extend: function extend(t) {
          return t = I(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
        },
        getCenter: function getCenter(t) {
          return new Z((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
        },
        getBottomLeft: function getBottomLeft() {
          return new Z(this.min.x, this.max.y);
        },
        getTopRight: function getTopRight() {
          return new Z(this.max.x, this.min.y);
        },
        getTopLeft: function getTopLeft() {
          return this.min;
        },
        getBottomRight: function getBottomRight() {
          return this.max;
        },
        getSize: function getSize() {
          return this.max.subtract(this.min);
        },
        contains: function contains(t) {
          var e, n;
          return (t = "number" == typeof t[0] || t instanceof Z ? I(t) : A(t)) instanceof O ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y;
        },
        intersects: function intersects(t) {
          t = A(t);
          var e = this.min,
              n = this.max,
              i = t.min,
              o = t.max,
              s = o.x >= e.x && i.x <= n.x,
              a = o.y >= e.y && i.y <= n.y;
          return s && a;
        },
        overlaps: function overlaps(t) {
          t = A(t);
          var e = this.min,
              n = this.max,
              i = t.min,
              o = t.max,
              s = o.x > e.x && i.x < n.x,
              a = o.y > e.y && i.y < n.y;
          return s && a;
        },
        isValid: function isValid() {
          return !(!this.min || !this.max);
        }
      }, R.prototype = {
        extend: function extend(t) {
          var e,
              n,
              i = this._southWest,
              o = this._northEast;
          if (t instanceof N) e = t, n = t;else {
            if (!(t instanceof R)) return t ? this.extend(j(t) || D(t)) : this;
            if (e = t._southWest, n = t._northEast, !e || !n) return this;
          }
          return i || o ? (i.lat = Math.min(e.lat, i.lat), i.lng = Math.min(e.lng, i.lng), o.lat = Math.max(n.lat, o.lat), o.lng = Math.max(n.lng, o.lng)) : (this._southWest = new N(e.lat, e.lng), this._northEast = new N(n.lat, n.lng)), this;
        },
        pad: function pad(t) {
          var e = this._southWest,
              n = this._northEast,
              i = Math.abs(e.lat - n.lat) * t,
              o = Math.abs(e.lng - n.lng) * t;
          return new R(new N(e.lat - i, e.lng - o), new N(n.lat + i, n.lng + o));
        },
        getCenter: function getCenter() {
          return new N((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        },
        getSouthWest: function getSouthWest() {
          return this._southWest;
        },
        getNorthEast: function getNorthEast() {
          return this._northEast;
        },
        getNorthWest: function getNorthWest() {
          return new N(this.getNorth(), this.getWest());
        },
        getSouthEast: function getSouthEast() {
          return new N(this.getSouth(), this.getEast());
        },
        getWest: function getWest() {
          return this._southWest.lng;
        },
        getSouth: function getSouth() {
          return this._southWest.lat;
        },
        getEast: function getEast() {
          return this._northEast.lng;
        },
        getNorth: function getNorth() {
          return this._northEast.lat;
        },
        contains: function contains(t) {
          t = "number" == typeof t[0] || t instanceof N || "lat" in t ? j(t) : D(t);
          var e,
              n,
              i = this._southWest,
              o = this._northEast;
          return t instanceof R ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= o.lat && e.lng >= i.lng && n.lng <= o.lng;
        },
        intersects: function intersects(t) {
          t = D(t);
          var e = this._southWest,
              n = this._northEast,
              i = t.getSouthWest(),
              o = t.getNorthEast(),
              s = o.lat >= e.lat && i.lat <= n.lat,
              a = o.lng >= e.lng && i.lng <= n.lng;
          return s && a;
        },
        overlaps: function overlaps(t) {
          t = D(t);
          var e = this._southWest,
              n = this._northEast,
              i = t.getSouthWest(),
              o = t.getNorthEast(),
              s = o.lat > e.lat && i.lat < n.lat,
              a = o.lng > e.lng && i.lng < n.lng;
          return s && a;
        },
        toBBoxString: function toBBoxString() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        equals: function equals(t, e) {
          return !!t && (t = D(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
        },
        isValid: function isValid() {
          return !(!this._southWest || !this._northEast);
        }
      }, N.prototype = {
        equals: function equals(t, e) {
          if (!t) return !1;
          t = j(t);
          var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
          return n <= (void 0 === e ? 1e-9 : e);
        },
        toString: function toString(t) {
          return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")";
        },
        distanceTo: function distanceTo(t) {
          return F.distance(this, j(t));
        },
        wrap: function wrap() {
          return F.wrapLatLng(this);
        },
        toBounds: function toBounds(t) {
          var e = 180 * t / 40075017,
              n = e / Math.cos(Math.PI / 180 * this.lat);
          return D([this.lat - e, this.lng - n], [this.lat + e, this.lng + n]);
        },
        clone: function clone() {
          return new N(this.lat, this.lng, this.alt);
        }
      };
      var W,
          H = {
        latLngToPoint: function latLngToPoint(t, e) {
          var n = this.projection.project(t),
              i = this.scale(e);
          return this.transformation._transform(n, i);
        },
        pointToLatLng: function pointToLatLng(t, e) {
          var n = this.scale(e),
              i = this.transformation.untransform(t, n);
          return this.projection.unproject(i);
        },
        project: function project(t) {
          return this.projection.project(t);
        },
        unproject: function unproject(t) {
          return this.projection.unproject(t);
        },
        scale: function scale(t) {
          return 256 * Math.pow(2, t);
        },
        zoom: function zoom(t) {
          return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds: function getProjectedBounds(t) {
          if (this.infinite) return null;
          var e = this.projection.bounds,
              n = this.scale(t),
              i = this.transformation.transform(e.min, n),
              o = this.transformation.transform(e.max, n);
          return new O(i, o);
        },
        infinite: !1,
        wrapLatLng: function wrapLatLng(t) {
          var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng,
              n = this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat,
              i = t.alt;
          return new N(n, e, i);
        },
        wrapLatLngBounds: function wrapLatLngBounds(t) {
          var e = t.getCenter(),
              n = this.wrapLatLng(e),
              i = e.lat - n.lat,
              o = e.lng - n.lng;
          if (0 === i && 0 === o) return t;
          var s = t.getSouthWest(),
              a = t.getNorthEast(),
              r = new N(s.lat - i, s.lng - o),
              h = new N(a.lat - i, a.lng - o);
          return new R(r, h);
        }
      },
          F = n({}, H, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function distance(t, e) {
          var n = Math.PI / 180,
              i = t.lat * n,
              o = e.lat * n,
              s = Math.sin((e.lat - t.lat) * n / 2),
              a = Math.sin((e.lng - t.lng) * n / 2),
              r = s * s + Math.cos(i) * Math.cos(o) * a * a,
              h = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
          return this.R * h;
        }
      }),
          U = {
        R: 6378137,
        MAX_LATITUDE: 85.0511287798,
        project: function project(t) {
          var e = Math.PI / 180,
              n = this.MAX_LATITUDE,
              i = Math.max(Math.min(n, t.lat), -n),
              o = Math.sin(i * e);
          return new Z(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2);
        },
        unproject: function unproject(t) {
          var e = 180 / Math.PI;
          return new N((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
        },
        bounds: (W = 6378137 * Math.PI, new O([-W, -W], [W, W]))
      };

      function V(t, e, n, i) {
        if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
        this._a = t, this._b = e, this._c = n, this._d = i;
      }

      function q(t, e, n, i) {
        return new V(t, e, n, i);
      }

      V.prototype = {
        transform: function transform(t, e) {
          return this._transform(t.clone(), e);
        },
        _transform: function _transform(t, e) {
          return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
        },
        untransform: function untransform(t, e) {
          return e = e || 1, new Z((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
        }
      };
      var G = n({}, F, {
        code: "EPSG:3857",
        projection: U,
        transformation: function () {
          var t = .5 / (Math.PI * U.R);
          return q(t, .5, -t, .5);
        }()
      }),
          K = n({}, G, {
        code: "EPSG:900913"
      });

      function Y(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }

      function X(t, e) {
        var n,
            i,
            o,
            s,
            a,
            r,
            h = "";

        for (n = 0, o = t.length; n < o; n++) {
          for (a = t[n], i = 0, s = a.length; i < s; i++) {
            r = a[i], h += (i ? "L" : "M") + r.x + " " + r.y;
          }

          h += e ? Mt ? "z" : "x" : "";
        }

        return h || "M0 0";
      }

      var J = document.documentElement.style,
          $ = "ActiveXObject" in window,
          Q = $ && !document.addEventListener,
          tt = "msLaunchUri" in navigator && !("documentMode" in document),
          et = Ct("webkit"),
          nt = Ct("android"),
          it = Ct("android 2") || Ct("android 3"),
          ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
          st = nt && Ct("Google") && ot < 537 && !("AudioNode" in window),
          at = !!window.opera,
          rt = Ct("chrome"),
          ht = Ct("gecko") && !et && !at && !$,
          lt = !rt && Ct("safari"),
          ut = Ct("phantom"),
          ct = "OTransition" in J,
          dt = 0 === navigator.platform.indexOf("Win"),
          pt = $ && "transition" in J,
          _t = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !it,
          ft = "MozPerspective" in J,
          mt = !window.L_DISABLE_3D && (pt || _t || ft) && !ct && !ut,
          gt = "undefined" != typeof orientation || Ct("mobile"),
          vt = gt && et,
          yt = gt && _t,
          xt = !window.PointerEvent && window.MSPointerEvent,
          bt = !(!window.PointerEvent && !xt),
          wt = !window.L_NO_TOUCH && (bt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
          Pt = gt && at,
          Lt = gt && ht,
          Tt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
          zt = !!document.createElement("canvas").getContext,
          Mt = !(!document.createElementNS || !Y("svg").createSVGRect),
          kt = !Mt && function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && "object" == _typeof(e.adj);
        } catch (t) {
          return !1;
        }
      }();

      function Ct(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }

      var Et = (Object.freeze || Object)({
        ie: $,
        ielt9: Q,
        edge: tt,
        webkit: et,
        android: nt,
        android23: it,
        androidStock: st,
        opera: at,
        chrome: rt,
        gecko: ht,
        safari: lt,
        phantom: ut,
        opera12: ct,
        win: dt,
        ie3d: pt,
        webkit3d: _t,
        gecko3d: ft,
        any3d: mt,
        mobile: gt,
        mobileWebkit: vt,
        mobileWebkit3d: yt,
        msPointer: xt,
        pointer: bt,
        touch: wt,
        mobileOpera: Pt,
        mobileGecko: Lt,
        retina: Tt,
        canvas: zt,
        svg: Mt,
        vml: kt
      }),
          St = xt ? "MSPointerDown" : "pointerdown",
          Zt = xt ? "MSPointerMove" : "pointermove",
          Bt = xt ? "MSPointerUp" : "pointerup",
          It = xt ? "MSPointerCancel" : "pointercancel",
          Ot = ["INPUT", "SELECT", "OPTION"],
          At = {},
          Rt = !1,
          Dt = 0;

      function Nt(t, e, n, i) {
        return "touchstart" === e ? function (t, e, n) {
          var i = o(function (t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
              if (!(Ot.indexOf(t.target.tagName) < 0)) return;
              Ae(t);
            }

            Ft(t, e);
          });
          t["_leaflet_touchstart" + n] = i, t.addEventListener(St, i, !1), Rt || (document.documentElement.addEventListener(St, jt, !0), document.documentElement.addEventListener(Zt, Wt, !0), document.documentElement.addEventListener(Bt, Ht, !0), document.documentElement.addEventListener(It, Ht, !0), Rt = !0);
        }(t, n, i) : "touchmove" === e ? function (t, e, n) {
          var i = function i(t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Ft(t, e);
          };

          t["_leaflet_touchmove" + n] = i, t.addEventListener(Zt, i, !1);
        }(t, n, i) : "touchend" === e && function (t, e, n) {
          var i = function i(t) {
            Ft(t, e);
          };

          t["_leaflet_touchend" + n] = i, t.addEventListener(Bt, i, !1), t.addEventListener(It, i, !1);
        }(t, n, i), this;
      }

      function jt(t) {
        At[t.pointerId] = t, Dt++;
      }

      function Wt(t) {
        At[t.pointerId] && (At[t.pointerId] = t);
      }

      function Ht(t) {
        delete At[t.pointerId], Dt--;
      }

      function Ft(t, e) {
        for (var n in t.touches = [], At) {
          t.touches.push(At[n]);
        }

        t.changedTouches = [t], e(t);
      }

      var Ut = xt ? "MSPointerDown" : bt ? "pointerdown" : "touchstart",
          Vt = xt ? "MSPointerUp" : bt ? "pointerup" : "touchend",
          qt = "_leaflet_";

      function Gt(t, e, n) {
        var i,
            o,
            s = !1,
            a = 250;

        function r(t) {
          var e;

          if (bt) {
            if (!tt || "mouse" === t.pointerType) return;
            e = Dt;
          } else e = t.touches.length;

          if (!(e > 1)) {
            var n = Date.now(),
                r = n - (i || n);
            o = t.touches ? t.touches[0] : t, s = r > 0 && r <= a, i = n;
          }
        }

        function h(t) {
          if (s && !o.cancelBubble) {
            if (bt) {
              if (!tt || "mouse" === t.pointerType) return;
              var n,
                  a,
                  r = {};

              for (a in o) {
                n = o[a], r[a] = n && n.bind ? n.bind(o) : n;
              }

              o = r;
            }

            o.type = "dblclick", e(o), i = null;
          }
        }

        return t[qt + Ut + n] = r, t[qt + Vt + n] = h, t[qt + "dblclick" + n] = e, t.addEventListener(Ut, r, !1), t.addEventListener(Vt, h, !1), t.addEventListener("dblclick", e, !1), this;
      }

      function Kt(t, e) {
        var n = t[qt + Ut + e],
            i = t[qt + Vt + e],
            o = t[qt + "dblclick" + e];
        return t.removeEventListener(Ut, n, !1), t.removeEventListener(Vt, i, !1), tt || t.removeEventListener("dblclick", o, !1), this;
      }

      var Yt,
          Xt,
          Jt,
          $t,
          Qt,
          te = me(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
          ee = me(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
          ne = "webkitTransition" === ee || "OTransition" === ee ? ee + "End" : "transitionend";

      function ie(t) {
        return "string" == typeof t ? document.getElementById(t) : t;
      }

      function oe(t, e) {
        var n = t.style[e] || t.currentStyle && t.currentStyle[e];

        if ((!n || "auto" === n) && document.defaultView) {
          var i = document.defaultView.getComputedStyle(t, null);
          n = i ? i[e] : null;
        }

        return "auto" === n ? null : n;
      }

      function se(t, e, n) {
        var i = document.createElement(t);
        return i.className = e || "", n && n.appendChild(i), i;
      }

      function ae(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }

      function re(t) {
        for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }
      }

      function he(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }

      function le(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }

      function ue(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);

        var n = _e(t);

        return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
      }

      function ce(t, e) {
        if (void 0 !== t.classList) for (var n = d(e), i = 0, o = n.length; i < o; i++) {
          t.classList.add(n[i]);
        } else if (!ue(t, e)) {
          var s = _e(t);

          pe(t, (s ? s + " " : "") + e);
        }
      }

      function de(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : pe(t, c((" " + _e(t) + " ").replace(" " + e + " ", " ")));
      }

      function pe(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e;
      }

      function _e(t) {
        return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal;
      }

      function fe(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
          var n = !1,
              i = "DXImageTransform.Microsoft.Alpha";

          try {
            n = t.filters.item(i);
          } catch (t) {
            if (1 === e) return;
          }

          e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")";
        }(t, e);
      }

      function me(t) {
        for (var e = document.documentElement.style, n = 0; n < t.length; n++) {
          if (t[n] in e) return t[n];
        }

        return !1;
      }

      function ge(t, e, n) {
        var i = e || new Z(0, 0);
        t.style[te] = (pt ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "");
      }

      function ve(t, e) {
        t._leaflet_pos = e, mt ? ge(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }

      function ye(t) {
        return t._leaflet_pos || new Z(0, 0);
      }

      if ("onselectstart" in document) Yt = function Yt() {
        ke(window, "selectstart", Ae);
      }, Xt = function Xt() {
        Ee(window, "selectstart", Ae);
      };else {
        var xe = me(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        Yt = function Yt() {
          if (xe) {
            var t = document.documentElement.style;
            Jt = t[xe], t[xe] = "none";
          }
        }, Xt = function Xt() {
          xe && (document.documentElement.style[xe] = Jt, Jt = void 0);
        };
      }

      function be() {
        ke(window, "dragstart", Ae);
      }

      function we() {
        Ee(window, "dragstart", Ae);
      }

      function Pe(t) {
        for (; -1 === t.tabIndex;) {
          t = t.parentNode;
        }

        t.style && (Le(), $t = t, Qt = t.style.outline, t.style.outline = "none", ke(window, "keydown", Le));
      }

      function Le() {
        $t && ($t.style.outline = Qt, $t = void 0, Qt = void 0, Ee(window, "keydown", Le));
      }

      function Te(t) {
        do {
          t = t.parentNode;
        } while (!(t.offsetWidth && t.offsetHeight || t === document.body));

        return t;
      }

      function ze(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }

      var Me = (Object.freeze || Object)({
        TRANSFORM: te,
        TRANSITION: ee,
        TRANSITION_END: ne,
        get: ie,
        getStyle: oe,
        create: se,
        remove: ae,
        empty: re,
        toFront: he,
        toBack: le,
        hasClass: ue,
        addClass: ce,
        removeClass: de,
        setClass: pe,
        getClass: _e,
        setOpacity: fe,
        testProp: me,
        setTransform: ge,
        setPosition: ve,
        getPosition: ye,
        disableTextSelection: Yt,
        enableTextSelection: Xt,
        disableImageDrag: be,
        enableImageDrag: we,
        preventOutline: Pe,
        restoreOutline: Le,
        getSizedParentNode: Te,
        getScale: ze
      });

      function ke(t, e, n, i) {
        if ("object" == _typeof(e)) for (var o in e) {
          Se(t, o, e[o], n);
        } else {
          e = d(e);

          for (var s = 0, a = e.length; s < a; s++) {
            Se(t, e[s], n, i);
          }
        }
        return this;
      }

      var Ce = "_leaflet_events";

      function Ee(t, e, n, i) {
        if ("object" == _typeof(e)) for (var o in e) {
          Ze(t, o, e[o], n);
        } else if (e) {
          e = d(e);

          for (var s = 0, a = e.length; s < a; s++) {
            Ze(t, e[s], n, i);
          }
        } else {
          for (var r in t[Ce]) {
            Ze(t, r, t[Ce][r]);
          }

          delete t[Ce];
        }
        return this;
      }

      function Se(t, e, n, i) {
        var o = e + a(n) + (i ? "_" + a(i) : "");
        if (t[Ce] && t[Ce][o]) return this;

        var s = function s(e) {
          return n.call(i || t, e || window.event);
        },
            r = s;

        bt && 0 === e.indexOf("touch") ? Nt(t, e, s, o) : !wt || "dblclick" !== e || !Gt || bt && rt ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1) : "mouseenter" === e || "mouseleave" === e ? (s = function s(e) {
          e = e || window.event, Ve(t, e) && r(e);
        }, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1)) : ("click" === e && nt && (s = function s(t) {
          !function (t, e) {
            var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                i = We && n - We;
            i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? Re(t) : (We = n, e(t));
          }(t, r);
        }), t.addEventListener(e, s, !1)) : "attachEvent" in t && t.attachEvent("on" + e, s) : Gt(t, s, o), t[Ce] = t[Ce] || {}, t[Ce][o] = s;
      }

      function Ze(t, e, n, i) {
        var o = e + a(n) + (i ? "_" + a(i) : ""),
            s = t[Ce] && t[Ce][o];
        if (!s) return this;
        bt && 0 === e.indexOf("touch") ? function (t, e, n) {
          var i = t["_leaflet_" + e + n];
          "touchstart" === e ? t.removeEventListener(St, i, !1) : "touchmove" === e ? t.removeEventListener(Zt, i, !1) : "touchend" === e && (t.removeEventListener(Bt, i, !1), t.removeEventListener(It, i, !1));
        }(t, e, o) : !wt || "dblclick" !== e || !Kt || bt && rt ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s) : Kt(t, o), t[Ce][o] = null;
      }

      function Be(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Ue(t), this;
      }

      function Ie(t) {
        return Se(t, "mousewheel", Be), this;
      }

      function Oe(t) {
        return ke(t, "mousedown touchstart dblclick", Be), Se(t, "click", Fe), this;
      }

      function Ae(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }

      function Re(t) {
        return Ae(t), Be(t), this;
      }

      function De(t, e) {
        if (!e) return new Z(t.clientX, t.clientY);
        var n = ze(e),
            i = n.boundingClientRect;
        return new Z((t.clientX - i.left) / n.x - e.clientLeft, (t.clientY - i.top) / n.y - e.clientTop);
      }

      var Ne = dt && rt ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;

      function je(t) {
        return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ne : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
      }

      var We,
          He = {};

      function Fe(t) {
        He[t.type] = !0;
      }

      function Ue(t) {
        var e = He[t.type];
        return He[t.type] = !1, e;
      }

      function Ve(t, e) {
        var n = e.relatedTarget;
        if (!n) return !0;

        try {
          for (; n && n !== t;) {
            n = n.parentNode;
          }
        } catch (t) {
          return !1;
        }

        return n !== t;
      }

      var qe = (Object.freeze || Object)({
        on: ke,
        off: Ee,
        stopPropagation: Be,
        disableScrollPropagation: Ie,
        disableClickPropagation: Oe,
        preventDefault: Ae,
        stop: Re,
        getMousePosition: De,
        getWheelDelta: je,
        fakeStop: Fe,
        skipped: Ue,
        isExternalTarget: Ve,
        addListener: ke,
        removeListener: Ee
      }),
          Ge = S.extend({
        run: function run(t, e, n, i) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = ye(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
        },
        stop: function stop() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function _animate() {
          this._animId = z(this._animate, this), this._step();
        },
        _step: function _step(t) {
          var e = +new Date() - this._startTime,
              n = 1e3 * this._duration;
          e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function _runFrame(t, e) {
          var n = this._startPos.add(this._offset.multiplyBy(t));

          e && n._round(), ve(this._el, n), this.fire("step");
        },
        _complete: function _complete() {
          M(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function _easeOut(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }),
          Ke = S.extend({
        options: {
          crs: G,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0
        },
        initialize: function initialize(t, e) {
          e = p(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = o(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(j(e.center), e.zoom, {
            reset: !0
          }), this.callInitHooks(), this._zoomAnimated = ee && mt && !Pt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), ke(this._proxy, ne, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        setView: function setView(t, e, i) {
          if (e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(j(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) {
            void 0 !== i.animate && (i.zoom = n({
              animate: i.animate
            }, i.zoom), i.pan = n({
              animate: i.animate,
              duration: i.duration
            }, i.pan));
            var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
            if (o) return clearTimeout(this._sizeTimer), this;
          }

          return this._resetView(t, e), this;
        },
        setZoom: function setZoom(t, e) {
          return this._loaded ? this.setView(this.getCenter(), t, {
            zoom: e
          }) : (this._zoom = t, this);
        },
        zoomIn: function zoomIn(t, e) {
          return t = t || (mt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        zoomOut: function zoomOut(t, e) {
          return t = t || (mt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        setZoomAround: function setZoomAround(t, e, n) {
          var i = this.getZoomScale(e),
              o = this.getSize().divideBy(2),
              s = t instanceof Z ? t : this.latLngToContainerPoint(t),
              a = s.subtract(o).multiplyBy(1 - 1 / i),
              r = this.containerPointToLatLng(o.add(a));
          return this.setView(r, e, {
            zoom: n
          });
        },
        _getBoundsCenterZoom: function _getBoundsCenterZoom(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : D(t);
          var n = I(e.paddingTopLeft || e.padding || [0, 0]),
              i = I(e.paddingBottomRight || e.padding || [0, 0]),
              o = this.getBoundsZoom(t, !1, n.add(i));
          if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
            center: t.getCenter(),
            zoom: o
          };
          var s = i.subtract(n).divideBy(2),
              a = this.project(t.getSouthWest(), o),
              r = this.project(t.getNorthEast(), o),
              h = this.unproject(a.add(r).divideBy(2).add(s), o);
          return {
            center: h,
            zoom: o
          };
        },
        fitBounds: function fitBounds(t, e) {
          if (!(t = D(t)).isValid()) throw new Error("Bounds are not valid.");

          var n = this._getBoundsCenterZoom(t, e);

          return this.setView(n.center, n.zoom, e);
        },
        fitWorld: function fitWorld(t) {
          return this.fitBounds([[-90, -180], [90, 180]], t);
        },
        panTo: function panTo(t, e) {
          return this.setView(t, this._zoom, {
            pan: e
          });
        },
        panBy: function panBy(t, e) {
          if (t = I(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
          if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;

          if (this._panAnim || (this._panAnim = new Ge(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
            ce(this._mapPane, "leaflet-pan-anim");

            var n = this._getMapPanePos().subtract(t).round();

            this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity);
          } else this._rawPanBy(t), this.fire("move").fire("moveend");

          return this;
        },
        flyTo: function flyTo(t, e, n) {
          if (!1 === (n = n || {}).animate || !mt) return this.setView(t, e, n);

          this._stop();

          var i = this.project(this.getCenter()),
              o = this.project(t),
              s = this.getSize(),
              a = this._zoom;
          t = j(t), e = void 0 === e ? a : e;
          var r = Math.max(s.x, s.y),
              h = r * this.getZoomScale(a, e),
              l = o.distanceTo(i) || 1,
              u = 1.42,
              c = u * u;

          function d(t) {
            var e = t ? -1 : 1,
                n = t ? h : r,
                i = h * h - r * r + e * c * c * l * l,
                o = 2 * n * c * l,
                s = i / o,
                a = Math.sqrt(s * s + 1) - s,
                u = a < 1e-9 ? -18 : Math.log(a);
            return u;
          }

          function p(t) {
            return (Math.exp(t) - Math.exp(-t)) / 2;
          }

          function _(t) {
            return (Math.exp(t) + Math.exp(-t)) / 2;
          }

          var f = d(0);

          function m(t) {
            return r * (_(f) * (p(e = f + u * t) / _(e)) - p(f)) / c;
            var e;
          }

          var g = Date.now(),
              v = (d(1) - f) / u,
              y = n.duration ? 1e3 * n.duration : 1e3 * v * .8;
          return this._moveStart(!0, n.noMoveStart), function n() {
            var s = (Date.now() - g) / y,
                h = function (t) {
              return 1 - Math.pow(1 - t, 1.5);
            }(s) * v;

            s <= 1 ? (this._flyToFrame = z(n, this), this._move(this.unproject(i.add(o.subtract(i).multiplyBy(m(h) / l)), a), this.getScaleZoom(r / function (t) {
              return r * (_(f) / _(f + u * t));
            }(h), a), {
              flyTo: !0
            })) : this._move(t, e)._moveEnd(!0);
          }.call(this), this;
        },
        flyToBounds: function flyToBounds(t, e) {
          var n = this._getBoundsCenterZoom(t, e);

          return this.flyTo(n.center, n.zoom, e);
        },
        setMaxBounds: function setMaxBounds(t) {
          return (t = D(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
        },
        setMinZoom: function setMinZoom(t) {
          var e = this.options.minZoom;
          return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
        },
        setMaxZoom: function setMaxZoom(t) {
          var e = this.options.maxZoom;
          return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
        },
        panInsideBounds: function panInsideBounds(t, e) {
          this._enforcingBounds = !0;

          var n = this.getCenter(),
              i = this._limitCenter(n, this._zoom, D(t));

          return n.equals(i) || this.panTo(i, e), this._enforcingBounds = !1, this;
        },
        panInside: function panInside(t, e) {
          var n = I((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
              i = I(e.paddingBottomRight || e.padding || [0, 0]),
              o = this.getCenter(),
              s = this.project(o),
              a = this.project(t),
              r = this.getPixelBounds(),
              h = r.getSize().divideBy(2),
              l = A([r.min.add(n), r.max.subtract(i)]);

          if (!l.contains(a)) {
            this._enforcingBounds = !0;
            var u = s.subtract(a),
                c = I(a.x + u.x, a.y + u.y);
            (a.x < l.min.x || a.x > l.max.x) && (c.x = s.x - u.x, u.x > 0 ? c.x += h.x - n.x : c.x -= h.x - i.x), (a.y < l.min.y || a.y > l.max.y) && (c.y = s.y - u.y, u.y > 0 ? c.y += h.y - n.y : c.y -= h.y - i.y), this.panTo(this.unproject(c), e), this._enforcingBounds = !1;
          }

          return this;
        },
        invalidateSize: function invalidateSize(t) {
          if (!this._loaded) return this;
          t = n({
            animate: !1,
            pan: !0
          }, !0 === t ? {
            animate: !0
          } : t);
          var e = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var i = this.getSize(),
              s = e.divideBy(2).round(),
              a = i.divideBy(2).round(),
              r = s.subtract(a);
          return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: e,
            newSize: i
          })) : this;
        },
        stop: function stop() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        locate: function locate(t) {
          if (t = this._locateOptions = n({
            timeout: 1e4,
            watch: !1
          }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
          var e = o(this._handleGeolocationResponse, this),
              i = o(this._handleGeolocationError, this);
          return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
        },
        stopLocate: function stopLocate() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function _handleGeolocationError(t) {
          var e = t.code,
              n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + n + "."
          });
        },
        _handleGeolocationResponse: function _handleGeolocationResponse(t) {
          var e = t.coords.latitude,
              n = t.coords.longitude,
              i = new N(e, n),
              o = i.toBounds(2 * t.coords.accuracy),
              s = this._locateOptions;

          if (s.setView) {
            var a = this.getBoundsZoom(o);
            this.setView(i, s.maxZoom ? Math.min(a, s.maxZoom) : a);
          }

          var r = {
            latlng: i,
            bounds: o,
            timestamp: t.timestamp
          };

          for (var h in t.coords) {
            "number" == typeof t.coords[h] && (r[h] = t.coords[h]);
          }

          this.fire("locationfound", r);
        },
        addHandler: function addHandler(t, e) {
          if (!e) return this;
          var n = this[t] = new e(this);
          return this._handlers.push(n), this.options[t] && n.enable(), this;
        },
        remove: function remove() {
          if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");

          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch (t) {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }

          var t;

          for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ae(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (M(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) {
            this._layers[t].remove();
          }

          for (t in this._panes) {
            ae(this._panes[t]);
          }

          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        createPane: function createPane(t, e) {
          var n = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
              i = se("div", n, e || this._mapPane);
          return t && (this._panes[t] = i), i;
        },
        getCenter: function getCenter() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        getZoom: function getZoom() {
          return this._zoom;
        },
        getBounds: function getBounds() {
          var t = this.getPixelBounds(),
              e = this.unproject(t.getBottomLeft()),
              n = this.unproject(t.getTopRight());
          return new R(e, n);
        },
        getMinZoom: function getMinZoom() {
          return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        getMaxZoom: function getMaxZoom() {
          return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        getBoundsZoom: function getBoundsZoom(t, e, n) {
          t = D(t), n = I(n || [0, 0]);
          var i = this.getZoom() || 0,
              o = this.getMinZoom(),
              s = this.getMaxZoom(),
              a = t.getNorthWest(),
              r = t.getSouthEast(),
              h = this.getSize().subtract(n),
              l = A(this.project(r, i), this.project(a, i)).getSize(),
              u = mt ? this.options.zoomSnap : 1,
              c = h.x / l.x,
              d = h.y / l.y,
              p = e ? Math.max(c, d) : Math.min(c, d);
          return i = this.getScaleZoom(p, i), u && (i = Math.round(i / (u / 100)) * (u / 100), i = e ? Math.ceil(i / u) * u : Math.floor(i / u) * u), Math.max(o, Math.min(s, i));
        },
        getSize: function getSize() {
          return this._size && !this._sizeChanged || (this._size = new Z(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
        },
        getPixelBounds: function getPixelBounds(t, e) {
          var n = this._getTopLeftPoint(t, e);

          return new O(n, n.add(this.getSize()));
        },
        getPixelOrigin: function getPixelOrigin() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function getPixelWorldBounds(t) {
          return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
        },
        getPane: function getPane(t) {
          return "string" == typeof t ? this._panes[t] : t;
        },
        getPanes: function getPanes() {
          return this._panes;
        },
        getContainer: function getContainer() {
          return this._container;
        },
        getZoomScale: function getZoomScale(t, e) {
          var n = this.options.crs;
          return e = void 0 === e ? this._zoom : e, n.scale(t) / n.scale(e);
        },
        getScaleZoom: function getScaleZoom(t, e) {
          var n = this.options.crs;
          e = void 0 === e ? this._zoom : e;
          var i = n.zoom(t * n.scale(e));
          return isNaN(i) ? 1 / 0 : i;
        },
        project: function project(t, e) {
          return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(j(t), e);
        },
        unproject: function unproject(t, e) {
          return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(I(t), e);
        },
        layerPointToLatLng: function layerPointToLatLng(t) {
          var e = I(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        latLngToLayerPoint: function latLngToLayerPoint(t) {
          var e = this.project(j(t))._round();

          return e._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function wrapLatLng(t) {
          return this.options.crs.wrapLatLng(j(t));
        },
        wrapLatLngBounds: function wrapLatLngBounds(t) {
          return this.options.crs.wrapLatLngBounds(D(t));
        },
        distance: function distance(t, e) {
          return this.options.crs.distance(j(t), j(e));
        },
        containerPointToLayerPoint: function containerPointToLayerPoint(t) {
          return I(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function layerPointToContainerPoint(t) {
          return I(t).add(this._getMapPanePos());
        },
        containerPointToLatLng: function containerPointToLatLng(t) {
          var e = this.containerPointToLayerPoint(I(t));
          return this.layerPointToLatLng(e);
        },
        latLngToContainerPoint: function latLngToContainerPoint(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
        },
        mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
          return De(t, this._container);
        },
        mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        mouseEventToLatLng: function mouseEventToLatLng(t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer: function _initContainer(t) {
          var e = this._container = ie(t);
          if (!e) throw new Error("Map container not found.");
          if (e._leaflet_id) throw new Error("Map container is already initialized.");
          ke(e, "scroll", this._onScroll, this), this._containerId = a(e);
        },
        _initLayout: function _initLayout() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && mt, ce(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (Tt ? " leaflet-retina" : "") + (Q ? " leaflet-oldie" : "") + (lt ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = oe(t, "position");
          "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function _initPanes() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ve(this._mapPane, new Z(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ce(t.markerPane, "leaflet-zoom-hide"), ce(t.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function _resetView(t, e) {
          ve(this._mapPane, new Z(0, 0));
          var n = !this._loaded;
          this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
          var i = this._zoom !== e;
          this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load");
        },
        _moveStart: function _moveStart(t, e) {
          return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
        },
        _move: function _move(t, e, n) {
          void 0 === e && (e = this._zoom);
          var i = this._zoom !== e;
          return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (i || n && n.pinch) && this.fire("zoom", n), this.fire("move", n);
        },
        _moveEnd: function _moveEnd(t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function _stop() {
          return M(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function _rawPanBy(t) {
          ve(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function _getZoomSpan() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function _panInsideMaxBounds() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function _checkIfLoaded() {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function _initEvents(t) {
          this._targets = {}, this._targets[a(this._container)] = this;
          var e = t ? Ee : ke;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), mt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function _onResize() {
          M(this._resizeRequest), this._resizeRequest = z(function () {
            this.invalidateSize({
              debounceMoveend: !0
            });
          }, this);
        },
        _onScroll: function _onScroll() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function _onMoveEnd() {
          var t = this._getMapPanePos();

          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function _findEventTargets(t, e) {
          for (var n, i = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) {
            if ((n = this._targets[a(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
              r = !0;
              break;
            }

            if (n && n.listens(e, !0)) {
              if (o && !Ve(s, t)) break;
              if (i.push(n), o) break;
            }

            if (s === this._container) break;
            s = s.parentNode;
          }

          return i.length || r || o || !Ve(s, t) || (i = [this]), i;
        },
        _handleDOMEvent: function _handleDOMEvent(t) {
          if (this._loaded && !Ue(t)) {
            var e = t.type;
            "mousedown" !== e && "keypress" !== e || Pe(t.target || t.srcElement), this._fireDOMEvent(t, e);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function _fireDOMEvent(t, e, i) {
          if ("click" === t.type) {
            var o = n({}, t);
            o.type = "preclick", this._fireDOMEvent(o, o.type, i);
          }

          if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
            var s = i[0];
            "contextmenu" === e && s.listens(e, !0) && Ae(t);
            var a = {
              originalEvent: t
            };

            if ("keypress" !== t.type) {
              var r = s.getLatLng && (!s._radius || s._radius <= 10);
              a.containerPoint = r ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = r ? s.getLatLng() : this.layerPointToLatLng(a.layerPoint);
            }

            for (var h = 0; h < i.length; h++) {
              if (i[h].fire(e, a, !0), a.originalEvent._stopped || !1 === i[h].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)) return;
            }
          }
        },
        _draggableMoved: function _draggableMoved(t) {
          return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function _clearHandlers() {
          for (var t = 0, e = this._handlers.length; t < e; t++) {
            this._handlers[t].disable();
          }
        },
        whenReady: function whenReady(t, e) {
          return this._loaded ? t.call(e || this, {
            target: this
          }) : this.on("load", t, e), this;
        },
        _getMapPanePos: function _getMapPanePos() {
          return ye(this._mapPane) || new Z(0, 0);
        },
        _moved: function _moved() {
          var t = this._getMapPanePos();

          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function _getTopLeftPoint(t, e) {
          var n = t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
          return n.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function _getNewPixelOrigin(t, e) {
          var n = this.getSize()._divideBy(2);

          return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, n) {
          var i = this._getNewPixelOrigin(n, e);

          return this.project(t, e)._subtract(i);
        },
        _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, e, n) {
          var i = this._getNewPixelOrigin(n, e);

          return A([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)]);
        },
        _getCenterLayerPoint: function _getCenterLayerPoint() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function _getCenterOffset(t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        _limitCenter: function _limitCenter(t, e, n) {
          if (!n) return t;

          var i = this.project(t, e),
              o = this.getSize().divideBy(2),
              s = new O(i.subtract(o), i.add(o)),
              a = this._getBoundsOffset(s, n, e);

          return a.round().equals([0, 0]) ? t : this.unproject(i.add(a), e);
        },
        _limitOffset: function _limitOffset(t, e) {
          if (!e) return t;
          var n = this.getPixelBounds(),
              i = new O(n.min.add(t), n.max.add(t));
          return t.add(this._getBoundsOffset(i, e));
        },
        _getBoundsOffset: function _getBoundsOffset(t, e, n) {
          var i = A(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
              o = i.min.subtract(t.min),
              s = i.max.subtract(t.max),
              a = this._rebound(o.x, -s.x),
              r = this._rebound(o.y, -s.y);

          return new Z(a, r);
        },
        _rebound: function _rebound(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function _limitZoom(t) {
          var e = this.getMinZoom(),
              n = this.getMaxZoom(),
              i = mt ? this.options.zoomSnap : 1;
          return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t));
        },
        _onPanTransitionStep: function _onPanTransitionStep() {
          this.fire("move");
        },
        _onPanTransitionEnd: function _onPanTransitionEnd() {
          de(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function _tryAnimatedPan(t, e) {
          var n = this._getCenterOffset(t)._trunc();

          return !(!0 !== (e && e.animate) && !this.getSize().contains(n) || (this.panBy(n, e), 0));
        },
        _createAnimProxy: function _createAnimProxy() {
          var t = this._proxy = se("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
            var e = te,
                n = this._proxy.style[e];
            ge(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", function () {
            var t = this.getCenter(),
                e = this.getZoom();
            ge(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
          }, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function _destroyAnimProxy() {
          ae(this._proxy), delete this._proxy;
        },
        _catchTransitionEnd: function _catchTransitionEnd(t) {
          this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function _nothingToAnimate() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function _tryAnimatedZoom(t, e, n) {
          if (this._animatingZoom) return !0;
          if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;

          var i = this.getZoomScale(e),
              o = this._getCenterOffset(t)._divideBy(1 - 1 / i);

          return !(!0 !== n.animate && !this.getSize().contains(o) || (z(function () {
            this._moveStart(!0, !1)._animateZoom(t, e, !0);
          }, this), 0));
        },
        _animateZoom: function _animateZoom(t, e, n, i) {
          this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ce(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: i
          }), setTimeout(o(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function _onZoomTransitionEnd() {
          this._animatingZoom && (this._mapPane && de(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), z(function () {
            this._moveEnd(!0);
          }, this));
        }
      }),
          Ye = C.extend({
        options: {
          position: "topright"
        },
        initialize: function initialize(t) {
          p(this, t);
        },
        getPosition: function getPosition() {
          return this.options.position;
        },
        setPosition: function setPosition(t) {
          var e = this._map;
          return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
        },
        getContainer: function getContainer() {
          return this._container;
        },
        addTo: function addTo(t) {
          this.remove(), this._map = t;
          var e = this._container = this.onAdd(t),
              n = this.getPosition(),
              i = t._controlCorners[n];
          return ce(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this;
        },
        remove: function remove() {
          return this._map ? (ae(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this;
        },
        _refocusOnMap: function _refocusOnMap(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }),
          Xe = function Xe(t) {
        return new Ye(t);
      };

      Ke.include({
        addControl: function addControl(t) {
          return t.addTo(this), this;
        },
        removeControl: function removeControl(t) {
          return t.remove(), this;
        },
        _initControlPos: function _initControlPos() {
          var t = this._controlCorners = {},
              e = "leaflet-",
              n = this._controlContainer = se("div", e + "control-container", this._container);

          function i(i, o) {
            var s = e + i + " " + e + o;
            t[i + o] = se("div", s, n);
          }

          i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right");
        },
        _clearControlPos: function _clearControlPos() {
          for (var t in this._controlCorners) {
            ae(this._controlCorners[t]);
          }

          ae(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Je = Ye.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function sortFunction(t, e, n, i) {
            return n < i ? -1 : i < n ? 1 : 0;
          }
        },
        initialize: function initialize(t, e, n) {
          for (var i in p(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) {
            this._addLayer(t[i], i);
          }

          for (i in e) {
            this._addLayer(e[i], i, !0);
          }
        },
        onAdd: function onAdd(t) {
          this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);

          for (var e = 0; e < this._layers.length; e++) {
            this._layers[e].layer.on("add remove", this._onLayerChange, this);
          }

          return this._container;
        },
        addTo: function addTo(t) {
          return Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function onRemove() {
          this._map.off("zoomend", this._checkDisabledLayers, this);

          for (var t = 0; t < this._layers.length; t++) {
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
          }
        },
        addBaseLayer: function addBaseLayer(t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        addOverlay: function addOverlay(t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        removeLayer: function removeLayer(t) {
          t.off("add remove", this._onLayerChange, this);

          var e = this._getLayer(a(t));

          return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
        },
        expand: function expand() {
          ce(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (ce(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : de(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        collapse: function collapse() {
          return de(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function _initLayout() {
          var t = "leaflet-control-layers",
              e = this._container = se("div", t),
              n = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), Oe(e), Ie(e);
          var i = this._section = se("section", t + "-list");
          n && (this._map.on("click", this.collapse, this), nt || ke(e, {
            mouseenter: this.expand,
            mouseleave: this.collapse
          }, this));
          var o = this._layersLink = se("a", t + "-toggle", e);
          o.href = "#", o.title = "Layers", wt ? (ke(o, "click", Re), ke(o, "click", this.expand, this)) : ke(o, "focus", this.expand, this), n || this.expand(), this._baseLayersList = se("div", t + "-base", i), this._separator = se("div", t + "-separator", i), this._overlaysList = se("div", t + "-overlays", i), e.appendChild(i);
        },
        _getLayer: function _getLayer(t) {
          for (var e = 0; e < this._layers.length; e++) {
            if (this._layers[e] && a(this._layers[e].layer) === t) return this._layers[e];
          }
        },
        _addLayer: function _addLayer(t, e, n) {
          this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: t,
            name: e,
            overlay: n
          }), this.options.sortLayers && this._layers.sort(o(function (t, e) {
            return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function _update() {
          if (!this._container) return this;
          re(this._baseLayersList), re(this._overlaysList), this._layerControlInputs = [];
          var t,
              e,
              n,
              i,
              o = 0;

          for (n = 0; n < this._layers.length; n++) {
            i = this._layers[n], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, o += i.overlay ? 0 : 1;
          }

          return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
        },
        _onLayerChange: function _onLayerChange(t) {
          this._handlingClick || this._update();

          var e = this._getLayer(a(t.target)),
              n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;

          n && this._map.fire(n, e);
        },
        _createRadioElement: function _createRadioElement(t, e) {
          var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
              i = document.createElement("div");
          return i.innerHTML = n, i.firstChild;
        },
        _addItem: function _addItem(t) {
          var e,
              n = document.createElement("label"),
              i = this._map.hasLayer(t.layer);

          t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers", i), this._layerControlInputs.push(e), e.layerId = a(t.layer), ke(e, "click", this._onInputClick, this);
          var o = document.createElement("span");
          o.innerHTML = " " + t.name;
          var s = document.createElement("div");
          n.appendChild(s), s.appendChild(e), s.appendChild(o);
          var r = t.overlay ? this._overlaysList : this._baseLayersList;
          return r.appendChild(n), this._checkDisabledLayers(), n;
        },
        _onInputClick: function _onInputClick() {
          var t,
              e,
              n = this._layerControlInputs,
              i = [],
              o = [];
          this._handlingClick = !0;

          for (var s = n.length - 1; s >= 0; s--) {
            t = n[s], e = this._getLayer(t.layerId).layer, t.checked ? i.push(e) : t.checked || o.push(e);
          }

          for (s = 0; s < o.length; s++) {
            this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          }

          for (s = 0; s < i.length; s++) {
            this._map.hasLayer(i[s]) || this._map.addLayer(i[s]);
          }

          this._handlingClick = !1, this._refocusOnMap();
        },
        _checkDisabledLayers: function _checkDisabledLayers() {
          for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), o = n.length - 1; o >= 0; o--) {
            t = n[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && i < e.options.minZoom || void 0 !== e.options.maxZoom && i > e.options.maxZoom;
          }
        },
        _expandIfNotCollapsed: function _expandIfNotCollapsed() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expand: function _expand() {
          return this.expand();
        },
        _collapse: function _collapse() {
          return this.collapse();
        }
      }),
          $e = Ye.extend({
        options: {
          position: "topleft",
          zoomInText: "+",
          zoomInTitle: "Zoom in",
          zoomOutText: "&#x2212;",
          zoomOutTitle: "Zoom out"
        },
        onAdd: function onAdd(t) {
          var e = "leaflet-control-zoom",
              n = se("div", e + " leaflet-bar"),
              i = this.options;
          return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn), this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n;
        },
        onRemove: function onRemove(t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function disable() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function enable() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function _zoomIn(t) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function _zoomOut(t) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function _createButton(t, e, n, i, o) {
          var s = se("a", n, i);
          return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Oe(s), ke(s, "click", Re), ke(s, "click", o, this), ke(s, "click", this._refocusOnMap, this), s;
        },
        _updateDisabled: function _updateDisabled() {
          var t = this._map,
              e = "leaflet-disabled";
          de(this._zoomInButton, e), de(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && ce(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && ce(this._zoomInButton, e);
        }
      });
      Ke.mergeOptions({
        zoomControl: !0
      }), Ke.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new $e(), this.addControl(this.zoomControl));
      });
      var Qe = Ye.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0
        },
        onAdd: function onAdd(t) {
          var e = se("div", "leaflet-control-scale"),
              n = this.options;
          return this._addScales(n, "leaflet-control-scale-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e;
        },
        onRemove: function onRemove(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function _addScales(t, e, n) {
          t.metric && (this._mScale = se("div", e, n)), t.imperial && (this._iScale = se("div", e, n));
        },
        _update: function _update() {
          var t = this._map,
              e = t.getSize().y / 2,
              n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));

          this._updateScales(n);
        },
        _updateScales: function _updateScales(t) {
          this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function _updateMetric(t) {
          var e = this._getRoundNum(t),
              n = e < 1e3 ? e + " m" : e / 1e3 + " km";

          this._updateScale(this._mScale, n, e / t);
        },
        _updateImperial: function _updateImperial(t) {
          var e,
              n,
              i,
              o = 3.2808399 * t;
          o > 5280 ? (e = o / 5280, n = this._getRoundNum(e), this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(o), this._updateScale(this._iScale, i + " ft", i / o));
        },
        _updateScale: function _updateScale(t, e, n) {
          t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e;
        },
        _getRoundNum: function _getRoundNum(t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1),
              n = t / e;
          return e * (n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1);
        }
      }),
          tn = Ye.extend({
        options: {
          position: "bottomright",
          prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function initialize(t) {
          p(this, t), this._attributions = {};
        },
        onAdd: function onAdd(t) {
          for (var e in t.attributionControl = this, this._container = se("div", "leaflet-control-attribution"), Oe(this._container), t._layers) {
            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
          }

          return this._update(), this._container;
        },
        setPrefix: function setPrefix(t) {
          return this.options.prefix = t, this._update(), this;
        },
        addAttribution: function addAttribution(t) {
          return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
        },
        removeAttribution: function removeAttribution(t) {
          return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
        },
        _update: function _update() {
          if (this._map) {
            var t = [];

            for (var e in this._attributions) {
              this._attributions[e] && t.push(e);
            }

            var n = [];
            this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ");
          }
        }
      });
      Ke.mergeOptions({
        attributionControl: !0
      }), Ke.addInitHook(function () {
        this.options.attributionControl && new tn().addTo(this);
      }), Ye.Layers = Je, Ye.Zoom = $e, Ye.Scale = Qe, Ye.Attribution = tn, Xe.layers = function (t, e, n) {
        return new Je(t, e, n);
      }, Xe.zoom = function (t) {
        return new $e(t);
      }, Xe.scale = function (t) {
        return new Qe(t);
      }, Xe.attribution = function (t) {
        return new tn(t);
      };
      var en = C.extend({
        initialize: function initialize(t) {
          this._map = t;
        },
        enable: function enable() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        disable: function disable() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        enabled: function enabled() {
          return !!this._enabled;
        }
      });

      en.addTo = function (t, e) {
        return t.addHandler(e, this), this;
      };

      var nn,
          on = {
        Events: E
      },
          sn = wt ? "touchstart mousedown" : "mousedown",
          an = {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
      },
          rn = {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
      },
          hn = S.extend({
        options: {
          clickTolerance: 3
        },
        initialize: function initialize(t, e, n, i) {
          p(this, i), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n;
        },
        enable: function enable() {
          this._enabled || (ke(this._dragStartTarget, sn, this._onDown, this), this._enabled = !0);
        },
        disable: function disable() {
          this._enabled && (hn._dragging === this && this.finishDrag(), Ee(this._dragStartTarget, sn, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function _onDown(t) {
          if (!t._simulated && this._enabled && (this._moved = !1, !ue(this._element, "leaflet-zoom-anim") && !(hn._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (hn._dragging = this, this._preventOutline && Pe(this._element), be(), Yt(), this._moving)))) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t,
                n = Te(this._element);
            this._startPoint = new Z(e.clientX, e.clientY), this._parentScale = ze(n), ke(document, rn[t.type], this._onMove, this), ke(document, an[t.type], this._onUp, this);
          }
        },
        _onMove: function _onMove(t) {
          if (!t._simulated && this._enabled) if (t.touches && t.touches.length > 1) this._moved = !0;else {
            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                n = new Z(e.clientX, e.clientY)._subtract(this._startPoint);

            (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x, n.y /= this._parentScale.y, Ae(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ye(this._element).subtract(n), ce(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ce(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, M(this._animRequest), this._lastEvent = t, this._animRequest = z(this._updatePosition, this, !0)));
          }
        },
        _updatePosition: function _updatePosition() {
          var t = {
            originalEvent: this._lastEvent
          };
          this.fire("predrag", t), ve(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function _onUp(t) {
          !t._simulated && this._enabled && this.finishDrag();
        },
        finishDrag: function finishDrag() {
          for (var t in de(document.body, "leaflet-dragging"), this._lastTarget && (de(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), rn) {
            Ee(document, rn[t], this._onMove, this), Ee(document, an[t], this._onUp, this);
          }

          we(), Xt(), this._moved && this._moving && (M(this._animRequest), this.fire("dragend", {
            distance: this._newPos.distanceTo(this._startPos)
          })), this._moving = !1, hn._dragging = !1;
        }
      });

      function ln(t, e) {
        if (!e || !t.length) return t.slice();
        var n = e * e;
        return t = function (t, e) {
          var n = t.length,
              i = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(n);
          i[0] = i[n - 1] = 1, function t(e, n, i, o, s) {
            var a,
                r,
                h,
                l = 0;

            for (r = o + 1; r <= s - 1; r++) {
              (h = _n(e[r], e[o], e[s], !0)) > l && (a = r, l = h);
            }

            l > i && (n[a] = 1, t(e, n, i, o, a), t(e, n, i, a, s));
          }(t, i, e, 0, n - 1);
          var o,
              s = [];

          for (o = 0; o < n; o++) {
            i[o] && s.push(t[o]);
          }

          return s;
        }(t = function (t, e) {
          for (var n = [t[0]], i = 1, o = 0, s = t.length; i < s; i++) {
            a = t[i], r = t[o], h = void 0, l = void 0, h = r.x - a.x, l = r.y - a.y, h * h + l * l > e && (n.push(t[i]), o = i);
          }

          var a, r, h, l;
          return o < s - 1 && n.push(t[s - 1]), n;
        }(t, n), n);
      }

      function un(t, e, n) {
        return Math.sqrt(_n(t, e, n, !0));
      }

      function cn(t, e, n, i, o) {
        var s,
            a,
            r,
            h = i ? nn : pn(t, n),
            l = pn(e, n);

        for (nn = l;;) {
          if (!(h | l)) return [t, e];
          if (h & l) return !1;
          a = dn(t, e, s = h || l, n, o), r = pn(a, n), s === h ? (t = a, h = r) : (e = a, l = r);
        }
      }

      function dn(t, e, n, i, o) {
        var s,
            a,
            r = e.x - t.x,
            h = e.y - t.y,
            l = i.min,
            u = i.max;
        return 8 & n ? (s = t.x + r * (u.y - t.y) / h, a = u.y) : 4 & n ? (s = t.x + r * (l.y - t.y) / h, a = l.y) : 2 & n ? (s = u.x, a = t.y + h * (u.x - t.x) / r) : 1 & n && (s = l.x, a = t.y + h * (l.x - t.x) / r), new Z(s, a, o);
      }

      function pn(t, e) {
        var n = 0;
        return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n;
      }

      function _n(t, e, n, i) {
        var o,
            s = e.x,
            a = e.y,
            r = n.x - s,
            h = n.y - a,
            l = r * r + h * h;
        return l > 0 && ((o = ((t.x - s) * r + (t.y - a) * h) / l) > 1 ? (s = n.x, a = n.y) : o > 0 && (s += r * o, a += h * o)), r = t.x - s, h = t.y - a, i ? r * r + h * h : new Z(s, a);
      }

      function fn(t) {
        return !g(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
      }

      function mn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), fn(t);
      }

      var gn = (Object.freeze || Object)({
        simplify: ln,
        pointToSegmentDistance: un,
        closestPointOnSegment: function closestPointOnSegment(t, e, n) {
          return _n(t, e, n);
        },
        clipSegment: cn,
        _getEdgeIntersection: dn,
        _getBitCode: pn,
        _sqClosestPointOnSegment: _n,
        isFlat: fn,
        _flat: mn
      });

      function vn(t, e, n) {
        var i,
            o,
            s,
            a,
            r,
            h,
            l,
            u,
            c,
            d = [1, 4, 2, 8];

        for (o = 0, l = t.length; o < l; o++) {
          t[o]._code = pn(t[o], e);
        }

        for (a = 0; a < 4; a++) {
          for (u = d[a], i = [], o = 0, l = t.length, s = l - 1; o < l; s = o++) {
            r = t[o], h = t[s], r._code & u ? h._code & u || ((c = dn(h, r, u, e, n))._code = pn(c, e), i.push(c)) : (h._code & u && ((c = dn(h, r, u, e, n))._code = pn(c, e), i.push(c)), i.push(r));
          }

          t = i;
        }

        return t;
      }

      var yn = (Object.freeze || Object)({
        clipPolygon: vn
      }),
          xn = {
        project: function project(t) {
          return new Z(t.lng, t.lat);
        },
        unproject: function unproject(t) {
          return new N(t.y, t.x);
        },
        bounds: new O([-180, -90], [180, 90])
      },
          bn = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new O([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
        project: function project(t) {
          var e = Math.PI / 180,
              n = this.R,
              i = t.lat * e,
              o = this.R_MINOR / n,
              s = Math.sqrt(1 - o * o),
              a = s * Math.sin(i),
              r = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - a) / (1 + a), s / 2);
          return i = -n * Math.log(Math.max(r, 1e-10)), new Z(t.lng * e * n, i);
        },
        unproject: function unproject(t) {
          for (var e, n = 180 / Math.PI, i = this.R, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / i), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++) {
            e = s * Math.sin(r), e = Math.pow((1 - e) / (1 + e), s / 2), l = Math.PI / 2 - 2 * Math.atan(a * e) - r, r += l;
          }

          return new N(r * n, t.x * n / i);
        }
      },
          wn = (Object.freeze || Object)({
        LonLat: xn,
        Mercator: bn,
        SphericalMercator: U
      }),
          Pn = n({}, F, {
        code: "EPSG:3395",
        projection: bn,
        transformation: function () {
          var t = .5 / (Math.PI * bn.R);
          return q(t, .5, -t, .5);
        }()
      }),
          Ln = n({}, F, {
        code: "EPSG:4326",
        projection: xn,
        transformation: q(1 / 180, 1, -1 / 180, .5)
      }),
          Tn = n({}, H, {
        projection: xn,
        transformation: q(1, 0, -1, 0),
        scale: function scale(t) {
          return Math.pow(2, t);
        },
        zoom: function zoom(t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function distance(t, e) {
          var n = e.lng - t.lng,
              i = e.lat - t.lat;
          return Math.sqrt(n * n + i * i);
        },
        infinite: !0
      });
      H.Earth = F, H.EPSG3395 = Pn, H.EPSG3857 = G, H.EPSG900913 = K, H.EPSG4326 = Ln, H.Simple = Tn;
      var zn = S.extend({
        options: {
          pane: "overlayPane",
          attribution: null,
          bubblingMouseEvents: !0
        },
        addTo: function addTo(t) {
          return t.addLayer(this), this;
        },
        remove: function remove() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        removeFrom: function removeFrom(t) {
          return t && t.removeLayer(this), this;
        },
        getPane: function getPane(t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget: function addInteractiveTarget(t) {
          return this._map._targets[a(t)] = this, this;
        },
        removeInteractiveTarget: function removeInteractiveTarget(t) {
          return delete this._map._targets[a(t)], this;
        },
        getAttribution: function getAttribution() {
          return this.options.attribution;
        },
        _layerAdd: function _layerAdd(t) {
          var e = t.target;

          if (e.hasLayer(this)) {
            if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
              var n = this.getEvents();
              e.on(n, this), this.once("remove", function () {
                e.off(n, this);
              }, this);
            }

            this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
              layer: this
            });
          }
        }
      });
      Ke.include({
        addLayer: function addLayer(t) {
          if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
          var e = a(t);
          return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
        },
        removeLayer: function removeLayer(t) {
          var e = a(t);
          return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
            layer: t
          }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
        },
        hasLayer: function hasLayer(t) {
          return !!t && a(t) in this._layers;
        },
        eachLayer: function eachLayer(t, e) {
          for (var n in this._layers) {
            t.call(e, this._layers[n]);
          }

          return this;
        },
        _addLayers: function _addLayers(t) {
          t = t ? g(t) ? t : [t] : [];

          for (var e = 0, n = t.length; e < n; e++) {
            this.addLayer(t[e]);
          }
        },
        _addZoomLimit: function _addZoomLimit(t) {
          !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[a(t)] = t, this._updateZoomLevels());
        },
        _removeZoomLimit: function _removeZoomLimit(t) {
          var e = a(t);
          this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
        },
        _updateZoomLevels: function _updateZoomLevels() {
          var t = 1 / 0,
              e = -1 / 0,
              n = this._getZoomSpan();

          for (var i in this._zoomBoundLayers) {
            var o = this._zoomBoundLayers[i].options;
            t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom);
          }

          this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Mn = zn.extend({
        initialize: function initialize(t, e) {
          var n, i;
          if (p(this, e), this._layers = {}, t) for (n = 0, i = t.length; n < i; n++) {
            this.addLayer(t[n]);
          }
        },
        addLayer: function addLayer(t) {
          var e = this.getLayerId(t);
          return this._layers[e] = t, this._map && this._map.addLayer(t), this;
        },
        removeLayer: function removeLayer(t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
        },
        hasLayer: function hasLayer(t) {
          return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
        },
        clearLayers: function clearLayers() {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function invoke(t) {
          var e,
              n,
              i = Array.prototype.slice.call(arguments, 1);

          for (e in this._layers) {
            (n = this._layers[e])[t] && n[t].apply(n, i);
          }

          return this;
        },
        onAdd: function onAdd(t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function onRemove(t) {
          this.eachLayer(t.removeLayer, t);
        },
        eachLayer: function eachLayer(t, e) {
          for (var n in this._layers) {
            t.call(e, this._layers[n]);
          }

          return this;
        },
        getLayer: function getLayer(t) {
          return this._layers[t];
        },
        getLayers: function getLayers() {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        setZIndex: function setZIndex(t) {
          return this.invoke("setZIndex", t);
        },
        getLayerId: function getLayerId(t) {
          return a(t);
        }
      }),
          kn = Mn.extend({
        addLayer: function addLayer(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), Mn.prototype.addLayer.call(this, t), this.fire("layeradd", {
            layer: t
          }));
        },
        removeLayer: function removeLayer(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Mn.prototype.removeLayer.call(this, t), this.fire("layerremove", {
            layer: t
          })) : this;
        },
        setStyle: function setStyle(t) {
          return this.invoke("setStyle", t);
        },
        bringToFront: function bringToFront() {
          return this.invoke("bringToFront");
        },
        bringToBack: function bringToBack() {
          return this.invoke("bringToBack");
        },
        getBounds: function getBounds() {
          var t = new R();

          for (var e in this._layers) {
            var n = this._layers[e];
            t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
          }

          return t;
        }
      }),
          Cn = C.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0]
        },
        initialize: function initialize(t) {
          p(this, t);
        },
        createIcon: function createIcon(t) {
          return this._createIcon("icon", t);
        },
        createShadow: function createShadow(t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function _createIcon(t, e) {
          var n = this._getIconUrl(t);

          if (!n) {
            if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }

          var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);

          return this._setIconStyles(i, t), i;
        },
        _setIconStyles: function _setIconStyles(t, e) {
          var n = this.options,
              i = n[e + "Size"];
          "number" == typeof i && (i = [i, i]);
          var o = I(i),
              s = I("shadow" === e && n.shadowAnchor || n.iconAnchor || o && o.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (n.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
        },
        _createImg: function _createImg(t, e) {
          return (e = e || document.createElement("img")).src = t, e;
        },
        _getIconUrl: function _getIconUrl(t) {
          return Tt && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      }),
          En = Cn.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function _getIconUrl(t) {
          return En.imagePath || (En.imagePath = this._detectIconPath()), (this.options.imagePath || En.imagePath) + Cn.prototype._getIconUrl.call(this, t);
        },
        _detectIconPath: function _detectIconPath() {
          var t = se("div", "leaflet-default-icon-path", document.body),
              e = oe(t, "background-image") || oe(t, "backgroundImage");
          return document.body.removeChild(t), e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
        }
      }),
          Sn = en.extend({
        initialize: function initialize(t) {
          this._marker = t;
        },
        addHooks: function addHooks() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new hn(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), ce(t, "leaflet-marker-draggable");
        },
        removeHooks: function removeHooks() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && de(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function moved() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function _adjustPan(t) {
          var e = this._marker,
              n = e._map,
              i = this._marker.options.autoPanSpeed,
              o = this._marker.options.autoPanPadding,
              s = ye(e._icon),
              a = n.getPixelBounds(),
              r = n.getPixelOrigin(),
              h = A(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));

          if (!h.contains(s)) {
            var l = I((Math.max(h.max.x, s.x) - h.max.x) / (a.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (a.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (a.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (a.min.y - h.min.y)).multiplyBy(i);
            n.panBy(l, {
              animate: !1
            }), this._draggable._newPos._add(l), this._draggable._startPos._add(l), ve(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = z(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function _onDragStart() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart");
        },
        _onPreDrag: function _onPreDrag(t) {
          this._marker.options.autoPan && (M(this._panRequest), this._panRequest = z(this._adjustPan.bind(this, t)));
        },
        _onDrag: function _onDrag(t) {
          var e = this._marker,
              n = e._shadow,
              i = ye(e._icon),
              o = e._map.layerPointToLatLng(i);

          n && ve(n, i), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function _onDragEnd(t) {
          M(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }),
          Zn = zn.extend({
        options: {
          icon: new En(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          bubblingMouseEvents: !1,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10
        },
        initialize: function initialize(t, e) {
          p(this, e), this._latlng = j(t);
        },
        onAdd: function onAdd(t) {
          this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function onRemove(t) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function getEvents() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        getLatLng: function getLatLng() {
          return this._latlng;
        },
        setLatLng: function setLatLng(t) {
          var e = this._latlng;
          return this._latlng = j(t), this.update(), this.fire("move", {
            oldLatLng: e,
            latlng: this._latlng
          });
        },
        setZIndexOffset: function setZIndexOffset(t) {
          return this.options.zIndexOffset = t, this.update();
        },
        setIcon: function setIcon(t) {
          return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function getElement() {
          return this._icon;
        },
        update: function update() {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();

            this._setPos(t);
          }

          return this;
        },
        _initIcon: function _initIcon() {
          var t = this.options,
              e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
              n = t.icon.createIcon(this._icon),
              i = !1;
          n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), "IMG" === n.tagName && (n.alt = t.alt || "")), ce(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          });
          var o = t.icon.createShadow(this._shadow),
              s = !1;
          o !== this._shadow && (this._removeShadow(), s = !0), o && (ce(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow);
        },
        _removeIcon: function _removeIcon() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), ae(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function _removeShadow() {
          this._shadow && ae(this._shadow), this._shadow = null;
        },
        _setPos: function _setPos(t) {
          ve(this._icon, t), this._shadow && ve(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function _updateZIndex(t) {
          this._icon.style.zIndex = this._zIndex + t;
        },
        _animateZoom: function _animateZoom(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

          this._setPos(e);
        },
        _initInteraction: function _initInteraction() {
          if (this.options.interactive && (ce(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Sn)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Sn(this), t && this.dragging.enable();
          }
        },
        setOpacity: function setOpacity(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function _updateOpacity() {
          var t = this.options.opacity;
          fe(this._icon, t), this._shadow && fe(this._shadow, t);
        },
        _bringToFront: function _bringToFront() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function _resetZIndex() {
          this._updateZIndex(0);
        },
        _getPopupAnchor: function _getPopupAnchor() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function _getTooltipAnchor() {
          return this.options.icon.options.tooltipAnchor;
        }
      }),
          Bn = zn.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: .2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0
        },
        beforeAdd: function beforeAdd(t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function onAdd() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function onRemove() {
          this._renderer._removePath(this);
        },
        redraw: function redraw() {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function setStyle(t) {
          return p(this, t), this._renderer && this._renderer._updateStyle(this), this;
        },
        bringToFront: function bringToFront() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function bringToBack() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function getElement() {
          return this._path;
        },
        _reset: function _reset() {
          this._project(), this._update();
        },
        _clickTolerance: function _clickTolerance() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
        }
      }),
          In = Bn.extend({
        options: {
          fill: !0,
          radius: 10
        },
        initialize: function initialize(t, e) {
          p(this, e), this._latlng = j(t), this._radius = this.options.radius;
        },
        setLatLng: function setLatLng(t) {
          return this._latlng = j(t), this.redraw(), this.fire("move", {
            latlng: this._latlng
          });
        },
        getLatLng: function getLatLng() {
          return this._latlng;
        },
        setRadius: function setRadius(t) {
          return this.options.radius = this._radius = t, this.redraw();
        },
        getRadius: function getRadius() {
          return this._radius;
        },
        setStyle: function setStyle(t) {
          var e = t && t.radius || this._radius;
          return Bn.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function _project() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function _updateBounds() {
          var t = this._radius,
              e = this._radiusY || t,
              n = this._clickTolerance(),
              i = [t + n, e + n];

          this._pxBounds = new O(this._point.subtract(i), this._point.add(i));
        },
        _update: function _update() {
          this._map && this._updatePath();
        },
        _updatePath: function _updatePath() {
          this._renderer._updateCircle(this);
        },
        _empty: function _empty() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        _containsPoint: function _containsPoint(t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      }),
          On = In.extend({
        initialize: function initialize(t, e, i) {
          if ("number" == typeof e && (e = n({}, i, {
            radius: e
          })), p(this, e), this._latlng = j(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        setRadius: function setRadius(t) {
          return this._mRadius = t, this.redraw();
        },
        getRadius: function getRadius() {
          return this._mRadius;
        },
        getBounds: function getBounds() {
          var t = [this._radius, this._radiusY || this._radius];
          return new R(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
        },
        setStyle: Bn.prototype.setStyle,
        _project: function _project() {
          var t = this._latlng.lng,
              e = this._latlng.lat,
              n = this._map,
              i = n.options.crs;

          if (i.distance === F.distance) {
            var o = Math.PI / 180,
                s = this._mRadius / F.R / o,
                a = n.project([e + s, t]),
                r = n.project([e - s, t]),
                h = a.add(r).divideBy(2),
                l = n.unproject(h).lat,
                u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))) / o;
            (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(n.getPixelOrigin()), this._radius = isNaN(u) ? 0 : h.x - n.project([l, t - u]).x, this._radiusY = h.y - a.y;
          } else {
            var c = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(c).x;
          }

          this._updateBounds();
        }
      }),
          An = Bn.extend({
        options: {
          smoothFactor: 1,
          noClip: !1
        },
        initialize: function initialize(t, e) {
          p(this, e), this._setLatLngs(t);
        },
        getLatLngs: function getLatLngs() {
          return this._latlngs;
        },
        setLatLngs: function setLatLngs(t) {
          return this._setLatLngs(t), this.redraw();
        },
        isEmpty: function isEmpty() {
          return !this._latlngs.length;
        },
        closestLayerPoint: function closestLayerPoint(t) {
          for (var e, n, i = 1 / 0, o = null, s = _n, a = 0, r = this._parts.length; a < r; a++) {
            for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
              e = h[l - 1], n = h[l];
              var c = s(t, e, n, !0);
              c < i && (i = c, o = s(t, e, n));
            }
          }

          return o && (o.distance = Math.sqrt(i)), o;
        },
        getCenter: function getCenter() {
          if (!this._map) throw new Error("Must add layer to map before using getCenter()");
          var t,
              e,
              n,
              i,
              o,
              s,
              a,
              r = this._rings[0],
              h = r.length;
          if (!h) return null;

          for (t = 0, e = 0; t < h - 1; t++) {
            e += r[t].distanceTo(r[t + 1]) / 2;
          }

          if (0 === e) return this._map.layerPointToLatLng(r[0]);

          for (t = 0, i = 0; t < h - 1; t++) {
            if (o = r[t], s = r[t + 1], n = o.distanceTo(s), (i += n) > e) return a = (i - e) / n, this._map.layerPointToLatLng([s.x - a * (s.x - o.x), s.y - a * (s.y - o.y)]);
          }
        },
        getBounds: function getBounds() {
          return this._bounds;
        },
        addLatLng: function addLatLng(t, e) {
          return e = e || this._defaultShape(), t = j(t), e.push(t), this._bounds.extend(t), this.redraw();
        },
        _setLatLngs: function _setLatLngs(t) {
          this._bounds = new R(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function _defaultShape() {
          return fn(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        _convertLatLngs: function _convertLatLngs(t) {
          for (var e = [], n = fn(t), i = 0, o = t.length; i < o; i++) {
            n ? (e[i] = j(t[i]), this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
          }

          return e;
        },
        _project: function _project() {
          var t = new O();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);

          var e = this._clickTolerance(),
              n = new Z(e, e);

          this._bounds.isValid() && t.isValid() && (t.min._subtract(n), t.max._add(n), this._pxBounds = t);
        },
        _projectLatlngs: function _projectLatlngs(t, e, n) {
          var i,
              o,
              s = t[0] instanceof N,
              a = t.length;

          if (s) {
            for (o = [], i = 0; i < a; i++) {
              o[i] = this._map.latLngToLayerPoint(t[i]), n.extend(o[i]);
            }

            e.push(o);
          } else for (i = 0; i < a; i++) {
            this._projectLatlngs(t[i], e, n);
          }
        },
        _clipPoints: function _clipPoints() {
          var t = this._renderer._bounds;
          if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else {
            var e,
                n,
                i,
                o,
                s,
                a,
                r,
                h = this._parts;

            for (e = 0, i = 0, o = this._rings.length; e < o; e++) {
              for (r = this._rings[e], n = 0, s = r.length; n < s - 1; n++) {
                (a = cn(r[n], r[n + 1], t, n, !0)) && (h[i] = h[i] || [], h[i].push(a[0]), a[1] === r[n + 1] && n !== s - 2 || (h[i].push(a[1]), i++));
              }
            }
          }
        },
        _simplifyPoints: function _simplifyPoints() {
          for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++) {
            t[n] = ln(t[n], e);
          }
        },
        _update: function _update() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function _updatePath() {
          this._renderer._updatePoly(this);
        },
        _containsPoint: function _containsPoint(t, e) {
          var n,
              i,
              o,
              s,
              a,
              r,
              h = this._clickTolerance();

          if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

          for (n = 0, s = this._parts.length; n < s; n++) {
            for (r = this._parts[n], i = 0, a = r.length, o = a - 1; i < a; o = i++) {
              if ((e || 0 !== i) && un(t, r[o], r[i]) <= h) return !0;
            }
          }

          return !1;
        }
      });
      An._flat = mn;
      var Rn = An.extend({
        options: {
          fill: !0
        },
        isEmpty: function isEmpty() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        getCenter: function getCenter() {
          if (!this._map) throw new Error("Must add layer to map before using getCenter()");
          var t,
              e,
              n,
              i,
              o,
              s,
              a,
              r,
              h,
              l = this._rings[0],
              u = l.length;
          if (!u) return null;

          for (s = a = r = 0, t = 0, e = u - 1; t < u; e = t++) {
            n = l[t], i = l[e], o = n.y * i.x - i.y * n.x, a += (n.x + i.x) * o, r += (n.y + i.y) * o, s += 3 * o;
          }

          return h = 0 === s ? l[0] : [a / s, r / s], this._map.layerPointToLatLng(h);
        },
        _convertLatLngs: function _convertLatLngs(t) {
          var e = An.prototype._convertLatLngs.call(this, t),
              n = e.length;

          return n >= 2 && e[0] instanceof N && e[0].equals(e[n - 1]) && e.pop(), e;
        },
        _setLatLngs: function _setLatLngs(t) {
          An.prototype._setLatLngs.call(this, t), fn(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function _defaultShape() {
          return fn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function _clipPoints() {
          var t = this._renderer._bounds,
              e = this.options.weight,
              n = new Z(e, e);
          if (t = new O(t.min.subtract(n), t.max.add(n)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var i, o = 0, s = this._rings.length; o < s; o++) {
            (i = vn(this._rings[o], t, !0)).length && this._parts.push(i);
          }
        },
        _updatePath: function _updatePath() {
          this._renderer._updatePoly(this, !0);
        },
        _containsPoint: function _containsPoint(t) {
          var e,
              n,
              i,
              o,
              s,
              a,
              r,
              h,
              l = !1;
          if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

          for (o = 0, r = this._parts.length; o < r; o++) {
            for (e = this._parts[o], s = 0, h = e.length, a = h - 1; s < h; a = s++) {
              n = e[s], i = e[a], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (l = !l);
            }
          }

          return l || An.prototype._containsPoint.call(this, t, !0);
        }
      }),
          Dn = kn.extend({
        initialize: function initialize(t, e) {
          p(this, e), this._layers = {}, t && this.addData(t);
        },
        addData: function addData(t) {
          var e,
              n,
              i,
              o = g(t) ? t : t.features;

          if (o) {
            for (e = 0, n = o.length; e < n; e++) {
              ((i = o[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
            }

            return this;
          }

          var s = this.options;
          if (s.filter && !s.filter(t)) return this;
          var a = Nn(t, s);
          return a ? (a.feature = Vn(t), a.defaultOptions = a.options, this.resetStyle(a), s.onEachFeature && s.onEachFeature(t, a), this.addLayer(a)) : this;
        },
        resetStyle: function resetStyle(t) {
          return t.options = n({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this;
        },
        setStyle: function setStyle(t) {
          return this.eachLayer(function (e) {
            this._setLayerStyle(e, t);
          }, this);
        },
        _setLayerStyle: function _setLayerStyle(t, e) {
          "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e);
        }
      });

      function Nn(t, e) {
        var n,
            i,
            o,
            s,
            a = "Feature" === t.type ? t.geometry : t,
            r = a ? a.coordinates : null,
            h = [],
            l = e && e.pointToLayer,
            u = e && e.coordsToLatLng || jn;
        if (!r && !a) return null;

        switch (a.type) {
          case "Point":
            return n = u(r), l ? l(t, n) : new Zn(n);

          case "MultiPoint":
            for (o = 0, s = r.length; o < s; o++) {
              n = u(r[o]), h.push(l ? l(t, n) : new Zn(n));
            }

            return new kn(h);

          case "LineString":
          case "MultiLineString":
            return i = Wn(r, "LineString" === a.type ? 0 : 1, u), new An(i, e);

          case "Polygon":
          case "MultiPolygon":
            return i = Wn(r, "Polygon" === a.type ? 1 : 2, u), new Rn(i, e);

          case "GeometryCollection":
            for (o = 0, s = a.geometries.length; o < s; o++) {
              var c = Nn({
                geometry: a.geometries[o],
                type: "Feature",
                properties: t.properties
              }, e);
              c && h.push(c);
            }

            return new kn(h);

          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }

      function jn(t) {
        return new N(t[1], t[0], t[2]);
      }

      function Wn(t, e, n) {
        for (var i, o = [], s = 0, a = t.length; s < a; s++) {
          i = e ? Wn(t[s], e - 1, n) : (n || jn)(t[s]), o.push(i);
        }

        return o;
      }

      function Hn(t, e) {
        return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)];
      }

      function Fn(t, e, n, i) {
        for (var o = [], s = 0, a = t.length; s < a; s++) {
          o.push(e ? Fn(t[s], e - 1, n, i) : Hn(t[s], i));
        }

        return !e && n && o.push(o[0]), o;
      }

      function Un(t, e) {
        return t.feature ? n({}, t.feature, {
          geometry: e
        }) : Vn(e);
      }

      function Vn(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }

      var qn = {
        toGeoJSON: function toGeoJSON(t) {
          return Un(this, {
            type: "Point",
            coordinates: Hn(this.getLatLng(), t)
          });
        }
      };

      function Gn(t, e) {
        return new Dn(t, e);
      }

      Zn.include(qn), On.include(qn), In.include(qn), An.include({
        toGeoJSON: function toGeoJSON(t) {
          var e = !fn(this._latlngs),
              n = Fn(this._latlngs, e ? 1 : 0, !1, t);
          return Un(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: n
          });
        }
      }), Rn.include({
        toGeoJSON: function toGeoJSON(t) {
          var e = !fn(this._latlngs),
              n = e && !fn(this._latlngs[0]),
              i = Fn(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
          return e || (i = [i]), Un(this, {
            type: (n ? "Multi" : "") + "Polygon",
            coordinates: i
          });
        }
      }), Mn.include({
        toMultiPoint: function toMultiPoint(t) {
          var e = [];
          return this.eachLayer(function (n) {
            e.push(n.toGeoJSON(t).geometry.coordinates);
          }), Un(this, {
            type: "MultiPoint",
            coordinates: e
          });
        },
        toGeoJSON: function toGeoJSON(t) {
          var e = this.feature && this.feature.geometry && this.feature.geometry.type;
          if ("MultiPoint" === e) return this.toMultiPoint(t);
          var n = "GeometryCollection" === e,
              i = [];
          return this.eachLayer(function (e) {
            if (e.toGeoJSON) {
              var o = e.toGeoJSON(t);
              if (n) i.push(o.geometry);else {
                var s = Vn(o);
                "FeatureCollection" === s.type ? i.push.apply(i, s.features) : i.push(s);
              }
            }
          }), n ? Un(this, {
            geometries: i,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: i
          };
        }
      });
      var Kn = Gn,
          Yn = zn.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: ""
        },
        initialize: function initialize(t, e, n) {
          this._url = t, this._bounds = D(e), p(this, n);
        },
        onAdd: function onAdd() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ce(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function onRemove() {
          ae(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        setOpacity: function setOpacity(t) {
          return this.options.opacity = t, this._image && this._updateOpacity(), this;
        },
        setStyle: function setStyle(t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        bringToFront: function bringToFront() {
          return this._map && he(this._image), this;
        },
        bringToBack: function bringToBack() {
          return this._map && le(this._image), this;
        },
        setUrl: function setUrl(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        setBounds: function setBounds(t) {
          return this._bounds = D(t), this._map && this._reset(), this;
        },
        getEvents: function getEvents() {
          var t = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        setZIndex: function setZIndex(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        getBounds: function getBounds() {
          return this._bounds;
        },
        getElement: function getElement() {
          return this._image;
        },
        _initImage: function _initImage() {
          var t = "IMG" === this._url.tagName,
              e = this._image = t ? this._url : se("img");
          ce(e, "leaflet-image-layer"), this._zoomAnimated && ce(e, "leaflet-zoom-animated"), this.options.className && ce(e, this.options.className), e.onselectstart = l, e.onmousemove = l, e.onload = o(this.fire, this, "load"), e.onerror = o(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt);
        },
        _animateZoom: function _animateZoom(t) {
          var e = this._map.getZoomScale(t.zoom),
              n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;

          ge(this._image, n, e);
        },
        _reset: function _reset() {
          var t = this._image,
              e = new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
              n = e.getSize();
          ve(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px";
        },
        _updateOpacity: function _updateOpacity() {
          fe(this._image, this.options.opacity);
        },
        _updateZIndex: function _updateZIndex() {
          this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function _overlayOnError() {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && (this._url = t, this._image.src = t);
        }
      }),
          Xn = Yn.extend({
        options: {
          autoplay: !0,
          loop: !0
        },
        _initImage: function _initImage() {
          var t = "VIDEO" === this._url.tagName,
              e = this._image = t ? this._url : se("video");

          if (ce(e, "leaflet-image-layer"), this._zoomAnimated && ce(e, "leaflet-zoom-animated"), e.onselectstart = l, e.onmousemove = l, e.onloadeddata = o(this.fire, this, "load"), t) {
            for (var n = e.getElementsByTagName("source"), i = [], s = 0; s < n.length; s++) {
              i.push(n[s].src);
            }

            this._url = n.length > 0 ? i : [e.src];
          } else {
            g(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;

            for (var a = 0; a < this._url.length; a++) {
              var r = se("source");
              r.src = this._url[a], e.appendChild(r);
            }
          }
        }
      }),
          Jn = zn.extend({
        options: {
          offset: [0, 7],
          className: "",
          pane: "popupPane"
        },
        initialize: function initialize(t, e) {
          p(this, t), this._source = e;
        },
        onAdd: function onAdd(t) {
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && fe(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && fe(this._container, 1), this.bringToFront();
        },
        onRemove: function onRemove(t) {
          t._fadeAnimated ? (fe(this._container, 0), this._removeTimeout = setTimeout(o(ae, void 0, this._container), 200)) : ae(this._container);
        },
        getLatLng: function getLatLng() {
          return this._latlng;
        },
        setLatLng: function setLatLng(t) {
          return this._latlng = j(t), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        getContent: function getContent() {
          return this._content;
        },
        setContent: function setContent(t) {
          return this._content = t, this.update(), this;
        },
        getElement: function getElement() {
          return this._container;
        },
        update: function update() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function getEvents() {
          var t = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        isOpen: function isOpen() {
          return !!this._map && this._map.hasLayer(this);
        },
        bringToFront: function bringToFront() {
          return this._map && he(this._container), this;
        },
        bringToBack: function bringToBack() {
          return this._map && le(this._container), this;
        },
        _updateContent: function _updateContent() {
          if (this._content) {
            var t = this._contentNode,
                e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
            if ("string" == typeof e) t.innerHTML = e;else {
              for (; t.hasChildNodes();) {
                t.removeChild(t.firstChild);
              }

              t.appendChild(e);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function _updatePosition() {
          if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng),
                e = I(this.options.offset),
                n = this._getAnchor();

            this._zoomAnimated ? ve(this._container, t.add(n)) : e = e.add(t).add(n);
            var i = this._containerBottom = -e.y,
                o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
            this._container.style.bottom = i + "px", this._container.style.left = o + "px";
          }
        },
        _getAnchor: function _getAnchor() {
          return [0, 0];
        }
      }),
          $n = Jn.extend({
        options: {
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: ""
        },
        openOn: function openOn(t) {
          return t.openPopup(this), this;
        },
        onAdd: function onAdd(t) {
          Jn.prototype.onAdd.call(this, t), t.fire("popupopen", {
            popup: this
          }), this._source && (this._source.fire("popupopen", {
            popup: this
          }, !0), this._source instanceof Bn || this._source.on("preclick", Be));
        },
        onRemove: function onRemove(t) {
          Jn.prototype.onRemove.call(this, t), t.fire("popupclose", {
            popup: this
          }), this._source && (this._source.fire("popupclose", {
            popup: this
          }, !0), this._source instanceof Bn || this._source.off("preclick", Be));
        },
        getEvents: function getEvents() {
          var t = Jn.prototype.getEvents.call(this);
          return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _close: function _close() {
          this._map && this._map.closePopup(this);
        },
        _initLayout: function _initLayout() {
          var t = "leaflet-popup",
              e = this._container = se("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
              n = this._wrapper = se("div", t + "-content-wrapper", e);

          if (this._contentNode = se("div", t + "-content", n), Oe(n), Ie(this._contentNode), ke(n, "contextmenu", Be), this._tipContainer = se("div", t + "-tip-container", e), this._tip = se("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var i = this._closeButton = se("a", t + "-close-button", e);
            i.href = "#close", i.innerHTML = "&#215;", ke(i, "click", this._onCloseButtonClick, this);
          }
        },
        _updateLayout: function _updateLayout() {
          var t = this._contentNode,
              e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var n = t.offsetWidth;
          n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
          var i = t.offsetHeight,
              o = this.options.maxHeight;
          o && i > o ? (e.height = o + "px", ce(t, "leaflet-popup-scrolled")) : de(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function _animateZoom(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
              n = this._getAnchor();

          ve(this._container, e.add(n));
        },
        _adjustPan: function _adjustPan() {
          if (this.options.autoPan) {
            this._map._panAnim && this._map._panAnim.stop();
            var t = this._map,
                e = parseInt(oe(this._container, "marginBottom"), 10) || 0,
                n = this._container.offsetHeight + e,
                i = this._containerWidth,
                o = new Z(this._containerLeft, -n - this._containerBottom);

            o._add(ye(this._container));

            var s = t.layerPointToContainerPoint(o),
                a = I(this.options.autoPanPadding),
                r = I(this.options.autoPanPaddingTopLeft || a),
                h = I(this.options.autoPanPaddingBottomRight || a),
                l = t.getSize(),
                u = 0,
                c = 0;
            s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + n + h.y > l.y && (c = s.y + n - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c]);
          }
        },
        _onCloseButtonClick: function _onCloseButtonClick(t) {
          this._close(), Re(t);
        },
        _getAnchor: function _getAnchor() {
          return I(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      });
      Ke.mergeOptions({
        closePopupOnClick: !0
      }), Ke.include({
        openPopup: function openPopup(t, e, n) {
          return t instanceof $n || (t = new $n(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
        },
        closePopup: function closePopup(t) {
          return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
        }
      }), zn.include({
        bindPopup: function bindPopup(t, e) {
          return t instanceof $n ? (p(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new $n(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        unbindPopup: function unbindPopup() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        openPopup: function openPopup(t, e) {
          if (t instanceof zn || (e = t, t = this), t instanceof kn) for (var n in this._layers) {
            t = this._layers[n];
            break;
          }
          return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this;
        },
        closePopup: function closePopup() {
          return this._popup && this._popup._close(), this;
        },
        togglePopup: function togglePopup(t) {
          return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
        },
        isPopupOpen: function isPopupOpen() {
          return !!this._popup && this._popup.isOpen();
        },
        setPopupContent: function setPopupContent(t) {
          return this._popup && this._popup.setContent(t), this;
        },
        getPopup: function getPopup() {
          return this._popup;
        },
        _openPopup: function _openPopup(t) {
          var e = t.layer || t.target;
          this._popup && this._map && (Re(t), e instanceof Bn ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng));
        },
        _movePopup: function _movePopup(t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function _onKeyPress(t) {
          13 === t.originalEvent.keyCode && this._openPopup(t);
        }
      });
      var Qn = Jn.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          interactive: !1,
          opacity: .9
        },
        onAdd: function onAdd(t) {
          Jn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
            tooltip: this
          }), this._source && this._source.fire("tooltipopen", {
            tooltip: this
          }, !0);
        },
        onRemove: function onRemove(t) {
          Jn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
            tooltip: this
          }), this._source && this._source.fire("tooltipclose", {
            tooltip: this
          }, !0);
        },
        getEvents: function getEvents() {
          var t = Jn.prototype.getEvents.call(this);
          return wt && !this.options.permanent && (t.preclick = this._close), t;
        },
        _close: function _close() {
          this._map && this._map.closeTooltip(this);
        },
        _initLayout: function _initLayout() {
          var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = se("div", t);
        },
        _updateLayout: function _updateLayout() {},
        _adjustPan: function _adjustPan() {},
        _setPosition: function _setPosition(t) {
          var e = this._map,
              n = this._container,
              i = e.latLngToContainerPoint(e.getCenter()),
              o = e.layerPointToContainerPoint(t),
              s = this.options.direction,
              a = n.offsetWidth,
              r = n.offsetHeight,
              h = I(this.options.offset),
              l = this._getAnchor();

          "top" === s ? t = t.add(I(-a / 2 + h.x, -r + h.y + l.y, !0)) : "bottom" === s ? t = t.subtract(I(a / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(I(a / 2 + h.x, r / 2 - l.y + h.y, !0)) : "right" === s || "auto" === s && o.x < i.x ? (s = "right", t = t.add(I(h.x + l.x, l.y - r / 2 + h.y, !0))) : (s = "left", t = t.subtract(I(a + l.x - h.x, r / 2 - l.y - h.y, !0))), de(n, "leaflet-tooltip-right"), de(n, "leaflet-tooltip-left"), de(n, "leaflet-tooltip-top"), de(n, "leaflet-tooltip-bottom"), ce(n, "leaflet-tooltip-" + s), ve(n, t);
        },
        _updatePosition: function _updatePosition() {
          var t = this._map.latLngToLayerPoint(this._latlng);

          this._setPosition(t);
        },
        setOpacity: function setOpacity(t) {
          this.options.opacity = t, this._container && fe(this._container, t);
        },
        _animateZoom: function _animateZoom(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

          this._setPosition(e);
        },
        _getAnchor: function _getAnchor() {
          return I(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      });
      Ke.include({
        openTooltip: function openTooltip(t, e, n) {
          return t instanceof Qn || (t = new Qn(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t);
        },
        closeTooltip: function closeTooltip(t) {
          return t && this.removeLayer(t), this;
        }
      }), zn.include({
        bindTooltip: function bindTooltip(t, e) {
          return t instanceof Qn ? (p(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new Qn(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        unbindTooltip: function unbindTooltip() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function _initTooltipInteractions(t) {
          if (t || !this._tooltipHandlersAdded) {
            var e = t ? "off" : "on",
                n = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), wt && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t;
          }
        },
        openTooltip: function openTooltip(t, e) {
          if (t instanceof zn || (e = t, t = this), t instanceof kn) for (var n in this._layers) {
            t = this._layers[n];
            break;
          }
          return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (ce(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
        },
        closeTooltip: function closeTooltip() {
          return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (de(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
        },
        toggleTooltip: function toggleTooltip(t) {
          return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
        },
        isTooltipOpen: function isTooltipOpen() {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function setTooltipContent(t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        getTooltip: function getTooltip() {
          return this._tooltip;
        },
        _openTooltip: function _openTooltip(t) {
          var e = t.layer || t.target;
          this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0);
        },
        _moveTooltip: function _moveTooltip(t) {
          var e,
              n,
              i = t.latlng;
          this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i);
        }
      });
      var ti = Cn.extend({
        options: {
          iconSize: [12, 12],
          html: !1,
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function createIcon(t) {
          var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
              n = this.options;

          if (e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos) {
            var i = I(n.bgPos);
            e.style.backgroundPosition = -i.x + "px " + -i.y + "px";
          }

          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function createShadow() {
          return null;
        }
      });
      Cn.Default = En;
      var ei = zn.extend({
        options: {
          tileSize: 256,
          opacity: 1,
          updateWhenIdle: gt,
          updateWhenZooming: !0,
          updateInterval: 200,
          zIndex: 1,
          bounds: null,
          minZoom: 0,
          maxZoom: void 0,
          maxNativeZoom: void 0,
          minNativeZoom: void 0,
          noWrap: !1,
          pane: "tilePane",
          className: "",
          keepBuffer: 2
        },
        initialize: function initialize(t) {
          p(this, t);
        },
        onAdd: function onAdd() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
        },
        beforeAdd: function beforeAdd(t) {
          t._addZoomLimit(this);
        },
        onRemove: function onRemove(t) {
          this._removeAllTiles(), ae(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        bringToFront: function bringToFront() {
          return this._map && (he(this._container), this._setAutoZIndex(Math.max)), this;
        },
        bringToBack: function bringToBack() {
          return this._map && (le(this._container), this._setAutoZIndex(Math.min)), this;
        },
        getContainer: function getContainer() {
          return this._container;
        },
        setOpacity: function setOpacity(t) {
          return this.options.opacity = t, this._updateOpacity(), this;
        },
        setZIndex: function setZIndex(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        isLoading: function isLoading() {
          return this._loading;
        },
        redraw: function redraw() {
          return this._map && (this._removeAllTiles(), this._update()), this;
        },
        getEvents: function getEvents() {
          var t = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        createTile: function createTile() {
          return document.createElement("div");
        },
        getTileSize: function getTileSize() {
          var t = this.options.tileSize;
          return t instanceof Z ? t : new Z(t, t);
        },
        _updateZIndex: function _updateZIndex() {
          this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function _setAutoZIndex(t) {
          for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), o = 0, s = n.length; o < s; o++) {
            e = n[o].style.zIndex, n[o] !== this._container && e && (i = t(i, +e));
          }

          isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function _updateOpacity() {
          if (this._map && !Q) {
            fe(this._container, this.options.opacity);
            var t = +new Date(),
                e = !1,
                n = !1;

            for (var i in this._tiles) {
              var o = this._tiles[i];

              if (o.current && o.loaded) {
                var s = Math.min(1, (t - o.loaded) / 200);
                fe(o.el, s), s < 1 ? e = !0 : (o.active ? n = !0 : this._onOpaqueTile(o), o.active = !0);
              }
            }

            n && !this._noPrune && this._pruneTiles(), e && (M(this._fadeFrame), this._fadeFrame = z(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: l,
        _initContainer: function _initContainer() {
          this._container || (this._container = se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function _updateLevels() {
          var t = this._tileZoom,
              e = this.options.maxZoom;

          if (void 0 !== t) {
            for (var n in this._levels) {
              this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (ae(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
            }

            var i = this._levels[t],
                o = this._map;
            return i || ((i = this._levels[t] = {}).el = se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), i.el.style.zIndex = e, i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), i.zoom = t, this._setZoomTransform(i, o.getCenter(), o.getZoom()), i.el.offsetWidth, this._onCreateLevel(i)), this._level = i, i;
          }
        },
        _onUpdateLevel: l,
        _onRemoveLevel: l,
        _onCreateLevel: l,
        _pruneTiles: function _pruneTiles() {
          if (this._map) {
            var t,
                e,
                n = this._map.getZoom();

            if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();else {
              for (t in this._tiles) {
                (e = this._tiles[t]).retain = e.current;
              }

              for (t in this._tiles) {
                if ((e = this._tiles[t]).current && !e.active) {
                  var i = e.coords;
                  this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2);
                }
              }

              for (t in this._tiles) {
                this._tiles[t].retain || this._removeTile(t);
              }
            }
          }
        },
        _removeTilesAtZoom: function _removeTilesAtZoom(t) {
          for (var e in this._tiles) {
            this._tiles[e].coords.z === t && this._removeTile(e);
          }
        },
        _removeAllTiles: function _removeAllTiles() {
          for (var t in this._tiles) {
            this._removeTile(t);
          }
        },
        _invalidateAll: function _invalidateAll() {
          for (var t in this._levels) {
            ae(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
          }

          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function _retainParent(t, e, n, i) {
          var o = Math.floor(t / 2),
              s = Math.floor(e / 2),
              a = n - 1,
              r = new Z(+o, +s);
          r.z = +a;

          var h = this._tileCoordsToKey(r),
              l = this._tiles[h];

          return l && l.active ? (l.retain = !0, !0) : (l && l.loaded && (l.retain = !0), a > i && this._retainParent(o, s, a, i));
        },
        _retainChildren: function _retainChildren(t, e, n, i) {
          for (var o = 2 * t; o < 2 * t + 2; o++) {
            for (var s = 2 * e; s < 2 * e + 2; s++) {
              var a = new Z(o, s);
              a.z = n + 1;

              var r = this._tileCoordsToKey(a),
                  h = this._tiles[r];

              h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), n + 1 < i && this._retainChildren(o, s, n + 1, i));
            }
          }
        },
        _resetView: function _resetView(t) {
          var e = t && (t.pinch || t.flyTo);

          this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
        },
        _animateZoom: function _animateZoom(t) {
          this._setView(t.center, t.zoom, !0, t.noUpdate);
        },
        _clampZoom: function _clampZoom(t) {
          var e = this.options;
          return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t;
        },
        _setView: function _setView(t, e, n, i) {
          var o = this._clampZoom(Math.round(e));

          (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
          var s = this.options.updateWhenZooming && o !== this._tileZoom;
          i && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e);
        },
        _setZoomTransforms: function _setZoomTransforms(t, e) {
          for (var n in this._levels) {
            this._setZoomTransform(this._levels[n], t, e);
          }
        },
        _setZoomTransform: function _setZoomTransform(t, e, n) {
          var i = this._map.getZoomScale(n, t.zoom),
              o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();

          mt ? ge(t.el, o, i) : ve(t.el, o);
        },
        _resetGrid: function _resetGrid() {
          var t = this._map,
              e = t.options.crs,
              n = this._tileSize = this.getTileSize(),
              i = this._tileZoom,
              o = this._map.getPixelWorldBounds(this._tileZoom);

          o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)];
        },
        _onMoveEnd: function _onMoveEnd() {
          this._map && !this._map._animatingZoom && this._update();
        },
        _getTiledPixelBounds: function _getTiledPixelBounds(t) {
          var e = this._map,
              n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
              i = e.getZoomScale(n, this._tileZoom),
              o = e.project(t, this._tileZoom).floor(),
              s = e.getSize().divideBy(2 * i);
          return new O(o.subtract(s), o.add(s));
        },
        _update: function _update(t) {
          var e = this._map;

          if (e) {
            var n = this._clampZoom(e.getZoom());

            if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
              var i = this._getTiledPixelBounds(t),
                  o = this._pxBoundsToTileRange(i),
                  s = o.getCenter(),
                  a = [],
                  r = this.options.keepBuffer,
                  h = new O(o.getBottomLeft().subtract([r, -r]), o.getTopRight().add([r, -r]));

              if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");

              for (var l in this._tiles) {
                var u = this._tiles[l].coords;
                u.z === this._tileZoom && h.contains(new Z(u.x, u.y)) || (this._tiles[l].current = !1);
              }

              if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);else {
                for (var c = o.min.y; c <= o.max.y; c++) {
                  for (var d = o.min.x; d <= o.max.x; d++) {
                    var p = new Z(d, c);

                    if (p.z = this._tileZoom, this._isValidTile(p)) {
                      var _ = this._tiles[this._tileCoordsToKey(p)];

                      _ ? _.current = !0 : a.push(p);
                    }
                  }
                }

                if (a.sort(function (t, e) {
                  return t.distanceTo(s) - e.distanceTo(s);
                }), 0 !== a.length) {
                  this._loading || (this._loading = !0, this.fire("loading"));
                  var f = document.createDocumentFragment();

                  for (d = 0; d < a.length; d++) {
                    this._addTile(a[d], f);
                  }

                  this._level.el.appendChild(f);
                }
              }
            }
          }
        },
        _isValidTile: function _isValidTile(t) {
          var e = this._map.options.crs;

          if (!e.infinite) {
            var n = this._globalTileRange;
            if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1;
          }

          if (!this.options.bounds) return !0;

          var i = this._tileCoordsToBounds(t);

          return D(this.options.bounds).overlaps(i);
        },
        _keyToBounds: function _keyToBounds(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
          var e = this._map,
              n = this.getTileSize(),
              i = t.scaleBy(n),
              o = i.add(n),
              s = e.unproject(i, t.z),
              a = e.unproject(o, t.z);
          return [s, a];
        },
        _tileCoordsToBounds: function _tileCoordsToBounds(t) {
          var e = this._tileCoordsToNwSe(t),
              n = new R(e[0], e[1]);

          return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n;
        },
        _tileCoordsToKey: function _tileCoordsToKey(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        _keyToTileCoords: function _keyToTileCoords(t) {
          var e = t.split(":"),
              n = new Z(+e[0], +e[1]);
          return n.z = +e[2], n;
        },
        _removeTile: function _removeTile(t) {
          var e = this._tiles[t];
          e && (ae(e.el), delete this._tiles[t], this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function _initTile(t) {
          ce(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = l, t.onmousemove = l, Q && this.options.opacity < 1 && fe(t, this.options.opacity), nt && !it && (t.style.WebkitBackfaceVisibility = "hidden");
        },
        _addTile: function _addTile(t, e) {
          var n = this._getTilePos(t),
              i = this._tileCoordsToKey(t),
              s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));

          this._initTile(s), this.createTile.length < 2 && z(o(this._tileReady, this, t, null, s)), ve(s, n), this._tiles[i] = {
            el: s,
            coords: t,
            current: !0
          }, e.appendChild(s), this.fire("tileloadstart", {
            tile: s,
            coords: t
          });
        },
        _tileReady: function _tileReady(t, e, n) {
          e && this.fire("tileerror", {
            error: e,
            tile: n,
            coords: t
          });

          var i = this._tileCoordsToKey(t);

          (n = this._tiles[i]) && (n.loaded = +new Date(), this._map._fadeAnimated ? (fe(n.el, 0), M(this._fadeFrame), this._fadeFrame = z(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (ce(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: n.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Q || !this._map._fadeAnimated ? z(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)));
        },
        _getTilePos: function _getTilePos(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function _wrapCoords(t) {
          var e = new Z(this._wrapX ? h(t.x, this._wrapX) : t.x, this._wrapY ? h(t.y, this._wrapY) : t.y);
          return e.z = t.z, e;
        },
        _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
          var e = this.getTileSize();
          return new O(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
        },
        _noTilesToLoad: function _noTilesToLoad() {
          for (var t in this._tiles) {
            if (!this._tiles[t].loaded) return !1;
          }

          return !0;
        }
      }),
          ni = ei.extend({
        options: {
          minZoom: 0,
          maxZoom: 18,
          subdomains: "abc",
          errorTileUrl: "",
          zoomOffset: 0,
          tms: !1,
          zoomReverse: !1,
          detectRetina: !1,
          crossOrigin: !1
        },
        initialize: function initialize(t, e) {
          this._url = t, (e = p(this, e)).detectRetina && Tt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), nt || this.on("tileunload", this._onTileRemove);
        },
        setUrl: function setUrl(t, e) {
          return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this;
        },
        createTile: function createTile(t, e) {
          var n = document.createElement("img");
          return ke(n, "load", o(this._tileOnLoad, this, e, n)), ke(n, "error", o(this._tileOnError, this, e, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n;
        },
        getTileUrl: function getTileUrl(t) {
          var e = {
            r: Tt ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };

          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }

          return m(this._url, n(e, this.options));
        },
        _tileOnLoad: function _tileOnLoad(t, e) {
          Q ? setTimeout(o(t, this, null, e), 0) : t(null, e);
        },
        _tileOnError: function _tileOnError(t, e, n) {
          var i = this.options.errorTileUrl;
          i && e.getAttribute("src") !== i && (e.src = i), t(n, e);
        },
        _onTileRemove: function _onTileRemove(t) {
          t.tile.onload = null;
        },
        _getZoomForUrl: function _getZoomForUrl() {
          var t = this._tileZoom,
              e = this.options.maxZoom,
              n = this.options.zoomReverse,
              i = this.options.zoomOffset;
          return n && (t = e - t), t + i;
        },
        _getSubdomain: function _getSubdomain(t) {
          var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
          return this.options.subdomains[e];
        },
        _abortLoading: function _abortLoading() {
          var t, e;

          for (t in this._tiles) {
            this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = l, e.onerror = l, e.complete || (e.src = y, ae(e), delete this._tiles[t]));
          }
        },
        _removeTile: function _removeTile(t) {
          var e = this._tiles[t];
          if (e) return st || e.el.setAttribute("src", y), ei.prototype._removeTile.call(this, t);
        },
        _tileReady: function _tileReady(t, e, n) {
          if (this._map && (!n || n.getAttribute("src") !== y)) return ei.prototype._tileReady.call(this, t, e, n);
        }
      });

      function ii(t, e) {
        return new ni(t, e);
      }

      var oi = ni.extend({
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          layers: "",
          styles: "",
          format: "image/jpeg",
          transparent: !1,
          version: "1.1.1"
        },
        options: {
          crs: null,
          uppercase: !1
        },
        initialize: function initialize(t, e) {
          this._url = t;
          var i = n({}, this.defaultWmsParams);

          for (var o in e) {
            o in this.options || (i[o] = e[o]);
          }

          var s = (e = p(this, e)).detectRetina && Tt ? 2 : 1,
              a = this.getTileSize();
          i.width = a.x * s, i.height = a.y * s, this.wmsParams = i;
        },
        onAdd: function onAdd(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, ni.prototype.onAdd.call(this, t);
        },
        getTileUrl: function getTileUrl(t) {
          var e = this._tileCoordsToNwSe(t),
              n = this._crs,
              i = A(n.project(e[0]), n.project(e[1])),
              o = i.min,
              s = i.max,
              a = (this._wmsVersion >= 1.3 && this._crs === Ln ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
              r = ni.prototype.getTileUrl.call(this, t);

          return r + _(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + a;
        },
        setParams: function setParams(t, e) {
          return n(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      ni.WMS = oi, ii.wms = function (t, e) {
        return new oi(t, e);
      };
      var si = zn.extend({
        options: {
          padding: .1,
          tolerance: 0
        },
        initialize: function initialize(t) {
          p(this, t), a(this), this._layers = this._layers || {};
        },
        onAdd: function onAdd() {
          this._container || (this._initContainer(), this._zoomAnimated && ce(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function onRemove() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function getEvents() {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function _onAnimZoom(t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function _onZoom() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function _updateTransform(t, e) {
          var n = this._map.getZoomScale(e, this._zoom),
              i = ye(this._container),
              o = this._map.getSize().multiplyBy(.5 + this.options.padding),
              s = this._map.project(this._center, e),
              a = this._map.project(t, e),
              r = a.subtract(s),
              h = o.multiplyBy(-n).add(i).add(o).subtract(r);

          mt ? ge(this._container, h, n) : ve(this._container, h);
        },
        _reset: function _reset() {
          for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) {
            this._layers[t]._reset();
          }
        },
        _onZoomEnd: function _onZoomEnd() {
          for (var t in this._layers) {
            this._layers[t]._project();
          }
        },
        _updatePaths: function _updatePaths() {
          for (var t in this._layers) {
            this._layers[t]._update();
          }
        },
        _update: function _update() {
          var t = this.options.padding,
              e = this._map.getSize(),
              n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();

          this._bounds = new O(n, n.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }),
          ai = si.extend({
        getEvents: function getEvents() {
          var t = si.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function _onViewPreReset() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function onAdd() {
          si.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function _initContainer() {
          var t = this._container = document.createElement("canvas");
          ke(t, "mousemove", r(this._onMouseMove, 32, this), this), ke(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), ke(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
        },
        _destroyContainer: function _destroyContainer() {
          M(this._redrawRequest), delete this._ctx, ae(this._container), Ee(this._container), delete this._container;
        },
        _updatePaths: function _updatePaths() {
          if (!this._postponeUpdatePaths) {
            for (var t in this._redrawBounds = null, this._layers) {
              this._layers[t]._update();
            }

            this._redraw();
          }
        },
        _update: function _update() {
          if (!this._map._animatingZoom || !this._bounds) {
            si.prototype._update.call(this);

            var t = this._bounds,
                e = this._container,
                n = t.getSize(),
                i = Tt ? 2 : 1;
            ve(e, t.min), e.width = i * n.x, e.height = i * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", Tt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function _reset() {
          si.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function _initPath(t) {
          this._updateDashArray(t), this._layers[a(t)] = t;
          var e = t._order = {
            layer: t,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function _addPath(t) {
          this._requestRedraw(t);
        },
        _removePath: function _removePath(t) {
          var e = t._order,
              n = e.next,
              i = e.prev;
          n ? n.prev = i : this._drawLast = i, i ? i.next = n : this._drawFirst = n, delete t._order, delete this._layers[a(t)], this._requestRedraw(t);
        },
        _updatePath: function _updatePath(t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function _updateStyle(t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function _updateDashArray(t) {
          if ("string" == typeof t.options.dashArray) {
            var e,
                n,
                i = t.options.dashArray.split(/[, ]+/),
                o = [];

            for (n = 0; n < i.length; n++) {
              if (e = Number(i[n]), isNaN(e)) return;
              o.push(e);
            }

            t.options._dashArray = o;
          } else t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function _requestRedraw(t) {
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || z(this._redraw, this));
        },
        _extendRedrawBounds: function _extendRedrawBounds(t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new O(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function _redraw() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function _clear() {
          var t = this._redrawBounds;

          if (t) {
            var e = t.getSize();

            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
        },
        _draw: function _draw() {
          var t,
              e = this._redrawBounds;

          if (this._ctx.save(), e) {
            var n = e.getSize();
            this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip();
          }

          this._drawing = !0;

          for (var i = this._drawFirst; i; i = i.next) {
            t = i.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
          }

          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function _updatePoly(t, e) {
          if (this._drawing) {
            var n,
                i,
                o,
                s,
                a = t._parts,
                r = a.length,
                h = this._ctx;

            if (r) {
              for (h.beginPath(), n = 0; n < r; n++) {
                for (i = 0, o = a[n].length; i < o; i++) {
                  s = a[n][i], h[i ? "lineTo" : "moveTo"](s.x, s.y);
                }

                e && h.closePath();
              }

              this._fillStroke(h, t);
            }
          }
        },
        _updateCircle: function _updateCircle(t) {
          if (this._drawing && !t._empty()) {
            var e = t._point,
                n = this._ctx,
                i = Math.max(Math.round(t._radius), 1),
                o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
            1 !== o && (n.save(), n.scale(1, o)), n.beginPath(), n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1), 1 !== o && n.restore(), this._fillStroke(n, t);
          }
        },
        _fillStroke: function _fillStroke(t, e) {
          var n = e.options;
          n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke());
        },
        _onClick: function _onClick(t) {
          for (var e, n, i = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
            (e = o.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
          }

          n && (Fe(t), this._fireEvent([n], t));
        },
        _onMouseMove: function _onMouseMove(t) {
          if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
            var e = this._map.mouseEventToLayerPoint(t);

            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function _handleMouseOut(t) {
          var e = this._hoveredLayer;
          e && (de(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null);
        },
        _handleMouseHover: function _handleMouseHover(t, e) {
          for (var n, i, o = this._drawFirst; o; o = o.next) {
            (n = o.layer).options.interactive && n._containsPoint(e) && (i = n);
          }

          i !== this._hoveredLayer && (this._handleMouseOut(t), i && (ce(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseover"), this._hoveredLayer = i)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
        },
        _fireEvent: function _fireEvent(t, e, n) {
          this._map._fireDOMEvent(e, n || e.type, t);
        },
        _bringToFront: function _bringToFront(t) {
          var e = t._order;

          if (e) {
            var n = e.next,
                i = e.prev;
            n && (n.prev = i, i ? i.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t));
          }
        },
        _bringToBack: function _bringToBack(t) {
          var e = t._order;

          if (e) {
            var n = e.next,
                i = e.prev;
            i && (i.next = n, n ? n.prev = i : i && (this._drawLast = i), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t));
          }
        }
      });

      function ri(t) {
        return zt ? new ai(t) : null;
      }

      var hi = function () {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch (t) {
          return function (t) {
            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }
      }(),
          li = {
        _initContainer: function _initContainer() {
          this._container = se("div", "leaflet-vml-container");
        },
        _update: function _update() {
          this._map._animatingZoom || (si.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function _initPath(t) {
          var e = t._container = hi("shape");
          ce(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = hi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[a(t)] = t;
        },
        _addPath: function _addPath(t) {
          var e = t._container;
          this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function _removePath(t) {
          var e = t._container;
          ae(e), t.removeInteractiveTarget(e), delete this._layers[a(t)];
        },
        _updateStyle: function _updateStyle(t) {
          var e = t._stroke,
              n = t._fill,
              i = t.options,
              o = t._container;
          o.stroked = !!i.stroke, o.filled = !!i.fill, i.stroke ? (e || (e = t._stroke = hi("stroke")), o.appendChild(e), e.weight = i.weight + "px", e.color = i.color, e.opacity = i.opacity, i.dashArray ? e.dashStyle = g(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = i.lineCap.replace("butt", "flat"), e.joinstyle = i.lineJoin) : e && (o.removeChild(e), t._stroke = null), i.fill ? (n || (n = t._fill = hi("fill")), o.appendChild(n), n.color = i.fillColor || i.color, n.opacity = i.fillOpacity) : n && (o.removeChild(n), t._fill = null);
        },
        _updateCircle: function _updateCircle(t) {
          var e = t._point.round(),
              n = Math.round(t._radius),
              i = Math.round(t._radiusY || n);

          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600");
        },
        _setPath: function _setPath(t, e) {
          t._path.v = e;
        },
        _bringToFront: function _bringToFront(t) {
          he(t._container);
        },
        _bringToBack: function _bringToBack(t) {
          le(t._container);
        }
      },
          ui = kt ? hi : Y,
          ci = si.extend({
        getEvents: function getEvents() {
          var t = si.prototype.getEvents.call(this);
          return t.zoomstart = this._onZoomStart, t;
        },
        _initContainer: function _initContainer() {
          this._container = ui("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ui("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function _destroyContainer() {
          ae(this._container), Ee(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _onZoomStart: function _onZoomStart() {
          this._update();
        },
        _update: function _update() {
          if (!this._map._animatingZoom || !this._bounds) {
            si.prototype._update.call(this);

            var t = this._bounds,
                e = t.getSize(),
                n = this._container;
            this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), ve(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        _initPath: function _initPath(t) {
          var e = t._path = ui("path");
          t.options.className && ce(e, t.options.className), t.options.interactive && ce(e, "leaflet-interactive"), this._updateStyle(t), this._layers[a(t)] = t;
        },
        _addPath: function _addPath(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function _removePath(t) {
          ae(t._path), t.removeInteractiveTarget(t._path), delete this._layers[a(t)];
        },
        _updatePath: function _updatePath(t) {
          t._project(), t._update();
        },
        _updateStyle: function _updateStyle(t) {
          var e = t._path,
              n = t.options;
          e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
        },
        _updatePoly: function _updatePoly(t, e) {
          this._setPath(t, X(t._parts, e));
        },
        _updateCircle: function _updateCircle(t) {
          var e = t._point,
              n = Math.max(Math.round(t._radius), 1),
              i = Math.max(Math.round(t._radiusY), 1) || n,
              o = "a" + n + "," + i + " 0 1,0 ",
              s = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + o + 2 * n + ",0 " + o + 2 * -n + ",0 ";

          this._setPath(t, s);
        },
        _setPath: function _setPath(t, e) {
          t._path.setAttribute("d", e);
        },
        _bringToFront: function _bringToFront(t) {
          he(t._path);
        },
        _bringToBack: function _bringToBack(t) {
          le(t._path);
        }
      });

      function di(t) {
        return Mt || kt ? new ci(t) : null;
      }

      kt && ci.include(li), Ke.include({
        getRenderer: function getRenderer(t) {
          var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;

          return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
        },
        _getPaneRenderer: function _getPaneRenderer(t) {
          if ("overlayPane" === t || void 0 === t) return !1;
          var e = this._paneRenderers[t];
          return void 0 === e && (e = this._createRenderer({
            pane: t
          }), this._paneRenderers[t] = e), e;
        },
        _createRenderer: function _createRenderer(t) {
          return this.options.preferCanvas && ri(t) || di(t);
        }
      });
      var pi = Rn.extend({
        initialize: function initialize(t, e) {
          Rn.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        setBounds: function setBounds(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function _boundsToLatLngs(t) {
          return [(t = D(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
        }
      });
      ci.create = ui, ci.pointsToPath = X, Dn.geometryToLayer = Nn, Dn.coordsToLatLng = jn, Dn.coordsToLatLngs = Wn, Dn.latLngToCoords = Hn, Dn.latLngsToCoords = Fn, Dn.getFeature = Un, Dn.asFeature = Vn, Ke.mergeOptions({
        boxZoom: !0
      });

      var _i = en.extend({
        initialize: function initialize(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function addHooks() {
          ke(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function removeHooks() {
          Ee(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function moved() {
          return this._moved;
        },
        _destroy: function _destroy() {
          ae(this._pane), delete this._pane;
        },
        _resetState: function _resetState() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function _clearDeferredResetState() {
          0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function _onMouseDown(t) {
          if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
          this._clearDeferredResetState(), this._resetState(), Yt(), be(), this._startPoint = this._map.mouseEventToContainerPoint(t), ke(document, {
            contextmenu: Re,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function _onMouseMove(t) {
          this._moved || (this._moved = !0, this._box = se("div", "leaflet-zoom-box", this._container), ce(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new O(this._point, this._startPoint),
              n = e.getSize();
          ve(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px";
        },
        _finish: function _finish() {
          this._moved && (ae(this._box), de(this._container, "leaflet-crosshair")), Xt(), we(), Ee(document, {
            contextmenu: Re,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function _onMouseUp(t) {
          if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(o(this._resetState, this), 0);
            var e = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));

            this._map.fitBounds(e).fire("boxzoomend", {
              boxZoomBounds: e
            });
          }
        },
        _onKeyDown: function _onKeyDown(t) {
          27 === t.keyCode && this._finish();
        }
      });

      Ke.addInitHook("addHandler", "boxZoom", _i), Ke.mergeOptions({
        doubleClickZoom: !0
      });
      var fi = en.extend({
        addHooks: function addHooks() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function removeHooks() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function _onDoubleClick(t) {
          var e = this._map,
              n = e.getZoom(),
              i = e.options.zoomDelta,
              o = t.originalEvent.shiftKey ? n - i : n + i;
          "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
        }
      });
      Ke.addInitHook("addHandler", "doubleClickZoom", fi), Ke.mergeOptions({
        dragging: !0,
        inertia: !it,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
      });
      var mi = en.extend({
        addHooks: function addHooks() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new hn(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }

          ce(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function removeHooks() {
          de(this._map._container, "leaflet-grab"), de(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function moved() {
          return this._draggable && this._draggable._moved;
        },
        moving: function moving() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function _onDragStart() {
          var t = this._map;

          if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var e = D(this._map.options.maxBounds);
            this._offsetLimit = A(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else this._offsetLimit = null;

          t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function _onDrag(t) {
          if (this._map.options.inertia) {
            var e = this._lastTime = +new Date(),
                n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(n), this._times.push(e), this._prunePositions(e);
          }

          this._map.fire("move", t).fire("drag", t);
        },
        _prunePositions: function _prunePositions(t) {
          for (; this._positions.length > 1 && t - this._times[0] > 50;) {
            this._positions.shift(), this._times.shift();
          }
        },
        _onZoomEnd: function _onZoomEnd() {
          var t = this._map.getSize().divideBy(2),
              e = this._map.latLngToLayerPoint([0, 0]);

          this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function _viscousLimit(t, e) {
          return t - (t - e) * this._viscosity;
        },
        _onPreDragLimit: function _onPreDragLimit() {
          if (this._viscosity && this._offsetLimit) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos),
                e = this._offsetLimit;

            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
          }
        },
        _onPreDragWrap: function _onPreDragWrap() {
          var t = this._worldWidth,
              e = Math.round(t / 2),
              n = this._initialWorldOffset,
              i = this._draggable._newPos.x,
              o = (i - e + n) % t + e - n,
              s = (i + e + n) % t - e - n,
              a = Math.abs(o + n) < Math.abs(s + n) ? o : s;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a;
        },
        _onDragEnd: function _onDragEnd(t) {
          var e = this._map,
              n = e.options,
              i = !n.inertia || this._times.length < 2;
          if (e.fire("dragend", t), i) e.fire("moveend");else {
            this._prunePositions(+new Date());

            var o = this._lastPos.subtract(this._positions[0]),
                s = (this._lastTime - this._times[0]) / 1e3,
                a = n.easeLinearity,
                r = o.multiplyBy(a / s),
                h = r.distanceTo([0, 0]),
                l = Math.min(n.inertiaMaxSpeed, h),
                u = r.multiplyBy(l / h),
                c = l / (n.inertiaDeceleration * a),
                d = u.multiplyBy(-c / 2).round();

            d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), z(function () {
              e.panBy(d, {
                duration: c,
                easeLinearity: a,
                noMoveStart: !0,
                animate: !0
              });
            })) : e.fire("moveend");
          }
        }
      });
      Ke.addInitHook("addHandler", "dragging", mi), Ke.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
      });
      var gi = en.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function initialize(t) {
          this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks: function addHooks() {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = "0"), ke(t, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function removeHooks() {
          this._removeHooks(), Ee(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function _onMouseDown() {
          if (!this._focused) {
            var t = document.body,
                e = document.documentElement,
                n = t.scrollTop || e.scrollTop,
                i = t.scrollLeft || e.scrollLeft;
            this._map._container.focus(), window.scrollTo(i, n);
          }
        },
        _onFocus: function _onFocus() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function _onBlur() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function _setPanDelta(t) {
          var e,
              n,
              i = this._panKeys = {},
              o = this.keyCodes;

          for (e = 0, n = o.left.length; e < n; e++) {
            i[o.left[e]] = [-1 * t, 0];
          }

          for (e = 0, n = o.right.length; e < n; e++) {
            i[o.right[e]] = [t, 0];
          }

          for (e = 0, n = o.down.length; e < n; e++) {
            i[o.down[e]] = [0, t];
          }

          for (e = 0, n = o.up.length; e < n; e++) {
            i[o.up[e]] = [0, -1 * t];
          }
        },
        _setZoomDelta: function _setZoomDelta(t) {
          var e,
              n,
              i = this._zoomKeys = {},
              o = this.keyCodes;

          for (e = 0, n = o.zoomIn.length; e < n; e++) {
            i[o.zoomIn[e]] = t;
          }

          for (e = 0, n = o.zoomOut.length; e < n; e++) {
            i[o.zoomOut[e]] = -t;
          }
        },
        _addHooks: function _addHooks() {
          ke(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function _removeHooks() {
          Ee(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function _onKeyDown(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e,
                n = t.keyCode,
                i = this._map;
            if (n in this._panKeys) i._panAnim && i._panAnim._inProgress || (e = this._panKeys[n], t.shiftKey && (e = I(e).multiplyBy(3)), i.panBy(e), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);else {
              if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
              i.closePopup();
            }
            Re(t);
          }
        }
      });
      Ke.addInitHook("addHandler", "keyboard", gi), Ke.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
      });
      var vi = en.extend({
        addHooks: function addHooks() {
          ke(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function removeHooks() {
          Ee(this._map._container, "mousewheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function _onWheelScroll(t) {
          var e = je(t),
              n = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
          var i = Math.max(n - (+new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(o(this._performZoom, this), i), Re(t);
        },
        _performZoom: function _performZoom() {
          var t = this._map,
              e = t.getZoom(),
              n = this._map.options.zoomSnap || 0;

          t._stop();

          var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
              o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(i)))) / Math.LN2,
              s = n ? Math.ceil(o / n) * n : o,
              a = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
          this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + a) : t.setZoomAround(this._lastMousePos, e + a));
        }
      });
      Ke.addInitHook("addHandler", "scrollWheelZoom", vi), Ke.mergeOptions({
        tap: !0,
        tapTolerance: 15
      });
      var yi = en.extend({
        addHooks: function addHooks() {
          ke(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function removeHooks() {
          Ee(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function _onDown(t) {
          if (t.touches) {
            if (Ae(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
            var e = t.touches[0],
                n = e.target;
            this._startPos = this._newPos = new Z(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && ce(n, "leaflet-active"), this._holdTimeout = setTimeout(o(function () {
              this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e));
            }, this), 1e3), this._simulateEvent("mousedown", e), ke(document, {
              touchmove: this._onMove,
              touchend: this._onUp
            }, this);
          }
        },
        _onUp: function _onUp(t) {
          if (clearTimeout(this._holdTimeout), Ee(document, {
            touchmove: this._onMove,
            touchend: this._onUp
          }, this), this._fireClick && t && t.changedTouches) {
            var e = t.changedTouches[0],
                n = e.target;
            n && n.tagName && "a" === n.tagName.toLowerCase() && de(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e);
          }
        },
        _isTapValid: function _isTapValid() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _onMove: function _onMove(t) {
          var e = t.touches[0];
          this._newPos = new Z(e.clientX, e.clientY), this._simulateEvent("mousemove", e);
        },
        _simulateEvent: function _simulateEvent(t, e) {
          var n = document.createEvent("MouseEvents");
          n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n);
        }
      });
      wt && !bt && Ke.addInitHook("addHandler", "tap", yi), Ke.mergeOptions({
        touchZoom: wt && !it,
        bounceAtZoomLimits: !0
      });
      var xi = en.extend({
        addHooks: function addHooks() {
          ce(this._map._container, "leaflet-touch-zoom"), ke(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function removeHooks() {
          de(this._map._container, "leaflet-touch-zoom"), Ee(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function _onTouchStart(t) {
          var e = this._map;

          if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
            var n = e.mouseEventToContainerPoint(t.touches[0]),
                i = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))), this._startDist = n.distanceTo(i), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), ke(document, "touchmove", this._onTouchMove, this), ke(document, "touchend", this._onTouchEnd, this), Ae(t);
          }
        },
        _onTouchMove: function _onTouchMove(t) {
          if (t.touches && 2 === t.touches.length && this._zooming) {
            var e = this._map,
                n = e.mouseEventToContainerPoint(t.touches[0]),
                i = e.mouseEventToContainerPoint(t.touches[1]),
                s = n.distanceTo(i) / this._startDist;

            if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
              if (this._center = this._startLatLng, 1 === s) return;
            } else {
              var a = n._add(i)._divideBy(2)._subtract(this._centerPoint);

              if (1 === s && 0 === a.x && 0 === a.y) return;
              this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom);
            }

            this._moved || (e._moveStart(!0, !1), this._moved = !0), M(this._animRequest);
            var r = o(e._move, e, this._center, this._zoom, {
              pinch: !0,
              round: !1
            });
            this._animRequest = z(r, this, !0), Ae(t);
          }
        },
        _onTouchEnd: function _onTouchEnd() {
          this._moved && this._zooming ? (this._zooming = !1, M(this._animRequest), Ee(document, "touchmove", this._onTouchMove), Ee(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
        }
      });
      Ke.addInitHook("addHandler", "touchZoom", xi), Ke.BoxZoom = _i, Ke.DoubleClickZoom = fi, Ke.Drag = mi, Ke.Keyboard = gi, Ke.ScrollWheelZoom = vi, Ke.Tap = yi, Ke.TouchZoom = xi, Object.freeze = e, t.version = "1.4.0", t.Control = Ye, t.control = Xe, t.Browser = Et, t.Evented = S, t.Mixin = on, t.Util = k, t.Class = C, t.Handler = en, t.extend = n, t.bind = o, t.stamp = a, t.setOptions = p, t.DomEvent = qe, t.DomUtil = Me, t.PosAnimation = Ge, t.Draggable = hn, t.LineUtil = gn, t.PolyUtil = yn, t.Point = Z, t.point = I, t.Bounds = O, t.bounds = A, t.Transformation = V, t.transformation = q, t.Projection = wn, t.LatLng = N, t.latLng = j, t.LatLngBounds = R, t.latLngBounds = D, t.CRS = H, t.GeoJSON = Dn, t.geoJSON = Gn, t.geoJson = Kn, t.Layer = zn, t.LayerGroup = Mn, t.layerGroup = function (t, e) {
        return new Mn(t, e);
      }, t.FeatureGroup = kn, t.featureGroup = function (t) {
        return new kn(t);
      }, t.ImageOverlay = Yn, t.imageOverlay = function (t, e, n) {
        return new Yn(t, e, n);
      }, t.VideoOverlay = Xn, t.videoOverlay = function (t, e, n) {
        return new Xn(t, e, n);
      }, t.DivOverlay = Jn, t.Popup = $n, t.popup = function (t, e) {
        return new $n(t, e);
      }, t.Tooltip = Qn, t.tooltip = function (t, e) {
        return new Qn(t, e);
      }, t.Icon = Cn, t.icon = function (t) {
        return new Cn(t);
      }, t.DivIcon = ti, t.divIcon = function (t) {
        return new ti(t);
      }, t.Marker = Zn, t.marker = function (t, e) {
        return new Zn(t, e);
      }, t.TileLayer = ni, t.tileLayer = ii, t.GridLayer = ei, t.gridLayer = function (t) {
        return new ei(t);
      }, t.SVG = ci, t.svg = di, t.Renderer = si, t.Canvas = ai, t.canvas = ri, t.Path = Bn, t.CircleMarker = In, t.circleMarker = function (t, e) {
        return new In(t, e);
      }, t.Circle = On, t.circle = function (t, e, n) {
        return new On(t, e, n);
      }, t.Polyline = An, t.polyline = function (t, e) {
        return new An(t, e);
      }, t.Polygon = Rn, t.polygon = function (t, e) {
        return new Rn(t, e);
      }, t.Rectangle = pi, t.rectangle = function (t, e) {
        return new pi(t, e);
      }, t.Map = Ke, t.map = function (t, e) {
        return new Ke(t, e);
      };
      var bi = window.L;
      t.noConflict = function () {
        return window.L = bi, this;
      }, window.L = t;
    }(e);
  },
  53: function _(t, e, n) {
    t.exports = n(99);
  },
  99: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n(35);

    var o =
    /*#__PURE__*/
    function (_HTMLElement) {
      _inherits(o, _HTMLElement);

      function o() {
        var _this;

        _classCallCheck(this, o);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(o).apply(this, arguments)), _this.mapDivElement = document.createElement("div"), _this.htmlDivElement = document.createElement("div"), _this.styleElement = document.createElement("style"), _this.map = Object(i.map)(_this.mapDivElement);
        return _this;
      }

      _createClass(o, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          if (this.attachShadow({
            mode: "open"
          }), !this.shadowRoot) throw new Error("Unable to get shadow after it was attached");
          this.shadowRoot.appendChild(this.styleElement), this.styleElement.innerText = o.style, this.htmlDivElement.classList.add("wrapper"), this.htmlDivElement.appendChild(this.mapDivElement), this.shadowRoot.appendChild(this.htmlDivElement), this.map.setView([0, 0], 18), Object(i.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.map);
        }
      }, {
        key: "setView",
        value: function setView(t, e) {
          this.map.setView([t, e], 13);
        }
      }], [{
        key: "style",
        get: function get() {
          return '/* required styles */\n.wrapper {\n        display: flex;\n    flex-grow: 1;\n    width: 100%;\n}\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\tflex-grow: 1;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\t  -webkit-user-drag: none;\n\t}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering: -webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers "stretching" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth: 1600px;\n\theight: 1600px;\n\t-webkit-transform-origin: 0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer,\n.leaflet-container .leaflet-tile {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\t}\n\n.leaflet-container.leaflet-touch-zoom {\n\t-ms-touch-action: pan-x pan-y;\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t-ms-touch-action: pinch-zoom;\n\t/* Fallback for FF which doesn\'t support pinch-zoom */\n\ttouch-action: none;\n\ttouch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.leaflet-container {\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-pane         { z-index: 400; }\n\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n\n.leaflet-vml-shape {\n\twidth: 1px;\n\theight: 1px;\n\t}\n.lvml {\n\tbehavior: url(#default#VML);\n\tdisplay: inline-block;\n\tposition: absolute;\n\t}\n\n\n/* control positioning */\n\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn\'t have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-tile {\n\twill-change: opacity;\n\t}\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\t-webkit-transition: opacity 0.2s linear;\n\t   -moz-transition: opacity 0.2s linear;\n\t        transition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\t-webkit-transform-origin: 0 0;\n\t    -ms-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\twill-change: transform;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t        transition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor: -webkit-grab;\n\tcursor:    -moz-grab;\n\tcursor:         grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor: -webkit-grabbing;\n\tcursor:    -moz-grabbing;\n\tcursor:         grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn\'t have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n\n.leaflet-container {\n\tbackground: #ddd;\n\toutline: 0;\n\t}\n.leaflet-container a {\n\tcolor: #0078A8;\n\t}\n.leaflet-container a.leaflet-active {\n\toutline: 2px solid orange;\n\t}\n.leaflet-zoom-box {\n\tborder: 2px dotted #38f;\n\tbackground: rgba(255,255,255,0.5);\n\t}\n\n\n/* general typography */\n.leaflet-container {\n\tfont: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;\n\t}\n\n\n/* general toolbar styles */\n\n.leaflet-bar {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\n\tborder-radius: 4px;\n\t}\n.leaflet-bar a,\n.leaflet-bar a:hover {\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid #ccc;\n\twidth: 26px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: black;\n\t}\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tdisplay: block;\n\t}\n.leaflet-bar a:hover {\n\tbackground-color: #f4f4f4;\n\t}\n.leaflet-bar a:first-child {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\t}\n.leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom: none;\n\t}\n.leaflet-bar a.leaflet-disabled {\n\tcursor: default;\n\tbackground-color: #f4f4f4;\n\tcolor: #bbb;\n\t}\n\n.leaflet-touch .leaflet-bar a {\n\twidth: 30px;\n\theight: 30px;\n\tline-height: 30px;\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n\t}\n\n/* zoom control */\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n\tfont: bold 18px \'Lucida Console\', Monaco, monospace;\n\ttext-indent: 1px;\n\t}\n\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\n\tfont-size: 22px;\n\t}\n\n\n/* layers control */\n\n.leaflet-control-layers {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\n\tbackground: #fff;\n\tborder-radius: 5px;\n\t}\n.leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers.png);\n\twidth: 36px;\n\theight: 36px;\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers-2x.png);\n\tbackground-size: 26px 26px;\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\n\twidth: 44px;\n\theight: 44px;\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n\tdisplay: none;\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n\tdisplay: block;\n\tposition: relative;\n\t}\n.leaflet-control-layers-expanded {\n\tpadding: 6px 10px 6px 6px;\n\tcolor: #333;\n\tbackground: #fff;\n\t}\n.leaflet-control-layers-scrollbar {\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tpadding-right: 5px;\n\t}\n.leaflet-control-layers-selector {\n\tmargin-top: 2px;\n\tposition: relative;\n\ttop: 1px;\n\t}\n.leaflet-control-layers label {\n\tdisplay: block;\n\t}\n.leaflet-control-layers-separator {\n\theight: 0;\n\tborder-top: 1px solid #ddd;\n\tmargin: 5px -10px 5px -6px;\n\t}\n\n/* Default icon URLs */\n.leaflet-default-icon-path {\n\tbackground-image: url(images/marker-icon.png);\n\t}\n\n\n/* attribution and scale controls */\n\n.leaflet-container .leaflet-control-attribution {\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.7);\n\tmargin: 0;\n\t}\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n\tpadding: 0 5px;\n\tcolor: #333;\n\t}\n.leaflet-control-attribution a {\n\ttext-decoration: none;\n\t}\n.leaflet-control-attribution a:hover {\n\ttext-decoration: underline;\n\t}\n.leaflet-container .leaflet-control-attribution,\n.leaflet-container .leaflet-control-scale {\n\tfont-size: 11px;\n\t}\n.leaflet-left .leaflet-control-scale {\n\tmargin-left: 5px;\n\t}\n.leaflet-bottom .leaflet-control-scale {\n\tmargin-bottom: 5px;\n\t}\n.leaflet-control-scale-line {\n\tborder: 2px solid #777;\n\tborder-top: none;\n\tline-height: 1.1;\n\tpadding: 2px 5px 1px;\n\tfont-size: 11px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.5);\n\t}\n.leaflet-control-scale-line:not(:first-child) {\n\tborder-top: 2px solid #777;\n\tborder-bottom: none;\n\tmargin-top: -2px;\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n\tborder-bottom: 2px solid #777;\n\t}\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tbox-shadow: none;\n\t}\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder: 2px solid rgba(0,0,0,0.2);\n\tbackground-clip: padding-box;\n\t}\n\n\n/* popup */\n\n.leaflet-popup {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\t}\n.leaflet-popup-content-wrapper {\n\tpadding: 1px;\n\ttext-align: left;\n\tborder-radius: 12px;\n\t}\n.leaflet-popup-content {\n\tmargin: 13px 19px;\n\tline-height: 1.4;\n\t}\n.leaflet-popup-content p {\n\tmargin: 18px 0;\n\t}\n.leaflet-popup-tip-container {\n\twidth: 40px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -20px;\n\toverflow: hidden;\n\tpointer-events: none;\n\t}\n.leaflet-popup-tip {\n\twidth: 17px;\n\theight: 17px;\n\tpadding: 1px;\n\n\tmargin: -10px auto 0;\n\n\t-webkit-transform: rotate(45deg);\n\t   -moz-transform: rotate(45deg);\n\t    -ms-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\t}\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n\tbackground: white;\n\tcolor: #333;\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\n\t}\n.leaflet-container a.leaflet-popup-close-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 4px 4px 0 0;\n\tborder: none;\n\ttext-align: center;\n\twidth: 18px;\n\theight: 14px;\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\n\tcolor: #c3c3c3;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tbackground: transparent;\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover {\n\tcolor: #999;\n\t}\n.leaflet-popup-scrolled {\n\toverflow: auto;\n\tborder-bottom: 1px solid #ddd;\n\tborder-top: 1px solid #ddd;\n\t}\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n\tzoom: 1;\n\t}\n.leaflet-oldie .leaflet-popup-tip {\n\twidth: 24px;\n\tmargin: 0 auto;\n\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n\t}\n.leaflet-oldie .leaflet-popup-tip-container {\n\tmargin-top: -1px;\n\t}\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n\tborder: 1px solid #999;\n\t}\n\n\n/* div icon */\n\n.leaflet-div-icon {\n\tbackground: #fff;\n\tborder: 1px solid #666;\n\t}\n\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition: absolute;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 3px;\n\tcolor: #222;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\n\t}\n.leaflet-tooltip.leaflet-clickable {\n\tcursor: pointer;\n\tpointer-events: auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tposition: absolute;\n\tpointer-events: none;\n\tborder: 6px solid transparent;\n\tbackground: transparent;\n\tcontent: "";\n\t}\n\n/* Directions */\n\n.leaflet-tooltip-bottom {\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft: 50%;\n\tmargin-left: -6px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom: 0;\n\tmargin-bottom: -12px;\n\tborder-top-color: #fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop: 0;\n\tmargin-top: -12px;\n\tmargin-left: -6px;\n\tborder-bottom-color: #fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop: 50%;\n\tmargin-top: -6px;\n\t}\n.leaflet-tooltip-left:before {\n\tright: 0;\n\tmargin-right: -12px;\n\tborder-left-color: #fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft: 0;\n\tmargin-left: -12px;\n\tborder-right-color: #fff;\n\t}\n';
        }
      }]);

      return o;
    }(_wrapNativeSuper(HTMLElement));

    window.customElements.define("tcb-leaflet-map", o);
    window.customElements.define("tcb-csc-gauges",
    /*#__PURE__*/
    function (_HTMLElement2) {
      _inherits(_class, _HTMLElement2);

      function _class() {
        var _this2;

        _classCallCheck(this, _class);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments)), _this2.snapshotResult = {
          flags: {
            wheelRevolutionsPresent: !1,
            crankRevolutionsPresent: !1
          },
          wheel: {
            lastTime: -1,
            revolutions: -1
          },
          crank: {
            lastTime: -1,
            revolutions: -1
          }
        }, _this2.speedOutput = null, _this2.status = null, _this2.cadenceOutput = null, _this2.distanceOutput = null;
        return _this2;
      }

      _createClass(_class, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this3 = this;

          var t = this.attachShadow({
            mode: "open"
          });
          self.addEventListener("click",
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _this3.connect();

                  case 3:
                    _context.next = 8;
                    break;

                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);
                    _this3.updateStatus("an error ocurrend: " + _context.t0.message), console.error(_context.t0);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 5]]);
          }))), t.innerHTML = '\n        <style>\n            :host {\n                font-family: \'Inconsolata\', monospace;\n                \n            }\n            .main-value {\n                font-size: 4rem;\n            }\n            \n            .value {\n                font-size : 2rem;\n            }\n            \n        </style>\n        <div>\n               <h2>Speed</h2>\n               <tcb-output class="main-value" id="speed" value="0"></tcb-output> <span>Km/H</span>\n               <h2>Cadence</h2>\n               <tcb-output class="value" id="cadence" value="0"></tcb-output> <span>RPM</span>\n               <h2>Distance</h2>\n               <tcb-output class="value" id="distance" value="0"></tcb-output> <span>Km</span>\n               <div id="status" value="0"></div>\n              \n         </div>', this.speedOutput = t.getElementById("speed"), this.cadenceOutput = t.getElementById("cadence"), this.distanceOutput = t.getElementById("distance"), this.status = t.getElementById("status");
        }
      }, {
        key: "connect",
        value: function () {
          var _connect = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var t, _e2, _n2, _i2, _o;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.queryCscDevice();

                  case 2:
                    t = _context2.sent;

                    if (!(t && (this.updateStatus("got device"), t.gatt))) {
                      _context2.next = 25;
                      break;
                    }

                    _context2.next = 6;
                    return t.gatt.connect();

                  case 6:
                    _e2 = _context2.sent;
                    this.updateStatus("connected device");
                    _context2.next = 10;
                    return _e2.getPrimaryService("cycling_speed_and_cadence");

                  case 10:
                    _n2 = _context2.sent;
                    this.updateStatus("found cycling_speed_and_cadence service");
                    _context2.next = 14;
                    return _n2.getCharacteristic("csc_measurement");

                  case 14:
                    _i2 = _context2.sent;
                    _context2.next = 17;
                    return _e2.getPrimaryServices();

                  case 17:
                    _o = _context2.sent;
                    console.log(_o);
                    _context2.next = 21;
                    return new Promise(function (t) {
                      setTimeout(t, 300);
                    });

                  case 21:
                    _context2.next = 23;
                    return _i2.startNotifications();

                  case 23:
                    this.updateStatus("subscribing to csc mesurement");

                    _i2.addEventListener("characteristicvaluechanged", function (t) {
                      _this4.updateStatusFromEvent("csc_measurement", t), _this4.updateFromCscMeasurementEvent(t), _this4.updateStatus("got csc_measurement " + t.timeStamp);
                    });

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function connect() {
            return _connect.apply(this, arguments);
          }

          return connect;
        }()
      }, {
        key: "queryCscDevice",
        value: function () {
          var _queryCscDevice = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return navigator.bluetooth.requestDevice({
                      filters: [{
                        services: ["cycling_speed_and_cadence"]
                      }]
                    });

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function queryCscDevice() {
            return _queryCscDevice.apply(this, arguments);
          }

          return queryCscDevice;
        }()
      }, {
        key: "updateFromCscMeasurementEvent",
        value: function updateFromCscMeasurementEvent(t) {
          var e = t.target.value;
          console.log(e.buffer);
          var n = this.extractValues(e);
          n.time = t.timeStamp, n.flags.wheelRevolutionsPresent && n.wheel && this.snapshotResult.wheel && this.onWheelMeasurementReceived(n.wheel, this.snapshotResult.wheel), n.flags.crankRevolutionsPresent && n.crank && this.snapshotResult.crank, Object.assign(this.snapshotResult, n);
        }
      }, {
        key: "extractValues",
        value: function extractValues(t) {
          var e = t.getUint8(0);
          var n = 1;
          var i = (1 & e) > 0,
              o = (2 & e) > 0,
              s = {
            flags: {
              wheelRevolutionsPresent: i,
              crankRevolutionsPresent: o
            }
          };

          if (i) {
            var _e3 = t.getUint32(n, !0);

            n += 4;

            var _i3 = t.getUint16(n, !0);

            n += 2, s.wheel = {
              revolutions: _e3,
              lastTime: _i3
            };
          }

          if (o) {
            var _e4 = t.getUint16(n, !0);

            n += 2;

            var _i4 = t.getUint16(n, !0);

            s.crank = {
              revolutions: _e4,
              lastTime: _i4
            };
          }

          return console.log(s), s;
        }
      }, {
        key: "onWheelMeasurementReceived",
        value: function onWheelMeasurementReceived(t, e) {
          if (e.revolutions !== t.revolutions) {
            if (e.revolutions >= 0) {
              var _n3 = 2.34;

              var _i5;

              _i5 = t.lastTime < e.lastTime ? (65535 + t.lastTime - e.lastTime) / 1024 : (t.lastTime - e.lastTime) / 1024, console.log("time difference " + _i5);

              var _o2 = (t.revolutions - e.revolutions) * _n3,
                  _s = t.revolutions * _n3,
                  _a = t.revolutions * _n3,
                  r = _o2 / _i5,
                  h = 60 * (t.revolutions - e.revolutions) / _i5;

              this.updateWheelData({
                totalDistance: _s,
                distance: _a,
                speed: r,
                cadence: h
              });
            }
          } else this.notifyBreak();
        }
      }, {
        key: "updateWheelData",
        value: function updateWheelData(t) {
          this.updateSpeed(t.speed), this.updateCadence(t.cadence), this.distanceOutput && (this.distanceOutput.value = t.distance / 1e3), console.log(t);
        }
      }, {
        key: "updateCadence",
        value: function updateCadence(t) {
          this.cadenceOutput && (this.cadenceOutput.value = t);
        }
      }, {
        key: "updateSpeed",
        value: function updateSpeed(t) {
          this.speedOutput && (this.speedOutput.value = 3.6 * t);
        }
      }, {
        key: "notifyBreak",
        value: function notifyBreak() {
          this.status && (this.status.innerText = "Break");
        }
      }, {
        key: "updateStatusFromEvent",
        value: function updateStatusFromEvent(t, e) {
          console.log(t, e);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(t) {
          this.status && (this.status.innerText = t);
        }
      }]);

      return _class;
    }(_wrapNativeSuper(HTMLElement)));

    function s() {
      return new Promise(function (t, e) {
        navigator.geolocation.getCurrentPosition(t, e, {
          enableHighAccuracy: !1
        });
      });
    }

    window.customElements.define("tcb-output",
    /*#__PURE__*/
    function (_HTMLElement3) {
      _inherits(_class2, _HTMLElement3);

      function _class2() {
        var _this5;

        _classCallCheck(this, _class2);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments)), _this5._value = 0, _this5.output = null;
        return _this5;
      }

      _createClass(_class2, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var t = this.attachShadow({
            mode: "open"
          });
          this.output = document.createElement("output"), this.output.innerHTML = .001.toFixed(0), t.appendChild(this.output);
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(t) {
          this.output && (this.output.innerHTML = t.toFixed(1) + "");
        }
      }]);

      return _class2;
    }(_wrapNativeSuper(HTMLElement))), n.d(e, "getPosition", function () {
      return s;
    });
    var a = document.getElementById("map");

    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return function () {
                var _t2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4() {
                  var e;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return s();

                        case 2:
                          e = _context4.sent;
                          a.setView(e.coords.latitude, e.coords.longitude), requestAnimationFrame(function () {
                            return t();
                          });

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                function t() {
                  return _t2.apply(this, arguments);
                }

                return t;
              }()();

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});