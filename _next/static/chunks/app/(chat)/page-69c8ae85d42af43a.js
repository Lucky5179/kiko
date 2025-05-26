(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [338],
  {
    3916: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 3941));
    },
    8567: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => j });
      var l = a(7437),
        s = a(3284),
        n = a(2265),
        i = a(6800),
        r = a.n(i),
        o = a(8590),
        c = a(7138),
        d = a(6446),
        u = a(4633);
      let m = (0, n.memo)(
        (e) => {
          let { children: t } = e;
          return (0, l.jsx)(d.U, {
            remarkPlugins: [u.Z],
            components: {
              code: (e) => {
                let { node: t, inline: a, className: s, children: n, ...i } = e,
                  r = /language-(\w+)/.exec(s || "");
                return !a && r
                  ? (0, l.jsx)("pre", {
                      ...i,
                      className: "".concat(
                        s,
                        " text-sm w-[80dvw] md:max-w-[500px] overflow-x-scroll bg-zinc-100 p-3 rounded-lg mt-2 dark:bg-zinc-800"
                      ),
                      children: (0, l.jsx)("code", {
                        className: r[1],
                        children: n,
                      }),
                    })
                  : (0, l.jsx)("code", {
                      className: "".concat(
                        s,
                        " text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md"
                      ),
                      ...i,
                      children: n,
                    });
              },
              ol: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("ol", {
                  className: "list-decimal list-outside ml-4",
                  ...s,
                  children: a,
                });
              },
              li: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("li", {
                  className: "py-1",
                  ...s,
                  children: a,
                });
              },
              ul: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("ul", {
                  className: "list-decimal list-outside ml-4",
                  ...s,
                  children: a,
                });
              },
              strong: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("span", {
                  className: "font-semibold",
                  ...s,
                  children: a,
                });
              },
              a: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)(c.default, {
                  className: "text-blue-500 hover:underline",
                  target: "_blank",
                  rel: "noreferrer",
                  ...s,
                  children: a,
                });
              },
              h1: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("h1", {
                  className: "text-3xl font-semibold mt-6 mb-2",
                  ...s,
                  children: a,
                });
              },
              h2: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("h2", {
                  className: "text-2xl font-semibold mt-6 mb-2",
                  ...s,
                  children: a,
                });
              },
              h3: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("h3", {
                  className: "text-xl font-semibold mt-6 mb-2",
                  ...s,
                  children: a,
                });
              },
              h4: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("h4", {
                  className: "text-lg font-semibold mt-6 mb-2",
                  ...s,
                  children: a,
                });
              },
              h5: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("h5", {
                  className: "text-base font-semibold mt-6 mb-2",
                  ...s,
                  children: a,
                });
              },
              h6: (e) => {
                let { node: t, children: a, ...s } = e;
                return (0, l.jsx)("h6", {
                  className: "text-sm font-semibold mt-6 mb-2",
                  ...s,
                  children: a,
                });
              },
            },
            children: t,
          });
        },
        (e, t) => e.children === t.children
      );
      var x = a(6648);
      let h = (e) => {
        let { role: t, content: a, toolInvocations: s, attachments: n } = e;
        return (0, l.jsx)(o.E.div, {
          className: "w-full mx-auto max-w-full group/message",
          initial: { y: 5, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          "data-role": t,
          children: (0, l.jsxs)("div", {
            className: r()("flex gap-4 w-full max-w-full py-1", {
              "justify-end": "user" === t,
            }),
            children: [
              "assistant" === t &&
                (0, l.jsx)("div", {
                  className:
                    "size-12 rounded-full bg-[#ddb76e] flex items-center justify-center",
                  children: (0, l.jsx)(x.default, {
                    src: "/kodok.gif",
                    alt: "Animation 1",
                    width: 100,
                    height: 100,
                    className:
                      "size-12 rounded-full bg-[#ddb76e] flex items-center justify-center",
                  }),
                }),
              (0, l.jsx)("div", {
                className: r()(
                  "flex flex-col gap-2 max-w-[80%] rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl px-4 py-2",
                  {
                    "bg-[#ddb76e]": "assistant" === t,
                    "bg-[#ffd08c]": "user" === t,
                  }
                ),
                children:
                  a &&
                  (0, l.jsx)("div", {
                    className: "flex flex-col gap-4 text-lg text-black",
                    children: (0, l.jsx)(m, { children: a }),
                  }),
              }),
            ],
          }),
        });
      };
      var g = a(7776),
        p = a(750),
        f = a(7440);
      let b = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, l.jsx)("textarea", {
          className: (0, f.cn)(
            "flex h-full w-full rounded-md bg-transparent focus:outline-none  ",
            a
          ),
          ref: t,
          ...s,
        });
      });
      function v(e) {
        let {
            input: t,
            setInput: a,
            isLoading: s,
            stop: i,
            attachments: o,
            setAttachments: c,
            messages: d,
            setMessages: u,
            append: m,
            handleSubmit: x,
            className: h,
            placeholder: f = "Type your message here...",
          } = e,
          v = (0, n.useRef)(null),
          { width: j } = (0, p.iP)(),
          [w, y] = (0, p._)("input", "");
        (0, n.useEffect)(() => {
          y(t);
        }, [t, y]),
          (0, n.useRef)(null);
        let [N, k] = (0, n.useState)([]),
          E = (0, n.useCallback)(() => {
            if (
              (x(void 0, { experimental_attachments: o }),
              c([]),
              y(""),
              j && j > 768)
            ) {
              var e;
              null === (e = v.current) || void 0 === e || e.focus();
            }
          }, [o, x, c, y, j]);
        return (0, l.jsx)("div", {
          className: "relative w-full flex flex-col bg-transparent",
          children: (0, l.jsx)("div", {
            className: "flex justify-center items-center gap-4 w-full",
            children: (0, l.jsx)(b, {
              ref: v,
              value: t,
              onChange: (e) => {
                a(e.target.value);
              },
              placeholder: f,
              className: r()(
                "h-full overflow-hidden resize-none rounded-xl text-lg relative z-20",
                h
              ),
              rows: 3,
              onKeyDown: (e) => {
                "Enter" !== e.key ||
                  e.shiftKey ||
                  (e.preventDefault(),
                  s
                    ? g.Am.error(
                        "Please wait for the model to finish its response!"
                      )
                    : E());
              },
            }),
          }),
        });
      }
      function j(e) {
        let { id: t, initialMessages: a, selectedModelId: i } = e,
          {
            messages: r,
            setMessages: o,
            handleSubmit: c,
            input: d,
            setInput: u,
            append: m,
            isLoading: x,
            stop: g,
            data: p,
          } = (0, s.RJ)({ body: { id: t, modelId: i }, initialMessages: a }),
          [f, b] = (0, n.useState)([]),
          j = (0, n.useRef)(null),
          [w, y] = (0, n.useState)(!0),
          [N, k] = (0, n.useState)(!0),
          E = () => {
            let e = j.current;
            e && k(e.scrollHeight - e.scrollTop - e.clientHeight < 100);
          },
          z = () => {
            let e = j.current;
            e &&
              (w || N) &&
              e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
          };
        return (
          (0, n.useEffect)(() => {
            z();
          }, [r, N, w, z]),
          (0, l.jsx)("div", {
            className:
              "absolute left-2 lg:left-[17%] md:left-[18%] bottom-[14%] lg:bottom-[120px] w-[95%] md:w-[63%]",
            children: (0, l.jsxs)("div", {
              className: "relative w-full h-full",
              style: {},
              children: [
                (0, l.jsx)("div", {
                  ref: j,
                  onScroll: () => {
                    E();
                    let e = j.current;
                    e && y(e.scrollHeight - e.scrollTop === e.clientHeight);
                  },
                  className: "overflow-y-auto max-h-[400px] scrollbar-hide",
                  children: r.map((e) =>
                    (0, l.jsx)(
                      h,
                      {
                        role: e.role,
                        content: e.content,
                        attachments: e.experimental_attachments,
                        toolInvocations: e.toolInvocations,
                      },
                      e.id
                    )
                  ),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("div", {
                      className: "h-[3px] mx-4 mb-4 bg-[#783714]",
                    }),
                    (0, l.jsx)("form", {
                      onSubmit: c,
                      className: "flex flex-col sm:flex-row gap-3",
                      children: (0, l.jsx)(v, {
                        className:
                          "flex-1 min-h-[40px] max-h-[120px] placeholder:text-black text-black text-sm sm:text-base resize-none bg-transparent px-3 py-2 shadow-sm",
                        input: d,
                        setInput: u,
                        handleSubmit: c,
                        isLoading: x,
                        stop: g,
                        attachments: f,
                        setAttachments: b,
                        messages: r,
                        setMessages: o,
                        append: m,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      b.displayName = "Textarea";
    },
    3941: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => w });
      var l = a(8646),
        s = a(7437),
        n = a(5282),
        i = a(9183),
        r = a(2265),
        o = a(7818),
        c = a(8590),
        d = a(6648);
      function u(e) {
        let { onBackClick: t } = e,
          [a, l] = (0, r.useState)(0),
          [n, i] = (0, r.useState)(!1),
          [o, u] = (0, r.useState)(!1),
          m = (0, r.useRef)(null),
          x = [
            "/images/section2/cover.jpg",
            "/images/section2/page1.jpg",
            "/images/section2/page2.jpg",
            "/images/section2/page3.jpg",
          ],
          h = [
            "",
            "/images/section2/page1.mp3",
            "/images/section2/page2.mp3",
            "/images/section2/page3.mp3",
          ],
          g = () => {
            m.current &&
              h[a] &&
              ((m.current.src = h[a]), m.current.play(), u(!0));
          },
          p = () => {
            m.current &&
              (m.current.pause(), (m.current.currentTime = 0), u(!1));
          };
        return (
          (0, r.useEffect)(() => {
            if (n) {
              let e = setTimeout(() => i(!1), 500);
              return () => clearTimeout(e);
            }
          }, [n]),
          (0, r.useEffect)(
            () => () => {
              p();
            },
            []
          ),
          (0, s.jsxs)("div", {
            className:
              "min-h-screen w-full bg-[url('/images/section2/bg.png')] sm:bg-[url('/images/section2/bg-mobile.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ease-in-out overflow-hidden",
            style: { opacity: 1 },
            id: "section2",
            children: [
              (0, s.jsx)(c.E.button, {
                onClick: t,
                whileHover: { scale: 1.4 },
                whileTap: { scale: 0.9 },
                className:
                  "fixed top-4 left-4 focus:outline-none z-50 sm:top-8 sm:left-8",
                children: (0, s.jsx)(d.default, {
                  src: "/new/icons/back.png",
                  alt: "Back to main page",
                  width: 100,
                  height: 45,
                  className: "w-[100px] sm:w-[150px] h-auto",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "relative w-full max-w-6xl aspect-[4/3] flex flex-col items-center justify-center",
                children: (0, s.jsxs)("div", {
                  className: "relative w-full flex items-center justify-center",
                  children: [
                    (0, s.jsx)(c.E.button, {
                      onClick: () => {
                        o ? p() : g();
                      },
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      className:
                        "absolute top-[-40px] sm:top-[-60px] transform focus:outline-none z-20",
                      children: (0, s.jsx)("img", {
                        src: "/images/section2/speaker.png",
                        alt: o ? "Stop audio" : "Play audio",
                        className:
                          "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      onClick: () => {
                        n ||
                          (i(!0), l((e) => (e - 1 + x.length) % x.length), p());
                      },
                      className:
                        "absolute left-[-20px] sm:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none",
                      children: (0, s.jsx)("img", {
                        src: "/images/section2/left.png",
                        alt: "Previous page",
                        className:
                          "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "w-full h-full relative overflow-hidden perspective-1000",
                      children: (0, s.jsx)("img", {
                        src: x[a],
                        alt: "Book Page ".concat(a + 1),
                        className:
                          "w-full h-full object-contain transition-transform duration-500 ease-in-out ".concat(
                            n ? "rotate-y-180" : "rotate-y-0"
                          ),
                      }),
                    }),
                    (0, s.jsx)("button", {
                      onClick: () => {
                        n || (i(!0), l((e) => (e + 1) % x.length), p());
                      },
                      className:
                        "absolute right-[-20px] sm:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none",
                      children: (0, s.jsx)("img", {
                        src: "/images/section2/right.png",
                        alt: "Next page",
                        className:
                          "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16",
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("audio", { ref: m, onEnded: () => u(!1) }),
            ],
          })
        );
      }
      let m = (e) => {
        let { x: t, y: a, onClickHandler: l } = e,
          [n, i] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              i(!n);
            }, 2e3);
            return () => clearInterval(e);
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/latar.png",
                  alt: "Castle",
                  layout: "fill",
                  objectFit: "cover",
                  className: "relative",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                initial: { y: "-70%" },
                animate: { y: 0 },
                transition: { duration: 1, delay: 0.4 },
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/gapura.png",
                  alt: "Castle",
                  layout: "fill",
                  objectFit: "cover",
                  className: "relative z-10",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/kolam.png",
                  alt: "Castle",
                  layout: "fill",
                  objectFit: "cover",
                  className: "relative",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "fixed left-[-10%] bottom-[-100px]",
                variants: { rotate: { rotate: n ? 2 : -2 } },
                animate: "rotate",
                transition: {
                  delay: 1.2,
                  duration: 1,
                  ease: "linear",
                  repeat: 1 / 0,
                  repeatType: "reverse",
                },
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/daun1.png",
                  alt: "Castle",
                  width: 500,
                  height: 500,
                  className:
                    "relative z-20 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "fixed right-[-10%] bottom-[-100px]",
                variants: { rotate: { rotate: n ? 2 : -2 } },
                animate: "rotate",
                transition: {
                  delay: 1.2,
                  duration: 1,
                  ease: "linear",
                  repeat: 1 / 0,
                  repeatType: "reverse",
                },
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/daun2.png",
                  alt: "Castle",
                  width: 500,
                  height: 500,
                  className:
                    "relative z-20 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className:
                  "absolute bottom-[47%] lg:left-1/4 left-2 lg:-translate-x-1/2 z-30 cursor-pointer hover:animate-shake",
                initial: { y: "20%", x: "50%", scale: 0 },
                animate: { y: 0, x: 0, scale: 1 },
                transition: { duration: 1, delay: 1.2 },
                children: (0, s.jsx)(d.default, {
                  onClick: () =>
                    window.open(
                      "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon"
                    ),
                  loading: "eager",
                  src: "/buy.png",
                  alt: "Castle",
                  width: 150,
                  height: 200,
                  className:
                    "relative z-30 w-[90px] lg:w-[110px] h-[100px] lg:h-[150px] hover:drop-shadow-[10px_5px_33px_#26c947]",
                  style: { transition: "all 0.6s" },
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className:
                  "absolute bottom-[47%] lg:right-1/4 right-2 lg:-translate-x-1/2 z-30 cursor-pointer hover:animate-shake",
                initial: { y: "20%", x: "-50%", scale: 0 },
                animate: { y: 0, x: 0, scale: 1 },
                transition: { duration: 1, delay: 1.2 },
                children: (0, s.jsx)(d.default, {
                  onClick: () => window.open("https://x.com/kiko_erc20"),
                  loading: "eager",
                  src: "/x.png",
                  alt: "Castle",
                  width: 150,
                  height: 200,
                  className:
                    "relative z-30 w-[90px] lg:w-[110px] h-[100px] lg:h-[150px] hover:drop-shadow-[10px_5px_33px_#26c947]",
                  style: { transition: "all 0.6s" },
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className:
                  "absolute bottom-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer",
                children: (0, s.jsx)(d.default, {
                  onClick: () =>
                    window.open("https://dextools.io/app/en/ether/pair-explorer/0xcomingsoon"),
                  loading: "eager",
                  src: "/poc.png",
                  alt: "Castle",
                  width: 200,
                  height: 200,
                  className:
                    "relative hover:drop-shadow-[10px_5px_33px_#26c947] hover:scale-110",
                  style: { transition: "all 0.6s" },
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className:
                  "absolute bottom-[46%] left-0 right-0 w-fit z-30 cursor-pointer hover:animate-shake mx-auto",
                children: (0, s.jsx)(d.default, {
                  onClick: () => window.open("https://t.me/kikomeme_erc20"),
                  loading: "eager",
                  src: "/dev.png",
                  alt: "Castle",
                  width: 150,
                  height: 50,
                  className:
                    "relative hover:drop-shadow-[10px_5px_33px_#26c947] hover:scale-110",
                  style: { transition: "all 0.6s" },
                }),
              }),
              (0, s.jsx)(c.E.div, {
                initial: { scale: 0 },
                animate: { scale: 1 },
                exit: { scale: 0 },
                className:
                  "absolute z-20 h-[300px] w-full top-[60vh] md:top-[50%]",
                transition: { delay: 0.8, duration: 1 },
                children: (0, s.jsx)(c.E.div, {
                  initial: { scale: 1 },
                  whileHover: { scale: 1.1 },
                  transition: { duration: 0.8 },
                  className: "cursor-pointer",
                  children: (0, s.jsx)(d.default, {
                    onClick: l,
                    loading: "eager",
                    src: "/kodok.gif",
                    alt: "Castle",
                    width: 260,
                    height: 260,
                    objectFit: "cover",
                    className: " w-[200px] md:w-[260px] mx-auto",
                  }),
                }),
              }),
            ],
          })
        );
      };
      a(3812);
      let x = (e) => {
        let { animate: t = !1 } = e;
        return (
          (0, r.useEffect)(() => {
            !(function () {
              let e = document.getElementById("bubbleContainer");
              for (let t = 0; t < 300; t++) {
                let t = document.createElement("div");
                t.classList.add("bubble");
                let a = 80 * Math.random() + 20;
                (t.style.width = "".concat(a, "px")),
                  (t.style.height = "".concat(a, "px")),
                  (t.style.right = "".concat(100 * Math.random(), "%")),
                  (t.style.bottom = "".concat(100 * Math.random(), "%")),
                  (t.style.animationDelay = "".concat(
                    0.5 * Math.random(),
                    "s"
                  )),
                  (t.style.border = "".concat(
                    2 * Math.random() + 1,
                    "px solid rgba(255,255,255,0.5)"
                  )),
                  e.appendChild(t);
              }
            })();
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              className: "bubble-container",
              id: "bubbleContainer",
            }),
          })
        );
      };
      var h = a(8155),
        g = a(7440),
        p = a(8567);
      let f = (e) => {
        let { x: t, y: a, onBack: l } = e,
          [n, i] = (0, r.useState)(""),
          o = (0, g.DO)();
        return (
          (0, r.useEffect)(() => {
            (async () => {
              i(await (0, h.n)());
            })();
          }, []),
          (0, s.jsxs)("div", {
            className: "relative w-full h-screen overflow-hidden flex",
            children: [
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/bg-chatbot2.png",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/chatbot-1.png",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/chatbot-2.png",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/chatbot-3.png",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/chatbot-4.png",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/chatbot-5.png",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)(c.E.div, {
                className: "absolute inset-0",
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/last.gif",
                  alt: "Background Screen",
                  layout: "fill",
                  objectFit: "cover",
                  priority: !0,
                  className: "size-full",
                }),
              }),
              (0, s.jsx)("div", {
                style: {
                  width: "100%",
                  maxWidth: "750px",
                  maxHeight: "800px",
                  height: "100%",
                  background: "url(/gerbang-ijo-fix.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "relative",
                  margin: "auto auto",
                },
                children: (0, s.jsx)(
                  p.e,
                  { id: o, initialMessages: [], selectedModelId: "gpt-4o-mini" },
                  o
                ),
              }),
              (0, s.jsx)(c.E.div, {
                className:
                  "absolute top-4 left-2 cursor-pointer hover:animate-shake",
                onClick: l,
                children: (0, s.jsx)(d.default, {
                  loading: "eager",
                  src: "/back-ijo2.png",
                  alt: "Background Screen",
                  width: 100,
                  height: 50,
                }),
              }),
            ],
          })
        );
      };
      function b() {
        let e = (0, l._)([
          "\n  display: flex;\n  gap: 0rem;\n  margin-bottom: 8rem;\n  max-width: 90vw;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        let e = (0, l._)([
          "\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      let j = (0, o.default)(() => a.e(773).then(a.bind(a, 7773)), {
        loadableGenerated: { webpack: () => [7773] },
        ssr: !1,
      });
      function w() {
        let [e, t] = (0, r.useState)("main"),
          [a, l] = (0, r.useState)(!1),
          [i, o] = (0, r.useState)(!0);
        (0, r.useRef)(null),
          (0, r.useEffect)(() => {
            let e = window.matchMedia("(max-width: 767px)"),
              t = (e) => {
                l(e.matches);
              };
            return (
              l(e.matches),
              e.addEventListener("change", t),
              () => {
                e.removeEventListener("change", t);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            console.log(
              "Current video source:",
              a ? "/new/vertical/bg-mobile.mp4" : "/new/horizontal/bg-merge.mp4"
            );
          }, [a]);
        let [c, d] = (0, r.useState)(0),
          [h, g] = (0, r.useState)({ x: 0, y: 0 }),
          [p, b] = (0, r.useState)(!1),
          v = (0, n.c)(0),
          w = (0, n.c)(0);
        return "comics" === e
          ? (0, s.jsx)(u, {
              onBackClick: () => {
                t("main");
              },
            })
          : "goblin" === e
          ? (0, s.jsx)(j, {})
          : (0, s.jsxs)("div", {
            children: [
              // (0, s.jsxs)("iframe", {
              //   src: "https://www.kikosimulation.com/",
              //   id: "mirage",
              //   referrerPolicy: 'same-origin',
              //   style: { width: '100%', height: '100%', position: 'fixed', top: 0, left:0, zIndex: "1"}
              // }),
              (0, s.jsxs)("div", {
                className: "relative h-screen w-full overflow-hidden",
                onMouseMove: (e) => {},
                style: { backgroundImage: "url('/images/bg-main.png')" },
                children: [
                  p && (0, s.jsx)(x, { animate: p }),
                  0 === c
                    ? (0, s.jsx)(m, {
                        x: v,
                        y: w,
                        onClickHandler: () => {
                          b(!0),
                            setTimeout(() => {
                              b(!1), d(1);
                            }, 2e3);
                        },
                      })
                    : "",
                  1 === c
                    ? (0, s.jsx)(f, {
                        x: v,
                        y: w,
                        onBack: () => {
                          b(!0),
                            setTimeout(() => {
                              b(!1), d(0);
                            }, 2e3);
                        },
                      })
                    : "",
                ],
              })
            ]
          })
      }
      i.ZP.div(b()), i.ZP.div(v());
    },
    7440: (e, t, a) => {
      "use strict";
      a.d(t, { DO: () => i, cn: () => n });
      var l = a(4839),
        s = a(6164);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.m6)((0, l.W)(t));
      }
      function i() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            let t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }
        );
      }
    },
    3812: () => {},
    8155: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => s });
      var l = a(8064);
      let s = (0, l.createServerReference)(
        "007955091311ab052f8bc8d97b265e294d6c6f0fd0",
        l.callServer,
        void 0,
        l.findSourceMapURL,
        "getModelId"
      );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [497, 358, 399, 130, 215, 744], () => t(3916)), (_N_E = e.O());
  },
]);
