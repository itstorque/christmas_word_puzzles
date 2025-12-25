!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "07a4cc23-baf5-417f-bc2c-587942744038",
        e._sentryDebugIdIdentifier = "sentry-dbid-07a4cc23-baf5-417f-bc2c-587942744038")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "46746f5b8ed6c3bf3da9c9d633132cda2285312a"
},
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[2288], {
    5783: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return ye
            }
        });
        var a = t(89526)
          , o = t(73961)
          , i = t(65489)
          , s = t(64403)
          , r = t.n(s)
          , l = t(85229)
          , c = e => {
            let {url: n=window.location.href, isDelta: t} = e;
            const o = window.navigationLinks
              , s = (0,
            i.T0)(o.login, "&asset=delta-mini-banner")
              , c = t ? s : "https://www.nytimes.com/subscription/games?campaignId=89RW9"
              , d = t ? "Create an account or log in." : "Save on all of The Times, including Games.";
            return a.createElement("a", {
                id: "top-sale-banner",
                href: c,
                rel: "noreferrer",
                className: "pz-hide-loading pz-hide-user-loading pz-hide-newsreader pz-hide-games-app pz-hide-ada"
            }, a.createElement("div", {
                className: r()("top-sale-banner", {
                    dark_yellow: t
                })
            }, a.createElement("div", {
                className: r()("top-sale-banner__copy", {
                    small_font: t
                })
            }, a.createElement("span", {
                className: r()("top-sale-banner__urgency", {
                    downcase: t
                })
            }, t ? "Track your stats and streaks." : (0,
            l.BF)(n)), a.createElement("span", {
                className: "top-sale-banner__text"
            }, d)), a.createElement("img", {
                className: "top-sale-banner__icon",
                src: "https://mwcm.nyt.com/dam/LP/nyt_games/banner/chevron-right.svg",
                alt: "open banner"
            })))
        }
          , d = t(67522)
          , u = t(14237)
          , p = t(22042)
          , m = t(19164)
          , h = t(24970)
          , v = t.n(h)
          , f = t(71286)
          , w = t(52755)
          , b = () => {
            (0,
            f.useUnit)(w.config);
            const {isHybridWebView: e, NativeBridge: n} = (0,
            d.vB)();
            return a.createElement("div", {
                "data-testid": "oma-games-banner-wrapper"
            }, a.createElement(v(), {
                onClick: t => {
                    e && n && (t.preventDefault(),
                    n.gamesAuthenticateUser("."))
                }
            }))
        }
          , g = () => {
            const {willShowDeltaBanner: e} = ( () => {
                const e = (0,
                l.tF)(window.location.href)
                  , n = (0,
                l.kx)(window.location.href)
                  , [t,o] = (0,
                a.useState)(!1)
                  , i = document.querySelector("#delta-banner-portal")
                  , {isHybridWebView: s, isNewsreaderApp: r} = (0,
                d.vB)()
                  , {hasLoaded: c, userType: m} = (0,
                u.aF)();
                return (0,
                a.useEffect)(( () => {
                    c && (m.isLoggedIn || s || r || e || n || o(!!p.l1 && !!i))
                }
                ), [c]),
                (0,
                a.useEffect)(( () => {
                    if (t) {
                        const e = document.querySelector("#js-nav-drawer");
                        t ? null == e || e.classList.add("top-sale-banner-drawer") : null == e || e.classList.remove("top-sale-banner-drawer")
                    }
                }
                ), [t]),
                {
                    willShowDeltaBanner: t,
                    portalEl: i
                }
            }
            )()
              , {isAASaleActive: n} = (0,
            m.Z)()
              , {isOmaGamesBannerActive: t} = function() {
                const {unit: e} = (0,
                f.useUnit)(w.config);
                return {
                    isOmaGamesBannerActive: e.canShow
                }
            }();
            return a.createElement(a.Fragment, null, e && !t && a.createElement(c, {
                isDelta: !0
            }), n && !t && a.createElement(c, null), t && a.createElement(b, null))
        }
          , y = t(34322)
          , k = t.n(y)
          , _ = t(80481)
          , E = t(57256)
          , x = t(22152)
          , L = t(54988)
          , T = t(88595);
        const C = e => {
            var n;
            let {subscribeUrl: t=(null === (n = window.navigationLinks) || void 0 === n || null === (n = n.subscribe) || void 0 === n ? void 0 : n.default) || "https://www.nytimes.com/subscription/games"} = e;
            const {isGamesSaleActive: o, getButtonText: i} = (0,
            T.Z)()
              , {isHybridWebView: s, NativeBridge: r} = (0,
            d.vB)();
            return a.createElement(a.Fragment, null, o && a.createElement("a", {
                id: "barone-button",
                href: (0,
                L.L2)(t, !0),
                className: "pz-nav__button subscribe js-sale-nav-tracker js-nav-subscribe",
                "data-track-label": "subscribe-nav-header",
                onClick: e => {
                    s && r && (e.preventDefault(),
                    r.gamesAuthenticateUser("."))
                }
            }, i()))
        }
        ;
        var I = () => {
            const e = (0,
            E.Z)()
              , {unit: n} = (0,
            f.useUnit)(_.config);
            if ((0,
            a.useEffect)(( () => {
                e.reportExposure(x.rt)
            }
            ), []),
            !e.hasAbraLoaded)
                return null;
            if (e.getVariant(x.rt) === x.i8)
                return a.createElement("div", {
                    "data-testid": "oma-games-barone"
                }, a.createElement(k(), {
                    unit: n
                }));
            const t = document.getElementById("subscribe-nav-top");
            return t && t.classList.remove("showOmaBarone"),
            a.createElement(C, null)
        }
          , z = t(71687)
          , A = t(73649)
          , R = t(155)
          , N = t(80692)
          , D = t(23217)
          , S = t(9249)
          , P = t(57607);
        const G = ["today-page", "leaderboard"]
          , B = ["mini", "connections", "strands"]
          , O = []
          , j = []
          , M = []
          , q = new Date
          , U = (q.getMonth() + 1).toString().padStart(2, "0")
          , W = q.getFullYear()
          , F = q.getDate().toString().padStart(2, "0")
          , Z = {
            "today-page": {
                shouldRender: !0,
                staticInfo: {
                    id: "today-page",
                    name: "Today Page",
                    url: "/",
                    dataTrackLabel: "nyt-nav",
                    icon: "flower"
                }
            },
            leaderboard: {
                shouldRender: !0,
                staticInfo: {
                    id: "leaderboard",
                    name: "Leaderboard",
                    url: "/nyt_games/leaderboard",
                    dataTrackLabel: "nyt-nav",
                    icon: "trophy"
                }
            },
            nyt: {
                shouldRender: !0,
                staticInfo: {
                    id: "nyt",
                    name: "The New York Times",
                    url: "https://www.nytimes.com",
                    dataTrackLabel: "nyt-nav",
                    icon: "nyt"
                }
            },
            crossword: {
                shouldRender: !0,
                staticInfo: {
                    id: "crossword",
                    name: "The Crossword",
                    url: "/crosswords/game/daily",
                    dataTrackLabel: "daily-page-nav",
                    icon: "daily"
                },
                expansionConfig: {
                    nestedItems: ["crossword-archive", "crossword-monthly-bonus", "crossword-stats", "crossword-how-to-solve"],
                    isExpanded: !1
                }
            },
            mini: {
                shouldRender: !0,
                staticInfo: {
                    id: "mini",
                    name: "The Mini",
                    url: "/nyt_games/mini",
                    dataTrackLabel: "mini-page-nav",
                    icon: "mini"
                }//,
                // expansionConfig: {
                //     nestedItems: ["mini-archive", "mini-leaderboards"],
                //     isExpanded: !1
                // }
            },
            connections: {
                shouldRender: !0,
                staticInfo: {
                    id: "connections",
                    name: "Connections",
                    url: "/nyt_games/connections",
                    dataTrackLabel: "connections-nav",
                    icon: "connections"
                }//,
                // expansionConfig: {
                //     nestedItems: ["connections-archive", "connections-forum", "connections-bot"],
                //     isExpanded: !1
                // }
            },
            "spelling-bee": {
                shouldRender: !0,
                staticInfo: {
                    id: "spelling-bee",
                    name: "Spelling Bee",
                    url: "/puzzles/spelling-bee",
                    dataTrackLabel: "spelling-bee-nav",
                    icon: "spelling-bee"
                },
                expansionConfig: {
                    nestedItems: ["spelling-bee-archive", "spelling-bee-forum"],
                    isExpanded: !1
                }
            },
            wordle: {
                shouldRender: !0,
                staticInfo: {
                    id: "wordle",
                    name: "Wordle",
                    url: "/nyt_games/wordle/index.html",
                    dataTrackLabel: "wordle-nav",
                    icon: "wordle"
                },
                expansionConfig: {
                    nestedItems: ["wordle-archive", "create-wordle", "wordle-forum", "wordle-bot"],
                    isExpanded: !1
                }
            },
            pips: {
                shouldRender: !0,
                staticInfo: {
                    id: "pips",
                    name: "Pips",
                    url: "/nyt_games/pips",
                    dataTrackLabel: "pips-nav",
                    icon: "pips",
                    isNew: !0
                }
            },
            strands: {
                shouldRender: !0,
                staticInfo: {
                    id: "strands",
                    name: "Strands",
                    url: "/nyt_games/strands",
                    dataTrackLabel: "strands-nav",
                    icon: "strands"
                }
            },
            letterboxed: {
                shouldRender: !0,
                staticInfo: {
                    id: "letterboxed",
                    name: "Letter Boxed",
                    url: "/puzzles/letter-boxed",
                    dataTrackLabel: "letter-boxed-nav",
                    icon: "letter-boxed"
                }
            },
            tiles: {
                shouldRender: !0,
                staticInfo: {
                    id: "tiles",
                    name: "Tiles",
                    url: "/puzzles/tiles",
                    dataTrackLabel: "tiles-nav",
                    icon: "tiles"
                }
            },
            sudoku: {
                shouldRender: !0,
                staticInfo: {
                    id: "sudoku",
                    name: "Sudoku",
                    url: "/puzzles/sudoku",
                    dataTrackLabel: "sudoku-nav",
                    icon: "sudoku"
                }
            },
            "more-games": {
                shouldRender: !0,
                staticInfo: {
                    id: "more-games",
                    name: "View all Games",
                    url: "/puzzles",
                    dataTrackLabel: "all-games-nav"
                }
            },
            "crossword-archive": {
                shouldRender: !0,
                staticInfo: {
                    id: "crossword-archive",
                    name: "The Crossword Archives",
                    url: "/crosswords/archive/daily",
                    dataTrackLabel: "daily-archive",
                    icon: "transparent"
                }
            },
            "crossword-monthly-bonus": {
                shouldRender: !0,
                staticInfo: {
                    id: "crossword-monthly-bonus",
                    name: "Monthly Bonus Puzzle",
                    url: "https://www.nytimes.com/crosswords/archive/bonus",
                    dataTrackLabel: "monthly-bonus-nav",
                    icon: "transparent"
                }
            },
            "crossword-stats": {
                shouldRender: !0,
                staticInfo: {
                    id: "crossword-stats",
                    name: "Statistics",
                    url: "/puzzles/stats",
                    dataTrackLabel: "stats-nav",
                    icon: "transparent"
                }
            },
            "crossword-how-to-solve": {
                shouldRender: !0,
                staticInfo: {
                    id: "crossword-how-to-solve",
                    name: "How to Solve The New York Times Crossword",
                    url: "https://www.nytimes.com/article/how-to-solve-a-crossword-puzzle.html",
                    dataTrackLabel: "featured-article-nav",
                    icon: "transparent"
                }
            },
            "mini-archive": {
                shouldRender: !0,
                staticInfo: {
                    id: "mini-archive",
                    name: "The Mini Archives",
                    url: "/crosswords/archive/mini",
                    dataTrackLabel: "mini-archive-nav",
                    icon: "transparent"
                }
            },
            "mini-leaderboards": {
                shouldRender: !0,
                staticInfo: {
                    id: "mini-leaderboards",
                    name: "Leaderboard",
                    url: "https://www.nytimes.com/puzzles/leaderboards",
                    dataTrackLabel: "leaderboards-nav",
                    icon: "transparent"
                }
            },
            "connections-archive": {
                shouldRender: !0,
                staticInfo: {
                    id: "connections-archive",
                    name: "Connections Archive",
                    url: "/nyt_games/connections/archive",
                    dataTrackLabel: "connections-archive-nav",
                    isNew: !1,
                    icon: "transparent"
                }
            },
            "connections-forum": {
                shouldRender: !0,
                staticInfo: {
                    id: "connections-forum",
                    name: "Connections Companions",
                    url: "".concat((0,
                    P.q)(q)),
                    dataTrackLabel: "connections-companion-nav",
                    icon: "transparent"
                }
            },
            "connections-bot": {
                shouldRender: !0,
                staticInfo: {
                    id: "connections-bot",
                    name: "Connections Bot",
                    url: "https://www.nytimes.com/interactive/2024/upshot/connections-bot.html",
                    dataTrackLabel: "connections-bot-nav",
                    icon: "transparent"
                }
            },
            "spelling-bee-archive": {
                shouldRender: !0,
                staticInfo: {
                    id: "spelling-bee-archive",
                    name: "Past Puzzles",
                    url: "/puzzles/spelling-bee/hub",
                    dataTrackLabel: "spelling-bee-hub-nav",
                    icon: "transparent"
                }
            },
            "spelling-bee-forum": {
                shouldRender: !0,
                staticInfo: {
                    id: "spelling-bee-forum",
                    name: "Spelling Bee Forum",
                    url: "https://www.nytimes.com/".concat(W, "/").concat(U, "/").concat(F, "/crosswords/spelling-bee-forum.html"),
                    dataTrackLabel: "sb-forum-nav",
                    icon: "transparent"
                }
            },
            "wordle-archive": {
                shouldRender: !0,
                staticInfo: {
                    id: "wordle-archive",
                    name: "Wordle Archive",
                    url: "/nyt_games/wordle/archive",
                    dataTrackLabel: "wordle-archive-nav",
                    icon: "transparent"
                }
            },
            "create-wordle": {
                shouldRender: !0,
                staticInfo: {
                    id: "create-wordle",
                    name: "Create Your Own Puzzle",
                    url: "/nyt_games/create/wordle",
                    dataTrackLabel: "create-wordle-nav",
                    icon: "transparent",
                    isNew: !0
                }
            },
            "wordle-forum": {
                shouldRender: !0,
                staticInfo: {
                    id: "wordle-forum",
                    name: "Wordle Reviews",
                    url: "https://www.nytimes.com/spotlight/wordle-review",
                    dataTrackLabel: "wordle-review-nav",
                    icon: "transparent"
                }
            },
            "wordle-bot": {
                shouldRender: !0,
                staticInfo: {
                    id: "wordle-bot",
                    name: "WordleBot: Your Daily, Personalized Wordle Score",
                    url: "https://www.nytimes.com/interactive/2022/upshot/wordle-bot.html",
                    dataTrackLabel: "wordle-bot-nav",
                    icon: "transparent"
                }
            },
            wordplay: {
                shouldRender: !0,
                staticInfo: {
                    id: "wordplay",
                    name: "NYT Daily Wordplay Column",
                    url: "https://www.nytimes.com/column/wordplay",
                    dataTrackLabel: "wordplay-nav",
                    icon: "transparent"
                }
            },
            "games-tips": {
                shouldRender: !0,
                staticInfo: {
                    id: "games-tips",
                    name: "Games Tips",
                    url: "https://www.nytimes.com/spotlight/games-tips",
                    dataTrackLabel: "games-tips-nav",
                    icon: "transparent"
                }
            },
            "games-features": {
                shouldRender: !0,
                staticInfo: {
                    id: "games-features",
                    name: "Games Features",
                    url: "https://www.nytimes.com/spotlight/games-feature",
                    dataTrackLabel: "games-features-nav",
                    icon: "transparent"
                }
            },
            "privacy-policy": {
                shouldRender: !0,
                staticInfo: {
                    id: "privacy-policy",
                    name: "Privacy Policy",
                    url: "https://www.nytimes.com/privacy/privacy-policy",
                    dataTrackLabel: "privacy-policy-nav",
                    icon: "transparent"
                }
            },
            "privacy-faq": {
                shouldRender: !0,
                staticInfo: {
                    id: "privacy-faq",
                    name: "Privacy FAQ",
                    url: "https://www.nytimes.com/privacy",
                    dataTrackLabel: "privacy-faq-nav",
                    icon: "transparent"
                }
            },
            "delete-my-account": {
                shouldRender: !0,
                staticInfo: {
                    id: "delete-my-account",
                    name: "Delete My Account",
                    url: "https://www.nytimes.com/account/delete-account",
                    dataTrackLabel: "delete-my-account-nav",
                    icon: "transparent"
                }
            },
            "your-privacy-choices": {
                shouldRender: !0,
                staticInfo: {
                    id: "your-privacy-choices",
                    name: "Your Privacy Choices",
                    url: "https://www.nytimes.com/privacy/your-privacy-choices",
                    dataTrackLabel: "your-privacy-choices-nav",
                    icon: "transparent"
                }
            },
            "california-notices": {
                shouldRender: !0,
                staticInfo: {
                    id: "california-notices",
                    name: "California Notices",
                    url: "https://help.nytimes.com/10940941449492-The-New-York-Times-Company-Privacy-Policy#4-b-california-privacy-notices-and-rights-57",
                    dataTrackLabel: "california-notices-nav",
                    icon: "transparent"
                }
            },
            "manage-privacy-preferences": {
                shouldRender: !0,
                staticInfo: {
                    id: "manage-privacy-preferences",
                    name: "Manage Privacy Preferences",
                    url: "https://www.nytimes.com/privacy/manage-settings/",
                    dataTrackLabel: "manage-privacy-preferences-nav",
                    icon: "transparent"
                }
            },
            cooking: {
                shouldRender: !0,
                staticInfo: {
                    id: "cooking",
                    name: "New York Times Cooking",
                    url: "https://cooking.nytimes.com",
                    dataTrackLabel: "cooking-nav",
                    icon: "cooking"
                }
            },
            wirecutter: {
                shouldRender: !0,
                staticInfo: {
                    id: "wirecutter",
                    name: "New York Times Wirecutter",
                    url: "https://www.nytimes.com/wirecutter",
                    dataTrackLabel: "wirecutter-nav",
                    icon: "wirecutter"
                }
            },
            athletic: {
                shouldRender: !0,
                staticInfo: {
                    id: "athletic",
                    name: "The Athletic",
                    url: "https://www.nytimes.com/athletic/ ",
                    dataTrackLabel: "athletic-nav",
                    icon: "athletic"
                }
            },
            "sports-connections": {
                shouldRender: !0,
                staticInfo: {
                    id: "sports-connections",
                    name: "Connections: Sports Edition",
                    url: "https://www.nytimes.com/athletic/connections-sports-edition",
                    dataTrackLabel: "sports-connections-nav",
                    icon: ["transparent", "sports-connections"]
                }
            }
        };
        var Y = t(49369)
          , H = t(88861);
        const V = new Date >= new Date("3/4/2024 10:00 AM EST");
        var Q = t(89064);
        function J(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n && (a = a.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, a)
            }
            return t
        }
        function X(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? J(Object(t), !0).forEach((function(n) {
                    var a, o, i, s;
                    a = e,
                    o = n,
                    i = t[n],
                    (o = "symbol" == typeof (s = function(e, n) {
                        if ("object" != typeof e || !e)
                            return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var a = t.call(e, "string");
                            if ("object" != typeof a)
                                return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(o)) ? s : s + "")in a ? Object.defineProperty(a, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a[o] = i
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        const K = {
            toggleItemExpansion: () => {}
            ,
            isItemExpanded: () => !1,
            shouldRenderItem: () => !1,
            expansionConfig: Z
        }
          , $ = (0,
        i.Xy)()
          , ee = (0,
        a.createContext)(K)
          , ne = e => {
            var n;
            let {children: t} = e;
            const {hasLoaded: o} = (0,
            u.aF)()
              , s = (0,
            R.V)()
              , r = (0,
            H.nh)()
              , l = (0,
            Q.Z)("pipsNav")
              , c = (0,
            Y.WN)()
              , [d,p] = (0,
            a.useState)(Z)
              , m = null == d || null === (n = d.wordle) || void 0 === n || null === (n = n.expansionConfig) || void 0 === n ? void 0 : n.isExpanded;
            (0,
            Y.qy)(m),
            (0,
            a.useEffect)(( () => {
                const e = (0,
                i.j0)();
                p((n => {
                    var t, a, o, i, s;
                    return X(X({}, n), {}, {
                        crossword: X(X({}, n.crossword), {}, {
                            expansionConfig: X(X({}, n.crossword.expansionConfig), {}, {
                                nestedItems: (null === (t = n.crossword.expansionConfig) || void 0 === t ? void 0 : t.nestedItems) || [],
                                isExpanded: ["game-page", "stats", "archive"].includes(e)
                            })
                        }),
                        mini: X(X({}, n.mini), {}, {
                            expansionConfig: X(X({}, n.mini.expansionConfig), {}, {
                                nestedItems: (null === (a = n.mini.expansionConfig) || void 0 === a ? void 0 : a.nestedItems) || [],
                                isExpanded: ["mini-page", "archive", "leaderboards"].includes(e)
                            })
                        }),
                        connections: X(X({}, n.connections), {}, {
                            expansionConfig: X(X({}, n.connections.expansionConfig), {}, {
                                nestedItems: (null === (o = n.connections.expansionConfig) || void 0 === o ? void 0 : o.nestedItems) || [],
                                isExpanded: ["connections", "connections-archive"].includes(e)
                            })
                        }),
                        "spelling-bee": X(X({}, n["spelling-bee"]), {}, {
                            expansionConfig: X(X({}, n["spelling-bee"].expansionConfig), {}, {
                                nestedItems: (null === (i = n["spelling-bee"].expansionConfig) || void 0 === i ? void 0 : i.nestedItems) || [],
                                isExpanded: ["spelling-bee", "spelling-bee-hub"].includes(e)
                            })
                        }),
                        wordle: X(X({}, n.wordle), {}, {
                            expansionConfig: X(X({}, n.wordle.expansionConfig), {}, {
                                nestedItems: (null === (s = n.wordle.expansionConfig) || void 0 === s ? void 0 : s.nestedItems) || [],
                                isExpanded: ["create-wordle", "create-wordle-form", "wordle-archive"].includes(e)
                            })
                        }),
                        pips: X(X({}, n.pips), {}, {
                            shouldRender: l
                        })
                    })
                }
                ))
            }
            ), []),
            (0,
            a.useEffect)(( () => {
                p((e => X(X({}, e), {}, {
                    "connections-archive": X(X({}, e["connections-archive"]), {}, {
                        shouldRender: s
                    }),
                    strands: X(X({}, e.strands), {}, {
                        shouldRender: V
                    }),
                    "wordle-archive": X(X({}, e["wordle-archive"]), {}, {
                        shouldRender: r
                    }),
                    "create-wordle": X(X({}, e["create-wordle"]), {}, {
                        shouldRender: c
                    }),
                    "your-privacy-choices": X(X({}, e["your-privacy-choices"]), {}, {
                        shouldRender: "show" === (null == $ ? void 0 : $.PURR_DataSaleOptOutUI_v2)
                    }),
                    "california-notices": X(X({}, e["california-notices"]), {}, {
                        shouldRender: "show" === (null == $ ? void 0 : $.PURR_CaliforniaNoticesUI)
                    }),
                    "manage-privacy-preferences": X(X({}, e["manage-privacy-preferences"]), {}, {
                        shouldRender: "show" === (null == $ ? void 0 : $.PURR_FidesTCF)
                    })
                })))
            }
            ), [$, o]);
            const h = {
                isItemExpanded: e => {
                    var n, t;
                    return null != (null === (n = d[e]) || void 0 === n || null === (n = n.expansionConfig) || void 0 === n ? void 0 : n.isExpanded) && !0 === (null === (t = d[e].expansionConfig) || void 0 === t ? void 0 : t.isExpanded)
                }
                ,
                shouldRenderItem: e => {
                    var n;
                    return null === (n = d[e]) || void 0 === n ? void 0 : n.shouldRender
                }
                ,
                toggleItemExpansion: e => {
                    p((n => {
                        var t;
                        let a = X({}, n);
                        const o = null === (t = n[e].expansionConfig) || void 0 === t ? void 0 : t.isExpanded;
                        var i, s;
                        return null != n[e].expansionConfig && (a = X(X({}, n), {}, {
                            [e]: X(X({}, n[e]), {}, {
                                expansionConfig: {
                                    nestedItems: null !== (i = null === (s = n[e]) || void 0 === s || null === (s = s.expansionConfig) || void 0 === s ? void 0 : s.nestedItems) && void 0 !== i ? i : [],
                                    isExpanded: !o
                                }
                            })
                        })),
                        a
                    }
                    ))
                }
                ,
                expansionConfig: d
            };
            return a.createElement(ee.Provider, {
                value: h
            }, t)
        }
        ;
        var te = t(32825)
          , ae = "DirectLink-module_directLink__pill__lFxm9";
        const oe = e => {
            let {item: n, handleLinkClick: t, hasDropdown: o} = e;
            const s = (0,
            a.useMemo)(( () => (0,
            i.j0)()), [])
              , {shouldRenderItem: l, expansionConfig: c} = (0,
            a.useContext)(ee)
              , {staticInfo: d} = c[n.id] || {}
              , u = l(n.id);
            return d.icon,
            u ? a.createElement("div", {
                className: "DirectLink-module_directLinkContainer__h3uJZ",
                key: null == d ? void 0 : d.name
            }, a.createElement("a", {
                className: r()("DirectLink-module_directLink__kSggP", o && "DirectLink-module_transparentHover__UhJaW", "customNavLink", B.includes(d.id) && "DirectLink-module_directLink--boldText__OqQFI"),
                href: null == d ? void 0 : d.url,
                onClick: e => {
                    (0,
                    i.ob)({
                        name: s,
                        label: null == d ? void 0 : d.dataTrackLabel,
                        useBeacon: !0,
                        context: null
                    })
                }
            }, d.icon && (d.icon instanceof Array ? d.icon.map((e => a.createElement(te.Z, {
                key: e,
                icon: "".concat(e)
            }))) : a.createElement(te.Z, {
                icon: "".concat(d.icon)
            })), a.createElement("div", {
                className: "DirectLink-module_directLink__description__SPUgJ"
            }, null == d ? void 0 : d.name), (null == d ? void 0 : d.isNew) && a.createElement("span", {
                className: ae
            }, "NEW"), (null == d ? void 0 : d.isBeta) && a.createElement("span", {
                className: ae
            }, "BETA"))) : null
        }
        ;
        var ie = {
            collapsibleLink: "CollapsibleLink-module_collapsibleLink__NvSrT",
            collapsibleLink__button: "CollapsibleLink-module_collapsibleLink__button__qtjQx",
            isexpanded: "CollapsibleLink-module_isexpanded__AGnRL",
            isexpanded_crossword: "CollapsibleLink-module_isexpanded_crossword__BFESb",
            isexpanded_mini: "CollapsibleLink-module_isexpanded_mini__ttJeQ",
            isexpanded_connections: "CollapsibleLink-module_isexpanded_connections__rzVps",
            "isexpanded_spelling-bee": "CollapsibleLink-module_isexpanded_spelling-bee__AOpci",
            isexpanded_wordle: "CollapsibleLink-module_isexpanded_wordle__iXwtv",
            isexpanded_letterboxed: "CollapsibleLink-module_isexpanded_letterboxed__lvHid",
            isexpanded_tiles: "CollapsibleLink-module_isexpanded_tiles__y7WTG",
            isexpanded_strands: "CollapsibleLink-module_isexpanded_strands__DhJeL",
            isexpanded_sudoku: "CollapsibleLink-module_isexpanded_sudoku__H1zRw"
        };
        const se = e => {
            let {item: n, handleLinkClick: t} = e;
            const {isItemExpanded: o, toggleItemExpansion: i, expansionConfig: s} = (0,
            a.useContext)(ee)
              , {staticInfo: l, expansionConfig: c} = s[n.id] || {}
              , d = !!c && (null == c ? void 0 : c.nestedItems.some((e => s[e].shouldRender)))
              , u = o(n.id);
            return a.createElement("div", {
                key: n.id,
                className: r()(ie.collapsibleLinkContainer)
            }, a.createElement("div", {
                className: r()(ie.collapsibleLink, u && ie.isexpanded, u && ie["isexpanded_".concat(n.id)])
            }, a.createElement(oe, {
                item: l,
                handleLinkClick: t,
                hasDropdown: !0
            }), d && a.createElement("button", {
                type: "button",
                id: "collapsible-button",
                className: r()(ie.collapsibleLink__button, "customNavLink"),
                "aria-label": "".concat(u ? "Expand" : "Close", " ").concat(l.name, " drop-down menu button"),
                "aria-expanded": u,
                "aria-haspopup": "false",
                onClick: e => {
                    t(e),
                    i(n.id)
                }
            }, u ? a.createElement(te.Z, {
                icon: "arrow-up"
            }) : a.createElement(te.Z, {
                icon: "arrow-down"
            }))), u && a.createElement("ul", null, null == c ? void 0 : c.nestedItems.map((e => a.createElement(oe, {
                key: e,
                item: Z[e].staticInfo,
                handleLinkClick: t,
                hasDropdown: !0
            })))))
        }
        ;
        var re = {
            linkGroup: "LinkGroup-module_linkGroup__jAkmD",
            linkGroup__header: "LinkGroup-module_linkGroup__header__e8tYm",
            isGameLink: "LinkGroup-module_isGameLink__V32y3",
            link: "LinkGroup-module_link__wwRAz",
            "link_tips-and-tricks": "LinkGroup-module_link_tips-and-tricks__gNOZY",
            "link_privacy-settings": "LinkGroup-module_link_privacy-settings__kJnBT",
            link_pips: "LinkGroup-module_link_pips__nQDvH",
            link_crossword: "LinkGroup-module_link_crossword__aVx7Y",
            link_mini: "LinkGroup-module_link_mini__ZxDaQ",
            link_connections: "LinkGroup-module_link_connections__rl4PH",
            "link_spelling-bee": "LinkGroup-module_link_spelling-bee__ACCMm",
            link_wordle: "LinkGroup-module_link_wordle__kVCCZ",
            link_letterboxed: "LinkGroup-module_link_letterboxed__r7U34",
            link_tiles: "LinkGroup-module_link_tiles__zktDV",
            link_strands: "LinkGroup-module_link_strands__kjc3J",
            link_sudoku: "LinkGroup-module_link_sudoku__gDVwC",
            isexpanded: "LinkGroup-module_isexpanded__sWObj"
        };
        const le = e => {
            let {headerText: n, navItems: t} = e;
            const o = e => {
                e.stopPropagation()
            }
              , {expansionConfig: i} = (0,
            a.useContext)(ee);
            return a.createElement("div", {
                className: re.linkGroup
            }, n && a.createElement("p", {
                className: re.linkGroup__header
            }, n), a.createElement("ul", {
                className: "New York Times Games" === n && re.isGameLink || void 0
            }, t && t.map((e => {
                var n, t, s, l;
                if (null !== (n = i[e.id]) && void 0 !== n && n.shouldRender)
                    return null !== (t = i[e.id]) && void 0 !== t && t.expansionConfig ? a.createElement("li", {
                        key: e.id,
                        className: r()(re.link, (null === (l = i[e.id]) || void 0 === l || null === (l = l.expansionConfig) || void 0 === l ? void 0 : l.isExpanded) && re.isexpanded, re["link_".concat(e.id)])
                    }, a.createElement(se, {
                        item: e,
                        handleLinkClick: o
                    })) : a.createElement("li", {
                        key: e.id,
                        className: r()(re.link, (null === (s = i[e.id]) || void 0 === s || null === (s = s.expansionConfig) || void 0 === s ? void 0 : s.isExpanded) && re.isexpanded, re["link_".concat(e.id)])
                    }, a.createElement(oe, {
                        item: e,
                        handleLinkClick: o
                    }))
            }
            ))))
        }
        ;
        const ce = "+ Expand All"
          , de = "- Close All";
        function ue() {
            const [e,n] = (0,
            a.useState)(!0)
              , {isItemExpanded: t, toggleItemExpansion: o, expansionConfig: i} = (0,
            a.useContext)(ee)
              , s = (0,
            a.useMemo)(( () => Object.keys(Z).filter((e => Z[e].expansionConfig))), [Z])
              , l = (0,
            a.useMemo)(( () => Object.keys(i).filter((e => t(e)))), [i])
              , c = (0,
            a.useMemo)(( () => s.filter((e => !l.includes(e)))), [l]);
            (0,
            a.useEffect)(( () => {
                0 === l.length && n(!0),
                l.length === s.length && n(!1)
            }
            ), [l]);
            return null;
            return a.createElement("div", {
                className: "ExpansionButton-module_ExpansionButtonContainer__ow1ej"
            }, a.createElement("button", {
                type: "button",
                className: r()("customNavLink", "ExpansionButton-module_ExpansionButton__lqTjh"),
                onClick: t => (t => {
                    t.stopPropagation(),
                    e ? c.forEach((e => {
                        o(e)
                    }
                    )) : l.forEach((e => {
                        o(e)
                    }
                    )),
                    n(!e)
                }
                )(t),
                "aria-label": e ? ce : de
            }, e ? ce : de))
        }
        var pe = e => {
            let {pageName: n} = e;
            const {expansionConfig: t} = (0,
            a.useContext)(ee)
              , {isMobileWeb: o, isTablet: i, isWeb: s} = (0,
            d.vB)()
              , r = o || i && s
              , {userType: l} = (0,
            u.aF)()
              , {getVariant: c, reportExposure: p} = (0,
            E.Z)()
              , {isGWPSaleActive: h} = (0,
            m.Z)()
              , v = ["anon", "reg", "sub"].includes(l.entitlement)
              , f = c(x.Oj)
              , w = f && f === x.nE;
            (0,
            a.useEffect)(( () => {
                f && p(x.Oj)
            }
            ), [f]);
            const b = v && w
              , g = h ? "subscribe-cta-gwp-nav" : "subscribe-cta-nav"
              , y = !b && r;
            return a.createElement("div", {
                className: "CustomNav-module_customNav__RX0TG",
                "data-testid": "custom-nav-container"
            }, b ? a.createElement(S.b, {
                trackingData: {
                    name: n,
                    label: g,
                    context: ""
                }
            }) : false ? a.createElement(D.L, {
                trackingData: {
                    name: n,
                    label: "download-app-nav",
                    context: ""
                },
                isWordleNav: !1
            }) : void 0, a.createElement(ue, null), a.createElement(le, {
                headerText: "News",
                navItems: G.map((e => t[e].staticInfo))
            }), a.createElement(le, {
                headerText: "New York Times Games",
                navItems: B.map((e => t[e].staticInfo))
            }), 
            // a.createElement(le, {
            //     headerText: "Tips and Tricks",
            //     navItems: j.map((e => t[e].staticInfo))
            // }), a.createElement(le, {
            //     navItems: O.map((e => t[e].staticInfo))
            // }), a.createElement(le, {
            //     headerText: "Privacy Settings",
            //     navItems: M.map((e => t[e].staticInfo))
            // })
        )
        }
        ;
        const me = () => {
            const [e,n] = (0,
            a.useState)()
              , t = (0,
            a.useRef)(null)
              , o = (0,
            a.useRef)(null)
              , s = (0,
            a.useRef)(null)
              , r = (0,
            a.useRef)([])
              , [c,p] = (0,
            a.useState)([])
              , [m,h] = (0,
            a.useState)(0)
              , v = (0,
            E.Z)()
              , [f,w] = (0,
            a.useState)(!1)
              , b = (0,
            a.useMemo)(( () => (0,
            i.j0)()), [])
              , {newsreaderAppPlatform: g, isAndroidDevice: y, isWeb: k} = (0,
            d.vB)()
              , {userType: _} = (0,
            u.aF)()
              , x = k;
            (0,
            a.useEffect)(( () => {
                const e = "1_showSportsConnLink" === v.getVariant("GAMES_connectionsSportsLinks_0924");
                w(e)
            }
            ), [v]),
            (0,
            a.useEffect)(( () => {
                (0,
                A.ku)(),
                n(window.navigationLinks)
            }
            ), [v]),
            (0,
            a.useEffect)(( () => {
                if (t.current && o.current && s.current) {
                    const e = Array.from([...t.current.querySelectorAll(".pz-nav-drawer__link"), ...t.current.querySelectorAll(".customNavLink"), o.current.querySelector(".pz-nav-drawer__link"), ...s.current.querySelectorAll(".pz-nav__button")]).filter((e => null !== e.offsetParent));
                    r.current = e,
                    p(e.map((e => {
                        const n = e.textContent;
                        return n && n[0] ? n[0].toUpperCase() : ""
                    }
                    )))
                }
            }
            ), [m]),
            (0,
            a.useEffect)(( () => {
                r.current[m] && r.current[m].focus()
            }
            ), [m]);
            const T = e => {
                e.stopPropagation();
                const {key: n, keyCode: t, shiftKey: a} = e;
                if ("Escape" === n && h(0),
                ("ArrowDown" === n || "ArrowRight" === n || "Tab" === n && !a) && (e.preventDefault(),
                m === r.current.length - 1 ? h(0) : h((e => e + 1))),
                ("ArrowUp" === n || "ArrowLeft" === n || "Tab" === n && a) && (e.preventDefault(),
                h(0 === m ? r.current.length - 1 : e => e - 1)),
                t >= 65 && t <= 90) {
                    const e = c.findIndex(( (e, n) => e === String.fromCharCode(t) && n !== m));
                    e >= 0 && h(e)
                }
            }
              , C = ((0,
            R.V)(),
            e ? (0,
            i.T0)(x ? null == e ? void 0 : e.loginOffer : null == e ? void 0 : e.login, "&asset=hamburger-menu") : void 0)
              , I = null
              , z = null
              , D = null
              , S = null;
            return a.createElement(a.Fragment, null, a.createElement("nav", {
                ref: t,
                onKeyDown: T
            }, a.createElement(ne, null, a.createElement(pe, {
                pageName: b
            })))
            // , a.createElement("div", {
            //     className: "pz-nav-drawer__account",
            //     id: "js-nav-profile",
            //     onKeyDown: T
            // }, a.createElement("div", {
            //     ref: o,
            //     className: "pz-hide-anon"
            // }, 
            // a.createElement("h4", {
            //     className: "pz-nav-drawer__heading nav-account-details"
            // }, "Profile"), 
            // a.createElement("a", {
            //     href: null === N.t || void 0 === N.t ? void 0 : N.t.account,
            //     className: "pz-nav-drawer__link nav-account-details",
            //     "data-track-label": "account-details-nav",
            //     onClick: () => {
            //         (0,
            //         i.ob)({
            //             name: b,
            //             label: "account-details-nav",
            //             useBeacon: !0,
            //             context: null
            //         })
            //     }
            // }, "Account details")),
            // a.createElement("div", {
            //     ref: s,
            //     className: "pz-nav-drawer__account-actions"
            // }, D, S, I, z)
        )
        }
        ;
        var he = t(10396)
          , ve = () => {
            const {isWeb: e} = (0,
            d.vB)()
              , n = document.getElementById("nav-variant-experiment");
            if (!n)
                return null;
            const t = e ? window.navigationLinks.loginOffer : window.navigationLinks.login
              , s = (0,
            i.T0)(t, "&asset=navigation-bar")
              , r = NaN;
            return (0,
            o.createPortal)(r, n)
        }
        ;
        const fe = document.getElementById((0,
        i.iU)("nav-drawer"))
          , we = document.getElementById((0,
        i.iU)("portal-footer-legal"))
          , be = document.getElementById("banner-portal")
          , ge = document.getElementById("bar1-portal");
        var ye = () => {
            const {userType: e} = (0,
            z.Z)();
            return a.createElement(a.Fragment, null, (0,
            o.createPortal)(a.createElement(me, null), fe), we && (0,
            o.createPortal)(a.createElement(he.Z, {
                navigationLinks: window.navigationLinks,
                directives: window.purrDirectives
            }), we), be && (0,
            o.createPortal)(a.createElement(g, null), be), !e.hasXwd && ge && (0,
            o.createPortal)(a.createElement(I, null), ge), a.createElement(ve, null))
        }
    },
    10431: function(e, n, t) {
        t.d(n, {
            IV: function() {
                return i
            },
            Oo: function() {
                return r
            },
            P$: function() {
                return s
            },
            R2: function() {
                return c
            },
            cn: function() {
                return o
            },
            dS: function() {
                return m
            },
            jG: function() {
                return d
            },
            rI: function() {
                return l
            },
            y5: function() {
                return u
            }
        });
        var a = t(48198);
        function o(e, n) {
            null !== e && e.classList.add(n)
        }
        function i(e, n) {
            null !== e && e.classList.remove(n)
        }
        function s(e, n, t) {
            e.setAttribute(n, t)
        }
        function r(e, n, t, a) {
            e.addEventListener(n, t, a)
        }
        function l(e) {
            return a.JU.getElementById(e)
        }
        function c(e) {
            return a.JU.querySelector(e)
        }
        function d(e, n) {
            e.appendChild(n)
        }
        function u(e, n) {
            (function(e) {
                for (; e.children.length; )
                    e.removeChild(e.children[0])
            }
            )(e),
            n.forEach((n => {
                d(e, n)
            }
            ))
        }
        function p(e) {
            var n;
            return null === (n = e.currentTarget) || void 0 === n ? void 0 : n.events[e.type](e)
        }
        function m(e, n, t) {
            const o = a.JU.createElement(e);
            return t && d(o, a.JU.createTextNode(t)),
            Object.keys(n).forEach((e => {
                const t = n[e];
                if ("o" === e[0] && "n" === e[1]) {
                    const n = e.slice(2).toLowerCase();
                    o.events || (o.events = {}),
                    o.events[n] = t,
                    r(o, n, p)
                } else
                    null != t && !1 !== t && o.setAttribute(e, t)
            }
            )),
            o
        }
    },
    65308: function(e, n, t) {
        t.d(n, {
            C1: function() {
                return i
            },
            IQ: function() {
                return o
            },
            mQ: function() {
                return a
            }
        });
        const a = new Date("02/27/2023 06:00:00 GMT-0400").getTime()
          , o = new Date("04/01/2023 10:00:00 GMT-0400").getTime()
          , i = [{
            copy: "Final Hours of the All Access Sale.",
            startDate: new Date("03/31/2023 13:00:00 GMT-0400").getTime()
        }, {
            copy: "The All Access Sale Ends Today.",
            startDate: new Date("03/31/2023 06:00:00 GMT-0400").getTime()
        }, {
            copy: "The All Access Sale Ends Tomorrow.",
            startDate: new Date("03/30/2023 06:00:00 GMT-0400").getTime()
        }, {
            copy: "The All Access Sale Ends Soon.",
            startDate: new Date("03/13/2023 06:00:00 GMT-0400").getTime()
        }, {
            copy: "The All Access Sale.",
            startDate: new Date("02/27/2023 06:00:00 GMT-0400").getTime()
        }]
    },
    54988: function(e, n, t) {
        t.d(n, {
            BL: function() {
                return a
            },
            L2: function() {
                return h
            },
            cr: function() {
                return p
            },
            ne: function() {
                return u
            },
            sN: function() {
                return m
            },
            ut: function() {
                return o
            }
        });
        const a = new Date("2025-08-07T10:00:00-04:00")
          , o = new Date("2025-09-04T10:00:00-04:00")
          , i = new Date("2025-08-11T10:00:00-04:00")
          , s = new Date("2025-08-18T10:00:00-04:00")
          , r = new Date("2025-08-25T10:00:00-04:00")
          , l = new Date("2025-09-02T10:00:00-04:00")
          , c = new Date("2025-09-03T10:00:00-04:00")
          , d = new Date("2025-09-03T18:00:00-04:00")
          , u = a.getTime()
          , p = o.getTime()
          , m = {
            acqMessage: "Save up to 75%",
            newsAppAcqMessage: "Save up to 75%",
            shortMessage: "Save up to 75%",
            newsAppShortMessage: "Save up to 75%",
            upgradeMessage: "Upgrade and save",
            campaignId: "89RW9",
            acquisitionCopy: "Up to 75% off your first year of Games.",
            shortAcquisitionCopy: "Up to 75% off your first year.",
            newsReaderAcquisitionCopy: "Up to 75% off your first year of Games.",
            newsReaderShortAcquisitionCopy: "Up to 75% off your first year.",
            hamburgerCTAHeading: "Want to access\nthe archives?",
            hamburgerCTAParagraph: "Our best offer won't last.",
            getAcquisitionMessage(e) {
                let {isInNewsreaderAppPlatform: n, isAndroid: t} = e;
                return n && t ? this.newsAppAcqMessage : this.acqMessage
            },
            getShortMessage(e) {
                let {isInNewsreaderAppPlatform: n, isAndroid: t} = e;
                return n && t ? this.newsAppShortMessage : this.shortMessage
            },
            getBannerAcqMessage(e) {
                let {isPlayTab: n, isPhone: t, isAndroid: a} = e;
                return n && a ? t ? this.newsReaderShortAcquisitionCopy : this.newsReaderAcquisitionCopy : t ? this.shortAcquisitionCopy : this.acquisitionCopy
            },
            urgency: [{
                color: "dark_yellow",
                copy: "Final Hours",
                shortCopy: "Final Hours",
                startDate: d.getTime()
            }, {
                color: "dark_yellow",
                copy: "Ends Today",
                shortCopy: "Ends Today",
                startDate: c.getTime()
            }, {
                color: "dark_yellow",
                copy: "Ends Tomorrow",
                shortCopy: "Ends Tomorrow",
                startDate: l.getTime()
            }, {
                color: "dark_yellow",
                copy: "Ends Soon",
                shortCopy: "Ends Soon",
                startDate: r.getTime()
            }, {
                color: "blue",
                copy: "Last chance this summer",
                shortCopy: "Last chance this summer",
                startDate: s.getTime()
            }, {
                color: "blue",
                copy: "Offer Won't Last",
                shortCopy: "Offer Won't Last",
                startDate: i.getTime()
            }, {
                color: "purple",
                copy: "Limited Time Offer",
                shortCopy: "Limited Time Offer",
                startDate: a.getTime()
            }]
        };
        function h(e, n) {
            if (!n || !e)
                return e;
            const t = new URL(e);
            return t.searchParams.set("campaignId", m.campaignId),
            t.toString()
        }
    },
    31405: function(e, n, t) {
        t(7060),
        t(89977)
    },
    80692: function(e, n, t) {
        t.d(n, {
            t: function() {
                return r
            }
        });
        const a = "/crosswords"
          , o = "/puzzles"
          , i = "/games"
          , s = "https://www.nytimes.com"
          , r = {
            account: "https://account.nytimes.com",
            hub: a,
            archive: "".concat(a, "/archive"),
            daily: "".concat(a, "/game/daily"),
            mini: "".concat(a, "/game/mini"),
            apps: "".concat(a, "/apps"),
            stats: "".concat(o, "/stats"),
            leaderboards: "".concat(o, "/leaderboards"),
            spellingBee: "".concat(o, "/spelling-bee"),
            spellingBeePuzzleHub: "".concat(o, "/spelling-bee/hub"),
            wordle: "".concat(i, "/wordle/index.html"),
            wordleArchive: "".concat(i, "/wordle/archive"),
            tiles: "".concat(o, "/tiles"),
            letterBoxed: "".concat(o, "/letter-boxed"),
            sudoku: "".concat(o, "/sudoku"),
            strands: "".concat(i, "/strands"),
            connections: "".concat(i, "/connections"),
            connectionsArchive: "".concat(i, "/connections/archive"),
            connectionsBot: "".concat(s, "/interactive/2024/upshot/connections-bot.html"),
            pips: "".concat(i, "/pips"),
            submission: "https://nytimes.com/article/submit-crossword-puzzles-the-new-york-times.html",
            sbForum: "".concat(s, "/spotlight/spelling-bee-forum"),
            home: s,
            wordplay: "".concat(s, "/column/wordplay"),
            guide: "".concat(s, "/guides/crosswords/how-to-solve-a-crossword-puzzle"),
            gift: "".concat(s, "/subscription/nyt_games/gift"),
            privacy: "".concat(s, "/privacy/privacy-policy"),
            faq: "https://help.nytimes.com/hc/en-us/sections/360011158491-NYT-Games ",
            shop: "https://store.nytimes.com/collections/games",
            termsOfSale: "https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale",
            termsOfService: "https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service",
            sitemap: "https://www.nytimes.com/sitemap/",
            company: "https://www.nytco.com/",
            feedback: "mailto:nytgames@nytimes.com",
            threads: "https://www.threads.net/@nytgames"
        }
    }
}]);
//# sourceMappingURL=2288.b4ebb0f4a13cde368e15.js.map
