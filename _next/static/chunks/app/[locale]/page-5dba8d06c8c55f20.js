(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5061],
  {
    1648: function (e, s, i) {
      var t = {
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
      function a(e) {
        if (!i.o(t, e))
          return Promise.resolve().then(function () {
            var s = Error("Cannot find module '" + e + "'");
            throw ((s.code = "MODULE_NOT_FOUND"), s);
          });
        var s = t[e],
          a = s[0];
        return i.e(s[1]).then(function () {
          return i.t(a, 19);
        });
      }
      (a.keys = function () {
        return Object.keys(t);
      }),
        (a.id = 1648),
        (e.exports = a);
    },
    4675: function (e, s, i) {
      Promise.resolve().then(i.t.bind(i, 8173, 23)),
        Promise.resolve().then(i.bind(i, 6341)),
        Promise.resolve().then(i.bind(i, 2297)),
        Promise.resolve().then(i.t.bind(i, 5412, 23));
    },
    6646: function (e, s, i) {
      "use strict";
      i.d(s, {
        $: function () {
          return m;
        },
      });
      var t = i(2265),
        a = i(6027),
        n = i(89),
        o = i(4312),
        l = i(1184),
        r = i(9545);
      let c = "translate";
      var d = i(6463);
      function m(e, s) {
        let i = (0, n.$G)(s),
          { i18n: a } = i;
        return (
          (function (e, s) {
            let [i, a] = (0, t.useState)(e.resolvedLanguage),
              n = (0, d.usePathname)();
            (0, t.useEffect)(() => {
              let s = n.split("/")[1];
              a(s), e.reloadResources(s);
            }, [n]),
              (0, t.useEffect)(() => {
                s && e.resolvedLanguage !== s && e.changeLanguage(s);
              }, [s, e, i]);
          })(a, e),
          i
        );
      }
      a.ZP.use(n.Db)
        .use(l.Z)
        .use((0, o.Z)((e, s) => i(1648)("./".concat(e, ".json"))))
        .init({
          ...(function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "en",
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : c;
            return {
              supportedLngs: r.k.map((e) => e),
              fallbackLng: "en",
              lng: e,
              fallbackNS: c,
              defaultNS: c,
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
    9545: function (e, s, i) {
      "use strict";
      i.d(s, {
        k: function () {
          return t;
        },
      });
      let t = [
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
    6648: function (e, s, i) {
      "use strict";
      i.d(s, {
        default: function () {
          return a.a;
        },
      });
      var t = i(5601),
        a = i.n(t);
    },
    5601: function (e, s, i) {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (function (e, s) {
          for (var i in s)
            Object.defineProperty(e, i, { enumerable: !0, get: s[i] });
        })(s, {
          default: function () {
            return r;
          },
          getImageProps: function () {
            return l;
          },
        });
      let t = i(9920),
        a = i(497),
        n = i(8173),
        o = t._(i(1241));
      function l(e) {
        let { props: s } = (0, a.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, i] of Object.entries(s)) void 0 === i && delete s[e];
        return { props: s };
      }
      let r = n.Image;
    },
    6341: function (e, s, i) {
      "use strict";
      var t = i(7437),
        a = i(6648),
        n = i(1359),
        o = i(7138),
        l = i(6463),
        r = i(6646);
      s.default = (e) => {
        var s;
        let { hideRender: i } = e,
          c = (0, l.usePathname)().split("/")[1],
          d =
            null === (s = (0, l.useParams)()) || void 0 === s
              ? void 0
              : s.locale,
          { t: m } = (0, r.$)(d, "translate");
        return (0, t.jsx)("header", {
          children: (0, t.jsxs)("div", {
            className: "landing",
            children: [
              (0, t.jsxs)("div", {
                className: "hero",
                children: [
                  (0, t.jsxs)("div", {
                    className: "logo",
                    children: [
                      (0, t.jsx)(a.default, {
                        unoptimized: !0,
                        src: "/assets/logo.webp",
                        alt: "Logo",
                        width: 128,
                        height: 128,
                        decoding: "async",
                      }),
                      (0, t.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, t.jsxs)("h1", {
                            children: [
                              (0, t.jsx)("span", { children: "CM" }),
                              "CLIENT",
                            ],
                          }),
                          (0, t.jsx)("p", { children: m("header.subTitle") }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "actions",
                    children: [
                      (0, t.jsxs)(o.default, {
                        href: "/" + c + "/download",
                        className: "button__link primary text-shadow",
                        children: [
                          (0, t.jsx)(n.JO, { icon: "fe:download" }),
                          " ",
                          m("header.download"),
                        ],
                      }),
                      (0, t.jsxs)(o.default, {
                        href: "/" + c + "/discord",
                        className: "button__link",
                        children: [
                          (0, t.jsx)(n.JO, { icon: "ic:baseline-discord" }),
                          " Discord",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "perspective",
                children: [
                  (0, t.jsx)("div", { className: "perspective_bc" }),
                  !i &&
                    (0, t.jsx)(a.default, {
                      unoptimized: !0,
                      src: "/assets/ss.webp",
                      className: "screenshot",
                      alt: "Client",
                      width: 650,
                      height: 420,
                      decoding: "async",
                      priority: !0,
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    2297: function (e, s, i) {
      "use strict";
      i.d(s, {
        default: function () {
          return v;
        },
      });
      var t = i(7437),
        a = i(1359),
        n = i(6463),
        o = i(2265),
        l = i(6648),
        r = (e) =>
          (0, t.jsx)("div", {
            className: "feature__wrapper",
            style: {
              "--current-icon": 'url("/assets/icons/'.concat(e.icon, '")'),
              "--current-color": e.color,
              "--aos-delay": e.animationDelay + "ms",
            },
            "data-aos": "fade-in",
            "data-aos-offset": "300",
            children: (0, t.jsxs)("div", {
              className: "feature box green",
              children: [
                (0, t.jsx)(l.default, {
                  src: e.src,
                  width: 768,
                  height: 420,
                  sizes:
                    "(min-width: 2280px) 398px, (min-width: 1960px) 546px, (min-width: 1600px) 756px, (min-width: 1040px) 928px, 90.83vw",
                  alt: "Feature image",
                  quality: 40,
                  decoding: "async",
                  priority: !0,
                }),
                (0, t.jsxs)("div", {
                  className: "content",
                  children: [
                    (0, t.jsxs)("h2", {
                      className: "text-shadow",
                      children: [
                        (0, t.jsx)(a.JO, { icon: e.iconName }),
                        " ",
                        e.title,
                      ],
                    }),
                    (0, t.jsx)("p", { children: e.description }),
                  ],
                }),
              ],
            }),
          }),
        c = i(6646),
        d = () => {
          var e;
          let s =
              null === (e = (0, n.useParams)()) || void 0 === e
                ? void 0
                : e.locale,
            { t: i } = (0, c.$)(s, "translate");
          return (0, t.jsxs)("div", {
            className: "features__container",
            children: [
              (0, t.jsx)(r, {
                icon: "rocket.svg",
                iconName: "bxs:rocket",
                color: "116, 243, 57",
                src: "/assets/fps.webp",
                title: i("home.features.items.item1.title"),
                description: i("home.features.items.item1.description"),
                animationDelay: "100",
              }),
              (0, t.jsx)(r, {
                icon: "hat.svg",
                iconName: "mingcute:hat-fill",
                color: "57, 162, 243",
                src: "/assets/cosmetics.webp",
                title: i("home.features.items.item2.title"),
                description: i("home.features.items.item2.description"),
                animationDelay: "300",
              }),
              (0, t.jsx)(r, {
                icon: "smile.svg",
                iconName: "bxs:smile",
                color: "141, 57, 243",
                src: "/assets/emotes.webp",
                title: i("home.features.items.item3.title"),
                description: i("home.features.items.item3.description"),
                animationDelay: "500",
              }),
              (0, t.jsx)(r, {
                icon: "puzzle.svg",
                iconName: "mdi:puzzle",
                color: "255, 120, 11",
                src: "/assets/mods.webp",
                title: i("home.features.items.item4.title"),
                description: i("home.features.items.item4.description"),
                animationDelay: "700",
              }),
            ],
          });
        },
        m = i(772),
        h = () => {
          var e;
          let [s, i] = (0, o.useState)(0),
            [r] = (0, m.u)(),
            d =
              null === (e = (0, n.useParams)()) || void 0 === e
                ? void 0
                : e.locale,
            [h, u] = (0, o.useState)(d),
            p = (0, n.usePathname)(),
            { t: g } = (0, c.$)(h, "translate"),
            f = [
              {
                src: "/assets/inside_view/cosmetic.webp",
                alt: "Image",
                title: g("home.imageSlider.images.image1.title"),
                description: g("home.imageSlider.images.image1.description"),
              },
              {
                src: "/assets/inside_view/fps.webp",
                alt: "Image",
                title: g("home.imageSlider.images.image2.title"),
                description: g("home.imageSlider.images.image2.description"),
              },
              {
                src: "/assets/inside_view/hud.webp",
                alt: "Image",
                title: g("home.imageSlider.images.image3.title"),
                description: g("home.imageSlider.images.image3.description"),
              },
              {
                src: "/assets/inside_view/mods.webp",
                alt: "Image",
                title: g("home.imageSlider.images.image4.title"),
                description: g("home.imageSlider.images.image4.description"),
              },
            ],
            x = [
              "icon-park-solid:hat",
              "codicon:rocket",
              "material-symbols:resize",
              "material-symbols-light:dashboard-customize-outline-rounded",
            ],
            [j, v] = (0, o.useState)(f);
          function N(e) {
            let t = s + e;
            if (t >= j.length) {
              i(0);
              return;
            }
            if (t < 0) {
              i(j.length - 1);
              return;
            }
            i(t);
          }
          return (
            (0, o.useEffect)(() => {
              u(p.split("/")[1]),
                v(
                  f.map((e, s) => ({
                    ...e,
                    title: g(
                      "home.imageSlider.images.image".concat(s + 1, ".title")
                    ),
                    description: g(
                      "home.imageSlider.images.image".concat(
                        s + 1,
                        ".description"
                      )
                    ),
                  }))
                );
            }, [p, g]),
            (0, o.useEffect)(() => {
              let e = setInterval(() => {
                N(1);
              }, 5e3);
              return () => clearInterval(e);
            }, [s]),
            (0, t.jsxs)("div", {
              className: "images__slider",
              children: [
                (0, t.jsxs)("div", {
                  className: "slider__container",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "image__wrapper",
                      children: [
                        (0, t.jsx)("div", {
                          className: "images",
                          ref: r,
                          children:
                            j &&
                            j.map((e) => {
                              if (j[s] === e)
                                return (0, t.jsx)(
                                  l.default,
                                  {
                                    src: j[s].src,
                                    alt: "Image",
                                    width: 1280,
                                    height: 720,
                                    quality: 40,
                                    decoding: "async",
                                    priority: !0,
                                  },
                                  e.src
                                );
                            }),
                        }),
                        (0, t.jsx)("button", {
                          "aria-label": "Next",
                          onClick: () => N(1),
                          children: (0, t.jsx)(a.JO, {
                            icon: "mingcute:right-fill",
                          }),
                        }),
                        (0, t.jsx)("button", {
                          "aria-label": "Previous",
                          onClick: () => N(-1),
                          children: (0, t.jsx)(a.JO, {
                            icon: "mingcute:left-fill",
                          }),
                        }),
                      ],
                    }),
                    j &&
                      (0, t.jsx)("div", {
                        className: "image__description",
                        ref: r,
                        children:
                          j[s] &&
                          j.map((e) => {
                            if (j[s] === e)
                              return (0, t.jsxs)(
                                o.Fragment,
                                {
                                  children: [
                                    (0, t.jsxs)("h4", {
                                      className: "text-shadow white",
                                      children: [
                                        (0, t.jsx)(a.JO, {
                                          icon: x[s],
                                          className: "icon",
                                        }),
                                        j[s].title,
                                      ],
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-shadow",
                                      children: j[s].description,
                                    }),
                                  ],
                                },
                                e.src
                              );
                          }),
                      }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "images__count",
                  children: (0, t.jsx)("div", {
                    className: "count__container",
                    children: [...Array(j.length).keys()].map((e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: "step " + (e === s ? "current" : ""),
                          onClick: () => i(e),
                        },
                        e
                      )
                    ),
                  }),
                }),
              ],
            })
          );
        },
        u = i(7138),
        p = () => {
          var e;
          let s = (0, n.usePathname)().split("/")[1],
            i =
              null === (e = (0, n.useParams)()) || void 0 === e
                ? void 0
                : e.locale,
            { t: o } = (0, c.$)(i, "translate");
          return (0, t.jsx)("div", {
            className: "shop__hero",
            children: (0, t.jsxs)("div", {
              className: "image__container",
              children: [
                (0, t.jsx)(l.default, {
                  src: "/assets/REPLACE.webp",
                  alt: "Logo",
                  width: 614,
                  height: 614,
                  decoding: "async",
                  loading: "lazy",
                  "data-aos": "fade-right",
                  "data-aos-offset": "300",
                }),
                (0, t.jsxs)("div", {
                  className: "content",
                  "data-aos": "fade-left",
                  "data-aos-offset": "300",
                  children: [
                    (0, t.jsxs)("h1", {
                      children: [
                        (0, t.jsx)(a.JO, { icon: "fe:cart" }),
                        " ",
                        o("home.shop.title"),
                      ],
                    }),
                    (0, t.jsx)("p", { children: o("home.shop.description") }),
                    (0, t.jsxs)(u.default, {
                      href: "/" + s + "/store",
                      className: "button__link primary",
                      children: [
                        (0, t.jsx)(a.JO, { icon: "fe:cart" }),
                        " ",
                        o("home.shop.button"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        g = i(6027);
      let f = [
        {
          name: "CMCLIENT",
          logo: "/assets/logo.webp",
          fps: 2878,
          maxFps: 3363,
        },
        {
          name: "Badlion",
          logo: "/assets/logos/badlion.png",
          fps: 2418,
          maxFps: 2751,
        },
        {
          name: "Salwyrr",
          logo: "/assets/logos/salwyrr.png",
          fps: 2477,
          maxFps: 2561,
        },
        {
          name: "Lunar",
          logo: "/assets/logos/lunar.png",
          fps: 2105,
          maxFps: 2277,
        },
        {
          name: "CheatBreaker",
          logo: "/assets/logos/cheatbreaker.png",
          fps: 1888,
          maxFps: 2068,
        },
        {
          name: "OptiFine",
          logo: "/assets/logos/optifine.png",
          fps: 1748,
          maxFps: 1945,
        },
        {
          name: "BatMod",
          logo: "/assets/logos/batmod.png",
          fps: 1537,
          maxFps: 1616,
        },
        {
          name: "Vanilla",
          logo: "/assets/logos/vanilla.png",
          fps: 1422,
          maxFps: 1604,
        },
        {
          name: "LabyMod",
          logo: "/assets/logos/labymod.webp",
          fps: 1230,
          maxFps: 1346,
        },
        {
          name: "Feather",
          logo: "/assets/logos/feather2.png",
          fps: 944,
          maxFps: 981,
        },
      ];
      var x = () =>
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("h1", {
                className: "text-shadow white",
                children: [
                  (0, t.jsx)(a.JO, { icon: "ph:lightning-fill" }),
                  " ",
                  (0, g.t)("fpsComparision.title"),
                ],
              }),
              (0, t.jsx)("div", {
                className: "fps-comparison-section",
                children: (0, t.jsx)("div", {
                  className: "fps-comparison-container",
                  children: f.map((e, s) => {
                    let i = ((f.length - s) / f.length) * 100;
                    return (0, t.jsxs)(
                      "div",
                      {
                        className: "fps-item",
                        children: [
                          (0, t.jsx)("div", {
                            className: "fps-logo",
                            children: (0, t.jsx)(l.default, {
                              unoptimized: !0,
                              src: e.logo,
                              alt: "".concat(e.name, " Logo"),
                              width: 48,
                              height: 48,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "fps-info",
                            children: [
                              (0, t.jsx)("span", {
                                className: "fps-name",
                                children: e.name,
                              }),
                              (0, t.jsx)("span", {
                                className: "fps-amount",
                                children: (0, t.jsxs)("strong", {
                                  children: [e.maxFps, " FPS"],
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "progress-bar",
                                children: (0, t.jsx)("div", {
                                  className: "progress-bar-fill",
                                  style: {
                                    width: "".concat(i, "%"),
                                    minWidth: "5%",
                                  },
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      s
                    );
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: "fps__texts center",
                children: [
                  (0, t.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: (0, g.t)("fpsComparision.text"),
                    },
                  }),
                  (0, t.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: (0, g.t)("fpsComparision.text1"),
                    },
                  }),
                  (0, t.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: (0, g.t)("fpsComparision.text2"),
                    },
                  }),
                ],
              }),
            ],
          }),
        j = () => {
          var e;
          let s = (0, n.usePathname)().split("/")[1],
            i =
              null === (e = (0, n.useParams)()) || void 0 === e
                ? void 0
                : e.locale,
            { t: o } = (0, c.$)(i, "translate");
          return (0, t.jsxs)("div", {
            className: "download__reminder",
            children: [
              (0, t.jsxs)("div", {
                className: "content",
                children: [
                  (0, t.jsx)(l.default, {
                    unoptimized: !0,
                    src: "/assets/logo.webp",
                    alt: "Logo",
                    width: 128,
                    height: 128,
                    decoding: "async",
                  }),
                  (0, t.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o("downloadReminder.text"),
                    },
                  }),
                ],
              }),
              (0, t.jsxs)(u.default, {
                href: "/" + s + "/download",
                className: "button__link primary",
                children: [
                  (0, t.jsx)(a.JO, { icon: "fe:download" }),
                  " ",
                  o("downloadReminder.button"),
                ],
              }),
            ],
          });
        },
        v = () => {
          var e;
          let s =
              null === (e = (0, n.useParams)()) || void 0 === e
                ? void 0
                : e.locale,
            { t: i } = (0, c.$)(s, "translate");
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("main", {
              children: [
                (0, t.jsxs)("section", {
                  className: "center",
                  children: [
                    (0, t.jsxs)("h1", {
                      className: "underlined text-shadow",
                      "data-aos": "fade-up",
                      "data-aos-offset": "300",
                      children: [
                        (0, t.jsx)(a.JO, { icon: "ion:sparkles" }),
                        " ",
                        i("home.features.title"),
                      ],
                    }),
                    (0, t.jsx)(d, {}),
                  ],
                }),
                (0, t.jsxs)("section", {
                  className: "center",
                  children: [
                    (0, t.jsxs)("h1", {
                      className: "text-shadow white",
                      children: [
                        (0, t.jsx)(a.JO, { icon: "ph:magnifying-glass-bold" }),
                        " ",
                        i("home.imageSlider.title"),
                      ],
                    }),
                    (0, t.jsx)(h, {}),
                  ],
                }),
                (0, t.jsxs)("section", {
                  className: "center",
                  children: [(0, t.jsx)(p, {}), (0, t.jsx)(x, {})],
                }),
                (0, t.jsx)(j, {}),
              ],
            }),
          });
        };
    },
    5412: function () {},
  },
  function (e) {
    e.O(0, [3250, 986, 2861, 7138, 772, 2971, 3526, 1744], function () {
      return e((e.s = 4675));
    }),
      (_N_E = e.O());
  },
]);
