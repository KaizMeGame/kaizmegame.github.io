"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [772],
  {
    772: function (e, t, n) {
      let i, o, r;
      n.d(t, {
        u: function () {
          return B;
        },
      });
      var l = n(2265);
      let a = new Set(),
        d = new WeakMap(),
        s = new WeakMap(),
        c = new WeakMap(),
        u = new WeakMap(),
        f = new WeakMap(),
        p = new WeakMap(),
        h = new WeakMap(),
        m = new WeakSet(),
        g = 0,
        w = 0,
        b = "__aa_tgt",
        v = "__aa_del",
        y = "__aa_new";
      function E(e) {
        clearTimeout(h.get(e));
        let t = N(e),
          n = $(t) ? 500 : t.duration;
        h.set(
          e,
          setTimeout(async () => {
            let t = c.get(e);
            try {
              await (null == t ? void 0 : t.finished),
                d.set(e, T(e)),
                (function (e) {
                  let t = u.get(e);
                  null == t || t.disconnect();
                  let n = d.get(e),
                    o = 0;
                  n || ((n = T(e)), d.set(e, n));
                  let { offsetWidth: r, offsetHeight: l } = i,
                    a = [
                      n.top - 5,
                      r - (n.left + 5 + n.width),
                      l - (n.top + 5 + n.height),
                      n.left - 5,
                    ]
                      .map((e) => `${-1 * Math.floor(e)}px`)
                      .join(" "),
                    s = new IntersectionObserver(
                      () => {
                        ++o > 1 && E(e);
                      },
                      { root: i, threshold: 1, rootMargin: a }
                    );
                  s.observe(e), u.set(e, s);
                })(e);
            } catch {}
          }, n)
        );
      }
      function M(e) {
        setTimeout(() => {
          f.set(
            e,
            setInterval(() => x(E.bind(null, e)), 2e3)
          );
        }, Math.round(2e3 * Math.random()));
      }
      function x(e) {
        "function" == typeof requestIdleCallback
          ? requestIdleCallback(() => e())
          : requestAnimationFrame(() => e());
      }
      function W(e, t) {
        t || b in e
          ? !t || b in t || Object.defineProperty(t, b, { value: e })
          : Object.defineProperty(e, b, { value: e });
      }
      function k(e) {
        return Number(e.replace(/[^0-9.\-]/g, ""));
      }
      function T(e) {
        let t = e.getBoundingClientRect(),
          { x: n, y: i } = (function (e) {
            let t = e.parentElement;
            for (; t; ) {
              if (t.scrollLeft || t.scrollTop)
                return { x: t.scrollLeft, y: t.scrollTop };
              t = t.parentElement;
            }
            return { x: 0, y: 0 };
          })(e);
        return {
          top: t.top + i,
          left: t.left + n,
          width: t.width,
          height: t.height,
        };
      }
      function C(e, t, n) {
        let i = t.width,
          o = t.height,
          r = n.width,
          l = n.height,
          a = getComputedStyle(e);
        if ("content-box" === a.getPropertyValue("box-sizing")) {
          let e =
              k(a.paddingTop) +
              k(a.paddingBottom) +
              k(a.borderTopWidth) +
              k(a.borderBottomWidth),
            t =
              k(a.paddingLeft) +
              k(a.paddingRight) +
              k(a.borderRightWidth) +
              k(a.borderLeftWidth);
          (i -= t), (r -= t), (o -= e), (l -= e);
        }
        return [i, r, o, l].map(Math.round);
      }
      function N(e) {
        return b in e && p.has(e[b])
          ? p.get(e[b])
          : { duration: 250, easing: "ease-in-out" };
      }
      function L(e) {
        if (b in e) return e[b];
      }
      function O(e) {
        let t = L(e);
        return !!t && m.has(t);
      }
      function _(e, ...t) {
        t.forEach((t) => t(e, p.has(e)));
        for (let n = 0; n < e.children.length; n++) {
          let i = e.children.item(n);
          i && t.forEach((e) => e(i, p.has(i)));
        }
      }
      function S(e) {
        return Array.isArray(e) ? e : [e];
      }
      function $(e) {
        return "function" == typeof e;
      }
      function j(e) {
        let t;
        y in e && delete e[y];
        let n = T(e);
        d.set(e, n);
        let i = N(e);
        if (O(e)) {
          if ("function" != typeof i)
            t = e.animate(
              [
                { transform: "scale(.98)", opacity: 0 },
                { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
                { transform: "scale(1)", opacity: 1 },
              ],
              { duration: 1.5 * i.duration, easing: "ease-in" }
            );
          else {
            let [o] = S(i(e, "add", n));
            (t = new Animation(o)).play();
          }
          c.set(e, t), t.addEventListener("finish", E.bind(null, e));
        }
      }
      function A(e, t) {
        var n;
        e.remove(),
          d.delete(e),
          s.delete(e),
          c.delete(e),
          null === (n = u.get(e)) || void 0 === n || n.disconnect(),
          setTimeout(() => {
            if (
              (v in e && delete e[v],
              Object.defineProperty(e, y, { value: !0, configurable: !0 }),
              t && e instanceof HTMLElement)
            )
              for (let n in t) e.style[n] = "";
          }, 0);
      }
      function B(e) {
        let [t, n] = (0, l.useState)(),
          i = (0, l.useMemo)(() => e, []);
        return [
          (0, l.useCallback)(
            (e) => {
              e instanceof HTMLElement
                ? n(
                    (function (e, t = {}) {
                      return (
                        o &&
                          r &&
                          !(
                            window.matchMedia(
                              "(prefers-reduced-motion: reduce)"
                            ).matches &&
                            !$(t) &&
                            !t.disrespectUserMotionPreference
                          ) &&
                          (m.add(e),
                          "static" === getComputedStyle(e).position &&
                            Object.assign(e.style, { position: "relative" }),
                          _(e, E, M, (e) =>
                            null == r ? void 0 : r.observe(e)
                          ),
                          $(t)
                            ? p.set(e, t)
                            : p.set(e, {
                                duration: 250,
                                easing: "ease-in-out",
                                ...t,
                              }),
                          o.observe(e, { childList: !0 }),
                          a.add(e)),
                        Object.freeze({
                          parent: e,
                          enable: () => {
                            m.add(e);
                          },
                          disable: () => {
                            m.delete(e);
                          },
                          isEnabled: () => m.has(e),
                        })
                      );
                    })(e, i)
                  )
                : n(void 0);
            },
            [i]
          ),
          (0, l.useCallback)(
            (e) => {
              t && (e ? t.enable() : t.disable());
            },
            [t]
          ),
        ];
      }
      "undefined" != typeof window &&
        "ResizeObserver" in window &&
        ((i = document.documentElement),
        (o = new MutationObserver((e) => {
          let t =
            !e
              .reduce(
                (e, t) => [
                  ...e,
                  ...Array.from(t.addedNodes),
                  ...Array.from(t.removedNodes),
                ],
                []
              )
              .every((e) => "#comment" === e.nodeName) &&
            e.reduce((e, t) => {
              if (!1 === e) return !1;
              if (t.target instanceof Element) {
                if ((W(t.target), !e.has(t.target))) {
                  e.add(t.target);
                  for (let n = 0; n < t.target.children.length; n++) {
                    let i = t.target.children.item(n);
                    if (i) {
                      if (v in i) return !1;
                      W(t.target, i), e.add(i);
                    }
                  }
                }
                if (t.removedNodes.length)
                  for (let n = 0; n < t.removedNodes.length; n++) {
                    let i = t.removedNodes[n];
                    if (v in i) return !1;
                    i instanceof Element &&
                      (e.add(i),
                      W(t.target, i),
                      s.set(i, [t.previousSibling, t.nextSibling]));
                  }
              }
              return e;
            }, new Set());
          t &&
            t.forEach((e) =>
              (function (e) {
                var t;
                let n = e.isConnected,
                  o = d.has(e);
                n && s.has(e) && s.delete(e),
                  c.has(e) &&
                    (null === (t = c.get(e)) || void 0 === t || t.cancel()),
                  y in e
                    ? j(e)
                    : o && n
                    ? (function (e) {
                        let t;
                        let n = d.get(e),
                          i = T(e);
                        if (!O(e)) return d.set(e, i);
                        if (!n) return;
                        let o = N(e);
                        if ("function" != typeof o) {
                          let r = n.left - i.left,
                            l = n.top - i.top,
                            [a, d, s, c] = C(e, n, i),
                            u = { transform: `translate(${r}px, ${l}px)` },
                            f = { transform: "translate(0, 0)" };
                          a !== d &&
                            ((u.width = `${a}px`), (f.width = `${d}px`)),
                            s !== c &&
                              ((u.height = `${s}px`), (f.height = `${c}px`)),
                            (t = e.animate([u, f], {
                              duration: o.duration,
                              easing: o.easing,
                            }));
                        } else {
                          let [r] = S(o(e, "remain", n, i));
                          (t = new Animation(r)).play();
                        }
                        c.set(e, t),
                          d.set(e, i),
                          t.addEventListener("finish", E.bind(null, e));
                      })(e)
                    : o && !n
                    ? (function (e) {
                        var t;
                        let n;
                        if (!s.has(e) || !d.has(e)) return;
                        let [o, r] = s.get(e);
                        Object.defineProperty(e, v, {
                          value: !0,
                          configurable: !0,
                        });
                        let l = window.scrollX,
                          a = window.scrollY;
                        if (
                          (r && r.parentNode && r.parentNode instanceof Element
                            ? r.parentNode.insertBefore(e, r)
                            : o && o.parentNode
                            ? o.parentNode.appendChild(e)
                            : null === (t = L(e)) ||
                              void 0 === t ||
                              t.appendChild(e),
                          !O(e))
                        )
                          return A(e);
                        let [u, f, p, h] = (function (e) {
                            let t = d.get(e),
                              [n, , i] = C(e, t, T(e)),
                              o = e.parentElement;
                            for (
                              ;
                              o &&
                              ("static" === getComputedStyle(o).position ||
                                o instanceof HTMLBodyElement);

                            )
                              o = o.parentElement;
                            o || (o = document.body);
                            let r = getComputedStyle(o),
                              l = d.get(o) || T(o);
                            return [
                              Math.round(t.top - l.top) - k(r.borderTopWidth),
                              Math.round(t.left - l.left) -
                                k(r.borderLeftWidth),
                              n,
                              i,
                            ];
                          })(e),
                          m = N(e),
                          b = d.get(e);
                        (l !== g || a !== w) &&
                          (function (e, t, n, o) {
                            let r = g - t,
                              l = w - n,
                              a = document.documentElement.style.scrollBehavior;
                            if (
                              ("smooth" ===
                                getComputedStyle(i).scrollBehavior &&
                                (document.documentElement.style.scrollBehavior =
                                  "auto"),
                              window.scrollTo(
                                window.scrollX + r,
                                window.scrollY + l
                              ),
                              !e.parentElement)
                            )
                              return;
                            let d = e.parentElement,
                              s = d.clientHeight,
                              c = d.clientWidth,
                              u = performance.now();
                            !(function e() {
                              requestAnimationFrame(() => {
                                if (!$(o)) {
                                  let t = s - d.clientHeight,
                                    n = c - d.clientWidth;
                                  u + o.duration > performance.now()
                                    ? (window.scrollTo({
                                        left: window.scrollX - n,
                                        top: window.scrollY - t,
                                      }),
                                      (s = d.clientHeight),
                                      (c = d.clientWidth),
                                      e())
                                    : (document.documentElement.style.scrollBehavior =
                                        a);
                                }
                              });
                            })();
                          })(e, l, a, m);
                        let y = {
                          position: "absolute",
                          top: `${u}px`,
                          left: `${f}px`,
                          width: `${p}px`,
                          height: `${h}px`,
                          margin: "0",
                          pointerEvents: "none",
                          transformOrigin: "center",
                          zIndex: "100",
                        };
                        if ($(m)) {
                          let [t, i] = S(m(e, "remove", b));
                          (null == i ? void 0 : i.styleReset) !== !1 &&
                            ((y = (null == i ? void 0 : i.styleReset) || y),
                            Object.assign(e.style, y)),
                            (n = new Animation(t)).play();
                        } else
                          Object.assign(e.style, y),
                            (n = e.animate(
                              [
                                { transform: "scale(1)", opacity: 1 },
                                { transform: "scale(.98)", opacity: 0 },
                              ],
                              { duration: m.duration, easing: "ease-out" }
                            ));
                        c.set(e, n),
                          n.addEventListener("finish", A.bind(null, e, y));
                      })(e)
                    : j(e);
              })(e)
            );
        })),
        (r = new ResizeObserver((e) => {
          e.forEach((e) => {
            e.target === i &&
              (clearTimeout(h.get(i)),
              h.set(
                i,
                setTimeout(() => {
                  a.forEach((e) => _(e, (e) => x(() => E(e))));
                }, 100)
              )),
              d.has(e.target) && E(e.target);
          });
        })),
        window.addEventListener("scroll", () => {
          (w = window.scrollY), (g = window.scrollX);
        }),
        r.observe(i));
    },
  },
]);
