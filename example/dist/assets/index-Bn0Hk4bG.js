function cv(a, i) {
  for (var u = 0; u < i.length; u++) {
    const o = i[u];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const c in o)
        if (c !== 'default' && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(o, c);
          f && Object.defineProperty(a, c, f.get ? f : { enumerable: !0, get: () => o[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === 'childList')
        for (const p of f.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && o(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
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
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = u(c);
    fetch(c.href, f);
  }
})();
function Zm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default') ? a.default : a;
}
var Qc = { exports: {} },
  mr = {};
var Gh;
function fv() {
  if (Gh) return mr;
  Gh = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.fragment');
  function u(o, c, f) {
    var p = null;
    if ((f !== void 0 && (p = '' + f), c.key !== void 0 && (p = '' + c.key), 'key' in c)) {
      f = {};
      for (var h in c) h !== 'key' && (f[h] = c[h]);
    } else f = c;
    return ((c = f.ref), { $$typeof: a, type: o, key: p, ref: c !== void 0 ? c : null, props: f });
  }
  return ((mr.Fragment = i), (mr.jsx = u), (mr.jsxs = u), mr);
}
var Vh;
function dv() {
  return (Vh || ((Vh = 1), (Qc.exports = fv())), Qc.exports);
}
var R = dv(),
  Zc = { exports: {} },
  vt = {};
var Xh;
function pv() {
  if (Xh) return vt;
  Xh = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    C = Symbol.for('react.activity'),
    A = Symbol.iterator;
  function j(b) {
    return b === null || typeof b != 'object'
      ? null
      : ((b = (A && b[A]) || b['@@iterator']), typeof b == 'function' ? b : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    L = {};
  function q(b, B, P) {
    ((this.props = b), (this.context = B), (this.refs = L), (this.updater = P || O));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (b, B) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, b, B, 'setState');
    }),
    (q.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
    }));
  function W() {}
  W.prototype = q.prototype;
  function K(b, B, P) {
    ((this.props = b), (this.context = B), (this.refs = L), (this.updater = P || O));
  }
  var Y = (K.prototype = new W());
  ((Y.constructor = K), E(Y, q.prototype), (Y.isPureReactComponent = !0));
  var N = Array.isArray;
  function V() {}
  var Z = { H: null, A: null, T: null, S: null },
    st = Object.prototype.hasOwnProperty;
  function ct(b, B, P) {
    var tt = P.ref;
    return { $$typeof: a, type: b, key: B, ref: tt !== void 0 ? tt : null, props: P };
  }
  function pt(b, B) {
    return ct(b.type, B, b.props);
  }
  function ft(b) {
    return typeof b == 'object' && b !== null && b.$$typeof === a;
  }
  function v(b) {
    var B = { '=': '=0', ':': '=2' };
    return (
      '$' +
      b.replace(/[=:]/g, function (P) {
        return B[P];
      })
    );
  }
  var F = /\/+/g;
  function X(b, B) {
    return typeof b == 'object' && b !== null && b.key != null ? v('' + b.key) : B.toString(36);
  }
  function et(b) {
    switch (b.status) {
      case 'fulfilled':
        return b.value;
      case 'rejected':
        throw b.reason;
      default:
        switch (
          (typeof b.status == 'string'
            ? b.then(V, V)
            : ((b.status = 'pending'),
              b.then(
                function (B) {
                  b.status === 'pending' && ((b.status = 'fulfilled'), (b.value = B));
                },
                function (B) {
                  b.status === 'pending' && ((b.status = 'rejected'), (b.reason = B));
                }
              )),
          b.status)
        ) {
          case 'fulfilled':
            return b.value;
          case 'rejected':
            throw b.reason;
        }
    }
    throw b;
  }
  function z(b, B, P, tt, nt) {
    var ot = typeof b;
    (ot === 'undefined' || ot === 'boolean') && (b = null);
    var bt = !1;
    if (b === null) bt = !0;
    else
      switch (ot) {
        case 'bigint':
        case 'string':
        case 'number':
          bt = !0;
          break;
        case 'object':
          switch (b.$$typeof) {
            case a:
            case i:
              bt = !0;
              break;
            case S:
              return ((bt = b._init), z(bt(b._payload), B, P, tt, nt));
          }
      }
    if (bt)
      return (
        (nt = nt(b)),
        (bt = tt === '' ? '.' + X(b, 0) : tt),
        N(nt)
          ? ((P = ''),
            bt != null && (P = bt.replace(F, '$&/') + '/'),
            z(nt, B, P, '', function (ze) {
              return ze;
            }))
          : nt != null &&
            (ft(nt) &&
              (nt = pt(
                nt,
                P + (nt.key == null || (b && b.key === nt.key) ? '' : ('' + nt.key).replace(F, '$&/') + '/') + bt
              )),
            B.push(nt)),
        1
      );
    bt = 0;
    var Nt = tt === '' ? '.' : tt + ':';
    if (N(b)) for (var Ut = 0; Ut < b.length; Ut++) ((tt = b[Ut]), (ot = Nt + X(tt, Ut)), (bt += z(tt, B, P, ot, nt)));
    else if (((Ut = j(b)), typeof Ut == 'function'))
      for (b = Ut.call(b), Ut = 0; !(tt = b.next()).done; )
        ((tt = tt.value), (ot = Nt + X(tt, Ut++)), (bt += z(tt, B, P, ot, nt)));
    else if (ot === 'object') {
      if (typeof b.then == 'function') return z(et(b), B, P, tt, nt);
      throw (
        (B = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (B === '[object Object]' ? 'object with keys {' + Object.keys(b).join(', ') + '}' : B) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return bt;
  }
  function J(b, B, P) {
    if (b == null) return b;
    var tt = [],
      nt = 0;
    return (
      z(b, tt, '', '', function (ot) {
        return B.call(P, ot, nt++);
      }),
      tt
    );
  }
  function I(b) {
    if (b._status === -1) {
      var B = b._result;
      ((B = B()),
        B.then(
          function (P) {
            (b._status === 0 || b._status === -1) && ((b._status = 1), (b._result = P));
          },
          function (P) {
            (b._status === 0 || b._status === -1) && ((b._status = 2), (b._result = P));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = B)));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var it =
      typeof reportError == 'function'
        ? reportError
        : function (b) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var B = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof b == 'object' && b !== null && typeof b.message == 'string' ? String(b.message) : String(b),
                error: b,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', b);
              return;
            }
            console.error(b);
          },
    yt = {
      map: J,
      forEach: function (b, B, P) {
        J(
          b,
          function () {
            B.apply(this, arguments);
          },
          P
        );
      },
      count: function (b) {
        var B = 0;
        return (
          J(b, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (b) {
        return (
          J(b, function (B) {
            return B;
          }) || []
        );
      },
      only: function (b) {
        if (!ft(b)) throw Error('React.Children.only expected to receive a single React element child.');
        return b;
      },
    };
  return (
    (vt.Activity = C),
    (vt.Children = yt),
    (vt.Component = q),
    (vt.Fragment = u),
    (vt.Profiler = c),
    (vt.PureComponent = K),
    (vt.StrictMode = o),
    (vt.Suspense = y),
    (vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (vt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return Z.H.useMemoCache(b);
      },
    }),
    (vt.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (vt.cacheSignal = function () {
      return null;
    }),
    (vt.cloneElement = function (b, B, P) {
      if (b == null) throw Error('The argument must be a React element, but you passed ' + b + '.');
      var tt = E({}, b.props),
        nt = b.key;
      if (B != null)
        for (ot in (B.key !== void 0 && (nt = '' + B.key), B))
          !st.call(B, ot) ||
            ot === 'key' ||
            ot === '__self' ||
            ot === '__source' ||
            (ot === 'ref' && B.ref === void 0) ||
            (tt[ot] = B[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) tt.children = P;
      else if (1 < ot) {
        for (var bt = Array(ot), Nt = 0; Nt < ot; Nt++) bt[Nt] = arguments[Nt + 2];
        tt.children = bt;
      }
      return ct(b.type, nt, tt);
    }),
    (vt.createContext = function (b) {
      return (
        (b = { $$typeof: p, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: f, _context: b }),
        b
      );
    }),
    (vt.createElement = function (b, B, P) {
      var tt,
        nt = {},
        ot = null;
      if (B != null)
        for (tt in (B.key !== void 0 && (ot = '' + B.key), B))
          st.call(B, tt) && tt !== 'key' && tt !== '__self' && tt !== '__source' && (nt[tt] = B[tt]);
      var bt = arguments.length - 2;
      if (bt === 1) nt.children = P;
      else if (1 < bt) {
        for (var Nt = Array(bt), Ut = 0; Ut < bt; Ut++) Nt[Ut] = arguments[Ut + 2];
        nt.children = Nt;
      }
      if (b && b.defaultProps) for (tt in ((bt = b.defaultProps), bt)) nt[tt] === void 0 && (nt[tt] = bt[tt]);
      return ct(b, ot, nt);
    }),
    (vt.createRef = function () {
      return { current: null };
    }),
    (vt.forwardRef = function (b) {
      return { $$typeof: h, render: b };
    }),
    (vt.isValidElement = ft),
    (vt.lazy = function (b) {
      return { $$typeof: S, _payload: { _status: -1, _result: b }, _init: I };
    }),
    (vt.memo = function (b, B) {
      return { $$typeof: g, type: b, compare: B === void 0 ? null : B };
    }),
    (vt.startTransition = function (b) {
      var B = Z.T,
        P = {};
      Z.T = P;
      try {
        var tt = b(),
          nt = Z.S;
        (nt !== null && nt(P, tt),
          typeof tt == 'object' && tt !== null && typeof tt.then == 'function' && tt.then(V, it));
      } catch (ot) {
        it(ot);
      } finally {
        (B !== null && P.types !== null && (B.types = P.types), (Z.T = B));
      }
    }),
    (vt.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (vt.use = function (b) {
      return Z.H.use(b);
    }),
    (vt.useActionState = function (b, B, P) {
      return Z.H.useActionState(b, B, P);
    }),
    (vt.useCallback = function (b, B) {
      return Z.H.useCallback(b, B);
    }),
    (vt.useContext = function (b) {
      return Z.H.useContext(b);
    }),
    (vt.useDebugValue = function () {}),
    (vt.useDeferredValue = function (b, B) {
      return Z.H.useDeferredValue(b, B);
    }),
    (vt.useEffect = function (b, B) {
      return Z.H.useEffect(b, B);
    }),
    (vt.useEffectEvent = function (b) {
      return Z.H.useEffectEvent(b);
    }),
    (vt.useId = function () {
      return Z.H.useId();
    }),
    (vt.useImperativeHandle = function (b, B, P) {
      return Z.H.useImperativeHandle(b, B, P);
    }),
    (vt.useInsertionEffect = function (b, B) {
      return Z.H.useInsertionEffect(b, B);
    }),
    (vt.useLayoutEffect = function (b, B) {
      return Z.H.useLayoutEffect(b, B);
    }),
    (vt.useMemo = function (b, B) {
      return Z.H.useMemo(b, B);
    }),
    (vt.useOptimistic = function (b, B) {
      return Z.H.useOptimistic(b, B);
    }),
    (vt.useReducer = function (b, B, P) {
      return Z.H.useReducer(b, B, P);
    }),
    (vt.useRef = function (b) {
      return Z.H.useRef(b);
    }),
    (vt.useState = function (b) {
      return Z.H.useState(b);
    }),
    (vt.useSyncExternalStore = function (b, B, P) {
      return Z.H.useSyncExternalStore(b, B, P);
    }),
    (vt.useTransition = function () {
      return Z.H.useTransition();
    }),
    (vt.version = '19.2.0'),
    vt
  );
}
var Qh;
function Ef() {
  return (Qh || ((Qh = 1), (Zc.exports = pv())), Zc.exports);
}
var H = Ef();
const Ue = Zm(H),
  uf = cv({ __proto__: null, default: Ue }, [H]);
var Kc = { exports: {} },
  gr = {},
  Jc = { exports: {} },
  Wc = {};
var Zh;
function hv() {
  return (
    Zh ||
      ((Zh = 1),
      (function (a) {
        function i(z, J) {
          var I = z.length;
          z.push(J);
          t: for (; 0 < I; ) {
            var it = (I - 1) >>> 1,
              yt = z[it];
            if (0 < c(yt, J)) ((z[it] = J), (z[I] = yt), (I = it));
            else break t;
          }
        }
        function u(z) {
          return z.length === 0 ? null : z[0];
        }
        function o(z) {
          if (z.length === 0) return null;
          var J = z[0],
            I = z.pop();
          if (I !== J) {
            z[0] = I;
            t: for (var it = 0, yt = z.length, b = yt >>> 1; it < b; ) {
              var B = 2 * (it + 1) - 1,
                P = z[B],
                tt = B + 1,
                nt = z[tt];
              if (0 > c(P, I))
                tt < yt && 0 > c(nt, P) ? ((z[it] = nt), (z[tt] = I), (it = tt)) : ((z[it] = P), (z[B] = I), (it = B));
              else if (tt < yt && 0 > c(nt, I)) ((z[it] = nt), (z[tt] = I), (it = tt));
              else break t;
            }
          }
          return J;
        }
        function c(z, J) {
          var I = z.sortIndex - J.sortIndex;
          return I !== 0 ? I : z.id - J.id;
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
          S = 1,
          C = null,
          A = 3,
          j = !1,
          O = !1,
          E = !1,
          L = !1,
          q = typeof setTimeout == 'function' ? setTimeout : null,
          W = typeof clearTimeout == 'function' ? clearTimeout : null,
          K = typeof setImmediate < 'u' ? setImmediate : null;
        function Y(z) {
          for (var J = u(g); J !== null; ) {
            if (J.callback === null) o(g);
            else if (J.startTime <= z) (o(g), (J.sortIndex = J.expirationTime), i(y, J));
            else break;
            J = u(g);
          }
        }
        function N(z) {
          if (((E = !1), Y(z), !O))
            if (u(y) !== null) ((O = !0), V || ((V = !0), v()));
            else {
              var J = u(g);
              J !== null && et(N, J.startTime - z);
            }
        }
        var V = !1,
          Z = -1,
          st = 5,
          ct = -1;
        function pt() {
          return L ? !0 : !(a.unstable_now() - ct < st);
        }
        function ft() {
          if (((L = !1), V)) {
            var z = a.unstable_now();
            ct = z;
            var J = !0;
            try {
              t: {
                ((O = !1), E && ((E = !1), W(Z), (Z = -1)), (j = !0));
                var I = A;
                try {
                  e: {
                    for (Y(z), C = u(y); C !== null && !(C.expirationTime > z && pt()); ) {
                      var it = C.callback;
                      if (typeof it == 'function') {
                        ((C.callback = null), (A = C.priorityLevel));
                        var yt = it(C.expirationTime <= z);
                        if (((z = a.unstable_now()), typeof yt == 'function')) {
                          ((C.callback = yt), Y(z), (J = !0));
                          break e;
                        }
                        (C === u(y) && o(y), Y(z));
                      } else o(y);
                      C = u(y);
                    }
                    if (C !== null) J = !0;
                    else {
                      var b = u(g);
                      (b !== null && et(N, b.startTime - z), (J = !1));
                    }
                  }
                  break t;
                } finally {
                  ((C = null), (A = I), (j = !1));
                }
                J = void 0;
              }
            } finally {
              J ? v() : (V = !1);
            }
          }
        }
        var v;
        if (typeof K == 'function')
          v = function () {
            K(ft);
          };
        else if (typeof MessageChannel < 'u') {
          var F = new MessageChannel(),
            X = F.port2;
          ((F.port1.onmessage = ft),
            (v = function () {
              X.postMessage(null);
            }));
        } else
          v = function () {
            q(ft, 0);
          };
        function et(z, J) {
          Z = q(function () {
            z(a.unstable_now());
          }, J);
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
                var J = 3;
                break;
              default:
                J = A;
            }
            var I = A;
            A = J;
            try {
              return z();
            } finally {
              A = I;
            }
          }),
          (a.unstable_requestPaint = function () {
            L = !0;
          }),
          (a.unstable_runWithPriority = function (z, J) {
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
              return J();
            } finally {
              A = I;
            }
          }),
          (a.unstable_scheduleCallback = function (z, J, I) {
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
              (z = { id: S++, callback: J, priorityLevel: z, startTime: I, expirationTime: yt, sortIndex: -1 }),
              I > it
                ? ((z.sortIndex = I),
                  i(g, z),
                  u(y) === null && z === u(g) && (E ? (W(Z), (Z = -1)) : (E = !0), et(N, I - it)))
                : ((z.sortIndex = yt), i(y, z), O || j || ((O = !0), V || ((V = !0), v()))),
              z
            );
          }),
          (a.unstable_shouldYield = pt),
          (a.unstable_wrapCallback = function (z) {
            var J = A;
            return function () {
              var I = A;
              A = J;
              try {
                return z.apply(this, arguments);
              } finally {
                A = I;
              }
            };
          }));
      })(Wc)),
    Wc
  );
}
var Kh;
function mv() {
  return (Kh || ((Kh = 1), (Jc.exports = hv())), Jc.exports);
}
var Fc = { exports: {} },
  Le = {};
var Jh;
function gv() {
  if (Jh) return Le;
  Jh = 1;
  var a = Ef();
  function i(y) {
    var g = 'https://react.dev/errors/' + y;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) g += '&args[]=' + encodeURIComponent(arguments[S]);
    }
    return (
      'Minified React error #' +
      y +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(i(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for('react.portal');
  function f(y, g, S) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: C == null ? null : '' + C, children: y, containerInfo: g, implementation: S };
  }
  var p = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(y, g) {
    if (y === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Le.createPortal = function (y, g) {
      var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(i(299));
      return f(y, g, null, S);
    }),
    (Le.flushSync = function (y) {
      var g = p.T,
        S = o.p;
      try {
        if (((p.T = null), (o.p = 2), y)) return y();
      } finally {
        ((p.T = g), (o.p = S), o.d.f());
      }
    }),
    (Le.preconnect = function (y, g) {
      typeof y == 'string' &&
        (g
          ? ((g = g.crossOrigin), (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        o.d.C(y, g));
    }),
    (Le.prefetchDNS = function (y) {
      typeof y == 'string' && o.d.D(y);
    }),
    (Le.preinit = function (y, g) {
      if (typeof y == 'string' && g && typeof g.as == 'string') {
        var S = g.as,
          C = h(S, g.crossOrigin),
          A = typeof g.integrity == 'string' ? g.integrity : void 0,
          j = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        S === 'style'
          ? o.d.S(y, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: C,
              integrity: A,
              fetchPriority: j,
            })
          : S === 'script' &&
            o.d.X(y, {
              crossOrigin: C,
              integrity: A,
              fetchPriority: j,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    (Le.preinitModule = function (y, g) {
      if (typeof y == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var S = h(g.as, g.crossOrigin);
            o.d.M(y, {
              crossOrigin: S,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(y);
    }),
    (Le.preload = function (y, g) {
      if (typeof y == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var S = g.as,
          C = h(S, g.crossOrigin);
        o.d.L(y, S, {
          crossOrigin: C,
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
    (Le.preloadModule = function (y, g) {
      if (typeof y == 'string')
        if (g) {
          var S = h(g.as, g.crossOrigin);
          o.d.m(y, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: S,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else o.d.m(y);
    }),
    (Le.requestFormReset = function (y) {
      o.d.r(y);
    }),
    (Le.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (Le.useFormState = function (y, g, S) {
      return p.H.useFormState(y, g, S);
    }),
    (Le.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (Le.version = '19.2.0'),
    Le
  );
}
var Wh;
function Km() {
  if (Wh) return Fc.exports;
  Wh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Fc.exports = gv()), Fc.exports);
}
var Fh;
function yv() {
  if (Fh) return gr;
  Fh = 1;
  var a = mv(),
    i = Ef(),
    u = Km();
  function o(t) {
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
    if (f(t) !== t) throw Error(o(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(o(188));
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
        throw Error(o(188));
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
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
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
  var C = Object.assign,
    A = Symbol.for('react.element'),
    j = Symbol.for('react.transitional.element'),
    O = Symbol.for('react.portal'),
    E = Symbol.for('react.fragment'),
    L = Symbol.for('react.strict_mode'),
    q = Symbol.for('react.profiler'),
    W = Symbol.for('react.consumer'),
    K = Symbol.for('react.context'),
    Y = Symbol.for('react.forward_ref'),
    N = Symbol.for('react.suspense'),
    V = Symbol.for('react.suspense_list'),
    Z = Symbol.for('react.memo'),
    st = Symbol.for('react.lazy'),
    ct = Symbol.for('react.activity'),
    pt = Symbol.for('react.memo_cache_sentinel'),
    ft = Symbol.iterator;
  function v(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ft && t[ft]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var F = Symbol.for('react.client.reference');
  function X(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case E:
        return 'Fragment';
      case q:
        return 'Profiler';
      case L:
        return 'StrictMode';
      case N:
        return 'Suspense';
      case V:
        return 'SuspenseList';
      case ct:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case O:
          return 'Portal';
        case K:
          return t.displayName || 'Context';
        case W:
          return (t._context.displayName || 'Context') + '.Consumer';
        case Y:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case Z:
          return ((e = t.displayName || null), e !== null ? e : X(t.type) || 'Memo');
        case st:
          ((e = t._payload), (t = t._init));
          try {
            return X(t(e));
          } catch {}
      }
    return null;
  }
  var et = Array.isArray,
    z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    it = [],
    yt = -1;
  function b(t) {
    return { current: t };
  }
  function B(t) {
    0 > yt || ((t.current = it[yt]), (it[yt] = null), yt--);
  }
  function P(t, e) {
    (yt++, (it[yt] = t.current), (t.current = e));
  }
  var tt = b(null),
    nt = b(null),
    ot = b(null),
    bt = b(null);
  function Nt(t, e) {
    switch ((P(ot, e), P(nt, t), P(tt, null), e.nodeType)) {
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
    (B(tt), P(tt, t));
  }
  function Ut() {
    (B(tt), B(nt), B(ot));
  }
  function ze(t) {
    t.memoizedState !== null && P(bt, t);
    var e = tt.current,
      n = ph(e, t.type);
    e !== n && (P(nt, t), P(tt, n));
  }
  function He(t) {
    (nt.current === t && (B(tt), B(nt)), bt.current === t && (B(bt), (fr._currentValue = I)));
  }
  var Ae, ue;
  function he(t) {
    if (Ae === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Ae = (e && e[1]) || ''),
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
      Ae +
      t +
      ue
    );
  }
  var Tt = !1;
  function se(t, e) {
    if (!t || Tt) return '';
    Tt = !0;
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
        var x = d.split(`
`),
          _ = m.split(`
`);
        for (r = l = 0; l < x.length && !x[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; r < _.length && !_[r].includes('DetermineComponentFrameRoot'); ) r++;
        if (l === x.length || r === _.length)
          for (l = x.length - 1, r = _.length - 1; 1 <= l && 0 <= r && x[l] !== _[r]; ) r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (x[l] !== _[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || x[l] !== _[r])) {
                  var k =
                    `
` + x[l].replace(' at new ', ' at ');
                  return (
                    t.displayName && k.includes('<anonymous>') && (k = k.replace('<anonymous>', t.displayName)),
                    k
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      ((Tt = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : '') ? he(n) : '';
  }
  function jt(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return he(t.type);
      case 16:
        return he('Lazy');
      case 13:
        return t.child !== e && e !== null ? he('Suspense Fallback') : he('Suspense');
      case 19:
        return he('SuspenseList');
      case 0:
      case 15:
        return se(t.type, !1);
      case 11:
        return se(t.type.render, !1);
      case 1:
        return se(t.type, !0);
      case 31:
        return he('Activity');
      default:
        return '';
    }
  }
  function le(t) {
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
  var $e = Object.prototype.hasOwnProperty,
    Ze = a.unstable_scheduleCallback,
    Ln = a.unstable_cancelCallback,
    gt = a.unstable_shouldYield,
    va = a.unstable_requestPaint,
    Me = a.unstable_now,
    lt = a.unstable_getCurrentPriorityLevel,
    at = a.unstable_ImmediatePriority,
    xt = a.unstable_UserBlockingPriority,
    At = a.unstable_NormalPriority,
    Bt = a.unstable_LowPriority,
    Et = a.unstable_IdlePriority,
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
  function kn(t, e) {
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
  function Pg(t, e, n, l, r, s) {
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
      x = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var k = 31 - qe(n),
        Q = 1 << k;
      ((m[k] = 0), (x[k] = -1));
      var D = _[k];
      if (D !== null)
        for (_[k] = null, k = 0; k < D.length; k++) {
          var U = D[k];
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
  function Wf(t, e) {
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
  function Ff() {
    var t = J.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Uh(t.type));
  }
  function Pf(t, e) {
    var n = J.p;
    try {
      return ((J.p = t), e());
    } finally {
      J.p = n;
    }
  }
  var xa = Math.random().toString(36).slice(2),
    we = '__reactFiber$' + xa,
    We = '__reactProps$' + xa,
    Tl = '__reactContainer$' + xa,
    Hu = '__reactEvents$' + xa,
    Ig = '__reactListeners$' + xa,
    t1 = '__reactHandles$' + xa,
    If = '__reactResources$' + xa,
    Ai = '__reactMarker$' + xa;
  function Lu(t) {
    (delete t[we], delete t[We], delete t[Hu], delete t[Ig], delete t[t1]);
  }
  function El(t) {
    var e = t[we];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Tl] || n[we])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = Sh(t); t !== null; ) {
            if ((n = t[we])) return n;
            t = Sh(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function zl(t) {
    if ((t = t[we] || t[Tl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Mi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Al(t) {
    var e = t[If];
    return (e || (e = t[If] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Oe(t) {
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
  var e1 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    nd = {},
    ad = {};
  function n1(t) {
    return $e.call(ad, t) ? !0 : $e.call(nd, t) ? !1 : e1.test(t) ? (ad[t] = !0) : ((nd[t] = !0), !1);
  }
  function Ur(t, e, n) {
    if (n1(e))
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
  function Fn(t, e, n, l) {
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
  function a1(t, e, n) {
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
  function ku(t) {
    if (!t._valueTracker) {
      var e = ld(t) ? 'checked' : 'value';
      t._valueTracker = a1(t, e, '' + t[e]);
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
  function Lr(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var l1 = /[\n"\\]/g;
  function bn(t) {
    return t.replace(l1, function (e) {
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
        ku(t);
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
      ku(t));
  }
  function Yu(t, e, n) {
    (e === 'number' && Lr(t.ownerDocument) === t) || t.defaultValue === '' + n || (t.defaultValue = '' + n);
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
        if (n != null) throw Error(o(92));
        if (et(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (e = n));
    }
    ((n = vn(e)), (t.defaultValue = n), (l = t.textContent), l === n && l !== '' && l !== null && (t.value = l), ku(t));
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
  var i1 = new Set(
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
        : typeof n != 'number' || n === 0 || i1.has(e)
          ? e === 'float'
            ? (t.cssFloat = n)
            : (t[e] = ('' + n).trim())
          : (t[e] = n + 'px');
  }
  function cd(t, e, n) {
    if (e != null && typeof e != 'object') throw Error(o(62));
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
  var r1 = new Map([
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
    o1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kr(t) {
    return o1.test('' + t)
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
    _l = null;
  function fd(t) {
    var e = zl(t);
    if (e && (t = e.stateNode)) {
      var n = t[We] || null;
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
                var r = l[We] || null;
                if (!r) throw Error(o(90));
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
      if (((Xu = !1), (wl !== null || _l !== null) && (Mo(), wl && ((e = wl), (t = _l), (_l = wl = null), fd(e), t))))
        for (e = 0; e < t.length; e++) fd(t[e]);
    }
  }
  function Oi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[We] || null;
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
    if (n && typeof n != 'function') throw Error(o(231, e, typeof n));
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
  function Fe(t) {
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
      C(e.prototype, {
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
    Gr = Fe(Ja),
    wi = C({}, Ja, { view: 0, detail: 0 }),
    u1 = Fe(wi),
    Ku,
    Ju,
    _i,
    Vr = C({}, wi, {
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
      getModifierState: Fu,
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
          : (t !== _i &&
              (_i && t.type === 'mousemove'
                ? ((Ku = t.screenX - _i.screenX), (Ju = t.screenY - _i.screenY))
                : (Ju = Ku = 0),
              (_i = t)),
            Ku);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Ju;
      },
    }),
    md = Fe(Vr),
    s1 = C({}, Vr, { dataTransfer: 0 }),
    c1 = Fe(s1),
    f1 = C({}, wi, { relatedTarget: 0 }),
    Wu = Fe(f1),
    d1 = C({}, Ja, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    p1 = Fe(d1),
    h1 = C({}, Ja, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    m1 = Fe(h1),
    g1 = C({}, Ja, { data: 0 }),
    gd = Fe(g1),
    y1 = {
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
    v1 = {
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
    b1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function S1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = b1[t]) ? !!e[t] : !1;
  }
  function Fu() {
    return S1;
  }
  var x1 = C({}, wi, {
      key: function (t) {
        if (t.key) {
          var e = y1[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = Yr(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? v1[t.keyCode] || 'Unidentified'
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
      getModifierState: Fu,
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
    C1 = Fe(x1),
    T1 = C({}, Vr, {
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
    yd = Fe(T1),
    E1 = C({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fu,
    }),
    z1 = Fe(E1),
    A1 = C({}, Ja, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M1 = Fe(A1),
    O1 = C({}, Vr, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    R1 = Fe(O1),
    w1 = C({}, Ja, { newState: 0, oldState: 0 }),
    _1 = Fe(w1),
    B1 = [9, 13, 27, 32],
    Pu = In && 'CompositionEvent' in window,
    Bi = null;
  In && 'documentMode' in document && (Bi = document.documentMode);
  var D1 = In && 'TextEvent' in window && !Bi,
    vd = In && (!Pu || (Bi && 8 < Bi && 11 >= Bi)),
    bd = ' ',
    Sd = !1;
  function xd(t, e) {
    switch (t) {
      case 'keyup':
        return B1.indexOf(e.keyCode) !== -1;
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
  var Bl = !1;
  function j1(t, e) {
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
  function N1(t, e) {
    if (Bl)
      return t === 'compositionend' || (!Pu && xd(t, e)) ? ((t = pd()), ($r = Zu = Ca = null), (Bl = !1), t) : null;
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
  var U1 = {
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
    return e === 'input' ? !!U1[t.type] : e === 'textarea';
  }
  function Ed(t, e, n, l) {
    (wl ? (_l ? _l.push(l) : (_l = [l])) : (wl = l),
      (e = jo(e, 'onChange')),
      0 < e.length && ((n = new Gr('onChange', 'change', null, n, l)), t.push({ event: n, listeners: e })));
  }
  var Di = null,
    ji = null;
  function H1(t) {
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
      (Ed(e, ji, t, Vu(t)), dd(H1, e));
    }
  }
  function L1(t, e, n) {
    t === 'focusin' ? (Od(), (Di = e), (ji = n), Di.attachEvent('onpropertychange', Rd)) : t === 'focusout' && Od();
  }
  function k1(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Xr(ji);
  }
  function $1(t, e) {
    if (t === 'click') return Xr(e);
  }
  function Y1(t, e) {
    if (t === 'input' || t === 'change') return Xr(e);
  }
  function q1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var sn = typeof Object.is == 'function' ? Object.is : q1;
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
  function _d(t, e) {
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
  function Bd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Bd(t, e.parentNode)
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
    for (var e = Lr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Lr(t.document);
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
  var G1 = In && 'documentMode' in document && 11 >= document.documentMode,
    Dl = null,
    ns = null,
    Ui = null,
    as = !1;
  function jd(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    as ||
      Dl == null ||
      Dl !== Lr(l) ||
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
  function Wa(t, e) {
    var n = {};
    return ((n[t.toLowerCase()] = e.toLowerCase()), (n['Webkit' + t] = 'webkit' + e), (n['Moz' + t] = 'moz' + e), n);
  }
  var jl = {
      animationend: Wa('Animation', 'AnimationEnd'),
      animationiteration: Wa('Animation', 'AnimationIteration'),
      animationstart: Wa('Animation', 'AnimationStart'),
      transitionrun: Wa('Transition', 'TransitionRun'),
      transitionstart: Wa('Transition', 'TransitionStart'),
      transitioncancel: Wa('Transition', 'TransitionCancel'),
      transitionend: Wa('Transition', 'TransitionEnd'),
    },
    ls = {},
    Nd = {};
  In &&
    ((Nd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete jl.animationend.animation, delete jl.animationiteration.animation, delete jl.animationstart.animation),
    'TransitionEvent' in window || delete jl.transitionend.transition);
  function Fa(t) {
    if (ls[t]) return ls[t];
    if (!jl[t]) return t;
    var e = jl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Nd) return (ls[t] = e[n]);
    return t;
  }
  var Ud = Fa('animationend'),
    Hd = Fa('animationiteration'),
    Ld = Fa('animationstart'),
    V1 = Fa('transitionrun'),
    X1 = Fa('transitionstart'),
    Q1 = Fa('transitioncancel'),
    kd = Fa('transitionend'),
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
    if (50 < lr) throw ((lr = 0), (gc = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ul = {};
  function Z1(t, e, n, l) {
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
    return new Z1(t, e, n, l);
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
  function Wr(t, e, n, l, r, s) {
    var d = 0;
    if (((l = t), typeof t == 'function')) us(t) && (d = 1);
    else if (typeof t == 'string')
      d = Py(t, n, tt.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case ct:
          return ((t = cn(31, n, e, r)), (t.elementType = ct), (t.lanes = s), t);
        case E:
          return Ia(n.children, r, s, e);
        case L:
          ((d = 8), (r |= 24));
          break;
        case q:
          return ((t = cn(12, n, e, r | 2)), (t.elementType = q), (t.lanes = s), t);
        case N:
          return ((t = cn(13, n, e, r)), (t.elementType = N), (t.lanes = s), t);
        case V:
          return ((t = cn(19, n, e, r)), (t.elementType = V), (t.lanes = s), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case K:
                d = 10;
                break t;
              case W:
                d = 9;
                break t;
              case Y:
                d = 11;
                break t;
              case Z:
                d = 14;
                break t;
              case st:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (n = Error(o(130, t === null ? 'null' : typeof t, ''))), (l = null));
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
    Ll = 0,
    Fr = null,
    Hi = 0,
    Cn = [],
    Tn = 0,
    Ta = null,
    $n = 1,
    Yn = '';
  function ea(t, e) {
    ((Hl[Ll++] = Hi), (Hl[Ll++] = Fr), (Fr = t), (Hi = e));
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
    for (; t === Fr; ) ((Fr = Hl[--Ll]), (Hl[Ll] = null), (Hi = Hl[--Ll]), (Hl[Ll] = null));
    for (; t === Ta; )
      ((Ta = Cn[--Tn]), (Cn[Tn] = null), (Yn = Cn[--Tn]), (Cn[Tn] = null), ($n = Cn[--Tn]), (Cn[Tn] = null));
  }
  function Qd(t, e) {
    ((Cn[Tn++] = $n), (Cn[Tn++] = Yn), (Cn[Tn++] = Ta), ($n = e.id), (Yn = e.overflow), (Ta = t));
  }
  var _e = null,
    ne = null,
    Dt = !1,
    Ea = null,
    En = !1,
    ps = Error(o(519));
  function za(t) {
    var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
    throw (Li(xn(e, t)), ps);
  }
  function Zd(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[we] = t), (e[We] = l), n)) {
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
  function kl(t) {
    if (t !== _e) return !1;
    if (!Dt) return (Kd(t), (Dt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) && ((n = t.type), (n = !(n !== 'form' && n !== 'button') || _c(t.type, t.memoizedProps))),
        (n = !n)),
      n && ne && za(t),
      Kd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(317));
      ne = bh(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(317));
      ne = bh(t);
    } else
      e === 27
        ? ((e = ne), ka(t.type) ? ((t = Uc), (Uc = null), (ne = t)) : (ne = e))
        : (ne = _e ? An(t.stateNode.nextSibling) : null);
    return !0;
  }
  function tl() {
    ((ne = _e = null), (Dt = !1));
  }
  function hs() {
    var t = Ea;
    return (t !== null && (en === null ? (en = t) : en.push.apply(en, t), (Ea = null)), t);
  }
  function Li(t) {
    Ea === null ? (Ea = [t]) : Ea.push(t);
  }
  var ms = b(null),
    el = null,
    na = null;
  function Aa(t, e, n) {
    (P(ms, e._currentValue), (e._currentValue = n));
  }
  function aa(t) {
    ((t._currentValue = ms.current), B(ms));
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
          for (var x = 0; x < e.length; x++)
            if (m.context === e[x]) {
              ((s.lanes |= n), (m = s.alternate), m !== null && (m.lanes |= n), gs(s.return, n, t), l || (d = null));
              break t;
            }
          s = m.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(o(341));
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
        if (d === null) throw Error(o(387));
        if (((d = d.memoizedProps), d !== null)) {
          var m = r.type;
          sn(r.pendingProps.value, d.value) || (t !== null ? t.push(m) : (t = [m]));
        }
      } else if (r === bt.current) {
        if (((d = r.alternate), d === null)) throw Error(o(387));
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
  function Be(t) {
    return Jd(el, t);
  }
  function Ir(t, e) {
    return (el === null && nl(t), Jd(t, e));
  }
  function Jd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), na === null)) {
      if (t === null) throw Error(o(308));
      ((na = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else na = na.next = e;
    return n;
  }
  var K1 =
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
    J1 = a.unstable_scheduleCallback,
    W1 = a.unstable_NormalPriority,
    be = { $$typeof: K, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function vs() {
    return { controller: new K1(), data: new Map(), refCount: 0 };
  }
  function ki(t) {
    (t.refCount--,
      t.refCount === 0 &&
        J1(W1, function () {
          t.controller.abort();
        }));
  }
  var $i = null,
    bs = 0,
    Yl = 0,
    ql = null;
  function F1(t, e) {
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
    return (bs++, e.then(Wd, Wd), e);
  }
  function Wd() {
    if (--bs === 0 && $i !== null) {
      ql !== null && (ql.status = 'fulfilled');
      var t = $i;
      (($i = null), (Yl = 0), (ql = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function P1(t, e) {
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
  var Fd = z.S;
  z.S = function (t, e) {
    ((j0 = Me()),
      typeof e == 'object' && e !== null && typeof e.then == 'function' && F1(t, e),
      Fd !== null && Fd(t, e));
  };
  var al = b(null);
  function Ss() {
    var t = al.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function to(t, e) {
    e === null ? P(al, al.current) : P(al, e.pool);
  }
  function Pd() {
    var t = Ss();
    return t === null ? null : { parent: be._currentValue, pool: t };
  }
  var Gl = Error(o(460)),
    xs = Error(o(474)),
    eo = Error(o(542)),
    no = { then: function () {} };
  function Id(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function tp(t, e, n) {
    switch (((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(Pn, Pn), (e = n)), e.status)) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), np(t), t);
      default:
        if (typeof e.status == 'string') e.then(Pn, Pn);
        else {
          if (((t = Pt), t !== null && 100 < t.shellSuspendCounter)) throw Error(o(482));
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
            throw ((t = e.reason), np(t), t);
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
  function ep() {
    if (il === null) throw Error(o(459));
    var t = il;
    return ((il = null), t);
  }
  function np(t) {
    if (t === Gl || t === eo) throw Error(o(483));
  }
  var Vl = null,
    Yi = 0;
  function ao(t) {
    var e = Yi;
    return ((Yi += 1), Vl === null && (Vl = []), tp(Vl, t, e));
  }
  function qi(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function lo(t, e) {
    throw e.$$typeof === A
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(o(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)));
  }
  function ap(t) {
    function e(M, T) {
      if (t) {
        var w = M.deletions;
        w === null ? ((M.deletions = [T]), (M.flags |= 16)) : w.push(T);
      }
    }
    function n(M, T) {
      if (!t) return null;
      for (; T !== null; ) (e(M, T), (T = T.sibling));
      return null;
    }
    function l(M) {
      for (var T = new Map(); M !== null; ) (M.key !== null ? T.set(M.key, M) : T.set(M.index, M), (M = M.sibling));
      return T;
    }
    function r(M, T) {
      return ((M = ta(M, T)), (M.index = 0), (M.sibling = null), M);
    }
    function s(M, T, w) {
      return (
        (M.index = w),
        t
          ? ((w = M.alternate),
            w !== null ? ((w = w.index), w < T ? ((M.flags |= 67108866), T) : w) : ((M.flags |= 67108866), T))
          : ((M.flags |= 1048576), T)
      );
    }
    function d(M) {
      return (t && M.alternate === null && (M.flags |= 67108866), M);
    }
    function m(M, T, w, G) {
      return T === null || T.tag !== 6
        ? ((T = ss(w, M.mode, G)), (T.return = M), T)
        : ((T = r(T, w)), (T.return = M), T);
    }
    function x(M, T, w, G) {
      var dt = w.type;
      return dt === E
        ? k(M, T, w.props.children, G, w.key)
        : T !== null &&
            (T.elementType === dt || (typeof dt == 'object' && dt !== null && dt.$$typeof === st && ll(dt) === T.type))
          ? ((T = r(T, w.props)), qi(T, w), (T.return = M), T)
          : ((T = Wr(w.type, w.key, w.props, null, M.mode, G)), qi(T, w), (T.return = M), T);
    }
    function _(M, T, w, G) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== w.containerInfo ||
        T.stateNode.implementation !== w.implementation
        ? ((T = cs(w, M.mode, G)), (T.return = M), T)
        : ((T = r(T, w.children || [])), (T.return = M), T);
    }
    function k(M, T, w, G, dt) {
      return T === null || T.tag !== 7
        ? ((T = Ia(w, M.mode, G, dt)), (T.return = M), T)
        : ((T = r(T, w)), (T.return = M), T);
    }
    function Q(M, T, w) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return ((T = ss('' + T, M.mode, w)), (T.return = M), T);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case j:
            return ((w = Wr(T.type, T.key, T.props, null, M.mode, w)), qi(w, T), (w.return = M), w);
          case O:
            return ((T = cs(T, M.mode, w)), (T.return = M), T);
          case st:
            return ((T = ll(T)), Q(M, T, w));
        }
        if (et(T) || v(T)) return ((T = Ia(T, M.mode, w, null)), (T.return = M), T);
        if (typeof T.then == 'function') return Q(M, ao(T), w);
        if (T.$$typeof === K) return Q(M, Ir(M, T), w);
        lo(M, T);
      }
      return null;
    }
    function D(M, T, w, G) {
      var dt = T !== null ? T.key : null;
      if ((typeof w == 'string' && w !== '') || typeof w == 'number' || typeof w == 'bigint')
        return dt !== null ? null : m(M, T, '' + w, G);
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case j:
            return w.key === dt ? x(M, T, w, G) : null;
          case O:
            return w.key === dt ? _(M, T, w, G) : null;
          case st:
            return ((w = ll(w)), D(M, T, w, G));
        }
        if (et(w) || v(w)) return dt !== null ? null : k(M, T, w, G, null);
        if (typeof w.then == 'function') return D(M, T, ao(w), G);
        if (w.$$typeof === K) return D(M, T, Ir(M, w), G);
        lo(M, w);
      }
      return null;
    }
    function U(M, T, w, G, dt) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return ((M = M.get(w) || null), m(T, M, '' + G, dt));
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case j:
            return ((M = M.get(G.key === null ? w : G.key) || null), x(T, M, G, dt));
          case O:
            return ((M = M.get(G.key === null ? w : G.key) || null), _(T, M, G, dt));
          case st:
            return ((G = ll(G)), U(M, T, w, G, dt));
        }
        if (et(G) || v(G)) return ((M = M.get(w) || null), k(T, M, G, dt, null));
        if (typeof G.then == 'function') return U(M, T, w, ao(G), dt);
        if (G.$$typeof === K) return U(M, T, w, Ir(T, G), dt);
        lo(T, G);
      }
      return null;
    }
    function rt(M, T, w, G) {
      for (var dt = null, Ht = null, ut = T, Ct = (T = 0), wt = null; ut !== null && Ct < w.length; Ct++) {
        ut.index > Ct ? ((wt = ut), (ut = null)) : (wt = ut.sibling);
        var Lt = D(M, ut, w[Ct], G);
        if (Lt === null) {
          ut === null && (ut = wt);
          break;
        }
        (t && ut && Lt.alternate === null && e(M, ut),
          (T = s(Lt, T, Ct)),
          Ht === null ? (dt = Lt) : (Ht.sibling = Lt),
          (Ht = Lt),
          (ut = wt));
      }
      if (Ct === w.length) return (n(M, ut), Dt && ea(M, Ct), dt);
      if (ut === null) {
        for (; Ct < w.length; Ct++)
          ((ut = Q(M, w[Ct], G)),
            ut !== null && ((T = s(ut, T, Ct)), Ht === null ? (dt = ut) : (Ht.sibling = ut), (Ht = ut)));
        return (Dt && ea(M, Ct), dt);
      }
      for (ut = l(ut); Ct < w.length; Ct++)
        ((wt = U(ut, M, Ct, w[Ct], G)),
          wt !== null &&
            (t && wt.alternate !== null && ut.delete(wt.key === null ? Ct : wt.key),
            (T = s(wt, T, Ct)),
            Ht === null ? (dt = wt) : (Ht.sibling = wt),
            (Ht = wt)));
      return (
        t &&
          ut.forEach(function (Va) {
            return e(M, Va);
          }),
        Dt && ea(M, Ct),
        dt
      );
    }
    function ht(M, T, w, G) {
      if (w == null) throw Error(o(151));
      for (
        var dt = null, Ht = null, ut = T, Ct = (T = 0), wt = null, Lt = w.next();
        ut !== null && !Lt.done;
        Ct++, Lt = w.next()
      ) {
        ut.index > Ct ? ((wt = ut), (ut = null)) : (wt = ut.sibling);
        var Va = D(M, ut, Lt.value, G);
        if (Va === null) {
          ut === null && (ut = wt);
          break;
        }
        (t && ut && Va.alternate === null && e(M, ut),
          (T = s(Va, T, Ct)),
          Ht === null ? (dt = Va) : (Ht.sibling = Va),
          (Ht = Va),
          (ut = wt));
      }
      if (Lt.done) return (n(M, ut), Dt && ea(M, Ct), dt);
      if (ut === null) {
        for (; !Lt.done; Ct++, Lt = w.next())
          ((Lt = Q(M, Lt.value, G)),
            Lt !== null && ((T = s(Lt, T, Ct)), Ht === null ? (dt = Lt) : (Ht.sibling = Lt), (Ht = Lt)));
        return (Dt && ea(M, Ct), dt);
      }
      for (ut = l(ut); !Lt.done; Ct++, Lt = w.next())
        ((Lt = U(ut, M, Ct, Lt.value, G)),
          Lt !== null &&
            (t && Lt.alternate !== null && ut.delete(Lt.key === null ? Ct : Lt.key),
            (T = s(Lt, T, Ct)),
            Ht === null ? (dt = Lt) : (Ht.sibling = Lt),
            (Ht = Lt)));
      return (
        t &&
          ut.forEach(function (sv) {
            return e(M, sv);
          }),
        Dt && ea(M, Ct),
        dt
      );
    }
    function Wt(M, T, w, G) {
      if (
        (typeof w == 'object' && w !== null && w.type === E && w.key === null && (w = w.props.children),
        typeof w == 'object' && w !== null)
      ) {
        switch (w.$$typeof) {
          case j:
            t: {
              for (var dt = w.key; T !== null; ) {
                if (T.key === dt) {
                  if (((dt = w.type), dt === E)) {
                    if (T.tag === 7) {
                      (n(M, T.sibling), (G = r(T, w.props.children)), (G.return = M), (M = G));
                      break t;
                    }
                  } else if (
                    T.elementType === dt ||
                    (typeof dt == 'object' && dt !== null && dt.$$typeof === st && ll(dt) === T.type)
                  ) {
                    (n(M, T.sibling), (G = r(T, w.props)), qi(G, w), (G.return = M), (M = G));
                    break t;
                  }
                  n(M, T);
                  break;
                } else e(M, T);
                T = T.sibling;
              }
              w.type === E
                ? ((G = Ia(w.props.children, M.mode, G, w.key)), (G.return = M), (M = G))
                : ((G = Wr(w.type, w.key, w.props, null, M.mode, G)), qi(G, w), (G.return = M), (M = G));
            }
            return d(M);
          case O:
            t: {
              for (dt = w.key; T !== null; ) {
                if (T.key === dt)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === w.containerInfo &&
                    T.stateNode.implementation === w.implementation
                  ) {
                    (n(M, T.sibling), (G = r(T, w.children || [])), (G.return = M), (M = G));
                    break t;
                  } else {
                    n(M, T);
                    break;
                  }
                else e(M, T);
                T = T.sibling;
              }
              ((G = cs(w, M.mode, G)), (G.return = M), (M = G));
            }
            return d(M);
          case st:
            return ((w = ll(w)), Wt(M, T, w, G));
        }
        if (et(w)) return rt(M, T, w, G);
        if (v(w)) {
          if (((dt = v(w)), typeof dt != 'function')) throw Error(o(150));
          return ((w = dt.call(w)), ht(M, T, w, G));
        }
        if (typeof w.then == 'function') return Wt(M, T, ao(w), G);
        if (w.$$typeof === K) return Wt(M, T, Ir(M, w), G);
        lo(M, w);
      }
      return (typeof w == 'string' && w !== '') || typeof w == 'number' || typeof w == 'bigint'
        ? ((w = '' + w),
          T !== null && T.tag === 6
            ? (n(M, T.sibling), (G = r(T, w)), (G.return = M), (M = G))
            : (n(M, T), (G = ss(w, M.mode, G)), (G.return = M), (M = G)),
          d(M))
        : n(M, T);
    }
    return function (M, T, w, G) {
      try {
        Yi = 0;
        var dt = Wt(M, T, w, G);
        return ((Vl = null), dt);
      } catch (ut) {
        if (ut === Gl || ut === eo) throw ut;
        var Ht = cn(29, ut, null, M.mode);
        return ((Ht.lanes = G), (Ht.return = M), Ht);
      } finally {
      }
    };
  }
  var rl = ap(!0),
    lp = ap(!1),
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
      var x = m,
        _ = x.next;
      ((x.next = null), d === null ? (s = _) : (d.next = _), (d = x));
      var k = t.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (m = k.lastBaseUpdate),
        m !== d && (m === null ? (k.firstBaseUpdate = _) : (m.next = _), (k.lastBaseUpdate = x)));
    }
    if (s !== null) {
      var Q = r.baseState;
      ((d = 0), (k = _ = x = null), (m = s));
      do {
        var D = m.lane & -536870913,
          U = D !== m.lane;
        if (U ? (Rt & D) === D : (l & D) === D) {
          (D !== 0 && D === Yl && (zs = !0),
            k !== null && (k = k.next = { lane: 0, tag: m.tag, payload: m.payload, callback: null, next: null }));
          t: {
            var rt = t,
              ht = m;
            D = e;
            var Wt = n;
            switch (ht.tag) {
              case 1:
                if (((rt = ht.payload), typeof rt == 'function')) {
                  Q = rt.call(Wt, Q, D);
                  break t;
                }
                Q = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (((rt = ht.payload), (D = typeof rt == 'function' ? rt.call(Wt, Q, D) : rt), D == null)) break t;
                Q = C({}, Q, D);
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
            k === null ? ((_ = k = U), (x = Q)) : (k = k.next = U),
            (d |= D));
        if (((m = m.next), m === null)) {
          if (((m = r.shared.pending), m === null)) break;
          ((U = m), (m = U.next), (U.next = null), (r.lastBaseUpdate = U), (r.shared.pending = null));
        }
      } while (!0);
      (k === null && (x = Q),
        (r.baseState = x),
        (r.firstBaseUpdate = _),
        (r.lastBaseUpdate = k),
        s === null && (r.shared.lanes = 0),
        (ja |= d),
        (t.lanes = d),
        (t.memoizedState = Q));
    }
  }
  function ip(t, e) {
    if (typeof t != 'function') throw Error(o(191, t));
    t.call(e);
  }
  function rp(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) ip(n[t], e);
  }
  var Xl = b(null),
    io = b(0);
  function op(t, e) {
    ((t = da), P(io, t), P(Xl, e), (da = t | e.baseLanes));
  }
  function As() {
    (P(io, da), P(Xl, Xl.current));
  }
  function Ms() {
    ((da = io.current), B(Xl), B(io));
  }
  var fn = b(null),
    zn = null;
  function wa(t) {
    var e = t.alternate;
    (P(me, me.current & 1),
      P(fn, t),
      zn === null && (e === null || Xl.current !== null || e.memoizedState !== null) && (zn = t));
  }
  function Os(t) {
    (P(me, me.current), P(fn, t), zn === null && (zn = t));
  }
  function up(t) {
    t.tag === 22 ? (P(me, me.current), P(fn, t), zn === null && (zn = t)) : _a();
  }
  function _a() {
    (P(me, me.current), P(fn, fn.current));
  }
  function dn(t) {
    (B(fn), zn === t && (zn = null), B(me));
  }
  var me = b(0);
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
    Se = null,
    oo = !1,
    Ql = !1,
    ol = !1,
    uo = 0,
    Qi = 0,
    Zl = null,
    I1 = 0;
  function ce() {
    throw Error(o(321));
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
      (z.H = t === null || t.memoizedState === null ? Xp : Xs),
      (ol = !1),
      (s = n(l, r)),
      (ol = !1),
      Ql && (s = cp(e, n, l, r)),
      sp(t),
      s
    );
  }
  function sp(t) {
    z.H = Ji;
    var e = Kt !== null && Kt.next !== null;
    if (((la = 0), (Se = Kt = St = null), (oo = !1), (Qi = 0), (Zl = null), e)) throw Error(o(300));
    t === null || xe || ((t = t.dependencies), t !== null && Pr(t) && (xe = !0));
  }
  function cp(t, e, n, l) {
    St = t;
    var r = 0;
    do {
      if ((Ql && (Zl = null), (Qi = 0), (Ql = !1), 25 <= r)) throw Error(o(301));
      if (((r += 1), (Se = Kt = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        ((s.lastEffect = null), (s.events = null), (s.stores = null), s.memoCache != null && (s.memoCache.index = 0));
      }
      ((z.H = Qp), (s = e(n, l)));
    } while (Ql);
    return s;
  }
  function ty() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? Zi(e) : e),
      (t = t.useState()[0]),
      (Kt !== null ? Kt.memoizedState : null) !== t && (St.flags |= 1024),
      e
    );
  }
  function _s() {
    var t = uo !== 0;
    return ((uo = 0), t);
  }
  function Bs(t, e, n) {
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
    ((la = 0), (Se = Kt = St = null), (Ql = !1), (Qi = uo = 0), (Zl = null));
  }
  function Ge() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Se === null ? (St.memoizedState = Se = t) : (Se = Se.next = t), Se);
  }
  function ge() {
    if (Kt === null) {
      var t = St.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Kt.next;
    var e = Se === null ? St.memoizedState : Se.next;
    if (e !== null) ((Se = e), (Kt = t));
    else {
      if (t === null) throw St.alternate === null ? Error(o(467)) : Error(o(310));
      ((Kt = t),
        (t = {
          memoizedState: Kt.memoizedState,
          baseState: Kt.baseState,
          baseQueue: Kt.baseQueue,
          queue: Kt.queue,
          next: null,
        }),
        Se === null ? (St.memoizedState = Se = t) : (Se = Se.next = t));
    }
    return Se;
  }
  function so() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zi(t) {
    var e = Qi;
    return (
      (Qi += 1),
      Zl === null && (Zl = []),
      (t = tp(Zl, t, e)),
      (e = St),
      (Se === null ? e.memoizedState : Se.next) === null &&
        ((e = e.alternate), (z.H = e === null || e.memoizedState === null ? Xp : Xs)),
      t
    );
  }
  function co(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Zi(t);
      if (t.$$typeof === K) return Be(t);
    }
    throw Error(o(438, String(t)));
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
    var e = ge();
    return Ns(e, Kt, t);
  }
  function Ns(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(o(311));
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
        x = null,
        _ = e,
        k = !1;
      do {
        var Q = _.lane & -536870913;
        if (Q !== _.lane ? (Rt & Q) === Q : (la & Q) === Q) {
          var D = _.revertLane;
          if (D === 0)
            (x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              Q === Yl && (k = !0));
          else if ((la & D) === D) {
            ((_ = _.next), D === Yl && (k = !0));
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
              x === null ? ((m = x = Q), (d = s)) : (x = x.next = Q),
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
            x === null ? ((m = x = D), (d = s)) : (x = x.next = D),
            (St.lanes |= Q),
            (ja |= Q));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if ((x === null ? (d = s) : (x.next = m), !sn(s, t.memoizedState) && ((xe = !0), k && ((n = ql), n !== null))))
        throw n;
      ((t.memoizedState = s), (t.baseState = d), (t.baseQueue = x), (l.lastRenderedState = s));
    }
    return (r === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Us(t) {
    var e = ge(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      r = n.pending,
      s = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var d = (r = r.next);
      do ((s = t(s, d.action)), (d = d.next));
      while (d !== r);
      (sn(s, e.memoizedState) || (xe = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, l];
  }
  function fp(t, e, n) {
    var l = St,
      r = ge(),
      s = Dt;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var d = !sn((Kt || r).memoizedState, n);
    if (
      (d && ((r.memoizedState = n), (xe = !0)),
      (r = r.queue),
      ks(hp.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Kl(9, { destroy: void 0 }, pp.bind(null, l, r, n, e), null), Pt === null))
        throw Error(o(349));
      s || (la & 127) !== 0 || dp(l, e, n);
    }
    return n;
  }
  function dp(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = St.updateQueue),
      e === null
        ? ((e = so()), (St.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function pp(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), mp(e) && gp(t));
  }
  function hp(t, e, n) {
    return n(function () {
      mp(e) && gp(t);
    });
  }
  function mp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !sn(t, n);
    } catch {
      return !0;
    }
  }
  function gp(t) {
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
  function yp(t, e, n, l) {
    return ((t.baseState = n), Ns(t, Kt, typeof l == 'function' ? l : ia));
  }
  function ey(t, e, n, l, r) {
    if (mo(t)) throw Error(o(485));
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
        n === null ? ((s.next = e.pending = s), vp(e, s)) : ((s.next = n.next), (e.pending = n.next = s)));
    }
  }
  function vp(t, e) {
    var n = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var s = z.T,
        d = {};
      z.T = d;
      try {
        var m = n(r, l),
          x = z.S;
        (x !== null && x(d, m), bp(t, e, m));
      } catch (_) {
        Ls(t, e, _);
      } finally {
        (s !== null && d.types !== null && (s.types = d.types), (z.T = s));
      }
    } else
      try {
        ((s = n(r, l)), bp(t, e, s));
      } catch (_) {
        Ls(t, e, _);
      }
  }
  function bp(t, e, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Sp(t, e, l);
          },
          function (l) {
            return Ls(t, e, l);
          }
        )
      : Sp(t, e, n);
  }
  function Sp(t, e, n) {
    ((e.status = 'fulfilled'),
      (e.value = n),
      xp(e),
      (t.state = n),
      (e = t.pending),
      e !== null && ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), vp(t, n))));
  }
  function Ls(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = 'rejected'), (e.reason = n), xp(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function xp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Cp(t, e) {
    return e;
  }
  function Tp(t, e) {
    if (Dt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var l = St;
          if (Dt) {
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
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Cp, lastRenderedState: e }),
      (n.queue = l),
      (n = qp.bind(null, St, l)),
      (l.dispatch = n),
      (l = Hs(!1)),
      (s = Vs.bind(null, St, !1, l.queue)),
      (l = Ge()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = ey.bind(null, St, r, s, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function Ep(t) {
    var e = ge();
    return zp(e, Kt, t);
  }
  function zp(t, e, n) {
    if (((e = Ns(t, e, Cp)[0]), (t = fo(ia)[0]), typeof e == 'object' && e !== null && typeof e.then == 'function'))
      try {
        var l = Zi(e);
      } catch (d) {
        throw d === Gl ? eo : d;
      }
    else l = e;
    e = ge();
    var r = e.queue,
      s = r.dispatch;
    return (
      n !== e.memoizedState && ((St.flags |= 2048), Kl(9, { destroy: void 0 }, ny.bind(null, r, n), null)),
      [l, s, t]
    );
  }
  function ny(t, e) {
    t.action = e;
  }
  function Ap(t) {
    var e = ge(),
      n = Kt;
    if (n !== null) return zp(e, n, t);
    (ge(), (e = e.memoizedState), (n = ge()));
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
  function Mp() {
    return ge().memoizedState;
  }
  function po(t, e, n, l) {
    var r = Ge();
    ((St.flags |= t), (r.memoizedState = Kl(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function ho(t, e, n, l) {
    var r = ge();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    Kt !== null && l !== null && Rs(l, Kt.memoizedState.deps)
      ? (r.memoizedState = Kl(e, s, n, l))
      : ((St.flags |= t), (r.memoizedState = Kl(1 | e, s, n, l)));
  }
  function Op(t, e) {
    po(8390656, 8, t, e);
  }
  function ks(t, e) {
    ho(2048, 8, t, e);
  }
  function ay(t) {
    St.flags |= 4;
    var e = St.updateQueue;
    if (e === null) ((e = so()), (St.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Rp(t) {
    var e = ge().memoizedState;
    return (
      ay({ ref: e, nextImpl: t }),
      function () {
        if (($t & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function wp(t, e) {
    return ho(4, 2, t, e);
  }
  function _p(t, e) {
    return ho(4, 4, t, e);
  }
  function Bp(t, e) {
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
  function Dp(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ho(4, 4, Bp.bind(null, e, t), n));
  }
  function $s() {}
  function jp(t, e) {
    var n = ge();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Rs(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function Np(t, e) {
    var n = ge();
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
    return n === void 0 || ((la & 1073741824) !== 0 && (Rt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = U0()), (St.lanes |= t), (ja |= t), n);
  }
  function Up(t, e, n, l) {
    return sn(n, e)
      ? n
      : Xl.current !== null
        ? ((t = Ys(t, n, l)), sn(t, e) || (xe = !0), t)
        : (la & 42) === 0 || ((la & 1073741824) !== 0 && (Rt & 261930) === 0)
          ? ((xe = !0), (t.memoizedState = n))
          : ((t = U0()), (St.lanes |= t), (ja |= t), e);
  }
  function Hp(t, e, n, l, r) {
    var s = J.p;
    J.p = s !== 0 && 8 > s ? s : 8;
    var d = z.T,
      m = {};
    ((z.T = m), Vs(t, !1, e, n));
    try {
      var x = r(),
        _ = z.S;
      if ((_ !== null && _(m, x), x !== null && typeof x == 'object' && typeof x.then == 'function')) {
        var k = P1(x, l);
        Ki(t, e, k, mn(t));
      } else Ki(t, e, l, mn(t));
    } catch (Q) {
      Ki(t, e, { then: function () {}, status: 'rejected', reason: Q }, mn());
    } finally {
      ((J.p = s), d !== null && m.types !== null && (d.types = m.types), (z.T = d));
    }
  }
  function ly() {}
  function qs(t, e, n, l) {
    if (t.tag !== 5) throw Error(o(476));
    var r = Lp(t).queue;
    Hp(
      t,
      r,
      e,
      I,
      n === null
        ? ly
        : function () {
            return (kp(t), n(l));
          }
    );
  }
  function Lp(t) {
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
  function kp(t) {
    var e = Lp(t);
    (e.next === null && (e = t.alternate.memoizedState), Ki(t, e.next.queue, {}, mn()));
  }
  function Gs() {
    return Be(fr);
  }
  function $p() {
    return ge().memoizedState;
  }
  function Yp() {
    return ge().memoizedState;
  }
  function iy(t) {
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
  function ry(t, e, n) {
    var l = mn();
    ((n = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
      mo(t) ? Gp(e, n) : ((n = os(t, e, n, l)), n !== null && (nn(n, t, l), Vp(n, e, l))));
  }
  function qp(t, e, n) {
    var l = mn();
    Ki(t, e, n, l);
  }
  function Ki(t, e, n, l) {
    var r = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mo(t)) Gp(e, r);
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
      if (((n = os(t, e, r, l)), n !== null)) return (nn(n, t, l), Vp(n, e, l), !0);
    }
    return !1;
  }
  function Vs(t, e, n, l) {
    if (
      ((l = { lane: 2, revertLane: Cc(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
      mo(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = os(t, n, l, 2)), e !== null && nn(e, t, 2));
  }
  function mo(t) {
    var e = t.alternate;
    return t === St || (e !== null && e === St);
  }
  function Gp(t, e) {
    Ql = oo = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function Vp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Jf(t, n));
    }
  }
  var Ji = {
    readContext: Be,
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
  var Xp = {
      readContext: Be,
      use: co,
      useCallback: function (t, e) {
        return ((Ge().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Be,
      useEffect: Op,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), po(4194308, 4, Bp.bind(null, e, t), n));
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
          (t = t.dispatch = ry.bind(null, St, t)),
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
          n = qp.bind(null, St, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: $s,
      useDeferredValue: function (t, e) {
        var n = Ge();
        return Ys(n, t, e);
      },
      useTransition: function () {
        var t = Hs(!1);
        return ((t = Hp.bind(null, St, t.queue, !0, !1)), (Ge().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var l = St,
          r = Ge();
        if (Dt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Pt === null)) throw Error(o(349));
          (Rt & 127) !== 0 || dp(l, e, n);
        }
        r.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (r.queue = s),
          Op(hp.bind(null, l, s, t), [t]),
          (l.flags |= 2048),
          Kl(9, { destroy: void 0 }, pp.bind(null, l, s, n, e), null),
          n
        );
      },
      useId: function () {
        var t = Ge(),
          e = Pt.identifierPrefix;
        if (Dt) {
          var n = Yn,
            l = $n;
          ((n = (l & ~(1 << (32 - qe(l) - 1))).toString(32) + n),
            (e = '_' + e + 'R_' + n),
            (n = uo++),
            0 < n && (e += 'H' + n.toString(32)),
            (e += '_'));
        } else ((n = I1++), (e = '_' + e + 'r_' + n.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Gs,
      useFormState: Tp,
      useActionState: Tp,
      useOptimistic: function (t) {
        var e = Ge();
        e.memoizedState = e.baseState = t;
        var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = n), (e = Vs.bind(null, St, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: js,
      useCacheRefresh: function () {
        return (Ge().memoizedState = iy.bind(null, St));
      },
      useEffectEvent: function (t) {
        var e = Ge(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if (($t & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Xs = {
      readContext: Be,
      use: co,
      useCallback: jp,
      useContext: Be,
      useEffect: ks,
      useImperativeHandle: Dp,
      useInsertionEffect: wp,
      useLayoutEffect: _p,
      useMemo: Np,
      useReducer: fo,
      useRef: Mp,
      useState: function () {
        return fo(ia);
      },
      useDebugValue: $s,
      useDeferredValue: function (t, e) {
        var n = ge();
        return Up(n, Kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = fo(ia)[0],
          e = ge().memoizedState;
        return [typeof t == 'boolean' ? t : Zi(t), e];
      },
      useSyncExternalStore: fp,
      useId: $p,
      useHostTransitionStatus: Gs,
      useFormState: Ep,
      useActionState: Ep,
      useOptimistic: function (t, e) {
        var n = ge();
        return yp(n, Kt, t, e);
      },
      useMemoCache: js,
      useCacheRefresh: Yp,
    };
  Xs.useEffectEvent = Rp;
  var Qp = {
    readContext: Be,
    use: co,
    useCallback: jp,
    useContext: Be,
    useEffect: ks,
    useImperativeHandle: Dp,
    useInsertionEffect: wp,
    useLayoutEffect: _p,
    useMemo: Np,
    useReducer: Us,
    useRef: Mp,
    useState: function () {
      return Us(ia);
    },
    useDebugValue: $s,
    useDeferredValue: function (t, e) {
      var n = ge();
      return Kt === null ? Ys(n, t, e) : Up(n, Kt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Us(ia)[0],
        e = ge().memoizedState;
      return [typeof t == 'boolean' ? t : Zi(t), e];
    },
    useSyncExternalStore: fp,
    useId: $p,
    useHostTransitionStatus: Gs,
    useFormState: Ap,
    useActionState: Ap,
    useOptimistic: function (t, e) {
      var n = ge();
      return Kt !== null ? yp(n, Kt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: js,
    useCacheRefresh: Yp,
  };
  Qp.useEffectEvent = Rp;
  function Qs(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : C({}, e, n)),
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
  function Zp(t, e, n, l, r, s, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, s, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ni(n, l) || !Ni(r, s)
          : !0
    );
  }
  function Kp(t, e, n, l) {
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
      n === e && (n = C({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function Jp(t) {
    Qr(t);
  }
  function Wp(t) {
    console.error(t);
  }
  function Fp(t) {
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
  function Pp(t, e, n) {
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
  function Ip(t) {
    return ((t = Oa(t)), (t.tag = 3), t);
  }
  function t0(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = l.value;
      ((t.payload = function () {
        return r(s);
      }),
        (t.callback = function () {
          Pp(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == 'function' &&
      (t.callback = function () {
        (Pp(e, n, l), typeof r != 'function' && (Na === null ? (Na = new Set([this])) : Na.add(this)));
        var m = l.stack;
        this.componentDidCatch(l.value, { componentStack: m !== null ? m : '' });
      });
  }
  function oy(t, e, n, l, r) {
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
        throw Error(o(435, n.tag));
      }
      return (bc(t, l, r), Oo(), !1);
    }
    if (Dt)
      return (
        (e = fn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== ps && ((t = Error(o(422), { cause: l })), Li(xn(t, n))))
          : (l !== ps && ((e = Error(o(423), { cause: l })), Li(xn(e, n))),
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
    var s = Error(o(520), { cause: l });
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
            return ((n.flags |= 65536), (r &= -r), (n.lanes |= r), (r = Ip(r)), t0(r, t, n, l), Es(n, r), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Js = Error(o(461)),
    xe = !1;
  function De(t, e, n, l) {
    e.child = t === null ? lp(e, null, n, l) : rl(e, t.child, n, l);
  }
  function e0(t, e, n, l, r) {
    n = n.render;
    var s = e.ref;
    if ('ref' in l) {
      var d = {};
      for (var m in l) m !== 'ref' && (d[m] = l[m]);
    } else d = l;
    return (
      nl(e),
      (l = ws(t, e, n, d, s, r)),
      (m = _s()),
      t !== null && !xe ? (Bs(t, e, r), ra(t, e, r)) : (Dt && m && fs(e), (e.flags |= 1), De(t, e, l, r), e.child)
    );
  }
  function n0(t, e, n, l, r) {
    if (t === null) {
      var s = n.type;
      return typeof s == 'function' && !us(s) && s.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = s), a0(t, e, s, l, r))
        : ((t = Wr(n.type, null, l, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((s = t.child), !ac(t, r))) {
      var d = s.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Ni), n(d, l) && t.ref === e.ref)) return ra(t, e, r);
    }
    return ((e.flags |= 1), (t = ta(s, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function a0(t, e, n, l, r) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Ni(s, l) && t.ref === e.ref)
        if (((xe = !1), (e.pendingProps = l = s), ac(t, r))) (t.flags & 131072) !== 0 && (xe = !0);
        else return ((e.lanes = t.lanes), ra(t, e, r));
    }
    return Ws(t, e, n, l, r);
  }
  function l0(t, e, n, l) {
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
        return i0(t, e, s, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && to(e, s !== null ? s.cachePool : null),
          s !== null ? op(e, s) : As(),
          up(e));
      else return ((l = e.lanes = 536870912), i0(t, e, s !== null ? s.baseLanes | n : n, n, l));
    } else
      s !== null
        ? (to(e, s.cachePool), op(e, s), _a(), (e.memoizedState = null))
        : (t !== null && to(e, null), As(), _a());
    return (De(t, e, r, n), e.child);
  }
  function Wi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      e.sibling
    );
  }
  function i0(t, e, n, l, r) {
    var s = Ss();
    return (
      (s = s === null ? null : { parent: be._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && to(e, null),
      As(),
      up(e),
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
  function r0(t, e, n) {
    return (rl(e, t.child, null, n), (t = yo(e, e.pendingProps)), (t.flags |= 2), dn(e), (e.memoizedState = null), t);
  }
  function uy(t, e, n) {
    var l = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Dt) {
        if (l.mode === 'hidden') return ((t = yo(e, l)), (e.lanes = 536870912), Wi(null, t));
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
        if (e.flags & 256) ((e.flags &= -257), (e = r0(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(o(558));
      else if ((xe || $l(t, e, n, !1), (r = (n & t.childLanes) !== 0), xe || r)) {
        if (((l = Pt), l !== null && ((d = Wf(l, n)), d !== 0 && d !== s.retryLane)))
          throw ((s.retryLane = d), Pa(t, d), nn(l, t, d), Js);
        (Oo(), (e = r0(t, e, n)));
      } else
        ((t = s.treeContext),
          (ne = An(d.nextSibling)),
          (_e = e),
          (Dt = !0),
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
      if (typeof n != 'function' && typeof n != 'object') throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ws(t, e, n, l, r) {
    return (
      nl(e),
      (n = ws(t, e, n, l, void 0, r)),
      (l = _s()),
      t !== null && !xe ? (Bs(t, e, r), ra(t, e, r)) : (Dt && l && fs(e), (e.flags |= 1), De(t, e, n, r), e.child)
    );
  }
  function o0(t, e, n, l, r, s) {
    return (
      nl(e),
      (e.updateQueue = null),
      (n = cp(e, l, n, r)),
      sp(t),
      (l = _s()),
      t !== null && !xe ? (Bs(t, e, s), ra(t, e, s)) : (Dt && l && fs(e), (e.flags |= 1), De(t, e, n, s), e.child)
    );
  }
  function u0(t, e, n, l, r) {
    if ((nl(e), e.stateNode === null)) {
      var s = Ul,
        d = n.contextType;
      (typeof d == 'object' && d !== null && (s = Be(d)),
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
        (s.context = typeof d == 'object' && d !== null ? Be(d) : Ul),
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
        x = ul(n, m);
      s.props = x;
      var _ = s.context,
        k = n.contextType;
      ((d = Ul), typeof k == 'object' && k !== null && (d = Be(k)));
      var Q = n.getDerivedStateFromProps;
      ((k = typeof Q == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'),
        (m = e.pendingProps !== m),
        k ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((m || _ !== d) && Kp(e, s, l, d)),
        (Ma = !1));
      var D = e.memoizedState;
      ((s.state = D),
        Xi(e, l, s, r),
        Vi(),
        (_ = e.memoizedState),
        m || D !== _ || Ma
          ? (typeof Q == 'function' && (Qs(e, n, Q, l), (_ = e.memoizedState)),
            (x = Ma || Zp(e, n, x, l, D, _, d))
              ? (k ||
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
            (l = x))
          : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308), (l = !1)));
    } else {
      ((s = e.stateNode),
        Ts(t, e),
        (d = e.memoizedProps),
        (k = ul(n, d)),
        (s.props = k),
        (Q = e.pendingProps),
        (D = s.context),
        (_ = n.contextType),
        (x = Ul),
        typeof _ == 'object' && _ !== null && (x = Be(_)),
        (m = n.getDerivedStateFromProps),
        (_ = typeof m == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((d !== Q || D !== x) && Kp(e, s, l, x)),
        (Ma = !1),
        (D = e.memoizedState),
        (s.state = D),
        Xi(e, l, s, r),
        Vi());
      var U = e.memoizedState;
      d !== Q || D !== U || Ma || (t !== null && t.dependencies !== null && Pr(t.dependencies))
        ? (typeof m == 'function' && (Qs(e, n, m, l), (U = e.memoizedState)),
          (k = Ma || Zp(e, n, k, l, D, U, x) || (t !== null && t.dependencies !== null && Pr(t.dependencies)))
            ? (_ ||
                (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
                (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(l, U, x),
                typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(l, U, x)),
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
          (s.context = x),
          (l = k))
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
          t !== null && l ? ((e.child = rl(e, t.child, null, r)), (e.child = rl(e, null, n, r))) : De(t, e, n, r),
          (e.memoizedState = s.state),
          (t = e.child))
        : (t = ra(t, e, r)),
      t
    );
  }
  function s0(t, e, n, l) {
    return (tl(), (e.flags |= 256), De(t, e, n, l), e.child);
  }
  var Fs = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ps(t) {
    return { baseLanes: t, cachePool: Pd() };
  }
  function Is(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= hn), t);
  }
  function c0(t, e, n) {
    var l = e.pendingProps,
      r = !1,
      s = (e.flags & 128) !== 0,
      d;
    if (
      ((d = s) || (d = t !== null && t.memoizedState === null ? !1 : (me.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Dt) {
        if (
          (r ? wa(e) : _a(),
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
          ? (_a(),
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
            (e.memoizedState = Fs),
            Wi(null, l))
          : (wa(e), tc(e, m))
      );
    }
    var x = t.memoizedState;
    if (x !== null && ((m = x.dehydrated), m !== null)) {
      if (s)
        e.flags & 256
          ? (wa(e), (e.flags &= -257), (e = ec(t, e, n)))
          : e.memoizedState !== null
            ? (_a(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (_a(),
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
              (e.memoizedState = Fs),
              (e = Wi(null, l)));
      else if ((wa(e), Nc(m))) {
        if (((d = m.nextSibling && m.nextSibling.dataset), d)) var _ = d.dgst;
        ((d = _),
          (l = Error(o(419))),
          (l.stack = ''),
          (l.digest = d),
          Li({ value: l, source: null, stack: null }),
          (e = ec(t, e, n)));
      } else if ((xe || $l(t, e, n, !1), (d = (n & t.childLanes) !== 0), xe || d)) {
        if (((d = Pt), d !== null && ((l = Wf(d, n)), l !== 0 && l !== x.retryLane)))
          throw ((x.retryLane = l), Pa(t, l), nn(d, t, l), Js);
        (jc(m) || Oo(), (e = ec(t, e, n)));
      } else
        jc(m)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (ne = An(m.nextSibling)),
            (_e = e),
            (Dt = !0),
            (Ea = null),
            (En = !1),
            t !== null && Qd(e, t),
            (e = tc(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (_a(),
        (m = l.fallback),
        (r = e.mode),
        (x = t.child),
        (_ = x.sibling),
        (l = ta(x, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = x.subtreeFlags & 65011712),
        _ !== null ? (m = ta(_, m)) : ((m = Ia(m, r, n, null)), (m.flags |= 2)),
        (m.return = e),
        (l.return = e),
        (l.sibling = m),
        (e.child = l),
        Wi(null, l),
        (l = e.child),
        (m = t.child.memoizedState),
        m === null
          ? (m = Ps(n))
          : ((r = m.cachePool),
            r !== null ? ((x = be._currentValue), (r = r.parent !== x ? { parent: x, pool: x } : r)) : (r = Pd()),
            (m = { baseLanes: m.baseLanes | n, cachePool: r })),
        (l.memoizedState = m),
        (l.childLanes = Is(t, d, n)),
        (e.memoizedState = Fs),
        Wi(t.child, l))
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
  function f0(t, e, n) {
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
  function d0(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      s = l.tail;
    l = l.children;
    var d = me.current,
      m = (d & 2) !== 0;
    if (
      (m ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      P(me, d),
      De(t, e, l, n),
      (l = Dt ? Hi : 0),
      !m && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && f0(t, n, e);
        else if (t.tag === 19) f0(t, n, e);
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
    if (t !== null && e.child !== t.child) throw Error(o(153));
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
  function sy(t, e, n) {
    switch (e.tag) {
      case 3:
        (Nt(e, e.stateNode.containerInfo), Aa(e, be, t.memoizedState.cache), tl());
        break;
      case 27:
      case 5:
        ze(e);
        break;
      case 4:
        Nt(e, e.stateNode.containerInfo);
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
              ? c0(t, e, n)
              : (wa(e), (t = ra(t, e, n)), t !== null ? t.sibling : null);
        wa(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (((l = (n & e.childLanes) !== 0), l || ($l(t, e, n, !1), (l = (n & e.childLanes) !== 0)), r)) {
          if (l) return d0(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          P(me, me.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), l0(t, e, n, e.pendingProps));
      case 24:
        Aa(e, be, t.memoizedState.cache);
    }
    return ra(t, e, n);
  }
  function p0(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) xe = !0;
      else {
        if (!ac(t, n) && (e.flags & 128) === 0) return ((xe = !1), sy(t, e, n));
        xe = (t.flags & 131072) !== 0;
      }
    else ((xe = !1), Dt && (e.flags & 1048576) !== 0 && Xd(e, Hi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = ll(e.elementType)), (e.type = t), typeof t == 'function'))
            us(t)
              ? ((l = ul(t, l)), (e.tag = 1), (e = u0(null, e, t, l, n)))
              : ((e.tag = 0), (e = Ws(null, e, t, l, n)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === Y) {
                ((e.tag = 11), (e = e0(null, e, t, l, n)));
                break t;
              } else if (r === Z) {
                ((e.tag = 14), (e = n0(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = X(t) || t), Error(o(306, e, '')));
          }
        }
        return e;
      case 0:
        return Ws(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (r = ul(l, e.pendingProps)), u0(t, e, l, r, n));
      case 3:
        t: {
          if ((Nt(e, e.stateNode.containerInfo), t === null)) throw Error(o(387));
          l = e.pendingProps;
          var s = e.memoizedState;
          ((r = s.element), Ts(t, e), Xi(e, l, null, n));
          var d = e.memoizedState;
          if (((l = d.cache), Aa(e, be, l), l !== s.cache && ys(e, [be], n, !0), Vi(), (l = d.element), s.isDehydrated))
            if (
              ((s = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = s0(t, e, l, n);
              break t;
            } else if (l !== r) {
              ((r = xn(Error(o(424)), e)), Li(r), (e = s0(t, e, l, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (ne = An(t.firstChild), _e = e, Dt = !0, Ea = null, En = !0, n = lp(e, null, l, n), e.child = n; n; )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((tl(), l === r)) {
              e = ra(t, e, n);
              break t;
            }
            De(t, e, l, n);
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
              : Dt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = No(ot.current).createElement(n)),
                (l[we] = e),
                (l[We] = t),
                je(l, n, t),
                Oe(l),
                (e.stateNode = l))
            : (e.memoizedState = Eh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          ze(e),
          t === null &&
            Dt &&
            ((l = e.stateNode = xh(e.type, e.pendingProps, ot.current)),
            (_e = e),
            (En = !0),
            (r = ne),
            ka(e.type) ? ((Uc = r), (ne = An(l.firstChild))) : (ne = r)),
          De(t, e, e.pendingProps.children, n),
          vo(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Dt &&
            ((r = l = ne) &&
              ((l = ky(l, e.type, e.pendingProps, En)),
              l !== null ? ((e.stateNode = l), (_e = e), (ne = An(l.firstChild)), (En = !1), (r = !0)) : (r = !1)),
            r || za(e)),
          ze(e),
          (r = e.type),
          (s = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = s.children),
          _c(r, s) ? (l = null) : d !== null && _c(r, d) && (e.flags |= 32),
          e.memoizedState !== null && ((r = ws(t, e, ty, null, null, n)), (fr._currentValue = r)),
          vo(t, e),
          De(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Dt &&
            ((t = n = ne) &&
              ((n = $y(n, e.pendingProps, En)),
              n !== null ? ((e.stateNode = n), (_e = e), (ne = null), (t = !0)) : (t = !1)),
            t || za(e)),
          null
        );
      case 13:
        return c0(t, e, n);
      case 4:
        return (
          Nt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = rl(e, null, l, n)) : De(t, e, l, n),
          e.child
        );
      case 11:
        return e0(t, e, e.type, e.pendingProps, n);
      case 7:
        return (De(t, e, e.pendingProps, n), e.child);
      case 8:
        return (De(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (De(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((l = e.pendingProps), Aa(e, e.type, l.value), De(t, e, l.children, n), e.child);
      case 9:
        return (
          (r = e.type._context),
          (l = e.pendingProps.children),
          nl(e),
          (r = Be(r)),
          (l = l(r)),
          (e.flags |= 1),
          De(t, e, l, n),
          e.child
        );
      case 14:
        return n0(t, e, e.type, e.pendingProps, n);
      case 15:
        return a0(t, e, e.type, e.pendingProps, n);
      case 19:
        return d0(t, e, n);
      case 31:
        return uy(t, e, n);
      case 22:
        return l0(t, e, n, e.pendingProps);
      case 24:
        return (
          nl(e),
          (l = Be(be)),
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
              Aa(e, be, r))
            : ((t.lanes & n) !== 0 && (Ts(t, e), Xi(e, null, null, n), Vi()),
              (r = t.memoizedState),
              (s = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
                  Aa(e, be, l))
                : ((l = s.cache), Aa(e, be, l), l !== r.cache && ys(e, [be], n, !0))),
          De(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function oa(t) {
    t.flags |= 4;
  }
  function lc(t, e, n, l, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if ($0()) t.flags |= 8192;
        else throw ((il = no), xs);
    } else t.flags &= -16777217;
  }
  function h0(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Rh(e)))
      if ($0()) t.flags |= 8192;
      else throw ((il = no), xs);
  }
  function So(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Zf() : 536870912), (t.lanes |= e), (Pl |= e)));
  }
  function Fi(t, e) {
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
  function cy(t, e, n) {
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
          aa(be),
          Ut(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (kl(e)
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
            ? (oa(e), s !== null ? (ae(e), h0(e, s)) : (ae(e), lc(e, r, null, l, n)))
            : s
              ? s !== t.memoizedState
                ? (oa(e), ae(e), h0(e, s))
                : (ae(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && oa(e), ae(e), lc(e, r, t, l, n)),
          null
        );
      case 27:
        if ((He(e), (n = ot.current), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && oa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return (ae(e), null);
          }
          ((t = tt.current), kl(e) ? Zd(e) : ((t = xh(r, l, n)), (e.stateNode = t), oa(e)));
        }
        return (ae(e), null);
      case 5:
        if ((He(e), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && oa(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return (ae(e), null);
          }
          if (((s = tt.current), kl(e))) Zd(e);
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
            ((s[we] = e), (s[We] = l));
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
            t: switch ((je(s, r, l), r)) {
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
          if (typeof l != 'string' && e.stateNode === null) throw Error(o(166));
          if (((t = ot.current), kl(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (l = null), (r = _e), r !== null))
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((t[we] = e),
              (t = !!(t.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || ch(t.nodeValue, n))),
              t || za(e, !0));
          } else ((t = No(t).createTextNode(l)), (t[we] = e), (e.stateNode = t));
        }
        return (ae(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = kl(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(o(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(557));
              t[we] = e;
            } else (tl(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ae(e), (t = !1));
          } else
            ((n = hs()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), (t = !0));
          if (!t) return e.flags & 256 ? (dn(e), e) : (dn(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return (ae(e), null);
      case 13:
        if (((l = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((r = kl(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(o(318));
              if (((r = e.memoizedState), (r = r !== null ? r.dehydrated : null), !r)) throw Error(o(317));
              r[we] = e;
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
        return (Ut(), t === null && Ac(e.stateNode.containerInfo), ae(e), null);
      case 10:
        return (aa(e.type), ae(e), null);
      case 19:
        if ((B(me), (l = e.memoizedState), l === null)) return (ae(e), null);
        if (((r = (e.flags & 128) !== 0), (s = l.rendering), s === null))
          if (r) Fi(l, !1);
          else {
            if (fe !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((s = ro(t)), s !== null)) {
                  for (
                    e.flags |= 128,
                      Fi(l, !1),
                      t = s.updateQueue,
                      e.updateQueue = t,
                      So(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    (qd(n, t), (n = n.sibling));
                  return (P(me, (me.current & 1) | 2), Dt && ea(e, l.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null && Me() > zo && ((e.flags |= 128), (r = !0), Fi(l, !1), (e.lanes = 4194304));
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
                Fi(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !s.alternate && !Dt)
              )
                return (ae(e), null);
            } else
              2 * Me() - l.renderingStartTime > zo &&
                n !== 536870912 &&
                ((e.flags |= 128), (r = !0), Fi(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((t = l.last), t !== null ? (t.sibling = s) : (e.child = s), (l.last = s));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Me()),
            (t.sibling = null),
            (n = me.current),
            P(me, r ? (n & 1) | 2 : n & 1),
            Dt && ea(e, l.treeForkCount),
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
          t !== null && B(al),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          aa(be),
          ae(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function fy(t, e) {
    switch ((ds(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          aa(be),
          Ut(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (He(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((dn(e), e.alternate === null)) throw Error(o(340));
          tl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((dn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(o(340));
          tl();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (B(me), null);
      case 4:
        return (Ut(), null);
      case 10:
        return (aa(e.type), null);
      case 22:
      case 23:
        return (
          dn(e),
          Ms(),
          t !== null && B(al),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (aa(be), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function m0(t, e) {
    switch ((ds(e), e.tag)) {
      case 3:
        (aa(be), Ut());
        break;
      case 26:
      case 27:
      case 5:
        He(e);
        break;
      case 4:
        Ut();
        break;
      case 31:
        e.memoizedState !== null && dn(e);
        break;
      case 13:
        dn(e);
        break;
      case 19:
        B(me);
        break;
      case 10:
        aa(e.type);
        break;
      case 22:
      case 23:
        (dn(e), Ms(), t !== null && B(al));
        break;
      case 24:
        aa(be);
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
  function Ba(t, e, n) {
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
              var x = n,
                _ = m;
              try {
                _();
              } catch (k) {
                Xt(r, x, k);
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (k) {
      Xt(e, e.return, k);
    }
  }
  function g0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        rp(e, n);
      } catch (l) {
        Xt(t, t.return, l);
      }
    }
  }
  function y0(t, e, n) {
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
  function v0(t) {
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
      (Dy(l, t.type, n, e), (l[We] = e));
    } catch (r) {
      Xt(t, t.return, r);
    }
  }
  function b0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && ka(t.type)) || t.tag === 4;
  }
  function rc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || b0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if ((t.tag === 27 && ka(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
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
    else if (l !== 4 && (l === 27 && ka(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null))
      for (oc(t, e, n), t = t.sibling; t !== null; ) (oc(t, e, n), (t = t.sibling));
  }
  function xo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (l !== 4 && (l === 27 && ka(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (xo(t, e, n), t = t.sibling; t !== null; ) (xo(t, e, n), (t = t.sibling));
  }
  function S0(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
      (je(e, l, n), (e[we] = t), (e[We] = n));
    } catch (s) {
      Xt(t, t.return, s);
    }
  }
  var ua = !1,
    Ce = !1,
    uc = !1,
    x0 = typeof WeakSet == 'function' ? WeakSet : Set,
    Re = null;
  function dy(t, e) {
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
              x = -1,
              _ = 0,
              k = 0,
              Q = t,
              D = null;
            e: for (;;) {
              for (
                var U;
                Q !== n || (r !== 0 && Q.nodeType !== 3) || (m = d + r),
                  Q !== s || (l !== 0 && Q.nodeType !== 3) || (x = d + l),
                  Q.nodeType === 3 && (d += Q.nodeValue.length),
                  (U = Q.firstChild) !== null;

              )
                ((D = Q), (Q = U));
              for (;;) {
                if (Q === t) break e;
                if ((D === n && ++_ === r && (m = d), D === s && ++k === l && (x = d), (U = Q.nextSibling) !== null))
                  break;
                ((Q = D), (D = Q.parentNode));
              }
              Q = U;
            }
            n = m === -1 || x === -1 ? null : { start: m, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wc = { focusedElem: t, selectionRange: n }, qo = !1, Re = e; Re !== null; )
      if (((e = Re), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) ((t.return = e), (Re = t));
      else
        for (; Re !== null; ) {
          switch (((e = Re), (s = e.alternate), (t = e.flags), e.tag)) {
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
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Re = t));
            break;
          }
          Re = e.return;
        }
  }
  function C0(t, e, n) {
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
        (l & 64 && g0(n), l & 512 && Ii(n, n.return));
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
            rp(t, e);
          } catch (d) {
            Xt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && S0(n);
      case 26:
      case 5:
        (ca(t, n), e === null && l & 4 && v0(n), l & 512 && Ii(n, n.return));
        break;
      case 12:
        ca(t, n);
        break;
      case 31:
        (ca(t, n), l & 4 && z0(t, n));
        break;
      case 13:
        (ca(t, n),
          l & 4 && A0(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = xy.bind(null, n)), Yy(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || ua), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Ce), (r = ua));
          var s = Ce;
          ((ua = l), (Ce = e) && !s ? fa(t, n, (n.subtreeFlags & 8772) !== 0) : ca(t, n), (ua = r), (Ce = s));
        }
        break;
      case 30:
        break;
      default:
        ca(t, n);
    }
  }
  function T0(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), T0(e)),
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
  var re = null,
    Pe = !1;
  function sa(t, e, n) {
    for (n = n.child; n !== null; ) (E0(t, e, n), (n = n.sibling));
  }
  function E0(t, e, n) {
    if (ie && typeof ie.onCommitFiberUnmount == 'function')
      try {
        ie.onCommitFiberUnmount(It, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ce || qn(n, e),
          sa(t, e, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ce || qn(n, e);
        var l = re,
          r = Pe;
        (ka(n.type) && ((re = n.stateNode), (Pe = !1)), sa(t, e, n), ur(n.stateNode), (re = l), (Pe = r));
        break;
      case 5:
        Ce || qn(n, e);
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
        (Ba(2, n, e), Ce || Ba(4, n, e), sa(t, e, n));
        break;
      case 1:
        (Ce || (qn(n, e), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && y0(n, e, l)), sa(t, e, n));
        break;
      case 21:
        sa(t, e, n);
        break;
      case 22:
        ((Ce = (l = Ce) || n.memoizedState !== null), sa(t, e, n), (Ce = l));
        break;
      default:
        sa(t, e, n);
    }
  }
  function z0(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
      t = t.dehydrated;
      try {
        ri(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
    }
  }
  function A0(t, e) {
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
  function py(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new x0()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new x0()), e);
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Co(t, e) {
    var n = py(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var r = Cy.bind(null, t, l);
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
              if (ka(m.type)) {
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
        if (re === null) throw Error(o(160));
        (E0(s, d, r), (re = null), (Pe = !1), (s = r.alternate), s !== null && (s.return = null), (r.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (M0(e, t), (e = e.sibling));
  }
  var jn = null;
  function M0(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ie(e, t), tn(t), l & 4 && (Ba(3, t, t.return), Pi(3, t), Ba(5, t, t.return)));
        break;
      case 1:
        (Ie(e, t),
          tn(t),
          l & 512 && (Ce || n === null || qn(n, n.return)),
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
        if ((Ie(e, t), tn(t), l & 512 && (Ce || n === null || qn(n, n.return)), l & 4)) {
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
                          s[we] ||
                          s.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          s.hasAttribute('itemprop')) &&
                          ((s = r.createElement(l)), r.head.insertBefore(s, r.querySelector('head > title'))),
                        je(s, l, n),
                        (s[we] = t),
                        Oe(s),
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
                      ((s = r.createElement(l)), je(s, l, n), r.head.appendChild(s));
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
                      ((s = r.createElement(l)), je(s, l, n), r.head.appendChild(s));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((s[we] = t), Oe(s), (l = s));
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
          l & 512 && (Ce || n === null || qn(n, n.return)),
          n !== null && l & 4 && ic(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ie(e, t), tn(t), l & 512 && (Ce || n === null || qn(n, n.return)), t.flags & 32)) {
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
          if (t.stateNode === null) throw Error(o(162));
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
          ((Lo = null),
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
        uc && ((uc = !1), O0(t));
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
          t.child.flags & 8192 && (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Eo = Me()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), Co(t, l))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var x = n !== null && n.memoizedState !== null,
          _ = ua,
          k = Ce;
        if (((ua = _ || r), (Ce = k || x), Ie(e, t), (Ce = k), (ua = _), tn(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || x || ua || Ce || sl(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                x = n = e;
                try {
                  if (((s = x.stateNode), r))
                    ((d = s.style),
                      typeof d.setProperty == 'function'
                        ? d.setProperty('display', 'none', 'important')
                        : (d.display = 'none'));
                  else {
                    m = x.stateNode;
                    var Q = x.memoizedProps.style,
                      D = Q != null && Q.hasOwnProperty('display') ? Q.display : null;
                    m.style.display = D == null || typeof D == 'boolean' ? '' : ('' + D).trim();
                  }
                } catch (rt) {
                  Xt(x, x.return, rt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = r ? '' : x.memoizedProps;
                } catch (rt) {
                  Xt(x, x.return, rt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                x = e;
                try {
                  var U = x.stateNode;
                  r ? yh(U, !0) : yh(x.stateNode, !1);
                } catch (rt) {
                  Xt(x, x.return, rt);
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
          if (b0(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
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
            var x = n.stateNode.containerInfo,
              _ = rc(t);
            oc(t, _, x);
            break;
          default:
            throw Error(o(161));
        }
      } catch (k) {
        Xt(t, t.return, k);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function O0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (O0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function ca(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) (C0(t, e.alternate, e), (e = e.sibling));
  }
  function sl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ba(4, e, e.return), sl(e));
          break;
        case 1:
          qn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == 'function' && y0(e, e.return, n), sl(e));
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
              var x = r.shared.hiddenCallbacks;
              if (x !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < x.length; r++) ip(x[r], m);
            } catch (_) {
              Xt(l, l.return, _);
            }
          }
          (n && d & 64 && g0(s), Ii(s, s.return));
          break;
        case 27:
          S0(s);
        case 26:
        case 5:
          (fa(r, s, n), n && l === null && d & 4 && v0(s), Ii(s, s.return));
          break;
        case 12:
          fa(r, s, n);
          break;
        case 31:
          (fa(r, s, n), n && d & 4 && z0(r, s));
          break;
        case 13:
          (fa(r, s, n), n && d & 4 && A0(r, s));
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
      t !== n && (t != null && t.refCount++, n != null && ki(n)));
  }
  function cc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ki(t)));
  }
  function Nn(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (R0(t, e, n, l), (e = e.sibling));
  }
  function R0(t, e, n, l) {
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
            e !== t && (e.refCount++, t != null && ki(t))));
        break;
      case 12:
        if (r & 2048) {
          (Nn(t, e, n, l), (t = e.stateNode));
          try {
            var s = e.memoizedProps,
              d = s.id,
              m = s.onPostCommit;
            typeof m == 'function' && m(d, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (x) {
            Xt(e, e.return, x);
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
        x = l,
        _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Jl(s, d, m, x, r), Pi(8, d));
          break;
        case 23:
          break;
        case 22:
          var k = d.stateNode;
          (d.memoizedState !== null
            ? k._visibility & 2
              ? Jl(s, d, m, x, r)
              : tr(s, d)
            : ((k._visibility |= 2), Jl(s, d, m, x, r)),
            r && _ & 2048 && sc(d.alternate, d));
          break;
        case 24:
          (Jl(s, d, m, x, r), r && _ & 2048 && cc(d.alternate, d));
          break;
        default:
          Jl(s, d, m, x, r);
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
  function Wl(t, e, n) {
    if (t.subtreeFlags & er) for (t = t.child; t !== null; ) (w0(t, e, n), (t = t.sibling));
  }
  function w0(t, e, n) {
    switch (t.tag) {
      case 26:
        (Wl(t, e, n), t.flags & er && t.memoizedState !== null && Iy(n, jn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Wl(t, e, n);
        break;
      case 3:
      case 4:
        var l = jn;
        ((jn = Uo(t.stateNode.containerInfo)), Wl(t, e, n), (jn = l));
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
  function _0(t) {
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
          ((Re = l), D0(l, t));
        }
      _0(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (B0(t), (t = t.sibling));
  }
  function B0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (nr(t), t.flags & 2048 && Ba(9, t, t.return));
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
          ((Re = l), D0(l, t));
        }
      _0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ba(8, e, e.return), To(e));
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
  function D0(t, e) {
    for (; Re !== null; ) {
      var n = Re;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ba(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ki(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Re = l));
      else
        t: for (n = t; Re !== null; ) {
          l = Re;
          var r = l.sibling,
            s = l.return;
          if ((T0(l), l === n)) {
            Re = null;
            break t;
          }
          if (r !== null) {
            ((r.return = s), (Re = r));
            break t;
          }
          Re = s;
        }
    }
  }
  var hy = {
      getCacheForType: function (t) {
        var e = Be(be),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return Be(be).controller.signal;
      },
    },
    my = typeof WeakMap == 'function' ? WeakMap : Map,
    $t = 0,
    Pt = null,
    Mt = null,
    Rt = 0,
    Vt = 0,
    pn = null,
    Da = !1,
    Fl = !1,
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
    j0 = 0,
    zo = 1 / 0,
    Ao = null,
    Na = null,
    Ee = 0,
    Ua = null,
    Il = null,
    pa = 0,
    hc = 0,
    mc = null,
    N0 = null,
    lr = 0,
    gc = null;
  function mn() {
    return ($t & 2) !== 0 && Rt !== 0 ? Rt & -Rt : z.T !== null ? Cc() : Ff();
  }
  function U0() {
    if (hn === 0)
      if ((Rt & 536870912) === 0 || Dt) {
        var t = Cl;
        ((Cl <<= 1), (Cl & 3932160) === 0 && (Cl = 262144), (hn = t));
      } else hn = 536870912;
    return ((t = fn.current), t !== null && (t.flags |= 32), hn);
  }
  function nn(t, e, n) {
    (((t === Pt && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null) && (ti(t, 0), Ha(t, Rt, hn, !1)),
      zi(t, n),
      (($t & 2) === 0 || t !== Pt) &&
        (t === Pt && (($t & 2) === 0 && (cl |= n), fe === 4 && Ha(t, Rt, hn, !1)), Gn(t)));
  }
  function H0(t, e, n) {
    if (($t & 6) !== 0) throw Error(o(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || kn(t, e),
      r = l ? vy(t, e) : vc(t, e, !0),
      s = l;
    do {
      if (r === 0) {
        Fl && !l && Ha(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), s && !gy(n))) {
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
              var x = m.current.memoizedState.isDehydrated;
              if ((x && (ti(m, d).flags |= 256), (d = vc(m, d, !1)), d !== 2)) {
                if (fc && !x) {
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
              throw Error(o(345));
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
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((r = Eo + 300 - Me()), 10 < r)) {
            if ((Ha(l, e, hn, !Da), Sa(l, 0, !0) !== 0)) break t;
            ((pa = e),
              (l.timeoutHandle = hh(L0.bind(null, l, n, en, Ao, pc, e, hn, cl, Pl, Da, s, 'Throttled', -0, 0), r)));
            break t;
          }
          L0(l, n, en, Ao, pc, e, hn, cl, Pl, Da, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Gn(t);
  }
  function L0(t, e, n, l, r, s, d, m, x, _, k, Q, D, U) {
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
        w0(e, s, Q));
      var rt = (s & 62914560) === s ? Eo - Me() : (s & 4194048) === s ? j0 - Me() : 0;
      if (((rt = tv(Q, rt)), rt !== null)) {
        ((pa = s),
          (t.cancelPendingCommit = rt(Q0.bind(null, t, e, s, n, l, r, d, m, x, k, Q, null, D, U))),
          Ha(t, s, d, !_));
        return;
      }
    }
    Q0(t, e, s, n, l, r, d, m, x);
  }
  function gy(t) {
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
      for (; t !== null; ) (m0(t.alternate, t), (t = t.return));
      Mt = null;
    }
  }
  function ti(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Uy(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (pa = 0),
      yc(),
      (Pt = t),
      (Mt = n = ta(t.current, null)),
      (Rt = e),
      (Vt = 0),
      (pn = null),
      (Da = !1),
      (Fl = kn(t, e)),
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
  function k0(t, e) {
    ((St = null),
      (z.H = Ji),
      e === Gl || e === eo
        ? ((e = ep()), (Vt = 3))
        : e === xs
          ? ((e = ep()), (Vt = 4))
          : (Vt = e === Js ? 8 : e !== null && typeof e == 'object' && typeof e.then == 'function' ? 6 : 1),
      (pn = e),
      Mt === null && ((fe = 1), go(t, xn(e, t.current))));
  }
  function $0() {
    var t = fn.current;
    return t === null
      ? !0
      : (Rt & 4194048) === Rt
        ? zn === null
        : (Rt & 62914560) === Rt || (Rt & 536870912) !== 0
          ? t === zn
          : !1;
  }
  function Y0() {
    var t = z.H;
    return ((z.H = Ji), t === null ? Ji : t);
  }
  function q0() {
    var t = z.A;
    return ((z.A = hy), t);
  }
  function Oo() {
    ((fe = 4),
      Da || ((Rt & 4194048) !== Rt && fn.current !== null) || (Fl = !0),
      ((ja & 134217727) === 0 && (cl & 134217727) === 0) || Pt === null || Ha(Pt, Rt, hn, !1));
  }
  function vc(t, e, n) {
    var l = $t;
    $t |= 2;
    var r = Y0(),
      s = q0();
    ((Pt !== t || Rt !== e) && ((Ao = null), ti(t, e)), (e = !1));
    var d = fe;
    t: do
      try {
        if (Vt !== 0 && Mt !== null) {
          var m = Mt,
            x = pn;
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
              if (((Vt = 0), (pn = null), ei(t, m, x, _), n && Fl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((_ = Vt), (Vt = 0), (pn = null), ei(t, m, x, _));
          }
        }
        (yy(), (d = fe));
        break;
      } catch (k) {
        k0(t, k);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (na = el = null),
      ($t = l),
      (z.H = r),
      (z.A = s),
      Mt === null && ((Pt = null), (Rt = 0), Zr()),
      d
    );
  }
  function yy() {
    for (; Mt !== null; ) G0(Mt);
  }
  function vy(t, e) {
    var n = $t;
    $t |= 2;
    var l = Y0(),
      r = q0();
    Pt !== t || Rt !== e ? ((Ao = null), (zo = Me() + 500), ti(t, e)) : (Fl = kn(t, e));
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
                ((Vt = 0), (pn = null), V0(e));
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
              Id(s) ? ((Vt = 0), (pn = null), V0(e)) : ((Vt = 0), (pn = null), ei(t, e, s, 7));
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
                    var x = m.sibling;
                    if (x !== null) Mt = x;
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
              throw Error(o(462));
          }
        }
        by();
        break;
      } catch (k) {
        k0(t, k);
      }
    while (!0);
    return ((na = el = null), (z.H = l), (z.A = r), ($t = n), Mt !== null ? 0 : ((Pt = null), (Rt = 0), Zr(), fe));
  }
  function by() {
    for (; Mt !== null && !gt(); ) G0(Mt);
  }
  function G0(t) {
    var e = p0(t.alternate, t, da);
    ((t.memoizedProps = t.pendingProps), e === null ? Ro(t) : (Mt = e));
  }
  function V0(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = o0(n, e, e.pendingProps, e.type, void 0, Rt);
        break;
      case 11:
        e = o0(n, e, e.pendingProps, e.type.render, e.ref, Rt);
        break;
      case 5:
        Ds(e);
      default:
        (m0(n, e), (e = Mt = qd(e, da)), (e = p0(n, e, da)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ro(t) : (Mt = e));
  }
  function ei(t, e, n, l) {
    ((na = el = null), Ds(e), (Vl = null), (Yi = 0));
    var r = e.return;
    try {
      if (oy(t, r, e, n, Rt)) {
        ((fe = 1), go(t, xn(n, t.current)), (Mt = null));
        return;
      }
    } catch (s) {
      if (r !== null) throw ((Mt = r), s);
      ((fe = 1), go(t, xn(n, t.current)), (Mt = null));
      return;
    }
    e.flags & 32768
      ? (Dt || l === 1
          ? (t = !0)
          : Fl || (Rt & 536870912) !== 0
            ? (t = !1)
            : ((Da = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = fn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        X0(e, t))
      : Ro(e);
  }
  function Ro(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        X0(e, Da);
        return;
      }
      t = e.return;
      var n = cy(e.alternate, e, da);
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
  function X0(t, e) {
    do {
      var n = fy(t.alternate, t);
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
  function Q0(t, e, n, l, r, s, d, m, x) {
    t.cancelPendingCommit = null;
    do wo();
    while (Ee !== 0);
    if (($t & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= rs),
        Pg(t, n, s, d, m, x),
        t === Pt && ((Mt = Pt = null), (Rt = 0)),
        (Il = e),
        (Ua = t),
        (pa = n),
        (hc = s),
        (mc = r),
        (N0 = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Ty(At, function () {
              return (F0(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = z.T), (z.T = null), (r = J.p), (J.p = 2), (d = $t), ($t |= 4));
        try {
          dy(t, e, n);
        } finally {
          (($t = d), (J.p = r), (z.T = l));
        }
      }
      ((Ee = 1), Z0(), K0(), J0());
    }
  }
  function Z0() {
    if (Ee === 1) {
      Ee = 0;
      var t = Ua,
        e = Il,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = z.T), (z.T = null));
        var l = J.p;
        J.p = 2;
        var r = $t;
        $t |= 4;
        try {
          M0(e, t);
          var s = wc,
            d = Dd(t.containerInfo),
            m = s.focusedElem,
            x = s.selectionRange;
          if (d !== m && m && m.ownerDocument && Bd(m.ownerDocument.documentElement, m)) {
            if (x !== null && es(m)) {
              var _ = x.start,
                k = x.end;
              if ((k === void 0 && (k = _), 'selectionStart' in m))
                ((m.selectionStart = _), (m.selectionEnd = Math.min(k, m.value.length)));
              else {
                var Q = m.ownerDocument || document,
                  D = (Q && Q.defaultView) || window;
                if (D.getSelection) {
                  var U = D.getSelection(),
                    rt = m.textContent.length,
                    ht = Math.min(x.start, rt),
                    Wt = x.end === void 0 ? ht : Math.min(x.end, rt);
                  !U.extend && ht > Wt && ((d = Wt), (Wt = ht), (ht = d));
                  var M = _d(m, ht),
                    T = _d(m, Wt);
                  if (
                    M &&
                    T &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== M.node ||
                      U.anchorOffset !== M.offset ||
                      U.focusNode !== T.node ||
                      U.focusOffset !== T.offset)
                  ) {
                    var w = Q.createRange();
                    (w.setStart(M.node, M.offset),
                      U.removeAllRanges(),
                      ht > Wt
                        ? (U.addRange(w), U.extend(T.node, T.offset))
                        : (w.setEnd(T.node, T.offset), U.addRange(w)));
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
          (($t = r), (J.p = l), (z.T = n));
        }
      }
      ((t.current = e), (Ee = 2));
    }
  }
  function K0() {
    if (Ee === 2) {
      Ee = 0;
      var t = Ua,
        e = Il,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = z.T), (z.T = null));
        var l = J.p;
        J.p = 2;
        var r = $t;
        $t |= 4;
        try {
          C0(t, e.alternate, e);
        } finally {
          (($t = r), (J.p = l), (z.T = n));
        }
      }
      Ee = 3;
    }
  }
  function J0() {
    if (Ee === 4 || Ee === 3) {
      ((Ee = 0), va());
      var t = Ua,
        e = Il,
        n = pa,
        l = N0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ee = 5)
        : ((Ee = 0), (Il = Ua = null), W0(t, t.pendingLanes));
      var r = t.pendingLanes;
      if ((r === 0 && (Na = null), Uu(n), (e = e.stateNode), ie && typeof ie.onCommitFiberRoot == 'function'))
        try {
          ie.onCommitFiberRoot(It, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = z.T), (r = J.p), (J.p = 2), (z.T = null));
        try {
          for (var s = t.onRecoverableError, d = 0; d < l.length; d++) {
            var m = l[d];
            s(m.value, { componentStack: m.stack });
          }
        } finally {
          ((z.T = e), (J.p = r));
        }
      }
      ((pa & 3) !== 0 && wo(),
        Gn(t),
        (r = t.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0 ? (t === gc ? lr++ : ((lr = 0), (gc = t))) : (lr = 0),
        ir(0));
    }
  }
  function W0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), ki(e)));
  }
  function wo() {
    return (Z0(), K0(), J0(), F0());
  }
  function F0() {
    if (Ee !== 5) return !1;
    var t = Ua,
      e = hc;
    hc = 0;
    var n = Uu(pa),
      l = z.T,
      r = J.p;
    try {
      ((J.p = 32 > n ? 32 : n), (z.T = null), (n = mc), (mc = null));
      var s = Ua,
        d = pa;
      if (((Ee = 0), (Il = Ua = null), (pa = 0), ($t & 6) !== 0)) throw Error(o(331));
      var m = $t;
      if (
        (($t |= 4),
        B0(s.current),
        R0(s, s.current, d, n),
        ($t = m),
        ir(0, !1),
        ie && typeof ie.onPostCommitFiberRoot == 'function')
      )
        try {
          ie.onPostCommitFiberRoot(It, s);
        } catch {}
      return !0;
    } finally {
      ((J.p = r), (z.T = l), W0(t, e));
    }
  }
  function P0(t, e, n) {
    ((e = xn(n, e)), (e = Ks(t.stateNode, e, 2)), (t = Ra(t, e, 2)), t !== null && (zi(t, 2), Gn(t)));
  }
  function Xt(t, e, n) {
    if (t.tag === 3) P0(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          P0(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (Na === null || !Na.has(l)))
          ) {
            ((t = xn(n, t)), (n = Ip(2)), (l = Ra(e, n, 2)), l !== null && (t0(n, l, e, t), zi(l, 2), Gn(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function bc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new my();
      var r = new Set();
      l.set(e, r);
    } else ((r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r)));
    r.has(n) || ((fc = !0), r.add(n), (t = Sy.bind(null, t, e, n)), e.then(t, t));
  }
  function Sy(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Pt === t &&
        (Rt & n) === n &&
        (fe === 4 || (fe === 3 && (Rt & 62914560) === Rt && 300 > Me() - Eo) ? ($t & 2) === 0 && ti(t, 0) : (dc |= n),
        Pl === Rt && (Pl = 0)),
      Gn(t));
  }
  function I0(t, e) {
    (e === 0 && (e = Zf()), (t = Pa(t, e)), t !== null && (zi(t, e), Gn(t)));
  }
  function xy(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), I0(t, n));
  }
  function Cy(t, e) {
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
        throw Error(o(314));
    }
    (l !== null && l.delete(e), I0(t, n));
  }
  function Ty(t, e) {
    return Ze(t, e);
  }
  var _o = null,
    ni = null,
    Sc = !1,
    Bo = !1,
    xc = !1,
    La = 0;
  function Gn(t) {
    (t !== ni && t.next === null && (ni === null ? (_o = ni = t) : (ni = ni.next = t)),
      (Bo = !0),
      Sc || ((Sc = !0), zy()));
  }
  function ir(t, e) {
    if (!xc && Bo) {
      xc = !0;
      do
        for (var n = !1, l = _o; l !== null; ) {
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
            ((s = Rt),
              (s = Sa(l, l === Pt ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
              (s & 3) === 0 || kn(l, s) || ((n = !0), ah(l, s)));
          l = l.next;
        }
      while (n);
      xc = !1;
    }
  }
  function Ey() {
    th();
  }
  function th() {
    Bo = Sc = !1;
    var t = 0;
    La !== 0 && Ny() && (t = La);
    for (var e = Me(), n = null, l = _o; l !== null; ) {
      var r = l.next,
        s = eh(l, e);
      (s === 0
        ? ((l.next = null), n === null ? (_o = r) : (n.next = r), r === null && (ni = n))
        : ((n = l), (t !== 0 || (s & 3) !== 0) && (Bo = !0)),
        (l = r));
    }
    ((Ee !== 0 && Ee !== 5) || ir(t), La !== 0 && (La = 0));
  }
  function eh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - qe(s),
        m = 1 << d,
        x = r[d];
      (x === -1 ? ((m & n) === 0 || (m & l) !== 0) && (r[d] = Bn(m, e)) : x <= e && (t.expiredLanes |= m), (s &= ~m));
    }
    if (
      ((e = Pt),
      (n = Rt),
      (n = Sa(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      n === 0 || (t === e && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Ln(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || kn(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Ln(l), Uu(n))) {
        case 2:
        case 8:
          n = xt;
          break;
        case 32:
          n = At;
          break;
        case 268435456:
          n = Et;
          break;
        default:
          n = At;
      }
      return ((l = nh.bind(null, t)), (n = Ze(n, l)), (t.callbackPriority = e), (t.callbackNode = n), e);
    }
    return (l !== null && l !== null && Ln(l), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function nh(t, e) {
    if (Ee !== 0 && Ee !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (wo() && t.callbackNode !== n) return null;
    var l = Rt;
    return (
      (l = Sa(t, t === Pt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (H0(t, l, e), eh(t, Me()), t.callbackNode != null && t.callbackNode === n ? nh.bind(null, t) : null)
    );
  }
  function ah(t, e) {
    if (wo()) return null;
    H0(t, e, !0);
  }
  function zy() {
    Hy(function () {
      ($t & 6) !== 0 ? Ze(at, Ey) : th();
    });
  }
  function Cc() {
    if (La === 0) {
      var t = Yl;
      (t === 0 && ((t = ba), (ba <<= 1), (ba & 261888) === 0 && (ba = 256)), (La = t));
    }
    return La;
  }
  function lh(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null : typeof t == 'function' ? t : kr('' + t);
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
  function Ay(t, e, n, l, r) {
    if (e === 'submit' && n && n.stateNode === r) {
      var s = lh((r[We] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[We] || null) ? lh(e.formAction) : d.getAttribute('formAction')),
        e !== null && ((s = e), (d = null)));
      var m = new Gr('action', 'action', null, l, r);
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (La !== 0) {
                  var x = d ? ih(r, d) : new FormData(r);
                  qs(n, { pending: !0, data: x, method: r.method, action: s }, null, x);
                }
              } else
                typeof s == 'function' &&
                  (m.preventDefault(),
                  (x = d ? ih(r, d) : new FormData(r)),
                  qs(n, { pending: !0, data: x, method: r.method, action: s }, s, x));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Tc = 0; Tc < is.length; Tc++) {
    var Ec = is[Tc],
      My = Ec.toLowerCase(),
      Oy = Ec[0].toUpperCase() + Ec.slice(1);
    Dn(My, 'on' + Oy);
  }
  (Dn(Ud, 'onAnimationEnd'),
    Dn(Hd, 'onAnimationIteration'),
    Dn(Ld, 'onAnimationStart'),
    Dn('dblclick', 'onDoubleClick'),
    Dn('focusin', 'onFocus'),
    Dn('focusout', 'onBlur'),
    Dn(V1, 'onTransitionRun'),
    Dn(X1, 'onTransitionStart'),
    Dn(Q1, 'onTransitionCancel'),
    Dn(kd, 'onTransitionEnd'),
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
    Ry = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(rr));
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
              x = m.instance,
              _ = m.currentTarget;
            if (((m = m.listener), x !== s && r.isPropagationStopped())) break t;
            ((s = m), (r.currentTarget = _));
            try {
              s(r);
            } catch (k) {
              Qr(k);
            }
            ((r.currentTarget = null), (s = x));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((m = l[d]),
              (x = m.instance),
              (_ = m.currentTarget),
              (m = m.listener),
              x !== s && r.isPropagationStopped())
            )
              break t;
            ((s = m), (r.currentTarget = _));
            try {
              s(r);
            } catch (k) {
              Qr(k);
            }
            ((r.currentTarget = null), (s = x));
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
          n !== 'selectionchange' && (Ry.has(n) || zc(n, !1, t), zc(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Do] || ((e[Do] = !0), zc('selectionchange', !1, e));
    }
  }
  function oh(t, e, n, l) {
    switch (Uh(e)) {
      case 2:
        var r = av;
        break;
      case 8:
        r = lv;
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
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === r) return;
              d = d.return;
            }
          for (; m !== null; ) {
            if (((d = El(m)), d === null)) return;
            if (((x = d.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
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
        k = Vu(n),
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
              U = C1;
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
              U = c1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = z1;
              break;
            case Ud:
            case Hd:
            case Ld:
              U = p1;
              break;
            case kd:
              U = M1;
              break;
            case 'scroll':
            case 'scrollend':
              U = u1;
              break;
            case 'wheel':
              U = R1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = m1;
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
            Wt = !ht && (t === 'scroll' || t === 'scrollend'),
            M = ht ? (D !== null ? D + 'Capture' : null) : D;
          ht = [];
          for (var T = _, w; T !== null; ) {
            var G = T;
            if (
              ((w = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                w === null ||
                M === null ||
                ((G = Oi(T, M)), G != null && ht.push(or(T, G, w))),
              Wt)
            )
              break;
            T = T.return;
          }
          0 < ht.length && ((D = new U(D, rt, null, n, k)), Q.push({ event: D, listeners: ht }));
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
            ((D = k.window === k ? k : (D = k.ownerDocument) ? D.defaultView || D.parentWindow : window),
            U
              ? ((rt = n.relatedTarget || n.toElement),
                (U = _),
                (rt = rt ? El(rt) : null),
                rt !== null &&
                  ((Wt = f(rt)), (ht = rt.tag), rt !== Wt || (ht !== 5 && ht !== 27 && ht !== 6)) &&
                  (rt = null))
              : ((U = null), (rt = _)),
            U !== rt)
          ) {
            if (
              ((ht = md),
              (G = 'onMouseLeave'),
              (M = 'onMouseEnter'),
              (T = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((ht = yd), (G = 'onPointerLeave'), (M = 'onPointerEnter'), (T = 'pointer')),
              (Wt = U == null ? D : Mi(U)),
              (w = rt == null ? D : Mi(rt)),
              (D = new ht(G, T + 'leave', U, n, k)),
              (D.target = Wt),
              (D.relatedTarget = w),
              (G = null),
              El(k) === _ &&
                ((ht = new ht(M, T + 'enter', rt, n, k)), (ht.target = w), (ht.relatedTarget = Wt), (G = ht)),
              (Wt = G),
              U && rt)
            )
              e: {
                for (ht = wy, M = U, T = rt, w = 0, G = M; G; G = ht(G)) w++;
                G = 0;
                for (var dt = T; dt; dt = ht(dt)) G++;
                for (; 0 < w - G; ) ((M = ht(M)), w--);
                for (; 0 < G - w; ) ((T = ht(T)), G--);
                for (; w--; ) {
                  if (M === T || (T !== null && M === T.alternate)) {
                    ht = M;
                    break e;
                  }
                  ((M = ht(M)), (T = ht(T)));
                }
                ht = null;
              }
            else ht = null;
            (U !== null && uh(Q, D, U, ht, !1), rt !== null && Wt !== null && uh(Q, Wt, rt, ht, !0));
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
            if (Ad) Ht = Y1;
            else {
              Ht = k1;
              var ut = L1;
            }
          else
            ((U = D.nodeName),
              !U || U.toLowerCase() !== 'input' || (D.type !== 'checkbox' && D.type !== 'radio')
                ? _ && qu(_.elementType) && (Ht = zd)
                : (Ht = $1));
          if (Ht && (Ht = Ht(t, _))) {
            Ed(Q, Ht, n, k);
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
            ((as = !1), jd(Q, n, k));
            break;
          case 'selectionchange':
            if (G1) break;
          case 'keydown':
          case 'keyup':
            jd(Q, n, k);
        }
        var Ct;
        if (Pu)
          t: {
            switch (t) {
              case 'compositionstart':
                var wt = 'onCompositionStart';
                break t;
              case 'compositionend':
                wt = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                wt = 'onCompositionUpdate';
                break t;
            }
            wt = void 0;
          }
        else
          Bl
            ? xd(t, n) && (wt = 'onCompositionEnd')
            : t === 'keydown' && n.keyCode === 229 && (wt = 'onCompositionStart');
        (wt &&
          (vd &&
            n.locale !== 'ko' &&
            (Bl || wt !== 'onCompositionStart'
              ? wt === 'onCompositionEnd' && Bl && (Ct = pd())
              : ((Ca = k), (Zu = 'value' in Ca ? Ca.value : Ca.textContent), (Bl = !0))),
          (ut = jo(_, wt)),
          0 < ut.length &&
            ((wt = new gd(wt, t, null, n, k)),
            Q.push({ event: wt, listeners: ut }),
            Ct ? (wt.data = Ct) : ((Ct = Cd(n)), Ct !== null && (wt.data = Ct)))),
          (Ct = D1 ? j1(t, n) : N1(t, n)) &&
            ((wt = jo(_, 'onBeforeInput')),
            0 < wt.length &&
              ((ut = new gd('onBeforeInput', 'beforeinput', null, n, k)),
              Q.push({ event: ut, listeners: wt }),
              (ut.data = Ct))),
          Ay(Q, t, _, n, k));
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
  function wy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function uh(t, e, n, l, r) {
    for (var s = e._reactName, d = []; n !== null && n !== l; ) {
      var m = n,
        x = m.alternate,
        _ = m.stateNode;
      if (((m = m.tag), x !== null && x === l)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        _ === null ||
        ((x = _),
        r
          ? ((_ = Oi(n, s)), _ != null && d.unshift(or(n, _, x)))
          : r || ((_ = Oi(n, s)), _ != null && d.push(or(n, _, x)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var _y = /\r\n?/g,
    By = /\u0000|\uFFFD/g;
  function sh(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        _y,
        `
`
      )
      .replace(By, '');
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
        ((l = kr('' + l)), t.setAttribute(n, l));
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
        ((l = kr('' + l)), t.setAttribute(n, l));
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
          if (typeof l != 'object' || !('__html' in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(o(60));
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
        ((n = kr('' + l)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        Fn(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Fn(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Fn(t, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Fn(t, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Fn(t, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Fn(t, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Fn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Fn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Fn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        Ur(t, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = r1.get(n) || n), Ur(t, n, l));
    }
  }
  function Oc(t, e, n, l, r, s) {
    switch (n) {
      case 'style':
        cd(t, l, s);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(o(60));
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
              (s = t[We] || null),
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
  function je(t, e, n) {
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
                  throw Error(o(137, e));
                default:
                  Jt(t, e, s, d, n, null);
              }
          }
        (r && Jt(t, e, 'srcSet', n.srcSet, n, null), l && Jt(t, e, 'src', n.src, n, null));
        return;
      case 'input':
        Ot('invalid', t);
        var m = (s = d = r = null),
          x = null,
          _ = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var k = n[l];
            if (k != null)
              switch (l) {
                case 'name':
                  r = k;
                  break;
                case 'type':
                  d = k;
                  break;
                case 'checked':
                  x = k;
                  break;
                case 'defaultChecked':
                  _ = k;
                  break;
                case 'value':
                  s = k;
                  break;
                case 'defaultValue':
                  m = k;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (k != null) throw Error(o(137, e));
                  break;
                default:
                  Jt(t, e, l, k, n, null);
              }
          }
        rd(t, s, m, x, _, d, r, !1);
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
                if (m != null) throw Error(o(91));
                break;
              default:
                Jt(t, e, d, m, n, null);
            }
        ud(t, l, r, s);
        return;
      case 'option':
        for (x in n)
          if (n.hasOwnProperty(x) && ((l = n[x]), l != null))
            switch (x) {
              case 'selected':
                t.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Jt(t, e, x, l, n, null);
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
                throw Error(o(137, e));
              default:
                Jt(t, e, _, l, n, null);
            }
        return;
      default:
        if (qu(e)) {
          for (k in n) n.hasOwnProperty(k) && ((l = n[k]), l !== void 0 && Oc(t, e, k, l, n, void 0));
          return;
        }
    }
    for (m in n) n.hasOwnProperty(m) && ((l = n[m]), l != null && Jt(t, e, m, l, n, null));
  }
  function Dy(t, e, n, l) {
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
          x = null,
          _ = null,
          k = null;
        for (U in n) {
          var Q = n[U];
          if (n.hasOwnProperty(U) && Q != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                x = Q;
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
                k = U;
                break;
              case 'value':
                d = U;
                break;
              case 'defaultValue':
                m = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(o(137, e));
                break;
              default:
                U !== Q && Jt(t, e, D, U, l, Q);
            }
        }
        $u(t, d, m, x, _, k, s, r);
        return;
      case 'select':
        U = d = m = D = null;
        for (s in n)
          if (((x = n[s]), n.hasOwnProperty(s) && x != null))
            switch (s) {
              case 'value':
                break;
              case 'multiple':
                U = x;
              default:
                l.hasOwnProperty(s) || Jt(t, e, s, null, l, x);
            }
        for (r in l)
          if (((s = l[r]), (x = n[r]), l.hasOwnProperty(r) && (s != null || x != null)))
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
                s !== x && Jt(t, e, r, s, l, x);
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
                if (r != null) throw Error(o(91));
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
        for (x in l)
          if (((D = l[x]), (U = n[x]), l.hasOwnProperty(x) && D !== U && (D != null || U != null)))
            switch (x) {
              case 'selected':
                t.selected = D && typeof D != 'function' && typeof D != 'symbol';
                break;
              default:
                Jt(t, e, x, D, l, U);
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
                if (D != null) throw Error(o(137, e));
                break;
              default:
                Jt(t, e, _, D, l, U);
            }
        return;
      default:
        if (qu(e)) {
          for (var Wt in n)
            ((D = n[Wt]), n.hasOwnProperty(Wt) && D !== void 0 && !l.hasOwnProperty(Wt) && Oc(t, e, Wt, void 0, l, D));
          for (k in l)
            ((D = l[k]),
              (U = n[k]),
              !l.hasOwnProperty(k) || D === U || (D === void 0 && U === void 0) || Oc(t, e, k, D, l, U));
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
  function jy() {
    if (typeof performance.getEntriesByType == 'function') {
      for (var t = 0, e = 0, n = performance.getEntriesByType('resource'), l = 0; l < n.length; l++) {
        var r = n[l],
          s = r.transferSize,
          d = r.initiatorType,
          m = r.duration;
        if (s && m && fh(d)) {
          for (d = 0, m = r.responseEnd, l += 1; l < n.length; l++) {
            var x = n[l],
              _ = x.startTime;
            if (_ > m) break;
            var k = x.transferSize,
              Q = x.initiatorType;
            k && fh(Q) && ((x = x.responseEnd), (d += k * (x < m ? 1 : (m - _) / (x - _))));
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
  var Bc = null;
  function Ny() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === Bc ? !1 : ((Bc = t), !0)) : ((Bc = null), !1);
  }
  var hh = typeof setTimeout == 'function' ? setTimeout : void 0,
    Uy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    mh = typeof Promise == 'function' ? Promise : void 0,
    Hy =
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
  function ka(t) {
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
          (Dc(n), Lu(n));
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
  function ky(t, e, n, l) {
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
  function $y(t, e, n) {
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
  function Yy(t, e) {
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
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function ur(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Lu(t);
  }
  var Mn = new Map(),
    Ch = new Set();
  function Uo(t) {
    return typeof t.getRootNode == 'function' ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ha = J.d;
  J.d = { f: qy, r: Gy, D: Vy, C: Xy, L: Qy, m: Zy, X: Jy, S: Ky, M: Wy };
  function qy() {
    var t = ha.f(),
      e = Mo();
    return t || e;
  }
  function Gy(t) {
    var e = zl(t);
    e !== null && e.tag === 5 && e.type === 'form' ? kp(e) : ha.r(t);
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
            ((e = l.createElement('link')), je(e, 'link', t), Oe(e), l.head.appendChild(e))));
    }
  }
  function Vy(t) {
    (ha.D(t), Th('dns-prefetch', t, null));
  }
  function Xy(t, e) {
    (ha.C(t, e), Th('preconnect', t, e));
  }
  function Qy(t, e, n) {
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
        ((t = C({ rel: 'preload', href: e === 'image' && n && n.imageSrcSet ? void 0 : t, as: e }, n)),
        Mn.set(s, t),
        l.querySelector(r) !== null ||
          (e === 'style' && l.querySelector(sr(s))) ||
          (e === 'script' && l.querySelector(cr(s))) ||
          ((e = l.createElement('link')), je(e, 'link', t), Oe(e), l.head.appendChild(e)));
    }
  }
  function Zy(t, e) {
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
      if (!Mn.has(s) && ((t = C({ rel: 'modulepreload', href: t }, e)), Mn.set(s, t), n.querySelector(r) === null)) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(cr(s))) return;
        }
        ((l = n.createElement('link')), je(l, 'link', t), Oe(l), n.head.appendChild(l));
      }
    }
  }
  function Ky(t, e, n) {
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
          ((t = C({ rel: 'stylesheet', href: t, 'data-precedence': e }, n)), (n = Mn.get(s)) && Hc(t, n));
          var x = (d = l.createElement('link'));
          (Oe(x),
            je(x, 'link', t),
            (x._p = new Promise(function (_, k) {
              ((x.onload = _), (x.onerror = k));
            })),
            x.addEventListener('load', function () {
              m.loading |= 1;
            }),
            x.addEventListener('error', function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            Ho(d, e, l));
        }
        ((d = { type: 'stylesheet', instance: d, count: 1, state: m }), r.set(s, d));
      }
    }
  }
  function Jy(t, e) {
    ha.X(t, e);
    var n = ai;
    if (n && t) {
      var l = Al(n).hoistableScripts,
        r = ii(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(cr(r))),
        s ||
          ((t = C({ src: t, async: !0 }, e)),
          (e = Mn.get(r)) && Lc(t, e),
          (s = n.createElement('script')),
          Oe(s),
          je(s, 'link', t),
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
          ((t = C({ src: t, async: !0, type: 'module' }, e)),
          (e = Mn.get(r)) && Lc(t, e),
          (s = n.createElement('script')),
          Oe(s),
          je(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function Eh(t, e, n, l) {
    var r = (r = ot.current) ? Uo(r) : null;
    if (!r) throw Error(o(446));
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
                s || Fy(r, t, n, d.state))),
            e && l === null)
          )
            throw Error(o(528, ''));
          return d;
        }
        if (e && l !== null) throw Error(o(529, ''));
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
        throw Error(o(444, t));
    }
  }
  function li(t) {
    return 'href="' + bn(t) + '"';
  }
  function sr(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function zh(t) {
    return C({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Fy(t, e, n, l) {
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
        je(e, 'link', n),
        Oe(e),
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
          if (l) return ((e.instance = l), Oe(l), l);
          var r = C({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (t.ownerDocument || t).createElement('style')),
            Oe(l),
            je(l, 'style', r),
            Ho(l, n.precedence, t),
            (e.instance = l)
          );
        case 'stylesheet':
          r = li(n.href);
          var s = t.querySelector(sr(r));
          if (s) return ((e.state.loading |= 4), (e.instance = s), Oe(s), s);
          ((l = zh(n)), (r = Mn.get(r)) && Hc(l, r), (s = (t.ownerDocument || t).createElement('link')), Oe(s));
          var d = s;
          return (
            (d._p = new Promise(function (m, x) {
              ((d.onload = m), (d.onerror = x));
            })),
            je(s, 'link', l),
            (e.state.loading |= 4),
            Ho(s, n.precedence, t),
            (e.instance = s)
          );
        case 'script':
          return (
            (s = ii(n.src)),
            (r = t.querySelector(cr(s)))
              ? ((e.instance = r), Oe(r), r)
              : ((l = n),
                (r = Mn.get(s)) && ((l = C({}, n)), Lc(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement('script')),
                Oe(r),
                je(r, 'link', l),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case 'void':
          return null;
        default:
          throw Error(o(443, e.type));
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
  function Lc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Lo = null;
  function Mh(t, e, n) {
    if (Lo === null) {
      var l = new Map(),
        r = (Lo = new Map());
      r.set(n, l);
    } else ((r = Lo), (l = r.get(n)), l || ((l = new Map()), r.set(n, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var s = n[r];
      if (
        !(s[Ai] || s[we] || (t === 'link' && s.getAttribute('rel') === 'stylesheet')) &&
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
  function Py(t, e, n) {
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
  function Iy(t, e, n, l) {
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
              (t.count++, (t = ko.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = s),
            Oe(s));
          return;
        }
        ((s = e.ownerDocument || e), (l = zh(l)), (r = Mn.get(r)) && Hc(l, r), (s = s.createElement('link')), Oe(s));
        var d = s;
        ((d._p = new Promise(function (m, x) {
          ((d.onload = m), (d.onerror = x));
        })),
          je(s, 'link', l),
          (n.instance = s));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++, (n = ko.bind(t)), e.addEventListener('load', n), e.addEventListener('error', n)));
    }
  }
  var kc = 0;
  function tv(t, e) {
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
            0 < t.imgBytes && kc === 0 && (kc = 62500 * jy());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1), t.count === 0 && (t.stylesheets && Yo(t, t.stylesheets), t.unsuspend))
                ) {
                  var s = t.unsuspend;
                  ((t.unsuspend = null), s());
                }
              },
              (t.imgBytes > kc ? 50 : 800) + e
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
  function ko() {
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
      t.unsuspend !== null && (t.count++, ($o = new Map()), e.forEach(ev, t), ($o = null), ko.call(t)));
  }
  function ev(t, e) {
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
        (l = ko.bind(this)),
        r.addEventListener('load', l),
        r.addEventListener('error', l),
        s
          ? s.parentNode.insertBefore(r, s.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var fr = { $$typeof: K, Provider: null, Consumer: null, _currentValue: I, _currentValue2: I, _threadCount: 0 };
  function nv(t, e, n, l, r, s, d, m, x) {
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
      (this.formState = x),
      (this.incompleteTransitions = new Map()));
  }
  function wh(t, e, n, l, r, s, d, m, x, _, k, Q) {
    return (
      (t = new nv(t, e, n, d, x, _, k, Q, m)),
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
  function _h(t) {
    return t ? ((t = Ul), t) : Ul;
  }
  function Bh(t, e, n, l, r, s) {
    ((r = _h(r)),
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
  function av(t, e, n, l) {
    var r = z.T;
    z.T = null;
    var s = J.p;
    try {
      ((J.p = 2), Yc(t, e, n, l));
    } finally {
      ((J.p = s), (z.T = r));
    }
  }
  function lv(t, e, n, l) {
    var r = z.T;
    z.T = null;
    var s = J.p;
    try {
      ((J.p = 8), Yc(t, e, n, l));
    } finally {
      ((J.p = s), (z.T = r));
    }
  }
  function Yc(t, e, n, l) {
    if (qo) {
      var r = qc(l);
      if (r === null) (Mc(t, e, l, Go, n), Hh(t, l));
      else if (rv(r, t, e, n, l)) l.stopPropagation();
      else if ((Hh(t, l), e & 4 && -1 < iv.indexOf(t))) {
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
                      var x = 1 << (31 - qe(d));
                      ((m.entanglements[1] |= x), (d &= ~x));
                    }
                    (Gn(s), ($t & 6) === 0 && ((zo = Me() + 500), ir(0)));
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
          case Bt:
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
  var Vc = !1,
    $a = null,
    Ya = null,
    qa = null,
    dr = new Map(),
    pr = new Map(),
    Ga = [],
    iv =
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
  function rv(t, e, n, l, r) {
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
  function Lh(t) {
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
  function kh(t, e, n) {
    Vo(t) && n.delete(e);
  }
  function ov() {
    ((Vc = !1),
      $a !== null && Vo($a) && ($a = null),
      Ya !== null && Vo(Ya) && (Ya = null),
      qa !== null && Vo(qa) && (qa = null),
      dr.forEach(kh),
      pr.forEach(kh));
  }
  function Xo(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), Vc || ((Vc = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, ov)));
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
    function e(x) {
      return Xo(x, t);
    }
    ($a !== null && Xo($a, t), Ya !== null && Xo(Ya, t), qa !== null && Xo(qa, t), dr.forEach(e), pr.forEach(e));
    for (var n = 0; n < Ga.length; n++) {
      var l = Ga[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ga.length && ((n = Ga[0]), n.blockedOn === null); ) (Lh(n), n.blockedOn === null && Ga.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          s = n[l + 1],
          d = r[We] || null;
        if (typeof s == 'function') d || $h(n);
        else if (d) {
          var m = null;
          if (s && s.hasAttribute('formAction')) {
            if (((r = s), (d = s[We] || null))) m = d.formAction;
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
      if (e === null) throw Error(o(409));
      var n = e.current,
        l = mn();
      Bh(n, l, t, e, null, null);
    }),
    (Zo.prototype.unmount = Xc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Bh(t.current, 2, null, t, null, null), Mo(), (e[Tl] = null));
        }
      }));
  function Zo(t) {
    this._internalRoot = t;
  }
  Zo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ff();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ga.length && e !== 0 && e < Ga[n].priority; n++);
      (Ga.splice(n, 0, t), n === 0 && Lh(t));
    }
  };
  var qh = i.version;
  if (qh !== '19.2.0') throw Error(o(527, qh, '19.2.0'));
  J.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ? Error(o(188)) : ((t = Object.keys(t).join(',')), Error(o(268, t)));
    return ((t = g(e)), (t = t !== null ? S(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var uv = {
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
        ((It = Ko.inject(uv)), (ie = Ko));
      } catch {}
  }
  return (
    (gr.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        l = '',
        r = Jp,
        s = Wp,
        d = Fp;
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
      if (!c(t)) throw Error(o(299));
      var l = !1,
        r = '',
        s = Jp,
        d = Wp,
        m = Fp,
        x = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (x = n.formState)),
        (e = wh(t, 1, !0, e, n ?? null, l, r, x, s, d, m, Yh)),
        (e.context = _h(null)),
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
function vv() {
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
  return (a(), (Kc.exports = yv()), Kc.exports);
}
var bv = vv();
const zr = { black: '#000', white: '#fff' },
  oi = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  ui = { 50: '#f3e5f5', 200: '#ce93d8', 300: '#ba68c8', 400: '#ab47bc', 500: '#9c27b0', 700: '#7b1fa2' },
  si = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  ci = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  fi = { 300: '#81c784', 400: '#66bb6a', 500: '#4caf50', 700: '#388e3c', 800: '#2e7d32', 900: '#1b5e20' },
  yr = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  Sv = {
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
  const u = new URL(`https://mui.com/production-error/?code=${a}`);
  return (
    i.forEach((o) => u.searchParams.append('args[]', o)),
    `Minified MUI error #${a}; visit ${u} for the full message.`
  );
}
const zf = '$$material';
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var u = arguments[i];
            for (var o in u) ({}).hasOwnProperty.call(u, o) && (a[o] = u[o]);
          }
          return a;
        }),
    uu.apply(null, arguments)
  );
}
function xv(a) {
  if (a.sheet) return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a) return document.styleSheets[i];
}
function Cv(a) {
  var i = document.createElement('style');
  return (
    i.setAttribute('data-emotion', a.key),
    a.nonce !== void 0 && i.setAttribute('nonce', a.nonce),
    i.appendChild(document.createTextNode('')),
    i.setAttribute('data-s', ''),
    i
  );
}
var Tv = (function () {
    function a(u) {
      var o = this;
      ((this._insertTag = function (c) {
        var f;
        (o.tags.length === 0
          ? o.insertionPoint
            ? (f = o.insertionPoint.nextSibling)
            : o.prepend
              ? (f = o.container.firstChild)
              : (f = o.before)
          : (f = o.tags[o.tags.length - 1].nextSibling),
          o.container.insertBefore(c, f),
          o.tags.push(c));
      }),
        (this.isSpeedy = u.speedy === void 0 ? !0 : u.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = u.nonce),
        (this.key = u.key),
        (this.container = u.container),
        (this.prepend = u.prepend),
        (this.insertionPoint = u.insertionPoint),
        (this.before = null));
    }
    var i = a.prototype;
    return (
      (i.hydrate = function (o) {
        o.forEach(this._insertTag);
      }),
      (i.insert = function (o) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Cv(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = xv(c);
          try {
            f.insertRule(o, f.cssRules.length);
          } catch {}
        } else c.appendChild(document.createTextNode(o));
        this.ctr++;
      }),
      (i.flush = function () {
        (this.tags.forEach(function (o) {
          var c;
          return (c = o.parentNode) == null ? void 0 : c.removeChild(o);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      a
    );
  })(),
  ke = '-ms-',
  su = '-moz-',
  Yt = '-webkit-',
  Jm = 'comm',
  Af = 'rule',
  Mf = 'decl',
  Ev = '@import',
  Wm = '@keyframes',
  zv = '@layer',
  Av = Math.abs,
  vu = String.fromCharCode,
  Mv = Object.assign;
function Ov(a, i) {
  return Ne(a, 0) ^ 45 ? (((((((i << 2) ^ Ne(a, 0)) << 2) ^ Ne(a, 1)) << 2) ^ Ne(a, 2)) << 2) ^ Ne(a, 3) : 0;
}
function Fm(a) {
  return a.trim();
}
function Rv(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function qt(a, i, u) {
  return a.replace(i, u);
}
function sf(a, i) {
  return a.indexOf(i);
}
function Ne(a, i) {
  return a.charCodeAt(i) | 0;
}
function Ar(a, i, u) {
  return a.slice(i, u);
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
function wv(a, i) {
  return a.map(i).join('');
}
var bu = 1,
  bi = 1,
  Pm = 0,
  ln = 0,
  Te = 0,
  Ci = '';
function Su(a, i, u, o, c, f, p) {
  return { value: a, root: i, parent: u, type: o, props: c, children: f, line: bu, column: bi, length: p, return: '' };
}
function vr(a, i) {
  return Mv(Su('', null, null, '', null, null, 0), a, { length: -a.length }, i);
}
function _v() {
  return Te;
}
function Bv() {
  return ((Te = ln > 0 ? Ne(Ci, --ln) : 0), bi--, Te === 10 && ((bi = 1), bu--), Te);
}
function yn() {
  return ((Te = ln < Pm ? Ne(Ci, ln++) : 0), bi++, Te === 10 && ((bi = 1), bu++), Te);
}
function Kn() {
  return Ne(Ci, ln);
}
function nu() {
  return ln;
}
function _r(a, i) {
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
  return Fm(_r(ln - 1, cf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function Dv(a) {
  for (; (Te = Kn()) && Te < 33; ) yn();
  return Mr(a) > 2 || Mr(Te) > 3 ? '' : ' ';
}
function jv(a, i) {
  for (; --i && yn() && !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97)); );
  return _r(a, nu() + (i < 6 && Kn() == 32 && yn() == 32));
}
function cf(a) {
  for (; yn(); )
    switch (Te) {
      case a:
        return ln;
      case 34:
      case 39:
        a !== 34 && a !== 39 && cf(Te);
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
function Nv(a, i) {
  for (; yn() && a + Te !== 57; ) if (a + Te === 84 && Kn() === 47) break;
  return '/*' + _r(i, ln - 1) + '*' + vu(a === 47 ? a : yn());
}
function Uv(a) {
  for (; !Mr(Kn()); ) yn();
  return _r(a, ln);
}
function Hv(a) {
  return tg(lu('', null, null, null, [''], (a = Im(a)), 0, [0], a));
}
function lu(a, i, u, o, c, f, p, h, y) {
  for (
    var g = 0, S = 0, C = p, A = 0, j = 0, O = 0, E = 1, L = 1, q = 1, W = 0, K = '', Y = c, N = f, V = o, Z = K;
    L;

  )
    switch (((O = W), (W = yn()))) {
      case 40:
        if (O != 108 && Ne(Z, C - 1) == 58) {
          sf((Z += qt(au(W), '&', '&\f')), '&\f') != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Z += au(W);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Z += Dv(O);
        break;
      case 92:
        Z += jv(nu() - 1, 7);
        continue;
      case 47:
        switch (Kn()) {
          case 42:
          case 47:
            Jo(Lv(Nv(yn(), nu()), i, u), y);
            break;
          default:
            Z += '/';
        }
        break;
      case 123 * E:
        h[g++] = Xn(Z) * q;
      case 125 * E:
      case 59:
      case 0:
        switch (W) {
          case 0:
          case 125:
            L = 0;
          case 59 + S:
            (q == -1 && (Z = qt(Z, /\f/g, '')),
              j > 0 && Xn(Z) - C && Jo(j > 32 ? tm(Z + ';', o, u, C - 1) : tm(qt(Z, ' ', '') + ';', o, u, C - 2), y));
            break;
          case 59:
            Z += ';';
          default:
            if ((Jo((V = Ih(Z, i, u, g, S, c, h, K, (Y = []), (N = []), C)), f), W === 123))
              if (S === 0) lu(Z, i, V, V, Y, f, C, h, N);
              else
                switch (A === 99 && Ne(Z, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lu(a, V, V, o && Jo(Ih(a, V, V, 0, 0, c, h, K, c, (Y = []), C), N), c, N, C, h, o ? Y : N);
                    break;
                  default:
                    lu(Z, V, V, V, [''], N, 0, h, N);
                }
        }
        ((g = S = j = 0), (E = q = 1), (K = Z = ''), (C = p));
        break;
      case 58:
        ((C = 1 + Xn(Z)), (j = O));
      default:
        if (E < 1) {
          if (W == 123) --E;
          else if (W == 125 && E++ == 0 && Bv() == 125) continue;
        }
        switch (((Z += vu(W)), W * E)) {
          case 38:
            q = S > 0 ? 1 : ((Z += '\f'), -1);
            break;
          case 44:
            ((h[g++] = (Xn(Z) - 1) * q), (q = 1));
            break;
          case 64:
            (Kn() === 45 && (Z += au(yn())), (A = Kn()), (S = C = Xn((K = Z += Uv(nu())))), W++);
            break;
          case 45:
            O === 45 && Xn(Z) == 2 && (E = 0);
        }
    }
  return f;
}
function Ih(a, i, u, o, c, f, p, h, y, g, S) {
  for (var C = c - 1, A = c === 0 ? f : [''], j = Of(A), O = 0, E = 0, L = 0; O < o; ++O)
    for (var q = 0, W = Ar(a, C + 1, (C = Av((E = p[O])))), K = a; q < j; ++q)
      (K = Fm(E > 0 ? A[q] + ' ' + W : qt(W, /&\f/g, A[q]))) && (y[L++] = K);
  return Su(a, i, u, c === 0 ? Af : h, y, g, S);
}
function Lv(a, i, u) {
  return Su(a, i, u, Jm, vu(_v()), Ar(a, 2, -2), 0);
}
function tm(a, i, u, o) {
  return Su(a, i, u, Mf, Ar(a, 0, o), Ar(a, o + 1, -1), o);
}
function gi(a, i) {
  for (var u = '', o = Of(a), c = 0; c < o; c++) u += i(a[c], c, a, i) || '';
  return u;
}
function kv(a, i, u, o) {
  switch (a.type) {
    case zv:
      if (a.children.length) break;
    case Ev:
    case Mf:
      return (a.return = a.return || a.value);
    case Jm:
      return '';
    case Wm:
      return (a.return = a.value + '{' + gi(a.children, o) + '}');
    case Af:
      a.value = a.props.join(',');
  }
  return Xn((u = gi(a.children, o))) ? (a.return = a.value + '{' + u + '}') : '';
}
function $v(a) {
  var i = Of(a);
  return function (u, o, c, f) {
    for (var p = '', h = 0; h < i; h++) p += a[h](u, o, c, f) || '';
    return p;
  };
}
function Yv(a) {
  return function (i) {
    i.root || ((i = i.return) && a(i));
  };
}
function eg(a) {
  var i = Object.create(null);
  return function (u) {
    return (i[u] === void 0 && (i[u] = a(u)), i[u]);
  };
}
var qv = function (i, u, o) {
    for (var c = 0, f = 0; (c = f), (f = Kn()), c === 38 && f === 12 && (u[o] = 1), !Mr(f); ) yn();
    return _r(i, ln);
  },
  Gv = function (i, u) {
    var o = -1,
      c = 44;
    do
      switch (Mr(c)) {
        case 0:
          (c === 38 && Kn() === 12 && (u[o] = 1), (i[o] += qv(ln - 1, u, o)));
          break;
        case 2:
          i[o] += au(c);
          break;
        case 4:
          if (c === 44) {
            ((i[++o] = Kn() === 58 ? '&\f' : ''), (u[o] = i[o].length));
            break;
          }
        default:
          i[o] += vu(c);
      }
    while ((c = yn()));
    return i;
  },
  Vv = function (i, u) {
    return tg(Gv(Im(i), u));
  },
  em = new WeakMap(),
  Xv = function (i) {
    if (!(i.type !== 'rule' || !i.parent || i.length < 1)) {
      for (var u = i.value, o = i.parent, c = i.column === o.column && i.line === o.line; o.type !== 'rule'; )
        if (((o = o.parent), !o)) return;
      if (!(i.props.length === 1 && u.charCodeAt(0) !== 58 && !em.get(o)) && !c) {
        em.set(i, !0);
        for (var f = [], p = Vv(u, f), h = o.props, y = 0, g = 0; y < p.length; y++)
          for (var S = 0; S < h.length; S++, g++) i.props[g] = f[y] ? p[y].replace(/&\f/g, h[S]) : h[S] + ' ' + p[y];
      }
    }
  },
  Qv = function (i) {
    if (i.type === 'decl') {
      var u = i.value;
      u.charCodeAt(0) === 108 && u.charCodeAt(2) === 98 && ((i.return = ''), (i.value = ''));
    }
  };
function ng(a, i) {
  switch (Ov(a, i)) {
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
      return Yt + a + su + a + ke + a + a;
    case 6828:
    case 4268:
      return Yt + a + ke + a + a;
    case 6165:
      return Yt + a + ke + 'flex-' + a + a;
    case 5187:
      return Yt + a + qt(a, /(\w+).+(:[^]+)/, Yt + 'box-$1$2' + ke + 'flex-$1$2') + a;
    case 5443:
      return Yt + a + ke + 'flex-item-' + qt(a, /flex-|-self/, '') + a;
    case 4675:
      return Yt + a + ke + 'flex-line-pack' + qt(a, /align-content|flex-|-self/, '') + a;
    case 5548:
      return Yt + a + ke + qt(a, 'shrink', 'negative') + a;
    case 5292:
      return Yt + a + ke + qt(a, 'basis', 'preferred-size') + a;
    case 6060:
      return Yt + 'box-' + qt(a, '-grow', '') + Yt + a + ke + qt(a, 'grow', 'positive') + a;
    case 4554:
      return Yt + qt(a, /([^-])(transform)/g, '$1' + Yt + '$2') + a;
    case 6187:
      return qt(qt(qt(a, /(zoom-|grab)/, Yt + '$1'), /(image-set)/, Yt + '$1'), a, '') + a;
    case 5495:
    case 3959:
      return qt(a, /(image-set\([^]*)/, Yt + '$1$`$1');
    case 4968:
      return (
        qt(qt(a, /(.+:)(flex-)?(.*)/, Yt + 'box-pack:$3' + ke + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Yt + a + a
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
        switch (Ne(a, i + 1)) {
          case 109:
            if (Ne(a, i + 4) !== 45) break;
          case 102:
            return qt(a, /(.+:)(.+)-([^]+)/, '$1' + Yt + '$2-$3$1' + su + (Ne(a, i + 3) == 108 ? '$3' : '$2-$3')) + a;
          case 115:
            return ~sf(a, 'stretch') ? ng(qt(a, 'stretch', 'fill-available'), i) + a : a;
        }
      break;
    case 4949:
      if (Ne(a, i + 1) !== 115) break;
    case 6444:
      switch (Ne(a, Xn(a) - 3 - (~sf(a, '!important') && 10))) {
        case 107:
          return qt(a, ':', ':' + Yt) + a;
        case 101:
          return (
            qt(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + Yt + (Ne(a, 14) === 45 ? 'inline-' : '') + 'box$3$1' + Yt + '$2$3$1' + ke + '$2box$3'
            ) + a
          );
      }
      break;
    case 5936:
      switch (Ne(a, i + 11)) {
        case 114:
          return Yt + a + ke + qt(a, /[svh]\w+-[tblr]{2}/, 'tb') + a;
        case 108:
          return Yt + a + ke + qt(a, /[svh]\w+-[tblr]{2}/, 'tb-rl') + a;
        case 45:
          return Yt + a + ke + qt(a, /[svh]\w+-[tblr]{2}/, 'lr') + a;
      }
      return Yt + a + ke + a + a;
  }
  return a;
}
var Zv = function (i, u, o, c) {
    if (i.length > -1 && !i.return)
      switch (i.type) {
        case Mf:
          i.return = ng(i.value, i.length);
          break;
        case Wm:
          return gi([vr(i, { value: qt(i.value, '@', '@' + Yt) })], c);
        case Af:
          if (i.length)
            return wv(i.props, function (f) {
              switch (Rv(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return gi([vr(i, { props: [qt(f, /:(read-\w+)/, ':' + su + '$1')] })], c);
                case '::placeholder':
                  return gi(
                    [
                      vr(i, { props: [qt(f, /:(plac\w+)/, ':' + Yt + 'input-$1')] }),
                      vr(i, { props: [qt(f, /:(plac\w+)/, ':' + su + '$1')] }),
                      vr(i, { props: [qt(f, /:(plac\w+)/, ke + 'input-$1')] }),
                    ],
                    c
                  );
              }
              return '';
            });
      }
  },
  Kv = [Zv],
  Jv = function (i) {
    var u = i.key;
    if (u === 'css') {
      var o = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(o, function (E) {
        var L = E.getAttribute('data-emotion');
        L.indexOf(' ') !== -1 && (document.head.appendChild(E), E.setAttribute('data-s', ''));
      });
    }
    var c = i.stylisPlugins || Kv,
      f = {},
      p,
      h = [];
    ((p = i.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + u + ' "]'), function (E) {
        for (var L = E.getAttribute('data-emotion').split(' '), q = 1; q < L.length; q++) f[L[q]] = !0;
        h.push(E);
      }));
    var y,
      g = [Xv, Qv];
    {
      var S,
        C = [
          kv,
          Yv(function (E) {
            S.insert(E);
          }),
        ],
        A = $v(g.concat(c, C)),
        j = function (L) {
          return gi(Hv(L), A);
        };
      y = function (L, q, W, K) {
        ((S = W), j(L ? L + '{' + q.styles + '}' : q.styles), K && (O.inserted[q.name] = !0));
      };
    }
    var O = {
      key: u,
      sheet: new Tv({
        key: u,
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
    u = a ? Symbol.for('react.portal') : 60106,
    o = a ? Symbol.for('react.fragment') : 60107,
    c = a ? Symbol.for('react.strict_mode') : 60108,
    f = a ? Symbol.for('react.profiler') : 60114,
    p = a ? Symbol.for('react.provider') : 60109,
    h = a ? Symbol.for('react.context') : 60110,
    y = a ? Symbol.for('react.async_mode') : 60111,
    g = a ? Symbol.for('react.concurrent_mode') : 60111,
    S = a ? Symbol.for('react.forward_ref') : 60112,
    C = a ? Symbol.for('react.suspense') : 60113,
    A = a ? Symbol.for('react.suspense_list') : 60120,
    j = a ? Symbol.for('react.memo') : 60115,
    O = a ? Symbol.for('react.lazy') : 60116,
    E = a ? Symbol.for('react.block') : 60121,
    L = a ? Symbol.for('react.fundamental') : 60117,
    q = a ? Symbol.for('react.responder') : 60118,
    W = a ? Symbol.for('react.scope') : 60119;
  function K(N) {
    if (typeof N == 'object' && N !== null) {
      var V = N.$$typeof;
      switch (V) {
        case i:
          switch (((N = N.type), N)) {
            case y:
            case g:
            case o:
            case f:
            case c:
            case C:
              return N;
            default:
              switch (((N = N && N.$$typeof), N)) {
                case h:
                case S:
                case O:
                case j:
                case p:
                  return N;
                default:
                  return V;
              }
          }
        case u:
          return V;
      }
    }
  }
  function Y(N) {
    return K(N) === g;
  }
  return (
    (Gt.AsyncMode = y),
    (Gt.ConcurrentMode = g),
    (Gt.ContextConsumer = h),
    (Gt.ContextProvider = p),
    (Gt.Element = i),
    (Gt.ForwardRef = S),
    (Gt.Fragment = o),
    (Gt.Lazy = O),
    (Gt.Memo = j),
    (Gt.Portal = u),
    (Gt.Profiler = f),
    (Gt.StrictMode = c),
    (Gt.Suspense = C),
    (Gt.isAsyncMode = function (N) {
      return Y(N) || K(N) === y;
    }),
    (Gt.isConcurrentMode = Y),
    (Gt.isContextConsumer = function (N) {
      return K(N) === h;
    }),
    (Gt.isContextProvider = function (N) {
      return K(N) === p;
    }),
    (Gt.isElement = function (N) {
      return typeof N == 'object' && N !== null && N.$$typeof === i;
    }),
    (Gt.isForwardRef = function (N) {
      return K(N) === S;
    }),
    (Gt.isFragment = function (N) {
      return K(N) === o;
    }),
    (Gt.isLazy = function (N) {
      return K(N) === O;
    }),
    (Gt.isMemo = function (N) {
      return K(N) === j;
    }),
    (Gt.isPortal = function (N) {
      return K(N) === u;
    }),
    (Gt.isProfiler = function (N) {
      return K(N) === f;
    }),
    (Gt.isStrictMode = function (N) {
      return K(N) === c;
    }),
    (Gt.isSuspense = function (N) {
      return K(N) === C;
    }),
    (Gt.isValidElementType = function (N) {
      return (
        typeof N == 'string' ||
        typeof N == 'function' ||
        N === o ||
        N === g ||
        N === f ||
        N === c ||
        N === C ||
        N === A ||
        (typeof N == 'object' &&
          N !== null &&
          (N.$$typeof === O ||
            N.$$typeof === j ||
            N.$$typeof === p ||
            N.$$typeof === h ||
            N.$$typeof === S ||
            N.$$typeof === L ||
            N.$$typeof === q ||
            N.$$typeof === W ||
            N.$$typeof === E))
      );
    }),
    (Gt.typeOf = K),
    Gt
  );
}
var am;
function Fv() {
  return (am || ((am = 1), (Pc.exports = Wv())), Pc.exports);
}
var Ic, lm;
function Pv() {
  if (lm) return Ic;
  lm = 1;
  var a = Fv(),
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
    u = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    o = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    c = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    f = {};
  ((f[a.ForwardRef] = o), (f[a.Memo] = c));
  function p(O) {
    return a.isMemo(O) ? c : f[O.$$typeof] || i;
  }
  var h = Object.defineProperty,
    y = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    S = Object.getOwnPropertyDescriptor,
    C = Object.getPrototypeOf,
    A = Object.prototype;
  function j(O, E, L) {
    if (typeof E != 'string') {
      if (A) {
        var q = C(E);
        q && q !== A && j(O, q, L);
      }
      var W = y(E);
      g && (W = W.concat(g(E)));
      for (var K = p(O), Y = p(E), N = 0; N < W.length; ++N) {
        var V = W[N];
        if (!u[V] && !(L && L[V]) && !(Y && Y[V]) && !(K && K[V])) {
          var Z = S(E, V);
          try {
            h(O, V, Z);
          } catch {}
        }
      }
    }
    return O;
  }
  return ((Ic = j), Ic);
}
Pv();
var Iv = !0;
function ag(a, i, u) {
  var o = '';
  return (
    u.split(' ').forEach(function (c) {
      a[c] !== void 0 ? i.push(a[c] + ';') : c && (o += c + ' ');
    }),
    o
  );
}
var Rf = function (i, u, o) {
    var c = i.key + '-' + u.name;
    (o === !1 || Iv === !1) && i.registered[c] === void 0 && (i.registered[c] = u.styles);
  },
  lg = function (i, u, o) {
    Rf(i, u, o);
    var c = i.key + '-' + u.name;
    if (i.inserted[u.name] === void 0) {
      var f = u;
      do (i.insert(u === f ? '.' + c : '', f, i.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function tb(a) {
  for (var i = 0, u, o = 0, c = a.length; c >= 4; ++o, c -= 4)
    ((u =
      (a.charCodeAt(o) & 255) |
      ((a.charCodeAt(++o) & 255) << 8) |
      ((a.charCodeAt(++o) & 255) << 16) |
      ((a.charCodeAt(++o) & 255) << 24)),
      (u = (u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)),
      (u ^= u >>> 24),
      (i =
        ((u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)) ^
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16))));
  switch (c) {
    case 3:
      i ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      i ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      ((i ^= a.charCodeAt(o) & 255), (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)));
  }
  return (
    (i ^= i >>> 13),
    (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
    ((i ^ (i >>> 15)) >>> 0).toString(36)
  );
}
var eb = {
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
  nb = /[A-Z]|^ms/g,
  ab = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ig = function (i) {
    return i.charCodeAt(1) === 45;
  },
  im = function (i) {
    return i != null && typeof i != 'boolean';
  },
  tf = eg(function (a) {
    return ig(a) ? a : a.replace(nb, '-$&').toLowerCase();
  }),
  rm = function (i, u) {
    switch (i) {
      case 'animation':
      case 'animationName':
        if (typeof u == 'string')
          return u.replace(ab, function (o, c, f) {
            return ((Qn = { name: c, styles: f, next: Qn }), c);
          });
    }
    return eb[i] !== 1 && !ig(i) && typeof u == 'number' && u !== 0 ? u + 'px' : u;
  };
function Or(a, i, u) {
  if (u == null) return '';
  var o = u;
  if (o.__emotion_styles !== void 0) return o;
  switch (typeof u) {
    case 'boolean':
      return '';
    case 'object': {
      var c = u;
      if (c.anim === 1) return ((Qn = { name: c.name, styles: c.styles, next: Qn }), c.name);
      var f = u;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0) for (; p !== void 0; ) ((Qn = { name: p.name, styles: p.styles, next: Qn }), (p = p.next));
        var h = f.styles + ';';
        return h;
      }
      return lb(a, i, u);
    }
    case 'function': {
      if (a !== void 0) {
        var y = Qn,
          g = u(a);
        return ((Qn = y), Or(a, i, g));
      }
      break;
    }
  }
  var S = u;
  if (i == null) return S;
  var C = i[S];
  return C !== void 0 ? C : S;
}
function lb(a, i, u) {
  var o = '';
  if (Array.isArray(u)) for (var c = 0; c < u.length; c++) o += Or(a, i, u[c]) + ';';
  else
    for (var f in u) {
      var p = u[f];
      if (typeof p != 'object') {
        var h = p;
        i != null && i[h] !== void 0 ? (o += f + '{' + i[h] + '}') : im(h) && (o += tf(f) + ':' + rm(f, h) + ';');
      } else if (Array.isArray(p) && typeof p[0] == 'string' && (i == null || i[p[0]] === void 0))
        for (var y = 0; y < p.length; y++) im(p[y]) && (o += tf(f) + ':' + rm(f, p[y]) + ';');
      else {
        var g = Or(a, i, p);
        switch (f) {
          case 'animation':
          case 'animationName': {
            o += tf(f) + ':' + g + ';';
            break;
          }
          default:
            o += f + '{' + g + '}';
        }
      }
    }
  return o;
}
var om = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Qn;
function xu(a, i, u) {
  if (a.length === 1 && typeof a[0] == 'object' && a[0] !== null && a[0].styles !== void 0) return a[0];
  var o = !0,
    c = '';
  Qn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) ((o = !1), (c += Or(u, i, f)));
  else {
    var p = f;
    c += p[0];
  }
  for (var h = 1; h < a.length; h++)
    if (((c += Or(u, i, a[h])), o)) {
      var y = f;
      c += y[h];
    }
  om.lastIndex = 0;
  for (var g = '', S; (S = om.exec(c)) !== null; ) g += '-' + S[1];
  var C = tb(c) + g;
  return { name: C, styles: c, next: Qn };
}
var ib = function (i) {
    return i();
  },
  rb = uf.useInsertionEffect ? uf.useInsertionEffect : !1,
  rg = rb || ib,
  og = H.createContext(typeof HTMLElement < 'u' ? Jv({ key: 'css' }) : null);
og.Provider;
var ug = function (i) {
    return H.forwardRef(function (u, o) {
      var c = H.useContext(og);
      return i(u, c, o);
    });
  },
  wf = H.createContext({}),
  _f = {}.hasOwnProperty,
  ff = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ob = function (i, u) {
    var o = {};
    for (var c in u) _f.call(u, c) && (o[c] = u[c]);
    return ((o[ff] = i), o);
  },
  ub = function (i) {
    var u = i.cache,
      o = i.serialized,
      c = i.isStringTag;
    return (
      Rf(u, o, c),
      rg(function () {
        return lg(u, o, c);
      }),
      null
    );
  },
  sb = ug(function (a, i, u) {
    var o = a.css;
    typeof o == 'string' && i.registered[o] !== void 0 && (o = i.registered[o]);
    var c = a[ff],
      f = [o],
      p = '';
    typeof a.className == 'string'
      ? (p = ag(i.registered, f, a.className))
      : a.className != null && (p = a.className + ' ');
    var h = xu(f, void 0, H.useContext(wf));
    p += i.key + '-' + h.name;
    var y = {};
    for (var g in a) _f.call(a, g) && g !== 'css' && g !== ff && (y[g] = a[g]);
    return (
      (y.className = p),
      u && (y.ref = u),
      H.createElement(
        H.Fragment,
        null,
        H.createElement(ub, { cache: i, serialized: h, isStringTag: typeof c == 'string' }),
        H.createElement(c, y)
      )
    );
  }),
  cb = sb,
  um = function (i, u) {
    var o = arguments;
    if (u == null || !_f.call(u, 'css')) return H.createElement.apply(void 0, o);
    var c = o.length,
      f = new Array(c);
    ((f[0] = cb), (f[1] = ob(i, u)));
    for (var p = 2; p < c; p++) f[p] = o[p];
    return H.createElement.apply(null, f);
  };
(function (a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(um || (um = {}));
function Bf() {
  for (var a = arguments.length, i = new Array(a), u = 0; u < a; u++) i[u] = arguments[u];
  return xu(i);
}
function Br() {
  var a = Bf.apply(void 0, arguments),
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
var fb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  db = eg(function (a) {
    return fb.test(a) || (a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91);
  }),
  pb = db,
  hb = function (i) {
    return i !== 'theme';
  },
  sm = function (i) {
    return typeof i == 'string' && i.charCodeAt(0) > 96 ? pb : hb;
  },
  cm = function (i, u, o) {
    var c;
    if (u) {
      var f = u.shouldForwardProp;
      c =
        i.__emotion_forwardProp && f
          ? function (p) {
              return i.__emotion_forwardProp(p) && f(p);
            }
          : f;
    }
    return (typeof c != 'function' && o && (c = i.__emotion_forwardProp), c);
  },
  mb = function (i) {
    var u = i.cache,
      o = i.serialized,
      c = i.isStringTag;
    return (
      Rf(u, o, c),
      rg(function () {
        return lg(u, o, c);
      }),
      null
    );
  },
  gb = function a(i, u) {
    var o = i.__emotion_real === i,
      c = (o && i.__emotion_base) || i,
      f,
      p;
    u !== void 0 && ((f = u.label), (p = u.target));
    var h = cm(i, u, o),
      y = h || sm(c),
      g = !y('as');
    return function () {
      var S = arguments,
        C = o && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
      if ((f !== void 0 && C.push('label:' + f + ';'), S[0] == null || S[0].raw === void 0)) C.push.apply(C, S);
      else {
        var A = S[0];
        C.push(A[0]);
        for (var j = S.length, O = 1; O < j; O++) C.push(S[O], A[O]);
      }
      var E = ug(function (L, q, W) {
        var K = (g && L.as) || c,
          Y = '',
          N = [],
          V = L;
        if (L.theme == null) {
          V = {};
          for (var Z in L) V[Z] = L[Z];
          V.theme = H.useContext(wf);
        }
        typeof L.className == 'string'
          ? (Y = ag(q.registered, N, L.className))
          : L.className != null && (Y = L.className + ' ');
        var st = xu(C.concat(N), q.registered, V);
        ((Y += q.key + '-' + st.name), p !== void 0 && (Y += ' ' + p));
        var ct = g && h === void 0 ? sm(K) : y,
          pt = {};
        for (var ft in L) (g && ft === 'as') || (ct(ft) && (pt[ft] = L[ft]));
        return (
          (pt.className = Y),
          W && (pt.ref = W),
          H.createElement(
            H.Fragment,
            null,
            H.createElement(mb, { cache: q, serialized: st, isStringTag: typeof K == 'string' }),
            H.createElement(K, pt)
          )
        );
      });
      return (
        (E.displayName =
          f !== void 0 ? f : 'Styled(' + (typeof c == 'string' ? c : c.displayName || c.name || 'Component') + ')'),
        (E.defaultProps = i.defaultProps),
        (E.__emotion_real = E),
        (E.__emotion_base = c),
        (E.__emotion_styles = C),
        (E.__emotion_forwardProp = h),
        Object.defineProperty(E, 'toString', {
          value: function () {
            return '.' + p;
          },
        }),
        (E.withComponent = function (L, q) {
          var W = a(L, uu({}, u, q, { shouldForwardProp: cm(E, q, !0) }));
          return W.apply(void 0, C);
        }),
        E
      );
    };
  },
  yb = [
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
  df = gb.bind(null);
yb.forEach(function (a) {
  df[a] = df(a);
});
function sg(a, i) {
  return df(a, i);
}
function vb(a, i) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = i(a.__emotion_styles));
}
const fm = [];
function yl(a) {
  return ((fm[0] = a), xu(fm));
}
var ef = { exports: {} },
  Ft = {};
var dm;
function bb() {
  if (dm) return Ft;
  dm = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.suspense_list'),
    S = Symbol.for('react.memo'),
    C = Symbol.for('react.lazy'),
    A = Symbol.for('react.view_transition'),
    j = Symbol.for('react.client.reference');
  function O(E) {
    if (typeof E == 'object' && E !== null) {
      var L = E.$$typeof;
      switch (L) {
        case a:
          switch (((E = E.type), E)) {
            case u:
            case c:
            case o:
            case y:
            case g:
            case A:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case p:
                case h:
                case C:
                case S:
                  return E;
                case f:
                  return E;
                default:
                  return L;
              }
          }
        case i:
          return L;
      }
    }
  }
  return (
    (Ft.ContextConsumer = f),
    (Ft.ContextProvider = p),
    (Ft.Element = a),
    (Ft.ForwardRef = h),
    (Ft.Fragment = u),
    (Ft.Lazy = C),
    (Ft.Memo = S),
    (Ft.Portal = i),
    (Ft.Profiler = c),
    (Ft.StrictMode = o),
    (Ft.Suspense = y),
    (Ft.SuspenseList = g),
    (Ft.isContextConsumer = function (E) {
      return O(E) === f;
    }),
    (Ft.isContextProvider = function (E) {
      return O(E) === p;
    }),
    (Ft.isElement = function (E) {
      return typeof E == 'object' && E !== null && E.$$typeof === a;
    }),
    (Ft.isForwardRef = function (E) {
      return O(E) === h;
    }),
    (Ft.isFragment = function (E) {
      return O(E) === u;
    }),
    (Ft.isLazy = function (E) {
      return O(E) === C;
    }),
    (Ft.isMemo = function (E) {
      return O(E) === S;
    }),
    (Ft.isPortal = function (E) {
      return O(E) === i;
    }),
    (Ft.isProfiler = function (E) {
      return O(E) === c;
    }),
    (Ft.isStrictMode = function (E) {
      return O(E) === o;
    }),
    (Ft.isSuspense = function (E) {
      return O(E) === y;
    }),
    (Ft.isSuspenseList = function (E) {
      return O(E) === g;
    }),
    (Ft.isValidElementType = function (E) {
      return (
        typeof E == 'string' ||
        typeof E == 'function' ||
        E === u ||
        E === c ||
        E === o ||
        E === y ||
        E === g ||
        (typeof E == 'object' &&
          E !== null &&
          (E.$$typeof === C ||
            E.$$typeof === S ||
            E.$$typeof === p ||
            E.$$typeof === f ||
            E.$$typeof === h ||
            E.$$typeof === j ||
            E.getModuleId !== void 0))
      );
    }),
    (Ft.typeOf = O),
    Ft
  );
}
var pm;
function Sb() {
  return (pm || ((pm = 1), (ef.exports = bb())), ef.exports);
}
var cg = Sb();
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
    Object.keys(a).forEach((u) => {
      i[u] = fg(a[u]);
    }),
    i
  );
}
function Xe(a, i, u = { clone: !0 }) {
  const o = u.clone ? { ...a } : a;
  return (
    Zn(a) &&
      Zn(i) &&
      Object.keys(i).forEach((c) => {
        H.isValidElement(i[c]) || cg.isValidElementType(i[c])
          ? (o[c] = i[c])
          : Zn(i[c]) && Object.prototype.hasOwnProperty.call(a, c) && Zn(a[c])
            ? (o[c] = Xe(a[c], i[c], u))
            : u.clone
              ? (o[c] = Zn(i[c]) ? fg(i[c]) : i[c])
              : (o[c] = i[c]);
      }),
    o
  );
}
const xb = (a) => {
  const i = Object.keys(a).map((u) => ({ key: u, val: a[u] })) || [];
  return (i.sort((u, o) => u.val - o.val), i.reduce((u, o) => ({ ...u, [o.key]: o.val }), {}));
};
function Cb(a) {
  const { values: i = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: u = 'px', step: o = 5, ...c } = a,
    f = xb(i),
    p = Object.keys(f);
  function h(A) {
    return `@media (min-width:${typeof i[A] == 'number' ? i[A] : A}${u})`;
  }
  function y(A) {
    return `@media (max-width:${(typeof i[A] == 'number' ? i[A] : A) - o / 100}${u})`;
  }
  function g(A, j) {
    const O = p.indexOf(j);
    return `@media (min-width:${typeof i[A] == 'number' ? i[A] : A}${u}) and (max-width:${(O !== -1 && typeof i[p[O]] == 'number' ? i[p[O]] : j) - o / 100}${u})`;
  }
  function S(A) {
    return p.indexOf(A) + 1 < p.length ? g(A, p[p.indexOf(A) + 1]) : h(A);
  }
  function C(A) {
    const j = p.indexOf(A);
    return j === 0
      ? h(p[1])
      : j === p.length - 1
        ? y(p[j])
        : g(A, p[p.indexOf(A) + 1]).replace('@media', '@media not all and');
  }
  return { keys: p, values: f, up: h, down: y, between: g, only: S, not: C, unit: u, ...c };
}
function hm(a, i) {
  if (!a.containerQueries) return i;
  const u = Object.keys(i)
    .filter((o) => o.startsWith('@container'))
    .sort((o, c) => {
      const f = /min-width:\s*([0-9.]+)/;
      return +(o.match(f)?.[1] || 0) - +(c.match(f)?.[1] || 0);
    });
  return u.length
    ? u.reduce(
        (o, c) => {
          const f = i[c];
          return (delete o[c], (o[c] = f), o);
        },
        { ...i }
      )
    : i;
}
function Tb(a, i) {
  return i === '@' || (i.startsWith('@') && (a.some((u) => i.startsWith(`@${u}`)) || !!i.match(/^@\d/)));
}
function Eb(a, i) {
  const u = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!u) return null;
  const [, o, c] = u,
    f = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(c).up(f);
}
function zb(a) {
  const i = (f, p) => f.replace('@media', p ? `@container ${p}` : '@container');
  function u(f, p) {
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
  const o = {},
    c = (f) => (u(o, f), o);
  return (u(c), { ...a, containerQueries: c });
}
const Ab = { borderRadius: 4 };
function Cr(a, i) {
  return i ? Xe(a, i, { clone: !1 }) : a;
}
const Cu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  mm = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (a) => `@media (min-width:${Cu[a]}px)` },
  Mb = {
    containerQueries: (a) => ({
      up: (i) => {
        let u = typeof i == 'number' ? i : Cu[i] || i;
        return (
          typeof u == 'number' && (u = `${u}px`),
          a ? `@container ${a} (min-width:${u})` : `@container (min-width:${u})`
        );
      },
    }),
  };
function Hn(a, i, u) {
  const o = a.theme || {};
  if (Array.isArray(i)) {
    const f = o.breakpoints || mm;
    return i.reduce((p, h, y) => ((p[f.up(f.keys[y])] = u(i[y])), p), {});
  }
  if (typeof i == 'object') {
    const f = o.breakpoints || mm;
    return Object.keys(i).reduce((p, h) => {
      if (Tb(f.keys, h)) {
        const y = Eb(o.containerQueries ? o : Mb, h);
        y && (p[y] = u(i[h], h));
      } else if (Object.keys(f.values || Cu).includes(h)) {
        const y = f.up(h);
        p[y] = u(i[h], h);
      } else {
        const y = h;
        p[y] = i[y];
      }
      return p;
    }, {});
  }
  return u(i);
}
function dg(a = {}) {
  return (
    a.keys?.reduce((u, o) => {
      const c = a.up(o);
      return ((u[c] = {}), u);
    }, {}) || {}
  );
}
function pf(a, i) {
  return a.reduce((u, o) => {
    const c = u[o];
    return ((!c || Object.keys(c).length === 0) && delete u[o], u);
  }, i);
}
function Ob(a, ...i) {
  const u = dg(a),
    o = [u, ...i].reduce((c, f) => Xe(c, f), {});
  return pf(Object.keys(u), o);
}
function Rb(a, i) {
  if (typeof a != 'object') return {};
  const u = {},
    o = Object.keys(i);
  return (
    Array.isArray(a)
      ? o.forEach((c, f) => {
          f < a.length && (u[c] = !0);
        })
      : o.forEach((c) => {
          a[c] != null && (u[c] = !0);
        }),
    u
  );
}
function nf({ values: a, breakpoints: i, base: u }) {
  const o = u || Rb(a, i),
    c = Object.keys(o);
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
function Tu(a, i, u = !0) {
  if (!i || typeof i != 'string') return null;
  if (a && a.vars && u) {
    const o = `vars.${i}`.split('.').reduce((c, f) => (c && c[f] ? c[f] : null), a);
    if (o != null) return o;
  }
  return i.split('.').reduce((o, c) => (o && o[c] != null ? o[c] : null), a);
}
function cu(a, i, u, o = u) {
  let c;
  return (
    typeof a == 'function' ? (c = a(u)) : Array.isArray(a) ? (c = a[u] || o) : (c = Tu(a, u) || o),
    i && (c = i(c, o, a)),
    c
  );
}
function ve(a) {
  const { prop: i, cssProperty: u = a.prop, themeKey: o, transform: c } = a,
    f = (p) => {
      if (p[i] == null) return null;
      const h = p[i],
        y = p.theme,
        g = Tu(y, o) || {};
      return Hn(p, h, (C) => {
        let A = cu(g, c, C);
        return (
          C === A && typeof C == 'string' && (A = cu(g, c, `${i}${C === 'default' ? '' : mt(C)}`, C)),
          u === !1 ? A : { [u]: A }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [i]), f);
}
function wb(a) {
  const i = {};
  return (u) => (i[u] === void 0 && (i[u] = a(u)), i[u]);
}
const _b = { m: 'margin', p: 'padding' },
  Bb = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  gm = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  Db = wb((a) => {
    if (a.length > 2)
      if (gm[a]) a = gm[a];
      else return [a];
    const [i, u] = a.split(''),
      o = _b[i],
      c = Bb[u] || '';
    return Array.isArray(c) ? c.map((f) => o + f) : [o + c];
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
function Dr(a, i, u, o) {
  const c = Tu(a, i, !0) ?? u;
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
function jb(a, i) {
  return (u) => a.reduce((o, c) => ((o[c] = Sl(i, u)), o), {});
}
function Nb(a, i, u, o) {
  if (!i.includes(u)) return null;
  const c = Db(u),
    f = jb(c, o),
    p = a[u];
  return Hn(a, p, f);
}
function pg(a, i) {
  const u = Eu(a.theme);
  return Object.keys(a)
    .map((o) => Nb(a, i, o, u))
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
  const u = (...o) =>
    (o.length === 0 ? [1] : o)
      .map((f) => {
        const p = i(f);
        return typeof p == 'number' ? `${p}px` : p;
      })
      .join(' ');
  return ((u.mui = !0), u);
}
function zu(...a) {
  const i = a.reduce(
      (o, c) => (
        c.filterProps.forEach((f) => {
          o[f] = c;
        }),
        o
      ),
      {}
    ),
    u = (o) => Object.keys(o).reduce((c, f) => (i[f] ? Cr(c, i[f](o)) : c), {});
  return ((u.propTypes = {}), (u.filterProps = a.reduce((o, c) => o.concat(c.filterProps), [])), u);
}
function Rn(a) {
  return typeof a != 'number' ? a : `${a}px solid`;
}
function _n(a, i) {
  return ve({ prop: a, themeKey: 'borders', transform: i });
}
const Ub = _n('border', Rn),
  Hb = _n('borderTop', Rn),
  Lb = _n('borderRight', Rn),
  kb = _n('borderBottom', Rn),
  $b = _n('borderLeft', Rn),
  Yb = _n('borderColor'),
  qb = _n('borderTopColor'),
  Gb = _n('borderRightColor'),
  Vb = _n('borderBottomColor'),
  Xb = _n('borderLeftColor'),
  Qb = _n('outline', Rn),
  Zb = _n('outlineColor'),
  Au = (a) => {
    if (a.borderRadius !== void 0 && a.borderRadius !== null) {
      const i = Dr(a.theme, 'shape.borderRadius', 4),
        u = (o) => ({ borderRadius: Sl(i, o) });
      return Hn(a, a.borderRadius, u);
    }
    return null;
  };
Au.propTypes = {};
Au.filterProps = ['borderRadius'];
zu(Ub, Hb, Lb, kb, $b, Yb, qb, Gb, Vb, Xb, Au, Qb, Zb);
const Mu = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      u = (o) => ({ gap: Sl(i, o) });
    return Hn(a, a.gap, u);
  }
  return null;
};
Mu.propTypes = {};
Mu.filterProps = ['gap'];
const Ou = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      u = (o) => ({ columnGap: Sl(i, o) });
    return Hn(a, a.columnGap, u);
  }
  return null;
};
Ou.propTypes = {};
Ou.filterProps = ['columnGap'];
const Ru = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = Dr(a.theme, 'spacing', 8),
      u = (o) => ({ rowGap: Sl(i, o) });
    return Hn(a, a.rowGap, u);
  }
  return null;
};
Ru.propTypes = {};
Ru.filterProps = ['rowGap'];
const Kb = ve({ prop: 'gridColumn' }),
  Jb = ve({ prop: 'gridRow' }),
  Wb = ve({ prop: 'gridAutoFlow' }),
  Fb = ve({ prop: 'gridAutoColumns' }),
  Pb = ve({ prop: 'gridAutoRows' }),
  Ib = ve({ prop: 'gridTemplateColumns' }),
  t2 = ve({ prop: 'gridTemplateRows' }),
  e2 = ve({ prop: 'gridTemplateAreas' }),
  n2 = ve({ prop: 'gridArea' });
zu(Mu, Ou, Ru, Kb, Jb, Wb, Fb, Pb, Ib, t2, e2, n2);
function yi(a, i) {
  return i === 'grey' ? i : a;
}
const a2 = ve({ prop: 'color', themeKey: 'palette', transform: yi }),
  l2 = ve({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: yi }),
  i2 = ve({ prop: 'backgroundColor', themeKey: 'palette', transform: yi });
zu(a2, l2, i2);
function gn(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const r2 = ve({ prop: 'width', transform: gn }),
  Nf = (a) => {
    if (a.maxWidth !== void 0 && a.maxWidth !== null) {
      const i = (u) => {
        const o = a.theme?.breakpoints?.values?.[u] || Cu[u];
        return o
          ? a.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${o}${a.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: gn(u) };
      };
      return Hn(a, a.maxWidth, i);
    }
    return null;
  };
Nf.filterProps = ['maxWidth'];
const o2 = ve({ prop: 'minWidth', transform: gn }),
  u2 = ve({ prop: 'height', transform: gn }),
  s2 = ve({ prop: 'maxHeight', transform: gn }),
  c2 = ve({ prop: 'minHeight', transform: gn });
ve({ prop: 'size', cssProperty: 'width', transform: gn });
ve({ prop: 'size', cssProperty: 'height', transform: gn });
const f2 = ve({ prop: 'boxSizing' });
zu(r2, Nf, o2, u2, s2, c2, f2);
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
function d2(...a) {
  const i = a.reduce((o, c) => o.concat(Object.keys(c)), []),
    u = new Set(i);
  return a.every((o) => u.size === Object.keys(o).length);
}
function p2(a, i) {
  return typeof a == 'function' ? a(i) : a;
}
function h2() {
  function a(u, o, c, f) {
    const p = { [u]: o, theme: c },
      h = f[u];
    if (!h) return { [u]: o };
    const { cssProperty: y = u, themeKey: g, transform: S, style: C } = h;
    if (o == null) return null;
    if (g === 'typography' && o === 'inherit') return { [u]: o };
    const A = Tu(c, g) || {};
    return C
      ? C(p)
      : Hn(p, o, (O) => {
          let E = cu(A, S, O);
          return (
            O === E && typeof O == 'string' && (E = cu(A, S, `${u}${O === 'default' ? '' : mt(O)}`, O)),
            y === !1 ? E : { [y]: E }
          );
        });
  }
  function i(u) {
    const { sx: o, theme: c = {}, nested: f } = u || {};
    if (!o) return null;
    const p = c.unstable_sxConfig ?? jr;
    function h(y) {
      let g = y;
      if (typeof y == 'function') g = y(c);
      else if (typeof y != 'object') return y;
      if (!g) return null;
      const S = dg(c.breakpoints),
        C = Object.keys(S);
      let A = S;
      return (
        Object.keys(g).forEach((j) => {
          const O = p2(g[j], c);
          if (O != null)
            if (typeof O == 'object')
              if (p[j]) A = Cr(A, a(j, O, c, p));
              else {
                const E = Hn({ theme: c }, O, (L) => ({ [j]: L }));
                d2(E, O) ? (A[j] = i({ sx: O, theme: c, nested: !0 })) : (A = Cr(A, E));
              }
            else A = Cr(A, a(j, O, c, p));
        }),
        !f && c.modularCssLayers ? { '@layer sx': hm(c, pf(C, A)) } : hm(c, pf(C, A))
      );
    }
    return Array.isArray(o) ? o.map(h) : h(o);
  }
  return i;
}
const xl = h2();
xl.filterProps = ['sx'];
function m2(a, i) {
  const u = this;
  if (u.vars) {
    if (!u.colorSchemes?.[a] || typeof u.getColorSchemeSelector != 'function') return {};
    let o = u.getColorSchemeSelector(a);
    return o === '&'
      ? i
      : ((o.includes('data-') || o.includes('.')) && (o = `*:where(${o.replace(/\s*&$/, '')}) &`), { [o]: i });
  }
  return u.palette.mode === a ? i : {};
}
function Nr(a = {}, ...i) {
  const { breakpoints: u = {}, palette: o = {}, spacing: c, shape: f = {}, ...p } = a,
    h = Cb(u),
    y = hg(c);
  let g = Xe(
    {
      breakpoints: h,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...o },
      spacing: y,
      shape: { ...Ab, ...f },
    },
    p
  );
  return (
    (g = zb(g)),
    (g.applyStyles = m2),
    (g = i.reduce((S, C) => Xe(S, C), g)),
    (g.unstable_sxConfig = { ...jr, ...p?.unstable_sxConfig }),
    (g.unstable_sx = function (C) {
      return xl({ sx: C, theme: this });
    }),
    g
  );
}
function g2(a) {
  return Object.keys(a).length === 0;
}
function y2(a = null) {
  const i = H.useContext(wf);
  return !i || g2(i) ? a : i;
}
const v2 = Nr();
function Uf(a = v2) {
  return y2(a);
}
const b2 = (a) => {
  const i = { systemProps: {}, otherProps: {} },
    u = a?.theme?.unstable_sxConfig ?? jr;
  return (
    Object.keys(a).forEach((o) => {
      u[o] ? (i.systemProps[o] = a[o]) : (i.otherProps[o] = a[o]);
    }),
    i
  );
};
function Hf(a) {
  const { sx: i, ...u } = a,
    { systemProps: o, otherProps: c } = b2(u);
  let f;
  return (
    Array.isArray(i)
      ? (f = [o, ...i])
      : typeof i == 'function'
        ? (f = (...p) => {
            const h = i(...p);
            return Zn(h) ? { ...o, ...h } : o;
          })
        : (f = { ...o, ...i }),
    { ...c, sx: f }
  );
}
const ym = (a) => a,
  S2 = () => {
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
  mg = S2();
function gg(a) {
  var i,
    u,
    o = '';
  if (typeof a == 'string' || typeof a == 'number') o += a;
  else if (typeof a == 'object')
    if (Array.isArray(a)) {
      var c = a.length;
      for (i = 0; i < c; i++) a[i] && (u = gg(a[i])) && (o && (o += ' '), (o += u));
    } else for (u in a) a[u] && (o && (o += ' '), (o += u));
  return o;
}
function kt() {
  for (var a, i, u = 0, o = '', c = arguments.length; u < c; u++)
    (a = arguments[u]) && (i = gg(a)) && (o && (o += ' '), (o += i));
  return o;
}
function x2(a = {}) {
  const { themeId: i, defaultTheme: u, defaultClassName: o = 'MuiBox-root', generateClassName: c } = a,
    f = sg('div', { shouldForwardProp: (h) => h !== 'theme' && h !== 'sx' && h !== 'as' })(xl);
  return H.forwardRef(function (y, g) {
    const S = Uf(u),
      { className: C, component: A = 'div', ...j } = Hf(y);
    return R.jsx(f, { as: A, ref: g, className: kt(C, c ? c(o) : o), theme: (i && S[i]) || S, ...j });
  });
}
const C2 = {
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
function Qe(a, i, u = 'Mui') {
  const o = C2[i];
  return o ? `${u}-${o}` : `${mg.generate(a)}-${i}`;
}
function rn(a, i, u = 'Mui') {
  const o = {};
  return (
    i.forEach((c) => {
      o[c] = Qe(a, c, u);
    }),
    o
  );
}
function yg(a) {
  const { variants: i, ...u } = a,
    o = { variants: i, style: yl(u), isProcessed: !0 };
  return (
    o.style === u ||
      (i &&
        i.forEach((c) => {
          typeof c.style != 'function' && (c.style = yl(c.style));
        })),
    o
  );
}
const T2 = Nr();
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
function E2(a) {
  return a ? (i, u) => u[a] : null;
}
function z2(a, i, u) {
  a.theme = M2(a.theme) ? u : a.theme[i] || a.theme;
}
function iu(a, i, u) {
  const o = typeof i == 'function' ? i(a) : i;
  if (Array.isArray(o)) return o.flatMap((c) => iu(a, c, u));
  if (Array.isArray(o?.variants)) {
    let c;
    if (o.isProcessed) c = u ? ml(o.style, u) : o.style;
    else {
      const { variants: f, ...p } = o;
      c = u ? ml(yl(p), u) : p;
    }
    return vg(a, o.variants, [c], u);
  }
  return o?.isProcessed ? (u ? ml(yl(o.style), u) : o.style) : u ? ml(yl(o), u) : o;
}
function vg(a, i, u = [], o = void 0) {
  let c;
  t: for (let f = 0; f < i.length; f += 1) {
    const p = i[f];
    if (typeof p.props == 'function') {
      if (((c ??= { ...a, ...a.ownerState, ownerState: a.ownerState }), !p.props(c))) continue;
    } else for (const h in p.props) if (a[h] !== p.props[h] && a.ownerState?.[h] !== p.props[h]) continue t;
    typeof p.style == 'function'
      ? ((c ??= { ...a, ...a.ownerState, ownerState: a.ownerState }), u.push(o ? ml(yl(p.style(c)), o) : p.style(c)))
      : u.push(o ? ml(yl(p.style), o) : p.style);
  }
  return u;
}
function bg(a = {}) {
  const { themeId: i, defaultTheme: u = T2, rootShouldForwardProp: o = af, slotShouldForwardProp: c = af } = a;
  function f(h) {
    z2(h, i, u);
  }
  return (h, y = {}) => {
    vb(h, (V) => V.filter((Z) => Z !== xl));
    const { name: g, slot: S, skipVariantsResolver: C, skipSx: A, overridesResolver: j = E2(R2(S)), ...O } = y,
      E = (g && g.startsWith('Mui')) || S ? 'components' : 'custom',
      L = C !== void 0 ? C : (S && S !== 'Root' && S !== 'root') || !1,
      q = A || !1;
    let W = af;
    S === 'Root' || S === 'root' ? (W = o) : S ? (W = c) : O2(h) && (W = void 0);
    const K = sg(h, { shouldForwardProp: W, label: A2(), ...O }),
      Y = (V) => {
        if (V.__emotion_real === V) return V;
        if (typeof V == 'function')
          return function (st) {
            return iu(st, V, st.theme.modularCssLayers ? E : void 0);
          };
        if (Zn(V)) {
          const Z = yg(V);
          return function (ct) {
            return Z.variants
              ? iu(ct, Z, ct.theme.modularCssLayers ? E : void 0)
              : ct.theme.modularCssLayers
                ? ml(Z.style, E)
                : Z.style;
          };
        }
        return V;
      },
      N = (...V) => {
        const Z = [],
          st = V.map(Y),
          ct = [];
        if (
          (Z.push(f),
          g &&
            j &&
            ct.push(function (F) {
              const et = F.theme.components?.[g]?.styleOverrides;
              if (!et) return null;
              const z = {};
              for (const J in et) z[J] = iu(F, et[J], F.theme.modularCssLayers ? 'theme' : void 0);
              return j(F, z);
            }),
          g &&
            !L &&
            ct.push(function (F) {
              const et = F.theme?.components?.[g]?.variants;
              return et ? vg(F, et, [], F.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          q || ct.push(xl),
          Array.isArray(st[0]))
        ) {
          const v = st.shift(),
            F = new Array(Z.length).fill(''),
            X = new Array(ct.length).fill('');
          let et;
          ((et = [...F, ...v, ...X]), (et.raw = [...F, ...v.raw, ...X]), Z.unshift(et));
        }
        const pt = [...Z, ...st, ...ct],
          ft = K(...pt);
        return (h.muiName && (ft.muiName = h.muiName), ft);
      };
    return (K.withConfig && (N.withConfig = K.withConfig), N);
  };
}
function A2(a, i) {
  return void 0;
}
function M2(a) {
  for (const i in a) return !1;
  return !0;
}
function O2(a) {
  return typeof a == 'string' && a.charCodeAt(0) > 96;
}
function R2(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const Sg = bg();
function Rr(a, i, u = !1) {
  const o = { ...i };
  for (const c in a)
    if (Object.prototype.hasOwnProperty.call(a, c)) {
      const f = c;
      if (f === 'components' || f === 'slots') o[f] = { ...a[f], ...o[f] };
      else if (f === 'componentsProps' || f === 'slotProps') {
        const p = a[f],
          h = i[f];
        if (!h) o[f] = p || {};
        else if (!p) o[f] = h;
        else {
          o[f] = { ...h };
          for (const y in p)
            if (Object.prototype.hasOwnProperty.call(p, y)) {
              const g = y;
              o[f][g] = Rr(p[g], h[g], u);
            }
        }
      } else
        f === 'className' && u && i.className
          ? (o.className = kt(a?.className, i?.className))
          : f === 'style' && u && i.style
            ? (o.style = { ...a?.style, ...i?.style })
            : o[f] === void 0 && (o[f] = a[f]);
    }
  return o;
}
function w2(a) {
  const { theme: i, name: u, props: o } = a;
  return !i || !i.components || !i.components[u] || !i.components[u].defaultProps
    ? o
    : Rr(i.components[u].defaultProps, o);
}
function xg({ props: a, name: i, defaultTheme: u, themeId: o }) {
  let c = Uf(u);
  return (o && (c = c[o] || c), w2({ theme: c, name: i, props: a }));
}
const Cg = typeof window < 'u' ? H.useLayoutEffect : H.useEffect;
function hi(a, i = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, u));
}
function Lf(a, i = 0, u = 1) {
  return hi(a, i, u);
}
function _2(a) {
  a = a.slice(1);
  const i = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, 'g');
  let u = a.match(i);
  return (
    u && u[0].length === 1 && (u = u.map((o) => o + o)),
    u
      ? `rgb${u.length === 4 ? 'a' : ''}(${u.map((o, c) => (c < 3 ? parseInt(o, 16) : Math.round((parseInt(o, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function Za(a) {
  if (a.type) return a;
  if (a.charAt(0) === '#') return Za(_2(a));
  const i = a.indexOf('('),
    u = a.substring(0, i);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(u)) throw new Error(bl(9, a));
  let o = a.substring(i + 1, a.length - 1),
    c;
  if (u === 'color') {
    if (
      ((o = o.split(' ')),
      (c = o.shift()),
      o.length === 4 && o[3].charAt(0) === '/' && (o[3] = o[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(c))
    )
      throw new Error(bl(10, c));
  } else o = o.split(',');
  return ((o = o.map((f) => parseFloat(f))), { type: u, values: o, colorSpace: c });
}
const B2 = (a) => {
    const i = Za(a);
    return i.values
      .slice(0, 3)
      .map((u, o) => (i.type.includes('hsl') && o !== 0 ? `${u}%` : u))
      .join(' ');
  },
  br = (a, i) => {
    try {
      return B2(a);
    } catch {
      return a;
    }
  };
function wu(a) {
  const { type: i, colorSpace: u } = a;
  let { values: o } = a;
  return (
    i.includes('rgb')
      ? (o = o.map((c, f) => (f < 3 ? parseInt(c, 10) : c)))
      : i.includes('hsl') && ((o[1] = `${o[1]}%`), (o[2] = `${o[2]}%`)),
    i.includes('color') ? (o = `${u} ${o.join(' ')}`) : (o = `${o.join(', ')}`),
    `${i}(${o})`
  );
}
function Tg(a) {
  a = Za(a);
  const { values: i } = a,
    u = i[0],
    o = i[1] / 100,
    c = i[2] / 100,
    f = o * Math.min(c, 1 - c),
    p = (g, S = (g + u / 30) % 12) => c - f * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let h = 'rgb';
  const y = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return (a.type === 'hsla' && ((h += 'a'), y.push(i[3])), wu({ type: h, values: y }));
}
function hf(a) {
  a = Za(a);
  let i = a.type === 'hsl' || a.type === 'hsla' ? Za(Tg(a)).values : a.values;
  return (
    (i = i.map((u) => (a.type !== 'color' && (u /= 255), u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3))
  );
}
function D2(a, i) {
  const u = hf(a),
    o = hf(i);
  return (Math.max(u, o) + 0.05) / (Math.min(u, o) + 0.05);
}
function fu(a, i) {
  return (
    (a = Za(a)),
    (i = Lf(i)),
    (a.type === 'rgb' || a.type === 'hsl') && (a.type += 'a'),
    a.type === 'color' ? (a.values[3] = `/${i}`) : (a.values[3] = i),
    wu(a)
  );
}
function fl(a, i, u) {
  try {
    return fu(a, i);
  } catch {
    return a;
  }
}
function _u(a, i) {
  if (((a = Za(a)), (i = Lf(i)), a.type.includes('hsl'))) a.values[2] *= 1 - i;
  else if (a.type.includes('rgb') || a.type.includes('color')) for (let u = 0; u < 3; u += 1) a.values[u] *= 1 - i;
  return wu(a);
}
function Qt(a, i, u) {
  try {
    return _u(a, i);
  } catch {
    return a;
  }
}
function Bu(a, i) {
  if (((a = Za(a)), (i = Lf(i)), a.type.includes('hsl'))) a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes('rgb')) for (let u = 0; u < 3; u += 1) a.values[u] += (255 - a.values[u]) * i;
  else if (a.type.includes('color')) for (let u = 0; u < 3; u += 1) a.values[u] += (1 - a.values[u]) * i;
  return wu(a);
}
function Zt(a, i, u) {
  try {
    return Bu(a, i);
  } catch {
    return a;
  }
}
function j2(a, i = 0.15) {
  return hf(a) > 0.5 ? _u(a, i) : Bu(a, i);
}
function Wo(a, i, u) {
  try {
    return j2(a, i);
  } catch {
    return a;
  }
}
const N2 = H.createContext(),
  U2 = () => H.useContext(N2) ?? !1,
  H2 = H.createContext(void 0);
function L2(a) {
  const { theme: i, name: u, props: o } = a;
  if (!i || !i.components || !i.components[u]) return o;
  const c = i.components[u];
  return c.defaultProps
    ? Rr(c.defaultProps, o, i.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? Rr(c, o, i.components.mergeClassNameAndStyle)
      : o;
}
function k2({ props: a, name: i }) {
  const u = H.useContext(H2);
  return L2({ props: a, name: i, theme: { components: u } });
}
let vm = 0;
function $2(a) {
  const [i, u] = H.useState(a),
    o = a || i;
  return (
    H.useEffect(() => {
      i == null && ((vm += 1), u(`mui-${vm}`));
    }, [i]),
    o
  );
}
const Y2 = { ...uf },
  bm = Y2.useId;
function Eg(a) {
  if (bm !== void 0) {
    const i = bm();
    return a ?? i;
  }
  return $2(a);
}
const Sm = { theme: void 0 };
function q2(a) {
  let i, u;
  return function (c) {
    let f = i;
    return ((f === void 0 || c.theme !== u) && ((Sm.theme = c.theme), (f = yg(a(Sm))), (i = f), (u = c.theme)), f);
  };
}
function G2(a = '') {
  function i(...o) {
    if (!o.length) return '';
    const c = o[0];
    return typeof c == 'string' &&
      !c.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${a ? `${a}-` : ''}${c}${i(...o.slice(1))})`
      : `, ${c}`;
  }
  return (o, ...c) => `var(--${a ? `${a}-` : ''}${o}${i(...c)})`;
}
const xm = (a, i, u, o = []) => {
    let c = a;
    i.forEach((f, p) => {
      p === i.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = u)
          : c && typeof c == 'object' && (c[f] = u)
        : c && typeof c == 'object' && (c[f] || (c[f] = o.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  V2 = (a, i, u) => {
    function o(c, f = [], p = []) {
      Object.entries(c).forEach(([h, y]) => {
        (!u || (u && !u([...f, h]))) &&
          y != null &&
          (typeof y == 'object' && Object.keys(y).length > 0
            ? o(y, [...f, h], Array.isArray(y) ? [...p, h] : p)
            : i([...f, h], y, p));
      });
    }
    o(a);
  },
  X2 = (a, i) =>
    typeof i == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((o) => a.includes(o)) ||
        a[a.length - 1].toLowerCase().includes('opacity')
        ? i
        : `${i}px`
      : i;
function lf(a, i) {
  const { prefix: u, shouldSkipGeneratingVar: o } = i || {},
    c = {},
    f = {},
    p = {};
  return (
    V2(
      a,
      (h, y, g) => {
        if ((typeof y == 'string' || typeof y == 'number') && (!o || !o(h, y))) {
          const S = `--${u ? `${u}-` : ''}${h.join('-')}`,
            C = X2(h, y);
          (Object.assign(c, { [S]: C }), xm(f, h, `var(${S})`, g), xm(p, h, `var(${S}, ${C})`, g));
        }
      },
      (h) => h[0] === 'vars'
    ),
    { css: c, vars: f, varsWithDefaults: p }
  );
}
function Q2(a, i = {}) {
  const { getSelector: u = q, disableCssColorScheme: o, colorSchemeSelector: c, enableContrastVars: f } = i,
    { colorSchemes: p = {}, components: h, defaultColorScheme: y = 'light', ...g } = a,
    { vars: S, css: C, varsWithDefaults: A } = lf(g, i);
  let j = A;
  const O = {},
    { [y]: E, ...L } = p;
  if (
    (Object.entries(L || {}).forEach(([Y, N]) => {
      const { vars: V, css: Z, varsWithDefaults: st } = lf(N, i);
      ((j = Xe(j, st)), (O[Y] = { css: Z, vars: V }));
    }),
    E)
  ) {
    const { css: Y, vars: N, varsWithDefaults: V } = lf(E, i);
    ((j = Xe(j, V)), (O[y] = { css: Y, vars: N }));
  }
  function q(Y, N) {
    let V = c;
    if (
      (c === 'class' && (V = '.%s'),
      c === 'data' && (V = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (V = `[${c}="%s"]`),
      Y)
    ) {
      if (V === 'media')
        return a.defaultColorScheme === Y
          ? ':root'
          : { [`@media (prefers-color-scheme: ${p[Y]?.palette?.mode || Y})`]: { ':root': N } };
      if (V) return a.defaultColorScheme === Y ? `:root, ${V.replace('%s', String(Y))}` : V.replace('%s', String(Y));
    }
    return ':root';
  }
  return {
    vars: j,
    generateThemeVars: () => {
      let Y = { ...S };
      return (
        Object.entries(O).forEach(([, { vars: N }]) => {
          Y = Xe(Y, N);
        }),
        Y
      );
    },
    generateStyleSheets: () => {
      const Y = [],
        N = a.defaultColorScheme || 'light';
      function V(ct, pt) {
        Object.keys(pt).length && Y.push(typeof ct == 'string' ? { [ct]: { ...pt } } : ct);
      }
      V(u(void 0, { ...C }), C);
      const { [N]: Z, ...st } = O;
      if (Z) {
        const { css: ct } = Z,
          pt = p[N]?.palette?.mode,
          ft = !o && pt ? { colorScheme: pt, ...ct } : { ...ct };
        V(u(N, { ...ft }), ft);
      }
      return (
        Object.entries(st).forEach(([ct, { css: pt }]) => {
          const ft = p[ct]?.palette?.mode,
            v = !o && ft ? { colorScheme: ft, ...pt } : { ...pt };
          V(u(ct, { ...v }), v);
        }),
        f &&
          Y.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        Y
      );
    },
  };
}
function Z2(a) {
  return function (u) {
    return a === 'media'
      ? `@media (prefers-color-scheme: ${u})`
      : a
        ? a.startsWith('data-') && !a.includes('%s')
          ? `[${a}="${u}"] &`
          : a === 'class'
            ? `.${u} &`
            : a === 'data'
              ? `[data-${u}] &`
              : `${a.replace('%s', u)} &`
        : '&';
  };
}
function on(a, i, u = void 0) {
  const o = {};
  for (const c in a) {
    const f = a[c];
    let p = '',
      h = !0;
    for (let y = 0; y < f.length; y += 1) {
      const g = f[y];
      g && ((p += (h === !0 ? '' : ' ') + i(g)), (h = !1), u && u[g] && (p += ' ' + u[g]));
    }
    o[c] = p;
  }
  return o;
}
const K2 = Nr(),
  J2 = Sg('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[`maxWidth${mt(String(u.maxWidth))}`], u.fixed && i.fixed, u.disableGutters && i.disableGutters];
    },
  }),
  W2 = (a) => xg({ props: a, name: 'MuiContainer', defaultTheme: K2 }),
  F2 = (a, i) => {
    const u = (y) => Qe(i, y),
      { classes: o, fixed: c, disableGutters: f, maxWidth: p } = a,
      h = { root: ['root', p && `maxWidth${mt(String(p))}`, c && 'fixed', f && 'disableGutters'] };
    return on(h, u, o);
  };
function P2(a = {}) {
  const { createStyledComponent: i = J2, useThemeProps: u = W2, componentName: o = 'MuiContainer' } = a,
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
          const S = g,
            C = p.breakpoints.values[S];
          return (C !== 0 && (y[p.breakpoints.up(S)] = { maxWidth: `${C}${p.breakpoints.unit}` }), y);
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
    const g = u(h),
      {
        className: S,
        component: C = 'div',
        disableGutters: A = !1,
        fixed: j = !1,
        maxWidth: O = 'lg',
        classes: E,
        ...L
      } = g,
      q = { ...g, component: C, disableGutters: A, fixed: j, maxWidth: O },
      W = F2(q, o);
    return R.jsx(c, { as: C, ownerState: q, className: kt(W.root, S), ref: y, ...L });
  });
}
const I2 = Nr(),
  tS = Sg('div', { name: 'MuiStack', slot: 'Root' });
function eS(a) {
  return xg({ props: a, name: 'MuiStack', defaultTheme: I2 });
}
function nS(a, i) {
  const u = H.Children.toArray(a).filter(Boolean);
  return u.reduce(
    (o, c, f) => (o.push(c), f < u.length - 1 && o.push(H.cloneElement(i, { key: `separator-${f}` })), o),
    []
  );
}
const aS = (a) => ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[a],
  lS = ({ ownerState: a, theme: i }) => {
    let u = {
      display: 'flex',
      flexDirection: 'column',
      ...Hn({ theme: i }, nf({ values: a.direction, breakpoints: i.breakpoints.values }), (o) => ({
        flexDirection: o,
      })),
    };
    if (a.spacing) {
      const o = Eu(i),
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
        Object.keys(f).forEach((y, g, S) => {
          if (!f[y]) {
            const A = g > 0 ? f[S[g - 1]] : 'column';
            f[y] = A;
          }
        }),
        (u = Xe(
          u,
          Hn({ theme: i }, p, (y, g) =>
            a.useFlexGap
              ? { gap: Sl(o, y) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': { [`margin${aS(g ? f[g] : a.direction)}`]: Sl(o, y) },
                }
          )
        )));
    }
    return ((u = Ob(i.breakpoints, u)), u);
  };
function iS(a = {}) {
  const { createStyledComponent: i = tS, useThemeProps: u = eS, componentName: o = 'MuiStack' } = a,
    c = () => on({ root: ['root'] }, (y) => Qe(o, y), {}),
    f = i(lS);
  return H.forwardRef(function (y, g) {
    const S = u(y),
      C = Hf(S),
      {
        component: A = 'div',
        direction: j = 'column',
        spacing: O = 0,
        divider: E,
        children: L,
        className: q,
        useFlexGap: W = !1,
        ...K
      } = C,
      Y = { direction: j, spacing: O, useFlexGap: W },
      N = c();
    return R.jsx(f, { as: A, ownerState: Y, ref: g, className: kt(N.root, q), ...K, children: E ? nS(L, E) : L });
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
function Cm(a, i, u, o) {
  const c = o.light || o,
    f = o.dark || o * 1.5;
  a[i] ||
    (a.hasOwnProperty(u)
      ? (a[i] = a[u])
      : i === 'light'
        ? (a.light = Bu(a.main, c))
        : i === 'dark' && (a.dark = _u(a.main, f)));
}
function Tm(a, i, u, o, c) {
  const f = c.light || c,
    p = c.dark || c * 1.5;
  i[u] ||
    (i.hasOwnProperty(o)
      ? (i[u] = i[o])
      : u === 'light'
        ? (i.light = `color-mix(in ${a}, ${i.main}, #fff ${(f * 100).toFixed(0)}%)`)
        : u === 'dark' && (i.dark = `color-mix(in ${a}, ${i.main}, #000 ${(p * 100).toFixed(0)}%)`));
}
function rS(a = 'light') {
  return a === 'dark'
    ? { main: si[200], light: si[50], dark: si[400] }
    : { main: si[700], light: si[400], dark: si[800] };
}
function oS(a = 'light') {
  return a === 'dark'
    ? { main: ui[200], light: ui[50], dark: ui[400] }
    : { main: ui[500], light: ui[300], dark: ui[700] };
}
function uS(a = 'light') {
  return a === 'dark'
    ? { main: oi[500], light: oi[300], dark: oi[700] }
    : { main: oi[700], light: oi[400], dark: oi[800] };
}
function sS(a = 'light') {
  return a === 'dark'
    ? { main: ci[400], light: ci[300], dark: ci[700] }
    : { main: ci[700], light: ci[500], dark: ci[900] };
}
function cS(a = 'light') {
  return a === 'dark'
    ? { main: fi[400], light: fi[300], dark: fi[700] }
    : { main: fi[800], light: fi[500], dark: fi[900] };
}
function fS(a = 'light') {
  return a === 'dark'
    ? { main: yr[400], light: yr[300], dark: yr[700] }
    : { main: '#ed6c02', light: yr[500], dark: yr[900] };
}
function dS(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function kf(a) {
  const { mode: i = 'light', contrastThreshold: u = 3, tonalOffset: o = 0.2, colorSpace: c, ...f } = a,
    p = a.primary || rS(i),
    h = a.secondary || oS(i),
    y = a.error || uS(i),
    g = a.info || sS(i),
    S = a.success || cS(i),
    C = a.warning || fS(i);
  function A(L) {
    return c ? dS(L) : D2(L, mf.text.primary) >= u ? mf.text.primary : Ag.text.primary;
  }
  const j = ({ color: L, name: q, mainShade: W = 500, lightShade: K = 300, darkShade: Y = 700 }) => {
    if (((L = { ...L }), !L.main && L[W] && (L.main = L[W]), !L.hasOwnProperty('main')))
      throw new Error(bl(11, q ? ` (${q})` : '', W));
    if (typeof L.main != 'string') throw new Error(bl(12, q ? ` (${q})` : '', JSON.stringify(L.main)));
    return (
      c ? (Tm(c, L, 'light', K, o), Tm(c, L, 'dark', Y, o)) : (Cm(L, 'light', K, o), Cm(L, 'dark', Y, o)),
      L.contrastText || (L.contrastText = A(L.main)),
      L
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
        warning: j({ color: C, name: 'warning' }),
        info: j({ color: g, name: 'info' }),
        success: j({ color: S, name: 'success' }),
        grey: Sv,
        contrastThreshold: u,
        getContrastText: A,
        augmentColor: j,
        tonalOffset: o,
        ...O,
      },
      f
    )
  );
}
function pS(a) {
  const i = {};
  return (
    Object.entries(a).forEach((o) => {
      const [c, f] = o;
      typeof f == 'object' &&
        (i[c] =
          `${f.fontStyle ? `${f.fontStyle} ` : ''}${f.fontVariant ? `${f.fontVariant} ` : ''}${f.fontWeight ? `${f.fontWeight} ` : ''}${f.fontStretch ? `${f.fontStretch} ` : ''}${f.fontSize || ''}${f.lineHeight ? `/${f.lineHeight} ` : ''}${f.fontFamily || ''}`);
    }),
    i
  );
}
function hS(a, i) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [a.up('sm')]: { minHeight: 64 },
    },
    ...i,
  };
}
function mS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Em = { textTransform: 'uppercase' },
  zm = '"Roboto", "Helvetica", "Arial", sans-serif';
function gS(a, i) {
  const {
      fontFamily: u = zm,
      fontSize: o = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: h = 700,
      htmlFontSize: y = 16,
      allVariants: g,
      pxToRem: S,
      ...C
    } = typeof i == 'function' ? i(a) : i,
    A = o / 14,
    j = S || ((L) => `${(L / y) * A}rem`),
    O = (L, q, W, K, Y) => ({
      fontFamily: u,
      fontWeight: L,
      fontSize: j(q),
      lineHeight: W,
      ...(u === zm ? { letterSpacing: `${mS(K / q)}em` } : {}),
      ...Y,
      ...g,
    }),
    E = {
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
      fontFamily: u,
      fontSize: o,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: h,
      ...E,
    },
    C,
    { clone: !1 }
  );
}
const yS = 0.2,
  vS = 0.14,
  bS = 0.12;
function oe(...a) {
  return [
    `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${yS})`,
    `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${vS})`,
    `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${bS})`,
  ].join(',');
}
const SS = [
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
  xS = {
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
function CS(a) {
  if (!a) return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function TS(a) {
  const i = { ...xS, ...a.easing },
    u = { ...Og, ...a.duration };
  return {
    getAutoHeightDuration: CS,
    create: (c = ['all'], f = {}) => {
      const { duration: p = u.standard, easing: h = i.easeInOut, delay: y = 0, ...g } = f;
      return (Array.isArray(c) ? c : [c])
        .map((S) => `${S} ${typeof p == 'string' ? p : Am(p)} ${h} ${typeof y == 'string' ? y : Am(y)}`)
        .join(',');
    },
    ...a,
    easing: i,
    duration: u,
  };
}
const ES = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function zS(a) {
  return (
    Zn(a) || typeof a > 'u' || typeof a == 'string' || typeof a == 'boolean' || typeof a == 'number' || Array.isArray(a)
  );
}
function Rg(a = {}) {
  const i = { ...a };
  function u(o) {
    const c = Object.entries(o);
    for (let f = 0; f < c.length; f++) {
      const [p, h] = c[f];
      !zS(h) || p.startsWith('unstable_') ? delete o[p] : Zn(h) && ((o[p] = { ...h }), u(o[p]));
    }
  }
  return (
    u(i),
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
const AS = (a) => {
  if (!Number.isNaN(+a)) return +a;
  const i = a.match(/\d*\.?\d+/g);
  if (!i) return 0;
  let u = 0;
  for (let o = 0; o < i.length; o += 1) u += +i[o];
  return u;
};
function MS(a) {
  Object.assign(a, {
    alpha(i, u) {
      const o = this || a;
      return o.colorSpace
        ? `oklch(from ${i} l c h / ${typeof u == 'string' ? `calc(${u})` : u})`
        : o.vars
          ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof u == 'string' ? `calc(${u})` : u})`
          : fu(i, AS(u));
    },
    lighten(i, u) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${i}, #fff ${Mm(u)})` : Bu(i, u);
    },
    darken(i, u) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${i}, #000 ${Mm(u)})` : _u(i, u);
    },
  });
}
function gf(a = {}, ...i) {
  const {
    breakpoints: u,
    mixins: o = {},
    spacing: c,
    palette: f = {},
    transitions: p = {},
    typography: h = {},
    shape: y,
    colorSpace: g,
    ...S
  } = a;
  if (a.vars && a.generateThemeVars === void 0) throw new Error(bl(20));
  const C = kf({ ...f, colorSpace: g }),
    A = Nr(a);
  let j = Xe(A, {
    mixins: hS(A.breakpoints, o),
    palette: C,
    shadows: SS.slice(),
    typography: gS(C, h),
    transitions: TS(p),
    zIndex: { ...ES },
  });
  return (
    (j = Xe(j, S)),
    (j = i.reduce((O, E) => Xe(O, E), j)),
    (j.unstable_sxConfig = { ...jr, ...S?.unstable_sxConfig }),
    (j.unstable_sx = function (E) {
      return xl({ sx: E, theme: this });
    }),
    (j.toRuntimeSource = Rg),
    MS(j),
    j
  );
}
function yf(a) {
  let i;
  return (a < 1 ? (i = 5.11916 * a ** 2) : (i = 4.5 * Math.log(a + 1) + 2), Math.round(i * 10) / 1e3);
}
const OS = [...Array(25)].map((a, i) => {
  if (i === 0) return 'none';
  const u = yf(i);
  return `linear-gradient(rgba(255 255 255 / ${u}), rgba(255 255 255 / ${u}))`;
});
function wg(a) {
  return {
    inputPlaceholder: a === 'dark' ? 0.5 : 0.42,
    inputUnderline: a === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: a === 'dark' ? 0.2 : 0.12,
    switchTrack: a === 'dark' ? 0.3 : 0.38,
  };
}
function _g(a) {
  return a === 'dark' ? OS : [];
}
function RS(a) {
  const { palette: i = { mode: 'light' }, opacity: u, overlays: o, colorSpace: c, ...f } = a,
    p = kf({ ...i, colorSpace: c });
  return { palette: p, opacity: { ...wg(p.mode), ...u }, overlays: o || _g(p.mode), ...f };
}
function wS(a) {
  return (
    !!a[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!a[0].match(/sxConfig$/) ||
    (a[0] === 'palette' && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const _S = (a) => [
    ...[...Array(25)].map((i, u) => `--${a ? `${a}-` : ''}overlays-${u}`),
    `--${a ? `${a}-` : ''}palette-AppBar-darkBg`,
    `--${a ? `${a}-` : ''}palette-AppBar-darkColor`,
  ],
  BS = (a) => (i, u) => {
    const o = a.rootSelector || ':root',
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
            ((p[h] = u[h]), delete u[h]);
          }),
          f === 'media'
            ? { [o]: u, '@media (prefers-color-scheme: dark)': { [o]: p } }
            : f
              ? { [f.replace('%s', i)]: p, [`${o}, ${f.replace('%s', i)}`]: u }
              : { [o]: { ...u, ...p } }
        );
      }
      if (f && f !== 'media') return `${o}, ${f.replace('%s', String(i))}`;
    } else if (i) {
      if (f === 'media') return { [`@media (prefers-color-scheme: ${String(i)})`]: { [o]: u } };
      if (f) return f.replace('%s', String(i));
    }
    return o;
  };
function DS(a, i) {
  i.forEach((u) => {
    a[u] || (a[u] = {});
  });
}
function $(a, i, u) {
  !a[i] && u && (a[i] = u);
}
function Sr(a) {
  return typeof a != 'string' || !a.startsWith('hsl') ? a : Tg(a);
}
function ma(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = br(Sr(a[i])));
}
function jS(a) {
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
  NS = (a = 'mui') => G2(a);
function rf(a, i, u, o, c) {
  if (!u) return;
  u = u === !0 ? {} : u;
  const f = c === 'dark' ? 'dark' : 'light';
  if (!o) {
    i[c] = RS({ ...u, palette: { mode: f, ...u?.palette }, colorSpace: a });
    return;
  }
  const { palette: p, ...h } = gf({ ...o, palette: { mode: f, ...u?.palette }, colorSpace: a });
  return ((i[c] = { ...u, palette: p, opacity: { ...wg(f), ...u?.opacity }, overlays: u?.overlays || _g(f) }), h);
}
function US(a = {}, ...i) {
  const {
      colorSchemes: u = { light: !0 },
      defaultColorScheme: o,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      nativeColor: p = !1,
      shouldSkipGeneratingVar: h = wS,
      colorSchemeSelector: y = u.light && u.dark ? 'media' : void 0,
      rootSelector: g = ':root',
      ...S
    } = a,
    C = Object.keys(u)[0],
    A = o || (u.light && C !== 'light' ? 'light' : C),
    j = NS(f),
    { [A]: O, light: E, dark: L, ...q } = u,
    W = { ...q };
  let K = O;
  if ((((A === 'dark' && !('dark' in u)) || (A === 'light' && !('light' in u))) && (K = !0), !K))
    throw new Error(bl(21, A));
  let Y;
  p && (Y = 'oklch');
  const N = rf(Y, W, K, S, A);
  (E && !W.light && rf(Y, W, E, void 0, 'light'), L && !W.dark && rf(Y, W, L, void 0, 'dark'));
  let V = {
    defaultColorScheme: A,
    ...N,
    cssVarPrefix: f,
    colorSchemeSelector: y,
    rootSelector: g,
    getCssVar: j,
    colorSchemes: W,
    font: { ...pS(N.typography), ...N.font },
    spacing: jS(S.spacing),
  };
  (Object.keys(V.colorSchemes).forEach((ft) => {
    const v = V.colorSchemes[ft].palette,
      F = (et) => {
        const z = et.split('-'),
          J = z[1],
          I = z[2];
        return j(et, v[J][I]);
      };
    (v.mode === 'light' && ($(v.common, 'background', '#fff'), $(v.common, 'onBackground', '#000')),
      v.mode === 'dark' && ($(v.common, 'background', '#000'), $(v.common, 'onBackground', '#fff')));
    function X(et, z, J) {
      if (Y) {
        let I;
        return (
          et === fl && (I = `transparent ${((1 - J) * 100).toFixed(0)}%`),
          et === Qt && (I = `#000 ${(J * 100).toFixed(0)}%`),
          et === Zt && (I = `#fff ${(J * 100).toFixed(0)}%`),
          `color-mix(in ${Y}, ${z}, ${I})`
        );
      }
      return et(z, J);
    }
    if (
      (DS(v, [
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
        $(v.Alert, 'errorFilledBg', F('palette-error-main')),
        $(v.Alert, 'infoFilledBg', F('palette-info-main')),
        $(v.Alert, 'successFilledBg', F('palette-success-main')),
        $(v.Alert, 'warningFilledBg', F('palette-warning-main')),
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
        $(v.Alert, 'errorIconColor', F('palette-error-main')),
        $(v.Alert, 'infoIconColor', F('palette-info-main')),
        $(v.Alert, 'successIconColor', F('palette-success-main')),
        $(v.Alert, 'warningIconColor', F('palette-warning-main')),
        $(v.AppBar, 'defaultBg', F('palette-grey-100')),
        $(v.Avatar, 'defaultBg', F('palette-grey-400')),
        $(v.Button, 'inheritContainedBg', F('palette-grey-300')),
        $(v.Button, 'inheritContainedHoverBg', F('palette-grey-A100')),
        $(v.Chip, 'defaultBorder', F('palette-grey-400')),
        $(v.Chip, 'defaultAvatarColor', F('palette-grey-700')),
        $(v.Chip, 'defaultIconColor', F('palette-grey-700')),
        $(v.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        $(v.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        $(v.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        $(v.LinearProgress, 'primaryBg', X(Zt, v.primary.main, 0.62)),
        $(v.LinearProgress, 'secondaryBg', X(Zt, v.secondary.main, 0.62)),
        $(v.LinearProgress, 'errorBg', X(Zt, v.error.main, 0.62)),
        $(v.LinearProgress, 'infoBg', X(Zt, v.info.main, 0.62)),
        $(v.LinearProgress, 'successBg', X(Zt, v.success.main, 0.62)),
        $(v.LinearProgress, 'warningBg', X(Zt, v.warning.main, 0.62)),
        $(v.Skeleton, 'bg', Y ? X(fl, v.text.primary, 0.11) : `rgba(${F('palette-text-primaryChannel')} / 0.11)`),
        $(v.Slider, 'primaryTrack', X(Zt, v.primary.main, 0.62)),
        $(v.Slider, 'secondaryTrack', X(Zt, v.secondary.main, 0.62)),
        $(v.Slider, 'errorTrack', X(Zt, v.error.main, 0.62)),
        $(v.Slider, 'infoTrack', X(Zt, v.info.main, 0.62)),
        $(v.Slider, 'successTrack', X(Zt, v.success.main, 0.62)),
        $(v.Slider, 'warningTrack', X(Zt, v.warning.main, 0.62)));
      const et = Y ? X(Qt, v.background.default, 0.6825) : Wo(v.background.default, 0.8);
      ($(v.SnackbarContent, 'bg', et),
        $(
          v.SnackbarContent,
          'color',
          Vn(() => (Y ? mf.text.primary : v.getContrastText(et)))
        ),
        $(v.SpeedDialAction, 'fabHoverBg', Wo(v.background.paper, 0.15)),
        $(v.StepConnector, 'border', F('palette-grey-400')),
        $(v.StepContent, 'border', F('palette-grey-400')),
        $(v.Switch, 'defaultColor', F('palette-common-white')),
        $(v.Switch, 'defaultDisabledColor', F('palette-grey-100')),
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
        $(v.Alert, 'errorFilledBg', F('palette-error-dark')),
        $(v.Alert, 'infoFilledBg', F('palette-info-dark')),
        $(v.Alert, 'successFilledBg', F('palette-success-dark')),
        $(v.Alert, 'warningFilledBg', F('palette-warning-dark')),
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
        $(v.Alert, 'errorIconColor', F('palette-error-main')),
        $(v.Alert, 'infoIconColor', F('palette-info-main')),
        $(v.Alert, 'successIconColor', F('palette-success-main')),
        $(v.Alert, 'warningIconColor', F('palette-warning-main')),
        $(v.AppBar, 'defaultBg', F('palette-grey-900')),
        $(v.AppBar, 'darkBg', F('palette-background-paper')),
        $(v.AppBar, 'darkColor', F('palette-text-primary')),
        $(v.Avatar, 'defaultBg', F('palette-grey-600')),
        $(v.Button, 'inheritContainedBg', F('palette-grey-800')),
        $(v.Button, 'inheritContainedHoverBg', F('palette-grey-700')),
        $(v.Chip, 'defaultBorder', F('palette-grey-700')),
        $(v.Chip, 'defaultAvatarColor', F('palette-grey-300')),
        $(v.Chip, 'defaultIconColor', F('palette-grey-300')),
        $(v.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        $(v.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        $(v.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        $(v.LinearProgress, 'primaryBg', X(Qt, v.primary.main, 0.5)),
        $(v.LinearProgress, 'secondaryBg', X(Qt, v.secondary.main, 0.5)),
        $(v.LinearProgress, 'errorBg', X(Qt, v.error.main, 0.5)),
        $(v.LinearProgress, 'infoBg', X(Qt, v.info.main, 0.5)),
        $(v.LinearProgress, 'successBg', X(Qt, v.success.main, 0.5)),
        $(v.LinearProgress, 'warningBg', X(Qt, v.warning.main, 0.5)),
        $(v.Skeleton, 'bg', Y ? X(fl, v.text.primary, 0.13) : `rgba(${F('palette-text-primaryChannel')} / 0.13)`),
        $(v.Slider, 'primaryTrack', X(Qt, v.primary.main, 0.5)),
        $(v.Slider, 'secondaryTrack', X(Qt, v.secondary.main, 0.5)),
        $(v.Slider, 'errorTrack', X(Qt, v.error.main, 0.5)),
        $(v.Slider, 'infoTrack', X(Qt, v.info.main, 0.5)),
        $(v.Slider, 'successTrack', X(Qt, v.success.main, 0.5)),
        $(v.Slider, 'warningTrack', X(Qt, v.warning.main, 0.5)));
      const et = Y ? X(Zt, v.background.default, 0.985) : Wo(v.background.default, 0.98);
      ($(v.SnackbarContent, 'bg', et),
        $(
          v.SnackbarContent,
          'color',
          Vn(() => (Y ? Ag.text.primary : v.getContrastText(et)))
        ),
        $(v.SpeedDialAction, 'fabHoverBg', Wo(v.background.paper, 0.15)),
        $(v.StepConnector, 'border', F('palette-grey-600')),
        $(v.StepContent, 'border', F('palette-grey-600')),
        $(v.Switch, 'defaultColor', F('palette-grey-300')),
        $(v.Switch, 'defaultDisabledColor', F('palette-grey-600')),
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
  const Z = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: h,
      getSelector: BS(V),
      enableContrastVars: p,
    },
    { vars: st, generateThemeVars: ct, generateStyleSheets: pt } = Q2(V, Z);
  return (
    (V.vars = st),
    Object.entries(V.colorSchemes[V.defaultColorScheme]).forEach(([ft, v]) => {
      V[ft] = v;
    }),
    (V.generateThemeVars = ct),
    (V.generateStyleSheets = pt),
    (V.generateSpacing = function () {
      return hg(S.spacing, Eu(this));
    }),
    (V.getColorSchemeSelector = Z2(y)),
    (V.spacing = V.generateSpacing()),
    (V.shouldSkipGeneratingVar = h),
    (V.unstable_sxConfig = { ...jr, ...S?.unstable_sxConfig }),
    (V.unstable_sx = function (v) {
      return xl({ sx: v, theme: this });
    }),
    (V.toRuntimeSource = Rg),
    V
  );
}
function Om(a, i, u) {
  a.colorSchemes &&
    u &&
    (a.colorSchemes[i] = { ...(u !== !0 && u), palette: kf({ ...(u === !0 ? {} : u.palette), mode: i }) });
}
function Bg(a = {}, ...i) {
  const {
      palette: u,
      cssVariables: o = !1,
      colorSchemes: c = u ? void 0 : { light: !0 },
      defaultColorScheme: f = u?.mode,
      ...p
    } = a,
    h = f || 'light',
    y = c?.[h],
    g = { ...c, ...(u ? { [h]: { ...(typeof y != 'boolean' && y), palette: u } } : void 0) };
  if (o === !1) {
    if (!('colorSchemes' in a)) return gf(a, ...i);
    let S = u;
    'palette' in a || (g[h] && (g[h] !== !0 ? (S = g[h].palette) : h === 'dark' && (S = { mode: 'dark' })));
    const C = gf({ ...a, palette: S }, ...i);
    return (
      (C.defaultColorScheme = h),
      (C.colorSchemes = g),
      C.palette.mode === 'light' &&
        ((C.colorSchemes.light = { ...(g.light !== !0 && g.light), palette: C.palette }), Om(C, 'dark', g.dark)),
      C.palette.mode === 'dark' &&
        ((C.colorSchemes.dark = { ...(g.dark !== !0 && g.dark), palette: C.palette }), Om(C, 'light', g.light)),
      C
    );
  }
  return (
    !u && !('light' in g) && h === 'light' && (g.light = !0),
    US({ ...p, colorSchemes: g, defaultColorScheme: h, ...(typeof o != 'boolean' && o) }, ...i)
  );
}
const Dg = Bg();
function jg() {
  const a = Uf(Dg);
  return a[zf] || a;
}
function $f(a) {
  return a !== 'ownerState' && a !== 'theme' && a !== 'sx' && a !== 'as';
}
const Yf = (a) => $f(a) && a !== 'classes',
  _t = bg({ themeId: zf, defaultTheme: Dg, rootShouldForwardProp: Yf });
function HS() {
  return Hf;
}
const ye = q2;
function un(a) {
  return k2(a);
}
function ru(a) {
  return (a && a.ownerDocument) || document;
}
function Ng(a) {
  const { controlled: i, default: u, name: o, state: c = 'value' } = a,
    { current: f } = H.useRef(i !== void 0),
    [p, h] = H.useState(u),
    y = f ? i : p,
    g = H.useCallback((S) => {
      f || h(S);
    }, []);
  return [y, g];
}
function vl(a) {
  const i = H.useRef(a);
  return (
    Cg(() => {
      i.current = a;
    }),
    H.useRef((...u) => (0, i.current)(...u)).current
  );
}
function Si(...a) {
  const i = H.useRef(void 0),
    u = H.useCallback((o) => {
      const c = a.map((f) => {
        if (f == null) return null;
        if (typeof f == 'function') {
          const p = f,
            h = p(o);
          return typeof h == 'function'
            ? h
            : () => {
                p(null);
              };
        }
        return (
          (f.current = o),
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
      a.every((o) => o == null)
        ? null
        : (o) => {
            (i.current && (i.current(), (i.current = void 0)), o != null && (i.current = u(o)));
          },
    a
  );
}
function Ug(a, i) {
  if (a == null) return {};
  var u = {};
  for (var o in a)
    if ({}.hasOwnProperty.call(a, o)) {
      if (i.indexOf(o) !== -1) continue;
      u[o] = a[o];
    }
  return u;
}
function vf(a, i) {
  return (
    (vf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return ((u.__proto__ = o), u);
        }),
    vf(a, i)
  );
}
function Hg(a, i) {
  ((a.prototype = Object.create(i.prototype)), (a.prototype.constructor = a), vf(a, i));
}
var LS = Km();
const Fo = Zm(LS),
  Rm = { disabled: !1 },
  du = Ue.createContext(null);
var kS = function (i) {
    return i.scrollTop;
  },
  xr = 'unmounted',
  pl = 'exited',
  hl = 'entering',
  mi = 'entered',
  bf = 'exiting',
  ya = (function (a) {
    Hg(i, a);
    function i(o, c) {
      var f;
      f = a.call(this, o, c) || this;
      var p = c,
        h = p && !p.isMounting ? o.enter : o.appear,
        y;
      return (
        (f.appearStatus = null),
        o.in
          ? h
            ? ((y = pl), (f.appearStatus = hl))
            : (y = mi)
          : o.unmountOnExit || o.mountOnEnter
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
    var u = i.prototype;
    return (
      (u.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (u.componentDidUpdate = function (c) {
        var f = null;
        if (c !== this.props) {
          var p = this.state.status;
          this.props.in ? p !== hl && p !== mi && (f = hl) : (p === hl || p === mi) && (f = bf);
        }
        this.updateStatus(!1, f);
      }),
      (u.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (u.getTimeouts = function () {
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
      (u.updateStatus = function (c, f) {
        if ((c === void 0 && (c = !1), f !== null))
          if ((this.cancelNextCallback(), f === hl)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var p = this.props.nodeRef ? this.props.nodeRef.current : Fo.findDOMNode(this);
              p && kS(p);
            }
            this.performEnter(c);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === pl && this.setState({ status: xr });
      }),
      (u.performEnter = function (c) {
        var f = this,
          p = this.props.enter,
          h = this.context ? this.context.isMounting : c,
          y = this.props.nodeRef ? [h] : [Fo.findDOMNode(this), h],
          g = y[0],
          S = y[1],
          C = this.getTimeouts(),
          A = h ? C.appear : C.enter;
        if ((!c && !p) || Rm.disabled) {
          this.safeSetState({ status: mi }, function () {
            f.props.onEntered(g);
          });
          return;
        }
        (this.props.onEnter(g, S),
          this.safeSetState({ status: hl }, function () {
            (f.props.onEntering(g, S),
              f.onTransitionEnd(A, function () {
                f.safeSetState({ status: mi }, function () {
                  f.props.onEntered(g, S);
                });
              }));
          }));
      }),
      (u.performExit = function () {
        var c = this,
          f = this.props.exit,
          p = this.getTimeouts(),
          h = this.props.nodeRef ? void 0 : Fo.findDOMNode(this);
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
      (u.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (u.safeSetState = function (c, f) {
        ((f = this.setNextCallback(f)), this.setState(c, f));
      }),
      (u.setNextCallback = function (c) {
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
      (u.onTransitionEnd = function (c, f) {
        this.setNextCallback(f);
        var p = this.props.nodeRef ? this.props.nodeRef.current : Fo.findDOMNode(this),
          h = c == null && !this.props.addEndListener;
        if (!p || h) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var y = this.props.nodeRef ? [this.nextCallback] : [p, this.nextCallback],
            g = y[0],
            S = y[1];
          this.props.addEndListener(g, S);
        }
        c != null && setTimeout(this.nextCallback, c);
      }),
      (u.render = function () {
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
        return Ue.createElement(
          du.Provider,
          { value: null },
          typeof p == 'function' ? p(c, h) : Ue.cloneElement(Ue.Children.only(p), h)
        );
      }),
      i
    );
  })(Ue.Component);
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
function $S(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function qf(a, i) {
  var u = function (f) {
      return i && H.isValidElement(f) ? i(f) : f;
    },
    o = Object.create(null);
  return (
    a &&
      H.Children.map(a, function (c) {
        return c;
      }).forEach(function (c) {
        o[c.key] = u(c);
      }),
    o
  );
}
function YS(a, i) {
  ((a = a || {}), (i = i || {}));
  function u(S) {
    return S in i ? i[S] : a[S];
  }
  var o = Object.create(null),
    c = [];
  for (var f in a) f in i ? c.length && ((o[f] = c), (c = [])) : c.push(f);
  var p,
    h = {};
  for (var y in i) {
    if (o[y])
      for (p = 0; p < o[y].length; p++) {
        var g = o[y][p];
        h[o[y][p]] = u(g);
      }
    h[y] = u(y);
  }
  for (p = 0; p < c.length; p++) h[c[p]] = u(c[p]);
  return h;
}
function gl(a, i, u) {
  return u[i] != null ? u[i] : a.props[i];
}
function qS(a, i) {
  return qf(a.children, function (u) {
    return H.cloneElement(u, {
      onExited: i.bind(null, u),
      in: !0,
      appear: gl(u, 'appear', a),
      enter: gl(u, 'enter', a),
      exit: gl(u, 'exit', a),
    });
  });
}
function GS(a, i, u) {
  var o = qf(a.children),
    c = YS(i, o);
  return (
    Object.keys(c).forEach(function (f) {
      var p = c[f];
      if (H.isValidElement(p)) {
        var h = f in i,
          y = f in o,
          g = i[f],
          S = H.isValidElement(g) && !g.props.in;
        y && (!h || S)
          ? (c[f] = H.cloneElement(p, {
              onExited: u.bind(null, p),
              in: !0,
              exit: gl(p, 'exit', a),
              enter: gl(p, 'enter', a),
            }))
          : !y && h && !S
            ? (c[f] = H.cloneElement(p, { in: !1 }))
            : y &&
              h &&
              H.isValidElement(g) &&
              (c[f] = H.cloneElement(p, {
                onExited: u.bind(null, p),
                in: g.props.in,
                exit: gl(p, 'exit', a),
                enter: gl(p, 'enter', a),
              }));
      }
    }),
    c
  );
}
var VS =
    Object.values ||
    function (a) {
      return Object.keys(a).map(function (i) {
        return a[i];
      });
    },
  XS = {
    component: 'div',
    childFactory: function (i) {
      return i;
    },
  },
  Gf = (function (a) {
    Hg(i, a);
    function i(o, c) {
      var f;
      f = a.call(this, o, c) || this;
      var p = f.handleExited.bind($S(f));
      return ((f.state = { contextValue: { isMounting: !0 }, handleExited: p, firstRender: !0 }), f);
    }
    var u = i.prototype;
    return (
      (u.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (u.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (i.getDerivedStateFromProps = function (c, f) {
        var p = f.children,
          h = f.handleExited,
          y = f.firstRender;
        return { children: y ? qS(c, h) : GS(c, p, h), firstRender: !1 };
      }),
      (u.handleExited = function (c, f) {
        var p = qf(this.props.children);
        c.key in p ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (h) {
              var y = uu({}, h.children);
              return (delete y[c.key], { children: y });
            }));
      }),
      (u.render = function () {
        var c = this.props,
          f = c.component,
          p = c.childFactory,
          h = Ug(c, ['component', 'childFactory']),
          y = this.state.contextValue,
          g = VS(this.state.children).map(p);
        return (
          delete h.appear,
          delete h.enter,
          delete h.exit,
          f === null
            ? Ue.createElement(du.Provider, { value: y }, g)
            : Ue.createElement(du.Provider, { value: y }, Ue.createElement(f, h, g))
        );
      }),
      i
    );
  })(Ue.Component);
Gf.propTypes = {};
Gf.defaultProps = XS;
const wm = {};
function Lg(a, i) {
  const u = H.useRef(wm);
  return (u.current === wm && (u.current = a(i)), u);
}
const QS = [];
function ZS(a) {
  H.useEffect(a, QS);
}
class Vf {
  static create() {
    return new Vf();
  }
  currentId = null;
  start(i, u) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = null), u());
      }, i)));
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
  };
  disposeEffect = () => this.clear;
}
function kg() {
  const a = Lg(Vf.create).current;
  return (ZS(a.disposeEffect), a);
}
function _m(a, i) {
  const { timeout: u, easing: o, style: c = {} } = a;
  return {
    duration: c.transitionDuration ?? (typeof u == 'number' ? u : u[i.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof o == 'object' ? o[i.mode] : o),
    delay: c.transitionDelay,
  };
}
function Tr(a) {
  return typeof a == 'string';
}
function $g(a, i, u) {
  return a === void 0 || Tr(a) ? i : { ...i, ownerState: { ...i.ownerState, ...u } };
}
function Yg(a, i, u) {
  return typeof a == 'function' ? a(i, u) : a;
}
function ou(a, i = []) {
  if (a === void 0) return {};
  const u = {};
  return (
    Object.keys(a)
      .filter((o) => o.match(/^on[A-Z]/) && typeof a[o] == 'function' && !i.includes(o))
      .forEach((o) => {
        u[o] = a[o];
      }),
    u
  );
}
function Bm(a) {
  if (a === void 0) return {};
  const i = {};
  return (
    Object.keys(a)
      .filter((u) => !(u.match(/^on[A-Z]/) && typeof a[u] == 'function'))
      .forEach((u) => {
        i[u] = a[u];
      }),
    i
  );
}
function qg(a) {
  const { getSlotProps: i, additionalProps: u, externalSlotProps: o, externalForwardedProps: c, className: f } = a;
  if (!i) {
    const j = kt(u?.className, f, c?.className, o?.className),
      O = { ...u?.style, ...c?.style, ...o?.style },
      E = { ...u, ...c, ...o };
    return (
      j.length > 0 && (E.className = j),
      Object.keys(O).length > 0 && (E.style = O),
      { props: E, internalRef: void 0 }
    );
  }
  const p = ou({ ...c, ...o }),
    h = Bm(o),
    y = Bm(c),
    g = i(p),
    S = kt(g?.className, u?.className, f, c?.className, o?.className),
    C = { ...g?.style, ...u?.style, ...c?.style, ...o?.style },
    A = { ...g, ...u, ...y, ...h };
  return (
    S.length > 0 && (A.className = S),
    Object.keys(C).length > 0 && (A.style = C),
    { props: A, internalRef: g.ref }
  );
}
function Qa(a, i) {
  const {
      className: u,
      elementType: o,
      ownerState: c,
      externalForwardedProps: f,
      internalForwardedProps: p,
      shouldForwardComponentProp: h = !1,
      ...y
    } = i,
    { component: g, slots: S = { [a]: void 0 }, slotProps: C = { [a]: void 0 }, ...A } = f,
    j = S[a] || o,
    O = Yg(C[a], c),
    {
      props: { component: E, ...L },
      internalRef: q,
    } = qg({ className: u, ...y, externalForwardedProps: a === 'root' ? A : void 0, externalSlotProps: O }),
    W = Si(q, O?.ref, i.ref),
    K = a === 'root' ? E || g : E,
    Y = $g(
      j,
      {
        ...(a === 'root' && !g && !S[a] && p),
        ...(a !== 'root' && !S[a] && p),
        ...L,
        ...(K && !h && { as: K }),
        ...(K && h && { component: K }),
        ref: W,
      },
      c
    );
  return [j, Y];
}
function KS(a) {
  return Qe('MuiCollapse', a);
}
rn('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
const JS = (a) => {
    const { orientation: i, classes: u } = a,
      o = {
        root: ['root', `${i}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${i}`],
        wrapperInner: ['wrapperInner', `${i}`],
      };
    return on(o, KS, u);
  },
  WS = _t('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[u.orientation],
        u.state === 'entered' && i.entered,
        u.state === 'exited' && !u.in && u.collapsedSize === '0px' && i.hidden,
      ];
    },
  })(
    ye(({ theme: a }) => ({
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
  FS = _t('div', { name: 'MuiCollapse', slot: 'Wrapper' })({
    display: 'flex',
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  PS = _t('div', { name: 'MuiCollapse', slot: 'WrapperInner' })({
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  wr = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiCollapse' }),
      {
        addEndListener: c,
        children: f,
        className: p,
        collapsedSize: h = '0px',
        component: y,
        easing: g,
        in: S,
        onEnter: C,
        onEntered: A,
        onEntering: j,
        onExit: O,
        onExited: E,
        onExiting: L,
        orientation: q = 'vertical',
        slots: W = {},
        slotProps: K = {},
        style: Y,
        timeout: N = Og.standard,
        TransitionComponent: V = ya,
        ...Z
      } = o,
      st = { ...o, orientation: q, collapsedSize: h },
      ct = JS(st),
      pt = jg(),
      ft = kg(),
      v = H.useRef(null),
      F = H.useRef(),
      X = typeof h == 'number' ? `${h}px` : h,
      et = q === 'horizontal',
      z = et ? 'width' : 'height',
      J = H.useRef(null),
      I = Si(u, J),
      it = (Tt) => (se) => {
        if (Tt) {
          const jt = J.current;
          se === void 0 ? Tt(jt) : Tt(jt, se);
        }
      },
      yt = () => (v.current ? v.current[et ? 'clientWidth' : 'clientHeight'] : 0),
      b = it((Tt, se) => {
        (v.current && et && (v.current.style.position = 'absolute'), (Tt.style[z] = X), C && C(Tt, se));
      }),
      B = it((Tt, se) => {
        const jt = yt();
        v.current && et && (v.current.style.position = '');
        const { duration: le, easing: $e } = _m({ style: Y, timeout: N, easing: g }, { mode: 'enter' });
        if (N === 'auto') {
          const Ze = pt.transitions.getAutoHeightDuration(jt);
          ((Tt.style.transitionDuration = `${Ze}ms`), (F.current = Ze));
        } else Tt.style.transitionDuration = typeof le == 'string' ? le : `${le}ms`;
        ((Tt.style[z] = `${jt}px`), (Tt.style.transitionTimingFunction = $e), j && j(Tt, se));
      }),
      P = it((Tt, se) => {
        ((Tt.style[z] = 'auto'), A && A(Tt, se));
      }),
      tt = it((Tt) => {
        ((Tt.style[z] = `${yt()}px`), O && O(Tt));
      }),
      nt = it(E),
      ot = it((Tt) => {
        const se = yt(),
          { duration: jt, easing: le } = _m({ style: Y, timeout: N, easing: g }, { mode: 'exit' });
        if (N === 'auto') {
          const $e = pt.transitions.getAutoHeightDuration(se);
          ((Tt.style.transitionDuration = `${$e}ms`), (F.current = $e));
        } else Tt.style.transitionDuration = typeof jt == 'string' ? jt : `${jt}ms`;
        ((Tt.style[z] = X), (Tt.style.transitionTimingFunction = le), L && L(Tt));
      }),
      bt = (Tt) => {
        (N === 'auto' && ft.start(F.current || 0, Tt), c && c(J.current, Tt));
      },
      Nt = { slots: W, slotProps: K, component: y },
      [Ut, ze] = Qa('root', {
        ref: I,
        className: kt(ct.root, p),
        elementType: WS,
        externalForwardedProps: Nt,
        ownerState: st,
        additionalProps: { style: { [et ? 'minWidth' : 'minHeight']: X, ...Y } },
      }),
      [He, Ae] = Qa('wrapper', {
        ref: v,
        className: ct.wrapper,
        elementType: FS,
        externalForwardedProps: Nt,
        ownerState: st,
      }),
      [ue, he] = Qa('wrapperInner', {
        className: ct.wrapperInner,
        elementType: PS,
        externalForwardedProps: Nt,
        ownerState: st,
      });
    return R.jsx(V, {
      in: S,
      onEnter: b,
      onEntered: P,
      onEntering: B,
      onExit: tt,
      onExited: nt,
      onExiting: ot,
      addEndListener: bt,
      nodeRef: J,
      timeout: N === 'auto' ? null : N,
      ...Z,
      children: (Tt, { ownerState: se, ...jt }) => {
        const le = { ...st, state: Tt };
        return R.jsx(Ut, {
          ...ze,
          className: kt(ze.className, { entered: ct.entered, exited: !S && X === '0px' && ct.hidden }[Tt]),
          ownerState: le,
          ...jt,
          children: R.jsx(He, { ...Ae, ownerState: le, children: R.jsx(ue, { ...he, ownerState: le, children: f }) }),
        });
      },
    });
  });
wr && (wr.muiSupportAuto = !0);
function IS(a) {
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
const t5 = (a) => {
    const { square: i, elevation: u, variant: o, classes: c } = a,
      f = { root: ['root', o, !i && 'rounded', o === 'elevation' && `elevation${u}`] };
    return on(f, IS, c);
  },
  e5 = _t('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[u.variant], !u.square && i.rounded, u.variant === 'elevation' && i[`elevation${u.elevation}`]];
    },
  })(
    ye(({ theme: a }) => ({
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
  Gg = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiPaper' }),
      c = jg(),
      { className: f, component: p = 'div', elevation: h = 1, square: y = !1, variant: g = 'elevation', ...S } = o,
      C = { ...o, component: p, elevation: h, square: y, variant: g },
      A = t5(C);
    return R.jsx(e5, {
      as: p,
      ownerState: C,
      className: kt(A.root, f),
      ref: u,
      ...S,
      style: {
        ...(g === 'elevation' && {
          '--Paper-shadow': (c.vars || c).shadows[h],
          ...(c.vars && { '--Paper-overlay': c.vars.overlays?.[h] }),
          ...(!c.vars &&
            c.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${fu('#fff', yf(h))}, ${fu('#fff', yf(h))})`,
            }),
        }),
        ...S.style,
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
    const i = Lg(hu.create).current,
      [u, o] = H.useState(!1);
    return ((i.shouldMount = u), (i.setShouldMount = o), H.useEffect(i.mountEffect, [u]), i);
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
      this.mounted || ((this.mounted = a5()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
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
function n5() {
  return hu.use();
}
function a5() {
  let a, i;
  const u = new Promise((o, c) => {
    ((a = o), (i = c));
  });
  return ((u.resolve = a), (u.reject = i), u);
}
function l5(a) {
  const {
      className: i,
      classes: u,
      pulsate: o = !1,
      rippleX: c,
      rippleY: f,
      rippleSize: p,
      in: h,
      onExited: y,
      timeout: g,
    } = a,
    [S, C] = H.useState(!1),
    A = kt(i, u.ripple, u.rippleVisible, o && u.ripplePulsate),
    j = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c },
    O = kt(u.child, S && u.childLeaving, o && u.childPulsate);
  return (
    !h && !S && C(!0),
    H.useEffect(() => {
      if (!h && y != null) {
        const E = setTimeout(y, g);
        return () => {
          clearTimeout(E);
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
  i5 = 80,
  r5 = Br`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  o5 = Br`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  u5 = Br`
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
  s5 = _t('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  c5 = _t(l5, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${On.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${r5};
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
    animation-name: ${o5};
    animation-duration: ${Sf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  & .${On.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${u5};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  f5 = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiTouchRipple' }),
      { center: c = !1, classes: f = {}, className: p, ...h } = o,
      [y, g] = H.useState([]),
      S = H.useRef(0),
      C = H.useRef(null);
    H.useEffect(() => {
      C.current && (C.current(), (C.current = null));
    }, [y]);
    const A = H.useRef(!1),
      j = kg(),
      O = H.useRef(null),
      E = H.useRef(null),
      L = H.useCallback(
        (Y) => {
          const { pulsate: N, rippleX: V, rippleY: Z, rippleSize: st, cb: ct } = Y;
          (g((pt) => [
            ...pt,
            R.jsx(
              c5,
              {
                classes: {
                  ripple: kt(f.ripple, On.ripple),
                  rippleVisible: kt(f.rippleVisible, On.rippleVisible),
                  ripplePulsate: kt(f.ripplePulsate, On.ripplePulsate),
                  child: kt(f.child, On.child),
                  childLeaving: kt(f.childLeaving, On.childLeaving),
                  childPulsate: kt(f.childPulsate, On.childPulsate),
                },
                timeout: Sf,
                pulsate: N,
                rippleX: V,
                rippleY: Z,
                rippleSize: st,
              },
              S.current
            ),
          ]),
            (S.current += 1),
            (C.current = ct));
        },
        [f]
      ),
      q = H.useCallback(
        (Y = {}, N = {}, V = () => {}) => {
          const { pulsate: Z = !1, center: st = c || N.pulsate, fakeElement: ct = !1 } = N;
          if (Y?.type === 'mousedown' && A.current) {
            A.current = !1;
            return;
          }
          Y?.type === 'touchstart' && (A.current = !0);
          const pt = ct ? null : E.current,
            ft = pt ? pt.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let v, F, X;
          if (st || Y === void 0 || (Y.clientX === 0 && Y.clientY === 0) || (!Y.clientX && !Y.touches))
            ((v = Math.round(ft.width / 2)), (F = Math.round(ft.height / 2)));
          else {
            const { clientX: et, clientY: z } = Y.touches && Y.touches.length > 0 ? Y.touches[0] : Y;
            ((v = Math.round(et - ft.left)), (F = Math.round(z - ft.top)));
          }
          if (st) ((X = Math.sqrt((2 * ft.width ** 2 + ft.height ** 2) / 3)), X % 2 === 0 && (X += 1));
          else {
            const et = Math.max(Math.abs((pt ? pt.clientWidth : 0) - v), v) * 2 + 2,
              z = Math.max(Math.abs((pt ? pt.clientHeight : 0) - F), F) * 2 + 2;
            X = Math.sqrt(et ** 2 + z ** 2);
          }
          Y?.touches
            ? O.current === null &&
              ((O.current = () => {
                L({ pulsate: Z, rippleX: v, rippleY: F, rippleSize: X, cb: V });
              }),
              j.start(i5, () => {
                O.current && (O.current(), (O.current = null));
              }))
            : L({ pulsate: Z, rippleX: v, rippleY: F, rippleSize: X, cb: V });
        },
        [c, L, j]
      ),
      W = H.useCallback(() => {
        q({}, { pulsate: !0 });
      }, [q]),
      K = H.useCallback(
        (Y, N) => {
          if ((j.clear(), Y?.type === 'touchend' && O.current)) {
            (O.current(),
              (O.current = null),
              j.start(0, () => {
                K(Y, N);
              }));
            return;
          }
          ((O.current = null), g((V) => (V.length > 0 ? V.slice(1) : V)), (C.current = N));
        },
        [j]
      );
    return (
      H.useImperativeHandle(u, () => ({ pulsate: W, start: q, stop: K }), [W, q, K]),
      R.jsx(s5, {
        className: kt(On.root, f.root, p),
        ref: E,
        ...h,
        children: R.jsx(Gf, { component: null, exit: !0, children: y }),
      })
    );
  });
function d5(a) {
  return Qe('MuiButtonBase', a);
}
const p5 = rn('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  h5 = (a) => {
    const { disabled: i, focusVisible: u, focusVisibleClassName: o, classes: c } = a,
      p = on({ root: ['root', i && 'disabled', u && 'focusVisible'] }, d5, c);
    return (u && o && (p.root += ` ${o}`), p);
  },
  m5 = _t('button', { name: 'MuiButtonBase', slot: 'Root' })({
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
    [`&.${p5.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  Xf = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiButtonBase' }),
      {
        action: c,
        centerRipple: f = !1,
        children: p,
        className: h,
        component: y = 'button',
        disabled: g = !1,
        disableRipple: S = !1,
        disableTouchRipple: C = !1,
        focusRipple: A = !1,
        focusVisibleClassName: j,
        LinkComponent: O = 'a',
        onBlur: E,
        onClick: L,
        onContextMenu: q,
        onDragLeave: W,
        onFocus: K,
        onFocusVisible: Y,
        onKeyDown: N,
        onKeyUp: V,
        onMouseDown: Z,
        onMouseLeave: st,
        onMouseUp: ct,
        onTouchEnd: pt,
        onTouchMove: ft,
        onTouchStart: v,
        tabIndex: F = 0,
        TouchRippleProps: X,
        touchRippleRef: et,
        type: z,
        ...J
      } = o,
      I = H.useRef(null),
      it = n5(),
      yt = Si(it.ref, et),
      [b, B] = H.useState(!1);
    (g && b && B(!1),
      H.useImperativeHandle(
        c,
        () => ({
          focusVisible: () => {
            (B(!0), I.current.focus());
          },
        }),
        []
      ));
    const P = it.shouldMount && !S && !g;
    H.useEffect(() => {
      b && A && !S && it.pulsate();
    }, [S, A, b, it]);
    const tt = ga(it, 'start', Z, C),
      nt = ga(it, 'stop', q, C),
      ot = ga(it, 'stop', W, C),
      bt = ga(it, 'stop', ct, C),
      Nt = ga(
        it,
        'stop',
        (gt) => {
          (b && gt.preventDefault(), st && st(gt));
        },
        C
      ),
      Ut = ga(it, 'start', v, C),
      ze = ga(it, 'stop', pt, C),
      He = ga(it, 'stop', ft, C),
      Ae = ga(
        it,
        'stop',
        (gt) => {
          (pu(gt.target) || B(!1), E && E(gt));
        },
        !1
      ),
      ue = vl((gt) => {
        (I.current || (I.current = gt.currentTarget), pu(gt.target) && (B(!0), Y && Y(gt)), K && K(gt));
      }),
      he = () => {
        const gt = I.current;
        return y && y !== 'button' && !(gt.tagName === 'A' && gt.href);
      },
      Tt = vl((gt) => {
        (A &&
          !gt.repeat &&
          b &&
          gt.key === ' ' &&
          it.stop(gt, () => {
            it.start(gt);
          }),
          gt.target === gt.currentTarget && he() && gt.key === ' ' && gt.preventDefault(),
          N && N(gt),
          gt.target === gt.currentTarget && he() && gt.key === 'Enter' && !g && (gt.preventDefault(), L && L(gt)));
      }),
      se = vl((gt) => {
        (A &&
          gt.key === ' ' &&
          b &&
          !gt.defaultPrevented &&
          it.stop(gt, () => {
            it.pulsate(gt);
          }),
          V && V(gt),
          L && gt.target === gt.currentTarget && he() && gt.key === ' ' && !gt.defaultPrevented && L(gt));
      });
    let jt = y;
    jt === 'button' && (J.href || J.to) && (jt = O);
    const le = {};
    jt === 'button'
      ? ((le.type = z === void 0 ? 'button' : z), (le.disabled = g))
      : (!J.href && !J.to && (le.role = 'button'), g && (le['aria-disabled'] = g));
    const $e = Si(u, I),
      Ze = {
        ...o,
        centerRipple: f,
        component: y,
        disabled: g,
        disableRipple: S,
        disableTouchRipple: C,
        focusRipple: A,
        tabIndex: F,
        focusVisible: b,
      },
      Ln = h5(Ze);
    return R.jsxs(m5, {
      as: jt,
      className: kt(Ln.root, h),
      ownerState: Ze,
      onBlur: Ae,
      onClick: L,
      onContextMenu: nt,
      onFocus: ue,
      onKeyDown: Tt,
      onKeyUp: se,
      onMouseDown: tt,
      onMouseLeave: Nt,
      onMouseUp: bt,
      onDragLeave: ot,
      onTouchEnd: ze,
      onTouchMove: He,
      onTouchStart: Ut,
      ref: $e,
      tabIndex: g ? -1 : F,
      type: z,
      ...le,
      ...J,
      children: [p, P ? R.jsx(f5, { ref: yt, center: f, ...X }) : null],
    });
  });
function ga(a, i, u, o = !1) {
  return vl((c) => (u && u(c), o || a[i](c), !0));
}
function g5(a) {
  return typeof a.main == 'string';
}
function y5(a, i = []) {
  if (!g5(a)) return !1;
  for (const u of i) if (!a.hasOwnProperty(u) || typeof a[u] != 'string') return !1;
  return !0;
}
function Jn(a = []) {
  return ([, i]) => i && y5(i, a);
}
function v5(a) {
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
  xf = Br`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Cf = Br`
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
  b5 =
    typeof xf != 'string'
      ? Bf`
        animation: ${xf} 1.4s linear infinite;
      `
      : null,
  S5 =
    typeof Cf != 'string'
      ? Bf`
        animation: ${Cf} 1.4s ease-in-out infinite;
      `
      : null,
  x5 = (a) => {
    const { classes: i, variant: u, color: o, disableShrink: c } = a,
      f = {
        root: ['root', u, `color${mt(o)}`],
        svg: ['svg'],
        track: ['track'],
        circle: ['circle', `circle${mt(u)}`, c && 'circleDisableShrink'],
      };
    return on(f, v5, i);
  },
  C5 = _t('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[u.variant], i[`color${mt(u.color)}`]];
    },
  })(
    ye(({ theme: a }) => ({
      display: 'inline-block',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('transform') } },
        { props: { variant: 'indeterminate' }, style: b5 || { animation: `${xf} 1.4s linear infinite` } },
        ...Object.entries(a.palette)
          .filter(Jn())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
      ],
    }))
  ),
  T5 = _t('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  E5 = _t('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.circle, i[`circle${mt(u.variant)}`], u.disableShrink && i.circleDisableShrink];
    },
  })(
    ye(({ theme: a }) => ({
      stroke: 'currentColor',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('stroke-dashoffset') } },
        { props: { variant: 'indeterminate' }, style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 } },
        {
          props: ({ ownerState: i }) => i.variant === 'indeterminate' && !i.disableShrink,
          style: S5 || { animation: `${Cf} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  z5 = _t('circle', { name: 'MuiCircularProgress', slot: 'Track' })(
    ye(({ theme: a }) => ({ stroke: 'currentColor', opacity: (a.vars || a).palette.action.activatedOpacity }))
  ),
  Vg = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiCircularProgress' }),
      {
        className: c,
        color: f = 'primary',
        disableShrink: p = !1,
        enableTrackSlot: h = !1,
        size: y = 40,
        style: g,
        thickness: S = 3.6,
        value: C = 0,
        variant: A = 'indeterminate',
        ...j
      } = o,
      O = { ...o, color: f, disableShrink: p, size: y, thickness: S, value: C, variant: A, enableTrackSlot: h },
      E = x5(O),
      L = {},
      q = {},
      W = {};
    if (A === 'determinate') {
      const K = 2 * Math.PI * ((Un - S) / 2);
      ((L.strokeDasharray = K.toFixed(3)),
        (W['aria-valuenow'] = Math.round(C)),
        (L.strokeDashoffset = `${(((100 - C) / 100) * K).toFixed(3)}px`),
        (q.transform = 'rotate(-90deg)'));
    }
    return R.jsx(C5, {
      className: kt(E.root, c),
      style: { width: y, height: y, ...q, ...g },
      ownerState: O,
      ref: u,
      role: 'progressbar',
      ...W,
      ...j,
      children: R.jsxs(T5, {
        className: E.svg,
        ownerState: O,
        viewBox: `${Un / 2} ${Un / 2} ${Un} ${Un}`,
        children: [
          h
            ? R.jsx(z5, {
                className: E.track,
                ownerState: O,
                cx: Un,
                cy: Un,
                r: (Un - S) / 2,
                fill: 'none',
                strokeWidth: S,
                'aria-hidden': 'true',
              })
            : null,
          R.jsx(E5, {
            className: E.circle,
            style: L,
            ownerState: O,
            cx: Un,
            cy: Un,
            r: (Un - S) / 2,
            fill: 'none',
            strokeWidth: S,
          }),
        ],
      }),
    });
  });
function A5(a) {
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
  M5 = (a) => {
    const { classes: i, disabled: u, color: o, edge: c, size: f, loading: p } = a,
      h = {
        root: [
          'root',
          p && 'loading',
          u && 'disabled',
          o !== 'default' && `color${mt(o)}`,
          c && `edge${mt(c)}`,
          `size${mt(f)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return on(h, A5, i);
  },
  O5 = _t(Xf, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        u.loading && i.loading,
        u.color !== 'default' && i[`color${mt(u.color)}`],
        u.edge && i[`edge${mt(u.edge)}`],
        i[`size${mt(u.size)}`],
      ];
    },
  })(
    ye(({ theme: a }) => ({
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
    ye(({ theme: a }) => ({
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
  R5 = _t('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (a.vars || a).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  vi = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiIconButton' }),
      {
        edge: c = !1,
        children: f,
        className: p,
        color: h = 'default',
        disabled: y = !1,
        disableFocusRipple: g = !1,
        size: S = 'medium',
        id: C,
        loading: A = null,
        loadingIndicator: j,
        ...O
      } = o,
      E = Eg(C),
      L = j ?? R.jsx(Vg, { 'aria-labelledby': E, color: 'inherit', size: 16 }),
      q = { ...o, edge: c, color: h, disabled: y, disableFocusRipple: g, loading: A, loadingIndicator: L, size: S },
      W = M5(q);
    return R.jsxs(O5, {
      id: A ? E : C,
      className: kt(W.root, p),
      centerRipple: !0,
      focusRipple: !g,
      disabled: y || A,
      ref: u,
      ...O,
      ownerState: q,
      children: [
        typeof A == 'boolean' &&
          R.jsx('span', {
            className: W.loadingWrapper,
            style: { display: 'contents' },
            children: R.jsx(R5, { className: W.loadingIndicator, ownerState: q, children: A && L }),
          }),
        f,
      ],
    });
  });
function w5(a) {
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
  B5 = HS(),
  D5 = (a) => {
    const { align: i, gutterBottom: u, noWrap: o, paragraph: c, variant: f, classes: p } = a,
      h = {
        root: [
          'root',
          f,
          a.align !== 'inherit' && `align${mt(i)}`,
          u && 'gutterBottom',
          o && 'noWrap',
          c && 'paragraph',
        ],
      };
    return on(h, w5, p);
  },
  j5 = _t('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        u.variant && i[u.variant],
        u.align !== 'inherit' && i[`align${mt(u.align)}`],
        u.noWrap && i.noWrap,
        u.gutterBottom && i.gutterBottom,
        u.paragraph && i.paragraph,
      ];
    },
  })(
    ye(({ theme: a }) => ({
      margin: 0,
      variants: [
        { props: { variant: 'inherit' }, style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' } },
        ...Object.entries(a.typography)
          .filter(([i, u]) => i !== 'inherit' && u && typeof u == 'object')
          .map(([i, u]) => ({ props: { variant: i }, style: u })),
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
  an = H.forwardRef(function (i, u) {
    const { color: o, ...c } = un({ props: i, name: 'MuiTypography' }),
      f = !_5[o],
      p = B5({ ...c, ...(f && { color: o }) }),
      {
        align: h = 'inherit',
        className: y,
        component: g,
        gutterBottom: S = !1,
        noWrap: C = !1,
        paragraph: A = !1,
        variant: j = 'body1',
        variantMapping: O = jm,
        ...E
      } = p,
      L = {
        ...p,
        align: h,
        color: o,
        className: y,
        component: g,
        gutterBottom: S,
        noWrap: C,
        paragraph: A,
        variant: j,
        variantMapping: O,
      },
      q = g || (A ? 'p' : O[j] || jm[j]) || 'span',
      W = D5(L);
    return R.jsx(j5, {
      as: q,
      ref: u,
      className: kt(W.root, y),
      ...E,
      ownerState: L,
      style: { ...(h !== 'inherit' && { '--Typography-textAlign': h }), ...E.style },
    });
  });
function N5(a) {
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
const U5 = (a) => {
    const { color: i, position: u, classes: o } = a,
      c = { root: ['root', `color${mt(i)}`, `position${mt(u)}`] };
    return on(c, N5, o);
  },
  Nm = (a, i) => (a ? `${a?.replace(')', '')}, ${i})` : i),
  H5 = _t(Gg, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[`position${mt(u.position)}`], i[`color${mt(u.color)}`]];
    },
  })(
    ye(({ theme: a }) => ({
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
  L5 = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiAppBar' }),
      { className: c, color: f = 'primary', enableColorOnDark: p = !1, position: h = 'fixed', ...y } = o,
      g = { ...o, color: f, position: h, enableColorOnDark: p },
      S = U5(g);
    return R.jsx(H5, {
      square: !0,
      component: 'header',
      ownerState: g,
      elevation: 4,
      className: kt(S.root, c, h === 'fixed' && 'mui-fixed'),
      ref: u,
      ...y,
    });
  });
function Xa(a) {
  const { elementType: i, externalSlotProps: u, ownerState: o, skipResolvingSlotProps: c = !1, ...f } = a,
    p = c ? {} : Yg(u, o),
    { props: h, internalRef: y } = qg({ ...f, externalSlotProps: p }),
    g = Si(y, p?.ref, a.additionalProps?.ref);
  return $g(i, { ...h, ref: g }, o);
}
const k5 = H.createContext(void 0);
function $5() {
  return H.useContext(k5);
}
const Y5 = rn('MuiBox', ['root']),
  q5 = Bg(),
  zt = x2({ themeId: zf, defaultTheme: q5, defaultClassName: Y5.root, generateClassName: mg.generate });
function G5(a) {
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
  V5 = H.createContext({}),
  X5 = H.createContext(void 0),
  Q5 = (a) => {
    const {
        color: i,
        disableElevation: u,
        fullWidth: o,
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
          u && 'disableElevation',
          o && 'fullWidth',
          p && `loadingPosition${mt(h)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${mt(c)}`],
        endIcon: ['icon', 'endIcon', `iconSize${mt(c)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      S = on(g, G5, y);
    return { ...y, ...S };
  },
  Xg = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  Z5 = _t(Xf, {
    shouldForwardProp: (a) => Yf(a) || a === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[u.variant],
        i[`${u.variant}${mt(u.color)}`],
        i[`size${mt(u.size)}`],
        i[`${u.variant}Size${mt(u.size)}`],
        u.color === 'inherit' && i.colorInherit,
        u.disableElevation && i.disableElevation,
        u.fullWidth && i.fullWidth,
        u.loading && i.loading,
      ];
    },
  })(
    ye(({ theme: a }) => {
      const i = a.palette.mode === 'light' ? a.palette.grey[300] : a.palette.grey[800],
        u = a.palette.mode === 'light' ? a.palette.grey.A100 : a.palette.grey[700];
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
            .map(([o]) => ({
              props: { color: o },
              style: {
                '--variant-textColor': (a.vars || a).palette[o].main,
                '--variant-outlinedColor': (a.vars || a).palette[o].main,
                '--variant-outlinedBorder': a.alpha((a.vars || a).palette[o].main, 0.5),
                '--variant-containedColor': (a.vars || a).palette[o].contrastText,
                '--variant-containedBg': (a.vars || a).palette[o].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (a.vars || a).palette[o].dark,
                    '--variant-textBg': a.alpha(
                      (a.vars || a).palette[o].main,
                      (a.vars || a).palette.action.hoverOpacity
                    ),
                    '--variant-outlinedBorder': (a.vars || a).palette[o].main,
                    '--variant-outlinedBg': a.alpha(
                      (a.vars || a).palette[o].main,
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
                  '--variant-containedBg': a.vars ? a.vars.palette.Button.inheritContainedHoverBg : u,
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
  K5 = _t('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.startIcon, u.loading && i.startIconLoadingStart, i[`iconSize${mt(u.size)}`]];
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
  J5 = _t('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.endIcon, u.loading && i.endIconLoadingEnd, i[`iconSize${mt(u.size)}`]];
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
  xi = H.forwardRef(function (i, u) {
    const o = H.useContext(V5),
      c = H.useContext(X5),
      f = Rr(o, i),
      p = un({ props: f, name: 'MuiButton' }),
      {
        children: h,
        color: y = 'primary',
        component: g = 'button',
        className: S,
        disabled: C = !1,
        disableElevation: A = !1,
        disableFocusRipple: j = !1,
        endIcon: O,
        focusVisibleClassName: E,
        fullWidth: L = !1,
        id: q,
        loading: W = null,
        loadingIndicator: K,
        loadingPosition: Y = 'center',
        size: N = 'medium',
        startIcon: V,
        type: Z,
        variant: st = 'text',
        ...ct
      } = p,
      pt = Eg(q),
      ft = K ?? R.jsx(Vg, { 'aria-labelledby': pt, color: 'inherit', size: 16 }),
      v = {
        ...p,
        color: y,
        component: g,
        disabled: C,
        disableElevation: A,
        disableFocusRipple: j,
        fullWidth: L,
        loading: W,
        loadingIndicator: ft,
        loadingPosition: Y,
        size: N,
        type: Z,
        variant: st,
      },
      F = Q5(v),
      X =
        (V || (W && Y === 'start')) &&
        R.jsx(K5, {
          className: F.startIcon,
          ownerState: v,
          children: V || R.jsx(Um, { className: F.loadingIconPlaceholder, ownerState: v }),
        }),
      et =
        (O || (W && Y === 'end')) &&
        R.jsx(J5, {
          className: F.endIcon,
          ownerState: v,
          children: O || R.jsx(Um, { className: F.loadingIconPlaceholder, ownerState: v }),
        }),
      z = c || '',
      J =
        typeof W == 'boolean'
          ? R.jsx('span', {
              className: F.loadingWrapper,
              style: { display: 'contents' },
              children: W && R.jsx(W5, { className: F.loadingIndicator, ownerState: v, children: ft }),
            })
          : null;
    return R.jsxs(Z5, {
      ownerState: v,
      className: kt(o.className, F.root, S, z),
      component: g,
      disabled: C || W,
      focusRipple: !j,
      focusVisibleClassName: kt(F.focusVisible, E),
      ref: u,
      type: Z,
      id: W ? pt : q,
      ...ct,
      classes: F,
      children: [X, Y !== 'end' && J, h, Y === 'end' && J, et],
    });
  });
function F5(a) {
  return Qe('PrivateSwitchBase', a);
}
rn('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
const P5 = (a) => {
    const { classes: i, checked: u, disabled: o, edge: c } = a,
      f = { root: ['root', u && 'checked', o && 'disabled', c && `edge${mt(c)}`], input: ['input'] };
    return on(f, F5, i);
  },
  I5 = _t(Xf, { name: 'MuiSwitchBase' })({
    padding: 9,
    borderRadius: '50%',
    variants: [
      { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
      { props: ({ edge: a, ownerState: i }) => a === 'start' && i.size !== 'small', style: { marginLeft: -12 } },
      { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      { props: ({ edge: a, ownerState: i }) => a === 'end' && i.size !== 'small', style: { marginRight: -12 } },
    ],
  }),
  t3 = _t('input', { name: 'MuiSwitchBase', shouldForwardProp: Yf })({
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
  e3 = H.forwardRef(function (i, u) {
    const {
        autoFocus: o,
        checked: c,
        checkedIcon: f,
        defaultChecked: p,
        disabled: h,
        disableFocusRipple: y = !1,
        edge: g = !1,
        icon: S,
        id: C,
        inputProps: A,
        inputRef: j,
        name: O,
        onBlur: E,
        onChange: L,
        onFocus: q,
        readOnly: W,
        required: K = !1,
        tabIndex: Y,
        type: N,
        value: V,
        slots: Z = {},
        slotProps: st = {},
        ...ct
      } = i,
      [pt, ft] = Ng({ controlled: c, default: !!p, name: 'SwitchBase', state: 'checked' }),
      v = $5(),
      F = (nt) => {
        (q && q(nt), v && v.onFocus && v.onFocus(nt));
      },
      X = (nt) => {
        (E && E(nt), v && v.onBlur && v.onBlur(nt));
      },
      et = (nt) => {
        if (nt.nativeEvent.defaultPrevented) return;
        const ot = nt.target.checked;
        (ft(ot), L && L(nt, ot));
      };
    let z = h;
    v && typeof z > 'u' && (z = v.disabled);
    const J = N === 'checkbox' || N === 'radio',
      I = { ...i, checked: pt, disabled: z, disableFocusRipple: y, edge: g },
      it = P5(I),
      yt = { slots: Z, slotProps: { input: A, ...st } },
      [b, B] = Qa('root', {
        ref: u,
        elementType: I5,
        className: it.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...yt, component: 'span', ...ct },
        getSlotProps: (nt) => ({
          ...nt,
          onFocus: (ot) => {
            (nt.onFocus?.(ot), F(ot));
          },
          onBlur: (ot) => {
            (nt.onBlur?.(ot), X(ot));
          },
        }),
        ownerState: I,
        additionalProps: { centerRipple: !0, focusRipple: !y, disabled: z, role: void 0, tabIndex: null },
      }),
      [P, tt] = Qa('input', {
        ref: j,
        elementType: t3,
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
          autoFocus: o,
          checked: c,
          defaultChecked: p,
          disabled: z,
          id: J ? C : void 0,
          name: O,
          readOnly: W,
          required: K,
          tabIndex: Y,
          type: N,
          ...(N === 'checkbox' && V === void 0 ? {} : { value: V }),
        },
      });
    return R.jsxs(b, { ...B, children: [R.jsx(P, { ...tt }), pt ? f : S] });
  }),
  Hm = P2({
    createStyledComponent: _t('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (a, i) => {
        const { ownerState: u } = a;
        return [
          i.root,
          i[`maxWidth${mt(String(u.maxWidth))}`],
          u.fixed && i.fixed,
          u.disableGutters && i.disableGutters,
        ];
      },
    }),
    useThemeProps: (a) => un({ props: a, name: 'MuiContainer' }),
  }),
  n3 = {
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
function a3(a, i, u = (o, c) => o === c) {
  return a.length === i.length && a.every((o, c) => u(o, i[c]));
}
const l3 = 2;
function pi(a, i, u, o, c) {
  return u === 1 ? Math.min(a + i, c) : Math.max(a - i, o);
}
function Qg(a, i) {
  return a - i;
}
function Lm(a, i) {
  const { index: u } =
    a.reduce((o, c, f) => {
      const p = Math.abs(i - c);
      return o === null || p < o.distance || p === o.distance ? { distance: p, index: f } : o;
    }, null) ?? {};
  return u;
}
function Po(a, i) {
  if (i.current !== void 0 && a.changedTouches) {
    const u = a;
    for (let o = 0; o < u.changedTouches.length; o += 1) {
      const c = u.changedTouches[o];
      if (c.identifier === i.current) return { x: c.clientX, y: c.clientY };
    }
    return !1;
  }
  return { x: a.clientX, y: a.clientY };
}
function mu(a, i, u) {
  return ((a - i) * 100) / (u - i);
}
function i3(a, i, u) {
  return (u - i) * a + i;
}
function r3(a) {
  if (Math.abs(a) < 1) {
    const u = a.toExponential().split('e-'),
      o = u[0].split('.')[1];
    return (o ? o.length : 0) + parseInt(u[1], 10);
  }
  const i = a.toString().split('.')[1];
  return i ? i.length : 0;
}
function o3(a, i, u) {
  const o = Math.round((a - u) / i) * i + u;
  return Number(o.toFixed(r3(i)));
}
function km({ values: a, newValue: i, index: u }) {
  const o = a.slice();
  return ((o[u] = i), o.sort(Qg));
}
function Io({ sliderRef: a, activeIndex: i, setActive: u }) {
  const o = ru(a.current);
  ((!a.current?.contains(o.activeElement) || Number(o?.activeElement?.getAttribute('data-index')) !== i) &&
    a.current?.querySelector(`[type="range"][data-index="${i}"]`).focus(),
    u && u(i));
}
function tu(a, i) {
  return typeof a == 'number' && typeof i == 'number'
    ? a === i
    : typeof a == 'object' && typeof i == 'object'
      ? a3(a, i)
      : !1;
}
const u3 = {
    horizontal: { offset: (a) => ({ left: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    'horizontal-reverse': { offset: (a) => ({ right: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    vertical: { offset: (a) => ({ bottom: `${a}%` }), leap: (a) => ({ height: `${a}%` }) },
  },
  s3 = (a) => a;
let eu;
function $m() {
  return (
    eu === void 0 &&
      (typeof CSS < 'u' && typeof CSS.supports == 'function' ? (eu = CSS.supports('touch-action', 'none')) : (eu = !0)),
    eu
  );
}
function c3(a) {
  const {
      'aria-labelledby': i,
      defaultValue: u,
      disabled: o = !1,
      disableSwap: c = !1,
      isRtl: f = !1,
      marks: p = !1,
      max: h = 100,
      min: y = 0,
      name: g,
      onChange: S,
      onChangeCommitted: C,
      orientation: A = 'horizontal',
      rootRef: j,
      scale: O = s3,
      step: E = 1,
      shiftStep: L = 10,
      tabIndex: q,
      value: W,
    } = a,
    K = H.useRef(void 0),
    [Y, N] = H.useState(-1),
    [V, Z] = H.useState(-1),
    [st, ct] = H.useState(!1),
    pt = H.useRef(0),
    ft = H.useRef(null),
    [v, F] = Ng({ controlled: W, default: u ?? y, name: 'Slider' }),
    X =
      S &&
      ((lt, at, xt) => {
        const At = lt.nativeEvent || lt,
          Bt = new At.constructor(At.type, At);
        (Object.defineProperty(Bt, 'target', { writable: !0, value: { value: at, name: g } }),
          (ft.current = at),
          S(Bt, at, xt));
      }),
    et = Array.isArray(v);
  let z = et ? v.slice().sort(Qg) : [v];
  z = z.map((lt) => (lt == null ? y : hi(lt, y, h)));
  const J =
      p === !0 && E !== null
        ? [...Array(Math.floor((h - y) / E) + 1)].map((lt, at) => ({ value: y + E * at }))
        : p || [],
    I = J.map((lt) => lt.value),
    [it, yt] = H.useState(-1),
    b = H.useRef(null),
    B = Si(j, b),
    P = (lt) => (at) => {
      const xt = Number(at.currentTarget.getAttribute('data-index'));
      (pu(at.target) && yt(xt), Z(xt), lt?.onFocus?.(at));
    },
    tt = (lt) => (at) => {
      (pu(at.target) || yt(-1), Z(-1), lt?.onBlur?.(at));
    },
    nt = (lt, at) => {
      const xt = Number(lt.currentTarget.getAttribute('data-index')),
        At = z[xt],
        Bt = I.indexOf(At);
      let Et = at;
      if (J && E == null) {
        const Ye = I[I.length - 1];
        Et >= Ye ? (Et = Ye) : Et <= I[0] ? (Et = I[0]) : (Et = Et < At ? I[Bt - 1] : I[Bt + 1]);
      }
      if (((Et = hi(Et, y, h)), et)) {
        c && (Et = hi(Et, z[xt - 1] || -1 / 0, z[xt + 1] || 1 / 0));
        const Ye = Et;
        Et = km({ values: z, newValue: Et, index: xt });
        let Ke = xt;
        (c || (Ke = Et.indexOf(Ye)), Io({ sliderRef: b, activeIndex: Ke }));
      }
      (F(Et), yt(xt), X && !tu(Et, v) && X(lt, Et, xt), C && C(lt, ft.current ?? Et));
    },
    ot = (lt) => (at) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(at.key)) {
        at.preventDefault();
        const xt = Number(at.currentTarget.getAttribute('data-index')),
          At = z[xt];
        let Bt = null;
        if (E != null) {
          const Et = at.shiftKey ? L : E;
          switch (at.key) {
            case 'ArrowUp':
              Bt = pi(At, Et, 1, y, h);
              break;
            case 'ArrowRight':
              Bt = pi(At, Et, f ? -1 : 1, y, h);
              break;
            case 'ArrowDown':
              Bt = pi(At, Et, -1, y, h);
              break;
            case 'ArrowLeft':
              Bt = pi(At, Et, f ? 1 : -1, y, h);
              break;
            case 'PageUp':
              Bt = pi(At, L, 1, y, h);
              break;
            case 'PageDown':
              Bt = pi(At, L, -1, y, h);
              break;
            case 'Home':
              Bt = y;
              break;
            case 'End':
              Bt = h;
              break;
          }
        } else if (J) {
          const Et = I[I.length - 1],
            Ye = I.indexOf(At),
            Ke = [f ? 'ArrowRight' : 'ArrowLeft', 'ArrowDown', 'PageDown', 'Home'],
            It = [f ? 'ArrowLeft' : 'ArrowRight', 'ArrowUp', 'PageUp', 'End'];
          Ke.includes(at.key)
            ? Ye === 0
              ? (Bt = I[0])
              : (Bt = I[Ye - 1])
            : It.includes(at.key) && (Ye === I.length - 1 ? (Bt = Et) : (Bt = I[Ye + 1]));
        }
        Bt != null && nt(at, Bt);
      }
      lt?.onKeyDown?.(at);
    };
  (Cg(() => {
    o && b.current.contains(document.activeElement) && document.activeElement?.blur();
  }, [o]),
    o && Y !== -1 && N(-1),
    o && it !== -1 && yt(-1));
  const bt = (lt) => (at) => {
      (lt.onChange?.(at), nt(at, at.target.valueAsNumber));
    },
    Nt = H.useRef(void 0);
  let Ut = A;
  f && A === 'horizontal' && (Ut += '-reverse');
  const ze = ({ finger: lt, move: at = !1 }) => {
      const { current: xt } = b,
        { width: At, height: Bt, bottom: Et, left: Ye } = xt.getBoundingClientRect();
      let Ke;
      (Ut.startsWith('vertical') ? (Ke = (Et - lt.y) / Bt) : (Ke = (lt.x - Ye) / At),
        Ut.includes('-reverse') && (Ke = 1 - Ke));
      let It;
      if (((It = i3(Ke, y, h)), E)) It = o3(It, E, y);
      else {
        const Je = Lm(I, It);
        It = I[Je];
      }
      It = hi(It, y, h);
      let ie = 0;
      if (et) {
        (at ? (ie = Nt.current) : (ie = Lm(z, It)), c && (It = hi(It, z[ie - 1] || -1 / 0, z[ie + 1] || 1 / 0)));
        const Je = It;
        ((It = km({ values: z, newValue: It, index: ie })), (c && at) || ((ie = It.indexOf(Je)), (Nt.current = ie)));
      }
      return { newValue: It, activeIndex: ie };
    },
    He = vl((lt) => {
      const at = Po(lt, K);
      if (!at) return;
      if (((pt.current += 1), lt.type === 'mousemove' && lt.buttons === 0)) {
        Ae(lt);
        return;
      }
      const { newValue: xt, activeIndex: At } = ze({ finger: at, move: !0 });
      (Io({ sliderRef: b, activeIndex: At, setActive: N }),
        F(xt),
        !st && pt.current > l3 && ct(!0),
        X && !tu(xt, v) && X(lt, xt, At));
    }),
    Ae = vl((lt) => {
      const at = Po(lt, K);
      if ((ct(!1), !at)) return;
      const { newValue: xt } = ze({ finger: at, move: !0 });
      (N(-1), lt.type === 'touchend' && Z(-1), C && C(lt, ft.current ?? xt), (K.current = void 0), he());
    }),
    ue = vl((lt) => {
      if (o) return;
      $m() || lt.preventDefault();
      const at = lt.changedTouches[0];
      at != null && (K.current = at.identifier);
      const xt = Po(lt, K);
      if (xt !== !1) {
        const { newValue: Bt, activeIndex: Et } = ze({ finger: xt });
        (Io({ sliderRef: b, activeIndex: Et, setActive: N }), F(Bt), X && !tu(Bt, v) && X(lt, Bt, Et));
      }
      pt.current = 0;
      const At = ru(b.current);
      (At.addEventListener('touchmove', He, { passive: !0 }), At.addEventListener('touchend', Ae, { passive: !0 }));
    }),
    he = H.useCallback(() => {
      const lt = ru(b.current);
      (lt.removeEventListener('mousemove', He),
        lt.removeEventListener('mouseup', Ae),
        lt.removeEventListener('touchmove', He),
        lt.removeEventListener('touchend', Ae));
    }, [Ae, He]);
  (H.useEffect(() => {
    const { current: lt } = b;
    return (
      lt.addEventListener('touchstart', ue, { passive: $m() }),
      () => {
        (lt.removeEventListener('touchstart', ue), he());
      }
    );
  }, [he, ue]),
    H.useEffect(() => {
      o && he();
    }, [o, he]));
  const Tt = (lt) => (at) => {
      if ((lt.onMouseDown?.(at), o || at.defaultPrevented || at.button !== 0)) return;
      at.preventDefault();
      const xt = Po(at, K);
      if (xt !== !1) {
        const { newValue: Bt, activeIndex: Et } = ze({ finger: xt });
        (Io({ sliderRef: b, activeIndex: Et, setActive: N }), F(Bt), X && !tu(Bt, v) && X(at, Bt, Et));
      }
      pt.current = 0;
      const At = ru(b.current);
      (At.addEventListener('mousemove', He, { passive: !0 }), At.addEventListener('mouseup', Ae));
    },
    se = mu(et ? z[0] : y, y, h),
    jt = mu(z[z.length - 1], y, h) - se,
    le = (lt = {}) => {
      const at = ou(lt),
        xt = { onMouseDown: Tt(at || {}) },
        At = { ...at, ...xt };
      return { ...lt, ref: B, ...At };
    },
    $e = (lt) => (at) => {
      lt.onMouseOver?.(at);
      const xt = Number(at.currentTarget.getAttribute('data-index'));
      Z(xt);
    },
    Ze = (lt) => (at) => {
      (lt.onMouseLeave?.(at), Z(-1));
    },
    Ln = (lt = {}) => {
      const at = ou(lt),
        xt = { onMouseOver: $e(at || {}), onMouseLeave: Ze(at || {}) };
      return { ...lt, ...at, ...xt };
    },
    gt = (lt) => ({ pointerEvents: Y !== -1 && Y !== lt ? 'none' : void 0 });
  let va;
  return (
    A === 'vertical' && (va = f ? 'vertical-rl' : 'vertical-lr'),
    {
      active: Y,
      axis: Ut,
      axisProps: u3,
      dragging: st,
      focusedThumbIndex: it,
      getHiddenInputProps: (lt = {}) => {
        const at = ou(lt),
          xt = { onChange: bt(at || {}), onFocus: P(at || {}), onBlur: tt(at || {}), onKeyDown: ot(at || {}) },
          At = { ...at, ...xt };
        return {
          tabIndex: q,
          'aria-labelledby': i,
          'aria-orientation': A,
          'aria-valuemax': O(h),
          'aria-valuemin': O(y),
          name: g,
          type: 'range',
          min: a.min,
          max: a.max,
          step: a.step === null && a.marks ? 'any' : (a.step ?? void 0),
          disabled: o,
          ...lt,
          ...At,
          style: { ...n3, direction: f ? 'rtl' : 'ltr', width: '100%', height: '100%', writingMode: va },
        };
      },
      getRootProps: le,
      getThumbProps: Ln,
      marks: J,
      open: V,
      range: et,
      rootRef: B,
      trackLeap: jt,
      trackOffset: se,
      values: z,
      getThumbStyle: gt,
    }
  );
}
const f3 = (a) => !a || !Tr(a);
function d3(a) {
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
  p3 = (a) => {
    const { open: i } = a;
    return { offset: kt(i && wn.valueLabelOpen), circle: wn.valueLabelCircle, label: wn.valueLabelLabel };
  };
function h3(a) {
  const { children: i, className: u, value: o } = a,
    c = p3(a);
  return i
    ? H.cloneElement(
        i,
        { className: i.props.className },
        R.jsxs(H.Fragment, {
          children: [
            i.props.children,
            R.jsx('span', {
              className: kt(c.offset, u),
              'aria-hidden': !0,
              children: R.jsx('span', {
                className: c.circle,
                children: R.jsx('span', { className: c.label, children: o }),
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
const m3 = _t('span', {
    name: 'MuiSlider',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[`color${mt(u.color)}`],
        u.size !== 'medium' && i[`size${mt(u.size)}`],
        u.marked && i.marked,
        u.orientation === 'vertical' && i.vertical,
        u.track === 'inverted' && i.trackInverted,
        u.track === !1 && i.trackFalse,
      ];
    },
  })(
    ye(({ theme: a }) => ({
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
  g3 = _t('span', { name: 'MuiSlider', slot: 'Rail' })({
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
  y3 = _t('span', { name: 'MuiSlider', slot: 'Track' })(
    ye(({ theme: a }) => ({
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
  v3 = _t('span', {
    name: 'MuiSlider',
    slot: 'Thumb',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.thumb, i[`thumbColor${mt(u.color)}`], u.size !== 'medium' && i[`thumbSize${mt(u.size)}`]];
    },
  })(
    ye(({ theme: a }) => ({
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
  b3 = _t(h3, { name: 'MuiSlider', slot: 'ValueLabel' })(
    ye(({ theme: a }) => ({
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
  S3 = _t('span', {
    name: 'MuiSlider',
    slot: 'Mark',
    shouldForwardProp: (a) => $f(a) && a !== 'markActive',
    overridesResolver: (a, i) => {
      const { markActive: u } = a;
      return [i.mark, u && i.markActive];
    },
  })(
    ye(({ theme: a }) => ({
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
  x3 = _t('span', { name: 'MuiSlider', slot: 'MarkLabel', shouldForwardProp: (a) => $f(a) && a !== 'markLabelActive' })(
    ye(({ theme: a }) => ({
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
  C3 = (a) => {
    const { disabled: i, dragging: u, marked: o, orientation: c, track: f, classes: p, color: h, size: y } = a,
      g = {
        root: [
          'root',
          i && 'disabled',
          u && 'dragging',
          o && 'marked',
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
    return on(g, d3, p);
  },
  T3 = ({ children: a }) => a,
  of = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiSlider' }),
      c = U2(),
      {
        'aria-label': f,
        'aria-valuetext': p,
        'aria-labelledby': h,
        component: y = 'span',
        components: g = {},
        componentsProps: S = {},
        color: C = 'primary',
        classes: A,
        className: j,
        disableSwap: O = !1,
        disabled: E = !1,
        getAriaLabel: L,
        getAriaValueText: q,
        marks: W = !1,
        max: K = 100,
        min: Y = 0,
        name: N,
        onChange: V,
        onChangeCommitted: Z,
        orientation: st = 'horizontal',
        shiftStep: ct = 10,
        size: pt = 'medium',
        step: ft = 1,
        scale: v = Ym,
        slotProps: F,
        slots: X,
        tabIndex: et,
        track: z = 'normal',
        value: J,
        valueLabelDisplay: I = 'off',
        valueLabelFormat: it = Ym,
        ...yt
      } = o,
      b = {
        ...o,
        isRtl: c,
        max: K,
        min: Y,
        classes: A,
        disabled: E,
        disableSwap: O,
        orientation: st,
        marks: W,
        color: C,
        size: pt,
        step: ft,
        shiftStep: ct,
        scale: v,
        track: z,
        valueLabelDisplay: I,
        valueLabelFormat: it,
      },
      {
        axisProps: B,
        getRootProps: P,
        getHiddenInputProps: tt,
        getThumbProps: nt,
        open: ot,
        active: bt,
        axis: Nt,
        focusedThumbIndex: Ut,
        range: ze,
        dragging: He,
        marks: Ae,
        values: ue,
        trackOffset: he,
        trackLeap: Tt,
        getThumbStyle: se,
      } = c3({ ...b, rootRef: u });
    ((b.marked = Ae.length > 0 && Ae.some((te) => te.label)), (b.dragging = He), (b.focusedThumbIndex = Ut));
    const jt = C3(b),
      le = X?.root ?? g.Root ?? m3,
      $e = X?.rail ?? g.Rail ?? g3,
      Ze = X?.track ?? g.Track ?? y3,
      Ln = X?.thumb ?? g.Thumb ?? v3,
      gt = X?.valueLabel ?? g.ValueLabel ?? b3,
      va = X?.mark ?? g.Mark ?? S3,
      Me = X?.markLabel ?? g.MarkLabel ?? x3,
      lt = X?.input ?? g.Input ?? 'input',
      at = F?.root ?? S.root,
      xt = F?.rail ?? S.rail,
      At = F?.track ?? S.track,
      Bt = F?.thumb ?? S.thumb,
      Et = F?.valueLabel ?? S.valueLabel,
      Ye = F?.mark ?? S.mark,
      Ke = F?.markLabel ?? S.markLabel,
      It = F?.input ?? S.input,
      ie = Xa({
        elementType: le,
        getSlotProps: P,
        externalSlotProps: at,
        externalForwardedProps: yt,
        additionalProps: { ...(f3(le) && { as: y }) },
        ownerState: { ...b, ...at?.ownerState },
        className: [jt.root, j],
      }),
      Je = Xa({ elementType: $e, externalSlotProps: xt, ownerState: b, className: jt.rail }),
      qe = Xa({
        elementType: Ze,
        externalSlotProps: At,
        additionalProps: { style: { ...B[Nt].offset(he), ...B[Nt].leap(Tt) } },
        ownerState: { ...b, ...At?.ownerState },
        className: jt.track,
      }),
      Ti = Xa({
        elementType: Ln,
        getSlotProps: nt,
        externalSlotProps: Bt,
        ownerState: { ...b, ...Bt?.ownerState },
        className: jt.thumb,
      }),
      Du = Xa({
        elementType: gt,
        externalSlotProps: Et,
        ownerState: { ...b, ...Et?.ownerState },
        className: jt.valueLabel,
      }),
      Ei = Xa({ elementType: va, externalSlotProps: Ye, ownerState: b, className: jt.mark }),
      ba = Xa({ elementType: Me, externalSlotProps: Ke, ownerState: b, className: jt.markLabel }),
      Cl = Xa({ elementType: lt, getSlotProps: tt, externalSlotProps: It, ownerState: b });
    return R.jsxs(le, {
      ...ie,
      children: [
        R.jsx($e, { ...Je }),
        R.jsx(Ze, { ...qe }),
        Ae.filter((te) => te.value >= Y && te.value <= K).map((te, ee) => {
          const Sa = mu(te.value, Y, K),
            kn = B[Nt].offset(Sa);
          let Bn;
          return (
            z === !1
              ? (Bn = ue.includes(te.value))
              : (Bn =
                  (z === 'normal' && (ze ? te.value >= ue[0] && te.value <= ue[ue.length - 1] : te.value <= ue[0])) ||
                  (z === 'inverted' && (ze ? te.value <= ue[0] || te.value >= ue[ue.length - 1] : te.value >= ue[0]))),
            R.jsxs(
              H.Fragment,
              {
                children: [
                  R.jsx(va, {
                    'data-index': ee,
                    ...Ei,
                    ...(!Tr(va) && { markActive: Bn }),
                    style: { ...kn, ...Ei.style },
                    className: kt(Ei.className, Bn && jt.markActive),
                  }),
                  te.label != null
                    ? R.jsx(Me, {
                        'aria-hidden': !0,
                        'data-index': ee,
                        ...ba,
                        ...(!Tr(Me) && { markLabelActive: Bn }),
                        style: { ...kn, ...ba.style },
                        className: kt(jt.markLabel, ba.className, Bn && jt.markLabelActive),
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
          const Sa = mu(te, Y, K),
            kn = B[Nt].offset(Sa),
            Bn = I === 'off' ? T3 : gt;
          return R.jsx(
            Bn,
            {
              ...(!Tr(Bn) && {
                valueLabelFormat: it,
                valueLabelDisplay: I,
                value: typeof it == 'function' ? it(v(te), ee) : it,
                index: ee,
                open: ot === ee || bt === ee || I === 'on',
                disabled: E,
              }),
              ...Du,
              children: R.jsx(Ln, {
                'data-index': ee,
                ...Ti,
                className: kt(jt.thumb, Ti.className, bt === ee && jt.active, Ut === ee && jt.focusVisible),
                style: { ...kn, ...se(ee), ...Ti.style },
                children: R.jsx(lt, {
                  'data-index': ee,
                  'aria-label': L ? L(ee) : f,
                  'aria-valuenow': v(te),
                  'aria-labelledby': h,
                  'aria-valuetext': q ? q(v(te), ee) : p,
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
  Er = iS({
    createStyledComponent: _t('div', { name: 'MuiStack', slot: 'Root' }),
    useThemeProps: (a) => un({ props: a, name: 'MuiStack' }),
  });
function E3(a) {
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
  z3 = (a) => {
    const { classes: i, edge: u, size: o, color: c, checked: f, disabled: p } = a,
      h = {
        root: ['root', u && `edge${mt(u)}`, `size${mt(o)}`],
        switchBase: ['switchBase', `color${mt(c)}`, f && 'checked', p && 'disabled'],
        thumb: ['thumb'],
        track: ['track'],
        input: ['input'],
      },
      y = on(h, E3, i);
    return { ...i, ...y };
  },
  A3 = _t('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, u.edge && i[`edge${mt(u.edge)}`], i[`size${mt(u.size)}`]];
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
  M3 = _t(e3, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.switchBase, { [`& .${Ve.input}`]: i.input }, u.color !== 'default' && i[`color${mt(u.color)}`]];
    },
  })(
    ye(({ theme: a }) => ({
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
    ye(({ theme: a }) => ({
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
  O3 = _t('span', { name: 'MuiSwitch', slot: 'Track' })(
    ye(({ theme: a }) => ({
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
  R3 = _t('span', { name: 'MuiSwitch', slot: 'Thumb' })(
    ye(({ theme: a }) => ({
      boxShadow: (a.vars || a).shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%',
    }))
  ),
  w3 = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiSwitch' }),
      {
        className: c,
        color: f = 'primary',
        edge: p = !1,
        size: h = 'medium',
        sx: y,
        slots: g = {},
        slotProps: S = {},
        ...C
      } = o,
      A = { ...o, color: f, edge: p, size: h },
      j = z3(A),
      O = { slots: g, slotProps: S },
      [E, L] = Qa('root', {
        className: kt(j.root, c),
        elementType: A3,
        externalForwardedProps: O,
        ownerState: A,
        additionalProps: { sx: y },
      }),
      [q, W] = Qa('thumb', { className: j.thumb, elementType: R3, externalForwardedProps: O, ownerState: A }),
      K = R.jsx(q, { ...W }),
      [Y, N] = Qa('track', { className: j.track, elementType: O3, externalForwardedProps: O, ownerState: A });
    return R.jsxs(E, {
      ...L,
      children: [
        R.jsx(M3, {
          type: 'checkbox',
          icon: K,
          checkedIcon: K,
          ref: u,
          ownerState: A,
          ...C,
          classes: { ...j, root: j.switchBase },
          slots: { ...(g.switchBase && { root: g.switchBase }), ...(g.input && { input: g.input }) },
          slotProps: {
            ...(S.switchBase && { root: typeof S.switchBase == 'function' ? S.switchBase(A) : S.switchBase }),
            input: { role: 'switch' },
            ...(S.input && { input: typeof S.input == 'function' ? S.input(A) : S.input }),
          },
        }),
        R.jsx(Y, { ...N }),
      ],
    });
  });
function _3(a) {
  return Qe('MuiToolbar', a);
}
rn('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const B3 = (a) => {
    const { classes: i, disableGutters: u, variant: o } = a;
    return on({ root: ['root', !u && 'gutters', o] }, _3, i);
  },
  D3 = _t('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, !u.disableGutters && i.gutters, i[u.variant]];
    },
  })(
    ye(({ theme: a }) => ({
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
  j3 = H.forwardRef(function (i, u) {
    const o = un({ props: i, name: 'MuiToolbar' }),
      { className: c, component: f = 'div', disableGutters: p = !1, variant: h = 'regular', ...y } = o,
      g = { ...o, component: f, disableGutters: p, variant: h },
      S = B3(g);
    return R.jsx(D3, { as: f, className: kt(S.root, c), ref: u, ownerState: g, ...y });
  });
var Zg = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  qm = Ue.createContext && Ue.createContext(Zg),
  N3 = ['attr', 'size', 'title'];
function U3(a, i) {
  if (a == null) return {};
  var u = H3(a, i),
    o,
    c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(a);
    for (c = 0; c < f.length; c++)
      ((o = f[c]), !(i.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(a, o) && (u[o] = a[o]));
  }
  return u;
}
function H3(a, i) {
  if (a == null) return {};
  var u = {};
  for (var o in a)
    if (Object.prototype.hasOwnProperty.call(a, o)) {
      if (i.indexOf(o) >= 0) continue;
      u[o] = a[o];
    }
  return u;
}
function gu() {
  return (
    (gu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var u = arguments[i];
            for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (a[o] = u[o]);
          }
          return a;
        }),
    gu.apply(this, arguments)
  );
}
function Gm(a, i) {
  var u = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(a);
    (i &&
      (o = o.filter(function (c) {
        return Object.getOwnPropertyDescriptor(a, c).enumerable;
      })),
      u.push.apply(u, o));
  }
  return u;
}
function yu(a) {
  for (var i = 1; i < arguments.length; i++) {
    var u = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Gm(Object(u), !0).forEach(function (o) {
          L3(a, o, u[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
        : Gm(Object(u)).forEach(function (o) {
            Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(u, o));
          });
  }
  return a;
}
function L3(a, i, u) {
  return (
    (i = k3(i)),
    i in a ? Object.defineProperty(a, i, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (a[i] = u),
    a
  );
}
function k3(a) {
  var i = $3(a, 'string');
  return typeof i == 'symbol' ? i : i + '';
}
function $3(a, i) {
  if (typeof a != 'object' || !a) return a;
  var u = a[Symbol.toPrimitive];
  if (u !== void 0) {
    var o = u.call(a, i);
    if (typeof o != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (i === 'string' ? String : Number)(a);
}
function Kg(a) {
  return a && a.map((i, u) => Ue.createElement(i.tag, yu({ key: u }, i.attr), Kg(i.child)));
}
function Wn(a) {
  return (i) => Ue.createElement(Y3, gu({ attr: yu({}, a.attr) }, i), Kg(a.child));
}
function Y3(a) {
  var i = (u) => {
    var { attr: o, size: c, title: f } = a,
      p = U3(a, N3),
      h = c || u.size || '1em',
      y;
    return (
      u.className && (y = u.className),
      a.className && (y = (y ? y + ' ' : '') + a.className),
      Ue.createElement(
        'svg',
        gu({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, u.attr, o, p, {
          className: y,
          style: yu(yu({ color: a.color || u.color }, u.style), a.style),
          height: h,
          width: h,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        f && Ue.createElement('title', null, f),
        a.children
      )
    );
  };
  return qm !== void 0 ? Ue.createElement(qm.Consumer, null, (u) => i(u)) : i(Zg);
}
function q3(a) {
  return Wn({
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
function G3(a) {
  return Wn({
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
  return Wn({
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
function V3(a) {
  return Wn({
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
function Jg(a) {
  return Wn({
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
function X3(a) {
  return Wn({
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
function Q3(a) {
  return Wn({
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
function Z3(a) {
  return Wn({
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
  return Wn({
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
function K3(a) {
  return Wn({
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
const Qf = {
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
      blendMode: 'multiply',
      fill: 'rgba(0, 225, 250, 0.13)',
    },
    summerHeat: {
      name: 'Summer Heat',
      section: 'Color Tones',
      filter:
        'brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      blendMode: 'overlay',
      fill: 'rgba(250, 233, 0, 0.23)',
    },
    fever: {
      name: 'Fever',
      section: 'Color Tones',
      filter: 'contrast(97%) grayscale(0%) hue-rotate(330deg) invert(0%) opacity(100%) saturate(111%) sepia(0%)',
      blendMode: 'multiply',
      fill: 'rgba(255, 0, 0, 0.13)',
    },
    strawberry: {
      name: 'Strawberry',
      section: 'Color Tones',
      filter: 'grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      blendMode: 'screen',
      fill: 'rgba(250, 0, 204, 0.5)',
    },
    ibiza: {
      name: 'Ibiza',
      section: 'Color Tones',
      filter: 'contrast(107%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(165%) sepia(50%)',
      blendMode: 'soft-light',
      fill: 'rgba(58, 0, 250, 0.5)',
    },
    sweetSunset: {
      name: 'Sweet Sunset',
      section: 'Color Tones',
      filter: 'contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
      blendMode: 'multiply',
      fill: 'rgba(250, 0, 204, 0.15)',
    },
    blueRock: {
      name: 'Blue Rock',
      section: 'Color Tones',
      filter: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
      blendMode: 'multiply',
      fill: 'rgba(0, 142, 250, 0.15)',
    },
    oceanWave: {
      name: 'Ocean Wave',
      section: 'Color Tones',
      filter:
        'brightness(105%) contrast(104%) grayscale(10%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
      blendMode: 'multiply',
      fill: 'rgba(0, 229, 250, 0.13)',
    },
    littleRed: {
      name: 'Little Red',
      section: 'Color Tones',
      filter:
        'brightness(105%) contrast(106%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(90%) sepia(0%)',
      blendMode: 'overlay',
      fill: 'rgba(250, 0, 0, 0.3)',
    },
    spaceTrip: {
      name: 'Space Trip',
      section: 'Color Tones',
      filter: 'grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
      blendMode: 'saturation',
      fill: '#faaa00',
    },
    desertMorning: {
      name: 'Desert Morning',
      section: 'Color Tones',
      filter:
        'brightness(110%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      blendMode: 'hard-light',
      fill: 'rgba(250, 229, 0, 0.2)',
    },
    blueLagoon: {
      name: 'Blue Lagoon',
      section: 'Color Tones',
      filter:
        'brightness(104%) contrast(104%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
      blendMode: 'multiply',
      fill: 'rgba(0, 225, 250, 0.5)',
    },
    warmIce: {
      name: 'Warm Ice',
      section: 'Color Tones',
      filter:
        'brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%)',
      blendMode: 'lighten',
      fill: 'rgba(107, 233, 255, 0.23)',
    },
    waterness: {
      name: 'Waterness',
      section: 'Color Tones',
      filter: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
      blendMode: 'multiply',
      fill: 'rgba(0, 142, 250, 0.15)',
    },
    distantMountain: {
      name: 'Distant Mountain',
      section: 'Color Tones',
      filter: 'contrast(120%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      blendMode: 'lighten',
      fill: '#033dc5',
    },
    burntCoffee: {
      name: 'Burnt Coffee',
      section: 'Sepia Tones',
      filter: 'contrast(80%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      blendMode: 'multiply',
      fill: '#e3dca1',
    },
    oldWood: {
      name: 'Old Wood',
      section: 'Sepia Tones',
      filter:
        'brightness(105%) contrast(102%) grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(9%)',
      blendMode: 'soft-light',
      fill: '#574400',
    },
    coalPaper: {
      name: 'Coal Paper',
      section: 'Sepia Tones',
      filter:
        'brightness(90%) contrast(125%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
      blendMode: 'darken',
      fill: 'rgba(125, 0, 0, 0.1)',
    },
    vintageMay: {
      name: 'Vintage May',
      section: 'Sepia Tones',
      filter: 'brightness(105%)  grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
      fill: 'rgba(250, 170, 0, 0.13)',
    },
    simpleGray: {
      name: 'Simple Gray',
      section: 'Graytones',
      filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
      fill: 'rgba(250, 170, 0, 0.13)',
    },
  },
  J3 = ({ capturedImage: a, selectedFilter: i, onSelectFilter: u }) => {
    const o = {};
    return (
      Object.entries(Qf).forEach(([c, f]) => {
        const p = c;
        (o[f.section] || (o[f.section] = []), o[f.section].push([p, f]));
      }),
      R.jsxs(zt, {
        sx: { bgcolor: 'rgba(0,0,0,0.8)', width: '100%', p: 2 },
        children: [
          R.jsx(an, { variant: 'subtitle2', sx: { color: 'white', mb: 1 }, children: 'Choose Filter' }),
          R.jsx(Er, {
            direction: 'row',
            spacing: 0,
            sx: { overflowX: 'auto', pb: 1 },
            children: Object.entries(o).map(([c, f]) =>
              R.jsxs(
                zt,
                {
                  sx: { position: 'relative', pr: 3, mr: 3 },
                  children: [
                    R.jsx(zt, {
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
                        children: c,
                      }),
                    }),
                    R.jsx(zt, {
                      sx: { display: 'flex', flexDirection: 'row', gap: 1, mt: 4 },
                      children: f.map(([p, { name: h, filter: y, blendMode: g, fill: S }]) =>
                        R.jsxs(
                          zt,
                          {
                            sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 70 },
                            children: [
                              R.jsxs(xi, {
                                onClick: () => u(p),
                                variant: i === p ? 'contained' : 'outlined',
                                sx: {
                                  width: 70,
                                  height: 70,
                                  p: 0,
                                  borderRadius: 2,
                                  overflow: 'hidden',
                                  position: 'relative',
                                },
                                children: [
                                  R.jsx('img', {
                                    src: a,
                                    alt: h,
                                    style: { width: '100%', height: '100%', objectFit: 'cover', filter: y },
                                  }),
                                  g &&
                                    typeof S == 'string' &&
                                    R.jsx(zt, {
                                      sx: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: S,
                                        mixBlendMode: g,
                                        pointerEvents: 'none',
                                      },
                                    }),
                                ],
                              }),
                              R.jsx(an, { variant: 'caption', sx: { color: 'white', mt: 0.5 }, children: h }),
                            ],
                          },
                          p
                        )
                      ),
                    }),
                  ],
                },
                c
              )
            ),
          }),
        ],
      })
    );
  },
  Fg = ({ imageAdjustments: a, onAdjustmentsChange: i }) =>
    R.jsxs(zt, {
      children: [
        R.jsxs(zt, {
          sx: { mb: 2 },
          children: [
            R.jsxs(Er, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(Q3, { size: 20, color: 'white' }),
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
              onChange: (u, o) => i((c) => ({ ...c, brightness: typeof o == 'number' ? o : o[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(zt, {
          sx: { mb: 2 },
          children: [
            R.jsxs(Er, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(G3, { size: 20, color: 'white' }),
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
              onChange: (u, o) => i((c) => ({ ...c, contrast: typeof o == 'number' ? o : o[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(zt, {
          children: [
            R.jsxs(Er, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(Z3, { size: 20, color: 'white' }),
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
              onChange: (u, o) => i((c) => ({ ...c, saturation: typeof o == 'number' ? o : o[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
      ],
    }),
  Xm = ({ handleStart: a, handleMove: i, handleEnd: u }) =>
    R.jsx(zt, {
      sx: {
        borderRadius: 3,
        boxShadow: '0 -2px 6px rgba(0,0,0,0.5)',
        cursor: 'grab',
        display: 'flex',
        justifyContent: 'center',
        py: 3,
        width: '100%',
      },
      onTouchStart: (o) => a(o.touches[0].clientY),
      onTouchMove: (o) => i(o.touches[0].clientY),
      onTouchEnd: u,
      onMouseDown: (o) => a(o.clientY),
      children: R.jsx(zt, { sx: { bgcolor: 'grey.500', borderRadius: 3, height: 2, width: '13%', minWidth: '50px' } }),
    }),
  Tf = ({ position: a = 'bottom', onCloseEvent: i = 'adjustmentSwipeClose', minHeight: u = 150, children: o }) => {
    const c = H.useRef(null),
      f = H.useRef(null),
      [p, h] = H.useState(0),
      [y, g] = H.useState(null),
      [S, C] = H.useState(!1),
      [A, j] = H.useState(0),
      O = (q) => {
        (g(q), C(!0), (document.body.style.userSelect = 'none'));
      },
      E = (q) => {
        if (!S || y === null) return;
        const W = a === 'top' ? q - y : y - q,
          K = Math.max(u, p - W);
        j(K);
      },
      L = () => {
        (A <= u + 20 && window.dispatchEvent(new CustomEvent(i)),
          C(!1),
          g(null),
          j(p),
          (document.body.style.userSelect = ''));
      };
    return (
      H.useEffect(() => {
        const q = (K) => {
            E(K.clientY);
          },
          W = () => {
            L();
          };
        return (
          S && (window.addEventListener('mousemove', q), window.addEventListener('mouseup', W)),
          () => {
            (window.removeEventListener('mousemove', q), window.removeEventListener('mouseup', W));
          }
        );
      }, [S, y, A]),
      H.useEffect(() => {
        const q = () => {
          if (f.current) {
            const W = f.current.getBoundingClientRect().height;
            (h(W), j((K) => (S ? K : W)));
          }
        };
        return (window.addEventListener('resize', q), q(), () => window.removeEventListener('resize', q));
      }, [S]),
      H.useEffect(() => {
        if (f.current) {
          const q = f.current.getBoundingClientRect().height;
          (h(q), j(q));
        }
      }, []),
      R.jsxs(zt, {
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
          a === 'top' && R.jsx(Xm, { handleStart: O, handleMove: E, handleEnd: L }),
          R.jsx(zt, {
            ref: c,
            sx: { height: `${A}px`, transition: 'height 0.3s ease-in-out', overflow: 'hidden', p: 2 },
            children: R.jsx(zt, { ref: f, children: o }),
          }),
          a === 'bottom' && R.jsx(Xm, { handleStart: O, handleMove: E, handleEnd: L }),
        ],
      })
    );
  },
  W3 = ({ onRetake: a, onSave: i, showSave: u = !0, toggleFilters: o, toggleControls: c }) =>
    R.jsxs(zt, {
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
        R.jsxs(zt, {
          children: [
            R.jsx(vi, { sx: { color: 'white' }, onClick: o, children: R.jsx(K3, { size: 24, color: 'white' }) }),
            R.jsx(vi, { sx: { color: 'white' }, onClick: c, children: R.jsx(Wg, { size: 24, color: 'white' }) }),
          ],
        }),
        R.jsxs(zt, {
          sx: { display: 'flex', gap: 2 },
          children: [
            R.jsx(xi, {
              variant: 'outlined',
              onClick: a,
              sx: { color: 'white', borderColor: 'rgba(255,255,255,0.5)' },
              startIcon: R.jsx(Jg, { width: 20, height: 20, fill: 'white' }),
              children: 'Retake',
            }),
            u &&
              i &&
              R.jsx(xi, {
                variant: 'contained',
                onClick: i,
                sx: { bgcolor: 'primary.main', color: 'white' },
                startIcon: R.jsx(q3, { size: 20 }),
                children: 'Save Photo',
              }),
          ],
        }),
      ],
    }),
  F3 = ({
    capturedImage: a,
    onRetake: i,
    onSave: u,
    selectedFilter: o,
    setSelectedFilter: c,
    showSave: f = !0,
    skipFilters: p,
    imageAdjustments: h,
    onAdjustmentsChange: y,
  }) => {
    const [g, S] = H.useState(null),
      C = () => {
        S((j) => (j === 'filters' ? null : 'filters'));
      },
      A = () => {
        S((j) => (j === 'adjustments' ? null : 'adjustments'));
      };
    return (
      H.useEffect(() => {
        const j = () => {
            g === 'adjustments' && S(null);
          },
          O = () => {
            g === 'filters' && S(null);
          };
        return (
          window.addEventListener('adjustmentSwipeClose', j),
          window.addEventListener('filterSwipeClose', O),
          () => {
            (window.removeEventListener('adjustmentSwipeClose', j), window.removeEventListener('filterSwipeClose', O));
          }
        );
      }, [g]),
      R.jsxs(zt, {
        sx: { position: 'relative' },
        children: [
          !p &&
            R.jsx(wr, {
              in: g === 'filters',
              timeout: 'auto',
              unmountOnExit: !0,
              sx: { position: 'absolute', bottom: '72px', width: '100%' },
              children: R.jsx(Tf, {
                position: 'top',
                onCloseEvent: 'filterSwipeClose',
                children: R.jsx(J3, { capturedImage: a, selectedFilter: o, onSelectFilter: c }),
              }),
            }),
          R.jsx(wr, {
            in: g === 'adjustments',
            timeout: 'auto',
            unmountOnExit: !0,
            sx: { position: 'absolute', bottom: '72px', width: '100%' },
            children: R.jsx(Tf, {
              position: 'top',
              onCloseEvent: 'adjustmentSwipeClose',
              children: R.jsx(Fg, { imageAdjustments: h, onAdjustmentsChange: y }),
            }),
          }),
          R.jsx(W3, {
            onRetake: i,
            onSave: u,
            showSave: f,
            toggleFilters: C,
            showFilters: g === 'filters',
            showControls: g === 'adjustments',
            toggleControls: A,
          }),
        ],
      })
    );
  },
  P3 = ({ isFlipped: a, onClose: i, showControls: u, toggleControls: o, toggleFlip: c }) =>
    R.jsx(zt, {
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
          R.jsxs(zt, {
            children: [
              R.jsx(vi, { onClick: o, sx: { p: 1, color: 'white' }, children: R.jsx(Wg, { size: 24 }) }),
              R.jsx(vi, {
                onClick: c,
                sx: { p: 1, color: 'white' },
                children: R.jsx(V3, {
                  size: 24,
                  style: { transition: 'transform 0.3s', transform: a ? 'scaleX(1)' : 'scaleX(-1)' },
                }),
              }),
            ],
          }),
          R.jsx(an, {
            variant: 'h6',
            sx: { color: 'white', position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
            children: u ? 'Adjustments' : 'Camera',
          }),
          i &&
            R.jsx(vi, {
              onClick: i,
              sx: { p: 1, color: 'white' },
              children: R.jsx(Jg, { width: 24, height: 24, fill: 'white' }),
            }),
        ],
      }),
    }),
  I3 = ({ message: a }) =>
    R.jsx(zt, {
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
  tx = ({ onCapture: a, isStreaming: i, mobileOS: u, isMobile: o }) =>
    R.jsx(zt, {
      sx: {
        border: u === 'ios' ? '4px solid white' : 'none',
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
          bgcolor: o ? 'white' : 'primary.main',
          borderRadius: '50%',
          height: 80,
          minWidth: 0,
          p: 0,
          width: 80,
          '&:hover': { bgcolor: 'primary.dark' },
        },
        children: !o && R.jsx(X3, { size: 40, fill: 'white' }),
      }),
    }),
  ex = ({ capturedImage: a, selectedFilter: i, isFlipped: u, skipFilters: o = !1, imageAdjustments: c }) => {
    const f = Qf[i],
      p = `
    brightness(${c.brightness}%)
    contrast(${c.contrast}%)
    saturate(${c.saturation}%)
  `,
      h = {
        filter: o ? p : `${p} ${f.filter || ''}`,
        maxWidth: '100%',
        height: 'auto',
        width: 'auto',
        maxHeight: '100%',
        objectFit: 'contain',
        transform: u ? 'scaleX(-1)' : 'none',
      };
    return R.jsx(zt, {
      sx: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
      children: R.jsxs(zt, {
        sx: { position: 'relative', display: 'inline-block', lineHeight: 0 },
        children: [
          R.jsx('img', { src: a, alt: 'Captured', style: h }),
          !o &&
            (f.blendMode || f.fill) &&
            R.jsx(zt, {
              sx: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: typeof f.fill == 'string' ? f.fill : 'transparent',
                mixBlendMode: f.blendMode || 'normal',
                opacity: 1,
                pointerEvents: 'none',
              },
            }),
        ],
      }),
    });
  },
  nx = ({ isMobile: a, mobileOS: i, switchCamera: u, facingMode: o }) => {
    const c = {
      transition: 'transform 0.3s cubic-bezier(0.88, 0.18, 0.61, 1.02)',
      transform: o === 'user' ? 'rotate(180deg)' : 'rotate(0deg)',
    };
    return R.jsx(zt, {
      children:
        a &&
        R.jsx(vi, {
          onClick: u,
          sx: { color: 'white', bgcolor: 'rgba(0,0,0,0.3)', width: 60, height: 60 },
          children:
            i === 'android' ? R.jsx(Vm, { size: 30, style: { ...c } }) : R.jsx(Vm, { size: 30, style: { ...c } }),
        }),
    });
  },
  ax = async (a) => {
    const i = { video: { facingMode: a, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: !1 };
    return await navigator.mediaDevices.getUserMedia(i);
  },
  Qm = (a) => {
    a &&
      a.getTracks().forEach((i) => {
        (i.stop(), (i.enabled = !1));
      });
  };
function lx() {
  const a = navigator.userAgent || navigator.vendor;
  return /android/i.test(a)
    ? { isMobile: !0, mobileOS: 'android' }
    : /iPad|iPhone|iPod/.test(a)
      ? { isMobile: !0, mobileOS: 'ios' }
      : navigator.platform === 'MacIntel' && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        ? { isMobile: !0, mobileOS: 'ios' }
        : { isMobile: !1, mobileOS: null };
}
const ix = ({ onImageCaptured: a, onClose: i, skipFilters: u = !1 }) => {
  const o = H.useRef(null),
    c = H.useRef(null),
    f = H.useRef(null),
    [p, h] = H.useState(!1),
    [y, g] = H.useState('user'),
    [S, C] = H.useState({ brightness: 100, contrast: 100, saturation: 100 }),
    [A, j] = H.useState(null),
    [O, E] = H.useState('none'),
    [L, q] = H.useState(!1),
    [W, K] = H.useState(''),
    [Y, N] = H.useState(!0),
    [V, Z] = H.useState(!1),
    [st, ct] = H.useState(null),
    pt = Qf[O],
    ft = async () => {
      try {
        K('');
        const b = await ax(y);
        ((f.current = b),
          o.current &&
            ((o.current.srcObject = b),
            (o.current.onloadedmetadata = () => {
              o.current && (o.current.play(), h(!0));
            })));
      } catch (b) {
        (console.error('Camera access error:', b), K('Unable to access camera. Please check permissions.'));
      }
    },
    v = () => {
      f.current && (Qm(f.current), (f.current = null), h(!1));
    },
    F = () => {
      (v(), g((b) => (b === 'user' ? 'environment' : 'user')));
    },
    X = () => {
      const b = o.current,
        B = c.current;
      if (!b || !B || !f.current) return;
      ((B.width = b.videoWidth), (B.height = b.videoHeight));
      const P = B.getContext('2d');
      if (!P) return;
      (P.save(),
        (P.filter = `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%)`),
        Y && (P.translate(B.width, 0), P.scale(-1, 1)),
        P.drawImage(b, 0, 0, B.width, B.height),
        P.restore());
      const tt = B.toDataURL('image/jpeg', 0.95);
      if ((j(tt), v(), u)) {
        a && a(tt);
        return;
      }
    },
    et = () => {
      if (u) return;
      const b = c.current;
      if (!b || !A) return;
      const B = b.getContext('2d');
      if (!B) return;
      const P = new Image();
      ((P.onload = () => {
        const { filter: tt, blendMode: nt, fill: ot } = pt;
        ((b.width = P.width),
          (b.height = P.height),
          B.clearRect(0, 0, b.width, b.height),
          B.save(),
          (B.filter = `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%) ${tt}`),
          B.drawImage(P, 0, 0, b.width, b.height),
          (B.filter = 'none'),
          nt &&
            ot &&
            ((B.globalCompositeOperation = nt),
            (B.fillStyle = typeof ot == 'string' ? ot : '#000'),
            B.fillRect(0, 0, b.width, b.height)),
          B.restore());
        const bt = b.toDataURL('image/jpeg', 0.95);
        if (a) a(bt);
        else {
          const Nt = document.createElement('a');
          ((Nt.download = `photo-${Date.now()}.jpg`), (Nt.href = bt), Nt.click());
        }
        J();
      }),
        (P.src = A));
    },
    z = () => {
      (J(), ft());
    },
    J = () => {
      (j(null), E('none'), C({ brightness: 100, contrast: 100, saturation: 100 }));
    },
    I = () => {
      (v(), i && i());
    },
    it = () => {
      const { isMobile: b, mobileOS: B } = lx();
      (Z(b), ct(B));
    };
  (H.useEffect(
    () => (
      ft(),
      () => {
        f.current && (Qm(f.current), (f.current = null));
      }
    ),
    [y]
  ),
    H.useEffect(() => {
      const b = () => {
        it();
      };
      (b(), window.addEventListener('resize', b));
      const B = () => q(!1);
      return (
        window.addEventListener('adjustmentSwipeClose', B),
        () => {
          (window.removeEventListener('resize', b), window.removeEventListener('adjustmentSwipeClose', B));
        }
      );
    }, []));
  const yt = {
    filter: `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%)`,
    height: '100%',
    left: 0,
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    transform: Y ? 'scaleX(-1)' : 'none',
    width: '100%',
  };
  return R.jsxs(zt, {
    sx: { width: '100%', height: '100%', position: 'relative', bgcolor: 'black', overflow: 'hidden' },
    children: [
      !A || u
        ? R.jsxs(R.Fragment, {
            children: [
              R.jsx('video', { ref: o, autoPlay: !0, playsInline: !0, muted: !0, style: yt }),
              R.jsx(P3, {
                showControls: L,
                toggleControls: () => q(!L),
                isFlipped: Y,
                toggleFlip: () => N((b) => !b),
                onClose: i ? I : void 0,
              }),
              R.jsx(wr, {
                in: L,
                timeout: 'auto',
                unmountOnExit: !0,
                style: { position: 'absolute', top: '72px', width: '100%' },
                children: R.jsx(Tf, {
                  onCloseEvent: 'adjustmentSwipeClose',
                  children: R.jsx(Fg, { imageAdjustments: S, onAdjustmentsChange: C }),
                }),
              }),
              W && R.jsx(I3, { message: W }),
              R.jsxs(zt, {
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
                  R.jsx(zt, { sx: { width: 80 } }),
                  R.jsx(tx, { onCapture: X, isStreaming: p, mobileOS: st, isMobile: V }),
                  R.jsx(nx, { isMobile: V, mobileOS: st, switchCamera: F, facingMode: y }),
                ],
              }),
            ],
          })
        : R.jsxs(zt, {
            sx: { display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', width: '100%' },
            children: [
              R.jsx(
                ex,
                { capturedImage: A, selectedFilter: O, isFlipped: !1, skipFilters: u, imageAdjustments: S },
                `${O}-${S.brightness}-${S.contrast}-${S.saturation}`
              ),
              R.jsx(F3, {
                capturedImage: A,
                selectedFilter: O,
                setSelectedFilter: E,
                skipFilters: u,
                onRetake: z,
                onSave: u ? void 0 : et,
                showSave: !u,
                imageAdjustments: S,
                onAdjustmentsChange: C,
              }),
            ],
          }),
      R.jsx('canvas', { ref: c, style: { display: 'none' } }),
    ],
  });
};
function rx() {
  const [a, i] = H.useState(null),
    [u, o] = H.useState(!0),
    [c, f] = H.useState(!1),
    p = (h) => {
      (i(h), o(!1));
    };
  return R.jsxs(zt, {
    sx: { display: 'flex', flexDirection: 'column', height: '100vh' },
    children: [
      R.jsx(L5, {
        position: 'static',
        children: R.jsx(j3, {
          children: R.jsx(an, { variant: 'h6', component: 'div', children: 'React MUI Camera Demo' }),
        }),
      }),
      R.jsx(Hm, {
        sx: { flexGrow: 1, py: 2 },
        children: u
          ? R.jsx(Gg, {
              sx: { width: '100%', height: '100%', overflow: 'hidden', position: 'relative' },
              children: R.jsx(ix, { onImageCaptured: p, onClose: () => o(!1), skipFilters: c }),
            })
          : R.jsxs(zt, {
              sx: { textAlign: 'center' },
              children: [
                a &&
                  R.jsx(zt, {
                    children: R.jsx(zt, {
                      component: 'img',
                      src: a,
                      alt: 'Captured',
                      sx: { maxWidth: '100%', maxHeight: '70vh', borderRadius: 2, boxShadow: 3 },
                    }),
                  }),
                R.jsxs(zt, {
                  sx: { mt: 2, display: 'flex', flexDirection: 'column', gap: 2 },
                  children: [
                    R.jsx(zt, {
                      children: R.jsxs(zt, {
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
                          R.jsx(w3, {
                            checked: c,
                            onChange: () => f(!c),
                            inputProps: { 'aria-label': 'Skip Filters Switch' },
                          }),
                        ],
                      }),
                    }),
                    R.jsxs(xi, {
                      variant: 'contained',
                      onClick: () => o(!0),
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
      R.jsx(zt, {
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
bv.createRoot(document.getElementById('root')).render(R.jsx(H.StrictMode, { children: R.jsx(rx, {}) }));
