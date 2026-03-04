(function () {
  const c = document.createElement('link').relList;
  if (c && c.supports && c.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) f(s);
  new MutationObserver((s) => {
    for (const d of s)
      if (d.type === 'childList')
        for (const m of d.addedNodes) m.tagName === 'LINK' && m.rel === 'modulepreload' && f(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const d = {};
    return (
      s.integrity && (d.integrity = s.integrity),
      s.referrerPolicy && (d.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (d.credentials = 'omit')
          : (d.credentials = 'same-origin'),
      d
    );
  }
  function f(s) {
    if (s.ep) return;
    s.ep = !0;
    const d = r(s);
    fetch(s.href, d);
  }
})();
var ar = { exports: {} },
  Qa = {};
var jh;
function Mp() {
  if (jh) return Qa;
  jh = 1;
  var u = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.fragment');
  function r(f, s, d) {
    var m = null;
    if ((d !== void 0 && (m = '' + d), s.key !== void 0 && (m = '' + s.key), 'key' in s)) {
      d = {};
      for (var p in s) p !== 'key' && (d[p] = s[p]);
    } else d = s;
    return ((s = d.ref), { $$typeof: u, type: f, key: m, ref: s !== void 0 ? s : null, props: d });
  }
  return ((Qa.Fragment = c), (Qa.jsx = r), (Qa.jsxs = r), Qa);
}
var Yh;
function Np() {
  return (Yh || ((Yh = 1), (ar.exports = Mp())), ar.exports);
}
var at = Np(),
  ur = { exports: {} },
  Va = {},
  ir = { exports: {} },
  cr = {};
var Gh;
function xp() {
  return (
    Gh ||
      ((Gh = 1),
      (function (u) {
        function c(N, j) {
          var k = N.length;
          N.push(j);
          t: for (; 0 < k; ) {
            var yt = (k - 1) >>> 1,
              gt = N[yt];
            if (0 < s(gt, j)) ((N[yt] = j), (N[k] = gt), (k = yt));
            else break t;
          }
        }
        function r(N) {
          return N.length === 0 ? null : N[0];
        }
        function f(N) {
          if (N.length === 0) return null;
          var j = N[0],
            k = N.pop();
          if (k !== j) {
            N[0] = k;
            t: for (var yt = 0, gt = N.length, E = gt >>> 1; yt < E; ) {
              var w = 2 * (yt + 1) - 1,
                Y = N[w],
                V = w + 1,
                I = N[V];
              if (0 > s(Y, k))
                V < gt && 0 > s(I, Y) ? ((N[yt] = I), (N[V] = k), (yt = V)) : ((N[yt] = Y), (N[w] = k), (yt = w));
              else if (V < gt && 0 > s(I, k)) ((N[yt] = I), (N[V] = k), (yt = V));
              else break t;
            }
          }
          return j;
        }
        function s(N, j) {
          var k = N.sortIndex - j.sortIndex;
          return k !== 0 ? k : N.id - j.id;
        }
        if (((u.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var d = performance;
          u.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            p = m.now();
          u.unstable_now = function () {
            return m.now() - p;
          };
        }
        var v = [],
          y = [],
          S = 1,
          b = null,
          q = 3,
          X = !1,
          A = !1,
          x = !1,
          C = !1,
          G = typeof setTimeout == 'function' ? setTimeout : null,
          $ = typeof clearTimeout == 'function' ? clearTimeout : null,
          Q = typeof setImmediate < 'u' ? setImmediate : null;
        function et(N) {
          for (var j = r(y); j !== null; ) {
            if (j.callback === null) f(y);
            else if (j.startTime <= N) (f(y), (j.sortIndex = j.expirationTime), c(v, j));
            else break;
            j = r(y);
          }
        }
        function ut(N) {
          if (((x = !1), et(N), !A))
            if (r(v) !== null) ((A = !0), mt || ((mt = !0), Bt()));
            else {
              var j = r(y);
              j !== null && Ut(ut, j.startTime - N);
            }
        }
        var mt = !1,
          J = -1,
          Ot = 5,
          xt = -1;
        function he() {
          return C ? !0 : !(u.unstable_now() - xt < Ot);
        }
        function ee() {
          if (((C = !1), mt)) {
            var N = u.unstable_now();
            xt = N;
            var j = !0;
            try {
              t: {
                ((A = !1), x && ((x = !1), $(J), (J = -1)), (X = !0));
                var k = q;
                try {
                  e: {
                    for (et(N), b = r(v); b !== null && !(b.expirationTime > N && he()); ) {
                      var yt = b.callback;
                      if (typeof yt == 'function') {
                        ((b.callback = null), (q = b.priorityLevel));
                        var gt = yt(b.expirationTime <= N);
                        if (((N = u.unstable_now()), typeof gt == 'function')) {
                          ((b.callback = gt), et(N), (j = !0));
                          break e;
                        }
                        (b === r(v) && f(v), et(N));
                      } else f(v);
                      b = r(v);
                    }
                    if (b !== null) j = !0;
                    else {
                      var E = r(y);
                      (E !== null && Ut(ut, E.startTime - N), (j = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (q = k), (X = !1));
                }
                j = void 0;
              }
            } finally {
              j ? Bt() : (mt = !1);
            }
          }
        }
        var Bt;
        if (typeof Q == 'function')
          Bt = function () {
            Q(ee);
          };
        else if (typeof MessageChannel < 'u') {
          var Pt = new MessageChannel(),
            jt = Pt.port2;
          ((Pt.port1.onmessage = ee),
            (Bt = function () {
              jt.postMessage(null);
            }));
        } else
          Bt = function () {
            G(ee, 0);
          };
        function Ut(N, j) {
          J = G(function () {
            N(u.unstable_now());
          }, j);
        }
        ((u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (u.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ot = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (u.unstable_next = function (N) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = q;
            }
            var k = q;
            q = j;
            try {
              return N();
            } finally {
              q = k;
            }
          }),
          (u.unstable_requestPaint = function () {
            C = !0;
          }),
          (u.unstable_runWithPriority = function (N, j) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var k = q;
            q = N;
            try {
              return j();
            } finally {
              q = k;
            }
          }),
          (u.unstable_scheduleCallback = function (N, j, k) {
            var yt = u.unstable_now();
            switch (
              (typeof k == 'object' && k !== null
                ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? yt + k : yt))
                : (k = yt),
              N)
            ) {
              case 1:
                var gt = -1;
                break;
              case 2:
                gt = 250;
                break;
              case 5:
                gt = 1073741823;
                break;
              case 4:
                gt = 1e4;
                break;
              default:
                gt = 5e3;
            }
            return (
              (gt = k + gt),
              (N = { id: S++, callback: j, priorityLevel: N, startTime: k, expirationTime: gt, sortIndex: -1 }),
              k > yt
                ? ((N.sortIndex = k),
                  c(y, N),
                  r(v) === null && N === r(y) && (x ? ($(J), (J = -1)) : (x = !0), Ut(ut, k - yt)))
                : ((N.sortIndex = gt), c(v, N), A || X || ((A = !0), mt || ((mt = !0), Bt()))),
              N
            );
          }),
          (u.unstable_shouldYield = he),
          (u.unstable_wrapCallback = function (N) {
            var j = q;
            return function () {
              var k = q;
              q = j;
              try {
                return N.apply(this, arguments);
              } finally {
                q = k;
              }
            };
          }));
      })(cr)),
    cr
  );
}
var Xh;
function Bp() {
  return (Xh || ((Xh = 1), (ir.exports = xp())), ir.exports);
}
var fr = { exports: {} },
  tt = {};
var Qh;
function Hp() {
  if (Qh) return tt;
  Qh = 1;
  var u = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    d = Symbol.for('react.consumer'),
    m = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    v = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    b = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function X(E) {
    return E === null || typeof E != 'object'
      ? null
      : ((E = (q && E[q]) || E['@@iterator']), typeof E == 'function' ? E : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    x = Object.assign,
    C = {};
  function G(E, w, Y) {
    ((this.props = E), (this.context = w), (this.refs = C), (this.updater = Y || A));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (E, w) {
      if (typeof E != 'object' && typeof E != 'function' && E != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, E, w, 'setState');
    }),
    (G.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
    }));
  function $() {}
  $.prototype = G.prototype;
  function Q(E, w, Y) {
    ((this.props = E), (this.context = w), (this.refs = C), (this.updater = Y || A));
  }
  var et = (Q.prototype = new $());
  ((et.constructor = Q), x(et, G.prototype), (et.isPureReactComponent = !0));
  var ut = Array.isArray;
  function mt() {}
  var J = { H: null, A: null, T: null, S: null },
    Ot = Object.prototype.hasOwnProperty;
  function xt(E, w, Y) {
    var V = Y.ref;
    return { $$typeof: u, type: E, key: w, ref: V !== void 0 ? V : null, props: Y };
  }
  function he(E, w) {
    return xt(E.type, w, E.props);
  }
  function ee(E) {
    return typeof E == 'object' && E !== null && E.$$typeof === u;
  }
  function Bt(E) {
    var w = { '=': '=0', ':': '=2' };
    return (
      '$' +
      E.replace(/[=:]/g, function (Y) {
        return w[Y];
      })
    );
  }
  var Pt = /\/+/g;
  function jt(E, w) {
    return typeof E == 'object' && E !== null && E.key != null ? Bt('' + E.key) : w.toString(36);
  }
  function Ut(E) {
    switch (E.status) {
      case 'fulfilled':
        return E.value;
      case 'rejected':
        throw E.reason;
      default:
        switch (
          (typeof E.status == 'string'
            ? E.then(mt, mt)
            : ((E.status = 'pending'),
              E.then(
                function (w) {
                  E.status === 'pending' && ((E.status = 'fulfilled'), (E.value = w));
                },
                function (w) {
                  E.status === 'pending' && ((E.status = 'rejected'), (E.reason = w));
                }
              )),
          E.status)
        ) {
          case 'fulfilled':
            return E.value;
          case 'rejected':
            throw E.reason;
        }
    }
    throw E;
  }
  function N(E, w, Y, V, I) {
    var it = typeof E;
    (it === 'undefined' || it === 'boolean') && (E = null);
    var vt = !1;
    if (E === null) vt = !0;
    else
      switch (it) {
        case 'bigint':
        case 'string':
        case 'number':
          vt = !0;
          break;
        case 'object':
          switch (E.$$typeof) {
            case u:
            case c:
              vt = !0;
              break;
            case S:
              return ((vt = E._init), N(vt(E._payload), w, Y, V, I));
          }
      }
    if (vt)
      return (
        (I = I(E)),
        (vt = V === '' ? '.' + jt(E, 0) : V),
        ut(I)
          ? ((Y = ''),
            vt != null && (Y = vt.replace(Pt, '$&/') + '/'),
            N(I, w, Y, '', function ($n) {
              return $n;
            }))
          : I != null &&
            (ee(I) &&
              (I = he(
                I,
                Y + (I.key == null || (E && E.key === I.key) ? '' : ('' + I.key).replace(Pt, '$&/') + '/') + vt
              )),
            w.push(I)),
        1
      );
    vt = 0;
    var le = V === '' ? '.' : V + ':';
    if (ut(E)) for (var Ht = 0; Ht < E.length; Ht++) ((V = E[Ht]), (it = le + jt(V, Ht)), (vt += N(V, w, Y, it, I)));
    else if (((Ht = X(E)), typeof Ht == 'function'))
      for (E = Ht.call(E), Ht = 0; !(V = E.next()).done; )
        ((V = V.value), (it = le + jt(V, Ht++)), (vt += N(V, w, Y, it, I)));
    else if (it === 'object') {
      if (typeof E.then == 'function') return N(Ut(E), w, Y, V, I);
      throw (
        (w = String(E)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (w === '[object Object]' ? 'object with keys {' + Object.keys(E).join(', ') + '}' : w) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return vt;
  }
  function j(E, w, Y) {
    if (E == null) return E;
    var V = [],
      I = 0;
    return (
      N(E, V, '', '', function (it) {
        return w.call(Y, it, I++);
      }),
      V
    );
  }
  function k(E) {
    if (E._status === -1) {
      var w = E._result;
      ((w = w()),
        w.then(
          function (Y) {
            (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = Y));
          },
          function (Y) {
            (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = Y));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = w)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var yt =
      typeof reportError == 'function'
        ? reportError
        : function (E) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var w = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == 'object' && E !== null && typeof E.message == 'string' ? String(E.message) : String(E),
                error: E
              });
              if (!window.dispatchEvent(w)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', E);
              return;
            }
            console.error(E);
          },
    gt = {
      map: j,
      forEach: function (E, w, Y) {
        j(
          E,
          function () {
            w.apply(this, arguments);
          },
          Y
        );
      },
      count: function (E) {
        var w = 0;
        return (
          j(E, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (E) {
        return (
          j(E, function (w) {
            return w;
          }) || []
        );
      },
      only: function (E) {
        if (!ee(E)) throw Error('React.Children.only expected to receive a single React element child.');
        return E;
      }
    };
  return (
    (tt.Activity = b),
    (tt.Children = gt),
    (tt.Component = G),
    (tt.Fragment = r),
    (tt.Profiler = s),
    (tt.PureComponent = Q),
    (tt.StrictMode = f),
    (tt.Suspense = v),
    (tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (tt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return J.H.useMemoCache(E);
      }
    }),
    (tt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (tt.cacheSignal = function () {
      return null;
    }),
    (tt.cloneElement = function (E, w, Y) {
      if (E == null) throw Error('The argument must be a React element, but you passed ' + E + '.');
      var V = x({}, E.props),
        I = E.key;
      if (w != null)
        for (it in (w.key !== void 0 && (I = '' + w.key), w))
          !Ot.call(w, it) ||
            it === 'key' ||
            it === '__self' ||
            it === '__source' ||
            (it === 'ref' && w.ref === void 0) ||
            (V[it] = w[it]);
      var it = arguments.length - 2;
      if (it === 1) V.children = Y;
      else if (1 < it) {
        for (var vt = Array(it), le = 0; le < it; le++) vt[le] = arguments[le + 2];
        V.children = vt;
      }
      return xt(E.type, I, V);
    }),
    (tt.createContext = function (E) {
      return (
        (E = { $$typeof: m, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: d, _context: E }),
        E
      );
    }),
    (tt.createElement = function (E, w, Y) {
      var V,
        I = {},
        it = null;
      if (w != null)
        for (V in (w.key !== void 0 && (it = '' + w.key), w))
          Ot.call(w, V) && V !== 'key' && V !== '__self' && V !== '__source' && (I[V] = w[V]);
      var vt = arguments.length - 2;
      if (vt === 1) I.children = Y;
      else if (1 < vt) {
        for (var le = Array(vt), Ht = 0; Ht < vt; Ht++) le[Ht] = arguments[Ht + 2];
        I.children = le;
      }
      if (E && E.defaultProps) for (V in ((vt = E.defaultProps), vt)) I[V] === void 0 && (I[V] = vt[V]);
      return xt(E, it, I);
    }),
    (tt.createRef = function () {
      return { current: null };
    }),
    (tt.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (tt.isValidElement = ee),
    (tt.lazy = function (E) {
      return { $$typeof: S, _payload: { _status: -1, _result: E }, _init: k };
    }),
    (tt.memo = function (E, w) {
      return { $$typeof: y, type: E, compare: w === void 0 ? null : w };
    }),
    (tt.startTransition = function (E) {
      var w = J.T,
        Y = {};
      J.T = Y;
      try {
        var V = E(),
          I = J.S;
        (I !== null && I(Y, V), typeof V == 'object' && V !== null && typeof V.then == 'function' && V.then(mt, yt));
      } catch (it) {
        yt(it);
      } finally {
        (w !== null && Y.types !== null && (w.types = Y.types), (J.T = w));
      }
    }),
    (tt.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (tt.use = function (E) {
      return J.H.use(E);
    }),
    (tt.useActionState = function (E, w, Y) {
      return J.H.useActionState(E, w, Y);
    }),
    (tt.useCallback = function (E, w) {
      return J.H.useCallback(E, w);
    }),
    (tt.useContext = function (E) {
      return J.H.useContext(E);
    }),
    (tt.useDebugValue = function () {}),
    (tt.useDeferredValue = function (E, w) {
      return J.H.useDeferredValue(E, w);
    }),
    (tt.useEffect = function (E, w) {
      return J.H.useEffect(E, w);
    }),
    (tt.useEffectEvent = function (E) {
      return J.H.useEffectEvent(E);
    }),
    (tt.useId = function () {
      return J.H.useId();
    }),
    (tt.useImperativeHandle = function (E, w, Y) {
      return J.H.useImperativeHandle(E, w, Y);
    }),
    (tt.useInsertionEffect = function (E, w) {
      return J.H.useInsertionEffect(E, w);
    }),
    (tt.useLayoutEffect = function (E, w) {
      return J.H.useLayoutEffect(E, w);
    }),
    (tt.useMemo = function (E, w) {
      return J.H.useMemo(E, w);
    }),
    (tt.useOptimistic = function (E, w) {
      return J.H.useOptimistic(E, w);
    }),
    (tt.useReducer = function (E, w, Y) {
      return J.H.useReducer(E, w, Y);
    }),
    (tt.useRef = function (E) {
      return J.H.useRef(E);
    }),
    (tt.useState = function (E) {
      return J.H.useState(E);
    }),
    (tt.useSyncExternalStore = function (E, w, Y) {
      return J.H.useSyncExternalStore(E, w, Y);
    }),
    (tt.useTransition = function () {
      return J.H.useTransition();
    }),
    (tt.version = '19.2.4'),
    tt
  );
}
var Vh;
function Rr() {
  return (Vh || ((Vh = 1), (fr.exports = Hp())), fr.exports);
}
var rr = { exports: {} },
  It = {};
var Zh;
function wp() {
  if (Zh) return It;
  Zh = 1;
  var u = Rr();
  function c(v) {
    var y = 'https://react.dev/errors/' + v;
    if (1 < arguments.length) {
      y += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) y += '&args[]=' + encodeURIComponent(arguments[S]);
    }
    return (
      'Minified React error #' +
      v +
      '; visit ' +
      y +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var f = {
      d: {
        f: r,
        r: function () {
          throw Error(c(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r
      },
      p: 0,
      findDOMNode: null
    },
    s = Symbol.for('react.portal');
  function d(v, y, S) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: b == null ? null : '' + b, children: v, containerInfo: y, implementation: S };
  }
  var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, y) {
    if (v === 'font') return '';
    if (typeof y == 'string') return y === 'use-credentials' ? y : '';
  }
  return (
    (It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (It.createPortal = function (v, y) {
      var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(c(299));
      return d(v, y, null, S);
    }),
    (It.flushSync = function (v) {
      var y = m.T,
        S = f.p;
      try {
        if (((m.T = null), (f.p = 2), v)) return v();
      } finally {
        ((m.T = y), (f.p = S), f.d.f());
      }
    }),
    (It.preconnect = function (v, y) {
      typeof v == 'string' &&
        (y
          ? ((y = y.crossOrigin), (y = typeof y == 'string' ? (y === 'use-credentials' ? y : '') : void 0))
          : (y = null),
        f.d.C(v, y));
    }),
    (It.prefetchDNS = function (v) {
      typeof v == 'string' && f.d.D(v);
    }),
    (It.preinit = function (v, y) {
      if (typeof v == 'string' && y && typeof y.as == 'string') {
        var S = y.as,
          b = p(S, y.crossOrigin),
          q = typeof y.integrity == 'string' ? y.integrity : void 0,
          X = typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0;
        S === 'style'
          ? f.d.S(v, typeof y.precedence == 'string' ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: q,
              fetchPriority: X
            })
          : S === 'script' &&
            f.d.X(v, {
              crossOrigin: b,
              integrity: q,
              fetchPriority: X,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0
            });
      }
    }),
    (It.preinitModule = function (v, y) {
      if (typeof v == 'string')
        if (typeof y == 'object' && y !== null) {
          if (y.as == null || y.as === 'script') {
            var S = p(y.as, y.crossOrigin);
            f.d.M(v, {
              crossOrigin: S,
              integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0
            });
          }
        } else y == null && f.d.M(v);
    }),
    (It.preload = function (v, y) {
      if (typeof v == 'string' && typeof y == 'object' && y !== null && typeof y.as == 'string') {
        var S = y.as,
          b = p(S, y.crossOrigin);
        f.d.L(v, S, {
          crossOrigin: b,
          integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
          nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
          type: typeof y.type == 'string' ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == 'string' ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == 'string' ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == 'string' ? y.imageSizes : void 0,
          media: typeof y.media == 'string' ? y.media : void 0
        });
      }
    }),
    (It.preloadModule = function (v, y) {
      if (typeof v == 'string')
        if (y) {
          var S = p(y.as, y.crossOrigin);
          f.d.m(v, {
            as: typeof y.as == 'string' && y.as !== 'script' ? y.as : void 0,
            crossOrigin: S,
            integrity: typeof y.integrity == 'string' ? y.integrity : void 0
          });
        } else f.d.m(v);
    }),
    (It.requestFormReset = function (v) {
      f.d.r(v);
    }),
    (It.unstable_batchedUpdates = function (v, y) {
      return v(y);
    }),
    (It.useFormState = function (v, y, S) {
      return m.H.useFormState(v, y, S);
    }),
    (It.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (It.version = '19.2.4'),
    It
  );
}
var Kh;
function Lp() {
  if (Kh) return rr.exports;
  Kh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return (u(), (rr.exports = wp()), rr.exports);
}
var Jh;
function qp() {
  if (Jh) return Va;
  Jh = 1;
  var u = Bp(),
    c = Rr(),
    r = Lp();
  function f(t) {
    var e = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function m(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (d(t) !== t) throw Error(f(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (((n = a.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return (v(a), t);
          if (i === n) return (v(a), e);
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== n.return) ((l = a), (n = i));
      else {
        for (var o = !1, h = a.child; h; ) {
          if (h === l) {
            ((o = !0), (l = a), (n = i));
            break;
          }
          if (h === n) {
            ((o = !0), (n = a), (l = i));
            break;
          }
          h = h.sibling;
        }
        if (!o) {
          for (h = i.child; h; ) {
            if (h === l) {
              ((o = !0), (l = i), (n = a));
              break;
            }
            if (h === n) {
              ((o = !0), (n = i), (l = a));
              break;
            }
            h = h.sibling;
          }
          if (!o) throw Error(f(189));
        }
      }
      if (l.alternate !== n) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = S(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    q = Symbol.for('react.element'),
    X = Symbol.for('react.transitional.element'),
    A = Symbol.for('react.portal'),
    x = Symbol.for('react.fragment'),
    C = Symbol.for('react.strict_mode'),
    G = Symbol.for('react.profiler'),
    $ = Symbol.for('react.consumer'),
    Q = Symbol.for('react.context'),
    et = Symbol.for('react.forward_ref'),
    ut = Symbol.for('react.suspense'),
    mt = Symbol.for('react.suspense_list'),
    J = Symbol.for('react.memo'),
    Ot = Symbol.for('react.lazy'),
    xt = Symbol.for('react.activity'),
    he = Symbol.for('react.memo_cache_sentinel'),
    ee = Symbol.iterator;
  function Bt(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ee && t[ee]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var Pt = Symbol.for('react.client.reference');
  function jt(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === Pt ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case x:
        return 'Fragment';
      case G:
        return 'Profiler';
      case C:
        return 'StrictMode';
      case ut:
        return 'Suspense';
      case mt:
        return 'SuspenseList';
      case xt:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case A:
          return 'Portal';
        case Q:
          return t.displayName || 'Context';
        case $:
          return (t._context.displayName || 'Context') + '.Consumer';
        case et:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case J:
          return ((e = t.displayName || null), e !== null ? e : jt(t.type) || 'Memo');
        case Ot:
          ((e = t._payload), (t = t._init));
          try {
            return jt(t(e));
          } catch {}
      }
    return null;
  }
  var Ut = Array.isArray,
    N = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    yt = [],
    gt = -1;
  function E(t) {
    return { current: t };
  }
  function w(t) {
    0 > gt || ((t.current = yt[gt]), (yt[gt] = null), gt--);
  }
  function Y(t, e) {
    (gt++, (yt[gt] = t.current), (t.current = e));
  }
  var V = E(null),
    I = E(null),
    it = E(null),
    vt = E(null);
  function le(t, e) {
    switch ((Y(it, e), Y(I, t), Y(V, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? fh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = fh(e)), (t = rh(e, t)));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (w(V), Y(V, t));
  }
  function Ht() {
    (w(V), w(I), w(it));
  }
  function $n(t) {
    t.memoizedState !== null && Y(vt, t);
    var e = V.current,
      l = rh(e, t.type);
    e !== l && (Y(I, t), Y(V, l));
  }
  function eu(t) {
    (I.current === t && (w(V), w(I)), vt.current === t && (w(vt), (ja._currentValue = k)));
  }
  var ji, Lr;
  function ql(t) {
    if (ji === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((ji = (e && e[1]) || ''),
          (Lr =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      ji +
      t +
      Lr
    );
  }
  var Yi = !1;
  function Gi(t, e) {
    if (!t || Yi) return '';
    Yi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (U) {
                  var z = U;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (U) {
                  z = U;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                z = U;
              }
              (L = t()) && typeof L.catch == 'function' && L.catch(function () {});
            }
          } catch (U) {
            if (U && z && typeof U.stack == 'string') return [U.stack, z.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name');
      a &&
        a.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
      var i = n.DetermineComponentFrameRoot(),
        o = i[0],
        h = i[1];
      if (o && h) {
        var g = o.split(`
`),
          _ = h.split(`
`);
        for (a = n = 0; n < g.length && !g[n].includes('DetermineComponentFrameRoot'); ) n++;
        for (; a < _.length && !_[a].includes('DetermineComponentFrameRoot'); ) a++;
        if (n === g.length || a === _.length)
          for (n = g.length - 1, a = _.length - 1; 1 <= n && 0 <= a && g[n] !== _[a]; ) a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (g[n] !== _[a]) {
            if (n !== 1 || a !== 1)
              do
                if ((n--, a--, 0 > a || g[n] !== _[a])) {
                  var B =
                    `
` + g[n].replace(' at new ', ' at ');
                  return (
                    t.displayName && B.includes('<anonymous>') && (B = B.replace('<anonymous>', t.displayName)),
                    B
                  );
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ((Yi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? ql(l) : '';
  }
  function fy(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ql(t.type);
      case 16:
        return ql('Lazy');
      case 13:
        return t.child !== e && e !== null ? ql('Suspense Fallback') : ql('Suspense');
      case 19:
        return ql('SuspenseList');
      case 0:
      case 15:
        return Gi(t.type, !1);
      case 11:
        return Gi(t.type.render, !1);
      case 1:
        return Gi(t.type, !0);
      case 31:
        return ql('Activity');
      default:
        return '';
    }
  }
  function qr(t) {
    try {
      var e = '',
        l = null;
      do ((e += fy(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Xi = Object.prototype.hasOwnProperty,
    Qi = u.unstable_scheduleCallback,
    Vi = u.unstable_cancelCallback,
    ry = u.unstable_shouldYield,
    oy = u.unstable_requestPaint,
    me = u.unstable_now,
    sy = u.unstable_getCurrentPriorityLevel,
    jr = u.unstable_ImmediatePriority,
    Yr = u.unstable_UserBlockingPriority,
    lu = u.unstable_NormalPriority,
    dy = u.unstable_LowPriority,
    Gr = u.unstable_IdlePriority,
    hy = u.log,
    my = u.unstable_setDisableYieldValue,
    Wn = null,
    ye = null;
  function hl(t) {
    if ((typeof hy == 'function' && my(t), ye && typeof ye.setStrictMode == 'function'))
      try {
        ye.setStrictMode(Wn, t);
      } catch {}
  }
  var pe = Math.clz32 ? Math.clz32 : vy,
    yy = Math.log,
    py = Math.LN2;
  function vy(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((yy(t) / py) | 0)) | 0);
  }
  var nu = 256,
    au = 262144,
    uu = 4194304;
  function jl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function iu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0,
      i = t.suspendedLanes,
      o = t.pingedLanes;
    t = t.warmLanes;
    var h = n & 134217727;
    return (
      h !== 0
        ? ((n = h & ~i),
          n !== 0 ? (a = jl(n)) : ((o &= h), o !== 0 ? (a = jl(o)) : l || ((l = h & ~t), l !== 0 && (a = jl(l)))))
        : ((h = n & ~i), h !== 0 ? (a = jl(h)) : o !== 0 ? (a = jl(o)) : l || ((l = n & ~t), l !== 0 && (a = jl(l)))),
      a === 0
        ? 0
        : e !== 0 &&
            e !== a &&
            (e & i) === 0 &&
            ((i = a & -a), (l = e & -e), i >= l || (i === 32 && (l & 4194048) !== 0))
          ? e
          : a
    );
  }
  function Pn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function gy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xr() {
    var t = uu;
    return ((uu <<= 1), (uu & 62914560) === 0 && (uu = 4194304), t);
  }
  function Zi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function In(t, e) {
    ((t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Sy(t, e, l, n, a, i) {
    var o = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var h = t.entanglements,
      g = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var B = 31 - pe(l),
        L = 1 << B;
      ((h[B] = 0), (g[B] = -1));
      var z = _[B];
      if (z !== null)
        for (_[B] = null, B = 0; B < z.length; B++) {
          var U = z[B];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~L;
    }
    (n !== 0 && Qr(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(o & ~e)));
  }
  function Qr(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var n = 31 - pe(e);
    ((t.entangledLanes |= e), (t.entanglements[n] = t.entanglements[n] | 1073741824 | (l & 261930)));
  }
  function Vr(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var n = 31 - pe(l),
        a = 1 << n;
      ((a & e) | (t[n] & e) && (t[n] |= e), (l &= ~a));
    }
  }
  function Zr(t, e) {
    var l = e & -e;
    return ((l = (l & 42) !== 0 ? 1 : Ki(l)), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l);
  }
  function Ki(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ji(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Kr() {
    var t = j.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Nh(t.type));
  }
  function Jr(t, e) {
    var l = j.p;
    try {
      return ((j.p = t), e());
    } finally {
      j.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2),
    Jt = '__reactFiber$' + ml,
    ae = '__reactProps$' + ml,
    cn = '__reactContainer$' + ml,
    ki = '__reactEvents$' + ml,
    by = '__reactListeners$' + ml,
    Ey = '__reactHandles$' + ml,
    kr = '__reactResources$' + ml,
    ta = '__reactMarker$' + ml;
  function Fi(t) {
    (delete t[Jt], delete t[ae], delete t[ki], delete t[by], delete t[Ey]);
  }
  function fn(t) {
    var e = t[Jt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[cn] || l[Jt])) {
        if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
          for (t = ph(t); t !== null; ) {
            if ((l = t[Jt])) return l;
            t = ph(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function rn(t) {
    if ((t = t[Jt] || t[cn])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function ea(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function on(t) {
    var e = t[kr];
    return (e || (e = t[kr] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Zt(t) {
    t[ta] = !0;
  }
  var Fr = new Set(),
    $r = {};
  function Yl(t, e) {
    (sn(t, e), sn(t + 'Capture', e));
  }
  function sn(t, e) {
    for ($r[t] = e, t = 0; t < e.length; t++) Fr.add(e[t]);
  }
  var Ty = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Wr = {},
    Pr = {};
  function Ry(t) {
    return Xi.call(Pr, t) ? !0 : Xi.call(Wr, t) ? !1 : Ty.test(t) ? (Pr[t] = !0) : ((Wr[t] = !0), !1);
  }
  function cu(t, e, l) {
    if (Ry(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e);
            return;
          case 'boolean':
            var n = e.toLowerCase().slice(0, 5);
            if (n !== 'data-' && n !== 'aria-') {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, '' + l);
      }
  }
  function fu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, '' + l);
    }
  }
  function Je(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, '' + n);
    }
  }
  function Oe(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function Ir(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function Ay(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var a = n.get,
        i = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (o) {
            ((l = '' + o), i.call(this, o));
          }
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (o) {
            l = '' + o;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          }
        }
      );
    }
  }
  function $i(t) {
    if (!t._valueTracker) {
      var e = Ir(t) ? 'checked' : 'value';
      t._valueTracker = Ay(t, e, '' + t[e]);
    }
  }
  function to(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      n = '';
    return (t && (n = Ir(t) ? (t.checked ? 'true' : 'false') : t.value), (t = n), t !== l ? (e.setValue(t), !0) : !1);
  }
  function ru(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Oy = /[\n"\\]/g;
  function _e(t) {
    return t.replace(Oy, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Wi(t, e, l, n, a, i, o, h) {
    ((t.name = ''),
      o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean'
        ? (t.type = o)
        : t.removeAttribute('type'),
      e != null
        ? o === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + Oe(e))
          : t.value !== '' + Oe(e) && (t.value = '' + Oe(e))
        : (o !== 'submit' && o !== 'reset') || t.removeAttribute('value'),
      e != null ? Pi(t, o, Oe(e)) : l != null ? Pi(t, o, Oe(l)) : n != null && t.removeAttribute('value'),
      a == null && i != null && (t.defaultChecked = !!i),
      a != null && (t.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      h != null && typeof h != 'function' && typeof h != 'symbol' && typeof h != 'boolean'
        ? (t.name = '' + Oe(h))
        : t.removeAttribute('name'));
  }
  function eo(t, e, l, n, a, i, o, h) {
    if (
      (i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' && (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== 'submit' && i !== 'reset') || e != null)) {
        $i(t);
        return;
      }
      ((l = l != null ? '' + Oe(l) : ''),
        (e = e != null ? '' + Oe(e) : l),
        h || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((n = n ?? a),
      (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
      (t.checked = h ? t.checked : !!n),
      (t.defaultChecked = !!n),
      o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean' && (t.name = o),
      $i(t));
  }
  function Pi(t, e, l) {
    (e === 'number' && ru(t.ownerDocument) === t) || t.defaultValue === '' + l || (t.defaultValue = '' + l);
  }
  function dn(t, e, l, n) {
    if (((t = t.options), e)) {
      e = {};
      for (var a = 0; a < l.length; a++) e['$' + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        ((a = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== a && (t[l].selected = a),
          a && n && (t[l].defaultSelected = !0));
    } else {
      for (l = '' + Oe(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          ((t[a].selected = !0), n && (t[a].defaultSelected = !0));
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function lo(t, e, l) {
    if (e != null && ((e = '' + Oe(e)), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + Oe(l) : '';
  }
  function no(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (Ut(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      (l == null && (l = ''), (e = l));
    }
    ((l = Oe(e)), (t.defaultValue = l), (n = t.textContent), n === l && n !== '' && n !== null && (t.value = n), $i(t));
  }
  function hn(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var _y = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function ao(t, e, l) {
    var n = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? n
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : n
        ? t.setProperty(e, l)
        : typeof l != 'number' || l === 0 || _y.has(e)
          ? e === 'float'
            ? (t.cssFloat = l)
            : (t[e] = ('' + l).trim())
          : (t[e] = l + 'px');
  }
  function uo(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (e != null && e.hasOwnProperty(n)) ||
          (n.indexOf('--') === 0 ? t.setProperty(n, '') : n === 'float' ? (t.cssFloat = '') : (t[n] = ''));
      for (var a in e) ((n = e[a]), e.hasOwnProperty(a) && l[a] !== n && ao(t, a, n));
    } else for (var i in e) e.hasOwnProperty(i) && ao(t, i, e[i]);
  }
  function Ii(t) {
    if (t.indexOf('-') === -1) return !1;
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var zy = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height']
    ]),
    Cy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ou(t) {
    return Cy.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function ke() {}
  var tc = null;
  function ec(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var mn = null,
    yn = null;
  function io(t) {
    var e = rn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Wi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
            (e = l.name),
            l.type === 'radio' && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + _e('' + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ae] || null;
                if (!a) throw Error(f(90));
                Wi(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (e = 0; e < l.length; e++) ((n = l[e]), n.form === t.form && to(n));
          }
          break t;
        case 'textarea':
          lo(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((e = l.value), e != null && dn(t, !!l.multiple, e, !1));
      }
    }
  }
  var lc = !1;
  function co(t, e, l) {
    if (lc) return t(e, l);
    lc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (((lc = !1), (mn !== null || yn !== null) && (Wu(), mn && ((e = mn), (t = yn), (yn = mn = null), io(e), t))))
        for (e = 0; e < t.length; e++) io(t[e]);
    }
  }
  function la(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ae] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((n = !n.disabled) ||
          ((t = t.type), (n = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !n));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != 'function') throw Error(f(231, e, typeof l));
    return l;
  }
  var Fe = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    nc = !1;
  if (Fe)
    try {
      var na = {};
      (Object.defineProperty(na, 'passive', {
        get: function () {
          nc = !0;
        }
      }),
        window.addEventListener('test', na, na),
        window.removeEventListener('test', na, na));
    } catch {
      nc = !1;
    }
  var yl = null,
    ac = null,
    su = null;
  function fo() {
    if (su) return su;
    var t,
      e = ac,
      l = e.length,
      n,
      a = 'value' in yl ? yl.value : yl.textContent,
      i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++);
    var o = l - t;
    for (n = 1; n <= o && e[l - n] === a[i - n]; n++);
    return (su = a.slice(t, 1 < n ? 1 - n : void 0));
  }
  function du(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function hu() {
    return !0;
  }
  function ro() {
    return !1;
  }
  function ue(t) {
    function e(l, n, a, i, o) {
      ((this._reactName = l),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var h in t) t.hasOwnProperty(h) && ((l = t[h]), (this[h] = l ? l(i) : i[h]));
      return (
        (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hu : ro),
        (this.isPropagationStopped = ro),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ? l.preventDefault() : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = hu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = hu));
        },
        persist: function () {},
        isPersistent: hu
      }),
      e
    );
  }
  var Gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    mu = ue(Gl),
    aa = b({}, Gl, { view: 0, detail: 0 }),
    Dy = ue(aa),
    uc,
    ic,
    ua,
    yu = b({}, aa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== ua &&
              (ua && t.type === 'mousemove'
                ? ((uc = t.screenX - ua.screenX), (ic = t.screenY - ua.screenY))
                : (ic = uc = 0),
              (ua = t)),
            uc);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : ic;
      }
    }),
    oo = ue(yu),
    Uy = b({}, yu, { dataTransfer: 0 }),
    My = ue(Uy),
    Ny = b({}, aa, { relatedTarget: 0 }),
    cc = ue(Ny),
    xy = b({}, Gl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    By = ue(xy),
    Hy = b({}, Gl, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      }
    }),
    wy = ue(Hy),
    Ly = b({}, Gl, { data: 0 }),
    so = ue(Ly),
    qy = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified'
    },
    jy = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    },
    Yy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Gy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Yy[t]) ? !!e[t] : !1;
  }
  function fc() {
    return Gy;
  }
  var Xy = b({}, aa, {
      key: function (t) {
        if (t.key) {
          var e = qy[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = du(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? jy[t.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fc,
      charCode: function (t) {
        return t.type === 'keypress' ? du(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress' ? du(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      }
    }),
    Qy = ue(Xy),
    Vy = b({}, yu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    ho = ue(Vy),
    Zy = b({}, aa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fc
    }),
    Ky = ue(Zy),
    Jy = b({}, Gl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ky = ue(Jy),
    Fy = b({}, yu, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    $y = ue(Fy),
    Wy = b({}, Gl, { newState: 0, oldState: 0 }),
    Py = ue(Wy),
    Iy = [9, 13, 27, 32],
    rc = Fe && 'CompositionEvent' in window,
    ia = null;
  Fe && 'documentMode' in document && (ia = document.documentMode);
  var t0 = Fe && 'TextEvent' in window && !ia,
    mo = Fe && (!rc || (ia && 8 < ia && 11 >= ia)),
    yo = ' ',
    po = !1;
  function vo(t, e) {
    switch (t) {
      case 'keyup':
        return Iy.indexOf(e.keyCode) !== -1;
      case 'keydown':
        return e.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function go(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var pn = !1;
  function e0(t, e) {
    switch (t) {
      case 'compositionend':
        return go(e);
      case 'keypress':
        return e.which !== 32 ? null : ((po = !0), yo);
      case 'textInput':
        return ((t = e.data), t === yo && po ? null : t);
      default:
        return null;
    }
  }
  function l0(t, e) {
    if (pn)
      return t === 'compositionend' || (!rc && vo(t, e)) ? ((t = fo()), (su = ac = yl = null), (pn = !1), t) : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case 'compositionend':
        return mo && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var n0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function So(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!n0[t.type] : e === 'textarea';
  }
  function bo(t, e, l, n) {
    (mn ? (yn ? yn.push(n) : (yn = [n])) : (mn = n),
      (e = ai(e, 'onChange')),
      0 < e.length && ((l = new mu('onChange', 'change', null, l, n)), t.push({ event: l, listeners: e })));
  }
  var ca = null,
    fa = null;
  function a0(t) {
    lh(t, 0);
  }
  function pu(t) {
    var e = ea(t);
    if (to(e)) return t;
  }
  function Eo(t, e) {
    if (t === 'change') return e;
  }
  var To = !1;
  if (Fe) {
    var oc;
    if (Fe) {
      var sc = 'oninput' in document;
      if (!sc) {
        var Ro = document.createElement('div');
        (Ro.setAttribute('oninput', 'return;'), (sc = typeof Ro.oninput == 'function'));
      }
      oc = sc;
    } else oc = !1;
    To = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    ca && (ca.detachEvent('onpropertychange', Oo), (fa = ca = null));
  }
  function Oo(t) {
    if (t.propertyName === 'value' && pu(fa)) {
      var e = [];
      (bo(e, fa, t, ec(t)), co(a0, e));
    }
  }
  function u0(t, e, l) {
    t === 'focusin' ? (Ao(), (ca = e), (fa = l), ca.attachEvent('onpropertychange', Oo)) : t === 'focusout' && Ao();
  }
  function i0(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return pu(fa);
  }
  function c0(t, e) {
    if (t === 'click') return pu(e);
  }
  function f0(t, e) {
    if (t === 'input' || t === 'change') return pu(e);
  }
  function r0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ve = typeof Object.is == 'function' ? Object.is : r0;
  function ra(t, e) {
    if (ve(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var l = Object.keys(t),
      n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Xi.call(e, a) || !ve(t[a], e[a])) return !1;
    }
    return !0;
  }
  function _o(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function zo(t, e) {
    var l = _o(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = t + l.textContent.length), t <= e && n >= e)) return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = _o(l);
    }
  }
  function Co(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Co(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Do(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ru(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = ru(t.document);
    }
    return e;
  }
  function dc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var o0 = Fe && 'documentMode' in document && 11 >= document.documentMode,
    vn = null,
    hc = null,
    oa = null,
    mc = !1;
  function Uo(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    mc ||
      vn == null ||
      vn !== ru(n) ||
      ((n = vn),
      'selectionStart' in n && dc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
          })),
      (oa && ra(oa, n)) ||
        ((oa = n),
        (n = ai(hc, 'onSelect')),
        0 < n.length &&
          ((e = new mu('onSelect', 'select', null, e, l)), t.push({ event: e, listeners: n }), (e.target = vn))));
  }
  function Xl(t, e) {
    var l = {};
    return ((l[t.toLowerCase()] = e.toLowerCase()), (l['Webkit' + t] = 'webkit' + e), (l['Moz' + t] = 'moz' + e), l);
  }
  var gn = {
      animationend: Xl('Animation', 'AnimationEnd'),
      animationiteration: Xl('Animation', 'AnimationIteration'),
      animationstart: Xl('Animation', 'AnimationStart'),
      transitionrun: Xl('Transition', 'TransitionRun'),
      transitionstart: Xl('Transition', 'TransitionStart'),
      transitioncancel: Xl('Transition', 'TransitionCancel'),
      transitionend: Xl('Transition', 'TransitionEnd')
    },
    yc = {},
    Mo = {};
  Fe &&
    ((Mo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation),
    'TransitionEvent' in window || delete gn.transitionend.transition);
  function Ql(t) {
    if (yc[t]) return yc[t];
    if (!gn[t]) return t;
    var e = gn[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Mo) return (yc[t] = e[l]);
    return t;
  }
  var No = Ql('animationend'),
    xo = Ql('animationiteration'),
    Bo = Ql('animationstart'),
    s0 = Ql('transitionrun'),
    d0 = Ql('transitionstart'),
    h0 = Ql('transitioncancel'),
    Ho = Ql('transitionend'),
    wo = new Map(),
    pc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  pc.push('scrollEnd');
  function we(t, e) {
    (wo.set(t, e), Yl(e, [t]));
  }
  var vu =
      typeof reportError == 'function'
        ? reportError
        : function (t) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var e = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == 'object' && t !== null && typeof t.message == 'string' ? String(t.message) : String(t),
                error: t
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', t);
              return;
            }
            console.error(t);
          },
    ze = [],
    Sn = 0,
    vc = 0;
  function gu() {
    for (var t = Sn, e = (vc = Sn = 0); e < t; ) {
      var l = ze[e];
      ze[e++] = null;
      var n = ze[e];
      ze[e++] = null;
      var a = ze[e];
      ze[e++] = null;
      var i = ze[e];
      if (((ze[e++] = null), n !== null && a !== null)) {
        var o = n.pending;
        (o === null ? (a.next = a) : ((a.next = o.next), (o.next = a)), (n.pending = a));
      }
      i !== 0 && Lo(l, a, i);
    }
  }
  function Su(t, e, l, n) {
    ((ze[Sn++] = t),
      (ze[Sn++] = e),
      (ze[Sn++] = l),
      (ze[Sn++] = n),
      (vc |= n),
      (t.lanes |= n),
      (t = t.alternate),
      t !== null && (t.lanes |= n));
  }
  function gc(t, e, l, n) {
    return (Su(t, e, l, n), bu(t));
  }
  function Vl(t, e) {
    return (Su(t, null, null, e), bu(t));
  }
  function Lo(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = t.return; i !== null; )
      ((i.childLanes |= l),
        (n = i.alternate),
        n !== null && (n.childLanes |= l),
        i.tag === 22 && ((t = i.stateNode), t === null || t._visibility & 1 || (a = !0)),
        (t = i),
        (i = i.return));
    return t.tag === 3
      ? ((i = t.stateNode),
        a &&
          e !== null &&
          ((a = 31 - pe(l)),
          (t = i.hiddenUpdates),
          (n = t[a]),
          n === null ? (t[a] = [e]) : n.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function bu(t) {
    if (50 < Na) throw ((Na = 0), (Cf = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var bn = {};
  function m0(t, e, l, n) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ge(t, e, l, n) {
    return new m0(t, e, l, n);
  }
  function Sc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function $e(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ge(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e), (l.type = t.type), (l.flags = 0), (l.subtreeFlags = 0), (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function qo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Eu(t, e, l, n, a, i) {
    var o = 0;
    if (((n = t), typeof t == 'function')) Sc(t) && (o = 1);
    else if (typeof t == 'string') o = Sp(t, l, V.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case xt:
          return ((t = ge(31, l, e, a)), (t.elementType = xt), (t.lanes = i), t);
        case x:
          return Zl(l.children, a, i, e);
        case C:
          ((o = 8), (a |= 24));
          break;
        case G:
          return ((t = ge(12, l, e, a | 2)), (t.elementType = G), (t.lanes = i), t);
        case ut:
          return ((t = ge(13, l, e, a)), (t.elementType = ut), (t.lanes = i), t);
        case mt:
          return ((t = ge(19, l, e, a)), (t.elementType = mt), (t.lanes = i), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case Q:
                o = 10;
                break t;
              case $:
                o = 9;
                break t;
              case et:
                o = 11;
                break t;
              case J:
                o = 14;
                break t;
              case Ot:
                ((o = 16), (n = null));
                break t;
            }
          ((o = 29), (l = Error(f(130, t === null ? 'null' : typeof t, ''))), (n = null));
      }
    return ((e = ge(o, l, e, a)), (e.elementType = t), (e.type = n), (e.lanes = i), e);
  }
  function Zl(t, e, l, n) {
    return ((t = ge(7, t, n, e)), (t.lanes = l), t);
  }
  function bc(t, e, l) {
    return ((t = ge(6, t, null, e)), (t.lanes = l), t);
  }
  function jo(t) {
    var e = ge(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Ec(t, e, l) {
    return (
      (e = ge(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
      e
    );
  }
  var Yo = new WeakMap();
  function Ce(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = Yo.get(t);
      return l !== void 0 ? l : ((e = { value: t, source: e, stack: qr(e) }), Yo.set(t, e), e);
    }
    return { value: t, source: e, stack: qr(e) };
  }
  var En = [],
    Tn = 0,
    Tu = null,
    sa = 0,
    De = [],
    Ue = 0,
    pl = null,
    Ge = 1,
    Xe = '';
  function We(t, e) {
    ((En[Tn++] = sa), (En[Tn++] = Tu), (Tu = t), (sa = e));
  }
  function Go(t, e, l) {
    ((De[Ue++] = Ge), (De[Ue++] = Xe), (De[Ue++] = pl), (pl = t));
    var n = Ge;
    t = Xe;
    var a = 32 - pe(n) - 1;
    ((n &= ~(1 << a)), (l += 1));
    var i = 32 - pe(e) + a;
    if (30 < i) {
      var o = a - (a % 5);
      ((i = (n & ((1 << o) - 1)).toString(32)),
        (n >>= o),
        (a -= o),
        (Ge = (1 << (32 - pe(e) + a)) | (l << a) | n),
        (Xe = i + t));
    } else ((Ge = (1 << i) | (l << a) | n), (Xe = t));
  }
  function Tc(t) {
    t.return !== null && (We(t, 1), Go(t, 1, 0));
  }
  function Rc(t) {
    for (; t === Tu; ) ((Tu = En[--Tn]), (En[Tn] = null), (sa = En[--Tn]), (En[Tn] = null));
    for (; t === pl; )
      ((pl = De[--Ue]), (De[Ue] = null), (Xe = De[--Ue]), (De[Ue] = null), (Ge = De[--Ue]), (De[Ue] = null));
  }
  function Xo(t, e) {
    ((De[Ue++] = Ge), (De[Ue++] = Xe), (De[Ue++] = pl), (Ge = e.id), (Xe = e.overflow), (pl = t));
  }
  var kt = null,
    _t = null,
    st = !1,
    vl = null,
    Me = !1,
    Ac = Error(f(519));
  function gl(t) {
    var e = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
    throw (da(Ce(e, t)), Ac);
  }
  function Qo(t) {
    var e = t.stateNode,
      l = t.type,
      n = t.memoizedProps;
    switch (((e[Jt] = t), (e[ae] = n), l)) {
      case 'dialog':
        (ft('cancel', e), ft('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        ft('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Ba.length; l++) ft(Ba[l], e);
        break;
      case 'source':
        ft('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (ft('error', e), ft('load', e));
        break;
      case 'details':
        ft('toggle', e);
        break;
      case 'input':
        (ft('invalid', e), eo(e, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0));
        break;
      case 'select':
        ft('invalid', e);
        break;
      case 'textarea':
        (ft('invalid', e), no(e, n.value, n.defaultValue, n.children));
    }
    ((l = n.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      e.textContent === '' + l ||
      n.suppressHydrationWarning === !0 ||
      ih(e.textContent, l)
        ? (n.popover != null && (ft('beforetoggle', e), ft('toggle', e)),
          n.onScroll != null && ft('scroll', e),
          n.onScrollEnd != null && ft('scrollend', e),
          n.onClick != null && (e.onclick = ke),
          (e = !0))
        : (e = !1),
      e || gl(t, !0));
  }
  function Vo(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          Me = !1;
          return;
        case 27:
        case 3:
          Me = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Rn(t) {
    if (t !== kt) return !1;
    if (!st) return (Vo(t), (st = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) && ((l = t.type), (l = !(l !== 'form' && l !== 'button') || Qf(t.type, t.memoizedProps))),
        (l = !l)),
      l && _t && gl(t),
      Vo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(f(317));
      _t = yh(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(f(317));
      _t = yh(t);
    } else
      e === 27
        ? ((e = _t), Nl(t.type) ? ((t = kf), (kf = null), (_t = t)) : (_t = e))
        : (_t = kt ? xe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Kl() {
    ((_t = kt = null), (st = !1));
  }
  function Oc() {
    var t = vl;
    return (t !== null && (re === null ? (re = t) : re.push.apply(re, t), (vl = null)), t);
  }
  function da(t) {
    vl === null ? (vl = [t]) : vl.push(t);
  }
  var _c = E(null),
    Jl = null,
    Pe = null;
  function Sl(t, e, l) {
    (Y(_c, e._currentValue), (e._currentValue = l));
  }
  function Ie(t) {
    ((t._currentValue = _c.current), w(_c));
  }
  function zc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
          : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Cc(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var o = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var h = i;
          i = a;
          for (var g = 0; g < e.length; g++)
            if (h.context === e[g]) {
              ((i.lanes |= l), (h = i.alternate), h !== null && (h.lanes |= l), zc(i.return, l, t), n || (o = null));
              break t;
            }
          i = h.next;
        }
      } else if (a.tag === 18) {
        if (((o = a.return), o === null)) throw Error(f(341));
        ((o.lanes |= l), (i = o.alternate), i !== null && (i.lanes |= l), zc(o, l, t), (o = null));
      } else o = a.child;
      if (o !== null) o.return = a;
      else
        for (o = a; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (((a = o.sibling), a !== null)) {
            ((a.return = o.return), (o = a));
            break;
          }
          o = o.return;
        }
      a = o;
    }
  }
  function An(t, e, l, n) {
    t = null;
    for (var a = e, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var o = a.alternate;
        if (o === null) throw Error(f(387));
        if (((o = o.memoizedProps), o !== null)) {
          var h = a.type;
          ve(a.pendingProps.value, o.value) || (t !== null ? t.push(h) : (t = [h]));
        }
      } else if (a === vt.current) {
        if (((o = a.alternate), o === null)) throw Error(f(387));
        o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ja) : (t = [ja]));
      }
      a = a.return;
    }
    (t !== null && Cc(e, t, l, n), (e.flags |= 262144));
  }
  function Ru(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function kl(t) {
    ((Jl = t), (Pe = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function Ft(t) {
    return Zo(Jl, t);
  }
  function Au(t, e) {
    return (Jl === null && kl(t), Zo(t, e));
  }
  function Zo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Pe === null)) {
      if (t === null) throw Error(f(308));
      ((Pe = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else Pe = Pe.next = e;
    return l;
  }
  var y0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  t.push(n);
                }
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    p0 = u.unstable_scheduleCallback,
    v0 = u.unstable_NormalPriority,
    Yt = { $$typeof: Q, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Dc() {
    return { controller: new y0(), data: new Map(), refCount: 0 };
  }
  function ha(t) {
    (t.refCount--,
      t.refCount === 0 &&
        p0(v0, function () {
          t.controller.abort();
        }));
  }
  var ma = null,
    Uc = 0,
    On = 0,
    _n = null;
  function g0(t, e) {
    if (ma === null) {
      var l = (ma = []);
      ((Uc = 0),
        (On = Bf()),
        (_n = {
          status: 'pending',
          value: void 0,
          then: function (n) {
            l.push(n);
          }
        }));
    }
    return (Uc++, e.then(Ko, Ko), e);
  }
  function Ko() {
    if (--Uc === 0 && ma !== null) {
      _n !== null && (_n.status = 'fulfilled');
      var t = ma;
      ((ma = null), (On = 0), (_n = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function S0(t, e) {
    var l = [],
      n = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          l.push(a);
        }
      };
    return (
      t.then(
        function () {
          ((n.status = 'fulfilled'), (n.value = e));
          for (var a = 0; a < l.length; a++) (0, l[a])(e);
        },
        function (a) {
          for (n.status = 'rejected', n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0);
        }
      ),
      n
    );
  }
  var Jo = N.S;
  N.S = function (t, e) {
    ((Ud = me()),
      typeof e == 'object' && e !== null && typeof e.then == 'function' && g0(t, e),
      Jo !== null && Jo(t, e));
  };
  var Fl = E(null);
  function Mc() {
    var t = Fl.current;
    return t !== null ? t : At.pooledCache;
  }
  function Ou(t, e) {
    e === null ? Y(Fl, Fl.current) : Y(Fl, e.pool);
  }
  function ko() {
    var t = Mc();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var zn = Error(f(460)),
    Nc = Error(f(474)),
    _u = Error(f(542)),
    zu = { then: function () {} };
  function Fo(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function $o(t, e, l) {
    switch (((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(ke, ke), (e = l)), e.status)) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), Po(t), t);
      default:
        if (typeof e.status == 'string') e.then(ke, ke);
        else {
          if (((t = At), t !== null && 100 < t.shellSuspendCounter)) throw Error(f(482));
          ((t = e),
            (t.status = 'pending'),
            t.then(
              function (n) {
                if (e.status === 'pending') {
                  var a = e;
                  ((a.status = 'fulfilled'), (a.value = n));
                }
              },
              function (n) {
                if (e.status === 'pending') {
                  var a = e;
                  ((a.status = 'rejected'), (a.reason = n));
                }
              }
            ));
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), Po(t), t);
        }
        throw ((Wl = e), zn);
    }
  }
  function $l(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((Wl = l), zn) : l;
    }
  }
  var Wl = null;
  function Wo() {
    if (Wl === null) throw Error(f(459));
    var t = Wl;
    return ((Wl = null), t);
  }
  function Po(t) {
    if (t === zn || t === _u) throw Error(f(483));
  }
  var Cn = null,
    ya = 0;
  function Cu(t) {
    var e = ya;
    return ((ya += 1), Cn === null && (Cn = []), $o(Cn, t, e));
  }
  function pa(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Du(t, e) {
    throw e.$$typeof === q
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(f(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)));
  }
  function Io(t) {
    function e(R, T) {
      if (t) {
        var O = R.deletions;
        O === null ? ((R.deletions = [T]), (R.flags |= 16)) : O.push(T);
      }
    }
    function l(R, T) {
      if (!t) return null;
      for (; T !== null; ) (e(R, T), (T = T.sibling));
      return null;
    }
    function n(R) {
      for (var T = new Map(); R !== null; ) (R.key !== null ? T.set(R.key, R) : T.set(R.index, R), (R = R.sibling));
      return T;
    }
    function a(R, T) {
      return ((R = $e(R, T)), (R.index = 0), (R.sibling = null), R);
    }
    function i(R, T, O) {
      return (
        (R.index = O),
        t
          ? ((O = R.alternate),
            O !== null ? ((O = O.index), O < T ? ((R.flags |= 67108866), T) : O) : ((R.flags |= 67108866), T))
          : ((R.flags |= 1048576), T)
      );
    }
    function o(R) {
      return (t && R.alternate === null && (R.flags |= 67108866), R);
    }
    function h(R, T, O, H) {
      return T === null || T.tag !== 6
        ? ((T = bc(O, R.mode, H)), (T.return = R), T)
        : ((T = a(T, O)), (T.return = R), T);
    }
    function g(R, T, O, H) {
      var F = O.type;
      return F === x
        ? B(R, T, O.props.children, H, O.key)
        : T !== null &&
            (T.elementType === F || (typeof F == 'object' && F !== null && F.$$typeof === Ot && $l(F) === T.type))
          ? ((T = a(T, O.props)), pa(T, O), (T.return = R), T)
          : ((T = Eu(O.type, O.key, O.props, null, R.mode, H)), pa(T, O), (T.return = R), T);
    }
    function _(R, T, O, H) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== O.containerInfo ||
        T.stateNode.implementation !== O.implementation
        ? ((T = Ec(O, R.mode, H)), (T.return = R), T)
        : ((T = a(T, O.children || [])), (T.return = R), T);
    }
    function B(R, T, O, H, F) {
      return T === null || T.tag !== 7
        ? ((T = Zl(O, R.mode, H, F)), (T.return = R), T)
        : ((T = a(T, O)), (T.return = R), T);
    }
    function L(R, T, O) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return ((T = bc('' + T, R.mode, O)), (T.return = R), T);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case X:
            return ((O = Eu(T.type, T.key, T.props, null, R.mode, O)), pa(O, T), (O.return = R), O);
          case A:
            return ((T = Ec(T, R.mode, O)), (T.return = R), T);
          case Ot:
            return ((T = $l(T)), L(R, T, O));
        }
        if (Ut(T) || Bt(T)) return ((T = Zl(T, R.mode, O, null)), (T.return = R), T);
        if (typeof T.then == 'function') return L(R, Cu(T), O);
        if (T.$$typeof === Q) return L(R, Au(R, T), O);
        Du(R, T);
      }
      return null;
    }
    function z(R, T, O, H) {
      var F = T !== null ? T.key : null;
      if ((typeof O == 'string' && O !== '') || typeof O == 'number' || typeof O == 'bigint')
        return F !== null ? null : h(R, T, '' + O, H);
      if (typeof O == 'object' && O !== null) {
        switch (O.$$typeof) {
          case X:
            return O.key === F ? g(R, T, O, H) : null;
          case A:
            return O.key === F ? _(R, T, O, H) : null;
          case Ot:
            return ((O = $l(O)), z(R, T, O, H));
        }
        if (Ut(O) || Bt(O)) return F !== null ? null : B(R, T, O, H, null);
        if (typeof O.then == 'function') return z(R, T, Cu(O), H);
        if (O.$$typeof === Q) return z(R, T, Au(R, O), H);
        Du(R, O);
      }
      return null;
    }
    function U(R, T, O, H, F) {
      if ((typeof H == 'string' && H !== '') || typeof H == 'number' || typeof H == 'bigint')
        return ((R = R.get(O) || null), h(T, R, '' + H, F));
      if (typeof H == 'object' && H !== null) {
        switch (H.$$typeof) {
          case X:
            return ((R = R.get(H.key === null ? O : H.key) || null), g(T, R, H, F));
          case A:
            return ((R = R.get(H.key === null ? O : H.key) || null), _(T, R, H, F));
          case Ot:
            return ((H = $l(H)), U(R, T, O, H, F));
        }
        if (Ut(H) || Bt(H)) return ((R = R.get(O) || null), B(T, R, H, F, null));
        if (typeof H.then == 'function') return U(R, T, O, Cu(H), F);
        if (H.$$typeof === Q) return U(R, T, O, Au(T, H), F);
        Du(T, H);
      }
      return null;
    }
    function Z(R, T, O, H) {
      for (var F = null, dt = null, K = T, nt = (T = 0), ot = null; K !== null && nt < O.length; nt++) {
        K.index > nt ? ((ot = K), (K = null)) : (ot = K.sibling);
        var ht = z(R, K, O[nt], H);
        if (ht === null) {
          K === null && (K = ot);
          break;
        }
        (t && K && ht.alternate === null && e(R, K),
          (T = i(ht, T, nt)),
          dt === null ? (F = ht) : (dt.sibling = ht),
          (dt = ht),
          (K = ot));
      }
      if (nt === O.length) return (l(R, K), st && We(R, nt), F);
      if (K === null) {
        for (; nt < O.length; nt++)
          ((K = L(R, O[nt], H)), K !== null && ((T = i(K, T, nt)), dt === null ? (F = K) : (dt.sibling = K), (dt = K)));
        return (st && We(R, nt), F);
      }
      for (K = n(K); nt < O.length; nt++)
        ((ot = U(K, R, nt, O[nt], H)),
          ot !== null &&
            (t && ot.alternate !== null && K.delete(ot.key === null ? nt : ot.key),
            (T = i(ot, T, nt)),
            dt === null ? (F = ot) : (dt.sibling = ot),
            (dt = ot)));
      return (
        t &&
          K.forEach(function (Ll) {
            return e(R, Ll);
          }),
        st && We(R, nt),
        F
      );
    }
    function W(R, T, O, H) {
      if (O == null) throw Error(f(151));
      for (
        var F = null, dt = null, K = T, nt = (T = 0), ot = null, ht = O.next();
        K !== null && !ht.done;
        nt++, ht = O.next()
      ) {
        K.index > nt ? ((ot = K), (K = null)) : (ot = K.sibling);
        var Ll = z(R, K, ht.value, H);
        if (Ll === null) {
          K === null && (K = ot);
          break;
        }
        (t && K && Ll.alternate === null && e(R, K),
          (T = i(Ll, T, nt)),
          dt === null ? (F = Ll) : (dt.sibling = Ll),
          (dt = Ll),
          (K = ot));
      }
      if (ht.done) return (l(R, K), st && We(R, nt), F);
      if (K === null) {
        for (; !ht.done; nt++, ht = O.next())
          ((ht = L(R, ht.value, H)),
            ht !== null && ((T = i(ht, T, nt)), dt === null ? (F = ht) : (dt.sibling = ht), (dt = ht)));
        return (st && We(R, nt), F);
      }
      for (K = n(K); !ht.done; nt++, ht = O.next())
        ((ht = U(K, R, nt, ht.value, H)),
          ht !== null &&
            (t && ht.alternate !== null && K.delete(ht.key === null ? nt : ht.key),
            (T = i(ht, T, nt)),
            dt === null ? (F = ht) : (dt.sibling = ht),
            (dt = ht)));
      return (
        t &&
          K.forEach(function (Up) {
            return e(R, Up);
          }),
        st && We(R, nt),
        F
      );
    }
    function Rt(R, T, O, H) {
      if (
        (typeof O == 'object' && O !== null && O.type === x && O.key === null && (O = O.props.children),
        typeof O == 'object' && O !== null)
      ) {
        switch (O.$$typeof) {
          case X:
            t: {
              for (var F = O.key; T !== null; ) {
                if (T.key === F) {
                  if (((F = O.type), F === x)) {
                    if (T.tag === 7) {
                      (l(R, T.sibling), (H = a(T, O.props.children)), (H.return = R), (R = H));
                      break t;
                    }
                  } else if (
                    T.elementType === F ||
                    (typeof F == 'object' && F !== null && F.$$typeof === Ot && $l(F) === T.type)
                  ) {
                    (l(R, T.sibling), (H = a(T, O.props)), pa(H, O), (H.return = R), (R = H));
                    break t;
                  }
                  l(R, T);
                  break;
                } else e(R, T);
                T = T.sibling;
              }
              O.type === x
                ? ((H = Zl(O.props.children, R.mode, H, O.key)), (H.return = R), (R = H))
                : ((H = Eu(O.type, O.key, O.props, null, R.mode, H)), pa(H, O), (H.return = R), (R = H));
            }
            return o(R);
          case A:
            t: {
              for (F = O.key; T !== null; ) {
                if (T.key === F)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === O.containerInfo &&
                    T.stateNode.implementation === O.implementation
                  ) {
                    (l(R, T.sibling), (H = a(T, O.children || [])), (H.return = R), (R = H));
                    break t;
                  } else {
                    l(R, T);
                    break;
                  }
                else e(R, T);
                T = T.sibling;
              }
              ((H = Ec(O, R.mode, H)), (H.return = R), (R = H));
            }
            return o(R);
          case Ot:
            return ((O = $l(O)), Rt(R, T, O, H));
        }
        if (Ut(O)) return Z(R, T, O, H);
        if (Bt(O)) {
          if (((F = Bt(O)), typeof F != 'function')) throw Error(f(150));
          return ((O = F.call(O)), W(R, T, O, H));
        }
        if (typeof O.then == 'function') return Rt(R, T, Cu(O), H);
        if (O.$$typeof === Q) return Rt(R, T, Au(R, O), H);
        Du(R, O);
      }
      return (typeof O == 'string' && O !== '') || typeof O == 'number' || typeof O == 'bigint'
        ? ((O = '' + O),
          T !== null && T.tag === 6
            ? (l(R, T.sibling), (H = a(T, O)), (H.return = R), (R = H))
            : (l(R, T), (H = bc(O, R.mode, H)), (H.return = R), (R = H)),
          o(R))
        : l(R, T);
    }
    return function (R, T, O, H) {
      try {
        ya = 0;
        var F = Rt(R, T, O, H);
        return ((Cn = null), F);
      } catch (K) {
        if (K === zn || K === _u) throw K;
        var dt = ge(29, K, null, R.mode);
        return ((dt.lanes = H), (dt.return = R), dt);
      }
    };
  }
  var Pl = Io(!0),
    ts = Io(!1),
    bl = !1;
  function xc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
        }));
  }
  function El(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (pt & 2) !== 0)) {
      var a = n.pending;
      return (
        a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
        (n.pending = e),
        (e = bu(t)),
        Lo(t, null, l),
        e
      );
    }
    return (Su(t, n, e, l), bu(t));
  }
  function va(t, e, l) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Vr(t, l));
    }
  }
  function Hc(t, e) {
    var l = t.updateQueue,
      n = t.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var a = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var o = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          (i === null ? (a = i = o) : (i = i.next = o), (l = l.next));
        } while (l !== null);
        i === null ? (a = i = e) : (i = i.next = e);
      } else a = i = e;
      ((l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate), t === null ? (l.firstBaseUpdate = e) : (t.next = e), (l.lastBaseUpdate = e));
  }
  var wc = !1;
  function ga() {
    if (wc) {
      var t = _n;
      if (t !== null) throw t;
    }
  }
  function Sa(t, e, l, n) {
    wc = !1;
    var a = t.updateQueue;
    bl = !1;
    var i = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var g = h,
        _ = g.next;
      ((g.next = null), o === null ? (i = _) : (o.next = _), (o = g));
      var B = t.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (h = B.lastBaseUpdate),
        h !== o && (h === null ? (B.firstBaseUpdate = _) : (h.next = _), (B.lastBaseUpdate = g)));
    }
    if (i !== null) {
      var L = a.baseState;
      ((o = 0), (B = _ = g = null), (h = i));
      do {
        var z = h.lane & -536870913,
          U = z !== h.lane;
        if (U ? (rt & z) === z : (n & z) === z) {
          (z !== 0 && z === On && (wc = !0),
            B !== null && (B = B.next = { lane: 0, tag: h.tag, payload: h.payload, callback: null, next: null }));
          t: {
            var Z = t,
              W = h;
            z = e;
            var Rt = l;
            switch (W.tag) {
              case 1:
                if (((Z = W.payload), typeof Z == 'function')) {
                  L = Z.call(Rt, L, z);
                  break t;
                }
                L = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (((Z = W.payload), (z = typeof Z == 'function' ? Z.call(Rt, L, z) : Z), z == null)) break t;
                L = b({}, L, z);
                break t;
              case 2:
                bl = !0;
            }
          }
          ((z = h.callback),
            z !== null &&
              ((t.flags |= 64),
              U && (t.flags |= 8192),
              (U = a.callbacks),
              U === null ? (a.callbacks = [z]) : U.push(z)));
        } else
          ((U = { lane: z, tag: h.tag, payload: h.payload, callback: h.callback, next: null }),
            B === null ? ((_ = B = U), (g = L)) : (B = B.next = U),
            (o |= z));
        if (((h = h.next), h === null)) {
          if (((h = a.shared.pending), h === null)) break;
          ((U = h), (h = U.next), (U.next = null), (a.lastBaseUpdate = U), (a.shared.pending = null));
        }
      } while (!0);
      (B === null && (g = L),
        (a.baseState = g),
        (a.firstBaseUpdate = _),
        (a.lastBaseUpdate = B),
        i === null && (a.shared.lanes = 0),
        (zl |= o),
        (t.lanes = o),
        (t.memoizedState = L));
    }
  }
  function es(t, e) {
    if (typeof t != 'function') throw Error(f(191, t));
    t.call(e);
  }
  function ls(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) es(l[t], e);
  }
  var Dn = E(null),
    Uu = E(0);
  function ns(t, e) {
    ((t = fl), Y(Uu, t), Y(Dn, e), (fl = t | e.baseLanes));
  }
  function Lc() {
    (Y(Uu, fl), Y(Dn, Dn.current));
  }
  function qc() {
    ((fl = Uu.current), w(Dn), w(Uu));
  }
  var Se = E(null),
    Ne = null;
  function Rl(t) {
    var e = t.alternate;
    (Y(wt, wt.current & 1),
      Y(Se, t),
      Ne === null && (e === null || Dn.current !== null || e.memoizedState !== null) && (Ne = t));
  }
  function jc(t) {
    (Y(wt, wt.current), Y(Se, t), Ne === null && (Ne = t));
  }
  function as(t) {
    t.tag === 22 ? (Y(wt, wt.current), Y(Se, t), Ne === null && (Ne = t)) : Al();
  }
  function Al() {
    (Y(wt, wt.current), Y(Se, Se.current));
  }
  function be(t) {
    (w(Se), Ne === t && (Ne = null), w(wt));
  }
  var wt = E(0);
  function Mu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Kf(l) || Jf(l))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === 'forwards' ||
          e.memoizedProps.revealOrder === 'backwards' ||
          e.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          e.memoizedProps.revealOrder === 'together')
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var tl = 0,
    lt = null,
    Et = null,
    Gt = null,
    Nu = !1,
    Un = !1,
    Il = !1,
    xu = 0,
    ba = 0,
    Mn = null,
    b0 = 0;
  function Mt() {
    throw Error(f(321));
  }
  function Yc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++) if (!ve(t[l], e[l])) return !1;
    return !0;
  }
  function Gc(t, e, l, n, a, i) {
    return (
      (tl = i),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Gs : lf),
      (Il = !1),
      (i = l(n, a)),
      (Il = !1),
      Un && (i = is(e, l, n, a)),
      us(t),
      i
    );
  }
  function us(t) {
    N.H = Ra;
    var e = Et !== null && Et.next !== null;
    if (((tl = 0), (Gt = Et = lt = null), (Nu = !1), (ba = 0), (Mn = null), e)) throw Error(f(300));
    t === null || Xt || ((t = t.dependencies), t !== null && Ru(t) && (Xt = !0));
  }
  function is(t, e, l, n) {
    lt = t;
    var a = 0;
    do {
      if ((Un && (Mn = null), (ba = 0), (Un = !1), 25 <= a)) throw Error(f(301));
      if (((a += 1), (Gt = Et = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        ((i.lastEffect = null), (i.events = null), (i.stores = null), i.memoCache != null && (i.memoCache.index = 0));
      }
      ((N.H = Xs), (i = e(l, n)));
    } while (Un);
    return i;
  }
  function E0() {
    var t = N.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? Ea(e) : e),
      (t = t.useState()[0]),
      (Et !== null ? Et.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function Xc() {
    var t = xu !== 0;
    return ((xu = 0), t);
  }
  function Qc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Vc(t) {
    if (Nu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Nu = !1;
    }
    ((tl = 0), (Gt = Et = lt = null), (Un = !1), (ba = xu = 0), (Mn = null));
  }
  function ne() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Gt === null ? (lt.memoizedState = Gt = t) : (Gt = Gt.next = t), Gt);
  }
  function Lt() {
    if (Et === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Et.next;
    var e = Gt === null ? lt.memoizedState : Gt.next;
    if (e !== null) ((Gt = e), (Et = t));
    else {
      if (t === null) throw lt.alternate === null ? Error(f(467)) : Error(f(310));
      ((Et = t),
        (t = {
          memoizedState: Et.memoizedState,
          baseState: Et.baseState,
          baseQueue: Et.baseQueue,
          queue: Et.queue,
          next: null
        }),
        Gt === null ? (lt.memoizedState = Gt = t) : (Gt = Gt.next = t));
    }
    return Gt;
  }
  function Bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ea(t) {
    var e = ba;
    return (
      (ba += 1),
      Mn === null && (Mn = []),
      (t = $o(Mn, t, e)),
      (e = lt),
      (Gt === null ? e.memoizedState : Gt.next) === null &&
        ((e = e.alternate), (N.H = e === null || e.memoizedState === null ? Gs : lf)),
      t
    );
  }
  function Hu(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Ea(t);
      if (t.$$typeof === Q) return Ft(t);
    }
    throw Error(f(438, String(t)));
  }
  function Zc(t) {
    var e = null,
      l = lt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var n = lt.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (e = {
              data: n.data.map(function (a) {
                return a.slice();
              }),
              index: 0
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Bu()), (lt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = he;
    return (e.index++, l);
  }
  function el(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function wu(t) {
    var e = Lt();
    return Kc(e, Et, t);
  }
  function Kc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var o = a.next;
        ((a.next = i.next), (i.next = o));
      }
      ((e.baseQueue = a = i), (n.pending = null));
    }
    if (((i = t.baseState), a === null)) t.memoizedState = i;
    else {
      e = a.next;
      var h = (o = null),
        g = null,
        _ = e,
        B = !1;
      do {
        var L = _.lane & -536870913;
        if (L !== _.lane ? (rt & L) === L : (tl & L) === L) {
          var z = _.revertLane;
          if (z === 0)
            (g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null
                }),
              L === On && (B = !0));
          else if ((tl & z) === z) {
            ((_ = _.next), z === On && (B = !0));
            continue;
          } else
            ((L = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }),
              g === null ? ((h = g = L), (o = i)) : (g = g.next = L),
              (lt.lanes |= z),
              (zl |= z));
          ((L = _.action), Il && l(i, L), (i = _.hasEagerState ? _.eagerState : l(i, L)));
        } else
          ((z = {
            lane: L,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }),
            g === null ? ((h = g = z), (o = i)) : (g = g.next = z),
            (lt.lanes |= L),
            (zl |= L));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if ((g === null ? (o = i) : (g.next = h), !ve(i, t.memoizedState) && ((Xt = !0), B && ((l = _n), l !== null))))
        throw l;
      ((t.memoizedState = i), (t.baseState = o), (t.baseQueue = g), (n.lastRenderedState = i));
    }
    return (a === null && (n.lanes = 0), [t.memoizedState, n.dispatch]);
  }
  function Jc(t) {
    var e = Lt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch,
      a = l.pending,
      i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var o = (a = a.next);
      do ((i = t(i, o.action)), (o = o.next));
      while (o !== a);
      (ve(i, e.memoizedState) || (Xt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, n];
  }
  function cs(t, e, l) {
    var n = lt,
      a = Lt(),
      i = st;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var o = !ve((Et || a).memoizedState, l);
    if (
      (o && ((a.memoizedState = l), (Xt = !0)),
      (a = a.queue),
      $c(os.bind(null, n, a, t), [t]),
      a.getSnapshot !== e || o || (Gt !== null && Gt.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Nn(9, { destroy: void 0 }, rs.bind(null, n, a, l, e), null), At === null))
        throw Error(f(349));
      i || (tl & 127) !== 0 || fs(n, e, l);
    }
    return l;
  }
  function fs(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = lt.updateQueue),
      e === null
        ? ((e = Bu()), (lt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function rs(t, e, l, n) {
    ((e.value = l), (e.getSnapshot = n), ss(e) && ds(t));
  }
  function os(t, e, l) {
    return l(function () {
      ss(e) && ds(t);
    });
  }
  function ss(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ve(t, l);
    } catch {
      return !0;
    }
  }
  function ds(t) {
    var e = Vl(t, 2);
    e !== null && oe(e, t, 2);
  }
  function kc(t) {
    var e = ne();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), Il)) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: el, lastRenderedState: t }),
      e
    );
  }
  function hs(t, e, l, n) {
    return ((t.baseState = l), Kc(t, Et, typeof n == 'function' ? n : el));
  }
  function T0(t, e, l, n, a) {
    if (ju(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          i.listeners.push(o);
        }
      };
      (N.T !== null ? l(!0) : (i.isTransition = !1),
        n(i),
        (l = e.pending),
        l === null ? ((i.next = e.pending = i), ms(e, i)) : ((i.next = l.next), (e.pending = l.next = i)));
    }
  }
  function ms(t, e) {
    var l = e.action,
      n = e.payload,
      a = t.state;
    if (e.isTransition) {
      var i = N.T,
        o = {};
      N.T = o;
      try {
        var h = l(a, n),
          g = N.S;
        (g !== null && g(o, h), ys(t, e, h));
      } catch (_) {
        Fc(t, e, _);
      } finally {
        (i !== null && o.types !== null && (i.types = o.types), (N.T = i));
      }
    } else
      try {
        ((i = l(a, n)), ys(t, e, i));
      } catch (_) {
        Fc(t, e, _);
      }
  }
  function ys(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (n) {
            ps(t, e, n);
          },
          function (n) {
            return Fc(t, e, n);
          }
        )
      : ps(t, e, l);
  }
  function ps(t, e, l) {
    ((e.status = 'fulfilled'),
      (e.value = l),
      vs(e),
      (t.state = l),
      (e = t.pending),
      e !== null && ((l = e.next), l === e ? (t.pending = null) : ((l = l.next), (e.next = l), ms(t, l))));
  }
  function Fc(t, e, l) {
    var n = t.pending;
    if (((t.pending = null), n !== null)) {
      n = n.next;
      do ((e.status = 'rejected'), (e.reason = l), vs(e), (e = e.next));
      while (e !== n);
    }
    t.action = null;
  }
  function vs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function gs(t, e) {
    return e;
  }
  function Ss(t, e) {
    if (st) {
      var l = At.formState;
      if (l !== null) {
        t: {
          var n = lt;
          if (st) {
            if (_t) {
              e: {
                for (var a = _t, i = Me; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (((a = xe(a.nextSibling)), a === null)) {
                    a = null;
                    break e;
                  }
                }
                ((i = a.data), (a = i === 'F!' || i === 'F' ? a : null));
              }
              if (a) {
                ((_t = xe(a.nextSibling)), (n = a.data === 'F!'));
                break t;
              }
            }
            gl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return (
      (l = ne()),
      (l.memoizedState = l.baseState = e),
      (n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: gs, lastRenderedState: e }),
      (l.queue = n),
      (l = qs.bind(null, lt, n)),
      (n.dispatch = l),
      (n = kc(!1)),
      (i = ef.bind(null, lt, !1, n.queue)),
      (n = ne()),
      (a = { state: e, dispatch: null, action: t, pending: null }),
      (n.queue = a),
      (l = T0.bind(null, lt, a, i, l)),
      (a.dispatch = l),
      (n.memoizedState = t),
      [e, l, !1]
    );
  }
  function bs(t) {
    var e = Lt();
    return Es(e, Et, t);
  }
  function Es(t, e, l) {
    if (((e = Kc(t, e, gs)[0]), (t = wu(el)[0]), typeof e == 'object' && e !== null && typeof e.then == 'function'))
      try {
        var n = Ea(e);
      } catch (o) {
        throw o === zn ? _u : o;
      }
    else n = e;
    e = Lt();
    var a = e.queue,
      i = a.dispatch;
    return (
      l !== e.memoizedState && ((lt.flags |= 2048), Nn(9, { destroy: void 0 }, R0.bind(null, a, l), null)),
      [n, i, t]
    );
  }
  function R0(t, e) {
    t.action = e;
  }
  function Ts(t) {
    var e = Lt(),
      l = Et;
    if (l !== null) return Es(e, l, t);
    (Lt(), (e = e.memoizedState), (l = Lt()));
    var n = l.queue.dispatch;
    return ((l.memoizedState = t), [e, n, !1]);
  }
  function Nn(t, e, l, n) {
    return (
      (t = { tag: t, create: l, deps: n, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = Bu()), (lt.updateQueue = e)),
      (l = e.lastEffect),
      l === null ? (e.lastEffect = t.next = t) : ((n = l.next), (l.next = t), (t.next = n), (e.lastEffect = t)),
      t
    );
  }
  function Rs() {
    return Lt().memoizedState;
  }
  function Lu(t, e, l, n) {
    var a = ne();
    ((lt.flags |= t), (a.memoizedState = Nn(1 | e, { destroy: void 0 }, l, n === void 0 ? null : n)));
  }
  function qu(t, e, l, n) {
    var a = Lt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Et !== null && n !== null && Yc(n, Et.memoizedState.deps)
      ? (a.memoizedState = Nn(e, i, l, n))
      : ((lt.flags |= t), (a.memoizedState = Nn(1 | e, i, l, n)));
  }
  function As(t, e) {
    Lu(8390656, 8, t, e);
  }
  function $c(t, e) {
    qu(2048, 8, t, e);
  }
  function A0(t) {
    lt.flags |= 4;
    var e = lt.updateQueue;
    if (e === null) ((e = Bu()), (lt.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Os(t) {
    var e = Lt().memoizedState;
    return (
      A0({ ref: e, nextImpl: t }),
      function () {
        if ((pt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function _s(t, e) {
    return qu(4, 2, t, e);
  }
  function zs(t, e) {
    return qu(4, 4, t, e);
  }
  function Cs(t, e) {
    if (typeof e == 'function') {
      t = t();
      var l = e(t);
      return function () {
        typeof l == 'function' ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Ds(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), qu(4, 4, Cs.bind(null, e, t), l));
  }
  function Wc() {}
  function Us(t, e) {
    var l = Lt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Yc(e, n[1]) ? n[0] : ((l.memoizedState = [t, e]), t);
  }
  function Ms(t, e) {
    var l = Lt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Yc(e, n[1])) return n[0];
    if (((n = t()), Il)) {
      hl(!0);
      try {
        t();
      } finally {
        hl(!1);
      }
    }
    return ((l.memoizedState = [n, e]), n);
  }
  function Pc(t, e, l) {
    return l === void 0 || ((tl & 1073741824) !== 0 && (rt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Nd()), (lt.lanes |= t), (zl |= t), l);
  }
  function Ns(t, e, l, n) {
    return ve(l, e)
      ? l
      : Dn.current !== null
        ? ((t = Pc(t, l, n)), ve(t, e) || (Xt = !0), t)
        : (tl & 42) === 0 || ((tl & 1073741824) !== 0 && (rt & 261930) === 0)
          ? ((Xt = !0), (t.memoizedState = l))
          : ((t = Nd()), (lt.lanes |= t), (zl |= t), e);
  }
  function xs(t, e, l, n, a) {
    var i = j.p;
    j.p = i !== 0 && 8 > i ? i : 8;
    var o = N.T,
      h = {};
    ((N.T = h), ef(t, !1, e, l));
    try {
      var g = a(),
        _ = N.S;
      if ((_ !== null && _(h, g), g !== null && typeof g == 'object' && typeof g.then == 'function')) {
        var B = S0(g, n);
        Ta(t, e, B, Re(t));
      } else Ta(t, e, n, Re(t));
    } catch (L) {
      Ta(t, e, { then: function () {}, status: 'rejected', reason: L }, Re());
    } finally {
      ((j.p = i), o !== null && h.types !== null && (o.types = h.types), (N.T = o));
    }
  }
  function O0() {}
  function Ic(t, e, l, n) {
    if (t.tag !== 5) throw Error(f(476));
    var a = Bs(t).queue;
    xs(
      t,
      a,
      e,
      k,
      l === null
        ? O0
        : function () {
            return (Hs(t), l(n));
          }
    );
  }
  function Bs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: el, lastRenderedState: k },
      next: null
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: el, lastRenderedState: l },
        next: null
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Hs(t) {
    var e = Bs(t);
    (e.next === null && (e = t.alternate.memoizedState), Ta(t, e.next.queue, {}, Re()));
  }
  function tf() {
    return Ft(ja);
  }
  function ws() {
    return Lt().memoizedState;
  }
  function Ls() {
    return Lt().memoizedState;
  }
  function _0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Re();
          t = El(l);
          var n = Tl(e, t, l);
          (n !== null && (oe(n, e, l), va(n, e, l)), (e = { cache: Dc() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function z0(t, e, l) {
    var n = Re();
    ((l = { lane: n, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
      ju(t) ? js(e, l) : ((l = gc(t, e, l, n)), l !== null && (oe(l, t, n), Ys(l, e, n))));
  }
  function qs(t, e, l) {
    var n = Re();
    Ta(t, e, l, n);
  }
  function Ta(t, e, l, n) {
    var a = { lane: n, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ju(t)) js(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && ((i = e.lastRenderedReducer), i !== null))
        try {
          var o = e.lastRenderedState,
            h = i(o, l);
          if (((a.hasEagerState = !0), (a.eagerState = h), ve(h, o))) return (Su(t, e, a, 0), At === null && gu(), !1);
        } catch {}
      if (((l = gc(t, e, a, n)), l !== null)) return (oe(l, t, n), Ys(l, e, n), !0);
    }
    return !1;
  }
  function ef(t, e, l, n) {
    if (
      ((n = { lane: 2, revertLane: Bf(), gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
      ju(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = gc(t, l, n, 2)), e !== null && oe(e, t, 2));
  }
  function ju(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function js(t, e) {
    Un = Nu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e));
  }
  function Ys(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Vr(t, l));
    }
  }
  var Ra = {
    readContext: Ft,
    use: Hu,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt
  };
  Ra.useEffectEvent = Mt;
  var Gs = {
      readContext: Ft,
      use: Hu,
      useCallback: function (t, e) {
        return ((ne().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Ft,
      useEffect: As,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null), Lu(4194308, 4, Cs.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Lu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Lu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = ne();
        e = e === void 0 ? null : e;
        var n = t();
        if (Il) {
          hl(!0);
          try {
            t();
          } finally {
            hl(!1);
          }
        }
        return ((l.memoizedState = [n, e]), n);
      },
      useReducer: function (t, e, l) {
        var n = ne();
        if (l !== void 0) {
          var a = l(e);
          if (Il) {
            hl(!0);
            try {
              l(e);
            } finally {
              hl(!1);
            }
          }
        } else a = e;
        return (
          (n.memoizedState = n.baseState = a),
          (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: a }),
          (n.queue = t),
          (t = t.dispatch = z0.bind(null, lt, t)),
          [n.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ne();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = kc(t);
        var e = t.queue,
          l = qs.bind(null, lt, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Wc,
      useDeferredValue: function (t, e) {
        var l = ne();
        return Pc(l, t, e);
      },
      useTransition: function () {
        var t = kc(!1);
        return ((t = xs.bind(null, lt, t.queue, !0, !1)), (ne().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, l) {
        var n = lt,
          a = ne();
        if (st) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), At === null)) throw Error(f(349));
          (rt & 127) !== 0 || fs(n, e, l);
        }
        a.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (a.queue = i),
          As(os.bind(null, n, i, t), [t]),
          (n.flags |= 2048),
          Nn(9, { destroy: void 0 }, rs.bind(null, n, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = ne(),
          e = At.identifierPrefix;
        if (st) {
          var l = Xe,
            n = Ge;
          ((l = (n & ~(1 << (32 - pe(n) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = xu++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_'));
        } else ((l = b0++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: tf,
      useFormState: Ss,
      useActionState: Ss,
      useOptimistic: function (t) {
        var e = ne();
        e.memoizedState = e.baseState = t;
        var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = l), (e = ef.bind(null, lt, !0, l)), (l.dispatch = e), [t, e]);
      },
      useMemoCache: Zc,
      useCacheRefresh: function () {
        return (ne().memoizedState = _0.bind(null, lt));
      },
      useEffectEvent: function (t) {
        var e = ne(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((pt & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      }
    },
    lf = {
      readContext: Ft,
      use: Hu,
      useCallback: Us,
      useContext: Ft,
      useEffect: $c,
      useImperativeHandle: Ds,
      useInsertionEffect: _s,
      useLayoutEffect: zs,
      useMemo: Ms,
      useReducer: wu,
      useRef: Rs,
      useState: function () {
        return wu(el);
      },
      useDebugValue: Wc,
      useDeferredValue: function (t, e) {
        var l = Lt();
        return Ns(l, Et.memoizedState, t, e);
      },
      useTransition: function () {
        var t = wu(el)[0],
          e = Lt().memoizedState;
        return [typeof t == 'boolean' ? t : Ea(t), e];
      },
      useSyncExternalStore: cs,
      useId: ws,
      useHostTransitionStatus: tf,
      useFormState: bs,
      useActionState: bs,
      useOptimistic: function (t, e) {
        var l = Lt();
        return hs(l, Et, t, e);
      },
      useMemoCache: Zc,
      useCacheRefresh: Ls
    };
  lf.useEffectEvent = Os;
  var Xs = {
    readContext: Ft,
    use: Hu,
    useCallback: Us,
    useContext: Ft,
    useEffect: $c,
    useImperativeHandle: Ds,
    useInsertionEffect: _s,
    useLayoutEffect: zs,
    useMemo: Ms,
    useReducer: Jc,
    useRef: Rs,
    useState: function () {
      return Jc(el);
    },
    useDebugValue: Wc,
    useDeferredValue: function (t, e) {
      var l = Lt();
      return Et === null ? Pc(l, t, e) : Ns(l, Et.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Jc(el)[0],
        e = Lt().memoizedState;
      return [typeof t == 'boolean' ? t : Ea(t), e];
    },
    useSyncExternalStore: cs,
    useId: ws,
    useHostTransitionStatus: tf,
    useFormState: Ts,
    useActionState: Ts,
    useOptimistic: function (t, e) {
      var l = Lt();
      return Et !== null ? hs(l, Et, t, e) : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: Ls
  };
  Xs.useEffectEvent = Os;
  function nf(t, e, l, n) {
    ((e = t.memoizedState),
      (l = l(n, e)),
      (l = l == null ? e : b({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var af = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var n = Re(),
        a = El(n);
      ((a.payload = e), l != null && (a.callback = l), (e = Tl(t, a, n)), e !== null && (oe(e, t, n), va(e, t, n)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var n = Re(),
        a = El(n);
      ((a.tag = 1),
        (a.payload = e),
        l != null && (a.callback = l),
        (e = Tl(t, a, n)),
        e !== null && (oe(e, t, n), va(e, t, n)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = Re(),
        n = El(l);
      ((n.tag = 2), e != null && (n.callback = e), (e = Tl(t, n, l)), e !== null && (oe(e, t, l), va(e, t, l)));
    }
  };
  function Qs(t, e, l, n, a, i, o) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(n, i, o)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ra(l, n) || !ra(a, i)
          : !0
    );
  }
  function Vs(t, e, l, n) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(l, n),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' && e.UNSAFE_componentWillReceiveProps(l, n),
      e.state !== t && af.enqueueReplaceState(e, e.state, null));
  }
  function tn(t, e) {
    var l = e;
    if ('ref' in e) {
      l = {};
      for (var n in e) n !== 'ref' && (l[n] = e[n]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = b({}, l));
      for (var a in t) l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function Zs(t) {
    vu(t);
  }
  function Ks(t) {
    console.error(t);
  }
  function Js(t) {
    vu(t);
  }
  function Yu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function ks(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function uf(t, e, l) {
    return (
      (l = El(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Yu(t, e);
      }),
      l
    );
  }
  function Fs(t) {
    return ((t = El(t)), (t.tag = 3), t);
  }
  function $s(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var i = n.value;
      ((t.payload = function () {
        return a(i);
      }),
        (t.callback = function () {
          ks(e, l, n);
        }));
    }
    var o = l.stateNode;
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (t.callback = function () {
        (ks(e, l, n), typeof a != 'function' && (Cl === null ? (Cl = new Set([this])) : Cl.add(this)));
        var h = n.stack;
        this.componentDidCatch(n.value, { componentStack: h !== null ? h : '' });
      });
  }
  function C0(t, e, l, n, a) {
    if (((l.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')) {
      if (((e = l.alternate), e !== null && An(e, l, a, !0), (l = Se.current), l !== null)) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ne === null ? Pu() : l.alternate === null && Nt === 0 && (Nt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              n === zu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue), e === null ? (l.updateQueue = new Set([n])) : e.add(n), Mf(t, n, a)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === zu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([n]) }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue), l === null ? (e.retryQueue = new Set([n])) : l.add(n)),
                  Mf(t, n, a)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (Mf(t, n, a), Pu(), !1);
    }
    if (st)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = a),
            n !== Ac && ((t = Error(f(422), { cause: n })), da(Ce(t, l))))
          : (n !== Ac && ((e = Error(f(423), { cause: n })), da(Ce(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (a &= -a),
            (t.lanes |= a),
            (n = Ce(n, l)),
            (a = uf(t.stateNode, n, a)),
            Hc(t, a),
            Nt !== 4 && (Nt = 2)),
        !1
      );
    var i = Error(f(520), { cause: n });
    if (((i = Ce(i, l)), Ma === null ? (Ma = [i]) : Ma.push(i), Nt !== 4 && (Nt = 2), e === null)) return !0;
    ((n = Ce(n, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return ((l.flags |= 65536), (t = a & -a), (l.lanes |= t), (t = uf(l.stateNode, n, t)), Hc(l, t), !1);
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (i !== null && typeof i.componentDidCatch == 'function' && (Cl === null || !Cl.has(i)))))
          )
            return ((l.flags |= 65536), (a &= -a), (l.lanes |= a), (a = Fs(a)), $s(a, t, l, n), Hc(l, a), !1);
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var cf = Error(f(461)),
    Xt = !1;
  function $t(t, e, l, n) {
    e.child = t === null ? ts(e, null, l, n) : Pl(e, t.child, l, n);
  }
  function Ws(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ('ref' in n) {
      var o = {};
      for (var h in n) h !== 'ref' && (o[h] = n[h]);
    } else o = n;
    return (
      kl(e),
      (n = Gc(t, e, l, o, i, a)),
      (h = Xc()),
      t !== null && !Xt ? (Qc(t, e, a), ll(t, e, a)) : (st && h && Tc(e), (e.flags |= 1), $t(t, e, n, a), e.child)
    );
  }
  function Ps(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == 'function' && !Sc(i) && i.defaultProps === void 0 && l.compare === null
        ? ((e.tag = 15), (e.type = i), Is(t, e, i, n, a))
        : ((t = Eu(l.type, null, n, e, e.mode, a)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((i = t.child), !yf(t, a))) {
      var o = i.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : ra), l(o, n) && t.ref === e.ref)) return ll(t, e, a);
    }
    return ((e.flags |= 1), (t = $e(i, n)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function Is(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (ra(i, n) && t.ref === e.ref)
        if (((Xt = !1), (e.pendingProps = n = i), yf(t, a))) (t.flags & 131072) !== 0 && (Xt = !0);
        else return ((e.lanes = t.lanes), ll(t, e, a));
    }
    return ff(t, e, l, n, a);
  }
  function td(t, e, l, n) {
    var a = n.children,
      i = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      n.mode === 'hidden')
    ) {
      if ((e.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, a = 0; n !== null; ) ((a = a | n.lanes | n.childLanes), (n = n.sibling));
          n = a & ~i;
        } else ((n = 0), (e.child = null));
        return ed(t, e, i, l, n);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ou(e, i !== null ? i.cachePool : null),
          i !== null ? ns(e, i) : Lc(),
          as(e));
      else return ((n = e.lanes = 536870912), ed(t, e, i !== null ? i.baseLanes | l : l, l, n));
    } else
      i !== null
        ? (Ou(e, i.cachePool), ns(e, i), Al(), (e.memoizedState = null))
        : (t !== null && Ou(e, null), Lc(), Al());
    return ($t(t, e, a, l), e.child);
  }
  function Aa(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      e.sibling
    );
  }
  function ed(t, e, l, n, a) {
    var i = Mc();
    return (
      (i = i === null ? null : { parent: Yt._currentValue, pool: i }),
      (e.memoizedState = { baseLanes: l, cachePool: i }),
      t !== null && Ou(e, null),
      Lc(),
      as(e),
      t !== null && An(t, e, n, !0),
      (e.childLanes = a),
      null
    );
  }
  function Gu(t, e) {
    return (
      (e = Qu({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ld(t, e, l) {
    return (Pl(e, t.child, null, l), (t = Gu(e, e.pendingProps)), (t.flags |= 2), be(e), (e.memoizedState = null), t);
  }
  function D0(t, e, l) {
    var n = e.pendingProps,
      a = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (st) {
        if (n.mode === 'hidden') return ((t = Gu(e, n)), (e.lanes = 536870912), Aa(null, t));
        if (
          (jc(e),
          (t = _t)
            ? ((t = mh(t, Me)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: pl !== null ? { id: Ge, overflow: Xe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
                }),
                (l = jo(t)),
                (l.return = e),
                (e.child = l),
                (kt = e),
                (_t = null)))
            : (t = null),
          t === null)
        )
          throw gl(e);
        return ((e.lanes = 536870912), null);
      }
      return Gu(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var o = i.dehydrated;
      if ((jc(e), a))
        if (e.flags & 256) ((e.flags &= -257), (e = ld(t, e, l)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if ((Xt || An(t, e, l, !1), (a = (l & t.childLanes) !== 0), Xt || a)) {
        if (((n = At), n !== null && ((o = Zr(n, l)), o !== 0 && o !== i.retryLane)))
          throw ((i.retryLane = o), Vl(t, o), oe(n, t, o), cf);
        (Pu(), (e = ld(t, e, l)));
      } else
        ((t = i.treeContext),
          (_t = xe(o.nextSibling)),
          (kt = e),
          (st = !0),
          (vl = null),
          (Me = !1),
          t !== null && Xo(e, t),
          (e = Gu(e, n)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = $e(t.child, { mode: n.mode, children: n.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Xu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function ff(t, e, l, n, a) {
    return (
      kl(e),
      (l = Gc(t, e, l, n, void 0, a)),
      (n = Xc()),
      t !== null && !Xt ? (Qc(t, e, a), ll(t, e, a)) : (st && n && Tc(e), (e.flags |= 1), $t(t, e, l, a), e.child)
    );
  }
  function nd(t, e, l, n, a, i) {
    return (
      kl(e),
      (e.updateQueue = null),
      (l = is(e, n, l, a)),
      us(t),
      (n = Xc()),
      t !== null && !Xt ? (Qc(t, e, i), ll(t, e, i)) : (st && n && Tc(e), (e.flags |= 1), $t(t, e, l, i), e.child)
    );
  }
  function ad(t, e, l, n, a) {
    if ((kl(e), e.stateNode === null)) {
      var i = bn,
        o = l.contextType;
      (typeof o == 'object' && o !== null && (i = Ft(o)),
        (i = new l(n, i)),
        (e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = af),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = n),
        (i.state = e.memoizedState),
        (i.refs = {}),
        xc(e),
        (o = l.contextType),
        (i.context = typeof o == 'object' && o !== null ? Ft(o) : bn),
        (i.state = e.memoizedState),
        (o = l.getDerivedStateFromProps),
        typeof o == 'function' && (nf(e, l, o, n), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
          ((o = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
          o !== i.state && af.enqueueReplaceState(i, i.state, null),
          Sa(e, n, i, a),
          ga(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4194308),
        (n = !0));
    } else if (t === null) {
      i = e.stateNode;
      var h = e.memoizedProps,
        g = tn(l, h);
      i.props = g;
      var _ = i.context,
        B = l.contextType;
      ((o = bn), typeof B == 'object' && B !== null && (o = Ft(B)));
      var L = l.getDerivedStateFromProps;
      ((B = typeof L == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
        (h = e.pendingProps !== h),
        B ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((h || _ !== o) && Vs(e, i, n, o)),
        (bl = !1));
      var z = e.memoizedState;
      ((i.state = z),
        Sa(e, n, i, a),
        ga(),
        (_ = e.memoizedState),
        h || z !== _ || bl
          ? (typeof L == 'function' && (nf(e, l, L, n), (_ = e.memoizedState)),
            (g = bl || Qs(e, l, g, n, z, _, o))
              ? (B ||
                  (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = n),
                (e.memoizedState = _)),
            (i.props = n),
            (i.state = _),
            (i.context = o),
            (n = g))
          : (typeof i.componentDidMount == 'function' && (e.flags |= 4194308), (n = !1)));
    } else {
      ((i = e.stateNode),
        Bc(t, e),
        (o = e.memoizedProps),
        (B = tn(l, o)),
        (i.props = B),
        (L = e.pendingProps),
        (z = i.context),
        (_ = l.contextType),
        (g = bn),
        typeof _ == 'object' && _ !== null && (g = Ft(_)),
        (h = l.getDerivedStateFromProps),
        (_ = typeof h == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((o !== L || z !== g) && Vs(e, i, n, g)),
        (bl = !1),
        (z = e.memoizedState),
        (i.state = z),
        Sa(e, n, i, a),
        ga());
      var U = e.memoizedState;
      o !== L || z !== U || bl || (t !== null && t.dependencies !== null && Ru(t.dependencies))
        ? (typeof h == 'function' && (nf(e, l, h, n), (U = e.memoizedState)),
          (B = bl || Qs(e, l, B, n, z, U, g) || (t !== null && t.dependencies !== null && Ru(t.dependencies)))
            ? (_ ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(n, U, g),
                typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(n, U, g)),
              typeof i.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (o === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (o === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = n),
              (e.memoizedState = U)),
          (i.props = n),
          (i.state = U),
          (i.context = g),
          (n = B))
        : (typeof i.componentDidUpdate != 'function' ||
            (o === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (o === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (n = !1));
    }
    return (
      (i = n),
      Xu(t, e),
      (n = (e.flags & 128) !== 0),
      i || n
        ? ((i = e.stateNode),
          (l = n && typeof l.getDerivedStateFromError != 'function' ? null : i.render()),
          (e.flags |= 1),
          t !== null && n ? ((e.child = Pl(e, t.child, null, a)), (e.child = Pl(e, null, l, a))) : $t(t, e, l, a),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = ll(t, e, a)),
      t
    );
  }
  function ud(t, e, l, n) {
    return (Kl(), (e.flags |= 256), $t(t, e, l, n), e.child);
  }
  var rf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function of(t) {
    return { baseLanes: t, cachePool: ko() };
  }
  function sf(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= Te), t);
  }
  function id(t, e, l) {
    var n = e.pendingProps,
      a = !1,
      i = (e.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = t !== null && t.memoizedState === null ? !1 : (wt.current & 2) !== 0),
      o && ((a = !0), (e.flags &= -129)),
      (o = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if (
          (a ? Rl(e) : Al(),
          (t = _t)
            ? ((t = mh(t, Me)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: pl !== null ? { id: Ge, overflow: Xe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
                }),
                (l = jo(t)),
                (l.return = e),
                (e.child = l),
                (kt = e),
                (_t = null)))
            : (t = null),
          t === null)
        )
          throw gl(e);
        return (Jf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var h = n.children;
      return (
        (n = n.fallback),
        a
          ? (Al(),
            (a = e.mode),
            (h = Qu({ mode: 'hidden', children: h }, a)),
            (n = Zl(n, a, l, null)),
            (h.return = e),
            (n.return = e),
            (h.sibling = n),
            (e.child = h),
            (n = e.child),
            (n.memoizedState = of(l)),
            (n.childLanes = sf(t, o, l)),
            (e.memoizedState = rf),
            Aa(null, n))
          : (Rl(e), df(e, h))
      );
    }
    var g = t.memoizedState;
    if (g !== null && ((h = g.dehydrated), h !== null)) {
      if (i)
        e.flags & 256
          ? (Rl(e), (e.flags &= -257), (e = hf(t, e, l)))
          : e.memoizedState !== null
            ? (Al(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Al(),
              (h = n.fallback),
              (a = e.mode),
              (n = Qu({ mode: 'visible', children: n.children }, a)),
              (h = Zl(h, a, l, null)),
              (h.flags |= 2),
              (n.return = e),
              (h.return = e),
              (n.sibling = h),
              (e.child = n),
              Pl(e, t.child, null, l),
              (n = e.child),
              (n.memoizedState = of(l)),
              (n.childLanes = sf(t, o, l)),
              (e.memoizedState = rf),
              (e = Aa(null, n)));
      else if ((Rl(e), Jf(h))) {
        if (((o = h.nextSibling && h.nextSibling.dataset), o)) var _ = o.dgst;
        ((o = _),
          (n = Error(f(419))),
          (n.stack = ''),
          (n.digest = o),
          da({ value: n, source: null, stack: null }),
          (e = hf(t, e, l)));
      } else if ((Xt || An(t, e, l, !1), (o = (l & t.childLanes) !== 0), Xt || o)) {
        if (((o = At), o !== null && ((n = Zr(o, l)), n !== 0 && n !== g.retryLane)))
          throw ((g.retryLane = n), Vl(t, n), oe(o, t, n), cf);
        (Kf(h) || Pu(), (e = hf(t, e, l)));
      } else
        Kf(h)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = g.treeContext),
            (_t = xe(h.nextSibling)),
            (kt = e),
            (st = !0),
            (vl = null),
            (Me = !1),
            t !== null && Xo(e, t),
            (e = df(e, n.children)),
            (e.flags |= 4096));
      return e;
    }
    return a
      ? (Al(),
        (h = n.fallback),
        (a = e.mode),
        (g = t.child),
        (_ = g.sibling),
        (n = $e(g, { mode: 'hidden', children: n.children })),
        (n.subtreeFlags = g.subtreeFlags & 65011712),
        _ !== null ? (h = $e(_, h)) : ((h = Zl(h, a, l, null)), (h.flags |= 2)),
        (h.return = e),
        (n.return = e),
        (n.sibling = h),
        (e.child = n),
        Aa(null, n),
        (n = e.child),
        (h = t.child.memoizedState),
        h === null
          ? (h = of(l))
          : ((a = h.cachePool),
            a !== null ? ((g = Yt._currentValue), (a = a.parent !== g ? { parent: g, pool: g } : a)) : (a = ko()),
            (h = { baseLanes: h.baseLanes | l, cachePool: a })),
        (n.memoizedState = h),
        (n.childLanes = sf(t, o, l)),
        (e.memoizedState = rf),
        Aa(t.child, n))
      : (Rl(e),
        (l = t.child),
        (t = l.sibling),
        (l = $e(l, { mode: 'visible', children: n.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null && ((o = e.deletions), o === null ? ((e.deletions = [t]), (e.flags |= 16)) : o.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function df(t, e) {
    return ((e = Qu({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function Qu(t, e) {
    return ((t = ge(22, t, null, e)), (t.lanes = 0), t);
  }
  function hf(t, e, l) {
    return (Pl(e, t.child, null, l), (t = df(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t);
  }
  function cd(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    (n !== null && (n.lanes |= e), zc(t.return, e, l));
  }
  function mf(t, e, l, n, a, i) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: a,
          treeForkCount: i
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = l),
        (o.tailMode = a),
        (o.treeForkCount = i));
  }
  function fd(t, e, l) {
    var n = e.pendingProps,
      a = n.revealOrder,
      i = n.tail;
    n = n.children;
    var o = wt.current,
      h = (o & 2) !== 0;
    if (
      (h ? ((o = (o & 1) | 2), (e.flags |= 128)) : (o &= 1),
      Y(wt, o),
      $t(t, e, n, l),
      (n = st ? sa : 0),
      !h && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && cd(t, l, e);
        else if (t.tag === 19) cd(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (a) {
      case 'forwards':
        for (l = e.child, a = null; l !== null; )
          ((t = l.alternate), t !== null && Mu(t) === null && (a = l), (l = l.sibling));
        ((l = a),
          l === null ? ((a = e.child), (e.child = null)) : ((a = l.sibling), (l.sibling = null)),
          mf(e, !1, a, l, i, n));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && Mu(t) === null)) {
            e.child = a;
            break;
          }
          ((t = a.sibling), (a.sibling = l), (l = a), (a = t));
        }
        mf(e, !0, l, null, i, n);
        break;
      case 'together':
        mf(e, !1, null, null, void 0, n);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ll(t, e, l) {
    if ((t !== null && (e.dependencies = t.dependencies), (zl |= e.lanes), (l & e.childLanes) === 0))
      if (t !== null) {
        if ((An(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = $e(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        ((t = t.sibling), (l = l.sibling = $e(t, t.pendingProps)), (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function yf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Ru(t)));
  }
  function U0(t, e, l) {
    switch (e.tag) {
      case 3:
        (le(e, e.stateNode.containerInfo), Sl(e, Yt, t.memoizedState.cache), Kl());
        break;
      case 27:
      case 5:
        $n(e);
        break;
      case 4:
        le(e, e.stateNode.containerInfo);
        break;
      case 10:
        Sl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), jc(e), null);
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Rl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? id(t, e, l)
              : (Rl(e), (t = ll(t, e, l)), t !== null ? t.sibling : null);
        Rl(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (((n = (l & e.childLanes) !== 0), n || (An(t, e, l, !1), (n = (l & e.childLanes) !== 0)), a)) {
          if (n) return fd(t, e, l);
          e.flags |= 128;
        }
        if (
          ((a = e.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Y(wt, wt.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), td(t, e, l, e.pendingProps));
      case 24:
        Sl(e, Yt, t.memoizedState.cache);
    }
    return ll(t, e, l);
  }
  function rd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Xt = !0;
      else {
        if (!yf(t, l) && (e.flags & 128) === 0) return ((Xt = !1), U0(t, e, l));
        Xt = (t.flags & 131072) !== 0;
      }
    else ((Xt = !1), st && (e.flags & 1048576) !== 0 && Go(e, sa, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (((t = $l(e.elementType)), (e.type = t), typeof t == 'function'))
            Sc(t)
              ? ((n = tn(t, n)), (e.tag = 1), (e = ad(null, e, t, n, l)))
              : ((e.tag = 0), (e = ff(null, e, t, n, l)));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === et) {
                ((e.tag = 11), (e = Ws(null, e, t, n, l)));
                break t;
              } else if (a === J) {
                ((e.tag = 14), (e = Ps(null, e, t, n, l)));
                break t;
              }
            }
            throw ((e = jt(t) || t), Error(f(306, e, '')));
          }
        }
        return e;
      case 0:
        return ff(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((n = e.type), (a = tn(n, e.pendingProps)), ad(t, e, n, a, l));
      case 3:
        t: {
          if ((le(e, e.stateNode.containerInfo), t === null)) throw Error(f(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          ((a = i.element), Bc(t, e), Sa(e, n, null, l));
          var o = e.memoizedState;
          if (((n = o.cache), Sl(e, Yt, n), n !== i.cache && Cc(e, [Yt], l, !0), ga(), (n = o.element), i.isDehydrated))
            if (
              ((i = { element: n, isDehydrated: !1, cache: o.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = ud(t, e, n, l);
              break t;
            } else if (n !== a) {
              ((a = Ce(Error(f(424)), e)), da(a), (e = ud(t, e, n, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9 ? (t = t.body) : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  _t = xe(t.firstChild),
                  kt = e,
                  st = !0,
                  vl = null,
                  Me = !0,
                  l = ts(e, null, n, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Kl(), n === a)) {
              e = ll(t, e, l);
              break t;
            }
            $t(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Xu(t, e),
          t === null
            ? (l = bh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (n = ui(it.current).createElement(l)),
                (n[Jt] = e),
                (n[ae] = t),
                Wt(n, l, t),
                Zt(n),
                (e.stateNode = n))
            : (e.memoizedState = bh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          $n(e),
          t === null &&
            st &&
            ((n = e.stateNode = vh(e.type, e.pendingProps, it.current)),
            (kt = e),
            (Me = !0),
            (a = _t),
            Nl(e.type) ? ((kf = a), (_t = xe(n.firstChild))) : (_t = a)),
          $t(t, e, e.pendingProps.children, l),
          Xu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((a = n = _t) &&
              ((n = ip(n, e.type, e.pendingProps, Me)),
              n !== null ? ((e.stateNode = n), (kt = e), (_t = xe(n.firstChild)), (Me = !1), (a = !0)) : (a = !1)),
            a || gl(e)),
          $n(e),
          (a = e.type),
          (i = e.pendingProps),
          (o = t !== null ? t.memoizedProps : null),
          (n = i.children),
          Qf(a, i) ? (n = null) : o !== null && Qf(a, o) && (e.flags |= 32),
          e.memoizedState !== null && ((a = Gc(t, e, E0, null, null, l)), (ja._currentValue = a)),
          Xu(t, e),
          $t(t, e, n, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = _t) &&
              ((l = cp(l, e.pendingProps, Me)),
              l !== null ? ((e.stateNode = l), (kt = e), (_t = null), (t = !0)) : (t = !1)),
            t || gl(e)),
          null
        );
      case 13:
        return id(t, e, l);
      case 4:
        return (
          le(e, e.stateNode.containerInfo),
          (n = e.pendingProps),
          t === null ? (e.child = Pl(e, null, n, l)) : $t(t, e, n, l),
          e.child
        );
      case 11:
        return Ws(t, e, e.type, e.pendingProps, l);
      case 7:
        return ($t(t, e, e.pendingProps, l), e.child);
      case 8:
        return ($t(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return ($t(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return ((n = e.pendingProps), Sl(e, e.type, n.value), $t(t, e, n.children, l), e.child);
      case 9:
        return (
          (a = e.type._context),
          (n = e.pendingProps.children),
          kl(e),
          (a = Ft(a)),
          (n = n(a)),
          (e.flags |= 1),
          $t(t, e, n, l),
          e.child
        );
      case 14:
        return Ps(t, e, e.type, e.pendingProps, l);
      case 15:
        return Is(t, e, e.type, e.pendingProps, l);
      case 19:
        return fd(t, e, l);
      case 31:
        return D0(t, e, l);
      case 22:
        return td(t, e, l, e.pendingProps);
      case 24:
        return (
          kl(e),
          (n = Ft(Yt)),
          t === null
            ? ((a = Mc()),
              a === null &&
                ((a = At),
                (i = Dc()),
                (a.pooledCache = i),
                i.refCount++,
                i !== null && (a.pooledCacheLanes |= l),
                (a = i)),
              (e.memoizedState = { parent: n, cache: a }),
              xc(e),
              Sl(e, Yt, a))
            : ((t.lanes & l) !== 0 && (Bc(t, e), Sa(e, null, null, l), ga()),
              (a = t.memoizedState),
              (i = e.memoizedState),
              a.parent !== n
                ? ((a = { parent: n, cache: n }),
                  (e.memoizedState = a),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a),
                  Sl(e, Yt, n))
                : ((n = i.cache), Sl(e, Yt, n), n !== a.cache && Cc(e, [Yt], l, !0))),
          $t(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function nl(t) {
    t.flags |= 4;
  }
  function pf(t, e, l, n, a) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (a & 335544128) === a))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (wd()) t.flags |= 8192;
        else throw ((Wl = zu), Nc);
    } else t.flags &= -16777217;
  }
  function od(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Oh(e)))
      if (wd()) t.flags |= 8192;
      else throw ((Wl = zu), Nc);
  }
  function Vu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Xr() : 536870912), (t.lanes |= e), (wn |= e)));
  }
  function Oa(t, e) {
    if (!st)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var l = null; e !== null; ) (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = t.tail;
          for (var n = null; l !== null; ) (l.alternate !== null && (n = l), (l = l.sibling));
          n === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (n.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags & 65011712),
          (n |= a.flags & 65011712),
          (a.return = t),
          (a = a.sibling));
    else
      for (a = t.child; a !== null; )
        ((l |= a.lanes | a.childLanes), (n |= a.subtreeFlags), (n |= a.flags), (a.return = t), (a = a.sibling));
    return ((t.subtreeFlags |= n), (t.childLanes = l), e);
  }
  function M0(t, e, l) {
    var n = e.pendingProps;
    switch ((Rc(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (zt(e), null);
      case 1:
        return (zt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Ie(Yt),
          Ht(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Rn(e)
              ? nl(e)
              : t === null || (t.memoizedState.isDehydrated && (e.flags & 256) === 0) || ((e.flags |= 1024), Oc())),
          zt(e),
          null
        );
      case 26:
        var a = e.type,
          i = e.memoizedState;
        return (
          t === null
            ? (nl(e), i !== null ? (zt(e), od(e, i)) : (zt(e), pf(e, a, null, n, l)))
            : i
              ? i !== t.memoizedState
                ? (nl(e), zt(e), od(e, i))
                : (zt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== n && nl(e), zt(e), pf(e, a, t, n, l)),
          null
        );
      case 27:
        if ((eu(e), (l = it.current), (a = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== n && nl(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(f(166));
            return (zt(e), null);
          }
          ((t = V.current), Rn(e) ? Qo(e) : ((t = vh(a, n, l)), (e.stateNode = t), nl(e)));
        }
        return (zt(e), null);
      case 5:
        if ((eu(e), (a = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== n && nl(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(f(166));
            return (zt(e), null);
          }
          if (((i = V.current), Rn(e))) Qo(e);
          else {
            var o = ui(it.current);
            switch (i) {
              case 1:
                i = o.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                i = o.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    i = o.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    i = o.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    ((i = o.createElement('div')),
                      (i.innerHTML = '<script><\/script>'),
                      (i = i.removeChild(i.firstChild)));
                    break;
                  case 'select':
                    ((i =
                      typeof n.is == 'string' ? o.createElement('select', { is: n.is }) : o.createElement('select')),
                      n.multiple ? (i.multiple = !0) : n.size && (i.size = n.size));
                    break;
                  default:
                    i = typeof n.is == 'string' ? o.createElement(a, { is: n.is }) : o.createElement(a);
                }
            }
            ((i[Jt] = e), (i[ae] = n));
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) i.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ((o.child.return = o), (o = o.child));
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e) break t;
                o = o.return;
              }
              ((o.sibling.return = o.return), (o = o.sibling));
            }
            e.stateNode = i;
            t: switch ((Wt(i, a, n), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus;
                break t;
              case 'img':
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && nl(e);
          }
        }
        return (zt(e), pf(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && nl(e);
        else {
          if (typeof n != 'string' && e.stateNode === null) throw Error(f(166));
          if (((t = it.current), Rn(e))) {
            if (((t = e.stateNode), (l = e.memoizedProps), (n = null), (a = kt), a !== null))
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            ((t[Jt] = e),
              (t = !!(t.nodeValue === l || (n !== null && n.suppressHydrationWarning === !0) || ih(t.nodeValue, l))),
              t || gl(e, !0));
          } else ((t = ui(t).createTextNode(n)), (t[Jt] = e), (e.stateNode = t));
        }
        return (zt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((n = Rn(e)), l !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(f(557));
              t[Jt] = e;
            } else (Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (zt(e), (t = !1));
          } else
            ((l = Oc()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), (t = !0));
          if (!t) return e.flags & 256 ? (be(e), e) : (be(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return (zt(e), null);
      case 13:
        if (((n = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((a = Rn(e)), n !== null && n.dehydrated !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (((a = e.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(f(317));
              a[Jt] = e;
            } else (Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (zt(e), (a = !1));
          } else
            ((a = Oc()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), (a = !0));
          if (!a) return e.flags & 256 ? (be(e), e) : (be(e), null);
        }
        return (
          be(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = n !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((n = e.child),
                (a = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (a = n.alternate.memoizedState.cachePool.pool),
                (i = null),
                n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool),
                i !== a && (n.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Vu(e, e.updateQueue),
              zt(e),
              null)
        );
      case 4:
        return (Ht(), t === null && qf(e.stateNode.containerInfo), zt(e), null);
      case 10:
        return (Ie(e.type), zt(e), null);
      case 19:
        if ((w(wt), (n = e.memoizedState), n === null)) return (zt(e), null);
        if (((a = (e.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) Oa(n, !1);
          else {
            if (Nt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = Mu(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      Oa(n, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      Vu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (qo(l, t), (l = l.sibling));
                  return (Y(wt, (wt.current & 1) | 2), st && We(e, n.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            n.tail !== null && me() > Fu && ((e.flags |= 128), (a = !0), Oa(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Mu(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Vu(e, t),
                Oa(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !i.alternate && !st)
              )
                return (zt(e), null);
            } else
              2 * me() - n.renderingStartTime > Fu &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), Oa(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = n.last), t !== null ? (t.sibling = i) : (e.child = i), (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = me()),
            (t.sibling = null),
            (l = wt.current),
            Y(wt, a ? (l & 1) | 2 : l & 1),
            st && We(e, n.treeForkCount),
            t)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          be(e),
          qc(),
          (n = e.memoizedState !== null),
          t !== null ? (t.memoizedState !== null) !== n && (e.flags |= 8192) : n && (e.flags |= 8192),
          n
            ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : zt(e),
          (l = e.updateQueue),
          l !== null && Vu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (n = null),
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
          n !== l && (e.flags |= 2048),
          t !== null && w(Fl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ie(Yt),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function N0(t, e) {
    switch ((Rc(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          Ie(Yt),
          Ht(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (eu(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((be(e), e.alternate === null)) throw Error(f(340));
          Kl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((be(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(f(340));
          Kl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (w(wt), null);
      case 4:
        return (Ht(), null);
      case 10:
        return (Ie(e.type), null);
      case 22:
      case 23:
        return (
          be(e),
          qc(),
          t !== null && w(Fl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Ie(Yt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sd(t, e) {
    switch ((Rc(e), e.tag)) {
      case 3:
        (Ie(Yt), Ht());
        break;
      case 26:
      case 27:
      case 5:
        eu(e);
        break;
      case 4:
        Ht();
        break;
      case 31:
        e.memoizedState !== null && be(e);
        break;
      case 13:
        be(e);
        break;
      case 19:
        w(wt);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        (be(e), qc(), t !== null && w(Fl));
        break;
      case 24:
        Ie(Yt);
    }
  }
  function _a(t, e) {
    try {
      var l = e.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create,
              o = l.inst;
            ((n = i()), (o.destroy = n));
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (h) {
      bt(e, e.return, h);
    }
  }
  function Ol(t, e, l) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var o = n.inst,
              h = o.destroy;
            if (h !== void 0) {
              ((o.destroy = void 0), (a = e));
              var g = l,
                _ = h;
              try {
                _();
              } catch (B) {
                bt(a, g, B);
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (B) {
      bt(e, e.return, B);
    }
  }
  function dd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ls(e, l);
      } catch (n) {
        bt(t, t.return, n);
      }
    }
  }
  function hd(t, e, l) {
    ((l.props = tn(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (n) {
      bt(t, e, n);
    }
  }
  function za(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == 'function' ? (t.refCleanup = l(n)) : (l.current = n);
      }
    } catch (a) {
      bt(t, e, a);
    }
  }
  function Qe(t, e) {
    var l = t.ref,
      n = t.refCleanup;
    if (l !== null)
      if (typeof n == 'function')
        try {
          n();
        } catch (a) {
          bt(t, e, a);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (a) {
          bt(t, e, a);
        }
      else l.current = null;
  }
  function md(t) {
    var e = t.type,
      l = t.memoizedProps,
      n = t.stateNode;
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && n.focus();
          break t;
        case 'img':
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      bt(t, t.return, a);
    }
  }
  function vf(t, e, l) {
    try {
      var n = t.stateNode;
      (tp(n, t.type, l, e), (n[ae] = e));
    } catch (a) {
      bt(t, t.return, a);
    }
  }
  function yd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Nl(t.type)) || t.tag === 4;
  }
  function gf(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || yd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if ((t.tag === 27 && Nl(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Sf(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l).insertBefore(t, e)
          : ((e = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = ke)));
    else if (n !== 4 && (n === 27 && Nl(t.type) && ((l = t.stateNode), (e = null)), (t = t.child), t !== null))
      for (Sf(t, e, l), t = t.sibling; t !== null; ) (Sf(t, e, l), (t = t.sibling));
  }
  function Zu(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6) ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (n !== 4 && (n === 27 && Nl(t.type) && (l = t.stateNode), (t = t.child), t !== null))
      for (Zu(t, e, l), t = t.sibling; t !== null; ) (Zu(t, e, l), (t = t.sibling));
  }
  function pd(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      (Wt(e, n, l), (e[Jt] = t), (e[ae] = l));
    } catch (i) {
      bt(t, t.return, i);
    }
  }
  var al = !1,
    Qt = !1,
    bf = !1,
    vd = typeof WeakSet == 'function' ? WeakSet : Set,
    Kt = null;
  function x0(t, e) {
    if (((t = t.containerInfo), (Gf = di), (t = Do(t)), dc(t))) {
      if ('selectionStart' in t) var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break t;
            }
            var o = 0,
              h = -1,
              g = -1,
              _ = 0,
              B = 0,
              L = t,
              z = null;
            e: for (;;) {
              for (
                var U;
                L !== l || (a !== 0 && L.nodeType !== 3) || (h = o + a),
                  L !== i || (n !== 0 && L.nodeType !== 3) || (g = o + n),
                  L.nodeType === 3 && (o += L.nodeValue.length),
                  (U = L.firstChild) !== null;
              )
                ((z = L), (L = U));
              for (;;) {
                if (L === t) break e;
                if ((z === l && ++_ === a && (h = o), z === i && ++B === n && (g = o), (U = L.nextSibling) !== null))
                  break;
                ((L = z), (z = L.parentNode));
              }
              L = U;
            }
            l = h === -1 || g === -1 ? null : { start: h, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Xf = { focusedElem: t, selectionRange: l }, di = !1, Kt = e; Kt !== null; )
      if (((e = Kt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) ((t.return = e), (Kt = t));
      else
        for (; Kt !== null; ) {
          switch (((e = Kt), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if ((t & 4) !== 0 && ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null))
                for (l = 0; l < t.length; l++) ((a = t[l]), (a.ref.impl = a.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                ((t = void 0), (l = e), (a = i.memoizedProps), (i = i.memoizedState), (n = l.stateNode));
                try {
                  var Z = tn(l.type, a);
                  ((t = n.getSnapshotBeforeUpdate(Z, i)), (n.__reactInternalSnapshotBeforeUpdate = t));
                } catch (W) {
                  bt(l, l.return, W);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)) Zf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Zf(t);
                      break;
                    default:
                      t.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Kt = t));
            break;
          }
          Kt = e.return;
        }
  }
  function gd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (il(t, l), n & 4 && _a(5, l));
        break;
      case 1:
        if ((il(t, l), n & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (o) {
              bt(l, l.return, o);
            }
          else {
            var a = tn(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (o) {
              bt(l, l.return, o);
            }
          }
        (n & 64 && dd(l), n & 512 && za(l, l.return));
        break;
      case 3:
        if ((il(t, l), n & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ls(t, e);
          } catch (o) {
            bt(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && n & 4 && pd(l);
      case 26:
      case 5:
        (il(t, l), e === null && n & 4 && md(l), n & 512 && za(l, l.return));
        break;
      case 12:
        il(t, l);
        break;
      case 31:
        (il(t, l), n & 4 && Ed(t, l));
        break;
      case 13:
        (il(t, l),
          n & 4 && Td(t, l),
          n & 64 &&
            ((t = l.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((l = X0.bind(null, l)), fp(t, l)))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || al), !n)) {
          ((e = (e !== null && e.memoizedState !== null) || Qt), (a = al));
          var i = Qt;
          ((al = n), (Qt = e) && !i ? cl(t, l, (l.subtreeFlags & 8772) !== 0) : il(t, l), (al = a), (Qt = i));
        }
        break;
      case 30:
        break;
      default:
        il(t, l);
    }
  }
  function Sd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Sd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Fi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ct = null,
    ie = !1;
  function ul(t, e, l) {
    for (l = l.child; l !== null; ) (bd(t, e, l), (l = l.sibling));
  }
  function bd(t, e, l) {
    if (ye && typeof ye.onCommitFiberUnmount == 'function')
      try {
        ye.onCommitFiberUnmount(Wn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Qt || Qe(l, e),
          ul(t, e, l),
          l.memoizedState ? l.memoizedState.count-- : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Qt || Qe(l, e);
        var n = Ct,
          a = ie;
        (Nl(l.type) && ((Ct = l.stateNode), (ie = !1)), ul(t, e, l), wa(l.stateNode), (Ct = n), (ie = a));
        break;
      case 5:
        Qt || Qe(l, e);
      case 6:
        if (((n = Ct), (a = ie), (Ct = null), ul(t, e, l), (Ct = n), (ie = a), Ct !== null))
          if (ie)
            try {
              (Ct.nodeType === 9 ? Ct.body : Ct.nodeName === 'HTML' ? Ct.ownerDocument.body : Ct).removeChild(
                l.stateNode
              );
            } catch (i) {
              bt(l, e, i);
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (i) {
              bt(l, e, i);
            }
        break;
      case 18:
        Ct !== null &&
          (ie
            ? ((t = Ct),
              dh(t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t, l.stateNode),
              Vn(t))
            : dh(Ct, l.stateNode));
        break;
      case 4:
        ((n = Ct), (a = ie), (Ct = l.stateNode.containerInfo), (ie = !0), ul(t, e, l), (Ct = n), (ie = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ol(2, l, e), Qt || Ol(4, l, e), ul(t, e, l));
        break;
      case 1:
        (Qt || (Qe(l, e), (n = l.stateNode), typeof n.componentWillUnmount == 'function' && hd(l, e, n)), ul(t, e, l));
        break;
      case 21:
        ul(t, e, l);
        break;
      case 22:
        ((Qt = (n = Qt) || l.memoizedState !== null), ul(t, e, l), (Qt = n));
        break;
      default:
        ul(t, e, l);
    }
  }
  function Ed(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
      t = t.dehydrated;
      try {
        Vn(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
  }
  function Td(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Vn(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function B0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new vd()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new vd()), e);
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Ku(t, e) {
    var l = B0(t);
    e.forEach(function (n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Q0.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function ce(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n],
          i = t,
          o = e,
          h = o;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Nl(h.type)) {
                ((Ct = h.stateNode), (ie = !1));
                break t;
              }
              break;
            case 5:
              ((Ct = h.stateNode), (ie = !1));
              break t;
            case 3:
            case 4:
              ((Ct = h.stateNode.containerInfo), (ie = !0));
              break t;
          }
          h = h.return;
        }
        if (Ct === null) throw Error(f(160));
        (bd(i, o, a), (Ct = null), (ie = !1), (i = a.alternate), i !== null && (i.return = null), (a.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (Rd(e, t), (e = e.sibling));
  }
  var Le = null;
  function Rd(t, e) {
    var l = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ce(e, t), fe(t), n & 4 && (Ol(3, t, t.return), _a(3, t), Ol(5, t, t.return)));
        break;
      case 1:
        (ce(e, t),
          fe(t),
          n & 512 && (Qt || l === null || Qe(l, l.return)),
          n & 64 &&
            al &&
            ((t = t.updateQueue),
            t !== null &&
              ((n = t.callbacks),
              n !== null &&
                ((l = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
        break;
      case 26:
        var a = Le;
        if ((ce(e, t), fe(t), n & 512 && (Qt || l === null || Qe(l, l.return)), n & 4)) {
          var i = l !== null ? l.memoizedState : null;
          if (((n = t.memoizedState), l === null))
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  ((n = t.type), (l = t.memoizedProps), (a = a.ownerDocument || a));
                  e: switch (n) {
                    case 'title':
                      ((i = a.getElementsByTagName('title')[0]),
                        (!i ||
                          i[ta] ||
                          i[Jt] ||
                          i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          i.hasAttribute('itemprop')) &&
                          ((i = a.createElement(n)), a.head.insertBefore(i, a.querySelector('head > title'))),
                        Wt(i, n, l),
                        (i[Jt] = t),
                        Zt(i),
                        (n = i));
                      break t;
                    case 'link':
                      var o = Rh('link', 'href', a).get(n + (l.href || ''));
                      if (o) {
                        for (var h = 0; h < o.length; h++)
                          if (
                            ((i = o[h]),
                            i.getAttribute('href') === (l.href == null || l.href === '' ? null : l.href) &&
                              i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              i.getAttribute('title') === (l.title == null ? null : l.title) &&
                              i.getAttribute('crossorigin') === (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(h, 1);
                            break e;
                          }
                      }
                      ((i = a.createElement(n)), Wt(i, n, l), a.head.appendChild(i));
                      break;
                    case 'meta':
                      if ((o = Rh('meta', 'content', a).get(n + (l.content || '')))) {
                        for (h = 0; h < o.length; h++)
                          if (
                            ((i = o[h]),
                            i.getAttribute('content') === (l.content == null ? null : '' + l.content) &&
                              i.getAttribute('name') === (l.name == null ? null : l.name) &&
                              i.getAttribute('property') === (l.property == null ? null : l.property) &&
                              i.getAttribute('http-equiv') === (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(h, 1);
                            break e;
                          }
                      }
                      ((i = a.createElement(n)), Wt(i, n, l), a.head.appendChild(i));
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  ((i[Jt] = t), Zt(i), (n = i));
                }
                t.stateNode = n;
              } else Ah(a, t.type, t.stateNode);
            else t.stateNode = Th(a, n, t.memoizedProps);
          else
            i !== n
              ? (i === null ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l)) : i.count--,
                n === null ? Ah(a, t.type, t.stateNode) : Th(a, n, t.memoizedProps))
              : n === null && t.stateNode !== null && vf(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ce(e, t),
          fe(t),
          n & 512 && (Qt || l === null || Qe(l, l.return)),
          l !== null && n & 4 && vf(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if ((ce(e, t), fe(t), n & 512 && (Qt || l === null || Qe(l, l.return)), t.flags & 32)) {
          a = t.stateNode;
          try {
            hn(a, '');
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        (n & 4 && t.stateNode != null && ((a = t.memoizedProps), vf(t, a, l !== null ? l.memoizedProps : a)),
          n & 1024 && (bf = !0));
        break;
      case 6:
        if ((ce(e, t), fe(t), n & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          ((n = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = n;
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((fi = null),
          (a = Le),
          (Le = ii(e.containerInfo)),
          ce(e, t),
          (Le = a),
          fe(t),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Vn(e.containerInfo);
          } catch (Z) {
            bt(t, t.return, Z);
          }
        bf && ((bf = !1), Ad(t));
        break;
      case 4:
        ((n = Le), (Le = ii(t.stateNode.containerInfo)), ce(e, t), fe(t), (Le = n));
        break;
      case 12:
        (ce(e, t), fe(t));
        break;
      case 31:
        (ce(e, t), fe(t), n & 4 && ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ku(t, n))));
        break;
      case 13:
        (ce(e, t),
          fe(t),
          t.child.flags & 8192 && (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) && (ku = me()),
          n & 4 && ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ku(t, n))));
        break;
      case 22:
        a = t.memoizedState !== null;
        var g = l !== null && l.memoizedState !== null,
          _ = al,
          B = Qt;
        if (((al = _ || a), (Qt = B || g), ce(e, t), (Qt = B), (al = _), fe(t), n & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = a ? e._visibility & -2 : e._visibility | 1,
              a && (l === null || g || al || Qt || en(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                g = l = e;
                try {
                  if (((i = g.stateNode), a))
                    ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'));
                  else {
                    h = g.stateNode;
                    var L = g.memoizedProps.style,
                      z = L != null && L.hasOwnProperty('display') ? L.display : null;
                    h.style.display = z == null || typeof z == 'boolean' ? '' : ('' + z).trim();
                  }
                } catch (Z) {
                  bt(g, g.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                g = e;
                try {
                  g.stateNode.nodeValue = a ? '' : g.memoizedProps;
                } catch (Z) {
                  bt(g, g.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                g = e;
                try {
                  var U = g.stateNode;
                  a ? hh(U, !0) : hh(g.stateNode, !1);
                } catch (Z) {
                  bt(g, g.return, Z);
                }
              }
            } else if (((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) && e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        n & 4 &&
          ((n = t.updateQueue), n !== null && ((l = n.retryQueue), l !== null && ((n.retryQueue = null), Ku(t, l))));
        break;
      case 19:
        (ce(e, t), fe(t), n & 4 && ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ku(t, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ce(e, t), fe(t));
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (yd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode,
              i = gf(t);
            Zu(t, i, a);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (hn(o, ''), (l.flags &= -33));
            var h = gf(t);
            Zu(t, h, o);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              _ = gf(t);
            Sf(t, _, g);
            break;
          default:
            throw Error(f(161));
        }
      } catch (B) {
        bt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ad(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Ad(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function il(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) (gd(t, e.alternate, e), (e = e.sibling));
  }
  function en(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ol(4, e, e.return), en(e));
          break;
        case 1:
          Qe(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == 'function' && hd(e, e.return, l), en(e));
          break;
        case 27:
          wa(e.stateNode);
        case 26:
        case 5:
          (Qe(e, e.return), en(e));
          break;
        case 22:
          e.memoizedState === null && en(e);
          break;
        case 30:
          en(e);
          break;
        default:
          en(e);
      }
      t = t.sibling;
    }
  }
  function cl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate,
        a = t,
        i = e,
        o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (cl(a, i, l), _a(4, i));
          break;
        case 1:
          if ((cl(a, i, l), (n = i), (a = n.stateNode), typeof a.componentDidMount == 'function'))
            try {
              a.componentDidMount();
            } catch (_) {
              bt(n, n.return, _);
            }
          if (((n = i), (a = n.updateQueue), a !== null)) {
            var h = n.stateNode;
            try {
              var g = a.shared.hiddenCallbacks;
              if (g !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++) es(g[a], h);
            } catch (_) {
              bt(n, n.return, _);
            }
          }
          (l && o & 64 && dd(i), za(i, i.return));
          break;
        case 27:
          pd(i);
        case 26:
        case 5:
          (cl(a, i, l), l && n === null && o & 4 && md(i), za(i, i.return));
          break;
        case 12:
          cl(a, i, l);
          break;
        case 31:
          (cl(a, i, l), l && o & 4 && Ed(a, i));
          break;
        case 13:
          (cl(a, i, l), l && o & 4 && Td(a, i));
          break;
        case 22:
          (i.memoizedState === null && cl(a, i, l), za(i, i.return));
          break;
        case 30:
          break;
        default:
          cl(a, i, l);
      }
      e = e.sibling;
    }
  }
  function Ef(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && ha(l)));
  }
  function Tf(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ha(t)));
  }
  function qe(t, e, l, n) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Od(t, e, l, n), (e = e.sibling));
  }
  function Od(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (qe(t, e, l, n), a & 2048 && _a(9, e));
        break;
      case 1:
        qe(t, e, l, n);
        break;
      case 3:
        (qe(t, e, l, n),
          a & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ha(t))));
        break;
      case 12:
        if (a & 2048) {
          (qe(t, e, l, n), (t = e.stateNode));
          try {
            var i = e.memoizedProps,
              o = i.id,
              h = i.onPostCommit;
            typeof h == 'function' && h(o, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (g) {
            bt(e, e.return, g);
          }
        } else qe(t, e, l, n);
        break;
      case 31:
        qe(t, e, l, n);
        break;
      case 13:
        qe(t, e, l, n);
        break;
      case 23:
        break;
      case 22:
        ((i = e.stateNode),
          (o = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? qe(t, e, l, n)
              : Ca(t, e)
            : i._visibility & 2
              ? qe(t, e, l, n)
              : ((i._visibility |= 2), xn(t, e, l, n, (e.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && Ef(o, e));
        break;
      case 24:
        (qe(t, e, l, n), a & 2048 && Tf(e.alternate, e));
        break;
      default:
        qe(t, e, l, n);
    }
  }
  function xn(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t,
        o = e,
        h = l,
        g = n,
        _ = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (xn(i, o, h, g, a), _a(8, o));
          break;
        case 23:
          break;
        case 22:
          var B = o.stateNode;
          (o.memoizedState !== null
            ? B._visibility & 2
              ? xn(i, o, h, g, a)
              : Ca(i, o)
            : ((B._visibility |= 2), xn(i, o, h, g, a)),
            a && _ & 2048 && Ef(o.alternate, o));
          break;
        case 24:
          (xn(i, o, h, g, a), a && _ & 2048 && Tf(o.alternate, o));
          break;
        default:
          xn(i, o, h, g, a);
      }
      e = e.sibling;
    }
  }
  function Ca(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          n = e,
          a = n.flags;
        switch (n.tag) {
          case 22:
            (Ca(l, n), a & 2048 && Ef(n.alternate, n));
            break;
          case 24:
            (Ca(l, n), a & 2048 && Tf(n.alternate, n));
            break;
          default:
            Ca(l, n);
        }
        e = e.sibling;
      }
  }
  var Da = 8192;
  function Bn(t, e, l) {
    if (t.subtreeFlags & Da) for (t = t.child; t !== null; ) (_d(t, e, l), (t = t.sibling));
  }
  function _d(t, e, l) {
    switch (t.tag) {
      case 26:
        (Bn(t, e, l), t.flags & Da && t.memoizedState !== null && bp(l, Le, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Bn(t, e, l);
        break;
      case 3:
      case 4:
        var n = Le;
        ((Le = ii(t.stateNode.containerInfo)), Bn(t, e, l), (Le = n));
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null ? ((n = Da), (Da = 16777216), Bn(t, e, l), (Da = n)) : Bn(t, e, l));
        break;
      default:
        Bn(t, e, l);
    }
  }
  function zd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Ua(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ((Kt = n), Dd(n, t));
        }
      zd(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Cd(t), (t = t.sibling));
  }
  function Cd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ua(t), t.flags & 2048 && Ol(9, t, t.return));
        break;
      case 3:
        Ua(t);
        break;
      case 12:
        Ua(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ju(t))
          : Ua(t);
        break;
      default:
        Ua(t);
    }
  }
  function Ju(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ((Kt = n), Dd(n, t));
        }
      zd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ol(8, e, e.return), Ju(e));
          break;
        case 22:
          ((l = e.stateNode), l._visibility & 2 && ((l._visibility &= -3), Ju(e)));
          break;
        default:
          Ju(e);
      }
      t = t.sibling;
    }
  }
  function Dd(t, e) {
    for (; Kt !== null; ) {
      var l = Kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ha(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) ((n.return = l), (Kt = n));
      else
        t: for (l = t; Kt !== null; ) {
          n = Kt;
          var a = n.sibling,
            i = n.return;
          if ((Sd(n), n === l)) {
            Kt = null;
            break t;
          }
          if (a !== null) {
            ((a.return = i), (Kt = a));
            break t;
          }
          Kt = i;
        }
    }
  }
  var H0 = {
      getCacheForType: function (t) {
        var e = Ft(Yt),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Ft(Yt).controller.signal;
      }
    },
    w0 = typeof WeakMap == 'function' ? WeakMap : Map,
    pt = 0,
    At = null,
    ct = null,
    rt = 0,
    St = 0,
    Ee = null,
    _l = !1,
    Hn = !1,
    Rf = !1,
    fl = 0,
    Nt = 0,
    zl = 0,
    ln = 0,
    Af = 0,
    Te = 0,
    wn = 0,
    Ma = null,
    re = null,
    Of = !1,
    ku = 0,
    Ud = 0,
    Fu = 1 / 0,
    $u = null,
    Cl = null,
    Vt = 0,
    Dl = null,
    Ln = null,
    rl = 0,
    _f = 0,
    zf = null,
    Md = null,
    Na = 0,
    Cf = null;
  function Re() {
    return (pt & 2) !== 0 && rt !== 0 ? rt & -rt : N.T !== null ? Bf() : Kr();
  }
  function Nd() {
    if (Te === 0)
      if ((rt & 536870912) === 0 || st) {
        var t = au;
        ((au <<= 1), (au & 3932160) === 0 && (au = 262144), (Te = t));
      } else Te = 536870912;
    return ((t = Se.current), t !== null && (t.flags |= 32), Te);
  }
  function oe(t, e, l) {
    (((t === At && (St === 2 || St === 9)) || t.cancelPendingCommit !== null) && (qn(t, 0), Ul(t, rt, Te, !1)),
      In(t, l),
      ((pt & 2) === 0 || t !== At) &&
        (t === At && ((pt & 2) === 0 && (ln |= l), Nt === 4 && Ul(t, rt, Te, !1)), Ve(t)));
  }
  function xd(t, e, l) {
    if ((pt & 6) !== 0) throw Error(f(327));
    var n = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Pn(t, e),
      a = n ? j0(t, e) : Uf(t, e, !0),
      i = n;
    do {
      if (a === 0) {
        Hn && !n && Ul(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !L0(l))) {
          ((a = Uf(t, e, !1)), (i = !1));
          continue;
        }
        if (a === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var o = 0;
          else ((o = t.pendingLanes & -536870913), (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0));
          if (o !== 0) {
            e = o;
            t: {
              var h = t;
              a = Ma;
              var g = h.current.memoizedState.isDehydrated;
              if ((g && (qn(h, o).flags |= 256), (o = Uf(h, o, !1)), o !== 2)) {
                if (Rf && !g) {
                  ((h.errorRecoveryDisabledLanes |= i), (ln |= i), (a = 4));
                  break t;
                }
                ((i = re), (re = a), i !== null && (re === null ? (re = i) : re.push.apply(re, i)));
              }
              a = o;
            }
            if (((i = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (qn(t, 0), Ul(t, e, 0, !0));
          break;
        }
        t: {
          switch (((n = t), (i = a), i)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ul(n, e, Te, !_l);
              break t;
            case 2:
              re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((a = ku + 300 - me()), 10 < a)) {
            if ((Ul(n, e, Te, !_l), iu(n, 0, !0) !== 0)) break t;
            ((rl = e),
              (n.timeoutHandle = oh(Bd.bind(null, n, l, re, $u, Of, e, Te, ln, wn, _l, i, 'Throttled', -0, 0), a)));
            break t;
          }
          Bd(n, l, re, $u, Of, e, Te, ln, wn, _l, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ve(t);
  }
  function Bd(t, e, l, n, a, i, o, h, g, _, B, L, z, U) {
    if (((t.timeoutHandle = -1), (L = e.subtreeFlags), L & 8192 || (L & 16785408) === 16785408)) {
      ((L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ke
      }),
        _d(e, i, L));
      var Z = (i & 62914560) === i ? ku - me() : (i & 4194048) === i ? Ud - me() : 0;
      if (((Z = Ep(L, Z)), Z !== null)) {
        ((rl = i),
          (t.cancelPendingCommit = Z(Xd.bind(null, t, e, i, l, n, a, o, h, g, B, L, null, z, U))),
          Ul(t, i, o, !_));
        return;
      }
    }
    Xd(t, e, i, l, n, a, o, h, g);
  }
  function L0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var a = l[n],
            i = a.getSnapshot;
          a = a.value;
          try {
            if (!ve(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Ul(t, e, l, n) {
    ((e &= ~Af),
      (e &= ~ln),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      n && (t.warmLanes |= e),
      (n = t.expirationTimes));
    for (var a = e; 0 < a; ) {
      var i = 31 - pe(a),
        o = 1 << i;
      ((n[i] = -1), (a &= ~o));
    }
    l !== 0 && Qr(t, l, e);
  }
  function Wu() {
    return (pt & 6) === 0 ? (xa(0), !1) : !0;
  }
  function Df() {
    if (ct !== null) {
      if (St === 0) var t = ct.return;
      else ((t = ct), (Pe = Jl = null), Vc(t), (Cn = null), (ya = 0), (t = ct));
      for (; t !== null; ) (sd(t.alternate, t), (t = t.return));
      ct = null;
    }
  }
  function qn(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), np(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (rl = 0),
      Df(),
      (At = t),
      (ct = l = $e(t.current, null)),
      (rt = e),
      (St = 0),
      (Ee = null),
      (_l = !1),
      (Hn = Pn(t, e)),
      (Rf = !1),
      (wn = Te = Af = ln = zl = Nt = 0),
      (re = Ma = null),
      (Of = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - pe(n),
          i = 1 << a;
        ((e |= t[a]), (n &= ~i));
      }
    return ((fl = e), gu(), l);
  }
  function Hd(t, e) {
    ((lt = null),
      (N.H = Ra),
      e === zn || e === _u
        ? ((e = Wo()), (St = 3))
        : e === Nc
          ? ((e = Wo()), (St = 4))
          : (St = e === cf ? 8 : e !== null && typeof e == 'object' && typeof e.then == 'function' ? 6 : 1),
      (Ee = e),
      ct === null && ((Nt = 1), Yu(t, Ce(e, t.current))));
  }
  function wd() {
    var t = Se.current;
    return t === null
      ? !0
      : (rt & 4194048) === rt
        ? Ne === null
        : (rt & 62914560) === rt || (rt & 536870912) !== 0
          ? t === Ne
          : !1;
  }
  function Ld() {
    var t = N.H;
    return ((N.H = Ra), t === null ? Ra : t);
  }
  function qd() {
    var t = N.A;
    return ((N.A = H0), t);
  }
  function Pu() {
    ((Nt = 4),
      _l || ((rt & 4194048) !== rt && Se.current !== null) || (Hn = !0),
      ((zl & 134217727) === 0 && (ln & 134217727) === 0) || At === null || Ul(At, rt, Te, !1));
  }
  function Uf(t, e, l) {
    var n = pt;
    pt |= 2;
    var a = Ld(),
      i = qd();
    ((At !== t || rt !== e) && (($u = null), qn(t, e)), (e = !1));
    var o = Nt;
    t: do
      try {
        if (St !== 0 && ct !== null) {
          var h = ct,
            g = Ee;
          switch (St) {
            case 8:
              (Df(), (o = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var _ = St;
              if (((St = 0), (Ee = null), jn(t, h, g, _), l && Hn)) {
                o = 0;
                break t;
              }
              break;
            default:
              ((_ = St), (St = 0), (Ee = null), jn(t, h, g, _));
          }
        }
        (q0(), (o = Nt));
        break;
      } catch (B) {
        Hd(t, B);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Pe = Jl = null),
      (pt = n),
      (N.H = a),
      (N.A = i),
      ct === null && ((At = null), (rt = 0), gu()),
      o
    );
  }
  function q0() {
    for (; ct !== null; ) jd(ct);
  }
  function j0(t, e) {
    var l = pt;
    pt |= 2;
    var n = Ld(),
      a = qd();
    At !== t || rt !== e ? (($u = null), (Fu = me() + 500), qn(t, e)) : (Hn = Pn(t, e));
    t: do
      try {
        if (St !== 0 && ct !== null) {
          e = ct;
          var i = Ee;
          e: switch (St) {
            case 1:
              ((St = 0), (Ee = null), jn(t, e, i, 1));
              break;
            case 2:
            case 9:
              if (Fo(i)) {
                ((St = 0), (Ee = null), Yd(e));
                break;
              }
              ((e = function () {
                ((St !== 2 && St !== 9) || At !== t || (St = 7), Ve(t));
              }),
                i.then(e, e));
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Fo(i) ? ((St = 0), (Ee = null), Yd(e)) : ((St = 0), (Ee = null), jn(t, e, i, 7));
              break;
            case 5:
              var o = null;
              switch (ct.tag) {
                case 26:
                  o = ct.memoizedState;
                case 5:
                case 27:
                  var h = ct;
                  if (o ? Oh(o) : h.stateNode.complete) {
                    ((St = 0), (Ee = null));
                    var g = h.sibling;
                    if (g !== null) ct = g;
                    else {
                      var _ = h.return;
                      _ !== null ? ((ct = _), Iu(_)) : (ct = null);
                    }
                    break e;
                  }
              }
              ((St = 0), (Ee = null), jn(t, e, i, 5));
              break;
            case 6:
              ((St = 0), (Ee = null), jn(t, e, i, 6));
              break;
            case 8:
              (Df(), (Nt = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        Y0();
        break;
      } catch (B) {
        Hd(t, B);
      }
    while (!0);
    return ((Pe = Jl = null), (N.H = n), (N.A = a), (pt = l), ct !== null ? 0 : ((At = null), (rt = 0), gu(), Nt));
  }
  function Y0() {
    for (; ct !== null && !ry(); ) jd(ct);
  }
  function jd(t) {
    var e = rd(t.alternate, t, fl);
    ((t.memoizedProps = t.pendingProps), e === null ? Iu(t) : (ct = e));
  }
  function Yd(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = nd(l, e, e.pendingProps, e.type, void 0, rt);
        break;
      case 11:
        e = nd(l, e, e.pendingProps, e.type.render, e.ref, rt);
        break;
      case 5:
        Vc(e);
      default:
        (sd(l, e), (e = ct = qo(e, fl)), (e = rd(l, e, fl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Iu(t) : (ct = e));
  }
  function jn(t, e, l, n) {
    ((Pe = Jl = null), Vc(e), (Cn = null), (ya = 0));
    var a = e.return;
    try {
      if (C0(t, a, e, l, rt)) {
        ((Nt = 1), Yu(t, Ce(l, t.current)), (ct = null));
        return;
      }
    } catch (i) {
      if (a !== null) throw ((ct = a), i);
      ((Nt = 1), Yu(t, Ce(l, t.current)), (ct = null));
      return;
    }
    e.flags & 32768
      ? (st || n === 1
          ? (t = !0)
          : Hn || (rt & 536870912) !== 0
            ? (t = !1)
            : ((_l = t = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Se.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
        Gd(e, t))
      : Iu(e);
  }
  function Iu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Gd(e, _l);
        return;
      }
      t = e.return;
      var l = M0(e.alternate, e, fl);
      if (l !== null) {
        ct = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    Nt === 0 && (Nt = 5);
  }
  function Gd(t, e) {
    do {
      var l = N0(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (ct = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ct = t;
        return;
      }
      ct = t = l;
    } while (t !== null);
    ((Nt = 6), (ct = null));
  }
  function Xd(t, e, l, n, a, i, o, h, g) {
    t.cancelPendingCommit = null;
    do ti();
    while (Vt !== 0);
    if ((pt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= vc),
        Sy(t, l, i, o, h, g),
        t === At && ((ct = At = null), (rt = 0)),
        (Ln = e),
        (Dl = t),
        (rl = l),
        (_f = i),
        (zf = a),
        (Md = n),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            V0(lu, function () {
              return (Jd(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (n = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = N.T), (N.T = null), (a = j.p), (j.p = 2), (o = pt), (pt |= 4));
        try {
          x0(t, e, l);
        } finally {
          ((pt = o), (j.p = a), (N.T = n));
        }
      }
      ((Vt = 1), Qd(), Vd(), Zd());
    }
  }
  function Qd() {
    if (Vt === 1) {
      Vt = 0;
      var t = Dl,
        e = Ln,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = N.T), (N.T = null));
        var n = j.p;
        j.p = 2;
        var a = pt;
        pt |= 4;
        try {
          Rd(e, t);
          var i = Xf,
            o = Do(t.containerInfo),
            h = i.focusedElem,
            g = i.selectionRange;
          if (o !== h && h && h.ownerDocument && Co(h.ownerDocument.documentElement, h)) {
            if (g !== null && dc(h)) {
              var _ = g.start,
                B = g.end;
              if ((B === void 0 && (B = _), 'selectionStart' in h))
                ((h.selectionStart = _), (h.selectionEnd = Math.min(B, h.value.length)));
              else {
                var L = h.ownerDocument || document,
                  z = (L && L.defaultView) || window;
                if (z.getSelection) {
                  var U = z.getSelection(),
                    Z = h.textContent.length,
                    W = Math.min(g.start, Z),
                    Rt = g.end === void 0 ? W : Math.min(g.end, Z);
                  !U.extend && W > Rt && ((o = Rt), (Rt = W), (W = o));
                  var R = zo(h, W),
                    T = zo(h, Rt);
                  if (
                    R &&
                    T &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== R.node ||
                      U.anchorOffset !== R.offset ||
                      U.focusNode !== T.node ||
                      U.focusOffset !== T.offset)
                  ) {
                    var O = L.createRange();
                    (O.setStart(R.node, R.offset),
                      U.removeAllRanges(),
                      W > Rt
                        ? (U.addRange(O), U.extend(T.node, T.offset))
                        : (O.setEnd(T.node, T.offset), U.addRange(O)));
                  }
                }
              }
            }
            for (L = [], U = h; (U = U.parentNode); )
              U.nodeType === 1 && L.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof h.focus == 'function' && h.focus(), h = 0; h < L.length; h++) {
              var H = L[h];
              ((H.element.scrollLeft = H.left), (H.element.scrollTop = H.top));
            }
          }
          ((di = !!Gf), (Xf = Gf = null));
        } finally {
          ((pt = a), (j.p = n), (N.T = l));
        }
      }
      ((t.current = e), (Vt = 2));
    }
  }
  function Vd() {
    if (Vt === 2) {
      Vt = 0;
      var t = Dl,
        e = Ln,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = N.T), (N.T = null));
        var n = j.p;
        j.p = 2;
        var a = pt;
        pt |= 4;
        try {
          gd(t, e.alternate, e);
        } finally {
          ((pt = a), (j.p = n), (N.T = l));
        }
      }
      Vt = 3;
    }
  }
  function Zd() {
    if (Vt === 4 || Vt === 3) {
      ((Vt = 0), oy());
      var t = Dl,
        e = Ln,
        l = rl,
        n = Md;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Vt = 5)
        : ((Vt = 0), (Ln = Dl = null), Kd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if ((a === 0 && (Cl = null), Ji(l), (e = e.stateNode), ye && typeof ye.onCommitFiberRoot == 'function'))
        try {
          ye.onCommitFiberRoot(Wn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((e = N.T), (a = j.p), (j.p = 2), (N.T = null));
        try {
          for (var i = t.onRecoverableError, o = 0; o < n.length; o++) {
            var h = n[o];
            i(h.value, { componentStack: h.stack });
          }
        } finally {
          ((N.T = e), (j.p = a));
        }
      }
      ((rl & 3) !== 0 && ti(),
        Ve(t),
        (a = t.pendingLanes),
        (l & 261930) !== 0 && (a & 42) !== 0 ? (t === Cf ? Na++ : ((Na = 0), (Cf = t))) : (Na = 0),
        xa(0));
    }
  }
  function Kd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), ha(e)));
  }
  function ti() {
    return (Qd(), Vd(), Zd(), Jd());
  }
  function Jd() {
    if (Vt !== 5) return !1;
    var t = Dl,
      e = _f;
    _f = 0;
    var l = Ji(rl),
      n = N.T,
      a = j.p;
    try {
      ((j.p = 32 > l ? 32 : l), (N.T = null), (l = zf), (zf = null));
      var i = Dl,
        o = rl;
      if (((Vt = 0), (Ln = Dl = null), (rl = 0), (pt & 6) !== 0)) throw Error(f(331));
      var h = pt;
      if (
        ((pt |= 4),
        Cd(i.current),
        Od(i, i.current, o, l),
        (pt = h),
        xa(0, !1),
        ye && typeof ye.onPostCommitFiberRoot == 'function')
      )
        try {
          ye.onPostCommitFiberRoot(Wn, i);
        } catch {}
      return !0;
    } finally {
      ((j.p = a), (N.T = n), Kd(t, e));
    }
  }
  function kd(t, e, l) {
    ((e = Ce(l, e)), (e = uf(t.stateNode, e, 2)), (t = Tl(t, e, 2)), t !== null && (In(t, 2), Ve(t)));
  }
  function bt(t, e, l) {
    if (t.tag === 3) kd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          kd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' && (Cl === null || !Cl.has(n)))
          ) {
            ((t = Ce(l, t)), (l = Fs(2)), (n = Tl(e, l, 2)), n !== null && ($s(l, n, e, t), In(n, 2), Ve(n)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Mf(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new w0();
      var a = new Set();
      n.set(e, a);
    } else ((a = n.get(e)), a === void 0 && ((a = new Set()), n.set(e, a)));
    a.has(l) || ((Rf = !0), a.add(l), (t = G0.bind(null, t, e, l)), e.then(t, t));
  }
  function G0(t, e, l) {
    var n = t.pingCache;
    (n !== null && n.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      At === t &&
        (rt & l) === l &&
        (Nt === 4 || (Nt === 3 && (rt & 62914560) === rt && 300 > me() - ku) ? (pt & 2) === 0 && qn(t, 0) : (Af |= l),
        wn === rt && (wn = 0)),
      Ve(t));
  }
  function Fd(t, e) {
    (e === 0 && (e = Xr()), (t = Vl(t, e)), t !== null && (In(t, e), Ve(t)));
  }
  function X0(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Fd(t, l));
  }
  function Q0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode,
          a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (n !== null && n.delete(e), Fd(t, l));
  }
  function V0(t, e) {
    return Qi(t, e);
  }
  var ei = null,
    Yn = null,
    Nf = !1,
    li = !1,
    xf = !1,
    Ml = 0;
  function Ve(t) {
    (t !== Yn && t.next === null && (Yn === null ? (ei = Yn = t) : (Yn = Yn.next = t)),
      (li = !0),
      Nf || ((Nf = !0), K0()));
  }
  function xa(t, e) {
    if (!xf && li) {
      xf = !0;
      do
        for (var l = !1, n = ei; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var o = n.suspendedLanes,
                h = n.pingedLanes;
              ((i = (1 << (31 - pe(42 | t) + 1)) - 1),
                (i &= a & ~(o & ~h)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), Id(n, i));
          } else
            ((i = rt),
              (i = iu(n, n === At ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1)),
              (i & 3) === 0 || Pn(n, i) || ((l = !0), Id(n, i)));
          n = n.next;
        }
      while (l);
      xf = !1;
    }
  }
  function Z0() {
    $d();
  }
  function $d() {
    li = Nf = !1;
    var t = 0;
    Ml !== 0 && lp() && (t = Ml);
    for (var e = me(), l = null, n = ei; n !== null; ) {
      var a = n.next,
        i = Wd(n, e);
      (i === 0
        ? ((n.next = null), l === null ? (ei = a) : (l.next = a), a === null && (Yn = l))
        : ((l = n), (t !== 0 || (i & 3) !== 0) && (li = !0)),
        (n = a));
    }
    ((Vt !== 0 && Vt !== 5) || xa(t), Ml !== 0 && (Ml = 0));
  }
  function Wd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var o = 31 - pe(i),
        h = 1 << o,
        g = a[o];
      (g === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[o] = gy(h, e)) : g <= e && (t.expiredLanes |= h), (i &= ~h));
    }
    if (
      ((e = At),
      (l = rt),
      (l = iu(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (n = t.callbackNode),
      l === 0 || (t === e && (St === 2 || St === 9)) || t.cancelPendingCommit !== null)
    )
      return (n !== null && n !== null && Vi(n), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((l & 3) === 0 || Pn(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((n !== null && Vi(n), Ji(l))) {
        case 2:
        case 8:
          l = Yr;
          break;
        case 32:
          l = lu;
          break;
        case 268435456:
          l = Gr;
          break;
        default:
          l = lu;
      }
      return ((n = Pd.bind(null, t)), (l = Qi(l, n)), (t.callbackPriority = e), (t.callbackNode = l), e);
    }
    return (n !== null && n !== null && Vi(n), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function Pd(t, e) {
    if (Vt !== 0 && Vt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (ti() && t.callbackNode !== l) return null;
    var n = rt;
    return (
      (n = iu(t, t === At ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      n === 0
        ? null
        : (xd(t, n, e), Wd(t, me()), t.callbackNode != null && t.callbackNode === l ? Pd.bind(null, t) : null)
    );
  }
  function Id(t, e) {
    if (ti()) return null;
    xd(t, e, !0);
  }
  function K0() {
    ap(function () {
      (pt & 6) !== 0 ? Qi(jr, Z0) : $d();
    });
  }
  function Bf() {
    if (Ml === 0) {
      var t = On;
      (t === 0 && ((t = nu), (nu <<= 1), (nu & 261888) === 0 && (nu = 256)), (Ml = t));
    }
    return Ml;
  }
  function th(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null : typeof t == 'function' ? t : ou('' + t);
  }
  function eh(t, e) {
    var l = e.ownerDocument.createElement('input');
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute('form', t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function J0(t, e, l, n, a) {
    if (e === 'submit' && l && l.stateNode === a) {
      var i = th((a[ae] || null).action),
        o = n.submitter;
      o &&
        ((e = (e = o[ae] || null) ? th(e.formAction) : o.getAttribute('formAction')),
        e !== null && ((i = e), (o = null)));
      var h = new mu('action', 'action', null, n, a);
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Ml !== 0) {
                  var g = o ? eh(a, o) : new FormData(a);
                  Ic(l, { pending: !0, data: g, method: a.method, action: i }, null, g);
                }
              } else
                typeof i == 'function' &&
                  (h.preventDefault(),
                  (g = o ? eh(a, o) : new FormData(a)),
                  Ic(l, { pending: !0, data: g, method: a.method, action: i }, i, g));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Hf = 0; Hf < pc.length; Hf++) {
    var wf = pc[Hf],
      k0 = wf.toLowerCase(),
      F0 = wf[0].toUpperCase() + wf.slice(1);
    we(k0, 'on' + F0);
  }
  (we(No, 'onAnimationEnd'),
    we(xo, 'onAnimationIteration'),
    we(Bo, 'onAnimationStart'),
    we('dblclick', 'onDoubleClick'),
    we('focusin', 'onFocus'),
    we('focusout', 'onBlur'),
    we(s0, 'onTransitionRun'),
    we(d0, 'onTransitionStart'),
    we(h0, 'onTransitionCancel'),
    we(Ho, 'onTransitionEnd'),
    sn('onMouseEnter', ['mouseout', 'mouseover']),
    sn('onMouseLeave', ['mouseout', 'mouseover']),
    sn('onPointerEnter', ['pointerout', 'pointerover']),
    sn('onPointerLeave', ['pointerout', 'pointerover']),
    Yl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Yl('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Yl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Yl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Yl('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Yl('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
  var Ba =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    $0 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ba));
  function lh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l],
        a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var o = n.length - 1; 0 <= o; o--) {
            var h = n[o],
              g = h.instance,
              _ = h.currentTarget;
            if (((h = h.listener), g !== i && a.isPropagationStopped())) break t;
            ((i = h), (a.currentTarget = _));
            try {
              i(a);
            } catch (B) {
              vu(B);
            }
            ((a.currentTarget = null), (i = g));
          }
        else
          for (o = 0; o < n.length; o++) {
            if (
              ((h = n[o]),
              (g = h.instance),
              (_ = h.currentTarget),
              (h = h.listener),
              g !== i && a.isPropagationStopped())
            )
              break t;
            ((i = h), (a.currentTarget = _));
            try {
              i(a);
            } catch (B) {
              vu(B);
            }
            ((a.currentTarget = null), (i = g));
          }
      }
    }
  }
  function ft(t, e) {
    var l = e[ki];
    l === void 0 && (l = e[ki] = new Set());
    var n = t + '__bubble';
    l.has(n) || (nh(e, t, 2, !1), l.add(n));
  }
  function Lf(t, e, l) {
    var n = 0;
    (e && (n |= 4), nh(l, t, n, e));
  }
  var ni = '_reactListening' + Math.random().toString(36).slice(2);
  function qf(t) {
    if (!t[ni]) {
      ((t[ni] = !0),
        Fr.forEach(function (l) {
          l !== 'selectionchange' && ($0.has(l) || Lf(l, !1, t), Lf(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ni] || ((e[ni] = !0), Lf('selectionchange', !1, e));
    }
  }
  function nh(t, e, l, n) {
    switch (Nh(e)) {
      case 2:
        var a = Ap;
        break;
      case 8:
        a = Op;
        break;
      default:
        a = If;
    }
    ((l = a.bind(null, e, l, t)),
      (a = void 0),
      !nc || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (a = !0),
      n
        ? a !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: a })
          : t.addEventListener(e, l, !0)
        : a !== void 0
          ? t.addEventListener(e, l, { passive: a })
          : t.addEventListener(e, l, !1));
  }
  function jf(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var h = n.stateNode.containerInfo;
          if (h === a) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var g = o.tag;
              if ((g === 3 || g === 4) && o.stateNode.containerInfo === a) return;
              o = o.return;
            }
          for (; h !== null; ) {
            if (((o = fn(h)), o === null)) return;
            if (((g = o.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
              n = i = o;
              continue t;
            }
            h = h.parentNode;
          }
        }
        n = n.return;
      }
    co(function () {
      var _ = i,
        B = ec(l),
        L = [];
      t: {
        var z = wo.get(t);
        if (z !== void 0) {
          var U = mu,
            Z = t;
          switch (t) {
            case 'keypress':
              if (du(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              U = Qy;
              break;
            case 'focusin':
              ((Z = 'focus'), (U = cc));
              break;
            case 'focusout':
              ((Z = 'blur'), (U = cc));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = cc;
              break;
            case 'click':
              if (l.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              U = oo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = My;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = Ky;
              break;
            case No:
            case xo:
            case Bo:
              U = By;
              break;
            case Ho:
              U = ky;
              break;
            case 'scroll':
            case 'scrollend':
              U = Dy;
              break;
            case 'wheel':
              U = $y;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = wy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = ho;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = Py;
          }
          var W = (e & 4) !== 0,
            Rt = !W && (t === 'scroll' || t === 'scrollend'),
            R = W ? (z !== null ? z + 'Capture' : null) : z;
          W = [];
          for (var T = _, O; T !== null; ) {
            var H = T;
            if (
              ((O = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                O === null ||
                R === null ||
                ((H = la(T, R)), H != null && W.push(Ha(T, H, O))),
              Rt)
            )
              break;
            T = T.return;
          }
          0 < W.length && ((z = new U(z, Z, null, l, B)), L.push({ event: z, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === 'mouseover' || t === 'pointerover'),
            (U = t === 'mouseout' || t === 'pointerout'),
            z && l !== tc && (Z = l.relatedTarget || l.fromElement) && (fn(Z) || Z[cn]))
          )
            break t;
          if (
            (U || z) &&
            ((z = B.window === B ? B : (z = B.ownerDocument) ? z.defaultView || z.parentWindow : window),
            U
              ? ((Z = l.relatedTarget || l.toElement),
                (U = _),
                (Z = Z ? fn(Z) : null),
                Z !== null && ((Rt = d(Z)), (W = Z.tag), Z !== Rt || (W !== 5 && W !== 27 && W !== 6)) && (Z = null))
              : ((U = null), (Z = _)),
            U !== Z)
          ) {
            if (
              ((W = oo),
              (H = 'onMouseLeave'),
              (R = 'onMouseEnter'),
              (T = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((W = ho), (H = 'onPointerLeave'), (R = 'onPointerEnter'), (T = 'pointer')),
              (Rt = U == null ? z : ea(U)),
              (O = Z == null ? z : ea(Z)),
              (z = new W(H, T + 'leave', U, l, B)),
              (z.target = Rt),
              (z.relatedTarget = O),
              (H = null),
              fn(B) === _ && ((W = new W(R, T + 'enter', Z, l, B)), (W.target = O), (W.relatedTarget = Rt), (H = W)),
              (Rt = H),
              U && Z)
            )
              e: {
                for (W = W0, R = U, T = Z, O = 0, H = R; H; H = W(H)) O++;
                H = 0;
                for (var F = T; F; F = W(F)) H++;
                for (; 0 < O - H; ) ((R = W(R)), O--);
                for (; 0 < H - O; ) ((T = W(T)), H--);
                for (; O--; ) {
                  if (R === T || (T !== null && R === T.alternate)) {
                    W = R;
                    break e;
                  }
                  ((R = W(R)), (T = W(T)));
                }
                W = null;
              }
            else W = null;
            (U !== null && ah(L, z, U, W, !1), Z !== null && Rt !== null && ah(L, Rt, Z, W, !0));
          }
        }
        t: {
          if (
            ((z = _ ? ea(_) : window),
            (U = z.nodeName && z.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && z.type === 'file'))
          )
            var dt = Eo;
          else if (So(z))
            if (To) dt = f0;
            else {
              dt = i0;
              var K = u0;
            }
          else
            ((U = z.nodeName),
              !U || U.toLowerCase() !== 'input' || (z.type !== 'checkbox' && z.type !== 'radio')
                ? _ && Ii(_.elementType) && (dt = Eo)
                : (dt = c0));
          if (dt && (dt = dt(t, _))) {
            bo(L, dt, l, B);
            break t;
          }
          (K && K(t, z, _),
            t === 'focusout' && _ && z.type === 'number' && _.memoizedProps.value != null && Pi(z, 'number', z.value));
        }
        switch (((K = _ ? ea(_) : window), t)) {
          case 'focusin':
            (So(K) || K.contentEditable === 'true') && ((vn = K), (hc = _), (oa = null));
            break;
          case 'focusout':
            oa = hc = vn = null;
            break;
          case 'mousedown':
            mc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((mc = !1), Uo(L, l, B));
            break;
          case 'selectionchange':
            if (o0) break;
          case 'keydown':
          case 'keyup':
            Uo(L, l, B);
        }
        var nt;
        if (rc)
          t: {
            switch (t) {
              case 'compositionstart':
                var ot = 'onCompositionStart';
                break t;
              case 'compositionend':
                ot = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                ot = 'onCompositionUpdate';
                break t;
            }
            ot = void 0;
          }
        else
          pn
            ? vo(t, l) && (ot = 'onCompositionEnd')
            : t === 'keydown' && l.keyCode === 229 && (ot = 'onCompositionStart');
        (ot &&
          (mo &&
            l.locale !== 'ko' &&
            (pn || ot !== 'onCompositionStart'
              ? ot === 'onCompositionEnd' && pn && (nt = fo())
              : ((yl = B), (ac = 'value' in yl ? yl.value : yl.textContent), (pn = !0))),
          (K = ai(_, ot)),
          0 < K.length &&
            ((ot = new so(ot, t, null, l, B)),
            L.push({ event: ot, listeners: K }),
            nt ? (ot.data = nt) : ((nt = go(l)), nt !== null && (ot.data = nt)))),
          (nt = t0 ? e0(t, l) : l0(t, l)) &&
            ((ot = ai(_, 'onBeforeInput')),
            0 < ot.length &&
              ((K = new so('onBeforeInput', 'beforeinput', null, l, B)),
              L.push({ event: K, listeners: ot }),
              (K.data = nt))),
          J0(L, t, _, l, B));
      }
      lh(L, e);
    });
  }
  function Ha(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function ai(t, e) {
    for (var l = e + 'Capture', n = []; t !== null; ) {
      var a = t,
        i = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          i === null ||
          ((a = la(t, l)), a != null && n.unshift(Ha(t, a, i)), (a = la(t, e)), a != null && n.push(Ha(t, a, i))),
        t.tag === 3)
      )
        return n;
      t = t.return;
    }
    return [];
  }
  function W0(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ah(t, e, l, n, a) {
    for (var i = e._reactName, o = []; l !== null && l !== n; ) {
      var h = l,
        g = h.alternate,
        _ = h.stateNode;
      if (((h = h.tag), g !== null && g === n)) break;
      ((h !== 5 && h !== 26 && h !== 27) ||
        _ === null ||
        ((g = _),
        a
          ? ((_ = la(l, i)), _ != null && o.unshift(Ha(l, _, g)))
          : a || ((_ = la(l, i)), _ != null && o.push(Ha(l, _, g)))),
        (l = l.return));
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var P0 = /\r\n?/g,
    I0 = /\u0000|\uFFFD/g;
  function uh(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        P0,
        `
`
      )
      .replace(I0, '');
  }
  function ih(t, e) {
    return ((e = uh(e)), uh(t) === e);
  }
  function Tt(t, e, l, n, a, i) {
    switch (l) {
      case 'children':
        typeof n == 'string'
          ? e === 'body' || (e === 'textarea' && n === '') || hn(t, n)
          : (typeof n == 'number' || typeof n == 'bigint') && e !== 'body' && hn(t, '' + n);
        break;
      case 'className':
        fu(t, 'class', n);
        break;
      case 'tabIndex':
        fu(t, 'tabindex', n);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        fu(t, l, n);
        break;
      case 'style':
        uo(t, n, i);
        break;
      case 'data':
        if (e !== 'object') {
          fu(t, 'data', n);
          break;
        }
      case 'src':
      case 'href':
        if (n === '' && (e !== 'a' || l !== 'href')) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == 'function' || typeof n == 'symbol' || typeof n == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((n = ou('' + n)), t.setAttribute(l, n));
        break;
      case 'action':
      case 'formAction':
        if (typeof n == 'function') {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == 'function' &&
            (l === 'formAction'
              ? (e !== 'input' && Tt(t, e, 'name', a.name, a, null),
                Tt(t, e, 'formEncType', a.formEncType, a, null),
                Tt(t, e, 'formMethod', a.formMethod, a, null),
                Tt(t, e, 'formTarget', a.formTarget, a, null))
              : (Tt(t, e, 'encType', a.encType, a, null),
                Tt(t, e, 'method', a.method, a, null),
                Tt(t, e, 'target', a.target, a, null)));
        if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((n = ou('' + n)), t.setAttribute(l, n));
        break;
      case 'onClick':
        n != null && (t.onclick = ke);
        break;
      case 'onScroll':
        n != null && ft('scroll', t);
        break;
      case 'onScrollEnd':
        n != null && ft('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(f(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        t.multiple = n && typeof n != 'function' && typeof n != 'symbol';
        break;
      case 'muted':
        t.muted = n && typeof n != 'function' && typeof n != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (n == null || typeof n == 'function' || typeof n == 'boolean' || typeof n == 'symbol') {
          t.removeAttribute('xlink:href');
          break;
        }
        ((l = ou('' + n)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        n != null && typeof n != 'function' && typeof n != 'symbol' ? t.setAttribute(l, '' + n) : t.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        n && typeof n != 'function' && typeof n != 'symbol' ? t.setAttribute(l, '') : t.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        n === !0
          ? t.setAttribute(l, '')
          : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
            ? t.setAttribute(l, n)
            : t.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
          ? t.setAttribute(l, n)
          : t.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
          ? t.removeAttribute(l)
          : t.setAttribute(l, n);
        break;
      case 'popover':
        (ft('beforetoggle', t), ft('toggle', t), cu(t, 'popover', n));
        break;
      case 'xlinkActuate':
        Je(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
        break;
      case 'xlinkArcrole':
        Je(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
        break;
      case 'xlinkRole':
        Je(t, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
        break;
      case 'xlinkShow':
        Je(t, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
        break;
      case 'xlinkTitle':
        Je(t, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
        break;
      case 'xlinkType':
        Je(t, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
        break;
      case 'xmlBase':
        Je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
        break;
      case 'xmlLang':
        Je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
        break;
      case 'xmlSpace':
        Je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
        break;
      case 'is':
        cu(t, 'is', n);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = zy.get(l) || l), cu(t, l, n));
    }
  }
  function Yf(t, e, l, n, a, i) {
    switch (l) {
      case 'style':
        uo(t, n, i);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(f(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof n == 'string' ? hn(t, n) : (typeof n == 'number' || typeof n == 'bigint') && hn(t, '' + n);
        break;
      case 'onScroll':
        n != null && ft('scroll', t);
        break;
      case 'onScrollEnd':
        n != null && ft('scrollend', t);
        break;
      case 'onClick':
        n != null && (t.onclick = ke);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!$r.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((a = l.endsWith('Capture')),
              (e = l.slice(2, a ? l.length - 7 : void 0)),
              (i = t[ae] || null),
              (i = i != null ? i[l] : null),
              typeof i == 'function' && t.removeEventListener(e, i, a),
              typeof n == 'function')
            ) {
              (typeof i != 'function' &&
                i !== null &&
                (l in t ? (t[l] = null) : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, n, a));
              break t;
            }
            l in t ? (t[l] = n) : n === !0 ? t.setAttribute(l, '') : cu(t, l, n);
          }
    }
  }
  function Wt(t, e, l) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (ft('error', t), ft('load', t));
        var n = !1,
          a = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case 'src':
                  n = !0;
                  break;
                case 'srcSet':
                  a = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, e));
                default:
                  Tt(t, e, i, o, l, null);
              }
          }
        (a && Tt(t, e, 'srcSet', l.srcSet, l, null), n && Tt(t, e, 'src', l.src, l, null));
        return;
      case 'input':
        ft('invalid', t);
        var h = (i = o = a = null),
          g = null,
          _ = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var B = l[n];
            if (B != null)
              switch (n) {
                case 'name':
                  a = B;
                  break;
                case 'type':
                  o = B;
                  break;
                case 'checked':
                  g = B;
                  break;
                case 'defaultChecked':
                  _ = B;
                  break;
                case 'value':
                  i = B;
                  break;
                case 'defaultValue':
                  h = B;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (B != null) throw Error(f(137, e));
                  break;
                default:
                  Tt(t, e, n, B, l, null);
              }
          }
        eo(t, i, h, g, _, o, a, !1);
        return;
      case 'select':
        (ft('invalid', t), (n = o = i = null));
        for (a in l)
          if (l.hasOwnProperty(a) && ((h = l[a]), h != null))
            switch (a) {
              case 'value':
                i = h;
                break;
              case 'defaultValue':
                o = h;
                break;
              case 'multiple':
                n = h;
              default:
                Tt(t, e, a, h, l, null);
            }
        ((e = i), (l = o), (t.multiple = !!n), e != null ? dn(t, !!n, e, !1) : l != null && dn(t, !!n, l, !0));
        return;
      case 'textarea':
        (ft('invalid', t), (i = a = n = null));
        for (o in l)
          if (l.hasOwnProperty(o) && ((h = l[o]), h != null))
            switch (o) {
              case 'value':
                n = h;
                break;
              case 'defaultValue':
                a = h;
                break;
              case 'children':
                i = h;
                break;
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(f(91));
                break;
              default:
                Tt(t, e, o, h, l, null);
            }
        no(t, n, a, i);
        return;
      case 'option':
        for (g in l)
          l.hasOwnProperty(g) &&
            ((n = l[g]), n != null) &&
            (g === 'selected'
              ? (t.selected = n && typeof n != 'function' && typeof n != 'symbol')
              : Tt(t, e, g, n, l, null));
        return;
      case 'dialog':
        (ft('beforetoggle', t), ft('toggle', t), ft('cancel', t), ft('close', t));
        break;
      case 'iframe':
      case 'object':
        ft('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Ba.length; n++) ft(Ba[n], t);
        break;
      case 'image':
        (ft('error', t), ft('load', t));
        break;
      case 'details':
        ft('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (ft('error', t), ft('load', t));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (_ in l)
          if (l.hasOwnProperty(_) && ((n = l[_]), n != null))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(f(137, e));
              default:
                Tt(t, e, _, n, l, null);
            }
        return;
      default:
        if (Ii(e)) {
          for (B in l) l.hasOwnProperty(B) && ((n = l[B]), n !== void 0 && Yf(t, e, B, n, l, void 0));
          return;
        }
    }
    for (h in l) l.hasOwnProperty(h) && ((n = l[h]), n != null && Tt(t, e, h, n, l, null));
  }
  function tp(t, e, l, n) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var a = null,
          i = null,
          o = null,
          h = null,
          g = null,
          _ = null,
          B = null;
        for (U in l) {
          var L = l[U];
          if (l.hasOwnProperty(U) && L != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                g = L;
              default:
                n.hasOwnProperty(U) || Tt(t, e, U, null, n, L);
            }
        }
        for (var z in n) {
          var U = n[z];
          if (((L = l[z]), n.hasOwnProperty(z) && (U != null || L != null)))
            switch (z) {
              case 'type':
                i = U;
                break;
              case 'name':
                a = U;
                break;
              case 'checked':
                _ = U;
                break;
              case 'defaultChecked':
                B = U;
                break;
              case 'value':
                o = U;
                break;
              case 'defaultValue':
                h = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(f(137, e));
                break;
              default:
                U !== L && Tt(t, e, z, U, n, L);
            }
        }
        Wi(t, o, h, g, _, B, i, a);
        return;
      case 'select':
        U = o = h = z = null;
        for (i in l)
          if (((g = l[i]), l.hasOwnProperty(i) && g != null))
            switch (i) {
              case 'value':
                break;
              case 'multiple':
                U = g;
              default:
                n.hasOwnProperty(i) || Tt(t, e, i, null, n, g);
            }
        for (a in n)
          if (((i = n[a]), (g = l[a]), n.hasOwnProperty(a) && (i != null || g != null)))
            switch (a) {
              case 'value':
                z = i;
                break;
              case 'defaultValue':
                h = i;
                break;
              case 'multiple':
                o = i;
              default:
                i !== g && Tt(t, e, a, i, n, g);
            }
        ((e = h),
          (l = o),
          (n = U),
          z != null ? dn(t, !!l, z, !1) : !!n != !!l && (e != null ? dn(t, !!l, e, !0) : dn(t, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        U = z = null;
        for (h in l)
          if (((a = l[h]), l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h)))
            switch (h) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Tt(t, e, h, null, n, a);
            }
        for (o in n)
          if (((a = n[o]), (i = l[o]), n.hasOwnProperty(o) && (a != null || i != null)))
            switch (o) {
              case 'value':
                z = a;
                break;
              case 'defaultValue':
                U = a;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(f(91));
                break;
              default:
                a !== i && Tt(t, e, o, a, n, i);
            }
        lo(t, z, U);
        return;
      case 'option':
        for (var Z in l)
          ((z = l[Z]),
            l.hasOwnProperty(Z) &&
              z != null &&
              !n.hasOwnProperty(Z) &&
              (Z === 'selected' ? (t.selected = !1) : Tt(t, e, Z, null, n, z)));
        for (g in n)
          ((z = n[g]),
            (U = l[g]),
            n.hasOwnProperty(g) &&
              z !== U &&
              (z != null || U != null) &&
              (g === 'selected'
                ? (t.selected = z && typeof z != 'function' && typeof z != 'symbol')
                : Tt(t, e, g, z, n, U)));
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var W in l)
          ((z = l[W]), l.hasOwnProperty(W) && z != null && !n.hasOwnProperty(W) && Tt(t, e, W, null, n, z));
        for (_ in n)
          if (((z = n[_]), (U = l[_]), n.hasOwnProperty(_) && z !== U && (z != null || U != null)))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (z != null) throw Error(f(137, e));
                break;
              default:
                Tt(t, e, _, z, n, U);
            }
        return;
      default:
        if (Ii(e)) {
          for (var Rt in l)
            ((z = l[Rt]), l.hasOwnProperty(Rt) && z !== void 0 && !n.hasOwnProperty(Rt) && Yf(t, e, Rt, void 0, n, z));
          for (B in n)
            ((z = n[B]),
              (U = l[B]),
              !n.hasOwnProperty(B) || z === U || (z === void 0 && U === void 0) || Yf(t, e, B, z, n, U));
          return;
        }
    }
    for (var R in l) ((z = l[R]), l.hasOwnProperty(R) && z != null && !n.hasOwnProperty(R) && Tt(t, e, R, null, n, z));
    for (L in n)
      ((z = n[L]), (U = l[L]), !n.hasOwnProperty(L) || z === U || (z == null && U == null) || Tt(t, e, L, z, n, U));
  }
  function ch(t) {
    switch (t) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function ep() {
    if (typeof performance.getEntriesByType == 'function') {
      for (var t = 0, e = 0, l = performance.getEntriesByType('resource'), n = 0; n < l.length; n++) {
        var a = l[n],
          i = a.transferSize,
          o = a.initiatorType,
          h = a.duration;
        if (i && h && ch(o)) {
          for (o = 0, h = a.responseEnd, n += 1; n < l.length; n++) {
            var g = l[n],
              _ = g.startTime;
            if (_ > h) break;
            var B = g.transferSize,
              L = g.initiatorType;
            B && ch(L) && ((g = g.responseEnd), (o += B * (g < h ? 1 : (h - _) / (g - _))));
          }
          if ((--n, (e += (8 * (i + o)) / (a.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number') ? t : 5;
  }
  var Gf = null,
    Xf = null;
  function ui(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function fh(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function rh(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === 'foreignObject' ? 0 : t;
  }
  function Qf(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      typeof e.children == 'bigint' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vf = null;
  function lp() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === Vf ? !1 : ((Vf = t), !0)) : ((Vf = null), !1);
  }
  var oh = typeof setTimeout == 'function' ? setTimeout : void 0,
    np = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    sh = typeof Promise == 'function' ? Promise : void 0,
    ap =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof sh < 'u'
          ? function (t) {
              return sh.resolve(null).then(t).catch(up);
            }
          : oh;
  function up(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Nl(t) {
    return t === 'head';
  }
  function dh(t, e) {
    var l = e,
      n = 0;
    do {
      var a = l.nextSibling;
      if ((t.removeChild(l), a && a.nodeType === 8))
        if (((l = a.data), l === '/$' || l === '/&')) {
          if (n === 0) {
            (t.removeChild(a), Vn(e));
            return;
          }
          n--;
        } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') n++;
        else if (l === 'html') wa(t.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = t.ownerDocument.head), wa(l));
          for (var i = l.firstChild; i; ) {
            var o = i.nextSibling,
              h = i.nodeName;
            (i[ta] ||
              h === 'SCRIPT' ||
              h === 'STYLE' ||
              (h === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(i),
              (i = o));
          }
        } else l === 'body' && wa(t.ownerDocument.body);
      l = a;
    } while (l);
    Vn(e);
  }
  function hh(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
            : ((l.style.display = l._stashedDisplay || ''),
              l.getAttribute('style') === '' && l.removeAttribute('style'))
          : l.nodeType === 3 &&
            (e ? ((l._stashedText = l.nodeValue), (l.nodeValue = '')) : (l.nodeValue = l._stashedText || '')),
        n && n.nodeType === 8)
      )
        if (((l = n.data), l === '/$')) {
          if (t === 0) break;
          t--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || t++;
      l = n;
    } while (l);
  }
  function Zf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Zf(l), Fi(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(l);
    }
  }
  function ip(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (n) {
        if (!t[ta])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (((i = t.getAttribute('rel')), i === 'stylesheet' && t.hasAttribute('data-precedence'))) break;
              if (
                i !== a.rel ||
                t.getAttribute('href') !== (a.href == null || a.href === '' ? null : a.href) ||
                t.getAttribute('crossorigin') !== (a.crossOrigin == null ? null : a.crossOrigin) ||
                t.getAttribute('title') !== (a.title == null ? null : a.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((i = t.getAttribute('src')),
                (i !== (a.src == null ? null : a.src) ||
                  t.getAttribute('type') !== (a.type == null ? null : a.type) ||
                  t.getAttribute('crossorigin') !== (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  i &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var i = a.name == null ? null : '' + a.name;
        if (a.type === 'hidden' && t.getAttribute('name') === i) return t;
      } else return t;
      if (((t = xe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function cp(t, e, l) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !l) ||
        ((t = xe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function mh(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
        ((t = xe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Kf(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function Jf(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading');
  }
  function fp(t, e) {
    var l = t.ownerDocument;
    if (t.data === '$~') t._reactRetry = e;
    else if (t.data !== '$?' || l.readyState !== 'loading') e();
    else {
      var n = function () {
        (e(), l.removeEventListener('DOMContentLoaded', n));
      };
      (l.addEventListener('DOMContentLoaded', n), (t._reactRetry = n));
    }
  }
  function xe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === '$' || e === '$!' || e === '$?' || e === '$~' || e === '&' || e === 'F!' || e === 'F'))
          break;
        if (e === '/$' || e === '/&') return null;
      }
    }
    return t;
  }
  var kf = null;
  function yh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return xe(t.nextSibling);
          e--;
        } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ph(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (e === 0) return t;
          e--;
        } else (l !== '/$' && l !== '/&') || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function vh(t, e, l) {
    switch (((e = ui(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function wa(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Fi(t);
  }
  var Be = new Map(),
    gh = new Set();
  function ii(t) {
    return typeof t.getRootNode == 'function' ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ol = j.d;
  j.d = { f: rp, r: op, D: sp, C: dp, L: hp, m: mp, X: pp, S: yp, M: vp };
  function rp() {
    var t = ol.f(),
      e = Wu();
    return t || e;
  }
  function op(t) {
    var e = rn(t);
    e !== null && e.tag === 5 && e.type === 'form' ? Hs(e) : ol.r(t);
  }
  var Gn = typeof document > 'u' ? null : document;
  function Sh(t, e, l) {
    var n = Gn;
    if (n && typeof e == 'string' && e) {
      var a = _e(e);
      ((a = 'link[rel="' + t + '"][href="' + a + '"]'),
        typeof l == 'string' && (a += '[crossorigin="' + l + '"]'),
        gh.has(a) ||
          (gh.add(a),
          (t = { rel: t, crossOrigin: l, href: e }),
          n.querySelector(a) === null &&
            ((e = n.createElement('link')), Wt(e, 'link', t), Zt(e), n.head.appendChild(e))));
    }
  }
  function sp(t) {
    (ol.D(t), Sh('dns-prefetch', t, null));
  }
  function dp(t, e) {
    (ol.C(t, e), Sh('preconnect', t, e));
  }
  function hp(t, e, l) {
    ol.L(t, e, l);
    var n = Gn;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + _e(e) + '"]';
      e === 'image' && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + _e(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (a += '[imagesizes="' + _e(l.imageSizes) + '"]'))
        : (a += '[href="' + _e(t) + '"]');
      var i = a;
      switch (e) {
        case 'style':
          i = Xn(t);
          break;
        case 'script':
          i = Qn(t);
      }
      Be.has(i) ||
        ((t = b({ rel: 'preload', href: e === 'image' && l && l.imageSrcSet ? void 0 : t, as: e }, l)),
        Be.set(i, t),
        n.querySelector(a) !== null ||
          (e === 'style' && n.querySelector(La(i))) ||
          (e === 'script' && n.querySelector(qa(i))) ||
          ((e = n.createElement('link')), Wt(e, 'link', t), Zt(e), n.head.appendChild(e)));
    }
  }
  function mp(t, e) {
    ol.m(t, e);
    var l = Gn;
    if (l && t) {
      var n = e && typeof e.as == 'string' ? e.as : 'script',
        a = 'link[rel="modulepreload"][as="' + _e(n) + '"][href="' + _e(t) + '"]',
        i = a;
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          i = Qn(t);
      }
      if (!Be.has(i) && ((t = b({ rel: 'modulepreload', href: t }, e)), Be.set(i, t), l.querySelector(a) === null)) {
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(qa(i))) return;
        }
        ((n = l.createElement('link')), Wt(n, 'link', t), Zt(n), l.head.appendChild(n));
      }
    }
  }
  function yp(t, e, l) {
    ol.S(t, e, l);
    var n = Gn;
    if (n && t) {
      var a = on(n).hoistableStyles,
        i = Xn(t);
      e = e || 'default';
      var o = a.get(i);
      if (!o) {
        var h = { loading: 0, preload: null };
        if ((o = n.querySelector(La(i)))) h.loading = 5;
        else {
          ((t = b({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)), (l = Be.get(i)) && Ff(t, l));
          var g = (o = n.createElement('link'));
          (Zt(g),
            Wt(g, 'link', t),
            (g._p = new Promise(function (_, B) {
              ((g.onload = _), (g.onerror = B));
            })),
            g.addEventListener('load', function () {
              h.loading |= 1;
            }),
            g.addEventListener('error', function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            ci(o, e, n));
        }
        ((o = { type: 'stylesheet', instance: o, count: 1, state: h }), a.set(i, o));
      }
    }
  }
  function pp(t, e) {
    ol.X(t, e);
    var l = Gn;
    if (l && t) {
      var n = on(l).hoistableScripts,
        a = Qn(t),
        i = n.get(a);
      i ||
        ((i = l.querySelector(qa(a))),
        i ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Be.get(a)) && $f(t, e),
          (i = l.createElement('script')),
          Zt(i),
          Wt(i, 'link', t),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        n.set(a, i));
    }
  }
  function vp(t, e) {
    ol.M(t, e);
    var l = Gn;
    if (l && t) {
      var n = on(l).hoistableScripts,
        a = Qn(t),
        i = n.get(a);
      i ||
        ((i = l.querySelector(qa(a))),
        i ||
          ((t = b({ src: t, async: !0, type: 'module' }, e)),
          (e = Be.get(a)) && $f(t, e),
          (i = l.createElement('script')),
          Zt(i),
          Wt(i, 'link', t),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        n.set(a, i));
    }
  }
  function bh(t, e, l, n) {
    var a = (a = it.current) ? ii(a) : null;
    if (!a) throw Error(f(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((e = Xn(l.href)),
            (l = on(a).hoistableStyles),
            (n = l.get(e)),
            n || ((n = { type: 'style', instance: null, count: 0, state: null }), l.set(e, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (l.rel === 'stylesheet' && typeof l.href == 'string' && typeof l.precedence == 'string') {
          t = Xn(l.href);
          var i = on(a).hoistableStyles,
            o = i.get(t);
          if (
            (o ||
              ((a = a.ownerDocument || a),
              (o = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              i.set(t, o),
              (i = a.querySelector(La(t))) && !i._p && ((o.instance = i), (o.state.loading = 5)),
              Be.has(t) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy
                }),
                Be.set(t, l),
                i || gp(a, t, l, o.state))),
            e && n === null)
          )
            throw Error(f(528, ''));
          return o;
        }
        if (e && n !== null) throw Error(f(529, ''));
        return null;
      case 'script':
        return (
          (e = l.async),
          (l = l.src),
          typeof l == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
            ? ((e = Qn(l)),
              (l = on(a).hoistableScripts),
              (n = l.get(e)),
              n || ((n = { type: 'script', instance: null, count: 0, state: null }), l.set(e, n)),
              n)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Xn(t) {
    return 'href="' + _e(t) + '"';
  }
  function La(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Eh(t) {
    return b({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function gp(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (n.loading = 1)
      : ((e = t.createElement('link')),
        (n.preload = e),
        e.addEventListener('load', function () {
          return (n.loading |= 1);
        }),
        e.addEventListener('error', function () {
          return (n.loading |= 2);
        }),
        Wt(e, 'link', l),
        Zt(e),
        t.head.appendChild(e));
  }
  function Qn(t) {
    return '[src="' + _e(t) + '"]';
  }
  function qa(t) {
    return 'script[async]' + t;
  }
  function Th(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var n = t.querySelector('style[data-href~="' + _e(l.href) + '"]');
          if (n) return ((e.instance = n), Zt(n), n);
          var a = b({}, l, { 'data-href': l.href, 'data-precedence': l.precedence, href: null, precedence: null });
          return (
            (n = (t.ownerDocument || t).createElement('style')),
            Zt(n),
            Wt(n, 'style', a),
            ci(n, l.precedence, t),
            (e.instance = n)
          );
        case 'stylesheet':
          a = Xn(l.href);
          var i = t.querySelector(La(a));
          if (i) return ((e.state.loading |= 4), (e.instance = i), Zt(i), i);
          ((n = Eh(l)), (a = Be.get(a)) && Ff(n, a), (i = (t.ownerDocument || t).createElement('link')), Zt(i));
          var o = i;
          return (
            (o._p = new Promise(function (h, g) {
              ((o.onload = h), (o.onerror = g));
            })),
            Wt(i, 'link', n),
            (e.state.loading |= 4),
            ci(i, l.precedence, t),
            (e.instance = i)
          );
        case 'script':
          return (
            (i = Qn(l.src)),
            (a = t.querySelector(qa(i)))
              ? ((e.instance = a), Zt(a), a)
              : ((n = l),
                (a = Be.get(i)) && ((n = b({}, l)), $f(n, a)),
                (t = t.ownerDocument || t),
                (a = t.createElement('script')),
                Zt(a),
                Wt(a, 'link', n),
                t.head.appendChild(a),
                (e.instance = a))
          );
        case 'void':
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((n = e.instance), (e.state.loading |= 4), ci(n, l.precedence, t));
    return e.instance;
  }
  function ci(t, e, l) {
    for (
      var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        a = n.length ? n[n.length - 1] : null,
        i = a,
        o = 0;
      o < n.length;
      o++
    ) {
      var h = n[o];
      if (h.dataset.precedence === e) i = h;
      else if (i !== a) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Ff(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function $f(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var fi = null;
  function Rh(t, e, l) {
    if (fi === null) {
      var n = new Map(),
        a = (fi = new Map());
      a.set(l, n);
    } else ((a = fi), (n = a.get(l)), n || ((n = new Map()), a.set(l, n)));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var i = l[a];
      if (
        !(i[ta] || i[Jt] || (t === 'link' && i.getAttribute('rel') === 'stylesheet')) &&
        i.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var o = i.getAttribute(e) || '';
        o = t + o;
        var h = n.get(o);
        h ? h.push(i) : n.set(o, [i]);
      }
    }
    return n;
  }
  function Ah(t, e, l) {
    ((t = t.ownerDocument || t), t.head.insertBefore(l, e === 'title' ? t.querySelector('head > title') : null));
  }
  function Sp(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break;
        return !0;
      case 'link':
        if (typeof e.rel != 'string' || typeof e.href != 'string' || e.href === '' || e.onLoad || e.onError) break;
        return e.rel === 'stylesheet' ? ((t = e.disabled), typeof e.precedence == 'string' && t == null) : !0;
      case 'script':
        if (
          e.async &&
          typeof e.async != 'function' &&
          typeof e.async != 'symbol' &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Oh(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function bp(t, e, l, n) {
    if (
      l.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var a = Xn(n.href),
          i = e.querySelector(La(a));
        if (i) {
          ((e = i._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = ri.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = i),
            Zt(i));
          return;
        }
        ((i = e.ownerDocument || e), (n = Eh(n)), (a = Be.get(a)) && Ff(n, a), (i = i.createElement('link')), Zt(i));
        var o = i;
        ((o._p = new Promise(function (h, g) {
          ((o.onload = h), (o.onerror = g));
        })),
          Wt(i, 'link', n),
          (l.instance = i));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++, (l = ri.bind(t)), e.addEventListener('load', l), e.addEventListener('error', l)));
    }
  }
  var Wf = 0;
  function Ep(t, e) {
    return (
      t.stylesheets && t.count === 0 && si(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var n = setTimeout(function () {
              if ((t.stylesheets && si(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                ((t.unsuspend = null), i());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Wf === 0 && (Wf = 62500 * ep());
            var a = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1), t.count === 0 && (t.stylesheets && si(t, t.stylesheets), t.unsuspend))
                ) {
                  var i = t.unsuspend;
                  ((t.unsuspend = null), i());
                }
              },
              (t.imgBytes > Wf ? 50 : 800) + e
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(n), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function ri() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) si(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var oi = null;
  function si(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null && (t.count++, (oi = new Map()), e.forEach(Tp, t), (oi = null), ri.call(t)));
  }
  function Tp(t, e) {
    if (!(e.state.loading & 4)) {
      var l = oi.get(t);
      if (l) var n = l.get(null);
      else {
        ((l = new Map()), oi.set(t, l));
        for (var a = t.querySelectorAll('link[data-precedence],style[data-precedence]'), i = 0; i < a.length; i++) {
          var o = a[i];
          (o.nodeName === 'LINK' || o.getAttribute('media') !== 'not all') && (l.set(o.dataset.precedence, o), (n = o));
        }
        n && l.set(null, n);
      }
      ((a = e.instance),
        (o = a.getAttribute('data-precedence')),
        (i = l.get(o) || n),
        i === n && l.set(null, a),
        l.set(o, a),
        this.count++,
        (n = ri.bind(this)),
        a.addEventListener('load', n),
        a.addEventListener('error', n),
        i
          ? i.parentNode.insertBefore(a, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(a, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ja = { $$typeof: Q, Provider: null, Consumer: null, _currentValue: k, _currentValue2: k, _threadCount: 0 };
  function Rp(t, e, l, n, a, i, o, h, g) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zi(0)),
      (this.hiddenUpdates = Zi(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = a),
      (this.onCaughtError = i),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map()));
  }
  function _h(t, e, l, n, a, i, o, h, g, _, B, L) {
    return (
      (t = new Rp(t, e, l, o, g, _, B, L, h)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = ge(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Dc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: n, isDehydrated: l, cache: e }),
      xc(i),
      t
    );
  }
  function zh(t) {
    return t ? ((t = bn), t) : bn;
  }
  function Ch(t, e, l, n, a, i) {
    ((a = zh(a)),
      n.context === null ? (n.context = a) : (n.pendingContext = a),
      (n = El(e)),
      (n.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (n.callback = i),
      (l = Tl(t, n, e)),
      l !== null && (oe(l, t, e), va(l, t, e)));
  }
  function Dh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Pf(t, e) {
    (Dh(t, e), (t = t.alternate) && Dh(t, e));
  }
  function Uh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vl(t, 67108864);
      (e !== null && oe(e, t, 67108864), Pf(t, 67108864));
    }
  }
  function Mh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Re();
      e = Ki(e);
      var l = Vl(t, e);
      (l !== null && oe(l, t, e), Pf(t, e));
    }
  }
  var di = !0;
  function Ap(t, e, l, n) {
    var a = N.T;
    N.T = null;
    var i = j.p;
    try {
      ((j.p = 2), If(t, e, l, n));
    } finally {
      ((j.p = i), (N.T = a));
    }
  }
  function Op(t, e, l, n) {
    var a = N.T;
    N.T = null;
    var i = j.p;
    try {
      ((j.p = 8), If(t, e, l, n));
    } finally {
      ((j.p = i), (N.T = a));
    }
  }
  function If(t, e, l, n) {
    if (di) {
      var a = tr(n);
      if (a === null) (jf(t, e, n, hi, l), xh(t, n));
      else if (zp(a, t, e, l, n)) n.stopPropagation();
      else if ((xh(t, n), e & 4 && -1 < _p.indexOf(t))) {
        for (; a !== null; ) {
          var i = rn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var o = jl(i.pendingLanes);
                  if (o !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; o; ) {
                      var g = 1 << (31 - pe(o));
                      ((h.entanglements[1] |= g), (o &= ~g));
                    }
                    (Ve(i), (pt & 6) === 0 && ((Fu = me() + 500), xa(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((h = Vl(i, 2)), h !== null && oe(h, i, 2), Wu(), Pf(i, 2));
            }
          if (((i = tr(n)), i === null && jf(t, e, n, hi, l), i === a)) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else jf(t, e, n, null, l);
    }
  }
  function tr(t) {
    return ((t = ec(t)), er(t));
  }
  var hi = null;
  function er(t) {
    if (((hi = null), (t = fn(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((hi = t), null);
  }
  function Nh(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (sy()) {
          case jr:
            return 2;
          case Yr:
            return 8;
          case lu:
          case dy:
            return 32;
          case Gr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lr = !1,
    xl = null,
    Bl = null,
    Hl = null,
    Ya = new Map(),
    Ga = new Map(),
    wl = [],
    _p =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function xh(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        xl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Bl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Hl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ya.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ga.delete(e.pointerId);
    }
  }
  function Xa(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = { blockedOn: e, domEventName: l, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }),
        e !== null && ((e = rn(e)), e !== null && Uh(e)),
        t)
      : ((t.eventSystemFlags |= n), (e = t.targetContainers), a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function zp(t, e, l, n, a) {
    switch (e) {
      case 'focusin':
        return ((xl = Xa(xl, t, e, l, n, a)), !0);
      case 'dragenter':
        return ((Bl = Xa(Bl, t, e, l, n, a)), !0);
      case 'mouseover':
        return ((Hl = Xa(Hl, t, e, l, n, a)), !0);
      case 'pointerover':
        var i = a.pointerId;
        return (Ya.set(i, Xa(Ya.get(i) || null, t, e, l, n, a)), !0);
      case 'gotpointercapture':
        return ((i = a.pointerId), Ga.set(i, Xa(Ga.get(i) || null, t, e, l, n, a)), !0);
    }
    return !1;
  }
  function Bh(t) {
    var e = fn(t.target);
    if (e !== null) {
      var l = d(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = m(l)), e !== null)) {
            ((t.blockedOn = e),
              Jr(t.priority, function () {
                Mh(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = p(l)), e !== null)) {
            ((t.blockedOn = e),
              Jr(t.priority, function () {
                Mh(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function mi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = tr(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(l.type, l);
        ((tc = n), l.target.dispatchEvent(n), (tc = null));
      } else return ((e = rn(l)), e !== null && Uh(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function Hh(t, e, l) {
    mi(t) && l.delete(e);
  }
  function Cp() {
    ((lr = !1),
      xl !== null && mi(xl) && (xl = null),
      Bl !== null && mi(Bl) && (Bl = null),
      Hl !== null && mi(Hl) && (Hl = null),
      Ya.forEach(Hh),
      Ga.forEach(Hh));
  }
  function yi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), lr || ((lr = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, Cp)));
  }
  var pi = null;
  function wh(t) {
    pi !== t &&
      ((pi = t),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        pi === t && (pi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            n = t[e + 1],
            a = t[e + 2];
          if (typeof n != 'function') {
            if (er(n || l) === null) continue;
            break;
          }
          var i = rn(l);
          i !== null && (t.splice(e, 3), (e -= 3), Ic(i, { pending: !0, data: a, method: l.method, action: n }, n, a));
        }
      }));
  }
  function Vn(t) {
    function e(g) {
      return yi(g, t);
    }
    (xl !== null && yi(xl, t), Bl !== null && yi(Bl, t), Hl !== null && yi(Hl, t), Ya.forEach(e), Ga.forEach(e));
    for (var l = 0; l < wl.length; l++) {
      var n = wl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < wl.length && ((l = wl[0]), l.blockedOn === null); ) (Bh(l), l.blockedOn === null && wl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var a = l[n],
          i = l[n + 1],
          o = a[ae] || null;
        if (typeof i == 'function') o || wh(l);
        else if (o) {
          var h = null;
          if (i && i.hasAttribute('formAction')) {
            if (((a = i), (o = i[ae] || null))) h = o.formAction;
            else if (er(a) !== null) continue;
          } else h = o.action;
          (typeof h == 'function' ? (l[n + 1] = h) : (l.splice(n, 3), (n -= 3)), wh(l));
        }
      }
  }
  function Lh() {
    function t(i) {
      i.canIntercept &&
        i.info === 'react-transition' &&
        i.intercept({
          handler: function () {
            return new Promise(function (o) {
              return (a = o);
            });
          },
          focusReset: 'manual',
          scroll: 'manual'
        });
    }
    function e() {
      (a !== null && (a(), (a = null)), n || setTimeout(l, 20));
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, { state: i.getState(), info: 'react-transition', history: 'replace' });
      }
    }
    if (typeof navigation == 'object') {
      var n = !1,
        a = null;
      return (
        navigation.addEventListener('navigate', t),
        navigation.addEventListener('navigatesuccess', e),
        navigation.addEventListener('navigateerror', e),
        setTimeout(l, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener('navigate', t),
            navigation.removeEventListener('navigatesuccess', e),
            navigation.removeEventListener('navigateerror', e),
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function nr(t) {
    this._internalRoot = t;
  }
  ((vi.prototype.render = nr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        n = Re();
      Ch(l, n, t, e, null, null);
    }),
    (vi.prototype.unmount = nr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Ch(t.current, 2, null, t, null, null), Wu(), (e[cn] = null));
        }
      }));
  function vi(t) {
    this._internalRoot = t;
  }
  vi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Kr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < wl.length && e !== 0 && e < wl[l].priority; l++);
      (wl.splice(l, 0, t), l === 0 && Bh(t));
    }
  };
  var qh = c.version;
  if (qh !== '19.2.4') throw Error(f(527, qh, '19.2.4'));
  j.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ? Error(f(188)) : ((t = Object.keys(t).join(',')), Error(f(268, t)));
    return ((t = y(e)), (t = t !== null ? S(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var Dp = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.2.4'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gi.isDisabled && gi.supportsFiber)
      try {
        ((Wn = gi.inject(Dp)), (ye = gi));
      } catch {}
  }
  return (
    (Va.createRoot = function (t, e) {
      if (!s(t)) throw Error(f(299));
      var l = !1,
        n = '',
        a = Zs,
        i = Ks,
        o = Js;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (o = e.onRecoverableError)),
        (e = _h(t, 1, !1, null, null, l, n, null, a, i, o, Lh)),
        (t[cn] = e.current),
        qf(t),
        new nr(e)
      );
    }),
    (Va.hydrateRoot = function (t, e, l) {
      if (!s(t)) throw Error(f(299));
      var n = !1,
        a = '',
        i = Zs,
        o = Ks,
        h = Js,
        g = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (o = l.onCaughtError),
          l.onRecoverableError !== void 0 && (h = l.onRecoverableError),
          l.formState !== void 0 && (g = l.formState)),
        (e = _h(t, 1, !0, e, l ?? null, n, a, g, i, o, h, Lh)),
        (e.context = zh(null)),
        (l = e.current),
        (n = Re()),
        (n = Ki(n)),
        (a = El(n)),
        (a.callback = null),
        Tl(l, a, n),
        (l = n),
        (e.current.lanes = l),
        In(e, l),
        Ve(e),
        (t[cn] = e.current),
        qf(t),
        new vi(e)
      );
    }),
    (Va.version = '19.2.4'),
    Va
  );
}
var kh;
function jp() {
  if (kh) return ur.exports;
  kh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return (u(), (ur.exports = qp()), ur.exports);
}
var Yp = jp(),
  M = Rr();
var Fh = 'popstate';
function $h(u) {
  return (
    typeof u == 'object' && u != null && 'pathname' in u && 'search' in u && 'hash' in u && 'state' in u && 'key' in u
  );
}
function Gp(u = {}) {
  function c(f, s) {
    let d = s.state?.masked,
      { pathname: m, search: p, hash: v } = d || f.location;
    return vr(
      '',
      { pathname: m, search: p, hash: v },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default',
      d ? { pathname: f.location.pathname, search: f.location.search, hash: f.location.hash } : void 0
    );
  }
  function r(f, s) {
    return typeof s == 'string' ? s : Ja(s);
  }
  return Qp(c, r, null, u);
}
function Dt(u, c) {
  if (u === !1 || u === null || typeof u > 'u') throw new Error(c);
}
function je(u, c) {
  if (!u) {
    typeof console < 'u' && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Xp() {
  return Math.random().toString(36).substring(2, 10);
}
function Wh(u, c) {
  return {
    usr: u.state,
    key: u.key,
    idx: c,
    masked: u.unstable_mask ? { pathname: u.pathname, search: u.search, hash: u.hash } : void 0
  };
}
function vr(u, c, r = null, f, s) {
  return {
    pathname: typeof u == 'string' ? u : u.pathname,
    search: '',
    hash: '',
    ...(typeof c == 'string' ? Kn(c) : c),
    state: r,
    key: (c && c.key) || f || Xp(),
    unstable_mask: s
  };
}
function Ja({ pathname: u = '/', search: c = '', hash: r = '' }) {
  return (
    c && c !== '?' && (u += c.charAt(0) === '?' ? c : '?' + c),
    r && r !== '#' && (u += r.charAt(0) === '#' ? r : '#' + r),
    u
  );
}
function Kn(u) {
  let c = {};
  if (u) {
    let r = u.indexOf('#');
    r >= 0 && ((c.hash = u.substring(r)), (u = u.substring(0, r)));
    let f = u.indexOf('?');
    (f >= 0 && ((c.search = u.substring(f)), (u = u.substring(0, f))), u && (c.pathname = u));
  }
  return c;
}
function Qp(u, c, r, f = {}) {
  let { window: s = document.defaultView, v5Compat: d = !1 } = f,
    m = s.history,
    p = 'POP',
    v = null,
    y = S();
  y == null && ((y = 0), m.replaceState({ ...m.state, idx: y }, ''));
  function S() {
    return (m.state || { idx: null }).idx;
  }
  function b() {
    p = 'POP';
    let C = S(),
      G = C == null ? null : C - y;
    ((y = C), v && v({ action: p, location: x.location, delta: G }));
  }
  function q(C, G) {
    p = 'PUSH';
    let $ = $h(C) ? C : vr(x.location, C, G);
    y = S() + 1;
    let Q = Wh($, y),
      et = x.createHref($.unstable_mask || $);
    try {
      m.pushState(Q, '', et);
    } catch (ut) {
      if (ut instanceof DOMException && ut.name === 'DataCloneError') throw ut;
      s.location.assign(et);
    }
    d && v && v({ action: p, location: x.location, delta: 1 });
  }
  function X(C, G) {
    p = 'REPLACE';
    let $ = $h(C) ? C : vr(x.location, C, G);
    y = S();
    let Q = Wh($, y),
      et = x.createHref($.unstable_mask || $);
    (m.replaceState(Q, '', et), d && v && v({ action: p, location: x.location, delta: 0 }));
  }
  function A(C) {
    return Vp(C);
  }
  let x = {
    get action() {
      return p;
    },
    get location() {
      return u(s, m);
    },
    listen(C) {
      if (v) throw new Error('A history only accepts one active listener');
      return (
        s.addEventListener(Fh, b),
        (v = C),
        () => {
          (s.removeEventListener(Fh, b), (v = null));
        }
      );
    },
    createHref(C) {
      return c(s, C);
    },
    createURL: A,
    encodeLocation(C) {
      let G = A(C);
      return { pathname: G.pathname, search: G.search, hash: G.hash };
    },
    push: q,
    replace: X,
    go(C) {
      return m.go(C);
    }
  };
  return x;
}
function Vp(u, c = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' && (r = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Dt(r, 'No window.location.(origin|href) available to create URL'));
  let f = typeof u == 'string' ? u : Ja(u);
  return ((f = f.replace(/ $/, '%20')), !c && f.startsWith('//') && (f = r + f), new URL(f, r));
}
function Sm(u, c, r = '/') {
  return Zp(u, c, r, !1);
}
function Zp(u, c, r, f) {
  let s = typeof c == 'string' ? Kn(c) : c,
    d = sl(s.pathname || '/', r);
  if (d == null) return null;
  let m = bm(u);
  Kp(m);
  let p = null;
  for (let v = 0; p == null && v < m.length; ++v) {
    let y = nv(d);
    p = ev(m[v], y, f);
  }
  return p;
}
function bm(u, c = [], r = [], f = '', s = !1) {
  let d = (m, p, v = s, y) => {
    let S = {
      relativePath: y === void 0 ? m.path || '' : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: p,
      route: m
    };
    if (S.relativePath.startsWith('/')) {
      if (!S.relativePath.startsWith(f) && v) return;
      (Dt(
        S.relativePath.startsWith(f),
        `Absolute route path "${S.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (S.relativePath = S.relativePath.slice(f.length)));
    }
    let b = Ze([f, S.relativePath]),
      q = r.concat(S);
    (m.children &&
      m.children.length > 0 &&
      (Dt(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      bm(m.children, c, q, b, v)),
      !(m.path == null && !m.index) && c.push({ path: b, score: Ip(b, m.index), routesMeta: q }));
  };
  return (
    u.forEach((m, p) => {
      if (m.path === '' || !m.path?.includes('?')) d(m, p);
      else for (let v of Em(m.path)) d(m, p, !0, v);
    }),
    c
  );
}
function Em(u) {
  let c = u.split('/');
  if (c.length === 0) return [];
  let [r, ...f] = c,
    s = r.endsWith('?'),
    d = r.replace(/\?$/, '');
  if (f.length === 0) return s ? [d, ''] : [d];
  let m = Em(f.join('/')),
    p = [];
  return (
    p.push(...m.map((v) => (v === '' ? d : [d, v].join('/')))),
    s && p.push(...m),
    p.map((v) => (u.startsWith('/') && v === '' ? '/' : v))
  );
}
function Kp(u) {
  u.sort((c, r) =>
    c.score !== r.score
      ? r.score - c.score
      : tv(
          c.routesMeta.map((f) => f.childrenIndex),
          r.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var Jp = /^:[\w-]+$/,
  kp = 3,
  Fp = 2,
  $p = 1,
  Wp = 10,
  Pp = -2,
  Ph = (u) => u === '*';
function Ip(u, c) {
  let r = u.split('/'),
    f = r.length;
  return (
    r.some(Ph) && (f += Pp),
    c && (f += Fp),
    r.filter((s) => !Ph(s)).reduce((s, d) => s + (Jp.test(d) ? kp : d === '' ? $p : Wp), f)
  );
}
function tv(u, c) {
  return u.length === c.length && u.slice(0, -1).every((f, s) => f === c[s]) ? u[u.length - 1] - c[c.length - 1] : 0;
}
function ev(u, c, r = !1) {
  let { routesMeta: f } = u,
    s = {},
    d = '/',
    m = [];
  for (let p = 0; p < f.length; ++p) {
    let v = f[p],
      y = p === f.length - 1,
      S = d === '/' ? c : c.slice(d.length) || '/',
      b = Ci({ path: v.relativePath, caseSensitive: v.caseSensitive, end: y }, S),
      q = v.route;
    if (
      (!b &&
        y &&
        r &&
        !f[f.length - 1].route.index &&
        (b = Ci({ path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 }, S)),
      !b)
    )
      return null;
    (Object.assign(s, b.params),
      m.push({ params: s, pathname: Ze([d, b.pathname]), pathnameBase: cv(Ze([d, b.pathnameBase])), route: q }),
      b.pathnameBase !== '/' && (d = Ze([d, b.pathnameBase])));
  }
  return m;
}
function Ci(u, c) {
  typeof u == 'string' && (u = { path: u, caseSensitive: !1, end: !0 });
  let [r, f] = lv(u.path, u.caseSensitive, u.end),
    s = c.match(r);
  if (!s) return null;
  let d = s[0],
    m = d.replace(/(.)\/+$/, '$1'),
    p = s.slice(1);
  return {
    params: f.reduce((y, { paramName: S, isOptional: b }, q) => {
      if (S === '*') {
        let A = p[q] || '';
        m = d.slice(0, d.length - A.length).replace(/(.)\/+$/, '$1');
      }
      const X = p[q];
      return (b && !X ? (y[S] = void 0) : (y[S] = (X || '').replace(/%2F/g, '/')), y);
    }, {}),
    pathname: d,
    pathnameBase: m,
    pattern: u
  };
}
function lv(u, c = !1, r = !0) {
  je(
    u === '*' || !u.endsWith('*') || u.endsWith('/*'),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, '/*')}".`
  );
  let f = [],
    s =
      '^' +
      u
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (m, p, v, y, S) => {
          if ((f.push({ paramName: p, isOptional: v != null }), v)) {
            let b = S.charAt(y + m.length);
            return b && b !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    u.endsWith('*')
      ? (f.push({ paramName: '*' }), (s += u === '*' || u === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (s += '\\/*$')
        : u !== '' && u !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, c ? void 0 : 'i'), f]
  );
}
function nv(u) {
  try {
    return u
      .split('/')
      .map((c) => decodeURIComponent(c).replace(/\//g, '%2F'))
      .join('/');
  } catch (c) {
    return (
      je(
        !1,
        `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
      ),
      u
    );
  }
}
function sl(u, c) {
  if (c === '/') return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase())) return null;
  let r = c.endsWith('/') ? c.length - 1 : c.length,
    f = u.charAt(r);
  return f && f !== '/' ? null : u.slice(r) || '/';
}
var av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function uv(u, c = '/') {
  let { pathname: r, search: f = '', hash: s = '' } = typeof u == 'string' ? Kn(u) : u,
    d;
  return (
    r ? ((r = r.replace(/\/\/+/g, '/')), r.startsWith('/') ? (d = Ih(r.substring(1), '/')) : (d = Ih(r, c))) : (d = c),
    { pathname: d, search: fv(f), hash: rv(s) }
  );
}
function Ih(u, c) {
  let r = c.replace(/\/+$/, '').split('/');
  return (
    u.split('/').forEach((s) => {
      s === '..' ? r.length > 1 && r.pop() : s !== '.' && r.push(s);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function or(u, c, r, f) {
  return `Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function iv(u) {
  return u.filter((c, r) => r === 0 || (c.route.path && c.route.path.length > 0));
}
function Ar(u) {
  let c = iv(u);
  return c.map((r, f) => (f === c.length - 1 ? r.pathname : r.pathnameBase));
}
function Ui(u, c, r, f = !1) {
  let s;
  typeof u == 'string'
    ? (s = Kn(u))
    : ((s = { ...u }),
      Dt(!s.pathname || !s.pathname.includes('?'), or('?', 'pathname', 'search', s)),
      Dt(!s.pathname || !s.pathname.includes('#'), or('#', 'pathname', 'hash', s)),
      Dt(!s.search || !s.search.includes('#'), or('#', 'search', 'hash', s)));
  let d = u === '' || s.pathname === '',
    m = d ? '/' : s.pathname,
    p;
  if (m == null) p = r;
  else {
    let b = c.length - 1;
    if (!f && m.startsWith('..')) {
      let q = m.split('/');
      for (; q[0] === '..'; ) (q.shift(), (b -= 1));
      s.pathname = q.join('/');
    }
    p = b >= 0 ? c[b] : '/';
  }
  let v = uv(s, p),
    y = m && m !== '/' && m.endsWith('/'),
    S = (d || m === '.') && r.endsWith('/');
  return (!v.pathname.endsWith('/') && (y || S) && (v.pathname += '/'), v);
}
var Ze = (u) => u.join('/').replace(/\/\/+/g, '/'),
  cv = (u) => u.replace(/\/+$/, '').replace(/^\/*/, '/'),
  fv = (u) => (!u || u === '?' ? '' : u.startsWith('?') ? u : '?' + u),
  rv = (u) => (!u || u === '#' ? '' : u.startsWith('#') ? u : '#' + u),
  ov = class {
    constructor(u, c, r, f = !1) {
      ((this.status = u),
        (this.statusText = c || ''),
        (this.internal = f),
        r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r));
    }
  };
function sv(u) {
  return (
    u != null &&
    typeof u.status == 'number' &&
    typeof u.statusText == 'string' &&
    typeof u.internal == 'boolean' &&
    'data' in u
  );
}
function dv(u) {
  return (
    u
      .map((c) => c.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Tm = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Rm(u, c) {
  let r = u;
  if (typeof r != 'string' || !av.test(r)) return { absoluteURL: void 0, isExternal: !1, to: r };
  let f = r,
    s = !1;
  if (Tm)
    try {
      let d = new URL(window.location.href),
        m = r.startsWith('//') ? new URL(d.protocol + r) : new URL(r),
        p = sl(m.pathname, c);
      m.origin === d.origin && p != null ? (r = p + m.search + m.hash) : (s = !0);
    } catch {
      je(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: f, isExternal: s, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Am = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Am);
var hv = ['GET', ...Am];
new Set(hv);
var Jn = M.createContext(null);
Jn.displayName = 'DataRouter';
var Mi = M.createContext(null);
Mi.displayName = 'DataRouterState';
var mv = M.createContext(!1),
  Om = M.createContext({ isTransitioning: !1 });
Om.displayName = 'ViewTransition';
var yv = M.createContext(new Map());
yv.displayName = 'Fetchers';
var pv = M.createContext(null);
pv.displayName = 'Await';
var Ae = M.createContext(null);
Ae.displayName = 'Navigation';
var ka = M.createContext(null);
ka.displayName = 'Location';
var Ke = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ke.displayName = 'Route';
var Or = M.createContext(null);
Or.displayName = 'RouteError';
var _m = 'REACT_ROUTER_ERROR',
  vv = 'REDIRECT',
  gv = 'ROUTE_ERROR_RESPONSE';
function Sv(u) {
  if (u.startsWith(`${_m}:${vv}:{`))
    try {
      let c = JSON.parse(u.slice(28));
      if (
        typeof c == 'object' &&
        c &&
        typeof c.status == 'number' &&
        typeof c.statusText == 'string' &&
        typeof c.location == 'string' &&
        typeof c.reloadDocument == 'boolean' &&
        typeof c.replace == 'boolean'
      )
        return c;
    } catch {}
}
function bv(u) {
  if (u.startsWith(`${_m}:${gv}:{`))
    try {
      let c = JSON.parse(u.slice(40));
      if (typeof c == 'object' && c && typeof c.status == 'number' && typeof c.statusText == 'string')
        return new ov(c.status, c.statusText, c.data);
    } catch {}
}
function Ev(u, { relative: c } = {}) {
  Dt(kn(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: f } = M.useContext(Ae),
    { hash: s, pathname: d, search: m } = Fa(u, { relative: c }),
    p = d;
  return (r !== '/' && (p = d === '/' ? r : Ze([r, d])), f.createHref({ pathname: p, search: m, hash: s }));
}
function kn() {
  return M.useContext(ka) != null;
}
function dl() {
  return (
    Dt(kn(), 'useLocation() may be used only in the context of a <Router> component.'),
    M.useContext(ka).location
  );
}
var zm = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Cm(u) {
  M.useContext(Ae).static || M.useLayoutEffect(u);
}
function Ni() {
  let { isDataRoute: u } = M.useContext(Ke);
  return u ? Bv() : Tv();
}
function Tv() {
  Dt(kn(), 'useNavigate() may be used only in the context of a <Router> component.');
  let u = M.useContext(Jn),
    { basename: c, navigator: r } = M.useContext(Ae),
    { matches: f } = M.useContext(Ke),
    { pathname: s } = dl(),
    d = JSON.stringify(Ar(f)),
    m = M.useRef(!1);
  return (
    Cm(() => {
      m.current = !0;
    }),
    M.useCallback(
      (v, y = {}) => {
        if ((je(m.current, zm), !m.current)) return;
        if (typeof v == 'number') {
          r.go(v);
          return;
        }
        let S = Ui(v, JSON.parse(d), s, y.relative === 'path');
        (u == null && c !== '/' && (S.pathname = S.pathname === '/' ? c : Ze([c, S.pathname])),
          (y.replace ? r.replace : r.push)(S, y.state, y));
      },
      [c, r, d, s, u]
    )
  );
}
M.createContext(null);
function Fa(u, { relative: c } = {}) {
  let { matches: r } = M.useContext(Ke),
    { pathname: f } = dl(),
    s = JSON.stringify(Ar(r));
  return M.useMemo(() => Ui(u, JSON.parse(s), f, c === 'path'), [u, s, f, c]);
}
function Rv(u, c) {
  return Dm(u, c);
}
function Dm(u, c, r) {
  Dt(kn(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: f } = M.useContext(Ae),
    { matches: s } = M.useContext(Ke),
    d = s[s.length - 1],
    m = d ? d.params : {},
    p = d ? d.pathname : '/',
    v = d ? d.pathnameBase : '/',
    y = d && d.route;
  {
    let C = (y && y.path) || '';
    Mm(
      p,
      !y || C.endsWith('*') || C.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === '/' ? '*' : `${C}/*`}">.`
    );
  }
  let S = dl(),
    b;
  if (c) {
    let C = typeof c == 'string' ? Kn(c) : c;
    (Dt(
      v === '/' || C.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${C.pathname}" was given in the \`location\` prop.`
    ),
      (b = C));
  } else b = S;
  let q = b.pathname || '/',
    X = q;
  if (v !== '/') {
    let C = v.replace(/^\//, '').split('/');
    X = '/' + q.replace(/^\//, '').split('/').slice(C.length).join('/');
  }
  let A = Sm(u, { pathname: X });
  (je(y || A != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `),
    je(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let x = Cv(
    A &&
      A.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, m, C.params),
          pathname: Ze([
            v,
            f.encodeLocation
              ? f.encodeLocation(C.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
              : C.pathname
          ]),
          pathnameBase:
            C.pathnameBase === '/'
              ? v
              : Ze([
                  v,
                  f.encodeLocation
                    ? f.encodeLocation(C.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
                    : C.pathnameBase
                ])
        })
      ),
    s,
    r
  );
  return c && x
    ? M.createElement(
        ka.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', unstable_mask: void 0, ...b },
            navigationType: 'POP'
          }
        },
        x
      )
    : x;
}
function Av() {
  let u = xv(),
    c = sv(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u),
    r = u instanceof Error ? u.stack : null,
    f = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: f },
    d = { padding: '2px 4px', backgroundColor: f },
    m = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', u),
    (m = M.createElement(
      M.Fragment,
      null,
      M.createElement('p', null, '💿 Hey developer 👋'),
      M.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        M.createElement('code', { style: d }, 'ErrorBoundary'),
        ' or',
        ' ',
        M.createElement('code', { style: d }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement('h2', null, 'Unexpected Application Error!'),
      M.createElement('h3', { style: { fontStyle: 'italic' } }, c),
      r ? M.createElement('pre', { style: s }, r) : null,
      m
    )
  );
}
var Ov = M.createElement(Av, null),
  Um = class extends M.Component {
    constructor(u) {
      (super(u), (this.state = { location: u.location, revalidation: u.revalidation, error: u.error }));
    }
    static getDerivedStateFromError(u) {
      return { error: u };
    }
    static getDerivedStateFromProps(u, c) {
      return c.location !== u.location || (c.revalidation !== 'idle' && u.revalidation === 'idle')
        ? { error: u.error, location: u.location, revalidation: u.revalidation }
        : {
            error: u.error !== void 0 ? u.error : c.error,
            location: c.location,
            revalidation: u.revalidation || c.revalidation
          };
    }
    componentDidCatch(u, c) {
      this.props.onError
        ? this.props.onError(u, c)
        : console.error('React Router caught the following error during render', u);
    }
    render() {
      let u = this.state.error;
      if (this.context && typeof u == 'object' && u && 'digest' in u && typeof u.digest == 'string') {
        const r = bv(u.digest);
        r && (u = r);
      }
      let c =
        u !== void 0
          ? M.createElement(
              Ke.Provider,
              { value: this.props.routeContext },
              M.createElement(Or.Provider, { value: u, children: this.props.component })
            )
          : this.props.children;
      return this.context ? M.createElement(_v, { error: u }, c) : c;
    }
  };
Um.contextType = mv;
var sr = new WeakMap();
function _v({ children: u, error: c }) {
  let { basename: r } = M.useContext(Ae);
  if (typeof c == 'object' && c && 'digest' in c && typeof c.digest == 'string') {
    let f = Sv(c.digest);
    if (f) {
      let s = sr.get(c);
      if (s) throw s;
      let d = Rm(f.location, r);
      if (Tm && !sr.get(c))
        if (d.isExternal || f.reloadDocument) window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(d.to, { replace: f.replace }));
          throw (sr.set(c, m), m);
        }
      return M.createElement('meta', { httpEquiv: 'refresh', content: `0;url=${d.absoluteURL || d.to}` });
    }
  }
  return u;
}
function zv({ routeContext: u, match: c, children: r }) {
  let f = M.useContext(Jn);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = c.route.id),
    M.createElement(Ke.Provider, { value: u }, r)
  );
}
function Cv(u, c = [], r) {
  let f = r?.state;
  if (u == null) {
    if (!f) return null;
    if (f.errors) u = f.matches;
    else if (c.length === 0 && !f.initialized && f.matches.length > 0) u = f.matches;
    else return null;
  }
  let s = u,
    d = f?.errors;
  if (d != null) {
    let S = s.findIndex((b) => b.route.id && d?.[b.route.id] !== void 0);
    (Dt(S >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(',')}`),
      (s = s.slice(0, Math.min(s.length, S + 1))));
  }
  let m = !1,
    p = -1;
  if (r && f) {
    m = f.renderFallback;
    for (let S = 0; S < s.length; S++) {
      let b = s[S];
      if (((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (p = S), b.route.id)) {
        let { loaderData: q, errors: X } = f,
          A = b.route.loader && !q.hasOwnProperty(b.route.id) && (!X || X[b.route.id] === void 0);
        if (b.route.lazy || A) {
          (r.isStatic && (m = !0), p >= 0 ? (s = s.slice(0, p + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  }
  let v = r?.onError,
    y =
      f && v
        ? (S, b) => {
            v(S, {
              location: f.location,
              params: f.matches?.[0]?.params ?? {},
              unstable_pattern: dv(f.matches),
              errorInfo: b
            });
          }
        : void 0;
  return s.reduceRight((S, b, q) => {
    let X,
      A = !1,
      x = null,
      C = null;
    f &&
      ((X = d && b.route.id ? d[b.route.id] : void 0),
      (x = b.route.errorElement || Ov),
      m &&
        (p < 0 && q === 0
          ? (Mm('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (A = !0),
            (C = null))
          : p === q && ((A = !0), (C = b.route.hydrateFallbackElement || null))));
    let G = c.concat(s.slice(0, q + 1)),
      $ = () => {
        let Q;
        return (
          X
            ? (Q = x)
            : A
              ? (Q = C)
              : b.route.Component
                ? (Q = M.createElement(b.route.Component, null))
                : b.route.element
                  ? (Q = b.route.element)
                  : (Q = S),
          M.createElement(zv, {
            match: b,
            routeContext: { outlet: S, matches: G, isDataRoute: f != null },
            children: Q
          })
        );
      };
    return f && (b.route.ErrorBoundary || b.route.errorElement || q === 0)
      ? M.createElement(Um, {
          location: f.location,
          revalidation: f.revalidation,
          component: x,
          error: X,
          children: $(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
          onError: y
        })
      : $();
  }, null);
}
function _r(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dv(u) {
  let c = M.useContext(Jn);
  return (Dt(c, _r(u)), c);
}
function Uv(u) {
  let c = M.useContext(Mi);
  return (Dt(c, _r(u)), c);
}
function Mv(u) {
  let c = M.useContext(Ke);
  return (Dt(c, _r(u)), c);
}
function zr(u) {
  let c = Mv(u),
    r = c.matches[c.matches.length - 1];
  return (Dt(r.route.id, `${u} can only be used on routes that contain a unique "id"`), r.route.id);
}
function Nv() {
  return zr('useRouteId');
}
function xv() {
  let u = M.useContext(Or),
    c = Uv('useRouteError'),
    r = zr('useRouteError');
  return u !== void 0 ? u : c.errors?.[r];
}
function Bv() {
  let { router: u } = Dv('useNavigate'),
    c = zr('useNavigate'),
    r = M.useRef(!1);
  return (
    Cm(() => {
      r.current = !0;
    }),
    M.useCallback(
      async (s, d = {}) => {
        (je(r.current, zm),
          r.current && (typeof s == 'number' ? await u.navigate(s) : await u.navigate(s, { fromRouteId: c, ...d })));
      },
      [u, c]
    )
  );
}
var tm = {};
function Mm(u, c, r) {
  !c && !tm[u] && ((tm[u] = !0), je(!1, r));
}
M.memo(Hv);
function Hv({ routes: u, future: c, state: r, isStatic: f, onError: s }) {
  return Dm(u, void 0, { state: r, isStatic: f, onError: s });
}
function Nm({ to: u, replace: c, state: r, relative: f }) {
  Dt(kn(), '<Navigate> may be used only in the context of a <Router> component.');
  let { static: s } = M.useContext(Ae);
  je(
    !s,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: d } = M.useContext(Ke),
    { pathname: m } = dl(),
    p = Ni(),
    v = Ui(u, Ar(d), m, f === 'path'),
    y = JSON.stringify(v);
  return (
    M.useEffect(() => {
      p(JSON.parse(y), { replace: c, state: r, relative: f });
    }, [p, y, f, c, r]),
    null
  );
}
function Ei(u) {
  Dt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function wv({
  basename: u = '/',
  children: c = null,
  location: r,
  navigationType: f = 'POP',
  navigator: s,
  static: d = !1,
  unstable_useTransitions: m
}) {
  Dt(!kn(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
  let p = u.replace(/^\/*/, '/'),
    v = M.useMemo(
      () => ({ basename: p, navigator: s, static: d, unstable_useTransitions: m, future: {} }),
      [p, s, d, m]
    );
  typeof r == 'string' && (r = Kn(r));
  let { pathname: y = '/', search: S = '', hash: b = '', state: q = null, key: X = 'default', unstable_mask: A } = r,
    x = M.useMemo(() => {
      let C = sl(y, p);
      return C == null
        ? null
        : { location: { pathname: C, search: S, hash: b, state: q, key: X, unstable_mask: A }, navigationType: f };
    }, [p, y, S, b, q, X, f, A]);
  return (
    je(
      x != null,
      `<Router basename="${p}"> is not able to match the URL "${y}${S}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    x == null
      ? null
      : M.createElement(Ae.Provider, { value: v }, M.createElement(ka.Provider, { children: c, value: x }))
  );
}
function Lv({ children: u, location: c }) {
  return Rv(gr(u), c);
}
function gr(u, c = []) {
  let r = [];
  return (
    M.Children.forEach(u, (f, s) => {
      if (!M.isValidElement(f)) return;
      let d = [...c, s];
      if (f.type === M.Fragment) {
        r.push.apply(r, gr(f.props.children, d));
        return;
      }
      (Dt(
        f.type === Ei,
        `[${typeof f.type == 'string' ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Dt(!f.props.index || !f.props.children, 'An index route cannot have child routes.'));
      let m = {
        id: f.props.id || d.join('-'),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 || f.props.ErrorBoundary != null || f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy
      };
      (f.props.children && (m.children = gr(f.props.children, d)), r.push(m));
    }),
    r
  );
}
var Ti = 'get',
  Ri = 'application/x-www-form-urlencoded';
function xi(u) {
  return typeof HTMLElement < 'u' && u instanceof HTMLElement;
}
function qv(u) {
  return xi(u) && u.tagName.toLowerCase() === 'button';
}
function jv(u) {
  return xi(u) && u.tagName.toLowerCase() === 'form';
}
function Yv(u) {
  return xi(u) && u.tagName.toLowerCase() === 'input';
}
function Gv(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Xv(u, c) {
  return u.button === 0 && (!c || c === '_self') && !Gv(u);
}
var Si = null;
function Qv() {
  if (Si === null)
    try {
      (new FormData(document.createElement('form'), 0), (Si = !1));
    } catch {
      Si = !0;
    }
  return Si;
}
var Vv = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function dr(u) {
  return u != null && !Vv.has(u)
    ? (je(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ri}"`), null)
    : u;
}
function Zv(u, c) {
  let r, f, s, d, m;
  if (jv(u)) {
    let p = u.getAttribute('action');
    ((f = p ? sl(p, c) : null),
      (r = u.getAttribute('method') || Ti),
      (s = dr(u.getAttribute('enctype')) || Ri),
      (d = new FormData(u)));
  } else if (qv(u) || (Yv(u) && (u.type === 'submit' || u.type === 'image'))) {
    let p = u.form;
    if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let v = u.getAttribute('formaction') || p.getAttribute('action');
    if (
      ((f = v ? sl(v, c) : null),
      (r = u.getAttribute('formmethod') || p.getAttribute('method') || Ti),
      (s = dr(u.getAttribute('formenctype')) || dr(p.getAttribute('enctype')) || Ri),
      (d = new FormData(p, u)),
      !Qv())
    ) {
      let { name: y, type: S, value: b } = u;
      if (S === 'image') {
        let q = y ? `${y}.` : '';
        (d.append(`${q}x`, '0'), d.append(`${q}y`, '0'));
      } else y && d.append(y, b);
    }
  } else {
    if (xi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    ((r = Ti), (f = null), (s = Ri), (m = u));
  }
  return (
    d && s === 'text/plain' && ((m = d), (d = void 0)),
    { action: f, method: r.toLowerCase(), encType: s, formData: d, body: m }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Cr(u, c) {
  if (u === !1 || u === null || typeof u > 'u') throw new Error(c);
}
function Kv(u, c, r, f) {
  let s = typeof u == 'string' ? new URL(u, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : u;
  return (
    r
      ? s.pathname.endsWith('/')
        ? (s.pathname = `${s.pathname}_.${f}`)
        : (s.pathname = `${s.pathname}.${f}`)
      : s.pathname === '/'
        ? (s.pathname = `_root.${f}`)
        : c && sl(s.pathname, c) === '/'
          ? (s.pathname = `${c.replace(/\/$/, '')}/_root.${f}`)
          : (s.pathname = `${s.pathname.replace(/\/$/, '')}.${f}`),
    s
  );
}
async function Jv(u, c) {
  if (u.id in c) return c[u.id];
  try {
    let r = await import(u.module);
    return ((c[u.id] = r), r);
  } catch (r) {
    return (
      console.error(`Error loading route module \`${u.module}\`, reloading page...`),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function kv(u) {
  return u == null
    ? !1
    : u.href == null
      ? u.rel === 'preload' && typeof u.imageSrcSet == 'string' && typeof u.imageSizes == 'string'
      : typeof u.rel == 'string' && typeof u.href == 'string';
}
async function Fv(u, c, r) {
  let f = await Promise.all(
    u.map(async (s) => {
      let d = c.routes[s.route.id];
      if (d) {
        let m = await Jv(d, r);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return Iv(
    f
      .flat(1)
      .filter(kv)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) => (s.rel === 'stylesheet' ? { ...s, rel: 'prefetch', as: 'style' } : { ...s, rel: 'prefetch' }))
  );
}
function em(u, c, r, f, s, d) {
  let m = (v, y) => (r[y] ? v.route.id !== r[y].route.id : !0),
    p = (v, y) =>
      r[y].pathname !== v.pathname || (r[y].route.path?.endsWith('*') && r[y].params['*'] !== v.params['*']);
  return d === 'assets'
    ? c.filter((v, y) => m(v, y) || p(v, y))
    : d === 'data'
      ? c.filter((v, y) => {
          let S = f.routes[v.route.id];
          if (!S || !S.hasLoader) return !1;
          if (m(v, y) || p(v, y)) return !0;
          if (v.route.shouldRevalidate) {
            let b = v.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(u, window.origin),
              nextParams: v.params,
              defaultShouldRevalidate: !0
            });
            if (typeof b == 'boolean') return b;
          }
          return !0;
        })
      : [];
}
function $v(u, c, { includeHydrateFallback: r } = {}) {
  return Wv(
    u
      .map((f) => {
        let s = c.routes[f.route.id];
        if (!s) return [];
        let d = [s.module];
        return (
          s.clientActionModule && (d = d.concat(s.clientActionModule)),
          s.clientLoaderModule && (d = d.concat(s.clientLoaderModule)),
          r && s.hydrateFallbackModule && (d = d.concat(s.hydrateFallbackModule)),
          s.imports && (d = d.concat(s.imports)),
          d
        );
      })
      .flat(1)
  );
}
function Wv(u) {
  return [...new Set(u)];
}
function Pv(u) {
  let c = {},
    r = Object.keys(u).sort();
  for (let f of r) c[f] = u[f];
  return c;
}
function Iv(u, c) {
  let r = new Set();
  return (
    new Set(c),
    u.reduce((f, s) => {
      let d = JSON.stringify(Pv(s));
      return (r.has(d) || (r.add(d), f.push({ key: d, link: s })), f);
    }, [])
  );
}
function xm() {
  let u = M.useContext(Jn);
  return (Cr(u, 'You must render this element inside a <DataRouterContext.Provider> element'), u);
}
function tg() {
  let u = M.useContext(Mi);
  return (Cr(u, 'You must render this element inside a <DataRouterStateContext.Provider> element'), u);
}
var Dr = M.createContext(void 0);
Dr.displayName = 'FrameworkContext';
function Bm() {
  let u = M.useContext(Dr);
  return (Cr(u, 'You must render this element inside a <HydratedRouter> element'), u);
}
function eg(u, c) {
  let r = M.useContext(Dr),
    [f, s] = M.useState(!1),
    [d, m] = M.useState(!1),
    { onFocus: p, onBlur: v, onMouseEnter: y, onMouseLeave: S, onTouchStart: b } = c,
    q = M.useRef(null);
  (M.useEffect(() => {
    if ((u === 'render' && m(!0), u === 'viewport')) {
      let x = (G) => {
          G.forEach(($) => {
            m($.isIntersecting);
          });
        },
        C = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        q.current && C.observe(q.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [u]),
    M.useEffect(() => {
      if (f) {
        let x = setTimeout(() => {
          m(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [f]));
  let X = () => {
      s(!0);
    },
    A = () => {
      (s(!1), m(!1));
    };
  return r
    ? u !== 'intent'
      ? [d, q, {}]
      : [
          d,
          q,
          {
            onFocus: Za(p, X),
            onBlur: Za(v, A),
            onMouseEnter: Za(y, X),
            onMouseLeave: Za(S, A),
            onTouchStart: Za(b, X)
          }
        ]
    : [!1, q, {}];
}
function Za(u, c) {
  return (r) => {
    (u && u(r), r.defaultPrevented || c(r));
  };
}
function lg({ page: u, ...c }) {
  let { router: r } = xm(),
    f = M.useMemo(() => Sm(r.routes, u, r.basename), [r.routes, u, r.basename]);
  return f ? M.createElement(ag, { page: u, matches: f, ...c }) : null;
}
function ng(u) {
  let { manifest: c, routeModules: r } = Bm(),
    [f, s] = M.useState([]);
  return (
    M.useEffect(() => {
      let d = !1;
      return (
        Fv(u, c, r).then((m) => {
          d || s(m);
        }),
        () => {
          d = !0;
        }
      );
    }, [u, c, r]),
    f
  );
}
function ag({ page: u, matches: c, ...r }) {
  let f = dl(),
    { future: s, manifest: d, routeModules: m } = Bm(),
    { basename: p } = xm(),
    { loaderData: v, matches: y } = tg(),
    S = M.useMemo(() => em(u, c, y, d, f, 'data'), [u, c, y, d, f]),
    b = M.useMemo(() => em(u, c, y, d, f, 'assets'), [u, c, y, d, f]),
    q = M.useMemo(() => {
      if (u === f.pathname + f.search + f.hash) return [];
      let x = new Set(),
        C = !1;
      if (
        (c.forEach(($) => {
          let Q = d.routes[$.route.id];
          !Q ||
            !Q.hasLoader ||
            ((!S.some((et) => et.route.id === $.route.id) && $.route.id in v && m[$.route.id]?.shouldRevalidate) ||
            Q.hasClientLoader
              ? (C = !0)
              : x.add($.route.id));
        }),
        x.size === 0)
      )
        return [];
      let G = Kv(u, p, s.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        C &&
          x.size > 0 &&
          G.searchParams.set(
            '_routes',
            c
              .filter(($) => x.has($.route.id))
              .map(($) => $.route.id)
              .join(',')
          ),
        [G.pathname + G.search]
      );
    }, [p, s.unstable_trailingSlashAwareDataRequests, v, f, d, S, c, u, m]),
    X = M.useMemo(() => $v(b, d), [b, d]),
    A = ng(b);
  return M.createElement(
    M.Fragment,
    null,
    q.map((x) => M.createElement('link', { key: x, rel: 'prefetch', as: 'fetch', href: x, ...r })),
    X.map((x) => M.createElement('link', { key: x, rel: 'modulepreload', href: x, ...r })),
    A.map(({ key: x, link: C }) =>
      M.createElement('link', { key: x, nonce: r.nonce, ...C, crossOrigin: C.crossOrigin ?? r.crossOrigin })
    )
  );
}
function ug(...u) {
  return (c) => {
    u.forEach((r) => {
      typeof r == 'function' ? r(c) : r != null && (r.current = c);
    });
  };
}
var ig = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  ig && (window.__reactRouterVersion = '7.13.1');
} catch {}
function cg({ basename: u, children: c, unstable_useTransitions: r, window: f }) {
  let s = M.useRef();
  s.current == null && (s.current = Gp({ window: f, v5Compat: !0 }));
  let d = s.current,
    [m, p] = M.useState({ action: d.action, location: d.location }),
    v = M.useCallback(
      (y) => {
        r === !1 ? p(y) : M.startTransition(() => p(y));
      },
      [r]
    );
  return (
    M.useLayoutEffect(() => d.listen(v), [d, v]),
    M.createElement(wv, {
      basename: u,
      children: c,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: r
    })
  );
}
var Hm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wm = M.forwardRef(function (
    {
      onClick: c,
      discover: r = 'render',
      prefetch: f = 'none',
      relative: s,
      reloadDocument: d,
      replace: m,
      unstable_mask: p,
      state: v,
      target: y,
      to: S,
      preventScrollReset: b,
      viewTransition: q,
      unstable_defaultShouldRevalidate: X,
      ...A
    },
    x
  ) {
    let { basename: C, navigator: G, unstable_useTransitions: $ } = M.useContext(Ae),
      Q = typeof S == 'string' && Hm.test(S),
      et = Rm(S, C);
    S = et.to;
    let ut = Ev(S, { relative: s }),
      mt = dl(),
      J = null;
    if (p) {
      let Ut = Ui(p, [], mt.unstable_mask ? mt.unstable_mask.pathname : '/', !0);
      (C !== '/' && (Ut.pathname = Ut.pathname === '/' ? C : Ze([C, Ut.pathname])), (J = G.createHref(Ut)));
    }
    let [Ot, xt, he] = eg(f, A),
      ee = sg(S, {
        replace: m,
        unstable_mask: p,
        state: v,
        target: y,
        preventScrollReset: b,
        relative: s,
        viewTransition: q,
        unstable_defaultShouldRevalidate: X,
        unstable_useTransitions: $
      });
    function Bt(Ut) {
      (c && c(Ut), Ut.defaultPrevented || ee(Ut));
    }
    let Pt = !(et.isExternal || d),
      jt = M.createElement('a', {
        ...A,
        ...he,
        href: (Pt ? J : void 0) || et.absoluteURL || ut,
        onClick: Pt ? Bt : c,
        ref: ug(x, xt),
        target: y,
        'data-discover': !Q && r === 'render' ? 'true' : void 0
      });
    return Ot && !Q ? M.createElement(M.Fragment, null, jt, M.createElement(lg, { page: ut })) : jt;
  });
wm.displayName = 'Link';
var fg = M.forwardRef(function (
  {
    'aria-current': c = 'page',
    caseSensitive: r = !1,
    className: f = '',
    end: s = !1,
    style: d,
    to: m,
    viewTransition: p,
    children: v,
    ...y
  },
  S
) {
  let b = Fa(m, { relative: y.relative }),
    q = dl(),
    X = M.useContext(Mi),
    { navigator: A, basename: x } = M.useContext(Ae),
    C = X != null && pg(b) && p === !0,
    G = A.encodeLocation ? A.encodeLocation(b).pathname : b.pathname,
    $ = q.pathname,
    Q = X && X.navigation && X.navigation.location ? X.navigation.location.pathname : null;
  (r || (($ = $.toLowerCase()), (Q = Q ? Q.toLowerCase() : null), (G = G.toLowerCase())),
    Q && x && (Q = sl(Q, x) || Q));
  const et = G !== '/' && G.endsWith('/') ? G.length - 1 : G.length;
  let ut = $ === G || (!s && $.startsWith(G) && $.charAt(et) === '/'),
    mt = Q != null && (Q === G || (!s && Q.startsWith(G) && Q.charAt(G.length) === '/')),
    J = { isActive: ut, isPending: mt, isTransitioning: C },
    Ot = ut ? c : void 0,
    xt;
  typeof f == 'function'
    ? (xt = f(J))
    : (xt = [f, ut ? 'active' : null, mt ? 'pending' : null, C ? 'transitioning' : null].filter(Boolean).join(' '));
  let he = typeof d == 'function' ? d(J) : d;
  return M.createElement(
    wm,
    { ...y, 'aria-current': Ot, className: xt, ref: S, style: he, to: m, viewTransition: p },
    typeof v == 'function' ? v(J) : v
  );
});
fg.displayName = 'NavLink';
var rg = M.forwardRef(
  (
    {
      discover: u = 'render',
      fetcherKey: c,
      navigate: r,
      reloadDocument: f,
      replace: s,
      state: d,
      method: m = Ti,
      action: p,
      onSubmit: v,
      relative: y,
      preventScrollReset: S,
      viewTransition: b,
      unstable_defaultShouldRevalidate: q,
      ...X
    },
    A
  ) => {
    let { unstable_useTransitions: x } = M.useContext(Ae),
      C = mg(),
      G = yg(p, { relative: y }),
      $ = m.toLowerCase() === 'get' ? 'get' : 'post',
      Q = typeof p == 'string' && Hm.test(p),
      et = (ut) => {
        if ((v && v(ut), ut.defaultPrevented)) return;
        ut.preventDefault();
        let mt = ut.nativeEvent.submitter,
          J = mt?.getAttribute('formmethod') || m,
          Ot = () =>
            C(mt || ut.currentTarget, {
              fetcherKey: c,
              method: J,
              navigate: r,
              replace: s,
              state: d,
              relative: y,
              preventScrollReset: S,
              viewTransition: b,
              unstable_defaultShouldRevalidate: q
            });
        x && r !== !1 ? M.startTransition(() => Ot()) : Ot();
      };
    return M.createElement('form', {
      ref: A,
      method: $,
      action: G,
      onSubmit: f ? v : et,
      ...X,
      'data-discover': !Q && u === 'render' ? 'true' : void 0
    });
  }
);
rg.displayName = 'Form';
function og(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lm(u) {
  let c = M.useContext(Jn);
  return (Dt(c, og(u)), c);
}
function sg(
  u,
  {
    target: c,
    replace: r,
    unstable_mask: f,
    state: s,
    preventScrollReset: d,
    relative: m,
    viewTransition: p,
    unstable_defaultShouldRevalidate: v,
    unstable_useTransitions: y
  } = {}
) {
  let S = Ni(),
    b = dl(),
    q = Fa(u, { relative: m });
  return M.useCallback(
    (X) => {
      if (Xv(X, c)) {
        X.preventDefault();
        let A = r !== void 0 ? r : Ja(b) === Ja(q),
          x = () =>
            S(u, {
              replace: A,
              unstable_mask: f,
              state: s,
              preventScrollReset: d,
              relative: m,
              viewTransition: p,
              unstable_defaultShouldRevalidate: v
            });
        y ? M.startTransition(() => x()) : x();
      }
    },
    [b, S, q, r, f, s, c, u, d, m, p, v, y]
  );
}
var dg = 0,
  hg = () => `__${String(++dg)}__`;
function mg() {
  let { router: u } = Lm('useSubmit'),
    { basename: c } = M.useContext(Ae),
    r = Nv(),
    f = u.fetch,
    s = u.navigate;
  return M.useCallback(
    async (d, m = {}) => {
      let { action: p, method: v, encType: y, formData: S, body: b } = Zv(d, c);
      if (m.navigate === !1) {
        let q = m.fetcherKey || hg();
        await f(q, r, m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: S,
          body: b,
          formMethod: m.method || v,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await s(m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: S,
          body: b,
          formMethod: m.method || v,
          formEncType: m.encType || y,
          replace: m.replace,
          state: m.state,
          fromRouteId: r,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [f, s, c, r]
  );
}
function yg(u, { relative: c } = {}) {
  let { basename: r } = M.useContext(Ae),
    f = M.useContext(Ke);
  Dt(f, 'useFormAction must be used inside a RouteContext');
  let [s] = f.matches.slice(-1),
    d = { ...Fa(u || '.', { relative: c }) },
    m = dl();
  if (u == null) {
    d.search = m.search;
    let p = new URLSearchParams(d.search),
      v = p.getAll('index');
    if (v.some((S) => S === '')) {
      (p.delete('index'), v.filter((b) => b).forEach((b) => p.append('index', b)));
      let S = p.toString();
      d.search = S ? `?${S}` : '';
    }
  }
  return (
    (!u || u === '.') && s.route.index && (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (d.pathname = d.pathname === '/' ? r : Ze([r, d.pathname])),
    Ja(d)
  );
}
function pg(u, { relative: c } = {}) {
  let r = M.useContext(Om);
  Dt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Lm('useViewTransitionState'),
    s = Fa(u, { relative: c });
  if (!r.isTransitioning) return !1;
  let d = sl(r.currentLocation.pathname, f) || r.currentLocation.pathname,
    m = sl(r.nextLocation.pathname, f) || r.nextLocation.pathname;
  return Ci(s.pathname, m) != null || Ci(s.pathname, d) != null;
}
function qm(u, c) {
  return function () {
    return u.apply(c, arguments);
  };
}
const { toString: vg } = Object.prototype,
  { getPrototypeOf: Ur } = Object,
  { iterator: Bi, toStringTag: jm } = Symbol,
  Hi = ((u) => (c) => {
    const r = vg.call(c);
    return u[r] || (u[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ye = (u) => ((u = u.toLowerCase()), (c) => Hi(c) === u),
  wi = (u) => (c) => typeof c === u,
  { isArray: Fn } = Array,
  Zn = wi('undefined');
function $a(u) {
  return (
    u !== null &&
    !Zn(u) &&
    u.constructor !== null &&
    !Zn(u.constructor) &&
    se(u.constructor.isBuffer) &&
    u.constructor.isBuffer(u)
  );
}
const Ym = Ye('ArrayBuffer');
function gg(u) {
  let c;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (c = ArrayBuffer.isView(u)) : (c = u && u.buffer && Ym(u.buffer)),
    c
  );
}
const Sg = wi('string'),
  se = wi('function'),
  Gm = wi('number'),
  Wa = (u) => u !== null && typeof u == 'object',
  bg = (u) => u === !0 || u === !1,
  Ai = (u) => {
    if (Hi(u) !== 'object') return !1;
    const c = Ur(u);
    return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(jm in u) && !(Bi in u);
  },
  Eg = (u) => {
    if (!Wa(u) || $a(u)) return !1;
    try {
      return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
    } catch {
      return !1;
    }
  },
  Tg = Ye('Date'),
  Rg = Ye('File'),
  Ag = (u) => !!(u && typeof u.uri < 'u'),
  Og = (u) => u && typeof u.getParts < 'u',
  _g = Ye('Blob'),
  zg = Ye('FileList'),
  Cg = (u) => Wa(u) && se(u.pipe);
function Dg() {
  return typeof globalThis < 'u'
    ? globalThis
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : {};
}
const lm = Dg(),
  nm = typeof lm.FormData < 'u' ? lm.FormData : void 0,
  Ug = (u) => {
    let c;
    return (
      u &&
      ((nm && u instanceof nm) ||
        (se(u.append) &&
          ((c = Hi(u)) === 'formdata' || (c === 'object' && se(u.toString) && u.toString() === '[object FormData]'))))
    );
  },
  Mg = Ye('URLSearchParams'),
  [Ng, xg, Bg, Hg] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(Ye),
  wg = (u) => (u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Pa(u, c, { allOwnKeys: r = !1 } = {}) {
  if (u === null || typeof u > 'u') return;
  let f, s;
  if ((typeof u != 'object' && (u = [u]), Fn(u))) for (f = 0, s = u.length; f < s; f++) c.call(null, u[f], f, u);
  else {
    if ($a(u)) return;
    const d = r ? Object.getOwnPropertyNames(u) : Object.keys(u),
      m = d.length;
    let p;
    for (f = 0; f < m; f++) ((p = d[f]), c.call(null, u[p], p, u));
  }
}
function Xm(u, c) {
  if ($a(u)) return null;
  c = c.toLowerCase();
  const r = Object.keys(u);
  let f = r.length,
    s;
  for (; f-- > 0; ) if (((s = r[f]), c === s.toLowerCase())) return s;
  return null;
}
const nn = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  Qm = (u) => !Zn(u) && u !== nn;
function Sr() {
  const { caseless: u, skipUndefined: c } = (Qm(this) && this) || {},
    r = {},
    f = (s, d) => {
      if (d === '__proto__' || d === 'constructor' || d === 'prototype') return;
      const m = (u && Xm(r, d)) || d;
      Ai(r[m]) && Ai(s)
        ? (r[m] = Sr(r[m], s))
        : Ai(s)
          ? (r[m] = Sr({}, s))
          : Fn(s)
            ? (r[m] = s.slice())
            : (!c || !Zn(s)) && (r[m] = s);
    };
  for (let s = 0, d = arguments.length; s < d; s++) arguments[s] && Pa(arguments[s], f);
  return r;
}
const Lg = (u, c, r, { allOwnKeys: f } = {}) => (
    Pa(
      c,
      (s, d) => {
        r && se(s)
          ? Object.defineProperty(u, d, { value: qm(s, r), writable: !0, enumerable: !0, configurable: !0 })
          : Object.defineProperty(u, d, { value: s, writable: !0, enumerable: !0, configurable: !0 });
      },
      { allOwnKeys: f }
    ),
    u
  ),
  qg = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u),
  jg = (u, c, r, f) => {
    ((u.prototype = Object.create(c.prototype, f)),
      Object.defineProperty(u.prototype, 'constructor', { value: u, writable: !0, enumerable: !1, configurable: !0 }),
      Object.defineProperty(u, 'super', { value: c.prototype }),
      r && Object.assign(u.prototype, r));
  },
  Yg = (u, c, r, f) => {
    let s, d, m;
    const p = {};
    if (((c = c || {}), u == null)) return c;
    do {
      for (s = Object.getOwnPropertyNames(u), d = s.length; d-- > 0; )
        ((m = s[d]), (!f || f(m, u, c)) && !p[m] && ((c[m] = u[m]), (p[m] = !0)));
      u = r !== !1 && Ur(u);
    } while (u && (!r || r(u, c)) && u !== Object.prototype);
    return c;
  },
  Gg = (u, c, r) => {
    ((u = String(u)), (r === void 0 || r > u.length) && (r = u.length), (r -= c.length));
    const f = u.indexOf(c, r);
    return f !== -1 && f === r;
  },
  Xg = (u) => {
    if (!u) return null;
    if (Fn(u)) return u;
    let c = u.length;
    if (!Gm(c)) return null;
    const r = new Array(c);
    for (; c-- > 0; ) r[c] = u[c];
    return r;
  },
  Qg = (
    (u) => (c) =>
      u && c instanceof u
  )(typeof Uint8Array < 'u' && Ur(Uint8Array)),
  Vg = (u, c) => {
    const f = (u && u[Bi]).call(u);
    let s;
    for (; (s = f.next()) && !s.done; ) {
      const d = s.value;
      c.call(u, d[0], d[1]);
    }
  },
  Zg = (u, c) => {
    let r;
    const f = [];
    for (; (r = u.exec(c)) !== null; ) f.push(r);
    return f;
  },
  Kg = Ye('HTMLFormElement'),
  Jg = (u) =>
    u.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, f, s) {
      return f.toUpperCase() + s;
    }),
  am = (
    ({ hasOwnProperty: u }) =>
    (c, r) =>
      u.call(c, r)
  )(Object.prototype),
  kg = Ye('RegExp'),
  Vm = (u, c) => {
    const r = Object.getOwnPropertyDescriptors(u),
      f = {};
    (Pa(r, (s, d) => {
      let m;
      (m = c(s, d, u)) !== !1 && (f[d] = m || s);
    }),
      Object.defineProperties(u, f));
  },
  Fg = (u) => {
    Vm(u, (c, r) => {
      if (se(u) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1) return !1;
      const f = u[r];
      if (se(f)) {
        if (((c.enumerable = !1), 'writable' in c)) {
          c.writable = !1;
          return;
        }
        c.set ||
          (c.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  $g = (u, c) => {
    const r = {},
      f = (s) => {
        s.forEach((d) => {
          r[d] = !0;
        });
      };
    return (Fn(u) ? f(u) : f(String(u).split(c)), r);
  },
  Wg = () => {},
  Pg = (u, c) => (u != null && Number.isFinite((u = +u)) ? u : c);
function Ig(u) {
  return !!(u && se(u.append) && u[jm] === 'FormData' && u[Bi]);
}
const tS = (u) => {
    const c = new Array(10),
      r = (f, s) => {
        if (Wa(f)) {
          if (c.indexOf(f) >= 0) return;
          if ($a(f)) return f;
          if (!('toJSON' in f)) {
            c[s] = f;
            const d = Fn(f) ? [] : {};
            return (
              Pa(f, (m, p) => {
                const v = r(m, s + 1);
                !Zn(v) && (d[p] = v);
              }),
              (c[s] = void 0),
              d
            );
          }
        }
        return f;
      };
    return r(u, 0);
  },
  eS = Ye('AsyncFunction'),
  lS = (u) => u && (Wa(u) || se(u)) && se(u.then) && se(u.catch),
  Zm = ((u, c) =>
    u
      ? setImmediate
      : c
        ? ((r, f) => (
            nn.addEventListener(
              'message',
              ({ source: s, data: d }) => {
                s === nn && d === r && f.length && f.shift()();
              },
              !1
            ),
            (s) => {
              (f.push(s), nn.postMessage(r, '*'));
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(typeof setImmediate == 'function', se(nn.postMessage)),
  nS = typeof queueMicrotask < 'u' ? queueMicrotask.bind(nn) : (typeof process < 'u' && process.nextTick) || Zm,
  aS = (u) => u != null && se(u[Bi]),
  D = {
    isArray: Fn,
    isArrayBuffer: Ym,
    isBuffer: $a,
    isFormData: Ug,
    isArrayBufferView: gg,
    isString: Sg,
    isNumber: Gm,
    isBoolean: bg,
    isObject: Wa,
    isPlainObject: Ai,
    isEmptyObject: Eg,
    isReadableStream: Ng,
    isRequest: xg,
    isResponse: Bg,
    isHeaders: Hg,
    isUndefined: Zn,
    isDate: Tg,
    isFile: Rg,
    isReactNativeBlob: Ag,
    isReactNative: Og,
    isBlob: _g,
    isRegExp: kg,
    isFunction: se,
    isStream: Cg,
    isURLSearchParams: Mg,
    isTypedArray: Qg,
    isFileList: zg,
    forEach: Pa,
    merge: Sr,
    extend: Lg,
    trim: wg,
    stripBOM: qg,
    inherits: jg,
    toFlatObject: Yg,
    kindOf: Hi,
    kindOfTest: Ye,
    endsWith: Gg,
    toArray: Xg,
    forEachEntry: Vg,
    matchAll: Zg,
    isHTMLForm: Kg,
    hasOwnProperty: am,
    hasOwnProp: am,
    reduceDescriptors: Vm,
    freezeMethods: Fg,
    toObjectSet: $g,
    toCamelCase: Jg,
    noop: Wg,
    toFiniteNumber: Pg,
    findKey: Xm,
    global: nn,
    isContextDefined: Qm,
    isSpecCompliantForm: Ig,
    toJSONObject: tS,
    isAsyncFn: eS,
    isThenable: lS,
    setImmediate: Zm,
    asap: nS,
    isIterable: aS
  };
let P = class Km extends Error {
  static from(c, r, f, s, d, m) {
    const p = new Km(c.message, r || c.code, f, s, d);
    return (
      (p.cause = c),
      (p.name = c.name),
      c.status != null && p.status == null && (p.status = c.status),
      m && Object.assign(p, m),
      p
    );
  }
  constructor(c, r, f, s, d) {
    (super(c),
      Object.defineProperty(this, 'message', { value: c, enumerable: !0, writable: !0, configurable: !0 }),
      (this.name = 'AxiosError'),
      (this.isAxiosError = !0),
      r && (this.code = r),
      f && (this.config = f),
      s && (this.request = s),
      d && ((this.response = d), (this.status = d.status)));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
P.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
P.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
P.ECONNABORTED = 'ECONNABORTED';
P.ETIMEDOUT = 'ETIMEDOUT';
P.ERR_NETWORK = 'ERR_NETWORK';
P.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
P.ERR_DEPRECATED = 'ERR_DEPRECATED';
P.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
P.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
P.ERR_CANCELED = 'ERR_CANCELED';
P.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
P.ERR_INVALID_URL = 'ERR_INVALID_URL';
const uS = null;
function br(u) {
  return D.isPlainObject(u) || D.isArray(u);
}
function Jm(u) {
  return D.endsWith(u, '[]') ? u.slice(0, -2) : u;
}
function hr(u, c, r) {
  return u
    ? u
        .concat(c)
        .map(function (s, d) {
          return ((s = Jm(s)), !r && d ? '[' + s + ']' : s);
        })
        .join(r ? '.' : '')
    : c;
}
function iS(u) {
  return D.isArray(u) && !u.some(br);
}
const cS = D.toFlatObject(D, {}, null, function (c) {
  return /^is[A-Z]/.test(c);
});
function Li(u, c, r) {
  if (!D.isObject(u)) throw new TypeError('target must be an object');
  ((c = c || new FormData()),
    (r = D.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (x, C) {
      return !D.isUndefined(C[x]);
    })));
  const f = r.metaTokens,
    s = r.visitor || S,
    d = r.dots,
    m = r.indexes,
    v = (r.Blob || (typeof Blob < 'u' && Blob)) && D.isSpecCompliantForm(c);
  if (!D.isFunction(s)) throw new TypeError('visitor must be a function');
  function y(A) {
    if (A === null) return '';
    if (D.isDate(A)) return A.toISOString();
    if (D.isBoolean(A)) return A.toString();
    if (!v && D.isBlob(A)) throw new P('Blob is not supported. Use a Buffer instead.');
    return D.isArrayBuffer(A) || D.isTypedArray(A)
      ? v && typeof Blob == 'function'
        ? new Blob([A])
        : Buffer.from(A)
      : A;
  }
  function S(A, x, C) {
    let G = A;
    if (D.isReactNative(c) && D.isReactNativeBlob(A)) return (c.append(hr(C, x, d), y(A)), !1);
    if (A && !C && typeof A == 'object') {
      if (D.endsWith(x, '{}')) ((x = f ? x : x.slice(0, -2)), (A = JSON.stringify(A)));
      else if ((D.isArray(A) && iS(A)) || ((D.isFileList(A) || D.endsWith(x, '[]')) && (G = D.toArray(A))))
        return (
          (x = Jm(x)),
          G.forEach(function (Q, et) {
            !(D.isUndefined(Q) || Q === null) && c.append(m === !0 ? hr([x], et, d) : m === null ? x : x + '[]', y(Q));
          }),
          !1
        );
    }
    return br(A) ? !0 : (c.append(hr(C, x, d), y(A)), !1);
  }
  const b = [],
    q = Object.assign(cS, { defaultVisitor: S, convertValue: y, isVisitable: br });
  function X(A, x) {
    if (!D.isUndefined(A)) {
      if (b.indexOf(A) !== -1) throw Error('Circular reference detected in ' + x.join('.'));
      (b.push(A),
        D.forEach(A, function (G, $) {
          (!(D.isUndefined(G) || G === null) && s.call(c, G, D.isString($) ? $.trim() : $, x, q)) === !0 &&
            X(G, x ? x.concat($) : [$]);
        }),
        b.pop());
    }
  }
  if (!D.isObject(u)) throw new TypeError('data must be an object');
  return (X(u), c);
}
function um(u) {
  const c = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function (f) {
    return c[f];
  });
}
function Mr(u, c) {
  ((this._pairs = []), u && Li(u, this, c));
}
const km = Mr.prototype;
km.append = function (c, r) {
  this._pairs.push([c, r]);
};
km.toString = function (c) {
  const r = c
    ? function (f) {
        return c.call(this, f, um);
      }
    : um;
  return this._pairs
    .map(function (s) {
      return r(s[0]) + '=' + r(s[1]);
    }, '')
    .join('&');
};
function fS(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function Fm(u, c, r) {
  if (!c) return u;
  const f = (r && r.encode) || fS,
    s = D.isFunction(r) ? { serialize: r } : r,
    d = s && s.serialize;
  let m;
  if ((d ? (m = d(c, s)) : (m = D.isURLSearchParams(c) ? c.toString() : new Mr(c, s).toString(f)), m)) {
    const p = u.indexOf('#');
    (p !== -1 && (u = u.slice(0, p)), (u += (u.indexOf('?') === -1 ? '?' : '&') + m));
  }
  return u;
}
class im {
  constructor() {
    this.handlers = [];
  }
  use(c, r, f) {
    return (
      this.handlers.push({
        fulfilled: c,
        rejected: r,
        synchronous: f ? f.synchronous : !1,
        runWhen: f ? f.runWhen : null
      }),
      this.handlers.length - 1
    );
  }
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(c) {
    D.forEach(this.handlers, function (f) {
      f !== null && c(f);
    });
  }
}
const Nr = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
  },
  rS = typeof URLSearchParams < 'u' ? URLSearchParams : Mr,
  oS = typeof FormData < 'u' ? FormData : null,
  sS = typeof Blob < 'u' ? Blob : null,
  dS = {
    isBrowser: !0,
    classes: { URLSearchParams: rS, FormData: oS, Blob: sS },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  xr = typeof window < 'u' && typeof document < 'u',
  Er = (typeof navigator == 'object' && navigator) || void 0,
  hS = xr && (!Er || ['ReactNative', 'NativeScript', 'NS'].indexOf(Er.product) < 0),
  mS = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  yS = (xr && window.location.href) || 'http://localhost',
  pS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: xr,
        hasStandardBrowserEnv: hS,
        hasStandardBrowserWebWorkerEnv: mS,
        navigator: Er,
        origin: yS
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  te = { ...pS, ...dS };
function vS(u, c) {
  return Li(u, new te.classes.URLSearchParams(), {
    visitor: function (r, f, s, d) {
      return te.isNode && D.isBuffer(r)
        ? (this.append(f, r.toString('base64')), !1)
        : d.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function gS(u) {
  return D.matchAll(/\w+|\[(\w*)]/g, u).map((c) => (c[0] === '[]' ? '' : c[1] || c[0]));
}
function SS(u) {
  const c = {},
    r = Object.keys(u);
  let f;
  const s = r.length;
  let d;
  for (f = 0; f < s; f++) ((d = r[f]), (c[d] = u[d]));
  return c;
}
function $m(u) {
  function c(r, f, s, d) {
    let m = r[d++];
    if (m === '__proto__') return !0;
    const p = Number.isFinite(+m),
      v = d >= r.length;
    return (
      (m = !m && D.isArray(s) ? s.length : m),
      v
        ? (D.hasOwnProp(s, m) ? (s[m] = [s[m], f]) : (s[m] = f), !p)
        : ((!s[m] || !D.isObject(s[m])) && (s[m] = []), c(r, f, s[m], d) && D.isArray(s[m]) && (s[m] = SS(s[m])), !p)
    );
  }
  if (D.isFormData(u) && D.isFunction(u.entries)) {
    const r = {};
    return (
      D.forEachEntry(u, (f, s) => {
        c(gS(f), s, r, 0);
      }),
      r
    );
  }
  return null;
}
function bS(u, c, r) {
  if (D.isString(u))
    try {
      return ((c || JSON.parse)(u), D.trim(u));
    } catch (f) {
      if (f.name !== 'SyntaxError') throw f;
    }
  return (r || JSON.stringify)(u);
}
const Ia = {
  transitional: Nr,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (c, r) {
      const f = r.getContentType() || '',
        s = f.indexOf('application/json') > -1,
        d = D.isObject(c);
      if ((d && D.isHTMLForm(c) && (c = new FormData(c)), D.isFormData(c))) return s ? JSON.stringify($m(c)) : c;
      if (D.isArrayBuffer(c) || D.isBuffer(c) || D.isStream(c) || D.isFile(c) || D.isBlob(c) || D.isReadableStream(c))
        return c;
      if (D.isArrayBufferView(c)) return c.buffer;
      if (D.isURLSearchParams(c))
        return (r.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), c.toString());
      let p;
      if (d) {
        if (f.indexOf('application/x-www-form-urlencoded') > -1) return vS(c, this.formSerializer).toString();
        if ((p = D.isFileList(c)) || f.indexOf('multipart/form-data') > -1) {
          const v = this.env && this.env.FormData;
          return Li(p ? { 'files[]': c } : c, v && new v(), this.formSerializer);
        }
      }
      return d || s ? (r.setContentType('application/json', !1), bS(c)) : c;
    }
  ],
  transformResponse: [
    function (c) {
      const r = this.transitional || Ia.transitional,
        f = r && r.forcedJSONParsing,
        s = this.responseType === 'json';
      if (D.isResponse(c) || D.isReadableStream(c)) return c;
      if (c && D.isString(c) && ((f && !this.responseType) || s)) {
        const m = !(r && r.silentJSONParsing) && s;
        try {
          return JSON.parse(c, this.parseReviver);
        } catch (p) {
          if (m) throw p.name === 'SyntaxError' ? P.from(p, P.ERR_BAD_RESPONSE, this, null, this.response) : p;
        }
      }
      return c;
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: te.classes.FormData, Blob: te.classes.Blob },
  validateStatus: function (c) {
    return c >= 200 && c < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } }
};
D.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (u) => {
  Ia.headers[u] = {};
});
const ES = D.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  TS = (u) => {
    const c = {};
    let r, f, s;
    return (
      u &&
        u
          .split(
            `
`
          )
          .forEach(function (m) {
            ((s = m.indexOf(':')),
              (r = m.substring(0, s).trim().toLowerCase()),
              (f = m.substring(s + 1).trim()),
              !(!r || (c[r] && ES[r])) &&
                (r === 'set-cookie' ? (c[r] ? c[r].push(f) : (c[r] = [f])) : (c[r] = c[r] ? c[r] + ', ' + f : f)));
          }),
      c
    );
  },
  cm = Symbol('internals');
function Ka(u) {
  return u && String(u).trim().toLowerCase();
}
function Oi(u) {
  return u === !1 || u == null ? u : D.isArray(u) ? u.map(Oi) : String(u);
}
function RS(u) {
  const c = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let f;
  for (; (f = r.exec(u)); ) c[f[1]] = f[2];
  return c;
}
const AS = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function mr(u, c, r, f, s) {
  if (D.isFunction(f)) return f.call(this, c, r);
  if ((s && (c = r), !!D.isString(c))) {
    if (D.isString(f)) return c.indexOf(f) !== -1;
    if (D.isRegExp(f)) return f.test(c);
  }
}
function OS(u) {
  return u
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (c, r, f) => r.toUpperCase() + f);
}
function _S(u, c) {
  const r = D.toCamelCase(' ' + c);
  ['get', 'set', 'has'].forEach((f) => {
    Object.defineProperty(u, f + r, {
      value: function (s, d, m) {
        return this[f].call(this, c, s, d, m);
      },
      configurable: !0
    });
  });
}
let de = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, r, f) {
    const s = this;
    function d(p, v, y) {
      const S = Ka(v);
      if (!S) throw new Error('header name must be a non-empty string');
      const b = D.findKey(s, S);
      (!b || s[b] === void 0 || y === !0 || (y === void 0 && s[b] !== !1)) && (s[b || v] = Oi(p));
    }
    const m = (p, v) => D.forEach(p, (y, S) => d(y, S, v));
    if (D.isPlainObject(c) || c instanceof this.constructor) m(c, r);
    else if (D.isString(c) && (c = c.trim()) && !AS(c)) m(TS(c), r);
    else if (D.isObject(c) && D.isIterable(c)) {
      let p = {},
        v,
        y;
      for (const S of c) {
        if (!D.isArray(S)) throw TypeError('Object iterator must return a key-value pair');
        p[(y = S[0])] = (v = p[y]) ? (D.isArray(v) ? [...v, S[1]] : [v, S[1]]) : S[1];
      }
      m(p, r);
    } else c != null && d(r, c, f);
    return this;
  }
  get(c, r) {
    if (((c = Ka(c)), c)) {
      const f = D.findKey(this, c);
      if (f) {
        const s = this[f];
        if (!r) return s;
        if (r === !0) return RS(s);
        if (D.isFunction(r)) return r.call(this, s, f);
        if (D.isRegExp(r)) return r.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(c, r) {
    if (((c = Ka(c)), c)) {
      const f = D.findKey(this, c);
      return !!(f && this[f] !== void 0 && (!r || mr(this, this[f], f, r)));
    }
    return !1;
  }
  delete(c, r) {
    const f = this;
    let s = !1;
    function d(m) {
      if (((m = Ka(m)), m)) {
        const p = D.findKey(f, m);
        p && (!r || mr(f, f[p], p, r)) && (delete f[p], (s = !0));
      }
    }
    return (D.isArray(c) ? c.forEach(d) : d(c), s);
  }
  clear(c) {
    const r = Object.keys(this);
    let f = r.length,
      s = !1;
    for (; f--; ) {
      const d = r[f];
      (!c || mr(this, this[d], d, c, !0)) && (delete this[d], (s = !0));
    }
    return s;
  }
  normalize(c) {
    const r = this,
      f = {};
    return (
      D.forEach(this, (s, d) => {
        const m = D.findKey(f, d);
        if (m) {
          ((r[m] = Oi(s)), delete r[d]);
          return;
        }
        const p = c ? OS(d) : String(d).trim();
        (p !== d && delete r[d], (r[p] = Oi(s)), (f[p] = !0));
      }),
      this
    );
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = Object.create(null);
    return (
      D.forEach(this, (f, s) => {
        f != null && f !== !1 && (r[s] = c && D.isArray(f) ? f.join(', ') : f);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, r]) => c + ': ' + r).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...r) {
    const f = new this(c);
    return (r.forEach((s) => f.set(s)), f);
  }
  static accessor(c) {
    const f = (this[cm] = this[cm] = { accessors: {} }).accessors,
      s = this.prototype;
    function d(m) {
      const p = Ka(m);
      f[p] || (_S(s, m), (f[p] = !0));
    }
    return (D.isArray(c) ? c.forEach(d) : d(c), this);
  }
};
de.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
D.reduceDescriptors(de.prototype, ({ value: u }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(f) {
      this[r] = f;
    }
  };
});
D.freezeMethods(de);
function yr(u, c) {
  const r = this || Ia,
    f = c || r,
    s = de.from(f.headers);
  let d = f.data;
  return (
    D.forEach(u, function (p) {
      d = p.call(r, d, s.normalize(), c ? c.status : void 0);
    }),
    s.normalize(),
    d
  );
}
function Wm(u) {
  return !!(u && u.__CANCEL__);
}
let tu = class extends P {
  constructor(c, r, f) {
    (super(c ?? 'canceled', P.ERR_CANCELED, r, f), (this.name = 'CanceledError'), (this.__CANCEL__ = !0));
  }
};
function Pm(u, c, r) {
  const f = r.config.validateStatus;
  !r.status || !f || f(r.status)
    ? u(r)
    : c(
        new P(
          'Request failed with status code ' + r.status,
          [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
          r.config,
          r.request,
          r
        )
      );
}
function zS(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return (c && c[1]) || '';
}
function CS(u, c) {
  u = u || 10;
  const r = new Array(u),
    f = new Array(u);
  let s = 0,
    d = 0,
    m;
  return (
    (c = c !== void 0 ? c : 1e3),
    function (v) {
      const y = Date.now(),
        S = f[d];
      (m || (m = y), (r[s] = v), (f[s] = y));
      let b = d,
        q = 0;
      for (; b !== s; ) ((q += r[b++]), (b = b % u));
      if (((s = (s + 1) % u), s === d && (d = (d + 1) % u), y - m < c)) return;
      const X = S && y - S;
      return X ? Math.round((q * 1e3) / X) : void 0;
    }
  );
}
function DS(u, c) {
  let r = 0,
    f = 1e3 / c,
    s,
    d;
  const m = (y, S = Date.now()) => {
    ((r = S), (s = null), d && (clearTimeout(d), (d = null)), u(...y));
  };
  return [
    (...y) => {
      const S = Date.now(),
        b = S - r;
      b >= f
        ? m(y, S)
        : ((s = y),
          d ||
            (d = setTimeout(() => {
              ((d = null), m(s));
            }, f - b)));
    },
    () => s && m(s)
  ];
}
const Di = (u, c, r = 3) => {
    let f = 0;
    const s = CS(50, 250);
    return DS((d) => {
      const m = d.loaded,
        p = d.lengthComputable ? d.total : void 0,
        v = m - f,
        y = s(v),
        S = m <= p;
      f = m;
      const b = {
        loaded: m,
        total: p,
        progress: p ? m / p : void 0,
        bytes: v,
        rate: y || void 0,
        estimated: y && p && S ? (p - m) / y : void 0,
        event: d,
        lengthComputable: p != null,
        [c ? 'download' : 'upload']: !0
      };
      u(b);
    }, r);
  },
  fm = (u, c) => {
    const r = u != null;
    return [(f) => c[0]({ lengthComputable: r, total: u, loaded: f }), c[1]];
  },
  rm =
    (u) =>
    (...c) =>
      D.asap(() => u(...c)),
  US = te.hasStandardBrowserEnv
    ? ((u, c) => (r) => (
        (r = new URL(r, te.origin)),
        u.protocol === r.protocol && u.host === r.host && (c || u.port === r.port)
      ))(new URL(te.origin), te.navigator && /(msie|trident)/i.test(te.navigator.userAgent))
    : () => !0,
  MS = te.hasStandardBrowserEnv
    ? {
        write(u, c, r, f, s, d, m) {
          if (typeof document > 'u') return;
          const p = [`${u}=${encodeURIComponent(c)}`];
          (D.isNumber(r) && p.push(`expires=${new Date(r).toUTCString()}`),
            D.isString(f) && p.push(`path=${f}`),
            D.isString(s) && p.push(`domain=${s}`),
            d === !0 && p.push('secure'),
            D.isString(m) && p.push(`SameSite=${m}`),
            (document.cookie = p.join('; ')));
        },
        read(u) {
          if (typeof document > 'u') return null;
          const c = document.cookie.match(new RegExp('(?:^|; )' + u + '=([^;]*)'));
          return c ? decodeURIComponent(c[1]) : null;
        },
        remove(u) {
          this.write(u, '', Date.now() - 864e5, '/');
        }
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {}
      };
function NS(u) {
  return typeof u != 'string' ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function xS(u, c) {
  return c ? u.replace(/\/?\/$/, '') + '/' + c.replace(/^\/+/, '') : u;
}
function Im(u, c, r) {
  let f = !NS(c);
  return u && (f || r == !1) ? xS(u, c) : c;
}
const om = (u) => (u instanceof de ? { ...u } : u);
function un(u, c) {
  c = c || {};
  const r = {};
  function f(y, S, b, q) {
    return D.isPlainObject(y) && D.isPlainObject(S)
      ? D.merge.call({ caseless: q }, y, S)
      : D.isPlainObject(S)
        ? D.merge({}, S)
        : D.isArray(S)
          ? S.slice()
          : S;
  }
  function s(y, S, b, q) {
    if (D.isUndefined(S)) {
      if (!D.isUndefined(y)) return f(void 0, y, b, q);
    } else return f(y, S, b, q);
  }
  function d(y, S) {
    if (!D.isUndefined(S)) return f(void 0, S);
  }
  function m(y, S) {
    if (D.isUndefined(S)) {
      if (!D.isUndefined(y)) return f(void 0, y);
    } else return f(void 0, S);
  }
  function p(y, S, b) {
    if (b in c) return f(y, S);
    if (b in u) return f(void 0, y);
  }
  const v = {
    url: d,
    method: d,
    data: d,
    baseURL: m,
    transformRequest: m,
    transformResponse: m,
    paramsSerializer: m,
    timeout: m,
    timeoutMessage: m,
    withCredentials: m,
    withXSRFToken: m,
    adapter: m,
    responseType: m,
    xsrfCookieName: m,
    xsrfHeaderName: m,
    onUploadProgress: m,
    onDownloadProgress: m,
    decompress: m,
    maxContentLength: m,
    maxBodyLength: m,
    beforeRedirect: m,
    transport: m,
    httpAgent: m,
    httpsAgent: m,
    cancelToken: m,
    socketPath: m,
    responseEncoding: m,
    validateStatus: p,
    headers: (y, S, b) => s(om(y), om(S), b, !0)
  };
  return (
    D.forEach(Object.keys({ ...u, ...c }), function (S) {
      if (S === '__proto__' || S === 'constructor' || S === 'prototype') return;
      const b = D.hasOwnProp(v, S) ? v[S] : s,
        q = b(u[S], c[S], S);
      (D.isUndefined(q) && b !== p) || (r[S] = q);
    }),
    r
  );
}
const ty = (u) => {
    const c = un({}, u);
    let { data: r, withXSRFToken: f, xsrfHeaderName: s, xsrfCookieName: d, headers: m, auth: p } = c;
    if (
      ((c.headers = m = de.from(m)),
      (c.url = Fm(Im(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer)),
      p &&
        m.set(
          'Authorization',
          'Basic ' + btoa((p.username || '') + ':' + (p.password ? unescape(encodeURIComponent(p.password)) : ''))
        ),
      D.isFormData(r))
    ) {
      if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv) m.setContentType(void 0);
      else if (D.isFunction(r.getHeaders)) {
        const v = r.getHeaders(),
          y = ['content-type', 'content-length'];
        Object.entries(v).forEach(([S, b]) => {
          y.includes(S.toLowerCase()) && m.set(S, b);
        });
      }
    }
    if (te.hasStandardBrowserEnv && (f && D.isFunction(f) && (f = f(c)), f || (f !== !1 && US(c.url)))) {
      const v = s && d && MS.read(d);
      v && m.set(s, v);
    }
    return c;
  },
  BS = typeof XMLHttpRequest < 'u',
  HS =
    BS &&
    function (u) {
      return new Promise(function (r, f) {
        const s = ty(u);
        let d = s.data;
        const m = de.from(s.headers).normalize();
        let { responseType: p, onUploadProgress: v, onDownloadProgress: y } = s,
          S,
          b,
          q,
          X,
          A;
        function x() {
          (X && X(),
            A && A(),
            s.cancelToken && s.cancelToken.unsubscribe(S),
            s.signal && s.signal.removeEventListener('abort', S));
        }
        let C = new XMLHttpRequest();
        (C.open(s.method.toUpperCase(), s.url, !0), (C.timeout = s.timeout));
        function G() {
          if (!C) return;
          const Q = de.from('getAllResponseHeaders' in C && C.getAllResponseHeaders()),
            ut = {
              data: !p || p === 'text' || p === 'json' ? C.responseText : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: Q,
              config: u,
              request: C
            };
          (Pm(
            function (J) {
              (r(J), x());
            },
            function (J) {
              (f(J), x());
            },
            ut
          ),
            (C = null));
        }
        ('onloadend' in C
          ? (C.onloadend = G)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 && !(C.responseURL && C.responseURL.indexOf('file:') === 0)) ||
                setTimeout(G);
            }),
          (C.onabort = function () {
            C && (f(new P('Request aborted', P.ECONNABORTED, u, C)), (C = null));
          }),
          (C.onerror = function (et) {
            const ut = et && et.message ? et.message : 'Network Error',
              mt = new P(ut, P.ERR_NETWORK, u, C);
            ((mt.event = et || null), f(mt), (C = null));
          }),
          (C.ontimeout = function () {
            let et = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const ut = s.transitional || Nr;
            (s.timeoutErrorMessage && (et = s.timeoutErrorMessage),
              f(new P(et, ut.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED, u, C)),
              (C = null));
          }),
          d === void 0 && m.setContentType(null),
          'setRequestHeader' in C &&
            D.forEach(m.toJSON(), function (et, ut) {
              C.setRequestHeader(ut, et);
            }),
          D.isUndefined(s.withCredentials) || (C.withCredentials = !!s.withCredentials),
          p && p !== 'json' && (C.responseType = s.responseType),
          y && (([q, A] = Di(y, !0)), C.addEventListener('progress', q)),
          v &&
            C.upload &&
            (([b, X] = Di(v)), C.upload.addEventListener('progress', b), C.upload.addEventListener('loadend', X)),
          (s.cancelToken || s.signal) &&
            ((S = (Q) => {
              C && (f(!Q || Q.type ? new tu(null, u, C) : Q), C.abort(), (C = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(S),
            s.signal && (s.signal.aborted ? S() : s.signal.addEventListener('abort', S))));
        const $ = zS(s.url);
        if ($ && te.protocols.indexOf($) === -1) {
          f(new P('Unsupported protocol ' + $ + ':', P.ERR_BAD_REQUEST, u));
          return;
        }
        C.send(d || null);
      });
    },
  wS = (u, c) => {
    const { length: r } = (u = u ? u.filter(Boolean) : []);
    if (c || r) {
      let f = new AbortController(),
        s;
      const d = function (y) {
        if (!s) {
          ((s = !0), p());
          const S = y instanceof Error ? y : this.reason;
          f.abort(S instanceof P ? S : new tu(S instanceof Error ? S.message : S));
        }
      };
      let m =
        c &&
        setTimeout(() => {
          ((m = null), d(new P(`timeout of ${c}ms exceeded`, P.ETIMEDOUT)));
        }, c);
      const p = () => {
        u &&
          (m && clearTimeout(m),
          (m = null),
          u.forEach((y) => {
            y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener('abort', d);
          }),
          (u = null));
      };
      u.forEach((y) => y.addEventListener('abort', d));
      const { signal: v } = f;
      return ((v.unsubscribe = () => D.asap(p)), v);
    }
  },
  LS = function* (u, c) {
    let r = u.byteLength;
    if (r < c) {
      yield u;
      return;
    }
    let f = 0,
      s;
    for (; f < r; ) ((s = f + c), yield u.slice(f, s), (f = s));
  },
  qS = async function* (u, c) {
    for await (const r of jS(u)) yield* LS(r, c);
  },
  jS = async function* (u) {
    if (u[Symbol.asyncIterator]) {
      yield* u;
      return;
    }
    const c = u.getReader();
    try {
      for (;;) {
        const { done: r, value: f } = await c.read();
        if (r) break;
        yield f;
      }
    } finally {
      await c.cancel();
    }
  },
  sm = (u, c, r, f) => {
    const s = qS(u, c);
    let d = 0,
      m,
      p = (v) => {
        m || ((m = !0), f && f(v));
      };
    return new ReadableStream(
      {
        async pull(v) {
          try {
            const { done: y, value: S } = await s.next();
            if (y) {
              (p(), v.close());
              return;
            }
            let b = S.byteLength;
            if (r) {
              let q = (d += b);
              r(q);
            }
            v.enqueue(new Uint8Array(S));
          } catch (y) {
            throw (p(y), y);
          }
        },
        cancel(v) {
          return (p(v), s.return());
        }
      },
      { highWaterMark: 2 }
    );
  },
  dm = 64 * 1024,
  { isFunction: bi } = D,
  YS = (({ Request: u, Response: c }) => ({ Request: u, Response: c }))(D.global),
  { ReadableStream: hm, TextEncoder: mm } = D.global,
  ym = (u, ...c) => {
    try {
      return !!u(...c);
    } catch {
      return !1;
    }
  },
  GS = (u) => {
    u = D.merge.call({ skipUndefined: !0 }, YS, u);
    const { fetch: c, Request: r, Response: f } = u,
      s = c ? bi(c) : typeof fetch == 'function',
      d = bi(r),
      m = bi(f);
    if (!s) return !1;
    const p = s && bi(hm),
      v =
        s &&
        (typeof mm == 'function'
          ? (
              (A) => (x) =>
                A.encode(x)
            )(new mm())
          : async (A) => new Uint8Array(await new r(A).arrayBuffer())),
      y =
        d &&
        p &&
        ym(() => {
          let A = !1;
          const x = new r(te.origin, {
            body: new hm(),
            method: 'POST',
            get duplex() {
              return ((A = !0), 'half');
            }
          }).headers.has('Content-Type');
          return A && !x;
        }),
      S = m && p && ym(() => D.isReadableStream(new f('').body)),
      b = { stream: S && ((A) => A.body) };
    s &&
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((A) => {
        !b[A] &&
          (b[A] = (x, C) => {
            let G = x && x[A];
            if (G) return G.call(x);
            throw new P(`Response type '${A}' is not supported`, P.ERR_NOT_SUPPORT, C);
          });
      });
    const q = async (A) => {
        if (A == null) return 0;
        if (D.isBlob(A)) return A.size;
        if (D.isSpecCompliantForm(A))
          return (await new r(te.origin, { method: 'POST', body: A }).arrayBuffer()).byteLength;
        if (D.isArrayBufferView(A) || D.isArrayBuffer(A)) return A.byteLength;
        if ((D.isURLSearchParams(A) && (A = A + ''), D.isString(A))) return (await v(A)).byteLength;
      },
      X = async (A, x) => {
        const C = D.toFiniteNumber(A.getContentLength());
        return C ?? q(x);
      };
    return async (A) => {
      let {
          url: x,
          method: C,
          data: G,
          signal: $,
          cancelToken: Q,
          timeout: et,
          onDownloadProgress: ut,
          onUploadProgress: mt,
          responseType: J,
          headers: Ot,
          withCredentials: xt = 'same-origin',
          fetchOptions: he
        } = ty(A),
        ee = c || fetch;
      J = J ? (J + '').toLowerCase() : 'text';
      let Bt = wS([$, Q && Q.toAbortSignal()], et),
        Pt = null;
      const jt =
        Bt &&
        Bt.unsubscribe &&
        (() => {
          Bt.unsubscribe();
        });
      let Ut;
      try {
        if (mt && y && C !== 'get' && C !== 'head' && (Ut = await X(Ot, G)) !== 0) {
          let E = new r(x, { method: 'POST', body: G, duplex: 'half' }),
            w;
          if ((D.isFormData(G) && (w = E.headers.get('content-type')) && Ot.setContentType(w), E.body)) {
            const [Y, V] = fm(Ut, Di(rm(mt)));
            G = sm(E.body, dm, Y, V);
          }
        }
        D.isString(xt) || (xt = xt ? 'include' : 'omit');
        const N = d && 'credentials' in r.prototype,
          j = {
            ...he,
            signal: Bt,
            method: C.toUpperCase(),
            headers: Ot.normalize().toJSON(),
            body: G,
            duplex: 'half',
            credentials: N ? xt : void 0
          };
        Pt = d && new r(x, j);
        let k = await (d ? ee(Pt, he) : ee(x, j));
        const yt = S && (J === 'stream' || J === 'response');
        if (S && (ut || (yt && jt))) {
          const E = {};
          ['status', 'statusText', 'headers'].forEach((I) => {
            E[I] = k[I];
          });
          const w = D.toFiniteNumber(k.headers.get('content-length')),
            [Y, V] = (ut && fm(w, Di(rm(ut), !0))) || [];
          k = new f(
            sm(k.body, dm, Y, () => {
              (V && V(), jt && jt());
            }),
            E
          );
        }
        J = J || 'text';
        let gt = await b[D.findKey(b, J) || 'text'](k, A);
        return (
          !yt && jt && jt(),
          await new Promise((E, w) => {
            Pm(E, w, {
              data: gt,
              headers: de.from(k.headers),
              status: k.status,
              statusText: k.statusText,
              config: A,
              request: Pt
            });
          })
        );
      } catch (N) {
        throw (
          jt && jt(),
          N && N.name === 'TypeError' && /Load failed|fetch/i.test(N.message)
            ? Object.assign(new P('Network Error', P.ERR_NETWORK, A, Pt, N && N.response), { cause: N.cause || N })
            : P.from(N, N && N.code, A, Pt, N && N.response)
        );
      }
    };
  },
  XS = new Map(),
  ey = (u) => {
    let c = (u && u.env) || {};
    const { fetch: r, Request: f, Response: s } = c,
      d = [f, s, r];
    let m = d.length,
      p = m,
      v,
      y,
      S = XS;
    for (; p--; ) ((v = d[p]), (y = S.get(v)), y === void 0 && S.set(v, (y = p ? new Map() : GS(c))), (S = y));
    return y;
  };
ey();
const Br = { http: uS, xhr: HS, fetch: { get: ey } };
D.forEach(Br, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, 'name', { value: c });
    } catch {}
    Object.defineProperty(u, 'adapterName', { value: c });
  }
});
const pm = (u) => `- ${u}`,
  QS = (u) => D.isFunction(u) || u === null || u === !1;
function VS(u, c) {
  u = D.isArray(u) ? u : [u];
  const { length: r } = u;
  let f, s;
  const d = {};
  for (let m = 0; m < r; m++) {
    f = u[m];
    let p;
    if (((s = f), !QS(f) && ((s = Br[(p = String(f)).toLowerCase()]), s === void 0)))
      throw new P(`Unknown adapter '${p}'`);
    if (s && (D.isFunction(s) || (s = s.get(c)))) break;
    d[p || '#' + m] = s;
  }
  if (!s) {
    const m = Object.entries(d).map(
      ([v, y]) => `adapter ${v} ` + (y === !1 ? 'is not supported by the environment' : 'is not available in the build')
    );
    let p = r
      ? m.length > 1
        ? `since :
` +
          m.map(pm).join(`
`)
        : ' ' + pm(m[0])
      : 'as no adapter specified';
    throw new P('There is no suitable adapter to dispatch the request ' + p, 'ERR_NOT_SUPPORT');
  }
  return s;
}
const ly = { getAdapter: VS, adapters: Br };
function pr(u) {
  if ((u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)) throw new tu(null, u);
}
function vm(u) {
  return (
    pr(u),
    (u.headers = de.from(u.headers)),
    (u.data = yr.call(u, u.transformRequest)),
    ['post', 'put', 'patch'].indexOf(u.method) !== -1 &&
      u.headers.setContentType('application/x-www-form-urlencoded', !1),
    ly
      .getAdapter(
        u.adapter || Ia.adapter,
        u
      )(u)
      .then(
        function (f) {
          return (pr(u), (f.data = yr.call(u, u.transformResponse, f)), (f.headers = de.from(f.headers)), f);
        },
        function (f) {
          return (
            Wm(f) ||
              (pr(u),
              f &&
                f.response &&
                ((f.response.data = yr.call(u, u.transformResponse, f.response)),
                (f.response.headers = de.from(f.response.headers)))),
            Promise.reject(f)
          );
        }
      )
  );
}
const ny = '1.13.6',
  qi = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((u, c) => {
  qi[u] = function (f) {
    return typeof f === u || 'a' + (c < 1 ? 'n ' : ' ') + u;
  };
});
const gm = {};
qi.transitional = function (c, r, f) {
  function s(d, m) {
    return '[Axios v' + ny + "] Transitional option '" + d + "'" + m + (f ? '. ' + f : '');
  }
  return (d, m, p) => {
    if (c === !1) throw new P(s(m, ' has been removed' + (r ? ' in ' + r : '')), P.ERR_DEPRECATED);
    return (
      r &&
        !gm[m] &&
        ((gm[m] = !0),
        console.warn(s(m, ' has been deprecated since v' + r + ' and will be removed in the near future'))),
      c ? c(d, m, p) : !0
    );
  };
};
qi.spelling = function (c) {
  return (r, f) => (console.warn(`${f} is likely a misspelling of ${c}`), !0);
};
function ZS(u, c, r) {
  if (typeof u != 'object') throw new P('options must be an object', P.ERR_BAD_OPTION_VALUE);
  const f = Object.keys(u);
  let s = f.length;
  for (; s-- > 0; ) {
    const d = f[s],
      m = c[d];
    if (m) {
      const p = u[d],
        v = p === void 0 || m(p, d, u);
      if (v !== !0) throw new P('option ' + d + ' must be ' + v, P.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new P('Unknown option ' + d, P.ERR_BAD_OPTION);
  }
}
const _i = { assertOptions: ZS, validators: qi },
  He = _i.validators;
let an = class {
  constructor(c) {
    ((this.defaults = c || {}), (this.interceptors = { request: new im(), response: new im() }));
  }
  async request(c, r) {
    try {
      return await this._request(c, r);
    } catch (f) {
      if (f instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
        const d = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          f.stack
            ? d &&
              !String(f.stack).endsWith(d.replace(/^.+\n.+\n/, '')) &&
              (f.stack +=
                `
` + d)
            : (f.stack = d);
        } catch {}
      }
      throw f;
    }
  }
  _request(c, r) {
    (typeof c == 'string' ? ((r = r || {}), (r.url = c)) : (r = c || {}), (r = un(this.defaults, r)));
    const { transitional: f, paramsSerializer: s, headers: d } = r;
    (f !== void 0 &&
      _i.assertOptions(
        f,
        {
          silentJSONParsing: He.transitional(He.boolean),
          forcedJSONParsing: He.transitional(He.boolean),
          clarifyTimeoutError: He.transitional(He.boolean),
          legacyInterceptorReqResOrdering: He.transitional(He.boolean)
        },
        !1
      ),
      s != null &&
        (D.isFunction(s)
          ? (r.paramsSerializer = { serialize: s })
          : _i.assertOptions(s, { encode: He.function, serialize: He.function }, !0)),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      _i.assertOptions(r, { baseUrl: He.spelling('baseURL'), withXsrfToken: He.spelling('withXSRFToken') }, !0),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase()));
    let m = d && D.merge(d.common, d[r.method]);
    (d &&
      D.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (A) => {
        delete d[A];
      }),
      (r.headers = de.concat(m, d)));
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function (x) {
      if (typeof x.runWhen == 'function' && x.runWhen(r) === !1) return;
      v = v && x.synchronous;
      const C = r.transitional || Nr;
      C && C.legacyInterceptorReqResOrdering ? p.unshift(x.fulfilled, x.rejected) : p.push(x.fulfilled, x.rejected);
    });
    const y = [];
    this.interceptors.response.forEach(function (x) {
      y.push(x.fulfilled, x.rejected);
    });
    let S,
      b = 0,
      q;
    if (!v) {
      const A = [vm.bind(this), void 0];
      for (A.unshift(...p), A.push(...y), q = A.length, S = Promise.resolve(r); b < q; ) S = S.then(A[b++], A[b++]);
      return S;
    }
    q = p.length;
    let X = r;
    for (; b < q; ) {
      const A = p[b++],
        x = p[b++];
      try {
        X = A(X);
      } catch (C) {
        x.call(this, C);
        break;
      }
    }
    try {
      S = vm.call(this, X);
    } catch (A) {
      return Promise.reject(A);
    }
    for (b = 0, q = y.length; b < q; ) S = S.then(y[b++], y[b++]);
    return S;
  }
  getUri(c) {
    c = un(this.defaults, c);
    const r = Im(c.baseURL, c.url, c.allowAbsoluteUrls);
    return Fm(r, c.params, c.paramsSerializer);
  }
};
D.forEach(['delete', 'get', 'head', 'options'], function (c) {
  an.prototype[c] = function (r, f) {
    return this.request(un(f || {}, { method: c, url: r, data: (f || {}).data }));
  };
});
D.forEach(['post', 'put', 'patch'], function (c) {
  function r(f) {
    return function (d, m, p) {
      return this.request(
        un(p || {}, { method: c, headers: f ? { 'Content-Type': 'multipart/form-data' } : {}, url: d, data: m })
      );
    };
  }
  ((an.prototype[c] = r()), (an.prototype[c + 'Form'] = r(!0)));
});
let KS = class ay {
  constructor(c) {
    if (typeof c != 'function') throw new TypeError('executor must be a function.');
    let r;
    this.promise = new Promise(function (d) {
      r = d;
    });
    const f = this;
    (this.promise.then((s) => {
      if (!f._listeners) return;
      let d = f._listeners.length;
      for (; d-- > 0; ) f._listeners[d](s);
      f._listeners = null;
    }),
      (this.promise.then = (s) => {
        let d;
        const m = new Promise((p) => {
          (f.subscribe(p), (d = p));
        }).then(s);
        return (
          (m.cancel = function () {
            f.unsubscribe(d);
          }),
          m
        );
      }),
      c(function (d, m, p) {
        f.reason || ((f.reason = new tu(d, m, p)), r(f.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : (this._listeners = [c]);
  }
  unsubscribe(c) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(c);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const c = new AbortController(),
      r = (f) => {
        c.abort(f);
      };
    return (this.subscribe(r), (c.signal.unsubscribe = () => this.unsubscribe(r)), c.signal);
  }
  static source() {
    let c;
    return {
      token: new ay(function (s) {
        c = s;
      }),
      cancel: c
    };
  }
};
function JS(u) {
  return function (r) {
    return u.apply(null, r);
  };
}
function kS(u) {
  return D.isObject(u) && u.isAxiosError === !0;
}
const Tr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Tr).forEach(([u, c]) => {
  Tr[c] = u;
});
function uy(u) {
  const c = new an(u),
    r = qm(an.prototype.request, c);
  return (
    D.extend(r, an.prototype, c, { allOwnKeys: !0 }),
    D.extend(r, c, null, { allOwnKeys: !0 }),
    (r.create = function (s) {
      return uy(un(u, s));
    }),
    r
  );
}
const qt = uy(Ia);
qt.Axios = an;
qt.CanceledError = tu;
qt.CancelToken = KS;
qt.isCancel = Wm;
qt.VERSION = ny;
qt.toFormData = Li;
qt.AxiosError = P;
qt.Cancel = qt.CanceledError;
qt.all = function (c) {
  return Promise.all(c);
};
qt.spread = JS;
qt.isAxiosError = kS;
qt.mergeConfig = un;
qt.AxiosHeaders = de;
qt.formToJSON = (u) => $m(D.isHTMLForm(u) ? new FormData(u) : u);
qt.getAdapter = ly.getAdapter;
qt.HttpStatusCode = Tr;
qt.default = qt;
const {
    Axios: y1,
    AxiosError: p1,
    CanceledError: v1,
    isCancel: g1,
    CancelToken: S1,
    VERSION: b1,
    all: E1,
    Cancel: T1,
    isAxiosError: R1,
    spread: A1,
    toFormData: O1,
    AxiosHeaders: _1,
    HttpStatusCode: z1,
    formToJSON: C1,
    getAdapter: D1,
    mergeConfig: U1
  } = qt,
  FS = 'http://localhost:4400/api/',
  $S = (u) => null,
  WS = $S() || FS,
  PS = (u) => WS,
  zi = PS(),
  IS = { baseURL: zi, timeout: 0, headers: { Accept: 'application/json', 'Content-Type': 'application/json' } },
  Hr = qt.create(IS),
  t1 = (u) => {
    localStorage.setItem('token', u);
  },
  iy = () => localStorage.getItem('token') || '',
  e1 = () => {
    localStorage.removeItem('token');
  },
  l1 = () => Hr.get('/');
Hr.interceptors.request.use(
  (u) => {
    const c = iy();
    return (c && (u.headers.Authorization = `Bearer ${c}`), u);
  },
  (u) => Promise.reject(u)
);
const cy = () => {
    const [u, c] = M.useState(!1),
      [r, f] = M.useState(null),
      [s, d] = M.useState(null),
      m = M.useCallback(() => {
        f(null);
      }, []),
      p = M.useCallback(async (A) => {
        (c(!0), f(null));
        try {
          const x = await Hr(A);
          return (d(x.data), x.data);
        } catch (x) {
          throw (f(x), x);
        } finally {
          c(!1);
        }
      }, []),
      v = M.useCallback((A, x = {}) => p({ method: 'get', url: A, ...x }), [p]),
      y = M.useCallback((A, x, C = {}) => p({ method: 'post', url: A, data: x, ...C }), [p]),
      S = M.useCallback((A, x, C = {}) => p({ method: 'put', url: A, data: x, ...C }), [p]),
      b = M.useCallback((A, x, C = {}) => p({ method: 'patch', url: A, data: x, ...C }), [p]),
      q = M.useCallback((A, x = {}) => p({ method: 'delete', url: A, ...x }), [p]),
      X = M.useCallback(async () => {
        (c(!0), f(null));
        try {
          const A = await l1();
          return { ok: !0, baseUrl: zi, status: A.status, data: A.data };
        } catch (A) {
          return (
            f(A),
            { ok: !1, baseUrl: zi, status: A?.response?.status ?? null, message: A?.message ?? 'API connection failed' }
          );
        } finally {
          c(!1);
        }
      }, []);
    return {
      loading: u,
      error: r,
      data: s,
      baseUrl: zi,
      clearError: m,
      request: p,
      get: v,
      post: y,
      put: S,
      patch: b,
      remove: q,
      testConnection: X
    };
  },
  wr = () => {
    const [u, c] = M.useState(!1),
      [r, f] = M.useState(null),
      [s, d] = M.useState(!0),
      { post: m } = cy();
    M.useEffect(() => {
      (iy() && c(!0), d(!1));
    }, []);
    const p = M.useCallback(
        async (y, S) => {
          d(!0);
          try {
            const b = await m('/auth/login', { email: y, password: S }),
              q = b.token;
            return (t1(q), f(b.user), c(!0), b);
          } catch (b) {
            throw (console.error('Login failed:', b), b);
          } finally {
            d(!1);
          }
        },
        [m]
      ),
      v = M.useCallback(() => {
        (e1(), f(null), c(!1));
      }, []);
    return { isAuthenticated: u, user: r, loading: s, login: p, logout: v };
  },
  n1 = 'Prijava',
  a1 = 'Email',
  u1 = 'Lozinka',
  i1 = 'Dobrodošli! Unesite svoje podatke za prijavu.';
function c1() {
  const u = Ni(),
    { login: c } = wr(),
    [r, f] = M.useState(''),
    [s, d] = M.useState(''),
    [m, p] = M.useState(''),
    v = async (y) => {
      (y.preventDefault(), p(''));
      try {
        (await c(r, s), u('/index'));
      } catch (S) {
        (p('Invalid email or password'), console.error(S));
      }
    };
  return at.jsx('div', {
    className: 'main',
    children: at.jsxs('form', {
      onSubmit: v,
      className: `login-form bg-dark-grey
          max-w-[600px] h-screen w-full p-[60px] ml-auto
          flex flex-col justify-center relative right-0 z-10`,
      children: [
        at.jsx('h2', { children: n1 }),
        at.jsx('h4', { children: i1 }),
        at.jsxs('div', {
          children: [
            at.jsx('label', { className: 'block text-text-light mb-2', children: a1 }),
            at.jsx('input', {
              type: 'email',
              value: r,
              onChange: (y) => f(y.target.value),
              placeholder: 'Enter your email',
              className: 'w-full px-4 py-2 rounded border border-gray-300',
              required: !0
            })
          ]
        }),
        at.jsxs('div', {
          children: [
            at.jsx('label', { className: 'block text-text-light mb-2', children: u1 }),
            at.jsx('input', {
              type: 'password',
              value: s,
              onChange: (y) => d(y.target.value),
              placeholder: 'Enter your password',
              className: 'w-full px-4 py-2 rounded border border-gray-300',
              required: !0
            })
          ]
        }),
        m && at.jsx('p', { className: 'text-red-500 text-sm', children: m })
      ]
    })
  });
}
const f1 = '/assets/bottle-BdNm8Okh.png';
function r1() {
  const u = Ni(),
    { logout: c, user: r } = wr(),
    { get: f, loading: s, error: d, data: m } = cy();
  M.useEffect(() => {
    (async () => {
      try {
        await f('/users');
      } catch (y) {
        console.error('Failed to load users:', y);
      }
    })();
  }, [f]);
  const p = (v) => {
    (v.preventDefault(), c(), u('/login'));
  };
  return at.jsx(at.Fragment, {
    children: at.jsxs('div', {
      className: 'main',
      children: [
        at.jsxs('header', {
          children: [
            at.jsx('a', { href: '/index', children: at.jsx('img', { src: f1, alt: 'logo' }) }),
            at.jsx('span', { children: 'mlecni put' }),
            at.jsx('div', {
              className: 'right-side',
              children: at.jsx('button', {
                onClick: p,
                className: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600',
                children: 'Logout'
              })
            })
          ]
        }),
        at.jsxs('h1', { className: 'text-3xl font-bold underline', children: ['Welcome ', r?.name || 'User', '!'] }),
        s && at.jsx('p', { children: 'Loading users...' }),
        !!d && at.jsx('p', { className: 'text-red-500', children: 'Failed to load users.' }),
        !!m &&
          at.jsxs('div', {
            children: [
              at.jsx('p', { children: 'Users loaded successfully!' }),
              at.jsx('pre', { children: JSON.stringify(m, null, 2) })
            ]
          }),
        at.jsx('footer', { children: at.jsx('span', { children: 'Copyright 2026' }) })
      ]
    })
  });
}
function o1({ children: u, isAuthenticated: c, isLoading: r }) {
  return r
    ? at.jsx('div', { className: 'main flex-center', children: 'Loading...' })
    : c
      ? u
      : at.jsx(Nm, { to: '/login', replace: !0 });
}
function s1() {
  const { isAuthenticated: u, loading: c } = wr();
  return at.jsx(cg, {
    children: at.jsxs(Lv, {
      children: [
        at.jsx(Ei, { path: '/login', element: at.jsx(c1, {}) }),
        at.jsx(Ei, {
          path: '/index',
          element: at.jsx(o1, { isAuthenticated: u, isLoading: c, children: at.jsx(r1, {}) })
        }),
        at.jsx(Ei, { path: '/', element: at.jsx(Nm, { to: u ? '/index' : '/login', replace: !0 }) })
      ]
    })
  });
}
Yp.createRoot(document.getElementById('root')).render(at.jsx(s1, {}));
