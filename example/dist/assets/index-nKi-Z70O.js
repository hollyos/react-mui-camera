function uv(a, i) {
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
function Vm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default') ? a.default : a;
}
var Vc = { exports: {} },
  pr = {};
var Yh;
function sv() {
  if (Yh) return pr;
  Yh = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.fragment');
  function u(o, c, f) {
    var p = null;
    if ((f !== void 0 && (p = '' + f), c.key !== void 0 && (p = '' + c.key), 'key' in c)) {
      f = {};
      for (var m in c) m !== 'key' && (f[m] = c[m]);
    } else f = c;
    return ((c = f.ref), { $$typeof: a, type: o, key: p, ref: c !== void 0 ? c : null, props: f });
  }
  return ((pr.Fragment = i), (pr.jsx = u), (pr.jsxs = u), pr);
}
var qh;
function cv() {
  return (qh || ((qh = 1), (Vc.exports = sv())), Vc.exports);
}
var R = cv(),
  Xc = { exports: {} },
  gt = {};
var $h;
function fv() {
  if ($h) return gt;
  $h = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    C = Symbol.for('react.activity'),
    M = Symbol.iterator;
  function N(b) {
    return b === null || typeof b != 'object'
      ? null
      : ((b = (M && b[M]) || b['@@iterator']), typeof b == 'function' ? b : null);
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
  function G(b, B, P) {
    ((this.props = b), (this.context = B), (this.refs = L), (this.updater = P || O));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (b, B) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, b, B, 'setState');
    }),
    (G.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
    }));
  function F() {}
  F.prototype = G.prototype;
  function J(b, B, P) {
    ((this.props = b), (this.context = B), (this.refs = L), (this.updater = P || O));
  }
  var $ = (J.prototype = new F());
  (($.constructor = J), E($, G.prototype), ($.isPureReactComponent = !0));
  var U = Array.isArray;
  function V() {}
  var Z = { H: null, A: null, T: null, S: null },
    ot = Object.prototype.hasOwnProperty;
  function ut(b, B, P) {
    var tt = P.ref;
    return { $$typeof: a, type: b, key: B, ref: tt !== void 0 ? tt : null, props: P };
  }
  function pt(b, B) {
    return ut(b.type, B, b.props);
  }
  function st(b) {
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
  var W = /\/+/g;
  function Q(b, B) {
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
  function A(b, B, P, tt, ft) {
    var ht = typeof b;
    (ht === 'undefined' || ht === 'boolean') && (b = null);
    var vt = !1;
    if (b === null) vt = !0;
    else
      switch (ht) {
        case 'bigint':
        case 'string':
        case 'number':
          vt = !0;
          break;
        case 'object':
          switch (b.$$typeof) {
            case a:
            case i:
              vt = !0;
              break;
            case S:
              return ((vt = b._init), A(vt(b._payload), B, P, tt, ft));
          }
      }
    if (vt)
      return (
        (ft = ft(b)),
        (vt = tt === '' ? '.' + Q(b, 0) : tt),
        U(ft)
          ? ((P = ''),
            vt != null && (P = vt.replace(W, '$&/') + '/'),
            A(ft, B, P, '', function (Ee) {
              return Ee;
            }))
          : ft != null &&
            (st(ft) &&
              (ft = pt(
                ft,
                P + (ft.key == null || (b && b.key === ft.key) ? '' : ('' + ft.key).replace(W, '$&/') + '/') + vt
              )),
            B.push(ft)),
        1
      );
    vt = 0;
    var jt = tt === '' ? '.' : tt + ':';
    if (U(b)) for (var Nt = 0; Nt < b.length; Nt++) ((tt = b[Nt]), (ht = jt + Q(tt, Nt)), (vt += A(tt, B, P, ht, ft)));
    else if (((Nt = N(b)), typeof Nt == 'function'))
      for (b = Nt.call(b), Nt = 0; !(tt = b.next()).done; )
        ((tt = tt.value), (ht = jt + Q(tt, Nt++)), (vt += A(tt, B, P, ht, ft)));
    else if (ht === 'object') {
      if (typeof b.then == 'function') return A(et(b), B, P, tt, ft);
      throw (
        (B = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (B === '[object Object]' ? 'object with keys {' + Object.keys(b).join(', ') + '}' : B) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return vt;
  }
  function K(b, B, P) {
    if (b == null) return b;
    var tt = [],
      ft = 0;
    return (
      A(b, tt, '', '', function (ht) {
        return B.call(P, ht, ft++);
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
      map: K,
      forEach: function (b, B, P) {
        K(
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
          K(b, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (b) {
        return (
          K(b, function (B) {
            return B;
          }) || []
        );
      },
      only: function (b) {
        if (!st(b)) throw Error('React.Children.only expected to receive a single React element child.');
        return b;
      },
    };
  return (
    (gt.Activity = C),
    (gt.Children = yt),
    (gt.Component = G),
    (gt.Fragment = u),
    (gt.Profiler = c),
    (gt.PureComponent = J),
    (gt.StrictMode = o),
    (gt.Suspense = y),
    (gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (gt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return Z.H.useMemoCache(b);
      },
    }),
    (gt.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (gt.cacheSignal = function () {
      return null;
    }),
    (gt.cloneElement = function (b, B, P) {
      if (b == null) throw Error('The argument must be a React element, but you passed ' + b + '.');
      var tt = E({}, b.props),
        ft = b.key;
      if (B != null)
        for (ht in (B.key !== void 0 && (ft = '' + B.key), B))
          !ot.call(B, ht) ||
            ht === 'key' ||
            ht === '__self' ||
            ht === '__source' ||
            (ht === 'ref' && B.ref === void 0) ||
            (tt[ht] = B[ht]);
      var ht = arguments.length - 2;
      if (ht === 1) tt.children = P;
      else if (1 < ht) {
        for (var vt = Array(ht), jt = 0; jt < ht; jt++) vt[jt] = arguments[jt + 2];
        tt.children = vt;
      }
      return ut(b.type, ft, tt);
    }),
    (gt.createContext = function (b) {
      return (
        (b = { $$typeof: p, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: f, _context: b }),
        b
      );
    }),
    (gt.createElement = function (b, B, P) {
      var tt,
        ft = {},
        ht = null;
      if (B != null)
        for (tt in (B.key !== void 0 && (ht = '' + B.key), B))
          ot.call(B, tt) && tt !== 'key' && tt !== '__self' && tt !== '__source' && (ft[tt] = B[tt]);
      var vt = arguments.length - 2;
      if (vt === 1) ft.children = P;
      else if (1 < vt) {
        for (var jt = Array(vt), Nt = 0; Nt < vt; Nt++) jt[Nt] = arguments[Nt + 2];
        ft.children = jt;
      }
      if (b && b.defaultProps) for (tt in ((vt = b.defaultProps), vt)) ft[tt] === void 0 && (ft[tt] = vt[tt]);
      return ut(b, ht, ft);
    }),
    (gt.createRef = function () {
      return { current: null };
    }),
    (gt.forwardRef = function (b) {
      return { $$typeof: m, render: b };
    }),
    (gt.isValidElement = st),
    (gt.lazy = function (b) {
      return { $$typeof: S, _payload: { _status: -1, _result: b }, _init: I };
    }),
    (gt.memo = function (b, B) {
      return { $$typeof: g, type: b, compare: B === void 0 ? null : B };
    }),
    (gt.startTransition = function (b) {
      var B = Z.T,
        P = {};
      Z.T = P;
      try {
        var tt = b(),
          ft = Z.S;
        (ft !== null && ft(P, tt),
          typeof tt == 'object' && tt !== null && typeof tt.then == 'function' && tt.then(V, it));
      } catch (ht) {
        it(ht);
      } finally {
        (B !== null && P.types !== null && (B.types = P.types), (Z.T = B));
      }
    }),
    (gt.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (gt.use = function (b) {
      return Z.H.use(b);
    }),
    (gt.useActionState = function (b, B, P) {
      return Z.H.useActionState(b, B, P);
    }),
    (gt.useCallback = function (b, B) {
      return Z.H.useCallback(b, B);
    }),
    (gt.useContext = function (b) {
      return Z.H.useContext(b);
    }),
    (gt.useDebugValue = function () {}),
    (gt.useDeferredValue = function (b, B) {
      return Z.H.useDeferredValue(b, B);
    }),
    (gt.useEffect = function (b, B) {
      return Z.H.useEffect(b, B);
    }),
    (gt.useEffectEvent = function (b) {
      return Z.H.useEffectEvent(b);
    }),
    (gt.useId = function () {
      return Z.H.useId();
    }),
    (gt.useImperativeHandle = function (b, B, P) {
      return Z.H.useImperativeHandle(b, B, P);
    }),
    (gt.useInsertionEffect = function (b, B) {
      return Z.H.useInsertionEffect(b, B);
    }),
    (gt.useLayoutEffect = function (b, B) {
      return Z.H.useLayoutEffect(b, B);
    }),
    (gt.useMemo = function (b, B) {
      return Z.H.useMemo(b, B);
    }),
    (gt.useOptimistic = function (b, B) {
      return Z.H.useOptimistic(b, B);
    }),
    (gt.useReducer = function (b, B, P) {
      return Z.H.useReducer(b, B, P);
    }),
    (gt.useRef = function (b) {
      return Z.H.useRef(b);
    }),
    (gt.useState = function (b) {
      return Z.H.useState(b);
    }),
    (gt.useSyncExternalStore = function (b, B, P) {
      return Z.H.useSyncExternalStore(b, B, P);
    }),
    (gt.useTransition = function () {
      return Z.H.useTransition();
    }),
    (gt.version = '19.2.0'),
    gt
  );
}
var Gh;
function Tf() {
  return (Gh || ((Gh = 1), (Xc.exports = fv())), Xc.exports);
}
var H = Tf();
const Ne = Vm(H),
  of = uv({ __proto__: null, default: Ne }, [H]);
var Qc = { exports: {} },
  hr = {},
  Zc = { exports: {} },
  Kc = {};
var Vh;
function dv() {
  return (
    Vh ||
      ((Vh = 1),
      (function (a) {
        function i(A, K) {
          var I = A.length;
          A.push(K);
          t: for (; 0 < I; ) {
            var it = (I - 1) >>> 1,
              yt = A[it];
            if (0 < c(yt, K)) ((A[it] = K), (A[I] = yt), (I = it));
            else break t;
          }
        }
        function u(A) {
          return A.length === 0 ? null : A[0];
        }
        function o(A) {
          if (A.length === 0) return null;
          var K = A[0],
            I = A.pop();
          if (I !== K) {
            A[0] = I;
            t: for (var it = 0, yt = A.length, b = yt >>> 1; it < b; ) {
              var B = 2 * (it + 1) - 1,
                P = A[B],
                tt = B + 1,
                ft = A[tt];
              if (0 > c(P, I))
                tt < yt && 0 > c(ft, P) ? ((A[it] = ft), (A[tt] = I), (it = tt)) : ((A[it] = P), (A[B] = I), (it = B));
              else if (tt < yt && 0 > c(ft, I)) ((A[it] = ft), (A[tt] = I), (it = tt));
              else break t;
            }
          }
          return K;
        }
        function c(A, K) {
          var I = A.sortIndex - K.sortIndex;
          return I !== 0 ? I : A.id - K.id;
        }
        if (((a.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            m = p.now();
          a.unstable_now = function () {
            return p.now() - m;
          };
        }
        var y = [],
          g = [],
          S = 1,
          C = null,
          M = 3,
          N = !1,
          O = !1,
          E = !1,
          L = !1,
          G = typeof setTimeout == 'function' ? setTimeout : null,
          F = typeof clearTimeout == 'function' ? clearTimeout : null,
          J = typeof setImmediate < 'u' ? setImmediate : null;
        function $(A) {
          for (var K = u(g); K !== null; ) {
            if (K.callback === null) o(g);
            else if (K.startTime <= A) (o(g), (K.sortIndex = K.expirationTime), i(y, K));
            else break;
            K = u(g);
          }
        }
        function U(A) {
          if (((E = !1), $(A), !O))
            if (u(y) !== null) ((O = !0), V || ((V = !0), v()));
            else {
              var K = u(g);
              K !== null && et(U, K.startTime - A);
            }
        }
        var V = !1,
          Z = -1,
          ot = 5,
          ut = -1;
        function pt() {
          return L ? !0 : !(a.unstable_now() - ut < ot);
        }
        function st() {
          if (((L = !1), V)) {
            var A = a.unstable_now();
            ut = A;
            var K = !0;
            try {
              t: {
                ((O = !1), E && ((E = !1), F(Z), (Z = -1)), (N = !0));
                var I = M;
                try {
                  e: {
                    for ($(A), C = u(y); C !== null && !(C.expirationTime > A && pt()); ) {
                      var it = C.callback;
                      if (typeof it == 'function') {
                        ((C.callback = null), (M = C.priorityLevel));
                        var yt = it(C.expirationTime <= A);
                        if (((A = a.unstable_now()), typeof yt == 'function')) {
                          ((C.callback = yt), $(A), (K = !0));
                          break e;
                        }
                        (C === u(y) && o(y), $(A));
                      } else o(y);
                      C = u(y);
                    }
                    if (C !== null) K = !0;
                    else {
                      var b = u(g);
                      (b !== null && et(U, b.startTime - A), (K = !1));
                    }
                  }
                  break t;
                } finally {
                  ((C = null), (M = I), (N = !1));
                }
                K = void 0;
              }
            } finally {
              K ? v() : (V = !1);
            }
          }
        }
        var v;
        if (typeof J == 'function')
          v = function () {
            J(st);
          };
        else if (typeof MessageChannel < 'u') {
          var W = new MessageChannel(),
            Q = W.port2;
          ((W.port1.onmessage = st),
            (v = function () {
              Q.postMessage(null);
            }));
        } else
          v = function () {
            G(st, 0);
          };
        function et(A, K) {
          Z = G(function () {
            A(a.unstable_now());
          }, K);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (a.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ot = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (a.unstable_next = function (A) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = M;
            }
            var I = M;
            M = K;
            try {
              return A();
            } finally {
              M = I;
            }
          }),
          (a.unstable_requestPaint = function () {
            L = !0;
          }),
          (a.unstable_runWithPriority = function (A, K) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var I = M;
            M = A;
            try {
              return K();
            } finally {
              M = I;
            }
          }),
          (a.unstable_scheduleCallback = function (A, K, I) {
            var it = a.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? it + I : it))
                : (I = it),
              A)
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
              (A = { id: S++, callback: K, priorityLevel: A, startTime: I, expirationTime: yt, sortIndex: -1 }),
              I > it
                ? ((A.sortIndex = I),
                  i(g, A),
                  u(y) === null && A === u(g) && (E ? (F(Z), (Z = -1)) : (E = !0), et(U, I - it)))
                : ((A.sortIndex = yt), i(y, A), O || N || ((O = !0), V || ((V = !0), v()))),
              A
            );
          }),
          (a.unstable_shouldYield = pt),
          (a.unstable_wrapCallback = function (A) {
            var K = M;
            return function () {
              var I = M;
              M = K;
              try {
                return A.apply(this, arguments);
              } finally {
                M = I;
              }
            };
          }));
      })(Kc)),
    Kc
  );
}
var Xh;
function pv() {
  return (Xh || ((Xh = 1), (Zc.exports = dv())), Zc.exports);
}
var Jc = { exports: {} },
  Le = {};
var Qh;
function hv() {
  if (Qh) return Le;
  Qh = 1;
  var a = Tf();
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
  function m(y, g) {
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
          C = m(S, g.crossOrigin),
          M = typeof g.integrity == 'string' ? g.integrity : void 0,
          N = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        S === 'style'
          ? o.d.S(y, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: C,
              integrity: M,
              fetchPriority: N,
            })
          : S === 'script' &&
            o.d.X(y, {
              crossOrigin: C,
              integrity: M,
              fetchPriority: N,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    (Le.preinitModule = function (y, g) {
      if (typeof y == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var S = m(g.as, g.crossOrigin);
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
          C = m(S, g.crossOrigin);
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
          var S = m(g.as, g.crossOrigin);
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
var Zh;
function Xm() {
  if (Zh) return Jc.exports;
  Zh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Jc.exports = hv()), Jc.exports);
}
var Kh;
function mv() {
  if (Kh) return hr;
  Kh = 1;
  var a = pv(),
    i = Tf(),
    u = Xm();
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
  function m(t) {
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
        for (var d = !1, h = r.child; h; ) {
          if (h === n) {
            ((d = !0), (n = r), (l = s));
            break;
          }
          if (h === l) {
            ((d = !0), (l = r), (n = s));
            break;
          }
          h = h.sibling;
        }
        if (!d) {
          for (h = s.child; h; ) {
            if (h === n) {
              ((d = !0), (n = s), (l = r));
              break;
            }
            if (h === l) {
              ((d = !0), (l = s), (n = r));
              break;
            }
            h = h.sibling;
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
    M = Symbol.for('react.element'),
    N = Symbol.for('react.transitional.element'),
    O = Symbol.for('react.portal'),
    E = Symbol.for('react.fragment'),
    L = Symbol.for('react.strict_mode'),
    G = Symbol.for('react.profiler'),
    F = Symbol.for('react.consumer'),
    J = Symbol.for('react.context'),
    $ = Symbol.for('react.forward_ref'),
    U = Symbol.for('react.suspense'),
    V = Symbol.for('react.suspense_list'),
    Z = Symbol.for('react.memo'),
    ot = Symbol.for('react.lazy'),
    ut = Symbol.for('react.activity'),
    pt = Symbol.for('react.memo_cache_sentinel'),
    st = Symbol.iterator;
  function v(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (st && t[st]) || t['@@iterator']), typeof t == 'function' ? t : null);
  }
  var W = Symbol.for('react.client.reference');
  function Q(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.$$typeof === W ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case E:
        return 'Fragment';
      case G:
        return 'Profiler';
      case L:
        return 'StrictMode';
      case U:
        return 'Suspense';
      case V:
        return 'SuspenseList';
      case ut:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case O:
          return 'Portal';
        case J:
          return t.displayName || 'Context';
        case F:
          return (t._context.displayName || 'Context') + '.Consumer';
        case $:
          var e = t.render;
          return (
            (t = t.displayName),
            t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case Z:
          return ((e = t.displayName || null), e !== null ? e : Q(t.type) || 'Memo');
        case ot:
          ((e = t._payload), (t = t._init));
          try {
            return Q(t(e));
          } catch {}
      }
    return null;
  }
  var et = Array.isArray,
    A = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
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
    ft = b(null),
    ht = b(null),
    vt = b(null);
  function jt(t, e) {
    switch ((P(ht, e), P(ft, t), P(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = sh(e)), (t = ch(e, t)));
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
  function Nt() {
    (B(tt), B(ft), B(ht));
  }
  function Ee(t) {
    t.memoizedState !== null && P(vt, t);
    var e = tt.current,
      n = ch(e, t.type);
    e !== n && (P(ft, t), P(tt, n));
  }
  function He(t) {
    (ft.current === t && (B(tt), B(ft)), vt.current === t && (B(vt), (sr._currentValue = I)));
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
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (j) {
                  var D = j;
                }
                Reflect.construct(t, [], X);
              } else {
                try {
                  X.call();
                } catch (j) {
                  D = j;
                }
                t.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                D = j;
              }
              (X = t()) && typeof X.catch == 'function' && X.catch(function () {});
            }
          } catch (j) {
            if (j && D && typeof j.stack == 'string') return [j.stack, D.stack];
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
        h = s[1];
      if (d && h) {
        var x = d.split(`
`),
          w = h.split(`
`);
        for (r = l = 0; l < x.length && !x[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; r < w.length && !w[r].includes('DetermineComponentFrameRoot'); ) r++;
        if (l === x.length || r === w.length)
          for (l = x.length - 1, r = w.length - 1; 1 <= l && 0 <= r && x[l] !== w[r]; ) r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (x[l] !== w[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || x[l] !== w[r])) {
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
  function Bt(t, e) {
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
      do ((e += Bt(t, n)), (n = t), (t = t.return));
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
  var Ye = Object.prototype.hasOwnProperty,
    Xe = a.unstable_scheduleCallback,
    Hn = a.unstable_cancelCallback,
    mt = a.unstable_shouldYield,
    ya = a.unstable_requestPaint,
    ze = a.unstable_now,
    at = a.unstable_getCurrentPriorityLevel,
    nt = a.unstable_ImmediatePriority,
    xt = a.unstable_UserBlockingPriority,
    At = a.unstable_NormalPriority,
    wt = a.unstable_LowPriority,
    Et = a.unstable_IdlePriority,
    qe = a.log,
    Qe = a.unstable_setDisableYieldValue,
    It = null,
    ie = null;
  function Ze(t) {
    if ((typeof qe == 'function' && Qe(t), ie && typeof ie.setStrictMode == 'function'))
      try {
        ie.setStrictMode(It, t);
      } catch {}
  }
  var $e = Math.clz32 ? Math.clz32 : Ci,
    xi = Math.log,
    wu = Math.LN2;
  function Ci(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((xi(t) / wu) | 0)) | 0);
  }
  var va = 256,
    Sl = 262144,
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
  function ba(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      s = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var h = l & 134217727;
    return (
      h !== 0
        ? ((l = h & ~s),
          l !== 0 ? (r = ee(l)) : ((d &= h), d !== 0 ? (r = ee(d)) : n || ((n = h & ~t), n !== 0 && (r = ee(n)))))
        : ((h = l & ~s), h !== 0 ? (r = ee(h)) : d !== 0 ? (r = ee(d)) : n || ((n = l & ~t), n !== 0 && (r = ee(n)))),
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
  function wn(t, e) {
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
  function Vf() {
    var t = te;
    return ((te <<= 1), (te & 62914560) === 0 && (te = 4194304), t);
  }
  function Du(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ti(t, e) {
    ((t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Wg(t, e, n, l, r, s) {
    var d = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var h = t.entanglements,
      x = t.expirationTimes,
      w = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var k = 31 - $e(n),
        X = 1 << k;
      ((h[k] = 0), (x[k] = -1));
      var D = w[k];
      if (D !== null)
        for (w[k] = null, k = 0; k < D.length; k++) {
          var j = D[k];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~X;
    }
    (l !== 0 && Xf(t, l, 0), s !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(d & ~e)));
  }
  function Xf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - $e(e);
    ((t.entangledLanes |= e), (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Qf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - $e(n),
        r = 1 << l;
      ((r & e) | (t[l] & e) && (t[l] |= e), (n &= ~r));
    }
  }
  function Zf(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Bu(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Bu(t) {
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
  function ju(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Kf() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Bh(t.type));
  }
  function Jf(t, e) {
    var n = K.p;
    try {
      return ((K.p = t), e());
    } finally {
      K.p = n;
    }
  }
  var Sa = Math.random().toString(36).slice(2),
    Re = '__reactFiber$' + Sa,
    Ke = '__reactProps$' + Sa,
    xl = '__reactContainer$' + Sa,
    Nu = '__reactEvents$' + Sa,
    Fg = '__reactListeners$' + Sa,
    Pg = '__reactHandles$' + Sa,
    Wf = '__reactResources$' + Sa,
    Ei = '__reactMarker$' + Sa;
  function Uu(t) {
    (delete t[Re], delete t[Ke], delete t[Nu], delete t[Fg], delete t[Pg]);
  }
  function Cl(t) {
    var e = t[Re];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[xl] || n[Re])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = yh(t); t !== null; ) {
            if ((n = t[Re])) return n;
            t = yh(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Tl(t) {
    if ((t = t[Re] || t[xl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Ai(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function El(t) {
    var e = t[Wf];
    return (e || (e = t[Wf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Me(t) {
    t[Ei] = !0;
  }
  var Ff = new Set(),
    Pf = {};
  function Qa(t, e) {
    (Al(t, e), Al(t + 'Capture', e));
  }
  function Al(t, e) {
    for (Pf[t] = e, t = 0; t < e.length; t++) Ff.add(e[t]);
  }
  var Ig = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    If = {},
    td = {};
  function t1(t) {
    return Ye.call(td, t) ? !0 : Ye.call(If, t) ? !1 : Ig.test(t) ? (td[t] = !0) : ((If[t] = !0), !1);
  }
  function jr(t, e, n) {
    if (t1(e))
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
  function Nr(t, e, n) {
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
  function Jn(t, e, n, l) {
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
  function mn(t) {
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
  function ed(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
  }
  function e1(t, e, n) {
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
  function Hu(t) {
    if (!t._valueTracker) {
      var e = ed(t) ? 'checked' : 'value';
      t._valueTracker = e1(t, e, '' + t[e]);
    }
  }
  function nd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = '';
    return (t && (l = ed(t) ? (t.checked ? 'true' : 'false') : t.value), (t = l), t !== n ? (e.setValue(t), !0) : !1);
  }
  function Ur(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var n1 = /[\n"\\]/g;
  function gn(t) {
    return t.replace(n1, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Lu(t, e, n, l, r, s, d, h) {
    ((t.name = ''),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean'
        ? (t.type = d)
        : t.removeAttribute('type'),
      e != null
        ? d === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + mn(e))
          : t.value !== '' + mn(e) && (t.value = '' + mn(e))
        : (d !== 'submit' && d !== 'reset') || t.removeAttribute('value'),
      e != null ? ku(t, d, mn(e)) : n != null ? ku(t, d, mn(n)) : l != null && t.removeAttribute('value'),
      r == null && s != null && (t.defaultChecked = !!s),
      r != null && (t.checked = r && typeof r != 'function' && typeof r != 'symbol'),
      h != null && typeof h != 'function' && typeof h != 'symbol' && typeof h != 'boolean'
        ? (t.name = '' + mn(h))
        : t.removeAttribute('name'));
  }
  function ad(t, e, n, l, r, s, d, h) {
    if (
      (s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' && (t.type = s),
      e != null || n != null)
    ) {
      if (!((s !== 'submit' && s !== 'reset') || e != null)) {
        Hu(t);
        return;
      }
      ((n = n != null ? '' + mn(n) : ''),
        (e = e != null ? '' + mn(e) : n),
        h || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? r),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (t.checked = h ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean' && (t.name = d),
      Hu(t));
  }
  function ku(t, e, n) {
    (e === 'number' && Ur(t.ownerDocument) === t) || t.defaultValue === '' + n || (t.defaultValue = '' + n);
  }
  function zl(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        ((r = e.hasOwnProperty('$' + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && l && (t[n].defaultSelected = !0));
    } else {
      for (n = '' + mn(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          ((t[r].selected = !0), l && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ld(t, e, n) {
    if (e != null && ((e = '' + mn(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? '' + mn(n) : '';
  }
  function id(t, e, n, l) {
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
    ((n = mn(e)), (t.defaultValue = n), (l = t.textContent), l === n && l !== '' && l !== null && (t.value = l), Hu(t));
  }
  function Ml(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var a1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function rd(t, e, n) {
    var l = e.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : l
        ? t.setProperty(e, n)
        : typeof n != 'number' || n === 0 || a1.has(e)
          ? e === 'float'
            ? (t.cssFloat = n)
            : (t[e] = ('' + n).trim())
          : (t[e] = n + 'px');
  }
  function od(t, e, n) {
    if (e != null && typeof e != 'object') throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? t.setProperty(l, '') : l === 'float' ? (t.cssFloat = '') : (t[l] = ''));
      for (var r in e) ((l = e[r]), e.hasOwnProperty(r) && n[r] !== l && rd(t, r, l));
    } else for (var s in e) e.hasOwnProperty(s) && rd(t, s, e[s]);
  }
  function Yu(t) {
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
  var l1 = new Map([
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
    i1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hr(t) {
    return i1.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Wn() {}
  var qu = null;
  function $u(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ol = null,
    Rl = null;
  function ud(t) {
    var e = Tl(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ke] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Lu(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (e = n.name),
            n.type === 'radio' && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + gn('' + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[Ke] || null;
                if (!r) throw Error(o(90));
                Lu(l, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name);
              }
            }
            for (e = 0; e < n.length; e++) ((l = n[e]), l.form === t.form && nd(l));
          }
          break t;
        case 'textarea':
          ld(t, n.value, n.defaultValue);
          break t;
        case 'select':
          ((e = n.value), e != null && zl(t, !!n.multiple, e, !1));
      }
    }
  }
  var Gu = !1;
  function sd(t, e, n) {
    if (Gu) return t(e, n);
    Gu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (((Gu = !1), (Ol !== null || Rl !== null) && (Ao(), Ol && ((e = Ol), (t = Rl), (Rl = Ol = null), ud(e), t))))
        for (e = 0; e < t.length; e++) ud(t[e]);
    }
  }
  function zi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[Ke] || null;
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
  var Fn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    Vu = !1;
  if (Fn)
    try {
      var Mi = {};
      (Object.defineProperty(Mi, 'passive', {
        get: function () {
          Vu = !0;
        },
      }),
        window.addEventListener('test', Mi, Mi),
        window.removeEventListener('test', Mi, Mi));
    } catch {
      Vu = !1;
    }
  var xa = null,
    Xu = null,
    Lr = null;
  function cd() {
    if (Lr) return Lr;
    var t,
      e = Xu,
      n = e.length,
      l,
      r = 'value' in xa ? xa.value : xa.textContent,
      s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === r[s - l]; l++);
    return (Lr = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function kr(t) {
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
  function fd() {
    return !1;
  }
  function Je(t) {
    function e(n, l, r, s, d) {
      ((this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = d),
        (this.currentTarget = null));
      for (var h in t) t.hasOwnProperty(h) && ((n = t[h]), (this[h] = n ? n(s) : s[h]));
      return (
        (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Yr : fd),
        (this.isPropagationStopped = fd),
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
  var Za = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qr = Je(Za),
    Oi = C({}, Za, { view: 0, detail: 0 }),
    r1 = Je(Oi),
    Qu,
    Zu,
    Ri,
    $r = C({}, Oi, {
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
      getModifierState: Ju,
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
          : (t !== Ri &&
              (Ri && t.type === 'mousemove'
                ? ((Qu = t.screenX - Ri.screenX), (Zu = t.screenY - Ri.screenY))
                : (Zu = Qu = 0),
              (Ri = t)),
            Qu);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Zu;
      },
    }),
    dd = Je($r),
    o1 = C({}, $r, { dataTransfer: 0 }),
    u1 = Je(o1),
    s1 = C({}, Oi, { relatedTarget: 0 }),
    Ku = Je(s1),
    c1 = C({}, Za, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f1 = Je(c1),
    d1 = C({}, Za, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    p1 = Je(d1),
    h1 = C({}, Za, { data: 0 }),
    pd = Je(h1),
    m1 = {
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
    g1 = {
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
    y1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function v1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = y1[t]) ? !!e[t] : !1;
  }
  function Ju() {
    return v1;
  }
  var b1 = C({}, Oi, {
      key: function (t) {
        if (t.key) {
          var e = m1[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = kr(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? g1[t.keyCode] || 'Unidentified'
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
      getModifierState: Ju,
      charCode: function (t) {
        return t.type === 'keypress' ? kr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress' ? kr(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
    }),
    S1 = Je(b1),
    x1 = C({}, $r, {
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
    hd = Je(x1),
    C1 = C({}, Oi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ju,
    }),
    T1 = Je(C1),
    E1 = C({}, Za, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    A1 = Je(E1),
    z1 = C({}, $r, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    M1 = Je(z1),
    O1 = C({}, Za, { newState: 0, oldState: 0 }),
    R1 = Je(O1),
    _1 = [9, 13, 27, 32],
    Wu = Fn && 'CompositionEvent' in window,
    _i = null;
  Fn && 'documentMode' in document && (_i = document.documentMode);
  var w1 = Fn && 'TextEvent' in window && !_i,
    md = Fn && (!Wu || (_i && 8 < _i && 11 >= _i)),
    gd = ' ',
    yd = !1;
  function vd(t, e) {
    switch (t) {
      case 'keyup':
        return _1.indexOf(e.keyCode) !== -1;
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
  function bd(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
  }
  var _l = !1;
  function D1(t, e) {
    switch (t) {
      case 'compositionend':
        return bd(e);
      case 'keypress':
        return e.which !== 32 ? null : ((yd = !0), gd);
      case 'textInput':
        return ((t = e.data), t === gd && yd ? null : t);
      default:
        return null;
    }
  }
  function B1(t, e) {
    if (_l)
      return t === 'compositionend' || (!Wu && vd(t, e)) ? ((t = cd()), (Lr = Xu = xa = null), (_l = !1), t) : null;
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
        return md && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var j1 = {
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
  function Sd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!j1[t.type] : e === 'textarea';
  }
  function xd(t, e, n, l) {
    (Ol ? (Rl ? Rl.push(l) : (Rl = [l])) : (Ol = l),
      (e = Do(e, 'onChange')),
      0 < e.length && ((n = new qr('onChange', 'change', null, n, l)), t.push({ event: n, listeners: e })));
  }
  var wi = null,
    Di = null;
  function N1(t) {
    ah(t, 0);
  }
  function Gr(t) {
    var e = Ai(t);
    if (nd(e)) return t;
  }
  function Cd(t, e) {
    if (t === 'change') return e;
  }
  var Td = !1;
  if (Fn) {
    var Fu;
    if (Fn) {
      var Pu = 'oninput' in document;
      if (!Pu) {
        var Ed = document.createElement('div');
        (Ed.setAttribute('oninput', 'return;'), (Pu = typeof Ed.oninput == 'function'));
      }
      Fu = Pu;
    } else Fu = !1;
    Td = Fu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ad() {
    wi && (wi.detachEvent('onpropertychange', zd), (Di = wi = null));
  }
  function zd(t) {
    if (t.propertyName === 'value' && Gr(Di)) {
      var e = [];
      (xd(e, Di, t, $u(t)), sd(N1, e));
    }
  }
  function U1(t, e, n) {
    t === 'focusin' ? (Ad(), (wi = e), (Di = n), wi.attachEvent('onpropertychange', zd)) : t === 'focusout' && Ad();
  }
  function H1(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Gr(Di);
  }
  function L1(t, e) {
    if (t === 'click') return Gr(e);
  }
  function k1(t, e) {
    if (t === 'input' || t === 'change') return Gr(e);
  }
  function Y1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var an = typeof Object.is == 'function' ? Object.is : Y1;
  function Bi(t, e) {
    if (an(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!Ye.call(e, r) || !an(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Md(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Od(t, e) {
    var n = Md(t);
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
      n = Md(n);
    }
  }
  function Rd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Rd(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function _d(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ur(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ur(t.document);
    }
    return e;
  }
  function Iu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var q1 = Fn && 'documentMode' in document && 11 >= document.documentMode,
    wl = null,
    ts = null,
    ji = null,
    es = !1;
  function wd(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    es ||
      wl == null ||
      wl !== Ur(l) ||
      ((l = wl),
      'selectionStart' in l && Iu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ji && Bi(ji, l)) ||
        ((ji = l),
        (l = Do(ts, 'onSelect')),
        0 < l.length &&
          ((e = new qr('onSelect', 'select', null, e, n)), t.push({ event: e, listeners: l }), (e.target = wl))));
  }
  function Ka(t, e) {
    var n = {};
    return ((n[t.toLowerCase()] = e.toLowerCase()), (n['Webkit' + t] = 'webkit' + e), (n['Moz' + t] = 'moz' + e), n);
  }
  var Dl = {
      animationend: Ka('Animation', 'AnimationEnd'),
      animationiteration: Ka('Animation', 'AnimationIteration'),
      animationstart: Ka('Animation', 'AnimationStart'),
      transitionrun: Ka('Transition', 'TransitionRun'),
      transitionstart: Ka('Transition', 'TransitionStart'),
      transitioncancel: Ka('Transition', 'TransitionCancel'),
      transitionend: Ka('Transition', 'TransitionEnd'),
    },
    ns = {},
    Dd = {};
  Fn &&
    ((Dd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Dl.animationend.animation, delete Dl.animationiteration.animation, delete Dl.animationstart.animation),
    'TransitionEvent' in window || delete Dl.transitionend.transition);
  function Ja(t) {
    if (ns[t]) return ns[t];
    if (!Dl[t]) return t;
    var e = Dl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Dd) return (ns[t] = e[n]);
    return t;
  }
  var Bd = Ja('animationend'),
    jd = Ja('animationiteration'),
    Nd = Ja('animationstart'),
    $1 = Ja('transitionrun'),
    G1 = Ja('transitionstart'),
    V1 = Ja('transitioncancel'),
    Ud = Ja('transitionend'),
    Hd = new Map(),
    as =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  as.push('scrollEnd');
  function Dn(t, e) {
    (Hd.set(t, e), Qa(e, [t]));
  }
  var Vr =
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
    yn = [],
    Bl = 0,
    ls = 0;
  function Xr() {
    for (var t = Bl, e = (ls = Bl = 0); e < t; ) {
      var n = yn[e];
      yn[e++] = null;
      var l = yn[e];
      yn[e++] = null;
      var r = yn[e];
      yn[e++] = null;
      var s = yn[e];
      if (((yn[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)), (l.pending = r));
      }
      s !== 0 && Ld(n, r, s);
    }
  }
  function Qr(t, e, n, l) {
    ((yn[Bl++] = t),
      (yn[Bl++] = e),
      (yn[Bl++] = n),
      (yn[Bl++] = l),
      (ls |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function is(t, e, n, l) {
    return (Qr(t, e, n, l), Zr(t));
  }
  function Wa(t, e) {
    return (Qr(t, null, null, e), Zr(t));
  }
  function Ld(t, e, n) {
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
          ((r = 31 - $e(n)),
          (t = s.hiddenUpdates),
          (l = t[r]),
          l === null ? (t[r] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        s)
      : null;
  }
  function Zr(t) {
    if (50 < nr) throw ((nr = 0), (hc = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var jl = {};
  function X1(t, e, n, l) {
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
  function ln(t, e, n, l) {
    return new X1(t, e, n, l);
  }
  function rs(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Pn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = ln(t.tag, e, t.key, t.mode)),
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
  function kd(t, e) {
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
  function Kr(t, e, n, l, r, s) {
    var d = 0;
    if (((l = t), typeof t == 'function')) rs(t) && (d = 1);
    else if (typeof t == 'string')
      d = Wy(t, n, tt.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
    else
      t: switch (t) {
        case ut:
          return ((t = ln(31, n, e, r)), (t.elementType = ut), (t.lanes = s), t);
        case E:
          return Fa(n.children, r, s, e);
        case L:
          ((d = 8), (r |= 24));
          break;
        case G:
          return ((t = ln(12, n, e, r | 2)), (t.elementType = G), (t.lanes = s), t);
        case U:
          return ((t = ln(13, n, e, r)), (t.elementType = U), (t.lanes = s), t);
        case V:
          return ((t = ln(19, n, e, r)), (t.elementType = V), (t.lanes = s), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case J:
                d = 10;
                break t;
              case F:
                d = 9;
                break t;
              case $:
                d = 11;
                break t;
              case Z:
                d = 14;
                break t;
              case ot:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (n = Error(o(130, t === null ? 'null' : typeof t, ''))), (l = null));
      }
    return ((e = ln(d, n, e, r)), (e.elementType = t), (e.type = l), (e.lanes = s), e);
  }
  function Fa(t, e, n, l) {
    return ((t = ln(7, t, l, e)), (t.lanes = n), t);
  }
  function os(t, e, n) {
    return ((t = ln(6, t, null, e)), (t.lanes = n), t);
  }
  function Yd(t) {
    var e = ln(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function us(t, e, n) {
    return (
      (e = ln(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
      e
    );
  }
  var qd = new WeakMap();
  function vn(t, e) {
    if (typeof t == 'object' && t !== null) {
      var n = qd.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: le(e) }), qd.set(t, e), e);
    }
    return { value: t, source: e, stack: le(e) };
  }
  var Nl = [],
    Ul = 0,
    Jr = null,
    Ni = 0,
    bn = [],
    Sn = 0,
    Ca = null,
    kn = 1,
    Yn = '';
  function In(t, e) {
    ((Nl[Ul++] = Ni), (Nl[Ul++] = Jr), (Jr = t), (Ni = e));
  }
  function $d(t, e, n) {
    ((bn[Sn++] = kn), (bn[Sn++] = Yn), (bn[Sn++] = Ca), (Ca = t));
    var l = kn;
    t = Yn;
    var r = 32 - $e(l) - 1;
    ((l &= ~(1 << r)), (n += 1));
    var s = 32 - $e(e) + r;
    if (30 < s) {
      var d = r - (r % 5);
      ((s = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        (kn = (1 << (32 - $e(e) + r)) | (n << r) | l),
        (Yn = s + t));
    } else ((kn = (1 << s) | (n << r) | l), (Yn = t));
  }
  function ss(t) {
    t.return !== null && (In(t, 1), $d(t, 1, 0));
  }
  function cs(t) {
    for (; t === Jr; ) ((Jr = Nl[--Ul]), (Nl[Ul] = null), (Ni = Nl[--Ul]), (Nl[Ul] = null));
    for (; t === Ca; )
      ((Ca = bn[--Sn]), (bn[Sn] = null), (Yn = bn[--Sn]), (bn[Sn] = null), (kn = bn[--Sn]), (bn[Sn] = null));
  }
  function Gd(t, e) {
    ((bn[Sn++] = kn), (bn[Sn++] = Yn), (bn[Sn++] = Ca), (kn = e.id), (Yn = e.overflow), (Ca = t));
  }
  var _e = null,
    ne = null,
    Dt = !1,
    Ta = null,
    xn = !1,
    fs = Error(o(519));
  function Ea(t) {
    var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
    throw (Ui(vn(e, t)), fs);
  }
  function Vd(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[Re] = t), (e[Ke] = l), n)) {
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
        for (n = 0; n < lr.length; n++) Mt(lr[n], e);
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
        (Mt('invalid', e), ad(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        Mt('invalid', e);
        break;
      case 'textarea':
        (Mt('invalid', e), id(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      e.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      oh(e.textContent, n)
        ? (l.popover != null && (Mt('beforetoggle', e), Mt('toggle', e)),
          l.onScroll != null && Mt('scroll', e),
          l.onScrollEnd != null && Mt('scrollend', e),
          l.onClick != null && (e.onclick = Wn),
          (e = !0))
        : (e = !1),
      e || Ea(t, !0));
  }
  function Xd(t) {
    for (_e = t.return; _e; )
      switch (_e.tag) {
        case 5:
        case 31:
        case 13:
          xn = !1;
          return;
        case 27:
        case 3:
          xn = !0;
          return;
        default:
          _e = _e.return;
      }
  }
  function Hl(t) {
    if (t !== _e) return !1;
    if (!Dt) return (Xd(t), (Dt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) && ((n = t.type), (n = !(n !== 'form' && n !== 'button') || Rc(t.type, t.memoizedProps))),
        (n = !n)),
      n && ne && Ea(t),
      Xd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(317));
      ne = gh(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(317));
      ne = gh(t);
    } else
      e === 27
        ? ((e = ne), La(t.type) ? ((t = jc), (jc = null), (ne = t)) : (ne = e))
        : (ne = _e ? Tn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Pa() {
    ((ne = _e = null), (Dt = !1));
  }
  function ds() {
    var t = Ta;
    return (t !== null && (Ie === null ? (Ie = t) : Ie.push.apply(Ie, t), (Ta = null)), t);
  }
  function Ui(t) {
    Ta === null ? (Ta = [t]) : Ta.push(t);
  }
  var ps = b(null),
    Ia = null,
    ta = null;
  function Aa(t, e, n) {
    (P(ps, e._currentValue), (e._currentValue = n));
  }
  function ea(t) {
    ((t._currentValue = ps.current), B(ps));
  }
  function hs(t, e, n) {
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
  function ms(t, e, n, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var d = r.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var h = s;
          s = r;
          for (var x = 0; x < e.length; x++)
            if (h.context === e[x]) {
              ((s.lanes |= n), (h = s.alternate), h !== null && (h.lanes |= n), hs(s.return, n, t), l || (d = null));
              break t;
            }
          s = h.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(o(341));
        ((d.lanes |= n), (s = d.alternate), s !== null && (s.lanes |= n), hs(d, n, t), (d = null));
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
  function Ll(t, e, n, l) {
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
          var h = r.type;
          an(r.pendingProps.value, d.value) || (t !== null ? t.push(h) : (t = [h]));
        }
      } else if (r === vt.current) {
        if (((d = r.alternate), d === null)) throw Error(o(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(sr) : (t = [sr]));
      }
      r = r.return;
    }
    (t !== null && ms(e, t, n, l), (e.flags |= 262144));
  }
  function Wr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!an(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function tl(t) {
    ((Ia = t), (ta = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function we(t) {
    return Qd(Ia, t);
  }
  function Fr(t, e) {
    return (Ia === null && tl(t), Qd(t, e));
  }
  function Qd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), ta === null)) {
      if (t === null) throw Error(o(308));
      ((ta = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else ta = ta.next = e;
    return n;
  }
  var Q1 =
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
    Z1 = a.unstable_scheduleCallback,
    K1 = a.unstable_NormalPriority,
    ve = { $$typeof: J, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function gs() {
    return { controller: new Q1(), data: new Map(), refCount: 0 };
  }
  function Hi(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Z1(K1, function () {
          t.controller.abort();
        }));
  }
  var Li = null,
    ys = 0,
    kl = 0,
    Yl = null;
  function J1(t, e) {
    if (Li === null) {
      var n = (Li = []);
      ((ys = 0),
        (kl = Sc()),
        (Yl = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (ys++, e.then(Zd, Zd), e);
  }
  function Zd() {
    if (--ys === 0 && Li !== null) {
      Yl !== null && (Yl.status = 'fulfilled');
      var t = Li;
      ((Li = null), (kl = 0), (Yl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function W1(t, e) {
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
  var Kd = A.S;
  A.S = function (t, e) {
    ((wp = ze()),
      typeof e == 'object' && e !== null && typeof e.then == 'function' && J1(t, e),
      Kd !== null && Kd(t, e));
  };
  var el = b(null);
  function vs() {
    var t = el.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function Pr(t, e) {
    e === null ? P(el, el.current) : P(el, e.pool);
  }
  function Jd() {
    var t = vs();
    return t === null ? null : { parent: ve._currentValue, pool: t };
  }
  var ql = Error(o(460)),
    bs = Error(o(474)),
    Ir = Error(o(542)),
    to = { then: function () {} };
  function Wd(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function Fd(t, e, n) {
    switch (((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(Wn, Wn), (e = n)), e.status)) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), Id(t), t);
      default:
        if (typeof e.status == 'string') e.then(Wn, Wn);
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
            throw ((t = e.reason), Id(t), t);
        }
        throw ((al = e), ql);
    }
  }
  function nl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((al = n), ql) : n;
    }
  }
  var al = null;
  function Pd() {
    if (al === null) throw Error(o(459));
    var t = al;
    return ((al = null), t);
  }
  function Id(t) {
    if (t === ql || t === Ir) throw Error(o(483));
  }
  var $l = null,
    ki = 0;
  function eo(t) {
    var e = ki;
    return ((ki += 1), $l === null && ($l = []), Fd($l, t, e));
  }
  function Yi(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function no(t, e) {
    throw e.$$typeof === M
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(o(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)));
  }
  function t0(t) {
    function e(z, T) {
      if (t) {
        var _ = z.deletions;
        _ === null ? ((z.deletions = [T]), (z.flags |= 16)) : _.push(T);
      }
    }
    function n(z, T) {
      if (!t) return null;
      for (; T !== null; ) (e(z, T), (T = T.sibling));
      return null;
    }
    function l(z) {
      for (var T = new Map(); z !== null; ) (z.key !== null ? T.set(z.key, z) : T.set(z.index, z), (z = z.sibling));
      return T;
    }
    function r(z, T) {
      return ((z = Pn(z, T)), (z.index = 0), (z.sibling = null), z);
    }
    function s(z, T, _) {
      return (
        (z.index = _),
        t
          ? ((_ = z.alternate),
            _ !== null ? ((_ = _.index), _ < T ? ((z.flags |= 67108866), T) : _) : ((z.flags |= 67108866), T))
          : ((z.flags |= 1048576), T)
      );
    }
    function d(z) {
      return (t && z.alternate === null && (z.flags |= 67108866), z);
    }
    function h(z, T, _, q) {
      return T === null || T.tag !== 6
        ? ((T = os(_, z.mode, q)), (T.return = z), T)
        : ((T = r(T, _)), (T.return = z), T);
    }
    function x(z, T, _, q) {
      var ct = _.type;
      return ct === E
        ? k(z, T, _.props.children, q, _.key)
        : T !== null &&
            (T.elementType === ct || (typeof ct == 'object' && ct !== null && ct.$$typeof === ot && nl(ct) === T.type))
          ? ((T = r(T, _.props)), Yi(T, _), (T.return = z), T)
          : ((T = Kr(_.type, _.key, _.props, null, z.mode, q)), Yi(T, _), (T.return = z), T);
    }
    function w(z, T, _, q) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== _.containerInfo ||
        T.stateNode.implementation !== _.implementation
        ? ((T = us(_, z.mode, q)), (T.return = z), T)
        : ((T = r(T, _.children || [])), (T.return = z), T);
    }
    function k(z, T, _, q, ct) {
      return T === null || T.tag !== 7
        ? ((T = Fa(_, z.mode, q, ct)), (T.return = z), T)
        : ((T = r(T, _)), (T.return = z), T);
    }
    function X(z, T, _) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return ((T = os('' + T, z.mode, _)), (T.return = z), T);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case N:
            return ((_ = Kr(T.type, T.key, T.props, null, z.mode, _)), Yi(_, T), (_.return = z), _);
          case O:
            return ((T = us(T, z.mode, _)), (T.return = z), T);
          case ot:
            return ((T = nl(T)), X(z, T, _));
        }
        if (et(T) || v(T)) return ((T = Fa(T, z.mode, _, null)), (T.return = z), T);
        if (typeof T.then == 'function') return X(z, eo(T), _);
        if (T.$$typeof === J) return X(z, Fr(z, T), _);
        no(z, T);
      }
      return null;
    }
    function D(z, T, _, q) {
      var ct = T !== null ? T.key : null;
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number' || typeof _ == 'bigint')
        return ct !== null ? null : h(z, T, '' + _, q);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case N:
            return _.key === ct ? x(z, T, _, q) : null;
          case O:
            return _.key === ct ? w(z, T, _, q) : null;
          case ot:
            return ((_ = nl(_)), D(z, T, _, q));
        }
        if (et(_) || v(_)) return ct !== null ? null : k(z, T, _, q, null);
        if (typeof _.then == 'function') return D(z, T, eo(_), q);
        if (_.$$typeof === J) return D(z, T, Fr(z, _), q);
        no(z, _);
      }
      return null;
    }
    function j(z, T, _, q, ct) {
      if ((typeof q == 'string' && q !== '') || typeof q == 'number' || typeof q == 'bigint')
        return ((z = z.get(_) || null), h(T, z, '' + q, ct));
      if (typeof q == 'object' && q !== null) {
        switch (q.$$typeof) {
          case N:
            return ((z = z.get(q.key === null ? _ : q.key) || null), x(T, z, q, ct));
          case O:
            return ((z = z.get(q.key === null ? _ : q.key) || null), w(T, z, q, ct));
          case ot:
            return ((q = nl(q)), j(z, T, _, q, ct));
        }
        if (et(q) || v(q)) return ((z = z.get(_) || null), k(T, z, q, ct, null));
        if (typeof q.then == 'function') return j(z, T, _, eo(q), ct);
        if (q.$$typeof === J) return j(z, T, _, Fr(T, q), ct);
        no(T, q);
      }
      return null;
    }
    function lt(z, T, _, q) {
      for (var ct = null, Ut = null, rt = T, Ct = (T = 0), _t = null; rt !== null && Ct < _.length; Ct++) {
        rt.index > Ct ? ((_t = rt), (rt = null)) : (_t = rt.sibling);
        var Ht = D(z, rt, _[Ct], q);
        if (Ht === null) {
          rt === null && (rt = _t);
          break;
        }
        (t && rt && Ht.alternate === null && e(z, rt),
          (T = s(Ht, T, Ct)),
          Ut === null ? (ct = Ht) : (Ut.sibling = Ht),
          (Ut = Ht),
          (rt = _t));
      }
      if (Ct === _.length) return (n(z, rt), Dt && In(z, Ct), ct);
      if (rt === null) {
        for (; Ct < _.length; Ct++)
          ((rt = X(z, _[Ct], q)),
            rt !== null && ((T = s(rt, T, Ct)), Ut === null ? (ct = rt) : (Ut.sibling = rt), (Ut = rt)));
        return (Dt && In(z, Ct), ct);
      }
      for (rt = l(rt); Ct < _.length; Ct++)
        ((_t = j(rt, z, Ct, _[Ct], q)),
          _t !== null &&
            (t && _t.alternate !== null && rt.delete(_t.key === null ? Ct : _t.key),
            (T = s(_t, T, Ct)),
            Ut === null ? (ct = _t) : (Ut.sibling = _t),
            (Ut = _t)));
      return (
        t &&
          rt.forEach(function (Ga) {
            return e(z, Ga);
          }),
        Dt && In(z, Ct),
        ct
      );
    }
    function dt(z, T, _, q) {
      if (_ == null) throw Error(o(151));
      for (
        var ct = null, Ut = null, rt = T, Ct = (T = 0), _t = null, Ht = _.next();
        rt !== null && !Ht.done;
        Ct++, Ht = _.next()
      ) {
        rt.index > Ct ? ((_t = rt), (rt = null)) : (_t = rt.sibling);
        var Ga = D(z, rt, Ht.value, q);
        if (Ga === null) {
          rt === null && (rt = _t);
          break;
        }
        (t && rt && Ga.alternate === null && e(z, rt),
          (T = s(Ga, T, Ct)),
          Ut === null ? (ct = Ga) : (Ut.sibling = Ga),
          (Ut = Ga),
          (rt = _t));
      }
      if (Ht.done) return (n(z, rt), Dt && In(z, Ct), ct);
      if (rt === null) {
        for (; !Ht.done; Ct++, Ht = _.next())
          ((Ht = X(z, Ht.value, q)),
            Ht !== null && ((T = s(Ht, T, Ct)), Ut === null ? (ct = Ht) : (Ut.sibling = Ht), (Ut = Ht)));
        return (Dt && In(z, Ct), ct);
      }
      for (rt = l(rt); !Ht.done; Ct++, Ht = _.next())
        ((Ht = j(rt, z, Ct, Ht.value, q)),
          Ht !== null &&
            (t && Ht.alternate !== null && rt.delete(Ht.key === null ? Ct : Ht.key),
            (T = s(Ht, T, Ct)),
            Ut === null ? (ct = Ht) : (Ut.sibling = Ht),
            (Ut = Ht)));
      return (
        t &&
          rt.forEach(function (ov) {
            return e(z, ov);
          }),
        Dt && In(z, Ct),
        ct
      );
    }
    function Wt(z, T, _, q) {
      if (
        (typeof _ == 'object' && _ !== null && _.type === E && _.key === null && (_ = _.props.children),
        typeof _ == 'object' && _ !== null)
      ) {
        switch (_.$$typeof) {
          case N:
            t: {
              for (var ct = _.key; T !== null; ) {
                if (T.key === ct) {
                  if (((ct = _.type), ct === E)) {
                    if (T.tag === 7) {
                      (n(z, T.sibling), (q = r(T, _.props.children)), (q.return = z), (z = q));
                      break t;
                    }
                  } else if (
                    T.elementType === ct ||
                    (typeof ct == 'object' && ct !== null && ct.$$typeof === ot && nl(ct) === T.type)
                  ) {
                    (n(z, T.sibling), (q = r(T, _.props)), Yi(q, _), (q.return = z), (z = q));
                    break t;
                  }
                  n(z, T);
                  break;
                } else e(z, T);
                T = T.sibling;
              }
              _.type === E
                ? ((q = Fa(_.props.children, z.mode, q, _.key)), (q.return = z), (z = q))
                : ((q = Kr(_.type, _.key, _.props, null, z.mode, q)), Yi(q, _), (q.return = z), (z = q));
            }
            return d(z);
          case O:
            t: {
              for (ct = _.key; T !== null; ) {
                if (T.key === ct)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === _.containerInfo &&
                    T.stateNode.implementation === _.implementation
                  ) {
                    (n(z, T.sibling), (q = r(T, _.children || [])), (q.return = z), (z = q));
                    break t;
                  } else {
                    n(z, T);
                    break;
                  }
                else e(z, T);
                T = T.sibling;
              }
              ((q = us(_, z.mode, q)), (q.return = z), (z = q));
            }
            return d(z);
          case ot:
            return ((_ = nl(_)), Wt(z, T, _, q));
        }
        if (et(_)) return lt(z, T, _, q);
        if (v(_)) {
          if (((ct = v(_)), typeof ct != 'function')) throw Error(o(150));
          return ((_ = ct.call(_)), dt(z, T, _, q));
        }
        if (typeof _.then == 'function') return Wt(z, T, eo(_), q);
        if (_.$$typeof === J) return Wt(z, T, Fr(z, _), q);
        no(z, _);
      }
      return (typeof _ == 'string' && _ !== '') || typeof _ == 'number' || typeof _ == 'bigint'
        ? ((_ = '' + _),
          T !== null && T.tag === 6
            ? (n(z, T.sibling), (q = r(T, _)), (q.return = z), (z = q))
            : (n(z, T), (q = os(_, z.mode, q)), (q.return = z), (z = q)),
          d(z))
        : n(z, T);
    }
    return function (z, T, _, q) {
      try {
        ki = 0;
        var ct = Wt(z, T, _, q);
        return (($l = null), ct);
      } catch (rt) {
        if (rt === ql || rt === Ir) throw rt;
        var Ut = ln(29, rt, null, z.mode);
        return ((Ut.lanes = q), (Ut.return = z), Ut);
      } finally {
      }
    };
  }
  var ll = t0(!0),
    e0 = t0(!1),
    za = !1;
  function Ss(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xs(t, e) {
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
  function Ma(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Oa(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Lt & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = Zr(t)),
        Ld(t, null, n),
        e
      );
    }
    return (Qr(t, l, e, n), Zr(t));
  }
  function qi(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Qf(t, n));
    }
  }
  function Cs(t, e) {
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
  var Ts = !1;
  function $i() {
    if (Ts) {
      var t = Yl;
      if (t !== null) throw t;
    }
  }
  function Gi(t, e, n, l) {
    Ts = !1;
    var r = t.updateQueue;
    za = !1;
    var s = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      h = r.shared.pending;
    if (h !== null) {
      r.shared.pending = null;
      var x = h,
        w = x.next;
      ((x.next = null), d === null ? (s = w) : (d.next = w), (d = x));
      var k = t.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (h = k.lastBaseUpdate),
        h !== d && (h === null ? (k.firstBaseUpdate = w) : (h.next = w), (k.lastBaseUpdate = x)));
    }
    if (s !== null) {
      var X = r.baseState;
      ((d = 0), (k = w = x = null), (h = s));
      do {
        var D = h.lane & -536870913,
          j = D !== h.lane;
        if (j ? (Rt & D) === D : (l & D) === D) {
          (D !== 0 && D === kl && (Ts = !0),
            k !== null && (k = k.next = { lane: 0, tag: h.tag, payload: h.payload, callback: null, next: null }));
          t: {
            var lt = t,
              dt = h;
            D = e;
            var Wt = n;
            switch (dt.tag) {
              case 1:
                if (((lt = dt.payload), typeof lt == 'function')) {
                  X = lt.call(Wt, X, D);
                  break t;
                }
                X = lt;
                break t;
              case 3:
                lt.flags = (lt.flags & -65537) | 128;
              case 0:
                if (((lt = dt.payload), (D = typeof lt == 'function' ? lt.call(Wt, X, D) : lt), D == null)) break t;
                X = C({}, X, D);
                break t;
              case 2:
                za = !0;
            }
          }
          ((D = h.callback),
            D !== null &&
              ((t.flags |= 64),
              j && (t.flags |= 8192),
              (j = r.callbacks),
              j === null ? (r.callbacks = [D]) : j.push(D)));
        } else
          ((j = { lane: D, tag: h.tag, payload: h.payload, callback: h.callback, next: null }),
            k === null ? ((w = k = j), (x = X)) : (k = k.next = j),
            (d |= D));
        if (((h = h.next), h === null)) {
          if (((h = r.shared.pending), h === null)) break;
          ((j = h), (h = j.next), (j.next = null), (r.lastBaseUpdate = j), (r.shared.pending = null));
        }
      } while (!0);
      (k === null && (x = X),
        (r.baseState = x),
        (r.firstBaseUpdate = w),
        (r.lastBaseUpdate = k),
        s === null && (r.shared.lanes = 0),
        (Ba |= d),
        (t.lanes = d),
        (t.memoizedState = X));
    }
  }
  function n0(t, e) {
    if (typeof t != 'function') throw Error(o(191, t));
    t.call(e);
  }
  function a0(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) n0(n[t], e);
  }
  var Gl = b(null),
    ao = b(0);
  function l0(t, e) {
    ((t = ca), P(ao, t), P(Gl, e), (ca = t | e.baseLanes));
  }
  function Es() {
    (P(ao, ca), P(Gl, Gl.current));
  }
  function As() {
    ((ca = ao.current), B(Gl), B(ao));
  }
  var rn = b(null),
    Cn = null;
  function Ra(t) {
    var e = t.alternate;
    (P(me, me.current & 1),
      P(rn, t),
      Cn === null && (e === null || Gl.current !== null || e.memoizedState !== null) && (Cn = t));
  }
  function zs(t) {
    (P(me, me.current), P(rn, t), Cn === null && (Cn = t));
  }
  function i0(t) {
    t.tag === 22 ? (P(me, me.current), P(rn, t), Cn === null && (Cn = t)) : _a();
  }
  function _a() {
    (P(me, me.current), P(rn, rn.current));
  }
  function on(t) {
    (B(rn), Cn === t && (Cn = null), B(me));
  }
  var me = b(0);
  function lo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Dc(n) || Bc(n))) return e;
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
  var na = 0,
    bt = null,
    Kt = null,
    be = null,
    io = !1,
    Vl = !1,
    il = !1,
    ro = 0,
    Vi = 0,
    Xl = null,
    F1 = 0;
  function ce() {
    throw Error(o(321));
  }
  function Ms(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!an(t[n], e[n])) return !1;
    return !0;
  }
  function Os(t, e, n, l, r, s) {
    return (
      (na = s),
      (bt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (A.H = t === null || t.memoizedState === null ? $0 : Gs),
      (il = !1),
      (s = n(l, r)),
      (il = !1),
      Vl && (s = o0(e, n, l, r)),
      r0(t),
      s
    );
  }
  function r0(t) {
    A.H = Zi;
    var e = Kt !== null && Kt.next !== null;
    if (((na = 0), (be = Kt = bt = null), (io = !1), (Vi = 0), (Xl = null), e)) throw Error(o(300));
    t === null || Se || ((t = t.dependencies), t !== null && Wr(t) && (Se = !0));
  }
  function o0(t, e, n, l) {
    bt = t;
    var r = 0;
    do {
      if ((Vl && (Xl = null), (Vi = 0), (Vl = !1), 25 <= r)) throw Error(o(301));
      if (((r += 1), (be = Kt = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        ((s.lastEffect = null), (s.events = null), (s.stores = null), s.memoCache != null && (s.memoCache.index = 0));
      }
      ((A.H = G0), (s = e(n, l)));
    } while (Vl);
    return s;
  }
  function P1() {
    var t = A.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? Xi(e) : e),
      (t = t.useState()[0]),
      (Kt !== null ? Kt.memoizedState : null) !== t && (bt.flags |= 1024),
      e
    );
  }
  function Rs() {
    var t = ro !== 0;
    return ((ro = 0), t);
  }
  function _s(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function ws(t) {
    if (io) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      io = !1;
    }
    ((na = 0), (be = Kt = bt = null), (Vl = !1), (Vi = ro = 0), (Xl = null));
  }
  function Ge() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (be === null ? (bt.memoizedState = be = t) : (be = be.next = t), be);
  }
  function ge() {
    if (Kt === null) {
      var t = bt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Kt.next;
    var e = be === null ? bt.memoizedState : be.next;
    if (e !== null) ((be = e), (Kt = t));
    else {
      if (t === null) throw bt.alternate === null ? Error(o(467)) : Error(o(310));
      ((Kt = t),
        (t = {
          memoizedState: Kt.memoizedState,
          baseState: Kt.baseState,
          baseQueue: Kt.baseQueue,
          queue: Kt.queue,
          next: null,
        }),
        be === null ? (bt.memoizedState = be = t) : (be = be.next = t));
    }
    return be;
  }
  function oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xi(t) {
    var e = Vi;
    return (
      (Vi += 1),
      Xl === null && (Xl = []),
      (t = Fd(Xl, t, e)),
      (e = bt),
      (be === null ? e.memoizedState : be.next) === null &&
        ((e = e.alternate), (A.H = e === null || e.memoizedState === null ? $0 : Gs)),
      t
    );
  }
  function uo(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Xi(t);
      if (t.$$typeof === J) return we(t);
    }
    throw Error(o(438, String(t)));
  }
  function Ds(t) {
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
      n === null && ((n = oo()), (bt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = pt;
    return (e.index++, n);
  }
  function aa(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function so(t) {
    var e = ge();
    return Bs(e, Kt, t);
  }
  function Bs(t, e, n) {
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
      var h = (d = null),
        x = null,
        w = e,
        k = !1;
      do {
        var X = w.lane & -536870913;
        if (X !== w.lane ? (Rt & X) === X : (na & X) === X) {
          var D = w.revertLane;
          if (D === 0)
            (x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              X === kl && (k = !0));
          else if ((na & D) === D) {
            ((w = w.next), D === kl && (k = !0));
            continue;
          } else
            ((X = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              x === null ? ((h = x = X), (d = s)) : (x = x.next = X),
              (bt.lanes |= D),
              (Ba |= D));
          ((X = w.action), il && n(s, X), (s = w.hasEagerState ? w.eagerState : n(s, X)));
        } else
          ((D = {
            lane: X,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            x === null ? ((h = x = D), (d = s)) : (x = x.next = D),
            (bt.lanes |= X),
            (Ba |= X));
        w = w.next;
      } while (w !== null && w !== e);
      if ((x === null ? (d = s) : (x.next = h), !an(s, t.memoizedState) && ((Se = !0), k && ((n = Yl), n !== null))))
        throw n;
      ((t.memoizedState = s), (t.baseState = d), (t.baseQueue = x), (l.lastRenderedState = s));
    }
    return (r === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function js(t) {
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
      (an(s, e.memoizedState) || (Se = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, l];
  }
  function u0(t, e, n) {
    var l = bt,
      r = ge(),
      s = Dt;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var d = !an((Kt || r).memoizedState, n);
    if (
      (d && ((r.memoizedState = n), (Se = !0)),
      (r = r.queue),
      Hs(f0.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (be !== null && be.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Ql(9, { destroy: void 0 }, c0.bind(null, l, r, n, e), null), Pt === null))
        throw Error(o(349));
      s || (na & 127) !== 0 || s0(l, e, n);
    }
    return n;
  }
  function s0(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = bt.updateQueue),
      e === null
        ? ((e = oo()), (bt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function c0(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), d0(e) && p0(t));
  }
  function f0(t, e, n) {
    return n(function () {
      d0(e) && p0(t);
    });
  }
  function d0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !an(t, n);
    } catch {
      return !0;
    }
  }
  function p0(t) {
    var e = Wa(t, 2);
    e !== null && tn(e, t, 2);
  }
  function Ns(t) {
    var e = Ge();
    if (typeof t == 'function') {
      var n = t;
      if (((t = n()), il)) {
        Ze(!0);
        try {
          n();
        } finally {
          Ze(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: t }),
      e
    );
  }
  function h0(t, e, n, l) {
    return ((t.baseState = n), Bs(t, Kt, typeof l == 'function' ? l : aa));
  }
  function I1(t, e, n, l, r) {
    if (po(t)) throw Error(o(485));
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
      (A.T !== null ? n(!0) : (s.isTransition = !1),
        l(s),
        (n = e.pending),
        n === null ? ((s.next = e.pending = s), m0(e, s)) : ((s.next = n.next), (e.pending = n.next = s)));
    }
  }
  function m0(t, e) {
    var n = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var s = A.T,
        d = {};
      A.T = d;
      try {
        var h = n(r, l),
          x = A.S;
        (x !== null && x(d, h), g0(t, e, h));
      } catch (w) {
        Us(t, e, w);
      } finally {
        (s !== null && d.types !== null && (s.types = d.types), (A.T = s));
      }
    } else
      try {
        ((s = n(r, l)), g0(t, e, s));
      } catch (w) {
        Us(t, e, w);
      }
  }
  function g0(t, e, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            y0(t, e, l);
          },
          function (l) {
            return Us(t, e, l);
          }
        )
      : y0(t, e, n);
  }
  function y0(t, e, n) {
    ((e.status = 'fulfilled'),
      (e.value = n),
      v0(e),
      (t.state = n),
      (e = t.pending),
      e !== null && ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), m0(t, n))));
  }
  function Us(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = 'rejected'), (e.reason = n), v0(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function v0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function b0(t, e) {
    return e;
  }
  function S0(t, e) {
    if (Dt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var l = bt;
          if (Dt) {
            if (ne) {
              e: {
                for (var r = ne, s = xn; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break e;
                  }
                  if (((r = Tn(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((s = r.data), (r = s === 'F!' || s === 'F' ? r : null));
              }
              if (r) {
                ((ne = Tn(r.nextSibling)), (l = r.data === 'F!'));
                break t;
              }
            }
            Ea(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = Ge()),
      (n.memoizedState = n.baseState = e),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: b0, lastRenderedState: e }),
      (n.queue = l),
      (n = k0.bind(null, bt, l)),
      (l.dispatch = n),
      (l = Ns(!1)),
      (s = $s.bind(null, bt, !1, l.queue)),
      (l = Ge()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = I1.bind(null, bt, r, s, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function x0(t) {
    var e = ge();
    return C0(e, Kt, t);
  }
  function C0(t, e, n) {
    if (((e = Bs(t, e, b0)[0]), (t = so(aa)[0]), typeof e == 'object' && e !== null && typeof e.then == 'function'))
      try {
        var l = Xi(e);
      } catch (d) {
        throw d === ql ? Ir : d;
      }
    else l = e;
    e = ge();
    var r = e.queue,
      s = r.dispatch;
    return (
      n !== e.memoizedState && ((bt.flags |= 2048), Ql(9, { destroy: void 0 }, ty.bind(null, r, n), null)),
      [l, s, t]
    );
  }
  function ty(t, e) {
    t.action = e;
  }
  function T0(t) {
    var e = ge(),
      n = Kt;
    if (n !== null) return C0(e, n, t);
    (ge(), (e = e.memoizedState), (n = ge()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function Ql(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = bt.updateQueue),
      e === null && ((e = oo()), (bt.updateQueue = e)),
      (n = e.lastEffect),
      n === null ? (e.lastEffect = t.next = t) : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function E0() {
    return ge().memoizedState;
  }
  function co(t, e, n, l) {
    var r = Ge();
    ((bt.flags |= t), (r.memoizedState = Ql(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function fo(t, e, n, l) {
    var r = ge();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    Kt !== null && l !== null && Ms(l, Kt.memoizedState.deps)
      ? (r.memoizedState = Ql(e, s, n, l))
      : ((bt.flags |= t), (r.memoizedState = Ql(1 | e, s, n, l)));
  }
  function A0(t, e) {
    co(8390656, 8, t, e);
  }
  function Hs(t, e) {
    fo(2048, 8, t, e);
  }
  function ey(t) {
    bt.flags |= 4;
    var e = bt.updateQueue;
    if (e === null) ((e = oo()), (bt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function z0(t) {
    var e = ge().memoizedState;
    return (
      ey({ ref: e, nextImpl: t }),
      function () {
        if ((Lt & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function M0(t, e) {
    return fo(4, 2, t, e);
  }
  function O0(t, e) {
    return fo(4, 4, t, e);
  }
  function R0(t, e) {
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
  function _0(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), fo(4, 4, R0.bind(null, e, t), n));
  }
  function Ls() {}
  function w0(t, e) {
    var n = ge();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Ms(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function D0(t, e) {
    var n = ge();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Ms(e, l[1])) return l[0];
    if (((l = t()), il)) {
      Ze(!0);
      try {
        t();
      } finally {
        Ze(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function ks(t, e, n) {
    return n === void 0 || ((na & 1073741824) !== 0 && (Rt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Bp()), (bt.lanes |= t), (Ba |= t), n);
  }
  function B0(t, e, n, l) {
    return an(n, e)
      ? n
      : Gl.current !== null
        ? ((t = ks(t, n, l)), an(t, e) || (Se = !0), t)
        : (na & 42) === 0 || ((na & 1073741824) !== 0 && (Rt & 261930) === 0)
          ? ((Se = !0), (t.memoizedState = n))
          : ((t = Bp()), (bt.lanes |= t), (Ba |= t), e);
  }
  function j0(t, e, n, l, r) {
    var s = K.p;
    K.p = s !== 0 && 8 > s ? s : 8;
    var d = A.T,
      h = {};
    ((A.T = h), $s(t, !1, e, n));
    try {
      var x = r(),
        w = A.S;
      if ((w !== null && w(h, x), x !== null && typeof x == 'object' && typeof x.then == 'function')) {
        var k = W1(x, l);
        Qi(t, e, k, cn(t));
      } else Qi(t, e, l, cn(t));
    } catch (X) {
      Qi(t, e, { then: function () {}, status: 'rejected', reason: X }, cn());
    } finally {
      ((K.p = s), d !== null && h.types !== null && (d.types = h.types), (A.T = d));
    }
  }
  function ny() {}
  function Ys(t, e, n, l) {
    if (t.tag !== 5) throw Error(o(476));
    var r = N0(t).queue;
    j0(
      t,
      r,
      e,
      I,
      n === null
        ? ny
        : function () {
            return (U0(t), n(l));
          }
    );
  }
  function N0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: I },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: n },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function U0(t) {
    var e = N0(t);
    (e.next === null && (e = t.alternate.memoizedState), Qi(t, e.next.queue, {}, cn()));
  }
  function qs() {
    return we(sr);
  }
  function H0() {
    return ge().memoizedState;
  }
  function L0() {
    return ge().memoizedState;
  }
  function ay(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = cn();
          t = Ma(n);
          var l = Oa(e, t, n);
          (l !== null && (tn(l, e, n), qi(l, e, n)), (e = { cache: gs() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function ly(t, e, n) {
    var l = cn();
    ((n = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
      po(t) ? Y0(e, n) : ((n = is(t, e, n, l)), n !== null && (tn(n, t, l), q0(n, e, l))));
  }
  function k0(t, e, n) {
    var l = cn();
    Qi(t, e, n, l);
  }
  function Qi(t, e, n, l) {
    var r = { lane: l, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (po(t)) Y0(e, r);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
        try {
          var d = e.lastRenderedState,
            h = s(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = h), an(h, d))) return (Qr(t, e, r, 0), Pt === null && Xr(), !1);
        } catch {
        } finally {
        }
      if (((n = is(t, e, r, l)), n !== null)) return (tn(n, t, l), q0(n, e, l), !0);
    }
    return !1;
  }
  function $s(t, e, n, l) {
    if (
      ((l = { lane: 2, revertLane: Sc(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
      po(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = is(t, n, l, 2)), e !== null && tn(e, t, 2));
  }
  function po(t) {
    var e = t.alternate;
    return t === bt || (e !== null && e === bt);
  }
  function Y0(t, e) {
    Vl = io = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function q0(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Qf(t, n));
    }
  }
  var Zi = {
    readContext: we,
    use: uo,
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
  Zi.useEffectEvent = ce;
  var $0 = {
      readContext: we,
      use: uo,
      useCallback: function (t, e) {
        return ((Ge().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: we,
      useEffect: A0,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), co(4194308, 4, R0.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return co(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        co(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = Ge();
        e = e === void 0 ? null : e;
        var l = t();
        if (il) {
          Ze(!0);
          try {
            t();
          } finally {
            Ze(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = Ge();
        if (n !== void 0) {
          var r = n(e);
          if (il) {
            Ze(!0);
            try {
              n(e);
            } finally {
              Ze(!1);
            }
          }
        } else r = e;
        return (
          (l.memoizedState = l.baseState = r),
          (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }),
          (l.queue = t),
          (t = t.dispatch = ly.bind(null, bt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ge();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Ns(t);
        var e = t.queue,
          n = k0.bind(null, bt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Ls,
      useDeferredValue: function (t, e) {
        var n = Ge();
        return ks(n, t, e);
      },
      useTransition: function () {
        var t = Ns(!1);
        return ((t = j0.bind(null, bt, t.queue, !0, !1)), (Ge().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var l = bt,
          r = Ge();
        if (Dt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Pt === null)) throw Error(o(349));
          (Rt & 127) !== 0 || s0(l, e, n);
        }
        r.memoizedState = n;
        var s = { value: n, getSnapshot: e };
        return (
          (r.queue = s),
          A0(f0.bind(null, l, s, t), [t]),
          (l.flags |= 2048),
          Ql(9, { destroy: void 0 }, c0.bind(null, l, s, n, e), null),
          n
        );
      },
      useId: function () {
        var t = Ge(),
          e = Pt.identifierPrefix;
        if (Dt) {
          var n = Yn,
            l = kn;
          ((n = (l & ~(1 << (32 - $e(l) - 1))).toString(32) + n),
            (e = '_' + e + 'R_' + n),
            (n = ro++),
            0 < n && (e += 'H' + n.toString(32)),
            (e += '_'));
        } else ((n = F1++), (e = '_' + e + 'r_' + n.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: qs,
      useFormState: S0,
      useActionState: S0,
      useOptimistic: function (t) {
        var e = Ge();
        e.memoizedState = e.baseState = t;
        var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = n), (e = $s.bind(null, bt, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: Ds,
      useCacheRefresh: function () {
        return (Ge().memoizedState = ay.bind(null, bt));
      },
      useEffectEvent: function (t) {
        var e = Ge(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Lt & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Gs = {
      readContext: we,
      use: uo,
      useCallback: w0,
      useContext: we,
      useEffect: Hs,
      useImperativeHandle: _0,
      useInsertionEffect: M0,
      useLayoutEffect: O0,
      useMemo: D0,
      useReducer: so,
      useRef: E0,
      useState: function () {
        return so(aa);
      },
      useDebugValue: Ls,
      useDeferredValue: function (t, e) {
        var n = ge();
        return B0(n, Kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = so(aa)[0],
          e = ge().memoizedState;
        return [typeof t == 'boolean' ? t : Xi(t), e];
      },
      useSyncExternalStore: u0,
      useId: H0,
      useHostTransitionStatus: qs,
      useFormState: x0,
      useActionState: x0,
      useOptimistic: function (t, e) {
        var n = ge();
        return h0(n, Kt, t, e);
      },
      useMemoCache: Ds,
      useCacheRefresh: L0,
    };
  Gs.useEffectEvent = z0;
  var G0 = {
    readContext: we,
    use: uo,
    useCallback: w0,
    useContext: we,
    useEffect: Hs,
    useImperativeHandle: _0,
    useInsertionEffect: M0,
    useLayoutEffect: O0,
    useMemo: D0,
    useReducer: js,
    useRef: E0,
    useState: function () {
      return js(aa);
    },
    useDebugValue: Ls,
    useDeferredValue: function (t, e) {
      var n = ge();
      return Kt === null ? ks(n, t, e) : B0(n, Kt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = js(aa)[0],
        e = ge().memoizedState;
      return [typeof t == 'boolean' ? t : Xi(t), e];
    },
    useSyncExternalStore: u0,
    useId: H0,
    useHostTransitionStatus: qs,
    useFormState: T0,
    useActionState: T0,
    useOptimistic: function (t, e) {
      var n = ge();
      return Kt !== null ? h0(n, Kt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Ds,
    useCacheRefresh: L0,
  };
  G0.useEffectEvent = z0;
  function Vs(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : C({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Xs = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = cn(),
        r = Ma(l);
      ((r.payload = e), n != null && (r.callback = n), (e = Oa(t, r, l)), e !== null && (tn(e, t, l), qi(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = cn(),
        r = Ma(l);
      ((r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Oa(t, r, l)),
        e !== null && (tn(e, t, l), qi(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = cn(),
        l = Ma(n);
      ((l.tag = 2), e != null && (l.callback = e), (e = Oa(t, l, n)), e !== null && (tn(e, t, n), qi(e, t, n)));
    },
  };
  function V0(t, e, n, l, r, s, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, s, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Bi(n, l) || !Bi(r, s)
          : !0
    );
  }
  function X0(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' && e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && Xs.enqueueReplaceState(e, e.state, null));
  }
  function rl(t, e) {
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
  function Q0(t) {
    Vr(t);
  }
  function Z0(t) {
    console.error(t);
  }
  function K0(t) {
    Vr(t);
  }
  function ho(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function J0(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Qs(t, e, n) {
    return (
      (n = Ma(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ho(t, e);
      }),
      n
    );
  }
  function W0(t) {
    return ((t = Ma(t)), (t.tag = 3), t);
  }
  function F0(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = l.value;
      ((t.payload = function () {
        return r(s);
      }),
        (t.callback = function () {
          J0(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == 'function' &&
      (t.callback = function () {
        (J0(e, n, l), typeof r != 'function' && (ja === null ? (ja = new Set([this])) : ja.add(this)));
        var h = l.stack;
        this.componentDidCatch(l.value, { componentStack: h !== null ? h : '' });
      });
  }
  function iy(t, e, n, l, r) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((e = n.alternate), e !== null && Ll(e, n, r, !0), (n = rn.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Cn === null ? zo() : n.alternate === null && fe === 0 && (fe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === to
                ? (n.flags |= 16384)
                : ((e = n.updateQueue), e === null ? (n.updateQueue = new Set([l])) : e.add(l), yc(t, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === to
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  yc(t, l, r)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return (yc(t, l, r), zo(), !1);
    }
    if (Dt)
      return (
        (e = rn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== fs && ((t = Error(o(422), { cause: l })), Ui(vn(t, n))))
          : (l !== fs && ((e = Error(o(423), { cause: l })), Ui(vn(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = vn(l, n)),
            (r = Qs(t.stateNode, l, r)),
            Cs(t, r),
            fe !== 4 && (fe = 2)),
        !1
      );
    var s = Error(o(520), { cause: l });
    if (((s = vn(s, n)), er === null ? (er = [s]) : er.push(s), fe !== 4 && (fe = 2), e === null)) return !0;
    ((l = vn(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return ((n.flags |= 65536), (t = r & -r), (n.lanes |= t), (t = Qs(n.stateNode, l, t)), Cs(n, t), !1);
        case 1:
          if (
            ((e = n.type),
            (s = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (s !== null && typeof s.componentDidCatch == 'function' && (ja === null || !ja.has(s)))))
          )
            return ((n.flags |= 65536), (r &= -r), (n.lanes |= r), (r = W0(r)), F0(r, t, n, l), Cs(n, r), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zs = Error(o(461)),
    Se = !1;
  function De(t, e, n, l) {
    e.child = t === null ? e0(e, null, n, l) : ll(e, t.child, n, l);
  }
  function P0(t, e, n, l, r) {
    n = n.render;
    var s = e.ref;
    if ('ref' in l) {
      var d = {};
      for (var h in l) h !== 'ref' && (d[h] = l[h]);
    } else d = l;
    return (
      tl(e),
      (l = Os(t, e, n, d, s, r)),
      (h = Rs()),
      t !== null && !Se ? (_s(t, e, r), la(t, e, r)) : (Dt && h && ss(e), (e.flags |= 1), De(t, e, l, r), e.child)
    );
  }
  function I0(t, e, n, l, r) {
    if (t === null) {
      var s = n.type;
      return typeof s == 'function' && !rs(s) && s.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = s), tp(t, e, s, l, r))
        : ((t = Kr(n.type, null, l, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((s = t.child), !ec(t, r))) {
      var d = s.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Bi), n(d, l) && t.ref === e.ref)) return la(t, e, r);
    }
    return ((e.flags |= 1), (t = Pn(s, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function tp(t, e, n, l, r) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Bi(s, l) && t.ref === e.ref)
        if (((Se = !1), (e.pendingProps = l = s), ec(t, r))) (t.flags & 131072) !== 0 && (Se = !0);
        else return ((e.lanes = t.lanes), la(t, e, r));
    }
    return Ks(t, e, n, l, r);
  }
  function ep(t, e, n, l) {
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
        return np(t, e, s, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Pr(e, s !== null ? s.cachePool : null),
          s !== null ? l0(e, s) : Es(),
          i0(e));
      else return ((l = e.lanes = 536870912), np(t, e, s !== null ? s.baseLanes | n : n, n, l));
    } else
      s !== null
        ? (Pr(e, s.cachePool), l0(e, s), _a(), (e.memoizedState = null))
        : (t !== null && Pr(e, null), Es(), _a());
    return (De(t, e, r, n), e.child);
  }
  function Ki(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      e.sibling
    );
  }
  function np(t, e, n, l, r) {
    var s = vs();
    return (
      (s = s === null ? null : { parent: ve._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && Pr(e, null),
      Es(),
      i0(e),
      t !== null && Ll(t, e, l, !0),
      (e.childLanes = r),
      null
    );
  }
  function mo(t, e) {
    return (
      (e = yo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ap(t, e, n) {
    return (ll(e, t.child, null, n), (t = mo(e, e.pendingProps)), (t.flags |= 2), on(e), (e.memoizedState = null), t);
  }
  function ry(t, e, n) {
    var l = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Dt) {
        if (l.mode === 'hidden') return ((t = mo(e, l)), (e.lanes = 536870912), Ki(null, t));
        if (
          (zs(e),
          (t = ne)
            ? ((t = mh(t, xn)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ca !== null ? { id: kn, overflow: Yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Yd(t)),
                (n.return = e),
                (e.child = n),
                (_e = e),
                (ne = null)))
            : (t = null),
          t === null)
        )
          throw Ea(e);
        return ((e.lanes = 536870912), null);
      }
      return mo(e, l);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if ((zs(e), r))
        if (e.flags & 256) ((e.flags &= -257), (e = ap(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(o(558));
      else if ((Se || Ll(t, e, n, !1), (r = (n & t.childLanes) !== 0), Se || r)) {
        if (((l = Pt), l !== null && ((d = Zf(l, n)), d !== 0 && d !== s.retryLane)))
          throw ((s.retryLane = d), Wa(t, d), tn(l, t, d), Zs);
        (zo(), (e = ap(t, e, n)));
      } else
        ((t = s.treeContext),
          (ne = Tn(d.nextSibling)),
          (_e = e),
          (Dt = !0),
          (Ta = null),
          (xn = !1),
          t !== null && Gd(e, t),
          (e = mo(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Pn(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function go(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ks(t, e, n, l, r) {
    return (
      tl(e),
      (n = Os(t, e, n, l, void 0, r)),
      (l = Rs()),
      t !== null && !Se ? (_s(t, e, r), la(t, e, r)) : (Dt && l && ss(e), (e.flags |= 1), De(t, e, n, r), e.child)
    );
  }
  function lp(t, e, n, l, r, s) {
    return (
      tl(e),
      (e.updateQueue = null),
      (n = o0(e, l, n, r)),
      r0(t),
      (l = Rs()),
      t !== null && !Se ? (_s(t, e, s), la(t, e, s)) : (Dt && l && ss(e), (e.flags |= 1), De(t, e, n, s), e.child)
    );
  }
  function ip(t, e, n, l, r) {
    if ((tl(e), e.stateNode === null)) {
      var s = jl,
        d = n.contextType;
      (typeof d == 'object' && d !== null && (s = we(d)),
        (s = new n(l, s)),
        (e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Xs),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = l),
        (s.state = e.memoizedState),
        (s.refs = {}),
        Ss(e),
        (d = n.contextType),
        (s.context = typeof d == 'object' && d !== null ? we(d) : jl),
        (s.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == 'function' && (Vs(e, n, d, l), (s.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof s.getSnapshotBeforeUpdate == 'function' ||
          (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
          ((d = s.state),
          typeof s.componentWillMount == 'function' && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
          d !== s.state && Xs.enqueueReplaceState(s, s.state, null),
          Gi(e, l, s, r),
          $i(),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      s = e.stateNode;
      var h = e.memoizedProps,
        x = rl(n, h);
      s.props = x;
      var w = s.context,
        k = n.contextType;
      ((d = jl), typeof k == 'object' && k !== null && (d = we(k)));
      var X = n.getDerivedStateFromProps;
      ((k = typeof X == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'),
        (h = e.pendingProps !== h),
        k ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((h || w !== d) && X0(e, s, l, d)),
        (za = !1));
      var D = e.memoizedState;
      ((s.state = D),
        Gi(e, l, s, r),
        $i(),
        (w = e.memoizedState),
        h || D !== w || za
          ? (typeof X == 'function' && (Vs(e, n, X, l), (w = e.memoizedState)),
            (x = za || V0(e, n, x, l, D, w, d))
              ? (k ||
                  (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                  (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = w)),
            (s.props = l),
            (s.state = w),
            (s.context = d),
            (l = x))
          : (typeof s.componentDidMount == 'function' && (e.flags |= 4194308), (l = !1)));
    } else {
      ((s = e.stateNode),
        xs(t, e),
        (d = e.memoizedProps),
        (k = rl(n, d)),
        (s.props = k),
        (X = e.pendingProps),
        (D = s.context),
        (w = n.contextType),
        (x = jl),
        typeof w == 'object' && w !== null && (x = we(w)),
        (h = n.getDerivedStateFromProps),
        (w = typeof h == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((d !== X || D !== x) && X0(e, s, l, x)),
        (za = !1),
        (D = e.memoizedState),
        (s.state = D),
        Gi(e, l, s, r),
        $i());
      var j = e.memoizedState;
      d !== X || D !== j || za || (t !== null && t.dependencies !== null && Wr(t.dependencies))
        ? (typeof h == 'function' && (Vs(e, n, h, l), (j = e.memoizedState)),
          (k = za || V0(e, n, k, l, D, j, x) || (t !== null && t.dependencies !== null && Wr(t.dependencies)))
            ? (w ||
                (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
                (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(l, j, x),
                typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(l, j, x)),
              typeof s.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof s.componentDidUpdate != 'function' ||
                (d === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != 'function' ||
                (d === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = j)),
          (s.props = l),
          (s.state = j),
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
      go(t, e),
      (l = (e.flags & 128) !== 0),
      s || l
        ? ((s = e.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : s.render()),
          (e.flags |= 1),
          t !== null && l ? ((e.child = ll(e, t.child, null, r)), (e.child = ll(e, null, n, r))) : De(t, e, n, r),
          (e.memoizedState = s.state),
          (t = e.child))
        : (t = la(t, e, r)),
      t
    );
  }
  function rp(t, e, n, l) {
    return (Pa(), (e.flags |= 256), De(t, e, n, l), e.child);
  }
  var Js = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ws(t) {
    return { baseLanes: t, cachePool: Jd() };
  }
  function Fs(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= sn), t);
  }
  function op(t, e, n) {
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
          (r ? Ra(e) : _a(),
          (t = ne)
            ? ((t = mh(t, xn)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ca !== null ? { id: kn, overflow: Yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Yd(t)),
                (n.return = e),
                (e.child = n),
                (_e = e),
                (ne = null)))
            : (t = null),
          t === null)
        )
          throw Ea(e);
        return (Bc(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var h = l.children;
      return (
        (l = l.fallback),
        r
          ? (_a(),
            (r = e.mode),
            (h = yo({ mode: 'hidden', children: h }, r)),
            (l = Fa(l, r, n, null)),
            (h.return = e),
            (l.return = e),
            (h.sibling = l),
            (e.child = h),
            (l = e.child),
            (l.memoizedState = Ws(n)),
            (l.childLanes = Fs(t, d, n)),
            (e.memoizedState = Js),
            Ki(null, l))
          : (Ra(e), Ps(e, h))
      );
    }
    var x = t.memoizedState;
    if (x !== null && ((h = x.dehydrated), h !== null)) {
      if (s)
        e.flags & 256
          ? (Ra(e), (e.flags &= -257), (e = Is(t, e, n)))
          : e.memoizedState !== null
            ? (_a(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (_a(),
              (h = l.fallback),
              (r = e.mode),
              (l = yo({ mode: 'visible', children: l.children }, r)),
              (h = Fa(h, r, n, null)),
              (h.flags |= 2),
              (l.return = e),
              (h.return = e),
              (l.sibling = h),
              (e.child = l),
              ll(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = Ws(n)),
              (l.childLanes = Fs(t, d, n)),
              (e.memoizedState = Js),
              (e = Ki(null, l)));
      else if ((Ra(e), Bc(h))) {
        if (((d = h.nextSibling && h.nextSibling.dataset), d)) var w = d.dgst;
        ((d = w),
          (l = Error(o(419))),
          (l.stack = ''),
          (l.digest = d),
          Ui({ value: l, source: null, stack: null }),
          (e = Is(t, e, n)));
      } else if ((Se || Ll(t, e, n, !1), (d = (n & t.childLanes) !== 0), Se || d)) {
        if (((d = Pt), d !== null && ((l = Zf(d, n)), l !== 0 && l !== x.retryLane)))
          throw ((x.retryLane = l), Wa(t, l), tn(d, t, l), Zs);
        (Dc(h) || zo(), (e = Is(t, e, n)));
      } else
        Dc(h)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (ne = Tn(h.nextSibling)),
            (_e = e),
            (Dt = !0),
            (Ta = null),
            (xn = !1),
            t !== null && Gd(e, t),
            (e = Ps(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (_a(),
        (h = l.fallback),
        (r = e.mode),
        (x = t.child),
        (w = x.sibling),
        (l = Pn(x, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = x.subtreeFlags & 65011712),
        w !== null ? (h = Pn(w, h)) : ((h = Fa(h, r, n, null)), (h.flags |= 2)),
        (h.return = e),
        (l.return = e),
        (l.sibling = h),
        (e.child = l),
        Ki(null, l),
        (l = e.child),
        (h = t.child.memoizedState),
        h === null
          ? (h = Ws(n))
          : ((r = h.cachePool),
            r !== null ? ((x = ve._currentValue), (r = r.parent !== x ? { parent: x, pool: x } : r)) : (r = Jd()),
            (h = { baseLanes: h.baseLanes | n, cachePool: r })),
        (l.memoizedState = h),
        (l.childLanes = Fs(t, d, n)),
        (e.memoizedState = Js),
        Ki(t.child, l))
      : (Ra(e),
        (n = t.child),
        (t = n.sibling),
        (n = Pn(n, { mode: 'visible', children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null && ((d = e.deletions), d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Ps(t, e) {
    return ((e = yo({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function yo(t, e) {
    return ((t = ln(22, t, null, e)), (t.lanes = 0), t);
  }
  function Is(t, e, n) {
    return (ll(e, t.child, null, n), (t = Ps(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t);
  }
  function up(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), hs(t.return, e, n));
  }
  function tc(t, e, n, l, r, s) {
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
  function sp(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      s = l.tail;
    l = l.children;
    var d = me.current,
      h = (d & 2) !== 0;
    if (
      (h ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      P(me, d),
      De(t, e, l, n),
      (l = Dt ? Ni : 0),
      !h && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && up(t, n, e);
        else if (t.tag === 19) up(t, n, e);
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
          ((t = n.alternate), t !== null && lo(t) === null && (r = n), (n = n.sibling));
        ((n = r),
          n === null ? ((r = e.child), (e.child = null)) : ((r = n.sibling), (n.sibling = null)),
          tc(e, !1, r, n, s, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && lo(t) === null)) {
            e.child = r;
            break;
          }
          ((t = r.sibling), (r.sibling = n), (n = r), (r = t));
        }
        tc(e, !0, n, null, s, l);
        break;
      case 'together':
        tc(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function la(t, e, n) {
    if ((t !== null && (e.dependencies = t.dependencies), (Ba |= e.lanes), (n & e.childLanes) === 0))
      if (t !== null) {
        if ((Ll(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, n = Pn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        ((t = t.sibling), (n = n.sibling = Pn(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function ec(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Wr(t)));
  }
  function oy(t, e, n) {
    switch (e.tag) {
      case 3:
        (jt(e, e.stateNode.containerInfo), Aa(e, ve, t.memoizedState.cache), Pa());
        break;
      case 27:
      case 5:
        Ee(e);
        break;
      case 4:
        jt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Aa(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), zs(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ra(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? op(t, e, n)
              : (Ra(e), (t = la(t, e, n)), t !== null ? t.sibling : null);
        Ra(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (((l = (n & e.childLanes) !== 0), l || (Ll(t, e, n, !1), (l = (n & e.childLanes) !== 0)), r)) {
          if (l) return sp(t, e, n);
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
        return ((e.lanes = 0), ep(t, e, n, e.pendingProps));
      case 24:
        Aa(e, ve, t.memoizedState.cache);
    }
    return la(t, e, n);
  }
  function cp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Se = !0;
      else {
        if (!ec(t, n) && (e.flags & 128) === 0) return ((Se = !1), oy(t, e, n));
        Se = (t.flags & 131072) !== 0;
      }
    else ((Se = !1), Dt && (e.flags & 1048576) !== 0 && $d(e, Ni, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = nl(e.elementType)), (e.type = t), typeof t == 'function'))
            rs(t)
              ? ((l = rl(t, l)), (e.tag = 1), (e = ip(null, e, t, l, n)))
              : ((e.tag = 0), (e = Ks(null, e, t, l, n)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === $) {
                ((e.tag = 11), (e = P0(null, e, t, l, n)));
                break t;
              } else if (r === Z) {
                ((e.tag = 14), (e = I0(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = Q(t) || t), Error(o(306, e, '')));
          }
        }
        return e;
      case 0:
        return Ks(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (r = rl(l, e.pendingProps)), ip(t, e, l, r, n));
      case 3:
        t: {
          if ((jt(e, e.stateNode.containerInfo), t === null)) throw Error(o(387));
          l = e.pendingProps;
          var s = e.memoizedState;
          ((r = s.element), xs(t, e), Gi(e, l, null, n));
          var d = e.memoizedState;
          if (((l = d.cache), Aa(e, ve, l), l !== s.cache && ms(e, [ve], n, !0), $i(), (l = d.element), s.isDehydrated))
            if (
              ((s = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = rp(t, e, l, n);
              break t;
            } else if (l !== r) {
              ((r = vn(Error(o(424)), e)), Ui(r), (e = rp(t, e, l, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (ne = Tn(t.firstChild), _e = e, Dt = !0, Ta = null, xn = !0, n = e0(e, null, l, n), e.child = n; n; )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Pa(), l === r)) {
              e = la(t, e, n);
              break t;
            }
            De(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          go(t, e),
          t === null
            ? (n = xh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Dt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = Bo(ht.current).createElement(n)),
                (l[Re] = e),
                (l[Ke] = t),
                Be(l, n, t),
                Me(l),
                (e.stateNode = l))
            : (e.memoizedState = xh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Ee(e),
          t === null &&
            Dt &&
            ((l = e.stateNode = vh(e.type, e.pendingProps, ht.current)),
            (_e = e),
            (xn = !0),
            (r = ne),
            La(e.type) ? ((jc = r), (ne = Tn(l.firstChild))) : (ne = r)),
          De(t, e, e.pendingProps.children, n),
          go(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Dt &&
            ((r = l = ne) &&
              ((l = Hy(l, e.type, e.pendingProps, xn)),
              l !== null ? ((e.stateNode = l), (_e = e), (ne = Tn(l.firstChild)), (xn = !1), (r = !0)) : (r = !1)),
            r || Ea(e)),
          Ee(e),
          (r = e.type),
          (s = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = s.children),
          Rc(r, s) ? (l = null) : d !== null && Rc(r, d) && (e.flags |= 32),
          e.memoizedState !== null && ((r = Os(t, e, P1, null, null, n)), (sr._currentValue = r)),
          go(t, e),
          De(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Dt &&
            ((t = n = ne) &&
              ((n = Ly(n, e.pendingProps, xn)),
              n !== null ? ((e.stateNode = n), (_e = e), (ne = null), (t = !0)) : (t = !1)),
            t || Ea(e)),
          null
        );
      case 13:
        return op(t, e, n);
      case 4:
        return (
          jt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = ll(e, null, l, n)) : De(t, e, l, n),
          e.child
        );
      case 11:
        return P0(t, e, e.type, e.pendingProps, n);
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
          tl(e),
          (r = we(r)),
          (l = l(r)),
          (e.flags |= 1),
          De(t, e, l, n),
          e.child
        );
      case 14:
        return I0(t, e, e.type, e.pendingProps, n);
      case 15:
        return tp(t, e, e.type, e.pendingProps, n);
      case 19:
        return sp(t, e, n);
      case 31:
        return ry(t, e, n);
      case 22:
        return ep(t, e, n, e.pendingProps);
      case 24:
        return (
          tl(e),
          (l = we(ve)),
          t === null
            ? ((r = vs()),
              r === null &&
                ((r = Pt),
                (s = gs()),
                (r.pooledCache = s),
                s.refCount++,
                s !== null && (r.pooledCacheLanes |= n),
                (r = s)),
              (e.memoizedState = { parent: l, cache: r }),
              Ss(e),
              Aa(e, ve, r))
            : ((t.lanes & n) !== 0 && (xs(t, e), Gi(e, null, null, n), $i()),
              (r = t.memoizedState),
              (s = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
                  Aa(e, ve, l))
                : ((l = s.cache), Aa(e, ve, l), l !== r.cache && ms(e, [ve], n, !0))),
          De(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function ia(t) {
    t.flags |= 4;
  }
  function nc(t, e, n, l, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Hp()) t.flags |= 8192;
        else throw ((al = to), bs);
    } else t.flags &= -16777217;
  }
  function fp(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !zh(e)))
      if (Hp()) t.flags |= 8192;
      else throw ((al = to), bs);
  }
  function vo(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Vf() : 536870912), (t.lanes |= e), (Wl |= e)));
  }
  function Ji(t, e) {
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
  function uy(t, e, n) {
    var l = e.pendingProps;
    switch ((cs(e), e.tag)) {
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
          ea(ve),
          Nt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Hl(e)
              ? ia(e)
              : t === null || (t.memoizedState.isDehydrated && (e.flags & 256) === 0) || ((e.flags |= 1024), ds())),
          ae(e),
          null
        );
      case 26:
        var r = e.type,
          s = e.memoizedState;
        return (
          t === null
            ? (ia(e), s !== null ? (ae(e), fp(e, s)) : (ae(e), nc(e, r, null, l, n)))
            : s
              ? s !== t.memoizedState
                ? (ia(e), ae(e), fp(e, s))
                : (ae(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && ia(e), ae(e), nc(e, r, t, l, n)),
          null
        );
      case 27:
        if ((He(e), (n = ht.current), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && ia(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return (ae(e), null);
          }
          ((t = tt.current), Hl(e) ? Vd(e) : ((t = vh(r, l, n)), (e.stateNode = t), ia(e)));
        }
        return (ae(e), null);
      case 5:
        if ((He(e), (r = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== l && ia(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return (ae(e), null);
          }
          if (((s = tt.current), Hl(e))) Vd(e);
          else {
            var d = Bo(ht.current);
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
            ((s[Re] = e), (s[Ke] = l));
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
            t: switch ((Be(s, r, l), r)) {
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
            l && ia(e);
          }
        }
        return (ae(e), nc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && ia(e);
        else {
          if (typeof l != 'string' && e.stateNode === null) throw Error(o(166));
          if (((t = ht.current), Hl(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (l = null), (r = _e), r !== null))
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((t[Re] = e),
              (t = !!(t.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || oh(t.nodeValue, n))),
              t || Ea(e, !0));
          } else ((t = Bo(t).createTextNode(l)), (t[Re] = e), (e.stateNode = t));
        }
        return (ae(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = Hl(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(o(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(557));
              t[Re] = e;
            } else (Pa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ae(e), (t = !1));
          } else
            ((n = ds()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), (t = !0));
          if (!t) return e.flags & 256 ? (on(e), e) : (on(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return (ae(e), null);
      case 13:
        if (((l = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((r = Hl(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(o(318));
              if (((r = e.memoizedState), (r = r !== null ? r.dehydrated : null), !r)) throw Error(o(317));
              r[Re] = e;
            } else (Pa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ae(e), (r = !1));
          } else
            ((r = ds()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), (r = !0));
          if (!r) return e.flags & 256 ? (on(e), e) : (on(e), null);
        }
        return (
          on(e),
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
              vo(e, e.updateQueue),
              ae(e),
              null)
        );
      case 4:
        return (Nt(), t === null && Ec(e.stateNode.containerInfo), ae(e), null);
      case 10:
        return (ea(e.type), ae(e), null);
      case 19:
        if ((B(me), (l = e.memoizedState), l === null)) return (ae(e), null);
        if (((r = (e.flags & 128) !== 0), (s = l.rendering), s === null))
          if (r) Ji(l, !1);
          else {
            if (fe !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((s = lo(t)), s !== null)) {
                  for (
                    e.flags |= 128,
                      Ji(l, !1),
                      t = s.updateQueue,
                      e.updateQueue = t,
                      vo(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    (kd(n, t), (n = n.sibling));
                  return (P(me, (me.current & 1) | 2), Dt && In(e, l.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null && ze() > To && ((e.flags |= 128), (r = !0), Ji(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = lo(s)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                vo(e, t),
                Ji(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !s.alternate && !Dt)
              )
                return (ae(e), null);
            } else
              2 * ze() - l.renderingStartTime > To &&
                n !== 536870912 &&
                ((e.flags |= 128), (r = !0), Ji(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((t = l.last), t !== null ? (t.sibling = s) : (e.child = s), (l.last = s));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = ze()),
            (t.sibling = null),
            (n = me.current),
            P(me, r ? (n & 1) | 2 : n & 1),
            Dt && In(e, l.treeForkCount),
            t)
          : (ae(e), null);
      case 22:
      case 23:
        return (
          on(e),
          As(),
          (l = e.memoizedState !== null),
          t !== null ? (t.memoizedState !== null) !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (ae(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : ae(e),
          (n = e.updateQueue),
          n !== null && vo(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && B(el),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          ea(ve),
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
  function sy(t, e) {
    switch ((cs(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          ea(ve),
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
          if ((on(e), e.alternate === null)) throw Error(o(340));
          Pa();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((on(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(o(340));
          Pa();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (B(me), null);
      case 4:
        return (Nt(), null);
      case 10:
        return (ea(e.type), null);
      case 22:
      case 23:
        return (
          on(e),
          As(),
          t !== null && B(el),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (ea(ve), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dp(t, e) {
    switch ((cs(e), e.tag)) {
      case 3:
        (ea(ve), Nt());
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
        e.memoizedState !== null && on(e);
        break;
      case 13:
        on(e);
        break;
      case 19:
        B(me);
        break;
      case 10:
        ea(e.type);
        break;
      case 22:
      case 23:
        (on(e), As(), t !== null && B(el));
        break;
      case 24:
        ea(ve);
    }
  }
  function Wi(t, e) {
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
    } catch (h) {
      Xt(e, e.return, h);
    }
  }
  function wa(t, e, n) {
    try {
      var l = e.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        l = s;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              h = d.destroy;
            if (h !== void 0) {
              ((d.destroy = void 0), (r = e));
              var x = n,
                w = h;
              try {
                w();
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
  function pp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        a0(e, n);
      } catch (l) {
        Xt(t, t.return, l);
      }
    }
  }
  function hp(t, e, n) {
    ((n.props = rl(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Xt(t, e, l);
    }
  }
  function Fi(t, e) {
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
  function mp(t) {
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
  function ac(t, e, n) {
    try {
      var l = t.stateNode;
      (wy(l, t.type, n, e), (l[Ke] = e));
    } catch (r) {
      Xt(t, t.return, r);
    }
  }
  function gp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && La(t.type)) || t.tag === 4;
  }
  function lc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || gp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if ((t.tag === 27 && La(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ic(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n).insertBefore(t, e)
          : ((e = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Wn)));
    else if (l !== 4 && (l === 27 && La(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null))
      for (ic(t, e, n), t = t.sibling; t !== null; ) (ic(t, e, n), (t = t.sibling));
  }
  function bo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (l !== 4 && (l === 27 && La(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (bo(t, e, n), t = t.sibling; t !== null; ) (bo(t, e, n), (t = t.sibling));
  }
  function yp(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
      (Be(e, l, n), (e[Re] = t), (e[Ke] = n));
    } catch (s) {
      Xt(t, t.return, s);
    }
  }
  var ra = !1,
    xe = !1,
    rc = !1,
    vp = typeof WeakSet == 'function' ? WeakSet : Set,
    Oe = null;
  function cy(t, e) {
    if (((t = t.containerInfo), (Mc = Yo), (t = _d(t)), Iu(t))) {
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
              h = -1,
              x = -1,
              w = 0,
              k = 0,
              X = t,
              D = null;
            e: for (;;) {
              for (
                var j;
                X !== n || (r !== 0 && X.nodeType !== 3) || (h = d + r),
                  X !== s || (l !== 0 && X.nodeType !== 3) || (x = d + l),
                  X.nodeType === 3 && (d += X.nodeValue.length),
                  (j = X.firstChild) !== null;

              )
                ((D = X), (X = j));
              for (;;) {
                if (X === t) break e;
                if ((D === n && ++w === r && (h = d), D === s && ++k === l && (x = d), (j = X.nextSibling) !== null))
                  break;
                ((X = D), (D = X.parentNode));
              }
              X = j;
            }
            n = h === -1 || x === -1 ? null : { start: h, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Oc = { focusedElem: t, selectionRange: n }, Yo = !1, Oe = e; Oe !== null; )
      if (((e = Oe), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) ((t.return = e), (Oe = t));
      else
        for (; Oe !== null; ) {
          switch (((e = Oe), (s = e.alternate), (t = e.flags), e.tag)) {
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
                  var lt = rl(n.type, r);
                  ((t = l.getSnapshotBeforeUpdate(lt, s)), (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (dt) {
                  Xt(n, n.return, dt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) wc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      wc(t);
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
            ((t.return = e.return), (Oe = t));
            break;
          }
          Oe = e.return;
        }
  }
  function bp(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (ua(t, n), l & 4 && Wi(5, n));
        break;
      case 1:
        if ((ua(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Xt(n, n.return, d);
            }
          else {
            var r = rl(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Xt(n, n.return, d);
            }
          }
        (l & 64 && pp(n), l & 512 && Fi(n, n.return));
        break;
      case 3:
        if ((ua(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
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
            a0(t, e);
          } catch (d) {
            Xt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && yp(n);
      case 26:
      case 5:
        (ua(t, n), e === null && l & 4 && mp(n), l & 512 && Fi(n, n.return));
        break;
      case 12:
        ua(t, n);
        break;
      case 31:
        (ua(t, n), l & 4 && Cp(t, n));
        break;
      case 13:
        (ua(t, n),
          l & 4 && Tp(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = by.bind(null, n)), ky(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || ra), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || xe), (r = ra));
          var s = xe;
          ((ra = l), (xe = e) && !s ? sa(t, n, (n.subtreeFlags & 8772) !== 0) : ua(t, n), (ra = r), (xe = s));
        }
        break;
      case 30:
        break;
      default:
        ua(t, n);
    }
  }
  function Sp(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Sp(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Uu(e)),
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
    We = !1;
  function oa(t, e, n) {
    for (n = n.child; n !== null; ) (xp(t, e, n), (n = n.sibling));
  }
  function xp(t, e, n) {
    if (ie && typeof ie.onCommitFiberUnmount == 'function')
      try {
        ie.onCommitFiberUnmount(It, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (xe || qn(n, e),
          oa(t, e, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        xe || qn(n, e);
        var l = re,
          r = We;
        (La(n.type) && ((re = n.stateNode), (We = !1)), oa(t, e, n), rr(n.stateNode), (re = l), (We = r));
        break;
      case 5:
        xe || qn(n, e);
      case 6:
        if (((l = re), (r = We), (re = null), oa(t, e, n), (re = l), (We = r), re !== null))
          if (We)
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
          (We
            ? ((t = re),
              ph(t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t, n.stateNode),
              li(t))
            : ph(re, n.stateNode));
        break;
      case 4:
        ((l = re), (r = We), (re = n.stateNode.containerInfo), (We = !0), oa(t, e, n), (re = l), (We = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (wa(2, n, e), xe || wa(4, n, e), oa(t, e, n));
        break;
      case 1:
        (xe || (qn(n, e), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && hp(n, e, l)), oa(t, e, n));
        break;
      case 21:
        oa(t, e, n);
        break;
      case 22:
        ((xe = (l = xe) || n.memoizedState !== null), oa(t, e, n), (xe = l));
        break;
      default:
        oa(t, e, n);
    }
  }
  function Cp(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
      t = t.dehydrated;
      try {
        li(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
    }
  }
  function Tp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        li(t);
      } catch (n) {
        Xt(e, e.return, n);
      }
  }
  function fy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new vp()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new vp()), e);
      default:
        throw Error(o(435, t.tag));
    }
  }
  function So(t, e) {
    var n = fy(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var r = Sy.bind(null, t, l);
        l.then(r, r);
      }
    });
  }
  function Fe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          s = t,
          d = e,
          h = d;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (La(h.type)) {
                ((re = h.stateNode), (We = !1));
                break t;
              }
              break;
            case 5:
              ((re = h.stateNode), (We = !1));
              break t;
            case 3:
            case 4:
              ((re = h.stateNode.containerInfo), (We = !0));
              break t;
          }
          h = h.return;
        }
        if (re === null) throw Error(o(160));
        (xp(s, d, r), (re = null), (We = !1), (s = r.alternate), s !== null && (s.return = null), (r.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (Ep(e, t), (e = e.sibling));
  }
  var Bn = null;
  function Ep(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Fe(e, t), Pe(t), l & 4 && (wa(3, t, t.return), Wi(3, t), wa(5, t, t.return)));
        break;
      case 1:
        (Fe(e, t),
          Pe(t),
          l & 512 && (xe || n === null || qn(n, n.return)),
          l & 64 &&
            ra &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var r = Bn;
        if ((Fe(e, t), Pe(t), l & 512 && (xe || n === null || qn(n, n.return)), l & 4)) {
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
                          s[Ei] ||
                          s[Re] ||
                          s.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          s.hasAttribute('itemprop')) &&
                          ((s = r.createElement(l)), r.head.insertBefore(s, r.querySelector('head > title'))),
                        Be(s, l, n),
                        (s[Re] = t),
                        Me(s),
                        (l = s));
                      break t;
                    case 'link':
                      var d = Eh('link', 'href', r).get(l + (n.href || ''));
                      if (d) {
                        for (var h = 0; h < d.length; h++)
                          if (
                            ((s = d[h]),
                            s.getAttribute('href') === (n.href == null || n.href === '' ? null : n.href) &&
                              s.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              s.getAttribute('title') === (n.title == null ? null : n.title) &&
                              s.getAttribute('crossorigin') === (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(h, 1);
                            break e;
                          }
                      }
                      ((s = r.createElement(l)), Be(s, l, n), r.head.appendChild(s));
                      break;
                    case 'meta':
                      if ((d = Eh('meta', 'content', r).get(l + (n.content || '')))) {
                        for (h = 0; h < d.length; h++)
                          if (
                            ((s = d[h]),
                            s.getAttribute('content') === (n.content == null ? null : '' + n.content) &&
                              s.getAttribute('name') === (n.name == null ? null : n.name) &&
                              s.getAttribute('property') === (n.property == null ? null : n.property) &&
                              s.getAttribute('http-equiv') === (n.httpEquiv == null ? null : n.httpEquiv) &&
                              s.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(h, 1);
                            break e;
                          }
                      }
                      ((s = r.createElement(l)), Be(s, l, n), r.head.appendChild(s));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((s[Re] = t), Me(s), (l = s));
                }
                t.stateNode = l;
              } else Ah(r, t.type, t.stateNode);
            else t.stateNode = Th(r, l, t.memoizedProps);
          else
            s !== l
              ? (s === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : s.count--,
                l === null ? Ah(r, t.type, t.stateNode) : Th(r, l, t.memoizedProps))
              : l === null && t.stateNode !== null && ac(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Fe(e, t),
          Pe(t),
          l & 512 && (xe || n === null || qn(n, n.return)),
          n !== null && l & 4 && ac(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Fe(e, t), Pe(t), l & 512 && (xe || n === null || qn(n, n.return)), t.flags & 32)) {
          r = t.stateNode;
          try {
            Ml(r, '');
          } catch (lt) {
            Xt(t, t.return, lt);
          }
        }
        (l & 4 && t.stateNode != null && ((r = t.memoizedProps), ac(t, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (rc = !0));
        break;
      case 6:
        if ((Fe(e, t), Pe(t), l & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((l = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = l;
          } catch (lt) {
            Xt(t, t.return, lt);
          }
        }
        break;
      case 3:
        if (
          ((Uo = null),
          (r = Bn),
          (Bn = jo(e.containerInfo)),
          Fe(e, t),
          (Bn = r),
          Pe(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            li(e.containerInfo);
          } catch (lt) {
            Xt(t, t.return, lt);
          }
        rc && ((rc = !1), Ap(t));
        break;
      case 4:
        ((l = Bn), (Bn = jo(t.stateNode.containerInfo)), Fe(e, t), Pe(t), (Bn = l));
        break;
      case 12:
        (Fe(e, t), Pe(t));
        break;
      case 31:
        (Fe(e, t), Pe(t), l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), So(t, l))));
        break;
      case 13:
        (Fe(e, t),
          Pe(t),
          t.child.flags & 8192 && (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Co = ze()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), So(t, l))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var x = n !== null && n.memoizedState !== null,
          w = ra,
          k = xe;
        if (((ra = w || r), (xe = k || x), Fe(e, t), (xe = k), (ra = w), Pe(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || x || ra || xe || ol(t)),
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
                    h = x.stateNode;
                    var X = x.memoizedProps.style,
                      D = X != null && X.hasOwnProperty('display') ? X.display : null;
                    h.style.display = D == null || typeof D == 'boolean' ? '' : ('' + D).trim();
                  }
                } catch (lt) {
                  Xt(x, x.return, lt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = r ? '' : x.memoizedProps;
                } catch (lt) {
                  Xt(x, x.return, lt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                x = e;
                try {
                  var j = x.stateNode;
                  r ? hh(j, !0) : hh(x.stateNode, !1);
                } catch (lt) {
                  Xt(x, x.return, lt);
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
          ((l = t.updateQueue), l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), So(t, n))));
        break;
      case 19:
        (Fe(e, t), Pe(t), l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), So(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Fe(e, t), Pe(t));
    }
  }
  function Pe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (gp(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              s = lc(t);
            bo(t, s, r);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ml(d, ''), (n.flags &= -33));
            var h = lc(t);
            bo(t, h, d);
            break;
          case 3:
          case 4:
            var x = n.stateNode.containerInfo,
              w = lc(t);
            ic(t, w, x);
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
  function Ap(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Ap(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function ua(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) (bp(t, e.alternate, e), (e = e.sibling));
  }
  function ol(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (wa(4, e, e.return), ol(e));
          break;
        case 1:
          qn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == 'function' && hp(e, e.return, n), ol(e));
          break;
        case 27:
          rr(e.stateNode);
        case 26:
        case 5:
          (qn(e, e.return), ol(e));
          break;
        case 22:
          e.memoizedState === null && ol(e);
          break;
        case 30:
          ol(e);
          break;
        default:
          ol(e);
      }
      t = t.sibling;
    }
  }
  function sa(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        r = t,
        s = e,
        d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (sa(r, s, n), Wi(4, s));
          break;
        case 1:
          if ((sa(r, s, n), (l = s), (r = l.stateNode), typeof r.componentDidMount == 'function'))
            try {
              r.componentDidMount();
            } catch (w) {
              Xt(l, l.return, w);
            }
          if (((l = s), (r = l.updateQueue), r !== null)) {
            var h = l.stateNode;
            try {
              var x = r.shared.hiddenCallbacks;
              if (x !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < x.length; r++) n0(x[r], h);
            } catch (w) {
              Xt(l, l.return, w);
            }
          }
          (n && d & 64 && pp(s), Fi(s, s.return));
          break;
        case 27:
          yp(s);
        case 26:
        case 5:
          (sa(r, s, n), n && l === null && d & 4 && mp(s), Fi(s, s.return));
          break;
        case 12:
          sa(r, s, n);
          break;
        case 31:
          (sa(r, s, n), n && d & 4 && Cp(r, s));
          break;
        case 13:
          (sa(r, s, n), n && d & 4 && Tp(r, s));
          break;
        case 22:
          (s.memoizedState === null && sa(r, s, n), Fi(s, s.return));
          break;
        case 30:
          break;
        default:
          sa(r, s, n);
      }
      e = e.sibling;
    }
  }
  function oc(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Hi(n)));
  }
  function uc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Hi(t)));
  }
  function jn(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (zp(t, e, n, l), (e = e.sibling));
  }
  function zp(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (jn(t, e, n, l), r & 2048 && Wi(9, e));
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
            e !== t && (e.refCount++, t != null && Hi(t))));
        break;
      case 12:
        if (r & 2048) {
          (jn(t, e, n, l), (t = e.stateNode));
          try {
            var s = e.memoizedProps,
              d = s.id,
              h = s.onPostCommit;
            typeof h == 'function' && h(d, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0);
          } catch (x) {
            Xt(e, e.return, x);
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
              : Pi(t, e)
            : s._visibility & 2
              ? jn(t, e, n, l)
              : ((s._visibility |= 2), Zl(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && oc(d, e));
        break;
      case 24:
        (jn(t, e, n, l), r & 2048 && uc(e.alternate, e));
        break;
      default:
        jn(t, e, n, l);
    }
  }
  function Zl(t, e, n, l, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t,
        d = e,
        h = n,
        x = l,
        w = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Zl(s, d, h, x, r), Wi(8, d));
          break;
        case 23:
          break;
        case 22:
          var k = d.stateNode;
          (d.memoizedState !== null
            ? k._visibility & 2
              ? Zl(s, d, h, x, r)
              : Pi(s, d)
            : ((k._visibility |= 2), Zl(s, d, h, x, r)),
            r && w & 2048 && oc(d.alternate, d));
          break;
        case 24:
          (Zl(s, d, h, x, r), r && w & 2048 && uc(d.alternate, d));
          break;
        default:
          Zl(s, d, h, x, r);
      }
      e = e.sibling;
    }
  }
  function Pi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          r = l.flags;
        switch (l.tag) {
          case 22:
            (Pi(n, l), r & 2048 && oc(l.alternate, l));
            break;
          case 24:
            (Pi(n, l), r & 2048 && uc(l.alternate, l));
            break;
          default:
            Pi(n, l);
        }
        e = e.sibling;
      }
  }
  var Ii = 8192;
  function Kl(t, e, n) {
    if (t.subtreeFlags & Ii) for (t = t.child; t !== null; ) (Mp(t, e, n), (t = t.sibling));
  }
  function Mp(t, e, n) {
    switch (t.tag) {
      case 26:
        (Kl(t, e, n), t.flags & Ii && t.memoizedState !== null && Fy(n, Bn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Kl(t, e, n);
        break;
      case 3:
      case 4:
        var l = Bn;
        ((Bn = jo(t.stateNode.containerInfo)), Kl(t, e, n), (Bn = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null ? ((l = Ii), (Ii = 16777216), Kl(t, e, n), (Ii = l)) : Kl(t, e, n));
        break;
      default:
        Kl(t, e, n);
    }
  }
  function Op(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function tr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Oe = l), _p(l, t));
        }
      Op(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Rp(t), (t = t.sibling));
  }
  function Rp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (tr(t), t.flags & 2048 && wa(9, t, t.return));
        break;
      case 3:
        tr(t);
        break;
      case 12:
        tr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), xo(t))
          : tr(t);
        break;
      default:
        tr(t);
    }
  }
  function xo(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Oe = l), _p(l, t));
        }
      Op(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (wa(8, e, e.return), xo(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), xo(e)));
          break;
        default:
          xo(e);
      }
      t = t.sibling;
    }
  }
  function _p(t, e) {
    for (; Oe !== null; ) {
      var n = Oe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Hi(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Oe = l));
      else
        t: for (n = t; Oe !== null; ) {
          l = Oe;
          var r = l.sibling,
            s = l.return;
          if ((Sp(l), l === n)) {
            Oe = null;
            break t;
          }
          if (r !== null) {
            ((r.return = s), (Oe = r));
            break t;
          }
          Oe = s;
        }
    }
  }
  var dy = {
      getCacheForType: function (t) {
        var e = we(ve),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return we(ve).controller.signal;
      },
    },
    py = typeof WeakMap == 'function' ? WeakMap : Map,
    Lt = 0,
    Pt = null,
    zt = null,
    Rt = 0,
    Vt = 0,
    un = null,
    Da = !1,
    Jl = !1,
    sc = !1,
    ca = 0,
    fe = 0,
    Ba = 0,
    ul = 0,
    cc = 0,
    sn = 0,
    Wl = 0,
    er = null,
    Ie = null,
    fc = !1,
    Co = 0,
    wp = 0,
    To = 1 / 0,
    Eo = null,
    ja = null,
    Te = 0,
    Na = null,
    Fl = null,
    fa = 0,
    dc = 0,
    pc = null,
    Dp = null,
    nr = 0,
    hc = null;
  function cn() {
    return (Lt & 2) !== 0 && Rt !== 0 ? Rt & -Rt : A.T !== null ? Sc() : Kf();
  }
  function Bp() {
    if (sn === 0)
      if ((Rt & 536870912) === 0 || Dt) {
        var t = Sl;
        ((Sl <<= 1), (Sl & 3932160) === 0 && (Sl = 262144), (sn = t));
      } else sn = 536870912;
    return ((t = rn.current), t !== null && (t.flags |= 32), sn);
  }
  function tn(t, e, n) {
    (((t === Pt && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null) && (Pl(t, 0), Ua(t, Rt, sn, !1)),
      Ti(t, n),
      ((Lt & 2) === 0 || t !== Pt) &&
        (t === Pt && ((Lt & 2) === 0 && (ul |= n), fe === 4 && Ua(t, Rt, sn, !1)), $n(t)));
  }
  function jp(t, e, n) {
    if ((Lt & 6) !== 0) throw Error(o(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ln(t, e),
      r = l ? gy(t, e) : gc(t, e, !0),
      s = l;
    do {
      if (r === 0) {
        Jl && !l && Ua(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), s && !hy(n))) {
          ((r = gc(t, e, !1)), (s = !1));
          continue;
        }
        if (r === 2) {
          if (((s = e), t.errorRecoveryDisabledLanes & s)) var d = 0;
          else ((d = t.pendingLanes & -536870913), (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var h = t;
              r = er;
              var x = h.current.memoizedState.isDehydrated;
              if ((x && (Pl(h, d).flags |= 256), (d = gc(h, d, !1)), d !== 2)) {
                if (sc && !x) {
                  ((h.errorRecoveryDisabledLanes |= s), (ul |= s), (r = 4));
                  break t;
                }
                ((s = Ie), (Ie = r), s !== null && (Ie === null ? (Ie = s) : Ie.push.apply(Ie, s)));
              }
              r = d;
            }
            if (((s = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (Pl(t, 0), Ua(t, e, 0, !0));
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
              Ua(l, e, sn, !Da);
              break t;
            case 2:
              Ie = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((r = Co + 300 - ze()), 10 < r)) {
            if ((Ua(l, e, sn, !Da), ba(l, 0, !0) !== 0)) break t;
            ((fa = e),
              (l.timeoutHandle = fh(Np.bind(null, l, n, Ie, Eo, fc, e, sn, ul, Wl, Da, s, 'Throttled', -0, 0), r)));
            break t;
          }
          Np(l, n, Ie, Eo, fc, e, sn, ul, Wl, Da, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    $n(t);
  }
  function Np(t, e, n, l, r, s, d, h, x, w, k, X, D, j) {
    if (((t.timeoutHandle = -1), (X = e.subtreeFlags), X & 8192 || (X & 16785408) === 16785408)) {
      ((X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Wn,
      }),
        Mp(e, s, X));
      var lt = (s & 62914560) === s ? Co - ze() : (s & 4194048) === s ? wp - ze() : 0;
      if (((lt = Py(X, lt)), lt !== null)) {
        ((fa = s),
          (t.cancelPendingCommit = lt(Gp.bind(null, t, e, s, n, l, r, d, h, x, k, X, null, D, j))),
          Ua(t, s, d, !w));
        return;
      }
    }
    Gp(t, e, s, n, l, r, d, h, x);
  }
  function hy(t) {
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
            if (!an(s(), r)) return !1;
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
  function Ua(t, e, n, l) {
    ((e &= ~cc),
      (e &= ~ul),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var s = 31 - $e(r),
        d = 1 << s;
      ((l[s] = -1), (r &= ~d));
    }
    n !== 0 && Xf(t, n, e);
  }
  function Ao() {
    return (Lt & 6) === 0 ? (ar(0), !1) : !0;
  }
  function mc() {
    if (zt !== null) {
      if (Vt === 0) var t = zt.return;
      else ((t = zt), (ta = Ia = null), ws(t), ($l = null), (ki = 0), (t = zt));
      for (; t !== null; ) (dp(t.alternate, t), (t = t.return));
      zt = null;
    }
  }
  function Pl(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), jy(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (fa = 0),
      mc(),
      (Pt = t),
      (zt = n = Pn(t.current, null)),
      (Rt = e),
      (Vt = 0),
      (un = null),
      (Da = !1),
      (Jl = Ln(t, e)),
      (sc = !1),
      (Wl = sn = cc = ul = Ba = fe = 0),
      (Ie = er = null),
      (fc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - $e(l),
          s = 1 << r;
        ((e |= t[r]), (l &= ~s));
      }
    return ((ca = e), Xr(), n);
  }
  function Up(t, e) {
    ((bt = null),
      (A.H = Zi),
      e === ql || e === Ir
        ? ((e = Pd()), (Vt = 3))
        : e === bs
          ? ((e = Pd()), (Vt = 4))
          : (Vt = e === Zs ? 8 : e !== null && typeof e == 'object' && typeof e.then == 'function' ? 6 : 1),
      (un = e),
      zt === null && ((fe = 1), ho(t, vn(e, t.current))));
  }
  function Hp() {
    var t = rn.current;
    return t === null
      ? !0
      : (Rt & 4194048) === Rt
        ? Cn === null
        : (Rt & 62914560) === Rt || (Rt & 536870912) !== 0
          ? t === Cn
          : !1;
  }
  function Lp() {
    var t = A.H;
    return ((A.H = Zi), t === null ? Zi : t);
  }
  function kp() {
    var t = A.A;
    return ((A.A = dy), t);
  }
  function zo() {
    ((fe = 4),
      Da || ((Rt & 4194048) !== Rt && rn.current !== null) || (Jl = !0),
      ((Ba & 134217727) === 0 && (ul & 134217727) === 0) || Pt === null || Ua(Pt, Rt, sn, !1));
  }
  function gc(t, e, n) {
    var l = Lt;
    Lt |= 2;
    var r = Lp(),
      s = kp();
    ((Pt !== t || Rt !== e) && ((Eo = null), Pl(t, e)), (e = !1));
    var d = fe;
    t: do
      try {
        if (Vt !== 0 && zt !== null) {
          var h = zt,
            x = un;
          switch (Vt) {
            case 8:
              (mc(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              rn.current === null && (e = !0);
              var w = Vt;
              if (((Vt = 0), (un = null), Il(t, h, x, w), n && Jl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((w = Vt), (Vt = 0), (un = null), Il(t, h, x, w));
          }
        }
        (my(), (d = fe));
        break;
      } catch (k) {
        Up(t, k);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ta = Ia = null),
      (Lt = l),
      (A.H = r),
      (A.A = s),
      zt === null && ((Pt = null), (Rt = 0), Xr()),
      d
    );
  }
  function my() {
    for (; zt !== null; ) Yp(zt);
  }
  function gy(t, e) {
    var n = Lt;
    Lt |= 2;
    var l = Lp(),
      r = kp();
    Pt !== t || Rt !== e ? ((Eo = null), (To = ze() + 500), Pl(t, e)) : (Jl = Ln(t, e));
    t: do
      try {
        if (Vt !== 0 && zt !== null) {
          e = zt;
          var s = un;
          e: switch (Vt) {
            case 1:
              ((Vt = 0), (un = null), Il(t, e, s, 1));
              break;
            case 2:
            case 9:
              if (Wd(s)) {
                ((Vt = 0), (un = null), qp(e));
                break;
              }
              ((e = function () {
                ((Vt !== 2 && Vt !== 9) || Pt !== t || (Vt = 7), $n(t));
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
              Wd(s) ? ((Vt = 0), (un = null), qp(e)) : ((Vt = 0), (un = null), Il(t, e, s, 7));
              break;
            case 5:
              var d = null;
              switch (zt.tag) {
                case 26:
                  d = zt.memoizedState;
                case 5:
                case 27:
                  var h = zt;
                  if (d ? zh(d) : h.stateNode.complete) {
                    ((Vt = 0), (un = null));
                    var x = h.sibling;
                    if (x !== null) zt = x;
                    else {
                      var w = h.return;
                      w !== null ? ((zt = w), Mo(w)) : (zt = null);
                    }
                    break e;
                  }
              }
              ((Vt = 0), (un = null), Il(t, e, s, 5));
              break;
            case 6:
              ((Vt = 0), (un = null), Il(t, e, s, 6));
              break;
            case 8:
              (mc(), (fe = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        yy();
        break;
      } catch (k) {
        Up(t, k);
      }
    while (!0);
    return ((ta = Ia = null), (A.H = l), (A.A = r), (Lt = n), zt !== null ? 0 : ((Pt = null), (Rt = 0), Xr(), fe));
  }
  function yy() {
    for (; zt !== null && !mt(); ) Yp(zt);
  }
  function Yp(t) {
    var e = cp(t.alternate, t, ca);
    ((t.memoizedProps = t.pendingProps), e === null ? Mo(t) : (zt = e));
  }
  function qp(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = lp(n, e, e.pendingProps, e.type, void 0, Rt);
        break;
      case 11:
        e = lp(n, e, e.pendingProps, e.type.render, e.ref, Rt);
        break;
      case 5:
        ws(e);
      default:
        (dp(n, e), (e = zt = kd(e, ca)), (e = cp(n, e, ca)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Mo(t) : (zt = e));
  }
  function Il(t, e, n, l) {
    ((ta = Ia = null), ws(e), ($l = null), (ki = 0));
    var r = e.return;
    try {
      if (iy(t, r, e, n, Rt)) {
        ((fe = 1), ho(t, vn(n, t.current)), (zt = null));
        return;
      }
    } catch (s) {
      if (r !== null) throw ((zt = r), s);
      ((fe = 1), ho(t, vn(n, t.current)), (zt = null));
      return;
    }
    e.flags & 32768
      ? (Dt || l === 1
          ? (t = !0)
          : Jl || (Rt & 536870912) !== 0
            ? (t = !1)
            : ((Da = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = rn.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        $p(e, t))
      : Mo(e);
  }
  function Mo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        $p(e, Da);
        return;
      }
      t = e.return;
      var n = uy(e.alternate, e, ca);
      if (n !== null) {
        zt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        zt = e;
        return;
      }
      zt = e = t;
    } while (e !== null);
    fe === 0 && (fe = 5);
  }
  function $p(t, e) {
    do {
      var n = sy(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (zt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        zt = t;
        return;
      }
      zt = t = n;
    } while (t !== null);
    ((fe = 6), (zt = null));
  }
  function Gp(t, e, n, l, r, s, d, h, x) {
    t.cancelPendingCommit = null;
    do Oo();
    while (Te !== 0);
    if ((Lt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= ls),
        Wg(t, n, s, d, h, x),
        t === Pt && ((zt = Pt = null), (Rt = 0)),
        (Fl = e),
        (Na = t),
        (fa = n),
        (dc = s),
        (pc = r),
        (Dp = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            xy(At, function () {
              return (Kp(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = A.T), (A.T = null), (r = K.p), (K.p = 2), (d = Lt), (Lt |= 4));
        try {
          cy(t, e, n);
        } finally {
          ((Lt = d), (K.p = r), (A.T = l));
        }
      }
      ((Te = 1), Vp(), Xp(), Qp());
    }
  }
  function Vp() {
    if (Te === 1) {
      Te = 0;
      var t = Na,
        e = Fl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var l = K.p;
        K.p = 2;
        var r = Lt;
        Lt |= 4;
        try {
          Ep(e, t);
          var s = Oc,
            d = _d(t.containerInfo),
            h = s.focusedElem,
            x = s.selectionRange;
          if (d !== h && h && h.ownerDocument && Rd(h.ownerDocument.documentElement, h)) {
            if (x !== null && Iu(h)) {
              var w = x.start,
                k = x.end;
              if ((k === void 0 && (k = w), 'selectionStart' in h))
                ((h.selectionStart = w), (h.selectionEnd = Math.min(k, h.value.length)));
              else {
                var X = h.ownerDocument || document,
                  D = (X && X.defaultView) || window;
                if (D.getSelection) {
                  var j = D.getSelection(),
                    lt = h.textContent.length,
                    dt = Math.min(x.start, lt),
                    Wt = x.end === void 0 ? dt : Math.min(x.end, lt);
                  !j.extend && dt > Wt && ((d = Wt), (Wt = dt), (dt = d));
                  var z = Od(h, dt),
                    T = Od(h, Wt);
                  if (
                    z &&
                    T &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== z.node ||
                      j.anchorOffset !== z.offset ||
                      j.focusNode !== T.node ||
                      j.focusOffset !== T.offset)
                  ) {
                    var _ = X.createRange();
                    (_.setStart(z.node, z.offset),
                      j.removeAllRanges(),
                      dt > Wt
                        ? (j.addRange(_), j.extend(T.node, T.offset))
                        : (_.setEnd(T.node, T.offset), j.addRange(_)));
                  }
                }
              }
            }
            for (X = [], j = h; (j = j.parentNode); )
              j.nodeType === 1 && X.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (typeof h.focus == 'function' && h.focus(), h = 0; h < X.length; h++) {
              var q = X[h];
              ((q.element.scrollLeft = q.left), (q.element.scrollTop = q.top));
            }
          }
          ((Yo = !!Mc), (Oc = Mc = null));
        } finally {
          ((Lt = r), (K.p = l), (A.T = n));
        }
      }
      ((t.current = e), (Te = 2));
    }
  }
  function Xp() {
    if (Te === 2) {
      Te = 0;
      var t = Na,
        e = Fl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var l = K.p;
        K.p = 2;
        var r = Lt;
        Lt |= 4;
        try {
          bp(t, e.alternate, e);
        } finally {
          ((Lt = r), (K.p = l), (A.T = n));
        }
      }
      Te = 3;
    }
  }
  function Qp() {
    if (Te === 4 || Te === 3) {
      ((Te = 0), ya());
      var t = Na,
        e = Fl,
        n = fa,
        l = Dp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Te = 5)
        : ((Te = 0), (Fl = Na = null), Zp(t, t.pendingLanes));
      var r = t.pendingLanes;
      if ((r === 0 && (ja = null), ju(n), (e = e.stateNode), ie && typeof ie.onCommitFiberRoot == 'function'))
        try {
          ie.onCommitFiberRoot(It, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = A.T), (r = K.p), (K.p = 2), (A.T = null));
        try {
          for (var s = t.onRecoverableError, d = 0; d < l.length; d++) {
            var h = l[d];
            s(h.value, { componentStack: h.stack });
          }
        } finally {
          ((A.T = e), (K.p = r));
        }
      }
      ((fa & 3) !== 0 && Oo(),
        $n(t),
        (r = t.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0 ? (t === hc ? nr++ : ((nr = 0), (hc = t))) : (nr = 0),
        ar(0));
    }
  }
  function Zp(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), Hi(e)));
  }
  function Oo() {
    return (Vp(), Xp(), Qp(), Kp());
  }
  function Kp() {
    if (Te !== 5) return !1;
    var t = Na,
      e = dc;
    dc = 0;
    var n = ju(fa),
      l = A.T,
      r = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (A.T = null), (n = pc), (pc = null));
      var s = Na,
        d = fa;
      if (((Te = 0), (Fl = Na = null), (fa = 0), (Lt & 6) !== 0)) throw Error(o(331));
      var h = Lt;
      if (
        ((Lt |= 4),
        Rp(s.current),
        zp(s, s.current, d, n),
        (Lt = h),
        ar(0, !1),
        ie && typeof ie.onPostCommitFiberRoot == 'function')
      )
        try {
          ie.onPostCommitFiberRoot(It, s);
        } catch {}
      return !0;
    } finally {
      ((K.p = r), (A.T = l), Zp(t, e));
    }
  }
  function Jp(t, e, n) {
    ((e = vn(n, e)), (e = Qs(t.stateNode, e, 2)), (t = Oa(t, e, 2)), t !== null && (Ti(t, 2), $n(t)));
  }
  function Xt(t, e, n) {
    if (t.tag === 3) Jp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Jp(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (ja === null || !ja.has(l)))
          ) {
            ((t = vn(n, t)), (n = W0(2)), (l = Oa(e, n, 2)), l !== null && (F0(n, l, e, t), Ti(l, 2), $n(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function yc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new py();
      var r = new Set();
      l.set(e, r);
    } else ((r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r)));
    r.has(n) || ((sc = !0), r.add(n), (t = vy.bind(null, t, e, n)), e.then(t, t));
  }
  function vy(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Pt === t &&
        (Rt & n) === n &&
        (fe === 4 || (fe === 3 && (Rt & 62914560) === Rt && 300 > ze() - Co) ? (Lt & 2) === 0 && Pl(t, 0) : (cc |= n),
        Wl === Rt && (Wl = 0)),
      $n(t));
  }
  function Wp(t, e) {
    (e === 0 && (e = Vf()), (t = Wa(t, e)), t !== null && (Ti(t, e), $n(t)));
  }
  function by(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Wp(t, n));
  }
  function Sy(t, e) {
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
    (l !== null && l.delete(e), Wp(t, n));
  }
  function xy(t, e) {
    return Xe(t, e);
  }
  var Ro = null,
    ti = null,
    vc = !1,
    _o = !1,
    bc = !1,
    Ha = 0;
  function $n(t) {
    (t !== ti && t.next === null && (ti === null ? (Ro = ti = t) : (ti = ti.next = t)),
      (_o = !0),
      vc || ((vc = !0), Ty()));
  }
  function ar(t, e) {
    if (!bc && _o) {
      bc = !0;
      do
        for (var n = !1, l = Ro; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var d = l.suspendedLanes,
                h = l.pingedLanes;
              ((s = (1 << (31 - $e(42 | t) + 1)) - 1),
                (s &= r & ~(d & ~h)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((n = !0), th(l, s));
          } else
            ((s = Rt),
              (s = ba(l, l === Pt ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
              (s & 3) === 0 || Ln(l, s) || ((n = !0), th(l, s)));
          l = l.next;
        }
      while (n);
      bc = !1;
    }
  }
  function Cy() {
    Fp();
  }
  function Fp() {
    _o = vc = !1;
    var t = 0;
    Ha !== 0 && By() && (t = Ha);
    for (var e = ze(), n = null, l = Ro; l !== null; ) {
      var r = l.next,
        s = Pp(l, e);
      (s === 0
        ? ((l.next = null), n === null ? (Ro = r) : (n.next = r), r === null && (ti = n))
        : ((n = l), (t !== 0 || (s & 3) !== 0) && (_o = !0)),
        (l = r));
    }
    ((Te !== 0 && Te !== 5) || ar(t), Ha !== 0 && (Ha = 0));
  }
  function Pp(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - $e(s),
        h = 1 << d,
        x = r[d];
      (x === -1 ? ((h & n) === 0 || (h & l) !== 0) && (r[d] = wn(h, e)) : x <= e && (t.expiredLanes |= h), (s &= ~h));
    }
    if (
      ((e = Pt),
      (n = Rt),
      (n = ba(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      n === 0 || (t === e && (Vt === 2 || Vt === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Hn(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || Ln(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Hn(l), ju(n))) {
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
      return ((l = Ip.bind(null, t)), (n = Xe(n, l)), (t.callbackPriority = e), (t.callbackNode = n), e);
    }
    return (l !== null && l !== null && Hn(l), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function Ip(t, e) {
    if (Te !== 0 && Te !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Oo() && t.callbackNode !== n) return null;
    var l = Rt;
    return (
      (l = ba(t, t === Pt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (jp(t, l, e), Pp(t, ze()), t.callbackNode != null && t.callbackNode === n ? Ip.bind(null, t) : null)
    );
  }
  function th(t, e) {
    if (Oo()) return null;
    jp(t, e, !0);
  }
  function Ty() {
    Ny(function () {
      (Lt & 6) !== 0 ? Xe(nt, Cy) : Fp();
    });
  }
  function Sc() {
    if (Ha === 0) {
      var t = kl;
      (t === 0 && ((t = va), (va <<= 1), (va & 261888) === 0 && (va = 256)), (Ha = t));
    }
    return Ha;
  }
  function eh(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null : typeof t == 'function' ? t : Hr('' + t);
  }
  function nh(t, e) {
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
  function Ey(t, e, n, l, r) {
    if (e === 'submit' && n && n.stateNode === r) {
      var s = eh((r[Ke] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[Ke] || null) ? eh(e.formAction) : d.getAttribute('formAction')),
        e !== null && ((s = e), (d = null)));
      var h = new qr('action', 'action', null, l, r);
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ha !== 0) {
                  var x = d ? nh(r, d) : new FormData(r);
                  Ys(n, { pending: !0, data: x, method: r.method, action: s }, null, x);
                }
              } else
                typeof s == 'function' &&
                  (h.preventDefault(),
                  (x = d ? nh(r, d) : new FormData(r)),
                  Ys(n, { pending: !0, data: x, method: r.method, action: s }, s, x));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var xc = 0; xc < as.length; xc++) {
    var Cc = as[xc],
      Ay = Cc.toLowerCase(),
      zy = Cc[0].toUpperCase() + Cc.slice(1);
    Dn(Ay, 'on' + zy);
  }
  (Dn(Bd, 'onAnimationEnd'),
    Dn(jd, 'onAnimationIteration'),
    Dn(Nd, 'onAnimationStart'),
    Dn('dblclick', 'onDoubleClick'),
    Dn('focusin', 'onFocus'),
    Dn('focusout', 'onBlur'),
    Dn($1, 'onTransitionRun'),
    Dn(G1, 'onTransitionStart'),
    Dn(V1, 'onTransitionCancel'),
    Dn(Ud, 'onTransitionEnd'),
    Al('onMouseEnter', ['mouseout', 'mouseover']),
    Al('onMouseLeave', ['mouseout', 'mouseover']),
    Al('onPointerEnter', ['pointerout', 'pointerover']),
    Al('onPointerLeave', ['pointerout', 'pointerover']),
    Qa('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Qa('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Qa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Qa('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Qa('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Qa('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
  var lr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    My = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(lr));
  function ah(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        r = l.event;
      l = l.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var h = l[d],
              x = h.instance,
              w = h.currentTarget;
            if (((h = h.listener), x !== s && r.isPropagationStopped())) break t;
            ((s = h), (r.currentTarget = w));
            try {
              s(r);
            } catch (k) {
              Vr(k);
            }
            ((r.currentTarget = null), (s = x));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((h = l[d]),
              (x = h.instance),
              (w = h.currentTarget),
              (h = h.listener),
              x !== s && r.isPropagationStopped())
            )
              break t;
            ((s = h), (r.currentTarget = w));
            try {
              s(r);
            } catch (k) {
              Vr(k);
            }
            ((r.currentTarget = null), (s = x));
          }
      }
    }
  }
  function Mt(t, e) {
    var n = e[Nu];
    n === void 0 && (n = e[Nu] = new Set());
    var l = t + '__bubble';
    n.has(l) || (lh(e, t, 2, !1), n.add(l));
  }
  function Tc(t, e, n) {
    var l = 0;
    (e && (l |= 4), lh(n, t, l, e));
  }
  var wo = '_reactListening' + Math.random().toString(36).slice(2);
  function Ec(t) {
    if (!t[wo]) {
      ((t[wo] = !0),
        Ff.forEach(function (n) {
          n !== 'selectionchange' && (My.has(n) || Tc(n, !1, t), Tc(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[wo] || ((e[wo] = !0), Tc('selectionchange', !1, e));
    }
  }
  function lh(t, e, n, l) {
    switch (Bh(e)) {
      case 2:
        var r = ev;
        break;
      case 8:
        r = nv;
        break;
      default:
        r = kc;
    }
    ((n = r.bind(null, e, n, t)),
      (r = void 0),
      !Vu || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1));
  }
  function Ac(t, e, n, l, r) {
    var s = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var h = l.stateNode.containerInfo;
          if (h === r) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === r) return;
              d = d.return;
            }
          for (; h !== null; ) {
            if (((d = Cl(h)), d === null)) return;
            if (((x = d.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              l = s = d;
              continue t;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    sd(function () {
      var w = s,
        k = $u(n),
        X = [];
      t: {
        var D = Hd.get(t);
        if (D !== void 0) {
          var j = qr,
            lt = t;
          switch (t) {
            case 'keypress':
              if (kr(n) === 0) break t;
            case 'keydown':
            case 'keyup':
              j = S1;
              break;
            case 'focusin':
              ((lt = 'focus'), (j = Ku));
              break;
            case 'focusout':
              ((lt = 'blur'), (j = Ku));
              break;
            case 'beforeblur':
            case 'afterblur':
              j = Ku;
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
              j = dd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              j = u1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              j = T1;
              break;
            case Bd:
            case jd:
            case Nd:
              j = f1;
              break;
            case Ud:
              j = A1;
              break;
            case 'scroll':
            case 'scrollend':
              j = r1;
              break;
            case 'wheel':
              j = M1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              j = p1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              j = hd;
              break;
            case 'toggle':
            case 'beforetoggle':
              j = R1;
          }
          var dt = (e & 4) !== 0,
            Wt = !dt && (t === 'scroll' || t === 'scrollend'),
            z = dt ? (D !== null ? D + 'Capture' : null) : D;
          dt = [];
          for (var T = w, _; T !== null; ) {
            var q = T;
            if (
              ((_ = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                _ === null ||
                z === null ||
                ((q = zi(T, z)), q != null && dt.push(ir(T, q, _))),
              Wt)
            )
              break;
            T = T.return;
          }
          0 < dt.length && ((D = new j(D, lt, null, n, k)), X.push({ event: D, listeners: dt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === 'mouseover' || t === 'pointerover'),
            (j = t === 'mouseout' || t === 'pointerout'),
            D && n !== qu && (lt = n.relatedTarget || n.fromElement) && (Cl(lt) || lt[xl]))
          )
            break t;
          if (
            (j || D) &&
            ((D = k.window === k ? k : (D = k.ownerDocument) ? D.defaultView || D.parentWindow : window),
            j
              ? ((lt = n.relatedTarget || n.toElement),
                (j = w),
                (lt = lt ? Cl(lt) : null),
                lt !== null &&
                  ((Wt = f(lt)), (dt = lt.tag), lt !== Wt || (dt !== 5 && dt !== 27 && dt !== 6)) &&
                  (lt = null))
              : ((j = null), (lt = w)),
            j !== lt)
          ) {
            if (
              ((dt = dd),
              (q = 'onMouseLeave'),
              (z = 'onMouseEnter'),
              (T = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((dt = hd), (q = 'onPointerLeave'), (z = 'onPointerEnter'), (T = 'pointer')),
              (Wt = j == null ? D : Ai(j)),
              (_ = lt == null ? D : Ai(lt)),
              (D = new dt(q, T + 'leave', j, n, k)),
              (D.target = Wt),
              (D.relatedTarget = _),
              (q = null),
              Cl(k) === w &&
                ((dt = new dt(z, T + 'enter', lt, n, k)), (dt.target = _), (dt.relatedTarget = Wt), (q = dt)),
              (Wt = q),
              j && lt)
            )
              e: {
                for (dt = Oy, z = j, T = lt, _ = 0, q = z; q; q = dt(q)) _++;
                q = 0;
                for (var ct = T; ct; ct = dt(ct)) q++;
                for (; 0 < _ - q; ) ((z = dt(z)), _--);
                for (; 0 < q - _; ) ((T = dt(T)), q--);
                for (; _--; ) {
                  if (z === T || (T !== null && z === T.alternate)) {
                    dt = z;
                    break e;
                  }
                  ((z = dt(z)), (T = dt(T)));
                }
                dt = null;
              }
            else dt = null;
            (j !== null && ih(X, D, j, dt, !1), lt !== null && Wt !== null && ih(X, Wt, lt, dt, !0));
          }
        }
        t: {
          if (
            ((D = w ? Ai(w) : window),
            (j = D.nodeName && D.nodeName.toLowerCase()),
            j === 'select' || (j === 'input' && D.type === 'file'))
          )
            var Ut = Cd;
          else if (Sd(D))
            if (Td) Ut = k1;
            else {
              Ut = H1;
              var rt = U1;
            }
          else
            ((j = D.nodeName),
              !j || j.toLowerCase() !== 'input' || (D.type !== 'checkbox' && D.type !== 'radio')
                ? w && Yu(w.elementType) && (Ut = Cd)
                : (Ut = L1));
          if (Ut && (Ut = Ut(t, w))) {
            xd(X, Ut, n, k);
            break t;
          }
          (rt && rt(t, D, w),
            t === 'focusout' && w && D.type === 'number' && w.memoizedProps.value != null && ku(D, 'number', D.value));
        }
        switch (((rt = w ? Ai(w) : window), t)) {
          case 'focusin':
            (Sd(rt) || rt.contentEditable === 'true') && ((wl = rt), (ts = w), (ji = null));
            break;
          case 'focusout':
            ji = ts = wl = null;
            break;
          case 'mousedown':
            es = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((es = !1), wd(X, n, k));
            break;
          case 'selectionchange':
            if (q1) break;
          case 'keydown':
          case 'keyup':
            wd(X, n, k);
        }
        var Ct;
        if (Wu)
          t: {
            switch (t) {
              case 'compositionstart':
                var _t = 'onCompositionStart';
                break t;
              case 'compositionend':
                _t = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                _t = 'onCompositionUpdate';
                break t;
            }
            _t = void 0;
          }
        else
          _l
            ? vd(t, n) && (_t = 'onCompositionEnd')
            : t === 'keydown' && n.keyCode === 229 && (_t = 'onCompositionStart');
        (_t &&
          (md &&
            n.locale !== 'ko' &&
            (_l || _t !== 'onCompositionStart'
              ? _t === 'onCompositionEnd' && _l && (Ct = cd())
              : ((xa = k), (Xu = 'value' in xa ? xa.value : xa.textContent), (_l = !0))),
          (rt = Do(w, _t)),
          0 < rt.length &&
            ((_t = new pd(_t, t, null, n, k)),
            X.push({ event: _t, listeners: rt }),
            Ct ? (_t.data = Ct) : ((Ct = bd(n)), Ct !== null && (_t.data = Ct)))),
          (Ct = w1 ? D1(t, n) : B1(t, n)) &&
            ((_t = Do(w, 'onBeforeInput')),
            0 < _t.length &&
              ((rt = new pd('onBeforeInput', 'beforeinput', null, n, k)),
              X.push({ event: rt, listeners: _t }),
              (rt.data = Ct))),
          Ey(X, t, w, n, k));
      }
      ah(X, e);
    });
  }
  function ir(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Do(t, e) {
    for (var n = e + 'Capture', l = []; t !== null; ) {
      var r = t,
        s = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          s === null ||
          ((r = zi(t, n)), r != null && l.unshift(ir(t, r, s)), (r = zi(t, e)), r != null && l.push(ir(t, r, s))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Oy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ih(t, e, n, l, r) {
    for (var s = e._reactName, d = []; n !== null && n !== l; ) {
      var h = n,
        x = h.alternate,
        w = h.stateNode;
      if (((h = h.tag), x !== null && x === l)) break;
      ((h !== 5 && h !== 26 && h !== 27) ||
        w === null ||
        ((x = w),
        r
          ? ((w = zi(n, s)), w != null && d.unshift(ir(n, w, x)))
          : r || ((w = zi(n, s)), w != null && d.push(ir(n, w, x)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var Ry = /\r\n?/g,
    _y = /\u0000|\uFFFD/g;
  function rh(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Ry,
        `
`
      )
      .replace(_y, '');
  }
  function oh(t, e) {
    return ((e = rh(e)), rh(t) === e);
  }
  function Jt(t, e, n, l, r, s) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? e === 'body' || (e === 'textarea' && l === '') || Ml(t, l)
          : (typeof l == 'number' || typeof l == 'bigint') && e !== 'body' && Ml(t, '' + l);
        break;
      case 'className':
        Nr(t, 'class', l);
        break;
      case 'tabIndex':
        Nr(t, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Nr(t, n, l);
        break;
      case 'style':
        od(t, l, s);
        break;
      case 'data':
        if (e !== 'object') {
          Nr(t, 'data', l);
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
        ((l = Hr('' + l)), t.setAttribute(n, l));
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
        ((l = Hr('' + l)), t.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (t.onclick = Wn);
        break;
      case 'onScroll':
        l != null && Mt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Mt('scrollend', t);
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
        ((n = Hr('' + l)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Mt('beforetoggle', t), Mt('toggle', t), jr(t, 'popover', l));
        break;
      case 'xlinkActuate':
        Jn(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Jn(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Jn(t, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Jn(t, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Jn(t, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Jn(t, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Jn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Jn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Jn(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        jr(t, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = l1.get(n) || n), jr(t, n, l));
    }
  }
  function zc(t, e, n, l, r, s) {
    switch (n) {
      case 'style':
        od(t, l, s);
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
        typeof l == 'string' ? Ml(t, l) : (typeof l == 'number' || typeof l == 'bigint') && Ml(t, '' + l);
        break;
      case 'onScroll':
        l != null && Mt('scroll', t);
        break;
      case 'onScrollEnd':
        l != null && Mt('scrollend', t);
        break;
      case 'onClick':
        l != null && (t.onclick = Wn);
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
        if (!Pf.hasOwnProperty(n))
          t: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((r = n.endsWith('Capture')),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (s = t[Ke] || null),
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
            n in t ? (t[n] = l) : l === !0 ? t.setAttribute(n, '') : jr(t, n, l);
          }
    }
  }
  function Be(t, e, n) {
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
                  throw Error(o(137, e));
                default:
                  Jt(t, e, s, d, n, null);
              }
          }
        (r && Jt(t, e, 'srcSet', n.srcSet, n, null), l && Jt(t, e, 'src', n.src, n, null));
        return;
      case 'input':
        Mt('invalid', t);
        var h = (s = d = r = null),
          x = null,
          w = null;
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
                  w = k;
                  break;
                case 'value':
                  s = k;
                  break;
                case 'defaultValue':
                  h = k;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (k != null) throw Error(o(137, e));
                  break;
                default:
                  Jt(t, e, l, k, n, null);
              }
          }
        ad(t, s, h, x, w, d, r, !1);
        return;
      case 'select':
        (Mt('invalid', t), (l = d = s = null));
        for (r in n)
          if (n.hasOwnProperty(r) && ((h = n[r]), h != null))
            switch (r) {
              case 'value':
                s = h;
                break;
              case 'defaultValue':
                d = h;
                break;
              case 'multiple':
                l = h;
              default:
                Jt(t, e, r, h, n, null);
            }
        ((e = s), (n = d), (t.multiple = !!l), e != null ? zl(t, !!l, e, !1) : n != null && zl(t, !!l, n, !0));
        return;
      case 'textarea':
        (Mt('invalid', t), (s = r = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((h = n[d]), h != null))
            switch (d) {
              case 'value':
                l = h;
                break;
              case 'defaultValue':
                r = h;
                break;
              case 'children':
                s = h;
                break;
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(o(91));
                break;
              default:
                Jt(t, e, d, h, n, null);
            }
        id(t, l, r, s);
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
        (Mt('beforetoggle', t), Mt('toggle', t), Mt('cancel', t), Mt('close', t));
        break;
      case 'iframe':
      case 'object':
        Mt('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < lr.length; l++) Mt(lr[l], t);
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
        for (w in n)
          if (n.hasOwnProperty(w) && ((l = n[w]), l != null))
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, e));
              default:
                Jt(t, e, w, l, n, null);
            }
        return;
      default:
        if (Yu(e)) {
          for (k in n) n.hasOwnProperty(k) && ((l = n[k]), l !== void 0 && zc(t, e, k, l, n, void 0));
          return;
        }
    }
    for (h in n) n.hasOwnProperty(h) && ((l = n[h]), l != null && Jt(t, e, h, l, n, null));
  }
  function wy(t, e, n, l) {
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
          h = null,
          x = null,
          w = null,
          k = null;
        for (j in n) {
          var X = n[j];
          if (n.hasOwnProperty(j) && X != null)
            switch (j) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                x = X;
              default:
                l.hasOwnProperty(j) || Jt(t, e, j, null, l, X);
            }
        }
        for (var D in l) {
          var j = l[D];
          if (((X = n[D]), l.hasOwnProperty(D) && (j != null || X != null)))
            switch (D) {
              case 'type':
                s = j;
                break;
              case 'name':
                r = j;
                break;
              case 'checked':
                w = j;
                break;
              case 'defaultChecked':
                k = j;
                break;
              case 'value':
                d = j;
                break;
              case 'defaultValue':
                h = j;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (j != null) throw Error(o(137, e));
                break;
              default:
                j !== X && Jt(t, e, D, j, l, X);
            }
        }
        Lu(t, d, h, x, w, k, s, r);
        return;
      case 'select':
        j = d = h = D = null;
        for (s in n)
          if (((x = n[s]), n.hasOwnProperty(s) && x != null))
            switch (s) {
              case 'value':
                break;
              case 'multiple':
                j = x;
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
                h = s;
                break;
              case 'multiple':
                d = s;
              default:
                s !== x && Jt(t, e, r, s, l, x);
            }
        ((e = h),
          (n = d),
          (l = j),
          D != null ? zl(t, !!n, D, !1) : !!l != !!n && (e != null ? zl(t, !!n, e, !0) : zl(t, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        j = D = null;
        for (h in n)
          if (((r = n[h]), n.hasOwnProperty(h) && r != null && !l.hasOwnProperty(h)))
            switch (h) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Jt(t, e, h, null, l, r);
            }
        for (d in l)
          if (((r = l[d]), (s = n[d]), l.hasOwnProperty(d) && (r != null || s != null)))
            switch (d) {
              case 'value':
                D = r;
                break;
              case 'defaultValue':
                j = r;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== s && Jt(t, e, d, r, l, s);
            }
        ld(t, D, j);
        return;
      case 'option':
        for (var lt in n)
          if (((D = n[lt]), n.hasOwnProperty(lt) && D != null && !l.hasOwnProperty(lt)))
            switch (lt) {
              case 'selected':
                t.selected = !1;
                break;
              default:
                Jt(t, e, lt, null, l, D);
            }
        for (x in l)
          if (((D = l[x]), (j = n[x]), l.hasOwnProperty(x) && D !== j && (D != null || j != null)))
            switch (x) {
              case 'selected':
                t.selected = D && typeof D != 'function' && typeof D != 'symbol';
                break;
              default:
                Jt(t, e, x, D, l, j);
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
        for (var dt in n)
          ((D = n[dt]), n.hasOwnProperty(dt) && D != null && !l.hasOwnProperty(dt) && Jt(t, e, dt, null, l, D));
        for (w in l)
          if (((D = l[w]), (j = n[w]), l.hasOwnProperty(w) && D !== j && (D != null || j != null)))
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (D != null) throw Error(o(137, e));
                break;
              default:
                Jt(t, e, w, D, l, j);
            }
        return;
      default:
        if (Yu(e)) {
          for (var Wt in n)
            ((D = n[Wt]), n.hasOwnProperty(Wt) && D !== void 0 && !l.hasOwnProperty(Wt) && zc(t, e, Wt, void 0, l, D));
          for (k in l)
            ((D = l[k]),
              (j = n[k]),
              !l.hasOwnProperty(k) || D === j || (D === void 0 && j === void 0) || zc(t, e, k, D, l, j));
          return;
        }
    }
    for (var z in n) ((D = n[z]), n.hasOwnProperty(z) && D != null && !l.hasOwnProperty(z) && Jt(t, e, z, null, l, D));
    for (X in l)
      ((D = l[X]), (j = n[X]), !l.hasOwnProperty(X) || D === j || (D == null && j == null) || Jt(t, e, X, D, l, j));
  }
  function uh(t) {
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
  function Dy() {
    if (typeof performance.getEntriesByType == 'function') {
      for (var t = 0, e = 0, n = performance.getEntriesByType('resource'), l = 0; l < n.length; l++) {
        var r = n[l],
          s = r.transferSize,
          d = r.initiatorType,
          h = r.duration;
        if (s && h && uh(d)) {
          for (d = 0, h = r.responseEnd, l += 1; l < n.length; l++) {
            var x = n[l],
              w = x.startTime;
            if (w > h) break;
            var k = x.transferSize,
              X = x.initiatorType;
            k && uh(X) && ((x = x.responseEnd), (d += k * (x < h ? 1 : (h - w) / (x - w))));
          }
          if ((--l, (e += (8 * (s + d)) / (r.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number') ? t : 5;
  }
  var Mc = null,
    Oc = null;
  function Bo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sh(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function ch(t, e) {
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
  function Rc(t, e) {
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
  function By() {
    var t = window.event;
    return t && t.type === 'popstate' ? (t === _c ? !1 : ((_c = t), !0)) : ((_c = null), !1);
  }
  var fh = typeof setTimeout == 'function' ? setTimeout : void 0,
    jy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    dh = typeof Promise == 'function' ? Promise : void 0,
    Ny =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof dh < 'u'
          ? function (t) {
              return dh.resolve(null).then(t).catch(Uy);
            }
          : fh;
  function Uy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function La(t) {
    return t === 'head';
  }
  function ph(t, e) {
    var n = e,
      l = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (t.removeChild(r), li(e));
            return;
          }
          l--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') l++;
        else if (n === 'html') rr(t.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = t.ownerDocument.head), rr(n));
          for (var s = n.firstChild; s; ) {
            var d = s.nextSibling,
              h = s.nodeName;
            (s[Ei] ||
              h === 'SCRIPT' ||
              h === 'STYLE' ||
              (h === 'LINK' && s.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(s),
              (s = d));
          }
        } else n === 'body' && rr(t.ownerDocument.body);
      n = r;
    } while (n);
    li(e);
  }
  function hh(t, e) {
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
  function wc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (wc(n), Uu(n));
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
  function Hy(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (l) {
        if (!t[Ei])
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
      if (((t = Tn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ly(t, e, n) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !n) ||
        ((t = Tn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function mh(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
        ((t = Tn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Dc(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function Bc(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading');
  }
  function ky(t, e) {
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
  function Tn(t) {
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
  var jc = null;
  function gh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === '/$' || n === '/&') {
          if (e === 0) return Tn(t.nextSibling);
          e--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function yh(t) {
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
  function vh(t, e, n) {
    switch (((e = Bo(n)), t)) {
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
  function rr(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Uu(t);
  }
  var En = new Map(),
    bh = new Set();
  function jo(t) {
    return typeof t.getRootNode == 'function' ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var da = K.d;
  K.d = { f: Yy, r: qy, D: $y, C: Gy, L: Vy, m: Xy, X: Zy, S: Qy, M: Ky };
  function Yy() {
    var t = da.f(),
      e = Ao();
    return t || e;
  }
  function qy(t) {
    var e = Tl(t);
    e !== null && e.tag === 5 && e.type === 'form' ? U0(e) : da.r(t);
  }
  var ei = typeof document > 'u' ? null : document;
  function Sh(t, e, n) {
    var l = ei;
    if (l && typeof e == 'string' && e) {
      var r = gn(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == 'string' && (r += '[crossorigin="' + n + '"]'),
        bh.has(r) ||
          (bh.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement('link')), Be(e, 'link', t), Me(e), l.head.appendChild(e))));
    }
  }
  function $y(t) {
    (da.D(t), Sh('dns-prefetch', t, null));
  }
  function Gy(t, e) {
    (da.C(t, e), Sh('preconnect', t, e));
  }
  function Vy(t, e, n) {
    da.L(t, e, n);
    var l = ei;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + gn(e) + '"]';
      e === 'image' && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + gn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (r += '[imagesizes="' + gn(n.imageSizes) + '"]'))
        : (r += '[href="' + gn(t) + '"]');
      var s = r;
      switch (e) {
        case 'style':
          s = ni(t);
          break;
        case 'script':
          s = ai(t);
      }
      En.has(s) ||
        ((t = C({ rel: 'preload', href: e === 'image' && n && n.imageSrcSet ? void 0 : t, as: e }, n)),
        En.set(s, t),
        l.querySelector(r) !== null ||
          (e === 'style' && l.querySelector(or(s))) ||
          (e === 'script' && l.querySelector(ur(s))) ||
          ((e = l.createElement('link')), Be(e, 'link', t), Me(e), l.head.appendChild(e)));
    }
  }
  function Xy(t, e) {
    da.m(t, e);
    var n = ei;
    if (n && t) {
      var l = e && typeof e.as == 'string' ? e.as : 'script',
        r = 'link[rel="modulepreload"][as="' + gn(l) + '"][href="' + gn(t) + '"]',
        s = r;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          s = ai(t);
      }
      if (!En.has(s) && ((t = C({ rel: 'modulepreload', href: t }, e)), En.set(s, t), n.querySelector(r) === null)) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(ur(s))) return;
        }
        ((l = n.createElement('link')), Be(l, 'link', t), Me(l), n.head.appendChild(l));
      }
    }
  }
  function Qy(t, e, n) {
    da.S(t, e, n);
    var l = ei;
    if (l && t) {
      var r = El(l).hoistableStyles,
        s = ni(t);
      e = e || 'default';
      var d = r.get(s);
      if (!d) {
        var h = { loading: 0, preload: null };
        if ((d = l.querySelector(or(s)))) h.loading = 5;
        else {
          ((t = C({ rel: 'stylesheet', href: t, 'data-precedence': e }, n)), (n = En.get(s)) && Nc(t, n));
          var x = (d = l.createElement('link'));
          (Me(x),
            Be(x, 'link', t),
            (x._p = new Promise(function (w, k) {
              ((x.onload = w), (x.onerror = k));
            })),
            x.addEventListener('load', function () {
              h.loading |= 1;
            }),
            x.addEventListener('error', function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            No(d, e, l));
        }
        ((d = { type: 'stylesheet', instance: d, count: 1, state: h }), r.set(s, d));
      }
    }
  }
  function Zy(t, e) {
    da.X(t, e);
    var n = ei;
    if (n && t) {
      var l = El(n).hoistableScripts,
        r = ai(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(ur(r))),
        s ||
          ((t = C({ src: t, async: !0 }, e)),
          (e = En.get(r)) && Uc(t, e),
          (s = n.createElement('script')),
          Me(s),
          Be(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function Ky(t, e) {
    da.M(t, e);
    var n = ei;
    if (n && t) {
      var l = El(n).hoistableScripts,
        r = ai(t),
        s = l.get(r);
      s ||
        ((s = n.querySelector(ur(r))),
        s ||
          ((t = C({ src: t, async: !0, type: 'module' }, e)),
          (e = En.get(r)) && Uc(t, e),
          (s = n.createElement('script')),
          Me(s),
          Be(s, 'link', t),
          n.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(r, s));
    }
  }
  function xh(t, e, n, l) {
    var r = (r = ht.current) ? jo(r) : null;
    if (!r) throw Error(o(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((e = ni(n.href)),
            (n = El(r).hoistableStyles),
            (l = n.get(e)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(e, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
          t = ni(n.href);
          var s = El(r).hoistableStyles,
            d = s.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              s.set(t, d),
              (s = r.querySelector(or(t))) && !s._p && ((d.instance = s), (d.state.loading = 5)),
              En.has(t) ||
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
                En.set(t, n),
                s || Jy(r, t, n, d.state))),
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
            ? ((e = ai(n)),
              (n = El(r).hoistableScripts),
              (l = n.get(e)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(e, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function ni(t) {
    return 'href="' + gn(t) + '"';
  }
  function or(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Ch(t) {
    return C({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Jy(t, e, n, l) {
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
        Be(e, 'link', n),
        Me(e),
        t.head.appendChild(e));
  }
  function ai(t) {
    return '[src="' + gn(t) + '"]';
  }
  function ur(t) {
    return 'script[async]' + t;
  }
  function Th(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var l = t.querySelector('style[data-href~="' + gn(n.href) + '"]');
          if (l) return ((e.instance = l), Me(l), l);
          var r = C({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (t.ownerDocument || t).createElement('style')),
            Me(l),
            Be(l, 'style', r),
            No(l, n.precedence, t),
            (e.instance = l)
          );
        case 'stylesheet':
          r = ni(n.href);
          var s = t.querySelector(or(r));
          if (s) return ((e.state.loading |= 4), (e.instance = s), Me(s), s);
          ((l = Ch(n)), (r = En.get(r)) && Nc(l, r), (s = (t.ownerDocument || t).createElement('link')), Me(s));
          var d = s;
          return (
            (d._p = new Promise(function (h, x) {
              ((d.onload = h), (d.onerror = x));
            })),
            Be(s, 'link', l),
            (e.state.loading |= 4),
            No(s, n.precedence, t),
            (e.instance = s)
          );
        case 'script':
          return (
            (s = ai(n.src)),
            (r = t.querySelector(ur(s)))
              ? ((e.instance = r), Me(r), r)
              : ((l = n),
                (r = En.get(s)) && ((l = C({}, n)), Uc(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement('script')),
                Me(r),
                Be(r, 'link', l),
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
        ((l = e.instance), (e.state.loading |= 4), No(l, n.precedence, t));
    return e.instance;
  }
  function No(t, e, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        r = l.length ? l[l.length - 1] : null,
        s = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var h = l[d];
      if (h.dataset.precedence === e) s = h;
      else if (s !== r) break;
    }
    s
      ? s.parentNode.insertBefore(t, s.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Nc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Uc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Uo = null;
  function Eh(t, e, n) {
    if (Uo === null) {
      var l = new Map(),
        r = (Uo = new Map());
      r.set(n, l);
    } else ((r = Uo), (l = r.get(n)), l || ((l = new Map()), r.set(n, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var s = n[r];
      if (
        !(s[Ei] || s[Re] || (t === 'link' && s.getAttribute('rel') === 'stylesheet')) &&
        s.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var d = s.getAttribute(e) || '';
        d = t + d;
        var h = l.get(d);
        h ? h.push(s) : l.set(d, [s]);
      }
    }
    return l;
  }
  function Ah(t, e, n) {
    ((t = t.ownerDocument || t), t.head.insertBefore(n, e === 'title' ? t.querySelector('head > title') : null));
  }
  function Wy(t, e, n) {
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
  function zh(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function Fy(t, e, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var r = ni(l.href),
          s = e.querySelector(or(r));
        if (s) {
          ((e = s._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = Ho.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = s),
            Me(s));
          return;
        }
        ((s = e.ownerDocument || e), (l = Ch(l)), (r = En.get(r)) && Nc(l, r), (s = s.createElement('link')), Me(s));
        var d = s;
        ((d._p = new Promise(function (h, x) {
          ((d.onload = h), (d.onerror = x));
        })),
          Be(s, 'link', l),
          (n.instance = s));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++, (n = Ho.bind(t)), e.addEventListener('load', n), e.addEventListener('error', n)));
    }
  }
  var Hc = 0;
  function Py(t, e) {
    return (
      t.stylesheets && t.count === 0 && ko(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && ko(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                ((t.unsuspend = null), s());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Hc === 0 && (Hc = 62500 * Dy());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1), t.count === 0 && (t.stylesheets && ko(t, t.stylesheets), t.unsuspend))
                ) {
                  var s = t.unsuspend;
                  ((t.unsuspend = null), s());
                }
              },
              (t.imgBytes > Hc ? 50 : 800) + e
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
  function Ho() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) ko(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Lo = null;
  function ko(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null && (t.count++, (Lo = new Map()), e.forEach(Iy, t), (Lo = null), Ho.call(t)));
  }
  function Iy(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Lo.get(t);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Lo.set(t, n));
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
        (l = Ho.bind(this)),
        r.addEventListener('load', l),
        r.addEventListener('error', l),
        s
          ? s.parentNode.insertBefore(r, s.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var sr = { $$typeof: J, Provider: null, Consumer: null, _currentValue: I, _currentValue2: I, _threadCount: 0 };
  function tv(t, e, n, l, r, s, d, h, x) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Du(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Du(0)),
      (this.hiddenUpdates = Du(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = s),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map()));
  }
  function Mh(t, e, n, l, r, s, d, h, x, w, k, X) {
    return (
      (t = new tv(t, e, n, d, x, w, k, X, h)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = ln(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (e = gs()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: l, isDehydrated: n, cache: e }),
      Ss(s),
      t
    );
  }
  function Oh(t) {
    return t ? ((t = jl), t) : jl;
  }
  function Rh(t, e, n, l, r, s) {
    ((r = Oh(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Ma(e)),
      (l.payload = { element: n }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (n = Oa(t, l, e)),
      n !== null && (tn(n, t, e), qi(n, t, e)));
  }
  function _h(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Lc(t, e) {
    (_h(t, e), (t = t.alternate) && _h(t, e));
  }
  function wh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Wa(t, 67108864);
      (e !== null && tn(e, t, 67108864), Lc(t, 67108864));
    }
  }
  function Dh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = cn();
      e = Bu(e);
      var n = Wa(t, e);
      (n !== null && tn(n, t, e), Lc(t, e));
    }
  }
  var Yo = !0;
  function ev(t, e, n, l) {
    var r = A.T;
    A.T = null;
    var s = K.p;
    try {
      ((K.p = 2), kc(t, e, n, l));
    } finally {
      ((K.p = s), (A.T = r));
    }
  }
  function nv(t, e, n, l) {
    var r = A.T;
    A.T = null;
    var s = K.p;
    try {
      ((K.p = 8), kc(t, e, n, l));
    } finally {
      ((K.p = s), (A.T = r));
    }
  }
  function kc(t, e, n, l) {
    if (Yo) {
      var r = Yc(l);
      if (r === null) (Ac(t, e, l, qo, n), jh(t, l));
      else if (lv(r, t, e, n, l)) l.stopPropagation();
      else if ((jh(t, l), e & 4 && -1 < av.indexOf(t))) {
        for (; r !== null; ) {
          var s = Tl(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var d = ee(s.pendingLanes);
                  if (d !== 0) {
                    var h = s;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                      var x = 1 << (31 - $e(d));
                      ((h.entanglements[1] |= x), (d &= ~x));
                    }
                    ($n(s), (Lt & 6) === 0 && ((To = ze() + 500), ar(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((h = Wa(s, 2)), h !== null && tn(h, s, 2), Ao(), Lc(s, 2));
            }
          if (((s = Yc(l)), s === null && Ac(t, e, l, qo, n), s === r)) break;
          r = s;
        }
        r !== null && l.stopPropagation();
      } else Ac(t, e, l, null, n);
    }
  }
  function Yc(t) {
    return ((t = $u(t)), qc(t));
  }
  var qo = null;
  function qc(t) {
    if (((qo = null), (t = Cl(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((qo = t), null);
  }
  function Bh(t) {
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
        switch (at()) {
          case nt:
            return 2;
          case xt:
            return 8;
          case At:
          case wt:
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
  var $c = !1,
    ka = null,
    Ya = null,
    qa = null,
    cr = new Map(),
    fr = new Map(),
    $a = [],
    av =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function jh(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        ka = null;
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
        cr.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        fr.delete(e.pointerId);
    }
  }
  function dr(t, e, n, l, r, s) {
    return t === null || t.nativeEvent !== s
      ? ((t = { blockedOn: e, domEventName: n, eventSystemFlags: l, nativeEvent: s, targetContainers: [r] }),
        e !== null && ((e = Tl(e)), e !== null && wh(e)),
        t)
      : ((t.eventSystemFlags |= l), (e = t.targetContainers), r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function lv(t, e, n, l, r) {
    switch (e) {
      case 'focusin':
        return ((ka = dr(ka, t, e, n, l, r)), !0);
      case 'dragenter':
        return ((Ya = dr(Ya, t, e, n, l, r)), !0);
      case 'mouseover':
        return ((qa = dr(qa, t, e, n, l, r)), !0);
      case 'pointerover':
        var s = r.pointerId;
        return (cr.set(s, dr(cr.get(s) || null, t, e, n, l, r)), !0);
      case 'gotpointercapture':
        return ((s = r.pointerId), fr.set(s, dr(fr.get(s) || null, t, e, n, l, r)), !0);
    }
    return !1;
  }
  function Nh(t) {
    var e = Cl(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              Jf(t.priority, function () {
                Dh(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            ((t.blockedOn = e),
              Jf(t.priority, function () {
                Dh(n);
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
  function $o(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Yc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((qu = l), n.target.dispatchEvent(l), (qu = null));
      } else return ((e = Tl(n)), e !== null && wh(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Uh(t, e, n) {
    $o(t) && n.delete(e);
  }
  function iv() {
    (($c = !1),
      ka !== null && $o(ka) && (ka = null),
      Ya !== null && $o(Ya) && (Ya = null),
      qa !== null && $o(qa) && (qa = null),
      cr.forEach(Uh),
      fr.forEach(Uh));
  }
  function Go(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null), $c || (($c = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, iv)));
  }
  var Vo = null;
  function Hh(t) {
    Vo !== t &&
      ((Vo = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Vo === t && (Vo = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != 'function') {
            if (qc(l || n) === null) continue;
            break;
          }
          var s = Tl(n);
          s !== null && (t.splice(e, 3), (e -= 3), Ys(s, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function li(t) {
    function e(x) {
      return Go(x, t);
    }
    (ka !== null && Go(ka, t), Ya !== null && Go(Ya, t), qa !== null && Go(qa, t), cr.forEach(e), fr.forEach(e));
    for (var n = 0; n < $a.length; n++) {
      var l = $a[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < $a.length && ((n = $a[0]), n.blockedOn === null); ) (Nh(n), n.blockedOn === null && $a.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          s = n[l + 1],
          d = r[Ke] || null;
        if (typeof s == 'function') d || Hh(n);
        else if (d) {
          var h = null;
          if (s && s.hasAttribute('formAction')) {
            if (((r = s), (d = s[Ke] || null))) h = d.formAction;
            else if (qc(r) !== null) continue;
          } else h = d.action;
          (typeof h == 'function' ? (n[l + 1] = h) : (n.splice(l, 3), (l -= 3)), Hh(n));
        }
      }
  }
  function Lh() {
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
  function Gc(t) {
    this._internalRoot = t;
  }
  ((Xo.prototype.render = Gc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        l = cn();
      Rh(n, l, t, e, null, null);
    }),
    (Xo.prototype.unmount = Gc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Rh(t.current, 2, null, t, null, null), Ao(), (e[xl] = null));
        }
      }));
  function Xo(t) {
    this._internalRoot = t;
  }
  Xo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Kf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < $a.length && e !== 0 && e < $a[n].priority; n++);
      ($a.splice(n, 0, t), n === 0 && Nh(t));
    }
  };
  var kh = i.version;
  if (kh !== '19.2.0') throw Error(o(527, kh, '19.2.0'));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function' ? Error(o(188)) : ((t = Object.keys(t).join(',')), Error(o(268, t)));
    return ((t = g(e)), (t = t !== null ? S(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var rv = {
    bundleType: 0,
    version: '19.2.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    reconcilerVersion: '19.2.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        ((It = Qo.inject(rv)), (ie = Qo));
      } catch {}
  }
  return (
    (hr.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        l = '',
        r = Q0,
        s = Z0,
        d = K0;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = Mh(t, 1, !1, null, null, n, l, null, r, s, d, Lh)),
        (t[xl] = e.current),
        Ec(t),
        new Gc(e)
      );
    }),
    (hr.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var l = !1,
        r = '',
        s = Q0,
        d = Z0,
        h = K0,
        x = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError),
          n.formState !== void 0 && (x = n.formState)),
        (e = Mh(t, 1, !0, e, n ?? null, l, r, x, s, d, h, Lh)),
        (e.context = Oh(null)),
        (n = e.current),
        (l = cn()),
        (l = Bu(l)),
        (r = Ma(l)),
        (r.callback = null),
        Oa(n, r, l),
        (n = l),
        (e.current.lanes = n),
        Ti(e, n),
        $n(e),
        (t[xl] = e.current),
        Ec(t),
        new Xo(e)
      );
    }),
    (hr.version = '19.2.0'),
    hr
  );
}
var Jh;
function gv() {
  if (Jh) return Qc.exports;
  Jh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Qc.exports = mv()), Qc.exports);
}
var yv = gv();
const Tr = { black: '#000', white: '#fff' },
  ii = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  ri = { 50: '#f3e5f5', 200: '#ce93d8', 300: '#ba68c8', 400: '#ab47bc', 500: '#9c27b0', 700: '#7b1fa2' },
  oi = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  ui = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  si = { 300: '#81c784', 400: '#66bb6a', 500: '#4caf50', 700: '#388e3c', 800: '#2e7d32', 900: '#1b5e20' },
  mr = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  vv = {
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
function yl(a, ...i) {
  const u = new URL(`https://mui.com/production-error/?code=${a}`);
  return (
    i.forEach((o) => u.searchParams.append('args[]', o)),
    `Minified MUI error #${a}; visit ${u} for the full message.`
  );
}
const Ef = '$$material';
function ru() {
  return (
    (ru = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var u = arguments[i];
            for (var o in u) ({}).hasOwnProperty.call(u, o) && (a[o] = u[o]);
          }
          return a;
        }),
    ru.apply(null, arguments)
  );
}
function bv(a) {
  if (a.sheet) return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a) return document.styleSheets[i];
}
function Sv(a) {
  var i = document.createElement('style');
  return (
    i.setAttribute('data-emotion', a.key),
    a.nonce !== void 0 && i.setAttribute('nonce', a.nonce),
    i.appendChild(document.createTextNode('')),
    i.setAttribute('data-s', ''),
    i
  );
}
var xv = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Sv(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = bv(c);
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
  ou = '-moz-',
  kt = '-webkit-',
  Qm = 'comm',
  Af = 'rule',
  zf = 'decl',
  Cv = '@import',
  Zm = '@keyframes',
  Tv = '@layer',
  Ev = Math.abs,
  gu = String.fromCharCode,
  Av = Object.assign;
function zv(a, i) {
  return je(a, 0) ^ 45 ? (((((((i << 2) ^ je(a, 0)) << 2) ^ je(a, 1)) << 2) ^ je(a, 2)) << 2) ^ je(a, 3) : 0;
}
function Km(a) {
  return a.trim();
}
function Mv(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function Yt(a, i, u) {
  return a.replace(i, u);
}
function uf(a, i) {
  return a.indexOf(i);
}
function je(a, i) {
  return a.charCodeAt(i) | 0;
}
function Er(a, i, u) {
  return a.slice(i, u);
}
function Vn(a) {
  return a.length;
}
function Mf(a) {
  return a.length;
}
function Zo(a, i) {
  return (i.push(a), a);
}
function Ov(a, i) {
  return a.map(i).join('');
}
var yu = 1,
  yi = 1,
  Jm = 0,
  nn = 0,
  Ce = 0,
  Si = '';
function vu(a, i, u, o, c, f, p) {
  return { value: a, root: i, parent: u, type: o, props: c, children: f, line: yu, column: yi, length: p, return: '' };
}
function gr(a, i) {
  return Av(vu('', null, null, '', null, null, 0), a, { length: -a.length }, i);
}
function Rv() {
  return Ce;
}
function _v() {
  return ((Ce = nn > 0 ? je(Si, --nn) : 0), yi--, Ce === 10 && ((yi = 1), yu--), Ce);
}
function dn() {
  return ((Ce = nn < Jm ? je(Si, nn++) : 0), yi++, Ce === 10 && ((yi = 1), yu++), Ce);
}
function Zn() {
  return je(Si, nn);
}
function tu() {
  return nn;
}
function Rr(a, i) {
  return Er(Si, a, i);
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
function Wm(a) {
  return ((yu = yi = 1), (Jm = Vn((Si = a))), (nn = 0), []);
}
function Fm(a) {
  return ((Si = ''), a);
}
function eu(a) {
  return Km(Rr(nn - 1, sf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function wv(a) {
  for (; (Ce = Zn()) && Ce < 33; ) dn();
  return Ar(a) > 2 || Ar(Ce) > 3 ? '' : ' ';
}
function Dv(a, i) {
  for (; --i && dn() && !(Ce < 48 || Ce > 102 || (Ce > 57 && Ce < 65) || (Ce > 70 && Ce < 97)); );
  return Rr(a, tu() + (i < 6 && Zn() == 32 && dn() == 32));
}
function sf(a) {
  for (; dn(); )
    switch (Ce) {
      case a:
        return nn;
      case 34:
      case 39:
        a !== 34 && a !== 39 && sf(Ce);
        break;
      case 40:
        a === 41 && sf(a);
        break;
      case 92:
        dn();
        break;
    }
  return nn;
}
function Bv(a, i) {
  for (; dn() && a + Ce !== 57; ) if (a + Ce === 84 && Zn() === 47) break;
  return '/*' + Rr(i, nn - 1) + '*' + gu(a === 47 ? a : dn());
}
function jv(a) {
  for (; !Ar(Zn()); ) dn();
  return Rr(a, nn);
}
function Nv(a) {
  return Fm(nu('', null, null, null, [''], (a = Wm(a)), 0, [0], a));
}
function nu(a, i, u, o, c, f, p, m, y) {
  for (
    var g = 0, S = 0, C = p, M = 0, N = 0, O = 0, E = 1, L = 1, G = 1, F = 0, J = '', $ = c, U = f, V = o, Z = J;
    L;

  )
    switch (((O = F), (F = dn()))) {
      case 40:
        if (O != 108 && je(Z, C - 1) == 58) {
          uf((Z += Yt(eu(F), '&', '&\f')), '&\f') != -1 && (G = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Z += eu(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Z += wv(O);
        break;
      case 92:
        Z += Dv(tu() - 1, 7);
        continue;
      case 47:
        switch (Zn()) {
          case 42:
          case 47:
            Zo(Uv(Bv(dn(), tu()), i, u), y);
            break;
          default:
            Z += '/';
        }
        break;
      case 123 * E:
        m[g++] = Vn(Z) * G;
      case 125 * E:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            L = 0;
          case 59 + S:
            (G == -1 && (Z = Yt(Z, /\f/g, '')),
              N > 0 && Vn(Z) - C && Zo(N > 32 ? Fh(Z + ';', o, u, C - 1) : Fh(Yt(Z, ' ', '') + ';', o, u, C - 2), y));
            break;
          case 59:
            Z += ';';
          default:
            if ((Zo((V = Wh(Z, i, u, g, S, c, m, J, ($ = []), (U = []), C)), f), F === 123))
              if (S === 0) nu(Z, i, V, V, $, f, C, m, U);
              else
                switch (M === 99 && je(Z, 3) === 110 ? 100 : M) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nu(a, V, V, o && Zo(Wh(a, V, V, 0, 0, c, m, J, c, ($ = []), C), U), c, U, C, m, o ? $ : U);
                    break;
                  default:
                    nu(Z, V, V, V, [''], U, 0, m, U);
                }
        }
        ((g = S = N = 0), (E = G = 1), (J = Z = ''), (C = p));
        break;
      case 58:
        ((C = 1 + Vn(Z)), (N = O));
      default:
        if (E < 1) {
          if (F == 123) --E;
          else if (F == 125 && E++ == 0 && _v() == 125) continue;
        }
        switch (((Z += gu(F)), F * E)) {
          case 38:
            G = S > 0 ? 1 : ((Z += '\f'), -1);
            break;
          case 44:
            ((m[g++] = (Vn(Z) - 1) * G), (G = 1));
            break;
          case 64:
            (Zn() === 45 && (Z += eu(dn())), (M = Zn()), (S = C = Vn((J = Z += jv(tu())))), F++);
            break;
          case 45:
            O === 45 && Vn(Z) == 2 && (E = 0);
        }
    }
  return f;
}
function Wh(a, i, u, o, c, f, p, m, y, g, S) {
  for (var C = c - 1, M = c === 0 ? f : [''], N = Mf(M), O = 0, E = 0, L = 0; O < o; ++O)
    for (var G = 0, F = Er(a, C + 1, (C = Ev((E = p[O])))), J = a; G < N; ++G)
      (J = Km(E > 0 ? M[G] + ' ' + F : Yt(F, /&\f/g, M[G]))) && (y[L++] = J);
  return vu(a, i, u, c === 0 ? Af : m, y, g, S);
}
function Uv(a, i, u) {
  return vu(a, i, u, Qm, gu(Rv()), Er(a, 2, -2), 0);
}
function Fh(a, i, u, o) {
  return vu(a, i, u, zf, Er(a, 0, o), Er(a, o + 1, -1), o);
}
function hi(a, i) {
  for (var u = '', o = Mf(a), c = 0; c < o; c++) u += i(a[c], c, a, i) || '';
  return u;
}
function Hv(a, i, u, o) {
  switch (a.type) {
    case Tv:
      if (a.children.length) break;
    case Cv:
    case zf:
      return (a.return = a.return || a.value);
    case Qm:
      return '';
    case Zm:
      return (a.return = a.value + '{' + hi(a.children, o) + '}');
    case Af:
      a.value = a.props.join(',');
  }
  return Vn((u = hi(a.children, o))) ? (a.return = a.value + '{' + u + '}') : '';
}
function Lv(a) {
  var i = Mf(a);
  return function (u, o, c, f) {
    for (var p = '', m = 0; m < i; m++) p += a[m](u, o, c, f) || '';
    return p;
  };
}
function kv(a) {
  return function (i) {
    i.root || ((i = i.return) && a(i));
  };
}
function Pm(a) {
  var i = Object.create(null);
  return function (u) {
    return (i[u] === void 0 && (i[u] = a(u)), i[u]);
  };
}
var Yv = function (i, u, o) {
    for (var c = 0, f = 0; (c = f), (f = Zn()), c === 38 && f === 12 && (u[o] = 1), !Ar(f); ) dn();
    return Rr(i, nn);
  },
  qv = function (i, u) {
    var o = -1,
      c = 44;
    do
      switch (Ar(c)) {
        case 0:
          (c === 38 && Zn() === 12 && (u[o] = 1), (i[o] += Yv(nn - 1, u, o)));
          break;
        case 2:
          i[o] += eu(c);
          break;
        case 4:
          if (c === 44) {
            ((i[++o] = Zn() === 58 ? '&\f' : ''), (u[o] = i[o].length));
            break;
          }
        default:
          i[o] += gu(c);
      }
    while ((c = dn()));
    return i;
  },
  $v = function (i, u) {
    return Fm(qv(Wm(i), u));
  },
  Ph = new WeakMap(),
  Gv = function (i) {
    if (!(i.type !== 'rule' || !i.parent || i.length < 1)) {
      for (var u = i.value, o = i.parent, c = i.column === o.column && i.line === o.line; o.type !== 'rule'; )
        if (((o = o.parent), !o)) return;
      if (!(i.props.length === 1 && u.charCodeAt(0) !== 58 && !Ph.get(o)) && !c) {
        Ph.set(i, !0);
        for (var f = [], p = $v(u, f), m = o.props, y = 0, g = 0; y < p.length; y++)
          for (var S = 0; S < m.length; S++, g++) i.props[g] = f[y] ? p[y].replace(/&\f/g, m[S]) : m[S] + ' ' + p[y];
      }
    }
  },
  Vv = function (i) {
    if (i.type === 'decl') {
      var u = i.value;
      u.charCodeAt(0) === 108 && u.charCodeAt(2) === 98 && ((i.return = ''), (i.value = ''));
    }
  };
function Im(a, i) {
  switch (zv(a, i)) {
    case 5103:
      return kt + 'print-' + a + a;
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
      return kt + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return kt + a + ou + a + ke + a + a;
    case 6828:
    case 4268:
      return kt + a + ke + a + a;
    case 6165:
      return kt + a + ke + 'flex-' + a + a;
    case 5187:
      return kt + a + Yt(a, /(\w+).+(:[^]+)/, kt + 'box-$1$2' + ke + 'flex-$1$2') + a;
    case 5443:
      return kt + a + ke + 'flex-item-' + Yt(a, /flex-|-self/, '') + a;
    case 4675:
      return kt + a + ke + 'flex-line-pack' + Yt(a, /align-content|flex-|-self/, '') + a;
    case 5548:
      return kt + a + ke + Yt(a, 'shrink', 'negative') + a;
    case 5292:
      return kt + a + ke + Yt(a, 'basis', 'preferred-size') + a;
    case 6060:
      return kt + 'box-' + Yt(a, '-grow', '') + kt + a + ke + Yt(a, 'grow', 'positive') + a;
    case 4554:
      return kt + Yt(a, /([^-])(transform)/g, '$1' + kt + '$2') + a;
    case 6187:
      return Yt(Yt(Yt(a, /(zoom-|grab)/, kt + '$1'), /(image-set)/, kt + '$1'), a, '') + a;
    case 5495:
    case 3959:
      return Yt(a, /(image-set\([^]*)/, kt + '$1$`$1');
    case 4968:
      return (
        Yt(Yt(a, /(.+:)(flex-)?(.*)/, kt + 'box-pack:$3' + ke + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + kt + a + a
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Yt(a, /(.+)-inline(.+)/, kt + '$1$2') + a;
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
      if (Vn(a) - 1 - i > 6)
        switch (je(a, i + 1)) {
          case 109:
            if (je(a, i + 4) !== 45) break;
          case 102:
            return Yt(a, /(.+:)(.+)-([^]+)/, '$1' + kt + '$2-$3$1' + ou + (je(a, i + 3) == 108 ? '$3' : '$2-$3')) + a;
          case 115:
            return ~uf(a, 'stretch') ? Im(Yt(a, 'stretch', 'fill-available'), i) + a : a;
        }
      break;
    case 4949:
      if (je(a, i + 1) !== 115) break;
    case 6444:
      switch (je(a, Vn(a) - 3 - (~uf(a, '!important') && 10))) {
        case 107:
          return Yt(a, ':', ':' + kt) + a;
        case 101:
          return (
            Yt(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + kt + (je(a, 14) === 45 ? 'inline-' : '') + 'box$3$1' + kt + '$2$3$1' + ke + '$2box$3'
            ) + a
          );
      }
      break;
    case 5936:
      switch (je(a, i + 11)) {
        case 114:
          return kt + a + ke + Yt(a, /[svh]\w+-[tblr]{2}/, 'tb') + a;
        case 108:
          return kt + a + ke + Yt(a, /[svh]\w+-[tblr]{2}/, 'tb-rl') + a;
        case 45:
          return kt + a + ke + Yt(a, /[svh]\w+-[tblr]{2}/, 'lr') + a;
      }
      return kt + a + ke + a + a;
  }
  return a;
}
var Xv = function (i, u, o, c) {
    if (i.length > -1 && !i.return)
      switch (i.type) {
        case zf:
          i.return = Im(i.value, i.length);
          break;
        case Zm:
          return hi([gr(i, { value: Yt(i.value, '@', '@' + kt) })], c);
        case Af:
          if (i.length)
            return Ov(i.props, function (f) {
              switch (Mv(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return hi([gr(i, { props: [Yt(f, /:(read-\w+)/, ':' + ou + '$1')] })], c);
                case '::placeholder':
                  return hi(
                    [
                      gr(i, { props: [Yt(f, /:(plac\w+)/, ':' + kt + 'input-$1')] }),
                      gr(i, { props: [Yt(f, /:(plac\w+)/, ':' + ou + '$1')] }),
                      gr(i, { props: [Yt(f, /:(plac\w+)/, ke + 'input-$1')] }),
                    ],
                    c
                  );
              }
              return '';
            });
      }
  },
  Qv = [Xv],
  Zv = function (i) {
    var u = i.key;
    if (u === 'css') {
      var o = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(o, function (E) {
        var L = E.getAttribute('data-emotion');
        L.indexOf(' ') !== -1 && (document.head.appendChild(E), E.setAttribute('data-s', ''));
      });
    }
    var c = i.stylisPlugins || Qv,
      f = {},
      p,
      m = [];
    ((p = i.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + u + ' "]'), function (E) {
        for (var L = E.getAttribute('data-emotion').split(' '), G = 1; G < L.length; G++) f[L[G]] = !0;
        m.push(E);
      }));
    var y,
      g = [Gv, Vv];
    {
      var S,
        C = [
          Hv,
          kv(function (E) {
            S.insert(E);
          }),
        ],
        M = Lv(g.concat(c, C)),
        N = function (L) {
          return hi(Nv(L), M);
        };
      y = function (L, G, F, J) {
        ((S = F), N(L ? L + '{' + G.styles + '}' : G.styles), J && (O.inserted[G.name] = !0));
      };
    }
    var O = {
      key: u,
      sheet: new xv({
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
    return (O.sheet.hydrate(m), O);
  },
  Wc = { exports: {} },
  $t = {};
var Ih;
function Kv() {
  if (Ih) return $t;
  Ih = 1;
  var a = typeof Symbol == 'function' && Symbol.for,
    i = a ? Symbol.for('react.element') : 60103,
    u = a ? Symbol.for('react.portal') : 60106,
    o = a ? Symbol.for('react.fragment') : 60107,
    c = a ? Symbol.for('react.strict_mode') : 60108,
    f = a ? Symbol.for('react.profiler') : 60114,
    p = a ? Symbol.for('react.provider') : 60109,
    m = a ? Symbol.for('react.context') : 60110,
    y = a ? Symbol.for('react.async_mode') : 60111,
    g = a ? Symbol.for('react.concurrent_mode') : 60111,
    S = a ? Symbol.for('react.forward_ref') : 60112,
    C = a ? Symbol.for('react.suspense') : 60113,
    M = a ? Symbol.for('react.suspense_list') : 60120,
    N = a ? Symbol.for('react.memo') : 60115,
    O = a ? Symbol.for('react.lazy') : 60116,
    E = a ? Symbol.for('react.block') : 60121,
    L = a ? Symbol.for('react.fundamental') : 60117,
    G = a ? Symbol.for('react.responder') : 60118,
    F = a ? Symbol.for('react.scope') : 60119;
  function J(U) {
    if (typeof U == 'object' && U !== null) {
      var V = U.$$typeof;
      switch (V) {
        case i:
          switch (((U = U.type), U)) {
            case y:
            case g:
            case o:
            case f:
            case c:
            case C:
              return U;
            default:
              switch (((U = U && U.$$typeof), U)) {
                case m:
                case S:
                case O:
                case N:
                case p:
                  return U;
                default:
                  return V;
              }
          }
        case u:
          return V;
      }
    }
  }
  function $(U) {
    return J(U) === g;
  }
  return (
    ($t.AsyncMode = y),
    ($t.ConcurrentMode = g),
    ($t.ContextConsumer = m),
    ($t.ContextProvider = p),
    ($t.Element = i),
    ($t.ForwardRef = S),
    ($t.Fragment = o),
    ($t.Lazy = O),
    ($t.Memo = N),
    ($t.Portal = u),
    ($t.Profiler = f),
    ($t.StrictMode = c),
    ($t.Suspense = C),
    ($t.isAsyncMode = function (U) {
      return $(U) || J(U) === y;
    }),
    ($t.isConcurrentMode = $),
    ($t.isContextConsumer = function (U) {
      return J(U) === m;
    }),
    ($t.isContextProvider = function (U) {
      return J(U) === p;
    }),
    ($t.isElement = function (U) {
      return typeof U == 'object' && U !== null && U.$$typeof === i;
    }),
    ($t.isForwardRef = function (U) {
      return J(U) === S;
    }),
    ($t.isFragment = function (U) {
      return J(U) === o;
    }),
    ($t.isLazy = function (U) {
      return J(U) === O;
    }),
    ($t.isMemo = function (U) {
      return J(U) === N;
    }),
    ($t.isPortal = function (U) {
      return J(U) === u;
    }),
    ($t.isProfiler = function (U) {
      return J(U) === f;
    }),
    ($t.isStrictMode = function (U) {
      return J(U) === c;
    }),
    ($t.isSuspense = function (U) {
      return J(U) === C;
    }),
    ($t.isValidElementType = function (U) {
      return (
        typeof U == 'string' ||
        typeof U == 'function' ||
        U === o ||
        U === g ||
        U === f ||
        U === c ||
        U === C ||
        U === M ||
        (typeof U == 'object' &&
          U !== null &&
          (U.$$typeof === O ||
            U.$$typeof === N ||
            U.$$typeof === p ||
            U.$$typeof === m ||
            U.$$typeof === S ||
            U.$$typeof === L ||
            U.$$typeof === G ||
            U.$$typeof === F ||
            U.$$typeof === E))
      );
    }),
    ($t.typeOf = J),
    $t
  );
}
var tm;
function Jv() {
  return (tm || ((tm = 1), (Wc.exports = Kv())), Wc.exports);
}
var Fc, em;
function Wv() {
  if (em) return Fc;
  em = 1;
  var a = Jv(),
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
  var m = Object.defineProperty,
    y = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    S = Object.getOwnPropertyDescriptor,
    C = Object.getPrototypeOf,
    M = Object.prototype;
  function N(O, E, L) {
    if (typeof E != 'string') {
      if (M) {
        var G = C(E);
        G && G !== M && N(O, G, L);
      }
      var F = y(E);
      g && (F = F.concat(g(E)));
      for (var J = p(O), $ = p(E), U = 0; U < F.length; ++U) {
        var V = F[U];
        if (!u[V] && !(L && L[V]) && !($ && $[V]) && !(J && J[V])) {
          var Z = S(E, V);
          try {
            m(O, V, Z);
          } catch {}
        }
      }
    }
    return O;
  }
  return ((Fc = N), Fc);
}
Wv();
var Fv = !0;
function tg(a, i, u) {
  var o = '';
  return (
    u.split(' ').forEach(function (c) {
      a[c] !== void 0 ? i.push(a[c] + ';') : c && (o += c + ' ');
    }),
    o
  );
}
var Of = function (i, u, o) {
    var c = i.key + '-' + u.name;
    (o === !1 || Fv === !1) && i.registered[c] === void 0 && (i.registered[c] = u.styles);
  },
  eg = function (i, u, o) {
    Of(i, u, o);
    var c = i.key + '-' + u.name;
    if (i.inserted[u.name] === void 0) {
      var f = u;
      do (i.insert(u === f ? '.' + c : '', f, i.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function Pv(a) {
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
var Iv = {
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
  tb = /[A-Z]|^ms/g,
  eb = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ng = function (i) {
    return i.charCodeAt(1) === 45;
  },
  nm = function (i) {
    return i != null && typeof i != 'boolean';
  },
  Pc = Pm(function (a) {
    return ng(a) ? a : a.replace(tb, '-$&').toLowerCase();
  }),
  am = function (i, u) {
    switch (i) {
      case 'animation':
      case 'animationName':
        if (typeof u == 'string')
          return u.replace(eb, function (o, c, f) {
            return ((Xn = { name: c, styles: f, next: Xn }), c);
          });
    }
    return Iv[i] !== 1 && !ng(i) && typeof u == 'number' && u !== 0 ? u + 'px' : u;
  };
function zr(a, i, u) {
  if (u == null) return '';
  var o = u;
  if (o.__emotion_styles !== void 0) return o;
  switch (typeof u) {
    case 'boolean':
      return '';
    case 'object': {
      var c = u;
      if (c.anim === 1) return ((Xn = { name: c.name, styles: c.styles, next: Xn }), c.name);
      var f = u;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0) for (; p !== void 0; ) ((Xn = { name: p.name, styles: p.styles, next: Xn }), (p = p.next));
        var m = f.styles + ';';
        return m;
      }
      return nb(a, i, u);
    }
    case 'function': {
      if (a !== void 0) {
        var y = Xn,
          g = u(a);
        return ((Xn = y), zr(a, i, g));
      }
      break;
    }
  }
  var S = u;
  if (i == null) return S;
  var C = i[S];
  return C !== void 0 ? C : S;
}
function nb(a, i, u) {
  var o = '';
  if (Array.isArray(u)) for (var c = 0; c < u.length; c++) o += zr(a, i, u[c]) + ';';
  else
    for (var f in u) {
      var p = u[f];
      if (typeof p != 'object') {
        var m = p;
        i != null && i[m] !== void 0 ? (o += f + '{' + i[m] + '}') : nm(m) && (o += Pc(f) + ':' + am(f, m) + ';');
      } else if (Array.isArray(p) && typeof p[0] == 'string' && (i == null || i[p[0]] === void 0))
        for (var y = 0; y < p.length; y++) nm(p[y]) && (o += Pc(f) + ':' + am(f, p[y]) + ';');
      else {
        var g = zr(a, i, p);
        switch (f) {
          case 'animation':
          case 'animationName': {
            o += Pc(f) + ':' + g + ';';
            break;
          }
          default:
            o += f + '{' + g + '}';
        }
      }
    }
  return o;
}
var lm = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Xn;
function bu(a, i, u) {
  if (a.length === 1 && typeof a[0] == 'object' && a[0] !== null && a[0].styles !== void 0) return a[0];
  var o = !0,
    c = '';
  Xn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) ((o = !1), (c += zr(u, i, f)));
  else {
    var p = f;
    c += p[0];
  }
  for (var m = 1; m < a.length; m++)
    if (((c += zr(u, i, a[m])), o)) {
      var y = f;
      c += y[m];
    }
  lm.lastIndex = 0;
  for (var g = '', S; (S = lm.exec(c)) !== null; ) g += '-' + S[1];
  var C = Pv(c) + g;
  return { name: C, styles: c, next: Xn };
}
var ab = function (i) {
    return i();
  },
  lb = of.useInsertionEffect ? of.useInsertionEffect : !1,
  ag = lb || ab,
  lg = H.createContext(typeof HTMLElement < 'u' ? Zv({ key: 'css' }) : null);
lg.Provider;
var ig = function (i) {
    return H.forwardRef(function (u, o) {
      var c = H.useContext(lg);
      return i(u, c, o);
    });
  },
  Rf = H.createContext({}),
  _f = {}.hasOwnProperty,
  cf = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ib = function (i, u) {
    var o = {};
    for (var c in u) _f.call(u, c) && (o[c] = u[c]);
    return ((o[cf] = i), o);
  },
  rb = function (i) {
    var u = i.cache,
      o = i.serialized,
      c = i.isStringTag;
    return (
      Of(u, o, c),
      ag(function () {
        return eg(u, o, c);
      }),
      null
    );
  },
  ob = ig(function (a, i, u) {
    var o = a.css;
    typeof o == 'string' && i.registered[o] !== void 0 && (o = i.registered[o]);
    var c = a[cf],
      f = [o],
      p = '';
    typeof a.className == 'string'
      ? (p = tg(i.registered, f, a.className))
      : a.className != null && (p = a.className + ' ');
    var m = bu(f, void 0, H.useContext(Rf));
    p += i.key + '-' + m.name;
    var y = {};
    for (var g in a) _f.call(a, g) && g !== 'css' && g !== cf && (y[g] = a[g]);
    return (
      (y.className = p),
      u && (y.ref = u),
      H.createElement(
        H.Fragment,
        null,
        H.createElement(rb, { cache: i, serialized: m, isStringTag: typeof c == 'string' }),
        H.createElement(c, y)
      )
    );
  }),
  ub = ob,
  im = function (i, u) {
    var o = arguments;
    if (u == null || !_f.call(u, 'css')) return H.createElement.apply(void 0, o);
    var c = o.length,
      f = new Array(c);
    ((f[0] = ub), (f[1] = ib(i, u)));
    for (var p = 2; p < c; p++) f[p] = o[p];
    return H.createElement.apply(null, f);
  };
(function (a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(im || (im = {}));
function wf() {
  for (var a = arguments.length, i = new Array(a), u = 0; u < a; u++) i[u] = arguments[u];
  return bu(i);
}
function _r() {
  var a = wf.apply(void 0, arguments),
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
var sb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  cb = Pm(function (a) {
    return sb.test(a) || (a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91);
  }),
  fb = cb,
  db = function (i) {
    return i !== 'theme';
  },
  rm = function (i) {
    return typeof i == 'string' && i.charCodeAt(0) > 96 ? fb : db;
  },
  om = function (i, u, o) {
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
  pb = function (i) {
    var u = i.cache,
      o = i.serialized,
      c = i.isStringTag;
    return (
      Of(u, o, c),
      ag(function () {
        return eg(u, o, c);
      }),
      null
    );
  },
  hb = function a(i, u) {
    var o = i.__emotion_real === i,
      c = (o && i.__emotion_base) || i,
      f,
      p;
    u !== void 0 && ((f = u.label), (p = u.target));
    var m = om(i, u, o),
      y = m || rm(c),
      g = !y('as');
    return function () {
      var S = arguments,
        C = o && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
      if ((f !== void 0 && C.push('label:' + f + ';'), S[0] == null || S[0].raw === void 0)) C.push.apply(C, S);
      else {
        var M = S[0];
        C.push(M[0]);
        for (var N = S.length, O = 1; O < N; O++) C.push(S[O], M[O]);
      }
      var E = ig(function (L, G, F) {
        var J = (g && L.as) || c,
          $ = '',
          U = [],
          V = L;
        if (L.theme == null) {
          V = {};
          for (var Z in L) V[Z] = L[Z];
          V.theme = H.useContext(Rf);
        }
        typeof L.className == 'string'
          ? ($ = tg(G.registered, U, L.className))
          : L.className != null && ($ = L.className + ' ');
        var ot = bu(C.concat(U), G.registered, V);
        (($ += G.key + '-' + ot.name), p !== void 0 && ($ += ' ' + p));
        var ut = g && m === void 0 ? rm(J) : y,
          pt = {};
        for (var st in L) (g && st === 'as') || (ut(st) && (pt[st] = L[st]));
        return (
          (pt.className = $),
          F && (pt.ref = F),
          H.createElement(
            H.Fragment,
            null,
            H.createElement(pb, { cache: G, serialized: ot, isStringTag: typeof J == 'string' }),
            H.createElement(J, pt)
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
        (E.__emotion_forwardProp = m),
        Object.defineProperty(E, 'toString', {
          value: function () {
            return '.' + p;
          },
        }),
        (E.withComponent = function (L, G) {
          var F = a(L, ru({}, u, G, { shouldForwardProp: om(E, G, !0) }));
          return F.apply(void 0, C);
        }),
        E
      );
    };
  },
  mb = [
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
  ff = hb.bind(null);
mb.forEach(function (a) {
  ff[a] = ff(a);
});
function rg(a, i) {
  return ff(a, i);
}
function gb(a, i) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = i(a.__emotion_styles));
}
const um = [];
function ml(a) {
  return ((um[0] = a), bu(um));
}
var Ic = { exports: {} },
  Ft = {};
var sm;
function yb() {
  if (sm) return Ft;
  sm = 1;
  var a = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.suspense_list'),
    S = Symbol.for('react.memo'),
    C = Symbol.for('react.lazy'),
    M = Symbol.for('react.view_transition'),
    N = Symbol.for('react.client.reference');
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
            case M:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case p:
                case m:
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
    (Ft.ForwardRef = m),
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
      return O(E) === m;
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
            E.$$typeof === m ||
            E.$$typeof === N ||
            E.getModuleId !== void 0))
      );
    }),
    (Ft.typeOf = O),
    Ft
  );
}
var cm;
function vb() {
  return (cm || ((cm = 1), (Ic.exports = yb())), Ic.exports);
}
var og = vb();
function Qn(a) {
  if (typeof a != 'object' || a === null) return !1;
  const i = Object.getPrototypeOf(a);
  return (
    (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in a) &&
    !(Symbol.iterator in a)
  );
}
function ug(a) {
  if (H.isValidElement(a) || og.isValidElementType(a) || !Qn(a)) return a;
  const i = {};
  return (
    Object.keys(a).forEach((u) => {
      i[u] = ug(a[u]);
    }),
    i
  );
}
function Ve(a, i, u = { clone: !0 }) {
  const o = u.clone ? { ...a } : a;
  return (
    Qn(a) &&
      Qn(i) &&
      Object.keys(i).forEach((c) => {
        H.isValidElement(i[c]) || og.isValidElementType(i[c])
          ? (o[c] = i[c])
          : Qn(i[c]) && Object.prototype.hasOwnProperty.call(a, c) && Qn(a[c])
            ? (o[c] = Ve(a[c], i[c], u))
            : u.clone
              ? (o[c] = Qn(i[c]) ? ug(i[c]) : i[c])
              : (o[c] = i[c]);
      }),
    o
  );
}
const bb = (a) => {
  const i = Object.keys(a).map((u) => ({ key: u, val: a[u] })) || [];
  return (i.sort((u, o) => u.val - o.val), i.reduce((u, o) => ({ ...u, [o.key]: o.val }), {}));
};
function Sb(a) {
  const { values: i = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: u = 'px', step: o = 5, ...c } = a,
    f = bb(i),
    p = Object.keys(f);
  function m(M) {
    return `@media (min-width:${typeof i[M] == 'number' ? i[M] : M}${u})`;
  }
  function y(M) {
    return `@media (max-width:${(typeof i[M] == 'number' ? i[M] : M) - o / 100}${u})`;
  }
  function g(M, N) {
    const O = p.indexOf(N);
    return `@media (min-width:${typeof i[M] == 'number' ? i[M] : M}${u}) and (max-width:${(O !== -1 && typeof i[p[O]] == 'number' ? i[p[O]] : N) - o / 100}${u})`;
  }
  function S(M) {
    return p.indexOf(M) + 1 < p.length ? g(M, p[p.indexOf(M) + 1]) : m(M);
  }
  function C(M) {
    const N = p.indexOf(M);
    return N === 0
      ? m(p[1])
      : N === p.length - 1
        ? y(p[N])
        : g(M, p[p.indexOf(M) + 1]).replace('@media', '@media not all and');
  }
  return { keys: p, values: f, up: m, down: y, between: g, only: S, not: C, unit: u, ...c };
}
function fm(a, i) {
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
function xb(a, i) {
  return i === '@' || (i.startsWith('@') && (a.some((u) => i.startsWith(`@${u}`)) || !!i.match(/^@\d/)));
}
function Cb(a, i) {
  const u = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!u) return null;
  const [, o, c] = u,
    f = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(c).up(f);
}
function Tb(a) {
  const i = (f, p) => f.replace('@media', p ? `@container ${p}` : '@container');
  function u(f, p) {
    ((f.up = (...m) => i(a.breakpoints.up(...m), p)),
      (f.down = (...m) => i(a.breakpoints.down(...m), p)),
      (f.between = (...m) => i(a.breakpoints.between(...m), p)),
      (f.only = (...m) => i(a.breakpoints.only(...m), p)),
      (f.not = (...m) => {
        const y = i(a.breakpoints.not(...m), p);
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
const Eb = { borderRadius: 4 };
function Sr(a, i) {
  return i ? Ve(a, i, { clone: !1 }) : a;
}
const Su = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  dm = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (a) => `@media (min-width:${Su[a]}px)` },
  Ab = {
    containerQueries: (a) => ({
      up: (i) => {
        let u = typeof i == 'number' ? i : Su[i] || i;
        return (
          typeof u == 'number' && (u = `${u}px`),
          a ? `@container ${a} (min-width:${u})` : `@container (min-width:${u})`
        );
      },
    }),
  };
function Un(a, i, u) {
  const o = a.theme || {};
  if (Array.isArray(i)) {
    const f = o.breakpoints || dm;
    return i.reduce((p, m, y) => ((p[f.up(f.keys[y])] = u(i[y])), p), {});
  }
  if (typeof i == 'object') {
    const f = o.breakpoints || dm;
    return Object.keys(i).reduce((p, m) => {
      if (xb(f.keys, m)) {
        const y = Cb(o.containerQueries ? o : Ab, m);
        y && (p[y] = u(i[m], m));
      } else if (Object.keys(f.values || Su).includes(m)) {
        const y = f.up(m);
        p[y] = u(i[m], m);
      } else {
        const y = m;
        p[y] = i[y];
      }
      return p;
    }, {});
  }
  return u(i);
}
function sg(a = {}) {
  return (
    a.keys?.reduce((u, o) => {
      const c = a.up(o);
      return ((u[c] = {}), u);
    }, {}) || {}
  );
}
function df(a, i) {
  return a.reduce((u, o) => {
    const c = u[o];
    return ((!c || Object.keys(c).length === 0) && delete u[o], u);
  }, i);
}
function zb(a, ...i) {
  const u = sg(a),
    o = [u, ...i].reduce((c, f) => Ve(c, f), {});
  return df(Object.keys(u), o);
}
function Mb(a, i) {
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
function tf({ values: a, breakpoints: i, base: u }) {
  const o = u || Mb(a, i),
    c = Object.keys(o);
  if (c.length === 0) return a;
  let f;
  return c.reduce(
    (p, m, y) => (
      Array.isArray(a)
        ? ((p[m] = a[y] != null ? a[y] : a[f]), (f = y))
        : typeof a == 'object'
          ? ((p[m] = a[m] != null ? a[m] : a[f]), (f = m))
          : (p[m] = a),
      p
    ),
    {}
  );
}
function St(a) {
  if (typeof a != 'string') throw new Error(yl(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function xu(a, i, u = !0) {
  if (!i || typeof i != 'string') return null;
  if (a && a.vars && u) {
    const o = `vars.${i}`.split('.').reduce((c, f) => (c && c[f] ? c[f] : null), a);
    if (o != null) return o;
  }
  return i.split('.').reduce((o, c) => (o && o[c] != null ? o[c] : null), a);
}
function uu(a, i, u, o = u) {
  let c;
  return (
    typeof a == 'function' ? (c = a(u)) : Array.isArray(a) ? (c = a[u] || o) : (c = xu(a, u) || o),
    i && (c = i(c, o, a)),
    c
  );
}
function ye(a) {
  const { prop: i, cssProperty: u = a.prop, themeKey: o, transform: c } = a,
    f = (p) => {
      if (p[i] == null) return null;
      const m = p[i],
        y = p.theme,
        g = xu(y, o) || {};
      return Un(p, m, (C) => {
        let M = uu(g, c, C);
        return (
          C === M && typeof C == 'string' && (M = uu(g, c, `${i}${C === 'default' ? '' : St(C)}`, C)),
          u === !1 ? M : { [u]: M }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [i]), f);
}
function Ob(a) {
  const i = {};
  return (u) => (i[u] === void 0 && (i[u] = a(u)), i[u]);
}
const Rb = { m: 'margin', p: 'padding' },
  _b = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  pm = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  wb = Ob((a) => {
    if (a.length > 2)
      if (pm[a]) a = pm[a];
      else return [a];
    const [i, u] = a.split(''),
      o = Rb[i],
      c = _b[u] || '';
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
  Bf = [
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
[...Df, ...Bf];
function wr(a, i, u, o) {
  const c = xu(a, i, !0) ?? u;
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
            m = c[p];
          return f >= 0
            ? m
            : typeof m == 'number'
              ? -m
              : typeof m == 'string' && m.startsWith('var(')
                ? `calc(-1 * ${m})`
                : `-${m}`;
        }
      : typeof c == 'function'
        ? c
        : () => {};
}
function Cu(a) {
  return wr(a, 'spacing', 8);
}
function vl(a, i) {
  return typeof i == 'string' || i == null ? i : a(i);
}
function Db(a, i) {
  return (u) => a.reduce((o, c) => ((o[c] = vl(i, u)), o), {});
}
function Bb(a, i, u, o) {
  if (!i.includes(u)) return null;
  const c = wb(u),
    f = Db(c, o),
    p = a[u];
  return Un(a, p, f);
}
function cg(a, i) {
  const u = Cu(a.theme);
  return Object.keys(a)
    .map((o) => Bb(a, i, o, u))
    .reduce(Sr, {});
}
function de(a) {
  return cg(a, Df);
}
de.propTypes = {};
de.filterProps = Df;
function pe(a) {
  return cg(a, Bf);
}
pe.propTypes = {};
pe.filterProps = Bf;
function fg(a = 8, i = Cu({ spacing: a })) {
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
function Tu(...a) {
  const i = a.reduce(
      (o, c) => (
        c.filterProps.forEach((f) => {
          o[f] = c;
        }),
        o
      ),
      {}
    ),
    u = (o) => Object.keys(o).reduce((c, f) => (i[f] ? Sr(c, i[f](o)) : c), {});
  return ((u.propTypes = {}), (u.filterProps = a.reduce((o, c) => o.concat(c.filterProps), [])), u);
}
function zn(a) {
  return typeof a != 'number' ? a : `${a}px solid`;
}
function On(a, i) {
  return ye({ prop: a, themeKey: 'borders', transform: i });
}
const jb = On('border', zn),
  Nb = On('borderTop', zn),
  Ub = On('borderRight', zn),
  Hb = On('borderBottom', zn),
  Lb = On('borderLeft', zn),
  kb = On('borderColor'),
  Yb = On('borderTopColor'),
  qb = On('borderRightColor'),
  $b = On('borderBottomColor'),
  Gb = On('borderLeftColor'),
  Vb = On('outline', zn),
  Xb = On('outlineColor'),
  Eu = (a) => {
    if (a.borderRadius !== void 0 && a.borderRadius !== null) {
      const i = wr(a.theme, 'shape.borderRadius', 4),
        u = (o) => ({ borderRadius: vl(i, o) });
      return Un(a, a.borderRadius, u);
    }
    return null;
  };
Eu.propTypes = {};
Eu.filterProps = ['borderRadius'];
Tu(jb, Nb, Ub, Hb, Lb, kb, Yb, qb, $b, Gb, Eu, Vb, Xb);
const Au = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const i = wr(a.theme, 'spacing', 8),
      u = (o) => ({ gap: vl(i, o) });
    return Un(a, a.gap, u);
  }
  return null;
};
Au.propTypes = {};
Au.filterProps = ['gap'];
const zu = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const i = wr(a.theme, 'spacing', 8),
      u = (o) => ({ columnGap: vl(i, o) });
    return Un(a, a.columnGap, u);
  }
  return null;
};
zu.propTypes = {};
zu.filterProps = ['columnGap'];
const Mu = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const i = wr(a.theme, 'spacing', 8),
      u = (o) => ({ rowGap: vl(i, o) });
    return Un(a, a.rowGap, u);
  }
  return null;
};
Mu.propTypes = {};
Mu.filterProps = ['rowGap'];
const Qb = ye({ prop: 'gridColumn' }),
  Zb = ye({ prop: 'gridRow' }),
  Kb = ye({ prop: 'gridAutoFlow' }),
  Jb = ye({ prop: 'gridAutoColumns' }),
  Wb = ye({ prop: 'gridAutoRows' }),
  Fb = ye({ prop: 'gridTemplateColumns' }),
  Pb = ye({ prop: 'gridTemplateRows' }),
  Ib = ye({ prop: 'gridTemplateAreas' }),
  t2 = ye({ prop: 'gridArea' });
Tu(Au, zu, Mu, Qb, Zb, Kb, Jb, Wb, Fb, Pb, Ib, t2);
function mi(a, i) {
  return i === 'grey' ? i : a;
}
const e2 = ye({ prop: 'color', themeKey: 'palette', transform: mi }),
  n2 = ye({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: mi }),
  a2 = ye({ prop: 'backgroundColor', themeKey: 'palette', transform: mi });
Tu(e2, n2, a2);
function fn(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const l2 = ye({ prop: 'width', transform: fn }),
  jf = (a) => {
    if (a.maxWidth !== void 0 && a.maxWidth !== null) {
      const i = (u) => {
        const o = a.theme?.breakpoints?.values?.[u] || Su[u];
        return o
          ? a.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${o}${a.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: fn(u) };
      };
      return Un(a, a.maxWidth, i);
    }
    return null;
  };
jf.filterProps = ['maxWidth'];
const i2 = ye({ prop: 'minWidth', transform: fn }),
  r2 = ye({ prop: 'height', transform: fn }),
  o2 = ye({ prop: 'maxHeight', transform: fn }),
  u2 = ye({ prop: 'minHeight', transform: fn });
ye({ prop: 'size', cssProperty: 'width', transform: fn });
ye({ prop: 'size', cssProperty: 'height', transform: fn });
const s2 = ye({ prop: 'boxSizing' });
Tu(l2, jf, i2, r2, o2, u2, s2);
const Dr = {
  border: { themeKey: 'borders', transform: zn },
  borderTop: { themeKey: 'borders', transform: zn },
  borderRight: { themeKey: 'borders', transform: zn },
  borderBottom: { themeKey: 'borders', transform: zn },
  borderLeft: { themeKey: 'borders', transform: zn },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: zn },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Eu },
  color: { themeKey: 'palette', transform: mi },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: mi },
  backgroundColor: { themeKey: 'palette', transform: mi },
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
  gap: { style: Au },
  rowGap: { style: Mu },
  columnGap: { style: zu },
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
  width: { transform: fn },
  maxWidth: { style: jf },
  minWidth: { transform: fn },
  height: { transform: fn },
  maxHeight: { transform: fn },
  minHeight: { transform: fn },
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
function c2(...a) {
  const i = a.reduce((o, c) => o.concat(Object.keys(c)), []),
    u = new Set(i);
  return a.every((o) => u.size === Object.keys(o).length);
}
function f2(a, i) {
  return typeof a == 'function' ? a(i) : a;
}
function d2() {
  function a(u, o, c, f) {
    const p = { [u]: o, theme: c },
      m = f[u];
    if (!m) return { [u]: o };
    const { cssProperty: y = u, themeKey: g, transform: S, style: C } = m;
    if (o == null) return null;
    if (g === 'typography' && o === 'inherit') return { [u]: o };
    const M = xu(c, g) || {};
    return C
      ? C(p)
      : Un(p, o, (O) => {
          let E = uu(M, S, O);
          return (
            O === E && typeof O == 'string' && (E = uu(M, S, `${u}${O === 'default' ? '' : St(O)}`, O)),
            y === !1 ? E : { [y]: E }
          );
        });
  }
  function i(u) {
    const { sx: o, theme: c = {}, nested: f } = u || {};
    if (!o) return null;
    const p = c.unstable_sxConfig ?? Dr;
    function m(y) {
      let g = y;
      if (typeof y == 'function') g = y(c);
      else if (typeof y != 'object') return y;
      if (!g) return null;
      const S = sg(c.breakpoints),
        C = Object.keys(S);
      let M = S;
      return (
        Object.keys(g).forEach((N) => {
          const O = f2(g[N], c);
          if (O != null)
            if (typeof O == 'object')
              if (p[N]) M = Sr(M, a(N, O, c, p));
              else {
                const E = Un({ theme: c }, O, (L) => ({ [N]: L }));
                c2(E, O) ? (M[N] = i({ sx: O, theme: c, nested: !0 })) : (M = Sr(M, E));
              }
            else M = Sr(M, a(N, O, c, p));
        }),
        !f && c.modularCssLayers ? { '@layer sx': fm(c, df(C, M)) } : fm(c, df(C, M))
      );
    }
    return Array.isArray(o) ? o.map(m) : m(o);
  }
  return i;
}
const bl = d2();
bl.filterProps = ['sx'];
function p2(a, i) {
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
function Br(a = {}, ...i) {
  const { breakpoints: u = {}, palette: o = {}, spacing: c, shape: f = {}, ...p } = a,
    m = Sb(u),
    y = fg(c);
  let g = Ve(
    {
      breakpoints: m,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...o },
      spacing: y,
      shape: { ...Eb, ...f },
    },
    p
  );
  return (
    (g = Tb(g)),
    (g.applyStyles = p2),
    (g = i.reduce((S, C) => Ve(S, C), g)),
    (g.unstable_sxConfig = { ...Dr, ...p?.unstable_sxConfig }),
    (g.unstable_sx = function (C) {
      return bl({ sx: C, theme: this });
    }),
    g
  );
}
function h2(a) {
  return Object.keys(a).length === 0;
}
function m2(a = null) {
  const i = H.useContext(Rf);
  return !i || h2(i) ? a : i;
}
const g2 = Br();
function Nf(a = g2) {
  return m2(a);
}
const y2 = (a) => {
  const i = { systemProps: {}, otherProps: {} },
    u = a?.theme?.unstable_sxConfig ?? Dr;
  return (
    Object.keys(a).forEach((o) => {
      u[o] ? (i.systemProps[o] = a[o]) : (i.otherProps[o] = a[o]);
    }),
    i
  );
};
function Uf(a) {
  const { sx: i, ...u } = a,
    { systemProps: o, otherProps: c } = y2(u);
  let f;
  return (
    Array.isArray(i)
      ? (f = [o, ...i])
      : typeof i == 'function'
        ? (f = (...p) => {
            const m = i(...p);
            return Qn(m) ? { ...o, ...m } : o;
          })
        : (f = { ...o, ...i }),
    { ...c, sx: f }
  );
}
const hm = (a) => a,
  v2 = () => {
    let a = hm;
    return {
      configure(i) {
        a = i;
      },
      generate(i) {
        return a(i);
      },
      reset() {
        a = hm;
      },
    };
  },
  dg = v2();
function pg(a) {
  var i,
    u,
    o = '';
  if (typeof a == 'string' || typeof a == 'number') o += a;
  else if (typeof a == 'object')
    if (Array.isArray(a)) {
      var c = a.length;
      for (i = 0; i < c; i++) a[i] && (u = pg(a[i])) && (o && (o += ' '), (o += u));
    } else for (u in a) a[u] && (o && (o += ' '), (o += u));
  return o;
}
function qt() {
  for (var a, i, u = 0, o = '', c = arguments.length; u < c; u++)
    (a = arguments[u]) && (i = pg(a)) && (o && (o += ' '), (o += i));
  return o;
}
function b2(a = {}) {
  const { themeId: i, defaultTheme: u, defaultClassName: o = 'MuiBox-root', generateClassName: c } = a,
    f = rg('div', { shouldForwardProp: (m) => m !== 'theme' && m !== 'sx' && m !== 'as' })(bl);
  return H.forwardRef(function (y, g) {
    const S = Nf(u),
      { className: C, component: M = 'div', ...N } = Uf(y);
    return R.jsx(f, { as: M, ref: g, className: qt(C, c ? c(o) : o), theme: (i && S[i]) || S, ...N });
  });
}
const S2 = {
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
function pn(a, i, u = 'Mui') {
  const o = S2[i];
  return o ? `${u}-${o}` : `${dg.generate(a)}-${i}`;
}
function Rn(a, i, u = 'Mui') {
  const o = {};
  return (
    i.forEach((c) => {
      o[c] = pn(a, c, u);
    }),
    o
  );
}
function hg(a) {
  const { variants: i, ...u } = a,
    o = { variants: i, style: ml(u), isProcessed: !0 };
  return (
    o.style === u ||
      (i &&
        i.forEach((c) => {
          typeof c.style != 'function' && (c.style = ml(c.style));
        })),
    o
  );
}
const x2 = Br();
function ef(a) {
  return a !== 'ownerState' && a !== 'theme' && a !== 'sx' && a !== 'as';
}
function pl(a, i) {
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
function C2(a) {
  return a ? (i, u) => u[a] : null;
}
function T2(a, i, u) {
  a.theme = A2(a.theme) ? u : a.theme[i] || a.theme;
}
function au(a, i, u) {
  const o = typeof i == 'function' ? i(a) : i;
  if (Array.isArray(o)) return o.flatMap((c) => au(a, c, u));
  if (Array.isArray(o?.variants)) {
    let c;
    if (o.isProcessed) c = u ? pl(o.style, u) : o.style;
    else {
      const { variants: f, ...p } = o;
      c = u ? pl(ml(p), u) : p;
    }
    return mg(a, o.variants, [c], u);
  }
  return o?.isProcessed ? (u ? pl(ml(o.style), u) : o.style) : u ? pl(ml(o), u) : o;
}
function mg(a, i, u = [], o = void 0) {
  let c;
  t: for (let f = 0; f < i.length; f += 1) {
    const p = i[f];
    if (typeof p.props == 'function') {
      if (((c ??= { ...a, ...a.ownerState, ownerState: a.ownerState }), !p.props(c))) continue;
    } else for (const m in p.props) if (a[m] !== p.props[m] && a.ownerState?.[m] !== p.props[m]) continue t;
    typeof p.style == 'function'
      ? ((c ??= { ...a, ...a.ownerState, ownerState: a.ownerState }), u.push(o ? pl(ml(p.style(c)), o) : p.style(c)))
      : u.push(o ? pl(ml(p.style), o) : p.style);
  }
  return u;
}
function gg(a = {}) {
  const { themeId: i, defaultTheme: u = x2, rootShouldForwardProp: o = ef, slotShouldForwardProp: c = ef } = a;
  function f(m) {
    T2(m, i, u);
  }
  return (m, y = {}) => {
    gb(m, (V) => V.filter((Z) => Z !== bl));
    const { name: g, slot: S, skipVariantsResolver: C, skipSx: M, overridesResolver: N = C2(M2(S)), ...O } = y,
      E = (g && g.startsWith('Mui')) || S ? 'components' : 'custom',
      L = C !== void 0 ? C : (S && S !== 'Root' && S !== 'root') || !1,
      G = M || !1;
    let F = ef;
    S === 'Root' || S === 'root' ? (F = o) : S ? (F = c) : z2(m) && (F = void 0);
    const J = rg(m, { shouldForwardProp: F, label: E2(), ...O }),
      $ = (V) => {
        if (V.__emotion_real === V) return V;
        if (typeof V == 'function')
          return function (ot) {
            return au(ot, V, ot.theme.modularCssLayers ? E : void 0);
          };
        if (Qn(V)) {
          const Z = hg(V);
          return function (ut) {
            return Z.variants
              ? au(ut, Z, ut.theme.modularCssLayers ? E : void 0)
              : ut.theme.modularCssLayers
                ? pl(Z.style, E)
                : Z.style;
          };
        }
        return V;
      },
      U = (...V) => {
        const Z = [],
          ot = V.map($),
          ut = [];
        if (
          (Z.push(f),
          g &&
            N &&
            ut.push(function (W) {
              const et = W.theme.components?.[g]?.styleOverrides;
              if (!et) return null;
              const A = {};
              for (const K in et) A[K] = au(W, et[K], W.theme.modularCssLayers ? 'theme' : void 0);
              return N(W, A);
            }),
          g &&
            !L &&
            ut.push(function (W) {
              const et = W.theme?.components?.[g]?.variants;
              return et ? mg(W, et, [], W.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          G || ut.push(bl),
          Array.isArray(ot[0]))
        ) {
          const v = ot.shift(),
            W = new Array(Z.length).fill(''),
            Q = new Array(ut.length).fill('');
          let et;
          ((et = [...W, ...v, ...Q]), (et.raw = [...W, ...v.raw, ...Q]), Z.unshift(et));
        }
        const pt = [...Z, ...ot, ...ut],
          st = J(...pt);
        return (m.muiName && (st.muiName = m.muiName), st);
      };
    return (J.withConfig && (U.withConfig = J.withConfig), U);
  };
}
function E2(a, i) {
  return void 0;
}
function A2(a) {
  for (const i in a) return !1;
  return !0;
}
function z2(a) {
  return typeof a == 'string' && a.charCodeAt(0) > 96;
}
function M2(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const yg = gg();
function Mr(a, i, u = !1) {
  const o = { ...i };
  for (const c in a)
    if (Object.prototype.hasOwnProperty.call(a, c)) {
      const f = c;
      if (f === 'components' || f === 'slots') o[f] = { ...a[f], ...o[f] };
      else if (f === 'componentsProps' || f === 'slotProps') {
        const p = a[f],
          m = i[f];
        if (!m) o[f] = p || {};
        else if (!p) o[f] = m;
        else {
          o[f] = { ...m };
          for (const y in p)
            if (Object.prototype.hasOwnProperty.call(p, y)) {
              const g = y;
              o[f][g] = Mr(p[g], m[g], u);
            }
        }
      } else
        f === 'className' && u && i.className
          ? (o.className = qt(a?.className, i?.className))
          : f === 'style' && u && i.style
            ? (o.style = { ...a?.style, ...i?.style })
            : o[f] === void 0 && (o[f] = a[f]);
    }
  return o;
}
function O2(a) {
  const { theme: i, name: u, props: o } = a;
  return !i || !i.components || !i.components[u] || !i.components[u].defaultProps
    ? o
    : Mr(i.components[u].defaultProps, o);
}
function vg({ props: a, name: i, defaultTheme: u, themeId: o }) {
  let c = Nf(u);
  return (o && (c = c[o] || c), O2({ theme: c, name: i, props: a }));
}
const bg = typeof window < 'u' ? H.useLayoutEffect : H.useEffect;
function di(a, i = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(a, u));
}
function Hf(a, i = 0, u = 1) {
  return di(a, i, u);
}
function R2(a) {
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
function Xa(a) {
  if (a.type) return a;
  if (a.charAt(0) === '#') return Xa(R2(a));
  const i = a.indexOf('('),
    u = a.substring(0, i);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(u)) throw new Error(yl(9, a));
  let o = a.substring(i + 1, a.length - 1),
    c;
  if (u === 'color') {
    if (
      ((o = o.split(' ')),
      (c = o.shift()),
      o.length === 4 && o[3].charAt(0) === '/' && (o[3] = o[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(c))
    )
      throw new Error(yl(10, c));
  } else o = o.split(',');
  return ((o = o.map((f) => parseFloat(f))), { type: u, values: o, colorSpace: c });
}
const _2 = (a) => {
    const i = Xa(a);
    return i.values
      .slice(0, 3)
      .map((u, o) => (i.type.includes('hsl') && o !== 0 ? `${u}%` : u))
      .join(' ');
  },
  yr = (a, i) => {
    try {
      return _2(a);
    } catch {
      return a;
    }
  };
function Ou(a) {
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
function Sg(a) {
  a = Xa(a);
  const { values: i } = a,
    u = i[0],
    o = i[1] / 100,
    c = i[2] / 100,
    f = o * Math.min(c, 1 - c),
    p = (g, S = (g + u / 30) % 12) => c - f * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let m = 'rgb';
  const y = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return (a.type === 'hsla' && ((m += 'a'), y.push(i[3])), Ou({ type: m, values: y }));
}
function pf(a) {
  a = Xa(a);
  let i = a.type === 'hsl' || a.type === 'hsla' ? Xa(Sg(a)).values : a.values;
  return (
    (i = i.map((u) => (a.type !== 'color' && (u /= 255), u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3))
  );
}
function w2(a, i) {
  const u = pf(a),
    o = pf(i);
  return (Math.max(u, o) + 0.05) / (Math.min(u, o) + 0.05);
}
function su(a, i) {
  return (
    (a = Xa(a)),
    (i = Hf(i)),
    (a.type === 'rgb' || a.type === 'hsl') && (a.type += 'a'),
    a.type === 'color' ? (a.values[3] = `/${i}`) : (a.values[3] = i),
    Ou(a)
  );
}
function sl(a, i, u) {
  try {
    return su(a, i);
  } catch {
    return a;
  }
}
function Ru(a, i) {
  if (((a = Xa(a)), (i = Hf(i)), a.type.includes('hsl'))) a.values[2] *= 1 - i;
  else if (a.type.includes('rgb') || a.type.includes('color')) for (let u = 0; u < 3; u += 1) a.values[u] *= 1 - i;
  return Ou(a);
}
function Qt(a, i, u) {
  try {
    return Ru(a, i);
  } catch {
    return a;
  }
}
function _u(a, i) {
  if (((a = Xa(a)), (i = Hf(i)), a.type.includes('hsl'))) a.values[2] += (100 - a.values[2]) * i;
  else if (a.type.includes('rgb')) for (let u = 0; u < 3; u += 1) a.values[u] += (255 - a.values[u]) * i;
  else if (a.type.includes('color')) for (let u = 0; u < 3; u += 1) a.values[u] += (1 - a.values[u]) * i;
  return Ou(a);
}
function Zt(a, i, u) {
  try {
    return _u(a, i);
  } catch {
    return a;
  }
}
function D2(a, i = 0.15) {
  return pf(a) > 0.5 ? Ru(a, i) : _u(a, i);
}
function Ko(a, i, u) {
  try {
    return D2(a, i);
  } catch {
    return a;
  }
}
const B2 = H.createContext(),
  j2 = () => H.useContext(B2) ?? !1,
  N2 = H.createContext(void 0);
function U2(a) {
  const { theme: i, name: u, props: o } = a;
  if (!i || !i.components || !i.components[u]) return o;
  const c = i.components[u];
  return c.defaultProps
    ? Mr(c.defaultProps, o, i.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? Mr(c, o, i.components.mergeClassNameAndStyle)
      : o;
}
function H2({ props: a, name: i }) {
  const u = H.useContext(N2);
  return U2({ props: a, name: i, theme: { components: u } });
}
let mm = 0;
function L2(a) {
  const [i, u] = H.useState(a),
    o = a || i;
  return (
    H.useEffect(() => {
      i == null && ((mm += 1), u(`mui-${mm}`));
    }, [i]),
    o
  );
}
const k2 = { ...of },
  gm = k2.useId;
function xg(a) {
  if (gm !== void 0) {
    const i = gm();
    return a ?? i;
  }
  return L2(a);
}
const ym = { theme: void 0 };
function Y2(a) {
  let i, u;
  return function (c) {
    let f = i;
    return ((f === void 0 || c.theme !== u) && ((ym.theme = c.theme), (f = hg(a(ym))), (i = f), (u = c.theme)), f);
  };
}
function q2(a = '') {
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
const vm = (a, i, u, o = []) => {
    let c = a;
    i.forEach((f, p) => {
      p === i.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = u)
          : c && typeof c == 'object' && (c[f] = u)
        : c && typeof c == 'object' && (c[f] || (c[f] = o.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  $2 = (a, i, u) => {
    function o(c, f = [], p = []) {
      Object.entries(c).forEach(([m, y]) => {
        (!u || (u && !u([...f, m]))) &&
          y != null &&
          (typeof y == 'object' && Object.keys(y).length > 0
            ? o(y, [...f, m], Array.isArray(y) ? [...p, m] : p)
            : i([...f, m], y, p));
      });
    }
    o(a);
  },
  G2 = (a, i) =>
    typeof i == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((o) => a.includes(o)) ||
        a[a.length - 1].toLowerCase().includes('opacity')
        ? i
        : `${i}px`
      : i;
function nf(a, i) {
  const { prefix: u, shouldSkipGeneratingVar: o } = i || {},
    c = {},
    f = {},
    p = {};
  return (
    $2(
      a,
      (m, y, g) => {
        if ((typeof y == 'string' || typeof y == 'number') && (!o || !o(m, y))) {
          const S = `--${u ? `${u}-` : ''}${m.join('-')}`,
            C = G2(m, y);
          (Object.assign(c, { [S]: C }), vm(f, m, `var(${S})`, g), vm(p, m, `var(${S}, ${C})`, g));
        }
      },
      (m) => m[0] === 'vars'
    ),
    { css: c, vars: f, varsWithDefaults: p }
  );
}
function V2(a, i = {}) {
  const { getSelector: u = G, disableCssColorScheme: o, colorSchemeSelector: c, enableContrastVars: f } = i,
    { colorSchemes: p = {}, components: m, defaultColorScheme: y = 'light', ...g } = a,
    { vars: S, css: C, varsWithDefaults: M } = nf(g, i);
  let N = M;
  const O = {},
    { [y]: E, ...L } = p;
  if (
    (Object.entries(L || {}).forEach(([$, U]) => {
      const { vars: V, css: Z, varsWithDefaults: ot } = nf(U, i);
      ((N = Ve(N, ot)), (O[$] = { css: Z, vars: V }));
    }),
    E)
  ) {
    const { css: $, vars: U, varsWithDefaults: V } = nf(E, i);
    ((N = Ve(N, V)), (O[y] = { css: $, vars: U }));
  }
  function G($, U) {
    let V = c;
    if (
      (c === 'class' && (V = '.%s'),
      c === 'data' && (V = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (V = `[${c}="%s"]`),
      $)
    ) {
      if (V === 'media')
        return a.defaultColorScheme === $
          ? ':root'
          : { [`@media (prefers-color-scheme: ${p[$]?.palette?.mode || $})`]: { ':root': U } };
      if (V) return a.defaultColorScheme === $ ? `:root, ${V.replace('%s', String($))}` : V.replace('%s', String($));
    }
    return ':root';
  }
  return {
    vars: N,
    generateThemeVars: () => {
      let $ = { ...S };
      return (
        Object.entries(O).forEach(([, { vars: U }]) => {
          $ = Ve($, U);
        }),
        $
      );
    },
    generateStyleSheets: () => {
      const $ = [],
        U = a.defaultColorScheme || 'light';
      function V(ut, pt) {
        Object.keys(pt).length && $.push(typeof ut == 'string' ? { [ut]: { ...pt } } : ut);
      }
      V(u(void 0, { ...C }), C);
      const { [U]: Z, ...ot } = O;
      if (Z) {
        const { css: ut } = Z,
          pt = p[U]?.palette?.mode,
          st = !o && pt ? { colorScheme: pt, ...ut } : { ...ut };
        V(u(U, { ...st }), st);
      }
      return (
        Object.entries(ot).forEach(([ut, { css: pt }]) => {
          const st = p[ut]?.palette?.mode,
            v = !o && st ? { colorScheme: st, ...pt } : { ...pt };
          V(u(ut, { ...v }), v);
        }),
        f &&
          $.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        $
      );
    },
  };
}
function X2(a) {
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
function _n(a, i, u = void 0) {
  const o = {};
  for (const c in a) {
    const f = a[c];
    let p = '',
      m = !0;
    for (let y = 0; y < f.length; y += 1) {
      const g = f[y];
      g && ((p += (m === !0 ? '' : ' ') + i(g)), (m = !1), u && u[g] && (p += ' ' + u[g]));
    }
    o[c] = p;
  }
  return o;
}
const Q2 = Br(),
  Z2 = yg('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[`maxWidth${St(String(u.maxWidth))}`], u.fixed && i.fixed, u.disableGutters && i.disableGutters];
    },
  }),
  K2 = (a) => vg({ props: a, name: 'MuiContainer', defaultTheme: Q2 }),
  J2 = (a, i) => {
    const u = (y) => pn(i, y),
      { classes: o, fixed: c, disableGutters: f, maxWidth: p } = a,
      m = { root: ['root', p && `maxWidth${St(String(p))}`, c && 'fixed', f && 'disableGutters'] };
    return _n(m, u, o);
  };
function W2(a = {}) {
  const { createStyledComponent: i = Z2, useThemeProps: u = K2, componentName: o = 'MuiContainer' } = a,
    c = i(
      ({ theme: p, ownerState: m }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!m.disableGutters && {
          paddingLeft: p.spacing(2),
          paddingRight: p.spacing(2),
          [p.breakpoints.up('sm')]: { paddingLeft: p.spacing(3), paddingRight: p.spacing(3) },
        }),
      }),
      ({ theme: p, ownerState: m }) =>
        m.fixed &&
        Object.keys(p.breakpoints.values).reduce((y, g) => {
          const S = g,
            C = p.breakpoints.values[S];
          return (C !== 0 && (y[p.breakpoints.up(S)] = { maxWidth: `${C}${p.breakpoints.unit}` }), y);
        }, {}),
      ({ theme: p, ownerState: m }) => ({
        ...(m.maxWidth === 'xs' && { [p.breakpoints.up('xs')]: { maxWidth: Math.max(p.breakpoints.values.xs, 444) } }),
        ...(m.maxWidth &&
          m.maxWidth !== 'xs' && {
            [p.breakpoints.up(m.maxWidth)]: { maxWidth: `${p.breakpoints.values[m.maxWidth]}${p.breakpoints.unit}` },
          }),
      })
    );
  return H.forwardRef(function (m, y) {
    const g = u(m),
      {
        className: S,
        component: C = 'div',
        disableGutters: M = !1,
        fixed: N = !1,
        maxWidth: O = 'lg',
        classes: E,
        ...L
      } = g,
      G = { ...g, component: C, disableGutters: M, fixed: N, maxWidth: O },
      F = J2(G, o);
    return R.jsx(c, { as: C, ownerState: G, className: qt(F.root, S), ref: y, ...L });
  });
}
const F2 = Br(),
  P2 = yg('div', { name: 'MuiStack', slot: 'Root' });
function I2(a) {
  return vg({ props: a, name: 'MuiStack', defaultTheme: F2 });
}
function tS(a, i) {
  const u = H.Children.toArray(a).filter(Boolean);
  return u.reduce(
    (o, c, f) => (o.push(c), f < u.length - 1 && o.push(H.cloneElement(i, { key: `separator-${f}` })), o),
    []
  );
}
const eS = (a) => ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[a],
  nS = ({ ownerState: a, theme: i }) => {
    let u = {
      display: 'flex',
      flexDirection: 'column',
      ...Un({ theme: i }, tf({ values: a.direction, breakpoints: i.breakpoints.values }), (o) => ({
        flexDirection: o,
      })),
    };
    if (a.spacing) {
      const o = Cu(i),
        c = Object.keys(i.breakpoints.values).reduce(
          (y, g) => (
            ((typeof a.spacing == 'object' && a.spacing[g] != null) ||
              (typeof a.direction == 'object' && a.direction[g] != null)) &&
              (y[g] = !0),
            y
          ),
          {}
        ),
        f = tf({ values: a.direction, base: c }),
        p = tf({ values: a.spacing, base: c });
      (typeof f == 'object' &&
        Object.keys(f).forEach((y, g, S) => {
          if (!f[y]) {
            const M = g > 0 ? f[S[g - 1]] : 'column';
            f[y] = M;
          }
        }),
        (u = Ve(
          u,
          Un({ theme: i }, p, (y, g) =>
            a.useFlexGap
              ? { gap: vl(o, y) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': { [`margin${eS(g ? f[g] : a.direction)}`]: vl(o, y) },
                }
          )
        )));
    }
    return ((u = zb(i.breakpoints, u)), u);
  };
function aS(a = {}) {
  const { createStyledComponent: i = P2, useThemeProps: u = I2, componentName: o = 'MuiStack' } = a,
    c = () => _n({ root: ['root'] }, (y) => pn(o, y), {}),
    f = i(nS);
  return H.forwardRef(function (y, g) {
    const S = u(y),
      C = Uf(S),
      {
        component: M = 'div',
        direction: N = 'column',
        spacing: O = 0,
        divider: E,
        children: L,
        className: G,
        useFlexGap: F = !1,
        ...J
      } = C,
      $ = { direction: N, spacing: O, useFlexGap: F },
      U = c();
    return R.jsx(f, { as: M, ownerState: $, ref: g, className: qt(U.root, G), ...J, children: E ? tS(L, E) : L });
  });
}
function Cg() {
  return {
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Tr.white, default: Tr.white },
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
const Tg = Cg();
function Eg() {
  return {
    text: {
      primary: Tr.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Tr.white,
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
const hf = Eg();
function bm(a, i, u, o) {
  const c = o.light || o,
    f = o.dark || o * 1.5;
  a[i] ||
    (a.hasOwnProperty(u)
      ? (a[i] = a[u])
      : i === 'light'
        ? (a.light = _u(a.main, c))
        : i === 'dark' && (a.dark = Ru(a.main, f)));
}
function Sm(a, i, u, o, c) {
  const f = c.light || c,
    p = c.dark || c * 1.5;
  i[u] ||
    (i.hasOwnProperty(o)
      ? (i[u] = i[o])
      : u === 'light'
        ? (i.light = `color-mix(in ${a}, ${i.main}, #fff ${(f * 100).toFixed(0)}%)`)
        : u === 'dark' && (i.dark = `color-mix(in ${a}, ${i.main}, #000 ${(p * 100).toFixed(0)}%)`));
}
function lS(a = 'light') {
  return a === 'dark'
    ? { main: oi[200], light: oi[50], dark: oi[400] }
    : { main: oi[700], light: oi[400], dark: oi[800] };
}
function iS(a = 'light') {
  return a === 'dark'
    ? { main: ri[200], light: ri[50], dark: ri[400] }
    : { main: ri[500], light: ri[300], dark: ri[700] };
}
function rS(a = 'light') {
  return a === 'dark'
    ? { main: ii[500], light: ii[300], dark: ii[700] }
    : { main: ii[700], light: ii[400], dark: ii[800] };
}
function oS(a = 'light') {
  return a === 'dark'
    ? { main: ui[400], light: ui[300], dark: ui[700] }
    : { main: ui[700], light: ui[500], dark: ui[900] };
}
function uS(a = 'light') {
  return a === 'dark'
    ? { main: si[400], light: si[300], dark: si[700] }
    : { main: si[800], light: si[500], dark: si[900] };
}
function sS(a = 'light') {
  return a === 'dark'
    ? { main: mr[400], light: mr[300], dark: mr[700] }
    : { main: '#ed6c02', light: mr[500], dark: mr[900] };
}
function cS(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function Lf(a) {
  const { mode: i = 'light', contrastThreshold: u = 3, tonalOffset: o = 0.2, colorSpace: c, ...f } = a,
    p = a.primary || lS(i),
    m = a.secondary || iS(i),
    y = a.error || rS(i),
    g = a.info || oS(i),
    S = a.success || uS(i),
    C = a.warning || sS(i);
  function M(L) {
    return c ? cS(L) : w2(L, hf.text.primary) >= u ? hf.text.primary : Tg.text.primary;
  }
  const N = ({ color: L, name: G, mainShade: F = 500, lightShade: J = 300, darkShade: $ = 700 }) => {
    if (((L = { ...L }), !L.main && L[F] && (L.main = L[F]), !L.hasOwnProperty('main')))
      throw new Error(yl(11, G ? ` (${G})` : '', F));
    if (typeof L.main != 'string') throw new Error(yl(12, G ? ` (${G})` : '', JSON.stringify(L.main)));
    return (
      c ? (Sm(c, L, 'light', J, o), Sm(c, L, 'dark', $, o)) : (bm(L, 'light', J, o), bm(L, 'dark', $, o)),
      L.contrastText || (L.contrastText = M(L.main)),
      L
    );
  };
  let O;
  return (
    i === 'light' ? (O = Cg()) : i === 'dark' && (O = Eg()),
    Ve(
      {
        common: { ...Tr },
        mode: i,
        primary: N({ color: p, name: 'primary' }),
        secondary: N({ color: m, name: 'secondary', mainShade: 'A400', lightShade: 'A200', darkShade: 'A700' }),
        error: N({ color: y, name: 'error' }),
        warning: N({ color: C, name: 'warning' }),
        info: N({ color: g, name: 'info' }),
        success: N({ color: S, name: 'success' }),
        grey: vv,
        contrastThreshold: u,
        getContrastText: M,
        augmentColor: N,
        tonalOffset: o,
        ...O,
      },
      f
    )
  );
}
function fS(a) {
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
function dS(a, i) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [a.up('sm')]: { minHeight: 64 },
    },
    ...i,
  };
}
function pS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const xm = { textTransform: 'uppercase' },
  Cm = '"Roboto", "Helvetica", "Arial", sans-serif';
function hS(a, i) {
  const {
      fontFamily: u = Cm,
      fontSize: o = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: m = 700,
      htmlFontSize: y = 16,
      allVariants: g,
      pxToRem: S,
      ...C
    } = typeof i == 'function' ? i(a) : i,
    M = o / 14,
    N = S || ((L) => `${(L / y) * M}rem`),
    O = (L, G, F, J, $) => ({
      fontFamily: u,
      fontWeight: L,
      fontSize: N(G),
      lineHeight: F,
      ...(u === Cm ? { letterSpacing: `${pS(J / G)}em` } : {}),
      ...$,
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
      button: O(p, 14, 1.75, 0.4, xm),
      caption: O(f, 12, 1.66, 0.4),
      overline: O(f, 12, 2.66, 1, xm),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Ve(
    {
      htmlFontSize: y,
      pxToRem: N,
      fontFamily: u,
      fontSize: o,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: m,
      ...E,
    },
    C,
    { clone: !1 }
  );
}
const mS = 0.2,
  gS = 0.14,
  yS = 0.12;
function oe(...a) {
  return [
    `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${mS})`,
    `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${gS})`,
    `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${yS})`,
  ].join(',');
}
const vS = [
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
  bS = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Ag = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Tm(a) {
  return `${Math.round(a)}ms`;
}
function SS(a) {
  if (!a) return 0;
  const i = a / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function xS(a) {
  const i = { ...bS, ...a.easing },
    u = { ...Ag, ...a.duration };
  return {
    getAutoHeightDuration: SS,
    create: (c = ['all'], f = {}) => {
      const { duration: p = u.standard, easing: m = i.easeInOut, delay: y = 0, ...g } = f;
      return (Array.isArray(c) ? c : [c])
        .map((S) => `${S} ${typeof p == 'string' ? p : Tm(p)} ${m} ${typeof y == 'string' ? y : Tm(y)}`)
        .join(',');
    },
    ...a,
    easing: i,
    duration: u,
  };
}
const CS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function TS(a) {
  return (
    Qn(a) || typeof a > 'u' || typeof a == 'string' || typeof a == 'boolean' || typeof a == 'number' || Array.isArray(a)
  );
}
function zg(a = {}) {
  const i = { ...a };
  function u(o) {
    const c = Object.entries(o);
    for (let f = 0; f < c.length; f++) {
      const [p, m] = c[f];
      !TS(m) || p.startsWith('unstable_') ? delete o[p] : Qn(m) && ((o[p] = { ...m }), u(o[p]));
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
function Em(a) {
  return typeof a == 'number' ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const ES = (a) => {
  if (!Number.isNaN(+a)) return +a;
  const i = a.match(/\d*\.?\d+/g);
  if (!i) return 0;
  let u = 0;
  for (let o = 0; o < i.length; o += 1) u += +i[o];
  return u;
};
function AS(a) {
  Object.assign(a, {
    alpha(i, u) {
      const o = this || a;
      return o.colorSpace
        ? `oklch(from ${i} l c h / ${typeof u == 'string' ? `calc(${u})` : u})`
        : o.vars
          ? `rgba(${i.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof u == 'string' ? `calc(${u})` : u})`
          : su(i, ES(u));
    },
    lighten(i, u) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${i}, #fff ${Em(u)})` : _u(i, u);
    },
    darken(i, u) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${i}, #000 ${Em(u)})` : Ru(i, u);
    },
  });
}
function mf(a = {}, ...i) {
  const {
    breakpoints: u,
    mixins: o = {},
    spacing: c,
    palette: f = {},
    transitions: p = {},
    typography: m = {},
    shape: y,
    colorSpace: g,
    ...S
  } = a;
  if (a.vars && a.generateThemeVars === void 0) throw new Error(yl(20));
  const C = Lf({ ...f, colorSpace: g }),
    M = Br(a);
  let N = Ve(M, {
    mixins: dS(M.breakpoints, o),
    palette: C,
    shadows: vS.slice(),
    typography: hS(C, m),
    transitions: xS(p),
    zIndex: { ...CS },
  });
  return (
    (N = Ve(N, S)),
    (N = i.reduce((O, E) => Ve(O, E), N)),
    (N.unstable_sxConfig = { ...Dr, ...S?.unstable_sxConfig }),
    (N.unstable_sx = function (E) {
      return bl({ sx: E, theme: this });
    }),
    (N.toRuntimeSource = zg),
    AS(N),
    N
  );
}
function gf(a) {
  let i;
  return (a < 1 ? (i = 5.11916 * a ** 2) : (i = 4.5 * Math.log(a + 1) + 2), Math.round(i * 10) / 1e3);
}
const zS = [...Array(25)].map((a, i) => {
  if (i === 0) return 'none';
  const u = gf(i);
  return `linear-gradient(rgba(255 255 255 / ${u}), rgba(255 255 255 / ${u}))`;
});
function Mg(a) {
  return {
    inputPlaceholder: a === 'dark' ? 0.5 : 0.42,
    inputUnderline: a === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: a === 'dark' ? 0.2 : 0.12,
    switchTrack: a === 'dark' ? 0.3 : 0.38,
  };
}
function Og(a) {
  return a === 'dark' ? zS : [];
}
function MS(a) {
  const { palette: i = { mode: 'light' }, opacity: u, overlays: o, colorSpace: c, ...f } = a,
    p = Lf({ ...i, colorSpace: c });
  return { palette: p, opacity: { ...Mg(p.mode), ...u }, overlays: o || Og(p.mode), ...f };
}
function OS(a) {
  return (
    !!a[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!a[0].match(/sxConfig$/) ||
    (a[0] === 'palette' && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const RS = (a) => [
    ...[...Array(25)].map((i, u) => `--${a ? `${a}-` : ''}overlays-${u}`),
    `--${a ? `${a}-` : ''}palette-AppBar-darkBg`,
    `--${a ? `${a}-` : ''}palette-AppBar-darkColor`,
  ],
  _S = (a) => (i, u) => {
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
          RS(a.cssVarPrefix).forEach((m) => {
            ((p[m] = u[m]), delete u[m]);
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
function wS(a, i) {
  i.forEach((u) => {
    a[u] || (a[u] = {});
  });
}
function Y(a, i, u) {
  !a[i] && u && (a[i] = u);
}
function vr(a) {
  return typeof a != 'string' || !a.startsWith('hsl') ? a : Sg(a);
}
function pa(a, i) {
  `${i}Channel` in a || (a[`${i}Channel`] = yr(vr(a[i])));
}
function DS(a) {
  return typeof a == 'number'
    ? `${a}px`
    : typeof a == 'string' || typeof a == 'function' || Array.isArray(a)
      ? a
      : '8px';
}
const Gn = (a) => {
    try {
      return a();
    } catch {}
  },
  BS = (a = 'mui') => q2(a);
function af(a, i, u, o, c) {
  if (!u) return;
  u = u === !0 ? {} : u;
  const f = c === 'dark' ? 'dark' : 'light';
  if (!o) {
    i[c] = MS({ ...u, palette: { mode: f, ...u?.palette }, colorSpace: a });
    return;
  }
  const { palette: p, ...m } = mf({ ...o, palette: { mode: f, ...u?.palette }, colorSpace: a });
  return ((i[c] = { ...u, palette: p, opacity: { ...Mg(f), ...u?.opacity }, overlays: u?.overlays || Og(f) }), m);
}
function jS(a = {}, ...i) {
  const {
      colorSchemes: u = { light: !0 },
      defaultColorScheme: o,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      nativeColor: p = !1,
      shouldSkipGeneratingVar: m = OS,
      colorSchemeSelector: y = u.light && u.dark ? 'media' : void 0,
      rootSelector: g = ':root',
      ...S
    } = a,
    C = Object.keys(u)[0],
    M = o || (u.light && C !== 'light' ? 'light' : C),
    N = BS(f),
    { [M]: O, light: E, dark: L, ...G } = u,
    F = { ...G };
  let J = O;
  if ((((M === 'dark' && !('dark' in u)) || (M === 'light' && !('light' in u))) && (J = !0), !J))
    throw new Error(yl(21, M));
  let $;
  p && ($ = 'oklch');
  const U = af($, F, J, S, M);
  (E && !F.light && af($, F, E, void 0, 'light'), L && !F.dark && af($, F, L, void 0, 'dark'));
  let V = {
    defaultColorScheme: M,
    ...U,
    cssVarPrefix: f,
    colorSchemeSelector: y,
    rootSelector: g,
    getCssVar: N,
    colorSchemes: F,
    font: { ...fS(U.typography), ...U.font },
    spacing: DS(S.spacing),
  };
  (Object.keys(V.colorSchemes).forEach((st) => {
    const v = V.colorSchemes[st].palette,
      W = (et) => {
        const A = et.split('-'),
          K = A[1],
          I = A[2];
        return N(et, v[K][I]);
      };
    (v.mode === 'light' && (Y(v.common, 'background', '#fff'), Y(v.common, 'onBackground', '#000')),
      v.mode === 'dark' && (Y(v.common, 'background', '#000'), Y(v.common, 'onBackground', '#fff')));
    function Q(et, A, K) {
      if ($) {
        let I;
        return (
          et === sl && (I = `transparent ${((1 - K) * 100).toFixed(0)}%`),
          et === Qt && (I = `#000 ${(K * 100).toFixed(0)}%`),
          et === Zt && (I = `#fff ${(K * 100).toFixed(0)}%`),
          `color-mix(in ${$}, ${A}, ${I})`
        );
      }
      return et(A, K);
    }
    if (
      (wS(v, [
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
      (Y(v.Alert, 'errorColor', Q(Qt, v.error.light, 0.6)),
        Y(v.Alert, 'infoColor', Q(Qt, v.info.light, 0.6)),
        Y(v.Alert, 'successColor', Q(Qt, v.success.light, 0.6)),
        Y(v.Alert, 'warningColor', Q(Qt, v.warning.light, 0.6)),
        Y(v.Alert, 'errorFilledBg', W('palette-error-main')),
        Y(v.Alert, 'infoFilledBg', W('palette-info-main')),
        Y(v.Alert, 'successFilledBg', W('palette-success-main')),
        Y(v.Alert, 'warningFilledBg', W('palette-warning-main')),
        Y(
          v.Alert,
          'errorFilledColor',
          Gn(() => v.getContrastText(v.error.main))
        ),
        Y(
          v.Alert,
          'infoFilledColor',
          Gn(() => v.getContrastText(v.info.main))
        ),
        Y(
          v.Alert,
          'successFilledColor',
          Gn(() => v.getContrastText(v.success.main))
        ),
        Y(
          v.Alert,
          'warningFilledColor',
          Gn(() => v.getContrastText(v.warning.main))
        ),
        Y(v.Alert, 'errorStandardBg', Q(Zt, v.error.light, 0.9)),
        Y(v.Alert, 'infoStandardBg', Q(Zt, v.info.light, 0.9)),
        Y(v.Alert, 'successStandardBg', Q(Zt, v.success.light, 0.9)),
        Y(v.Alert, 'warningStandardBg', Q(Zt, v.warning.light, 0.9)),
        Y(v.Alert, 'errorIconColor', W('palette-error-main')),
        Y(v.Alert, 'infoIconColor', W('palette-info-main')),
        Y(v.Alert, 'successIconColor', W('palette-success-main')),
        Y(v.Alert, 'warningIconColor', W('palette-warning-main')),
        Y(v.AppBar, 'defaultBg', W('palette-grey-100')),
        Y(v.Avatar, 'defaultBg', W('palette-grey-400')),
        Y(v.Button, 'inheritContainedBg', W('palette-grey-300')),
        Y(v.Button, 'inheritContainedHoverBg', W('palette-grey-A100')),
        Y(v.Chip, 'defaultBorder', W('palette-grey-400')),
        Y(v.Chip, 'defaultAvatarColor', W('palette-grey-700')),
        Y(v.Chip, 'defaultIconColor', W('palette-grey-700')),
        Y(v.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        Y(v.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        Y(v.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        Y(v.LinearProgress, 'primaryBg', Q(Zt, v.primary.main, 0.62)),
        Y(v.LinearProgress, 'secondaryBg', Q(Zt, v.secondary.main, 0.62)),
        Y(v.LinearProgress, 'errorBg', Q(Zt, v.error.main, 0.62)),
        Y(v.LinearProgress, 'infoBg', Q(Zt, v.info.main, 0.62)),
        Y(v.LinearProgress, 'successBg', Q(Zt, v.success.main, 0.62)),
        Y(v.LinearProgress, 'warningBg', Q(Zt, v.warning.main, 0.62)),
        Y(v.Skeleton, 'bg', $ ? Q(sl, v.text.primary, 0.11) : `rgba(${W('palette-text-primaryChannel')} / 0.11)`),
        Y(v.Slider, 'primaryTrack', Q(Zt, v.primary.main, 0.62)),
        Y(v.Slider, 'secondaryTrack', Q(Zt, v.secondary.main, 0.62)),
        Y(v.Slider, 'errorTrack', Q(Zt, v.error.main, 0.62)),
        Y(v.Slider, 'infoTrack', Q(Zt, v.info.main, 0.62)),
        Y(v.Slider, 'successTrack', Q(Zt, v.success.main, 0.62)),
        Y(v.Slider, 'warningTrack', Q(Zt, v.warning.main, 0.62)));
      const et = $ ? Q(Qt, v.background.default, 0.6825) : Ko(v.background.default, 0.8);
      (Y(v.SnackbarContent, 'bg', et),
        Y(
          v.SnackbarContent,
          'color',
          Gn(() => ($ ? hf.text.primary : v.getContrastText(et)))
        ),
        Y(v.SpeedDialAction, 'fabHoverBg', Ko(v.background.paper, 0.15)),
        Y(v.StepConnector, 'border', W('palette-grey-400')),
        Y(v.StepContent, 'border', W('palette-grey-400')),
        Y(v.Switch, 'defaultColor', W('palette-common-white')),
        Y(v.Switch, 'defaultDisabledColor', W('palette-grey-100')),
        Y(v.Switch, 'primaryDisabledColor', Q(Zt, v.primary.main, 0.62)),
        Y(v.Switch, 'secondaryDisabledColor', Q(Zt, v.secondary.main, 0.62)),
        Y(v.Switch, 'errorDisabledColor', Q(Zt, v.error.main, 0.62)),
        Y(v.Switch, 'infoDisabledColor', Q(Zt, v.info.main, 0.62)),
        Y(v.Switch, 'successDisabledColor', Q(Zt, v.success.main, 0.62)),
        Y(v.Switch, 'warningDisabledColor', Q(Zt, v.warning.main, 0.62)),
        Y(v.TableCell, 'border', Q(Zt, Q(sl, v.divider, 1), 0.88)),
        Y(v.Tooltip, 'bg', Q(sl, v.grey[700], 0.92)));
    }
    if (v.mode === 'dark') {
      (Y(v.Alert, 'errorColor', Q(Zt, v.error.light, 0.6)),
        Y(v.Alert, 'infoColor', Q(Zt, v.info.light, 0.6)),
        Y(v.Alert, 'successColor', Q(Zt, v.success.light, 0.6)),
        Y(v.Alert, 'warningColor', Q(Zt, v.warning.light, 0.6)),
        Y(v.Alert, 'errorFilledBg', W('palette-error-dark')),
        Y(v.Alert, 'infoFilledBg', W('palette-info-dark')),
        Y(v.Alert, 'successFilledBg', W('palette-success-dark')),
        Y(v.Alert, 'warningFilledBg', W('palette-warning-dark')),
        Y(
          v.Alert,
          'errorFilledColor',
          Gn(() => v.getContrastText(v.error.dark))
        ),
        Y(
          v.Alert,
          'infoFilledColor',
          Gn(() => v.getContrastText(v.info.dark))
        ),
        Y(
          v.Alert,
          'successFilledColor',
          Gn(() => v.getContrastText(v.success.dark))
        ),
        Y(
          v.Alert,
          'warningFilledColor',
          Gn(() => v.getContrastText(v.warning.dark))
        ),
        Y(v.Alert, 'errorStandardBg', Q(Qt, v.error.light, 0.9)),
        Y(v.Alert, 'infoStandardBg', Q(Qt, v.info.light, 0.9)),
        Y(v.Alert, 'successStandardBg', Q(Qt, v.success.light, 0.9)),
        Y(v.Alert, 'warningStandardBg', Q(Qt, v.warning.light, 0.9)),
        Y(v.Alert, 'errorIconColor', W('palette-error-main')),
        Y(v.Alert, 'infoIconColor', W('palette-info-main')),
        Y(v.Alert, 'successIconColor', W('palette-success-main')),
        Y(v.Alert, 'warningIconColor', W('palette-warning-main')),
        Y(v.AppBar, 'defaultBg', W('palette-grey-900')),
        Y(v.AppBar, 'darkBg', W('palette-background-paper')),
        Y(v.AppBar, 'darkColor', W('palette-text-primary')),
        Y(v.Avatar, 'defaultBg', W('palette-grey-600')),
        Y(v.Button, 'inheritContainedBg', W('palette-grey-800')),
        Y(v.Button, 'inheritContainedHoverBg', W('palette-grey-700')),
        Y(v.Chip, 'defaultBorder', W('palette-grey-700')),
        Y(v.Chip, 'defaultAvatarColor', W('palette-grey-300')),
        Y(v.Chip, 'defaultIconColor', W('palette-grey-300')),
        Y(v.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        Y(v.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        Y(v.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        Y(v.LinearProgress, 'primaryBg', Q(Qt, v.primary.main, 0.5)),
        Y(v.LinearProgress, 'secondaryBg', Q(Qt, v.secondary.main, 0.5)),
        Y(v.LinearProgress, 'errorBg', Q(Qt, v.error.main, 0.5)),
        Y(v.LinearProgress, 'infoBg', Q(Qt, v.info.main, 0.5)),
        Y(v.LinearProgress, 'successBg', Q(Qt, v.success.main, 0.5)),
        Y(v.LinearProgress, 'warningBg', Q(Qt, v.warning.main, 0.5)),
        Y(v.Skeleton, 'bg', $ ? Q(sl, v.text.primary, 0.13) : `rgba(${W('palette-text-primaryChannel')} / 0.13)`),
        Y(v.Slider, 'primaryTrack', Q(Qt, v.primary.main, 0.5)),
        Y(v.Slider, 'secondaryTrack', Q(Qt, v.secondary.main, 0.5)),
        Y(v.Slider, 'errorTrack', Q(Qt, v.error.main, 0.5)),
        Y(v.Slider, 'infoTrack', Q(Qt, v.info.main, 0.5)),
        Y(v.Slider, 'successTrack', Q(Qt, v.success.main, 0.5)),
        Y(v.Slider, 'warningTrack', Q(Qt, v.warning.main, 0.5)));
      const et = $ ? Q(Zt, v.background.default, 0.985) : Ko(v.background.default, 0.98);
      (Y(v.SnackbarContent, 'bg', et),
        Y(
          v.SnackbarContent,
          'color',
          Gn(() => ($ ? Tg.text.primary : v.getContrastText(et)))
        ),
        Y(v.SpeedDialAction, 'fabHoverBg', Ko(v.background.paper, 0.15)),
        Y(v.StepConnector, 'border', W('palette-grey-600')),
        Y(v.StepContent, 'border', W('palette-grey-600')),
        Y(v.Switch, 'defaultColor', W('palette-grey-300')),
        Y(v.Switch, 'defaultDisabledColor', W('palette-grey-600')),
        Y(v.Switch, 'primaryDisabledColor', Q(Qt, v.primary.main, 0.55)),
        Y(v.Switch, 'secondaryDisabledColor', Q(Qt, v.secondary.main, 0.55)),
        Y(v.Switch, 'errorDisabledColor', Q(Qt, v.error.main, 0.55)),
        Y(v.Switch, 'infoDisabledColor', Q(Qt, v.info.main, 0.55)),
        Y(v.Switch, 'successDisabledColor', Q(Qt, v.success.main, 0.55)),
        Y(v.Switch, 'warningDisabledColor', Q(Qt, v.warning.main, 0.55)),
        Y(v.TableCell, 'border', Q(Qt, Q(sl, v.divider, 1), 0.68)),
        Y(v.Tooltip, 'bg', Q(sl, v.grey[700], 0.92)));
    }
    (pa(v.background, 'default'),
      pa(v.background, 'paper'),
      pa(v.common, 'background'),
      pa(v.common, 'onBackground'),
      pa(v, 'divider'),
      Object.keys(v).forEach((et) => {
        const A = v[et];
        et !== 'tonalOffset' &&
          A &&
          typeof A == 'object' &&
          (A.main && Y(v[et], 'mainChannel', yr(vr(A.main))),
          A.light && Y(v[et], 'lightChannel', yr(vr(A.light))),
          A.dark && Y(v[et], 'darkChannel', yr(vr(A.dark))),
          A.contrastText && Y(v[et], 'contrastTextChannel', yr(vr(A.contrastText))),
          et === 'text' && (pa(v[et], 'primary'), pa(v[et], 'secondary')),
          et === 'action' && (A.active && pa(v[et], 'active'), A.selected && pa(v[et], 'selected')));
      }));
  }),
    (V = i.reduce((st, v) => Ve(st, v), V)));
  const Z = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: m,
      getSelector: _S(V),
      enableContrastVars: p,
    },
    { vars: ot, generateThemeVars: ut, generateStyleSheets: pt } = V2(V, Z);
  return (
    (V.vars = ot),
    Object.entries(V.colorSchemes[V.defaultColorScheme]).forEach(([st, v]) => {
      V[st] = v;
    }),
    (V.generateThemeVars = ut),
    (V.generateStyleSheets = pt),
    (V.generateSpacing = function () {
      return fg(S.spacing, Cu(this));
    }),
    (V.getColorSchemeSelector = X2(y)),
    (V.spacing = V.generateSpacing()),
    (V.shouldSkipGeneratingVar = m),
    (V.unstable_sxConfig = { ...Dr, ...S?.unstable_sxConfig }),
    (V.unstable_sx = function (v) {
      return bl({ sx: v, theme: this });
    }),
    (V.toRuntimeSource = zg),
    V
  );
}
function Am(a, i, u) {
  a.colorSchemes &&
    u &&
    (a.colorSchemes[i] = { ...(u !== !0 && u), palette: Lf({ ...(u === !0 ? {} : u.palette), mode: i }) });
}
function Rg(a = {}, ...i) {
  const {
      palette: u,
      cssVariables: o = !1,
      colorSchemes: c = u ? void 0 : { light: !0 },
      defaultColorScheme: f = u?.mode,
      ...p
    } = a,
    m = f || 'light',
    y = c?.[m],
    g = { ...c, ...(u ? { [m]: { ...(typeof y != 'boolean' && y), palette: u } } : void 0) };
  if (o === !1) {
    if (!('colorSchemes' in a)) return mf(a, ...i);
    let S = u;
    'palette' in a || (g[m] && (g[m] !== !0 ? (S = g[m].palette) : m === 'dark' && (S = { mode: 'dark' })));
    const C = mf({ ...a, palette: S }, ...i);
    return (
      (C.defaultColorScheme = m),
      (C.colorSchemes = g),
      C.palette.mode === 'light' &&
        ((C.colorSchemes.light = { ...(g.light !== !0 && g.light), palette: C.palette }), Am(C, 'dark', g.dark)),
      C.palette.mode === 'dark' &&
        ((C.colorSchemes.dark = { ...(g.dark !== !0 && g.dark), palette: C.palette }), Am(C, 'light', g.light)),
      C
    );
  }
  return (
    !u && !('light' in g) && m === 'light' && (g.light = !0),
    jS({ ...p, colorSchemes: g, defaultColorScheme: m, ...(typeof o != 'boolean' && o) }, ...i)
  );
}
const _g = Rg();
function wg() {
  const a = Nf(_g);
  return a[Ef] || a;
}
function kf(a) {
  return a !== 'ownerState' && a !== 'theme' && a !== 'sx' && a !== 'as';
}
const Dg = (a) => kf(a) && a !== 'classes',
  Gt = gg({ themeId: Ef, defaultTheme: _g, rootShouldForwardProp: Dg });
function NS() {
  return Uf;
}
const Ue = Y2;
function hn(a) {
  return H2(a);
}
function lu(a) {
  return (a && a.ownerDocument) || document;
}
function US(a) {
  const { controlled: i, default: u } = a,
    { current: o } = H.useRef(i !== void 0),
    [c, f] = H.useState(u),
    p = o ? i : c,
    m = H.useCallback((y) => {
      o || f(y);
    }, []);
  return [p, m];
}
function gl(a) {
  const i = H.useRef(a);
  return (
    bg(() => {
      i.current = a;
    }),
    H.useRef((...u) => (0, i.current)(...u)).current
  );
}
function vi(...a) {
  const i = H.useRef(void 0),
    u = H.useCallback((o) => {
      const c = a.map((f) => {
        if (f == null) return null;
        if (typeof f == 'function') {
          const p = f,
            m = p(o);
          return typeof m == 'function'
            ? m
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
function Bg(a, i) {
  if (a == null) return {};
  var u = {};
  for (var o in a)
    if ({}.hasOwnProperty.call(a, o)) {
      if (i.indexOf(o) !== -1) continue;
      u[o] = a[o];
    }
  return u;
}
function yf(a, i) {
  return (
    (yf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (u, o) {
          return ((u.__proto__ = o), u);
        }),
    yf(a, i)
  );
}
function jg(a, i) {
  ((a.prototype = Object.create(i.prototype)), (a.prototype.constructor = a), yf(a, i));
}
var HS = Xm();
const Jo = Vm(HS),
  zm = { disabled: !1 },
  cu = Ne.createContext(null);
var LS = function (i) {
    return i.scrollTop;
  },
  br = 'unmounted',
  fl = 'exited',
  dl = 'entering',
  pi = 'entered',
  vf = 'exiting',
  ga = (function (a) {
    jg(i, a);
    function i(o, c) {
      var f;
      f = a.call(this, o, c) || this;
      var p = c,
        m = p && !p.isMounting ? o.enter : o.appear,
        y;
      return (
        (f.appearStatus = null),
        o.in
          ? m
            ? ((y = fl), (f.appearStatus = dl))
            : (y = pi)
          : o.unmountOnExit || o.mountOnEnter
            ? (y = br)
            : (y = fl),
        (f.state = { status: y }),
        (f.nextCallback = null),
        f
      );
    }
    i.getDerivedStateFromProps = function (c, f) {
      var p = c.in;
      return p && f.status === br ? { status: fl } : null;
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
          this.props.in ? p !== dl && p !== pi && (f = dl) : (p === dl || p === pi) && (f = vf);
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
          m;
        return (
          (f = p = m = c),
          c != null && typeof c != 'number' && ((f = c.exit), (p = c.enter), (m = c.appear !== void 0 ? c.appear : p)),
          { exit: f, enter: p, appear: m }
        );
      }),
      (u.updateStatus = function (c, f) {
        if ((c === void 0 && (c = !1), f !== null))
          if ((this.cancelNextCallback(), f === dl)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var p = this.props.nodeRef ? this.props.nodeRef.current : Jo.findDOMNode(this);
              p && LS(p);
            }
            this.performEnter(c);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === fl && this.setState({ status: br });
      }),
      (u.performEnter = function (c) {
        var f = this,
          p = this.props.enter,
          m = this.context ? this.context.isMounting : c,
          y = this.props.nodeRef ? [m] : [Jo.findDOMNode(this), m],
          g = y[0],
          S = y[1],
          C = this.getTimeouts(),
          M = m ? C.appear : C.enter;
        if ((!c && !p) || zm.disabled) {
          this.safeSetState({ status: pi }, function () {
            f.props.onEntered(g);
          });
          return;
        }
        (this.props.onEnter(g, S),
          this.safeSetState({ status: dl }, function () {
            (f.props.onEntering(g, S),
              f.onTransitionEnd(M, function () {
                f.safeSetState({ status: pi }, function () {
                  f.props.onEntered(g, S);
                });
              }));
          }));
      }),
      (u.performExit = function () {
        var c = this,
          f = this.props.exit,
          p = this.getTimeouts(),
          m = this.props.nodeRef ? void 0 : Jo.findDOMNode(this);
        if (!f || zm.disabled) {
          this.safeSetState({ status: fl }, function () {
            c.props.onExited(m);
          });
          return;
        }
        (this.props.onExit(m),
          this.safeSetState({ status: vf }, function () {
            (c.props.onExiting(m),
              c.onTransitionEnd(p.exit, function () {
                c.safeSetState({ status: fl }, function () {
                  c.props.onExited(m);
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
          (this.nextCallback = function (m) {
            p && ((p = !1), (f.nextCallback = null), c(m));
          }),
          (this.nextCallback.cancel = function () {
            p = !1;
          }),
          this.nextCallback
        );
      }),
      (u.onTransitionEnd = function (c, f) {
        this.setNextCallback(f);
        var p = this.props.nodeRef ? this.props.nodeRef.current : Jo.findDOMNode(this),
          m = c == null && !this.props.addEndListener;
        if (!p || m) {
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
        if (c === br) return null;
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
        var m = Bg(f, [
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
        return Ne.createElement(
          cu.Provider,
          { value: null },
          typeof p == 'function' ? p(c, m) : Ne.cloneElement(Ne.Children.only(p), m)
        );
      }),
      i
    );
  })(Ne.Component);
ga.contextType = cu;
ga.propTypes = {};
function ci() {}
ga.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ci,
  onEntering: ci,
  onEntered: ci,
  onExit: ci,
  onExiting: ci,
  onExited: ci,
};
ga.UNMOUNTED = br;
ga.EXITED = fl;
ga.ENTERING = dl;
ga.ENTERED = pi;
ga.EXITING = vf;
function kS(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Yf(a, i) {
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
    m = {};
  for (var y in i) {
    if (o[y])
      for (p = 0; p < o[y].length; p++) {
        var g = o[y][p];
        m[o[y][p]] = u(g);
      }
    m[y] = u(y);
  }
  for (p = 0; p < c.length; p++) m[c[p]] = u(c[p]);
  return m;
}
function hl(a, i, u) {
  return u[i] != null ? u[i] : a.props[i];
}
function qS(a, i) {
  return Yf(a.children, function (u) {
    return H.cloneElement(u, {
      onExited: i.bind(null, u),
      in: !0,
      appear: hl(u, 'appear', a),
      enter: hl(u, 'enter', a),
      exit: hl(u, 'exit', a),
    });
  });
}
function $S(a, i, u) {
  var o = Yf(a.children),
    c = YS(i, o);
  return (
    Object.keys(c).forEach(function (f) {
      var p = c[f];
      if (H.isValidElement(p)) {
        var m = f in i,
          y = f in o,
          g = i[f],
          S = H.isValidElement(g) && !g.props.in;
        y && (!m || S)
          ? (c[f] = H.cloneElement(p, {
              onExited: u.bind(null, p),
              in: !0,
              exit: hl(p, 'exit', a),
              enter: hl(p, 'enter', a),
            }))
          : !y && m && !S
            ? (c[f] = H.cloneElement(p, { in: !1 }))
            : y &&
              m &&
              H.isValidElement(g) &&
              (c[f] = H.cloneElement(p, {
                onExited: u.bind(null, p),
                in: g.props.in,
                exit: hl(p, 'exit', a),
                enter: hl(p, 'enter', a),
              }));
      }
    }),
    c
  );
}
var GS =
    Object.values ||
    function (a) {
      return Object.keys(a).map(function (i) {
        return a[i];
      });
    },
  VS = {
    component: 'div',
    childFactory: function (i) {
      return i;
    },
  },
  qf = (function (a) {
    jg(i, a);
    function i(o, c) {
      var f;
      f = a.call(this, o, c) || this;
      var p = f.handleExited.bind(kS(f));
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
          m = f.handleExited,
          y = f.firstRender;
        return { children: y ? qS(c, m) : $S(c, p, m), firstRender: !1 };
      }),
      (u.handleExited = function (c, f) {
        var p = Yf(this.props.children);
        c.key in p ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (m) {
              var y = ru({}, m.children);
              return (delete y[c.key], { children: y });
            }));
      }),
      (u.render = function () {
        var c = this.props,
          f = c.component,
          p = c.childFactory,
          m = Bg(c, ['component', 'childFactory']),
          y = this.state.contextValue,
          g = GS(this.state.children).map(p);
        return (
          delete m.appear,
          delete m.enter,
          delete m.exit,
          f === null
            ? Ne.createElement(cu.Provider, { value: y }, g)
            : Ne.createElement(cu.Provider, { value: y }, Ne.createElement(f, m, g))
        );
      }),
      i
    );
  })(Ne.Component);
qf.propTypes = {};
qf.defaultProps = VS;
const Mm = {};
function Ng(a, i) {
  const u = H.useRef(Mm);
  return (u.current === Mm && (u.current = a(i)), u);
}
const XS = [];
function QS(a) {
  H.useEffect(a, XS);
}
class $f {
  static create() {
    return new $f();
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
function Ug() {
  const a = Ng($f.create).current;
  return (QS(a.disposeEffect), a);
}
function Om(a, i) {
  const { timeout: u, easing: o, style: c = {} } = a;
  return {
    duration: c.transitionDuration ?? (typeof u == 'number' ? u : u[i.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof o == 'object' ? o[i.mode] : o),
    delay: c.transitionDelay,
  };
}
function xr(a) {
  return typeof a == 'string';
}
function Hg(a, i, u) {
  return a === void 0 || xr(a) ? i : { ...i, ownerState: { ...i.ownerState, ...u } };
}
function Lg(a, i, u) {
  return typeof a == 'function' ? a(i, u) : a;
}
function iu(a, i = []) {
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
function Rm(a) {
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
function kg(a) {
  const { getSlotProps: i, additionalProps: u, externalSlotProps: o, externalForwardedProps: c, className: f } = a;
  if (!i) {
    const N = qt(u?.className, f, c?.className, o?.className),
      O = { ...u?.style, ...c?.style, ...o?.style },
      E = { ...u, ...c, ...o };
    return (
      N.length > 0 && (E.className = N),
      Object.keys(O).length > 0 && (E.style = O),
      { props: E, internalRef: void 0 }
    );
  }
  const p = iu({ ...c, ...o }),
    m = Rm(o),
    y = Rm(c),
    g = i(p),
    S = qt(g?.className, u?.className, f, c?.className, o?.className),
    C = { ...g?.style, ...u?.style, ...c?.style, ...o?.style },
    M = { ...g, ...u, ...y, ...m };
  return (
    S.length > 0 && (M.className = S),
    Object.keys(C).length > 0 && (M.style = C),
    { props: M, internalRef: g.ref }
  );
}
function lf(a, i) {
  const {
      className: u,
      elementType: o,
      ownerState: c,
      externalForwardedProps: f,
      internalForwardedProps: p,
      shouldForwardComponentProp: m = !1,
      ...y
    } = i,
    { component: g, slots: S = { [a]: void 0 }, slotProps: C = { [a]: void 0 }, ...M } = f,
    N = S[a] || o,
    O = Lg(C[a], c),
    {
      props: { component: E, ...L },
      internalRef: G,
    } = kg({ className: u, ...y, externalForwardedProps: a === 'root' ? M : void 0, externalSlotProps: O }),
    F = vi(G, O?.ref, i.ref),
    J = a === 'root' ? E || g : E,
    $ = Hg(
      N,
      {
        ...(a === 'root' && !g && !S[a] && p),
        ...(a !== 'root' && !S[a] && p),
        ...L,
        ...(J && !m && { as: J }),
        ...(J && m && { component: J }),
        ref: F,
      },
      c
    );
  return [N, $];
}
function ZS(a) {
  return pn('MuiCollapse', a);
}
Rn('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
const KS = (a) => {
    const { orientation: i, classes: u } = a,
      o = {
        root: ['root', `${i}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${i}`],
        wrapperInner: ['wrapperInner', `${i}`],
      };
    return _n(o, ZS, u);
  },
  JS = Gt('div', {
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
    Ue(({ theme: a }) => ({
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
  WS = Gt('div', { name: 'MuiCollapse', slot: 'Wrapper' })({
    display: 'flex',
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  FS = Gt('div', { name: 'MuiCollapse', slot: 'WrapperInner' })({
    width: '100%',
    variants: [{ props: { orientation: 'horizontal' }, style: { width: 'auto', height: '100%' } }],
  }),
  Or = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiCollapse' }),
      {
        addEndListener: c,
        children: f,
        className: p,
        collapsedSize: m = '0px',
        component: y,
        easing: g,
        in: S,
        onEnter: C,
        onEntered: M,
        onEntering: N,
        onExit: O,
        onExited: E,
        onExiting: L,
        orientation: G = 'vertical',
        slots: F = {},
        slotProps: J = {},
        style: $,
        timeout: U = Ag.standard,
        TransitionComponent: V = ga,
        ...Z
      } = o,
      ot = { ...o, orientation: G, collapsedSize: m },
      ut = KS(ot),
      pt = wg(),
      st = Ug(),
      v = H.useRef(null),
      W = H.useRef(),
      Q = typeof m == 'number' ? `${m}px` : m,
      et = G === 'horizontal',
      A = et ? 'width' : 'height',
      K = H.useRef(null),
      I = vi(u, K),
      it = (Tt) => (se) => {
        if (Tt) {
          const Bt = K.current;
          se === void 0 ? Tt(Bt) : Tt(Bt, se);
        }
      },
      yt = () => (v.current ? v.current[et ? 'clientWidth' : 'clientHeight'] : 0),
      b = it((Tt, se) => {
        (v.current && et && (v.current.style.position = 'absolute'), (Tt.style[A] = Q), C && C(Tt, se));
      }),
      B = it((Tt, se) => {
        const Bt = yt();
        v.current && et && (v.current.style.position = '');
        const { duration: le, easing: Ye } = Om({ style: $, timeout: U, easing: g }, { mode: 'enter' });
        if (U === 'auto') {
          const Xe = pt.transitions.getAutoHeightDuration(Bt);
          ((Tt.style.transitionDuration = `${Xe}ms`), (W.current = Xe));
        } else Tt.style.transitionDuration = typeof le == 'string' ? le : `${le}ms`;
        ((Tt.style[A] = `${Bt}px`), (Tt.style.transitionTimingFunction = Ye), N && N(Tt, se));
      }),
      P = it((Tt, se) => {
        ((Tt.style[A] = 'auto'), M && M(Tt, se));
      }),
      tt = it((Tt) => {
        ((Tt.style[A] = `${yt()}px`), O && O(Tt));
      }),
      ft = it(E),
      ht = it((Tt) => {
        const se = yt(),
          { duration: Bt, easing: le } = Om({ style: $, timeout: U, easing: g }, { mode: 'exit' });
        if (U === 'auto') {
          const Ye = pt.transitions.getAutoHeightDuration(se);
          ((Tt.style.transitionDuration = `${Ye}ms`), (W.current = Ye));
        } else Tt.style.transitionDuration = typeof Bt == 'string' ? Bt : `${Bt}ms`;
        ((Tt.style[A] = Q), (Tt.style.transitionTimingFunction = le), L && L(Tt));
      }),
      vt = (Tt) => {
        (U === 'auto' && st.start(W.current || 0, Tt), c && c(K.current, Tt));
      },
      jt = { slots: F, slotProps: J, component: y },
      [Nt, Ee] = lf('root', {
        ref: I,
        className: qt(ut.root, p),
        elementType: JS,
        externalForwardedProps: jt,
        ownerState: ot,
        additionalProps: { style: { [et ? 'minWidth' : 'minHeight']: Q, ...$ } },
      }),
      [He, Ae] = lf('wrapper', {
        ref: v,
        className: ut.wrapper,
        elementType: WS,
        externalForwardedProps: jt,
        ownerState: ot,
      }),
      [ue, he] = lf('wrapperInner', {
        className: ut.wrapperInner,
        elementType: FS,
        externalForwardedProps: jt,
        ownerState: ot,
      });
    return R.jsx(V, {
      in: S,
      onEnter: b,
      onEntered: P,
      onEntering: B,
      onExit: tt,
      onExited: ft,
      onExiting: ht,
      addEndListener: vt,
      nodeRef: K,
      timeout: U === 'auto' ? null : U,
      ...Z,
      children: (Tt, { ownerState: se, ...Bt }) => {
        const le = { ...ot, state: Tt };
        return R.jsx(Nt, {
          ...Ee,
          className: qt(Ee.className, { entered: ut.entered, exited: !S && Q === '0px' && ut.hidden }[Tt]),
          ownerState: le,
          ...Bt,
          children: R.jsx(He, { ...Ae, ownerState: le, children: R.jsx(ue, { ...he, ownerState: le, children: f }) }),
        });
      },
    });
  });
Or && (Or.muiSupportAuto = !0);
function PS(a) {
  return pn('MuiPaper', a);
}
Rn('MuiPaper', [
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
const IS = (a) => {
    const { square: i, elevation: u, variant: o, classes: c } = a,
      f = { root: ['root', o, !i && 'rounded', o === 'elevation' && `elevation${u}`] };
    return _n(f, PS, c);
  },
  t5 = Gt('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[u.variant], !u.square && i.rounded, u.variant === 'elevation' && i[`elevation${u.elevation}`]];
    },
  })(
    Ue(({ theme: a }) => ({
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
  Yg = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiPaper' }),
      c = wg(),
      { className: f, component: p = 'div', elevation: m = 1, square: y = !1, variant: g = 'elevation', ...S } = o,
      C = { ...o, component: p, elevation: m, square: y, variant: g },
      M = IS(C);
    return R.jsx(t5, {
      as: p,
      ownerState: C,
      className: qt(M.root, f),
      ref: u,
      ...S,
      style: {
        ...(g === 'elevation' && {
          '--Paper-shadow': (c.vars || c).shadows[m],
          ...(c.vars && { '--Paper-overlay': c.vars.overlays?.[m] }),
          ...(!c.vars &&
            c.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${su('#fff', gf(m))}, ${su('#fff', gf(m))})`,
            }),
        }),
        ...S.style,
      },
    });
  });
function fu(a) {
  try {
    return a.matches(':focus-visible');
  } catch {}
  return !1;
}
class du {
  static create() {
    return new du();
  }
  static use() {
    const i = Ng(du.create).current,
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
      this.mounted || ((this.mounted = n5()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
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
function e5() {
  return du.use();
}
function n5() {
  let a, i;
  const u = new Promise((o, c) => {
    ((a = o), (i = c));
  });
  return ((u.resolve = a), (u.reject = i), u);
}
function a5(a) {
  const {
      className: i,
      classes: u,
      pulsate: o = !1,
      rippleX: c,
      rippleY: f,
      rippleSize: p,
      in: m,
      onExited: y,
      timeout: g,
    } = a,
    [S, C] = H.useState(!1),
    M = qt(i, u.ripple, u.rippleVisible, o && u.ripplePulsate),
    N = { width: p, height: p, top: -(p / 2) + f, left: -(p / 2) + c },
    O = qt(u.child, S && u.childLeaving, o && u.childPulsate);
  return (
    !m && !S && C(!0),
    H.useEffect(() => {
      if (!m && y != null) {
        const E = setTimeout(y, g);
        return () => {
          clearTimeout(E);
        };
      }
    }, [y, m, g]),
    R.jsx('span', { className: M, style: N, children: R.jsx('span', { className: O }) })
  );
}
const An = Rn('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  bf = 550,
  l5 = 80,
  i5 = _r`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  r5 = _r`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  o5 = _r`
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
  u5 = Gt('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  s5 = Gt(a5, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${An.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${i5};
    animation-duration: ${bf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  &.${An.ripplePulsate} {
    animation-duration: ${({ theme: a }) => a.transitions.duration.shorter}ms;
  }

  & .${An.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${An.childLeaving} {
    opacity: 0;
    animation-name: ${r5};
    animation-duration: ${bf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  & .${An.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${o5};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  c5 = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiTouchRipple' }),
      { center: c = !1, classes: f = {}, className: p, ...m } = o,
      [y, g] = H.useState([]),
      S = H.useRef(0),
      C = H.useRef(null);
    H.useEffect(() => {
      C.current && (C.current(), (C.current = null));
    }, [y]);
    const M = H.useRef(!1),
      N = Ug(),
      O = H.useRef(null),
      E = H.useRef(null),
      L = H.useCallback(
        ($) => {
          const { pulsate: U, rippleX: V, rippleY: Z, rippleSize: ot, cb: ut } = $;
          (g((pt) => [
            ...pt,
            R.jsx(
              s5,
              {
                classes: {
                  ripple: qt(f.ripple, An.ripple),
                  rippleVisible: qt(f.rippleVisible, An.rippleVisible),
                  ripplePulsate: qt(f.ripplePulsate, An.ripplePulsate),
                  child: qt(f.child, An.child),
                  childLeaving: qt(f.childLeaving, An.childLeaving),
                  childPulsate: qt(f.childPulsate, An.childPulsate),
                },
                timeout: bf,
                pulsate: U,
                rippleX: V,
                rippleY: Z,
                rippleSize: ot,
              },
              S.current
            ),
          ]),
            (S.current += 1),
            (C.current = ut));
        },
        [f]
      ),
      G = H.useCallback(
        ($ = {}, U = {}, V = () => {}) => {
          const { pulsate: Z = !1, center: ot = c || U.pulsate, fakeElement: ut = !1 } = U;
          if ($?.type === 'mousedown' && M.current) {
            M.current = !1;
            return;
          }
          $?.type === 'touchstart' && (M.current = !0);
          const pt = ut ? null : E.current,
            st = pt ? pt.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let v, W, Q;
          if (ot || $ === void 0 || ($.clientX === 0 && $.clientY === 0) || (!$.clientX && !$.touches))
            ((v = Math.round(st.width / 2)), (W = Math.round(st.height / 2)));
          else {
            const { clientX: et, clientY: A } = $.touches && $.touches.length > 0 ? $.touches[0] : $;
            ((v = Math.round(et - st.left)), (W = Math.round(A - st.top)));
          }
          if (ot) ((Q = Math.sqrt((2 * st.width ** 2 + st.height ** 2) / 3)), Q % 2 === 0 && (Q += 1));
          else {
            const et = Math.max(Math.abs((pt ? pt.clientWidth : 0) - v), v) * 2 + 2,
              A = Math.max(Math.abs((pt ? pt.clientHeight : 0) - W), W) * 2 + 2;
            Q = Math.sqrt(et ** 2 + A ** 2);
          }
          $?.touches
            ? O.current === null &&
              ((O.current = () => {
                L({ pulsate: Z, rippleX: v, rippleY: W, rippleSize: Q, cb: V });
              }),
              N.start(l5, () => {
                O.current && (O.current(), (O.current = null));
              }))
            : L({ pulsate: Z, rippleX: v, rippleY: W, rippleSize: Q, cb: V });
        },
        [c, L, N]
      ),
      F = H.useCallback(() => {
        G({}, { pulsate: !0 });
      }, [G]),
      J = H.useCallback(
        ($, U) => {
          if ((N.clear(), $?.type === 'touchend' && O.current)) {
            (O.current(),
              (O.current = null),
              N.start(0, () => {
                J($, U);
              }));
            return;
          }
          ((O.current = null), g((V) => (V.length > 0 ? V.slice(1) : V)), (C.current = U));
        },
        [N]
      );
    return (
      H.useImperativeHandle(u, () => ({ pulsate: F, start: G, stop: J }), [F, G, J]),
      R.jsx(u5, {
        className: qt(An.root, f.root, p),
        ref: E,
        ...m,
        children: R.jsx(qf, { component: null, exit: !0, children: y }),
      })
    );
  });
function f5(a) {
  return pn('MuiButtonBase', a);
}
const d5 = Rn('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  p5 = (a) => {
    const { disabled: i, focusVisible: u, focusVisibleClassName: o, classes: c } = a,
      p = _n({ root: ['root', i && 'disabled', u && 'focusVisible'] }, f5, c);
    return (u && o && (p.root += ` ${o}`), p);
  },
  h5 = Gt('button', { name: 'MuiButtonBase', slot: 'Root' })({
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
    [`&.${d5.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  qg = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiButtonBase' }),
      {
        action: c,
        centerRipple: f = !1,
        children: p,
        className: m,
        component: y = 'button',
        disabled: g = !1,
        disableRipple: S = !1,
        disableTouchRipple: C = !1,
        focusRipple: M = !1,
        focusVisibleClassName: N,
        LinkComponent: O = 'a',
        onBlur: E,
        onClick: L,
        onContextMenu: G,
        onDragLeave: F,
        onFocus: J,
        onFocusVisible: $,
        onKeyDown: U,
        onKeyUp: V,
        onMouseDown: Z,
        onMouseLeave: ot,
        onMouseUp: ut,
        onTouchEnd: pt,
        onTouchMove: st,
        onTouchStart: v,
        tabIndex: W = 0,
        TouchRippleProps: Q,
        touchRippleRef: et,
        type: A,
        ...K
      } = o,
      I = H.useRef(null),
      it = e5(),
      yt = vi(it.ref, et),
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
      b && M && !S && it.pulsate();
    }, [S, M, b, it]);
    const tt = ha(it, 'start', Z, C),
      ft = ha(it, 'stop', G, C),
      ht = ha(it, 'stop', F, C),
      vt = ha(it, 'stop', ut, C),
      jt = ha(
        it,
        'stop',
        (mt) => {
          (b && mt.preventDefault(), ot && ot(mt));
        },
        C
      ),
      Nt = ha(it, 'start', v, C),
      Ee = ha(it, 'stop', pt, C),
      He = ha(it, 'stop', st, C),
      Ae = ha(
        it,
        'stop',
        (mt) => {
          (fu(mt.target) || B(!1), E && E(mt));
        },
        !1
      ),
      ue = gl((mt) => {
        (I.current || (I.current = mt.currentTarget), fu(mt.target) && (B(!0), $ && $(mt)), J && J(mt));
      }),
      he = () => {
        const mt = I.current;
        return y && y !== 'button' && !(mt.tagName === 'A' && mt.href);
      },
      Tt = gl((mt) => {
        (M &&
          !mt.repeat &&
          b &&
          mt.key === ' ' &&
          it.stop(mt, () => {
            it.start(mt);
          }),
          mt.target === mt.currentTarget && he() && mt.key === ' ' && mt.preventDefault(),
          U && U(mt),
          mt.target === mt.currentTarget && he() && mt.key === 'Enter' && !g && (mt.preventDefault(), L && L(mt)));
      }),
      se = gl((mt) => {
        (M &&
          mt.key === ' ' &&
          b &&
          !mt.defaultPrevented &&
          it.stop(mt, () => {
            it.pulsate(mt);
          }),
          V && V(mt),
          L && mt.target === mt.currentTarget && he() && mt.key === ' ' && !mt.defaultPrevented && L(mt));
      });
    let Bt = y;
    Bt === 'button' && (K.href || K.to) && (Bt = O);
    const le = {};
    Bt === 'button'
      ? ((le.type = A === void 0 ? 'button' : A), (le.disabled = g))
      : (!K.href && !K.to && (le.role = 'button'), g && (le['aria-disabled'] = g));
    const Ye = vi(u, I),
      Xe = {
        ...o,
        centerRipple: f,
        component: y,
        disabled: g,
        disableRipple: S,
        disableTouchRipple: C,
        focusRipple: M,
        tabIndex: W,
        focusVisible: b,
      },
      Hn = p5(Xe);
    return R.jsxs(h5, {
      as: Bt,
      className: qt(Hn.root, m),
      ownerState: Xe,
      onBlur: Ae,
      onClick: L,
      onContextMenu: ft,
      onFocus: ue,
      onKeyDown: Tt,
      onKeyUp: se,
      onMouseDown: tt,
      onMouseLeave: jt,
      onMouseUp: vt,
      onDragLeave: ht,
      onTouchEnd: Ee,
      onTouchMove: He,
      onTouchStart: Nt,
      ref: Ye,
      tabIndex: g ? -1 : W,
      type: A,
      ...le,
      ...K,
      children: [p, P ? R.jsx(c5, { ref: yt, center: f, ...Q }) : null],
    });
  });
function ha(a, i, u, o = !1) {
  return gl((c) => (u && u(c), o || a[i](c), !0));
}
function m5(a) {
  return typeof a.main == 'string';
}
function g5(a, i = []) {
  if (!m5(a)) return !1;
  for (const u of i) if (!a.hasOwnProperty(u) || typeof a[u] != 'string') return !1;
  return !0;
}
function ma(a = []) {
  return ([, i]) => i && g5(i, a);
}
function y5(a) {
  return pn('MuiCircularProgress', a);
}
Rn('MuiCircularProgress', [
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
  Sf = _r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  xf = _r`
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
  v5 =
    typeof Sf != 'string'
      ? wf`
        animation: ${Sf} 1.4s linear infinite;
      `
      : null,
  b5 =
    typeof xf != 'string'
      ? wf`
        animation: ${xf} 1.4s ease-in-out infinite;
      `
      : null,
  S5 = (a) => {
    const { classes: i, variant: u, color: o, disableShrink: c } = a,
      f = {
        root: ['root', u, `color${St(o)}`],
        svg: ['svg'],
        track: ['track'],
        circle: ['circle', `circle${St(u)}`, c && 'circleDisableShrink'],
      };
    return _n(f, y5, i);
  },
  x5 = Gt('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[u.variant], i[`color${St(u.color)}`]];
    },
  })(
    Ue(({ theme: a }) => ({
      display: 'inline-block',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('transform') } },
        { props: { variant: 'indeterminate' }, style: v5 || { animation: `${Sf} 1.4s linear infinite` } },
        ...Object.entries(a.palette)
          .filter(ma())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
      ],
    }))
  ),
  C5 = Gt('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  T5 = Gt('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.circle, i[`circle${St(u.variant)}`], u.disableShrink && i.circleDisableShrink];
    },
  })(
    Ue(({ theme: a }) => ({
      stroke: 'currentColor',
      variants: [
        { props: { variant: 'determinate' }, style: { transition: a.transitions.create('stroke-dashoffset') } },
        { props: { variant: 'indeterminate' }, style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 } },
        {
          props: ({ ownerState: i }) => i.variant === 'indeterminate' && !i.disableShrink,
          style: b5 || { animation: `${xf} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  E5 = Gt('circle', { name: 'MuiCircularProgress', slot: 'Track' })(
    Ue(({ theme: a }) => ({ stroke: 'currentColor', opacity: (a.vars || a).palette.action.activatedOpacity }))
  ),
  $g = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiCircularProgress' }),
      {
        className: c,
        color: f = 'primary',
        disableShrink: p = !1,
        enableTrackSlot: m = !1,
        size: y = 40,
        style: g,
        thickness: S = 3.6,
        value: C = 0,
        variant: M = 'indeterminate',
        ...N
      } = o,
      O = { ...o, color: f, disableShrink: p, size: y, thickness: S, value: C, variant: M, enableTrackSlot: m },
      E = S5(O),
      L = {},
      G = {},
      F = {};
    if (M === 'determinate') {
      const J = 2 * Math.PI * ((Nn - S) / 2);
      ((L.strokeDasharray = J.toFixed(3)),
        (F['aria-valuenow'] = Math.round(C)),
        (L.strokeDashoffset = `${(((100 - C) / 100) * J).toFixed(3)}px`),
        (G.transform = 'rotate(-90deg)'));
    }
    return R.jsx(x5, {
      className: qt(E.root, c),
      style: { width: y, height: y, ...G, ...g },
      ownerState: O,
      ref: u,
      role: 'progressbar',
      ...F,
      ...N,
      children: R.jsxs(C5, {
        className: E.svg,
        ownerState: O,
        viewBox: `${Nn / 2} ${Nn / 2} ${Nn} ${Nn}`,
        children: [
          m
            ? R.jsx(E5, {
                className: E.track,
                ownerState: O,
                cx: Nn,
                cy: Nn,
                r: (Nn - S) / 2,
                fill: 'none',
                strokeWidth: S,
                'aria-hidden': 'true',
              })
            : null,
          R.jsx(T5, {
            className: E.circle,
            style: L,
            ownerState: O,
            cx: Nn,
            cy: Nn,
            r: (Nn - S) / 2,
            fill: 'none',
            strokeWidth: S,
          }),
        ],
      }),
    });
  });
function A5(a) {
  return pn('MuiIconButton', a);
}
const _m = Rn('MuiIconButton', [
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
  z5 = (a) => {
    const { classes: i, disabled: u, color: o, edge: c, size: f, loading: p } = a,
      m = {
        root: [
          'root',
          p && 'loading',
          u && 'disabled',
          o !== 'default' && `color${St(o)}`,
          c && `edge${St(c)}`,
          `size${St(f)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return _n(m, A5, i);
  },
  M5 = Gt(qg, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        u.loading && i.loading,
        u.color !== 'default' && i[`color${St(u.color)}`],
        u.edge && i[`edge${St(u.edge)}`],
        i[`size${St(u.size)}`],
      ];
    },
  })(
    Ue(({ theme: a }) => ({
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
    Ue(({ theme: a }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(a.palette)
          .filter(ma())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
        ...Object.entries(a.palette)
          .filter(ma())
          .map(([i]) => ({
            props: { color: i },
            style: {
              '--IconButton-hoverBg': a.alpha((a.vars || a).palette[i].main, (a.vars || a).palette.action.hoverOpacity),
            },
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: a.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: a.typography.pxToRem(28) } },
      ],
      [`&.${_m.disabled}`]: { backgroundColor: 'transparent', color: (a.vars || a).palette.action.disabled },
      [`&.${_m.loading}`]: { color: 'transparent' },
    }))
  ),
  O5 = Gt('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (a.vars || a).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  gi = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiIconButton' }),
      {
        edge: c = !1,
        children: f,
        className: p,
        color: m = 'default',
        disabled: y = !1,
        disableFocusRipple: g = !1,
        size: S = 'medium',
        id: C,
        loading: M = null,
        loadingIndicator: N,
        ...O
      } = o,
      E = xg(C),
      L = N ?? R.jsx($g, { 'aria-labelledby': E, color: 'inherit', size: 16 }),
      G = { ...o, edge: c, color: m, disabled: y, disableFocusRipple: g, loading: M, loadingIndicator: L, size: S },
      F = z5(G);
    return R.jsxs(M5, {
      id: M ? E : C,
      className: qt(F.root, p),
      centerRipple: !0,
      focusRipple: !g,
      disabled: y || M,
      ref: u,
      ...O,
      ownerState: G,
      children: [
        typeof M == 'boolean' &&
          R.jsx('span', {
            className: F.loadingWrapper,
            style: { display: 'contents' },
            children: R.jsx(O5, { className: F.loadingIndicator, ownerState: G, children: M && L }),
          }),
        f,
      ],
    });
  });
function R5(a) {
  return pn('MuiTypography', a);
}
Rn('MuiTypography', [
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
  w5 = NS(),
  D5 = (a) => {
    const { align: i, gutterBottom: u, noWrap: o, paragraph: c, variant: f, classes: p } = a,
      m = {
        root: [
          'root',
          f,
          a.align !== 'inherit' && `align${St(i)}`,
          u && 'gutterBottom',
          o && 'noWrap',
          c && 'paragraph',
        ],
      };
    return _n(m, R5, p);
  },
  B5 = Gt('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        u.variant && i[u.variant],
        u.align !== 'inherit' && i[`align${St(u.align)}`],
        u.noWrap && i.noWrap,
        u.gutterBottom && i.gutterBottom,
        u.paragraph && i.paragraph,
      ];
    },
  })(
    Ue(({ theme: a }) => ({
      margin: 0,
      variants: [
        { props: { variant: 'inherit' }, style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' } },
        ...Object.entries(a.typography)
          .filter(([i, u]) => i !== 'inherit' && u && typeof u == 'object')
          .map(([i, u]) => ({ props: { variant: i }, style: u })),
        ...Object.entries(a.palette)
          .filter(ma())
          .map(([i]) => ({ props: { color: i }, style: { color: (a.vars || a).palette[i].main } })),
        ...Object.entries(a.palette?.text || {})
          .filter(([, i]) => typeof i == 'string')
          .map(([i]) => ({ props: { color: `text${St(i)}` }, style: { color: (a.vars || a).palette.text[i] } })),
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
  wm = {
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
  en = H.forwardRef(function (i, u) {
    const { color: o, ...c } = hn({ props: i, name: 'MuiTypography' }),
      f = !_5[o],
      p = w5({ ...c, ...(f && { color: o }) }),
      {
        align: m = 'inherit',
        className: y,
        component: g,
        gutterBottom: S = !1,
        noWrap: C = !1,
        paragraph: M = !1,
        variant: N = 'body1',
        variantMapping: O = wm,
        ...E
      } = p,
      L = {
        ...p,
        align: m,
        color: o,
        className: y,
        component: g,
        gutterBottom: S,
        noWrap: C,
        paragraph: M,
        variant: N,
        variantMapping: O,
      },
      G = g || (M ? 'p' : O[N] || wm[N]) || 'span',
      F = D5(L);
    return R.jsx(B5, {
      as: G,
      ref: u,
      className: qt(F.root, y),
      ...E,
      ownerState: L,
      style: { ...(m !== 'inherit' && { '--Typography-textAlign': m }), ...E.style },
    });
  });
function j5(a) {
  return pn('MuiAppBar', a);
}
Rn('MuiAppBar', [
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
const N5 = (a) => {
    const { color: i, position: u, classes: o } = a,
      c = { root: ['root', `color${St(i)}`, `position${St(u)}`] };
    return _n(c, j5, o);
  },
  Dm = (a, i) => (a ? `${a?.replace(')', '')}, ${i})` : i),
  U5 = Gt(Yg, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, i[`position${St(u.position)}`], i[`color${St(u.color)}`]];
    },
  })(
    Ue(({ theme: a }) => ({
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
          .filter(ma(['contrastText']))
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
              backgroundColor: a.vars ? Dm(a.vars.palette.AppBar.darkBg, 'var(--AppBar-background)') : null,
              color: a.vars ? Dm(a.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
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
  H5 = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiAppBar' }),
      { className: c, color: f = 'primary', enableColorOnDark: p = !1, position: m = 'fixed', ...y } = o,
      g = { ...o, color: f, position: m, enableColorOnDark: p },
      S = N5(g);
    return R.jsx(U5, {
      square: !0,
      component: 'header',
      ownerState: g,
      elevation: 4,
      className: qt(S.root, c, m === 'fixed' && 'mui-fixed'),
      ref: u,
      ...y,
    });
  });
function Va(a) {
  const { elementType: i, externalSlotProps: u, ownerState: o, skipResolvingSlotProps: c = !1, ...f } = a,
    p = c ? {} : Lg(u, o),
    { props: m, internalRef: y } = kg({ ...f, externalSlotProps: p }),
    g = vi(y, p?.ref, a.additionalProps?.ref);
  return Hg(i, { ...m, ref: g }, o);
}
const L5 = Rn('MuiBox', ['root']),
  k5 = Rg(),
  Ot = b2({ themeId: Ef, defaultTheme: k5, defaultClassName: L5.root, generateClassName: dg.generate });
function Y5(a) {
  return pn('MuiButton', a);
}
const cl = Rn('MuiButton', [
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
  q5 = H.createContext({}),
  $5 = H.createContext(void 0),
  G5 = (a) => {
    const {
        color: i,
        disableElevation: u,
        fullWidth: o,
        size: c,
        variant: f,
        loading: p,
        loadingPosition: m,
        classes: y,
      } = a,
      g = {
        root: [
          'root',
          p && 'loading',
          f,
          `${f}${St(i)}`,
          `size${St(c)}`,
          `${f}Size${St(c)}`,
          `color${St(i)}`,
          u && 'disableElevation',
          o && 'fullWidth',
          p && `loadingPosition${St(m)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${St(c)}`],
        endIcon: ['icon', 'endIcon', `iconSize${St(c)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      S = _n(g, Y5, y);
    return { ...y, ...S };
  },
  Gg = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  V5 = Gt(qg, {
    shouldForwardProp: (a) => Dg(a) || a === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[u.variant],
        i[`${u.variant}${St(u.color)}`],
        i[`size${St(u.size)}`],
        i[`${u.variant}Size${St(u.size)}`],
        u.color === 'inherit' && i.colorInherit,
        u.disableElevation && i.disableElevation,
        u.fullWidth && i.fullWidth,
        u.loading && i.loading,
      ];
    },
  })(
    Ue(({ theme: a }) => {
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
        [`&.${cl.disabled}`]: { color: (a.vars || a).palette.action.disabled },
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
              [`&.${cl.focusVisible}`]: { boxShadow: (a.vars || a).shadows[6] },
              [`&.${cl.disabled}`]: {
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
              [`&.${cl.disabled}`]: { border: `1px solid ${(a.vars || a).palette.action.disabledBackground}` },
            },
          },
          {
            props: { variant: 'text' },
            style: { padding: '6px 8px', color: 'var(--variant-textColor)', backgroundColor: 'var(--variant-textBg)' },
          },
          ...Object.entries(a.palette)
            .filter(ma())
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
              [`&.${cl.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${cl.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: a.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: a.transitions.duration.short,
              }),
              [`&.${cl.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    })
  ),
  X5 = Gt('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.startIcon, u.loading && i.startIconLoadingStart, i[`iconSize${St(u.size)}`]];
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
      ...Gg,
    ],
  })),
  Q5 = Gt('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.endIcon, u.loading && i.endIconLoadingEnd, i[`iconSize${St(u.size)}`]];
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
      ...Gg,
    ],
  })),
  Z5 = Gt('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: a }) => ({
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
  Bm = Gt('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  bi = H.forwardRef(function (i, u) {
    const o = H.useContext(q5),
      c = H.useContext($5),
      f = Mr(o, i),
      p = hn({ props: f, name: 'MuiButton' }),
      {
        children: m,
        color: y = 'primary',
        component: g = 'button',
        className: S,
        disabled: C = !1,
        disableElevation: M = !1,
        disableFocusRipple: N = !1,
        endIcon: O,
        focusVisibleClassName: E,
        fullWidth: L = !1,
        id: G,
        loading: F = null,
        loadingIndicator: J,
        loadingPosition: $ = 'center',
        size: U = 'medium',
        startIcon: V,
        type: Z,
        variant: ot = 'text',
        ...ut
      } = p,
      pt = xg(G),
      st = J ?? R.jsx($g, { 'aria-labelledby': pt, color: 'inherit', size: 16 }),
      v = {
        ...p,
        color: y,
        component: g,
        disabled: C,
        disableElevation: M,
        disableFocusRipple: N,
        fullWidth: L,
        loading: F,
        loadingIndicator: st,
        loadingPosition: $,
        size: U,
        type: Z,
        variant: ot,
      },
      W = G5(v),
      Q =
        (V || (F && $ === 'start')) &&
        R.jsx(X5, {
          className: W.startIcon,
          ownerState: v,
          children: V || R.jsx(Bm, { className: W.loadingIconPlaceholder, ownerState: v }),
        }),
      et =
        (O || (F && $ === 'end')) &&
        R.jsx(Q5, {
          className: W.endIcon,
          ownerState: v,
          children: O || R.jsx(Bm, { className: W.loadingIconPlaceholder, ownerState: v }),
        }),
      A = c || '',
      K =
        typeof F == 'boolean'
          ? R.jsx('span', {
              className: W.loadingWrapper,
              style: { display: 'contents' },
              children: F && R.jsx(Z5, { className: W.loadingIndicator, ownerState: v, children: st }),
            })
          : null;
    return R.jsxs(V5, {
      ownerState: v,
      className: qt(o.className, W.root, S, A),
      component: g,
      disabled: C || F,
      focusRipple: !N,
      focusVisibleClassName: qt(W.focusVisible, E),
      ref: u,
      type: Z,
      id: F ? pt : G,
      ...ut,
      classes: W,
      children: [Q, $ !== 'end' && K, m, $ === 'end' && K, et],
    });
  }),
  jm = W2({
    createStyledComponent: Gt('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (a, i) => {
        const { ownerState: u } = a;
        return [
          i.root,
          i[`maxWidth${St(String(u.maxWidth))}`],
          u.fixed && i.fixed,
          u.disableGutters && i.disableGutters,
        ];
      },
    }),
    useThemeProps: (a) => hn({ props: a, name: 'MuiContainer' }),
  }),
  K5 = {
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
function J5(a, i, u = (o, c) => o === c) {
  return a.length === i.length && a.every((o, c) => u(o, i[c]));
}
const W5 = 2;
function fi(a, i, u, o, c) {
  return u === 1 ? Math.min(a + i, c) : Math.max(a - i, o);
}
function Vg(a, i) {
  return a - i;
}
function Nm(a, i) {
  const { index: u } =
    a.reduce((o, c, f) => {
      const p = Math.abs(i - c);
      return o === null || p < o.distance || p === o.distance ? { distance: p, index: f } : o;
    }, null) ?? {};
  return u;
}
function Wo(a, i) {
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
function pu(a, i, u) {
  return ((a - i) * 100) / (u - i);
}
function F5(a, i, u) {
  return (u - i) * a + i;
}
function P5(a) {
  if (Math.abs(a) < 1) {
    const u = a.toExponential().split('e-'),
      o = u[0].split('.')[1];
    return (o ? o.length : 0) + parseInt(u[1], 10);
  }
  const i = a.toString().split('.')[1];
  return i ? i.length : 0;
}
function I5(a, i, u) {
  const o = Math.round((a - u) / i) * i + u;
  return Number(o.toFixed(P5(i)));
}
function Um({ values: a, newValue: i, index: u }) {
  const o = a.slice();
  return ((o[u] = i), o.sort(Vg));
}
function Fo({ sliderRef: a, activeIndex: i, setActive: u }) {
  const o = lu(a.current);
  ((!a.current?.contains(o.activeElement) || Number(o?.activeElement?.getAttribute('data-index')) !== i) &&
    a.current?.querySelector(`[type="range"][data-index="${i}"]`).focus(),
    u && u(i));
}
function Po(a, i) {
  return typeof a == 'number' && typeof i == 'number'
    ? a === i
    : typeof a == 'object' && typeof i == 'object'
      ? J5(a, i)
      : !1;
}
const t3 = {
    horizontal: { offset: (a) => ({ left: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    'horizontal-reverse': { offset: (a) => ({ right: `${a}%` }), leap: (a) => ({ width: `${a}%` }) },
    vertical: { offset: (a) => ({ bottom: `${a}%` }), leap: (a) => ({ height: `${a}%` }) },
  },
  e3 = (a) => a;
let Io;
function Hm() {
  return (
    Io === void 0 &&
      (typeof CSS < 'u' && typeof CSS.supports == 'function' ? (Io = CSS.supports('touch-action', 'none')) : (Io = !0)),
    Io
  );
}
function n3(a) {
  const {
      'aria-labelledby': i,
      defaultValue: u,
      disabled: o = !1,
      disableSwap: c = !1,
      isRtl: f = !1,
      marks: p = !1,
      max: m = 100,
      min: y = 0,
      name: g,
      onChange: S,
      onChangeCommitted: C,
      orientation: M = 'horizontal',
      rootRef: N,
      scale: O = e3,
      step: E = 1,
      shiftStep: L = 10,
      tabIndex: G,
      value: F,
    } = a,
    J = H.useRef(void 0),
    [$, U] = H.useState(-1),
    [V, Z] = H.useState(-1),
    [ot, ut] = H.useState(!1),
    pt = H.useRef(0),
    st = H.useRef(null),
    [v, W] = US({ controlled: F, default: u ?? y }),
    Q =
      S &&
      ((at, nt, xt) => {
        const At = at.nativeEvent || at,
          wt = new At.constructor(At.type, At);
        (Object.defineProperty(wt, 'target', { writable: !0, value: { value: nt, name: g } }),
          (st.current = nt),
          S(wt, nt, xt));
      }),
    et = Array.isArray(v);
  let A = et ? v.slice().sort(Vg) : [v];
  A = A.map((at) => (at == null ? y : di(at, y, m)));
  const K =
      p === !0 && E !== null
        ? [...Array(Math.floor((m - y) / E) + 1)].map((at, nt) => ({ value: y + E * nt }))
        : p || [],
    I = K.map((at) => at.value),
    [it, yt] = H.useState(-1),
    b = H.useRef(null),
    B = vi(N, b),
    P = (at) => (nt) => {
      const xt = Number(nt.currentTarget.getAttribute('data-index'));
      (fu(nt.target) && yt(xt), Z(xt), at?.onFocus?.(nt));
    },
    tt = (at) => (nt) => {
      (fu(nt.target) || yt(-1), Z(-1), at?.onBlur?.(nt));
    },
    ft = (at, nt) => {
      const xt = Number(at.currentTarget.getAttribute('data-index')),
        At = A[xt],
        wt = I.indexOf(At);
      let Et = nt;
      if (K && E == null) {
        const qe = I[I.length - 1];
        Et >= qe ? (Et = qe) : Et <= I[0] ? (Et = I[0]) : (Et = Et < At ? I[wt - 1] : I[wt + 1]);
      }
      if (((Et = di(Et, y, m)), et)) {
        c && (Et = di(Et, A[xt - 1] || -1 / 0, A[xt + 1] || 1 / 0));
        const qe = Et;
        Et = Um({ values: A, newValue: Et, index: xt });
        let Qe = xt;
        (c || (Qe = Et.indexOf(qe)), Fo({ sliderRef: b, activeIndex: Qe }));
      }
      (W(Et), yt(xt), Q && !Po(Et, v) && Q(at, Et, xt), C && C(at, st.current ?? Et));
    },
    ht = (at) => (nt) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(nt.key)) {
        nt.preventDefault();
        const xt = Number(nt.currentTarget.getAttribute('data-index')),
          At = A[xt];
        let wt = null;
        if (E != null) {
          const Et = nt.shiftKey ? L : E;
          switch (nt.key) {
            case 'ArrowUp':
              wt = fi(At, Et, 1, y, m);
              break;
            case 'ArrowRight':
              wt = fi(At, Et, f ? -1 : 1, y, m);
              break;
            case 'ArrowDown':
              wt = fi(At, Et, -1, y, m);
              break;
            case 'ArrowLeft':
              wt = fi(At, Et, f ? 1 : -1, y, m);
              break;
            case 'PageUp':
              wt = fi(At, L, 1, y, m);
              break;
            case 'PageDown':
              wt = fi(At, L, -1, y, m);
              break;
            case 'Home':
              wt = y;
              break;
            case 'End':
              wt = m;
              break;
          }
        } else if (K) {
          const Et = I[I.length - 1],
            qe = I.indexOf(At),
            Qe = [f ? 'ArrowRight' : 'ArrowLeft', 'ArrowDown', 'PageDown', 'Home'],
            It = [f ? 'ArrowLeft' : 'ArrowRight', 'ArrowUp', 'PageUp', 'End'];
          Qe.includes(nt.key)
            ? qe === 0
              ? (wt = I[0])
              : (wt = I[qe - 1])
            : It.includes(nt.key) && (qe === I.length - 1 ? (wt = Et) : (wt = I[qe + 1]));
        }
        wt != null && ft(nt, wt);
      }
      at?.onKeyDown?.(nt);
    };
  (bg(() => {
    o && b.current.contains(document.activeElement) && document.activeElement?.blur();
  }, [o]),
    o && $ !== -1 && U(-1),
    o && it !== -1 && yt(-1));
  const vt = (at) => (nt) => {
      (at.onChange?.(nt), ft(nt, nt.target.valueAsNumber));
    },
    jt = H.useRef(void 0);
  let Nt = M;
  f && M === 'horizontal' && (Nt += '-reverse');
  const Ee = ({ finger: at, move: nt = !1 }) => {
      const { current: xt } = b,
        { width: At, height: wt, bottom: Et, left: qe } = xt.getBoundingClientRect();
      let Qe;
      (Nt.startsWith('vertical') ? (Qe = (Et - at.y) / wt) : (Qe = (at.x - qe) / At),
        Nt.includes('-reverse') && (Qe = 1 - Qe));
      let It;
      if (((It = F5(Qe, y, m)), E)) It = I5(It, E, y);
      else {
        const Ze = Nm(I, It);
        It = I[Ze];
      }
      It = di(It, y, m);
      let ie = 0;
      if (et) {
        (nt ? (ie = jt.current) : (ie = Nm(A, It)), c && (It = di(It, A[ie - 1] || -1 / 0, A[ie + 1] || 1 / 0)));
        const Ze = It;
        ((It = Um({ values: A, newValue: It, index: ie })), (c && nt) || ((ie = It.indexOf(Ze)), (jt.current = ie)));
      }
      return { newValue: It, activeIndex: ie };
    },
    He = gl((at) => {
      const nt = Wo(at, J);
      if (!nt) return;
      if (((pt.current += 1), at.type === 'mousemove' && at.buttons === 0)) {
        Ae(at);
        return;
      }
      const { newValue: xt, activeIndex: At } = Ee({ finger: nt, move: !0 });
      (Fo({ sliderRef: b, activeIndex: At, setActive: U }),
        W(xt),
        !ot && pt.current > W5 && ut(!0),
        Q && !Po(xt, v) && Q(at, xt, At));
    }),
    Ae = gl((at) => {
      const nt = Wo(at, J);
      if ((ut(!1), !nt)) return;
      const { newValue: xt } = Ee({ finger: nt, move: !0 });
      (U(-1), at.type === 'touchend' && Z(-1), C && C(at, st.current ?? xt), (J.current = void 0), he());
    }),
    ue = gl((at) => {
      if (o) return;
      Hm() || at.preventDefault();
      const nt = at.changedTouches[0];
      nt != null && (J.current = nt.identifier);
      const xt = Wo(at, J);
      if (xt !== !1) {
        const { newValue: wt, activeIndex: Et } = Ee({ finger: xt });
        (Fo({ sliderRef: b, activeIndex: Et, setActive: U }), W(wt), Q && !Po(wt, v) && Q(at, wt, Et));
      }
      pt.current = 0;
      const At = lu(b.current);
      (At.addEventListener('touchmove', He, { passive: !0 }), At.addEventListener('touchend', Ae, { passive: !0 }));
    }),
    he = H.useCallback(() => {
      const at = lu(b.current);
      (at.removeEventListener('mousemove', He),
        at.removeEventListener('mouseup', Ae),
        at.removeEventListener('touchmove', He),
        at.removeEventListener('touchend', Ae));
    }, [Ae, He]);
  (H.useEffect(() => {
    const { current: at } = b;
    return (
      at.addEventListener('touchstart', ue, { passive: Hm() }),
      () => {
        (at.removeEventListener('touchstart', ue), he());
      }
    );
  }, [he, ue]),
    H.useEffect(() => {
      o && he();
    }, [o, he]));
  const Tt = (at) => (nt) => {
      if ((at.onMouseDown?.(nt), o || nt.defaultPrevented || nt.button !== 0)) return;
      nt.preventDefault();
      const xt = Wo(nt, J);
      if (xt !== !1) {
        const { newValue: wt, activeIndex: Et } = Ee({ finger: xt });
        (Fo({ sliderRef: b, activeIndex: Et, setActive: U }), W(wt), Q && !Po(wt, v) && Q(nt, wt, Et));
      }
      pt.current = 0;
      const At = lu(b.current);
      (At.addEventListener('mousemove', He, { passive: !0 }), At.addEventListener('mouseup', Ae));
    },
    se = pu(et ? A[0] : y, y, m),
    Bt = pu(A[A.length - 1], y, m) - se,
    le = (at = {}) => {
      const nt = iu(at),
        xt = { onMouseDown: Tt(nt || {}) },
        At = { ...nt, ...xt };
      return { ...at, ref: B, ...At };
    },
    Ye = (at) => (nt) => {
      at.onMouseOver?.(nt);
      const xt = Number(nt.currentTarget.getAttribute('data-index'));
      Z(xt);
    },
    Xe = (at) => (nt) => {
      (at.onMouseLeave?.(nt), Z(-1));
    },
    Hn = (at = {}) => {
      const nt = iu(at),
        xt = { onMouseOver: Ye(nt || {}), onMouseLeave: Xe(nt || {}) };
      return { ...at, ...nt, ...xt };
    },
    mt = (at) => ({ pointerEvents: $ !== -1 && $ !== at ? 'none' : void 0 });
  let ya;
  return (
    M === 'vertical' && (ya = f ? 'vertical-rl' : 'vertical-lr'),
    {
      active: $,
      axis: Nt,
      axisProps: t3,
      dragging: ot,
      focusedThumbIndex: it,
      getHiddenInputProps: (at = {}) => {
        const nt = iu(at),
          xt = { onChange: vt(nt || {}), onFocus: P(nt || {}), onBlur: tt(nt || {}), onKeyDown: ht(nt || {}) },
          At = { ...nt, ...xt };
        return {
          tabIndex: G,
          'aria-labelledby': i,
          'aria-orientation': M,
          'aria-valuemax': O(m),
          'aria-valuemin': O(y),
          name: g,
          type: 'range',
          min: a.min,
          max: a.max,
          step: a.step === null && a.marks ? 'any' : (a.step ?? void 0),
          disabled: o,
          ...at,
          ...At,
          style: { ...K5, direction: f ? 'rtl' : 'ltr', width: '100%', height: '100%', writingMode: ya },
        };
      },
      getRootProps: le,
      getThumbProps: Hn,
      marks: K,
      open: V,
      range: et,
      rootRef: B,
      trackLeap: Bt,
      trackOffset: se,
      values: A,
      getThumbStyle: mt,
    }
  );
}
const a3 = (a) => !a || !xr(a);
function l3(a) {
  return pn('MuiSlider', a);
}
const Mn = Rn('MuiSlider', [
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
  i3 = (a) => {
    const { open: i } = a;
    return { offset: qt(i && Mn.valueLabelOpen), circle: Mn.valueLabelCircle, label: Mn.valueLabelLabel };
  };
function r3(a) {
  const { children: i, className: u, value: o } = a,
    c = i3(a);
  return i
    ? H.cloneElement(
        i,
        { className: i.props.className },
        R.jsxs(H.Fragment, {
          children: [
            i.props.children,
            R.jsx('span', {
              className: qt(c.offset, u),
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
function Lm(a) {
  return a;
}
const o3 = Gt('span', {
    name: 'MuiSlider',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [
        i.root,
        i[`color${St(u.color)}`],
        u.size !== 'medium' && i[`size${St(u.size)}`],
        u.marked && i.marked,
        u.orientation === 'vertical' && i.vertical,
        u.track === 'inverted' && i.trackInverted,
        u.track === !1 && i.trackFalse,
      ];
    },
  })(
    Ue(({ theme: a }) => ({
      borderRadius: 12,
      boxSizing: 'content-box',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      WebkitTapHighlightColor: 'transparent',
      '@media print': { colorAdjust: 'exact' },
      [`&.${Mn.disabled}`]: { pointerEvents: 'none', cursor: 'default', color: (a.vars || a).palette.grey[400] },
      [`&.${Mn.dragging}`]: { [`& .${Mn.thumb}, & .${Mn.track}`]: { transition: 'none' } },
      variants: [
        ...Object.entries(a.palette)
          .filter(ma())
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
  u3 = Gt('span', { name: 'MuiSlider', slot: 'Rail' })({
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
  s3 = Gt('span', { name: 'MuiSlider', slot: 'Track' })(
    Ue(({ theme: a }) => ({
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
          .filter(ma())
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
  c3 = Gt('span', {
    name: 'MuiSlider',
    slot: 'Thumb',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.thumb, i[`thumbColor${St(u.color)}`], u.size !== 'medium' && i[`thumbSize${St(u.size)}`]];
    },
  })(
    Ue(({ theme: a }) => ({
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
      [`&.${Mn.disabled}`]: { '&:hover': { boxShadow: 'none' } },
      variants: [
        { props: { size: 'small' }, style: { width: 12, height: 12, '&::before': { boxShadow: 'none' } } },
        { props: { orientation: 'horizontal' }, style: { top: '50%', transform: 'translate(-50%, -50%)' } },
        { props: { orientation: 'vertical' }, style: { left: '50%', transform: 'translate(-50%, 50%)' } },
        ...Object.entries(a.palette)
          .filter(ma())
          .map(([i]) => ({
            props: { color: i },
            style: {
              [`&:hover, &.${Mn.focusVisible}`]: {
                boxShadow: `0px 0px 0px 8px ${a.alpha((a.vars || a).palette[i].main, 0.16)}`,
                '@media (hover: none)': { boxShadow: 'none' },
              },
              [`&.${Mn.active}`]: { boxShadow: `0px 0px 0px 14px ${a.alpha((a.vars || a).palette[i].main, 0.16)}` },
            },
          })),
      ],
    }))
  ),
  f3 = Gt(r3, { name: 'MuiSlider', slot: 'ValueLabel' })(
    Ue(({ theme: a }) => ({
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
            [`&.${Mn.valueLabelOpen}`]: { transform: 'translateY(-100%) scale(1)' },
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
            [`&.${Mn.valueLabelOpen}`]: { transform: 'translateY(-50%) scale(1)' },
          },
        },
        { props: { size: 'small' }, style: { fontSize: a.typography.pxToRem(12), padding: '0.25rem 0.5rem' } },
        { props: { orientation: 'vertical', size: 'small' }, style: { right: '20px' } },
      ],
    }))
  ),
  d3 = Gt('span', {
    name: 'MuiSlider',
    slot: 'Mark',
    shouldForwardProp: (a) => kf(a) && a !== 'markActive',
    overridesResolver: (a, i) => {
      const { markActive: u } = a;
      return [i.mark, u && i.markActive];
    },
  })(
    Ue(({ theme: a }) => ({
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
  p3 = Gt('span', { name: 'MuiSlider', slot: 'MarkLabel', shouldForwardProp: (a) => kf(a) && a !== 'markLabelActive' })(
    Ue(({ theme: a }) => ({
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
  h3 = (a) => {
    const { disabled: i, dragging: u, marked: o, orientation: c, track: f, classes: p, color: m, size: y } = a,
      g = {
        root: [
          'root',
          i && 'disabled',
          u && 'dragging',
          o && 'marked',
          c === 'vertical' && 'vertical',
          f === 'inverted' && 'trackInverted',
          f === !1 && 'trackFalse',
          m && `color${St(m)}`,
          y && `size${St(y)}`,
        ],
        rail: ['rail'],
        track: ['track'],
        mark: ['mark'],
        markActive: ['markActive'],
        markLabel: ['markLabel'],
        markLabelActive: ['markLabelActive'],
        valueLabel: ['valueLabel'],
        thumb: ['thumb', i && 'disabled', y && `thumbSize${St(y)}`, m && `thumbColor${St(m)}`],
        active: ['active'],
        disabled: ['disabled'],
        focusVisible: ['focusVisible'],
      };
    return _n(g, l3, p);
  },
  m3 = ({ children: a }) => a,
  rf = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiSlider' }),
      c = j2(),
      {
        'aria-label': f,
        'aria-valuetext': p,
        'aria-labelledby': m,
        component: y = 'span',
        components: g = {},
        componentsProps: S = {},
        color: C = 'primary',
        classes: M,
        className: N,
        disableSwap: O = !1,
        disabled: E = !1,
        getAriaLabel: L,
        getAriaValueText: G,
        marks: F = !1,
        max: J = 100,
        min: $ = 0,
        name: U,
        onChange: V,
        onChangeCommitted: Z,
        orientation: ot = 'horizontal',
        shiftStep: ut = 10,
        size: pt = 'medium',
        step: st = 1,
        scale: v = Lm,
        slotProps: W,
        slots: Q,
        tabIndex: et,
        track: A = 'normal',
        value: K,
        valueLabelDisplay: I = 'off',
        valueLabelFormat: it = Lm,
        ...yt
      } = o,
      b = {
        ...o,
        isRtl: c,
        max: J,
        min: $,
        classes: M,
        disabled: E,
        disableSwap: O,
        orientation: ot,
        marks: F,
        color: C,
        size: pt,
        step: st,
        shiftStep: ut,
        scale: v,
        track: A,
        valueLabelDisplay: I,
        valueLabelFormat: it,
      },
      {
        axisProps: B,
        getRootProps: P,
        getHiddenInputProps: tt,
        getThumbProps: ft,
        open: ht,
        active: vt,
        axis: jt,
        focusedThumbIndex: Nt,
        range: Ee,
        dragging: He,
        marks: Ae,
        values: ue,
        trackOffset: he,
        trackLeap: Tt,
        getThumbStyle: se,
      } = n3({ ...b, rootRef: u });
    ((b.marked = Ae.length > 0 && Ae.some((te) => te.label)), (b.dragging = He), (b.focusedThumbIndex = Nt));
    const Bt = h3(b),
      le = Q?.root ?? g.Root ?? o3,
      Ye = Q?.rail ?? g.Rail ?? u3,
      Xe = Q?.track ?? g.Track ?? s3,
      Hn = Q?.thumb ?? g.Thumb ?? c3,
      mt = Q?.valueLabel ?? g.ValueLabel ?? f3,
      ya = Q?.mark ?? g.Mark ?? d3,
      ze = Q?.markLabel ?? g.MarkLabel ?? p3,
      at = Q?.input ?? g.Input ?? 'input',
      nt = W?.root ?? S.root,
      xt = W?.rail ?? S.rail,
      At = W?.track ?? S.track,
      wt = W?.thumb ?? S.thumb,
      Et = W?.valueLabel ?? S.valueLabel,
      qe = W?.mark ?? S.mark,
      Qe = W?.markLabel ?? S.markLabel,
      It = W?.input ?? S.input,
      ie = Va({
        elementType: le,
        getSlotProps: P,
        externalSlotProps: nt,
        externalForwardedProps: yt,
        additionalProps: { ...(a3(le) && { as: y }) },
        ownerState: { ...b, ...nt?.ownerState },
        className: [Bt.root, N],
      }),
      Ze = Va({ elementType: Ye, externalSlotProps: xt, ownerState: b, className: Bt.rail }),
      $e = Va({
        elementType: Xe,
        externalSlotProps: At,
        additionalProps: { style: { ...B[jt].offset(he), ...B[jt].leap(Tt) } },
        ownerState: { ...b, ...At?.ownerState },
        className: Bt.track,
      }),
      xi = Va({
        elementType: Hn,
        getSlotProps: ft,
        externalSlotProps: wt,
        ownerState: { ...b, ...wt?.ownerState },
        className: Bt.thumb,
      }),
      wu = Va({
        elementType: mt,
        externalSlotProps: Et,
        ownerState: { ...b, ...Et?.ownerState },
        className: Bt.valueLabel,
      }),
      Ci = Va({ elementType: ya, externalSlotProps: qe, ownerState: b, className: Bt.mark }),
      va = Va({ elementType: ze, externalSlotProps: Qe, ownerState: b, className: Bt.markLabel }),
      Sl = Va({ elementType: at, getSlotProps: tt, externalSlotProps: It, ownerState: b });
    return R.jsxs(le, {
      ...ie,
      children: [
        R.jsx(Ye, { ...Ze }),
        R.jsx(Xe, { ...$e }),
        Ae.filter((te) => te.value >= $ && te.value <= J).map((te, ee) => {
          const ba = pu(te.value, $, J),
            Ln = B[jt].offset(ba);
          let wn;
          return (
            A === !1
              ? (wn = ue.includes(te.value))
              : (wn =
                  (A === 'normal' && (Ee ? te.value >= ue[0] && te.value <= ue[ue.length - 1] : te.value <= ue[0])) ||
                  (A === 'inverted' && (Ee ? te.value <= ue[0] || te.value >= ue[ue.length - 1] : te.value >= ue[0]))),
            R.jsxs(
              H.Fragment,
              {
                children: [
                  R.jsx(ya, {
                    'data-index': ee,
                    ...Ci,
                    ...(!xr(ya) && { markActive: wn }),
                    style: { ...Ln, ...Ci.style },
                    className: qt(Ci.className, wn && Bt.markActive),
                  }),
                  te.label != null
                    ? R.jsx(ze, {
                        'aria-hidden': !0,
                        'data-index': ee,
                        ...va,
                        ...(!xr(ze) && { markLabelActive: wn }),
                        style: { ...Ln, ...va.style },
                        className: qt(Bt.markLabel, va.className, wn && Bt.markLabelActive),
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
          const ba = pu(te, $, J),
            Ln = B[jt].offset(ba),
            wn = I === 'off' ? m3 : mt;
          return R.jsx(
            wn,
            {
              ...(!xr(wn) && {
                valueLabelFormat: it,
                valueLabelDisplay: I,
                value: typeof it == 'function' ? it(v(te), ee) : it,
                index: ee,
                open: ht === ee || vt === ee || I === 'on',
                disabled: E,
              }),
              ...wu,
              children: R.jsx(Hn, {
                'data-index': ee,
                ...xi,
                className: qt(Bt.thumb, xi.className, vt === ee && Bt.active, Nt === ee && Bt.focusVisible),
                style: { ...Ln, ...se(ee), ...xi.style },
                children: R.jsx(at, {
                  'data-index': ee,
                  'aria-label': L ? L(ee) : f,
                  'aria-valuenow': v(te),
                  'aria-labelledby': m,
                  'aria-valuetext': G ? G(v(te), ee) : p,
                  value: ue[ee],
                  ...Sl,
                }),
              }),
            },
            ee
          );
        }),
      ],
    });
  }),
  Cr = aS({
    createStyledComponent: Gt('div', { name: 'MuiStack', slot: 'Root' }),
    useThemeProps: (a) => hn({ props: a, name: 'MuiStack' }),
  });
function g3(a) {
  return pn('MuiToolbar', a);
}
Rn('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const y3 = (a) => {
    const { classes: i, disableGutters: u, variant: o } = a;
    return _n({ root: ['root', !u && 'gutters', o] }, g3, i);
  },
  v3 = Gt('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (a, i) => {
      const { ownerState: u } = a;
      return [i.root, !u.disableGutters && i.gutters, i[u.variant]];
    },
  })(
    Ue(({ theme: a }) => ({
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
  b3 = H.forwardRef(function (i, u) {
    const o = hn({ props: i, name: 'MuiToolbar' }),
      { className: c, component: f = 'div', disableGutters: p = !1, variant: m = 'regular', ...y } = o,
      g = { ...o, component: f, disableGutters: p, variant: m },
      S = y3(g);
    return R.jsx(v3, { as: f, className: qt(S.root, c), ref: u, ownerState: g, ...y });
  });
var Xg = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  km = Ne.createContext && Ne.createContext(Xg),
  S3 = ['attr', 'size', 'title'];
function x3(a, i) {
  if (a == null) return {};
  var u = C3(a, i),
    o,
    c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(a);
    for (c = 0; c < f.length; c++)
      ((o = f[c]), !(i.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(a, o) && (u[o] = a[o]));
  }
  return u;
}
function C3(a, i) {
  if (a == null) return {};
  var u = {};
  for (var o in a)
    if (Object.prototype.hasOwnProperty.call(a, o)) {
      if (i.indexOf(o) >= 0) continue;
      u[o] = a[o];
    }
  return u;
}
function hu() {
  return (
    (hu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var u = arguments[i];
            for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (a[o] = u[o]);
          }
          return a;
        }),
    hu.apply(this, arguments)
  );
}
function Ym(a, i) {
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
function mu(a) {
  for (var i = 1; i < arguments.length; i++) {
    var u = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Ym(Object(u), !0).forEach(function (o) {
          T3(a, o, u[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
        : Ym(Object(u)).forEach(function (o) {
            Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(u, o));
          });
  }
  return a;
}
function T3(a, i, u) {
  return (
    (i = E3(i)),
    i in a ? Object.defineProperty(a, i, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (a[i] = u),
    a
  );
}
function E3(a) {
  var i = A3(a, 'string');
  return typeof i == 'symbol' ? i : i + '';
}
function A3(a, i) {
  if (typeof a != 'object' || !a) return a;
  var u = a[Symbol.toPrimitive];
  if (u !== void 0) {
    var o = u.call(a, i);
    if (typeof o != 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (i === 'string' ? String : Number)(a);
}
function Qg(a) {
  return a && a.map((i, u) => Ne.createElement(i.tag, mu({ key: u }, i.attr), Qg(i.child)));
}
function Kn(a) {
  return (i) => Ne.createElement(z3, hu({ attr: mu({}, a.attr) }, i), Qg(a.child));
}
function z3(a) {
  var i = (u) => {
    var { attr: o, size: c, title: f } = a,
      p = x3(a, S3),
      m = c || u.size || '1em',
      y;
    return (
      u.className && (y = u.className),
      a.className && (y = (y ? y + ' ' : '') + a.className),
      Ne.createElement(
        'svg',
        hu({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, u.attr, o, p, {
          className: y,
          style: mu(mu({ color: a.color || u.color }, u.style), a.style),
          height: m,
          width: m,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        f && Ne.createElement('title', null, f),
        a.children
      )
    );
  };
  return km !== void 0 ? Ne.createElement(km.Consumer, null, (u) => i(u)) : i(Xg);
}
function M3(a) {
  return Kn({
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
function O3(a) {
  return Kn({
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
function qm(a) {
  return Kn({
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
function R3(a) {
  return Kn({
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
function Zg(a) {
  return Kn({
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
function _3(a) {
  return Kn({
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
function w3(a) {
  return Kn({
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
function D3(a) {
  return Kn({
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
function Kg(a) {
  return Kn({
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
function B3(a) {
  return Kn({
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
const Gf = {
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
  j3 = ({ capturedImage: a, selectedFilter: i, onSelectFilter: u }) => {
    const o = {};
    return (
      Object.entries(Gf).forEach(([c, f]) => {
        const p = c;
        (o[f.section] || (o[f.section] = []), o[f.section].push([p, f]));
      }),
      R.jsxs(Ot, {
        sx: { bgcolor: 'rgba(0,0,0,0.8)', width: '100%', p: 2 },
        children: [
          R.jsx(en, { variant: 'subtitle2', sx: { color: 'white', mb: 1 }, children: 'Choose Filter' }),
          R.jsx(Cr, {
            direction: 'row',
            spacing: 0,
            sx: { overflowX: 'auto', pb: 1 },
            children: Object.entries(o).map(([c, f]) =>
              R.jsxs(
                Ot,
                {
                  sx: { position: 'relative', pr: 3, mr: 3 },
                  children: [
                    R.jsx(Ot, {
                      sx: { width: '100%', mb: 1, position: 'absolute', top: 0 },
                      children: R.jsx(en, {
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
                    R.jsx(Ot, {
                      sx: { display: 'flex', flexDirection: 'row', gap: 1, mt: 4 },
                      children: f.map(([p, { name: m, filter: y, blendMode: g, fill: S }]) =>
                        R.jsxs(
                          Ot,
                          {
                            sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 70 },
                            children: [
                              R.jsxs(bi, {
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
                                    alt: m,
                                    style: { width: '100%', height: '100%', objectFit: 'cover', filter: y },
                                  }),
                                  g &&
                                    typeof S == 'string' &&
                                    R.jsx(Ot, {
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
                              R.jsx(en, { variant: 'caption', sx: { color: 'white', mt: 0.5 }, children: m }),
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
  Jg = ({ imageAdjustments: a, onAdjustmentsChange: i }) =>
    R.jsxs(Ot, {
      children: [
        R.jsxs(Ot, {
          sx: { mb: 2 },
          children: [
            R.jsxs(Cr, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(w3, { size: 20, color: 'white' }),
                R.jsx(en, { variant: 'body2', sx: { color: 'white' }, children: 'Brightness' }),
                R.jsxs(en, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.brightness, '%'],
                }),
              ],
            }),
            R.jsx(rf, {
              min: 50,
              max: 150,
              value: a.brightness,
              onChange: (u, o) => i((c) => ({ ...c, brightness: typeof o == 'number' ? o : o[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(Ot, {
          sx: { mb: 2 },
          children: [
            R.jsxs(Cr, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(O3, { size: 20, color: 'white' }),
                R.jsx(en, { variant: 'body2', sx: { color: 'white' }, children: 'Contrast' }),
                R.jsxs(en, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.contrast, '%'],
                }),
              ],
            }),
            R.jsx(rf, {
              min: 50,
              max: 150,
              value: a.contrast,
              onChange: (u, o) => i((c) => ({ ...c, contrast: typeof o == 'number' ? o : o[0] })),
              sx: { color: 'primary.main', '& .MuiSlider-thumb': { bgcolor: 'white' }, mt: 1 },
            }),
          ],
        }),
        R.jsxs(Ot, {
          children: [
            R.jsxs(Cr, {
              direction: 'row',
              alignItems: 'center',
              spacing: 1,
              children: [
                R.jsx(D3, { size: 20, color: 'white' }),
                R.jsx(en, { variant: 'body2', sx: { color: 'white' }, children: 'Saturation' }),
                R.jsxs(en, {
                  variant: 'caption',
                  sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                  children: [a.saturation, '%'],
                }),
              ],
            }),
            R.jsx(rf, {
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
  $m = ({ handleStart: a, handleMove: i, handleEnd: u }) =>
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
      onTouchStart: (o) => a(o.touches[0].clientY),
      onTouchMove: (o) => i(o.touches[0].clientY),
      onTouchEnd: u,
      onMouseDown: (o) => a(o.clientY),
      children: R.jsx(Ot, { sx: { bgcolor: 'grey.500', borderRadius: 3, height: 2, width: '13%', minWidth: '50px' } }),
    }),
  Cf = ({ position: a = 'bottom', onCloseEvent: i = 'adjustmentSwipeClose', minHeight: u = 150, children: o }) => {
    const c = H.useRef(null),
      f = H.useRef(null),
      [p, m] = H.useState(0),
      [y, g] = H.useState(null),
      [S, C] = H.useState(!1),
      [M, N] = H.useState(0),
      O = (G) => {
        (g(G), C(!0), (document.body.style.userSelect = 'none'));
      },
      E = (G) => {
        if (!S || y === null) return;
        const F = a === 'top' ? G - y : y - G,
          J = Math.max(u, p - F);
        N(J);
      },
      L = () => {
        (M <= u + 20 && window.dispatchEvent(new CustomEvent(i)),
          C(!1),
          g(null),
          N(p),
          (document.body.style.userSelect = ''));
      };
    return (
      H.useEffect(() => {
        const G = (J) => {
            E(J.clientY);
          },
          F = () => {
            L();
          };
        return (
          S && (window.addEventListener('mousemove', G), window.addEventListener('mouseup', F)),
          () => {
            (window.removeEventListener('mousemove', G), window.removeEventListener('mouseup', F));
          }
        );
      }, [S, y, M]),
      H.useEffect(() => {
        const G = () => {
          if (f.current) {
            const F = f.current.getBoundingClientRect().height;
            (m(F), N((J) => (S ? J : F)));
          }
        };
        return (window.addEventListener('resize', G), G(), () => window.removeEventListener('resize', G));
      }, [S]),
      H.useEffect(() => {
        if (f.current) {
          const G = f.current.getBoundingClientRect().height;
          (m(G), N(G));
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
          a === 'top' && R.jsx($m, { handleStart: O, handleMove: E, handleEnd: L }),
          R.jsx(Ot, {
            ref: c,
            sx: { height: `${M}px`, transition: 'height 0.3s ease-in-out', overflow: 'hidden', p: 2 },
            children: R.jsx(Ot, { ref: f, children: o }),
          }),
          a === 'bottom' && R.jsx($m, { handleStart: O, handleMove: E, handleEnd: L }),
        ],
      })
    );
  },
  N3 = ({ onRetake: a, onSave: i, showSave: u = !0, toggleFilters: o, toggleControls: c }) =>
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
            R.jsx(gi, { sx: { color: 'white' }, onClick: o, children: R.jsx(B3, { size: 24, color: 'white' }) }),
            R.jsx(gi, { sx: { color: 'white' }, onClick: c, children: R.jsx(Kg, { size: 24, color: 'white' }) }),
          ],
        }),
        R.jsxs(Ot, {
          sx: { display: 'flex', gap: 2 },
          children: [
            R.jsx(bi, {
              variant: 'outlined',
              onClick: a,
              sx: { color: 'white', borderColor: 'rgba(255,255,255,0.5)' },
              startIcon: R.jsx(Zg, { width: 20, height: 20, fill: 'white' }),
              children: 'Retake',
            }),
            u &&
              i &&
              R.jsx(bi, {
                variant: 'contained',
                onClick: i,
                sx: { bgcolor: 'primary.main', color: 'white' },
                startIcon: R.jsx(M3, { size: 20 }),
                children: 'Save Photo',
              }),
          ],
        }),
      ],
    }),
  U3 = ({
    capturedImage: a,
    onRetake: i,
    onSave: u,
    selectedFilter: o,
    setSelectedFilter: c,
    showSave: f = !0,
    skipFilters: p,
    imageAdjustments: m,
    onAdjustmentsChange: y,
  }) => {
    const [g, S] = H.useState(null),
      C = () => {
        S((N) => (N === 'filters' ? null : 'filters'));
      },
      M = () => {
        S((N) => (N === 'adjustments' ? null : 'adjustments'));
      };
    return (
      H.useEffect(() => {
        const N = () => {
            g === 'adjustments' && S(null);
          },
          O = () => {
            g === 'filters' && S(null);
          };
        return (
          window.addEventListener('adjustmentSwipeClose', N),
          window.addEventListener('filterSwipeClose', O),
          () => {
            (window.removeEventListener('adjustmentSwipeClose', N), window.removeEventListener('filterSwipeClose', O));
          }
        );
      }, [g]),
      R.jsxs(Ot, {
        sx: { position: 'relative' },
        children: [
          !p &&
            R.jsx(Or, {
              in: g === 'filters',
              timeout: 'auto',
              unmountOnExit: !0,
              sx: { position: 'absolute', bottom: '72px', width: '100%' },
              children: R.jsx(Cf, {
                position: 'top',
                onCloseEvent: 'filterSwipeClose',
                children: R.jsx(j3, { capturedImage: a, selectedFilter: o, onSelectFilter: c }),
              }),
            }),
          R.jsx(Or, {
            in: g === 'adjustments',
            timeout: 'auto',
            unmountOnExit: !0,
            sx: { position: 'absolute', bottom: '72px', width: '100%' },
            children: R.jsx(Cf, {
              position: 'top',
              onCloseEvent: 'adjustmentSwipeClose',
              children: R.jsx(Jg, { imageAdjustments: m, onAdjustmentsChange: y }),
            }),
          }),
          R.jsx(N3, {
            onRetake: i,
            onSave: u,
            showSave: f,
            toggleFilters: C,
            showFilters: g === 'filters',
            showControls: g === 'adjustments',
            toggleControls: M,
          }),
        ],
      })
    );
  },
  H3 = ({ isFlipped: a, onClose: i, showControls: u, toggleControls: o, toggleFlip: c }) =>
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
      children: R.jsxs(Cr, {
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        children: [
          R.jsxs(Ot, {
            children: [
              R.jsx(gi, { onClick: o, sx: { p: 1, color: 'white' }, children: R.jsx(Kg, { size: 24 }) }),
              R.jsx(gi, {
                onClick: c,
                sx: { p: 1, color: 'white' },
                children: R.jsx(R3, {
                  size: 24,
                  style: { transition: 'transform 0.3s', transform: a ? 'scaleX(1)' : 'scaleX(-1)' },
                }),
              }),
            ],
          }),
          R.jsx(en, {
            variant: 'h6',
            sx: { color: 'white', position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
            children: u ? 'Adjustments' : 'Camera',
          }),
          i &&
            R.jsx(gi, {
              onClick: i,
              sx: { p: 1, color: 'white' },
              children: R.jsx(Zg, { width: 24, height: 24, fill: 'white' }),
            }),
        ],
      }),
    }),
  L3 = ({ message: a }) =>
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
      children: R.jsx(en, { children: a }),
    }),
  k3 = ({ onCapture: a, isStreaming: i, mobileOS: u, isMobile: o }) =>
    R.jsx(Ot, {
      sx: {
        border: u === 'ios' ? '4px solid white' : 'none',
        borderRadius: '50%',
        padding: '4px',
        transform: 'translateX(-50%)',
        position: 'absolute',
        bottom: 0,
        left: '50%',
      },
      children: R.jsx(bi, {
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
        children: !o && R.jsx(_3, { size: 40, fill: 'white' }),
      }),
    }),
  Y3 = ({ capturedImage: a, selectedFilter: i, isFlipped: u, skipFilters: o = !1, imageAdjustments: c }) => {
    const f = Gf[i],
      p = `
    brightness(${c.brightness}%)
    contrast(${c.contrast}%)
    saturate(${c.saturation}%)
  `,
      m = {
        filter: o ? p : `${p} ${f.filter || ''}`,
        maxWidth: '100%',
        height: 'auto',
        width: 'auto',
        maxHeight: '100%',
        objectFit: 'contain',
        transform: u ? 'scaleX(-1)' : 'none',
      };
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
          R.jsx('img', { src: a, alt: 'Captured', style: m }),
          !o &&
            (f.blendMode || f.fill) &&
            R.jsx(Ot, {
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
  q3 = ({ isMobile: a, mobileOS: i, switchCamera: u, facingMode: o }) => {
    const c = {
      transition: 'transform 0.3s cubic-bezier(0.88, 0.18, 0.61, 1.02)',
      transform: o === 'user' ? 'rotate(180deg)' : 'rotate(0deg)',
    };
    return R.jsx(Ot, {
      children:
        a &&
        R.jsx(gi, {
          onClick: u,
          sx: { color: 'white', bgcolor: 'rgba(0,0,0,0.3)', width: 60, height: 60 },
          children:
            i === 'android' ? R.jsx(qm, { size: 30, style: { ...c } }) : R.jsx(qm, { size: 30, style: { ...c } }),
        }),
    });
  },
  $3 = async (a) => {
    const i = { video: { facingMode: a, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: !1 };
    return await navigator.mediaDevices.getUserMedia(i);
  },
  Gm = (a) => {
    a &&
      a.getTracks().forEach((i) => {
        (i.stop(), (i.enabled = !1));
      });
  };
function G3() {
  const a = navigator.userAgent || navigator.vendor;
  return /android/i.test(a)
    ? { isMobile: !0, mobileOS: 'android' }
    : /iPad|iPhone|iPod/.test(a)
      ? { isMobile: !0, mobileOS: 'ios' }
      : navigator.platform === 'MacIntel' && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        ? { isMobile: !0, mobileOS: 'ios' }
        : { isMobile: !1, mobileOS: null };
}
const V3 = ({ onImageCaptured: a, onClose: i, skipFilters: u = !1 }) => {
  const o = H.useRef(null),
    c = H.useRef(null),
    f = H.useRef(null),
    [p, m] = H.useState(!1),
    [y, g] = H.useState('user'),
    [S, C] = H.useState({ brightness: 100, contrast: 100, saturation: 100 }),
    [M, N] = H.useState(null),
    [O, E] = H.useState('none'),
    [L, G] = H.useState(!1),
    [F, J] = H.useState(''),
    [$, U] = H.useState(!0),
    [V, Z] = H.useState(!1),
    [ot, ut] = H.useState(null),
    pt = Gf[O],
    st = async () => {
      try {
        J('');
        const b = await $3(y);
        ((f.current = b),
          o.current &&
            ((o.current.srcObject = b),
            (o.current.onloadedmetadata = () => {
              o.current && (o.current.play(), m(!0));
            })));
      } catch (b) {
        (console.error('Camera access error:', b), J('Unable to access camera. Please check permissions.'));
      }
    },
    v = () => {
      f.current && (Gm(f.current), (f.current = null), m(!1));
    },
    W = () => {
      (v(), g((b) => (b === 'user' ? 'environment' : 'user')));
    },
    Q = () => {
      const b = o.current,
        B = c.current;
      if (!b || !B || !f.current) return;
      ((B.width = b.videoWidth), (B.height = b.videoHeight));
      const P = B.getContext('2d');
      if (!P) return;
      (P.save(),
        (P.filter = `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%)`),
        $ && (P.translate(B.width, 0), P.scale(-1, 1)),
        P.drawImage(b, 0, 0, B.width, B.height),
        P.restore());
      const tt = B.toDataURL('image/jpeg', 0.95);
      if ((N(tt), v(), u)) {
        a && a(tt);
        return;
      }
    },
    et = () => {
      if (u) return;
      const b = c.current;
      if (!b || !M) return;
      const B = b.getContext('2d');
      if (!B) return;
      const P = new Image();
      ((P.onload = () => {
        const { filter: tt, blendMode: ft, fill: ht } = pt;
        ((b.width = P.width),
          (b.height = P.height),
          B.clearRect(0, 0, b.width, b.height),
          B.save(),
          (B.filter = `brightness(${S.brightness}%) contrast(${S.contrast}%) saturate(${S.saturation}%) ${tt}`),
          B.drawImage(P, 0, 0, b.width, b.height),
          (B.filter = 'none'),
          ft &&
            ht &&
            ((B.globalCompositeOperation = ft),
            (B.fillStyle = typeof ht == 'string' ? ht : '#000'),
            B.fillRect(0, 0, b.width, b.height)),
          B.restore());
        const vt = b.toDataURL('image/jpeg', 0.95);
        if (a) a(vt);
        else {
          const jt = document.createElement('a');
          ((jt.download = `photo-${Date.now()}.jpg`), (jt.href = vt), jt.click());
        }
        K();
      }),
        (P.src = M));
    },
    A = () => {
      (K(), st());
    },
    K = () => {
      (N(null), E('none'), C({ brightness: 100, contrast: 100, saturation: 100 }));
    },
    I = () => {
      (v(), i && i());
    },
    it = () => {
      const { isMobile: b, mobileOS: B } = G3();
      (Z(b), ut(B));
    };
  (H.useEffect(
    () => (
      st(),
      () => {
        f.current && (Gm(f.current), (f.current = null));
      }
    ),
    [y]
  ),
    H.useEffect(() => {
      const b = () => {
        it();
      };
      (b(), window.addEventListener('resize', b));
      const B = () => G(!1);
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
    transform: $ ? 'scaleX(-1)' : 'none',
    width: '100%',
  };
  return R.jsxs(Ot, {
    sx: { width: '100%', height: '100%', position: 'relative', bgcolor: 'black', overflow: 'hidden' },
    children: [
      !M || u
        ? R.jsxs(R.Fragment, {
            children: [
              R.jsx('video', { ref: o, autoPlay: !0, playsInline: !0, muted: !0, style: yt }),
              R.jsx(H3, {
                showControls: L,
                toggleControls: () => G(!L),
                isFlipped: $,
                toggleFlip: () => U((b) => !b),
                onClose: i ? I : void 0,
              }),
              R.jsx(Or, {
                in: L,
                timeout: 'auto',
                unmountOnExit: !0,
                style: { position: 'absolute', top: '72px', width: '100%' },
                children: R.jsx(Cf, {
                  onCloseEvent: 'adjustmentSwipeClose',
                  children: R.jsx(Jg, { imageAdjustments: S, onAdjustmentsChange: C }),
                }),
              }),
              F && R.jsx(L3, { message: F }),
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
                  R.jsx(k3, { onCapture: Q, isStreaming: p, mobileOS: ot, isMobile: V }),
                  R.jsx(q3, { isMobile: V, mobileOS: ot, switchCamera: W, facingMode: y }),
                ],
              }),
            ],
          })
        : R.jsxs(Ot, {
            sx: { display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', width: '100%' },
            children: [
              R.jsx(
                Y3,
                { capturedImage: M, selectedFilter: O, isFlipped: !1, skipFilters: u, imageAdjustments: S },
                `${O}-${S.brightness}-${S.contrast}-${S.saturation}`
              ),
              R.jsx(U3, {
                capturedImage: M,
                selectedFilter: O,
                setSelectedFilter: E,
                skipFilters: u,
                onRetake: A,
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
function X3() {
  const [a, i] = H.useState(null),
    [u, o] = H.useState(!0),
    c = (f) => {
      (i(f), o(!1));
    };
  return R.jsxs(Ot, {
    sx: { display: 'flex', flexDirection: 'column', height: '100vh' },
    children: [
      R.jsx(H5, {
        position: 'static',
        children: R.jsx(b3, {
          children: R.jsx(en, { variant: 'h6', component: 'div', children: 'React MUI Camera Demo' }),
        }),
      }),
      R.jsx(jm, {
        sx: { flexGrow: 1, py: 2 },
        children: u
          ? R.jsx(Yg, {
              sx: { width: '100%', height: '100%', overflow: 'hidden', position: 'relative' },
              children: R.jsx(V3, { onImageCaptured: c, onClose: () => o(!1), skipFilters: !1 }),
            })
          : R.jsxs(Ot, {
              sx: { textAlign: 'center' },
              children: [
                a &&
                  R.jsxs(Ot, {
                    children: [
                      R.jsx(en, { variant: 'h5', sx: { mb: 2 }, children: 'Last Photo' }),
                      R.jsx(Ot, {
                        component: 'img',
                        src: a,
                        alt: 'Captured',
                        sx: { maxWidth: '100%', maxHeight: '70vh', borderRadius: 2, boxShadow: 3 },
                      }),
                    ],
                  }),
                R.jsxs(Ot, {
                  sx: { mt: 2, display: 'flex', flexDirection: 'column', gap: 2 },
                  children: [
                    R.jsxs(bi, {
                      variant: 'contained',
                      onClick: () => o(!0),
                      sx: { height: a ? 'auto' : '60px' },
                      children: ['Capture ', a ? 'Another' : 'a', ' Photo'],
                    }),
                    !!a &&
                      R.jsx(bi, { variant: 'outlined', onClick: () => i(null), disabled: !a, children: 'Clear Photo' }),
                  ],
                }),
              ],
            }),
      }),
      R.jsx(Ot, {
        sx: { bgcolor: 'grey.200', py: 2 },
        children: R.jsx(jm, {
          children: R.jsxs(en, {
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
yv.createRoot(document.getElementById('root')).render(R.jsx(H.StrictMode, { children: R.jsx(X3, {}) }));
