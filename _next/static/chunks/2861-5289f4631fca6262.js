(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2861],
  {
    1906: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    1359: function (e, t, i) {
      "use strict";
      let n;
      i.d(t, {
        JO: function () {
          return ex;
        },
      });
      var r,
        o = i(2265);
      let s = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
        a = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
        l = Object.freeze({ ...s, ...a }),
        u = Object.freeze({ ...l, body: "", hidden: !1 });
      function c(e, t) {
        let i = (function (e, t) {
          let i = {};
          !e.hFlip != !t.hFlip && (i.hFlip = !0),
            !e.vFlip != !t.vFlip && (i.vFlip = !0);
          let n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
          return n && (i.rotate = n), i;
        })(e, t);
        for (let n in u)
          n in a
            ? n in e && !(n in i) && (i[n] = a[n])
            : n in t
            ? (i[n] = t[n])
            : n in e && (i[n] = e[n]);
        return i;
      }
      function h(e, t) {
        let i = [];
        if ("object" != typeof e || "object" != typeof e.icons) return i;
        e.not_found instanceof Array &&
          e.not_found.forEach((e) => {
            t(e, null), i.push(e);
          });
        let n = (function (e, t) {
          let i = e.icons,
            n = e.aliases || Object.create(null),
            r = Object.create(null);
          return (
            Object.keys(i)
              .concat(Object.keys(n))
              .forEach(function e(t) {
                if (i[t]) return (r[t] = []);
                if (!(t in r)) {
                  r[t] = null;
                  let i = n[t] && n[t].parent,
                    o = i && e(i);
                  o && (r[t] = [i].concat(o));
                }
                return r[t];
              }),
            r
          );
        })(e);
        for (let r in n) {
          let o = n[r];
          o &&
            (t(
              r,
              (function (e, t, i) {
                let n = e.icons,
                  r = e.aliases || Object.create(null),
                  o = {};
                function s(e) {
                  o = c(n[e] || r[e], o);
                }
                return s(t), i.forEach(s), c(e, o);
              })(e, r, o)
            ),
            i.push(r));
        }
        return i;
      }
      let p = /^[a-z0-9]+(-[a-z0-9]+)*$/,
        g = function (e, t, i) {
          let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            r = e.split(":");
          if ("@" === e.slice(0, 1)) {
            if (r.length < 2 || r.length > 3) return null;
            n = r.shift().slice(1);
          }
          if (r.length > 3 || !r.length) return null;
          if (r.length > 1) {
            let e = r.pop(),
              i = r.pop(),
              o = { provider: r.length > 0 ? r[0] : n, prefix: i, name: e };
            return t && !d(o) ? null : o;
          }
          let o = r[0],
            s = o.split("-");
          if (s.length > 1) {
            let e = { provider: n, prefix: s.shift(), name: s.join("-") };
            return t && !d(e) ? null : e;
          }
          if (i && "" === n) {
            let e = { provider: n, prefix: "", name: o };
            return t && !d(e, i) ? null : e;
          }
          return null;
        },
        d = (e, t) =>
          !!e &&
          !!(
            ("" === e.provider || e.provider.match(p)) &&
            ((t && "" === e.prefix) || e.prefix.match(p)) &&
            e.name.match(p)
          ),
        f = { provider: "", aliases: {}, not_found: {}, ...s };
      function m(e, t) {
        for (let i in t) if (i in e && typeof e[i] != typeof t[i]) return !1;
        return !0;
      }
      function y(e) {
        if (
          "object" != typeof e ||
          null === e ||
          "string" != typeof e.prefix ||
          !e.icons ||
          "object" != typeof e.icons ||
          !m(e, f)
        )
          return null;
        let t = e.icons;
        for (let e in t) {
          let i = t[e];
          if (!e.match(p) || "string" != typeof i.body || !m(i, u)) return null;
        }
        let i = e.aliases || Object.create(null);
        for (let e in i) {
          let n = i[e],
            r = n.parent;
          if (
            !e.match(p) ||
            "string" != typeof r ||
            (!t[r] && !i[r]) ||
            !m(n, u)
          )
            return null;
        }
        return e;
      }
      let b = Object.create(null);
      function v(e, t) {
        let i = b[e] || (b[e] = Object.create(null));
        return (
          i[t] ||
          (i[t] = {
            provider: e,
            prefix: t,
            icons: Object.create(null),
            missing: new Set(),
          })
        );
      }
      function x(e, t) {
        return y(t)
          ? h(t, (t, i) => {
              i ? (e.icons[t] = i) : e.missing.add(t);
            })
          : [];
      }
      let k = !1;
      function S(e) {
        return "boolean" == typeof e && (k = e), k;
      }
      function w(e) {
        let t = "string" == typeof e ? g(e, !0, k) : e;
        if (t) {
          let e = v(t.provider, t.prefix),
            i = t.name;
          return e.icons[i] || (e.missing.has(i) ? null : void 0);
        }
      }
      let O = Object.freeze({ width: null, height: null }),
        L = Object.freeze({ ...O, ...a }),
        N = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
        C = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
      function j(e, t, i) {
        if (1 === t) return e;
        if (((i = i || 100), "number" == typeof e))
          return Math.ceil(e * t * i) / i;
        if ("string" != typeof e) return e;
        let n = e.split(N);
        if (null === n || !n.length) return e;
        let r = [],
          o = n.shift(),
          s = C.test(o);
        for (;;) {
          if (s) {
            let e = parseFloat(o);
            isNaN(e) ? r.push(o) : r.push(Math.ceil(e * t * i) / i);
          } else r.push(o);
          if (void 0 === (o = n.shift())) return r.join("");
          s = !s;
        }
      }
      let $ = (e) => "unset" === e || "undefined" === e || "none" === e,
        R = /\sid="(\S+)"/g,
        E =
          "IconifyId" +
          Date.now().toString(16) +
          ((16777216 * Math.random()) | 0).toString(16),
        P = 0,
        I = Object.create(null);
      function F(e) {
        return I[e] || I[""];
      }
      function T(e) {
        let t;
        if ("string" == typeof e.resources) t = [e.resources];
        else if (!((t = e.resources) instanceof Array) || !t.length)
          return null;
        return {
          resources: t,
          path: e.path || "/",
          maxURL: e.maxURL || 500,
          rotate: e.rotate || 750,
          timeout: e.timeout || 5e3,
          random: !0 === e.random,
          index: e.index || 0,
          dataAfterTimeout: !1 !== e.dataAfterTimeout,
        };
      }
      let A = Object.create(null),
        D = ["https://api.simplesvg.com", "https://api.unisvg.com"],
        U = [];
      for (; D.length > 0; )
        1 === D.length
          ? U.push(D.shift())
          : Math.random() > 0.5
          ? U.push(D.shift())
          : U.push(D.pop());
      A[""] = T({ resources: ["https://api.iconify.design"].concat(U) });
      let M = (() => {
        let e;
        try {
          if (((e = fetch), "function" == typeof e)) return e;
        } catch (e) {}
      })();
      function V(e, t) {
        e.forEach((e) => {
          let i = e.loaderCallbacks;
          i && (e.loaderCallbacks = i.filter((e) => e.id !== t));
        });
      }
      let z = 0;
      var K = {
        resources: [],
        index: 0,
        timeout: 2e3,
        rotate: 750,
        random: !1,
        dataAfterTimeout: !1,
      };
      function H(e) {
        let t = { ...K, ...e },
          i = [];
        function n() {
          i = i.filter((e) => "pending" === e().status);
        }
        return {
          query: function (e, r, o) {
            let s = (function (e, t, i, n) {
              let r, o;
              let s = e.resources.length,
                a = e.random ? Math.floor(Math.random() * s) : e.index;
              if (e.random) {
                let t = e.resources.slice(0);
                for (r = []; t.length > 1; ) {
                  let e = Math.floor(Math.random() * t.length);
                  r.push(t[e]), (t = t.slice(0, e).concat(t.slice(e + 1)));
                }
                r = r.concat(t);
              } else r = e.resources.slice(a).concat(e.resources.slice(0, a));
              let l = Date.now(),
                u = "pending",
                c = 0,
                h = null,
                p = [],
                g = [];
              function d() {
                h && (clearTimeout(h), (h = null));
              }
              function f() {
                "pending" === u && (u = "aborted"),
                  d(),
                  p.forEach((e) => {
                    "pending" === e.status && (e.status = "aborted");
                  }),
                  (p = []);
              }
              function m(e, t) {
                t && (g = []), "function" == typeof e && g.push(e);
              }
              function y() {
                (u = "failed"),
                  g.forEach((e) => {
                    e(void 0, o);
                  });
              }
              function b() {
                p.forEach((e) => {
                  "pending" === e.status && (e.status = "aborted");
                }),
                  (p = []);
              }
              return (
                "function" == typeof n && g.push(n),
                setTimeout(function n() {
                  if ("pending" !== u) return;
                  d();
                  let s = r.shift();
                  if (void 0 === s) {
                    if (p.length) {
                      h = setTimeout(() => {
                        d(), "pending" === u && (b(), y());
                      }, e.timeout);
                      return;
                    }
                    y();
                    return;
                  }
                  let a = {
                    status: "pending",
                    resource: s,
                    callback: (t, i) => {
                      !(function (t, i, s) {
                        let a = "success" !== i;
                        switch (((p = p.filter((e) => e !== t)), u)) {
                          case "pending":
                            break;
                          case "failed":
                            if (a || !e.dataAfterTimeout) return;
                            break;
                          default:
                            return;
                        }
                        if ("abort" === i) {
                          (o = s), y();
                          return;
                        }
                        if (a) {
                          (o = s), p.length || (r.length ? n() : y());
                          return;
                        }
                        if ((d(), b(), !e.random)) {
                          let i = e.resources.indexOf(t.resource);
                          -1 !== i && i !== e.index && (e.index = i);
                        }
                        (u = "completed"),
                          g.forEach((e) => {
                            e(s);
                          });
                      })(a, t, i);
                    },
                  };
                  p.push(a),
                    c++,
                    (h = setTimeout(n, e.rotate)),
                    i(s, t, a.callback);
                }),
                function () {
                  return {
                    startTime: l,
                    payload: t,
                    status: u,
                    queriesSent: c,
                    queriesPending: p.length,
                    subscribe: m,
                    abort: f,
                  };
                }
              );
            })(t, e, r, (e, t) => {
              n(), o && o(e, t);
            });
            return i.push(s), s;
          },
          find: function (e) {
            return i.find((t) => e(t)) || null;
          },
          setIndex: (e) => {
            t.index = e;
          },
          getIndex: () => t.index,
          cleanup: n,
        };
      }
      let J = Object.create(null),
        B = "iconify2",
        _ = "iconify",
        q = _ + "-count",
        W = _ + "-version";
      function Q(e, t) {
        try {
          return e.getItem(t);
        } catch (e) {}
      }
      function Y(e, t, i) {
        try {
          return e.setItem(t, i), !0;
        } catch (e) {}
      }
      function G(e, t) {
        try {
          e.removeItem(t);
        } catch (e) {}
      }
      function Z(e, t) {
        return Y(e, q, t.toString());
      }
      function X(e) {
        return parseInt(Q(e, q)) || 0;
      }
      let ee = { local: !0, session: !0 },
        et = { local: new Set(), session: new Set() },
        ei = !1,
        en = "undefined" == typeof window ? {} : window;
      function er(e) {
        let t = e + "Storage";
        try {
          if (en && en[t] && "number" == typeof en[t].length) return en[t];
        } catch (e) {}
        ee[e] = !1;
      }
      function eo(e, t) {
        let i = er(e);
        if (!i) return;
        let n = Q(i, W);
        if (n !== B) {
          if (n) {
            let e = X(i);
            for (let t = 0; t < e; t++) G(i, _ + t.toString());
          }
          Y(i, W, B), Z(i, 0);
          return;
        }
        let r = Math.floor(Date.now() / 36e5) - 168,
          o = (e) => {
            let n = _ + e.toString(),
              o = Q(i, n);
            if ("string" == typeof o) {
              try {
                let i = JSON.parse(o);
                if (
                  "object" == typeof i &&
                  "number" == typeof i.cached &&
                  i.cached > r &&
                  "string" == typeof i.provider &&
                  "object" == typeof i.data &&
                  "string" == typeof i.data.prefix &&
                  t(i, e)
                )
                  return !0;
              } catch (e) {}
              G(i, n);
            }
          },
          s = X(i);
        for (let t = s - 1; t >= 0; t--)
          o(t) || (t === s - 1 ? Z(i, --s) : et[e].add(t));
      }
      function es() {
        if (!ei)
          for (let e in ((ei = !0), ee))
            eo(e, (e) => {
              let t = e.data,
                i = v(e.provider, t.prefix);
              if (!x(i, t).length) return !1;
              let n = t.lastModified || -1;
              return (
                (i.lastModifiedCached = i.lastModifiedCached
                  ? Math.min(i.lastModifiedCached, n)
                  : n),
                !0
              );
            });
      }
      function ea() {}
      let el = (e, t) => {
          let i, n;
          let r = (function (e) {
            let t = { loaded: [], missing: [], pending: [] },
              i = Object.create(null);
            e.sort((e, t) =>
              e.provider !== t.provider
                ? e.provider.localeCompare(t.provider)
                : e.prefix !== t.prefix
                ? e.prefix.localeCompare(t.prefix)
                : e.name.localeCompare(t.name)
            );
            let n = { provider: "", prefix: "", name: "" };
            return (
              e.forEach((e) => {
                if (
                  n.name === e.name &&
                  n.prefix === e.prefix &&
                  n.provider === e.provider
                )
                  return;
                n = e;
                let r = e.provider,
                  o = e.prefix,
                  s = e.name,
                  a = i[r] || (i[r] = Object.create(null)),
                  l = a[o] || (a[o] = v(r, o));
                (s in l.icons
                  ? t.loaded
                  : "" === o || l.missing.has(s)
                  ? t.missing
                  : t.pending
                ).push({ provider: r, prefix: o, name: s });
              }),
              t
            );
          })(
            (function (e) {
              let t =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                n = [];
              return (
                e.forEach((e) => {
                  let r = "string" == typeof e ? g(e, t, i) : e;
                  r && n.push(r);
                }),
                n
              );
            })(e, !0, S())
          );
          if (!r.pending.length) {
            let e = !0;
            return (
              t &&
                setTimeout(() => {
                  e && t(r.loaded, r.missing, r.pending, ea);
                }),
              () => {
                e = !1;
              }
            );
          }
          let o = Object.create(null),
            s = [];
          return (
            r.pending.forEach((e) => {
              let { provider: t, prefix: r } = e;
              if (r === n && t === i) return;
              (i = t), (n = r), s.push(v(t, r));
              let a = o[t] || (o[t] = Object.create(null));
              a[r] || (a[r] = []);
            }),
            r.pending.forEach((e) => {
              let { provider: t, prefix: i, name: n } = e,
                r = v(t, i),
                s = r.pendingIcons || (r.pendingIcons = new Set());
              s.has(n) || (s.add(n), o[t][i].push(n));
            }),
            s.forEach((e) => {
              let { provider: t, prefix: i } = e;
              if (o[t][i].length) {
                var n;
                (n = o[t][i]),
                  e.iconsToLoad
                    ? (e.iconsToLoad = e.iconsToLoad.concat(n).sort())
                    : (e.iconsToLoad = n),
                  e.iconsQueueFlag ||
                    ((e.iconsQueueFlag = !0),
                    setTimeout(() => {
                      let t;
                      e.iconsQueueFlag = !1;
                      let { provider: i, prefix: n } = e,
                        r = e.iconsToLoad;
                      delete e.iconsToLoad,
                        r &&
                          (t = F(i)) &&
                          t.prepare(i, n, r).forEach((t) => {
                            !(function (e, t, i) {
                              let n, r;
                              if ("string" == typeof e) {
                                let t = F(e);
                                if (!t) return i(void 0, 424);
                                r = t.send;
                                let o = (function (e) {
                                  if (!J[e]) {
                                    let t = A[e];
                                    if (!t) return;
                                    let i = H(t);
                                    J[e] = { config: t, redundancy: i };
                                  }
                                  return J[e];
                                })(e);
                                o && (n = o.redundancy);
                              } else {
                                let t = T(e);
                                if (t) {
                                  n = H(t);
                                  let i = F(e.resources ? e.resources[0] : "");
                                  i && (r = i.send);
                                }
                              }
                              n && r
                                ? n.query(t, r, i)().abort
                                : i(void 0, 424);
                            })(i, t, (i) => {
                              if ("object" != typeof i)
                                t.icons.forEach((t) => {
                                  e.missing.add(t);
                                });
                              else
                                try {
                                  let t = x(e, i);
                                  if (!t.length) return;
                                  let n = e.pendingIcons;
                                  n &&
                                    t.forEach((e) => {
                                      n.delete(e);
                                    }),
                                    (function (e, t) {
                                      function i(i) {
                                        let n, r;
                                        if (!ee[i] || !(n = er(i))) return;
                                        let o = et[i];
                                        if (o.size)
                                          o.delete((r = Array.from(o).shift()));
                                        else if (
                                          (r = X(n)) >= 50 ||
                                          !Z(n, r + 1)
                                        )
                                          return;
                                        let s = {
                                          cached: Math.floor(Date.now() / 36e5),
                                          provider: e.provider,
                                          data: t,
                                        };
                                        return Y(
                                          n,
                                          _ + r.toString(),
                                          JSON.stringify(s)
                                        );
                                      }
                                      ei || es(),
                                        (!t.lastModified ||
                                          (function (e, t) {
                                            let i = e.lastModifiedCached;
                                            if (i && i >= t) return i === t;
                                            if (((e.lastModifiedCached = t), i))
                                              for (let i in ee)
                                                eo(i, (i) => {
                                                  let n = i.data;
                                                  return (
                                                    i.provider !== e.provider ||
                                                    n.prefix !== e.prefix ||
                                                    n.lastModified === t
                                                  );
                                                });
                                            return !0;
                                          })(e, t.lastModified)) &&
                                          Object.keys(t.icons).length &&
                                          (t.not_found &&
                                            ((t = Object.assign({}, t)),
                                            delete t.not_found),
                                          i("local") || i("session"));
                                    })(e, i);
                                } catch (e) {
                                  console.error(e);
                                }
                              e.iconsLoaderFlag ||
                                ((e.iconsLoaderFlag = !0),
                                setTimeout(() => {
                                  (e.iconsLoaderFlag = !1),
                                    e.pendingCallbacksFlag ||
                                      ((e.pendingCallbacksFlag = !0),
                                      setTimeout(() => {
                                        e.pendingCallbacksFlag = !1;
                                        let t = e.loaderCallbacks
                                          ? e.loaderCallbacks.slice(0)
                                          : [];
                                        if (!t.length) return;
                                        let i = !1,
                                          n = e.provider,
                                          r = e.prefix;
                                        t.forEach((t) => {
                                          let o = t.icons,
                                            s = o.pending.length;
                                          (o.pending = o.pending.filter((t) => {
                                            if (t.prefix !== r) return !0;
                                            let s = t.name;
                                            if (e.icons[s])
                                              o.loaded.push({
                                                provider: n,
                                                prefix: r,
                                                name: s,
                                              });
                                            else {
                                              if (!e.missing.has(s))
                                                return (i = !0), !0;
                                              o.missing.push({
                                                provider: n,
                                                prefix: r,
                                                name: s,
                                              });
                                            }
                                            return !1;
                                          })),
                                            o.pending.length !== s &&
                                              (i || V([e], t.id),
                                              t.callback(
                                                o.loaded.slice(0),
                                                o.missing.slice(0),
                                                o.pending.slice(0),
                                                t.abort
                                              ));
                                        });
                                      }));
                                }));
                            });
                          });
                    }));
              }
            }),
            t
              ? (function (e, t, i) {
                  let n = z++,
                    r = V.bind(null, i, n);
                  if (!t.pending.length) return r;
                  let o = { id: n, icons: t, callback: e, abort: r };
                  return (
                    i.forEach((e) => {
                      (e.loaderCallbacks || (e.loaderCallbacks = [])).push(o);
                    }),
                    r
                  );
                })(t, r, s)
              : ea
          );
        },
        eu = /[\s,]+/,
        ec = { ...L, inline: !1 },
        eh = {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          "aria-hidden": !0,
          role: "img",
        },
        ep = { display: "inline-block" },
        eg = { backgroundColor: "currentColor" },
        ed = { backgroundColor: "transparent" },
        ef = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
        em = { WebkitMask: eg, mask: eg, background: ed };
      for (let e in em) {
        let t = em[e];
        for (let i in ef) t[e + i] = ef[i];
      }
      let ey = { ...ec, inline: !0 };
      function eb(e) {
        return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
      }
      let ev = (e, t, i) => {
        let r = t.inline ? ey : ec,
          s = (function (e, t) {
            let i = { ...e };
            for (let e in t) {
              let n = t[e],
                r = typeof n;
              e in O
                ? (null === n || (n && ("string" === r || "number" === r))) &&
                  (i[e] = n)
                : r === typeof i[e] && (i[e] = "rotate" === e ? n % 4 : n);
            }
            return i;
          })(r, t),
          a = t.mode || "svg",
          u = {},
          c = t.style || {},
          h = { ...("svg" === a ? eh : {}) };
        if (i) {
          let e = g(i, !1, !0);
          if (e) {
            let t = ["iconify"];
            for (let i of ["provider", "prefix"])
              e[i] && t.push("iconify--" + e[i]);
            h.className = t.join(" ");
          }
        }
        for (let e in t) {
          let i = t[e];
          if (void 0 !== i)
            switch (e) {
              case "icon":
              case "style":
              case "children":
              case "onLoad":
              case "mode":
              case "ssr":
                break;
              case "_ref":
                h.ref = i;
                break;
              case "className":
                h[e] = (h[e] ? h[e] + " " : "") + i;
                break;
              case "inline":
              case "hFlip":
              case "vFlip":
                s[e] = !0 === i || "true" === i || 1 === i;
                break;
              case "flip":
                "string" == typeof i &&
                  (function (e, t) {
                    t.split(eu).forEach((t) => {
                      switch (t.trim()) {
                        case "horizontal":
                          e.hFlip = !0;
                          break;
                        case "vertical":
                          e.vFlip = !0;
                      }
                    });
                  })(s, i);
                break;
              case "color":
                u.color = i;
                break;
              case "rotate":
                "string" == typeof i
                  ? (s[e] = (function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        i = e.replace(/^-?[0-9.]*/, "");
                      function n(e) {
                        for (; e < 0; ) e += 4;
                        return e % 4;
                      }
                      if ("" === i) {
                        let t = parseInt(e);
                        return isNaN(t) ? 0 : n(t);
                      }
                      if (i !== e) {
                        let t = 0;
                        switch (i) {
                          case "%":
                            t = 25;
                            break;
                          case "deg":
                            t = 90;
                        }
                        if (t) {
                          let r = parseFloat(e.slice(0, e.length - i.length));
                          return isNaN(r) ? 0 : (r /= t) % 1 == 0 ? n(r) : 0;
                        }
                      }
                      return t;
                    })(i))
                  : "number" == typeof i && (s[e] = i);
                break;
              case "ariaHidden":
              case "aria-hidden":
                !0 !== i && "true" !== i && delete h["aria-hidden"];
                break;
              default:
                void 0 === r[e] && (h[e] = i);
            }
        }
        let p = (function (e, t) {
            let i, n;
            let r = { ...l, ...e },
              o = { ...L, ...t },
              s = {
                left: r.left,
                top: r.top,
                width: r.width,
                height: r.height,
              },
              a = r.body;
            [r, o].forEach((e) => {
              let t;
              let i = [],
                n = e.hFlip,
                r = e.vFlip,
                o = e.rotate;
              switch (
                (n
                  ? r
                    ? (o += 2)
                    : (i.push(
                        "translate(" +
                          (s.width + s.left).toString() +
                          " " +
                          (0 - s.top).toString() +
                          ")"
                      ),
                      i.push("scale(-1 1)"),
                      (s.top = s.left = 0))
                  : r &&
                    (i.push(
                      "translate(" +
                        (0 - s.left).toString() +
                        " " +
                        (s.height + s.top).toString() +
                        ")"
                    ),
                    i.push("scale(1 -1)"),
                    (s.top = s.left = 0)),
                o < 0 && (o -= 4 * Math.floor(o / 4)),
                (o %= 4))
              ) {
                case 1:
                  i.unshift(
                    "rotate(90 " +
                      (t = s.height / 2 + s.top).toString() +
                      " " +
                      t.toString() +
                      ")"
                  );
                  break;
                case 2:
                  i.unshift(
                    "rotate(180 " +
                      (s.width / 2 + s.left).toString() +
                      " " +
                      (s.height / 2 + s.top).toString() +
                      ")"
                  );
                  break;
                case 3:
                  i.unshift(
                    "rotate(-90 " +
                      (t = s.width / 2 + s.left).toString() +
                      " " +
                      t.toString() +
                      ")"
                  );
              }
              o % 2 == 1 &&
                (s.left !== s.top &&
                  ((t = s.left), (s.left = s.top), (s.top = t)),
                s.width !== s.height &&
                  ((t = s.width), (s.width = s.height), (s.height = t))),
                i.length &&
                  (a = (function (e, t, i) {
                    var n, r;
                    let o = (function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "defs",
                        i = "",
                        n = e.indexOf("<" + t);
                      for (; n >= 0; ) {
                        let r = e.indexOf(">", n),
                          o = e.indexOf("</" + t);
                        if (-1 === r || -1 === o) break;
                        let s = e.indexOf(">", o);
                        if (-1 === s) break;
                        (i += e.slice(r + 1, o).trim()),
                          (e = e.slice(0, n).trim() + e.slice(s + 1));
                      }
                      return { defs: i, content: e };
                    })(e);
                    return (
                      (n = o.defs),
                      (r = t + o.content + i),
                      n ? "<defs>" + n + "</defs>" + r : r
                    );
                  })(a, '<g transform="' + i.join(" ") + '">', "</g>"));
            });
            let u = o.width,
              c = o.height,
              h = s.width,
              p = s.height;
            null === u
              ? (i = j((n = null === c ? "1em" : "auto" === c ? p : c), h / p))
              : ((i = "auto" === u ? h : u),
                (n = null === c ? j(i, p / h) : "auto" === c ? p : c));
            let g = {},
              d = (e, t) => {
                $(t) || (g[e] = t.toString());
              };
            d("width", i), d("height", n);
            let f = [s.left, s.top, h, p];
            return (
              (g.viewBox = f.join(" ")), { attributes: g, viewBox: f, body: a }
            );
          })(e, s),
          d = p.attributes;
        if ((s.inline && (u.verticalAlign = "-0.125em"), "svg" === a)) {
          var f;
          (h.style = { ...u, ...c }), Object.assign(h, d);
          let e = 0,
            i = t.id;
          return (
            "string" == typeof i && (i = i.replace(/-/g, "_")),
            (h.dangerouslySetInnerHTML = {
              __html:
                ((f = (function (e) {
                  let t,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : E,
                    n = [];
                  for (; (t = R.exec(e)); ) n.push(t[1]);
                  if (!n.length) return e;
                  let r =
                    "suffix" +
                    ((16777216 * Math.random()) | Date.now()).toString(16);
                  return (
                    n.forEach((t) => {
                      let n =
                          "function" == typeof i ? i(t) : i + (P++).toString(),
                        o = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                      e = e.replace(
                        RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"),
                        "$1" + n + r + "$3"
                      );
                    }),
                    (e = e.replace(RegExp(r, "g"), ""))
                  );
                })(p.body, i ? () => i + "ID" + e++ : "iconifyReact")),
                void 0 === n &&
                  (function () {
                    try {
                      n = window.trustedTypes.createPolicy("iconify", {
                        createHTML: (e) => e,
                      });
                    } catch (e) {
                      n = null;
                    }
                  })(),
                n ? n.createHTML(f) : f),
            }),
            (0, o.createElement)("svg", h)
          );
        }
        let { body: m, width: y, height: b } = e,
          v = "mask" === a || ("bg" !== a && -1 !== m.indexOf("currentColor")),
          x = (function (e, t) {
            let i =
              -1 === e.indexOf("xlink:")
                ? ""
                : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
            for (let e in t) i += " " + e + '="' + t[e] + '"';
            return (
              '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + e + "</svg>"
            );
          })(m, { ...d, width: y + "", height: b + "" });
        return (
          (h.style = {
            ...u,
            "--svg":
              'url("data:image/svg+xml,' +
              x
                .replace(/"/g, "'")
                .replace(/%/g, "%25")
                .replace(/#/g, "%23")
                .replace(/</g, "%3C")
                .replace(/>/g, "%3E")
                .replace(/\s+/g, " ") +
              '")',
            width: eb(d.width),
            height: eb(d.height),
            ...ep,
            ...(v ? eg : ed),
            ...c,
          }),
          (0, o.createElement)("span", h)
        );
      };
      if (
        (S(!0),
        (r = {
          prepare: (e, t, i) => {
            let n = [],
              r = (function (e, t) {
                let i;
                let n = A[e];
                if (!n) return 0;
                if (n.maxURL) {
                  let e = 0;
                  n.resources.forEach((t) => {
                    e = Math.max(e, t.length);
                  }),
                    (i =
                      n.maxURL -
                      e -
                      n.path.length -
                      (t + ".json?icons=").length);
                } else i = 0;
                return i;
              })(e, t),
              o = "icons",
              s = { type: o, provider: e, prefix: t, icons: [] },
              a = 0;
            return (
              i.forEach((i, l) => {
                (a += i.length + 1) >= r &&
                  l > 0 &&
                  (n.push(s),
                  (s = { type: o, provider: e, prefix: t, icons: [] }),
                  (a = i.length)),
                  s.icons.push(i);
              }),
              n.push(s),
              n
            );
          },
          send: (e, t, i) => {
            if (!M) {
              i("abort", 424);
              return;
            }
            let n = (function (e) {
              if ("string" == typeof e) {
                let t = A[e];
                if (t) return t.path;
              }
              return "/";
            })(t.provider);
            switch (t.type) {
              case "icons":
                n +=
                  t.prefix +
                  ".json?" +
                  new URLSearchParams({ icons: t.icons.join(",") }).toString();
                break;
              case "custom": {
                let e = t.uri;
                n += "/" === e.slice(0, 1) ? e.slice(1) : e;
                break;
              }
              default:
                i("abort", 400);
                return;
            }
            let r = 503;
            M(e + n)
              .then((e) => {
                let t = e.status;
                if (200 !== t) {
                  setTimeout(() => {
                    i(404 === t ? "abort" : "next", t);
                  });
                  return;
                }
                return (r = 501), e.json();
              })
              .then((e) => {
                if ("object" != typeof e || null === e) {
                  setTimeout(() => {
                    404 === e ? i("abort", e) : i("next", r);
                  });
                  return;
                }
                setTimeout(() => {
                  i("success", e);
                });
              })
              .catch(() => {
                i("next", r);
              });
          },
        }),
        (I[""] = r),
        "undefined" != typeof document && "undefined" != typeof window)
      ) {
        es();
        let e = window;
        if (void 0 !== e.IconifyPreload) {
          let t = e.IconifyPreload,
            i = "Invalid IconifyPreload syntax.";
          "object" == typeof t &&
            null !== t &&
            (t instanceof Array ? t : [t]).forEach((e) => {
              try {
                ("object" != typeof e ||
                  null === e ||
                  e instanceof Array ||
                  "object" != typeof e.icons ||
                  "string" != typeof e.prefix ||
                  !(function (e, t) {
                    if ("object" != typeof e) return !1;
                    if (
                      ("string" != typeof t && (t = e.provider || ""),
                      k && !t && !e.prefix)
                    ) {
                      let t = !1;
                      return (
                        y(e) &&
                          ((e.prefix = ""),
                          h(e, (e, i) => {
                            i &&
                              (function (e, t) {
                                let i = g(e, !0, k);
                                return (
                                  !!i &&
                                  (function (e, t, i) {
                                    try {
                                      if ("string" == typeof i.body)
                                        return (e.icons[t] = { ...i }), !0;
                                    } catch (e) {}
                                    return !1;
                                  })(v(i.provider, i.prefix), i.name, t)
                                );
                              })(e, i) &&
                              (t = !0);
                          })),
                        t
                      );
                    }
                    let i = e.prefix;
                    return (
                      !!d({ provider: t, prefix: i, name: "a" }) &&
                      !!x(v(t, i), e)
                    );
                  })(e)) &&
                  console.error(i);
              } catch (e) {
                console.error(i);
              }
            });
        }
        if (void 0 !== e.IconifyProviders) {
          let t = e.IconifyProviders;
          if ("object" == typeof t && null !== t)
            for (let e in t) {
              let i = "IconifyProviders[" + e + "] is invalid.";
              try {
                let n = t[e];
                if ("object" != typeof n || !n || void 0 === n.resources)
                  continue;
                !(function (e, t) {
                  let i = T(t);
                  return null !== i && ((A[e] = i), !0);
                })(e, n) && console.error(i);
              } catch (e) {
                console.error(i);
              }
            }
        }
      }
      let ex = (0, o.forwardRef)((e, t) =>
        (function (e) {
          let [t, i] = (0, o.useState)(!!e.ssr),
            [n, r] = (0, o.useState)({}),
            [s, a] = (0, o.useState)(
              (function (t) {
                if (t) {
                  let t = e.icon;
                  if ("object" == typeof t) return { name: "", data: t };
                  let i = w(t);
                  if (i) return { name: t, data: i };
                }
                return { name: "" };
              })(!!e.ssr)
            );
          function u() {
            let e = n.callback;
            e && (e(), r({}));
          }
          function c(e) {
            if (JSON.stringify(s) !== JSON.stringify(e)) return u(), a(e), !0;
          }
          (0, o.useEffect)(() => (i(!0), u), []),
            (0, o.useEffect)(() => {
              t &&
                (function t() {
                  var i;
                  let n = e.icon;
                  if ("object" == typeof n) {
                    c({ name: "", data: n });
                    return;
                  }
                  let o = w(n);
                  c({ name: n, data: o }) &&
                    (void 0 === o
                      ? r({ callback: el([n], t) })
                      : o &&
                        (null === (i = e.onLoad) ||
                          void 0 === i ||
                          i.call(e, n)));
                })();
            }, [e.icon, t]);
          let { name: h, data: p } = s;
          return p
            ? ev({ ...l, ...p }, e, h)
            : e.children
            ? e.children
            : (0, o.createElement)("span", {});
        })({ ...e, _ref: t })
      );
    },
    1184: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return x;
        },
      });
      let { slice: n, forEach: r } = [],
        o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        s = (e, t, i) => {
          let n = i || {};
          n.path = n.path || "/";
          let r = encodeURIComponent(t),
            s = `${e}=${r}`;
          if (n.maxAge > 0) {
            let e = n.maxAge - 0;
            if (Number.isNaN(e)) throw Error("maxAge should be a Number");
            s += `; Max-Age=${Math.floor(e)}`;
          }
          if (n.domain) {
            if (!o.test(n.domain)) throw TypeError("option domain is invalid");
            s += `; Domain=${n.domain}`;
          }
          if (n.path) {
            if (!o.test(n.path)) throw TypeError("option path is invalid");
            s += `; Path=${n.path}`;
          }
          if (n.expires) {
            if ("function" != typeof n.expires.toUTCString)
              throw TypeError("option expires is invalid");
            s += `; Expires=${n.expires.toUTCString()}`;
          }
          if (
            (n.httpOnly && (s += "; HttpOnly"),
            n.secure && (s += "; Secure"),
            n.sameSite)
          )
            switch (
              "string" == typeof n.sameSite
                ? n.sameSite.toLowerCase()
                : n.sameSite
            ) {
              case !0:
              case "strict":
                s += "; SameSite=Strict";
                break;
              case "lax":
                s += "; SameSite=Lax";
                break;
              case "none":
                s += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
          return s;
        },
        a = {
          create(e, t, i, n) {
            let r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { path: "/", sameSite: "strict" };
            i &&
              ((r.expires = new Date()),
              r.expires.setTime(r.expires.getTime() + 6e4 * i)),
              n && (r.domain = n),
              (document.cookie = s(e, encodeURIComponent(t), r));
          },
          read(e) {
            let t = `${e}=`,
              i = document.cookie.split(";");
            for (let e = 0; e < i.length; e++) {
              let n = i[e];
              for (; " " === n.charAt(0); ) n = n.substring(1, n.length);
              if (0 === n.indexOf(t)) return n.substring(t.length, n.length);
            }
            return null;
          },
          remove(e) {
            this.create(e, "", -1);
          },
        };
      var l = {
          name: "cookie",
          lookup(e) {
            let { lookupCookie: t } = e;
            if (t && "undefined" != typeof document) return a.read(t) || void 0;
          },
          cacheUserLanguage(e, t) {
            let {
              lookupCookie: i,
              cookieMinutes: n,
              cookieDomain: r,
              cookieOptions: o,
            } = t;
            i && "undefined" != typeof document && a.create(i, e, n, r, o);
          },
        },
        u = {
          name: "querystring",
          lookup(e) {
            let t,
              { lookupQuerystring: i } = e;
            if ("undefined" != typeof window) {
              let { search: e } = window.location;
              !window.location.search &&
                window.location.hash?.indexOf("?") > -1 &&
                (e = window.location.hash.substring(
                  window.location.hash.indexOf("?")
                ));
              let n = e.substring(1).split("&");
              for (let e = 0; e < n.length; e++) {
                let r = n[e].indexOf("=");
                r > 0 &&
                  n[e].substring(0, r) === i &&
                  (t = n[e].substring(r + 1));
              }
            }
            return t;
          },
        };
      let c = null,
        h = () => {
          if (null !== c) return c;
          try {
            c = "undefined" !== window && null !== window.localStorage;
            let e = "i18next.translate.boo";
            window.localStorage.setItem(e, "foo"),
              window.localStorage.removeItem(e);
          } catch (e) {
            c = !1;
          }
          return c;
        };
      var p = {
        name: "localStorage",
        lookup(e) {
          let { lookupLocalStorage: t } = e;
          if (t && h()) return window.localStorage.getItem(t) || void 0;
        },
        cacheUserLanguage(e, t) {
          let { lookupLocalStorage: i } = t;
          i && h() && window.localStorage.setItem(i, e);
        },
      };
      let g = null,
        d = () => {
          if (null !== g) return g;
          try {
            g = "undefined" !== window && null !== window.sessionStorage;
            let e = "i18next.translate.boo";
            window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e);
          } catch (e) {
            g = !1;
          }
          return g;
        };
      var f = {
          name: "sessionStorage",
          lookup(e) {
            let { lookupSessionStorage: t } = e;
            if (t && d()) return window.sessionStorage.getItem(t) || void 0;
          },
          cacheUserLanguage(e, t) {
            let { lookupSessionStorage: i } = t;
            i && d() && window.sessionStorage.setItem(i, e);
          },
        },
        m = {
          name: "navigator",
          lookup(e) {
            let t = [];
            if ("undefined" != typeof navigator) {
              let { languages: e, userLanguage: i, language: n } = navigator;
              if (e) for (let i = 0; i < e.length; i++) t.push(e[i]);
              i && t.push(i), n && t.push(n);
            }
            return t.length > 0 ? t : void 0;
          },
        },
        y = {
          name: "htmlTag",
          lookup(e) {
            let t,
              { htmlTag: i } = e,
              n =
                i ||
                ("undefined" != typeof document
                  ? document.documentElement
                  : null);
            return (
              n &&
                "function" == typeof n.getAttribute &&
                (t = n.getAttribute("lang")),
              t
            );
          },
        },
        b = {
          name: "path",
          lookup(e) {
            let { lookupFromPathIndex: t } = e;
            if ("undefined" == typeof window) return;
            let i = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (Array.isArray(i))
              return i["number" == typeof t ? t : 0]?.replace("/", "");
          },
        },
        v = {
          name: "subdomain",
          lookup(e) {
            let { lookupFromSubdomainIndex: t } = e,
              i =
                "undefined" != typeof window &&
                window.location?.hostname?.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
                );
            if (i) return i["number" == typeof t ? t + 1 : 1];
          },
        };
      class x {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.type = "languageDetector"),
            (this.detectors = {}),
            this.init(e, t);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          (this.services = e || { languageUtils: {} }),
            (this.options = (function (e) {
              return (
                r.call(n.call(arguments, 1), (t) => {
                  if (t) for (let i in t) void 0 === e[i] && (e[i] = t[i]);
                }),
                e
              );
            })(t, this.options || {}, {
              order: [
                "querystring",
                "cookie",
                "localStorage",
                "sessionStorage",
                "navigator",
                "htmlTag",
              ],
              lookupQuerystring: "lng",
              lookupCookie: "i18next",
              lookupLocalStorage: "i18nextLng",
              lookupSessionStorage: "i18nextLng",
              caches: ["localStorage"],
              excludeCacheFor: ["cimode"],
              convertDetectedLanguage: (e) => e,
            })),
            "string" == typeof this.options.convertDetectedLanguage &&
              this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
              (this.options.convertDetectedLanguage = (e) =>
                e.replace("-", "_")),
            this.options.lookupFromUrlIndex &&
              (this.options.lookupFromPathIndex =
                this.options.lookupFromUrlIndex),
            (this.i18nOptions = i),
            this.addDetector(l),
            this.addDetector(u),
            this.addDetector(p),
            this.addDetector(f),
            this.addDetector(m),
            this.addDetector(y),
            this.addDetector(b),
            this.addDetector(v);
        }
        addDetector(e) {
          return (this.detectors[e.name] = e), this;
        }
        detect(e) {
          e || (e = this.options.order);
          let t = [];
          return (e.forEach((e) => {
            if (this.detectors[e]) {
              let i = this.detectors[e].lookup(this.options);
              i && "string" == typeof i && (i = [i]), i && (t = t.concat(i));
            }
          }),
          (t = t.map((e) => this.options.convertDetectedLanguage(e))),
          this.services.languageUtils.getBestMatchFromCodes)
            ? t
            : t.length > 0
            ? t[0]
            : null;
        }
        cacheUserLanguage(e, t) {
          t || (t = this.options.caches),
            t &&
              ((this.options.excludeCacheFor &&
                this.options.excludeCacheFor.indexOf(e) > -1) ||
                t.forEach((t) => {
                  this.detectors[t] &&
                    this.detectors[t].cacheUserLanguage(e, this.options);
                }));
        }
      }
      x.type = "languageDetector";
    },
    4312: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = function (e) {
        return {
          type: "backend",
          init: function (e, t, i) {},
          read: function (t, i, n) {
            if ("function" == typeof e) {
              if (e.length < 3) {
                try {
                  var r = e(t, i);
                  r && "function" == typeof r.then
                    ? r
                        .then(function (e) {
                          return n(null, (e && e.default) || e);
                        })
                        .catch(n)
                    : n(null, r);
                } catch (e) {
                  n(e);
                }
                return;
              }
              e(t, i, n);
              return;
            }
            n(null, e && e[t] && e[t][i]);
          },
        };
      };
    },
    6027: function (e, t, i) {
      "use strict";
      i.d(t, {
        ZP: function () {
          return K;
        },
        t: function () {
          return H;
        },
      });
      let n = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class r {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || n),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, i, n) {
          return n && !this.debug
            ? null
            : ("string" == typeof e[0] && (e[0] = `${i}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new r(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new r(this.logger, e)
          );
        }
      }
      var o = new r();
      class s {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let i = this.observers[e].get(t) || 0;
              this.observers[e].set(t, i + 1);
            }),
            this
          );
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            i[n - 1] = arguments[n];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, n] = e;
              for (let e = 0; e < n; e++) t(...i);
            }),
            this.observers["*"] &&
              Array.from(this.observers["*"].entries()).forEach((t) => {
                let [n, r] = t;
                for (let t = 0; t < r; t++) n.apply(n, [e, ...i]);
              });
        }
      }
      function a() {
        let e, t;
        let i = new Promise((i, n) => {
          (e = i), (t = n);
        });
        return (i.resolve = e), (i.reject = t), i;
      }
      function l(e) {
        return null == e ? "" : "" + e;
      }
      let u = /###/g;
      function c(e, t, i) {
        function n(e) {
          return e && e.indexOf("###") > -1 ? e.replace(u, ".") : e;
        }
        function r() {
          return !e || "string" == typeof e;
        }
        let o = "string" != typeof t ? t : t.split("."),
          s = 0;
        for (; s < o.length - 1; ) {
          if (r()) return {};
          let t = n(o[s]);
          !e[t] && i && (e[t] = new i()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++s;
        }
        return r() ? {} : { obj: e, k: n(o[s]) };
      }
      function h(e, t, i) {
        let { obj: n, k: r } = c(e, t, Object);
        if (void 0 !== n || 1 === t.length) {
          n[r] = i;
          return;
        }
        let o = t[t.length - 1],
          s = t.slice(0, t.length - 1),
          a = c(e, s, Object);
        for (; void 0 === a.obj && s.length; )
          (o = `${s[s.length - 1]}.${o}`),
            (a = c(e, (s = s.slice(0, s.length - 1)), Object)) &&
              a.obj &&
              void 0 !== a.obj[`${a.k}.${o}`] &&
              (a.obj = void 0);
        a.obj[`${a.k}.${o}`] = i;
      }
      function p(e, t) {
        let { obj: i, k: n } = c(e, t);
        if (i) return i[n];
      }
      function g(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var d = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function f(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => d[e]) : e;
      }
      class m {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let i = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, i),
            this.regExpQueue.push(e),
            i
          );
        }
      }
      let y = [" ", ",", "?", "!", ";"],
        b = new m(20);
      function v(e, t) {
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        let n = t.split(i),
          r = e;
        for (let e = 0; e < n.length; ) {
          let t;
          if (!r || "object" != typeof r) return;
          let o = "";
          for (let s = e; s < n.length; ++s)
            if ((s !== e && (o += i), (o += n[s]), void 0 !== (t = r[o]))) {
              if (
                ["string", "number", "boolean"].indexOf(typeof t) > -1 &&
                s < n.length - 1
              )
                continue;
              e += s - e + 1;
              break;
            }
          r = t;
        }
        return r;
      }
      function x(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class k extends s {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, i) {
          let n,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o =
              void 0 !== r.keySeparator
                ? r.keySeparator
                : this.options.keySeparator,
            s =
              void 0 !== r.ignoreJSONStructure
                ? r.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1
            ? (n = e.split("."))
            : ((n = [e, t]),
              i &&
                (Array.isArray(i)
                  ? n.push(...i)
                  : "string" == typeof i && o
                  ? n.push(...i.split(o))
                  : n.push(i)));
          let a = p(this.data, n);
          return (!a &&
            !t &&
            !i &&
            e.indexOf(".") > -1 &&
            ((e = n[0]), (t = n[1]), (i = n.slice(2).join("."))),
          a || !s || "string" != typeof i)
            ? a
            : v(this.data && this.data[e] && this.data[e][t], i, o);
        }
        addResource(e, t, i, n) {
          let r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            o =
              void 0 !== r.keySeparator
                ? r.keySeparator
                : this.options.keySeparator,
            s = [e, t];
          i && (s = s.concat(o ? i.split(o) : i)),
            e.indexOf(".") > -1 && ((s = e.split(".")), (n = t), (t = s[1])),
            this.addNamespaces(t),
            h(this.data, s, n),
            r.silent || this.emit("added", e, t, i, n);
        }
        addResources(e, t, i) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let n in i)
            ("string" == typeof i[n] || Array.isArray(i[n])) &&
              this.addResource(e, t, n, i[n], { silent: !0 });
          n.silent || this.emit("added", e, t, i);
        }
        addResourceBundle(e, t, i, n, r) {
          let o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            s = [e, t];
          e.indexOf(".") > -1 &&
            ((s = e.split(".")), (n = i), (i = t), (t = s[1])),
            this.addNamespaces(t);
          let a = p(this.data, s) || {};
          o.skipCopy || (i = JSON.parse(JSON.stringify(i))),
            n
              ? (function e(t, i, n) {
                  for (let r in i)
                    "__proto__" !== r &&
                      "constructor" !== r &&
                      (r in t
                        ? "string" == typeof t[r] ||
                          t[r] instanceof String ||
                          "string" == typeof i[r] ||
                          i[r] instanceof String
                          ? n && (t[r] = i[r])
                          : e(t[r], i[r], n)
                        : (t[r] = i[r]));
                  return t;
                })(a, i, r)
              : (a = { ...a, ...i }),
            h(this.data, s, a),
            o.silent || this.emit("added", e, t, i);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS),
          "v1" === this.options.compatibilityAPI)
            ? { ...this.getResource(e, t) }
            : this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var S = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, i, n, r) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, i, n, r));
            }),
            t
          );
        },
      };
      let w = {};
      class O extends s {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, i) {
              e.forEach((e) => {
                t[e] && (i[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = o.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (null == e) return !1;
          let i = this.resolve(e, t);
          return i && void 0 !== i.res;
        }
        extractFromKey(e, t) {
          let i =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === i && (i = ":");
          let n =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            r = t.ns || this.options.defaultNS || [],
            o = i && e.indexOf(i) > -1,
            s =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, i) {
                (t = t || ""), (i = i || "");
                let n = y.filter((e) => 0 > t.indexOf(e) && 0 > i.indexOf(e));
                if (0 === n.length) return !0;
                let r = b.getRegExp(
                    `(${n.map((e) => ("?" === e ? "\\?" : e)).join("|")})`
                  ),
                  o = !r.test(e);
                if (!o) {
                  let t = e.indexOf(i);
                  t > 0 && !r.test(e.substring(0, t)) && (o = !0);
                }
                return o;
              })(e, i, n);
          if (o && !s) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: r };
            let o = e.split(i);
            (i !== n || (i === n && this.options.ns.indexOf(o[0]) > -1)) &&
              (r = o.shift()),
              (e = o.join(n));
          }
          return "string" == typeof r && (r = [r]), { key: e, namespaces: r };
        }
        translate(e, t, i) {
          if (
            ("object" != typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" == typeof t && (t = { ...t }),
            t || (t = {}),
            null == e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          let n =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            r =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: o, namespaces: s } = this.extractFromKey(e[e.length - 1], t),
            a = s[s.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return n
                ? {
                    res: `${a}${e}${o}`,
                    usedKey: o,
                    exactUsedKey: o,
                    usedLng: l,
                    usedNS: a,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : `${a}${e}${o}`;
            }
            return n
              ? {
                  res: o,
                  usedKey: o,
                  exactUsedKey: o,
                  usedLng: l,
                  usedNS: a,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : o;
          }
          let c = this.resolve(e, t),
            h = c && c.res,
            p = (c && c.usedKey) || o,
            g = (c && c.exactUsedKey) || o,
            d = Object.prototype.toString.apply(h),
            f =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y =
              "string" != typeof h &&
              "boolean" != typeof h &&
              "number" != typeof h;
          if (
            m &&
            h &&
            y &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(d) &&
            !("string" == typeof f && Array.isArray(h))
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!"
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(p, h, { ...t, ns: s })
                : `key '${o} (${this.language})' returned an object instead of string.`;
              return n
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (r) {
              let e = Array.isArray(h),
                i = e ? [] : {},
                n = e ? g : p;
              for (let e in h)
                if (Object.prototype.hasOwnProperty.call(h, e)) {
                  let o = `${n}${r}${e}`;
                  (i[e] = this.translate(o, { ...t, joinArrays: !1, ns: s })),
                    i[e] === o && (i[e] = h[e]);
                }
              h = i;
            }
          } else if (m && "string" == typeof f && Array.isArray(h))
            (h = h.join(f)) && (h = this.extendTranslation(h, e, t, i));
          else {
            let n = !1,
              s = !1,
              u = void 0 !== t.count && "string" != typeof t.count,
              p = O.hasDefaultValue(t),
              g = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              d =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              f =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (f && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${g}`] ||
                t[`defaultValue${d}`] ||
                t.defaultValue;
            !this.isValidLookup(h) && p && ((n = !0), (h = m)),
              this.isValidLookup(h) || ((s = !0), (h = o));
            let y =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                s
                  ? void 0
                  : h,
              b = p && m !== h && this.options.updateMissing;
            if (s || n || b) {
              if (
                (this.logger.log(
                  b ? "updateKey" : "missingKey",
                  l,
                  a,
                  o,
                  b ? m : h
                ),
                r)
              ) {
                let e = this.resolve(o, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                  );
              }
              let e = [],
                i = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language
                );
              if ("fallback" === this.options.saveMissingTo && i && i[0])
                for (let t = 0; t < i.length; t++) e.push(i[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language
                    ))
                  : e.push(t.lng || this.language);
              let n = (e, i, n) => {
                let r = p && n !== h ? n : y;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, a, i, r, b, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, a, i, r, b, t),
                  this.emit("missingKey", e, a, i, h);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let i = this.pluralResolver.getSuffixes(e, t);
                      f &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > i.indexOf(`${this.options.pluralSeparator}zero`) &&
                        i.push(`${this.options.pluralSeparator}zero`),
                        i.forEach((i) => {
                          n([e], o + i, t[`defaultValue${i}`] || m);
                        });
                    })
                  : n(e, o, m));
            }
            (h = this.extendTranslation(h, e, t, c, i)),
              s &&
                h === o &&
                this.options.appendNamespaceToMissingKey &&
                (h = `${a}:${o}`),
              (s || n) &&
                this.options.parseMissingKeyHandler &&
                (h =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${a}:${o}`
                          : o,
                        n ? h : void 0
                      )
                    : this.options.parseMissingKeyHandler(h));
          }
          return n
            ? ((c.res = h), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : h;
        }
        extendTranslation(e, t, i, n, r) {
          var o = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...i },
              i.lng || this.language || n.usedLng,
              n.usedNS,
              n.usedKey,
              { resolved: n }
            );
          else if (!i.skipInterpolation) {
            let s;
            i.interpolation &&
              this.interpolator.init({
                ...i,
                interpolation: {
                  ...this.options.interpolation,
                  ...i.interpolation,
                },
              });
            let a =
              "string" == typeof e &&
              (i &&
              i.interpolation &&
              void 0 !== i.interpolation.skipOnVariables
                ? i.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (a) {
              let t = e.match(this.interpolator.nestingRegexp);
              s = t && t.length;
            }
            let l = i.replace && "string" != typeof i.replace ? i.replace : i;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                i.lng || this.language,
                i
              )),
              a)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              s < (t && t.length) && (i.nest = !1);
            }
            !i.lng &&
              "v1" !== this.options.compatibilityAPI &&
              n &&
              n.res &&
              (i.lng = n.usedLng),
              !1 !== i.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, n = Array(e), s = 0;
                      s < e;
                      s++
                    )
                      n[s] = arguments[s];
                    return r && r[0] === n[0] && !i.context
                      ? (o.logger.warn(
                          `It seems you are nesting recursively key: ${n[0]} in key: ${t[0]}`
                        ),
                        null)
                      : o.translate(...n, t);
                  },
                  i
                )),
              i.interpolation && this.interpolator.reset();
          }
          let s = i.postProcess || this.options.postProcess,
            a = "string" == typeof s ? [s] : s;
          return (
            null != e &&
              a &&
              a.length &&
              !1 !== i.applyPostProcessor &&
              (e = S.handle(
                a,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...n,
                        usedParams: this.getUsedParamsDetails(i),
                      },
                      ...i,
                    }
                  : i,
                this
              )),
            e
          );
        }
        resolve(e) {
          let t,
            i,
            n,
            r,
            o,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let a = this.extractFromKey(e, s),
                l = a.key;
              i = l;
              let u = a.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== s.count && "string" != typeof s.count,
                h =
                  c &&
                  !s.ordinal &&
                  0 === s.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                p =
                  void 0 !== s.context &&
                  ("string" == typeof s.context ||
                    "number" == typeof s.context) &&
                  "" !== s.context,
                g = s.lngs
                  ? s.lngs
                  : this.languageUtils.toResolveHierarchy(
                      s.lng || this.language,
                      s.fallbackLng
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((o = e),
                  !w[`${g[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(o) &&
                    ((w[`${g[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${i}" for languages "${g.join(
                        ", "
                      )}" won't get resolved as namespace "${o}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )),
                  g.forEach((i) => {
                    let o;
                    if (this.isValidLookup(t)) return;
                    r = i;
                    let a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, i, e, s);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(i, s.count, s));
                      let t = `${this.options.pluralSeparator}zero`,
                        n = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (a.push(l + e),
                          s.ordinal &&
                            0 === e.indexOf(n) &&
                            a.push(
                              l + e.replace(n, this.options.pluralSeparator)
                            ),
                          h && a.push(l + t)),
                        p)
                      ) {
                        let i = `${l}${this.options.contextSeparator}${s.context}`;
                        a.push(i),
                          c &&
                            (a.push(i + e),
                            s.ordinal &&
                              0 === e.indexOf(n) &&
                              a.push(
                                i + e.replace(n, this.options.pluralSeparator)
                              ),
                            h && a.push(i + t));
                      }
                    }
                    for (; (o = a.pop()); )
                      this.isValidLookup(t) ||
                        ((n = o), (t = this.getResource(i, e, o, s)));
                  }));
              });
            }),
            { res: t, usedKey: i, exactUsedKey: n, usedLng: r, usedNS: o }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, i) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, i, n)
            : this.resourceStore.getResource(e, t, i, n);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && "string" != typeof e.replace,
            i = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (i.count = e.count),
            this.options.interpolation.defaultVariables &&
              (i = { ...this.options.interpolation.defaultVariables, ...i }),
            !t)
          )
            for (let e of ((i = { ...i }),
            [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ]))
              delete i[e];
          return i;
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let i in e)
            if (
              Object.prototype.hasOwnProperty.call(e, i) &&
              t === i.substring(0, t.length) &&
              void 0 !== e[i]
            )
              return !0;
          return !1;
        }
      }
      function L(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class N {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = o.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = x(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(), "x" === t[t.length - 1].toLowerCase())
            ? null
            : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (!(e = x(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              i = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (i = i.map((e) => e.toLowerCase()))
                : 2 === i.length
                ? ((i[0] = i[0].toLowerCase()),
                  (i[1] = i[1].toUpperCase()),
                  t.indexOf(i[1].toLowerCase()) > -1 &&
                    (i[1] = L(i[1].toLowerCase())))
                : 3 === i.length &&
                  ((i[0] = i[0].toLowerCase()),
                  2 === i[1].length && (i[1] = i[1].toUpperCase()),
                  "sgn" !== i[0] &&
                    2 === i[2].length &&
                    (i[2] = i[2].toUpperCase()),
                  t.indexOf(i[1].toLowerCase()) > -1 &&
                    (i[1] = L(i[1].toLowerCase())),
                  t.indexOf(i[2].toLowerCase()) > -1 &&
                    (i[2] = L(i[2].toLowerCase()))),
              i.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          let t;
          return e
            ? (e.forEach((e) => {
                if (t) return;
                let i = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(i)) &&
                  (t = i);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let i = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(i)) return (t = i);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === i ||
                      (!(0 > e.indexOf("-") && 0 > i.indexOf("-")) &&
                        ((e.indexOf("-") > 0 &&
                          0 > i.indexOf("-") &&
                          e.substring(0, e.indexOf("-")) === i) ||
                          (0 === e.indexOf(i) && i.length > 1)))
                    )
                      return e;
                  });
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t)
            : null;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" == typeof e && (e = e(t)),
            "string" == typeof e && (e = [e]),
            Array.isArray(e))
          )
            return e;
          if (!t) return e.default || [];
          let i = e[t];
          return (
            i || (i = e[this.getScriptPartFromCode(t)]),
            i || (i = e[this.formatLanguageCode(t)]),
            i || (i = e[this.getLanguagePartFromCode(t)]),
            i || (i = e.default),
            i || []
          );
        }
        toResolveHierarchy(e, t) {
          let i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            n = [],
            r = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? n.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`
                    ));
            };
          return (
            "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  r(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  r(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  r(this.getLanguagePartFromCode(e)))
              : "string" == typeof e && r(this.formatLanguageCode(e)),
            i.forEach((e) => {
              0 > n.indexOf(e) && r(this.formatLanguageCode(e));
            }),
            n
          );
        }
      }
      let C = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        j = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        $ = ["v1", "v2", "v3"],
        R = ["v4"],
        E = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class P {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = o.create("pluralResolver")),
            (!this.options.compatibilityJSON ||
              R.includes(this.options.compatibilityJSON)) &&
              ("undefined" == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = (function () {
              let e = {};
              return (
                C.forEach((t) => {
                  t.lngs.forEach((i) => {
                    e[i] = { numbers: t.nr, plurals: j[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(x("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (e) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? i && i.resolvedOptions().pluralCategories.length > 1
            : i && i.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, i).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = this.getRule(e, t);
          return i
            ? this.shouldUseIntlApi()
              ? i
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => E[e] - E[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${
                        t.ordinal ? `ordinal${this.options.prepend}` : ""
                      }${e}`
                  )
              : i.numbers.map((i) => this.getSuffix(e, i, t))
            : [];
        }
        getSuffix(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = this.getRule(e, i);
          return n
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${
                  i.ordinal ? `ordinal${this.options.prepend}` : ""
                }${n.select(t)}`
              : this.getSuffixRetroCompatible(n, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), "");
        }
        getSuffixRetroCompatible(e, t) {
          let i = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            n = e.numbers[i];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === n ? (n = "plural") : 1 === n && (n = ""));
          let r = () =>
            this.options.prepend && n.toString()
              ? this.options.prepend + n.toString()
              : n.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === n
              ? ""
              : "number" == typeof n
              ? `_plural_${n.toString()}`
              : r()
            : "v2" === this.options.compatibilityJSON ||
              (this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0])
            ? r()
            : this.options.prepend && i.toString()
            ? this.options.prepend + i.toString()
            : i.toString();
        }
        shouldUseIntlApi() {
          return !$.includes(this.options.compatibilityJSON);
        }
      }
      function I(e, t, i) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          r =
            !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          o = (function (e, t, i) {
            let n = p(e, i);
            return void 0 !== n ? n : p(t, i);
          })(e, t, i);
        return (
          !o &&
            r &&
            "string" == typeof i &&
            void 0 === (o = v(e, i, n)) &&
            (o = v(t, i, n)),
          o
        );
      }
      class F {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = o.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let {
            escape: t,
            escapeValue: i,
            useRawValueToEscape: n,
            prefix: r,
            prefixEscaped: o,
            suffix: s,
            suffixEscaped: a,
            formatSeparator: l,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: h,
            nestingPrefixEscaped: p,
            nestingSuffix: d,
            nestingSuffixEscaped: m,
            nestingOptionsSeparator: y,
            maxReplaces: b,
            alwaysFormat: v,
          } = e.interpolation;
          (this.escape = void 0 !== t ? t : f),
            (this.escapeValue = void 0 === i || i),
            (this.useRawValueToEscape = void 0 !== n && n),
            (this.prefix = r ? g(r) : o || "{{"),
            (this.suffix = s ? g(s) : a || "}}"),
            (this.formatSeparator = l || ","),
            (this.unescapePrefix = u ? "" : c || "-"),
            (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
            (this.nestingPrefix = h ? g(h) : p || g("$t(")),
            (this.nestingSuffix = d ? g(d) : m || g(")")),
            (this.nestingOptionsSeparator = y || ","),
            (this.maxReplaces = b || 1e3),
            (this.alwaysFormat = void 0 !== v && v),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          let e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g");
          (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
            ));
        }
        interpolate(e, t, i, n) {
          let r, o, s;
          let a =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function u(e) {
            return e.replace(/\$/g, "$$$$");
          }
          let c = (e) => {
            if (0 > e.indexOf(this.formatSeparator)) {
              let r = I(
                t,
                a,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              );
              return this.alwaysFormat
                ? this.format(r, void 0, i, { ...n, ...t, interpolationkey: e })
                : r;
            }
            let r = e.split(this.formatSeparator),
              o = r.shift().trim(),
              s = r.join(this.formatSeparator).trim();
            return this.format(
              I(
                t,
                a,
                o,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              ),
              s,
              i,
              { ...n, ...t, interpolationkey: o }
            );
          };
          this.resetRegExp();
          let h =
              (n && n.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            p =
              n && n.interpolation && void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => u(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? u(this.escape(e)) : u(e)),
              },
            ].forEach((t) => {
              for (s = 0; (r = t.regex.exec(e)); ) {
                let i = r[1].trim();
                if (void 0 === (o = c(i))) {
                  if ("function" == typeof h) {
                    let t = h(e, r, n);
                    o = "string" == typeof t ? t : "";
                  } else if (n && Object.prototype.hasOwnProperty.call(n, i))
                    o = "";
                  else if (p) {
                    o = r[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${i} for interpolating ${e}`
                    ),
                      (o = "");
                } else
                  "string" == typeof o ||
                    this.useRawValueToEscape ||
                    (o = l(o));
                let a = t.safeValue(o);
                if (
                  ((e = e.replace(r[0], a)),
                  p
                    ? ((t.regex.lastIndex += o.length),
                      (t.regex.lastIndex -= r[0].length))
                    : (t.regex.lastIndex = 0),
                  ++s >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let i,
            n,
            r,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function s(e, t) {
            let i = this.nestingOptionsSeparator;
            if (0 > e.indexOf(i)) return e;
            let n = e.split(RegExp(`${i}[ ]*{`)),
              o = `{${n[1]}`;
            e = n[0];
            let s = (o = this.interpolate(o, r)).match(/'/g),
              a = o.match(/"/g);
            ((s && s.length % 2 == 0 && !a) || a.length % 2 != 0) &&
              (o = o.replace(/'/g, '"'));
            try {
              (r = JSON.parse(o)), t && (r = { ...t, ...r });
            } catch (t) {
              return (
                this.logger.warn(
                  `failed parsing options string in nesting for key ${e}`,
                  t
                ),
                `${e}${i}${o}`
              );
            }
            return (
              r.defaultValue &&
                r.defaultValue.indexOf(this.prefix) > -1 &&
                delete r.defaultValue,
              e
            );
          }
          for (; (i = this.nestingRegexp.exec(e)); ) {
            let a = [];
            ((r =
              (r = { ...o }).replace && "string" != typeof r.replace
                ? r.replace
                : r).applyPostProcessor = !1),
              delete r.defaultValue;
            let u = !1;
            if (
              -1 !== i[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(i[1])
            ) {
              let e = i[1].split(this.formatSeparator).map((e) => e.trim());
              (i[1] = e.shift()), (a = e), (u = !0);
            }
            if (
              (n = t(s.call(this, i[1].trim(), r), r)) &&
              i[0] === e &&
              "string" != typeof n
            )
              return n;
            "string" != typeof n && (n = l(n)),
              n ||
                (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),
                (n = "")),
              u &&
                (n = a.reduce(
                  (e, t) =>
                    this.format(e, t, o.lng, {
                      ...o,
                      interpolationkey: i[1].trim(),
                    }),
                  n.trim()
                )),
              (e = e.replace(i[0], n)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function T(e) {
        let t = {};
        return function (i, n, r) {
          let o = n + JSON.stringify(r),
            s = t[o];
          return s || ((s = e(x(n), r)), (t[o] = s)), s(i);
        };
      }
      class A {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = o.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: T((e, t) => {
                let i = new Intl.NumberFormat(e, { ...t });
                return (e) => i.format(e);
              }),
              currency: T((e, t) => {
                let i = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => i.format(e);
              }),
              datetime: T((e, t) => {
                let i = new Intl.DateTimeFormat(e, { ...t });
                return (e) => i.format(e);
              }),
              relativetime: T((e, t) => {
                let i = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => i.format(e, t.range || "day");
              }),
              list: T((e, t) => {
                let i = new Intl.ListFormat(e, { ...t });
                return (e) => i.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} },
            i = t.interpolation;
          this.formatSeparator = i.formatSeparator
            ? i.formatSeparator
            : i.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = T(t);
        }
        format(e, t, i) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            let { formatName: r, formatOptions: o } = (function (e) {
              let t = e.toLowerCase().trim(),
                i = {};
              if (e.indexOf("(") > -1) {
                let n = e.split("(");
                t = n[0].toLowerCase().trim();
                let r = n[1].substring(0, n[1].length - 1);
                "currency" === t && 0 > r.indexOf(":")
                  ? i.currency || (i.currency = r.trim())
                  : "relativetime" === t && 0 > r.indexOf(":")
                  ? i.range || (i.range = r.trim())
                  : r.split(";").forEach((e) => {
                      if (e) {
                        let [t, ...n] = e.split(":"),
                          r = n
                            .join(":")
                            .trim()
                            .replace(/^'+|'+$/g, ""),
                          o = t.trim();
                        i[o] || (i[o] = r),
                          "false" === r && (i[o] = !1),
                          "true" === r && (i[o] = !0),
                          isNaN(r) || (i[o] = parseInt(r, 10));
                      }
                    });
              }
              return { formatName: t, formatOptions: i };
            })(t);
            if (this.formats[r]) {
              let t = e;
              try {
                let s =
                    (n &&
                      n.formatParams &&
                      n.formatParams[n.interpolationkey]) ||
                    {},
                  a = s.locale || s.lng || n.locale || n.lng || i;
                t = this.formats[r](e, a, { ...o, ...n, ...s });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${r}`), e;
          }, e);
        }
      }
      class D extends s {
        constructor(e, t, i) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = i),
            (this.languageUtils = i.languageUtils),
            (this.options = n),
            (this.logger = o.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = n.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5),
            (this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(i, n.backend, n);
        }
        queueLoad(e, t, i, n) {
          let r = {},
            o = {},
            s = {},
            a = {};
          return (
            e.forEach((e) => {
              let n = !0;
              t.forEach((t) => {
                let s = `${e}|${t}`;
                !i.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[s] = 2)
                  : this.state[s] < 0 ||
                    (1 === this.state[s]
                      ? void 0 === o[s] && (o[s] = !0)
                      : ((this.state[s] = 1),
                        (n = !1),
                        void 0 === o[s] && (o[s] = !0),
                        void 0 === r[s] && (r[s] = !0),
                        void 0 === a[t] && (a[t] = !0)));
              }),
                n || (s[e] = !0);
            }),
            (Object.keys(r).length || Object.keys(o).length) &&
              this.queue.push({
                pending: o,
                pendingCount: Object.keys(o).length,
                loaded: {},
                errors: [],
                callback: n,
              }),
            {
              toLoad: Object.keys(r),
              pending: Object.keys(o),
              toLoadLanguages: Object.keys(s),
              toLoadNamespaces: Object.keys(a),
            }
          );
        }
        loaded(e, t, i) {
          let n = e.split("|"),
            r = n[0],
            o = n[1];
          t && this.emit("failedLoading", r, o, t),
            i &&
              this.store.addResourceBundle(r, o, i, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2);
          let s = {};
          this.queue.forEach((i) => {
            (function (e, t, i, n) {
              let { obj: r, k: o } = c(e, t, Object);
              (r[o] = r[o] || []), r[o].push(i);
            })(i.loaded, [r], o),
              void 0 !== i.pending[e] &&
                (delete i.pending[e], i.pendingCount--),
              t && i.errors.push(t),
              0 !== i.pendingCount ||
                i.done ||
                (Object.keys(i.loaded).forEach((e) => {
                  s[e] || (s[e] = {});
                  let t = i.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === s[e][t] && (s[e][t] = !0);
                    });
                }),
                (i.done = !0),
                i.errors.length ? i.callback(i.errors) : i.callback());
          }),
            this.emit("loaded", s),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, i) {
          let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            o = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return o(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: i,
              tried: n,
              wait: r,
              callback: o,
            });
            return;
          }
          this.readingCalls++;
          let s = (s, a) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              if (s && a && n < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, i, n + 1, 2 * r, o);
                }, r);
                return;
              }
              o(s, a);
            },
            a = this.backend[i].bind(this.backend);
          if (2 === a.length) {
            try {
              let i = a(e, t);
              i && "function" == typeof i.then
                ? i.then((e) => s(null, e)).catch(s)
                : s(null, i);
            } catch (e) {
              s(e);
            }
            return;
          }
          return a(e, t, s);
        }
        prepareLoading(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              n && n()
            );
          "string" == typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" == typeof t && (t = [t]);
          let r = this.queueLoad(e, t, i, n);
          if (!r.toLoad.length) return r.pending.length || n(), null;
          r.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, i) {
          this.prepareLoading(e, t, {}, i);
        }
        reload(e, t, i) {
          this.prepareLoading(e, t, { reload: !0 }, i);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            i = e.split("|"),
            n = i[0],
            r = i[1];
          this.read(n, r, "read", void 0, void 0, (i, o) => {
            i &&
              this.logger.warn(
                `${t}loading namespace ${r} for language ${n} failed`,
                i
              ),
              !i &&
                o &&
                this.logger.log(
                  `${t}loaded namespace ${r} for language ${n}`,
                  o
                ),
              this.loaded(e, i, o);
          });
        }
        saveMissing(e, t, i, n, r) {
          let o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          ) {
            this.logger.warn(
              `did not save key "${i}" as the namespace "${t}" was not yet loaded`,
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
            return;
          }
          if (null != i && "" !== i) {
            if (this.backend && this.backend.create) {
              let a = { ...o, isUpdate: r },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let r;
                  (r = 5 === l.length ? l(e, t, i, n, a) : l(e, t, i, n)) &&
                  "function" == typeof r.then
                    ? r.then((e) => s(null, e)).catch(s)
                    : s(null, r);
                } catch (e) {
                  s(e);
                }
              else l(e, t, i, n, s, a);
            }
            e && e[0] && this.store.addResource(e[0], t, i, n);
          }
        }
      }
      function U() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" == typeof e[1] && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" == typeof e[2] || "object" == typeof e[3])
            ) {
              let i = e[3] || e[2];
              Object.keys(i).forEach((e) => {
                t[e] = i[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function M(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function V() {}
      class z extends s {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = M(e)),
            (this.services = {}),
            (this.logger = o),
            (this.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                (t) => {
                  "function" == typeof e[t] && (e[t] = e[t].bind(e));
                }
              );
            })(this),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            "function" == typeof t && ((i = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" == typeof t.ns
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let n = U();
          function r(e) {
            return e ? ("function" == typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...n, ...this.options, ...M(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...n.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? o.init(r(this.modules.logger), this.options)
              : o.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = A);
            let i = new N(this.options);
            this.store = new k(this.options.resources, this.options);
            let s = this.services;
            (s.logger = o),
              (s.resourceStore = this.store),
              (s.languageUtils = i),
              (s.pluralResolver = new P(i, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    n.interpolation.format) &&
                ((s.formatter = r(t)),
                s.formatter.init(s, this.options),
                (this.options.interpolation.format = s.formatter.format.bind(
                  s.formatter
                ))),
              (s.interpolator = new F(this.options)),
              (s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (s.backendConnector = new D(
                r(this.modules.backend),
                s.resourceStore,
                s,
                this.options
              )),
              s.backendConnector.on("*", function (t) {
                for (
                  var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                e.emit(t, ...n);
              }),
              this.modules.languageDetector &&
                ((s.languageDetector = r(this.modules.languageDetector)),
                s.languageDetector.init &&
                  s.languageDetector.init(
                    s,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((s.i18nFormat = r(this.modules.i18nFormat)),
                s.i18nFormat.init && s.i18nFormat.init(this)),
              (this.translator = new O(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                e.emit(t, ...n);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            i || (i = V),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            let e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            ),
            [
              "getResource",
              "hasResourceBundle",
              "getResourceBundle",
              "getDataByLanguage",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments);
              };
            }),
            [
              "addResource",
              "addResources",
              "addResourceBundle",
              "removeResourceBundle",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments), e;
              };
            });
          let s = a(),
            l = () => {
              let e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      "init: i18next is already initialized. You should call init just once!"
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  s.resolve(t),
                  i(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? l()
              : setTimeout(l, 0),
            s
          );
        }
        loadResources(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : V,
            i = t,
            n = "string" == typeof e ? e : this.language;
          if (
            ("function" == typeof e && (i = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              n &&
              "cimode" === n.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return i();
            let e = [],
              t = (t) => {
                t &&
                  "cimode" !== t &&
                  this.services.languageUtils
                    .toResolveHierarchy(t)
                    .forEach((t) => {
                      "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                    });
              };
            n
              ? t(n)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  i(e);
              });
          } else i(null);
        }
        reloadResources(e, t, i) {
          let n = a();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            i || (i = V),
            this.services.backendConnector.reload(e, t, (e) => {
              n.resolve(), i(e);
            }),
            n
          );
        }
        use(e) {
          if (!e)
            throw Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!e.type)
            throw Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && S.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (
                !(["cimode", "dev"].indexOf(t) > -1) &&
                this.store.hasLanguageSomeTranslations(t)
              ) {
                this.resolvedLanguage = t;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var i = this;
          this.isLanguageChangingTo = e;
          let n = a();
          this.emit("languageChanging", e);
          let r = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            o = (e, o) => {
              o
                ? (r(o),
                  this.translator.changeLanguage(o),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", o),
                  this.logger.log("languageChanged", o))
                : (this.isLanguageChangingTo = void 0),
                n.resolve(function () {
                  return i.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return i.t(...arguments);
                  });
            },
            s = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let i =
                "string" == typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              i &&
                (this.language || r(i),
                this.translator.language || this.translator.changeLanguage(i),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(i)),
                this.loadResources(i, (e) => {
                  o(e, i);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(s)
                  : this.services.languageDetector.detect(s)
                : s(e)
              : s(this.services.languageDetector.detect()),
            n
          );
        }
        getFixedT(e, t, i) {
          var n = this;
          let r = function (e, t) {
            let o, s;
            if ("object" != typeof t) {
              for (
                var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), u = 2;
                u < a;
                u++
              )
                l[u - 2] = arguments[u];
              o = n.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else o = { ...t };
            (o.lng = o.lng || r.lng),
              (o.lngs = o.lngs || r.lngs),
              (o.ns = o.ns || r.ns),
              (o.keyPrefix = o.keyPrefix || i || r.keyPrefix);
            let c = n.options.keySeparator || ".";
            return (
              (s =
                o.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${o.keyPrefix}${c}${e}`)
                  : o.keyPrefix
                  ? `${o.keyPrefix}${c}${e}`
                  : e),
              n.t(s, o)
            );
          };
          return (
            "string" == typeof e ? (r.lng = e) : (r.lngs = e),
            (r.ns = t),
            (r.keyPrefix = i),
            r
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          let i = t.lng || this.resolvedLanguage || this.languages[0],
            n = !!this.options && this.options.fallbackLng,
            r = this.languages[this.languages.length - 1];
          if ("cimode" === i.toLowerCase()) return !0;
          let o = (e, t) => {
            let i = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === i || 2 === i;
          };
          if (t.precheck) {
            let e = t.precheck(this, o);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(i, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (o(i, e) && (!n || o(r, e)))
          );
        }
        loadNamespaces(e, t) {
          let i = a();
          return this.options.ns
            ? ("string" == typeof e && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                i.resolve(), t && t(e);
              }),
              i)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let i = a();
          "string" == typeof e && (e = [e]);
          let n = this.options.preload || [],
            r = e.filter(
              (e) =>
                0 > n.indexOf(e) &&
                this.services.languageUtils.isSupportedCode(e)
            );
          return r.length
            ? ((this.options.preload = n.concat(r)),
              this.loadResources((e) => {
                i.resolve(), t && t(e);
              }),
              i)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          return (e ||
            (e =
              this.resolvedLanguage ||
              (this.languages && this.languages.length > 0
                ? this.languages[0]
                : this.language)),
          e)
            ? [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
                "ckb",
              ].indexOf(
                (
                  (this.services && this.services.languageUtils) ||
                  new N(U())
                ).getLanguagePartFromCode(e)
              ) > -1 || e.toLowerCase().indexOf("-arab") > 1
              ? "rtl"
              : "ltr"
            : "rtl";
        }
        static createInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new z(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : V,
            i = e.forkResourceStore;
          i && delete e.forkResourceStore;
          let n = { ...this.options, ...e, isClone: !0 },
            r = new z(n);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (r.logger = r.logger.clone(e)),
            ["store", "services", "language"].forEach((e) => {
              r[e] = this[e];
            }),
            (r.services = { ...this.services }),
            (r.services.utils = {
              hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
            }),
            i &&
              ((r.store = new k(this.store.data, n)),
              (r.services.resourceStore = r.store)),
            (r.translator = new O(r.services, n)),
            r.translator.on("*", function (e) {
              for (
                var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
                n < t;
                n++
              )
                i[n - 1] = arguments[n];
              r.emit(e, ...i);
            }),
            r.init(n, t),
            (r.translator.options = n),
            (r.translator.backendConnector.services.utils = {
              hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
            }),
            r
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      let K = z.createInstance();
      (K.createInstance = z.createInstance),
        K.createInstance,
        K.dir,
        K.init,
        K.loadResources,
        K.reloadResources,
        K.use,
        K.changeLanguage,
        K.getFixedT;
      let H = K.t;
      K.exists,
        K.setDefaultNamespace,
        K.hasLoadedNamespace,
        K.loadNamespaces,
        K.loadLanguages;
    },
    89: function (e, t, i) {
      "use strict";
      let n;
      i.d(t, {
        Db: function () {
          return d;
        },
        $G: function () {
          return v;
        },
      });
      var r = i(2265);
      i(1906), Object.create(null);
      let o = {};
      function s() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        ("string" == typeof t[0] && o[t[0]]) ||
          ("string" == typeof t[0] && (o[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
                console.warn(...t);
            }
          })(...t));
      }
      let a = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          let i = () => {
            setTimeout(() => {
              e.off("initialized", i);
            }, 0),
              t();
          };
          e.on("initialized", i);
        }
      };
      function l(e, t, i) {
        e.loadNamespaces(t, a(e, i));
      }
      function u(e, t, i, n) {
        "string" == typeof i && (i = [i]),
          i.forEach((t) => {
            0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
          }),
          e.loadLanguages(t, a(e, n));
      }
      let c =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        h = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        p = (e) => h[e],
        g = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(c, p),
        },
        d = {
          type: "3rdParty",
          init(e) {
            !(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              g = { ...g, ...e };
            })(e.options.react),
              (n = e);
          },
        },
        f = (0, r.createContext)();
      class m {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      let y = (e, t) => {
        let i = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            i.current = t ? i.current : e;
          }, [e, t]),
          i.current
        );
      };
      function b(e, t, i, n) {
        return e.getFixedT(t, i, n);
      }
      function v(e) {
        var t, i;
        let o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { i18n: a } = o,
          { i18n: c, defaultNS: h } = (0, r.useContext)(f) || {},
          p = a || c || n;
        if ((p && !p.reportNamespaces && (p.reportNamespaces = new m()), !p)) {
          s(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          let e = (e, t) =>
              "string" == typeof t
                ? t
                : t && "object" == typeof t && "string" == typeof t.defaultValue
                ? t.defaultValue
                : Array.isArray(e)
                ? e[e.length - 1]
                : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        p.options.react &&
          void 0 !== p.options.react.wait &&
          s(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        let d = { ...g, ...p.options.react, ...o },
          { useSuspense: v, keyPrefix: x } = d,
          k = e || h || (p.options && p.options.defaultNS);
        (k = "string" == typeof k ? [k] : k || ["translation"]),
          p.reportNamespaces.addUsedNamespaces &&
            p.reportNamespaces.addUsedNamespaces(k);
        let S =
            (p.isInitialized || p.initializedStoreOnce) &&
            k.every((e) =>
              (function (e, t) {
                let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: i.lng,
                        precheck: (t, n) => {
                          if (
                            i.bindI18n &&
                            i.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !n(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let i =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          n = t.languages[0],
                          r = !!t.options && t.options.fallbackLng,
                          o = t.languages[t.languages.length - 1];
                        if ("cimode" === n.toLowerCase()) return !0;
                        let s = (e, i) => {
                          let n =
                            t.services.backendConnector.state[`${e}|${i}`];
                          return -1 === n || 2 === n;
                        };
                        return (
                          (!(
                            i.bindI18n &&
                            i.bindI18n.indexOf("languageChanging") > -1
                          ) ||
                            !t.services.backendConnector.backend ||
                            !t.isLanguageChangingTo ||
                            !!s(t.isLanguageChangingTo, e)) &&
                          !!(
                            t.hasResourceBundle(n, e) ||
                            !t.services.backendConnector.backend ||
                            (t.options.resources &&
                              !t.options.partialBundledLanguages) ||
                            (s(n, e) && (!r || s(o, e)))
                          )
                        );
                      })(e, t, i)
                  : (s("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, p, d)
            ),
          w =
            ((t = o.lng || null),
            (i = "fallback" === d.nsMode ? k : k[0]),
            (0, r.useCallback)(b(p, t, i, x), [p, t, i, x])),
          O = () => w,
          L = () => b(p, o.lng || null, "fallback" === d.nsMode ? k : k[0], x),
          [N, C] = (0, r.useState)(O),
          j = k.join();
        o.lng && (j = `${o.lng}${j}`);
        let $ = y(j),
          R = (0, r.useRef)(!0);
        (0, r.useEffect)(() => {
          let { bindI18n: e, bindI18nStore: t } = d;
          function i() {
            R.current && C(L);
          }
          return (
            (R.current = !0),
            S ||
              v ||
              (o.lng
                ? u(p, o.lng, k, () => {
                    R.current && C(L);
                  })
                : l(p, k, () => {
                    R.current && C(L);
                  })),
            S && $ && $ !== j && R.current && C(L),
            e && p && p.on(e, i),
            t && p && p.store.on(t, i),
            () => {
              (R.current = !1),
                e && p && e.split(" ").forEach((e) => p.off(e, i)),
                t && p && t.split(" ").forEach((e) => p.store.off(e, i));
            }
          );
        }, [p, j]),
          (0, r.useEffect)(() => {
            R.current && S && C(O);
          }, [p, x, S]);
        let E = [N, p, S];
        if (((E.t = N), (E.i18n = p), (E.ready = S), S || (!S && !v))) return E;
        throw new Promise((e) => {
          o.lng ? u(p, o.lng, k, () => e()) : l(p, k, () => e());
        });
      }
    },
  },
]);
