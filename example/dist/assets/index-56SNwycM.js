function fv(a, i) {
  for (var o = 0; o < i.length; o++) {
    const u = i[o];
    if (typeof u != 'string' && !Array.isArray(u)) {
      for (const c in u)
        if (c !== 'default' && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(u, c);
          f && Object.defineProperty(a, c, f.get ? f : { enumerable: !0, get: () => u[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === 'childList')
        for (const p of f.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && u(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function Zm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default') ? a.default : a;
}
var Qc = { exports: {} },
  mr = {};
var Gh;
function dv() {
  if (Gh) return mr;
  Gh = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.fragment');
  function o(u, c, f) {
    var p = null;
    if ((f !== void 0 && (p = '' + f), c.key !== void 0 && (p = '' + c.key), 'key' in c)) {
      f = {};
      for (var h in c) h !== 'key' && (f[h] = c[h]);
    } else f = c;
    return ((c = f.ref), { $$typeof: a, type: u, key: p, ref: c !== void 0 ? c : null, props: f });
  }
  return ((mr.Fragment = i), (mr.jsx = o), (mr.jsxs = o), mr);
}
var Vh;
function pv() {
  return (Vh || ((Vh = 1), (Qc.exports = dv())), Qc.exports);
}
var R = pv(),
  Zc = { exports: {} },
  vt = {};
var Xh;
function hv() {
  if (Xh) return vt;
  Xh = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    S = Symbol.for('react.activity'),
    A = Symbol.iterator;
  function j(x) {
    return x === null || typeof x != 'object'
      ? null
      : ((x = (A && x[A]) || x['@@iterator']), typeof x == 'function' ? x : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    k = {};
  function Y(x, w, Z) {
    ((this.props = x), (this.context = w), (this.refs = k), (this.updater = Z || O));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (x, w) {
      if (typeof x != 'object' && typeof x != 'function' && x != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, x, w, 'setState');
    }),
    (Y.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, 'forceUpdate');
    }));
  function P() {}
  P.prototype = Y.prototype;
  function J(x, w, Z) {
    ((this.props = x), (this.context = w), (this.refs = k), (this.updater = Z || O));
  }
  var q = (J.prototype = new P());
  ((q.constructor = J), T(q, Y.prototype), (q.isPureReactComponent = !0));
  var N = Array.isArray;
  function V() {}
  var K = { H: null, A: null, T: null, S: null },
    ct = Object.prototype.hasOwnProperty;
  function st(x, w, Z) {
    var tt = Z.ref;
    return { $$typeof: a, type: x, key: w, ref: tt !== void 0 ? tt : null, props: Z };
  }
  function pt(x, w) {
    return st(x.type, w, x.props);
  }
  function ft(x) {
    return typeof x == 'object' && x !== null && x.$$typeof === a;
  }
  function v(x) {
    var w = { '=': '=0', ':': '=2' };
    return (
      '$' +
      x.replace(/[=:]/g, function (Z) {
        return w[Z];
      })
    );
  }
  var W = /\/+/g;
  function X(x, w) {
    return typeof x == 'object' && x !== null && x.key != null ? v('' + x.key) : w.toString(36);
  }
  function et(x) {
    switch (x.status) {
      case 'fulfilled':
        return x.value;
      case 'rejected':
        throw x.reason;
      default:
        switch (
          (typeof x.status == 'string'
            ? x.then(V, V)
            : ((x.status = 'pending'),
              x.then(
                function (w) {
                  x.status === 'pending' && ((x.status = 'fulfilled'), (x.value = w));
                },
                function (w) {
                  x.status === 'pending' && ((x.status = 'rejected'), (x.reason = w));
                }
              )),
          x.status)
        ) {
          case 'fulfilled':
            return x.value;
          case 'rejected':
            throw x.reason;
        }
    }
    throw x;
  }
  function z(x, w, Z, tt, nt) {
    var ot = typeof x;
    (ot === 'undefined' || ot === 'boolean') && (x = null);
    var bt = !1;
    if (x === null) bt = !0;
    else
      switch (ot) {
        case 'bigint':
        case 'string':
        case 'number':
          bt = !0;
          break;
        case 'object':
          switch (x.$$typeof) {
            case a:
            case i:
              bt = !0;
              break;
            case b:
              return ((bt = x._init), z(bt(x._payload), w, Z, tt, nt));
          }
      }
    if (bt)
      return (
        (nt = nt(x)),
        (bt = tt === '' ? '.' + X(x, 0) : tt),
        N(nt)
          ? ((Z = ''),
            bt != null && (Z = bt.replace(W, '$&/') + '/'),
            z(nt, w, Z, '', function (he) {
              return he;
            }))
          : nt != null &&
            (ft(nt) &&
              (nt = pt(
                nt,
                Z + (nt.key == null || (x && x.key === nt.key) ? '' : ('' + nt.key).replace(W, '$&/') + '/') + bt
              )),
            w.push(nt)),
        1
      );
    bt = 0;
    var Ut = tt === '' ? '.' : tt + ':';
    if (N(x)) for (var Rt = 0; Rt < x.length; Rt++) ((tt = x[Rt]), (ot = Ut + X(tt, Rt)), (bt += z(tt, w, Z, ot, nt)));
    else if (((Rt = j(x)), typeof Rt == 'function'))
      for (x = Rt.call(x), Rt = 0; !(tt = x.next()).done; )
        ((tt = tt.value), (ot = Ut + X(tt, Rt++)), (bt += z(tt, w, Z, ot, nt)));
    else if (ot === 'object') {
      if (typeof x.then == 'function') return z(et(x), w, Z, tt, nt);
      throw (
        (w = String(x)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (w === '[object Object]' ? 'object with keys {' + Object.keys(x).join(', ') + '}' : w) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return bt;
  }
  function F(x, w, Z) {
    if (x == null) return x;
    var tt = [],
      nt = 0;
    return (
      z(x, tt, '', '', function (ot) {
        return w.call(Z, ot, nt++);
      }),
      tt
    );
  }
  function I(x) {
    if (x._status === -1) {
      var w = x._result;
      ((w = w()),
        w.then(
          function (Z) {
            (x._status === 0 || x._status === -1) && ((x._status = 1), (x._result = Z));
          },
          function (Z) {
            (x._status === 0 || x._status === -1) && ((x._status = 2), (x._result = Z));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = w)));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var it =
      typeof reportError == 'function'
        ? reportError
        : function (x) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var w = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == 'object' && x !== null && typeof x.message == 'string' ? String(x.message) : String(x),
                error: x,
              });
              if (!window.dispatchEvent(w)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', x);
              return;
            }
            console.error(x);
          },
    yt = {
      map: F,
      forEach: function (x, w, Z) {
        F(
          x,
          function () {
            w.apply(this, arguments);
          },
          Z
        );
      },
      count: function (x) {
        var w = 0;
        return (
          F(x, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (x) {
        return (
          F(x, function (w) {
            return w;
          }) || []
        );
      },
      only: function (x) {
        if (!ft(x)) throw Error('React.Children.only expected to receive a single React element child.');
        return x;
      },
    };
  return (
    (vt.Activity = S),
    (vt.Children = yt),
    (vt.Component = Y),
    (vt.Fragment = o),
    (vt.Profiler = c),
    (vt.PureComponent = J),
    (vt.StrictMode = u),
    (vt.Suspense = y),
    (vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (vt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return K.H.useMemoCache(x);
      },
    }),
    (vt.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (vt.cacheSignal = function () {
      return null;
    }),
    (vt.cloneElement = function (x, w, Z) {
      if (x == null) throw Error('The argument must be a React element, but you passed ' + x + '.');
      var tt = T({}, x.props),
        nt = x.key;
      if (w != null)
        for (ot in (w.key !== void 0 && (nt = '' + w.key), w))
          !ct.call(w, ot) ||
            ot === 'key' ||
            ot === '__self' ||
            ot === '__source' ||
            (ot === 'ref' && w.ref === void 0) ||
            (tt[ot] = w[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) tt.children = Z;
      else if (1 < ot) {
        for (var bt = Array(ot), Ut = 0; Ut < ot; Ut++) bt[Ut] = arguments[Ut + 2];
        tt.children = bt;
      }
      return st(x.type, nt, tt);
    }),
    (vt.createContext = function (x) {
      return (
        (x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: f, _context: x }),
        x
      );
    }),
    (vt.createElement = function (x, w, Z) {
      var tt,
        nt = {},
        ot = null;
      if (w != null)
        for (tt in (w.key !== void 0 && (ot = '' + w.key), w))
          ct.call(w, tt) && tt !== 'key' && tt !== '__self' && tt !== '__source' && (nt[tt] = w[tt]);
      var bt = arguments.length - 2;
      if (bt === 1) nt.children = Z;
      else if (1 < bt) {
        for (var Ut = Array(bt), Rt = 0; Rt < bt; Rt++) Ut[Rt] = arguments[Rt + 2];
        nt.children = Ut;
      }
      if (x && x.defaultProps) for (tt in ((bt = x.defaultProps), bt)) nt[tt] === void 0 && (nt[tt] = bt[tt]);
      return st(x, ot, nt);
    }),
    (vt.createRef = function () {
      return { current: null };
    }),
    (vt.forwardRef = function (x) {
      return { $$typeof: h, render: x };
    }),
    (vt.isValidElement = ft),
    (vt.lazy = function (x) {
      return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: I };
    }),
    (vt.memo = function (x, w) {
      return { $$typeof: g, type: x, compare: w === void 0 ? null : w };
    }),
    (vt.startTransition = function (x) {
      var w = K.T,
        Z = {};
      K.T = Z;
      try {
        var tt = x(),
          nt = K.S;
        (nt !== null && nt(Z, tt),
          typeof tt == 'object' && tt !== null && typeof tt.then == 'function' && tt.then(V, it));
      } catch (ot) {
        it(ot);
      } finally {
        (w !== null && Z.types !== null && (w.types = Z.types), (K.T = w));
      }
    }),
    (vt.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (vt.use = function (x) {
      return K.H.use(x);
    }),
    (vt.useActionState = function (x, w, Z) {
      return K.H.useActionState(x, w, Z);
    }),
    (vt.useCallback = function (x, w) {
      return K.H.useCallback(x, w);
    }),
    (vt.useContext = function (x) {
      return K.H.useContext(x);
    }),
    (vt.useDebugValue = function () {}),
    (vt.useDeferredValue = function (x, w) {
      return K.H.useDeferredValue(x, w);
    }),
    (vt.useEffect = function (x, w) {
      return K.H.useEffect(x, w);
    }),
    (vt.useEffectEvent = function (x) {
      return K.H.useEffectEvent(x);
    }),
    (vt.useId = function () {
      return K.H.useId();
    }),
    (vt.useImperativeHandle = function (x, w, Z) {
      return K.H.useImperativeHandle(x, w, Z);
    }),
    (vt.useInsertionEffect = function (x, w) {
      return K.H.useInsertionEffect(x, w);
    }),
    (vt.useLayoutEffect = function (x, w) {
      return K.H.useLayoutEffect(x, w);
    }),
    (vt.useMemo = function (x, w) {
      return K.H.useMemo(x, w);
    }),
    (vt.useOptimistic = function (x, w) {
      return K.H.useOptimistic(x, w);
    }),
    (vt.useReducer = function (x, w, Z) {
      return K.H.useReducer(x, w, Z);
    }),
    (vt.useRef = function (x) {
      return K.H.useRef(x);
    }),
    (vt.useState = function (x) {
      return K.H.useState(x);
    }),
    (vt.useSyncExternalStore = function (x, w, Z) {
      return K.H.useSyncExternalStore(x, w, Z);
    }),
    (vt.useTransition = function () {
      return K.H.useTransition();
    }),
    (vt.version = '19.2.0'),
    vt
  );
}
var Qh;
function Ef() {
  return (Qh || ((Qh = 1), (Zc.exports = hv())), Zc.exports);
}
var H = Ef();
const He = Zm(H),
  uf = fv({ __proto__: null, default: He }, [H]);
var Kc = { exports: {} },
  gr = {},
  Jc = { exports: {} },
  Fc = {};
var Zh;
function mv() {
  return (
    Zh ||
      ((Zh = 1),
      (function (a) {
        function i(z, F) {
          var I = z.length;
          z.push(F);
          t: for (; 0 < I; ) {
            var it = (I - 1) >>> 1,
              yt = z[it];
            if (0 < c(yt, F)) ((z[it] = F), (z[I] = yt), (I = it));
            else break t;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function u(z) {
          if (z.length === 0) return null;
          var F = z[0],
            I = z.pop();
          if (I !== F) {
            z[0] = I;
            t: for (var it = 0, yt = z.length, x = yt >>> 1; it < x; ) {
              var w = 2 * (it + 1) - 1,
                Z = z[w],
                tt = w + 1,
                nt = z[tt];
              if (0 > c(Z, I))
                tt < yt && 0 > c(nt, Z) ? ((z[it] = nt), (z[tt] = I), (it = tt)) : ((z[it] = Z), (z[w] = I), (it = w));
              else if (tt < yt && 0 > c(nt, I)) ((z[it] = nt), (z[tt] = I), (it = tt));
              else break t;
            }
          }
          return F;
        }
        function c(z, F) {
          var I = z.sortIndex - F.sortIndex;
          return I !== 0 ? I : z.id - F.id;
        }
        if (((a.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            h = p.now();
          a.unstable_now = function () {
            return p.now() - h;
          };
        }
        var y = [],
          g = [],
          b = 1,
          S = null,
          A = 3,
          j = !1,
          O = !1,
          T = !1,
          k = !1,
          Y = typeof setTimeout == 'function' ? setTimeout : null,
          P = typeof clearTimeout == 'function' ? clearTimeout : null,
          J = typeof setImmediate < 'u' ? setImmediate : null;
        function q(z) {
          for (var F = o(g); F !== null; ) {
            if (F.callback === null) u(g);
            else if (F.startTime <= z) (u(g), (F.sortIndex = F.expirationTime), i(y, F));
            else break;
            F = o(g);
          }
        }
        function N(z) {
          if (((T = !1), q(z), !O))
            if (o(y) !== null) ((O = !0), V || ((V = !0), v()));
            else {
              var F = o(g);
              F !== null && et(N, F.startTime - z);
            }
        }
        var V = !1,
          K = -1,
          ct = 5,
          st = -1;
        function pt() {
          return k ? !0 : !(a.unstable_now() - st < ct);
        }
        function ft() {
          if (((k = !1), V)) {
            var z = a.unstable_now();
            st = z;
            var F = !0;
            try {
              t: {
                ((O = !1), T && ((T = !1), P(K), (K = -1)), (j = !0));
                var I = A;
                try {
                  e: {
                    for (q(z), S = o(y); S !== null && !(S.expirationTime > z && pt()); ) {
                      var it = S.callback;
                      if (typeof it == 'function') {
                        ((S.callback = null), (A = S.priorityLevel));
                        var yt = it(S.expirationTime <= z);
                        if (((z = a.unstable_now()), typeof yt == 'function')) {
                          ((S.callback = yt), q(z), (F = !0));
                          break e;
                        }
                        (S === o(y) && u(y), q(z));
                      } else u(y);
                      S = o(y);
                    }
                    if (S !== null) F = !0;
                    else {
                      var x = o(g);
                      (x !== null && et(N, x.startTime - z), (F = !1));
                    }
                  }
                  break t;
                } finally {
                  ((S = null), (A = I), (j = !1));
                }
                F = void 0;
              }
            } finally {
              F ? v() : (V = !1);
            }
          }
        }
        var v;
        if (typeof J == 'function')
          v = function () {
            J(ft);
          };
        else if (typeof MessageChannel < 'u') {
          var W = new MessageChannel(),
            X = W.port2;
          ((W.port1.onmessage = ft),
            (v = function () {
              X.postMessage(null);
            }));
        } else
          v = function () {
            Y(ft, 0);
          };
        function et(z, F) {
          K = Y(function () {
            z(a.unstable_now());
          }, F);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (a.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ct = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (a.unstable_next = function (z) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = A;
            }
            var I = A;
            A = F;
            try {
              return z();
            } finally {
              A = I;
            }
          }),
          (a.unstable_requestPaint = function () {
            k = !0;
          }),
          (a.unstable_runWithPriority = function (z, F) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var I = A;
            A = z;
            try {
              return F();
            } finally {
              A = I;
            }
          }),
          (a.unstable_scheduleCallback = function (z, F, I) {
            var it = a.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? it + I : it))
                : (I = it),
              z)
            ) {
              case 1:
                var yt = -1;
                break;
              case 2:
                yt = 250;
                break;
              case 5:
                yt = 1073741823;
                break;
              case 4:
                yt = 1e4;
                break;
              default:
                yt = 5e3;
            }
            return (
              (yt = I + yt),
              (z = { id: b++, callback: F, priorityLevel: z, startTime: I, expirationTime: yt, sortIndex: -1 }),
              I > it
                ? ((z.sortIndex = I),
                  i(g, z),
                  o(y) === null && z === o(g) && (T ? (P(K), (K = -1)) : (T = !0), et(N, I - it)))
                : ((z.sortIndex = yt), i(y, z), O || j || ((O = !0), V || ((V = !0), v()))),
              z
            );
          }),
          (a.unstable_shouldYield = pt),
          (a.unstable_wrapCallback = function (z) {
            var F = A;
            return function () {
              var I = A;
              A = F;
              try {
                return z.apply(this, arguments);
              } finally {
                A = I;
              }
            };
          }));
      })(Fc)),
    Fc
  );
}
var Kh;
function gv() {
  return (Kh || ((Kh = 1), (Jc.exports = mv())), Jc.exports);
}
var Wc = { exports: {} },
  ke = {};
var Jh;
function yv() {
  if (Jh) return ke;
  Jh = 1;
  var a = Ef();
  function i(y) {
    var g = 'https://react.dev/errors/' + y;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) g += '&args[]=' + encodeURIComponent(arguments[b]);
    }
    return (
      'Minified React error #' +
      y +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o() {}
  var u = {
      d: {
        f: o,
        r: function () {
          throw Error(i(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for('react.portal');
  function f(y, g, b) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: S == null ? null : '' + S, children: y, containerInfo: g, implementation: b };
  }
  var p = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(y, g) {
    if (y === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (ke.createPortal = function (y, g) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(i(299));
      return f(y, g, null, b);
    }),
    (ke.flushSync = function (y) {
      var g = p.T,
        b = u.p;
      try {
        if (((p.T = null), (u.p = 2), y)) return y();
      } finally {
        ((p.T = g), (u.p = b), u.d.f());
      }
    }),
    (ke.preconnect = function (y, g) {
      typeof y == 'string' &&
        (g
          ? ((g = g.crossOrigin), (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        u.d.C(y, g));
    }),
    (ke.prefetchDNS = function (y) {
      typeof y == 'string' && u.d.D(y);
    }),
    (ke.preinit = function (y, g) {
      if (typeof y == 'string' && g && typeof g.as == 'string') {
        var b = g.as,
          S = h(b, g.crossOrigin),
          A = typeof g.integrity == 'string' ? g.integrity : void 0,
          j = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        b === 'style'
          ? u.d.S(y, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: j,
            })
          : b === 'script' &&
            u.d.X(y, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: j,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    (ke.preinitModule = function (y, g) {
      if (typeof y == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var b = h(g.as, g.crossOrigin);
            u.d.M(y, {
              crossOrigin: b,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && u.d.M(y);
    }),
    (ke.preload = function (y, g) {
      if (typeof y == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var b = g.as,
          S = h(b, g.crossOrigin);
        u.d.L(y, b, {
          crossOrigin: S,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (ke.preloadModule = function (y, g) {
      if (typeof y == 'string')
        if (g) {
          var b = h(g.as, g.crossOrigin);
          u.d.m(y, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: b,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else u.d.m(y);
    }),
    (ke.requestFormReset = function (y) {
      u.d.r(y);
    }),
    (ke.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (ke.useFormState = function (y, g, b) {
      return p.H.useFormState(y, g, b);
    }),
    (ke.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (ke.version = '19.2.0'),
    ke
  );
}
var Fh;
function Km() {
  if (Fh) return Wc.exports;
  Fh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Wc.exports = yv()), Wc.exports);
}
var Wh;
function vv() {
  if (Wh) return gr;
  Wh = 1;
  var a = gv(),
    i = Ef(),
    o = Km();
  function u(t) {
    var e = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (f(t) !== t) throw Error(u(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (((l = r.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === n) return (y(r), t);
          if (s === l) return (y(r), e);
          s = s.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== l.return) ((n = r), (l = s));
      else {
        for (var d = !1, m = r.child; m; ) {
          if (m === n) {
            ((d = !0), (n = r), (l = s));
            break;
          }
          if (m === l) {
            ((d = !0), (l = r), (n = s));
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = s.child; m; ) {
            if (m === n) {
              ((d = !0), (n = s), (l = r));
              break;
            }
            if (m === l) {
              ((d = !0), (l = s), (n = r));
              break;
            }
            m = m.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (n.alternate !== l) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign,
    A = Symbol.for('react.element'),
    j = Symbol.for('react.transitional.element'),
    O = Symbol.for('react.portal'),
    T = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    Y = Symbol.for('react.profiler'),
    P = Symbol.for('react.consumer'),
    J = Symbol.for('react.context'),
    q = Symbol.for('react.forward_ref'),
    N = Symbol.for('react.suspense'),
    V = Symbol.for('react.suspense_list'),
    K = Symbol.for('react.memo'),
    ct = Symbol.for('react.lazy'),
    st = Symbol.for('react.activity'),
    pt = Symbol.for('react.memo_cache_sentinel'),
    ft = Symbol.iterator;
  function v(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ft && t[ft]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var W = Symbol.for('react.client.reference');
  function X(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === W ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case T:
        return 'Fragment';
      case Y:
        return 'Profiler';
      case k:
        return 'StrictMode';
      case N:
        return 'Suspense';
      case V:
        return 'SuspenseList';
      case st:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case O:
          return 'Portal';
        case J:
          return t.displayName || 'Context';
        case P:
          return (t._context.displayName || 'Context') + '.Consumer';
        case q:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case K:
          return ((e = t.displayName || null), e !== null ? e : X(t.type) || 'Memo');
        case ct:
          ((e = t._payload), (t = t._init));
          try {
            return X(t(e));
          } catch {}
      }
    return null;
  }
  var et = Array.isArray,
    z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    it = [],
    yt = -1;
  function x(t) {
    return { current: t };
  }
  function w(t) {
    0 > yt || ((t.current = it[yt]), (it[yt] = null), yt--);
  }
  function Z(t, e) {
    (yt++, (it[yt] = t.current), (t.current = e));
  }
  var tt = x(null),
    nt = x(null),
    ot = x(null),
    bt = x(null);
  function Ut(t, e) {
    switch ((Z(ot, e), Z(nt, t), Z(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? dh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = dh(e)), (t = ph(e, t)));
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
    (w(tt), Z(tt, t));
  }
  function Rt() {
    (w(tt), w(nt), w(ot));
  }
  function he(t) {
    t.memoizedState !== null && Z(bt, t);
    var e = tt.current,
      n = ph(e, t.type);
    e !== n && (Z(nt, t), Z(tt, n));
  }
  function Se(t) {
    (nt.current === t && (w(tt), w(nt)), bt.current === t && (w(bt), (fr._currentValue = I)));
  }
  var Me, ue;
  function me(t) {
    if (Me === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Me = (e && e[1]) || ''),
          (ue =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Me +
      t +
      ue
    );
  }
  var Et = !1;
  function se(t, e) {
    if (!t || Et) return '';
    Et = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(t, [], Q);
              } else {
                try {
                  Q.call();
                } catch (U) {
                  D = U;
                }
                t.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (Q = t()) && typeof Q.catch == 'function' && Q.catch(function () {});
            }
          } catch (U) {
            if (U && D && typeof U.stack == 'string') return [U.stack, D.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var r = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
      var s = l.DetermineComponentFrameRoot(),
        d = s[0],
        m = s[1];
      if (d && m) {
        var C = d.split(`
`),
          _ = m.split(`
`);
        for (r = l = 0; l < C.length && !C[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; r < _.length && !_[r].includes('DetermineComponentFrameRoot'); ) r++;
        if (l === C.length || r === _.length)
          for (l = C.length - 1, r = _.length - 1; 1 <= l && 0 <= r && C[l] !== _[r]; ) r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (C[l] !== _[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || C[l] !== _[r])) {
                  var L =
                    `
` + C[l].replace(' at new ', ' at ');
                  return (
                    t.displayName && L.includes('<anonymous>') && (L = L.replace('<anonymous>', t.displayName)),
                    L
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      ((Et = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : '') ? me(n) : '';
  }
  function Nt(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return me(t.type);
      case 16:
        return me('Lazy');
      case 13:
        return t.child !== e && e !== null ? me('Suspense Fallback') : me('Suspense');
      case 19:
        return me('SuspenseList');
      case 0:
      case 15:
        return se(t.type, !1);
      case 11:
        return se(t.type.render, !1);
      case 1:
        return se(t.type, !0);
      case 31:
        return me('Activity');
      default:
        return '';
    }
  }
  function le(t) {
    try {
      var e = '',
        n = null;
      do ((e += Nt(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var $e = Object.prototype.hasOwnProperty,
    Ze = a.unstable_scheduleCallback,
    kn = a.unstable_cancelCallback,
    gt = a.unstable_shouldYield,
    va = a.unstable_requestPaint,
    Oe = a.unstable_now,
    lt = a.unstable_getCurrentPriorityLevel,
    at = a.unstable_ImmediatePriority,
    xt = a.unstable_UserBlockingPriority,
    At = a.unstable_NormalPriority,
    Dt = a.unstable_LowPriority,
    zt = a.unstable_IdlePriority,
    Ye = a.log,
    Ke = a.unstable_setDisableYieldValue,
    It = null,
    ie = null;
  function Je(t) {
    if ((typeof Ye == 'function' && Ke(t), ie && typeof ie.setStrictMode == 'function'))
      try {
        ie.setStrictMode(It, t);
      } catch {}
  }
  var qe = Math.clz32 ? Math.clz32 : Ei,
    Ti = Math.log,
    Du = Math.LN2;
  function Ei(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ti(t) / Du) | 0)) | 0);
  }
  var ba = 256,
    Cl = 262144,
    te = 4194304;
  function ee(t) {
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
  function Sa(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      s = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var m = l & 134217727;
    return (
      m !== 0
        ? ((l = m & ~s),
          l !== 0 ? (r = ee(l)) : ((d &= m), d !== 0 ? (r = ee(d)) : n || ((n = m & ~t), n !== 0 && (r = ee(n)))))
        : ((m = l & ~s), m !== 0 ? (r = ee(m)) : d !== 0 ? (r = ee(d)) : n || ((n = l & ~t), n !== 0 && (r = ee(n)))),
      r === 0
        ? 0
        : e !== 0 &&
            e !== r &&
            (e & s) === 0 &&
            ((s = r & -r), (n = e & -e), s >= n || (s === 32 && (n & 4194048) !== 0))
          ? e
          : r
    );
  }
  function Ln(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function _n(t, e) {
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
  function Zf() {
    var t = te;
    return ((te <<= 1), (te & 62914560) === 0 && (te = 4194304), t);
  }
  function ju(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function zi(t, e) {
    ((t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Ig(t, e, n, l, r, s) {
    var d = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var m = t.entanglements,
      C = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var L = 31 - qe(n),
        Q = 1 << L;
      ((m[L] = 0), (C[L] = -1));
      var D = _[L];
      if (D !== null)
        for (_[L] = null, L = 0; L < D.length; L++) {
          var U = D[L];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~Q;
    }
    (l !== 0 && Kf(t, l, 0), s !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(d & ~e)));
  }
  function Kf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - qe(e);
    ((t.entangledLanes |= e), (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Jf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - qe(n),
        r = 1 << l;
      ((r & e) | (t[l] & e) && (t[l] |= e), (n &= ~r));
    }
  }
  function Ff(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Nu(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Nu(t) {
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
  function Uu(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Wf() {
    var t = F.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Uh(t.type));
  }
  function Pf(t, e) {
    var n = F.p;
    try {
      return ((F.p = t), e());
    } finally {
      F.p = n;
    }
  }
  var xa = Math.random().toString(36).slice(2),
    Be = '__reactFiber$' + xa,
    Fe = '__reactProps$' + xa,
    Tl = '__reactContainer$' + xa,
    Hu = '__reactEvents$' + xa,
    t1 = '__reactListeners$' + xa,
    e1 = '__reactHandles$' + xa,
    If = '__reactResources$' + xa,
    Ai = '__reactMarker$' + xa;
  function ku(t) {
    (delete t[Be], delete t[Fe], delete t[Hu], delete t[t1], delete t[e1]);
  }
  function El(t) {
    var e = t[Be];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Tl] || n[Be])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = Sh(t); t !== null; ) {
            if ((n = t[Be])) return n;
            t = Sh(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function zl(t) {
    if ((t = t[Be] || t[Tl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Mi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Al(t) {
    var e = t[If];
    return (e || (e = t[If] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Re(t) {
    t[Ai] = !0;
  }
  var td = new Set(),
    ed = {};
  function Ka(t, e) {
    (Ml(t, e), Ml(t + 'Capture', e));
  }
  function Ml(t, e) {
    for (ed[t] = e, t = 0; t < e.length; t++) td.add(e[t]);
  }
  var n1 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    nd = {},
    ad = {};
  function a1(t) {
    return $e.call(ad, t) ? !0 : $e.call(nd, t) ? !1 : n1.test(t) ? (ad[t] = !0) : ((nd[t] = !0), !1);
  }
  function Ur(t, e, n) {
    if (a1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e);
            return;
          case 'boolean':
            var l = e.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, '' + n);
      }
  }
  function Hr(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, '' + n);
    }
  }
  function Wn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, '' + l);
    }
  }
  function vn(t) {
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
  function ld(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function l1(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof l < 'u' && typeof l.get == 'function' && typeof l.set == 'function') {
      var r = l.get,
        s = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            ((n = '' + d), s.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = '' + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Lu(t) {
    if (!t._valueTracker) {
      var e = ld(t) ? 'checked' : 'value';
      t._valueTracker = l1(t, e, '' + t[e]);
    }
  }
  function id(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = '';
    return (t && (l = ld(t) ? (t.checked ? 'true' : 'false') : t.value), (t = l), t !== n ? (e.setValue(t), !0) : !1);
  }
  function kr(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var i1 = /[\n"\\]/g;
  function bn(t) {
    return t.replace(i1, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function $u(t, e, n, l, r, s, d, m) {
    ((t.name = ''),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean'
        ? (t.type = d)
        : t.removeAttribute('type'),
      e != null
        ? d === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + vn(e))
          : t.value !== '' + vn(e) && (t.value = '' + vn(e))
        : (d !== 'submit' && d !== 'reset') || t.removeAttribute('value'),
      e != null ? Yu(t, d, vn(e)) : n != null ? Yu(t, d, vn(n)) : l != null && t.removeAttribute('value'),
      r == null && s != null && (t.defaultChecked = !!s),
      r != null && (t.checked = r && typeof r != 'function' && typeof r != 'symbol'),
      m != null && typeof m != 'function' && typeof m != 'symbol' && typeof m != 'boolean'
        ? (t.name = '' + vn(m))
        : t.removeAttribute('name'));
  }
  function rd(t, e, n, l, r, s, d, m) {
    if (
      (s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' && (t.type = s),
      e != null || n != null)
    ) {
      if (!((s !== 'submit' && s !== 'reset') || e != null)) {
        Lu(t);
        return;
      }
      ((n = n != null ? '' + vn(n) : ''),
        (e = e != null ? '' + vn(e) : n),
        m || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? r),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (t.checked = m ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean' && (t.name = d),
      Lu(t));
  }
  function Yu(t, e, n) {
    (e === 'number' && kr(t.ownerDocument) === t) || t.defaultValue === '' + n || (t.defaultValue = '' + n);
  }
  function Ol(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        ((r = e.hasOwnProperty('$' + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && l && (t[n].defaultSelected = !0));
    } else {
      for (n = '' + vn(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          ((t[r].selected = !0), l && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function od(t, e, n) {
    if (e != null && ((e = '' + vn(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? '' + vn(n) : '';
  }
  function ud(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(u(92));
        if (et(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (e = n));
    }
    ((n = vn(e)), (t.defaultValue = n), (l = t.textContent), l === n && l !== '' && l !== null && (t.value = l), Lu(t));
  }
  function Rl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var r1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function sd(t, e, n) {
    var l = e.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : l
        ? t.setProperty(e, n)
        : typeof n != 'number' || n === 0 || r1.has(e)
          ? e === 'float'
            ? (t.cssFloat = n)
            : (t[e] = ('' + n).trim())
          : (t[e] = n + 'px');
  }
  function cd(t, e, n) {
    if (e != null && typeof e != 'object') throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? t.setProperty(l, '') : l === 'float' ? (t.cssFloat = '') : (t[l] = ''));
      for (var r in e) ((l = e[r]), e.hasOwnProperty(r) && n[r] !== l && sd(t, r, l));
    } else for (var s in e) e.hasOwnProperty(s) && sd(t, s, e[s]);
  }
  function qu(t) {
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
  var o1 = new Map([
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
      ['xHeight', 'x-height'],
    ]),
    u1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lr(t) {
    return u1.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Pn() {}
  var Gu = null;
  function Vu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var wl = null,
    Bl = null;
  function fd(t) {
    var e = zl(t);
    if (e && (t = e.stateNode)) {
      var n = t[Fe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            ($u(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (e = n.name),
            n.type === 'radio' && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + bn('' + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[Fe] || null;
                if (!r) throw Error(u(90));
                $u(l, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name);
              }
            }
            for (e = 0; e < n.length; e++) ((l = n[e]), l.form === t.form && id(l));
          }
          break t;
        case 'textarea':
          od(t, n.value, n.defaultValue);
          break t;
        case 'select':
          ((e = n.value), e != null && Ol(t, !!n.multiple, e, !1));
      }
    }
  }
  var Xu = !1;
  function dd(t, e, n) {
    if (Xu) return t(e, n);
    Xu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (((Xu = !1), (wl !== null || Bl !== null) && (Mo(), wl && ((e = wl), (t = Bl), (Bl = wl = null), fd(e), t))))
        for (e = 0; e < t.length; e++) fd(t[e]);
    }
  }
  function Oi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[Fe] || null;
    if (l === null) return null;
    n = l[e];
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
        ((l = !l.disabled) ||
          ((t = t.type), (l = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != 'function') throw Error(u(231, e, typeof n));
    return n;
  }
  var In = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    Qu = !1;
  if (In)
    try {
      var Ri = {};
      (Object.defineProperty(Ri, 'passive', {
        get: function () {
          Qu = !0;
        },
      }),
        window.addEventListener('test', Ri, Ri),
        window.removeEventListener('test', Ri, Ri));
    } catch {
      Qu = !1;
    }
  var Ca = null,
    Zu = null,
    $r = null;
  function pd() {
    if ($r) return $r;
    var t,
      e = Zu,
      n = e.length,
      l,
      r = 'value' in Ca ? Ca.value : Ca.textContent,
      s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === r[s - l]; l++);
    return ($r = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Yr(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function qr() {
    return !0;
  }
  function hd() {
    return !1;
  }
  function We(t) {
    function e(n, l, r, s, d) {
      ((this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = d),
        (this.currentTarget = null));
      for (var m in t) t.hasOwnProperty(m) && ((n = t[m]), (this[m] = n ? n(s) : s[m]));
      return (
        (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? qr : hd),
        (this.isPropagationStopped = hd),
        this
      );
    }
    return (
      S(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = qr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = qr));
        },
        persist: function () {},
        isPersistent: qr,
      }),
      e
    );
  }
  var Ja = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gr = We(Ja),
    wi = S({}, Ja, { view: 0, detail: 0 }),
    s1 = We(wi),
    Ku,
    Ju,
    Bi,
    Vr = S({}, wi, {
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
      getModifierState: Wu,
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
          : (t !== Bi &&
              (Bi && t.type === 'mousemove'
                ? ((Ku = t.screenX - Bi.screenX), (Ju = t.screenY - Bi.screenY))
                : (Ju = Ku = 0),
              (Bi = t)),
            Ku);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Ju;
      },
    }),
    md = We(Vr),
    c1 = S({}, Vr, { dataTransfer: 0 }),
    f1 = We(c1),
    d1 = S({}, wi, { relatedTarget: 0 }),
    Fu = We(d1),
    p1 = S({}, Ja, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    h1 = We(p1),
    m1 = S({}, Ja, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    g1 = We(m1),
    y1 = S({}, Ja, { data: 0 }),
    gd = We(y1),
    v1 = {
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
      MozPrintableKey: 'Unidentified',
    },
    b1 = {
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
      224: 'Meta',
    },
    S1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function x1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = S1[t]) ? !!e[t] : !1;
  }
  function Wu() {
    return x1;
  }
  var C1 = S({}, wi, {
      key: function (t) {
        if (t.key) {
          var e = v1[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = Yr(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? b1[t.keyCode] || 'Unidentified'
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
      getModifierState: Wu,
      charCode: function (t) {
        return t.type === 'keypress' ? Yr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress' ? Yr(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
    }),
    T1 = We(C1),
    E1 = S({}, Vr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yd = We(E1),
    z1 = S({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wu,
    }),
    A1 = We(z1),
    M1 = S({}, Ja, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    O1 = We(M1),
    R1 = S({}, Vr, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    w1 = We(R1),
    B1 = S({}, Ja, { newState: 0, oldState: 0 }),
    _1 = We(B1),
    D1 = [9, 13, 27, 32],
    Pu = In && 'CompositionEvent' in window,
    _i = null;
  In && 'documentMode' in document && (_i = document.documentMode);
  var j1 = In && 'TextEvent' in window && !_i,
    vd = In && (!Pu || (_i && 8 < _i && 11 >= _i)),
    bd = ' ',
    Sd = !1;
  function xd(t, e) {
    switch (t) {
      case 'keyup':
        return D1.indexOf(e.keyCode) !== -1;
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
  function Cd(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var _l = !1;
  function N1(t, e) {
    switch (t) {
      case 'compositionend':
        return Cd(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Sd = !0), bd);
      case 'textInput':
        return ((t = e.data), t === bd && Sd ? null : t);
      default:
        return null;
    }
  }
  function U1(t, e) {
    if (_l)
      return t === 'compositionend' || (!Pu && xd(t, e)) ? ((t = pd()), ($r = Zu = Ca = null), (_l = !1), t) : null;
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
        return vd && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var H1 = {
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
    week: !0,
  };
  function Td(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!H1[t.type] : e === 'textarea';
  }
  function Ed(t, e, n, l) {
    (wl ? (Bl ? Bl.push(l) : (Bl = [l])) : (wl = l),
      (e = jo(e, 'onChange')),
      0 < e.length && ((n = new Gr('onChange', 'change', null, n, l)), t.push({ event: n, listeners: e })));
  }
  var Di = null,
    ji = null;
  function k1(t) {
    rh(t, 0);
  }
  function Xr(t) {
    var e = Mi(t);
    if (id(e)) return t;
  }
  function zd(t, e) {
    if (t === 'change') return e;
  }
  var Ad = !1;
  if (In) {
    var Iu;
    if (In) {
      var ts = 'oninput' in document;
      if (!ts) {
        var Md = document.createElement('div');
        (Md.setAttribute('oninput', 'return;'), (ts = typeof Md.oninput == 'function'));
      }
      Iu = ts;
    } else Iu = !1;
    Ad = Iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Od() {
    Di && (Di.detachEvent('onpropertychange', Rd), (ji = Di = null));
  }
  function Rd(t) {
    if (t.propertyName === 'value' && Xr(ji)) {
      var e = [];
      (Ed(e, ji, t, Vu(t)), dd(k1, e));
    }
  }
  function L1(t, e, n) {
    t === 'focusin' ? (Od(), (Di = e), (ji = n), Di.attachEvent('onpropertychange', Rd)) : t === 'focusout' && Od();
  }
  function $1(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Xr(ji);
  }
  function Y1(t, e) {
    if (t === 'click') return Xr(e);
  }
  function q1(t, e) {
    if (t === 'input' || t === 'change') return Xr(e);
  }
  function G1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var sn = typeof Object.is == 'function' ? Object.is : G1;
  function Ni(t, e) {
    if (sn(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!$e.call(e, r) || !sn(t[r], e[r])) return !1;
    }
    return !0;
  }
  function wd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Bd(t, e) {
    var n = wd(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e)) return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = wd(n);
    }
  }
  function _d(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? _d(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Dd(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = kr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = kr(t.document);
    }
    return e;
  }
  function es(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var V1 = In && 'documentMode' in document && 11 >= document.documentMode,
    Dl = null,
    ns = null,
    Ui = null,
    as = !1;
  function jd(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    as ||
      Dl == null ||
      Dl !== kr(l) ||
      ((l = Dl),
      'selectionStart' in l && es(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ui && Ni(Ui, l)) ||
        ((Ui = l),
        (l = jo(ns, 'onSelect')),
        0 < l.length &&
          ((e = new Gr('onSelect', 'select', null, e, n)), t.push({ event: e, listeners: l }), (e.target = Dl))));
  }
  function Fa(t, e) {
    var n = {};
    return ((n[t.toLowerCase()] = e.toLowerCase()), (n['Webkit' + t] = 'webkit' + e), (n['Moz' + t] = 'moz' + e), n);
  }
  var jl = {
      animationend: Fa('Animation', 'AnimationEnd'),
      animationiteration: Fa('Animation', 'AnimationIteration'),
      animationstart: Fa('Animation', 'AnimationStart'),
      transitionrun: Fa('Transition', 'TransitionRun'),
      transitionstart: Fa('Transition', 'TransitionStart'),
      transitioncancel: Fa('Transition', 'TransitionCancel'),
      transitionend: Fa('Transition', 'TransitionEnd'),
    },
    ls = {},
    Nd = {};
  In &&
    ((Nd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete jl.animationend.animation, delete jl.animationiteration.animation, delete jl.animationstart.animation),
    'TransitionEvent' in window || delete jl.transitionend.transition);
  function Wa(t) {
    if (ls[t]) return ls[t];
    if (!jl[t]) return t;
    var e = jl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Nd) return (ls[t] = e[n]);
    return t;
  }
  var Ud = Wa('animationend'),
    Hd = Wa('animationiteration'),
    kd = Wa('animationstart'),
    X1 = Wa('transitionrun'),
    Q1 = Wa('transitionstart'),
    Z1 = Wa('transitioncancel'),
    Ld = Wa('transitionend'),
    $d = new Map(),
    is =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  is.push('scrollEnd');
  function Dn(t, e) {
    ($d.set(t, e), Ka(e, [t]));
  }
  var Qr =
      typeof reportError == 'function'
        ? reportError
        : function (t) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var e = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == 'object' && t !== null && typeof t.message == 'string' ? String(t.message) : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', t);
              return;
            }
            console.error(t);
          },
    Sn = [],
    Nl = 0,
    rs = 0;
  function Zr() {
    for (var t = Nl, e = (rs = Nl = 0); e < t; ) {
      var n = Sn[e];
      Sn[e++] = null;
      var l = Sn[e];
      Sn[e++] = null;
      var r = Sn[e];
      Sn[e++] = null;
      var s = Sn[e];
      if (((Sn[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)), (l.pending = r));
      }
      s !== 0 && Yd(n, r, s);
    }
  }
  function Kr(t, e, n, l) {
    ((Sn[Nl++] = t),
      (Sn[Nl++] = e),
      (Sn[Nl++] = n),
      (Sn[Nl++] = l),
      (rs |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function os(t, e, n, l) {
    return (Kr(t, e, n, l), Jr(t));
  }
  function Pa(t, e) {
    return (Kr(t, null, null, e), Jr(t));
  }
  function Yd(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, s = t.return; s !== null; )
      ((s.childLanes |= n),
        (l = s.alternate),
        l !== null && (l.childLanes |= n),
        s.tag === 22 && ((t = s.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = s),
        (s = s.return));
    return t.tag === 3
      ? ((s = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - qe(n)),
          (t = s.hiddenUpdates),
          (l = t[r]),
          l === null ? (t[r] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        s)
      : null;
  }
  function Jr(t) {
    if (50 < lr) throw ((lr = 0), (gc = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ul = {};
  function K1(t, e, n, l) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function cn(t, e, n, l) {
    return new K1(t, e, n, l);
  }
  function us(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ta(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = cn(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e), (n.type = t.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function qd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Fr(t, e, n, l, r, s) {
    var d = 0;
    if (((l = t), typeof t == 'function')) us(t) && (d = 1);
    else if (typeof t == 'string')
      d = Iy(t, n, tt.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case st:
          return ((t = cn(31, n, e, r)), (t.elementType = st), (t.lanes = s), t);
        case T:
          return Ia(n.children, r, s, e);
        case k:
          ((d = 8), (r |= 24));
          break;
        case Y:
          return ((t = cn(12, n, e, r | 2)), (t.elementType = Y), (t.lanes = s), t);
        case N:
          return ((t = cn(13, n, e, r)), (t.elementType = N), (t.lanes = s), t);
        case V:
          return ((t = cn(19, n, e, r)), (t.elementType = V), (t.lanes = s), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case J:
                d = 10;
                break t;
              case P:
                d = 9;
                break t;
              case q:
                d = 11;
                break t;
              case K:
                d = 14;
                break t;
              case ct:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (n = Error(u(130, t === null ? 'null' : typeof t, ''))), (l = null));
      }
    return ((e = cn(d, n, e, r)), (e.elementType = t), (e.type = l), (e.lanes = s), e);
  }
  function Ia(t, e, n, l) {
    return ((t = cn(7, t, l, e)), (t.lanes = n), t);
  }
  function ss(t, e, n) {
    return ((t = cn(6, t, null, e)), (t.lanes = n), t);
  }
  function Gd(t) {
    var e = cn(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function cs(t, e, n) {
    return (
      (e = cn(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
      e
    );
  }
  var Vd = new WeakMap();
  function xn(t, e) {
    if (typeof t == 'object' && t !== null) {
      var n = Vd.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: le(e) }), Vd.set(t, e), e);
    }
    return { value: t, source: e, stack: le(e) };
  }
  var Hl = [],
    kl = 0,
    Wr = null,
    Hi = 0,
    Cn = [],
    Tn = 0,
    Ta = null,
    $n = 1,
    Yn = '';
  function ea(t, e) {
    ((Hl[kl++] = Hi), (Hl[kl++] = Wr), (Wr = t), (Hi = e));
  }
  function Xd(t, e, n) {
    ((Cn[Tn++] = $n), (Cn[Tn++] = Yn), (Cn[Tn++] = Ta), (Ta = t));
    var l = $n;
    t = Yn;
    var r = 32 - qe(l) - 1;
    ((l &= ~(1 << r)), (n += 1));
    var s = 32 - qe(e) + r;
    if (30 < s) {
      var d = r - (r % 5);
      ((s = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        ($n = (1 << (32 - qe(e) + r)) | (n << r) | l),
        (Yn = s + t));
    } else (($n = (1 << s) | (n << r) | l), (Yn = t));
  }
  function fs(t) {
    t.return !== null && (ea(t, 1), Xd(t, 1, 0));
  }
  function ds(t) {
    for (; t === Wr; ) ((Wr = Hl[--kl]), (Hl[kl] = null), (Hi = Hl[--kl]), (Hl[kl] = null));
    for (; t === Ta; )
      ((Ta = Cn[--Tn]), (Cn[Tn] = null), (Yn = Cn[--Tn]), (Cn[Tn] = null), ($n = Cn[--Tn]), (Cn[Tn] = null));
  }
  function Qd(t, e) {
    ((Cn[Tn++] = $n), (Cn[Tn++] = Yn), (Cn[Tn++] = Ta), ($n = e.id), (Yn = e.overflow), (Ta = t));
  }
  var _e = null,
    ne = null,
    jt = !1,
    Ea = null,
    En = !1,
    ps = Error(u(519));
  function za(t) {
    var e = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
    throw (ki(xn(e, t)), ps);
  }
  function Zd(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[Be] = t), (e[Fe] = l), n)) {
      case 'dialog':
        (Ot('cancel', e), Ot('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ot('load', e);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < rr.length; n++) Ot(rr[n], e);
        break;
      case 'source':
        Ot('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ot('error', e), Ot('load', e));
        break;
      case 'details':
        Ot('toggle', e);
        break;
      case 'input':
        (Ot('invalid', e), rd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        Ot('invalid', e);
        break;
      case 'textarea':
        (Ot('invalid', e), ud(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      e.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      ch(e.textContent, n)
        ? (l.popover != null && (Ot('beforetoggle', e), Ot('toggle', e)),
          l.onScroll != null && Ot('scroll', e),
          l.onScrollEnd != null && Ot('scrollend', e),
          l.onClick != null && (e.onclick = Pn),
          (e = !0))
        : (e = !1),
      e || za(t, !0));
  }
  function Kd(t) {
    for (_e = t.return; _e; )
      switch (_e.tag) {
        case 5:
        case 31:
        case 13:
          En = !1;
          return;
        case 27:
        case 3:
          En = !0;
          return;
        default:
          _e = _e.return;
      }
  }
  function Ll(t) {
    if (t !== _e) return !1;
    if (!jt) return (Kd(t), (jt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) && ((n = t.type), (n = !(n !== 'form' && n !== 'button') || Bc(t.type, t.memoizedProps))),
        (n = !n)),
      n && ne && za(t),
      Kd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(317));
      ne = bh(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(317));
      ne = bh(t);
    } else
      e === 27
        ? ((e = ne), La(t.type) ? ((t = Uc), (Uc = null), (ne = t)) : (ne = e))
        : (ne = _e ? An(t.stateNode.nextSibling) : null);
    return !0;
  }
  function tl() {
    ((ne = _e = null), (jt = !1));
  }
  function hs() {
    var t = Ea;
    return (t !== null && (en === null ? (en = t) : en.push.apply(en, t), (Ea = null)), t);
  }
  function ki(t) {
    Ea === null ? (Ea = [t]) : Ea.push(t);
  }
  var ms = x(null),
    el = null,
    na = null;
  function Aa(t, e, n) {
    (Z(ms, e._currentValue), (e._currentValue = n));
  }
  function aa(t) {
    ((t._currentValue = ms.current), w(ms));
  }
  function gs(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function ys(t, e, n, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var d = r.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var m = s;
          s = r;
          for (var C = 0; C < e.length; C++)
            if (m.context === e[C]) {
              ((s.lanes |= n), (m = s.alternate), m !== null && (m.lanes |= n), gs(s.return, n, t), l || (d = null));
              break t;
            }
          s = m.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(u(341));
        ((d.lanes |= n), (s = d.alternate), s !== null && (s.lanes |= n), gs(d, n, t), (d = null));
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            ((r.return = d.return), (d = r));
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function $l(t, e, n, l) {
    t = null;
    for (var r = e, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(u(387));
        if (((d = d.memoizedProps), d !== null)) {
          var m = r.type;
          sn(r.pendingProps.value, d.value) || (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (r === bt.current) {
        if (((d = r.alternate), d === null)) throw Error(u(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(fr) : (t = [fr]));
      }
      r = r.return;
    }
    (t !== null && ys(e, t, n, l), (e.flags |= 262144));
  }
  function Pr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!sn(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function nl(t) {
    ((el = t), (na = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function De(t) {
    return Jd(el, t);
  }
  function Ir(t, e) {
    return (el === null && nl(t), Jd(t, e));
  }
  function Jd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), na === null)) {
      if (t === null) throw Error(u(308));
      ((na = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else na = na.next = e;
    return n;
  }
  var J1 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    F1 = a.unstable_scheduleCallback,
    W1 = a.unstable_NormalPriority,
    xe = { $$typeof: J, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function vs() {
    return { controller: new J1(), data: new Map(), refCount: 0 };
  }
  function Li(t) {
    (t.refCount--,
      t.refCount === 0 &&
        F1(W1, function () {
          t.controller.abort();
        }));
  }
  var $i = null,
    bs = 0,
    Yl = 0,
    ql = null;
  function P1(t, e) {
    if ($i === null) {
      var n = ($i = []);
      ((bs = 0),
        (Yl = Cc()),
        (ql = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (bs++, e.then(Fd, Fd), e);
  }
  function Fd() {
    if (--bs === 0 && $i !== null) {
      ql !== null && (ql.status = 'fulfilled');
      var t = $i;
      (($i = null), (Yl = 0), (ql = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function I1(t, e) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = e));
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (l.status = 'rejected', l.reason = r, r = 0; r < n.length; r++) (0, n[r])(void 0);
        }
      ),
      l
    );
  }
  var Wd = z.S;
  z.S = function (t, e) {
    ((jp = Oe()),
      typeof e == 'object' && e !== null && typeof e.then == 'function' && P1(t, e),
      Wd !== null && Wd(t, e));
  };
  var al = x(null);
  function Ss() {
    var t = al.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function to(t, e) {
    e === null ? Z(al, al.current) : Z(al, e.pool);
  }
  function Pd() {
    var t = Ss();
    return t === null ? null : { parent: xe._currentValue, pool: t };
  }
  var Gl = Error(u(460)),
    xs = Error(u(474)),
    eo = Error(u(542)),
    no = { then: function () {} };
  function Id(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function t0(t, e, n) {
    switch (((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(Pn, Pn), (e = n)), e.status)) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), n0(t), t);
      default:
        if (typeof e.status == 'string') e.then(Pn, Pn);
        else {
          if (((t = Pt), t !== null && 100 < t.shellSuspendCounter)) throw Error(u(482));
          ((t = e),
            (t.status = 'pending'),
            t.then(
              function (l) {
                if (e.status === 'pending') {
                  var r = e;
                  ((r.status = 'fulfilled'), (r.value = l));
                }
              },
              function (l) {
                if (e.status === 'pending') {
                  var r = e;
                  ((r.status = 'rejected'), (r.reason = l));
                }
              }
            ));
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), n0(t), t);
        }
        throw ((il = e), Gl);
    }
  }
  function ll(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((il = n), Gl) : n;
    }
  }
  var il = null;
  function e0() {
    if (il === null) throw Error(u(459));
    var t = il;
    return ((il = null), t);
  }
  function n0(t) {
    if (t === Gl || t === eo) throw Error(u(483));
  }
  var Vl = null,
    Yi = 0;
  function ao(t) {
    var e = Yi;
    return ((Yi += 1), Vl === null && (Vl = []), t0(Vl, t, e));
  }
  function qi(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function lo(t, e) {
    throw e.$$typeof === A
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(u(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)));
  }
  function a0(t) {
    function e(M, E) {
      if (t) {
        var B = M.deletions;
        B === null ? ((M.deletions = [E]), (M.flags |= 16)) : B.push(E);
      }
    }
    function n(M, E) {
      if (!t) return null;
      for (; E !== null; ) (e(M, E), (E = E.sibling));
      return null;
    }
    function l(M) {
      for (var E = new Map(); M !== null; ) (M.key !== null ? E.set(M.key, M) : E.set(M.index, M), (M = M.sibling));
      return E;
    }
    function r(M, E) {
      return ((M = ta(M, E)), (M.index = 0), (M.sibling = null), M);
    }
    function s(M, E, B) {
      return (
        (M.index = B),
        t
          ? ((B = M.alternate),
            B !== null ? ((B = B.index), B < E ? ((M.flags |= 67108866), E) : B) : ((M.flags |= 67108866), E))
          : ((M.flags |= 1048576), E)
      );
    }
    function d(M) {
      return (t && M.alternate === null && (M.flags |= 67108866), M);
    }
    function m(M, E, B, G) {
      return E === null || E.tag !== 6
        ? ((E = ss(B, M.mode, G)), (E.return = M), E)
        : ((E = r(E, B)), (E.return = M), E);
    }
    function C(M, E, B, G) {
      var dt = B.type;
      return dt === T
        ? L(M, E, B.props.children, G, B.key)
        : E !== null &&
            (E.elementType === dt || (typeof dt == 'object' && dt !== null && dt.$$typeof === ct && ll(dt) === E.type))
          ? ((E = r(E, B.props)), qi(E, B), (E.return = M), E)
          : ((E = Fr(B.type, B.key, B.props, null, M.mode, G)), qi(E, B), (E.return = M), E);
    }
    function _(M, E, B, G) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== B.containerInfo ||
        E.stateNode.implementation !== B.implementation
        ? ((E = cs(B, M.mode, G)), (E.return = M), E)
        : ((E = r(E, B.children || [])), (E.return = M), E);
    }
    function L(M, E, B, G, dt) {
      return E === null || E.tag !== 7
        ? ((E = Ia(B, M.mode, G, dt)), (E.return = M), E)
        : ((E = r(E, B)), (E.return = M), E);
    }
    function Q(M, E, B) {
      if ((typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint')
        return ((E = ss('' + E, M.mode, B)), (E.return = M), E);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case j:
            return ((B = Fr(E.type, E.key, E.props, null, M.mode, B)), qi(B, E), (B.return = M), B);
          case O:
            return ((E = cs(E, M.mode, B)), (E.return = M), E);
          case ct:
            return ((E = ll(E)), Q(M, E, B));
        }
        if (et(E) || v(E)) return ((E = Ia(E, M.mode, B, null)), (E.return = M), E);
        if (typeof E.then == 'function') return Q(M, ao(E), B);
        if (E.$$typeof === J) return Q(M, Ir(M, E), B);
        lo(M, E);
      }
      return null;
    }
    function D(M, E, B, G) {
      var dt = E !== null ? E.key : null;
      if ((typeof B == 'string' && B !== '') || typeof B == 'number' || typeof B == 'bigint')
        return dt !== null ? null : m(M, E, '' + B, G);
      if (typeof B == 'object' && B !== null) {
        switch (B.$$typeof) {
          case j:
            return B.key === dt ? C(M, E, B, G) : null;
          case O:
            return B.key === dt ? _(M, E, B, G) : null;
          case ct:
            return ((B = ll(B)), D(M, E, B, G));
        }
        if (et(B) || v(B)) return dt !== null ? null : L(M, E, B, G, null);
        if (typeof B.then == 'function') return D(M, E, ao(B), G);
        if (B.$$typeof === J) return D(M, E, Ir(M, B), G);
        lo(M, B);
      }
      return null;
    }
    function U(M, E, B, G, dt) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return ((M = M.get(B) || null), m(E, M, '' + G, dt));
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case j:
            return ((M = M.get(G.key === null ? B : G.key) || null), C(E, M, G, dt));
          case O:
            return ((M = M.get(G.key === null ? B : G.key) || null), _(E, M, G, dt));
          case ct:
            return ((G = ll(G)), U(M, E, B, G, dt));
        }
        if (et(G) || v(G)) return ((M = M.get(B) || null), L(E, M, G, dt, null));
        if (typeof G.then == 'function') return U(M, E, B, ao(G), dt);
        if (G.$$typeof === J) return U(M, E, B, Ir(E, G), dt);
        lo(E, G);
      }
      return null;
    }
    function rt(M, E, B, G) {
      for (var dt = null, Ht = null, ut = E, Ct = (E = 0), Bt = null; ut !== null && Ct < B.length; Ct++) {
        ut.index > Ct ? ((Bt = ut), (ut = null)) : (Bt = ut.sibling);
        var kt = D(M, ut, B[Ct], G);
        if (kt === null) {
          ut === null && (ut = Bt);
          break;
        }
        (t && ut && kt.alternate === null && e(M, ut),
          (E = s(kt, E, Ct)),
          Ht === null ? (dt = kt) : (Ht.sibling = kt),
          (Ht = kt),
          (ut = Bt));
      }
      if (Ct === B.length) return (n(M, ut), jt && ea(M, Ct), dt);
      if (ut === null) {
        for (; Ct < B.length; Ct++)
          ((ut = Q(M, B[Ct], G)),
            ut !== null && ((E = s(ut, E, Ct)), Ht === null ? (dt = ut) : (Ht.sibling = ut), (Ht = ut)));
        return (jt && ea(M, Ct), dt);
      }
      for (ut = l(ut); Ct < B.length; Ct++)
        ((Bt = U(ut, M, Ct, B[Ct], G)),
          Bt !== null &&
            (t && Bt.alternate !== null && ut.delete(Bt.key === null ? Ct : Bt.key),
            (E = s(Bt, E, Ct)),
            Ht === null ? (dt = Bt) : (Ht.sibling = Bt),
            (Ht = Bt)));
      return (
        t &&
          ut.forEach(function (Va) {
            return e(M, Va);
          }),
        jt && ea(M, Ct),
        dt
      );
    }
    function ht(M, E, B, G) {
      if (B == null) throw Error(u(151));
      for (
        var dt = null, Ht = null, ut = E, Ct = (E = 0), Bt = null, kt = B.next();
        ut !== null && !kt.done;
        Ct++, kt = B.next()
      ) {
        ut.index > Ct ? ((Bt = ut), (ut = null)) : (Bt = ut.sibling);
        var Va = D(M, ut, kt.value, G);
        if (Va === null) {
          ut === null && (ut = Bt);
          break;
        }
        (t && ut && Va.alternate === null && e(M, ut),
          (E = s(Va, E, Ct)),
          Ht === null ? (dt = Va) : (Ht.sibling = Va),
          (Ht = Va),
          (ut = Bt));
      }
      if (kt.done) return (n(M, ut), jt && ea(M, Ct), dt);
      if (ut === null) {
        for (; !kt.done; Ct++, kt = B.next())
          ((kt = Q(M, kt.value, G)),
            kt !== null && ((E = s(kt, E, Ct)), Ht === null ? (dt = kt) : (Ht.sibling = kt), (Ht = kt)));
        return (jt && ea(M, Ct), dt);
      }
      for (ut = l(ut); !kt.done; Ct++, kt = B.next())
        ((kt = U(ut, M, Ct, kt.value, G)),
          kt !== null &&
            (t && kt.alternate !== null && ut.delete(kt.key === null ? Ct : kt.key),
            (E = s(kt, E, Ct)),
            Ht === null ? (dt = kt) : (Ht.sibling = kt),
            (Ht = kt)));
      return (
        t &&
          ut.forEach(function (cv) {
            return e(M, cv);
          }),
        jt && ea(M, Ct),
        dt
      );
    }
    function Ft(M, E, B, G) {
      if (
        (typeof B == 'object' && B !== null && B.type === T && B.key === null && (B = B.props.children),
        typeof B == 'object' && B !== null)
      ) {
        switch (B.$$typeof) {
          case j:
            t: {
              for (var dt = B.key; E !== null; ) {
                if (E.key === dt) {
                  if (((dt = B.type), dt === T)) {
                    if (E.tag === 7) {
                      (n(M, E.sibling), (G = r(E, B.props.children)), (G.return = M), (M = G));
                      break t;
                    }
                  } else if (
                    E.elementType === dt ||
                    (typeof dt == 'object' && dt !== null && dt.$$typeof === ct && ll(dt) === E.type)
                  ) {
                    (n(M, E.sibling), (G = r(E, B.props)), qi(G, B), (G.return = M), (M = G));
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              B.type === T
                ? ((G = Ia(B.props.children, M.mode, G, B.key)), (G.return = M), (M = G))
                : ((G = Fr(B.type, B.key, B.props, null, M.mode, G)), qi(G, B), (G.return = M), (M = G));
            }
            return d(M);
          case O:
            t: {
              for (dt = B.key; E !== null; ) {
                if (E.key === dt)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === B.containerInfo &&
                    E.stateNode.implementation === B.implementation
                  ) {
                    (n(M, E.sibling), (G = r(E, B.children || [])), (G.return = M), (M = G));
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              ((G = cs(B, M.mode, G)), (G.return = M), (M = G));
            }
            return d(M);
          case ct:
            return ((B = ll(B)), Ft(M, E, B, G));
        }
        if (et(B)) return rt(M, E, B, G);
        if (v(B)) {
          if (((dt = v(B)), typeof dt != 'function')) throw Error(u(150));
          return ((B = dt.call(B)), ht(M, E, B, G));
        }
        if (typeof B.then == 'function') return Ft(M, E, ao(B), G);
        if (B.$$typeof === J) return Ft(M, E, Ir(M, B), G);
        lo(M, B);
      }
      return (typeof B == 'string' && B !== '') || typeof B == 'number' || typeof B == 'bigint'
        ? ((B = '' + B),
          E !== null && E.tag === 6
            ? (n(M, E.sibling), (G = r(E, B)), (G.return = M), (M = G))
            : (n(M, E), (G = ss(B, M.mode, G)), (G.return = M), (M = G)),
          d(M))
        : n(M, E);
    }
    return function (M, E, B, G) {
      try {
        Yi = 0;
        var dt = Ft(M, E, B, G);
        return ((Vl = null), dt);
      } catch (ut) {
        if (ut === Gl || ut === eo) throw ut;
        var Ht = cn(29, ut, null, M.mode);
        return ((Ht.lanes = G), (Ht.return = M), Ht);
      } finally {
      }
    };
  }
  var rl = a0(!0),
    l0 = a0(!1),
    Ma = !1;
  function Cs(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ts(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Oa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ra(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), ($t & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = Jr(t)),
        Yd(t, null, n),
        e
      );
    }
    return (Kr(t, l, e, n), Jr(t));
  }
  function Gi(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Jf(t, n));
    }
  }
  function Es(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var r = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (s === null ? (r = s = d) : (s = s.next = d), (n = n.next));
        } while (n !== null);
        s === null ? (r = s = e) : (s = s.next = e);
      } else r = s = e;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate), t === null ? (n.firstBaseUpdate = e) : (t.next = e), (n.lastBaseUpdate = e));
  }
  var zs = !1;
  function Vi() {
    if (zs) {
      var t = ql;
      if (t !== null) throw t;
    }
  }
  function Xi(t, e, n, l) {
    zs = !1;
    var r = t.updateQueue;
    Ma = !1;
    var s = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      m = r.shared.pending;
    if (m !== null) {
      r.shared.pending = null;
      var C = m,
        _ = C.next;
      ((C.next = null), d === null ? (s = _) : (d.next = _), (d = C));
      var L = t.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (m = L.lastBaseUpdate),
        m !== d && (m === null ? (L.firstBaseUpdate = _) : (m.next = _), (L.lastBaseUpdate = C)));
    }
    if (s !== null) {
      var Q = r.baseState;
      ((d = 0), (L = _ = C = null), (m = s));
      do {
        var D = m.lane & -536870913,
          U = D !== m.lane;
        if (U ? (wt & D) === D : (l & D) === D) {
          (D !== 0 && D === Yl && (zs = !0),
            L !== null && (L = L.next = { lane: 0, tag: m.tag, payload: m.payload, callback: null, next: null }));
          t: {
            var rt = t,
              ht = m;
            D = e;
            var Ft = n;
            switch (ht.tag) {
              case 1:
                if (((rt = ht.payload), typeof rt == 'function')) {
                  Q = rt.call(Ft, Q, D);
                  break t;
                }
                Q = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (((rt = ht.payload), (D = typeof rt == 'function' ? rt.call(Ft, Q, D) : rt), D == null)) break t;
                Q = S({}, Q, D);
                break t;
              case 2:
                Ma = !0;
            }
          }
          ((D = m.callback),
            D !== null &&
              ((t.flags |= 64),
              U && (t.flags |= 8192),
              (U = r.callbacks),
              U === null ? (r.callbacks = [D]) : U.push(D)));
        } else
          ((U = { lane: D, tag: m.tag, payload: m.payload, callback: m.callback, next: null }),
            L === null ? ((_ = L = U), (C = Q)) : (L = L.next = U),
            (d |= D));
        if (((m = m.next), m === null)) {
          if (((m = r.shared.pending), m === null)) break;
          ((U = m), (m = U.next), (U.next = null), (r.lastBaseUpdate = U), (r.shared.pending = null));
        }
      } while (!0);
      (L === null && (C = Q),
        (r.baseState = C),
        (r.firstBaseUpdate = _),
        (r.lastBaseUpdate = L),
        s === null && (r.shared.lanes = 0),
        (ja |= d),
        (t.lanes = d),
        (t.memoizedState = Q));
    }
  }
  function i0(t, e) {
    if (typeof t != 'function') throw Error(u(191, t));
    t.call(e);
  }
  function r0(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) i0(n[t], e);
  }
  var Xl = x(null),
    io = x(0);
  function o0(t, e) {
    ((t = da), Z(io, t), Z(Xl, e), (da = t | e.baseLanes));
  }
  function As() {
    (Z(io, da), Z(Xl, Xl.current));
  }
  function Ms() {
    ((da = io.current), w(Xl), w(io));
  }
  var fn = x(null),
    zn = null;
  function wa(t) {
    var e = t.alternate;
    (Z(ge, ge.current & 1),
      Z(fn, t),
      zn === null && (e === null || Xl.current !== null || e.memoizedState !== null) && (zn = t));
  }
  function Os(t) {
    (Z(ge, ge.current), Z(fn, t), zn === null && (zn = t));
  }
  function u0(t) {
    t.tag === 22 ? (Z(ge, ge.current), Z(fn, t), zn === null && (zn = t)) : Ba();
  }
  function Ba() {
    (Z(ge, ge.current), Z(fn, fn.current));
  }
  function dn(t) {
    (w(fn), zn === t && (zn = null), w(ge));
  }
  var ge = x(0);
  function ro(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || jc(n) || Nc(n))) return e;
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
  var la = 0,
    St = null,
    Kt = null,
    Ce = null,
    oo = !1,
    Ql = !1,
    ol = !1,
    uo = 0,
    Qi = 0,
    Zl = null,
    ty = 0;
  function ce() {
    throw Error(u(321));
  }
  function Rs(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!sn(t[n], e[n])) return !1;
    return !0;
  }
  function ws(t, e, n, l, r, s) {
    return (
      (la = s),
      (St = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? X0 : Xs),
      (ol = !1),
      (s = n(l, r)),
      (ol = !1),
      Ql && (s = c0(e, n, l, r)),
      s0(t),
      s
    );
  }
  function s0(t) {
    z.H = Ji;
    var e = Kt !== null && Kt.next !== null;
    if (((la = 0), (Ce = Kt = St = null), (oo = !1), (Qi = 0), (Zl = null), e)) throw Error(u(300));
    t === null || Te || ((t = t.dependencies), t !== null && Pr(t) && (Te = !0));
  }
  function c0(t, e, n, l) {
    St = t;
    var r = 0;
    do {
      if ((Ql && (Zl = null), (Qi = 0), (Ql = !1), 25 <= r)) throw Error(u(301));
      if (((r += 1), (Ce = Kt = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        ((s.lastEffect = null), (s.events = null), (s.stores = null), s.memoCache != null && (s.memoCache.index = 0));
      }
      ((z.H = Q0), (s = e(n, l)));
    } while (Ql);
    return s;
  }
  function ey() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? Zi(e) : e),
      (t = t.useState()[0]),
      (Kt !== null ? Kt.memoizedState : null) !== t && (St.flags |= 1024),
      e
    );
  }
  function Bs() {
    var t = uo !== 0;
    return ((uo = 0), t);
  }
  function _s(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Ds(t) {
    if (oo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      oo = !1;
    }
    ((la = 0), (Ce = Kt = St = null), (Ql = !1), (Qi = uo = 0), (Zl = null));
  }
  function Ge() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ce === null ? (St.memoizedState = Ce = t) : (Ce = Ce.next = t), Ce);
  }
  function ye() {
    if (Kt === null) {
      var t = St.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Kt.next;
    var e = Ce === null ? St.memoizedState : Ce.next;
    if (e !== null) ((Ce = e), (Kt = t));
    else {
      if (t === null) throw St.alternate === null ? Error(u(467)) : Error(u(310));
      ((Kt = t),
        (t = {
          memoizedState: Kt.memoizedState,
          baseState: Kt.baseState,
          baseQueue: Kt.baseQueue,
          queue: Kt.queue,
          next: null,
        }),
        Ce === null ? (St.memoizedState = Ce = t) : (Ce = Ce.next = t));
    }
    return Ce;
  }
  function so() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zi(t) {
    var e = Qi;
    return (
      (Qi += 1),
      Zl === null && (Zl = []),
      (t = t0(Zl, t, e)),
      (e = St),
      (Ce === null ? e.memoizedState : Ce.next) === null &&
        ((e = e.alternate), (z.H = e === null || e.memoizedState === null ? X0 : Xs)),
      t
    );
  }
  function co(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Zi(t);
      if (t.$$typeof === J) return De(t);
    }
    throw Error(u(438, String(t)));
  }
  function js(t) {
    var e = null,
      n = St.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = St.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = so()), (St.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = pt;
    return (e.index++, n);
  }
  function ia(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function fo(t) {
    var e = ye();
    return Ns(e, Kt, t);
  }
  function Ns(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = n;
    var r = t.baseQueue,
      s = l.pending;
    if (s !== null) {
      if (r !== null) {
        var d = r.next;
        ((r.next = s.next), (s.next = d));
      }
      ((e.baseQueue = r = s), (l.pending = null));
    }
    if (((s = t.baseState), r === null)) t.memoizedState = s;
    else {
      e = r.next;
      var m = (d = null),
        C = null,
        _ = e,
        L = !1;
      do {
        var Q = _.lane & -536870913;
        if (Q !== _.lane ? (wt & Q) === Q : (la & Q) === Q) {
          var D = _.revertLane;
          if (D === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              Q === Yl && (L = !0));
          else if ((la & D) === D) {
            ((_ = _.next), D === Yl && (L = !0));
            continue;
          } else
            ((Q = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              C === null ? ((m = C = Q), (d = s)) : (C = C.next = Q),
              (St.lanes |= D),
              (ja |= D));
          ((Q = _.action), ol && n(s, Q), (s = _.hasEagerState ? _.eagerState : n(s, Q)));
        } else
          ((D = {
            lane: Q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            C === null ? ((m = C = D), (d = s)) : (C = C.next = D),
            (St.lanes |= Q),
            (ja |= Q));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if ((C === null ? (d = s) : (C.next = m), !sn(s, t.memoizedState) && ((Te = !0), L && ((n = ql), n !== null))))
        throw n;
      ((t.memoizedState = s), (t.baseState = d), (t.baseQueue = C), (l.lastRenderedState = s));
    }
    return (r === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Us(t) {
    var e = ye(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      r = n.pending,
      s = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var d = (r = r.next);
      do ((s = t(s, d.action)), (d = d.next));
      while (d !== r);
      (sn(s, e.memoizedState) || (Te = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, l];
  }
  function f0(t, e, n) {
    var l = St,
      r = ye(),
      s = jt;
    if (s) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var d = !sn((Kt || r).memoizedState, n);
    if (
      (d && ((r.memoizedState = n), (Te = !0)),
      (r = r.queue),
      Ls(h0.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (Ce !== null && Ce.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Kl(9, { destroy: void 0 }, p0.bind(null, l, r, n, e), null), Pt === null))
        throw Error(u(349));
      s || (la & 127) !== 0 || d0(l, e, n);
    }
    return n;
  }
  function d0(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = St.updateQueue),
      e === null
        ? ((e = so()), (St.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function p0(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), m0(e) && g0(t));
  }
  function h0(t, e, n) {
    return n(function () {
      m0(e) && g0(t);
    });
  }
  function m0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !sn(t, n);
    } catch {
      return !0;
    }
  }
  function g0(t) {
    var e = Pa(t, 2);
    e !== null && nn(e, t, 2);
  }
  function Hs(t) {
    var e = Ge();
    if (typeof t == 'function') {
      var n = t;
      if (((t = n()), ol)) {
        Je(!0);
        try {
          n();
        } finally {
          Je(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: t }),
      e
    );
  }
  function y0(t, e, n, l) {
    return ((t.baseState = n), Ns(t, Kt, typeof l == 'function' ? l : ia));
  }
  function ny(t, e, n, l, r) {
    if (mo(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var s = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          s.listeners.push(d);
        },
      };
      (z.T !== null ? n(!0) : (s.isTransition = !1),
        l(s),
        (n = e.pending),
        n === null ? ((s.next = e.pending = s), v0(e, s)) : ((s.next = n.next), (e.pending = n.next = s)));
    }
  }
  function v0(t, e) {
    var n = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var s = z.T,
        d = {};
      z.T = d;
      try {
        var m = n(r, l),
          C = z.S;
        (C !== null && C(d, m), b0(t, e, m));
      } catch (_) {
        ks(t, e, _);
      } finally {
        (s !== null && d.types !== null && (s.types = d.types), (z.T = s));
      }
    } else
      try {
        ((s = n(r, l)), b0(t, e, s));
      } catch (_) {
        ks(t, e, _);
      }
  }
  function b0(t, e, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            S0(t, e, l);
          },
          function (l) {
            return ks(t, e, l);
          }
        )
      : S0(t, e, n);
  }
  function S0(t, e, n) {
    ((e.status = 'fulfilled'),
      (e.value = n),
      x0(e),
      (t.state = n),
      (e = t.pending),
      e !== null && ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), v0(t, n))));
  }
  function ks(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = 'rejected'), (e.reason = n), x0(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function x0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function C0(t, e) {
    return e;
  }
  function T0(t, e) {
    if (jt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var l = St;
          if (jt) {
            if (ne) {
              e: {
                for (var r = ne, s = En; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break e;
                  }
                  if (((r = An(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((s = r.data), (r = s === 'F!' || s === 'F' ? r : null));
              }
              if (r) {
                ((ne = An(r.nextSibling)), (l = r.data === 'F!'));
                break t;
              }
            }
            za(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = Ge()),
      (n.memoizedState = n.baseState = e),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: C0, lastRenderedState: e }),
      (n.queue = l),
      (n = q0.bind(null, St, l)),
      (l.dispatch = n),
      (l = Hs(!1)),
      (s = Vs.bind(null, St, !1, l.queue)),
      (l = Ge()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = ny.bind(null, St, r, s, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function E0(t) {
    var e = ye();
    return z0(e, Kt, t);
  }
  function z0(t, e, n) {
    if (((e = Ns(t, e, C0)[0]), (t = fo(ia)[0]), typeof e == 'object' && e !== null && typeof e.then == 'function'))
      try {
        var l = Zi(e);
      } catch (d) {
        throw d === Gl ? eo : d;
      }
    else l = e;
    e = ye();
    var r = e.queue,
      s = r.dispatch;
    return (
      n !== e.memoizedState && ((St.flags |= 2048), Kl(9, { destroy: void 0 }, ay.bind(null, r, n), null)),
      [l, s, t]
    );
  }
  function ay(t, e) {
    t.action = e;
  }
  function A0(t) {
    var e = ye(),
      n = Kt;
    if (n !== null) return z0(e, n, t);
    (ye(), (e = e.memoizedState), (n = ye()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function Kl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = St.updateQueue),
      e === null && ((e = so()), (St.updateQueue = e)),
      (n = e.lastEffect),
      n === null ? (e.lastEffect = t.next = t) : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function M0() {
    return ye().memoizedState;
  }
  function po(t, e, n, l) {
    var r = Ge();
    ((St.flags |= t), (r.memoizedState = Kl(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function ho(t, e, n, l) {
    var r = ye();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    Kt !== null && l !== null && Rs(l, Kt.memoizedState.deps)
      ? (r.memoizedState = Kl(e, s, n, l))
      : ((St.flags |= t), (r.memoizedState = Kl(1 | e, s, n, l)));
  }
  function O0(t, e) {
    po(8390656, 8, t, e);
  }
  function Ls(t, e) {
    ho(2048, 8, t, e);
  }
  function ly(t) {
    St.flags |= 4;
    var e = St.updateQueue;
    if (e === null) ((e = so()), (St.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function R0(t) {
    var e = ye().memoizedState;
    return (
      ly({ ref: e, nextImpl: t }),
      function () {
        if (($t & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function w0(t, e) {
    return ho(4, 2, t, e);
  }
  function B0(t, e) {
    return ho(4, 4, t, e);
  }
  function _0(t, e) {
    if (typeof e == 'function') {
      t = t();
      var n = e(t);
      return function () {
        typeof n == 'function' ? n() : e(null);
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
  function D0(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ho(4, 4, _0.bind(null, e, t), n));
  }
  function $s() {}
  function j0(t, e) {
    var n = ye();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Rs(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function N0(t, e) {
    var n = ye();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Rs(e, l[1])) return l[0];
    if (((l = t()), ol)) {
      Je(!0);
      try {
        t();
      } finally {
        Je(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function Ys(t, e, n) {
    return n === void 0 || ((la & 1073741824) !== 0 && (wt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Up()), (St.lanes |= t), (ja |= t), n);
  }
  function U0(t, e, n, l) {
    return sn(n, e)
      ? n
      : Xl.current !== null
        ? ((t = Ys(t, n, l)), sn(t, e) || (Te = !0), t)
        : (la & 42) === 0 || ((la & 1073741824) !== 0 && (wt & 261930) === 0)
          ? ((Te = !0), (t.memoizedState = n))
          : ((t = Up()), (St.lanes |= t), (ja |= t), e);
  }
  function H0(t, e, n, l, r) {
    var s = F.p;
    F.p = s !== 0 && 8 > s ? s : 8;
    var d = z.T,
      m = {};
    ((z.T = m), Vs(t, !1, e, n));
    try {
      var C = r(),
        _ = z.S;
      if ((_ !== null && _(m, C), C !== null && typeof C == 'object' && typeof C.then == 'function')) {
        var L = I1(C, l);
        Ki(t, e, L, mn(t));
      } else Ki(t, e, l, mn(t));
    } catch (Q) {
      Ki(t, e, { then: function () {}, status: 'rejected', reason: Q }, mn());
    } finally {
      ((F.p = s), d !== null && m.types !== null && (d.types = m.types), (z.T = d));
    }
  }
  function iy() {}
  function qs(t, e, n, l) {
    if (t.tag !== 5) throw Error(u(476));
    var r = k0(t).queue;
    H0(
      t,
      r,
      e,
      I,
      n === null
        ? iy
        : function () {
            return (L0(t), n(l));
          }
    );
  }
  function k0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: I },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: n },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function L0(t) {
    var e = k0(t);
    (e.next === null && (e = t.alternate.memoizedState), Ki(t, e.next.queue, {}, mn()));
  }
  function Gs() {
    return De(fr);
  }
  function $0() {
    return ye().memoizedState;
  }
  function Y0() {
    return ye().memoizedState;
  }
  function ry(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = mn();
          t = Oa(n);
          var l = Ra(e, t, n);
          (l !== null && (nn(l, e, n), Gi(l, e, n)), (e = { cache: vs() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function oy(t, e, n) {
    var l = mn();
    ((n = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
      mo(t) ? G0(e, n) : ((n = os(t, e, n, l)), n !== null && (nn(n, t, l), V0(n, e, l))));
  }
  function q0(t, e, n) {
    var l = mn();
    Ki(t, e, n, l);
  }
  function Ki(t, e, n, l) {
    var r = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mo(t)) G0(e, r);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
        try {
          var d = e.lastRenderedState,
            m = s(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = m), sn(m, d))) return (Kr(t, e, r, 0), Pt === null && Zr(), !1);
        } catch {
        } finally {
        }
      if (((n = os(t, e, r, l)), n !== null)) return (nn(n, t, l), V0(n, e, l), !0);
    }
    return !1;
  }
  function Vs(t, e, n, l) {
    if (
      ((l = { lane: 2, revertLane: Cc(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
      mo(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = os(t, n, l, 2)), e !== null && nn(e, t, 2));
  }
  function mo(t) {
    var e = t.alternate;
    return t === St || (e !== null && e === St);
  }
  function G0(t, e) {
    Ql = oo = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function V0(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Jf(t, n));
    }
  }
  var Ji = {
    readContext: De,
    use: co,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useLayoutEffect: ce,
    useInsertionEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useSyncExternalStore: ce,
    useId: ce,
    useHostTransitionStatus: ce,
    useFormState: ce,
    useActionState: ce,
    useOptimistic: ce,
    useMemoCache: ce,
    useCacheRefresh: ce,
  };
  Ji.useEffectEvent = ce;
  var X0 = {
      readContext: De,
      use: co,
      useCallback: function (t, e) {
        return ((Ge().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: De,
      useEffect: O0,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), po(4194308, 4, _0.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return po(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        po(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = Ge();
        e = e === void 0 ? null : e;
        var l = t();
        if (ol) {
          Je(!0);
          try {
            t();
          } finally {
            Je(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = Ge();
        if (n !== void 0) {
          var r = n(e);
          if (ol) {
            Je(!0);
            try {
              n(e);
            } finally {
              Je(!1);
            }
          }
        } else r = e;
        return (
          (l.memoizedState = l.baseState = r),
          (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }),
          (l.queue = t),
          (t = t.dispatch = oy.bind(null, St, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ge();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Hs(t);
        var e = t.queue,
          n = q0.bind(null, St, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: $s,
      useDeferredValue: function (t, e) {
        var n = Ge();
        return Ys(n, t, e);
      },
      useTransition: function () {
        var t = Hs(!1);
        return ((t = H0.bind(null, St, t.queue, !0, !1)), (Ge().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var l = St,
          r = Ge();
        if (jt) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Pt === null)) throw Error(u(349));
          (wt & 127) !== 0 || d0(l, e, n);
        }
        r.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (r.queue = s),
          O0(h0.bind(null, l, s, t), [t]),
          (l.flags |= 2048),
          Kl(9, { destroy: void 0 }, p0.bind(null, l, s, n, e), null),
          n
        );
      },
      useId: function () {
        var t = Ge(),
          e = Pt.identifierPrefix;
        if (jt) {
          var n = Yn,
            l = $n;
          ((n = (l & ~(1 << (32 - qe(l) - 1))).toString(32) + n),
            (e = '_' + e + 'R_' + n),
            (n = uo++),
            0 < n && (e += 'H' + n.toString(32)),
            (e += '_'));
        } else ((n = ty++), (e = '_' + e + 'r_' + n.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Gs,
      useFormState: T0,
      useActionState: T0,
      useOptimistic: function (t) {
        var e = Ge();
        e.memoizedState = e.baseState = t;
        var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = n), (e = Vs.bind(null, St, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: js,
      useCacheRefresh: function () {
        return (Ge().memoizedState = ry.bind(null, St));
      },
      useEffectEvent: function (t) {
        var e = Ge(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if (($t & 2) !== 0) throw Error(u(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Xs = {
      readContext: De,
      use: co,
      useCallback: j0,
      useContext: De,
      useEffect: Ls,
      useImperativeHandle: D0,
      useInsertionEffect: w0,
      useLayoutEffect: B0,
      useMemo: N0,
      useReducer: fo,
      useRef: M0,
      useState: function () {
        return fo(ia);
      },
      useDebugValue: $s,
      useDeferredValue: function (t, e) {
        var n = ye();
        return U0(n, Kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = fo(ia)[0],
          e = ye().memoizedState;
        return [typeof t == 'boolean' ? t : Zi(t), e];
      },
      useSyncExternalStore: f0,
      useId: $0,
      useHostTransitionStatus: Gs,
      useFormState: E0,
      useActionState: E0,
      useOptimistic: function (t, e) {
        var n = ye();
        return y0(n, Kt, t, e);
      },
      useMemoCache: js,
      useCacheRefresh: Y0,
    };
  Xs.useEffectEvent = R0;
  var Q0 = {
    readContext: De,
    use: co,
    useCallback: j0,
    useContext: De,
    useEffect: Ls,
    useImperativeHandle: D0,
    useInsertionEffect: w0,
    useLayoutEffect: B0,
    useMemo: N0,
    useReducer: Us,
    useRef: M0,
    useState: function () {
      return Us(ia);
    },
    useDebugValue: $s,
    useDeferredValue: function (t, e) {
      var n = ye();
      return Kt === null ? Ys(n, t, e) : U0(n, Kt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Us(ia)[0],
        e = ye().memoizedState;
      return [typeof t == 'boolean' ? t : Zi(t), e];
    },
    useSyncExternalStore: f0,
    useId: $0,
    useHostTransitionStatus: Gs,
    useFormState: A0,
    useActionState: A0,
    useOptimistic: function (t, e) {
      var n = ye();
      return Kt !== null ? y0(n, Kt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: js,
    useCacheRefresh: Y0,
  };
  Q0.useEffectEvent = R0;
  function Qs(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : S({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Zs = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = mn(),
        r = Oa(l);
      ((r.payload = e), n != null && (r.callback = n), (e = Ra(t, r, l)), e !== null && (nn(e, t, l), Gi(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = mn(),
        r = Oa(l);
      ((r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Ra(t, r, l)),
        e !== null && (nn(e, t, l), Gi(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = mn(),
        l = Oa(n);
      ((l.tag = 2), e != null && (l.callback = e), (e = Ra(t, l, n)), e !== null && (nn(e, t, n), Gi(e, t, n)));
    },
  };
  function Z0(t, e, n, l, r, s, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, s, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ni(n, l) || !Ni(r, s)
          : !0
    );
  }
  function K0(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' && e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && Zs.enqueueReplaceState(e, e.state, null));
  }
  function ul(t, e) {
    var n = e;
    if ('ref' in e) {
      n = {};
      for (var l in e) l !== 'ref' && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = S({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function J0(t) {
    Qr(t);
  }
  function F0(t) {
    console.error(t);
  }
  function W0(t) {
    Qr(t);
  }
  function go(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function P0(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Ks(t, e, n) {
    return (
      (n = Oa(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        go(t, e);
      }),
      n
    );
  }
  function I0(t) {
    return ((t = Oa(t)), (t.tag = 3), t);
  }
  function tp(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = l.value;
      ((t.payload = function () {
        return r(s);
      }),
        (t.callback = function () {
          P0(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == 'function' &&
      (t.callback = function () {
        (P0(e, n, l), typeof r != 'function' && (Na === null ? (Na = new Set([this])) : Na.add(this)));
        var m = l.stack;
        this.componentDidCatch(l.value, { componentStack: m !== null ? m : '' });
      });
  }
  function uy(t, e, n, l, r) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((e = n.alternate), e !== null && $l(e, n, r, !0), (n = fn.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              zn === null ? Oo() : n.alternate === null && fe === 0 && (fe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === no
                ? (n.flags |= 16384)
                : ((e = n.updateQueue), e === null ? (n.updateQueue = new Set([l])) : e.add(l), bc(t, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === no
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  bc(t, l, r)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (bc(t, l, r), Oo(), !1);
    }
    if (jt)
      return (
        (e = fn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== ps && ((t = Error(u(422), { cause: l })), ki(xn(t, n))))
          : (l !== ps && ((e = Error(u(423), { cause: l })), ki(xn(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = xn(l, n)),
            (r = Ks(t.stateNode, l, r)),
            Es(t, r),
            fe !== 4 && (fe = 2)),
        !1
      );
    var s = Error(u(520), { cause: l });
    if (((s = xn(s, n)), ar === null ? (ar = [s]) : ar.push(s), fe !== 4 && (fe = 2), e === null)) return !0;
    ((l = xn(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return ((n.flags |= 65536), (t = r & -r), (n.lanes |= t), (t = Ks(n.stateNode, l, t)), Es(n, t), !1);
        case 1:
          if (
            ((e = n.type),
            (s = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (s !== null && typeof s.componentDidCatch == 'function' && (Na === null || !Na.has(s)))))
          )
            return ((n.flags |= 65536), (r &= -r), (n.lanes |= r), (r = I0(r)), tp(r, t, n, l), Es(n, r), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Js = Error(u(461)),
    Te = !1;
  function je(t, e, n, l) {
    e.child = t === null ? l0(e, null, n, l) : rl(e, t.child, n, l);
  }
  function ep(t, e, n, l, r) {
    n = n.render;
    var s = e.ref;
    if ('ref' in l) {
      var d = {};
      for (var m in l) m !== 'ref' && (d[m] = l[m]);
    } else d = l;
    return (
      nl(e),
      (l = ws(t, e, n, d, s, r)),
      (m = Bs()),
      t !== null && !Te ? (_s(t, e, r), ra(t, e, r)) : (jt && m && fs(e), (e.flags |= 1), je(t, e, l, r), e.child)
    );
  }
  function np(t, e, n, l, r) {
    if (t === null) {
      var s = n.type;
      return typeof s == 'function' && !us(s) && s.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = s), ap(t, e, s, l, r))
        : ((t = Fr(n.type, null, l, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((s = t.child), !ac(t, r))) {
      var d = s.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Ni), n(d, l) && t.ref === e.ref)) return ra(t, e, r);
    }
    return ((e.flags |= 1), (t = ta(s, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function ap(t, e, n, l, r) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Ni(s, l) && t.ref === e.ref)
        if (((Te = !1), (e.pendingProps = l = s), ac(t, r))) (t.flags & 131072) !== 0 && (Te = !0);
        else return ((e.lanes = t.lanes), ra(t, e, r));
    }
    return Fs(t, e, n, l, r);
  }
  function lp(t, e, n, l) {
    var r = l.children,
      s = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      l.mode === 'hidden')
    ) {
      if ((e.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, r = 0; l !== null; ) ((r = r | l.lanes | l.childLanes), (l = l.sibling));
          l = r & ~s;
        } else ((l = 0), (e.child = null));
        return ip(t, e, s, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && to(e, s !== null ? s.cachePool : null),
          s !== null ? o0(e, s) : As(),
          u0(e));
      else return ((l = e.lanes = 536870912), ip(t, e, s !== null ? s.baseLanes | n : n, n, l));
    } else
      s !== null
        ? (to(e, s.cachePool), o0(e, s), Ba(), (e.memoizedState = null))
        : (t !== null && to(e, null), As(), Ba());
    return (je(t, e, r, n), e.child);
  }
  function Fi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      e.sibling
    );
  }
  function ip(t, e, n, l, r) {
    var s = Ss();
    return (
      (s = s === null ? null : { parent: xe._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && to(e, null),
      As(),
      u0(e),
      t !== null && $l(t, e, l, !0),
      (e.childLanes = r),
      null
    );
  }
  function yo(t, e) {
    return (
      (e = bo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function rp(t, e, n) {
    return (rl(e, t.child, null, n), (t = yo(e, e.pendingProps)), (t.flags |= 2), dn(e), (e.memoizedState = null), t);
  }
  function sy(t, e, n) {
    var l = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (jt) {
        if (l.mode === 'hidden') return ((t = yo(e, l)), (e.lanes = 536870912), Fi(null, t));
        if (
          (Os(e),
          (t = ne)
            ? ((t = vh(t, En)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ta !== null ? { id: $n, overflow: Yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Gd(t)),
                (n.return = e),
                (e.child = n),
                (_e = e),
                (ne = null)))
            : (t = null),
          t === null)
        )
          throw za(e);
        return ((e.lanes = 536870912), null);
      }
      return yo(e, l);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if ((Os(e), r))
        if (e.flags & 256) ((e.flags &= -257), (e = rp(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if ((Te || $l(t, e, n, !1), (r = (n & t.childLanes) !== 0), Te || r)) {
        if (((l = Pt), l !== null && ((d = Ff(l, n)), d !== 0 && d !== s.retryLane)))
          throw ((s.retryLane = d), Pa(t, d), nn(l, t, d), Js);
        (Oo(), (e = rp(t, e, n)));
      } else
        ((t = s.treeContext),
          (ne = An(d.nextSibling)),
          (_e = e),
          (jt = !0),
          (Ea = null),
          (En = !1),
          t !== null && Qd(e, t),
          (e = yo(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = ta(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function vo(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Fs(t, e, n, l, r) {
    return (
      nl(e),
      (n = ws(t, e, n, l, void 0, r)),
      (l = Bs()),
      t !== null && !Te ? (_s(t, e, r), ra(t, e, r)) : (jt && l && fs(e), (e.flags |= 1), je(t, e, n, r), e.child)
    );
  }
  function op(t, e, n, l, r, s) {
    return (
      nl(e),
      (e.updateQueue = null),
      (n = c0(e, l, n, r)),
      s0(t),
      (l = Bs()),
      t !== null && !Te ? (_s(t, e, s), ra(t, e, s)) : (jt && l && fs(e), (e.flags |= 1), je(t, e, n, s), e.child)
    );
  }
  function up(t, e, n, l, r) {
    if ((nl(e), e.stateNode === null)) {
      var s = Ul,
        d = n.contextType;
      (typeof d == 'object' && d !== null && (s = De(d)),
        (s = new n(l, s)),
        (e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Zs),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = l),
        (s.state = e.memoizedState),
        (s.refs = {}),
        Cs(e),
        (d = n.contextType),
        (s.context = typeof d == 'object' && d !== null ? De(d) : Ul),
        (s.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == 'function' && (Qs(e, n, d, l), (s.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof s.getSnapshotBeforeUpdate == 'function' ||
          (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
          ((d = s.state),
          typeof s.componentWillMount == 'function' && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
          d !== s.state && Zs.enqueueReplaceState(s, s.state, null),
          Xi(e, l, s, r),
          Vi(),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      s = e.stateNode;
      var m = e.memoizedProps,
        C = ul(n, m);
      s.props = C;
      var _ = s.context,
        L = n.contextType;
      ((d = Ul), typeof L == 'object' && L !== null && (d = De(L)));
      var Q = n.getDerivedStateFromProps;
      ((L = typeof Q == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'),
        (m = e.pendingProps !== m),
        L ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((m || _ !== d) && K0(e, s, l, d)),
        (Ma = !1));
      var D = e.memoizedState;
      ((s.state = D),
        Xi(e, l, s, r),
        Vi(),
        (_ = e.memoizedState),
        m || D !== _ || Ma
          ? (typeof Q == 'function' && (Qs(e, n, Q, l), (_ = e.memoizedState)),
            (C = Ma || Z0(e, n, C, l, D, _, d))
              ? (L ||
                  (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                  (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = _)),
            (s.props = l),
            (s.state = _),
            (s.context = d),
            (l = C))
          : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308), (l = !1)));
    } else {
      ((s = e.stateNode),
        Ts(t, e),
        (d = e.memoizedProps),
        (L = ul(n, d)),
        (s.props = L),
        (Q = e.pendingProps),
        (D = s.context),
        (_ = n.contextType),
        (C = Ul),
        typeof _ == 'object' && _ !== null && (C = De(_)),
        (m = n.getDerivedStateFromProps),
        (_ = typeof m == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((d !== Q || D !== C) && K0(e, s, l, C)),
        (Ma = !1),
        (D = e.memoizedState),
        (s.state = D),
        Xi(e, l, s, r),
        Vi());
      var U = e.memoizedState;
      d !== Q || D !== U || Ma || (t !== null && t.dependencies !== null && Pr(t.dependencies))
        ? (typeof m == 'function' && (Qs(e, n, m, l), (U = e.memoizedState)),
          (L = Ma || Z0(e, n, L, l, D, U, C) || (t !== null && t.dependencies !== null && Pr(t.dependencies)))
            ? (_ ||
                (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
                (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(l, U, C),
                typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(l, U, C)),
              typeof s.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof s.componentDidUpdate != 'function' ||
                (d === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != 'function' ||
                (d === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = U)),
          (s.props = l),
          (s.state = U),
          (s.context = C),
          (l = L))
        : (typeof s.componentDidUpdate != 'function' ||
            (d === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != 'function' ||
            (d === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (s = l),
      vo(t, e),
      (l = (e.flags & 128) !== 0),
      s || l
        ? ((s = e.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : s.render()),
          (e.flags |= 1),
          t !== null && l ? ((e.child = rl(e, t.child, null, r)), (e.child = rl(e, null, n, r))) : je(t, e, n, r),
          (e.memoizedState = s.state),
          (t = e.child))
        : (t = ra(t, e, r)),
      t
    );
  }
  function sp(t, e, n, l) {
    return (tl(), (e.flags |= 256), je(t, e, n, l), e.child);
  }
  var Ws = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ps(t) {
    return { baseLanes: t, cachePool: Pd() };
  }
  function Is(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= hn), t);
  }
  function cp(t, e, n) {
    var l = e.pendingProps,
      r = !1,
      s = (e.flags & 128) !== 0,
      d;
    if (
      ((d = s) || (d = t !== null && t.memoizedState === null ? !1 : (ge.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (jt) {
        if (
          (r ? wa(e) : Ba(),
          (t = ne)
            ? ((t = vh(t, En)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ta !== null ? { id: $n, overflow: Yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Gd(t)),
                (n.return = e),
                (e.child = n),
                (_e = e),
                (ne = null)))
            : (t = null),
          t === null)
        )
          throw za(e);
        return (Nc(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var m = l.children;
      return (
        (l = l.fallback),
        r
          ? (Ba(),
            (r = e.mode),
            (m = bo({ mode: 'hidden', children: m }, r)),
            (l = Ia(l, r, n, null)),
            (m.return = e),
            (l.return = e),
            (m.sibling = l),
            (e.child = m),
            (l = e.child),
            (l.memoizedState = Ps(n)),
            (l.childLanes = Is(t, d, n)),
            (e.memoizedState = Ws),
            Fi(null, l))
          : (wa(e), tc(e, m))
      );
    }
    var C = t.memoizedState;
    if (C !== null && ((m = C.dehydrated), m !== null)) {
      if (s)
        e.flags & 256
          ? (wa(e), (e.flags &= -257), (e = ec(t, e, n)))
          : e.memoizedState !== null
            ? (Ba(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Ba(),
              (m = l.fallback),
              (r = e.mode),
              (l = bo({ mode: 'visible', children: l.children }, r)),
              (m = Ia(m, r, n, null)),
              (m.flags |= 2),
              (l.return = e),
              (m.return = e),
              (l.sibling = m),
              (e.child = l),
              rl(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = Ps(n)),
              (l.childLanes = Is(t, d, n)),
              (e.memoizedState = Ws),
              (e = Fi(null, l)));
      else if ((wa(e), Nc(m))) {
        if (((d = m.nextSibling && m.nextSibling.dataset), d)) var _ = d.dgst;
        ((d = _),
          (l = Error(u(419))),
          (l.stack = ''),
          (l.digest = d),
          ki({ value: l, source: null, stack: null }),
          (e = ec(t, e, n)));
      } else if ((Te || $l(t, e, n, !1), (d = (n & t.childLanes) !== 0), Te || d)) {
        if (((d = Pt), d !== null && ((l = Ff(d, n)), l !== 0 && l !== C.retryLane)))
          throw ((C.retryLane = l), Pa(t, l), nn(d, t, l), Js);
        (jc(m) || Oo(), (e = ec(t, e, n)));
      } else
        jc(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = C.treeContext),
            (ne = An(m.nextSibling)),
            (_e = e),
            (jt = !0),
            (Ea = null),
            (En = !1),
            t !== null && Qd(e, t),
            (e = tc(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (Ba(),
        (m = l.fallback),
        (r = e.mode),
        (C = t.child),
        (_ = C.sibling),
        (l = ta(C, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = C.subtreeFlags & 65011712),
        _ !== null ? (m = ta(_, m)) : ((m = Ia(m, r, n, null)), (m.flags |= 2)),
        (m.return = e),
        (l.return = e),
        (l.sibling = m),
        (e.child = l),
        Fi(null, l),
        (l = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Ps(n))
          : ((r = m.cachePool),
            r !== null ? ((C = xe._currentValue), (r = r.parent !== C ? { parent: C, pool: C } : r)) : (r = Pd()),
            (m = { baseLanes: m.baseLanes | n, cachePool: r })),
        (l.memoizedState = m),
        (l.childLanes = Is(t, d, n)),
        (e.memoizedState = Ws),
        Fi(t.child, l))
      : (wa(e),
        (n = t.child),
        (t = n.sibling),
        (n = ta(n, { mode: 'visible', children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null && ((d = e.deletions), d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function tc(t, e) {
    return ((e = bo({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function bo(t, e) {
    return ((t = cn(22, t, null, e)), (t.lanes = 0), t);
  }
  function ec(t, e, n) {
    return (rl(e, t.child, null, n), (t = tc(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t);
  }
  function fp(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), gs(t.return, e, n));
  }
  function nc(t, e, n, l, r, s) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: r,
          treeForkCount: s,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = r),
        (d.treeForkCount = s));
  }
  function dp(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      s = l.tail;
    l = l.children;
    var d = ge.current,
      m = (d & 2) !== 0;
    if (
      (m ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      Z(ge, d),
      je(t, e, l, n),
      (l = jt ? Hi : 0),
      !m && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && fp(t, n, e);
        else if (t.tag === 19) fp(t, n, e);
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
    switch (r) {
      case 'forwards':
        for (n = e.child, r = null; n !== null; )
          ((t = n.alternate), t !== null && ro(t) === null && (r = n), (n = n.sibling));
        ((n = r),
          n === null ? ((r = e.child), (e.child = null)) : ((r = n.sibling), (n.sibling = null)),
          nc(e, !1, r, n, s, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && ro(t) === null)) {
            e.child = r;
            break;
          }
          ((t = r.sibling), (r.sibling = n), (n = r), (r = t));
        }
        nc(e, !0, n, null, s, l);
        break;
      case 'together':
        nc(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ra(t, e, n) {
    if ((t !== null && (e.dependencies = t.dependencies), (ja |= e.lanes), (n & e.childLanes) === 0))
      if (t !== null) {
        if (($l(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, n = ta(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        ((t = t.sibling), (n = n.sibling = ta(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Pr(t)));
  }
  function cy(t, e, n) {
    switch (e.tag) {
      case 3:
        (Ut(e, e.stateNode.containerInfo), Aa(e, xe, t.memoizedState.cache), tl());
        break;
      case 27:
      case 5:
        he(e);
        break;
      case 4:
        Ut(e, e.stateNode.containerInfo);
        break;
      case 10:
        Aa(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Os(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (wa(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? cp(t, e, n)
              : (wa(e), (t = ra(t, e, n)), t !== null ? t.sibling : null);
        wa(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (((l = (n & e.childLanes) !== 0), l || ($l(t, e, n, !1), (l = (n & e.childLanes) !== 0)), r)) {
          if (l) return dp(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          Z(ge, ge.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), lp(t, e, n, e.pendingProps));
      case 24:
        Aa(e, xe, t.memoizedState.cache);
    }
    return ra(t, e, n);
  }
  function pp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Te = !0;
      else {
        if (!ac(t, n) && (e.flags & 128) === 0) return ((Te = !1), cy(t, e, n));
        Te = (t.flags & 131072) !== 0;
      }
    else ((Te = !1), jt && (e.flags & 1048576) !== 0 && Xd(e, Hi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = ll(e.elementType)), (e.type = t), typeof t == 'function'))
            us(t)
              ? ((l = ul(t, l)), (e.tag = 1), (e = up(null, e, t, l, n)))
              : ((e.tag = 0), (e = Fs(null, e, t, l, n)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === q) {
                ((e.tag = 11), (e = ep(null, e, t, l, n)));
                break t;
              } else if (r === K) {
                ((e.tag = 14), (e = np(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = X(t) || t), Error(u(306, e, '')));
          }
        }
        return e;
      case 0:
        return Fs(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (r = ul(l, e.pendingProps)), up(t, e, l, r, n));
      case 3:
        t: {
          if ((Ut(e, e.stateNode.containerInfo), t === null)) throw Error(u(387));
          l = e.pendingProps;
          var s = e.memoizedState;
          ((r = s.element), Ts(t, e), Xi(e, l, null, n));
          var d = e.memoizedState;
          if (((l = d.cache), Aa(e, xe, l), l !== s.cache && ys(e, [xe], n, !0), Vi(), (l = d.element), s.isDehydrated))
            if (
              ((s = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = sp(t, e, l, n);
              break t;
            } else if (l !== r) {
              ((r = xn(Error(u(424)), e)), ki(r), (e = sp(t, e, l, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (ne = An(t.firstChild), _e = e, jt = !0, Ea = null, En = !0, n = l0(e, null, l, n), e.child = n; n; )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((tl(), l === r)) {
              e = ra(t, e, n);
              break t;
            }
            je(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          vo(t, e),
          t === null
            ? (n = Eh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : jt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = No(ot.current).createElement(n)),
                (l[Be] = e),
                (l[Fe] = t),
                Ne(l, n, t),
                Re(l),
                (e.stateNode = l))
            : (e.memoizedState = Eh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          he(e),
          t === null &&
            jt &&
            ((l = e.stateNode = xh(e.type, e.pendingProps, ot.current)),
            (_e = e),
            (En = !0),
            (r = ne),
            La(e.type) ? ((Uc = r), (ne = An(l.firstChild))) : (ne = r)),
          je(t, e, e.pendingProps.children, n),
          vo(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            jt &&
            ((r = l = ne) &&
              ((l = $y(l, e.type, e.pendingProps, En)),
              l !== null ? ((e.stateNode = l), (_e = e), (ne = An(l.firstChild)), (En = !1), (r = !0)) : (r = !1)),
            r || za(e)),
          he(e),
          (r = e.type),
          (s = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = s.children),
          Bc(r, s) ? (l = null) : d !== null && Bc(r, d) && (e.flags |= 32),
          e.memoizedState !== null && ((r = ws(t, e, ey, null, null, n)), (fr._currentValue = r)),
          vo(t, e),
          je(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            jt &&
            ((t = n = ne) &&
              ((n = Yy(n, e.pendingProps, En)),
              n !== null ? ((e.stateNode = n), (_e = e), (ne = null), (t = !0)) : (t = !1)),
            t || za(e)),
          null
        );
      case 13:
        return cp(t, e, n);
      case 4:
        return (
          Ut(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = rl(e, null, l, n)) : je(t, e, l, n),
          e.child
        );
      case 11:
        return ep(t, e, e.type, e.pendingProps, n);
      case 7:
        return (je(t, e, e.pendingProps, n), e.child);
      case 8:
        return (je(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (je(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((l = e.pendingProps), Aa(e, e.type, l.value), je(t, e, l.children, n), e.child);
      case 9:
        return (
          (r = e.type._context),
          (l = e.pendingProps.children),
          nl(e),
          (r = De(r)),
          (l = l(r)),
          (e.flags |= 1),
          je(t, e, l, n),
          e.child
        );
      case 14:
        return np(t, e, e.type, e.pendingProps, n);
      case 15:
        return ap(t, e, e.type, e.pendingProps, n);
      case 19:
        return dp(t, e, n);
      case 31:
        return sy(t, e, n);
      case 22:
        return lp(t, e, n, e.pendingProps);
      case 24:
        return (
          nl(e),
          (l = De(xe)),
          t === null
            ? ((r = Ss()),
              r === null &&
                ((r = Pt),
                (s = vs()),
                (r.pooledCache = s),
                s.refCount++,
                s !== null && (r.pooledCacheLanes |= n),
                (r = s)),
              (e.memoizedState = { parent: l, cache: r }),
              Cs(e),
              Aa(e, xe, r))
            : ((t.lanes & n) !== 0 && (Ts(t, e), Xi(e, null, null, n), Vi()),
              (r = t.memoizedState),
              (s = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
                  Aa(e, xe, l))
                : ((l = s.cache), Aa(e, xe, l), l !== r.cache && ys(e, [xe], n, !0))),
          je(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function oa(t) {
    t.flags |= 4;
  }
  function lc(t, e, n, l, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if ($p()) t.flags |= 8192;
        else throw ((il = no), xs);
    } else t.flags &= -16777217;
  }
  function hp(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Rh(e)))
      if ($p()) t.flags |= 8192;
      else throw ((il = no), xs);
  }
  function So(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Zf() : 536870912), (t.lanes |= e), (Pl |= e)));
  }
  function Wi(t, e) {
    if (!jt)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var n = null; e !== null; ) (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = t.tail;
          for (var l = null; n !== null; ) (n.alternate !== null && (l = n), (n = n.sibling));
          l === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (l.sibling = null);
      }
  }
  function ae(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var r = t.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 65011712),
          (l |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling));
    else
      for (r = t.child; r !== null; )
        ((n |= r.lanes | r.childLanes), (l |= r.subtreeFlags), (l |= r.flags), (r.return = t), (r = r.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = n), e);
  }
  function fy(t, e, n) {
    var l = e.pendingProps;
    switch ((ds(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ae(e), null);
      case 1:
        return (ae(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          aa(xe),
          Rt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ll(e)
              ? oa(e)
              : t === null || (t.memoizedState.isDehydrated && (e.flags & 256) === 0) || ((e.flags |= 1024), hs())),
          ae(e),
          null
        );
      case 26:
        var r = e.type,
          s = e.memoizedState;
        return (
          t === null
            ? (oa(e), s !== null ? (ae(e), hp(e, s)) : (ae(e), lc(e, r, null, l, n)))
            : s
              ? s !== t.memoizedState
                ? (oa(e), ae(e), hp(e, s))
                : (ae(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && oa(e), ae(e), lc(e, r, t, l, n)),
          null
        );
      case 27:
        if ((Se(e), (n = ot.current), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && oa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return (ae(e), null);
          }
          ((t = tt.current), Ll(e) ? Zd(e) : ((t = xh(r, l, n)), (e.stateNode = t), oa(e)));
        }
        return (ae(e), null);
      case 5:
        if ((Se(e), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && oa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return (ae(e), null);
          }
          if (((s = tt.current), Ll(e))) Zd(e);
          else {
            var d = No(ot.current);
            switch (s) {
              case 1:
                s = d.createElementNS('http://www.w3.org/2000/svg', r);
                break;
              case 2:
                s = d.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                break;
              default:
                switch (r) {
                  case 'svg':
                    s = d.createElementNS('http://www.w3.org/2000/svg', r);
                    break;
                  case 'math':
                    s = d.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                    break;
                  case 'script':
                    ((s = d.createElement('div')),
                      (s.innerHTML = '<script><\/script>'),
                      (s = s.removeChild(s.firstChild)));
                    break;
                  case 'select':
                    ((s =
                      typeof l.is == 'string' ? d.createElement('select', { is: l.is }) : d.createElement('select')),
                      l.multiple ? (s.multiple = !0) : l.size && (s.size = l.size));
                    break;
                  default:
                    s = typeof l.is == 'string' ? d.createElement(r, { is: l.is }) : d.createElement(r);
                }
            }
            ((s[Be] = e), (s[Fe] = l));
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) s.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = s;
            t: switch ((Ne(s, r, l), r)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!l.autoFocus;
                break t;
              case 'img':
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && oa(e);
          }
        }
        return (ae(e), lc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && oa(e);
        else {
          if (typeof l != 'string' && e.stateNode === null) throw Error(u(166));
          if (((t = ot.current), Ll(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (l = null), (r = _e), r !== null))
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((t[Be] = e),
              (t = !!(t.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || ch(t.nodeValue, n))),
              t || za(e, !0));
          } else ((t = No(t).createTextNode(l)), (t[Be] = e), (e.stateNode = t));
        }
        return (ae(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = Ll(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(u(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(557));
              t[Be] = e;
            } else (tl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ae(e), (t = !1));
          } else
            ((n = hs()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), (t = !0));
          if (!t) return e.flags & 256 ? (dn(e), e) : (dn(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (ae(e), null);
      case 13:
        if (((l = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((r = Ll(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (((r = e.memoizedState), (r = r !== null ? r.dehydrated : null), !r)) throw Error(u(317));
              r[Be] = e;
            } else (tl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ae(e), (r = !1));
          } else
            ((r = hs()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), (r = !0));
          if (!r) return e.flags & 256 ? (dn(e), e) : (dn(e), null);
        }
        return (
          dn(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (r = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (r = l.alternate.memoizedState.cachePool.pool),
                (s = null),
                l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool),
                s !== r && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              So(e, e.updateQueue),
              ae(e),
              null)
        );
      case 4:
        return (Rt(), t === null && Ac(e.stateNode.containerInfo), ae(e), null);
      case 10:
        return (aa(e.type), ae(e), null);
      case 19:
        if ((w(ge), (l = e.memoizedState), l === null)) return (ae(e), null);
        if (((r = (e.flags & 128) !== 0), (s = l.rendering), s === null))
          if (r) Wi(l, !1);
          else {
            if (fe !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((s = ro(t)), s !== null)) {
                  for (
                    e.flags |= 128,
                      Wi(l, !1),
                      t = s.updateQueue,
                      e.updateQueue = t,
                      So(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    (qd(n, t), (n = n.sibling));
                  return (Z(ge, (ge.current & 1) | 2), jt && ea(e, l.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null && Oe() > zo && ((e.flags |= 128), (r = !0), Wi(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = ro(s)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                So(e, t),
                Wi(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !s.alternate && !jt)
              )
                return (ae(e), null);
            } else
              2 * Oe() - l.renderingStartTime > zo &&
                n !== 536870912 &&
                ((e.flags |= 128), (r = !0), Wi(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((t = l.last), t !== null ? (t.sibling = s) : (e.child = s), (l.last = s));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Oe()),
            (t.sibling = null),
            (n = ge.current),
            Z(ge, r ? (n & 1) | 2 : n & 1),
            jt && ea(e, l.treeForkCount),
            t)
          : (ae(e), null);
      case 22:
      case 23:
        return (
          dn(e),
          Ms(),
          (l = e.memoizedState !== null),
          t !== null ? (t.memoizedState !== null) !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (ae(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : ae(e),
          (n = e.updateQueue),
          n !== null && So(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && w(al),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          aa(xe),
          ae(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function dy(t, e) {
    switch ((ds(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          aa(xe),
          Rt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (Se(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((dn(e), e.alternate === null)) throw Error(u(340));
          tl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((dn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(u(340));
          tl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (w(ge), null);
      case 4:
        return (Rt(), null);
      case 10:
        return (aa(e.type), null);
      case 22:
      case 23:
        return (
          dn(e),
          Ms(),
          t !== null && w(al),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (aa(xe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function mp(t, e) {
    switch ((ds(e), e.tag)) {
      case 3:
        (aa(xe), Rt());
        break;
      case 26:
      case 27:
      case 5:
        Se(e);
        break;
      case 4:
        Rt();
        break;
      case 31:
        e.memoizedState !== null && dn(e);
        break;
      case 13:
        dn(e);
        break;
      case 19:
        w(ge);
        break;
      case 10:
        aa(e.type);
        break;
      case 22:
      case 23:
        (dn(e), Ms(), t !== null && w(al));
        break;
      case 24:
        aa(xe);
    }
  }
  function Pi(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var s = n.create,
              d = n.inst;
            ((l = s()), (d.destroy = l));
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (m) {
      Xt(e, e.return, m);
    }
  }
  function _a(t, e, n) {
    try {
      var l = e.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        l = s;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              m = d.destroy;
            if (m !== void 0) {
              ((d.destroy = void 0), (r = e));
              var C = n,
                _ = m;
              try {
                _();
              } catch (L) {
                Xt(r, C, L);
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (L) {
      Xt(e, e.return, L);
    }
  }
  function gp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        r0(e, n);
      } catch (l) {
        Xt(t, t.return, l);
      }
    }
  }
  function yp(t, e, n) {
    ((n.props = ul(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Xt(t, e, l);
    }
  }
  function Ii(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == 'function' ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (r) {
      Xt(t, e, r);
    }
  }
  function qn(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (r) {
          Xt(t, e, r);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Xt(t, e, r);
        }
      else n.current = null;
  }
  function vp(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break t;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      Xt(t, t.return, r);
    }
  }
  function ic(t, e, n) {
    try {
      var l = t.stateNode;
      (jy(l, t.type, n, e), (l[Fe] = e));
    } catch (r) {
      Xt(t, t.return, r);
    }
  }
  function bp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && La(t.type)) || t.tag === 4;
  }
  function rc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || bp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if ((t.tag === 27 && La(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function oc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n).insertBefore(t, e)
          : ((e = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Pn)));
    else if (l !== 4 && (l === 27 && La(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null))
      for (oc(t, e, n), t = t.sibling; t !== null; ) (oc(t, e, n), (t = t.sibling));
  }
  function xo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (l !== 4 && (l === 27 && La(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (xo(t, e, n), t = t.sibling; t !== null; ) (xo(t, e, n), (t = t.sibling));
  }
  function Sp(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
      (Ne(e, l, n), (e[Be] = t), (e[Fe] = n));
    } catch (s) {
      Xt(t, t.return, s);
    }
  }
  var ua = !1,
    Ee = !1,
    uc = !1,
    xp = typeof WeakSet == 'function' ? WeakSet : Set,
    we = null;
  function py(t, e) {
    if (((t = t.containerInfo), (Rc = qo), (t = Dd(t)), es(t))) {
      if ('selectionStart' in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset,
              s = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, s.nodeType);
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              m = -1,
              C = -1,
              _ = 0,
              L = 0,
              Q = t,
              D = null;
            e: for (;;) {
              for (
                var U;
                Q !== n || (r !== 0 && Q.nodeType !== 3) || (m = d + r),
                  Q !== s || (l !== 0 && Q.nodeType !== 3) || (C = d + l),
                  Q.nodeType === 3 && (d += Q.nodeValue.length),
                  (U = Q.firstChild) !== null;

              )
                ((D = Q), (Q = U));
              for (;;) {
                if (Q === t) break e;
                if ((D === n && ++_ === r && (m = d), D === s && ++L === l && (C = d), (U = Q.nextSibling) !== null))
                  break;
                ((Q = D), (D = Q.parentNode));
              }
              Q = U;
            }
            n = m === -1 || C === -1 ? null : { start: m, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wc = { focusedElem: t, selectionRange: n }, qo = !1, we = e; we !== null; )
      if (((e = we), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) ((t.return = e), (we = t));
      else
        for (; we !== null; ) {
          switch (((e = we), (s = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if ((t & 4) !== 0 && ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null))
                for (n = 0; n < t.length; n++) ((r = t[n]), (r.ref.impl = r.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                ((t = void 0), (n = e), (r = s.memoizedProps), (s = s.memoizedState), (l = n.stateNode));
                try {
                  var rt = ul(n.type, r);
                  ((t = l.getSnapshotBeforeUpdate(rt, s)), (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (ht) {
                  Xt(n, n.return, ht);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) Dc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Dc(t);
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
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (we = t));
            break;
          }
          we = e.return;
        }
  }
  function Cp(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (ca(t, n), l & 4 && Pi(5, n));
        break;
      case 1:
        if ((ca(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Xt(n, n.return, d);
            }
          else {
            var r = ul(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Xt(n, n.return, d);
            }
          }
        (l & 64 && gp(n), l & 512 && Ii(n, n.return));
        break;
      case 3:
        if ((ca(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            r0(t, e);
          } catch (d) {
            Xt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Sp(n);
      case 26:
      case 5:
        (ca(t, n), e === null && l & 4 && vp(n), l & 512 && Ii(n, n.return));
        break;
      case 12:
        ca(t, n);
        break;
      case 31:
        (ca(t, n), l & 4 && zp(t, n));
        break;
      case 13:
        (ca(t, n),
          l & 4 && Ap(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = Cy.bind(null, n)), qy(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || ua), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Ee), (r = ua));
          var s = Ee;
          ((ua = l), (Ee = e) && !s ? fa(t, n, (n.subtreeFlags & 8772) !== 0) : ca(t, n), (ua = r), (Ee = s));
        }
        break;
      case 30:
        break;
      default:
        ca(t, n);
    }
  }
  function Tp(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Tp(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ku(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var re = null,
    Pe = !1;
  function sa(t, e, n) {
    for (n = n.child; n !== null; ) (Ep(t, e, n), (n = n.sibling));
  }
  function Ep(t, e, n) {
    if (ie && typeof ie.onCommitFiberUnmount == 'function')
      try {
        ie.onCommitFiberUnmount(It, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ee || qn(n, e),
          sa(t, e, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ee || qn(n, e);
        var l = re,
          r = Pe;
        (La(n.type) && ((re = n.stateNode), (Pe = !1)), sa(t, e, n), ur(n.stateNode), (re = l), (Pe = r));
        break;
      case 5:
        Ee || qn(n, e);
      case 6:
        if (((l = re), (r = Pe), (re = null), sa(t, e, n), (re = l), (Pe = r), re !== null))
          if (Pe)
            try {
              (re.nodeType === 9 ? re.body : re.nodeName === 'HTML' ? re.ownerDocument.body : re).removeChild(
                n.stateNode
              );
            } catch (s) {
              Xt(n, e, s);
            }
          else
            try {
              re.removeChild(n.stateNode);
            } catch (s) {
              Xt(n, e, s);
            }
        break;
      case 18:
        re !== null &&
          (Pe
            ? ((t = re),
              gh(t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t, n.stateNode),
              ri(t))
            : gh(re, n.stateNode));
        break;
      case 4:
        ((l = re), (r = Pe), (re = n.stateNode.containerInfo), (Pe = !0), sa(t, e, n), (re = l), (Pe = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_a(2, n, e), Ee || _a(4, n, e), sa(t, e, n));
        break;
      case 1:
        (Ee || (qn(n, e), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && yp(n, e, l)), sa(t, e, n));
        break;
      case 21:
        sa(t, e, n);
        break;
      case 22:
        ((Ee = (l = Ee) || n.memoizedState !== null), sa(t, e, n), (Ee = l));
        break;
      default:
        sa(t, e, n);
    }
  }
  function zp(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
      t = t.dehydrated;
      try {
        ri(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
    }
  }
  function Ap(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ri(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
  }
  function hy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new xp()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new xp()), e);
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Co(t, e) {
    var n = hy(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var r = Ty.bind(null, t, l);
        l.then(r, r);
      }
    });
  }
  function Ie(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          s = t,
          d = e,
          m = d;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (La(m.type)) {
                ((re = m.stateNode), (Pe = !1));
                break t;
              }
              break;
            case 5:
              ((re = m.stateNode), (Pe = !1));
              break t;
            case 3:
            case 4:
              ((re = m.stateNode.containerInfo), (Pe = !0));
              break t;
          }
          m = m.return;
        }
        if (re === null) throw Error(u(160));
        (Ep(s, d, r), (re = null), (Pe = !1), (s = r.alternate), s !== null && (s.return = null), (r.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (Mp(e, t), (e = e.sibling));
  }
  var jn = null;
  function Mp(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ie(e, t), tn(t), l & 4 && (_a(3, t, t.return), Pi(3, t), _a(5, t, t.return)));
        break;
      case 1:
        (Ie(e, t),
          tn(t),
          l & 512 && (Ee || n === null || qn(n, n.return)),
          l & 64 &&
            ua &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var r = jn;
        if ((Ie(e, t), tn(t), l & 512 && (Ee || n === null || qn(n, n.return)), l & 4)) {
          var s = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type), (n = t.memoizedProps), (r = r.ownerDocument || r));
                  e: switch (l) {
                    case 'title':
                      ((s = r.getElementsByTagName('title')[0]),
                        (!s ||
                          s[Ai] ||
                          s[Be] ||
                          s.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          s.hasAttribute('itemprop')) &&
                          ((s = r.createElement(l)), r.head.insertBefore(s, r.querySelector('head > title'))),
                        Ne(s, l, n),
                        (s[Be] = t),
                        Re(s),
                        (l = s));
                      break t;
                    case 'link':
                      var d = Mh('link', 'href', r).get(l + (n.href || ''));
                      if (d) {
                        for (var m = 0; m < d.length; m++)
                          if (
                            ((s = d[m]),
                            s.getAttribute('href') === (n.href == null || n.href === '' ? null : n.href) &&
                              s.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              s.getAttribute('title') === (n.title == null ? null : n.title) &&
                              s.getAttribute('crossorigin') === (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(m, 1);
                            break e;
                          }
                      }
                      ((s = r.createElement(l)), Ne(s, l, n), r.head.appendChild(s));
                      break;
                    case 'meta':
                      if ((d = Mh('meta', 'content', r).get(l + (n.content || '')))) {
                        for (m = 0; m < d.length; m++)
                          if (
                            ((s = d[m]),
                            s.getAttribute('content') === (n.content == null ? null : '' + n.content) &&
                              s.getAttribute('name') === (n.name == null ? null : n.name) &&
                              s.getAttribute('property') === (n.property == null ? null : n.property) &&
                              s.getAttribute('http-equiv') === (n.httpEquiv == null ? null : n.httpEquiv) &&
                              s.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(m, 1);
                            break e;
                          }
                      }
                      ((s = r.createElement(l)), Ne(s, l, n), r.head.appendChild(s));
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  ((s[Be] = t), Re(s), (l = s));
                }
                t.stateNode = l;
              } else Oh(r, t.type, t.stateNode);
            else t.stateNode = Ah(r, l, t.memoizedProps);
          else
            s !== l
              ? (s === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : s.count--,
                l === null ? Oh(r, t.type, t.stateNode) : Ah(r, l, t.memoizedProps))
              : l === null && t.stateNode !== null && ic(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ie(e, t),
          tn(t),
          l & 512 && (Ee || n === null || qn(n, n.return)),
          n !== null && l & 4 && ic(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ie(e, t), tn(t), l & 512 && (Ee || n === null || qn(n, n.return)), t.flags & 32)) {
          r = t.stateNode;
          try {
            Rl(r, '');
          } catch (rt) {
            Xt(t, t.return, rt);
          }
        }
        (l & 4 && t.stateNode != null && ((r = t.memoizedProps), ic(t, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (uc = !0));
        break;
      case 6:
        if ((Ie(e, t), tn(t), l & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((l = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = l;
          } catch (rt) {
            Xt(t, t.return, rt);
          }
        }
        break;
      case 3:
        if (
          ((ko = null),
          (r = jn),
          (jn = Uo(e.containerInfo)),
          Ie(e, t),
          (jn = r),
          tn(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ri(e.containerInfo);
          } catch (rt) {
            Xt(t, t.return, rt);
          }
        uc && ((uc = !1), Op(t));
        break;
      case 4:
        ((l = jn), (jn = Uo(t.stateNode.containerInfo)), Ie(e, t), tn(t), (jn = l));
        break;
      case 12:
        (Ie(e, t), tn(t));
        break;
      case 31:
        (Ie(e, t), tn(t), l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 13:
        (Ie(e, t),
          tn(t),
          t.child.flags & 8192 && (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Eo = Oe()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var C = n !== null && n.memoizedState !== null,
          _ = ua,
          L = Ee;
        if (((ua = _ || r), (Ee = L || C), Ie(e, t), (Ee = L), (ua = _), tn(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || C || ua || Ee || sl(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                C = n = e;
                try {
                  if (((s = C.stateNode), r))
                    ((d = s.style),
                      typeof d.setProperty == 'function'
                        ? d.setProperty('display', 'none', 'important')
                        : (d.display = 'none'));
                  else {
                    m = C.stateNode;
                    var Q = C.memoizedProps.style,
                      D = Q != null && Q.hasOwnProperty('display') ? Q.display : null;
                    m.style.display = D == null || typeof D == 'boolean' ? '' : ('' + D).trim();
                  }
                } catch (rt) {
                  Xt(C, C.return, rt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                C = e;
                try {
                  C.stateNode.nodeValue = r ? '' : C.memoizedProps;
                } catch (rt) {
                  Xt(C, C.return, rt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                C = e;
                try {
                  var U = C.stateNode;
                  r ? yh(U, !0) : yh(C.stateNode, !1);
                } catch (rt) {
                  Xt(C, C.return, rt);
                }
              }
            } else if (((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) && e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue), l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Co(t, n))));
        break;
      case 19:
        (Ie(e, t), tn(t), l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ie(e, t), tn(t));
    }
  }
  function tn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (bp(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              s = rc(t);
            xo(t, s, r);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Rl(d, ''), (n.flags &= -33));
            var m = rc(t);
            xo(t, m, d);
            break;
          case 3:
          case 4:
            var C = n.stateNode.containerInfo,
              _ = rc(t);
            oc(t, _, C);
            break;
          default:
            throw Error(u(161));
        }
      } catch (L) {
        Xt(t, t.return, L);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Op(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Op(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function ca(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) (Cp(t, e.alternate, e), (e = e.sibling));
  }
  function sl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_a(4, e, e.return), sl(e));
          break;
        case 1:
          qn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == 'function' && yp(e, e.return, n), sl(e));
          break;
        case 27:
          ur(e.stateNode);
        case 26:
        case 5:
          (qn(e, e.return), sl(e));
          break;
        case 22:
          e.memoizedState === null && sl(e);
          break;
        case 30:
          sl(e);
          break;
        default:
          sl(e);
      }
      t = t.sibling;
    }
  }
  function fa(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        r = t,
        s = e,
        d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (fa(r, s, n), Pi(4, s));
          break;
        case 1:
          if ((fa(r, s, n), (l = s), (r = l.stateNode), typeof r.componentDidMount == 'function'))
            try {
              r.componentDidMount();
            } catch (_) {
              Xt(l, l.return, _);
            }
          if (((l = s), (r = l.updateQueue), r !== null)) {
            var m = l.stateNode;
            try {
              var C = r.shared.hiddenCallbacks;
              if (C !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < C.length; r++) i0(C[r], m);
            } catch (_) {
              Xt(l, l.return, _);
            }
          }
          (n && d & 64 && gp(s), Ii(s, s.return));
          break;
        case 27:
          Sp(s);
        case 26:
        case 5:
          (fa(r, s, n), n && l === null && d & 4 && vp(s), Ii(s, s.return));
          break;
        case 12:
          fa(r, s, n);
          break;
        case 31:
          (fa(r, s, n), n && d & 4 && zp(r, s));
          break;
        case 13:
          (fa(r, s, n), n && d & 4 && Ap(r, s));
          break;
        case 22:
          (s.memoizedState === null && fa(r, s, n), Ii(s, s.return));
          break;
        case 30:
          break;
        default:
          fa(r, s, n);
      }
      e = e.sibling;
    }
  }
  function sc(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Li(n)));
  }
  function cc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Li(t)));
  }
  function Nn(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Rp(t, e, n, l), (e = e.sibling));
  }
  function Rp(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Nn(t, e, n, l), r & 2048 && Pi(9, e));
        break;
      case 1:
        Nn(t, e, n, l);
        break;
      case 3:
        (Nn(t, e, n, l),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Li(t))));
        break;
      case 12:
        if (r & 2048) {
          (Nn(t, e, n, l), (t = e.stateNode));
          try {
            var s = e.memoizedProps,
              d = s.id,
              m = s.onPostCommit;
            typeof m == 'function' && m(d, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (C) {
            Xt(e, e.return, C);
          }
        } else Nn(t, e, n, l);
        break;
      case 31:
        Nn(t, e, n, l);
        break;
      case 13:
        Nn(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        ((s = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? s._visibility & 2
              ? Nn(t, e, n, l)
              : tr(t, e)
            : s._visibility & 2
              ? Nn(t, e, n, l)
              : ((s._visibility |= 2), Jl(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && sc(d, e));
        break;
      case 24:
        (Nn(t, e, n, l), r & 2048 && cc(e.alternate, e));
        break;
      default:
        Nn(t, e, n, l);
    }
  }
  function Jl(t, e, n, l, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t,
        d = e,
        m = n,
        C = l,
        _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Jl(s, d, m, C, r), Pi(8, d));
          break;
        case 23:
          break;
        case 22:
          var L = d.stateNode;
          (d.memoizedState !== null
            ? L._visibility & 2
              ? Jl(s, d, m, C, r)
              : tr(s, d)
            : ((L._visibility |= 2), Jl(s, d, m, C, r)),
            r && _ & 2048 && sc(d.alternate, d));
          break;
        case 24:
          (Jl(s, d, m, C, r), r && _ & 2048 && cc(d.alternate, d));
          break;
        default:
          Jl(s, d, m, C, r);
      }
      e = e.sibling;
    }
  }
  function tr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          r = l.flags;
        switch (l.tag) {
          case 22:
            (tr(n, l), r & 2048 && sc(l.alternate, l));
            break;
          case 24:
            (tr(n, l), r & 2048 && cc(l.alternate, l));
            break;
          default:
            tr(n, l);
        }
        e = e.sibling;
      }
  }
  var er = 8192;
  function Fl(t, e, n) {
    if (t.subtreeFlags & er) for (t = t.child; t !== null; ) (wp(t, e, n), (t = t.sibling));
  }
  function wp(t, e, n) {
    switch (t.tag) {
      case 26:
        (Fl(t, e, n), t.flags & er && t.memoizedState !== null && tv(n, jn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Fl(t, e, n);
        break;
      case 3:
      case 4:
        var l = jn;
        ((jn = Uo(t.stateNode.containerInfo)), Fl(t, e, n), (jn = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null ? ((l = er), (er = 16777216), Fl(t, e, n), (er = l)) : Fl(t, e, n));
        break;
      default:
        Fl(t, e, n);
    }
  }
  function Bp(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function nr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((we = l), Dp(l, t));
        }
      Bp(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (_p(t), (t = t.sibling));
  }
  function _p(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (nr(t), t.flags & 2048 && _a(9, t, t.return));
        break;
      case 3:
        nr(t);
        break;
      case 12:
        nr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), To(t))
          : nr(t);
        break;
      default:
        nr(t);
    }
  }
  function To(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((we = l), Dp(l, t));
        }
      Bp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (_a(8, e, e.return), To(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), To(e)));
          break;
        default:
          To(e);
      }
      t = t.sibling;
    }
  }
  function Dp(t, e) {
    for (; we !== null; ) {
      var n = we;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          _a(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Li(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (we = l));
      else
        t: for (n = t; we !== null; ) {
          l = we;
          var r = l.sibling,
            s = l.return;
          if ((Tp(l), l === n)) {
            we = null;
            break t;
          }
          if (r !== null) {
            ((r.return = s), (we = r));
            break t;
          }
          we = s;
        }
    }
  }
  var my = {
      getCacheForType: function (t) {
        var e = De(xe),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return De(xe).controller.signal;
      },
    },
    gy = typeof WeakMap == 'function' ? WeakMap : Map,
    $t = 0,
    Pt = null,
    Mt = null,
    wt = 0,
    Vt = 0,
    pn = null,
    Da = !1,
    Wl = !1,
    fc = !1,
    da = 0,
    fe = 0,
    ja = 0,
    cl = 0,
    dc = 0,
    hn = 0,
    Pl = 0,
    ar = null,
    en = null,
    pc = !1,
    Eo = 0,
    jp = 0,
    zo = 1 / 0,
    Ao = null,
    Na = null,
    Ae = 0,
    Ua = null,
    Il = null,
    pa = 0,
    hc = 0,
    mc = null,
    Np = null,
    lr = 0,
    gc = null;
  function mn() {
    return ($t & 2) !== 0 && wt !== 0 ? wt & -wt : z.T !== null ? Cc() : Wf();
  }
  function Up() {
    if (hn === 0)
      if ((wt & 536870912) === 0 || jt) {
        var t = Cl;
        ((Cl <<= 1), (Cl & 3932160) === 0 && (Cl = 262144), (hn = t));
      } else hn = 536870912;
    return ((t = fn.current), t !== null && (t.flags |= 32), hn);
  }
  function nn(t, e, n) {
    (((t === Pt && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null) && (ti(t, 0), Ha(t, wt, hn, !1)),
      zi(t, n),
      (($t & 2) === 0 || t !== Pt) &&
        (t === Pt && (($t & 2) === 0 && (cl |= n), fe === 4 && Ha(t, wt, hn, !1)), Gn(t)));
  }
  function Hp(t, e, n) {
    if (($t & 6) !== 0) throw Error(u(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ln(t, e),
      r = l ? by(t, e) : vc(t, e, !0),
      s = l;
    do {
      if (r === 0) {
        Wl && !l && Ha(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), s && !yy(n))) {
          ((r = vc(t, e, !1)), (s = !1));
          continue;
        }
        if (r === 2) {
          if (((s = e), t.errorRecoveryDisabledLanes & s)) var d = 0;
          else ((d = t.pendingLanes & -536870913), (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var m = t;
              r = ar;
              var C = m.current.memoizedState.isDehydrated;
              if ((C && (ti(m, d).flags |= 256), (d = vc(m, d, !1)), d !== 2)) {
                if (fc && !C) {
                  ((m.errorRecoveryDisabledLanes |= s), (cl |= s), (r = 4));
                  break t;
                }
                ((s = en), (en = r), s !== null && (en === null ? (en = s) : en.push.apply(en, s)));
              }
              r = d;
            }
            if (((s = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (ti(t, 0), Ha(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (s = r), s)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ha(l, e, hn, !Da);
              break t;
            case 2:
              en = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((r = Eo + 300 - Oe()), 10 < r)) {
            if ((Ha(l, e, hn, !Da), Sa(l, 0, !0) !== 0)) break t;
            ((pa = e),
              (l.timeoutHandle = hh(kp.bind(null, l, n, en, Ao, pc, e, hn, cl, Pl, Da, s, 'Throttled', -0, 0), r)));
            break t;
          }
          kp(l, n, en, Ao, pc, e, hn, cl, Pl, Da, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Gn(t);
  }
  function kp(t, e, n, l, r, s, d, m, C, _, L, Q, D, U) {
    if (((t.timeoutHandle = -1), (Q = e.subtreeFlags), Q & 8192 || (Q & 16785408) === 16785408)) {
      ((Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Pn,
      }),
        wp(e, s, Q));
      var rt = (s & 62914560) === s ? Eo - Oe() : (s & 4194048) === s ? jp - Oe() : 0;
      if (((rt = ev(Q, rt)), rt !== null)) {
        ((pa = s),
          (t.cancelPendingCommit = rt(Qp.bind(null, t, e, s, n, l, r, d, m, C, L, Q, null, D, U))),
          Ha(t, s, d, !_));
        return;
      }
    }
    Qp(t, e, s, n, l, r, d, m, C);
  }
  function yy(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!sn(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) ((n.return = e), (e = n));
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
  function Ha(t, e, n, l) {
    ((e &= ~dc),
      (e &= ~cl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var s = 31 - qe(r),
        d = 1 << s;
      ((l[s] = -1), (r &= ~d));
    }
    n !== 0 && Kf(t, n, e);
  }
  function Mo() {
    return ($t & 6) === 0 ? (ir(0), !1) : !0;
  }
  function yc() {
    if (Mt !== null) {
      if (Vt === 0) var t = Mt.return;
      else ((t = Mt), (na = el = null), Ds(t), (Vl = null), (Yi = 0), (t = Mt));
      for (; t !== null; ) (mp(t.alternate, t), (t = t.return));
      Mt = null;
    }
  }
  function ti(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Hy(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (pa = 0),
      yc(),
      (Pt = t),
      (Mt = n = ta(t.current, null)),
      (wt = e),
      (Vt = 0),
      (pn = null),
      (Da = !1),
      (Wl = Ln(t, e)),
      (fc = !1),
      (Pl = hn = dc = cl = ja = fe = 0),
      (en = ar = null),
      (pc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - qe(l),
          s = 1 << r;
        ((e |= t[r]), (l &= ~s));
      }
    return ((da = e), Zr(), n);
  }
  function Lp(t, e) {
    ((St = null),
      (z.H = Ji),
      e === Gl || e === eo
        ? ((e = e0()), (Vt = 3))
        : e === xs
          ? ((e = e0()), (Vt = 4))
          : (Vt = e === Js ? 8 : e !== null && typeof e == 'object' && typeof e.then == 'function' ? 6 : 1),
      (pn = e),
      Mt === null && ((fe = 1), go(t, xn(e, t.current))));
  }
  function $p() {
    var t = fn.current;
    return t === null
      ? !0
      : (wt & 4194048) === wt
        ? zn === null
        : (wt & 62914560) === wt || (wt & 536870912) !== 0
          ? t === zn
          : !1;
  }
  function Yp() {
    var t = z.H;
    return ((z.H = Ji), t === null ? Ji : t);
  }
  function qp() {
    var t = z.A;
    return ((z.A = my), t);
  }
  function Oo() {
    ((fe = 4),
      Da || ((wt & 4194048) !== wt && fn.current !== null) || (Wl = !0),
      ((ja & 134217727) === 0 && (cl & 134217727) === 0) || Pt === null || Ha(Pt, wt, hn, !1));
  }
  function vc(t, e, n) {
    var l = $t;
    $t |= 2;
    var r = Yp(),
      s = qp();
    ((Pt !== t || wt !== e) && ((Ao = null), ti(t, e)), (e = !1));
    var d = fe;
    t: do
      try {
        if (Vt !== 0 && Mt !== null) {
          var m = Mt,
            C = pn;
          switch (Vt) {
            case 8:
              (yc(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fn.current === null && (e = !0);
              var _ = Vt;
              if (((Vt = 0), (pn = null), ei(t, m, C, _), n && Wl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((_ = Vt), (Vt = 0), (pn = null), ei(t, m, C, _));
          }
        }
        (vy(), (d = fe));
        break;
      } catch (L) {
        Lp(t, L);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (na = el = null),
      ($t = l),
      (z.H = r),
      (z.A = s),
      Mt === null && ((Pt = null), (wt = 0), Zr()),
      d
    );
  }
  function vy() {
    for (; Mt !== null; ) Gp(Mt);
  }
  function by(t, e) {
    var n = $t;
    $t |= 2;
    var l = Yp(),
      r = qp();
    Pt !== t || wt !== e ? ((Ao = null), (zo = Oe() + 500), ti(t, e)) : (Wl = Ln(t, e));
    t: do
      try {
        if (Vt !== 0 && Mt !== null) {
          e = Mt;
          var s = pn;
          e: switch (Vt) {
            case 1:
              ((Vt = 0), (pn = null), ei(t, e, s, 1));
              break;
            case 2:
            case 9:
              if (Id(s)) {
                ((Vt = 0), (pn = null), Vp(e));
                break;
              }
              ((e = function () {
                ((Vt !== 2 && Vt !== 9) || Pt !== t || (Vt = 7), Gn(t));
              }),
                s.then(e, e));
              break t;
            case 3:
              Vt = 7;
              break t;
            case 4:
              Vt = 5;
              break t;
            case 7:
              Id(s) ? ((Vt = 0), (pn = null), Vp(e)) : ((Vt = 0), (pn = null), ei(t, e, s, 7));
              break;
            case 5:
              var d = null;
              switch (Mt.tag) {
                case 26:
                  d = Mt.memoizedState;
                case 5:
                case 27:
                  var m = Mt;
                  if (d ? Rh(d) : m.stateNode.complete) {
                    ((Vt = 0), (pn = null));
                    var C = m.sibling;
                    if (C !== null) Mt = C;
                    else {
                      var _ = m.return;
                      _ !== null ? ((Mt = _), Ro(_)) : (Mt = null);
                    }
                    break e;
                  }
              }
              ((Vt = 0), (pn = null), ei(t, e, s, 5));
              break;
            case 6:
              ((Vt = 0), (pn = null), ei(t, e, s, 6));
              break;
            case 8:
              (yc(), (fe = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        Sy();
        break;
      } catch (L) {
        Lp(t, L);
      }
    while (!0);
    return ((na = el = null), (z.H = l), (z.A = r), ($t = n), Mt !== null ? 0 : ((Pt = null), (wt = 0), Zr(), fe));
  }
  function Sy() {
    for (; Mt !== null && !gt(); ) Gp(Mt);
  }
  function Gp(t) {
    var e = pp(t.alternate, t, da);
    ((t.memoizedProps = t.pendingProps), e === null ? Ro(t) : (Mt = e));
  }
  function Vp(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = op(n, e, e.pendingProps, e.type, void 0, wt);
        break;
      case 11:
        e = op(n, e, e.pendingProps, e.type.render, e.ref, wt);
        break;
      case 5:
        Ds(e);
      default:
        (mp(n, e), (e = Mt = qd(e, da)), (e = pp(n, e, da)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ro(t) : (Mt = e));
  }
  function ei(t, e, n, l) {
    ((na = el = null), Ds(e), (Vl = null), (Yi = 0));
    var r = e.return;
    try {
      if (uy(t, r, e, n, wt)) {
        ((fe = 1), go(t, xn(n, t.current)), (Mt = null));
        return;
      }
    } catch (s) {
      if (r !== null) throw ((Mt = r), s);
      ((fe = 1), go(t, xn(n, t.current)), (Mt = null));
      return;
    }
    e.flags & 32768
      ? (jt || l === 1
          ? (t = !0)
          : Wl || (wt & 536870912) !== 0
            ? (t = !1)
            : ((Da = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = fn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Xp(e, t))
      : Ro(e);
  }
  function Ro(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Xp(e, Da);
        return;
      }
      t = e.return;
      var n = fy(e.alternate, e, da);
      if (n !== null) {
        Mt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Mt = e;
        return;
      }
      Mt = e = t;
    } while (e !== null);
    fe === 0 && (fe = 5);
  }
  function Xp(t, e) {
    do {
      var n = dy(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (Mt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Mt = t;
        return;
      }
      Mt = t = n;
    } while (t !== null);
    ((fe = 6), (Mt = null));
  }
  function Qp(t, e, n, l, r, s, d, m, C) {
    t.cancelPendingCommit = null;
    do wo();
    while (Ae !== 0);
    if (($t & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= rs),
        Ig(t, n, s, d, m, C),
        t === Pt && ((Mt = Pt = null), (wt = 0)),
        (Il = e),
        (Ua = t),
        (pa = n),
        (hc = s),
        (mc = r),
        (Np = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Ey(At, function () {
              return (Wp(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = z.T), (z.T = null), (r = F.p), (F.p = 2), (d = $t), ($t |= 4));
        try {
          py(t, e, n);
        } finally {
          (($t = d), (F.p = r), (z.T = l));
        }
      }
      ((Ae = 1), Zp(), Kp(), Jp());
    }
  }
  function Zp() {
    if (Ae === 1) {
      Ae = 0;
      var t = Ua,
        e = Il,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = z.T), (z.T = null));
        var l = F.p;
        F.p = 2;
        var r = $t;
        $t |= 4;
        try {
          Mp(e, t);
          var s = wc,
            d = Dd(t.containerInfo),
            m = s.focusedElem,
            C = s.selectionRange;
          if (d !== m && m && m.ownerDocument && _d(m.ownerDocument.documentElement, m)) {
            if (C !== null && es(m)) {
              var _ = C.start,
                L = C.end;
              if ((L === void 0 && (L = _), 'selectionStart' in m))
                ((m.selectionStart = _), (m.selectionEnd = Math.min(L, m.value.length)));
              else {
                var Q = m.ownerDocument || document,
                  D = (Q && Q.defaultView) || window;
                if (D.getSelection) {
                  var U = D.getSelection(),
                    rt = m.textContent.length,
                    ht = Math.min(C.start, rt),
                    Ft = C.end === void 0 ? ht : Math.min(C.end, rt);
                  !U.extend && ht > Ft && ((d = Ft), (Ft = ht), (ht = d));
                  var M = Bd(m, ht),
                    E = Bd(m, Ft);
                  if (
                    M &&
                    E &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== M.node ||
                      U.anchorOffset !== M.offset ||
                      U.focusNode !== E.node ||
                      U.focusOffset !== E.offset)
                  ) {
                    var B = Q.createRange();
                    (B.setStart(M.node, M.offset),
                      U.removeAllRanges(),
                      ht > Ft
                        ? (U.addRange(B), U.extend(E.node, E.offset))
                        : (B.setEnd(E.node, E.offset), U.addRange(B)));
                  }
                }
              }
            }
            for (Q = [], U = m; (U = U.parentNode); )
              U.nodeType === 1 && Q.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof m.focus == 'function' && m.focus(), m = 0; m < Q.length; m++) {
              var G = Q[m];
              ((G.element.scrollLeft = G.left), (G.element.scrollTop = G.top));
            }
          }
          ((qo = !!Rc), (wc = Rc = null));
        } finally {
          (($t = r), (F.p = l), (z.T = n));
        }
      }
      ((t.current = e), (Ae = 2));
    }
  }
  function Kp() {
    if (Ae === 2) {
      Ae = 0;
      var t = Ua,
        e = Il,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = z.T), (z.T = null));
        var l = F.p;
        F.p = 2;
        var r = $t;
        $t |= 4;
        try {
          Cp(t, e.alternate, e);
        } finally {
          (($t = r), (F.p = l), (z.T = n));
        }
      }
      Ae = 3;
    }
  }
  function Jp() {
    if (Ae === 4 || Ae === 3) {
      ((Ae = 0), va());
      var t = Ua,
        e = Il,
        n = pa,
        l = Np;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ae = 5)
        : ((Ae = 0), (Il = Ua = null), Fp(t, t.pendingLanes));
      var r = t.pendingLanes;
      if ((r === 0 && (Na = null), Uu(n), (e = e.stateNode), ie && typeof ie.onCommitFiberRoot == 'function'))
        try {
          ie.onCommitFiberRoot(It, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = z.T), (r = F.p), (F.p = 2), (z.T = null));
        try {
          for (var s = t.onRecoverableError, d = 0; d < l.length; d++) {
            var m = l[d];
            s(m.value, { componentStack: m.stack });
          }
        } finally {
          ((z.T = e), (F.p = r));
        }
      }
      ((pa & 3) !== 0 && wo(),
        Gn(t),
        (r = t.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0 ? (t === gc ? lr++ : ((lr = 0), (gc = t))) : (lr = 0),
        ir(0));
    }
  }
  function Fp(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), Li(e)));
  }
  function wo() {
    return (Zp(), Kp(), Jp(), Wp());
  }
  function Wp() {
    if (Ae !== 5) return !1;
    var t = Ua,
      e = hc;
    hc = 0;
    var n = Uu(pa),
      l = z.T,
      r = F.p;
    try {
      ((F.p = 32 > n ? 32 : n), (z.T = null), (n = mc), (mc = null));
      var s = Ua,
        d = pa;
      if (((Ae = 0), (Il = Ua = null), (pa = 0), ($t & 6) !== 0)) throw Error(u(331));
      var m = $t;
      if (
        (($t |= 4),
        _p(s.current),
        Rp(s, s.current, d, n),
        ($t = m),
        ir(0, !1),
        ie && typeof ie.onPostCommitFiberRoot == 'function')
      )
        try {
          ie.onPostCommitFiberRoot(It, s);
        } catch {}
      return !0;
    } finally {
      ((F.p = r), (z.T = l), Fp(t, e));
    }
  }
  function Pp(t, e, n) {
    ((e = xn(n, e)), (e = Ks(t.stateNode, e, 2)), (t = Ra(t, e, 2)), t !== null && (zi(t, 2), Gn(t)));
  }
  function Xt(t, e, n) {
    if (t.tag === 3) Pp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Pp(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (Na === null || !Na.has(l)))
          ) {
            ((t = xn(n, t)), (n = I0(2)), (l = Ra(e, n, 2)), l !== null && (tp(n, l, e, t), zi(l, 2), Gn(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function bc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new gy();
      var r = new Set();
      l.set(e, r);
    } else ((r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r)));
    r.has(n) || ((fc = !0), r.add(n), (t = xy.bind(null, t, e, n)), e.then(t, t));
  }
  function xy(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Pt === t &&
        (wt & n) === n &&
        (fe === 4 || (fe === 3 && (wt & 62914560) === wt && 300 > Oe() - Eo) ? ($t & 2) === 0 && ti(t, 0) : (dc |= n),
        Pl === wt && (Pl = 0)),
      Gn(t));
  }
  function Ip(t, e) {
    (e === 0 && (e = Zf()), (t = Pa(t, e)), t !== null && (zi(t, e), Gn(t)));
  }
  function Cy(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Ip(t, n));
  }
  function Ty(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (l !== null && l.delete(e), Ip(t, n));
  }
  function Ey(t, e) {
    return Ze(t, e);
  }
  var Bo = null,
    ni = null,
    Sc = !1,
    _o = !1,
    xc = !1,
    ka = 0;
  function Gn(t) {
    (t !== ni && t.next === null && (ni === null ? (Bo = ni = t) : (ni = ni.next = t)),
      (_o = !0),
      Sc || ((Sc = !0), Ay()));
  }
  function ir(t, e) {
    if (!xc && _o) {
      xc = !0;
      do
        for (var n = !1, l = Bo; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var d = l.suspendedLanes,
                m = l.pingedLanes;
              ((s = (1 << (31 - qe(42 | t) + 1)) - 1),
                (s &= r & ~(d & ~m)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((n = !0), ah(l, s));
          } else
            ((s = wt),
              (s = Sa(l, l === Pt ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
              (s & 3) === 0 || Ln(l, s) || ((n = !0), ah(l, s)));
          l = l.next;
        }
      while (n);
      xc = !1;
    }
  }
  function zy() {
    th();
  }
  function th() {
    _o = Sc = !1;
    var t = 0;
    ka !== 0 && Uy() && (t = ka);
    for (var e = Oe(), n = null, l = Bo; l !== null; ) {
      var r = l.next,
        s = eh(l, e);
      (s === 0
        ? ((l.next = null), n === null ? (Bo = r) : (n.next = r), r === null && (ni = n))
        : ((n = l), (t !== 0 || (s & 3) !== 0) && (_o = !0)),
        (l = r));
    }
    ((Ae !== 0 && Ae !== 5) || ir(t), ka !== 0 && (ka = 0));
  }
  function eh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - qe(s),
        m = 1 << d,
        C = r[d];
      (C === -1 ? ((m & n) === 0 || (m & l) !== 0) && (r[d] = _n(m, e)) : C <= e && (t.expiredLanes |= m), (s &= ~m));
    }
    if (
      ((e = Pt),
      (n = wt),
      (n = Sa(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      n === 0 || (t === e && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && kn(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || Ln(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && kn(l), Uu(n))) {
        case 2:
        case 8:
          n = xt;
          break;
        case 32:
          n = At;
          break;
        case 268435456:
          n = zt;
          break;
        default:
          n = At;
      }
      return ((l = nh.bind(null, t)), (n = Ze(n, l)), (t.callbackPriority = e), (t.callbackNode = n), e);
    }
    return (l !== null && l !== null && kn(l), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function nh(t, e) {
    if (Ae !== 0 && Ae !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (wo() && t.callbackNode !== n) return null;
    var l = wt;
    return (
      (l = Sa(t, t === Pt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (Hp(t, l, e), eh(t, Oe()), t.callbackNode != null && t.callbackNode === n ? nh.bind(null, t) : null)
    );
  }
  function ah(t, e) {
    if (wo()) return null;
    Hp(t, e, !0);
  }
  function Ay() {
    ky(function () {
      ($t & 6) !== 0 ? Ze(at, zy) : th();
    });
  }
  function Cc() {
    if (ka === 0) {
      var t = Yl;
      (t === 0 && ((t = ba), (ba <<= 1), (ba & 261888) === 0 && (ba = 256)), (ka = t));
    }
    return ka;
  }
  function lh(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null : typeof t == 'function' ? t : Lr('' + t);
  }
  function ih(t, e) {
    var n = e.ownerDocument.createElement('input');
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute('form', t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function My(t, e, n, l, r) {
    if (e === 'submit' && n && n.stateNode === r) {
      var s = lh((r[Fe] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[Fe] || null) ? lh(e.formAction) : d.getAttribute('formAction')),
        e !== null && ((s = e), (d = null)));
      var m = new Gr('action', 'action', null, l, r);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ka !== 0) {
                  var C = d ? ih(r, d) : new FormData(r);
                  qs(n, { pending: !0, data: C, method: r.method, action: s }, null, C);
                }
              } else
                typeof s == 'function' &&
                  (m.preventDefault(),
                  (C = d ? ih(r, d) : new FormData(r)),
                  qs(n, { pending: !0, data: C, method: r.method, action: s }, s, C));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Tc = 0; Tc < is.length; Tc++) {
    var Ec = is[Tc],
      Oy = Ec.toLowerCase(),
      Ry = Ec[0].toUpperCase() + Ec.slice(1);
    Dn(Oy, 'on' + Ry);
  }
  (Dn(Ud, 'onAnimationEnd'),
    Dn(Hd, 'onAnimationIteration'),
    Dn(kd, 'onAnimationStart'),
    Dn('dblclick', 'onDoubleClick'),
    Dn('focusin', 'onFocus'),
    Dn('focusout', 'onBlur'),
    Dn(X1, 'onTransitionRun'),
    Dn(Q1, 'onTransitionStart'),
    Dn(Z1, 'onTransitionCancel'),
    Dn(Ld, 'onTransitionEnd'),
    Ml('onMouseEnter', ['mouseout', 'mouseover']),
    Ml('onMouseLeave', ['mouseout', 'mouseover']),
    Ml('onPointerEnter', ['pointerout', 'pointerover']),
    Ml('onPointerLeave', ['pointerout', 'pointerover']),
    Ka('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ka('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Ka('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ka('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ka('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Ka('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
  var rr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    wy = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(rr));
  function rh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        r = l.event;
      l = l.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var m = l[d],
              C = m.instance,
              _ = m.currentTarget;
            if (((m = m.listener), C !== s && r.isPropagationStopped())) break t;
            ((s = m), (r.currentTarget = _));
            try {
              s(r);
            } catch (L) {
              Qr(L);
            }
            ((r.currentTarget = null), (s = C));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((m = l[d]),
              (C = m.instance),
              (_ = m.currentTarget),
              (m = m.listener),
              C !== s && r.isPropagationStopped())
            )
              break t;
            ((s = m), (r.currentTarget = _));
            try {
              s(r);
            } catch (L) {
              Qr(L);
            }
            ((r.currentTarget = null), (s = C));
          }
      }
    }
  }
  function Ot(t, e) {
    var n = e[Hu];
    n === void 0 && (n = e[Hu] = new Set());
    var l = t + '__bubble';
    n.has(l) || (oh(e, t, 2, !1), n.add(l));
  }
  function zc(t, e, n) {
    var l = 0;
    (e && (l |= 4), oh(n, t, l, e));
  }
  var Do = '_reactListening' + Math.random().toString(36).slice(2);
  function Ac(t) {
    if (!t[Do]) {
      ((t[Do] = !0),
        td.forEach(function (n) {
          n !== 'selectionchange' && (wy.has(n) || zc(n, !1, t), zc(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Do] || ((e[Do] = !0), zc('selectionchange', !1, e));
    }
  }
  function oh(t, e, n, l) {
    switch (Uh(e)) {
      case 2:
        var r = lv;
        break;
      case 8:
        r = iv;
        break;
      default:
        r = Yc;
    }
    ((n = r.bind(null, e, n, t)),
      (r = void 0),
      !Qu || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1));
  }
  function Mc(t, e, n, l, r) {
    var s = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var m = l.stateNode.containerInfo;
          if (m === r) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var C = d.tag;
              if ((C === 3 || C === 4) && d.stateNode.containerInfo === r) return;
              d = d.return;
            }
          for (; m !== null; ) {
            if (((d = El(m)), d === null)) return;
            if (((C = d.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              l = s = d;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    dd(function () {
      var _ = s,
        L = Vu(n),
        Q = [];
      t: {
        var D = $d.get(t);
        if (D !== void 0) {
          var U = Gr,
            rt = t;
          switch (t) {
            case 'keypress':
              if (Yr(n) === 0) break t;
            case 'keydown':
            case 'keyup':
              U = T1;
              break;
            case 'focusin':
              ((rt = 'focus'), (U = Fu));
              break;
            case 'focusout':
              ((rt = 'blur'), (U = Fu));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = Fu;
              break;
            case 'click':
              if (n.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              U = md;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = f1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = A1;
              break;
            case Ud:
            case Hd:
            case kd:
              U = h1;
              break;
            case Ld:
              U = O1;
              break;
            case 'scroll':
            case 'scrollend':
              U = s1;
              break;
            case 'wheel':
              U = w1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = g1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = yd;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = _1;
          }
          var ht = (e & 4) !== 0,
            Ft = !ht && (t === 'scroll' || t === 'scrollend'),
            M = ht ? (D !== null ? D + 'Capture' : null) : D;
          ht = [];
          for (var E = _, B; E !== null; ) {
            var G = E;
            if (
              ((B = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                B === null ||
                M === null ||
                ((G = Oi(E, M)), G != null && ht.push(or(E, G, B))),
              Ft)
            )
              break;
            E = E.return;
          }
          0 < ht.length && ((D = new U(D, rt, null, n, L)), Q.push({ event: D, listeners: ht }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === 'mouseover' || t === 'pointerover'),
            (U = t === 'mouseout' || t === 'pointerout'),
            D && n !== Gu && (rt = n.relatedTarget || n.fromElement) && (El(rt) || rt[Tl]))
          )
            break t;
          if (
            (U || D) &&
            ((D = L.window === L ? L : (D = L.ownerDocument) ? D.defaultView || D.parentWindow : window),
            U
              ? ((rt = n.relatedTarget || n.toElement),
                (U = _),
                (rt = rt ? El(rt) : null),
                rt !== null &&
                  ((Ft = f(rt)), (ht = rt.tag), rt !== Ft || (ht !== 5 && ht !== 27 && ht !== 6)) &&
                  (rt = null))
              : ((U = null), (rt = _)),
            U !== rt)
          ) {
            if (
              ((ht = md),
              (G = 'onMouseLeave'),
              (M = 'onMouseEnter'),
              (E = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((ht = yd), (G = 'onPointerLeave'), (M = 'onPointerEnter'), (E = 'pointer')),
              (Ft = U == null ? D : Mi(U)),
              (B = rt == null ? D : Mi(rt)),
              (D = new ht(G, E + 'leave', U, n, L)),
              (D.target = Ft),
              (D.relatedTarget = B),
              (G = null),
              El(L) === _ &&
                ((ht = new ht(M, E + 'enter', rt, n, L)), (ht.target = B), (ht.relatedTarget = Ft), (G = ht)),
              (Ft = G),
              U && rt)
            )
              e: {
                for (ht = By, M = U, E = rt, B = 0, G = M; G; G = ht(G)) B++;
                G = 0;
                for (var dt = E; dt; dt = ht(dt)) G++;
                for (; 0 < B - G; ) ((M = ht(M)), B--);
                for (; 0 < G - B; ) ((E = ht(E)), G--);
                for (; B--; ) {
                  if (M === E || (E !== null && M === E.alternate)) {
                    ht = M;
                    break e;
                  }
                  ((M = ht(M)), (E = ht(E)));
                }
                ht = null;
              }
            else ht = null;
            (U !== null && uh(Q, D, U, ht, !1), rt !== null && Ft !== null && uh(Q, Ft, rt, ht, !0));
          }
        }
        t: {
          if (
            ((D = _ ? Mi(_) : window),
            (U = D.nodeName && D.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && D.type === 'file'))
          )
            var Ht = zd;
          else if (Td(D))
            if (Ad) Ht = q1;
            else {
              Ht = $1;
              var ut = L1;
            }
          else
            ((U = D.nodeName),
              !U || U.toLowerCase() !== 'input' || (D.type !== 'checkbox' && D.type !== 'radio')
                ? _ && qu(_.elementType) && (Ht = zd)
                : (Ht = Y1));
          if (Ht && (Ht = Ht(t, _))) {
            Ed(Q, Ht, n, L);
            break t;
          }
          (ut && ut(t, D, _),
            t === 'focusout' && _ && D.type === 'number' && _.memoizedProps.value != null && Yu(D, 'number', D.value));
        }
        switch (((ut = _ ? Mi(_) : window), t)) {
          case 'focusin':
            (Td(ut) || ut.contentEditable === 'true') && ((Dl = ut), (ns = _), (Ui = null));
            break;
          case 'focusout':
            Ui = ns = Dl = null;
            break;
          case 'mousedown':
            as = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((as = !1), jd(Q, n, L));
            break;
          case 'selectionchange':
            if (V1) break;
          case 'keydown':
          case 'keyup':
            jd(Q, n, L);
        }
        var Ct;
        if (Pu)
          t: {
            switch (t) {
              case 'compositionstart':
                var Bt = 'onCompositionStart';
                break t;
              case 'compositionend':
                Bt = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                Bt = 'onCompositionUpdate';
                break t;
            }
            Bt = void 0;
          }
        else
          _l
            ? xd(t, n) && (Bt = 'onCompositionEnd')
            : t === 'keydown' && n.keyCode === 229 && (Bt = 'onCompositionStart');
        (Bt &&
          (vd &&
            n.locale !== 'ko' &&
            (_l || Bt !== 'onCompositionStart'
              ? Bt === 'onCompositionEnd' && _l && (Ct = pd())
              : ((Ca = L), (Zu = 'value' in Ca ? Ca.value : Ca.textContent), (_l = !0))),
          (ut = jo(_, Bt)),
          0 < ut.length &&
            ((Bt = new gd(Bt, t, null, n, L)),
            Q.push({ event: Bt, listeners: ut }),
            Ct ? (Bt.data = Ct) : ((Ct = Cd(n)), Ct !== null && (Bt.data = Ct)))),
          (Ct = j1 ? N1(t, n) : U1(t, n)) &&
            ((Bt = jo(_, 'onBeforeInput')),
            0 < Bt.length &&
              ((ut = new gd('onBeforeInput', 'beforeinput', null, n, L)),
              Q.push({ event: ut, listeners: Bt }),
              (ut.data = Ct))),
          My(Q, t, _, n, L));
      }
      rh(Q, e);
    });
  }
  function or(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function jo(t, e) {
    for (var n = e + 'Capture', l = []; t !== null; ) {
      var r = t,
        s = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          s === null ||
          ((r = Oi(t, n)), r != null && l.unshift(or(t, r, s)), (r = Oi(t, e)), r != null && l.push(or(t, r, s))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function By(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function uh(t, e, n, l, r) {
    for (var s = e._reactName, d = []; n !== null && n !== l; ) {
      var m = n,
        C = m.alternate,
        _ = m.stateNode;
      if (((m = m.tag), C !== null && C === l)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        _ === null ||
        ((C = _),
        r
          ? ((_ = Oi(n, s)), _ != null && d.unshift(or(n, _, C)))
          : r || ((_ = Oi(n, s)), _ != null && d.push(or(n, _, C)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var _y = /\r\n?/g,
    Dy = /\u0000|\uFFFD/g;
  function sh(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        _y,
        `
`
      )
      .replace(Dy, '');
  }
  function ch(t, e) {
    return ((e = sh(e)), sh(t) === e);
  }
  function Jt(t, e, n, l, r, s) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? e === 'body' || (e === 'textarea' && l === '') || Rl(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && e !== 'body' && Rl(t, '' + l);
        break;
      case 'className':
        Hr(t, 'class', l);
        break;
      case 'tabIndex':
        Hr(t, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Hr(t, n, l);
        break;
      case 'style':
        cd(t, l, s);
        break;
      case 'data':
        if (e !== 'object') {
          Hr(t, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (e !== 'a' || n !== 'href')) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          t.removeAttribute(n);
          break;
        }
        ((l = Lr('' + l)), t.setAttribute(n, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == 'function' &&
            (n === 'formAction'
              ? (e !== 'input' && Jt(t, e, 'name', r.name, r, null),
                Jt(t, e, 'formEncType', r.formEncType, r, null),
                Jt(t, e, 'formMethod', r.formMethod, r, null),
                Jt(t, e, 'formTarget', r.formTarget, r, null))
              : (Jt(t, e, 'encType', r.encType, r, null),
                Jt(t, e, 'method', r.method, r, null),
                Jt(t, e, 'target', r.target, r, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          t.removeAttribute(n);
          break;
        }
        ((l = Lr('' + l)), t.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (t.onclick = Pn);
        break;
      case 'onScroll':
        l != null && Ot('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Ot('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        t.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        t.muted = l && typeof l != 'function' && typeof l != 'symbol';
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
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          t.removeAttribute('xlink:href');
          break;
        }
        ((n = Lr('' + l)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol' ? t.setAttribute(n, '' + l) : t.removeAttribute(n);
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
        l && typeof l != 'function' && typeof l != 'symbol' ? t.setAttribute(n, '') : t.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? t.setAttribute(n, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? t.setAttribute(n, l)
            : t.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case 'popover':
        (Ot('beforetoggle', t), Ot('toggle', t), Ur(t, 'popover', l));
        break;
      case 'xlinkActuate':
        Wn(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Wn(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Wn(t, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Wn(t, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Wn(t, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Wn(t, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Wn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Wn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Wn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        Ur(t, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = o1.get(n) || n), Ur(t, n, l));
    }
  }
  function Oc(t, e, n, l, r, s) {
    switch (n) {
      case 'style':
        cd(t, l, s);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string' ? Rl(t, l) : (typeof l == 'number' || typeof l == 'bigint') && Rl(t, '' + l);
        break;
      case 'onScroll':
        l != null && Ot('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Ot('scrollend', t);
        break;
      case 'onClick':
        l != null && (t.onclick = Pn);
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
        if (!ed.hasOwnProperty(n))
          t: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((r = n.endsWith('Capture')),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (s = t[Fe] || null),
              (s = s != null ? s[n] : null),
              typeof s == 'function' && t.removeEventListener(e, s, r),
              typeof l == 'function')
            ) {
              (typeof s != 'function' &&
                s !== null &&
                (n in t ? (t[n] = null) : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, r));
              break t;
            }
            n in t ? (t[n] = l) : l === !0 ? t.setAttribute(n, '') : Ur(t, n, l);
          }
    }
  }
  function Ne(t, e, n) {
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
        (Ot('error', t), Ot('load', t));
        var l = !1,
          r = !1,
          s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var d = n[s];
            if (d != null)
              switch (s) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  r = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(u(137, e));
                default:
                  Jt(t, e, s, d, n, null);
              }
          }
        (r && Jt(t, e, 'srcSet', n.srcSet, n, null), l && Jt(t, e, 'src', n.src, n, null));
        return;
      case 'input':
        Ot('invalid', t);
        var m = (s = d = r = null),
          C = null,
          _ = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var L = n[l];
            if (L != null)
              switch (l) {
                case 'name':
                  r = L;
                  break;
                case 'type':
                  d = L;
                  break;
                case 'checked':
                  C = L;
                  break;
                case 'defaultChecked':
                  _ = L;
                  break;
                case 'value':
                  s = L;
                  break;
                case 'defaultValue':
                  m = L;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (L != null) throw Error(u(137, e));
                  break;
                default:
                  Jt(t, e, l, L, n, null);
              }
          }
        rd(t, s, m, C, _, d, r, !1);
        return;
      case 'select':
        (Ot('invalid', t), (l = d = s = null));
        for (r in n)
          if (n.hasOwnProperty(r) && ((m = n[r]), m != null))
            switch (r) {
              case 'value':
                s = m;
                break;
              case 'defaultValue':
                d = m;
                break;
              case 'multiple':
                l = m;
              default:
                Jt(t, e, r, m, n, null);
            }
        ((e = s), (n = d), (t.multiple = !!l), e != null ? Ol(t, !!l, e, !1) : n != null && Ol(t, !!l, n, !0));
        return;
      case 'textarea':
        (Ot('invalid', t), (s = r = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((m = n[d]), m != null))
            switch (d) {
              case 'value':
                l = m;
                break;
              case 'defaultValue':
                r = m;
                break;
              case 'children':
                s = m;
                break;
              case 'dangerouslySetInnerHTML':
                if (m != null) throw Error(u(91));
                break;
              default:
                Jt(t, e, d, m, n, null);
            }
        ud(t, l, r, s);
        return;
      case 'option':
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case 'selected':
                t.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Jt(t, e, C, l, n, null);
            }
        return;
      case 'dialog':
        (Ot('beforetoggle', t), Ot('toggle', t), Ot('cancel', t), Ot('close', t));
        break;
      case 'iframe':
      case 'object':
        Ot('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < rr.length; l++) Ot(rr[l], t);
        break;
      case 'image':
        (Ot('error', t), Ot('load', t));
        break;
      case 'details':
        Ot('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ot('error', t), Ot('load', t));
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
        for (_ in n)
          if (n.hasOwnProperty(_) && ((l = n[_]), l != null))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u(137, e));
              default:
                Jt(t, e, _, l, n, null);
            }
        return;
      default:
        if (qu(e)) {
          for (L in n) n.hasOwnProperty(L) && ((l = n[L]), l !== void 0 && Oc(t, e, L, l, n, void 0));
          return;
        }
    }
    for (m in n) n.hasOwnProperty(m) && ((l = n[m]), l != null && Jt(t, e, m, l, n, null));
  }
  function jy(t, e, n, l) {
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
        var r = null,
          s = null,
          d = null,
          m = null,
          C = null,
          _ = null,
          L = null;
        for (U in n) {
          var Q = n[U];
          if (n.hasOwnProperty(U) && Q != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                C = Q;
              default:
                l.hasOwnProperty(U) || Jt(t, e, U, null, l, Q);
            }
        }
        for (var D in l) {
          var U = l[D];
          if (((Q = n[D]), l.hasOwnProperty(D) && (U != null || Q != null)))
            switch (D) {
              case 'type':
                s = U;
                break;
              case 'name':
                r = U;
                break;
              case 'checked':
                _ = U;
                break;
              case 'defaultChecked':
                L = U;
                break;
              case 'value':
                d = U;
                break;
              case 'defaultValue':
                m = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(u(137, e));
                break;
              default:
                U !== Q && Jt(t, e, D, U, l, Q);
            }
        }
        $u(t, d, m, C, _, L, s, r);
        return;
      case 'select':
        U = d = m = D = null;
        for (s in n)
          if (((C = n[s]), n.hasOwnProperty(s) && C != null))
            switch (s) {
              case 'value':
                break;
              case 'multiple':
                U = C;
              default:
                l.hasOwnProperty(s) || Jt(t, e, s, null, l, C);
            }
        for (r in l)
          if (((s = l[r]), (C = n[r]), l.hasOwnProperty(r) && (s != null || C != null)))
            switch (r) {
              case 'value':
                D = s;
                break;
              case 'defaultValue':
                m = s;
                break;
              case 'multiple':
                d = s;
              default:
                s !== C && Jt(t, e, r, s, l, C);
            }
        ((e = m),
          (n = d),
          (l = U),
          D != null ? Ol(t, !!n, D, !1) : !!l != !!n && (e != null ? Ol(t, !!n, e, !0) : Ol(t, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        U = D = null;
        for (m in n)
          if (((r = n[m]), n.hasOwnProperty(m) && r != null && !l.hasOwnProperty(m)))
            switch (m) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Jt(t, e, m, null, l, r);
            }
        for (d in l)
          if (((r = l[d]), (s = n[d]), l.hasOwnProperty(d) && (r != null || s != null)))
            switch (d) {
              case 'value':
                D = r;
                break;
              case 'defaultValue':
                U = r;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== s && Jt(t, e, d, r, l, s);
            }
        od(t, D, U);
        return;
      case 'option':
        for (var rt in n)
          if (((D = n[rt]), n.hasOwnProperty(rt) && D != null && !l.hasOwnProperty(rt)))
            switch (rt) {
              case 'selected':
                t.selected = !1;
                break;
              default:
                Jt(t, e, rt, null, l, D);
            }
        for (C in l)
          if (((D = l[C]), (U = n[C]), l.hasOwnProperty(C) && D !== U && (D != null || U != null)))
            switch (C) {
              case 'selected':
                t.selected = D && typeof D != 'function' && typeof D != 'symbol';
                break;
              default:
                Jt(t, e, C, D, l, U);
            }
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
        for (var ht in n)
          ((D = n[ht]), n.hasOwnProperty(ht) && D != null && !l.hasOwnProperty(ht) && Jt(t, e, ht, null, l, D));
        for (_ in l)
          if (((D = l[_]), (U = n[_]), l.hasOwnProperty(_) && D !== U && (D != null || U != null)))
            switch (_) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (D != null) throw Error(u(137, e));
                break;
              default:
                Jt(t, e, _, D, l, U);
            }
        return;
      default:
        if (qu(e)) {
          for (var Ft in n)
            ((D = n[Ft]), n.hasOwnProperty(Ft) && D !== void 0 && !l.hasOwnProperty(Ft) && Oc(t, e, Ft, void 0, l, D));
          for (L in l)
            ((D = l[L]),
              (U = n[L]),
              !l.hasOwnProperty(L) || D === U || (D === void 0 && U === void 0) || Oc(t, e, L, D, l, U));
          return;
        }
    }
    for (var M in n) ((D = n[M]), n.hasOwnProperty(M) && D != null && !l.hasOwnProperty(M) && Jt(t, e, M, null, l, D));
    for (Q in l)
      ((D = l[Q]), (U = n[Q]), !l.hasOwnProperty(Q) || D === U || (D == null && U == null) || Jt(t, e, Q, D, l, U));
  }
  function fh(t) {
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
  function Ny() {
    if (typeof performance.getEntriesByType == 'function') {
      for (var t = 0, e = 0, n = performance.getEntriesByType('resource'), l = 0; l < n.length; l++) {
        var r = n[l],
          s = r.transferSize,
          d = r.initiatorType,
          m = r.duration;
        if (s && m && fh(d)) {
          for (d = 0, m = r.responseEnd, l += 1; l < n.length; l++) {
            var C = n[l],
              _ = C.startTime;
            if (_ > m) break;
            var L = C.transferSize,
              Q = C.initiatorType;
            L && fh(Q) && ((C = C.responseEnd), (d += L * (C < m ? 1 : (m - _) / (C - _))));
          }
          if ((--l, (e += (8 * (s + d)) / (r.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number') ? t : 5;
  }
  var Rc = null,
    wc = null;
  function No(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function dh(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function ph(t, e) {
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
  function Bc(t, e) {
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
  var _c = null;
  function Uy() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === _c ? !1 : ((_c = t), !0)) : ((_c = null), !1);
  }
  var hh = typeof setTimeout == 'function' ? setTimeout : void 0,
    Hy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    mh = typeof Promise == 'function' ? Promise : void 0,
    ky =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof mh < 'u'
          ? function (t) {
              return mh.resolve(null).then(t).catch(Ly);
            }
          : hh;
  function Ly(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function La(t) {
    return t === 'head';
  }
  function gh(t, e) {
    var n = e,
      l = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (t.removeChild(r), ri(e));
            return;
          }
          l--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') l++;
        else if (n === 'html') ur(t.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = t.ownerDocument.head), ur(n));
          for (var s = n.firstChild; s; ) {
            var d = s.nextSibling,
              m = s.nodeName;
            (s[Ai] ||
              m === 'SCRIPT' ||
              m === 'STYLE' ||
              (m === 'LINK' && s.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(s),
              (s = d));
          }
        } else n === 'body' && ur(t.ownerDocument.body);
      n = r;
    } while (n);
    ri(e);
  }
  function yh(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display), (n.style.display = 'none'))
            : ((n.style.display = n._stashedDisplay || ''),
              n.getAttribute('style') === '' && n.removeAttribute('style'))
          : n.nodeType === 3 &&
            (e ? ((n._stashedText = n.nodeValue), (n.nodeValue = '')) : (n.nodeValue = n._stashedText || '')),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === '/$')) {
          if (t === 0) break;
          t--;
        } else (n !== '$' && n !== '$?' && n !== '$~' && n !== '$!') || t++;
      n = l;
    } while (n);
  }
  function Dc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Dc(n), ku(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(n);
    }
  }
  function $y(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (l) {
        if (!t[Ai])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (((s = t.getAttribute('rel')), s === 'stylesheet' && t.hasAttribute('data-precedence'))) break;
              if (
                s !== r.rel ||
                t.getAttribute('href') !== (r.href == null || r.href === '' ? null : r.href) ||
                t.getAttribute('crossorigin') !== (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute('title') !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((s = t.getAttribute('src')),
                (s !== (r.src == null ? null : r.src) ||
                  t.getAttribute('type') !== (r.type == null ? null : r.type) ||
                  t.getAttribute('crossorigin') !== (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  s &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var s = r.name == null ? null : '' + r.name;
        if (r.type === 'hidden' && t.getAttribute('name') === s) return t;
      } else return t;
      if (((t = An(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Yy(t, e, n) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !n) ||
        ((t = An(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function vh(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
        ((t = An(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function jc(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function Nc(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading');
  }
  function qy(t, e) {
    var n = t.ownerDocument;
    if (t.data === '$~') t._reactRetry = e;
    else if (t.data !== '$?' || n.readyState !== 'loading') e();
    else {
      var l = function () {
        (e(), n.removeEventListener('DOMContentLoaded', l));
      };
      (n.addEventListener('DOMContentLoaded', l), (t._reactRetry = l));
    }
  }
  function An(t) {
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
  var Uc = null;
  function bh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === '/$' || n === '/&') {
          if (e === 0) return An(t.nextSibling);
          e--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Sh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === '$' || n === '$!' || n === '$?' || n === '$~' || n === '&') {
          if (e === 0) return t;
          e--;
        } else (n !== '/$' && n !== '/&') || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function xh(t, e, n) {
    switch (((e = No(n)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function ur(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    ku(t);
  }
  var Mn = new Map(),
    Ch = new Set();
  function Uo(t) {
    return typeof t.getRootNode == 'function' ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ha = F.d;
  F.d = { f: Gy, r: Vy, D: Xy, C: Qy, L: Zy, m: Ky, X: Fy, S: Jy, M: Wy };
  function Gy() {
    var t = ha.f(),
      e = Mo();
    return t || e;
  }
  function Vy(t) {
    var e = zl(t);
    e !== null && e.tag === 5 && e.type === 'form' ? L0(e) : ha.r(t);
  }
  var ai = typeof document > 'u' ? null : document;
  function Th(t, e, n) {
    var l = ai;
    if (l && typeof e == 'string' && e) {
      var r = bn(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == 'string' && (r += '[crossorigin="' + n + '"]'),
        Ch.has(r) ||
          (Ch.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement('link')), Ne(e, 'link', t), Re(e), l.head.appendChild(e))));
    }
  }
  function Xy(t) {
    (ha.D(t), Th('dns-prefetch', t, null));
  }
  function Qy(t, e) {
    (ha.C(t, e), Th('preconnect', t, e));
  }
  function Zy(t, e, n) {
    ha.L(t, e, n);
    var l = ai;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + bn(e) + '"]';
      e === 'image' && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + bn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (r += '[imagesizes="' + bn(n.imageSizes) + '"]'))
        : (r += '[href="' + bn(t) + '"]');
      var s = r;
      switch (e) {
        case 'style':
          s = li(t);
          break;
        case 'script':
          s = ii(t);
      }
      Mn.has(s) ||
        ((t = S({ rel: 'preload', href: e === 'image' && n && n.imageSrcSet ? void 0 : t, as: e }, n)),
        Mn.set(s, t),
        l.querySelector(r) !== null ||
          (e === 'style' && l.querySelector(sr(s))) ||
          (e === 'script' && l.querySelector(cr(s))) ||
          ((e = l.createElement('link')), Ne(e, 'link', t), Re(e), l.head.appendChild(e)));
    }
  }
  function Ky(t, e) {
    ha.m(t, e);
    var n = ai;
    if (n && t) {
      var l = e && typeof e.as == 'string' ? e.as : 'script',
        r = 'link[rel="modulepreload"][as="' + bn(l) + '"][href="' + bn(t) + '"]',
        s = r;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          s = ii(t);
      }
      if (!Mn.has(s) && ((t = S({ rel: 'modulepreload', href: t }, e)), Mn.set(s, t), n.querySelector(r) === null)) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(cr(s))) return;
        }
        ((l = n.createElement('link')), Ne(l, 'link', t), Re(l), n.head.appendChild(l));
      }
    }
  }
  function Jy(t, e, n) {
    ha.S(t, e, n);
    var l = ai;
    if (l && t) {
      var r = Al(l).hoistableStyles,
        s = li(t);
      e = e || 'default';
      var d = r.get(s);
      if (!d) {
        var m = { loading: 0, preload: null };
        if ((d = l.querySelector(sr(s)))) m.loading = 5;
        else {
          ((t = S({ rel: 'stylesheet', href: t, 'data-precedence': e }, n)), (n = Mn.get(s)) && Hc(t, n));
          var C = (d = l.createElement('link'));
          (Re(C),
            Ne(C, 'link', t),
            (C._p = new Promise(function (_, L) {
              ((C.onload = _), (C.onerror = L));
            })),
            C.addEventListener('load', function () {
              m.loading |= 1;
            }),
            C.addEventListener('error', function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            Ho(d, e, l));
        }
        ((d = { type: 'stylesheet', instance: d, count: 1, state: m }), r.set(s, d));
      }
    }
  }
  function Fy(t, e) {
    ha.X(t, e);
    var n = ai;
    if (n && t) {
      var l = Al(n).hoistableScripts,
        r = ii(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(cr(r))),
        s ||
          ((t = S({ src: t, async: !0 }, e)),
          (e = Mn.get(r)) && kc(t, e),
          (s = n.createElement('script')),
          Re(s),
          Ne(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function Wy(t, e) {
    ha.M(t, e);
    var n = ai;
    if (n && t) {
      var l = Al(n).hoistableScripts,
        r = ii(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(cr(r))),
        s ||
          ((t = S({ src: t, async: !0, type: 'module' }, e)),
          (e = Mn.get(r)) && kc(t, e),
          (s = n.createElement('script')),
          Re(s),
          Ne(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function Eh(t, e, n, l) {
    var r = (r = ot.current) ? Uo(r) : null;
    if (!r) throw Error(u(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((e = li(n.href)),
            (n = Al(r).hoistableStyles),
            (l = n.get(e)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(e, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
          t = li(n.href);
          var s = Al(r).hoistableStyles,
            d = s.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              s.set(t, d),
              (s = r.querySelector(sr(t))) && !s._p && ((d.instance = s), (d.state.loading = 5)),
              Mn.has(t) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Mn.set(t, n),
                s || Py(r, t, n, d.state))),
            e && l === null)
          )
            throw Error(u(528, ''));
          return d;
        }
        if (e && l !== null) throw Error(u(529, ''));
        return null;
      case 'script':
        return (
          (e = n.async),
          (n = n.src),
          typeof n == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
            ? ((e = ii(n)),
              (n = Al(r).hoistableScripts),
              (l = n.get(e)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(e, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function li(t) {
    return 'href="' + bn(t) + '"';
  }
  function sr(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function zh(t) {
    return S({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Py(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (l.loading = 1)
      : ((e = t.createElement('link')),
        (l.preload = e),
        e.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        e.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        Ne(e, 'link', n),
        Re(e),
        t.head.appendChild(e));
  }
  function ii(t) {
    return '[src="' + bn(t) + '"]';
  }
  function cr(t) {
    return 'script[async]' + t;
  }
  function Ah(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var l = t.querySelector('style[data-href~="' + bn(n.href) + '"]');
          if (l) return ((e.instance = l), Re(l), l);
          var r = S({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (t.ownerDocument || t).createElement('style')),
            Re(l),
            Ne(l, 'style', r),
            Ho(l, n.precedence, t),
            (e.instance = l)
          );
        case 'stylesheet':
          r = li(n.href);
          var s = t.querySelector(sr(r));
          if (s) return ((e.state.loading |= 4), (e.instance = s), Re(s), s);
          ((l = zh(n)), (r = Mn.get(r)) && Hc(l, r), (s = (t.ownerDocument || t).createElement('link')), Re(s));
          var d = s;
          return (
            (d._p = new Promise(function (m, C) {
              ((d.onload = m), (d.onerror = C));
            })),
            Ne(s, 'link', l),
            (e.state.loading |= 4),
            Ho(s, n.precedence, t),
            (e.instance = s)
          );
        case 'script':
          return (
            (s = ii(n.src)),
            (r = t.querySelector(cr(s)))
              ? ((e.instance = r), Re(r), r)
              : ((l = n),
                (r = Mn.get(s)) && ((l = S({}, n)), kc(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement('script')),
                Re(r),
                Ne(r, 'link', l),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case 'void':
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Ho(l, n.precedence, t));
    return e.instance;
  }
  function Ho(t, e, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        r = l.length ? l[l.length - 1] : null,
        s = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var m = l[d];
      if (m.dataset.precedence === e) s = m;
      else if (s !== r) break;
    }
    s
      ? s.parentNode.insertBefore(t, s.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Hc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function kc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ko = null;
  function Mh(t, e, n) {
    if (ko === null) {
      var l = new Map(),
        r = (ko = new Map());
      r.set(n, l);
    } else ((r = ko), (l = r.get(n)), l || ((l = new Map()), r.set(n, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var s = n[r];
      if (
        !(s[Ai] || s[Be] || (t === 'link' && s.getAttribute('rel') === 'stylesheet')) &&
        s.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var d = s.getAttribute(e) || '';
        d = t + d;
        var m = l.get(d);
        m ? m.push(s) : l.set(d, [s]);
      }
    }
    return l;
  }
  function Oh(t, e, n) {
    ((t = t.ownerDocument || t), t.head.insertBefore(n, e === 'title' ? t.querySelector('head > title') : null));
  }
  function Iy(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break;
        return !0;
      case 'link':
        if (typeof e.rel != 'string' || typeof e.href != 'string' || e.href === '' || e.onLoad || e.onError) break;
        switch (e.rel) {
          case 'stylesheet':
            return ((t = e.disabled), typeof e.precedence == 'string' && t == null);
          default:
            return !0;
        }
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
  function Rh(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function tv(t, e, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var r = li(l.href),
          s = e.querySelector(sr(r));
        if (s) {
          ((e = s._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = Lo.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = s),
            Re(s));
          return;
        }
        ((s = e.ownerDocument || e), (l = zh(l)), (r = Mn.get(r)) && Hc(l, r), (s = s.createElement('link')), Re(s));
        var d = s;
        ((d._p = new Promise(function (m, C) {
          ((d.onload = m), (d.onerror = C));
        })),
          Ne(s, 'link', l),
          (n.instance = s));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++, (n = Lo.bind(t)), e.addEventListener('load', n), e.addEventListener('error', n)));
    }
  }
  var Lc = 0;
  function ev(t, e) {
    return (
      t.stylesheets && t.count === 0 && Yo(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Yo(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                ((t.unsuspend = null), s());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Lc === 0 && (Lc = 62500 * Ny());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1), t.count === 0 && (t.stylesheets && Yo(t, t.stylesheets), t.unsuspend))
                ) {
                  var s = t.unsuspend;
                  ((t.unsuspend = null), s());
                }
              },
              (t.imgBytes > Lc ? 50 : 800) + e
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function Lo() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Yo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var $o = null;
  function Yo(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null && (t.count++, ($o = new Map()), e.forEach(nv, t), ($o = null), Lo.call(t)));
  }
  function nv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = $o.get(t);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), $o.set(t, n));
        for (var r = t.querySelectorAll('link[data-precedence],style[data-precedence]'), s = 0; s < r.length; s++) {
          var d = r[s];
          (d.nodeName === 'LINK' || d.getAttribute('media') !== 'not all') && (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      ((r = e.instance),
        (d = r.getAttribute('data-precedence')),
        (s = n.get(d) || l),
        s === l && n.set(null, r),
        n.set(d, r),
        this.count++,
        (l = Lo.bind(this)),
        r.addEventListener('load', l),
        r.addEventListener('error', l),
        s
          ? s.parentNode.insertBefore(r, s.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var fr = { $$typeof: J, Provider: null, Consumer: null, _currentValue: I, _currentValue2: I, _threadCount: 0 };
  function av(t, e, n, l, r, s, d, m, C) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ju(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ju(0)),
      (this.hiddenUpdates = ju(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = s),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map()));
  }
  function wh(t, e, n, l, r, s, d, m, C, _, L, Q) {
    return (
      (t = new av(t, e, n, d, C, _, L, Q, m)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = cn(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (e = vs()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: l, isDehydrated: n, cache: e }),
      Cs(s),
      t
    );
  }
  function Bh(t) {
    return t ? ((t = Ul), t) : Ul;
  }
  function _h(t, e, n, l, r, s) {
    ((r = Bh(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Oa(e)),
      (l.payload = { element: n }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (n = Ra(t, l, e)),
      n !== null && (nn(n, t, e), Gi(n, t, e)));
  }
  function Dh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function $c(t, e) {
    (Dh(t, e), (t = t.alternate) && Dh(t, e));
  }
  function jh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pa(t, 67108864);
      (e !== null && nn(e, t, 67108864), $c(t, 67108864));
    }
  }
  function Nh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = mn();
      e = Nu(e);
      var n = Pa(t, e);
      (n !== null && nn(n, t, e), $c(t, e));
    }
  }
  var qo = !0;
  function lv(t, e, n, l) {
    var r = z.T;
    z.T = null;
    var s = F.p;
    try {
      ((F.p = 2), Yc(t, e, n, l));
    } finally {
      ((F.p = s), (z.T = r));
    }
  }
  function iv(t, e, n, l) {
    var r = z.T;
    z.T = null;
    var s = F.p;
    try {
      ((F.p = 8), Yc(t, e, n, l));
    } finally {
      ((F.p = s), (z.T = r));
    }
  }
  function Yc(t, e, n, l) {
    if (qo) {
      var r = qc(l);
      if (r === null) (Mc(t, e, l, Go, n), Hh(t, l));
      else if (ov(r, t, e, n, l)) l.stopPropagation();
      else if ((Hh(t, l), e & 4 && -1 < rv.indexOf(t))) {
        for (; r !== null; ) {
          var s = zl(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var d = ee(s.pendingLanes);
                  if (d !== 0) {
                    var m = s;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                      var C = 1 << (31 - qe(d));
                      ((m.entanglements[1] |= C), (d &= ~C));
                    }
                    (Gn(s), ($t & 6) === 0 && ((zo = Oe() + 500), ir(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = Pa(s, 2)), m !== null && nn(m, s, 2), Mo(), $c(s, 2));
            }
          if (((s = qc(l)), s === null && Mc(t, e, l, Go, n), s === r)) break;
          r = s;
        }
        r !== null && l.stopPropagation();
      } else Mc(t, e, l, null, n);
    }
  }
  function qc(t) {
    return ((t = Vu(t)), Gc(t));
  }
  var Go = null;
  function Gc(t) {
    if (((Go = null), (t = El(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Go = t), null);
  }
  function Uh(t) {
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
        switch (lt()) {
          case at:
            return 2;
          case xt:
            return 8;
          case At:
          case Dt:
            return 32;
          case zt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = !1,
    $a = null,
    Ya = null,
    qa = null,
    dr = new Map(),
    pr = new Map(),
    Ga = [],
    rv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Hh(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        $a = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ya = null;
        break;
      case 'mouseover':
      case 'mouseout':
        qa = null;
        break;
      case 'pointerover':
      case 'pointerout':
        dr.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        pr.delete(e.pointerId);
    }
  }
  function hr(t, e, n, l, r, s) {
    return t === null || t.nativeEvent !== s
      ? ((t = { blockedOn: e, domEventName: n, eventSystemFlags: l, nativeEvent: s, targetContainers: [r] }),
        e !== null && ((e = zl(e)), e !== null && jh(e)),
        t)
      : ((t.eventSystemFlags |= l), (e = t.targetContainers), r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function ov(t, e, n, l, r) {
    switch (e) {
      case 'focusin':
        return (($a = hr($a, t, e, n, l, r)), !0);
      case 'dragenter':
        return ((Ya = hr(Ya, t, e, n, l, r)), !0);
      case 'mouseover':
        return ((qa = hr(qa, t, e, n, l, r)), !0);
      case 'pointerover':
        var s = r.pointerId;
        return (dr.set(s, hr(dr.get(s) || null, t, e, n, l, r)), !0);
      case 'gotpointercapture':
        return ((s = r.pointerId), pr.set(s, hr(pr.get(s) || null, t, e, n, l, r)), !0);
    }
    return !1;
  }
  function kh(t) {
    var e = El(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              Pf(t.priority, function () {
                Nh(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = h(n)), e !== null)) {
            ((t.blockedOn = e),
              Pf(t.priority, function () {
                Nh(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Vo(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = qc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Gu = l), n.target.dispatchEvent(l), (Gu = null));
      } else return ((e = zl(n)), e !== null && jh(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Lh(t, e, n) {
    Vo(t) && n.delete(e);
  }
  function uv() {
    ((Vc = !1),
      $a !== null && Vo($a) && ($a = null),
      Ya !== null && Vo(Ya) && (Ya = null),
      qa !== null && Vo(qa) && (qa = null),
      dr.forEach(Lh),
      pr.forEach(Lh));
  }
  function Xo(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), Vc || ((Vc = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, uv)));
  }
  var Qo = null;
  function $h(t) {
    Qo !== t &&
      ((Qo = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Qo === t && (Qo = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != 'function') {
            if (Gc(l || n) === null) continue;
            break;
          }
          var s = zl(n);
          s !== null && (t.splice(e, 3), (e -= 3), qs(s, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function ri(t) {
    function e(C) {
      return Xo(C, t);
    }
    ($a !== null && Xo($a, t), Ya !== null && Xo(Ya, t), qa !== null && Xo(qa, t), dr.forEach(e), pr.forEach(e));
    for (var n = 0; n < Ga.length; n++) {
      var l = Ga[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ga.length && ((n = Ga[0]), n.blockedOn === null); ) (kh(n), n.blockedOn === null && Ga.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          s = n[l + 1],
          d = r[Fe] || null;
        if (typeof s == 'function') d || $h(n);
        else if (d) {
          var m = null;
          if (s && s.hasAttribute('formAction')) {
            if (((r = s), (d = s[Fe] || null))) m = d.formAction;
            else if (Gc(r) !== null) continue;
          } else m = d.action;
          (typeof m == 'function' ? (n[l + 1] = m) : (n.splice(l, 3), (l -= 3)), $h(n));
        }
      }
  }
  function Yh() {
    function t(s) {
      s.canIntercept &&
        s.info === 'react-transition' &&
        s.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (r = d);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function e() {
      (r !== null && (r(), (r = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s &&
          s.url != null &&
          navigation.navigate(s.url, { state: s.getState(), info: 'react-transition', history: 'replace' });
      }
    }
    if (typeof navigation == 'object') {
      var l = !1,
        r = null;
      return (
        navigation.addEventListener('navigate', t),
        navigation.addEventListener('navigatesuccess', e),
        navigation.addEventListener('navigateerror', e),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener('navigate', t),
            navigation.removeEventListener('navigatesuccess', e),
            navigation.removeEventListener('navigateerror', e),
            r !== null && (r(), (r = null)));
        }
      );
    }
  }
  function Xc(t) {
    this._internalRoot = t;
  }
  ((Zo.prototype.render = Xc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        l = mn();
      _h(n, l, t, e, null, null);
    }),
    (Zo.prototype.unmount = Xc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (_h(t.current, 2, null, t, null, null), Mo(), (e[Tl] = null));
        }
      }));
  function Zo(t) {
    this._internalRoot = t;
  }
  Zo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Wf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ga.length && e !== 0 && e < Ga[n].priority; n++);
      (Ga.splice(n, 0, t), n === 0 && kh(t));
    }
  };
  var qh = i.version;
  if (qh !== '19.2.0') throw Error(u(527, qh, '19.2.0'));
  F.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ? Error(u(188)) : ((t = Object.keys(t).join(',')), Error(u(268, t)));
    return ((t = g(e)), (t = t !== null ? b(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var sv = {
    bundleType: 0,
    version: '19.2.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: z,
    reconcilerVersion: '19.2.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ko.isDisabled && Ko.supportsFiber)
      try {
        ((It = Ko.inject(sv)), (ie = Ko));
      } catch {}
  }
  return (
    (gr.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        l = '',
        r = J0,
        s = F0,
        d = W0;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = wh(t, 1, !1, null, null, n, l, null, r, s, d, Yh)),
        (t[Tl] = e.current),
        Ac(t),
        new Xc(e)
      );
    }),
    (gr.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var l = !1,
        r = '',
        s = J0,
        d = F0,
        m = W0,
        C = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (C = n.formState)),
        (e = wh(t, 1, !0, e, n ?? null, l, r, C, s, d, m, Yh)),
        (e.context = Bh(null)),
        (n = e.current),
        (l = mn()),
        (l = Nu(l)),
        (r = Oa(l)),
        (r.callback = null),
        Ra(n, r, l),
        (n = l),
        (e.current.lanes = n),
        zi(e, n),
        Gn(e),
        (t[Tl] = e.current),
        Ac(t),
        new Zo(e)
      );
    }),
    (gr.version = '19.2.0'),
    gr
  );
}
var Ph;
function bv() {
  if (Ph) return Kc.exports;
  Ph = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Kc.exports = vv()), Kc.exports);
}
var Sv = bv();
const zr = { black: '#000', white: '#fff' },
  oi = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  ui = { 50: '#f3e5f5', 200: '#ce93d8', 300: '#ba68c8', 400: '#ab47bc', 500: '#9c27b0', 700: '#7b1fa2' },
  si = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  ci = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  fi = { 300: '#81c784', 400: '#66bb6a', 500: '#4caf50', 700: '#388e3c', 800: '#2e7d32', 900: '#1b5e20' },
  yr = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  xv = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  };
function bl(a, ...i) {
  const o = new URL(`https://mui.com/production-error/?code=${a}`);
  return (
    i.forEach((u) => o.searchParams.append('args[]', u)),
    `Minified MUI error #${a}; visit ${o} for the full message.`
  );
}
const zf = '$$material';
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o) ({}).hasOwnProperty.call(o, u) && (a[u] = o[u]);
          }
          return a;
        }),
    uu.apply(null, arguments)
  );
}
function Cv(a) {
  if (a.sheet) return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a) return document.styleSheets[i];
}
function Tv(a) {
  var i = document.createElement('style');
  return (
    i.setAttribute('data-emotion', a.key),
    a.nonce !== void 0 && i.setAttribute('nonce', a.nonce),
    i.appendChild(document.createTextNode('')),
    i.setAttribute('data-s', ''),
    i
  );
}
var Ev = (function () {
    function a(o) {
      var u = this;
      ((this._insertTag = function (c) {
        var f;
        (u.tags.length === 0
          ? u.insertionPoint
            ? (f = u.insertionPoint.nextSibling)
            : u.prepend
              ? (f = u.container.firstChild)
              : (f = u.before)
          : (f = u.tags[u.tags.length - 1].nextSibling),
          u.container.insertBefore(c, f),
          u.tags.push(c));
      }),
        (this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = o.nonce),
        (this.key = o.key),
        (this.container = o.container),
        (this.prepend = o.prepend),
        (this.insertionPoint = o.insertionPoint),
        (this.before = null));
    }
    var i = a.prototype;
    return (
      (i.hydrate = function (u) {
        u.forEach(this._insertTag);
      }),
      (i.insert = function (u) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tv(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = Cv(c);
          try {
            f.insertRule(u, f.cssRules.length);
          } catch {}
        } else c.appendChild(document.createTextNode(u));
        this.ctr++;
      }),
      (i.flush = function () {
        (this.tags.forEach(function (u) {
          var c;
          return (c = u.parentNode) == null ? void 0 : c.removeChild(u);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      a
    );
  })(),
  Le = '-ms-',
  su = '-moz-',
  Yt = '-webkit-',
  Jm = 'comm',
  Af = 'rule',
  Mf = 'decl',
  zv = '@import',
  Fm = '@keyframes',
  Av = '@layer',
  Mv = Math.abs,
  vu = String.fromCharCode,
  Ov = Object.assign;
function Rv(a, i) {
  return Ue(a, 0) ^ 45 ? (((((((i << 2) ^ Ue(a, 0)) << 2) ^ Ue(a, 1)) << 2) ^ Ue(a, 2)) << 2) ^ Ue(a, 3) : 0;
}
function Wm(a) {
  return a.trim();
}
function wv(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function qt(a, i, o) {
  return a.replace(i, o);
}
function sf(a, i) {
  return a.indexOf(i);
}
function Ue(a, i) {
  return a.charCodeAt(i) | 0;
}
function Ar(a, i, o) {
  return a.slice(i, o);
}
function Xn(a) {
  return a.length;
}
function Of(a) {
  return a.length;
}
function Jo(a, i) {
  return (i.push(a), a);
}
function Bv(a, i) {
  return a.map(i).join('');
}
var bu = 1,
  bi = 1,
  Pm = 0,
  ln = 0,
  ze = 0,
  Ci = '';
function Su(a, i, o, u, c, f, p) {
  return { value: a, root: i, parent: o, type: u, props: c, children: f, line: bu, column: bi, length: p, return: '' };
}
function vr(a, i) {
  return Ov(Su('', null, null, '', null, null, 0), a, { length: -a.length }, i);
}
function _v() {
  return ze;
}
function Dv() {
  return ((ze = ln > 0 ? Ue(Ci, --ln) : 0), bi--, ze === 10 && ((bi = 1), bu--), ze);
}
function yn() {
  return ((ze = ln < Pm ? Ue(Ci, ln++) : 0), bi++, ze === 10 && ((bi = 1), bu++), ze);
}
function Kn() {
  return Ue(Ci, ln);
}
function nu() {
  return ln;
}
function Br(a, i) {
  return Ar(Ci, a, i);
}
function Mr(a) {
  switch (a) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Im(a) {
  return ((bu = bi = 1), (Pm = Xn((Ci = a))), (ln = 0), []);
}
function tg(a) {
  return ((Ci = ''), a);
}
function au(a) {
  return Wm(Br(ln - 1, cf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function jv(a) {
  for (; (ze = Kn()) && ze < 33; ) yn();
  return Mr(a) > 2 || Mr(ze) > 3 ? '' : ' ';
}
function Nv(a, i) {
  for (; --i && yn() && !(ze < 48 || ze > 102 || (ze > 57 && ze < 65) || (ze > 70 && ze < 97)); );
  return Br(a, nu() + (i < 6 && Kn() == 32 && yn() == 32));
}
function cf(a) {
  for (; yn(); )
    switch (ze) {
      case a:
        return ln;
      case 34:
      case 39:
        a !== 34 && a !== 39 && cf(ze);
        break;
      case 40:
        a === 41 && cf(a);
        break;
      case 92:
        yn();
        break;
    }
  return ln;
}
function Uv(a, i) {
  for (; yn() && a + ze !== 57; ) if (a + ze === 84 && Kn() === 47) break;
  return '/*' + Br(i, ln - 1) + '*' + vu(a === 47 ? a : yn());
}
function Hv(a) {
  for (; !Mr(Kn()); ) yn();
  return Br(a, ln);
}
function kv(a) {
  return tg(lu('', null, null, null, [''], (a = Im(a)), 0, [0], a));
}
function lu(a, i, o, u, c, f, p, h, y) {
  for (
    var g = 0, b = 0, S = p, A = 0, j = 0, O = 0, T = 1, k = 1, Y = 1, P = 0, J = '', q = c, N = f, V = u, K = J;
    k;

  )
    switch (((O = P), (P = yn()))) {
      case 40:
        if (O != 108 && Ue(K, S - 1) == 58) {
          sf((K += qt(au(P), '&', '&\f')), '&\f') != -1 && (Y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += au(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += jv(O);
        break;
      case 92:
        K += Nv(nu() - 1, 7);
        continue;
      case 47:
        switch (Kn()) {
          case 42:
          case 47:
            Jo(Lv(Uv(yn(), nu()), i, o), y);
            break;
          default:
            K += '/';
        }
        break;
      case 123 * T:
        h[g++] = Xn(K) * Y;
      case 125 * T:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            k = 0;
          case 59 + b:
            (Y == -1 && (K = qt(K, /\f/g, '')),
              j > 0 && Xn(K) - S && Jo(j > 32 ? tm(K + ';', u, o, S - 1) : tm(qt(K, ' ', '') + ';', u, o, S - 2), y));
            break;
          case 59:
            K += ';';
          default:
            if ((Jo((V = Ih(K, i, o, g, b, c, h, J, (q = []), (N = []), S)), f), P === 123))
              if (b === 0) lu(K, i, V, V, q, f, S, h, N);
              else
                switch (A === 99 && Ue(K, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lu(a, V, V, u && Jo(Ih(a, V, V, 0, 0, c, h, J, c, (q = []), S), N), c, N, S, h, u ? q : N);
                    break;
                  default:
                    lu(K, V, V, V, [''], N, 0, h, N);
                }
        }
        ((g = b = j = 0), (T = Y = 1), (J = K = ''), (S = p));
        break;
      case 58:
        ((S = 1 + Xn(K)), (j = O));
      default:
        if (T < 1) {
          if (P == 123) --T;
          else if (P == 125 && T++ == 0 && Dv() == 125) continue;
        }
        switch (((K += vu(P)), P * T)) {
          case 38:
            Y = b > 0 ? 1 : ((K += '\f'), -1);
            break;
          case 44:
            ((h[g++] = (Xn(K) - 1) * Y), (Y = 1));
            break;
          case 64:
            (Kn() === 45 && (K += au(yn())), (A = Kn()), (b = S = Xn((J = K += Hv(nu())))), P++);
            break;
          case 45:
            O === 45 && Xn(K) == 2 && (T = 0);
        }
    }
  return f;
}
function Ih(a, i, o, u, c, f, p, h, y, g, b) {
  for (var S = c - 1, A = c === 0 ? f : [''], j = Of(A), O = 0, T = 0, k = 0; O < u; ++O)
    for (var Y = 0, P = Ar(a, S + 1, (S = Mv((T = p[O])))), J = a; Y < j; ++Y)
      (J = Wm(T > 0 ? A[Y] + ' ' + P : qt(P, /&\f/g, A[Y]))) && (y[k++] = J);
  return Su(a, i, o, c === 0 ? Af : h, y, g, b);
}
function Lv(a, i, o) {
  return Su(a, i, o, Jm, vu(_v()), Ar(a, 2, -2), 0);
}
function tm(a, i, o, u) {
  return Su(a, i, o, Mf, Ar(a, 0, u), Ar(a, u + 1, -1), u);
}
function gi(a, i) {
  for (var o = '', u = Of(a), c = 0; c < u; c++) o += i(a[c], c, a, i) || '';
  return o;
}
function $v(a, i, o, u) {
  switch (a.type) {
    case Av:
      if (a.children.length) break;
    case zv:
    case Mf:
      return (a.return = a.return || a.value);
    case Jm:
      return '';
    case Fm:
      return (a.return = a.value + '{' + gi(a.children, u) + '}');
    case Af:
      a.value = a.props.join(',');
  }
  return Xn((o = gi(a.children, u))) ? (a.return = a.value + '{' + o + '}') : '';
}
function Yv(a) {
  var i = Of(a);
  return function (o, u, c, f) {
    for (var p = '', h = 0; h < i; h++) p += a[h](o, u, c, f) || '';
    return p;
  };
}
function qv(a) {
  return function (i) {
    i.root || ((i = i.return) && a(i));
  };
}
function eg(a) {
  var i = Object.create(null);
  return function (o) {
    return (i[o] === void 0 && (i[o] = a(o)), i[o]);
  };
}
var Gv = function (i, o, u) {
    for (var c = 0, f = 0; (c = f), (f = Kn()), c === 38 && f === 12 && (o[u] = 1), !Mr(f); ) yn();
    return Br(i, ln);
  },
  Vv = function (i, o) {
    var u = -1,
      c = 44;
    do
      switch (Mr(c)) {
        case 0:
          (c === 38 && Kn() === 12 && (o[u] = 1), (i[u] += Gv(ln - 1, o, u)));
          break;
        case 2:
          i[u] += au(c);
          break;
        case 4:
          if (c === 44) {
            ((i[++u] = Kn() === 58 ? '&\f' : ''), (o[u] = i[u].length));
            break;
          }
        default:
          i[u] += vu(c);
      }
    while ((c = yn()));
    return i;
  },
  Xv = function (i, o) {
    return tg(Vv(Im(i), o));
  },
  em = new WeakMap(),
  Qv = function (i) {
    if (!(i.type !== 'rule' || !i.parent || i.length < 1)) {
      for (var o = i.value, u = i.parent, c = i.column === u.column && i.line === u.line; u.type !== 'rule'; )
        if (((u = u.parent), !u)) return;
      if (!(i.props.length === 1 && o.charCodeAt(0) !== 58 && !em.get(u)) && !c) {
        em.set(i, !0);
        for (var f = [], p = Xv(o, f), h = u.props, y = 0, g = 0; y < p.length; y++)
          for (var b = 0; b < h.length; b++, g++) i.props[g] = f[y] ? p[y].replace(/&\f/g, h[b]) : h[b] + ' ' + p[y];
      }
    }
  },
  Zv = function (i) {
    if (i.type === 'decl') {
      var o = i.value;
      o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && ((i.return = ''), (i.value = ''));
    }
  };
function ng(a, i) {
  switch (Rv(a, i)) {
    case 5103:
      return Yt + 'print-' + a + a;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Yt + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Yt + a + su + a + Le + a + a;
    case 6828:
    case 4268:
      return Yt + a + Le + a + a;
    case 6165:
      return Yt + a + Le + 'flex-' + a + a;
    case 5187:
      return Yt + a + qt(a, /(\w+).+(:[^]+)/, Yt + 'box-$1$2' + Le + 'flex-$1$2') + a;
    case 5443:
      return Yt + a + Le + 'flex-item-' + qt(a, /flex-|-self/, '') + a;
    case 4675:
      return Yt + a + Le + 'flex-line-pack' + qt(a, /align-content|flex-|-self/, '') + a;
    case 5548:
      return Yt + a + Le + qt(a, 'shrink', 'negative') + a;
    case 5292:
      return Yt + a + Le + qt(a, 'basis', 'preferred-size') + a;
    case 6060:
      return Yt + 'box-' + qt(a, '-grow', '') + Yt + a + Le + qt(a, 'grow', 'positive') + a;
    case 4554:
      return Yt + qt(a, /([^-])(transform)/g, '$1' + Yt + '$2') + a;
    case 6187:
      return qt(qt(qt(a, /(zoom-|grab)/, Yt + '$1'), /(image-set)/, Yt + '$1'), a, '') + a;
    case 5495:
    case 3959:
      return qt(a, /(image-set\([^]*)/, Yt + '$1$`$1');
    case 4968:
      return (
        qt(qt(a, /(.+:)(flex-)?(.*)/, Yt + 'box-pack:$3' + Le + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Yt + a + a
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return qt(a, /(.+)-inline(.+)/, Yt + '$1$2') + a;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xn(a) - 1 - i > 6)
        switch (Ue(a, i + 1)) {
          case 109:
            if (Ue(a, i + 4) !== 45) break;
          case 102:
            return qt(a, /(.+:)(.+)-([^]+)/, '$1' + Yt + '$2-$3$1' + su + (Ue(a, i + 3) == 108 ? '$3' : '$2-$3')) + a;
          case 115:
            return ~sf(a, 'stretch') ? ng(qt(a, 'stretch', 'fill-available'), i) + a : a;
        }
      break;
    case 4949:
      if (Ue(a, i + 1) !== 115) break;
    case 6444:
      switch (Ue(a, Xn(a) - 3 - (~sf(a, '!important') && 10))) {
        case 107:
          return qt(a, ':', ':' + Yt) + a;
        case 101:
          return (
            qt(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + Yt + (Ue(a, 14) === 45 ? 'inline-' : '') + 'box$3$1' + Yt + '$2$3$1' + Le + '$2box$3'
            ) + a
          );
      }
      break;
    case 5936:
      switch (Ue(a, i + 11)) {
        case 114:
          return Yt + a + Le + qt(a, /[svh]\w+-[tblr]{2}/, 'tb') + a;
        case 108:
          return Yt + a + Le + qt(a, /[svh]\w+-[tblr]{2}/, 'tb-rl') + a;
        case 45:
          return Yt + a + Le + qt(a, /[svh]\w+-[tblr]{2}/, 'lr') + a;
      }
      return Yt + a + Le + a + a;
  }
  return a;
}
var Kv = function (i, o, u, c) {
    if (i.length > -1 && !i.return)
      switch (i.type) {
        case Mf:
          i.return = ng(i.value, i.length);
          break;
        case Fm:
          return gi([vr(i, { value: qt(i.value, '@', '@' + Yt) })], c);
        case Af:
          if (i.length)
            return Bv(i.props, function (f) {
              switch (wv(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return gi([vr(i, { props: [qt(f, /:(read-\w+)/, ':' + su + '$1')] })], c);
                case '::placeholder':
                  return gi(
                    [
                      vr(i, { props: [qt(f, /:(plac\w+)/, ':' + Yt + 'input-$1')] }),
                      vr(i, { props: [qt(f, /:(plac\w+)/, ':' + su + '$1')] }),
                      vr(i, { props: [qt(f, /:(plac\w+)/, Le + 'input-$1')] }),
                    ],
                    c
                  );
              }
              return '';
            });
      }
  },
  Jv = [Kv],
  Fv = function (i) {
    var o = i.key;
    if (o === 'css') {
      var u = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(u, function (T) {
        var k = T.getAttribute('data-emotion');
        k.indexOf(' ') !== -1 && (document.head.appendChild(T), T.setAttribute('data-s', ''));
      });
    }
    var c = i.stylisPlugins || Jv,
      f = {},
      p,
      h = [];
    ((p = i.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function (T) {
        for (var k = T.getAttribute('data-emotion').split(' '), Y = 1; Y < k.length; Y++) f[k[Y]] = !0;
        h.push(T);
      }));
    var y,
      g = [Qv, Zv];
    {
      var b,
        S = [
          $v,
          qv(function (T) {
            b.insert(T);
          }),
        ],
        A = Yv(g.concat(c, S)),
        j = function (k) {
          return gi(kv(k), A);
        };
      y = function (k, Y, P, J) {
        ((b = P), j(k ? k + '{' + Y.styles + '}' : Y.styles), J && (O.inserted[Y.name] = !0));
      };
    }
    var O = {
      key: o,
      sheet: new Ev({
        key: o,
        container: p,
        nonce: i.nonce,
        speedy: i.speedy,
        prepend: i.prepend,
        insertionPoint: i.insertionPoint,
      }),
      nonce: i.nonce,
      inserted: f,
      registered: {},
      insert: y,
    };
    return (O.sheet.hydrate(h), O);
  },
  Pc = { exports: {} },
  Gt = {};
var nm;
function Wv() {
  if (nm) return Gt;
  nm = 1;
  var a = typeof Symbol == 'function' && Symbol.for,
    i = a ? Symbol.for('react.element') : 60103,
    o = a ? Symbol.for('react.portal') : 60106,
    u = a ? Symbol.for('react.fragment') : 60107,
    c = a ? Symbol.for('react.strict_mode') : 60108,
    f = a ? Symbol.for('react.profiler') : 60114,
    p = a ? Symbol.for('react.provider') : 60109,
    h = a ? Symbol.for('react.context') : 60110,
    y = a ? Symbol.for('react.async_mode') : 60111,
    g = a ? Symbol.for('react.concurrent_mode') : 60111,
    b = a ? Symbol.for('react.forward_ref') : 60112,
    S = a ? Symbol.for('react.suspense') : 60113,
    A = a ? Symbol.for('react.suspense_list') : 60120,
    j = a ? Symbol.for('react.memo') : 60115,
    O = a ? Symbol.for('react.lazy') : 60116,
    T = a ? Symbol.for('react.block') : 60121,
    k = a ? Symbol.for('react.fundamental') : 60117,
    Y = a ? Symbol.for('react.responder') : 60118,
    P = a ? Symbol.for('react.scope') : 60119;
  function J(N) {
    if (typeof N == 'object' && N !== null) {
      var V = N.$$typeof;
      switch (V) {
        case i:
          switch (((N = N.type), N)) {
            case y:
            case g:
            case u:
            case f:
            case c:
            case S:
              return N;
            default:
              switch (((N = N && N.$$typeof), N)) {
                case h:
                case b:
                case O:
                case j:
                case p:
                  return N;
                default:
                  return V;
              }
          }
        case o:
          return V;
      }
    }
  }
  function q(N) {
    return J(N) === g;
  }
  return (
    (Gt.AsyncMode = y),
    (Gt.ConcurrentMode = g),
    (Gt.ContextConsumer = h),
    (Gt.ContextProvider = p),
    (Gt.Element = i),
    (Gt.ForwardRef = b),
    (Gt.Fragment = u),
    (Gt.Lazy = O),
    (Gt.Memo = j),
    (Gt.Portal = o),
    (Gt.Profiler = f),
    (Gt.StrictMode = c),
    (Gt.Suspense = S),
    (Gt.isAsyncMode = function (N) {
      return q(N) || J(N) === y;
    }),
    (Gt.isConcurrentMode = q),
    (Gt.isContextConsumer = function (N) {
      return J(N) === h;
    }),
    (Gt.isContextProvider = function (N) {
      return J(N) === p;
    }),
    (Gt.isElement = function (N) {
      return typeof N == 'object' && N !== null && N.$$typeof === i;
    }),
    (Gt.isForwardRef = function (N) {
      return J(N) === b;
    }),
    (Gt.isFragment = function (N) {
      return J(N) === u;
    }),
    (Gt.isLazy = function (N) {
      return J(N) === O;
    }),
    (Gt.isMemo = function (N) {
      return J(N) === j;
    }),
    (Gt.isPortal = function (N) {
      return J(N) === o;
    }),
    (Gt.isProfiler = function (N) {
      return J(N) === f;
    }),
    (Gt.isStrictMode = function (N) {
      return J(N) === c;
    }),
    (Gt.isSuspense = function (N) {
      return J(N) === S;
    }),
    (Gt.isValidElementType = function (N) {
      return (
        typeof N == 'string' ||
        typeof N == 'function' ||
        N === u ||
        N === g ||
        N === f ||
        N === c ||
        N === S ||
        N === A ||
        (typeof N == 'object' &&
          N !== null &&
          (N.$$typeof === O ||
            N.$$typeof === j ||
            N.$$typeof === p ||
            N.$$typeof === h ||
            N.$$typeof === b ||
            N.$$typeof === k ||
            N.$$typeof === Y ||
            N.$$typeof === P ||
            N.$$typeof === T))
      );
    }),
    (Gt.typeOf = J),
    Gt
  );
}
var am;
function Pv() {
  return (am || ((am = 1), (Pc.exports = Wv())), Pc.exports);
}
var Ic, lm;
function Iv() {
  if (lm) return Ic;
  lm = 1;
  var a = Pv(),
    i = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    u = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    c = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    f = {};
  ((f[a.ForwardRef] = u), (f[a.Memo] = c));
  function p(O) {
    return a.isMemo(O) ? c : f[O.$$typeof] || i;
  }
  var h = Object.defineProperty,
    y = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    S = Object.getPrototypeOf,
    A = Object.prototype;
  function j(O, T, k) {
    if (typeof T != 'string') {
      if (A) {
        var Y = S(T);
        Y && Y !== A && j(O, Y, k);
      }
      var P = y(T);
      g && (P = P.concat(g(T)));
      for (var J = p(O), q = p(T), N = 0; N < P.length; ++N) {
        var V = P[N];
        if (!o[V] && !(k && k[V]) && !(q && q[V]) && !(J && J[V])) {
          var K = b(T, V);
          try {
            h(O, V, K);
          } catch {}
        }
      }
    }
    return O;
  }
  return ((Ic = j), Ic);
}
Iv();
var tb = !0;
function ag(a, i, o) {
  var u = '';
  return (
    o.split(' ').forEach(function (c) {
      a[c] !== void 0 ? i.push(a[c] + ';') : c && (u += c + ' ');
    }),
    u
  );
}
var Rf = function (i, o, u) {
    var c = i.key + '-' + o.name;
    (u === !1 || tb === !1) && i.registered[c] === void 0 && (i.registered[c] = o.styles);
  },
  lg = function (i, o, u) {
    Rf(i, o, u);
    var c = i.key + '-' + o.name;
    if (i.inserted[o.name] === void 0) {
      var f = o;
      do (i.insert(o === f ? '.' + c : '', f, i.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function eb(a) {
  for (var i = 0, o, u = 0, c = a.length; c >= 4; ++u, c -= 4)
    ((o =
      (a.charCodeAt(u) & 255) |
      ((a.charCodeAt(++u) & 255) << 8) |
      ((a.charCodeAt(++u) & 255) << 16) |
      ((a.charCodeAt(++u) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (i =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16))));
  switch (c) {
    case 3:
      i ^= (a.charCodeAt(u + 2) & 255) << 16;
    case 2:
      i ^= (a.charCodeAt(u + 1) & 255) << 8;
    case 1:
      ((i ^= a.charCodeAt(u) & 255), (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)));
  }
  return (
    (i ^= i >>> 13),
    (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
    ((i ^ (i >>> 15)) >>> 0).toString(36)
  );
}
var nb = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  ab = /[A-Z]|^ms/g,
  lb = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ig = function (i) {
    return i.charCodeAt(1) === 45;
  },
  im = function (i) {
    return i != null && typeof i != 'boolean';
  },
  tf = eg(function (a) {
    return ig(a) ? a : a.replace(ab, '-$&').toLowerCase();
  }),
  rm = function (i, o) {
    switch (i) {
      case 'animation':
      case 'animationName':
        if (typeof o == 'string')
          return o.replace(lb, function (u, c, f) {
            return ((Qn = { name: c, styles: f, next: Qn }), c);
          });
    }
    return nb[i] !== 1 && !ig(i) && typeof o == 'number' && o !== 0 ? o + 'px' : o;
  };
function Or(a, i, o) {
  if (o == null) return '';
  var u = o;
  if (u.__emotion_styles !== void 0) return u;
  switch (typeof o) {
    case 'boolean':
      return '';
    case 'object': {
      var c = o;
      if (c.anim === 1) return ((Qn = { name: c.name, styles: c.styles, next: Qn }), c.name);
      var f = o;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0) for (; p !== void 0; ) ((Qn = { name: p.name, styles: p.styles, next: Qn }), (p = p.next));
        var h = f.styles + ';';
        return h;
      }
      return ib(a, i, o);
    }
    case 'function': {
      if (a !== void 0) {
        var y = Qn,
          g = o(a);
        return ((Qn = y), Or(a, i, g));
      }
      break;
    }
  }
  var b = o;
  if (i == null) return b;
  var S = i[b];
  return S !== void 0 ? S : b;
}
function ib(a, i, o) {
  var u = '';
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) u += Or(a, i, o[c]) + ';';
  else
    for (var f in o) {
      var p = o[f];
      if (typeof p != 'object') {
        var h = p;
        i != null && i[h] !== void 0 ? (u += f + '{' + i[h] + '}') : im(h) && (u += tf(f) + ':' + rm(f, h) + ';');
      } else if (Array.isArray(p) && typeof p[0] == 'string' && (i == null || i[p[0]] === void 0))
        for (var y = 0; y < p.length; y++) im(p[y]) && (u += tf(f) + ':' + rm(f, p[y]) + ';');
      else {
        var g = Or(a, i, p);
        switch (f) {
          case 'animation':
          case 'animationName': {
            u += tf(f) + ':' + g + ';';
            break;
          }
          default:
            u += f + '{' + g + '}';
        }
      }
    }
  return u;
}
var om = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Qn;
function xu(a, i, o) {
  if (a.length === 1 && typeof a[0] == 'object' && a[0] !== null && a[0].styles !== void 0) return a[0];
  var u = !0,
    c = '';
  Qn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) ((u = !1), (c += Or(o, i, f)));
  else {
    var p = f;
    c += p[0];
  }
  for (var h = 1; h < a.length; h++)
    if (((c += Or(o, i, a[h])), u)) {
      var y = f;
      c += y[h];
    }
  om.lastIndex = 0;
  for (var g = '', b; (b = om.exec(c)) !== null; ) g += '-' + b[1];
  var S = eb(c) + g;
  return { name: S, styles: c, next: Qn };
}
var rb = function (i) {
    return i();
  },
  ob = uf.useInsertionEffect ? uf.useInsertionEffect : !1,
  rg = ob || rb,
  og = H.createContext(typeof HTMLElement < 'u' ? Fv({ key: 'css' }) : null);
og.Provider;
var ug = function (i) {
    return H.forwardRef(function (o, u) {
      var c = H.useContext(og);
      return i(o, c, u);
    });
  },
  wf = H.createContext({}),
  Bf = {}.hasOwnProperty,
  ff = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ub = function (i, o) {
    var u = {};
    for (var c in o) Bf.call(o, c) && (u[c] = o[c]);
    return ((u[ff] = i), u);
  },
  sb = function (i) {
    var o = i.cache,
      u = i.serialized,
      c = i.isStringTag;
    return (
      Rf(o, u, c),
      rg(function () {
        return lg(o, u, c);
      }),
      null
    );
  },
  cb = ug(function (a, i, o) {
    var u = a.css;
    typeof u == 'string' && i.registered[u] !== void 0 && (u = i.registered[u]);
    var c = a[ff],
      f = [u],
      p = '';
    typeof a.className == 'string'
      ? (p = ag(i.registered, f, a.className))
      : a.className != null && (p = a.className + ' ');
    var h = xu(f, void 0, H.useContext(wf));
    p += i.key + '-' + h.name;
    var y = {};
    for (var g in a) Bf.call(a, g) && g !== 'css' && g !== ff && (y[g] = a[g]);
    return (
      (y.className = p),
      o && (y.ref = o),
      H.createElement(
        H.Fragment,
        null,
        H.createElement(sb, { cache: i, serialized: h, isStringTag: typeof c == 'string' }),
        H.createElement(c, y)
      )
    );
  }),
  fb = cb,
  um = function (i, o) {
    var u = arguments;
    if (o == null || !Bf.call(o, 'css')) return H.createElement.apply(void 0, u);
    var c = u.length,
      f = new Array(c);
    ((f[0] = fb), (f[1] = ub(i, o)));
    for (var p = 2; p < c; p++) f[p] = u[p];
    return H.createElement.apply(null, f);
  };
(function (a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(um || (um = {}));
function _f() {
  for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
  return xu(i);
}
function _r() {
  var a = _f.apply(void 0, arguments),
    i = 'animation-' + a.name;
  return {
    name: i,
    styles: '@keyframes ' + i + '{' + a.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var db =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  pb = eg(function (a) {
    return db.test(a) || (a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91);
  }),
  hb = pb,
  mb = function (i) {
    return i !== 'theme';
  },
  sm = function (i) {
    return typeof i == 'string' && i.charCodeAt(0) > 96 ? hb : mb;
  },
  cm = function (i, o, u) {
    var c;
    if (o) {
      var f = o.shouldForwardProp;
      c =
        i.__emotion_forwardProp && f
          ? function (p) {
              return i.__emotion_forwardProp(p) && f(p);
            }
          : f;
    }
    return (typeof c != 'function' && u && (c = i.__emotion_forwardProp), c);
  },
  gb = function (i) {
    var o = i.cache,
      u = i.serialized,
      c = i.isStringTag;
    return (
      Rf(o, u, c),
      rg(function () {
        return lg(o, u, c);
      }),
      null
    );
  },
  yb = function a(i, o) {
    var u = i.__emotion_real === i,
      c = (u && i.__emotion_base) || i,
      f,
      p;
    o !== void 0 && ((f = o.label), (p = o.target));
    var h = cm(i, o, u),
      y = h || sm(c),
      g = !y('as');
    return function () {
      var b = arguments,
        S = u && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
      if ((f !== void 0 && S.push('label:' + f + ';'), b[0] == null || b[0].raw === void 0)) S.push.apply(S, b);
      else {
        var A = b[0];
        S.push(A[0]);
        for (var j = b.length, O = 1; O < j; O++) S.push(b[O], A[O]);
      }
      var T = ug(function (k, Y, P) {
        var J = (g && k.as) || c,
          q = '',
          N = [],
          V = k;
        if (k.theme == null) {
          V = {};
          for (var K in k) V[K] = k[K];
          V.theme = H.useContext(wf);
        }
        typeof k.className == 'string'
          ? (q = ag(Y.registered, N, k.className))
          : k.className != null && (q = k.className + ' ');
        var ct = xu(S.concat(N), Y.registered, V);
        ((q += Y.key + '-' + ct.name), p !== void 0 && (q += ' ' + p));
        var st = g && h === void 0 ? sm(J) : y,
          pt = {};
        for (var ft in k) (g && ft === 'as') || (st(ft) && (pt[ft] = k[ft]));
        return (
          (pt.className = q),
          P && (pt.ref = P),
          H.createElement(
            H.Fragment,
            null,
            H.createElement(gb, { cache: Y, serialized: ct, isStringTag: typeof J == 'string' }),
            H.createElement(J, pt)
          )
        );
      });
      return (
        (T.displayName =
          f !== void 0 ? f : 'Styled(' + (typeof c == 'string' ? c : c.displayName || c.name || 'Component') + ')'),
        (T.defaultProps = i.defaultProps),
        (T.__emotion_real = T),
        (T.__emotion_base = c),
        (T.__emotion_styles = S),
        (T.__emotion_forwardProp = h),
        Object.defineProperty(T, 'toString', {
          value: function () {
            return '.' + p;
          },
        }),
        (T.withComponent = function (k, Y) {
          var P = a(k, uu({}, o, Y, { shouldForwardProp: cm(T, Y, !0) }));
          return P.apply(void 0, S);
        }),
        T
      );
    };
  },
  vb = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  df = yb.bind(null);
vb.forEach(function (a) {
  df[a] = df(a);
});
function sg(a, i) {
  return df(a, i);
}
function bb(a, i) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = i(a.__emotion_styles));
}
const fm = [];
function yl(a) {
  return ((fm[0] = a), xu(fm));
}
var ef = { exports: {} },
  Wt = {};
var dm;
function Sb() {
  if (dm) return Wt;
  dm = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.suspense_list'),
    b = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    A = Symbol.for('react.view_transition'),
    j = Symbol.for('react.client.reference');
  function O(T) {
    if (typeof T == 'object' && T !== null) {
      var k = T.$$typeof;
      switch (k) {
        case a:
          switch (((T = T.type), T)) {
            case o:
            case c:
            case u:
            case y:
            case g:
            case A:
              return T;
            default:
              switch (((T = T && T.$$typeof), T)) {
                case p:
                case h:
                case S:
                case b:
                  return T;
                case f:
                  return T;
                default:
                  return k;
              }
          }
        case i:
          return k;
      }
    }
  }
  return (
    (Wt.ContextConsumer = f),
    (Wt.ContextProvider = p),
    (Wt.Element = a),
    (Wt.ForwardRef = h),
    (Wt.Fragment = o),
    (Wt.Lazy = S),
    (Wt.Memo = b),
    (Wt.Portal = i),
    (Wt.Profiler = c),
    (Wt.StrictMode = u),
    (Wt.Suspense = y),
    (Wt.SuspenseList = g),
    (Wt.isContextConsumer = function (T) {
      return O(T) === f;
    }),
    (Wt.isContextProvider = function (T) {
      return O(T) === p;
    }),
    (Wt.isElement = function (T) {
      return typeof T == 'object' && T !== null && T.$$typeof === a;
    }),
    (Wt.isForwardRef = function (T) {
      return O(T) === h;
    }),
    (Wt.isFragment = function (T) {
      return O(T) === o;
    }),
    (Wt.isLazy = function (T) {
      return O(T) === S;
    }),
    (Wt.isMemo = function (T) {
      return O(T) === b;
    }),
    (Wt.isPortal = function (T) {
      return O(T) === i;
    }),
    (Wt.isProfiler = function (T) {
      return O(T) === c;
    }),
    (Wt.isStrictMode = function (T) {
      return O(T) === u;
    }),
    (Wt.isSuspense = function (T) {
      return O(T) === y;
    }),
    (Wt.isSuspenseList = function (T) {
      return O(T) === g;
    }),
    (Wt.isValidElementType = function (T) {
      return (
        typeof T == 'string' ||
        typeof T == 'function' ||
        T === o ||
        T === c ||
        T === u ||
        T === y ||
        T === g ||
        (typeof T == 'object' &&
          T !== null &&
          (T.$$typeof === S ||
            T.$$typeof === b ||
            T.$$typeof === p ||
            T.$$typeof === f ||
            T.$$typeof === h ||
            T.$$typeof === j ||
            T.getModuleId !== void 0))
      );
    }),
    (Wt.typeOf = O),
    Wt
  );
}
var pm;
function xb() {
  return (pm || ((pm = 1), (ef.exports = Sb())), ef.exports);
}
var cg = xb();
function Zn(a) {
  if (typeof a != 'object' || a === null) return !1;
  const i = Object.getPrototypeOf(a);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in a) &&
    !(Symbol.iterator in a)
  );
}
function fg(a) {
  if (H.isValidElement(a) || cg.isValidElementType(a) || !Zn(a)) return a;
  const i = {};
  return (
    Object.keys(a).forEach((o) => {
      i[o] = fg(a[o]);
    }),
    i
  );
}
function Xe(a, i, o = { clone: !0 }) {
  const u = o.clone ? { ...a } : a;
  return (
    Zn(a) &&
      Zn(i) &&
      Object.keys(i).forEach((c) => {
        H.isValidElement(i[c]) || cg.isValidElementType(i[c])
          ? (u[c] = i[c])
          : Zn(i[c]) && Object.prototype.hasOwnProperty.call(a, c) && Zn(a[c])
            ? (u[c] = Xe(a[c], i[c], o))
            : o.clone
              ? (u[c] = Zn(i[c]) ? fg(i[c]) : i[c])
              : (u[c] = i[c]);
      }),
    u
  );
}
const Cb = (a) => {
  const i = Object.keys(a).map((o) => ({ key: o, val: a[o] })) || [];
  return (i.sort((o, u) => o.val - u.val), i.reduce((o, u) => ({ ...o, [u.key]: u.val }), {}));
};
function Tb(a) {
  const { values: i = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: o = 'px', step: u = 5, ...c } = a,
    f = Cb(i),
    p = Object.keys(f);
  function h(A) {
    return `@media (min-width:${typeof i[A] == 'number' ? i[A] : A}${o})`;
  }
  function y(A) {
    return `@media (max-width:${(typeof i[A] == 'number' ? i[A] : A) - u / 100}${o})`;
  }
  function g(A, j) {
    const O = p.indexOf(j);
    return `@media (min-width:${typeof i[A] == 'number' ? i[A] : A}${o}) and (max-width:${(O !== -1 && typeof i[p[O]] == 'number' ? i[p[O]] : j) - u / 100}${o})`;
  }
  function b(A) {
    return p.indexOf(A) + 1 < p.length ? g(A, p[p.indexOf(A) + 1]) : h(A);
  }
  function S(A) {
    const j = p.indexOf(A);
    return j === 0
      ? h(p[1])
      : j === p.length - 1
        ? y(p[j])
        : g(A, p[p.indexOf(A) + 1]).replace('@media', '@media not all and');
  }
  return { keys: p, values: f, up: h, down: y, between: g, only: b, not: S, unit: o, ...c };
}
function hm(a, i) {
  if (!a.containerQueries) return i;
  const o = Object.keys(i)
    .filter((u) => u.startsWith('@container'))
    .sort((u, c) => {
      const f = /min-width:\s*([0-9.]+)/;
      return +(u.match(f)?.[1] || 0) - +(c.match(f)?.[1] || 0);
    });
  return o.length
    ? o.reduce(
        (u, c) => {
          const f = i[c];
          return (delete u[c], (u[c] = f), u);
        },
        { ...i }
      )
    : i;
}
function Eb(a, i) {
  return i === '@' || (i.startsWith('@') && (a.some((o) => i.startsWith(`@${o}`)) || !!i.match(/^@\d/)));
}
function zb(a, i) {
  const o = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, u, c] = o,
    f = Number.isNaN(+u) ? u || 0 : +u;
  return a.containerQueries(c).up(f);
}
function Ab(a) {
  const i = (f, p) => f.replace('@media', p ? `@container ${p}` : '@container');
  function o(f, p) {
    ((f.up = (...h) => i(a.breakpoints.up(...h), p)),
      (f.down = (...h) => i(a.breakpoints.down(...h), p)),
      (f.between = (...h) => i(a.breakpoints.between(...h), p)),
      (f.only = (...h) => i(a.breakpoints.only(...h), p)),
      (f.not = (...h) => {
        const y = i(a.breakpoints.not(...h), p);
        return y.includes('not all and')
          ? y
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : y;
      }));
  }
  const u = {},
    c = (f) => (o(u, f), u);
  return (o(c), { ...a, containerQueries: c });
}
const Mb = { borderRadius: 4 };
function Cr(a, i) {
  return i ? Xe(a, i, { clone: !1 }) : a;
}
const Cu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  mm = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (a) => `@media (min-width:${Cu[a]}px)` },
  Ob = {
    containerQueries: (a) => ({
      up: (i) => {
        let o = typeof i == 'number' ? i : Cu[i] || i;
        return (
          typeof o == 'number' && (o = `${o}px`),
          a ? `@container ${a} (min-width:${o})` : `@container (min-width:${o})`
        );
      },
    }),
  };
function Hn(a, i, o) {
  const u = a.theme || {};
  if (Array.isArray(i)) {
    const f = u.breakpoints || mm;
    return i.reduce((p, h, y) => ((p[f.up(f.keys[y])] = o(i[y])), p), {});
  }
  if (typeof i == 'object') {
    const f = u.breakpoints || mm;
    return Object.keys(i).reduce((p, h) => {
      if (Eb(f.keys, h)) {
        const y = zb(u.containerQueries ? u : Ob, h);
        y && (p[y] = o(i[h], h));
      } else if (Object.keys(f.values || Cu).includes(h)) {
        const y = f.up(h);
        p[y] = o(i[h], h);
      } else {
        const y = h;
        p[y] = i[y];
      }
      return p;
    }, {});
  }
  return o(i);
}
function dg(a = {}) {
  return (
    a.keys?.reduce((o, u) => {
      const c = a.up(u);
      return ((o[c] = {}), o);
    }, {}) || {}
  );
}
function pf(a, i) {
  return a.reduce((o, u) => {
    const c = o[u];
    return ((!c || Object.keys(c).length === 0) && delete o[u], o);
  }, i);
}
function Rb(a, ...i) {
  const o = dg(a),
    u = [o, ...i].reduce((c, f) => Xe(c, f), {});
  return pf(Object.keys(o), u);
}
function wb(a, i) {
  if (typeof a != 'object') return {};
  const o = {},
    u = Object.keys(i);
  return (
    Array.isArray(a)
      ? u.forEach((c, f) => {
          f < a.length && (o[c] = !0);
        })
      : u.forEach((c) => {
          a[c] != null && (o[c] = !0);
        }),
    o
  );
}
function nf({ values: a, breakpoints: i, base: o }) {
  const u = o || wb(a, i),
    c = Object.keys(u);
  if (c.length === 0) return a;
  let f;
  return c.reduce(
    (p, h, y) => (
      Array.isArray(a)
        ? ((p[h] = a[y] != null ? a[y] : a[f]), (f = y))
        : typeof a == 'object'
          ? ((p[h] = a[h] != null ? a[h] : a[f]), (f = h))
          : (p[h] = a),
      p
    ),
    {}
  );
}
function mt(a) {
  if (typeof a != 'string') throw new Error(bl(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Tu(a, i, o = !0) {
  if (!i || typeof i != 'string') return null;
  if (a && a.vars && o) {
    const u = `vars.${i}`.split('.').reduce((c, f) => (c && c[f] ? c[f] : null), a);
    if (u != null) return u;
  }
  return i.split('.').reduce((u, c) => (u && u[c] != null ? u[c] : null), a);
}
function cu(a, i, o, u = o) {
  let c;
  return (
    typeof a == 'function' ? (c = a(o)) : Array.isArray(a) ? (c = a[o] || u) : (c = Tu(a, o) || u),
    i && (c = i(c, u, a)),
    c
  );
}
function be(a) {
  const { prop: i, cssProperty: o = a.prop, themeKey: u, transform: c } = a,
    f = (p) => {
      if (p[i] == null) return null;
      const h = p[i],
        y = p.theme,
        g = Tu(y, u) || {};
      return Hn(p, h, (S) => {
        let A = cu(g, c, S);
        return (
          S === A && typeof S == 'string' && (A = cu(g, c, `${i}${S === 'default' ? '' : mt(S)}`, S)),
          o === !1 ? A : { [o]: A }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [i]), f);
}
function Bb(a) {
  const i = {};
  return (o) => (i[o] === void 0 && (i[o] = a(o)), i[o]);
}
const _b = { m: 'margin', p: 'padding' },
  Db = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  gm = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  jb = Bb((a) => {
    if (a.length > 2)
      if (gm[a]) a = gm[a];
      else return [a];
    const [i, o] = a.split(''),
      u = _b[i],
      c = Db[o] || '';
    return Array.isArray(c) ? c.map((f) => u + f) : [u + c];
  }),
  Df = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  jf = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Df, ...jf];
function Dr(a, i, o, u) {
  const c = Tu(a, i, !0) ?? o;
  return typeof c == 'number' || typeof c == 'string'
    ? (f) =>
        typeof f == 'string'
          ? f
          : typeof c == 'string'
            ? c.startsWith('var(') && f === 0
              ? 0
              : c.startsWith('var(') && f === 1
                ? c
                : `calc(${f} * ${c})`
            : c * f
    : Array.isArray(c)
      ? (f) => {
          if (typeof f == 'string') return f;
          const p = Math.abs(f),
            h = c[p];
          return f >= 0
            ? h
            : typeof h == 'number'
              ? -h
              : typeof h == 'string' && h.startsWith('var(')
                ? `calc(-1 * ${h})`
                : `-${h}`;
        }
      : typeof c == 'function'
        ? c
        : () => {};
}
function Eu(a) {
  return Dr(a, 'spacing', 8);
}
function Sl(a, i) {
  return typeof i == 'string' || i == null ? i : a(i);
}
function Nb(a, i) {
  return (o) => a.reduce((u, c) => ((u[c] = Sl(i, o)), u), {});
}
function Ub(a, i, o, u) {
  if (!i.includes(o)) return null;
  const c = jb(o),
    f = Nb(c, u),
    p = a[o];
  return Hn(a, p, f);
}
function pg(a, i) {
  const o = Eu(a.theme);
  return Object.keys(a)
    .map((u) => Ub(a, i, u, o))
    .reduce(Cr, {});
}
function de(a) {
  return pg(a, Df);
}
de.propTypes = {};
de.filterProps = Df;
function pe(a) {
  return pg(a, jf);
}
pe.propTypes = {};
pe.filterProps = jf;
function hg(a = 8, i = Eu({ spacing: a })) {
  if (a.mui) return a;
  const o = (...u) =>
    (u.length === 0 ? [1] : u)
      .map((f) => {
        const p = i(f);
        return typeof p == 'number' ? `${p}px` : p;
      })
      .join(' ');
  return ((o.mui = !0), o);
}
function zu(...a) {
  const i = a.reduce(
      (u, c) => (
        c.filterProps.forEach((f) => {
          u[f] = c;
        }),
        u
      ),
      {}
    ),
    o = (u) => Object.keys(u).reduce((c, f) => (i[f] ? Cr(c, i[f](u)) : c), {});
  return ((o.propTypes = {}), (o.filterProps = a.reduce((u, c) => u.concat(c.filterProps), [])), o);
}
function Rn(a) {
  return typeof a != 'number' ? a : `${a}px solid`;
}
function Bn(a, i) {
  return be({ prop: a, themeKey: 'borders', transform: i });
}
const Hb = Bn('border', Rn),
  kb = Bn('borderTop', Rn),
  Lb = Bn('borderRight', Rn),
  $b = Bn('borderBottom', Rn),
  Yb = Bn('borderLeft', Rn),
  qb = Bn('borderColor'),
  Gb = Bn('borderTopColor'),
  Vb = Bn('borderRightColor'),
  Xb = Bn('borderBottomColor'),
  Qb = Bn('borderLeftColor'),
  Zb = Bn('outline', Rn),
  Kb = Bn('outlineColor'),
  Au = (a) => {
    if (a.borderRadius !== void 0 && a.borderRadius !== null) {
      const i = Dr(a.theme, 'shape.borderRadius', 4),
        o = (u) => ({ borderRadius: Sl(i, u) });
      return Hn(a, a.borderRadius, o);
    }
    return null;
  };
Au.propTypes = {};
Au.filterProps = ['borderRadius'];
zu(Hb, kb, Lb, $b, Yb, qb, Gb, Vb, Xb, Qb, Au, Zb, Kb);
const Mu = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      o = (u) => ({ gap: Sl(i, u) });
    return Hn(a, a.gap, o);
  }
  return null;
};
Mu.propTypes = {};
Mu.filterProps = ['gap'];
const Ou = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      o = (u) => ({ columnGap: Sl(i, u) });
    return Hn(a, a.columnGap, o);
  }
  return null;
};
Ou.propTypes = {};
Ou.filterProps = ['columnGap'];
const Ru = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      o = (u) => ({ rowGap: Sl(i, u) });
    return Hn(a, a.rowGap, o);
  }
  return null;
};
Ru.propTypes = {};
Ru.filterProps = ['rowGap'];
const Jb = be({ prop: 'gridColumn' }),
  Fb = be({ prop: 'gridRow' }),
  Wb = be({ prop: 'gridAutoFlow' }),
  Pb = be({ prop: 'gridAutoColumns' }),
  Ib = be({ prop: 'gridAutoRows' }),
  t2 = be({ prop: 'gridTemplateColumns' }),
  e2 = be({ prop: 'gridTemplateRows' }),
  n2 = be({ prop: 'gridTemplateAreas' }),
  a2 = be({ prop: 'gridArea' });
zu(Mu, Ou, Ru, Jb, Fb, Wb, Pb, Ib, t2, e2, n2, a2);
function yi(a, i) {
  return i === 'grey' ? i : a;
}
const l2 = be({ prop: 'color', themeKey: 'palette', transform: yi }),
  i2 = be({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: yi }),
  r2 = be({ prop: 'backgroundColor', themeKey: 'palette', transform: yi });
zu(l2, i2, r2);
function gn(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const o2 = be({ prop: 'width', transform: gn }),
  Nf = (a) => {
    if (a.maxWidth !== void 0 && a.maxWidth !== null) {
      const i = (o) => {
        const u = a.theme?.breakpoints?.values?.[o] || Cu[o];
        return u
          ? a.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${u}${a.theme.breakpoints.unit}` }
            : { maxWidth: u }
          : { maxWidth: gn(o) };
      };
      return Hn(a, a.maxWidth, i);
    }
    return null;
  };
Nf.filterProps = ['maxWidth'];
const u2 = be({ prop: 'minWidth', transform: gn }),
  s2 = be({ prop: 'height', transform: gn }),
  c2 = be({ prop: 'maxHeight', transform: gn }),
  f2 = be({ prop: 'minHeight', transform: gn });
be({ prop: 'size', cssProperty: 'width', transform: gn });
be({ prop: 'size', cssProperty: 'height', transform: gn });
const d2 = be({ prop: 'boxSizing' });
zu(o2, Nf, u2, s2, c2, f2, d2);
const jr = {
  border: { themeKey: 'borders', transform: Rn },
  borderTop: { themeKey: 'borders', transform: Rn },
  borderRight: { themeKey: 'borders', transform: Rn },
  borderBottom: { themeKey: 'borders', transform: Rn },
  borderLeft: { themeKey: 'borders', transform: Rn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: Rn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Au },
  color: { themeKey: 'palette', transform: yi },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: yi },
  backgroundColor: { themeKey: 'palette', transform: yi },
  p: { style: pe },
  pt: { style: pe },
  pr: { style: pe },
  pb: { style: pe },
  pl: { style: pe },
  px: { style: pe },
  py: { style: pe },
  padding: { style: pe },
  paddingTop: { style: pe },
  paddingRight: { style: pe },
  paddingBottom: { style: pe },
  paddingLeft: { style: pe },
  paddingX: { style: pe },
  paddingY: { style: pe },
  paddingInline: { style: pe },
  paddingInlineStart: { style: pe },
  paddingInlineEnd: { style: pe },
  paddingBlock: { style: pe },
  paddingBlockStart: { style: pe },
  paddingBlockEnd: { style: pe },
  m: { style: de },
  mt: { style: de },
  mr: { style: de },
  mb: { style: de },
  ml: { style: de },
  mx: { style: de },
  my: { style: de },
  margin: { style: de },
  marginTop: { style: de },
  marginRight: { style: de },
  marginBottom: { style: de },
  marginLeft: { style: de },
  marginX: { style: de },
  marginY: { style: de },
  marginInline: { style: de },
  marginInlineStart: { style: de },
  marginInlineEnd: { style: de },
  marginBlock: { style: de },
  marginBlockStart: { style: de },
  marginBlockEnd: { style: de },
  displayPrint: { cssProperty: !1, transform: (a) => ({ '@media print': { display: a } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Mu },
  rowGap: { style: Ru },
  columnGap: { style: Ou },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: gn },
  maxWidth: { style: Nf },
  minWidth: { transform: gn },
  height: { transform: gn },
  maxHeight: { transform: gn },
  minHeight: { transform: gn },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function p2(...a) {
  const i = a.reduce((u, c) => u.concat(Object.keys(c)), []),
    o = new Set(i);
  return a.every((u) => o.size === Object.keys(u).length);
}
function h2(a, i) {
  return typeof a == 'function' ? a(i) : a;
}
function m2() {
  function a(o, u, c, f) {
    const p = { [o]: u, theme: c },
      h = f[o];
    if (!h) return { [o]: u };
    const { cssProperty: y = o, themeKey: g, transform: b, style: S } = h;
    if (u == null) return null;
    if (g === 'typography' && u === 'inherit') return { [o]: u };
    const A = Tu(c, g) || {};
    return S
      ? S(p)
      : Hn(p, u, (O) => {
          let T = cu(A, b, O);
          return (
            O === T && typeof O == 'string' && (T = cu(A, b, `${o}${O === 'default' ? '' : mt(O)}`, O)),
            y === !1 ? T : { [y]: T }
          );
        });
  }
  function i(o) {
    const { sx: u, theme: c = {}, nested: f } = o || {};
    if (!u) return null;
    const p = c.unstable_sxConfig ?? jr;
    function h(y) {
      let g = y;
      if (typeof y == 'function') g = y(c);
      else if (typeof y != 'object') return y;
      if (!g) return null;
      const b = dg(c.breakpoints),
        S = Object.keys(b);
      let A = b;
      return (
        Object.keys(g).forEach((j) => {
          const O = h2(g[j], c);
          if (O != null)
            if (typeof O == 'object')
              if (p[j]) A = Cr(A, a(j, O, c, p));
              else {
                const T = Hn({ theme: c }, O, (k) => ({ [j]: k }));
                p2(T, O) ? (A[j] = i({ sx: O, theme: c, nested: !0 })) : (A = Cr(A, T));
              }
            else A = Cr(A, a(j, O, c, p));
        }),
        !f && c.modularCssLayers ? { '@layer sx': hm(c, pf(S, A)) } : hm(c, pf(S, A))
      );
    }
    return Array.isArray(u) ? u.map(h) : h(u);
  }
  return i;
}
const xl = m2();
xl.filterProps = ['sx'];
function g2(a, i) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[a] || typeof o.getColorSchemeSelector != 'function') return {};
    let u = o.getColorSchemeSelector(a);
    return u === '&'
      ? i
      : ((u.includes('data-') || u.includes('.')) && (u = `*:where(${u.replace(/\s*&$/, '')}) &`), { [u]: i });
  }
  return o.palette.mode === a ? i : {};
}
function Nr(a = {}, ...i) {
  const { breakpoints: o = {}, palette: u = {}, spacing: c, shape: f = {}, ...p } = a,
    h = Tb(o),
    y = hg(c);
  let g = Xe(
    {
      breakpoints: h,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...u },
      spacing: y,
      shape: { ...Mb, ...f },
    },
    p
  );
  return (
    (g = Ab(g)),
    (g.applyStyles = g2),
    (g = i.reduce((b, S) => Xe(b, S), g)),
    (g.unstable_sxConfig = { ...jr, ...p?.unstable_sxConfig }),
    (g.unstable_sx = function (S) {
      return xl({ sx: S, theme: this });
    }),
    g
  );
}
function y2(a) {
  return Object.keys(a).length === 0;
}
function v2(a = null) {
  const i = H.useContext(wf);
  return !i || y2(i) ? a : i;
}
const b2 = Nr();
function Uf(a = b2) {
  return v2(a);
}
const S2 = (a) => {
  const i = { systemProps: {}, otherProps: {} },
    o = a?.theme?.unstable_sxConfig ?? jr;
  return (
    Object.keys(a).forEach((u) => {
      o[u] ? (i.systemProps[u] = a[u]) : (i.otherProps[u] = a[u]);
    }),
    i
  );
};
function Hf(a) {
  const { sx: i, ...o } = a,
    { systemProps: u, otherProps: c } = S2(o);
  let f;
  return (
    Array.isArray(i)
      ? (f = [u, ...i])
      : typeof i == 'function'
        ? (f = (...p) => {
            const h = i(...p);
            return Zn(h) ? { ...u, ...h } : u;
          })
        : (f = { ...u, ...i }),
    { ...c, sx: f }
  );
}
const ym = (a) => a,
  x2 = () => {
    let a = ym;
    return {
      configure(i) {
        a = i;
      },
      generate(i) {
        return a(i);
      },
      reset() {
        a = ym;
      },
    };
  },
  mg = x2();
function gg(a) {
  var i,
    o,
    u = '';
  if (typeof a == 'string' || typeof a == 'number') u += a;
  else if (typeof a == 'object')
    if (Array.isArray(a)) {
      var c = a.length;
      for (i = 0; i < c; i++) a[i] && (o = gg(a[i])) && (u && (u += ' '), (u += o));
    } else for (o in a) a[o] && (u && (u += ' '), (u += o));
  return u;
}
function Lt() {
  for (var a, i, o = 0, u = '', c = arguments.length; o < c; o++)
    (a = arguments[o]) && (i = gg(a)) && (u && (u += ' '), (u += i));
  return u;
}
function C2(a = {}) {
  const { themeId: i, defaultTheme: o, defaultClassName: u = 'MuiBox-root', generateClassName: c } = a,
    f = sg('div', { shouldForwardProp: (h) => h !== 'theme' && h !== 'sx' && h !== 'as' })(xl);
  return H.forwardRef(function (y, g) {
    const b = Uf(o),
      { className: S, component: A = 'div', ...j } = Hf(y);
    return R.jsx(f, { as: A, ref: g, className: Lt(S, c ? c(u) : u), theme: (i && b[i]) || b, ...j });
  });
}
const T2 = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function Qe(a, i, o = 'Mui') {
  const u = T2[i];
  return u ? `${o}-${u}` : `${mg.generate(a)}-${i}`;
}
function rn(a, i, o = 'Mui') {
  const u = {};
  return (
    i.forEach((c) => {
      u[c] = Qe(a, c, o);
    }),
    u
  );
}
function yg(a) {
  const { variants: i, ...o } = a,
    u = { variants: i, style: yl(o), isProcessed: !0 };
  return (
    u.style === o ||
      (i &&
        i.forEach((c) => {
          typeof c.style != 'function' && (c.style = yl(c.style));
        })),
    u
  );
}
const E2 = Nr();
function af(a) {
  return a !== 'ownerState' && a !== 'theme' && a !== 'sx' && a !== 'as';
}
function ml(a, i) {
  return (
    i &&
      a &&
      typeof a == 'object' &&
      a.styles &&
      !a.styles.startsWith('@layer') &&
      (a.styles = `@layer ${i}{${String(a.styles)}}`),
    a
  );
}
function z2(a) {
  return a ? (i, o) => o[a] : null;
}
function A2(a, i, o) {
  a.theme = O2(a.theme) ? o : a.theme[i] || a.theme;
}
function iu(a, i, o) {
  const u = typeof i == 'function' ? i(a) : i;
  if (Array.isArray(u)) return u.flatMap((c) => iu(a, c, o));
  if (Array.isArray(u?.variants)) {
    let c;
    if (u.isProcessed) c = o ? ml(u.style, o) : u.style;
    else {
      const { variants: f, ...p } = u;
      c = o ? ml(yl(p), o) : p;
    }
    return vg(a, u.variants, [c], o);
  }
  return u?.isProcessed ? (o ? ml(yl(u.style), o) : u.style) : o ? ml(yl(u), o) : u;
}
function vg(a, i, o = [], u = void 0) {
  let c;
  t: for (let f = 0; f < i.length; f += 1) {
    const p = i[f];
    if (typeof p.props == 'function') {
      if (((c ??= { ...a, ...a.ownerState, ownerState: a.ownerState }), !p.props(c))) continue;
    } else for (const h in p.props) if (a[h] !== p.props[h] && a.ownerState?.[h] !== p.props[h]) continue t;
    typeof p.style == 'function'
      ? ((c ??= { ...a, ...a.ownerState, ownerState: a.ownerState }), o.push(u ? ml(yl(p.style(c)), u) : p.style(c)))
      : o.push(u ? ml(yl(p.style), u) : p.style);
  }
  return o;
}
function bg(a = {}) {
  const { themeId: i, defaultTheme: o = E2, rootShouldForwardProp: u = af, slotShouldForwardProp: c = af } = a;
  function f(h) {
    A2(h, i, o);
  }
  return (h, y = {}) => {
    bb(h, (V) => V.filter((K) => K !== xl));
    const { name: g, slot: b, skipVariantsResolver: S, skipSx: A, overridesResolver: j = z2(w2(b)), ...O } = y,
      T = (g && g.startsWith('Mui')) || b ? 'components' : 'custom',
      k = S !== void 0 ? S : (b && b !== 'Root' && b !== 'root') || !1,
      Y = A || !1;
    let P = af;
    b === 'Root' || b === 'root' ? (P = u) : b ? (P = c) : R2(h) && (P = void 0);
    const J = sg(h, { shouldForwardProp: P, label: M2(), ...O }),
      q = (V) => {
        if (V.__emotion_real === V) return V;
        if (typeof V == 'function')
          return function (ct) {
            return iu(ct, V, ct.theme.modularCssLayers ? T : void 0);
          };
        if (Zn(V)) {
          const K = yg(V);
          return function (st) {
            return K.variants
              ? iu(st, K, st.theme.modularCssLayers ? T : void 0)
              : st.theme.modularCssLayers
                ? ml(K.style, T)
                : K.style;
          };
        }
        return V;
      },
      N = (...V) => {
        const K = [],
          ct = V.map(q),
          st = [];
        if (
          (K.push(f),
          g &&
            j &&
            st.push(function (W) {
              const et = W.theme.components?.[g]?.styleOverrides;
              if (!et) return null;
              const z = {};
              for (const F in et) z[F] = iu(W, et[F], W.theme.modularCssLayers ? 'theme' : void 0);
              return j(W, z);
            }),
          g &&
            !k &&
            st.push(function (W) {
              const et = W.theme?.components?.[g]?.variants;
              return et ? vg(W, et, [], W.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          Y || st.push(xl),
          Array.isArray(ct[0]))
        ) {
          const v = ct.shift(),
            W = new Array(K.length).fill(''),
            X = new Array(st.length).fill('');
          let et;
          ((et = [...W, ...v, ...X]), (et.raw = [...W, ...v.raw, ...X]), K.unshift(et));
        }
        const pt = [...K, ...ct, ...st],
          ft = J(...pt);
        return (h.muiName && (ft.muiName = h.muiName), ft);
      };
    return (J.withConfig && (N.withConfig = J.withConfig), N);
  };
}
function M2(a, i) {
  return void 0;
}
function O2(a) {
  for (const i in a) return !1;
  return !0;
}
function R2(a) {
  return typeof a == 'string' && a.charCodeAt(0) > 96;
}
function w2(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const Sg = bg();
function Rr(a, i, o = !1) {
  const u = { ...i };
  for (const c in a)
    if (Object.prototype.hasOwnProperty.call(a, c)) {
      const f = c;
      if (f === 'components' || f === 'slots') u[f] = { ...a[f], ...u[f] };
      else if (f === 'componentsProps' || f === 'slotProps') {
        const p = a[f],
          h = i[f];
        if (!h) u[f] = p || {};
        else if (!p) u[f] = h;
        else {
          u[f] = { ...h };
          for (const y in p)
            if (Object.prototype.hasOwnProperty.call(p, y)) {
              const g = y;
              u[f][g] = Rr(p[g], h[g], o);
            }
        }
      } else
        f === 'className' && o && i.className
          ? (u.className = Lt(a?.className, i?.className))
          : f === 'style' && o && i.style
            ? (u.style = { ...a?.style, ...i?.style })
            : u[f] === void 0 && (u[f] = a[f]);
    }
  return u;
}
function B2(a) {
  const { theme: i, name: o, props: u } = a;
  return !i || !i.components || !i.components[o] || !i.components[o].defaultProps
    ? u
    : Rr(i.components[o].defaultProps, u);
}
function xg({ props: a, name: i, defaultTheme: o, themeId: u }) {
  let c = Uf(o);
  return (u && (c = c[u] || c), B2({ theme: c, name: i, props: a }));
}
const Cg = typeof window < 'u' ? H.useLayoutEffect : H.useEffect;
function hi(a, i = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, o));
}
function kf(a, i = 0, o = 1) {
  return hi(a, i, o);
}
function _2(a) {
  a = a.slice(1);
  const i = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, 'g');
  let o = a.match(i);
  return (
    o && o[0].length === 1 && (o = o.map((u) => u + u)),
    o
      ? `rgb${o.length === 4 ? 'a' : ''}(${o.map((u, c) => (c < 3 ? parseInt(u, 16) : Math.round((parseInt(u, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function Za(a) {
  if (a.type) return a;
  if (a.charAt(0) === '#') return Za(_2(a));
  const i = a.indexOf('('),
    o = a.substring(0, i);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(o)) throw new Error(bl(9, a));
  let u = a.substring(i + 1, a.length - 1),
    c;
  if (o === 'color') {
    if (
      ((u = u.split(' ')),
      (c = u.shift()),
      u.length === 4 && u[3].charAt(0) === '/' && (u[3] = u[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(c))
    )
      throw new Error(bl(10, c));
  } else u = u.split(',');
  return ((u = u.map((f) => parseFloat(f))), { type: o, values: u, colorSpace: c });
}
const D2 = (a) => {
    const i = Za(a);
    return i.values
      .slice(0, 3)
      .map((o, u) => (i.type.includes('hsl') && u !== 0 ? `${o}%` : o))
      .join(' ');
  },
  br = (a, i) => {
    try {
      return D2(a);
    } catch {
      return a;
    }
  };
function wu(a) {
  const { type: i, colorSpace: o } = a;
  let { values: u } = a;
  return (
    i.includes('rgb')
      ? (u = u.map((c, f) => (f < 3 ? parseInt(c, 10) : c)))
      : i.includes('hsl') && ((u[1] = `${u[1]}%`), (u[2] = `${u[2]}%`)),
    i.includes('color') ? (u = `${o} ${u.join(' ')}`) : (u = `${u.join(', ')}`),
    `${i}(${u})`
  );
}
function Tg(a) {
  a = Za(a);
  const { values: i } = a,
    o = i[0],
    u = i[1] / 100,
    c = i[2] / 100,
    f = u * Math.min(c, 1 - c),
    p = (g, b = (g + o / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let h = 'rgb';
  const y = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return (a.type === 'hsla' && ((h += 'a'), y.push(i[3])), wu({ type: h, values: y }));
}
function hf(a) {
  a = Za(a);
  let i = a.type === 'hsl' || a.type === 'hsla' ? Za(Tg(a)).values : a.values;
  return (
    (i = i.map((o) => (a.type !== 'color' && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3))
  );
}
function j2(a, i) {
  const o = hf(a),
    u = hf(i);
  return (Math.max(o, u) + 0.05) / (Math.min(o, u) + 0.05);
}
function fu(a, i) {
  return (
    (a = Za(a)),
    (i = kf(i)),
    (a.type === 'rgb' || a.type === 'hsl') && (a.type += 'a'),
    a.type === 'color' ? (a.values[3] = `/${i}`) : (a.values[3] = i),
    wu(a)
  );
}
function fl(a, i, o) {
  try {
    return fu(a, i);
  } catch {
    return a;
  }
}
function Bu(a, i) {
  if (((a = Za(a)), (i = kf(i)), a.type.includes('hsl'))) a.values[2] *= 1 - i;
  else if (a.type.includes('rgb') || a.type.includes('color')) for (let o = 0; o < 3; o += 1) a.values[o] *= 1 - i;
  return wu(a);
}
function Qt(a, i, o) {
  try {
    return Bu(a, i);
  } catch {
    return a;
  }
}
function _u(a, i) {
  if (((a = Za(a)), (i = kf(i)), a.type.includes('hsl'))) a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes('rgb')) for (let o = 0; o < 3; o += 1) a.values[o] += (255 - a.values[o]) * i;
  else if (a.type.includes('color')) for (let o = 0; o < 3; o += 1) a.values[o] += (1 - a.values[o]) * i;
  return wu(a);
}
function Zt(a, i, o) {
  try {
    return _u(a, i);
  } catch {
    return a;
  }
}
function N2(a, i = 0.15) {
  return hf(a) > 0.5 ? Bu(a, i) : _u(a, i);
}
function Fo(a, i, o) {
  try {
    return N2(a, i);
  } catch {
    return a;
  }
}
const U2 = H.createContext(),
  H2 = () => H.useContext(U2) ?? !1,
  k2 = H.createContext(void 0);
function L2(a) {
  const { theme: i, name: o, props: u } = a;
  if (!i || !i.components || !i.components[o]) return u;
  const c = i.components[o];
  return c.defaultProps
    ? Rr(c.defaultProps, u, i.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? Rr(c, u, i.components.mergeClassNameAndStyle)
      : u;
}
function $2({ props: a, name: i }) {
  const o = H.useContext(k2);
  return L2({ props: a, name: i, theme: { components: o } });
}
let vm = 0;
function Y2(a) {
  const [i, o] = H.useState(a),
    u = a || i;
  return (
    H.useEffect(() => {
      i == null && ((vm += 1), o(`mui-${vm}`));
    }, [i]),
    u
  );
}
const q2 = { ...uf },
  bm = q2.useId;
function Eg(a) {
  if (bm !== void 0) {
    const i = bm();
    return a ?? i;
  }
  return Y2(a);
}
const Sm = { theme: void 0 };
function G2(a) {
  let i, o;
  return function (c) {
    let f = i;
    return ((f === void 0 || c.theme !== o) && ((Sm.theme = c.theme), (f = yg(a(Sm))), (i = f), (o = c.theme)), f);
  };
}
function V2(a = '') {
  function i(...u) {
    if (!u.length) return '';
    const c = u[0];
    return typeof c == 'string' &&
      !c.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${a ? `${a}-` : ''}${c}${i(...u.slice(1))})`
      : `, ${c}`;
  }
  return (u, ...c) => `var(--${a ? `${a}-` : ''}${u}${i(...c)})`;
}
const xm = (a, i, o, u = []) => {
    let c = a;
    i.forEach((f, p) => {
      p === i.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = o)
          : c && typeof c == 'object' && (c[f] = o)
        : c && typeof c == 'object' && (c[f] || (c[f] = u.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  X2 = (a, i, o) => {
    function u(c, f = [], p = []) {
      Object.entries(c).forEach(([h, y]) => {
        (!o || (o && !o([...f, h]))) &&
          y != null &&
          (typeof y == 'object' && Object.keys(y).length > 0
            ? u(y, [...f, h], Array.isArray(y) ? [...p, h] : p)
            : i([...f, h], y, p));
      });
    }
    u(a);
  },
  Q2 = (a, i) =>
    typeof i == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((u) => a.includes(u)) ||
        a[a.length - 1].toLowerCase().includes('opacity')
        ? i
        : `${i}px`
      : i;
function lf(a, i) {
  const { prefix: o, shouldSkipGeneratingVar: u } = i || {},
    c = {},
    f = {},
    p = {};
  return (
    X2(
      a,
      (h, y, g) => {
        if ((typeof y == 'string' || typeof y == 'number') && (!u || !u(h, y))) {
          const b = `--${o ? `${o}-` : ''}${h.join('-')}`,
            S = Q2(h, y);
          (Object.assign(c, { [b]: S }), xm(f, h, `var(${b})`, g), xm(p, h, `var(${b}, ${S})`, g));
        }
      },
      (h) => h[0] === 'vars'
    ),
    { css: c, vars: f, varsWithDefaults: p }
  );
}
function Z2(a, i = {}) {
  const { getSelector: o = Y, disableCssColorScheme: u, colorSchemeSelector: c, enableContrastVars: f } = i,
    { colorSchemes: p = {}, components: h, defaultColorScheme: y = 'light', ...g } = a,
    { vars: b, css: S, varsWithDefaults: A } = lf(g, i);
  let j = A;
  const O = {},
    { [y]: T, ...k } = p;
  if (
    (Object.entries(k || {}).forEach(([q, N]) => {
      const { vars: V, css: K, varsWithDefaults: ct } = lf(N, i);
      ((j = Xe(j, ct)), (O[q] = { css: K, vars: V }));
    }),
    T)
  ) {
    const { css: q, vars: N, varsWithDefaults: V } = lf(T, i);
    ((j = Xe(j, V)), (O[y] = { css: q, vars: N }));
  }
  function Y(q, N) {
    let V = c;
    if (
      (c === 'class' && (V = '.%s'),
      c === 'data' && (V = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (V = `[${c}="%s"]`),
      q)
    ) {
      if (V === 'media')
        return a.defaultColorScheme === q
          ? ':root'
          : { [`@media (prefers-color-scheme: ${p[q]?.palette?.mode || q})`]: { ':root': N } };
      if (V) return a.defaultColorScheme === q ? `:root, ${V.replace('%s', String(q))}` : V.replace('%s', String(q));
    }
    return ':root';
  }
  return {
    vars: j,
    generateThemeVars: () => {
      let q = { ...b };
      return (
        Object.entries(O).forEach(([, { vars: N }]) => {
          q = Xe(q, N);
        }),
        q
      );
    },
    generateStyleSheets: () => {
      const q = [],
        N = a.defaultColorScheme || 'light';
      function V(st, pt) {
        Object.keys(pt).length && q.push(typeof st == 'string' ? { [st]: { ...pt } } : st);
      }
      V(o(void 0, { ...S }), S);
      const { [N]: K, ...ct } = O;
      if (K) {
        const { css: st } = K,
          pt = p[N]?.palette?.mode,
          ft = !u && pt ? { colorScheme: pt, ...st } : { ...st };
        V(o(N, { ...ft }), ft);
      }
      return (
        Object.entries(ct).forEach(([st, { css: pt }]) => {
          const ft = p[st]?.palette?.mode,
            v = !u && ft ? { colorScheme: ft, ...pt } : { ...pt };
          V(o(st, { ...v }), v);
        }),
        f &&
          q.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        q
      );
    },
  };
}
function K2(a) {
  return function (o) {
    return a === 'media'
      ? `@media (prefers-color-scheme: ${o})`
      : a
        ? a.startsWith('data-') && !a.includes('%s')
          ? `[${a}="${o}"] &`
          : a === 'class'
            ? `.${o} &`
            : a === 'data'
              ? `[data-${o}] &`
              : `${a.replace('%s', o)} &`
        : '&';
  };
}
function on(a, i, o = void 0) {
  const u = {};
  for (const c in a) {
    const f = a[c];
    let p = '',
      h = !0;
    for (let y = 0; y < f.length; y += 1) {
      const g = f[y];
      g && ((p += (h === !0 ? '' : ' ') + i(g)), (h = !1), o && o[g] && (p += ' ' + o[g]));
    }
    u[c] = p;
  }
  return u;
}
const J2 = Nr(),
  F2 = Sg('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[`maxWidth${mt(String(o.maxWidth))}`], o.fixed && i.fixed, o.disableGutters && i.disableGutters];
    },
  }),
  W2 = (a) => xg({ props: a, name: 'MuiContainer', defaultTheme: J2 }),
  P2 = (a, i) => {
    const o = (y) => Qe(i, y),
      { classes: u, fixed: c, disableGutters: f, maxWidth: p } = a,
      h = { root: ['root', p && `maxWidth${mt(String(p))}`, c && 'fixed', f && 'disableGutters'] };
    return on(h, o, u);
  };
function I2(a = {}) {
  const { createStyledComponent: i = F2, useThemeProps: o = W2, componentName: u = 'MuiContainer' } = a,
    c = i(
      ({ theme: p, ownerState: h }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!h.disableGutters && {
          paddingLeft: p.spacing(2),
          paddingRight: p.spacing(2),
          [p.breakpoints.up('sm')]: { paddingLeft: p.spacing(3), paddingRight: p.spacing(3) },
        }),
      }),
      ({ theme: p, ownerState: h }) =>
        h.fixed &&
        Object.keys(p.breakpoints.values).reduce((y, g) => {
          const b = g,
            S = p.breakpoints.values[b];
          return (S !== 0 && (y[p.breakpoints.up(b)] = { maxWidth: `${S}${p.breakpoints.unit}` }), y);
        }, {}),
      ({ theme: p, ownerState: h }) => ({
        ...(h.maxWidth === 'xs' && { [p.breakpoints.up('xs')]: { maxWidth: Math.max(p.breakpoints.values.xs, 444) } }),
        ...(h.maxWidth &&
          h.maxWidth !== 'xs' && {
            [p.breakpoints.up(h.maxWidth)]: { maxWidth: `${p.breakpoints.values[h.maxWidth]}${p.breakpoints.unit}` },
          }),
      })
    );
  return H.forwardRef(function (h, y) {
    const g = o(h),
      {
        className: b,
        component: S = 'div',
        disableGutters: A = !1,
        fixed: j = !1,
        maxWidth: O = 'lg',
        classes: T,
        ...k
      } = g,
      Y = { ...g, component: S, disableGutters: A, fixed: j, maxWidth: O },
      P = P2(Y, u);
    return R.jsx(c, { as: S, ownerState: Y, className: Lt(P.root, b), ref: y, ...k });
  });
}
const tS = Nr(),
  eS = Sg('div', { name: 'MuiStack', slot: 'Root' });
function nS(a) {
  return xg({ props: a, name: 'MuiStack', defaultTheme: tS });
}
function aS(a, i) {
  const o = H.Children.toArray(a).filter(Boolean);
  return o.reduce(
    (u, c, f) => (u.push(c), f < o.length - 1 && u.push(H.cloneElement(i, { key: `separator-${f}` })), u),
    []
  );
}
const lS = (a) => ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[a],
  iS = ({ ownerState: a, theme: i }) => {
    let o = {
      display: 'flex',
      flexDirection: 'column',
      ...Hn({ theme: i }, nf({ values: a.direction, breakpoints: i.breakpoints.values }), (u) => ({
        flexDirection: u,
      })),
    };
    if (a.spacing) {
      const u = Eu(i),
        c = Object.keys(i.breakpoints.values).reduce(
          (y, g) => (
            ((typeof a.spacing == 'object' && a.spacing[g] != null) ||
              (typeof a.direction == 'object' && a.direction[g] != null)) &&
              (y[g] = !0),
            y
          ),
          {}
        ),
        f = nf({ values: a.direction, base: c }),
        p = nf({ values: a.spacing, base: c });
      (typeof f == 'object' &&
        Object.keys(f).forEach((y, g, b) => {
          if (!f[y]) {
            const A = g > 0 ? f[b[g - 1]] : 'column';
            f[y] = A;
          }
        }),
        (o = Xe(
          o,
          Hn({ theme: i }, p, (y, g) =>
            a.useFlexGap
              ? { gap: Sl(u, y) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': { [`margin${lS(g ? f[g] : a.direction)}`]: Sl(u, y) },
                }
          )
        )));
    }
    return ((o = Rb(i.breakpoints, o)), o);
  };
function rS(a = {}) {
  const { createStyledComponent: i = eS, useThemeProps: o = nS, componentName: u = 'MuiStack' } = a,
    c = () => on({ root: ['root'] }, (y) => Qe(u, y), {}),
    f = i(iS);
  return H.forwardRef(function (y, g) {
    const b = o(y),
      S = Hf(b),
      {
        component: A = 'div',
        direction: j = 'column',
        spacing: O = 0,
        divider: T,
        children: k,
        className: Y,
        useFlexGap: P = !1,
        ...J
      } = S,
      q = { direction: j, spacing: O, useFlexGap: P },
      N = c();
    return R.jsx(f, { as: A, ownerState: q, ref: g, className: Lt(N.root, Y), ...J, children: T ? aS(k, T) : k });
  });
}
function zg() {
  return {
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: zr.white, default: zr.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const Ag = zg();
function Mg() {
  return {
    text: {
      primary: zr.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: zr.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const mf = Mg();
function Cm(a, i, o, u) {
  const c = u.light || u,
    f = u.dark || u * 1.5;
  a[i] ||
    (a.hasOwnProperty(o)
      ? (a[i] = a[o])
      : i === 'light'
        ? (a.light = _u(a.main, c))
        : i === 'dark' && (a.dark = Bu(a.main, f)));
}
function Tm(a, i, o, u, c) {
  const f = c.light || c,
    p = c.dark || c * 1.5;
  i[o] ||
    (i.hasOwnProperty(u)
      ? (i[o] = i[u])
      : o === 'light'
        ? (i.light = `color-mix(in ${a}, ${i.main}, #fff ${(f * 100).toFixed(0)}%)`)
        : o === 'dark' && (i.dark = `color-mix(in ${a}, ${i.main}, #000 ${(p * 100).toFixed(0)}%)`));
}
function oS(a = 'light') {
  return a === 'dark'
    ? { main: si[200], light: si[50], dark: si[400] }
    : { main: si[700], light: si[400], dark: si[800] };
}
function uS(a = 'light') {
  return a === 'dark'
    ? { main: ui[200], light: ui[50], dark: ui[400] }
    : { main: ui[500], light: ui[300], dark: ui[700] };
}
function sS(a = 'light') {
  return a === 'dark'
    ? { main: oi[500], light: oi[300], dark: oi[700] }
    : { main: oi[700], light: oi[400], dark: oi[800] };
}
function cS(a = 'light') {
  return a === 'dark'
    ? { main: ci[400], light: ci[300], dark: ci[700] }
    : { main: ci[700], light: ci[500], dark: ci[900] };
}
function fS(a = 'light') {
  return a === 'dark'
    ? { main: fi[400], light: fi[300], dark: fi[700] }
    : { main: fi[800], light: fi[500], dark: fi[900] };
}
function dS(a = 'light') {
  return a === 'dark'
    ? { main: yr[400], light: yr[300], dark: yr[700] }
    : { main: '#ed6c02', light: yr[500], dark: yr[900] };
}
function pS(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Lf(a) {
  const { mode: i = 'light', contrastThreshold: o = 3, tonalOffset: u = 0.2, colorSpace: c, ...f } = a,
    p = a.primary || oS(i),
    h = a.secondary || uS(i),
    y = a.error || sS(i),
    g = a.info || cS(i),
    b = a.success || fS(i),
    S = a.warning || dS(i);
  function A(k) {
    return c ? pS(k) : j2(k, mf.text.primary) >= o ? mf.text.primary : Ag.text.primary;
  }
  const j = ({ color: k, name: Y, mainShade: P = 500, lightShade: J = 300, darkShade: q = 700 }) => {
    if (((k = { ...k }), !k.main && k[P] && (k.main = k[P]), !k.hasOwnProperty('main')))
      throw new Error(bl(11, Y ? ` (${Y})` : '', P));
    if (typeof k.main != 'string') throw new Error(bl(12, Y ? ` (${Y})` : '', JSON.stringify(k.main)));
    return (
      c ? (Tm(c, k, 'light', J, u), Tm(c, k, 'dark', q, u)) : (Cm(k, 'light', J, u), Cm(k, 'dark', q, u)),
      k.contrastText || (k.contrastText = A(k.main)),
      k
    );
  };
  let O;
  return (
    i === 'light' ? (O = zg()) : i === 'dark' && (O = Mg()),
    Xe(
      {
        common: { ...zr },
        mode: i,
        primary: j({ color: p, name: 'primary' }),
        secondary: j({ color: h, name: 'secondary', mainShade: 'A400', lightShade: 'A200', darkShade: 'A700' }),
        error: j({ color: y, name: 'error' }),
        warning: j({ color: S, name: 'warning' }),
        info: j({ color: g, name: 'info' }),
        success: j({ color: b, name: 'success' }),
        grey: xv,
        contrastThreshold: o,
        getContrastText: A,
        augmentColor: j,
        tonalOffset: u,
        ...O,
      },
      f
    )
  );
}
function hS(a) {
  const i = {};
  return (
    Object.entries(a).forEach((u) => {
      const [c, f] = u;
      typeof f == 'object' &&
        (i[c] =
          `${f.fontStyle ? `${f.fontStyle} ` : ''}${f.fontVariant ? `${f.fontVariant} ` : ''}${f.fontWeight ? `${f.fontWeight} ` : ''}${f.fontStretch ? `${f.fontStretch} ` : ''}${f.fontSize || ''}${f.lineHeight ? `/${f.lineHeight} ` : ''}${f.fontFamily || ''}`);
    }),
    i
  );
}
function mS(a, i) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [a.up('sm')]: { minHeight: 64 },
    },
    ...i,
  };
}
function gS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Em = { textTransform: 'uppercase' },
  zm = '"Roboto", "Helvetica", "Arial", sans-serif';
function yS(a, i) {
  const {
      fontFamily: o = zm,
      fontSize: u = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: h = 700,
      htmlFontSize: y = 16,
      allVariants: g,
      pxToRem: b,
      ...S
    } = typeof i == 'function' ? i(a) : i,
    A = u / 14,
    j = b || ((k) => `${(k / y) * A}rem`),
    O = (k, Y, P, J, q) => ({
      fontFamily: o,
      fontWeight: k,
      fontSize: j(Y),
      lineHeight: P,
      ...(o === zm ? { letterSpacing: `${gS(J / Y)}em` } : {}),
      ...q,
      ...g,
    }),
    T = {
      h1: O(c, 96, 1.167, -1.5),
      h2: O(c, 60, 1.2, -0.5),
      h3: O(f, 48, 1.167, 0),
      h4: O(f, 34, 1.235, 0.25),
      h5: O(f, 24, 1.334, 0),
      h6: O(p, 20, 1.6, 0.15),
      subtitle1: O(f, 16, 1.75, 0.15),
      subtitle2: O(p, 14, 1.57, 0.1),
      body1: O(f, 16, 1.5, 0.15),
      body2: O(f, 14, 1.43, 0.15),
      button: O(p, 14, 1.75, 0.4, Em),
      caption: O(f, 12, 1.66, 0.4),
      overline: O(f, 12, 2.66, 1, Em),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Xe(
    {
      htmlFontSize: y,
      pxToRem: j,
      fontFamily: o,
      fontSize: u,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: h,
      ...T,
    },
    S,
    { clone: !1 }
  );
}
const vS = 0.2,
  bS = 0.14,
  SS = 0.12;
function oe(...a) {
  return [
    `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${vS})`,
    `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${bS})`,
    `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${SS})`,
  ].join(',');
}
const xS = [
    'none',
    oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  CS = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Og = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Am(a) {
  return `${Math.round(a)}ms`;
}
function TS(a) {
  if (!a) return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function ES(a) {
  const i = { ...CS, ...a.easing },
    o = { ...Og, ...a.duration };
  return {
    getAutoHeightDuration: TS,
    create: (c = ['all'], f = {}) => {
      const { duration: p = o.standard, easing: h = i.easeInOut, delay: y = 0, ...g } = f;
      return (Array.isArray(c) ? c : [c])
        .map((b) => `${b} ${typeof p == 'string' ? p : Am(p)} ${h} ${typeof y == 'string' ? y : Am(y)}`)
        .join(',');
    },
    ...a,
    easing: i,
    duration: o,
  };
}
const zS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function AS(a) {
  return (
    Zn(a) || typeof a > 'u' || typeof a == 'string' || typeof a == 'boolean' || typeof a == 'number' || Array.isArray(a)
  );
}
function Rg(a = {}) {
  const i = { ...a };
  function o(u) {
    const c = Object.entries(u);
    for (let f = 0; f < c.length; f++) {
      const [p, h] = c[f];
      !AS(h) || p.startsWith('unstable_') ? delete u[p] : Zn(h) && ((u[p] = { ...h }), o(u[p]));
    }
  }
  return (
    o(i),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Mm(a) {
  return typeof a == 'number' ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const MS = (a) => {
  if (!Number.isNaN(+a)) return +a;
  const i = a.match(/\d*\.?\d+/g);
  if (!i) return 0;
  let o = 0;
  for (let u = 0; u < i.length; u += 1) o += +i[u];
  return o;
};
function OS(a) {
  Object.assign(a, {
    alpha(i, o) {
      const u = this || a;
      return u.colorSpace
        ? `oklch(from ${i} l c h / ${typeof o == 'string' ? `calc(${o})` : o})`
        : u.vars
          ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof o == 'string' ? `calc(${o})` : o})`
          : fu(i, MS(o));
    },
    lighten(i, o) {
      const u = this || a;
      return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${i}, #fff ${Mm(o)})` : _u(i, o);
    },
    darken(i, o) {
      const u = this || a;
      return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${i}, #000 ${Mm(o)})` : Bu(i, o);
    },
  });
}
function gf(a = {}, ...i) {
  const {
    breakpoints: o,
    mixins: u = {},
    spacing: c,
    palette: f = {},
    transitions: p = {},
    typography: h = {},
    shape: y,
    colorSpace: g,
    ...b
  } = a;
  if (a.vars && a.generateThemeVars === void 0) throw new Error(bl(20));
  const S = Lf({ ...f, colorSpace: g }),
    A = Nr(a);
  let j = Xe(A, {
    mixins: mS(A.breakpoints, u),
    palette: S,
    shadows: xS.slice(),
    typography: yS(S, h),
    transitions: ES(p),
    zIndex: { ...zS },
  });
  return (
    (j = Xe(j, b)),
    (j = i.reduce((O, T) => Xe(O, T), j)),
    (j.unstable_sxConfig = { ...jr, ...b?.unstable_sxConfig }),
    (j.unstable_sx = function (T) {
      return xl({ sx: T, theme: this });
    }),
    (j.toRuntimeSource = Rg),
    OS(j),
    j
  );
}
function yf(a) {
  let i;
  return (a < 1 ? (i = 5.11916 * a ** 2) : (i = 4.5 * Math.log(a + 1) + 2), Math.round(i * 10) / 1e3);
}
const RS = [...Array(25)].map((a, i) => {
  if (i === 0) return 'none';
  const o = yf(i);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function wg(a) {
  return {
    inputPlaceholder: a === 'dark' ? 0.5 : 0.42,
    inputUnderline: a === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: a === 'dark' ? 0.2 : 0.12,
    switchTrack: a === 'dark' ? 0.3 : 0.38,
  };
}
function Bg(a) {
  return a === 'dark' ? RS : [];
}
function wS(a) {
  const { palette: i = { mode: 'light' }, opacity: o, overlays: u, colorSpace: c, ...f } = a,
    p = Lf({ ...i, colorSpace: c });
  return { palette: p, opacity: { ...wg(p.mode), ...o }, overlays: u || Bg(p.mode), ...f };
}
function BS(a) {
  return (
    !!a[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!a[0].match(/sxConfig$/) ||
    (a[0] === 'palette' && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const _S = (a) => [
    ...[...Array(25)].map((i, o) => `--${a ? `${a}-` : ''}overlays-${o}`),
    `--${a ? `${a}-` : ''}palette-AppBar-darkBg`,
    `--${a ? `${a}-` : ''}palette-AppBar-darkColor`,
  ],
  DS = (a) => (i, o) => {
    const u = a.rootSelector || ':root',
      c = a.colorSchemeSelector;
    let f = c;
    if (
      (c === 'class' && (f = '.%s'),
      c === 'data' && (f = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (f = `[${c}="%s"]`),
      a.defaultColorScheme === i)
    ) {
      if (i === 'dark') {
        const p = {};
        return (
          _S(a.cssVarPrefix).forEach((h) => {
            ((p[h] = o[h]), delete o[h]);
          }),
          f === 'media'
            ? { [u]: o, '@media (prefers-color-scheme: dark)': { [u]: p } }
            : f
              ? { [f.replace('%s', i)]: p, [`${u}, ${f.replace('%s', i)}`]: o }
              : { [u]: { ...o, ...p } }
        );
      }
      if (f && f !== 'media') return `${u}, ${f.replace('%s', String(i))}`;
    } else if (i) {
      if (f === 'media') return { [`@media (prefers-color-scheme: ${String(i)})`]: { [u]: o } };
      if (f) return f.replace('%s', String(i));
    }
    return u;
  };
function jS(a, i) {
  i.forEach((o) => {
    a[o] || (a[o] = {});
  });
}
function $(a, i, o) {
  !a[i] && o && (a[i] = o);
}
function Sr(a) {
  return typeof a != 'string' || !a.startsWith('hsl') ? a : Tg(a);
}
function ma(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = br(Sr(a[i])));
}
function NS(a) {
  return typeof a == 'number'
    ? `${a}px`
    : typeof a == 'string' || typeof a == 'function' || Array.isArray(a)
      ? a
      : '8px';
}
const Vn = (a) => {
    try {
      return a();
    } catch {}
  },
  US = (a = 'mui') => V2(a);
function rf(a, i, o, u, c) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const f = c === 'dark' ? 'dark' : 'light';
  if (!u) {
    i[c] = wS({ ...o, palette: { mode: f, ...o?.palette }, colorSpace: a });
    return;
  }
  const { palette: p, ...h } = gf({ ...u, palette: { mode: f, ...o?.palette }, colorSpace: a });
  return ((i[c] = { ...o, palette: p, opacity: { ...wg(f), ...o?.opacity }, overlays: o?.overlays || Bg(f) }), h);
}
function HS(a = {}, ...i) {
  const {
      colorSchemes: o = { light: !0 },
      defaultColorScheme: u,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      nativeColor: p = !1,
      shouldSkipGeneratingVar: h = BS,
      colorSchemeSelector: y = o.light && o.dark ? 'media' : void 0,
      rootSelector: g = ':root',
      ...b
    } = a,
    S = Object.keys(o)[0],
    A = u || (o.light && S !== 'light' ? 'light' : S),
    j = US(f),
    { [A]: O, light: T, dark: k, ...Y } = o,
    P = { ...Y };
  let J = O;
  if ((((A === 'dark' && !('dark' in o)) || (A === 'light' && !('light' in o))) && (J = !0), !J))
    throw new Error(bl(21, A));
  let q;
  p && (q = 'oklch');
  const N = rf(q, P, J, b, A);
  (T && !P.light && rf(q, P, T, void 0, 'light'), k && !P.dark && rf(q, P, k, void 0, 'dark'));
  let V = {
    defaultColorScheme: A,
    ...N,
    cssVarPrefix: f,
    colorSchemeSelector: y,
    rootSelector: g,
    getCssVar: j,
    colorSchemes: P,
    font: { ...hS(N.typography), ...N.font },
    spacing: NS(b.spacing),
  };
  (Object.keys(V.colorSchemes).forEach((ft) => {
    const v = V.colorSchemes[ft].palette,
      W = (et) => {
        const z = et.split('-'),
          F = z[1],
          I = z[2];
        return j(et, v[F][I]);
      };
    (v.mode === 'light' && ($(v.common, 'background', '#fff'), $(v.common, 'onBackground', '#000')),
      v.mode === 'dark' && ($(v.common, 'background', '#000'), $(v.common, 'onBackground', '#fff')));
    function X(et, z, F) {
      if (q) {
        let I;
        return (
          et === fl && (I = `transparent ${((1 - F) * 100).toFixed(0)}%`),
          et === Qt && (I = `#000 ${(F * 100).toFixed(0)}%`),
          et === Zt && (I = `#fff ${(F * 100).toFixed(0)}%`),
          `color-mix(in ${q}, ${z}, ${I})`
        );
      }
      return et(z, F);
    }
    if (
      (jS(v, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      v.mode === 'light')
    ) {
      ($(v.Alert, 'errorColor', X(Qt, v.error.light, 0.6)),
        $(v.Alert, 'infoColor', X(Qt, v.info.light, 0.6)),
        $(v.Alert, 'successColor', X(Qt, v.success.light, 0.6)),
        $(v.Alert, 'warningColor', X(Qt, v.warning.light, 0.6)),
        $(v.Alert, 'errorFilledBg', W('palette-error-main')),
        $(v.Alert, 'infoFilledBg', W('palette-info-main')),
        $(v.Alert, 'successFilledBg', W('palette-success-main')),
        $(v.Alert, 'warningFilledBg', W('palette-warning-main')),
        $(
          v.Alert,
          'errorFilledColor',
          Vn(() => v.getContrastText(v.error.main))
        ),
        $(
          v.Alert,
          'infoFilledColor',
          Vn(() => v.getContrastText(v.info.main))
        ),
        $(
          v.Alert,
          'successFilledColor',
          Vn(() => v.getContrastText(v.success.main))
        ),
        $(
          v.Alert,
          'warningFilledColor',
          Vn(() => v.getContrastText(v.warning.main))
        ),
        $(v.Alert, 'errorStandardBg', X(Zt, v.error.light, 0.9)),
        $(v.Alert, 'infoStandardBg', X(Zt, v.info.light, 0.9)),
        $(v.Alert, 'successStandardBg', X(Zt, v.success.light, 0.9)),
        $(v.Alert, 'warningStandardBg', X(Zt, v.warning.light, 0.9)),
        $(v.Alert, 'errorIconColor', W('palette-error-main')),
        $(v.Alert, 'infoIconColor', W('palette-info-main')),
        $(v.Alert, 'successIconColor', W('palette-success-main')),
        $(v.Alert, 'warningIconColor', W('palette-warning-main')),
        $(v.AppBar, 'defaultBg', W('palette-grey-100')),
        $(v.Avatar, 'defaultBg', W('palette-grey-400')),
        $(v.Button, 'inheritContainedBg', W('palette-grey-300')),
        $(v.Button, 'inheritContainedHoverBg', W('palette-grey-A100')),
        $(v.Chip, 'defaultBorder', W('palette-grey-400')),
        $(v.Chip, 'defaultAvatarColor', W('palette-grey-700')),
        $(v.Chip, 'defaultIconColor', W('palette-grey-700')),
        $(v.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        $(v.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        $(v.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        $(v.LinearProgress, 'primaryBg', X(Zt, v.primary.main, 0.62)),
        $(v.LinearProgress, 'secondaryBg', X(Zt, v.secondary.main, 0.62)),
        $(v.LinearProgress, 'errorBg', X(Zt, v.error.main, 0.62)),
        $(v.LinearProgress, 'infoBg', X(Zt, v.info.main, 0.62)),
        $(v.LinearProgress, 'successBg', X(Zt, v.success.main, 0.62)),
        $(v.LinearProgress, 'warningBg', X(Zt, v.warning.main, 0.62)),
        $(v.Skeleton, 'bg', q ? X(fl, v.text.primary, 0.11) : `rgba(${W('palette-text-primaryChannel')} / 0.11)`),
        $(v.Slider, 'primaryTrack', X(Zt, v.primary.main, 0.62)),
        $(v.Slider, 'secondaryTrack', X(Zt, v.secondary.main, 0.62)),
        $(v.Slider, 'errorTrack', X(Zt, v.error.main, 0.62)),
        $(v.Slider, 'infoTrack', X(Zt, v.info.main, 0.62)),
        $(v.Slider, 'successTrack', X(Zt, v.success.main, 0.62)),
        $(v.Slider, 'warningTrack', X(Zt, v.warning.main, 0.62)));
      const et = q ? X(Qt, v.background.default, 0.6825) : Fo(v.background.default, 0.8);
      ($(v.SnackbarContent, 'bg', et),
        $(
          v.SnackbarContent,
          'color',
          Vn(() => (q ? mf.text.primary : v.getContrastText(et)))
        ),
        $(v.SpeedDialAction, 'fabHoverBg', Fo(v.background.paper, 0.15)),
        $(v.StepConnector, 'border', W('palette-grey-400')),
        $(v.StepContent, 'border', W('palette-grey-400')),
        $(v.Switch, 'defaultColor', W('palette-common-white')),
        $(v.Switch, 'defaultDisabledColor', W('palette-grey-100')),
        $(v.Switch, 'primaryDisabledColor', X(Zt, v.primary.main, 0.62)),
        $(v.Switch, 'secondaryDisabledColor', X(Zt, v.secondary.main, 0.62)),
        $(v.Switch, 'errorDisabledColor', X(Zt, v.error.main, 0.62)),
        $(v.Switch, 'infoDisabledColor', X(Zt, v.info.main, 0.62)),
        $(v.Switch, 'successDisabledColor', X(Zt, v.success.main, 0.62)),
        $(v.Switch, 'warningDisabledColor', X(Zt, v.warning.main, 0.62)),
        $(v.TableCell, 'border', X(Zt, X(fl, v.divider, 1), 0.88)),
        $(v.Tooltip, 'bg', X(fl, v.grey[700], 0.92)));
    }
    if (v.mode === 'dark') {
      ($(v.Alert, 'errorColor', X(Zt, v.error.light, 0.6)),
        $(v.Alert, 'infoColor', X(Zt, v.info.light, 0.6)),
        $(v.Alert, 'successColor', X(Zt, v.success.light, 0.6)),
        $(v.Alert, 'warningColor', X(Zt, v.warning.light, 0.6)),
        $(v.Alert, 'errorFilledBg', W('palette-error-dark')),
        $(v.Alert, 'infoFilledBg', W('palette-info-dark')),
        $(v.Alert, 'successFilledBg', W('palette-success-dark')),
        $(v.Alert, 'warningFilledBg', W('palette-warning-dark')),
        $(
          v.Alert,
          'errorFilledColor',
          Vn(() => v.getContrastText(v.error.dark))
        ),
        $(
          v.Alert,
          'infoFilledColor',
          Vn(() => v.getContrastText(v.info.dark))
        ),
        $(
          v.Alert,
          'successFilledColor',
          Vn(() => v.getContrastText(v.success.dark))
        ),
        $(
          v.Alert,
          'warningFilledColor',
          Vn(() => v.getContrastText(v.warning.dark))
        ),
        $(v.Alert, 'errorStandardBg', X(Qt, v.error.light, 0.9)),
        $(v.Alert, 'infoStandardBg', X(Qt, v.info.light, 0.9)),
        $(v.Alert, 'successStandardBg', X(Qt, v.success.light, 0.9)),
        $(v.Alert, 'warningStandardBg', X(Qt, v.warning.light, 0.9)),
        $(v.Alert, 'errorIconColor', W('palette-error-main')),
        $(v.Alert, 'infoIconColor', W('palette-info-main')),
        $(v.Alert, 'successIconColor', W('palette-success-main')),
        $(v.Alert, 'warningIconColor', W('palette-warning-main')),
        $(v.AppBar, 'defaultBg', W('palette-grey-900')),
        $(v.AppBar, 'darkBg', W('palette-background-paper')),
        $(v.AppBar, 'darkColor', W('palette-text-primary')),
        $(v.Avatar, 'defaultBg', W('palette-grey-600')),
        $(v.Button, 'inheritContainedBg', W('palette-grey-800')),
        $(v.Button, 'inheritContainedHoverBg', W('palette-grey-700')),
        $(v.Chip, 'defaultBorder', W('palette-grey-700')),
        $(v.Chip, 'defaultAvatarColor', W('palette-grey-300')),
        $(v.Chip, 'defaultIconColor', W('palette-grey-300')),
        $(v.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        $(v.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        $(v.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        $(v.LinearProgress, 'primaryBg', X(Qt, v.primary.main, 0.5)),
        $(v.LinearProgress, 'secondaryBg', X(Qt, v.secondary.main, 0.5)),
        $(v.LinearProgress, 'errorBg', X(Qt, v.error.main, 0.5)),
        $(v.LinearProgress, 'infoBg', X(Qt, v.info.main, 0.5)),
        $(v.LinearProgress, 'successBg', X(Qt, v.success.main, 0.5)),
        $(v.LinearProgress, 'warningBg', X(Qt, v.warning.main, 0.5)),
        $(v.Skeleton, 'bg', q ? X(fl, v.text.primary, 0.13) : `rgba(${W('palette-text-primaryChannel')} / 0.13)`),
        $(v.Slider, 'primaryTrack', X(Qt, v.primary.main, 0.5)),
        $(v.Slider, 'secondaryTrack', X(Qt, v.secondary.main, 0.5)),
        $(v.Slider, 'errorTrack', X(Qt, v.error.main, 0.5)),
        $(v.Slider, 'infoTrack', X(Qt, v.info.main, 0.5)),
        $(v.Slider, 'successTrack', X(Qt, v.success.main, 0.5)),
        $(v.Slider, 'warningTrack', X(Qt, v.warning.main, 0.5)));
      const et = q ? X(Zt, v.background.default, 0.985) : Fo(v.background.default, 0.98);
      ($(v.SnackbarContent, 'bg', et),
        $(
          v.SnackbarContent,
          'color',
          Vn(() => (q ? Ag.text.primary : v.getContrastText(et)))
        ),
        $(v.SpeedDialAction, 'fabHoverBg', Fo(v.background.paper, 0.15)),
        $(v.StepConnector, 'border', W('palette-grey-600')),
        $(v.StepContent, 'border', W('palette-grey-600')),
        $(v.Switch, 'defaultColor', W('palette-grey-300')),
        $(v.Switch, 'defaultDisabledColor', W('palette-grey-600')),
        $(v.Switch, 'primaryDisabledColor', X(Qt, v.primary.main, 0.55)),
        $(v.Switch, 'secondaryDisabledColor', X(Qt, v.secondary.main, 0.55)),
        $(v.Switch, 'errorDisabledColor', X(Qt, v.error.main, 0.55)),
        $(v.Switch, 'infoDisabledColor', X(Qt, v.info.main, 0.55)),
        $(v.Switch, 'successDisabledColor', X(Qt, v.success.main, 0.55)),
        $(v.Switch, 'warningDisabledColor', X(Qt, v.warning.main, 0.55)),
        $(v.TableCell, 'border', X(Qt, X(fl, v.divider, 1), 0.68)),
        $(v.Tooltip, 'bg', X(fl, v.grey[700], 0.92)));
    }
    (ma(v.background, 'default'),
      ma(v.background, 'paper'),
      ma(v.common, 'background'),
      ma(v.common, 'onBackground'),
      ma(v, 'divider'),
      Object.keys(v).forEach((et) => {
        const z = v[et];
        et !== 'tonalOffset' &&
          z &&
          typeof z == 'object' &&
          (z.main && $(v[et], 'mainChannel', br(Sr(z.main))),
          z.light && $(v[et], 'lightChannel', br(Sr(z.light))),
          z.dark && $(v[et], 'darkChannel', br(Sr(z.dark))),
          z.contrastText && $(v[et], 'contrastTextChannel', br(Sr(z.contrastText))),
          et === 'text' && (ma(v[et], 'primary'), ma(v[et], 'secondary')),
          et === 'action' && (z.active && ma(v[et], 'active'), z.selected && ma(v[et], 'selected')));
      }));
  }),
    (V = i.reduce((ft, v) => Xe(ft, v), V)));
  const K = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: h,
      getSelector: DS(V),
      enableContrastVars: p,
    },
    { vars: ct, generateThemeVars: st, generateStyleSheets: pt } = Z2(V, K);
  return (
    (V.vars = ct),
    Object.entries(V.colorSchemes[V.defaultColorScheme]).forEach(([ft, v]) => {
      V[ft] = v;
    }),
    (V.generateThemeVars = st),
    (V.generateStyleSheets = pt),
    (V.generateSpacing = function () {
      return hg(b.spacing, Eu(this));
    }),
    (V.getColorSchemeSelector = K2(y)),
    (V.spacing = V.generateSpacing()),
    (V.shouldSkipGeneratingVar = h),
    (V.unstable_sxConfig = { ...jr, ...b?.unstable_sxConfig }),
    (V.unstable_sx = function (v) {
      return xl({ sx: v, theme: this });
    }),
    (V.toRuntimeSource = Rg),
    V
  );
}
function Om(a, i, o) {
  a.colorSchemes &&
    o &&
    (a.colorSchemes[i] = { ...(o !== !0 && o), palette: Lf({ ...(o === !0 ? {} : o.palette), mode: i }) });
}
function _g(a = {}, ...i) {
  const {
      palette: o,
      cssVariables: u = !1,
      colorSchemes: c = o ? void 0 : { light: !0 },
      defaultColorScheme: f = o?.mode,
      ...p
    } = a,
    h = f || 'light',
    y = c?.[h],
    g = { ...c, ...(o ? { [h]: { ...(typeof y != 'boolean' && y), palette: o } } : void 0) };
  if (u === !1) {
    if (!('colorSchemes' in a)) return gf(a, ...i);
    let b = o;
    'palette' in a || (g[h] && (g[h] !== !0 ? (b = g[h].palette) : h === 'dark' && (b = { mode: 'dark' })));
    const S = gf({ ...a, palette: b }, ...i);
    return (
      (S.defaultColorScheme = h),
      (S.colorSchemes = g),
      S.palette.mode === 'light' &&
        ((S.colorSchemes.light = { ...(g.light !== !0 && g.light), palette: S.palette }), Om(S, 'dark', g.dark)),
      S.palette.mode === 'dark' &&
        ((S.colorSchemes.dark = { ...(g.dark !== !0 && g.dark), palette: S.palette }), Om(S, 'light', g.light)),
      S
    );
  }
  return (
    !o && !('light' in g) && h === 'light' && (g.light = !0),
    HS({ ...p, colorSchemes: g, defaultColorScheme: h, ...(typeof u != 'boolean' && u) }, ...i)
  );
}
const Dg = _g();
function jg() {
  const a = Uf(Dg);
  return a[zf] || a;
}
function $f(a) {
  return a !== 'ownerState' && a !== 'theme' && a !== 'sx' && a !== 'as';
}
const Yf = (a) => $f(a) && a !== 'classes',
  _t = bg({ themeId: zf, defaultTheme: Dg, rootShouldForwardProp: Yf });
function kS() {
  return Hf;
}
const ve = G2;
function un(a) {
  return $2(a);
}
function ru(a) {
  return (a && a.ownerDocument) || document;
}
function Ng(a) {
  const { controlled: i, default: o, name: u, state: c = 'value' } = a,
    { current: f } = H.useRef(i !== void 0),
    [p, h] = H.useState(o),
    y = f ? i : p,
    g = H.useCallback((b) => {
      f || h(b);
    }, []);
  return [y, g];
}
function vl(a) {
  const i = H.useRef(a);
  return (
    Cg(() => {
      i.current = a;
    }),
    H.useRef((...o) => (0, i.current)(...o)).current
  );
}
function Si(...a) {
  const i = H.useRef(void 0),
    o = H.useCallback((u) => {
      const c = a.map((f) => {
        if (f == null) return null;
        if (typeof f == 'function') {
          const p = f,
            h = p(u);
          return typeof h == 'function'
            ? h
            : () => {
                p(null);
              };
        }
        return (
          (f.current = u),
          () => {
            f.current = null;
          }
        );
      });
      return () => {
        c.forEach((f) => f?.());
      };
    }, a);
  return H.useMemo(
    () =>
      a.every((u) => u == null)
        ? null
        : (u) => {
            (i.current && (i.current(), (i.current = void 0)), u != null && (i.current = o(u)));
          },
    a
  );
}
function Ug(a, i) {
  if (a == null) return {};
  var o = {};
  for (var u in a)
    if ({}.hasOwnProperty.call(a, u)) {
      if (i.indexOf(u) !== -1) continue;
      o[u] = a[u];
    }
  return o;
}
function vf(a, i) {
  return (
    (vf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, u) {
          return ((o.__proto__ = u), o);
        }),
    vf(a, i)
  );
}
function Hg(a, i) {
  ((a.prototype = Object.create(i.prototype)), (a.prototype.constructor = a), vf(a, i));
}
var LS = Km();
const Wo = Zm(LS),
  Rm = { disabled: !1 },
  du = He.createContext(null);
var $S = function (i) {
    return i.scrollTop;
  },
  xr = 'unmounted',
  pl = 'exited',
  hl = 'entering',
  mi = 'entered',
  bf = 'exiting',
  ya = (function (a) {
    Hg(i, a);
    function i(u, c) {
      var f;
      f = a.call(this, u, c) || this;
      var p = c,
        h = p && !p.isMounting ? u.enter : u.appear,
        y;
      return (
        (f.appearStatus = null),
        u.in
          ? h
            ? ((y = pl), (f.appearStatus = hl))
            : (y = mi)
          : u.unmountOnExit || u.mountOnEnter
            ? (y = xr)
            : (y = pl),
        (f.state = { status: y }),
        (f.nextCallback = null),
        f
      );
    }
    i.getDerivedStateFromProps = function (c, f) {
      var p = c.in;
      return p && f.status === xr ? { status: pl } : null;
    };
    var o = i.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (c) {
        var f = null;
        if (c !== this.props) {
          var p = this.state.status;
          this.props.in ? p !== hl && p !== mi && (f = hl) : (p === hl || p === mi) && (f = bf);
        }
        this.updateStatus(!1, f);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var c = this.props.timeout,
          f,
          p,
          h;
        return (
          (f = p = h = c),
          c != null && typeof c != 'number' && ((f = c.exit), (p = c.enter), (h = c.appear !== void 0 ? c.appear : p)),
          { exit: f, enter: p, appear: h }
        );
      }),
      (o.updateStatus = function (c, f) {
        if ((c === void 0 && (c = !1), f !== null))
          if ((this.cancelNextCallback(), f === hl)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var p = this.props.nodeRef ? this.props.nodeRef.current : Wo.findDOMNode(this);
              p && $S(p);
            }
            this.performEnter(c);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === pl && this.setState({ status: xr });
      }),
      (o.performEnter = function (c) {
        var f = this,
          p = this.props.enter,
          h = this.context ? this.context.isMounting : c,
          y = this.props.nodeRef ? [h] : [Wo.findDOMNode(this), h],
          g = y[0],
          b = y[1],
          S = this.getTimeouts(),
          A = h ? S.appear : S.enter;
        if ((!c && !p) || Rm.disabled) {
          this.safeSetState({ status: mi }, function () {
            f.props.onEntered(g);
          });
          return;
        }
        (this.props.onEnter(g, b),
          this.safeSetState({ status: hl }, function () {
            (f.props.onEntering(g, b),
              f.onTransitionEnd(A, function () {
                f.safeSetState({ status: mi }, function () {
                  f.props.onEntered(g, b);
                });
              }));
          }));
      }),
      (o.performExit = function () {
        var c = this,
          f = this.props.exit,
          p = this.getTimeouts(),
          h = this.props.nodeRef ? void 0 : Wo.findDOMNode(this);
        if (!f || Rm.disabled) {
          this.safeSetState({ status: pl }, function () {
            c.props.onExited(h);
          });
          return;
        }
        (this.props.onExit(h),
          this.safeSetState({ status: bf }, function () {
            (c.props.onExiting(h),
              c.onTransitionEnd(p.exit, function () {
                c.safeSetState({ status: pl }, function () {
                  c.props.onExited(h);
                });
              }));
          }));
      }),
      (o.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (c, f) {
        ((f = this.setNextCallback(f)), this.setState(c, f));
      }),
      (o.setNextCallback = function (c) {
        var f = this,
          p = !0;
        return (
          (this.nextCallback = function (h) {
            p && ((p = !1), (f.nextCallback = null), c(h));
          }),
          (this.nextCallback.cancel = function () {
            p = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (c, f) {
        this.setNextCallback(f);
        var p = this.props.nodeRef ? this.props.nodeRef.current : Wo.findDOMNode(this),
          h = c == null && !this.props.addEndListener;
        if (!p || h) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var y = this.props.nodeRef ? [this.nextCallback] : [p, this.nextCallback],
            g = y[0],
            b = y[1];
          this.props.addEndListener(g, b);
        }
        c != null && setTimeout(this.nextCallback, c);
      }),
      (o.render = function () {
        var c = this.state.status;
        if (c === xr) return null;
        var f = this.props,
          p = f.children;
        (f.in,
          f.mountOnEnter,
          f.unmountOnExit,
          f.appear,
          f.enter,
          f.exit,
          f.timeout,
          f.addEndListener,
          f.onEnter,
          f.onEntering,
          f.onEntered,
          f.onExit,
          f.onExiting,
          f.onExited,
          f.nodeRef);
        var h = Ug(f, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return He.createElement(
          du.Provider,
          { value: null },
          typeof p == 'function' ? p(c, h) : He.cloneElement(He.Children.only(p), h)
        );
      }),
      i
    );
  })(He.Component);
ya.contextType = du;
ya.propTypes = {};
function di() {}
ya.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: di,
  onEntering: di,
  onEntered: di,
  onExit: di,
  onExiting: di,
  onExited: di,
};
ya.UNMOUNTED = xr;
ya.EXITED = pl;
ya.ENTERING = hl;
ya.ENTERED = mi;
ya.EXITING = bf;
function YS(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function qf(a, i) {
  var o = function (f) {
      return i && H.isValidElement(f) ? i(f) : f;
    },
    u = Object.create(null);
  return (
    a &&
      H.Children.map(a, function (c) {
        return c;
      }).forEach(function (c) {
        u[c.key] = o(c);
      }),
    u
  );
}
function qS(a, i) {
  ((a = a || {}), (i = i || {}));
  function o(b) {
    return b in i ? i[b] : a[b];
  }
  var u = Object.create(null),
    c = [];
  for (var f in a) f in i ? c.length && ((u[f] = c), (c = [])) : c.push(f);
  var p,
    h = {};
  for (var y in i) {
    if (u[y])
      for (p = 0; p < u[y].length; p++) {
        var g = u[y][p];
        h[u[y][p]] = o(g);
      }
    h[y] = o(y);
  }
  for (p = 0; p < c.length; p++) h[c[p]] = o(c[p]);
  return h;
}
function gl(a, i, o) {
  return o[i] != null ? o[i] : a.props[i];
}
function GS(a, i) {
  return qf(a.children, function (o) {
    return H.cloneElement(o, {
      onExited: i.bind(null, o),
      in: !0,
      appear: gl(o, 'appear', a),
      enter: gl(o, 'enter', a),
      exit: gl(o, 'exit', a),
    });
  });
}
function VS(a, i, o) {
  var u = qf(a.children),
    c = qS(i, u);
  return (
    Object.keys(c).forEach(function (f) {
      var p = c[f];
      if (H.isValidElement(p)) {
        var h = f in i,
          y = f in u,
          g = i[f],
          b = H.isValidElement(g) && !g.props.in;
        y && (!h || b)
          ? (c[f] = H.cloneElement(p, {
              onExited: o.bind(null, p),
              in: !0,
              exit: gl(p, 'exit', a),
              enter: gl(p, 'enter', a),
            }))
          : !y && h && !b
            ? (c[f] = H.cloneElement(p, { in: !1 }))
            : y &&
              h &&
              H.isValidElement(g) &&
              (c[f] = H.cloneElement(p, {
                onExited: o.bind(null, p),
                in: g.props.in,
                exit: gl(p, 'exit', a),
                enter: gl(p, 'enter', a),
              }));
      }
    }),
    c
  );
}
var XS =
    Object.values ||
    function (a) {
      return Object.keys(a).map(function (i) {
        return a[i];
      });
    },
  QS = {
    component: 'div',
    childFactory: function (i) {
      return i;
    },
  },
  Gf = (function (a) {
    Hg(i, a);
    function i(u, c) {
      var f;
      f = a.call(this, u, c) || this;
      var p = f.handleExited.bind(YS(f));
      return ((f.state = { contextValue: { isMounting: !0 }, handleExited: p, firstRender: !0 }), f);
    }
    var o = i.prototype;
    return (
      (o.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (o.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (i.getDerivedStateFromProps = function (c, f) {
        var p = f.children,
          h = f.handleExited,
          y = f.firstRender;
        return { children: y ? GS(c, h) : VS(c, p, h), firstRender: !1 };
      }),
      (o.handleExited = function (c, f) {
        var p = qf(this.props.children);
        c.key in p ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (h) {
              var y = uu({}, h.children);
              return (delete y[c.key], { children: y });
            }));
      }),
      (o.render = function () {
        var c = this.props,
          f = c.component,
          p = c.childFactory,
          h = Ug(c, ['component', 'childFactory']),
          y = this.state.contextValue,
          g = XS(this.state.children).map(p);
        return (
          delete h.appear,
          delete h.enter,
          delete h.exit,
          f === null
            ? He.createElement(du.Provider, { value: y }, g)
            : He.createElement(du.Provider, { value: y }, He.createElement(f, h, g))
        );
      }),
      i
    );
  })(He.Component);
Gf.propTypes = {};
Gf.defaultProps = QS;
const wm = {};
function kg(a, i) {
  const o = H.useRef(wm);
  return (o.current === wm && (o.current = a(i)), o);
}
const ZS = [];
function KS(a) {
  H.useEffect(a, ZS);
}
class Vf {
  static create() {
    return new Vf();
  }
  currentId = null;
  start(i, o) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = null), o());
      }, i)));
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
  };
  disposeEffect = () => this.clear;
}
function Lg() {
  const a = kg(Vf.create).current;
  return (KS(a.disposeEffect), a);
}
function Bm(a, i) {
  const { timeout: o, easing: u, style: c = {} } = a;
  return {
    duration: c.transitionDuration ?? (typeof o == 'number' ? o : o[i.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof u == 'object' ? u[i.mode] : u),
    delay: c.transitionDelay,
  };
}
function Tr(a) {
  return typeof a == 'string';
}
function $g(a, i, o) {
  return a === void 0 || Tr(a) ? i : { ...i, ownerState: { ...i.ownerState, ...o } };
}
function Yg(a, i, o) {
  return typeof a == 'function' ? a(i, o) : a;
}
function ou(a, i = []) {
  if (a === void 0) return {};
  const o = {};
  return (
    Object.keys(a)
      .filter((u) => u.match(/^on[A-Z]/) && typeof a[u] == 'function' && !i.includes(u))
      .forEach((u) => {
        o[u] = a[u];
      }),
    o
  );
}
function _m(a) {
  if (a === void 0) return {};
  const i = {};
  return (
    Object.keys(a)
      .filter((o) => !(o.match(/^on[A-Z]/) && typeof a[o] == 'function'))
      .forEach((o) => {
        i[o] = a[o];
      }),
    i
  );
}
function qg(a) {
  const { getSlotProps: i, additionalProps: o, externalSlotProps: u, externalForwardedProps: c, className: f } = a;
  if (!i) {
    const j = Lt(o?.className, f, c?.className, u?.className),
      O = { ...o?.style, ...c?.style, ...u?.style },
      T = { ...o, ...c, ...u };
    return (
      j.length > 0 && (T.className = j),
      Object.keys(O).length > 0 && (T.style = O),
      { props: T, internalRef: void 0 }
    );
  }
  const p = ou({ ...c, ...u }),
    h = _m(u),
    y = _m(c),
    g = i(p),
    b = Lt(g?.className, o?.className, f, c?.className, u?.className),
    S = { ...g?.style, ...o?.style, ...c?.style, ...u?.style },
    A = { ...g, ...o, ...y, ...h };
  return (
    b.length > 0 && (A.className = b),
    Object.keys(S).length > 0 && (A.style = S),
    { props: A, internalRef: g.ref }
  );
}
function Qa(a, i) {
  const {
      className: o,
      elementType: u,
      ownerState: c,
      externalForwardedProps: f,
      internalForwardedProps: p,
      shouldForwardComponentProp: h = !1,
      ...y
    } = i,
    { component: g, slots: b = { [a]: void 0 }, slotProps: S = { [a]: void 0 }, ...A } = f,
    j = b[a] || u,
    O = Yg(S[a], c),
    {
      props: { component: T, ...k },
      internalRef: Y,
    } = qg({ className: o, ...y, externalForwardedProps: a === 'root' ? A : void 0, externalSlotProps: O }),
    P = Si(Y, O?.ref, i.ref),
    J = a === 'root' ? T || g : T,
    q = $g(
      j,
      {
        ...(a === 'root' && !g && !b[a] && p),
        ...(a !== 'root' && !b[a] && p),
        ...k,
        ...(J && !h && { as: J }),
        ...(J && h && { component: J }),
        ref: P,
      },
      c
    );
  return [j, q];
}
function JS(a) {
  return Qe('MuiCollapse', a);
}
rn('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
const FS = (a) => {
    const { orientation: i, classes: o } = a,
      u = {
        root: ['root', `${i}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${i}`],
        wrapperInner: ['wrapperInner', `${i}`],
      };
    return on(u, JS, o);
  },
  WS = _t('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        i[o.orientation],
        o.state === 'entered' && i.entered,
        o.state === 'exited' && !o.in && o.collapsedSize === '0px' && i.hidden,
      ];
    },
  })(
    ve(({ theme: a }) => ({
      height: 0,
      overflow: 'hidden',
      transition: a.transitions.create('height'),
      variants: [
        {
          props: { orientation: 'horizontal' },
          style: { height: 'auto', width: 0, transition: a.transitions.create('width') },
        },
        { props: { state: 'entered' }, style: { height: 'auto', overflow: 'visible' } },
        { props: { state: 'entered', orientation: 'horizontal' }, style: { width: 'auto' } },
        {
          props: ({ ownerState: i }) => i.state === 'exited' && !i.in && i.collapsedSize === '0px',
          style: { visibility: 'hidden' },
        },
      ],
    }))
  ),
  PS = _t('div', { name: 'MuiCollapse', slot: 'Wrapper' })({
    display: 'flex',
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  IS = _t('div', { name: 'MuiCollapse', slot: 'WrapperInner' })({
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  wr = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiCollapse' }),
      {
        addEndListener: c,
        children: f,
        className: p,
        collapsedSize: h = '0px',
        component: y,
        easing: g,
        in: b,
        onEnter: S,
        onEntered: A,
        onEntering: j,
        onExit: O,
        onExited: T,
        onExiting: k,
        orientation: Y = 'vertical',
        slots: P = {},
        slotProps: J = {},
        style: q,
        timeout: N = Og.standard,
        TransitionComponent: V = ya,
        ...K
      } = u,
      ct = { ...u, orientation: Y, collapsedSize: h },
      st = FS(ct),
      pt = jg(),
      ft = Lg(),
      v = H.useRef(null),
      W = H.useRef(),
      X = typeof h == 'number' ? `${h}px` : h,
      et = Y === 'horizontal',
      z = et ? 'width' : 'height',
      F = H.useRef(null),
      I = Si(o, F),
      it = (Et) => (se) => {
        if (Et) {
          const Nt = F.current;
          se === void 0 ? Et(Nt) : Et(Nt, se);
        }
      },
      yt = () => (v.current ? v.current[et ? 'clientWidth' : 'clientHeight'] : 0),
      x = it((Et, se) => {
        (v.current && et && (v.current.style.position = 'absolute'), (Et.style[z] = X), S && S(Et, se));
      }),
      w = it((Et, se) => {
        const Nt = yt();
        v.current && et && (v.current.style.position = '');
        const { duration: le, easing: $e } = Bm({ style: q, timeout: N, easing: g }, { mode: 'enter' });
        if (N === 'auto') {
          const Ze = pt.transitions.getAutoHeightDuration(Nt);
          ((Et.style.transitionDuration = `${Ze}ms`), (W.current = Ze));
        } else Et.style.transitionDuration = typeof le == 'string' ? le : `${le}ms`;
        ((Et.style[z] = `${Nt}px`), (Et.style.transitionTimingFunction = $e), j && j(Et, se));
      }),
      Z = it((Et, se) => {
        ((Et.style[z] = 'auto'), A && A(Et, se));
      }),
      tt = it((Et) => {
        ((Et.style[z] = `${yt()}px`), O && O(Et));
      }),
      nt = it(T),
      ot = it((Et) => {
        const se = yt(),
          { duration: Nt, easing: le } = Bm({ style: q, timeout: N, easing: g }, { mode: 'exit' });
        if (N === 'auto') {
          const $e = pt.transitions.getAutoHeightDuration(se);
          ((Et.style.transitionDuration = `${$e}ms`), (W.current = $e));
        } else Et.style.transitionDuration = typeof Nt == 'string' ? Nt : `${Nt}ms`;
        ((Et.style[z] = X), (Et.style.transitionTimingFunction = le), k && k(Et));
      }),
      bt = (Et) => {
        (N === 'auto' && ft.start(W.current || 0, Et), c && c(F.current, Et));
      },
      Ut = { slots: P, slotProps: J, component: y },
      [Rt, he] = Qa('root', {
        ref: I,
        className: Lt(st.root, p),
        elementType: WS,
        externalForwardedProps: Ut,
        ownerState: ct,
        additionalProps: { style: { [et ? 'minWidth' : 'minHeight']: X, ...q } },
      }),
      [Se, Me] = Qa('wrapper', {
        ref: v,
        className: st.wrapper,
        elementType: PS,
        externalForwardedProps: Ut,
        ownerState: ct,
      }),
      [ue, me] = Qa('wrapperInner', {
        className: st.wrapperInner,
        elementType: IS,
        externalForwardedProps: Ut,
        ownerState: ct,
      });
    return R.jsx(V, {
      in: b,
      onEnter: x,
      onEntered: Z,
      onEntering: w,
      onExit: tt,
      onExited: nt,
      onExiting: ot,
      addEndListener: bt,
      nodeRef: F,
      timeout: N === 'auto' ? null : N,
      ...K,
      children: (Et, { ownerState: se, ...Nt }) => {
        const le = { ...ct, state: Et };
        return R.jsx(Rt, {
          ...he,
          className: Lt(he.className, { entered: st.entered, exited: !b && X === '0px' && st.hidden }[Et]),
          ownerState: le,
          ...Nt,
          children: R.jsx(Se, { ...Me, ownerState: le, children: R.jsx(ue, { ...me, ownerState: le, children: f }) }),
        });
      },
    });
  });
wr && (wr.muiSupportAuto = !0);
function t5(a) {
  return Qe('MuiPaper', a);
}
rn('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const e5 = (a) => {
    const { square: i, elevation: o, variant: u, classes: c } = a,
      f = { root: ['root', u, !i && 'rounded', u === 'elevation' && `elevation${o}`] };
    return on(f, t5, c);
  },
  n5 = _t('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[o.variant], !o.square && i.rounded, o.variant === 'elevation' && i[`elevation${o.elevation}`]];
    },
  })(
    ve(({ theme: a }) => ({
      backgroundColor: (a.vars || a).palette.background.paper,
      color: (a.vars || a).palette.text.primary,
      transition: a.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: i }) => !i.square, style: { borderRadius: a.shape.borderRadius } },
        { props: { variant: 'outlined' }, style: { border: `1px solid ${(a.vars || a).palette.divider}` } },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' },
        },
      ],
    }))
  ),
  Gg = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiPaper' }),
      c = jg(),
      { className: f, component: p = 'div', elevation: h = 1, square: y = !1, variant: g = 'elevation', ...b } = u,
      S = { ...u, component: p, elevation: h, square: y, variant: g },
      A = e5(S);
    return R.jsx(n5, {
      as: p,
      ownerState: S,
      className: Lt(A.root, f),
      ref: o,
      ...b,
      style: {
        ...(g === 'elevation' && {
          '--Paper-shadow': (c.vars || c).shadows[h],
          ...(c.vars && { '--Paper-overlay': c.vars.overlays?.[h] }),
          ...(!c.vars &&
            c.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${fu('#fff', yf(h))}, ${fu('#fff', yf(h))})`,
            }),
        }),
        ...b.style,
      },
    });
  });
function pu(a) {
  try {
    return a.matches(':focus-visible');
  } catch {}
  return !1;
}
class hu {
  static create() {
    return new hu();
  }
  static use() {
    const i = kg(hu.create).current,
      [o, u] = H.useState(!1);
    return ((i.shouldMount = o), (i.setShouldMount = u), H.useEffect(i.mountEffect, [o]), i);
  }
  constructor() {
    ((this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null));
  }
  mount() {
    return (
      this.mounted || ((this.mounted = l5()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && ((this.didMount = !0), this.mounted.resolve());
  };
  start(...i) {
    this.mount().then(() => this.ref.current?.start(...i));
  }
  stop(...i) {
    this.mount().then(() => this.ref.current?.stop(...i));
  }
  pulsate(...i) {
    this.mount().then(() => this.ref.current?.pulsate(...i));
  }
}
function a5() {
  return hu.use();
}
function l5() {
  let a, i;
  const o = new Promise((u, c) => {
    ((a = u), (i = c));
  });
  return ((o.resolve = a), (o.reject = i), o);
}
function i5(a) {
  const {
      className: i,
      classes: o,
      pulsate: u = !1,
      rippleX: c,
      rippleY: f,
      rippleSize: p,
      in: h,
      onExited: y,
      timeout: g,
    } = a,
    [b, S] = H.useState(!1),
    A = Lt(i, o.ripple, o.rippleVisible, u && o.ripplePulsate),
    j = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c },
    O = Lt(o.child, b && o.childLeaving, u && o.childPulsate);
  return (
    !h && !b && S(!0),
    H.useEffect(() => {
      if (!h && y != null) {
        const T = setTimeout(y, g);
        return () => {
          clearTimeout(T);
        };
      }
    }, [y, h, g]),
    R.jsx('span', { className: A, style: j, children: R.jsx('span', { className: O }) })
  );
}
const On = rn('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Sf = 550,
  r5 = 80,
  o5 = _r`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  u5 = _r`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  s5 = _r`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  c5 = _t('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  f5 = _t(i5, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${On.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${o5};
    animation-duration: ${Sf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  &.${On.ripplePulsate} {
    animation-duration: ${({ theme: a }) => a.transitions.duration.shorter}ms;
  }

  & .${On.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${On.childLeaving} {
    opacity: 0;
    animation-name: ${u5};
    animation-duration: ${Sf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  & .${On.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${s5};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  d5 = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiTouchRipple' }),
      { center: c = !1, classes: f = {}, className: p, ...h } = u,
      [y, g] = H.useState([]),
      b = H.useRef(0),
      S = H.useRef(null);
    H.useEffect(() => {
      S.current && (S.current(), (S.current = null));
    }, [y]);
    const A = H.useRef(!1),
      j = Lg(),
      O = H.useRef(null),
      T = H.useRef(null),
      k = H.useCallback(
        (q) => {
          const { pulsate: N, rippleX: V, rippleY: K, rippleSize: ct, cb: st } = q;
          (g((pt) => [
            ...pt,
            R.jsx(
              f5,
              {
                classes: {
                  ripple: Lt(f.ripple, On.ripple),
                  rippleVisible: Lt(f.rippleVisible, On.rippleVisible),
                  ripplePulsate: Lt(f.ripplePulsate, On.ripplePulsate),
                  child: Lt(f.child, On.child),
                  childLeaving: Lt(f.childLeaving, On.childLeaving),
                  childPulsate: Lt(f.childPulsate, On.childPulsate),
                },
                timeout: Sf,
                pulsate: N,
                rippleX: V,
                rippleY: K,
                rippleSize: ct,
              },
              b.current
            ),
          ]),
            (b.current += 1),
            (S.current = st));
        },
        [f]
      ),
      Y = H.useCallback(
        (q = {}, N = {}, V = () => {}) => {
          const { pulsate: K = !1, center: ct = c || N.pulsate, fakeElement: st = !1 } = N;
          if (q?.type === 'mousedown' && A.current) {
            A.current = !1;
            return;
          }
          q?.type === 'touchstart' && (A.current = !0);
          const pt = st ? null : T.current,
            ft = pt ? pt.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let v, W, X;
          if (ct || q === void 0 || (q.clientX === 0 && q.clientY === 0) || (!q.clientX && !q.touches))
            ((v = Math.round(ft.width / 2)), (W = Math.round(ft.height / 2)));
          else {
            const { clientX: et, clientY: z } = q.touches && q.touches.length > 0 ? q.touches[0] : q;
            ((v = Math.round(et - ft.left)), (W = Math.round(z - ft.top)));
          }
          if (ct) ((X = Math.sqrt((2 * ft.width ** 2 + ft.height ** 2) / 3)), X % 2 === 0 && (X += 1));
          else {
            const et = Math.max(Math.abs((pt ? pt.clientWidth : 0) - v), v) * 2 + 2,
              z = Math.max(Math.abs((pt ? pt.clientHeight : 0) - W), W) * 2 + 2;
            X = Math.sqrt(et ** 2 + z ** 2);
          }
          q?.touches
            ? O.current === null &&
              ((O.current = () => {
                k({ pulsate: K, rippleX: v, rippleY: W, rippleSize: X, cb: V });
              }),
              j.start(r5, () => {
                O.current && (O.current(), (O.current = null));
              }))
            : k({ pulsate: K, rippleX: v, rippleY: W, rippleSize: X, cb: V });
        },
        [c, k, j]
      ),
      P = H.useCallback(() => {
        Y({}, { pulsate: !0 });
      }, [Y]),
      J = H.useCallback(
        (q, N) => {
          if ((j.clear(), q?.type === 'touchend' && O.current)) {
            (O.current(),
              (O.current = null),
              j.start(0, () => {
                J(q, N);
              }));
            return;
          }
          ((O.current = null), g((V) => (V.length > 0 ? V.slice(1) : V)), (S.current = N));
        },
        [j]
      );
    return (
      H.useImperativeHandle(o, () => ({ pulsate: P, start: Y, stop: J }), [P, Y, J]),
      R.jsx(c5, {
        className: Lt(On.root, f.root, p),
        ref: T,
        ...h,
        children: R.jsx(Gf, { component: null, exit: !0, children: y }),
      })
    );
  });
function p5(a) {
  return Qe('MuiButtonBase', a);
}
const h5 = rn('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  m5 = (a) => {
    const { disabled: i, focusVisible: o, focusVisibleClassName: u, classes: c } = a,
      p = on({ root: ['root', i && 'disabled', o && 'focusVisible'] }, p5, c);
    return (o && u && (p.root += ` ${u}`), p);
  },
  g5 = _t('button', { name: 'MuiButtonBase', slot: 'Root' })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${h5.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  Xf = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiButtonBase' }),
      {
        action: c,
        centerRipple: f = !1,
        children: p,
        className: h,
        component: y = 'button',
        disabled: g = !1,
        disableRipple: b = !1,
        disableTouchRipple: S = !1,
        focusRipple: A = !1,
        focusVisibleClassName: j,
        LinkComponent: O = 'a',
        onBlur: T,
        onClick: k,
        onContextMenu: Y,
        onDragLeave: P,
        onFocus: J,
        onFocusVisible: q,
        onKeyDown: N,
        onKeyUp: V,
        onMouseDown: K,
        onMouseLeave: ct,
        onMouseUp: st,
        onTouchEnd: pt,
        onTouchMove: ft,
        onTouchStart: v,
        tabIndex: W = 0,
        TouchRippleProps: X,
        touchRippleRef: et,
        type: z,
        ...F
      } = u,
      I = H.useRef(null),
      it = a5(),
      yt = Si(it.ref, et),
      [x, w] = H.useState(!1);
    (g && x && w(!1),
      H.useImperativeHandle(
        c,
        () => ({
          focusVisible: () => {
            (w(!0), I.current.focus());
          },
        }),
        []
      ));
    const Z = it.shouldMount && !b && !g;
    H.useEffect(() => {
      x && A && !b && it.pulsate();
    }, [b, A, x, it]);
    const tt = ga(it, 'start', K, S),
      nt = ga(it, 'stop', Y, S),
      ot = ga(it, 'stop', P, S),
      bt = ga(it, 'stop', st, S),
      Ut = ga(
        it,
        'stop',
        (gt) => {
          (x && gt.preventDefault(), ct && ct(gt));
        },
        S
      ),
      Rt = ga(it, 'start', v, S),
      he = ga(it, 'stop', pt, S),
      Se = ga(it, 'stop', ft, S),
      Me = ga(
        it,
        'stop',
        (gt) => {
          (pu(gt.target) || w(!1), T && T(gt));
        },
        !1
      ),
      ue = vl((gt) => {
        (I.current || (I.current = gt.currentTarget), pu(gt.target) && (w(!0), q && q(gt)), J && J(gt));
      }),
      me = () => {
        const gt = I.current;
        return y && y !== 'button' && !(gt.tagName === 'A' && gt.href);
      },
      Et = vl((gt) => {
        (A &&
          !gt.repeat &&
          x &&
          gt.key === ' ' &&
          it.stop(gt, () => {
            it.start(gt);
          }),
          gt.target === gt.currentTarget && me() && gt.key === ' ' && gt.preventDefault(),
          N && N(gt),
          gt.target === gt.currentTarget && me() && gt.key === 'Enter' && !g && (gt.preventDefault(), k && k(gt)));
      }),
      se = vl((gt) => {
        (A &&
          gt.key === ' ' &&
          x &&
          !gt.defaultPrevented &&
          it.stop(gt, () => {
            it.pulsate(gt);
          }),
          V && V(gt),
          k && gt.target === gt.currentTarget && me() && gt.key === ' ' && !gt.defaultPrevented && k(gt));
      });
    let Nt = y;
    Nt === 'button' && (F.href || F.to) && (Nt = O);
    const le = {};
    Nt === 'button'
      ? ((le.type = z === void 0 ? 'button' : z), (le.disabled = g))
      : (!F.href && !F.to && (le.role = 'button'), g && (le['aria-disabled'] = g));
    const $e = Si(o, I),
      Ze = {
        ...u,
        centerRipple: f,
        component: y,
        disabled: g,
        disableRipple: b,
        disableTouchRipple: S,
        focusRipple: A,
        tabIndex: W,
        focusVisible: x,
      },
      kn = m5(Ze);
    return R.jsxs(g5, {
      as: Nt,
      className: Lt(kn.root, h),
      ownerState: Ze,
      onBlur: Me,
      onClick: k,
      onContextMenu: nt,
      onFocus: ue,
      onKeyDown: Et,
      onKeyUp: se,
      onMouseDown: tt,
      onMouseLeave: Ut,
      onMouseUp: bt,
      onDragLeave: ot,
      onTouchEnd: he,
      onTouchMove: Se,
      onTouchStart: Rt,
      ref: $e,
      tabIndex: g ? -1 : W,
      type: z,
      ...le,
      ...F,
      children: [p, Z ? R.jsx(d5, { ref: yt, center: f, ...X }) : null],
    });
  });
function ga(a, i, o, u = !1) {
  return vl((c) => (o && o(c), u || a[i](c), !0));
}
function y5(a) {
  return typeof a.main == 'string';
}
function v5(a, i = []) {
  if (!y5(a)) return !1;
  for (const o of i) if (!a.hasOwnProperty(o) || typeof a[o] != 'string') return !1;
  return !0;
}
function Jn(a = []) {
  return ([, i]) => i && v5(i, a);
}
function b5(a) {
  return Qe('MuiCircularProgress', a);
}
rn('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'track',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const Un = 44,
  xf = _r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Cf = _r`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  S5 =
    typeof xf != 'string'
      ? _f`
        animation: ${xf} 1.4s linear infinite;
      `
      : null,
  x5 =
    typeof Cf != 'string'
      ? _f`
        animation: ${Cf} 1.4s ease-in-out infinite;
      `
      : null,
  C5 = (a) => {
    const { classes: i, variant: o, color: u, disableShrink: c } = a,
      f = {
        root: ['root', o, `color${mt(u)}`],
        svg: ['svg'],
        track: ['track'],
        circle: ['circle', `circle${mt(o)}`, c && 'circleDisableShrink'],
      };
    return on(f, b5, i);
  },
  T5 = _t('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[o.variant], i[`color${mt(o.color)}`]];
    },
  })(
    ve(({ theme: a }) => ({
      display: 'inline-block',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('transform') } },
        { props: { variant: 'indeterminate' }, style: S5 || { animation: `${xf} 1.4s linear infinite` } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
      ],
    }))
  ),
  E5 = _t('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  z5 = _t('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.circle, i[`circle${mt(o.variant)}`], o.disableShrink && i.circleDisableShrink];
    },
  })(
    ve(({ theme: a }) => ({
      stroke: 'currentColor',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('stroke-dashoffset') } },
        { props: { variant: 'indeterminate' }, style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 } },
        {
          props: ({ ownerState: i }) => i.variant === 'indeterminate' && !i.disableShrink,
          style: x5 || { animation: `${Cf} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  A5 = _t('circle', { name: 'MuiCircularProgress', slot: 'Track' })(
    ve(({ theme: a }) => ({ stroke: 'currentColor', opacity: (a.vars || a).palette.action.activatedOpacity }))
  ),
  Vg = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiCircularProgress' }),
      {
        className: c,
        color: f = 'primary',
        disableShrink: p = !1,
        enableTrackSlot: h = !1,
        size: y = 40,
        style: g,
        thickness: b = 3.6,
        value: S = 0,
        variant: A = 'indeterminate',
        ...j
      } = u,
      O = { ...u, color: f, disableShrink: p, size: y, thickness: b, value: S, variant: A, enableTrackSlot: h },
      T = C5(O),
      k = {},
      Y = {},
      P = {};
    if (A === 'determinate') {
      const J = 2 * Math.PI * ((Un - b) / 2);
      ((k.strokeDasharray = J.toFixed(3)),
        (P['aria-valuenow'] = Math.round(S)),
        (k.strokeDashoffset = `${(((100 - S) / 100) * J).toFixed(3)}px`),
        (Y.transform = 'rotate(-90deg)'));
    }
    return R.jsx(T5, {
      className: Lt(T.root, c),
      style: { width: y, height: y, ...Y, ...g },
      ownerState: O,
      ref: o,
      role: 'progressbar',
      ...P,
      ...j,
      children: R.jsxs(E5, {
        className: T.svg,
        ownerState: O,
        viewBox: `${Un / 2} ${Un / 2} ${Un} ${Un}`,
        children: [
          h
            ? R.jsx(A5, {
                className: T.track,
                ownerState: O,
                cx: Un,
                cy: Un,
                r: (Un - b) / 2,
                fill: 'none',
                strokeWidth: b,
                'aria-hidden': 'true',
              })
            : null,
          R.jsx(z5, {
            className: T.circle,
            style: k,
            ownerState: O,
            cx: Un,
            cy: Un,
            r: (Un - b) / 2,
            fill: 'none',
            strokeWidth: b,
          }),
        ],
      }),
    });
  });
function M5(a) {
  return Qe('MuiIconButton', a);
}
const Dm = rn('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper',
  ]),
  O5 = (a) => {
    const { classes: i, disabled: o, color: u, edge: c, size: f, loading: p } = a,
      h = {
        root: [
          'root',
          p && 'loading',
          o && 'disabled',
          u !== 'default' && `color${mt(u)}`,
          c && `edge${mt(c)}`,
          `size${mt(f)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return on(h, M5, i);
  },
  R5 = _t(Xf, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        o.loading && i.loading,
        o.color !== 'default' && i[`color${mt(o.color)}`],
        o.edge && i[`edge${mt(o.edge)}`],
        i[`size${mt(o.size)}`],
      ];
    },
  })(
    ve(({ theme: a }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: a.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (a.vars || a).palette.action.active,
      transition: a.transitions.create('background-color', { duration: a.transitions.duration.shortest }),
      variants: [
        {
          props: (i) => !i.disableRipple,
          style: {
            '--IconButton-hoverBg': a.alpha(
              (a.vars || a).palette.action.active,
              (a.vars || a).palette.action.hoverOpacity
            ),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      ],
    })),
    ve(({ theme: a }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({
            props: { color: i },
            style: {
              '--IconButton-hoverBg': a.alpha((a.vars || a).palette[i].main, (a.vars || a).palette.action.hoverOpacity),
            },
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: a.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: a.typography.pxToRem(28) } },
      ],
      [`&.${Dm.disabled}`]: { backgroundColor: 'transparent', color: (a.vars || a).palette.action.disabled },
      [`&.${Dm.loading}`]: { color: 'transparent' },
    }))
  ),
  w5 = _t('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (a.vars || a).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  vi = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiIconButton' }),
      {
        edge: c = !1,
        children: f,
        className: p,
        color: h = 'default',
        disabled: y = !1,
        disableFocusRipple: g = !1,
        size: b = 'medium',
        id: S,
        loading: A = null,
        loadingIndicator: j,
        ...O
      } = u,
      T = Eg(S),
      k = j ?? R.jsx(Vg, { 'aria-labelledby': T, color: 'inherit', size: 16 }),
      Y = { ...u, edge: c, color: h, disabled: y, disableFocusRipple: g, loading: A, loadingIndicator: k, size: b },
      P = O5(Y);
    return R.jsxs(R5, {
      id: A ? T : S,
      className: Lt(P.root, p),
      centerRipple: !0,
      focusRipple: !g,
      disabled: y || A,
      ref: o,
      ...O,
      ownerState: Y,
      children: [
        typeof A == 'boolean' &&
          R.jsx('span', {
            className: P.loadingWrapper,
            style: { display: 'contents' },
            children: R.jsx(w5, { className: P.loadingIndicator, ownerState: Y, children: A && k }),
          }),
        f,
      ],
    });
  });
function B5(a) {
  return Qe('MuiTypography', a);
}
rn('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const _5 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  D5 = kS(),
  j5 = (a) => {
    const { align: i, gutterBottom: o, noWrap: u, paragraph: c, variant: f, classes: p } = a,
      h = {
        root: [
          'root',
          f,
          a.align !== 'inherit' && `align${mt(i)}`,
          o && 'gutterBottom',
          u && 'noWrap',
          c && 'paragraph',
        ],
      };
    return on(h, B5, p);
  },
  N5 = _t('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        o.variant && i[o.variant],
        o.align !== 'inherit' && i[`align${mt(o.align)}`],
        o.noWrap && i.noWrap,
        o.gutterBottom && i.gutterBottom,
        o.paragraph && i.paragraph,
      ];
    },
  })(
    ve(({ theme: a }) => ({
      margin: 0,
      variants: [
        { props: { variant: 'inherit' }, style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' } },
        ...Object.entries(a.typography)
          .filter(([i, o]) => i !== 'inherit' && o && typeof o == 'object')
          .map(([i, o]) => ({ props: { variant: i }, style: o })),
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
        ...Object.entries(a.palette?.text || {})
          .filter(([, i]) => typeof i == 'string')
          .map(([i]) => ({ props: { color: `text${mt(i)}` }, style: { color: (a.vars || a).palette.text[i] } })),
        { props: ({ ownerState: i }) => i.align !== 'inherit', style: { textAlign: 'var(--Typography-textAlign)' } },
        {
          props: ({ ownerState: i }) => i.noWrap,
          style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
        },
        { props: ({ ownerState: i }) => i.gutterBottom, style: { marginBottom: '0.35em' } },
        { props: ({ ownerState: i }) => i.paragraph, style: { marginBottom: 16 } },
      ],
    }))
  ),
  jm = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  an = H.forwardRef(function (i, o) {
    const { color: u, ...c } = un({ props: i, name: 'MuiTypography' }),
      f = !_5[u],
      p = D5({ ...c, ...(f && { color: u }) }),
      {
        align: h = 'inherit',
        className: y,
        component: g,
        gutterBottom: b = !1,
        noWrap: S = !1,
        paragraph: A = !1,
        variant: j = 'body1',
        variantMapping: O = jm,
        ...T
      } = p,
      k = {
        ...p,
        align: h,
        color: u,
        className: y,
        component: g,
        gutterBottom: b,
        noWrap: S,
        paragraph: A,
        variant: j,
        variantMapping: O,
      },
      Y = g || (A ? 'p' : O[j] || jm[j]) || 'span',
      P = j5(k);
    return R.jsx(N5, {
      as: Y,
      ref: o,
      className: Lt(P.root, y),
      ...T,
      ownerState: k,
      style: { ...(h !== 'inherit' && { '--Typography-textAlign': h }), ...T.style },
    });
  });
function U5(a) {
  return Qe('MuiAppBar', a);
}
rn('MuiAppBar', [
  'root',
  'positionFixed',
  'positionAbsolute',
  'positionSticky',
  'positionStatic',
  'positionRelative',
  'colorDefault',
  'colorPrimary',
  'colorSecondary',
  'colorInherit',
  'colorTransparent',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
]);
const H5 = (a) => {
    const { color: i, position: o, classes: u } = a,
      c = { root: ['root', `color${mt(i)}`, `position${mt(o)}`] };
    return on(c, U5, u);
  },
  Nm = (a, i) => (a ? `${a?.replace(')', '')}, ${i})` : i),
  k5 = _t(Gg, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[`position${mt(o.position)}`], i[`color${mt(o.color)}`]];
    },
  })(
    ve(({ theme: a }) => ({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      flexShrink: 0,
      variants: [
        {
          props: { position: 'fixed' },
          style: {
            position: 'fixed',
            zIndex: (a.vars || a).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
            '@media print': { position: 'absolute' },
          },
        },
        {
          props: { position: 'absolute' },
          style: { position: 'absolute', zIndex: (a.vars || a).zIndex.appBar, top: 0, left: 'auto', right: 0 },
        },
        {
          props: { position: 'sticky' },
          style: { position: 'sticky', zIndex: (a.vars || a).zIndex.appBar, top: 0, left: 'auto', right: 0 },
        },
        { props: { position: 'static' }, style: { position: 'static' } },
        { props: { position: 'relative' }, style: { position: 'relative' } },
        { props: { color: 'inherit' }, style: { '--AppBar-color': 'inherit' } },
        {
          props: { color: 'default' },
          style: {
            '--AppBar-background': a.vars ? a.vars.palette.AppBar.defaultBg : a.palette.grey[100],
            '--AppBar-color': a.vars ? a.vars.palette.text.primary : a.palette.getContrastText(a.palette.grey[100]),
            ...a.applyStyles('dark', {
              '--AppBar-background': a.vars ? a.vars.palette.AppBar.defaultBg : a.palette.grey[900],
              '--AppBar-color': a.vars ? a.vars.palette.text.primary : a.palette.getContrastText(a.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(a.palette)
          .filter(Jn(['contrastText']))
          .map(([i]) => ({
            props: { color: i },
            style: {
              '--AppBar-background': (a.vars ?? a).palette[i].main,
              '--AppBar-color': (a.vars ?? a).palette[i].contrastText,
            },
          })),
        {
          props: (i) => i.enableColorOnDark === !0 && !['inherit', 'transparent'].includes(i.color),
          style: { backgroundColor: 'var(--AppBar-background)', color: 'var(--AppBar-color)' },
        },
        {
          props: (i) => i.enableColorOnDark === !1 && !['inherit', 'transparent'].includes(i.color),
          style: {
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...a.applyStyles('dark', {
              backgroundColor: a.vars ? Nm(a.vars.palette.AppBar.darkBg, 'var(--AppBar-background)') : null,
              color: a.vars ? Nm(a.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
            }),
          },
        },
        {
          props: { color: 'transparent' },
          style: {
            '--AppBar-background': 'transparent',
            '--AppBar-color': 'inherit',
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...a.applyStyles('dark', { backgroundImage: 'none' }),
          },
        },
      ],
    }))
  ),
  L5 = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiAppBar' }),
      { className: c, color: f = 'primary', enableColorOnDark: p = !1, position: h = 'fixed', ...y } = u,
      g = { ...u, color: f, position: h, enableColorOnDark: p },
      b = H5(g);
    return R.jsx(k5, {
      square: !0,
      component: 'header',
      ownerState: g,
      elevation: 4,
      className: Lt(b.root, c, h === 'fixed' && 'mui-fixed'),
      ref: o,
      ...y,
    });
  });
function Xa(a) {
  const { elementType: i, externalSlotProps: o, ownerState: u, skipResolvingSlotProps: c = !1, ...f } = a,
    p = c ? {} : Yg(o, u),
    { props: h, internalRef: y } = qg({ ...f, externalSlotProps: p }),
    g = Si(y, p?.ref, a.additionalProps?.ref);
  return $g(i, { ...h, ref: g }, u);
}
const $5 = H.createContext(void 0);
function Y5() {
  return H.useContext($5);
}
const q5 = rn('MuiBox', ['root']),
  G5 = _g(),
  Tt = C2({ themeId: zf, defaultTheme: G5, defaultClassName: q5.root, generateClassName: mg.generate });
function V5(a) {
  return Qe('MuiButton', a);
}
const dl = rn('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd',
  ]),
  X5 = H.createContext({}),
  Q5 = H.createContext(void 0),
  Z5 = (a) => {
    const {
        color: i,
        disableElevation: o,
        fullWidth: u,
        size: c,
        variant: f,
        loading: p,
        loadingPosition: h,
        classes: y,
      } = a,
      g = {
        root: [
          'root',
          p && 'loading',
          f,
          `${f}${mt(i)}`,
          `size${mt(c)}`,
          `${f}Size${mt(c)}`,
          `color${mt(i)}`,
          o && 'disableElevation',
          u && 'fullWidth',
          p && `loadingPosition${mt(h)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${mt(c)}`],
        endIcon: ['icon', 'endIcon', `iconSize${mt(c)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      b = on(g, V5, y);
    return { ...y, ...b };
  },
  Xg = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  K5 = _t(Xf, {
    shouldForwardProp: (a) => Yf(a) || a === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        i[o.variant],
        i[`${o.variant}${mt(o.color)}`],
        i[`size${mt(o.size)}`],
        i[`${o.variant}Size${mt(o.size)}`],
        o.color === 'inherit' && i.colorInherit,
        o.disableElevation && i.disableElevation,
        o.fullWidth && i.fullWidth,
        o.loading && i.loading,
      ];
    },
  })(
    ve(({ theme: a }) => {
      const i = a.palette.mode === 'light' ? a.palette.grey[300] : a.palette.grey[800],
        o = a.palette.mode === 'light' ? a.palette.grey.A100 : a.palette.grey[700];
      return {
        ...a.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (a.vars || a).shape.borderRadius,
        transition: a.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
          duration: a.transitions.duration.short,
        }),
        '&:hover': { textDecoration: 'none' },
        [`&.${dl.disabled}`]: { color: (a.vars || a).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (a.vars || a).shadows[2],
              '&:hover': {
                boxShadow: (a.vars || a).shadows[4],
                '@media (hover: none)': { boxShadow: (a.vars || a).shadows[2] },
              },
              '&:active': { boxShadow: (a.vars || a).shadows[8] },
              [`&.${dl.focusVisible}`]: { boxShadow: (a.vars || a).shadows[6] },
              [`&.${dl.disabled}`]: {
                color: (a.vars || a).palette.action.disabled,
                boxShadow: (a.vars || a).shadows[0],
                backgroundColor: (a.vars || a).palette.action.disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${dl.disabled}`]: { border: `1px solid ${(a.vars || a).palette.action.disabledBackground}` },
            },
          },
          {
            props: { variant: 'text' },
            style: { padding: '6px 8px', color: 'var(--variant-textColor)', backgroundColor: 'var(--variant-textBg)' },
          },
          ...Object.entries(a.palette)
            .filter(Jn())
            .map(([u]) => ({
              props: { color: u },
              style: {
                '--variant-textColor': (a.vars || a).palette[u].main,
                '--variant-outlinedColor': (a.vars || a).palette[u].main,
                '--variant-outlinedBorder': a.alpha((a.vars || a).palette[u].main, 0.5),
                '--variant-containedColor': (a.vars || a).palette[u].contrastText,
                '--variant-containedBg': (a.vars || a).palette[u].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (a.vars || a).palette[u].dark,
                    '--variant-textBg': a.alpha(
                      (a.vars || a).palette[u].main,
                      (a.vars || a).palette.action.hoverOpacity
                    ),
                    '--variant-outlinedBorder': (a.vars || a).palette[u].main,
                    '--variant-outlinedBg': a.alpha(
                      (a.vars || a).palette[u].main,
                      (a.vars || a).palette.action.hoverOpacity
                    ),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': a.vars ? a.vars.palette.Button.inheritContainedBg : i,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': a.vars ? a.vars.palette.Button.inheritContainedHoverBg : o,
                  '--variant-textBg': a.alpha(
                    (a.vars || a).palette.text.primary,
                    (a.vars || a).palette.action.hoverOpacity
                  ),
                  '--variant-outlinedBg': a.alpha(
                    (a.vars || a).palette.text.primary,
                    (a.vars || a).palette.action.hoverOpacity
                  ),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${dl.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${dl.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: a.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: a.transitions.duration.short,
              }),
              [`&.${dl.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    })
  ),
  J5 = _t('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.startIcon, o.loading && i.startIconLoadingStart, i[`iconSize${mt(o.size)}`]];
    },
  })(({ theme: a }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: 'small' }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: 'start', loading: !0 },
        style: {
          transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: 'start', loading: !0, fullWidth: !0 }, style: { marginRight: -8 } },
      ...Xg,
    ],
  })),
  F5 = _t('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.endIcon, o.loading && i.endIconLoadingEnd, i[`iconSize${mt(o.size)}`]];
    },
  })(({ theme: a }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: 'small' }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: 'end', loading: !0 },
        style: {
          transition: a.transitions.create(['opacity'], { duration: a.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: 'end', loading: !0, fullWidth: !0 }, style: { marginLeft: -8 } },
      ...Xg,
    ],
  })),
  W5 = _t('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    variants: [
      { props: { loading: !0 }, style: { display: 'flex' } },
      { props: { loadingPosition: 'start' }, style: { left: 14 } },
      { props: { loadingPosition: 'start', size: 'small' }, style: { left: 10 } },
      { props: { variant: 'text', loadingPosition: 'start' }, style: { left: 6 } },
      {
        props: { loadingPosition: 'center' },
        style: { left: '50%', transform: 'translate(-50%)', color: (a.vars || a).palette.action.disabled },
      },
      { props: { loadingPosition: 'end' }, style: { right: 14 } },
      { props: { loadingPosition: 'end', size: 'small' }, style: { right: 10 } },
      { props: { variant: 'text', loadingPosition: 'end' }, style: { right: 6 } },
      { props: { loadingPosition: 'start', fullWidth: !0 }, style: { position: 'relative', left: -10 } },
      { props: { loadingPosition: 'end', fullWidth: !0 }, style: { position: 'relative', right: -10 } },
    ],
  })),
  Um = _t('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  xi = H.forwardRef(function (i, o) {
    const u = H.useContext(X5),
      c = H.useContext(Q5),
      f = Rr(u, i),
      p = un({ props: f, name: 'MuiButton' }),
      {
        children: h,
        color: y = 'primary',
        component: g = 'button',
        className: b,
        disabled: S = !1,
        disableElevation: A = !1,
        disableFocusRipple: j = !1,
        endIcon: O,
        focusVisibleClassName: T,
        fullWidth: k = !1,
        id: Y,
        loading: P = null,
        loadingIndicator: J,
        loadingPosition: q = 'center',
        size: N = 'medium',
        startIcon: V,
        type: K,
        variant: ct = 'text',
        ...st
      } = p,
      pt = Eg(Y),
      ft = J ?? R.jsx(Vg, { 'aria-labelledby': pt, color: 'inherit', size: 16 }),
      v = {
        ...p,
        color: y,
        component: g,
        disabled: S,
        disableElevation: A,
        disableFocusRipple: j,
        fullWidth: k,
        loading: P,
        loadingIndicator: ft,
        loadingPosition: q,
        size: N,
        type: K,
        variant: ct,
      },
      W = Z5(v),
      X =
        (V || (P && q === 'start')) &&
        R.jsx(J5, {
          className: W.startIcon,
          ownerState: v,
          children: V || R.jsx(Um, { className: W.loadingIconPlaceholder, ownerState: v }),
        }),
      et =
        (O || (P && q === 'end')) &&
        R.jsx(F5, {
          className: W.endIcon,
          ownerState: v,
          children: O || R.jsx(Um, { className: W.loadingIconPlaceholder, ownerState: v }),
        }),
      z = c || '',
      F =
        typeof P == 'boolean'
          ? R.jsx('span', {
              className: W.loadingWrapper,
              style: { display: 'contents' },
              children: P && R.jsx(W5, { className: W.loadingIndicator, ownerState: v, children: ft }),
            })
          : null;
    return R.jsxs(K5, {
      ownerState: v,
      className: Lt(u.className, W.root, b, z),
      component: g,
      disabled: S || P,
      focusRipple: !j,
      focusVisibleClassName: Lt(W.focusVisible, T),
      ref: o,
      type: K,
      id: P ? pt : Y,
      ...st,
      classes: W,
      children: [X, q !== 'end' && F, h, q === 'end' && F, et],
    });
  });
function P5(a) {
  return Qe('PrivateSwitchBase', a);
}
rn('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
const I5 = (a) => {
    const { classes: i, checked: o, disabled: u, edge: c } = a,
      f = { root: ['root', o && 'checked', u && 'disabled', c && `edge${mt(c)}`], input: ['input'] };
    return on(f, P5, i);
  },
  tx = _t(Xf, { name: 'MuiSwitchBase' })({
    padding: 9,
    borderRadius: '50%',
    variants: [
      { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
      { props: ({ edge: a, ownerState: i }) => a === 'start' && i.size !== 'small', style: { marginLeft: -12 } },
      { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      { props: ({ edge: a, ownerState: i }) => a === 'end' && i.size !== 'small', style: { marginRight: -12 } },
    ],
  }),
  ex = _t('input', { name: 'MuiSwitchBase', shouldForwardProp: Yf })({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  nx = H.forwardRef(function (i, o) {
    const {
        autoFocus: u,
        checked: c,
        checkedIcon: f,
        defaultChecked: p,
        disabled: h,
        disableFocusRipple: y = !1,
        edge: g = !1,
        icon: b,
        id: S,
        inputProps: A,
        inputRef: j,
        name: O,
        onBlur: T,
        onChange: k,
        onFocus: Y,
        readOnly: P,
        required: J = !1,
        tabIndex: q,
        type: N,
        value: V,
        slots: K = {},
        slotProps: ct = {},
        ...st
      } = i,
      [pt, ft] = Ng({ controlled: c, default: !!p, name: 'SwitchBase', state: 'checked' }),
      v = Y5(),
      W = (nt) => {
        (Y && Y(nt), v && v.onFocus && v.onFocus(nt));
      },
      X = (nt) => {
        (T && T(nt), v && v.onBlur && v.onBlur(nt));
      },
      et = (nt) => {
        if (nt.nativeEvent.defaultPrevented) return;
        const ot = nt.target.checked;
        (ft(ot), k && k(nt, ot));
      };
    let z = h;
    v && typeof z > 'u' && (z = v.disabled);
    const F = N === 'checkbox' || N === 'radio',
      I = { ...i, checked: pt, disabled: z, disableFocusRipple: y, edge: g },
      it = I5(I),
      yt = { slots: K, slotProps: { input: A, ...ct } },
      [x, w] = Qa('root', {
        ref: o,
        elementType: tx,
        className: it.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...yt, component: 'span', ...st },
        getSlotProps: (nt) => ({
          ...nt,
          onFocus: (ot) => {
            (nt.onFocus?.(ot), W(ot));
          },
          onBlur: (ot) => {
            (nt.onBlur?.(ot), X(ot));
          },
        }),
        ownerState: I,
        additionalProps: { centerRipple: !0, focusRipple: !y, disabled: z, role: void 0, tabIndex: null },
      }),
      [Z, tt] = Qa('input', {
        ref: j,
        elementType: ex,
        className: it.input,
        externalForwardedProps: yt,
        getSlotProps: (nt) => ({
          ...nt,
          onChange: (ot) => {
            (nt.onChange?.(ot), et(ot));
          },
        }),
        ownerState: I,
        additionalProps: {
          autoFocus: u,
          checked: c,
          defaultChecked: p,
          disabled: z,
          id: F ? S : void 0,
          name: O,
          readOnly: P,
          required: J,
          tabIndex: q,
          type: N,
          ...(N === 'checkbox' && V === void 0 ? {} : { value: V }),
        },
      });
    return R.jsxs(x, { ...w, children: [R.jsx(Z, { ...tt }), pt ? f : b] });
  }),
  Hm = I2({
    createStyledComponent: _t('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (a, i) => {
        const { ownerState: o } = a;
        return [
          i.root,
          i[`maxWidth${mt(String(o.maxWidth))}`],
          o.fixed && i.fixed,
          o.disableGutters && i.disableGutters,
        ];
      },
    }),
    useThemeProps: (a) => un({ props: a, name: 'MuiContainer' }),
  }),
  ax = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  };
function lx(a, i, o = (u, c) => u === c) {
  return a.length === i.length && a.every((u, c) => o(u, i[c]));
}
const ix = 2;
function pi(a, i, o, u, c) {
  return o === 1 ? Math.min(a + i, c) : Math.max(a - i, u);
}
function Qg(a, i) {
  return a - i;
}
function km(a, i) {
  const { index: o } =
    a.reduce((u, c, f) => {
      const p = Math.abs(i - c);
      return u === null || p < u.distance || p === u.distance ? { distance: p, index: f } : u;
    }, null) ?? {};
  return o;
}
function Po(a, i) {
  if (i.current !== void 0 && a.changedTouches) {
    const o = a;
    for (let u = 0; u < o.changedTouches.length; u += 1) {
      const c = o.changedTouches[u];
      if (c.identifier === i.current) return { x: c.clientX, y: c.clientY };
    }
    return !1;
  }
  return { x: a.clientX, y: a.clientY };
}
function mu(a, i, o) {
  return ((a - i) * 100) / (o - i);
}
function rx(a, i, o) {
  return (o - i) * a + i;
}
function ox(a) {
  if (Math.abs(a) < 1) {
    const o = a.toExponential().split('e-'),
      u = o[0].split('.')[1];
    return (u ? u.length : 0) + parseInt(o[1], 10);
  }
  const i = a.toString().split('.')[1];
  return i ? i.length : 0;
}
function ux(a, i, o) {
  const u = Math.round((a - o) / i) * i + o;
  return Number(u.toFixed(ox(i)));
}
function Lm({ values: a, newValue: i, index: o }) {
  const u = a.slice();
  return ((u[o] = i), u.sort(Qg));
}
function Io({ sliderRef: a, activeIndex: i, setActive: o }) {
  const u = ru(a.current);
  ((!a.current?.contains(u.activeElement) || Number(u?.activeElement?.getAttribute('data-index')) !== i) &&
    a.current?.querySelector(`[type="range"][data-index="${i}"]`).focus(),
    o && o(i));
}
function tu(a, i) {
  return typeof a == 'number' && typeof i == 'number'
    ? a === i
    : typeof a == 'object' && typeof i == 'object'
      ? lx(a, i)
      : !1;
}
const sx = {
    horizontal: { offset: (a) => ({ left: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    'horizontal-reverse': { offset: (a) => ({ right: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    vertical: { offset: (a) => ({ bottom: `${a}%` }), leap: (a) => ({ height: `${a}%` }) },
  },
  cx = (a) => a;
let eu;
function $m() {
  return (
    eu === void 0 &&
      (typeof CSS < 'u' && typeof CSS.supports == 'function' ? (eu = CSS.supports('touch-action', 'none')) : (eu = !0)),
    eu
  );
}
function fx(a) {
  const {
      'aria-labelledby': i,
      defaultValue: o,
      disabled: u = !1,
      disableSwap: c = !1,
      isRtl: f = !1,
      marks: p = !1,
      max: h = 100,
      min: y = 0,
      name: g,
      onChange: b,
      onChangeCommitted: S,
      orientation: A = 'horizontal',
      rootRef: j,
      scale: O = cx,
      step: T = 1,
      shiftStep: k = 10,
      tabIndex: Y,
      value: P,
    } = a,
    J = H.useRef(void 0),
    [q, N] = H.useState(-1),
    [V, K] = H.useState(-1),
    [ct, st] = H.useState(!1),
    pt = H.useRef(0),
    ft = H.useRef(null),
    [v, W] = Ng({ controlled: P, default: o ?? y, name: 'Slider' }),
    X =
      b &&
      ((lt, at, xt) => {
        const At = lt.nativeEvent || lt,
          Dt = new At.constructor(At.type, At);
        (Object.defineProperty(Dt, 'target', { writable: !0, value: { value: at, name: g } }),
          (ft.current = at),
          b(Dt, at, xt));
      }),
    et = Array.isArray(v);
  let z = et ? v.slice().sort(Qg) : [v];
  z = z.map((lt) => (lt == null ? y : hi(lt, y, h)));
  const F =
      p === !0 && T !== null
        ? [...Array(Math.floor((h - y) / T) + 1)].map((lt, at) => ({ value: y + T * at }))
        : p || [],
    I = F.map((lt) => lt.value),
    [it, yt] = H.useState(-1),
    x = H.useRef(null),
    w = Si(j, x),
    Z = (lt) => (at) => {
      const xt = Number(at.currentTarget.getAttribute('data-index'));
      (pu(at.target) && yt(xt), K(xt), lt?.onFocus?.(at));
    },
    tt = (lt) => (at) => {
      (pu(at.target) || yt(-1), K(-1), lt?.onBlur?.(at));
    },
    nt = (lt, at) => {
      const xt = Number(lt.currentTarget.getAttribute('data-index')),
        At = z[xt],
        Dt = I.indexOf(At);
      let zt = at;
      if (F && T == null) {
        const Ye = I[I.length - 1];
        zt >= Ye ? (zt = Ye) : zt <= I[0] ? (zt = I[0]) : (zt = zt < At ? I[Dt - 1] : I[Dt + 1]);
      }
      if (((zt = hi(zt, y, h)), et)) {
        c && (zt = hi(zt, z[xt - 1] || -1 / 0, z[xt + 1] || 1 / 0));
        const Ye = zt;
        zt = Lm({ values: z, newValue: zt, index: xt });
        let Ke = xt;
        (c || (Ke = zt.indexOf(Ye)), Io({ sliderRef: x, activeIndex: Ke }));
      }
      (W(zt), yt(xt), X && !tu(zt, v) && X(lt, zt, xt), S && S(lt, ft.current ?? zt));
    },
    ot = (lt) => (at) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(at.key)) {
        at.preventDefault();
        const xt = Number(at.currentTarget.getAttribute('data-index')),
          At = z[xt];
        let Dt = null;
        if (T != null) {
          const zt = at.shiftKey ? k : T;
          switch (at.key) {
            case 'ArrowUp':
              Dt = pi(At, zt, 1, y, h);
              break;
            case 'ArrowRight':
              Dt = pi(At, zt, f ? -1 : 1, y, h);
              break;
            case 'ArrowDown':
              Dt = pi(At, zt, -1, y, h);
              break;
            case 'ArrowLeft':
              Dt = pi(At, zt, f ? 1 : -1, y, h);
              break;
            case 'PageUp':
              Dt = pi(At, k, 1, y, h);
              break;
            case 'PageDown':
              Dt = pi(At, k, -1, y, h);
              break;
            case 'Home':
              Dt = y;
              break;
            case 'End':
              Dt = h;
              break;
          }
        } else if (F) {
          const zt = I[I.length - 1],
            Ye = I.indexOf(At),
            Ke = [f ? 'ArrowRight' : 'ArrowLeft', 'ArrowDown', 'PageDown', 'Home'],
            It = [f ? 'ArrowLeft' : 'ArrowRight', 'ArrowUp', 'PageUp', 'End'];
          Ke.includes(at.key)
            ? Ye === 0
              ? (Dt = I[0])
              : (Dt = I[Ye - 1])
            : It.includes(at.key) && (Ye === I.length - 1 ? (Dt = zt) : (Dt = I[Ye + 1]));
        }
        Dt != null && nt(at, Dt);
      }
      lt?.onKeyDown?.(at);
    };
  (Cg(() => {
    u && x.current.contains(document.activeElement) && document.activeElement?.blur();
  }, [u]),
    u && q !== -1 && N(-1),
    u && it !== -1 && yt(-1));
  const bt = (lt) => (at) => {
      (lt.onChange?.(at), nt(at, at.target.valueAsNumber));
    },
    Ut = H.useRef(void 0);
  let Rt = A;
  f && A === 'horizontal' && (Rt += '-reverse');
  const he = ({ finger: lt, move: at = !1 }) => {
      const { current: xt } = x,
        { width: At, height: Dt, bottom: zt, left: Ye } = xt.getBoundingClientRect();
      let Ke;
      (Rt.startsWith('vertical') ? (Ke = (zt - lt.y) / Dt) : (Ke = (lt.x - Ye) / At),
        Rt.includes('-reverse') && (Ke = 1 - Ke));
      let It;
      if (((It = rx(Ke, y, h)), T)) It = ux(It, T, y);
      else {
        const Je = km(I, It);
        It = I[Je];
      }
      It = hi(It, y, h);
      let ie = 0;
      if (et) {
        (at ? (ie = Ut.current) : (ie = km(z, It)), c && (It = hi(It, z[ie - 1] || -1 / 0, z[ie + 1] || 1 / 0)));
        const Je = It;
        ((It = Lm({ values: z, newValue: It, index: ie })), (c && at) || ((ie = It.indexOf(Je)), (Ut.current = ie)));
      }
      return { newValue: It, activeIndex: ie };
    },
    Se = vl((lt) => {
      const at = Po(lt, J);
      if (!at) return;
      if (((pt.current += 1), lt.type === 'mousemove' && lt.buttons === 0)) {
        Me(lt);
        return;
      }
      const { newValue: xt, activeIndex: At } = he({ finger: at, move: !0 });
      (Io({ sliderRef: x, activeIndex: At, setActive: N }),
        W(xt),
        !ct && pt.current > ix && st(!0),
        X && !tu(xt, v) && X(lt, xt, At));
    }),
    Me = vl((lt) => {
      const at = Po(lt, J);
      if ((st(!1), !at)) return;
      const { newValue: xt } = he({ finger: at, move: !0 });
      (N(-1), lt.type === 'touchend' && K(-1), S && S(lt, ft.current ?? xt), (J.current = void 0), me());
    }),
    ue = vl((lt) => {
      if (u) return;
      $m() || lt.preventDefault();
      const at = lt.changedTouches[0];
      at != null && (J.current = at.identifier);
      const xt = Po(lt, J);
      if (xt !== !1) {
        const { newValue: Dt, activeIndex: zt } = he({ finger: xt });
        (Io({ sliderRef: x, activeIndex: zt, setActive: N }), W(Dt), X && !tu(Dt, v) && X(lt, Dt, zt));
      }
      pt.current = 0;
      const At = ru(x.current);
      (At.addEventListener('touchmove', Se, { passive: !0 }), At.addEventListener('touchend', Me, { passive: !0 }));
    }),
    me = H.useCallback(() => {
      const lt = ru(x.current);
      (lt.removeEventListener('mousemove', Se),
        lt.removeEventListener('mouseup', Me),
        lt.removeEventListener('touchmove', Se),
        lt.removeEventListener('touchend', Me));
    }, [Me, Se]);
  (H.useEffect(() => {
    const { current: lt } = x;
    return (
      lt.addEventListener('touchstart', ue, { passive: $m() }),
      () => {
        (lt.removeEventListener('touchstart', ue), me());
      }
    );
  }, [me, ue]),
    H.useEffect(() => {
      u && me();
    }, [u, me]));
  const Et = (lt) => (at) => {
      if ((lt.onMouseDown?.(at), u || at.defaultPrevented || at.button !== 0)) return;
      at.preventDefault();
      const xt = Po(at, J);
      if (xt !== !1) {
        const { newValue: Dt, activeIndex: zt } = he({ finger: xt });
        (Io({ sliderRef: x, activeIndex: zt, setActive: N }), W(Dt), X && !tu(Dt, v) && X(at, Dt, zt));
      }
      pt.current = 0;
      const At = ru(x.current);
      (At.addEventListener('mousemove', Se, { passive: !0 }), At.addEventListener('mouseup', Me));
    },
    se = mu(et ? z[0] : y, y, h),
    Nt = mu(z[z.length - 1], y, h) - se,
    le = (lt = {}) => {
      const at = ou(lt),
        xt = { onMouseDown: Et(at || {}) },
        At = { ...at, ...xt };
      return { ...lt, ref: w, ...At };
    },
    $e = (lt) => (at) => {
      lt.onMouseOver?.(at);
      const xt = Number(at.currentTarget.getAttribute('data-index'));
      K(xt);
    },
    Ze = (lt) => (at) => {
      (lt.onMouseLeave?.(at), K(-1));
    },
    kn = (lt = {}) => {
      const at = ou(lt),
        xt = { onMouseOver: $e(at || {}), onMouseLeave: Ze(at || {}) };
      return { ...lt, ...at, ...xt };
    },
    gt = (lt) => ({ pointerEvents: q !== -1 && q !== lt ? 'none' : void 0 });
  let va;
  return (
    A === 'vertical' && (va = f ? 'vertical-rl' : 'vertical-lr'),
    {
      active: q,
      axis: Rt,
      axisProps: sx,
      dragging: ct,
      focusedThumbIndex: it,
      getHiddenInputProps: (lt = {}) => {
        const at = ou(lt),
          xt = { onChange: bt(at || {}), onFocus: Z(at || {}), onBlur: tt(at || {}), onKeyDown: ot(at || {}) },
          At = { ...at, ...xt };
        return {
          tabIndex: Y,
          'aria-labelledby': i,
          'aria-orientation': A,
          'aria-valuemax': O(h),
          'aria-valuemin': O(y),
          name: g,
          type: 'range',
          min: a.min,
          max: a.max,
          step: a.step === null && a.marks ? 'any' : (a.step ?? void 0),
          disabled: u,
          ...lt,
          ...At,
          style: { ...ax, direction: f ? 'rtl' : 'ltr', width: '100%', height: '100%', writingMode: va },
        };
      },
      getRootProps: le,
      getThumbProps: kn,
      marks: F,
      open: V,
      range: et,
      rootRef: w,
      trackLeap: Nt,
      trackOffset: se,
      values: z,
      getThumbStyle: gt,
    }
  );
}
const dx = (a) => !a || !Tr(a);
function px(a) {
  return Qe('MuiSlider', a);
}
const wn = rn('MuiSlider', [
    'root',
    'active',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'dragging',
    'focusVisible',
    'mark',
    'markActive',
    'marked',
    'markLabel',
    'markLabelActive',
    'rail',
    'sizeSmall',
    'thumb',
    'thumbColorPrimary',
    'thumbColorSecondary',
    'thumbColorError',
    'thumbColorSuccess',
    'thumbColorInfo',
    'thumbColorWarning',
    'track',
    'trackInverted',
    'trackFalse',
    'thumbSizeSmall',
    'valueLabel',
    'valueLabelOpen',
    'valueLabelCircle',
    'valueLabelLabel',
    'vertical',
  ]),
  hx = (a) => {
    const { open: i } = a;
    return { offset: Lt(i && wn.valueLabelOpen), circle: wn.valueLabelCircle, label: wn.valueLabelLabel };
  };
function mx(a) {
  const { children: i, className: o, value: u } = a,
    c = hx(a);
  return i
    ? H.cloneElement(
        i,
        { className: i.props.className },
        R.jsxs(H.Fragment, {
          children: [
            i.props.children,
            R.jsx('span', {
              className: Lt(c.offset, o),
              'aria-hidden': !0,
              children: R.jsx('span', {
                className: c.circle,
                children: R.jsx('span', { className: c.label, children: u }),
              }),
            }),
          ],
        })
      )
    : null;
}
function Ym(a) {
  return a;
}
const gx = _t('span', {
    name: 'MuiSlider',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        i[`color${mt(o.color)}`],
        o.size !== 'medium' && i[`size${mt(o.size)}`],
        o.marked && i.marked,
        o.orientation === 'vertical' && i.vertical,
        o.track === 'inverted' && i.trackInverted,
        o.track === !1 && i.trackFalse,
      ];
    },
  })(
    ve(({ theme: a }) => ({
      borderRadius: 12,
      boxSizing: 'content-box',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      WebkitTapHighlightColor: 'transparent',
      '@media print': { colorAdjust: 'exact' },
      [`&.${wn.disabled}`]: { pointerEvents: 'none', cursor: 'default', color: (a.vars || a).palette.grey[400] },
      [`&.${wn.dragging}`]: { [`& .${wn.thumb}, & .${wn.track}`]: { transition: 'none' } },
      variants: [
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
        {
          props: { orientation: 'horizontal' },
          style: { height: 4, width: '100%', padding: '13px 0', '@media (pointer: coarse)': { padding: '20px 0' } },
        },
        { props: { orientation: 'horizontal', size: 'small' }, style: { height: 2 } },
        { props: { orientation: 'horizontal', marked: !0 }, style: { marginBottom: 20 } },
        {
          props: { orientation: 'vertical' },
          style: { height: '100%', width: 4, padding: '0 13px', '@media (pointer: coarse)': { padding: '0 20px' } },
        },
        { props: { orientation: 'vertical', size: 'small' }, style: { width: 2 } },
        { props: { orientation: 'vertical', marked: !0 }, style: { marginRight: 44 } },
      ],
    }))
  ),
  yx = _t('span', { name: 'MuiSlider', slot: 'Rail' })({
    display: 'block',
    position: 'absolute',
    borderRadius: 'inherit',
    backgroundColor: 'currentColor',
    opacity: 0.38,
    variants: [
      {
        props: { orientation: 'horizontal' },
        style: { width: '100%', height: 'inherit', top: '50%', transform: 'translateY(-50%)' },
      },
      {
        props: { orientation: 'vertical' },
        style: { height: '100%', width: 'inherit', left: '50%', transform: 'translateX(-50%)' },
      },
      { props: { track: 'inverted' }, style: { opacity: 1 } },
    ],
  }),
  vx = _t('span', { name: 'MuiSlider', slot: 'Track' })(
    ve(({ theme: a }) => ({
      display: 'block',
      position: 'absolute',
      borderRadius: 'inherit',
      border: '1px solid currentColor',
      backgroundColor: 'currentColor',
      transition: a.transitions.create(['left', 'width', 'bottom', 'height'], {
        duration: a.transitions.duration.shortest,
      }),
      variants: [
        { props: { size: 'small' }, style: { border: 'none' } },
        {
          props: { orientation: 'horizontal' },
          style: { height: 'inherit', top: '50%', transform: 'translateY(-50%)' },
        },
        { props: { orientation: 'vertical' }, style: { width: 'inherit', left: '50%', transform: 'translateX(-50%)' } },
        { props: { track: !1 }, style: { display: 'none' } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({
            props: { color: i, track: 'inverted' },
            style: {
              ...(a.vars
                ? {
                    backgroundColor: a.vars.palette.Slider[`${i}Track`],
                    borderColor: a.vars.palette.Slider[`${i}Track`],
                  }
                : {
                    backgroundColor: a.lighten(a.palette[i].main, 0.62),
                    borderColor: a.lighten(a.palette[i].main, 0.62),
                    ...a.applyStyles('dark', { backgroundColor: a.darken(a.palette[i].main, 0.5) }),
                    ...a.applyStyles('dark', { borderColor: a.darken(a.palette[i].main, 0.5) }),
                  }),
            },
          })),
      ],
    }))
  ),
  bx = _t('span', {
    name: 'MuiSlider',
    slot: 'Thumb',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.thumb, i[`thumbColor${mt(o.color)}`], o.size !== 'medium' && i[`thumbSize${mt(o.size)}`]];
    },
  })(
    ve(({ theme: a }) => ({
      position: 'absolute',
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: '50%',
      outline: 0,
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: a.transitions.create(['box-shadow', 'left', 'bottom'], { duration: a.transitions.duration.shortest }),
      '&::before': {
        position: 'absolute',
        content: '""',
        borderRadius: 'inherit',
        width: '100%',
        height: '100%',
        boxShadow: (a.vars || a).shadows[2],
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        borderRadius: '50%',
        width: 42,
        height: 42,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      [`&.${wn.disabled}`]: { '&:hover': { boxShadow: 'none' } },
      variants: [
        { props: { size: 'small' }, style: { width: 12, height: 12, '&::before': { boxShadow: 'none' } } },
        { props: { orientation: 'horizontal' }, style: { top: '50%', transform: 'translate(-50%, -50%)' } },
        { props: { orientation: 'vertical' }, style: { left: '50%', transform: 'translate(-50%, 50%)' } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({
            props: { color: i },
            style: {
              [`&:hover, &.${wn.focusVisible}`]: {
                boxShadow: `0px 0px 0px 8px ${a.alpha((a.vars || a).palette[i].main, 0.16)}`,
                '@media (hover: none)': { boxShadow: 'none' },
              },
              [`&.${wn.active}`]: { boxShadow: `0px 0px 0px 14px ${a.alpha((a.vars || a).palette[i].main, 0.16)}` },
            },
          })),
      ],
    }))
  ),
  Sx = _t(mx, { name: 'MuiSlider', slot: 'ValueLabel' })(
    ve(({ theme: a }) => ({
      zIndex: 1,
      whiteSpace: 'nowrap',
      ...a.typography.body2,
      fontWeight: 500,
      transition: a.transitions.create(['transform'], { duration: a.transitions.duration.shortest }),
      position: 'absolute',
      backgroundColor: (a.vars || a).palette.grey[600],
      borderRadius: 2,
      color: (a.vars || a).palette.common.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.25rem 0.75rem',
      variants: [
        {
          props: { orientation: 'horizontal' },
          style: {
            transform: 'translateY(-100%) scale(0)',
            top: '-10px',
            transformOrigin: 'bottom center',
            '&::before': {
              position: 'absolute',
              content: '""',
              width: 8,
              height: 8,
              transform: 'translate(-50%, 50%) rotate(45deg)',
              backgroundColor: 'inherit',
              bottom: 0,
              left: '50%',
            },
            [`&.${wn.valueLabelOpen}`]: { transform: 'translateY(-100%) scale(1)' },
          },
        },
        {
          props: { orientation: 'vertical' },
          style: {
            transform: 'translateY(-50%) scale(0)',
            right: '30px',
            top: '50%',
            transformOrigin: 'right center',
            '&::before': {
              position: 'absolute',
              content: '""',
              width: 8,
              height: 8,
              transform: 'translate(-50%, -50%) rotate(45deg)',
              backgroundColor: 'inherit',
              right: -8,
              top: '50%',
            },
            [`&.${wn.valueLabelOpen}`]: { transform: 'translateY(-50%) scale(1)' },
          },
        },
        { props: { size: 'small' }, style: { fontSize: a.typography.pxToRem(12), padding: '0.25rem 0.5rem' } },
        { props: { orientation: 'vertical', size: 'small' }, style: { right: '20px' } },
      ],
    }))
  ),
  xx = _t('span', {
    name: 'MuiSlider',
    slot: 'Mark',
    shouldForwardProp: (a) => $f(a) && a !== 'markActive',
    overridesResolver: (a, i) => {
      const { markActive: o } = a;
      return [i.mark, o && i.markActive];
    },
  })(
    ve(({ theme: a }) => ({
      position: 'absolute',
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      variants: [
        { props: { orientation: 'horizontal' }, style: { top: '50%', transform: 'translate(-1px, -50%)' } },
        { props: { orientation: 'vertical' }, style: { left: '50%', transform: 'translate(-50%, 1px)' } },
        { props: { markActive: !0 }, style: { backgroundColor: (a.vars || a).palette.background.paper, opacity: 0.8 } },
      ],
    }))
  ),
  Cx = _t('span', { name: 'MuiSlider', slot: 'MarkLabel', shouldForwardProp: (a) => $f(a) && a !== 'markLabelActive' })(
    ve(({ theme: a }) => ({
      ...a.typography.body2,
      color: (a.vars || a).palette.text.secondary,
      position: 'absolute',
      whiteSpace: 'nowrap',
      variants: [
        {
          props: { orientation: 'horizontal' },
          style: { top: 30, transform: 'translateX(-50%)', '@media (pointer: coarse)': { top: 40 } },
        },
        {
          props: { orientation: 'vertical' },
          style: { left: 36, transform: 'translateY(50%)', '@media (pointer: coarse)': { left: 44 } },
        },
        { props: { markLabelActive: !0 }, style: { color: (a.vars || a).palette.text.primary } },
      ],
    }))
  ),
  Tx = (a) => {
    const { disabled: i, dragging: o, marked: u, orientation: c, track: f, classes: p, color: h, size: y } = a,
      g = {
        root: [
          'root',
          i && 'disabled',
          o && 'dragging',
          u && 'marked',
          c === 'vertical' && 'vertical',
          f === 'inverted' && 'trackInverted',
          f === !1 && 'trackFalse',
          h && `color${mt(h)}`,
          y && `size${mt(y)}`,
        ],
        rail: ['rail'],
        track: ['track'],
        mark: ['mark'],
        markActive: ['markActive'],
        markLabel: ['markLabel'],
        markLabelActive: ['markLabelActive'],
        valueLabel: ['valueLabel'],
        thumb: ['thumb', i && 'disabled', y && `thumbSize${mt(y)}`, h && `thumbColor${mt(h)}`],
        active: ['active'],
        disabled: ['disabled'],
        focusVisible: ['focusVisible'],
      };
    return on(g, px, p);
  },
  Ex = ({ children: a }) => a,
  of = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiSlider' }),
      c = H2(),
      {
        'aria-label': f,
        'aria-valuetext': p,
        'aria-labelledby': h,
        component: y = 'span',
        components: g = {},
        componentsProps: b = {},
        color: S = 'primary',
        classes: A,
        className: j,
        disableSwap: O = !1,
        disabled: T = !1,
        getAriaLabel: k,
        getAriaValueText: Y,
        marks: P = !1,
        max: J = 100,
        min: q = 0,
        name: N,
        onChange: V,
        onChangeCommitted: K,
        orientation: ct = 'horizontal',
        shiftStep: st = 10,
        size: pt = 'medium',
        step: ft = 1,
        scale: v = Ym,
        slotProps: W,
        slots: X,
        tabIndex: et,
        track: z = 'normal',
        value: F,
        valueLabelDisplay: I = 'off',
        valueLabelFormat: it = Ym,
        ...yt
      } = u,
      x = {
        ...u,
        isRtl: c,
        max: J,
        min: q,
        classes: A,
        disabled: T,
        disableSwap: O,
        orientation: ct,
        marks: P,
        color: S,
        size: pt,
        step: ft,
        shiftStep: st,
        scale: v,
        track: z,
        valueLabelDisplay: I,
        valueLabelFormat: it,
      },
      {
        axisProps: w,
        getRootProps: Z,
        getHiddenInputProps: tt,
        getThumbProps: nt,
        open: ot,
        active: bt,
        axis: Ut,
        focusedThumbIndex: Rt,
        range: he,
        dragging: Se,
        marks: Me,
        values: ue,
        trackOffset: me,
        trackLeap: Et,
        getThumbStyle: se,
      } = fx({ ...x, rootRef: o });
    ((x.marked = Me.length > 0 && Me.some((te) => te.label)), (x.dragging = Se), (x.focusedThumbIndex = Rt));
    const Nt = Tx(x),
      le = X?.root ?? g.Root ?? gx,
      $e = X?.rail ?? g.Rail ?? yx,
      Ze = X?.track ?? g.Track ?? vx,
      kn = X?.thumb ?? g.Thumb ?? bx,
      gt = X?.valueLabel ?? g.ValueLabel ?? Sx,
      va = X?.mark ?? g.Mark ?? xx,
      Oe = X?.markLabel ?? g.MarkLabel ?? Cx,
      lt = X?.input ?? g.Input ?? 'input',
      at = W?.root ?? b.root,
      xt = W?.rail ?? b.rail,
      At = W?.track ?? b.track,
      Dt = W?.thumb ?? b.thumb,
      zt = W?.valueLabel ?? b.valueLabel,
      Ye = W?.mark ?? b.mark,
      Ke = W?.markLabel ?? b.markLabel,
      It = W?.input ?? b.input,
      ie = Xa({
        elementType: le,
        getSlotProps: Z,
        externalSlotProps: at,
        externalForwardedProps: yt,
        additionalProps: { ...(dx(le) && { as: y }) },
        ownerState: { ...x, ...at?.ownerState },
        className: [Nt.root, j],
      }),
      Je = Xa({ elementType: $e, externalSlotProps: xt, ownerState: x, className: Nt.rail }),
      qe = Xa({
        elementType: Ze,
        externalSlotProps: At,
        additionalProps: { style: { ...w[Ut].offset(me), ...w[Ut].leap(Et) } },
        ownerState: { ...x, ...At?.ownerState },
        className: Nt.track,
      }),
      Ti = Xa({
        elementType: kn,
        getSlotProps: nt,
        externalSlotProps: Dt,
        ownerState: { ...x, ...Dt?.ownerState },
        className: Nt.thumb,
      }),
      Du = Xa({
        elementType: gt,
        externalSlotProps: zt,
        ownerState: { ...x, ...zt?.ownerState },
        className: Nt.valueLabel,
      }),
      Ei = Xa({ elementType: va, externalSlotProps: Ye, ownerState: x, className: Nt.mark }),
      ba = Xa({ elementType: Oe, externalSlotProps: Ke, ownerState: x, className: Nt.markLabel }),
      Cl = Xa({ elementType: lt, getSlotProps: tt, externalSlotProps: It, ownerState: x });
    return R.jsxs(le, {
      ...ie,
      children: [
        R.jsx($e, { ...Je }),
        R.jsx(Ze, { ...qe }),
        Me.filter((te) => te.value >= q && te.value <= J).map((te, ee) => {
          const Sa = mu(te.value, q, J),
            Ln = w[Ut].offset(Sa);
          let _n;
          return (
            z === !1
              ? (_n = ue.includes(te.value))
              : (_n =
                  (z === 'normal' && (he ? te.value >= ue[0] && te.value <= ue[ue.length - 1] : te.value <= ue[0])) ||
                  (z === 'inverted' && (he ? te.value <= ue[0] || te.value >= ue[ue.length - 1] : te.value >= ue[0]))),
            R.jsxs(
              H.Fragment,
              {
                children: [
                  R.jsx(va, {
                    'data-index': ee,
                    ...Ei,
                    ...(!Tr(va) && { markActive: _n }),
                    style: { ...Ln, ...Ei.style },
                    className: Lt(Ei.className, _n && Nt.markActive),
                  }),
                  te.label != null
                    ? R.jsx(Oe, {
                        'aria-hidden': !0,
                        'data-index': ee,
                        ...ba,
                        ...(!Tr(Oe) && { markLabelActive: _n }),
                        style: { ...Ln, ...ba.style },
                        className: Lt(Nt.markLabel, ba.className, _n && Nt.markLabelActive),
                        children: te.label,
                      })
                    : null,
                ],
              },
              ee
            )
          );
        }),
        ue.map((te, ee) => {
          const Sa = mu(te, q, J),
            Ln = w[Ut].offset(Sa),
            _n = I === 'off' ? Ex : gt;
          return R.jsx(
            _n,
            {
              ...(!Tr(_n) && {
                valueLabelFormat: it,
                valueLabelDisplay: I,
                value: typeof it == 'function' ? it(v(te), ee) : it,
                index: ee,
                open: ot === ee || bt === ee || I === 'on',
                disabled: T,
              }),
              ...Du,
              children: R.jsx(kn, {
                'data-index': ee,
                ...Ti,
                className: Lt(Nt.thumb, Ti.className, bt === ee && Nt.active, Rt === ee && Nt.focusVisible),
                style: { ...Ln, ...se(ee), ...Ti.style },
                children: R.jsx(lt, {
                  'data-index': ee,
                  'aria-label': k ? k(ee) : f,
                  'aria-valuenow': v(te),
                  'aria-labelledby': h,
                  'aria-valuetext': Y ? Y(v(te), ee) : p,
                  value: ue[ee],
                  ...Cl,
                }),
              }),
            },
            ee
          );
        }),
      ],
    });
  }),
  Er = rS({
    createStyledComponent: _t('div', { name: 'MuiStack', slot: 'Root' }),
    useThemeProps: (a) => un({ props: a, name: 'MuiStack' }),
  });
function zx(a) {
  return Qe('MuiSwitch', a);
}
const Ve = rn('MuiSwitch', [
    'root',
    'edgeStart',
    'edgeEnd',
    'switchBase',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
    'checked',
    'disabled',
    'input',
    'thumb',
    'track',
  ]),
  Ax = (a) => {
    const { classes: i, edge: o, size: u, color: c, checked: f, disabled: p } = a,
      h = {
        root: ['root', o && `edge${mt(o)}`, `size${mt(u)}`],
        switchBase: ['switchBase', `color${mt(c)}`, f && 'checked', p && 'disabled'],
        thumb: ['thumb'],
        track: ['track'],
        input: ['input'],
      },
      y = on(h, zx, i);
    return { ...i, ...y };
  },
  Mx = _t('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, o.edge && i[`edge${mt(o.edge)}`], i[`size${mt(o.size)}`]];
    },
  })({
    display: 'inline-flex',
    width: 58,
    height: 38,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: 'middle',
    '@media print': { colorAdjust: 'exact' },
    variants: [
      { props: { edge: 'start' }, style: { marginLeft: -8 } },
      { props: { edge: 'end' }, style: { marginRight: -8 } },
      {
        props: { size: 'small' },
        style: {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${Ve.thumb}`]: { width: 16, height: 16 },
          [`& .${Ve.switchBase}`]: { padding: 4, [`&.${Ve.checked}`]: { transform: 'translateX(16px)' } },
        },
      },
    ],
  }),
  Ox = _t(nx, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.switchBase, { [`& .${Ve.input}`]: i.input }, o.color !== 'default' && i[`color${mt(o.color)}`]];
    },
  })(
    ve(({ theme: a }) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      color: a.vars
        ? a.vars.palette.Switch.defaultColor
        : `${a.palette.mode === 'light' ? a.palette.common.white : a.palette.grey[300]}`,
      transition: a.transitions.create(['left', 'transform'], { duration: a.transitions.duration.shortest }),
      [`&.${Ve.checked}`]: { transform: 'translateX(20px)' },
      [`&.${Ve.disabled}`]: {
        color: a.vars
          ? a.vars.palette.Switch.defaultDisabledColor
          : `${a.palette.mode === 'light' ? a.palette.grey[100] : a.palette.grey[600]}`,
      },
      [`&.${Ve.checked} + .${Ve.track}`]: { opacity: 0.5 },
      [`&.${Ve.disabled} + .${Ve.track}`]: {
        opacity: a.vars ? a.vars.opacity.switchTrackDisabled : `${a.palette.mode === 'light' ? 0.12 : 0.2}`,
      },
      [`& .${Ve.input}`]: { left: '-100%', width: '300%' },
    })),
    ve(({ theme: a }) => ({
      '&:hover': {
        backgroundColor: a.alpha((a.vars || a).palette.action.active, (a.vars || a).palette.action.hoverOpacity),
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      variants: [
        ...Object.entries(a.palette)
          .filter(Jn(['light']))
          .map(([i]) => ({
            props: { color: i },
            style: {
              [`&.${Ve.checked}`]: {
                color: (a.vars || a).palette[i].main,
                '&:hover': {
                  backgroundColor: a.alpha((a.vars || a).palette[i].main, (a.vars || a).palette.action.hoverOpacity),
                  '@media (hover: none)': { backgroundColor: 'transparent' },
                },
                [`&.${Ve.disabled}`]: {
                  color: a.vars
                    ? a.vars.palette.Switch[`${i}DisabledColor`]
                    : `${a.palette.mode === 'light' ? a.lighten(a.palette[i].main, 0.62) : a.darken(a.palette[i].main, 0.55)}`,
                },
              },
              [`&.${Ve.checked} + .${Ve.track}`]: { backgroundColor: (a.vars || a).palette[i].main },
            },
          })),
      ],
    }))
  ),
  Rx = _t('span', { name: 'MuiSwitch', slot: 'Track' })(
    ve(({ theme: a }) => ({
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: a.transitions.create(['opacity', 'background-color'], { duration: a.transitions.duration.shortest }),
      backgroundColor: a.vars
        ? a.vars.palette.common.onBackground
        : `${a.palette.mode === 'light' ? a.palette.common.black : a.palette.common.white}`,
      opacity: a.vars ? a.vars.opacity.switchTrack : `${a.palette.mode === 'light' ? 0.38 : 0.3}`,
    }))
  ),
  wx = _t('span', { name: 'MuiSwitch', slot: 'Thumb' })(
    ve(({ theme: a }) => ({
      boxShadow: (a.vars || a).shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%',
    }))
  ),
  Bx = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiSwitch' }),
      {
        className: c,
        color: f = 'primary',
        edge: p = !1,
        size: h = 'medium',
        sx: y,
        slots: g = {},
        slotProps: b = {},
        ...S
      } = u,
      A = { ...u, color: f, edge: p, size: h },
      j = Ax(A),
      O = { slots: g, slotProps: b },
      [T, k] = Qa('root', {
        className: Lt(j.root, c),
        elementType: Mx,
        externalForwardedProps: O,
        ownerState: A,
        additionalProps: { sx: y },
      }),
      [Y, P] = Qa('thumb', { className: j.thumb, elementType: wx, externalForwardedProps: O, ownerState: A }),
      J = R.jsx(Y, { ...P }),
      [q, N] = Qa('track', { className: j.track, elementType: Rx, externalForwardedProps: O, ownerState: A });
    return R.jsxs(T, {
      ...k,
      children: [
        R.jsx(Ox, {
          type: 'checkbox',
          icon: J,
          checkedIcon: J,
          ref: o,
          ownerState: A,
          ...S,
          classes: { ...j, root: j.switchBase },
          slots: { ...(g.switchBase && { root: g.switchBase }), ...(g.input && { input: g.input }) },
          slotProps: {
            ...(b.switchBase && { root: typeof b.switchBase == 'function' ? b.switchBase(A) : b.switchBase }),
            input: { role: 'switch' },
            ...(b.input && { input: typeof b.input == 'function' ? b.input(A) : b.input }),
          },
        }),
        R.jsx(q, { ...N }),
      ],
    });
  });
function _x(a) {
  return Qe('MuiToolbar', a);
}
rn('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const Dx = (a) => {
    const { classes: i, disableGutters: o, variant: u } = a;
    return on({ root: ['root', !o && 'gutters', u] }, _x, i);
  },
  jx = _t('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, !o.disableGutters && i.gutters, i[o.variant]];
    },
  })(
    ve(({ theme: a }) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      variants: [
        {
          props: ({ ownerState: i }) => !i.disableGutters,
          style: {
            paddingLeft: a.spacing(2),
            paddingRight: a.spacing(2),
            [a.breakpoints.up('sm')]: { paddingLeft: a.spacing(3), paddingRight: a.spacing(3) },
          },
        },
        { props: { variant: 'dense' }, style: { minHeight: 48 } },
        { props: { variant: 'regular' }, style: a.mixins.toolbar },
      ],
    }))
  ),
  Nx = H.forwardRef(function (i, o) {
    const u = un({ props: i, name: 'MuiToolbar' }),
      { className: c, component: f = 'div', disableGutters: p = !1, variant: h = 'regular', ...y } = u,
      g = { ...u, component: f, disableGutters: p, variant: h },
      b = Dx(g);
    return R.jsx(jx, { as: f, className: Lt(b.root, c), ref: o, ownerState: g, ...y });
  }),
  Qf = {
    none: { name: 'Normal', section: 'Basic Filters', filter: '' },
    grayscale: { name: 'B&W', section: 'Basic Filters', filter: 'grayscale(100%)' },
    sepia: { name: 'Sepia', section: 'Basic Filters', filter: 'sepia(100%)' },
    vintage: { name: 'Vintage', section: 'Basic Filters', filter: 'sepia(50%) contrast(120%) brightness(90%)' },
    cool: { name: 'Cool', section: 'Basic Filters', filter: 'saturate(120%) hue-rotate(180deg)' },
    warm: { name: 'Warm', section: 'Basic Filters', filter: 'saturate(130%) hue-rotate(-20deg) brightness(105%)' },
    fade: { name: 'Fade', section: 'Basic Filters', filter: 'contrast(85%) brightness(110%) saturate(80%)' },
    dramatic: { name: 'Dramatic', section: 'Basic Filters', filter: 'contrast(150%) brightness(90%) saturate(130%)' },
    icyWater: {
      name: 'Icy Water',
      section: 'Color Tones',
      filter:
        'brightness(104%) contrast(104%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(0, 225, 250, 0.13)',
    },
    summerHeat: {
      name: 'Summer Heat',
      section: 'Color Tones',
      filter:
        'brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      filterBlendMode: 'overlay',
      filterFill: 'rgba(250, 233, 0, 0.23)',
    },
    fever: {
      name: 'Fever',
      section: 'Color Tones',
      filter: 'contrast(97%) grayscale(0%) hue-rotate(330deg) invert(0%) opacity(100%) saturate(111%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(255, 0, 0, 0.13)',
    },
    strawberry: {
      name: 'Strawberry',
      section: 'Color Tones',
      filter: 'grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'screen',
      filterFill: 'rgba(250, 0, 204, 0.5)',
    },
    ibiza: {
      name: 'Ibiza',
      section: 'Color Tones',
      filter: 'contrast(107%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(165%) sepia(50%)',
      filterBlendMode: 'soft-light',
      filterFill: 'rgba(58, 0, 250, 0.5)',
    },
    sweetSunset: {
      name: 'Sweet Sunset',
      section: 'Color Tones',
      filter: 'contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(250, 0, 204, 0.15)',
    },
    blueRock: {
      name: 'Blue Rock',
      section: 'Color Tones',
      filter: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(0, 142, 250, 0.15)',
    },
    oceanWave: {
      name: 'Ocean Wave',
      section: 'Color Tones',
      filter:
        'brightness(105%) contrast(104%) grayscale(10%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(0, 229, 250, 0.13)',
    },
    littleRed: {
      name: 'Little Red',
      section: 'Color Tones',
      filter:
        'brightness(105%) contrast(106%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(90%) sepia(0%)',
      filterBlendMode: 'overlay',
      filterFill: 'rgba(250, 0, 0, 0.3)',
    },
    spaceTrip: {
      name: 'Space Trip',
      section: 'Color Tones',
      filter: 'grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
      filterBlendMode: 'saturation',
      filterFill: '#faaa00',
    },
    desertMorning: {
      name: 'Desert Morning',
      section: 'Color Tones',
      filter:
        'brightness(110%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      filterBlendMode: 'hard-light',
      filterFill: 'rgba(250, 229, 0, 0.2)',
    },
    blueLagoon: {
      name: 'Blue Lagoon',
      section: 'Color Tones',
      filter:
        'brightness(104%) contrast(104%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(0, 225, 250, 0.5)',
    },
    warmIce: {
      name: 'Warm Ice',
      section: 'Color Tones',
      filter:
        'brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: 'rgba(107, 233, 255, 0.23)',
    },
    waterness: {
      name: 'Waterness',
      section: 'Color Tones',
      filter: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(0, 142, 250, 0.15)',
    },
    distantMountain: {
      name: 'Distant Mountain',
      section: 'Color Tones',
      filter: 'contrast(120%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: '#033dc5',
    },
    burntCoffee: {
      name: 'Burnt Coffee',
      section: 'Sepia Tones',
      filter: 'contrast(80%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#e3dca1',
    },
    oldWood: {
      name: 'Old Wood',
      section: 'Sepia Tones',
      filter:
        'brightness(105%) contrast(102%) grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(9%)',
      filterBlendMode: 'soft-light',
      filterFill: '#574400',
    },
    coalPaper: {
      name: 'Coal Paper',
      section: 'Sepia Tones',
      filter:
        'brightness(90%) contrast(125%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
      filterBlendMode: 'darken',
      filterFill: 'rgba(125, 0, 0, 0.1)',
    },
    vintageMay: {
      name: 'Vintage May',
      section: 'Sepia Tones',
      filter: 'brightness(105%)  grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
      filterFill: 'rgba(250, 170, 0, 0.13)',
    },
    simpleGray: {
      name: 'Simple Gray',
      section: 'Graytones',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterFill: 'rgba(250, 170, 0, 0.13)',
    },
    roseQuartz: {
      name: 'Rose Quartz',
      section: 'Full Color',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(250, 0, 204, 0.5)',
    },
    amazon: {
      name: 'Amazon',
      section: 'Full Color',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#00b309',
    },
    baselineSpecial: {
      name: 'Baseline Special',
      section: 'Full Color',
      filter: 'grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#faaa00',
    },
    babyGlass: {
      name: 'Baby Glass',
      section: 'Full Color',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#00ccfa',
    },
    roseGlass: {
      name: 'Rose Glass',
      section: 'Full Color',
      filter: 'brightness(106%)  grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#fa0000',
    },
    yellowHaze: {
      name: 'Yellow Haze',
      section: 'Full Color',
      filter: 'brightness(106%)  grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#ffff00',
    },
    blueHaze: {
      name: 'Blue Haze',
      section: 'Full Color',
      filter: 'brightness(110%)  grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: 'rgba(0, 43, 255, 0.76)',
    },
    studio54: {
      name: 'Studio 54',
      section: 'Crossblend',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: '#002b96',
      imgBlendMode: 'multiply',
      imgBackground: '#ff0000',
    },
    burntPeach: {
      name: 'Burnt Peach',
      section: 'Crossblend',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: '#f430a9',
      imgBlendMode: 'hard-light',
      imgBackground: '#c4ba86',
    },
    monoSky: {
      name: 'Mono Sky',
      section: 'Crossblend',
      filter: 'contrast(120%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: '#002a8c',
      imgBlendMode: 'multiply',
      imgBackground: '#42a4ff',
    },
    mustardGrass: {
      name: 'Mustard Grass',
      section: 'Crossblend',
      filter: 'contrast(125%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: '#0d5c45',
      imgBlendMode: 'multiply',
      imgBackground: '#ffcd45',
    },
    leaf: {
      name: 'Leaf',
      section: 'Crossblend',
      filter: 'contrast(79%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'multiply',
      filterFill: '#f9ed3a',
      imgBlendMode: 'lighten',
      imgBackground: '#0665c4',
    },
    ryellow: {
      name: 'Ryellow',
      section: 'Crossblend',
      filter: 'contrast(90%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: '#c90300',
      imgBlendMode: 'multiply',
      imgBackground: '#fffb00',
    },
    baselineDark: {
      name: 'Baseline Dark',
      section: 'Crossblend',
      filter: 'contrast(90%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterFill: 'rgba(250, 170, 0, 0.13)',
      imgBlendMode: 'darken',
      imgBackground: '#faaa00',
    },
    redSky: {
      name: 'Red Sky',
      section: 'Crossblend',
      filter: 'contrast(90%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      filterBlendMode: 'lighten',
      filterFill: 'rgba(171, 0, 0, 0.83)',
      imgBlendMode: 'multiply',
      imgBackground: '#42a4ff',
    },
  },
  Ux = new Set([
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity',
  ]),
  Zg = (a) => (Ux.has(a || '') ? a : void 0),
  Hx = ({ allowedFilters: a = 'all', capturedImage: i, onSelectFilter: o, selectedFilter: u }) => {
    const c = {};
    return (
      Object.entries(Qf).forEach(([f, p]) => {
        const h = f,
          y = p.section;
        (a === 'all' || (typeof a == 'string' && a === y) || (Array.isArray(a) && a.includes(y))) &&
          (c[y] || (c[y] = []), c[y].push([h, p]));
      }),
      R.jsxs(Tt, {
        sx: { bgcolor: 'rgba(0,0,0,0.8)', width: '100%', p: 2 },
        children: [
          R.jsx(an, { variant: 'subtitle2', sx: { color: 'white', mb: 1 }, children: 'Choose Filter' }),
          R.jsx(Er, {
            direction: 'row',
            spacing: 0,
            sx: { overflowX: 'auto', pb: 1 },
            children: Object.entries(c).map(([f, p]) =>
              R.jsxs(
                Tt,
                {
                  sx: { position: 'relative', pr: 3, mr: 3 },
                  children: [
                    R.jsx(Tt, {
                      sx: { width: '100%', mb: 1, position: 'absolute', top: 0 },
                      children: R.jsx(an, {
                        variant: 'overline',
                        sx: {
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '0.65rem',
                          mb: 0.5,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                        },
                        children: f,
                      }),
                    }),
                    R.jsx(Tt, {
                      sx: { display: 'flex', flexDirection: 'row', gap: 1, mt: 4 },
                      children: p.map(
                        ([
                          h,
                          { name: y, filter: g, filterBlendMode: b, filterFill: S, imgBackground: A, imgBlendMode: j },
                        ]) =>
                          R.jsxs(
                            Tt,
                            {
                              sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 70 },
                              children: [
                                R.jsxs(xi, {
                                  onClick: () => o(h),
                                  variant: u === h ? 'contained' : 'outlined',
                                  sx: {
                                    width: 70,
                                    height: 70,
                                    p: 0,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                  },
                                  children: [
                                    R.jsx(Tt, {
                                      sx: {
                                        alignItems: 'center',
                                        background: A || 'transparent',
                                        display: 'flex',
                                        height: '100%',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        width: '100%',
                                      },
                                      children: R.jsx('img', {
                                        src: i,
                                        alt: y,
                                        style: {
                                          display: 'block',
                                          filter: g,
                                          height: '100%',
                                          mixBlendMode: Zg(j === 'normal' ? 'initial' : j) || 'initial',
                                          objectFit: 'cover',
                                          width: '100%',
                                        },
                                      }),
                                    }),
                                    b &&
                                      typeof S == 'string' &&
                                      R.jsx(Tt, {
                                        sx: {
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          width: '100%',
                                          height: '100%',
                                          background: S,
                                          mixBlendMode: b,
                                          pointerEvents: 'none',
                                        },
                                      }),
                                  ],
                                }),
                                R.jsx(an, { variant: 'caption', sx: { color: 'white', mt: 0.5 }, children: y }),
                              ],
                            },
                            h
                          )
                      ),
                    }),
                  ],
                },
                f
              )
            ),
          }),
        ],
      })
    );
  };
var Kg = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  qm = He.createContext && He.createContext(Kg),
  kx = ['attr', 'size', 'title'];
function Lx(a, i) {
  if (a == null) return {};
  var o = $x(a, i),
    u,
    c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(a);
    for (c = 0; c < f.length; c++)
      ((u = f[c]), !(i.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(a, u) && (o[u] = a[u]));
  }
  return o;
}
function $x(a, i) {
  if (a == null) return {};
  var o = {};
  for (var u in a)
    if (Object.prototype.hasOwnProperty.call(a, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = a[u];
    }
  return o;
}
function gu() {
  return (
    (gu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (a[u] = o[u]);
          }
          return a;
        }),
    gu.apply(this, arguments)
  );
}
function Gm(a, i) {
  var o = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(a);
    (i &&
      (u = u.filter(function (c) {
        return Object.getOwnPropertyDescriptor(a, c).enumerable;
      })),
      o.push.apply(o, u));
  }
  return o;
}
function yu(a) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Gm(Object(o), !0).forEach(function (u) {
          Yx(a, u, o[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : Gm(Object(o)).forEach(function (u) {
            Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(o, u));
          });
  }
  return a;
}
function Yx(a, i, o) {
  return (
    (i = qx(i)),
    i in a ? Object.defineProperty(a, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[i] = o),
    a
  );
}
function qx(a) {
  var i = Gx(a, 'string');
  return typeof i == 'symbol' ? i : i + '';
}
function Gx(a, i) {
  if (typeof a != 'object' || !a) return a;
  var o = a[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(a, i);
    if (typeof u != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (i === 'string' ? String : Number)(a);
}
function Jg(a) {
  return a && a.map((i, o) => He.createElement(i.tag, yu({ key: o }, i.attr), Jg(i.child)));
}
function Fn(a) {
  return (i) => He.createElement(Vx, gu({ attr: yu({}, a.attr) }, i), Jg(a.child));
}
function Vx(a) {
  var i = (o) => {
    var { attr: u, size: c, title: f } = a,
      p = Lx(a, kx),
      h = c || o.size || '1em',
      y;
    return (
      o.className && (y = o.className),
      a.className && (y = (y ? y + ' ' : '') + a.className),
      He.createElement(
        'svg',
        gu({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, o.attr, u, p, {
          className: y,
          style: yu(yu({ color: a.color || o.color }, o.style), a.style),
          height: h,
          width: h,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        f && He.createElement('title', null, f),
        a.children
      )
    );
  };
  return qm !== void 0 ? He.createElement(qm.Consumer, null, (o) => i(o)) : i(Kg);
}
function Xx(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M18.32 4.26A9.949 9.949 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.941 7.941 0 0 1 1.62 3.9zm-1.62 5.9 1.43 1.43a9.981 9.981 0 0 0 2.21-5.32h-2.02a7.945 7.945 0 0 1-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zM13 12V7h-2v5H7l5 5 5-5h-4zm-2 7.93v2.02c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95v2.02C7.05 4.56 4 7.92 4 12s3.05 7.44 7 7.93z',
        },
        child: [],
      },
    ],
  })(a);
}
function Qx(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z',
        },
        child: [],
      },
    ],
  })(a);
}
function Vm(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      { tag: 'path', attr: { d: 'M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M8 10V8H5.09C6.47 5.61 9.05 4 12 4c3.72 0 6.85 2.56 7.74 6h2.06c-.93-4.56-4.96-8-9.8-8-3.27 0-6.18 1.58-8 4.01V4H2v6h6zM16 14v2h2.91c-1.38 2.39-3.96 4-6.91 4-3.72 0-6.85-2.56-7.74-6H2.2c.93 4.56 4.96 8 9.8 8 3.27 0 6.18-1.58 8-4.01V20h2v-6h-6z',
        },
        child: [],
      },
    ],
  })(a);
}
function Zx(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z',
        },
        child: [],
      },
    ],
  })(a);
}
function Fg(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
        },
        child: [],
      },
    ],
  })(a);
}
function Kx(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'm14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z',
        },
        child: [],
      },
    ],
  })(a);
}
function Jx(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'm6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z',
        },
        child: [],
      },
    ],
  })(a);
}
function Fx(a) {
  return Fn({
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z',
        },
        child: [],
      },
    ],
  })(a);
}
function Wg(a) {
  return Fn({
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z',
        },
        child: [],
      },
    ],
  })(a);
}
const Pg = ({ imageAdjustments: a, onAdjustmentsChange: i }) =>
    R.jsxs(Tt, {
      children: [
        R.jsxs(Tt, {
          sx: { mb: 2 },
          children: [
            R.jsxs(Er, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(Jx, { size: 20, color: 'white' }),
                R.jsx(an, { variant: 'body2', sx: { color: 'white' }, children: 'Brightness' }),
                R.jsxs(an, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.brightness, '%'],
                }),
              ],
            }),
            R.jsx(of, {
              min: 50,
              max: 150,
              value: a.brightness,
              onChange: (o, u) => i((c) => ({ ...c, brightness: typeof u == 'number' ? u : u[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(Tt, {
          sx: { mb: 2 },
          children: [
            R.jsxs(Er, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(Qx, { size: 20, color: 'white' }),
                R.jsx(an, { variant: 'body2', sx: { color: 'white' }, children: 'Contrast' }),
                R.jsxs(an, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.contrast, '%'],
                }),
              ],
            }),
            R.jsx(of, {
              min: 50,
              max: 150,
              value: a.contrast,
              onChange: (o, u) => i((c) => ({ ...c, contrast: typeof u == 'number' ? u : u[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(Tt, {
          children: [
            R.jsxs(Er, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(Fx, { size: 20, color: 'white' }),
                R.jsx(an, { variant: 'body2', sx: { color: 'white' }, children: 'Saturation' }),
                R.jsxs(an, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.saturation, '%'],
                }),
              ],
            }),
            R.jsx(of, {
              min: 0,
              max: 200,
              value: a.saturation,
              onChange: (o, u) => i((c) => ({ ...c, saturation: typeof u == 'number' ? u : u[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
      ],
    }),
  Xm = ({ handleStart: a, handleMove: i, handleEnd: o }) =>
    R.jsx(Tt, {
      sx: {
        borderRadius: 3,
        boxShadow: '0 -2px 6px rgba(0,0,0,0.5)',
        cursor: 'grab',
        display: 'flex',
        justifyContent: 'center',
        py: 3,
        width: '100%',
      },
      onTouchStart: (u) => a(u.touches[0].clientY),
      onTouchMove: (u) => i(u.touches[0].clientY),
      onTouchEnd: o,
      onMouseDown: (u) => a(u.clientY),
      children: R.jsx(Tt, { sx: { bgcolor: 'grey.500', borderRadius: 3, height: 2, width: '13%', minWidth: '50px' } }),
    }),
  Tf = ({ position: a = 'bottom', onCloseEvent: i = 'adjustmentSwipeClose', minHeight: o = 150, children: u }) => {
    const c = H.useRef(null),
      f = H.useRef(null),
      [p, h] = H.useState(0),
      [y, g] = H.useState(null),
      [b, S] = H.useState(!1),
      [A, j] = H.useState(0),
      O = (Y) => {
        (g(Y), S(!0), (document.body.style.userSelect = 'none'));
      },
      T = (Y) => {
        if (!b || y === null) return;
        const P = a === 'top' ? Y - y : y - Y,
          J = Math.max(o, p - P);
        j(J);
      },
      k = () => {
        (A <= o + 20 && window.dispatchEvent(new CustomEvent(i)),
          S(!1),
          g(null),
          j(p),
          (document.body.style.userSelect = ''));
      };
    return (
      H.useEffect(() => {
        const Y = (J) => {
            T(J.clientY);
          },
          P = () => {
            k();
          };
        return (
          b && (window.addEventListener('mousemove', Y), window.addEventListener('mouseup', P)),
          () => {
            (window.removeEventListener('mousemove', Y), window.removeEventListener('mouseup', P));
          }
        );
      }, [b, y, A]),
      H.useEffect(() => {
        const Y = () => {
          if (f.current) {
            const P = f.current.getBoundingClientRect().height;
            (h(P), j((J) => (b ? J : P)));
          }
        };
        return (window.addEventListener('resize', Y), Y(), () => window.removeEventListener('resize', Y));
      }, [b]),
      H.useEffect(() => {
        if (f.current) {
          const Y = f.current.getBoundingClientRect().height;
          (h(Y), j(Y));
        }
      }, []),
      R.jsxs(Tt, {
        sx: {
          bgcolor: 'rgba(0,0,0,0.8)',
          borderRadius: a === 'bottom' ? '0 0 20px 20px' : '20px 20px 0 0',
          position: 'relative',
          top: a === 'top' ? 0 : void 0,
          bottom: a === 'bottom' ? 0 : void 0,
          transition: 'all 0.3s ease-in-out',
          zIndex: 20,
        },
        children: [
          a === 'top' && R.jsx(Xm, { handleStart: O, handleMove: T, handleEnd: k }),
          R.jsx(Tt, {
            ref: c,
            sx: { height: `${A}px`, transition: 'height 0.3s ease-in-out', overflow: 'hidden', p: 2 },
            children: R.jsx(Tt, { ref: f, children: u }),
          }),
          a === 'bottom' && R.jsx(Xm, { handleStart: O, handleMove: T, handleEnd: k }),
        ],
      })
    );
  };
function Wx(a) {
  return Fn({
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M6.00723 7.29726C6.00242 7.19876 5.99998 7.09965 5.99998 7C5.99998 3.68629 8.68627 1 12 1C13.3496 1 14.5977 1.44677 15.6006 2.20007L14.3994 3.7992C13.731 3.29712 12.9016 3 12 3C11.7239 3 11.4542 3.02798 11.1938 3.08127C9.37112 3.45426 8 5.06701 8 7C8 9.03308 9.51679 10.7119 11.4805 10.9666C12.5039 9.55847 14.055 8.70883 15.696 8.53306C16.3796 8.45983 17.0792 8.50382 17.7635 8.67248C18.3006 8.80481 18.828 9.01404 19.33 9.3039C22.1998 10.9608 23.183 14.6303 21.5262 17.5C19.8693 20.3698 16.1998 21.3531 13.33 19.6962C12.828 19.4064 12.3832 19.0543 12 18.6554C11.6169 19.0543 11.172 19.4064 10.6699 19.6963C7.80019 21.3531 4.13065 20.3699 2.47379 17.5001C0.81694 14.6304 1.80019 10.9608 4.66995 9.30397C5.17193 9.01416 5.69919 8.80494 6.23623 8.67261C6.11278 8.24646 6.03531 7.80079 6.00955 7.3413L6.00723 7.29726ZM7.14979 10.5328C6.64359 10.5989 6.14138 10.7638 5.66995 11.036C3.75678 12.1406 3.10128 14.587 4.20585 16.5001C5.31042 18.4133 7.75678 19.0688 9.66995 17.9642C10.3021 17.5993 10.7949 17.09 11.1337 16.5024C11.7429 15.4457 11.8532 14.1391 11.3649 12.9669C10.9807 12.9264 10.6072 12.8497 10.2481 12.7402C10.2028 12.7264 10.1577 12.712 10.1128 12.6972C8.91238 12.2997 7.87997 11.5335 7.14979 10.5328ZM13.1543 16.9343C13.4647 17.3396 13.8586 17.692 14.33 17.9642C16.2432 19.0687 18.6895 18.4132 19.7941 16.5C20.2936 15.635 20.4332 14.6609 20.2593 13.7511C20.0488 12.6488 19.3781 11.6409 18.33 11.0357C17.6978 10.6708 17.0104 10.4986 16.3322 10.499C15.1125 10.4998 13.9259 11.0576 13.1548 12.0666C13.2661 12.3165 13.3588 12.5707 13.4336 12.8277C13.4336 12.8277 13.4336 12.8277 13.4336 12.8277C13.4774 12.9785 13.5151 13.1302 13.5467 13.2825C13.5602 13.3478 13.5726 13.4131 13.5839 13.4786C13.7871 14.6567 13.6297 15.8611 13.1543 16.9343ZM18.5774 7C18.866 7.33402 19.106 7.71371 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C19.1965 2.12319 19.1041 2.3084 19 2.48538C18.5399 3.26793 17.8515 3.88963 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C17.6496 6.13591 18.1635 6.521 18.5774 7Z',
        },
        child: [],
      },
    ],
  })(a);
}
const Px = ({ onRetake: a, onSave: i, showSave: o = !0, toggleFilters: u, toggleControls: c }) =>
    R.jsxs(Tt, {
      sx: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        bottom: 0,
        boxShadow: '0 -2px 8px rgba(0,0,0,0.3)',
        boxSizing: 'border-box',
        display: 'flex',
        gap: 2,
        height: '72px',
        justifyContent: 'space-between',
        left: '50%',
        px: 4,
        py: 2,
        position: 'absolute',
        transform: 'translateX(-50%)',
        width: '100%',
        zIndex: 10,
      },
      children: [
        R.jsxs(Tt, {
          children: [
            R.jsx(vi, { sx: { color: 'white' }, onClick: u, children: R.jsx(Wx, { size: 24, color: 'white' }) }),
            R.jsx(vi, { sx: { color: 'white' }, onClick: c, children: R.jsx(Wg, { size: 24, color: 'white' }) }),
          ],
        }),
        R.jsxs(Tt, {
          sx: { display: 'flex', gap: 2 },
          children: [
            R.jsx(xi, {
              variant: 'outlined',
              onClick: a,
              sx: { color: 'white', borderColor: 'rgba(255,255,255,0.5)' },
              startIcon: R.jsx(Fg, { width: 20, height: 20, fill: 'white' }),
              children: 'Retake',
            }),
            o &&
              i &&
              R.jsx(xi, {
                variant: 'contained',
                onClick: i,
                sx: { bgcolor: 'primary.main', color: 'white' },
                startIcon: R.jsx(Xx, { size: 20 }),
                children: 'Save Photo',
              }),
          ],
        }),
      ],
    }),
  Ix = ({
    allowedFilters: a = 'all',
    capturedImage: i,
    imageAdjustments: o,
    onAdjustmentsChange: u,
    onRetake: c,
    onSave: f,
    selectedFilter: p,
    setSelectedFilter: h,
    showSave: y = !0,
    skipFilters: g,
  }) => {
    const [b, S] = H.useState(null),
      A = () => {
        S((O) => (O === 'filters' ? null : 'filters'));
      },
      j = () => {
        S((O) => (O === 'adjustments' ? null : 'adjustments'));
      };
    return (
      H.useEffect(() => {
        const O = () => {
            b === 'adjustments' && S(null);
          },
          T = () => {
            b === 'filters' && S(null);
          };
        return (
          window.addEventListener('adjustmentSwipeClose', O),
          window.addEventListener('filterSwipeClose', T),
          () => {
            (window.removeEventListener('adjustmentSwipeClose', O), window.removeEventListener('filterSwipeClose', T));
          }
        );
      }, [b]),
      R.jsxs(Tt, {
        sx: { position: 'relative' },
        children: [
          !g &&
            R.jsx(wr, {
              in: b === 'filters',
              timeout: 'auto',
              unmountOnExit: !0,
              sx: { position: 'absolute', bottom: '72px', width: '100%' },
              children: R.jsx(Tf, {
                position: 'top',
                onCloseEvent: 'filterSwipeClose',
                children: R.jsx(Hx, { allowedFilters: a, capturedImage: i, onSelectFilter: h, selectedFilter: p }),
              }),
            }),
          R.jsx(wr, {
            in: b === 'adjustments',
            timeout: 'auto',
            unmountOnExit: !0,
            sx: { position: 'absolute', bottom: '72px', width: '100%' },
            children: R.jsx(Tf, {
              position: 'top',
              onCloseEvent: 'adjustmentSwipeClose',
              children: R.jsx(Pg, { imageAdjustments: o, onAdjustmentsChange: u }),
            }),
          }),
          R.jsx(Px, {
            onRetake: c,
            onSave: f,
            showSave: y,
            toggleFilters: A,
            showFilters: b === 'filters',
            showControls: b === 'adjustments',
            toggleControls: j,
          }),
        ],
      })
    );
  },
  t3 = ({ isFlipped: a, onClose: i, showControls: o, toggleControls: u, toggleFlip: c }) =>
    R.jsx(Tt, {
      sx: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bgcolor: 'rgba(0,0,0,0.5)',
        p: 2,
        zIndex: 10,
        height: 72,
        boxSizing: 'border-box',
      },
      children: R.jsxs(Er, {
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        children: [
          R.jsxs(Tt, {
            children: [
              R.jsx(vi, { onClick: u, sx: { p: 1, color: 'white' }, children: R.jsx(Wg, { size: 24 }) }),
              R.jsx(vi, {
                onClick: c,
                sx: { p: 1, color: 'white' },
                children: R.jsx(Zx, {
                  size: 24,
                  style: { transition: 'transform 0.3s', transform: a ? 'scaleX(1)' : 'scaleX(-1)' },
                }),
              }),
            ],
          }),
          R.jsx(an, {
            variant: 'h6',
            sx: { color: 'white', position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
            children: o ? 'Adjustments' : 'Camera',
          }),
          i &&
            R.jsx(vi, {
              onClick: i,
              sx: { p: 1, color: 'white' },
              children: R.jsx(Fg, { width: 24, height: 24, fill: 'white' }),
            }),
        ],
      }),
    }),
  e3 = ({ message: a }) =>
    R.jsx(Tt, {
      sx: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'rgba(255,0,0,0.9)',
        color: 'white',
        px: 4,
        py: 2,
        borderRadius: 2,
        zIndex: 10,
      },
      children: R.jsx(an, { children: a }),
    }),
  n3 = ({ onCapture: a, isStreaming: i, mobileOS: o, isMobile: u }) =>
    R.jsx(Tt, {
      sx: {
        border: o === 'ios' ? '4px solid white' : 'none',
        borderRadius: '50%',
        padding: '4px',
        transform: 'translateX(-50%)',
        position: 'absolute',
        bottom: 0,
        left: '50%',
      },
      children: R.jsx(xi, {
        variant: 'contained',
        onClick: a,
        disabled: !i,
        sx: {
          bgcolor: u ? 'white' : 'primary.main',
          borderRadius: '50%',
          height: 80,
          minWidth: 0,
          p: 0,
          width: 80,
          '&:hover': { bgcolor: 'primary.dark' },
        },
        children: !u && R.jsx(Kx, { size: 40, fill: 'white' }),
      }),
    }),
  a3 = ({ capturedImage: a, selectedFilter: i, isFlipped: o, skipFilters: u = !1, imageAdjustments: c }) => {
    const f = Qf[i],
      p = `
    brightness(${c.brightness}%)
    contrast(${c.contrast}%)
    saturate(${c.saturation}%)
  `;
    return R.jsx(Tt, {
      sx: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
      children: R.jsxs(Tt, {
        sx: { position: 'relative', display: 'inline-block', lineHeight: 0 },
        children: [
          R.jsx(Tt, {
            sx: {
              alignItems: 'center',
              background: f.imgBackground || 'transparent',
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              overflow: 'hidden',
              width: '100%',
            },
            children: R.jsx('img', {
              src: a,
              alt: 'Captured',
              style: {
                display: 'block',
                filter: u ? p : `${p} ${f.filter || ''}`,
                height: '100%',
                maxHeight: '100%',
                maxWidth: '100%',
                mixBlendMode: Zg(f.imgBlendMode) || 'normal',
                objectFit: 'cover',
                transform: o ? 'scaleX(-1)' : 'none',
                width: '100%',
              },
            }),
          }),
          !u &&
            (f.filterBlendMode || f.filterFill) &&
            R.jsx(Tt, {
              sx: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: typeof f.filterFill == 'string' ? f.filterFill : 'transparent',
                mixBlendMode: f.filterBlendMode || 'normal',
                opacity: 1,
                pointerEvents: 'none',
              },
            }),
        ],
      }),
    });
  },
  l3 = ({ isMobile: a, mobileOS: i, switchCamera: o, facingMode: u }) => {
    const c = {
      transition: 'transform 0.3s cubic-bezier(0.88, 0.18, 0.61, 1.02)',
      transform: u === 'user' ? 'rotate(180deg)' : 'rotate(0deg)',
    };
    return R.jsx(Tt, {
      children:
        a &&
        R.jsx(vi, {
          onClick: o,
          sx: { color: 'white', bgcolor: 'rgba(0,0,0,0.3)', width: 60, height: 60 },
          children:
            i === 'android' ? R.jsx(Vm, { size: 30, style: { ...c } }) : R.jsx(Vm, { size: 30, style: { ...c } }),
        }),
    });
  },
  i3 = async (a) => {
    const i = { video: { facingMode: a, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: !1 };
    return await navigator.mediaDevices.getUserMedia(i);
  },
  Qm = (a) => {
    a &&
      a.getTracks().forEach((i) => {
        (i.stop(), (i.enabled = !1));
      });
  };
function r3() {
  const a = navigator.userAgent || navigator.vendor;
  return /android/i.test(a)
    ? { isMobile: !0, mobileOS: 'android' }
    : /iPad|iPhone|iPod/.test(a)
      ? { isMobile: !0, mobileOS: 'ios' }
      : navigator.platform === 'MacIntel' && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        ? { isMobile: !0, mobileOS: 'ios' }
        : { isMobile: !1, mobileOS: null };
}
const o3 = ({ onImageCaptured: a, onClose: i, skipFilters: o = !1, allowedFilters: u = 'Basic Filters' }) => {
  const c = H.useRef(null),
    f = H.useRef(null),
    p = H.useRef(null),
    [h, y] = H.useState(!1),
    [g, b] = H.useState('user'),
    [S, A] = H.useState({ brightness: 100, contrast: 100, saturation: 100 }),
    [j, O] = H.useState(null),
    [T, k] = H.useState('none'),
    [Y, P] = H.useState(!1),
    [J, q] = H.useState(''),
    [N, V] = H.useState(!0),
    [K, ct] = H.useState(!1),
    [st, pt] = H.useState(null),
    ft = Qf[T],
    v = async () => {
      try {
        q('');
        const w = await i3(g);
        ((p.current = w),
          c.current &&
            ((c.current.srcObject = w),
            (c.current.onloadedmetadata = () => {
              c.current && (c.current.play(), y(!0));
            })));
      } catch (w) {
        (console.error('Camera access error:', w), q('Unable to access camera. Please check permissions.'));
      }
    },
    W = () => {
      p.current && (Qm(p.current), (p.current = null), y(!1));
    },
    X = () => {
      (W(), b((w) => (w === 'user' ? 'environment' : 'user')));
    },
    et = () => {
      const w = c.current,
        Z = f.current;
      if (!w || !Z || !p.current) return;
      ((Z.width = w.videoWidth), (Z.height = w.videoHeight));
      const tt = Z.getContext('2d');
      if (!tt) return;
      (tt.save(),
        (tt.filter = `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%)`),
        N && (tt.translate(Z.width, 0), tt.scale(-1, 1)),
        tt.drawImage(w, 0, 0, Z.width, Z.height),
        tt.restore());
      const nt = Z.toDataURL('image/jpeg', 0.95);
      if ((O(nt), W(), o)) {
        a && a(nt);
        return;
      }
    },
    z = () => {
      if (o) return;
      const w = f.current;
      if (!w || !j) return;
      const Z = w.getContext('2d');
      if (!Z) return;
      const tt = new Image();
      ((tt.onload = () => {
        const { filter: nt, filterBlendMode: ot, filterFill: bt, imgBlendMode: Ut, imgBackground: Rt } = ft;
        ((w.width = tt.width),
          (w.height = tt.height),
          Z.clearRect(0, 0, w.width, w.height),
          Z.save(),
          (Z.filter = `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%) ${nt}`),
          Z.drawImage(tt, 0, 0, w.width, w.height),
          (Z.filter = 'none'),
          Rt && ((Z.fillStyle = Rt), Z.fillRect(0, 0, w.width, w.height)),
          (Z.globalCompositeOperation = Ut === 'normal' ? 'source-over' : Ut),
          Z.drawImage(tt, 0, 0, w.width, w.height),
          (Z.globalCompositeOperation = 'source-over'),
          (Z.filter = 'none'),
          ot &&
            bt &&
            ((Z.globalCompositeOperation = ot === 'normal' ? 'source-over' : ot),
            (Z.fillStyle = bt),
            Z.fillRect(0, 0, w.width, w.height)),
          Z.restore());
        const he = w.toDataURL('image/jpeg', 0.95);
        if (a) a(he);
        else {
          const Se = document.createElement('a');
          ((Se.download = `photo-${Date.now()}.jpg`), (Se.href = he), Se.click());
        }
        I();
      }),
        (tt.src = j));
    },
    F = () => {
      (I(), v());
    },
    I = () => {
      (O(null), k('none'), A({ brightness: 100, contrast: 100, saturation: 100 }));
    },
    it = () => {
      (W(), i && i());
    },
    yt = () => {
      const { isMobile: w, mobileOS: Z } = r3();
      (ct(w), pt(Z));
    };
  (H.useEffect(
    () => (
      v(),
      () => {
        p.current && (Qm(p.current), (p.current = null));
      }
    ),
    [g]
  ),
    H.useEffect(() => {
      const w = () => {
        yt();
      };
      (w(), window.addEventListener('resize', w));
      const Z = () => P(!1);
      return (
        window.addEventListener('adjustmentSwipeClose', Z),
        () => {
          (window.removeEventListener('resize', w), window.removeEventListener('adjustmentSwipeClose', Z));
        }
      );
    }, []));
  const x = {
    filter: `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%)`,
    height: '100%',
    left: 0,
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    transform: N ? 'scaleX(-1)' : 'none',
    width: '100%',
  };
  return R.jsxs(Tt, {
    sx: { width: '100%', height: '100%', position: 'relative', bgcolor: 'black', overflow: 'hidden' },
    children: [
      !j || o
        ? R.jsxs(R.Fragment, {
            children: [
              R.jsx('video', { ref: c, autoPlay: !0, playsInline: !0, muted: !0, style: x }),
              R.jsx(t3, {
                showControls: Y,
                toggleControls: () => P(!Y),
                isFlipped: N,
                toggleFlip: () => V((w) => !w),
                onClose: i ? it : void 0,
              }),
              R.jsx(wr, {
                in: Y,
                timeout: 'auto',
                unmountOnExit: !0,
                style: { position: 'absolute', top: '72px', width: '100%' },
                children: R.jsx(Tf, {
                  onCloseEvent: 'adjustmentSwipeClose',
                  children: R.jsx(Pg, { imageAdjustments: S, onAdjustmentsChange: A }),
                }),
              }),
              J && R.jsx(e3, { message: J }),
              R.jsxs(Tt, {
                sx: {
                  alignItems: 'center',
                  bottom: 20,
                  display: 'flex',
                  justifyContent: 'space-around',
                  left: 0,
                  pb: 2,
                  position: 'absolute',
                  right: 0,
                  width: '100%',
                },
                children: [
                  R.jsx(Tt, { sx: { width: 80 } }),
                  R.jsx(n3, { onCapture: et, isStreaming: h, mobileOS: st, isMobile: K }),
                  R.jsx(l3, { isMobile: K, mobileOS: st, switchCamera: X, facingMode: g }),
                ],
              }),
            ],
          })
        : R.jsxs(Tt, {
            sx: { display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', width: '100%' },
            children: [
              R.jsx(
                a3,
                { capturedImage: j, imageAdjustments: S, isFlipped: !1, selectedFilter: T, skipFilters: o },
                `${T}-${S.brightness}-${S.contrast}-${S.saturation}`
              ),
              R.jsx(Ix, {
                allowedFilters: u,
                capturedImage: j,
                imageAdjustments: S,
                onAdjustmentsChange: A,
                onRetake: F,
                onSave: o ? void 0 : z,
                selectedFilter: T,
                setSelectedFilter: k,
                showSave: !o,
                skipFilters: o,
              }),
            ],
          }),
      R.jsx('canvas', { ref: f, style: { display: 'none' } }),
    ],
  });
};
function u3() {
  const [a, i] = H.useState(null),
    [o, u] = H.useState(!0),
    [c, f] = H.useState(!1),
    p = (h) => {
      (i(h), u(!1));
    };
  return R.jsxs(Tt, {
    sx: { display: 'flex', flexDirection: 'column', height: '100vh' },
    children: [
      R.jsx(L5, {
        position: 'static',
        children: R.jsx(Nx, {
          children: R.jsx(an, { variant: 'h6', component: 'div', children: 'React MUI Camera Demo' }),
        }),
      }),
      R.jsx(Hm, {
        sx: { flexGrow: 1, py: 2 },
        children: o
          ? R.jsx(Gg, {
              sx: { width: '100%', height: '100%', overflow: 'hidden', position: 'relative' },
              children: R.jsx(o3, { onImageCaptured: p, onClose: () => u(!1), skipFilters: c, allowedFilters: 'all' }),
            })
          : R.jsxs(Tt, {
              sx: { textAlign: 'center' },
              children: [
                a &&
                  R.jsx(Tt, {
                    children: R.jsx(Tt, {
                      component: 'img',
                      src: a,
                      alt: 'Captured',
                      sx: { maxWidth: '100%', maxHeight: '70vh', borderRadius: 2, boxShadow: 3 },
                    }),
                  }),
                R.jsxs(Tt, {
                  sx: { mt: 2, display: 'flex', flexDirection: 'column', gap: 2 },
                  children: [
                    R.jsx(Tt, {
                      children: R.jsxs(Tt, {
                        sx: {
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          cursor: 'pointer',
                        },
                        onClick: () => f(!c),
                        children: [
                          R.jsx(an, { gutterBottom: !0, children: 'Skip Filters' }),
                          R.jsx(Bx, {
                            checked: c,
                            onChange: () => f(!c),
                            inputProps: { 'aria-label': 'Skip Filters Switch' },
                          }),
                        ],
                      }),
                    }),
                    R.jsxs(xi, {
                      variant: 'contained',
                      onClick: () => u(!0),
                      sx: { height: a ? 'auto' : '60px' },
                      children: ['Capture ', a ? 'Another' : 'a', ' Photo'],
                    }),
                    !!a &&
                      R.jsx(xi, { variant: 'outlined', onClick: () => i(null), disabled: !a, children: 'Clear Photo' }),
                  ],
                }),
              ],
            }),
      }),
      R.jsx(Tt, {
        sx: { bgcolor: 'grey.200', py: 2 },
        children: R.jsx(Hm, {
          children: R.jsxs(an, {
            variant: 'body2',
            color: 'text.secondary',
            align: 'center',
            children: ['© ', new Date().getFullYear(), ' React‑MUI‑Camera • Built with MUI • Host on GitHub Pages'],
          }),
        }),
      }),
    ],
  });
}
Sv.createRoot(document.getElementById('root')).render(R.jsx(H.StrictMode, { children: R.jsx(u3, {}) }));
