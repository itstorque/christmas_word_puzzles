!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "108ae2a7-6def-4aa7-81dc-58618c521953",
        e._sentryDebugIdIdentifier = "sentry-dbid-108ae2a7-6def-4aa7-81dc-58618c521953")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "8204b81adafe313b2513fa8457a6b32fead2d036"
},
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[9336], {
    21824: function(e, t, n) {
        "use strict";
        n.d(t, {
            J6: function() {
                return O
            },
            QJ: function() {
                return f
            },
            eR: function() {
                return C
            },
            eW: function() {
                return E
            },
            sF: function() {
                return S
            },
            yq: function() {
                return _
            }
        });
        var r = n(20090);
        const o = "position"
          , a = "visibility"
          , s = "minHeight"
          , l = "backgroundColor"
          , c = "absolute"
          , i = "on-stage"
          , u = "fly-in"
          , d = "fly-out"
          , m = "slide-up"
          , p = "modal-card"
          , f = "sequence-animation"
          , _ = 400
          , g = e => {
            let t;
            return 2 * e < 1 ? (t = 2 * e,
            .5 * t ** 3) : (t = e - 2,
            .5 * t ** 3 + 2)
        }
          , v = () => Date.now()
          , b = (e, t, n) => {
            e.style[t] = n
        }
          , y = (e, t) => {
            e.classList.add(t)
        }
          , h = (e, t) => {
            e.length ? e.forEach((e => {
                e.classList.remove(t)
            }
            )) : e.classList.remove(t)
        }
          , E = () => {
            const e = document.getElementById("js-hook-pz-moment__game");
            e && y(e, "pz-moment__frame")
        }
          , w = (e, t) => {
            let n = 0;
            return e.forEach((e => {
                e && (n += t,
                b(e, "transitionDelay", "".concat(n, "ms")),
                y(e, m))
            }
            )),
            n
        }
          , S = e => {
            y(e, i)
        }
          , O = e => {
            (0,
            r.Dc)(_).then(( () => {
                const t = document.getElementById("js-hook-pz-moment__".concat(e)).querySelector(".".concat(f));
                t && w(Array.from(t.children), 200)
            }
            ))
        }
          , C = (e, t, n, E) => {
            if (window.isPlayTab || "ios" === window.newsreaderAppPlatform)
                return ( (e, t, n, o) => {
                    const a = document.querySelectorAll(".".concat(m))
                      , s = document.querySelector(".".concat(p))
                      , l = document.querySelector("body");
                    return n && n(),
                    y(t, i),
                    y(t, "playtab-fade-in"),
                    h(e, "playtab-fade-in"),
                    o ? y(l, "game-moment") : h(l, "game-moment"),
                    (0,
                    r.Dc)(600).then(( () => {
                        a.length && h(a, m);
                        const n = t.querySelector(".".concat(f));
                        n ? (0,
                        r.Dc)(w(Array.from(n.children).concat(s), 25)).then(( () => (h(e, i),
                        Promise.resolve()))) : h(e, i)
                    }
                    )),
                    Promise.resolve()
                }
                )(e, t, n, E);
            const S = document.getElementById("js-hook-game-wrapper")
              , O = e.offsetHeight
              , C = document.querySelector(".".concat(p))
              , k = document.querySelectorAll(".".concat(m));
            b(S, l, e.style.backgroundColor || "var(--bg-page, white)"),
            b(S, s, "".concat(O, "px")),
            b(t, a, "hidden"),
            b(t, o, c),
            b(t, "top", 0),
            y(t, i),
            b(e, o, c),
            b(e, "top", 0),
            y(e, d),
            n && n();
            const A = t.offsetHeight;
            return window.isHybridWebView && (b(document.body, l, e.style.backgroundColor || "var(--bg-page, white)"),
            b(document.body, "color", "var(--text, black)")),
            (0,
            r.Dc)(_).then(( () => {
                k.length && h(k, m),
                b(t, a, "visible"),
                y(t, u);
                const n = t.querySelector(".".concat(f));
                n && w(Array.from(n.children).concat(C), 25),
                window.isHybridWebView && "js-hook-pz-moment__welcome" === t.id && "js-hook-pz-moment__game" === e.id && b(document.body, l, "#fb9b00"),
                function(e, t, n, r, o) {
                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : g
                      , s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "px";
                    return new Promise((l => {
                        const c = r - n
                          , i = v()
                          , u = () => {
                            let d = (v() - i) / o;
                            d = d >= 1 ? 1 : d,
                            e.style[t] = Math.min(n + a(d) * c + s, r),
                            1 === d ? l() : window.requestAnimationFrame(u)
                        }
                        ;
                        u()
                    }
                    ))
                }(S, s, O, A, _).then(( () => {
                    h(e, i),
                    h(e, d),
                    h(t, u),
                    b(S, s, 0),
                    b(e, o, "static"),
                    b(t, o, "relative")
                }
                ))
            }
            )),
            new Promise((e => setTimeout(e, _)))
        }
    },
    83097: function(e, t, n) {
        "use strict";
        n.d(t, {
            T0: function() {
                return o
            }
        }),
        n(36105);
        const r = ["nytimes://login", "nytimes://createAccount"]
          , o = (e, t) => r.some((t => e.startsWith(t))) ? e : "".concat(e).concat(t)
    },
    11947: function(e, t, n) {
        "use strict";
        var r = n(89526)
          , o = n(2652)
          , a = n.n(o)
          , s = n(64403)
          , l = n.n(s)
          , c = n(67522)
          , i = n(83097)
          , u = n(54988)
          , d = n(19164);
        const m = e => {
            let t, {error: n, navigationLinks: o, subscriptionCampaign: a, iconError: s, iconSubscribe: m, liraAsset: p, userType: f, documentTitle: _} = e;
            const {newsreaderAppPlatform: g} = (0,
            c.vB)()
              , {isGamesSaleActive: v} = (0,
            d.Z)()
              , b = (0,
            i.T0)(o.login, "&asset=".concat(p));
            switch (_ && (document.title = _),
            n.status) {
            case 401:
            case 403:
                t = r.createElement("div", {
                    className: "pz-error__message"
                }, m && r.createElement("i", {
                    className: l()("pz-error__icon", m)
                }), null, null, null, v && r.createElement("a", {
                    className: "pz-error__button default sale",
                    href: o.subscribe[a]
                }, u.sN.getAcquisitionMessage(g)), r.createElement("br", null), null != f && f.isLoggedIn ? null : null);
                break;
            case 404:
                t = r.createElement("div", {
                    className: "pz-error__message"
                }, s && r.createElement("i", {
                    className: l()("pz-error__icon", s)
                }), r.createElement("h1", null, "This page no longer exists."), r.createElement("a", {
                    className: "pz-error__button",
                    href: "/christmas_word_puzzles/nyt_games/leaderboard"
                }, "Explore Our Games"));
                break;
            default:
                t = r.createElement("div", {
                    className: "pz-error__message"
                }, s && r.createElement("i", {
                    className: l()("pz-error__icon", s)
                }), r.createElement("h1", null, "Our site is ", r.createElement("br", null), "playing games with us.", " "), r.createElement("p", null, "We’re working to solve an issue with our server. Try refreshing the page or check back soon. In the meantime, explore the Mini Crossword and more."), r.createElement("a", {
                    className: "pz-error__button",
                    href: "/christmas_word_puzzles/nyt_games/leaderboard"
                }, "Play Games"))
            }
            return r.createElement("div", {
                className: "pz-error"
            }, t, 404 === n.status ? r.createElement("div", {
                className: "pz-error-img-1",
                alt: ""
            }) : r.createElement("div", {
                className: "pz-error-img",
                alt: ""
            }))
        }
        ;
        m.propTypes = {
            error: a().shape({
                status: a().number,
                stack: a().string
            }).isRequired,
            navigationLinks: a().shape({
                login: a().string,
                subscribe: a().shape({})
            }),
            liraAsset: a().string,
            subscriptionCampaign: a().string,
            iconError: a().string,
            iconSubscribe: a().string,
            userType: a().shape({
                isLoggedIn: a().bool,
                entitlement: a().string
            }),
            documentTitle: a().string
        },
        m.defaultProps = {
            liraAsset: "puzzle-paywall",
            subscriptionCampaign: "default"
        },
        t.Z = m
    },
    98034: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return mt
            },
            S: function() {
                return pt
            }
        });
        var r = n(41407)
          , o = n(89526)
          , a = n(33649)
          , s = n(78163)
          , l = n(84890)
          , c = n(30674)
          , i = n(44291)
          , u = n(17165);
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var p = n(64403)
          , f = n.n(p)
          , _ = n(36629)
          , g = n(68685)
          , v = n.n(g)
          , b = n(71286)
          , y = n(78423)
          , h = n(67522)
          , E = n(57256)
          , w = n(14237)
          , S = n(155)
          , O = n(65489)
          , C = n(15419)
          , k = n(33064)
          , A = n(6697)
          , N = n(74078)
          , P = n(95982)
          , T = n(72059)
          , I = n(12547)
          , L = n(30829)
          , j = n(6249)
          , D = {
            botLink: "BotLinkCTA-module_botLink__QjG6_",
            borderTop: "BotLinkCTA-module_borderTop__wvkVO",
            borderBottom: "BotLinkCTA-module_borderBottom__8BcQ3",
            bordered: "BotLinkCTA-module_bordered__Hlfnq",
            botIcon: "BotLinkCTA-module_botIcon__yzXNQ",
            "botIcon--wordlebot": "BotLinkCTA-module_botIcon--wordlebot__qPvxB",
            "botIcon--connectionsbot": "BotLinkCTA-module_botIcon--connectionsbot__BuUx6",
            largeIcon: "BotLinkCTA-module_largeIcon___OmVf",
            botLinkContent: "BotLinkCTA-module_botLinkContent__fwOuS",
            botLinkHref: "BotLinkCTA-module_botLinkHref__hUzmT",
            botLinkHref__gamesApp: "BotLinkCTA-module_botLinkHref__gamesApp__yB_17",
            archive: "BotLinkCTA-module_archive__OOzlg",
            mobileOnly: "BotLinkCTA-module_mobileOnly__qBzlN"
        }
          , x = e => {
            let {botName: t, botLinkHref: n, primaryText: r, supportingText: a, borderPlacement: s, isArchive: l=!1, handleBotClick: c} = e;
            const i = !!window.gamesAppPlatform;
            return o.createElement("a", {
                href: n,
                "data-testid": "bot-link-cta",
                className: f()(D.botLink, {
                    [D.borderTop]: "top" === s,
                    [D.borderBottom]: "bottom" === s,
                    [D.bordered]: "both" === s
                }),
                onClick: () => {
                    c && c()
                }
            }, o.createElement("div", {
                className: f()(D.botIcon, D["botIcon--".concat(t)], {
                    [D.largeIcon]: l
                }),
                "aria-hidden": "true",
                "data-testid": "bot-link-icon"
            }), o.createElement("div", {
                className: f()(D.botLinkContent, {
                    [D.archive]: l
                })
            }, o.createElement("p", null, r, o.createElement("br", null), o.createElement("span", {
                className: f()(D.botLinkHref, i ? D.botLinkHref__gamesApp : "")
            }, a))))
        }
          , z = n(67374)
          , M = n(45788)
          , R = n(64444)
          , G = n(75539)
          , B = n(66100)
          , Z = n(82786)
          , F = n(73917)
          , H = n(69537)
          , U = n(63448);
        const X = {
            label: "mini-page",
            icon: "mini",
            href: "/christmas_word_puzzles/nyt_games/leaderboard/game/mini",
            title: "The Mini",
            description: "Solve in seconds"
        }
          , W = {
            label: "spelling-bee",
            context: "spelling-bee",
            icon: "sb",
            href: "/puzzles/spelling-bee",
            title: "Spelling Bee",
            description: "Wrangle words"
        }
          , Y = {
            label: "wordle",
            icon: "wa",
            href: "/christmas_word_puzzles/nyt_games/wordle/index.html",
            title: "Wordle",
            description: "Untangle terms"
        }
          , V = {
            label: "mini-archive",
            icon: "mini",
            href: "/christmas_word_puzzles/nyt_games/leaderboard/archive/mini",
            title: "The Mini Archive",
            description: ""
        }
          , q = {
            label: "spelling-bee-hub",
            icon: "sb",
            href: "/puzzles/spelling-bee/hub",
            title: "Spelling Bee Past Puzzles",
            description: ""
        }
          , $ = {
            label: "archive",
            icon: "connections",
            href: "/christmas_word_puzzles/nyt_games/connections/archive",
            title: "Connections Archive",
            description: ""
        };
        var Q = n(2652)
          , J = n.n(Q);
        const K = "undefined" == typeof window ? {} : window
          , ee = "__viewers__";
        let te;
        "IntersectionObserver"in K && "IntersectionObserverEntry"in K && "intersectionRatio"in K.IntersectionObserverEntry.prototype && ("isIntersecting"in K.IntersectionObserverEntry.prototype || Object.defineProperty(K.IntersectionObserverEntry.prototype, "isIntersecting", {
            get() {
                return this.intersectionRatio > 0
            }
        }),
        K.__observeInView__ = !0);
        function ne() {
            return ne = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            ne.apply(this, arguments)
        }
        const re = {
            tagName: J().string,
            event: J().string.isRequired,
            eventRegion: J().string,
            eventLabel: J().string,
            eventContext: J().string,
            onClick: J().func,
            data: J().object
        }
          , oe = {};
        class ae extends o.PureComponent {
            constructor(e) {
                super(e),
                this.wrapper = o.createRef()
            }
            componentDidMount() {
                var e, t;
                this.wrapper.current && (e = this.wrapper.current,
                t = () => {
                    var e;
                    const {event: t, eventRegion: n, eventLabel: r, eventContext: o, data: a} = this.props
                      , s = t + n + r
                      , l = null == a || null === (e = a.card) || void 0 === e ? void 0 : e.uri;
                    var c, i, u, d;
                    l ? oe[l] || (window.foundationTrack("impression", a),
                    oe[l] = !0) : oe[s] || (c = t,
                    i = n,
                    u = r,
                    d = o,
                    "undefined" != typeof window && window.foundationTrack && window.foundationTrack("impression", {
                        module: {
                            name: c,
                            context: d,
                            region: i || "",
                            label: u || void 0
                        }
                    }),
                    oe[s] = !0)
                }
                ,
                window.__observeInView__ && (te || (te = new K.IntersectionObserver((e => {
                    e.forEach((e => {
                        e.isIntersecting && e.target[ee].forEach((t => t(e)))
                    }
                    ))
                }
                ),{
                    threshold: .4
                })),
                e[ee] ? e[ee].push(t) : (e[ee] = [t],
                te.observe(e))))
            }
            render() {
                const {tagName: e, onClick: t} = this.props
                  , n = e
                  , r = {};
                return Object.entries(this.props).forEach((e => {
                    let[t,n] = e;
                    re[t] || (r[t] = n)
                }
                )),
                o.createElement(n, ne({}, r, {
                    ref: this.wrapper,
                    onClick: t
                }))
            }
        }
        ae.propTypes = re,
        ae.defaultProps = {
            tagName: "div",
            eventRegion: "scroll-to",
            eventLabel: "",
            eventContext: "",
            onClick: () => {}
            ,
            data: null
        };
        var se = ae
          , le = n(73435)
          , ce = {
            flexContainer: "GamesCarouselStack-module_flexContainer__zNNGz",
            expandToRow: "GamesCarouselStack-module_expandToRow__tSmur GamesCarouselStack-module_flexContainer__zNNGz",
            mobileColumn: "GamesCarouselStack-module_mobileColumn__AEMBF",
            "visually-hidden": "GamesCarouselStack-module_visually-hidden__tH9Gh",
            wa: "GamesCarouselStack-module_wa__PO5Is",
            icon: "GamesCarouselStack-module_icon__CKQtP",
            strands: "GamesCarouselStack-module_strands__zcUW0",
            sb: "GamesCarouselStack-module_sb__XZl13",
            mini: "GamesCarouselStack-module_mini__feuak",
            connections: "GamesCarouselStack-module_connections__fEg4q",
            sudoku: "GamesCarouselStack-module_sudoku__wyNQo",
            tiles: "GamesCarouselStack-module_tiles__vHSCe",
            crossword: "GamesCarouselStack-module_crossword__ThgcK",
            carouselGameItem: "GamesCarouselStack-module_carouselGameItem__xwlh9",
            gamesGridItem: "GamesCarouselStack-module_gamesGridItem__zaFFS",
            frictionMitigationContent: "GamesCarouselStack-module_frictionMitigationContent__sfyQO",
            carouselStackContainer: "GamesCarouselStack-module_carouselStackContainer__ogcQ6",
            gridContainer: "GamesCarouselStack-module_gridContainer__H4FmJ",
            gamesStack: "GamesCarouselStack-module_gamesStack__ueFpq",
            lockIcon: "GamesCarouselStack-module_lockIcon__XRL7T",
            slideDown: "GamesCarouselStack-module_slideDown__l1Hja",
            flyIn: "GamesCarouselStack-module_flyIn__J88Nh",
            flyOut: "GamesCarouselStack-module_flyOut__z0dbt",
            fadeIn: "GamesCarouselStack-module_fadeIn__QX6EP"
        };
        const ie = e => {
            var t;
            let {label: n, href: r, title: a, description: s, icon: l, showLock: c=!1, tracking: i, clickTracking: u, impressionTracking: d} = e;
            (0,
            o.useEffect)(( () => {
                d && (0,
                le.h)(d.name, d.region, d.label, d.context)
            }
            ), []);
            let m = r;
            var p;
            if (null !== (t = window) && void 0 !== t && null !== (t = t.location) && void 0 !== t && t.search && (m += null === (p = window) || void 0 === p || null === (p = p.location) || void 0 === p ? void 0 : p.search),
            i) {
                const {context: e, eventRegion: t, eventDate: r} = i
                  , d = () => {
                    const o = "Connections Archive" === a
                      , s = "wordle" === i.eventRegion;
                    u && (0,
                    O.ob)(u),
                    (0,
                    O.$g)({
                        date: r,
                        t: "today"
                    }, s ? n : e, t, o ? "archive" : "next-game", n, !1, "congrats")
                }
                ;
                return o.createElement(se, {
                    tagName: "a",
                    event: "next-game",
                    eventRegion: t,
                    eventLabel: n,
                    eventContext: e,
                    href: m,
                    className: f()(ce.carouselGameItem, ce[l]),
                    onClick: d
                }, o.createElement(o.Fragment, null, c && o.createElement("i", {
                    className: ce.lockIcon
                }), o.createElement("div", {
                    role: "img",
                    "aria-label": a,
                    className: ce.icon
                }), o.createElement("p", null, a), o.createElement("span", null, s)))
            }
            return o.createElement("a", {
                className: f()(ce.carouselGameItem, ce[l]),
                onClick: () => {
                    u && (0,
                    O.ob)(u)
                }
                ,
                href: r
            }, c && o.createElement("i", {
                className: ce.lockIcon
            }), o.createElement("div", {
                role: "img",
                "aria-label": a,
                className: ce.icon
            }), o.createElement("p", null, a), o.createElement("span", null, s))
        }
        ;
        function ue() {
            return ue = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            ue.apply(this, arguments)
        }
        const de = e => {
            // let {gamesArray: t, tracking: n, title: r="PLAY TODAY’S GAMES"} = e;
            // const a = t;
            // return o.createElement("div", {
            //     className: ce.frictionMitigationContent
            // }, o.createElement("div", {
            //     className: ce.carouselStackContainer
            // }, o.createElement("hr", null), o.createElement("h4", null, r), o.createElement("div", {
            //     className: ce.gridContainer
            // }, o.createElement("div", {
            //     className: ce.gamesStack
            // }, a.map((e => o.createElement(ie, ue({
            //     key: e.title,
            //     tracking: n
            // }, e))))))))
        }
        ;
        var me = n(81353)
          , pe = n(43812)
          , fe = n(36149)
          , _e = n(51722)
          , ge = "Congrats-module_button__HW5bZ";
        const ve = () => {
            const e = (0,
            a.v9)(T.K4);
            return o.createElement("dl", {
                "data-testid": "conn-congrats__share",
                className: "Congrats-module_shareBlocksContainer__l5TZ0",
                "aria-label": "".concat(_e.nA, " by ").concat(e.length, " grid of color block emojis representing your guesses")
            }, e.map(( (e, t) => {
                const n = e.every((t => t === e[0])) ? "correct" : "incorrect"
                  , r = "".concat(n, ". ").concat("correct" === n ? "Found level ".concat(e[0] + 1, ".") : "Guessed items from levels ".concat(e.join(", ")));
                return o.createElement("div", {
                    key: "attempt-".concat(t),
                    className: "Congrats-module_shareRow__iOpoQ"
                }, o.createElement("dd", {
                    "aria-label": "attempt #".concat(t + 1)
                }), o.createElement("dt", {
                    "aria-label": r
                }, e.map(( (e, n) => o.createElement("span", {
                    className: "Congrats-module_shareBlock__c4G_C",
                    "data-level": e,
                    "aria-hidden": "true",
                    key: "item".concat(n, "-level").concat(e),
                    "data-testid": "guess-square-attempt".concat(t, "-item").concat(n, "-level").concat(e)
                })))))
            }
            )))
        }
          , be = e => {
            let {buttonType: t="primary", handleShareClick: n=( () => {})} = e;
            return o.createElement(A.Z, {
                className: ge,
                text: "Leaderboard",
                onClick: () => {document.location.href = "/christmas_word_puzzles/nyt_games/leaderboard"},
                type: t
            })
        }
        ;
        function ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function he(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const Ee = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "bottom"
              , t = arguments.length > 1 ? arguments[1] : void 0
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0;
            const a = (0,
            _.Z)(r, "yyyy-MM-dd")
              , s = (0,
            _.Z)(r, "MMM d, y");
            let l = {
                botName: "connectionsbot",
                botLinkHref: "https://www.nytimes.com/interactive/2024/upshot/connections-bot.html",
                primaryText: "How tough was today's puzzle?",
                supportingText: "Find out with Connections Bot ›",
                borderPlacement: e,
                handleBotClick: () => t()
            };
            return null;
            return n && (l = he(he({}, l), {}, {
                botLinkHref: "https://www.nytimes.com/interactive/2024/upshot/connections-bot.html?date=".concat(a),
                primaryText: "How tough was the puzzle from ".concat(s, "?"),
                supportingText: "Find out with Connections Bot ›"
            })),
            o.createElement(x, l)
        };
        var we = n(3254)
          , Se = n(87760)
          , Oe = n(22777)
          , Ce = n(48198);
        let ke;
        Ce.win.googletag = Ce.win.googletag || {
            cmd: []
        };
        const {googletag: Ae} = Ce.win;
        var Ne = n(5002)
          , Pe = n(74964)
          , Te = e => {
            let {entitlement: t, hasXwd: n, isGameFinished: r} = e;
            return !(t.includes("cr") || n) && !r && ((0,
            Oe.Z)() || (0,
            Ne.Z)() && (0,
            Pe.Z)())
        }
        ;
        const Ie = "DFP_GamingInterstitialConnections"
          , Le = "DFP_GamingInterstitialConnections_AA";
        Ce.win.googletag = Ce.win.googletag || {
            cmd: []
        };
        const {googletag: je} = Ce.win;
        var De = n(52200);
        const xe = ["hasLoaded", "today"];
        function ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Me(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ze(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const Re = {
            transitionTo: "welcome",
            isActive: !0
        };
        var Ge = n(85203)
          , Be = n(3097)
          , Ze = n(35451)
          , Fe = n(52809)
          , He = n(56700)
          , Ue = n(82478);
        function Xe() {
            return Xe = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Xe.apply(this, arguments)
        }
        var We = e => {
            let {game: t} = e;
            return o.createElement(z.im, {
                bgColor: t.bgColor
            }, o.createElement("div", {
                className: "pz-moment__container alternate"
            }, o.createElement(z.Sx, {
                trackData: t.game ? {
                    elementName: t.game,
                    moduleLabel: "welcome"
                } : void 0
            }), o.createElement(Ue.o, {
                className: "pz-moment__content sequence-animation",
                passThrough: !t.usesNewMomentSystem
            }, o.createElement(z.JO, {
                icon: t.icon,
                size: "medium"
            }), o.createElement(z.Dx, {
                text: t.title,
                level: "2",
                size: "large"
            }), o.createElement(z.dk, Xe({}, t.description, {
                level: "3"
            })), o.createElement(z.h_, {
                text: t.meta
            }), (t.buttonGroups || []).map(( (e, t) => {
                let {buttons: n, header: r, desktopButtonOrder: a} = e;
                return o.createElement(z.hE, {
                    key: t,
                    buttons: n,
                    header: r,
                    order: a
                })
            }
            )), o.createElement("p", {
                className: "pz-moment__info"
            }, o.createElement("span", {
                className: "visually-hidden"
            }, "Game information"), o.createElement(z.Ej, {
                date: t.date
            }), o.createElement(z.ML, {
                editor: t.editor
            }), t.infoText && o.createElement(z.XU, null, t.infoText)), o.createElement(z.FG, {
                promo: t.promo
            }))))
        }
          , Ye = n(98697)
          , Ve = n(88595)
          , qe = n(28557);
        function $e(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Qe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $e(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $e(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const Je = (e, t, n) => {
            const {playButton: r, logInButton: o, subscribeButton: s, registerButton: l, subscribeGamesSalesButton: c, archiveButton: i} = ( (e, t, n) => {
                const {updateUserType: r} = (0,
                w.aF)()
                  , {getVariant: o, reportExposure: s} = (0,
                E.Z)()
                  , {trackConnectionsClick: l} = (0,
                P.Z)()
                  , c = (0,
                a.v9)(u.UQ)
                  , i = (0,
                a.v9)(T.JQ)
                  , d = (0,
                a.v9)(T.Mr).length > 0
                  , m = (0,
                a.v9)(u.Hh)
                  , p = (0,
                pe.Z)()
                  , {mode: f, hasSetting: _} = (0,
                Ye.default)()
                  , {newsreaderAppPlatform: g} = (0,
                h.vB)()
                  , v = o("GAMES_PLOPRO_WELCOME_SCREEN_0425")
                  , b = o("MAPS_wordleRegisNewsletterOptIn_0324")
                  , y = !!v && "0_control" !== v
                  , S = {
                    text: d ? i ? "Admire puzzle" : "Continue" : "Play",
                    className: i && m ? ["cta-full-width"] : [],
                    dataTestId: "moment-btn-play",
                    action: () => {
                        if (n ? e() : t(),
                        d || p || l("start-game"),
                        !d && p) {
                            const e = ( () => {
                                let e = "";
                                const t = "AM=".concat(_("mode") ? 0 : 1);
                                return e = "DM=".concat("dark" === f ? 1 : 0),
                                "".concat(e, ",").concat(t)
                            }
                            )();
                            l("start-game", e)
                        }
                        i && l("admire-puzzle", null, "welcome")
                    }
                }
                  , O = {
                    text: "Leaderboard",
                    color: "secondary",
                    dataTestId: "moment-btn-login",
                    action: e => {
                        document.location.href = "/christmas_word_puzzles/nyt_games/leaderboard"
                    }
                }
                  , N = Qe(Qe({}, O), {}, {
                    color: "primary",
                    text: "Hello",
                    dataTestId: "moment-btn-register",
                })
                  , {getButtonText: I} = (0,
                Ve.Z)(!0);
                return {
                    playButton: S,
                    logInButton: O,
                    subscribeButton: A,
                    registerButton: N,
                    subscribeGamesSalesButton: {
                        text: I(),
                        color: "secondary",
                        className: ["cta-games-sales"],
                        dataTestId: "moment-btn-subscribe-sales",
                        action: () => {
                            (0,
                            qe.c)("connections", r),
                            l(I().toLowerCase(), null, "welcome")
                        }
                    },
                    archiveButton: {
                        text: "Play the Connections archive",
                        color: "secondary",
                        dataTestId: "moment-btn-play-archive",
                        action: () => {
                            l("archive", null, "welcome")
                        }
                        ,
                        isLink: !0,
                        url: c
                    }
                }
            }
            )(e, t, n)
              , d = (0,
            a.v9)(u.Hh)
              , m = (0,
            a.v9)(T.JQ)
              , {userType: {isLoggedIn: p, hasXwd: f}} = (0,
            w.aF)();
            return d ? f && !p ? [{
                buttons: [l]
            }] : f ? m ? [{
                buttons: [r, i]
            }] : [{
                buttons: [r]
            }] : p ? [{
                buttons: [Qe(Qe({}, s), {}, {
                    color: "primary"
                })]
            }] : [{
                buttons: [Qe(Qe({}, s), {}, {
                    color: "primary"
                }), o]
            }] : f ? [{
                buttons: [r]
            }] : p ? [{
                desktopButtonOrder: "vertical",
                buttons: [r, s, c]
            }] : [{
                desktopButtonOrder: "vertical",
                buttons: [r, o, s, c]
            }]
        }
          , Ke = ["hasAd", "hasLoaded", "transitionFromWelcomeToAd", "transitionFromWelcomeToGame", "today"];
        function et(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function tt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? et(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var nt = e => {
            let {hasAd: t, hasLoaded: n, transitionFromWelcomeToAd: r, transitionFromWelcomeToGame: s, today: l} = e
              , i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, Ke);
            const {userType: d, hasLoaded: m} = (0,
            w.aF)()
              , {trackConnectionsImpression: p} = (0,
            P.Z)()
              , {isLoggedIn: f, hasXwd: _} = d
              , g = (0,
            a.v9)(u.Hh)
              , v = (0,
            a.v9)(c.bh)
              , b = (0,
            a.v9)(c.$t)
              , y = Je(r, s, t)
              , h = g && (!_ || _ && !f) ? "Want to play this past puzzle?" : "Group words that share a common thread."
              , E = tt(tt({}, i), {}, {
                title: g ? (0,
                Ze.F)(l) : "Connections",
                icon: "connections",
                description: {
                    text: b ? "Go ahead, add another day to your <em>".concat(v, " day</em> streak.") : h
                },
                buttonGroups: y
            });
            return (0,
            o.useEffect)(( () => {
                n && m && p("welcome-modal", (e => {
                    const {isLoggedIn: t, hasXwd: n} = e;
                    return null;
                    return n ? null : t ? "subscribe" : "log-in, subscribe"
                }
                )(d))
            }
            ), [n, m]),
            o.createElement(We, {
                game: E
            })
        }
        ;
        const rt = ["hasAd", "hasLoaded", "transitionFromWelcomeToAd", "transitionFromWelcomeToGame", "today"];
        function ot(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function at(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ot(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var st = e => {
            let {hasAd: t, hasLoaded: n, transitionFromWelcomeToAd: r, transitionFromWelcomeToGame: s, today: l} = e
              , c = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, rt);
            const i = (0,
            a.v9)(T.JQ)
              , d = (0,
            a.v9)(T.q_)
              , m = (0,
            a.v9)(T.Xh)
              , {trackConnectionsImpression: p} = (0,
            P.Z)()
              , f = (0,
            a.v9)(u.Hh)
              , _ = ( () => {
                const e = (0,
                a.v9)(T.JQ)
                  , t = (0,
                a.v9)(T.q_)
                  , n = (0,
                a.v9)(T.Yj)
                  , r = (0,
                a.v9)(u.Hh)
                  , o = (0,
                a.v9)(T.Xh)
                  , {userType: {hasXwd: s}} = (0,
                w.aF)()
                  , l = "You have ".concat(o, "/4 categories");
                return r ? e ? t ? "You solved with ".concat(n, " mistakes.") : "You're out of guesses." : "".concat(l, s ? ". Keep going!" : ". Want to keep playing?") : e ? t ? ("Great job on our connections puzzle! Your total score across all puzzles is: " + calculate_total_score()) : "Tomorrow's a new day, with a new puzzle. See you then." : "".concat(l, ". Keep going!")
            }
            )();
            let g = "Welcome Back"
              , v = "connections-progress-".concat(m);
            i && (d ? (g = "Nice work!",
            v = "connections-progress-won") : (g = "Connections",
            v = "connections-progress-loss")),
            f && (g = (0,
            Ze.F)(l));
            const b = Je(r, s, t)
              , y = at(at({}, c), {}, {
                icon: v,
                title: g,
                description: {
                    text: _
                },
                buttonGroups: b
            });
            return (0,
            o.useEffect)(( () => {
                n && p("welcome-back-modal")
            }
            ), [n]),
            o.createElement(We, {
                game: y
            })
        }
        ;
        const lt = ["momentSystem", "transitionFromWelcomeToGame", "transitionFromWelcomeToAd", "today", "hasLoaded"];
        function ct(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var it = n(11947);
        const ut = [{
            name: "ad",
            Content: e => {
                let {isActive: t, transitionFromAdToGame: n} = e;
                const {usingH5Ad: r} = (e => {
                    let {isActive: t, transitionFromAdToGame: n} = e;
                    const [r,s] = (0,
                    o.useState)(!1)
                      , [l,c] = (0,
                    o.useState)(!1)
                      , [i,u] = (0,
                    o.useState)()
                      , [d,m] = (0,
                    o.useState)()
                      , {userType: p, hasLoaded: f} = (0,
                    w.aF)()
                      , _ = (0,
                    a.v9)(T.JQ)
                      , {hasAbraLoaded: g, reportExposure: v, getVariant: b} = (0,
                    E.Z)();
                    return (0,
                    o.useEffect)(( () => {
                        if (l)
                            return;
                        if (!f || !g || !(0,
                        Oe.Z)())
                            return;
                        const {entitlement: e, hasXwd: t} = p;
                        Te({
                            entitlement: e,
                            hasXwd: t,
                            isGameFinished: _
                        }) && (b(Le) && v(Le),
                        b(Ie) && (v(Ie),
                        "1_Variant" === b(Ie) && c(!0)))
                    }
                    ), [g, f, p, _]),
                    (0,
                    o.useEffect)(( () => {
                        var e;
                        l && (null === (e = Ce.win.AdSlot4) || void 0 === e || e.cmd.push(( () => {
                            var e;
                            null === (e = Ce.win.AdSlot4) || void 0 === e || e.events.subscribe({
                                name: "AdSlotReady",
                                scope: "all",
                                callback: () => {
                                    je.cmd.push(( () => {
                                        const e = ( () => {
                                            var e;
                                            const t = null === (e = window) || void 0 === e || null === (e = e.AdSlot4) || void 0 === e || null === (e = e.props) || void 0 === e ? void 0 : e.adUnitPath;
                                            return ke = Ae.defineOutOfPageSlot("".concat(t, "/special"), Ae.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL),
                                            ke && ke.addService(Ae.pubads()),
                                            ke
                                        }
                                        )();
                                        if (!e)
                                            return s(!0);
                                        u(e),
                                        ( (e, t) => {
                                            Ae.pubads().addEventListener("gameManualInterstitialSlotClosed", ( () => {
                                                e(),
                                                Ae.destroySlots([t])
                                            }
                                            ))
                                        }
                                        )(n, e),
                                        je.pubads().addEventListener("gameManualInterstitialSlotReady", (e => {
                                            m(e)
                                        }
                                        )),
                                        je.display(e)
                                    }
                                    ))
                                }
                            })
                        }
                        )))
                    }
                    ), [l]),
                    (0,
                    o.useEffect)(( () => {
                        t && (!l || i && !r || n())
                    }
                    ), [t, r, l, i]),
                    (0,
                    o.useEffect)(( () => {
                        t && d && d.makeGameManualInterstitialVisible()
                    }
                    ), [t, d]),
                    {
                        usingH5Ad: l
                    }
                }
                )({
                    transitionFromAdToGame: n,
                    isActive: t
                })
                  , {reportExposure: s, getVariant: l} = (0,
                E.Z)()
                  , c = l(we.w);
                return (0,
                o.useEffect)(( () => {
                    c && t && s(we.w)
                }
                ), [c, t]),
                !t || r ? null : o.createElement(Se.Z, {
                    id: "intsl",
                    isSpecialAdUnit: !0,
                    position: "intsl",
                    onClose: n,
                    ctaCopy: "Continue to Connections",
                    className: f()("ad-interstital", "AdMoment-module_adInterstitial__lqVlA"),
                    skipButtonClassName: f()("AdMoment-module_adInterstitialSkipButton__WWTfv"),
                    enableCountdown: 0,
                    delaySkip: c === we.$
                })
            }
        }, {
            name: "loading",
            Content: e => {
                let {hasLoaded: t, today: n} = e
                  , r = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, o = {}, a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                            n = a[r],
                            t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++)
                            n = a[r],
                            t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                }(e, xe);
                const s = (0,
                a.v9)(u.Hh)
                  , {hasAbraLoadedWithUser: l} = (0,
                E.Z)()
                  , c = (0,
                S.V)()
                  , i = l && s && !c ? "game" : Re.transitionTo
                  , d = Me(Me(Me({}, Re), r), {}, {
                    hasLoaded: t,
                    today: n,
                    bgColor: "$connections-periwinkle",
                    barBgColor: "rgba(255, 255, 255, 0.6)",
                    barColor: "#000",
                    transitionTo: i
                });
                return o.createElement(De.Z, d)
            }
        }, {
            name: "welcome",
            Content: e => {
                var t;
                let {momentSystem: n, transitionFromWelcomeToGame: r, transitionFromWelcomeToAd: s, today: l, hasLoaded: c} = e
                  , d = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, o = {}, a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                            n = a[r],
                            t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++)
                            n = a[r],
                            t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                }(e, lt);
                const {getVariant: m, hasAbraLoaded: p} = (0,
                E.Z)()
                  , [_,g] = (0,
                o.useState)(!1)
                  , {userType: v, hasLoaded: b} = (0,
                w.aF)()
                  , {trackConnectionsImpression: y, trackConnectionsClick: h} = (0,
                P.Z)()
                  , S = (0,
                a.v9)(i.Tn)
                  , O = (0,
                a.v9)(i.$6)
                  , C = (0,
                a.v9)(T.JQ)
                  , k = (0,
                a.v9)(T.Mr).length > 0
                  , A = (0,
                Be.X)(l)
                  , N = (0,
                a.v9)(u.Hh)
                  , I = (0,
                a.v9)(i.Jv)
                  , L = {
                    hasGameProgress: k,
                    gameName: null !== (t = window.pageName) && void 0 !== t ? t : "",
                    date: l.toISOString().slice(0, 10),
                    isArchive: N,
                    puzzleId: I
                }
                  , j = (0,
                Ge.T4)();
                (0,
                o.useEffect)(( () => {
                    if (p && b) {
                        const e = Te({
                            isGameFinished: C,
                            hasXwd: v.hasXwd,
                            entitlement: v.entitlement
                        });
                        g(e)
                    }
                }
                ), [b, C, p, v.entitlement]);
                const D = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ct(Object(n), !0).forEach((function(t) {
                            var r, o, a, s;
                            r = e,
                            o = t,
                            a = n[t],
                            (o = "symbol" == typeof (s = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, "string");
                                    if ("object" != typeof r)
                                        return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = a
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    bgColor: "$connections-periwinkle",
                    infoText: o.createElement(o.Fragment, null, o.createElement("span", {
                        className: f()({
                            "pz-moment__info-puzzleNumber": !N,
                            "pz-moment__info-date": N
                        })
                    }, "No. ", 12190), o.createElement("span", {
                        className: "pz-moment__info-editor"
                    }, "By ", S), O && o.createElement("span", {
                        className: "pz-moment__info-illustrator"
                    }, "Illustrations by ", O)),
                    date: N ? "" : (0,
                    Ze.F)(new Date("Dec 25 2025 00:00:00 GMT-0700 (Pacific Daylight Time)")),
                    hasAd: false,
                    hasLoaded: c,
                    transitionFromWelcomeToGame: r,
                    transitionFromWelcomeToAd: s,
                    today: new Date("Dec 25 2025 00:00:00 GMT-0700 (Pacific Daylight Time)")
                }, d);
                return (0,
                o.useEffect)(( () => {
                    p && ((0,
                    Ge.s_)(),
                    j && y("welcome", "download-app"))
                }
                ), [j, p]),
                o.createElement(o.Fragment, null, k ? o.createElement(st, D) : o.createElement(nt, D), j ? null : null, (0, He.I)(L))
            }
        }, {
            name: "congrats",
            Content: e => {
                let {isActive: t} = e;
                const {isWeb: n, isGamesApp: r, gamesAppPlatform: s, isNewsreaderApp: d, meetsMinimumVersion: m} = (0,
                h.vB)()
                  , {unit: p} = (0,
                b.useUnit)(y.config)
                  , {userType: _, updateUserType: g, hasLoaded: D} = (0,
                w.aF)()
                  , {hasXwd: x} = _
                  , Q = !_.isLoggedIn
                  , J = (0,
                a.I0)()
                  , K = "congrats" === (0,
                a.v9)(G.aX)
                  , [ee,te] = (0,
                o.useState)(!1)
                  , [ne,re] = (0,
                o.useState)([])
                  , [oe,ae] = (0,
                o.useState)("")
                  , se = (0,
                a.v9)(u.Hh)
                  , le = (0,
                S.F)(se)
                  , ce = (0,
                a.v9)(u.UQ)
                  , ie = (0,
                a.v9)(u.On)
                  , ue = (0,
                a.v9)(u.wJ)
                  , _e = (0,
                a.v9)(i.oN)
                  , ye = (0,
                pe.Z)()
                  , we = (0,
                a.v9)(T.Yj)
                  , Se = se ? N.Dh[we] : N.r9[we]
                  , Oe = (0,
                a.v9)(c.qo)
                  , Ce = (0,
                a.v9)(c.lR)
                  , ke = (0,
                a.v9)(i.Jv)
                  , Ae = (0,
                a.v9)(i.nf)
                  , {getVariant: Ne, reportExposure: Pe, reportHybridExposure: Te, hasAbraLoaded: Ie} = (0,
                E.Z)()
                  , Le = Ie && "1_OMA" === Ne("OMA_ENDSCREENACTIONS_CONNECTIONS") && (null == p ? void 0 : p.canShow)
                  , je = r && ("ios" === s && m("5.54") || "android" === s && m("5.55"));
                (0,
                o.useEffect)(( () => {
                    t && Ie && je && Ne("GAMES_appConnectionsBot_0425_v2") && Te("GAMES_appConnectionsBot_0425_v2")
                }
                ), [Ie, je, Te, t]);
                const De = !r && !Le && (se && !d || !se);
                (0,
                o.useEffect)(( () => {
                    n && te(!0)
                }
                ), [n]),
                (0,
                o.useEffect)(( () => {
                    if (ee && D) {
                        const e = (e => {
                            const t = [];
                            return e || ($.showLock = !0,
                            V.showLock = !0,
                            q.showLock = !0),
                            t.push(Y, X, W, $, V, q),
                            t
                        }
                        )(x)
                          , t = (e => e ? "INCLUDED IN YOUR SUBSCRIPTION" : "PLAY TODAY’S GAMES")(x);
                        re(e),
                        ae(t)
                    }
                }
                ), [ee, D]);
                const xe = (0,
                a.v9)(T.Gp)
                  , {trackConnectionsImpression: ze, trackConnectionsClick: Me} = (0,
                P.Z)()
                  , Re = () => Me("connections-bot", null, "congrats");
                function Ge() {
                    Me("archive", null, "congrats")
                }
                const Be = e => {
                    switch (e) {
                    case "connections-archive":
                    case "connections-archive-today":
                        return (0,
                        j.Z)(ce);
                    case "spelling-bee":
                        return (0,
                        j.Z)("/puzzles/spelling-bee");
                    default:
                        return ""
                    }
                }
                ;
                (0,
                o.useEffect)(( () => {
                    let e = null;
                    if (Oe && K) {
                        const {win_percentage: t, puzzles_completed: n, current_streak: r, max_streak: o} = Oe;
                        e = ["p: ".concat(n), "w: ".concat(t), "cs: ".concat(r), "ms: ".concat(o)]
                    }
                    ze("congrats-modal", e)
                }
                ), [Oe, K]);
                const Ze = (0,
                a.v9)(T.a0)
                  , Fe = Ne("Conv_SubCon_Games_PLOPRO_EXPANSION_246")
                  , He = Fe && "0_Control" !== Fe ? (0,
                C.ZP)(window || void 0) : (0,
                k.Z)(window || void 0)
                  , Ue = e => {
                    Fe && Pe("Conv_SubCon_Games_PLOPRO_EXPANSION_246"),
                    Me("register", null, "congrats"),
                    (0,
                    L.Z)(e, g, void 0, He)
                }
                  , Xe = (0,
                a.v9)(T.cG)
                  , We = e => {
                    e.preventDefault(),
                    e.stopPropagation(),
                    Me("share", null, "congrats"),
                    (0,
                    me.BN)({
                        text: Xe
                    }, ( () => {
                        J((0,
                        Z.eS)(F.nI.COPY_RESULTS))
                    }
                    ), ( () => {
                        J((0,
                        Z.eS)(F.nI.SHARE_FAIL))
                    }
                    ), e)
                }
                  , Ye = (0,
                a.v9)(T.K4)
                  , Ve = (0,
                fe.T)(K, 500);
                return o.createElement(z.ji, {
                    bgColor: "bg-moment"
                }, o.createElement("div", {
                    className: f()("Congrats-module_modalContent__LWPwi", "sequence-animation")
                }, o.createElement(z.WL, {
                    closeText: "Back to puzzle",
                    action: () => pt.transition("congrats", "game"),
                    className: "Congrats-module_closeButton__KtTXC"
                }), o.createElement("div", null, o.createElement("div", {
                    className: f()("Congrats-module_completionIcon__PsydU", xe ? "Congrats-module_lost__YUW_p" : "Congrats-module_won__l9l9l", {
                        "Congrats-module_todaysPuzzle__vOhE7": !se
                    })
                }), o.createElement("h2", {
                    "data-testid": "conn-congrats__title",
                    className: f()("Congrats-module_modalTitle__QDY5W", {
                        "Congrats-module_titleCondensed__XuQW1": Q
                    })
                }, "".concat(void 0 !== we && Se, "!")), !Q && o.createElement("div", {
                    className: f()("Congrats-module_statsContainer__PElM3", Le ? "" : "Congrats-module_withMarginBottom__wHK__", De ? "Congrats-module_withCTALink__AAXdH" : ""),
                    "data-testid": "conn-congrats__stats"
                }, o.createElement(R.Z, {
                    statsData: Oe,
                    firstRowOnly: !0,
                    showPostErrorMsg: Ze
                }), Ce.length > 0 && o.createElement("div", {
                    className: "Congrats-module_badgesContainer__PnO70"
                }, o.createElement(B.l, {
                    isVisible: Ve,
                    badges: Ce,
                    openBadgeDetail: e => {
                        J(H.Nw.openBadgeDetail({
                            detail: e,
                            returnMoment: "congrats"
                        })),
                        pt.transition("congrats", "badgeDetail")
                    }
                    ,
                    onVisible: (e, t) => J((0,
                    U.g)(e, t)),
                    trackBadgesInteraction: (e, t) => {
                        const n = he({
                            puzzleId: _e
                        }, ue)
                          , r = (0,
                        M.ae)(e, "congrats", t, n);
                        (0,
                        O.LW)(r)
                    }
                })), De && Ee("bottom", Re, se, ie)), Le ? o.createElement(v(), {
                    guesses: Ye,
                    dayOfGame: Ae,
                    puzzleId: ke,
                    handleRegisterClick: Ue,
                    handleShareClick: We,
                    shouldUseDarkModeRollout: ye
                }) : o.createElement(o.Fragment, null, Q && o.createElement("div", {
                    className: "Congrats-module_modalCreateAcctContainer__otGSB",
                    "data-testid": "conn-congrats__register"
                }, o.createElement("h2", {
                    className: "Congrats-module_modalSubtitle__ZRjQq"
                }, "Your Score Across All Games Is " + [calculate_total_score(), sendScoreToServer()][0]), " ", o.createElement(A.Z, null), De && Ee("both", Re, se, ie)), o.createElement(ve, null), o.createElement("div", {
              //}, "Your Score Across All Games Is " + [calculate_total_score(), sendScoreToServer()][0]), " ", o.createElement(A.Z, null), De && Ee("both", Re, se, ie)), o.createElement(ve, null), o.createElement("div", {}, "Your Score Across All Games Is " + [calculate_total_score(), sendScoreToServer()][0]), " ", o.createElement(A.Z, null), De && Ee("both", Re, se, ie)), o.createElement(ve, null), o.createElement("div", {
                    className: f()("Congrats-module_buttonsContainer__FL59Y")
                }, o.createElement(be, {
                    buttonType: Q ? "transparent" : "primary",
                    handleShareClick: We
                }), !ee && le.map((e => {
                    const t = "connections-archive" === e || "connections-archive-today" === e;
                    return o.createElement(I.Z, {
                        puzzleId: ke,
                        puzzleDate: Ae,
                        key: e,
                        url: Be(e),
                        fromGame: "connections",
                        nextGame: e,
                        trackNextGameClick: t ? Ge : void 0
                    })
                }
                )))))), ee && !Le && o.createElement(de, {
                    title: oe,
                    gamesArray: ne,
                    tracking: {
                        context: "".concat(ke),
                        event: "",
                        eventRegion: "connections",
                        eventDate: Ae
                    }
                }), o.createElement(l.r, {
                    momentParent: "congrats",
                    isActive: t
                }))
            }
        }, {
            name: "error",
            Content: () => {
                const {userType: e} = (0,
                w.aF)();
                return o.createElement(it.Z, {
                    error: {
                        status: 404
                    },
                    navigationLinks: window.navigationLinks,
                    userType: e
                })
            }
        }, {
            name: "badgeDetail",
            Content: e => {
                let {isActive: t} = e;
                const n = (0,
                a.v9)(c.j7)
                  , r = (0,
                a.v9)(u.wJ)
                  , d = (0,
                a.v9)(i.oN);
                return n && n.badge ? o.createElement(o.Fragment, null, o.createElement(s.d, {
                    badgeDetail: n.badge,
                    isActive: t,
                    isOpeningUnearned: n.isOpeningUnearned,
                    handleClose: () => pt.transition("badgeDetail", n.returnMoment),
                    puzzleTrackingInfo: m({
                        puzzleId: d
                    }, r)
                }), o.createElement(l.r, {
                    momentParent: "badgeDetail",
                    isActive: t
                })) : null
            }
        }]
          , dt = (0,
        r.Z)(ut)
          , {Moments: mt, momentSystem: pt} = dt
    },
    44291: function(e, t, n) {
        "use strict";
        n.d(t, {
            $6: function() {
                return u
            },
            Jv: function() {
                return d
            },
            Tn: function() {
                return i
            },
            dG: function() {
                return _
            },
            j3: function() {
                return f
            },
            nf: function() {
                return p
            },
            oN: function() {
                return m
            }
        });
        var r = n(47549)
          , o = n(17165)
          , a = n(88770);
        const s = (0,
        r.createSelector)((e => e), (e => a.X.endpoints.getSolutionByDate.select(e)))
          , l = (0,
        r.createSelector)([e => e, o._2], ( (e, t) => s(t)(e)))
          , c = (0,
        r.createSelector)(l, (e => e.data || null))
          , i = (0,
        r.createSelector)(c, (e => (null == e ? void 0 : e.editor) || "Wyna Liu"))
          , u = (0,
        r.createSelector)(c, (e => (null == e ? void 0 : e.illustrator) || null))
          , d = (0,
        r.createSelector)(c, (e => (null == e ? void 0 : e.id) || null))
          , m = (0,
        r.createSelector)(d, (e => {
            var t;
            return null !== (t = null == e ? void 0 : e.toString()) && void 0 !== t ? t : ""
        }
        ))
          , p = (0,
        r.createSelector)(c, (e => (null == e ? void 0 : e.print_date) || ""))
          , f = (0,
        r.createSelector)(c, (e => e ? e.categories.map(( (e, t) => ({
            title: e.title,
            level: t
        }))) : []))
          , _ = (0,
        r.createSelector)(c, (e => e ? e.categories.reduce(( (e, t, n) => {
            const r = t.cards.map((e => ({
                content: e.image_url ? e.image_alt_text || "" : e.content,
                originalPosition: e.position,
                level: n,
                imageUrl: e.image_url || ""
            })));
            return e.concat(r)
        }
        ), []) : []))
    },
    88770: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return s
            },
            S: function() {
                return l
            }
        });
        var r = n(7709)
          , o = n(65489);
        function a(e, t, n, r, o, a, s) {
            try {
                var l = e[a](s)
                  , c = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        const s = (0,
        r.LC)({
            reducerPath: "loadSolutionApi",
            baseQuery: function() {
                let {baseUrl: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    baseUrl: ""
                };
                return function() {
                    var t, n = (t = function(t) {
                        let {url: n, method: r="get", options: a} = t;
                        return function*() {
                            try {
                                const t = yield o.Be[r](e + n, a);
                                return "errors"in t && t.errors ? {
                                    error: {
                                        status: t.status,
                                        data: t.errors,
                                        results: t.results
                                    }
                                } : {
                                    data: t
                                }
                            } catch (e) {
                                return {
                                    error: {
                                        status: null == e ? void 0 : e.status,
                                        data: e.message
                                    }
                                }
                            }
                        }()
                    }
                    ,
                    function() {
                        var e = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var s = t.apply(e, n);
                            function l(e) {
                                a(s, r, o, l, c, "next", e)
                            }
                            function c(e) {
                                a(s, r, o, l, c, "throw", e)
                            }
                            l(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }()
            }({
                baseUrl: ""
            }),
            keepUnusedDataFor: 1 / 0,
            endpoints: e => ({
                getSolutionByDate: e.query({
                    query: e => ({
                        method: "get",
                        url: "/christmas_word_puzzles/nyt_games/connections_problem.json",
                        options: {
                            withStatus: !0
                        }
                    }),
                    transformResponse: (e, t, n) => {
                        if (e && (r = e) && "string" == typeof r.print_date && "number" == typeof r.id && "object" == typeof r.categories)
                            return e;
                        throw (0,
                        o.lY)(new Error("Invalid response, missing or mistmatching field types")),
                        new Error("Invalid reponse");
                        var r
                    }
                    ,
                    transformErrorResponse: (e, t, n) => {
                        const r = {
                            message: ["message: ".concat(e.data), "today: ".concat(n)].join(", ")
                        };
                        return console.warn("Request for connections puzzle data failed with error: ".concat(r.message)),
                        e
                    }
                })
            })
        })
          , {useGetSolutionByDateQuery: l} = s
    },
    75541: function(e, t, n) {
        "use strict";
        n.d(t, {
            Lw: function() {
                return s
            },
            SY: function() {
                return o
            },
            Y5: function() {
                return a
            }
        });
        var r = n(51722);
        const o = e => {
            const t = {};
            return e.forEach((e => {
                let {level: n} = e;
                const r = t[n];
                t[n] = void 0 !== r ? r + 1 : 1
            }
            )),
            Object.values(t).includes(r.nA - 1)
        }
          , a = e => e.split(",").sort(( (e, t) => Number(e) - Number(t))).toString()
          , s = (e, t) => e.map((e => a(e.cards))).includes(a(t.cards))
    },
    82795: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return un
            }
        });
        var r = n(89526)
          , o = n(73961)
          , a = n(33649)
          , s = n(98697)
          , l = n(71286)
          , c = n(78423)
          , i = n(67522)
          , u = n(14237)
          , d = n(57256)
          , m = n(43812)
          , p = n(38661)
          , f = n(84510);
        var _ = n(31189)
          , g = n(60063)
          , v = n(98034)
          , b = n(75539)
          , y = n(82786)
          , h = n(97593)
          , E = n(64403)
          , w = n.n(E)
          , S = n(51722)
          , O = n(89979)
          , C = n(33234)
          , k = n(72059)
          , A = n(74078)
          , N = n(17165);
        let P = function(e) {
            return e.X_SMALL = "xSmall",
            e.SMALL = "small",
            e.MEDIUM = "medium",
            e.LARGE = "large",
            e.X_LARGE = "xLarge",
            e
        }({});
        const T = ["children", "disabled", "isFilled", "isFilledWhileDisabled", "isSubmit", "size", "href"];
        function I() {
            return I = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            I.apply(this, arguments)
        }
        function L(e) {
            switch (e) {
            case P.X_SMALL:
                return "ActionButton-module_xSmall__WP4hl";
            case P.SMALL:
                return "ActionButton-module_small___YtWp";
            case P.MEDIUM:
                return "ActionButton-module_medium__Zwxfw";
            case P.LARGE:
                return "ActionButton-module_large__UR6Br";
            case P.X_LARGE:
                return "ActionButton-module_xLarge__zj7ZN";
            default:
                return ""
            }
        }
        var j = e => {
            const {children: t, disabled: n, isFilled: o, isFilledWhileDisabled: s, isSubmit: l, size: c, href: i} = e
              , u = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, T)
              , d = (0,
            a.v9)(k.JQ)
              , m = (0,
            a.v9)(N.Hh)
              , p = w()("ActionButton-module_button__IlhXt", {
                [L(c)]: c,
                "ActionButton-module_filled__zUShw": o && !n || s && n,
                "ActionButton-module_archiveGameOverButton__tiDVD": d && m
            });
            return r.createElement(r.Fragment, null, i ? r.createElement("a", {
                href: i,
                className: p
            }, t) : r.createElement("button", I({
                disabled: n,
                type: l ? "submit" : "button"
            }, u, {
                className: p
            }), t))
        }
          , D = n(34543)
          , x = n(89406)
          , z = n(95982);
        function M(e) {
            let {isGameOver: t, isDisabled: n} = e;
            return t || n
        }
        function R(e) {
            let {selectedCards: t, isDisabled: n} = e;
            return n || 0 === t.length
        }
        var G = e => {
            let {isDisabled: t, onSubmit: n, today: o} = e;
            const s = (0,
            a.I0)()
              , l = (0,
            a.v9)(k.Mr)
              , c = (0,
            a.v9)(D.j5)
              , i = (0,
            a.v9)(k.Lc)
              , u = (0,
            a.v9)(k.JQ)
              , d = (0,
            a.v9)(k.cZ)
              , {trackConnectionsClick: m} = (0,
            z.Z)()
              , p = function(e) {
                let {selectedCards: t, guesses: n, isRecentIncorrect: r} = e;
                const o = t.length === S.nA
                  , a = n.filter((e => !e.correct)).length < S.oM;
                return !(!r && o && a)
            }({
                selectedCards: i,
                guesses: l,
                isRecentIncorrect: d
            });
            return r.createElement(r.Fragment, null, r.createElement(j, {
                form: "default-choices",
                "data-testid": "shuffle-btn",
                disabled: M({
                    isGameOver: u,
                    isDisabled: t
                }),
                onClick: () => {
                    s((0,
                    x.XF)({
                        component: A.zH.CARD,
                        effect: A.bi.CARD_SHUFFLE,
                        animationTimeout: O.ie
                    })),
                    m("shuffle"),
                    s((0,
                    C.MR)())
                }
            }, "Shuffle"), r.createElement(j, {
                form: "default-choices",
                "data-testid": "deselect-btn",
                size: P.MEDIUM,
                disabled: R({
                    selectedCards: i,
                    isDisabled: t
                }),
                onClick: () => {
                    m("deselect"),
                    s((0,
                    C.AS)())
                }
            }, "Deselect All"), r.createElement(j, {
                isSubmit: !0,
                form: "default-choices",
                "data-testid": "submit-btn",
                size: P.X_SMALL,
                disabled: p || t,
                isFilled: !0,
                isFilledWhileDisabled: c && !p,
                onClick: e => {
                    e.preventDefault(),
                    n()
                }
            }, "Submit"))
        }
          , B = "Card-module_bounce4__bqZEe"
          , Z = "Card-module_bounce3__dq6CF"
          , F = "Card-module_bounce2__oOMZc"
          , H = "Card-module_bounce1__joCfe"
          , U = "Card-module_mistakeShake__bGlnV"
          , X = "Card-module_shuffle__PBryY"
          , W = "Card-module_shuffleSelected__GBb0I"
          , Y = "Card-module_label__U_Q2H"
          , V = "Card-module_selected__cN2eT"
          , q = "Card-module_error__p7FiV"
          , $ = "Card-module_disabled__lEDp4"
          , Q = "Card-module_shrinkCard__PC3_N"
          , J = "Card-module_labelXXXXXXSm__MBO61"
          , K = "Card-module_labelXXXXXSm__kodEb"
          , ee = "Card-module_labelXXXXSm__f8uZ8"
          , te = "Card-module_labelXXXSm__FucRV"
          , ne = "Card-module_labelXXSm__mN2I_"
          , re = "Card-module_labelXSm__re9XU"
          , oe = "Card-module_labelSm___0Du7"
          , ae = "Card-module_labelMd__M_fr5"
          , se = "Card-module_labelLg__B4X4l"
          , le = "Card-module_labelXLg__marsN"
          , ce = "Card-module_labelXXLg__awzvt"
          , ie = "Card-module_labelXXXLg__LzdWa"
          , ue = "Card-module_labelXXXXLg__kDuRR"
          , de = "Card-module_svgContainer__vKOmF"
          , me = "Card-module_svgContainerSelected__Up9aH";
        const pe = e => e.split(" ").sort(( (e, t) => t.length - e.length))[0];
        const fe = e => e ? e.effect === A.bi.CARD_SHAKE ? " ".concat(U) : e.effect === A.bi.CARD_BOUNCE ? " ".concat(function(e) {
            switch (e) {
            case 1:
                return H;
            case 2:
                return F;
            case 3:
                return Z;
            default:
                return B
            }
        }(e.timeout)) : e.effect === A.bi.CARD_SHUFFLE ? e.selected ? " ".concat(W) : " ".concat(X) : "" : ""
          , _e = ["content", "originalPosition", "imageUrl", "disabled", "selected", "level", "selectedIndex"];
        function ge() {
            return ge = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            ge.apply(this, arguments)
        }
        var ve = (0,
        r.memo)((e => {
            let {content: t, originalPosition: n, imageUrl: o, disabled: s, selected: l, level: c, selectedIndex: u} = e
              , d = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, _e);
            const m = (0,
            a.I0)()
              , f = (0,
            a.v9)((0,
            D.Ux)({
                selected: l,
                selectedIndex: u
            }))
              , {winWidth: _} = (0,
            p.Z)()
              , {isAndroidGamesApp: g} = (0,
            i.vB)()
              , [v,b] = (0,
            r.useState)(!1)
              , y = function(e) {
                let {winWidth: t, content: n, isAndroidGamesApp: r} = e;
                return /\p{Extended_Pictographic}/u.test(n) ? ue : t > S.yw ? r ? function(e) {
                    return pe(e).length < 12 ? ie : le
                }(n) : function(e) {
                    const t = pe(e);
                    if (t.length < 12)
                        return ie;
                    switch (t.length) {
                    case 12:
                    case 13:
                        return ce;
                    default:
                        return le
                    }
                }(n) : function(e, t) {
                    const n = pe(e);
                    if (t > 375)
                        switch (n.length) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            return le;
                        case 8:
                            return se;
                        case 9:
                            return ae;
                        case 10:
                        case 11:
                            return oe;
                        case 12:
                        case 13:
                            return re;
                        case 14:
                            return ne;
                        case 15:
                            return te;
                        default:
                            return ee
                        }
                    else if (t <= 375 && t > 300)
                        switch (n.length) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            return le;
                        case 8:
                            return se;
                        case 9:
                            return ae;
                        case 10:
                        case 11:
                            return oe;
                        case 12:
                        case 13:
                            return ne;
                        case 14:
                            return te;
                        default:
                            return ee
                        }
                    else
                        switch (n.length) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            return le;
                        case 6:
                            return se;
                        case 7:
                            return ae;
                        case 8:
                            return oe;
                        case 9:
                            return re;
                        case 10:
                            return ne;
                        case 11:
                            return te;
                        case 12:
                        case 13:
                            return K;
                        default:
                            return J
                        }
                }(n, t)
            }({
                winWidth: _,
                content: t,
                isAndroidGamesApp: g
            })
              , h = () => {
                m((0,
                C.GR)(t))
            }
            ;
            return r.createElement("label", ge({
                htmlFor: "inner-card-".concat(n),
                className: w()(Y, y, fe(f), {
                    [Q]: v,
                    [$]: s,
                    [V]: l,
                    [q]: (null == f ? void 0 : f.effect) === A.bi.CARD_SHAKE
                }),
                key: "inner-card-".concat(n),
                onPointerDown: () => {
                    s || (b(!0),
                    h())
                }
                ,
                onPointerUp: () => {
                    s || b(!1)
                }
                ,
                onPointerCancel: () => {
                    b(!1)
                }
                ,
                onPointerLeave: () => {
                    b(!1)
                }
                ,
                "data-testid": "card-label"
            }, d), r.createElement("input", {
                "aria-label": t,
                className: "visually-hidden",
                type: "checkbox",
                id: "inner-card-".concat(n),
                name: "inner-card-".concat(n),
                value: t,
                defaultChecked: l,
                disabled: s,
                "data-testid": "card-input",
                onKeyDown: e => {
                    s || " " !== e.key || h()
                }
            }), o ? r.createElement("div", {
                "aria-hidden": "true",
                className: w()(de, l && me)
            }, r.createElement("img", {
                src: o
            })) : t)
        }
        ));
        const be = (e, t) => {
            let {animation: n} = e
              , {animation: r} = t;
            return !(n && n.effect === A.bi.CARD_SHUFFLE || r && r.effect === A.bi.CARD_SHUFFLE)
        }
        ;
        function ye() {
            return ye = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            ye.apply(this, arguments)
        }
        function he(e) {
            switch (e / S.nA) {
            case 3:
                return "Cards-module_cardsContainer3__xoWJT";
            case 2:
                return "Cards-module_cardsContainer2__V9ZMo";
            case 1:
                return "Cards-module_cardsContainer1__uoVPZ";
            default:
                return "Cards-module_cardsContainer4__sK7TL"
            }
        }
        var Ee = e => {
            let {disabled: t} = e;
            const n = (0,
            a.v9)(k.a2)
              , o = (0,
            a.v9)(k.Lc)
              , s = o.length >= S.nA;
            let l = 0;
            return r.createElement("div", {
                className: "".concat("Cards-module_cardsContainer__O3T5q", " ").concat(he(n.length))
            }, n.map((e => {
                const n = o.includes(e.content);
                return n && (l += 1),
                r.createElement(h.$3, {
                    key: "".concat(e.content, "-flip"),
                    flipId: e.content,
                    shouldFlip: be
                }, r.createElement(ve, ye({}, e, {
                    selected: n,
                    disabled: t || s && !n,
                    key: "card-position-".concat(e.originalPosition),
                    selectedIndex: l
                })))
            }
            )))
        }
          , we = n(32873)
          , Se = n(26171)
          , Oe = "Mistakes-module_indicatorDisabled___J578"
          , Ce = (0,
        r.memo)((e => {
            let {isMistakeIndicatorDisabled: t=!1} = e;
            const n = (0,
            a.v9)(k.Yj)
              , o = (0,
            a.v9)(k.JQ)
              , [s,l] = (0,
            r.useState)(o)
              , c = S.oM - n
              , i = Array(c).fill(void 0);
            return o && !s && setTimeout(( () => {
                l(!0)
            }
            ), 2 * O.NC),
            !o && s && l(!1),
            s ? null : r.createElement("section", null, r.createElement("span", {
                className: w()("Mistakes-module_mistakesWrapper__LGl68", o ? "Mistakes-module_hideMistakes__C3kxl" : "Mistakes-module_showMistakes__q6EWj")
            }, r.createElement("span", {
                className: "visually-hidden",
                "aria-atomic": "true",
                "aria-live": "assertive",
                "data-testid": "mistake-count"
            }, "".concat(c, " mistakes remaining out of ").concat(S.oM)), r.createElement("p", {
                className: w()("Mistakes-module_mistakesContent__nlijY", {
                    [Oe]: t
                }),
                "aria-hidden": "true",
                "data-testid": "mistake-text"
            }, "Mistakes Remaining:", r.createElement(we.Z, {
                className: "Mistakes-module_mistakesRemainingBubbles__iTrFU",
                component: "span"
            }, i.map(( (e, n) => r.createElement(Se.Z, {
                key: "bubble-".concat(n),
                timeout: 400,
                classNames: {
                    exit: "Mistakes-module_bubbleMistakeAnimation__zICdm"
                }
            }, r.createElement("span", {
                className: w()("Mistakes-module_bubble__nDlOh", {
                    [Oe]: t
                }),
                "data-testid": "mistake-bubble"
            }))))))))
        }
        ))
          , ke = n(71556)
          , Ae = e => {
            let {autoSolve: t, disabled: n} = e;
            const o = (0,
            a.I0)()
              , s = (0,
            a.v9)(k.JQ);
            return (0,
            ke.d)() && window.location.pathname.includes("/puzzles/shortz") ? r.createElement("div", {
                className: "ShortzControls-module_shortzContainer__bD162"
            }, r.createElement(j, {
                form: "default-choices",
                size: P.LARGE,
                disabled: n || s,
                onClick: t,
                "data-testid": "complete-button"
            }, "Complete Puzzle"), r.createElement(j, {
                form: "default-choices",
                size: P.MEDIUM,
                disabled: n,
                onClick: () => o((0,
                C._X)()),
                "data-testid": "reset-button"
            }, "Reset Puzzle")) : null
        }
        ;
        const Ne = ["getIsClosing", "getOpenToastName", "toastMap", "onClose", "portalId", "onRemove", "rankTitle"];
        function Pe() {
            return Pe = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Pe.apply(this, arguments)
        }
        function Te(e) {
            let {getIsClosing: t, getOpenToastName: n, toastMap: s, onClose: l, portalId: c, onRemove: i, rankTitle: u} = e
              , d = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, Ne);
            const m = r.useRef(document.getElementById(c))
              , p = (0,
            a.v9)(n)
              , f = (0,
            a.v9)(t)
              , _ = (0,
            a.I0)();
            if (!p)
                return null;
            const g = s[p]
              , v = r.createElement(g, Pe({
                close: function() {
                    return _(l(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]))
                },
                isClosing: f,
                onRemove: () => _(i()),
                rankTitle: u
            }, d));
            return m.current ? (0,
            o.createPortal)(v, m.current) : v
        }
        var Ie = n(73917)
          , Le = n(85171)
          , je = e => {
            let {text: t, onRemove: n, durationVisible: o=3e3} = e;
            const [a,s] = (0,
            r.useState)(!1)
              , [l,c] = (0,
            r.useState)(!1);
            (0,
            r.useEffect)(( () => {
                s(!0)
            }
            ), []),
            (0,
            Le.Z)(( () => c(!0)), o === 1 / 0 ? null : o);
            const i = "Copied results to clipboard" === t;
            return r.createElement("div", {
                "data-testid": "connection-toast",
                className: w()("Toast-module_toast__YAoDa", {
                    "Toast-module_fadeIn__F7BjX": a,
                    "Toast-module_fadeOut__YGx_N": l,
                    "Toast-module_copyToast__aEbAa": i
                }),
                "aria-live": "assertive",
                onTransitionEnd: () => {
                    n && l && n()
                }
            }, r.createElement("h2", null, t))
        }
        ;
        const De = {
            [Ie.nI.ALREADY_GUESSED]: e => {
                let {onRemove: t} = e;
                return r.createElement(je, {
                    text: "Already guessed!",
                    onRemove: t
                })
            }
            ,
            [Ie.nI.ONE_AWAY]: e => {
                let {onRemove: t} = e;
                return r.createElement(je, {
                    text: "One away...",
                    onRemove: t
                })
            }
            ,
            [Ie.nI.REVEAL_MISTAKE_TITLE]: e => {
                let {onRemove: t, rankTitle: n} = e;
                return r.createElement(je, {
                    text: n,
                    onRemove: t
                })
            }
            ,
            [Ie.nI.COPY_RESULTS]: e => {
                let {onRemove: t} = e;
                return r.createElement(je, {
                    text: "Copied results to clipboard",
                    onRemove: t
                })
            }
            ,
            [Ie.nI.SHARE_FAIL]: e => {
                let {onRemove: t} = e;
                return r.createElement(je, {
                    text: "Share failed",
                    onRemove: t
                })
            }
        };
        var xe = n(65489)
          , ze = n(22152)
          , Me = n(10372)
          , Re = n(23474)
          , Ge = n(47592)
          , Be = n(60820)
          , Ze = n(56503);
        const Fe = ["children", "icon", "showNotificationDot"];
        function He() {
            return He = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            He.apply(this, arguments)
        }
        var Ue = e => {
            const {children: t, icon: n, showNotificationDot: o} = e
              , a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, Fe);
            return r.createElement("li", null, r.createElement("button", He({
                type: "button"
            }, a, {
                className: "ToolbarButton-module_button__K6r2Z"
            }), r.createElement(Be.v, {
                icon: n
            }), o && r.createElement(Ze.Z, {
                dotClassName: "ToolbarButton-module_dotStyles__W55z0"
            }), t))
        }
          , Xe = n(3097);
        let We = function(e) {
            return e.HELP = "help",
            e.SETTINGS = "settings",
            e.STATS = "statistics",
            e
        }({});
        var Ye = n(74993)
          , Ve = n(90875)
          , qe = n(44291)
          , $e = n(30674)
          , Qe = n(63128)
          , Je = n(51323)
          , Ke = n(1371)
          , et = n(53789)
          , tt = n(40245)
          , nt = "Popover-module_popover__text__dnrJb";
        const rt = ["children", "modal", "yAxisOffsetOnDesktop", "yAxisOffsetOnMobile"]
          , ot = ["children", "asChild"]
          , at = ["style", "xAxisOffsetOnDesktop", "xAxisOffsetOnMobile", "yAxisOffsetOnDesktop", "yAxisOffsetOnMobile"]
          , st = ["context", "arrowRef", "isMounted", "transitionStyles"];
        function lt() {
            return lt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            lt.apply(this, arguments)
        }
        function ct(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function it(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? it(Object(n), !0).forEach((function(t) {
                    var r, o, a, s;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (s = function(e, t) {
                        if ("object" != typeof e || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, "string");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const dt = (0,
        r.createContext)(null)
          , mt = () => {
            const e = (0,
            r.useContext)(dt);
            if (null == e)
                throw new Error("Popover components must be wrapped in <Popover />");
            return e
        }
        ;
        function pt(e) {
            let {children: t, modal: n=!1, yAxisOffsetOnDesktop: o, yAxisOffsetOnMobile: a} = e;
            const s = function() {
                let {initialOpen: e=!1, placement: t="bottom", yAxisOffsetOnDesktop: n, yAxisOffsetOnMobile: o, modal: a, open: s, onOpenChange: l} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const [c,i] = (0,
                r.useState)(e)
                  , [u,d] = (0,
                r.useState)()
                  , [m,p] = (0,
                r.useState)()
                  , f = (0,
                r.useRef)(null)
                  , _ = null != s ? s : c
                  , g = null != l ? l : i
                  , v = et.tq ? null != o ? o : 14 : null != n ? n : 14
                  , b = (0,
                Qe.YF)({
                    placement: t,
                    open: _,
                    onOpenChange: g,
                    whileElementsMounted: Je.Me,
                    middleware: [(0,
                    Ke.cv)(v), (0,
                    Ke.RR)({
                        crossAxis: t.includes("-"),
                        fallbackAxisSideDirection: "end",
                        padding: 5
                    }), (0,
                    Ke.uY)({
                        padding: 5
                    }), (0,
                    Ke.x7)({
                        element: f
                    })]
                })
                  , {context: y} = b
                  , {isMounted: h, styles: E} = (0,
                Qe.Y_)(y)
                  , w = (0,
                Qe.eS)(y, {
                    enabled: null == s
                })
                  , S = (0,
                Qe.bQ)(y, {
                    referencePress: !0
                })
                  , O = (0,
                Qe.qs)(y)
                  , C = (0,
                Qe.NI)([w, S, O]);
                return (0,
                r.useMemo)(( () => ut(ut(ut({
                    open: _,
                    setOpen: g,
                    arrowRef: f,
                    isMounted: h,
                    transitionStyles: E
                }, C), b), {}, {
                    modal: a,
                    labelId: u,
                    descriptionId: m,
                    setLabelId: d,
                    setDescriptionId: p
                })), [_, g, f, h, E, C, b, a, u, m])
            }(ut({
                modal: n,
                yAxisOffsetOnDesktop: o,
                yAxisOffsetOnMobile: a
            }, ct(e, rt)));
            return r.createElement(dt.Provider, {
                value: s
            }, t)
        }
        const ft = (0,
        r.forwardRef)((function(e, t) {
            let {children: n, asChild: o=!1} = e
              , a = ct(e, ot);
            const s = mt()
              , l = n.ref
              , c = (0,
            Qe.qq)([s.refs.setReference, t, l]);
            return o && (0,
            r.isValidElement)(n) ? (0,
            r.cloneElement)(n, s.getReferenceProps(ut(ut(ut({
                ref: c
            }, a), n.props), {}, {
                "data-state": s.open ? "open" : "closed"
            }))) : r.createElement("span", lt({
                ref: c,
                className: "Popover-module_popover__trigger__bbZnY",
                "data-state": s.open ? "open" : "closed"
            }, s.getReferenceProps(a)), n)
        }
        ))
          , _t = (0,
        r.forwardRef)((function(e, t) {
            let {style: n, xAxisOffsetOnDesktop: o, xAxisOffsetOnMobile: a, yAxisOffsetOnDesktop: s, yAxisOffsetOnMobile: l} = e
              , c = ct(e, at);
            const i = mt()
              , {context: u, arrowRef: d, isMounted: m, transitionStyles: p} = i
              , f = ct(i, st)
              , _ = (0,
            Qe.qq)([f.refs.setFloating, t]);
            return m ? r.createElement(Qe.ll, null, r.createElement(Qe.wD, {
                context: u,
                modal: f.modal,
                closeOnFocusOut: !1
            }, m && r.createElement("div", lt({
                ref: _,
                style: ut(ut(ut(ut({}, f.floatingStyles), n), p), {}, {
                    zIndex: et.tq ? 101 : 99
                }),
                "aria-labelledby": f.labelId,
                "aria-describedby": f.descriptionId
            }, f.getFloatingProps(c)), r.createElement(Qe.Y$, {
                ref: d,
                context: u,
                width: 20,
                height: 10,
                staticOffset: et.tq ? a : o,
                fill: "#2a2a2a"
            }), c.children))) : null
        }
        ))
          , gt = (0,
        r.forwardRef)((function(e, t) {
            const {setLabelId: n} = mt()
              , o = (0,
            Qe.PC)();
            return (0,
            r.useLayoutEffect)(( () => (n(o),
            () => n(void 0))), [o, n]),
            r.createElement("div", lt({}, e, {
                ref: t,
                id: o
            }), e.children)
        }
        ))
          , vt = (0,
        r.forwardRef)((function(e, t) {
            const {setDescriptionId: n} = mt()
              , o = (0,
            Qe.PC)();
            return (0,
            r.useLayoutEffect)(( () => (n(o),
            () => n(void 0))), [o, n]),
            r.createElement("p", lt({}, e, {
                ref: t,
                id: o
            }))
        }
        ))
          , bt = (0,
        r.forwardRef)((function(e, t) {
            const {setOpen: n} = mt();
            return r.createElement("button", lt({
                type: "button",
                className: "Popover-module_popover__close___cAzP",
                ref: t
            }, e, {
                onClick: t => {
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    n(!1)
                }
            }))
        }
        ));
        let yt = function(e) {
            return e.BIG = "big",
            e.BOLD = "bold",
            e
        }({});
        const ht = e => {
            let {canShowTooltip: t, children: n, icon: o, heading: a, headingType: s=yt.BOLD, description: l, isHidden: c, timeTillDisplayInMS: i, onHide: u, xAxisOffsetOnDesktop: d, xAxisOffsetOnMobile: m, yAxisOffsetOnDesktop: p, yAxisOffsetOnMobile: f, impressionTracking: _, header: g} = e;
            const [v,b] = (0,
            r.useState)(!1)
              , y = (0,
            r.useMemo)(( () => t), [t]);
            return (0,
            r.useEffect)(( () => {
                const e = setTimeout(( () => {
                    y && !c && b(!0)
                }
                ), i);
                return () => clearTimeout(e)
            }
            ), [t, c]),
            (0,
            r.useEffect)(( () => {
                c && b(!1)
            }
            ), [c]),
            (0,
            r.useEffect)(( () => {
                if (null != _ && _.label && null != _ && _.context && !c) {
                    const e = (0,
                    xe.j0)();
                    (0,
                    xe.hX)("tool-tip", e, null == _ ? void 0 : _.label, null == _ ? void 0 : _.context)
                }
            }
            ), [_, c]),
            r.createElement(pt, {
                open: v,
                onOpenChange: () => {
                    b(!1),
                    u && u()
                }
                ,
                yAxisOffsetOnDesktop: p,
                yAxisOffsetOnMobile: f
            }, r.createElement(ft, null, n), r.createElement(_t, {
                className: "Popover-module_popover__JOudP",
                xAxisOffsetOnDesktop: d,
                xAxisOffsetOnMobile: m,
                yAxisOffsetOnDesktop: p,
                yAxisOffsetOnMobile: f
            }, r.createElement(bt, {
                onClick: u
            }, r.createElement("div", {
                role: "button",
                className: "Popover-module_popover__x__Z1a9C"
            }, "×")), r.createElement("div", null, "blue_pill" === g && r.createElement(tt.Z, {
                text: "New",
                className: "Popover-module_popover__pill__T4cED"
            }), "feature_text" === g && r.createElement("p", {
                className: "Popover-module_popover__feature_text__DlfNL",
                "data-testid": "feature-text"
            }, "Feature"), r.createElement(gt, null, r.createElement("div", {
                className: "Popover-module_popover__headingContainer__UH7im"
            }, o, r.createElement("h1", {
                className: w()(nt, s === yt.BIG && "Popover-module_popover__text--heading-big__Y_EQc", s === yt.BOLD && "Popover-module_popover__text--heading-bold__Tysts")
            }, a))), r.createElement(vt, null, r.createElement("p", {
                className: nt
            }, l)))))
        }
        ;
        var Et = n(73826)
          , wt = n(4663)
          , St = n(34303);
        const Ot = () => {
            const {isGamesApp: e} = (0,
            i.vB)()
              , {getVariant: t} = (0,
            d.Z)()
              , n = (0,
            St.U)("connections-toolbar-forum-tooltip", 2)
              , r = t(ze.Df);
            return {
                isHidden: !((!e || e && r === ze.yc) && !n.isHidden),
                hide: n.hide,
                popupId: "companionAwareness"
            }
        }
          , Ct = () => {
            const e = (0,
            a.v9)($e.G7)
              , t = (0,
            St.U)("connections-toolbar-purple-first-tooltip", 2);
            return {
                isHidden: !(!t.isHidden && void 0 !== e),
                hide: t.hide,
                popupId: "connectionsPurpleFirst"
            }
        }
        ;
        var kt = n(57607);
        function At(e) {
            let {hide: t, onButtonClick: n, today: o} = e;
            const {isWeb: s, isGamesApp: l, isNewsreaderApp: c} = (0,
            i.vB)()
              , d = (0,
            a.I0)()
              , {userType: p} = (0,
            u.aF)()
              , {trackConnectionsClick: f} = (0,
            z.Z)()
              , _ = (0,
            a.v9)(qe.nf)
              , g = (0,
            a.v9)(b.wM)
              , h = !!(0,
            a.v9)($e.qo)
              , E = p.isLoggedIn && !h
              , w = (0,
            a.v9)((0,
            b._h)("game"))
              , S = (0,
            kt.q)(o)
              , O = "game" === (0,
            a.v9)(b.aX)
              , C = Ot()
              , k = Ct()
              , A = "companionAwareness" !== g || w
              , N = "connectionsPurpleFirst" !== g || w
              , P = (0,
            a.v9)($e.l8)
              , [T,I] = (0,
            r.useState)(!1)
              , L = P && !T
              , j = ((0,
            Xe.X)(o),
            xe.abra.getVariant(ze.mV))
              , D = s || !s && j === ze.S_
              , x = (0,
            Et.O)(p.hasXwd)
              , M = xe.abra.getVariant(ze.Df)
              , R = s || c || l && M === ze.yc;
            (0,
            r.useEffect)(( () => {
                !s && j && xe.abra.reportExposure(ze.mV)
            }
            ), [j]),
            (0,
            r.useEffect)(( () => {
                M && xe.abra.reportExposure(ze.Df)
            }
            ), [M]);
            const G = {
                puzzleId: (0,
                Xe.X)(o).toString(),
                puzzleDate: _,
                hasArchive: !0
            }
              , B = (0,
            m.Z)();
            return D ? r.createElement(Re.Z, {
                isHidden: t
            }, r.createElement(Me.Z, null, null, !E && r.createElement(ht, {
                canShowTooltip: !N && O,
                heading: "New stat: your purple-first solves.",
                description: "View how many times you cracked the trickiest category first.",
                isHidden: "game" !== v.S.getCurrentMoment(),
                onHide: () => {
                    k.hide(),
                    d((0,
                    y.BP)())
                }
                ,
                timeTillDisplayInMS: 1e3,
                header: "blue_pill"
            }, r.createElement(Ge.Eg, {
                showNotificationDot: L,
                icon: Ge.qD.STATS,
                itemType: Ge.uF.BUTTON,
                onClick: () => {
                    document.location.href = "/christmas_word_puzzles/nyt_games/leaderboard"
                },
                trackingProps: G
            }), r.createElement(Ge.Eg, {
                showNotificationDot: L,
                icon: Ge.qD.HELP,
                itemType: Ge.uF.BUTTON,
                onClick: () => {
                    n(Ie.P.HOW_TO_PLAY)
                }
                ,
                trackingProps: G
            })), B && r.createElement(Ge.Eg, {
                icon: Ge.qD.SETTINGS,
                itemType: Ge.uF.BUTTON,
                onClick: () => {
                    n(Ie.P.SETTINGS)
                }
                ,
                trackingProps: G
            }), x && r.createElement(wt.Z, {
                pageName: "connections",
                trackingProps: G
            }))) : r.createElement(Re.Z, {
                isHidden: t
            }, r.createElement("nav", {
                className: "Toolbar-module_toolbarWrapper__AlFk2"
            }, r.createElement("ul", {
                className: "Toolbar-module_toolbar__TY86B"
            }, r.createElement(Ue, {
                icon: We.SETTINGS,
                "aria-label": "Settings",
                onClick: () => {
                    n(Ie.P.SETTINGS)
                }
            }), !E && r.createElement(ht, {
                canShowTooltip: !N && O,
                heading: "New stat: your purple-first solves.",
                description: "View how many times you cracked the trickiest category first.",
                isHidden: "game" !== v.S.getCurrentMoment(),
                onHide: () => {
                    k.hide(),
                    d((0,
                    y.BP)())
                }
                ,
                timeTillDisplayInMS: 1e3,
                header: "blue_pill"
            }, r.createElement(Ue, {
                icon: We.STATS,
                showNotificationDot: L,
                "aria-label": "Statistics",
                onClick: () => {
                    f("stats", null, "toolbar"),
                    n(Ie.P.STATS),
                    I(!0)
                }
            })), r.createElement(Ue, {
                icon: We.HELP,
                onClick: () => {
                    f("help"),
                    n(Ie.P.HOW_TO_PLAY)
                }
                ,
                "aria-label": "Help"
            }))))
        }
        var Nt = "SolvedCategory-module_textFadeInThemeLight__bl7Jn";
        const Pt = (e, t) => e.content < t.content ? -1 : 1;
        var Tt = (0,
        r.memo)((e => {
            let {category: t, shouldPulse: n} = e;
            const {title: o, level: s} = t
              , l = (0,
            a.v9)((0,
            k.D1)(s)).slice().sort(Pt);
            return r.createElement("section", {
                className: w()("SolvedCategory-module_solvedCategory___8phN", {
                    "SolvedCategory-module_pulse__vNMz_": n
                }),
                "data-level": s,
                role: "img",
                "aria-label": "Correct group ".concat(o, ". ").concat(l.map((e => e.content))),
                "data-testid": "solved-category-container"
            }, r.createElement("h3", {
                className: w()("SolvedCategory-module_categoryTitle__UJ5pY", Nt),
                "data-testid": "solved-category-title"
            }, o), r.createElement("ol", null, l.map((e => r.createElement("li", {
                key: "found-category-card-".concat(e.originalPosition),
                className: w()("SolvedCategory-module_cardListItem__YZ56v", Nt),
                "data-testid": "solved-category-card"
            }, e.content)))))
        }
        ))
          , It = (0,
        r.memo)(( () => {
            const e = (0,
            a.v9)(k.p2)
              , t = (0,
            a.v9)(D.K8);
            return 0 === e.length ? null : r.createElement("article", {
                "aria-live": "assertive"
            }, r.createElement("p", {
                className: "visually-hidden"
            }, e.length, " Found", "Categor".concat(1 === e.length ? "y" : "ies"), " out of", " ", S.pr), r.createElement("ol", {
                className: "SolvedCategories-module_solvedCategoriesContainer___8Udu"
            }, e.map((e => r.createElement(Tt, {
                category: e,
                key: "solved-".concat(e.level),
                shouldPulse: t === e.level
            })))))
        }
        ))
          , Lt = n(40667)
          , jt = e => {
            let {today: t} = e;
            const n = (0,
            a.I0)()
              , o = (0,
            a.v9)(k.a2)
              , s = (0,
            a.v9)(D.qQ)
              , l = (0,
            a.v9)(k.Sf)
              , c = (0,
            a.v9)(k.Q5)
              , i = (0,
            a.v9)(k.aB)
              , u = (0,
            a.v9)(k.Yj)
              , d = (0,
            a.v9)(k.p2)
              , m = (0,
            a.v9)(k.JQ)
              , p = (0,
            a.v9)(N.Hh)
              , {trackConnectionsClick: f} = (0,
            z.Z)()
              , _ = (0,
            a.v9)(N.UQ)
              , g = A.r9[u];
            (0,
            r.useEffect)(( () => {
                n((0,
                C.AS)())
            }
            ), [d.length]);
            const E = o.reduce(( (e, t) => e ? "".concat(e, "-").concat(t.content) : t.content), "");
            return (0,
            r.useEffect)(( () => {
                if ("in progress" === c) {
                    const e = i.length > 0 ? O.C6 + O.Vb : O.C6;
                    setTimeout(( () => {
                        const e = n((0,
                        Lt.Lv)());
                        e < S.pr && n((0,
                        Lt.x8)(e))
                    }
                    ), e)
                }
            }
            ), [c, i.length]),
            r.createElement(r.Fragment, null, r.createElement(Te, {
                portalId: "portal-toast-system",
                toastMap: De,
                getOpenToastName: b.my,
                getIsClosing: b.xf,
                onClose: y.yg,
                onRemove: y.RS,
                rankTitle: g
            }), r.createElement(At, {
                hide: !1,
                onButtonClick: e => {
                    n((0,
                    y.h7)({
                        modal: e
                    }))
                }
                ,
                today: t
            }), r.createElement("article", {
                className: "Board-module_board__gdu5I",
                "data-testid": "connections-board"
            }, r.createElement("form", {
                id: "default-choices",
                className: "Board-module_form__B5pmo"
            }, r.createElement("h2", null, "Create four groups of four!"), r.createElement("fieldset", {
                className: "Board-module_boardContainer__vObNY"
            }, !m && r.createElement("legend", {
                className: "visually-hidden"
            }, "Select four items that have something in common"), r.createElement(It, null), r.createElement(h.U5, {
                flipKey: E,
                decisionData: {
                    animation: s
                },
                spring: {
                    stiffness: 190,
                    damping: 25
                }
            }, r.createElement(Ee, {
                disabled: l
            })))), r.createElement(Ce, {
                isMistakeIndicatorDisabled: m
            }), r.createElement("section", {
                className: w()("Board-module_boardActionGroup__mUDT8", {
                    "Board-module_archiveGameOverButtonGroup__UxUJS": p && m
                })
            }, m ? r.createElement(r.Fragment, null, r.createElement(j, {
                form: "default-choices",
                size: P.X_LARGE,
                onClick: () => {
                    v.S.transition("game", "congrats")
                }
            }, "View Results"), p && r.createElement(j, {
                form: "default-choices",
                size: P.X_LARGE,
                href: _,
                onClick: () => {
                    f("archive", null, "congrats")
                }
            }, "Play the Connections archive")) : r.createElement(G, {
                isDisabled: l,
                onSubmit: () => n((0,
                Lt.ip)()),
                today: t
            })), r.createElement(Ae, {
                disabled: l,
                autoSolve: () => {
                    n((0,
                    C.AS)()),
                    n((0,
                    C.L9)())
                }
            })))
        }
          , Dt = n(36629)
          , xt = n(69202)
          , zt = "Error-module_errorContent__fSOKJ"
          , Mt = "Error-module_errorTitle__ljcWi"
          , Rt = "Error-module_errorSubtitle__m9sRl"
          , Gt = "Error-module_errorText__sGk_G";
        const Bt = e => {
            let {errorType: t} = e;
            const n = "offline" === t && "Error-module_offlineErrorIcon__ZJKiw";
            return r.createElement("span", {
                role: "img",
                "aria-hidden": !0,
                className: n || "Error-module_defaultErrorIcon__WqNTT"
            })
        }
          , Zt = () => r.createElement("div", {
            className: zt
        }, r.createElement("h1", {
            className: Mt,
            "data-testid": "error-header"
        }, "Oh no!"), r.createElement("h2", {
            className: Rt,
            "data-testid": "error-subheader"
        }, "You’re offline."), r.createElement("p", {
            className: Gt
        }, "Find a connection and come back."))
          , Ft = () => r.createElement("div", {
            className: zt
        }, r.createElement("h1", {
            className: Mt,
            "data-testid": "error-header"
        }, "Oops!"), r.createElement("h2", {
            className: Rt,
            "data-testid": "error-subheader"
        }, "Something went wrong."), r.createElement("p", {
            className: Gt
        }, "Please try again later."))
          , Ht = () => r.createElement("div", {
            className: zt
        }, r.createElement("h1", {
            className: Mt,
            "data-testid": "error-header"
        }, "Oops!"), r.createElement("h2", {
            className: Rt,
            "data-testid": "error-subheader"
        }, "We’re missing data for this puzzle."), r.createElement("p", {
            className: Gt
        }, "Please test after the data has been added."))
          , Ut = () => r.createElement("div", {
            className: zt
        }, r.createElement("h1", {
            className: Mt,
            "data-testid": "error-header"
        }, "Oops!"), r.createElement("h2", {
            className: Rt,
            "data-testid": "error-subheader"
        }, "Date precedes the launch date of", " ", (0,
        Dt.Z)(S.hd, "MMM d, yyyy"), "."), r.createElement("p", {
            className: Gt
        }, "Please test a later puzzle."));
        function Xt(e) {
            let {errorType: t, showBackButton: n=!1} = e;
            const o = n || document.referrer.includes("nytimes");
            if (!t)
                return null;
            const a = {
                offline: {
                    icon: r.createElement(Bt, {
                        errorType: "offline"
                    }),
                    content: r.createElement(Zt, null)
                },
                default: {
                    icon: r.createElement(Bt, null),
                    content: r.createElement(Ft, null)
                },
                isFutureDate: {
                    icon: r.createElement(Bt, null),
                    content: r.createElement(Ft, null)
                },
                isInvalidArchiveRoute: {
                    icon: r.createElement(Bt, null),
                    content: r.createElement(Ft, null)
                },
                missingData: {
                    icon: r.createElement(Bt, null),
                    content: r.createElement(Ht, null)
                },
                precedesLaunch: {
                    icon: r.createElement(Bt, null),
                    content: r.createElement(Ut, null)
                }
            }
              , {icon: s, content: l} = a[t] || a.default;
            return r.createElement("div", {
                className: "Error-module_container__Fx8Rp",
                role: "dialog"
            }, r.createElement("div", {
                className: "Error-module_errorContainer___3f4b"
            }, s, l, o && r.createElement("button", {
                className: "Error-module_backButton__q290v",
                type: "button",
                "data-testid": "back",
                onClick: () => {
                    (0,
                    xt.n)()
                }
            }, "Back")))
        }
        var Wt = n(70033)
          , Yt = () => {
            const e = (0,
            a.v9)(qe.nf)
              , t = r.useRef(document.getElementById("portal-game-date"));
            if (!e)
                return null;
            const n = (0,
            Wt.Z)(e, "yyyy-MM-dd", new Date)
              , s = (0,
            Dt.Z)(n, "MMMM d, yyyy")
              , l = r.createElement("span", null, s);
            return t.current ? (0,
            o.createPortal)(l, t.current) : l
        }
          , Vt = n(26897)
          , qt = n(57234)
          , $t = n(56470)
          , Qt = n(155)
          , Jt = n(30157);
        const Kt = e => e.loading.isConnectionsLoaded;
        var en = n(33738)
          , tn = n(95609)
          , nn = n(88770);
        function rn(e, t, n, r, o, a, s) {
            try {
                var l = e[a](s)
                  , c = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        const on = () => {
            const {isHybridWebView: e} = (0,
            i.vB)()
              , t = (0,
            a.I0)()
              , n = (0,
            a.v9)(qe.Jv)
              , o = (0,
            a.v9)(N._2)
              , s = (0,
            a.v9)(N.On)
              , l = (0,
            Qt.V)()
              , c = (0,
            a.v9)(qe.dG)
              , u = (0,
            a.v9)(k.kX)
              , d = (0,
            a.v9)(Kt)
              , m = (0,
            ke.d)()
              , p = (0,
            Dt.Z)((0,
            tn.Y)({
                gameDataKey: tn.I.CONNECTIONS
            }), "yyyy-MM-dd")
              , f = window.connectionsArchiveDate
              , _ = f === p;
            (0,
            r.useEffect)(( () => {
                l && _ && window.location.replace("/christmas_word_puzzles/nyt_games/connections".concat(e ? "?GAMES_connectionsRollout_1130=1_ConnectionsV2" : ""))
            }
            ), [l, _]);
            const {isLoading: g, isError: v, error: b} = (0,
            nn.S)(o, {
                skip: !!n
            });
            let y = null;
            if (v && b && (y = ( (e, t, n, r) => {
                if (!e || t)
                    return "default";
                if (null != n && n.message)
                    return "default";
                if (404 === (null == n ? void 0 : n.status)) {
                    if ((0,
                    Vt.Z)(r))
                        return "missingData";
                    if ((0,
                    qt.Z)(r, S.hd))
                        return "precedesLaunch"
                }
                return "default"
            }
            )(m, g, b, s)),
            (0,
            r.useEffect)(( () => {
                c.length > 0 && 0 === u.length && t((0,
                C.Es)(c))
            }
            ), [c, u]),
            (0,
            r.useEffect)(( () => {
                const e = function() {
                    var e, n = (e = function*() {
                        yield t((0,
                        Jt.yu)()),
                        t((0,
                        en.M)(!0))
                    }
                    ,
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var a = e.apply(t, n);
                            function s(e) {
                                rn(a, r, o, s, l, "next", e)
                            }
                            function l(e) {
                                rn(a, r, o, s, l, "throw", e)
                            }
                            s(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return n.apply(this, arguments)
                    }
                }();
                return n && !d && e(),
                window.addEventListener("gamesUserCredentialChanged", e),
                () => {
                    window.removeEventListener("gamesUserCredentialChanged", e)
                }
            }
            ), [n, d]),
            !l && f && (0,
            qt.Z)(S.hd, s) && (y = "isInvalidArchiveRoute"),
            l) {
                const e = ( (e, t) => (0,
                $t.Z)(new Date("".concat(t, "T12:00:00")), new Date("".concat(e, "T12:00:00"))))(p, f);
                e && (y = "isFutureDate")
            }
            return {
                errorName: y,
                solutionEndpointError: b
            }
        }
        ;
        var an = n(35451)
          , sn = n(19588)
          , ln = n(84890);
        const cn = ["loading", "welcome"];
        var un = () => {
            const {updateUserType: e, hasLoaded: t, userType: n} = (0,
            u.aF)()
              , h = (0,
            a.I0)()
              , E = (0,
            a.v9)(qe.Jv)
              , w = (0,
            a.v9)(N.On)
              , S = (0,
            a.v9)(b.aX)
              , O = (0,
            a.v9)((0,
            b.sB)(S))
              , C = (0,
            a.v9)(Kt)
              , A = (0,
            a.v9)(N.Hh)
              , {unit: P} = (0,
            l.useUnit)(c.config)
              , {winWidth: T} = (0,
            p.Z)()
              , I = (0,
            a.v9)(N.Vy)
              , L = (0,
            a.v9)(k.o$)
              , {mode: j} = (0,
            s.default)()
              , {isHybridWebView: D, NativeBridge: x, isIOSGamesApp: z} = (0,
            i.vB)();
            (0,
            _.Z)(e, P.refetch);
            const {reportExposure: M, hasAbraLoadedWithUser: R} = (0,
            d.Z)()
              , G = (0,
            m.Z)();
            (0,
            r.useEffect)(( () => {
                v.S.load("loading")
            }
            ), []);
            const B = "game" === S || "congrats" === S
              , Z = r.useRef(document.getElementById("portal-skip-nav"));
            r.useEffect(( () => {
                A && (document.title = I)
            }
            ), [A, I]),
            (0,
            r.useEffect)(( () => {
                D && x && "light" !== j && z && G && cn.includes(S) ? (0,
                sn.L)("light") : (0,
                sn.L)(j)
            }
            ), [S]),
            (0,
            r.useEffect)(( () => {
                M("OMA_ENDSCREENACTIONS_CONNECTIONS")
            }
            )),
            (0,
            r.useEffect)(( () => {
                const e = document.getElementById("js-nav-burger")
                  , t = document.getElementById("js-global-nav")
                  , n = () => (0,
                an._)(e, t, !B, T);
                return null == e || e.addEventListener("click", n),
                () => {
                    null == e || e.removeEventListener("click", n)
                }
            }
            ), [B, T]);
            const {errorName: F, solutionEndpointError: H} = on();
            var U;
            U = () => O ? (h((0,
            y.Mr)(S)),
            !0) : !!["badgeDetail", "congrats"].includes(S) && (v.S.transition(S, "game"),
            !0),
            ( (e, t) => {
                const {isHybridWebView: n, NativeBridge: o, isAndroidGamesApp: a} = (0,
                i.vB)();
                r.useEffect(( () => {
                    if (n && o && a)
                        return o.addEventListener(i.Q5, e),
                        () => {
                            var t;
                            null === (t = window.NativeBridge) || void 0 === t || t.removeEventListener(i.Q5, e)
                        }
                }
                ), t)
            }
            )((e => {
                e.respondWith({
                    gamesOnNavigateBack: U()
                })
            }
            ), [O, S]),
            (0,
            g.Z)({
                analyticsPuzzleID: (0,
                Xe.X)(w).toString(),
                puzzleID: E || (0,
                Xe.X)(w),
                game: "connections"
            });
            const X = C && t && R
              , W = t && n.isLoggedIn && L
              , Y = H || F || W
              , V = Ct()
              , q = Ot();
            return ( (e, t, n, o) => {
                const s = (0,
                a.I0)()
                  , [l,c] = (0,
                r.useState)(!1)
                  , i = (0,
                a.v9)(k.c3)
                  , u = (0,
                a.v9)(N.Hh);
                let d = !1;
                const m = l || !e || t || i || u ? null : (!0,
                o ? n ? null : "companionAwareness" : "connectionsPurpleFirst")
                  , p = m && (0,
                Ie.Hi)(Ie.Hy, m);
                (0,
                Le.Z)(( () => {
                    m && (p ? (c(!0),
                    s((0,
                    y.jg)(m))) : Object.values(Ie.P).includes(m) && (c(!0),
                    s((0,
                    y.h7)({
                        modal: m
                    }))))
                }
                ), m ? 600 : null)
            }
            )(X, !!Y, q.isHidden, V.isHidden),
            (0,
            r.useEffect)(( () => {
                R && Y && A && "isInvalidArchiveRoute" !== F && (v.S.transition("welcome", "error"),
                ( () => {
                    const e = document.getElementsByClassName("pz-game-title-bar")[0];
                    e && e.classList.add("conn__hide-when-no-data")
                }
                )())
            }
            ), [Y, A, R]),
            r.createElement(r.Fragment, null, r.createElement(Yt, null), r.createElement(v.Z, {
                onEnter: e => h((0,
                y.vK)(e)),
                contentProps: {
                    hasLoaded: X || !!H,
                    today: w,
                    transitionFromWelcomeToGame: () => {
                        v.S.transition("welcome", "game")
                    }
                    ,
                    transitionFromAdToGame: () => {
                        v.S.transition("ad", "game")
                    }
                    ,
                    transitionFromWelcomeToAd: () => {
                        v.S.transition("welcome", "ad")
                    }
                }
            }), r.createElement(ln.r, {
                momentParent: "game",
                portalId: "portal-game-modals",
                isActive: "game" === S
            }), r.createElement(r.Fragment, null, B && !Y ? r.createElement(r.Fragment, null, ( () => {
                if (Z.current)
                    return (0,
                    o.createPortal)(r.createElement(f.Z, {
                        associatedSectionId: "connections-container"
                    }), Z.current)
            }
            )(), r.createElement(jt, {
                today: w
            })) : Y && r.createElement(Xt, {
                showBackButton: !0,
                errorType: F || "default"
            })))
        }
    },
    84890: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return ae
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            average: function() {
                return k
            },
            emptyStats: function() {
                return T
            },
            maxedOut: function() {
                return N
            },
            newPlayer: function() {
                return A
            },
            ones: function() {
                return P
            }
        });
        var o = n(89526)
          , a = n(33649)
          , s = n(34419)
          , l = n(75539)
          , c = n(17165)
          , i = n(82786)
          , u = n(85171)
          , d = n(21824)
          , m = n(73917)
          , p = n(64403)
          , f = n.n(p)
          , _ = n(14237)
          , g = n(65489)
          , v = n(88494)
          , b = n(30674)
          , y = n(72059)
          , h = n(43760)
          , E = n(69537)
          , w = n(98034)
          , S = n(44291)
          , O = n(45788)
          , C = n(28356);
        const k = {
            user_id: 1234,
            last_updated: 1696438356,
            stats: {
                cxns_prpl_frst: {
                    purple_first_wins: 27
                },
                connections: {
                    puzzles_completed: 100,
                    puzzles_won: 85,
                    last_played_print_date: "2024-05-27",
                    current_streak: 3,
                    max_streak: 25,
                    mistakes: {
                        0: 35,
                        1: 22,
                        2: 14,
                        3: 17,
                        4: 2
                    }
                }
            }
        }
          , A = {
            user_id: 1234,
            last_updated: 1696438356,
            stats: {
                cxns_prpl_frst: {
                    purple_first_wins: 0
                },
                connections: {
                    puzzles_completed: 0,
                    puzzles_won: 0,
                    last_played_print_date: "2024-05-27",
                    current_streak: 0,
                    max_streak: 0,
                    mistakes: {
                        0: 0,
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0
                    }
                }
            }
        }
          , N = {
            user_id: 1234,
            last_updated: 1696438356,
            stats: {
                cxns_prpl_frst: {
                    purple_first_wins: 999999
                },
                connections: {
                    puzzles_completed: 999999,
                    puzzles_won: 999999,
                    last_played_print_date: "2024-05-27",
                    current_streak: 999999,
                    max_streak: 999999,
                    mistakes: {
                        0: 999999,
                        1: 999999,
                        2: 999999,
                        3: 999999,
                        4: 999999
                    }
                }
            }
        }
          , P = {
            user_id: 1234,
            last_updated: 1696438356,
            stats: {
                connections: {
                    puzzles_completed: 1,
                    puzzles_won: 1,
                    last_played_print_date: "2024-05-27",
                    current_streak: 1,
                    max_streak: 1,
                    mistakes: {
                        0: 1,
                        1: 1,
                        2: 1,
                        3: 1,
                        4: 1
                    }
                }
            }
        }
          , T = {
            user_id: 1234,
            last_updated: 1696438356,
            stats: {}
        };
        var I = n(3097)
          , L = e => {
            let {fakeStats: t} = e;
            const {userType: n} = (0,
            _.aF)()
              , r = (0,
            a.v9)(c.On)
              , s = (0,
            a.I0)()
              , l = (0,
            a.v9)(b.qo)
              , i = (0,
            a.v9)(S.Jv) || (0,
            I.X)(r)
              , {inShortzMode: u} = n
              , d = window.location.href.includes("useFakeStats=true") && u
              , [m,p] = o.useState("default")
              , f = "hidden"
              , [g,v] = o.useState(f)
              , y = () => {
                v(g === f ? JSON.stringify(l, null, 2) : f)
            }
              , [h,w] = o.useState(!1)
              , O = () => {
                g !== f && (navigator.clipboard.writeText(g),
                w(!0),
                setTimeout(( () => w(!1)), 1e3))
            }
              , k = () => o.createElement(o.Fragment, null, o.createElement("div", {
                className: C.Z.stats__controls
            }, o.createElement("select", {
                name: "Fake Stats Options",
                value: m,
                onChange: e => {
                    const {value: n} = e.target;
                    var r;
                    p(n),
                    s("error" === n ? E.Nw.mooglePostError({
                        puzzleId: i.toString(),
                        message: "forced error"
                    }) : "get-error" === n ? E.Nw.multiStatesError({
                        message: "forced error"
                    }) : (r = t[n],
                    E.Nw.mooglePostSuccess({
                        player: r,
                        puzzleId: i.toString()
                    })))
                }
            }, o.createElement("option", {
                value: "default"
            }, "Select fake stats"), o.createElement("option", {
                value: "average"
            }, "Average"), o.createElement("option", {
                value: "newPlayer"
            }, "New Player"), o.createElement("option", {
                value: "maxedOut"
            }, "Maxed Out"), o.createElement("option", {
                value: "ones"
            }, "Ones"), o.createElement("option", {
                value: "emptyStats"
            }, "Empty Stats"), o.createElement("option", {
                value: "get-error"
            }, "Get error"), o.createElement("option", {
                value: "error"
            }, "Post error - select state first"))), o.createElement("button", {
                type: "button",
                onClick: y
            }, "".concat(g === f ? "Show" : "Hide", " Response from API")), g !== f ? o.createElement(o.Fragment, null, o.createElement("button", {
                type: "button",
                onClick: O
            }, h ? "Copied!" : "Copy"), o.createElement("pre", {
                className: C.Z.json
            }, g)) : null);
            return o.createElement(o.Fragment, null, d && o.createElement(k, null))
        }
          , j = n(64444)
          , D = n(57256)
          , x = n(95982)
          , z = n(15419)
          , M = n(33064)
          , R = n(6697)
          , G = n(30829)
          , B = e => {
            let {close: t, isClosing: n, onRemove: r} = e;
            const {updateUserType: a} = (0,
            _.aF)()
              , {getVariant: s, reportExposure: l, hasAbraLoaded: c} = (0,
            D.Z)()
              , {trackConnectionsClick: i, trackConnectionsImpression: u} = (0,
            x.Z)();
            (0,
            o.useEffect)(( () => {
                u("softregiwall", "stats-regiwall")
            }
            ), []);
            const d = s("GAMES_PLOPRO_HOLDOUT_0425")
              , m = d && "0_control" !== d ? (0,
            z.ZP)(window || void 0) : (0,
            M.Z)(window || void 0);
            return o.createElement(v.Z, {
                bodyClassName: "modal-stats-body",
                close: () => {
                    t()
                }
                ,
                isClosing: n,
                onRemove: r
            }, o.createElement("h2", {
                className: "modal-system-header"
            }, "Statistics"), o.createElement("div", {
                className: f()(C.Z.regiwall_abstract_stats, "dark_regiwall_abstract_stats")
            }), o.createElement("div", {
                className: C.Z.regiwall_message,
                "data-testid": "regiwall_message"
            }, o.createElement("h3", null, "Track your Connections stats."), o.createElement("p", null, "Register to follow your streaks, total completed puzzles, win rate and more."), o.createElement(R.Z, {
                className: f()("conn-anon-login", "button-dark-mode-support"),
                text: "Create a free account",
                onClick: e => {
                    d && l("GAMES_PLOPRO_HOLDOUT_0425"),
                    i("register", null, "stats-regiwall"),
                    (0,
                    G.Z)(e, a, "&asset=connections-stats", m)
                }
            })))
        }
        ;
        function Z(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var F = n(51722)
          , H = "HowToPlay-module_modalMessage__LMRqY"
          , U = "HowToPlay-module_categoryListItem__f8ujU";
        const X = () => o.createElement("span", {
            "aria-hidden": "true",
            className: "HowToPlay-module_helpArrowContainer__ZOXOG"
        }, o.createElement("span", {
            className: f()("HowToPlay-module_helpArrow__WMXx9", "conn-helpArrow")
        }))
          , W = {
            0: "Straightforward",
            1: "Medium",
            2: "Difficult",
            3: "Tricky"
        }
          , Y = () => o.createElement("ul", {
            className: "HowToPlay-module_categoryDifficultyKey__hgZTv"
        }, o.createElement(X, null), [0, 1, 2, 3].map(( (e, t) => o.createElement("li", {
            key: "level-".concat(t + 1),
            className: "HowToPlay-module_categoryKeyItem__gdsNY",
            "aria-label": "Level ".concat(t + 1, ": ").concat(W[e])
        }, o.createElement("span", {
            className: f()("HowToPlay-module_categoryKeyColor__JABkw"),
            "aria-hidden": "true"
        }), o.createElement("span", {
            "aria-hidden": "true"
        }, 0 === e || 3 === e ? W[e] : "")))));
        var V = n(88114)
          , q = n(80492)
          , $ = n(67522)
          , Q = n(22152)
          , J = n(44573)
          , K = n(43812)
          , ee = n(89064)
          , te = "Settings-module_description__o368F"
          , ne = "Settings-module_term__OnWQt"
          , re = "Settings-module_detail__aw6L1";
        const oe = {
            [m.P.SETTINGS]: e => {
                let {close: t, isClosing: n, onRemove: r, focusRef: s} = e;
                const {isHybridWebView: l, isGamesApp: i, meetsMinimumVersion: u, isWeb: d} = (0,
                $.vB)()
                  , m = !l || i && u("4.53")
                  , p = (0,
                K.Z)()
                  , {trackConnectionsClick: _} = (0,
                x.Z)()
                  , b = (0,
                a.v9)(c.On)
                  , y = (0,
                I.X)(b)
                  , h = (0,
                ee.Z)("deviceDefaultDarkMode")
                  , E = g.abra.getVariant(Q.mV)
                  , w = !d && E !== Q.S_;
                return o.createElement(v.Z, {
                    bodyClassName: f()("modal-settings-body", "conn__modal", "settings"),
                    close: t,
                    isClosing: n,
                    onRemove: r,
                    focusRef: s
                }, o.createElement("div", {
                    className: "Settings-module_dialog__sce5z"
                }, o.createElement("h2", {
                    className: "Settings-module_dialogTitle__WvBEr"
                }, "Settings"), p && o.createElement(V.Z, {
                    settingsTrack: e => {
                        _("settings", e, "settings")
                    }
                    ,
                    deviceDefaultVariant: h
                }), w && o.createElement("dl", null, o.createElement("div", {
                    className: te
                }, o.createElement("dt", {
                    className: ne
                }, "Feedback"), o.createElement("dd", {
                    className: re
                }, o.createElement("a", {
                    href: "https://iter.ly/rwjuh",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Survey"))), m && o.createElement("div", {
                    className: te
                }, o.createElement("dt", {
                    className: ne
                }, "Report a Bug"), o.createElement("dd", {
                    className: re
                }, o.createElement(J.Z, {
                    subject: "Connections Bug Report",
                    useEnhancedHybridDebugInfo: !0,
                    type: $.N1.CUSTOM,
                    tracking: () => {
                        _("report-bug", null, "settings")
                    }
                }, "Email"))), o.createElement("div", {
                    className: te
                }, o.createElement("dt", {
                    className: ne
                }, "Questions"), o.createElement("a", {
                    href: "https://help.nytimes.com/hc/en-us/articles/28525912587924-Connections",
                    target: "_blank",
                    rel: "noreferrer"
                }, o.createElement("dd", {
                    className: re
                }, "FAQ")))), o.createElement(q.Z, {
                    gameNumber: y + 1
                })))
            }
            ,
            [m.P.HOW_TO_PLAY]: e => {
                let {close: t, isClosing: n, onRemove: r, focusRef: a} = e;
                const {trackConnectionsImpression: s, trackConnectionsClick: l} = (0,
                x.Z)();
                return (0,
                o.useEffect)(( () => {
                    s("help")
                }
                ), []),
                o.createElement(v.Z, {
                    bodyClassName: f()("conn__modal--help", "modal-rules-body"),
                    close: () => {
                        l("close", null, "help"),
                        t()
                    }
                    ,
                    isClosing: n,
                    onRemove: r,
                    focusRef: a
                }, o.createElement("div", null, o.createElement("h2", {
                    "data-testid": "conn-modal__title",
                    className: "modal-system-header"
                }, "How to Play"), o.createElement("p", {
                    className: "modal-system-description"
                }, "Find groups of four items that share something in common."), o.createElement("ul", {
                    className: "bullet-list"
                }, o.createElement("li", {
                    className: "modal-system-body"
                }, "Select four items and tap '", o.createElement("span", {
                    className: "HowToPlay-module_bold__L0MTl"
                }, "Submit"), "' to check if your guess is correct."), o.createElement("li", {
                    className: "modal-system-body"
                }, "Find the groups without making ", F.oM, " mistakes!")), o.createElement("h4", {
                    className: "HowToPlay-module_modalHeading__Y56mA"
                }, "Category Examples"), o.createElement("dl", {
                    className: f()("modal-system-body", "HowToPlay-module_categoryList__s4DmD")
                }, o.createElement("span", {
                    className: U
                }, o.createElement("dt", null, "FISH:"), " ", o.createElement("dd", null, "Bass, Flounder, Salmon, Trout")), o.createElement("span", {
                    className: f()("modal-system-body", U)
                }, o.createElement("dt", {
                    "aria-label": "FIRE fill in the blank"
                }, o.createElement("span", {
                    "aria-hidden": "true"
                }, "FIRE ___:")), " ", o.createElement("dd", null, "Ant, Drill, Island, Opal"))), o.createElement("p", {
                    className: f()("modal-system-body", H)
                }, 'Categories will always be more specific than "5-LETTER-WORDS," "NAMES" or "VERBS."'), o.createElement("p", {
                    className: f()("modal-system-body", H)
                }, "Each puzzle has exactly one solution. Watch out for words that seem to belong to multiple categories!"), o.createElement("p", {
                    className: f()("modal-system-body", H, "HowToPlay-module_categoryDifficultyDescription__O7CQe"),
                    "aria-label": "Each group is assigned a level, which will be revealed to you as you solve."
                }, o.createElement("span", {
                    "aria-hidden": "true"
                }, "Each group is assigned a color, which will be revealed as you solve:")), o.createElement(Y, null)))
            }
            ,
            [m.P.STATS]: e => {
                let {close: t, isClosing: n, onRemove: s, focusRef: l} = e;
                const i = (0,
                a.I0)()
                  , {userType: u} = (0,
                _.aF)()
                  , d = !u.isLoggedIn
                  , m = (0,
                a.v9)(b.qo)
                  , p = (0,
                a.v9)(b.$u)
                  , k = (0,
                a.v9)(y.JQ)
                  , A = (0,
                a.v9)(y.Yj).toString()
                  , N = (0,
                a.v9)(c.wJ)
                  , P = (0,
                a.v9)(S.oN)
                  , T = (0,
                a.v9)((e => e.moogle.getPuzzleProgress.error))
                  , I = !d && T
                  , D = (0,
                a.v9)(y.a0)
                  , x = () => o.createElement("div", {
                    className: C.Z.get_error,
                    "data-testid": "stats__get_error"
                }, o.createElement("div", {
                    className: f()(C.Z.error__icon, "dark_error__icon")
                }), o.createElement("p", null, "Oops, something went wrong.", o.createElement("br", null), "Please try again later."))
                  , z = () => {
                    if (!m)
                        return null;
                    const {mistakes: e} = m
                      , t = Math.max(...Object.values(e));
                    return o.createElement("div", {
                        className: C.Z.mistakes
                    }, o.createElement("h3", null, "MISTAKE DISTRIBUTION"), o.createElement("div", {
                        className: C.Z.histogram_container
                    }, Object.keys(e).map((n => {
                        let r = "20px";
                        return e[n] > 0 && (r = "".concat(e[n] / t * 100, "%")),
                        o.createElement("div", {
                            className: C.Z.histogram_row,
                            key: n,
                            "data-testid": "stats__histogram_row"
                        }, o.createElement("p", null, n), " ", o.createElement("div", {
                            className: f()(C.Z.histogram_bar, k && A === n && C.Z.todays_mistakes),
                            style: {
                                width: "".concat(r)
                            },
                            "data-testid": "stats__histogram_bar"
                        }, e[n]))
                    }
                    ))))
                }
                ;
                return d ? o.createElement(B, {
                    close: () => {
                        t()
                    }
                    ,
                    isClosing: n,
                    onRemove: s
                }) : o.createElement(v.Z, {
                    bodyClassName: "modal-stats-body",
                    close: () => {
                        t()
                    }
                    ,
                    isClosing: n,
                    onRemove: s,
                    focusRef: l
                }, o.createElement("div", {
                    className: C.Z.stats_container
                }, o.createElement("h2", {
                    "data-testid": "conn-modal__title",
                    className: "modal-system-header"
                }, "Statistics"), I ? o.createElement(x, null) : o.createElement(o.Fragment, null, o.createElement(j.Z, {
                    statsData: m,
                    showPostErrorMsg: D
                }), p && p.length > 0 && o.createElement(h.Z, {
                    gameName: "connections",
                    shelfTrophies: p,
                    openBadgeDetail: (e, t) => {
                        i(E.Nw.openBadgeDetail({
                            detail: e,
                            returnMoment: "game",
                            isOpeningUnearned: t
                        })),
                        w.S.transition("game", "badgeDetail")
                    }
                    ,
                    trackBadgesInteraction: (e, t) => {
                        const n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Z(Object(n), !0).forEach((function(t) {
                                    var r, o, a, s;
                                    r = e,
                                    o = t,
                                    a = n[t],
                                    (o = "symbol" == typeof (s = function(e, t) {
                                        if ("object" != typeof e || !e)
                                            return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var r = n.call(e, "string");
                                            if ("object" != typeof r)
                                                return r;
                                            throw new TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return String(e)
                                    }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                                        value: a,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[o] = a
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }
                                ))
                            }
                            return e
                        }({
                            puzzleId: P
                        }, N)
                          , r = (0,
                        O.ae)(e, "stats", t, n);
                        (0,
                        g.LW)(r)
                    }
                }), o.createElement(z, null), o.createElement("a", {
                    href: "https://help.nytimes.com/hc/en-us/articles/28525912587924-Connections",
                    className: C.Z.faq,
                    target: "_blank",
                    rel: "noreferrer"
                }, "Have questions about stats? Visit our Help Center", o.createElement("div", {
                    className: f()(C.Z.inline_carrot__icon, "dark_inline_carrot__icon")
                })), o.createElement(L, {
                    fakeStats: r
                }))))
            }
        }
          , ae = e => {
            let {momentParent: t, portalId: n, isActive: r} = e;
            const m = o.useRef(null)
              , p = (0,
            a.v9)(c.On)
              , f = d.yq + 50;
            (0,
            u.Z)(( () => {
                var e;
                null === (e = m.current) || void 0 === e || e.focus({
                    preventScroll: !0
                })
            }
            ), r ? f : null);
            const _ = (0,
            a.v9)((0,
            l.sB)(t))
              , g = r && !!_;
            return o.useEffect(( () => (g ? document.body.classList.add("pz-modal-open") : document.body.classList.remove("pz-modal-open"),
            () => {
                document.body.classList.remove("pz-modal-open")
            }
            )), [g]),
            o.createElement(s.Z, {
                modalMap: oe,
                getOpenModalName: (0,
                l.sB)(t),
                getIsClosing: (0,
                l.Nx)(t),
                onClose: e => (0,
                i.Mr)(t),
                onRemove: () => (m.current && (m.current = null),
                (0,
                i.a_)(t)),
                today: p,
                portalId: n,
                focusRef: m
            })
        }
    },
    64444: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return g
            }
        });
        var r = n(89526)
          , o = n(64403)
          , a = n.n(o)
          , s = n(33649)
          , l = {
            flexContainer: "Stat-module_flexContainer__bOPnO",
            expandToRow: "Stat-module_expandToRow__oQ6Pt Stat-module_flexContainer__bOPnO",
            mobileColumn: "Stat-module_mobileColumn__rx8tV",
            "visually-hidden": "Stat-module_visually-hidden___Poxf",
            stats__row: "Stat-module_stats__row__xnktL",
            topBorder: "Stat-module_topBorder___ilW5",
            stats__group: "Stat-module_stats__group__QokRc",
            stats__divider: "Stat-module_stats__divider__pi7dG",
            stat: "Stat-module_stat__xk7C1",
            locked: "Stat-module_locked__PplME",
            stats__icon: "Stat-module_stats__icon__J35vp",
            stat__label: "Stat-module_stat__label__Q5EYk",
            genius: "Stat-module_genius__HKzOf",
            "queen-bee": "Stat-module_queen-bee__zekvO",
            "stats__post-error": "Stat-module_stats__post-error__WPlS7",
            stats__controls: "Stat-module_stats__controls__PiGvv",
            "api-json": "Stat-module_api-json__ANcvp",
            slideDown: "Stat-module_slideDown__oEE1Z",
            flyIn: "Stat-module_flyIn__NzUQo",
            flyOut: "Stat-module_flyOut__OX0ip",
            fadeIn: "Stat-module_fadeIn__Z6tPw"
        };
        const c = () => r.createElement("div", {
            className: "StatsLoadingAndError-module_postError__vN0Bi",
            "data-testid": "stats-post-error"
        }, r.createElement("div", {
            className: "StatsLoadingAndError-module_inlineAlertIcon__RErmf"
        }), "We couldn’t sync your stats. Try again in a few.")
          , i = e => {
            let {statCount: t, loadError: n} = e;
            return r.createElement("div", {
                className: a()("StatsLoadingAndError-module_loadingAndErrorContainer__y_wjk", n && "StatsLoadingAndError-module_error__DNAFj")
            }, r.createElement("div", {
                className: "StatsLoadingAndError-module_loadingCongainer__trEsT",
                role: "img",
                "aria-label": "loading"
            }, Array.from({
                length: t
            }).map(( (e, t) => r.createElement("div", {
                key: t,
                className: "StatsLoadingAndError-module_statLoading__qOhq8",
                "aria-hidden": "true",
                "data-testid": "stats-loading-icon"
            }, r.createElement("div", {
                className: "StatsLoadingAndError-module_statLoadingIcon__fgBBF"
            }), " ")))), n && r.createElement(c, null), " ")
        }
          , u = e => {
            let {icon: t} = e;
            return r.createElement("div", {
                className: a()(l.stats__icon, l[t])
            })
        }
          , d = e => {
            let {children: t, showTopBorder: n, showError: o, showLoading: s, statCount: c=3} = e;
            return r.createElement("div", {
                className: a()(l.stats__row, n && l.topBorder),
                "data-testid": "stats__row"
            }, s || o ? r.createElement(i, {
                statCount: c,
                loadError: o
            }) : t)
        }
          , m = e => {
            let {id: t, label: n, children: o, icon: s, isLocked: c, link: i, onClick: d} = e;
            const m = r.createElement("div", {
                "data-testid": "stat-".concat(t),
                id: "stat__".concat(t),
                className: a()(l.stat, c && l.locked)
            }, r.createElement("div", {
                className: l.stat__value
            }, o), r.createElement("div", {
                className: l.stat__label
            }, s && r.createElement(u, {
                icon: s
            }), n));
            return i && d ? r.createElement("a", {
                "data-testid": "subscribe-link",
                href: i,
                onClick: e => {
                    e.preventDefault(),
                    d()
                }
            }, m) : m
        }
        ;
        var p = n(95982)
          , f = n(30674)
          , _ = n(28356)
          , g = e => {
            let {statsData: t, showPostErrorMsg: n=!1, firstRowOnly: o=!1} = e;
            const {trackConnectionsImpression: l} = (0,
            p.Z)()
              , c = (0,
            s.v9)(f.G7);
            if ((0,
            r.useEffect)(( () => {
                if (!t)
                    return;
                const {win_percentage: e, puzzles_completed: n, current_streak: r, max_streak: o, mistakes: a} = t;
                l("stats", ["p: ".concat(n), "w: ".concat(e), "cs: ".concat(r), "ms: ".concat(o), "pp: ".concat(a[0]), "0: ".concat(a[0]), "1: ".concat(a[1]), "2: ".concat(a[2]), "3: ".concat(a[3]), "4: ".concat(a[4])])
            }
            ), [t]),
            !t)
                return null;
            const {win_percentage: i, puzzles_completed: u, current_streak: g, max_streak: v, mistakes: b} = t
              , y = e => Number(e).toLocaleString("en-US");
            return r.createElement(r.Fragment, null, n && r.createElement("div", {
                className: _.Z.post_error,
                "data-testid": "stats__post_error"
            }, r.createElement("div", {
                className: a()(_.Z.inline_alert__icon, "dark_inline_alert__icon")
            }), "We couldn’t sync your stats. Try again in a few."), r.createElement("div", {
                className: a()("connections-lifetime-stats", _.Z.stats)
            }, r.createElement(d, null, r.createElement(m, {
                id: "completed",
                label: "Completed",
                "data-testid": "completed"
            }, y(u)), r.createElement(m, {
                id: "win_percentage",
                label: "Win %",
                "data-testid": "win_percentage"
            }, i), r.createElement(m, {
                id: "current_streak",
                label: "Current Streak",
                "data-testid": "current_streak"
            }, y(g)), r.createElement(m, {
                id: "max_streak",
                label: "Max Streak",
                "data-testid": "max_streak"
            }, y(v))), o ? null : r.createElement(d, null, r.createElement(m, {
                id: "perfect_puzzles",
                label: (h = "Perfect Puzzle",
                E = b[0],
                1 === E ? h : "".concat(h, "s")),
                "data-testid": "perfect_puzzles"
            }, y(b[0])), void 0 !== c && r.createElement(m, {
                id: "purple_first_puzzles",
                label: "Purple First",
                "data-testid": "purple_first_puzzles"
            }, y(c)))));
            var h, E
        }
    },
    51722: function(e, t, n) {
        "use strict";
        n.d(t, {
            hd: function() {
                return s
            },
            nA: function() {
                return o
            },
            oM: function() {
                return r
            },
            pr: function() {
                return a
            },
            yw: function() {
                return l
            }
        });
        const r = 6
          , o = 4
          , a = 4
          , s = new Date("".concat("2023-06-12", "T00:00:00"))
          , l = 639
    },
    34543: function(e, t, n) {
        "use strict";
        n.d(t, {
            K8: function() {
                return l
            },
            Ux: function() {
                return c
            },
            j5: function() {
                return s
            },
            qQ: function() {
                return a
            }
        });
        var r = n(47549)
          , o = n(74078);
        const a = e => e.animation
          , s = (0,
        r.createSelector)(a, (e => e.isAnimating))
          , l = (0,
        r.createSelector)(a, (e => e.component === o.zH.CATEGORY && e.effect === o.dp.CATEGORY_PULSE ? e.level : -1))
          , c = ((0,
        r.createSelector)(a, (e => e.component)),
        e => {
            let {selected: t, selectedIndex: n} = e;
            return (0,
            r.createSelector)(a, (e => t && e.effect === o.bi.CARD_SHAKE ? {
                effect: o.bi.CARD_SHAKE
            } : t && e.effect === o.bi.CARD_BOUNCE ? {
                effect: o.bi.CARD_BOUNCE,
                timeout: n
            } : e.effect === o.bi.CARD_SHUFFLE ? {
                effect: o.bi.CARD_SHUFFLE,
                selected: t
            } : void 0))
        }
        )
    },
    89406: function(e, t, n) {
        "use strict";
        n.d(t, {
            NQ: function() {
                return i
            },
            XF: function() {
                return c
            },
            nO: function() {
                return u
            },
            oQ: function() {
                return d
            }
        });
        var r = n(97281);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        const a = {
            isAnimating: !1,
            isMidway: !1
        }
          , s = (0,
        r.createSlice)({
            name: "animation",
            initialState: a,
            reducers: {
                setAnimation(e, t) {
                    let {payload: n} = t;
                    return n ? function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                var r, o, a, s;
                                r = e,
                                o = t,
                                a = n[t],
                                (o = "symbol" == typeof (s = function(e, t) {
                                    if ("object" != typeof e || !e)
                                        return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var r = n.call(e, "string");
                                        if ("object" != typeof r)
                                            return r;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(o)) ? s : s + "")in r ? Object.defineProperty(r, o, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = a
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        isAnimating: !0,
                        isMidway: !1
                    }, n) : e
                },
                setMidway(e) {
                    e.isMidway = !0
                },
                unsetAnimation() {
                    return a
                }
            }
        })
          , l = s.actions
          , {setAnimation: c, unsetAnimation: i, setMidway: u} = l
          , d = s.reducer
    },
    30157: function(e, t, n) {
        "use strict";
        n.d(t, {
            cg: function() {
                return _
            },
            yu: function() {
                return g
            },
            Uv: function() {
                return v
            }
        });
        var r = n(36629)
          , o = n(47549)
          , a = n(72059)
          , s = n(44291);
        const l = (e, t) => e.cards.split(",").map((e => {
            var n;
            const r = parseInt(e)
              , o = null === (n = t.find((e => e.originalPosition === r))) || void 0 === n ? void 0 : n.level;
            return void 0 === o ? null : {
                position: r,
                level: o
            }
        }
        )).filter((e => !!e))
          , c = (0,
        o.createSelector)([a.f_, s.dG], ( (e, t) => e.map(( (e, n) => {
            var r;
            const o = l(e, t);
            return {
                cards: o,
                level: (null === (r = o[0]) || void 0 === r ? void 0 : r.level) || 0,
                orderSolved: n + 1
            }
        }
        ))))
          , i = (0,
        o.createSelector)([a.Mr, s.dG], ( (e, t) => e.map((e => ({
            cards: l(e, t),
            correct: e.correct
        })))))
          , u = e => e.map((e => e.position)).join(",");
        var d = n(63448)
          , m = n(38918)
          , p = n(33234)
          , f = n(17165);
        const _ = {
            game: "connections",
            selectPuzzleIdOrSettings: e => {
                const t = (0,
                s.Jv)(e);
                return t ? t.toString() : ""
            }
            ,
            selectPuzzlePrintDate: s.nf,
            selectMoogleState: e => e.moogle,
            shouldSave: (e, t) => {
                const n = "game/makeGuess" === t.type
                  , r = "game/resetGame" === t.type;
                return n || r
            }
            ,
            selectPersistedState: e => {
                var t;
                const n = (0,
                a.q_)(e)
                  , o = (0,
                a.JQ)(e)
                  , s = c(e)
                  , l = i(e)
                  , u = l.filter((e => !e.correct)).length;
                let d = (0,
                f.Hh)(e);
                return null !== (t = window.gameData) && void 0 !== t && t.connectionsShortzDate && window.gameData.connectionsShortzDate !== (0,
                r.Z)(new Date, "yyyy-MM-dd") && (d = !0),
                {
                    puzzleComplete: o,
                    puzzleWon: n,
                    mistakes: u,
                    guesses: l,
                    solvedCategories: s,
                    isPlayingArchive: d
                }
            }
            ,
            insertProgress: e => (t, n) => {
                const r = e ? (e => {
                    const {guesses: t, solvedCategories: n} = e;
                    return t.map((e => {
                        const t = u(e.cards)
                          , r = n.find((e => u(e.cards) === t));
                        return {
                            cards: t,
                            correct: e.correct,
                            solvedLevel: r ? r.level : null
                        }
                    }
                    ))
                }
                )(e) : [];
                t((0,
                p.YU)(r)),
                null != e && e.puzzleComplete && t((0,
                p.Ey)())
            }
            ,
            handleMidGameLogin: (e, t) => e || t,
            shouldPreventSaveAfterLoad: (e, t, n) => (0,
            f.Hh)(n) && !!e && e.puzzleComplete
        }
          , g = (0,
        d.L)(_)
          , v = (0,
        m.d)(_)
    },
    72059: function(e, t, n) {
        "use strict";
        n.d(t, {
            C1: function() {
                return E
            },
            D1: function() {
                return T
            },
            Gp: function() {
                return D
            },
            JQ: function() {
                return x
            },
            K4: function() {
                return P
            },
            Kc: function() {
                return z
            },
            Lc: function() {
                return C
            },
            Mr: function() {
                return p
            },
            Q5: function() {
                return y
            },
            Sf: function() {
                return L
            },
            Xh: function() {
                return v
            },
            Yj: function() {
                return _
            },
            a0: function() {
                return M
            },
            a2: function() {
                return O
            },
            aB: function() {
                return h
            },
            c3: function() {
                return f
            },
            cG: function() {
                return G
            },
            cZ: function() {
                return I
            },
            f_: function() {
                return g
            },
            kX: function() {
                return S
            },
            mZ: function() {
                return N
            },
            o$: function() {
                return R
            },
            p2: function() {
                return w
            },
            q_: function() {
                return j
            },
            tn: function() {
                return k
            },
            zu: function() {
                return A
            }
        });
        var r = n(47549)
          , o = n(34543)
          , a = n(74078)
          , s = n(51722)
          , l = n(44291)
          , c = n(17165)
          , i = n(75541)
          , u = n(3097)
          , d = n(35451);
        const m = e => e.game
          , p = (0,
        r.createSelector)(m, (e => e.guesses))
          , f = (0,
        r.createSelector)(m, (e => e.guesses.length > 0))
          , _ = (0,
        r.createSelector)(p, (e => e.filter((e => !e.correct)).length))
          , g = (0,
        r.createSelector)(p, (e => e.filter((e => e.correct))))
          , v = (0,
        r.createSelector)(g, (e => e.length))
          , b = (0,
        r.createSelector)(g, (e => e.map((e => e.solvedLevel))))
          , y = (0,
        r.createSelector)(m, (e => e.autoSolveStatus))
          , h = (0,
        r.createSelector)([m, y, b], ( (e, t, n) => "complete" === t ? new Array(s.pr).fill(!0).map(( (e, t) => t)).filter((e => !n.includes(e))) : e.autoSolvedLevels))
          , E = (0,
        r.createSelector)([b, h], ( (e, t) => [...e, ...t]))
          , w = (0,
        r.createSelector)([l.j3, E, o.qQ], ( (e, t, n) => {
            const {isMidway: r, effect: o} = n
              , s = o === a.dp.CATEGORY_PULSE && !r
              , l = t.map((t => e.find((e => e.level === t))));
            return s ? l.slice(0, -1) : l
        }
        ))
          , S = (0,
        r.createSelector)(m, (e => e.cardOrder))
          , O = (0,
        r.createSelector)([w, l.dG, S], ( (e, t, n) => {
            const r = e.map((e => e.level));
            return t.slice().sort(( (e, t) => n.indexOf(e.content) - n.indexOf(t.content))).filter((e => !r.includes(e.level)))
        }
        ))
          , C = (0,
        r.createSelector)(m, (e => e.selectedCards))
          , k = (0,
        r.createSelector)([C, l.dG], ( (e, t) => e.map((e => t.find((t => t.content === e))))))
          , A = (0,
        r.createSelector)(k, (e => {
            const t = [...new Set(e.map((e => e.level)))]
              , n = 1 === t.length;
            return {
                correct: n,
                cards: e.map((e => e.originalPosition)).sort(( (e, t) => e - t)).join(","),
                solvedLevel: n ? t[0] : null
            }
        }
        ))
          , N = (0,
        r.createSelector)([_, A, w], ( (e, t, n) => {
            const r = e === s.oM - 1 && !t.correct
              , o = n.length === s.pr - 1 && t.correct;
            return r || o
        }
        ))
          , P = (0,
        r.createSelector)([m, l.dG], ( (e, t) => {
            const n = new Map;
            return t.forEach((e => {
                n.set(e.originalPosition.toString(), e.level)
            }
            )),
            e.guesses.map((e => e.cards.split(",").map((e => n.get(e)))))
        }
        ))
          , T = e => (0,
        r.createSelector)(l.dG, (t => t.filter((t => t.level === e))))
          , I = (0,
        r.createSelector)(m, (e => e.isRecentlyGuessed))
          , L = (0,
        r.createSelector)([o.j5, y], ( (e, t) => e || "in progress" === t))
          , j = (0,
        r.createSelector)(v, (e => e === s.pr))
          , D = (0,
        r.createSelector)(_, (e => e >= s.oM))
          , x = (0,
        r.createSelector)([j, D], ( (e, t) => e || t))
          , z = (0,
        r.createSelector)([k, x], ( (e, t) => (0,
        i.SY)(e) && !t))
          , M = (0,
        r.createSelector)([l.Jv, e => {
            var t;
            return null === (t = e.moogle) || void 0 === t ? void 0 : t.postRequest
        }
        ], ( (e, t) => {
            var n;
            return e && (null === (n = t[e.toString()]) || void 0 === n ? void 0 : n.error) || !1
        }
        ))
          , R = (0,
        r.createSelector)((e => e.moogle.getPuzzleProgress), (e => e.error))
          , G = (0,
        r.createSelector)([P, c.On, c.Hh], ( (e, t, n) => {
            const r = {
                0: "🟨",
                1: "🟩",
                2: "🟦",
                3: "🟪"
            }
              , o = e ? e.map((e => e.map((e => r[e])).join(""))) : []
              , a = "".concat(o.join("\n"))
              , s = (0,
            u.X)(t)
              , l = "Puzzle #".concat(s + 1);
            if (n) {
                const e = (0,
                d.F)(t);
                return "Archive ".concat(e, "\nConnections ").concat(l, "\n").concat(a)
            }
            return "Connections\n".concat(l, "\n").concat(a)
        }
        ))
    },
    33234: function(e, t, n) {
        "use strict";
        n.d(t, {
            AS: function() {
                return m
            },
            Es: function() {
                return u
            },
            Ey: function() {
                return y
            },
            GR: function() {
                return d
            },
            H6: function() {
                return E
            },
            IO: function() {
                return _
            },
            L9: function() {
                return b
            },
            MR: function() {
                return h
            },
            Mq: function() {
                return v
            },
            YU: function() {
                return f
            },
            _X: function() {
                return g
            },
            r2: function() {
                return p
            }
        });
        var r = n(97281)
          , o = n(51722)
          , a = n(75541)
          , s = n(20090);
        const l = {
            guesses: [],
            autoSolveStatus: "not started",
            autoSolvedLevels: [],
            isRecentlyGuessed: !1,
            selectedCards: [],
            cardOrder: []
        }
          , c = (0,
        r.createSlice)({
            name: "game",
            initialState: l,
            reducers: {
                setInitialCardOrder(e, t) {
                    e.cardOrder = t.payload.slice().sort(( (e, t) => e.originalPosition - t.originalPosition)).map((e => e.content))
                },
                toggleCard(e, t) {
                    const n = e.selectedCards.indexOf(t.payload);
                    n > -1 ? e.selectedCards.splice(n, 1) : e.selectedCards.push(t.payload),
                    e.isRecentlyGuessed = !1
                },
                deselectAllCards(e) {
                    e.selectedCards = []
                },
                reorderSolvedCards(e, t) {
                    const n = (e => e.guesses.filter((e => e.correct)).map((e => e.solvedLevel)))(e).concat(e.autoSolvedLevels).slice(0, -1)
                      , r = t.payload.cards.filter((e => !n.includes(e.level))).sort(( (t, n) => e.cardOrder.indexOf(t.content) - e.cardOrder.indexOf(n.content)))
                      , a = r.slice(0, o.nA)
                      , s = r.slice(o.nA)
                      , l = a.filter((e => e.level !== t.payload.solvedLevel))
                      , c = s.filter((e => e.level === t.payload.solvedLevel));
                    l.forEach(( (t, n) => {
                        ( (t, n) => {
                            const r = e.cardOrder.indexOf(t)
                              , o = e.cardOrder.indexOf(n);
                            e.cardOrder[o] = t,
                            e.cardOrder[r] = n
                        }
                        )(t.content, c[n].content)
                    }
                    ))
                },
                shuffleUnsolvedCards(e) {
                    e.cardOrder = (0,
                    s.TV)(e.cardOrder, !0)
                },
                setGuesses(e, t) {
                    e.guesses = t.payload
                },
                makeGuess(e, t) {
                    const n = (0,
                    a.Y5)(t.payload.cards);
                    t.payload.cards = n,
                    e.guesses.push(t.payload),
                    e.isRecentlyGuessed = !0
                },
                resetGame() {
                    return l
                },
                startAutoSolve(e) {
                    e.autoSolveStatus = "in progress"
                },
                setAutoSolveLevel(e, t) {
                    const n = t.payload;
                    n === o.pr ? e.autoSolveStatus = "complete" : e.autoSolvedLevels.push(n)
                },
                completeAutosolve(e) {
                    e.autoSolveStatus = "complete"
                }
            }
        })
          , i = c.actions
          , {setInitialCardOrder: u, toggleCard: d, deselectAllCards: m, reorderSolvedCards: p, setGuesses: f, makeGuess: _, resetGame: g, setAutoSolveLevel: v, startAutoSolve: b, completeAutosolve: y, shuffleUnsolvedCards: h} = i
          , E = c.reducer
    },
    40667: function(e, t, n) {
        "use strict";
        n.d(t, {
            Lv: function() {
                return v
            },
            x8: function() {
                return y
            },
            ip: function() {
                return E
            },
            U9: function() {
                return b
            },
            EX: function() {
                return h
            }
        });
        var r = n(44291)
          , o = n(75541)
          , a = n(65489)
          , s = n(3097)
          , l = n(51722)
          , c = n(98034)
          , i = n(89979)
          , u = n(74078)
          , d = n(89406)
          , m = n(82786)
          , p = n(73917)
          , f = n(17165)
          , _ = n(72059)
          , g = n(33234);
        const v = () => (e, t) => {
            const n = (0,
            _.C1)(t());
            let r = 0;
            for (; r < l.pr && n.includes(r); )
                r += 1;
            return e((0,
            g.Mq)(r)),
            r
        }
          , b = () => (e, t) => {
            (0,
            _.Gp)(t()) && (e((0,
            g.AS)()),
            e((0,
            m.eS)(p.nI.REVEAL_MISTAKE_TITLE)),
            e((0,
            g.L9)()))
        }
          , y = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return (t, n) => {
                const o = (0,
                _.p2)(n())
                  , a = (0,
                r.dG)(n())
                  , s = (0,
                _.zu)(n())
                  , f = (0,
                _.q_)(n())
                  , v = null != e ? e : s.solvedLevel;
                o.length === l.pr ? (f && t((0,
                m.eS)(p.nI.REVEAL_MISTAKE_TITLE)),
                setTimeout(( () => {
                    c.S.transition("game", "congrats")
                }
                ), i.Gf)) : t((0,
                g.r2)({
                    solvedLevel: v,
                    cards: a
                })),
                t((0,
                d.XF)({
                    component: u.zH.CATEGORY,
                    effect: u.dp.CATEGORY_PULSE,
                    level: v,
                    animationTimeout: 2 * i.Vb
                }))
            }
        }
          , h = () => (e, t) => {
            const n = (0,
            _.zu)(t());
            e((0,
            g.IO)(n)),
            n.correct ? e(y()) : e(( (e, t) => {
                const n = (0,
                _.Kc)(t());
                e((0,
                d.XF)({
                    component: u.zH.CARD,
                    effect: u.bi.CARD_SHAKE,
                    animationTimeout: i.C6,
                    afterEffect: u.YV.ON_POTENTIAL_LOSS
                })),
                n && e((0,
                m.eS)(p.nI.ONE_AWAY))
            }
            ))
        }
          , E = () => (e, t) => {
            const n = (0,
            _.tn)(t())
              , r = (0,
            _.Mr)(t())
              , l = (0,
            _.Yj)(t())
              , c = (0,
            f.On)(t())
              , g = (0,
            f.wJ)(t())
              , v = (0,
            _.zu)(t())
              , b = (0,
            _.mZ)(t());
            if ((0,
            o.Lw)(r, v))
                return void e((0,
                m.eS)(p.nI.ALREADY_GUESSED));
            const y = v.correct ? i.NC : i.C6;
            e((0,
            d.XF)({
                component: u.zH.CARD,
                effect: u.bi.CARD_BOUNCE,
                animationTimeout: y,
                afterEffect: u.YV.SUBMIT_GUESS
            })),
            function(e, t, n, r, o, l) {
                const c = ["r: ".concat(e ? "pass" : "fail"), "w: ".concat(t.map((e => e.content)).join(",")), "d: ".concat(e ? (n || 0) + 1 : null), "m: ".concat(e ? r : r + 1)];
                (0,
                a.ob)({
                    name: "connections",
                    label: "solve-attempt",
                    context: s.X(o),
                    moduleName: l,
                    moduleLabel: c
                })
            }(v.correct, n, v.solvedLevel, l, c, g),
            b && function(e, t, n, r) {
                const o = ["o: ".concat(e.filter((e => e.correct)).map((e => (e.solvedLevel || 0) + 1)).join(",")), "m: ".concat(t)];
                (0,
                a.ob)({
                    name: "connections",
                    label: "100%-complete",
                    context: s.X(n),
                    moduleName: r,
                    moduleLabel: o
                })
            }([...r, v], v.correct ? l : l + 1, c, g)
        }
    },
    39578: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return E
            }
        });
        var r = n(27670)
          , o = n(97281)
          , a = n(88770)
          , s = n(96205)
          , l = n(33234)
          , c = n(82786)
          , i = n(89406)
          , u = n(33738)
          , d = n(36629)
          , m = n(95609);
        const p = (0,
        o.createSlice)({
            name: "printDate",
            initialState: () => {
                const e = window.connectionsArchiveDate
                  , t = (0,
                d.Z)((0,
                m.Y)({
                    gameDataKey: m.I.CONNECTIONS
                }), "yyyy-MM-dd");
                return {
                    isArchive: !!e,
                    dateString: e || t
                }
            }
            ,
            reducers: {}
        }).reducer;
        var f = n(74078)
          , _ = n(40667)
          , g = n(34543);
        const v = (0,
        o.createListenerMiddleware)();
        v.startListening({
            actionCreator: i.XF,
            effect: (e, t) => {
                const {animationTimeout: n} = e.payload
                  , r = n && Math.round(n / 2);
                setTimeout(( () => {
                    t.dispatch((0,
                    i.nO)())
                }
                ), r),
                setTimeout(( () => {
                    t.dispatch((0,
                    i.NQ)())
                }
                ), n)
            }
        }),
        v.startListening({
            actionCreator: i.NQ,
            effect: (e, t) => {
                const n = t.getOriginalState();
                switch ((0,
                g.qQ)(n).afterEffect) {
                case f.YV.ON_POTENTIAL_LOSS:
                    t.dispatch((0,
                    _.U9)());
                    break;
                case f.YV.SUBMIT_GUESS:
                    t.dispatch((0,
                    _.EX)())
                }
            }
        });
        var b = v
          , y = n(30157);
        const h = (0,
        r.UY)({
            [a.X.reducerPath]: a.X.reducer,
            animation: i.oQ,
            game: l.H6,
            overlays: c.Vj,
            loading: u.V,
            printDate: p,
            moogle: s.b
        })
          , E = (0,
        o.configureStore)({
            reducer: h,
            preloadedState: undefined,
            middleware: e => e().concat(a.X.middleware).concat(y.Uv).prepend(b.middleware)
        })
    },
    33738: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return o
            },
            V: function() {
                return a
            }
        });
        const r = (0,
        n(97281).createSlice)({
            name: "loading",
            initialState: {
                isConnectionsLoaded: !1
            },
            reducers: {
                setIsConnectionsFullyLoaded(e, t) {
                    e.isConnectionsLoaded = t.payload
                }
            }
        })
          , {setIsConnectionsFullyLoaded: o} = r.actions
          , a = r.reducer
    },
    75539: function(e, t, n) {
        "use strict";
        n.d(t, {
            Nx: function() {
                return l
            },
            _h: function() {
                return s
            },
            aX: function() {
                return d
            },
            my: function() {
                return i
            },
            sB: function() {
                return a
            },
            wM: function() {
                return m
            },
            xf: function() {
                return u
            }
        });
        var r = n(47549);
        const o = e => e.overlays.modals
          , a = e => (0,
        r.createSelector)(o, (t => {
            var n;
            return (null === (n = t[e]) || void 0 === n ? void 0 : n.name) || null
        }
        ))
          , s = e => (0,
        r.createSelector)(a(e), (e => !!e))
          , l = e => (0,
        r.createSelector)(o, (t => {
            var n;
            return (null === (n = t[e]) || void 0 === n ? void 0 : n.isClosing) || !1
        }
        ))
          , c = e => e.overlays.toasts
          , i = (0,
        r.createSelector)(c, (e => e.name))
          , u = ((0,
        r.createSelector)(i, (e => !!e)),
        (0,
        r.createSelector)(c, (e => e.isClosing)))
          , d = (0,
        r.createSelector)((e => e.overlays.moment), (e => e.currentMoment))
          , m = (0,
        r.createSelector)((e => e.overlays.tooltips), (e => e.name));
        (0,
        r.createSelector)(m, (e => !!e))
    },
    82786: function(e, t, n) {
        "use strict";
        n.d(t, {
            BP: function() {
                return b
            },
            Mr: function() {
                return l
            },
            RS: function() {
                return f
            },
            Vj: function() {
                return S
            },
            a_: function() {
                return c
            },
            eS: function() {
                return m
            },
            h7: function() {
                return s
            },
            jg: function() {
                return v
            },
            vK: function() {
                return E
            },
            yg: function() {
                return p
            }
        });
        var r = n(97281)
          , o = n(27670);
        const a = (0,
        r.createSlice)({
            name: "modal",
            initialState: {},
            reducers: {
                openModal(e, t) {
                    const {moment: n="game", modal: r} = t.payload;
                    e[n] = e[n] || {
                        name: null,
                        isClosing: !1
                    },
                    e[n].name = r,
                    e[n].isClosing = !1
                },
                closeModal(e, t) {
                    const n = t.payload;
                    e[n] = e[n] || {
                        name: null,
                        isClosing: !1
                    },
                    e[n].name = null,
                    e[n].isClosing = !0
                },
                removeModal(e, t) {
                    delete e[t.payload]
                }
            }
        })
          , {openModal: s, closeModal: l, removeModal: c} = a.actions
          , i = a.reducer
          , u = {
            name: null,
            isClosing: !1
        }
          , d = (0,
        r.createSlice)({
            name: "toast",
            initialState: u,
            reducers: {
                openToast(e, t) {
                    e.name = t.payload,
                    e.isClosing = !1
                },
                closeToast(e, t) {
                    e.name = null,
                    e.isClosing = !0
                },
                removeToast(e) {
                    return u
                }
            }
        })
          , {openToast: m, closeToast: p, removeToast: f} = d.actions
          , _ = d.reducer
          , g = (0,
        r.createSlice)({
            name: "tooltip",
            initialState: {
                name: null,
                isClosing: !1
            },
            reducers: {
                openTooltip(e, t) {
                    e.name = t.payload,
                    e.isClosing = !1
                },
                closeTooltip(e) {
                    e.name = null,
                    e.isClosing = !0
                }
            }
        })
          , {openTooltip: v, closeTooltip: b} = g.actions
          , y = g.reducer
          , h = (0,
        r.createSlice)({
            name: "moment",
            initialState: {
                currentMoment: "loading"
            },
            reducers: {
                setCurrentMoment(e, t) {
                    e.currentMoment = t.payload
                }
            }
        })
          , {setCurrentMoment: E} = h.actions
          , w = h.reducer
          , S = (0,
        o.UY)({
            modals: i,
            toasts: _,
            tooltips: y,
            moment: w
        });
        d.actions,
        a.actions,
        g.actions,
        h.actions
    },
    73917: function(e, t, n) {
        "use strict";
        n.d(t, {
            Hi: function() {
                return s
            },
            Hy: function() {
                return a
            },
            P: function() {
                return r
            },
            nI: function() {
                return o
            }
        });
        let r = function(e) {
            return e.HOW_TO_PLAY = "howToPlay",
            e.SETTINGS = "settings",
            e.STATS = "stats",
            e.BADGE_DETAIL = "badgeDetail",
            e.DARK_MODE_AWARENESS = "darkModeAwareness",
            e
        }({})
          , o = function(e) {
            return e.ALREADY_GUESSED = "alreadyGuessed",
            e.ONE_AWAY = "oneAway",
            e.REVEAL_MISTAKE_TITLE = "revealMistakeTitle",
            e.COPY_RESULTS = "onCopy",
            e.SHARE_FAIL = "onFail",
            e
        }({});
        const a = ["companionAwareness", "connectionsPurpleFirst"];
        function s(e, t) {
            return e.includes(t)
        }
    },
    30674: function(e, t, n) {
        "use strict";
        n.d(t, {
            $t: function() {
                return y
            },
            $u: function() {
                return h
            },
            G7: function() {
                return C
            },
            bh: function() {
                return v
            },
            j7: function() {
                return k
            },
            l8: function() {
                return w
            },
            lR: function() {
                return S
            },
            qo: function() {
                return g
            }
        });
        var r = n(47549)
          , o = n(70033)
          , a = n(45657)
          , s = n(44291)
          , l = n(17165)
          , c = n(42101)
          , i = n(30157)
          , u = n(45788);
        const d = e => e.moogle
          , m = (0,
        r.createSelector)(d, (e => null == e ? void 0 : e.postRequest))
          , p = (0,
        r.createSelector)([m, s.Jv], ( (e, t) => null !== t ? null == e ? void 0 : e[t] : null))
          , f = ((0,
        r.createSelector)(p, (e => null == e ? void 0 : e.isLoading)),
        (0,
        r.createSelector)(d, (e => e.player)))
          , _ = (0,
        r.createSelector)(f, (e => e && e.stats ? e.stats.connections : null))
          , g = (0,
        r.createSelector)(_, (e => {
            if (!e)
                return null;
            const {puzzles_won: t=0, puzzles_completed: n=0, current_streak: r=0, max_streak: o=0, mistakes: a={}} = e;
            let s = (t / n * 100).toFixed(0);
            return "NaN" === s && (s = "0"),
            "Infinity" === s && (s = "0"),
            {
                puzzles_won: t,
                puzzles_completed: n,
                current_streak: r,
                max_streak: o,
                mistakes: a,
                win_percentage: s
            }
        }
        ))
          , v = (0,
        r.createSelector)(_, (e => e ? e.current_streak : null))
          , b = (0,
        r.createSelector)(_, (e => null != e && e.last_played_print_date ? (0,
        o.Z)(e.last_played_print_date, "yyyy-MM-dd", new Date) : null))
          , y = (0,
        r.createSelector)([v, b, l.Hh, l.On], ( (e, t, n, r) => {
            if (n || !e || !t)
                return !1;
            const o = (0,
            a.Z)(new Date(r), new Date(t));
            return 0 === o || 1 === o
        }
        ))
          , h = (0,
        r.createSelector)(d, (e => e.badges.shelf))
          , E = (0,
        r.createSelector)(d, (e => e.badges.seen))
          , w = (0,
        r.createSelector)([h, E], ( (e, t) => (0,
        u.oN)(e, t)))
          , S = (0,
        c.Z0)(i.cg)
          , O = (0,
        r.createSelector)(f, (e => e && e.stats ? e.stats.cxns_prpl_frst : null))
          , C = (0,
        r.createSelector)(O, (e => void 0 !== (null == e ? void 0 : e.purple_first_wins) ? e.purple_first_wins : void 0))
          , k = (0,
        r.createSelector)(d, (e => e.badges.detail))
    },
    17165: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dv: function() {
                return i
            },
            Hh: function() {
                return u
            },
            On: function() {
                return c
            },
            UQ: function() {
                return d
            },
            Vy: function() {
                return f
            },
            _2: function() {
                return l
            },
            wJ: function() {
                return m
            }
        });
        var r = n(47549)
          , o = n(70033)
          , a = n(36629)
          , s = n(3097);
        const l = e => e.printDate.dateString
          , c = (0,
        r.createSelector)(l, (e => (0,
        o.Z)(e, "yyyy-MM-dd", new Date)))
          , i = (0,
        r.createSelector)(c, s.X)
          , u = e => e.printDate.isArchive
          , d = (0,
        r.createSelector)(l, (e => {
            const [t,n] = e.split("-");
            return "/christmas_word_puzzles/nyt_games/connections/archive/".concat(t, "/").concat(n)
        }
        ))
          , m = (0,
        r.createSelector)([l, u], ( (e, t) => ({
            date: e,
            t: "".concat(t ? "archive" : "today")
        })))
          , p = (0,
        r.createSelector)(c, (e => (0,
        a.Z)(e, "EEEE, MMMM d, yyyy")))
          , f = (0,
        r.createSelector)(p, (e => "".concat(e, " Connections puzzle — The New York Times")))
    },
    95982: function(e, t, n) {
        "use strict";
        var r = n(33649)
          , o = n(65489)
          , a = n(17165);
        t.Z = () => {
            const e = (0,
            r.v9)(a.Dv)
              , t = (0,
            r.v9)(a.wJ);
            return {
                trackConnectionsClick: (n, r, a) => {
                    (0,
                    o.LW)({
                        element: {
                            name: "connections",
                            label: n
                        },
                        context: e,
                        name: t,
                        label: r,
                        region: a
                    })
                }
                ,
                trackConnectionsImpression: (t, n) => {
                    (0,
                    o.hX)(t, "connections", n, e.toString())
                }
            }
        }
    },
    89979: function(e, t, n) {
        "use strict";
        n.d(t, {
            C6: function() {
                return a
            },
            Gf: function() {
                return l
            },
            NC: function() {
                return s
            },
            Vb: function() {
                return o
            },
            ie: function() {
                return r
            }
        });
        const r = 250
          , o = 500
          , a = 1e3
          , s = a + 200
          , l = 2 * a
    },
    74078: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dh: function() {
                return o
            },
            YV: function() {
                return c
            },
            bi: function() {
                return s
            },
            dp: function() {
                return l
            },
            r9: function() {
                return r
            },
            zH: function() {
                return a
            }
        });
        const r = {
            0: "Perfect",
            1: "Great",
            2: "Solid",
            3: "Phew",
            4: "Next Time"
        }
          , o = {
            0: "Perfect",
            1: "Great",
            2: "Solid",
            3: "Phew",
            4: "Thanks for Playing"
        };
        let a = function(e) {
            return e.CATEGORY = "category",
            e.CARD = "card",
            e
        }({})
          , s = function(e) {
            return e.CARD_SHAKE = "cardShake",
            e.CARD_BOUNCE = "cardBounce",
            e.CARD_SHUFFLE = "cardShuffle",
            e
        }({})
          , l = function(e) {
            return e.CATEGORY_PULSE = "categoryPulse",
            e
        }({})
          , c = function(e) {
            return e.ON_POTENTIAL_LOSS = "onPotentialLoss",
            e.SUBMIT_GUESS = "submitGuess",
            e
        }({})
    },
    20090: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dc: function() {
                return o
            },
            Ds: function() {
                return a
            },
            TV: function() {
                return r
            }
        });
        const r = (e, t) => {
            const n = [...e];
            let o = n.length;
            for (; o; ) {
                o -= 1;
                const a = Math.floor(Math.random() * o)
                  , s = n[o];
                if (n[o] = n[a],
                n[a] = s,
                t && (e[o] === n[o] || e[a] === n[a]))
                    return r(e, !0)
            }
            return n
        }
          , o = e => new Promise((t => {
            setTimeout(t, e)
        }
        ))
          , a = (e, t) => {
            let n;
            return function() {
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                const s = this;
                clearTimeout(n),
                n = setTimeout(( () => e.apply(s, o)), t)
            }
        }
    },
    33064: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return c
            }
        });
        var r = n(65489)
          , o = n(86128);
        const a = window.location.origin + window.location.pathname
          , s = (0,
        o.f0)({
            redirect_uri: encodeURIComponent(a),
            response_type: "cookie",
            client_id: "games",
            application: "crosswords"
        })
          , l = "".concat(r.OB.account, "/auth/enter-email?").concat(s)
          , c = function() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
              , n = arguments.length > 1 ? arguments[1] : void 0;
            const a = (null == t || null === (e = t.navigationLinks) || void 0 === e ? void 0 : e.login) || "";
            return (0,
            o.I3)(a) ? a : n ? (0,
            r.T0)(l, n) : l
        };
        t.Z = c
    },
    15419: function(e, t, n) {
        "use strict";
        n.d(t, {
            $I: function() {
                return m
            }
        });
        var r, o = n(65489), a = n(86128);
        const s = (l = {
            prod: "https://www.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            stg: "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            dev: "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL"
        })[(null === (r = window.env) || void 0 === r ? void 0 : r.name) || "dev"] || l.dev;
        var l;
        const c = window.location.origin + window.location.pathname
          , i = "".concat(s, "&EXIT_URI=").concat(c)
          , u = (0,
        a.f0)({
            redirect_uri: encodeURIComponent(i),
            response_type: "cookie",
            client_id: "games",
            application: "crosswords"
        })
          , d = "".concat(o.OB.account, "/auth/enter-email?").concat(u)
          , m = function() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
              , n = arguments.length > 1 ? arguments[1] : void 0;
            const r = (null == t || null === (e = t.navigationLinks) || void 0 === e ? void 0 : e.login) || "";
            return (0,
            a.I3)(r) ? r : n ? (0,
            o.T0)(d, n) : d
        };
        t.ZP = m
    },
    85203: function(e, t, n) {
        "use strict";
        n.d(t, {
            Mf: function() {
                return u
            },
            T4: function() {
                return l
            },
            qA: function() {
                return i
            },
            s_: function() {
                return c
            }
        });
        var r = n(65489)
          , o = n(53789)
          , a = n(22152)
          , s = n(18489);
        const l = () => !window.newsreaderAppPlatform && !window.isHybridWebView && (o.tq || (0,
        s.Z)() && !o.tq && !window.isHybridWebView)
          , c = () => {
            r.abra.getVariant(a.fM) && r.abra.reportExposure(a.fM)
        }
          , i = () => {
            const e = l();
            return "1_appDownloadCTA" === r.abra.getVariant(a.wv) && e
        }
          , u = () => {
            r.abra.getVariant(a.wv) && r.abra.reportExposure(a.wv)
        }
    },
    1342: function(e, t) {
        "use strict";
        t.Z = {
            $black: "#000",
            $white: "#fff",
            $blue1: "#083aaa",
            $blue2: "#2860d8",
            $blue3: "#4f85e5",
            $blue35: "#5aa0d5",
            $blue4: "#a7d8ff",
            $blue5: "#dcefff",
            $blue7: "#477aaa",
            $blue8: "#346eb7",
            $purple1: "#5960ec",
            "$error-red": "#ce2424",
            $gray1: "#333",
            $gray2: "#959595",
            $gray3: "#ccc",
            $gray4: "#dcdcdc",
            $gray5: "#e6e6e6",
            $gray6: "#f4f4f4",
            $gray7: "#fafafa",
            $gray8: "#c4c4c4",
            $gray9: "#c2c2c2",
            $gray10: "#d9d9d9",
            $gray11: "#eee",
            $newsGray10: "#dfdfdf",
            $newsGray25: "#c7c7c7",
            $newsGray50: "#8b8b8b",
            $newsGray60: "#727272",
            $newsGray85: "#363636",
            $newsGray100: "#121212",
            $blueGray1: "#787886",
            $gold1: "#c4a200",
            $gold2: "#e2c32f",
            $yellow1: "#ffda00",
            $green1: "#6dc3a1",
            $statsPink: "#f93aa7",
            $statsYellow: "#ffc600",
            "$spelling-bee-yellow": "#f8cd05",
            "$letter-boxed-pink": "#faa6a4",
            $bannerBlue: "#4d88f9",
            "$daily-crossword-blue": "#6493e6",
            "$mini-crossword-blue": "#95befa",
            "$spelling-bee-gold": "#f7da21",
            "$tiles-green": "#b5e352",
            "lb-red": "var(--lb-red)",
            "$sudoku-orange": "#fb9b00",
            "$connections-periwinkle": "#B3A7FE",
            "$strands-seafoam": "#C0DDD9",
            "$pips-pink": "#DAA8D0",
            "bg-moment": "var(--bg-moment)",
            "sb-yellow": "var(--sb-yellow)"
        }
    },
    67374: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dx: function() {
                return _
            },
            Ej: function() {
                return E
            },
            FG: function() {
                return C
            },
            JO: function() {
                return f
            },
            ML: function() {
                return w
            },
            Sx: function() {
                return m
            },
            WL: function() {
                return p
            },
            XU: function() {
                return b
            },
            dk: function() {
                return g
            },
            hE: function() {
                return h
            },
            h_: function() {
                return v
            },
            im: function() {
                return S
            },
            ji: function() {
                return O
            },
            zx: function() {
                return y
            }
        });
        var r = n(89526)
          , o = n(64403)
          , a = n.n(o)
          , s = n(65489)
          , l = n(40245)
          , c = n(32825)
          , i = n(8194)
          , u = n(1342);
        function d() {
            return d = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            d.apply(this, arguments)
        }
        const m = e => {
            let {trackData: t, override: n} = e;
            return window.isHybridWebView && window.NativeBridge ? "ios" === window.newsreaderAppPlatform ? null : r.createElement(i.Z, {
                onClick: () => {
                    var e;
                    if (n)
                        n();
                    else {
                        if (t) {
                            const {elementName: e, context: n, moduleLabel: r} = t
                              , o = "back";
                            (0,
                            s.$g)("click", n, e, o, r)
                        }
                        null === (e = window.NativeBridge) || void 0 === e || e.gamesBackToHub()
                    }
                }
            }) : null
        }
          , p = e => {
            let {closeText: t, action: n, className: o} = e;
            return r.createElement("button", {
                type: "button",
                className: a()("pz-moment__close_text", o),
                onClick: n
            }, r.createElement("span", {
                className: "inner-text"
            }, t), r.createElement(c.Z, {
                icon: "close"
            }))
        }
          , f = e => {
            let {icon: t, size: n="large"} = e;
            return r.createElement("div", {
                className: a()("pz-moment__icon", n, t),
                "data-testid": "moment-icon"
            })
        }
          , _ = e => {
            let {text: t, size: n="large", font: o="karnak", level: s="1"} = e;
            const l = "h".concat(s)
              , c = a()("pz-moment__title", n, o);
            return r.createElement(l, {
                className: c
            }, t)
        }
          , g = e => {
            let {text: t, variant: n="default", font: o="karnak", level: s="1"} = e;
            const l = "h".concat(s)
              , c = a()("pz-moment__description", n, o);
            return r.createElement(l, {
                className: c,
                dangerouslySetInnerHTML: {
                    __html: t
                }
            })
        }
          , v = e => {
            let {text: t} = e;
            return r.createElement("span", {
                className: "pz-moment__meta"
            }, t)
        }
          , b = e => {
            let {children: t} = e;
            return r.createElement("span", {
                className: "pz-moment__info-text "
            }, t)
        }
          , y = e => {
            let {text: t, dataTestId: n, action: o, icon: s="none", color: c="primary", variant: i="default", isEmphasizedNew: u=!1, className: d=[], isLink: m=!1, newTab: p=!1, url: f=""} = e;
            const _ = Array.isArray(d) ? d : [d]
              , g = a()("pz-moment__button", c, i, ..._);
            if (m) {
                const e = {
                    className: g,
                    href: f,
                    onClick: o,
                    target: p ? "_blank" : void 0,
                    rel: p ? "noopener noreferrer" : void 0
                };
                return r.createElement("a", e, u && r.createElement(l.Z, {
                    text: "new",
                    position: "top-right-outside"
                }), "checked" === s && r.createElement("div", {
                    className: "pz-moment__button--checked"
                }), "locked" === s && r.createElement("div", {
                    className: "pz-moment__button--padlock"
                }), t)
            }
            return r.createElement("button", {
                "data-testid": n,
                type: "button",
                className: g,
                onClick: o
            }, u && r.createElement(l.Z, {
                text: "new",
                position: "top-right-outside"
            }), "checked" === s && r.createElement("div", {
                className: "pz-moment__button--checked"
            }), "locked" === s && r.createElement("div", {
                className: "pz-moment__button--padlock"
            }), t)
        }
          , h = e => {
            let {buttons: t, header: n=null, order: o="default"} = e;
            return r.createElement("div", {
                className: "pz-moment__button-group"
            }, n && r.createElement("div", {
                className: "header"
            }, r.createElement("h3", null, n)), r.createElement("div", {
                className: a()("pz-moment__button-wrapper", {
                    [o]: o
                })
            }, (t || []).map(( (e, t) => r.createElement(y, d({}, e, {
                key: "button-group-".concat(t)
            }))))))
        }
          , E = e => {
            let {date: t} = e;
            return r.createElement("span", {
                "data-testid": "pz-moment__date",
                className: "pz-moment__info-date"
            }, t)
        }
          , w = e => {
            let {editor: t} = e;
            return t ? r.createElement("span", {
                "data-testid": "pz-moment__editor",
                className: "pz-moment__info-editor"
            }, "Edited by ".concat(t)) : null
        }
          , S = e => {
            let {bgColor: t="$gray3", children: n} = e;
            return r.createElement("div", {
                className: "pz-moment",
                style: {
                    backgroundColor: u.Z[t]
                },
                "data-testid": "moment-wrapper"
            }, n)
        }
          , O = e => {
            let {children: t, bgColor: n} = e;
            return r.createElement(S, {
                bgColor: n
            }, r.createElement("div", {
                className: "flex-child"
            }, t))
        }
          , C = e => {
            let {promo: t} = e;
            return "oxford" === t ? r.createElement("p", null, r.createElement("a", {
                href: "https://www.oxforddictionaries.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "pz-moment__promo"
            })) : null
        }
    },
    155: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return a
            },
            V: function() {
                return o
            }
        });
        var r = n(67522);
        const o = () => {
            const {isNewsreaderApp: e, isHybridWebView: t, meetsMinimumVersion: n} = (0,
            r.vB)();
            return !e && (!t || n("5.28"))
        }
          , a = e => o() ? e ? ["connections-archive"] : ["connections-archive-today", "spelling-bee"] : ["spelling-bee"]
    },
    32825: function(e, t, n) {
        "use strict";
        var r = n(89526)
          , o = n(64403)
          , a = n.n(o);
        t.Z = e => {
            let {icon: t, className: n} = e;
            return r.createElement("i", {
                className: a()("pz-icon", "pz-icon-".concat(t), n)
            })
        }
    },
    22152: function(e, t, n) {
        "use strict";
        n.d(t, {
            DR: function() {
                return i
            },
            Df: function() {
                return a
            },
            FF: function() {
                return u
            },
            S_: function() {
                return o
            },
            fM: function() {
                return l
            },
            jL: function() {
                return m
            },
            mV: function() {
                return r
            },
            pp: function() {
                return d
            },
            wv: function() {
                return c
            },
            yc: function() {
                return s
            }
        });
        const r = "GAMES_subscribeToolbarWebApp_0425"
          , o = "1_subscribeToolbar"
          , a = "GAMES_connectionsForumApp_0525"
          , s = "1_forum"
          , l = "GAMES_connectionsArchiveAppDLCTA_1124"
          , c = "GAMES_HamburgerMenuAppDLCTA_0225"
          , i = "GAMES_subForNoAds_0325"
          , u = "GAMES_subForNoAds_Android_0425_AA"
          , d = "GAMES_subForNoAds_Android_0425"
          , m = "1_ads"
    },
    62272: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return a
            }
        });
        var r = n(65489);
        const o = "EXPOSURE_REPORTER_STANDARD"
          , a = "EXPOSURE_REPORTER_HYBRID";
        t.ZP = e => {
            let {testName: t, variantName: n, shouldReport: s=!1, reporterType: l=o} = e;
            const {reportHybridExposure: c, reportExposure: i, getVariant: u} = r.abra
              , d = u(t);
            if (!d)
                return !1;
            let m;
            switch (l) {
            case o:
                m = i;
                break;
            case a:
                m = c
            }
            return s && d && m && m(t),
            !!n && d === n
        }
    },
    28356: function(e, t) {
        "use strict";
        t.Z = {
            flexContainer: "Stats-module_flexContainer__hDS1o",
            expandToRow: "Stats-module_expandToRow__RabuU Stats-module_flexContainer__hDS1o",
            mobileColumn: "Stats-module_mobileColumn___2VAh",
            "visually-hidden": "Stats-module_visually-hidden__T6tja",
            stats_container: "Stats-module_stats_container__ZcJgI",
            stats: "Stats-module_stats__Oq7rS",
            regiwall_message: "Stats-module_regiwall_message__pbJmt",
            get_error: "Stats-module_get_error__my7oX",
            error__icon: "Stats-module_error__icon__yCUPN",
            inline_alert__icon: "Stats-module_inline_alert__icon__MXzcW",
            post_error: "Stats-module_post_error___O6am",
            stats__controls: "Stats-module_stats__controls__hJI9v",
            json: "Stats-module_json__FWD7H",
            mistakes: "Stats-module_mistakes__dA1vb",
            histogram_container: "Stats-module_histogram_container__grXlP",
            histogram_bar: "Stats-module_histogram_bar___Mxj8",
            histogram_row: "Stats-module_histogram_row__jE8b_",
            faq: "Stats-module_faq__hcRQo",
            inline_carrot__icon: "Stats-module_inline_carrot__icon__G2cbk",
            todays_mistakes: "Stats-module_todays_mistakes__tyIhZ",
            regiwall_abstract_stats: "Stats-module_regiwall_abstract_stats__BkBe5",
            slideDown: "Stats-module_slideDown__zI6yh",
            flyIn: "Stats-module_flyIn__Lm8R0",
            flyOut: "Stats-module_flyOut__ZE75g",
            fadeIn: "Stats-module_fadeIn__mAZCs"
        }
    },
    49674: function(e) {
        function t(e) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        t.keys = function() {
            return []
        }
        ,
        t.resolve = t,
        t.id = 49674,
        e.exports = t
    }
}]);
//# sourceMappingURL=9336.2e34b1f887b8d4b28ec3.js.map
