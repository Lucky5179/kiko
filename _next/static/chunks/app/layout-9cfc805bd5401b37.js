(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    4881: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 9558)),
        Promise.resolve().then(n.t.bind(n, 4471, 23)),
        Promise.resolve().then(n.t.bind(n, 5214, 23));
    },
    9558: (e, t, n) => {
      "use strict";
      n.d(t, { ThemeProvider: () => y });
      var a = n(7437),
        o = n(2265),
        c = ["light", "dark"],
        l = "(prefers-color-scheme: dark)",
        r = "undefined" == typeof window,
        s = o.createContext(void 0),
        i = (e) =>
          o.useContext(s) ? e.children : o.createElement(d, { ...e }),
        m = ["light", "dark"],
        d = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: a = !0,
              enableColorScheme: r = !0,
              storageKey: i = "theme",
              themes: d = m,
              defaultTheme: y = a ? "system" : "light",
              attribute: b = "data-theme",
              value: g,
              children: S,
              nonce: p,
            } = e,
            [w, k] = o.useState(() => h(i, y)),
            [C, E] = o.useState(() => h(i)),
            T = g ? Object.values(g) : d,
            _ = o.useCallback((e) => {
              let t = e;
              if (!t) return;
              "system" === e && a && (t = v());
              let o = g ? g[t] : t,
                l = n ? f() : null,
                s = document.documentElement;
              if (
                ("class" === b
                  ? (s.classList.remove(...T), o && s.classList.add(o))
                  : o
                  ? s.setAttribute(b, o)
                  : s.removeAttribute(b),
                r)
              ) {
                let e = c.includes(y) ? y : null,
                  n = c.includes(t) ? t : e;
                s.style.colorScheme = n;
              }
              null == l || l();
            }, []),
            x = o.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(e) : e;
                k(t);
                try {
                  localStorage.setItem(i, t);
                } catch (e) {}
              },
              [t]
            ),
            L = o.useCallback(
              (e) => {
                E(v(e)), "system" === w && a && !t && _("system");
              },
              [w, t]
            );
          o.useEffect(() => {
            let e = window.matchMedia(l);
            return e.addListener(L), L(e), () => e.removeListener(L);
          }, [L]),
            o.useEffect(() => {
              let e = (e) => {
                e.key === i && x(e.newValue || y);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [x]),
            o.useEffect(() => {
              _(null != t ? t : w);
            }, [t, w]);
          let N = o.useMemo(
            () => ({
              theme: w,
              setTheme: x,
              forcedTheme: t,
              resolvedTheme: "system" === w ? C : w,
              themes: a ? [...d, "system"] : d,
              systemTheme: a ? C : void 0,
            }),
            [w, x, t, C, a, d]
          );
          return o.createElement(
            s.Provider,
            { value: N },
            o.createElement(u, {
              forcedTheme: t,
              disableTransitionOnChange: n,
              enableSystem: a,
              enableColorScheme: r,
              storageKey: i,
              themes: d,
              defaultTheme: y,
              attribute: b,
              value: g,
              children: S,
              attrs: T,
              nonce: p,
            }),
            S
          );
        },
        u = o.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: a,
              enableSystem: r,
              enableColorScheme: s,
              defaultTheme: i,
              value: m,
              attrs: d,
              nonce: u,
            } = e,
            h = "system" === i,
            f =
              "class" === a
                ? "var d=document.documentElement,c=d.classList;".concat(
                    "c.remove(".concat(
                      d.map((e) => "'".concat(e, "'")).join(","),
                      ")"
                    ),
                    ";"
                  )
                : "var d=document.documentElement,n='".concat(
                    a,
                    "',s='setAttribute';"
                  ),
            v = s
              ? (c.includes(i) ? i : null)
                ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
                    i,
                    "'"
                  )
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : "",
            y = function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                o = m ? m[e] : e,
                l = t ? e + "|| ''" : "'".concat(o, "'"),
                r = "";
              return (
                s &&
                  n &&
                  !t &&
                  c.includes(e) &&
                  (r += "d.style.colorScheme = '".concat(e, "';")),
                "class" === a
                  ? t || o
                    ? (r += "c.add(".concat(l, ")"))
                    : (r += "null")
                  : o && (r += "d[s](n,".concat(l, ")")),
                r
              );
            },
            b = t
              ? "!function(){".concat(f).concat(y(t), "}()")
              : r
              ? "!function(){try{"
                  .concat(f, "var e=localStorage.getItem('")
                  .concat(n, "');if('system'===e||(!e&&")
                  .concat(h, ")){var t='")
                  .concat(
                    l,
                    "',m=window.matchMedia(t);if(m.media!==t||m.matches){"
                  )
                  .concat(y("dark"), "}else{")
                  .concat(y("light"), "}}else if(e){")
                  .concat(m ? "var x=".concat(JSON.stringify(m), ";") : "")
                  .concat(y(m ? "x[e]" : "e", !0), "}")
                  .concat(h ? "" : "else{" + y(i, !1, !1) + "}")
                  .concat(v, "}catch(e){}}()")
              : "!function(){try{"
                  .concat(f, "var e=localStorage.getItem('")
                  .concat(n, "');if(e){")
                  .concat(m ? "var x=".concat(JSON.stringify(m), ";") : "")
                  .concat(y(m ? "x[e]" : "e", !0), "}else{")
                  .concat(y(i, !1, !1), ";}")
                  .concat(v, "}catch(t){}}();");
          return o.createElement("script", {
            nonce: u,
            dangerouslySetInnerHTML: { __html: b },
          });
        }),
        h = (e, t) => {
          let n;
          if (!r) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        f = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        v = (e) => (
          e || (e = window.matchMedia(l)), e.matches ? "dark" : "light"
        );
      function y(e) {
        let { children: t, ...n } = e;
        return (0, a.jsx)(i, { ...n, children: t });
      }
    },
    5214: () => {},
    4471: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Protest Revolution', 'Protest Revolution Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_d70eaf",
        variable: "__variable_d70eaf",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [547, 130, 215, 744], () => t(4881)), (_N_E = e.O());
  },
]);
