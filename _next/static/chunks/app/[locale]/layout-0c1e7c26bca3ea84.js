(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1203],
  {
    1648: function (e, s, n) {
      var l = {
        "./bn.json": [2403, 2403],
        "./bs.json": [5547, 5547],
        "./cz.json": [1065, 1065],
        "./de.json": [6007, 6007],
        "./el.json": [5998, 5998],
        "./en.json": [8281, 8281],
        "./es.json": [5721, 5721],
        "./fa.json": [562, 562],
        "./fr.json": [8785, 8785],
        "./gsw.json": [6470, 6470],
        "./hi.json": [5755, 5755],
        "./hr.json": [3757, 3757],
        "./hu.json": [6914, 6914],
        "./it.json": [853, 853],
        "./ka.json": [6103, 6103],
        "./nl.json": [9443, 9443],
        "./pl.json": [807, 807],
        "./pt.json": [8678, 8678],
        "./ro.json": [6091, 6091],
        "./ru.json": [1488, 1488],
        "./sk.json": [5530, 5530],
        "./tr.json": [1115, 1115],
        "./ua.json": [9233, 9233],
        "./ur.json": [2732, 2732],
        "./vi.json": [3202, 3202],
        "./zh.json": [5084, 5084],
      };
      function t(e) {
        if (!n.o(l, e))
          return Promise.resolve().then(function () {
            var s = Error("Cannot find module '" + e + "'");
            throw ((s.code = "MODULE_NOT_FOUND"), s);
          });
        var s = l[e],
          t = s[0];
        return n.e(s[1]).then(function () {
          return n.t(t, 19);
        });
      }
      (t.keys = function () {
        return Object.keys(l);
      }),
        (t.id = 1648),
        (e.exports = t);
    },
    5278: function (e, s, n) {
      Promise.resolve().then(n.t.bind(n, 4080, 23)),
        Promise.resolve().then(n.t.bind(n, 8244, 23)),
        Promise.resolve().then(n.t.bind(n, 9593, 23)),
        Promise.resolve().then(n.bind(n, 4237)),
        Promise.resolve().then(n.bind(n, 4875)),
        Promise.resolve().then(n.bind(n, 6504)),
        Promise.resolve().then(n.bind(n, 6987)),
        Promise.resolve().then(n.t.bind(n, 2069, 23));
    },
    6646: function (e, s, n) {
      "use strict";
      n.d(s, {
        $: function () {
          return h;
        },
      });
      var l = n(2265),
        t = n(6027),
        i = n(89),
        r = n(4312),
        c = n(1184),
        a = n(9545);
      let o = "translate";
      var d = n(6463);
      function h(e, s) {
        let n = (0, i.$G)(s),
          { i18n: t } = n;
        return (
          (function (e, s) {
            let [n, t] = (0, l.useState)(e.resolvedLanguage),
              i = (0, d.usePathname)();
            (0, l.useEffect)(() => {
              let s = i.split("/")[1];
              t(s), e.reloadResources(s);
            }, [i]),
              (0, l.useEffect)(() => {
                s && e.resolvedLanguage !== s && e.changeLanguage(s);
              }, [s, e, n]);
          })(t, e),
          n
        );
      }
      t.ZP.use(i.Db)
        .use(c.Z)
        .use((0, r.Z)((e, s) => n(1648)("./".concat(e, ".json"))))
        .init({
          ...(function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "en",
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o;
            return {
              supportedLngs: a.k.map((e) => e),
              fallbackLng: "en",
              lng: e,
              fallbackNS: o,
              defaultNS: o,
              ns: s,
              detection: {
                order: ["path", "navigator", "localStorage", "cookie"],
              },
            };
          })(),
          lng: void 0,
          preload: [],
        });
    },
    9545: function (e, s, n) {
      "use strict";
      n.d(s, {
        k: function () {
          return l;
        },
      });
      let l = [
        "en",
        "pl",
        "es",
        "pt",
        "de",
        "nl",
        "it",
        "fr",
        "tr",
        "cz",
        "ru",
        "ua",
        "el",
        "ro",
        "gsw",
        "hu",
        "bs",
        "hr",
        "sk",
        "zh",
        "vi",
        "fa",
        "hi",
        "bn",
        "ka",
        "ur",
      ];
    },
    4237: function (e, s, n) {
      "use strict";
      var l = n(7437),
        t = n(7323),
        i = n.n(t);
      n(344);
      var r = n(2265);
      s.default = () => (
        (0, r.useLayoutEffect)(() => {
          i().init({ once: !0, offset: 0 });
        }, []),
        (0, l.jsx)(l.Fragment, {})
      );
    },
    4875: function (e, s, n) {
      "use strict";
      n.d(s, {
        default: function () {
          return f;
        },
      });
      var l = n(7437),
        t = n(1359),
        i = n(6648),
        r = n(7138),
        c = n(6463),
        a = n(6646),
        o = n(2265),
        d = (e) => {
          let [s, n] = o.useState(!1),
            [t, i] = (0, o.useState)(e.currentItem),
            r = (e) => {
              i(e), n(!1);
            };
          return (0, l.jsx)("div", {
            className: "dropdown__wrapper",
            children: (0, l.jsxs)("div", {
              className: "dropdown " + (s && "open"),
              children: [
                (0, l.jsx)("div", {
                  className: "dropdown__box",
                  onClick: () => {
                    n((e) => !e);
                  },
                  children: t && t,
                }),
                (0, l.jsx)("div", {
                  className: "dropdown__list",
                  style: { maxHeight: s ? "300px" : "0" },
                  children:
                    e.items &&
                    e.items.map((e, s) =>
                      (0, l.jsx)(
                        "div",
                        { onClick: r.bind(void 0, e), children: e },
                        s
                      )
                    ),
                }),
              ],
            }),
          });
        },
        h = n(9545);
      n(4590);
      var u = (0, n(8064).$)("789b6af5930a00c65e2568caba80c36e0413a264"),
        j = () => {
          var e;
          let s = (0, c.useRouter)(),
            n = (0, c.usePathname)(),
            [i, r] = (0, o.useState)(
              null === (e = (0, c.useParams)()) || void 0 === e
                ? void 0
                : e.locale
            ),
            a = {
              en: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:us" }),
                  " English",
                ],
              }),
              pl: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:pl" }),
                  " Polski",
                ],
              }),
              es: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:es" }),
                  " Espa\xf1ol",
                ],
              }),
              pt: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:br" }),
                  " Portuguese",
                ],
              }),
              de: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:de" }),
                  " Deutsch",
                ],
              }),
              nl: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:nl" }),
                  " Nederlands",
                ],
              }),
              it: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:it" }),
                  " Italiano",
                ],
              }),
              fr: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:fr" }),
                  " Fran\xe7ais",
                ],
              }),
              tr: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:tr" }),
                  " T\xfcrk\xe7e",
                ],
              }),
              cz: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:cz" }),
                  " Czech",
                ],
              }),
              ru: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:ru" }),
                  " Русский",
                ],
              }),
              ua: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:ua" }),
                  " Українська",
                ],
              }),
              el: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:gr" }),
                  " Ελληνικά",
                ],
              }),
              ro: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:ro" }),
                  " Rom\xe2nă",
                ],
              }),
              gsw: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:ch" }),
                  " Schwiizerd\xfctsch",
                ],
              }),
              hu: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:hu" }),
                  " magyar nyelv",
                ],
              }),
              bs: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:bs" }),
                  " Bosanski",
                ],
              }),
              hr: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:hr" }),
                  " Hrvatski",
                ],
              }),
              sk: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:sk" }),
                  " Slovenčina",
                ],
              }),
              zh: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:zh" }),
                  " 中文",
                ],
              }),
              vi: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:vn" }),
                  " Tiếng Việt",
                ],
              }),
              fa: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:fa" }),
                  " فارسی",
                ],
              }),
              hi: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:hi" }),
                  " हिंदी",
                ],
              }),
              bn: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:bn" }),
                  " Bangla",
                ],
              }),
              ka: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:ka" }),
                  " ქართული ენა",
                ],
              }),
              ur: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.JO, { icon: "circle-flags:ur" }),
                  " اُردُو",
                ],
              }),
            };
          (0, o.useEffect)(() => {
            r(n.split("/")[1]);
          }, [n]);
          let j = (0, c.useSelectedLayoutSegments)(),
            f = (e) => {
              u(e),
                s.push("/".concat(e, "/").concat(j.join("/")), { scroll: !1 });
            };
          return (0, l.jsx)("div", {
            children: (0, l.jsx)(d, {
              currentItem: a[i],
              items: [
                ...h.k.map((e) =>
                  (0, l.jsx)(
                    "div",
                    { className: "item", onClick: () => f(e), children: a[e] },
                    e
                  )
                ),
              ],
            }),
          });
        },
        f = () => {
          var e;
          let s =
              null === (e = (0, c.useParams)()) || void 0 === e
                ? void 0
                : e.locale,
            { t: n } = (0, a.$)(s, "translate");
          return (0, l.jsxs)("footer", {
            children: [
              (0, l.jsxs)("div", {
                className: "container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "logo",
                        children: [
                          (0, l.jsx)(i.default, {
                            unoptimized: !0,
                            src: "/assets/logo.webp",
                            alt: "Logo",
                            width: 128,
                            height: 128,
                            decoding: "async",
                          }),
                          (0, l.jsxs)("div", {
                            className: "content",
                            children: [
                              (0, l.jsx)("h3", {
                                dangerouslySetInnerHTML: {
                                  __html: n("footer.title"),
                                },
                              }),
                              (0, l.jsx)("p", {
                                children: n("footer.subTitle"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("br", {}),
                      (0, l.jsx)("p", {
                        className: "small",
                        children: n("footer.notMojang"),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("p", { children: n("footer.socialsTitle") }),
                      (0, l.jsxs)("div", {
                        className: "socials",
                        children: [
                          (0, l.jsx)(r.default, {
                            href: "https://discord.gg/cmclient",
                            title: "Discord",
                            children: (0, l.jsx)(t.JO, {
                              icon: "mingcute:discord-fill",
                            }),
                          }),
                          (0, l.jsx)(r.default, {
                            href: "https://www.youtube.com/@cmclient",
                            title: "YouTube",
                            children: (0, l.jsx)(t.JO, {
                              icon: "mingcute:youtube-fill",
                            }),
                          }),
                          (0, l.jsx)(r.default, {
                            href: "https://t.me/cmclient_official",
                            title: "Telegram",
                            children: (0, l.jsx)(t.JO, {
                              icon: "mingcute:telegram-fill",
                            }),
                          }),
                          (0, l.jsx)(r.default, {
                            href: "https://www.instagram.com/cmpack_client",
                            title: "Instagram",
                            children: (0, l.jsx)(t.JO, {
                              icon: "ri:instagram-fill",
                            }),
                          }),
                          (0, l.jsx)(r.default, {
                            href: "https://www.tiktok.com/@cmclient.official",
                            title: "TikTok",
                            children: (0, l.jsx)(t.JO, {
                              icon: "mingcute:tiktok-fill",
                            }),
                          }),
                          (0, l.jsx)(r.default, {
                            href: "https://x.com/cmclient",
                            title: "Twitter",
                            children: (0, l.jsx)(t.JO, {
                              icon: "mingcute:twitter-fill",
                            }),
                          }),
                          (0, l.jsx)(r.default, {
                            href: "https://github.com/cmclient",
                            title: "GitHub",
                            children: (0, l.jsx)(t.JO, {
                              icon: "mingcute:github-fill",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("p", { children: n("footer.legalTitle") }),
                      (0, l.jsxs)("ul", {
                        className: "legal",
                        children: [
                          (0, l.jsxs)("li", {
                            className: "legal__links",
                            children: [
                              (0, l.jsxs)("p", {
                                className: "small",
                                children: [
                                  "E-mail: ",
                                  (0, l.jsx)("b", {
                                    children: (0, l.jsx)(r.default, {
                                      href: "mailto:support@cmclient.pl",
                                      children: "support@cmclient.pl",
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsx)("p", {
                                className: "small",
                                children: n("footer.legalNotice"),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("li", {
                            className: "links",
                            children: [
                              (0, l.jsx)(r.default, {
                                href: "/privacy",
                                title: "Privacy Policy",
                                children: n("footer.privacyPolicy"),
                              }),
                              (0, l.jsx)(r.default, {
                                href: "/tos",
                                title: "Terms of Service",
                                children: n("footer.termsOfService"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "row",
                    children: (0, l.jsx)(j, {}),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "watermark",
                children: (0, l.jsxs)("p", {
                  children: [
                    "created by ",
                    (0, l.jsx)(r.default, {
                      href: "https://floyare-styles.pages.dev/",
                      target: "_blank",
                      children: "floyarestyles",
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    6504: function (e, s, n) {
      "use strict";
      var l = n(7437),
        t = n(1359),
        i = n(6648),
        r = n(7138),
        c = n(6463),
        a = n(6646);
      s.default = () => {
        var e;
        let s = (0, c.usePathname)().split("/")[1],
          n =
            null === (e = (0, c.useParams)()) || void 0 === e
              ? void 0
              : e.locale,
          { t: o } = (0, a.$)(n, "translate");
        return (0, l.jsxs)("nav", {
          children: [
            (0, l.jsxs)("div", {
              className: "logo",
              children: [
                (0, l.jsx)(i.default, {
                  unoptimized: !0,
                  src: "/assets/logo.webp",
                  alt: "Logo",
                  width: 256,
                  height: 256,
                  decoding: "async",
                }),
                (0, l.jsxs)("h1", {
                  children: [(0, l.jsx)("span", { children: "CM" }), "CLIENT"],
                }),
              ],
            }),
            (0, l.jsx)("label", {
              className: "nav__toggle",
              htmlFor: "nav__input",
              children: (0, l.jsx)(t.JO, { icon: "fe:bar" }),
            }),
            (0, l.jsx)("input", {
              type: "checkbox",
              name: "nav__input",
              id: "nav__input",
            }),
            (0, l.jsxs)("div", {
              className: "content",
              children: [
                (0, l.jsxs)(r.default, {
                  href: "/" + s + "/",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "fe:home" }),
                    " ",
                    o("nav.home"),
                  ],
                }),
                (0, l.jsxs)(r.default, {
                  href: "https://dash.cm-pack.pl",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "fe:user" }),
                    " ",
                    o("nav.panel"),
                  ],
                }),
                (0, l.jsxs)(r.default, {
                  href: "/" + s + "/store",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "fe:cart" }),
                    " ",
                    o("nav.shop"),
                  ],
                }),
                (0, l.jsxs)(r.default, {
                  href: "/" + s + "/faq",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "mdi:faq" }),
                    " ",
                    o("nav.faq"),
                  ],
                }),
                (0, l.jsxs)(r.default, {
                  href: "/" + s + "/changelog",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "fe:document" }),
                    " ",
                    o("nav.changelog"),
                  ],
                }),
                (0, l.jsxs)(r.default, {
                  href: "/" + s + "/staff",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "fe:users" }),
                    " ",
                    o("nav.staff"),
                  ],
                }),
                (0, l.jsxs)(r.default, {
                  href: "/" + s + "/download",
                  className: "button__link primary text-shadow",
                  children: [
                    (0, l.jsx)(t.JO, { icon: "fe:download" }),
                    " ",
                    o("nav.download"),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    6987: function (e, s, n) {
      "use strict";
      var l = n(7437),
        t = n(1359),
        i = n(2265);
      s.default = (e) => {
        let { currentTheme: s } = e,
          [n, r] = (0, i.useState)(s),
          c = (e) => {
            var s;
            let l = null != e ? e : "dark" === n ? "light" : "dark";
            null === (s = document.querySelector("html")) ||
              void 0 === s ||
              s.setAttribute("data-theme", l),
              localStorage.setItem("theme", l),
              r(l);
          };
        return (
          (0, i.useEffect)(() => {
            let e = localStorage.getItem("theme");
            if (!e) {
              localStorage.setItem("theme", s);
              return;
            }
            c(e);
          }, []),
          (0, l.jsx)("button", {
            className: "theme__switch",
            title: "Switch theme",
            onClick: () => c(),
            children:
              "dark" === n
                ? (0, l.jsx)(t.JO, { icon: "fe:moon" })
                : (0, l.jsx)(t.JO, { icon: "fe:sunny-o" }),
          })
        );
      };
    },
    344: function () {},
    2069: function () {},
  },
  function (e) {
    e.O(0, [1363, 986, 2861, 7138, 6946, 2971, 3526, 1744], function () {
      return e((e.s = 5278));
    }),
      (_N_E = e.O());
  },
]);
