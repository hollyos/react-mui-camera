function gv(a, i) {
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
function Wm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default') ? a.default : a;
}
var Zc = { exports: {} },
  mr = {};
var Qh;
function yv() {
  if (Qh) return mr;
  Qh = 1;
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
var Zh;
function vv() {
  return (Zh || ((Zh = 1), (Zc.exports = yv())), Zc.exports);
}
var R = vv(),
  Kc = { exports: {} },
  vt = {};
var Kh;
function bv() {
  if (Kh) return vt;
  Kh = 1;
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
    x = Symbol.for('react.activity'),
    A = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != 'object'
      ? null
      : ((S = (A && S[A]) || S['@@iterator']), typeof S == 'function' ? S : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    H = {};
  function q(S, k, I) {
    ((this.props = S), (this.context = k), (this.refs = H), (this.updater = I || M));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (S, k) {
      if (typeof S != 'object' && typeof S != 'function' && S != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, S, k, 'setState');
    }),
    (q.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, 'forceUpdate');
    }));
  function W() {}
  W.prototype = q.prototype;
  function F(S, k, I) {
    ((this.props = S), (this.context = k), (this.refs = H), (this.updater = I || M));
  }
  var G = (F.prototype = new W());
  ((G.constructor = F), T(G, q.prototype), (G.isPureReactComponent = !0));
  var j = Array.isArray;
  function X() {}
  var J = { H: null, A: null, T: null, S: null },
    st = Object.prototype.hasOwnProperty;
  function ct(S, k, I) {
    var tt = I.ref;
    return { $$typeof: a, type: S, key: k, ref: tt !== void 0 ? tt : null, props: I };
  }
  function pt(S, k) {
    return ct(S.type, k, S.props);
  }
  function ft(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === a;
  }
  function v(S) {
    var k = { '=': '=0', ':': '=2' };
    return (
      '$' +
      S.replace(/[=:]/g, function (I) {
        return k[I];
      })
    );
  }
  var P = /\/+/g;
  function Q(S, k) {
    return typeof S == 'object' && S !== null && S.key != null ? v('' + S.key) : k.toString(36);
  }
  function nt(S) {
    switch (S.status) {
      case 'fulfilled':
        return S.value;
      case 'rejected':
        throw S.reason;
      default:
        switch (
          (typeof S.status == 'string'
            ? S.then(X, X)
            : ((S.status = 'pending'),
              S.then(
                function (k) {
                  S.status === 'pending' && ((S.status = 'fulfilled'), (S.value = k));
                },
                function (k) {
                  S.status === 'pending' && ((S.status = 'rejected'), (S.reason = k));
                }
              )),
          S.status)
        ) {
          case 'fulfilled':
            return S.value;
          case 'rejected':
            throw S.reason;
        }
    }
    throw S;
  }
  function z(S, k, I, tt, at) {
    var ot = typeof S;
    (ot === 'undefined' || ot === 'boolean') && (S = null);
    var St = !1;
    if (S === null) St = !0;
    else
      switch (ot) {
        case 'bigint':
        case 'string':
        case 'number':
          St = !0;
          break;
        case 'object':
          switch (S.$$typeof) {
            case a:
            case i:
              St = !0;
              break;
            case b:
              return ((St = S._init), z(St(S._payload), k, I, tt, at));
          }
      }
    if (St)
      return (
        (at = at(S)),
        (St = tt === '' ? '.' + Q(S, 0) : tt),
        j(at)
          ? ((I = ''),
            St != null && (I = St.replace(P, '$&/') + '/'),
            z(at, k, I, '', function (Ae) {
              return Ae;
            }))
          : at != null &&
            (ft(at) &&
              (at = pt(
                at,
                I + (at.key == null || (S && S.key === at.key) ? '' : ('' + at.key).replace(P, '$&/') + '/') + St
              )),
            k.push(at)),
        1
      );
    St = 0;
    var Gt = tt === '' ? '.' : tt + ':';
    if (j(S)) for (var Nt = 0; Nt < S.length; Nt++) ((tt = S[Nt]), (ot = Gt + Q(tt, Nt)), (St += z(tt, k, I, ot, at)));
    else if (((Nt = _(S)), typeof Nt == 'function'))
      for (S = Nt.call(S), Nt = 0; !(tt = S.next()).done; )
        ((tt = tt.value), (ot = Gt + Q(tt, Nt++)), (St += z(tt, k, I, ot, at)));
    else if (ot === 'object') {
      if (typeof S.then == 'function') return z(nt(S), k, I, tt, at);
      throw (
        (k = String(S)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (k === '[object Object]' ? 'object with keys {' + Object.keys(S).join(', ') + '}' : k) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return St;
  }
  function Y(S, k, I) {
    if (S == null) return S;
    var tt = [],
      at = 0;
    return (
      z(S, tt, '', '', function (ot) {
        return k.call(I, ot, at++);
      }),
      tt
    );
  }
  function K(S) {
    if (S._status === -1) {
      var k = S._result;
      ((k = k()),
        k.then(
          function (I) {
            (S._status === 0 || S._status === -1) && ((S._status = 1), (S._result = I));
          },
          function (I) {
            (S._status === 0 || S._status === -1) && ((S._status = 2), (S._result = I));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = k)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var et =
      typeof reportError == 'function'
        ? reportError
        : function (S) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var k = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == 'object' && S !== null && typeof S.message == 'string' ? String(S.message) : String(S),
                error: S,
              });
              if (!window.dispatchEvent(k)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', S);
              return;
            }
            console.error(S);
          },
    mt = {
      map: Y,
      forEach: function (S, k, I) {
        Y(
          S,
          function () {
            k.apply(this, arguments);
          },
          I
        );
      },
      count: function (S) {
        var k = 0;
        return (
          Y(S, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (S) {
        return (
          Y(S, function (k) {
            return k;
          }) || []
        );
      },
      only: function (S) {
        if (!ft(S)) throw Error('React.Children.only expected to receive a single React element child.');
        return S;
      },
    };
  return (
    (vt.Activity = x),
    (vt.Children = mt),
    (vt.Component = q),
    (vt.Fragment = o),
    (vt.Profiler = c),
    (vt.PureComponent = F),
    (vt.StrictMode = u),
    (vt.Suspense = y),
    (vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (vt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return J.H.useMemoCache(S);
      },
    }),
    (vt.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (vt.cacheSignal = function () {
      return null;
    }),
    (vt.cloneElement = function (S, k, I) {
      if (S == null) throw Error('The argument must be a React element, but you passed ' + S + '.');
      var tt = T({}, S.props),
        at = S.key;
      if (k != null)
        for (ot in (k.key !== void 0 && (at = '' + k.key), k))
          !st.call(k, ot) ||
            ot === 'key' ||
            ot === '__self' ||
            ot === '__source' ||
            (ot === 'ref' && k.ref === void 0) ||
            (tt[ot] = k[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) tt.children = I;
      else if (1 < ot) {
        for (var St = Array(ot), Gt = 0; Gt < ot; Gt++) St[Gt] = arguments[Gt + 2];
        tt.children = St;
      }
      return ct(S.type, at, tt);
    }),
    (vt.createContext = function (S) {
      return (
        (S = { $$typeof: p, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: f, _context: S }),
        S
      );
    }),
    (vt.createElement = function (S, k, I) {
      var tt,
        at = {},
        ot = null;
      if (k != null)
        for (tt in (k.key !== void 0 && (ot = '' + k.key), k))
          st.call(k, tt) && tt !== 'key' && tt !== '__self' && tt !== '__source' && (at[tt] = k[tt]);
      var St = arguments.length - 2;
      if (St === 1) at.children = I;
      else if (1 < St) {
        for (var Gt = Array(St), Nt = 0; Nt < St; Nt++) Gt[Nt] = arguments[Nt + 2];
        at.children = Gt;
      }
      if (S && S.defaultProps) for (tt in ((St = S.defaultProps), St)) at[tt] === void 0 && (at[tt] = St[tt]);
      return ct(S, ot, at);
    }),
    (vt.createRef = function () {
      return { current: null };
    }),
    (vt.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (vt.isValidElement = ft),
    (vt.lazy = function (S) {
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: K };
    }),
    (vt.memo = function (S, k) {
      return { $$typeof: g, type: S, compare: k === void 0 ? null : k };
    }),
    (vt.startTransition = function (S) {
      var k = J.T,
        I = {};
      J.T = I;
      try {
        var tt = S(),
          at = J.S;
        (at !== null && at(I, tt),
          typeof tt == 'object' && tt !== null && typeof tt.then == 'function' && tt.then(X, et));
      } catch (ot) {
        et(ot);
      } finally {
        (k !== null && I.types !== null && (k.types = I.types), (J.T = k));
      }
    }),
    (vt.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (vt.use = function (S) {
      return J.H.use(S);
    }),
    (vt.useActionState = function (S, k, I) {
      return J.H.useActionState(S, k, I);
    }),
    (vt.useCallback = function (S, k) {
      return J.H.useCallback(S, k);
    }),
    (vt.useContext = function (S) {
      return J.H.useContext(S);
    }),
    (vt.useDebugValue = function () {}),
    (vt.useDeferredValue = function (S, k) {
      return J.H.useDeferredValue(S, k);
    }),
    (vt.useEffect = function (S, k) {
      return J.H.useEffect(S, k);
    }),
    (vt.useEffectEvent = function (S) {
      return J.H.useEffectEvent(S);
    }),
    (vt.useId = function () {
      return J.H.useId();
    }),
    (vt.useImperativeHandle = function (S, k, I) {
      return J.H.useImperativeHandle(S, k, I);
    }),
    (vt.useInsertionEffect = function (S, k) {
      return J.H.useInsertionEffect(S, k);
    }),
    (vt.useLayoutEffect = function (S, k) {
      return J.H.useLayoutEffect(S, k);
    }),
    (vt.useMemo = function (S, k) {
      return J.H.useMemo(S, k);
    }),
    (vt.useOptimistic = function (S, k) {
      return J.H.useOptimistic(S, k);
    }),
    (vt.useReducer = function (S, k, I) {
      return J.H.useReducer(S, k, I);
    }),
    (vt.useRef = function (S) {
      return J.H.useRef(S);
    }),
    (vt.useState = function (S) {
      return J.H.useState(S);
    }),
    (vt.useSyncExternalStore = function (S, k, I) {
      return J.H.useSyncExternalStore(S, k, I);
    }),
    (vt.useTransition = function () {
      return J.H.useTransition();
    }),
    (vt.version = '19.2.0'),
    vt
  );
}
var Jh;
function Rf() {
  return (Jh || ((Jh = 1), (Kc.exports = bv())), Kc.exports);
}
var N = Rf();
const It = Wm(N),
  ff = gv({ __proto__: null, default: It }, [N]);
var Jc = { exports: {} },
  gr = {},
  Fc = { exports: {} },
  Wc = {};
var Fh;
function Sv() {
  return (
    Fh ||
      ((Fh = 1),
      (function (a) {
        function i(z, Y) {
          var K = z.length;
          z.push(Y);
          t: for (; 0 < K; ) {
            var et = (K - 1) >>> 1,
              mt = z[et];
            if (0 < c(mt, Y)) ((z[et] = Y), (z[K] = mt), (K = et));
            else break t;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function u(z) {
          if (z.length === 0) return null;
          var Y = z[0],
            K = z.pop();
          if (K !== Y) {
            z[0] = K;
            t: for (var et = 0, mt = z.length, S = mt >>> 1; et < S; ) {
              var k = 2 * (et + 1) - 1,
                I = z[k],
                tt = k + 1,
                at = z[tt];
              if (0 > c(I, K))
                tt < mt && 0 > c(at, I) ? ((z[et] = at), (z[tt] = K), (et = tt)) : ((z[et] = I), (z[k] = K), (et = k));
              else if (tt < mt && 0 > c(at, K)) ((z[et] = at), (z[tt] = K), (et = tt));
              else break t;
            }
          }
          return Y;
        }
        function c(z, Y) {
          var K = z.sortIndex - Y.sortIndex;
          return K !== 0 ? K : z.id - Y.id;
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
          x = null,
          A = 3,
          _ = !1,
          M = !1,
          T = !1,
          H = !1,
          q = typeof setTimeout == 'function' ? setTimeout : null,
          W = typeof clearTimeout == 'function' ? clearTimeout : null,
          F = typeof setImmediate < 'u' ? setImmediate : null;
        function G(z) {
          for (var Y = o(g); Y !== null; ) {
            if (Y.callback === null) u(g);
            else if (Y.startTime <= z) (u(g), (Y.sortIndex = Y.expirationTime), i(y, Y));
            else break;
            Y = o(g);
          }
        }
        function j(z) {
          if (((T = !1), G(z), !M))
            if (o(y) !== null) ((M = !0), X || ((X = !0), v()));
            else {
              var Y = o(g);
              Y !== null && nt(j, Y.startTime - z);
            }
        }
        var X = !1,
          J = -1,
          st = 5,
          ct = -1;
        function pt() {
          return H ? !0 : !(a.unstable_now() - ct < st);
        }
        function ft() {
          if (((H = !1), X)) {
            var z = a.unstable_now();
            ct = z;
            var Y = !0;
            try {
              t: {
                ((M = !1), T && ((T = !1), W(J), (J = -1)), (_ = !0));
                var K = A;
                try {
                  e: {
                    for (G(z), x = o(y); x !== null && !(x.expirationTime > z && pt()); ) {
                      var et = x.callback;
                      if (typeof et == 'function') {
                        ((x.callback = null), (A = x.priorityLevel));
                        var mt = et(x.expirationTime <= z);
                        if (((z = a.unstable_now()), typeof mt == 'function')) {
                          ((x.callback = mt), G(z), (Y = !0));
                          break e;
                        }
                        (x === o(y) && u(y), G(z));
                      } else u(y);
                      x = o(y);
                    }
                    if (x !== null) Y = !0;
                    else {
                      var S = o(g);
                      (S !== null && nt(j, S.startTime - z), (Y = !1));
                    }
                  }
                  break t;
                } finally {
                  ((x = null), (A = K), (_ = !1));
                }
                Y = void 0;
              }
            } finally {
              Y ? v() : (X = !1);
            }
          }
        }
        var v;
        if (typeof F == 'function')
          v = function () {
            F(ft);
          };
        else if (typeof MessageChannel < 'u') {
          var P = new MessageChannel(),
            Q = P.port2;
          ((P.port1.onmessage = ft),
            (v = function () {
              Q.postMessage(null);
            }));
        } else
          v = function () {
            q(ft, 0);
          };
        function nt(z, Y) {
          J = q(function () {
            z(a.unstable_now());
          }, Y);
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
              : (st = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (a.unstable_next = function (z) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = A;
            }
            var K = A;
            A = Y;
            try {
              return z();
            } finally {
              A = K;
            }
          }),
          (a.unstable_requestPaint = function () {
            H = !0;
          }),
          (a.unstable_runWithPriority = function (z, Y) {
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
            var K = A;
            A = z;
            try {
              return Y();
            } finally {
              A = K;
            }
          }),
          (a.unstable_scheduleCallback = function (z, Y, K) {
            var et = a.unstable_now();
            switch (
              (typeof K == 'object' && K !== null
                ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? et + K : et))
                : (K = et),
              z)
            ) {
              case 1:
                var mt = -1;
                break;
              case 2:
                mt = 250;
                break;
              case 5:
                mt = 1073741823;
                break;
              case 4:
                mt = 1e4;
                break;
              default:
                mt = 5e3;
            }
            return (
              (mt = K + mt),
              (z = { id: b++, callback: Y, priorityLevel: z, startTime: K, expirationTime: mt, sortIndex: -1 }),
              K > et
                ? ((z.sortIndex = K),
                  i(g, z),
                  o(y) === null && z === o(g) && (T ? (W(J), (J = -1)) : (T = !0), nt(j, K - et)))
                : ((z.sortIndex = mt), i(y, z), M || _ || ((M = !0), X || ((X = !0), v()))),
              z
            );
          }),
          (a.unstable_shouldYield = pt),
          (a.unstable_wrapCallback = function (z) {
            var Y = A;
            return function () {
              var K = A;
              A = Y;
              try {
                return z.apply(this, arguments);
              } finally {
                A = K;
              }
            };
          }));
      })(Wc)),
    Wc
  );
}
var Wh;
function xv() {
  return (Wh || ((Wh = 1), (Fc.exports = Sv())), Fc.exports);
}
var Pc = { exports: {} },
  ke = {};
var Ph;
function Cv() {
  if (Ph) return ke;
  Ph = 1;
  var a = Rf();
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
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: x == null ? null : '' + x, children: y, containerInfo: g, implementation: b };
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
          x = h(b, g.crossOrigin),
          A = typeof g.integrity == 'string' ? g.integrity : void 0,
          _ = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        b === 'style'
          ? u.d.S(y, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: x,
              integrity: A,
              fetchPriority: _,
            })
          : b === 'script' &&
            u.d.X(y, {
              crossOrigin: x,
              integrity: A,
              fetchPriority: _,
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
          x = h(b, g.crossOrigin);
        u.d.L(y, b, {
          crossOrigin: x,
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
var Ih;
function Pm() {
  if (Ih) return Pc.exports;
  Ih = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Pc.exports = Cv()), Pc.exports);
}
var tm;
function Tv() {
  if (tm) return gr;
  tm = 1;
  var a = xv(),
    i = Rf(),
    o = Pm();
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
  var x = Object.assign,
    A = Symbol.for('react.element'),
    _ = Symbol.for('react.transitional.element'),
    M = Symbol.for('react.portal'),
    T = Symbol.for('react.fragment'),
    H = Symbol.for('react.strict_mode'),
    q = Symbol.for('react.profiler'),
    W = Symbol.for('react.consumer'),
    F = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    j = Symbol.for('react.suspense'),
    X = Symbol.for('react.suspense_list'),
    J = Symbol.for('react.memo'),
    st = Symbol.for('react.lazy'),
    ct = Symbol.for('react.activity'),
    pt = Symbol.for('react.memo_cache_sentinel'),
    ft = Symbol.iterator;
  function v(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ft && t[ft]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var P = Symbol.for('react.client.reference');
  function Q(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === P ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case T:
        return 'Fragment';
      case q:
        return 'Profiler';
      case H:
        return 'StrictMode';
      case j:
        return 'Suspense';
      case X:
        return 'SuspenseList';
      case ct:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case M:
          return 'Portal';
        case F:
          return t.displayName || 'Context';
        case W:
          return (t._context.displayName || 'Context') + '.Consumer';
        case G:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case J:
          return ((e = t.displayName || null), e !== null ? e : Q(t.type) || 'Memo');
        case st:
          ((e = t._payload), (t = t._init));
          try {
            return Q(t(e));
          } catch {}
      }
    return null;
  }
  var nt = Array.isArray,
    z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    et = [],
    mt = -1;
  function S(t) {
    return { current: t };
  }
  function k(t) {
    0 > mt || ((t.current = et[mt]), (et[mt] = null), mt--);
  }
  function I(t, e) {
    (mt++, (et[mt] = t.current), (t.current = e));
  }
  var tt = S(null),
    at = S(null),
    ot = S(null),
    St = S(null);
  function Gt(t, e) {
    switch ((I(ot, e), I(at, t), I(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? mh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = mh(e)), (t = gh(e, t)));
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
    (k(tt), I(tt, t));
  }
  function Nt() {
    (k(tt), k(at), k(ot));
  }
  function Ae(t) {
    t.memoizedState !== null && I(St, t);
    var e = tt.current,
      n = gh(e, t.type);
    e !== n && (I(at, t), I(tt, n));
  }
  function He(t) {
    (at.current === t && (k(tt), k(at)), St.current === t && (k(St), (fr._currentValue = K)));
  }
  var Me, se;
  function ge(t) {
    if (Me === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Me = (e && e[1]) || ''),
          (se =
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
      se
    );
  }
  var Tt = !1;
  function ce(t, e) {
    if (!t || Tt) return '';
    Tt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(t, [], Z);
              } else {
                try {
                  Z.call();
                } catch (U) {
                  D = U;
                }
                t.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (Z = t()) && typeof Z.catch == 'function' && Z.catch(function () {});
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
          B = m.split(`
`);
        for (r = l = 0; l < C.length && !C[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; r < B.length && !B[r].includes('DetermineComponentFrameRoot'); ) r++;
        if (l === C.length || r === B.length)
          for (l = C.length - 1, r = B.length - 1; 1 <= l && 0 <= r && C[l] !== B[r]; ) r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (C[l] !== B[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || C[l] !== B[r])) {
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
      ((Tt = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : '') ? ge(n) : '';
  }
  function jt(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ge(t.type);
      case 16:
        return ge('Lazy');
      case 13:
        return t.child !== e && e !== null ? ge('Suspense Fallback') : ge('Suspense');
      case 19:
        return ge('SuspenseList');
      case 0:
      case 15:
        return ce(t.type, !1);
      case 11:
        return ce(t.type.render, !1);
      case 1:
        return ce(t.type, !0);
      case 31:
        return ge('Activity');
      default:
        return '';
    }
  }
  function ie(t) {
    try {
      var e = '',
        n = null;
      do ((e += jt(t, n)), (n = t), (t = t.return));
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
  var qe = Object.prototype.hasOwnProperty,
    Fe = a.unstable_scheduleCallback,
    kn = a.unstable_cancelCallback,
    yt = a.unstable_shouldYield,
    va = a.unstable_requestPaint,
    Oe = a.unstable_now,
    it = a.unstable_getCurrentPriorityLevel,
    lt = a.unstable_ImmediatePriority,
    xt = a.unstable_UserBlockingPriority,
    zt = a.unstable_NormalPriority,
    _t = a.unstable_LowPriority,
    Et = a.unstable_IdlePriority,
    Ye = a.log,
    We = a.unstable_setDisableYieldValue,
    te = null,
    re = null;
  function Pe(t) {
    if ((typeof Ye == 'function' && We(t), re && typeof re.setStrictMode == 'function'))
      try {
        re.setStrictMode(te, t);
      } catch {}
  }
  var Ge = Math.clz32 ? Math.clz32 : Ei,
    Ti = Math.log,
    ju = Math.LN2;
  function Ei(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ti(t) / ju) | 0)) | 0);
  }
  var ba = 256,
    Tl = 262144,
    ee = 4194304;
  function ne(t) {
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
          l !== 0 ? (r = ne(l)) : ((d &= m), d !== 0 ? (r = ne(d)) : n || ((n = m & ~t), n !== 0 && (r = ne(n)))))
        : ((m = l & ~s), m !== 0 ? (r = ne(m)) : d !== 0 ? (r = ne(d)) : n || ((n = l & ~t), n !== 0 && (r = ne(n)))),
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
  function Bn(t, e) {
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
  function Ff() {
    var t = ee;
    return ((ee <<= 1), (ee & 62914560) === 0 && (ee = 4194304), t);
  }
  function Nu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function zi(t, e) {
    ((t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function ly(t, e, n, l, r, s) {
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
      B = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var L = 31 - Ge(n),
        Z = 1 << L;
      ((m[L] = 0), (C[L] = -1));
      var D = B[L];
      if (D !== null)
        for (B[L] = null, L = 0; L < D.length; L++) {
          var U = D[L];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~Z;
    }
    (l !== 0 && Wf(t, l, 0), s !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(d & ~e)));
  }
  function Wf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Ge(e);
    ((t.entangledLanes |= e), (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Pf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Ge(n),
        r = 1 << l;
      ((r & e) | (t[l] & e) && (t[l] |= e), (n &= ~r));
    }
  }
  function If(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Uu(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Uu(t) {
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
  function Hu(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function td() {
    var t = Y.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Lh(t.type));
  }
  function ed(t, e) {
    var n = Y.p;
    try {
      return ((Y.p = t), e());
    } finally {
      Y.p = n;
    }
  }
  var xa = Math.random().toString(36).slice(2),
    Be = '__reactFiber$' + xa,
    Ie = '__reactProps$' + xa,
    El = '__reactContainer$' + xa,
    ku = '__reactEvents$' + xa,
    iy = '__reactListeners$' + xa,
    ry = '__reactHandles$' + xa,
    nd = '__reactResources$' + xa,
    Ai = '__reactMarker$' + xa;
  function Lu(t) {
    (delete t[Be], delete t[Ie], delete t[ku], delete t[iy], delete t[ry]);
  }
  function zl(t) {
    var e = t[Be];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[El] || n[Be])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = Th(t); t !== null; ) {
            if ((n = t[Be])) return n;
            t = Th(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Al(t) {
    if ((t = t[Be] || t[El])) {
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
  function Ml(t) {
    var e = t[nd];
    return (e || (e = t[nd] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Re(t) {
    t[Ai] = !0;
  }
  var ad = new Set(),
    ld = {};
  function Ka(t, e) {
    (Ol(t, e), Ol(t + 'Capture', e));
  }
  function Ol(t, e) {
    for (ld[t] = e, t = 0; t < e.length; t++) ad.add(e[t]);
  }
  var oy = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    id = {},
    rd = {};
  function uy(t) {
    return qe.call(rd, t) ? !0 : qe.call(id, t) ? !1 : oy.test(t) ? (rd[t] = !0) : ((id[t] = !0), !1);
  }
  function Ur(t, e, n) {
    if (uy(e))
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
  function yn(t) {
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
  function od(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function sy(t, e, n) {
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
  function $u(t) {
    if (!t._valueTracker) {
      var e = od(t) ? 'checked' : 'value';
      t._valueTracker = sy(t, e, '' + t[e]);
    }
  }
  function ud(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = '';
    return (t && (l = od(t) ? (t.checked ? 'true' : 'false') : t.value), (t = l), t !== n ? (e.setValue(t), !0) : !1);
  }
  function kr(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var cy = /[\n"\\]/g;
  function vn(t) {
    return t.replace(cy, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function qu(t, e, n, l, r, s, d, m) {
    ((t.name = ''),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean'
        ? (t.type = d)
        : t.removeAttribute('type'),
      e != null
        ? d === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + yn(e))
          : t.value !== '' + yn(e) && (t.value = '' + yn(e))
        : (d !== 'submit' && d !== 'reset') || t.removeAttribute('value'),
      e != null ? Yu(t, d, yn(e)) : n != null ? Yu(t, d, yn(n)) : l != null && t.removeAttribute('value'),
      r == null && s != null && (t.defaultChecked = !!s),
      r != null && (t.checked = r && typeof r != 'function' && typeof r != 'symbol'),
      m != null && typeof m != 'function' && typeof m != 'symbol' && typeof m != 'boolean'
        ? (t.name = '' + yn(m))
        : t.removeAttribute('name'));
  }
  function sd(t, e, n, l, r, s, d, m) {
    if (
      (s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' && (t.type = s),
      e != null || n != null)
    ) {
      if (!((s !== 'submit' && s !== 'reset') || e != null)) {
        $u(t);
        return;
      }
      ((n = n != null ? '' + yn(n) : ''),
        (e = e != null ? '' + yn(e) : n),
        m || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? r),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (t.checked = m ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean' && (t.name = d),
      $u(t));
  }
  function Yu(t, e, n) {
    (e === 'number' && kr(t.ownerDocument) === t) || t.defaultValue === '' + n || (t.defaultValue = '' + n);
  }
  function Rl(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        ((r = e.hasOwnProperty('$' + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && l && (t[n].defaultSelected = !0));
    } else {
      for (n = '' + yn(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          ((t[r].selected = !0), l && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function cd(t, e, n) {
    if (e != null && ((e = '' + yn(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? '' + yn(n) : '';
  }
  function fd(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(u(92));
        if (nt(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (e = n));
    }
    ((n = yn(e)), (t.defaultValue = n), (l = t.textContent), l === n && l !== '' && l !== null && (t.value = l), $u(t));
  }
  function wl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var fy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function dd(t, e, n) {
    var l = e.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : l
        ? t.setProperty(e, n)
        : typeof n != 'number' || n === 0 || fy.has(e)
          ? e === 'float'
            ? (t.cssFloat = n)
            : (t[e] = ('' + n).trim())
          : (t[e] = n + 'px');
  }
  function pd(t, e, n) {
    if (e != null && typeof e != 'object') throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? t.setProperty(l, '') : l === 'float' ? (t.cssFloat = '') : (t[l] = ''));
      for (var r in e) ((l = e[r]), e.hasOwnProperty(r) && n[r] !== l && dd(t, r, l));
    } else for (var s in e) e.hasOwnProperty(s) && dd(t, s, e[s]);
  }
  function Gu(t) {
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
  var dy = new Map([
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
    py =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lr(t) {
    return py.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Pn() {}
  var Vu = null;
  function Xu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Bl = null,
    _l = null;
  function hd(t) {
    var e = Al(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ie] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (qu(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (e = n.name),
            n.type === 'radio' && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + vn('' + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[Ie] || null;
                if (!r) throw Error(u(90));
                qu(l, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name);
              }
            }
            for (e = 0; e < n.length; e++) ((l = n[e]), l.form === t.form && ud(l));
          }
          break t;
        case 'textarea':
          cd(t, n.value, n.defaultValue);
          break t;
        case 'select':
          ((e = n.value), e != null && Rl(t, !!n.multiple, e, !1));
      }
    }
  }
  var Qu = !1;
  function md(t, e, n) {
    if (Qu) return t(e, n);
    Qu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (((Qu = !1), (Bl !== null || _l !== null) && (Mo(), Bl && ((e = Bl), (t = _l), (_l = Bl = null), hd(e), t))))
        for (e = 0; e < t.length; e++) hd(t[e]);
    }
  }
  function Oi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[Ie] || null;
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
    Zu = !1;
  if (In)
    try {
      var Ri = {};
      (Object.defineProperty(Ri, 'passive', {
        get: function () {
          Zu = !0;
        },
      }),
        window.addEventListener('test', Ri, Ri),
        window.removeEventListener('test', Ri, Ri));
    } catch {
      Zu = !1;
    }
  var Ca = null,
    Ku = null,
    $r = null;
  function gd() {
    if ($r) return $r;
    var t,
      e = Ku,
      n = e.length,
      l,
      r = 'value' in Ca ? Ca.value : Ca.textContent,
      s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === r[s - l]; l++);
    return ($r = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function qr(t) {
    var e = t.keyCode;
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Yr() {
    return !0;
  }
  function yd() {
    return !1;
  }
  function tn(t) {
    function e(n, l, r, s, d) {
      ((this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = d),
        (this.currentTarget = null));
      for (var m in t) t.hasOwnProperty(m) && ((n = t[m]), (this[m] = n ? n(s) : s[m]));
      return (
        (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Yr : yd),
        (this.isPropagationStopped = yd),
        this
      );
    }
    return (
      x(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Yr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yr));
        },
        persist: function () {},
        isPersistent: Yr,
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
    Gr = tn(Ja),
    wi = x({}, Ja, { view: 0, detail: 0 }),
    hy = tn(wi),
    Ju,
    Fu,
    Bi,
    Vr = x({}, wi, {
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
      getModifierState: Pu,
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
                ? ((Ju = t.screenX - Bi.screenX), (Fu = t.screenY - Bi.screenY))
                : (Fu = Ju = 0),
              (Bi = t)),
            Ju);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Fu;
      },
    }),
    vd = tn(Vr),
    my = x({}, Vr, { dataTransfer: 0 }),
    gy = tn(my),
    yy = x({}, wi, { relatedTarget: 0 }),
    Wu = tn(yy),
    vy = x({}, Ja, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    by = tn(vy),
    Sy = x({}, Ja, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    xy = tn(Sy),
    Cy = x({}, Ja, { data: 0 }),
    bd = tn(Cy),
    Ty = {
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
    Ey = {
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
    zy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Ay(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = zy[t]) ? !!e[t] : !1;
  }
  function Pu() {
    return Ay;
  }
  var My = x({}, wi, {
      key: function (t) {
        if (t.key) {
          var e = Ty[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = qr(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? Ey[t.keyCode] || 'Unidentified'
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
      getModifierState: Pu,
      charCode: function (t) {
        return t.type === 'keypress' ? qr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress' ? qr(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
    }),
    Oy = tn(My),
    Ry = x({}, Vr, {
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
    Sd = tn(Ry),
    wy = x({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pu,
    }),
    By = tn(wy),
    _y = x({}, Ja, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dy = tn(_y),
    jy = x({}, Vr, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ny = tn(jy),
    Uy = x({}, Ja, { newState: 0, oldState: 0 }),
    Hy = tn(Uy),
    ky = [9, 13, 27, 32],
    Iu = In && 'CompositionEvent' in window,
    _i = null;
  In && 'documentMode' in document && (_i = document.documentMode);
  var Ly = In && 'TextEvent' in window && !_i,
    xd = In && (!Iu || (_i && 8 < _i && 11 >= _i)),
    Cd = ' ',
    Td = !1;
  function Ed(t, e) {
    switch (t) {
      case 'keyup':
        return ky.indexOf(e.keyCode) !== -1;
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
  function zd(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var Dl = !1;
  function $y(t, e) {
    switch (t) {
      case 'compositionend':
        return zd(e);
      case 'keypress':
        return e.which !== 32 ? null : ((Td = !0), Cd);
      case 'textInput':
        return ((t = e.data), t === Cd && Td ? null : t);
      default:
        return null;
    }
  }
  function qy(t, e) {
    if (Dl)
      return t === 'compositionend' || (!Iu && Ed(t, e)) ? ((t = gd()), ($r = Ku = Ca = null), (Dl = !1), t) : null;
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
        return xd && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var Yy = {
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
  function Ad(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!Yy[t.type] : e === 'textarea';
  }
  function Md(t, e, n, l) {
    (Bl ? (_l ? _l.push(l) : (_l = [l])) : (Bl = l),
      (e = jo(e, 'onChange')),
      0 < e.length && ((n = new Gr('onChange', 'change', null, n, l)), t.push({ event: n, listeners: e })));
  }
  var Di = null,
    ji = null;
  function Gy(t) {
    sh(t, 0);
  }
  function Xr(t) {
    var e = Mi(t);
    if (ud(e)) return t;
  }
  function Od(t, e) {
    if (t === 'change') return e;
  }
  var Rd = !1;
  if (In) {
    var ts;
    if (In) {
      var es = 'oninput' in document;
      if (!es) {
        var wd = document.createElement('div');
        (wd.setAttribute('oninput', 'return;'), (es = typeof wd.oninput == 'function'));
      }
      ts = es;
    } else ts = !1;
    Rd = ts && (!document.documentMode || 9 < document.documentMode);
  }
  function Bd() {
    Di && (Di.detachEvent('onpropertychange', _d), (ji = Di = null));
  }
  function _d(t) {
    if (t.propertyName === 'value' && Xr(ji)) {
      var e = [];
      (Md(e, ji, t, Xu(t)), md(Gy, e));
    }
  }
  function Vy(t, e, n) {
    t === 'focusin' ? (Bd(), (Di = e), (ji = n), Di.attachEvent('onpropertychange', _d)) : t === 'focusout' && Bd();
  }
  function Xy(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Xr(ji);
  }
  function Qy(t, e) {
    if (t === 'click') return Xr(e);
  }
  function Zy(t, e) {
    if (t === 'input' || t === 'change') return Xr(e);
  }
  function Ky(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var un = typeof Object.is == 'function' ? Object.is : Ky;
  function Ni(t, e) {
    if (un(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!qe.call(e, r) || !un(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Dd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function jd(t, e) {
    var n = Dd(t);
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
      n = Dd(n);
    }
  }
  function Nd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Nd(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Ud(t) {
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
  function ns(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var Jy = In && 'documentMode' in document && 11 >= document.documentMode,
    jl = null,
    as = null,
    Ui = null,
    ls = !1;
  function Hd(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ls ||
      jl == null ||
      jl !== kr(l) ||
      ((l = jl),
      'selectionStart' in l && ns(l)
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
        (l = jo(as, 'onSelect')),
        0 < l.length &&
          ((e = new Gr('onSelect', 'select', null, e, n)), t.push({ event: e, listeners: l }), (e.target = jl))));
  }
  function Fa(t, e) {
    var n = {};
    return ((n[t.toLowerCase()] = e.toLowerCase()), (n['Webkit' + t] = 'webkit' + e), (n['Moz' + t] = 'moz' + e), n);
  }
  var Nl = {
      animationend: Fa('Animation', 'AnimationEnd'),
      animationiteration: Fa('Animation', 'AnimationIteration'),
      animationstart: Fa('Animation', 'AnimationStart'),
      transitionrun: Fa('Transition', 'TransitionRun'),
      transitionstart: Fa('Transition', 'TransitionStart'),
      transitioncancel: Fa('Transition', 'TransitionCancel'),
      transitionend: Fa('Transition', 'TransitionEnd'),
    },
    is = {},
    kd = {};
  In &&
    ((kd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Nl.animationend.animation, delete Nl.animationiteration.animation, delete Nl.animationstart.animation),
    'TransitionEvent' in window || delete Nl.transitionend.transition);
  function Wa(t) {
    if (is[t]) return is[t];
    if (!Nl[t]) return t;
    var e = Nl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in kd) return (is[t] = e[n]);
    return t;
  }
  var Ld = Wa('animationend'),
    $d = Wa('animationiteration'),
    qd = Wa('animationstart'),
    Fy = Wa('transitionrun'),
    Wy = Wa('transitionstart'),
    Py = Wa('transitioncancel'),
    Yd = Wa('transitionend'),
    Gd = new Map(),
    rs =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  rs.push('scrollEnd');
  function _n(t, e) {
    (Gd.set(t, e), Ka(e, [t]));
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
    bn = [],
    Ul = 0,
    os = 0;
  function Zr() {
    for (var t = Ul, e = (os = Ul = 0); e < t; ) {
      var n = bn[e];
      bn[e++] = null;
      var l = bn[e];
      bn[e++] = null;
      var r = bn[e];
      bn[e++] = null;
      var s = bn[e];
      if (((bn[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)), (l.pending = r));
      }
      s !== 0 && Vd(n, r, s);
    }
  }
  function Kr(t, e, n, l) {
    ((bn[Ul++] = t),
      (bn[Ul++] = e),
      (bn[Ul++] = n),
      (bn[Ul++] = l),
      (os |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function us(t, e, n, l) {
    return (Kr(t, e, n, l), Jr(t));
  }
  function Pa(t, e) {
    return (Kr(t, null, null, e), Jr(t));
  }
  function Vd(t, e, n) {
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
          ((r = 31 - Ge(n)),
          (t = s.hiddenUpdates),
          (l = t[r]),
          l === null ? (t[r] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        s)
      : null;
  }
  function Jr(t) {
    if (50 < lr) throw ((lr = 0), (yc = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Hl = {};
  function Iy(t, e, n, l) {
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
  function sn(t, e, n, l) {
    return new Iy(t, e, n, l);
  }
  function ss(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ta(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = sn(t.tag, e, t.key, t.mode)),
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
  function Xd(t, e) {
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
    if (((l = t), typeof t == 'function')) ss(t) && (d = 1);
    else if (typeof t == 'string')
      d = lv(t, n, tt.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case ct:
          return ((t = sn(31, n, e, r)), (t.elementType = ct), (t.lanes = s), t);
        case T:
          return Ia(n.children, r, s, e);
        case H:
          ((d = 8), (r |= 24));
          break;
        case q:
          return ((t = sn(12, n, e, r | 2)), (t.elementType = q), (t.lanes = s), t);
        case j:
          return ((t = sn(13, n, e, r)), (t.elementType = j), (t.lanes = s), t);
        case X:
          return ((t = sn(19, n, e, r)), (t.elementType = X), (t.lanes = s), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case F:
                d = 10;
                break t;
              case W:
                d = 9;
                break t;
              case G:
                d = 11;
                break t;
              case J:
                d = 14;
                break t;
              case st:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (n = Error(u(130, t === null ? 'null' : typeof t, ''))), (l = null));
      }
    return ((e = sn(d, n, e, r)), (e.elementType = t), (e.type = l), (e.lanes = s), e);
  }
  function Ia(t, e, n, l) {
    return ((t = sn(7, t, l, e)), (t.lanes = n), t);
  }
  function cs(t, e, n) {
    return ((t = sn(6, t, null, e)), (t.lanes = n), t);
  }
  function Qd(t) {
    var e = sn(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function fs(t, e, n) {
    return (
      (e = sn(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
      e
    );
  }
  var Zd = new WeakMap();
  function Sn(t, e) {
    if (typeof t == 'object' && t !== null) {
      var n = Zd.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: ie(e) }), Zd.set(t, e), e);
    }
    return { value: t, source: e, stack: ie(e) };
  }
  var kl = [],
    Ll = 0,
    Wr = null,
    Hi = 0,
    xn = [],
    Cn = 0,
    Ta = null,
    $n = 1,
    qn = '';
  function ea(t, e) {
    ((kl[Ll++] = Hi), (kl[Ll++] = Wr), (Wr = t), (Hi = e));
  }
  function Kd(t, e, n) {
    ((xn[Cn++] = $n), (xn[Cn++] = qn), (xn[Cn++] = Ta), (Ta = t));
    var l = $n;
    t = qn;
    var r = 32 - Ge(l) - 1;
    ((l &= ~(1 << r)), (n += 1));
    var s = 32 - Ge(e) + r;
    if (30 < s) {
      var d = r - (r % 5);
      ((s = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        ($n = (1 << (32 - Ge(e) + r)) | (n << r) | l),
        (qn = s + t));
    } else (($n = (1 << s) | (n << r) | l), (qn = t));
  }
  function ds(t) {
    t.return !== null && (ea(t, 1), Kd(t, 1, 0));
  }
  function ps(t) {
    for (; t === Wr; ) ((Wr = kl[--Ll]), (kl[Ll] = null), (Hi = kl[--Ll]), (kl[Ll] = null));
    for (; t === Ta; )
      ((Ta = xn[--Cn]), (xn[Cn] = null), (qn = xn[--Cn]), (xn[Cn] = null), ($n = xn[--Cn]), (xn[Cn] = null));
  }
  function Jd(t, e) {
    ((xn[Cn++] = $n), (xn[Cn++] = qn), (xn[Cn++] = Ta), ($n = e.id), (qn = e.overflow), (Ta = t));
  }
  var _e = null,
    ae = null,
    Dt = !1,
    Ea = null,
    Tn = !1,
    hs = Error(u(519));
  function za(t) {
    var e = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
    throw (ki(Sn(e, t)), hs);
  }
  function Fd(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[Be] = t), (e[Ie] = l), n)) {
      case 'dialog':
        (Mt('cancel', e), Mt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Mt('load', e);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < rr.length; n++) Mt(rr[n], e);
        break;
      case 'source':
        Mt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Mt('error', e), Mt('load', e));
        break;
      case 'details':
        Mt('toggle', e);
        break;
      case 'input':
        (Mt('invalid', e), sd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        Mt('invalid', e);
        break;
      case 'textarea':
        (Mt('invalid', e), fd(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      e.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      ph(e.textContent, n)
        ? (l.popover != null && (Mt('beforetoggle', e), Mt('toggle', e)),
          l.onScroll != null && Mt('scroll', e),
          l.onScrollEnd != null && Mt('scrollend', e),
          l.onClick != null && (e.onclick = Pn),
          (e = !0))
        : (e = !1),
      e || za(t, !0));
  }
  function Wd(t) {
    for (_e = t.return; _e; )
      switch (_e.tag) {
        case 5:
        case 31:
        case 13:
          Tn = !1;
          return;
        case 27:
        case 3:
          Tn = !0;
          return;
        default:
          _e = _e.return;
      }
  }
  function $l(t) {
    if (t !== _e) return !1;
    if (!Dt) return (Wd(t), (Dt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) && ((n = t.type), (n = !(n !== 'form' && n !== 'button') || _c(t.type, t.memoizedProps))),
        (n = !n)),
      n && ae && za(t),
      Wd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(317));
      ae = Ch(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(317));
      ae = Ch(t);
    } else
      e === 27
        ? ((e = ae), La(t.type) ? ((t = Hc), (Hc = null), (ae = t)) : (ae = e))
        : (ae = _e ? zn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function tl() {
    ((ae = _e = null), (Dt = !1));
  }
  function ms() {
    var t = Ea;
    return (t !== null && (ln === null ? (ln = t) : ln.push.apply(ln, t), (Ea = null)), t);
  }
  function ki(t) {
    Ea === null ? (Ea = [t]) : Ea.push(t);
  }
  var gs = S(null),
    el = null,
    na = null;
  function Aa(t, e, n) {
    (I(gs, e._currentValue), (e._currentValue = n));
  }
  function aa(t) {
    ((t._currentValue = gs.current), k(gs));
  }
  function ys(t, e, n) {
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
  function vs(t, e, n, l) {
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
              ((s.lanes |= n), (m = s.alternate), m !== null && (m.lanes |= n), ys(s.return, n, t), l || (d = null));
              break t;
            }
          s = m.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(u(341));
        ((d.lanes |= n), (s = d.alternate), s !== null && (s.lanes |= n), ys(d, n, t), (d = null));
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
  function ql(t, e, n, l) {
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
          un(r.pendingProps.value, d.value) || (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (r === St.current) {
        if (((d = r.alternate), d === null)) throw Error(u(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(fr) : (t = [fr]));
      }
      r = r.return;
    }
    (t !== null && vs(e, t, n, l), (e.flags |= 262144));
  }
  function Pr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!un(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function nl(t) {
    ((el = t), (na = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function De(t) {
    return Pd(el, t);
  }
  function Ir(t, e) {
    return (el === null && nl(t), Pd(t, e));
  }
  function Pd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), na === null)) {
      if (t === null) throw Error(u(308));
      ((na = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else na = na.next = e;
    return n;
  }
  var t1 =
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
    e1 = a.unstable_scheduleCallback,
    n1 = a.unstable_NormalPriority,
    Se = { $$typeof: F, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function bs() {
    return { controller: new t1(), data: new Map(), refCount: 0 };
  }
  function Li(t) {
    (t.refCount--,
      t.refCount === 0 &&
        e1(n1, function () {
          t.controller.abort();
        }));
  }
  var $i = null,
    Ss = 0,
    Yl = 0,
    Gl = null;
  function a1(t, e) {
    if ($i === null) {
      var n = ($i = []);
      ((Ss = 0),
        (Yl = Tc()),
        (Gl = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Ss++, e.then(Id, Id), e);
  }
  function Id() {
    if (--Ss === 0 && $i !== null) {
      Gl !== null && (Gl.status = 'fulfilled');
      var t = $i;
      (($i = null), (Yl = 0), (Gl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function l1(t, e) {
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
  var t0 = z.S;
  z.S = function (t, e) {
    ((Hp = Oe()),
      typeof e == 'object' && e !== null && typeof e.then == 'function' && a1(t, e),
      t0 !== null && t0(t, e));
  };
  var al = S(null);
  function xs() {
    var t = al.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function to(t, e) {
    e === null ? I(al, al.current) : I(al, e.pool);
  }
  function e0() {
    var t = xs();
    return t === null ? null : { parent: Se._currentValue, pool: t };
  }
  var Vl = Error(u(460)),
    Cs = Error(u(474)),
    eo = Error(u(542)),
    no = { then: function () {} };
  function n0(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function a0(t, e, n) {
    switch (((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(Pn, Pn), (e = n)), e.status)) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), i0(t), t);
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
            throw ((t = e.reason), i0(t), t);
        }
        throw ((il = e), Vl);
    }
  }
  function ll(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((il = n), Vl) : n;
    }
  }
  var il = null;
  function l0() {
    if (il === null) throw Error(u(459));
    var t = il;
    return ((il = null), t);
  }
  function i0(t) {
    if (t === Vl || t === eo) throw Error(u(483));
  }
  var Xl = null,
    qi = 0;
  function ao(t) {
    var e = qi;
    return ((qi += 1), Xl === null && (Xl = []), a0(Xl, t, e));
  }
  function Yi(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function lo(t, e) {
    throw e.$$typeof === A
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(u(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)));
  }
  function r0(t) {
    function e(O, E) {
      if (t) {
        var w = O.deletions;
        w === null ? ((O.deletions = [E]), (O.flags |= 16)) : w.push(E);
      }
    }
    function n(O, E) {
      if (!t) return null;
      for (; E !== null; ) (e(O, E), (E = E.sibling));
      return null;
    }
    function l(O) {
      for (var E = new Map(); O !== null; ) (O.key !== null ? E.set(O.key, O) : E.set(O.index, O), (O = O.sibling));
      return E;
    }
    function r(O, E) {
      return ((O = ta(O, E)), (O.index = 0), (O.sibling = null), O);
    }
    function s(O, E, w) {
      return (
        (O.index = w),
        t
          ? ((w = O.alternate),
            w !== null ? ((w = w.index), w < E ? ((O.flags |= 67108866), E) : w) : ((O.flags |= 67108866), E))
          : ((O.flags |= 1048576), E)
      );
    }
    function d(O) {
      return (t && O.alternate === null && (O.flags |= 67108866), O);
    }
    function m(O, E, w, V) {
      return E === null || E.tag !== 6
        ? ((E = cs(w, O.mode, V)), (E.return = O), E)
        : ((E = r(E, w)), (E.return = O), E);
    }
    function C(O, E, w, V) {
      var dt = w.type;
      return dt === T
        ? L(O, E, w.props.children, V, w.key)
        : E !== null &&
            (E.elementType === dt || (typeof dt == 'object' && dt !== null && dt.$$typeof === st && ll(dt) === E.type))
          ? ((E = r(E, w.props)), Yi(E, w), (E.return = O), E)
          : ((E = Fr(w.type, w.key, w.props, null, O.mode, V)), Yi(E, w), (E.return = O), E);
    }
    function B(O, E, w, V) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== w.containerInfo ||
        E.stateNode.implementation !== w.implementation
        ? ((E = fs(w, O.mode, V)), (E.return = O), E)
        : ((E = r(E, w.children || [])), (E.return = O), E);
    }
    function L(O, E, w, V, dt) {
      return E === null || E.tag !== 7
        ? ((E = Ia(w, O.mode, V, dt)), (E.return = O), E)
        : ((E = r(E, w)), (E.return = O), E);
    }
    function Z(O, E, w) {
      if ((typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint')
        return ((E = cs('' + E, O.mode, w)), (E.return = O), E);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case _:
            return ((w = Fr(E.type, E.key, E.props, null, O.mode, w)), Yi(w, E), (w.return = O), w);
          case M:
            return ((E = fs(E, O.mode, w)), (E.return = O), E);
          case st:
            return ((E = ll(E)), Z(O, E, w));
        }
        if (nt(E) || v(E)) return ((E = Ia(E, O.mode, w, null)), (E.return = O), E);
        if (typeof E.then == 'function') return Z(O, ao(E), w);
        if (E.$$typeof === F) return Z(O, Ir(O, E), w);
        lo(O, E);
      }
      return null;
    }
    function D(O, E, w, V) {
      var dt = E !== null ? E.key : null;
      if ((typeof w == 'string' && w !== '') || typeof w == 'number' || typeof w == 'bigint')
        return dt !== null ? null : m(O, E, '' + w, V);
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case _:
            return w.key === dt ? C(O, E, w, V) : null;
          case M:
            return w.key === dt ? B(O, E, w, V) : null;
          case st:
            return ((w = ll(w)), D(O, E, w, V));
        }
        if (nt(w) || v(w)) return dt !== null ? null : L(O, E, w, V, null);
        if (typeof w.then == 'function') return D(O, E, ao(w), V);
        if (w.$$typeof === F) return D(O, E, Ir(O, w), V);
        lo(O, w);
      }
      return null;
    }
    function U(O, E, w, V, dt) {
      if ((typeof V == 'string' && V !== '') || typeof V == 'number' || typeof V == 'bigint')
        return ((O = O.get(w) || null), m(E, O, '' + V, dt));
      if (typeof V == 'object' && V !== null) {
        switch (V.$$typeof) {
          case _:
            return ((O = O.get(V.key === null ? w : V.key) || null), C(E, O, V, dt));
          case M:
            return ((O = O.get(V.key === null ? w : V.key) || null), B(E, O, V, dt));
          case st:
            return ((V = ll(V)), U(O, E, w, V, dt));
        }
        if (nt(V) || v(V)) return ((O = O.get(w) || null), L(E, O, V, dt, null));
        if (typeof V.then == 'function') return U(O, E, w, ao(V), dt);
        if (V.$$typeof === F) return U(O, E, w, Ir(E, V), dt);
        lo(E, V);
      }
      return null;
    }
    function rt(O, E, w, V) {
      for (var dt = null, Ht = null, ut = E, Ct = (E = 0), Bt = null; ut !== null && Ct < w.length; Ct++) {
        ut.index > Ct ? ((Bt = ut), (ut = null)) : (Bt = ut.sibling);
        var kt = D(O, ut, w[Ct], V);
        if (kt === null) {
          ut === null && (ut = Bt);
          break;
        }
        (t && ut && kt.alternate === null && e(O, ut),
          (E = s(kt, E, Ct)),
          Ht === null ? (dt = kt) : (Ht.sibling = kt),
          (Ht = kt),
          (ut = Bt));
      }
      if (Ct === w.length) return (n(O, ut), Dt && ea(O, Ct), dt);
      if (ut === null) {
        for (; Ct < w.length; Ct++)
          ((ut = Z(O, w[Ct], V)),
            ut !== null && ((E = s(ut, E, Ct)), Ht === null ? (dt = ut) : (Ht.sibling = ut), (Ht = ut)));
        return (Dt && ea(O, Ct), dt);
      }
      for (ut = l(ut); Ct < w.length; Ct++)
        ((Bt = U(ut, O, Ct, w[Ct], V)),
          Bt !== null &&
            (t && Bt.alternate !== null && ut.delete(Bt.key === null ? Ct : Bt.key),
            (E = s(Bt, E, Ct)),
            Ht === null ? (dt = Bt) : (Ht.sibling = Bt),
            (Ht = Bt)));
      return (
        t &&
          ut.forEach(function (Va) {
            return e(O, Va);
          }),
        Dt && ea(O, Ct),
        dt
      );
    }
    function ht(O, E, w, V) {
      if (w == null) throw Error(u(151));
      for (
        var dt = null, Ht = null, ut = E, Ct = (E = 0), Bt = null, kt = w.next();
        ut !== null && !kt.done;
        Ct++, kt = w.next()
      ) {
        ut.index > Ct ? ((Bt = ut), (ut = null)) : (Bt = ut.sibling);
        var Va = D(O, ut, kt.value, V);
        if (Va === null) {
          ut === null && (ut = Bt);
          break;
        }
        (t && ut && Va.alternate === null && e(O, ut),
          (E = s(Va, E, Ct)),
          Ht === null ? (dt = Va) : (Ht.sibling = Va),
          (Ht = Va),
          (ut = Bt));
      }
      if (kt.done) return (n(O, ut), Dt && ea(O, Ct), dt);
      if (ut === null) {
        for (; !kt.done; Ct++, kt = w.next())
          ((kt = Z(O, kt.value, V)),
            kt !== null && ((E = s(kt, E, Ct)), Ht === null ? (dt = kt) : (Ht.sibling = kt), (Ht = kt)));
        return (Dt && ea(O, Ct), dt);
      }
      for (ut = l(ut); !kt.done; Ct++, kt = w.next())
        ((kt = U(ut, O, Ct, kt.value, V)),
          kt !== null &&
            (t && kt.alternate !== null && ut.delete(kt.key === null ? Ct : kt.key),
            (E = s(kt, E, Ct)),
            Ht === null ? (dt = kt) : (Ht.sibling = kt),
            (Ht = kt)));
      return (
        t &&
          ut.forEach(function (mv) {
            return e(O, mv);
          }),
        Dt && ea(O, Ct),
        dt
      );
    }
    function Ft(O, E, w, V) {
      if (
        (typeof w == 'object' && w !== null && w.type === T && w.key === null && (w = w.props.children),
        typeof w == 'object' && w !== null)
      ) {
        switch (w.$$typeof) {
          case _:
            t: {
              for (var dt = w.key; E !== null; ) {
                if (E.key === dt) {
                  if (((dt = w.type), dt === T)) {
                    if (E.tag === 7) {
                      (n(O, E.sibling), (V = r(E, w.props.children)), (V.return = O), (O = V));
                      break t;
                    }
                  } else if (
                    E.elementType === dt ||
                    (typeof dt == 'object' && dt !== null && dt.$$typeof === st && ll(dt) === E.type)
                  ) {
                    (n(O, E.sibling), (V = r(E, w.props)), Yi(V, w), (V.return = O), (O = V));
                    break t;
                  }
                  n(O, E);
                  break;
                } else e(O, E);
                E = E.sibling;
              }
              w.type === T
                ? ((V = Ia(w.props.children, O.mode, V, w.key)), (V.return = O), (O = V))
                : ((V = Fr(w.type, w.key, w.props, null, O.mode, V)), Yi(V, w), (V.return = O), (O = V));
            }
            return d(O);
          case M:
            t: {
              for (dt = w.key; E !== null; ) {
                if (E.key === dt)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === w.containerInfo &&
                    E.stateNode.implementation === w.implementation
                  ) {
                    (n(O, E.sibling), (V = r(E, w.children || [])), (V.return = O), (O = V));
                    break t;
                  } else {
                    n(O, E);
                    break;
                  }
                else e(O, E);
                E = E.sibling;
              }
              ((V = fs(w, O.mode, V)), (V.return = O), (O = V));
            }
            return d(O);
          case st:
            return ((w = ll(w)), Ft(O, E, w, V));
        }
        if (nt(w)) return rt(O, E, w, V);
        if (v(w)) {
          if (((dt = v(w)), typeof dt != 'function')) throw Error(u(150));
          return ((w = dt.call(w)), ht(O, E, w, V));
        }
        if (typeof w.then == 'function') return Ft(O, E, ao(w), V);
        if (w.$$typeof === F) return Ft(O, E, Ir(O, w), V);
        lo(O, w);
      }
      return (typeof w == 'string' && w !== '') || typeof w == 'number' || typeof w == 'bigint'
        ? ((w = '' + w),
          E !== null && E.tag === 6
            ? (n(O, E.sibling), (V = r(E, w)), (V.return = O), (O = V))
            : (n(O, E), (V = cs(w, O.mode, V)), (V.return = O), (O = V)),
          d(O))
        : n(O, E);
    }
    return function (O, E, w, V) {
      try {
        qi = 0;
        var dt = Ft(O, E, w, V);
        return ((Xl = null), dt);
      } catch (ut) {
        if (ut === Vl || ut === eo) throw ut;
        var Ht = sn(29, ut, null, O.mode);
        return ((Ht.lanes = V), (Ht.return = O), Ht);
      } finally {
      }
    };
  }
  var rl = r0(!0),
    o0 = r0(!1),
    Ma = !1;
  function Ts(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Es(t, e) {
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
    if (((l = l.shared), (Lt & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = Jr(t)),
        Vd(t, null, n),
        e
      );
    }
    return (Kr(t, l, e, n), Jr(t));
  }
  function Gi(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Pf(t, n));
    }
  }
  function zs(t, e) {
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
  var As = !1;
  function Vi() {
    if (As) {
      var t = Gl;
      if (t !== null) throw t;
    }
  }
  function Xi(t, e, n, l) {
    As = !1;
    var r = t.updateQueue;
    Ma = !1;
    var s = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      m = r.shared.pending;
    if (m !== null) {
      r.shared.pending = null;
      var C = m,
        B = C.next;
      ((C.next = null), d === null ? (s = B) : (d.next = B), (d = C));
      var L = t.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (m = L.lastBaseUpdate),
        m !== d && (m === null ? (L.firstBaseUpdate = B) : (m.next = B), (L.lastBaseUpdate = C)));
    }
    if (s !== null) {
      var Z = r.baseState;
      ((d = 0), (L = B = C = null), (m = s));
      do {
        var D = m.lane & -536870913,
          U = D !== m.lane;
        if (U ? (wt & D) === D : (l & D) === D) {
          (D !== 0 && D === Yl && (As = !0),
            L !== null && (L = L.next = { lane: 0, tag: m.tag, payload: m.payload, callback: null, next: null }));
          t: {
            var rt = t,
              ht = m;
            D = e;
            var Ft = n;
            switch (ht.tag) {
              case 1:
                if (((rt = ht.payload), typeof rt == 'function')) {
                  Z = rt.call(Ft, Z, D);
                  break t;
                }
                Z = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (((rt = ht.payload), (D = typeof rt == 'function' ? rt.call(Ft, Z, D) : rt), D == null)) break t;
                Z = x({}, Z, D);
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
            L === null ? ((B = L = U), (C = Z)) : (L = L.next = U),
            (d |= D));
        if (((m = m.next), m === null)) {
          if (((m = r.shared.pending), m === null)) break;
          ((U = m), (m = U.next), (U.next = null), (r.lastBaseUpdate = U), (r.shared.pending = null));
        }
      } while (!0);
      (L === null && (C = Z),
        (r.baseState = C),
        (r.firstBaseUpdate = B),
        (r.lastBaseUpdate = L),
        s === null && (r.shared.lanes = 0),
        (ja |= d),
        (t.lanes = d),
        (t.memoizedState = Z));
    }
  }
  function u0(t, e) {
    if (typeof t != 'function') throw Error(u(191, t));
    t.call(e);
  }
  function s0(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) u0(n[t], e);
  }
  var Ql = S(null),
    io = S(0);
  function c0(t, e) {
    ((t = da), I(io, t), I(Ql, e), (da = t | e.baseLanes));
  }
  function Ms() {
    (I(io, da), I(Ql, Ql.current));
  }
  function Os() {
    ((da = io.current), k(Ql), k(io));
  }
  var cn = S(null),
    En = null;
  function wa(t) {
    var e = t.alternate;
    (I(ye, ye.current & 1),
      I(cn, t),
      En === null && (e === null || Ql.current !== null || e.memoizedState !== null) && (En = t));
  }
  function Rs(t) {
    (I(ye, ye.current), I(cn, t), En === null && (En = t));
  }
  function f0(t) {
    t.tag === 22 ? (I(ye, ye.current), I(cn, t), En === null && (En = t)) : Ba();
  }
  function Ba() {
    (I(ye, ye.current), I(cn, cn.current));
  }
  function fn(t) {
    (k(cn), En === t && (En = null), k(ye));
  }
  var ye = S(0);
  function ro(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Nc(n) || Uc(n))) return e;
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
    bt = null,
    Kt = null,
    xe = null,
    oo = !1,
    Zl = !1,
    ol = !1,
    uo = 0,
    Qi = 0,
    Kl = null,
    i1 = 0;
  function fe() {
    throw Error(u(321));
  }
  function ws(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!un(t[n], e[n])) return !1;
    return !0;
  }
  function Bs(t, e, n, l, r, s) {
    return (
      (la = s),
      (bt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? K0 : Qs),
      (ol = !1),
      (s = n(l, r)),
      (ol = !1),
      Zl && (s = p0(e, n, l, r)),
      d0(t),
      s
    );
  }
  function d0(t) {
    z.H = Ji;
    var e = Kt !== null && Kt.next !== null;
    if (((la = 0), (xe = Kt = bt = null), (oo = !1), (Qi = 0), (Kl = null), e)) throw Error(u(300));
    t === null || Ce || ((t = t.dependencies), t !== null && Pr(t) && (Ce = !0));
  }
  function p0(t, e, n, l) {
    bt = t;
    var r = 0;
    do {
      if ((Zl && (Kl = null), (Qi = 0), (Zl = !1), 25 <= r)) throw Error(u(301));
      if (((r += 1), (xe = Kt = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        ((s.lastEffect = null), (s.events = null), (s.stores = null), s.memoCache != null && (s.memoCache.index = 0));
      }
      ((z.H = J0), (s = e(n, l)));
    } while (Zl);
    return s;
  }
  function r1() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? Zi(e) : e),
      (t = t.useState()[0]),
      (Kt !== null ? Kt.memoizedState : null) !== t && (bt.flags |= 1024),
      e
    );
  }
  function _s() {
    var t = uo !== 0;
    return ((uo = 0), t);
  }
  function Ds(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function js(t) {
    if (oo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      oo = !1;
    }
    ((la = 0), (xe = Kt = bt = null), (Zl = !1), (Qi = uo = 0), (Kl = null));
  }
  function Ve() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (xe === null ? (bt.memoizedState = xe = t) : (xe = xe.next = t), xe);
  }
  function ve() {
    if (Kt === null) {
      var t = bt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Kt.next;
    var e = xe === null ? bt.memoizedState : xe.next;
    if (e !== null) ((xe = e), (Kt = t));
    else {
      if (t === null) throw bt.alternate === null ? Error(u(467)) : Error(u(310));
      ((Kt = t),
        (t = {
          memoizedState: Kt.memoizedState,
          baseState: Kt.baseState,
          baseQueue: Kt.baseQueue,
          queue: Kt.queue,
          next: null,
        }),
        xe === null ? (bt.memoizedState = xe = t) : (xe = xe.next = t));
    }
    return xe;
  }
  function so() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zi(t) {
    var e = Qi;
    return (
      (Qi += 1),
      Kl === null && (Kl = []),
      (t = a0(Kl, t, e)),
      (e = bt),
      (xe === null ? e.memoizedState : xe.next) === null &&
        ((e = e.alternate), (z.H = e === null || e.memoizedState === null ? K0 : Qs)),
      t
    );
  }
  function co(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Zi(t);
      if (t.$$typeof === F) return De(t);
    }
    throw Error(u(438, String(t)));
  }
  function Ns(t) {
    var e = null,
      n = bt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = bt.alternate;
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
      n === null && ((n = so()), (bt.updateQueue = n)),
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
    var e = ve();
    return Us(e, Kt, t);
  }
  function Us(t, e, n) {
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
        B = e,
        L = !1;
      do {
        var Z = B.lane & -536870913;
        if (Z !== B.lane ? (wt & Z) === Z : (la & Z) === Z) {
          var D = B.revertLane;
          if (D === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              Z === Yl && (L = !0));
          else if ((la & D) === D) {
            ((B = B.next), D === Yl && (L = !0));
            continue;
          } else
            ((Z = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              C === null ? ((m = C = Z), (d = s)) : (C = C.next = Z),
              (bt.lanes |= D),
              (ja |= D));
          ((Z = B.action), ol && n(s, Z), (s = B.hasEagerState ? B.eagerState : n(s, Z)));
        } else
          ((D = {
            lane: Z,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            C === null ? ((m = C = D), (d = s)) : (C = C.next = D),
            (bt.lanes |= Z),
            (ja |= Z));
        B = B.next;
      } while (B !== null && B !== e);
      if ((C === null ? (d = s) : (C.next = m), !un(s, t.memoizedState) && ((Ce = !0), L && ((n = Gl), n !== null))))
        throw n;
      ((t.memoizedState = s), (t.baseState = d), (t.baseQueue = C), (l.lastRenderedState = s));
    }
    return (r === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Hs(t) {
    var e = ve(),
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
      (un(s, e.memoizedState) || (Ce = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, l];
  }
  function h0(t, e, n) {
    var l = bt,
      r = ve(),
      s = Dt;
    if (s) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var d = !un((Kt || r).memoizedState, n);
    if (
      (d && ((r.memoizedState = n), (Ce = !0)),
      (r = r.queue),
      $s(y0.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (xe !== null && xe.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Jl(9, { destroy: void 0 }, g0.bind(null, l, r, n, e), null), Pt === null))
        throw Error(u(349));
      s || (la & 127) !== 0 || m0(l, e, n);
    }
    return n;
  }
  function m0(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = bt.updateQueue),
      e === null
        ? ((e = so()), (bt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function g0(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), v0(e) && b0(t));
  }
  function y0(t, e, n) {
    return n(function () {
      v0(e) && b0(t);
    });
  }
  function v0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !un(t, n);
    } catch {
      return !0;
    }
  }
  function b0(t) {
    var e = Pa(t, 2);
    e !== null && rn(e, t, 2);
  }
  function ks(t) {
    var e = Ve();
    if (typeof t == 'function') {
      var n = t;
      if (((t = n()), ol)) {
        Pe(!0);
        try {
          n();
        } finally {
          Pe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: t }),
      e
    );
  }
  function S0(t, e, n, l) {
    return ((t.baseState = n), Us(t, Kt, typeof l == 'function' ? l : ia));
  }
  function o1(t, e, n, l, r) {
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
        n === null ? ((s.next = e.pending = s), x0(e, s)) : ((s.next = n.next), (e.pending = n.next = s)));
    }
  }
  function x0(t, e) {
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
        (C !== null && C(d, m), C0(t, e, m));
      } catch (B) {
        Ls(t, e, B);
      } finally {
        (s !== null && d.types !== null && (s.types = d.types), (z.T = s));
      }
    } else
      try {
        ((s = n(r, l)), C0(t, e, s));
      } catch (B) {
        Ls(t, e, B);
      }
  }
  function C0(t, e, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            T0(t, e, l);
          },
          function (l) {
            return Ls(t, e, l);
          }
        )
      : T0(t, e, n);
  }
  function T0(t, e, n) {
    ((e.status = 'fulfilled'),
      (e.value = n),
      E0(e),
      (t.state = n),
      (e = t.pending),
      e !== null && ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), x0(t, n))));
  }
  function Ls(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = 'rejected'), (e.reason = n), E0(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function E0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function z0(t, e) {
    return e;
  }
  function A0(t, e) {
    if (Dt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var l = bt;
          if (Dt) {
            if (ae) {
              e: {
                for (var r = ae, s = Tn; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break e;
                  }
                  if (((r = zn(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((s = r.data), (r = s === 'F!' || s === 'F' ? r : null));
              }
              if (r) {
                ((ae = zn(r.nextSibling)), (l = r.data === 'F!'));
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
      (n = Ve()),
      (n.memoizedState = n.baseState = e),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: z0, lastRenderedState: e }),
      (n.queue = l),
      (n = X0.bind(null, bt, l)),
      (l.dispatch = n),
      (l = ks(!1)),
      (s = Xs.bind(null, bt, !1, l.queue)),
      (l = Ve()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = o1.bind(null, bt, r, s, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function M0(t) {
    var e = ve();
    return O0(e, Kt, t);
  }
  function O0(t, e, n) {
    if (((e = Us(t, e, z0)[0]), (t = fo(ia)[0]), typeof e == 'object' && e !== null && typeof e.then == 'function'))
      try {
        var l = Zi(e);
      } catch (d) {
        throw d === Vl ? eo : d;
      }
    else l = e;
    e = ve();
    var r = e.queue,
      s = r.dispatch;
    return (
      n !== e.memoizedState && ((bt.flags |= 2048), Jl(9, { destroy: void 0 }, u1.bind(null, r, n), null)),
      [l, s, t]
    );
  }
  function u1(t, e) {
    t.action = e;
  }
  function R0(t) {
    var e = ve(),
      n = Kt;
    if (n !== null) return O0(e, n, t);
    (ve(), (e = e.memoizedState), (n = ve()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function Jl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = bt.updateQueue),
      e === null && ((e = so()), (bt.updateQueue = e)),
      (n = e.lastEffect),
      n === null ? (e.lastEffect = t.next = t) : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function w0() {
    return ve().memoizedState;
  }
  function po(t, e, n, l) {
    var r = Ve();
    ((bt.flags |= t), (r.memoizedState = Jl(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function ho(t, e, n, l) {
    var r = ve();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    Kt !== null && l !== null && ws(l, Kt.memoizedState.deps)
      ? (r.memoizedState = Jl(e, s, n, l))
      : ((bt.flags |= t), (r.memoizedState = Jl(1 | e, s, n, l)));
  }
  function B0(t, e) {
    po(8390656, 8, t, e);
  }
  function $s(t, e) {
    ho(2048, 8, t, e);
  }
  function s1(t) {
    bt.flags |= 4;
    var e = bt.updateQueue;
    if (e === null) ((e = so()), (bt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function _0(t) {
    var e = ve().memoizedState;
    return (
      s1({ ref: e, nextImpl: t }),
      function () {
        if ((Lt & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function D0(t, e) {
    return ho(4, 2, t, e);
  }
  function j0(t, e) {
    return ho(4, 4, t, e);
  }
  function N0(t, e) {
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
  function U0(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ho(4, 4, N0.bind(null, e, t), n));
  }
  function qs() {}
  function H0(t, e) {
    var n = ve();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && ws(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function k0(t, e) {
    var n = ve();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && ws(e, l[1])) return l[0];
    if (((l = t()), ol)) {
      Pe(!0);
      try {
        t();
      } finally {
        Pe(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function Ys(t, e, n) {
    return n === void 0 || ((la & 1073741824) !== 0 && (wt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Lp()), (bt.lanes |= t), (ja |= t), n);
  }
  function L0(t, e, n, l) {
    return un(n, e)
      ? n
      : Ql.current !== null
        ? ((t = Ys(t, n, l)), un(t, e) || (Ce = !0), t)
        : (la & 42) === 0 || ((la & 1073741824) !== 0 && (wt & 261930) === 0)
          ? ((Ce = !0), (t.memoizedState = n))
          : ((t = Lp()), (bt.lanes |= t), (ja |= t), e);
  }
  function $0(t, e, n, l, r) {
    var s = Y.p;
    Y.p = s !== 0 && 8 > s ? s : 8;
    var d = z.T,
      m = {};
    ((z.T = m), Xs(t, !1, e, n));
    try {
      var C = r(),
        B = z.S;
      if ((B !== null && B(m, C), C !== null && typeof C == 'object' && typeof C.then == 'function')) {
        var L = l1(C, l);
        Ki(t, e, L, hn(t));
      } else Ki(t, e, l, hn(t));
    } catch (Z) {
      Ki(t, e, { then: function () {}, status: 'rejected', reason: Z }, hn());
    } finally {
      ((Y.p = s), d !== null && m.types !== null && (d.types = m.types), (z.T = d));
    }
  }
  function c1() {}
  function Gs(t, e, n, l) {
    if (t.tag !== 5) throw Error(u(476));
    var r = q0(t).queue;
    $0(
      t,
      r,
      e,
      K,
      n === null
        ? c1
        : function () {
            return (Y0(t), n(l));
          }
    );
  }
  function q0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ia, lastRenderedState: K },
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
  function Y0(t) {
    var e = q0(t);
    (e.next === null && (e = t.alternate.memoizedState), Ki(t, e.next.queue, {}, hn()));
  }
  function Vs() {
    return De(fr);
  }
  function G0() {
    return ve().memoizedState;
  }
  function V0() {
    return ve().memoizedState;
  }
  function f1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = hn();
          t = Oa(n);
          var l = Ra(e, t, n);
          (l !== null && (rn(l, e, n), Gi(l, e, n)), (e = { cache: bs() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function d1(t, e, n) {
    var l = hn();
    ((n = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
      mo(t) ? Q0(e, n) : ((n = us(t, e, n, l)), n !== null && (rn(n, t, l), Z0(n, e, l))));
  }
  function X0(t, e, n) {
    var l = hn();
    Ki(t, e, n, l);
  }
  function Ki(t, e, n, l) {
    var r = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mo(t)) Q0(e, r);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
        try {
          var d = e.lastRenderedState,
            m = s(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = m), un(m, d))) return (Kr(t, e, r, 0), Pt === null && Zr(), !1);
        } catch {
        } finally {
        }
      if (((n = us(t, e, r, l)), n !== null)) return (rn(n, t, l), Z0(n, e, l), !0);
    }
    return !1;
  }
  function Xs(t, e, n, l) {
    if (
      ((l = { lane: 2, revertLane: Tc(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
      mo(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = us(t, n, l, 2)), e !== null && rn(e, t, 2));
  }
  function mo(t) {
    var e = t.alternate;
    return t === bt || (e !== null && e === bt);
  }
  function Q0(t, e) {
    Zl = oo = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function Z0(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Pf(t, n));
    }
  }
  var Ji = {
    readContext: De,
    use: co,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useLayoutEffect: fe,
    useInsertionEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useSyncExternalStore: fe,
    useId: fe,
    useHostTransitionStatus: fe,
    useFormState: fe,
    useActionState: fe,
    useOptimistic: fe,
    useMemoCache: fe,
    useCacheRefresh: fe,
  };
  Ji.useEffectEvent = fe;
  var K0 = {
      readContext: De,
      use: co,
      useCallback: function (t, e) {
        return ((Ve().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: De,
      useEffect: B0,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), po(4194308, 4, N0.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return po(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        po(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = Ve();
        e = e === void 0 ? null : e;
        var l = t();
        if (ol) {
          Pe(!0);
          try {
            t();
          } finally {
            Pe(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = Ve();
        if (n !== void 0) {
          var r = n(e);
          if (ol) {
            Pe(!0);
            try {
              n(e);
            } finally {
              Pe(!1);
            }
          }
        } else r = e;
        return (
          (l.memoizedState = l.baseState = r),
          (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }),
          (l.queue = t),
          (t = t.dispatch = d1.bind(null, bt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ve();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = ks(t);
        var e = t.queue,
          n = X0.bind(null, bt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: qs,
      useDeferredValue: function (t, e) {
        var n = Ve();
        return Ys(n, t, e);
      },
      useTransition: function () {
        var t = ks(!1);
        return ((t = $0.bind(null, bt, t.queue, !0, !1)), (Ve().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var l = bt,
          r = Ve();
        if (Dt) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Pt === null)) throw Error(u(349));
          (wt & 127) !== 0 || m0(l, e, n);
        }
        r.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (r.queue = s),
          B0(y0.bind(null, l, s, t), [t]),
          (l.flags |= 2048),
          Jl(9, { destroy: void 0 }, g0.bind(null, l, s, n, e), null),
          n
        );
      },
      useId: function () {
        var t = Ve(),
          e = Pt.identifierPrefix;
        if (Dt) {
          var n = qn,
            l = $n;
          ((n = (l & ~(1 << (32 - Ge(l) - 1))).toString(32) + n),
            (e = '_' + e + 'R_' + n),
            (n = uo++),
            0 < n && (e += 'H' + n.toString(32)),
            (e += '_'));
        } else ((n = i1++), (e = '_' + e + 'r_' + n.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Vs,
      useFormState: A0,
      useActionState: A0,
      useOptimistic: function (t) {
        var e = Ve();
        e.memoizedState = e.baseState = t;
        var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = n), (e = Xs.bind(null, bt, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: Ns,
      useCacheRefresh: function () {
        return (Ve().memoizedState = f1.bind(null, bt));
      },
      useEffectEvent: function (t) {
        var e = Ve(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Lt & 2) !== 0) throw Error(u(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Qs = {
      readContext: De,
      use: co,
      useCallback: H0,
      useContext: De,
      useEffect: $s,
      useImperativeHandle: U0,
      useInsertionEffect: D0,
      useLayoutEffect: j0,
      useMemo: k0,
      useReducer: fo,
      useRef: w0,
      useState: function () {
        return fo(ia);
      },
      useDebugValue: qs,
      useDeferredValue: function (t, e) {
        var n = ve();
        return L0(n, Kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = fo(ia)[0],
          e = ve().memoizedState;
        return [typeof t == 'boolean' ? t : Zi(t), e];
      },
      useSyncExternalStore: h0,
      useId: G0,
      useHostTransitionStatus: Vs,
      useFormState: M0,
      useActionState: M0,
      useOptimistic: function (t, e) {
        var n = ve();
        return S0(n, Kt, t, e);
      },
      useMemoCache: Ns,
      useCacheRefresh: V0,
    };
  Qs.useEffectEvent = _0;
  var J0 = {
    readContext: De,
    use: co,
    useCallback: H0,
    useContext: De,
    useEffect: $s,
    useImperativeHandle: U0,
    useInsertionEffect: D0,
    useLayoutEffect: j0,
    useMemo: k0,
    useReducer: Hs,
    useRef: w0,
    useState: function () {
      return Hs(ia);
    },
    useDebugValue: qs,
    useDeferredValue: function (t, e) {
      var n = ve();
      return Kt === null ? Ys(n, t, e) : L0(n, Kt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Hs(ia)[0],
        e = ve().memoizedState;
      return [typeof t == 'boolean' ? t : Zi(t), e];
    },
    useSyncExternalStore: h0,
    useId: G0,
    useHostTransitionStatus: Vs,
    useFormState: R0,
    useActionState: R0,
    useOptimistic: function (t, e) {
      var n = ve();
      return Kt !== null ? S0(n, Kt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Ns,
    useCacheRefresh: V0,
  };
  J0.useEffectEvent = _0;
  function Zs(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : x({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Ks = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = hn(),
        r = Oa(l);
      ((r.payload = e), n != null && (r.callback = n), (e = Ra(t, r, l)), e !== null && (rn(e, t, l), Gi(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = hn(),
        r = Oa(l);
      ((r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Ra(t, r, l)),
        e !== null && (rn(e, t, l), Gi(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = hn(),
        l = Oa(n);
      ((l.tag = 2), e != null && (l.callback = e), (e = Ra(t, l, n)), e !== null && (rn(e, t, n), Gi(e, t, n)));
    },
  };
  function F0(t, e, n, l, r, s, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, s, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ni(n, l) || !Ni(r, s)
          : !0
    );
  }
  function W0(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' && e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && Ks.enqueueReplaceState(e, e.state, null));
  }
  function ul(t, e) {
    var n = e;
    if ('ref' in e) {
      n = {};
      for (var l in e) l !== 'ref' && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = x({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function P0(t) {
    Qr(t);
  }
  function I0(t) {
    console.error(t);
  }
  function tp(t) {
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
  function ep(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Js(t, e, n) {
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
  function np(t) {
    return ((t = Oa(t)), (t.tag = 3), t);
  }
  function ap(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = l.value;
      ((t.payload = function () {
        return r(s);
      }),
        (t.callback = function () {
          ep(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == 'function' &&
      (t.callback = function () {
        (ep(e, n, l), typeof r != 'function' && (Na === null ? (Na = new Set([this])) : Na.add(this)));
        var m = l.stack;
        this.componentDidCatch(l.value, { componentStack: m !== null ? m : '' });
      });
  }
  function p1(t, e, n, l, r) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((e = n.alternate), e !== null && ql(e, n, r, !0), (n = cn.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              En === null ? Oo() : n.alternate === null && de === 0 && (de = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === no
                ? (n.flags |= 16384)
                : ((e = n.updateQueue), e === null ? (n.updateQueue = new Set([l])) : e.add(l), Sc(t, l, r)),
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
                  Sc(t, l, r)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (Sc(t, l, r), Oo(), !1);
    }
    if (Dt)
      return (
        (e = cn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== hs && ((t = Error(u(422), { cause: l })), ki(Sn(t, n))))
          : (l !== hs && ((e = Error(u(423), { cause: l })), ki(Sn(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = Sn(l, n)),
            (r = Js(t.stateNode, l, r)),
            zs(t, r),
            de !== 4 && (de = 2)),
        !1
      );
    var s = Error(u(520), { cause: l });
    if (((s = Sn(s, n)), ar === null ? (ar = [s]) : ar.push(s), de !== 4 && (de = 2), e === null)) return !0;
    ((l = Sn(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return ((n.flags |= 65536), (t = r & -r), (n.lanes |= t), (t = Js(n.stateNode, l, t)), zs(n, t), !1);
        case 1:
          if (
            ((e = n.type),
            (s = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (s !== null && typeof s.componentDidCatch == 'function' && (Na === null || !Na.has(s)))))
          )
            return ((n.flags |= 65536), (r &= -r), (n.lanes |= r), (r = np(r)), ap(r, t, n, l), zs(n, r), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Fs = Error(u(461)),
    Ce = !1;
  function je(t, e, n, l) {
    e.child = t === null ? o0(e, null, n, l) : rl(e, t.child, n, l);
  }
  function lp(t, e, n, l, r) {
    n = n.render;
    var s = e.ref;
    if ('ref' in l) {
      var d = {};
      for (var m in l) m !== 'ref' && (d[m] = l[m]);
    } else d = l;
    return (
      nl(e),
      (l = Bs(t, e, n, d, s, r)),
      (m = _s()),
      t !== null && !Ce ? (Ds(t, e, r), ra(t, e, r)) : (Dt && m && ds(e), (e.flags |= 1), je(t, e, l, r), e.child)
    );
  }
  function ip(t, e, n, l, r) {
    if (t === null) {
      var s = n.type;
      return typeof s == 'function' && !ss(s) && s.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = s), rp(t, e, s, l, r))
        : ((t = Fr(n.type, null, l, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((s = t.child), !lc(t, r))) {
      var d = s.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Ni), n(d, l) && t.ref === e.ref)) return ra(t, e, r);
    }
    return ((e.flags |= 1), (t = ta(s, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function rp(t, e, n, l, r) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Ni(s, l) && t.ref === e.ref)
        if (((Ce = !1), (e.pendingProps = l = s), lc(t, r))) (t.flags & 131072) !== 0 && (Ce = !0);
        else return ((e.lanes = t.lanes), ra(t, e, r));
    }
    return Ws(t, e, n, l, r);
  }
  function op(t, e, n, l) {
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
        return up(t, e, s, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && to(e, s !== null ? s.cachePool : null),
          s !== null ? c0(e, s) : Ms(),
          f0(e));
      else return ((l = e.lanes = 536870912), up(t, e, s !== null ? s.baseLanes | n : n, n, l));
    } else
      s !== null
        ? (to(e, s.cachePool), c0(e, s), Ba(), (e.memoizedState = null))
        : (t !== null && to(e, null), Ms(), Ba());
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
  function up(t, e, n, l, r) {
    var s = xs();
    return (
      (s = s === null ? null : { parent: Se._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && to(e, null),
      Ms(),
      f0(e),
      t !== null && ql(t, e, l, !0),
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
  function sp(t, e, n) {
    return (rl(e, t.child, null, n), (t = yo(e, e.pendingProps)), (t.flags |= 2), fn(e), (e.memoizedState = null), t);
  }
  function h1(t, e, n) {
    var l = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Dt) {
        if (l.mode === 'hidden') return ((t = yo(e, l)), (e.lanes = 536870912), Fi(null, t));
        if (
          (Rs(e),
          (t = ae)
            ? ((t = xh(t, Tn)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ta !== null ? { id: $n, overflow: qn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Qd(t)),
                (n.return = e),
                (e.child = n),
                (_e = e),
                (ae = null)))
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
      if ((Rs(e), r))
        if (e.flags & 256) ((e.flags &= -257), (e = sp(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if ((Ce || ql(t, e, n, !1), (r = (n & t.childLanes) !== 0), Ce || r)) {
        if (((l = Pt), l !== null && ((d = If(l, n)), d !== 0 && d !== s.retryLane)))
          throw ((s.retryLane = d), Pa(t, d), rn(l, t, d), Fs);
        (Oo(), (e = sp(t, e, n)));
      } else
        ((t = s.treeContext),
          (ae = zn(d.nextSibling)),
          (_e = e),
          (Dt = !0),
          (Ea = null),
          (Tn = !1),
          t !== null && Jd(e, t),
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
  function Ws(t, e, n, l, r) {
    return (
      nl(e),
      (n = Bs(t, e, n, l, void 0, r)),
      (l = _s()),
      t !== null && !Ce ? (Ds(t, e, r), ra(t, e, r)) : (Dt && l && ds(e), (e.flags |= 1), je(t, e, n, r), e.child)
    );
  }
  function cp(t, e, n, l, r, s) {
    return (
      nl(e),
      (e.updateQueue = null),
      (n = p0(e, l, n, r)),
      d0(t),
      (l = _s()),
      t !== null && !Ce ? (Ds(t, e, s), ra(t, e, s)) : (Dt && l && ds(e), (e.flags |= 1), je(t, e, n, s), e.child)
    );
  }
  function fp(t, e, n, l, r) {
    if ((nl(e), e.stateNode === null)) {
      var s = Hl,
        d = n.contextType;
      (typeof d == 'object' && d !== null && (s = De(d)),
        (s = new n(l, s)),
        (e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Ks),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = l),
        (s.state = e.memoizedState),
        (s.refs = {}),
        Ts(e),
        (d = n.contextType),
        (s.context = typeof d == 'object' && d !== null ? De(d) : Hl),
        (s.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == 'function' && (Zs(e, n, d, l), (s.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof s.getSnapshotBeforeUpdate == 'function' ||
          (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
          ((d = s.state),
          typeof s.componentWillMount == 'function' && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
          d !== s.state && Ks.enqueueReplaceState(s, s.state, null),
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
      var B = s.context,
        L = n.contextType;
      ((d = Hl), typeof L == 'object' && L !== null && (d = De(L)));
      var Z = n.getDerivedStateFromProps;
      ((L = typeof Z == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'),
        (m = e.pendingProps !== m),
        L ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((m || B !== d) && W0(e, s, l, d)),
        (Ma = !1));
      var D = e.memoizedState;
      ((s.state = D),
        Xi(e, l, s, r),
        Vi(),
        (B = e.memoizedState),
        m || D !== B || Ma
          ? (typeof Z == 'function' && (Zs(e, n, Z, l), (B = e.memoizedState)),
            (C = Ma || F0(e, n, C, l, D, B, d))
              ? (L ||
                  (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                  (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = B)),
            (s.props = l),
            (s.state = B),
            (s.context = d),
            (l = C))
          : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308), (l = !1)));
    } else {
      ((s = e.stateNode),
        Es(t, e),
        (d = e.memoizedProps),
        (L = ul(n, d)),
        (s.props = L),
        (Z = e.pendingProps),
        (D = s.context),
        (B = n.contextType),
        (C = Hl),
        typeof B == 'object' && B !== null && (C = De(B)),
        (m = n.getDerivedStateFromProps),
        (B = typeof m == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((d !== Z || D !== C) && W0(e, s, l, C)),
        (Ma = !1),
        (D = e.memoizedState),
        (s.state = D),
        Xi(e, l, s, r),
        Vi());
      var U = e.memoizedState;
      d !== Z || D !== U || Ma || (t !== null && t.dependencies !== null && Pr(t.dependencies))
        ? (typeof m == 'function' && (Zs(e, n, m, l), (U = e.memoizedState)),
          (L = Ma || F0(e, n, L, l, D, U, C) || (t !== null && t.dependencies !== null && Pr(t.dependencies)))
            ? (B ||
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
  function dp(t, e, n, l) {
    return (tl(), (e.flags |= 256), je(t, e, n, l), e.child);
  }
  var Ps = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Is(t) {
    return { baseLanes: t, cachePool: e0() };
  }
  function tc(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= pn), t);
  }
  function pp(t, e, n) {
    var l = e.pendingProps,
      r = !1,
      s = (e.flags & 128) !== 0,
      d;
    if (
      ((d = s) || (d = t !== null && t.memoizedState === null ? !1 : (ye.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Dt) {
        if (
          (r ? wa(e) : Ba(),
          (t = ae)
            ? ((t = xh(t, Tn)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ta !== null ? { id: $n, overflow: qn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Qd(t)),
                (n.return = e),
                (e.child = n),
                (_e = e),
                (ae = null)))
            : (t = null),
          t === null)
        )
          throw za(e);
        return (Uc(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
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
            (l.memoizedState = Is(n)),
            (l.childLanes = tc(t, d, n)),
            (e.memoizedState = Ps),
            Fi(null, l))
          : (wa(e), ec(e, m))
      );
    }
    var C = t.memoizedState;
    if (C !== null && ((m = C.dehydrated), m !== null)) {
      if (s)
        e.flags & 256
          ? (wa(e), (e.flags &= -257), (e = nc(t, e, n)))
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
              (l.memoizedState = Is(n)),
              (l.childLanes = tc(t, d, n)),
              (e.memoizedState = Ps),
              (e = Fi(null, l)));
      else if ((wa(e), Uc(m))) {
        if (((d = m.nextSibling && m.nextSibling.dataset), d)) var B = d.dgst;
        ((d = B),
          (l = Error(u(419))),
          (l.stack = ''),
          (l.digest = d),
          ki({ value: l, source: null, stack: null }),
          (e = nc(t, e, n)));
      } else if ((Ce || ql(t, e, n, !1), (d = (n & t.childLanes) !== 0), Ce || d)) {
        if (((d = Pt), d !== null && ((l = If(d, n)), l !== 0 && l !== C.retryLane)))
          throw ((C.retryLane = l), Pa(t, l), rn(d, t, l), Fs);
        (Nc(m) || Oo(), (e = nc(t, e, n)));
      } else
        Nc(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = C.treeContext),
            (ae = zn(m.nextSibling)),
            (_e = e),
            (Dt = !0),
            (Ea = null),
            (Tn = !1),
            t !== null && Jd(e, t),
            (e = ec(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (Ba(),
        (m = l.fallback),
        (r = e.mode),
        (C = t.child),
        (B = C.sibling),
        (l = ta(C, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = C.subtreeFlags & 65011712),
        B !== null ? (m = ta(B, m)) : ((m = Ia(m, r, n, null)), (m.flags |= 2)),
        (m.return = e),
        (l.return = e),
        (l.sibling = m),
        (e.child = l),
        Fi(null, l),
        (l = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Is(n))
          : ((r = m.cachePool),
            r !== null ? ((C = Se._currentValue), (r = r.parent !== C ? { parent: C, pool: C } : r)) : (r = e0()),
            (m = { baseLanes: m.baseLanes | n, cachePool: r })),
        (l.memoizedState = m),
        (l.childLanes = tc(t, d, n)),
        (e.memoizedState = Ps),
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
  function ec(t, e) {
    return ((e = bo({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function bo(t, e) {
    return ((t = sn(22, t, null, e)), (t.lanes = 0), t);
  }
  function nc(t, e, n) {
    return (rl(e, t.child, null, n), (t = ec(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t);
  }
  function hp(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), ys(t.return, e, n));
  }
  function ac(t, e, n, l, r, s) {
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
  function mp(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      s = l.tail;
    l = l.children;
    var d = ye.current,
      m = (d & 2) !== 0;
    if (
      (m ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      I(ye, d),
      je(t, e, l, n),
      (l = Dt ? Hi : 0),
      !m && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && hp(t, n, e);
        else if (t.tag === 19) hp(t, n, e);
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
          ac(e, !1, r, n, s, l));
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
        ac(e, !0, n, null, s, l);
        break;
      case 'together':
        ac(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ra(t, e, n) {
    if ((t !== null && (e.dependencies = t.dependencies), (ja |= e.lanes), (n & e.childLanes) === 0))
      if (t !== null) {
        if ((ql(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, n = ta(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        ((t = t.sibling), (n = n.sibling = ta(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function lc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Pr(t)));
  }
  function m1(t, e, n) {
    switch (e.tag) {
      case 3:
        (Gt(e, e.stateNode.containerInfo), Aa(e, Se, t.memoizedState.cache), tl());
        break;
      case 27:
      case 5:
        Ae(e);
        break;
      case 4:
        Gt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Aa(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Rs(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (wa(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? pp(t, e, n)
              : (wa(e), (t = ra(t, e, n)), t !== null ? t.sibling : null);
        wa(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (((l = (n & e.childLanes) !== 0), l || (ql(t, e, n, !1), (l = (n & e.childLanes) !== 0)), r)) {
          if (l) return mp(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          I(ye, ye.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), op(t, e, n, e.pendingProps));
      case 24:
        Aa(e, Se, t.memoizedState.cache);
    }
    return ra(t, e, n);
  }
  function gp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ce = !0;
      else {
        if (!lc(t, n) && (e.flags & 128) === 0) return ((Ce = !1), m1(t, e, n));
        Ce = (t.flags & 131072) !== 0;
      }
    else ((Ce = !1), Dt && (e.flags & 1048576) !== 0 && Kd(e, Hi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = ll(e.elementType)), (e.type = t), typeof t == 'function'))
            ss(t)
              ? ((l = ul(t, l)), (e.tag = 1), (e = fp(null, e, t, l, n)))
              : ((e.tag = 0), (e = Ws(null, e, t, l, n)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === G) {
                ((e.tag = 11), (e = lp(null, e, t, l, n)));
                break t;
              } else if (r === J) {
                ((e.tag = 14), (e = ip(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = Q(t) || t), Error(u(306, e, '')));
          }
        }
        return e;
      case 0:
        return Ws(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (r = ul(l, e.pendingProps)), fp(t, e, l, r, n));
      case 3:
        t: {
          if ((Gt(e, e.stateNode.containerInfo), t === null)) throw Error(u(387));
          l = e.pendingProps;
          var s = e.memoizedState;
          ((r = s.element), Es(t, e), Xi(e, l, null, n));
          var d = e.memoizedState;
          if (((l = d.cache), Aa(e, Se, l), l !== s.cache && vs(e, [Se], n, !0), Vi(), (l = d.element), s.isDehydrated))
            if (
              ((s = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = dp(t, e, l, n);
              break t;
            } else if (l !== r) {
              ((r = Sn(Error(u(424)), e)), ki(r), (e = dp(t, e, l, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (ae = zn(t.firstChild), _e = e, Dt = !0, Ea = null, Tn = !0, n = o0(e, null, l, n), e.child = n; n; )
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
            ? (n = Mh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Dt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = No(ot.current).createElement(n)),
                (l[Be] = e),
                (l[Ie] = t),
                Ne(l, n, t),
                Re(l),
                (e.stateNode = l))
            : (e.memoizedState = Mh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Ae(e),
          t === null &&
            Dt &&
            ((l = e.stateNode = Eh(e.type, e.pendingProps, ot.current)),
            (_e = e),
            (Tn = !0),
            (r = ae),
            La(e.type) ? ((Hc = r), (ae = zn(l.firstChild))) : (ae = r)),
          je(t, e, e.pendingProps.children, n),
          vo(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Dt &&
            ((r = l = ae) &&
              ((l = X1(l, e.type, e.pendingProps, Tn)),
              l !== null ? ((e.stateNode = l), (_e = e), (ae = zn(l.firstChild)), (Tn = !1), (r = !0)) : (r = !1)),
            r || za(e)),
          Ae(e),
          (r = e.type),
          (s = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = s.children),
          _c(r, s) ? (l = null) : d !== null && _c(r, d) && (e.flags |= 32),
          e.memoizedState !== null && ((r = Bs(t, e, r1, null, null, n)), (fr._currentValue = r)),
          vo(t, e),
          je(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Dt &&
            ((t = n = ae) &&
              ((n = Q1(n, e.pendingProps, Tn)),
              n !== null ? ((e.stateNode = n), (_e = e), (ae = null), (t = !0)) : (t = !1)),
            t || za(e)),
          null
        );
      case 13:
        return pp(t, e, n);
      case 4:
        return (
          Gt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = rl(e, null, l, n)) : je(t, e, l, n),
          e.child
        );
      case 11:
        return lp(t, e, e.type, e.pendingProps, n);
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
        return ip(t, e, e.type, e.pendingProps, n);
      case 15:
        return rp(t, e, e.type, e.pendingProps, n);
      case 19:
        return mp(t, e, n);
      case 31:
        return h1(t, e, n);
      case 22:
        return op(t, e, n, e.pendingProps);
      case 24:
        return (
          nl(e),
          (l = De(Se)),
          t === null
            ? ((r = xs()),
              r === null &&
                ((r = Pt),
                (s = bs()),
                (r.pooledCache = s),
                s.refCount++,
                s !== null && (r.pooledCacheLanes |= n),
                (r = s)),
              (e.memoizedState = { parent: l, cache: r }),
              Ts(e),
              Aa(e, Se, r))
            : ((t.lanes & n) !== 0 && (Es(t, e), Xi(e, null, null, n), Vi()),
              (r = t.memoizedState),
              (s = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
                  Aa(e, Se, l))
                : ((l = s.cache), Aa(e, Se, l), l !== r.cache && vs(e, [Se], n, !0))),
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
  function ic(t, e, n, l, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Gp()) t.flags |= 8192;
        else throw ((il = no), Cs);
    } else t.flags &= -16777217;
  }
  function yp(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !_h(e)))
      if (Gp()) t.flags |= 8192;
      else throw ((il = no), Cs);
  }
  function So(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Ff() : 536870912), (t.lanes |= e), (Il |= e)));
  }
  function Wi(t, e) {
    if (!Dt)
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
  function le(t) {
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
  function g1(t, e, n) {
    var l = e.pendingProps;
    switch ((ps(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (le(e), null);
      case 1:
        return (le(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          aa(Se),
          Nt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            ($l(e)
              ? oa(e)
              : t === null || (t.memoizedState.isDehydrated && (e.flags & 256) === 0) || ((e.flags |= 1024), ms())),
          le(e),
          null
        );
      case 26:
        var r = e.type,
          s = e.memoizedState;
        return (
          t === null
            ? (oa(e), s !== null ? (le(e), yp(e, s)) : (le(e), ic(e, r, null, l, n)))
            : s
              ? s !== t.memoizedState
                ? (oa(e), le(e), yp(e, s))
                : (le(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && oa(e), le(e), ic(e, r, t, l, n)),
          null
        );
      case 27:
        if ((He(e), (n = ot.current), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && oa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return (le(e), null);
          }
          ((t = tt.current), $l(e) ? Fd(e) : ((t = Eh(r, l, n)), (e.stateNode = t), oa(e)));
        }
        return (le(e), null);
      case 5:
        if ((He(e), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && oa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return (le(e), null);
          }
          if (((s = tt.current), $l(e))) Fd(e);
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
            ((s[Be] = e), (s[Ie] = l));
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
        return (le(e), ic(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && oa(e);
        else {
          if (typeof l != 'string' && e.stateNode === null) throw Error(u(166));
          if (((t = ot.current), $l(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (l = null), (r = _e), r !== null))
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((t[Be] = e),
              (t = !!(t.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || ph(t.nodeValue, n))),
              t || za(e, !0));
          } else ((t = No(t).createTextNode(l)), (t[Be] = e), (e.stateNode = t));
        }
        return (le(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = $l(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(u(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(557));
              t[Be] = e;
            } else (tl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (le(e), (t = !1));
          } else
            ((n = ms()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), (t = !0));
          if (!t) return e.flags & 256 ? (fn(e), e) : (fn(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (le(e), null);
      case 13:
        if (((l = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((r = $l(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (((r = e.memoizedState), (r = r !== null ? r.dehydrated : null), !r)) throw Error(u(317));
              r[Be] = e;
            } else (tl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (le(e), (r = !1));
          } else
            ((r = ms()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), (r = !0));
          if (!r) return e.flags & 256 ? (fn(e), e) : (fn(e), null);
        }
        return (
          fn(e),
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
              le(e),
              null)
        );
      case 4:
        return (Nt(), t === null && Mc(e.stateNode.containerInfo), le(e), null);
      case 10:
        return (aa(e.type), le(e), null);
      case 19:
        if ((k(ye), (l = e.memoizedState), l === null)) return (le(e), null);
        if (((r = (e.flags & 128) !== 0), (s = l.rendering), s === null))
          if (r) Wi(l, !1);
          else {
            if (de !== 0 || (t !== null && (t.flags & 128) !== 0))
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
                    (Xd(n, t), (n = n.sibling));
                  return (I(ye, (ye.current & 1) | 2), Dt && ea(e, l.treeForkCount), e.child);
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
                l.tail === null && l.tailMode === 'hidden' && !s.alternate && !Dt)
              )
                return (le(e), null);
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
            (n = ye.current),
            I(ye, r ? (n & 1) | 2 : n & 1),
            Dt && ea(e, l.treeForkCount),
            t)
          : (le(e), null);
      case 22:
      case 23:
        return (
          fn(e),
          Os(),
          (l = e.memoizedState !== null),
          t !== null ? (t.memoizedState !== null) !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (le(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : le(e),
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
          t !== null && k(al),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          aa(Se),
          le(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function y1(t, e) {
    switch ((ps(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          aa(Se),
          Nt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (He(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((fn(e), e.alternate === null)) throw Error(u(340));
          tl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((fn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(u(340));
          tl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (k(ye), null);
      case 4:
        return (Nt(), null);
      case 10:
        return (aa(e.type), null);
      case 22:
      case 23:
        return (
          fn(e),
          Os(),
          t !== null && k(al),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (aa(Se), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function vp(t, e) {
    switch ((ps(e), e.tag)) {
      case 3:
        (aa(Se), Nt());
        break;
      case 26:
      case 27:
      case 5:
        He(e);
        break;
      case 4:
        Nt();
        break;
      case 31:
        e.memoizedState !== null && fn(e);
        break;
      case 13:
        fn(e);
        break;
      case 19:
        k(ye);
        break;
      case 10:
        aa(e.type);
        break;
      case 22:
      case 23:
        (fn(e), Os(), t !== null && k(al));
        break;
      case 24:
        aa(Se);
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
                B = m;
              try {
                B();
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
  function bp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        s0(e, n);
      } catch (l) {
        Xt(t, t.return, l);
      }
    }
  }
  function Sp(t, e, n) {
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
  function Yn(t, e) {
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
  function xp(t) {
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
  function rc(t, e, n) {
    try {
      var l = t.stateNode;
      (L1(l, t.type, n, e), (l[Ie] = e));
    } catch (r) {
      Xt(t, t.return, r);
    }
  }
  function Cp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && La(t.type)) || t.tag === 4;
  }
  function oc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Cp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if ((t.tag === 27 && La(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function uc(t, e, n) {
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
      for (uc(t, e, n), t = t.sibling; t !== null; ) (uc(t, e, n), (t = t.sibling));
  }
  function xo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (l !== 4 && (l === 27 && La(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (xo(t, e, n), t = t.sibling; t !== null; ) (xo(t, e, n), (t = t.sibling));
  }
  function Tp(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
      (Ne(e, l, n), (e[Be] = t), (e[Ie] = n));
    } catch (s) {
      Xt(t, t.return, s);
    }
  }
  var ua = !1,
    Te = !1,
    sc = !1,
    Ep = typeof WeakSet == 'function' ? WeakSet : Set,
    we = null;
  function v1(t, e) {
    if (((t = t.containerInfo), (wc = Yo), (t = Ud(t)), ns(t))) {
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
              B = 0,
              L = 0,
              Z = t,
              D = null;
            e: for (;;) {
              for (
                var U;
                Z !== n || (r !== 0 && Z.nodeType !== 3) || (m = d + r),
                  Z !== s || (l !== 0 && Z.nodeType !== 3) || (C = d + l),
                  Z.nodeType === 3 && (d += Z.nodeValue.length),
                  (U = Z.firstChild) !== null;

              )
                ((D = Z), (Z = U));
              for (;;) {
                if (Z === t) break e;
                if ((D === n && ++B === r && (m = d), D === s && ++L === l && (C = d), (U = Z.nextSibling) !== null))
                  break;
                ((Z = D), (D = Z.parentNode));
              }
              Z = U;
            }
            n = m === -1 || C === -1 ? null : { start: m, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Bc = { focusedElem: t, selectionRange: n }, Yo = !1, we = e; we !== null; )
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
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) jc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      jc(t);
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
  function zp(t, e, n) {
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
        (l & 64 && bp(n), l & 512 && Ii(n, n.return));
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
            s0(t, e);
          } catch (d) {
            Xt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Tp(n);
      case 26:
      case 5:
        (ca(t, n), e === null && l & 4 && xp(n), l & 512 && Ii(n, n.return));
        break;
      case 12:
        ca(t, n);
        break;
      case 31:
        (ca(t, n), l & 4 && Op(t, n));
        break;
      case 13:
        (ca(t, n),
          l & 4 && Rp(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = M1.bind(null, n)), Z1(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || ua), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Te), (r = ua));
          var s = Te;
          ((ua = l), (Te = e) && !s ? fa(t, n, (n.subtreeFlags & 8772) !== 0) : ca(t, n), (ua = r), (Te = s));
        }
        break;
      case 30:
        break;
      default:
        ca(t, n);
    }
  }
  function Ap(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Ap(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Lu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var oe = null,
    en = !1;
  function sa(t, e, n) {
    for (n = n.child; n !== null; ) (Mp(t, e, n), (n = n.sibling));
  }
  function Mp(t, e, n) {
    if (re && typeof re.onCommitFiberUnmount == 'function')
      try {
        re.onCommitFiberUnmount(te, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Te || Yn(n, e),
          sa(t, e, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Te || Yn(n, e);
        var l = oe,
          r = en;
        (La(n.type) && ((oe = n.stateNode), (en = !1)), sa(t, e, n), ur(n.stateNode), (oe = l), (en = r));
        break;
      case 5:
        Te || Yn(n, e);
      case 6:
        if (((l = oe), (r = en), (oe = null), sa(t, e, n), (oe = l), (en = r), oe !== null))
          if (en)
            try {
              (oe.nodeType === 9 ? oe.body : oe.nodeName === 'HTML' ? oe.ownerDocument.body : oe).removeChild(
                n.stateNode
              );
            } catch (s) {
              Xt(n, e, s);
            }
          else
            try {
              oe.removeChild(n.stateNode);
            } catch (s) {
              Xt(n, e, s);
            }
        break;
      case 18:
        oe !== null &&
          (en
            ? ((t = oe),
              bh(t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t, n.stateNode),
              oi(t))
            : bh(oe, n.stateNode));
        break;
      case 4:
        ((l = oe), (r = en), (oe = n.stateNode.containerInfo), (en = !0), sa(t, e, n), (oe = l), (en = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_a(2, n, e), Te || _a(4, n, e), sa(t, e, n));
        break;
      case 1:
        (Te || (Yn(n, e), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && Sp(n, e, l)), sa(t, e, n));
        break;
      case 21:
        sa(t, e, n);
        break;
      case 22:
        ((Te = (l = Te) || n.memoizedState !== null), sa(t, e, n), (Te = l));
        break;
      default:
        sa(t, e, n);
    }
  }
  function Op(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
      t = t.dehydrated;
      try {
        oi(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
    }
  }
  function Rp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        oi(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
  }
  function b1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Ep()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new Ep()), e);
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Co(t, e) {
    var n = b1(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var r = O1.bind(null, t, l);
        l.then(r, r);
      }
    });
  }
  function nn(t, e) {
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
                ((oe = m.stateNode), (en = !1));
                break t;
              }
              break;
            case 5:
              ((oe = m.stateNode), (en = !1));
              break t;
            case 3:
            case 4:
              ((oe = m.stateNode.containerInfo), (en = !0));
              break t;
          }
          m = m.return;
        }
        if (oe === null) throw Error(u(160));
        (Mp(s, d, r), (oe = null), (en = !1), (s = r.alternate), s !== null && (s.return = null), (r.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (wp(e, t), (e = e.sibling));
  }
  var Dn = null;
  function wp(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (nn(e, t), an(t), l & 4 && (_a(3, t, t.return), Pi(3, t), _a(5, t, t.return)));
        break;
      case 1:
        (nn(e, t),
          an(t),
          l & 512 && (Te || n === null || Yn(n, n.return)),
          l & 64 &&
            ua &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var r = Dn;
        if ((nn(e, t), an(t), l & 512 && (Te || n === null || Yn(n, n.return)), l & 4)) {
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
                      var d = wh('link', 'href', r).get(l + (n.href || ''));
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
                      if ((d = wh('meta', 'content', r).get(l + (n.content || '')))) {
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
              } else Bh(r, t.type, t.stateNode);
            else t.stateNode = Rh(r, l, t.memoizedProps);
          else
            s !== l
              ? (s === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : s.count--,
                l === null ? Bh(r, t.type, t.stateNode) : Rh(r, l, t.memoizedProps))
              : l === null && t.stateNode !== null && rc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (nn(e, t),
          an(t),
          l & 512 && (Te || n === null || Yn(n, n.return)),
          n !== null && l & 4 && rc(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((nn(e, t), an(t), l & 512 && (Te || n === null || Yn(n, n.return)), t.flags & 32)) {
          r = t.stateNode;
          try {
            wl(r, '');
          } catch (rt) {
            Xt(t, t.return, rt);
          }
        }
        (l & 4 && t.stateNode != null && ((r = t.memoizedProps), rc(t, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (sc = !0));
        break;
      case 6:
        if ((nn(e, t), an(t), l & 4)) {
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
          (r = Dn),
          (Dn = Uo(e.containerInfo)),
          nn(e, t),
          (Dn = r),
          an(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            oi(e.containerInfo);
          } catch (rt) {
            Xt(t, t.return, rt);
          }
        sc && ((sc = !1), Bp(t));
        break;
      case 4:
        ((l = Dn), (Dn = Uo(t.stateNode.containerInfo)), nn(e, t), an(t), (Dn = l));
        break;
      case 12:
        (nn(e, t), an(t));
        break;
      case 31:
        (nn(e, t), an(t), l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 13:
        (nn(e, t),
          an(t),
          t.child.flags & 8192 && (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Eo = Oe()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var C = n !== null && n.memoizedState !== null,
          B = ua,
          L = Te;
        if (((ua = B || r), (Te = L || C), nn(e, t), (Te = L), (ua = B), an(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || C || ua || Te || sl(t)),
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
                    var Z = C.memoizedProps.style,
                      D = Z != null && Z.hasOwnProperty('display') ? Z.display : null;
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
                  r ? Sh(U, !0) : Sh(C.stateNode, !1);
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
        (nn(e, t), an(t), l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (nn(e, t), an(t));
    }
  }
  function an(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (Cp(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              s = oc(t);
            xo(t, s, r);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (wl(d, ''), (n.flags &= -33));
            var m = oc(t);
            xo(t, m, d);
            break;
          case 3:
          case 4:
            var C = n.stateNode.containerInfo,
              B = oc(t);
            uc(t, B, C);
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
  function Bp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Bp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function ca(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) (zp(t, e.alternate, e), (e = e.sibling));
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
          Yn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == 'function' && Sp(e, e.return, n), sl(e));
          break;
        case 27:
          ur(e.stateNode);
        case 26:
        case 5:
          (Yn(e, e.return), sl(e));
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
            } catch (B) {
              Xt(l, l.return, B);
            }
          if (((l = s), (r = l.updateQueue), r !== null)) {
            var m = l.stateNode;
            try {
              var C = r.shared.hiddenCallbacks;
              if (C !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < C.length; r++) u0(C[r], m);
            } catch (B) {
              Xt(l, l.return, B);
            }
          }
          (n && d & 64 && bp(s), Ii(s, s.return));
          break;
        case 27:
          Tp(s);
        case 26:
        case 5:
          (fa(r, s, n), n && l === null && d & 4 && xp(s), Ii(s, s.return));
          break;
        case 12:
          fa(r, s, n);
          break;
        case 31:
          (fa(r, s, n), n && d & 4 && Op(r, s));
          break;
        case 13:
          (fa(r, s, n), n && d & 4 && Rp(r, s));
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
  function cc(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Li(n)));
  }
  function fc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Li(t)));
  }
  function jn(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (_p(t, e, n, l), (e = e.sibling));
  }
  function _p(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (jn(t, e, n, l), r & 2048 && Pi(9, e));
        break;
      case 1:
        jn(t, e, n, l);
        break;
      case 3:
        (jn(t, e, n, l),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Li(t))));
        break;
      case 12:
        if (r & 2048) {
          (jn(t, e, n, l), (t = e.stateNode));
          try {
            var s = e.memoizedProps,
              d = s.id,
              m = s.onPostCommit;
            typeof m == 'function' && m(d, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (C) {
            Xt(e, e.return, C);
          }
        } else jn(t, e, n, l);
        break;
      case 31:
        jn(t, e, n, l);
        break;
      case 13:
        jn(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        ((s = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? s._visibility & 2
              ? jn(t, e, n, l)
              : tr(t, e)
            : s._visibility & 2
              ? jn(t, e, n, l)
              : ((s._visibility |= 2), Fl(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && cc(d, e));
        break;
      case 24:
        (jn(t, e, n, l), r & 2048 && fc(e.alternate, e));
        break;
      default:
        jn(t, e, n, l);
    }
  }
  function Fl(t, e, n, l, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t,
        d = e,
        m = n,
        C = l,
        B = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Fl(s, d, m, C, r), Pi(8, d));
          break;
        case 23:
          break;
        case 22:
          var L = d.stateNode;
          (d.memoizedState !== null
            ? L._visibility & 2
              ? Fl(s, d, m, C, r)
              : tr(s, d)
            : ((L._visibility |= 2), Fl(s, d, m, C, r)),
            r && B & 2048 && cc(d.alternate, d));
          break;
        case 24:
          (Fl(s, d, m, C, r), r && B & 2048 && fc(d.alternate, d));
          break;
        default:
          Fl(s, d, m, C, r);
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
            (tr(n, l), r & 2048 && cc(l.alternate, l));
            break;
          case 24:
            (tr(n, l), r & 2048 && fc(l.alternate, l));
            break;
          default:
            tr(n, l);
        }
        e = e.sibling;
      }
  }
  var er = 8192;
  function Wl(t, e, n) {
    if (t.subtreeFlags & er) for (t = t.child; t !== null; ) (Dp(t, e, n), (t = t.sibling));
  }
  function Dp(t, e, n) {
    switch (t.tag) {
      case 26:
        (Wl(t, e, n), t.flags & er && t.memoizedState !== null && iv(n, Dn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Wl(t, e, n);
        break;
      case 3:
      case 4:
        var l = Dn;
        ((Dn = Uo(t.stateNode.containerInfo)), Wl(t, e, n), (Dn = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null ? ((l = er), (er = 16777216), Wl(t, e, n), (er = l)) : Wl(t, e, n));
        break;
      default:
        Wl(t, e, n);
    }
  }
  function jp(t) {
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
          ((we = l), Up(l, t));
        }
      jp(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Np(t), (t = t.sibling));
  }
  function Np(t) {
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
          ((we = l), Up(l, t));
        }
      jp(t);
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
  function Up(t, e) {
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
          if ((Ap(l), l === n)) {
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
  var S1 = {
      getCacheForType: function (t) {
        var e = De(Se),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return De(Se).controller.signal;
      },
    },
    x1 = typeof WeakMap == 'function' ? WeakMap : Map,
    Lt = 0,
    Pt = null,
    At = null,
    wt = 0,
    Vt = 0,
    dn = null,
    Da = !1,
    Pl = !1,
    dc = !1,
    da = 0,
    de = 0,
    ja = 0,
    cl = 0,
    pc = 0,
    pn = 0,
    Il = 0,
    ar = null,
    ln = null,
    hc = !1,
    Eo = 0,
    Hp = 0,
    zo = 1 / 0,
    Ao = null,
    Na = null,
    ze = 0,
    Ua = null,
    ti = null,
    pa = 0,
    mc = 0,
    gc = null,
    kp = null,
    lr = 0,
    yc = null;
  function hn() {
    return (Lt & 2) !== 0 && wt !== 0 ? wt & -wt : z.T !== null ? Tc() : td();
  }
  function Lp() {
    if (pn === 0)
      if ((wt & 536870912) === 0 || Dt) {
        var t = Tl;
        ((Tl <<= 1), (Tl & 3932160) === 0 && (Tl = 262144), (pn = t));
      } else pn = 536870912;
    return ((t = cn.current), t !== null && (t.flags |= 32), pn);
  }
  function rn(t, e, n) {
    (((t === Pt && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null) && (ei(t, 0), Ha(t, wt, pn, !1)),
      zi(t, n),
      ((Lt & 2) === 0 || t !== Pt) &&
        (t === Pt && ((Lt & 2) === 0 && (cl |= n), de === 4 && Ha(t, wt, pn, !1)), Gn(t)));
  }
  function $p(t, e, n) {
    if ((Lt & 6) !== 0) throw Error(u(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ln(t, e),
      r = l ? E1(t, e) : bc(t, e, !0),
      s = l;
    do {
      if (r === 0) {
        Pl && !l && Ha(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), s && !C1(n))) {
          ((r = bc(t, e, !1)), (s = !1));
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
              if ((C && (ei(m, d).flags |= 256), (d = bc(m, d, !1)), d !== 2)) {
                if (dc && !C) {
                  ((m.errorRecoveryDisabledLanes |= s), (cl |= s), (r = 4));
                  break t;
                }
                ((s = ln), (ln = r), s !== null && (ln === null ? (ln = s) : ln.push.apply(ln, s)));
              }
              r = d;
            }
            if (((s = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (ei(t, 0), Ha(t, e, 0, !0));
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
              Ha(l, e, pn, !Da);
              break t;
            case 2:
              ln = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((r = Eo + 300 - Oe()), 10 < r)) {
            if ((Ha(l, e, pn, !Da), Sa(l, 0, !0) !== 0)) break t;
            ((pa = e),
              (l.timeoutHandle = yh(qp.bind(null, l, n, ln, Ao, hc, e, pn, cl, Il, Da, s, 'Throttled', -0, 0), r)));
            break t;
          }
          qp(l, n, ln, Ao, hc, e, pn, cl, Il, Da, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Gn(t);
  }
  function qp(t, e, n, l, r, s, d, m, C, B, L, Z, D, U) {
    if (((t.timeoutHandle = -1), (Z = e.subtreeFlags), Z & 8192 || (Z & 16785408) === 16785408)) {
      ((Z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Pn,
      }),
        Dp(e, s, Z));
      var rt = (s & 62914560) === s ? Eo - Oe() : (s & 4194048) === s ? Hp - Oe() : 0;
      if (((rt = rv(Z, rt)), rt !== null)) {
        ((pa = s),
          (t.cancelPendingCommit = rt(Jp.bind(null, t, e, s, n, l, r, d, m, C, L, Z, null, D, U))),
          Ha(t, s, d, !B));
        return;
      }
    }
    Jp(t, e, s, n, l, r, d, m, C);
  }
  function C1(t) {
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
            if (!un(s(), r)) return !1;
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
    ((e &= ~pc),
      (e &= ~cl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var s = 31 - Ge(r),
        d = 1 << s;
      ((l[s] = -1), (r &= ~d));
    }
    n !== 0 && Wf(t, n, e);
  }
  function Mo() {
    return (Lt & 6) === 0 ? (ir(0), !1) : !0;
  }
  function vc() {
    if (At !== null) {
      if (Vt === 0) var t = At.return;
      else ((t = At), (na = el = null), js(t), (Xl = null), (qi = 0), (t = At));
      for (; t !== null; ) (vp(t.alternate, t), (t = t.return));
      At = null;
    }
  }
  function ei(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Y1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (pa = 0),
      vc(),
      (Pt = t),
      (At = n = ta(t.current, null)),
      (wt = e),
      (Vt = 0),
      (dn = null),
      (Da = !1),
      (Pl = Ln(t, e)),
      (dc = !1),
      (Il = pn = pc = cl = ja = de = 0),
      (ln = ar = null),
      (hc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - Ge(l),
          s = 1 << r;
        ((e |= t[r]), (l &= ~s));
      }
    return ((da = e), Zr(), n);
  }
  function Yp(t, e) {
    ((bt = null),
      (z.H = Ji),
      e === Vl || e === eo
        ? ((e = l0()), (Vt = 3))
        : e === Cs
          ? ((e = l0()), (Vt = 4))
          : (Vt = e === Fs ? 8 : e !== null && typeof e == 'object' && typeof e.then == 'function' ? 6 : 1),
      (dn = e),
      At === null && ((de = 1), go(t, Sn(e, t.current))));
  }
  function Gp() {
    var t = cn.current;
    return t === null
      ? !0
      : (wt & 4194048) === wt
        ? En === null
        : (wt & 62914560) === wt || (wt & 536870912) !== 0
          ? t === En
          : !1;
  }
  function Vp() {
    var t = z.H;
    return ((z.H = Ji), t === null ? Ji : t);
  }
  function Xp() {
    var t = z.A;
    return ((z.A = S1), t);
  }
  function Oo() {
    ((de = 4),
      Da || ((wt & 4194048) !== wt && cn.current !== null) || (Pl = !0),
      ((ja & 134217727) === 0 && (cl & 134217727) === 0) || Pt === null || Ha(Pt, wt, pn, !1));
  }
  function bc(t, e, n) {
    var l = Lt;
    Lt |= 2;
    var r = Vp(),
      s = Xp();
    ((Pt !== t || wt !== e) && ((Ao = null), ei(t, e)), (e = !1));
    var d = de;
    t: do
      try {
        if (Vt !== 0 && At !== null) {
          var m = At,
            C = dn;
          switch (Vt) {
            case 8:
              (vc(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              cn.current === null && (e = !0);
              var B = Vt;
              if (((Vt = 0), (dn = null), ni(t, m, C, B), n && Pl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((B = Vt), (Vt = 0), (dn = null), ni(t, m, C, B));
          }
        }
        (T1(), (d = de));
        break;
      } catch (L) {
        Yp(t, L);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (na = el = null),
      (Lt = l),
      (z.H = r),
      (z.A = s),
      At === null && ((Pt = null), (wt = 0), Zr()),
      d
    );
  }
  function T1() {
    for (; At !== null; ) Qp(At);
  }
  function E1(t, e) {
    var n = Lt;
    Lt |= 2;
    var l = Vp(),
      r = Xp();
    Pt !== t || wt !== e ? ((Ao = null), (zo = Oe() + 500), ei(t, e)) : (Pl = Ln(t, e));
    t: do
      try {
        if (Vt !== 0 && At !== null) {
          e = At;
          var s = dn;
          e: switch (Vt) {
            case 1:
              ((Vt = 0), (dn = null), ni(t, e, s, 1));
              break;
            case 2:
            case 9:
              if (n0(s)) {
                ((Vt = 0), (dn = null), Zp(e));
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
              n0(s) ? ((Vt = 0), (dn = null), Zp(e)) : ((Vt = 0), (dn = null), ni(t, e, s, 7));
              break;
            case 5:
              var d = null;
              switch (At.tag) {
                case 26:
                  d = At.memoizedState;
                case 5:
                case 27:
                  var m = At;
                  if (d ? _h(d) : m.stateNode.complete) {
                    ((Vt = 0), (dn = null));
                    var C = m.sibling;
                    if (C !== null) At = C;
                    else {
                      var B = m.return;
                      B !== null ? ((At = B), Ro(B)) : (At = null);
                    }
                    break e;
                  }
              }
              ((Vt = 0), (dn = null), ni(t, e, s, 5));
              break;
            case 6:
              ((Vt = 0), (dn = null), ni(t, e, s, 6));
              break;
            case 8:
              (vc(), (de = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        z1();
        break;
      } catch (L) {
        Yp(t, L);
      }
    while (!0);
    return ((na = el = null), (z.H = l), (z.A = r), (Lt = n), At !== null ? 0 : ((Pt = null), (wt = 0), Zr(), de));
  }
  function z1() {
    for (; At !== null && !yt(); ) Qp(At);
  }
  function Qp(t) {
    var e = gp(t.alternate, t, da);
    ((t.memoizedProps = t.pendingProps), e === null ? Ro(t) : (At = e));
  }
  function Zp(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = cp(n, e, e.pendingProps, e.type, void 0, wt);
        break;
      case 11:
        e = cp(n, e, e.pendingProps, e.type.render, e.ref, wt);
        break;
      case 5:
        js(e);
      default:
        (vp(n, e), (e = At = Xd(e, da)), (e = gp(n, e, da)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ro(t) : (At = e));
  }
  function ni(t, e, n, l) {
    ((na = el = null), js(e), (Xl = null), (qi = 0));
    var r = e.return;
    try {
      if (p1(t, r, e, n, wt)) {
        ((de = 1), go(t, Sn(n, t.current)), (At = null));
        return;
      }
    } catch (s) {
      if (r !== null) throw ((At = r), s);
      ((de = 1), go(t, Sn(n, t.current)), (At = null));
      return;
    }
    e.flags & 32768
      ? (Dt || l === 1
          ? (t = !0)
          : Pl || (wt & 536870912) !== 0
            ? (t = !1)
            : ((Da = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = cn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Kp(e, t))
      : Ro(e);
  }
  function Ro(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Kp(e, Da);
        return;
      }
      t = e.return;
      var n = g1(e.alternate, e, da);
      if (n !== null) {
        At = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        At = e;
        return;
      }
      At = e = t;
    } while (e !== null);
    de === 0 && (de = 5);
  }
  function Kp(t, e) {
    do {
      var n = y1(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (At = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        At = t;
        return;
      }
      At = t = n;
    } while (t !== null);
    ((de = 6), (At = null));
  }
  function Jp(t, e, n, l, r, s, d, m, C) {
    t.cancelPendingCommit = null;
    do wo();
    while (ze !== 0);
    if ((Lt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= os),
        ly(t, n, s, d, m, C),
        t === Pt && ((At = Pt = null), (wt = 0)),
        (ti = e),
        (Ua = t),
        (pa = n),
        (mc = s),
        (gc = r),
        (kp = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            R1(zt, function () {
              return (th(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = z.T), (z.T = null), (r = Y.p), (Y.p = 2), (d = Lt), (Lt |= 4));
        try {
          v1(t, e, n);
        } finally {
          ((Lt = d), (Y.p = r), (z.T = l));
        }
      }
      ((ze = 1), Fp(), Wp(), Pp());
    }
  }
  function Fp() {
    if (ze === 1) {
      ze = 0;
      var t = Ua,
        e = ti,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = z.T), (z.T = null));
        var l = Y.p;
        Y.p = 2;
        var r = Lt;
        Lt |= 4;
        try {
          wp(e, t);
          var s = Bc,
            d = Ud(t.containerInfo),
            m = s.focusedElem,
            C = s.selectionRange;
          if (d !== m && m && m.ownerDocument && Nd(m.ownerDocument.documentElement, m)) {
            if (C !== null && ns(m)) {
              var B = C.start,
                L = C.end;
              if ((L === void 0 && (L = B), 'selectionStart' in m))
                ((m.selectionStart = B), (m.selectionEnd = Math.min(L, m.value.length)));
              else {
                var Z = m.ownerDocument || document,
                  D = (Z && Z.defaultView) || window;
                if (D.getSelection) {
                  var U = D.getSelection(),
                    rt = m.textContent.length,
                    ht = Math.min(C.start, rt),
                    Ft = C.end === void 0 ? ht : Math.min(C.end, rt);
                  !U.extend && ht > Ft && ((d = Ft), (Ft = ht), (ht = d));
                  var O = jd(m, ht),
                    E = jd(m, Ft);
                  if (
                    O &&
                    E &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== O.node ||
                      U.anchorOffset !== O.offset ||
                      U.focusNode !== E.node ||
                      U.focusOffset !== E.offset)
                  ) {
                    var w = Z.createRange();
                    (w.setStart(O.node, O.offset),
                      U.removeAllRanges(),
                      ht > Ft
                        ? (U.addRange(w), U.extend(E.node, E.offset))
                        : (w.setEnd(E.node, E.offset), U.addRange(w)));
                  }
                }
              }
            }
            for (Z = [], U = m; (U = U.parentNode); )
              U.nodeType === 1 && Z.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof m.focus == 'function' && m.focus(), m = 0; m < Z.length; m++) {
              var V = Z[m];
              ((V.element.scrollLeft = V.left), (V.element.scrollTop = V.top));
            }
          }
          ((Yo = !!wc), (Bc = wc = null));
        } finally {
          ((Lt = r), (Y.p = l), (z.T = n));
        }
      }
      ((t.current = e), (ze = 2));
    }
  }
  function Wp() {
    if (ze === 2) {
      ze = 0;
      var t = Ua,
        e = ti,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = z.T), (z.T = null));
        var l = Y.p;
        Y.p = 2;
        var r = Lt;
        Lt |= 4;
        try {
          zp(t, e.alternate, e);
        } finally {
          ((Lt = r), (Y.p = l), (z.T = n));
        }
      }
      ze = 3;
    }
  }
  function Pp() {
    if (ze === 4 || ze === 3) {
      ((ze = 0), va());
      var t = Ua,
        e = ti,
        n = pa,
        l = kp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ze = 5)
        : ((ze = 0), (ti = Ua = null), Ip(t, t.pendingLanes));
      var r = t.pendingLanes;
      if ((r === 0 && (Na = null), Hu(n), (e = e.stateNode), re && typeof re.onCommitFiberRoot == 'function'))
        try {
          re.onCommitFiberRoot(te, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = z.T), (r = Y.p), (Y.p = 2), (z.T = null));
        try {
          for (var s = t.onRecoverableError, d = 0; d < l.length; d++) {
            var m = l[d];
            s(m.value, { componentStack: m.stack });
          }
        } finally {
          ((z.T = e), (Y.p = r));
        }
      }
      ((pa & 3) !== 0 && wo(),
        Gn(t),
        (r = t.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0 ? (t === yc ? lr++ : ((lr = 0), (yc = t))) : (lr = 0),
        ir(0));
    }
  }
  function Ip(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), Li(e)));
  }
  function wo() {
    return (Fp(), Wp(), Pp(), th());
  }
  function th() {
    if (ze !== 5) return !1;
    var t = Ua,
      e = mc;
    mc = 0;
    var n = Hu(pa),
      l = z.T,
      r = Y.p;
    try {
      ((Y.p = 32 > n ? 32 : n), (z.T = null), (n = gc), (gc = null));
      var s = Ua,
        d = pa;
      if (((ze = 0), (ti = Ua = null), (pa = 0), (Lt & 6) !== 0)) throw Error(u(331));
      var m = Lt;
      if (
        ((Lt |= 4),
        Np(s.current),
        _p(s, s.current, d, n),
        (Lt = m),
        ir(0, !1),
        re && typeof re.onPostCommitFiberRoot == 'function')
      )
        try {
          re.onPostCommitFiberRoot(te, s);
        } catch {}
      return !0;
    } finally {
      ((Y.p = r), (z.T = l), Ip(t, e));
    }
  }
  function eh(t, e, n) {
    ((e = Sn(n, e)), (e = Js(t.stateNode, e, 2)), (t = Ra(t, e, 2)), t !== null && (zi(t, 2), Gn(t)));
  }
  function Xt(t, e, n) {
    if (t.tag === 3) eh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          eh(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (Na === null || !Na.has(l)))
          ) {
            ((t = Sn(n, t)), (n = np(2)), (l = Ra(e, n, 2)), l !== null && (ap(n, l, e, t), zi(l, 2), Gn(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Sc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new x1();
      var r = new Set();
      l.set(e, r);
    } else ((r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r)));
    r.has(n) || ((dc = !0), r.add(n), (t = A1.bind(null, t, e, n)), e.then(t, t));
  }
  function A1(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Pt === t &&
        (wt & n) === n &&
        (de === 4 || (de === 3 && (wt & 62914560) === wt && 300 > Oe() - Eo) ? (Lt & 2) === 0 && ei(t, 0) : (pc |= n),
        Il === wt && (Il = 0)),
      Gn(t));
  }
  function nh(t, e) {
    (e === 0 && (e = Ff()), (t = Pa(t, e)), t !== null && (zi(t, e), Gn(t)));
  }
  function M1(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), nh(t, n));
  }
  function O1(t, e) {
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
    (l !== null && l.delete(e), nh(t, n));
  }
  function R1(t, e) {
    return Fe(t, e);
  }
  var Bo = null,
    ai = null,
    xc = !1,
    _o = !1,
    Cc = !1,
    ka = 0;
  function Gn(t) {
    (t !== ai && t.next === null && (ai === null ? (Bo = ai = t) : (ai = ai.next = t)),
      (_o = !0),
      xc || ((xc = !0), B1()));
  }
  function ir(t, e) {
    if (!Cc && _o) {
      Cc = !0;
      do
        for (var n = !1, l = Bo; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var d = l.suspendedLanes,
                m = l.pingedLanes;
              ((s = (1 << (31 - Ge(42 | t) + 1)) - 1),
                (s &= r & ~(d & ~m)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((n = !0), rh(l, s));
          } else
            ((s = wt),
              (s = Sa(l, l === Pt ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
              (s & 3) === 0 || Ln(l, s) || ((n = !0), rh(l, s)));
          l = l.next;
        }
      while (n);
      Cc = !1;
    }
  }
  function w1() {
    ah();
  }
  function ah() {
    _o = xc = !1;
    var t = 0;
    ka !== 0 && q1() && (t = ka);
    for (var e = Oe(), n = null, l = Bo; l !== null; ) {
      var r = l.next,
        s = lh(l, e);
      (s === 0
        ? ((l.next = null), n === null ? (Bo = r) : (n.next = r), r === null && (ai = n))
        : ((n = l), (t !== 0 || (s & 3) !== 0) && (_o = !0)),
        (l = r));
    }
    ((ze !== 0 && ze !== 5) || ir(t), ka !== 0 && (ka = 0));
  }
  function lh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - Ge(s),
        m = 1 << d,
        C = r[d];
      (C === -1 ? ((m & n) === 0 || (m & l) !== 0) && (r[d] = Bn(m, e)) : C <= e && (t.expiredLanes |= m), (s &= ~m));
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
      switch ((l !== null && kn(l), Hu(n))) {
        case 2:
        case 8:
          n = xt;
          break;
        case 32:
          n = zt;
          break;
        case 268435456:
          n = Et;
          break;
        default:
          n = zt;
      }
      return ((l = ih.bind(null, t)), (n = Fe(n, l)), (t.callbackPriority = e), (t.callbackNode = n), e);
    }
    return (l !== null && l !== null && kn(l), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function ih(t, e) {
    if (ze !== 0 && ze !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (wo() && t.callbackNode !== n) return null;
    var l = wt;
    return (
      (l = Sa(t, t === Pt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : ($p(t, l, e), lh(t, Oe()), t.callbackNode != null && t.callbackNode === n ? ih.bind(null, t) : null)
    );
  }
  function rh(t, e) {
    if (wo()) return null;
    $p(t, e, !0);
  }
  function B1() {
    G1(function () {
      (Lt & 6) !== 0 ? Fe(lt, w1) : ah();
    });
  }
  function Tc() {
    if (ka === 0) {
      var t = Yl;
      (t === 0 && ((t = ba), (ba <<= 1), (ba & 261888) === 0 && (ba = 256)), (ka = t));
    }
    return ka;
  }
  function oh(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null : typeof t == 'function' ? t : Lr('' + t);
  }
  function uh(t, e) {
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
  function _1(t, e, n, l, r) {
    if (e === 'submit' && n && n.stateNode === r) {
      var s = oh((r[Ie] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[Ie] || null) ? oh(e.formAction) : d.getAttribute('formAction')),
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
                  var C = d ? uh(r, d) : new FormData(r);
                  Gs(n, { pending: !0, data: C, method: r.method, action: s }, null, C);
                }
              } else
                typeof s == 'function' &&
                  (m.preventDefault(),
                  (C = d ? uh(r, d) : new FormData(r)),
                  Gs(n, { pending: !0, data: C, method: r.method, action: s }, s, C));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Ec = 0; Ec < rs.length; Ec++) {
    var zc = rs[Ec],
      D1 = zc.toLowerCase(),
      j1 = zc[0].toUpperCase() + zc.slice(1);
    _n(D1, 'on' + j1);
  }
  (_n(Ld, 'onAnimationEnd'),
    _n($d, 'onAnimationIteration'),
    _n(qd, 'onAnimationStart'),
    _n('dblclick', 'onDoubleClick'),
    _n('focusin', 'onFocus'),
    _n('focusout', 'onBlur'),
    _n(Fy, 'onTransitionRun'),
    _n(Wy, 'onTransitionStart'),
    _n(Py, 'onTransitionCancel'),
    _n(Yd, 'onTransitionEnd'),
    Ol('onMouseEnter', ['mouseout', 'mouseover']),
    Ol('onMouseLeave', ['mouseout', 'mouseover']),
    Ol('onPointerEnter', ['pointerout', 'pointerover']),
    Ol('onPointerLeave', ['pointerout', 'pointerover']),
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
    N1 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(rr));
  function sh(t, e) {
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
              B = m.currentTarget;
            if (((m = m.listener), C !== s && r.isPropagationStopped())) break t;
            ((s = m), (r.currentTarget = B));
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
              (B = m.currentTarget),
              (m = m.listener),
              C !== s && r.isPropagationStopped())
            )
              break t;
            ((s = m), (r.currentTarget = B));
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
  function Mt(t, e) {
    var n = e[ku];
    n === void 0 && (n = e[ku] = new Set());
    var l = t + '__bubble';
    n.has(l) || (ch(e, t, 2, !1), n.add(l));
  }
  function Ac(t, e, n) {
    var l = 0;
    (e && (l |= 4), ch(n, t, l, e));
  }
  var Do = '_reactListening' + Math.random().toString(36).slice(2);
  function Mc(t) {
    if (!t[Do]) {
      ((t[Do] = !0),
        ad.forEach(function (n) {
          n !== 'selectionchange' && (N1.has(n) || Ac(n, !1, t), Ac(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Do] || ((e[Do] = !0), Ac('selectionchange', !1, e));
    }
  }
  function ch(t, e, n, l) {
    switch (Lh(e)) {
      case 2:
        var r = sv;
        break;
      case 8:
        r = cv;
        break;
      default:
        r = Yc;
    }
    ((n = r.bind(null, e, n, t)),
      (r = void 0),
      !Zu || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1));
  }
  function Oc(t, e, n, l, r) {
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
            if (((d = zl(m)), d === null)) return;
            if (((C = d.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              l = s = d;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    md(function () {
      var B = s,
        L = Xu(n),
        Z = [];
      t: {
        var D = Gd.get(t);
        if (D !== void 0) {
          var U = Gr,
            rt = t;
          switch (t) {
            case 'keypress':
              if (qr(n) === 0) break t;
            case 'keydown':
            case 'keyup':
              U = Oy;
              break;
            case 'focusin':
              ((rt = 'focus'), (U = Wu));
              break;
            case 'focusout':
              ((rt = 'blur'), (U = Wu));
              break;
            case 'beforeblur':
            case 'afterblur':
              U = Wu;
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
              U = vd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = gy;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = By;
              break;
            case Ld:
            case $d:
            case qd:
              U = by;
              break;
            case Yd:
              U = Dy;
              break;
            case 'scroll':
            case 'scrollend':
              U = hy;
              break;
            case 'wheel':
              U = Ny;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = xy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = Sd;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = Hy;
          }
          var ht = (e & 4) !== 0,
            Ft = !ht && (t === 'scroll' || t === 'scrollend'),
            O = ht ? (D !== null ? D + 'Capture' : null) : D;
          ht = [];
          for (var E = B, w; E !== null; ) {
            var V = E;
            if (
              ((w = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                w === null ||
                O === null ||
                ((V = Oi(E, O)), V != null && ht.push(or(E, V, w))),
              Ft)
            )
              break;
            E = E.return;
          }
          0 < ht.length && ((D = new U(D, rt, null, n, L)), Z.push({ event: D, listeners: ht }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === 'mouseover' || t === 'pointerover'),
            (U = t === 'mouseout' || t === 'pointerout'),
            D && n !== Vu && (rt = n.relatedTarget || n.fromElement) && (zl(rt) || rt[El]))
          )
            break t;
          if (
            (U || D) &&
            ((D = L.window === L ? L : (D = L.ownerDocument) ? D.defaultView || D.parentWindow : window),
            U
              ? ((rt = n.relatedTarget || n.toElement),
                (U = B),
                (rt = rt ? zl(rt) : null),
                rt !== null &&
                  ((Ft = f(rt)), (ht = rt.tag), rt !== Ft || (ht !== 5 && ht !== 27 && ht !== 6)) &&
                  (rt = null))
              : ((U = null), (rt = B)),
            U !== rt)
          ) {
            if (
              ((ht = vd),
              (V = 'onMouseLeave'),
              (O = 'onMouseEnter'),
              (E = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((ht = Sd), (V = 'onPointerLeave'), (O = 'onPointerEnter'), (E = 'pointer')),
              (Ft = U == null ? D : Mi(U)),
              (w = rt == null ? D : Mi(rt)),
              (D = new ht(V, E + 'leave', U, n, L)),
              (D.target = Ft),
              (D.relatedTarget = w),
              (V = null),
              zl(L) === B &&
                ((ht = new ht(O, E + 'enter', rt, n, L)), (ht.target = w), (ht.relatedTarget = Ft), (V = ht)),
              (Ft = V),
              U && rt)
            )
              e: {
                for (ht = U1, O = U, E = rt, w = 0, V = O; V; V = ht(V)) w++;
                V = 0;
                for (var dt = E; dt; dt = ht(dt)) V++;
                for (; 0 < w - V; ) ((O = ht(O)), w--);
                for (; 0 < V - w; ) ((E = ht(E)), V--);
                for (; w--; ) {
                  if (O === E || (E !== null && O === E.alternate)) {
                    ht = O;
                    break e;
                  }
                  ((O = ht(O)), (E = ht(E)));
                }
                ht = null;
              }
            else ht = null;
            (U !== null && fh(Z, D, U, ht, !1), rt !== null && Ft !== null && fh(Z, Ft, rt, ht, !0));
          }
        }
        t: {
          if (
            ((D = B ? Mi(B) : window),
            (U = D.nodeName && D.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && D.type === 'file'))
          )
            var Ht = Od;
          else if (Ad(D))
            if (Rd) Ht = Zy;
            else {
              Ht = Xy;
              var ut = Vy;
            }
          else
            ((U = D.nodeName),
              !U || U.toLowerCase() !== 'input' || (D.type !== 'checkbox' && D.type !== 'radio')
                ? B && Gu(B.elementType) && (Ht = Od)
                : (Ht = Qy));
          if (Ht && (Ht = Ht(t, B))) {
            Md(Z, Ht, n, L);
            break t;
          }
          (ut && ut(t, D, B),
            t === 'focusout' && B && D.type === 'number' && B.memoizedProps.value != null && Yu(D, 'number', D.value));
        }
        switch (((ut = B ? Mi(B) : window), t)) {
          case 'focusin':
            (Ad(ut) || ut.contentEditable === 'true') && ((jl = ut), (as = B), (Ui = null));
            break;
          case 'focusout':
            Ui = as = jl = null;
            break;
          case 'mousedown':
            ls = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ls = !1), Hd(Z, n, L));
            break;
          case 'selectionchange':
            if (Jy) break;
          case 'keydown':
          case 'keyup':
            Hd(Z, n, L);
        }
        var Ct;
        if (Iu)
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
          Dl
            ? Ed(t, n) && (Bt = 'onCompositionEnd')
            : t === 'keydown' && n.keyCode === 229 && (Bt = 'onCompositionStart');
        (Bt &&
          (xd &&
            n.locale !== 'ko' &&
            (Dl || Bt !== 'onCompositionStart'
              ? Bt === 'onCompositionEnd' && Dl && (Ct = gd())
              : ((Ca = L), (Ku = 'value' in Ca ? Ca.value : Ca.textContent), (Dl = !0))),
          (ut = jo(B, Bt)),
          0 < ut.length &&
            ((Bt = new bd(Bt, t, null, n, L)),
            Z.push({ event: Bt, listeners: ut }),
            Ct ? (Bt.data = Ct) : ((Ct = zd(n)), Ct !== null && (Bt.data = Ct)))),
          (Ct = Ly ? $y(t, n) : qy(t, n)) &&
            ((Bt = jo(B, 'onBeforeInput')),
            0 < Bt.length &&
              ((ut = new bd('onBeforeInput', 'beforeinput', null, n, L)),
              Z.push({ event: ut, listeners: Bt }),
              (ut.data = Ct))),
          _1(Z, t, B, n, L));
      }
      sh(Z, e);
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
  function U1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function fh(t, e, n, l, r) {
    for (var s = e._reactName, d = []; n !== null && n !== l; ) {
      var m = n,
        C = m.alternate,
        B = m.stateNode;
      if (((m = m.tag), C !== null && C === l)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        B === null ||
        ((C = B),
        r
          ? ((B = Oi(n, s)), B != null && d.unshift(or(n, B, C)))
          : r || ((B = Oi(n, s)), B != null && d.push(or(n, B, C)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var H1 = /\r\n?/g,
    k1 = /\u0000|\uFFFD/g;
  function dh(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        H1,
        `
`
      )
      .replace(k1, '');
  }
  function ph(t, e) {
    return ((e = dh(e)), dh(t) === e);
  }
  function Jt(t, e, n, l, r, s) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? e === 'body' || (e === 'textarea' && l === '') || wl(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && e !== 'body' && wl(t, '' + l);
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
        pd(t, l, s);
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
        l != null && Mt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Mt('scrollend', t);
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
        (Mt('beforetoggle', t), Mt('toggle', t), Ur(t, 'popover', l));
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
          ((n = dy.get(n) || n), Ur(t, n, l));
    }
  }
  function Rc(t, e, n, l, r, s) {
    switch (n) {
      case 'style':
        pd(t, l, s);
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
        typeof l == 'string' ? wl(t, l) : (typeof l == 'number' || typeof l == 'bigint') && wl(t, '' + l);
        break;
      case 'onScroll':
        l != null && Mt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Mt('scrollend', t);
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
        if (!ld.hasOwnProperty(n))
          t: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((r = n.endsWith('Capture')),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (s = t[Ie] || null),
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
        (Mt('error', t), Mt('load', t));
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
        Mt('invalid', t);
        var m = (s = d = r = null),
          C = null,
          B = null;
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
                  B = L;
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
        sd(t, s, m, C, B, d, r, !1);
        return;
      case 'select':
        (Mt('invalid', t), (l = d = s = null));
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
        ((e = s), (n = d), (t.multiple = !!l), e != null ? Rl(t, !!l, e, !1) : n != null && Rl(t, !!l, n, !0));
        return;
      case 'textarea':
        (Mt('invalid', t), (s = r = l = null));
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
        fd(t, l, r, s);
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
        (Mt('beforetoggle', t), Mt('toggle', t), Mt('cancel', t), Mt('close', t));
        break;
      case 'iframe':
      case 'object':
        Mt('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < rr.length; l++) Mt(rr[l], t);
        break;
      case 'image':
        (Mt('error', t), Mt('load', t));
        break;
      case 'details':
        Mt('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Mt('error', t), Mt('load', t));
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
        for (B in n)
          if (n.hasOwnProperty(B) && ((l = n[B]), l != null))
            switch (B) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u(137, e));
              default:
                Jt(t, e, B, l, n, null);
            }
        return;
      default:
        if (Gu(e)) {
          for (L in n) n.hasOwnProperty(L) && ((l = n[L]), l !== void 0 && Rc(t, e, L, l, n, void 0));
          return;
        }
    }
    for (m in n) n.hasOwnProperty(m) && ((l = n[m]), l != null && Jt(t, e, m, l, n, null));
  }
  function L1(t, e, n, l) {
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
          B = null,
          L = null;
        for (U in n) {
          var Z = n[U];
          if (n.hasOwnProperty(U) && Z != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                C = Z;
              default:
                l.hasOwnProperty(U) || Jt(t, e, U, null, l, Z);
            }
        }
        for (var D in l) {
          var U = l[D];
          if (((Z = n[D]), l.hasOwnProperty(D) && (U != null || Z != null)))
            switch (D) {
              case 'type':
                s = U;
                break;
              case 'name':
                r = U;
                break;
              case 'checked':
                B = U;
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
                U !== Z && Jt(t, e, D, U, l, Z);
            }
        }
        qu(t, d, m, C, B, L, s, r);
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
          D != null ? Rl(t, !!n, D, !1) : !!l != !!n && (e != null ? Rl(t, !!n, e, !0) : Rl(t, !!n, n ? [] : '', !1)));
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
        cd(t, D, U);
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
        for (B in l)
          if (((D = l[B]), (U = n[B]), l.hasOwnProperty(B) && D !== U && (D != null || U != null)))
            switch (B) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (D != null) throw Error(u(137, e));
                break;
              default:
                Jt(t, e, B, D, l, U);
            }
        return;
      default:
        if (Gu(e)) {
          for (var Ft in n)
            ((D = n[Ft]), n.hasOwnProperty(Ft) && D !== void 0 && !l.hasOwnProperty(Ft) && Rc(t, e, Ft, void 0, l, D));
          for (L in l)
            ((D = l[L]),
              (U = n[L]),
              !l.hasOwnProperty(L) || D === U || (D === void 0 && U === void 0) || Rc(t, e, L, D, l, U));
          return;
        }
    }
    for (var O in n) ((D = n[O]), n.hasOwnProperty(O) && D != null && !l.hasOwnProperty(O) && Jt(t, e, O, null, l, D));
    for (Z in l)
      ((D = l[Z]), (U = n[Z]), !l.hasOwnProperty(Z) || D === U || (D == null && U == null) || Jt(t, e, Z, D, l, U));
  }
  function hh(t) {
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
  function $1() {
    if (typeof performance.getEntriesByType == 'function') {
      for (var t = 0, e = 0, n = performance.getEntriesByType('resource'), l = 0; l < n.length; l++) {
        var r = n[l],
          s = r.transferSize,
          d = r.initiatorType,
          m = r.duration;
        if (s && m && hh(d)) {
          for (d = 0, m = r.responseEnd, l += 1; l < n.length; l++) {
            var C = n[l],
              B = C.startTime;
            if (B > m) break;
            var L = C.transferSize,
              Z = C.initiatorType;
            L && hh(Z) && ((C = C.responseEnd), (d += L * (C < m ? 1 : (m - B) / (C - B))));
          }
          if ((--l, (e += (8 * (s + d)) / (r.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number') ? t : 5;
  }
  var wc = null,
    Bc = null;
  function No(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function mh(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function gh(t, e) {
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
  function _c(t, e) {
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
  var Dc = null;
  function q1() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === Dc ? !1 : ((Dc = t), !0)) : ((Dc = null), !1);
  }
  var yh = typeof setTimeout == 'function' ? setTimeout : void 0,
    Y1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    vh = typeof Promise == 'function' ? Promise : void 0,
    G1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof vh < 'u'
          ? function (t) {
              return vh.resolve(null).then(t).catch(V1);
            }
          : yh;
  function V1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function La(t) {
    return t === 'head';
  }
  function bh(t, e) {
    var n = e,
      l = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (t.removeChild(r), oi(e));
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
    oi(e);
  }
  function Sh(t, e) {
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
  function jc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (jc(n), Lu(n));
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
  function X1(t, e, n, l) {
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
      if (((t = zn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Q1(t, e, n) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !n) ||
        ((t = zn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function xh(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
        ((t = zn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Nc(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function Uc(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading');
  }
  function Z1(t, e) {
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
  function zn(t) {
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
  var Hc = null;
  function Ch(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === '/$' || n === '/&') {
          if (e === 0) return zn(t.nextSibling);
          e--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Th(t) {
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
  function Eh(t, e, n) {
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
    Lu(t);
  }
  var An = new Map(),
    zh = new Set();
  function Uo(t) {
    return typeof t.getRootNode == 'function' ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ha = Y.d;
  Y.d = { f: K1, r: J1, D: F1, C: W1, L: P1, m: I1, X: ev, S: tv, M: nv };
  function K1() {
    var t = ha.f(),
      e = Mo();
    return t || e;
  }
  function J1(t) {
    var e = Al(t);
    e !== null && e.tag === 5 && e.type === 'form' ? Y0(e) : ha.r(t);
  }
  var li = typeof document > 'u' ? null : document;
  function Ah(t, e, n) {
    var l = li;
    if (l && typeof e == 'string' && e) {
      var r = vn(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == 'string' && (r += '[crossorigin="' + n + '"]'),
        zh.has(r) ||
          (zh.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement('link')), Ne(e, 'link', t), Re(e), l.head.appendChild(e))));
    }
  }
  function F1(t) {
    (ha.D(t), Ah('dns-prefetch', t, null));
  }
  function W1(t, e) {
    (ha.C(t, e), Ah('preconnect', t, e));
  }
  function P1(t, e, n) {
    ha.L(t, e, n);
    var l = li;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + vn(e) + '"]';
      e === 'image' && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + vn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (r += '[imagesizes="' + vn(n.imageSizes) + '"]'))
        : (r += '[href="' + vn(t) + '"]');
      var s = r;
      switch (e) {
        case 'style':
          s = ii(t);
          break;
        case 'script':
          s = ri(t);
      }
      An.has(s) ||
        ((t = x({ rel: 'preload', href: e === 'image' && n && n.imageSrcSet ? void 0 : t, as: e }, n)),
        An.set(s, t),
        l.querySelector(r) !== null ||
          (e === 'style' && l.querySelector(sr(s))) ||
          (e === 'script' && l.querySelector(cr(s))) ||
          ((e = l.createElement('link')), Ne(e, 'link', t), Re(e), l.head.appendChild(e)));
    }
  }
  function I1(t, e) {
    ha.m(t, e);
    var n = li;
    if (n && t) {
      var l = e && typeof e.as == 'string' ? e.as : 'script',
        r = 'link[rel="modulepreload"][as="' + vn(l) + '"][href="' + vn(t) + '"]',
        s = r;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          s = ri(t);
      }
      if (!An.has(s) && ((t = x({ rel: 'modulepreload', href: t }, e)), An.set(s, t), n.querySelector(r) === null)) {
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
  function tv(t, e, n) {
    ha.S(t, e, n);
    var l = li;
    if (l && t) {
      var r = Ml(l).hoistableStyles,
        s = ii(t);
      e = e || 'default';
      var d = r.get(s);
      if (!d) {
        var m = { loading: 0, preload: null };
        if ((d = l.querySelector(sr(s)))) m.loading = 5;
        else {
          ((t = x({ rel: 'stylesheet', href: t, 'data-precedence': e }, n)), (n = An.get(s)) && kc(t, n));
          var C = (d = l.createElement('link'));
          (Re(C),
            Ne(C, 'link', t),
            (C._p = new Promise(function (B, L) {
              ((C.onload = B), (C.onerror = L));
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
  function ev(t, e) {
    ha.X(t, e);
    var n = li;
    if (n && t) {
      var l = Ml(n).hoistableScripts,
        r = ri(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(cr(r))),
        s ||
          ((t = x({ src: t, async: !0 }, e)),
          (e = An.get(r)) && Lc(t, e),
          (s = n.createElement('script')),
          Re(s),
          Ne(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function nv(t, e) {
    ha.M(t, e);
    var n = li;
    if (n && t) {
      var l = Ml(n).hoistableScripts,
        r = ri(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(cr(r))),
        s ||
          ((t = x({ src: t, async: !0, type: 'module' }, e)),
          (e = An.get(r)) && Lc(t, e),
          (s = n.createElement('script')),
          Re(s),
          Ne(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function Mh(t, e, n, l) {
    var r = (r = ot.current) ? Uo(r) : null;
    if (!r) throw Error(u(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((e = ii(n.href)),
            (n = Ml(r).hoistableStyles),
            (l = n.get(e)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(e, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
          t = ii(n.href);
          var s = Ml(r).hoistableStyles,
            d = s.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              s.set(t, d),
              (s = r.querySelector(sr(t))) && !s._p && ((d.instance = s), (d.state.loading = 5)),
              An.has(t) ||
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
                An.set(t, n),
                s || av(r, t, n, d.state))),
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
            ? ((e = ri(n)),
              (n = Ml(r).hoistableScripts),
              (l = n.get(e)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(e, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function ii(t) {
    return 'href="' + vn(t) + '"';
  }
  function sr(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Oh(t) {
    return x({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function av(t, e, n, l) {
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
  function ri(t) {
    return '[src="' + vn(t) + '"]';
  }
  function cr(t) {
    return 'script[async]' + t;
  }
  function Rh(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var l = t.querySelector('style[data-href~="' + vn(n.href) + '"]');
          if (l) return ((e.instance = l), Re(l), l);
          var r = x({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (t.ownerDocument || t).createElement('style')),
            Re(l),
            Ne(l, 'style', r),
            Ho(l, n.precedence, t),
            (e.instance = l)
          );
        case 'stylesheet':
          r = ii(n.href);
          var s = t.querySelector(sr(r));
          if (s) return ((e.state.loading |= 4), (e.instance = s), Re(s), s);
          ((l = Oh(n)), (r = An.get(r)) && kc(l, r), (s = (t.ownerDocument || t).createElement('link')), Re(s));
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
            (s = ri(n.src)),
            (r = t.querySelector(cr(s)))
              ? ((e.instance = r), Re(r), r)
              : ((l = n),
                (r = An.get(s)) && ((l = x({}, n)), Lc(l, r)),
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
  function kc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Lc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ko = null;
  function wh(t, e, n) {
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
  function Bh(t, e, n) {
    ((t = t.ownerDocument || t), t.head.insertBefore(n, e === 'title' ? t.querySelector('head > title') : null));
  }
  function lv(t, e, n) {
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
  function _h(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function iv(t, e, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var r = ii(l.href),
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
        ((s = e.ownerDocument || e), (l = Oh(l)), (r = An.get(r)) && kc(l, r), (s = s.createElement('link')), Re(s));
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
  var $c = 0;
  function rv(t, e) {
    return (
      t.stylesheets && t.count === 0 && qo(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && qo(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                ((t.unsuspend = null), s());
              }
            }, 6e4 + e);
            0 < t.imgBytes && $c === 0 && ($c = 62500 * $1());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1), t.count === 0 && (t.stylesheets && qo(t, t.stylesheets), t.unsuspend))
                ) {
                  var s = t.unsuspend;
                  ((t.unsuspend = null), s());
                }
              },
              (t.imgBytes > $c ? 50 : 800) + e
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
      if (this.stylesheets) qo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var $o = null;
  function qo(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null && (t.count++, ($o = new Map()), e.forEach(ov, t), ($o = null), Lo.call(t)));
  }
  function ov(t, e) {
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
  var fr = { $$typeof: F, Provider: null, Consumer: null, _currentValue: K, _currentValue2: K, _threadCount: 0 };
  function uv(t, e, n, l, r, s, d, m, C) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Nu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Nu(0)),
      (this.hiddenUpdates = Nu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = s),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map()));
  }
  function Dh(t, e, n, l, r, s, d, m, C, B, L, Z) {
    return (
      (t = new uv(t, e, n, d, C, B, L, Z, m)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = sn(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (e = bs()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: l, isDehydrated: n, cache: e }),
      Ts(s),
      t
    );
  }
  function jh(t) {
    return t ? ((t = Hl), t) : Hl;
  }
  function Nh(t, e, n, l, r, s) {
    ((r = jh(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Oa(e)),
      (l.payload = { element: n }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (n = Ra(t, l, e)),
      n !== null && (rn(n, t, e), Gi(n, t, e)));
  }
  function Uh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function qc(t, e) {
    (Uh(t, e), (t = t.alternate) && Uh(t, e));
  }
  function Hh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pa(t, 67108864);
      (e !== null && rn(e, t, 67108864), qc(t, 67108864));
    }
  }
  function kh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = hn();
      e = Uu(e);
      var n = Pa(t, e);
      (n !== null && rn(n, t, e), qc(t, e));
    }
  }
  var Yo = !0;
  function sv(t, e, n, l) {
    var r = z.T;
    z.T = null;
    var s = Y.p;
    try {
      ((Y.p = 2), Yc(t, e, n, l));
    } finally {
      ((Y.p = s), (z.T = r));
    }
  }
  function cv(t, e, n, l) {
    var r = z.T;
    z.T = null;
    var s = Y.p;
    try {
      ((Y.p = 8), Yc(t, e, n, l));
    } finally {
      ((Y.p = s), (z.T = r));
    }
  }
  function Yc(t, e, n, l) {
    if (Yo) {
      var r = Gc(l);
      if (r === null) (Oc(t, e, l, Go, n), $h(t, l));
      else if (dv(r, t, e, n, l)) l.stopPropagation();
      else if (($h(t, l), e & 4 && -1 < fv.indexOf(t))) {
        for (; r !== null; ) {
          var s = Al(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var d = ne(s.pendingLanes);
                  if (d !== 0) {
                    var m = s;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                      var C = 1 << (31 - Ge(d));
                      ((m.entanglements[1] |= C), (d &= ~C));
                    }
                    (Gn(s), (Lt & 6) === 0 && ((zo = Oe() + 500), ir(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = Pa(s, 2)), m !== null && rn(m, s, 2), Mo(), qc(s, 2));
            }
          if (((s = Gc(l)), s === null && Oc(t, e, l, Go, n), s === r)) break;
          r = s;
        }
        r !== null && l.stopPropagation();
      } else Oc(t, e, l, null, n);
    }
  }
  function Gc(t) {
    return ((t = Xu(t)), Vc(t));
  }
  var Go = null;
  function Vc(t) {
    if (((Go = null), (t = zl(t)), t !== null)) {
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
  function Lh(t) {
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
        switch (it()) {
          case lt:
            return 2;
          case xt:
            return 8;
          case zt:
          case _t:
            return 32;
          case Et:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xc = !1,
    $a = null,
    qa = null,
    Ya = null,
    dr = new Map(),
    pr = new Map(),
    Ga = [],
    fv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function $h(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        $a = null;
        break;
      case 'dragenter':
      case 'dragleave':
        qa = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ya = null;
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
        e !== null && ((e = Al(e)), e !== null && Hh(e)),
        t)
      : ((t.eventSystemFlags |= l), (e = t.targetContainers), r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function dv(t, e, n, l, r) {
    switch (e) {
      case 'focusin':
        return (($a = hr($a, t, e, n, l, r)), !0);
      case 'dragenter':
        return ((qa = hr(qa, t, e, n, l, r)), !0);
      case 'mouseover':
        return ((Ya = hr(Ya, t, e, n, l, r)), !0);
      case 'pointerover':
        var s = r.pointerId;
        return (dr.set(s, hr(dr.get(s) || null, t, e, n, l, r)), !0);
      case 'gotpointercapture':
        return ((s = r.pointerId), pr.set(s, hr(pr.get(s) || null, t, e, n, l, r)), !0);
    }
    return !1;
  }
  function qh(t) {
    var e = zl(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              ed(t.priority, function () {
                kh(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = h(n)), e !== null)) {
            ((t.blockedOn = e),
              ed(t.priority, function () {
                kh(n);
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
      var n = Gc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Vu = l), n.target.dispatchEvent(l), (Vu = null));
      } else return ((e = Al(n)), e !== null && Hh(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Yh(t, e, n) {
    Vo(t) && n.delete(e);
  }
  function pv() {
    ((Xc = !1),
      $a !== null && Vo($a) && ($a = null),
      qa !== null && Vo(qa) && (qa = null),
      Ya !== null && Vo(Ya) && (Ya = null),
      dr.forEach(Yh),
      pr.forEach(Yh));
  }
  function Xo(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), Xc || ((Xc = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, pv)));
  }
  var Qo = null;
  function Gh(t) {
    Qo !== t &&
      ((Qo = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Qo === t && (Qo = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != 'function') {
            if (Vc(l || n) === null) continue;
            break;
          }
          var s = Al(n);
          s !== null && (t.splice(e, 3), (e -= 3), Gs(s, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function oi(t) {
    function e(C) {
      return Xo(C, t);
    }
    ($a !== null && Xo($a, t), qa !== null && Xo(qa, t), Ya !== null && Xo(Ya, t), dr.forEach(e), pr.forEach(e));
    for (var n = 0; n < Ga.length; n++) {
      var l = Ga[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ga.length && ((n = Ga[0]), n.blockedOn === null); ) (qh(n), n.blockedOn === null && Ga.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          s = n[l + 1],
          d = r[Ie] || null;
        if (typeof s == 'function') d || Gh(n);
        else if (d) {
          var m = null;
          if (s && s.hasAttribute('formAction')) {
            if (((r = s), (d = s[Ie] || null))) m = d.formAction;
            else if (Vc(r) !== null) continue;
          } else m = d.action;
          (typeof m == 'function' ? (n[l + 1] = m) : (n.splice(l, 3), (l -= 3)), Gh(n));
        }
      }
  }
  function Vh() {
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
  function Qc(t) {
    this._internalRoot = t;
  }
  ((Zo.prototype.render = Qc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        l = hn();
      Nh(n, l, t, e, null, null);
    }),
    (Zo.prototype.unmount = Qc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Nh(t.current, 2, null, t, null, null), Mo(), (e[El] = null));
        }
      }));
  function Zo(t) {
    this._internalRoot = t;
  }
  Zo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = td();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ga.length && e !== 0 && e < Ga[n].priority; n++);
      (Ga.splice(n, 0, t), n === 0 && qh(t));
    }
  };
  var Xh = i.version;
  if (Xh !== '19.2.0') throw Error(u(527, Xh, '19.2.0'));
  Y.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ? Error(u(188)) : ((t = Object.keys(t).join(',')), Error(u(268, t)));
    return ((t = g(e)), (t = t !== null ? b(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var hv = {
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
        ((te = Ko.inject(hv)), (re = Ko));
      } catch {}
  }
  return (
    (gr.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        l = '',
        r = P0,
        s = I0,
        d = tp;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = Dh(t, 1, !1, null, null, n, l, null, r, s, d, Vh)),
        (t[El] = e.current),
        Mc(t),
        new Qc(e)
      );
    }),
    (gr.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var l = !1,
        r = '',
        s = P0,
        d = I0,
        m = tp,
        C = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (C = n.formState)),
        (e = Dh(t, 1, !0, e, n ?? null, l, r, C, s, d, m, Vh)),
        (e.context = jh(null)),
        (n = e.current),
        (l = hn()),
        (l = Uu(l)),
        (r = Oa(l)),
        (r.callback = null),
        Ra(n, r, l),
        (n = l),
        (e.current.lanes = n),
        zi(e, n),
        Gn(e),
        (t[El] = e.current),
        Mc(t),
        new Zo(e)
      );
    }),
    (gr.version = '19.2.0'),
    gr
  );
}
var em;
function Ev() {
  if (em) return Jc.exports;
  em = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Jc.exports = Tv()), Jc.exports);
}
var zv = Ev();
const Er = { black: '#000', white: '#fff' },
  ui = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  si = { 50: '#f3e5f5', 200: '#ce93d8', 300: '#ba68c8', 400: '#ab47bc', 500: '#9c27b0', 700: '#7b1fa2' },
  ci = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  fi = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  di = { 300: '#81c784', 400: '#66bb6a', 500: '#4caf50', 700: '#388e3c', 800: '#2e7d32', 900: '#1b5e20' },
  yr = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  Av = {
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
const wf = '$$material';
function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o) ({}).hasOwnProperty.call(o, u) && (a[u] = o[u]);
          }
          return a;
        }),
    su.apply(null, arguments)
  );
}
function Mv(a) {
  if (a.sheet) return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a) return document.styleSheets[i];
}
function Ov(a) {
  var i = document.createElement('style');
  return (
    i.setAttribute('data-emotion', a.key),
    a.nonce !== void 0 && i.setAttribute('nonce', a.nonce),
    i.appendChild(document.createTextNode('')),
    i.setAttribute('data-s', ''),
    i
  );
}
var Rv = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ov(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = Mv(c);
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
  cu = '-moz-',
  $t = '-webkit-',
  Im = 'comm',
  Bf = 'rule',
  _f = 'decl',
  wv = '@import',
  tg = '@keyframes',
  Bv = '@layer',
  _v = Math.abs,
  bu = String.fromCharCode,
  Dv = Object.assign;
function jv(a, i) {
  return Ue(a, 0) ^ 45 ? (((((((i << 2) ^ Ue(a, 0)) << 2) ^ Ue(a, 1)) << 2) ^ Ue(a, 2)) << 2) ^ Ue(a, 3) : 0;
}
function eg(a) {
  return a.trim();
}
function Nv(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function qt(a, i, o) {
  return a.replace(i, o);
}
function df(a, i) {
  return a.indexOf(i);
}
function Ue(a, i) {
  return a.charCodeAt(i) | 0;
}
function zr(a, i, o) {
  return a.slice(i, o);
}
function Xn(a) {
  return a.length;
}
function Df(a) {
  return a.length;
}
function Jo(a, i) {
  return (i.push(a), a);
}
function Uv(a, i) {
  return a.map(i).join('');
}
var Su = 1,
  Si = 1,
  ng = 0,
  on = 0,
  Ee = 0,
  Ci = '';
function xu(a, i, o, u, c, f, p) {
  return { value: a, root: i, parent: o, type: u, props: c, children: f, line: Su, column: Si, length: p, return: '' };
}
function vr(a, i) {
  return Dv(xu('', null, null, '', null, null, 0), a, { length: -a.length }, i);
}
function Hv() {
  return Ee;
}
function kv() {
  return ((Ee = on > 0 ? Ue(Ci, --on) : 0), Si--, Ee === 10 && ((Si = 1), Su--), Ee);
}
function gn() {
  return ((Ee = on < ng ? Ue(Ci, on++) : 0), Si++, Ee === 10 && ((Si = 1), Su++), Ee);
}
function Kn() {
  return Ue(Ci, on);
}
function nu() {
  return on;
}
function Br(a, i) {
  return zr(Ci, a, i);
}
function Ar(a) {
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
function ag(a) {
  return ((Su = Si = 1), (ng = Xn((Ci = a))), (on = 0), []);
}
function lg(a) {
  return ((Ci = ''), a);
}
function au(a) {
  return eg(Br(on - 1, pf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function Lv(a) {
  for (; (Ee = Kn()) && Ee < 33; ) gn();
  return Ar(a) > 2 || Ar(Ee) > 3 ? '' : ' ';
}
function $v(a, i) {
  for (; --i && gn() && !(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97)); );
  return Br(a, nu() + (i < 6 && Kn() == 32 && gn() == 32));
}
function pf(a) {
  for (; gn(); )
    switch (Ee) {
      case a:
        return on;
      case 34:
      case 39:
        a !== 34 && a !== 39 && pf(Ee);
        break;
      case 40:
        a === 41 && pf(a);
        break;
      case 92:
        gn();
        break;
    }
  return on;
}
function qv(a, i) {
  for (; gn() && a + Ee !== 57; ) if (a + Ee === 84 && Kn() === 47) break;
  return '/*' + Br(i, on - 1) + '*' + bu(a === 47 ? a : gn());
}
function Yv(a) {
  for (; !Ar(Kn()); ) gn();
  return Br(a, on);
}
function Gv(a) {
  return lg(lu('', null, null, null, [''], (a = ag(a)), 0, [0], a));
}
function lu(a, i, o, u, c, f, p, h, y) {
  for (
    var g = 0, b = 0, x = p, A = 0, _ = 0, M = 0, T = 1, H = 1, q = 1, W = 0, F = '', G = c, j = f, X = u, J = F;
    H;

  )
    switch (((M = W), (W = gn()))) {
      case 40:
        if (M != 108 && Ue(J, x - 1) == 58) {
          df((J += qt(au(W), '&', '&\f')), '&\f') != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        J += au(W);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        J += Lv(M);
        break;
      case 92:
        J += $v(nu() - 1, 7);
        continue;
      case 47:
        switch (Kn()) {
          case 42:
          case 47:
            Jo(Vv(qv(gn(), nu()), i, o), y);
            break;
          default:
            J += '/';
        }
        break;
      case 123 * T:
        h[g++] = Xn(J) * q;
      case 125 * T:
      case 59:
      case 0:
        switch (W) {
          case 0:
          case 125:
            H = 0;
          case 59 + b:
            (q == -1 && (J = qt(J, /\f/g, '')),
              _ > 0 && Xn(J) - x && Jo(_ > 32 ? am(J + ';', u, o, x - 1) : am(qt(J, ' ', '') + ';', u, o, x - 2), y));
            break;
          case 59:
            J += ';';
          default:
            if ((Jo((X = nm(J, i, o, g, b, c, h, F, (G = []), (j = []), x)), f), W === 123))
              if (b === 0) lu(J, i, X, X, G, f, x, h, j);
              else
                switch (A === 99 && Ue(J, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lu(a, X, X, u && Jo(nm(a, X, X, 0, 0, c, h, F, c, (G = []), x), j), c, j, x, h, u ? G : j);
                    break;
                  default:
                    lu(J, X, X, X, [''], j, 0, h, j);
                }
        }
        ((g = b = _ = 0), (T = q = 1), (F = J = ''), (x = p));
        break;
      case 58:
        ((x = 1 + Xn(J)), (_ = M));
      default:
        if (T < 1) {
          if (W == 123) --T;
          else if (W == 125 && T++ == 0 && kv() == 125) continue;
        }
        switch (((J += bu(W)), W * T)) {
          case 38:
            q = b > 0 ? 1 : ((J += '\f'), -1);
            break;
          case 44:
            ((h[g++] = (Xn(J) - 1) * q), (q = 1));
            break;
          case 64:
            (Kn() === 45 && (J += au(gn())), (A = Kn()), (b = x = Xn((F = J += Yv(nu())))), W++);
            break;
          case 45:
            M === 45 && Xn(J) == 2 && (T = 0);
        }
    }
  return f;
}
function nm(a, i, o, u, c, f, p, h, y, g, b) {
  for (var x = c - 1, A = c === 0 ? f : [''], _ = Df(A), M = 0, T = 0, H = 0; M < u; ++M)
    for (var q = 0, W = zr(a, x + 1, (x = _v((T = p[M])))), F = a; q < _; ++q)
      (F = eg(T > 0 ? A[q] + ' ' + W : qt(W, /&\f/g, A[q]))) && (y[H++] = F);
  return xu(a, i, o, c === 0 ? Bf : h, y, g, b);
}
function Vv(a, i, o) {
  return xu(a, i, o, Im, bu(Hv()), zr(a, 2, -2), 0);
}
function am(a, i, o, u) {
  return xu(a, i, o, _f, zr(a, 0, u), zr(a, u + 1, -1), u);
}
function yi(a, i) {
  for (var o = '', u = Df(a), c = 0; c < u; c++) o += i(a[c], c, a, i) || '';
  return o;
}
function Xv(a, i, o, u) {
  switch (a.type) {
    case Bv:
      if (a.children.length) break;
    case wv:
    case _f:
      return (a.return = a.return || a.value);
    case Im:
      return '';
    case tg:
      return (a.return = a.value + '{' + yi(a.children, u) + '}');
    case Bf:
      a.value = a.props.join(',');
  }
  return Xn((o = yi(a.children, u))) ? (a.return = a.value + '{' + o + '}') : '';
}
function Qv(a) {
  var i = Df(a);
  return function (o, u, c, f) {
    for (var p = '', h = 0; h < i; h++) p += a[h](o, u, c, f) || '';
    return p;
  };
}
function Zv(a) {
  return function (i) {
    i.root || ((i = i.return) && a(i));
  };
}
function ig(a) {
  var i = Object.create(null);
  return function (o) {
    return (i[o] === void 0 && (i[o] = a(o)), i[o]);
  };
}
var Kv = function (i, o, u) {
    for (var c = 0, f = 0; (c = f), (f = Kn()), c === 38 && f === 12 && (o[u] = 1), !Ar(f); ) gn();
    return Br(i, on);
  },
  Jv = function (i, o) {
    var u = -1,
      c = 44;
    do
      switch (Ar(c)) {
        case 0:
          (c === 38 && Kn() === 12 && (o[u] = 1), (i[u] += Kv(on - 1, o, u)));
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
          i[u] += bu(c);
      }
    while ((c = gn()));
    return i;
  },
  Fv = function (i, o) {
    return lg(Jv(ag(i), o));
  },
  lm = new WeakMap(),
  Wv = function (i) {
    if (!(i.type !== 'rule' || !i.parent || i.length < 1)) {
      for (var o = i.value, u = i.parent, c = i.column === u.column && i.line === u.line; u.type !== 'rule'; )
        if (((u = u.parent), !u)) return;
      if (!(i.props.length === 1 && o.charCodeAt(0) !== 58 && !lm.get(u)) && !c) {
        lm.set(i, !0);
        for (var f = [], p = Fv(o, f), h = u.props, y = 0, g = 0; y < p.length; y++)
          for (var b = 0; b < h.length; b++, g++) i.props[g] = f[y] ? p[y].replace(/&\f/g, h[b]) : h[b] + ' ' + p[y];
      }
    }
  },
  Pv = function (i) {
    if (i.type === 'decl') {
      var o = i.value;
      o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && ((i.return = ''), (i.value = ''));
    }
  };
function rg(a, i) {
  switch (jv(a, i)) {
    case 5103:
      return $t + 'print-' + a + a;
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
      return $t + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $t + a + cu + a + Le + a + a;
    case 6828:
    case 4268:
      return $t + a + Le + a + a;
    case 6165:
      return $t + a + Le + 'flex-' + a + a;
    case 5187:
      return $t + a + qt(a, /(\w+).+(:[^]+)/, $t + 'box-$1$2' + Le + 'flex-$1$2') + a;
    case 5443:
      return $t + a + Le + 'flex-item-' + qt(a, /flex-|-self/, '') + a;
    case 4675:
      return $t + a + Le + 'flex-line-pack' + qt(a, /align-content|flex-|-self/, '') + a;
    case 5548:
      return $t + a + Le + qt(a, 'shrink', 'negative') + a;
    case 5292:
      return $t + a + Le + qt(a, 'basis', 'preferred-size') + a;
    case 6060:
      return $t + 'box-' + qt(a, '-grow', '') + $t + a + Le + qt(a, 'grow', 'positive') + a;
    case 4554:
      return $t + qt(a, /([^-])(transform)/g, '$1' + $t + '$2') + a;
    case 6187:
      return qt(qt(qt(a, /(zoom-|grab)/, $t + '$1'), /(image-set)/, $t + '$1'), a, '') + a;
    case 5495:
    case 3959:
      return qt(a, /(image-set\([^]*)/, $t + '$1$`$1');
    case 4968:
      return (
        qt(qt(a, /(.+:)(flex-)?(.*)/, $t + 'box-pack:$3' + Le + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + $t + a + a
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return qt(a, /(.+)-inline(.+)/, $t + '$1$2') + a;
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
            return qt(a, /(.+:)(.+)-([^]+)/, '$1' + $t + '$2-$3$1' + cu + (Ue(a, i + 3) == 108 ? '$3' : '$2-$3')) + a;
          case 115:
            return ~df(a, 'stretch') ? rg(qt(a, 'stretch', 'fill-available'), i) + a : a;
        }
      break;
    case 4949:
      if (Ue(a, i + 1) !== 115) break;
    case 6444:
      switch (Ue(a, Xn(a) - 3 - (~df(a, '!important') && 10))) {
        case 107:
          return qt(a, ':', ':' + $t) + a;
        case 101:
          return (
            qt(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + $t + (Ue(a, 14) === 45 ? 'inline-' : '') + 'box$3$1' + $t + '$2$3$1' + Le + '$2box$3'
            ) + a
          );
      }
      break;
    case 5936:
      switch (Ue(a, i + 11)) {
        case 114:
          return $t + a + Le + qt(a, /[svh]\w+-[tblr]{2}/, 'tb') + a;
        case 108:
          return $t + a + Le + qt(a, /[svh]\w+-[tblr]{2}/, 'tb-rl') + a;
        case 45:
          return $t + a + Le + qt(a, /[svh]\w+-[tblr]{2}/, 'lr') + a;
      }
      return $t + a + Le + a + a;
  }
  return a;
}
var Iv = function (i, o, u, c) {
    if (i.length > -1 && !i.return)
      switch (i.type) {
        case _f:
          i.return = rg(i.value, i.length);
          break;
        case tg:
          return yi([vr(i, { value: qt(i.value, '@', '@' + $t) })], c);
        case Bf:
          if (i.length)
            return Uv(i.props, function (f) {
              switch (Nv(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return yi([vr(i, { props: [qt(f, /:(read-\w+)/, ':' + cu + '$1')] })], c);
                case '::placeholder':
                  return yi(
                    [
                      vr(i, { props: [qt(f, /:(plac\w+)/, ':' + $t + 'input-$1')] }),
                      vr(i, { props: [qt(f, /:(plac\w+)/, ':' + cu + '$1')] }),
                      vr(i, { props: [qt(f, /:(plac\w+)/, Le + 'input-$1')] }),
                    ],
                    c
                  );
              }
              return '';
            });
      }
  },
  tb = [Iv],
  eb = function (i) {
    var o = i.key;
    if (o === 'css') {
      var u = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(u, function (T) {
        var H = T.getAttribute('data-emotion');
        H.indexOf(' ') !== -1 && (document.head.appendChild(T), T.setAttribute('data-s', ''));
      });
    }
    var c = i.stylisPlugins || tb,
      f = {},
      p,
      h = [];
    ((p = i.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function (T) {
        for (var H = T.getAttribute('data-emotion').split(' '), q = 1; q < H.length; q++) f[H[q]] = !0;
        h.push(T);
      }));
    var y,
      g = [Wv, Pv];
    {
      var b,
        x = [
          Xv,
          Zv(function (T) {
            b.insert(T);
          }),
        ],
        A = Qv(g.concat(c, x)),
        _ = function (H) {
          return yi(Gv(H), A);
        };
      y = function (H, q, W, F) {
        ((b = W), _(H ? H + '{' + q.styles + '}' : q.styles), F && (M.inserted[q.name] = !0));
      };
    }
    var M = {
      key: o,
      sheet: new Rv({
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
    return (M.sheet.hydrate(h), M);
  },
  Ic = { exports: {} },
  Yt = {};
var im;
function nb() {
  if (im) return Yt;
  im = 1;
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
    x = a ? Symbol.for('react.suspense') : 60113,
    A = a ? Symbol.for('react.suspense_list') : 60120,
    _ = a ? Symbol.for('react.memo') : 60115,
    M = a ? Symbol.for('react.lazy') : 60116,
    T = a ? Symbol.for('react.block') : 60121,
    H = a ? Symbol.for('react.fundamental') : 60117,
    q = a ? Symbol.for('react.responder') : 60118,
    W = a ? Symbol.for('react.scope') : 60119;
  function F(j) {
    if (typeof j == 'object' && j !== null) {
      var X = j.$$typeof;
      switch (X) {
        case i:
          switch (((j = j.type), j)) {
            case y:
            case g:
            case u:
            case f:
            case c:
            case x:
              return j;
            default:
              switch (((j = j && j.$$typeof), j)) {
                case h:
                case b:
                case M:
                case _:
                case p:
                  return j;
                default:
                  return X;
              }
          }
        case o:
          return X;
      }
    }
  }
  function G(j) {
    return F(j) === g;
  }
  return (
    (Yt.AsyncMode = y),
    (Yt.ConcurrentMode = g),
    (Yt.ContextConsumer = h),
    (Yt.ContextProvider = p),
    (Yt.Element = i),
    (Yt.ForwardRef = b),
    (Yt.Fragment = u),
    (Yt.Lazy = M),
    (Yt.Memo = _),
    (Yt.Portal = o),
    (Yt.Profiler = f),
    (Yt.StrictMode = c),
    (Yt.Suspense = x),
    (Yt.isAsyncMode = function (j) {
      return G(j) || F(j) === y;
    }),
    (Yt.isConcurrentMode = G),
    (Yt.isContextConsumer = function (j) {
      return F(j) === h;
    }),
    (Yt.isContextProvider = function (j) {
      return F(j) === p;
    }),
    (Yt.isElement = function (j) {
      return typeof j == 'object' && j !== null && j.$$typeof === i;
    }),
    (Yt.isForwardRef = function (j) {
      return F(j) === b;
    }),
    (Yt.isFragment = function (j) {
      return F(j) === u;
    }),
    (Yt.isLazy = function (j) {
      return F(j) === M;
    }),
    (Yt.isMemo = function (j) {
      return F(j) === _;
    }),
    (Yt.isPortal = function (j) {
      return F(j) === o;
    }),
    (Yt.isProfiler = function (j) {
      return F(j) === f;
    }),
    (Yt.isStrictMode = function (j) {
      return F(j) === c;
    }),
    (Yt.isSuspense = function (j) {
      return F(j) === x;
    }),
    (Yt.isValidElementType = function (j) {
      return (
        typeof j == 'string' ||
        typeof j == 'function' ||
        j === u ||
        j === g ||
        j === f ||
        j === c ||
        j === x ||
        j === A ||
        (typeof j == 'object' &&
          j !== null &&
          (j.$$typeof === M ||
            j.$$typeof === _ ||
            j.$$typeof === p ||
            j.$$typeof === h ||
            j.$$typeof === b ||
            j.$$typeof === H ||
            j.$$typeof === q ||
            j.$$typeof === W ||
            j.$$typeof === T))
      );
    }),
    (Yt.typeOf = F),
    Yt
  );
}
var rm;
function ab() {
  return (rm || ((rm = 1), (Ic.exports = nb())), Ic.exports);
}
var tf, om;
function lb() {
  if (om) return tf;
  om = 1;
  var a = ab(),
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
  function p(M) {
    return a.isMemo(M) ? c : f[M.$$typeof] || i;
  }
  var h = Object.defineProperty,
    y = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    x = Object.getPrototypeOf,
    A = Object.prototype;
  function _(M, T, H) {
    if (typeof T != 'string') {
      if (A) {
        var q = x(T);
        q && q !== A && _(M, q, H);
      }
      var W = y(T);
      g && (W = W.concat(g(T)));
      for (var F = p(M), G = p(T), j = 0; j < W.length; ++j) {
        var X = W[j];
        if (!o[X] && !(H && H[X]) && !(G && G[X]) && !(F && F[X])) {
          var J = b(T, X);
          try {
            h(M, X, J);
          } catch {}
        }
      }
    }
    return M;
  }
  return ((tf = _), tf);
}
lb();
var ib = !0;
function og(a, i, o) {
  var u = '';
  return (
    o.split(' ').forEach(function (c) {
      a[c] !== void 0 ? i.push(a[c] + ';') : c && (u += c + ' ');
    }),
    u
  );
}
var jf = function (i, o, u) {
    var c = i.key + '-' + o.name;
    (u === !1 || ib === !1) && i.registered[c] === void 0 && (i.registered[c] = o.styles);
  },
  ug = function (i, o, u) {
    jf(i, o, u);
    var c = i.key + '-' + o.name;
    if (i.inserted[o.name] === void 0) {
      var f = o;
      do (i.insert(o === f ? '.' + c : '', f, i.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function rb(a) {
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
var ob = {
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
  ub = /[A-Z]|^ms/g,
  sb = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  sg = function (i) {
    return i.charCodeAt(1) === 45;
  },
  um = function (i) {
    return i != null && typeof i != 'boolean';
  },
  ef = ig(function (a) {
    return sg(a) ? a : a.replace(ub, '-$&').toLowerCase();
  }),
  sm = function (i, o) {
    switch (i) {
      case 'animation':
      case 'animationName':
        if (typeof o == 'string')
          return o.replace(sb, function (u, c, f) {
            return ((Qn = { name: c, styles: f, next: Qn }), c);
          });
    }
    return ob[i] !== 1 && !sg(i) && typeof o == 'number' && o !== 0 ? o + 'px' : o;
  };
function Mr(a, i, o) {
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
      return cb(a, i, o);
    }
    case 'function': {
      if (a !== void 0) {
        var y = Qn,
          g = o(a);
        return ((Qn = y), Mr(a, i, g));
      }
      break;
    }
  }
  var b = o;
  if (i == null) return b;
  var x = i[b];
  return x !== void 0 ? x : b;
}
function cb(a, i, o) {
  var u = '';
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) u += Mr(a, i, o[c]) + ';';
  else
    for (var f in o) {
      var p = o[f];
      if (typeof p != 'object') {
        var h = p;
        i != null && i[h] !== void 0 ? (u += f + '{' + i[h] + '}') : um(h) && (u += ef(f) + ':' + sm(f, h) + ';');
      } else if (Array.isArray(p) && typeof p[0] == 'string' && (i == null || i[p[0]] === void 0))
        for (var y = 0; y < p.length; y++) um(p[y]) && (u += ef(f) + ':' + sm(f, p[y]) + ';');
      else {
        var g = Mr(a, i, p);
        switch (f) {
          case 'animation':
          case 'animationName': {
            u += ef(f) + ':' + g + ';';
            break;
          }
          default:
            u += f + '{' + g + '}';
        }
      }
    }
  return u;
}
var cm = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Qn;
function Cu(a, i, o) {
  if (a.length === 1 && typeof a[0] == 'object' && a[0] !== null && a[0].styles !== void 0) return a[0];
  var u = !0,
    c = '';
  Qn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) ((u = !1), (c += Mr(o, i, f)));
  else {
    var p = f;
    c += p[0];
  }
  for (var h = 1; h < a.length; h++)
    if (((c += Mr(o, i, a[h])), u)) {
      var y = f;
      c += y[h];
    }
  cm.lastIndex = 0;
  for (var g = '', b; (b = cm.exec(c)) !== null; ) g += '-' + b[1];
  var x = rb(c) + g;
  return { name: x, styles: c, next: Qn };
}
var fb = function (i) {
    return i();
  },
  db = ff.useInsertionEffect ? ff.useInsertionEffect : !1,
  cg = db || fb,
  fg = N.createContext(typeof HTMLElement < 'u' ? eb({ key: 'css' }) : null);
fg.Provider;
var dg = function (i) {
    return N.forwardRef(function (o, u) {
      var c = N.useContext(fg);
      return i(o, c, u);
    });
  },
  Nf = N.createContext({}),
  Uf = {}.hasOwnProperty,
  hf = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  pb = function (i, o) {
    var u = {};
    for (var c in o) Uf.call(o, c) && (u[c] = o[c]);
    return ((u[hf] = i), u);
  },
  hb = function (i) {
    var o = i.cache,
      u = i.serialized,
      c = i.isStringTag;
    return (
      jf(o, u, c),
      cg(function () {
        return ug(o, u, c);
      }),
      null
    );
  },
  mb = dg(function (a, i, o) {
    var u = a.css;
    typeof u == 'string' && i.registered[u] !== void 0 && (u = i.registered[u]);
    var c = a[hf],
      f = [u],
      p = '';
    typeof a.className == 'string'
      ? (p = og(i.registered, f, a.className))
      : a.className != null && (p = a.className + ' ');
    var h = Cu(f, void 0, N.useContext(Nf));
    p += i.key + '-' + h.name;
    var y = {};
    for (var g in a) Uf.call(a, g) && g !== 'css' && g !== hf && (y[g] = a[g]);
    return (
      (y.className = p),
      o && (y.ref = o),
      N.createElement(
        N.Fragment,
        null,
        N.createElement(hb, { cache: i, serialized: h, isStringTag: typeof c == 'string' }),
        N.createElement(c, y)
      )
    );
  }),
  gb = mb,
  fm = function (i, o) {
    var u = arguments;
    if (o == null || !Uf.call(o, 'css')) return N.createElement.apply(void 0, u);
    var c = u.length,
      f = new Array(c);
    ((f[0] = gb), (f[1] = pb(i, o)));
    for (var p = 2; p < c; p++) f[p] = u[p];
    return N.createElement.apply(null, f);
  };
(function (a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(fm || (fm = {}));
function _r() {
  for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
  return Cu(i);
}
function Cl() {
  var a = _r.apply(void 0, arguments),
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
var yb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  vb = ig(function (a) {
    return yb.test(a) || (a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91);
  }),
  bb = vb,
  Sb = function (i) {
    return i !== 'theme';
  },
  dm = function (i) {
    return typeof i == 'string' && i.charCodeAt(0) > 96 ? bb : Sb;
  },
  pm = function (i, o, u) {
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
  xb = function (i) {
    var o = i.cache,
      u = i.serialized,
      c = i.isStringTag;
    return (
      jf(o, u, c),
      cg(function () {
        return ug(o, u, c);
      }),
      null
    );
  },
  Cb = function a(i, o) {
    var u = i.__emotion_real === i,
      c = (u && i.__emotion_base) || i,
      f,
      p;
    o !== void 0 && ((f = o.label), (p = o.target));
    var h = pm(i, o, u),
      y = h || dm(c),
      g = !y('as');
    return function () {
      var b = arguments,
        x = u && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
      if ((f !== void 0 && x.push('label:' + f + ';'), b[0] == null || b[0].raw === void 0)) x.push.apply(x, b);
      else {
        var A = b[0];
        x.push(A[0]);
        for (var _ = b.length, M = 1; M < _; M++) x.push(b[M], A[M]);
      }
      var T = dg(function (H, q, W) {
        var F = (g && H.as) || c,
          G = '',
          j = [],
          X = H;
        if (H.theme == null) {
          X = {};
          for (var J in H) X[J] = H[J];
          X.theme = N.useContext(Nf);
        }
        typeof H.className == 'string'
          ? (G = og(q.registered, j, H.className))
          : H.className != null && (G = H.className + ' ');
        var st = Cu(x.concat(j), q.registered, X);
        ((G += q.key + '-' + st.name), p !== void 0 && (G += ' ' + p));
        var ct = g && h === void 0 ? dm(F) : y,
          pt = {};
        for (var ft in H) (g && ft === 'as') || (ct(ft) && (pt[ft] = H[ft]));
        return (
          (pt.className = G),
          W && (pt.ref = W),
          N.createElement(
            N.Fragment,
            null,
            N.createElement(xb, { cache: q, serialized: st, isStringTag: typeof F == 'string' }),
            N.createElement(F, pt)
          )
        );
      });
      return (
        (T.displayName =
          f !== void 0 ? f : 'Styled(' + (typeof c == 'string' ? c : c.displayName || c.name || 'Component') + ')'),
        (T.defaultProps = i.defaultProps),
        (T.__emotion_real = T),
        (T.__emotion_base = c),
        (T.__emotion_styles = x),
        (T.__emotion_forwardProp = h),
        Object.defineProperty(T, 'toString', {
          value: function () {
            return '.' + p;
          },
        }),
        (T.withComponent = function (H, q) {
          var W = a(H, su({}, o, q, { shouldForwardProp: pm(T, q, !0) }));
          return W.apply(void 0, x);
        }),
        T
      );
    };
  },
  Tb = [
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
  mf = Cb.bind(null);
Tb.forEach(function (a) {
  mf[a] = mf(a);
});
function pg(a, i) {
  return mf(a, i);
}
function Eb(a, i) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = i(a.__emotion_styles));
}
const hm = [];
function yl(a) {
  return ((hm[0] = a), Cu(hm));
}
var nf = { exports: {} },
  Wt = {};
var mm;
function zb() {
  if (mm) return Wt;
  mm = 1;
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
    x = Symbol.for('react.lazy'),
    A = Symbol.for('react.view_transition'),
    _ = Symbol.for('react.client.reference');
  function M(T) {
    if (typeof T == 'object' && T !== null) {
      var H = T.$$typeof;
      switch (H) {
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
                case x:
                case b:
                  return T;
                case f:
                  return T;
                default:
                  return H;
              }
          }
        case i:
          return H;
      }
    }
  }
  return (
    (Wt.ContextConsumer = f),
    (Wt.ContextProvider = p),
    (Wt.Element = a),
    (Wt.ForwardRef = h),
    (Wt.Fragment = o),
    (Wt.Lazy = x),
    (Wt.Memo = b),
    (Wt.Portal = i),
    (Wt.Profiler = c),
    (Wt.StrictMode = u),
    (Wt.Suspense = y),
    (Wt.SuspenseList = g),
    (Wt.isContextConsumer = function (T) {
      return M(T) === f;
    }),
    (Wt.isContextProvider = function (T) {
      return M(T) === p;
    }),
    (Wt.isElement = function (T) {
      return typeof T == 'object' && T !== null && T.$$typeof === a;
    }),
    (Wt.isForwardRef = function (T) {
      return M(T) === h;
    }),
    (Wt.isFragment = function (T) {
      return M(T) === o;
    }),
    (Wt.isLazy = function (T) {
      return M(T) === x;
    }),
    (Wt.isMemo = function (T) {
      return M(T) === b;
    }),
    (Wt.isPortal = function (T) {
      return M(T) === i;
    }),
    (Wt.isProfiler = function (T) {
      return M(T) === c;
    }),
    (Wt.isStrictMode = function (T) {
      return M(T) === u;
    }),
    (Wt.isSuspense = function (T) {
      return M(T) === y;
    }),
    (Wt.isSuspenseList = function (T) {
      return M(T) === g;
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
          (T.$$typeof === x ||
            T.$$typeof === b ||
            T.$$typeof === p ||
            T.$$typeof === f ||
            T.$$typeof === h ||
            T.$$typeof === _ ||
            T.getModuleId !== void 0))
      );
    }),
    (Wt.typeOf = M),
    Wt
  );
}
var gm;
function Ab() {
  return (gm || ((gm = 1), (nf.exports = zb())), nf.exports);
}
var hg = Ab();
function Zn(a) {
  if (typeof a != 'object' || a === null) return !1;
  const i = Object.getPrototypeOf(a);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in a) &&
    !(Symbol.iterator in a)
  );
}
function mg(a) {
  if (N.isValidElement(a) || hg.isValidElementType(a) || !Zn(a)) return a;
  const i = {};
  return (
    Object.keys(a).forEach((o) => {
      i[o] = mg(a[o]);
    }),
    i
  );
}
function Qe(a, i, o = { clone: !0 }) {
  const u = o.clone ? { ...a } : a;
  return (
    Zn(a) &&
      Zn(i) &&
      Object.keys(i).forEach((c) => {
        N.isValidElement(i[c]) || hg.isValidElementType(i[c])
          ? (u[c] = i[c])
          : Zn(i[c]) && Object.prototype.hasOwnProperty.call(a, c) && Zn(a[c])
            ? (u[c] = Qe(a[c], i[c], o))
            : o.clone
              ? (u[c] = Zn(i[c]) ? mg(i[c]) : i[c])
              : (u[c] = i[c]);
      }),
    u
  );
}
const Mb = (a) => {
  const i = Object.keys(a).map((o) => ({ key: o, val: a[o] })) || [];
  return (i.sort((o, u) => o.val - u.val), i.reduce((o, u) => ({ ...o, [u.key]: u.val }), {}));
};
function Ob(a) {
  const { values: i = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: o = 'px', step: u = 5, ...c } = a,
    f = Mb(i),
    p = Object.keys(f);
  function h(A) {
    return `@media (min-width:${typeof i[A] == 'number' ? i[A] : A}${o})`;
  }
  function y(A) {
    return `@media (max-width:${(typeof i[A] == 'number' ? i[A] : A) - u / 100}${o})`;
  }
  function g(A, _) {
    const M = p.indexOf(_);
    return `@media (min-width:${typeof i[A] == 'number' ? i[A] : A}${o}) and (max-width:${(M !== -1 && typeof i[p[M]] == 'number' ? i[p[M]] : _) - u / 100}${o})`;
  }
  function b(A) {
    return p.indexOf(A) + 1 < p.length ? g(A, p[p.indexOf(A) + 1]) : h(A);
  }
  function x(A) {
    const _ = p.indexOf(A);
    return _ === 0
      ? h(p[1])
      : _ === p.length - 1
        ? y(p[_])
        : g(A, p[p.indexOf(A) + 1]).replace('@media', '@media not all and');
  }
  return { keys: p, values: f, up: h, down: y, between: g, only: b, not: x, unit: o, ...c };
}
function ym(a, i) {
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
function Rb(a, i) {
  return i === '@' || (i.startsWith('@') && (a.some((o) => i.startsWith(`@${o}`)) || !!i.match(/^@\d/)));
}
function wb(a, i) {
  const o = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, u, c] = o,
    f = Number.isNaN(+u) ? u || 0 : +u;
  return a.containerQueries(c).up(f);
}
function Bb(a) {
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
const _b = { borderRadius: 4 };
function Cr(a, i) {
  return i ? Qe(a, i, { clone: !1 }) : a;
}
const Tu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  vm = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (a) => `@media (min-width:${Tu[a]}px)` },
  Db = {
    containerQueries: (a) => ({
      up: (i) => {
        let o = typeof i == 'number' ? i : Tu[i] || i;
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
    const f = u.breakpoints || vm;
    return i.reduce((p, h, y) => ((p[f.up(f.keys[y])] = o(i[y])), p), {});
  }
  if (typeof i == 'object') {
    const f = u.breakpoints || vm;
    return Object.keys(i).reduce((p, h) => {
      if (Rb(f.keys, h)) {
        const y = wb(u.containerQueries ? u : Db, h);
        y && (p[y] = o(i[h], h));
      } else if (Object.keys(f.values || Tu).includes(h)) {
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
function gg(a = {}) {
  return (
    a.keys?.reduce((o, u) => {
      const c = a.up(u);
      return ((o[c] = {}), o);
    }, {}) || {}
  );
}
function gf(a, i) {
  return a.reduce((o, u) => {
    const c = o[u];
    return ((!c || Object.keys(c).length === 0) && delete o[u], o);
  }, i);
}
function jb(a, ...i) {
  const o = gg(a),
    u = [o, ...i].reduce((c, f) => Qe(c, f), {});
  return gf(Object.keys(o), u);
}
function Nb(a, i) {
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
function af({ values: a, breakpoints: i, base: o }) {
  const u = o || Nb(a, i),
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
function gt(a) {
  if (typeof a != 'string') throw new Error(bl(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Eu(a, i, o = !0) {
  if (!i || typeof i != 'string') return null;
  if (a && a.vars && o) {
    const u = `vars.${i}`.split('.').reduce((c, f) => (c && c[f] ? c[f] : null), a);
    if (u != null) return u;
  }
  return i.split('.').reduce((u, c) => (u && u[c] != null ? u[c] : null), a);
}
function fu(a, i, o, u = o) {
  let c;
  return (
    typeof a == 'function' ? (c = a(o)) : Array.isArray(a) ? (c = a[o] || u) : (c = Eu(a, o) || u),
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
        g = Eu(y, u) || {};
      return Hn(p, h, (x) => {
        let A = fu(g, c, x);
        return (
          x === A && typeof x == 'string' && (A = fu(g, c, `${i}${x === 'default' ? '' : gt(x)}`, x)),
          o === !1 ? A : { [o]: A }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [i]), f);
}
function Ub(a) {
  const i = {};
  return (o) => (i[o] === void 0 && (i[o] = a(o)), i[o]);
}
const Hb = { m: 'margin', p: 'padding' },
  kb = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  bm = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  Lb = Ub((a) => {
    if (a.length > 2)
      if (bm[a]) a = bm[a];
      else return [a];
    const [i, o] = a.split(''),
      u = Hb[i],
      c = kb[o] || '';
    return Array.isArray(c) ? c.map((f) => u + f) : [u + c];
  }),
  Hf = [
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
  kf = [
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
[...Hf, ...kf];
function Dr(a, i, o, u) {
  const c = Eu(a, i, !0) ?? o;
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
function zu(a) {
  return Dr(a, 'spacing', 8);
}
function Sl(a, i) {
  return typeof i == 'string' || i == null ? i : a(i);
}
function $b(a, i) {
  return (o) => a.reduce((u, c) => ((u[c] = Sl(i, o)), u), {});
}
function qb(a, i, o, u) {
  if (!i.includes(o)) return null;
  const c = Lb(o),
    f = $b(c, u),
    p = a[o];
  return Hn(a, p, f);
}
function yg(a, i) {
  const o = zu(a.theme);
  return Object.keys(a)
    .map((u) => qb(a, i, u, o))
    .reduce(Cr, {});
}
function pe(a) {
  return yg(a, Hf);
}
pe.propTypes = {};
pe.filterProps = Hf;
function he(a) {
  return yg(a, kf);
}
he.propTypes = {};
he.filterProps = kf;
function vg(a = 8, i = zu({ spacing: a })) {
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
function Au(...a) {
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
function On(a) {
  return typeof a != 'number' ? a : `${a}px solid`;
}
function wn(a, i) {
  return be({ prop: a, themeKey: 'borders', transform: i });
}
const Yb = wn('border', On),
  Gb = wn('borderTop', On),
  Vb = wn('borderRight', On),
  Xb = wn('borderBottom', On),
  Qb = wn('borderLeft', On),
  Zb = wn('borderColor'),
  Kb = wn('borderTopColor'),
  Jb = wn('borderRightColor'),
  Fb = wn('borderBottomColor'),
  Wb = wn('borderLeftColor'),
  Pb = wn('outline', On),
  Ib = wn('outlineColor'),
  Mu = (a) => {
    if (a.borderRadius !== void 0 && a.borderRadius !== null) {
      const i = Dr(a.theme, 'shape.borderRadius', 4),
        o = (u) => ({ borderRadius: Sl(i, u) });
      return Hn(a, a.borderRadius, o);
    }
    return null;
  };
Mu.propTypes = {};
Mu.filterProps = ['borderRadius'];
Au(Yb, Gb, Vb, Xb, Qb, Zb, Kb, Jb, Fb, Wb, Mu, Pb, Ib);
const Ou = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      o = (u) => ({ gap: Sl(i, u) });
    return Hn(a, a.gap, o);
  }
  return null;
};
Ou.propTypes = {};
Ou.filterProps = ['gap'];
const Ru = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      o = (u) => ({ columnGap: Sl(i, u) });
    return Hn(a, a.columnGap, o);
  }
  return null;
};
Ru.propTypes = {};
Ru.filterProps = ['columnGap'];
const wu = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      o = (u) => ({ rowGap: Sl(i, u) });
    return Hn(a, a.rowGap, o);
  }
  return null;
};
wu.propTypes = {};
wu.filterProps = ['rowGap'];
const t2 = be({ prop: 'gridColumn' }),
  e2 = be({ prop: 'gridRow' }),
  n2 = be({ prop: 'gridAutoFlow' }),
  a2 = be({ prop: 'gridAutoColumns' }),
  l2 = be({ prop: 'gridAutoRows' }),
  i2 = be({ prop: 'gridTemplateColumns' }),
  r2 = be({ prop: 'gridTemplateRows' }),
  o2 = be({ prop: 'gridTemplateAreas' }),
  u2 = be({ prop: 'gridArea' });
Au(Ou, Ru, wu, t2, e2, n2, a2, l2, i2, r2, o2, u2);
function vi(a, i) {
  return i === 'grey' ? i : a;
}
const s2 = be({ prop: 'color', themeKey: 'palette', transform: vi }),
  c2 = be({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: vi }),
  f2 = be({ prop: 'backgroundColor', themeKey: 'palette', transform: vi });
Au(s2, c2, f2);
function mn(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const d2 = be({ prop: 'width', transform: mn }),
  Lf = (a) => {
    if (a.maxWidth !== void 0 && a.maxWidth !== null) {
      const i = (o) => {
        const u = a.theme?.breakpoints?.values?.[o] || Tu[o];
        return u
          ? a.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${u}${a.theme.breakpoints.unit}` }
            : { maxWidth: u }
          : { maxWidth: mn(o) };
      };
      return Hn(a, a.maxWidth, i);
    }
    return null;
  };
Lf.filterProps = ['maxWidth'];
const p2 = be({ prop: 'minWidth', transform: mn }),
  h2 = be({ prop: 'height', transform: mn }),
  m2 = be({ prop: 'maxHeight', transform: mn }),
  g2 = be({ prop: 'minHeight', transform: mn });
be({ prop: 'size', cssProperty: 'width', transform: mn });
be({ prop: 'size', cssProperty: 'height', transform: mn });
const y2 = be({ prop: 'boxSizing' });
Au(d2, Lf, p2, h2, m2, g2, y2);
const jr = {
  border: { themeKey: 'borders', transform: On },
  borderTop: { themeKey: 'borders', transform: On },
  borderRight: { themeKey: 'borders', transform: On },
  borderBottom: { themeKey: 'borders', transform: On },
  borderLeft: { themeKey: 'borders', transform: On },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: On },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Mu },
  color: { themeKey: 'palette', transform: vi },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: vi },
  backgroundColor: { themeKey: 'palette', transform: vi },
  p: { style: he },
  pt: { style: he },
  pr: { style: he },
  pb: { style: he },
  pl: { style: he },
  px: { style: he },
  py: { style: he },
  padding: { style: he },
  paddingTop: { style: he },
  paddingRight: { style: he },
  paddingBottom: { style: he },
  paddingLeft: { style: he },
  paddingX: { style: he },
  paddingY: { style: he },
  paddingInline: { style: he },
  paddingInlineStart: { style: he },
  paddingInlineEnd: { style: he },
  paddingBlock: { style: he },
  paddingBlockStart: { style: he },
  paddingBlockEnd: { style: he },
  m: { style: pe },
  mt: { style: pe },
  mr: { style: pe },
  mb: { style: pe },
  ml: { style: pe },
  mx: { style: pe },
  my: { style: pe },
  margin: { style: pe },
  marginTop: { style: pe },
  marginRight: { style: pe },
  marginBottom: { style: pe },
  marginLeft: { style: pe },
  marginX: { style: pe },
  marginY: { style: pe },
  marginInline: { style: pe },
  marginInlineStart: { style: pe },
  marginInlineEnd: { style: pe },
  marginBlock: { style: pe },
  marginBlockStart: { style: pe },
  marginBlockEnd: { style: pe },
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
  gap: { style: Ou },
  rowGap: { style: wu },
  columnGap: { style: Ru },
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
  width: { transform: mn },
  maxWidth: { style: Lf },
  minWidth: { transform: mn },
  height: { transform: mn },
  maxHeight: { transform: mn },
  minHeight: { transform: mn },
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
function v2(...a) {
  const i = a.reduce((u, c) => u.concat(Object.keys(c)), []),
    o = new Set(i);
  return a.every((u) => o.size === Object.keys(u).length);
}
function b2(a, i) {
  return typeof a == 'function' ? a(i) : a;
}
function S2() {
  function a(o, u, c, f) {
    const p = { [o]: u, theme: c },
      h = f[o];
    if (!h) return { [o]: u };
    const { cssProperty: y = o, themeKey: g, transform: b, style: x } = h;
    if (u == null) return null;
    if (g === 'typography' && u === 'inherit') return { [o]: u };
    const A = Eu(c, g) || {};
    return x
      ? x(p)
      : Hn(p, u, (M) => {
          let T = fu(A, b, M);
          return (
            M === T && typeof M == 'string' && (T = fu(A, b, `${o}${M === 'default' ? '' : gt(M)}`, M)),
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
      const b = gg(c.breakpoints),
        x = Object.keys(b);
      let A = b;
      return (
        Object.keys(g).forEach((_) => {
          const M = b2(g[_], c);
          if (M != null)
            if (typeof M == 'object')
              if (p[_]) A = Cr(A, a(_, M, c, p));
              else {
                const T = Hn({ theme: c }, M, (H) => ({ [_]: H }));
                v2(T, M) ? (A[_] = i({ sx: M, theme: c, nested: !0 })) : (A = Cr(A, T));
              }
            else A = Cr(A, a(_, M, c, p));
        }),
        !f && c.modularCssLayers ? { '@layer sx': ym(c, gf(x, A)) } : ym(c, gf(x, A))
      );
    }
    return Array.isArray(u) ? u.map(h) : h(u);
  }
  return i;
}
const xl = S2();
xl.filterProps = ['sx'];
function x2(a, i) {
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
    h = Ob(o),
    y = vg(c);
  let g = Qe(
    {
      breakpoints: h,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...u },
      spacing: y,
      shape: { ..._b, ...f },
    },
    p
  );
  return (
    (g = Bb(g)),
    (g.applyStyles = x2),
    (g = i.reduce((b, x) => Qe(b, x), g)),
    (g.unstable_sxConfig = { ...jr, ...p?.unstable_sxConfig }),
    (g.unstable_sx = function (x) {
      return xl({ sx: x, theme: this });
    }),
    g
  );
}
function C2(a) {
  return Object.keys(a).length === 0;
}
function T2(a = null) {
  const i = N.useContext(Nf);
  return !i || C2(i) ? a : i;
}
const E2 = Nr();
function $f(a = E2) {
  return T2(a);
}
const z2 = (a) => {
  const i = { systemProps: {}, otherProps: {} },
    o = a?.theme?.unstable_sxConfig ?? jr;
  return (
    Object.keys(a).forEach((u) => {
      o[u] ? (i.systemProps[u] = a[u]) : (i.otherProps[u] = a[u]);
    }),
    i
  );
};
function qf(a) {
  const { sx: i, ...o } = a,
    { systemProps: u, otherProps: c } = z2(o);
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
const Sm = (a) => a,
  A2 = () => {
    let a = Sm;
    return {
      configure(i) {
        a = i;
      },
      generate(i) {
        return a(i);
      },
      reset() {
        a = Sm;
      },
    };
  },
  bg = A2();
function Sg(a) {
  var i,
    o,
    u = '';
  if (typeof a == 'string' || typeof a == 'number') u += a;
  else if (typeof a == 'object')
    if (Array.isArray(a)) {
      var c = a.length;
      for (i = 0; i < c; i++) a[i] && (o = Sg(a[i])) && (u && (u += ' '), (u += o));
    } else for (o in a) a[o] && (u && (u += ' '), (u += o));
  return u;
}
function Ut() {
  for (var a, i, o = 0, u = '', c = arguments.length; o < c; o++)
    (a = arguments[o]) && (i = Sg(a)) && (u && (u += ' '), (u += i));
  return u;
}
function M2(a = {}) {
  const { themeId: i, defaultTheme: o, defaultClassName: u = 'MuiBox-root', generateClassName: c } = a,
    f = pg('div', { shouldForwardProp: (h) => h !== 'theme' && h !== 'sx' && h !== 'as' })(xl);
  return N.forwardRef(function (y, g) {
    const b = $f(o),
      { className: x, component: A = 'div', ..._ } = qf(y);
    return R.jsx(f, { as: A, ref: g, className: Ut(x, c ? c(u) : u), theme: (i && b[i]) || b, ..._ });
  });
}
const O2 = {
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
function $e(a, i, o = 'Mui') {
  const u = O2[i];
  return u ? `${o}-${u}` : `${bg.generate(a)}-${i}`;
}
function Ze(a, i, o = 'Mui') {
  const u = {};
  return (
    i.forEach((c) => {
      u[c] = $e(a, c, o);
    }),
    u
  );
}
function xg(a) {
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
const R2 = Nr();
function lf(a) {
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
function w2(a) {
  return a ? (i, o) => o[a] : null;
}
function B2(a, i, o) {
  a.theme = D2(a.theme) ? o : a.theme[i] || a.theme;
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
    return Cg(a, u.variants, [c], o);
  }
  return u?.isProcessed ? (o ? ml(yl(u.style), o) : u.style) : o ? ml(yl(u), o) : u;
}
function Cg(a, i, o = [], u = void 0) {
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
function Tg(a = {}) {
  const { themeId: i, defaultTheme: o = R2, rootShouldForwardProp: u = lf, slotShouldForwardProp: c = lf } = a;
  function f(h) {
    B2(h, i, o);
  }
  return (h, y = {}) => {
    Eb(h, (X) => X.filter((J) => J !== xl));
    const { name: g, slot: b, skipVariantsResolver: x, skipSx: A, overridesResolver: _ = w2(N2(b)), ...M } = y,
      T = (g && g.startsWith('Mui')) || b ? 'components' : 'custom',
      H = x !== void 0 ? x : (b && b !== 'Root' && b !== 'root') || !1,
      q = A || !1;
    let W = lf;
    b === 'Root' || b === 'root' ? (W = u) : b ? (W = c) : j2(h) && (W = void 0);
    const F = pg(h, { shouldForwardProp: W, label: _2(), ...M }),
      G = (X) => {
        if (X.__emotion_real === X) return X;
        if (typeof X == 'function')
          return function (st) {
            return iu(st, X, st.theme.modularCssLayers ? T : void 0);
          };
        if (Zn(X)) {
          const J = xg(X);
          return function (ct) {
            return J.variants
              ? iu(ct, J, ct.theme.modularCssLayers ? T : void 0)
              : ct.theme.modularCssLayers
                ? ml(J.style, T)
                : J.style;
          };
        }
        return X;
      },
      j = (...X) => {
        const J = [],
          st = X.map(G),
          ct = [];
        if (
          (J.push(f),
          g &&
            _ &&
            ct.push(function (P) {
              const nt = P.theme.components?.[g]?.styleOverrides;
              if (!nt) return null;
              const z = {};
              for (const Y in nt) z[Y] = iu(P, nt[Y], P.theme.modularCssLayers ? 'theme' : void 0);
              return _(P, z);
            }),
          g &&
            !H &&
            ct.push(function (P) {
              const nt = P.theme?.components?.[g]?.variants;
              return nt ? Cg(P, nt, [], P.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          q || ct.push(xl),
          Array.isArray(st[0]))
        ) {
          const v = st.shift(),
            P = new Array(J.length).fill(''),
            Q = new Array(ct.length).fill('');
          let nt;
          ((nt = [...P, ...v, ...Q]), (nt.raw = [...P, ...v.raw, ...Q]), J.unshift(nt));
        }
        const pt = [...J, ...st, ...ct],
          ft = F(...pt);
        return (h.muiName && (ft.muiName = h.muiName), ft);
      };
    return (F.withConfig && (j.withConfig = F.withConfig), j);
  };
}
function _2(a, i) {
  return void 0;
}
function D2(a) {
  for (const i in a) return !1;
  return !0;
}
function j2(a) {
  return typeof a == 'string' && a.charCodeAt(0) > 96;
}
function N2(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const Eg = Tg();
function Or(a, i, o = !1) {
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
              u[f][g] = Or(p[g], h[g], o);
            }
        }
      } else
        f === 'className' && o && i.className
          ? (u.className = Ut(a?.className, i?.className))
          : f === 'style' && o && i.style
            ? (u.style = { ...a?.style, ...i?.style })
            : u[f] === void 0 && (u[f] = a[f]);
    }
  return u;
}
function U2(a) {
  const { theme: i, name: o, props: u } = a;
  return !i || !i.components || !i.components[o] || !i.components[o].defaultProps
    ? u
    : Or(i.components[o].defaultProps, u);
}
function zg({ props: a, name: i, defaultTheme: o, themeId: u }) {
  let c = $f(o);
  return (u && (c = c[u] || c), U2({ theme: c, name: i, props: a }));
}
const Ag = typeof window < 'u' ? N.useLayoutEffect : N.useEffect;
function mi(a, i = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, o));
}
function Yf(a, i = 0, o = 1) {
  return mi(a, i, o);
}
function H2(a) {
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
  if (a.charAt(0) === '#') return Za(H2(a));
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
const k2 = (a) => {
    const i = Za(a);
    return i.values
      .slice(0, 3)
      .map((o, u) => (i.type.includes('hsl') && u !== 0 ? `${o}%` : o))
      .join(' ');
  },
  br = (a, i) => {
    try {
      return k2(a);
    } catch {
      return a;
    }
  };
function Bu(a) {
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
function Mg(a) {
  a = Za(a);
  const { values: i } = a,
    o = i[0],
    u = i[1] / 100,
    c = i[2] / 100,
    f = u * Math.min(c, 1 - c),
    p = (g, b = (g + o / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let h = 'rgb';
  const y = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return (a.type === 'hsla' && ((h += 'a'), y.push(i[3])), Bu({ type: h, values: y }));
}
function yf(a) {
  a = Za(a);
  let i = a.type === 'hsl' || a.type === 'hsla' ? Za(Mg(a)).values : a.values;
  return (
    (i = i.map((o) => (a.type !== 'color' && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3))
  );
}
function L2(a, i) {
  const o = yf(a),
    u = yf(i);
  return (Math.max(o, u) + 0.05) / (Math.min(o, u) + 0.05);
}
function du(a, i) {
  return (
    (a = Za(a)),
    (i = Yf(i)),
    (a.type === 'rgb' || a.type === 'hsl') && (a.type += 'a'),
    a.type === 'color' ? (a.values[3] = `/${i}`) : (a.values[3] = i),
    Bu(a)
  );
}
function fl(a, i, o) {
  try {
    return du(a, i);
  } catch {
    return a;
  }
}
function _u(a, i) {
  if (((a = Za(a)), (i = Yf(i)), a.type.includes('hsl'))) a.values[2] *= 1 - i;
  else if (a.type.includes('rgb') || a.type.includes('color')) for (let o = 0; o < 3; o += 1) a.values[o] *= 1 - i;
  return Bu(a);
}
function Qt(a, i, o) {
  try {
    return _u(a, i);
  } catch {
    return a;
  }
}
function Du(a, i) {
  if (((a = Za(a)), (i = Yf(i)), a.type.includes('hsl'))) a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes('rgb')) for (let o = 0; o < 3; o += 1) a.values[o] += (255 - a.values[o]) * i;
  else if (a.type.includes('color')) for (let o = 0; o < 3; o += 1) a.values[o] += (1 - a.values[o]) * i;
  return Bu(a);
}
function Zt(a, i, o) {
  try {
    return Du(a, i);
  } catch {
    return a;
  }
}
function $2(a, i = 0.15) {
  return yf(a) > 0.5 ? _u(a, i) : Du(a, i);
}
function Fo(a, i, o) {
  try {
    return $2(a, i);
  } catch {
    return a;
  }
}
const q2 = N.createContext(),
  Y2 = () => N.useContext(q2) ?? !1,
  G2 = N.createContext(void 0);
function V2(a) {
  const { theme: i, name: o, props: u } = a;
  if (!i || !i.components || !i.components[o]) return u;
  const c = i.components[o];
  return c.defaultProps
    ? Or(c.defaultProps, u, i.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? Or(c, u, i.components.mergeClassNameAndStyle)
      : u;
}
function X2({ props: a, name: i }) {
  const o = N.useContext(G2);
  return V2({ props: a, name: i, theme: { components: o } });
}
let xm = 0;
function Q2(a) {
  const [i, o] = N.useState(a),
    u = a || i;
  return (
    N.useEffect(() => {
      i == null && ((xm += 1), o(`mui-${xm}`));
    }, [i]),
    u
  );
}
const Z2 = { ...ff },
  Cm = Z2.useId;
function Og(a) {
  if (Cm !== void 0) {
    const i = Cm();
    return a ?? i;
  }
  return Q2(a);
}
const Tm = { theme: void 0 };
function K2(a) {
  let i, o;
  return function (c) {
    let f = i;
    return ((f === void 0 || c.theme !== o) && ((Tm.theme = c.theme), (f = xg(a(Tm))), (i = f), (o = c.theme)), f);
  };
}
function J2(a = '') {
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
const Em = (a, i, o, u = []) => {
    let c = a;
    i.forEach((f, p) => {
      p === i.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = o)
          : c && typeof c == 'object' && (c[f] = o)
        : c && typeof c == 'object' && (c[f] || (c[f] = u.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  F2 = (a, i, o) => {
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
  W2 = (a, i) =>
    typeof i == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((u) => a.includes(u)) ||
        a[a.length - 1].toLowerCase().includes('opacity')
        ? i
        : `${i}px`
      : i;
function rf(a, i) {
  const { prefix: o, shouldSkipGeneratingVar: u } = i || {},
    c = {},
    f = {},
    p = {};
  return (
    F2(
      a,
      (h, y, g) => {
        if ((typeof y == 'string' || typeof y == 'number') && (!u || !u(h, y))) {
          const b = `--${o ? `${o}-` : ''}${h.join('-')}`,
            x = W2(h, y);
          (Object.assign(c, { [b]: x }), Em(f, h, `var(${b})`, g), Em(p, h, `var(${b}, ${x})`, g));
        }
      },
      (h) => h[0] === 'vars'
    ),
    { css: c, vars: f, varsWithDefaults: p }
  );
}
function P2(a, i = {}) {
  const { getSelector: o = q, disableCssColorScheme: u, colorSchemeSelector: c, enableContrastVars: f } = i,
    { colorSchemes: p = {}, components: h, defaultColorScheme: y = 'light', ...g } = a,
    { vars: b, css: x, varsWithDefaults: A } = rf(g, i);
  let _ = A;
  const M = {},
    { [y]: T, ...H } = p;
  if (
    (Object.entries(H || {}).forEach(([G, j]) => {
      const { vars: X, css: J, varsWithDefaults: st } = rf(j, i);
      ((_ = Qe(_, st)), (M[G] = { css: J, vars: X }));
    }),
    T)
  ) {
    const { css: G, vars: j, varsWithDefaults: X } = rf(T, i);
    ((_ = Qe(_, X)), (M[y] = { css: G, vars: j }));
  }
  function q(G, j) {
    let X = c;
    if (
      (c === 'class' && (X = '.%s'),
      c === 'data' && (X = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (X = `[${c}="%s"]`),
      G)
    ) {
      if (X === 'media')
        return a.defaultColorScheme === G
          ? ':root'
          : { [`@media (prefers-color-scheme: ${p[G]?.palette?.mode || G})`]: { ':root': j } };
      if (X) return a.defaultColorScheme === G ? `:root, ${X.replace('%s', String(G))}` : X.replace('%s', String(G));
    }
    return ':root';
  }
  return {
    vars: _,
    generateThemeVars: () => {
      let G = { ...b };
      return (
        Object.entries(M).forEach(([, { vars: j }]) => {
          G = Qe(G, j);
        }),
        G
      );
    },
    generateStyleSheets: () => {
      const G = [],
        j = a.defaultColorScheme || 'light';
      function X(ct, pt) {
        Object.keys(pt).length && G.push(typeof ct == 'string' ? { [ct]: { ...pt } } : ct);
      }
      X(o(void 0, { ...x }), x);
      const { [j]: J, ...st } = M;
      if (J) {
        const { css: ct } = J,
          pt = p[j]?.palette?.mode,
          ft = !u && pt ? { colorScheme: pt, ...ct } : { ...ct };
        X(o(j, { ...ft }), ft);
      }
      return (
        Object.entries(st).forEach(([ct, { css: pt }]) => {
          const ft = p[ct]?.palette?.mode,
            v = !u && ft ? { colorScheme: ft, ...pt } : { ...pt };
          X(o(ct, { ...v }), v);
        }),
        f &&
          G.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        G
      );
    },
  };
}
function I2(a) {
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
function Ke(a, i, o = void 0) {
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
const tS = Nr(),
  eS = Eg('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[`maxWidth${gt(String(o.maxWidth))}`], o.fixed && i.fixed, o.disableGutters && i.disableGutters];
    },
  }),
  nS = (a) => zg({ props: a, name: 'MuiContainer', defaultTheme: tS }),
  aS = (a, i) => {
    const o = (y) => $e(i, y),
      { classes: u, fixed: c, disableGutters: f, maxWidth: p } = a,
      h = { root: ['root', p && `maxWidth${gt(String(p))}`, c && 'fixed', f && 'disableGutters'] };
    return Ke(h, o, u);
  };
function lS(a = {}) {
  const { createStyledComponent: i = eS, useThemeProps: o = nS, componentName: u = 'MuiContainer' } = a,
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
            x = p.breakpoints.values[b];
          return (x !== 0 && (y[p.breakpoints.up(b)] = { maxWidth: `${x}${p.breakpoints.unit}` }), y);
        }, {}),
      ({ theme: p, ownerState: h }) => ({
        ...(h.maxWidth === 'xs' && { [p.breakpoints.up('xs')]: { maxWidth: Math.max(p.breakpoints.values.xs, 444) } }),
        ...(h.maxWidth &&
          h.maxWidth !== 'xs' && {
            [p.breakpoints.up(h.maxWidth)]: { maxWidth: `${p.breakpoints.values[h.maxWidth]}${p.breakpoints.unit}` },
          }),
      })
    );
  return N.forwardRef(function (h, y) {
    const g = o(h),
      {
        className: b,
        component: x = 'div',
        disableGutters: A = !1,
        fixed: _ = !1,
        maxWidth: M = 'lg',
        classes: T,
        ...H
      } = g,
      q = { ...g, component: x, disableGutters: A, fixed: _, maxWidth: M },
      W = aS(q, u);
    return R.jsx(c, { as: x, ownerState: q, className: Ut(W.root, b), ref: y, ...H });
  });
}
const iS = Nr(),
  rS = Eg('div', { name: 'MuiStack', slot: 'Root' });
function oS(a) {
  return zg({ props: a, name: 'MuiStack', defaultTheme: iS });
}
function uS(a, i) {
  const o = N.Children.toArray(a).filter(Boolean);
  return o.reduce(
    (u, c, f) => (u.push(c), f < o.length - 1 && u.push(N.cloneElement(i, { key: `separator-${f}` })), u),
    []
  );
}
const sS = (a) => ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[a],
  cS = ({ ownerState: a, theme: i }) => {
    let o = {
      display: 'flex',
      flexDirection: 'column',
      ...Hn({ theme: i }, af({ values: a.direction, breakpoints: i.breakpoints.values }), (u) => ({
        flexDirection: u,
      })),
    };
    if (a.spacing) {
      const u = zu(i),
        c = Object.keys(i.breakpoints.values).reduce(
          (y, g) => (
            ((typeof a.spacing == 'object' && a.spacing[g] != null) ||
              (typeof a.direction == 'object' && a.direction[g] != null)) &&
              (y[g] = !0),
            y
          ),
          {}
        ),
        f = af({ values: a.direction, base: c }),
        p = af({ values: a.spacing, base: c });
      (typeof f == 'object' &&
        Object.keys(f).forEach((y, g, b) => {
          if (!f[y]) {
            const A = g > 0 ? f[b[g - 1]] : 'column';
            f[y] = A;
          }
        }),
        (o = Qe(
          o,
          Hn({ theme: i }, p, (y, g) =>
            a.useFlexGap
              ? { gap: Sl(u, y) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': { [`margin${sS(g ? f[g] : a.direction)}`]: Sl(u, y) },
                }
          )
        )));
    }
    return ((o = jb(i.breakpoints, o)), o);
  };
function fS(a = {}) {
  const { createStyledComponent: i = rS, useThemeProps: o = oS, componentName: u = 'MuiStack' } = a,
    c = () => Ke({ root: ['root'] }, (y) => $e(u, y), {}),
    f = i(cS);
  return N.forwardRef(function (y, g) {
    const b = o(y),
      x = qf(b),
      {
        component: A = 'div',
        direction: _ = 'column',
        spacing: M = 0,
        divider: T,
        children: H,
        className: q,
        useFlexGap: W = !1,
        ...F
      } = x,
      G = { direction: _, spacing: M, useFlexGap: W },
      j = c();
    return R.jsx(f, { as: A, ownerState: G, ref: g, className: Ut(j.root, q), ...F, children: T ? uS(H, T) : H });
  });
}
function Rg() {
  return {
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Er.white, default: Er.white },
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
const wg = Rg();
function Bg() {
  return {
    text: {
      primary: Er.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Er.white,
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
const vf = Bg();
function zm(a, i, o, u) {
  const c = u.light || u,
    f = u.dark || u * 1.5;
  a[i] ||
    (a.hasOwnProperty(o)
      ? (a[i] = a[o])
      : i === 'light'
        ? (a.light = Du(a.main, c))
        : i === 'dark' && (a.dark = _u(a.main, f)));
}
function Am(a, i, o, u, c) {
  const f = c.light || c,
    p = c.dark || c * 1.5;
  i[o] ||
    (i.hasOwnProperty(u)
      ? (i[o] = i[u])
      : o === 'light'
        ? (i.light = `color-mix(in ${a}, ${i.main}, #fff ${(f * 100).toFixed(0)}%)`)
        : o === 'dark' && (i.dark = `color-mix(in ${a}, ${i.main}, #000 ${(p * 100).toFixed(0)}%)`));
}
function dS(a = 'light') {
  return a === 'dark'
    ? { main: ci[200], light: ci[50], dark: ci[400] }
    : { main: ci[700], light: ci[400], dark: ci[800] };
}
function pS(a = 'light') {
  return a === 'dark'
    ? { main: si[200], light: si[50], dark: si[400] }
    : { main: si[500], light: si[300], dark: si[700] };
}
function hS(a = 'light') {
  return a === 'dark'
    ? { main: ui[500], light: ui[300], dark: ui[700] }
    : { main: ui[700], light: ui[400], dark: ui[800] };
}
function mS(a = 'light') {
  return a === 'dark'
    ? { main: fi[400], light: fi[300], dark: fi[700] }
    : { main: fi[700], light: fi[500], dark: fi[900] };
}
function gS(a = 'light') {
  return a === 'dark'
    ? { main: di[400], light: di[300], dark: di[700] }
    : { main: di[800], light: di[500], dark: di[900] };
}
function yS(a = 'light') {
  return a === 'dark'
    ? { main: yr[400], light: yr[300], dark: yr[700] }
    : { main: '#ed6c02', light: yr[500], dark: yr[900] };
}
function vS(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Gf(a) {
  const { mode: i = 'light', contrastThreshold: o = 3, tonalOffset: u = 0.2, colorSpace: c, ...f } = a,
    p = a.primary || dS(i),
    h = a.secondary || pS(i),
    y = a.error || hS(i),
    g = a.info || mS(i),
    b = a.success || gS(i),
    x = a.warning || yS(i);
  function A(H) {
    return c ? vS(H) : L2(H, vf.text.primary) >= o ? vf.text.primary : wg.text.primary;
  }
  const _ = ({ color: H, name: q, mainShade: W = 500, lightShade: F = 300, darkShade: G = 700 }) => {
    if (((H = { ...H }), !H.main && H[W] && (H.main = H[W]), !H.hasOwnProperty('main')))
      throw new Error(bl(11, q ? ` (${q})` : '', W));
    if (typeof H.main != 'string') throw new Error(bl(12, q ? ` (${q})` : '', JSON.stringify(H.main)));
    return (
      c ? (Am(c, H, 'light', F, u), Am(c, H, 'dark', G, u)) : (zm(H, 'light', F, u), zm(H, 'dark', G, u)),
      H.contrastText || (H.contrastText = A(H.main)),
      H
    );
  };
  let M;
  return (
    i === 'light' ? (M = Rg()) : i === 'dark' && (M = Bg()),
    Qe(
      {
        common: { ...Er },
        mode: i,
        primary: _({ color: p, name: 'primary' }),
        secondary: _({ color: h, name: 'secondary', mainShade: 'A400', lightShade: 'A200', darkShade: 'A700' }),
        error: _({ color: y, name: 'error' }),
        warning: _({ color: x, name: 'warning' }),
        info: _({ color: g, name: 'info' }),
        success: _({ color: b, name: 'success' }),
        grey: Av,
        contrastThreshold: o,
        getContrastText: A,
        augmentColor: _,
        tonalOffset: u,
        ...M,
      },
      f
    )
  );
}
function bS(a) {
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
function SS(a, i) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [a.up('sm')]: { minHeight: 64 },
    },
    ...i,
  };
}
function xS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Mm = { textTransform: 'uppercase' },
  Om = '"Roboto", "Helvetica", "Arial", sans-serif';
function CS(a, i) {
  const {
      fontFamily: o = Om,
      fontSize: u = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: h = 700,
      htmlFontSize: y = 16,
      allVariants: g,
      pxToRem: b,
      ...x
    } = typeof i == 'function' ? i(a) : i,
    A = u / 14,
    _ = b || ((H) => `${(H / y) * A}rem`),
    M = (H, q, W, F, G) => ({
      fontFamily: o,
      fontWeight: H,
      fontSize: _(q),
      lineHeight: W,
      ...(o === Om ? { letterSpacing: `${xS(F / q)}em` } : {}),
      ...G,
      ...g,
    }),
    T = {
      h1: M(c, 96, 1.167, -1.5),
      h2: M(c, 60, 1.2, -0.5),
      h3: M(f, 48, 1.167, 0),
      h4: M(f, 34, 1.235, 0.25),
      h5: M(f, 24, 1.334, 0),
      h6: M(p, 20, 1.6, 0.15),
      subtitle1: M(f, 16, 1.75, 0.15),
      subtitle2: M(p, 14, 1.57, 0.1),
      body1: M(f, 16, 1.5, 0.15),
      body2: M(f, 14, 1.43, 0.15),
      button: M(p, 14, 1.75, 0.4, Mm),
      caption: M(f, 12, 1.66, 0.4),
      overline: M(f, 12, 2.66, 1, Mm),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Qe(
    {
      htmlFontSize: y,
      pxToRem: _,
      fontFamily: o,
      fontSize: u,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: h,
      ...T,
    },
    x,
    { clone: !1 }
  );
}
const TS = 0.2,
  ES = 0.14,
  zS = 0.12;
function ue(...a) {
  return [
    `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${TS})`,
    `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${ES})`,
    `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${zS})`,
  ].join(',');
}
const AS = [
    'none',
    ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  MS = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  _g = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Rm(a) {
  return `${Math.round(a)}ms`;
}
function OS(a) {
  if (!a) return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function RS(a) {
  const i = { ...MS, ...a.easing },
    o = { ..._g, ...a.duration };
  return {
    getAutoHeightDuration: OS,
    create: (c = ['all'], f = {}) => {
      const { duration: p = o.standard, easing: h = i.easeInOut, delay: y = 0, ...g } = f;
      return (Array.isArray(c) ? c : [c])
        .map((b) => `${b} ${typeof p == 'string' ? p : Rm(p)} ${h} ${typeof y == 'string' ? y : Rm(y)}`)
        .join(',');
    },
    ...a,
    easing: i,
    duration: o,
  };
}
const wS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function BS(a) {
  return (
    Zn(a) || typeof a > 'u' || typeof a == 'string' || typeof a == 'boolean' || typeof a == 'number' || Array.isArray(a)
  );
}
function Dg(a = {}) {
  const i = { ...a };
  function o(u) {
    const c = Object.entries(u);
    for (let f = 0; f < c.length; f++) {
      const [p, h] = c[f];
      !BS(h) || p.startsWith('unstable_') ? delete u[p] : Zn(h) && ((u[p] = { ...h }), o(u[p]));
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
function wm(a) {
  return typeof a == 'number' ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const _S = (a) => {
  if (!Number.isNaN(+a)) return +a;
  const i = a.match(/\d*\.?\d+/g);
  if (!i) return 0;
  let o = 0;
  for (let u = 0; u < i.length; u += 1) o += +i[u];
  return o;
};
function DS(a) {
  Object.assign(a, {
    alpha(i, o) {
      const u = this || a;
      return u.colorSpace
        ? `oklch(from ${i} l c h / ${typeof o == 'string' ? `calc(${o})` : o})`
        : u.vars
          ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof o == 'string' ? `calc(${o})` : o})`
          : du(i, _S(o));
    },
    lighten(i, o) {
      const u = this || a;
      return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${i}, #fff ${wm(o)})` : Du(i, o);
    },
    darken(i, o) {
      const u = this || a;
      return u.colorSpace ? `color-mix(in ${u.colorSpace}, ${i}, #000 ${wm(o)})` : _u(i, o);
    },
  });
}
function bf(a = {}, ...i) {
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
  const x = Gf({ ...f, colorSpace: g }),
    A = Nr(a);
  let _ = Qe(A, {
    mixins: SS(A.breakpoints, u),
    palette: x,
    shadows: AS.slice(),
    typography: CS(x, h),
    transitions: RS(p),
    zIndex: { ...wS },
  });
  return (
    (_ = Qe(_, b)),
    (_ = i.reduce((M, T) => Qe(M, T), _)),
    (_.unstable_sxConfig = { ...jr, ...b?.unstable_sxConfig }),
    (_.unstable_sx = function (T) {
      return xl({ sx: T, theme: this });
    }),
    (_.toRuntimeSource = Dg),
    DS(_),
    _
  );
}
function Sf(a) {
  let i;
  return (a < 1 ? (i = 5.11916 * a ** 2) : (i = 4.5 * Math.log(a + 1) + 2), Math.round(i * 10) / 1e3);
}
const jS = [...Array(25)].map((a, i) => {
  if (i === 0) return 'none';
  const o = Sf(i);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function jg(a) {
  return {
    inputPlaceholder: a === 'dark' ? 0.5 : 0.42,
    inputUnderline: a === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: a === 'dark' ? 0.2 : 0.12,
    switchTrack: a === 'dark' ? 0.3 : 0.38,
  };
}
function Ng(a) {
  return a === 'dark' ? jS : [];
}
function NS(a) {
  const { palette: i = { mode: 'light' }, opacity: o, overlays: u, colorSpace: c, ...f } = a,
    p = Gf({ ...i, colorSpace: c });
  return { palette: p, opacity: { ...jg(p.mode), ...o }, overlays: u || Ng(p.mode), ...f };
}
function US(a) {
  return (
    !!a[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!a[0].match(/sxConfig$/) ||
    (a[0] === 'palette' && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const HS = (a) => [
    ...[...Array(25)].map((i, o) => `--${a ? `${a}-` : ''}overlays-${o}`),
    `--${a ? `${a}-` : ''}palette-AppBar-darkBg`,
    `--${a ? `${a}-` : ''}palette-AppBar-darkColor`,
  ],
  kS = (a) => (i, o) => {
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
          HS(a.cssVarPrefix).forEach((h) => {
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
function LS(a, i) {
  i.forEach((o) => {
    a[o] || (a[o] = {});
  });
}
function $(a, i, o) {
  !a[i] && o && (a[i] = o);
}
function Sr(a) {
  return typeof a != 'string' || !a.startsWith('hsl') ? a : Mg(a);
}
function ma(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = br(Sr(a[i])));
}
function $S(a) {
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
  qS = (a = 'mui') => J2(a);
function of(a, i, o, u, c) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const f = c === 'dark' ? 'dark' : 'light';
  if (!u) {
    i[c] = NS({ ...o, palette: { mode: f, ...o?.palette }, colorSpace: a });
    return;
  }
  const { palette: p, ...h } = bf({ ...u, palette: { mode: f, ...o?.palette }, colorSpace: a });
  return ((i[c] = { ...o, palette: p, opacity: { ...jg(f), ...o?.opacity }, overlays: o?.overlays || Ng(f) }), h);
}
function YS(a = {}, ...i) {
  const {
      colorSchemes: o = { light: !0 },
      defaultColorScheme: u,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      nativeColor: p = !1,
      shouldSkipGeneratingVar: h = US,
      colorSchemeSelector: y = o.light && o.dark ? 'media' : void 0,
      rootSelector: g = ':root',
      ...b
    } = a,
    x = Object.keys(o)[0],
    A = u || (o.light && x !== 'light' ? 'light' : x),
    _ = qS(f),
    { [A]: M, light: T, dark: H, ...q } = o,
    W = { ...q };
  let F = M;
  if ((((A === 'dark' && !('dark' in o)) || (A === 'light' && !('light' in o))) && (F = !0), !F))
    throw new Error(bl(21, A));
  let G;
  p && (G = 'oklch');
  const j = of(G, W, F, b, A);
  (T && !W.light && of(G, W, T, void 0, 'light'), H && !W.dark && of(G, W, H, void 0, 'dark'));
  let X = {
    defaultColorScheme: A,
    ...j,
    cssVarPrefix: f,
    colorSchemeSelector: y,
    rootSelector: g,
    getCssVar: _,
    colorSchemes: W,
    font: { ...bS(j.typography), ...j.font },
    spacing: $S(b.spacing),
  };
  (Object.keys(X.colorSchemes).forEach((ft) => {
    const v = X.colorSchemes[ft].palette,
      P = (nt) => {
        const z = nt.split('-'),
          Y = z[1],
          K = z[2];
        return _(nt, v[Y][K]);
      };
    (v.mode === 'light' && ($(v.common, 'background', '#fff'), $(v.common, 'onBackground', '#000')),
      v.mode === 'dark' && ($(v.common, 'background', '#000'), $(v.common, 'onBackground', '#fff')));
    function Q(nt, z, Y) {
      if (G) {
        let K;
        return (
          nt === fl && (K = `transparent ${((1 - Y) * 100).toFixed(0)}%`),
          nt === Qt && (K = `#000 ${(Y * 100).toFixed(0)}%`),
          nt === Zt && (K = `#fff ${(Y * 100).toFixed(0)}%`),
          `color-mix(in ${G}, ${z}, ${K})`
        );
      }
      return nt(z, Y);
    }
    if (
      (LS(v, [
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
      ($(v.Alert, 'errorColor', Q(Qt, v.error.light, 0.6)),
        $(v.Alert, 'infoColor', Q(Qt, v.info.light, 0.6)),
        $(v.Alert, 'successColor', Q(Qt, v.success.light, 0.6)),
        $(v.Alert, 'warningColor', Q(Qt, v.warning.light, 0.6)),
        $(v.Alert, 'errorFilledBg', P('palette-error-main')),
        $(v.Alert, 'infoFilledBg', P('palette-info-main')),
        $(v.Alert, 'successFilledBg', P('palette-success-main')),
        $(v.Alert, 'warningFilledBg', P('palette-warning-main')),
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
        $(v.Alert, 'errorStandardBg', Q(Zt, v.error.light, 0.9)),
        $(v.Alert, 'infoStandardBg', Q(Zt, v.info.light, 0.9)),
        $(v.Alert, 'successStandardBg', Q(Zt, v.success.light, 0.9)),
        $(v.Alert, 'warningStandardBg', Q(Zt, v.warning.light, 0.9)),
        $(v.Alert, 'errorIconColor', P('palette-error-main')),
        $(v.Alert, 'infoIconColor', P('palette-info-main')),
        $(v.Alert, 'successIconColor', P('palette-success-main')),
        $(v.Alert, 'warningIconColor', P('palette-warning-main')),
        $(v.AppBar, 'defaultBg', P('palette-grey-100')),
        $(v.Avatar, 'defaultBg', P('palette-grey-400')),
        $(v.Button, 'inheritContainedBg', P('palette-grey-300')),
        $(v.Button, 'inheritContainedHoverBg', P('palette-grey-A100')),
        $(v.Chip, 'defaultBorder', P('palette-grey-400')),
        $(v.Chip, 'defaultAvatarColor', P('palette-grey-700')),
        $(v.Chip, 'defaultIconColor', P('palette-grey-700')),
        $(v.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        $(v.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        $(v.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        $(v.LinearProgress, 'primaryBg', Q(Zt, v.primary.main, 0.62)),
        $(v.LinearProgress, 'secondaryBg', Q(Zt, v.secondary.main, 0.62)),
        $(v.LinearProgress, 'errorBg', Q(Zt, v.error.main, 0.62)),
        $(v.LinearProgress, 'infoBg', Q(Zt, v.info.main, 0.62)),
        $(v.LinearProgress, 'successBg', Q(Zt, v.success.main, 0.62)),
        $(v.LinearProgress, 'warningBg', Q(Zt, v.warning.main, 0.62)),
        $(v.Skeleton, 'bg', G ? Q(fl, v.text.primary, 0.11) : `rgba(${P('palette-text-primaryChannel')} / 0.11)`),
        $(v.Slider, 'primaryTrack', Q(Zt, v.primary.main, 0.62)),
        $(v.Slider, 'secondaryTrack', Q(Zt, v.secondary.main, 0.62)),
        $(v.Slider, 'errorTrack', Q(Zt, v.error.main, 0.62)),
        $(v.Slider, 'infoTrack', Q(Zt, v.info.main, 0.62)),
        $(v.Slider, 'successTrack', Q(Zt, v.success.main, 0.62)),
        $(v.Slider, 'warningTrack', Q(Zt, v.warning.main, 0.62)));
      const nt = G ? Q(Qt, v.background.default, 0.6825) : Fo(v.background.default, 0.8);
      ($(v.SnackbarContent, 'bg', nt),
        $(
          v.SnackbarContent,
          'color',
          Vn(() => (G ? vf.text.primary : v.getContrastText(nt)))
        ),
        $(v.SpeedDialAction, 'fabHoverBg', Fo(v.background.paper, 0.15)),
        $(v.StepConnector, 'border', P('palette-grey-400')),
        $(v.StepContent, 'border', P('palette-grey-400')),
        $(v.Switch, 'defaultColor', P('palette-common-white')),
        $(v.Switch, 'defaultDisabledColor', P('palette-grey-100')),
        $(v.Switch, 'primaryDisabledColor', Q(Zt, v.primary.main, 0.62)),
        $(v.Switch, 'secondaryDisabledColor', Q(Zt, v.secondary.main, 0.62)),
        $(v.Switch, 'errorDisabledColor', Q(Zt, v.error.main, 0.62)),
        $(v.Switch, 'infoDisabledColor', Q(Zt, v.info.main, 0.62)),
        $(v.Switch, 'successDisabledColor', Q(Zt, v.success.main, 0.62)),
        $(v.Switch, 'warningDisabledColor', Q(Zt, v.warning.main, 0.62)),
        $(v.TableCell, 'border', Q(Zt, Q(fl, v.divider, 1), 0.88)),
        $(v.Tooltip, 'bg', Q(fl, v.grey[700], 0.92)));
    }
    if (v.mode === 'dark') {
      ($(v.Alert, 'errorColor', Q(Zt, v.error.light, 0.6)),
        $(v.Alert, 'infoColor', Q(Zt, v.info.light, 0.6)),
        $(v.Alert, 'successColor', Q(Zt, v.success.light, 0.6)),
        $(v.Alert, 'warningColor', Q(Zt, v.warning.light, 0.6)),
        $(v.Alert, 'errorFilledBg', P('palette-error-dark')),
        $(v.Alert, 'infoFilledBg', P('palette-info-dark')),
        $(v.Alert, 'successFilledBg', P('palette-success-dark')),
        $(v.Alert, 'warningFilledBg', P('palette-warning-dark')),
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
        $(v.Alert, 'errorStandardBg', Q(Qt, v.error.light, 0.9)),
        $(v.Alert, 'infoStandardBg', Q(Qt, v.info.light, 0.9)),
        $(v.Alert, 'successStandardBg', Q(Qt, v.success.light, 0.9)),
        $(v.Alert, 'warningStandardBg', Q(Qt, v.warning.light, 0.9)),
        $(v.Alert, 'errorIconColor', P('palette-error-main')),
        $(v.Alert, 'infoIconColor', P('palette-info-main')),
        $(v.Alert, 'successIconColor', P('palette-success-main')),
        $(v.Alert, 'warningIconColor', P('palette-warning-main')),
        $(v.AppBar, 'defaultBg', P('palette-grey-900')),
        $(v.AppBar, 'darkBg', P('palette-background-paper')),
        $(v.AppBar, 'darkColor', P('palette-text-primary')),
        $(v.Avatar, 'defaultBg', P('palette-grey-600')),
        $(v.Button, 'inheritContainedBg', P('palette-grey-800')),
        $(v.Button, 'inheritContainedHoverBg', P('palette-grey-700')),
        $(v.Chip, 'defaultBorder', P('palette-grey-700')),
        $(v.Chip, 'defaultAvatarColor', P('palette-grey-300')),
        $(v.Chip, 'defaultIconColor', P('palette-grey-300')),
        $(v.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        $(v.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        $(v.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        $(v.LinearProgress, 'primaryBg', Q(Qt, v.primary.main, 0.5)),
        $(v.LinearProgress, 'secondaryBg', Q(Qt, v.secondary.main, 0.5)),
        $(v.LinearProgress, 'errorBg', Q(Qt, v.error.main, 0.5)),
        $(v.LinearProgress, 'infoBg', Q(Qt, v.info.main, 0.5)),
        $(v.LinearProgress, 'successBg', Q(Qt, v.success.main, 0.5)),
        $(v.LinearProgress, 'warningBg', Q(Qt, v.warning.main, 0.5)),
        $(v.Skeleton, 'bg', G ? Q(fl, v.text.primary, 0.13) : `rgba(${P('palette-text-primaryChannel')} / 0.13)`),
        $(v.Slider, 'primaryTrack', Q(Qt, v.primary.main, 0.5)),
        $(v.Slider, 'secondaryTrack', Q(Qt, v.secondary.main, 0.5)),
        $(v.Slider, 'errorTrack', Q(Qt, v.error.main, 0.5)),
        $(v.Slider, 'infoTrack', Q(Qt, v.info.main, 0.5)),
        $(v.Slider, 'successTrack', Q(Qt, v.success.main, 0.5)),
        $(v.Slider, 'warningTrack', Q(Qt, v.warning.main, 0.5)));
      const nt = G ? Q(Zt, v.background.default, 0.985) : Fo(v.background.default, 0.98);
      ($(v.SnackbarContent, 'bg', nt),
        $(
          v.SnackbarContent,
          'color',
          Vn(() => (G ? wg.text.primary : v.getContrastText(nt)))
        ),
        $(v.SpeedDialAction, 'fabHoverBg', Fo(v.background.paper, 0.15)),
        $(v.StepConnector, 'border', P('palette-grey-600')),
        $(v.StepContent, 'border', P('palette-grey-600')),
        $(v.Switch, 'defaultColor', P('palette-grey-300')),
        $(v.Switch, 'defaultDisabledColor', P('palette-grey-600')),
        $(v.Switch, 'primaryDisabledColor', Q(Qt, v.primary.main, 0.55)),
        $(v.Switch, 'secondaryDisabledColor', Q(Qt, v.secondary.main, 0.55)),
        $(v.Switch, 'errorDisabledColor', Q(Qt, v.error.main, 0.55)),
        $(v.Switch, 'infoDisabledColor', Q(Qt, v.info.main, 0.55)),
        $(v.Switch, 'successDisabledColor', Q(Qt, v.success.main, 0.55)),
        $(v.Switch, 'warningDisabledColor', Q(Qt, v.warning.main, 0.55)),
        $(v.TableCell, 'border', Q(Qt, Q(fl, v.divider, 1), 0.68)),
        $(v.Tooltip, 'bg', Q(fl, v.grey[700], 0.92)));
    }
    (ma(v.background, 'default'),
      ma(v.background, 'paper'),
      ma(v.common, 'background'),
      ma(v.common, 'onBackground'),
      ma(v, 'divider'),
      Object.keys(v).forEach((nt) => {
        const z = v[nt];
        nt !== 'tonalOffset' &&
          z &&
          typeof z == 'object' &&
          (z.main && $(v[nt], 'mainChannel', br(Sr(z.main))),
          z.light && $(v[nt], 'lightChannel', br(Sr(z.light))),
          z.dark && $(v[nt], 'darkChannel', br(Sr(z.dark))),
          z.contrastText && $(v[nt], 'contrastTextChannel', br(Sr(z.contrastText))),
          nt === 'text' && (ma(v[nt], 'primary'), ma(v[nt], 'secondary')),
          nt === 'action' && (z.active && ma(v[nt], 'active'), z.selected && ma(v[nt], 'selected')));
      }));
  }),
    (X = i.reduce((ft, v) => Qe(ft, v), X)));
  const J = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: h,
      getSelector: kS(X),
      enableContrastVars: p,
    },
    { vars: st, generateThemeVars: ct, generateStyleSheets: pt } = P2(X, J);
  return (
    (X.vars = st),
    Object.entries(X.colorSchemes[X.defaultColorScheme]).forEach(([ft, v]) => {
      X[ft] = v;
    }),
    (X.generateThemeVars = ct),
    (X.generateStyleSheets = pt),
    (X.generateSpacing = function () {
      return vg(b.spacing, zu(this));
    }),
    (X.getColorSchemeSelector = I2(y)),
    (X.spacing = X.generateSpacing()),
    (X.shouldSkipGeneratingVar = h),
    (X.unstable_sxConfig = { ...jr, ...b?.unstable_sxConfig }),
    (X.unstable_sx = function (v) {
      return xl({ sx: v, theme: this });
    }),
    (X.toRuntimeSource = Dg),
    X
  );
}
function Bm(a, i, o) {
  a.colorSchemes &&
    o &&
    (a.colorSchemes[i] = { ...(o !== !0 && o), palette: Gf({ ...(o === !0 ? {} : o.palette), mode: i }) });
}
function Ug(a = {}, ...i) {
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
    if (!('colorSchemes' in a)) return bf(a, ...i);
    let b = o;
    'palette' in a || (g[h] && (g[h] !== !0 ? (b = g[h].palette) : h === 'dark' && (b = { mode: 'dark' })));
    const x = bf({ ...a, palette: b }, ...i);
    return (
      (x.defaultColorScheme = h),
      (x.colorSchemes = g),
      x.palette.mode === 'light' &&
        ((x.colorSchemes.light = { ...(g.light !== !0 && g.light), palette: x.palette }), Bm(x, 'dark', g.dark)),
      x.palette.mode === 'dark' &&
        ((x.colorSchemes.dark = { ...(g.dark !== !0 && g.dark), palette: x.palette }), Bm(x, 'light', g.light)),
      x
    );
  }
  return (
    !o && !('light' in g) && h === 'light' && (g.light = !0),
    YS({ ...p, colorSchemes: g, defaultColorScheme: h, ...(typeof u != 'boolean' && u) }, ...i)
  );
}
function GS(a) {
  return String(a).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}
function VS(a) {
  return parseFloat(a);
}
const Hg = Ug();
function kg() {
  const a = $f(Hg);
  return a[wf] || a;
}
function Vf(a) {
  return a !== 'ownerState' && a !== 'theme' && a !== 'sx' && a !== 'as';
}
const Xf = (a) => Vf(a) && a !== 'classes',
  Rt = Tg({ themeId: wf, defaultTheme: Hg, rootShouldForwardProp: Xf });
function XS() {
  return qf;
}
const me = K2;
function Je(a) {
  return X2(a);
}
function ru(a) {
  return (a && a.ownerDocument) || document;
}
function Lg(a) {
  const { controlled: i, default: o, name: u, state: c = 'value' } = a,
    { current: f } = N.useRef(i !== void 0),
    [p, h] = N.useState(o),
    y = f ? i : p,
    g = N.useCallback((b) => {
      f || h(b);
    }, []);
  return [y, g];
}
function vl(a) {
  const i = N.useRef(a);
  return (
    Ag(() => {
      i.current = a;
    }),
    N.useRef((...o) => (0, i.current)(...o)).current
  );
}
function xi(...a) {
  const i = N.useRef(void 0),
    o = N.useCallback((u) => {
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
  return N.useMemo(
    () =>
      a.every((u) => u == null)
        ? null
        : (u) => {
            (i.current && (i.current(), (i.current = void 0)), u != null && (i.current = o(u)));
          },
    a
  );
}
function $g(a, i) {
  if (a == null) return {};
  var o = {};
  for (var u in a)
    if ({}.hasOwnProperty.call(a, u)) {
      if (i.indexOf(u) !== -1) continue;
      o[u] = a[u];
    }
  return o;
}
function xf(a, i) {
  return (
    (xf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, u) {
          return ((o.__proto__ = u), o);
        }),
    xf(a, i)
  );
}
function qg(a, i) {
  ((a.prototype = Object.create(i.prototype)), (a.prototype.constructor = a), xf(a, i));
}
var QS = Pm();
const Wo = Wm(QS),
  _m = { disabled: !1 },
  pu = It.createContext(null);
var ZS = function (i) {
    return i.scrollTop;
  },
  xr = 'unmounted',
  pl = 'exited',
  hl = 'entering',
  gi = 'entered',
  Cf = 'exiting',
  ya = (function (a) {
    qg(i, a);
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
            : (y = gi)
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
          this.props.in ? p !== hl && p !== gi && (f = hl) : (p === hl || p === gi) && (f = Cf);
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
              p && ZS(p);
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
          x = this.getTimeouts(),
          A = h ? x.appear : x.enter;
        if ((!c && !p) || _m.disabled) {
          this.safeSetState({ status: gi }, function () {
            f.props.onEntered(g);
          });
          return;
        }
        (this.props.onEnter(g, b),
          this.safeSetState({ status: hl }, function () {
            (f.props.onEntering(g, b),
              f.onTransitionEnd(A, function () {
                f.safeSetState({ status: gi }, function () {
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
        if (!f || _m.disabled) {
          this.safeSetState({ status: pl }, function () {
            c.props.onExited(h);
          });
          return;
        }
        (this.props.onExit(h),
          this.safeSetState({ status: Cf }, function () {
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
        var h = $g(f, [
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
        return It.createElement(
          pu.Provider,
          { value: null },
          typeof p == 'function' ? p(c, h) : It.cloneElement(It.Children.only(p), h)
        );
      }),
      i
    );
  })(It.Component);
ya.contextType = pu;
ya.propTypes = {};
function pi() {}
ya.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: pi,
  onEntering: pi,
  onEntered: pi,
  onExit: pi,
  onExiting: pi,
  onExited: pi,
};
ya.UNMOUNTED = xr;
ya.EXITED = pl;
ya.ENTERING = hl;
ya.ENTERED = gi;
ya.EXITING = Cf;
function KS(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Qf(a, i) {
  var o = function (f) {
      return i && N.isValidElement(f) ? i(f) : f;
    },
    u = Object.create(null);
  return (
    a &&
      N.Children.map(a, function (c) {
        return c;
      }).forEach(function (c) {
        u[c.key] = o(c);
      }),
    u
  );
}
function JS(a, i) {
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
function FS(a, i) {
  return Qf(a.children, function (o) {
    return N.cloneElement(o, {
      onExited: i.bind(null, o),
      in: !0,
      appear: gl(o, 'appear', a),
      enter: gl(o, 'enter', a),
      exit: gl(o, 'exit', a),
    });
  });
}
function WS(a, i, o) {
  var u = Qf(a.children),
    c = JS(i, u);
  return (
    Object.keys(c).forEach(function (f) {
      var p = c[f];
      if (N.isValidElement(p)) {
        var h = f in i,
          y = f in u,
          g = i[f],
          b = N.isValidElement(g) && !g.props.in;
        y && (!h || b)
          ? (c[f] = N.cloneElement(p, {
              onExited: o.bind(null, p),
              in: !0,
              exit: gl(p, 'exit', a),
              enter: gl(p, 'enter', a),
            }))
          : !y && h && !b
            ? (c[f] = N.cloneElement(p, { in: !1 }))
            : y &&
              h &&
              N.isValidElement(g) &&
              (c[f] = N.cloneElement(p, {
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
var PS =
    Object.values ||
    function (a) {
      return Object.keys(a).map(function (i) {
        return a[i];
      });
    },
  IS = {
    component: 'div',
    childFactory: function (i) {
      return i;
    },
  },
  Zf = (function (a) {
    qg(i, a);
    function i(u, c) {
      var f;
      f = a.call(this, u, c) || this;
      var p = f.handleExited.bind(KS(f));
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
        return { children: y ? FS(c, h) : WS(c, p, h), firstRender: !1 };
      }),
      (o.handleExited = function (c, f) {
        var p = Qf(this.props.children);
        c.key in p ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (h) {
              var y = su({}, h.children);
              return (delete y[c.key], { children: y });
            }));
      }),
      (o.render = function () {
        var c = this.props,
          f = c.component,
          p = c.childFactory,
          h = $g(c, ['component', 'childFactory']),
          y = this.state.contextValue,
          g = PS(this.state.children).map(p);
        return (
          delete h.appear,
          delete h.enter,
          delete h.exit,
          f === null
            ? It.createElement(pu.Provider, { value: y }, g)
            : It.createElement(pu.Provider, { value: y }, It.createElement(f, h, g))
        );
      }),
      i
    );
  })(It.Component);
Zf.propTypes = {};
Zf.defaultProps = IS;
const Dm = {};
function Yg(a, i) {
  const o = N.useRef(Dm);
  return (o.current === Dm && (o.current = a(i)), o);
}
const t5 = [];
function e5(a) {
  N.useEffect(a, t5);
}
class Kf {
  static create() {
    return new Kf();
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
function Gg() {
  const a = Yg(Kf.create).current;
  return (e5(a.disposeEffect), a);
}
function jm(a, i) {
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
function Vg(a, i, o) {
  return a === void 0 || Tr(a) ? i : { ...i, ownerState: { ...i.ownerState, ...o } };
}
function Xg(a, i, o) {
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
function Nm(a) {
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
function Qg(a) {
  const { getSlotProps: i, additionalProps: o, externalSlotProps: u, externalForwardedProps: c, className: f } = a;
  if (!i) {
    const _ = Ut(o?.className, f, c?.className, u?.className),
      M = { ...o?.style, ...c?.style, ...u?.style },
      T = { ...o, ...c, ...u };
    return (
      _.length > 0 && (T.className = _),
      Object.keys(M).length > 0 && (T.style = M),
      { props: T, internalRef: void 0 }
    );
  }
  const p = ou({ ...c, ...u }),
    h = Nm(u),
    y = Nm(c),
    g = i(p),
    b = Ut(g?.className, o?.className, f, c?.className, u?.className),
    x = { ...g?.style, ...o?.style, ...c?.style, ...u?.style },
    A = { ...g, ...o, ...y, ...h };
  return (
    b.length > 0 && (A.className = b),
    Object.keys(x).length > 0 && (A.style = x),
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
    { component: g, slots: b = { [a]: void 0 }, slotProps: x = { [a]: void 0 }, ...A } = f,
    _ = b[a] || u,
    M = Xg(x[a], c),
    {
      props: { component: T, ...H },
      internalRef: q,
    } = Qg({ className: o, ...y, externalForwardedProps: a === 'root' ? A : void 0, externalSlotProps: M }),
    W = xi(q, M?.ref, i.ref),
    F = a === 'root' ? T || g : T,
    G = Vg(
      _,
      {
        ...(a === 'root' && !g && !b[a] && p),
        ...(a !== 'root' && !b[a] && p),
        ...H,
        ...(F && !h && { as: F }),
        ...(F && h && { component: F }),
        ref: W,
      },
      c
    );
  return [_, G];
}
function n5(a) {
  return $e('MuiCollapse', a);
}
Ze('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
const a5 = (a) => {
    const { orientation: i, classes: o } = a,
      u = {
        root: ['root', `${i}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${i}`],
        wrapperInner: ['wrapperInner', `${i}`],
      };
    return Ke(u, n5, o);
  },
  l5 = Rt('div', {
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
    me(({ theme: a }) => ({
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
  i5 = Rt('div', { name: 'MuiCollapse', slot: 'Wrapper' })({
    display: 'flex',
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  r5 = Rt('div', { name: 'MuiCollapse', slot: 'WrapperInner' })({
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  Rr = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiCollapse' }),
      {
        addEndListener: c,
        children: f,
        className: p,
        collapsedSize: h = '0px',
        component: y,
        easing: g,
        in: b,
        onEnter: x,
        onEntered: A,
        onEntering: _,
        onExit: M,
        onExited: T,
        onExiting: H,
        orientation: q = 'vertical',
        slots: W = {},
        slotProps: F = {},
        style: G,
        timeout: j = _g.standard,
        TransitionComponent: X = ya,
        ...J
      } = u,
      st = { ...u, orientation: q, collapsedSize: h },
      ct = a5(st),
      pt = kg(),
      ft = Gg(),
      v = N.useRef(null),
      P = N.useRef(),
      Q = typeof h == 'number' ? `${h}px` : h,
      nt = q === 'horizontal',
      z = nt ? 'width' : 'height',
      Y = N.useRef(null),
      K = xi(o, Y),
      et = (Tt) => (ce) => {
        if (Tt) {
          const jt = Y.current;
          ce === void 0 ? Tt(jt) : Tt(jt, ce);
        }
      },
      mt = () => (v.current ? v.current[nt ? 'clientWidth' : 'clientHeight'] : 0),
      S = et((Tt, ce) => {
        (v.current && nt && (v.current.style.position = 'absolute'), (Tt.style[z] = Q), x && x(Tt, ce));
      }),
      k = et((Tt, ce) => {
        const jt = mt();
        v.current && nt && (v.current.style.position = '');
        const { duration: ie, easing: qe } = jm({ style: G, timeout: j, easing: g }, { mode: 'enter' });
        if (j === 'auto') {
          const Fe = pt.transitions.getAutoHeightDuration(jt);
          ((Tt.style.transitionDuration = `${Fe}ms`), (P.current = Fe));
        } else Tt.style.transitionDuration = typeof ie == 'string' ? ie : `${ie}ms`;
        ((Tt.style[z] = `${jt}px`), (Tt.style.transitionTimingFunction = qe), _ && _(Tt, ce));
      }),
      I = et((Tt, ce) => {
        ((Tt.style[z] = 'auto'), A && A(Tt, ce));
      }),
      tt = et((Tt) => {
        ((Tt.style[z] = `${mt()}px`), M && M(Tt));
      }),
      at = et(T),
      ot = et((Tt) => {
        const ce = mt(),
          { duration: jt, easing: ie } = jm({ style: G, timeout: j, easing: g }, { mode: 'exit' });
        if (j === 'auto') {
          const qe = pt.transitions.getAutoHeightDuration(ce);
          ((Tt.style.transitionDuration = `${qe}ms`), (P.current = qe));
        } else Tt.style.transitionDuration = typeof jt == 'string' ? jt : `${jt}ms`;
        ((Tt.style[z] = Q), (Tt.style.transitionTimingFunction = ie), H && H(Tt));
      }),
      St = (Tt) => {
        (j === 'auto' && ft.start(P.current || 0, Tt), c && c(Y.current, Tt));
      },
      Gt = { slots: W, slotProps: F, component: y },
      [Nt, Ae] = Qa('root', {
        ref: K,
        className: Ut(ct.root, p),
        elementType: l5,
        externalForwardedProps: Gt,
        ownerState: st,
        additionalProps: { style: { [nt ? 'minWidth' : 'minHeight']: Q, ...G } },
      }),
      [He, Me] = Qa('wrapper', {
        ref: v,
        className: ct.wrapper,
        elementType: i5,
        externalForwardedProps: Gt,
        ownerState: st,
      }),
      [se, ge] = Qa('wrapperInner', {
        className: ct.wrapperInner,
        elementType: r5,
        externalForwardedProps: Gt,
        ownerState: st,
      });
    return R.jsx(X, {
      in: b,
      onEnter: S,
      onEntered: I,
      onEntering: k,
      onExit: tt,
      onExited: at,
      onExiting: ot,
      addEndListener: St,
      nodeRef: Y,
      timeout: j === 'auto' ? null : j,
      ...J,
      children: (Tt, { ownerState: ce, ...jt }) => {
        const ie = { ...st, state: Tt };
        return R.jsx(Nt, {
          ...Ae,
          className: Ut(Ae.className, { entered: ct.entered, exited: !b && Q === '0px' && ct.hidden }[Tt]),
          ownerState: ie,
          ...jt,
          children: R.jsx(He, { ...Me, ownerState: ie, children: R.jsx(se, { ...ge, ownerState: ie, children: f }) }),
        });
      },
    });
  });
Rr && (Rr.muiSupportAuto = !0);
function o5(a) {
  return $e('MuiPaper', a);
}
Ze('MuiPaper', [
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
const u5 = (a) => {
    const { square: i, elevation: o, variant: u, classes: c } = a,
      f = { root: ['root', u, !i && 'rounded', u === 'elevation' && `elevation${o}`] };
    return Ke(f, o5, c);
  },
  s5 = Rt('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[o.variant], !o.square && i.rounded, o.variant === 'elevation' && i[`elevation${o.elevation}`]];
    },
  })(
    me(({ theme: a }) => ({
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
  Zg = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiPaper' }),
      c = kg(),
      { className: f, component: p = 'div', elevation: h = 1, square: y = !1, variant: g = 'elevation', ...b } = u,
      x = { ...u, component: p, elevation: h, square: y, variant: g },
      A = u5(x);
    return R.jsx(s5, {
      as: p,
      ownerState: x,
      className: Ut(A.root, f),
      ref: o,
      ...b,
      style: {
        ...(g === 'elevation' && {
          '--Paper-shadow': (c.vars || c).shadows[h],
          ...(c.vars && { '--Paper-overlay': c.vars.overlays?.[h] }),
          ...(!c.vars &&
            c.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${du('#fff', Sf(h))}, ${du('#fff', Sf(h))})`,
            }),
        }),
        ...b.style,
      },
    });
  });
function hu(a) {
  try {
    return a.matches(':focus-visible');
  } catch {}
  return !1;
}
class mu {
  static create() {
    return new mu();
  }
  static use() {
    const i = Yg(mu.create).current,
      [o, u] = N.useState(!1);
    return ((i.shouldMount = o), (i.setShouldMount = u), N.useEffect(i.mountEffect, [o]), i);
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
      this.mounted || ((this.mounted = f5()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
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
function c5() {
  return mu.use();
}
function f5() {
  let a, i;
  const o = new Promise((u, c) => {
    ((a = u), (i = c));
  });
  return ((o.resolve = a), (o.reject = i), o);
}
function d5(a) {
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
    [b, x] = N.useState(!1),
    A = Ut(i, o.ripple, o.rippleVisible, u && o.ripplePulsate),
    _ = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c },
    M = Ut(o.child, b && o.childLeaving, u && o.childPulsate);
  return (
    !h && !b && x(!0),
    N.useEffect(() => {
      if (!h && y != null) {
        const T = setTimeout(y, g);
        return () => {
          clearTimeout(T);
        };
      }
    }, [y, h, g]),
    R.jsx('span', { className: A, style: _, children: R.jsx('span', { className: M }) })
  );
}
const Mn = Ze('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Tf = 550,
  p5 = 80,
  h5 = Cl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  m5 = Cl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  g5 = Cl`
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
  y5 = Rt('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  v5 = Rt(d5, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${Mn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${h5};
    animation-duration: ${Tf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  &.${Mn.ripplePulsate} {
    animation-duration: ${({ theme: a }) => a.transitions.duration.shorter}ms;
  }

  & .${Mn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Mn.childLeaving} {
    opacity: 0;
    animation-name: ${m5};
    animation-duration: ${Tf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  & .${Mn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${g5};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  b5 = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiTouchRipple' }),
      { center: c = !1, classes: f = {}, className: p, ...h } = u,
      [y, g] = N.useState([]),
      b = N.useRef(0),
      x = N.useRef(null);
    N.useEffect(() => {
      x.current && (x.current(), (x.current = null));
    }, [y]);
    const A = N.useRef(!1),
      _ = Gg(),
      M = N.useRef(null),
      T = N.useRef(null),
      H = N.useCallback(
        (G) => {
          const { pulsate: j, rippleX: X, rippleY: J, rippleSize: st, cb: ct } = G;
          (g((pt) => [
            ...pt,
            R.jsx(
              v5,
              {
                classes: {
                  ripple: Ut(f.ripple, Mn.ripple),
                  rippleVisible: Ut(f.rippleVisible, Mn.rippleVisible),
                  ripplePulsate: Ut(f.ripplePulsate, Mn.ripplePulsate),
                  child: Ut(f.child, Mn.child),
                  childLeaving: Ut(f.childLeaving, Mn.childLeaving),
                  childPulsate: Ut(f.childPulsate, Mn.childPulsate),
                },
                timeout: Tf,
                pulsate: j,
                rippleX: X,
                rippleY: J,
                rippleSize: st,
              },
              b.current
            ),
          ]),
            (b.current += 1),
            (x.current = ct));
        },
        [f]
      ),
      q = N.useCallback(
        (G = {}, j = {}, X = () => {}) => {
          const { pulsate: J = !1, center: st = c || j.pulsate, fakeElement: ct = !1 } = j;
          if (G?.type === 'mousedown' && A.current) {
            A.current = !1;
            return;
          }
          G?.type === 'touchstart' && (A.current = !0);
          const pt = ct ? null : T.current,
            ft = pt ? pt.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let v, P, Q;
          if (st || G === void 0 || (G.clientX === 0 && G.clientY === 0) || (!G.clientX && !G.touches))
            ((v = Math.round(ft.width / 2)), (P = Math.round(ft.height / 2)));
          else {
            const { clientX: nt, clientY: z } = G.touches && G.touches.length > 0 ? G.touches[0] : G;
            ((v = Math.round(nt - ft.left)), (P = Math.round(z - ft.top)));
          }
          if (st) ((Q = Math.sqrt((2 * ft.width ** 2 + ft.height ** 2) / 3)), Q % 2 === 0 && (Q += 1));
          else {
            const nt = Math.max(Math.abs((pt ? pt.clientWidth : 0) - v), v) * 2 + 2,
              z = Math.max(Math.abs((pt ? pt.clientHeight : 0) - P), P) * 2 + 2;
            Q = Math.sqrt(nt ** 2 + z ** 2);
          }
          G?.touches
            ? M.current === null &&
              ((M.current = () => {
                H({ pulsate: J, rippleX: v, rippleY: P, rippleSize: Q, cb: X });
              }),
              _.start(p5, () => {
                M.current && (M.current(), (M.current = null));
              }))
            : H({ pulsate: J, rippleX: v, rippleY: P, rippleSize: Q, cb: X });
        },
        [c, H, _]
      ),
      W = N.useCallback(() => {
        q({}, { pulsate: !0 });
      }, [q]),
      F = N.useCallback(
        (G, j) => {
          if ((_.clear(), G?.type === 'touchend' && M.current)) {
            (M.current(),
              (M.current = null),
              _.start(0, () => {
                F(G, j);
              }));
            return;
          }
          ((M.current = null), g((X) => (X.length > 0 ? X.slice(1) : X)), (x.current = j));
        },
        [_]
      );
    return (
      N.useImperativeHandle(o, () => ({ pulsate: W, start: q, stop: F }), [W, q, F]),
      R.jsx(y5, {
        className: Ut(Mn.root, f.root, p),
        ref: T,
        ...h,
        children: R.jsx(Zf, { component: null, exit: !0, children: y }),
      })
    );
  });
function S5(a) {
  return $e('MuiButtonBase', a);
}
const x5 = Ze('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  C5 = (a) => {
    const { disabled: i, focusVisible: o, focusVisibleClassName: u, classes: c } = a,
      p = Ke({ root: ['root', i && 'disabled', o && 'focusVisible'] }, S5, c);
    return (o && u && (p.root += ` ${u}`), p);
  },
  T5 = Rt('button', { name: 'MuiButtonBase', slot: 'Root' })({
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
    [`&.${x5.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  Jf = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiButtonBase' }),
      {
        action: c,
        centerRipple: f = !1,
        children: p,
        className: h,
        component: y = 'button',
        disabled: g = !1,
        disableRipple: b = !1,
        disableTouchRipple: x = !1,
        focusRipple: A = !1,
        focusVisibleClassName: _,
        LinkComponent: M = 'a',
        onBlur: T,
        onClick: H,
        onContextMenu: q,
        onDragLeave: W,
        onFocus: F,
        onFocusVisible: G,
        onKeyDown: j,
        onKeyUp: X,
        onMouseDown: J,
        onMouseLeave: st,
        onMouseUp: ct,
        onTouchEnd: pt,
        onTouchMove: ft,
        onTouchStart: v,
        tabIndex: P = 0,
        TouchRippleProps: Q,
        touchRippleRef: nt,
        type: z,
        ...Y
      } = u,
      K = N.useRef(null),
      et = c5(),
      mt = xi(et.ref, nt),
      [S, k] = N.useState(!1);
    (g && S && k(!1),
      N.useImperativeHandle(
        c,
        () => ({
          focusVisible: () => {
            (k(!0), K.current.focus());
          },
        }),
        []
      ));
    const I = et.shouldMount && !b && !g;
    N.useEffect(() => {
      S && A && !b && et.pulsate();
    }, [b, A, S, et]);
    const tt = ga(et, 'start', J, x),
      at = ga(et, 'stop', q, x),
      ot = ga(et, 'stop', W, x),
      St = ga(et, 'stop', ct, x),
      Gt = ga(
        et,
        'stop',
        (yt) => {
          (S && yt.preventDefault(), st && st(yt));
        },
        x
      ),
      Nt = ga(et, 'start', v, x),
      Ae = ga(et, 'stop', pt, x),
      He = ga(et, 'stop', ft, x),
      Me = ga(
        et,
        'stop',
        (yt) => {
          (hu(yt.target) || k(!1), T && T(yt));
        },
        !1
      ),
      se = vl((yt) => {
        (K.current || (K.current = yt.currentTarget), hu(yt.target) && (k(!0), G && G(yt)), F && F(yt));
      }),
      ge = () => {
        const yt = K.current;
        return y && y !== 'button' && !(yt.tagName === 'A' && yt.href);
      },
      Tt = vl((yt) => {
        (A &&
          !yt.repeat &&
          S &&
          yt.key === ' ' &&
          et.stop(yt, () => {
            et.start(yt);
          }),
          yt.target === yt.currentTarget && ge() && yt.key === ' ' && yt.preventDefault(),
          j && j(yt),
          yt.target === yt.currentTarget && ge() && yt.key === 'Enter' && !g && (yt.preventDefault(), H && H(yt)));
      }),
      ce = vl((yt) => {
        (A &&
          yt.key === ' ' &&
          S &&
          !yt.defaultPrevented &&
          et.stop(yt, () => {
            et.pulsate(yt);
          }),
          X && X(yt),
          H && yt.target === yt.currentTarget && ge() && yt.key === ' ' && !yt.defaultPrevented && H(yt));
      });
    let jt = y;
    jt === 'button' && (Y.href || Y.to) && (jt = M);
    const ie = {};
    jt === 'button'
      ? ((ie.type = z === void 0 ? 'button' : z), (ie.disabled = g))
      : (!Y.href && !Y.to && (ie.role = 'button'), g && (ie['aria-disabled'] = g));
    const qe = xi(o, K),
      Fe = {
        ...u,
        centerRipple: f,
        component: y,
        disabled: g,
        disableRipple: b,
        disableTouchRipple: x,
        focusRipple: A,
        tabIndex: P,
        focusVisible: S,
      },
      kn = C5(Fe);
    return R.jsxs(T5, {
      as: jt,
      className: Ut(kn.root, h),
      ownerState: Fe,
      onBlur: Me,
      onClick: H,
      onContextMenu: at,
      onFocus: se,
      onKeyDown: Tt,
      onKeyUp: ce,
      onMouseDown: tt,
      onMouseLeave: Gt,
      onMouseUp: St,
      onDragLeave: ot,
      onTouchEnd: Ae,
      onTouchMove: He,
      onTouchStart: Nt,
      ref: qe,
      tabIndex: g ? -1 : P,
      type: z,
      ...ie,
      ...Y,
      children: [p, I ? R.jsx(b5, { ref: mt, center: f, ...Q }) : null],
    });
  });
function ga(a, i, o, u = !1) {
  return vl((c) => (o && o(c), u || a[i](c), !0));
}
function E5(a) {
  return typeof a.main == 'string';
}
function z5(a, i = []) {
  if (!E5(a)) return !1;
  for (const o of i) if (!a.hasOwnProperty(o) || typeof a[o] != 'string') return !1;
  return !0;
}
function Jn(a = []) {
  return ([, i]) => i && z5(i, a);
}
function A5(a) {
  return $e('MuiCircularProgress', a);
}
Ze('MuiCircularProgress', [
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
const Nn = 44,
  Ef = Cl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  zf = Cl`
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
  M5 =
    typeof Ef != 'string'
      ? _r`
        animation: ${Ef} 1.4s linear infinite;
      `
      : null,
  O5 =
    typeof zf != 'string'
      ? _r`
        animation: ${zf} 1.4s ease-in-out infinite;
      `
      : null,
  R5 = (a) => {
    const { classes: i, variant: o, color: u, disableShrink: c } = a,
      f = {
        root: ['root', o, `color${gt(u)}`],
        svg: ['svg'],
        track: ['track'],
        circle: ['circle', `circle${gt(o)}`, c && 'circleDisableShrink'],
      };
    return Ke(f, A5, i);
  },
  w5 = Rt('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[o.variant], i[`color${gt(o.color)}`]];
    },
  })(
    me(({ theme: a }) => ({
      display: 'inline-block',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('transform') } },
        { props: { variant: 'indeterminate' }, style: M5 || { animation: `${Ef} 1.4s linear infinite` } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
      ],
    }))
  ),
  B5 = Rt('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  _5 = Rt('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.circle, i[`circle${gt(o.variant)}`], o.disableShrink && i.circleDisableShrink];
    },
  })(
    me(({ theme: a }) => ({
      stroke: 'currentColor',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('stroke-dashoffset') } },
        { props: { variant: 'indeterminate' }, style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 } },
        {
          props: ({ ownerState: i }) => i.variant === 'indeterminate' && !i.disableShrink,
          style: O5 || { animation: `${zf} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  D5 = Rt('circle', { name: 'MuiCircularProgress', slot: 'Track' })(
    me(({ theme: a }) => ({ stroke: 'currentColor', opacity: (a.vars || a).palette.action.activatedOpacity }))
  ),
  Kg = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiCircularProgress' }),
      {
        className: c,
        color: f = 'primary',
        disableShrink: p = !1,
        enableTrackSlot: h = !1,
        size: y = 40,
        style: g,
        thickness: b = 3.6,
        value: x = 0,
        variant: A = 'indeterminate',
        ..._
      } = u,
      M = { ...u, color: f, disableShrink: p, size: y, thickness: b, value: x, variant: A, enableTrackSlot: h },
      T = R5(M),
      H = {},
      q = {},
      W = {};
    if (A === 'determinate') {
      const F = 2 * Math.PI * ((Nn - b) / 2);
      ((H.strokeDasharray = F.toFixed(3)),
        (W['aria-valuenow'] = Math.round(x)),
        (H.strokeDashoffset = `${(((100 - x) / 100) * F).toFixed(3)}px`),
        (q.transform = 'rotate(-90deg)'));
    }
    return R.jsx(w5, {
      className: Ut(T.root, c),
      style: { width: y, height: y, ...q, ...g },
      ownerState: M,
      ref: o,
      role: 'progressbar',
      ...W,
      ..._,
      children: R.jsxs(B5, {
        className: T.svg,
        ownerState: M,
        viewBox: `${Nn / 2} ${Nn / 2} ${Nn} ${Nn}`,
        children: [
          h
            ? R.jsx(D5, {
                className: T.track,
                ownerState: M,
                cx: Nn,
                cy: Nn,
                r: (Nn - b) / 2,
                fill: 'none',
                strokeWidth: b,
                'aria-hidden': 'true',
              })
            : null,
          R.jsx(_5, {
            className: T.circle,
            style: H,
            ownerState: M,
            cx: Nn,
            cy: Nn,
            r: (Nn - b) / 2,
            fill: 'none',
            strokeWidth: b,
          }),
        ],
      }),
    });
  });
function j5(a) {
  return $e('MuiIconButton', a);
}
const Um = Ze('MuiIconButton', [
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
  N5 = (a) => {
    const { classes: i, disabled: o, color: u, edge: c, size: f, loading: p } = a,
      h = {
        root: [
          'root',
          p && 'loading',
          o && 'disabled',
          u !== 'default' && `color${gt(u)}`,
          c && `edge${gt(c)}`,
          `size${gt(f)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return Ke(h, j5, i);
  },
  U5 = Rt(Jf, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        o.loading && i.loading,
        o.color !== 'default' && i[`color${gt(o.color)}`],
        o.edge && i[`edge${gt(o.edge)}`],
        i[`size${gt(o.size)}`],
      ];
    },
  })(
    me(({ theme: a }) => ({
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
    me(({ theme: a }) => ({
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
      [`&.${Um.disabled}`]: { backgroundColor: 'transparent', color: (a.vars || a).palette.action.disabled },
      [`&.${Um.loading}`]: { color: 'transparent' },
    }))
  ),
  H5 = Rt('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (a.vars || a).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  bi = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiIconButton' }),
      {
        edge: c = !1,
        children: f,
        className: p,
        color: h = 'default',
        disabled: y = !1,
        disableFocusRipple: g = !1,
        size: b = 'medium',
        id: x,
        loading: A = null,
        loadingIndicator: _,
        ...M
      } = u,
      T = Og(x),
      H = _ ?? R.jsx(Kg, { 'aria-labelledby': T, color: 'inherit', size: 16 }),
      q = { ...u, edge: c, color: h, disabled: y, disableFocusRipple: g, loading: A, loadingIndicator: H, size: b },
      W = N5(q);
    return R.jsxs(U5, {
      id: A ? T : x,
      className: Ut(W.root, p),
      centerRipple: !0,
      focusRipple: !g,
      disabled: y || A,
      ref: o,
      ...M,
      ownerState: q,
      children: [
        typeof A == 'boolean' &&
          R.jsx('span', {
            className: W.loadingWrapper,
            style: { display: 'contents' },
            children: R.jsx(H5, { className: W.loadingIndicator, ownerState: q, children: A && H }),
          }),
        f,
      ],
    });
  });
function k5(a) {
  return $e('MuiTypography', a);
}
Ze('MuiTypography', [
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
const L5 = {
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
  $5 = XS(),
  q5 = (a) => {
    const { align: i, gutterBottom: o, noWrap: u, paragraph: c, variant: f, classes: p } = a,
      h = {
        root: [
          'root',
          f,
          a.align !== 'inherit' && `align${gt(i)}`,
          o && 'gutterBottom',
          u && 'noWrap',
          c && 'paragraph',
        ],
      };
    return Ke(h, k5, p);
  },
  Y5 = Rt('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        o.variant && i[o.variant],
        o.align !== 'inherit' && i[`align${gt(o.align)}`],
        o.noWrap && i.noWrap,
        o.gutterBottom && i.gutterBottom,
        o.paragraph && i.paragraph,
      ];
    },
  })(
    me(({ theme: a }) => ({
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
          .map(([i]) => ({ props: { color: `text${gt(i)}` }, style: { color: (a.vars || a).palette.text[i] } })),
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
  Hm = {
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
  Un = N.forwardRef(function (i, o) {
    const { color: u, ...c } = Je({ props: i, name: 'MuiTypography' }),
      f = !L5[u],
      p = $5({ ...c, ...(f && { color: u }) }),
      {
        align: h = 'inherit',
        className: y,
        component: g,
        gutterBottom: b = !1,
        noWrap: x = !1,
        paragraph: A = !1,
        variant: _ = 'body1',
        variantMapping: M = Hm,
        ...T
      } = p,
      H = {
        ...p,
        align: h,
        color: u,
        className: y,
        component: g,
        gutterBottom: b,
        noWrap: x,
        paragraph: A,
        variant: _,
        variantMapping: M,
      },
      q = g || (A ? 'p' : M[_] || Hm[_]) || 'span',
      W = q5(H);
    return R.jsx(Y5, {
      as: q,
      ref: o,
      className: Ut(W.root, y),
      ...T,
      ownerState: H,
      style: { ...(h !== 'inherit' && { '--Typography-textAlign': h }), ...T.style },
    });
  });
function G5(a) {
  return $e('MuiAppBar', a);
}
Ze('MuiAppBar', [
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
const V5 = (a) => {
    const { color: i, position: o, classes: u } = a,
      c = { root: ['root', `color${gt(i)}`, `position${gt(o)}`] };
    return Ke(c, G5, u);
  },
  km = (a, i) => (a ? `${a?.replace(')', '')}, ${i})` : i),
  X5 = Rt(Zg, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, i[`position${gt(o.position)}`], i[`color${gt(o.color)}`]];
    },
  })(
    me(({ theme: a }) => ({
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
              backgroundColor: a.vars ? km(a.vars.palette.AppBar.darkBg, 'var(--AppBar-background)') : null,
              color: a.vars ? km(a.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
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
  Q5 = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiAppBar' }),
      { className: c, color: f = 'primary', enableColorOnDark: p = !1, position: h = 'fixed', ...y } = u,
      g = { ...u, color: f, position: h, enableColorOnDark: p },
      b = V5(g);
    return R.jsx(X5, {
      square: !0,
      component: 'header',
      ownerState: g,
      elevation: 4,
      className: Ut(b.root, c, h === 'fixed' && 'mui-fixed'),
      ref: o,
      ...y,
    });
  });
function Xa(a) {
  const { elementType: i, externalSlotProps: o, ownerState: u, skipResolvingSlotProps: c = !1, ...f } = a,
    p = c ? {} : Xg(o, u),
    { props: h, internalRef: y } = Qg({ ...f, externalSlotProps: p }),
    g = xi(y, p?.ref, a.additionalProps?.ref);
  return Vg(i, { ...h, ref: g }, u);
}
const Z5 = N.createContext(void 0);
function K5() {
  return N.useContext(Z5);
}
const J5 = Ze('MuiBox', ['root']),
  F5 = Ug(),
  Ot = M2({ themeId: wf, defaultTheme: F5, defaultClassName: J5.root, generateClassName: bg.generate });
function W5(a) {
  return $e('MuiButton', a);
}
const dl = Ze('MuiButton', [
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
  P5 = N.createContext({}),
  I5 = N.createContext(void 0),
  t3 = (a) => {
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
          `${f}${gt(i)}`,
          `size${gt(c)}`,
          `${f}Size${gt(c)}`,
          `color${gt(i)}`,
          o && 'disableElevation',
          u && 'fullWidth',
          p && `loadingPosition${gt(h)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${gt(c)}`],
        endIcon: ['icon', 'endIcon', `iconSize${gt(c)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      b = Ke(g, W5, y);
    return { ...y, ...b };
  },
  Jg = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  e3 = Rt(Jf, {
    shouldForwardProp: (a) => Xf(a) || a === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        i[o.variant],
        i[`${o.variant}${gt(o.color)}`],
        i[`size${gt(o.size)}`],
        i[`${o.variant}Size${gt(o.size)}`],
        o.color === 'inherit' && i.colorInherit,
        o.disableElevation && i.disableElevation,
        o.fullWidth && i.fullWidth,
        o.loading && i.loading,
      ];
    },
  })(
    me(({ theme: a }) => {
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
  n3 = Rt('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.startIcon, o.loading && i.startIconLoadingStart, i[`iconSize${gt(o.size)}`]];
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
      ...Jg,
    ],
  })),
  a3 = Rt('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.endIcon, o.loading && i.endIconLoadingEnd, i[`iconSize${gt(o.size)}`]];
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
      ...Jg,
    ],
  })),
  l3 = Rt('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
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
  Lm = Rt('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  wr = N.forwardRef(function (i, o) {
    const u = N.useContext(P5),
      c = N.useContext(I5),
      f = Or(u, i),
      p = Je({ props: f, name: 'MuiButton' }),
      {
        children: h,
        color: y = 'primary',
        component: g = 'button',
        className: b,
        disabled: x = !1,
        disableElevation: A = !1,
        disableFocusRipple: _ = !1,
        endIcon: M,
        focusVisibleClassName: T,
        fullWidth: H = !1,
        id: q,
        loading: W = null,
        loadingIndicator: F,
        loadingPosition: G = 'center',
        size: j = 'medium',
        startIcon: X,
        type: J,
        variant: st = 'text',
        ...ct
      } = p,
      pt = Og(q),
      ft = F ?? R.jsx(Kg, { 'aria-labelledby': pt, color: 'inherit', size: 16 }),
      v = {
        ...p,
        color: y,
        component: g,
        disabled: x,
        disableElevation: A,
        disableFocusRipple: _,
        fullWidth: H,
        loading: W,
        loadingIndicator: ft,
        loadingPosition: G,
        size: j,
        type: J,
        variant: st,
      },
      P = t3(v),
      Q =
        (X || (W && G === 'start')) &&
        R.jsx(n3, {
          className: P.startIcon,
          ownerState: v,
          children: X || R.jsx(Lm, { className: P.loadingIconPlaceholder, ownerState: v }),
        }),
      nt =
        (M || (W && G === 'end')) &&
        R.jsx(a3, {
          className: P.endIcon,
          ownerState: v,
          children: M || R.jsx(Lm, { className: P.loadingIconPlaceholder, ownerState: v }),
        }),
      z = c || '',
      Y =
        typeof W == 'boolean'
          ? R.jsx('span', {
              className: P.loadingWrapper,
              style: { display: 'contents' },
              children: W && R.jsx(l3, { className: P.loadingIndicator, ownerState: v, children: ft }),
            })
          : null;
    return R.jsxs(e3, {
      ownerState: v,
      className: Ut(u.className, P.root, b, z),
      component: g,
      disabled: x || W,
      focusRipple: !_,
      focusVisibleClassName: Ut(P.focusVisible, T),
      ref: o,
      type: J,
      id: W ? pt : q,
      ...ct,
      classes: P,
      children: [Q, G !== 'end' && Y, h, G === 'end' && Y, nt],
    });
  });
function i3(a) {
  return $e('PrivateSwitchBase', a);
}
Ze('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
const r3 = (a) => {
    const { classes: i, checked: o, disabled: u, edge: c } = a,
      f = { root: ['root', o && 'checked', u && 'disabled', c && `edge${gt(c)}`], input: ['input'] };
    return Ke(f, i3, i);
  },
  o3 = Rt(Jf, { name: 'MuiSwitchBase' })({
    padding: 9,
    borderRadius: '50%',
    variants: [
      { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
      { props: ({ edge: a, ownerState: i }) => a === 'start' && i.size !== 'small', style: { marginLeft: -12 } },
      { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      { props: ({ edge: a, ownerState: i }) => a === 'end' && i.size !== 'small', style: { marginRight: -12 } },
    ],
  }),
  u3 = Rt('input', { name: 'MuiSwitchBase', shouldForwardProp: Xf })({
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
  s3 = N.forwardRef(function (i, o) {
    const {
        autoFocus: u,
        checked: c,
        checkedIcon: f,
        defaultChecked: p,
        disabled: h,
        disableFocusRipple: y = !1,
        edge: g = !1,
        icon: b,
        id: x,
        inputProps: A,
        inputRef: _,
        name: M,
        onBlur: T,
        onChange: H,
        onFocus: q,
        readOnly: W,
        required: F = !1,
        tabIndex: G,
        type: j,
        value: X,
        slots: J = {},
        slotProps: st = {},
        ...ct
      } = i,
      [pt, ft] = Lg({ controlled: c, default: !!p, name: 'SwitchBase', state: 'checked' }),
      v = K5(),
      P = (at) => {
        (q && q(at), v && v.onFocus && v.onFocus(at));
      },
      Q = (at) => {
        (T && T(at), v && v.onBlur && v.onBlur(at));
      },
      nt = (at) => {
        if (at.nativeEvent.defaultPrevented) return;
        const ot = at.target.checked;
        (ft(ot), H && H(at, ot));
      };
    let z = h;
    v && typeof z > 'u' && (z = v.disabled);
    const Y = j === 'checkbox' || j === 'radio',
      K = { ...i, checked: pt, disabled: z, disableFocusRipple: y, edge: g },
      et = r3(K),
      mt = { slots: J, slotProps: { input: A, ...st } },
      [S, k] = Qa('root', {
        ref: o,
        elementType: o3,
        className: et.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...mt, component: 'span', ...ct },
        getSlotProps: (at) => ({
          ...at,
          onFocus: (ot) => {
            (at.onFocus?.(ot), P(ot));
          },
          onBlur: (ot) => {
            (at.onBlur?.(ot), Q(ot));
          },
        }),
        ownerState: K,
        additionalProps: { centerRipple: !0, focusRipple: !y, disabled: z, role: void 0, tabIndex: null },
      }),
      [I, tt] = Qa('input', {
        ref: _,
        elementType: u3,
        className: et.input,
        externalForwardedProps: mt,
        getSlotProps: (at) => ({
          ...at,
          onChange: (ot) => {
            (at.onChange?.(ot), nt(ot));
          },
        }),
        ownerState: K,
        additionalProps: {
          autoFocus: u,
          checked: c,
          defaultChecked: p,
          disabled: z,
          id: Y ? x : void 0,
          name: M,
          readOnly: W,
          required: F,
          tabIndex: G,
          type: j,
          ...(j === 'checkbox' && X === void 0 ? {} : { value: X }),
        },
      });
    return R.jsxs(S, { ...k, children: [R.jsx(I, { ...tt }), pt ? f : b] });
  }),
  $m = lS({
    createStyledComponent: Rt('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (a, i) => {
        const { ownerState: o } = a;
        return [
          i.root,
          i[`maxWidth${gt(String(o.maxWidth))}`],
          o.fixed && i.fixed,
          o.disableGutters && i.disableGutters,
        ];
      },
    }),
    useThemeProps: (a) => Je({ props: a, name: 'MuiContainer' }),
  }),
  c3 = {
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
function f3(a) {
  return $e('MuiSkeleton', a);
}
Ze('MuiSkeleton', [
  'root',
  'text',
  'rectangular',
  'rounded',
  'circular',
  'pulse',
  'wave',
  'withChildren',
  'fitContent',
  'heightAuto',
]);
const d3 = (a) => {
    const { classes: i, variant: o, animation: u, hasChildren: c, width: f, height: p } = a;
    return Ke({ root: ['root', o, u, c && 'withChildren', c && !f && 'fitContent', c && !p && 'heightAuto'] }, f3, i);
  },
  Af = Cl`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,
  Mf = Cl`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,
  p3 =
    typeof Af != 'string'
      ? _r`
        animation: ${Af} 2s ease-in-out 0.5s infinite;
      `
      : null,
  h3 =
    typeof Mf != 'string'
      ? _r`
        &::after {
          animation: ${Mf} 2s linear 0.5s infinite;
        }
      `
      : null,
  m3 = Rt('span', {
    name: 'MuiSkeleton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        i[o.variant],
        o.animation !== !1 && i[o.animation],
        o.hasChildren && i.withChildren,
        o.hasChildren && !o.width && i.fitContent,
        o.hasChildren && !o.height && i.heightAuto,
      ];
    },
  })(
    me(({ theme: a }) => {
      const i = GS(a.shape.borderRadius) || 'px',
        o = VS(a.shape.borderRadius);
      return {
        display: 'block',
        backgroundColor: a.vars
          ? a.vars.palette.Skeleton.bg
          : a.alpha(a.palette.text.primary, a.palette.mode === 'light' ? 0.11 : 0.13),
        height: '1.2em',
        variants: [
          {
            props: { variant: 'text' },
            style: {
              marginTop: 0,
              marginBottom: 0,
              height: 'auto',
              transformOrigin: '0 55%',
              transform: 'scale(1, 0.60)',
              borderRadius: `${o}${i}/${Math.round((o / 0.6) * 10) / 10}${i}`,
              '&:empty:before': { content: '"\\00a0"' },
            },
          },
          { props: { variant: 'circular' }, style: { borderRadius: '50%' } },
          { props: { variant: 'rounded' }, style: { borderRadius: (a.vars || a).shape.borderRadius } },
          { props: ({ ownerState: u }) => u.hasChildren, style: { '& > *': { visibility: 'hidden' } } },
          { props: ({ ownerState: u }) => u.hasChildren && !u.width, style: { maxWidth: 'fit-content' } },
          { props: ({ ownerState: u }) => u.hasChildren && !u.height, style: { height: 'auto' } },
          { props: { animation: 'pulse' }, style: p3 || { animation: `${Af} 2s ease-in-out 0.5s infinite` } },
          {
            props: { animation: 'wave' },
            style: {
              position: 'relative',
              overflow: 'hidden',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              '&::after': {
                background: `linear-gradient(
                90deg,
                transparent,
                ${(a.vars || a).palette.action.hover},
                transparent
              )`,
                content: '""',
                position: 'absolute',
                transform: 'translateX(-100%)',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
              },
            },
          },
          { props: { animation: 'wave' }, style: h3 || { '&::after': { animation: `${Mf} 2s linear 0.5s infinite` } } },
        ],
      };
    })
  ),
  uf = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiSkeleton' }),
      {
        animation: c = 'pulse',
        className: f,
        component: p = 'span',
        height: h,
        style: y,
        variant: g = 'text',
        width: b,
        ...x
      } = u,
      A = { ...u, animation: c, component: p, variant: g, hasChildren: !!x.children },
      _ = d3(A);
    return R.jsx(m3, {
      as: p,
      ref: o,
      className: Ut(_.root, f),
      ownerState: A,
      ...x,
      style: { width: b, height: h, ...y },
    });
  });
function g3(a, i, o = (u, c) => u === c) {
  return a.length === i.length && a.every((u, c) => o(u, i[c]));
}
const y3 = 2;
function hi(a, i, o, u, c) {
  return o === 1 ? Math.min(a + i, c) : Math.max(a - i, u);
}
function Fg(a, i) {
  return a - i;
}
function qm(a, i) {
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
function gu(a, i, o) {
  return ((a - i) * 100) / (o - i);
}
function v3(a, i, o) {
  return (o - i) * a + i;
}
function b3(a) {
  if (Math.abs(a) < 1) {
    const o = a.toExponential().split('e-'),
      u = o[0].split('.')[1];
    return (u ? u.length : 0) + parseInt(o[1], 10);
  }
  const i = a.toString().split('.')[1];
  return i ? i.length : 0;
}
function S3(a, i, o) {
  const u = Math.round((a - o) / i) * i + o;
  return Number(u.toFixed(b3(i)));
}
function Ym({ values: a, newValue: i, index: o }) {
  const u = a.slice();
  return ((u[o] = i), u.sort(Fg));
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
      ? g3(a, i)
      : !1;
}
const x3 = {
    horizontal: { offset: (a) => ({ left: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    'horizontal-reverse': { offset: (a) => ({ right: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    vertical: { offset: (a) => ({ bottom: `${a}%` }), leap: (a) => ({ height: `${a}%` }) },
  },
  C3 = (a) => a;
let eu;
function Gm() {
  return (
    eu === void 0 &&
      (typeof CSS < 'u' && typeof CSS.supports == 'function' ? (eu = CSS.supports('touch-action', 'none')) : (eu = !0)),
    eu
  );
}
function T3(a) {
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
      onChangeCommitted: x,
      orientation: A = 'horizontal',
      rootRef: _,
      scale: M = C3,
      step: T = 1,
      shiftStep: H = 10,
      tabIndex: q,
      value: W,
    } = a,
    F = N.useRef(void 0),
    [G, j] = N.useState(-1),
    [X, J] = N.useState(-1),
    [st, ct] = N.useState(!1),
    pt = N.useRef(0),
    ft = N.useRef(null),
    [v, P] = Lg({ controlled: W, default: o ?? y, name: 'Slider' }),
    Q =
      b &&
      ((it, lt, xt) => {
        const zt = it.nativeEvent || it,
          _t = new zt.constructor(zt.type, zt);
        (Object.defineProperty(_t, 'target', { writable: !0, value: { value: lt, name: g } }),
          (ft.current = lt),
          b(_t, lt, xt));
      }),
    nt = Array.isArray(v);
  let z = nt ? v.slice().sort(Fg) : [v];
  z = z.map((it) => (it == null ? y : mi(it, y, h)));
  const Y =
      p === !0 && T !== null
        ? [...Array(Math.floor((h - y) / T) + 1)].map((it, lt) => ({ value: y + T * lt }))
        : p || [],
    K = Y.map((it) => it.value),
    [et, mt] = N.useState(-1),
    S = N.useRef(null),
    k = xi(_, S),
    I = (it) => (lt) => {
      const xt = Number(lt.currentTarget.getAttribute('data-index'));
      (hu(lt.target) && mt(xt), J(xt), it?.onFocus?.(lt));
    },
    tt = (it) => (lt) => {
      (hu(lt.target) || mt(-1), J(-1), it?.onBlur?.(lt));
    },
    at = (it, lt) => {
      const xt = Number(it.currentTarget.getAttribute('data-index')),
        zt = z[xt],
        _t = K.indexOf(zt);
      let Et = lt;
      if (Y && T == null) {
        const Ye = K[K.length - 1];
        Et >= Ye ? (Et = Ye) : Et <= K[0] ? (Et = K[0]) : (Et = Et < zt ? K[_t - 1] : K[_t + 1]);
      }
      if (((Et = mi(Et, y, h)), nt)) {
        c && (Et = mi(Et, z[xt - 1] || -1 / 0, z[xt + 1] || 1 / 0));
        const Ye = Et;
        Et = Ym({ values: z, newValue: Et, index: xt });
        let We = xt;
        (c || (We = Et.indexOf(Ye)), Io({ sliderRef: S, activeIndex: We }));
      }
      (P(Et), mt(xt), Q && !tu(Et, v) && Q(it, Et, xt), x && x(it, ft.current ?? Et));
    },
    ot = (it) => (lt) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(lt.key)) {
        lt.preventDefault();
        const xt = Number(lt.currentTarget.getAttribute('data-index')),
          zt = z[xt];
        let _t = null;
        if (T != null) {
          const Et = lt.shiftKey ? H : T;
          switch (lt.key) {
            case 'ArrowUp':
              _t = hi(zt, Et, 1, y, h);
              break;
            case 'ArrowRight':
              _t = hi(zt, Et, f ? -1 : 1, y, h);
              break;
            case 'ArrowDown':
              _t = hi(zt, Et, -1, y, h);
              break;
            case 'ArrowLeft':
              _t = hi(zt, Et, f ? 1 : -1, y, h);
              break;
            case 'PageUp':
              _t = hi(zt, H, 1, y, h);
              break;
            case 'PageDown':
              _t = hi(zt, H, -1, y, h);
              break;
            case 'Home':
              _t = y;
              break;
            case 'End':
              _t = h;
              break;
          }
        } else if (Y) {
          const Et = K[K.length - 1],
            Ye = K.indexOf(zt),
            We = [f ? 'ArrowRight' : 'ArrowLeft', 'ArrowDown', 'PageDown', 'Home'],
            te = [f ? 'ArrowLeft' : 'ArrowRight', 'ArrowUp', 'PageUp', 'End'];
          We.includes(lt.key)
            ? Ye === 0
              ? (_t = K[0])
              : (_t = K[Ye - 1])
            : te.includes(lt.key) && (Ye === K.length - 1 ? (_t = Et) : (_t = K[Ye + 1]));
        }
        _t != null && at(lt, _t);
      }
      it?.onKeyDown?.(lt);
    };
  (Ag(() => {
    u && S.current.contains(document.activeElement) && document.activeElement?.blur();
  }, [u]),
    u && G !== -1 && j(-1),
    u && et !== -1 && mt(-1));
  const St = (it) => (lt) => {
      (it.onChange?.(lt), at(lt, lt.target.valueAsNumber));
    },
    Gt = N.useRef(void 0);
  let Nt = A;
  f && A === 'horizontal' && (Nt += '-reverse');
  const Ae = ({ finger: it, move: lt = !1 }) => {
      const { current: xt } = S,
        { width: zt, height: _t, bottom: Et, left: Ye } = xt.getBoundingClientRect();
      let We;
      (Nt.startsWith('vertical') ? (We = (Et - it.y) / _t) : (We = (it.x - Ye) / zt),
        Nt.includes('-reverse') && (We = 1 - We));
      let te;
      if (((te = v3(We, y, h)), T)) te = S3(te, T, y);
      else {
        const Pe = qm(K, te);
        te = K[Pe];
      }
      te = mi(te, y, h);
      let re = 0;
      if (nt) {
        (lt ? (re = Gt.current) : (re = qm(z, te)), c && (te = mi(te, z[re - 1] || -1 / 0, z[re + 1] || 1 / 0)));
        const Pe = te;
        ((te = Ym({ values: z, newValue: te, index: re })), (c && lt) || ((re = te.indexOf(Pe)), (Gt.current = re)));
      }
      return { newValue: te, activeIndex: re };
    },
    He = vl((it) => {
      const lt = Po(it, F);
      if (!lt) return;
      if (((pt.current += 1), it.type === 'mousemove' && it.buttons === 0)) {
        Me(it);
        return;
      }
      const { newValue: xt, activeIndex: zt } = Ae({ finger: lt, move: !0 });
      (Io({ sliderRef: S, activeIndex: zt, setActive: j }),
        P(xt),
        !st && pt.current > y3 && ct(!0),
        Q && !tu(xt, v) && Q(it, xt, zt));
    }),
    Me = vl((it) => {
      const lt = Po(it, F);
      if ((ct(!1), !lt)) return;
      const { newValue: xt } = Ae({ finger: lt, move: !0 });
      (j(-1), it.type === 'touchend' && J(-1), x && x(it, ft.current ?? xt), (F.current = void 0), ge());
    }),
    se = vl((it) => {
      if (u) return;
      Gm() || it.preventDefault();
      const lt = it.changedTouches[0];
      lt != null && (F.current = lt.identifier);
      const xt = Po(it, F);
      if (xt !== !1) {
        const { newValue: _t, activeIndex: Et } = Ae({ finger: xt });
        (Io({ sliderRef: S, activeIndex: Et, setActive: j }), P(_t), Q && !tu(_t, v) && Q(it, _t, Et));
      }
      pt.current = 0;
      const zt = ru(S.current);
      (zt.addEventListener('touchmove', He, { passive: !0 }), zt.addEventListener('touchend', Me, { passive: !0 }));
    }),
    ge = N.useCallback(() => {
      const it = ru(S.current);
      (it.removeEventListener('mousemove', He),
        it.removeEventListener('mouseup', Me),
        it.removeEventListener('touchmove', He),
        it.removeEventListener('touchend', Me));
    }, [Me, He]);
  (N.useEffect(() => {
    const { current: it } = S;
    return (
      it.addEventListener('touchstart', se, { passive: Gm() }),
      () => {
        (it.removeEventListener('touchstart', se), ge());
      }
    );
  }, [ge, se]),
    N.useEffect(() => {
      u && ge();
    }, [u, ge]));
  const Tt = (it) => (lt) => {
      if ((it.onMouseDown?.(lt), u || lt.defaultPrevented || lt.button !== 0)) return;
      lt.preventDefault();
      const xt = Po(lt, F);
      if (xt !== !1) {
        const { newValue: _t, activeIndex: Et } = Ae({ finger: xt });
        (Io({ sliderRef: S, activeIndex: Et, setActive: j }), P(_t), Q && !tu(_t, v) && Q(lt, _t, Et));
      }
      pt.current = 0;
      const zt = ru(S.current);
      (zt.addEventListener('mousemove', He, { passive: !0 }), zt.addEventListener('mouseup', Me));
    },
    ce = gu(nt ? z[0] : y, y, h),
    jt = gu(z[z.length - 1], y, h) - ce,
    ie = (it = {}) => {
      const lt = ou(it),
        xt = { onMouseDown: Tt(lt || {}) },
        zt = { ...lt, ...xt };
      return { ...it, ref: k, ...zt };
    },
    qe = (it) => (lt) => {
      it.onMouseOver?.(lt);
      const xt = Number(lt.currentTarget.getAttribute('data-index'));
      J(xt);
    },
    Fe = (it) => (lt) => {
      (it.onMouseLeave?.(lt), J(-1));
    },
    kn = (it = {}) => {
      const lt = ou(it),
        xt = { onMouseOver: qe(lt || {}), onMouseLeave: Fe(lt || {}) };
      return { ...it, ...lt, ...xt };
    },
    yt = (it) => ({ pointerEvents: G !== -1 && G !== it ? 'none' : void 0 });
  let va;
  return (
    A === 'vertical' && (va = f ? 'vertical-rl' : 'vertical-lr'),
    {
      active: G,
      axis: Nt,
      axisProps: x3,
      dragging: st,
      focusedThumbIndex: et,
      getHiddenInputProps: (it = {}) => {
        const lt = ou(it),
          xt = { onChange: St(lt || {}), onFocus: I(lt || {}), onBlur: tt(lt || {}), onKeyDown: ot(lt || {}) },
          zt = { ...lt, ...xt };
        return {
          tabIndex: q,
          'aria-labelledby': i,
          'aria-orientation': A,
          'aria-valuemax': M(h),
          'aria-valuemin': M(y),
          name: g,
          type: 'range',
          min: a.min,
          max: a.max,
          step: a.step === null && a.marks ? 'any' : (a.step ?? void 0),
          disabled: u,
          ...it,
          ...zt,
          style: { ...c3, direction: f ? 'rtl' : 'ltr', width: '100%', height: '100%', writingMode: va },
        };
      },
      getRootProps: ie,
      getThumbProps: kn,
      marks: Y,
      open: X,
      range: nt,
      rootRef: k,
      trackLeap: jt,
      trackOffset: ce,
      values: z,
      getThumbStyle: yt,
    }
  );
}
const E3 = (a) => !a || !Tr(a);
function z3(a) {
  return $e('MuiSlider', a);
}
const Rn = Ze('MuiSlider', [
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
  A3 = (a) => {
    const { open: i } = a;
    return { offset: Ut(i && Rn.valueLabelOpen), circle: Rn.valueLabelCircle, label: Rn.valueLabelLabel };
  };
function M3(a) {
  const { children: i, className: o, value: u } = a,
    c = A3(a);
  return i
    ? N.cloneElement(
        i,
        { className: i.props.className },
        R.jsxs(N.Fragment, {
          children: [
            i.props.children,
            R.jsx('span', {
              className: Ut(c.offset, o),
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
function Vm(a) {
  return a;
}
const O3 = Rt('span', {
    name: 'MuiSlider',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [
        i.root,
        i[`color${gt(o.color)}`],
        o.size !== 'medium' && i[`size${gt(o.size)}`],
        o.marked && i.marked,
        o.orientation === 'vertical' && i.vertical,
        o.track === 'inverted' && i.trackInverted,
        o.track === !1 && i.trackFalse,
      ];
    },
  })(
    me(({ theme: a }) => ({
      borderRadius: 12,
      boxSizing: 'content-box',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      WebkitTapHighlightColor: 'transparent',
      '@media print': { colorAdjust: 'exact' },
      [`&.${Rn.disabled}`]: { pointerEvents: 'none', cursor: 'default', color: (a.vars || a).palette.grey[400] },
      [`&.${Rn.dragging}`]: { [`& .${Rn.thumb}, & .${Rn.track}`]: { transition: 'none' } },
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
  R3 = Rt('span', { name: 'MuiSlider', slot: 'Rail' })({
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
  w3 = Rt('span', { name: 'MuiSlider', slot: 'Track' })(
    me(({ theme: a }) => ({
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
  B3 = Rt('span', {
    name: 'MuiSlider',
    slot: 'Thumb',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.thumb, i[`thumbColor${gt(o.color)}`], o.size !== 'medium' && i[`thumbSize${gt(o.size)}`]];
    },
  })(
    me(({ theme: a }) => ({
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
      [`&.${Rn.disabled}`]: { '&:hover': { boxShadow: 'none' } },
      variants: [
        { props: { size: 'small' }, style: { width: 12, height: 12, '&::before': { boxShadow: 'none' } } },
        { props: { orientation: 'horizontal' }, style: { top: '50%', transform: 'translate(-50%, -50%)' } },
        { props: { orientation: 'vertical' }, style: { left: '50%', transform: 'translate(-50%, 50%)' } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({
            props: { color: i },
            style: {
              [`&:hover, &.${Rn.focusVisible}`]: {
                boxShadow: `0px 0px 0px 8px ${a.alpha((a.vars || a).palette[i].main, 0.16)}`,
                '@media (hover: none)': { boxShadow: 'none' },
              },
              [`&.${Rn.active}`]: { boxShadow: `0px 0px 0px 14px ${a.alpha((a.vars || a).palette[i].main, 0.16)}` },
            },
          })),
      ],
    }))
  ),
  _3 = Rt(M3, { name: 'MuiSlider', slot: 'ValueLabel' })(
    me(({ theme: a }) => ({
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
            [`&.${Rn.valueLabelOpen}`]: { transform: 'translateY(-100%) scale(1)' },
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
            [`&.${Rn.valueLabelOpen}`]: { transform: 'translateY(-50%) scale(1)' },
          },
        },
        { props: { size: 'small' }, style: { fontSize: a.typography.pxToRem(12), padding: '0.25rem 0.5rem' } },
        { props: { orientation: 'vertical', size: 'small' }, style: { right: '20px' } },
      ],
    }))
  ),
  D3 = Rt('span', {
    name: 'MuiSlider',
    slot: 'Mark',
    shouldForwardProp: (a) => Vf(a) && a !== 'markActive',
    overridesResolver: (a, i) => {
      const { markActive: o } = a;
      return [i.mark, o && i.markActive];
    },
  })(
    me(({ theme: a }) => ({
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
  j3 = Rt('span', { name: 'MuiSlider', slot: 'MarkLabel', shouldForwardProp: (a) => Vf(a) && a !== 'markLabelActive' })(
    me(({ theme: a }) => ({
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
  N3 = (a) => {
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
          h && `color${gt(h)}`,
          y && `size${gt(y)}`,
        ],
        rail: ['rail'],
        track: ['track'],
        mark: ['mark'],
        markActive: ['markActive'],
        markLabel: ['markLabel'],
        markLabelActive: ['markLabelActive'],
        valueLabel: ['valueLabel'],
        thumb: ['thumb', i && 'disabled', y && `thumbSize${gt(y)}`, h && `thumbColor${gt(h)}`],
        active: ['active'],
        disabled: ['disabled'],
        focusVisible: ['focusVisible'],
      };
    return Ke(g, z3, p);
  },
  U3 = ({ children: a }) => a,
  sf = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiSlider' }),
      c = Y2(),
      {
        'aria-label': f,
        'aria-valuetext': p,
        'aria-labelledby': h,
        component: y = 'span',
        components: g = {},
        componentsProps: b = {},
        color: x = 'primary',
        classes: A,
        className: _,
        disableSwap: M = !1,
        disabled: T = !1,
        getAriaLabel: H,
        getAriaValueText: q,
        marks: W = !1,
        max: F = 100,
        min: G = 0,
        name: j,
        onChange: X,
        onChangeCommitted: J,
        orientation: st = 'horizontal',
        shiftStep: ct = 10,
        size: pt = 'medium',
        step: ft = 1,
        scale: v = Vm,
        slotProps: P,
        slots: Q,
        tabIndex: nt,
        track: z = 'normal',
        value: Y,
        valueLabelDisplay: K = 'off',
        valueLabelFormat: et = Vm,
        ...mt
      } = u,
      S = {
        ...u,
        isRtl: c,
        max: F,
        min: G,
        classes: A,
        disabled: T,
        disableSwap: M,
        orientation: st,
        marks: W,
        color: x,
        size: pt,
        step: ft,
        shiftStep: ct,
        scale: v,
        track: z,
        valueLabelDisplay: K,
        valueLabelFormat: et,
      },
      {
        axisProps: k,
        getRootProps: I,
        getHiddenInputProps: tt,
        getThumbProps: at,
        open: ot,
        active: St,
        axis: Gt,
        focusedThumbIndex: Nt,
        range: Ae,
        dragging: He,
        marks: Me,
        values: se,
        trackOffset: ge,
        trackLeap: Tt,
        getThumbStyle: ce,
      } = T3({ ...S, rootRef: o });
    ((S.marked = Me.length > 0 && Me.some((ee) => ee.label)), (S.dragging = He), (S.focusedThumbIndex = Nt));
    const jt = N3(S),
      ie = Q?.root ?? g.Root ?? O3,
      qe = Q?.rail ?? g.Rail ?? R3,
      Fe = Q?.track ?? g.Track ?? w3,
      kn = Q?.thumb ?? g.Thumb ?? B3,
      yt = Q?.valueLabel ?? g.ValueLabel ?? _3,
      va = Q?.mark ?? g.Mark ?? D3,
      Oe = Q?.markLabel ?? g.MarkLabel ?? j3,
      it = Q?.input ?? g.Input ?? 'input',
      lt = P?.root ?? b.root,
      xt = P?.rail ?? b.rail,
      zt = P?.track ?? b.track,
      _t = P?.thumb ?? b.thumb,
      Et = P?.valueLabel ?? b.valueLabel,
      Ye = P?.mark ?? b.mark,
      We = P?.markLabel ?? b.markLabel,
      te = P?.input ?? b.input,
      re = Xa({
        elementType: ie,
        getSlotProps: I,
        externalSlotProps: lt,
        externalForwardedProps: mt,
        additionalProps: { ...(E3(ie) && { as: y }) },
        ownerState: { ...S, ...lt?.ownerState },
        className: [jt.root, _],
      }),
      Pe = Xa({ elementType: qe, externalSlotProps: xt, ownerState: S, className: jt.rail }),
      Ge = Xa({
        elementType: Fe,
        externalSlotProps: zt,
        additionalProps: { style: { ...k[Gt].offset(ge), ...k[Gt].leap(Tt) } },
        ownerState: { ...S, ...zt?.ownerState },
        className: jt.track,
      }),
      Ti = Xa({
        elementType: kn,
        getSlotProps: at,
        externalSlotProps: _t,
        ownerState: { ...S, ..._t?.ownerState },
        className: jt.thumb,
      }),
      ju = Xa({
        elementType: yt,
        externalSlotProps: Et,
        ownerState: { ...S, ...Et?.ownerState },
        className: jt.valueLabel,
      }),
      Ei = Xa({ elementType: va, externalSlotProps: Ye, ownerState: S, className: jt.mark }),
      ba = Xa({ elementType: Oe, externalSlotProps: We, ownerState: S, className: jt.markLabel }),
      Tl = Xa({ elementType: it, getSlotProps: tt, externalSlotProps: te, ownerState: S });
    return R.jsxs(ie, {
      ...re,
      children: [
        R.jsx(qe, { ...Pe }),
        R.jsx(Fe, { ...Ge }),
        Me.filter((ee) => ee.value >= G && ee.value <= F).map((ee, ne) => {
          const Sa = gu(ee.value, G, F),
            Ln = k[Gt].offset(Sa);
          let Bn;
          return (
            z === !1
              ? (Bn = se.includes(ee.value))
              : (Bn =
                  (z === 'normal' && (Ae ? ee.value >= se[0] && ee.value <= se[se.length - 1] : ee.value <= se[0])) ||
                  (z === 'inverted' && (Ae ? ee.value <= se[0] || ee.value >= se[se.length - 1] : ee.value >= se[0]))),
            R.jsxs(
              N.Fragment,
              {
                children: [
                  R.jsx(va, {
                    'data-index': ne,
                    ...Ei,
                    ...(!Tr(va) && { markActive: Bn }),
                    style: { ...Ln, ...Ei.style },
                    className: Ut(Ei.className, Bn && jt.markActive),
                  }),
                  ee.label != null
                    ? R.jsx(Oe, {
                        'aria-hidden': !0,
                        'data-index': ne,
                        ...ba,
                        ...(!Tr(Oe) && { markLabelActive: Bn }),
                        style: { ...Ln, ...ba.style },
                        className: Ut(jt.markLabel, ba.className, Bn && jt.markLabelActive),
                        children: ee.label,
                      })
                    : null,
                ],
              },
              ne
            )
          );
        }),
        se.map((ee, ne) => {
          const Sa = gu(ee, G, F),
            Ln = k[Gt].offset(Sa),
            Bn = K === 'off' ? U3 : yt;
          return R.jsx(
            Bn,
            {
              ...(!Tr(Bn) && {
                valueLabelFormat: et,
                valueLabelDisplay: K,
                value: typeof et == 'function' ? et(v(ee), ne) : et,
                index: ne,
                open: ot === ne || St === ne || K === 'on',
                disabled: T,
              }),
              ...ju,
              children: R.jsx(kn, {
                'data-index': ne,
                ...Ti,
                className: Ut(jt.thumb, Ti.className, St === ne && jt.active, Nt === ne && jt.focusVisible),
                style: { ...Ln, ...ce(ne), ...Ti.style },
                children: R.jsx(it, {
                  'data-index': ne,
                  'aria-label': H ? H(ne) : f,
                  'aria-valuenow': v(ee),
                  'aria-labelledby': h,
                  'aria-valuetext': q ? q(v(ee), ne) : p,
                  value: se[ne],
                  ...Tl,
                }),
              }),
            },
            ne
          );
        }),
      ],
    });
  }),
  uu = fS({
    createStyledComponent: Rt('div', { name: 'MuiStack', slot: 'Root' }),
    useThemeProps: (a) => Je({ props: a, name: 'MuiStack' }),
  });
function H3(a) {
  return $e('MuiSwitch', a);
}
const Xe = Ze('MuiSwitch', [
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
  k3 = (a) => {
    const { classes: i, edge: o, size: u, color: c, checked: f, disabled: p } = a,
      h = {
        root: ['root', o && `edge${gt(o)}`, `size${gt(u)}`],
        switchBase: ['switchBase', `color${gt(c)}`, f && 'checked', p && 'disabled'],
        thumb: ['thumb'],
        track: ['track'],
        input: ['input'],
      },
      y = Ke(h, H3, i);
    return { ...i, ...y };
  },
  L3 = Rt('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, o.edge && i[`edge${gt(o.edge)}`], i[`size${gt(o.size)}`]];
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
          [`& .${Xe.thumb}`]: { width: 16, height: 16 },
          [`& .${Xe.switchBase}`]: { padding: 4, [`&.${Xe.checked}`]: { transform: 'translateX(16px)' } },
        },
      },
    ],
  }),
  $3 = Rt(s3, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.switchBase, { [`& .${Xe.input}`]: i.input }, o.color !== 'default' && i[`color${gt(o.color)}`]];
    },
  })(
    me(({ theme: a }) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      color: a.vars
        ? a.vars.palette.Switch.defaultColor
        : `${a.palette.mode === 'light' ? a.palette.common.white : a.palette.grey[300]}`,
      transition: a.transitions.create(['left', 'transform'], { duration: a.transitions.duration.shortest }),
      [`&.${Xe.checked}`]: { transform: 'translateX(20px)' },
      [`&.${Xe.disabled}`]: {
        color: a.vars
          ? a.vars.palette.Switch.defaultDisabledColor
          : `${a.palette.mode === 'light' ? a.palette.grey[100] : a.palette.grey[600]}`,
      },
      [`&.${Xe.checked} + .${Xe.track}`]: { opacity: 0.5 },
      [`&.${Xe.disabled} + .${Xe.track}`]: {
        opacity: a.vars ? a.vars.opacity.switchTrackDisabled : `${a.palette.mode === 'light' ? 0.12 : 0.2}`,
      },
      [`& .${Xe.input}`]: { left: '-100%', width: '300%' },
    })),
    me(({ theme: a }) => ({
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
              [`&.${Xe.checked}`]: {
                color: (a.vars || a).palette[i].main,
                '&:hover': {
                  backgroundColor: a.alpha((a.vars || a).palette[i].main, (a.vars || a).palette.action.hoverOpacity),
                  '@media (hover: none)': { backgroundColor: 'transparent' },
                },
                [`&.${Xe.disabled}`]: {
                  color: a.vars
                    ? a.vars.palette.Switch[`${i}DisabledColor`]
                    : `${a.palette.mode === 'light' ? a.lighten(a.palette[i].main, 0.62) : a.darken(a.palette[i].main, 0.55)}`,
                },
              },
              [`&.${Xe.checked} + .${Xe.track}`]: { backgroundColor: (a.vars || a).palette[i].main },
            },
          })),
      ],
    }))
  ),
  q3 = Rt('span', { name: 'MuiSwitch', slot: 'Track' })(
    me(({ theme: a }) => ({
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
  Y3 = Rt('span', { name: 'MuiSwitch', slot: 'Thumb' })(
    me(({ theme: a }) => ({
      boxShadow: (a.vars || a).shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%',
    }))
  ),
  G3 = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiSwitch' }),
      {
        className: c,
        color: f = 'primary',
        edge: p = !1,
        size: h = 'medium',
        sx: y,
        slots: g = {},
        slotProps: b = {},
        ...x
      } = u,
      A = { ...u, color: f, edge: p, size: h },
      _ = k3(A),
      M = { slots: g, slotProps: b },
      [T, H] = Qa('root', {
        className: Ut(_.root, c),
        elementType: L3,
        externalForwardedProps: M,
        ownerState: A,
        additionalProps: { sx: y },
      }),
      [q, W] = Qa('thumb', { className: _.thumb, elementType: Y3, externalForwardedProps: M, ownerState: A }),
      F = R.jsx(q, { ...W }),
      [G, j] = Qa('track', { className: _.track, elementType: q3, externalForwardedProps: M, ownerState: A });
    return R.jsxs(T, {
      ...H,
      children: [
        R.jsx($3, {
          type: 'checkbox',
          icon: F,
          checkedIcon: F,
          ref: o,
          ownerState: A,
          ...x,
          classes: { ..._, root: _.switchBase },
          slots: { ...(g.switchBase && { root: g.switchBase }), ...(g.input && { input: g.input }) },
          slotProps: {
            ...(b.switchBase && { root: typeof b.switchBase == 'function' ? b.switchBase(A) : b.switchBase }),
            input: { role: 'switch' },
            ...(b.input && { input: typeof b.input == 'function' ? b.input(A) : b.input }),
          },
        }),
        R.jsx(G, { ...j }),
      ],
    });
  });
function V3(a) {
  return $e('MuiToolbar', a);
}
Ze('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const X3 = (a) => {
    const { classes: i, disableGutters: o, variant: u } = a;
    return Ke({ root: ['root', !o && 'gutters', u] }, V3, i);
  },
  Q3 = Rt('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: o } = a;
      return [i.root, !o.disableGutters && i.gutters, i[o.variant]];
    },
  })(
    me(({ theme: a }) => ({
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
  Z3 = N.forwardRef(function (i, o) {
    const u = Je({ props: i, name: 'MuiToolbar' }),
      { className: c, component: f = 'div', disableGutters: p = !1, variant: h = 'regular', ...y } = u,
      g = { ...u, component: f, disableGutters: p, variant: h },
      b = X3(g);
    return R.jsx(Q3, { as: f, className: Ut(b.root, c), ref: o, ownerState: g, ...y });
  }),
  K3 = 'modulepreload',
  J3 = function (a) {
    return '/react-mui-camera/' + a;
  },
  Xm = {},
  F3 = function (i, o, u) {
    let c = Promise.resolve();
    if (o && o.length > 0) {
      let y = function (g) {
        return Promise.all(
          g.map((b) =>
            Promise.resolve(b).then(
              (x) => ({ status: 'fulfilled', value: x }),
              (x) => ({ status: 'rejected', reason: x })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const p = document.querySelector('meta[property=csp-nonce]'),
        h = p?.nonce || p?.getAttribute('nonce');
      c = y(
        o.map((g) => {
          if (((g = J3(g)), g in Xm)) return;
          Xm[g] = !0;
          const b = g.endsWith('.css'),
            x = b ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${x}`)) return;
          const A = document.createElement('link');
          if (
            ((A.rel = b ? 'stylesheet' : K3),
            b || (A.as = 'script'),
            (A.crossOrigin = ''),
            (A.href = g),
            h && A.setAttribute('nonce', h),
            document.head.appendChild(A),
            b)
          )
            return new Promise((_, M) => {
              (A.addEventListener('load', _),
                A.addEventListener('error', () => M(new Error(`Unable to preload CSS for ${g}`))));
            });
        })
      );
    }
    function f(p) {
      const h = new Event('vite:preloadError', { cancelable: !0 });
      if (((h.payload = p), window.dispatchEvent(h), !h.defaultPrevented)) throw p;
    }
    return c.then((p) => {
      for (const h of p || []) h.status === 'rejected' && f(h.reason);
      return i().catch(f);
    });
  },
  W3 = It.lazy(() => F3(() => import('./FilterSelector-BWseLqq_.js'), [])),
  P3 = (a) =>
    R.jsx(N.Suspense, {
      fallback: R.jsxs(Ot, {
        sx: { bgcolor: 'rgba(0,0,0,0.8)', width: '100%', p: 2 },
        children: [
          R.jsx(uf, { variant: 'text', width: 120, height: 20, sx: { bgcolor: 'grey.800', mb: 2 } }),
          R.jsx(Ot, {
            sx: { display: 'flex', flexDirection: 'row', gap: 2 },
            children: [...Array(5)].map((i, o) =>
              R.jsxs(
                Ot,
                {
                  sx: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                  children: [
                    R.jsx(uf, {
                      variant: 'rectangular',
                      width: 70,
                      height: 70,
                      sx: { borderRadius: 2, bgcolor: 'grey.800' },
                    }),
                    R.jsx(uf, { variant: 'text', width: 60, height: 15, sx: { mt: 1, bgcolor: 'grey.800' } }),
                  ],
                },
                o
              )
            ),
          }),
        ],
      }),
      children: R.jsx(W3, { ...a }),
    });
var Wg = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Qm = It.createContext && It.createContext(Wg),
  I3 = ['attr', 'size', 'title'];
function tx(a, i) {
  if (a == null) return {};
  var o = ex(a, i),
    u,
    c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(a);
    for (c = 0; c < f.length; c++)
      ((u = f[c]), !(i.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(a, u) && (o[u] = a[u]));
  }
  return o;
}
function ex(a, i) {
  if (a == null) return {};
  var o = {};
  for (var u in a)
    if (Object.prototype.hasOwnProperty.call(a, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = a[u];
    }
  return o;
}
function yu() {
  return (
    (yu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (a[u] = o[u]);
          }
          return a;
        }),
    yu.apply(this, arguments)
  );
}
function Zm(a, i) {
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
function vu(a) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Zm(Object(o), !0).forEach(function (u) {
          nx(a, u, o[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
        : Zm(Object(o)).forEach(function (u) {
            Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(o, u));
          });
  }
  return a;
}
function nx(a, i, o) {
  return (
    (i = ax(i)),
    i in a ? Object.defineProperty(a, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[i] = o),
    a
  );
}
function ax(a) {
  var i = lx(a, 'string');
  return typeof i == 'symbol' ? i : i + '';
}
function lx(a, i) {
  if (typeof a != 'object' || !a) return a;
  var o = a[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(a, i);
    if (typeof u != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (i === 'string' ? String : Number)(a);
}
function Pg(a) {
  return a && a.map((i, o) => It.createElement(i.tag, vu({ key: o }, i.attr), Pg(i.child)));
}
function Fn(a) {
  return (i) => It.createElement(ix, yu({ attr: vu({}, a.attr) }, i), Pg(a.child));
}
function ix(a) {
  var i = (o) => {
    var { attr: u, size: c, title: f } = a,
      p = tx(a, I3),
      h = c || o.size || '1em',
      y;
    return (
      o.className && (y = o.className),
      a.className && (y = (y ? y + ' ' : '') + a.className),
      It.createElement(
        'svg',
        yu({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, o.attr, u, p, {
          className: y,
          style: vu(vu({ color: a.color || o.color }, o.style), a.style),
          height: h,
          width: h,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        f && It.createElement('title', null, f),
        a.children
      )
    );
  };
  return Qm !== void 0 ? It.createElement(Qm.Consumer, null, (o) => i(o)) : i(Wg);
}
function rx(a) {
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
function ox(a) {
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
function Km(a) {
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
function ux(a) {
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
function Ig(a) {
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
function sx(a) {
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
function cx(a) {
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
function fx(a) {
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
function ty(a) {
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
const ey = It.memo(({ imageAdjustments: a, onAdjustmentsChange: i }) =>
    R.jsxs(Ot, {
      children: [
        R.jsxs(Ot, {
          sx: { mb: 2 },
          children: [
            R.jsxs(uu, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(cx, { size: 20, color: 'white' }),
                R.jsx(Un, { variant: 'body2', sx: { color: 'white' }, children: 'Brightness' }),
                R.jsxs(Un, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.brightness, '%'],
                }),
              ],
            }),
            R.jsx(sf, {
              min: 50,
              max: 150,
              value: a.brightness,
              onChange: (o, u) => i((c) => ({ ...c, brightness: typeof u == 'number' ? u : u[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(Ot, {
          sx: { mb: 2 },
          children: [
            R.jsxs(uu, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(ox, { size: 20, color: 'white' }),
                R.jsx(Un, { variant: 'body2', sx: { color: 'white' }, children: 'Contrast' }),
                R.jsxs(Un, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.contrast, '%'],
                }),
              ],
            }),
            R.jsx(sf, {
              min: 50,
              max: 150,
              value: a.contrast,
              onChange: (o, u) => i((c) => ({ ...c, contrast: typeof u == 'number' ? u : u[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(Ot, {
          children: [
            R.jsxs(uu, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(fx, { size: 20, color: 'white' }),
                R.jsx(Un, { variant: 'body2', sx: { color: 'white' }, children: 'Saturation' }),
                R.jsxs(Un, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.saturation, '%'],
                }),
              ],
            }),
            R.jsx(sf, {
              min: 0,
              max: 200,
              value: a.saturation,
              onChange: (o, u) => i((c) => ({ ...c, saturation: typeof u == 'number' ? u : u[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
      ],
    })
  ),
  Jm = ({ handleStart: a, handleMove: i, handleEnd: o }) =>
    R.jsx(Ot, {
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
      children: R.jsx(Ot, { sx: { bgcolor: 'grey.500', borderRadius: 3, height: 2, width: '13%', minWidth: '50px' } }),
    }),
  Of = ({ position: a = 'bottom', onCloseEvent: i = 'adjustmentSwipeClose', minHeight: o = 150, children: u }) => {
    const c = N.useRef(null),
      f = N.useRef(null),
      [p, h] = N.useState(0),
      [y, g] = N.useState(null),
      [b, x] = N.useState(!1),
      [A, _] = N.useState(0),
      M = (q) => {
        (g(q), x(!0), (document.body.style.userSelect = 'none'));
      },
      T = (q) => {
        if (!b || y === null) return;
        const W = a === 'top' ? q - y : y - q,
          F = Math.max(o, p - W);
        _(F);
      },
      H = () => {
        (A <= o + 20 && window.dispatchEvent(new CustomEvent(i)),
          x(!1),
          g(null),
          _(p),
          (document.body.style.userSelect = ''));
      };
    return (
      N.useEffect(() => {
        const q = (F) => {
            T(F.clientY);
          },
          W = () => {
            H();
          };
        return (
          b && (window.addEventListener('mousemove', q), window.addEventListener('mouseup', W)),
          () => {
            (window.removeEventListener('mousemove', q), window.removeEventListener('mouseup', W));
          }
        );
      }, [b, y, A]),
      N.useEffect(() => {
        const q = () => {
          if (f.current) {
            const W = f.current.getBoundingClientRect().height;
            (h(W), _((F) => (b ? F : W)));
          }
        };
        return (window.addEventListener('resize', q), q(), () => window.removeEventListener('resize', q));
      }, [b]),
      N.useEffect(() => {
        if (f.current) {
          const q = f.current.getBoundingClientRect().height;
          (h(q), _(q));
        }
      }, []),
      R.jsxs(Ot, {
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
          a === 'top' && R.jsx(Jm, { handleStart: M, handleMove: T, handleEnd: H }),
          R.jsx(Ot, {
            ref: c,
            sx: { height: `${A}px`, transition: 'height 0.3s ease-in-out', overflow: 'hidden', p: 2 },
            children: R.jsx(Ot, { ref: f, children: u }),
          }),
          a === 'bottom' && R.jsx(Jm, { handleStart: M, handleMove: T, handleEnd: H }),
        ],
      })
    );
  };
function dx(a) {
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
const px = It.memo(({ onRetake: a, onSave: i, showSave: o = !0, toggleFilters: u, toggleControls: c }) =>
    R.jsxs(Ot, {
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
        R.jsxs(Ot, {
          children: [
            R.jsx(bi, { sx: { color: 'white' }, onClick: u, children: R.jsx(dx, { size: 24, color: 'white' }) }),
            R.jsx(bi, { sx: { color: 'white' }, onClick: c, children: R.jsx(ty, { size: 24, color: 'white' }) }),
          ],
        }),
        R.jsxs(Ot, {
          sx: { display: 'flex', gap: 2 },
          children: [
            R.jsx(wr, {
              variant: 'outlined',
              onClick: a,
              sx: { color: 'white', borderColor: 'rgba(255,255,255,0.5)' },
              startIcon: R.jsx(Ig, { width: 20, height: 20, fill: 'white' }),
              children: 'Retake',
            }),
            o &&
              i &&
              R.jsx(wr, {
                variant: 'contained',
                onClick: i,
                sx: { bgcolor: 'primary.main', color: 'white' },
                startIcon: R.jsx(rx, { size: 20 }),
                children: 'Save Photo',
              }),
          ],
        }),
      ],
    })
  ),
  hx = It.memo(
    ({
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
      const [b, x] = N.useState(null),
        A = () => {
          x((M) => (M === 'filters' ? null : 'filters'));
        },
        _ = () => {
          x((M) => (M === 'adjustments' ? null : 'adjustments'));
        };
      return (
        N.useEffect(() => {
          const M = () => {
              b === 'adjustments' && x(null);
            },
            T = () => {
              b === 'filters' && x(null);
            };
          return (
            window.addEventListener('adjustmentSwipeClose', M),
            window.addEventListener('filterSwipeClose', T),
            () => {
              (window.removeEventListener('adjustmentSwipeClose', M),
                window.removeEventListener('filterSwipeClose', T));
            }
          );
        }, [b]),
        R.jsxs(Ot, {
          sx: { position: 'relative' },
          children: [
            !g &&
              R.jsx(Rr, {
                in: b === 'filters',
                timeout: 'auto',
                unmountOnExit: !0,
                sx: { position: 'absolute', bottom: '72px', width: '100%' },
                children: R.jsx(Of, {
                  position: 'top',
                  onCloseEvent: 'filterSwipeClose',
                  children: R.jsx(P3, { allowedFilters: a, capturedImage: i, onSelectFilter: h, selectedFilter: p }),
                }),
              }),
            R.jsx(Rr, {
              in: b === 'adjustments',
              timeout: 'auto',
              unmountOnExit: !0,
              sx: { position: 'absolute', bottom: '72px', width: '100%' },
              children: R.jsx(Of, {
                position: 'top',
                onCloseEvent: 'adjustmentSwipeClose',
                children: R.jsx(ey, { imageAdjustments: o, onAdjustmentsChange: u }),
              }),
            }),
            R.jsx(px, {
              onRetake: c,
              onSave: f,
              showSave: y,
              toggleFilters: A,
              showFilters: b === 'filters',
              showControls: b === 'adjustments',
              toggleControls: _,
            }),
          ],
        })
      );
    }
  ),
  mx = It.memo(({ isFlipped: a, onClose: i, showControls: o, toggleControls: u, toggleFlip: c }) =>
    R.jsx(Ot, {
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
      children: R.jsxs(uu, {
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        children: [
          R.jsxs(Ot, {
            children: [
              R.jsx(bi, { onClick: u, sx: { p: 1, color: 'white' }, children: R.jsx(ty, { size: 24 }) }),
              R.jsx(bi, {
                onClick: c,
                sx: { p: 1, color: 'white' },
                children: R.jsx(ux, {
                  size: 24,
                  style: { transition: 'transform 0.3s', transform: a ? 'scaleX(1)' : 'scaleX(-1)' },
                }),
              }),
            ],
          }),
          R.jsx(Un, {
            variant: 'h6',
            sx: { color: 'white', position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
            children: o ? 'Adjustments' : 'Camera',
          }),
          i &&
            R.jsx(bi, {
              onClick: i,
              sx: { p: 1, color: 'white' },
              children: R.jsx(Ig, { width: 24, height: 24, fill: 'white' }),
            }),
        ],
      }),
    })
  ),
  gx = It.memo(({ message: a }) =>
    R.jsx(Ot, {
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
      children: R.jsx(Un, { children: a }),
    })
  );
function Fm() {
  const a = navigator.userAgent || navigator.vendor;
  return /android/i.test(a)
    ? { isMobile: !0, mobileOS: 'android' }
    : /iPad|iPhone|iPod/.test(a)
      ? { isMobile: !0, mobileOS: 'ios' }
      : navigator.platform === 'MacIntel' && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        ? { isMobile: !0, mobileOS: 'ios' }
        : { isMobile: !1, mobileOS: null };
}
const ny = () => {
    const [a, i] = N.useState(() => Fm());
    return (
      N.useEffect(() => {
        const o = () => i(Fm());
        return (window.addEventListener('resize', o), () => window.removeEventListener('resize', o));
      }, []),
      a
    );
  },
  yx = It.memo(({ onCapture: a, isStreaming: i }) => {
    const { isMobile: o, mobileOS: u } = ny();
    return R.jsx(Ot, {
      sx: {
        border: u === 'ios' ? '4px solid white' : 'none',
        borderRadius: '50%',
        padding: '4px',
        transform: 'translateX(-50%)',
        position: 'absolute',
        bottom: 0,
        left: '50%',
      },
      children: R.jsx(wr, {
        variant: 'contained',
        onClick: a,
        disabled: !i,
        sx: {
          bgcolor: o ? 'white' : 'primary.main',
          borderRadius: '50%',
          height: 80,
          minWidth: 0,
          p: 0,
          width: 80,
          '&:hover': { bgcolor: 'primary.dark' },
        },
        children: !o && R.jsx(sx, { size: 40, fill: 'white' }),
      }),
    });
  }),
  ay = {
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
  vx = new Set([
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
  bx = (a) => (vx.has(a || '') ? a : void 0),
  cf = ({ brightness: a, contrast: i, saturation: o }, u = '') =>
    `brightness(${a}%) contrast(${i}%) saturate(${o}%) ${u}`,
  Sx = It.memo(({ capturedImage: a, selectedFilter: i, isFlipped: o, skipFilters: u = !1, imageAdjustments: c }) => {
    const f = ay[i],
      p = `
    brightness(${c.brightness}%)
    contrast(${c.contrast}%)
    saturate(${c.saturation}%)
  `;
    return R.jsx(Ot, {
      sx: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
      children: R.jsxs(Ot, {
        sx: { position: 'relative', display: 'inline-block', lineHeight: 0 },
        children: [
          R.jsx(Ot, {
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
                mixBlendMode: bx(f.imgBlendMode) || 'normal',
                objectFit: 'cover',
                transform: o ? 'scaleX(-1)' : 'none',
                width: '100%',
              },
            }),
          }),
          !u &&
            (f.filterBlendMode || f.filterFill) &&
            R.jsx(Ot, {
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
  }),
  xx = It.memo(({ switchCamera: a, facingMode: i }) => {
    const { isMobile: o, mobileOS: u } = ny(),
      c = {
        transition: 'transform 0.3s cubic-bezier(0.88, 0.18, 0.61, 1.02)',
        transform: i === 'user' ? 'rotate(180deg)' : 'rotate(0deg)',
      };
    return R.jsx(Ot, {
      children:
        o &&
        R.jsx(bi, {
          onClick: a,
          sx: { color: 'white', bgcolor: 'rgba(0,0,0,0.3)', width: 60, height: 60 },
          children:
            u === 'android' ? R.jsx(Km, { size: 30, style: { ...c } }) : R.jsx(Km, { size: 30, style: { ...c } }),
        }),
    });
  }),
  Cx = async (a) => {
    const i = { video: { facingMode: a, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: !1 };
    return await navigator.mediaDevices.getUserMedia(i);
  },
  Tx = (a) => {
    a &&
      a.getTracks().forEach((i) => {
        (i.stop(), (i.enabled = !1));
      });
  },
  Ex = () => {
    const a = N.useRef(null),
      i = N.useRef(null),
      o = N.useRef(null),
      [u, c] = N.useState(!1),
      f = N.useCallback(async (h) => {
        try {
          const y = await Cx(h);
          ((o.current = y),
            a.current &&
              ((a.current.srcObject = y),
              (a.current.onloadedmetadata = () => {
                (a.current?.play(), c(!0));
              })));
        } catch (y) {
          throw (console.error('Camera init error:', y), y);
        }
      }, []),
      p = N.useCallback(() => {
        o.current && (Tx(o.current), (o.current = null), c(!1));
      }, []);
    return { videoRef: a, canvasRef: i, streamRef: o, isStreaming: u, initCamera: f, stopCamera: p };
  },
  zx = ({ onImageCaptured: a, onClose: i, skipFilters: o = !1, allowedFilters: u = 'all' }) => {
    const { videoRef: c, canvasRef: f, streamRef: p, isStreaming: h, initCamera: y, stopCamera: g } = Ex(),
      b = localStorage.getItem('facingMode'),
      [x, A] = N.useState(b || 'user'),
      [_, M] = N.useState({ brightness: 100, contrast: 100, saturation: 100 }),
      [T, H] = N.useState(null),
      [q, W] = N.useState('none'),
      [F, G] = N.useState(!1),
      [j, X] = N.useState(''),
      [J, st] = N.useState(!0),
      ct = ay[q],
      pt = () => {
        g();
        const Y = x === 'user' ? 'environment' : 'user';
        (localStorage.setItem('facingMode', Y), A(Y));
      },
      ft = () => {
        const Y = c.current,
          K = f.current;
        if (!Y || !K || !p.current) return;
        ((K.width = Y.videoWidth), (K.height = Y.videoHeight));
        const et = K.getContext('2d');
        if (!et) return;
        (et.save(),
          (et.filter = cf(_)),
          J && (et.translate(K.width, 0), et.scale(-1, 1)),
          et.drawImage(Y, 0, 0, K.width, K.height),
          et.restore());
        const mt = K.toDataURL('image/jpeg', 0.95);
        if ((H(mt), g(), M({ brightness: 100, contrast: 100, saturation: 100 }), o)) {
          a && a(mt);
          return;
        }
      },
      v = () => {
        if (o || !T) return;
        const Y = f.current,
          K = Y?.getContext('2d');
        if (!Y || !K) return;
        const { filter: et, filterBlendMode: mt, filterFill: S, imgBlendMode: k, imgBackground: I } = ct,
          tt = new Image();
        ((tt.onload = () => {
          const { width: at, height: ot } = tt;
          ((Y.width = at),
            (Y.height = ot),
            K.clearRect(0, 0, at, ot),
            I && ((K.globalCompositeOperation = 'source-over'), (K.fillStyle = I), K.fillRect(0, 0, at, ot)),
            (K.filter = cf(_, et || '')),
            (K.globalCompositeOperation = k === 'normal' || !k ? 'source-over' : k),
            K.drawImage(tt, 0, 0, at, ot),
            mt &&
              S &&
              ((K.globalCompositeOperation = mt === 'normal' ? 'source-over' : mt),
              (K.filter = 'none'),
              (K.fillStyle = S),
              K.fillRect(0, 0, at, ot)),
            (K.globalCompositeOperation = 'source-over'),
            (K.filter = 'none'));
          const St = Y.toDataURL('image/jpeg', 0.95);
          (a?.(St), Q());
        }),
          (tt.src = T));
      },
      P = () => {
        (Q(), y(x).catch(() => X('Unable to access camera. Please check permissions.')));
      },
      Q = () => {
        (H(null), W('none'), M({ brightness: 100, contrast: 100, saturation: 100 }));
      },
      nt = () => {
        (g(), i?.());
      };
    N.useEffect(() => (y(x).catch(() => X('Unable to access camera. Please check permissions.')), () => g()), [x]);
    const z = {
      filter: cf(_),
      height: '100%',
      left: 0,
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      transform: J ? 'scaleX(-1)' : 'none',
      width: '100%',
    };
    return R.jsxs(Ot, {
      sx: { width: '100%', height: '100%', position: 'relative', bgcolor: 'black', overflow: 'hidden' },
      children: [
        !T || o
          ? R.jsxs(R.Fragment, {
              children: [
                R.jsx('video', { ref: c, autoPlay: !0, playsInline: !0, muted: !0, style: z }),
                R.jsx(mx, {
                  showControls: F,
                  toggleControls: () => G(!F),
                  isFlipped: J,
                  toggleFlip: () => st((Y) => !Y),
                  onClose: i ? nt : void 0,
                }),
                R.jsx(Rr, {
                  in: F,
                  timeout: 'auto',
                  unmountOnExit: !0,
                  style: { position: 'absolute', top: '72px', width: '100%' },
                  children: R.jsx(Of, {
                    onCloseEvent: 'adjustmentSwipeClose',
                    children: R.jsx(ey, { imageAdjustments: _, onAdjustmentsChange: M }),
                  }),
                }),
                j && R.jsx(gx, { message: j }),
                R.jsxs(Ot, {
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
                    R.jsx(Ot, { sx: { width: 80 } }),
                    R.jsx(yx, { onCapture: ft, isStreaming: h }),
                    R.jsx(xx, { switchCamera: pt, facingMode: x }),
                  ],
                }),
              ],
            })
          : R.jsxs(Ot, {
              sx: { display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', width: '100%' },
              children: [
                R.jsx(
                  Sx,
                  { capturedImage: T, imageAdjustments: _, isFlipped: !1, selectedFilter: q, skipFilters: o },
                  `${q}-${_.brightness}-${_.contrast}-${_.saturation}`
                ),
                R.jsx(hx, {
                  allowedFilters: u,
                  capturedImage: T,
                  imageAdjustments: _,
                  onAdjustmentsChange: M,
                  onRetake: P,
                  onSave: o ? void 0 : v,
                  selectedFilter: q,
                  setSelectedFilter: W,
                  showSave: !o,
                  skipFilters: o,
                }),
              ],
            }),
        R.jsx('canvas', { ref: f, style: { display: 'none' } }),
      ],
    });
  };
function Ax() {
  const [a, i] = N.useState(null),
    [o, u] = N.useState(!0),
    [c, f] = N.useState(!1),
    p = (h) => {
      (i(h), u(!1));
    };
  return R.jsxs(Ot, {
    sx: { display: 'flex', flexDirection: 'column', height: '100vh' },
    children: [
      R.jsx(Q5, {
        position: 'static',
        children: R.jsx(Z3, {
          children: R.jsx(Un, { variant: 'h6', component: 'div', children: 'React MUI Camera Demo' }),
        }),
      }),
      R.jsx($m, {
        sx: { flexGrow: 1, py: 2 },
        children: o
          ? R.jsx(Zg, {
              sx: { width: '100%', height: '100%', overflow: 'hidden', position: 'relative' },
              children: R.jsx(zx, { onImageCaptured: p, onClose: () => u(!1), skipFilters: c, allowedFilters: 'all' }),
            })
          : R.jsxs(Ot, {
              sx: { textAlign: 'center' },
              children: [
                a &&
                  R.jsx(Ot, {
                    children: R.jsx(Ot, {
                      component: 'img',
                      src: a,
                      alt: 'Captured',
                      sx: { maxWidth: '100%', maxHeight: '70vh', borderRadius: 2, boxShadow: 3 },
                    }),
                  }),
                R.jsxs(Ot, {
                  sx: { mt: 2, display: 'flex', flexDirection: 'column', gap: 2 },
                  children: [
                    R.jsx(Ot, {
                      children: R.jsxs(Ot, {
                        sx: {
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          cursor: 'pointer',
                        },
                        onClick: () => f(!c),
                        children: [
                          R.jsx(Un, { gutterBottom: !0, children: 'Skip Filters' }),
                          R.jsx(G3, {
                            checked: c,
                            onChange: () => f(!c),
                            inputProps: { 'aria-label': 'Skip Filters Switch' },
                          }),
                        ],
                      }),
                    }),
                    R.jsxs(wr, {
                      variant: 'contained',
                      onClick: () => u(!0),
                      sx: { height: a ? 'auto' : '60px' },
                      children: ['Capture ', a ? 'Another' : 'a', ' Photo'],
                    }),
                    !!a &&
                      R.jsx(wr, { variant: 'outlined', onClick: () => i(null), disabled: !a, children: 'Clear Photo' }),
                  ],
                }),
              ],
            }),
      }),
      R.jsx(Ot, {
        sx: { bgcolor: 'grey.200', py: 2 },
        children: R.jsx($m, {
          children: R.jsxs(Un, {
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
zv.createRoot(document.getElementById('root')).render(R.jsx(N.StrictMode, { children: R.jsx(Ax, {}) }));
export { Ot as B, ay as F, uu as S, Un as T, wr as a, R as j, bx as t };
