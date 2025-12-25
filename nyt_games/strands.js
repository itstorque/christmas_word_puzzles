!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "91936381-3a5b-4ad9-bd58-b9dddfd1ef1e",
        e._sentryDebugIdIdentifier = "sentry-dbid-91936381-3a5b-4ad9-bd58-b9dddfd1ef1e")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "8204b81adafe313b2513fa8457a6b32fead2d036"
},
(self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || []).push([[1661], {
    21824: function(e, t, n) {
        n.d(t, {
            J6: function() {
                return N
            },
            QJ: function() {
                return p
            },
            eR: function() {
                return O
            },
            eW: function() {
                return v
            },
            sF: function() {
                return S
            }
        });
        var r = n(20090);
        const o = "position"
          , a = "visibility"
          , l = "minHeight"
          , s = "backgroundColor"
          , i = "absolute"
          , c = "on-stage"
          , d = "fly-in"
          , u = "fly-out"
          , m = "slide-up"
          , h = "modal-card"
          , p = "sequence-animation"
          , f = 400
          , g = e => {
            let t;
            return 2 * e < 1 ? (t = 2 * e,
            .5 * t ** 3) : (t = e - 2,
            .5 * t ** 3 + 2)
        }
          , b = () => Date.now()
          , E = (e, t, n) => {
            e.style[t] = n
        }
          , y = (e, t) => {
            e.classList.add(t)
        }
          , _ = (e, t) => {
            e.length ? e.forEach((e => {
                e.classList.remove(t)
            }
            )) : e.classList.remove(t)
        }
          , v = () => {
            const e = document.getElementById("js-hook-pz-moment__game");
            e && y(e, "pz-moment__frame")
        }
          , w = (e, t) => {
            let n = 0;
            return e.forEach((e => {
                e && (n += t,
                E(e, "transitionDelay", "".concat(n, "ms")),
                y(e, m))
            }
            )),
            n
        }
          , S = e => {
            y(e, c)
        }
          , N = e => {
            (0,
            r.Dc)(f).then(( () => {
                const t = document.getElementById("js-hook-pz-moment__".concat(e)).querySelector(".".concat(p));
                t && w(Array.from(t.children), 200)
            }
            ))
        }
          , O = (e, t, n, v) => {
            if (window.isPlayTab || "ios" === window.newsreaderAppPlatform)
                return ( (e, t, n, o) => {
                    const a = document.querySelectorAll(".".concat(m))
                      , l = document.querySelector(".".concat(h))
                      , s = document.querySelector("body");
                    return n && n(),
                    y(t, c),
                    y(t, "playtab-fade-in"),
                    _(e, "playtab-fade-in"),
                    o ? y(s, "game-moment") : _(s, "game-moment"),
                    (0,
                    r.Dc)(600).then(( () => {
                        a.length && _(a, m);
                        const n = t.querySelector(".".concat(p));
                        n ? (0,
                        r.Dc)(w(Array.from(n.children).concat(l), 25)).then(( () => (_(e, c),
                        Promise.resolve()))) : _(e, c)
                    }
                    )),
                    Promise.resolve()
                }
                )(e, t, n, v);
            const S = document.getElementById("js-hook-game-wrapper")
              , N = e.offsetHeight
              , O = document.querySelector(".".concat(h))
              , T = document.querySelectorAll(".".concat(m));
            E(S, s, e.style.backgroundColor || "var(--bg-page, white)"),
            E(S, l, "".concat(N, "px")),
            E(t, a, "hidden"),
            E(t, o, i),
            E(t, "top", 0),
            y(t, c),
            E(e, o, i),
            E(e, "top", 0),
            y(e, u),
            n && n();
            const C = t.offsetHeight;
            return window.isHybridWebView && (E(document.body, s, e.style.backgroundColor || "var(--bg-page, white)"),
            E(document.body, "color", "var(--text, black)")),
            (0,
            r.Dc)(f).then(( () => {
                T.length && _(T, m),
                E(t, a, "visible"),
                y(t, d);
                const n = t.querySelector(".".concat(p));
                n && w(Array.from(n.children).concat(O), 25),
                window.isHybridWebView && "js-hook-pz-moment__welcome" === t.id && "js-hook-pz-moment__game" === e.id && E(document.body, s, "#fb9b00"),
                function(e, t, n, r, o) {
                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : g
                      , l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "px";
                    return new Promise((s => {
                        const i = r - n
                          , c = b()
                          , d = () => {
                            let u = (b() - c) / o;
                            u = u >= 1 ? 1 : u,
                            e.style[t] = Math.min(n + a(u) * i + l, r),
                            1 === u ? s() : window.requestAnimationFrame(d)
                        }
                        ;
                        d()
                    }
                    ))
                }(S, l, N, C, f).then(( () => {
                    _(e, c),
                    _(e, u),
                    _(t, d),
                    E(S, l, 0),
                    E(e, o, "static"),
                    E(t, o, "relative")
                }
                ))
            }
            )),
            new Promise((e => setTimeout(e, f)))
        }
    },
    51722: function(e, t, n) {
        n.d(t, {
            hd: function() {
                return r
            }
        });
        const r = new Date("".concat("2023-06-12", "T00:00:00"))
    },
    20090: function(e, t, n) {
        n.d(t, {
            Dc: function() {
                return r
            },
            Ds: function() {
                return o
            }
        });
        const r = e => new Promise((t => {
            setTimeout(t, e)
        }
        ))
          , o = (e, t) => {
            let n;
            return function() {
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                const l = this;
                clearTimeout(n),
                n = setTimeout(( () => e.apply(l, o)), t)
            }
        }
    },
    33064: function(e, t, n) {
        n.d(t, {
            U: function() {
                return i
            }
        });
        var r = n(65489)
          , o = n(86128);
        const a = window.location.origin + window.location.pathname
          , l = (0,
        o.f0)({
            redirect_uri: encodeURIComponent(a),
            response_type: "cookie",
            client_id: "games",
            application: "crosswords"
        })
          , s = "".concat(r.OB.account, "/auth/enter-email?").concat(l)
          , i = function() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
              , n = arguments.length > 1 ? arguments[1] : void 0;
            const a = (null == t || null === (e = t.navigationLinks) || void 0 === e ? void 0 : e.login) || "";
            return (0,
            o.I3)(a) ? a : n ? (0,
            r.T0)(s, n) : s
        }
    },
    85203: function(e, t, n) {
        n.d(t, {
            Mf: function() {
                return c
            },
            T4: function() {
                return s
            },
            qA: function() {
                return i
            }
        });
        var r = n(65489)
          , o = n(53789)
          , a = n(22152)
          , l = n(18489);
        const s = () => !window.newsreaderAppPlatform && !window.isHybridWebView && (o.tq || (0,
        l.Z)() && !o.tq && !window.isHybridWebView)
          , i = () => {
            const e = s();
            return "1_appDownloadCTA" === r.abra.getVariant(a.wv) && e
        }
          , c = () => {
            r.abra.getVariant(a.wv) && r.abra.reportExposure(a.wv)
        }
    },
    40245: function(e, t, n) {
        var r = n(89526)
          , o = n(64403)
          , a = n.n(o)
          , l = n(32825)
          , s = n(92477);
        t.Z = e => {
            let {text: t="New", position: n="default", className: o=""} = e;
            return r.createElement("span", {
                className: a()(s.Z.pill, s.Z[n], o),
                "data-testid": "pill-blue"
            }, r.createElement(l.Z, {
                icon: "sparkle",
                "aria-hidden": "true"
            }), t)
        }
    },
    1342: function(e, t) {
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
        n.d(t, {
            Dx: function() {
                return d
            },
            JO: function() {
                return c
            },
            Sx: function() {
                return i
            },
            dk: function() {
                return u
            }
        });
        var r = n(89526)
          , o = n(64403)
          , a = n.n(o)
          , l = n(65489)
          , s = (n(40245),
        n(32825),
        n(8194));
        n(1342);
        const i = e => {
            let {trackData: t, override: n} = e;
            return window.isHybridWebView && window.NativeBridge ? "ios" === window.newsreaderAppPlatform ? null : r.createElement(s.Z, {
                onClick: () => {
                    var e;
                    if (n)
                        n();
                    else {
                        if (t) {
                            const {elementName: e, context: n, moduleLabel: r} = t
                              , o = "back";
                            (0,
                            l.$g)("click", n, e, o, r)
                        }
                        null === (e = window.NativeBridge) || void 0 === e || e.gamesBackToHub()
                    }
                }
            }) : null
        }
          , c = e => {
            let {icon: t, size: n="large"} = e;
            return r.createElement("div", {
                className: a()("pz-moment__icon", n, t),
                "data-testid": "moment-icon"
            })
        }
          , d = e => {
            let {text: t, size: n="large", font: o="karnak", level: l="1"} = e;
            const s = "h".concat(l)
              , i = a()("pz-moment__title", n, o);
            return r.createElement(s, {
                className: i
            }, t)
        }
          , u = e => {
            let {text: t, variant: n="default", font: o="karnak", level: l="1"} = e;
            const s = "h".concat(l)
              , i = a()("pz-moment__description", n, o);
            return r.createElement(s, {
                className: i,
                dangerouslySetInnerHTML: {
                    __html: t
                }
            })
        }
    },
    4215: function(e, t, n) {
        n.d(t, {
            R: function() {
                return h
            }
        });
        var r = n(89526)
          , o = n(95609)
          , a = n(36629)
          , l = n(65489);
        var s = n(31441)
          , i = n(75026)
          , c = n(61233)
          , d = n(41581)
          , u = n(60453);
        class m extends Error {
            constructor(e, t) {
                var n, r, o, a;
                super(t),
                n = this,
                o = void 0,
                (r = "symbol" == typeof (a = function(e, t) {
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
                }(r = "status")) ? a : a + "")in n ? Object.defineProperty(n, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = o
            }
        }
        const h = e => {
            let {children: t} = e;
            const n = (0,
            i.mQ)();
            let h = (0,
            i.s_)(c.OE);
            const p = (0,
            i.s_)(c.PO)
              , f = (0,
            o.Y)({
                gameDataKey: o.I.STRANDS
            })
              , [g,b] = (0,
            r.useReducer)((e => !e), !1);
            return (0,
            r.useEffect)(( () => {
                (e => {
                    let {today: t} = e;
                    return l.Be.get((n = t,
                    "/christmas_word_puzzles/nyt_games/strands_problem.json")
                    // "".concat(l.OB.edge, "/svc/strands/v2/").concat((0,
                    // a.Z)(n, "yyyy-MM-dd"), ".json"))
                    , {
                        withStatus: !0
                    }).catch((e => {
                        const n = ["message: ".concat(e.message), "today: ".concat(t), "new Date(): ".concat(new Date), "new Date().getTimezoneOffset(): ".concat((new Date).getTimezoneOffset()), "Intl.DateTimeFormat().resolvedOptions().timeZone: ".concat(Intl.DateTimeFormat().resolvedOptions().timeZone)];
                        throw e.message = n.join(", "),
                        e
                    }
                    ));
                    var n
                }
                )({
                    today: f
                }).then((e => {
                    if ((null == e ? void 0 : e.status) < 400)
                        n((0,
                        s.k9)(function(e) {
                            return {
                                id: e.id,
                                printDate: e.printDate,
                                editor: e.editor,
                                constructors: e.constructors,
                                spangram: e.spangram,
                                startingBoard: e.startingBoard,
                                solutions: e.solutions,
                                clue: e.clue,
                                themeCoords: e.themeCoords,
                                spangramCoords: e.spangramCoords
                            }
                        }(e)));
                    else {
                        let t;
                        void 0 !== (null == e ? void 0 : e.status) && (t = null == e ? void 0 : e.status),
                        n((0,
                        s.sT)(new m(t,e.errors.join(", "))))
                    }
                }
                )).catch((e => {
                    n((0,
                    s.sT)(e))
                }
                ))
            }
            ), [g]),
            (0,
            r.useEffect)(( () => {
                null !== h && n((0,
                u.W)())
            }
            ), [p]),
            null === h && p ? r.createElement(d.Z, {
                errorType: "default"
            }) : null === h ? null : r.createElement(r.Fragment, null, t)
        }
    },
    41581: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var r = n(89526)
          , o = n(36629)
          , a = n(69202)
          , l = n(95128)
          , s = {
            flexContainer: "Error-module_flexContainer__XN622",
            expandToRow: "Error-module_expandToRow__qut6h Error-module_flexContainer__XN622",
            mobileColumn: "Error-module_mobileColumn__ulPMZ",
            "visually-hidden": "Error-module_visually-hidden__pWi9G",
            container: "Error-module_container__SWosE",
            SlideIn: "Error-module_SlideIn__hAmn1",
            errorContainer: "Error-module_errorContainer__OY7Ll",
            errorContent: "Error-module_errorContent__UpF2h",
            errorTitle: "Error-module_errorTitle__VUfbh",
            errorSubtitle: "Error-module_errorSubtitle___5RBq",
            errorText: "Error-module_errorText__lP7R1",
            backButton: "Error-module_backButton__RLeNX",
            defaultErrorIcon: "Error-module_defaultErrorIcon__wYpd1",
            offlineErrorIcon: "Error-module_offlineErrorIcon__dEsON",
            slideDown: "Error-module_slideDown__mrewr",
            flyIn: "Error-module_flyIn__eov05",
            flyOut: "Error-module_flyOut__OsAN4",
            fadeIn: "Error-module_fadeIn__zXzk6",
            SlideOut: "Error-module_SlideOut__cPRYG"
        };
        const i = e => {
            let {errorType: t} = e;
            const n = "offline" === t && s.offlineErrorIcon;
            return r.createElement("span", {
                role: "img",
                "aria-hidden": !0,
                className: n || s.defaultErrorIcon
            })
        }
          , c = () => r.createElement("div", {
            className: s.errorContent
        }, r.createElement("h1", {
            className: s.errorTitle
        }, "Oh no!"), r.createElement("h2", {
            className: s.errorSubtitle
        }, "You’re offline."), r.createElement("p", {
            className: s.errorText
        }, "Find a connection and come back."))
          , d = () => r.createElement("div", {
            className: s.errorContent
        }, r.createElement("h1", {
            className: s.errorTitle,
            "data-testid": "error-header"
        }, "Oops!"), r.createElement("h2", {
            className: s.errorSubtitle
        }, "Something went wrong."), r.createElement("p", {
            className: s.errorText
        }, "Please try again later."))
          , u = () => r.createElement("div", {
            className: s.errorContent
        }, r.createElement("h1", {
            className: s.errorTitle
        }, "Oops!"), r.createElement("h2", {
            className: s.errorSubtitle
        }, "We're missing data for this puzzle."), r.createElement("p", {
            className: s.errorText
        }, "Please test after the data has been added."))
          , m = () => r.createElement("div", {
            className: s.errorContent
        }, r.createElement("h1", {
            className: s.errorTitle
        }, "Oops!"), r.createElement("h2", {
            className: s.errorSubtitle
        }, "Date precedes the launch date of", " ", (0,
        o.Z)(l.hd, "MMM d, yyyy"), "."), r.createElement("p", {
            className: s.errorText
        }, "Please test a later puzzle."));
        function h(e) {
            let {errorType: t, showBackButton: n=!1} = e;
            const o = n || document.referrer.includes("nytimes");
            if (!t)
                return null;
            const l = {
                offline: {
                    icon: r.createElement(i, {
                        errorType: "offline"
                    }),
                    content: r.createElement(c, null)
                },
                default: {
                    icon: r.createElement(i, null),
                    content: r.createElement(d, null)
                },
                missingData: {
                    icon: r.createElement(i, null),
                    content: r.createElement(u, null)
                },
                precedesLaunch: {
                    icon: r.createElement(i, null),
                    content: r.createElement(m, null)
                }
            }
              , {icon: h, content: p} = l[t] || l.default;
            return r.createElement("div", {
                className: s.container,
                role: "dialog"
            }, r.createElement("div", {
                className: s.errorContainer
            }, h, p, o && r.createElement("button", {
                className: s.backButton,
                type: "button",
                "data-testid": "back",
                onClick: () => {
                    (0,
                    a.n)()
                }
            }, "Back")))
        }
    },
    81172: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return nn
            }
        });
        var r = n(89526)
          , o = n(73961)
          , a = n(33649)
          , l = n(64403)
          , s = n.n(l)
          , i = n(98697)
          , c = n(71286)
          , d = n(63210)
          , u = n(67522)
          , m = n(14237)
          , h = n(22152);
        var p = (e, t) => {
            const {isHybridWebView: n, NativeBridge: o, isAndroidGamesApp: a} = (0,
            u.vB)();
            r.useEffect(( () => {
                if (n && o && a)
                    return o.addEventListener(u.Q5, e),
                    () => {
                        var t;
                        null === (t = window.NativeBridge) || void 0 === t || t.removeEventListener(u.Q5, e)
                    }
            }
            ), t)
        }
          , f = n(34303)
          , g = n(43812)
          , b = n(60063)
          , E = n(38661)
          , y = n(19588)
          , _ = n(65489)
          , v = n(23474)
          , w = n(60820);
        const S = ["children", "icon"];
        function N() {
            return N = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            N.apply(this, arguments)
        }
        var O = e => {
            const {children: t, icon: n} = e
              , o = function(e, t) {
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
            }(e, S);
            return r.createElement("li", null, r.createElement("button", N({
                type: "button"
            }, o, {
                className: s()("ToolbarButton-module_button__Y5yUu"),
                disabled: o.disabled
            }), r.createElement(w.v, {
                icon: n
            }), t))
        }
          , T = n(97677);
        let C = function(e) {
            return e.NONE = "none",
            e.HELP = "help",
            e.SETTINGS = "settings",
            e.PUZZLES = "puzzles",
            e.CONGRATS = "congrats",
            e.HINT_NEED = "hint-need",
            e.HINT_ONE = "hint-one",
            e.DARK_MODE_FAM = "dark-mode-fam",
            e
        }({});
        const P = e => "string" == typeof e ? e : "submits"in e ? ["submits:".concat(e.submits)] : ["hints_used:".concat(e.hintsUsed), "total_submits:".concat(e.totalSubmits), "total_solves:".concat(e.totalSolves)];
        function I(e) {
            if ("number" == typeof e)
                return e;
            const {word: t, submits: n, hintAvail: r} = e
              , o = ["word:".concat(t), "submits:".concat(n), "hint_avail:".concat(r)];
            return "level"in e && "hintUsed"in e && o.push("level:".concat(e.level), "hint_used:".concat(e.hintUsed)),
            o
        }
        const k = "strands";
        class D {
            constructor(e) {
                var t, n, r, o;
                t = this,
                r = void 0,
                (n = "symbol" == typeof (o = function(e, t) {
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
                }(n = "puzzleID")) ? o : o + "")in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r,
                this.puzzleID = e
            }
            startGame(e) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "start-game"
                    },
                    context: "".concat(this.puzzleID),
                    type: "click",
                    label: e
                })
            }
            toolTip(e) {
                (0,
                _.hX)("tool-tip", k, e, "".concat(this.puzzleID))
            }
            clickToolTip(e, t, n) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "tool-tip"
                    },
                    name: {
                        p: e,
                        t: "today"
                    },
                    label: t,
                    region: n,
                    context: this.puzzleID
                })
            }
            chooseDisplayMode(e, t) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "settings"
                    },
                    name: {
                        p: e,
                        t: "today"
                    },
                    region: "settings",
                    label: t,
                    context: this.puzzleID
                })
            }
            hintAvailable(e) {
                (0,
                _.hX)("hint-button", k, P({
                    submits: e
                }), "".concat(this.puzzleID))
            }
            clickHint(e) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "hint"
                    },
                    context: "".concat(this.puzzleID),
                    label: "type:".concat(e)
                })
            }
            completePuzzle() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "100%-complete"
                    },
                    context: "".concat(this.puzzleID)
                })
            }
            findThemeWord(e, t, n, r, o) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "solve-attempt"
                    },
                    label: I({
                        word: e,
                        level: t,
                        submits: n,
                        hintUsed: r,
                        hintAvail: o
                    }),
                    context: "".concat(this.puzzleID)
                })
            }
            findNonThemeWord(e, t, n) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "hint-attempt"
                    },
                    label: I({
                        word: e,
                        submits: t,
                        hintAvail: 3*n
                    }),
                    context: "".concat(this.puzzleID)
                })
            }
            findSpangram(e, t, n, r, o) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "spangram"
                    },
                    label: I({
                        word: e,
                        level: t,
                        submits: n,
                        hintUsed: r,
                        hintAvail: o
                    }),
                    context: "".concat(this.puzzleID)
                })
            }
            openHelp() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "help"
                    },
                    context: "".concat(this.puzzleID),
                    region: "toolbar"
                })
            }
            seeHelp(e) {
                (0,
                _.LW)({
                    element: {
                        name: "help",
                        label: e
                    },
                    context: "".concat(this.puzzleID),
                    region: k
                })
            }
            closeHelp() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "close"
                    },
                    context: "".concat(this.puzzleID),
                    region: "help"
                })
            }
            nextHelp(e) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "next"
                    },
                    context: "".concat(this.puzzleID),
                    label: e,
                    region: "help"
                })
            }
            playHelp() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "play"
                    },
                    context: "".concat(this.puzzleID),
                    region: "help"
                })
            }
            back(e) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "back"
                    },
                    context: "".concat(this.puzzleID),
                    label: e,
                    region: "help"
                })
            }
            spellingBee() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "next-game"
                    },
                    context: "".concat(this.puzzleID),
                    label: "spelling-bee",
                    type: "click"
                })
            }
            feedbackLink() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "email-feedback"
                    },
                    context: "".concat(this.puzzleID),
                    region: "settings"
                })
            }
            congratsModal(e, t, n) {
                (0,
                _.hX)("congrats-modal", k, P({
                    hintsUsed: e,
                    totalSubmits: t,
                    totalSolves: n
                }), "".concat(this.puzzleID))
            }
            viewResults() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "view-results"
                    },
                    context: "".concat(this.puzzleID)
                })
            }
            reportBug() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "report-bug"
                    },
                    context: "".concat(this.puzzleID),
                    region: "settings"
                })
            }
            faq() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "faq"
                    },
                    context: "".concat(this.puzzleID),
                    region: "settings"
                })
            }
            sharePuzzle() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "share"
                    },
                    context: "".concat(this.puzzleID),
                    region: "congrats-modal"
                })
            }
            login() {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: "log-in"
                    },
                    context: "".concat(this.puzzleID),
                    region: "welcome"
                })
            }
            subscribe(e) {
                (0,
                _.LW)({
                    element: {
                        name: k,
                        label: e || "subscribe"
                    },
                    context: "".concat(this.puzzleID),
                    region: "welcome"
                })
            }
            welcomeMoment(e) {
                (0,
                _.hX)("welcome-modal", k, e, "".concat(this.puzzleID))
            }
            clickAppDownloadCTA() {
                (0,
                _.LW)({
                    region: "welcome",
                    element: {
                        name: k,
                        label: "welcome-download-app"
                    },
                    context: "".concat(this.puzzleID)
                })
            }
            viewAppDownloadCTA() {
                (0,
                _.hX)("welcome", k, "download-app", "".concat(this.puzzleID))
            }
        }
        var A = n(10372)
          , z = n(90875)
          , H = n(74993)
          , M = n(47592)
          , R = n(73826)
          , x = n(4663);
        let L = function(e) {
            return e.HELP = "help",
            e.SETTINGS = "settings",
            e
        }({});
        function U(e) {
            let {isDisabled: t, puzzleId: n, hide: o=!1} = e;
            const l = new D(n)
              , s = (0,
            a.I0)()
              , {userType: i} = (0,
            m.aF)()
              , {hasXwd: c} = i
              , d = (0,
            g.Z)()
              , p = _.abra.getVariant(h.mV) === h.S_
              , f = (0,
            R.O)(i.hasXwd)
              , b = {
                puzzleId: n.toString()
            };
            return r.createElement(v.Z, {
                isHidden: o
            }, p ? r.createElement(A.Z, null, r.createElement(H.Z, {
                toolbarItemIcon: M.qD.HELP,
                trackingProps: b
            }, r.createElement(z.Z, {
                type: z.H.BUTTON,
                label: "How to Play",
                onClick: () => {
                    s((0,
                    T.h7)(C.HELP))
                }
            }), r.createElement(z.Z, {
                type: z.H.LINK,
                label: "Tips and Tricks",
                url: "https://www.nytimes.com/2024/06/28/crosswords/strands-tips-and-tricks.html"
            }), r.createElement(z.Z, {
                type: z.H.LINK,
                label: "Feedback",
                url: "https://iter.ly/nh94m"
            }), r.createElement(z.Z, {
                type: z.H.FEEDBACK_LINK,
                label: "Report a Bug",
                feedbackLinkProps: {
                    subject: "Strands Bug Report",
                    type: u.N1.CUSTOM
                }
            }), r.createElement(z.Z, {
                type: z.H.LINK,
                label: "Questions?",
                url: "https://help.nytimes.com/hc/en-us/articles/28214352967700-Strands"
            })), d && r.createElement(M.Eg, {
                icon: M.qD.SETTINGS,
                itemType: M.uF.BUTTON,
                onClick: () => s((0,
                T.h7)(C.SETTINGS)),
                disabled: t,
                trackingProps: b
            }), f && r.createElement(x.Z, {
                pageName: "strands",
                trackingProps: b
            })) : r.createElement("nav", {
                className: "Toolbar-module_toolbarWrapper__tZamw",
                "data-testid": "strands-toolbar"
            }, r.createElement("ul", {
                className: "Toolbar-module_toolbar__WqCd8"
            }, r.createElement(O, {
                icon: L.HELP,
                onClick: () => {
                    l.seeHelp("toolbar"),
                    l.openHelp(),
                    s((0,
                    T.h7)(C.HELP))
                }
                ,
                "aria-label": "Help",
                disabled: t,
                "data-testid": "toolbar-help"
            }))))
        }
        var j = n(34419);
        const B = ["isClosing", "getOpenToastName", "toastMap", "onClose", "portalId", "onRemove"];
        function F() {
            return F = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            F.apply(this, arguments)
        }
        function W(e) {
            let {isClosing: t, getOpenToastName: n, toastMap: l, onClose: s, portalId: i, onRemove: c} = e
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
            }(e, B);
            const u = r.useRef(document.getElementById(i))
              , m = (0,
            a.I0)()
              , h = (0,
            a.v9)(n);
            if (!h)
                return null;
            const p = l[h]
              , f = r.createElement(p, F({
                close: function() {
                    return m(s(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]))
                },
                isClosing: t,
                onRemove: () => m(c())
            }, d));
            return u.current ? (0,
            o.createPortal)(f, u.current) : f
        }
        var G = n(69802)
          , Z = n(75026)
          , $ = n(61233)
          , Y = n(50495);
        const V = () => {
            const e = (0,
            Z.s_)(Y.Fn)
              , t = (0,
            Z.s_)($.Ze)
              , n = (0,
            Z.s_)(Y.H)
              , o = (0,
            Z.s_)(Y.Yd)
              , a = (0,
            Z.s_)($.sn)
              , l = (0,
            Z.s_)($.CS)
              , i = Object.keys(a).length + 1
              , c = e.filter((e => a[e] || l === e)).length === i
              , d = ["Perfect!", "Great!", "Well Done!"]
              , u = d.length
              , m = n < u ? d[n] : d[u - 1]
              , h = "safari" === (0,
            G.Ai)()
              , p = c && !0 === o
              , f = c && !o || p && !h
              , g = p && h;
            return r.createElement("section", {
                id: "riddle",
                "data-content": m,
                className: s()("riddle-module_riddle__w8JzO", {
                    "riddle-module_endGameFlip__kkSQO": f,
                    "riddle-module_endGameFlipDelayed__jpjQE": g
                })
            }, r.createElement("h3", {
                className: "riddle-module_label__OY9sx"
            }, "today’s theme"), r.createElement("h1", {
                className: "riddle-module_clue__DAHxH"
            }, t))
        }
        ;
        var q = n(81494)
          , X = "styles-module_word__LwKKp";
        const Q = e => {
            const {word: t, feedback: n} = e
              , o = {
                color: "var(--text)"
            }
              , [a,l] = (0,
            r.useState)("")
              , [s,i] = (0,
            r.useState)(o)
              , [c,d] = (0,
            r.useState)("")
              , u = (e, t, n, r) => {
                l(e),
                i(t || o),
                d(""),
                n && (d("styles-module_invalidshake__KMQkk"),
                setTimeout(( () => {
                    l("".concat(r)),
                    i(o)
                }
                ), 1e3))
            }
            ;
            return (0,
            r.useEffect)(( () => {
                switch (null == n ? void 0 : n.result) {
                case q.U.TOO_SHORT:
                    return void u("".concat(t), void 0, !0, "Too short");
                case q.U.TOO_LONG:
                    return void u("".concat(t), void 0, !0, "Too long");
                case q.U.NOT_A_WORD:
                    return void u("".concat(t), void 0, !0, "Not in word list");
                case q.U.ALREADY_FOUND:
                    return void u("".concat(t), void 0, !0, "Already found");
                case q.U.NONTHEME:
                    return void u(t, {
                        color: "var(--text-strands-hint, #C4C1AF)"
                    });
                case q.U.LIMIT_REACHED:
                    return void u("".concat(t), void 0, !0, "Word limit reached");
                case q.U.THEME:
                    return void u(t, {
                        color: "var(--text-strands-theme-light)"
                    });
                case q.U.SPANGRAM:
                    return void u("SPANGRAM!", {
                        color: "var(--text-spangram)"
                    });
                default:
                    l(""),
                    n && console.error(null == n ? void 0 : n.result)
                }
            }
            ), [n]),
            t ? r.createElement("span", {
                className: X,
                "aria-live": "polite"
            }, t) : r.createElement("span", {
                className: "".concat(X, " ").concat(c),
                style: s,
                "aria-live": "polite"
            }, a)
        }
        ;
        var J = n(96543)
          , K = n(49685)
          , ee = n(95128);
        const te = e => {
            let {onClick: t, style: n} = e;
            return r.createElement("button", {
                type: "button",
                onClick: t,
                className: "styles-module_resultsButton__srg7k",
                style: n
            }, "View Results")
        }
        ;
        var ne = n(8086);
        function re(e, t) {
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
        function oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? re(Object(n), !0).forEach((function(t) {
                    var r, o, a, l;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (l = function(e, t) {
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
                    }(o)) ? l : l + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const ae = e => {
            let {hintFlag: t, setHintFlag: n} = e;
            const o = (0,
            Z.mQ)()
              , a = (0,
            Z.s_)($.Jv)
              , l = (0,
            Z.s_)($.sn)
              , i = (0,
            Z.s_)($.Ib)
              , c = (0,
            Z.s_)($.CS)
              , d = (0,
            Z.s_)(Y.uX)
              , u = (0,
            Z.s_)(Y.Fn)
              , m = (0,
            Z.s_)(Y.Oj)
              , h = (0,
            Z.s_)(Y.k7)
              , p = (0,
            Z.s_)(Y.H)
              , f = (0,
            Z.s_)(Y.VH)
              , g = new D(a)
              , b = (0,
            J.a)(h, u, l, d);
            (0,
            r.useEffect)(( () => {
                n(m > 0)
            }
            ), [m]);
            const E = () => {
                o(b ? (0,
                T.h7)(C.HINT_ONE) : (0,
                T.h7)(C.HINT_NEED))
            }
            ;
            (0,
            r.useEffect)(( () => {
                1 === m && g.hintAvailable(u.length)
            }
            ), [m]),
            (0,
            r.useEffect)(( () => {
                p < m && m > 1 && g.hintAvailable(u.length)
            }
            ), [p]);
            const y = u.filter((e => l[e] || c === e))
              , _ = y.length === Object.keys(l).length + 1
              , v = Object.keys(l).length + 1
              , [w,S] = (0,
            r.useState)(!1)
              , N = m > 1
              , O = m > 0 || b ? {
                display: "none"
            } : {
                clipPath: "inset(0 ".concat(100 - f / ee.Pc * 100, "% 0 0)")
            }
              , P = N ? {
                zIndex: "-1"
            } : {}
              , I = w ? {
                animation: "".concat("hint-module_pulse__VbJc8", " 200ms ease")
            } : {}
              , k = {
                opacity: _ ? "0" : "1",
                pointerEvents: _ ? "none" : "auto"
            }
              , A = {
                opacity: _ ? "1" : "0",
                pointerEvents: _ ? "auto" : "none"
            };
            return r.createElement("div", {
                className: "hint-module_hint__yArL5",
                id: "hint"
            }, r.createElement("div", {
                style: oe(oe({}, I), k),
                onPointerDown: () => {
                    S(!0),
                    setTimeout(( () => {
                        S(!1)
                    }
                    ), 200)
                }
            }, r.createElement("button", {
                type: "button",
                className: s()("hint-module_overlay___9ixH", "strandsOverlayButton"),
                style: oe(oe({}, O), {}, {
                    color: "var(--text-constant)"
                }, P),
                onClick: E,
                "data-testid": "hint-button"
            }, "Hint", r.createElement("div", {
                className: "strandsOverlayDiv"
            })), 0 === m ? r.createElement("button", {
                type: "button",
                className: "hint-module_lightbulb__YfeFm",
                onClick: E,
                "data-testid": "no-hints-available"
            }, "Hint") : r.createElement("button", {
                type: "button",
                className: "hint-module_bluebulb__QtJ5d",
                onClick: () => {
                    try {
                        if (d.some((e => e.hintedSecondary)))
                            o((0,
                            T.h7)(C.HINT_ONE));
                        else if (d.some((e => e.hinted))) {
                            (e => {
                                for (let t = 0; t < e.length; t += 1) {
                                    const n = e[t];
                                    if (n.hinted && !("hintedSecondary"in n) && !("hintedOrder"in n))
                                        throw Error("Hint Error: Missing `hintedSecondary` and `hintedOrder`")
                                }
                            }
                            )(d);
                            const e = d.filter((e => e.hinted)).map((e => ({
                                id: e.id,
                                hinted: !0
                            })));
                            o((0,
                            K.W)({
                                path: e
                            })),
                            g.clickHint("reveal")
                        } else {
                            const e = (0,
                            ne.Y)(l, d, i);
                            o((0,
                            K.$f)({
                                path: e
                            })),
                            n(!t),
                            g.clickHint("hint")
                        }
                    } catch (e) {
                        console.error(e.message)
                    }
                }
                ,
                style: {
                    color: "var(--text-alternate)"
                },
                "data-testid": "hints-available"
            }, "Hint")), r.createElement("p", {
                style: k
            }, r.createElement("b", null, y.length), " of ", r.createElement("b", null, v), " theme words found."), _ && r.createElement(te, {
                onClick: () => {
                    o((0,
                    T.h7)(C.CONGRATS)),
                    g.congratsModal(p, u.length, v),
                    g.viewResults()
                }
                ,
                style: A
            }))
        }
        ;
        var le = n(84510)
          , se = n(7197)
          , ie = n(3434)
          , ce = n(31189)
          , de = n(41407)
          , ue = n(52200);
        function me(e, t) {
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
                t % 2 ? me(Object(n), !0).forEach((function(t) {
                    var r, o, a, l;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (l = function(e, t) {
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
                    }(o)) ? l : l + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const pe = {
            transitionTo: "welcome",
            isActive: !0
        };
        var fe, ge = n(99093), be = n(57256), Ee = n(52809), ye = n(56700), _e = n(85203), ve = n(28557), we = n(33064), Se = n(86128);
        const Ne = (Oe = {
            prod: "https://www.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            stg: "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            dev: "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL"
        })[(null === (fe = window.env) || void 0 === fe ? void 0 : fe.name) || "dev"] || Oe.dev;
        var Oe;
        const Te = window.location.origin + window.location.pathname
          , Ce = "".concat(Ne, "&EXIT_URI=").concat(Te)
          , Pe = (0,
        Se.f0)({
            redirect_uri: encodeURIComponent(Ce),
            response_type: "cookie",
            client_id: "games",
            application: "crosswords"
        })
          , Ie = "".concat(_.OB.account, "/auth/enter-email?").concat(Pe);
        var ke = n(30829)
          , De = n(35451)
          , Ae = n(88595)
          , ze = n(36629);
        const He = e => ((0,
        ze.Z)(e, "yyyy-MM-dd"),
        "strands");
        var Me = n(5002)
          , Re = n(74964)
          , xe = n(22777)
          , Le = n(62272)
          , Ue = n(87760);
        const je = [{
            name: "loading",
            Content: e => {
                let {hasLoaded: t, today: n} = e;
                const o = he(he({}, pe), {}, {
                    hasLoaded: t,
                    today: n,
                    bgColor: "$strands-seafoam",
                    barBgColor: "rgba(0, 0, 0, 0.2)",
                    barColor: "#000"
                });
                return r.createElement(ue.Z, o)
            }
        }, {
            name: "welcome",
            Content: e => {
                let {transitionToAd: t, transitionToGame: n, today: o, editor: a, constructors: l, puzzleId: c} = e;
                const d = new D(c)
                  , {userType: u, updateUserType: h, hasLoaded: p} = (0,
                m.aF)()
                  , {hasXwd: f, isLoggedIn: b} = u
                  , {shouldRenderAd: E} = ( () => {
                    const e = (0,
                    Z.s_)($.OE)
                      , t = (0,
                    Z.s_)($.PO)
                      , n = (0,
                    Z.s_)(Y.Yd)
                      , {hasLoaded: o, userType: a} = (0,
                    m.aF)()
                      , {hasXwd: l, entitlement: s} = a
                      , [i,c] = (0,
                    r.useState)(!1);
                    return (0,
                    r.useEffect)(( () => {
                        o && t && c((e => {
                            let {entitlement: t, hasXwd: n, isGameFinished: r} = e;
                            return !(t.includes("cr") || n || r)
                        }
                        )({
                            entitlement: s,
                            hasXwd: l,
                            isGameFinished: n
                        }))
                    }
                    ), [n, o, l, s, t, e]),
                    {
                        shouldRenderAd: () => i && (!!(0,
                        xe.Z)() && ((0,
                        Le.ZP)({
                            testName: "DFP_StrandsMobileWeb_AA",
                            shouldReport: !0,
                            reporterType: Le.Qg
                        }),
                        (0,
                        Le.ZP)({
                            testName: "DFP_StrandsMobileWeb",
                            shouldReport: !0,
                            variantName: "1_Variant"
                        })) || (0,
                        Me.Z)() && (0,
                        Re.Z)())
                    }
                }
                )()
                  , y = (0,
                _e.T4)()
                  , v = (0,
                g.Z)()
                  , {mode: w, hasSetting: S} = (0,
                i.default)()
                  , {isGamesSaleActive: N, getButtonText: O} = (0,
                Ae.Z)(!0)
                  , {getVariant: T, reportExposure: C} = (0,
                be.Z)()
                  , P = {
                    hasGameProgress: !1,
                    gameName: "strands",
                    date: o.toISOString().slice(0, 10),
                    isArchive: !1,
                    puzzleId: c,
                }
                  , I = T("GAMES_PLOPRO_WELCOME_SCREEN_0425")
                  , k = !!I && "0_control" !== I
                  , A = {
                    text: "Play",
                    dataTestId: "moment-btn-play",
                    action: () => {
                        d.startGame(( () => {
                            if (!v)
                                return;
                            let e = "";
                            const t = "AM=".concat(S("mode") ? 0 : 1);
                            return e = "DM=".concat("dark" === w ? 1 : 0),
                            "".concat(e, ",").concat(t)
                        }
                        )()),
                        E() ? t() : n()
                    }
                }
                  , z = {
                    text: "Log in",
                    dataTestId: "moment-btn-login",
                    action: e => {
                        const t = k ? function() {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
                              , n = arguments.length > 1 ? arguments[1] : void 0;
                            const r = (null == t || null === (e = t.navigationLinks) || void 0 === e ? void 0 : e.login) || "";
                            return (0,
                            Se.I3)(r) ? r : n ? (0,
                            _.T0)(Ie, n) : Ie
                        }(window || void 0) : (0,
                        we.U)(window || void 0);
                        (0,
                        ke.Z)(e, h, void 0, t),
                        I && C("GAMES_PLOPRO_WELCOME_SCREEN_0425"),
                        d.login()
                    }
                }
                  , H = {
                    text: O(),
                    className: N ? ["cta-games-sales"] : ["cta-bau"],
                    dataTestId: "moment-btn-subscribe",
                    action: () => {
                        (0,
                        ve.c)("strands", h),
                        d.subscribe(O())
                    }
                };
                let M = [{
                    buttons: [A],
                    desktopButtonOrder: "vertical"
                }, {
                    header: "Christmas Edition!",
                    desktopButtonOrder: "vertical",
                    buttons: []
                }];
                b && (M = [{
                    buttons: [A],
                    desktopButtonOrder: "vertical"
                }, {
                    header: "Christmas Edition!",
                    desktopButtonOrder: "vertical",
                    buttons: [H]
                }]),
                f && (M = [{
                    buttons: [A],
                    desktopButtonOrder: "vertical"
                }]),
                (0,
                r.useEffect)(( () => {
                    if (p) {
                        const e = (e => {
                            const {isLoggedIn: t, hasXwd: n} = e;
                            return "NULL" //n ? "NULL" : t ? "subscribe" : "log-in, subscribe"
                        }
                        )(u);
                        d.welcomeMoment(e)
                    }
                }
                ), [p]);
                const R = {
                    game: {
                        game: "strands",
                        icon: He(o),
                        title: "Strands",
                        date: (0,
                        De.F)(o),
                        bgColor: "$strands-seafoam",
                        buttonGroups: M,
                        meta: "",
                        description: {
                            text: "Find hidden words and uncover the day’s theme."
                        },
                        editor: "",
                        infoText: !!l && !!a && r.createElement(r.Fragment, null, r.createElement("span", {
                            className: "pz-moment__info-editor"
                        }, "Puzzle by ", l), l !== a && r.createElement("span", {
                            className: "pz-moment__info-editor"
                        }, "Edited by ", a))
                    }
                };
                return (0,
                r.useEffect)(( () => {
                    y && d.viewAppDownloadCTA()
                }
                ), [y]),
                r.createElement("div", {
                    className: s()("welcome-module_welcomeContainer__aXIR9", y && "welcome-module_smallContainer__uvpSX", {
                        "welcome-module_gamesSalesWelcomeContainer__Lvx8o": N
                    })
                }, r.createElement(ge.Z, R), null, (0,
                ye.I)(P))
            }
        }, {
            name: "ad",
            Content: e => {
                let {isActive: t, transitionToGame: n} = e;
                return t ? r.createElement(Ue.Z, {
                    id: "intsl",
                    isSpecialAdUnit: !0,
                    position: "intsl",
                    onClose: n,
                    ctaCopy: "Continue to Strands",
                    className: s()("index-module_adInterstitial__uqUb3"),
                    skipButtonClassName: s()("index-module_adInterstitialSkipButton__q6464"),
                    animateIn: !0,
                    delaySkip: !0,
                    enableCountdown: !0
                }) : null
            }
        }]
          , Be = (0,
        de.Z)(je)
          , {Moments: Fe, momentSystem: We} = Be;
        var Ge = e => {
            let {today: t} = e;
            const n = r.createElement("span", null, (0,
            De.F)(t))
              , a = r.useRef(document.getElementById("portal-game-date"));
            return a.current ? (0,
            o.createPortal)(n, a.current) : n
        }
          , Ze = n(95609)
          , $e = n(97593);
        const Ye = e => {
            let {id: t, children: n, order: o=0, delay: a=0} = e;
            const l = {
                animationDelay: "".concat(o * a, "ms")
            };
            return r.createElement($e.$3, {
                flipId: t
            }, r.createElement("div", {
                className: "Pulser-module_enlarged__DlAVO",
                style: l
            }, n))
        }
          , Ve = e => {
            let {id: t, children: n, order: o, delay: a} = e;
            return r.createElement($e.$3, {
                flipId: t
            }, r.createElement("div", {
                className: "Pulser-module_standard__JB06d"
            }, n))
        }
          , qe = e => {
            let {id: t, flip: n, children: o, order: a=0, delay: l=0} = e;
            const s = "pulser-".concat(t);
            return n ? r.createElement(Ye, {
                id: s,
                order: a,
                delay: l
            }, o) : r.createElement(Ve, {
                id: s
            }, o)
        }
        ;
        var Xe = "styles-module_item__ZXXc7";
        function Qe(e, t) {
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
        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qe(Object(n), !0).forEach((function(t) {
                    var r, o, a, l;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (l = function(e, t) {
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
                    }(o)) ? l : l + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const Ke = e => {
            let {id: t, char: n, themed: o, spangramed: a, hinted: l, hintedOrder: c, hintedSecondary: d, nonTheme: u, nonThemeDelay: m, selected: h, selectable: p, role: f, handleClick: g, reset: b, startDragging: E, drag: y, shouldFlip: _, triggerEnd: v} = e;
            const [w,S] = (0,
            r.useState)(!1)
              , [N,O] = (0,
            r.useState)(!1)
              , [T,C] = (0,
            r.useState)(!1)
              , {mode: P} = (0,
            i.default)();
            function I() {
                C(!0),
                setTimeout(( () => {
                    C(!1)
                }
                ), 200)
            }
            function k() {
                return CSS.supports("(hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none)")
            }
            (0,
            r.useEffect)(( () => {
                y || S(!1)
            }
            ), [y]);
            const D = u && {
                transition: "color 100ms ".concat(m, "ms")
            };
            let A = {}
              , z = {};
            return o ? A = {
                backgroundColor: "var(--strands-blue)",
                color: "var(--text-constant)"
            } : a ? A = {
                backgroundColor: "var(--text-spangram)",
                color: "var(--text-constant)"
            } : l && (A = {
                animationDuration: "4s",
                animationTimingFunction: "ease",
                animationDelay: "".concat(300 * c, "ms"),
                animationIterationCount: "infinite",
                animationName: d ? "styles-module_pulseHintOutline__by9NM" : ""
            },
            "dark" !== P && (k() ? A.border = "3px dashed var(--strands-dark-mint)" : A.outline = "3px dashed var(--strands-dark-mint)"),
            "dark" === P && (k() ? A.border = "3px dashed var(--strands-blue)" : A.outline = "3px dashed var(--strands-blue)")),
            f && "submit" === f && !y && (z = {
                outline: "3px solid var(--bg-strands-hint)",
                outlineOffset: "3px",
                animationDuration: "2600ms",
                animationTimingFunction: "ease",
                animationIterationCount: "infinite",
                animationName: "styles-module_pulseSubmitOutline__dnua8"
            }),
            p ? r.createElement(qe, {
                id: t,
                flip: -1 !== _,
                order: _,
                delay: v ? 50 : a ? 75 : 0
            }, r.createElement("button", {
                type: "button",
                style: h ? Je(Je({}, {
                    backgroundColor: "var(--bg-strands-hint)",
                    color: "var(--text-constant)"
                }), z) : Je(Je({}, A), D),
                className: s()("styles-module_strandsBtn__xobCT", Xe, {
                    "styles-module_animPulse__URYjb": T
                }),
                onPointerDown: e => {
                    (e => {
                        e.target.releasePointerCapture(e.pointerId),
                        O(!0),
                        y || (g(t, l),
                        I()),
                        S(!0)
                    }
                    )(e)
                }
                ,
                onPointerUp: () => {
                    S(!1)
                }
                ,
                onPointerEnter: () => {
                    y && (g(t, l),
                    I())
                }
                ,
                onPointerLeave: () => {
                    w && !y && E()
                }
                ,
                onClick: () => {
                    N || g(t, l)
                }
                ,
                id: "button-".concat(t)
            }, n)) : r.createElement("div", {
                style: A,
                className: Xe,
                onPointerDown: () => {
                    b(t)
                }
                ,
                id: "letter-".concat(t)
            }, n)
        }
        ;
        const et = () => {
            const e = [];
            let t = 0;
            for (let n = 1; n < 9; n += 1)
                for (let r = 1; r < 7; r += 1) {
                    const o = 334 / 6 * r - 22 - 12
                      , a = 54 * n - 22 - 10;
                    e.push({
                        id: t,
                        x: o,
                        y: a
                    }),
                    t += 1
                }
            return e
        }
          , tt = e => {
            let {path: t} = e;
            const n = et();
            if (!t || t.length < 1)
                return r.createElement(r.Fragment, null);
            const o = n.find((e => {
                var n;
                return e.id === (null === (n = t[0]) || void 0 === n ? void 0 : n.id)
            }
            ));
            let a = "M ".concat(null == o ? void 0 : o.x, " ").concat(null == o ? void 0 : o.y);
            if (t.length > 1)
                for (let e = 1; e < t.length; e += 1) {
                    const r = n.find((n => n.id === t[e].id));
                    a += "L ".concat(null == r ? void 0 : r.x, " ").concat(null == r ? void 0 : r.y)
                }
            return r.createElement("path", {
                d: a
            })
        }
          , nt = e => {
            let {themePaths: t} = e;
            if (0 === t.length)
                return r.createElement(r.Fragment, null);
            const n = et()
              , o = t.filter((e => e.result !== q.U.NONTHEME))
              , a = [];
            let l = "";
            for (let e = 0; e < o.length; e += 1) {
                const s = o[e];
                l = s.path.map(( (e, t) => {
                    const r = n.find((t => t.id === e.id));
                    let o = "";
                    return o += 0 === t ? "M ".concat(null == r ? void 0 : r.x, " ").concat(null == r ? void 0 : r.y) : "L ".concat(null == r ? void 0 : r.x, " ").concat(null == r ? void 0 : r.y),
                    o
                }
                )).join(""),
                a.push(r.createElement("path", {
                    stroke: s.result === q.U.THEME ? "var(--strands-blue)" : "var(--strands-yellow)",
                    d: l,
                    key: t.indexOf(s)
                }))
            }
            return r.createElement(r.Fragment, null, a)
        }
          , rt = e => {
            let {themePaths: t, path: n} = e;
            return r.createElement("div", {
                className: "styles-module_wrapper__k5zDh"
            }, r.createElement("svg", {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("g", {
                strokeLinecap: "round",
                strokeWidth: 12,
                fill: "none"
            }, r.createElement(nt, {
                themePaths: t
            })), r.createElement("g", {
                strokeLinecap: "round",
                strokeWidth: 12,
                stroke: "var(--bg-strands-hint)",
                fill: "none"
            }, r.createElement(tt, {
                path: n
            }))))
        }
        ;
        const ot = e => {
            let {id: t} = e;
            return r.createElement($e.$3, {
                flipId: "bubble-".concat(t),
                shouldFlip: () => !1
            }, r.createElement("div", {
                className: "bubbles-module_bubble__f9FAw"
            }))
        }
          , at = e => {
            var t;
            let {id: n} = e;
            const o = null === (t = document.getElementById("hint")) || void 0 === t ? void 0 : t.firstElementChild
              , a = null == o ? void 0 : o.getBoundingClientRect()
              , l = window.matchMedia("(min-width: 768px)")
              , s = window.matchMedia("(max-height: 594px)")
              , i = window.matchMedia("(max-height: 547px)")
              , {left: c, top: d, bottom: u} = l.matches || !a ? {
                left: "max(calc(-20vw - 125px), -383px)",
                top: 376
            } : i.matches ? {
                left: a.left + 3,
                bottom: -45
            } : s.matches ? {
                left: a.left + 6,
                top: a.top + 4
            } : {
                left: a.left + 22,
                top: a.top - 48
            };
            return r.createElement(r.Fragment, null, r.createElement("div", null), r.createElement($e.$3, {
                flipId: "bubble-".concat(n),
                stagger: !0
            }, r.createElement("div", {
                className: "bubbles-module_bubbleCornered__SNZeX",
                style: {
                    left: c,
                    top: d,
                    bottom: u
                }
            })), r.createElement("div", {
                style: {
                    left: c,
                    top: d,
                    bottom: u
                },
                className: "bubbles-module_hider__zoPog"
            }))
        }
          , lt = e => {
            let {id: t, fly: n} = e;
            return n ? r.createElement(at, {
                id: t
            }) : r.createElement(ot, {
                id: t
            })
        }
          , st = e => {
            let {path: t, setNonThemeIds: n} = e;
            return r.createElement($e.U5, {
                flipKey: t,
                className: "bubbles-module_wrapper__Jovg9",
                spring: "noWobble",
                onComplete: () => {
                    n(new Map)
                }
            }, Array.from({
                length: 48
            }, ( (e, n) => {
                const o = t && t.find((e => e.id === n));
                return r.createElement(lt, {
                    key: n,
                    id: n,
                    fly: !!o
                })
            }
            )))
        }
        ;
        var it = "styles-module_wrapper__A7No7";
        const ct = [5, 10, 15, 20, 25, 30, 11, 16, 21, 26, 31, 36, 17, 22, 27, 32, 37, 42, 23, 28, 33, 38, 43, 29, 34, 39, 44]
          , dt = [35, 40, 45, 41, 46, 47]
          , ut = e => {
            let {word: t, setWord: n, setFeedback: o, setIsToolbarDisabled: a} = e;
            const l = (0,
            Z.mQ)()
              , i = (0,
            Z.s_)($.Jv)
              , c = new D(i)
              , d = We.getCurrentMoment()
              , u = (0,
            Z.s_)($.sn)
              , h = (0,
            Z.s_)($.CS)
              , p = (0,
            Z.s_)($._I)
              , f = (0,
            Z.s_)(Y.uX)
              , g = (0,
            Z.s_)(Y.Fn)
              , b = (0,
            Z.s_)(Y.Oj)
              , E = (0,
            Z.s_)(Y.k7)
              , y = (0,
            Z.s_)(Y.H)
              , _ = (0,
            Z.s_)(Y.Yd)
              , {userType: v} = (0,
            m.aF)()
              , {inShortzMode: w} = v
              , S = new URLSearchParams(window.location.search)
              , N = Number(S.get("customWordLimit")) || null
              , [O,P] = (0,
            r.useState)([])
              , [I,k] = (0,
            r.useState)([])
              , [A,z] = (0,
            r.useState)(!1)
              , [H,M] = (0,
            r.useState)()
              , [R,x] = (0,
            r.useState)(new Map)
              , [L,U] = (0,
            r.useState)()
              , [j,B] = (0,
            r.useState)(!1)
              , [F,W] = (0,
            r.useState)(!1)
              , G = (0,
            r.useRef)(y)
              , V = Object.keys(u).length + 1
              , X = e => e.filter((e => u[e] || h === e)).length === V;
            function Q() {
                try {
                    ( (e, t, n, r, o, a) => {
                        const l = ( (e, t, n, r, o) => !(n.includes(e) || e === r || t.length < o || t.filter((e => !n.includes(e) && e !== r)).length < o))(e, t, Object.keys(n), r, a);
                        if (0 === e.length)
                            throw new Error("ENTER A WORD TO SUBMIT");
                        if (e.length < 4)
                            throw new Error("TOO SHORT");
                        if (t.includes(e))
                            throw new Error("ALREADY FOUND");
                        if (l)
                            throw new Error("LIMIT REACHED");
                        if (r !== e && !n[e] && !o.includes(e))
                            throw new Error("NOT A WORD")
                    }
                    )(t, g, u, h, p, w && N ? N : 100);
                    const e = ( (e, t, n) => t[e] ? q.U.THEME : n === e ? q.U.SPANGRAM : q.U.NONTHEME)(t, u, h);
                    o({
                        attempt: t,
                        result: e
                    }),
                    l((0,
                    K.pn)({
                        type: e,
                        path: O,
                        word: t,
                        themeCoords: u,
                        spangram: h
                    })),
                    ( (e, t, n, r) => {
                        e === q.U.NONTHEME && (t(n),
                        r(( () => {
                            const e = new Map;
                            let t = 15;
                            return n.map((e => e.id)).sort(( (e, t) => e - t)).forEach((n => {
                                e.set(n, t),
                                t += 85
                            }
                            )),
                            e
                        }
                        )),
                        setTimeout(( () => {
                            t([])
                        }
                        ), 1e3))
                    }
                    )(e, U, O, x),
                    function(e) {
                        const n = g.filter((e => u[e] || h === e)).length
                          , r = (e => e.some((e => e.hinted)))(f) || b >= 1 ? 1 : 0
                          , o = e === q.U.THEME && O.every((e => e.hinted)) ? 1 : 0;
                        e === q.U.THEME ? c.findThemeWord(t, n, g.length, o, r) : e === q.U.SPANGRAM ? c.findSpangram(t, n, g.length, o, r) : c.findNonThemeWord(t, g.length, r)
                    }(e)
                } catch (e) {
                    o({
                        attempt: t,
                        result: e.message
                    })
                }
                P([])
            }
            function te(e) {
                P(e ? [{
                    id: e,
                    hinted: !1
                }] : []),
                o(void 0)
            }
            function ne(e) {
                return !!O.find((t => t.id === e))
            }
            function re(e) {
                return R.has(e)
            }
            function oe(e) {
                return O.length > 0 && e === O[O.length - 1].id
            }
            function ae(e) {
                return O.length < 1 || !!I.find((t => t.id === e)) || ne(e)
            }
            function le(e, t, n) {
                return t ? function(e) {
                    let t = 0;
                    return ct.includes(e) ? t = 5 : dt.includes(e) && (t = 10),
                    t + e % 5
                }(e) : function(e, t) {
                    return !e || e.length < 1 ? -1 : e.findIndex((e => e.id === t))
                }(n, e)
            }
            (0,
            r.useEffect)(( () => {
                const {delay: e, path: t, themed: r} = function(e) {
                    const t = e.filter((e => e.result !== q.U.NONTHEME));
                    if (t.length < 1)
                        return {
                            delay: 0,
                            path: [],
                            themed: !1
                        };
                    const n = t[t.length - 1]
                      , {path: r, result: o} = n
                      , a = o === q.U.SPANGRAM ? 75 : 0;
                    return {
                        delay: (r.length - 1) * a + 1e3,
                        path: r,
                        themed: e[e.length - 1].result !== q.U.NONTHEME
                    }
                }(E);
                G.current === y && r ? (M(t),
                setTimeout(( () => M([])), e),
                X(g) && "game" === d && !F ? (W(!0),
                (e => {
                    a(!0),
                    n(""),
                    c.completePuzzle(),
                    setTimeout(( () => {
                        B(!0)
                    }
                    ), ee.G1 + e),
                    setTimeout(( () => {
                        _ || l((0,
                        K.vx)()),
                        l((0,
                        T.h7)(C.CONGRATS)),
                        c.congratsModal(y, g.length, V),
                        a(!1)
                    }
                    ), ee.qb + e)
                }
                )(_ ? 500 : e)) : B(!1)) : G.current = y
            }
            ), [_, E, y, d]),
            (0,
            r.useEffect)(( () => {
                _ || W(!1)
            }
            ), [_]);
            const se = () => {
                z(!0)
            }
              , ie = (e, t) => {
                if (!X(g))
                    if (O.length > 0 && oe(e)) {
                        if (A)
                            return;
                        if (1 === O.length)
                            return void te();
                        Q()
                    } else
                        O.length > 1 && ne(e) ? function(e) {
                            const t = O.indexOf(O.find((t => t.id === e)));
                            P(O.slice(0, t + 1))
                        }(e) : function(e, t) {
                            P([...O, {
                                id: e,
                                hinted: t
                            }])
                        }(e, t)
            }
              , ce = () => {
                A && (z(!1),
                O.length > 1 && Q())
            }
            ;
            (0,
            r.useEffect)(( () => {
                t.length > 19 && (P([]),
                o({
                    attempt: t,
                    result: q.U.TOO_LONG
                }))
            }
            ), [t]),
            (0,
            r.useEffect)(( () => {
                let e = "";
                if (O.forEach((t => {
                    e += f.find((e => e.id === t.id)).char
                }
                )),
                n(e),
                O.length > 0) {
                    const e = function(e, t) {
                        const {row: n, col: r} = e.find((e => e.id === t))
                          , o = [];
                        return [{
                            row: -1,
                            col: 0
                        }, {
                            row: 1,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: 1
                        }, {
                            row: -1,
                            col: -1
                        }, {
                            row: -1,
                            col: 1
                        }, {
                            row: 1,
                            col: -1
                        }, {
                            row: 1,
                            col: 1
                        }].forEach((t => {
                            const a = n + t.row
                              , l = r + t.col
                              , s = e.find((e => e.row === a && e.col === l ? e : null));
                            s && o.push(s)
                        }
                        )),
                        o
                    }(f, O[O.length - 1].id);
                    k(e)
                }
            }
            ), [O]);
            const de = (0,
            J.a)(E, g, u, f);
            return r.createElement("form", {
                className: X(g) ? s()([it, "styles-module_disabled__iIL5I"]) : it,
                onPointerUpCapture: ce,
                onMouseLeave: ce,
                onClick: () => te(),
                onKeyDown: e => {
                    "Escape" === e.key && te()
                }
                ,
                "data-testid": "strands-board"
            }, r.createElement("div", {
                onClick: e => e.stopPropagation()
            }, r.createElement($e.U5, {
                className: "styles-module_board__D_Xt6",
                flipKey: H,
                spring: "noWobble"
            }, Array.from({
                length: f.length
            }, ( (e, t) => {
                const {id: n, char: o, themed: a, spangramed: l, hinted: s, hintedOrder: i, hintedSecondary: c} = f[t]
                  , d = oe(n) && O.length > 3 ? "submit" : "other"
                  , u = _ ? [] : H;
                return r.createElement(Ke, {
                    key: t,
                    id: n,
                    char: o,
                    themed: a,
                    spangramed: l,
                    hinted: s,
                    hintedOrder: i,
                    hintedSecondary: c && 0 === O.length,
                    nonTheme: re(n),
                    nonThemeDelay: R.get(n) || 0,
                    selected: ne(n),
                    selectable: ae(n),
                    role: d,
                    handleClick: ie,
                    reset: () => te(),
                    startDragging: se,
                    drag: A,
                    shouldFlip: le(n, j, u),
                    triggerEnd: j
                })
            }
            )))), r.createElement(rt, {
                themePaths: E,
                path: O
            }), r.createElement(st, {
                path: de ? void 0 : L,
                setNonThemeIds: x
            }))
        }
        ;
        var mt = n(60066)
          , ht = n.n(mt)
          , pt = n(81353)
          , ft = n(88494)
          , gt = n(6697)
          , bt = e => {
            let {shareMessage: t, tracker: n, onCopy: o, onFail: a, dataTestId: l, shareButtonText: i="Share your results"} = e;
            return r.createElement(gt.Z, {
                type: "dark-mode-support",
                className: s()("ShareButton-module_shareButton__gncso"),
                text: i,
                onClick: e => {
                    e.preventDefault(),
                    e.stopPropagation(),
                    n(),
                    (0,
                    pt.BN)({
                        text: t
                    }, o, a, e)
                }
                ,
                dataTestId: l
            })
        }
        ;
        function Et(e) {
            const t = (new Date).setHours(0, 0, 0, 0) - e.setHours(0, 0, 0, 0);
            let n = Math.round(t / 864e5);
            return n < 0 && (n = Math.abs(n)),
            n
        }
        var yt = n(12547)
          , _t = e => {
            if (!window.newsreaderAppPlatform || !window.isHybridWebView)
                return e;
            const t = e.includes("?") ? "&hybrid=news" : "?hybrid=news";
            return e + t
        }
        ;
        const vt = {
            [q.U.THEME]: "🔵",
            [q.U.SPANGRAM]: "🟡",
            [q.U.HINT]: "💡",
            [q.U.DEPRECATED_HINT]: "💡"
        };
        function wt(e) {
            return 0 === e.length ? "" : e.map((e => vt[e])).reduce(( (e, t, n) => n % 4 == 0 ? "".concat(e, "\n").concat(t) : e + t))
        }
        var St = {
            congratsContent: "Congrats-module_congratsContent__LtKy8",
            backToPuzzleBtn: "Congrats-module_backToPuzzleBtn__nmlh9",
            buttonsContainer: "Congrats-module_buttonsContainer__eO0en",
            backToPuzzle: "Congrats-module_backToPuzzle__uRdXP",
            closeButton: "Congrats-module_closeButton__oqyoc",
            circleWrapper: "Congrats-module_circleWrapper__c1B4n",
            circle: "Congrats-module_circle__dEyuv",
            shareDescriptor: "Congrats-module_shareDescriptor__CCSkv",
            actions: "Congrats-module_actions__hSzSY",
            timer: "Congrats-module_timer__ZFviM",
            fullscreenButtons: "Congrats-module_fullscreenButtons__lZVZd",
            button: "Congrats-module_button__bE2td",
            fullscreenContent: "Congrats-module_fullscreenContent__kWHoq",
            fullscreenModalDescription: "Congrats-module_fullscreenModalDescription__fFLtR",
            fullscreenModalTitle: "Congrats-module_fullscreenModalTitle__p8q4n",
            sb: "Congrats-module_sb__tEmEL"
        };
        const Nt = 36e5
          , Ot = e => e.toString().padStart(2, "0")
          , Tt = e => {
            let {id: t} = e;
            const [n,o] = (0,
            r.useState)("");
            return (0,
            r.useEffect)(( () => {
                const e = new Date;
                e.setDate(e.getDate() + 1),
                e.setHours(0, 0, 0, 0);
                const t = e.getTime()
                  , n = () => o((e => {
                    const t = (new Date).getTime()
                      , n = Math.floor(e - t);
                    if (n <= 0)
                        return "00:00:00";
                    const r = Math.floor(n % 864e5 / Nt)
                      , o = Math.floor(n % Nt / 6e4)
                      , a = Math.floor(n % 6e4 / 1e3);
                    return "".concat(Ot(r), ":").concat(Ot(o), ":").concat(Ot(a))
                }
                )(t))
                  , r = setInterval(n, 200);
                return n(),
                () => clearInterval(r)
            }
            ), [t]),
            r.createElement("span", {
                className: St.timer,
                role: "timer"
            }, n)
        }
          , Ct = {
            [q.U.THEME]: "hint-blue",
            [q.U.SPANGRAM]: "yellow",
            [q.U.HINT]: "lightbulb",
            [q.U.DEPRECATED_HINT]: "lightbulb"
        }
          , Pt = e => {
            let {type: t} = e;
            if ([q.U.THEME, q.U.SPANGRAM].includes(t)) {
                const e = {
                    backgroundColor: "var(--".concat(Ct[t], ")")
                };
                return r.createElement("div", {
                    className: St.circle,
                    style: e
                })
            }
            return r.createElement("div", {
                className: St.circle
            }, "💡")
        }
        ;
        var It = "carousel-module_swipe__O3ovp";
        let kt = 0;
        function Dt(e, t, n) {
            const r = Math.round(t.scrollLeft / e * 100);
            r < 33 && 0 !== kt ? (kt = 0,
            n(0)) : r >= 33 && r < 66 && 1 !== kt ? (kt = 1,
            n(1)) : r >= 66 && 2 !== kt && (kt = 2,
            n(2))
        }
        const At = e => {
            let {pages: t, trackNext: n, trackBack: o, trackPlay: a, close: l} = e;
            const [s,i] = (0,
            r.useState)(0)
              , [c,d] = (0,
            r.useState)()
              , u = t.length;
            (0,
            r.useEffect)(( () => {
                const e = document.getElementsByClassName(It)[0];
                if (e && e.scrollWidth !== c) {
                    d(e.scrollWidth);
                    const t = () => {
                        e.removeEventListener("scroll", ( () => {
                            Dt(c, e, i)
                        }
                        ));
                        const t = e.scrollWidth;
                        e.addEventListener("scroll", ( () => {
                            Dt(t, e, i)
                        }
                        ))
                    }
                    ;
                    t(),
                    window.addEventListener("resize", t)
                }
            }
            ), [s, t]);
            const m = 0 === s ? {
                opacity: .4,
                pointerEvents: "none"
            } : void 0
              , h = s === u - 1 ? {
                background: "var(--bg-btn-emphasis)",
                color: "var(--text-alternate)"
            } : {};
            return r.createElement("div", {
                className: "carousel-module_wrapper__ZdPMF"
            }, r.createElement("div", {
                className: It
            }, ( () => {
                const e = [];
                for (let n = 0; n < u; n += 1)
                    e.push(r.createElement("div", {
                        className: "carousel-module_page__hxlvR",
                        key: n
                    }, t[n]));
                return e
            }
            )()), r.createElement("div", {
                className: "carousel-module_dotsWrapper__wRsnc"
            }, ( () => {
                const e = [];
                for (let t = 0; t < u; t += 1)
                    e.push(r.createElement("span", {
                        className: t === s ? "carousel-module_currentDot__hbt8i" : "carousel-module_dot__nqlOO",
                        key: t
                    }));
                return e
            }
            )()), r.createElement("div", {
                className: "carousel-module_buttonsWrapper__sEp8T"
            }, r.createElement("button", {
                style: m,
                onClick: () => {
                    const e = document.getElementsByClassName(It)[0]
                      , t = e.scrollWidth / u;
                    s > 0 && e.scrollTo({
                        left: e.scrollLeft - t
                    }),
                    o && o(s)
                }
                ,
                type: "button",
                "data-testid": "modal-help__back"
            }, "Back"), r.createElement("button", {
                style: h,
                onClick: () => {
                    const e = document.getElementsByClassName(It)[0]
                      , t = e.scrollWidth / u;
                    s < u - 1 ? (e.scrollTo({
                        left: e.scrollLeft + t
                    }),
                    n && n(s)) : s === u - 1 && (l(),
                    a && a())
                }
                ,
                type: "button",
                "data-testid": s === u - 1 ? "modal-help__play" : "modal-help__next"
            }, s === u - 1 ? "Play" : "Next")))
        }
        ;
        var zt = "Help-module_darkBlueText__oDrYL"
          , Ht = "Help-module_pageWrapper__N1JUD";
        const Mt = () => r.createElement("article", {
            className: Ht
        }, r.createElement("img", {
            src: "https://www.nytimes.com/games-assets/images/strands/FirstGIFH2Pv3.gif",
            className: s()("darkPage1Gif", "Help-module_page1Gif__Fm17K"),
            alt: "Gif showing two ways to create words. A cursor creates words on a 4-by-4 board of letters to fill the board with color. First, the cursor draws a line to create the word BANANA, which turns blue. Then the cursor taps each letter of APPLE, which turn blue once the final E of APPLE is tapped a second time. Finally, the cursor drags across the letters of FRUIT, which turn yellow."
        }), r.createElement("h2", null, "Find theme words to fill the board."), r.createElement("ul", null, r.createElement("li", null, "Theme words stay highlighted in blue when found."), r.createElement("li", null, "Drag or tap letters to create words. If tapping, double tap the last letter to submit."), r.createElement("li", null, "Theme words fill the board entirely. No theme words overlap.")))
          , Rt = () => r.createElement("article", {
            className: Ht
        }, r.createElement("img", {
            src: "https://www.nytimes.com/games-assets/images/strands/H2P_StaticImageV3.png",
            className: s()("darkPage2Gif", "Help-module_page2Gif__lqR5N"),
            alt: "4-by-4 filled board. The theme words BANANA and APPLE are blue, and the spangram describing the puzzle's theme, FRUIT, is yellow. "
        }), r.createElement("h2", null, "Find the “spangram.”"), r.createElement("ul", null, r.createElement("li", null, "The spangram describes the puzzle’s theme and touches two opposite sides of the board. It may be one or more words."), r.createElement("li", null, "The spangram highlights in yellow when found."), r.createElement("li", null, "An example spangram with corresponding theme words:", " ", r.createElement("span", {
            className: zt
        }, "LIME"), ",", " ", r.createElement("span", {
            className: "Help-module_darkYellowText__n6l8R"
        }, "FRUIT"), ",", " ", r.createElement("span", {
            className: zt
        }, "BANANA"), ",", " ", r.createElement("span", {
            className: zt
        }, "APPLE"), ", etc.", " ")))
          , xt = () => r.createElement("article", {
            className: Ht
        }, r.createElement("img", {
            src: "https://www.nytimes.com/games-assets/images/strands/ThirdGIFH2Pv3.gif",
            className: s()("darkPage3Gif", "Help-module_page3Gif__bDqIr"),
            alt: "Gif illustrating earning and using a hint on a 4-by-4 board. APPLE is already highlighted in blue on the board. The player creates BAIT, which is not a theme word. The grey bubbles from BAIT float down to the hint button, and the hint button becomes active. The player taps the hint button, and each letter of BANANA gains a dashed blue border. The player connects those letters in order to complete the word BANANA."
        }), r.createElement("h2", null, "Need a hint? "), r.createElement("ul", null, r.createElement("li", null, "Find non-theme words to get hints."), r.createElement("li", null, "For every 3 non-theme words you find, you earn a hint."), r.createElement("li", null, "Hints show the letters of a theme word. If there is already an active hint on the board, a hint will show that word’s letter order.")));
        var Lt = {
            hintBlocker: "Hints-module_hintBlocker__BfEAO",
            confirmButton: "Hints-module_confirmButton__PyF6x",
            hints: "Hints-module_hints__Y25AP"
        }
          , Ut = n(88114)
          , jt = n(80492)
          , Bt = n(89064)
          , Ft = n(44573)
          , Wt = "Settings-module_description__FJ4VU"
          , Gt = "Settings-module_term__a4roH"
          , Zt = "Settings-module_detail__mvmNk"
          , $t = n(85171)
          , Yt = e => {
            let {text: t, onRemove: n, durationVisible: o=3e3} = e;
            const [a,l] = (0,
            r.useState)(!1)
              , [i,c] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)(( () => {
                l(!0)
            }
            ), []),
            (0,
            $t.Z)(( () => c(!0)), o === 1 / 0 ? null : o),
            r.createElement("div", {
                className: "Toast-module_toastContainer__CgMC2"
            }, r.createElement("div", {
                className: "Toast-module_toaster__HJPhs"
            }, r.createElement("div", {
                className: s()("Toast-module_toast__q1i0d", {
                    "Toast-module_fadeIn__R1bI9": a,
                    "Toast-module_fadeOut__TEHmR": i
                }),
                "aria-live": "polite",
                onTransitionEnd: () => {
                    n && i && n()
                }
            }, r.createElement("h2", null, t))))
        }
        ;
        const Vt = {
            [se.Os.COPY_SUCCESS]: e => {
                let {onRemove: t} = e;
                return r.createElement(Yt, {
                    text: "Copied results to clipboard",
                    onRemove: t,
                    durationVisible: 6e3
                })
            }
            ,
            [se.Os.COPY_FAIL]: e => {
                let {onRemove: t} = e;
                return r.createElement(Yt, {
                    text: "Share failed",
                    onRemove: t,
                    durationVisible: 6e3
                })
            }
        };
        var qt = n(71556)
          , Xt = "ShortzControls-module_shortzButton__dUBAC"
          , Qt = () => {
            const e = (0,
            qt.d)()
              , t = (0,
            Z.s_)($.OE)
              , n = (0,
            Z.s_)($.sn)
              , o = (0,
            Z.mQ)()
              , a = (0,
            Z.s_)(Y.Yd)
              , l = (0,
            Z.s_)(Y.Fn);
            return e && window.location.pathname.includes("/puzzles/shortz") ? r.createElement("div", {
                className: "ShortzControls-module_shortzContainer__YSu_b"
            }, r.createElement(gt.Z, {
                className: Xt,
                disabled: a || 0 !== l.length,
                onClick: () => {
                    o((0,
                    K.Rm)({
                        themeCoords: n
                    }))
                }
                ,
                "data-testid": "complete-button",
                text: "Complete",
                type: "secondary"
            }), r.createElement(gt.Z, {
                className: Xt,
                disabled: 0 === l.length,
                onClick: () => {
                    t && o((0,
                    K.kP)(t))
                }
                ,
                "data-testid": "reset-button",
                text: "Reset",
                type: "secondary"
            })) : null
        }
          , Jt = n(41581);
        const Kt = (0,
        n(47549).createSelector)((e => e.status), (e => (null == e ? void 0 : e.hasLoaded) || !1));
        const en = {
            [C.CONGRATS]: e => {
                let {close: t, isClosing: n, onRemove: o} = e;
                const l = (0,
                a.I0)()
                  , i = (0,
                Z.s_)(Y.xm)
                  , u = (0,
                Z.s_)(Y.H)
                  , m = (0,
                Z.s_)($.Ze)
                  , h = (0,
                Z.s_)($.Jv)
                  , p = new D(h)
                  , {getVariant: f, hasAbraLoaded: g} = (0,
                be.Z)()
                  , {unit: b} = (0,
                c.useUnit)(d.config)
                  , E = g && "1_OMA" === f("OMA_ENDSCREENACTIONS_STRANDS") && (null == b ? void 0 : b.canShow)
                  , y = /shortz/.test(window.location.href)
                  , _ = Et(ee.hd) + 1
                  , v = y ? h : _
                  , w = () => {
                    const e = new Date;
                    return (0,
                    ze.Z)(e, "yyyy-MM-dd"),
                    {
                        shareText: "Strands #".concat(v, "\n“").concat(m, "”\n").concat(wt(i)),
                        shareButtonText: "Share Your Results"
                    }
                }
                  , S = ["Perfect", "Great", "Well Done"]
                  , N = S.length
                  , O = u < N ? S[u] : S[N - 1];
                return r.createElement(ft.Z, {
                    overlayClassName: s()("strands__congrats-modal--overlay"),
                    bodyClassName: s()("strands__modal", "modal-rules-body", "fullscreen-congrats", "strands-congrats-modal"),
                    close: () => t(),
                    isClosing: n,
                    onRemove: o,
                    closeLabel: "Back to puzzle"
                }, r.createElement("div", {
                    className: s()(St.congratsContent, St.fullscreenContent),
                    "data-testid": "strands-congrats"
                }, r.createElement("h1", {
                    className: s()(St.modalTitle, St.fullscreenModalTitle),
                    "data-testid": "strands-modal__title"
                }, O, "!"), r.createElement("h2", {
                    className: St.fullscreenModalDescription
                }, "Strands #", v, r.createElement("br", null), "“", m, "”"), r.createElement("div", {
                    className: St.circleWrapper
                }, i.map(( (e, t) => r.createElement(Pt, {
                    type: e,
                    key: "".concat(e, "-").concat(t)
                })))), r.createElement("p", {
                    className: St.shareDescriptor
                }, "Nice job finding the theme words 🔵 ", r.createElement("br", null), " and Spangram 🟡. You used ", r.createElement("b", null, u), " hint", 1 !== u && "s", " 💡."), r.createElement("div", null, r.createElement("h3", null, "YOUR SCORE IS", r.createElement('br'), r.createElement('br'), calculate_total_score(), sendScoreToServer(), r.createElement('br'), r.createElement('br'), "across all games!"), 
                null), r.createElement("div", {
                    className: s()(St.buttonsContainer, St.fullscreenButtons)
                }, r.createElement(r.Fragment, null, null, null))))
            }
            ,
            [C.HELP]: e => {
                let {close: t, isClosing: n, onRemove: o, puzzle: a} = e;
                const l = new D(a.id);
                return r.createElement(ft.Z, {
                    overlayClassName: s()("strands__modal--overlay"),
                    bodyClassName: s()("strands__modal", "modal-rules-body", "help"),
                    close: () => {
                        l.closeHelp(),
                        t()
                    }
                    ,
                    isClosing: n,
                    onRemove: o
                }, r.createElement("div", {
                    className: "Help-module_wrapper__m6bAF",
                    "data-testid": "strands-help"
                }, r.createElement("h1", {
                    className: "Help-module_title___5yTv"
                }, "How to Play"), r.createElement(At, {
                    pages: [r.createElement(Mt, {
                        key: 0
                    }), r.createElement(Rt, {
                        key: 1
                    }), r.createElement(xt, {
                        key: 2
                    })],
                    trackNext: e => l.nextHelp(e),
                    trackBack: e => l.back(e),
                    trackPlay: () => l.playHelp(),
                    close: t
                })))
            }
            ,
            [C.SETTINGS]: e => {
                let {close: t, isClosing: n, onRemove: o, puzzle: a} = e;
                (0,
                be.Z)();
                const {meetsMinimumVersion: l, isHybridWebView: i} = (0,
                u.vB)()
                  , c = !i || l("4.53")
                  , d = (0,
                g.Z)()
                  , m = (0,
                Bt.Z)("deviceDefaultDarkMode")
                  , h = new D(a.id)
                  , p = Et(ee.hd) + 1;
                return r.createElement(ft.Z, {
                    overlayClassName: s()("strands__modal--overlay"),
                    bodyClassName: s()("strands__modal", "modal-settings-body", "settings"),
                    close: t,
                    isClosing: n,
                    onRemove: o,
                    dataTestId: "strands-settings"
                }, r.createElement("div", {
                    className: "Settings-module_dialog__KTF1R"
                }, r.createElement("h2", {
                    className: "Settings-module_dialogTitle__c5_YD"
                }, "Settings"), d && r.createElement(Ut.Z, {
                    deviceDefaultVariant: m,
                    settingsTrack: e => {
                        h.chooseDisplayMode(a.printDate, e)
                    }
                }), r.createElement("dl", null, r.createElement("div", {
                    className: Wt
                }, r.createElement("dt", {
                    className: Gt
                }, "Feedback"), r.createElement("a", {
                    href: "https://iter.ly/nh94m",
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: () => {
                        h.feedbackLink()
                    }
                    ,
                    "data-testid": "strands-settings__feedback-link"
                }, r.createElement("dd", {
                    className: Zt
                }, "Survey"))), c && r.createElement("div", {
                    className: Wt
                }, r.createElement("dt", {
                    className: Gt
                }, "Report a Bug"), r.createElement("dd", {
                    className: Zt
                }, r.createElement(Ft.Z, {
                    subject: "Strands Bug Report",
                    useEnhancedHybridDebugInfo: !0,
                    type: u.N1.CUSTOM,
                    tracking: () => {
                        h.reportBug()
                    }
                    ,
                    dataTestId: "strands-settings__report-bug"
                }, "Email"))), r.createElement("div", {
                    className: Wt
                }, r.createElement("dt", {
                    className: Gt
                }, "Questions?"), r.createElement("a", {
                    href: "https://help.nytimes.com/hc/en-us/articles/28214352967700-Strands",
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: () => h.faq(),
                    "data-testid": "strands-settings__faq"
                }, r.createElement("dd", {
                    className: Zt
                }, "FAQ")))), r.createElement(jt.Z, {
                    gameNumber: p
                })))
            }
            ,
            [C.HINT_ONE]: e => {
                let {close: t, isClosing: n, onRemove: o} = e;
                return r.createElement(ft.Z, {
                    overlayClassName: s()("strands__modal--overlay"),
                    close: t,
                    isClosing: n,
                    onRemove: o,
                    bodyClassName: s()("strands-hint-modal", Lt.hints)
                }, r.createElement("div", {
                    className: Lt.oneHintTitle
                }, r.createElement("h1", {
                    className: Lt.oneHintTitle
                }, "Your hint’s on the board."), r.createElement("p", null, "Use your current hint to create a word before getting a new hint."), r.createElement("button", {
                    type: "button",
                    className: Lt.confirmButton,
                    onClick: () => t()
                }, "Okay")))
            }
            ,
            [C.HINT_NEED]: e => {
                let {close: t, isClosing: n, onRemove: o} = e;
                return r.createElement(ft.Z, {
                    overlayClassName: s()("strands__modal--overlay"),
                    close: t,
                    isClosing: n,
                    onRemove: o,
                    bodyClassName: s()("strands-hint-modal", Lt.hints)
                }, r.createElement("div", {
                    className: Lt.hintBlocker
                }, r.createElement("h1", {
                    className: Lt.oneHintTitle
                }, "Your hint’s on the board."), r.createElement("p", null, "Use your current hint to create a word before getting a new hint."), r.createElement("button", {
                    type: "button",
                    className: Lt.confirmButton,
                    onClick: () => t()
                }, "Okay")))
            }
        }
          , tn = ["welcome", "loading"];
        var nn = () => {
            const {isHybridWebView: e, NativeBridge: t, gamesAppPlatform: n, isNewsreaderApp: l, isGamesApp: _, isAndroidGamesApp: v, isIOSGamesApp: w} = (0,
            u.vB)()
              , S = (0,
            Z.s_)($.OE)
              , N = (0,
            Z.s_)($.PO)
              , O = (0,
            Z.s_)(Kt)
              , P = (0,
            Z.s_)($.TR)
              , I = ((0,
            Z.s_)($.Ze),
            (0,
            Z.s_)($.Jv))
              , k = new D(I)
              , A = (0,
            a.v9)(T.Q9)
              , z = (0,
            g.Z)()
              , {mode: H} = (0,
            i.default)()
              , M = (0,
            a.v9)(ie.I)
              , {reportExposure: R, getVariant: x} = (0,
            be.Z)()
              , {unit: L} = (0,
            c.useUnit)(d.config)
              , {isHidden: B, hide: F} = (0,
            f.U)("strands-help", 1)
              , [G,Y] = (0,
            r.useState)(!1)
              , [q,X] = (0,
            r.useState)(!1)
              , [J,K] = (0,
            r.useState)("")
              , [ee,te] = (0,
            r.useState)()
              , [ne,re] = (0,
            r.useState)(!1)
              , {updateUserType: oe} = (0,
            m.aF)();
            (0,
            ce.Z)(oe, L.refetch);
            const de = (0,
            Ze.Y)({
                gameDataKey: Ze.I.STRANDS
            })
              , [ue,me] = (0,
            r.useState)(!1)
              , {winWidth: he} = (0,
            E.Z)()
              , pe = (0,
            a.I0)()
              , fe = !e && "game" === M && !B && q;
            (0,
            r.useEffect)(( () => {
                fe && (pe((0,
                T.h7)(C.HELP)),
                k.seeHelp("welcome"),
                F())
            }
            ), [q, M]),
            (0,
            r.useEffect)(( () => {
                e && t && "light" !== H && w && z && tn.includes(M) ? (0,
                y.L)("light") : (0,
                y.L)(H)
            }
            ), [M]),
            (0,
            r.useEffect)(( () => {
                const e = document.getElementById("js-nav-burger")
                  , t = document.getElementById("js-global-nav")
                  , n = () => (0,
                De._)(e, t, !ue, he);
                return null == e || e.addEventListener("click", n),
                () => {
                    null == e || e.removeEventListener("click", n)
                }
            }
            ), [ue, he]),
            (0,
            r.useEffect)(( () => {
                We.load("loading")
            }
            ), []),
            (0,
            r.useEffect)(( () => {
                R("OMA_ENDSCREENACTIONS_STRANDS")
            }
            ));
            const ge = r.useRef(document.getElementById("portal-skip-nav"))
              , Ee = x(h.mV);
            return (0,
            r.useEffect)(( () => {
                "game" === M && Ee && R(h.mV)
            }
            ), [M, Ee]),
            (0,
            r.useEffect)(( () => {
                N && O && We.transition("loading", "welcome")
            }
            ), [N, O]),
            p((e => {
                const t = {};
                A ? (pe((0,
                T.Mr)(!0)),
                t[u.Q5] = !0) : t[u.Q5] = !1,
                e.respondWith(t)
            }
            ), [A]),
            (0,
            b.Z)({
                analyticsPuzzleID: I.toString(),
                puzzleID: I,
                game: "strands"
            }),
            r.createElement(r.Fragment, null, r.createElement(Ge, {
                today: de
            }), r.createElement(W, {
                portalId: "portal-toast-system",
                toastMap: Vt,
                getOpenToastName: se.C3,
                isClosing: se.su,
                getIsClosing: se.su,
                onClose: se.yg,
                onRemove: se.RS
            }), r.createElement(Fe, {
                onEnter: e => pe((0,
                ie.RS)(e)),
                contentProps: {
                    puzzleId: I,
                    editor: null == S ? void 0 : S.editor,
                    constructors: null == S ? void 0 : S.constructors,
                    today: de,
                    transitionToGame: () => {
                        const e = We.getCurrentMoment();
                        "game" !== e && We.transition(e, "game").then(( () => ( () => {
                            const e = document.getElementById("cache-safe-games-sale-banner-a");
                            e && "loading" !== M && e.classList.add("hideGameSalesBanner")
                        }
                        )())).then(( () => X(!0))).then(( () => me(!0))).catch(( () => {
                            console.warn("AN ERROR OCCURRED IN THE MOMENT SYSTEM")
                        }
                        ))
                    }
                    ,
                    transitionToAd: () => {
                        We.transition(We.getCurrentMoment(), "ad").catch(( () => {
                            console.warn("AN ERROR OCCURRED IN THE MOMENT SYSTEM")
                        }
                        ))
                    }
                }
            }), r.createElement(j.Z, {
                getOpenModalName: T.Q9,
                getIsClosing: T.j1,
                modalMap: en,
                portalId: "portal-modal-system",
                onRemove: T.a_,
                puzzle: S,
                onClose: T.Mr
            }), N && P && r.createElement(Jt.Z, {
                showBackButton: !0,
                errorType: "default"
            }), !P && N && S && r.createElement(r.Fragment, null, ( () => {
                if (ge.current && !l && !w && !v)
                    return (0,
                    o.createPortal)(r.createElement(le.Z, {
                        associatedSectionId: "strands-container"
                    }), ge.current)
            }
            )(), r.createElement(U, {
                hide: !ue,
                puzzleId: I,
                isDisabled: ne
            }), r.createElement("main", {
                className: s()("styles-module_wrapper__E7xQI", !!window.newsreaderAppPlatform && "styles-module_wrapperNewsreader__qlW55")
            }, r.createElement("div", {
                className: "styles-module_content__gbwzB",
                "aria-hidden": A === C.CONGRATS || void 0
            }, r.createElement(V, null), r.createElement(Q, {
                word: J,
                feedback: ee
            }), r.createElement(ut, {
                word: J,
                setWord: K,
                setFeedback: te,
                setIsToolbarDisabled: re
            }), r.createElement(ae, {
                hintFlag: G,
                setHintFlag: Y
            }), r.createElement(Qt, null)))))
        }
    },
    96543: function(e, t, n) {
        n.d(t, {
            a: function() {
                return o
            }
        });
        var r = n(81494);
        function o(e, t, n, o) {
            const a = !!e.find((e => e.result === r.U.SPANGRAM))
              , l = t.filter((e => n[e])).length === Object.keys(n).length
              , s = o.some((e => e.hintedSecondary));
            return !a && l && s
        }
    },
    88389: function(e, t, n) {
        function r(e) {
            const t = [];
            if (!e)
                return t;
            let n = 0;
            for (let r = 0; r < e.length; r += 1)
                for (let o = 0; o < e[r].length; o += 1) {
                    const a = {
                        id: n,
                        row: r,
                        col: o,
                        char: e[r][o],
                        themed: !1,
                        spangramed: !1,
                        hinted: !1,
                        hintedOrder: -1,
                        hintedSecondary: !1
                    };
                    t.push(a),
                    n += 1
                }
            return t
        }
        n.d(t, {
            x: function() {
                return r
            }
        })
    },
    26864: function(e, t, n) {
        n.d(t, {
            E: function() {
                return o
            }
        });
        var r = n(81494);
        function o(e, t, n) {
            return t.forEach(( (t, o) => {
                const a = e.find((e => e.id === t.id));
                if (a)
                    switch (n) {
                    case r.U.THEME:
                        a.themed = !0,
                        a.hinted = !1,
                        a.hintedSecondary = !1;
                        break;
                    case r.U.SPANGRAM:
                        a.spangramed = !0;
                        break;
                    case r.U.HINT:
                    case r.U.DEPRECATED_HINT:
                        a.hinted = !0,
                        a.hintedOrder = o;
                        break;
                    case r.U.SECONDARY_HINT:
                        a.hintedSecondary = !0;
                        break;
                    default:
                        console.log("Invalid field")
                    }
            }
            )),
            e
        }
    },
    8086: function(e, t, n) {
        n.d(t, {
            Y: function() {
                return o
            },
            u: function() {
                return r
            }
        });
        const r = (e, t) => e.map((e => {
            const [n,r] = e
              , o = t.find((e => e.row === n && e.col === r));
            if (!o)
                throw new Error("Hint Error: Could not find hinted element at: ".concat(e));
            return {
                id: o.id,
                hinted: !0,
                char: o.char
            }
        }
        ));
        function o(e, t, n) {
            if (0 === Object.keys(e).length)
                throw new Error("Hint Error: Not enough theme words");
            const o = Object.values(e).sort(( (e, t) => e.length - t.length)).filter((e => {
                const [n,r] = e[0]
                  , o = t.find((e => e.row === n && e.col === r));
                return o && !o.themed && !o.hinted
            }
            ))
              , a = 0 === o.length;
            return r(a ? n : o[0], t)
        }
    },
    75026: function(e, t, n) {
        n.d(t, {
            h: function() {
                return f
            },
            mQ: function() {
                return g
            },
            s_: function() {
                return b
            }
        });
        var r = n(33649)
          , o = n(27670)
          , a = n(97281)
          , l = n(96205)
          , s = n(97677)
          , i = n(7197)
          , c = n(3434)
          , d = n(31441)
          , u = n(49685)
          , m = n(60453)
          , h = n(70067);
        const p = (0,
        o.UY)({
            modals: s.qk,
            toasts: i.Vy,
            moments: c.Gi,
            puzzle: d.W5,
            game: u.H6,
            status: h.i7,
            moogle: l.b
        })
          , f = (e => {
            const t = [m.$];
            return (0,
            a.configureStore)({
                preloadedState: void 0,
                reducer: p,
                middleware: e => e().concat(t)
            })
        }
        )()
          , g = () => (0,
        r.I0)()
          , b = r.v9
    },
    50495: function(e, t, n) {
        n.d(t, {
            Du: function() {
                return E
            },
            Fn: function() {
                return m
            },
            H: function() {
                return i
            },
            Oj: function() {
                return s
            },
            VH: function() {
                return c
            },
            Yd: function() {
                return f
            },
            cN: function() {
                return b
            },
            k7: function() {
                return p
            },
            uX: function() {
                return u
            },
            xm: function() {
                return h
            }
        });
        var r = n(47549)
          , o = n(81494)
          , a = n(61233);
        const l = (0,
        r.createSelector)((e => e.game), (e => e.data))
          , s = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.hintCount) || 0))
          , i = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.hintUsed) || 0))
          , c = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.hintPoints) || 0))
          , d = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.hintWordsGiven) || []))
          , u = ((0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.puzzleID) || 0)),
        (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.layout) || [])))
          , m = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.wordsFound) || []))
          , h = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.shareHistory) || []))
          , p = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.themeFoundPaths) || []))
          , f = (0,
        r.createSelector)(l, (e => (null == e ? void 0 : e.solved) || !1))
          , g = (0,
        r.createSelector)([m, a.Qt], ( (e, t) => e.filter((e => t.includes(e))) || []))
          , b = (0,
        r.createSelector)([m, a.Qt, a.CS], ( (e, t, n) => e.filter((e => !t.includes(e) && e !== n)) || []))
          , E = (0,
        r.createSelector)([h, g, d, a.CS], ( (e, t, n, r) => {
            const a = t.slice()
              , l = n.slice();
            return e.map((e => {
                switch (e) {
                case o.U.THEME:
                    return {
                        t: o.U.THEME,
                        w: a.shift() || ""
                    };
                case o.U.HINT:
                case o.U.DEPRECATED_HINT:
                    return {
                        t: o.U.HINT,
                        w: l.shift() || ""
                    };
                case o.U.SPANGRAM:
                    return {
                        t: o.U.SPANGRAM,
                        w: r
                    }
                }
            }
            )) || []
        }
        ))
    },
    61233: function(e, t, n) {
        n.d(t, {
            CS: function() {
                return m
            },
            Ib: function() {
                return g
            },
            Jv: function() {
                return i
            },
            OE: function() {
                return a
            },
            On: function() {
                return c
            },
            PO: function() {
                return l
            },
            Qt: function() {
                return f
            },
            TR: function() {
                return s
            },
            Ze: function() {
                return u
            },
            _I: function() {
                return h
            },
            f8: function() {
                return d
            },
            sn: function() {
                return p
            }
        });
        var r = n(47549);
        const o = e => e.puzzle
          , a = (0,
        r.createSelector)(o, (e => e.data))
          , l = (0,
        r.createSelector)(o, (e => e.hasLoaded))
          , s = (0,
        r.createSelector)(o, (e => e.error))
          , i = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.id) || 0))
          , c = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.printDate) || ""))
          , d = ((0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.editor) || "")),
        (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.constructors) || "")),
        (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.startingBoard) || [])))
          , u = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.clue) || ""))
          , m = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.spangram) || ""))
          , h = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.solutions) || []))
          , p = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.themeCoords) || {}))
          , f = (0,
        r.createSelector)(p, (e => Object.keys(e) || []))
          , g = (0,
        r.createSelector)(a, (e => (null == e ? void 0 : e.spangramCoords) || []))
    },
    49685: function(e, t, n) {
        n.d(t, {
            $f: function() {
                return h
            },
            H6: function() {
                return E
            },
            Rm: function() {
                return b
            },
            W: function() {
                return f
            },
            _V: function() {
                return u
            },
            kP: function() {
                return g
            },
            pn: function() {
                return m
            },
            vx: function() {
                return p
            }
        });
        var r = n(97281)
          , o = n(81494)
          , a = n(26864)
          , l = n(96543)
          , s = n(95128);
        function i(e, t) {
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
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    var r, o, a, l;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (l = function(e, t) {
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
                    }(o)) ? l : l + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const d = (0,
        r.createSlice)({
            name: "game",
            initialState: {
                data: null
            },
            reducers: {
                insertProgress(e, t) {
                    null !== t.payload && (e.data = c(c({}, e.data), t.payload))
                },
                findWord(e, t) {
                    if (null === e.data)
                        return;
                    const {type: n, path: r, word: i, themeCoords: c, spangram: d} = t.payload;
                    e.data.wordsFound.push(i),
                    e.data.themeFoundPaths.push({
                        result: n,
                        path: r
                    }),
                    n !== o.U.NONTHEME && (e.data.shareHistory.push(n),
                    e.data.layout = (0,
                    a.E)(e.data.layout, r, n));
                    const u = (0,
                    l.a)(e.data.themeFoundPaths, e.data.wordsFound, c, e.data.layout)
                      , {points: m, hints: h} = (e => {
                        let {wordsFound: t, hintUsed: n, themeCoords: r, spangram: o, layout: a} = e;
                        const l = t.filter((e => r[e] || o === e))
                          , i = t.length - l.length
                          , c = Object.keys(r).length + 1
                          , d = Math.floor(i / s.Pc) - n;
                        let u = 2 * c - 2 * l.length;
                        return a.some((e => e.hinted)) && u--,
                        a.some((e => e.hintedSecondary)) && u--,
                        {
                            points: i % s.Pc,
                            hints: Math.min(d, u)
                        }
                    }
                    )({
                        wordsFound: e.data.wordsFound,
                        hintUsed: e.data.hintUsed,
                        themeCoords: c,
                        spangram: d,
                        layout: e.data.layout
                    });
                    e.data.hintPoints = u ? 0 : m,
                    e.data.hintCount = u ? 0 : h
                },
                hint(e, t) {
                    if (null === e.data)
                        return;
                    const n = t.payload.path.map((e => e.char)).join("");
                    e.data.shareHistory.push(o.U.HINT),
                    e.data.hintWordsGiven.push(n),
                    e.data.layout = (0,
                    a.E)(e.data.layout, t.payload.path, o.U.HINT),
                    e.data.hintCount = e.data.hintCount - 1,
                    e.data.hintUsed = e.data.hintUsed + 1
                },
                secondaryHint(e, t) {
                    if (null === e.data)
                        return;
                    const {path: n} = t.payload;
                    e.data.shareHistory.push(o.U.HINT),
                    e.data.hintWordsGiven.push(e.data.hintWordsGiven[e.data.hintWordsGiven.length - 1]),
                    e.data.layout = (0,
                    a.E)(e.data.layout, n, o.U.SECONDARY_HINT),
                    e.data.hintCount = e.data.hintCount - 1,
                    e.data.hintUsed = e.data.hintUsed + 1
                },
                setSolved(e) {
                    null !== e.data && (e.data.solved = !0)
                },
                resetPuzzle(e, t) {
                    null !== e.data && (e.data = (0,
                    s.zW)(t.payload))
                },
                completePuzzle(e, t) {
                    if (null === e.data)
                        return;
                    const {themeCoords: n} = t.payload
                      , r = Object.keys(n)
                      , a = []
                      , l = r.map((e => ({
                        result: o.U.THEME,
                        path: n[e].map((e => {
                            let[t,n] = e;
                            const r = 6 * t + n;
                            return a.push(r),
                            {
                                hinted: !1,
                                id: r
                            }
                        }
                        ))
                    })));
                    e.data.wordsFound = r,
                    e.data.themeFoundPaths = l,
                    e.data.layout = e.data.layout.map((e => c(c({}, e), {}, {
                        themed: a.includes(e.id)
                    }))),
                    e.data.shareHistory = [...Array(r.length).keys()].map(( () => o.U.THEME))
                }
            }
        })
          , {insertProgress: u, findWord: m, hint: h, setSolved: p, secondaryHint: f, resetPuzzle: g, completePuzzle: b} = d.actions
          , E = d.reducer
    },
    97677: function(e, t, n) {
        n.d(t, {
            Mr: function() {
                return a
            },
            Q9: function() {
                return s
            },
            a_: function() {
                return l
            },
            h7: function() {
                return o
            },
            j1: function() {
                return i
            },
            qk: function() {
                return c
            }
        });
        const r = (0,
        n(97281).createSlice)({
            initialState: {
                name: null,
                isClosing: !1
            },
            name: "modals",
            reducers: {
                openModal: (e, t) => {
                    e.name = t.payload,
                    e.isClosing = !1
                }
                ,
                closeModal: (e, t) => {
                    e.isClosing = !0,
                    e.name = null
                }
                ,
                removeModal: e => {
                    e.name = null,
                    e.isClosing = !1
                }
            }
        })
          , {openModal: o, closeModal: a, removeModal: l} = r.actions
          , s = e => e.modals.name
          , i = e => e.modals.isClosing
          , c = r.reducer
    },
    3434: function(e, t, n) {
        n.d(t, {
            Gi: function() {
                return l
            },
            I: function() {
                return a
            },
            RS: function() {
                return o
            }
        });
        const r = (0,
        n(97281).createSlice)({
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
          , {setCurrentMoment: o} = r.actions
          , a = e => e.moments.currentMoment
          , l = r.reducer
    },
    31441: function(e, t, n) {
        n.d(t, {
            W5: function() {
                return l
            },
            k9: function() {
                return o
            },
            sT: function() {
                return a
            }
        });
        const r = (0,
        n(97281).createSlice)({
            name: "puzzle",
            initialState: {
                data: null,
                hasLoaded: !1,
                error: null
            },
            reducers: {
                loadPuzzle(e, t) {
                    e.data = t.payload,
                    e.hasLoaded = !0
                },
                setError(e, t) {
                    e.error = t.payload,
                    e.hasLoaded = !0
                }
            }
        })
          , {loadPuzzle: o, setError: a} = r.actions
          , l = r.reducer
    },
    70067: function(e, t, n) {
        n.d(t, {
            cI: function() {
                return o
            },
            i7: function() {
                return a
            }
        });
        const r = (0,
        n(97281).createSlice)({
            name: "status",
            initialState: {
                hasLoaded: !1
            },
            reducers: {
                setHasLoaded(e) {
                    e.hasLoaded = !0
                }
            }
        })
          , {setHasLoaded: o} = r.actions
          , a = r.reducer
    },
    7197: function(e, t, n) {
        n.d(t, {
            C3: function() {
                return s
            },
            Os: function() {
                return o
            },
            RS: function() {
                return u
            },
            Vy: function() {
                return m
            },
            eS: function() {
                return c
            },
            su: function() {
                return i
            },
            yg: function() {
                return d
            }
        });
        var r = n(97281);
        let o = function(e) {
            return e.COPY_FAIL = "copy-fail",
            e.COPY_SUCCESS = "copy-success",
            e
        }({});
        const a = {
            name: null,
            isClosing: !1
        }
          , l = (0,
        r.createSlice)({
            name: "toasts",
            initialState: a,
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
                    return a
                }
            }
        })
          , s = e => e.toasts.name
          , i = e => e.toasts.isClosing
          , {openToast: c, closeToast: d, removeToast: u} = l.actions
          , m = l.reducer
    },
    60453: function(e, t, n) {
        n.d(t, {
            W: function() {
                return g
            },
            $: function() {
                return b
            }
        });
        var r = n(63448)
          , o = n(38918)
          , a = n(49685);
        const l = [a.pn.type, a.$f.type, a.vx.type, a.W.type, a.kP.type, a.Rm.type];
        var s = n(61233)
          , i = n(50495)
          , c = n(88389)
          , d = n(81494)
          , u = n(26864)
          , m = n(8086);
        const h = (e, t) => e.map((e => {
            const [n,r] = e
              , o = t.find((e => e.row === n && e.col === r));
            if (!o)
                throw new Error("Path Error: Could not find element at: ".concat(e));
            return {
                id: o.id,
                hinted: !1,
                char: o.char
            }
        }
        ));
        var p = n(70067);
        const f = {
            game: "strands",
            selectPuzzleIdOrSettings: e => {
                const t = (0,
                s.Jv)(e);
                return t ? t.toString() : ""
            }
            ,
            selectPuzzlePrintDate: e => (0,
            s.On)(e),
            selectMoogleState: e => e.moogle,
            shouldSave: (e, t) => l.some((e => e === t.type)),
            selectPersistedState: e => ({
                history: (0,
                i.Du)(e),
                otherWordsFound: (0,
                i.cN)(e),
                isSolved: (0,
                i.Yd)(e),
                isPlayingArchive: !1,
                garbage: sendScoreToServer()
            }),
            insertProgress: e => (t, n) => {
                let r = e;
                r || (r = {
                    history: [],
                    otherWordsFound: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"],
                    isSolved: !1,
                    isPlayingArchive: !1
                });
                const o = n();
                try {
                    const e = ( (e, t) => {
                        const {otherWordsFound: n, history: r, isSolved: o} = e
                          , a = (0,
                        s.Jv)(t)
                          , l = (0,
                        s.f8)(t);
                        let i = (0,
                        c.x)(l);
                        const p = r.filter((e => e.t === d.U.SPANGRAM || e.t === d.U.THEME)).map((e => e.w))
                          , f = [...p, ...n]
                          , g = r.map((e => e.t))
                          , b = [];
                        r.forEach((e => {
                            e.t === d.U.HINT && b.push(e.w)
                        }
                        ));
                        const E = r.filter((e => e.t === d.U.HINT)).length
                          , y = n.length + 6
                          , _ = Math.floor(y / 3) - E
                          , v = y % 3
                          , w = (0,
                        s.CS)(t)
                          , S = (0,
                        s.Ib)(t)
                          , N = (0,
                        s.sn)(t)
                          , O = p.map((e => e === w ? {
                            result: d.U.SPANGRAM,
                            path: h(S, i)
                        } : {
                            result: d.U.THEME,
                            path: h(N[e], i)
                        }));
                        if (p.forEach((e => {
                            if (e === w) {
                                const e = h(S, i);
                                i = (0,
                                u.E)(i, e, d.U.SPANGRAM)
                            } else {
                                const t = h(N[e], i);
                                i = (0,
                                u.E)(i, t, d.U.THEME)
                            }
                        }
                        )),
                        b.length > 0) {
                            const e = b[b.length - 1]
                              , t = !p.includes(e)
                              , n = b.slice(0, -1).includes(e)
                              , r = (0,
                            m.u)(N[e], i);
                            n && t ? (i = (0,
                            u.E)(i, r, d.U.HINT),
                            i = (0,
                            u.E)(i, r, d.U.SECONDARY_HINT)) : t && (i = (0,
                            u.E)(i, r, d.U.HINT))
                        }
                        return {
                            puzzleID: a,
                            layout: i,
                            wordsFound: f,
                            shareHistory: g,
                            hintWordsGiven: b,
                            themeFoundPaths: O,
                            hintCount: _,
                            hintPoints: v,
                            hintUsed: E,
                            solved: o
                        }
                    }
                    )(r, o);
                    t((0,
                    a._V)(e))
                } catch (e) {
                    console.error("There was an error getting state from api", e)
                } finally {
                    t((0,
                    p.cI)())
                }
            }
            ,
            handleMidGameLogin: (e, t) => e || t
        }
          , g = (0,
        r.L)(f)
          , b = (0,
        o.d)(f)
    },
    95128: function(e, t, n) {
        n.d(t, {
            G1: function() {
                return s
            },
            Pc: function() {
                return a
            },
            hd: function() {
                return o
            },
            qb: function() {
                return l
            },
            zW: function() {
                return i
            }
        });
        var r = n(88389);
        const o = new Date("3/4/2024")
          , a = 3
          , l = 2500
          , s = 100
          , i = e => ({
            puzzleID: e ? e.id : 0,
            playedBefore: !0,
            layout: e ? (0,
            r.x)(e.startingBoard) : [],
            wordsFound: [],
            shareHistory: [],
            themeFoundPaths: [],
            hintWordsGiven: [],
            hintPoints: 0,
            hintCount: 0,
            hintUsed: 0,
            solved: !1,
        })
    },
    81494: function(e, t, n) {
        n.d(t, {
            U: function() {
                return r
            }
        });
        let r = function(e) {
            return e.THEME = "THEME",
            e.NONTHEME = "NONTHEME",
            e.SPANGRAM = "SPANGRAM",
            e.ERROR = "error",
            e.DEPRECATED_HINT = "hint",
            e.HINT = "HINT",
            e.SECONDARY_HINT = "secondary_hint",
            e.NOT_A_WORD = "NOT A WORD",
            e.TOO_SHORT = "TOO SHORT",
            e.ALREADY_FOUND = "ALREADY FOUND",
            e.TOO_LONG = "TOO LONG",
            e.LIMIT_REACHED = "LIMIT REACHED",
            e
        }({})
    },
    155: function(e, t, n) {
        n.d(t, {
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
    },
    32825: function(e, t, n) {
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
        n.d(t, {
            DR: function() {
                return l
            },
            FF: function() {
                return s
            },
            S_: function() {
                return o
            },
            jL: function() {
                return c
            },
            mV: function() {
                return r
            },
            pp: function() {
                return i
            },
            wv: function() {
                return a
            }
        });
        const r = "GAMES_subscribeToolbarWebApp_0425"
          , o = "1_subscribeToolbar"
          , a = "GAMES_HamburgerMenuAppDLCTA_0225"
          , l = "GAMES_subForNoAds_0325"
          , s = "GAMES_subForNoAds_Android_0425_AA"
          , i = "GAMES_subForNoAds_Android_0425"
          , c = "1_ads"
    },
    42101: function(e, t, n) {
        function r(e, t) {
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
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    var r, o, a, l;
                    r = e,
                    o = t,
                    a = n[t],
                    (o = "symbol" == typeof (l = function(e, t) {
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
                    }(o)) ? l : l + "")in r ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = a
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        n.d(t, {
            DX: function() {
                return m
            },
            Mc: function() {
                return i
            },
            X: function() {
                return l
            },
            eV: function() {
                return u
            },
            g2: function() {
                return a
            },
            gQ: function() {
                return c
            },
            qQ: function() {
                return d
            },
            wG: function() {
                return s
            }
        });
        const a = e => "settings" === e
          , l = (e, t) => a(e.selectPuzzleIdOrSettings(t))
          , s = (e, t) => {
            const n = l(e, t)
              , r = ( (e, t) => {
                const n = e.selectPuzzleIdOrSettings(t);
                return e.selectMoogleState(t).getPuzzleProgress.statesByPuzzleId[n] || null
            }
            )(e, t)
              , a = ( (e, t) => e.selectMoogleState(t).getRemoteSettings.data || null)(e, t);
            return n && null != a && a.settings ? o({
                timestamp: a.timestamp,
                schemaVersion: a.schema_version || "",
            }, a.settings) : !n && null != r && r.game_data ? o({
                timestamp: r.timestamp,
                schemaVersion: r.schema_version
            }, r.game_data) : null
        }
          , i = (e, t) => e.selectMoogleState(t).regiId
          , c = (e, t) => {
            const {postRequest: n} = e.selectMoogleState(t);
            return Object.keys(n).some((e => n[e].isLoading))
        }
          , d = (e, t) => e.selectMoogleState(t).pendingSaves
          , u = (e, t) => d(e, t).length > 0
          , m = (e, t) => {
            var n;
            const {postRequest: r} = e.selectMoogleState(t);
            return null === (n = r[e.selectPuzzleIdOrSettings(t)]) || void 0 === n ? void 0 : n.isErrorRetry
        }
    },
    62272: function(e, t, n) {
        n.d(t, {
            D: function() {
                return a
            },
            Qg: function() {
                return o
            }
        });
        var r = n(65489);
        const o = "EXPOSURE_REPORTER_STANDARD"
          , a = "EXPOSURE_REPORTER_HYBRID";
        t.ZP = e => {
            let {testName: t, variantName: n, shouldReport: l=!1, reporterType: s=o} = e;
            const {reportHybridExposure: i, reportExposure: c, getVariant: d} = r.abra
              , u = d(t);
            if (!u)
                return !1;
            let m;
            switch (s) {
            case o:
                m = c;
                break;
            case a:
                m = i
            }
            return l && u && m && m(t),
            !!n && u === n
        }
    }
}]);
//# sourceMappingURL=1661.792b99c822b7a6622ca3.js.map
