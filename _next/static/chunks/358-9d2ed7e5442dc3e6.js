(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [358],
  {
    6726: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        o = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        a = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            o =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !o) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        s = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        l = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          u,
          c,
          d = arguments[0],
          f = 1,
          h = arguments.length,
          p = !1;
        for (
          "boolean" == typeof d && ((p = d), (d = arguments[1] || {}), (f = 2)),
            (null == d || ("object" != typeof d && "function" != typeof d)) &&
              (d = {});
          f < h;
          ++f
        )
          if (((t = arguments[f]), null != t))
            for (n in t)
              (r = l(d, n)),
                d !== (i = l(t, n)) &&
                  (p && i && (a(i) || (u = o(i)))
                    ? (u
                        ? ((u = !1), (c = r && o(r) ? r : []))
                        : (c = r && a(r) ? r : {}),
                      s(d, { name: n, newValue: e(p, c, i) }))
                    : void 0 !== i && s(d, { name: n, newValue: i }));
        return d;
      };
    },
    4958: (e) => {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        o = /^:\s*/,
        a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        s = /^[;\s]*/,
        l = /^\s+|\s+$/g;
      function u(e) {
        return e ? e.replace(l, "") : "";
      }
      e.exports = function (e, l) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        l = l || {};
        var c = 1,
          d = 1;
        function f(e) {
          var t = e.match(n);
          t && (c += t.length);
          var r = e.lastIndexOf("\n");
          d = ~r ? e.length - r : d + e.length;
        }
        function h() {
          var e = { line: c, column: d };
          return function (t) {
            return (t.position = new p(e)), y(r), t;
          };
        }
        function p(e) {
          (this.start = e),
            (this.end = { line: c, column: d }),
            (this.source = l.source);
        }
        p.prototype.content = e;
        var m = [];
        function g(t) {
          var n = Error(l.source + ":" + c + ":" + d + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = l.source),
            (n.line = c),
            (n.column = d),
            (n.source = e),
            l.silent)
          )
            m.push(n);
          else throw n;
        }
        function y(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return f(r), (e = e.slice(r.length)), n;
          }
        }
        function v(e) {
          var t;
          for (e = e || []; (t = b()); ) !1 !== t && e.push(t);
          return e;
        }
        function b() {
          var t = h();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return g("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (d += 2),
              f(r),
              (e = e.slice(n)),
              (d += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          y(r),
          (function () {
            var e,
              n = [];
            for (
              v(n);
              (e = (function () {
                var e = h(),
                  n = y(i);
                if (n) {
                  if ((b(), !y(o))) return g("property missing ':'");
                  var r = y(a),
                    l = e({
                      type: "declaration",
                      property: u(n[0].replace(t, "")),
                      value: r ? u(r[0].replace(t, "")) : "",
                    });
                  return y(s), l;
                }
              })());

            )
              !1 !== e && (n.push(e), v(n));
            return n;
          })()
        );
      };
    },
    2151: (e, t, n) => {
      var r = 0 / 0,
        i = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt,
        u = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        c = "object" == typeof self && self && self.Object === Object && self,
        d = u || c || Function("return this")(),
        f = Object.prototype.toString,
        h = Math.max,
        p = Math.min,
        m = function () {
          return d.Date.now();
        };
      function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function y(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == f.call(t))
        )
          return r;
        if (g(e)) {
          var t,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = g(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = a.test(e);
        return u || s.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? r : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = !1,
          d = !1,
          f = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function v(t) {
          var n = r,
            o = i;
          return (r = i = void 0), (u = t), (a = e.apply(o, n));
        }
        function b(e) {
          var n = e - l,
            r = e - u;
          return void 0 === l || n >= t || n < 0 || (d && r >= o);
        }
        function x() {
          var e,
            n,
            r,
            i = m();
          if (b(i)) return w(i);
          s = setTimeout(
            x,
            ((e = i - l), (n = i - u), (r = t - e), d ? p(r, o - n) : r)
          );
        }
        function w(e) {
          return ((s = void 0), f && r) ? v(e) : ((r = i = void 0), a);
        }
        function k() {
          var e,
            n = m(),
            o = b(n);
          if (((r = arguments), (i = this), (l = n), o)) {
            if (void 0 === s)
              return (u = e = l), (s = setTimeout(x, t)), c ? v(e) : a;
            if (d) return (s = setTimeout(x, t)), v(l);
          }
          return void 0 === s && (s = setTimeout(x, t)), a;
        }
        return (
          (t = y(t) || 0),
          g(n) &&
            ((c = !!n.leading),
            (o = (d = "maxWait" in n) ? h(y(n.maxWait) || 0, t) : o),
            (f = "trailing" in n ? !!n.trailing : f)),
          (k.cancel = function () {
            void 0 !== s && clearTimeout(s), (u = 0), (r = l = i = s = void 0);
          }),
          (k.flush = function () {
            return void 0 === s ? a : w(m());
          }),
          k
        );
      };
    },
    6648: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => i.a });
      var r = n(5601),
        i = n.n(r);
    },
    7138: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => i.a });
      var r = n(231),
        i = n.n(r);
    },
    8064: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          callServer: function () {
            return r.callServer;
          },
          createServerReference: function () {
            return o;
          },
          findSourceMapURL: function () {
            return i.findSourceMapURL;
          },
        });
      let r = n(4590),
        i = n(6705),
        o = n(6671).createServerReference;
    },
    844: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8505: (e, t, n) => {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8173: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = n(9920),
        i = n(1452),
        o = n(7437),
        a = i._(n(2265)),
        s = r._(n(4887)),
        l = r._(n(8321)),
        u = n(497),
        c = n(7103),
        d = n(3938);
      n(2301);
      let f = n(291),
        h = r._(n(1241)),
        p = n(7616),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, n, r, i, o, a) {
        let s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function y(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, a.forwardRef)((e, t) => {
        let {
            src: n,
            // srcSet: r,
            sizes: i,
            height: s,
            width: l,
            decoding: u,
            className: c,
            style: d,
            fetchPriority: f,
            placeholder: h,
            loading: m,
            unoptimized: v,
            fill: b,
            onLoadRef: x,
            onLoadingCompleteRef: w,
            setBlurComplete: k,
            setShowAltText: E,
            sizesInput: S,
            onLoad: T,
            onError: A,
            ...C
          } = e,
          P = (0, a.useCallback)(
            (e) => {
              e && (A && (e.src = e.src), e.complete && g(e, h, x, w, k, v, S));
            },
            [n, h, x, w, k, A, v, S]
          ),
          _ = (0, p.useMergedRef)(t, P);
        return (0, o.jsx)("img", {
          ...C,
          ...y(f),
          loading: m,
          width: l,
          height: s,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: d,
          sizes: i,
          // srcSet: r,
          src: n,
          ref: _,
          onLoad: (e) => {
            g(e.currentTarget, h, x, w, k, v, S);
          },
          onError: (e) => {
            E(!0), "empty" !== h && k(!0), A && A(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...y(n.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(n.src, r), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let x = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(f.RouterContext),
          r = (0, a.useContext)(d.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = m || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: s, onLoadingComplete: l } = e,
          p = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          p.current = s;
        }, [s]);
        let g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [y, x] = (0, a.useState)(!1),
          [w, k] = (0, a.useState)(!1),
          { props: E, meta: S } = (0, u.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: i,
            blurComplete: y,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {
              ...E,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: p,
              onLoadingCompleteRef: g,
              setBlurComplete: x,
              setShowAltText: k,
              sizesInput: e.sizes,
              ref: t,
            }),
            S.priority
              ? (0, o.jsx)(b, { isAppRouter: !n, imgAttributes: E })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(9920),
        i = n(7437),
        o = r._(n(2265)),
        a = n(8016),
        s = n(8029),
        l = n(1142),
        u = n(3461),
        c = n(844),
        d = n(291),
        f = n(4467),
        h = n(3106),
        p = n(8505),
        m = n(4897),
        g = n(1507),
        y = n(7616),
        v = new Set();
      function b(e, t, n, r, i, o) {
        if ("undefined" != typeof window && (o || (0, s.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck && !o) {
            let i =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(i)) return;
            v.add(i);
          }
          (async () => (o ? e.prefetch(t, i) : e.prefetch(t, n, r)))().catch(
            (e) => {}
          );
        }
      }
      function x(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let w = o.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: l,
          as: v,
          children: w,
          prefetch: k = null,
          passHref: E,
          replace: S,
          shallow: T,
          scroll: A,
          locale: C,
          onClick: P,
          onMouseEnter: _,
          onTouchStart: I,
          legacyBehavior: R = !1,
          ...O
        } = e;
        (n = w),
          R &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, i.jsx)("a", { children: n }));
        let M = o.default.useContext(d.RouterContext),
          D = o.default.useContext(f.AppRouterContext),
          j = null != M ? M : D,
          L = !M,
          N = !1 !== k,
          F = null === k ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: z, as: V } = o.default.useMemo(() => {
            if (!M) {
              let e = x(l);
              return { href: e, as: v ? x(v) : e };
            }
            let [e, t] = (0, a.resolveHref)(M, l, !0);
            return { href: e, as: v ? (0, a.resolveHref)(M, v) : t || e };
          }, [M, l, v]),
          B = o.default.useRef(z),
          U = o.default.useRef(V);
        R && (r = o.default.Children.only(n));
        let H = R ? r && "object" == typeof r && r.ref : t,
          [W, $, Y] = (0, h.useIntersection)({ rootMargin: "200px" }),
          X = o.default.useCallback(
            (e) => {
              (U.current !== V || B.current !== z) &&
                (Y(), (U.current = V), (B.current = z)),
                W(e);
            },
            [V, z, Y, W]
          ),
          q = (0, y.useMergedRef)(X, H);
        o.default.useEffect(() => {
          j && $ && N && b(j, z, V, { locale: C }, { kind: F }, L);
        }, [V, z, $, C, N, null == M ? void 0 : M.locale, j, L, F]);
        let G = {
          ref: q,
          onClick(e) {
            R || "function" != typeof P || P(e),
              R &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              j &&
                !e.defaultPrevented &&
                (function (e, t, n, r, i, a, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, s.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](n, r, {
                          shallow: a,
                          locale: u,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? o.default.startTransition(f) : f();
                })(e, j, z, V, S, T, A, C, L);
          },
          onMouseEnter(e) {
            R || "function" != typeof _ || _(e),
              R &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              j &&
                (N || !L) &&
                b(
                  j,
                  z,
                  V,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
          onTouchStart: function (e) {
            R || "function" != typeof I || I(e),
              R &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              j &&
                (N || !L) &&
                b(
                  j,
                  z,
                  V,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(V)) G.href = V;
        else if (!R || E || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== C ? C : null == M ? void 0 : M.locale,
            t =
              (null == M ? void 0 : M.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                V,
                e,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              );
          G.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(V, e, null == M ? void 0 : M.defaultLocale)
            );
        }
        return R
          ? o.default.cloneElement(r, G)
          : (0, i.jsx)("a", { ...O, ...G, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9189: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(8323),
        i = n(1142),
        o = n(5519),
        a = n(3461),
        s = n(8157),
        l = n(8029),
        u = n(9195),
        c = n(20);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
          h = f.match(/^[a-zA-Z]{1,}:\/\//),
          p = h ? f.slice(h[0].length) : f;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, a.normalizeRepeatedSlashes)(p);
          f = (h ? h[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, s.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: s } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n
              );
            a &&
              (t = (0, i.formatWithValidation)({
                pathname: a,
                hash: e.hash,
                query: (0, o.omit)(n, s),
              }));
          }
          let a =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [a, t || a] : a;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        i = n(9189),
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          u = l || !o,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          h = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = s.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: i,
                      }),
                      s.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), a.delete(r);
                        let e = s.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, n, t, c, f.current]),
          [
            h,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7616: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(2265);
      function i(e, t) {
        let n = (0, r.useRef)(() => {}),
          i = (0, r.useRef)(() => {});
        return (0, r.useMemo)(
          () =>
            e && t
              ? (r) => {
                  null === r
                    ? (n.current(), i.current())
                    : ((n.current = o(e, r)), (i.current = o(t, r)));
                }
              : e || t,
          [e, t]
        );
      }
      function o(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let n = e(t);
          return "function" == typeof n ? n : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6300: (e) => {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = l(e),
                  n = t[0],
                  r = t[1];
                return ((n + r) * 3) / 4 - r;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    n,
                    o = l(e),
                    a = o[0],
                    s = o[1],
                    u = new i(((a + s) * 3) / 4 - s),
                    c = 0,
                    d = s > 0 ? a - 4 : a;
                  for (n = 0; n < d; n += 4)
                    (t =
                      (r[e.charCodeAt(n)] << 18) |
                      (r[e.charCodeAt(n + 1)] << 12) |
                      (r[e.charCodeAt(n + 2)] << 6) |
                      r[e.charCodeAt(n + 3)]),
                      (u[c++] = (t >> 16) & 255),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t);
                  return (
                    2 === s &&
                      ((t =
                        (r[e.charCodeAt(n)] << 2) |
                        (r[e.charCodeAt(n + 1)] >> 4)),
                      (u[c++] = 255 & t)),
                    1 === s &&
                      ((t =
                        (r[e.charCodeAt(n)] << 10) |
                        (r[e.charCodeAt(n + 1)] << 4) |
                        (r[e.charCodeAt(n + 2)] >> 2)),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t)),
                    u
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i;
                    a < s;
                    a += 16383
                  )
                    o.push(
                      (function (e, t, r) {
                        for (var i, o = [], a = t; a < r; a += 3)
                          o.push(
                            n[
                              ((i =
                                ((e[a] << 16) & 0xff0000) +
                                ((e[a + 1] << 8) & 65280) +
                                (255 & e[a + 2])) >>
                                18) &
                                63
                            ] +
                              n[(i >> 12) & 63] +
                              n[(i >> 6) & 63] +
                              n[63 & i]
                          );
                        return o.join("");
                      })(e, a, a + 16383 > s ? s : a + 16383)
                    );
                  return (
                    1 === i
                      ? o.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                      : 2 === i &&
                        o.push(
                          n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                            n[(t >> 4) & 63] +
                            n[(t << 2) & 63] +
                            "="
                        ),
                    o.join("")
                  );
                });
              for (
                var n = [],
                  r = [],
                  i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  o =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  a = 0,
                  s = o.length;
                a < s;
                ++a
              )
                (n[a] = o[a]), (r[o.charCodeAt(a)] = a);
              function l(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                -1 === n && (n = t);
                var r = n === t ? 0 : 4 - (n % 4);
                return [n, r];
              }
              (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, n) {
              "use strict";
              var r = n(675),
                i = n(783),
                o =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function a(e) {
                if (e > 0x7fffffff)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, s.prototype), t;
              }
              function s(e, t, n) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return c(e);
                }
                return l(e, t, n);
              }
              function l(e, t, n) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !s.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    var n = 0 | h(e, t),
                      r = a(n),
                      i = r.write(e, t);
                    return i !== n && (r = r.slice(0, i)), r;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return d(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  _(e, ArrayBuffer) ||
                  (e && _(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (_(e, SharedArrayBuffer) ||
                      (e && _(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, n) {
                    var r;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (r =
                          void 0 === t && void 0 === n
                            ? new Uint8Array(e)
                            : void 0 === n
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, n)),
                        s.prototype
                      ),
                      r
                    );
                  })(e, t, n);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var r = e.valueOf && e.valueOf();
                if (null != r && r !== e) return s.from(r, t, n);
                var i = (function (e) {
                  if (s.isBuffer(e)) {
                    var t,
                      n = 0 | f(e.length),
                      r = a(n);
                    return 0 === r.length || e.copy(r, 0, 0, n), r;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? a(0)
                      : d(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? d(e.data)
                    : void 0;
                })(e);
                if (i) return i;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return s.from(e[Symbol.toPrimitive]("string"), t, n);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function u(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function c(e) {
                return u(e), a(e < 0 ? 0 : 0 | f(e));
              }
              function d(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | f(e.length), n = a(t), r = 0;
                  r < t;
                  r += 1
                )
                  n[r] = 255 & e[r];
                return n;
              }
              function f(e) {
                if (e >= 0x7fffffff)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function h(e, t) {
                if (s.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || _(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var n = e.length,
                  r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                for (var i = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return n;
                    case "utf8":
                    case "utf-8":
                      return T(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * n;
                    case "hex":
                      return n >>> 1;
                    case "base64":
                      return C(e).length;
                    default:
                      if (i) return r ? -1 : T(e).length;
                      (t = ("" + t).toLowerCase()), (i = !0);
                  }
              }
              function p(e, t, n) {
                var i,
                  o,
                  a = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0 || (n >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, n) {
                        var r = e.length;
                        (!t || t < 0) && (t = 0),
                          (!n || n < 0 || n > r) && (n = r);
                        for (var i = "", o = t; o < n; ++o) i += I[e[o]];
                        return i;
                      })(this, t, n);
                    case "utf8":
                    case "utf-8":
                      return v(this, t, n);
                    case "ascii":
                      return (function (e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var i = t; i < n; ++i)
                          r += String.fromCharCode(127 & e[i]);
                        return r;
                      })(this, t, n);
                    case "latin1":
                    case "binary":
                      return (function (e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var i = t; i < n; ++i)
                          r += String.fromCharCode(e[i]);
                        return r;
                      })(this, t, n);
                    case "base64":
                      return (
                        (i = t),
                        (o = n),
                        0 === i && o === this.length
                          ? r.fromByteArray(this)
                          : r.fromByteArray(this.slice(i, o))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, n) {
                        for (
                          var r = e.slice(t, n), i = "", o = 0;
                          o < r.length;
                          o += 2
                        )
                          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                        return i;
                      })(this, t, n);
                    default:
                      if (a) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (a = !0);
                  }
              }
              function m(e, t, n) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
              }
              function g(e, t, n, r, i) {
                var o;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof n
                    ? ((r = n), (n = 0))
                    : n > 0x7fffffff
                    ? (n = 0x7fffffff)
                    : n < -0x80000000 && (n = -0x80000000),
                  (o = n = +n) != o && (n = i ? 0 : e.length - 1),
                  n < 0 && (n = e.length + n),
                  n >= e.length)
                ) {
                  if (i) return -1;
                  n = e.length - 1;
                } else if (n < 0) {
                  if (!i) return -1;
                  n = 0;
                }
                if (("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)))
                  return 0 === t.length ? -1 : y(e, t, n, r, i);
                if ("number" == typeof t)
                  return ((t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? i
                      ? Uint8Array.prototype.indexOf.call(e, t, n)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                    : y(e, [t], n, r, i);
                throw TypeError("val must be string, number or Buffer");
              }
              function y(e, t, n, r, i) {
                var o,
                  a = 1,
                  s = e.length,
                  l = t.length;
                if (
                  void 0 !== r &&
                  ("ucs2" === (r = String(r).toLowerCase()) ||
                    "ucs-2" === r ||
                    "utf16le" === r ||
                    "utf-16le" === r)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (a = 2), (s /= 2), (l /= 2), (n /= 2);
                }
                function u(e, t) {
                  return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (i) {
                  var c = -1;
                  for (o = n; o < s; o++)
                    if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                      if ((-1 === c && (c = o), o - c + 1 === l)) return c * a;
                    } else -1 !== c && (o -= o - c), (c = -1);
                } else
                  for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                    for (var d = !0, f = 0; f < l; f++)
                      if (u(e, o + f) !== u(t, f)) {
                        d = !1;
                        break;
                      }
                    if (d) return o;
                  }
                return -1;
              }
              function v(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n; ) {
                  var o,
                    a,
                    s,
                    l,
                    u = e[i],
                    c = null,
                    d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + d <= n)
                    switch (d) {
                      case 1:
                        u < 128 && (c = u);
                        break;
                      case 2:
                        (192 & (o = e[i + 1])) == 128 &&
                          (l = ((31 & u) << 6) | (63 & o)) > 127 &&
                          (c = l);
                        break;
                      case 3:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (l =
                              ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                              2047 &&
                            (l < 55296 || l > 57343) &&
                            (c = l);
                        break;
                      case 4:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (s = e[i + 3]),
                          (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (192 & s) == 128 &&
                            (l =
                              ((15 & u) << 18) |
                              ((63 & o) << 12) |
                              ((63 & a) << 6) |
                              (63 & s)) > 65535 &&
                            l < 1114112 &&
                            (c = l);
                    }
                  null === c
                    ? ((c = 65533), (d = 1))
                    : c > 65535 &&
                      ((c -= 65536),
                      r.push(((c >>> 10) & 1023) | 55296),
                      (c = 56320 | (1023 & c))),
                    r.push(c),
                    (i += d);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var n = "", r = 0; r < t; )
                    n += String.fromCharCode.apply(
                      String,
                      e.slice(r, (r += 4096))
                    );
                  return n;
                })(r);
              }
              function b(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > n)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function x(e, t, n, r, i, o) {
                if (!s.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > i || t < o)
                  throw RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw RangeError("Index out of range");
              }
              function w(e, t, n, r, i, o) {
                if (n + r > e.length || n < 0)
                  throw RangeError("Index out of range");
              }
              function k(e, t, n, r, o) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  o ||
                    w(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(e, t, n, r, 23, 4),
                  n + 4
                );
              }
              function E(e, t, n, r, o) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  o ||
                    w(
                      e,
                      t,
                      n,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  i.write(e, t, n, r, 52, 8),
                  n + 8
                );
              }
              (t.Buffer = s),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), s.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 0x7fffffff),
                (s.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                s.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(s.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(s.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (s.poolSize = 8192),
                (s.from = function (e, t, n) {
                  return l(e, t, n);
                }),
                Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(s, Uint8Array),
                (s.alloc = function (e, t, n) {
                  return (u(e), e <= 0)
                    ? a(e)
                    : void 0 !== t
                    ? "string" == typeof n
                      ? a(e).fill(t, n)
                      : a(e).fill(t)
                    : a(e);
                }),
                (s.allocUnsafe = function (e) {
                  return c(e);
                }),
                (s.allocUnsafeSlow = function (e) {
                  return c(e);
                }),
                (s.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== s.prototype;
                }),
                (s.compare = function (e, t) {
                  if (
                    (_(e, Uint8Array) &&
                      (e = s.from(e, e.offset, e.byteLength)),
                    _(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                    !s.isBuffer(e) || !s.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
                    i < o;
                    ++i
                  )
                    if (e[i] !== t[i]) {
                      (n = e[i]), (r = t[i]);
                      break;
                    }
                  return n < r ? -1 : r < n ? 1 : 0;
                }),
                (s.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (s.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return s.alloc(0);
                  if (void 0 === t)
                    for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                  var n,
                    r = s.allocUnsafe(t),
                    i = 0;
                  for (n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if ((_(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(r, i), (i += o.length);
                  }
                  return r;
                }),
                (s.byteLength = h),
                (s.prototype._isBuffer = !0),
                (s.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) m(this, t, t + 1);
                  return this;
                }),
                (s.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    m(this, t, t + 3), m(this, t + 1, t + 2);
                  return this;
                }),
                (s.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    m(this, t, t + 7),
                      m(this, t + 1, t + 6),
                      m(this, t + 2, t + 5),
                      m(this, t + 3, t + 4);
                  return this;
                }),
                (s.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? v(this, 0, e)
                    : p.apply(this, arguments);
                }),
                (s.prototype.toLocaleString = s.prototype.toString),
                (s.prototype.equals = function (e) {
                  if (!s.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === s.compare(this, e);
                }),
                (s.prototype.inspect = function () {
                  var e = "",
                    n = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, n)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > n && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                o && (s.prototype[o] = s.prototype.inspect),
                (s.prototype.compare = function (e, t, n, r, i) {
                  if (
                    (_(e, Uint8Array) &&
                      (e = s.from(e, e.offset, e.byteLength)),
                    !s.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === n && (n = e ? e.length : 0),
                    void 0 === r && (r = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || n > e.length || r < 0 || i > this.length)
                  )
                    throw RangeError("out of range index");
                  if (r >= i && t >= n) return 0;
                  if (r >= i) return -1;
                  if (t >= n) return 1;
                  if (
                    ((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var o = i - r,
                      a = n - t,
                      l = Math.min(o, a),
                      u = this.slice(r, i),
                      c = e.slice(t, n),
                      d = 0;
                    d < l;
                    ++d
                  )
                    if (u[d] !== c[d]) {
                      (o = u[d]), (a = c[d]);
                      break;
                    }
                  return o < a ? -1 : a < o ? 1 : 0;
                }),
                (s.prototype.includes = function (e, t, n) {
                  return -1 !== this.indexOf(e, t, n);
                }),
                (s.prototype.indexOf = function (e, t, n) {
                  return g(this, e, t, n, !0);
                }),
                (s.prototype.lastIndexOf = function (e, t, n) {
                  return g(this, e, t, n, !1);
                }),
                (s.prototype.write = function (e, t, n, r) {
                  if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                  else if (void 0 === n && "string" == typeof t)
                    (r = t), (n = this.length), (t = 0);
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(n)
                        ? ((n >>>= 0), void 0 === r && (r = "utf8"))
                        : ((r = n), (n = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f,
                    h,
                    p,
                    m,
                    g = this.length - t;
                  if (
                    ((void 0 === n || n > g) && (n = g),
                    (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  r || (r = "utf8");
                  for (var y = !1; ; )
                    switch (r) {
                      case "hex":
                        return (function (e, t, n, r) {
                          n = Number(n) || 0;
                          var i = e.length - n;
                          r ? (r = Number(r)) > i && (r = i) : (r = i);
                          var o = t.length;
                          r > o / 2 && (r = o / 2);
                          for (var a = 0; a < r; ++a) {
                            var s = parseInt(t.substr(2 * a, 2), 16);
                            if (s != s) break;
                            e[n + a] = s;
                          }
                          return a;
                        })(this, e, t, n);
                      case "utf8":
                      case "utf-8":
                        return (
                          (l = t), (u = n), P(T(e, this.length - l), this, l, u)
                        );
                      case "ascii":
                        return (c = t), (d = n), P(A(e), this, c, d);
                      case "latin1":
                      case "binary":
                        return (
                          (i = this),
                          (o = e),
                          (a = t),
                          (s = n),
                          P(A(o), i, a, s)
                        );
                      case "base64":
                        return (f = t), (h = n), P(C(e), this, f, h);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (p = t),
                          (m = n),
                          P(
                            (function (e, t) {
                              for (
                                var n, r, i = [], o = 0;
                                o < e.length && !((t -= 2) < 0);
                                ++o
                              )
                                (r = (n = e.charCodeAt(o)) >> 8),
                                  i.push(n % 256),
                                  i.push(r);
                              return i;
                            })(e, this.length - p),
                            this,
                            p,
                            m
                          )
                        );
                      default:
                        if (y) throw TypeError("Unknown encoding: " + r);
                        (r = ("" + r).toLowerCase()), (y = !0);
                    }
                }),
                (s.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (s.prototype.slice = function (e, t) {
                  var n = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? n : ~~t),
                    e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                    t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                    t < e && (t = e);
                  var r = this.subarray(e, t);
                  return Object.setPrototypeOf(r, s.prototype), r;
                }),
                (s.prototype.readUIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    r += this[e + o] * i;
                  return r;
                }),
                (s.prototype.readUIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
                    r += this[e + --t] * i;
                  return r;
                }),
                (s.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || b(e, 1, this.length), this[e];
                }),
                (s.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (s.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (s.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      0x1000000 * this[e + 3]
                  );
                }),
                (s.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    0x1000000 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (s.prototype.readIntLE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    r += this[e + o] * i;
                  return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (s.prototype.readIntBE = function (e, t, n) {
                  (e >>>= 0), (t >>>= 0), n || b(e, t, this.length);
                  for (
                    var r = t, i = 1, o = this[e + --r];
                    r > 0 && (i *= 256);

                  )
                    o += this[e + --r] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (s.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || b(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (s.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || b(e, 2, this.length);
                  var n = this[e] | (this[e + 1] << 8);
                  return 32768 & n ? 0xffff0000 | n : n;
                }),
                (s.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || b(e, 2, this.length);
                  var n = this[e + 1] | (this[e] << 8);
                  return 32768 & n ? 0xffff0000 | n : n;
                }),
                (s.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (s.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (s.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    i.read(this, e, !0, 23, 4)
                  );
                }),
                (s.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 4, this.length),
                    i.read(this, e, !1, 23, 4)
                  );
                }),
                (s.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 8, this.length),
                    i.read(this, e, !0, 52, 8)
                  );
                }),
                (s.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || b(e, 8, this.length),
                    i.read(this, e, !1, 52, 8)
                  );
                }),
                (s.prototype.writeUIntLE = function (e, t, n, r) {
                  if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n) - 1;
                    x(this, e, t, n, i, 0);
                  }
                  var o = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < n && (o *= 256); )
                    this[t + a] = (e / o) & 255;
                  return t + n;
                }),
                (s.prototype.writeUIntBE = function (e, t, n, r) {
                  if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n) - 1;
                    x(this, e, t, n, i, 0);
                  }
                  var o = n - 1,
                    a = 1;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    this[t + o] = (e / a) & 255;
                  return t + n;
                }),
                (s.prototype.writeUInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (s.prototype.writeUInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (s.prototype.writeUInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (s.prototype.writeUInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 4, 0xffffffff, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeUInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 4, 0xffffffff, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeIntLE = function (e, t, n, r) {
                  if (((e = +e), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    x(this, e, t, n, i - 1, -i);
                  }
                  var o = 0,
                    a = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++o < n && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + n;
                }),
                (s.prototype.writeIntBE = function (e, t, n, r) {
                  if (((e = +e), (t >>>= 0), !r)) {
                    var i = Math.pow(2, 8 * n - 1);
                    x(this, e, t, n, i - 1, -i);
                  }
                  var o = n - 1,
                    a = 1,
                    s = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + n;
                }),
                (s.prototype.writeInt8 = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (s.prototype.writeInt16LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (s.prototype.writeInt16BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (s.prototype.writeInt32LE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 4, 0x7fffffff, -0x80000000),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (s.prototype.writeInt32BE = function (e, t, n) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    n || x(this, e, t, 4, 0x7fffffff, -0x80000000),
                    e < 0 && (e = 0xffffffff + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeFloatLE = function (e, t, n) {
                  return k(this, e, t, !0, n);
                }),
                (s.prototype.writeFloatBE = function (e, t, n) {
                  return k(this, e, t, !1, n);
                }),
                (s.prototype.writeDoubleLE = function (e, t, n) {
                  return E(this, e, t, !0, n);
                }),
                (s.prototype.writeDoubleBE = function (e, t, n) {
                  return E(this, e, t, !1, n);
                }),
                (s.prototype.copy = function (e, t, n, r) {
                  if (!s.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (n || (n = 0),
                    r || 0 === r || (r = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    r > 0 && r < n && (r = n),
                    r === n || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (n < 0 || n >= this.length)
                    throw RangeError("Index out of range");
                  if (r < 0) throw RangeError("sourceEnd out of bounds");
                  r > this.length && (r = this.length),
                    e.length - t < r - n && (r = e.length - t + n);
                  var i = r - n;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, n, r);
                  else if (this === e && n < t && t < r)
                    for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
                  else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
                  return i;
                }),
                (s.prototype.fill = function (e, t, n, r) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((r = t), (t = 0), (n = this.length))
                        : "string" == typeof n && ((r = n), (n = this.length)),
                      void 0 !== r && "string" != typeof r)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof r && !s.isEncoding(r))
                      throw TypeError("Unknown encoding: " + r);
                    if (1 === e.length) {
                      var i,
                        o = e.charCodeAt(0);
                      (("utf8" === r && o < 128) || "latin1" === r) && (e = o);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < n)
                    throw RangeError("Out of range index");
                  if (n <= t) return this;
                  if (
                    ((t >>>= 0),
                    (n = void 0 === n ? this.length : n >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (i = t; i < n; ++i) this[i] = e;
                  else {
                    var a = s.isBuffer(e) ? e : s.from(e, r),
                      l = a.length;
                    if (0 === l)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (i = 0; i < n - t; ++i) this[i + t] = a[i % l];
                  }
                  return this;
                });
              var S = /[^+/0-9A-Za-z-_]/g;
              function T(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                  if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                      if (n > 56319 || a + 1 === r) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = n;
                      continue;
                    }
                    if (n < 56320) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                      continue;
                    }
                    n = (((i - 55296) << 10) | (n - 56320)) + 65536;
                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), n < 128)) {
                    if ((t -= 1) < 0) break;
                    o.push(n);
                  } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(
                      (n >> 12) | 224,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  } else if (n < 1114112) {
                    if ((t -= 4) < 0) break;
                    o.push(
                      (n >> 18) | 240,
                      ((n >> 12) & 63) | 128,
                      ((n >> 6) & 63) | 128,
                      (63 & n) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return o;
              }
              function A(e) {
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(255 & e.charCodeAt(n));
                return t;
              }
              function C(e) {
                return r.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(S, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function P(e, t, n, r) {
                for (
                  var i = 0;
                  i < r && !(i + n >= t.length) && !(i >= e.length);
                  ++i
                )
                  t[i + n] = e[i];
                return i;
              }
              function _(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var I = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), n = 0;
                  n < 16;
                  ++n
                )
                  for (var r = 16 * n, i = 0; i < 16; ++i)
                    t[r + i] = e[n] + e[i];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, n, r, i) {
                var o,
                  a,
                  s = 8 * i - r - 1,
                  l = (1 << s) - 1,
                  u = l >> 1,
                  c = -7,
                  d = n ? i - 1 : 0,
                  f = n ? -1 : 1,
                  h = e[t + d];
                for (
                  d += f, o = h & ((1 << -c) - 1), h >>= -c, c += s;
                  c > 0;
                  o = 256 * o + e[t + d], d += f, c -= 8
                );
                for (
                  a = o & ((1 << -c) - 1), o >>= -c, c += r;
                  c > 0;
                  a = 256 * a + e[t + d], d += f, c -= 8
                );
                if (0 === o) o = 1 - u;
                else {
                  if (o === l) return a ? NaN : (1 / 0) * (h ? -1 : 1);
                  (a += Math.pow(2, r)), (o -= u);
                }
                return (h ? -1 : 1) * a * Math.pow(2, o - r);
              }),
                (t.write = function (e, t, n, r, i, o) {
                  var a,
                    s,
                    l,
                    u = 8 * o - i - 1,
                    c = (1 << u) - 1,
                    d = c >> 1,
                    f = 23 === i ? 5960464477539062e-23 : 0,
                    h = r ? 0 : o - 1,
                    p = r ? 1 : -1,
                    m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((s = isNaN(t) ? 1 : 0), (a = c))
                      : ((a = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                        a + d >= 1
                          ? (t += f / l)
                          : (t += f * Math.pow(2, 1 - d)),
                        t * l >= 2 && (a++, (l /= 2)),
                        a + d >= c
                          ? ((s = 0), (a = c))
                          : a + d >= 1
                          ? ((s = (t * l - 1) * Math.pow(2, i)), (a += d))
                          : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)),
                            (a = 0)));
                    i >= 8;
                    e[n + h] = 255 & s, h += p, s /= 256, i -= 8
                  );
                  for (
                    a = (a << i) | s, u += i;
                    u > 0;
                    e[n + h] = 255 & a, h += p, a /= 256, u -= 8
                  );
                  e[n + h - p] |= 128 * m;
                });
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var o = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return o.exports;
        }
        r.ab = "//";
        var i = r(72);
        e.exports = i;
      })();
    },
    3345: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ACTION_SUFFIX: function () {
            return c;
          },
          APP_DIR_ALIAS: function () {
            return R;
          },
          CACHE_ONE_YEAR: function () {
            return E;
          },
          DOT_NEXT_ALIAS: function () {
            return _;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return K;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return W;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return X;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return $;
          },
          INFINITE_CACHE: function () {
            return S;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return C;
          },
          MIDDLEWARE_FILENAME: function () {
            return T;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return A;
          },
          NEXT_BODY_SUFFIX: function () {
            return h;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return k;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return g;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return y;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return m;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return w;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return p;
          },
          NEXT_CACHE_TAG_MAX_ITEMS: function () {
            return b;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return x;
          },
          NEXT_DATA_SUFFIX: function () {
            return d;
          },
          NEXT_INTERCEPTION_MARKER_PREFIX: function () {
            return r;
          },
          NEXT_META_SUFFIX: function () {
            return f;
          },
          NEXT_QUERY_PARAM_PREFIX: function () {
            return n;
          },
          NEXT_RESUME_HEADER: function () {
            return v;
          },
          NON_STANDARD_NODE_ENV: function () {
            return q;
          },
          PAGES_DIR_ALIAS: function () {
            return P;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return i;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return o;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return F;
          },
          ROOT_DIR_ALIAS: function () {
            return I;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return N;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return L;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return D;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return M;
          },
          RSC_CACHE_WRAPPER_ALIAS: function () {
            return j;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return O;
          },
          RSC_PREFETCH_SUFFIX: function () {
            return a;
          },
          RSC_SEGMENTS_DIR_SUFFIX: function () {
            return s;
          },
          RSC_SEGMENT_SUFFIX: function () {
            return l;
          },
          RSC_SUFFIX: function () {
            return u;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return H;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return V;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return B;
          },
          SERVER_RUNTIME: function () {
            return J;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return G;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return z;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return U;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return Y;
          },
          WEBPACK_LAYERS: function () {
            return Q;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return ee;
          },
        });
      let n = "nxtP",
        r = "nxtI",
        i = "x-prerender-revalidate",
        o = "x-prerender-revalidate-if-generated",
        a = ".prefetch.rsc",
        s = ".segments",
        l = ".segment.rsc",
        u = ".rsc",
        c = ".action",
        d = ".json",
        f = ".meta",
        h = ".body",
        p = "x-next-cache-tags",
        m = "x-next-cache-soft-tags",
        g = "x-next-revalidated-tags",
        y = "x-next-revalidate-tag-token",
        v = "next-resume",
        b = 64,
        x = 256,
        w = 1024,
        k = "_N_T_",
        E = 31536e3,
        S = 0xfffffffe,
        T = "middleware",
        A = `(?:src/)?${T}`,
        C = "instrumentation",
        P = "private-next-pages",
        _ = "private-dot-next",
        I = "private-next-root-dir",
        R = "private-next-app-dir",
        O = "private-next-rsc-mod-ref-proxy",
        M = "private-next-rsc-action-validate",
        D = "private-next-rsc-server-reference",
        j = "private-next-rsc-cache-wrapper",
        L = "private-next-rsc-action-encryption",
        N = "private-next-rsc-action-client-wrapper",
        F =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        z =
          "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        V =
          "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        B =
          "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        U =
          "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        H =
          "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        W =
          "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        $ =
          "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        Y =
          "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        X =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        q =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        G =
          "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        K = ["app", "pages", "components", "lib", "src"],
        J = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs",
        },
        Z = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          instrument: "instrument",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
          appMetadataRoute: "app-metadata-route",
        },
        Q = {
          ...Z,
          GROUP: {
            builtinReact: [
              Z.reactServerComponents,
              Z.actionBrowser,
              Z.appMetadataRoute,
            ],
            serverOnly: [
              Z.reactServerComponents,
              Z.actionBrowser,
              Z.appMetadataRoute,
              Z.instrument,
              Z.middleware,
            ],
            neutralTarget: [Z.api],
            clientOnly: [Z.serverSideRendering, Z.appPagesBrowser],
            bundled: [
              Z.reactServerComponents,
              Z.actionBrowser,
              Z.appMetadataRoute,
              Z.serverSideRendering,
              Z.appPagesBrowser,
              Z.shared,
              Z.instrument,
            ],
            appPages: [
              Z.reactServerComponents,
              Z.serverSideRendering,
              Z.appPagesBrowser,
              Z.actionBrowser,
            ],
          },
        },
        ee = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__",
        };
    },
    2901: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext({});
    },
    687: (e, t) => {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    1943: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function i(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    497: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        n(2301);
      let r = n(1564),
        i = n(7103);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var n;
        let s,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: h = !1,
            loading: p,
            className: m,
            quality: g,
            width: y,
            height: v,
            fill: b = !1,
            style: x,
            overrideSrc: w,
            onLoad: k,
            onLoadingComplete: E,
            placeholder: S = "empty",
            blurDataURL: T,
            fetchPriority: A,
            decoding: C = "async",
            layout: P,
            objectFit: _,
            objectPosition: I,
            lazyBoundary: R,
            lazyRoot: O,
            ...M
          } = e,
          { imgConf: D, showAltText: j, blurComplete: L, defaultLoader: N } = t,
          F = D || i.imageConfigDefault;
        if ("allSizes" in F) s = F;
        else {
          let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t);
          s = { ...F, allSizes: e, deviceSizes: t };
        }
        if (void 0 === N)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let z = M.loader || N;
        delete M.loader, delete M.srcSet;
        let V = "__next_img_default" in z;
        if (V) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = z;
          z = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (P) {
          "fill" === P && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !d && (d = t);
        }
        let B = "",
          U = a(y),
          H = a(v);
        if ((n = c) && "object" == typeof n && (o(n) || void 0 !== n.src)) {
          let e = o(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (T = T || e.blurDataURL),
            (B = e.src),
            !b)
          ) {
            if (U || H) {
              if (U && !H) {
                let t = U / e.width;
                H = Math.round(e.height * t);
              } else if (!U && H) {
                let t = H / e.height;
                U = Math.round(e.width * t);
              }
            } else (U = e.width), (H = e.height);
          }
        }
        let W = !h && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : B) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (W = !1)),
          s.unoptimized && (f = !0),
          V && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0);
        let $ = a(g),
          Y = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: _,
                  objectPosition: I,
                }
              : {},
            j ? {} : { color: "transparent" },
            x
          ),
          X =
            L || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: U,
                  heightInt: H,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: T || "",
                  objectFit: Y.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          q = X
            ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          G = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: s,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              c = l.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              // srcSet: l
              //   .map(
              //     (e, r) =>
              //       s({ config: t, src: n, quality: o, width: e }) +
              //       " " +
              //       ("w" === u ? e : r + 1) +
              //       u
              //   )
              //   .join(", "),
              src: s({ config: t, src: n, quality: o, width: l[c] }),
            };
          })({
            config: s,
            src: c,
            unoptimized: f,
            width: U,
            quality: $,
            sizes: d,
            loader: z,
          });
        return {
          props: {
            ...M,
            loading: W ? "lazy" : p,
            fetchPriority: A,
            width: U,
            height: H,
            decoding: C,
            className: m,
            style: { ...Y, ...q },
            sizes: G.sizes,
            // srcSet: G.srcSet,
            src: w || G.src,
          },
          meta: { unoptimized: f, priority: h, placeholder: S, fill: b },
        };
      }
    },
    8321: (e, t, n) => {
      "use strict";
      var r = n(357);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return f;
          },
        });
      let i = n(9920),
        o = n(1452),
        a = n(7437),
        s = o._(n(2265)),
        l = i._(n(5960)),
        u = n(2901),
        c = n(6590),
        d = n(687);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, a.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, s.useContext)(u.AmpStateContext),
          r = (0, s.useContext)(c.HeadManagerContext);
        return (0, a.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, d.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: (e, t) => {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          s = r ? 40 * r : t,
          l = i ? 40 * i : n,
          u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(9920)._(n(2265)),
        i = n(7103),
        o = r.default.createContext(i.imageConfigDefault);
    },
    7103: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        });
      let r = n(9920),
        i = n(497),
        o = n(8173),
        a = r._(n(1241));
      function s(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = o.Image;
    },
    1241: (e, t) => {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          encodeURIComponent(n)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    291: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let r = n(1452)._(n(8323)),
        i = /https?|ftp|gopher|file/;
      function o(e) {
        let { auth: t, hostname: n } = e,
          o = e.protocol || "",
          a = e.pathname || "",
          s = e.hash || "",
          l = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : n &&
              ((u = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (u += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(r.urlQueryToSearchParams(l)));
        let c = e.search || (l && "?" + l) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          e.slashes || ((!o || i.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), a && "/" !== a[0] && (a = "/" + a))
            : u || (u = ""),
          s && "#" !== s[0] && (s = "#" + s),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            o +
            u +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            s
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function s(e) {
        return o(e);
      }
    },
    9195: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRouteObjects: function () {
            return r.getSortedRouteObjects;
          },
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let r = n(9089),
        i = n(8083);
    },
    20: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(1533),
        i = n(3169);
      function o(e, t, n) {
        let o = "",
          a = (0, i.getRouteRegex)(e),
          s = a.groups,
          l = (t !== e ? (0, r.getRouteMatcher)(a)(t) : "") || n;
        o = e;
        let u = Object.keys(s);
        return (
          u.every((e) => {
            let t = l[e] || "",
              { repeat: n, optional: r } = s[e],
              i = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (i = (t ? "" : "/") + "[" + i + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in l) &&
                (o =
                  o.replace(
                    i,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    8083: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3100),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          i.test(e)
        );
      }
    },
    8029: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3461),
        i = n(9404);
      function o(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, i.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: (e, t) => {
      "use strict";
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: (e, t) => {
      "use strict";
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
              ? t[n].push(e)
              : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, i] = e;
            Array.isArray(i)
              ? i.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(i));
          }),
          t
        );
      }
      function o(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        });
    },
    1533: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(3461);
      function i(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let i = t.exec(e);
          if (!i) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            a = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = i[t.pos];
              void 0 !== r &&
                (a[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => o(e))
                  : t.repeat
                  ? [o(r)]
                  : o(r));
            }),
            a
          );
        };
      }
    },
    3169: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return m;
          },
          getNamedRouteRegex: function () {
            return p;
          },
          getRouteRegex: function () {
            return d;
          },
          parseParameter: function () {
            return l;
          },
        });
      let r = n(3345),
        i = n(3100),
        o = n(1943),
        a = n(7741),
        s = /\[((?:\[.*\])|.+)\]/;
      function l(e) {
        let t = e.match(s);
        return t ? u(t[1]) : u(e);
      }
      function u(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function c(e) {
        let t = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          r = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = i.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                a = e.match(s);
              if (t && a) {
                let { key: e, optional: i, repeat: s } = u(a[1]);
                return (
                  (n[e] = { pos: r++, repeat: s, optional: i }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!a) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: i } = u(a[1]);
                return (
                  (n[e] = { pos: r++, repeat: t, optional: i }),
                  t ? (i ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function d(e) {
        let { parameterizedRoute: t, groups: n } = c(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function f(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: i,
            keyPrefix: a,
          } = e,
          { key: s, optional: l, repeat: c } = u(r),
          d = s.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          a ? (i[d] = "" + a + s) : (i[d] = s);
        let h = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? l
            ? "(?:/" + h + "(?<" + d + ">.+?))?"
            : "/" + h + "(?<" + d + ">.+?)"
          : "/" + h + "(?<" + d + ">[^/]+?)";
      }
      function h(e, t) {
        let n;
        let s = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          l =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          u = {};
        return {
          namedParameterizedRoute: s
            .map((e) => {
              let n = i.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && a) {
                let [n] = e.split(a[0]);
                return f({
                  getSafeRouteKey: l,
                  interceptionMarker: n,
                  segment: a[1],
                  routeKeys: u,
                  keyPrefix: t ? r.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
                });
              }
              return a
                ? f({
                    getSafeRouteKey: l,
                    segment: a[1],
                    routeKeys: u,
                    keyPrefix: t ? r.NEXT_QUERY_PARAM_PREFIX : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function p(e, t) {
        let n = h(e, t);
        return {
          ...d(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function m(e, t) {
        let { parameterizedRoute: n } = c(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = h(e, !1);
        return { namedRegex: "^" + i + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRouteObjects: function () {
            return i;
          },
          getSortedRoutes: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let i = e[0];
          if (i.startsWith("[") && i.endsWith("]")) {
            let n = i.slice(1, -1),
              a = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (a = !0)),
              n.startsWith("…"))
            )
              throw Error(
                "Detected a three-dot character ('…') at ('" +
                  n +
                  "'). Did you mean ('...')?"
              );
            if (
              (n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function o(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === i.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (i = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                o(this.restSlugName, n), (this.restSlugName = n), (i = "[...]");
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              o(this.slugName, n), (this.slugName = n), (i = "[]");
            }
          }
          this.children.has(i) || this.children.set(i, new n()),
            this.children.get(i)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
      function i(e, t) {
        let n = {},
          i = [];
        for (let r = 0; r < e.length; r++) {
          let o = t(e[r]);
          (n[o] = r), (i[r] = o);
        }
        return r(i).map((t) => e[n[t]]);
      }
    },
    5960: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : r.useLayoutEffect,
        a = i ? () => {} : r.useEffect;
      function s(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function s() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        if (i) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            s();
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = s),
              () => {
                t && (t._pendingUpdate = s);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return h;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return n || ((n = !0), (t = e(...i))), t;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => i.test(e);
      function a() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function s() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && u(n)) return r;
        if (!r)
          throw Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let f = "undefined" != typeof performance,
        h =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class p extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class y extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    35: (e, t, n) => {
      "use strict";
      var r = n(6300).Buffer;
      let i = void 0 !== r,
        o =
          /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
        a =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
      function s(e, t, n) {
        null == n &&
          null !== t &&
          "object" == typeof t &&
          ((n = t), (t = void 0)),
          i && r.isBuffer(e) && (e = e.toString()),
          e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
        let s = JSON.parse(e, t);
        if (null === s || "object" != typeof s) return s;
        let u = (n && n.protoAction) || "error",
          c = (n && n.constructorAction) || "error";
        if ("ignore" === u && "ignore" === c) return s;
        if ("ignore" !== u && "ignore" !== c) {
          if (!1 === o.test(e) && !1 === a.test(e)) return s;
        } else if ("ignore" !== u && "ignore" === c) {
          if (!1 === o.test(e)) return s;
        } else if (!1 === a.test(e)) return s;
        return l(s, {
          protoAction: u,
          constructorAction: c,
          safe: n && n.safe,
        });
      }
      function l(
        e,
        {
          protoAction: t = "error",
          constructorAction: n = "error",
          safe: r,
        } = {}
      ) {
        let i = [e];
        for (; i.length; ) {
          let e = i;
          for (let o of ((i = []), e)) {
            if (
              "ignore" !== t &&
              Object.prototype.hasOwnProperty.call(o, "__proto__")
            ) {
              if (!0 === r) return null;
              if ("error" === t)
                throw SyntaxError(
                  "Object contains forbidden prototype property"
                );
              delete o.__proto__;
            }
            if (
              "ignore" !== n &&
              Object.prototype.hasOwnProperty.call(o, "constructor") &&
              Object.prototype.hasOwnProperty.call(o.constructor, "prototype")
            ) {
              if (!0 === r) return null;
              if ("error" === n)
                throw SyntaxError(
                  "Object contains forbidden prototype property"
                );
              delete o.constructor;
            }
            for (let e in o) {
              let t = o[e];
              t && "object" == typeof t && i.push(t);
            }
          }
        }
        return e;
      }
      function u(e, t, n) {
        let r = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        try {
          return s(e, t, n);
        } finally {
          Error.stackTraceLimit = r;
        }
      }
      (e.exports = u),
        (e.exports.default = u),
        (e.exports.parse = u),
        (e.exports.safeParse = function (e, t) {
          let n = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          try {
            return s(e, t, { safe: !0 });
          } catch (e) {
            return null;
          } finally {
            Error.stackTraceLimit = n;
          }
        }),
        (e.exports.scan = l);
    },
    7564: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = null;
          if (!e || "string" != typeof e) return n;
          var r = (0, i.default)(e),
            o = "function" == typeof t;
          return (
            r.forEach(function (e) {
              if ("declaration" === e.type) {
                var r = e.property,
                  i = e.value;
                o ? t(r, i, e) : i && ((n = n || {})[r] = i);
              }
            }),
            n
          );
        });
      var i = r(n(4958));
    },
    2617: (e) => {
      e.exports = function (e, t) {
        let n;
        if ("function" != typeof e)
          throw TypeError(
            `Expected the first argument to be a \`function\`, got \`${typeof e}\`.`
          );
        let r = 0;
        return function (...i) {
          clearTimeout(n);
          let o = Date.now(),
            a = t - (o - r);
          a <= 0
            ? ((r = o), e.apply(this, i))
            : (n = setTimeout(() => {
                (r = Date.now()), e.apply(this, i);
              }, a));
        };
      };
    },
    4492: (e, t, n) => {
      "use strict";
      var r = n(2265),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        l = r.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                c = r[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = t), u(i) && c({ inst: i });
                  },
                  [e, n, t]
                ),
                a(
                  function () {
                    return (
                      u(i) && c({ inst: i }),
                      e(function () {
                        u(i) && c({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    },
    554: (e, t, n) => {
      "use strict";
      e.exports = n(4492);
    },
    6800: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n &&
              (e = o(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return i.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
                  return t;
                })(n)
              ));
          }
          return e;
        }
        function o(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (n = function () {
                return i;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
    3284: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { RJ: () => eq });
      var i,
        o,
        a = n(2265),
        s = "vercel.ai.error",
        l = Symbol.for(s),
        u = class e extends Error {
          constructor({ name: e, message: t, cause: n }) {
            super(t), (this[i] = !0), (this.name = e), (this.cause = n);
          }
          static isInstance(t) {
            return e.hasMarker(t, s);
          }
          static hasMarker(e, t) {
            let n = Symbol.for(t);
            return (
              null != e &&
              "object" == typeof e &&
              n in e &&
              "boolean" == typeof e[n] &&
              !0 === e[n]
            );
          }
          toJSON() {
            return { name: this.name, message: this.message };
          }
        };
      i = l;
      var c = u,
        d =
          (Symbol.for("vercel.ai.error.AI_APICallError"),
          Symbol.for("vercel.ai.error.AI_EmptyResponseBodyError"),
          "AI_InvalidArgumentError"),
        f = `vercel.ai.error.${d}`,
        h = Symbol.for(f),
        p = class extends c {
          constructor({ message: e, cause: t, argument: n }) {
            super({ name: d, message: e, cause: t }),
              (this[o] = !0),
              (this.argument = n);
          }
          static isInstance(e) {
            return c.hasMarker(e, f);
          }
        };
      function m(e) {
        return (
          null === e ||
          "string" == typeof e ||
          "number" == typeof e ||
          "boolean" == typeof e ||
          (Array.isArray(e)
            ? e.every(m)
            : "object" == typeof e &&
              Object.entries(e).every(([e, t]) => "string" == typeof e && m(t)))
        );
      }
      (o = h),
        Symbol.for("vercel.ai.error.AI_InvalidPromptError"),
        Symbol.for("vercel.ai.error.AI_InvalidResponseDataError"),
        Symbol.for("vercel.ai.error.AI_JSONParseError"),
        Symbol.for("vercel.ai.error.AI_LoadAPIKeyError"),
        Symbol.for("vercel.ai.error.AI_LoadSettingError"),
        Symbol.for("vercel.ai.error.AI_NoContentGeneratedError"),
        Symbol.for("vercel.ai.error.AI_NoSuchModelError"),
        Symbol.for("vercel.ai.error.AI_TooManyEmbeddingValuesForCallError"),
        Symbol.for("vercel.ai.error.AI_TypeValidationError"),
        Symbol.for("vercel.ai.error.AI_UnsupportedFunctionalityError");
      let g =
        (e, t = 21) =>
        (n = t) => {
          let r = "",
            i = n;
          for (; i--; ) r += e[(Math.random() * e.length) | 0];
          return r;
        };
      var y = n(35);
      n(357);
      var v = (({
        prefix: e,
        size: t = 7,
        alphabet:
          n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        separator: r = "-",
      } = {}) => {
        let i = g(n, t);
        if (null == e) return i;
        if (n.includes(r))
          throw new p({
            argument: "separator",
            message: `The separator "${r}" must not be part of the alphabet "${n}".`,
          });
        return (t) => `${e}${r}${i(t)}`;
      })();
      Symbol.for("vercel.ai.validator");
      var { btoa: b, atob: x } = globalThis;
      Symbol("Let zodToJsonSchema decide on which parser to use");
      let w = (e, t) => {
        let n = 0;
        for (; n < e.length && n < t.length && e[n] === t[n]; n++);
        return [(e.length - n).toString(), ...t.slice(n)].join("/");
      };
      var k = {
          code: "0",
          name: "text",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"text" parts expect a string value.');
            return { type: "text", value: e };
          },
        },
        E = {
          code: "1",
          name: "function_call",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("function_call" in e) ||
              "object" != typeof e.function_call ||
              null == e.function_call ||
              !("name" in e.function_call) ||
              !("arguments" in e.function_call) ||
              "string" != typeof e.function_call.name ||
              "string" != typeof e.function_call.arguments
            )
              throw Error(
                '"function_call" parts expect an object with a "function_call" property.'
              );
            return { type: "function_call", value: e };
          },
        },
        S = {
          code: "2",
          name: "data",
          parse: (e) => {
            if (!Array.isArray(e))
              throw Error('"data" parts expect an array value.');
            return { type: "data", value: e };
          },
        },
        T = {
          code: "3",
          name: "error",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"error" parts expect a string value.');
            return { type: "error", value: e };
          },
        },
        A = {
          code: "4",
          name: "assistant_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("id" in e) ||
              !("role" in e) ||
              !("content" in e) ||
              "string" != typeof e.id ||
              "string" != typeof e.role ||
              "assistant" !== e.role ||
              !Array.isArray(e.content) ||
              !e.content.every(
                (e) =>
                  null != e &&
                  "object" == typeof e &&
                  "type" in e &&
                  "text" === e.type &&
                  "text" in e &&
                  null != e.text &&
                  "object" == typeof e.text &&
                  "value" in e.text &&
                  "string" == typeof e.text.value
              )
            )
              throw Error(
                '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
              );
            return { type: "assistant_message", value: e };
          },
        },
        C = {
          code: "5",
          name: "assistant_control_data",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("threadId" in e) ||
              !("messageId" in e) ||
              "string" != typeof e.threadId ||
              "string" != typeof e.messageId
            )
              throw Error(
                '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
              );
            return {
              type: "assistant_control_data",
              value: { threadId: e.threadId, messageId: e.messageId },
            };
          },
        },
        P = {
          code: "6",
          name: "data_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("role" in e) ||
              !("data" in e) ||
              "string" != typeof e.role ||
              "data" !== e.role
            )
              throw Error(
                '"data_message" parts expect an object with a "role" and "data" property.'
              );
            return { type: "data_message", value: e };
          },
        },
        _ = {
          code: "7",
          name: "tool_calls",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("tool_calls" in e) ||
              "object" != typeof e.tool_calls ||
              null == e.tool_calls ||
              !Array.isArray(e.tool_calls) ||
              e.tool_calls.some(
                (e) =>
                  null == e ||
                  "object" != typeof e ||
                  !("id" in e) ||
                  "string" != typeof e.id ||
                  !("type" in e) ||
                  "string" != typeof e.type ||
                  !("function" in e) ||
                  null == e.function ||
                  "object" != typeof e.function ||
                  !("arguments" in e.function) ||
                  "string" != typeof e.function.name ||
                  "string" != typeof e.function.arguments
              )
            )
              throw Error(
                '"tool_calls" parts expect an object with a ToolCallPayload.'
              );
            return { type: "tool_calls", value: e };
          },
        },
        I = {
          code: "8",
          name: "message_annotations",
          parse: (e) => {
            if (!Array.isArray(e))
              throw Error('"message_annotations" parts expect an array value.');
            return { type: "message_annotations", value: e };
          },
        },
        R = {
          code: "9",
          name: "tool_call",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("toolCallId" in e) ||
              "string" != typeof e.toolCallId ||
              !("toolName" in e) ||
              "string" != typeof e.toolName ||
              !("args" in e) ||
              "object" != typeof e.args
            )
              throw Error(
                '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
              );
            return { type: "tool_call", value: e };
          },
        },
        O = {
          code: "a",
          name: "tool_result",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("toolCallId" in e) ||
              "string" != typeof e.toolCallId ||
              !("result" in e)
            )
              throw Error(
                '"tool_result" parts expect an object with a "toolCallId" and a "result" property.'
              );
            return { type: "tool_result", value: e };
          },
        },
        M = {
          code: "b",
          name: "tool_call_streaming_start",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("toolCallId" in e) ||
              "string" != typeof e.toolCallId ||
              !("toolName" in e) ||
              "string" != typeof e.toolName
            )
              throw Error(
                '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.'
              );
            return { type: "tool_call_streaming_start", value: e };
          },
        },
        D = {
          code: "c",
          name: "tool_call_delta",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("toolCallId" in e) ||
              "string" != typeof e.toolCallId ||
              !("argsTextDelta" in e) ||
              "string" != typeof e.argsTextDelta
            )
              throw Error(
                '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.'
              );
            return { type: "tool_call_delta", value: e };
          },
        },
        j = {
          code: "d",
          name: "finish_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("finishReason" in e) ||
              "string" != typeof e.finishReason
            )
              throw Error(
                '"finish_message" parts expect an object with a "finishReason" property.'
              );
            let t = { finishReason: e.finishReason };
            return (
              "usage" in e &&
                null != e.usage &&
                "object" == typeof e.usage &&
                "promptTokens" in e.usage &&
                "completionTokens" in e.usage &&
                (t.usage = {
                  promptTokens:
                    "number" == typeof e.usage.promptTokens
                      ? e.usage.promptTokens
                      : Number.NaN,
                  completionTokens:
                    "number" == typeof e.usage.completionTokens
                      ? e.usage.completionTokens
                      : Number.NaN,
                }),
              { type: "finish_message", value: t }
            );
          },
        },
        L = {
          code: "e",
          name: "finish_step",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("finishReason" in e) ||
              "string" != typeof e.finishReason
            )
              throw Error(
                '"finish_step" parts expect an object with a "finishReason" property.'
              );
            let t = { finishReason: e.finishReason, isContinued: !1 };
            return (
              "usage" in e &&
                null != e.usage &&
                "object" == typeof e.usage &&
                "promptTokens" in e.usage &&
                "completionTokens" in e.usage &&
                (t.usage = {
                  promptTokens:
                    "number" == typeof e.usage.promptTokens
                      ? e.usage.promptTokens
                      : Number.NaN,
                  completionTokens:
                    "number" == typeof e.usage.completionTokens
                      ? e.usage.completionTokens
                      : Number.NaN,
                }),
              "isContinued" in e &&
                "boolean" == typeof e.isContinued &&
                (t.isContinued = e.isContinued),
              { type: "finish_step", value: t }
            );
          },
        },
        N = [k, E, S, T, A, C, P, _, I, R, O, M, D, j, L],
        F = {
          [k.code]: k,
          [E.code]: E,
          [S.code]: S,
          [T.code]: T,
          [A.code]: A,
          [C.code]: C,
          [P.code]: P,
          [_.code]: _,
          [I.code]: I,
          [R.code]: R,
          [O.code]: O,
          [M.code]: M,
          [D.code]: D,
          [j.code]: j,
          [L.code]: L,
        };
      k.name,
        k.code,
        E.name,
        E.code,
        S.name,
        S.code,
        T.name,
        T.code,
        A.name,
        A.code,
        C.name,
        C.code,
        P.name,
        P.code,
        _.name,
        _.code,
        I.name,
        I.code,
        R.name,
        R.code,
        O.name,
        O.code,
        M.name,
        M.code,
        D.name,
        D.code,
        j.name,
        j.code,
        L.name,
        L.code;
      var z = N.map((e) => e.code),
        V = (e) => {
          let t = e.indexOf(":");
          if (-1 === t)
            throw Error("Failed to parse stream string. No separator found.");
          let n = e.slice(0, t);
          if (!z.includes(n))
            throw Error(`Failed to parse stream string. Invalid code ${n}.`);
          let r = JSON.parse(e.slice(t + 1));
          return F[n].parse(r);
        };
      async function* B(e, { isAborted: t } = {}) {
        let n = new TextDecoder(),
          r = [],
          i = 0;
        for (;;) {
          let { value: o } = await e.read();
          if (o && (r.push(o), (i += o.length), 10 !== o[o.length - 1]))
            continue;
          if (0 === r.length) break;
          let a = (function (e, t) {
            let n = new Uint8Array(t),
              r = 0;
            for (let t of e) n.set(t, r), (r += t.length);
            return (e.length = 0), n;
          })(r, i);
          for (let e of ((i = 0),
          n
            .decode(a, { stream: !0 })
            .split("\n")
            .filter((e) => "" !== e)
            .map(V)))
            yield e;
          if (null == t ? void 0 : t()) {
            e.cancel();
            break;
          }
        }
      }
      function U(e, t) {
        return e && t && t.length ? { ...e, annotations: [...t] } : e;
      }
      async function H({
        reader: e,
        abortControllerRef: t,
        update: n,
        onToolCall: r,
        onFinish: i,
        generateId: o = v,
        getCurrentDate: a = () => new Date(),
      }) {
        var s;
        let l, u;
        let c = a(),
          d = {},
          f = [],
          h = [],
          p = {},
          m = { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
          g = "unknown";
        for await (let { type: i, value: a } of B(e, {
          isAborted: () => (null == t ? void 0 : t.current) === null,
        })) {
          if ("error" === i) throw Error(a);
          if ("finish_step" === i) {
            a.isContinued || (l = {});
            continue;
          }
          if ("finish_message" === i) {
            if (((g = a.finishReason), null != a.usage)) {
              let { completionTokens: e, promptTokens: t } = a.usage;
              m = { completionTokens: e, promptTokens: t, totalTokens: e + t };
            }
            continue;
          }
          if (
            (null != l &&
              ("text" === i ||
                "tool_call" === i ||
                "tool_call_streaming_start" === i ||
                "tool_call_delta" === i ||
                "tool_result" === i) &&
              (d.text && f.push(d.text),
              d.function_call && f.push(d.function_call),
              d.tool_calls && f.push(d.tool_calls),
              (d = l),
              (l = void 0)),
            "text" === i &&
              (d.text
                ? (d.text = { ...d.text, content: (d.text.content || "") + a })
                : (d.text = {
                    id: o(),
                    role: "assistant",
                    content: a,
                    createdAt: c,
                  })),
            "tool_call_streaming_start" === i)
          )
            null == d.text &&
              (d.text = {
                id: o(),
                role: "assistant",
                content: "",
                createdAt: c,
              }),
              null == d.text.toolInvocations && (d.text.toolInvocations = []),
              (p[a.toolCallId] = {
                text: "",
                toolName: a.toolName,
                prefixMapIndex: d.text.toolInvocations.length,
              }),
              d.text.toolInvocations.push({
                state: "partial-call",
                toolCallId: a.toolCallId,
                toolName: a.toolName,
                args: void 0,
              });
          else if ("tool_call_delta" === i) {
            let e = p[a.toolCallId];
            e.text += a.argsTextDelta;
            let { value: t } = (function (e) {
              if (void 0 === e)
                return { value: void 0, state: "undefined-input" };
              try {
                return { value: y.parse(e), state: "successful-parse" };
              } catch (t) {
                try {
                  return {
                    value: y.parse(
                      (function (e) {
                        let t = ["ROOT"],
                          n = -1,
                          r = null;
                        function i(e, i, o) {
                          switch (e) {
                            case '"':
                              (n = i),
                                t.pop(),
                                t.push(o),
                                t.push("INSIDE_STRING");
                              break;
                            case "f":
                            case "t":
                            case "n":
                              (n = i),
                                (r = i),
                                t.pop(),
                                t.push(o),
                                t.push("INSIDE_LITERAL");
                              break;
                            case "-":
                              t.pop(), t.push(o), t.push("INSIDE_NUMBER");
                              break;
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                              (n = i),
                                t.pop(),
                                t.push(o),
                                t.push("INSIDE_NUMBER");
                              break;
                            case "{":
                              (n = i),
                                t.pop(),
                                t.push(o),
                                t.push("INSIDE_OBJECT_START");
                              break;
                            case "[":
                              (n = i),
                                t.pop(),
                                t.push(o),
                                t.push("INSIDE_ARRAY_START");
                          }
                        }
                        function o(e, r) {
                          switch (e) {
                            case ",":
                              t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
                              break;
                            case "}":
                              (n = r), t.pop();
                          }
                        }
                        function a(e, r) {
                          switch (e) {
                            case ",":
                              t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                              break;
                            case "]":
                              (n = r), t.pop();
                          }
                        }
                        for (let s = 0; s < e.length; s++) {
                          let l = e[s];
                          switch (t[t.length - 1]) {
                            case "ROOT":
                              i(l, s, "FINISH");
                              break;
                            case "INSIDE_OBJECT_START":
                              switch (l) {
                                case '"':
                                  t.pop(), t.push("INSIDE_OBJECT_KEY");
                                  break;
                                case "}":
                                  (n = s), t.pop();
                              }
                              break;
                            case "INSIDE_OBJECT_AFTER_COMMA":
                              '"' === l &&
                                (t.pop(), t.push("INSIDE_OBJECT_KEY"));
                              break;
                            case "INSIDE_OBJECT_KEY":
                              '"' === l &&
                                (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
                              break;
                            case "INSIDE_OBJECT_AFTER_KEY":
                              ":" === l &&
                                (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
                              break;
                            case "INSIDE_OBJECT_BEFORE_VALUE":
                              i(l, s, "INSIDE_OBJECT_AFTER_VALUE");
                              break;
                            case "INSIDE_OBJECT_AFTER_VALUE":
                              o(l, s);
                              break;
                            case "INSIDE_STRING":
                              switch (l) {
                                case '"':
                                  t.pop(), (n = s);
                                  break;
                                case "\\":
                                  t.push("INSIDE_STRING_ESCAPE");
                                  break;
                                default:
                                  n = s;
                              }
                              break;
                            case "INSIDE_ARRAY_START":
                              "]" === l
                                ? ((n = s), t.pop())
                                : ((n = s),
                                  i(l, s, "INSIDE_ARRAY_AFTER_VALUE"));
                              break;
                            case "INSIDE_ARRAY_AFTER_VALUE":
                              switch (l) {
                                case ",":
                                  t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                                  break;
                                case "]":
                                  (n = s), t.pop();
                                  break;
                                default:
                                  n = s;
                              }
                              break;
                            case "INSIDE_ARRAY_AFTER_COMMA":
                              i(l, s, "INSIDE_ARRAY_AFTER_VALUE");
                              break;
                            case "INSIDE_STRING_ESCAPE":
                              t.pop(), (n = s);
                              break;
                            case "INSIDE_NUMBER":
                              switch (l) {
                                case "0":
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                  n = s;
                                  break;
                                case "e":
                                case "E":
                                case "-":
                                case ".":
                                  break;
                                case ",":
                                  t.pop(),
                                    "INSIDE_ARRAY_AFTER_VALUE" ===
                                      t[t.length - 1] && a(l, s),
                                    "INSIDE_OBJECT_AFTER_VALUE" ===
                                      t[t.length - 1] && o(l, s);
                                  break;
                                case "}":
                                  t.pop(),
                                    "INSIDE_OBJECT_AFTER_VALUE" ===
                                      t[t.length - 1] && o(l, s);
                                  break;
                                case "]":
                                  t.pop(),
                                    "INSIDE_ARRAY_AFTER_VALUE" ===
                                      t[t.length - 1] && a(l, s);
                                  break;
                                default:
                                  t.pop();
                              }
                              break;
                            case "INSIDE_LITERAL": {
                              let i = e.substring(r, s + 1);
                              "false".startsWith(i) ||
                              "true".startsWith(i) ||
                              "null".startsWith(i)
                                ? (n = s)
                                : (t.pop(),
                                  "INSIDE_OBJECT_AFTER_VALUE" ===
                                  t[t.length - 1]
                                    ? o(l, s)
                                    : "INSIDE_ARRAY_AFTER_VALUE" ===
                                        t[t.length - 1] && a(l, s));
                            }
                          }
                        }
                        let s = e.slice(0, n + 1);
                        for (let n = t.length - 1; n >= 0; n--)
                          switch (t[n]) {
                            case "INSIDE_STRING":
                              s += '"';
                              break;
                            case "INSIDE_OBJECT_KEY":
                            case "INSIDE_OBJECT_AFTER_KEY":
                            case "INSIDE_OBJECT_AFTER_COMMA":
                            case "INSIDE_OBJECT_START":
                            case "INSIDE_OBJECT_BEFORE_VALUE":
                            case "INSIDE_OBJECT_AFTER_VALUE":
                              s += "}";
                              break;
                            case "INSIDE_ARRAY_START":
                            case "INSIDE_ARRAY_AFTER_COMMA":
                            case "INSIDE_ARRAY_AFTER_VALUE":
                              s += "]";
                              break;
                            case "INSIDE_LITERAL": {
                              let t = e.substring(r, e.length);
                              "true".startsWith(t)
                                ? (s += "true".slice(t.length))
                                : "false".startsWith(t)
                                ? (s += "false".slice(t.length))
                                : "null".startsWith(t) &&
                                  (s += "null".slice(t.length));
                            }
                          }
                        return s;
                      })(e)
                    ),
                    state: "repaired-parse",
                  };
                } catch (e) {}
              }
              return { value: void 0, state: "failed-parse" };
            })(e.text);
            (d.text.toolInvocations[e.prefixMapIndex] = {
              state: "partial-call",
              toolCallId: a.toolCallId,
              toolName: e.toolName,
              args: t,
            }),
              (d.text.internalUpdateId = o());
          } else if ("tool_call" === i) {
            if (
              (null != p[a.toolCallId]
                ? (d.text.toolInvocations[p[a.toolCallId].prefixMapIndex] = {
                    state: "call",
                    ...a,
                  })
                : (null == d.text &&
                    (d.text = {
                      id: o(),
                      role: "assistant",
                      content: "",
                      createdAt: c,
                    }),
                  null == d.text.toolInvocations &&
                    (d.text.toolInvocations = []),
                  d.text.toolInvocations.push({ state: "call", ...a })),
              (d.text.internalUpdateId = o()),
              r)
            ) {
              let e = await r({ toolCall: a });
              null != e &&
                (d.text.toolInvocations[d.text.toolInvocations.length - 1] = {
                  state: "result",
                  ...a,
                  result: e,
                });
            }
          } else if ("tool_result" === i) {
            let e = null == (s = d.text) ? void 0 : s.toolInvocations;
            if (null == e)
              throw Error("tool_result must be preceded by a tool_call");
            let t = e.findIndex((e) => e.toolCallId === a.toolCallId);
            if (-1 === t)
              throw Error(
                "tool_result must be preceded by a tool_call with the same toolCallId"
              );
            e[t] = { ...e[t], state: "result", ...a };
          }
          let e = null;
          "function_call" === i &&
            ((d.function_call = {
              id: o(),
              role: "assistant",
              content: "",
              function_call: a.function_call,
              name: a.function_call.name,
              createdAt: c,
            }),
            (e = d.function_call));
          let t = null;
          "tool_calls" === i &&
            ((d.tool_calls = {
              id: o(),
              role: "assistant",
              content: "",
              tool_calls: a.tool_calls,
              createdAt: c,
            }),
            (t = d.tool_calls)),
            "data" === i && h.push(...a);
          let v = d.text;
          "message_annotations" === i &&
            (u ? u.push(...a) : (u = [...a]),
            (e = U(d.function_call, u)),
            (t = U(d.tool_calls, u)),
            (v = U(d.text, u)),
            null != d.text && (d.text.internalUpdateId = o())),
            (null == u ? void 0 : u.length) &&
              (d.text && (d.text.annotations = [...u]),
              d.function_call && (d.function_call.annotations = [...u]),
              d.tool_calls && (d.tool_calls.annotations = [...u])),
            n(
              [...f, ...[e, t, v].filter(Boolean).map((e) => ({ ...U(e, u) }))],
              [...h]
            );
        }
        return (
          null == i || i({ message: d.text, finishReason: g, usage: m }),
          {
            messages: [d.text, d.function_call, d.tool_calls].filter(Boolean),
            data: h,
          }
        );
      }
      var W = () => fetch;
      async function $({
        api: e,
        body: t,
        streamProtocol: n = "data",
        credentials: r,
        headers: i,
        abortController: o,
        restoreMessagesOnFailure: a,
        onResponse: s,
        onUpdate: l,
        onFinish: u,
        onToolCall: c,
        generateId: d,
        fetch: f = W(),
      }) {
        var h, p;
        let m = await f(e, {
          method: "POST",
          body: JSON.stringify(t),
          headers: { "Content-Type": "application/json", ...i },
          signal: null == (h = null == o ? void 0 : o()) ? void 0 : h.signal,
          credentials: r,
        }).catch((e) => {
          throw (a(), e);
        });

        if (s)
          try {
            await s(m);
          } catch (e) {
            throw e;
          }
        if (!m.ok)
          throw (
            (a(),
            Error(
              null != (p = await m.text())
                ? p
                : "Failed to fetch the chat response."
            ))
          );
        if (!m.body) throw Error("The response body is empty.");
        let g = m.body.getReader();
        switch (n) {
          case "text": {
            let e = (function (e) {
                let t = new TextDecoder();
                return function (e) {
                  return e ? t.decode(e, { stream: !0 }) : "";
                };
              })(),
              t = {
                id: d(),
                createdAt: new Date(),
                role: "assistant",
                content: "",
              };
            for (;;) {
              let { done: n, value: r } = await g.read();
              if (n) break;
              if (
                ((t.content += e(r)),
                l([{ ...t }], []),
                (null == o ? void 0 : o()) === null)
              ) {
                g.cancel();
                break;
              }
            }
            return (
              null == u ||
                u(t, {
                  usage: {
                    completionTokens: NaN,
                    promptTokens: NaN,
                    totalTokens: NaN,
                  },
                  finishReason: "unknown",
                }),
              { messages: [t], data: [] }
            );
          }
          case "data":
            return await H({
              reader: g,
              abortControllerRef: null != o ? { current: o() } : void 0,
              update: l,
              onToolCall: c,
              onFinish({ message: e, finishReason: t, usage: n }) {
                u && null != e && u(e, { usage: n, finishReason: t });
              },
              generateId: d,
            });
          default:
            throw Error(`Unknown stream protocol: ${n}`);
        }
      }
      async function Y({
        getStreamedResponse: e,
        experimental_onFunctionCall: t,
        experimental_onToolCall: n,
        updateChatRequest: r,
        getCurrentMessages: i,
      }) {
        for (;;) {
          let o = await e();
          if ("messages" in o) {
            let e = !1;
            for (let a of o.messages)
              if (
                (void 0 !== a.function_call &&
                  "string" != typeof a.function_call) ||
                (void 0 !== a.tool_calls && "string" != typeof a.tool_calls)
              ) {
                if (((e = !0), t)) {
                  let n = a.function_call;
                  if ("object" != typeof n) {
                    console.warn(
                      "experimental_onFunctionCall should not be defined when using tools"
                    );
                    continue;
                  }
                  let o = await t(i(), n);
                  if (void 0 === o) {
                    e = !1;
                    break;
                  }
                  r(o);
                }
                if (n) {
                  let t = a.tool_calls;
                  if (
                    !Array.isArray(t) ||
                    t.some((e) => "object" != typeof e)
                  ) {
                    console.warn(
                      "experimental_onToolCall should not be defined when using tools"
                    );
                    continue;
                  }
                  let o = await n(i(), t);
                  if (void 0 === o) {
                    e = !1;
                    break;
                  }
                  r(o);
                }
              }
            if (!e) break;
          } else {
            let e = function (e) {
              for (let t of e.messages) {
                if (void 0 !== t.tool_calls)
                  for (let e of t.tool_calls)
                    "object" == typeof e &&
                      e.function.arguments &&
                      "string" != typeof e.function.arguments &&
                      (e.function.arguments = JSON.stringify(
                        e.function.arguments
                      ));
                void 0 !== t.function_call &&
                  "object" == typeof t.function_call &&
                  t.function_call.arguments &&
                  "string" != typeof t.function_call.arguments &&
                  (t.function_call.arguments = JSON.stringify(
                    t.function_call.arguments
                  ));
              }
            };
            if (
              (void 0 === o.function_call ||
                "string" == typeof o.function_call) &&
              (void 0 === o.tool_calls || "string" == typeof o.tool_calls)
            )
              break;
            if (t) {
              let n = o.function_call;
              if ("object" != typeof n) {
                console.warn(
                  "experimental_onFunctionCall should not be defined when using tools"
                );
                continue;
              }
              let a = await t(i(), n);
              if (void 0 === a) break;
              e(a), r(a);
            }
            if (n) {
              let t = o.tool_calls;
              if ("object" != typeof t) {
                console.warn(
                  "experimental_onToolCall should not be defined when using functions"
                );
                continue;
              }
              let a = await n(i(), t);
              if (void 0 === a) break;
              e(a), r(a);
            }
          }
        }
      }
      Symbol.for("vercel.ai.schema");
      var X = n(554);
      let q = () => {},
        G = q(),
        K = Object,
        J = (e) => e === G,
        Z = (e) => "function" == typeof e,
        Q = (e, t) => ({ ...e, ...t }),
        ee = (e) => Z(e.then),
        et = new WeakMap(),
        en = 0,
        er = (e) => {
          let t, n;
          let r = typeof e,
            i = e && e.constructor,
            o = i == Date;
          if (K(e) !== e || o || i == RegExp)
            t = o
              ? e.toJSON()
              : "symbol" == r
              ? e.toString()
              : "string" == r
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = et.get(e))) return t;
            if (((t = ++en + "~"), et.set(e, t), i == Array)) {
              for (n = 0, t = "@"; n < e.length; n++) t += er(e[n]) + ",";
              et.set(e, t);
            }
            if (i == K) {
              t = "#";
              let r = K.keys(e).sort();
              for (; !J((n = r.pop())); )
                J(e[n]) || (t += n + ":" + er(e[n]) + ",");
              et.set(e, t);
            }
          }
          return t;
        },
        ei = new WeakMap(),
        eo = {},
        ea = {},
        es = "undefined",
        el = typeof window != es,
        eu = typeof document != es,
        ec = () => el && typeof window.requestAnimationFrame != es,
        ed = (e, t) => {
          let n = ei.get(e);
          return [
            () => (!J(t) && e.get(t)) || eo,
            (r) => {
              if (!J(t)) {
                let i = e.get(t);
                t in ea || (ea[t] = i), n[5](t, Q(i, r), i || eo);
              }
            },
            n[6],
            () => (!J(t) && t in ea ? ea[t] : (!J(t) && e.get(t)) || eo),
          ];
        },
        ef = !0,
        [eh, ep] =
          el && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [q, q],
        em = {
          initFocus: (e) => (
            eu && document.addEventListener("visibilitychange", e),
            eh("focus", e),
            () => {
              eu && document.removeEventListener("visibilitychange", e),
                ep("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (ef = !0), e();
              },
              n = () => {
                ef = !1;
              };
            return (
              eh("online", t),
              eh("offline", n),
              () => {
                ep("online", t), ep("offline", n);
              }
            );
          },
        },
        eg = !a.useId,
        ey = !el || "Deno" in window,
        ev = (e) => (ec() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        eb = ey ? a.useEffect : a.useLayoutEffect,
        ex = "undefined" != typeof navigator && navigator.connection,
        ew =
          !ey &&
          ex &&
          (["slow-2g", "2g"].includes(ex.effectiveType) || ex.saveData),
        ek = (e) => {
          if (Z(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? er(e)
                : ""),
            t,
          ];
        },
        eE = 0,
        eS = () => ++eE;
      var eT = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function eA(...e) {
        let [t, n, r, i] = e,
          o = Q(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof i ? { revalidate: i } : i || {}
          ),
          a = o.populateCache,
          s = o.rollbackOnError,
          l = o.optimisticData,
          u = (e) => ("function" == typeof s ? s(e) : !1 !== s),
          c = o.throwOnError;
        if (Z(n)) {
          let e = [];
          for (let r of t.keys())
            !/^\$(inf|sub)\$/.test(r) && n(t.get(r)._k) && e.push(r);
          return Promise.all(e.map(d));
        }
        return d(n);
        async function d(n) {
          let i;
          let [s] = ek(n);
          if (!s) return;
          let [d, f] = ed(t, s),
            [h, p, m, g] = ei.get(t),
            y = () => {
              let e = h[s];
              return (Z(o.revalidate)
                ? o.revalidate(d().data, n)
                : !1 !== o.revalidate) && (delete m[s], delete g[s], e && e[0])
                ? e[0](2).then(() => d().data)
                : d().data;
            };
          if (e.length < 3) return y();
          let v = r,
            b = eS();
          p[s] = [b, 0];
          let x = !J(l),
            w = d(),
            k = w.data,
            E = w._c,
            S = J(E) ? k : E;
          if ((x && f({ data: (l = Z(l) ? l(S, k) : l), _c: S }), Z(v)))
            try {
              v = v(S);
            } catch (e) {
              i = e;
            }
          if (v && ee(v)) {
            if (
              ((v = await v.catch((e) => {
                i = e;
              })),
              b !== p[s][0])
            ) {
              if (i) throw i;
              return v;
            }
            i && x && u(i) && ((a = !0), f({ data: S, _c: G }));
          }
          if (
            (a &&
              !i &&
              (Z(a)
                ? f({ data: a(v, S), error: G, _c: G })
                : f({ data: v, error: G, _c: G })),
            (p[s][1] = eS()),
            Promise.resolve(y()).then(() => {
              f({ _c: G });
            }),
            i)
          ) {
            if (c) throw i;
            return;
          }
          return v;
        }
      }
      let eC = (e, t) => {
          for (let n in e) e[n][0] && e[n][0](t);
        },
        eP = (e, t) => {
          if (!ei.has(e)) {
            let n = Q(em, t),
              r = {},
              i = eA.bind(G, e),
              o = q,
              a = {},
              s = (e, t) => {
                let n = a[e] || [];
                return (a[e] = n), n.push(t), () => n.splice(n.indexOf(t), 1);
              },
              l = (t, n, r) => {
                e.set(t, n);
                let i = a[t];
                if (i) for (let e of i) e(n, r);
              },
              u = () => {
                if (!ei.has(e) && (ei.set(e, [r, {}, {}, {}, i, l, s]), !ey)) {
                  let t = n.initFocus(setTimeout.bind(G, eC.bind(G, r, 0))),
                    i = n.initReconnect(setTimeout.bind(G, eC.bind(G, r, 1)));
                  o = () => {
                    t && t(), i && i(), ei.delete(e);
                  };
                }
              };
            return u(), [e, i, u, o];
          }
          return [e, ei.get(e)[4]];
        },
        [e_, eI] = eP(new Map()),
        eR = Q(
          {
            onLoadingSlow: q,
            onSuccess: q,
            onError: q,
            onErrorRetry: (e, t, n, r, i) => {
              let o = n.errorRetryCount,
                a = i.retryCount,
                s =
                  ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                  n.errorRetryInterval;
              (J(o) || !(a > o)) && setTimeout(r, s, i);
            },
            onDiscarded: q,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: ew ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: ew ? 5e3 : 3e3,
            compare: (e, t) => er(e) == er(t),
            isPaused: () => !1,
            cache: e_,
            mutate: eI,
            fallback: {},
          },
          {
            isOnline: () => ef,
            isVisible: () => {
              let e = eu && document.visibilityState;
              return J(e) || "hidden" !== e;
            },
          }
        ),
        eO = (e, t) => {
          let n = Q(e, t);
          if (t) {
            let { use: r, fallback: i } = e,
              { use: o, fallback: a } = t;
            r && o && (n.use = r.concat(o)), i && a && (n.fallback = Q(i, a));
          }
          return n;
        },
        eM = (0, a.createContext)({}),
        eD = el && window.__SWR_DEVTOOLS_USE__,
        ej = eD ? window.__SWR_DEVTOOLS_USE__ : [],
        eL = (e) =>
          Z(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        eN = () => Q(eR, (0, a.useContext)(eM)),
        eF = ej.concat((e) => (t, n, r) => {
          let i =
            n &&
            ((...e) => {
              let [r] = ek(t),
                [, , , i] = ei.get(e_);
              if (r.startsWith("$inf$")) return n(...e);
              let o = i[r];
              return J(o) ? n(...e) : (delete i[r], o);
            });
          return e(t, i, r);
        }),
        ez = (e, t, n) => {
          let r = t[e] || (t[e] = []);
          return (
            r.push(n),
            () => {
              let e = r.indexOf(n);
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
            }
          );
        };
      eD && (window.__SWR_DEVTOOLS_REACT__ = a);
      let eV =
          a.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        eB = { dedupe: !0 };
      K.defineProperty(
        (e) => {
          let { value: t } = e,
            n = (0, a.useContext)(eM),
            r = Z(t),
            i = (0, a.useMemo)(() => (r ? t(n) : t), [r, n, t]),
            o = (0, a.useMemo)(() => (r ? i : eO(n, i)), [r, n, i]),
            s = i && i.provider,
            l = (0, a.useRef)(G);
          s && !l.current && (l.current = eP(s(o.cache || e_), i));
          let u = l.current;
          return (
            u && ((o.cache = u[0]), (o.mutate = u[1])),
            eb(() => {
              if (u) return u[2] && u[2](), u[3];
            }, []),
            (0, a.createElement)(eM.Provider, Q(e, { value: o }))
          );
        },
        "defaultValue",
        { value: eR }
      );
      let eU =
        ((r = (e, t, n) => {
          let {
              cache: r,
              compare: i,
              suspense: o,
              fallbackData: s,
              revalidateOnMount: l,
              revalidateIfStale: u,
              refreshInterval: c,
              refreshWhenHidden: d,
              refreshWhenOffline: f,
              keepPreviousData: h,
            } = n,
            [p, m, g, y] = ei.get(r),
            [v, b] = ek(e),
            x = (0, a.useRef)(!1),
            w = (0, a.useRef)(!1),
            k = (0, a.useRef)(v),
            E = (0, a.useRef)(t),
            S = (0, a.useRef)(n),
            T = () => S.current,
            A = () => T().isVisible() && T().isOnline(),
            [C, P, _, I] = ed(r, v),
            R = (0, a.useRef)({}).current,
            O = J(s) ? n.fallback[v] : s,
            M = (e, t) => {
              for (let n in R)
                if ("data" === n) {
                  if (!i(e[n], t[n]) && (!J(e[n]) || !i(U, t[n]))) return !1;
                } else if (t[n] !== e[n]) return !1;
              return !0;
            },
            D = (0, a.useMemo)(() => {
              let e =
                  !!v &&
                  !!t &&
                  (J(l) ? !T().isPaused() && !o && (!!J(u) || u) : l),
                n = (t) => {
                  let n = Q(t);
                  return (delete n._k, e)
                    ? { isValidating: !0, isLoading: !0, ...n }
                    : n;
                },
                r = C(),
                i = I(),
                a = n(r),
                s = r === i ? a : n(i),
                c = a;
              return [
                () => {
                  let e = n(C());
                  return M(e, c)
                    ? ((c.data = e.data),
                      (c.isLoading = e.isLoading),
                      (c.isValidating = e.isValidating),
                      (c.error = e.error),
                      c)
                    : ((c = e), e);
                },
                () => s,
              ];
            }, [r, v]),
            j = (0, X.useSyncExternalStore)(
              (0, a.useCallback)(
                (e) =>
                  _(v, (t, n) => {
                    M(n, t) || e();
                  }),
                [r, v]
              ),
              D[0],
              D[1]
            ),
            L = !x.current,
            N = p[v] && p[v].length > 0,
            F = j.data,
            z = J(F) ? O : F,
            V = j.error,
            B = (0, a.useRef)(z),
            U = h ? (J(F) ? B.current : F) : z,
            H =
              (!N || !!J(V)) &&
              (L && !J(l)
                ? l
                : !T().isPaused() && (o ? !J(z) && u : J(z) || u)),
            W = !!(v && t && L && H),
            $ = J(j.isValidating) ? W : j.isValidating,
            Y = J(j.isLoading) ? W : j.isLoading,
            q = (0, a.useCallback)(
              async (e) => {
                let t, r;
                let o = E.current;
                if (!v || !o || w.current || T().isPaused()) return !1;
                let a = !0,
                  s = e || {},
                  l = !g[v] || !s.dedupe,
                  u = () =>
                    eg
                      ? !w.current && v === k.current && x.current
                      : v === k.current,
                  c = { isValidating: !1, isLoading: !1 },
                  d = () => {
                    P(c);
                  },
                  f = () => {
                    let e = g[v];
                    e && e[1] === r && delete g[v];
                  },
                  h = { isValidating: !0 };
                J(C().data) && (h.isLoading = !0);
                try {
                  if (
                    (l &&
                      (P(h),
                      n.loadingTimeout &&
                        J(C().data) &&
                        setTimeout(() => {
                          a && u() && T().onLoadingSlow(v, n);
                        }, n.loadingTimeout),
                      (g[v] = [o(b), eS()])),
                    ([t, r] = g[v]),
                    (t = await t),
                    l && setTimeout(f, n.dedupingInterval),
                    !g[v] || g[v][1] !== r)
                  )
                    return l && u() && T().onDiscarded(v), !1;
                  c.error = G;
                  let e = m[v];
                  if (!J(e) && (r <= e[0] || r <= e[1] || 0 === e[1]))
                    return d(), l && u() && T().onDiscarded(v), !1;
                  let s = C().data;
                  (c.data = i(s, t) ? s : t),
                    l && u() && T().onSuccess(t, v, n);
                } catch (n) {
                  f();
                  let e = T(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((c.error = n),
                    l &&
                      u() &&
                      (e.onError(n, v, e),
                      (!0 === t || (Z(t) && t(n))) &&
                        (!T().revalidateOnFocus ||
                          !T().revalidateOnReconnect ||
                          A()) &&
                        e.onErrorRetry(
                          n,
                          v,
                          e,
                          (e) => {
                            let t = p[v];
                            t && t[0] && t[0](eT.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (s.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (a = !1), d(), !0;
              },
              [v, r]
            ),
            K = (0, a.useCallback)((...e) => eA(r, k.current, ...e), []);
          if (
            (eb(() => {
              (E.current = t), (S.current = n), J(F) || (B.current = F);
            }),
            eb(() => {
              if (!v) return;
              let e = q.bind(G, eB),
                t = 0,
                n = ez(v, p, (n, r = {}) => {
                  if (n == eT.FOCUS_EVENT) {
                    let n = Date.now();
                    T().revalidateOnFocus &&
                      n > t &&
                      A() &&
                      ((t = n + T().focusThrottleInterval), e());
                  } else if (n == eT.RECONNECT_EVENT)
                    T().revalidateOnReconnect && A() && e();
                  else if (n == eT.MUTATE_EVENT) return q();
                  else if (n == eT.ERROR_REVALIDATE_EVENT) return q(r);
                });
              return (
                (w.current = !1),
                (k.current = v),
                (x.current = !0),
                P({ _k: b }),
                H && (J(z) || ey ? e() : ev(e)),
                () => {
                  (w.current = !0), n();
                }
              );
            }, [v]),
            eb(() => {
              let e;
              function t() {
                let t = Z(c) ? c(C().data) : c;
                t && -1 !== e && (e = setTimeout(n, t));
              }
              function n() {
                !C().error && (d || T().isVisible()) && (f || T().isOnline())
                  ? q(eB).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [c, d, f, v]),
            (0, a.useDebugValue)(U),
            o && J(z) && v)
          ) {
            if (!eg && ey)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (E.current = t), (S.current = n), (w.current = !1);
            let e = y[v];
            if ((J(e) || eV(K(e)), J(V))) {
              let e = q(eB);
              J(U) || ((e.status = "fulfilled"), (e.value = !0)), eV(e);
            } else throw V;
          }
          return {
            mutate: K,
            get data() {
              return (R.data = !0), U;
            },
            get error() {
              return (R.error = !0), V;
            },
            get isValidating() {
              return (R.isValidating = !0), $;
            },
            get isLoading() {
              return (R.isLoading = !0), Y;
            },
          };
        }),
        function (...e) {
          let t = eN(),
            [n, i, o] = eL(e),
            a = eO(t, o),
            s = r,
            { use: l } = a,
            u = (l || []).concat(eF);
          for (let e = u.length; e--; ) s = u[e](s);
          return s(n, i || a.fetcher || null, a);
        });
      var eH = n(2617);
      function eW(e, t) {
        return null != t ? eH(e, t) : e;
      }
      var e$ = async (e, t, n, r, i, o, a, s, l, u, c, d, f, h, p, m, g) => {
        var y;
        let v = a.current;
        n(t.messages, !1);
        let b = h
            ? t.messages
            : t.messages.map(
                ({
                  role: e,
                  content: t,
                  experimental_attachments: n,
                  name: r,
                  data: i,
                  annotations: o,
                  toolInvocations: a,
                  function_call: s,
                  tool_calls: l,
                  tool_call_id: u,
                }) => ({
                  role: e,
                  content: t,
                  ...(void 0 !== n && { experimental_attachments: n }),
                  ...(void 0 !== r && { name: r }),
                  ...(void 0 !== i && { data: i }),
                  ...(void 0 !== o && { annotations: o }),
                  ...(void 0 !== a && { toolInvocations: a }),
                  tool_call_id: u,
                  ...(void 0 !== s && { function_call: s }),
                  ...(void 0 !== l && { tool_calls: l }),
                })
              ),
          x = i.current;
        return await $({
          api: e,
          body:
            null !=
            (y =
              null == p
                ? void 0
                : p({
                    messages: t.messages,
                    requestData: t.data,
                    requestBody: t.body,
                  }))
              ? y
              : {
                  messages: b,
                  data: t.data,
                  ...o.current.body,
                  ...t.body,
                  ...(void 0 !== t.functions && { functions: t.functions }),
                  ...(void 0 !== t.function_call && {
                    function_call: t.function_call,
                  }),
                  ...(void 0 !== t.tools && { tools: t.tools }),
                  ...(void 0 !== t.tool_choice && {
                    tool_choice: t.tool_choice,
                  }),
                },
          streamProtocol: u,
          credentials: o.current.credentials,
          headers: { ...o.current.headers, ...t.headers },
          abortController: () => s.current,
          restoreMessagesOnFailure() {
            g || n(v, !1);
          },
          onResponse: d,
          onUpdate(e, i) {
            n([...t.messages, ...e], !1),
              r([...(null != x ? x : []), ...(null != i ? i : [])], !1);
          },
          onToolCall: f,
          onFinish: c,
          generateId: l,
          fetch: m,
        });
      };
      function eY(e) {
        return (
          "assistant" === e.role &&
          e.toolInvocations &&
          e.toolInvocations.length > 0 &&
          e.toolInvocations.every((e) => "result" in e)
        );
      }
      async function eX(e) {
        if (null == e) return [];
        if (e instanceof FileList)
          return Promise.all(
            Array.from(e).map(async (e) => {
              let { name: t, type: n } = e;
              return {
                name: t,
                contentType: n,
                url: await new Promise((t, n) => {
                  let r = new FileReader();
                  (r.onload = (e) => {
                    var n;
                    t(null == (n = e.target) ? void 0 : n.result);
                  }),
                    (r.onerror = (e) => n(e)),
                    r.readAsDataURL(e);
                }),
              };
            })
          );
        if (Array.isArray(e)) return e;
        throw Error("Invalid attachments type");
      }
      var eq = function ({
        api: e = "https://kiko-sigma.vercel.app/api/chat",
        id: t,
        initialMessages: n,
        initialInput: r = "",
        sendExtraMessageFields: i,
        experimental_onFunctionCall: o,
        experimental_onToolCall: s,
        onToolCall: l,
        experimental_prepareRequestBody: u,
        experimental_maxAutomaticRoundtrips: c = 0,
        maxAutomaticRoundtrips: d = c,
        maxToolRoundtrips: f = d,
        maxSteps: h = null != f ? f + 1 : 1,
        streamMode: p,
        streamProtocol: m,
        onResponse: g,
        onFinish: y,
        onError: b,
        credentials: x,
        headers: w,
        body: k,
        generateId: E = v,
        fetch: S,
        keepLastMessageOnError: T = !1,
        experimental_throttle: A,
      } = {}) {
        p && (null != m || (m = "text" === p ? "text" : void 0));
        let C = (0, a.useId)(),
          P = null != t ? t : C,
          _ = "string" == typeof e ? [e, P] : P,
          [I] = (0, a.useState)([]),
          { data: R, mutate: O } = eU([_, "messages"], null, {
            fallbackData: null != n ? n : I,
          }),
          M = (0, a.useRef)(R || []);
        (0, a.useEffect)(() => {
          M.current = R || [];
        }, [R]);
        let { data: D, mutate: j } = eU([_, "streamData"], null),
          L = (0, a.useRef)(D);
        (0, a.useEffect)(() => {
          L.current = D;
        }, [D]);
        let { data: N = !1, mutate: F } = eU([_, "loading"], null),
          { data: z, mutate: V } = eU([_, "error"], null),
          B = (0, a.useRef)(null),
          U = (0, a.useRef)({ credentials: x, headers: w, body: k });
        (0, a.useEffect)(() => {
          U.current = { credentials: x, headers: w, body: k };
        }, [x, w, k]);
        let H = (0, a.useCallback)(
            async (t) => {
              let n = M.current.length;
              try {
                F(!0), V(void 0);
                let n = new AbortController();
                (B.current = n),
                  await Y({
                    getStreamedResponse: () =>
                      e$(
                        e,
                        t,
                        eW(O, A),
                        eW(j, A),
                        L,
                        U,
                        M,
                        B,
                        E,
                        m,
                        y,
                        g,
                        l,
                        i,
                        u,
                        S,
                        T
                      ),
                    experimental_onFunctionCall: o,
                    experimental_onToolCall: s,
                    updateChatRequest: (e) => {
                      t = e;
                    },
                    getCurrentMessages: () => M.current,
                  }),
                  (B.current = null);
              } catch (e) {
                if ("AbortError" === e.name) return (B.current = null), null;
                b && e instanceof Error && b(e), V(e);
              } finally {
                F(!1);
              }
              let r = M.current,
                a = r[r.length - 1];
              r.length > n &&
                null != a &&
                h > 1 &&
                eY(a) &&
                (function (e) {
                  let t = 0;
                  for (let n = e.length - 1; n >= 0; n--)
                    if ("assistant" === e[n].role) t++;
                    else break;
                  return t;
                })(r) < h &&
                (await H({ messages: r }));
            },
            [
              O,
              F,
              e,
              U,
              g,
              y,
              b,
              V,
              j,
              L,
              m,
              i,
              o,
              s,
              u,
              l,
              h,
              M,
              B,
              E,
              S,
              T,
              A,
            ]
          ),
          W = (0, a.useCallback)(
            async (
              e,
              {
                options: t,
                functions: n,
                function_call: r,
                tools: i,
                tool_choice: o,
                data: a,
                headers: s,
                body: l,
                experimental_attachments: u,
              } = {}
            ) => {
              var c, d;
              e.id || (e.id = E());
              let f = await eX(u),
                h = {
                  headers: null != s ? s : null == t ? void 0 : t.headers,
                  body: null != l ? l : null == t ? void 0 : t.body,
                };
              return H({
                messages: M.current.concat({
                  ...e,
                  id: null != (c = e.id) ? c : E(),
                  createdAt: null != (d = e.createdAt) ? d : new Date(),
                  experimental_attachments: f.length > 0 ? f : void 0,
                }),
                options: h,
                headers: h.headers,
                body: h.body,
                data: a,
                ...(void 0 !== n && { functions: n }),
                ...(void 0 !== r && { function_call: r }),
                ...(void 0 !== i && { tools: i }),
                ...(void 0 !== o && { tool_choice: o }),
              });
            },
            [H, E]
          ),
          $ = (0, a.useCallback)(
            async ({
              options: e,
              functions: t,
              function_call: n,
              tools: r,
              tool_choice: i,
              data: o,
              headers: a,
              body: s,
            } = {}) => {
              if (0 === M.current.length) return null;
              let l = {
                headers: null != a ? a : null == e ? void 0 : e.headers,
                body: null != s ? s : null == e ? void 0 : e.body,
              };
              return "assistant" === M.current[M.current.length - 1].role
                ? H({
                    messages: M.current.slice(0, -1),
                    options: l,
                    headers: l.headers,
                    body: l.body,
                    data: o,
                    ...(void 0 !== t && { functions: t }),
                    ...(void 0 !== n && { function_call: n }),
                    ...(void 0 !== r && { tools: r }),
                    ...(void 0 !== i && { tool_choice: i }),
                  })
                : H({
                    messages: M.current,
                    options: l,
                    headers: l.headers,
                    body: l.body,
                    data: o,
                    ...(void 0 !== t && { functions: t }),
                    ...(void 0 !== n && { function_call: n }),
                    ...(void 0 !== r && { tools: r }),
                    ...(void 0 !== i && { tool_choice: i }),
                  });
            },
            [H]
          ),
          X = (0, a.useCallback)(() => {
            B.current && (B.current.abort(), (B.current = null));
          }, []),
          q = (0, a.useCallback)(
            (e) => {
              "function" == typeof e && (e = e(M.current)),
                O(e, !1),
                (M.current = e);
            },
            [O]
          ),
          G = (0, a.useCallback)(
            (e) => {
              "function" == typeof e && (e = e(L.current)),
                j(e, !1),
                (L.current = e);
            },
            [j]
          ),
          [K, J] = (0, a.useState)(r),
          Z = (0, a.useCallback)(
            async (e, t = {}, n) => {
              var r, i, o, a, s;
              if (
                (null == (r = null == e ? void 0 : e.preventDefault) ||
                  r.call(e),
                !K && !t.allowEmptySubmit)
              )
                return;
              n && (U.current = { ...U.current, ...n });
              let l = await eX(t.experimental_attachments),
                u = {
                  headers:
                    null != (o = t.headers)
                      ? o
                      : null == (i = t.options)
                      ? void 0
                      : i.headers,
                  body:
                    null != (s = t.body)
                      ? s
                      : null == (a = t.options)
                      ? void 0
                      : a.body,
                };
              H({
                messages:
                  K || l.length || !t.allowEmptySubmit
                    ? M.current.concat({
                        id: E(),
                        createdAt: new Date(),
                        role: "user",
                        content: K,
                        experimental_attachments: l.length > 0 ? l : void 0,
                      })
                    : M.current,
                options: u,
                headers: u.headers,
                body: u.body,
                data: t.data,
              }),
                J("");
            },
            [K, E, H]
          ),
          Q = ({ toolCallId: e, result: t }) => {
            let n = M.current.map((n, r, i) =>
              r === i.length - 1 && "assistant" === n.role && n.toolInvocations
                ? {
                    ...n,
                    toolInvocations: n.toolInvocations.map((n) =>
                      n.toolCallId === e ? { ...n, result: t } : n
                    ),
                  }
                : n
            );
            O(n, !1), eY(n[n.length - 1]) && H({ messages: n });
          };
        return {
          messages: R || [],
          setMessages: q,
          data: D,
          setData: G,
          error: z,
          append: W,
          reload: $,
          stop: X,
          input: K,
          setInput: J,
          handleInputChange: (e) => {
            J(e.target.value);
          },
          handleSubmit: Z,
          isLoading: N,
          addToolResult: Q,
          experimental_addToolResult: Q,
        };
      };
    },
    4839: (e, t, n) => {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (n = 0; n < o; n++)
                    t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                } else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, { W: () => r });
    },
    8899: (e, t, n) => {
      "use strict";
      function r() {}
      function i() {}
      n.d(t, { ok: () => r, t1: () => i });
    },
    9791: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => r });
      let r = (0, n(2265).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    2981: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(565);
      let i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(e, t) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (n = !0),
          l = i.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  n = new Set(),
                  r = !1,
                  i = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 };
                function s(t) {
                  o.has(t) && (l.schedule(t), e()), t(a);
                }
                let l = {
                  schedule: (e, i = !1, a = !1) => {
                    let s = a && r ? t : n;
                    return i && o.add(e), s.has(e) || s.add(e), e;
                  },
                  cancel: (e) => {
                    n.delete(e), o.delete(e);
                  },
                  process: (e) => {
                    if (((a = e), r)) {
                      i = !0;
                      return;
                    }
                    (r = !0),
                      ([t, n] = [n, t]),
                      n.clear(),
                      t.forEach(s),
                      (r = !1),
                      i && ((i = !1), l.process(e));
                  },
                };
                return l;
              })(s)),
              e
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: c,
            update: d,
            preRender: f,
            render: h,
            postRender: p,
          } = l,
          m = () => {
            let i = r.c.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(i - a.timestamp, 40), 1)),
              (a.timestamp = i),
              (a.isProcessing = !0),
              u.process(a),
              c.process(a),
              d.process(a),
              f.process(a),
              h.process(a),
              p.process(a),
              (a.isProcessing = !1),
              n && t && ((o = !1), e(m));
          },
          g = () => {
            (n = !0), (o = !0), a.isProcessing || e(m);
          };
        return {
          schedule: i.reduce((e, t) => {
            let r = l[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < i.length; t++) l[i[t]].cancel(e);
          },
          state: a,
          steps: l,
        };
      }
    },
    6219: (e, t, n) => {
      "use strict";
      n.d(t, { Pn: () => o, Wi: () => i, frameData: () => a, yL: () => s });
      var r = n(9276);
      let {
        schedule: i,
        cancel: o,
        state: a,
        steps: s,
      } = (0, n(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.Z,
        !0
      );
    },
    9993: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { X: () => s });
      var i = n(565),
        o = n(6219);
      function a() {
        r = void 0;
      }
      let s = {
        now: () => (
          void 0 === r &&
            s.set(
              o.frameData.isProcessing || i.c.useManualTiming
                ? o.frameData.timestamp
                : performance.now()
            ),
          r
        ),
        set: (e) => {
          (r = e), queueMicrotask(a);
        },
      };
    },
    8590: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      n.d(t, { E: () => i9 });
      let i = (e) => Array.isArray(e);
      function o(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function a(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function s(e, t, n, r) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [i, o] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, n) => {
                  (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
                }),
              t
            );
          })(r);
          t = t(void 0 !== n ? n : e.custom, i, o);
        }
        return t;
      }
      function l(e, t, n) {
        let r = e.getProps();
        return s(r, t, void 0 !== n ? n : r.custom, e);
      }
      let u = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...u],
        d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        f = new Set(d),
        h = (e) => 1e3 * e,
        p = (e) => e / 1e3,
        m = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        v = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        b = (e, { keyframes: t }) =>
          t.length > 2
            ? y
            : f.has(e)
            ? e.startsWith("scale")
              ? g(t[1])
              : m
            : v;
      function x(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      var w,
        k,
        E = n(565);
      let S = { current: !1 },
        T = (e) => null !== e;
      function A(e, { repeat: t, repeatType: n = "loop" }, r) {
        let i = e.filter(T),
          o = t && "loop" !== n && t % 2 == 1 ? 0 : i.length - 1;
        return o && void 0 !== r ? r : i[o];
      }
      var C = n(6219),
        P = n(9276);
      let _ = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function I(e, t, n, r) {
        if (e === t && n === r) return P.Z;
        let i = (t) =>
          (function (e, t, n, r, i) {
            let o, a;
            let s = 0;
            do (o = _((a = t + (n - t) / 2), r, i) - e) > 0 ? (n = a) : (t = a);
            while (Math.abs(o) > 1e-7 && ++s < 12);
            return a;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : _(i(e), t, r));
      }
      let R = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        O = (e) => (t) => 1 - e(1 - t),
        M = I(0.33, 1.53, 0.69, 0.99),
        D = O(M),
        j = R(D),
        L = (e) =>
          (e *= 2) < 1 ? 0.5 * D(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        N = (e) => 1 - Math.sin(Math.acos(e)),
        F = O(N),
        z = R(N),
        V = (e) => /^0[^.\s]+$/u.test(e),
        B = P.Z,
        U = P.Z,
        H = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        W = (e) => (t) => "string" == typeof t && t.startsWith(e),
        $ = W("--"),
        Y = W("var(--"),
        X = (e) => !!Y(e) && q.test(e.split("/*")[0].trim()),
        q =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        G = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        K = (e, t, n) => (n > t ? t : n < e ? e : n),
        J = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        Z = { ...J, transform: (e) => K(0, 1, e) },
        Q = { ...J, default: 1 },
        ee = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        et = ee("deg"),
        en = ee("%"),
        er = ee("px"),
        ei = ee("vh"),
        eo = ee("vw"),
        ea = {
          ...en,
          parse: (e) => en.parse(e) / 100,
          transform: (e) => en.transform(100 * e),
        },
        es = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        el = (e) => e === J || e === er,
        eu = (e, t) => parseFloat(e.split(", ")[t]),
        ec =
          (e, t) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i) return eu(i[1], t);
            {
              let t = r.match(/^matrix\((.+)\)$/u);
              return t ? eu(t[1], e) : 0;
            }
          },
        ed = new Set(["x", "y", "z"]),
        ef = d.filter((e) => !ed.has(e)),
        eh = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: ec(4, 13),
          y: ec(5, 14),
        };
      (eh.translateX = eh.x), (eh.translateY = eh.y);
      let ep = (e) => (t) => t.test(e),
        em = [
          J,
          er,
          en,
          et,
          eo,
          ei,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        eg = (e) => em.find(ep(e)),
        ey = new Set(),
        ev = !1,
        eb = !1;
      function ex() {
        if (eb) {
          let e = Array.from(ey).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            n = new Map();
          t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                ef.forEach((n) => {
                  let r = e.getValue(n);
                  void 0 !== r &&
                    (t.push([n, r.get()]),
                    r.set(n.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (n.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = n.get(e);
              t &&
                t.forEach(([t, n]) => {
                  var r;
                  null === (r = e.getValue(t)) || void 0 === r || r.set(n);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (eb = !1), (ev = !1), ey.forEach((e) => e.complete()), ey.clear();
      }
      function ew() {
        ey.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (eb = !0);
        });
      }
      class ek {
        constructor(e, t, n, r, i, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (ey.add(this),
                ev || ((ev = !0), C.Wi.read(ew), C.Wi.resolveKeyframes(ex)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: r,
          } = this;
          for (let i = 0; i < e.length; i++)
            if (null === e[i]) {
              if (0 === i) {
                let i = null == r ? void 0 : r.get(),
                  o = e[e.length - 1];
                if (void 0 !== i) e[0] = i;
                else if (n && t) {
                  let r = n.readValue(t, o);
                  null != r && (e[0] = r);
                }
                void 0 === e[0] && (e[0] = o), r && void 0 === i && r.set(e[0]);
              } else e[i] = e[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            ey.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), ey.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eE = (e) => Math.round(1e5 * e) / 1e5,
        eS = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        eT =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        eA = (e, t) => (n) =>
          !!(
            ("string" == typeof n && eT.test(n) && n.startsWith(e)) ||
            (t && null != n && Object.prototype.hasOwnProperty.call(n, t))
          ),
        eC = (e, t, n) => (r) => {
          if ("string" != typeof r) return r;
          let [i, o, a, s] = r.match(eS);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        eP = (e) => K(0, 255, e),
        e_ = { ...J, transform: (e) => Math.round(eP(e)) },
        eI = {
          test: eA("rgb", "red"),
          parse: eC("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            e_.transform(e) +
            ", " +
            e_.transform(t) +
            ", " +
            e_.transform(n) +
            ", " +
            eE(Z.transform(r)) +
            ")",
        },
        eR = {
          test: eA("#"),
          parse: function (e) {
            let t = "",
              n = "",
              r = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: eI.transform,
        },
        eO = {
          test: eA("hsl", "hue"),
          parse: eC("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            en.transform(eE(t)) +
            ", " +
            en.transform(eE(n)) +
            ", " +
            eE(Z.transform(r)) +
            ")",
        },
        eM = {
          test: (e) => eI.test(e) || eR.test(e) || eO.test(e),
          parse: (e) =>
            eI.test(e) ? eI.parse(e) : eO.test(e) ? eO.parse(e) : eR.parse(e),
          transform: (e) =>
            "string" == typeof e
              ? e
              : e.hasOwnProperty("red")
              ? eI.transform(e)
              : eO.transform(e),
        },
        eD =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        ej = "number",
        eL = "color",
        eN =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eF(e) {
        let t = e.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          i = [],
          o = 0,
          a = t
            .replace(
              eN,
              (e) => (
                eM.test(e)
                  ? (r.color.push(o), i.push(eL), n.push(eM.parse(e)))
                  : e.startsWith("var(")
                  ? (r.var.push(o), i.push("var"), n.push(e))
                  : (r.number.push(o), i.push(ej), n.push(parseFloat(e))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: a, indexes: r, types: i };
      }
      function ez(e) {
        return eF(e).values;
      }
      function eV(e) {
        let { split: t, types: n } = eF(e),
          r = t.length;
        return (e) => {
          let i = "";
          for (let o = 0; o < r; o++)
            if (((i += t[o]), void 0 !== e[o])) {
              let t = n[o];
              t === ej
                ? (i += eE(e[o]))
                : t === eL
                ? (i += eM.transform(e[o]))
                : (i += e[o]);
            }
          return i;
        };
      }
      let eB = (e) => ("number" == typeof e ? 0 : e),
        eU = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(eS)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(eD)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: ez,
          createTransformer: eV,
          getAnimatableNone: function (e) {
            let t = ez(e);
            return eV(e)(t.map(eB));
          },
        },
        eH = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eW(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = n.match(eS) || [];
        if (!r) return e;
        let i = n.replace(r, ""),
          o = eH.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + i + ")";
      }
      let e$ = /\b([a-z-]*)\(.*?\)/gu,
        eY = {
          ...eU,
          getAnimatableNone: (e) => {
            let t = e.match(e$);
            return t ? t.map(eW).join(" ") : e;
          },
        },
        eX = { ...J, transform: Math.round },
        eq = {
          borderWidth: er,
          borderTopWidth: er,
          borderRightWidth: er,
          borderBottomWidth: er,
          borderLeftWidth: er,
          borderRadius: er,
          radius: er,
          borderTopLeftRadius: er,
          borderTopRightRadius: er,
          borderBottomRightRadius: er,
          borderBottomLeftRadius: er,
          width: er,
          maxWidth: er,
          height: er,
          maxHeight: er,
          top: er,
          right: er,
          bottom: er,
          left: er,
          padding: er,
          paddingTop: er,
          paddingRight: er,
          paddingBottom: er,
          paddingLeft: er,
          margin: er,
          marginTop: er,
          marginRight: er,
          marginBottom: er,
          marginLeft: er,
          backgroundPositionX: er,
          backgroundPositionY: er,
          rotate: et,
          rotateX: et,
          rotateY: et,
          rotateZ: et,
          scale: Q,
          scaleX: Q,
          scaleY: Q,
          scaleZ: Q,
          skew: et,
          skewX: et,
          skewY: et,
          distance: er,
          translateX: er,
          translateY: er,
          translateZ: er,
          x: er,
          y: er,
          z: er,
          perspective: er,
          transformPerspective: er,
          opacity: Z,
          originX: ea,
          originY: ea,
          originZ: er,
          zIndex: eX,
          size: er,
          fillOpacity: Z,
          strokeOpacity: Z,
          numOctaves: eX,
        },
        eG = {
          ...eq,
          color: eM,
          backgroundColor: eM,
          outlineColor: eM,
          fill: eM,
          stroke: eM,
          borderColor: eM,
          borderTopColor: eM,
          borderRightColor: eM,
          borderBottomColor: eM,
          borderLeftColor: eM,
          filter: eY,
          WebkitFilter: eY,
        },
        eK = (e) => eG[e];
      function eJ(e, t) {
        let n = eK(e);
        return (
          n !== eY && (n = eU),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      let eZ = new Set(["auto", "none", "0"]);
      class eQ extends ek {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if ("string" == typeof r && X((r = r.trim()))) {
              let i = (function e(t, n, r = 1) {
                U(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [i, o] = (function (e) {
                  let t = G.exec(e);
                  if (!t) return [,];
                  let [, n, r, i] = t;
                  return [`--${null != n ? n : r}`, i];
                })(t);
                if (!i) return;
                let a = window.getComputedStyle(n).getPropertyValue(i);
                if (a) {
                  let e = a.trim();
                  return H(e) ? parseFloat(e) : e;
                }
                return X(o) ? e(o, n, r + 1) : o;
              })(r, t.current);
              void 0 !== i && (e[n] = i),
                n === e.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !es.has(n) || 2 !== e.length))
            return;
          let [r, i] = e,
            o = eg(r),
            a = eg(i);
          if (o !== a) {
            if (el(o) && el(a))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                "string" == typeof n && (e[t] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) {
            var r;
            ("number" == typeof (r = e[t])
              ? 0 === r
              : null === r || "none" === r || "0" === r || V(r)) && n.push(t);
          }
          n.length &&
            (function (e, t, n) {
              let r,
                i = 0;
              for (; i < e.length && !r; ) {
                let t = e[i];
                "string" == typeof t &&
                  !eZ.has(t) &&
                  eF(t).values.length &&
                  (r = e[i]),
                  i++;
              }
              if (r && n) for (let i of t) e[i] = eJ(n, r);
            })(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eh[n](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let r = t[t.length - 1];
          void 0 !== r && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: n, unresolvedKeyframes: r } = this;
          if (!t || !t.current) return;
          let i = t.getValue(n);
          i && i.jump(this.measuredOrigin, !1);
          let o = r.length - 1,
            a = r[o];
          (r[o] = eh[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, n]) => {
                t.getValue(e).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function e0(e) {
        return "function" == typeof e;
      }
      var e1 = n(9993);
      let e2 = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (eU.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      class e3 {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = e1.X.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: o,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (ew(), ex()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = e1.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: r,
            velocity: i,
            delay: o,
            onComplete: a,
            onUpdate: s,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, n, r) {
              let i = e[0];
              if (null === i) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let o = e[e.length - 1],
                a = e2(i, t),
                s = e2(o, t);
              return (
                B(
                  a === s,
                  `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!a &&
                  !!s &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let n = 0; n < e.length; n++)
                      if (e[n] !== t) return !0;
                  })(e) ||
                    (("spring" === n || e0(n)) && r))
              );
            })(e, n, r, i)
          ) {
            if (S.current || !o) {
              null == s || s(A(e, this.options, t)),
                null == a || a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      var e5 = n(3476);
      function e4(e, t, n) {
        let r = Math.max(t - 5, 0);
        return (0, e5.R)(n - e(r), t - r);
      }
      function e6(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let e9 = ["duration", "bounce"],
        e8 = ["stiffness", "damping", "mass"];
      function e7(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function te({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
        let i;
        let o = e[0],
          a = e[e.length - 1],
          s = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: m,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!e7(e, e8) && e7(e, e9)) {
              let n = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let i, o;
                B(e <= h(10), "Spring duration must be 10 seconds or less");
                let a = 1 - t;
                (a = K(0.05, 1, a)),
                  (e = K(0.01, 10, p(e))),
                  a < 1
                    ? ((i = (t) => {
                        let r = t * a,
                          i = r * e;
                        return 0.001 - ((r - n) / e6(t, a)) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let r = t * a * e,
                          o = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          s = Math.exp(-r),
                          l = e6(Math.pow(t, 2), a);
                        return (
                          ((r * n + n - o) * s * (-i(t) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((i = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                      (o = (t) => e * e * (n - t) * Math.exp(-t * e)));
                let s = (function (e, t, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                  return r;
                })(i, o, 5 / e);
                if (((e = h(e)), isNaN(s)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(s, 2) * r;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(r * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...r, velocity: -p(r.velocity || 0) }),
          g = f || 0,
          y = u / (2 * Math.sqrt(l * c)),
          v = a - o,
          b = p(Math.sqrt(l / c)),
          x = 5 > Math.abs(v);
        if ((n || (n = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5), y < 1)) {
          let e = e6(b, y);
          i = (t) =>
            a -
            Math.exp(-y * b * t) *
              (((g + y * b * v) / e) * Math.sin(e * t) + v * Math.cos(e * t));
        } else if (1 === y)
          i = (e) => a - Math.exp(-b * e) * (v + (g + b * v) * e);
        else {
          let e = b * Math.sqrt(y * y - 1);
          i = (t) => {
            let n = Math.exp(-y * b * t),
              r = Math.min(e * t, 300);
            return (
              a -
              (n * ((g + y * b * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e
            );
          };
        }
        return {
          calculatedDuration: (m && d) || null,
          next: (e) => {
            let r = i(e);
            if (m) s.done = e >= d;
            else {
              let o = 0;
              y < 1 && (o = 0 === e ? h(g) : e4(i, e, r));
              let l = Math.abs(o) <= n,
                u = Math.abs(a - r) <= t;
              s.done = l && u;
            }
            return (s.value = s.done ? a : r), s;
          },
        };
      }
      function tt({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: a,
        min: s,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let h = e[0],
          p = { done: !1, value: h },
          m = (e) => (void 0 !== s && e < s) || (void 0 !== l && e > l),
          g = (e) =>
            void 0 === s
              ? l
              : void 0 === l
              ? s
              : Math.abs(s - e) < Math.abs(l - e)
              ? s
              : l,
          y = n * t,
          v = h + y,
          b = void 0 === a ? v : a(v);
        b !== v && (y = b - h);
        let x = (e) => -y * Math.exp(-e / r),
          w = (e) => b + x(e),
          k = (e) => {
            let t = x(e),
              n = w(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? b : n);
          },
          E = (e) => {
            m(p.value) &&
              ((d = e),
              (f = te({
                keyframes: [p.value, g(p.value)],
                velocity: e4(w, e, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), k(e), E(e)),
              void 0 !== d && e >= d)
                ? f.next(e - d)
                : (t || k(e), p);
            },
          }
        );
      }
      let tn = I(0.42, 0, 1, 1),
        tr = I(0, 0, 0.58, 1),
        ti = I(0.42, 0, 0.58, 1),
        to = (e) => Array.isArray(e) && "number" != typeof e[0],
        ta = (e) => Array.isArray(e) && "number" == typeof e[0],
        ts = {
          linear: P.Z,
          easeIn: tn,
          easeInOut: ti,
          easeOut: tr,
          circIn: N,
          circInOut: z,
          circOut: F,
          backIn: D,
          backInOut: j,
          backOut: M,
          anticipate: L,
        },
        tl = (e) => {
          if (ta(e)) {
            U(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, n, r, i] = e;
            return I(t, n, r, i);
          }
          return "string" == typeof e
            ? (U(void 0 !== ts[e], `Invalid easing type '${e}'`), ts[e])
            : e;
        },
        tu = (e, t) => (n) => t(e(n)),
        tc = (...e) => e.reduce(tu),
        td = (e, t, n) => {
          let r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        tf = (e, t, n) => e + (t - e) * n;
      function th(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      function tp(e, t) {
        return (n) => (n > 0 ? t : e);
      }
      let tm = (e, t, n) => {
          let r = e * e,
            i = n * (t * t - r) + r;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        tg = [eR, eI, eO],
        ty = (e) => tg.find((t) => t.test(e));
      function tv(e) {
        let t = ty(e);
        if (
          (B(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let n = t.parse(e);
        return (
          t === eO &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
              (e /= 360), (n /= 100);
              let i = 0,
                o = 0,
                a = 0;
              if ((t /= 100)) {
                let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  s = 2 * n - r;
                (i = th(s, r, e + 1 / 3)),
                  (o = th(s, r, e)),
                  (a = th(s, r, e - 1 / 3));
              } else i = o = a = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let tb = (e, t) => {
          let n = tv(e),
            r = tv(t);
          if (!n || !r) return tp(e, t);
          let i = { ...n };
          return (e) => (
            (i.red = tm(n.red, r.red, e)),
            (i.green = tm(n.green, r.green, e)),
            (i.blue = tm(n.blue, r.blue, e)),
            (i.alpha = tf(n.alpha, r.alpha, e)),
            eI.transform(i)
          );
        },
        tx = new Set(["none", "hidden"]);
      function tw(e, t) {
        return (n) => tf(e, t, n);
      }
      function tk(e) {
        return "number" == typeof e
          ? tw
          : "string" == typeof e
          ? X(e)
            ? tp
            : eM.test(e)
            ? tb
            : tT
          : Array.isArray(e)
          ? tE
          : "object" == typeof e
          ? eM.test(e)
            ? tb
            : tS
          : tp;
      }
      function tE(e, t) {
        let n = [...e],
          r = n.length,
          i = e.map((e, n) => tk(e)(e, t[n]));
        return (e) => {
          for (let t = 0; t < r; t++) n[t] = i[t](e);
          return n;
        };
      }
      function tS(e, t) {
        let n = { ...e, ...t },
          r = {};
        for (let i in n)
          void 0 !== e[i] && void 0 !== t[i] && (r[i] = tk(e[i])(e[i], t[i]));
        return (e) => {
          for (let t in r) n[t] = r[t](e);
          return n;
        };
      }
      let tT = (e, t) => {
        let n = eU.createTransformer(t),
          r = eF(e),
          i = eF(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (tx.has(e) && !i.values.length) || (tx.has(t) && !r.values.length)
            ? (function (e, t) {
                return tx.has(e)
                  ? (n) => (n <= 0 ? e : t)
                  : (n) => (n >= 1 ? t : e);
              })(e, t)
            : tc(
                tE(
                  (function (e, t) {
                    var n;
                    let r = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < t.values.length; o++) {
                      let a = t.types[o],
                        s = e.indexes[a][i[a]],
                        l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                      (r[o] = l), i[a]++;
                    }
                    return r;
                  })(r, i),
                  i.values
                ),
                n
              )
          : (B(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            tp(e, t));
      };
      function tA(e, t, n) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof n
          ? tf(e, t, n)
          : tk(e)(e, t);
      }
      function tC({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = "easeInOut",
      }) {
        let i = to(r) ? r.map(tl) : tl(r),
          o = { done: !1, value: t[0] },
          a = (function (e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
            let o = e.length;
            if (
              (U(
                o === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === o)
            )
              return () => t[0];
            if (2 === o && e[0] === e[1]) return () => t[1];
            e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let a = (function (e, t, n) {
                let r = [],
                  i = n || tA,
                  o = e.length - 1;
                for (let n = 0; n < o; n++) {
                  let o = i(e[n], e[n + 1]);
                  t && (o = tc(Array.isArray(t) ? t[n] || P.Z : t, o)),
                    r.push(o);
                }
                return r;
              })(t, r, i),
              s = a.length,
              l = (t) => {
                let n = 0;
                if (s > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                let r = td(e[n], e[n + 1], t);
                return a[n](r);
              };
            return n ? (t) => l(K(e[0], e[o - 1], t)) : l;
          })(
            (n && n.length === t.length
              ? n
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let n = e[e.length - 1];
                      for (let r = 1; r <= t; r++) {
                        let i = td(0, t, r);
                        e.push(tf(n, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(i)
                ? i
                : t.map(() => i || ti).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      let tP = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => C.Wi.update(t, !0),
            stop: () => (0, C.Pn)(t),
            now: () =>
              C.frameData.isProcessing ? C.frameData.timestamp : e1.X.now(),
          };
        },
        t_ = { decay: tt, inertia: tt, tween: tC, keyframes: tC, spring: te },
        tI = (e) => e / 100;
      class tR extends e3 {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: n,
              element: r,
              keyframes: i,
            } = this.options,
            o = (null == r ? void 0 : r.KeyframeResolver) || ek;
          (this.resolver = new o(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, n;
          let {
              type: r = "keyframes",
              repeat: i = 0,
              repeatDelay: o = 0,
              repeatType: a,
              velocity: s = 0,
            } = this.options,
            l = e0(r) ? r : t_[r] || tC;
          l !== tC &&
            "number" != typeof e[0] &&
            ((t = tc(tI, tA(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === a &&
            (n = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -s,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  n = e.next(t);
                for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
                return t >= 2e4 ? 1 / 0 : t;
              })(u));
          let { calculatedDuration: c } = u,
            d = c + o;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (i + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: s,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return i.next(0);
          let {
            delay: d,
            repeat: f,
            repeatType: h,
            repeatDelay: p,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let v = this.currentTime,
            b = i;
          if (f) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1),
              1 === n && t--,
              (t = Math.min(t, f + 1)) % 2 &&
                ("reverse" === h
                  ? ((n = 1 - n), p && (n -= p / c))
                  : "mirror" === h && (b = o)),
              (v = K(0, 1, n) * c);
          }
          let x = y ? { done: !1, value: s[0] } : b.next(v);
          a && (x.value = a(x.value));
          let { done: w } = x;
          y ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            k && void 0 !== r && (x.value = A(s, this.options, r)),
            m && m(x.value),
            k && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? p(e.calculatedDuration) : 0;
        }
        get time() {
          return p(this.currentTime);
        }
        set time(e) {
          (e = h(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e), t && (this.time = p(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = tP, onPlay: t, startTime: n } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let tO = new Set(["opacity", "clipPath", "filter", "transform"]),
        tM = (e, t) => {
          let n = "",
            r = Math.max(Math.round(t / 10), 2);
          for (let t = 0; t < r; t++) n += e(td(0, r - 1, t)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function tD(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let tj = { linearEasing: void 0 },
        tL = (function (e, t) {
          let n = tD(e);
          return () => {
            var e;
            return null !== (e = tj[t]) && void 0 !== e ? e : n();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        tN = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        tF = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tN([0, 0.65, 0.55, 1]),
          circOut: tN([0.55, 0, 1, 0.45]),
          backIn: tN([0.31, 0.01, 0.66, -0.59]),
          backOut: tN([0.33, 1.53, 0.69, 0.99]),
        };
      function tz(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let tV = tD(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tB = { anticipate: L, backInOut: j, circInOut: z };
      class tU extends e3 {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: n,
            element: r,
            keyframes: i,
          } = this.options;
          (this.resolver = new eQ(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var n, r;
          let {
            duration: i = 300,
            times: o,
            ease: a,
            type: s,
            motionValue: l,
            name: u,
            startTime: c,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            ("string" == typeof a && tL() && a in tB && (a = tB[a]),
            e0((r = this.options).type) ||
              "spring" === r.type ||
              !(function e(t) {
                return !!(
                  ("function" == typeof t && tL()) ||
                  !t ||
                  ("string" == typeof t && (t in tF || tL())) ||
                  ta(t) ||
                  (Array.isArray(t) && t.every(e))
                );
              })(r.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: n,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              c = (function (e, t) {
                let n = new tR({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: e[0] },
                  i = [],
                  o = 0;
                for (; !r.done && o < 2e4; )
                  i.push((r = n.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: "linear",
                };
              })(e, u);
            1 === (e = c.keyframes).length && (e[1] = e[0]),
              (i = c.duration),
              (o = c.times),
              (a = c.ease),
              (s = "keyframes");
          }
          let d = (function (
            e,
            t,
            n,
            {
              delay: r = 0,
              duration: i = 300,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: s,
              times: l,
            } = {}
          ) {
            let u = { [t]: n };
            l && (u.offset = l);
            let c = (function e(t, n) {
              if (t)
                return "function" == typeof t && tL()
                  ? tM(t, n)
                  : ta(t)
                  ? tN(t)
                  : Array.isArray(t)
                  ? t.map((t) => e(t, n) || tF.easeOut)
                  : tF[t];
            })(s, i);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: r,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: a,
          });
          return (
            (d.startTime = null != c ? c : this.calcStartTime()),
            this.pendingTimeline
              ? (tz(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(A(e, this.options, t)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: o,
              type: s,
              ease: a,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return p(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return p(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.currentTime = h(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return P.Z;
            let { animation: n } = t;
            tz(n, e);
          } else this.pendingTimeline = e;
          return P.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: a,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: s,
                element: l,
                ...u
              } = this.options,
              c = new tR({
                ...u,
                keyframes: n,
                duration: r,
                type: i,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = h(this.time);
            e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: s } = this.options;
          s && s(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: n,
            repeatDelay: r,
            repeatType: i,
            damping: o,
            type: a,
          } = e;
          return (
            tV() &&
            n &&
            tO.has(n) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !r &&
            "mirror" !== i &&
            0 !== o &&
            "inertia" !== a
          );
        }
      }
      let tH = tD(() => void 0 !== window.ScrollTimeline);
      class tW {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e, t) {
          let n = this.animations.map((n) =>
            tH() && n.attachTimeline ? n.attachTimeline(e) : t(n)
          );
          return () => {
            n.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let t$ =
          (e, t, n, r = {}, i, o) =>
          (a) => {
            let s = x(r, e) || {},
              l = s.delay || r.delay || 0,
              { elapsed: u = 0 } = r;
            u -= h(l);
            let c = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...s,
              delay: -u,
              onUpdate: (e) => {
                t.set(e), s.onUpdate && s.onUpdate(e);
              },
              onComplete: () => {
                a(), s.onComplete && s.onComplete();
              },
              name: e,
              motionValue: t,
              element: o ? void 0 : i,
            };
            !(function ({
              when: e,
              delay: t,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: i,
              repeat: o,
              repeatType: a,
              repeatDelay: s,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(s) && (c = { ...c, ...b(e, c) }),
              c.duration && (c.duration = h(c.duration)),
              c.repeatDelay && (c.repeatDelay = h(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (d = !0)),
              (S.current || E.c.skipAnimations) &&
                ((d = !0), (c.duration = 0), (c.delay = 0)),
              d && !o && void 0 !== t.get())
            ) {
              let e = A(c.keyframes, s);
              if (void 0 !== e)
                return (
                  C.Wi.update(() => {
                    c.onUpdate(e), c.onComplete();
                  }),
                  new tW([])
                );
            }
            return !o && tU.supports(c) ? new tU(c) : new tR(c);
          },
        tY = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        tX = (e) => (i(e) ? e[e.length - 1] || 0 : e);
      var tq = n(804);
      let tG = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        tK = "data-" + tG("framerAppearId"),
        tJ = (e) => !!(e && e.getVelocity);
      function tZ(e, t) {
        let n = e.getValue("willChange");
        if (tJ(n) && n.add) return n.add(t);
      }
      function tQ(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
        var o;
        let {
          transition: a = e.getDefaultTransition(),
          transitionEnd: s,
          ...u
        } = t;
        r && (a = r);
        let c = [],
          d = i && e.animationState && e.animationState.getState()[i];
        for (let t in u) {
          let r = e.getValue(
              t,
              null !== (o = e.latestValues[t]) && void 0 !== o ? o : null
            ),
            i = u[t];
          if (
            void 0 === i ||
            (d &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let r = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), r;
              })(d, t))
          )
            continue;
          let s = { delay: n, ...x(a || {}, t) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let n = e.props[tK];
            if (n) {
              let e = window.MotionHandoffAnimation(n, t, C.Wi);
              null !== e && ((s.startTime = e), (l = !0));
            }
          }
          tZ(e, t),
            r.start(
              t$(
                t,
                r,
                i,
                e.shouldReduceMotion && f.has(t) ? { type: !1 } : s,
                e,
                l
              )
            );
          let h = r.animation;
          h && c.push(h);
        }
        return (
          s &&
            Promise.all(c).then(() => {
              C.Wi.update(() => {
                s &&
                  (function (e, t) {
                    let {
                      transitionEnd: n = {},
                      transition: r = {},
                      ...i
                    } = l(e, t) || {};
                    for (let t in (i = { ...i, ...n })) {
                      let n = tX(i[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(n)
                        : e.addValue(t, (0, tq.BX)(n));
                    }
                  })(e, s);
              });
            }),
          c
        );
      }
      function t0(e, t, n = {}) {
        var r;
        let i = l(
            e,
            t,
            "exit" === n.type
              ? null === (r = e.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: o = e.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (o = n.transitionOverride);
        let a = i ? () => Promise.all(tQ(e, i, n)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: a,
                    staggerDirection: s,
                  } = o;
                  return (function (e, t, n = 0, r = 0, i = 1, o) {
                    let a = [],
                      s = (e.variantChildren.size - 1) * r,
                      l = 1 === i ? (e = 0) => e * r : (e = 0) => s - e * r;
                    return (
                      Array.from(e.variantChildren)
                        .sort(t1)
                        .forEach((e, r) => {
                          e.notify("AnimationStart", t),
                            a.push(
                              t0(e, t, { ...o, delay: n + l(r) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(e, t, i + r, a, s, n);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), s(n.delay)]);
        {
          let [e, t] = "beforeChildren" === u ? [a, s] : [s, a];
          return e().then(() => t());
        }
      }
      function t1(e, t) {
        return e.sortNodePosition(t);
      }
      let t2 = c.length,
        t3 = [...u].reverse(),
        t5 = u.length;
      function t4(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function t6() {
        return {
          animate: t4(!0),
          whileInView: t4(),
          whileHover: t4(),
          whileTap: t4(),
          whileDrag: t4(),
          whileFocus: t4(),
          exit: t4(),
        };
      }
      class t9 {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class t8 extends t9 {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (function (e, t, n = {}) {
                          let r;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            r = Promise.all(t.map((t) => t0(e, t, n)));
                          else if ("string" == typeof t) r = t0(e, t, n);
                          else {
                            let i =
                              "function" == typeof t ? l(e, t, n.custom) : t;
                            r = Promise.all(tQ(e, i, n));
                          }
                          return r.then(() => {
                            e.notify("AnimationComplete", t);
                          });
                        })(e, t, n)
                      )
                    ),
                  n = t6(),
                  s = !0,
                  u = (t) => (n, r) => {
                    var i;
                    let o = l(
                      e,
                      r,
                      "exit" === t
                        ? null === (i = e.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (o) {
                      let { transition: e, transitionEnd: t, ...r } = o;
                      n = { ...n, ...r, ...t };
                    }
                    return n;
                  };
                function d(l) {
                  let { props: d } = e,
                    f =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let n = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (n.initial = t.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let e = 0; e < t2; e++) {
                          let r = c[e],
                            i = t.props[r];
                          (a(i) || !1 === i) && (n[r] = i);
                        }
                        return n;
                      })(e.parent) || {},
                    h = [],
                    p = new Set(),
                    m = {},
                    g = 1 / 0;
                  for (let t = 0; t < t5; t++) {
                    var y;
                    let c = t3[t],
                      v = n[c],
                      b = void 0 !== d[c] ? d[c] : f[c],
                      x = a(b),
                      w = c === l ? v.isActive : null;
                    !1 === w && (g = t);
                    let k = b === f[c] && b !== d[c] && x;
                    if (
                      (k && s && e.manuallyAnimateOnMount && (k = !1),
                      (v.protectedKeys = { ...m }),
                      (!v.isActive && null === w) ||
                        (!b && !v.prevProp) ||
                        r(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let E =
                        ((y = v.prevProp),
                        "string" == typeof b
                          ? b !== y
                          : !!Array.isArray(b) && !o(b, y)),
                      S =
                        E || (c === l && v.isActive && !k && x) || (t > g && x),
                      T = !1,
                      A = Array.isArray(b) ? b : [b],
                      C = A.reduce(u(c), {});
                    !1 === w && (C = {});
                    let { prevResolvedValues: P = {} } = v,
                      _ = { ...P, ...C },
                      I = (t) => {
                        (S = !0),
                          p.has(t) && ((T = !0), p.delete(t)),
                          (v.needsAnimating[t] = !0);
                        let n = e.getValue(t);
                        n && (n.liveStyle = !1);
                      };
                    for (let e in _) {
                      let t = C[e],
                        n = P[e];
                      if (!m.hasOwnProperty(e))
                        (i(t) && i(n) ? o(t, n) : t === n)
                          ? void 0 !== t && p.has(e)
                            ? I(e)
                            : (v.protectedKeys[e] = !0)
                          : null != t
                          ? I(e)
                          : p.add(e);
                    }
                    (v.prevProp = b),
                      (v.prevResolvedValues = C),
                      v.isActive && (m = { ...m, ...C }),
                      s && e.blockInitialAnimation && (S = !1);
                    let R = !(k && E) || T;
                    S &&
                      R &&
                      h.push(
                        ...A.map((e) => ({
                          animation: e,
                          options: { type: c },
                        }))
                      );
                  }
                  if (p.size) {
                    let t = {};
                    p.forEach((n) => {
                      let r = e.getBaseTarget(n),
                        i = e.getValue(n);
                      i && (i.liveStyle = !0), (t[n] = null != r ? r : null);
                    }),
                      h.push({ animation: t });
                  }
                  let v = !!h.length;
                  return (
                    s &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (v = !1),
                    (s = !1),
                    v ? t(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (t, r) {
                    var i;
                    if (n[t].isActive === r) return Promise.resolve();
                    null === (i = e.variantChildren) ||
                      void 0 === i ||
                      i.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, r);
                      }),
                      (n[t].isActive = r);
                    let o = d(t);
                    for (let e in n) n[e].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = t6()), (s = !0);
                  },
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          r(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      }
      let t7 = 0;
      class ne extends t9 {
        constructor() {
          super(...arguments), (this.id = t7++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive("exit", !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      let nt = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function nn(e, t = "page") {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let nr = (e) => (t) => nt(t) && e(t, nn(t));
      function ni(e, t, n, r = { passive: !0 }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
      }
      function no(e, t, n, r) {
        return ni(e, t, nr(n), r);
      }
      let na = (e, t) => Math.abs(e - t);
      class ns {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = nc(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n =
                  (function (e, t) {
                    return Math.sqrt(na(e.x, t.x) ** 2 + na(e.y, t.y) ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !n) return;
              let { point: r } = e,
                { timestamp: i } = C.frameData;
              this.history.push({ ...r, timestamp: i });
              let { onStart: o, onMove: a } = this.handlers;
              t ||
                (o && o(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = nl(t, this.transformPagePoint)),
                C.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = nc(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : nl(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, o), r && r(e, o);
            }),
            !nt(e))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.contextWindow = r || window);
          let o = nl(nn(e), this.transformPagePoint),
            { point: a } = o,
            { timestamp: s } = C.frameData;
          this.history = [{ ...a, timestamp: s }];
          let { onSessionStart: l } = t;
          l && l(e, nc(o, this.history)),
            (this.removeListeners = tc(
              no(this.contextWindow, "pointermove", this.handlePointerMove),
              no(this.contextWindow, "pointerup", this.handlePointerUp),
              no(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, C.Pn)(this.updatePoint);
        }
      }
      function nl(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function nu(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function nc({ point: e }, t) {
        return {
          point: e,
          delta: nu(e, nd(t)),
          offset: nu(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              r = null,
              i = nd(e);
            for (
              ;
              n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > h(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            let o = p(i.timestamp - r.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(t, 0),
        };
      }
      function nd(e) {
        return e[e.length - 1];
      }
      function nf(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let nh = nf("dragHorizontal"),
        np = nf("dragVertical");
      function nm(e) {
        let t = !1;
        if ("y" === e) t = np();
        else if ("x" === e) t = nh();
        else {
          let e = nh(),
            n = np();
          e && n
            ? (t = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return t;
      }
      function ng() {
        let e = nm(!0);
        return !e || (e(), !1);
      }
      function ny(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function nv(e) {
        return e.max - e.min;
      }
      function nb(e, t, n, r = 0.5) {
        (e.origin = r),
          (e.originPoint = tf(t.min, t.max, e.origin)),
          (e.scale = nv(n) / nv(t)),
          (e.translate = tf(n.min, n.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0);
      }
      function nx(e, t, n, r) {
        nb(e.x, t.x, n.x, r ? r.originX : void 0),
          nb(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function nw(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + nv(t));
      }
      function nk(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + nv(t));
      }
      function nE(e, t, n) {
        nk(e.x, t.x, n.x), nk(e.y, t.y, n.y);
      }
      function nS(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function nT(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
        );
      }
      function nA(e, t, n) {
        return { min: nC(e, t), max: nC(e, n) };
      }
      function nC(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let nP = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        n_ = () => ({ x: nP(), y: nP() }),
        nI = () => ({ min: 0, max: 0 }),
        nR = () => ({ x: nI(), y: nI() });
      function nO(e) {
        return [e("x"), e("y")];
      }
      function nM({ top: e, left: t, right: n, bottom: r }) {
        return { x: { min: t, max: n }, y: { min: e, max: r } };
      }
      function nD(e) {
        return void 0 === e || 1 === e;
      }
      function nj({ scale: e, scaleX: t, scaleY: n }) {
        return !nD(e) || !nD(t) || !nD(n);
      }
      function nL(e) {
        return (
          nj(e) ||
          nN(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function nN(e) {
        var t, n;
        return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
      }
      function nF(e, t, n, r, i) {
        return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t;
      }
      function nz(e, t = 0, n = 1, r, i) {
        (e.min = nF(e.min, t, n, r, i)), (e.max = nF(e.max, t, n, r, i));
      }
      function nV(e, { x: t, y: n }) {
        nz(e.x, t.translate, t.scale, t.originPoint),
          nz(e.y, n.translate, n.scale, n.originPoint);
      }
      function nB(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function nU(e, t, n, r, i = 0.5) {
        let o = tf(e.min, e.max, i);
        nz(e, t, n, o, r);
      }
      function nH(e, t) {
        nU(e.x, t.x, t.scaleX, t.scale, t.originX),
          nU(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
      function nW(e, t) {
        return nM(
          (function (e, t) {
            if (!t) return e;
            let n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let n$ = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        nY = new WeakMap();
      class nX {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = nR()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new ns(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(nn(e, "page").point);
              },
              onStart: (e, t) => {
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: i,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = nm(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  nO((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (en.test(t)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let r = n.layout.layoutBox[e];
                        r && (t = nv(r) * (parseFloat(t) / 100));
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && C.Wi.postRender(() => i(e, t)),
                  tZ(this.visualElement, "transform");
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: a } = t;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let n = null;
                    return (
                      Math.abs(e.y) > t
                        ? (n = "y")
                        : Math.abs(e.x) > t && (n = "x"),
                      n
                    );
                  })(a)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, a),
                  this.updateAxis("y", t.point, a),
                  this.visualElement.render(),
                  o && o(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                nO((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: n$(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = t;
          this.startAnimation(r);
          let { onDragEnd: i } = this.getProps();
          i && C.Wi.postRender(() => i(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !nq(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: n }, r) {
              return (
                void 0 !== t && e < t
                  ? (e = r ? tf(t, e, r.min) : Math.max(e, t))
                  : void 0 !== n &&
                    e > n &&
                    (e = r ? tf(n, e, r.max) : Math.min(e, n)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: n } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            i = this.constraints;
          t && ny(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (
                e,
                { top: t, left: n, bottom: r, right: i }
              ) {
                return { x: nS(e.x, n, i), y: nS(e.y, t, r) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: nA(e, "left", "right"), y: nA(e, "top", "bottom") }
              );
            })(n)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nO((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let n = {};
                    return (
                      void 0 !== t.min && (n.min = t.min - e.min),
                      void 0 !== t.max && (n.max = t.max - e.min),
                      n
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: n } =
            this.getProps();
          if (!t || !ny(t)) return !1;
          let r = t.current;
          U(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, n) {
              let r = nW(e, n),
                { scroll: i } = t;
              return i && (nB(r.x, i.offset.x), nB(r.y, i.offset.y)), r;
            })(r, i.root, this.visualElement.getTransformPagePoint()),
            a = { x: nT((e = i.layout.layoutBox).x, o.x), y: nT(e.y, o.y) };
          if (n) {
            let e = n(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!e), e && (a = nM(e));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: a,
            } = this.getProps(),
            s = this.constraints || {};
          return Promise.all(
            nO((a) => {
              if (!nq(a, t, this.currentDirection)) return;
              let l = (s && s[a]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? e[a] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            })
          ).then(a);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (
            tZ(this.visualElement, e),
            n.start(t$(e, n, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          nO((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          nO((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[t] ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          nO((t) => {
            let { drag: n } = this.getProps();
            if (!nq(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: o } = r.layout.layoutBox[t];
              i.set(e[t] - tf(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!ny(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          nO((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let n = t.get();
              r[e] = (function (e, t) {
                let n = 0.5,
                  r = nv(e),
                  i = nv(t);
                return (
                  i > r
                    ? (n = td(t.min, t.max - r, e.min))
                    : r > i && (n = td(e.min, e.max - i, t.min)),
                  K(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            nO((t) => {
              if (!nq(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              n.set(tf(i, o, r[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nY.set(this.visualElement, this);
          let e = no(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              ny(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            C.Wi.read(t);
          let i = ni(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (nO((t) => {
                    let n = this.getAxisMotionValue(t);
                    n &&
                      ((this.originPoint[t] += e[t].translate),
                      n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), e(), r(), o && o();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: a = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
          };
        }
      }
      function nq(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      class nG extends t9 {
        constructor(e) {
          super(e),
            (this.removeGroupControls = P.Z),
            (this.removeListeners = P.Z),
            (this.controls = new nX(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || P.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let nK = (e) => (t, n) => {
        e && C.Wi.postRender(() => e(t, n));
      };
      class nJ extends t9 {
        constructor() {
          super(...arguments), (this.removePointerDownListener = P.Z);
        }
        onPointerDown(e) {
          this.session = new ns(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: n$(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: nK(e),
            onStart: nK(t),
            onMove: n,
            onEnd: (e, t) => {
              delete this.session, r && C.Wi.postRender(() => r(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = no(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var nZ = n(7437),
        nQ = n(2265);
      let n0 = (0, nQ.createContext)(null),
        n1 = (0, nQ.createContext)({}),
        n2 = (0, nQ.createContext)({}),
        n3 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function n5(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let n4 = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!er.test(e)) return e;
              e = parseFloat(e);
            }
            let n = n5(e, t.target.x),
              r = n5(e, t.target.y);
            return `${n}% ${r}%`;
          },
        },
        n6 = {},
        { schedule: n9, cancel: n8 } = (0, n(2981).Z)(queueMicrotask, !1);
      class n7 extends nQ.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = e;
          Object.assign(n6, rt),
            i &&
              (t.group && t.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (n3.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = i),
              r || e.layoutDependency !== t || void 0 === t
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    C.Wi.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            n9.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = e;
          r &&
            (r.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(r),
            n && n.deregister && n.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function re(e) {
        let [t, n] = (function () {
            let e = (0, nQ.useContext)(n0);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: n, register: r } = e,
              i = (0, nQ.useId)();
            (0, nQ.useEffect)(() => r(i), []);
            let o = (0, nQ.useCallback)(() => n && n(i), [i, n]);
            return !t && n ? [!1, o] : [!0];
          })(),
          r = (0, nQ.useContext)(n1);
        return (0, nZ.jsx)(n7, {
          ...e,
          layoutGroup: r,
          switchLayoutGroup: (0, nQ.useContext)(n2),
          isPresent: t,
          safeToRemove: n,
        });
      }
      let rt = {
        borderRadius: {
          ...n4,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: n4,
        borderTopRightRadius: n4,
        borderBottomLeftRadius: n4,
        borderBottomRightRadius: n4,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: n }) => {
            let r = eU.parse(e);
            if (r.length > 5) return e;
            let i = eU.createTransformer(e),
              o = "number" != typeof r[0] ? 1 : 0,
              a = n.x.scale * t.x,
              s = n.y.scale * t.y;
            (r[0 + o] /= a), (r[1 + o] /= s);
            let l = tf(a, s, 0.5);
            return (
              "number" == typeof r[2 + o] && (r[2 + o] /= l),
              "number" == typeof r[3 + o] && (r[3 + o] /= l),
              i(r)
            );
          },
        },
      };
      var rn = n(2428);
      let rr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ri = rr.length,
        ro = (e) => ("string" == typeof e ? parseFloat(e) : e),
        ra = (e) => "number" == typeof e || er.test(e);
      function rs(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let rl = rc(0, 0.5, F),
        ru = rc(0.5, 0.95, P.Z);
      function rc(e, t, n) {
        return (r) => (r < e ? 0 : r > t ? 1 : n(td(e, t, r)));
      }
      function rd(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function rf(e, t) {
        rd(e.x, t.x), rd(e.y, t.y);
      }
      function rh(e, t) {
        (e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin);
      }
      function rp(e, t, n, r, i) {
        return (
          (e -= t),
          (e = r + (1 / n) * (e - r)),
          void 0 !== i && (e = r + (1 / i) * (e - r)),
          e
        );
      }
      function rm(e, t, [n, r, i], o, a) {
        !(function (e, t = 0, n = 1, r = 0.5, i, o = e, a = e) {
          if (
            (en.test(t) &&
              ((t = parseFloat(t)), (t = tf(a.min, a.max, t / 100) - a.min)),
            "number" != typeof t)
          )
            return;
          let s = tf(o.min, o.max, r);
          e === o && (s -= t),
            (e.min = rp(e.min, t, n, s, i)),
            (e.max = rp(e.max, t, n, s, i));
        })(e, t[n], t[r], t[i], t.scale, o, a);
      }
      let rg = ["x", "scaleX", "originX"],
        ry = ["y", "scaleY", "originY"];
      function rv(e, t, n, r) {
        rm(e.x, t, rg, n ? n.x : void 0, r ? r.x : void 0),
          rm(e.y, t, ry, n ? n.y : void 0, r ? r.y : void 0);
      }
      function rb(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function rx(e) {
        return rb(e.x) && rb(e.y);
      }
      function rw(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function rk(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function rE(e, t) {
        return rk(e.x, t.x) && rk(e.y, t.y);
      }
      function rS(e) {
        return nv(e.x) / nv(e.y);
      }
      function rT(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      var rA = n(8746);
      class rC {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, rA.y4)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, rA.cl)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let n = this.members.findIndex((t) => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              t = n;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: r } = e.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            t.onExitComplete && t.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let rP = (e, t) => e.depth - t.depth;
      class r_ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, rA.y4)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, rA.cl)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(rP),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      function rI(e) {
        let t = tJ(e) ? e.get() : e;
        return tY(t) ? t.toValue() : t;
      }
      let rR = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        rO = "undefined" != typeof window && void 0 !== window.MotionDebug,
        rM = ["", "X", "Y", "Z"],
        rD = { visibility: "hidden" },
        rj = 0;
      function rL(e, t, n, r) {
        let { latestValues: i } = t;
        i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
      }
      function rN({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, n = null == t ? void 0 : t()) {
            (this.id = rj++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  rO &&
                    (rR.totalNodes =
                      rR.resolvedTargetDeltas =
                      rR.recalculatedProjection =
                        0),
                  this.nodes.forEach(rV),
                  this.nodes.forEach(rX),
                  this.nodes.forEach(rq),
                  this.nodes.forEach(rB),
                  rO && window.MotionDebug.record(rR);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new r_());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new rn.L()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: r, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (i || r) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let r = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, t) {
                    let n = e1.X.now(),
                      r = ({ timestamp: t }) => {
                        let i = t - n;
                        i >= 250 && ((0, C.Pn)(r), e(i - 250));
                      };
                    return C.Wi.read(r, !0), () => (0, C.Pn)(r);
                  })(r, 250)),
                  n3.hasAnimatedSinceResize &&
                    ((n3.hasAnimatedSinceResize = !1), this.nodes.forEach(rY));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                o &&
                (r || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        r0,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: s,
                      } = o.getProps(),
                      l = !this.targetLayout || !rE(this.targetLayout, r) || n,
                      u = !t && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...x(i, "layout"), onPlay: a, onComplete: s };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || rY(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, C.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rG),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return;
                  let { visualElement: n } = t.options;
                  if (!n) return;
                  let r = n.props[tK];
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: e, layoutId: n } = t.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      C.Wi,
                      !(e || n)
                    );
                  }
                  let { parent: i } = t;
                  i && !i.hasCheckedOptimisedAppear && e(i);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rH);
              return;
            }
            this.isUpdating || this.nodes.forEach(rW),
              (this.isUpdating = !1),
              this.nodes.forEach(r$),
              this.nodes.forEach(rF),
              this.nodes.forEach(rz),
              this.clearAllSnapshots();
            let e = e1.X.now();
            (C.frameData.delta = K(0, 1e3 / 60, e - C.frameData.timestamp)),
              (C.frameData.timestamp = e),
              (C.frameData.isProcessing = !0),
              C.yL.update.process(C.frameData),
              C.yL.preRender.process(C.frameData),
              C.yL.render.process(C.frameData),
              (C.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), n9.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rU), this.sharedNodes.forEach(rK);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              C.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            C.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = nR()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!i) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !rx(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              o = r !== this.prevTransformTemplateValue;
            e &&
              (t || nL(this.latestValues) || o) &&
              (i(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return (
              e && (r = this.removeTransform(r)),
              r3((t = r).x),
              r3(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return nR();
            let n = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(r4)
              )
            ) {
              let { scroll: e } = this.root;
              e && (nB(n.x, e.offset.x), nB(n.y, e.offset.y));
            }
            return n;
          }
          removeElementScroll(e) {
            var t;
            let n = nR();
            if (
              (rf(n, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return n;
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t],
                { scroll: i, options: o } = r;
              r !== this.root &&
                i &&
                o.layoutScroll &&
                (i.wasRoot && rf(n, e),
                nB(n.x, i.offset.x),
                nB(n.y, i.offset.y));
            }
            return n;
          }
          applyTransform(e, t = !1) {
            let n = nR();
            rf(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              !t &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                nH(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                nL(r.latestValues) && nH(n, r.latestValues);
            }
            return nL(this.latestValues) && nH(n, this.latestValues), n;
          }
          removeTransform(e) {
            let t = nR();
            rf(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !nL(n.latestValues)) continue;
              nj(n.latestValues) && n.updateSnapshot();
              let r = nR();
              rf(r, n.measurePageBox()),
                rv(
                  t,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  r
                );
            }
            return nL(this.latestValues) && rv(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                C.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, n, r, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let a = !!this.resumingFrom || this !== o;
            if (
              !(
                e ||
                (a && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: s, layoutId: l } = this.options;
            if (this.layout && (s || l)) {
              if (
                ((this.resolvedRelativeTargetAt = C.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = nR()),
                    (this.relativeTargetOrigin = nR()),
                    nE(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    rf(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = nR()), (this.targetWithTransforms = nR())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (r = this.relativeTarget),
                      (i = this.relativeParent.target),
                      nw(n.x, r.x, i.x),
                      nw(n.y, r.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rf(this.target, this.layout.layoutBox),
                      nV(this.target, this.targetDelta))
                    : rf(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = nR()),
                      (this.relativeTargetOrigin = nR()),
                      nE(this.relativeTargetOrigin, this.target, e.target),
                      rf(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rO && rR.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              nj(this.parent.latestValues) ||
              nN(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              n = !!this.resumingFrom || this !== t,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (r = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === C.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            rf(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
              s = this.treeScale.y;
            !(function (e, t, n, r = !1) {
              let i, o;
              let a = n.length;
              if (a) {
                t.x = t.y = 1;
                for (let s = 0; s < a; s++) {
                  o = (i = n[s]).projectionDelta;
                  let { visualElement: a } = i.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (r &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      nH(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), nV(e, o)),
                    r && nL(i.latestValues) && nH(e, i.latestValues));
                }
                t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = nR()));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (rh(this.prevProjectionDelta.x, this.projectionDelta.x),
                rh(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              nx(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === a &&
                this.treeScale.y === s &&
                rT(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                rT(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rO && rR.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = n_()),
              (this.projectionDelta = n_()),
              (this.projectionDeltaWithTransform = n_());
          }
          setAnimationOrigin(e, t = !1) {
            let n;
            let r = this.snapshot,
              i = r ? r.latestValues : {},
              o = { ...this.latestValues },
              a = n_();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let s = nR(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(rQ)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let r = t / 1e3;
                if (
                  (rJ(a.x, e.x, r),
                  rJ(a.y, e.y, r),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, f, h, p;
                  nE(
                    s,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (h = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    rZ(h.x, p.x, s.x, r),
                    rZ(h.y, p.y, s.y, r),
                    n &&
                      ((u = this.relativeTarget),
                      (f = n),
                      rw(u.x, f.x) && rw(u.y, f.y)) &&
                      (this.isProjectionDirty = !1),
                    n || (n = nR()),
                    rf(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (e, t, n, r, i, o) {
                    i
                      ? ((e.opacity = tf(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          rl(r)
                        )),
                        (e.opacityExit = tf(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          ru(r)
                        )))
                      : o &&
                        (e.opacity = tf(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          r
                        ));
                    for (let i = 0; i < ri; i++) {
                      let o = `border${rr[i]}Radius`,
                        a = rs(t, o),
                        s = rs(n, o);
                      (void 0 !== a || void 0 !== s) &&
                        (a || (a = 0),
                        s || (s = 0),
                        0 === a || 0 === s || ra(a) === ra(s)
                          ? ((e[o] = Math.max(tf(ro(a), ro(s), r), 0)),
                            (en.test(s) || en.test(a)) && (e[o] += "%"))
                          : (e[o] = s));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = tf(t.rotate || 0, n.rotate || 0, r));
                  })(o, i, this.latestValues, r, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, C.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = C.Wi.update(() => {
                (n3.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, n) {
                    let r = tJ(0) ? 0 : (0, tq.BX)(0);
                    return r.start(t$("", r, 1e3, n)), r.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: n,
                layout: r,
                latestValues: i,
              } = e;
            if (t && n && r) {
              if (
                this !== e &&
                this.layout &&
                r &&
                r5(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                n = this.target || nR();
                let t = nv(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                let r = nv(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
              }
              rf(t, n),
                nH(t, i),
                nx(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new rC()),
              this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: n } = e;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let r = {};
            n.z && rL("z", e, r, this.animationValues);
            for (let t = 0; t < rM.length; t++)
              rL(`rotate${rM[t]}`, e, r, this.animationValues),
                rL(`skew${rM[t]}`, e, r, this.animationValues);
            for (let t in (e.render(), r))
              e.setStaticValue(t, r[t]),
                this.animationValues && (this.animationValues[t] = r[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rD;
            let r = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  rI(null == e ? void 0 : e.pointerEvents) || ""),
                (r.transform = i ? i(this.latestValues, "") : "none"),
                r
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    rI(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !nL(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = (function (e, t, n) {
                let r = "",
                  i = e.x.translate / t.x,
                  o = e.y.translate / t.y,
                  a = (null == n ? void 0 : n.z) || 0;
                if (
                  ((i || o || a) &&
                    (r = `translate3d(${i}px, ${o}px, ${a}px) `),
                  (1 !== t.x || 1 !== t.y) &&
                    (r += `scale(${1 / t.x}, ${1 / t.y}) `),
                  n)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: i,
                    rotateY: o,
                    skewX: a,
                    skewY: s,
                  } = n;
                  e && (r = `perspective(${e}px) ${r}`),
                    t && (r += `rotate(${t}deg) `),
                    i && (r += `rotateX(${i}deg) `),
                    o && (r += `rotateY(${o}deg) `),
                    a && (r += `skewX(${a}deg) `),
                    s && (r += `skewY(${s}deg) `);
                }
                let s = e.x.scale * t.x,
                  l = e.y.scale * t.y;
                return (
                  (1 !== s || 1 !== l) && (r += `scale(${s}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, a)),
              i && (r.transform = i(a, r.transform));
            let { x: s, y: l } = this.projectionDelta;
            for (let e in ((r.transformOrigin = `${100 * s.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (r.opacity =
                  o === this
                    ? null !==
                        (n =
                          null !== (t = a.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (r.opacity =
                  o === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            n6)) {
              if (void 0 === a[e]) continue;
              let { correct: t, applyTo: n } = n6[e],
                i = "none" === r.transform ? a[e] : t(a[e], o);
              if (n) {
                let e = n.length;
                for (let t = 0; t < e; t++) r[n[t]] = i;
              } else r[e] = i;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  o === this
                    ? rI(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(rH),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rF(e) {
        e.updateLayout();
      }
      function rz(e) {
        var t;
        let n =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: r } = e.layout,
            { animationType: i } = e.options,
            o = n.source !== e.layout.source;
          "size" === i
            ? nO((e) => {
                let r = o ? n.measuredBox[e] : n.layoutBox[e],
                  i = nv(r);
                (r.min = t[e].min), (r.max = r.min + i);
              })
            : r5(i, n.layoutBox, t) &&
              nO((r) => {
                let i = o ? n.measuredBox[r] : n.layoutBox[r],
                  a = nv(t[r]);
                (i.max = i.min + a),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[r].max = e.relativeTarget[r].min + a));
              });
          let a = n_();
          nx(a, t, n.layoutBox);
          let s = n_();
          o
            ? nx(s, e.applyTransform(r, !0), n.measuredBox)
            : nx(s, t, n.layoutBox);
          let l = !rx(a),
            u = !1;
          if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: i, layout: o } = r;
              if (i && o) {
                let a = nR();
                nE(a, n.layoutBox, i.layoutBox);
                let s = nR();
                nE(s, t, o.layoutBox),
                  rE(a, s) || (u = !0),
                  r.options.layoutRoot &&
                    ((e.relativeTarget = s),
                    (e.relativeTargetOrigin = a),
                    (e.relativeParent = r));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function rV(e) {
        rO && rR.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function rB(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function rU(e) {
        e.clearSnapshot();
      }
      function rH(e) {
        e.clearMeasurements();
      }
      function rW(e) {
        e.isLayoutDirty = !1;
      }
      function r$(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function rY(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function rX(e) {
        e.resolveTargetDelta();
      }
      function rq(e) {
        e.calcProjection();
      }
      function rG(e) {
        e.resetSkewAndRotation();
      }
      function rK(e) {
        e.removeLeadSnapshot();
      }
      function rJ(e, t, n) {
        (e.translate = tf(t.translate, 0, n)),
          (e.scale = tf(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function rZ(e, t, n, r) {
        (e.min = tf(t.min, n.min, r)), (e.max = tf(t.max, n.max, r));
      }
      function rQ(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let r0 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        r1 = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        r2 = r1("applewebkit/") && !r1("chrome/") ? Math.round : P.Z;
      function r3(e) {
        (e.min = r2(e.min)), (e.max = r2(e.max));
      }
      function r5(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !(0.2 >= Math.abs(rS(t) - rS(n))))
        );
      }
      function r4(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let r6 = rN({
          attachResizeListener: (e, t) => ni(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        r9 = { current: void 0 },
        r8 = rN({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!r9.current) {
              let e = new r6({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (r9.current = e);
            }
            return r9.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function r7(e, t) {
        let n = t ? "onHoverStart" : "onHoverEnd";
        return no(
          e.current,
          t ? "pointerenter" : "pointerleave",
          (r, i) => {
            if ("touch" === r.pointerType || ng()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t);
            let a = o[n];
            a && C.Wi.postRender(() => a(r, i));
          },
          { passive: !e.getProps()[n] }
        );
      }
      class ie extends t9 {
        mount() {
          this.unmount = tc(r7(this.node, !0), r7(this.node, !1));
        }
        unmount() {}
      }
      class it extends t9 {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = tc(
            ni(this.node.current, "focus", () => this.onFocus()),
            ni(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let ir = (e, t) => !!t && (e === t || ir(e, t.parentElement));
      function ii(e, t) {
        if (!t) return;
        let n = new PointerEvent("pointer" + e);
        t(n, nn(n));
      }
      class io extends t9 {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = P.Z),
            (this.removeEndListeners = P.Z),
            (this.removeAccessibleListeners = P.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                r = no(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: n,
                        onTapCancel: r,
                        globalTapTarget: i,
                      } = this.node.getProps(),
                      o = i || ir(this.node.current, e.target) ? n : r;
                    o && C.Wi.update(() => o(e, t));
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                i = no(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = tc(r, i)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = ni(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ni(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          ii("up", (e, t) => {
                            let { onTap: n } = this.node.getProps();
                            n && C.Wi.postRender(() => n(e, t));
                          });
                      }
                    )),
                    ii("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = ni(this.node.current, "blur", () => {
                  this.isPressing &&
                    ii("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = tc(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && C.Wi.postRender(() => n(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !ng()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && C.Wi.postRender(() => n(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = no(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            n = ni(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = tc(t, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let ia = new WeakMap(),
        is = new WeakMap(),
        il = (e) => {
          let t = ia.get(e.target);
          t && t(e);
        },
        iu = (e) => {
          e.forEach(il);
        },
        ic = { some: 0, all: 1 };
      class id extends t9 {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = "some", once: i } = e,
            o = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof r ? r : ic[r],
            };
          return (function (e, t, n) {
            let r = (function ({ root: e, ...t }) {
              let n = e || document;
              is.has(n) || is.set(n, {});
              let r = is.get(n),
                i = JSON.stringify(t);
              return (
                r[i] ||
                  (r[i] = new IntersectionObserver(iu, { root: e, ...t })),
                r[i]
              );
            })(t);
            return (
              ia.set(e, n),
              r.observe(e),
              () => {
                ia.delete(e), r.unobserve(e);
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              o = t ? n : r;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var ih = n(9791);
      let ip = (0, nQ.createContext)({}),
        im = "undefined" != typeof window,
        ig = im ? nQ.useLayoutEffect : nQ.useEffect,
        iy = (0, nQ.createContext)({ strict: !1 });
      function iv(e) {
        return r(e.animate) || c.some((t) => a(e[t]));
      }
      function ib(e) {
        return !!(iv(e) || e.variants);
      }
      function ix(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let iw = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        ik = {};
      for (let e in iw) ik[e] = { isEnabled: (t) => iw[e].some((e) => !!t[e]) };
      let iE = Symbol.for("motionComponentSymbol"),
        iS = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function iT(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (iS.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      function iA(e, { style: t, vars: n }, r, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(r)),
        n))
          e.style.setProperty(o, n[o]);
      }
      let iC = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function iP(e, t, n, r) {
        for (let n in (iA(e, t, void 0, r), t.attrs))
          e.setAttribute(iC.has(n) ? n : tG(n), t.attrs[n]);
      }
      function i_(e, { layout: t, layoutId: n }) {
        return (
          f.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!n6[e] || "opacity" === e))
        );
      }
      function iI(e, t, n) {
        var r;
        let { style: i } = e,
          o = {};
        for (let a in i)
          (tJ(i[a]) ||
            (t.style && tJ(t.style[a])) ||
            i_(a, e) ||
            (null === (r = null == n ? void 0 : n.getValue(a)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (o[a] = i[a]);
        return o;
      }
      function iR(e, t, n) {
        let r = iI(e, t, n);
        for (let n in e)
          (tJ(e[n]) || tJ(t[n])) &&
            (r[
              -1 !== d.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return r;
      }
      var iO = n(458);
      let iM = (e) => (t, n) => {
          let i = (0, nQ.useContext)(ip),
            o = (0, nQ.useContext)(n0),
            a = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: n,
                },
                i,
                o,
                a
              ) {
                let l = {
                  latestValues: (function (e, t, n, i) {
                    let o = {},
                      a = i(e, {});
                    for (let e in a) o[e] = rI(a[e]);
                    let { initial: l, animate: u } = e,
                      c = iv(e),
                      d = ib(e);
                    t &&
                      d &&
                      !c &&
                      !1 !== e.inherit &&
                      (void 0 === l && (l = t.initial),
                      void 0 === u && (u = t.animate));
                    let f = !!n && !1 === n.initial,
                      h = (f = f || !1 === l) ? u : l;
                    if (h && "boolean" != typeof h && !r(h)) {
                      let t = Array.isArray(h) ? h : [h];
                      for (let n = 0; n < t.length; n++) {
                        let r = s(e, t[n]);
                        if (r) {
                          let { transitionEnd: e, transition: t, ...n } = r;
                          for (let e in n) {
                            let t = n[e];
                            if (Array.isArray(t)) {
                              let e = f ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (o[e] = t);
                          }
                          for (let t in e) o[t] = e[t];
                        }
                      }
                    }
                    return o;
                  })(i, o, a, e),
                  renderState: t(),
                };
                return n && (l.mount = (e) => n(i, e, l)), l;
              })(e, t, i, o);
          return n ? a() : (0, iO.h)(a);
        },
        iD = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        ij = () => ({ ...iD(), attrs: {} }),
        iL = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        iN = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        iF = d.length;
      function iz(e, t, n) {
        let { style: r, vars: i, transformOrigin: o } = e,
          a = !1,
          s = !1;
        for (let e in t) {
          let n = t[e];
          if (f.has(e)) {
            a = !0;
            continue;
          }
          if ($(e)) {
            i[e] = n;
            continue;
          }
          {
            let t = iL(n, eq[e]);
            e.startsWith("origin") ? ((s = !0), (o[e] = t)) : (r[e] = t);
          }
        }
        if (
          (!t.transform &&
            (a || n
              ? (r.transform = (function (e, t, n) {
                  let r = "",
                    i = !0;
                  for (let o = 0; o < iF; o++) {
                    let a = d[o],
                      s = e[a];
                    if (void 0 === s) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof s
                          ? s === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(s)) ||
                      n
                    ) {
                      let e = iL(s, eq[a]);
                      if (!l) {
                        i = !1;
                        let t = iN[a] || a;
                        r += `${t}(${e}) `;
                      }
                      n && (t[a] = e);
                    }
                  }
                  return (
                    (r = r.trim()),
                    n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
                    r
                  );
                })(t, e.transform, n))
              : r.transform && (r.transform = "none")),
          s)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = o;
          r.transformOrigin = `${e} ${t} ${n}`;
        }
      }
      function iV(e, t, n) {
        return "string" == typeof e ? e : er.transform(t + n * e);
      }
      let iB = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iU = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iH(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: r,
          originX: i,
          originY: o,
          pathLength: a,
          pathSpacing: s = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d
      ) {
        if ((iz(e, u, d), c)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: f, style: h, dimensions: p } = e;
        f.transform && (p && (h.transform = f.transform), delete f.transform),
          p &&
            (void 0 !== i || void 0 !== o || h.transform) &&
            (h.transformOrigin = (function (e, t, n) {
              let r = iV(t, e.x, e.width),
                i = iV(n, e.y, e.height);
              return `${r} ${i}`;
            })(p, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== n && (f.y = n),
          void 0 !== r && (f.scale = r),
          void 0 !== a &&
            (function (e, t, n = 1, r = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? iB : iU;
              e[o.offset] = er.transform(-r);
              let a = er.transform(t),
                s = er.transform(n);
              e[o.array] = `${a} ${s}`;
            })(f, a, s, l, !1);
      }
      let iW = (e) => "string" == typeof e && "svg" === e.toLowerCase(),
        i$ = {
          useVisualState: iM({
            scrapeMotionValuesFromProps: iR,
            createRenderState: ij,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              C.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                C.Wi.render(() => {
                  iH(n, r, iW(t.tagName), e.transformTemplate), iP(t, n);
                });
            },
          }),
        },
        iY = {
          useVisualState: iM({
            scrapeMotionValuesFromProps: iI,
            createRenderState: iD,
          }),
        };
      function iX(e, t, n) {
        for (let r in t) tJ(t[r]) || i_(r, n) || (e[r] = t[r]);
      }
      let iq = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function iG(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          iq.has(e)
        );
      }
      let iK = (e) => !iG(e);
      try {
        !(function (e) {
          e && (iK = (t) => (t.startsWith("on") ? !iG(t) : e(t)));
        })(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      let iJ = { current: null },
        iZ = { current: !1 },
        iQ = new WeakMap(),
        i0 = [...em, eM, eU],
        i1 = (e) => i0.find(ep(e)),
        i2 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class i3 {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            blockInitialAnimation: i,
            visualState: o,
          },
          a = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = ek),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = e1.X.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e),
                C.Wi.render(this.render, !1, !0));
            });
          let { latestValues: s, renderState: l } = o;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = t.initial ? { ...s } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = a),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = iv(t)),
            (this.isVariantNode = ib(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== s[e] && tJ(t) && t.set(s[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            iQ.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            iZ.current ||
              (function () {
                if (((iZ.current = !0), im)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (iJ.current = e.matches);
                    e.addListener(t), t();
                  } else iJ.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iJ.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (iQ.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, C.Pn)(this.notifyUpdate),
          (0, C.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let r = f.has(e),
            i = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && C.Wi.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = t.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              i(), o(), n && n(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in ik) {
            let t = ik[e];
            if (!t) continue;
            let { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] &&
                r &&
                n(this.props) &&
                (this.features[e] = new r(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : nR();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < i2.length; t++) {
            let n = i2[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (e, t, n) {
            for (let r in t) {
              let i = t[r],
                o = n[r];
              if (tJ(i)) e.addValue(r, i);
              else if (tJ(o)) e.addValue(r, (0, tq.BX)(i, { owner: e }));
              else if (o !== i) {
                if (e.hasValue(r)) {
                  let t = e.getValue(r);
                  !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
                } else {
                  let t = e.getStaticValue(r);
                  e.addValue(r, (0, tq.BX)(void 0 !== t ? t : i, { owner: e }));
                }
              }
            }
            for (let r in n) void 0 === t[r] && e.removeValue(r);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = (0, tq.BX)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          var n;
          let r =
            void 0 === this.latestValues[e] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != r &&
              ("string" == typeof r && (H(r) || V(r))
                ? (r = parseFloat(r))
                : !i1(r) && eU.test(t) && (r = eJ(e, t)),
              this.setBaseTarget(e, tJ(r) ? r.get() : r)),
            tJ(r) ? r.get() : r
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let n;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let i = s(
              this.props,
              r,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            i && (n = i[e]);
          }
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || tJ(i)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new rn.L()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class i5 extends i3 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eQ);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
      }
      class i4 extends i5 {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = iA);
        }
        readValueFromInstance(e, t) {
          if (f.has(t)) {
            let e = eK(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              r = ($(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return nW(e, t);
        }
        build(e, t, n) {
          iz(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return iI(e, t, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          tJ(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      class i6 extends i5 {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = nR);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (f.has(t)) {
            let e = eK(t);
            return (e && e.default) || 0;
          }
          return (t = iC.has(t) ? t : tG(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return iR(e, t, n);
        }
        build(e, t, n) {
          iH(e, t, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, n, r) {
          iP(e, t, n, r);
        }
        mount(e) {
          (this.isSVGTag = iW(e.tagName)), super.mount(e);
        }
      }
      let i9 = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (n, r) =>
            "create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
        });
      })(
        ((w = {
          animation: { Feature: t8 },
          exit: { Feature: ne },
          inView: { Feature: id },
          tap: { Feature: io },
          focus: { Feature: it },
          hover: { Feature: ie },
          pan: { Feature: nJ },
          drag: { Feature: nG, ProjectionNode: r8, MeasureLayout: re },
          layout: { ProjectionNode: r8, MeasureLayout: re },
        }),
        (k = (e, t) =>
          iT(e)
            ? new i6(t)
            : new i4(t, { allowProjection: e !== nQ.Fragment })),
        function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
          return (function (e) {
            let {
              preloadedFeatures: t,
              createVisualElement: n,
              useRender: r,
              useVisualState: i,
              Component: o,
            } = e;
            t &&
              (function (e) {
                for (let t in e) ik[t] = { ...ik[t], ...e[t] };
              })(t);
            let s = (0, nQ.forwardRef)(function (e, t) {
              var s;
              let l;
              let u = {
                  ...(0, nQ.useContext)(ih._),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      n = (0, nQ.useContext)(n1).id;
                    return n && void 0 !== t ? n + "-" + t : t;
                  })(e),
                },
                { isStatic: c } = u,
                d = (function (e) {
                  let { initial: t, animate: n } = (function (e, t) {
                    if (iv(e)) {
                      let { initial: t, animate: n } = e;
                      return {
                        initial: !1 === t || a(t) ? t : void 0,
                        animate: a(n) ? n : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, nQ.useContext)(ip));
                  return (0, nQ.useMemo)(
                    () => ({ initial: t, animate: n }),
                    [ix(t), ix(n)]
                  );
                })(e),
                f = i(e, c);
              if (!c && im) {
                (0, nQ.useContext)(iy).strict;
                let e = (function (e) {
                  let { drag: t, layout: n } = ik;
                  if (!t && !n) return {};
                  let r = { ...t, ...n };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == n ? void 0 : n.isEnabled(e))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(u);
                (l = e.MeasureLayout),
                  (d.visualElement = (function (e, t, n, r, i) {
                    var o, a;
                    let { visualElement: s } = (0, nQ.useContext)(ip),
                      l = (0, nQ.useContext)(iy),
                      u = (0, nQ.useContext)(n0),
                      c = (0, nQ.useContext)(ih._).reducedMotion,
                      d = (0, nQ.useRef)();
                    (r = r || l.renderer),
                      !d.current &&
                        r &&
                        (d.current = r(e, {
                          visualState: t,
                          parent: s,
                          props: n,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: c,
                        }));
                    let f = d.current,
                      h = (0, nQ.useContext)(n2);
                    f &&
                      !f.projection &&
                      i &&
                      ("html" === f.type || "svg" === f.type) &&
                      (function (e, t, n, r) {
                        let {
                          layoutId: i,
                          layout: o,
                          drag: a,
                          dragConstraints: s,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = t;
                        (e.projection = new n(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: i,
                            layout: o,
                            alwaysMeasureLayout: !!a || (s && ny(s)),
                            visualElement: e,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, n, i, h);
                    let p = (0, nQ.useRef)(!1);
                    (0, nQ.useInsertionEffect)(() => {
                      f && p.current && f.update(n, u);
                    });
                    let m = n[tK],
                      g = (0, nQ.useRef)(
                        !!m &&
                          !(null === (o = window.MotionHandoffIsComplete) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m)) &&
                          (null === (a = window.MotionHasOptimisedAnimation) ||
                          void 0 === a
                            ? void 0
                            : a.call(window, m))
                      );
                    return (
                      ig(() => {
                        f &&
                          ((p.current = !0),
                          (window.MotionIsMounted = !0),
                          f.updateFeatures(),
                          n9.render(f.render),
                          g.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, nQ.useEffect)(() => {
                        f &&
                          (!g.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, m);
                            }),
                            (g.current = !1)));
                      }),
                      f
                    );
                  })(o, f, u, n, e.ProjectionNode));
              }
              return (0, nZ.jsxs)(ip.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, nZ.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  r(
                    o,
                    e,
                    ((s = d.visualElement),
                    (0, nQ.useCallback)(
                      (e) => {
                        e && f.mount && f.mount(e),
                          s && (e ? s.mount(e) : s.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : ny(t) && (t.current = e));
                      },
                      [s]
                    )),
                    f,
                    c,
                    d.visualElement
                  ),
                ],
              });
            });
            return (s[iE] = o), s;
          })({
            ...(iT(e) ? i$ : iY),
            preloadedFeatures: w,
            useRender: (function (e = !1) {
              return (t, n, r, { latestValues: i }, o) => {
                let a = (
                    iT(t)
                      ? function (e, t, n, r) {
                          let i = (0, nQ.useMemo)(() => {
                            let n = ij();
                            return (
                              iH(n, t, iW(r), e.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            iX(t, e.style, e), (i.style = { ...t, ...i.style });
                          }
                          return i;
                        }
                      : function (e, t) {
                          let n = {},
                            r = (function (e, t) {
                              let n = e.style || {},
                                r = {};
                              return (
                                iX(r, n, e),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, nQ.useMemo)(() => {
                                      let n = iD();
                                      return (
                                        iz(n, t, e),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                r
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((n.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = r),
                            n
                          );
                        }
                  )(n, i, o, t),
                  s = (function (e, t, n) {
                    let r = {};
                    for (let i in e)
                      ("values" !== i || "object" != typeof e.values) &&
                        (iK(i) ||
                          (!0 === n && iG(i)) ||
                          (!t && !iG(i)) ||
                          (e.draggable && i.startsWith("onDrag"))) &&
                        (r[i] = e[i]);
                    return r;
                  })(n, "string" == typeof t, e),
                  l = t !== nQ.Fragment ? { ...s, ...a, ref: r } : {},
                  { children: u } = n,
                  c = (0, nQ.useMemo)(() => (tJ(u) ? u.get() : u), [u]);
                return (0, nQ.createElement)(t, { ...l, children: c });
              };
            })(t),
            createVisualElement: k,
            Component: e,
          });
        })
      );
    },
    565: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => r });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: (e, t, n) => {
      "use strict";
      function r(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function i(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      n.d(t, { cl: () => i, y4: () => r });
    },
    9276: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      let r = (e) => e;
    },
    2428: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => i });
      var r = n(8746);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, r.y4)(this.subscriptions, e),
            () => (0, r.cl)(this.subscriptions, e)
          );
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    458: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      var r = n(2265);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    3476: (e, t, n) => {
      "use strict";
      function r(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
      n.d(t, { R: () => r });
    },
    804: (e, t, n) => {
      "use strict";
      n.d(t, { BX: () => c });
      var r = n(2428),
        i = n(3476),
        o = n(9993),
        a = n(6219);
      let s = (e) => !isNaN(parseFloat(e)),
        l = { current: void 0 };
      class u {
        constructor(e, t = {}) {
          (this.version = "11.11.11"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let n = o.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = o.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = s(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new r.L());
          let n = this.events[e].add(t);
          return "change" === e
            ? () => {
                n(),
                  a.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = o.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(e, t) {
        return new u(e, t);
      }
    },
    2430: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => i });
      let r = {};
      function i(e, t) {
        let n = t || r;
        return o(
          e,
          "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
          "boolean" != typeof n.includeHtml || n.includeHtml
        );
      }
      function o(e, t, n) {
        if (e && "object" == typeof e) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return a(e.children, t, n);
        }
        return Array.isArray(e) ? a(e, t, n) : "";
      }
      function a(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = o(e[i], t, n);
        return r.join("");
      }
    },
    2462: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => o });
      var r = n(9406),
        i = n(9685);
      let o = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (0, i.xz)(t) ? (0, r.f)(e, o, "linePrefix")(t) : o(t);
          };
          function o(e) {
            return null === e || (0, i.Ch)(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
    },
    9406: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => i });
      var r = n(9685);
      function i(e, t, n, i) {
        let o = i ? i - 1 : Number.POSITIVE_INFINITY,
          a = 0;
        return function (i) {
          return (0, r.xz)(i)
            ? (e.enter(n),
              (function i(s) {
                return (0, r.xz)(s) && a++ < o
                  ? (e.consume(s), i)
                  : (e.exit(n), t(s));
              })(i))
            : t(i);
        };
      }
    },
    9685: (e, t, n) => {
      "use strict";
      n.d(t, {
        AF: () => l,
        Av: () => a,
        B8: () => p,
        Ch: () => c,
        H$: () => i,
        Xh: () => h,
        jv: () => r,
        n9: () => o,
        pY: () => s,
        sR: () => u,
        xz: () => f,
        z3: () => d,
      });
      let r = m(/[A-Za-z]/),
        i = m(/[\dA-Za-z]/),
        o = m(/[#-'*+\--9=?A-Z^-~]/);
      function a(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let s = m(/\d/),
        l = m(/[\dA-Fa-f]/),
        u = m(/[!-/:-@[-`{-~]/);
      function c(e) {
        return null !== e && e < -2;
      }
      function d(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function f(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let h = m(/\p{P}|\p{S}/u),
        p = m(/\s/);
      function m(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
    },
    8973: (e, t, n) => {
      "use strict";
      function r(e, t, n, r) {
        let i;
        let o = e.length,
          a = 0;
        if (
          ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)).unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); a < r.length; )
            (i = r.slice(a, a + 1e4)).unshift(t, 0),
              e.splice(...i),
              (a += 1e4),
              (t += 1e4);
      }
      function i(e, t) {
        return e.length > 0 ? (r(e, e.length, 0, t), e) : t;
      }
      n.d(t, { V: () => i, d: () => r });
    },
    658: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => i });
      var r = n(9685);
      function i(e) {
        return null === e || (0, r.z3)(e) || (0, r.B8)(e)
          ? 1
          : (0, r.Xh)(e)
          ? 2
          : void 0;
      }
    },
    4696: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => o });
      var r = n(8973);
      let i = {}.hasOwnProperty;
      function o(e) {
        let t = {},
          n = -1;
        for (; ++n < e.length; )
          !(function (e, t) {
            let n;
            for (n in t) {
              let o;
              let a = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                s = t[n];
              if (s)
                for (o in s) {
                  i.call(a, o) || (a[o] = []);
                  let e = s[o];
                  !(function (e, t) {
                    let n = -1,
                      i = [];
                    for (; ++n < t.length; )
                      ("after" === t[n].add ? e : i).push(t[n]);
                    (0, r.d)(e, 0, 0, i);
                  })(a[o], Array.isArray(e) ? e : e ? [e] : []);
                }
            }
          })(t, e[n]);
        return t;
      }
    },
    7833: (e, t, n) => {
      "use strict";
      function r(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      n.d(t, { d: () => r });
    },
    3374: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      n.d(t, { C: () => r });
    },
    6446: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => ng });
      var r = {};
      n.r(r),
        n.d(r, {
          boolean: () => y,
          booleanish: () => v,
          commaOrSpaceSeparated: () => E,
          commaSeparated: () => k,
          number: () => x,
          overloadedBoolean: () => b,
          spaceSeparated: () => w,
        });
      var i = {};
      n.r(i),
        n.d(i, {
          attentionMarkers: () => ty,
          contentInitial: () => td,
          disable: () => tv,
          document: () => tc,
          flow: () => th,
          flowInitial: () => tf,
          insideSpan: () => tg,
          string: () => tp,
          text: () => tm,
        });
      var o = n(8899);
      let a = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        s = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = {};
      function u(e, t) {
        return ((t || l).jsx ? s : a).test(e);
      }
      let c = /[ \t\n\f\r]/g;
      function d(e) {
        return "" === e.replace(c, "");
      }
      class f {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function h(e, t) {
        let n = {},
          r = {},
          i = -1;
        for (; ++i < e.length; )
          Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
        return new f(n, r, t);
      }
      function p(e) {
        return e.toLowerCase();
      }
      (f.prototype.property = {}),
        (f.prototype.normal = {}),
        (f.prototype.space = null);
      class m {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (m.prototype.space = null),
        (m.prototype.boolean = !1),
        (m.prototype.booleanish = !1),
        (m.prototype.overloadedBoolean = !1),
        (m.prototype.number = !1),
        (m.prototype.commaSeparated = !1),
        (m.prototype.spaceSeparated = !1),
        (m.prototype.commaOrSpaceSeparated = !1),
        (m.prototype.mustUseProperty = !1),
        (m.prototype.defined = !1);
      let g = 0,
        y = S(),
        v = S(),
        b = S(),
        x = S(),
        w = S(),
        k = S(),
        E = S();
      function S() {
        return 2 ** ++g;
      }
      let T = Object.keys(r);
      class A extends m {
        constructor(e, t, n, i) {
          let o = -1;
          if (
            (super(e, t),
            (function (e, t, n) {
              n && (e[t] = n);
            })(this, "space", i),
            "number" == typeof n)
          )
            for (; ++o < T.length; ) {
              let e = T[o];
              !(function (e, t, n) {
                n && (e[t] = n);
              })(this, T[o], (n & r[e]) === r[e]);
            }
        }
      }
      A.prototype.defined = !0;
      let C = {}.hasOwnProperty;
      function P(e) {
        let t;
        let n = {},
          r = {};
        for (t in e.properties)
          if (C.call(e.properties, t)) {
            let i = e.properties[t],
              o = new A(t, e.transform(e.attributes || {}, t), i, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (o.mustUseProperty = !0),
              (n[t] = o),
              (r[p(t)] = t),
              (r[p(o.attribute)] = t);
          }
        return new f(n, r, e.space);
      }
      let _ = P({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        I = P({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function R(e, t) {
        return t in e ? e[t] : t;
      }
      function O(e, t) {
        return R(e, t.toLowerCase());
      }
      let M = P({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: O,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        D = P({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: v,
            ariaAutoComplete: null,
            ariaBusy: v,
            ariaChecked: v,
            ariaColCount: x,
            ariaColIndex: x,
            ariaColSpan: x,
            ariaControls: w,
            ariaCurrent: null,
            ariaDescribedBy: w,
            ariaDetails: null,
            ariaDisabled: v,
            ariaDropEffect: w,
            ariaErrorMessage: null,
            ariaExpanded: v,
            ariaFlowTo: w,
            ariaGrabbed: v,
            ariaHasPopup: null,
            ariaHidden: v,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: w,
            ariaLevel: x,
            ariaLive: null,
            ariaModal: v,
            ariaMultiLine: v,
            ariaMultiSelectable: v,
            ariaOrientation: null,
            ariaOwns: w,
            ariaPlaceholder: null,
            ariaPosInSet: x,
            ariaPressed: v,
            ariaReadOnly: v,
            ariaRelevant: null,
            ariaRequired: v,
            ariaRoleDescription: w,
            ariaRowCount: x,
            ariaRowIndex: x,
            ariaRowSpan: x,
            ariaSelected: v,
            ariaSetSize: x,
            ariaSort: null,
            ariaValueMax: x,
            ariaValueMin: x,
            ariaValueNow: x,
            ariaValueText: null,
            role: null,
          },
        }),
        j = P({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: O,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: k,
            acceptCharset: w,
            accessKey: w,
            action: null,
            allow: null,
            allowFullScreen: y,
            allowPaymentRequest: y,
            allowUserMedia: y,
            alt: null,
            as: null,
            async: y,
            autoCapitalize: null,
            autoComplete: w,
            autoFocus: y,
            autoPlay: y,
            blocking: w,
            capture: null,
            charSet: null,
            checked: y,
            cite: null,
            className: w,
            cols: x,
            colSpan: null,
            content: null,
            contentEditable: v,
            controls: y,
            controlsList: w,
            coords: x | k,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: y,
            defer: y,
            dir: null,
            dirName: null,
            disabled: y,
            download: b,
            draggable: v,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: y,
            formTarget: null,
            headers: w,
            height: x,
            hidden: y,
            high: x,
            href: null,
            hrefLang: null,
            htmlFor: w,
            httpEquiv: w,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: y,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: y,
            itemId: null,
            itemProp: w,
            itemRef: w,
            itemScope: y,
            itemType: w,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: y,
            low: x,
            manifest: null,
            max: null,
            maxLength: x,
            media: null,
            method: null,
            min: null,
            minLength: x,
            multiple: y,
            muted: y,
            name: null,
            nonce: null,
            noModule: y,
            noValidate: y,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: y,
            optimum: x,
            pattern: null,
            ping: w,
            placeholder: null,
            playsInline: y,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: y,
            referrerPolicy: null,
            rel: w,
            required: y,
            reversed: y,
            rows: x,
            rowSpan: x,
            sandbox: w,
            scope: null,
            scoped: y,
            seamless: y,
            selected: y,
            shadowRootClonable: y,
            shadowRootDelegatesFocus: y,
            shadowRootMode: null,
            shape: null,
            size: x,
            sizes: null,
            slot: null,
            span: x,
            spellCheck: v,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: x,
            step: null,
            style: null,
            tabIndex: x,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: y,
            useMap: null,
            value: v,
            width: x,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: w,
            axis: null,
            background: null,
            bgColor: null,
            border: x,
            borderColor: null,
            bottomMargin: x,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: y,
            declare: y,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: x,
            leftMargin: x,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: x,
            marginWidth: x,
            noResize: y,
            noHref: y,
            noShade: y,
            noWrap: y,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: x,
            rules: null,
            scheme: null,
            scrolling: v,
            standby: null,
            summary: null,
            text: null,
            topMargin: x,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: x,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: y,
            disableRemotePlayback: y,
            prefix: null,
            property: null,
            results: x,
            security: null,
            unselectable: null,
          },
        }),
        L = P({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: R,
          properties: {
            about: E,
            accentHeight: x,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: x,
            amplitude: x,
            arabicForm: null,
            ascent: x,
            attributeName: null,
            attributeType: null,
            azimuth: x,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: x,
            by: null,
            calcMode: null,
            capHeight: x,
            className: w,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: x,
            diffuseConstant: x,
            direction: null,
            display: null,
            dur: null,
            divisor: x,
            dominantBaseline: null,
            download: y,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: x,
            enableBackground: null,
            end: null,
            event: null,
            exponent: x,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: x,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: k,
            g2: k,
            glyphName: k,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: x,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: x,
            horizOriginX: x,
            horizOriginY: x,
            id: null,
            ideographic: x,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: x,
            k: x,
            k1: x,
            k2: x,
            k3: x,
            k4: x,
            kernelMatrix: E,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: x,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: x,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: x,
            overlineThickness: x,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: x,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: w,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: x,
            pointsAtY: x,
            pointsAtZ: x,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: E,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: E,
            rev: E,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: E,
            requiredFeatures: E,
            requiredFonts: E,
            requiredFormats: E,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: x,
            specularExponent: x,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: x,
            strikethroughThickness: x,
            string: null,
            stroke: null,
            strokeDashArray: E,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: x,
            strokeOpacity: x,
            strokeWidth: null,
            style: null,
            surfaceScale: x,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: E,
            tabIndex: x,
            tableValues: null,
            target: null,
            targetX: x,
            targetY: x,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: E,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: x,
            underlineThickness: x,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: x,
            values: null,
            vAlphabetic: x,
            vMathematical: x,
            vectorEffect: null,
            vHanging: x,
            vIdeographic: x,
            version: null,
            vertAdvY: x,
            vertOriginX: x,
            vertOriginY: x,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: x,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        N = h([I, _, M, D, j], "html"),
        F = h([I, _, M, D, L], "svg"),
        z = /^data[-\w.:]+$/i,
        V = /-[a-z]/g,
        B = /[A-Z]/g;
      function U(e) {
        return "-" + e.toLowerCase();
      }
      function H(e) {
        return e.charAt(1).toUpperCase();
      }
      let W = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var $ = n(7564);
      let Y = $.default || $,
        X = G("end"),
        q = G("start");
      function G(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function K(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? Z(e.position)
            : "start" in e || "end" in e
            ? Z(e)
            : "line" in e || "column" in e
            ? J(e)
            : ""
          : "";
      }
      function J(e) {
        return Q(e && e.line) + ":" + Q(e && e.column);
      }
      function Z(e) {
        return J(e && e.start) + "-" + J(e && e.end);
      }
      function Q(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class ee extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let r = "",
            i = {},
            o = !1;
          if (
            (t &&
              (i =
                "line" in t && "column" in t
                  ? { place: t }
                  : "start" in t && "end" in t
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          let a = i.place && "start" in i.place ? i.place.start : i.place;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = a ? a.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = a ? a.line : void 0),
            (this.name = K(i.place) || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              o && i.cause && "string" == typeof i.cause.stack
                ? i.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (ee.prototype.file = ""),
        (ee.prototype.name = ""),
        (ee.prototype.reason = ""),
        (ee.prototype.message = ""),
        (ee.prototype.stack = ""),
        (ee.prototype.column = void 0),
        (ee.prototype.line = void 0),
        (ee.prototype.ancestors = void 0),
        (ee.prototype.cause = void 0),
        (ee.prototype.fatal = void 0),
        (ee.prototype.place = void 0),
        (ee.prototype.ruleId = void 0),
        (ee.prototype.source = void 0);
      let et = {}.hasOwnProperty,
        en = new Map(),
        er = /[A-Z]/g,
        ei = /-([a-z])/g,
        eo = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        ea = new Set(["td", "th"]),
        es = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function el(e, t, n) {
        return "element" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                i = r;
              "svg" === t.tagName.toLowerCase() &&
                "html" === r.space &&
                ((i = F), (e.schema = i)),
                e.ancestors.push(t);
              let o = ef(e, t.tagName, !1),
                a = (function (e, t) {
                  let n, r;
                  let i = {};
                  for (r in t.properties)
                    if ("children" !== r && et.call(t.properties, r)) {
                      let o = (function (e, t, n) {
                        let r = (function (e, t) {
                          let n = p(t),
                            r = t,
                            i = m;
                          if (n in e.normal) return e.property[e.normal[n]];
                          if (
                            n.length > 4 &&
                            "data" === n.slice(0, 4) &&
                            z.test(t)
                          ) {
                            if ("-" === t.charAt(4)) {
                              let e = t.slice(5).replace(V, H);
                              r =
                                "data" + e.charAt(0).toUpperCase() + e.slice(1);
                            } else {
                              let e = t.slice(4);
                              if (!V.test(e)) {
                                let n = e.replace(B, U);
                                "-" !== n.charAt(0) && (n = "-" + n),
                                  (t = "data" + n);
                              }
                            }
                            i = A;
                          }
                          return new i(r, t);
                        })(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = r.commaSeparated
                                ? (function (e, t) {
                                    let n = {};
                                    return (
                                      "" === e[e.length - 1] ? [...e, ""] : e
                                    )
                                      .join(
                                        (n.padRight ? " " : "") +
                                          "," +
                                          (!1 === n.padLeft ? "" : " ")
                                      )
                                      .trim();
                                  })(n)
                                : n.join(" ").trim()),
                            "style" === r.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    let n = {};
                                    try {
                                      Y(t, function (e, t) {
                                        let r = e;
                                        "--" !== r.slice(0, 2) &&
                                          ("-ms-" === r.slice(0, 4) &&
                                            (r = "ms-" + r.slice(4)),
                                          (r = r.replace(ei, ep))),
                                          (n[r] = t);
                                      });
                                    } catch (t) {
                                      if (!e.ignoreInvalidStyle) {
                                        let n = new ee(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: t,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          }
                                        );
                                        throw (
                                          ((n.file = e.filePath || void 0),
                                          (n.url =
                                            es +
                                            "#cannot-parse-style-attribute"),
                                          n)
                                        );
                                      }
                                    }
                                    return n;
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t;
                                  let n = {};
                                  for (t in e)
                                    et.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(er, em);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && r.space
                              ? W[r.property] || r.property
                              : r.attribute,
                            n,
                          ];
                        }
                      })(e, r, t.properties[r]);
                      if (o) {
                        let [r, a] = o;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof a &&
                        ea.has(t.tagName)
                          ? (n = a)
                          : (i[r] = a);
                      }
                    }
                  return (
                    n &&
                      ((i.style || (i.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = n),
                    i
                  );
                })(e, t),
                s = ed(e, t);
              return (
                eo.has(t.tagName) &&
                  (s = s.filter(function (e) {
                    return (
                      "string" != typeof e ||
                      !("object" == typeof e
                        ? "text" === e.type && d(e.value)
                        : d(e))
                    );
                  })),
                eu(e, a, o, t),
                ec(a, s),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, o, a, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater) {
                let n = t.data.estree.body[0];
                return (
                  (0, o.ok)("ExpressionStatement" === n.type),
                  e.evaluater.evaluateExpression(n.expression)
                );
              }
              eh(e, t.position);
            })(e, t)
          : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                i = r;
              "svg" === t.name &&
                "html" === r.space &&
                ((i = F), (e.schema = i)),
                e.ancestors.push(t);
              let a = null === t.name ? e.Fragment : ef(e, t.name, !0),
                s = (function (e, t) {
                  let n = {};
                  for (let r of t.attributes)
                    if ("mdxJsxExpressionAttribute" === r.type) {
                      if (r.data && r.data.estree && e.evaluater) {
                        let t = r.data.estree.body[0];
                        (0, o.ok)("ExpressionStatement" === t.type);
                        let i = t.expression;
                        (0, o.ok)("ObjectExpression" === i.type);
                        let a = i.properties[0];
                        (0, o.ok)("SpreadElement" === a.type),
                          Object.assign(
                            n,
                            e.evaluater.evaluateExpression(a.argument)
                          );
                      } else eh(e, t.position);
                    } else {
                      let i;
                      let a = r.name;
                      if (r.value && "object" == typeof r.value) {
                        if (
                          r.value.data &&
                          r.value.data.estree &&
                          e.evaluater
                        ) {
                          let t = r.value.data.estree.body[0];
                          (0, o.ok)("ExpressionStatement" === t.type),
                            (i = e.evaluater.evaluateExpression(t.expression));
                        } else eh(e, t.position);
                      } else i = null === r.value || r.value;
                      n[a] = i;
                    }
                  return n;
                })(e, t),
                l = ed(e, t);
              return (
                eu(e, s, a, t),
                ec(s, l),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, a, s, n)
              );
            })(e, t, n)
          : "mdxjsEsm" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(t.data.estree);
              eh(e, t.position);
            })(e, t)
          : "root" === t.type
          ? (function (e, t, n) {
              let r = {};
              return ec(r, ed(e, t)), e.create(t, e.Fragment, r, n);
            })(e, t, n)
          : "text" === t.type
          ? t.value
          : void 0;
      }
      function eu(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function ec(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function ed(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : en;
        for (; ++r < t.children.length; ) {
          let o;
          let a = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === a.type
                ? a.tagName
                : "mdxJsxFlowElement" === a.type ||
                  "mdxJsxTextElement" === a.type
                ? a.name
                : void 0;
            if (e) {
              let t = i.get(e) || 0;
              (o = e + "-" + t), i.set(e, t + 1);
            }
          }
          let s = el(e, a, o);
          void 0 !== s && n.push(s);
        }
        return n;
      }
      function ef(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."),
              i = -1;
            for (; ++i < n.length; ) {
              let t = u(n[i])
                ? { type: "Identifier", name: n[i] }
                : { type: "Literal", value: n[i] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(i && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            (0, o.ok)(e, "always a result"), (r = e);
          } else
            r =
              u(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        } else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return et.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        eh(e);
      }
      function eh(e, t) {
        let n = new ee("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: t,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = es + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function ep(e, t) {
        return t.toUpperCase();
      }
      function em(e) {
        return "-" + e.toLowerCase();
      }
      let eg = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var ey = n(7437),
        ev = n(2430),
        eb = n(8973);
      class ex {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - n + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - n + this.left.length)
                    .reverse()
                );
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(
            this.right.length - (t || 0),
            Number.POSITIVE_INFINITY
          );
          return n && ew(this.left, n), r.reverse();
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
        }
        push(e) {
          this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), ew(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), ew(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          ) {
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              ew(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY
              );
              ew(this.left, t.reverse());
            }
          }
        }
      }
      function ew(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function ek(e) {
        let t, n, r, i, o, a, s;
        let l = {},
          u = -1,
          c = new ex(e);
        for (; ++u < c.length; ) {
          for (; u in l; ) u = l[u];
          if (
            ((t = c.get(u)),
            u &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === c.get(u - 1)[1].type &&
              ((r = 0) < (a = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === a[r][1].type &&
                (r += 2),
              r < a.length && "content" === a[r][1].type))
          )
            for (; ++r < a.length && "content" !== a[r][1].type; )
              "chunkText" === a[r][1].type &&
                ((a[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                l,
                (function (e, t) {
                  let n, r;
                  let i = e.get(t)[1],
                    o = e.get(t)[2],
                    a = t - 1,
                    s = [],
                    l = i._tokenizer || o.parser[i.contentType](i.start),
                    u = l.events,
                    c = [],
                    d = {},
                    f = -1,
                    h = i,
                    p = 0,
                    m = 0,
                    g = [0];
                  for (; h; ) {
                    for (; e.get(++a)[1] !== h; );
                    s.push(a),
                      !h._tokenizer &&
                        ((n = o.sliceStream(h)),
                        h.next || n.push(null),
                        r && l.defineSkip(h.start),
                        h._isInFirstContentOfListItem &&
                          (l._gfmTasklistFirstContentOfListItem = !0),
                        l.write(n),
                        h._isInFirstContentOfListItem &&
                          (l._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = h),
                      (h = h.next);
                  }
                  for (h = i; ++f < u.length; )
                    "exit" === u[f][0] &&
                      "enter" === u[f - 1][0] &&
                      u[f][1].type === u[f - 1][1].type &&
                      u[f][1].start.line !== u[f][1].end.line &&
                      ((m = f + 1),
                      g.push(m),
                      (h._tokenizer = void 0),
                      (h.previous = void 0),
                      (h = h.next));
                  for (
                    l.events = [],
                      h
                        ? ((h._tokenizer = void 0), (h.previous = void 0))
                        : g.pop(),
                      f = g.length;
                    f--;

                  ) {
                    let t = u.slice(g[f], g[f + 1]),
                      n = s.pop();
                    c.push([n, n + t.length - 1]), e.splice(n, 2, t);
                  }
                  for (c.reverse(), f = -1; ++f < c.length; )
                    (d[p + c[f][0]] = p + c[f][1]),
                      (p += c[f][1] - c[f][0] - 1);
                  return d;
                })(c, u)
              ),
              (u = l[u]),
              (s = !0));
          else if (t[1]._container) {
            for (r = u, n = void 0; r--; )
              if (
                "lineEnding" === (i = c.get(r))[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (c.get(n)[1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else break;
            n &&
              ((t[1].end = Object.assign({}, c.get(n)[1].start)),
              (o = c.slice(n, u)).unshift(t),
              c.splice(n, u - n + 1, o));
          }
        }
        return (0, eb.d)(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s;
      }
      var eE = n(4696),
        eS = n(9406),
        eT = n(9685);
      let eA = {
          tokenize: function (e) {
            let t;
            let n = e.attempt(
              this.parser.constructs.contentInitial,
              function (t) {
                if (null === t) {
                  e.consume(t);
                  return;
                }
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  (0, eS.f)(e, n, "linePrefix")
                );
              },
              function (n) {
                return (
                  e.enter("paragraph"),
                  (function n(r) {
                    let i = e.enter("chunkText", {
                      contentType: "text",
                      previous: t,
                    });
                    return (
                      t && (t.next = i),
                      (t = i),
                      (function t(r) {
                        if (null === r) {
                          e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(r);
                          return;
                        }
                        return (0, eT.Ch)(r)
                          ? (e.consume(r), e.exit("chunkText"), n)
                          : (e.consume(r), t);
                      })(r)
                    );
                  })(n)
                );
              }
            );
            return n;
          },
        },
        eC = {
          tokenize: function (e) {
            let t, n, r;
            let i = this,
              o = [],
              a = 0;
            return s;
            function s(t) {
              if (a < o.length) {
                let n = o[a];
                return (
                  (i.containerState = n[1]),
                  e.attempt(n[0].continuation, l, u)(t)
                );
              }
              return u(t);
            }
            function l(e) {
              if ((a++, i.containerState._closeFlow)) {
                let n;
                (i.containerState._closeFlow = void 0), t && y();
                let r = i.events.length,
                  o = r;
                for (; o--; )
                  if (
                    "exit" === i.events[o][0] &&
                    "chunkFlow" === i.events[o][1].type
                  ) {
                    n = i.events[o][1].end;
                    break;
                  }
                g(a);
                let s = r;
                for (; s < i.events.length; )
                  (i.events[s][1].end = Object.assign({}, n)), s++;
                return (
                  (0, eb.d)(i.events, o + 1, 0, i.events.slice(r)),
                  (i.events.length = s),
                  u(e)
                );
              }
              return s(e);
            }
            function u(n) {
              if (a === o.length) {
                if (!t) return f(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return p(n);
                i.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (i.containerState = {}), e.check(eP, c, d)(n);
            }
            function c(e) {
              return t && y(), g(a), f(e);
            }
            function d(e) {
              return (
                (i.parser.lazy[i.now().line] = a !== o.length),
                (r = i.now().offset),
                p(e)
              );
            }
            function f(t) {
              return (i.containerState = {}), e.attempt(eP, h, p)(t);
            }
            function h(e) {
              return a++, o.push([i.currentConstruct, i.containerState]), f(e);
            }
            function p(r) {
              if (null === r) {
                t && y(), g(0), e.consume(r);
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter("chunkFlow", {
                  contentType: "flow",
                  previous: n,
                  _tokenizer: t,
                }),
                (function t(n) {
                  if (null === n) {
                    m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                    return;
                  }
                  return (0, eT.Ch)(n)
                    ? (e.consume(n),
                      m(e.exit("chunkFlow")),
                      (a = 0),
                      (i.interrupt = void 0),
                      s)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function m(e, o) {
              let s = i.sliceStream(e);
              if (
                (o && s.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(s),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  o = t.events.length;
                for (; o--; )
                  if (
                    t.events[o][1].start.offset < r &&
                    (!t.events[o][1].end || t.events[o][1].end.offset > r)
                  )
                    return;
                let s = i.events.length,
                  l = s;
                for (; l--; )
                  if (
                    "exit" === i.events[l][0] &&
                    "chunkFlow" === i.events[l][1].type
                  ) {
                    if (e) {
                      n = i.events[l][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (g(a), o = s; o < i.events.length; )
                  (i.events[o][1].end = Object.assign({}, n)), o++;
                (0, eb.d)(i.events, l + 1, 0, i.events.slice(s)),
                  (i.events.length = o);
              }
            }
            function g(t) {
              let n = o.length;
              for (; n-- > t; ) {
                let t = o[n];
                (i.containerState = t[1]), t[0].exit.call(i, e);
              }
              o.length = t;
            }
            function y() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0);
            }
          },
        },
        eP = {
          tokenize: function (e, t, n) {
            return (0, eS.f)(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      var e_ = n(2462);
      let eI = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : (0, eT.Ch)(t)
                ? e.check(eR, o, i)(t)
                : (e.consume(t), r);
            }
            function i(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function o(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
          resolve: function (e) {
            return ek(e), e;
          },
        },
        eR = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, eS.f)(e, i, "linePrefix")
              );
            };
            function i(i) {
              if (null === i || (0, eT.Ch)(i)) return n(i);
              let o = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
          partial: !0,
        },
        eO = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                e_.w,
                function (r) {
                  if (null === r) {
                    e.consume(r);
                    return;
                  }
                  return (
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n
                  );
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  (0, eS.f)(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt(eI, r)),
                    "linePrefix"
                  )
                )
              );
            return n;
            function r(r) {
              if (null === r) {
                e.consume(r);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            }
          },
        },
        eM = { resolveAll: eN() },
        eD = eL("string"),
        ej = eL("text");
      function eL(e) {
        return {
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, o, a);
            return o;
            function o(e) {
              return l(e) ? i(e) : a(e);
            }
            function a(e) {
              if (null === e) {
                t.consume(e);
                return;
              }
              return t.enter("data"), t.consume(e), s;
            }
            function s(e) {
              return l(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
            }
            function l(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: eN("text" === e ? eF : void 0),
        };
      }
      function eN(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function eF(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r;
            let i = e[n - 1][1],
              o = t.sliceStream(i),
              a = o.length,
              s = -1,
              l = 0;
            for (; a--; ) {
              let e = o[a];
              if ("string" == typeof e) {
                for (s = e.length; 32 === e.charCodeAt(s - 1); ) l++, s--;
                if (s) break;
                s = -1;
              } else if (-2 === e) (r = !0), l++;
              else if (-1 === e);
              else {
                a++;
                break;
              }
            }
            if (l) {
              let o = {
                type:
                  n === e.length || r || l < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: i.end.line,
                  column: i.end.column - l,
                  offset: i.end.offset - l,
                  _index: i.start._index + a,
                  _bufferIndex: a ? s : i.start._bufferIndex + s,
                },
                end: Object.assign({}, i.end),
              };
              (i.end = Object.assign({}, o.start)),
                i.start.offset === i.end.offset
                  ? Object.assign(i, o)
                  : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      var ez = n(3374);
      let eV = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (o) {
              return (
                e.enter("thematicBreak"),
                (r = o),
                (function o(a) {
                  return a === r
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), i++, t)
                          : (e.exit("thematicBreakSequence"),
                            (0, eT.xz)(n)
                              ? (0, eS.f)(e, o, "whitespace")(n)
                              : o(n));
                      })(a))
                    : i >= 3 && (null === a || (0, eT.Ch)(a))
                    ? (e.exit("thematicBreak"), t(a))
                    : n(a);
                })(o)
              );
            };
          },
        },
        eB = {
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              o =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              a = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : (0, eT.pY)(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(eV, n, s)(t) : s(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(i) {
                      return (0, eT.pY)(i) && ++a < 10
                        ? (e.consume(i), t)
                        : (!r.interrupt || a < 2) &&
                          (r.containerState.marker
                            ? i === r.containerState.marker
                            : 41 === i || 46 === i)
                        ? (e.exit("listItemValue"), s(i))
                        : n(i);
                    })(t)
                  );
              }
              return n(t);
            };
            function s(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(e_.w, r.interrupt ? n : l, e.attempt(eU, c, u))
              );
            }
            function l(e) {
              return (r.containerState.initialBlankLine = !0), o++, c(e);
            }
            function u(t) {
              return (0, eT.xz)(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  c)
                : n(t);
            }
            function c(n) {
              return (
                (r.containerState.size =
                  o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  e_.w,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      (0, eS.f)(
                        e,
                        t,
                        "listItemIndent",
                        r.containerState.size + 1
                      )(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !(0, eT.xz)(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(eH, t, i)(n));
                  }
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  (0, eS.f)(
                    e,
                    e.attempt(eB, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        eU = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, eS.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !(0, eT.xz)(e) &&
                  i &&
                  "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        eH = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, eS.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        },
        eW = {
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  i
                );
              }
              return n(t);
            };
            function i(n) {
              return (0, eT.xz)(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (0, eT.xz)(t)
                  ? (0, eS.f)(
                      e,
                      i,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : i(t);
              };
              function i(r) {
                return e.attempt(eW, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
        };
      function e$(e, t, n, r, i, o, a, s, l) {
        let u = l || Number.POSITIVE_INFINITY,
          c = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), d)
            : null === t || 32 === t || 41 === t || (0, eT.Av)(t)
            ? n(t)
            : (e.enter(r),
              e.enter(a),
              e.enter(s),
              e.enter("chunkString", { contentType: "string" }),
              p(t));
        };
        function d(n) {
          return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
            : (e.enter(s),
              e.enter("chunkString", { contentType: "string" }),
              f(n));
        }
        function f(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(s), d(t))
            : null === t || 60 === t || (0, eT.Ch)(t)
            ? n(t)
            : (e.consume(t), 92 === t ? h : f);
        }
        function h(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), f) : f(t);
        }
        function p(i) {
          return !c && (null === i || 41 === i || (0, eT.z3)(i))
            ? (e.exit("chunkString"), e.exit(s), e.exit(a), e.exit(r), t(i))
            : c < u && 40 === i
            ? (e.consume(i), c++, p)
            : 41 === i
            ? (e.consume(i), c--, p)
            : null === i || 32 === i || 40 === i || (0, eT.Av)(i)
            ? n(i)
            : (e.consume(i), 92 === i ? m : p);
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
      }
      function eY(e, t, n, r, i, o) {
        let a;
        let s = this,
          l = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), u;
        };
        function u(d) {
          return l > 999 ||
            null === d ||
            91 === d ||
            (93 === d && !a) ||
            (94 === d && !l && "_hiddenFootnoteSupport" in s.parser.constructs)
            ? n(d)
            : 93 === d
            ? (e.exit(o), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
            : (0, eT.Ch)(d)
            ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u)
            : (e.enter("chunkString", { contentType: "string" }), c(d));
        }
        function c(t) {
          return null === t ||
            91 === t ||
            93 === t ||
            (0, eT.Ch)(t) ||
            l++ > 999
            ? (e.exit("chunkString"), u(t))
            : (e.consume(t), a || (a = !(0, eT.xz)(t)), 92 === t ? d : c);
        }
        function d(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, c)
            : c(t);
        }
      }
      function eX(e, t, n, r, i, o) {
        let a;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (a = 40 === t ? 41 : t),
              s)
            : n(t);
        };
        function s(n) {
          return n === a
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(o), l(n));
        }
        function l(t) {
          return t === a
            ? (e.exit(o), s(a))
            : null === t
            ? n(t)
            : (0, eT.Ch)(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              (0, eS.f)(e, l, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), u(t));
        }
        function u(t) {
          return t === a || null === t || (0, eT.Ch)(t)
            ? (e.exit("chunkString"), l(t))
            : (e.consume(t), 92 === t ? c : u);
        }
        function c(t) {
          return t === a || 92 === t ? (e.consume(t), u) : u(t);
        }
      }
      function eq(e, t) {
        let n;
        return function r(i) {
          return (0, eT.Ch)(i)
            ? (e.enter("lineEnding"),
              e.consume(i),
              e.exit("lineEnding"),
              (n = !0),
              r)
            : (0, eT.xz)(i)
            ? (0, eS.f)(e, r, n ? "linePrefix" : "lineSuffix")(i)
            : t(i);
        };
      }
      var eG = n(7833);
      let eK = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (0, eT.z3)(t) ? eq(e, r)(t) : n(t);
            };
            function r(t) {
              return eX(
                e,
                i,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function i(t) {
              return (0, eT.xz)(t) ? (0, eS.f)(e, o, "whitespace")(t) : o(t);
            }
            function o(e) {
              return null === e || (0, eT.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        eJ = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("codeIndented"), (0, eS.f)(e, i, "linePrefix", 5)(t)
              );
            };
            function i(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? o(n)
                      : (0, eT.Ch)(n)
                      ? e.attempt(eZ, t, o)(n)
                      : (e.enter("codeFlowValue"),
                        (function n(r) {
                          return null === r || (0, eT.Ch)(r)
                            ? (e.exit("codeFlowValue"), t(r))
                            : (e.consume(r), n);
                        })(n));
                  })(t)
                : n(t);
            }
            function o(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        eZ = {
          tokenize: function (e, t, n) {
            let r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : (0, eT.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : (0, eS.f)(e, o, "linePrefix", 5)(t);
            }
            function o(e) {
              let o = r.events[r.events.length - 1];
              return o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(e)
                : (0, eT.Ch)(e)
                ? i(e)
                : n(e);
            }
          },
          partial: !0,
        },
        eQ = {
          name: "setextUnderline",
          tokenize: function (e, t, n) {
            let r;
            let i = this;
            return function (t) {
              let a,
                s = i.events.length;
              for (; s--; )
                if (
                  "lineEnding" !== i.events[s][1].type &&
                  "linePrefix" !== i.events[s][1].type &&
                  "content" !== i.events[s][1].type
                ) {
                  a = "paragraph" === i.events[s][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || a)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        (0, eT.xz)(n)
                          ? (0, eS.f)(e, o, "lineSuffix")(n)
                          : o(n));
                  })(t))
                : n(t);
            };
            function o(r) {
              return null === r || (0, eT.Ch)(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o = e.length;
            for (; o--; )
              if ("enter" === e[o][0]) {
                if ("content" === e[o][1].type) {
                  n = o;
                  break;
                }
                "paragraph" === e[o][1].type && (r = o);
              } else
                "content" === e[o][1].type && e.splice(o, 1),
                  i || "definition" !== e[o][1].type || (i = o);
            let a = {
              type: "setextHeading",
              start: Object.assign({}, e[r][1].start),
              end: Object.assign({}, e[e.length - 1][1].end),
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", a, t]),
                  e.splice(i + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[i][1].end)))
                : (e[n][1] = a),
              e.push(["exit", a, t]),
              e
            );
          },
        },
        e0 = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        e1 = ["pre", "script", "style", "textarea"],
        e2 = {
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(e_.w, t, n)
              );
            };
          },
          partial: !0,
        },
        e3 = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (0, eT.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        e5 = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        e4 = {
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r;
            let i = this,
              o = {
                tokenize: function (e, t, n) {
                  let o = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      a
                    );
                  };
                  function a(t) {
                    return (
                      e.enter("codeFencedFence"),
                      (0, eT.xz)(t)
                        ? (0, eS.f)(
                            e,
                            l,
                            "linePrefix",
                            i.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : l(t)
                    );
                  }
                  function l(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(i) {
                          return i === r
                            ? (o++, e.consume(i), t)
                            : o >= s
                            ? (e.exit("codeFencedFenceSequence"),
                              (0, eT.xz)(i)
                                ? (0, eS.f)(e, u, "whitespace")(i)
                                : u(i))
                            : n(i);
                        })(t))
                      : n(t);
                  }
                  function u(r) {
                    return null === r || (0, eT.Ch)(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
                partial: !0,
              },
              a = 0,
              s = 0;
            return function (t) {
              return (function (t) {
                let o = i.events[i.events.length - 1];
                return (
                  (a =
                    o && "linePrefix" === o[1].type
                      ? o[2].sliceSerialize(o[1], !0).length
                      : 0),
                  (r = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  (function t(i) {
                    return i === r
                      ? (s++, e.consume(i), t)
                      : s < 3
                      ? n(i)
                      : (e.exit("codeFencedFenceSequence"),
                        (0, eT.xz)(i)
                          ? (0, eS.f)(e, l, "whitespace")(i)
                          : l(i));
                  })(t)
                );
              })(t);
            };
            function l(o) {
              return null === o || (0, eT.Ch)(o)
                ? (e.exit("codeFencedFence"),
                  i.interrupt ? t(o) : e.check(e5, c, p)(o))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || (0, eT.Ch)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        l(i))
                      : (0, eT.xz)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        (0, eS.f)(e, u, "whitespace")(i))
                      : 96 === i && i === r
                      ? n(i)
                      : (e.consume(i), t);
                  })(o));
            }
            function u(t) {
              return null === t || (0, eT.Ch)(t)
                ? l(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || (0, eT.Ch)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        l(i))
                      : 96 === i && i === r
                      ? n(i)
                      : (e.consume(i), t);
                  })(t));
            }
            function c(t) {
              return e.attempt(o, p, d)(t);
            }
            function d(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f
              );
            }
            function f(t) {
              return a > 0 && (0, eT.xz)(t)
                ? (0, eS.f)(e, h, "linePrefix", a + 1)(t)
                : h(t);
            }
            function h(t) {
              return null === t || (0, eT.Ch)(t)
                ? e.check(e5, c, p)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || (0, eT.Ch)(n)
                      ? (e.exit("codeFlowValue"), h(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function p(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
          concrete: !0,
        },
        e6 = document.createElement("i");
      function e9(e) {
        let t = "&" + e + ";";
        e6.innerHTML = t;
        let n = e6.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
      let e8 = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r, i;
            let o = this,
              a = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                s
              );
            };
            function s(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  l)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (i = eT.H$),
                  u(t));
            }
            function l(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (i = eT.AF),
                  u)
                : (e.enter("characterReferenceValue"),
                  (r = 7),
                  (i = eT.pY),
                  u(t));
            }
            function u(s) {
              if (59 === s && a) {
                let r = e.exit("characterReferenceValue");
                return i !== eT.H$ || e9(o.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(s),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(s);
              }
              return i(s) && a++ < r ? (e.consume(s), u) : n(s);
            }
          },
        },
        e7 = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
              );
            };
            function r(r) {
              return (0, eT.sR)(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        te = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                (0, eS.f)(e, t, "linePrefix")
              );
            };
          },
        },
        tt = {
          name: "labelEnd",
          tokenize: function (e, t, n) {
            let r, i;
            let o = this,
              a = o.events.length;
            for (; a--; )
              if (
                ("labelImage" === o.events[a][1].type ||
                  "labelLink" === o.events[a][1].type) &&
                !o.events[a][1]._balanced
              ) {
                r = o.events[a][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? c(t)
                  : ((i = o.parser.defined.includes(
                      (0, eG.d)(
                        o.sliceSerialize({ start: r.end, end: o.now() })
                      )
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    s)
                : n(t);
            };
            function s(t) {
              return 40 === t
                ? e.attempt(tn, u, i ? u : c)(t)
                : 91 === t
                ? e.attempt(tr, u, i ? l : c)(t)
                : i
                ? u(t)
                : c(t);
            }
            function l(t) {
              return e.attempt(ti, u, c)(t);
            }
            function u(e) {
              return t(e);
            }
            function c(e) {
              return (r._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o,
              a = e.length,
              s = 0;
            for (; a--; )
              if (((n = e[a][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[a][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[a][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = a), "labelLink" !== n.type)
                ) {
                  s = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = a);
            let l = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              u = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[i][1].end),
              },
              c = {
                type: "labelText",
                start: Object.assign({}, e[r + s + 2][1].end),
                end: Object.assign({}, e[i - 2][1].start),
              };
            return (
              (o = [
                ["enter", l, t],
                ["enter", u, t],
              ]),
              (o = (0, eb.V)(o, e.slice(r + 1, r + s + 3))),
              (o = (0, eb.V)(o, [["enter", c, t]])),
              (o = (0, eb.V)(
                o,
                (0, ez.C)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + s + 4, i - 3),
                  t
                )
              )),
              (o = (0, eb.V)(o, [
                ["exit", c, t],
                e[i - 2],
                e[i - 1],
                ["exit", u, t],
              ])),
              (o = (0, eb.V)(o, e.slice(i + 1))),
              (o = (0, eb.V)(o, [["exit", l, t]])),
              (0, eb.d)(e, r, e.length, o),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              let n = e[t][1];
              ("labelImage" === n.type ||
                "labelLink" === n.type ||
                "labelEnd" === n.type) &&
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            }
            return e;
          },
        },
        tn = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return (0, eT.z3)(t) ? eq(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? u(t)
                : e$(
                    e,
                    o,
                    a,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function o(t) {
              return (0, eT.z3)(t) ? eq(e, s)(t) : u(t);
            }
            function a(e) {
              return n(e);
            }
            function s(t) {
              return 34 === t || 39 === t || 40 === t
                ? eX(
                    e,
                    l,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : u(t);
            }
            function l(t) {
              return (0, eT.z3)(t) ? eq(e, u)(t) : u(t);
            }
            function u(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        tr = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return eY.call(
                r,
                e,
                i,
                o,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                (0, eG.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function o(e) {
              return n(e);
            }
          },
        },
        ti = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        to = {
          name: "labelStartImage",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                i
              );
            };
            function i(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  o)
                : n(t);
            }
            function o(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: tt.resolveAll,
        };
      var ta = n(658);
      let ts = {
        name: "attention",
        tokenize: function (e, t) {
          let n;
          let r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            o = (0, ta.r)(i);
          return function (a) {
            return (
              (n = a),
              e.enter("attentionSequence"),
              (function a(s) {
                if (s === n) return e.consume(s), a;
                let l = e.exit("attentionSequence"),
                  u = (0, ta.r)(s),
                  c = !u || (2 === u && o) || r.includes(s),
                  d = !o || (2 === o && u) || r.includes(i);
                return (
                  (l._open = !!(42 === n ? c : c && (o || !d))),
                  (l._close = !!(42 === n ? d : d && (u || !c))),
                  t(s)
                );
              })(a)
            );
          };
        },
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = -1;
          for (; ++c < e.length; )
            if (
              "enter" === e[c][0] &&
              "attentionSequence" === e[c][1].type &&
              e[c][1]._close
            ) {
              for (n = c; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  s =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  let d = Object.assign({}, e[n][1].end),
                    f = Object.assign({}, e[c][1].start);
                  tl(d, -s),
                    tl(f, s),
                    (o = {
                      type: s > 1 ? "strongSequence" : "emphasisSequence",
                      start: d,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (a = {
                      type: s > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[c][1].start),
                      end: f,
                    }),
                    (i = {
                      type: s > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[c][1].start),
                    }),
                    (r = {
                      type: s > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, o.start),
                      end: Object.assign({}, a.end),
                    }),
                    (e[n][1].end = Object.assign({}, o.start)),
                    (e[c][1].start = Object.assign({}, a.end)),
                    (l = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (l = (0, eb.V)(l, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (l = (0, eb.V)(l, [
                      ["enter", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["enter", i, t],
                    ])),
                    (l = (0, eb.V)(
                      l,
                      (0, ez.C)(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, c),
                        t
                      )
                    )),
                    (l = (0, eb.V)(l, [
                      ["exit", i, t],
                      ["enter", a, t],
                      ["exit", a, t],
                      ["exit", r, t],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((u = 2),
                        (l = (0, eb.V)(l, [
                          ["enter", e[c][1], t],
                          ["exit", e[c][1], t],
                        ])))
                      : (u = 0),
                    (0, eb.d)(e, n - 1, c - n + 3, l),
                    (c = n + l.length - u - 2);
                  break;
                }
            }
          for (c = -1; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e;
        },
      };
      function tl(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let tu = {
          name: "labelStartLink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                i
              );
            };
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: tt.resolveAll,
        },
        tc = {
          42: eB,
          43: eB,
          45: eB,
          48: eB,
          49: eB,
          50: eB,
          51: eB,
          52: eB,
          53: eB,
          54: eB,
          55: eB,
          56: eB,
          57: eB,
          62: eW,
        },
        td = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r;
              let i = this;
              return function (t) {
                return (
                  e.enter("definition"),
                  eY.call(
                    i,
                    e,
                    o,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(t)
                );
              };
              function o(t) {
                return ((r = (0, eG.d)(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    a)
                  : n(t);
              }
              function a(t) {
                return (0, eT.z3)(t) ? eq(e, s)(t) : s(t);
              }
              function s(t) {
                return e$(
                  e,
                  l,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function l(t) {
                return e.attempt(eK, u, u)(t);
              }
              function u(t) {
                return (0, eT.xz)(t) ? (0, eS.f)(e, c, "whitespace")(t) : c(t);
              }
              function c(o) {
                return null === o || (0, eT.Ch)(o)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(o))
                  : n(o);
              }
            },
          },
        },
        tf = { [-2]: eJ, [-1]: eJ, 32: eJ },
        th = {
          35: {
            name: "headingAtx",
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                return (
                  e.enter("atxHeading"),
                  e.enter("atxHeadingSequence"),
                  (function i(o) {
                    return 35 === o && r++ < 6
                      ? (e.consume(o), i)
                      : null === o || (0, eT.z3)(o)
                      ? (e.exit("atxHeadingSequence"),
                        (function n(r) {
                          return 35 === r
                            ? (e.enter("atxHeadingSequence"),
                              (function t(r) {
                                return 35 === r
                                  ? (e.consume(r), t)
                                  : (e.exit("atxHeadingSequence"), n(r));
                              })(r))
                            : null === r || (0, eT.Ch)(r)
                            ? (e.exit("atxHeading"), t(r))
                            : (0, eT.xz)(r)
                            ? (0, eS.f)(e, n, "whitespace")(r)
                            : (e.enter("atxHeadingText"),
                              (function t(r) {
                                return null === r || 35 === r || (0, eT.z3)(r)
                                  ? (e.exit("atxHeadingText"), n(r))
                                  : (e.consume(r), t);
                              })(r));
                        })(o))
                      : n(o);
                  })(i)
                );
              };
            },
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                o = 3;
              return (
                "whitespace" === e[3][1].type && (o += 2),
                i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (o === i - 1 ||
                    (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                  (i -= o + 1 === i ? 2 : 4),
                i > o &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  (0, eb.d)(e, o, i - o + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
          },
          42: eV,
          45: [eQ, eV],
          60: {
            name: "htmlFlow",
            tokenize: function (e, t, n) {
              let r, i, o, a, s;
              let l = this;
              return function (t) {
                return (
                  e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), u
                );
              };
              function u(a) {
                return 33 === a
                  ? (e.consume(a), c)
                  : 47 === a
                  ? (e.consume(a), (i = !0), h)
                  : 63 === a
                  ? (e.consume(a), (r = 3), l.interrupt ? t : O)
                  : (0, eT.jv)(a)
                  ? (e.consume(a), (o = String.fromCharCode(a)), p)
                  : n(a);
              }
              function c(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), d)
                  : 91 === i
                  ? (e.consume(i), (r = 5), (a = 0), f)
                  : (0, eT.jv)(i)
                  ? (e.consume(i), (r = 4), l.interrupt ? t : O)
                  : n(i);
              }
              function d(r) {
                return 45 === r ? (e.consume(r), l.interrupt ? t : O) : n(r);
              }
              function f(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(a++)
                  ? (e.consume(r), a === i.length)
                    ? l.interrupt
                      ? t
                      : S
                    : f
                  : n(r);
              }
              function h(t) {
                return (0, eT.jv)(t)
                  ? (e.consume(t), (o = String.fromCharCode(t)), p)
                  : n(t);
              }
              function p(a) {
                if (null === a || 47 === a || 62 === a || (0, eT.z3)(a)) {
                  let s = 47 === a,
                    u = o.toLowerCase();
                  return !s && !i && e1.includes(u)
                    ? ((r = 1), l.interrupt ? t(a) : S(a))
                    : e0.includes(o.toLowerCase())
                    ? ((r = 6), s)
                      ? (e.consume(a), m)
                      : l.interrupt
                      ? t(a)
                      : S(a)
                    : ((r = 7),
                      l.interrupt && !l.parser.lazy[l.now().line]
                        ? n(a)
                        : i
                        ? (function t(n) {
                            return (0, eT.xz)(n) ? (e.consume(n), t) : k(n);
                          })(a)
                        : g(a));
                }
                return 45 === a || (0, eT.H$)(a)
                  ? (e.consume(a), (o += String.fromCharCode(a)), p)
                  : n(a);
              }
              function m(r) {
                return 62 === r ? (e.consume(r), l.interrupt ? t : S) : n(r);
              }
              function g(t) {
                return 47 === t
                  ? (e.consume(t), k)
                  : 58 === t || 95 === t || (0, eT.jv)(t)
                  ? (e.consume(t), y)
                  : (0, eT.xz)(t)
                  ? (e.consume(t), g)
                  : k(t);
              }
              function y(t) {
                return 45 === t ||
                  46 === t ||
                  58 === t ||
                  95 === t ||
                  (0, eT.H$)(t)
                  ? (e.consume(t), y)
                  : v(t);
              }
              function v(t) {
                return 61 === t
                  ? (e.consume(t), b)
                  : (0, eT.xz)(t)
                  ? (e.consume(t), v)
                  : g(t);
              }
              function b(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (s = t), x)
                  : (0, eT.xz)(t)
                  ? (e.consume(t), b)
                  : (function t(n) {
                      return null === n ||
                        34 === n ||
                        39 === n ||
                        47 === n ||
                        60 === n ||
                        61 === n ||
                        62 === n ||
                        96 === n ||
                        (0, eT.z3)(n)
                        ? v(n)
                        : (e.consume(n), t);
                    })(t);
              }
              function x(t) {
                return t === s
                  ? (e.consume(t), (s = null), w)
                  : null === t || (0, eT.Ch)(t)
                  ? n(t)
                  : (e.consume(t), x);
              }
              function w(e) {
                return 47 === e || 62 === e || (0, eT.xz)(e) ? g(e) : n(e);
              }
              function k(t) {
                return 62 === t ? (e.consume(t), E) : n(t);
              }
              function E(t) {
                return null === t || (0, eT.Ch)(t)
                  ? S(t)
                  : (0, eT.xz)(t)
                  ? (e.consume(t), E)
                  : n(t);
              }
              function S(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), P)
                  : 60 === t && 1 === r
                  ? (e.consume(t), _)
                  : 62 === t && 4 === r
                  ? (e.consume(t), M)
                  : 63 === t && 3 === r
                  ? (e.consume(t), O)
                  : 93 === t && 5 === r
                  ? (e.consume(t), R)
                  : (0, eT.Ch)(t) && (6 === r || 7 === r)
                  ? (e.exit("htmlFlowData"), e.check(e2, D, T)(t))
                  : null === t || (0, eT.Ch)(t)
                  ? (e.exit("htmlFlowData"), T(t))
                  : (e.consume(t), S);
              }
              function T(t) {
                return e.check(e3, A, D)(t);
              }
              function A(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), C
                );
              }
              function C(t) {
                return null === t || (0, eT.Ch)(t)
                  ? T(t)
                  : (e.enter("htmlFlowData"), S(t));
              }
              function P(t) {
                return 45 === t ? (e.consume(t), O) : S(t);
              }
              function _(t) {
                return 47 === t ? (e.consume(t), (o = ""), I) : S(t);
              }
              function I(t) {
                if (62 === t) {
                  let n = o.toLowerCase();
                  return e1.includes(n) ? (e.consume(t), M) : S(t);
                }
                return (0, eT.jv)(t) && o.length < 8
                  ? (e.consume(t), (o += String.fromCharCode(t)), I)
                  : S(t);
              }
              function R(t) {
                return 93 === t ? (e.consume(t), O) : S(t);
              }
              function O(t) {
                return 62 === t
                  ? (e.consume(t), M)
                  : 45 === t && 2 === r
                  ? (e.consume(t), O)
                  : S(t);
              }
              function M(t) {
                return null === t || (0, eT.Ch)(t)
                  ? (e.exit("htmlFlowData"), D(t))
                  : (e.consume(t), M);
              }
              function D(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            concrete: !0,
          },
          61: eQ,
          95: eV,
          96: e4,
          126: e4,
        },
        tp = { 38: e8, 92: e7 },
        tm = {
          [-5]: te,
          [-4]: te,
          [-3]: te,
          33: to,
          38: e8,
          42: ts,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                  );
                };
                function i(t) {
                  return (0, eT.jv)(t)
                    ? (e.consume(t), o)
                    : 64 === t
                    ? n(t)
                    : s(t);
                }
                function o(t) {
                  return 43 === t || 45 === t || 46 === t || (0, eT.H$)(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), a)
                          : (43 === n ||
                              45 === n ||
                              46 === n ||
                              (0, eT.H$)(n)) &&
                            r++ < 32
                          ? (e.consume(n), t)
                          : ((r = 0), s(n));
                      })(t))
                    : s(t);
                }
                function a(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || (0, eT.Av)(r)
                    ? n(r)
                    : (e.consume(r), a);
                }
                function s(t) {
                  return 64 === t
                    ? (e.consume(t), l)
                    : (0, eT.n9)(t)
                    ? (e.consume(t), s)
                    : n(t);
                }
                function l(i) {
                  return (0, eT.H$)(i)
                    ? (function i(o) {
                        return 46 === o
                          ? (e.consume(o), (r = 0), l)
                          : 62 === o
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(o),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function t(o) {
                              if ((45 === o || (0, eT.H$)(o)) && r++ < 63) {
                                let n = 45 === o ? t : i;
                                return e.consume(o), n;
                              }
                              return n(o);
                            })(o);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r, i, o;
                let a = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    s
                  );
                };
                function s(t) {
                  return 33 === t
                    ? (e.consume(t), l)
                    : 47 === t
                    ? (e.consume(t), x)
                    : 63 === t
                    ? (e.consume(t), v)
                    : (0, eT.jv)(t)
                    ? (e.consume(t), k)
                    : n(t);
                }
                function l(t) {
                  return 45 === t
                    ? (e.consume(t), u)
                    : 91 === t
                    ? (e.consume(t), (i = 0), h)
                    : (0, eT.jv)(t)
                    ? (e.consume(t), y)
                    : n(t);
                }
                function u(t) {
                  return 45 === t ? (e.consume(t), f) : n(t);
                }
                function c(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), d)
                    : (0, eT.Ch)(t)
                    ? ((o = c), I(t))
                    : (e.consume(t), c);
                }
                function d(t) {
                  return 45 === t ? (e.consume(t), f) : c(t);
                }
                function f(e) {
                  return 62 === e ? _(e) : 45 === e ? d(e) : c(e);
                }
                function h(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? p : h)
                    : n(t);
                }
                function p(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), m)
                    : (0, eT.Ch)(t)
                    ? ((o = p), I(t))
                    : (e.consume(t), p);
                }
                function m(t) {
                  return 93 === t ? (e.consume(t), g) : p(t);
                }
                function g(t) {
                  return 62 === t ? _(t) : 93 === t ? (e.consume(t), g) : p(t);
                }
                function y(t) {
                  return null === t || 62 === t
                    ? _(t)
                    : (0, eT.Ch)(t)
                    ? ((o = y), I(t))
                    : (e.consume(t), y);
                }
                function v(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), b)
                    : (0, eT.Ch)(t)
                    ? ((o = v), I(t))
                    : (e.consume(t), v);
                }
                function b(e) {
                  return 62 === e ? _(e) : v(e);
                }
                function x(t) {
                  return (0, eT.jv)(t) ? (e.consume(t), w) : n(t);
                }
                function w(t) {
                  return 45 === t || (0, eT.H$)(t)
                    ? (e.consume(t), w)
                    : (function t(n) {
                        return (0, eT.Ch)(n)
                          ? ((o = t), I(n))
                          : (0, eT.xz)(n)
                          ? (e.consume(n), t)
                          : _(n);
                      })(t);
                }
                function k(t) {
                  return 45 === t || (0, eT.H$)(t)
                    ? (e.consume(t), k)
                    : 47 === t || 62 === t || (0, eT.z3)(t)
                    ? E(t)
                    : n(t);
                }
                function E(t) {
                  return 47 === t
                    ? (e.consume(t), _)
                    : 58 === t || 95 === t || (0, eT.jv)(t)
                    ? (e.consume(t), S)
                    : (0, eT.Ch)(t)
                    ? ((o = E), I(t))
                    : (0, eT.xz)(t)
                    ? (e.consume(t), E)
                    : _(t);
                }
                function S(t) {
                  return 45 === t ||
                    46 === t ||
                    58 === t ||
                    95 === t ||
                    (0, eT.H$)(t)
                    ? (e.consume(t), S)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), T)
                          : (0, eT.Ch)(n)
                          ? ((o = t), I(n))
                          : (0, eT.xz)(n)
                          ? (e.consume(n), t)
                          : E(n);
                      })(t);
                }
                function T(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (r = t), A)
                    : (0, eT.Ch)(t)
                    ? ((o = T), I(t))
                    : (0, eT.xz)(t)
                    ? (e.consume(t), T)
                    : (e.consume(t), C);
                }
                function A(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), P)
                    : null === t
                    ? n(t)
                    : (0, eT.Ch)(t)
                    ? ((o = A), I(t))
                    : (e.consume(t), A);
                }
                function C(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || (0, eT.z3)(t)
                    ? E(t)
                    : (e.consume(t), C);
                }
                function P(e) {
                  return 47 === e || 62 === e || (0, eT.z3)(e) ? E(e) : n(e);
                }
                function _(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function I(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    R
                  );
                }
                function R(t) {
                  return (0, eT.xz)(t)
                    ? (0, eS.f)(
                        e,
                        O,
                        "linePrefix",
                        a.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : O(t);
                }
                function O(t) {
                  return e.enter("htmlTextData"), o(t);
                }
              },
            },
          ],
          91: tu,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), r;
                };
                function r(r) {
                  return (0, eT.Ch)(r)
                    ? (e.exit("hardBreakEscape"), t(r))
                    : n(r);
                }
              },
            },
            e7,
          ],
          93: tt,
          95: ts,
          96: {
            name: "codeText",
            tokenize: function (e, t, n) {
              let r,
                i,
                o = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), o++, t)
                      : (e.exit("codeTextSequence"), a(n));
                  })(t)
                );
              };
              function a(l) {
                return null === l
                  ? n(l)
                  : 32 === l
                  ? (e.enter("space"), e.consume(l), e.exit("space"), a)
                  : 96 === l
                  ? ((i = e.enter("codeTextSequence")),
                    (r = 0),
                    (function n(a) {
                      return 96 === a
                        ? (e.consume(a), r++, n)
                        : r === o
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(a))
                        : ((i.type = "codeTextData"), s(a));
                    })(l))
                  : (0, eT.Ch)(l)
                  ? (e.enter("lineEnding"),
                    e.consume(l),
                    e.exit("lineEnding"),
                    a)
                  : (e.enter("codeTextData"), s(l));
              }
              function s(t) {
                return null === t || 32 === t || 96 === t || (0, eT.Ch)(t)
                  ? (e.exit("codeTextData"), a(t))
                  : (e.consume(t), s);
              }
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        tg = { null: [ts, eM] },
        ty = { null: [42, 95] },
        tv = { null: [] },
        tb = /[\0\t\n\r]/g;
      function tx(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let tw =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function tk(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return tx(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return e9(n) || e;
      }
      let tE = {}.hasOwnProperty;
      function tS(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function tT(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              K({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              K({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            K({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function tA(e) {
        let t = this;
        t.parser = function (n) {
          var r, o;
          let a, s, l, u;
          return (
            "string" !=
              typeof (r = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((o = r), (r = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: r(y),
                  autolinkProtocol: u,
                  autolinkEmail: u,
                  atxHeading: r(p),
                  blockQuote: r(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: u,
                  characterReference: u,
                  codeFenced: r(h),
                  codeFencedFenceInfo: i,
                  codeFencedFenceMeta: i,
                  codeIndented: r(h, i),
                  codeText: r(function () {
                    return { type: "inlineCode", value: "" };
                  }, i),
                  codeTextData: u,
                  data: u,
                  codeFlowValue: u,
                  definition: r(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: i,
                  definitionLabelString: i,
                  definitionTitleString: i,
                  emphasis: r(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: r(m),
                  hardBreakTrailing: r(m),
                  htmlFlow: r(g, i),
                  htmlFlowData: u,
                  htmlText: r(g, i),
                  htmlTextData: u,
                  image: r(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: i,
                  link: r(y),
                  listItem: r(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(v, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(v),
                  paragraph: r(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: i,
                  resourceDestinationString: i,
                  resourceTitleString: i,
                  setextHeading: r(p),
                  strong: r(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: a(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      let n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: a(),
                  autolinkEmail: function (e) {
                    c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: a(),
                  characterEscapeValue: c,
                  characterReferenceMarkerHexadecimal: f,
                  characterReferenceMarkerNumeric: f,
                  characterReferenceValue: function (e) {
                    let t;
                    let n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = tx(
                          n,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (t = e9(n));
                    let i = this.stack[this.stack.length - 1];
                    i.value += t;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = tS(e.end);
                  },
                  codeFenced: a(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      ""
                    )),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: c,
                  codeIndented: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      ""
                    );
                  }),
                  codeText: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: c,
                  data: c,
                  definition: a(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, eG.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: a(),
                  hardBreakEscape: a(d),
                  hardBreakTrailing: a(d),
                  htmlFlow: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: c,
                  htmlText: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: c,
                  image: a(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    if (((this.data.inReference = !0), "link" === n.type)) {
                      let t = e.children;
                      n.children = t;
                    } else n.alt = t;
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = t.replace(tw, tk)),
                      (n.identifier = (0, eG.d)(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      (n.children[n.children.length - 1].position.end = tS(
                        e.end
                      )),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (u.call(this, e), c.call(this, e));
                  },
                  link: a(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: a(),
                  listOrdered: a(),
                  listUnordered: a(),
                  paragraph: a(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, eG.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: a(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: a(),
                  thematicBreak: a(),
                },
              };
              (function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let i = n[r];
                  Array.isArray(i)
                    ? e(t, i)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (tE.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, i);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  a = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: o,
                    exit: s,
                    buffer: i,
                    resume: l,
                    data: n,
                  },
                  u = [],
                  c = -1;
                for (; ++c < e.length; )
                  ("listOrdered" === e[c][1].type ||
                    "listUnordered" === e[c][1].type) &&
                    ("enter" === e[c][0]
                      ? u.push(c)
                      : (c = (function (e, t, n) {
                          let r,
                            i,
                            o,
                            a,
                            s = t - 1,
                            l = -1,
                            u = !1;
                          for (; ++s <= n; ) {
                            let t = e[s];
                            switch (t[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                "enter" === t[0] ? l++ : l--, (a = void 0);
                                break;
                              case "lineEndingBlank":
                                "enter" === t[0] &&
                                  (!r || a || l || o || (o = s), (a = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                a = void 0;
                            }
                            if (
                              (!l &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                              (-1 === l &&
                                "exit" === t[0] &&
                                ("listUnordered" === t[1].type ||
                                  "listOrdered" === t[1].type))
                            ) {
                              if (r) {
                                let a = s;
                                for (i = void 0; a--; ) {
                                  let t = e[a];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    i &&
                                      ((e[i][1].type = "lineEndingBlank"),
                                      (u = !0)),
                                      (t[1].type = "lineEnding"),
                                      (i = a);
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                o && (!i || o < i) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    i ? e[i][1].start : t[1].end
                                  )),
                                  e.splice(i || s, 0, ["exit", r, t[2]]),
                                  s++,
                                  n++;
                              }
                              if ("listItemPrefix" === t[1].type) {
                                let i = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                (r = i),
                                  e.splice(s, 0, ["enter", i, t[2]]),
                                  s++,
                                  n++,
                                  (o = void 0),
                                  (a = !0);
                              }
                            }
                          }
                          return (e[t][1]._spread = u), n;
                        })(e, u.pop(), c)));
                for (c = -1; ++c < e.length; ) {
                  let n = t[e[c][0]];
                  tE.call(n, e[c][1].type) &&
                    n[e[c][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[c][2].sliceSerialize },
                        a
                      ),
                      e[c][1]
                    );
                }
                if (a.tokenStack.length > 0) {
                  let e = a.tokenStack[a.tokenStack.length - 1];
                  (e[1] || tT).call(a, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: tS(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: tS(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    c = -1;
                  ++c < t.transforms.length;

                )
                  r = t.transforms[c](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  o.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function i() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function o(e, t, n) {
                this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n || void 0]),
                  (e.position = { start: tS(t.start), end: void 0 });
              }
              function a(e) {
                return function (t) {
                  e && e.call(this, t), s.call(this, t);
                };
              }
              function s(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t
                      ? t.call(this, e, r[0])
                      : (r[1] || tT).call(this, e, r[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      K({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                n.position.end = tS(e.end);
              }
              function l() {
                return (0, ev.B)(this.stack.pop());
              }
              function u(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                (n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: tS(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n);
              }
              function c(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = tS(e.end));
              }
              function d() {
                this.data.atHardBreak = !0;
              }
              function f(e) {
                this.data.characterReferenceType = e.type;
              }
              function h() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function p() {
                return { type: "heading", depth: 0, children: [] };
              }
              function m() {
                return { type: "break" };
              }
              function g() {
                return { type: "html", value: "" };
              }
              function y() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function v(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(o)(
              (function (e) {
                for (; !ek(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    defined: [],
                    lazy: {},
                    constructs: (0, eE.W)([i, ...((e || {}).extensions || [])]),
                    content: n(eA),
                    document: n(eC),
                    flow: n(eO),
                    string: n(eD),
                    text: n(ej),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = Object.assign(
                            n
                              ? Object.assign({}, n)
                              : { line: 1, column: 1, offset: 0 },
                            { _index: 0, _bufferIndex: -1 }
                          ),
                          i = {},
                          o = [],
                          a = [],
                          s = [],
                          l = {
                            consume: function (e) {
                              (0, eT.Ch)(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  g())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === a[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (u.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = f()),
                                u.events.push(["enter", n, u]),
                                s.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = s.pop();
                              return (
                                (t.end = f()), u.events.push(["exit", t, u]), t
                              );
                            },
                            attempt: p(function (e, t) {
                              m(e, t.from);
                            }),
                            check: p(h),
                            interrupt: p(h, { interrupt: !0 }),
                          },
                          u = {
                            previous: null,
                            code: null,
                            containerState: {},
                            events: [],
                            parser: e,
                            sliceStream: d,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let o;
                                  let a = e[r];
                                  if ("string" == typeof a) o = a;
                                  else
                                    switch (a) {
                                      case -5:
                                        o = "\r";
                                        break;
                                      case -4:
                                        o = "\n";
                                        break;
                                      case -3:
                                        o = "\r\n";
                                        break;
                                      case -2:
                                        o = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        o = " ";
                                        break;
                                      default:
                                        o = String.fromCharCode(a);
                                    }
                                  (n = -2 === a), i.push(o);
                                }
                                return i.join("");
                              })(d(e), t);
                            },
                            now: f,
                            defineSkip: function (e) {
                              (i[e.line] = e.column), g();
                            },
                            write: function (e) {
                              return ((a = (0, eb.V)(a, e)),
                              (function () {
                                let e;
                                for (; r._index < a.length; ) {
                                  let n = a[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      (t = n.charCodeAt(r._bufferIndex)),
                                        (c = c(t));
                                    }
                                  else c = c(n);
                                }
                              })(),
                              null !== a[a.length - 1])
                                ? []
                                : (m(t, 0),
                                  (u.events = (0, ez.C)(o, u.events, u)),
                                  u.events);
                            },
                          },
                          c = t.tokenize.call(u, l);
                        return t.resolveAll && o.push(t), u;
                        function d(e) {
                          return (function (e, t) {
                            let n;
                            let r = t.start._index,
                              i = t.start._bufferIndex,
                              o = t.end._index,
                              a = t.end._bufferIndex;
                            if (r === o) n = [e[r].slice(i, a)];
                            else {
                              if (((n = e.slice(r, o)), i > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(i))
                                  : n.shift();
                              }
                              a > 0 && n.push(e[o].slice(0, a));
                            }
                            return n;
                          })(a, e);
                        }
                        function f() {
                          let {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: o,
                          } = r;
                          return {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: o,
                          };
                        }
                        function h(e, t) {
                          t.restore();
                        }
                        function p(e, t) {
                          return function (n, i, o) {
                            let a, c, d, h;
                            return Array.isArray(n)
                              ? p(n)
                              : "tokenize" in n
                              ? p([n])
                              : function (e) {
                                  let t = null !== e && n[e],
                                    r = null !== e && n.null;
                                  return p([
                                    ...(Array.isArray(t) ? t : t ? [t] : []),
                                    ...(Array.isArray(r) ? r : r ? [r] : []),
                                  ])(e);
                                };
                            function p(e) {
                              return ((a = e), (c = 0), 0 === e.length)
                                ? o
                                : m(e[c]);
                            }
                            function m(e) {
                              return function (n) {
                                return ((h = (function () {
                                  let e = f(),
                                    t = u.previous,
                                    n = u.currentConstruct,
                                    i = u.events.length,
                                    o = Array.from(s);
                                  return {
                                    restore: function () {
                                      (r = e),
                                        (u.previous = t),
                                        (u.currentConstruct = n),
                                        (u.events.length = i),
                                        (s = o),
                                        g();
                                    },
                                    from: i,
                                  };
                                })()),
                                (d = e),
                                e.partial || (u.currentConstruct = e),
                                e.name &&
                                  u.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? v(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(u), t)
                                        : u,
                                      l,
                                      y,
                                      v
                                    )(n);
                              };
                            }
                            function y(t) {
                              return e(d, h), i;
                            }
                            function v(e) {
                              return (h.restore(), ++c < a.length)
                                ? m(a[c])
                                : o;
                            }
                          };
                        }
                        function m(e, t) {
                          e.resolveAll && !o.includes(e) && o.push(e),
                            e.resolve &&
                              (0, eb.d)(
                                u.events,
                                t,
                                u.events.length - t,
                                e.resolve(u.events.slice(t), u)
                              ),
                            e.resolveTo &&
                              (u.events = e.resolveTo(u.events, u));
                        }
                        function g() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]),
                            (r.offset += i[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(o)
                  .document()
                  .write(
                    ((s = 1),
                    (l = ""),
                    (u = !0),
                    function (e, t, n) {
                      let r, i, o, c, d;
                      let f = [];
                      for (
                        e =
                          l +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          o = 0,
                          l = "",
                          u && (65279 === e.charCodeAt(0) && o++, (u = void 0));
                        o < e.length;

                      ) {
                        if (
                          ((tb.lastIndex = o),
                          (c =
                            (r = tb.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (d = e.charCodeAt(c)),
                          !r)
                        ) {
                          l = e.slice(o);
                          break;
                        }
                        if (10 === d && o === c && a) f.push(-3), (a = void 0);
                        else
                          switch (
                            (a && (f.push(-5), (a = void 0)),
                            o < c && (f.push(e.slice(o, c)), (s += c - o)),
                            d)
                          ) {
                            case 0:
                              f.push(65533), s++;
                              break;
                            case 9:
                              for (
                                i = 4 * Math.ceil(s / 4), f.push(-2);
                                s++ < i;

                              )
                                f.push(-1);
                              break;
                            case 10:
                              f.push(-4), (s = 1);
                              break;
                            default:
                              (a = !0), (s = 1);
                          }
                        o = c + 1;
                      }
                      return (
                        n && (a && f.push(-5), l && f.push(l), f.push(null)), f
                      );
                    })(n, r, !0)
                  )
              )
            )
          );
        };
      }
      let tC = "object" == typeof self ? self : globalThis,
        tP = (e, t) => {
          let n = (t, n) => (e.set(n, t), t),
            r = (i) => {
              if (e.has(i)) return e.get(i);
              let [o, a] = t[i];
              switch (o) {
                case 0:
                case -1:
                  return n(a, i);
                case 1: {
                  let e = n([], i);
                  for (let t of a) e.push(r(t));
                  return e;
                }
                case 2: {
                  let e = n({}, i);
                  for (let [t, n] of a) e[r(t)] = r(n);
                  return e;
                }
                case 3:
                  return n(new Date(a), i);
                case 4: {
                  let { source: e, flags: t } = a;
                  return n(new RegExp(e, t), i);
                }
                case 5: {
                  let e = n(new Map(), i);
                  for (let [t, n] of a) e.set(r(t), r(n));
                  return e;
                }
                case 6: {
                  let e = n(new Set(), i);
                  for (let t of a) e.add(r(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = a;
                  return n(new tC[e](t), i);
                }
                case 8:
                  return n(BigInt(a), i);
                case "BigInt":
                  return n(Object(BigInt(a)), i);
              }
              return n(new tC[o](a), i);
            };
          return r;
        },
        t_ = (e) => tP(new Map(), e)(0),
        { toString: tI } = {},
        { keys: tR } = Object,
        tO = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = tI.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
            ? [7, n]
            : [2, n];
        },
        tM = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
        tD = (e, t, n, r) => {
          let i = (e, t) => {
              let i = r.push(e) - 1;
              return n.set(t, i), i;
            },
            o = (r) => {
              if (n.has(r)) return n.get(r);
              let [a, s] = tO(r);
              switch (a) {
                case 0: {
                  let t = r;
                  switch (s) {
                    case "bigint":
                      (a = 8), (t = r.toString());
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + s);
                      t = null;
                      break;
                    case "undefined":
                      return i([-1], r);
                  }
                  return i([a, t], r);
                }
                case 1: {
                  if (s) return i([s, [...r]], r);
                  let e = [],
                    t = i([a, e], r);
                  for (let t of r) e.push(o(t));
                  return t;
                }
                case 2: {
                  if (s)
                    switch (s) {
                      case "BigInt":
                        return i([s, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return i([s, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return o(r.toJSON());
                  let n = [],
                    l = i([a, n], r);
                  for (let t of tR(r))
                    (e || !tM(tO(r[t]))) && n.push([o(t), o(r[t])]);
                  return l;
                }
                case 3:
                  return i([a, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return i([a, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = i([a, t], r);
                  for (let [n, i] of r)
                    (e || !(tM(tO(n)) || tM(tO(i)))) && t.push([o(n), o(i)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = i([a, t], r);
                  for (let n of r) (e || !tM(tO(n))) && t.push(o(n));
                  return n;
                }
              }
              let { message: l } = r;
              return i([a, { name: s, message: l }], r);
            };
          return o;
        },
        tj = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return tD(!(t || n), !!t, new Map(), r)(e), r;
        },
        tL =
          "function" == typeof structuredClone
            ? (e, t) =>
                t && ("json" in t || "lossy" in t)
                  ? t_(tj(e, t))
                  : structuredClone(e)
            : (e, t) => t_(tj(e, t));
      function tN(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let o = e.charCodeAt(n),
            a = "";
          if (
            37 === o &&
            (0, eT.H$)(e.charCodeAt(n + 1)) &&
            (0, eT.H$)(e.charCodeAt(n + 2))
          )
            i = 2;
          else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
              (a = String.fromCharCode(o));
          else if (o > 55295 && o < 57344) {
            let t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
              ? ((a = String.fromCharCode(o, t)), (i = 1))
              : (a = "�");
          } else a = String.fromCharCode(o);
          a &&
            (t.push(e.slice(r, n), encodeURIComponent(a)),
            (r = n + i + 1),
            (a = "")),
            i && ((n += i), (i = 0));
        }
        return t.join("") + e.slice(r);
      }
      function tF(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function tz(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      var tV = n(5514);
      function tB(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          o = i[0];
        o && "text" === o.type
          ? (o.value = "[" + o.value)
          : i.unshift({ type: "text", value: "[" });
        let a = i[i.length - 1];
        return (
          a && "text" === a.type
            ? (a.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function tU(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function tH(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : "";
      }
      let tW = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          let n;
          let r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            i = String(t.identifier).toUpperCase(),
            o = tN(i.toLowerCase()),
            a = e.footnoteOrder.indexOf(i),
            s = e.footnoteCounts.get(i);
          void 0 === s
            ? ((s = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = a + 1),
            (s += 1),
            e.footnoteCounts.set(i, s);
          let l = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + o,
              id: r + "fnref-" + o + (s > 1 ? "-" + s : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, l);
          let u = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [l],
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return tB(e, t);
          let i = { src: tN(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "img",
            properties: i,
            children: [],
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        image: function (e, t) {
          let n = { src: tN(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return tB(e, t);
          let i = { href: tN(r.url || "") };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "a",
            properties: i,
            children: e.all(t),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        link: function (e, t) {
          let n = { href: tN(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = tU(n[r]);
                  }
                  return t;
                })(n)
              : tU(t),
            o = {},
            a = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = r[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (o.className = ["task-list-item"]);
          }
          let s = -1;
          for (; ++s < r.length; ) {
            let e = r[s];
            (i || 0 !== s || "element" !== e.type || "p" !== e.tagName) &&
              a.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || i
                ? a.push(e)
                : a.push(...e.children);
          }
          let l = r[r.length - 1];
          l &&
            (i || "element" !== l.type || "p" !== l.tagName) &&
            a.push({ type: "text", value: "\n" });
          let u = {
            type: "element",
            tagName: "li",
            properties: o,
            children: a,
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let o = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), i.push(n);
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              o = q(t.children[1]),
              a = X(t.children[t.children.length - 1]);
            o && a && (r.position = { start: o, end: a }), i.push(r);
          }
          let o = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(i, !0),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
            o = n && "table" === n.type ? n.align : void 0,
            a = o ? o.length : t.children.length,
            s = -1,
            l = [];
          for (; ++s < a; ) {
            let n = t.children[s],
              r = {},
              a = o ? o[s] : void 0;
            a && (r.align = a);
            let u = {
              type: "element",
              tagName: i,
              properties: r,
              children: [],
            };
            n &&
              ((u.children = e.all(n)), e.patch(n, u), (u = e.applyData(n, u))),
              l.push(u);
          }
          let u = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(l, !0),
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                o = [];
              for (; r; )
                o.push(tH(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t));
              return o.push(tH(t.slice(i), i > 0, !1)), o.join("");
            })(String(t.value)),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: t$,
        yaml: t$,
        definition: t$,
        footnoteDefinition: t$,
      };
      function t$() {}
      let tY = {}.hasOwnProperty,
        tX = {};
      function tq(e, t) {
        e.position &&
          (t.position = (function (e) {
            let t = q(e),
              n = X(e);
            if (t && n) return { start: t, end: n };
          })(e));
      }
      function tG(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          "string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: "children" in n ? n.children : [n],
                })),
            "element" === n.type && i && Object.assign(n.properties, tL(i)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function tK(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function tJ(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function tZ(e, t) {
        let n = (function (e, t) {
            let n = t || tX,
              r = new Map(),
              i = new Map(),
              o = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let i = o.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(i) ||
                            "text" !== i.type ||
                            (i.value = tJ(i.value)),
                          !Array.isArray(i) && "element" === i.type)
                        ) {
                          let e = i.children[0];
                          e && "text" === e.type && (e.value = tJ(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData: tG,
                definitionById: r,
                footnoteById: i,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...tW, ...n.handlers },
                one: function (e, t) {
                  let n = e.type,
                    r = o.handlers[n];
                  if (tY.call(o.handlers, n) && r) return r(o, e, t);
                  if (
                    o.options.passThrough &&
                    o.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = tL(n);
                      return (r.children = o.all(e)), r;
                    }
                    return tL(e);
                  }
                  return (
                    o.options.unknownHandler ||
                    function (e, t) {
                      let n = t.data || {},
                        r =
                          "value" in t &&
                          !(
                            tY.call(n, "hProperties") || tY.call(n, "hChildren")
                          )
                            ? { type: "text", value: t.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(t),
                              };
                      return e.patch(t, r), e.applyData(t, r);
                    }
                  )(o, e, t);
                },
                options: n,
                patch: tq,
                wrap: tK,
              };
            return (
              (0, tV.Vn)(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : i,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              o
            );
          })(e, t),
          r = n.one(e, void 0),
          i = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || tF,
              r = e.options.footnoteBackLabel || tz,
              i = e.options.footnoteLabel || "Footnotes",
              o = e.options.footnoteLabelTagName || "h2",
              a = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              s = [],
              l = -1;
            for (; ++l < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[l]);
              if (!i) continue;
              let o = e.all(i),
                a = String(i.identifier).toUpperCase(),
                u = tN(a.toLowerCase()),
                c = 0,
                d = [],
                f = e.footnoteCounts.get(a);
              for (; void 0 !== f && ++c <= f; ) {
                d.length > 0 && d.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(l, c);
                "string" == typeof e && (e = { type: "text", value: e }),
                  d.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(l, c),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let h = o[o.length - 1];
              if (h && "element" === h.type && "p" === h.tagName) {
                let e = h.children[h.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : h.children.push({ type: "text", value: " " }),
                  h.children.push(...d);
              } else o.push(...d);
              let p = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + u },
                children: e.wrap(o, !0),
              };
              e.patch(i, p), s.push(p);
            }
            if (0 !== s.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: o,
                    properties: { ...tL(a), id: "footnote-label" },
                    children: [{ type: "text", value: i }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(s, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          a = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return (
          i &&
            ((0, o.ok)("children" in a),
            a.children.push({ type: "text", value: "\n" }, i)),
          a
        );
      }
      function tQ(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = tZ(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return tZ(n, { file: r, ...(e || t) });
            };
      }
      function t0(e) {
        if (e) throw e;
      }
      var t1 = n(6726);
      function t2(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let t3 = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          t5(e);
          let r = 0,
            i = -1,
            o = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
              if (47 === e.codePointAt(o)) {
                if (n) {
                  r = o + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = o + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let a = -1,
            s = t.length - 1;
          for (; o--; )
            if (47 === e.codePointAt(o)) {
              if (n) {
                r = o + 1;
                break;
              }
            } else
              a < 0 && ((n = !0), (a = o + 1)),
                s > -1 &&
                  (e.codePointAt(o) === t.codePointAt(s--)
                    ? s < 0 && (i = o)
                    : ((s = -1), (i = a)));
          return r === i ? (i = a) : i < 0 && (i = e.length), e.slice(r, i);
        },
        dirname: function (e) {
          let t;
          if ((t5(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          t5(e);
          let n = e.length,
            r = -1,
            i = 0,
            o = -1,
            a = 0;
          for (; n--; ) {
            let s = e.codePointAt(n);
            if (47 === s) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            r < 0 && ((t = !0), (r = n + 1)),
              46 === s
                ? o < 0
                  ? (o = n)
                  : 1 !== a && (a = 1)
                : o > -1 && (a = -1);
          }
          return o < 0 ||
            r < 0 ||
            0 === a ||
            (1 === a && o === r - 1 && o === i + 1)
            ? ""
            : e.slice(o, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            t5(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                t5(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      i = "",
                      o = 0,
                      a = -1,
                      s = 0,
                      l = -1;
                    for (; ++l <= e.length; ) {
                      if (l < e.length) n = e.codePointAt(l);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (a === l - 1 || 1 === s);
                        else if (a !== l - 1 && 2 === s) {
                          if (
                            i.length < 2 ||
                            2 !== o ||
                            46 !== i.codePointAt(i.length - 1) ||
                            46 !== i.codePointAt(i.length - 2)
                          ) {
                            if (i.length > 2) {
                              if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                r < 0
                                  ? ((i = ""), (o = 0))
                                  : (o =
                                      (i = i.slice(0, r)).length -
                                      1 -
                                      i.lastIndexOf("/")),
                                  (a = l),
                                  (s = 0);
                                continue;
                              }
                            } else if (i.length > 0) {
                              (i = ""), (o = 0), (a = l), (s = 0);
                              continue;
                            }
                          }
                          t && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                        } else
                          i.length > 0
                            ? (i += "/" + e.slice(a + 1, l))
                            : (i = e.slice(a + 1, l)),
                            (o = l - a - 1);
                        (a = l), (s = 0);
                      } else 46 === n && s > -1 ? s++ : (s = -1);
                    }
                    return i;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function t5(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      let t4 = {
        cwd: function () {
          return "/";
        },
      };
      function t6(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let t9 = ["history", "path", "basename", "stem", "extname", "dirname"];
      class t8 {
        constructor(e) {
          let t, n;
          (t = e
            ? t6(e)
              ? { path: e }
              : "string" == typeof e ||
                (function (e) {
                  return !!(
                    e &&
                    "object" == typeof e &&
                    "byteLength" in e &&
                    "byteOffset" in e
                  );
                })(e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "cwd" in t ? "" : t4.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < t9.length; ) {
            let e = t9[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) t9.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? t3.basename(this.path) : void 0;
        }
        set basename(e) {
          ne(e, "basename"),
            t7(e, "basename"),
            (this.path = t3.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? t3.dirname(this.path) : void 0;
        }
        set dirname(e) {
          nt(this.basename, "dirname"),
            (this.path = t3.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? t3.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((t7(e, "extname"), nt(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = t3.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          t6(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!t6(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            ne(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? t3.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          ne(e, "stem"),
            t7(e, "stem"),
            (this.path = t3.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new ee(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
            ? this.value
            : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function t7(e, t) {
        if (e && e.includes(t3.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + t3.sep + "`"
          );
      }
      function ne(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function nt(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let nn = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return Object.setPrototypeOf(r, t), r;
        },
        nr = {}.hasOwnProperty;
      class ni extends nn {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r
                      );
                    (function i(o, ...a) {
                      let s = e[++n],
                        l = -1;
                      if (o) {
                        r(o);
                        return;
                      }
                      for (; ++l < t.length; )
                        (null === a[l] || void 0 === a[l]) && (a[l] = t[l]);
                      (t = a),
                        s
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let o;
                                let a = e.length > t.length;
                                a && t.push(r);
                                try {
                                  o = e.apply(this, t);
                                } catch (e) {
                                  if (a && n) throw e;
                                  return r(e);
                                }
                                a ||
                                  (o && o.then && "function" == typeof o.then
                                    ? o.then(i, r)
                                    : o instanceof Error
                                    ? r(o)
                                    : i(o));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              s,
                              i
                            )(...a)
                          : r(null, ...a);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let e = new ni(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(t1(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (nl("data", this.frozen), (this.namespace[e] = t), this)
              : (nr.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (nl("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = nd(e),
            n = this.parser || this.Parser;
          return na("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            na("process", this.parser || this.Parser),
            ns("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            let a = nd(e),
              s = n.parse(a);
            function l(e, n) {
              e || !n
                ? i(e)
                : r
                ? r(n)
                : ((0, o.ok)(t, "`done` is defined if `resolve` is not"),
                  t(void 0, n));
            }
            n.run(s, a, function (e, t, r) {
              if (e || !t || !r) return l(e);
              let i = n.stringify(t, r);
              "string" == typeof i ||
              (i &&
                "object" == typeof i &&
                "byteLength" in i &&
                "byteOffset" in i)
                ? (r.value = i)
                : (r.result = i),
                l(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            na("processSync", this.parser || this.Parser),
            ns("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), t0(e), (t = r);
            }),
            nc("processSync", "process", n),
            (0, o.ok)(t, "we either bailed on an error or have a tree"),
            t
          );
        }
        run(e, t, n) {
          nu(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, a) {
            (0, o.ok)(
              "function" != typeof t,
              "`file` can’t be a `done` anymore, we checked"
            );
            let s = nd(t);
            r.run(e, s, function (t, r, s) {
              let l = r || e;
              t
                ? a(t)
                : i
                ? i(l)
                : ((0, o.ok)(n, "`done` is defined if `resolve` is not"),
                  n(void 0, l, s));
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              t0(e), (n = t), (r = !0);
            }),
            nc("runSync", "run", r),
            (0, o.ok)(n, "we either bailed on an error or have a tree"),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = nd(t),
            r = this.compiler || this.Compiler;
          return ns("stringify", r), nu(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((nl("use", this.frozen), null == e));
          else if ("function" == typeof e) a(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? o(e) : i(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function i(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            o(e.plugins),
              e.settings && (r.settings = t1(!0, r.settings, e.settings));
          }
          function o(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; )
                !(function (e) {
                  if ("function" == typeof e) a(e, []);
                  else if ("object" == typeof e) {
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      a(t, n);
                    } else i(e);
                  } else
                    throw TypeError("Expected usable value, not `" + e + "`");
                })(e[t]);
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function a(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...o] = t,
                a = n[i][1];
              t2(a) && t2(r) && (r = t1(!0, a, r)), (n[i] = [e, r, ...o]);
            }
          }
        }
      }
      let no = new ni().freeze();
      function na(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function ns(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function nl(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function nu(e) {
        if (!t2(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function nc(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function nd(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
          ? e
          : new t8(e);
      }
      let nf = [],
        nh = { allowDangerousHtml: !0 },
        np = /^(https?|ircs?|mailto|xmpp)$/i,
        nm = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function ng(e) {
        let t = e.allowedElements,
          n = e.allowElement,
          r = e.children || "",
          i = e.className,
          a = e.components,
          s = e.disallowedElements,
          l = e.rehypePlugins || nf,
          u = e.remarkPlugins || nf,
          c = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...nh } : nh,
          d = e.skipHtml,
          f = e.unwrapDisallowed,
          h = e.urlTransform || ny,
          p = no().use(tA).use(u).use(tQ, c).use(l),
          m = new t8();
        for (let n of ("string" == typeof r
          ? (m.value = r)
          : (0, o.t1)(
              "Unexpected value `" +
                r +
                "` for `children` prop, expected `string`"
            ),
        t &&
          s &&
          (0, o.t1)(
            "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"
          ),
        nm))
          Object.hasOwn(e, n.from) &&
            (0, o.t1)(
              "Unexpected `" +
                n.from +
                "` prop, " +
                (n.to ? "use `" + n.to + "` instead" : "remove it") +
                " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
                n.id +
                "> for more info)"
            );
        let g = p.parse(m),
          y = p.runSync(g, m);
        return (
          i &&
            (y = {
              type: "element",
              tagName: "div",
              properties: { className: i },
              children: "root" === y.type ? y.children : [y],
            }),
          (0, tV.Vn)(y, function (e, r, i) {
            if ("raw" === e.type && i && "number" == typeof r)
              return (
                d
                  ? i.children.splice(r, 1)
                  : (i.children[r] = { type: "text", value: e.value }),
                r
              );
            if ("element" === e.type) {
              let t;
              for (t in eg)
                if (Object.hasOwn(eg, t) && Object.hasOwn(e.properties, t)) {
                  let n = e.properties[t],
                    r = eg[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = h(String(n || ""), t, e));
                }
            }
            if ("element" === e.type) {
              let o = t ? !t.includes(e.tagName) : !!s && s.includes(e.tagName);
              if (
                (!o && n && "number" == typeof r && (o = !n(e, r, i)),
                o && i && "number" == typeof r)
              )
                return (
                  f && e.children
                    ? i.children.splice(r, 1, ...e.children)
                    : i.children.splice(r, 1),
                  r
                );
            }
          }),
          (function (e, t) {
            var n, r, i;
            let o;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let a = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`"
                );
              (n = t.jsxDEV),
                (o = function (e, t, r, i) {
                  let o = Array.isArray(r.children),
                    s = q(e);
                  return n(
                    t,
                    r,
                    i,
                    o,
                    {
                      columnNumber: s ? s.column - 1 : void 0,
                      fileName: a,
                      lineNumber: s ? s.line : void 0,
                    },
                    void 0
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (r = t.jsx),
                (i = t.jsxs),
                (o = function (e, t, n, o) {
                  let a = Array.isArray(n.children) ? i : r;
                  return o ? a(t, n, o) : a(t, n);
                });
            }
            let s = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: o,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: a,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? F : N,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              l = el(s, e, void 0);
            return l && "string" != typeof l
              ? l
              : s.create(e, s.Fragment, { children: l || void 0 }, void 0);
          })(y, {
            Fragment: ey.Fragment,
            components: a,
            ignoreInvalidStyle: !0,
            jsx: ey.jsx,
            jsxs: ey.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      }
      function ny(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          i = e.indexOf("/");
        return t < 0 ||
          (i > -1 && t > i) ||
          (n > -1 && t > n) ||
          (r > -1 && t > r) ||
          np.test(e.slice(0, t))
          ? e
          : "";
      }
    },
    4633: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      n.d(t, { Z: () => eD });
      var i = n(8899),
        o = n(9685),
        a = n(3053),
        s = n(5373);
      let l = "phrasing",
        u = ["autolink", "link", "image", "label"];
      function c(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function d(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function f(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function h(e) {
        this.config.exit.data.call(this, e);
        let t = this.stack[this.stack.length - 1];
        (0, i.ok)("link" === t.type),
          (t.url = "http://" + this.sliceSerialize(e));
      }
      function p(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function m(e) {
        this.exit(e);
      }
      function g(e) {
        !(function (e, t, n) {
          let r = (0, s.O)((n || {}).ignore || []),
            i = (function (e) {
              let t = [];
              if (!Array.isArray(e))
                throw TypeError(
                  "Expected find and replace tuple or list of tuples"
                );
              let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                r = -1;
              for (; ++r < n.length; ) {
                var i;
                let e = n[r];
                t.push([
                  "string" == typeof (i = e[0])
                    ? RegExp(
                        (function (e) {
                          if ("string" != typeof e)
                            throw TypeError("Expected a string");
                          return e
                            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                            .replace(/-/g, "\\x2d");
                        })(i),
                        "g"
                      )
                    : i,
                  (function (e) {
                    return "function" == typeof e
                      ? e
                      : function () {
                          return e;
                        };
                  })(e[1]),
                ]);
              }
              return t;
            })(t),
            o = -1;
          for (; ++o < i.length; ) (0, a.S4)(e, "text", l);
          function l(e, t) {
            let n,
              a = -1;
            for (; ++a < t.length; ) {
              let e = t[a],
                i = n ? n.children : void 0;
              if (r(e, i ? i.indexOf(e) : void 0, n)) return;
              n = e;
            }
            if (n)
              return (function (e, t) {
                let n = t[t.length - 1],
                  r = i[o][0],
                  a = i[o][1],
                  s = 0,
                  l = n.children.indexOf(e),
                  u = !1,
                  c = [];
                r.lastIndex = 0;
                let d = r.exec(e.value);
                for (; d; ) {
                  let n = d.index,
                    i = { index: d.index, input: d.input, stack: [...t, e] },
                    o = a(...d, i);
                  if (
                    ("string" == typeof o &&
                      (o = o.length > 0 ? { type: "text", value: o } : void 0),
                    !1 === o
                      ? (r.lastIndex = n + 1)
                      : (s !== n &&
                          c.push({ type: "text", value: e.value.slice(s, n) }),
                        Array.isArray(o) ? c.push(...o) : o && c.push(o),
                        (s = n + d[0].length),
                        (u = !0)),
                    !r.global)
                  )
                    break;
                  d = r.exec(e.value);
                }
                return (
                  u
                    ? (s < e.value.length &&
                        c.push({ type: "text", value: e.value.slice(s) }),
                      n.children.splice(l, 1, ...c))
                    : (c = [e]),
                  l + c.length
                );
              })(e, t);
          }
        })(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, y],
            [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, v],
          ],
          { ignore: ["link", "linkReference"] }
        );
      }
      function y(e, t, n, i, o) {
        let a = "";
        if (
          !b(o) ||
          (/^w/i.test(t) && ((n = t + n), (t = ""), (a = "http://")),
          !(function (e) {
            let t = e.split(".");
            return !(
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            );
          })(n))
        )
          return !1;
        let s = (function (e) {
          let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            i = n.indexOf(")"),
            o = r(e, "("),
            a = r(e, ")");
          for (; -1 !== i && o > a; )
            (e += n.slice(0, i + 1)),
              (i = (n = n.slice(i + 1)).indexOf(")")),
              a++;
          return [e, n];
        })(n + i);
        if (!s[0]) return !1;
        let l = {
          type: "link",
          title: null,
          url: a + t + s[0],
          children: [{ type: "text", value: t + s[0] }],
        };
        return s[1] ? [l, { type: "text", value: s[1] }] : l;
      }
      function v(e, t, n, r) {
        return (
          !(!b(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function b(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, o.B8)(n) || (0, o.Xh)(n)) && (!t || 47 !== n)
        );
      }
      var x = n(7833);
      function w(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e
        );
      }
      function k() {
        this.buffer();
      }
      function E(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)("footnoteDefinition" === n.type),
          (n.label = t),
          (n.identifier = (0, x.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function S(e) {
        this.exit(e);
      }
      function T(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function A() {
        this.buffer();
      }
      function C(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)("footnoteReference" === n.type),
          (n.label = t),
          (n.identifier = (0, x.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function P(e) {
        this.exit(e);
      }
      function _(e, t, n, r) {
        let i = n.createTracker(r),
          o = i.move("[^"),
          a = n.enter("footnoteReference"),
          s = n.enter("reference");
        return (
          (o += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: o,
              after: "]",
            })
          )),
          s(),
          a(),
          (o += i.move("]"))
        );
      }
      function I(e, t, n, r) {
        let i = n.createTracker(r),
          o = i.move("[^"),
          a = n.enter("footnoteDefinition"),
          s = n.enter("label");
        return (
          (o += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: o,
              after: "]",
            })
          )),
          s(),
          (o += i.move(
            "]:" + (e.children && e.children.length > 0 ? " " : "")
          )),
          i.shift(4),
          (o += i.move(n.indentLines(n.containerFlow(e, i.current()), R))),
          a(),
          o
        );
      }
      function R(e, t, n) {
        return 0 === t ? e : (n ? "" : "    ") + e;
      }
      _.peek = function () {
        return "[";
      };
      let O = [
        "autolink",
        "destinationLiteral",
        "destinationRaw",
        "reference",
        "titleQuote",
        "titleApostrophe",
      ];
      function M(e) {
        this.enter({ type: "delete", children: [] }, e);
      }
      function D(e) {
        this.exit(e);
      }
      function j(e, t, n, r) {
        let i = n.createTracker(r),
          o = n.enter("strikethrough"),
          a = i.move("~~");
        return (
          (a += n.containerPhrasing(e, {
            ...i.current(),
            before: a,
            after: "~",
          })),
          (a += i.move("~~")),
          o(),
          a
        );
      }
      function L(e) {
        return e.length;
      }
      function N(e) {
        let t = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
          ? 108
          : 82 === t || 114 === t
          ? 114
          : 0;
      }
      j.peek = function () {
        return "~";
      };
      var F = n(658);
      n(5514);
      var z = n(2430);
      function V(e, t, n) {
        let r = e.value || "",
          i = "`",
          o = -1;
        for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++o < n.unsafe.length;

        ) {
          let e;
          let t = n.unsafe[o],
            i = n.compilePattern(t);
          if (t.atBreak)
            for (; (e = i.exec(r)); ) {
              let t = e.index;
              10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
                (r = r.slice(0, t) + " " + r.slice(e.index + 1));
            }
        }
        return i + r + i;
      }
      (V.peek = function () {
        return "`";
      }),
        (0, s.O)([
          "break",
          "delete",
          "emphasis",
          "footnote",
          "footnoteReference",
          "image",
          "imageReference",
          "inlineCode",
          "inlineMath",
          "link",
          "linkReference",
          "mdxJsxTextElement",
          "mdxTextExpression",
          "strong",
          "text",
          "textDirective",
        ]);
      let B = {
        inlineCode: V,
        listItem: function (e, t, n, r) {
          let i = (function (e) {
              let t = e.options.listItemIndent || "one";
              if ("tab" !== t && "one" !== t && "mixed" !== t)
                throw Error(
                  "Cannot serialize items with `" +
                    t +
                    "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                );
              return t;
            })(n),
            o =
              n.bulletCurrent ||
              (function (e) {
                let t = e.options.bullet || "*";
                if ("*" !== t && "+" !== t && "-" !== t)
                  throw Error(
                    "Cannot serialize items with `" +
                      t +
                      "` for `options.bullet`, expected `*`, `+`, or `-`"
                  );
                return t;
              })(n);
          t &&
            "list" === t.type &&
            t.ordered &&
            (o =
              ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
              (!1 === n.options.incrementListMarker
                ? 0
                : t.children.indexOf(e)) +
              o);
          let a = o.length + 1;
          ("tab" === i ||
            ("mixed" === i &&
              ((t && "list" === t.type && t.spread) || e.spread))) &&
            (a = 4 * Math.ceil(a / 4));
          let s = n.createTracker(r);
          s.move(o + " ".repeat(a - o.length)), s.shift(a);
          let l = n.enter("listItem"),
            u = n.indentLines(
              n.containerFlow(e, s.current()),
              function (e, t, n) {
                return t
                  ? (n ? "" : " ".repeat(a)) + e
                  : (n ? o : o + " ".repeat(a - o.length)) + e;
              }
            );
          return l(), u;
        },
      };
      function U(e) {
        let t = e._align;
        (0, i.ok)(t, "expected `_align` on table"),
          this.enter(
            {
              type: "table",
              align: t.map(function (e) {
                return "none" === e ? null : e;
              }),
              children: [],
            },
            e
          ),
          (this.data.inTable = !0);
      }
      function H(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function W(e) {
        this.enter({ type: "tableRow", children: [] }, e);
      }
      function $(e) {
        this.exit(e);
      }
      function Y(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function X(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, q));
        let n = this.stack[this.stack.length - 1];
        (0, i.ok)("inlineCode" === n.type), (n.value = t), this.exit(e);
      }
      function q(e, t) {
        return "|" === t ? t : e;
      }
      function G(e) {
        let t = this.stack[this.stack.length - 2];
        (0, i.ok)("listItem" === t.type),
          (t.checked = "taskListCheckValueChecked" === e.type);
      }
      function K(e) {
        let t = this.stack[this.stack.length - 2];
        if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
          let e = this.stack[this.stack.length - 1];
          (0, i.ok)("paragraph" === e.type);
          let n = e.children[0];
          if (n && "text" === n.type) {
            let r;
            let i = t.children,
              o = -1;
            for (; ++o < i.length; ) {
              let e = i[o];
              if ("paragraph" === e.type) {
                r = e;
                break;
              }
            }
            r === e &&
              ((n.value = n.value.slice(1)),
              0 === n.value.length
                ? e.children.shift()
                : e.position &&
                  n.position &&
                  "number" == typeof n.position.start.offset &&
                  (n.position.start.column++,
                  n.position.start.offset++,
                  (e.position.start = Object.assign({}, n.position.start))));
          }
        }
        this.exit(e);
      }
      function J(e, t, n, r) {
        let i = e.children[0],
          o = "boolean" == typeof e.checked && i && "paragraph" === i.type,
          a = "[" + (e.checked ? "x" : " ") + "] ",
          s = n.createTracker(r);
        o && s.move(a);
        let l = B.listItem(e, t, n, { ...r, ...s.current() });
        return (
          o &&
            (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + a;
            })),
          l
        );
      }
      var Z = n(4696);
      let Q = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(o) {
              return (87 === o || 119 === o) && r < 3
                ? (r++, e.consume(o), t)
                : 46 === o && 3 === r
                ? (e.consume(o), i)
                : n(o);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ee = {
          tokenize: function (e, t, n) {
            let r, i, a;
            return s;
            function s(t) {
              return 46 === t || 95 === t
                ? e.check(en, u, l)(t)
                : null === t ||
                  (0, o.z3)(t) ||
                  (0, o.B8)(t) ||
                  (45 !== t && (0, o.Xh)(t))
                ? u(t)
                : ((a = !0), e.consume(t), s);
            }
            function l(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), s
              );
            }
            function u(e) {
              return i || r || !a ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        et = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(s) {
              return 40 === s
                ? (n++, e.consume(s), i)
                : 41 === s && r < n
                ? a(s)
                : 33 === s ||
                  34 === s ||
                  38 === s ||
                  39 === s ||
                  41 === s ||
                  42 === s ||
                  44 === s ||
                  46 === s ||
                  58 === s ||
                  59 === s ||
                  60 === s ||
                  63 === s ||
                  93 === s ||
                  95 === s ||
                  126 === s
                ? e.check(en, t, a)(s)
                : null === s || (0, o.z3)(s) || (0, o.B8)(s)
                ? t(s)
                : (e.consume(s), i);
            }
            function a(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        en = {
          tokenize: function (e, t, n) {
            return r;
            function r(s) {
              return 33 === s ||
                34 === s ||
                39 === s ||
                41 === s ||
                42 === s ||
                44 === s ||
                46 === s ||
                58 === s ||
                59 === s ||
                63 === s ||
                95 === s ||
                126 === s
                ? (e.consume(s), r)
                : 38 === s
                ? (e.consume(s), a)
                : 93 === s
                ? (e.consume(s), i)
                : 60 === s || null === s || (0, o.z3)(s) || (0, o.B8)(s)
                ? t(s)
                : n(s);
            }
            function i(e) {
              return null === e ||
                40 === e ||
                91 === e ||
                (0, o.z3)(e) ||
                (0, o.B8)(e)
                ? t(e)
                : r(e);
            }
            function a(t) {
              return (0, o.jv)(t)
                ? (function t(i) {
                    return 59 === i
                      ? (e.consume(i), r)
                      : (0, o.jv)(i)
                      ? (e.consume(i), t)
                      : n(i);
                  })(t)
                : n(t);
            }
          },
          partial: !0,
        },
        er = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return (0, o.H$)(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ei = {
          name: "wwwAutolink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (87 !== t && 119 !== t) ||
                !eu.call(r, r.previous) ||
                eh(r.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(Q, e.attempt(ee, e.attempt(et, i), n), n)(t));
            };
            function i(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: eu,
        },
        eo = {
          name: "protocolAutolink",
          tokenize: function (e, t, n) {
            let r = this,
              i = "",
              a = !1;
            return function (t) {
              return (72 === t || 104 === t) &&
                ec.call(r, r.previous) &&
                !eh(r.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (i += String.fromCodePoint(t)),
                  e.consume(t),
                  s)
                : n(t);
            };
            function s(t) {
              if ((0, o.jv)(t) && i.length < 5)
                return (i += String.fromCodePoint(t)), e.consume(t), s;
              if (58 === t) {
                let n = i.toLowerCase();
                if ("http" === n || "https" === n) return e.consume(t), l;
              }
              return n(t);
            }
            function l(t) {
              return 47 === t ? ((e.consume(t), a) ? u : ((a = !0), l)) : n(t);
            }
            function u(t) {
              return null === t ||
                (0, o.Av)(t) ||
                (0, o.z3)(t) ||
                (0, o.B8)(t) ||
                (0, o.Xh)(t)
                ? n(t)
                : e.attempt(ee, e.attempt(et, c), n)(t);
            }
            function c(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: ec,
        },
        ea = {
          name: "emailAutolink",
          tokenize: function (e, t, n) {
            let r, i;
            let a = this;
            return function (t) {
              return !ef(t) || !ed.call(a, a.previous) || eh(a.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function t(r) {
                    return ef(r)
                      ? (e.consume(r), t)
                      : 64 === r
                      ? (e.consume(r), s)
                      : n(r);
                  })(t));
            };
            function s(t) {
              return 46 === t
                ? e.check(er, u, l)(t)
                : 45 === t || 95 === t || (0, o.H$)(t)
                ? ((i = !0), e.consume(t), s)
                : u(t);
            }
            function l(t) {
              return e.consume(t), (r = !0), s;
            }
            function u(s) {
              return i && r && (0, o.jv)(a.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(s))
                : n(s);
            }
          },
          previous: ed,
        },
        es = {},
        el = 48;
      for (; el < 123; )
        (es[el] = ea), 58 == ++el ? (el = 65) : 91 === el && (el = 97);
      function eu(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          (0, o.z3)(e)
        );
      }
      function ec(e) {
        return !(0, o.jv)(e);
      }
      function ed(e) {
        return !(47 === e || ef(e));
      }
      function ef(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, o.H$)(e);
      }
      function eh(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          let r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      (es[43] = ea),
        (es[45] = ea),
        (es[46] = ea),
        (es[95] = ea),
        (es[72] = [ea, eo]),
        (es[104] = [ea, eo]),
        (es[87] = [ea, ei]),
        (es[119] = [ea, ei]);
      var ep = n(2462),
        em = n(9406);
      let eg = {
        tokenize: function (e, t, n) {
          let r = this;
          return (0, em.f)(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "gfmFootnoteDefinitionIndent" === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function ey(e, t, n) {
        let r;
        let i = this,
          o = i.events.length,
          a = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
        for (; o--; ) {
          let e = i.events[o][1];
          if ("labelImage" === e.type) {
            r = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (o) {
          if (!r || !r._balanced) return n(o);
          let s = (0, x.d)(i.sliceSerialize({ start: r.end, end: i.now() }));
          return 94 === s.codePointAt(0) && a.includes(s.slice(1))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(o),
              e.exit("gfmFootnoteCallLabelMarker"),
              t(o))
            : n(o);
        };
      }
      function ev(e, t) {
        let n = e.length;
        for (; n--; )
          if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
            e[n][1];
            break;
          }
        (e[n + 1][1].type = "data"),
          (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
        let r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[n + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[n + 3][1].end),
            end: Object.assign({}, e[n + 3][1].end),
          };
        i.end.column++, i.end.offset++, i.end._bufferIndex++;
        let o = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          a = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, o.start),
            end: Object.assign({}, o.end),
          },
          s = [
            e[n + 1],
            e[n + 2],
            ["enter", r, t],
            e[n + 3],
            e[n + 4],
            ["enter", i, t],
            ["exit", i, t],
            ["enter", o, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", o, t],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", r, t],
          ];
        return e.splice(n, e.length - n + 1, ...s), e;
      }
      function eb(e, t, n) {
        let r;
        let i = this,
          a = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []),
          s = 0;
        return function (t) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            l
          );
        };
        function l(t) {
          return 94 !== t
            ? n(t)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(t),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              u);
        }
        function u(l) {
          if (
            s > 999 ||
            (93 === l && !r) ||
            null === l ||
            91 === l ||
            (0, o.z3)(l)
          )
            return n(l);
          if (93 === l) {
            e.exit("chunkString");
            let r = e.exit("gfmFootnoteCallString");
            return a.includes((0, x.d)(i.sliceSerialize(r)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(l),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t)
              : n(l);
          }
          return (0, o.z3)(l) || (r = !0), s++, e.consume(l), 92 === l ? c : u;
        }
        function c(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, u)
            : u(t);
        }
      }
      function ex(e, t, n) {
        let r, i;
        let a = this,
          s = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []),
          l = 0;
        return function (t) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            u
          );
        };
        function u(t) {
          return 94 === t
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              c)
            : n(t);
        }
        function c(t) {
          if (
            l > 999 ||
            (93 === t && !i) ||
            null === t ||
            91 === t ||
            (0, o.z3)(t)
          )
            return n(t);
          if (93 === t) {
            e.exit("chunkString");
            let n = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (r = (0, x.d)(a.sliceSerialize(n))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              f
            );
          }
          return (0, o.z3)(t) || (i = !0), l++, e.consume(t), 92 === t ? d : c;
        }
        function d(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, c)
            : c(t);
        }
        function f(t) {
          return 58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              s.includes(r) || s.push(r),
              (0, em.f)(e, h, "gfmFootnoteDefinitionWhitespace"))
            : n(t);
        }
        function h(e) {
          return t(e);
        }
      }
      function ew(e, t, n) {
        return e.check(ep.w, t, e.attempt(eg, t, n));
      }
      function ek(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var eE = n(8973),
        eS = n(3374);
      class eT {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 !== n || 0 !== r.length) {
              for (; i < e.map.length; ) {
                if (e.map[i][0] === t) {
                  (e.map[i][1] += n), e.map[i][2].push(...r);
                  return;
                }
                i += 1;
              }
              e.map.push([t, n, r]);
            }
          })(this, e, t, n);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, t) {
              return e[0] - t[0];
            }),
            0 === this.map.length)
          )
            return;
          let t = this.map.length,
            n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      }
      function eA(e, t, n) {
        let r;
        let i = this,
          a = 0,
          s = 0;
        return function (e) {
          let t = i.events.length - 1;
          for (; t > -1; ) {
            let e = i.events[t][1].type;
            if ("lineEnding" === e || "linePrefix" === e) t--;
            else break;
          }
          let r = t > -1 ? i.events[t][1].type : null,
            o = "tableHead" === r || "tableRow" === r ? b : l;
          return o === b && i.parser.lazy[i.now().line] ? n(e) : o(e);
        };
        function l(t) {
          return (
            e.enter("tableHead"),
            e.enter("tableRow"),
            124 === t || ((r = !0), (s += 1)),
            u(t)
          );
        }
        function u(t) {
          return null === t
            ? n(t)
            : (0, o.Ch)(t)
            ? s > 1
              ? ((s = 0),
                (i.interrupt = !0),
                e.exit("tableRow"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                f)
              : n(t)
            : (0, o.xz)(t)
            ? (0, em.f)(e, u, "whitespace")(t)
            : ((s += 1), r && ((r = !1), (a += 1)), 124 === t)
            ? (e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              (r = !0),
              u)
            : (e.enter("data"), c(t));
        }
        function c(t) {
          return null === t || 124 === t || (0, o.z3)(t)
            ? (e.exit("data"), u(t))
            : (e.consume(t), 92 === t ? d : c);
        }
        function d(t) {
          return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
        }
        function f(t) {
          return ((i.interrupt = !1), i.parser.lazy[i.now().line])
            ? n(t)
            : (e.enter("tableDelimiterRow"), (r = !1), (0, o.xz)(t))
            ? (0, em.f)(
                e,
                h,
                "linePrefix",
                i.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(t)
            : h(t);
        }
        function h(t) {
          return 45 === t || 58 === t
            ? m(t)
            : 124 === t
            ? ((r = !0),
              e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              p)
            : n(t);
        }
        function p(t) {
          return (0, o.xz)(t) ? (0, em.f)(e, m, "whitespace")(t) : m(t);
        }
        function m(t) {
          return 58 === t
            ? ((s += 1),
              (r = !0),
              e.enter("tableDelimiterMarker"),
              e.consume(t),
              e.exit("tableDelimiterMarker"),
              g)
            : 45 === t
            ? ((s += 1), g(t))
            : null === t || (0, o.Ch)(t)
            ? v(t)
            : n(t);
        }
        function g(t) {
          return 45 === t
            ? (e.enter("tableDelimiterFiller"),
              (function t(n) {
                return 45 === n
                  ? (e.consume(n), t)
                  : 58 === n
                  ? ((r = !0),
                    e.exit("tableDelimiterFiller"),
                    e.enter("tableDelimiterMarker"),
                    e.consume(n),
                    e.exit("tableDelimiterMarker"),
                    y)
                  : (e.exit("tableDelimiterFiller"), y(n));
              })(t))
            : n(t);
        }
        function y(t) {
          return (0, o.xz)(t) ? (0, em.f)(e, v, "whitespace")(t) : v(t);
        }
        function v(i) {
          return 124 === i
            ? h(i)
            : null === i || (0, o.Ch)(i)
            ? r && a === s
              ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i))
              : n(i)
            : n(i);
        }
        function b(t) {
          return e.enter("tableRow"), x(t);
        }
        function x(n) {
          return 124 === n
            ? (e.enter("tableCellDivider"),
              e.consume(n),
              e.exit("tableCellDivider"),
              x)
            : null === n || (0, o.Ch)(n)
            ? (e.exit("tableRow"), t(n))
            : (0, o.xz)(n)
            ? (0, em.f)(e, x, "whitespace")(n)
            : (e.enter("data"), w(n));
        }
        function w(t) {
          return null === t || 124 === t || (0, o.z3)(t)
            ? (e.exit("data"), x(t))
            : (e.consume(t), 92 === t ? k : w);
        }
        function k(t) {
          return 92 === t || 124 === t ? (e.consume(t), w) : w(t);
        }
      }
      function eC(e, t) {
        let n,
          r,
          i,
          o = -1,
          a = !0,
          s = 0,
          l = [0, 0, 0, 0],
          u = [0, 0, 0, 0],
          c = !1,
          d = 0,
          f = new eT();
        for (; ++o < e.length; ) {
          let h = e[o],
            p = h[1];
          "enter" === h[0]
            ? "tableHead" === p.type
              ? ((c = !1),
                0 !== d && (e_(f, t, d, n, r), (r = void 0), (d = 0)),
                (n = {
                  type: "table",
                  start: Object.assign({}, p.start),
                  end: Object.assign({}, p.end),
                }),
                f.add(o, 0, [["enter", n, t]]))
              : "tableRow" === p.type || "tableDelimiterRow" === p.type
              ? ((a = !0),
                (i = void 0),
                (l = [0, 0, 0, 0]),
                (u = [0, o + 1, 0, 0]),
                c &&
                  ((c = !1),
                  (r = {
                    type: "tableBody",
                    start: Object.assign({}, p.start),
                    end: Object.assign({}, p.end),
                  }),
                  f.add(o, 0, [["enter", r, t]])),
                (s = "tableDelimiterRow" === p.type ? 2 : r ? 3 : 1))
              : s &&
                ("data" === p.type ||
                  "tableDelimiterMarker" === p.type ||
                  "tableDelimiterFiller" === p.type)
              ? ((a = !1),
                0 === u[2] &&
                  (0 !== l[1] &&
                    ((u[0] = u[1]),
                    (i = eP(f, t, l, s, void 0, i)),
                    (l = [0, 0, 0, 0])),
                  (u[2] = o)))
              : "tableCellDivider" === p.type &&
                (a
                  ? (a = !1)
                  : (0 !== l[1] &&
                      ((u[0] = u[1]), (i = eP(f, t, l, s, void 0, i))),
                    (u = [(l = u)[1], o, 0, 0])))
            : "tableHead" === p.type
            ? ((c = !0), (d = o))
            : "tableRow" === p.type || "tableDelimiterRow" === p.type
            ? ((d = o),
              0 !== l[1]
                ? ((u[0] = u[1]), (i = eP(f, t, l, s, o, i)))
                : 0 !== u[1] && (i = eP(f, t, u, s, o, i)),
              (s = 0))
            : s &&
              ("data" === p.type ||
                "tableDelimiterMarker" === p.type ||
                "tableDelimiterFiller" === p.type) &&
              (u[3] = o);
        }
        for (
          0 !== d && e_(f, t, d, n, r), f.consume(t.events), o = -1;
          ++o < t.events.length;

        ) {
          let e = t.events[o];
          "enter" === e[0] &&
            "table" === e[1].type &&
            (e[1]._align = (function (e, t) {
              let n = !1,
                r = [];
              for (; t < e.length; ) {
                let i = e[t];
                if (n) {
                  if ("enter" === i[0])
                    "tableContent" === i[1].type &&
                      r.push(
                        "tableDelimiterMarker" === e[t + 1][1].type
                          ? "left"
                          : "none"
                      );
                  else if ("tableContent" === i[1].type) {
                    if ("tableDelimiterMarker" === e[t - 1][1].type) {
                      let e = r.length - 1;
                      r[e] = "left" === r[e] ? "center" : "right";
                    }
                  } else if ("tableDelimiterRow" === i[1].type) break;
                } else
                  "enter" === i[0] &&
                    "tableDelimiterRow" === i[1].type &&
                    (n = !0);
                t += 1;
              }
              return r;
            })(t.events, o));
        }
        return e;
      }
      function eP(e, t, n, r, i, o) {
        0 !== n[0] &&
          ((o.end = Object.assign({}, eI(t.events, n[0]))),
          e.add(n[0], 0, [["exit", o, t]]));
        let a = eI(t.events, n[1]);
        if (
          ((o = {
            type:
              1 === r
                ? "tableHeader"
                : 2 === r
                ? "tableDelimiter"
                : "tableData",
            start: Object.assign({}, a),
            end: Object.assign({}, a),
          }),
          e.add(n[1], 0, [["enter", o, t]]),
          0 !== n[2])
        ) {
          let i = eI(t.events, n[2]),
            o = eI(t.events, n[3]),
            a = {
              type: "tableContent",
              start: Object.assign({}, i),
              end: Object.assign({}, o),
            };
          if ((e.add(n[2], 0, [["enter", a, t]]), 2 !== r)) {
            let r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = "chunkText"),
              (r[1].contentType = "text"),
              n[3] > n[2] + 1)
            ) {
              let t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [["exit", a, t]]);
        }
        return (
          void 0 !== i &&
            ((o.end = Object.assign({}, eI(t.events, i))),
            e.add(i, 0, [["exit", o, t]]),
            (o = void 0)),
          o
        );
      }
      function e_(e, t, n, r, i) {
        let o = [],
          a = eI(t.events, n);
        i && ((i.end = Object.assign({}, a)), o.push(["exit", i, t])),
          (r.end = Object.assign({}, a)),
          o.push(["exit", r, t]),
          e.add(n + 1, 0, o);
      }
      function eI(e, t) {
        let n = e[t],
          r = "enter" === n[0] ? "start" : "end";
        return n[1][r];
      }
      let eR = {
        name: "tasklistCheck",
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return null === r.previous && r._gfmTasklistFirstContentOfListItem
              ? (e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                i)
              : n(t);
          };
          function i(t) {
            return (0, o.z3)(t)
              ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(t),
                e.exit("taskListCheckValueUnchecked"),
                a)
              : 88 === t || 120 === t
              ? (e.enter("taskListCheckValueChecked"),
                e.consume(t),
                e.exit("taskListCheckValueChecked"),
                a)
              : n(t);
          }
          function a(t) {
            return 93 === t
              ? (e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                s)
              : n(t);
          }
          function s(r) {
            return (0, o.Ch)(r)
              ? t(r)
              : (0, o.xz)(r)
              ? e.check({ tokenize: eO }, t, n)(r)
              : n(r);
          }
        },
      };
      function eO(e, t, n) {
        return (0, em.f)(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          "whitespace"
        );
      }
      let eM = {};
      function eD(e) {
        let t = e || eM,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          o = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(
          (0, Z.W)([
            { text: es },
            {
              document: {
                91: {
                  name: "gfmFootnoteDefinition",
                  tokenize: ex,
                  continuation: { tokenize: ew },
                  exit: ek,
                },
              },
              text: {
                91: { name: "gfmFootnoteCall", tokenize: eb },
                93: {
                  name: "gfmPotentialFootnoteCall",
                  add: "after",
                  tokenize: ey,
                  resolveTo: ev,
                },
              },
            },
            (function (e) {
              let t = (e || {}).singleTilde,
                n = {
                  name: "strikethrough",
                  tokenize: function (e, n, r) {
                    let i = this.previous,
                      o = this.events,
                      a = 0;
                    return function (s) {
                      return 126 === i &&
                        "characterEscape" !== o[o.length - 1][1].type
                        ? r(s)
                        : (e.enter("strikethroughSequenceTemporary"),
                          (function o(s) {
                            let l = (0, F.r)(i);
                            if (126 === s)
                              return a > 1 ? r(s) : (e.consume(s), a++, o);
                            if (a < 2 && !t) return r(s);
                            let u = e.exit("strikethroughSequenceTemporary"),
                              c = (0, F.r)(s);
                            return (
                              (u._open = !c || (2 === c && !!l)),
                              (u._close = !l || (2 === l && !!c)),
                              n(s)
                            );
                          })(s));
                    };
                  },
                  resolveAll: function (e, t) {
                    let n = -1;
                    for (; ++n < e.length; )
                      if (
                        "enter" === e[n][0] &&
                        "strikethroughSequenceTemporary" === e[n][1].type &&
                        e[n][1]._close
                      ) {
                        let r = n;
                        for (; r--; )
                          if (
                            "exit" === e[r][0] &&
                            "strikethroughSequenceTemporary" === e[r][1].type &&
                            e[r][1]._open &&
                            e[n][1].end.offset - e[n][1].start.offset ==
                              e[r][1].end.offset - e[r][1].start.offset
                          ) {
                            (e[n][1].type = "strikethroughSequence"),
                              (e[r][1].type = "strikethroughSequence");
                            let i = {
                                type: "strikethrough",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[n][1].end),
                              },
                              o = {
                                type: "strikethroughText",
                                start: Object.assign({}, e[r][1].end),
                                end: Object.assign({}, e[n][1].start),
                              },
                              a = [
                                ["enter", i, t],
                                ["enter", e[r][1], t],
                                ["exit", e[r][1], t],
                                ["enter", o, t],
                              ],
                              s = t.parser.constructs.insideSpan.null;
                            s &&
                              (0, eE.d)(
                                a,
                                a.length,
                                0,
                                (0, eS.C)(s, e.slice(r + 1, n), t)
                              ),
                              (0, eE.d)(a, a.length, 0, [
                                ["exit", o, t],
                                ["enter", e[n][1], t],
                                ["exit", e[n][1], t],
                                ["exit", i, t],
                              ]),
                              (0, eE.d)(e, r - 1, n - r + 3, a),
                              (n = r + a.length - 2);
                            break;
                          }
                      }
                    for (n = -1; ++n < e.length; )
                      "strikethroughSequenceTemporary" === e[n][1].type &&
                        (e[n][1].type = "data");
                    return e;
                  },
                };
              return (
                null == t && (t = !0),
                {
                  text: { 126: n },
                  insideSpan: { null: [n] },
                  attentionMarkers: { null: [126] },
                }
              );
            })(t),
            { flow: { null: { name: "table", tokenize: eA, resolveAll: eC } } },
            { text: { 91: eR } },
          ])
        ),
          i.push([
            {
              transforms: [g],
              enter: {
                literalAutolink: c,
                literalAutolinkEmail: d,
                literalAutolinkHttp: d,
                literalAutolinkWww: d,
              },
              exit: {
                literalAutolink: m,
                literalAutolinkEmail: p,
                literalAutolinkHttp: f,
                literalAutolinkWww: h,
              },
            },
            {
              enter: {
                gfmFootnoteDefinition: w,
                gfmFootnoteDefinitionLabelString: k,
                gfmFootnoteCall: T,
                gfmFootnoteCallString: A,
              },
              exit: {
                gfmFootnoteDefinition: S,
                gfmFootnoteDefinitionLabelString: E,
                gfmFootnoteCall: P,
                gfmFootnoteCallString: C,
              },
            },
            {
              canContainEols: ["delete"],
              enter: { strikethrough: M },
              exit: { strikethrough: D },
            },
            {
              enter: { table: U, tableData: Y, tableHeader: Y, tableRow: W },
              exit: {
                codeText: X,
                table: H,
                tableData: $,
                tableHeader: $,
                tableRow: $,
              },
            },
            {
              exit: {
                taskListCheckValueChecked: G,
                taskListCheckValueUnchecked: G,
                paragraph: K,
              },
            },
          ]),
          o.push({
            extensions: [
              {
                unsafe: [
                  {
                    character: "@",
                    before: "[+\\-.\\w]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: u,
                  },
                  {
                    character: ".",
                    before: "[Ww]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: u,
                  },
                  {
                    character: ":",
                    before: "[ps]",
                    after: "\\/",
                    inConstruct: l,
                    notInConstruct: u,
                  },
                ],
              },
              {
                unsafe: [
                  {
                    character: "[",
                    inConstruct: ["phrasing", "label", "reference"],
                  },
                ],
                handlers: { footnoteDefinition: I, footnoteReference: _ },
              },
              {
                unsafe: [
                  {
                    character: "~",
                    inConstruct: "phrasing",
                    notInConstruct: O,
                  },
                ],
                handlers: { delete: j },
              },
              (function (e) {
                let t = e || {},
                  n = t.tableCellPadding,
                  r = t.tablePipeAlign,
                  i = t.stringLength,
                  o = n ? " " : "|";
                return {
                  unsafe: [
                    { character: "\r", inConstruct: "tableCell" },
                    { character: "\n", inConstruct: "tableCell" },
                    { atBreak: !0, character: "|", after: "[	 :-]" },
                    { character: "|", inConstruct: "tableCell" },
                    { atBreak: !0, character: ":", after: "-" },
                    { atBreak: !0, character: "-", after: "[:|-]" },
                  ],
                  handlers: {
                    inlineCode: function (e, t, n) {
                      let r = B.inlineCode(e, t, n);
                      return (
                        n.stack.includes("tableCell") &&
                          (r = r.replace(/\|/g, "\\$&")),
                        r
                      );
                    },
                    table: function (e, t, n, r) {
                      return s(
                        (function (e, t, n) {
                          let r = e.children,
                            i = -1,
                            o = [],
                            a = t.enter("table");
                          for (; ++i < r.length; ) o[i] = l(r[i], t, n);
                          return a(), o;
                        })(e, n, r),
                        e.align
                      );
                    },
                    tableCell: a,
                    tableRow: function (e, t, n, r) {
                      let i = s([l(e, n, r)]);
                      return i.slice(0, i.indexOf("\n"));
                    },
                  },
                };
                function a(e, t, n, r) {
                  let i = n.enter("tableCell"),
                    a = n.enter("phrasing"),
                    s = n.containerPhrasing(e, { ...r, before: o, after: o });
                  return a(), i(), s;
                }
                function s(e, t) {
                  return (function (e, t) {
                    let n = t || {},
                      r = (n.align || []).concat(),
                      i = n.stringLength || L,
                      o = [],
                      a = [],
                      s = [],
                      l = [],
                      u = 0,
                      c = -1;
                    for (; ++c < e.length; ) {
                      let t = [],
                        r = [],
                        o = -1;
                      for (
                        e[c].length > u && (u = e[c].length);
                        ++o < e[c].length;

                      ) {
                        var d;
                        let a = null == (d = e[c][o]) ? "" : String(d);
                        if (!1 !== n.alignDelimiters) {
                          let e = i(a);
                          (r[o] = e),
                            (void 0 === l[o] || e > l[o]) && (l[o] = e);
                        }
                        t.push(a);
                      }
                      (a[c] = t), (s[c] = r);
                    }
                    let f = -1;
                    if ("object" == typeof r && "length" in r)
                      for (; ++f < u; ) o[f] = N(r[f]);
                    else {
                      let e = N(r);
                      for (; ++f < u; ) o[f] = e;
                    }
                    f = -1;
                    let h = [],
                      p = [];
                    for (; ++f < u; ) {
                      let e = o[f],
                        t = "",
                        r = "";
                      99 === e
                        ? ((t = ":"), (r = ":"))
                        : 108 === e
                        ? (t = ":")
                        : 114 === e && (r = ":");
                      let i =
                          !1 === n.alignDelimiters
                            ? 1
                            : Math.max(1, l[f] - t.length - r.length),
                        a = t + "-".repeat(i) + r;
                      !1 !== n.alignDelimiters &&
                        ((i = t.length + i + r.length) > l[f] && (l[f] = i),
                        (p[f] = i)),
                        (h[f] = a);
                    }
                    a.splice(1, 0, h), s.splice(1, 0, p), (c = -1);
                    let m = [];
                    for (; ++c < a.length; ) {
                      let e = a[c],
                        t = s[c];
                      f = -1;
                      let r = [];
                      for (; ++f < u; ) {
                        let i = e[f] || "",
                          a = "",
                          s = "";
                        if (!1 !== n.alignDelimiters) {
                          let e = l[f] - (t[f] || 0),
                            n = o[f];
                          114 === n
                            ? (a = " ".repeat(e))
                            : 99 === n
                            ? e % 2
                              ? ((a = " ".repeat(e / 2 + 0.5)),
                                (s = " ".repeat(e / 2 - 0.5)))
                              : (s = a = " ".repeat(e / 2))
                            : (s = " ".repeat(e));
                        }
                        !1 === n.delimiterStart || f || r.push("|"),
                          !1 !== n.padding &&
                            !(!1 === n.alignDelimiters && "" === i) &&
                            (!1 !== n.delimiterStart || f) &&
                            r.push(" "),
                          !1 !== n.alignDelimiters && r.push(a),
                          r.push(i),
                          !1 !== n.alignDelimiters && r.push(s),
                          !1 !== n.padding && r.push(" "),
                          (!1 !== n.delimiterEnd || f !== u - 1) && r.push("|");
                      }
                      m.push(
                        !1 === n.delimiterEnd
                          ? r.join("").replace(/ +$/, "")
                          : r.join("")
                      );
                    }
                    return m.join("\n");
                  })(e, {
                    align: t,
                    alignDelimiters: r,
                    padding: n,
                    stringLength: i,
                  });
                }
                function l(e, t, n) {
                  let r = e.children,
                    i = -1,
                    o = [],
                    s = t.enter("tableRow");
                  for (; ++i < r.length; ) o[i] = a(r[i], e, t, n);
                  return s(), o;
                }
              })(t),
              {
                unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                handlers: { listItem: J },
              },
            ],
          });
      }
    },
    7776: (e, t, n) => {
      "use strict";
      n.d(t, { Am: () => s });
      var r = n(2265);
      n(4887), Array(12).fill(0);
      var i = 1,
        o = new (class {
          constructor() {
            (this.subscribe = (e) => (
              this.subscribers.push(e),
              () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1);
              }
            )),
              (this.publish = (e) => {
                this.subscribers.forEach((t) => t(e));
              }),
              (this.addToast = (e) => {
                this.publish(e), (this.toasts = [...this.toasts, e]);
              }),
              (this.create = (e) => {
                var t;
                let { message: n, ...r } = e,
                  o =
                    "number" == typeof (null == e ? void 0 : e.id) ||
                    (null == (t = e.id) ? void 0 : t.length) > 0
                      ? e.id
                      : i++,
                  a = this.toasts.find((e) => e.id === o),
                  s = void 0 === e.dismissible || e.dismissible;
                return (
                  a
                    ? (this.toasts = this.toasts.map((t) =>
                        t.id === o
                          ? (this.publish({ ...t, ...e, id: o, title: n }),
                            { ...t, ...e, id: o, dismissible: s, title: n })
                          : t
                      ))
                    : this.addToast({ title: n, ...r, dismissible: s, id: o }),
                  o
                );
              }),
              (this.dismiss = (e) => (
                e ||
                  this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) =>
                      t({ id: e.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                e
              )),
              (this.message = (e, t) => this.create({ ...t, message: e })),
              (this.error = (e, t) =>
                this.create({ ...t, message: e, type: "error" })),
              (this.success = (e, t) =>
                this.create({ ...t, type: "success", message: e })),
              (this.info = (e, t) =>
                this.create({ ...t, type: "info", message: e })),
              (this.warning = (e, t) =>
                this.create({ ...t, type: "warning", message: e })),
              (this.loading = (e, t) =>
                this.create({ ...t, type: "loading", message: e })),
              (this.promise = (e, t) => {
                let n;
                if (!t) return;
                void 0 !== t.loading &&
                  (n = this.create({
                    ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description:
                      "function" != typeof t.description
                        ? t.description
                        : void 0,
                  }));
                let i = e instanceof Promise ? e : e(),
                  o = void 0 !== n,
                  s,
                  l = i
                    .then(async (e) => {
                      if (((s = ["resolve", e]), r.isValidElement(e)))
                        (o = !1),
                          this.create({ id: n, type: "default", message: e });
                      else if (a(e) && !e.ok) {
                        o = !1;
                        let r =
                            "function" == typeof t.error
                              ? await t.error(
                                  "HTTP error! status: ".concat(e.status)
                                )
                              : t.error,
                          i =
                            "function" == typeof t.description
                              ? await t.description(
                                  "HTTP error! status: ".concat(e.status)
                                )
                              : t.description;
                        this.create({
                          id: n,
                          type: "error",
                          message: r,
                          description: i,
                        });
                      } else if (void 0 !== t.success) {
                        o = !1;
                        let r =
                            "function" == typeof t.success
                              ? await t.success(e)
                              : t.success,
                          i =
                            "function" == typeof t.description
                              ? await t.description(e)
                              : t.description;
                        this.create({
                          id: n,
                          type: "success",
                          message: r,
                          description: i,
                        });
                      }
                    })
                    .catch(async (e) => {
                      if (((s = ["reject", e]), void 0 !== t.error)) {
                        o = !1;
                        let r =
                            "function" == typeof t.error
                              ? await t.error(e)
                              : t.error,
                          i =
                            "function" == typeof t.description
                              ? await t.description(e)
                              : t.description;
                        this.create({
                          id: n,
                          type: "error",
                          message: r,
                          description: i,
                        });
                      }
                    })
                    .finally(() => {
                      var e;
                      o && (this.dismiss(n), (n = void 0)),
                        null == (e = t.finally) || e.call(t);
                    }),
                  u = () =>
                    new Promise((e, t) =>
                      l
                        .then(() => ("reject" === s[0] ? t(s[1]) : e(s[1])))
                        .catch(t)
                    );
                return "string" != typeof n && "number" != typeof n
                  ? { unwrap: u }
                  : Object.assign(n, { unwrap: u });
              }),
              (this.custom = (e, t) => {
                let n = (null == t ? void 0 : t.id) || i++;
                return this.create({ jsx: e(n), id: n, ...t }), n;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        a = (e) =>
          e &&
          "object" == typeof e &&
          "ok" in e &&
          "boolean" == typeof e.ok &&
          "status" in e &&
          "number" == typeof e.status,
        s = Object.assign(
          (e, t) => {
            let n = (null == t ? void 0 : t.id) || i++;
            return o.addToast({ title: e, ...t, id: n }), n;
          },
          {
            success: o.success,
            info: o.info,
            warning: o.warning,
            error: o.error,
            custom: o.custom,
            message: o.message,
            promise: o.promise,
            dismiss: o.dismiss,
            loading: o.loading,
          },
          { getHistory: () => o.toasts }
        );
      !(function (e) {
        let { insertAt: t } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e || "undefined" == typeof document) return;
        let n = document.head || document.getElementsByTagName("head")[0],
          r = document.createElement("style");
        (r.type = "text/css"),
          "top" === t && n.firstChild
            ? n.insertBefore(r, n.firstChild)
            : n.appendChild(r),
          r.styleSheet
            ? (r.styleSheet.cssText = e)
            : r.appendChild(document.createTextNode(e));
      })(
        ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
      );
    },
    6164: (e, t, n) => {
      "use strict";
      n.d(t, { m6: () => G });
      let r = (e) => {
          let t = s(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } =
              e;
          return {
            getClassGroupId: (e) => {
              let n = e.split("-");
              return (
                "" === n[0] && 1 !== n.length && n.shift(), i(n, t) || a(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let i = n[e] || [];
              return t && r[e] ? [...i, ...r[e]] : i;
            },
          };
        },
        i = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let n = e[0],
            r = t.nextPart.get(n),
            o = r ? i(e.slice(1), r) : void 0;
          if (o) return o;
          if (0 === t.validators.length) return;
          let a = e.join("-");
          return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
        },
        o = /^\[(.+)\]$/,
        a = (e) => {
          if (o.test(e)) {
            let t = o.exec(e)[1],
              n = t?.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
          }
        },
        s = (e) => {
          let { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), n).forEach(([e, n]) => {
              l(n, r, e, t);
            }),
            r
          );
        },
        l = (e, t, n, r) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : u(t, e)).classGroupId = n;
              return;
            }
            if ("function" == typeof e) {
              if (c(e)) {
                l(e(r), t, n, r);
                return;
              }
              t.validators.push({ validator: e, classGroupId: n });
              return;
            }
            Object.entries(e).forEach(([e, i]) => {
              l(i, u(t, e), n, r);
            });
          });
        },
        u = (e, t) => {
          let n = e;
          return (
            t.split("-").forEach((e) => {
              n.nextPart.has(e) ||
                n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (n = n.nextPart.get(e));
            }),
            n
          );
        },
        c = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, n]) => [
                e,
                n.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, n]) => [t + e, n])
                      )
                    : e
                ),
              ])
            : e,
        f = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            n = new Map(),
            r = new Map(),
            i = (i, o) => {
              n.set(i, o), ++t > e && ((t = 0), (r = n), (n = new Map()));
            };
          return {
            get(e) {
              let t = n.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = r.get(e))
                ? (i(e, t), t)
                : void 0;
            },
            set(e, t) {
              n.has(e) ? n.set(e, t) : i(e, t);
            },
          };
        },
        h = (e) => {
          let { separator: t, experimentalParseClassName: n } = e,
            r = 1 === t.length,
            i = t[0],
            o = t.length,
            a = (e) => {
              let n;
              let a = [],
                s = 0,
                l = 0;
              for (let u = 0; u < e.length; u++) {
                let c = e[u];
                if (0 === s) {
                  if (c === i && (r || e.slice(u, u + o) === t)) {
                    a.push(e.slice(l, u)), (l = u + o);
                    continue;
                  }
                  if ("/" === c) {
                    n = u;
                    continue;
                  }
                }
                "[" === c ? s++ : "]" === c && s--;
              }
              let u = 0 === a.length ? e : e.substring(l),
                c = u.startsWith("!"),
                d = c ? u.substring(1) : u;
              return {
                modifiers: a,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: n && n > l ? n - l : void 0,
              };
            };
          return n ? (e) => n({ className: e, parseClassName: a }) : a;
        },
        p = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            n = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...n.sort(), e), (n = [])) : n.push(e);
            }),
            t.push(...n.sort()),
            t
          );
        },
        m = (e) => ({ cache: f(e.cacheSize), parseClassName: h(e), ...r(e) }),
        g = /\s+/,
        y = (e, t) => {
          let {
              parseClassName: n,
              getClassGroupId: r,
              getConflictingClassGroupIds: i,
            } = t,
            o = [],
            a = e.trim().split(g),
            s = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                modifiers: l,
                hasImportantModifier: u,
                baseClassName: c,
                maybePostfixModifierPosition: d,
              } = n(t),
              f = !!d,
              h = r(f ? c.substring(0, d) : c);
            if (!h) {
              if (!f || !(h = r(c))) {
                s = t + (s.length > 0 ? " " + s : s);
                continue;
              }
              f = !1;
            }
            let m = p(l).join(":"),
              g = u ? m + "!" : m,
              y = g + h;
            if (o.includes(y)) continue;
            o.push(y);
            let v = i(h, f);
            for (let e = 0; e < v.length; ++e) {
              let t = v[e];
              o.push(g + t);
            }
            s = t + (s.length > 0 ? " " + s : s);
          }
          return s;
        };
      function v() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) && (t = b(e)) && (r && (r += " "), (r += t));
        return r;
      }
      let b = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let n = "";
          for (let r = 0; r < e.length; r++)
            e[r] && (t = b(e[r])) && (n && (n += " "), (n += t));
          return n;
        },
        x = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        k = /^\d+\/\d+$/,
        E = new Set(["px", "full", "screen"]),
        S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        T =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        A = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        P =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        _ = (e) => R(e) || E.has(e) || k.test(e),
        I = (e) => W(e, "length", $),
        R = (e) => !!e && !Number.isNaN(Number(e)),
        O = (e) => W(e, "number", R),
        M = (e) => !!e && Number.isInteger(Number(e)),
        D = (e) => e.endsWith("%") && R(e.slice(0, -1)),
        j = (e) => w.test(e),
        L = (e) => S.test(e),
        N = new Set(["length", "size", "percentage"]),
        F = (e) => W(e, N, Y),
        z = (e) => W(e, "position", Y),
        V = new Set(["image", "url"]),
        B = (e) => W(e, V, q),
        U = (e) => W(e, "", X),
        H = () => !0,
        W = (e, t, n) => {
          let r = w.exec(e);
          return (
            !!r &&
            (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
          );
        },
        $ = (e) => T.test(e) && !A.test(e),
        Y = () => !1,
        X = (e) => C.test(e),
        q = (e) => P.test(e);
      Symbol.toStringTag;
      let G = (function (e, ...t) {
        let n, r, i;
        let o = function (s) {
          return (
            (r = (n = m(t.reduce((e, t) => t(e), e()))).cache.get),
            (i = n.cache.set),
            (o = a),
            a(s)
          );
        };
        function a(e) {
          let t = r(e);
          if (t) return t;
          let o = y(e, n);
          return i(e, o), o;
        }
        return function () {
          return o(v.apply(null, arguments));
        };
      })(() => {
        let e = x("colors"),
          t = x("spacing"),
          n = x("blur"),
          r = x("brightness"),
          i = x("borderColor"),
          o = x("borderRadius"),
          a = x("borderSpacing"),
          s = x("borderWidth"),
          l = x("contrast"),
          u = x("grayscale"),
          c = x("hueRotate"),
          d = x("invert"),
          f = x("gap"),
          h = x("gradientColorStops"),
          p = x("gradientColorStopPositions"),
          m = x("inset"),
          g = x("margin"),
          y = x("opacity"),
          v = x("padding"),
          b = x("saturate"),
          w = x("scale"),
          k = x("sepia"),
          E = x("skew"),
          S = x("space"),
          T = x("translate"),
          A = () => ["auto", "contain", "none"],
          C = () => ["auto", "hidden", "clip", "visible", "scroll"],
          P = () => ["auto", j, t],
          N = () => [j, t],
          V = () => ["", _, I],
          W = () => ["auto", R, j],
          $ = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          Y = () => ["solid", "dashed", "dotted", "double", "none"],
          X = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          q = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          G = () => ["", "0", j],
          K = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          J = () => [R, j];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [H],
            spacing: [_, I],
            blur: ["none", "", L, j],
            brightness: J(),
            borderColor: [e],
            borderRadius: ["none", "", "full", L, j],
            borderSpacing: N(),
            borderWidth: V(),
            contrast: J(),
            grayscale: G(),
            hueRotate: J(),
            invert: G(),
            gap: N(),
            gradientColorStops: [e],
            gradientColorStopPositions: [D, I],
            inset: P(),
            margin: P(),
            opacity: J(),
            padding: N(),
            saturate: J(),
            scale: J(),
            sepia: G(),
            skew: J(),
            space: N(),
            translate: N(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", j] }],
            container: ["container"],
            columns: [{ columns: [L] }],
            "break-after": [{ "break-after": K() }],
            "break-before": [{ "break-before": K() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...$(), j] }],
            overflow: [{ overflow: C() }],
            "overflow-x": [{ "overflow-x": C() }],
            "overflow-y": [{ "overflow-y": C() }],
            overscroll: [{ overscroll: A() }],
            "overscroll-x": [{ "overscroll-x": A() }],
            "overscroll-y": [{ "overscroll-y": A() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [m] }],
            "inset-x": [{ "inset-x": [m] }],
            "inset-y": [{ "inset-y": [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", M, j] }],
            basis: [{ basis: P() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", j] }],
            grow: [{ grow: G() }],
            shrink: [{ shrink: G() }],
            order: [{ order: ["first", "last", "none", M, j] }],
            "grid-cols": [{ "grid-cols": [H] }],
            "col-start-end": [{ col: ["auto", { span: ["full", M, j] }, j] }],
            "col-start": [{ "col-start": W() }],
            "col-end": [{ "col-end": W() }],
            "grid-rows": [{ "grid-rows": [H] }],
            "row-start-end": [{ row: ["auto", { span: [M, j] }, j] }],
            "row-start": [{ "row-start": W() }],
            "row-end": [{ "row-end": W() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...q()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...q(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...q(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [v] }],
            px: [{ px: [v] }],
            py: [{ py: [v] }],
            ps: [{ ps: [v] }],
            pe: [{ pe: [v] }],
            pt: [{ pt: [v] }],
            pr: [{ pr: [v] }],
            pb: [{ pb: [v] }],
            pl: [{ pl: [v] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [S] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [S] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", j, t] },
            ],
            "min-w": [{ "min-w": [j, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  j,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [L] },
                  L,
                ],
              },
            ],
            h: [
              { h: [j, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [j, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [j, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [j, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", L, I] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  O,
                ],
              },
            ],
            "font-family": [{ font: [H] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  j,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", R, O] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  _,
                  j,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", j] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [y] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [y] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...Y(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", _, I] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", _, j] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: N() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  j,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", j] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [y] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...$(), z] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", F] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  B,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [p] }],
            "gradient-via-pos": [{ via: [p] }],
            "gradient-to-pos": [{ to: [p] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [o] }],
            "rounded-s": [{ "rounded-s": [o] }],
            "rounded-e": [{ "rounded-e": [o] }],
            "rounded-t": [{ "rounded-t": [o] }],
            "rounded-r": [{ "rounded-r": [o] }],
            "rounded-b": [{ "rounded-b": [o] }],
            "rounded-l": [{ "rounded-l": [o] }],
            "rounded-ss": [{ "rounded-ss": [o] }],
            "rounded-se": [{ "rounded-se": [o] }],
            "rounded-ee": [{ "rounded-ee": [o] }],
            "rounded-es": [{ "rounded-es": [o] }],
            "rounded-tl": [{ "rounded-tl": [o] }],
            "rounded-tr": [{ "rounded-tr": [o] }],
            "rounded-br": [{ "rounded-br": [o] }],
            "rounded-bl": [{ "rounded-bl": [o] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [y] }],
            "border-style": [{ border: [...Y(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [y] }],
            "divide-style": [{ divide: Y() }],
            "border-color": [{ border: [i] }],
            "border-color-x": [{ "border-x": [i] }],
            "border-color-y": [{ "border-y": [i] }],
            "border-color-s": [{ "border-s": [i] }],
            "border-color-e": [{ "border-e": [i] }],
            "border-color-t": [{ "border-t": [i] }],
            "border-color-r": [{ "border-r": [i] }],
            "border-color-b": [{ "border-b": [i] }],
            "border-color-l": [{ "border-l": [i] }],
            "divide-color": [{ divide: [i] }],
            "outline-style": [{ outline: ["", ...Y()] }],
            "outline-offset": [{ "outline-offset": [_, j] }],
            "outline-w": [{ outline: [_, I] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: V() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [y] }],
            "ring-offset-w": [{ "ring-offset": [_, I] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", L, U] }],
            "shadow-color": [{ shadow: [H] }],
            opacity: [{ opacity: [y] }],
            "mix-blend": [
              { "mix-blend": [...X(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": X() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", L, j] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [b] }],
            sepia: [{ sepia: [k] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [y] }],
            "backdrop-saturate": [{ "backdrop-saturate": [b] }],
            "backdrop-sepia": [{ "backdrop-sepia": [k] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  j,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", j] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [M, j] }],
            "translate-x": [{ "translate-x": [T] }],
            "translate-y": [{ "translate-y": [T] }],
            "skew-x": [{ "skew-x": [E] }],
            "skew-y": [{ "skew-y": [E] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  j,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  j,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": N() }],
            "scroll-mx": [{ "scroll-mx": N() }],
            "scroll-my": [{ "scroll-my": N() }],
            "scroll-ms": [{ "scroll-ms": N() }],
            "scroll-me": [{ "scroll-me": N() }],
            "scroll-mt": [{ "scroll-mt": N() }],
            "scroll-mr": [{ "scroll-mr": N() }],
            "scroll-mb": [{ "scroll-mb": N() }],
            "scroll-ml": [{ "scroll-ml": N() }],
            "scroll-p": [{ "scroll-p": N() }],
            "scroll-px": [{ "scroll-px": N() }],
            "scroll-py": [{ "scroll-py": N() }],
            "scroll-ps": [{ "scroll-ps": N() }],
            "scroll-pe": [{ "scroll-pe": N() }],
            "scroll-pt": [{ "scroll-pt": N() }],
            "scroll-pr": [{ "scroll-pr": N() }],
            "scroll-pb": [{ "scroll-pb": N() }],
            "scroll-pl": [{ "scroll-pl": N() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", j] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [_, I, O] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
    5373: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => r });
      let r = function (e) {
        if (null == e) return o;
        if ("function" == typeof e) return i(e);
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = r(e[n]);
                return i(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : i(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("string" == typeof e)
          return i(function (t) {
            return t && t.type === e;
          });
        throw Error("Expected function, string, or object as test");
      };
      function i(e) {
        return function (t, n, r) {
          var i;
          return !!(
            null !== (i = t) &&
            "object" == typeof i &&
            "type" in i &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function o() {
        return !0;
      }
    },
    3053: (e, t, n) => {
      "use strict";
      n.d(t, { BK: () => o, S4: () => a });
      var r = n(5373);
      let i = [],
        o = !1;
      function a(e, t, n, a) {
        let s;
        "function" == typeof t && "function" != typeof n
          ? ((a = n), (n = t))
          : (s = t);
        let l = (0, r.O)(s),
          u = a ? -1 : 1;
        (function e(r, s, c) {
          let d = r && "object" == typeof r ? r : {};
          if ("string" == typeof d.type) {
            let e =
              "string" == typeof d.tagName
                ? d.tagName
                : "string" == typeof d.name
                ? d.name
                : void 0;
            Object.defineProperty(f, "name", {
              value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")",
            });
          }
          return f;
          function f() {
            var d;
            let f,
              h,
              p,
              m = i;
            if (
              (!t || l(r, s, c[c.length - 1] || void 0)) &&
              (m = Array.isArray((d = n(r, c)))
                ? d
                : "number" == typeof d
                ? [!0, d]
                : null == d
                ? i
                : [d])[0] === o
            )
              return m;
            if ("children" in r && r.children && r.children && "skip" !== m[0])
              for (
                h = (a ? r.children.length : -1) + u, p = c.concat(r);
                h > -1 && h < r.children.length;

              ) {
                if ((f = e(r.children[h], h, p)())[0] === o) return f;
                h = "number" == typeof f[1] ? f[1] : h + u;
              }
            return m;
          }
        })(e, void 0, [])();
      }
    },
    5514: (e, t, n) => {
      "use strict";
      n.d(t, { Vn: () => i });
      var r = n(3053);
      function i(e, t, n, i) {
        let o, a, s;
        "function" == typeof t && "function" != typeof n
          ? ((a = void 0), (s = t), (o = n))
          : ((a = t), (s = n), (o = i)),
          (0, r.S4)(
            e,
            a,
            function (e, t) {
              let n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return s(e, r, n);
            },
            o
          );
      }
    },
    750: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => u, iP: () => d });
      var r = n(2265),
        i = n(2151),
        o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
      function a(e, t, n, i) {
        let a = (0, r.useRef)(t);
        o(() => {
          a.current = t;
        }, [t]),
          (0, r.useEffect)(() => {
            let t = (null == n ? void 0 : n.current) ?? window;
            if (!(t && t.addEventListener)) return;
            let r = (e) => {
              a.current(e);
            };
            return (
              t.addEventListener(e, r, i),
              () => {
                t.removeEventListener(e, r, i);
              }
            );
          }, [e, n, i]);
      }
      function s(e) {
        let t = (0, r.useRef)(() => {
          throw Error("Cannot call an event handler while rendering.");
        });
        return (
          o(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)(
            (...e) => {
              var n;
              return null == (n = t.current) ? void 0 : n.call(t, ...e);
            },
            [t]
          )
        );
      }
      var l = "undefined" == typeof window;
      function u(e, t, n = {}) {
        let { initializeWithValue: i = !0 } = n,
          o = (0, r.useCallback)(
            (e) => (n.serializer ? n.serializer(e) : JSON.stringify(e)),
            [n]
          ),
          c = (0, r.useCallback)(
            (e) => {
              let r;
              if (n.deserializer) return n.deserializer(e);
              if ("undefined" === e) return;
              let i = t instanceof Function ? t() : t;
              try {
                r = JSON.parse(e);
              } catch (e) {
                return console.error("Error parsing JSON:", e), i;
              }
              return r;
            },
            [n, t]
          ),
          d = (0, r.useCallback)(() => {
            let n = t instanceof Function ? t() : t;
            if (l) return n;
            try {
              let t = window.localStorage.getItem(e);
              return t ? c(t) : n;
            } catch (t) {
              return (
                console.warn(
                  `Error reading localStorage key \u201C${e}\u201D:`,
                  t
                ),
                n
              );
            }
          }, [t, e, c]),
          [f, h] = (0, r.useState)(() =>
            i ? d() : t instanceof Function ? t() : t
          ),
          p = s((t) => {
            l &&
              console.warn(
                `Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`
              );
            try {
              let n = t instanceof Function ? t(d()) : t;
              window.localStorage.setItem(e, o(n)),
                h(n),
                window.dispatchEvent(
                  new StorageEvent("local-storage", { key: e })
                );
            } catch (t) {
              console.warn(
                `Error setting localStorage key \u201C${e}\u201D:`,
                t
              );
            }
          }),
          m = s(() => {
            l &&
              console.warn(
                `Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`
              );
            let n = t instanceof Function ? t() : t;
            window.localStorage.removeItem(e),
              h(n),
              window.dispatchEvent(
                new StorageEvent("local-storage", { key: e })
              );
          });
        (0, r.useEffect)(() => {
          h(d());
        }, [e]);
        let g = (0, r.useCallback)(
          (t) => {
            (t.key && t.key !== e) || h(d());
          },
          [e, d]
        );
        return a("storage", g), a("local-storage", g), [f, p, m];
      }
      var c = "undefined" == typeof window;
      function d(e = {}) {
        let { initializeWithValue: t = !0 } = e;
        c && (t = !1);
        let [n, s] = (0, r.useState)(() =>
            t
              ? { width: window.innerWidth, height: window.innerHeight }
              : { width: void 0, height: void 0 }
          ),
          l = (function (e, t = 500, n) {
            let o = (0, r.useRef)();
            !(function (e) {
              let t = (0, r.useRef)(e);
              (t.current = e),
                (0, r.useEffect)(
                  () => () => {
                    t.current();
                  },
                  []
                );
            })(() => {
              o.current && o.current.cancel();
            });
            let a = (0, r.useMemo)(() => {
              let n = i(e, t, void 0),
                r = (...e) => n(...e);
              return (
                (r.cancel = () => {
                  n.cancel();
                }),
                (r.isPending = () => !!o.current),
                (r.flush = () => n.flush()),
                r
              );
            }, [e, t, void 0]);
            return (
              (0, r.useEffect)(() => {
                o.current = i(e, t, n);
              }, [e, t, n]),
              a
            );
          })(s, e.debounceDelay);
        function u() {
          (e.debounceDelay ? l : s)({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        return (
          a("resize", u),
          o(() => {
            u();
          }, []),
          n
        );
      }
    },
  },
]);
