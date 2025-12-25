!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "7db412ac-0877-4490-9e28-22cb68aa55b8",
        e._sentryDebugIdIdentifier = "sentry-dbid-7db412ac-0877-4490-9e28-22cb68aa55b8")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "89798bd4dad67cbd37595ec55ef697f0ac25b330"
},
function() {
    var e, t, n, r, a, o = {
        84969: function(e, t, n) {
            "use strict";
            n(31405),
            n(37422);
            var r = n(89526)
              , a = n(24470)
              , o = n(33649)
              , i = n(35169)
              , s = n(65489)
              , l = n(95854)
              , c = n(65046)
              , u = n(5783)
              , d = n(66295)
              , m = n(97281);
            const p = "crossword/progress/APPLY_PROGRESS"
              , f = "crossword/progress/RECALC_COUNTS"
              , b = ["cells", "status", "timer", "selection"]
              , g = "crossword/transient/PUZZLE_READY"
              , v = "crossword/transient/PUZZLE_SYNCED"
              , h = "crossword/transient/ESCAPE_PUZZLE"
              , y = e => ({
                type: v,
                payload: {
                    commitID: e
                }
            })
              , w = "crossword/cell/CHECK"
              , _ = "crossword/cell/CLEAR"
              , E = "crossword/cell/REVEAL"
              , O = "crossword/cell/GUESS"
              , S = e => !!e.guess
              , k = e => ![0, 4].includes(e.type)
              , C = e => k(e) && !S(e)
              , P = e => e && e.confirmed
              , x = e => !P(e)
              , j = (e, t) => {
                const {answer: n, moreAnswers: r} = e;
                if (!r)
                    return n ? n === t : !t;
                const {valid: a=[]} = r
                  , o = a.concat(n);
                return !(!o.includes(" ") && !o.includes("") || t) || o.includes(t)
            }
              , N = e => j(e, e.guess || "")
              , L = e => k(e) && !N(e)
              , T = e => x(e) && k(e)
              , I = e => S(e) && x(e)
              , D = e => I(e) && (e => !e.checked || e.modified)(e)
              , B = e => t => !!(e => e.checked && !e.modified && x(e))(t) || !e.skipFilled || !!C(t) || !e.skipPenciled && t.penciled
              , z = "crossword/selection/NAVIGATE"
              , M = "crossword/selection/SELECT_CELL"
              , A = "crossword/selection/SELECT_CLUE"
              , R = "crossword/selection/SWITCH_DIRECTION"
              , G = () => ({
                type: R
            })
              , U = e => ({
                type: z,
                payload: {
                    direction: e
                }
            })
              , H = (e, t) => {
                const n = "ClueStart";
                return t ? {
                    type: z,
                    payload: {
                        direction: n
                    }
                } : {
                    type: A,
                    payload: {
                        index: e,
                        direction: n
                    }
                }
            }
              , W = "crossword/status/SET_INITIAL_CELL_STATUS"
              , F = "crossword/status/RESET_GAME"
              , q = "crossword/status/DEBUG_REVEAL"
              , Y = "crossword/status/MARK_SOLVED"
              , V = "crossword/status/ENABLE_AUTOCHECK"
              , Z = "crossword/status/DISABLE_AUTOCHECK"
              , K = "crossword/status/TRACK_PROGRESS"
              , X = "crossword/status/MARK_FILLED"
              , J = "crossword/status/UNMARK_FILLED"
              , Q = e => e[Math.floor(Math.random() * e.length)];
            var $ = n(47549);
            const ee = e => e.user
              , te = (0,
            $.createSelector)(ee, (e => {
                let {settings: t} = e;
                return t
            }
            ))
              , ne = (0,
            $.createSelector)(ee, (e => {
                let {printPrefs: t} = e;
                return t
            }
            ))
              , re = (0,
            $.createSelector)(ee, (e => {
                let {access: t} = e;
                return t
            }
            ))
              , ae = (0,
            $.createSelector)(re, (e => {
                let {canAccessPuzzle: t} = e;
                return t
            }
            ))
              , oe = (0,
            $.createSelector)(re, (e => {
                let {isAccessDataAvailable: t} = e;
                return t
            }
            ));
            const ie = (e, t) => {
                const n = Math.floor(e / t) * t;
                return [n, n + t - 1]
            }
              , se = e => [0, e.length - 1];
            var le = n(36105)
              , ce = n.n(le);
            const ue = (e, t) => e + (t ? ce()().unix() - t : 0)
              , de = e => {
                const t = Math.floor(e / 3600)
                  , n = Math.floor(e % 3600 / 60)
                  , r = n < 10 ? "0".concat(n) : n
                  , a = Math.floor(e % 60)
                  , o = a < 10 ? "0".concat(a) : a;
                return t > 0 ? [t, r, o].join(":") : "".concat(n, ":").concat(o)
            }
              , me = /(\w*)\{nyt-(\w+)\}(\w*)/g
              , pe = {
                m: e => {
                    const t = e.format("MMMM")
                      , n = "September" === t ? "Sept" : t.substring(0, 3);
                    return t.length > 4 ? "".concat(n, ".") : t
                }
            }
              , fe = (e, t) => {
                if (!e)
                    return "";
                const n = ce()(e)
                  , r = ( (e, t) => t.replace(me, ( (t, n, r) => {
                    const a = pe[r];
                    if (!a)
                        throw new Error('Unrecognized NYT time: "'.concat(r, '"'));
                    return "[".concat(a(e), "]")
                }
                )))(n, t);
                return n.format(r)
            }
              , be = e => e.cells
              , ge = (0,
            $.createSelector)(be, (e => e.map((e => 4 === e.type))))
              , ve = e => e.clues
              , he = e => e.puzzle.data
              , ye = e => e.puzzle.hasLoaded
              , we = e => e.puzzle.error
              , _e = (0,
            $.createSelector)(he, (e => (null == e ? void 0 : e.meta) || null))
              , Ee = (0,
            $.createSelector)(he, (e => (null == e ? void 0 : e.board) || null))
              , Oe = (0,
            $.createSelector)(he, (e => (null == e ? void 0 : e.clueLists) || []))
              , Se = (0,
            $.createSelector)(he, (e => (null == e ? void 0 : e.overlays) || null))
              , ke = (0,
            $.createSelector)(he, (e => (null == e ? void 0 : e.dimensions) || null))
              , Ce = (0,
            $.createSelector)(_e, (e => null == e ? void 0 : e.id))
              , Pe = (0,
            $.createSelector)(_e, (e => null == e ? void 0 : e.title))
              , xe = (0,
            $.createSelector)(_e, (e => (null == e ? void 0 : e.publishStream) || ""))
              , je = (0,
            $.createSelector)(xe, (e => "mini" === e))
              , Ne = (0,
            $.createSelector)(_e, (e => null == e ? void 0 : e.publicationDate))
              , Le = (0,
            $.createSelector)([xe, Ne, Pe, we], ( (e, t, n, r) => {
                if (r)
                    return 403 === r.status ? "Subscription Required" : 404 === r.status ? "Page Not Found" : "Oops! Something went wrong.";
                const a = !e;
                let o = "MMMM D, YYYY";
                o = "bonus" === e ? "MMMM YYYY" : "dddd, MMMM D, YYYY";
                let i = "The Crossword puzzle";
                return "mini" === e && (i = "The Mini puzzle"),
                (a || "bonus" === e) && (i = "The Crossword Bonus puzzle — ".concat(n)),
                a && (i = "The Special Crossword puzzle"),
                !a && t && (i = "".concat(fe(t, o), " ").concat(i)),
                "".concat(i, " — The New York Times")
            }
            ))
              , Te = e => e.selection
              , Ie = (0,
            $.createSelector)(Te, (e => e.cell))
              , De = (0,
            $.createSelector)([be, Ie], ( (e, t) => "number" == typeof t ? e[t] : null))
              , Be = (0,
            $.createSelector)([ve, Te], ( (e, t) => "number" == typeof t.clue ? e[t.clue] : null))
              , ze = ((0,
            $.createSelector)([Oe, Te], ( (e, t) => "number" == typeof t.clueList ? e[t.clueList] : null)),
            (0,
            $.createSelector)(Te, (e => e.clueCells)))
              , Me = (0,
            $.createSelector)(Te, (e => e.relatedCells));
            function Ae(e, t) {
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
            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ae(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Ge = (e, t, n) => {
                const r = e.find((e => n(t[e])));
                if (void 0 !== r)
                    return t[r]
            }
              , Ue = () => 0
              , He = (e, t) => t.length - 1
              , We = e => e - 1
              , Fe = e => e + 1
              , qe = (e, t, n) => {
                const r = t.clueCells[n]
                  , a = e[r];
                return Re(Re({}, t), {}, {
                    cell: r,
                    cellClues: a.clues
                })
            }
              , Ye = (e, t) => {
                let {cells: n, selection: r} = e;
                const {cell: a, clueCells: o} = r;
                if (!o.length)
                    return null;
                const i = t(o.indexOf(a), o);
                return qe(n, r, i)
            }
              , Ve = function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const r = te(e)
                  , {cells: a, clues: o, selection: i} = e
                  , s = B(r)
                  , l = o[i.clue]
                  , c = n ? "prev" : "next";
                let u, d;
                u = l ? l[c] : n ? o.length - 1 : 0;
                let m = o[u];
                do {
                    if (d = Ge(m.cells, a, s),
                    d)
                        break;
                    m = o[m[c]]
                } while (m.index !== u);
                const p = d ? d.index : m.cells[0];
                return {
                    cell: p,
                    cellClues: a[p].clues,
                    clue: m.index,
                    clueCells: m.cells,
                    clueList: null !== (t = m.list) && void 0 !== t ? t : null,
                    relatedCells: [],
                    relatedClues: []
                }
            };
            function Ze(e, t) {
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
            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ze(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var Xe = (e, t, n) => {
                switch (t) {
                case "Up":
                case "Down":
                case "Left":
                case "Right":
                    return ( (e, t, n) => {
                        var r, a;
                        const {cells: o, clues: i, puzzle: s, selection: l} = e
                          , c = ( (e, t, n, r, a) => {
                            if ("number" != typeof r || r < 1)
                                throw new Error("gridwidth must be a positive number");
                            let o, i;
                            switch (t) {
                            case "Up":
                                o = -r,
                                i = se(n);
                                break;
                            case "Down":
                                o = r,
                                i = se(n);
                                break;
                            case "Right":
                                o = 1,
                                i = ie(e, r);
                                break;
                            case "Left":
                                o = -1,
                                i = ie(e, r)
                            }
                            if (o && i)
                                for (let t = e + o; t >= i[0] && t <= i[1]; t += o)
                                    if (a(n[t]))
                                        return n[t]
                        }
                        )(l.cell || 0, t, o, (null === (r = s.data) || void 0 === r ? void 0 : r.dimensions.columnCount) || 0, k);
                        if (!c)
                            return null;
                        const u = ( (e, t, n) => {
                            if (0 === e.clues.length)
                                return {
                                    index: null,
                                    cells: [],
                                    list: n
                                };
                            if (1 === e.clues.length)
                                return t[e.clues[0]];
                            const r = e.clues
                              , a = r.map((e => t[e].list))
                              , o = (i = n,
                            a.reduce(( (e, t) => t === i ? t : e === i ? e : "number" == typeof i && (t < i && e < i || t > i && e > i) ? Math.min(t, e) : Math.max(t, e))));
                            var i;
                            const s = a.findIndex((e => e === o));
                            return t[r[s]]
                        }
                        )(c, i, void 0 !== n ? n : l.clueList);
                        return Ke(Ke({}, l), {}, {
                            cell: c.index,
                            cellClues: c.clues,
                            clue: u.index,
                            clueCells: u.cells,
                            clueList: null !== (a = u.list) && void 0 !== a ? a : null
                        })
                    }
                    )(e, t, n);
                default:
                    return ( (e, t) => {
                        switch (t) {
                        case "ClueStart":
                            return Ye(e, Ue);
                        case "ClueEnd":
                            return Ye(e, He);
                        case "Advance":
                            return (e => {
                                const t = te(e)
                                  , {cells: n, selection: r} = e
                                  , {cell: a, clueCells: o} = r
                                  , i = B(t)
                                  , s = De(e)
                                  , l = !!s && s.guess
                                  , c = (m = a,
                                (d = o).slice(d.indexOf(m) + 1))
                                  , u = 0 === c.length;
                                var d, m;
                                if (l && !u)
                                    return Ye(e, Fe);
                                const p = t.jumpBack ? c.concat(( (e, t) => e.slice(0, e.indexOf(t)))(o, a)) : c
                                  , f = Ge(p, n, i);
                                return f ? qe(n, r, o.indexOf(f.index)) : t.autoAdvance ? Ve(e) : null
                            }
                            )(e);
                        case "Backspace":
                            return (e => {
                                var t;
                                const n = te(e)
                                  , {cells: r, clues: a, selection: o} = e
                                  , {cell: i, clue: s, clueCells: l} = o;
                                if (null === i || 0 !== l.indexOf(i))
                                    return Ye(e, We);
                                if (!n.backspaceAcrossWords)
                                    return null;
                                const c = (u = a,
                                d = a[s],
                                u[u.indexOf(d) - 1] || u[u.length - 1]);
                                var u, d;
                                const m = c.cells
                                  , p = r[m[m.length - 1]];
                                return Re(Re({}, o), {}, {
                                    cell: p.index,
                                    cellClues: p.clues,
                                    clue: c.index,
                                    clueCells: m,
                                    clueList: null !== (t = c.list) && void 0 !== t ? t : null
                                })
                            }
                            )(e);
                        case "NextClue":
                            return Ve(e);
                        case "PreviousClue":
                            return Ve(e, !0);
                        default:
                            return null
                        }
                    }
                    )(e, t)
                }
            }
            ;
            function Je(e, t) {
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
                    t % 2 ? Je(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const $e = /[Up|Down]$/
              , et = ["Across", "Down"]
              , tt = (e, t) => {
                var n;
                return et.includes(null === (n = t[e]) || void 0 === n ? void 0 : n.name)
            }
              , nt = e => {
                var t;
                let {cells: n, clues: r} = e;
                const a = n.find(C) || n.find(k)
                  , [o=null] = (null == a ? void 0 : a.clues) || []
                  , i = r[o];
                return {
                    cell: null !== (t = null == a ? void 0 : a.index) && void 0 !== t ? t : null,
                    cellClues: (null == a ? void 0 : a.clues) || [],
                    clue: o,
                    clueCells: (null == i ? void 0 : i.cells) || [],
                    clueList: (null == i ? void 0 : i.list) || 0,
                    relatedCells: [],
                    relatedClues: []
                }
            }
              , rt = (e, t) => {
                var n;
                let {cells: r, clues: a} = e;
                const o = a[t]
                  , i = o.cells.map((e => r[e])).find((e => C(e)))
                  , s = i ? i.index : o.cells[0];
                return {
                    cell: s,
                    cellClues: r[s].clues,
                    clue: o.index,
                    clueCells: o.cells,
                    clueList: null !== (n = o.list) && void 0 !== n ? n : null,
                    relatedCells: [],
                    relatedClues: []
                }
            }
              , at = function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                const {clues: r} = e
                  , a = n || e.selection
                  , {clue: o, cellClues: i} = a;
                if (i.length < 2)
                    return a;
                var s, l;
                const c = r[(l = o,
                (s = i)[(s.indexOf(l) + 1) % s.length])];
                return Qe(Qe({}, a), {}, {
                    clueCells: c.cells,
                    clue: c.index,
                    clueList: null !== (t = c.list) && void 0 !== t ? t : null
                })
            }
              , ot = (e, t) => {
                const {puzzle: {data: n}, selection: {clueList: r}} = e;
                return !!n && n.clueLists[r].name !== ($e.test(t) ? "Down" : "Across")
            }
              , it = {
                ShiftArrowUp: "PreviousClue",
                ShiftArrowDown: "NextClue",
                ShiftArrowLeft: "PreviousClue",
                ShiftArrowRight: "NextClue"
            };
            function st(e, t) {
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
            function lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? st(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var ct = e => t => n => {
                const r = ( (e, t) => {
                    let n = null;
                    switch (t.type) {
                    case p:
                        "selection"in t.payload && (n = t.payload.selection || null);
                        break;
                    case g:
                        n = (e => {
                            const {selection: t} = e;
                            return null == t.cell ? nt(e) : null
                        }
                        )(e);
                        break;
                    case F:
                        n = nt(e);
                        break;
                    case q:
                    case M:
                        n = ( (e, t) => {
                            var n;
                            let {cells: r, clues: a, selection: o} = e;
                            const i = r[t]
                              , {clueList: s} = o
                              , {clues: l} = i
                              , c = l.find((e => a[e].list === s))
                              , u = c ? a[c] : a[l[0]];
                            return u ? {
                                cell: t,
                                cellClues: l,
                                clue: u.index,
                                clueCells: u.cells,
                                clueList: null !== (n = u.list) && void 0 !== n ? n : null,
                                relatedCells: [],
                                relatedClues: []
                            } : {
                                cell: t,
                                cellClues: [],
                                clue: null,
                                clueCells: [],
                                clueList: s,
                                relatedCells: [],
                                relatedClues: []
                            }
                        }
                        )(e, t.payload.index);
                        break;
                    case A:
                        n = rt(e, t.payload.index);
                        break;
                    case R:
                        n = at(e);
                        break;
                    case z:
                        {
                            const {direction: r} = t.payload;
                            n = null != r && r.startsWith("Arrow") ? ( (e, t) => {
                                const n = ee(e)
                                  , {settings: {onSwitch: r}} = n
                                  , {puzzle: {data: a}, selection: {cellClues: o, clueList: i}} = e;
                                if (!a)
                                    return null;
                                if (ot(e, t)) {
                                    const n = 0 === o.length
                                      , s = "move" === r || n || !tt(i, a.clueLists) ? Xe(e, t.substring(5)) : null;
                                    return at(e, s)
                                }
                                return Xe(e, t.substring(5))
                            }
                            )(e, r) : null != r && r.startsWith("Shift") ? ( (e, t) => {
                                const {puzzle: {data: n}, cells: r, selection: {clueList: a}} = e
                                  , o = t.replace("ShiftArrow", "");
                                if (!n)
                                    return null;
                                if (null == a || !tt(a, n.clueLists)) {
                                    const t = $e.test(o) ? n.clueLists.findIndex((e => "Down" === e.name)) || 0 : n.clueLists.findIndex((e => "Across" === e.name)) || 0;
                                    return Xe(e, o, t)
                                }
                                if (ot(e, t)) {
                                    const t = Xe(e, o);
                                    if (!t)
                                        return null;
                                    const n = e => !C(r[e]);
                                    return t.clueCells.every(n) ? t : rt(e, t.clue)
                                }
                                return Xe(e, it[t] || "")
                            }
                            )(e, r) : Xe(e, r);
                            break
                        }
                    case O:
                        n = Xe(e, "Advance");
                        break;
                    default:
                        return null
                    }
                    return n ? (n = ( (e, t) => {
                        let {clues: n} = e;
                        const r = n[t.clue];
                        let a = []
                          , o = [];
                        return r && (o = r.relatives || [],
                        a = o.map((e => n[e])).reduce(( (e, t) => e.concat(t.cells)), [])),
                        Qe(Qe({}, t), {}, {
                            relatedCells: a,
                            relatedClues: o
                        })
                    }
                    )(e, n),
                    n) : null
                }
                )(e.getState(), n);
                return t(r ? lt(lt({}, n), {}, {
                    selection: r
                }) : n)
            }
            ;
            const ut = "crossword/modal/OPEN_MODAL"
              , dt = "crossword/modal/CLOSE_MODAL"
              , mt = "crossword/modal/REMOVE_MODAL"
              , pt = (e, t) => ({
                type: ut,
                payload: {
                    name: e,
                    config: t
                }
            })
              , ft = e => ({
                type: dt,
                payload: {
                    isCancelled: e
                }
            })
              , bt = () => ({
                type: mt
            })
              , gt = "crossword/timer/RESUME_TIMER"
              , vt = "crossword/timer/PAUSE_TIMER"
              , ht = "crossword/timer/COMMIT_PROGRESS"
              , yt = (e, t) => e === gt || e === ht ? {
                type: e,
                payload: {
                    now: ce()().unix()
                }
            } : {
                type: e,
                payload: {
                    now: ce()().unix(),
                    isLeavingGame: t
                }
            }
              , wt = () => yt(gt)
              , _t = function() {
                return yt(vt, arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
            }
              , Et = "crossword/toolbar/TOGGLE_PENCIL_MODE"
              , Ot = "crossword/toolbar/ENTER_REBUS_MODE"
              , St = "crossword/toolbar/EXIT_REBUS_MODE"
              , kt = "crossword/toolbar/UPDATE_REBUS"
              , Ct = "crossword/toolbar/TOGGLE_HELP_MENU"
              , Pt = () => ({
                type: Et
            })
              , xt = e => ({
                type: Ct,
                payload: {
                    menu: e
                }
            })
              , jt = e => ({
                type: kt,
                payload: e
            });
            function Nt(e, t) {
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
            function Lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Nt(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Tt = (e, t, n, r, a, o, i) => {
                const l = {
                    module: Lt({
                        name: e,
                        context: t,
                        element: {
                            name: n || "",
                            label: "string" == typeof r ? r : JSON.stringify(r),
                            url: i || void 0
                        }
                    }, a && {
                        label: a
                    }),
                    eventData: {
                        pageType: "game",
                        type: o ? "ob_click" : "click",
                        trigger: "module",
                        status: ""
                    }
                };
                (0,
                s.j)("moduleInteraction", l)
            }
              , It = (e, t, n, r) => {
                (0,
                s.j)("impression", {
                    module: {
                        name: e,
                        context: r,
                        region: t || "",
                        label: n || void 0
                    }
                })
            }
            ;
            let Dt = function(e) {
                return e.Letter = "LETTER_SCOPE",
                e.Unchecked = "UNCHECKED_SCOPE",
                e.Word = "WORD_SCOPE",
                e.Puzzle = "PUZZLE_SCOPE",
                e.Fifty = "FIFTY_SCOPE",
                e.SeventyFive = "SEVENTYFIVE_SCOPE",
                e
            }({});
            const Bt = (e, t, n, r, a) => {
                switch (e) {
                case Dt.Unchecked:
                    Tt("click", t, n, "".concat(r, "-incomplete"));
                    break;
                case Dt.Letter:
                    Tt("click", t, n, "".concat(r, "-square"));
                    break;
                case Dt.Word:
                    Tt("click", t, n, "".concat(r, "-word"), a);
                    break;
                case Dt.Puzzle:
                    Tt("click", t, n, "".concat(r, "-puzzle"))
                }
            }
            ;
            var zt = e => t => n => {
                const r = e.getState()
                  , a = je(e.getState())
                  , o = Ce(r) || 0
                  , i = a ? "mini-page" : "game-page";
                switch (n.type) {
                case E:
                    {
                        const e = (n.payload.cellsInScope || []).map((e => r.cells[e].answer)).join("");
                        Bt(n.payload.scope, o, i, "reveal", e);
                        break
                    }
                case w:
                    Bt(n.payload.scope, o, i, "check");
                    break;
                case _:
                    Bt(n.payload.scope, o, i, "clear");
                    break;
                case Et:
                    ( (e, t, n) => {
                        const r = n.toolbar.inPencilMode ? "pen" : "pencil";
                        Tt("click", e, t, r)
                    }
                    )(o, i, r);
                    break;
                case dt:
                    ( (e, t, n, r) => {
                        var a;
                        const o = (null === (a = r.modal.config) || void 0 === a ? void 0 : a.actionType) || ""
                          , i = e.type !== mt && "isCancelled"in e.payload && e.payload.isCancelled || !1;
                        [_, F].includes(o) && i && Tt("click", t, n, "clear-cancel")
                    }
                    )(n, o, i, r);
                    break;
                case F:
                    Tt("click", o, i, "clear-confirm");
                    break;
                case vt:
                    Tt("click", o, i, "stop-timer");
                    break;
                case gt:
                    Tt("click", o, i, "start-timer")
                }
                return t(n)
            }
            ;
            const Mt = e => {
                var t, n;
                return null !== (t = null === (n = e.meter) || void 0 === n ? void 0 : n.data) && void 0 !== t ? t : null
            }
              , At = e => {
                var t, n;
                return null !== (t = null === (n = e.meter) || void 0 === n ? void 0 : n.hasLoaded) && void 0 !== t && t
            }
            ;
            function Rt(e, t) {
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
            function Gt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            (0,
            $.createSelector)(Mt, (e => {
                var t;
                return null !== (t = null == e ? void 0 : e.granted) && void 0 !== t ? t : null
            }
            )),
            (0,
            $.createSelector)(Mt, (e => {
                var t;
                return null !== (t = null == e ? void 0 : e.grantReason) && void 0 !== t ? t : null
            }
            ));
            let Ut = function(e) {
                return e.standard = "standard",
                e.southpaw = "southpaw",
                e.large_print = "large_print",
                e
            }({});
            const Ht = {
                onSwitch: "stay",
                jumpBack: !0,
                skipFilled: !0,
                skipPenciled: !1,
                showTimer: !0,
                suppressDisqualificationWarnings: !1,
                forceGoldStarEligibility: !1,
                speedUpSyncInterval: !1,
                suppressAutocheckNotice: !1
            }
              , Wt = Gt(Gt({}, Ht), {}, {
                spaceTriggers: "toggle",
                backspaceAcrossWords: !0,
                autoAdvance: !0,
                soundOn: !1
            })
              , Ft = Gt(Gt({}, Ht), {}, {
                spaceTriggers: "clear",
                backspaceAcrossWords: !1,
                autoAdvance: !1,
                soundOn: !0,
                showMilestones: !0
            })
              , qt = {
                opacity: 100,
                layout: Ut.standard
            }
              , Yt = "crossword/user/CHANGE_SETTING"
              , Vt = "crossword/user/LOAD_SETTINGS"
              , Zt = "crossword/user/RESET_TO_DEFAULTS"
              , Kt = "crossword/user/LOAD_PRINT_PREFS"
              , Xt = "crossword/user/CHANGE_BLOCK_OPACITY"
              , Jt = "crossword/user/CHANGE_PRINT_LAYOUT"
              , Qt = "crossword/user/USER_TYPE_LOADED"
              , $t = "crossword/user/SET_USER_ACCESS"
              , en = "crossword/user/ACCESS_DATA_AVAILABLE"
              , tn = e => ({
                type: Yt,
                payload: e
            })
              , nn = e => ({
                type: $t,
                payload: e
            });
            var rn = function(e) {
                return e.GRANT_S1 = "User has Xwd entitlement",
                e.GRANT_S2 = "User has shortz mode enabled",
                e.GRANT_S3 = "User is playing a free puzzle",
                e.GRANT_S4 = "Meter granted",
                e.DENY_S1 = "Meter did not grant",
                e.DENY_S2 = "No meter data available. Puzzle has not been detected as free",
                e.DENY_S3 = "No puzzle data available. No meter data available",
                e
            }(rn || {});
            const an = e => t => n => {
                const r = e.getState()
                  , a = t(n)
                  , o = e.getState();
                if (oe(r))
                    return a;
                if (we(o))
                    return a;
                if (!ye(o))
                    return a;
                if (je(o))
                    return a;
                if (!At(o))
                    return a;
                if (n.type === en) {
                    switch ((e => {
                        let {meter: t, puzzle: n, access: r} = e;
                        return r.userType.hasXwd ? rn.GRANT_S1 : r.userType.inShortzMode ? rn.GRANT_S2 : null !== n ? n.freePuzzle ? rn.GRANT_S3 : null !== t ? t.granted ? rn.GRANT_S4 : rn.DENY_S1 : rn.DENY_S2 : rn.DENY_S3
                    }
                    )({
                        meter: Mt(o),
                        puzzle: _e(o),
                        access: re(o)
                    })) {
                    case rn.DENY_S1:
                    case rn.DENY_S2:
                        e.dispatch(nn(!1));
                        break;
                    case rn.DENY_S3:
                        break;
                    case rn.GRANT_S1:
                    case rn.GRANT_S2:
                    case rn.GRANT_S3:
                    case rn.GRANT_S4:
                        e.dispatch(nn(!0));
                        break;
                    default:
                        e.dispatch(nn(!1))
                    }
                }
                return a
            }
              , on = (0,
            n(59391).Z)();
            var sn = r.createContext(on);
            const ln = "crossword/stats/GET_STATS"
              , cn = function() {}
              , un = {
                log: cn,
                info: cn,
                warn: cn,
                error: cn,
                dir: cn,
                time: cn,
                timeEnd: cn,
                trace: cn,
                assert: cn,
                debug: cn,
                table: cn,
                group: cn,
                groupCollapsed: cn,
                groupEnd: cn,
                clear: cn,
                count: cn,
                timeStamp: cn
            };
            Object.keys(un).forEach((e => {
                un[e] = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    const a = "function" == typeof n ? n() : n;
                    console[e](...a)
                }
            }
            ));
            var dn = un;
            function mn(e, t) {
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
            function pn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mn(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const fn = (e, t, n) => n.every((n => e[n] === t[n]))
              , bn = (e, t) => t.reduce(( (t, n) => pn(pn({}, t), {}, {
                [n]: e[n]
            })), {})
              , gn = e => {
                let t = "";
                for (let n = 0; n < e.length; n += 1)
                    t += "_" === e[n] ? e[n += 1].toUpperCase() : e[n];
                return t
            }
              , vn = e => {
                switch (!0) {
                case !e:
                    return e;
                case Array.isArray(e):
                    return e.map(vn);
                case "object" == typeof e:
                    return Object.entries(e).reduce(( (e, t) => {
                        let[n,r] = t;
                        return Object.assign(e, {
                            [gn(n)]: vn(r)
                        })
                    }
                    ), {});
                default:
                    return e
                }
            }
              , hn = () => Math.random().toString(36).slice(2, 8)
              , yn = "".concat(s.OB.edge, "/svc/christmas_word_puzzles/nyt_games/leaderboard")
              , wn = (e, t) => {
                const {method: n, url: r, data: a=null, isSync: o} = e;
                return t.inShortzMode && dn.info("info: API CALL ".concat(JSON.stringify(e, null, 2))),
                s.Be.request(n, r, {
                    data: a,
                    isSync: o
                })
            }
              , _n = e => {
                const t = "".concat(yn, "/v3/").concat(e.regiId, "/christmas_word_puzzles/nyt_games/stats-and-streaks.json?date_start=2014-01-01&start_on_monday=true");
                return wn({
                    method: "GET",
                    url: t
                }, e).then((e => vn({
                    dailyStats: e.results.stats,
                    streaks: e.results.streaks
                }))).catch((e => {
                    dn.error("failed to fetch stats and streaks", e)
                }
                ))
            }
              , En = e => {
                const t = "".concat(yn, "/v3/").concat(e.regiId, "/christmas_word_puzzles/nyt_games/mini-stats.json?date_start=2014-01-01&start_on_monday=true");
                return wn({
                    method: "GET",
                    url: t
                }, e).then((e => vn({
                    miniStats: e.results
                }))).catch((e => {
                    dn.error("failed to fetch mini stats", e)
                }
                ))
            }
              , On = e => e.status
              , Sn = (0,
            $.createSelector)(On, (e => e.currentProgress))
              , kn = (0,
            $.createSelector)(On, (e => e.isSolved))
              , Cn = (0,
            $.createSelector)(On, (e => e.autocheckEnabled))
              , Pn = e => {
                let {cells: t, status: n} = e;
                const r = t.filter((e => k(e))).length;
                return (r - ((null == n ? void 0 : n.blankCells) || 0)) / r
            }
              , xn = (0,
            $.createSelector)([be, On], ( (e, t) => Pn({
                cells: e,
                status: t
            })))
              , jn = (0,
            $.createSelector)([On, _e, te], ( (e, t, n) => {
                let {firsts: r} = e;
                if (!t)
                    return !1;
                switch (!0) {
                case "daily" !== t.publishStream:
                    return !1;
                case n.forceGoldStarEligibility:
                    return !0;
                case !!r.revealed:
                case !!r.timerReset:
                case !!r.checked:
                case ce()().isAfter(t.goldStarCutoff):
                    return !1;
                default:
                    return !0
                }
            }
            ))
              , Nn = (0,
            $.createSelector)([Se, kn], ( (e, t) => {
                if (!e)
                    return "";
                const {beforeStart: n, afterSolve: r} = e;
                return t && r || n
            }
            ))
              , Ln = [_, E, O, q, F]
              , Tn = {
                reached: !1,
                seen: !1,
                text: "3/4 Done!",
                threshold: .75
            }
              , In = {
                reached: !1,
                seen: !1,
                text: "Halfway!",
                threshold: .5
            };
            var Dn = e => t => n => {
                const r = e.getState()
                  , a = t(n)
                  , o = e.getState();
                if (n.type === g && jn(o)) {
                    (e => t => e.isLoggedIn ? (e => Promise.all([En(e), _n(e)]).then((e => e.reduce(( (e, t) => Object.assign(e, t)), {}))))(e).then((e => t({
                        type: ln,
                        payload: e
                    }))).catch((e => {
                        dn.error("fetch stats and streaks failed: ".concat(e.stack))
                    }
                    )) : Promise.resolve({}))(n.payload.user)(e.dispatch, e.getState, null)
                }
                if (!te(o).showMilestones)
                    return a;
                if (!Ln.includes(n.type))
                    return a;
                const i = xn(r)
                  , s = xn(o);
                if (i === s)
                    return a;
                if (( (e, t) => {
                    [Tn, In].forEach((n => {
                        const {threshold: r} = n
                          , a = e <= r && r < t;
                        (a || t <= r && r < e) && Object.assign(n, {
                            reached: a,
                            seen: !1
                        })
                    }
                    ))
                }
                )(i, s),
                ( (e, t) => {
                    const n = ( (e, t) => {
                        const n = Be(e)
                          , r = n && ve(t)[n.index];
                        return (null == n ? void 0 : n.unfilledCount) && !(null != r && r.unfilledCount)
                    }
                    )(e, t)
                      , r = On(t).incorrectCells <= 0;
                    return n && !r
                }
                )(r, o)) {
                    const e = (e => {
                        const {index: t} = De(e);
                        return e => {
                            const n = e.reached && !e.seen;
                            return n && ( (e, t) => {
                                const {text: n} = e;
                                on.emit("milestone", {
                                    text: n,
                                    idx: t
                                }),
                                e.seen = !0
                            }
                            )(e, t),
                            n
                        }
                    }
                    )(r);
                    e(Tn) || e(In)
                }
                return a
            }
              , Bn = n(11466)
              , zn = n.n(Bn);
            /iPad|iPhone|Safari/.test(navigator.userAgent) && zn().config({
                driver: zn().LOCALSTORAGE
            });
            const Mn = "anon"
              , An = (e, t) => "".concat(e || Mn, "@").concat(t)
              , Rn = e => {
                const t = (new Date).getTime() - 2592e5;
                (e => zn().getItem("".concat(e, "#lastPlayed")))(e).then((n => {
                    (n && n <= t || null === n) && (e => {
                        zn().removeItem("".concat(e, "#lastPlayed")),
                        zn().removeItem(e)
                    }
                    )(e)
                }
                ))
            }
              , Gn = e => "".concat(e, "#pendingCommits")
              , Un = (e, t, n) => {
                (e => zn().getItem(Gn(e)).then((e => e || void 0)))(e).then((function() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    n ? r[t] = n : delete r[t],
                    Object.keys(r).length ? zn().setItem(Gn(e), r).catch((e => {
                        console.error("error setting commit key", e)
                    }
                    )) : (e => {
                        zn().removeItem(Gn(e)).catch((e => {
                            console.error("error clearing pending commits", e)
                        }
                        ))
                    }
                    )(e)
                }
                ))
            }
            ;
            let Hn;
            const Wn = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mn;
                return zn().getItem("".concat(e, "#preferences"))
            }
              , Fn = "crossword/puzzle/PUZZLE_LOADED"
              , qn = "crossword/puzzle/PUZZLE_ERROR"
              , Yn = e => ({
                type: qn,
                payload: {
                    status: e
                }
            });
            function Vn(e, t) {
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
            function Zn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vn(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Kn = e => {
                if (!T(e))
                    return e;
                const t = N(e);
                return Zn(Zn({}, e), {}, {
                    confirmed: !0,
                    checked: e.checked && t,
                    penciled: !1,
                    revealed: !t,
                    guess: e.answer
                })
            }
              , Xn = e => {
                if (!D(e))
                    return e;
                const t = N(e);
                return Zn(Zn({}, e), {}, {
                    confirmed: t,
                    checked: !t || e.checked,
                    penciled: !t && e.penciled,
                    modified: !1
                })
            }
              , Jn = (e, t, n) => {
                const {inPencilMode: r=!1, fromRebus: a=!1, autocheckEnabled: o=!1} = n || {};
                if (P(e) && !a)
                    return e;
                const i = Zn(Zn({}, e), {}, {
                    guess: t,
                    penciled: r,
                    modified: e.checked,
                    confirmed: !1
                });
                return o ? Xn(i) : i
            }
              , Qn = e => I(e) ? Jn(e, "") : e
              , $n = e => Zn(Zn({}, e), {}, {
                penciled: !1,
                revealed: !1,
                checked: !1,
                confirmed: !1,
                modified: !1,
                guess: ""
            })
              , er = ["guess", "checked", "confirmed", "modified", "revealed", "penciled"]
              , tr = (e, t, n, r) => e.map((e => {
                if (!k(e) || !n.includes(e.index))
                    return e;
                const a = t(e);
                return fn(e, a, er) ? a : Zn(Zn({}, a), {}, {
                    timestamp: r
                })
            }
            ));
            function nr(e, t) {
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
            function rr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const ar = [...er, "timestamp"]
              , or = (e, t) => {
                let {cells: n, status: r, timer: a} = t;
                const {firsts: o, isSolved: i, autocheckEnabled: s} = r
                  , {userID: l, deviceID: c, puzzleID: u} = e
                  , d = {
                    deviceID: c,
                    puzzleID: u,
                    userID: l ? parseInt(l) : null
                }
                  , {sessionElapsedTime: m, resetSinceLastCommit: p} = a
                  , f = n.map((e => e.timestamp || 1 / 0)).sort()[0] - 1 || 0
                  , b = ( (e, t) => e.map((e => k(e) ? rr(rr({}, bn(e, ar)), {}, {
                    timestamp: e.timestamp ? e.timestamp - t : void 0
                }) : {
                    blank: !0
                })))(n, f)
                  , g = hn()
                  , v = rr(rr({}, d), {}, {
                    commitID: g,
                    timestamp: ce()().unix(),
                    minGuessTime: f,
                    timerDiff: m,
                    reset: p,
                    solved: i,
                    board: {
                        cells: b
                    },
                    firsts: o,
                    autocheckEnabled: s
                });
                return ( (e, t, n) => {
                    Un(e, t, n)
                }
                )(e.userID, g, v),
                v
            }
              , ir = (e, t) => {
                const n = {
                    guess: "",
                    label: "",
                    penciled: !1,
                    checked: !1,
                    confirmed: !1,
                    revealed: !1,
                    modified: !1
                };
                return e.map((e => e.blank ? rr(rr({}, n), {}, {
                    type: 0,
                    clues: [],
                    index: e.index,
                    answer: e.answer
                }) : (e.timestamp && (e.timestamp += t),
                rr(rr({}, n), e))))
            }
              , sr = e => {
                if (!e || !e.calcs)
                    return Promise.reject();
                const {board: t, minGuessTime: n, calcs: r, firsts: a, lastCommitID: o, userID: i, autocheckEnabled: s=!1} = e
                  , {secondsSpentSolving: l=0, solved: c=!1, eligible: u=!1} = r;
                return ( (e, t) => {
                    Un(e, t)
                }
                )(i, o),
                Promise.resolve({
                    lastCommitID: o,
                    cells: t ? ir(t.cells, n) : [],
                    status: {
                        firsts: a,
                        isSolved: c,
                        isGoldStarEligible: u,
                        autocheckEnabled: s
                    },
                    timer: {
                        totalElapsedTime: l
                    }
                })
            }
              , lr = e => e.timer
              , cr = (0,
            $.createSelector)(lr, (e => e.totalElapsedTime))
              , ur = (0,
            $.createSelector)(lr, (e => e.sessionStartTimestamp))
              , dr = (0,
            $.createSelector)([cr, ur], ue)
              , mr = [v, Y, gt, vt, z, M, A, R, O, E, _, w, ht, F, V, Z]
              , pr = [O, E, _, w, F]
              , fr = [F, ht];
            var br = e => {
                let t, n, r = !1;
                const a = () => {
                    r && (r = !1,
                    e.dispatch(yt(ht)))
                }
                  , o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    clearInterval(t),
                    t = window.setInterval(a, e ? 5e3 : 3e5)
                };
                return "object" == typeof window && o(),
                t => a => {
                    const {type: i} = a;
                    if (i === g)
                        return n = a.payload.user,
                        t(a);
                    const s = e.getState()
                      , l = lr(s)
                      , c = te(s)
                      , u = t(a);
                    if (!n)
                        return u;
                    const d = e.getState()
                      , m = lr(d)
                      , p = te(d)
                      , f = Ce(d)
                      , v = n.inShortzMode;
                    if (f) {
                        if (c.speedUpSyncInterval !== p.speedUpSyncInterval && o(p.speedUpSyncInterval),
                        mr.includes(i)) {
                            const t = bn(d, b);
                            ( (e, t, n) => {
                                const r = An(e, t);
                                zn().setItem(r, n).catch((e => {
                                    console.error("error storing game", e)
                                }
                                )),
                                function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
                                    zn().setItem("".concat(e, "#lastPlayed"), t)
                                }(r)
                            }
                            )(n.regiId, f, t),
                            v && dn.log("info: PERSISTED LOCAL GAME due to", a.type);
                            const o = fr.includes(i)
                              , c = m.isLeavingGame
                              , u = !l.sessionStartTimestamp
                              , p = !m.sessionStartTimestamp
                              , g = s.status.isSolved
                              , {isSolved: h} = d.status
                              , w = o || !u && p || !g && h && p;
                            pr.includes(i) && (r = !0),
                            w && n.isLoggedIn && n.regiId && (v && dn.time("info: PERSISTED REMOTE GAME"),
                            (Hn ? Promise.resolve(Hn) : zn().getItem("deviceID").then((e => (Hn = e || "".concat(hn(), "-web"),
                            e || zn().setItem("deviceID", Hn).catch((e => {
                                console.error("error setting device id", e)
                            }
                            )),
                            Hn)))).then((r => {
                                (function(e, t, n) {
                                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                    const a = {
                                        now: ce()().unix(),
                                        commits: [or(e, n)]
                                    };
                                    return function(e, t) {
                                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                        const r = "".concat(yn, "/v6/game")
                                          , a = "".concat(r, ".json");
                                        return wn({
                                            method: "PUT",
                                            url: a,
                                            data: t,
                                            isSync: n
                                        }, e).catch((e => {
                                            dn.error("Failed to fetch puzzle progress: ", e)
                                        }
                                        ))
                                    }(t, a, r).then((e => (console.groupCollapsed("[XWD on Progress] syncGameState"),
                                    console.log("Persisting progress to progress endpoint - /svc/christmas_word_puzzles/nyt_games/leaderboard/v6/game.json"),
                                    console.dir({
                                        user: t,
                                        data: a
                                    }),
                                    console.groupEnd(),
                                    e))).then(sr).catch(( () => {
                                        console.error("Failed to sync game state")
                                    }
                                    ))
                                }
                                )({
                                    deviceID: r,
                                    puzzleID: f,
                                    userID: n.regiId
                                }, n, t, !!c).then((t => {
                                    e.dispatch(y(null == t ? void 0 : t.lastCommitID)),
                                    v && dn.timeEnd("info: PERSISTED REMOTE GAME")
                                }
                                ))
                            }
                            )).catch((e => {
                                console.error("Failed to generate device ID:", e)
                            }
                            )))
                        }
                        return u
                    }
                }
            }
            ;
            const gr = [Yt, Zt, Xt, Jt];
            var vr = e => {
                let t;
                return n => r => {
                    const {type: a} = r;
                    if (a === g)
                        return t = r.payload.user,
                        n(r);
                    const o = n(r);
                    return t && gr.includes(a) && ( (e, t) => {
                        const {printPrefs: n, settings: r} = e;
                        zn().setItem("".concat(t.regiId || Mn, "#preferences"), {
                            printPrefs: n,
                            settings: r
                        }).catch((e => {
                            console.error("error storing user prefs", e)
                        }
                        ))
                    }
                    )(ee(e.getState()), t),
                    o
                }
            }
              , hr = n(27670)
              , yr = n(69537);
            const wr = yr.I6;
            function _r(e, t) {
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
            function Er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _r(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Or(e) {
                var t, n;
                return "" === (null == e ? void 0 : e.answer) || " " === (null == e ? void 0 : e.answer) || (null == e || null === (t = e.moreAnswers) || void 0 === t ? void 0 : t.valid.includes("")) || (null == e || null === (n = e.moreAnswers) || void 0 === n ? void 0 : n.valid.includes(" "))
            }
            const Sr = {
                name: null,
                config: null,
                isClosing: !1
            };
            const kr = {
                cell: null,
                clueCells: [],
                clue: null,
                cellClues: [],
                clueList: null,
                relatedCells: [],
                relatedClues: []
            };
            function Cr(e, t) {
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
            function Pr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Cr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const xr = (e, t, n) => e[t] ? e : Pr(Pr({}, e), {}, {
                [t]: n
            });
            var jr = (0,
            hr.UY)({
                firsts: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case p:
                        return Pr(Pr({}, e), t.payload.status.firsts);
                    case g:
                        return xr(e, "opened", t.payload.now);
                    case Y:
                        return xr(e, "solved", t.payload.now);
                    case E:
                        return xr(e, "revealed", t.payload.now);
                    case w:
                    case V:
                        return xr(e, "checked", t.payload.now);
                    case _:
                        return xr(e, "cleared", t.payload.now);
                    case F:
                        return xr(e, "timerReset", t.payload.now);
                    default:
                        return e
                    }
                },
                isSolved: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case F:
                        return !1;
                    case Y:
                        return !0;
                    case p:
                        return t.payload.status.isSolved || !1;
                    default:
                        return e
                    }
                },
                isFilled: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                    case X:
                        return !0;
                    case J:
                        return !1;
                    default:
                        return e
                    }
                },
                autocheckEnabled: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case p:
                        return t.payload.status.autocheckEnabled || !1;
                    case V:
                        return !0;
                    case Z:
                        return !1;
                    default:
                        return e
                    }
                },
                blankCells: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case O:
                        return e + (t.payload.blankDelta || 0);
                    case W:
                    case f:
                        return t.payload.cells.filter(C).length;
                    case q:
                    case E:
                    case _:
                        {
                            const {blankDeltas: n} = t.payload;
                            return e + n.reduce(( (e, t) => e + t), 0)
                        }
                    case F:
                        return t.payload.affectedCells.length;
                    default:
                        return e
                    }
                },
                incorrectCells: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case O:
                        return e + (t.payload.incorrectDelta || 0);
                    case W:
                    case f:
                        return t.payload.cells.filter(L).length;
                    case q:
                    case E:
                    case _:
                        {
                            const {incorrectDeltas: n} = t.payload;
                            return e + n.reduce(( (e, t) => e + t), 0)
                        }
                    case F:
                        return t.payload.affectedCells.length;
                    default:
                        return e
                    }
                },
                lastCommitID: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === v && t.payload.commitID || e
                },
                currentProgress: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case K:
                        return t.payload.currentProgress;
                    case p:
                        return Math.floor(Pn(t.payload) / .2);
                    case F:
                        return 0;
                    default:
                        return e
                    }
                }
            });
            function Nr(e, t) {
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
            function Lr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Nr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Tr = {
                sessionStartTimestamp: void 0,
                totalElapsedTime: 0,
                sessionElapsedTime: 0,
                resetSinceLastCommit: !1
            };
            function Ir(e, t) {
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
            function Dr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ir(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ir(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Br = {
                activeMenu: null,
                inPencilMode: !1,
                inRebusMode: !1,
                rebusValue: ""
            };
            function zr(e, t) {
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
            function Mr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? zr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Ar = {
                isReady: !1,
                isSynced: !1,
                doEscape: !1
            };
            function Rr(e, t) {
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
            function Gr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Ur = {
                settings: Wt,
                printPrefs: qt,
                access: {
                    userType: {},
                    isAccessDataAvailable: !1,
                    canAccessPuzzle: null
                }
            };
            function Hr(e, t) {
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
            function Wr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Hr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Fr = "crossword/printOptions/CHANGE_PRINT_OPTION";
            function qr(e, t) {
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
            function Yr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Vr = {
                version: "puzzle",
                showBlack: !1,
                showSpoiler: !0
            };
            function Zr(e, t) {
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
            function Kr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zr(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Xr = {
                data: null,
                hasLoaded: !1,
                error: null
            };
            const Jr = "crossword/meter/METER_LOADED"
              , Qr = "crossword/meter/METER_ERROR"
              , $r = e => ({
                type: Qr,
                payload: {
                    status: e
                }
            });
            function ea(e, t) {
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
            function ta(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ea(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const na = {
                data: null,
                hasLoaded: !1,
                error: null
            };
            let ra = function(e) {
                return e[e.PENDING = -1] = "PENDING",
                e[e.LEGACY_ONLY = 0] = "LEGACY_ONLY",
                e[e.LEGACY_WITH_STATE = 1] = "LEGACY_WITH_STATE",
                e[e.STATE_ONLY = 2] = "STATE_ONLY",
                e
            }({});
            const aa = {
                phase: ra.PENDING
            };
            const oa = (0,
            hr.UY)({
                cells: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case Fn:
                        return t.payload.cells;
                    case p:
                        return e.map((e => k(e) ? Zn(Zn({}, e), t.payload.cells[e.index]) : e));
                    case F:
                        return tr(e, $n, t.payload.affectedCells, t.payload.now);
                    case q:
                        return tr(e, (e => t.payload.index <= e.index ? $n(e) : (e => Zn(Zn({}, e), {}, {
                            guess: e.answer,
                            checked: !1
                        }))(e)), t.payload.affectedCells, t.payload.now);
                    case O:
                        {
                            const n = "number" == typeof t.payload.index ? [t.payload.index] : [];
                            return tr(e, (e => Jn(e, t.payload.value, t.payload)), n, t.payload.now)
                        }
                    case _:
                        return tr(e, Qn, t.payload.affectedCells, t.payload.now);
                    case E:
                        return tr(e, Kn, t.payload.affectedCells, t.payload.now);
                    case w:
                    case V:
                        return tr(e, Xn, t.payload.affectedCells, t.payload.now);
                    default:
                        return e
                    }
                },
                clues: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case Fn:
                        return t.payload.clues;
                    case f:
                        {
                            const {cells: e, clues: n} = t.payload;
                            return n.map((t => {
                                const n = t.cells.map((t => Or(e[t]) ? null : e[t])).filter((e => !!e)).filter(C).length;
                                return Er(Er({}, t), {}, {
                                    unfilledCount: n
                                })
                            }
                            ))
                        }
                    case O:
                        {
                            const {cells: n, index: r, blankDelta: a=0} = t.payload;
                            return e.map((e => "number" == typeof r && e.cells.includes(r) && a && !Or(n[r]) ? Er(Er({}, e), {}, {
                                unfilledCount: e.unfilledCount + a
                            }) : e))
                        }
                    case F:
                        return e.map((e => Er(Er({}, e), {}, {
                            unfilledCount: e.cells.length
                        })));
                    case _:
                    case E:
                    case q:
                        {
                            const {cells: n, blankDeltas: r, affectedCells: a} = t.payload;
                            return e.map((e => {
                                const t = r.filter(( (t, n) => {
                                    return r = a[n],
                                    e.cells.includes(r);
                                    var r
                                }
                                )).map(( (e, t) => {
                                    const r = a[t];
                                    return Or(n[r]) ? 0 : e
                                }
                                )).reduce(( (e, t) => e + t), e.unfilledCount);
                                return Er(Er({}, e), {}, {
                                    unfilledCount: t
                                })
                            }
                            ))
                        }
                    default:
                        return e
                    }
                },
                meter: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : na
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case Jr:
                        return ta(ta({}, e), {}, {
                            data: t.payload.meterResponse,
                            hasLoaded: !0,
                            error: null
                        });
                    case Qr:
                        return ta(ta({}, e), {}, {
                            hasLoaded: !0,
                            error: t.payload
                        });
                    default:
                        return e
                    }
                },
                modal: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sr
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case ut:
                        return {
                            name: t.payload.name,
                            config: t.payload.config || null,
                            isClosing: !1
                        };
                    case dt:
                        return {
                            name: e.name,
                            config: e.config,
                            isClosing: !0
                        };
                    case mt:
                        return Sr;
                    default:
                        return e
                    }
                },
                printOptions: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vr
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === Fr ? Yr(Yr({}, e), t.payload) : e
                },
                puzzle: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xr
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case Fn:
                        return Kr(Kr({}, e), {}, {
                            data: t.payload.puzzle,
                            hasLoaded: !0,
                            error: null
                        });
                    case qn:
                        return Kr(Kr({}, e), {}, {
                            hasLoaded: !0,
                            error: t.payload
                        });
                    default:
                        return e
                    }
                },
                selection: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kr
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return "selection"in t && t.selection || e
                },
                stats: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === ln ? Wr(Wr({}, e), t.payload) : e
                },
                status: jr,
                timer: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tr
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case p:
                        return Lr(Lr({}, e), t.payload.timer);
                    case v:
                        return Lr(Lr({}, e), {}, {
                            resetSinceLastCommit: !1
                        });
                    case gt:
                        return Lr(Lr({}, e), {}, {
                            sessionStartTimestamp: t.payload.now,
                            sessionElapsedTime: 0
                        });
                    case vt:
                        {
                            const {now: n, isLeavingGame: r} = t.payload
                              , {sessionStartTimestamp: a, totalElapsedTime: o} = e
                              , i = a ? n - a : 0;
                            return Lr(Lr({}, e), {}, {
                                sessionElapsedTime: i,
                                sessionStartTimestamp: void 0,
                                totalElapsedTime: o + i,
                                isLeavingGame: r
                            })
                        }
                    case ht:
                        {
                            const {sessionStartTimestamp: n, totalElapsedTime: r} = e
                              , {now: a} = t.payload
                              , o = n ? a - n : 0;
                            return Lr(Lr({}, e), {}, {
                                sessionElapsedTime: o,
                                sessionStartTimestamp: a,
                                totalElapsedTime: r + o,
                                isLeavingGame: !1
                            })
                        }
                    case F:
                        return {
                            totalElapsedTime: 0,
                            sessionElapsedTime: 0,
                            sessionStartTimestamp: t.payload.now,
                            resetSinceLastCommit: !0
                        };
                    case Y:
                        return Lr(Lr({}, e), {}, {
                            sessionElapsedTime: 0
                        });
                    default:
                        return e
                    }
                },
                toolbar: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Br
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case Ot:
                        return Dr(Dr({}, e), {}, {
                            inRebusMode: !0,
                            rebusValue: t.payload.initialValue
                        });
                    case St:
                        return Dr(Dr({}, e), {}, {
                            inRebusMode: !1,
                            rebusValue: ""
                        });
                    case kt:
                        return Dr(Dr({}, e), {}, {
                            rebusValue: t.payload
                        });
                    case Et:
                        return Dr(Dr({}, e), {}, {
                            inPencilMode: !e.inPencilMode
                        });
                    case "crossword/toolbar/PENCIL_MODE_ON":
                        return Dr(Dr({}, e), {}, {
                            inPencilMode: !0
                        });
                    case "crossword/toolbar/PENCIL_MODE_OFF":
                        return Dr(Dr({}, e), {}, {
                            inPencilMode: !1
                        });
                    case Ct:
                        {
                            const {menu: n} = t.payload;
                            return Dr(Dr({}, e), {}, {
                                activeMenu: n === e.activeMenu ? null : n
                            })
                        }
                    default:
                        return e
                    }
                },
                transient: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ar
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case g:
                        return Mr(Mr({}, e), {}, {
                            isReady: !0
                        });
                    case v:
                        return Mr(Mr({}, e), {}, {
                            isSynced: !0
                        });
                    case h:
                        return Mr(Mr({}, e), {}, {
                            doEscape: t.payload
                        });
                    default:
                        return e
                    }
                },
                user: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ur
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case Yt:
                        return Gr(Gr({}, e), {}, {
                            settings: Gr(Gr({}, e.settings), t.payload)
                        });
                    case Vt:
                    case Zt:
                        return Gr(Gr({}, e), {}, {
                            settings: Gr({}, t.payload)
                        });
                    case Kt:
                        return Gr(Gr({}, e), {}, {
                            printPrefs: t.payload
                        });
                    case Jt:
                    case Xt:
                        return Gr(Gr({}, e), {}, {
                            printPrefs: Gr(Gr({}, e.printPrefs), t.payload)
                        });
                    case Qt:
                        return Gr(Gr({}, e), {}, {
                            access: Gr(Gr({}, e.access), {}, {
                                userType: Gr(Gr({}, e.access.userType), t.payload)
                            })
                        });
                    case $t:
                        return Gr(Gr({}, e), {}, {
                            access: Gr(Gr({}, e.access), {}, {
                                canAccessPuzzle: t.payload
                            })
                        });
                    case en:
                        return Gr(Gr({}, e), {}, {
                            access: Gr(Gr({}, e.access), {}, {
                                isAccessDataAvailable: t.payload
                            })
                        });
                    default:
                        return e
                    }
                },
                moogle: wr,
                rollout: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aa
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return "crossword/modal/SET_ROLLOUT" === t.type ? {
                        phase: t.payload.phase
                    } : e
                }
            });
            function ia(e, t) {
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
            function sa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ia(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ia(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            n(47812);
            const la = /\d{4}-\d{2}-\d{2}/
              , ca = (e, t) => {
                if (t.platforms && !t.platforms.web)
                    return e;
                const n = t.text.replace(/\n\n/g, "<br><br>")
                  , r = sa(sa({}, t), {}, {
                    text: n
                });
                return e.concat(r)
            }
            ;
            function ua(e, t) {
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
            function da(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ua(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ua(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const ma = new RegExp(/^.+?(?=<img)/)
              , pa = new RegExp(/<img/)
              , fa = new RegExp(/^\[aria-label\]/)
              , ba = (e, t) => da(da({}, e), {}, {
                index: t
            })
              , ga = (e, t, n) => da(da({}, e), {}, {
                prev: 0 === t ? n.length - 1 : t - 1,
                next: t === n.length - 1 ? 0 : t + 1
            })
              , va = e => da({
                type: 0,
                clues: [],
                confirmed: !1,
                checked: !1,
                penciled: !1,
                revealed: !1,
                modified: !1,
                guess: ""
            }, e)
              , ha = e => {
                const {text: [t]} = e
                  , n = (e => !(!e.formatted || !pa.test(e.formatted) || (e.formatted = e.formatted.replace(ma, ""),
                0)))(t)
                  , r = (e => e.formatted ? fa.test(e.plain) ? (e.plain = e.plain.replace(fa, "").trimStart(),
                e.plain) : e.formatted : e.plain)(t);
                return da(da({
                    list: 0,
                    cells: []
                }, e), {}, {
                    text: t.formatted || t.plain,
                    unfilledCount: e.cells ? e.cells.length : 1 / 0,
                    isImageClue: n,
                    alternativeAriaLabelText: r
                })
            }
            ;
            function ya(e, t) {
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
            function wa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ya(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ya(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const _a = (e, t) => {
                return wa(wa({}, e), {}, {
                    attributes: (n = e.attributes || [],
                    n.reduce(( (e, t) => {
                        let {name: n, value: r} = t;
                        if ("fill" === n)
                            return e;
                        let a = n.startsWith("data") ? n : n.replace(/-([a-z])/, ( (e, t) => t.toUpperCase()));
                        return "class" === n && (a = "className"),
                        wa(wa({}, e), {}, {
                            [a]: r || null
                        })
                    }
                    ), {})),
                    children: e.children ? e.children.map(_a) : [],
                    index: t
                });
                var n
            }
            ;
            var Ea = e => {
                const {height: t, width: n} = e;
                return {
                    rowCount: t,
                    columnCount: n,
                    aspectRatio: n / t,
                    cellSize: Math.floor(500 / n)
                }
            }
              , Oa = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const {beforeStart: n, afterSolve: r} = t
                  , a = t => null == t ? "" : (e[t - 1] || {}).uri || "";
                return {
                    beforeStart: a(n),
                    afterSolve: a(r)
                }
            };
            function Sa(e, t) {
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
            function ka(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sa(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sa(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var Ca = (e, t) => {
                let n, {publicationDate: r, publishStream: a} = t;
                if ("daily" !== a)
                    return e;
                switch (fe(r, "MMMDDYYYY")) {
                case "Feb021995":
                    n = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
                    break;
                case "Nov022004":
                    n = [225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 237, 238, 239];
                    break;
                case "Oct302014":
                    n = [0, 1, 2, 13, 14, 15, 16, 17, 30, 31, 32, 47, 208, 223, 224, 225, 238, 239, 240, 241, 242, 253, 254, 255];
                    break;
                case "Jan062015":
                    n = [60, 61, 62, 88, 89, 135, 136, 162, 163, 164];
                    break;
                case "Feb142018":
                    n = [0, 1, 6, 7, 8, 9, 10, 15, 16, 17, 24, 25, 26, 33, 42, 170, 186, 187, 188, 202, 203, 204, 205, 206, 218, 219, 220, 221, 222, 223, 224, 234, 235, 236, 237, 238, 239, 240, 241, 242, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 282, 283, 284, 285, 286, 287, 288];
                    break;
                default:
                    return e
                }
                return e.map(( (e, t) => ka(ka({}, e), {}, {
                    type: n.includes(t) ? 4 : e.type
                })))
            }
            ;
            const Pa = ["assets", "body"]
              , xa = ["SVG"];
            function ja(e, t) {
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
            function Na(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ja(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function La(e, t) {
                if (null == e)
                    return {};
                var n, r, a = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = {}, o = Object.keys(e);
                    for (r = 0; r < o.length; r++)
                        n = o[r],
                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        n = o[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ta = (e, t) => {
                const {assets: n, body: [r]} = e
                  , a = La(e, Pa)
                  , {SVG: o} = r
                  , i = La(r, xa)
                  , s = ( (e, t) => {
                    return sa(sa({
                        category: 0
                    }, e), {}, {
                        goldStarCutoff: (n = e.publicationDate,
                        (e => "string" == typeof e && la.exec(e))(n) ? ce().tz(n, "America/Los_Angeles").endOf("day").format() : ce()({
                            year: 3e3
                        }).format()),
                        notes: e.notes ? e.notes.reduce(ca, []) : e.notes,
                        publishStream: t
                    });
                    var n
                }
                )(a, t)
                  , l = (e => {
                    const t = e.cells.map(va).map(ba)
                      , n = e.clues.map(ha).map(ga).map(ba)
                      , r = e.clueLists.map((t => ( (e, t) => {
                        const n = e.clues.map((e => t[e]));
                        return da(da({}, e), {}, {
                            cells: n.reduce(( (e, t) => e.concat(t.cells || [])), [])
                        })
                    }
                    )(t, e.clues))).map(ga).map(ba);
                    return da(da({}, e), {}, {
                        clues: n,
                        cells: t,
                        clueLists: r
                    })
                }
                )(i);
                return Na(Na({
                    meta: s
                }, l), {}, {
                    cells: Ca(l.cells, s),
                    dimensions: Ea(i.dimensions),
                    board: (c = o,
                    _a(c)),
                    overlays: Oa(n, i.overlays)
                });
                var c
            }
            ;
            const Ia = ["cells", "clues"];
            const Da = (e, t) => (n, r) => {
                ye(r()) || s.Be.get("".concat(yn, "/v6/puzzle/").concat(e, ".json"), {
                    withStatus: !0,
                    headers: {
                        "X-Games-Auth-Bypass": "true"
                    }
                }).then((e => {
                    if (200 === e.status) {
                        const r = Ta(e, t)
                          , {cells: a, clues: o} = r
                          , i = function(e, t) {
                            if (null == e)
                                return {};
                            var n, r, a = function(e, t) {
                                if (null == e)
                                    return {};
                                var n, r, a = {}, o = Object.keys(e);
                                for (r = 0; r < o.length; r++)
                                    n = o[r],
                                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++)
                                    n = o[r],
                                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                            }
                            return a
                        }(r, Ia);
                        n(( (e, t, n) => ({
                            type: Fn,
                            payload: {
                                cells: e,
                                clues: t,
                                puzzle: n
                            }
                        }))(a, o, i)),
                        n((e => ({
                            type: W,
                            payload: {
                                cells: e
                            }
                        }))(a))
                    } else
                        n(Yn(e.status))
                }
                )).catch((e => {
                    console.error(e),
                    n(Yn(e.status))
                }
                ))
            }
            ;
            var Ba = n(67522)
              , za = n(19406)
              , Ma = n(9478);
            function Aa(e, t) {
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
            function Ra(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Aa(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aa(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Ga = e => {
                let t, n = window.location.href;
                void 0 !== e && ({puzzleUrl: n=window.location.href, level: t} = e);
                const r = (0,
                l.jL)(n);
                let a = {};
                return void 0 !== t && (a = Ra(Ra({}, a), {}, {
                    headers: {
                        "NYT-M-Level": window.btoa(t.toString())
                    }
                })),
                Ma.fF.isMeterInDebugMode || !window.abra || window.isHybridWebView || window.gamesAppPlatform || window.newsreaderAppPlatform ? (0,
                Ma.WO)(n, t) : s.Be.get(r, a).then((e => {
                    (0,
                    Ba.kg)("Meter service request succeeded", [r, n, t], e);
                    const a = Ra(Ra({}, e), {}, {
                        isOffline: !1
                    });
                    return (0,
                    l.K7)(a),
                    a
                }
                )).catch((e => ((0,
                Ba.kg)("Meter service request failed", [r, n, t], e),
                ( () => {
                    const e = (0,
                    l.lJ)()
                      , t = Ra(Ra({}, e), {}, {
                        isOffline: !0
                    });
                    var n;
                    return !(n = t).granted || n.grantReason !== za.Q.IP && n.grantReason !== za.Q.SUBSCRIBER && n.grantReason !== za.Q.OPEN && n.grantReason !== za.Q.REFERRER && n.grantReason !== za.Q.FREETIME ? (0,
                    Ba.kg)("Game is instructed not fail open due to previous grantReason", [e.grantReason]) : (0,
                    Ba.kg)("Game is instructed to fail open based on previous grantReason", [e.grantReason]),
                    t
                }
                )())))
            }
            ;
            var Ua = n(38918);
            n(42101),
            n(46098),
            n(29949),
            n(83910);
            const Ha = (0,
            $.createSelector)((e => e.rollout), (e => e.phase));
            var Wa = function(e) {
                return e[e.NoStar = 0] = "NoStar",
                e[e.Blue = 1] = "Blue",
                e[e.Gold = 2] = "Gold",
                e
            }(Wa || {});
            const Fa = () => {
                var e;
                const {stream: t} = null !== (e = window.gameData) && void 0 !== e ? e : {};
                let n;
                switch (t) {
                case "daily":
                case "mini":
                case "promo":
                case "bonus":
                    n = "crossword_".concat(t);
                    break;
                default:
                    n = "crossword_undated"
                }
                return n
            }
              , qa = {
                game: Fa(),
                selectPuzzleIdOrSettings: e => {
                    const t = Ce(e);
                    return t ? t.toString() : ""
                }
                ,
                selectMoogleState: e => e.moogle,
                shouldSave: (e, t) => {
                    const n = Ha(e);
                    return !(n !== ra.LEGACY_WITH_STATE && n !== ra.STATE_ONLY || t.type !== gt && t.type !== vt && t.type !== ut && t.type !== F || (console.log("[XWD on State] Will save state due to action", t.type, t.payload),
                    0))
                }
                ,
                selectPersistedState: e => {
                    const t = {
                        cells: [],
                        penciled: [],
                        checked: [],
                        revealed: [],
                        modified: [],
                        correct: [],
                        isSolved: kn(e),
                        playTimeSeconds: cr(e),
                        isAutocheckEnabled: Cn(e),
                        isTimerReset: !!On(e).firsts.timerReset,
                        completionFraction: Pn({
                            cells: be(e),
                            status: On(e)
                        }),
                        star: 0
                    };
                    be(e).forEach((e => {
                        const {index: n, guess: r, penciled: a, checked: o, revealed: i, modified: s} = e;
                        t.cells.push({
                            index: n,
                            guess: r
                        }),
                        a && t.penciled.push(n),
                        o && t.checked.push(n),
                        i && t.revealed.push(n),
                        s && t.modified.push(n),
                        N(e) && t.correct.push(n)
                    }
                    )),
                    kn(e) && "crossword_daily" === Fa() ? jn(e) ? t.star = Wa.Gold : t.star = Wa.Blue : t.star = Wa.NoStar;
                    const n = Ha(e);
                    return (n === ra.LEGACY_WITH_STATE || n === ra.STATE_ONLY) && (console.groupCollapsed("[XWD on State] selectPersistedState"),
                    console.log("Persisting state to state service"),
                    console.dir(t),
                    console.groupEnd()),
                    t
                }
                ,
                insertProgress: e => (t, n) => {
                    Ha(n()) === ra.LEGACY_WITH_STATE ? (console.groupCollapsed("[XWD on State Phase: LEGACY_WITH_STATE] insertProgress invoked"),
                    console.table(e),
                    console.groupEnd()) : ra.STATE_ONLY
                }
            }
              , Ya = (function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
            }(qa),
            (0,
            Ua.d)(qa));
            var Va = n(64403)
              , Za = n.n(Va)
              , Ka = n(71286)
              , Xa = n(48079)
              , Ja = n(20615)
              , Qa = n(22628)
              , $a = n(53789)
              , eo = n(14237)
              , to = n(57256);
            const no = e => e.modal
              , ro = (0,
            $.createSelector)(no, (e => e.name))
              , ao = (0,
            $.createSelector)(ro, (e => !!e))
              , oo = (0,
            $.createSelector)(no, (e => e.config || {
                actionType: "",
                scope: null,
                needToWarn: !1
            }))
              , io = (0,
            $.createSelector)(no, (e => e.isClosing))
              , so = (e, t) => {
                const n = (e => {
                    switch (e) {
                    case Dt.Fifty:
                        return .5;
                    case Dt.SeventyFive:
                        return .75;
                    default:
                        return 1
                    }
                }
                )(t)
                  , r = e.filter((e => k(e)));
                return r[Math.ceil(r.length * n - 1)].index
            }
              , lo = (e, t) => {
                const {cells: n, selection: r} = e;
                return n && n.filter(( (e, n) => {
                    switch (t) {
                    case Dt.Letter:
                        return r && r.cell === n;
                    case Dt.Word:
                        return r && r.clueCells.includes(n);
                    case Dt.Puzzle:
                    default:
                        return !0
                    }
                }
                ))
            }
              , co = e => {
                let {cells: t, clues: n, selection: r} = e;
                return (r ? r.clueCells.map((e => t && t[e])) : []).filter((e => {
                    const t = null == e ? void 0 : e.clues.filter((e => e !== (null == r ? void 0 : r.clue)));
                    return null == t ? void 0 : t.some((e => n && n[e].unfilledCount > 0))
                }
                ))
            }
              , uo = (e, t) => (t === Dt.Unchecked ? co : lo)(e, t)
              , mo = (e, t, n) => {
                const r = uo(e, n)
                  , a = (e => {
                    switch (e) {
                    case w:
                    case V:
                        return D;
                    case E:
                        return T;
                    case q:
                    case F:
                        return k;
                    default:
                        return I
                    }
                }
                )(t);
                return null == r ? void 0 : r.filter(a)
            }
              , po = (e, t, n, r) => P(e) && !r ? 0 : t !== n ? t ? 1 : -1 : 0
              , fo = (e, t, n) => po(e, !t, C(e), !!n)
              , bo = (e, t, n) => po(e, !j(e, t), L(e), !!n)
              , go = e => (t, n) => {
                const r = n()
                  , a = xe(r)
                  , o = Ce(r)
                  , i = cr(r);
                o && (0 === i && Tt("click", o, "mini" === a ? "mini-page" : "game-page", "start-game"),
                t({
                    type: g,
                    payload: {
                        now: ce()().unix(),
                        user: e
                    }
                }))
            }
              , vo = () => (e, t) => {
                const n = t()
                  , r = be(n)
                  , a = ve(n);
                e({
                    type: f,
                    payload: {
                        cells: r,
                        clues: a
                    }
                })
            }
            ;
            let ho = function(e) {
                return e.Start = "Start",
                e.Pause = "Pause",
                e.Info = "Info",
                e.Settings = "Settings",
                e.Rats = "Rats",
                e.Congrats = "Congrats",
                e.Print = "Print",
                e.Confirmation = "Confirmation",
                e.Share = "Share",
                e
            }({});
            const yo = e => e.toolbar
              , wo = (0,
            $.createSelector)(yo, (e => e.inPencilMode))
              , _o = (0,
            $.createSelector)(yo, (e => e.inRebusMode))
              , Eo = (0,
            $.createSelector)(yo, (e => e.rebusValue))
              , Oo = (0,
            $.createSelector)(yo, (e => e.activeMenu))
              , So = () => (e, t) => {
                const n = t()
                  , r = De(n)
                  , a = je(n);
                if (!P(r)) {
                    const t = Ce(n);
                    Tt("click", t, a ? "mini-page" : "game-page", "rebus"),
                    e((o = (null == r ? void 0 : r.guess) || "",
                    {
                        type: Ot,
                        payload: {
                            initialValue: o
                        }
                    }))
                }
                var o
            }
              , ko = e => (t, n) => {
                const r = n()
                  , a = Eo(r);
                if (e) {
                    const e = function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toUpperCase().trim()
                    }(a);
                    t(jo(e, !0))
                }
                t({
                    type: St
                })
            }
              , Co = () => (e, t) => {
                const n = t();
                e(_o(n) ? ko(!0) : So())
            }
              , Po = [20, 40, 60, 80]
              , xo = () => (e, t) => {
                const {status: n} = t()
                  , {incorrectCells: r, blankCells: a, isFilled: o} = n;
                let i = "";
                const s = 0 === a
                  , l = 0 === r
                  , c = s && !l
                  , u = !s;
                l ? (i = Y,
                e(pt(ho.Congrats))) : c && !o ? (i = X,
                e(pt(ho.Rats))) : u && o && (i = J),
                e(( (e, t) => {
                    const n = t()
                      , r = Ce(n)
                      , a = Sn(n)
                      , o = cr(n)
                      , i = ur(n);
                    if (!r)
                        return;
                    const s = je(n) ? "mini-page" : "game-page"
                      , l = xn(n)
                      , c = Math.floor(l / .2)
                      , u = ue(o, i);
                    if (c > a) {
                        for (let e = a; e < c && e < Po.length; e += 1)
                            Tt("complete", r, s, "".concat(Po[e], "%-complete"), "".concat(u));
                        e({
                            type: K,
                            payload: {
                                currentProgress: c
                            }
                        })
                    }
                }
                )),
                i && e({
                    type: i,
                    payload: {
                        now: ce()().unix()
                    }
                })
            }
              , jo = (e, t) => (n, r) => {
                const a = r()
                  , {isSolved: o, autocheckEnabled: i} = On(a)
                  , s = be(a);
                if (o)
                    return;
                const l = De(a)
                  , {inPencilMode: c} = a.toolbar;
                n({
                    type: O,
                    payload: {
                        blankDelta: l && fo(l, e),
                        incorrectDelta: l && bo(l, e),
                        index: l && l.index,
                        inPencilMode: c,
                        autocheckEnabled: i,
                        value: e,
                        fromRebus: !!t,
                        now: ce()().unix(),
                        cells: s
                    }
                }),
                n(xo())
            }
              , No = (e, t) => (n, r) => {
                const a = r()
                  , o = uo(a, t)
                  , i = mo(a, e, t)
                  , s = ( (e, t) => {
                    switch (e) {
                    case q:
                        return e => e.index >= t ? "" : e.answer;
                    case E:
                        return e => e.answer;
                    default:
                        return () => ""
                    }
                }
                )(e, so(a.cells, t))
                  , l = e === q
                  , c = be(a)
                  , u = {
                    scope: null != t ? t : void 0,
                    cellsInScope: o.map((e => e.index)),
                    affectedCells: i.map((e => e.index)),
                    blankDeltas: i.map((e => fo(e, s(e), l))),
                    incorrectDeltas: i.map((e => bo(e, s(e), l))),
                    now: ce()().unix(),
                    cells: c
                };
                l && Object.assign(u, {
                    index: so(a.cells, t)
                }),
                n({
                    type: e,
                    payload: u
                }),
                e === F && n(vo()),
                n(xo())
            }
              , Lo = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return (n, r) => {
                    const a = r()
                      , o = jn(a)
                      , {suppressDisqualificationWarnings: i} = te(a)
                      , {isSolved: s} = On(a);
                    if (s)
                        return void (e === F && (n(ko(!1)),
                        n(No(e, t))));
                    const l = t === Dt.Puzzle && e !== w
                      , c = [w, E, F, V].includes(e) && o && !i;
                    return n(c || l ? pt(ho.Confirmation, {
                        needToWarn: c,
                        actionType: e,
                        scope: t
                    }) : No(e, t))
                }
            }
              , To = () => (e, t) => {
                const n = t()
                  , r = Ce(n)
                  , a = je(n) ? "mini-page" : "game-page";
                Cn(n) ? (e({
                    type: Z
                }),
                Tt("gameplay", r, a, "auto-check", "turn-off")) : (e(Lo(V)),
                Tt("gameplay", r, a, "auto-check", "turn-on"))
            }
              , Io = e => (t, n) => {
                const r = n()
                  , a = Ce(r);
                if (!a)
                    return;
                const o = ( (e, t) => zn().getItem(An(e.regiId, t)))(e, a).catch(( () => (dn.debug("error fetching local progress"),
                null)))
                  , i = ( (e, t, n) => {
                    const r = e.isLoggedIn ? ( (e, t) => {
                        console.log("123", n)
                        const n = "".concat(yn, "/v6/game/").concat(t)
                          , r = "".concat(n, ".json");
                        return wn({
                            method: "GET",
                            url: r
                        }, e)
                    }
                    )(e, t).then((e => n(e))) : Promise.resolve(null);
                    return r
                }
                )(e, a, sr).catch(( () => (dn.debug("error fetching remote progress"),
                null)));
                Promise.all([o, i]).then((n => {
                    var r;
                    let[a,o] = n;
                    const i = ( (e, t) => {
                        var n;
                        return !t || !t.lastCommitID || (null == e || null === (n = e.status) || void 0 === n ? void 0 : n.lastCommitID) === t.lastCommitID
                    }
                    )(a, o)
                      , s = i ? a : o
                      , l = i ? null == a || null === (r = a.status) || void 0 === r ? void 0 : r.lastCommitID : null == o ? void 0 : o.lastCommitID;
                    s && t((e => (t, n) => {
                        t({
                            type: p,
                            payload: e
                        }),
                        t(vo())
                    }
                    )(s)),
                    t(( (e, t) => (n, r) => {
                        n(y(t));
                        const a = r()
                          , o = te(a);
                        if ($a.tq)
                            return;
                        const {status: i} = a;
                        o.showTimer && !i.isSolved || n(go(e))
                    }
                    )(e, l))
                }
                ))
            }
              , Do = () => (e, t) => {
                const {user: n} = t()
                  , {settings: r} = n;
                return e("toggle" === r.spaceTriggers ? G() : jo(""))
            }
              , Bo = () => Lo(_, Dt.Letter)
              , zo = () => (e, t) => {
                const n = t()
                  , r = mo(n, _, Dt.Letter);
                0 === (null == r ? void 0 : r.length) && e(U("Backspace")),
                e(Bo())
            }
              , Mo = () => pt(ho.Pause)
              , Ao = (e, t) => t < 33 || t > 126 && t < 161 ? null : e.length > 1 ? String.fromCharCode(t).toUpperCase() : e.toUpperCase();
            function Ro(e, t) {
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
            function Go(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ro(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ro(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Uo = e => e.transient
              , Ho = (0,
            $.createSelector)(Uo, (e => e.isReady))
              , Wo = (0,
            $.createSelector)(Uo, (e => e.doEscape))
              , Fo = (e, t) => {
                let n;
                return function() {
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                        a[o] = arguments[o];
                    const i = this;
                    clearTimeout(n),
                    n = setTimeout(( () => e.apply(i, a)), t)
                }
            }
            ;
            var qo = () => {
                const [e,t] = (0,
                r.useState)({
                    winHeight: window.innerHeight,
                    winWidth: window.innerWidth
                });
                return (0,
                r.useEffect)(( () => {
                    const e = Fo(( () => {
                        t({
                            winHeight: window.innerHeight,
                            winWidth: window.innerWidth
                        })
                    }
                    ), 50);
                    return window.addEventListener("resize", e),
                    () => window.removeEventListener("resize", e)
                }
                ), []),
                e
            }
            ;
            const Yo = (0,
            $.createSelector)((e => e.stats), (e => e.streaks))
              , Vo = (0,
            $.createSelector)(Yo, (e => (null == e ? void 0 : e.currentStreak) || 0))
              , Zo = /Easy\sMode\sNo.\s+[0-9]\d*$/
              , Ko = e => e && e.length > 1 ? e[0].toUpperCase() + e.slice(1) : ""
              , Xo = e => "cell-id-".concat(e)
              , Jo = e => e && 0 !== e.length ? 1 === e.length ? e[0].toString() : [e.slice(0, -1).join(", ")].concat(e.slice(-1).map((e => e.toString()))).join(" and ") : ""
              , Qo = e => void 0 === e ? "By" : Zo.test(e) ? "Grid by" : "By"
              , $o = e => {
                const t = "Edited by";
                return void 0 === e ? t : Zo.test(e) ? "Clues by" : t
            }
            ;
            var ei = n(69202);
            const ti = [{
                id: 14177,
                anchor: "monday-level-easy"
            }, {
                id: 14050,
                anchor: "fill-in-the-blanks"
            }, {
                id: 14041,
                anchor: "tense"
            }, {
                id: 14044,
                anchor: "tense"
            }, {
                id: 14045,
                anchor: "tense"
            }, {
                id: 14042,
                anchor: "tense"
            }, {
                id: 14047,
                anchor: "partners"
            }, {
                id: 14046,
                anchor: "partners"
            }, {
                id: 14043,
                anchor: "partners"
            }, {
                id: 14048,
                anchor: "question-marks"
            }, {
                id: 14049,
                anchor: "question-marks"
            }, {
                id: 14051,
                anchor: "question-marks"
            }, {
                id: 14052,
                anchor: "question-marks"
            }, {
                id: 14053,
                anchor: "rebus"
            }]
              , ni = ti.map((e => e.id))
              , ri = e => {
                const t = ti.find((t => t.id === e));
                return t ? t.anchor : ""
            }
            ;
            var ai = n(35080)
              , oi = n.n(ai)
              , ii = n(775)
              , si = n.n(ii)
              , li = n(18875)
              , ci = n.n(li)
              , ui = n(89064)
              , di = n(73961)
              , mi = n(32825);
            function pi(e) {
                let {buttons: t, close: n, wrapperClassName: a=""} = e;
                return r.createElement("div", {
                    className: Za()("xwd__modal--button-container", a)
                }, t.map((e => {
                    return e.link ? (t = e,
                    r.createElement("a", {
                        key: t.label,
                        href: t.link,
                        onClick: t.clickHandler,
                        className: Za()("xwd__modal--button", t.className),
                        tabIndex: 0
                    }, r.createElement("div", {
                        role: "button",
                        "aria-label": t.label
                    }, r.createElement("span", null, t.label)))) : (e => r.createElement("button", {
                        key: e.label,
                        type: "button",
                        onClick: e.clickHandler || n,
                        className: Za()("pz-moment__button", e.className),
                        disabled: !!e.disabled,
                        "aria-disabled": !!e.disabled,
                        "aria-label": e.label
                    }, r.createElement("span", null, e.label)))(e);
                    var t
                }
                )))
            }
            var fi = n(36797);
            function bi(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            class gi extends r.Component {
                constructor(e) {
                    super(e),
                    bi(this, "focusRef", void 0),
                    bi(this, "frozenFocus", void 0),
                    bi(this, "isOpen", void 0),
                    bi(this, "closeWithoutPropagation", (e => {
                        const {close: t} = this.props;
                        e.preventDefault(),
                        e.stopPropagation(),
                        t()
                    }
                    )),
                    bi(this, "onKeyDown", (e => {
                        const {handleKeyDown: t, keyConfig: n} = this.props
                          , {key: r, ctrlKey: a, metaKey: o, target: i} = e;
                        if (t && t(r, e),
                        a || o)
                            return;
                        const s = null == n ? void 0 : n[r];
                        if (s)
                            return s(e, this.focusRef.current);
                        if (["Enter", "NumpadEnter", "Escape"].includes(r)) {
                            if ("Enter" === r && "A" === (null == i ? void 0 : i.nodeName) || "BUTTON" === (null == i ? void 0 : i.nodeName))
                                return;
                            return this.closeWithoutPropagation(e)
                        }
                    }
                    )),
                    bi(this, "componentDidMount", ( () => {
                        this.focusRef.current && this.focusRef.current.focus({
                            preventScroll: !0
                        })
                    }
                    )),
                    bi(this, "componentWillUnmount", ( () => {
                        this.frozenFocus instanceof HTMLElement && this.frozenFocus.focus({
                            preventScroll: !0
                        })
                    }
                    )),
                    bi(this, "handleBackgroundClick", (e => {
                        const {close: t, ignoreBackgroundClick: n} = this.props;
                        n || e.target === e.currentTarget && t()
                    }
                    )),
                    bi(this, "handleAnimationEnd", (e => {
                        const {onRemove: t} = this.props;
                        "SlideOut" === e.animationName && (0,
                        di.flushSync)(( () => t()))
                    }
                    )),
                    bi(this, "trapFocus", ( () => {
                        var e;
                        const t = null === (e = this.focusRef) || void 0 === e ? void 0 : e.current;
                        if (this.isOpen && t) {
                            const e = t.querySelectorAll(fi.c);
                            if (!e)
                                return;
                            const n = e[0]
                              , r = e[e.length - 1]
                              , a = e => {
                                "Tab" === e.key && (e.shiftKey && document.activeElement === n ? (e.preventDefault(),
                                r.focus()) : e.shiftKey || document.activeElement !== r || (e.preventDefault(),
                                n.focus()))
                            }
                            ;
                            return t.addEventListener("keydown", a),
                            () => {
                                t.removeEventListener("keydown", a)
                            }
                        }
                    }
                    )),
                    this.focusRef = e.focusRef || r.createRef(),
                    this.frozenFocus = document.activeElement,
                    this.isOpen = !0
                }
                render() {
                    const {buttons: e, children: t, hideCloseX: n, bodyClassName: a, omaESAClassName: o, footer: i, buttonsWrapperClassName: s, showHeader: l, closeLabel: c, isClosing: u, noAnimateOpen: d, isAnimatedToCenter: m, containerClassName: p, overlayClassName: f, dataTestId: b} = this.props
                      , g = r.createElement("div", {
                        role: "button",
                        "aria-label": c || "close",
                        className: "xwd__modal--close",
                        onClick: this.closeWithoutPropagation,
                        tabIndex: 0,
                        onKeyDown: this.onKeyDown,
                        "data-testid": "modal-close"
                    }, c, r.createElement(mi.Z, {
                        icon: "close"
                    }));
                    return r.createElement("div", {
                        role: "dialog",
                        "aria-modal": "true",
                        className: Za()("modal-system-container", p),
                        "data-testid": null != b ? b : "modal-wrapper",
                        "aria-label": "modal"
                    }, r.createElement("div", {
                        className: "xwd__modal--wrapper"
                    }, r.createElement("div", {
                        id: "modalWrapper-overlay",
                        onClick: e => this.handleBackgroundClick(e),
                        className: Za()("xwd__modal--overlay", f, {
                            showHeader: l
                        })
                    }), r.createElement("div", {
                        className: Za()("xwd__modal--body", a, o, {
                            "animate-opening": !d,
                            "animate-opening-slide-up": !d && m,
                            closing: u
                        }),
                        onAnimationEnd: this.handleAnimationEnd,
                        onKeyDown: this.onKeyDown,
                        onBlur: this.trapFocus,
                        ref: this.focusRef,
                        tabIndex: 0
                    }, !n && g, r.createElement("article", {
                        className: "xwd__modal--content"
                    }, t, e && r.createElement(pi, {
                        buttons: e,
                        close: this.closeWithoutPropagation,
                        wrapperClassName: s
                    }), i))))
                }
            }
            var vi = gi
              , hi = e => {
                let {isMini: t, isGold: n} = e;
                const {isWeb: a} = (0,
                Ba.vB)()
                  , o = t && a
                  , i = !t && n ? "gold" : "blue"
                  , s = "xwd__".concat(o ? "mini" : "puzzle", "-progress--").concat(i, "-star")
                  , l = o ? "mini__puzzle-icon" : "xwd__puzzle-icon";
                return r.createElement("div", {
                    "data-star": n,
                    "data-testid": "puzzle-icon",
                    className: Za()(l, s)
                })
            }
            ;
            function yi() {
                return yi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                yi.apply(this, arguments)
            }
            var wi = e => r.createElement("button", yi({
                type: "button",
                className: "pz-hybrid-back pz-hide-web pz-hide-play-tab pz-hide-newsreader-ios-hybrid"
            }, e), r.createElement("span", {
                className: "pz-hybrid-back__text"
            }, "Back"));
            const _i = e => {
                let {trackData: t, override: n} = e;
                return window.isHybridWebView && window.NativeBridge ? "ios" === window.newsreaderAppPlatform ? null : r.createElement(wi, {
                    onClick: () => {
                        var e;
                        if (n)
                            n();
                        else {
                            if (t) {
                                const {elementName: e, context: n, moduleLabel: r} = t
                                  , a = "back";
                                (0,
                                s.$g)("click", n, e, a, r)
                            }
                            null === (e = window.NativeBridge) || void 0 === e || e.gamesBackToHub()
                        }
                    }
                }) : null
            }
              , Ei = e => {
                let {text: t, size: n="large", font: a="karnak", level: o="1"} = e;
                const i = "h".concat(o)
                  , s = Za()("pz-moment__title", n, a);
                return r.createElement(i, {
                    className: s
                }, t)
            }
              , Oi = e => {
                let {text: t, variant: n="default", font: a="karnak", level: o="1"} = e;
                const i = "h".concat(o)
                  , s = Za()("pz-moment__description", n, a);
                return r.createElement(i, {
                    className: s,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
            ;
            var Si = n(22865)
              , ki = n.n(Si);
            const Ci = (e, t) => {
                if (!e || !t)
                    return e;
                const n = -1 === e.indexOf("?") ? "?" : "&";
                return encodeURIComponent("".concat(e).concat(n, "smid=").concat(t))
            }
              , Pi = (e, t) => {
                const n = "d=".concat(e, "&t=").concat(t)
                  , r = ki()(n);
                return {
                    shareUrl: "".concat("https://www.nytimes.com/badges/christmas_word_puzzles/nyt_games/mini.html", "?").concat(n, "&c=").concat(r),
                    shareImageSrc: "".concat("https://www.nytimes.com/badges/christmas_word_puzzles/nyt_games/mini.png", "?").concat(n, "&c=").concat(r)
                }
            }
              , xi = encodeURIComponent("https://www.facebook.com/");
            var ji = n(36803)
              , Ni = n.n(ji);
            const Li = {
                label: "connections",
                context: "connections",
                icon: "connections",
                href: "/christmas_word_puzzles/nyt_games/connections",
                title: "Connections",
                description: "Group words"
            }
              , Ti = {
                label: "sudoku",
                context: "sudoku",
                icon: "sudoku",
                href: "/today",
                title: "The Today Page",
                description: "Back to All Games"
            }
              , Ii = {
                label: "strands",
                context: "strands",
                icon: "strands",
                href: "/christmas_word_puzzles/nyt_games/strands",
                title: "Strands",
                description: "Find hidden words"
            }
              , Di = {
                label: "spelling-bee",
                context: "spelling-bee",
                icon: "sb",
                href: "/puzzles/spelling-bee",
                title: "Spelling Bee",
                description: "Wrangle words"
            }
              , Bi = {
                label: "game-page",
                context: "daily-page",
                icon: "crossword",
                href: "/christmas_word_puzzles/nyt_games/leaderboard",
                title: "Leaderboard",
                description: "See who's winning"
            }
              , zi = () => {
                const e = [];
                return e.push(Li, Ii),
                e
            }
            ;
            var Mi = n(2652)
              , Ai = n.n(Mi);
            const Ri = "undefined" == typeof window ? {} : window
              , Gi = "__viewers__";
            let Ui;
            "IntersectionObserver"in Ri && "IntersectionObserverEntry"in Ri && "intersectionRatio"in Ri.IntersectionObserverEntry.prototype && ("isIntersecting"in Ri.IntersectionObserverEntry.prototype || Object.defineProperty(Ri.IntersectionObserverEntry.prototype, "isIntersecting", {
                get() {
                    return this.intersectionRatio > 0
                }
            }),
            Ri.__observeInView__ = !0);
            function Hi() {
                return Hi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Hi.apply(this, arguments)
            }
            const Wi = {
                tagName: Ai().string,
                event: Ai().string.isRequired,
                eventRegion: Ai().string,
                eventLabel: Ai().string,
                eventContext: Ai().string,
                onClick: Ai().func,
                data: Ai().object
            }
              , Fi = {};
            class qi extends r.PureComponent {
                constructor(e) {
                    super(e),
                    this.wrapper = r.createRef()
                }
                componentDidMount() {
                    var e, t;
                    this.wrapper.current && (e = this.wrapper.current,
                    t = () => {
                        var e;
                        const {event: t, eventRegion: n, eventLabel: r, eventContext: a, data: o} = this.props
                          , i = t + n + r
                          , s = null == o || null === (e = o.card) || void 0 === e ? void 0 : e.uri;
                        var l, c, u, d;
                        s ? Fi[s] || (window.foundationTrack("impression", o),
                        Fi[s] = !0) : Fi[i] || (l = t,
                        c = n,
                        u = r,
                        d = a,
                        "undefined" != typeof window && window.foundationTrack && window.foundationTrack("impression", {
                            module: {
                                name: l,
                                context: d,
                                region: c || "",
                                label: u || void 0
                            }
                        }),
                        Fi[i] = !0)
                    }
                    ,
                    window.__observeInView__ && (Ui || (Ui = new Ri.IntersectionObserver((e => {
                        e.forEach((e => {
                            e.isIntersecting && e.target[Gi].forEach((t => t(e)))
                        }
                        ))
                    }
                    ),{
                        threshold: .4
                    })),
                    e[Gi] ? e[Gi].push(t) : (e[Gi] = [t],
                    Ui.observe(e))))
                }
                render() {
                    const {tagName: e, onClick: t} = this.props
                      , n = e
                      , a = {};
                    return Object.entries(this.props).forEach((e => {
                        let[t,n] = e;
                        Wi[t] || (a[t] = n)
                    }
                    )),
                    r.createElement(n, Hi({}, a, {
                        ref: this.wrapper,
                        onClick: t
                    }))
                }
            }
            qi.propTypes = Wi,
            qi.defaultProps = {
                tagName: "div",
                eventRegion: "scroll-to",
                eventLabel: "",
                eventContext: "",
                onClick: () => {}
                ,
                data: null
            };
            var Yi = qi
              , Vi = {
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
                gamesStackOuter: "GamesCarouselStack-module_gamesStackOuter__hu4_1",
                lockIcon: "GamesCarouselStack-module_lockIcon__XRL7T",
                slideDown: "GamesCarouselStack-module_slideDown__l1Hja",
                flyIn: "GamesCarouselStack-module_flyIn__J88Nh",
                flyOut: "GamesCarouselStack-module_flyOut__z0dbt",
                fadeIn: "GamesCarouselStack-module_fadeIn__QX6EP"
            };
            const Zi = e => {
                var t;
                let {label: n, href: a, title: o, description: i, icon: l, showLock: c=!1, tracking: u, clickTracking: d, impressionTracking: m} = e;
                (0,
                r.useEffect)(( () => {
                    m && It(m.name, m.region, m.label, m.context)
                }
                ), []);
                let p = a;
                var f;
                if (null !== (t = window) && void 0 !== t && null !== (t = t.location) && void 0 !== t && t.search && (p += null === (f = window) || void 0 === f || null === (f = f.location) || void 0 === f ? void 0 : f.search),
                u) {
                    const {context: e, eventRegion: t, eventDate: a} = u
                      , m = () => {
                        const r = "Connections Archive" === o
                          , i = "wordle" === u.eventRegion;
                        d && (0,
                        s.ob)(d),
                        (0,
                        s.$g)({
                            date: a,
                            t: "today"
                        }, i ? n : e, t, r ? "archive" : "next-game", n, !1, "congrats")
                    }
                    ;
                    return r.createElement(Yi, {
                        tagName: "a",
                        event: "next-game",
                        eventRegion: t,
                        eventLabel: n,
                        eventContext: e,
                        href: p,
                        className: Za()(Vi.carouselGameItem, Vi[l]),
                        onClick: m
                    }, r.createElement(r.Fragment, null, c && r.createElement("i", {
                        className: Vi.lockIcon
                    }), r.createElement("div", {
                        role: "img",
                        "aria-label": o,
                        className: Vi.icon
                    }), r.createElement("p", null, o), r.createElement("span", null, i)))
                }
                return r.createElement("a", {
                    className: Za()(Vi.carouselGameItem, Vi[l]),
                    onClick: () => {
                        d && (0,
                        s.ob)(d)
                    }
                    ,
                    href: a
                }, c && r.createElement("i", {
                    className: Vi.lockIcon
                }), r.createElement("div", {
                    role: "img",
                    "aria-label": o,
                    className: Vi.icon
                }), r.createElement("p", null, o), r.createElement("span", null, i))
            }
            ;
            function Ki() {
                return Ki = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Ki.apply(this, arguments)
            }
            const Xi = e => {
                let {header: t, games: n} = e;
                return r.createElement("div", {
                    className: "GamesCarousel-module_carousel__xzQQS",
                    "data-testid": "games-carousel"
                }, t && r.createElement("div", {
                    className: "GamesCarousel-module_carousel__header-container__YP3cn"
                }, r.createElement("hr", {
                    className: "GamesCarousel-module_carousel__line__bZUwe"
                }), r.createElement("p", {
                    className: "GamesCarousel-module_carousel__header__awm5n"
                }, t)), r.createElement("div", {
                    className: "GamesCarousel-module_carousel__games-container__JbI8O"
                }, n.map((e => r.createElement("div", {
                    className: "GamesCarousel-module_carousel__item-container__oo3OK",
                    key: e.label
                }, r.createElement(Zi, Ki({
                    impressionTracking: {
                        name: "next-game",
                        region: "mini-page",
                        label: e.label
                    },
                    clickTracking: {
                        element: {
                            name: "mini-page",
                            label: "next-game"
                        },
                        context: e.context
                    }
                }, e)))))))
            }
            ;
            function Ji(e, t) {
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
            function Qi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ji(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const $i = {
                iconClass: "NextGameButton-module_miniIcon__lVJRi",
                cardEmphasisClass: "NextGameButton-module_miniArchiveCardEmphasis__YCk6O",
                ctaText: "Play More in the Mini Archive",
                trackingData: {
                    nameLabel: "archive",
                    labelContext: ""
                }
            }
              , es = {
                iconClass: "NextGameButton-module_connectionsArchiveIcon__B_cmJ",
                cardEmphasisClass: "NextGameButton-module_connectionsArchiveCardEmphasis__MoyVp",
                cardContainerClass: "NextGameButton-module_connectionsArchiveContainer__RkumQ",
                ctaText: "Keep playing puzzles in the archive",
                trackingData: {
                    nameLabel: "archive",
                    labelContext: ""
                }
            }
              , ts = {
                "spelling-bee": {
                    iconClass: "NextGameButton-module_spellingBeeIcon__SZM9f",
                    cardEmphasisClass: "NextGameButton-module_spellingBeeCardEmphasis__WuupU",
                    ctaText: "Play Today’s Spelling Bee",
                    trackingData: {
                        nameLabel: "next-game",
                        labelContext: "spelling-bee"
                    }
                },
                "mini-archive": $i,
                "archive-sb": Qi(Qi({}, $i), {}, {
                    cardContainerClass: "NextGameButton-module_archiveSBContainer__TjAQg"
                }),
                "connections-archive": es,
                "connections-archive-today": Qi(Qi({}, es), {}, {
                    ctaText: "Explore the Connections archive"
                })
            };
            var ns = e => {
                let {nextGame: t, url: n, puzzleId: a, puzzleDate: o, fromGame: i, hasNewLabel: l, trackNextGameClick: c} = e;
                const {ctaText: u, cardEmphasisClass: d, iconClass: m, cardContainerClass: p, trackingData: f} = ts[t]
                  , {nameLabel: b, labelContext: g} = f;
                return (0,
                r.useEffect)(( () => {
                    It(b, i, g)
                }
                ), []),
                r.createElement("div", {
                    className: Za()("NextGameButton-module_nextGameCardContainer__VBiBH", p)
                }, r.createElement("div", {
                    className: Za()("NextGameButton-module_nextGameBase__Mxnf9")
                }, r.createElement("a", {
                    href: n,
                    className: Za()("NextGameButton-module_nextGameCardEmphasis__qW1dK", d),
                    onClick: () => {
                        c ? c() : "mini-archive" === t ? Tt("congrats", Number(a), i, b, "", !0) : "spelling-bee" === t ? (0,
                        s.ob)({
                            context: a,
                            moduleName: {
                                date: o,
                                t: "today"
                            },
                            region: "congrats",
                            moduleLabel: t,
                            name: i,
                            label: b
                        }) : Tt("", g, i, b, "", !0)
                    }
                }, r.createElement("span", {
                    className: Za()("NextGameButton-module_promoIcon__I9zlb", m)
                }), r.createElement("div", {
                    className: Za()("NextGameButton-module_nextGameCardText___XxRE")
                }, r.createElement("span", {
                    className: Za()("NextGameButton-module_nextGameCardDescription__WCuhF")
                }, u), l && r.createElement("span", {
                    className: Za()("NextGameButton-module_newLabel__ldHp7")
                }, "NEW")), r.createElement("span", {
                    className: Za()("NextGameButton-module_nextGameArrow__VYzXN")
                }))))
            }
              , rs = n(26171)
              , as = {
                flexContainer: "ModalBanner-module_flexContainer__Nx4Cl",
                expandToRow: "ModalBanner-module_expandToRow__ipEyH ModalBanner-module_flexContainer__Nx4Cl",
                mobileColumn: "ModalBanner-module_mobileColumn___5fG7",
                "visually-hidden": "ModalBanner-module_visually-hidden__RqNbn",
                banner: "ModalBanner-module_banner__yDlAE",
                bannerButton: "ModalBanner-module_bannerButton__UsH2t",
                buttonText: "ModalBanner-module_buttonText__xW5WU",
                bannerClose: "ModalBanner-module_bannerClose__bFRBj",
                iconButton: "ModalBanner-module_iconButton__CpGN2",
                miniCrosswordBlue: "ModalBanner-module_miniCrosswordBlue__f56g6",
                bannerContent: "ModalBanner-module_bannerContent__zfp0F",
                bannerHeader: "ModalBanner-module_bannerHeader__JxKTL",
                headerLine: "ModalBanner-module_headerLine__uv_QJ",
                bannerDescription: "ModalBanner-module_bannerDescription__zkptC",
                descriptionText: "ModalBanner-module_descriptionText__oJFWN",
                bannerIcon: "ModalBanner-module_bannerIcon__lmtj9",
                bannerIconDesktop: "ModalBanner-module_bannerIconDesktop__RkJ8E",
                bannerIconConnections: "ModalBanner-module_bannerIconConnections__eMwMD",
                bannerInformation: "ModalBanner-module_bannerInformation__FaVgq",
                bannerInformationi: "ModalBanner-module_bannerInformationi__ZnYsu",
                bannerMessageIcon: "ModalBanner-module_bannerMessageIcon__p3klL",
                bannerBody: "ModalBanner-module_bannerBody__incij",
                clickArea: "ModalBanner-module_clickArea__OUVQJ",
                bannerMessageTitle: "ModalBanner-module_bannerMessageTitle__ekGNw",
                bannerLegal: "ModalBanner-module_bannerLegal__REVGx",
                iconWrapper: "ModalBanner-module_iconWrapper__XRqR8",
                exit: "ModalBanner-module_exit___KLVa",
                exitActive: "ModalBanner-module_exitActive__mwgWi",
                slideDown: "ModalBanner-module_slideDown__Wy2Kv",
                flyIn: "ModalBanner-module_flyIn__AFH5w",
                flyOut: "ModalBanner-module_flyOut__JSa5T",
                fadeIn: "ModalBanner-module_fadeIn__iLK29",
                slideupdelay: "ModalBanner-module_slideupdelay__FFGHv"
            };
            const os = "nyt-modal-banner"
              , is = window.localStorage;
            var ss = e => {
                let {backgroundClass: t, legalContent: n, mobileIcon: a, desktopIcon: o, title: i, description: l, buttonText: c, onClose: u, onClick: d, CTAClickParams: m, closeClickParams: p, impressionParams: f} = e;
                const {isHybridWebView: b} = (0,
                Ba.vB)()
                  , [g,v] = (0,
                r.useState)(!1)
                  , h = (0,
                r.useRef)(null)
                  , {hasAbraLoaded: y} = (0,
                to.Z)()
                  , w = ("ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && !$a.tq && !b || $a.tq
                  , _ = () => {
                    p && (0,
                    s.ob)(p),
                    v(!0),
                    function() {
                        const e = JSON.parse(is.getItem(os));
                        e && (e.count += 1,
                        is.setItem(os, JSON.stringify(e)))
                    }(),
                    u && u()
                }
                  , E = e => {
                    const {target: t} = e;
                    h.current && !h.current.contains(t) && _()
                }
                ;
                (0,
                r.useEffect)(( () => (document.addEventListener("mousedown", E),
                () => {
                    document.removeEventListener("mousedown", E)
                }
                )), []),
                (0,
                r.useEffect)(( () => {
                    f && (0,
                    s.hX)("".concat(null == f ? void 0 : f.name), "".concat(null == f ? void 0 : f.region), "".concat(null == f ? void 0 : f.label), "".concat(null == f ? void 0 : f.context))
                }
                ), []);
                const O = r.createElement("div", {
                    className: Za()(as.banner, t && as[t]),
                    "aria-live": "polite",
                    ref: h
                }, r.createElement("div", {
                    className: as.bannerClose
                }, r.createElement("button", {
                    className: Za()(as.iconButton, t && as[t]),
                    type: "button",
                    onClick: _
                }, r.createElement("span", {
                    className: "visually-hidden"
                }, "Close"), r.createElement(mi.Z, {
                    icon: "close"
                }))), r.createElement("div", {
                    className: as.bannerContent,
                    "aria-label": "Information"
                }, w ? r.createElement(mi.Z, {
                    className: as.bannerIconConnections,
                    icon: a
                }) : r.createElement(r.Fragment, null, r.createElement(mi.Z, {
                    className: as.bannerIcon,
                    icon: "qr-code"
                }), o && r.createElement(mi.Z, {
                    className: as.bannerIconDesktop,
                    icon: o
                })), r.createElement("div", {
                    className: Za()(as.bannerBody)
                }, r.createElement("div", {
                    className: as.iconWrapper
                }, r.createElement("img", {
                    src: "https://www.nytimes.com/games-assets/v2/assets/icons/mini_leaderboard.png ",
                    alt: "Mini Leaderboard"
                })), r.createElement("div", {
                    className: as.bannerHeader
                }, r.createElement("h1", {
                    className: as.headerLine
                }, r.createElement("h2", {
                    className: as.headerLine
                }, i)), r.createElement("div", {
                    className: as.bannerDescription
                }, r.createElement("p", {
                    className: as.descriptionText
                }, l)), w && c && r.createElement(r.Fragment, null, r.createElement("button", {
                    key: "Download the Games App",
                    type: "button",
                    onClick: () => {
                        m && (0,
                        s.ob)(m),
                        window.open("https://fpx3r.app.goo.gl/app-store", "_blank"),
                        d && d()
                    }
                    ,
                    className: as.bannerButton,
                    "aria-label": c
                }, r.createElement("p", {
                    className: as.buttonText
                }, c))), n && r.createElement("div", {
                    className: as.bannerLegal
                }, n)))));
                return r.createElement(rs.Z, {
                    in: !g,
                    unmountOnExit: !0,
                    timeout: 400,
                    classNames: {
                        exit: as.exit,
                        exitActive: as.exitActive
                    }
                }, O)
            }
              , ls = n(80692)
              , cs = n(86128);
            const us = "https://www.nytimes.com/subscription/games"
              , ds = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                if (!t || !t.navigationLinks || !t.navigationLinks.subscribe)
                    return us;
                const n = t.navigationLinks.subscribe;
                return e && n[e] ? n[e] : n.default || us
            };
            var ms = e => {
                let {message: t, subscribeLinkContext: n, subscribeButtonTxt: a, eventLabel: o, clickLabel: i} = e;
                const s = {
                    spellingBee: () => {
                        Tt("click", "", o, "spelling-bee"),
                        window.location.href = "/puzzles/spelling-bee"
                    }
                    ,
                    tiles: () => {
                        Tt("click", "", o, "tiles"),
                        window.location.href = "/puzzles/tiles"
                    }
                    ,
                    hub: () => {
                        window.location.href = ls.t.hub
                    }
                }
                  , l = ds(n, window);
                return r.createElement("div", {
                    className: "xwd__promotional-content--subscriptionUpsell"
                }, r.createElement("div", {
                    className: "xwd__promotional-content--minimodalMessage"
                }, t), r.createElement("a", {
                    href: l,
                    onClick: e => {
                        var t;
                        const n = (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.getAttribute("href")) || ""
                          , r = (0,
                        cs.I3)(n);
                        i ? (0,
                        s[i])() : n && r ? ((0,
                        cs.Hu)(n),
                        Tt("click", "", o, "subscribe")) : n && !r && (window.location.href = n)
                    }
                    ,
                    className: "xwd__promotional-content--link"
                }, a || "Subscribe To Play"))
            }
            ;
            const ps = () => ((0,
            r.useEffect)(( () => {
                It("next-game", "mini-page", "spelling-bee")
            }
            ), []),
            r.createElement("a", {
                href: "/puzzles/spelling-bee",
                className: "xwd__nextGameSuggestion--spellingBeeCardEmphasis xwd__nextGameSuggestion--spellingBeeBase",
                onClick: () => {
                    Tt("", "spelling-bee", "mini-page", "next-game", "", !0)
                }
            }, r.createElement(mi.Z, {
                icon: "spelling-bee"
            }), r.createElement("div", null, r.createElement("span", {
                className: "xwd__nextGameSuggestion--gameTitle"
            }, "Spelling Bee"), r.createElement("span", null, "Tackle ", r.createElement("strong", null, "today's puzzle."))), r.createElement(mi.Z, {
                icon: "caret-right"
            })));
            var fs = () => r.createElement("div", {
                className: "xwd__nextGameSuggestion"
            }, r.createElement("p", {
                className: "xwd__nextGameSuggestion--text"
            }, "Game for something new?", r.createElement("br", null), "Make as many words as you can with 7 letters."), r.createElement(ps, null));
            function bs(e) {
                let {appCta: t, isMini: n, hasXwd: a, registeredNonSub: i, didRenderGamesCarousel: l} = e;
                const c = "https://fpx3r.app.goo.gl/app-store"
                  , {isWeb: u, isDesktop: d, isNewsreaderApp: m, isMobileWeb: p, isTablet: f} = (0,
                Ba.vB)()
                  , b = n ? "mini-modal" : "game-modal"
                  , g = n && u
                  , v = g ? "mini-congrats-modal" : "daily-congrats-modal"
                  , h = m && "Newsreader"
                  , y = "".concat(n ? "mini" : "daily", "Congrats").concat(h)
                  , w = (0,
                o.v9)(Ce)
                  , _ = !g && !a && !i
                  , E = zi()
                  , O = p || f && u;
                (0,
                r.useEffect)(( () => {
                    a || It("softpaywall", v, t)
                }
                ), [a]);
                return _ && !l ? r.createElement(fs, null) : O && !l ? r.createElement("div", {
                    className: "leaderboard-deprecation"
                }, r.createElement("div", {
                    className: "leaderboard-deprecation__banner-container"
                }, r.createElement("a", {
                    href: c,
                    onClick: () => {
                        (0,
                        s.LW)({
                            element: {
                                name: "mini-page",
                                label: "leaderboard-download-app"
                            },
                            region: "congrats",
                            label: c,
                            context: w
                        })
                    }
                }, r.createElement(Ni(), null))), !l && r.createElement(Xi, {
                    header: "PLAY TODAY’S GAMES",
                    games: E
                })) : u && d ? r.createElement("div", null, !l && r.createElement(r.Fragment, null, null, null), null) : i ? ms({
                    message: "Have you played our new matching game? It’s mesmerizing.",
                    eventLabel: b,
                    clickLabel: "tiles",
                    subscribeButtonTxt: "Try Tiles >>",
                    subscribeLinkContext: y
                }) : !l && ms({
                    message: "Want to be a better solver? Up your game with puzzles for every skill level.",
                    eventLabel: b,
                    clickLabel: "hub",
                    subscribeButtonTxt: "More Puzzles",
                    subscribeLinkContext: y
                })
            }
            const gs = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
            var vs = e => gs[e];
            function hs(e) {
                let {streakLength: t, verticalStreakLength: n=0, dayIdx: a} = e;
                const o = t + 1
                  , i = n + 1;
                let s;
                var l;
                return s = (l = o) >= 6 || l >= i ? "YOU HAVE A ".concat(o, "-DAY STREAK") : "".concat(i, " ").concat(vs(a), "s in a row"),
                r.createElement("div", {
                    className: "xwd__congrats-modal--streakLength"
                }, r.createElement("i", {
                    className: "xwd__congrats-modal--starIcon"
                }), s)
            }
            const ys = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return /Android/.test(e) ? "https://play.google.com/store/apps/details?id=com.nytimes.crossword&referrer=utm_source%3DAndroidReaderMini%26utm_medium%3DCongratsModule%26utm_term%3DgetTheApp%26utm_campaign%3DMiniUpsell&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" : /|iPad|iPhone|/.test(e) ? "https://itunes.apple.com/us/app/nytimes-crossword-daily-word/id307569751?mt=8" : ""
            };
            function ws(e) {
                let {appCta: t, HDTest: n} = e;
                const a = (0,
                o.v9)(Ce);
                return r.createElement("button", {
                    type: "button",
                    onClick: n ? () => {
                        const e = ys();
                        window.open(e, "_blank"),
                        Tt("congrats-modal", "game-page", "game-page", "download-app", "GUAC_HD_XWORD_UPSELL_TEST_245", void 0, void 0),
                        localStorage.setItem("app-link-clicked", "true")
                    }
                    : () => {
                        const e = ys();
                        window.open(e, "_blank"),
                        Tt("click", "".concat(a), "mini-page", t),
                        localStorage.setItem("app-link-clicked", "true")
                    }
                    ,
                    className: "xwd__modal--subtle-button"
                }, "Get the app")
            }
            function _s(e, t) {
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
            function Es(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _s(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const Os = {
                label: "wordle",
                icon: "wordle",
                href: "/christmas_word_puzzles/nyt_games/wordle/index.html",
                title: "Wordle",
                description: "Untangle terms"
            }
              , Ss = {
                label: "connections",
                icon: "connections",
                href: "/christmas_word_puzzles/nyt_games/connections",
                title: "Connections",
                description: "Group words"
            }
              , ks = {
                label: "spelling-bee",
                icon: "sb",
                href: "/puzzles/spelling-bee",
                title: "Spelling Bee",
                description: "Wrangle words"
            }
              , Cs = {
                label: "archive",
                icon: "wordle",
                href: "/christmas_word_puzzles/nyt_games/wordle/archive",
                title: "Wordle Archive",
                description: ""
            }
              , Ps = {
                label: "mini-archive",
                icon: "mini",
                href: "/christmas_word_puzzles/nyt_games/leaderboard/archive/mini",
                title: "The Mini Archive",
                description: ""
            }
              , xs = {
                label: "spelling-bee-hub",
                icon: "sb",
                href: "/puzzles/spelling-bee/hub",
                title: "Spelling Bee Past Puzzles",
                description: ""
            }
              , js = e => Es(Es({}, e), {}, {
                showLock: !0
            })
              , Ns = [Os, Ss, ks, js(Cs), js(Ps), js(xs)]
              , Ls = [Os, Ss, ks, Cs, Ps, xs];
            function Ts(e) {
                let {displayAppLink: t, appCta: n, close: a, dayIdx: i, isMini: s, streamLabel: l, showTimer: c, registeredNonSub: u, hasXwd: d, isGoldStarEligible: m, formattedSolveTime: p, streakLength: f, verticalStreakLength: b=0, isMobile: g, isNewsreader: v=!1, publicationDate: h, solveTime: y, navigateBack: w, isClosing: _, onRemove: E} = e;
                const {isWeb: O, isMobileWeb: S} = (0,
                Ba.vB)()
                  , {reportExposure: k, hasAbraLoaded: C, getVariant: P} = (0,
                to.Z)()
                  , x = s ? Xa.config : Ja.config
                  , {unit: j} = (0,
                Ka.useUnit)(x)
                  , N = s && C && "1_OMA" === P("OMA_ENDSCREENACTIONS_MINI") && (null == j ? void 0 : j.canShow)
                  , L = !s && C && "1_OMA" === P("OMA_ENDSCREENACTIONS_DAILY") && (null == j ? void 0 : j.canShow)
                  , T = (O || S) && s && C && "1_ESA_enabled" === P("GAMES_endScreenMitigation_0425") && (null == j ? void 0 : j.canShow)
                  , I = (0,
                o.v9)(Ce)
                  , D = s && O
                  , B = !d || D
                  , z = r.createElement("span", null, "in ", r.createElement("span", {
                    className: "xwd__bold"
                }, p), ".")
                  , [M,A] = (0,
                r.useState)(!1)
                  , R = (0,
                o.I0)();
                (0,
                r.useEffect)(( () => {
                    navigator.canShare && navigator.canShare({
                        title: "NYTimes",
                        text: "Test share",
                        url: "https://www.nytimes.com"
                    }) && A(!0)
                }
                ), []);
                const G = () => {
                    const e = /iPad|iPhone/.test(navigator.userAgent);
                    if (M && e) {
                        const {shareUrl: e} = Pi(h, y);
                        navigator.share({
                            title: "I solved the daily mini!",
                            url: "".concat(e, "&smid=na-share")
                        }).then(( () => {
                            Tt("share-tools", void 0, "native-share", "share")
                        }
                        )).catch((e => console.warn("Sharing Mini time failed", e))),
                        a()
                    } else
                        a(),
                        Tt("congrats", I, "mini-page", "share"),
                        R(pt(ho.Share))
                }
                  , [U,H] = (0,
                r.useState)(!1)
                  , [W,F] = (0,
                r.useState)(!1)
                  , q = (0,
                ui.Z)("hdUpsellTest")
                  , Y = (0,
                ui.Z)("hdUpsellTestControl");
                (0,
                r.useEffect)(( () => {
                    k("CONV_GUAC_XWord_HDUpsell_Test_0624"),
                    !q && !Y || s || (F(!0),
                    It("congrats-modal", "", "GUAC_HD_XWORD_UPSELL_TEST_245", "game-page")),
                    q && !s && H(!0)
                }
                ), [q, U, Y]);
                const V = D ? [{
                    label: "Share your results",
                    clickHandler: G
                }] : [{
                    label: "Share your results",
                    className: "secondary xwd__congrats-modal--shareButton",
                    clickHandler: G
                }, ...T ? [] : [{
                    label: "View all games",
                    clickHandler: w
                }]]
                  , Z = [{
                    label: "Admire your puzzle",
                    className: "secondary",
                    clickHandler: W ? () => (Tt("congrats-modal", "game-page", "game-page", "admire-puzzle", "GUAC_HD_XWORD_UPSELL_TEST_245", void 0, void 0),
                    a()) : void 0
                }, {
                    label: "View all games",
                    clickHandler: W ? () => (Tt("congrats-modal", "game-page", "game-page", "view-games", "GUAC_HD_XWORD_UPSELL_TEST_245", void 0, "https://www.nytimes.com/christmas_word_puzzles/nyt_games/leaderboard"),
                    w()) : w
                }]
                  , K = l && "mini" === l.toLowerCase() ? r.createElement("div", {
                    className: D ? "xwd__center mini__congrats-modal--message" : "xwd__center xwd__congrats-modal--message"
                }, "You solved", " ", r.createElement("span", {
                    className: "xwd__bold"
                }, "The ", l), r.createElement("br", null), " ", c && z) : r.createElement("div", {
                    className: "xwd__center xwd__congrats-modal--message"
                }, "You solved a ", r.createElement("span", {
                    className: "xwd__bold"
                }, l), r.createElement("br", null), "Crossword ", c && z)
                  , X = r.createElement("div", {
                    className: "xwd__center"
                }, "You solved the crossword", r.createElement("br", null), c && z)
                  , J = s || !d || g && !v
                  , Q = "ios" === window.newsreaderAppPlatform
                  , $ = d ? Ls : Ns;
                return r.createElement(vi, {
                    bodyClassName: D ? "xwd__congrats-modal mini__congrats-modal" : "xwd__congrats-modal",
                    close: a,
                    closeLabel: s ? "Back to puzzle" : void 0,
                    footer: L || N ? null : J ? r.createElement(r.Fragment, null, t && r.createElement(ws, {
                        appCta: n,
                        HDTest: W
                    }), B && r.createElement(bs, {
                        isMini: s,
                        didRenderGamesCarousel: T,
                        appCta: n,
                        registeredNonSub: u,
                        hasXwd: d
                    })) : null,
                    isClosing: _,
                    onRemove: E,
                    containerClassName: Q ? "container-with-inset" : ""
                }, r.createElement("div", {
                    className: D ? "mini__congrats-modal--content" : "xwd__congrats-modal--content"
                }, r.createElement(hi, {
                    isMini: s,
                    isGold: m
                }), r.createElement(Ei, {
                    size: "large",
                    text: "Congratulations!"
                }), l ? K : X, m && (f > 0 || b > 0) && r.createElement(hs, {
                    streakLength: f,
                    verticalStreakLength: b,
                    dayIdx: i || 0
                }), r.createElement(pi, {
                    buttons: ( () => {
                        if (L || N)
                            return [];
                        const e = s ? V : Z;
                        return g ? [...e].reverse() : e
                    }
                    )(),
                    close: e => {
                        e.preventDefault(),
                        e.stopPropagation(),
                        a()
                    }
                    ,
                    wrapperClassName: D ? "mini__congrats-modal--buttons-wrapper" : "xwd__congrats-modal--buttons-wrapper"
                })), U && r.createElement("div", {
                    className: "xwd__congrats-modal--homeDelivery_container"
                }, r.createElement("hr", {
                    className: "xwd__congrats-modal--homeDelivery_divider"
                }), r.createElement("a", {
                    href: "https://www.nytimes.com/subscription/home-delivery?source=crossword-complete",
                    onClick: () => {
                        Tt("congrats-modal", "game-page", "goto-subscribe", "Solve in pencil, too. - Enjoy the Crossword in print.", "GUAC_HD_XWORD_UPSELL_TEST_245", void 0, "https://www.nytimes.com/subscription/home-delivery?source=crossword-complete")
                    }
                }, r.createElement("div", {
                    className: "xwd__congrats-modal--homeDelivery_testButton"
                }, r.createElement("i", {
                    className: "xwd__congrats-modal--homeDelivery_newspaper_icon"
                }), r.createElement("p", {
                    className: "xwd__congrats-modal--homeDelivery_main"
                }, "Solve in pencil, too.", r.createElement("br", null), r.createElement("span", {
                    className: "xwd__congrats-modal--homeDelivery_sub"
                }, "Enjoy the Crossword in print.")), r.createElement("i", {
                    className: "xwd__congrats-modal--homeDelivery_caret_icon"
                })))), N && r.createElement(si(), {
                    HDTest: W,
                    puzzleId: String(I),
                    displayAppLink: t,
                    close: a,
                    handleShareClick: G,
                    navigateBack: w
                }), L && r.createElement(oi(), {
                    HDTest: W,
                    displayAppLink: t,
                    puzzleId: String(I),
                    close: a,
                    navigateBack: w
                }), T && r.createElement("div", {
                    className: "xwd__congrats-modal--omaESAContent"
                }, r.createElement(ci(), {
                    gamesArray: $,
                    hasSubAccess: d,
                    fromGame: "strands"
                })))
            }
            function Is(e) {
                let {displayAppLink: t, appCta: n, close: a, showTimer: o, puzzleId: i, puzzleTitle: s, formattedSolveTime: l, isClosing: c, onRemove: u} = e;
                const d = r.createElement("span", null, "in ", r.createElement("span", {
                    className: "xwd__bold"
                }, l))
                  , m = "ios" === window.newsreaderAppPlatform;
                return r.createElement(vi, {
                    buttons: [{
                        label: "Back to the guide",
                        link: "https://www.nytimes.com/guides/christmas_word_puzzles/nyt_games/leaderboard/how-to-solve-a-crossword-puzzle#".concat(ri(i))
                    }],
                    close: a,
                    footer: t && r.createElement(ws, {
                        appCta: n
                    }),
                    isClosing: c,
                    onRemove: u,
                    containerClassName: m ? "container-with-inset" : ""
                }, r.createElement("div", {
                    className: "xwd__congrats-modal--content"
                }, r.createElement("div", {
                    className: "xwd__illustration"
                }), r.createElement(Ei, {
                    size: "large",
                    text: "Super Solving"
                }), r.createElement("div", {
                    className: "xwd__center"
                }, "You solved the", " ", r.createElement("span", {
                    className: "xwd__bold"
                }, s), " Mini", " ", o && d, ".")))
            }
            class Ds extends r.Component {
                constructor(e) {
                    super(e),
                    this.state = {
                        dayIdx: null,
                        appLinkClicked: !1
                    }
                }
                componentDidMount() {
                    const {meta: e, solveTime: t, soundOn: n} = this.props
                      , r = "true" === localStorage.getItem("app-link-clicked")
                      , a = (new Date).getDay()
                      , o = "mini" === (null == e ? void 0 : e.publishStream) ? "mini-page" : "game-page"
                      , i = document.getElementById("strut");
                    this.setState({
                        dayIdx: a,
                        appLinkClicked: r
                    }),
                    i.play(),
                    n && i instanceof HTMLAudioElement && (null == i || i.play()),
                    Tt("complete", null == e ? void 0 : e.id, o, "100%-complete", "".concat(t)),
                    "mini" === (null == e ? void 0 : e.publishStream) && It("congrats-modal", "mini-page", this.shouldDisplayAppLink() ? "download-app" : void 0)
                }
                shouldDisplayAppLink() {
                    const {user: {userType: {hasXwd: e}}} = this.props
                      , {appLinkClicked: t} = this.state
                      , n = !!window.newsreaderAppPlatform;
                    return $a.tq && e && !t && !n
                }
                render() {
                    var e;
                    const {close: t, solveTime: n, showTimer: a, isGoldStarEligible: o, user: {userType: i}, meta: l, streakLength: c, streaks: u, isClosing: d, onRemove: m} = this.props
                      , {dayIdx: p} = this.state
                      , f = s.abra.getVariant("GAMES_BackToPlayTab_1222")
                      , b = !(window.isHybridWebView || window.gamesAppPlatform || window.newsreaderAppPlatform);
                    if (!l)
                        return null;
                    const {publicationDate: g, publishStream: v, title: h, id: y} = l
                      , {hasXwd: w, isLoggedIn: _} = i
                      , E = ( (e, t) => ["daily", "mini", "bonus"].includes(t) ? "daily" === t ? fe(e, "dddd") : Ko(t) : "")(g, v)
                      , O = (e => {
                        return e < 60 ? "".concat(t = e, 1 === t ? " second" : " seconds") : de(e);
                        var t
                    }
                    )(n)
                      , S = "mini" === (null === (e = window.gameData) || void 0 === e ? void 0 : e.stream)
                      , k = ni.includes(y)
                      , C = !!window.newsreaderAppPlatform
                      , P = _ && !w
                      , x = (!S || !b) && this.shouldDisplayAppLink()
                      , j = $a.tq && !C ? "congrats-download-app" : ""
                      , N = r.createElement(Ts, {
                        displayAppLink: x,
                        appCta: j,
                        close: t,
                        dayIdx: p,
                        isMini: S,
                        streamLabel: E,
                        showTimer: a,
                        formattedSolveTime: O,
                        solveTime: n,
                        publicationDate: g,
                        registeredNonSub: P,
                        hasXwd: w,
                        isMobile: $a.tq,
                        isNewsreader: C,
                        isGoldStarEligible: o,
                        streakLength: c,
                        verticalStreakLength: ( () => {
                            const e = (null == u ? void 0 : u.verticalStreaks) || [];
                            if (e.length && p)
                                return e[p].length || 0
                        }
                        )(),
                        navigateBack: () => (0,
                        ei.n)(f),
                        isClosing: d,
                        onRemove: m
                    });
                    return k ? r.createElement(Is, {
                        displayAppLink: x,
                        appCta: j,
                        close: t,
                        showTimer: a,
                        puzzleId: y,
                        puzzleTitle: h || "",
                        formattedSolveTime: O,
                        isClosing: d,
                        onRemove: m
                    }) : N
                }
            }
            var Bs = (0,
            hr.qC)(eo.ns, (0,
            o.$j)((e => {
                const t = te(e)
                  , n = _e(e)
                  , {showTimer: r, soundOn: a} = t
                  , o = jn(e);
                return {
                    solveTime: dr(e),
                    showTimer: r,
                    soundOn: a,
                    isGoldStarEligible: o,
                    meta: n,
                    streakLength: Vo(e),
                    streaks: Yo(e)
                }
            }
            )))(Ds);
            const zs = (0,
            r.createContext)({
                isErsatzShortz: !1,
                inShortzMode: !1,
                setShortzMode: () => {}
            })
              , Ms = e => {
                let {children: t} = e;
                const {userType: {inShortzMode: n}} = (0,
                eo.aF)()
                  , [a,o] = (0,
                r.useState)(!1);
                (0,
                r.useEffect)(( () => {
                    n && zn().getItem("shortz-toggle").then((e => {
                        o(!!e)
                    }
                    ))
                }
                ), [n]);
                const i = (0,
                r.useCallback)((e => {
                    o(e),
                    (e => {
                        zn().setItem("shortz-toggle", e).catch((e => {
                            console.error("error setting shortz toggle state", e)
                        }
                        ))
                    }
                    )(e)
                }
                ), [o])
                  , s = (0,
                r.useMemo)(( () => ({
                    isErsatzShortz: n,
                    inShortzMode: n && a,
                    setShortzMode: i
                })), [n, a, i]);
                return r.createElement(zs.Provider, {
                    value: s
                }, t)
            }
              , As = () => (0,
            r.useContext)(zs)
              , Rs = () => {
                var e;
                const t = null === (e = window.location) || void 0 === e ? void 0 : e.pathname;
                return /tips-and-tricks/.test(t) ? "Tips & Tricks" : /special/.test(t) ? "Special Puzzle" : void 0
            }
              , Gs = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return e ? e.replace(/ and /gi, " & ") : "daily" === t ? "The Crossword" : "The ".concat(Ko(t), " Crossword")
            }
              , Us = function(e) {
                if ("bonus" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""))
                    return fe(e, "MMMM YYYY");
                const t = fe(e, "dddd")
                  , n = fe(e, "MMMM D, YYYY");
                return "".concat(t, ", ").concat(n)
            };
            function Hs(e) {
                let {constructors: t, editor: n="", publicationDate: a, title: i, id: s} = e;
                const {inShortzMode: l} = As()
                  , c = (0,
                o.v9)(xe)
                  , u = Gs(i, c)
                  , d = Jo(t)
                  , m = Rs()
                  , p = l && r.createElement(r.Fragment, null, r.createElement("a", {
                    className: "xwd__details--link",
                    href: "https://admin.games.prd.nyt.net/console/xwd/edit/".concat(s),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Edit #".concat(s)), " | ", r.createElement("a", {
                    className: "xwd__details--link",
                    href: "/christmas_word_puzzles/nyt_games/mini.json", //"/svc/christmas_word_puzzles/nyt_games/leaderboard/v6/puzzle/".concat(s, ".json"),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "View JSON"));
                return r.createElement("div", {
                    className: "xwd__details--container"
                }, m ? r.createElement("div", {
                    className: "xwd__details--date"
                }, m) : r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "xwd__details--title"
                }, u), r.createElement("div", {
                    className: "xwd__details--date"
                }, Us(a, c))), p, r.createElement("div", {
                    className: "xwd__details--byline"
                }, d && r.createElement("span", null, "".concat(Qo(i), " ").concat(d)), n && r.createElement("span", null, "".concat($o(i), " ").concat(n))))
            }
            function Ws(e) {
                const {meta: {constructors: t, editor: n, publishStream: a, publicationDate: o, title: i}, isInfo: s=!1} = e
                  , l = Jo(t);
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "xwd__start-modal--date"
                }, Us(o, a)), r.createElement("div", {
                    className: Za()("xwd__details--byline", {
                        "xwd__details--byline-info": s
                    })
                }, l && r.createElement("span", null, "".concat(Qo(i), " ").concat(l)), n && r.createElement("span", null, "".concat($o(i), " ").concat(n))))
            }
            var Fs = {
                flexContainer: "PillGrey-module_flexContainer__ODUKN",
                expandToRow: "PillGrey-module_expandToRow__aTomr PillGrey-module_flexContainer__ODUKN",
                mobileColumn: "PillGrey-module_mobileColumn__YpIYL",
                "visually-hidden": "PillGrey-module_visually-hidden__Hz7ml",
                pill: "PillGrey-module_pill__fJN18",
                default: "PillGrey-module_default__YL9K9",
                "top-right-edge": "PillGrey-module_top-right-edge__LLm7D",
                "top-right-edge-inner": "PillGrey-module_top-right-edge-inner__xGxjg",
                slideDown: "PillGrey-module_slideDown__wH1hZ",
                flyIn: "PillGrey-module_flyIn__MdsDx",
                flyOut: "PillGrey-module_flyOut__LQtPF",
                fadeIn: "PillGrey-module_fadeIn___mLnx"
            }
              , qs = e => {
                let {text: t="New", position: n="default", className: a=""} = e;
                return r.createElement("span", {
                    className: Za()(Fs.pill, Fs[n], a)
                }, t)
            }
              , Ys = {
                flexContainer: "Banner-module_flexContainer__fxcX2",
                expandToRow: "Banner-module_expandToRow__gmkDm Banner-module_flexContainer__fxcX2",
                mobileColumn: "Banner-module_mobileColumn__X1bQJ",
                "visually-hidden": "Banner-module_visually-hidden__Jdirq",
                "button-primary": "Banner-module_button-primary__STfaj",
                largeBanner__button: "Banner-module_largeBanner__button__ya9kq",
                "button-transparent": "Banner-module_button-transparent__UBRAe",
                "button-dark-mode-support": "Banner-module_button-dark-mode-support__mcAEd",
                "button-card-secondary": "Banner-module_button-card-secondary__BQzSl",
                "button-card-primary": "Banner-module_button-card-primary__IK9cZ",
                "button-secondary": "Banner-module_button-secondary__oJafj",
                banner: "Banner-module_banner__8ZXZF",
                largeBanner: "Banner-module_largeBanner__Tg6Re",
                appAdIconBanner: "Banner-module_appAdIconBanner__CZlHO",
                multiIconBanner: "Banner-module_multiIconBanner__KZi3f",
                singleIconBanner: "Banner-module_singleIconBanner__LFn3K",
                banner__Information: "Banner-module_banner__Information__lRLS7",
                appAdIconBanner__Content: "Banner-module_appAdIconBanner__Content__YCtv3",
                multiIconBanner__Information: "Banner-module_multiIconBanner__Information__fIvsn",
                singleIconBanner__Information: "Banner-module_singleIconBanner__Information__JAPtb",
                arrow: "Banner-module_arrow__TDcAh",
                icon: "Banner-module_icon__eBv6E",
                icon_wordlebot: "Banner-module_icon_wordlebot__EXvKK",
                icon_wordleArchive: "Banner-module_icon_wordleArchive__tpNcM",
                icon_connectionsStats: "Banner-module_icon_connectionsStats__aTafh",
                icon_connectionsArchive: "Banner-module_icon_connectionsArchive__CmcnL",
                icon_miniArchive: "Banner-module_icon_miniArchive__qL7Tq",
                icon_miniLeaderboard: "Banner-module_icon_miniLeaderboard__J9isr",
                icon_connectionsLeaderboardFriends: "Banner-module_icon_connectionsLeaderboardFriends__bOxQI",
                icon_miniLeaderboardFriends: "Banner-module_icon_miniLeaderboardFriends__BD7i9",
                icon_sbLeaderboardFriends: "Banner-module_icon_sbLeaderboardFriends__B0N9r",
                icon_wordleLeaderboardFriends: "Banner-module_icon_wordleLeaderboardFriends__OTDnC",
                singleIconBanner__BodyContent: "Banner-module_singleIconBanner__BodyContent__DBVyl",
                appAdIconBanner__Information: "Banner-module_appAdIconBanner__Information__OKY8_",
                title: "Banner-module_title__far_o",
                titleLeaderboardFriends: "Banner-module_titleLeaderboardFriends__HMgRQ",
                messageLeaderboardFriends: "Banner-module_messageLeaderboardFriends__nLNWw",
                dropShadow: "Banner-module_dropShadow__DV456",
                newPill: "Banner-module_newPill__ECWmA",
                iconHolder: "Banner-module_iconHolder__UIZ3u",
                multiIconBanner__BodyContent: "Banner-module_multiIconBanner__BodyContent__JUMyC",
                strandsBanner: "Banner-module_strandsBanner__Y0z4O",
                relative: "Banner-module_relative__wKdlH",
                strandsBanner__title: "Banner-module_strandsBanner__title__h3jHw",
                strandsBanner__subtitleContainer: "Banner-module_strandsBanner__subtitleContainer__yIDmd",
                strandsBanner__longIconContainer: "Banner-module_strandsBanner__longIconContainer__aJlyR",
                iconButton: "Banner-module_iconButton__lGXVc",
                bannerInformationTest: "Banner-module_bannerInformationTest__CgqDs",
                bannerBodyTest: "Banner-module_bannerBodyTest__pvG1w",
                strandsIcon: "Banner-module_strandsIcon__PJgzz",
                caretRightContainer: "Banner-module_caretRightContainer__XN_cW",
                adArrow: "Banner-module_adArrow__fcdYH",
                appAdIconBanner__Title: "Banner-module_appAdIconBanner__Title__vFKIK",
                appAdIcon: "Banner-module_appAdIcon___EGjT",
                appAdIconBannerStrands: "Banner-module_appAdIconBannerStrands__eTqDb",
                appAdIconBannerStrands__Content: "Banner-module_appAdIconBannerStrands__Content__WoXb3",
                largeBannerHidden: "Banner-module_largeBannerHidden__Ia0mu",
                largeBanner__dismiss: "Banner-module_largeBanner__dismiss__Onhae",
                largeBanner__icon: "Banner-module_largeBanner__icon__vYBoG",
                largeBanner__icon_wordleLeaderboardLarge: "Banner-module_largeBanner__icon_wordleLeaderboardLarge__QZNJb",
                largeBanner__title: "Banner-module_largeBanner__title__NHa1g",
                largeBanner__message: "Banner-module_largeBanner__message__dc9X2",
                slideDown: "Banner-module_slideDown__EUWPK",
                flyIn: "Banner-module_flyIn__Ifqfr",
                flyOut: "Banner-module_flyOut__kNaoB",
                fadeIn: "Banner-module_fadeIn__DpqRq"
            };
            let Vs = function(e) {
                return e.SINGLE = "single-icon",
                e.MULTI = "multi-icon",
                e.STRANDS = "strands",
                e.GAMES_APP_AD = "games-ad",
                e.LARGE = "large",
                e
            }({});
            const Zs = e => {
                let {title: t, icon: n, message: a, ctaLink: o="https://nytimes.onelink.me/IM32/jna276xj", newTab: i, onClickLink: s, onVisible: l, position: c, type: u, children: d, dropShadow: m, isNew: p=!1, isDismissible: f=!1} = e;
                (0,
                r.useEffect)(( () => {
                    l && l()
                }
                ), [l]);
                const [b,g] = (0,
                r.useState)(u === Vs.LARGE);
                if (u === Vs.STRANDS)
                    return r.createElement("a", {
                        href: o,
                        target: i ? "_blank" : "_self",
                        rel: "noopener noreferrer",
                        onClick: () => {
                            s && s()
                        }
                        ,
                        style: {
                            position: c
                        },
                        className: Za()(Ys.strandsBanner),
                        "aria-live": "polite"
                    }, r.createElement("div", {
                        className: Ys.bannerInformationTest,
                        "aria-label": "Information"
                    }, r.createElement("h1", {
                        className: Ys.strandsBanner__title
                    }, t), r.createElement("div", {
                        className: Ys.strandsBanner__longIconContainer
                    }, r.createElement("div", null, r.createElement("div", {
                        className: Ys.strandsIcon
                    }), r.createElement("div", {
                        className: Ys.caretRightContainer
                    }, r.createElement("button", {
                        className: Ys.arrow,
                        type: "button"
                    }, r.createElement(mi.Z, {
                        icon: "back"
                    })))), r.createElement("div", {
                        className: Ys.strandsBanner__subtitleContainer
                    }, a && r.createElement("p", null, a)))));
                if (u === Vs.MULTI)
                    return r.createElement("a", {
                        href: o,
                        target: i ? "_blank" : "_self",
                        rel: "noopener noreferrer",
                        onClick: () => {
                            s && s()
                        }
                        ,
                        style: {
                            position: c
                        },
                        className: Za()(Ys.multiIconBanner),
                        "aria-live": "polite"
                    }, r.createElement("div", {
                        className: Ys.multiIconBanner__Information,
                        "aria-label": "Information"
                    }, r.createElement("div", {
                        className: Ys.iconHolder
                    }), r.createElement("div", {
                        className: Ys.multiIconBanner__BodyContent
                    }, r.createElement("h3", null, t), a && r.createElement("p", null, a))), r.createElement("button", {
                        className: Ys.arrow,
                        type: "button"
                    }, r.createElement(mi.Z, {
                        icon: "back"
                    })));
                if (u === Vs.GAMES_APP_AD) {
                    const e = "strands" === window.pageName;
                    return r.createElement("button", {
                        onClick: () => {
                            s && s()
                        }
                        ,
                        style: {
                            position: c
                        },
                        className: Za()(Ys.appAdIconBanner, {
                            [Ys.appAdIconBannerStrands]: e
                        }),
                        "aria-live": "polite"
                    }, r.createElement("div", {
                        className: Za()(Ys.appAdIconBanner__Content, {
                            [Ys.appAdIconBannerStrands__Content]: e
                        }),
                        "aria-label": "content"
                    }, r.createElement("div", {
                        className: Za()(Ys.appAdIcon)
                    }, d), r.createElement("div", {
                        className: Za()(Ys.appAdIconBanner__Information)
                    }, r.createElement("h3", {
                        className: Ys.appAdIconBanner__Title
                    }, t), a && r.createElement("p", null, a))), r.createElement("span", {
                        className: Ys.adArrow
                    }, r.createElement(mi.Z, {
                        icon: "banner-caret-right"
                    })))
                }
                let v;
                switch (n) {
                case "wordlebot":
                    v = Ys.icon_wordlebot;
                    break;
                case "wordle_archive":
                    v = Ys.icon_wordleArchive;
                    break;
                case "connections-stats_cta":
                    v = Ys.icon_connectionsStats;
                    break;
                case "connections-archive_cta":
                    v = Ys.icon_connectionsArchive;
                    break;
                case "mini_archive":
                    v = Ys.icon_miniArchive;
                    break;
                case "mini_leaderboard":
                    v = Ys.icon_miniLeaderboard;
                    break;
                case "connections_leaderboard_friends":
                    v = Ys.icon_connectionsLeaderboardFriends;
                    break;
                case "mini_leaderboard_friends":
                    v = Ys.icon_miniLeaderboardFriends;
                    break;
                case "sb_leaderboard_friends":
                    v = Ys.icon_sbLeaderboardFriends;
                    break;
                case "wordle_leaderboard_friends":
                    v = Ys.icon_wordleLeaderboardFriends;
                    break;
                case "wordle_leaderboard_large":
                    v = Ys.largeBanner__icon_wordleLeaderboardLarge
                }
                const h = null == n ? void 0 : n.includes("_leaderboard_friends");
                return u === Vs.LARGE ? r.createElement("div", {
                    className: Za()(Ys.largeBanner, {
                        [Ys.largeBannerHidden]: !b
                    })
                }, f && r.createElement("button", {
                    onClick: () => (g(!1),
                    !1),
                    className: Ys.largeBanner__dismiss,
                    type: "button"
                }, r.createElement(mi.Z, {
                    icon: "close"
                })), r.createElement("div", {
                    className: Za()(Ys.largeBanner__icon, v)
                }, d), r.createElement("h3", {
                    className: Za()(Ys.largeBanner__title)
                }, t), a && r.createElement("p", {
                    className: Za()(Ys.largeBanner__message)
                }, a), r.createElement("button", {
                    onClick: () => {
                        o && (window.location.href = o),
                        s && s()
                    }
                    ,
                    className: Za()(Ys.largeBanner__button),
                    "aria-live": "polite"
                }, "Download the Games App")) : r.createElement("a", {
                    href: o,
                    target: i ? "_blank" : "_self",
                    rel: "noopener noreferrer",
                    onClick: () => {
                        s && s()
                    }
                    ,
                    style: {
                        position: c
                    },
                    className: Za()(Ys.singleIconBanner, {
                        [Ys.dropShadow]: m
                    }),
                    "aria-live": "polite"
                }, r.createElement("div", {
                    className: Za()(Ys.singleIconBanner__Information, {
                        [Ys.singleIconBanner__MessageIcon]: a
                    }),
                    "aria-label": "Information"
                }, r.createElement("div", {
                    className: Za()(Ys.icon, v)
                }, d), r.createElement("div", {
                    className: Za()(Ys.singleIconBanner__BodyContent)
                }, p && r.createElement(qs, {
                    text: "new",
                    position: "default",
                    className: Za()(Ys.newPill)
                }), r.createElement("h3", {
                    className: Za()(Ys.title, {
                        [Ys.titleLeaderboardFriends]: h
                    })
                }, t), a && r.createElement("p", {
                    className: Za()({
                        [Ys.messageLeaderboardFriends]: h
                    })
                }, a))), r.createElement("button", {
                    className: Ys.arrow,
                    type: "button"
                }, r.createElement(mi.Z, {
                    icon: "back"
                })))
            }
              , Ks = "DFP_WordleSkipFade_0524"
              , Xs = (e, t) => {
                const n = "DFP_MiniSkip"
                  , r = e(n);
                return r && t(n),
                "1_Variant" === r
            }
              , Js = (e, t) => {
                const n = e(Ks);
                return n && t(Ks),
                "1_Variant" === n
            }
            ;
            var Qs = n(45939)
              , $s = e => {
                let {bodyClassName: t, containerClassName: n, close: a, isClosing: o, onRemove: i, enableCountdown: s, enableFadeIn: l} = e;
                const c = (0,
                r.useCallback)(( () => {
                    a()
                }
                ), []);
                // console.log(vi);
                // console.log(Qs.Z)
                a()
                return null
                return r.createElement(vi, {
                    noAnimateOpen: !0,
                    ignoreBackgroundClick: !0,
                    showHeader: !0,
                    bodyClassName: t,
                    close: a,
                    isClosing: o,
                    onRemove: i,
                    containerClassName: Za()("xwd__ad-modal-container", n)
                }, r.createElement(Qs.Z, {
                    enableCountdown: s,
                    isSpecialAdUnit: !0,
                    id: "intsl",
                    position: "intsl",
                    onClose: c,
                    ctaCopy: "Continue to The Mini Crossword",
                    skipButtonClassName: Za()("xwd__ad-interstitial-skip-button"),
                    className: Za()("xwd__ad-interstitial-container"),
                    delaySkip: l
                }))
            }
              , el = n(88595);
            const tl = "CONV_GUAC_GAMES_MINI_WELCOME_SUBSCRIBE_CTA";
            function nl(e) {
                let {notes: t} = e;
                const [n,a] = r.useState(!1)
                  , o = r.createElement("p", {
                    key: "revealer",
                    className: "xwd__notes--revealer"
                }, r.createElement("button", {
                    type: "button",
                    onClick: e => {
                        a(!0),
                        e.preventDefault()
                    }
                }, "Reveal Answer"));
                return t && t.length ? r.createElement("aside", {
                    className: "xwd__notes--wrapper"
                }, r.createElement("h3", {
                    className: "xwd__notes--title"
                }, "Note"), r.createElement("div", {
                    className: Za()({
                        "xwd__notes--content-container": !$a.tq
                    })
                }, t.map((e => {
                    const t = Za()("xwd__notes--content", {
                        "xwd__notes--spoiler": e.spoiler,
                        "xwd__notes--spoiled": e.spoiler && n
                    })
                      , a = r.createElement("div", {
                        key: e.text,
                        className: t
                    }, e.spoiler && r.createElement("div", null, "ANSWER"), r.createElement("p", {
                        id: "note-text",
                        dangerouslySetInnerHTML: {
                            __html: e.text
                        }
                    }));
                    return e.spoiler && !n ? o : a
                }
                )))) : null
            }
            const rl = ["So close.", "Almost there.", "The end’s in sight.", "Nearly.", "Just about.", "Not far-off.", "Close, but not quite."]
              , al = ["Confound it.", "Grrrr...", "Gee whiz!", "Fiddlesticks.", "Oh, crumbs!", "Horsefeathers.", "Aw, shucks!"];
            function ol() {
                return ol = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                ol.apply(this, arguments)
            }
            const il = e => {
                let {type: t, id: n, name: a, value: o, label: i, checked: s, disabled: l, onChange: c, tabIndex: u=0, showSubText: d=!1, subText: m, subTextClass: p} = e;
                const f = c ? {
                    defaultChecked: s,
                    onChange: c
                } : {
                    checked: s,
                    readOnly: !0
                };
                return r.createElement("label", {
                    htmlFor: n
                }, r.createElement("input", ol({
                    type: t,
                    id: n,
                    name: a,
                    value: o,
                    disabled: l,
                    tabIndex: u
                }, f)), r.createElement("span", null, i), d && r.createElement("div", {
                    className: p
                }, m))
            }
            ;
            function sl() {
                return sl = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                sl.apply(this, arguments)
            }
            const ll = e => r.createElement(il, sl({}, e, {
                type: "radio"
            }));
            function cl(e) {
                let {heading: t, children: n} = e;
                return r.createElement("section", {
                    className: "xwd__settings-modal--section"
                }, r.createElement("header", {
                    className: "xwd__settings-modal--heading"
                }, t), n)
            }
            function ul(e) {
                let {onSwitch: t, spaceTriggers: n} = e;
                return r.createElement(cl, {
                    heading: "After changing direction with arrow keys"
                }, r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ll, {
                    id: "switchStay",
                    name: "onSwitch",
                    value: "stay",
                    label: "Stay in the same square",
                    checked: "stay" === t
                }), r.createElement(ll, {
                    id: "switchMove",
                    name: "onSwitch",
                    value: "move",
                    label: "Move in the direction of the arrow",
                    checked: "move" === t
                })), r.createElement("header", {
                    className: "xwd__settings-modal--heading"
                }, "Pressing the spacebar should"), r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ll, {
                    id: "triggerClear",
                    name: "spaceTriggers",
                    value: "clear",
                    label: "Clear the current square and advance",
                    checked: "clear" === n
                }), r.createElement(ll, {
                    id: "triggerToggle",
                    name: "spaceTriggers",
                    value: "toggle",
                    label: "Toggle between Across and Down",
                    checked: "toggle" === n
                })))
            }
            function dl() {
                return dl = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                dl.apply(this, arguments)
            }
            const ml = e => r.createElement(il, dl({}, e, {
                type: "checkbox"
            }));
            function pl(e) {
                let {backspaceAcrossWords: t} = e;
                return r.createElement(cl, {
                    heading: "At the start of a word"
                }, r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ml, {
                    name: "backspaceAcrossWords",
                    label: "Backspace into previous word",
                    checked: t
                })))
            }
            function fl(e) {
                let {subSettingsHandler: t, skipFilled: n, skipPenciled: a} = e;
                return r.useEffect(( () => {
                    n || t("skipPenciled", !1)
                }
                ), [n]),
                r.createElement(cl, {
                    heading: "Within a word"
                }, r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ml, {
                    name: "skipFilled",
                    label: "Skip over filled squares",
                    checked: n,
                    id: "skipFilled"
                }), r.createElement("div", {
                    className: "xwd__settings-modal--indented"
                }, r.createElement(ml, {
                    name: "skipPenciled",
                    label: "Even penciled-in squares",
                    disabled: !n,
                    checked: a,
                    id: "skipPenciled"
                }))))
            }
            function bl(e) {
                let {jumpBack: t, autoAdvance: n} = e;
                return r.createElement(cl, {
                    heading: "At the end of a word"
                }, r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ml, {
                    name: "jumpBack",
                    label: "Jump back to first blank in the word",
                    checked: t
                }), r.createElement(ml, {
                    name: "autoAdvance",
                    label: "Jump to next clue (if not jumping back)",
                    checked: n
                })))
            }
            function gl(e) {
                let {soundOn: t, showTimer: n, suppressDq: a, showMilestones: o} = e;
                return r.createElement(cl, {
                    heading: "Interactions"
                }, r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ml, {
                    name: "soundOn",
                    label: "Play sound on solve",
                    checked: t
                }), r.createElement(ml, {
                    name: "showTimer",
                    label: "Show timer",
                    checked: n
                }), r.createElement(ml, {
                    checked: a,
                    name: "suppressDisqualificationWarnings",
                    label: "Suppress disqualification warnings"
                }), void 0 !== o && r.createElement(ml, {
                    checked: o,
                    name: "showMilestones",
                    label: "Show puzzle milestones"
                })))
            }
            function vl(e) {
                let {forceGoldStarEligibility: t, speedUpSyncInterval: n, suppressAutocheckNotice: a} = e;
                return r.createElement(cl, {
                    heading: "Debug Settings"
                }, r.createElement("div", {
                    className: "xwd__settings-modal--inset"
                }, r.createElement(ml, {
                    name: "forceGoldStarEligibility",
                    label: "Force Gold Star eligibility",
                    checked: t
                }), r.createElement(ml, {
                    name: "speedUpSyncInterval",
                    label: "Speed up sync interval (5m->5s)",
                    checked: n
                }), r.createElement(ml, {
                    name: "suppressAutocheckNotice",
                    label: "Autocheck notice already seen",
                    checked: a
                })))
            }
            const hl = e => "".concat("https://static01.nytimes.com/christmas_word_puzzles/nyt_games/web/imgs/mobile/packs/pack_icons_").concat(e ? "shortz_favorites_2.png" : "themeless_puzzles_2.png");
            function yl() {
                const {inShortzMode: e, isErsatzShortz: t, setShortzMode: n} = As();
                return t ? r.createElement("span", {
                    role: "button",
                    className: "xwd__shortz-toggle",
                    title: (a = e,
                    a ? "Exit Shortz Mode :(" : "Enter Shortz Mode!"),
                    onClick: () => n(!e)
                }, r.createElement("img", {
                    src: hl(e),
                    alt: "Shortz Mode"
                })) : null;
                var a
            }
            const wl = "You can reveal or check a part of this puzzle, but this will exclude this puzzle from a streak.";
            const _l = e => e.printOptions
              , El = (0,
            $.createSelector)(_e, (e => e && !e.category))
              , Ol = ((0,
            $.createSelector)(_l, (e => e.version)),
            e => e.printOptions.version)
              , Sl = (0,
            $.createSelector)(_e, (e => {
                if (!e)
                    return !1;
                const {category: t, publicationDate: n} = e
                  , r = ce()(n).tz("America/New_York").add({
                    days: 4,
                    hours: 22
                }).format()
                  , a = ce()().tz("America/New_York").isSameOrAfter(r);
                return 8 !== t || a
            }
            ))
              , kl = (0,
            $.createSelector)(_e, (e => {
                if (!e)
                    return !1;
                const {category: t, publicationDate: n} = e;
                if (0 !== t)
                    return !1;
                let r;
                return "daily" === e.publishStream && (r = "2011-04-01",
                ce()(n).isSameOrAfter("2011-04-01"))
            }
            ))
              , Cl = (0,
            $.createSelector)(El, Ol, ( (e, t) => !e || "newspaper" === t))
              , Pl = (0,
            $.createSelector)(El, Ol, ( (e, t) => !e || "newspaper" === t))
              , xl = (0,
            $.createSelector)(_e, Ol, ( (e, t) => {
                if (!e)
                    return "";
                const n = "solution" === t ? ".ans.pdf" : ".pdf";
                return "".concat("/svc/christmas_word_puzzles/nyt_games/leaderboard/v2/puzzle/" + e.id + n)
            }
            ))
              , jl = (0,
            $.createSelector)(_e, (e => {
                if (!e)
                    return "";
                const t = ce()(e.publicationDate).format("MMMM")
                  , n = ce()(e.publicationDate).format("YYYY")
                  , r = ce()(e.publicationDate).format("D");
                return "".concat(t, " ").concat(r, ", ").concat(n)
            }
            ))
              , Nl = (0,
            $.createSelector)(_e, Ol, ( (e, t) => {
                if (!e)
                    return "";
                const n = e.publishStream
                  , r = ce()(e.publicationDate).format("MMMDDYY");
                return "daily" !== n ? "" : "".concat("/svc/christmas_word_puzzles/nyt_games/leaderboard/v2/puzzle/print/" + r + ("solution" === t ? ".ans.pdf" : ".pdf"))
            }
            ))
              , Ll = (0,
            $.createSelector)(ne, Pl, ( (e, t) => {
                const {opacity: n, layout: r} = e
                  , a = {};
                return !t && n < 100 && (a.block_opacity = n),
                "southpaw" === r ? a.southpaw = !0 : "large_print" === r && (a.large_print = !0),
                Object.keys(a).length > 0 ? "?".concat((o = a,
                Object.entries(o).map((e => e.join("="))).join("&"))) : "";
                var o
            }
            ))
              , Tl = (0,
            $.createSelector)(_l, El, xl, Nl, Ll, ( (e, t, n, r, a) => {
                const o = t ? n : r;
                switch (e.version) {
                case "puzzle":
                case "solution":
                    return "".concat(o).concat(a);
                case "newspaper":
                    return "".concat(r).concat(a);
                default:
                    return "".concat(n).concat(a)
                }
            }
            ));
            var Il = n(64572)
              , Dl = n.n(Il);
            const Bl = [".", ",", "?", "!", "'", "backspace", "next"]
              , zl = ["rebus", "pencil", "switch"]
              , Ml = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["prev", "secondary", "Z", "X", "C", "V", "B", "N", "M", "backspace", "next"], zl]
              , Al = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], ["-", "/", ":", ";", "(", ")", "$", "&", "@", '"'], ["prev", "tertiary", ...Bl], zl]
              , Rl = [["[", "]", "{", "}", "#", "%", "^", "*", "+", "="], ["_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•"], ["prev", "primary", ...Bl], zl]
              , Gl = {
                primary: Ml.map((e => e.join(" "))),
                secondary: Al.map((e => e.join(" "))),
                tertiary: Rl.map((e => e.join(" ")))
            }
              , Ul = ["backspace", "rebus", "pencil", "primary", "secondary", "tertiary", "prev", "next", "switch"]
              , Hl = ["backspace", "pencil", "prev", "next", "switch"]
              , Wl = ["prev", "next", "switch"]
              , Fl = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>\n<path d="M10 1L2 11L10 21" stroke="black" stroke-width="1.75" stroke-linecap="round"/>\n</svg>'
              , ql = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>\n<path d="M1 1L9 11L1 21" stroke="black" stroke-width="1.75" stroke-linecap="round"/>\n</svg>'
              , Yl = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.66272 24.7502L4.36502 23.7288L3.34364 22.7074L2.32227 21.686L1.30089 23.3883L1.42005 24.631L2.66272 24.7502Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1127 0.995451C19.805 0.303159 20.9274 0.303157 21.6197 0.995451L25.0553 4.43099C25.7476 5.12328 25.7476 6.24571 25.0553 6.93801L8.72481 23.2685C8.5302 23.4631 8.29297 23.6097 8.03188 23.6967L2.87857 25.4145C1.49273 25.8764 0.174284 24.558 0.63623 23.1721L2.354 18.0188C2.44103 17.7577 2.58765 17.5205 2.78225 17.3259L19.1127 0.995451ZM20.784 1.83112C20.5533 1.60036 20.1791 1.60036 19.9484 1.83112L3.61792 18.1616C3.55306 18.2264 3.50418 18.3055 3.47517 18.3926L1.7574 23.5459C1.60342 24.0078 2.0429 24.4473 2.50485 24.2933L7.65816 22.5755C7.74519 22.5465 7.82427 22.4977 7.88913 22.4328L24.2196 6.10233C24.4504 5.87157 24.4504 5.49743 24.2196 5.26666L20.784 1.83112Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3874 9.76995L16.2805 4.66306L17.1162 3.82739L22.2231 8.93427L21.3874 9.76995Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.11008 23.0478L3.0032 17.9409L3.83887 17.1052L8.94575 22.2121L8.11008 23.0478Z" fill="black"/>\n</svg>'
              , Vl = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.526 1.19563C16.9165 0.805108 17.5497 0.805108 17.9402 1.19563L20.8472 4.10263C21.2378 4.49315 21.2377 5.12632 20.8472 5.51684L7.02915 19.3349C6.91937 19.4447 6.78555 19.5274 6.63827 19.5765L2.27778 21.03C1.49602 21.2906 0.75228 20.5468 1.01287 19.7651L2.46636 15.4046C2.51546 15.2573 2.59817 15.1235 2.70794 15.0137L16.526 1.19563Z" stroke="white"/>\n<line x1="2.89454" y1="14.8271" x2="7.21575" y2="19.1483" stroke="white"/>\n<path d="M13.5434 4.8859L17.1575 8.5L7.21563 18.4417L3.60153 14.8276L13.5434 4.8859Z" fill="white"/>\n<path d="M16.8795 1.54952C17.0748 1.35426 17.3913 1.35426 17.5866 1.54952L20.4936 4.45652C20.6889 4.65178 20.6889 4.96836 20.4936 5.16362L18.6576 6.99976L15.0435 3.38565L16.8795 1.54952Z" fill="white"/>\n<path d="M2.35426 14.6604C2.1896 14.8251 2.06554 15.0258 1.9919 15.2467L0.5384 19.6072C0.147522 20.7798 1.26313 21.8955 2.43577 21.5046L6.79626 20.0511C7.01718 19.9774 7.21792 19.8534 7.38258 19.6887L6.46671 19.1068L3.65799 20.0431L1.9999 18.385L2.93614 15.5763L2.35426 14.6604Z" fill="white"/>\n</svg>\n'
              , Zl = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="7" height="7" rx="0.5" fill="black"/>\n<mask id="path-2-inside-1_1778_10736" fill="white">\n<rect y="9.5" width="7" height="7" rx="0.5"/>\n</mask>\n<rect y="9.5" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-2-inside-1_1778_10736)"/>\n<mask id="path-3-inside-2_1778_10736" fill="white">\n<rect y="19" width="7" height="7" rx="0.5"/>\n</mask>\n<rect y="19" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-3-inside-2_1778_10736)"/>\n<rect x="9.5" width="7" height="7" rx="0.5" fill="black"/>\n<rect x="19" width="7" height="7" rx="0.5" fill="black"/>\n</svg>'
              , Kl = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="7" height="7" rx="0.5" fill="black"/>\n<rect y="9.5" width="7" height="7" rx="0.5" fill="black"/>\n<rect y="19" width="7" height="7" rx="0.5" fill="black"/>\n<mask id="path-4-inside-1_1778_10696" fill="white">\n<rect x="9.5" width="7" height="7" rx="0.5"/>\n</mask>\n<rect x="9.5" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-4-inside-1_1778_10696)"/>\n<mask id="path-5-inside-2_1778_10696" fill="white">\n<rect x="19" width="7" height="7" rx="0.5"/>\n</mask>\n<rect x="19" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-5-inside-2_1778_10696)"/>\n</svg>'
              , Xl = '<svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10.2892 1.58579C10.6643 1.21071 11.173 1 11.7034 1H25.125C26.2296 1 27.125 1.89543 27.125 3V19C27.125 20.1046 26.2296 21 25.125 21H11.7034C11.173 21 10.6643 20.7893 10.2892 20.4142L1.58211 11.7071C1.19158 11.3166 1.19158 10.6834 1.58211 10.2929L10.2892 1.58579Z" stroke="black" stroke-width="1.25"/>\n<line x1="13.0089" y1="7.25" x2="20.9638" y2="15.205" stroke="black" stroke-width="1.25" stroke-linecap="round"/>\n<line x1="0.625" y1="-0.625" x2="11.875" y2="-0.625" transform="matrix(-0.707107 0.707107 0.707107 0.707107 22.2141 7.25)" stroke="black" stroke-width="1.25" stroke-linecap="round"/>\n</svg>\n';
            function Jl() {
                const [e,t] = r.useState("primary")
                  , n = (0,
                o.v9)(_o)
                  , a = (0,
                o.v9)(wo)
                  , i = (0,
                o.v9)(Eo)
                  , s = "".concat(n && "rebus", " ").concat(a && "pencil")
                  , l = (0,
                o.v9)(Be)
                  , c = (0,
                o.I0)()
                  , u = e => {
                    n && c(ko(!0)),
                    c(U(e))
                }
                  , d = {
                    backspace: Xl,
                    primary: "ABC",
                    secondary: "123",
                    tertiary: "#+=",
                    rebus: "Rebus",
                    pencil: a ? Vl : Yl,
                    prev: Fl,
                    next: ql,
                    switch: "Across" === (null == l ? void 0 : l.direction) ? Zl : Kl
                };
                return r.createElement(Dl(), {
                    baseClass: "xwd__keyboard",
                    layout: Gl,
                    layoutName: e,
                    display: d,
                    buttonTheme: [{
                        class: "icon",
                        buttons: Hl.join(" ")
                    }, {
                        class: "custom",
                        buttons: Ul.join(" ")
                    }, {
                        class: "selected",
                        buttons: s
                    }, {
                        class: "tablet-only",
                        buttons: Wl.join(" ")
                    }],
                    preventDefault: !0,
                    preventMouseDownDefault: !0,
                    stopMouseDownPropagation: !0,
                    onKeyPress: e => "primary" === e ? t("primary") : "secondary" === e ? t("secondary") : "tertiary" === e ? t("tertiary") : "backspace" === e ? c(n && i ? jt(i.slice(0, -1)) : zo()) : "rebus" === e ? c(Co()) : "pencil" === e ? c(Pt()) : "prev" === e ? u("PreviousClue") : "next" === e ? u("NextClue") : "switch" === e ? c(G()) : "right" === e ? u("Right") : "left" === e ? u("Left") : void c(n ? jt(i + e) : jo(e)),
                    disableButtonHold: !0,
                    autoUseTouchEvents: !0
                })
            }
            function Ql(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            class $l extends r.PureComponent {
                constructor() {
                    super(...arguments),
                    Ql(this, "interval", void 0),
                    Ql(this, "pauseTimeout", void 0),
                    Ql(this, "tick", void 0),
                    Ql(this, "componentDidMount", ( () => {
                        const {pauseFailsafe: e} = this.props;
                        window.addEventListener("visibilitychange", ( () => {
                            document.hidden || "hidden" === document.visibilityState ? this.handleBlur() : this.handleFocus()
                        }
                        )),
                        window.addEventListener("pagehide", ( () => {
                            e()
                        }
                        )),
                        window.addEventListener("blur", this.handleBlur),
                        window.addEventListener("focus", this.handleFocus)
                    }
                    )),
                    Ql(this, "componentDidUpdate", ( () => {
                        const {shouldBePaused: e} = this.props;
                        e !== this.isPaused() && (e ? this.stopTicking() : this.startTicking())
                    }
                    )),
                    Ql(this, "isPaused", ( () => !this.interval)),
                    Ql(this, "startTicking", ( () => {
                        const {clickHandler: e, start: t} = this.props;
                        this.tick = Date.now(),
                        this.interval = window.setInterval(( () => {
                            this.tick && Date.now() - this.tick > 1e4 ? e() : this.forceUpdate(),
                            this.tick = Date.now()
                        }
                        ), 1e3),
                        t()
                    }
                    )),
                    Ql(this, "stopTicking", ( () => {
                        const {stop: e} = this.props;
                        this.isPaused() || (this.interval && (this.interval = window.clearInterval(this.interval)),
                        e())
                    }
                    )),
                    Ql(this, "handleFocus", ( () => {
                        this.pauseTimeout && (window.clearTimeout(this.pauseTimeout),
                        delete this.pauseTimeout)
                    }
                    )),
                    Ql(this, "handleBlur", ( () => {
                        const {clickHandler: e, timerIsVisible: t} = this.props;
                        t && !this.isPaused() && ($a.tq && document.hidden && e(),
                        this.pauseTimeout || (this.pauseTimeout = window.setTimeout(e, 3e4)))
                    }
                    ))
                }
                render() {
                    const {clickHandler: e, totalElapsedTime: t, shouldBePaused: n, sessionStartTimestamp: a, timerIsVisible: o} = this.props
                      , i = de(ue(t, a))
                      , s = "Timer ".concat(n ? "Play" : "Pause", " Button")
                      , l = r.createElement("button", {
                        type: "button",
                        onClick: () => !this.isPaused() && e(),
                        "aria-label": s
                    }, r.createElement("div", {
                        className: "timer-count"
                    }, i), !this.isPaused() && r.createElement(mi.Z, {
                        icon: "pause"
                    }));
                    return r.createElement("li", {
                        className: "xwd__tool--button xwd__timer--button"
                    }, o && l)
                }
            }
            var ec = (0,
            o.$j)((e => {
                const {transient: t, status: n, timer: r} = e
                  , {isReady: a} = t
                  , {showTimer: o} = te(e)
                  , {isSolved: i} = n
                  , {totalElapsedTime: s, sessionStartTimestamp: l} = r
                  , c = ao(e);
                return {
                    shouldBePaused: !a || c || i,
                    totalElapsedTime: s,
                    sessionStartTimestamp: l,
                    timerIsVisible: o
                }
            }
            ), (e => ({
                start: () => e(wt()),
                stop: () => e(_t()),
                pauseFailsafe: () => e(_t(!0))
            })))($l)
              , tc = {
                toolbarContainer: "ToolbarAdapter-module_toolbarContainer__Ni4KN",
                toolbarContainerMobile: "ToolbarAdapter-module_toolbarContainerMobile__bkk2i",
                hidden: "ToolbarAdapter-module_hidden__FkOyP"
            };
            function nc(e) {
                let {children: t, isHidden: n, bypassPortalsUnlessMobileWeb: a, backButtonElementName: o, overrideHybridBackButton: i} = e;
                const l = (0,
                r.useRef)(document.getElementById(s.Mk))
                  , c = (0,
                r.useRef)(document.getElementById("portal-game-toolbar"))
                  , u = r.useRef(document.getElementById(s.xD))
                  , {isMobileDevice: d, isMobileWeb: m} = (0,
                Ba.vB)();
                r.useEffect(( () => {
                    var e, t;
                    d && (n ? null === (e = u.current) || void 0 === e || e.classList.remove(s.ec) : null === (t = u.current) || void 0 === t || t.classList.add(s.ec))
                }
                ), [n]);
                const p = !m && a
                  , f = i && i.condition
                  , b = i && i.action;
                if (p) {
                    const e = o ? {
                        elementName: o,
                        moduleLabel: "in-game"
                    } : void 0;
                    return r.createElement("div", {
                        className: Za()(tc.toolbarContainer, {
                            [tc.hidden]: n,
                            [tc.toolbarContainerMobile]: d
                        })
                    }, r.createElement(_i, {
                        trackData: e,
                        override: f ? b : void 0
                    }), t)
                }
                const g = d ? l.current : c.current;
                return g ? (0,
                di.createPortal)(t, g) : r.createElement(r.Fragment, null, t)
            }
            function rc(e) {
                const {clickHandler: t, icon: n, ariaLabel: a, label: o, active: i, open: s, isAutocheckOn: l, children: c} = e
                  , u = Za()("xwd__tool--button", {
                    "xwd__tool--texty": !n,
                    "xwd__tool--active": i,
                    "xwd__tool--open": s,
                    "xwd__tool--autocheck": l
                });
                return r.createElement("li", {
                    className: u
                }, r.createElement("button", {
                    type: "button",
                    "aria-label": a || o,
                    onClick: e => {
                        e.stopPropagation(),
                        t(e)
                    }
                }, !o && r.createElement("i", {
                    className: n,
                    "data-testid": "tool-icon"
                }), o), c)
            }
            function ac(e) {
                const {itemHandler: t, items: n, isAutocheckOn: a} = e
                  , [o,i] = (0,
                r.useState)(!1)
                  , {inShortzMode: s} = As();
                return r.createElement("ul", {
                    className: "xwd__menu--container",
                    "data-testid": "help-menu"
                }, n.map((e => {
                    if (e.shortzOnly && !s)
                        return null;
                    const n = !e.secondary
                      , l = o !== n
                      , c = a && e.disabledDuringAutocheck
                      , u = a && "Autocheck" === e.label;
                    return r.createElement("li", {
                        className: Za()("xwd__menu--item", {
                            "xwd__menu--item-disabled": c,
                            "xwd__menu--item-checked": u,
                            "xwd__menu--item-display": l,
                            "xwd__menu--item-hide": !l
                        }),
                        key: e.label,
                        title: e.title
                    }, r.createElement("button", {
                        type: "button",
                        className: "xwd__menu--btnlink",
                        onClick: n => {
                            !function(e, t, n) {
                                const {action: r, scope: a} = t;
                                r ? n(r, a) : (i(!o),
                                e.stopPropagation()),
                                e.preventDefault()
                            }(n, e, t)
                        }
                    }, e.label))
                }
                )))
            }
            function oc(e) {
                const {autoCheckEnabled: t, activeMenu: n, execute: a, toggleMenuAction: o, menuData: i} = e;
                return r.createElement("div", {
                    className: "xwd__toolbar--expandedMenu"
                }, i.map((e => {
                    let {label: i} = e;
                    const {items: s} = e
                      , l = i.toUpperCase()
                      , c = "check" === i && t;
                    return i = c ? "autocheck" : i,
                    r.createElement(rc, {
                        open: n === l,
                        label: i,
                        clickHandler: () => o("MENU", e.label.toUpperCase()),
                        isAutocheckOn: c,
                        key: i
                    }, r.createElement(ac, {
                        items: s,
                        itemHandler: a,
                        isAutocheckOn: c
                    }))
                }
                )))
            }
            var ic = n(5338);
            const sc = {
                "How to Play": "how-to-play",
                Feedback: "email-feedback",
                "Report a Bug": "report-bug",
                "Questions?": "questions",
                "Tips and Tricks": "tips-and-tricks",
                Glossary: "glossary",
                "Past Puzzles": "archive",
                Survey: "survey",
                forum: "forum",
                stats: "stats",
                settings: "settings",
                yesterday: "yesterday",
                print: "print",
                subscribe: "subscribe",
                tileset: "tileset",
                toggle: "toggle-board"
            }
              , lc = (e, t) => {
                const n = (new Date).toISOString().split("T")[0];
                return JSON.parse(JSON.stringify({
                    date: e || n,
                    t: t ? "archive" : "today"
                }))
            }
              , cc = (e, t) => {
                var n;
                (0,
                s.LW)({
                    element: {
                        name: (0,
                        s.j0)(),
                        label: sc[t] || t
                    },
                    context: null == e ? void 0 : e.puzzleId,
                    name: null !== (n = null == e ? void 0 : e.moduleName) && void 0 !== n ? n : lc(null == e ? void 0 : e.puzzleDate, null == e ? void 0 : e.isArchive),
                    region: "toolbar"
                })
            }
            ;
            var uc = n(90352);
            const dc = {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }
              , mc = {
                width: "28",
                height: "28",
                viewBox: "4 4 24 24"
            }
              , pc = "0 0 32 32"
              , fc = {
                mobile: {
                    menu: {
                        width: "21",
                        height: "21",
                        viewBox: "-1 -1 24 24"
                    },
                    forum: {
                        width: "21",
                        height: "21",
                        viewBox: "0 0 24 24"
                    },
                    stats: {
                        width: "20",
                        height: "18",
                        viewBox: "4 4 24 24"
                    },
                    help: {
                        width: "22",
                        height: "22",
                        viewBox: "2 2 28 28"
                    },
                    settings: {
                        width: "21",
                        height: "21",
                        viewBox: "2 2 28 28"
                    },
                    arrow: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                    },
                    more: {
                        width: "21",
                        height: "21",
                        viewBox: "0 0 24 24"
                    },
                    back: {
                        width: "21",
                        height: "21",
                        viewBox: "4 4 24 24"
                    }
                },
                desktop: {
                    menu: {
                        width: "32",
                        height: "32",
                        viewBox: "-4 -4 32 32"
                    },
                    forum: {
                        width: "36",
                        height: "36",
                        viewBox: "-4 -4 32 32"
                    },
                    stats: {
                        width: "28",
                        height: "24",
                        viewBox: "4 4 24 24"
                    },
                    help: {
                        width: "32",
                        height: "32",
                        viewBox: pc
                    },
                    settings: {
                        width: "32",
                        height: "32",
                        viewBox: pc
                    },
                    arrow: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                    },
                    more: {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 24 24"
                    },
                    back: {
                        width: "32",
                        height: "32",
                        viewBox: pc
                    }
                }
            };
            var bc = e => {
                const [t,n] = (0,
                r.useState)(dc);
                return (0,
                r.useEffect)(( () => {
                    function t() {
                        var t;
                        let r = dc
                          , a = fc.mobile;
                        null !== (t = window) && void 0 !== t && null !== (t = t.matchMedia("(min-width: 768px)")) && void 0 !== t && t.matches && (r = mc,
                        a = fc.desktop),
                        a[e] && (r = a[e]),
                        n(r)
                    }
                    return t(),
                    window.addEventListener("resize", t),
                    () => {
                        window.removeEventListener("resize", t)
                    }
                }
                ), []),
                t
            }
              , gc = {
                iconWrapper: "Icon-module_iconWrapper__ZfKPm",
                dotStyles: "Icon-module_dotStyles__UH2RU"
            };
            const vc = {
                help: "M15 24H17.6667V21.3333H15V24ZM16.3333 2.66666C8.97333 2.66666 3 8.63999 3 16C3 23.36 8.97333 29.3333 16.3333 29.3333C23.6933 29.3333 29.6667 23.36 29.6667 16C29.6667 8.63999 23.6933 2.66666 16.3333 2.66666ZM16.3333 26.6667C10.4533 26.6667 5.66667 21.88 5.66667 16C5.66667 10.12 10.4533 5.33332 16.3333 5.33332C22.2133 5.33332 27 10.12 27 16C27 21.88 22.2133 26.6667 16.3333 26.6667ZM16.3333 7.99999C13.3867 7.99999 11 10.3867 11 13.3333H13.6667C13.6667 11.8667 14.8667 10.6667 16.3333 10.6667C17.8 10.6667 19 11.8667 19 13.3333C19 16 15 15.6667 15 20H17.6667C17.6667 17 21.6667 16.6667 21.6667 13.3333C21.6667 10.3867 19.28 7.99999 16.3333 7.99999Z",
                settings: "M26.8666 17.3372C26.918 16.9086 26.9523 16.4629 26.9523 16C26.9523 15.5371 26.918 15.0914 26.8494 14.6628L29.7466 12.3999C30.0038 12.1942 30.0724 11.8171 29.9181 11.5256L27.1752 6.77693C27.0037 6.46836 26.6437 6.3655 26.3351 6.46836L22.9236 7.83982C22.2036 7.29123 21.4493 6.84551 20.6093 6.50264L20.095 2.86827C20.0436 2.52541 19.7521 2.2854 19.4093 2.2854H13.9234C13.5806 2.2854 13.3063 2.52541 13.2548 2.86827L12.7405 6.50264C11.9005 6.84551 11.1291 7.30838 10.4262 7.83982L7.01469 6.46836C6.70611 6.34835 6.3461 6.46836 6.17467 6.77693L3.43175 11.5256C3.26031 11.8342 3.32889 12.1942 3.60318 12.3999L6.50039 14.6628C6.43182 15.0914 6.38039 15.5543 6.38039 16C6.38039 16.4457 6.41467 16.9086 6.48325 17.3372L3.58603 19.6001C3.32889 19.8058 3.26031 20.183 3.4146 20.4744L6.15752 25.2231C6.32896 25.5317 6.68896 25.6345 6.99754 25.5317L10.4091 24.1602C11.1291 24.7088 11.8834 25.1545 12.7234 25.4974L13.2377 29.1317C13.3063 29.4746 13.5806 29.7146 13.9234 29.7146H19.4093C19.7521 29.7146 20.0436 29.4746 20.0779 29.1317L20.5921 25.4974C21.4322 25.1545 22.2036 24.6916 22.9065 24.1602L26.318 25.5317C26.6266 25.6517 26.9866 25.5317 27.158 25.2231L29.9009 20.4744C30.0724 20.1658 30.0038 19.8058 29.7295 19.6001L26.8666 17.3372V17.3372ZM16.6663 21.143C13.8377 21.143 11.5234 18.8286 11.5234 16C11.5234 13.1714 13.8377 10.857 16.6663 10.857C19.495 10.857 21.8093 13.1714 21.8093 16C21.8093 18.8286 19.495 21.143 16.6663 21.143Z",
                stats: "M21.3332 14.6667V4H10.6665V12H2.6665V28H29.3332V14.6667H21.3332ZM13.3332 6.66667H18.6665V25.3333H13.3332V6.66667ZM5.33317 14.6667H10.6665V25.3333H5.33317V14.6667ZM26.6665 25.3333H21.3332V17.3333H26.6665V25.3333Z",
                forum: "M15.4538 15.0078C17.2881 13.8544 18.5 11.818 18.5 9.5C18.5 5.91015 15.5899 3 12 3C8.41015 3 5.5 5.91015 5.5 9.5C5.5 11.818 6.71194 13.8544 8.54624 15.0078C9.37338 15.5279 10 16.4687 10 17.6014V20H14V17.6014C14 16.4687 14.6266 15.5279 15.4538 15.0078ZM16.5184 16.7009C16.206 16.8974 16 17.2323 16 17.6014V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V17.6014C8 17.2323 7.79404 16.8974 7.48163 16.7009C5.08971 15.1969 3.5 12.5341 3.5 9.5C3.5 4.80558 7.30558 1 12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 12.5341 18.9103 15.1969 16.5184 16.7009ZM8 17H16V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V17Z",
                menu: "M3.93428 18.2929C3.61506 18.2929 3.34567 18.1831 3.1261 17.9636C2.90654 17.744 2.79675 17.4746 2.79675 17.1554C2.79675 16.8362 2.90654 16.5668 3.1261 16.3473C3.34567 16.1277 3.61506 16.0179 3.93428 16.0179H20.0658C20.385 16.0179 20.6544 16.1277 20.874 16.3473C21.0935 16.5668 21.2033 16.8362 21.2033 17.1554C21.2033 17.4746 21.0935 17.744 20.874 17.9636C20.6544 18.1831 20.385 18.2929 20.0658 18.2929H3.93428ZM3.93428 13.1375C3.61506 13.1375 3.34567 13.0277 3.1261 12.8081C2.90654 12.5886 2.79675 12.3192 2.79675 12C2.79675 11.6808 2.90654 11.4114 3.1261 11.1918C3.34567 10.9723 3.61506 10.8625 3.93428 10.8625H20.0658C20.385 10.8625 20.6544 10.9723 20.874 11.1918C21.0935 11.4114 21.2033 11.6808 21.2033 12C21.2033 12.3192 21.0935 12.5886 20.874 12.8081C20.6544 13.0277 20.385 13.1375 20.0658 13.1375H3.93428ZM3.93428 7.98206C3.61506 7.98206 3.34567 7.87227 3.1261 7.65271C2.90654 7.43314 2.79675 7.16375 2.79675 6.84453C2.79675 6.52533 2.90654 6.25595 3.1261 6.03638C3.34567 5.81681 3.61506 5.70703 3.93428 5.70703H20.0658C20.385 5.70703 20.6544 5.81681 20.874 6.03638C21.0935 6.25595 21.2033 6.52533 21.2033 6.84453C21.2033 7.16375 21.0935 7.43314 20.874 7.65271C20.6544 7.87227 20.385 7.98206 20.0658 7.98206H3.93428Z",
                arrow: "M11.3301 4.06982H4.73006V5.26982H9.88006L3.81006 11.3398L4.66006 12.1898L10.7301 6.11982V11.2698H11.9301V4.66982C11.9301 4.33982 11.6601 4.06982 11.3301 4.06982Z",
                more: "M 17.5,12 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0 M 9.5,12 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0 M 1.5,12 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0",
                back: "M19.3333 24.3199L20.9867 22.6666L14.32 15.9999L20.9867 9.33326L19.3333 7.67993L11.84 15.1733C11.3867 15.6266 11.3867 16.3733 11.84 16.8266L19.3333 24.3199Z"
            };
            function hc(e) {
                let {icon: t, onClick: n, disabled: a=!1, id: o, fillColor: i, isWordle: s=!1, showNotificationDot: l} = e;
                const c = bc(t);
                return r.createElement("div", {
                    className: gc.iconWrapper
                }, r.createElement("svg", {
                    id: o,
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    height: c.height,
                    viewBox: c.viewBox,
                    width: c.width,
                    className: "game-icon",
                    onClick: n,
                    "data-testid": "icon-".concat(t)
                }, r.createElement("path", {
                    fill: i || (a ? "var(--icon-disabled)" : s ? "var(--color-tone-1)" : "var(--text)"),
                    d: vc[t]
                })), l && r.createElement(uc.Z, null))
            }
            function yc(e) {
                let {puzzleData: t, activeMenu: n, toggleMenuAction: a} = e;
                const {puzzleId: o, publicationDate: i, isMini: s} = t
                  , l = (new Date).toISOString().split("T")[0]
                  , c = !!i && i < l
                  , u = {
                    puzzleId: null == o ? void 0 : o.toString(),
                    puzzleDate: i,
                    isArchive: c
                };
                return null
            }
            const wc = [{
                label: "clear",
                items: [{
                    action: _,
                    scope: Dt.Unchecked,
                    label: "Incomplete",
                    title: "Won’t clear letters that are part of completed crossing words"
                }, {
                    action: _,
                    scope: Dt.Word,
                    label: "Word"
                }, {
                    action: _,
                    scope: Dt.Puzzle,
                    label: "Puzzle"
                }, {
                    action: F,
                    scope: Dt.Puzzle,
                    label: "Puzzle & Timer"
                }]
            }, {
                label: "reveal",
                items: [{
                    action: E,
                    scope: Dt.Letter,
                    label: "Square"
                }, {
                    action: E,
                    scope: Dt.Word,
                    label: "Word"
                }, {
                    action: E,
                    scope: Dt.Puzzle,
                    label: "Puzzle"
                }, {
                    action: q,
                    scope: Dt.Fifty,
                    label: "49.9%",
                    shortzOnly: !0
                }, {
                    action: q,
                    scope: Dt.SeventyFive,
                    label: "74.9%",
                    shortzOnly: !0
                }, {
                    action: q,
                    label: "99.9%",
                    shortzOnly: !0
                }]
            }, {
                label: "check",
                items: [{
                    action: To,
                    label: "Autocheck"
                }, {
                    action: w,
                    scope: Dt.Letter,
                    label: "Square",
                    disabledDuringAutocheck: !0
                }, {
                    action: w,
                    scope: Dt.Word,
                    label: "Word",
                    disabledDuringAutocheck: !0
                }, {
                    action: w,
                    scope: Dt.Puzzle,
                    label: "Puzzle",
                    disabledDuringAutocheck: !0
                }]
            }]
              , _c = [{
                action: To,
                label: "Autocheck"
            }, {
                action: w,
                scope: Dt.Letter,
                label: "Check Square",
                disabledDuringAutocheck: !0
            }, {
                action: w,
                scope: Dt.Word,
                label: "Check Word",
                disabledDuringAutocheck: !0
            }, {
                action: w,
                scope: Dt.Puzzle,
                label: "Check Puzzle",
                disabledDuringAutocheck: !0
            }, {
                action: q,
                scope: Dt.Fifty,
                label: "49.9%",
                shortzOnly: !0
            }, {
                action: q,
                scope: Dt.SeventyFive,
                label: "74.9%",
                shortzOnly: !0
            }, {
                action: q,
                label: "99.9%",
                shortzOnly: !0
            }, {
                label: "More 〉"
            }, {
                action: _,
                scope: Dt.Unchecked,
                label: "Clear Incomplete",
                secondary: !0
            }, {
                action: _,
                scope: Dt.Word,
                label: "Clear Word",
                secondary: !0
            }, {
                action: F,
                scope: Dt.Puzzle,
                label: "Reset Puzzle",
                secondary: !0
            }, {
                action: E,
                scope: Dt.Letter,
                label: "Reveal Square",
                secondary: !0
            }, {
                action: E,
                scope: Dt.Word,
                label: "Reveal Word",
                secondary: !0
            }, {
                action: E,
                scope: Dt.Puzzle,
                label: "Reveal Puzzle",
                secondary: !0
            }, {
                label: "〈 Back",
                secondary: !0
            }];
            function Ec() {
                const {isMobileDevice: e, isNewsreaderApp: t} = (0,
                Ba.vB)()
                  , {inRebusMode: n, activeMenu: a, inPencilMode: i} = (0,
                o.v9)(yo)
                  , {isSolved: s, autocheckEnabled: l} = (0,
                o.v9)(On)
                  , {notes: c} = (0,
                o.v9)(_e) || {}
                  , u = (0,
                o.v9)(Ho)
                  , d = (0,
                o.v9)(Ce)
                  , m = (0,
                o.v9)(Ne)
                  , p = (0,
                o.v9)(je)
                  , f = e && !t
                  , [b,g] = (0,
                r.useState)(!1)
                  , v = (0,
                o.I0)()
                  , h = (e, t) => {
                    v("function" == typeof e ? e() : Lo(e, t))
                }
                  , y = (e, t) => {
                    "PENCIL" === e ? v(Pt()) : "REBUS" === e ? v(Co()) : t && v(xt(t))
                }
                  , w = e => {
                    v(pt(e))
                }
                  , _ = r.createElement("div", {
                    className: Za()("xwd__toolbar--wrapper")
                }, r.createElement("ul", {
                    className: "xwd__toolbar--tools"
                }, !f && r.createElement("div", null, r.createElement(rc, {
                    clickHandler: () => w(ho.Settings),
                    icon: "xwd__toolbar_icon--settings-gear",
                    ariaLabel: "Puzzle Settings Menu"
                })), r.createElement(ec, {
                    clickHandler: () => w(ho.Pause)
                }), !e && r.createElement(rc, {
                    clickHandler: () => y("REBUS"),
                    label: "Rebus",
                    active: n
                }), s ? r.createElement("div", {
                    className: Za()("xwd__toolbar--mobileResetButton", e)
                }, r.createElement(rc, {
                    clickHandler: () => h(F),
                    label: e ? "" : "Reset",
                    icon: e ? "xwd__toolbar_icon--reset-puzzle" : "",
                    ariaLabel: "Reset"
                })) : r.createElement(oc, {
                    autoCheckEnabled: l,
                    activeMenu: a,
                    execute: h,
                    toggleMenuAction: y,
                    menuData: wc
                }), e && r.createElement(rc, {
                    clickHandler: () => {
                        c && g(!0),
                        w(ho.Info)
                    }
                    ,
                    icon: Za()("xwd__toolbar_icon--info", {
                        "xwd__toolbar_icon--info-animation": c && c.length > 0 && !b
                    }),
                    ariaLabel: "Info"
                }), !e && r.createElement(yc, {
                    activeMenu: a,
                    toggleMenuAction: y,
                    puzzleData: {
                        puzzleId: d,
                        publicationDate: m,
                        isMini: p
                    }
                }), !e && r.createElement(rc, {
                    clickHandler: () => y("PENCIL"),
                    icon: "xwd__toolbar_icon--pencil".concat(i ? "-active" : ""),
                    active: i
                }), !s && r.createElement("div", {
                    className: "xwd__toolbar--condensedMenu"
                }, r.createElement(rc, {
                    active: "MOBILE" === a,
                    icon: "xwd__toolbar_icon--cheat-menu".concat("MOBILE" === a || l ? "-active" : ""),
                    clickHandler: () => y("MENU", "MOBILE"),
                    isAutocheckOn: l,
                    ariaLabel: "Cheat Menu"
                }, r.createElement(ac, {
                    items: _c,
                    isAutocheckOn: l,
                    itemHandler: h
                }))), e && r.createElement(yc, {
                    activeMenu: a,
                    toggleMenuAction: y,
                    puzzleData: {
                        puzzleId: d,
                        publicationDate: m,
                        isMini: p
                    }
                }), f && r.createElement("div", null, r.createElement(rc, {
                    clickHandler: () => w(ho.Settings),
                    icon: "xwd__toolbar_icon--settings-gear",
                    ariaLabel: "Puzzle Settings Menu"
                }))));
                return r.createElement(nc, {
                    isHidden: !u
                }, _)
            }
            function Oc() {
                return Oc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Oc.apply(this, arguments)
            }
            function Sc(e, t) {
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
            function kc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sc(Object(n), !0).forEach((function(t) {
                        Cc(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Cc(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            const Pc = e => null == e ? void 0 : e.text;
            class xc extends r.PureComponent {
                constructor(e) {
                    super(e),
                    Cc(this, "animate", void 0),
                    Cc(this, "canvas", void 0),
                    Cc(this, "timer", void 0),
                    this.state = {
                        message: null
                    },
                    this.canvas = r.createRef(),
                    this.handleMessage = this.handleMessage.bind(this)
                }
                componentDidMount() {
                    const {emitter: e} = this.props;
                    this.setupCanvas(),
                    e.on("milestone", this.handleMessage)
                }
                componentWillUnmount() {
                    const {emitter: e} = this.props;
                    this.timer && clearTimeout(this.timer),
                    e.off("milestone", this.handleMessage)
                }
                handleMessage(e) {
                    const {message: t} = this.state;
                    t || (this.setState({
                        message: e
                    }),
                    this.animate && this.animate(),
                    this.timer = setTimeout(( () => {
                        this.timer = null,
                        this.setState({
                            message: null
                        })
                    }
                    ), 1470))
                }
                setupCanvas() {
                    this.animate = ( (e, t) => {
                        const n = null == e ? void 0 : e.getContext("2d");
                        if (n)
                            return n.scale(2, 2),
                            () => {
                                let e = 0
                                  , t = 15;
                                n.lineWidth = 4,
                                n.lineCap = "round",
                                n.strokeStyle = "#4F85E5";
                                const r = (e, t) => {
                                    n.moveTo(e, 0),
                                    n.lineTo(e + Math.max(t, 0), 0)
                                }
                                  , a = () => {
                                    if (n.clearRect(0, 0, 70, 70),
                                    n.save(),
                                    n.translate(35, 35),
                                    t -= 1,
                                    e += 1.75,
                                    t >= -4) {
                                        n.beginPath();
                                        for (let a = 0; a < 8; a += 1)
                                            r(e, t),
                                            n.rotate(Math.PI / 4);
                                        n.stroke(),
                                        n.restore(),
                                        requestAnimationFrame(a)
                                    } else
                                        n.restore()
                                }
                                ;
                                a()
                            }
                    }
                    )(this.canvas.current)
                }
                render() {
                    const {boardId: e} = this.props
                      , {message: t} = this.state
                      , n = t && ( (e, t) => {
                        var n, r;
                        const a = null === (n = document.getElementById(Xo(e.idx))) || void 0 === n ? void 0 : n.getBoundingClientRect()
                          , o = null === (r = document.getElementById(t)) || void 0 === r ? void 0 : r.getBoundingClientRect();
                        if (a && o) {
                            const e = a.left - o.left
                              , t = a.top - o.top;
                            return {
                                left: e + a.width / 2,
                                top: t + a.height / 2
                            }
                        }
                    }
                    )(t, e);
                    return r.createElement("div", {
                        className: Za()("xwd__milestone", {
                            xwd__show: !!t
                        }),
                        style: kc({}, n),
                        "data-testid": "milestone"
                    }, r.createElement("span", {
                        className: "xwd__pill"
                    }, t && Pc && Pc(t)), r.createElement("canvas", {
                        "data-testid": "milestone-canvas",
                        className: "xwd__canvas",
                        ref: this.canvas,
                        style: {
                            width: 70,
                            height: 70
                        },
                        width: 140,
                        height: 140
                    }))
                }
            }
            var jc = e => r.createElement(sn.Consumer, null, (t => r.createElement(xc, Oc({
                emitter: t
            }, e))))
              , Nc = n(41175)
              , Lc = n.n(Nc);
            function Tc(e, t) {
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
            function Ic(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tc(Object(n), !0).forEach((function(t) {
                        Dc(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Dc(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            const Bc = (e, t, n) => Math.min(n, Math.max(t, e));
            class zc extends r.Component {
                constructor(e) {
                    super(e),
                    Dc(this, "wrapperRef", void 0),
                    this.state = {
                        transitionTime: 0,
                        scale: 1,
                        x: 0,
                        y: 0,
                        prevScale: 1,
                        prevX: 0,
                        prevY: 0,
                        startDeltaX: 0,
                        startDeltaY: 0
                    },
                    this.wrapperRef = r.createRef(),
                    this.handleStart = this.handleStart.bind(this),
                    this.handleMove = this.handleMove.bind(this),
                    this.handleEnd = this.handleEnd.bind(this)
                }
                componentDidMount() {
                    if (!this.wrapperRef.current)
                        return;
                    const e = new (Lc())(this.wrapperRef.current,{
                        preventDefault: !0
                    });
                    e.get("pinch").set({
                        enable: !0
                    }),
                    e.on("pinchstart panstart", this.handleStart),
                    e.on("pinchmove panmove", this.handleMove),
                    e.on("pinchend pinchcancel panend pancancel", this.handleEnd)
                }
                handleStart(e) {
                    this.setState({
                        transitionTime: 0,
                        startDeltaX: e.deltaX,
                        startDeltaY: e.deltaY
                    })
                }
                handleMove(e) {
                    this.setState((t => {
                        const {prevScale: n, prevX: r, prevY: a, startDeltaX: o, startDeltaY: i} = t
                          , {scale: s, deltaX: l, deltaY: c} = e
                          , u = n * s;
                        return Ic(Ic({}, t), {}, 1 === u && 1 === n ? {
                            scale: u
                        } : {
                            scale: u,
                            x: r + (l - o),
                            y: a + (c - i)
                        })
                    }
                    ))
                }
                handleEnd() {
                    this.setState((e => {
                        let {x: t, y: n, scale: r} = e;
                        const a = this.wrapperRef.current;
                        if (!a)
                            return null;
                        const o = Bc(r, 1, 2)
                          , i = Math.ceil((o - 1) * (a.clientWidth / 2))
                          , s = Math.ceil((o - 1) * (a.clientHeight / 2))
                          , l = Bc(t, -i, i)
                          , c = Bc(n, -s, s);
                        return {
                            transitionTime: .5,
                            scale: o,
                            x: l,
                            y: c,
                            prevScale: o,
                            prevX: l,
                            prevY: c
                        }
                    }
                    ))
                }
                createStyle() {
                    const {scale: e, x: t, y: n, transitionTime: r} = this.state;
                    return {
                        transition: "transform ".concat(r, "s"),
                        transform: "translate(".concat(t, "px, ").concat(n, "px) scale(").concat(e, ")")
                    }
                }
                render() {
                    const {children: e, className: t} = this.props;
                    return r.createElement("div", {
                        className: t,
                        ref: this.wrapperRef,
                        style: this.createStyle(),
                        "data-testid": "zoomable"
                    }, e)
                }
            }
            function Mc() {
                return Mc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Mc.apply(this, arguments)
            }
            function Ac(e, t) {
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
            function Rc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ac(Object(n), !0).forEach((function(t) {
                        Gc(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ac(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Gc(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            class Uc extends r.PureComponent {
                constructor(e) {
                    super(e),
                    Gc(this, "ref", void 0),
                    Gc(this, "value", void 0),
                    Gc(this, "handleClick", (e => {
                        const {type: t, clickHandler: n, openRebus: r} = this.props;
                        null == e || e.persist(),
                        "BLOCK" !== t && "EXTERNAL" !== t && (n(),
                        1 === (null == e ? void 0 : e.button) && r())
                    }
                    )),
                    Gc(this, "renderChild", ( (e, t) => {
                        const {isSolved: n, answer: a, guess: o} = this.props
                          , {attributes: i, content: s, name: l} = e;
                        let c = i.fontSize;
                        const u = n ? a : o
                          , d = "middle" === i.textAnchor;
                        d && u.length > 1 && (c /= u.length / 2);
                        const m = Rc(Rc({}, i), {}, {
                            fontSize: c
                        });
                        return this.value = d ? "".concat(u) : "",
                        r.createElement(l, Mc({
                            key: t
                        }, m, {
                            "data-testid": "cell-".concat(l)
                        }), r.createElement("text", {
                            className: "xwd__cell--hidden",
                            "aria-live": "polite"
                        }, this.value), s || u)
                    }
                    )),
                    Gc(this, "renderAssistBadge", ( () => {
                        const {isChecked: e, isRevealed: t, isModified: n, isConfirmed: a, dimensions: o, index: i} = this.props;
                        if (!e && !t)
                            return null;
                        let s;
                        s = t ? "revealed" : n || a ? "modified" : "checked";
                        const {cellSize: l, columnCount: c} = o
                          , u = Math.floor(i / c)
                          , d = i % c;
                        return r.createElement("use", {
                            xlinkHref: "#".concat(s),
                            className: "xwd__assistance--".concat(s),
                            x: l * d,
                            y: l * u,
                            "data-testid": "assist-badge"
                        })
                    }
                    )),
                    this.ref = r.createRef(),
                    this.value = ""
                }
                componentDidUpdate() {
                    const {isSelected: e, skipFocus: t} = this.props;
                    e && this.ref.current && !t && document.activeElement !== this.ref.current && this.ref.current.focus()
                }
                render() {
                    const {ariaLabel: e, isSelected: t, isInSelectedClue: n, isRelated: a, isPenciled: o, isConfirmed: i, background: s, innards: l, type: c, index: u} = this.props
                      , d = {
                        "xwd__cell--selected": t,
                        "xwd__cell--highlighted": n,
                        "xwd__cell--related": a,
                        "xwd__cell--cell": "BLOCK" !== c,
                        "xwd__cell--block": "BLOCK" === c,
                        "xwd__cell--shaded": "SHADED" === c,
                        "xwd__cell--penciled": o,
                        "xwd__assistance--confirmed": i
                    };
                    return r.createElement("g", {
                        className: "xwd__cell",
                        onClick: this.handleClick,
                        onContextMenu: this.handleClick,
                        "data-testid": "cell-g"
                    }, r.createElement("rect", Mc({
                        role: "cell",
                        tabIndex: t ? 0 : -1,
                        "aria-label": e,
                        ref: this.ref,
                        id: Xo(u),
                        className: Za()(d, "xwd__cell--nested")
                    }, s.attributes)), l.map(this.renderChild), this.renderAssistBadge())
                }
            }
            var Hc = Uc;
            function Wc() {
                return Wc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Wc.apply(this, arguments)
            }
            const Fc = e => {
                switch (e) {
                case 1:
                    return "EMPTY";
                case 2:
                    return "CIRCLED";
                case 3:
                    return "SHADED";
                case 4:
                    return "EXTERNAL";
                default:
                    return "BLOCK"
                }
            }
              , qc = {
                Across: "A",
                Down: "D",
                Heart: "Heart",
                Diagonal: "DG"
            };
            function Yc(e) {
                let {attributes: t, cellBoard: n, dimensions: a} = e;
                const i = (0,
                o.v9)(ao)
                  , s = (0,
                o.v9)(_o)
                  , l = (0,
                o.v9)(kn)
                  , c = (0,
                o.v9)(be)
                  , u = (0,
                o.v9)(Be)
                  , d = (0,
                o.v9)(Ie)
                  , m = (0,
                o.v9)(ze)
                  , p = (0,
                o.v9)(Me)
                  , {notes: f} = (0,
                o.v9)(_e) || {}
                  , b = (0,
                o.I0)()
                  , g = (/iPad|iPhone/.test(navigator.userAgent),
                r.useCallback((e => {
                    if (!u || !Object.keys(u).length)
                        return f && f.length > 0 ? "No Clue, Notes: ".concat(f[0].text, ", Answer: 1 letter, Letter: 1") : "No Clue, Answer: 1 letter, Letter: 1";
                    const {label: t, direction: n, text: r, alternativeAriaLabelText: a} = u;
                    if (t && n && r) {
                        const r = m.length
                          , o = m.indexOf(e);
                        return "".concat(t).concat(qc[n] || n, ": ").concat(a, ", ") + "Answer: ".concat(r, " letters, ") + "Letter: ".concat(o + 1)
                    }
                    return ""
                }
                ), [u, m, f]));
                return r.createElement("g", Wc({}, t, {
                    role: "table"
                }), n.map((e => {
                    let {children: t, index: n} = e;
                    if ("number" != typeof n)
                        return;
                    const [o,...u] = t
                      , f = c[n]
                      , v = n === d;
                    return r.createElement(Hc, {
                        key: n,
                        index: n,
                        dimensions: a,
                        background: o,
                        innards: u,
                        isSolved: l,
                        skipFocus: i || s,
                        answer: f.answer || "",
                        guess: f.guess || "",
                        type: Fc(f.type),
                        isPenciled: f.penciled,
                        isChecked: f.checked,
                        isConfirmed: f.confirmed,
                        isModified: f.modified,
                        isRevealed: f.revealed,
                        isSelected: v,
                        isInSelectedClue: m.includes(n),
                        isRelated: p.includes(n),
                        ariaLabel: g(n),
                        clickHandler: () => b(( (e, t) => t ? {
                            type: R
                        } : {
                            type: M,
                            payload: {
                                index: e
                            }
                        })(n, v)),
                        openRebus: () => b(Co())
                    })
                }
                )))
            }
            function Vc() {
                return Vc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Vc.apply(this, arguments)
            }
            function Zc(e) {
                let {group: t, grid: n, frame: a, dimensions: o, externalCells: i} = e;
                if (i.some((e => e))) {
                    const e = ( (e, t) => {
                        const {rowCount: n, columnCount: r, cellSize: a} = e
                          , o = e => e < r
                          , i = e => e >= r * (n - 1)
                          , s = e => e % r == 0
                          , l = e => e % r == r - 1
                          , c = e => e - r
                          , u = e => e + r
                          , d = e => e - 1
                          , m = e => e + 1
                          , p = (e, t, n) => {
                            return "M".concat((o = e,
                            o % r * a + 3 + t), ",").concat((e => Math.floor(e / r) * a + 3)(e) + n);
                            var o
                        }
                          , f = () => "l".concat(a, ",0")
                          , b = () => "l0,".concat(a)
                          , g = e => p(e, 0, 0) + f()
                          , v = e => p(e, 0, a) + f()
                          , h = e => p(e, 0, 0) + b()
                          , y = e => p(e, a, 0) + b();
                        return t.reduce(( (e, n, r) => {
                            if (n)
                                return e;
                            const a = t => {
                                e.lines += t(r)
                            }
                              , p = t => {
                                e.frame += t(r)
                            }
                              , f = (e, n) => e(r) || t[n(r)]
                              , b = f(o, c)
                              , w = f(l, m)
                              , _ = f(i, u)
                              , E = f(s, d);
                            return b && p(g),
                            E && p(h),
                            w ? p(y) : a(y),
                            _ ? p(v) : a(v),
                            e
                        }
                        ), {
                            frame: "",
                            lines: ""
                        })
                    }
                    )(o, i);
                    return r.createElement("g", Vc({}, t, {
                        "data-testid": "board-g-group"
                    }), r.createElement("path", Vc({}, n, {
                        d: e.lines
                    })), r.createElement("path", Vc({}, a, {
                        d: e.frame,
                        strokeLinecap: "round"
                    })))
                }
                return r.createElement("g", Vc({}, t, {
                    "data-testid": "board-g-group"
                }), r.createElement("path", n), r.createElement("rect", Vc({}, a, {
                    fill: "none"
                })))
            }
            const Kc = ["className"];
            function Xc() {
                return Xc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Xc.apply(this, arguments)
            }
            function Jc(e) {
                let {assistShapes: t=[]} = e;
                return r.createElement("defs", null, t.map((e => {
                    const {attributes: {id: t}, children: n} = e;
                    return r.createElement("g", {
                        id: "".concat(t),
                        key: t,
                        className: "xwd__assistance--".concat(t),
                        "data-testid": "defs-g"
                    }, n.map((e => {
                        const {attributes: {className: t}, name: n} = e
                          , a = function(e, t) {
                            if (null == e)
                                return {};
                            var n, r, a = function(e, t) {
                                if (null == e)
                                    return {};
                                var n, r, a = {}, o = Object.keys(e);
                                for (r = 0; r < o.length; r++)
                                    n = o[r],
                                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++)
                                    n = o[r],
                                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                            }
                            return a
                        }(e.attributes, Kc);
                        return r.createElement(n, Xc({
                            key: t
                        }, a, {
                            className: "xwd__assistance--".concat(t)
                        }))
                    }
                    )))
                }
                )))
            }
            function Qc() {
                return Qc = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                Qc.apply(this, arguments)
            }
            const $c = "xwd-board";
            var eu = e => {
                let {isMobile: t} = e;
                const n = (0,
                o.v9)(ge)
                  , a = (0,
                o.v9)(Nn)
                  , i = (0,
                o.v9)(Ee)
                  , s = (0,
                o.v9)(ke)
                  , l = (0,
                o.v9)(je);
                if (!i || !s)
                    return null;
                const {attributes: c, children: u} = i
                  , [d,m,p] = u
                  , {attributes: f, children: [b,g]} = p;
                return r.createElement("section", {
                    className: Za()("xwd__board", {
                        xwd__mobile: t,
                        xwd__desktop: !t
                    }),
                    "aria-label": "Game Board"
                }, r.createElement(zc, {
                    className: "xwd__board--content"
                }, r.createElement("svg", Qc({
                    id: $c,
                    className: "xwd__svg",
                    preserveAspectRatio: "xMidYMin meet",
                    "aria-label": "Puzzle Board for the Crossword"
                }, c), r.createElement("use", {
                    xlinkHref: "#checked"
                }), r.createElement(Jc, {
                    assistShapes: d.children
                }), r.createElement(Yc, {
                    attributes: m.attributes,
                    cellBoard: m.children,
                    dimensions: s
                }), r.createElement(Zc, {
                    group: f,
                    grid: b.attributes,
                    frame: g.attributes,
                    externalCells: n,
                    dimensions: s
                }), a && r.createElement("image", {
                    xlinkHref: "".concat(a),
                    width: "100%",
                    height: "100%",
                    className: "xwd__overlay",
                    "data-testid": "overlay"
                })), !t && !l && r.createElement(jc, {
                    boardId: $c
                })))
            }
            ;
            function tu() {
                const e = (0,
                o.v9)(Ce)
                  , t = (0,
                o.I0)();
                return r.createElement("button", {
                    type: "button",
                    className: "xwd__printtools--button",
                    onClick: () => {
                        t(pt(ho.Print)),
                        Tt("daily-page", e, "game-page", "print-puzzle")
                    }
                }, r.createElement(mi.Z, {
                    icon: "print-black"
                }), r.createElement("span", {
                    className: "xwd__printtools--text"
                }, "Print"))
            }
            const nu = ["notes", "publishStream"];
            function ru() {
                const e = (0,
                o.v9)(_e)
                  , t = r.useRef(document.getElementById("portal-game-header"))
                  , n = (0,
                o.v9)(je)
                  , a = !!window.newsreaderAppPlatform
                  , i = !n && !a;
                if (!t.current || !e)
                    return null;
                const {notes: s, publishStream: l} = e
                  , c = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, a = {}, o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            n = o[r],
                            t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++)
                            n = o[r],
                            t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                    return a
                }(e, nu);
                return (0,
                di.createPortal)(r.createElement("header", {
                    className: "xwd__header--wrapper"
                }, r.createElement("div", {
                    className: Za()("xwd__header--row", {
                        "xwd__header--fullwidth": n
                    })
                }, r.createElement("div", {
                    className: "xwd__header--puzzle-details-container"
                }, r.createElement(Hs, c), s && r.createElement(nl, {
                    notes: s
                })), i && r.createElement("div", {
                    className: "xwd__header--tools-container"
                }, r.createElement(tu, null)))), t.current)
            }
            function au(e, t) {
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
            function ou(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? au(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : au(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const iu = e => {
                const t = e.trim().toUpperCase().replace(" AND ", " and ");
                return t.startsWith("BY ") ? t.replace("BY ", "By ") : "By ".concat(t)
            }
              , su = e => e.byline ? ou(ou({}, e), {}, {
                byline: iu(e.byline)
            }) : ou({}, e);
            var lu = (e, t) => wn({
                method: "GET",
                url: "/christmas_word_puzzles/nyt_games/mini.json"//.concat(yn, "/v6/editorial-content/puzzle/").concat(e, ".json")
            }, t).then((e => (e.featuredArticle = su(e.featuredArticle),
            e.secondaryArticles = e.secondaryArticles.map((e => su(e))),
            e)));
            function cu(e) {
                let {children: t} = e;
                const n = (0,
                o.v9)(ao);
                return r.createElement("div", {
                    "aria-label": "Wordplay Section",
                    className: "xwd__editorial-content--subGameplayGrid",
                    tabIndex: n ? -1 : 0
                }, r.createElement("div", {
                    className: "xwd__editorial-content--header"
                }, r.createElement("a", {
                    href: "https://www.nytimes.com/column/wordplay",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "WORDPLAY")), r.createElement("div", {
                    className: "xwd__editorial-content--cardsContainer"
                }, t))
            }
            function uu(e) {
                let {kicker: t, headline: n, byline: a, summary: i, thumbURL: s, url: l="https://www.nytimes.com/christmas_word_puzzles/nyt_games/leaderboard", type: c="secondaryCard"} = e;
                const u = (0,
                o.v9)(Ce);
                return r.createElement("a", {
                    className: Za()("xwd__editorial-content--".concat(c), "xwd__editorial-content--editorialCard"),
                    href: l,
                    onClick: () => Tt(l, u, "game-page", "wordplay-content", l),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    tabIndex: 0
                }, s && r.createElement("div", {
                    className: "xwd__editorial-content--imgContainer"
                }, r.createElement("img", {
                    src: s,
                    alt: n
                })), r.createElement("div", {
                    className: "xwd__editorial-content--meta"
                }, t && r.createElement("p", {
                    className: "xwd__editorial-content--kicker"
                }, t), n && r.createElement("h2", null, n), i && r.createElement("p", {
                    className: "xwd__editorial-content--summary"
                }, i), a && r.createElement("p", {
                    className: "xwd__editorial-content--byline"
                }, a)))
            }
            function du() {
                const [e,t] = (0,
                r.useState)(void 0)
                  , n = (0,
                o.v9)(Ne)
                  , {userType: a} = (0,
                eo.aF)()
                  , i = (0,
                o.v9)(je);
                (0,
                r.useEffect)(( () => {
                    n && lu(n, a).then((e => {
                        t(e)
                    }
                    )).catch((e => {
                        dn.warn(e)
                    }
                    ))
                }
                ), [n]);
                const s = r.useRef(document.getElementById("portal-editorial-content"));
                return i || $a.tq || !s.current || null == e || !e.featuredArticle ? null : (0,
                di.createPortal)(r.createElement("div", null, r.createElement(cu, null, r.createElement(uu, {
                    type: "featuredCard",
                    kicker: e.featuredArticle.kicker,
                    headline: e.featuredArticle.headline,
                    byline: e.featuredArticle.byline,
                    summary: e.featuredArticle.summary,
                    thumbURL: e.featuredArticle.thumbURL,
                    url: e.featuredArticle.url
                }), e.secondaryArticles && e.secondaryArticles.map((e => r.createElement(uu, {
                    key: e.url,
                    type: "secondaryCard",
                    kicker: e.kicker,
                    headline: e.headline,
                    byline: e.byline,
                    summary: e.summary,
                    thumbURL: e.thumbURL,
                    url: e.url
                }))))), s.current)
            }
            function mu() {
                const e = (0,
                o.v9)(Be)
                  , t = (null == e ? void 0 : e.text) || ""
                  , n = (0,
                o.I0)()
                  , a = () => n(G())
                  , i = (e, t) => r.createElement("div", {
                    role: "button",
                    tabIndex: 0,
                    className: Za()("xwd__clue-bar-mobile--jump", t),
                    onClick: e,
                    onKeyDown: t => "Enter" === t.key && e()
                }, r.createElement("i", {
                    className: "xwd__clue-bar--chevron"
                }));
                return r.createElement("div", {
                    className: "xwd__clue-bar-mobile--bar"
                }, i(( () => n(U("PreviousClue"))), "left"), r.createElement("div", {
                    role: "button",
                    className: Za()("middle xwd__clue-format", {
                        "xwd__image-clue-format": null == e ? void 0 : e.isImageClue
                    }),
                    tabIndex: 0,
                    onClick: a,
                    onKeyDown: e => "Enter" === e.key && a(),
                    dangerouslySetInnerHTML: {
                        __html: t
                    },
                    "aria-label": "switch direction"
                }), i(( () => n(U("NextClue")))))
            }
            function pu() {
                const e = (0,
                o.v9)(Be);
                if ((0,
                o.v9)(ao))
                    return r.createElement("div", {
                        className: "xwd__clue-bar-desktop--bar obscured"
                    });
                const {label: t="", direction: n, text: a=""} = e || {}
                  , i = Za()("xwd__clue-bar-desktop--text", "xwd__clue-format", {
                    long: a.length > 200
                })
                  , s = "".concat(t).concat(n ? n[0] : " ");
                return r.createElement("div", {
                    className: "xwd__clue-bar-desktop--bar"
                }, r.createElement("div", {
                    className: "xwd__clue-bar-desktop--number"
                }, s), r.createElement("div", {
                    className: i,
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                }))
            }
            function fu() {
                return $a.tq ? r.createElement(mu, null) : r.createElement(pu, null)
            }
            function bu(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            class gu extends r.Component {
                constructor(e) {
                    super(e),
                    bu(this, "listRef", void 0),
                    bu(this, "handleClick", ( () => {
                        const {clickHandler: e, index: t, isSelected: n} = this.props;
                        "number" == typeof t && e && e(t, n)
                    }
                    )),
                    this.listRef = (0,
                    r.createRef)()
                }
                componentDidUpdate() {
                    const {isHighlighted: e, isSelected: t, isModalOpen: n} = this.props;
                    if (!e && !t || n)
                        return;
                    const r = this.listRef.current
                      , a = null == r ? void 0 : r.parentElement;
                    if (r && a) {
                        const e = r.offsetTop
                          , t = a.offsetTop;
                        a.scrollTo({
                            top: e - t,
                            behavior: "smooth"
                        })
                    }
                }
                render() {
                    const {hasNoUnfilledCells: e, isHighlighted: t, isRelated: n, isSelected: a, label: o, text: i="", isImageClue: s} = this.props
                      , l = Za()("xwd__clue--li", {
                        "xwd__clue--filled": e,
                        "xwd__clue--highlighted": t,
                        "xwd__clue--selected": a,
                        "xwd__clue--related": n
                    });
                    return r.createElement("li", {
                        className: l,
                        onClick: this.handleClick,
                        ref: this.listRef,
                        onKeyDown: e => {
                            "Enter" === e.key && this.handleClick()
                        }
                    }, r.createElement("span", {
                        className: "xwd__clue--label"
                    }, o), r.createElement("span", {
                        className: Za()("xwd__clue--text xwd__clue-format", {
                            "xwd__clue--label--has-image": s
                        }),
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }))
                }
            }
            var vu = (0,
            o.$j)(( (e, t) => {
                const n = Te(e)
                  , r = ve(e)
                  , {index: a} = t;
                if ("number" == typeof a && r) {
                    const e = r[a]
                      , t = n.cellClues.includes(a)
                      , o = e.list === n.clueList
                      , i = t && o
                      , s = n.relatedClues.includes(a);
                    return {
                        hasNoUnfilledCells: e.unfilledCount <= 0,
                        isHighlighted: t && !i,
                        isSelected: i,
                        isRelated: s,
                        isImageClue: e.isImageClue
                    }
                }
                return {
                    hasNoUnfilledCells: !1,
                    isHighlighted: !1,
                    isSelected: !1,
                    isRelated: !1,
                    isImageClue: !1
                }
            }
            ))(gu);
            function hu(e) {
                let {list: t} = e;
                const n = (0,
                o.v9)(ve)
                  , a = (0,
                o.v9)(ao)
                  , i = (0,
                o.I0)()
                  , s = (e, t) => {
                    i(H(e, t))
                }
                  , l = Za()("xwd__clue-list--list", {
                    "xwd__clue-list--obscured": a
                })
                  , c = "xwd__clue-list--wrapper".concat($a.tq ? "-mobile" : "");
                return r.createElement("div", {
                    className: c
                }, r.createElement("h3", {
                    className: "xwd__clue-list--title"
                }, t.name), r.createElement("ol", {
                    className: l
                }, t.clues.map((e => {
                    const {label: t, text: o, index: i, direction: l} = n[e];
                    return r.createElement(vu, {
                        clickHandler: s,
                        index: i,
                        label: t,
                        text: o,
                        key: "".concat(t).concat(l),
                        isModalOpen: a
                    })
                }
                ))))
            }
            function yu(e) {
                let {lists: t} = e;
                return $a.tq ? r.createElement(r.Fragment, null, t.map((e => r.createElement(hu, {
                    list: e,
                    key: e.index
                })))) : r.createElement("section", {
                    className: Za()("xwd__layout--cluelists")
                }, t.map((e => r.createElement(hu, {
                    list: e,
                    key: e.index
                }))))
            }
            function wu(e, t, n) {
                var r;
                return (t = "symbol" == typeof (r = function(e, t) {
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
                }(t)) ? r : r + "")in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            const _u = (e, t) => {
                var n, r;
                const a = (null === (n = document.getElementById(Xo(e))) || void 0 === n ? void 0 : n.getBoundingClientRect()) || {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                }
                  , {width: o} = (null === (r = t.current) || void 0 === r ? void 0 : r.getBoundingClientRect()) || {
                    width: 0
                };
                return a.width = Math.max(o, a.width),
                a
            }
            ;
            class Eu extends r.Component {
                constructor(e) {
                    var t;
                    super(e),
                    t = this,
                    wu(this, "inputRef", void 0),
                    wu(this, "invisibleRef", void 0),
                    wu(this, "handleKeyDown", (e => {
                        switch (e.key) {
                        case "Enter":
                        case "NumpadEnter":
                            e.preventDefault(),
                            this.saveAndExit();
                            break;
                        case "Escape":
                            this.saveAndExit(!1);
                            break;
                        case "Tab":
                            e.preventDefault()
                        }
                        e.stopPropagation()
                    }
                    )),
                    wu(this, "checkForExitMobile", (e => {
                        const {key: t} = e;
                        "Tab" === t && e.preventDefault();
                        let n = 0;
                        t && ["Escape", "Enter", "NumpadEnter"].includes(t) && (this.setState({
                            visible: !1
                        }),
                        e.preventDefault(),
                        n = 300),
                        setTimeout(( () => this.handleKeyDown(e)), n)
                    }
                    )),
                    wu(this, "shiftField", (e => {
                        const t = e.target
                          , {index: n} = this.props;
                        if (n && t && !$a.tq) {
                            const {left: e, width: r} = _u(n, this.invisibleRef);
                            let a = e + window.pageXOffset;
                            t.offsetWidth > r && (a += r / 2 - t.offsetWidth / 2),
                            t.style.left = "".concat(a, "px")
                        }
                        e.stopPropagation()
                    }
                    )),
                    wu(this, "updateRebus", (e => {
                        const t = e.target.value || ""
                          , {onRebusChange: n} = this.props;
                        n(t),
                        this.shiftField(e)
                    }
                    )),
                    wu(this, "saveAndExit", (function() {
                        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        const {exit: n} = t.props;
                        n(e)
                    }
                    )),
                    this.inputRef = (0,
                    r.createRef)(),
                    this.invisibleRef = (0,
                    r.createRef)(),
                    this.state = {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0,
                        visible: !1
                    }
                }
                componentDidMount() {
                    const {index: e} = this.props
                      , {current: t} = this.inputRef;
                    $a.tq && this.setState({
                        visible: !0
                    }),
                    t && t.focus({
                        preventScroll: !0
                    });
                    const {height: n, left: r, top: a, width: o} = _u(e, this.invisibleRef);
                    this.setState({
                        width: o,
                        height: n,
                        left: r,
                        top: a
                    })
                }
                componentDidUpdate(e, t) {
                    const {index: n} = this.props
                      , {width: r} = _u(n, this.invisibleRef);
                    r && t.width !== r && this.setState({
                        width: r
                    })
                }
                render() {
                    const {value: e="", offset: t, isSolved: n} = this.props
                      , {height: a, left: o, top: i, visible: s, width: l} = this.state
                      , c = i - t
                      , u = o + window.pageXOffset
                      , d = $a.tq ? {
                        width: l
                    } : {
                        top: c,
                        left: u,
                        height: a,
                        width: l
                    };
                    return r.createElement("div", {
                        className: Za()("xwd__rebus", {
                            "xwd__rebus--mobile": $a.tq,
                            "xwd__rebus--visible": s
                        })
                    }, $a.tq && r.createElement("div", null, "Rebus"), r.createElement("input", {
                        id: "rebus-input",
                        name: "rebus",
                        inputMode: $a.tq ? "none" : "text",
                        disabled: n,
                        ref: this.inputRef,
                        onChange: e => this.updateRebus(e),
                        onBlur: () => this.saveAndExit(!0),
                        onKeyDown: e => {
                            $a.tq ? (e.persist(),
                            this.checkForExitMobile(e),
                            e.stopPropagation()) : this.handleKeyDown(e)
                        }
                        ,
                        onKeyPress: e => e.stopPropagation(),
                        className: "xwd__rebus--input",
                        style: d,
                        value: e
                    }), r.createElement("div", {
                        ref: this.invisibleRef,
                        className: "xwd__rebus--invisible",
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }))
                }
            }
            var Ou = (0,
            o.$j)((e => {
                const t = De(e);
                return {
                    index: t ? t.index : -1,
                    value: e.toolbar.rebusValue,
                    isSolved: e.status.isSolved
                }
            }
            ), (e => ({
                exit: t => e(ko(t)),
                onRebusChange: t => e(jt(t))
            })))(Eu);
            const Su = ["getIsClosing", "getOpenModalName", "modalMap", "onClose", "portalId", "onRemove"];
            function ku() {
                return ku = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                ku.apply(this, arguments)
            }
            function Cu(e) {
                let {getIsClosing: t, getOpenModalName: n, modalMap: a, onClose: i, portalId: s, onRemove: l} = e
                  , c = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, a = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, a = {}, o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                            n = o[r],
                            t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++)
                            n = o[r],
                            t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                    return a
                }(e, Su);
                const u = r.useRef(s ? document.getElementById(s) : null)
                  , d = (0,
                o.v9)(n)
                  , m = (0,
                o.v9)(t)
                  , p = (0,
                o.I0)();
                if (!d)
                    return null;
                const f = a[d]
                  , b = r.createElement(f, ku({
                    close: function() {
                        return p(i(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]))
                    },
                    isClosing: m,
                    onRemove: () => {
                        p(l())
                    }
                }, c));
                return u.current ? (0,
                di.createPortal)(b, u.current) : b
            }
            const Pu = e => {
                let {winHeight: t, winWidth: n} = e;
                const r = n / t;
                return t <= 650 && r > 1.8 || t < 400 && r > 1
            }
            ;
            var xu = e => {
                let {inRebusMode: t=!1} = e;
                const n = (e => {
                    const {winHeight: t, winWidth: n} = qo();
                    return e({
                        winHeight: t,
                        winWidth: n
                    })
                }
                )(Pu)
                  , {isSolved: a} = ((0,
                o.v9)(ao),
                (0,
                o.v9)(On))
                  , i = (0,
                o.I0)();
                return (0,
                r.useEffect)(( () => {
                    n ? (i(_t()),
                    s.$A.deactivate()) : (i(wt()),
                    s.$A.activate())
                }
                ), [n]),
                !n || t ? null : r.createElement("div", {
                    className: "xwd__landscape-warning"
                }, r.createElement(mi.Z, {
                    icon: "rotate"
                }), r.createElement("p", null, "Oh no! We can’t fit everything on your screen.", r.createElement("br", null), r.createElement("span", null, "Please rotate your device.")))
            }
            ;
            const ju = {
                [ho.Info]: function(e) {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const i = (0,
                    o.v9)(_e);
                    if (!i)
                        return null;
                    const {notes: s, publishStream: l, title: c} = i;
                    return r.createElement(vi, {
                        bodyClassName: "xwd__info-modal--wrapper",
                        close: t,
                        isClosing: n,
                        onRemove: a
                    }, r.createElement("div", {
                        className: "xwd__info-modal"
                    }, r.createElement(Ei, {
                        size: "medium",
                        text: "Puzzle Info"
                    }), r.createElement(Ei, {
                        size: "large",
                        text: Gs(c, l)
                    }), r.createElement(Ws, {
                        meta: i,
                        isInfo: !0
                    })), s && r.createElement(nl, {
                        notes: s
                    }))
                },
                [ho.Settings]: function(e) {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const {isErsatzShortz: i, inShortzMode: s} = As()
                      , l = (0,
                    o.v9)(te)
                      , {skipFilled: c, backspaceAcrossWords: u, skipPenciled: d, autoAdvance: m, jumpBack: p, soundOn: f, showTimer: b, suppressDisqualificationWarnings: g, showMilestones: v, spaceTriggers: h, onSwitch: y, suppressAutocheckNotice: w, speedUpSyncInterval: _, forceGoldStarEligibility: E} = l
                      , O = (0,
                    o.I0)()
                      , S = (e, t) => {
                        O(tn({
                            [e]: t
                        }))
                    }
                      , k = [{
                        label: "Save and close",
                        clickHandler: () => t()
                    }, {
                        label: "Restore defaults",
                        disabled: ( () => {
                            const e = $a.tq ? Wt : Ft
                              , t = Object.keys(e);
                            return fn(e, l, t)
                        }
                        )(),
                        className: "pz-moment__button secondary",
                        clickHandler: () => {
                            return O((e = $a.tq,
                            {
                                type: Zt,
                                payload: e ? Wt : Ft
                            }));
                            var e
                        }
                    }];
                    return r.createElement(vi, {
                        bodyClassName: "xwd__settings-modal--wrapper",
                        close: t,
                        keyConfig: {
                            Escape: () => t()
                        },
                        buttons: k,
                        buttonsWrapperClassName: "xwd__settings-btns--wrapper",
                        isClosing: n,
                        onRemove: a
                    }, r.createElement("div", {
                        className: "xwd__settings-modal--title-container"
                    }, r.createElement(Ei, {
                        size: "medium",
                        text: "Puzzle Settings"
                    }), i && r.createElement(yl, null)), r.createElement("form", {
                        id: "settings-panel",
                        className: "xwd__settings-modal--form",
                        onChange: e => {
                            const {target: t} = e
                              , {checked: n, name: r, type: a, value: o} = t;
                            S(r, "radio" === a ? o : n)
                        }
                    }, r.createElement("div", {
                        className: "xwd__settings-modal--column"
                    }, !$a.tq && r.createElement(ul, {
                        onSwitch: y,
                        spaceTriggers: h
                    }), r.createElement(pl, {
                        backspaceAcrossWords: u
                    }), r.createElement(fl, {
                        subSettingsHandler: S,
                        skipFilled: c,
                        skipPenciled: d
                    })), r.createElement("div", {
                        className: "xwd__settings-modal--column"
                    }, r.createElement(bl, {
                        jumpBack: p,
                        autoAdvance: m
                    }), r.createElement(gl, {
                        soundOn: f,
                        showTimer: b,
                        suppressDq: g,
                        showMilestones: v
                    }), s && r.createElement(vl, {
                        speedUpSyncInterval: _ || !1,
                        forceGoldStarEligibility: E || !1,
                        suppressAutocheckNotice: w || !1
                    }))))
                },
                [ho.Rats]: e => {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const o = r.useRef(Q(rl))
                      , i = r.useRef(Q(al));
                    return r.createElement(vi, {
                        buttons: [{
                            label: "Keep trying"
                        }],
                        close: t,
                        bodyClassName: "xwd__rats-modal",
                        isClosing: n,
                        onRemove: a
                    }, r.createElement(Ei, {
                        size: "large",
                        text: o.current
                    }), r.createElement(Oi, {
                        text: "The puzzle is filled, but at least one square’s amiss. ".concat(i.current),
                        variant: "small"
                    }))
                }
                ,
                [ho.Congrats]: Bs,
                [ho.Confirmation]: function(e) {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const {actionType: i, scope: s, needToWarn: l} = (0,
                    o.v9)(oo)
                      , {title: c, text: u, buttonLabel: d} = ( (e, t) => {
                        switch (e) {
                        case w:
                            return {
                                title: "Feeling stuck?",
                                text: wl,
                                buttonLabel: "Check anyway"
                            };
                        case F:
                            return t ? {
                                title: "Resetting the timer will exclude this puzzle from a streak.",
                                text: "Streaks are formed by solving The Crossword within a day of its publish date and without help.",
                                buttonLabel: "Reset timer"
                            } : {
                                title: "",
                                text: "Are you sure you want to start over?",
                                buttonLabel: "Start over"
                            };
                        case E:
                            return t ? {
                                title: "Feeling stuck?",
                                text: wl,
                                buttonLabel: "Reveal anyway"
                            } : {
                                title: "",
                                text: "Are you sure you want to reveal the puzzle?",
                                buttonLabel: "Reveal"
                            };
                        case _:
                            return {
                                title: "",
                                text: "Are you sure you want to erase the puzzle?",
                                buttonLabel: "Erase"
                            };
                        case V:
                            return {
                                title: "Feeling stuck?",
                                text: wl,
                                buttonLabel: "Use autocheck"
                            };
                        default:
                            return {
                                title: "",
                                text: "Are you sure you want to do that?",
                                buttonLabel: "Confirm"
                            }
                        }
                    }
                    )(i, l)
                      , m = (0,
                    o.I0)()
                      , p = e => {
                        m(tn({
                            suppressDisqualificationWarnings: e
                        }))
                    }
                      , f = () => {
                        t(!0),
                        l && p(!1)
                    }
                      , b = () => {
                        t(),
                        m(No(i, s))
                    }
                      , g = [{
                        label: "Never mind",
                        className: "secondary",
                        clickHandler: f
                    }, {
                        label: d,
                        clickHandler: b
                    }]
                      , v = {
                        Enter: b,
                        NumpadEnter: b,
                        Escape: f
                    }
                      , h = r.createElement("div", {
                        className: "xwd__modal-confirm--warning"
                    }, r.createElement(Ei, {
                        size: "medium",
                        text: c
                    }), r.createElement(Oi, {
                        text: u,
                        variant: "small"
                    }))
                      , y = l ? r.createElement("div", {
                        className: "xwd__modal-confirm--footer"
                    }, r.createElement(ml, {
                        name: "suppressDisqualificationWarnings",
                        label: "Don’t show again",
                        onChange: e => p(e.target.checked)
                    })) : null;
                    return r.createElement(vi, {
                        bodyClassName: "xwd__confirmation-modal--wrapper",
                        buttons: g,
                        keyConfig: v,
                        close: t,
                        footer: y,
                        isClosing: n,
                        onRemove: a
                    }, l ? h : r.createElement(Oi, {
                        text: u,
                        variant: "small"
                    }))
                },
                [ho.Print]: function(e) {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const i = (0,
                    o.I0)()
                      , {version: s, showBlack: l, showSpoiler: c} = (0,
                    o.v9)(_l)
                      , {opacity: u, layout: d} = (0,
                    o.v9)(ne)
                      , m = (0,
                    o.v9)(_e)
                      , p = (0,
                    o.v9)(Tl)
                      , f = (0,
                    o.v9)(jl)
                      , b = (0,
                    o.v9)(Cl)
                      , g = (0,
                    o.v9)(Pl)
                      , v = (0,
                    o.v9)(kl)
                      , h = (0,
                    o.v9)(Sl)
                      , y = 0 === (null == m ? void 0 : m.category)
                      , w = e => {
                        const {target: t} = e
                          , {checked: n, name: r, type: a, value: o} = t;
                        i((e => ({
                            type: Fr,
                            payload: e
                        }))({
                            [r]: "radio" === a ? o : n
                        }))
                    }
                      , _ = e => {
                        const t = e || Ut.standard;
                        i((e => ({
                            type: Jt,
                            payload: {
                                layout: e
                            }
                        }))(t))
                    }
                      , E = () => window.open("https://www.nytimes.com".concat(p));
                    return r.createElement(vi, {
                        buttons: [{
                            label: "Print",
                            clickHandler: E
                        }],
                        keyConfig: {
                            Enter: E,
                            NumpadEnter: E
                        },
                        ignoreBackgroundClick: !0,
                        close: t,
                        isClosing: n,
                        onRemove: a
                    }, r.createElement(Ei, {
                        size: "medium",
                        text: "Print"
                    }), r.createElement("div", {
                        className: "xwd__print-modal--printModalContent"
                    }, (null == m ? void 0 : m.formatType) && r.createElement("div", {
                        className: "xwd__print-modal--puzzleDetails"
                    }, r.createElement("div", {
                        className: "xwd__print-modal--puzzleTitle"
                    }, m.title || "Daily Puzzle"), r.createElement("div", {
                        className: "xwd__print-modal--puzzleDate"
                    }, f)), r.createElement("div", {
                        className: "xwd__print-modal--printOptions"
                    }, r.createElement("div", {
                        className: "xwd__print-modal--section"
                    }, r.createElement("div", {
                        className: "xwd__print-modal--left"
                    }, r.createElement(ll, {
                        type: "radio",
                        id: "puzzle",
                        name: "version",
                        value: "puzzle",
                        checked: "puzzle" === s,
                        onChange: w,
                        tabIndex: 0,
                        label: "Puzzle"
                    }), y && r.createElement("div", {
                        className: Za()("xwd__print-modal--inset", {
                            "xwd__print-modal--disabled": b
                        })
                    }, r.createElement(ll, {
                        type: "radio",
                        id: "standard",
                        name: "layout",
                        value: "standard",
                        checked: "standard" === d,
                        onChange: () => _(Ut.standard),
                        disabled: b,
                        label: "Standard Layout"
                    }), r.createElement(ll, {
                        type: "radio",
                        id: "large_print",
                        name: "layout",
                        value: "large_print",
                        checked: "large_print" === d,
                        onChange: () => _(Ut.large_print),
                        disabled: b,
                        label: "Large Print"
                    }), r.createElement(ll, {
                        type: "radio",
                        id: "southpaw",
                        name: "layout",
                        value: "southpaw",
                        checked: "southpaw" === d,
                        onChange: () => _(Ut.southpaw),
                        disabled: b,
                        label: "Left-handed"
                    })), r.createElement(ll, {
                        type: "radio",
                        id: "solution",
                        name: "version",
                        value: "solution",
                        checked: "solution" === s,
                        onChange: w,
                        disabled: !h,
                        label: "Solution",
                        subText: "(available Thursday 10 p.m. ET)",
                        showSubText: !h,
                        subTextClass: "xwd__print-modal--subscript"
                    })), r.createElement("div", {
                        className: Za()("xwd__print-modal--cellDarkness", {
                            disabled: g
                        })
                    }, r.createElement(ml, {
                        onChange: e => {
                            return t = e.target.checked,
                            void i((e => ({
                                type: Xt,
                                payload: {
                                    opacity: e
                                }
                            }))(t ? 30 : 100));
                            var t
                        }
                        ,
                        type: "checkbox",
                        id: "opacity",
                        name: "opacity",
                        checked: u < 100,
                        disabled: g,
                        "aria-disabled": g,
                        label: "Ink Saver"
                    }), r.createElement("div", null, r.createElement("div", {
                        className: "xwd__print-modal--opacityIcon"
                    }, r.createElement("div", {
                        className: "xwd__print-modal--opacityReference"
                    }), r.createElement("div", {
                        className: "xwd__print-modal--userOpacity",
                        style: {
                            opacity: u / 100
                        }
                    }))))), v && r.createElement("div", {
                        className: "xwd__print-modal--section"
                    }, r.createElement(ll, {
                        type: "radio",
                        id: "newspaper",
                        name: "version",
                        value: "newspaper",
                        checked: "newspaper" === s,
                        onChange: w,
                        label: "Newspaper Version"
                    })))))
                },
                [ho.Start]: function(e) {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const i = (0,
                    o.v9)(_e)
                      , l = (0,
                    o.v9)(je)
                      , c = (0,
                    o.v9)(Ce)
                      , {userType: u} = (0,
                    eo.aF)()
                      , {getVariant: d, reportExposure: m} = (0,
                    to.Z)()
                      , [p,f] = r.useState(!1)
                      , [b,g] = r.useState(!1)
                      , v = (0,
                    o.I0)()
                      , {getButtonText: h, isGamesSaleActive: y} = (0,
                    el.Z)(!0)
                      , w = h()
                      , _ = y ? "mini-welcome-subscribe-anon-cta_button mini-welcome-subscribe-anon-sales_cta_button" : "mini-welcome-subscribe-anon-cta_button"
                      , {isWeb: E, isMobileWeb: O, isTablet: S} = (0,
                    Ba.vB)()
                      , k = y ? "games-sales-version" : ""
                      , C = E
                      , P = d(tl)
                      , x = Boolean(l && P && "1_subscribe_cta" === P);
                    (0,
                    r.useEffect)(( () => {
                        P && m(tl)
                    }
                    ), [P]);
                    const j = () => {
                        v(go(u)),
                        t()
                    }
                      , N = (0,
                    r.useCallback)(( () => {
                        !function() {
                            let {isMini: e, entitlement: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                isMini: !1,
                                entitlement: "anon"
                            };
                            const n = !t.includes("cr");
                            return e && n && "undefined" != typeof window && !!window.isMobileWeb
                        }({
                            isMini: l,
                            entitlement: u.entitlement
                        }) ? j() : f(!0)
                    }
                    ), []);
                    r.useEffect(( () => {
                        b && j()
                    }
                    ), [b]);
                    const L = "ios" === window.newsreaderAppPlatform
                      , T = O || S && E
                      , I = l && T
                      , D = !l && T;
                    r.useEffect(( () => {
                        D && It("welcome", "game-page", "download-app", null == c ? void 0 : c.toString()),
                        I && It("welcome", "mini-page", "download-app", null == c ? void 0 : c.toString())
                    }
                    ), [D, I]);
                    const B = "anon" === u.entitlement || "reg" === u.entitlement
                      , z = O && l && !p
                      , M = d("Conv_MiniWelcome_AA_Test_424")
                      , A = d("CONV_SUBCON_Mini_Sub_Only_245_SUBCON_GROWTH_5-1")
                      , R = l && "1_variant" === A
                      , G = d("MAPS_wordleRegisNewsletterOptIn_0324");
                    r.useEffect(( () => {
                        B && z && m("Conv_MiniWelcome_AA_Test_424")
                    }
                    ), [M]),
                    r.useEffect(( () => {
                        G && m("MAPS_wordleRegisNewsletterOptIn_0324")
                    }
                    ), [G]),
                    r.useEffect(( () => {
                        l && A && m("CONV_SUBCON_Mini_Sub_Only_245_SUBCON_GROWTH_5-1")
                    }
                    ), [A]);
                    const U = () => {
                        let e = window.navigationLinks.register;
                        C && (e = window.navigationLinks.loginOffer),
                        null != G && null != e && (e = "".concat(e, "&display=,").concat(G)),
                        window.navigationLinks.register && (Tt("", "", "mini-page", "register"),
                        window.location.href = e)
                    }
                      , H = () => {
                        m(tl),
                        Tt("click", c, "mini-page", "subscribe"),
                        ( (e, t) => {
                            const n = ds("");
                            window.isHybridWebView && window.NativeBridge ? window.NativeBridge.gamesAuthenticateUser("subscribe").then(( () => {}
                            )) : (0,
                            cs.I3)(n) ? (0,
                            cs.Hu)(n) : window.location.assign(n)
                        }
                        )()
                    }
                    ;
                    if (!i)
                        return null;
                    const {title: W, publishStream: F} = i
                      , q = !!(0,
                    s.vl)("nl")
                      , Y = !u.isLoggedIn && !window.newsreaderAppPlatform && !q
                      , V = (Z = u.hasXwd,
                    R && !Z ? [{
                        label: w,
                        clickHandler: () => {
                            let e = window.navigationLinks.subscribe.default;
                            null != G && null != e && (e = "".concat(e, "&display=,").concat(G)),
                            window.navigationLinks.subscribe.default && (Tt("", "", "mini-page", w),
                            window.location.href = e)
                        }
                    }] : Y ? x ? [{
                        label: "Play",
                        className: k,
                        clickHandler: N
                    }, {
                        className: _,
                        label: w,
                        clickHandler: H
                    }] : [{
                        label: "Play",
                        className: k,
                        clickHandler: N
                    }] : B && x ? [{
                        label: "Play",
                        className: k
                    }, {
                        className: _,
                        label: w,
                        clickHandler: H
                    }] : [{
                        label: "Play",
                        className: k
                    }]);
                    var Z;
                    const K = ( (e, t, n) => t && !e ? r.createElement(Oi, {
                        text: "Ready to start solving? <br> Subscribers enjoy full access.",
                        variant: "small"
                    }) : n ? r.createElement(Oi, {
                        text: "Save your progress across devices and compare times with friends.",
                        variant: "small"
                    }) : r.createElement(Oi, {
                        text: "Ready to start solving?"
                    }))(u.hasXwd, R, Y)
                      , X = ( (e, t) => t ? e ? r.createElement("div", null, "Already a subscriber?", r.createElement("button", {
                        type: "button",
                        onClick: U,
                        className: "xwd__modal--subtle-button"
                    }, "Log in.")) : 
                    null
                    // r.createElement("button", {
                    //     type: "button",
                    //     onClick: N,
                    //     className: "xwd__modal--subtle-button"
                    // }, "Play without an account")
                     : r.createElement(Ws, {
                        meta: i
                    }))(R, Y)
                      , J = () => {
                        const e = l ? "mini-page" : "game-page";
                        (0,
                        s.ob)({
                            name: e,
                            label: "welcome-download-app",
                            context: c,
                            region: "welcome",
                            moduleLabel: "https://nytimes.onelink.me/IM32/jna276xj"
                        })
                    }
                    ;
                    return p ? r.createElement($s, {
                        bodyClassName: Za()("xwd__start-modal", {
                            mini: l
                        }),
                        close: () => {
                            g(!0)
                        }
                        ,
                        containerClassName: Za()("start-modal-container", {
                            "ios-newsreader": L
                        }),
                        isClosing: n,
                        onRemove: a,
                        enableCountdown: Xs(d, m),
                        enableFadeIn: Js(d, m)
                    }) : r.createElement(vi, {
                        buttons: V,
                        close: N,
                        hideCloseX: !0,
                        ignoreBackgroundClick: !0,
                        bodyClassName: Za()("xwd__start-modal", {
                            mini: l
                        }),
                        footer: X,
                        showHeader: !0,
                        isClosing: n,
                        onRemove: a,
                        noAnimateOpen: !0,
                        containerClassName: Za()("start-modal-container", {
                            "ios-newsreader": L
                        })
                    }, r.createElement("i", {
                        className: Za()("xwd__start-modal--icon", {
                            mini: l
                        })
                    }), r.createElement(Ei, {
                        size: "large",
                        text: Gs(W, F)
                    }), K, null)
                },
                [ho.Pause]: function(e) {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const i = (0,
                    o.v9)(_e);
                    return i ? r.createElement(vi, {
                        buttons: [{
                            label: "Continue"
                        }],
                        ignoreBackgroundClick: !0,
                        hideCloseX: !0,
                        close: t,
                        isClosing: n,
                        onRemove: a,
                        footer: r.createElement(Ws, {
                            meta: i
                        }),
                        containerClassName: "pause-modal"
                    }, r.createElement(Ei, {
                        size: "large",
                        text: "Your game is paused."
                    }), r.createElement(Oi, {
                        text: "Ready to play?"
                    })) : null
                },
                [ho.Share]: e => {
                    let {close: t, isClosing: n, onRemove: a} = e;
                    const [i,s] = (0,
                    r.useState)(!1)
                      , l = (0,
                    r.useRef)(null)
                      , c = r.useRef(null)
                      , u = (0,
                    o.v9)(dr)
                      , d = (0,
                    o.v9)(Ne)
                      , {shareUrl: m, shareImageSrc: p} = Pi(d, u)
                      , f = encodeURIComponent("I solved the daily mini!");
                    return (0,
                    r.useEffect)(( () => () => {
                        clearTimeout(c.current)
                    }
                    ), []),
                    r.createElement(vi, {
                        close: t,
                        isClosing: n,
                        onRemove: a,
                        bodyClassName: "xwd__share-modal"
                    }, r.createElement(Ei, {
                        size: "large",
                        text: "Share Your Victory"
                    }), r.createElement("div", {
                        className: "xwd__share-modal_toutImageWrapper"
                    }, r.createElement("img", {
                        src: p,
                        alt: "social media achievement",
                        className: "xwd__share-modal_toutImage"
                    })), r.createElement("ul", {
                        className: "xwd__share-modal_shareNetworks"
                    }, r.createElement("li", {
                        className: "xwd__share-modal_shareItem"
                    }, r.createElement("button", {
                        ref: l,
                        type: "button",
                        "aria-label": "Copy Link",
                        id: "copyUrlId",
                        onClick: () => {
                            if (l.current) {
                                const e = "".concat(m, "&smid=").concat("url-share")
                                  , t = document.createElement("input");
                                t.type = "text",
                                t.value = e,
                                l.current.append(t),
                                t.select(),
                                document.execCommand("copy"),
                                t.remove(),
                                s(!0),
                                Tt("share-tools", void 0, "share-url", "Permalink"),
                                clearTimeout(c.current),
                                c.current = setTimeout(( () => {
                                    s(!1)
                                }
                                ), 5e3)
                            }
                        }
                        ,
                        className: Za()("xwd__share-modal_shareLinkButton", {
                            "xwd__share-modal_copiedLink": i
                        })
                    }, r.createElement("i", {
                        className: Za()("xwd__share-modal_shareIcon", "link")
                    }), r.createElement("div", {
                        className: "xwd__share-modal_shareLink"
                    }, i ? "Copied" : "Copy Link"))), r.createElement("li", {
                        className: "xwd__share-modal_shareItem"
                    }, r.createElement("a", {
                        href: "https://www.facebook.com/dialog/feed?app_id=9869919170&link=".concat(Ci(m, "fb-share"), "&name=").concat(f, "&redirect_uri=").concat(xi),
                        target: "_blank",
                        "aria-label": "Share on Facebook",
                        rel: "noopener noreferrer",
                        onClick: () => {
                            Tt("share-tools", void 0, "share-facebook", "Facebook")
                        }
                    }, r.createElement("i", {
                        className: Za()("xwd__share-modal_shareIcon", "facebook")
                    }), r.createElement("div", {
                        className: "xwd__share-modal_shareLink"
                    }, "Facebook"))), r.createElement("li", {
                        className: "xwd__share-modal_shareItem"
                    }, r.createElement("a", {
                        href: "https://twitter.com/intent/tweet?url=".concat(Ci(m, "tw-share"), "&text=").concat(f),
                        target: "_blank",
                        "aria-label": "Share on Twitter",
                        rel: "noopener noreferrer",
                        onClick: () => {
                            Tt("share-tools", void 0, "share-twitter", "Twitter")
                        }
                    }, r.createElement("i", {
                        className: Za()("xwd__share-modal_shareIcon", "twitter")
                    }), r.createElement("div", {
                        className: "xwd__share-modal_shareLink"
                    }, "Twitter"))), r.createElement("li", {
                        className: "xwd__share-modal_shareItem"
                    }, r.createElement("a", {
                        href: "https://t.me/share/url?url=".concat(Ci(m, "tel-share"), "&text=").concat(f, " via @nytimes"),
                        target: "_blank",
                        "aria-label": "Share on Telegram",
                        rel: "noopener noreferrer",
                        onClick: () => {
                            Tt("share-tools", void 0, "share-telegram", "Telegram")
                        }
                    }, r.createElement("i", {
                        className: Za()("xwd__share-modal_shareIcon", "telegram")
                    }), r.createElement("div", {
                        className: "xwd__share-modal_shareLink"
                    }, "Telegram"))), r.createElement("li", {
                        className: "xwd__share-modal_shareItem"
                    }, r.createElement("a", {
                        href: "https://api.whatsapp.com/send?text=".concat(f, "%20").concat(Ci(m, "wa-share")),
                        target: "_blank",
                        "aria-label": "Share on WhatsApp",
                        rel: "noopener noreferrer",
                        onClick: () => {
                            Tt("share-tools", void 0, "share-whatsapp", "WhatsApp")
                        }
                    }, r.createElement("i", {
                        className: Za()("xwd__share-modal_shareIcon", "whatsapp")
                    }), r.createElement("div", {
                        className: "xwd__share-modal_shareLink"
                    }, "Whatsapp")))))
                }
            };
            function Nu(e) {
                let {clueLists: t, inRebusMode: n, doEscape: a, puzzleEscaped: i, isMobile: s} = e;
                const l = (0,
                r.useRef)(null)
                  , c = (0,
                r.useRef)(null)
                  , u = !!window.newsreaderAppPlatform
                  , d = "android" === window.newsreaderAppPlatform;
                (0,
                r.useEffect)(( () => {
                    l.current && a && !s && (l.current.focus(),
                    i && i())
                }
                ), [a]);
                const m = (0,
                r.useRef)(null)
                  , [p,f] = (0,
                r.useState)(0);
                (0,
                r.useEffect)(( () => {
                    var e;
                    const t = (null === (e = m.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top) || 0;
                    f(t)
                }
                ), [n]);
                const b = (0,
                o.I0)()
                  , g = (0,
                o.v9)(ao)
                  , v = (0,
                o.v9)(ro)
                  , {isSolved: h} = (0,
                o.v9)(On)
                  , {winWidth: y} = qo();
                return (0,
                r.useEffect)(( () => {
                    h && b(_t())
                }
                ), [h]),
                (0,
                r.useEffect)(( () => {
                    const e = document.getElementById("js-nav-burger")
                      , t = () => {
                        null == e || !e.classList.contains("active") || g || h || b(pt(ho.Pause))
                    }
                    ;
                    null == e || e.addEventListener("click", t);
                    const n = document.getElementById("cache-safe-games-sale-banner-a");
                    return n && !g && n.classList.add("hide-game-sale-banner"),
                    () => {
                        null == e || e.removeEventListener("click", t)
                    }
                }
                )),
                (0,
                r.useEffect)(( () => {
                    const e = document.getElementById("js-nav-burger")
                      , t = document.getElementById("js-global-nav")
                      , n = () => ( (e, t, n, r) => {
                        const a = (null == e ? void 0 : e.classList.contains("active")) && (null == t ? void 0 : t.classList.contains("show-mobile-toolbar")) && $a.tq && r <= 375;
                        n || (a ? null == t || t.classList.remove("show-mobile-toolbar") : null == t || t.classList.add("show-mobile-toolbar"))
                    }
                    )(e, t, g && v === ho.Start, y);
                    return null == e || e.addEventListener("click", n),
                    () => {
                        null == e || e.removeEventListener("click", n)
                    }
                }
                ), [g, v, y]),
                (0,
                r.useEffect)(( () => {
                    if (s && !u) {
                        const e = () => {
                            const e = c.current
                              , t = document.getElementsByClassName("pz-header")[0].clientHeight || 0;
                            if (e) {
                                const n = window.innerHeight - t;
                                e.setAttribute("style", "height:".concat(n, "px"))
                            }
                        }
                        ;
                        e();
                        const t = Fo(e, 50);
                        return window.addEventListener("resize", t),
                        () => window.removeEventListener("resize", t)
                    }
                }
                ), [s]),
                r.createElement("div", {
                    className: "xwd__layout_container",
                    ref: m
                }, s && r.createElement(xu, {
                    inRebusMode: n
                }), r.createElement(Cu, {
                    getOpenModalName: ro,
                    getIsClosing: io,
                    modalMap: ju,
                    onClose: ft,
                    onRemove: bt,
                    portalId: "portal-game-modals"
                }), !s && r.createElement(ru, null), r.createElement(Ec, null), r.createElement("div", {
                    className: Za()({
                        "xwd__layout_container--mobile": s,
                        "xwd__layout--rebusmode": n,
                        "xwd__layout_container--mobile-newsreader": u,
                        "xwd__news-android": d
                    }),
                    ref: c
                }, r.createElement("article", {
                    id: "puzzle",
                    "aria-label": "Main Puzzle Layout",
                    className: Za()({
                        "xwd__layout_puzzle--mobile": s,
                        "xwd__layout_puzzle--desktop": !s
                    })
                }, r.createElement("section", {
                    className: Za()({
                        xwd__layout_clueBarAndBoard: !s,
                        "xwd__mobile_layout--board_container": s
                    }),
                    "aria-label": "Game Board with Clue Bar"
                }, !s && r.createElement(fu, null), r.createElement(eu, {
                    isMobile: s
                }), s && r.createElement("span", {
                    key: "breaker",
                    className: "xwd__layout_breaker",
                    "data-testid": "breaker"
                })), t && r.createElement(yu, {
                    lists: t
                })), n && r.createElement(Ou, {
                    offset: p
                }), s && r.createElement("div", {
                    className: "xwd__layout_controls--mobile",
                    "data-testid": "mobile-controls"
                }, r.createElement(fu, null), r.createElement(Jl, null))), r.createElement(du, null))
            }
            const Lu = ["nytimes://login", "nytimes://createAccount"];
            var Tu = n(54988)
              , Iu = n(19164);
            const Du = e => {
                let t, {error: n, navigationLinks: a, subscriptionCampaign: o, iconError: i, iconSubscribe: s, liraAsset: l, userType: c, documentTitle: u} = e;
                const {newsreaderAppPlatform: d} = (0,
                Ba.vB)()
                  , {isGamesSaleActive: m} = (0,
                Iu.Z)()
                  , p = (f = a.login,
                b = "&asset=".concat(l),
                Lu.some((e => f.startsWith(e))) ? f : "".concat(f).concat(b));
                var f, b;
                switch (u && (document.title = u),
                n.status) {
                case 401:
                case 403:
                    t = r.createElement("div", {
                        className: "pz-error__message"
                    }, s && r.createElement("i", {
                        className: Za()("pz-error__icon", s)
                    }), r.createElement("h1", null, "Subscribe to play."), r.createElement("p", null, "Get full access to The Crossword, created daily by Times experts, with a New York Times Games subscription."), r.createElement("a", {
                        className: "pz-error__button default",
                        href: a.subscribe[o]
                    }, ""), m && r.createElement("a", {
                        className: "pz-error__button default sale",
                        href: a.subscribe[o]
                    }, Tu.sN.getAcquisitionMessage(d)), r.createElement("br", null), null != c && c.isLoggedIn ? null : r.createElement("p", null, r.createElement("a", {
                        className: "pz-error__link",
                        href: p
                    }, "Log in")));
                    break;
                case 404:
                    t = r.createElement("div", {
                        className: "pz-error__message"
                    }, i && r.createElement("i", {
                        className: Za()("pz-error__icon", i)
                    }), r.createElement("h1", null, "This page no longer exists."), r.createElement("a", {
                        className: "pz-error__button",
                        href: "/christmas_word_puzzles/nyt_games/leaderboard"
                    }, "Explore Our Games"));
                    break;
                default:
                    t = r.createElement("div", {
                        className: "pz-error__message"
                    }, i && r.createElement("i", {
                        className: Za()("pz-error__icon", i)
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
            Du.propTypes = {
                error: Ai().shape({
                    status: Ai().number,
                    stack: Ai().string
                }).isRequired,
                navigationLinks: Ai().shape({
                    login: Ai().string,
                    subscribe: Ai().shape({})
                }),
                liraAsset: Ai().string,
                subscriptionCampaign: Ai().string,
                iconError: Ai().string,
                iconSubscribe: Ai().string,
                userType: Ai().shape({
                    isLoggedIn: Ai().bool,
                    entitlement: Ai().string
                }),
                documentTitle: Ai().string
            },
            Du.defaultProps = {
                liraAsset: "puzzle-paywall",
                subscriptionCampaign: "default"
            };
            var Bu = Du;
            const zu = (e, t) => {
                e && e.classList.add(t)
            }
              , Mu = (e, t) => {
                e && e.classList.remove(t)
            }
              , Au = e => document.getElementsByClassName(e)[0]
              , Ru = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "xwd__hide-when-no-data";
                return (0,
                r.useEffect)(( () => {
                    const t = Au("pz-game-title-bar")
                      , n = Au("pz-game-toolbar");
                    return zu(t, e),
                    zu(n, e),
                    () => {
                        Mu(t, e),
                        Mu(n, e)
                    }
                }
                ), [])
            };
            function Gu(e) {
                let {error: t, userType: n} = e;
                return Ru(),
                r.createElement(Bu, {
                    error: t,
                    navigationLinks: window.navigationLinks,
                    userType: n
                })
            }
            function Uu() {
                var e;
                Ru();
                const t = "mini" === (null === (e = window.gameData) || void 0 === e ? void 0 : e.stream)
                  , [n,a] = r.useState(!1)
                  , [o,i] = r.useState(10);
                (function(e, t) {
                    const n = (0,
                    r.useRef)(e);
                    (0,
                    r.useLayoutEffect)(( () => {
                        n.current = e
                    }
                    ), [e]),
                    (0,
                    r.useEffect)(( () => {
                        if (!t && 0 !== t)
                            return;
                        const e = setTimeout(( () => n.current()), t);
                        return () => clearTimeout(e)
                    }
                    ), [t])
                }
                )(( () => a(!0)), 300),
                function(e, t) {
                    const n = (0,
                    r.useRef)(e);
                    (0,
                    r.useLayoutEffect)(( () => {
                        n.current = e
                    }
                    ), [e]),
                    (0,
                    r.useEffect)(( () => {
                        if (!t && 0 !== t)
                            return;
                        const e = setInterval(( () => n.current()), t);
                        return () => clearInterval(e)
                    }
                    ), [t])
                }(( () => {
                    o < 100 && Math.random() < 1 / 6 && i(o + 15 * Math.random())
                }
                ), n ? 30 : null);
                const s = r.createElement("div", {
                    className: "xwd--loading-bar"
                }, r.createElement("div", {
                    className: "xwd--loading-bar__fill",
                    style: {
                        right: "".concat(Math.max(100 - o, 0), "%")
                    }
                }));
                return r.createElement("div", {
                    className: Za()("xwd__loading", {
                        mini: t
                    })
                }, n && s)
            }
            var Hu = () => {
                var e;
                const t = (0,
                r.useRef)(null)
                  , {userType: n, hasLoaded: a, shortzHasLoaded: i} = (0,
                eo.aF)()
                  , s = (0,
                o.v9)(Oe)
                  , l = (0,
                o.v9)(Ho)
                  , c = (0,
                o.v9)(Wo)
                  , u = (0,
                o.v9)(kn)
                  , d = (0,
                o.v9)(ao)
                  , m = (0,
                o.v9)(_o)
                  , p = (0,
                o.v9)(ye)
                  , f = (0,
                o.v9)(At)
                  , b = (0,
                o.v9)(Ce)
                  , g = (0,
                o.v9)(we)
                  , v = (0,
                o.v9)(ae)
                  , y = (0,
                o.v9)(oe)
                  , w = (0,
                o.v9)(Le)
                  , _ = (0,
                o.v9)(Oo)
                  , [E,O] = (0,
                r.useState)(null)
                  , S = (0,
                o.I0)()
                  , {reportExposure: k} = (0,
                to.Z)()
                  , {isWeb: C, isMobileWeb: P} = (0,
                Ba.vB)()
                  , x = "mini" === (null === (e = window.gameData) || void 0 === e ? void 0 : e.stream)
                  , j = x ? Xa.config : Ja.config
                  , {unit: N} = (0,
                Ka.useUnit)(j)
                  , L = (0,
                r.useCallback)((e => {
                    const {action: t, payload: n} = (e => {
                        let t, n, {key: r, shiftKey: a} = e;
                        switch (r) {
                        case "Escape":
                            t = a ? Mo : So;
                            break;
                        case "Insert":
                            t = So;
                            break;
                        case "Tab":
                        case "Enter":
                        case "NumpadEnter":
                            t = U,
                            n = a ? "PreviousClue" : "NextClue";
                            break;
                        case " ":
                            t = Do;
                            break;
                        case "End":
                            t = U,
                            n = "ClueEnd";
                            break;
                        case "Home":
                            t = U,
                            n = "ClueStart";
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "ArrowUp":
                        case "ArrowDown":
                            t = U,
                            n = a ? "Shift".concat(r) : r;
                            break;
                        case "Backspace":
                            t = zo;
                            break;
                        case "Delete":
                            t = Bo,
                            n = "Cell";
                            break;
                        default:
                            return {}
                        }
                        return {
                            action: t,
                            payload: n
                        }
                    }
                    )(e);
                    t && (S(t(n)),
                    e.preventDefault(),
                    e.stopPropagation())
                }
                ), [])
                  , T = (0,
                r.useCallback)((e => {
                    const {action: t, payload: n, shiftKey: r} = (e => {
                        const {key: t, which: n, shiftKey: r} = e;
                        return (e => {
                            let {altKey: t, ctrlKey: n, metaKey: r} = e;
                            return t || n || r
                        }
                        )(e) ? {} : (e.preventDefault(),
                        {
                            action: jo,
                            payload: Ao(t, n),
                            shiftKey: r
                        })
                    }
                    )(e);
                    t && n && S(t(n, r))
                }
                ), []);
                return (0,
                Qa.lP)(N.refetch),
                (0,
                r.useEffect)(( () => {
                    x ? (k("OMA_ENDSCREENACTIONS_MINI"),
                    (C || P) && k("GAMES_endScreenMitigation_0425")) : k("OMA_ENDSCREENACTIONS_DAILY")
                }
                )),
                (0,
                r.useEffect)(( () => {
                    a && i && f && p && (S((e => ({
                        type: Qt,
                        payload: e
                    }))(n)),
                    y || S({
                        type: en,
                        payload: !0
                    }))
                }
                ), [a, p, f, p, i]),
                (0,
                r.useEffect)(( () => {
                    !1 === v && O({
                        status: 403
                    }),
                    g && O(g)
                }
                ), [v, g]),
                (0,
                r.useEffect)(( () => {
                    a && p && (S(( (e, t) => n => {
                        const r = e ? Wt : Ft
                          , a = t.regiId || "anon";
                        return Wn("".concat(a)).then((e => {
                            const t = Go(Go({}, r), e ? e.settings : {});
                            n({
                                type: Vt,
                                payload: t
                            })
                        }
                        )).catch((e => {
                            dn.error(e),
                            n({
                                type: Vt,
                                payload: r
                            })
                        }
                        ))
                    }
                    )($a.tq, n)),
                    S((e => t => {
                        Wn("".concat(e.regiId)).then((e => {
                            t({
                                type: Kt,
                                payload: e && e.printPrefs || qt
                            })
                        }
                        )).catch((e => {
                            dn.error(e),
                            t({
                                type: Kt,
                                payload: qt
                            })
                        }
                        ))
                    }
                    )(n)),
                    S(Io(n)))
                }
                ), [a, p, b]),
                (0,
                r.useEffect)(( () => (window.scrollTo(0, 0),
                () => window.scrollTo(0, 0))), []),
                (0,
                r.useEffect)(( () => {
                    (e => {
                        let {isReady: t, modalIsOpen: n, inRebusMode: r, ref: a} = e;
                        const o = t && !(n || r);
                        if (a && (a.className = Za()("xwd__franklin", {
                            xwd__focused: o
                        })),
                        o) {
                            const e = window.pageXOffset
                              , t = window.pageYOffset;
                            a && a.focus(),
                            window.scrollTo(e, t)
                        }
                    }
                    )({
                        isReady: l,
                        modalIsOpen: d,
                        inRebusMode: m,
                        ref: t.current
                    })
                }
                ), [l, u, d, m]),
                (0,
                r.useEffect)(( () => {
                    l || d || S(pt(ho.Start))
                }
                ), [l, d, S]),
                (0,
                r.useEffect)(( () => {
                    p && (document.title = w)
                }
                ), [p, w]),
                y ? E ? r.createElement(Gu, {
                    error: E,
                    userType: n
                }) : r.createElement("main", {
                    tabIndex: 0,
                    ref: t,
                    onKeyDown: e => {
                        d || L(e)
                    }
                    ,
                    onKeyPress: e => {
                        d || T(e)
                    }
                    ,
                    onClick: () => {
                        _ && S(xt(null))
                    }
                }, r.createElement(Nu, {
                    clueLists: s,
                    doEscape: c,
                    puzzleEscaped: () => S({
                        type: h,
                        payload: !1
                    }),
                    inRebusMode: m,
                    isMobile: $a.tq
                })) : r.createElement(Uu, null)
            }
            ;
            try {
                ( () => {
                    const e = /(localforage\/)?([0-9]|anon)+@[0-9]+$/;
                    zn().keys().then((t => {
                        t.forEach((t => {
                            t.match(e) && Rn(t)
                        }
                        ))
                    }
                    ))
                }
                )()
            } catch (e) {}
            const Wu = document.getElementById("pz-game-root");
            ( () => {
                if ("ios" === window.newsreaderAppPlatform) {
                    var e, t;
                    const n = null === (e = document.querySelector('meta[name="viewport"]')) || void 0 === e ? void 0 : e.getAttribute("content")
                      , r = "".concat(n, ", viewport-fit=cover, maximum-scale=1, user-scalable=no");
                    null === (t = document.querySelector('meta[name="viewport"]')) || void 0 === t || t.setAttribute("content", r)
                }
            }
            )();
            const Fu = function(e) {
                let {filename: t, stream: n} = e;
                const r = [vr, br, ct, Dn, zt, an, Ya]
                  , a = (0,
                m.configureStore)({
                    reducer: oa,
                    middleware: e => e().concat(r)
                });
                return a.dispatch(Da(t, n)),
                a.dispatch(( (e, t) => {
                    var n;
                    const r = At(t())
                      , a = !!window.newsreaderAppPlatform
                      , o = "mini" === (null === (n = window.gameData) || void 0 === n ? void 0 : n.stream);
                    if (r || a || o)
                        return e($r(0));
                    Ga().then((t => {
                        t.isOffline ? e($r(0)) : e({
                            type: Jr,
                            payload: {
                                meterResponse: t
                            }
                        })
                    }
                    )).catch((t => {
                        console.error(t),
                        e($r(t.status))
                    }
                    ))
                }
                )),
                a
            }((0,
            s.kw)())
              , qu = (0,
            l.ND)();
            function Yu() {
                var e, t, n;
                const a = "mini" === (null === (e = window.gameData) || void 0 === e ? void 0 : e.stream) ? "gamesMiniCrossword" : "gamesDailyCrossword";
                return r.createElement(i.GamesMessagingContextProvider, {
                    client: a,
                    env: s.OB.name,
                    pageViewID: null === (t = window.nyt_et) || void 0 === t || null === (n = t.get_pageview_id) || void 0 === n ? void 0 : n.call(t),
                    performanceMeasureCallback: () => {}
                    ,
                    appType: s.OB.samizdat.appType,
                    appVersion: s.OB.samizdat.appVersion,
                    samizdatToken: s.OB.samizdat.token,
                    abra: window.abra,
                    sentry: {
                        captureException: () => {}
                        ,
                        withScope: () => {}
                    },
                    gamesSourceApp: qu
                }, r.createElement(Hu, null), r.createElement(u.Z, null))
            }
            const Vu = () => r.createElement(r.Fragment, null, r.createElement(c.Z, null), r.createElement(d.E, null, r.createElement(Ms, null, r.createElement(o.zt, {
                store: Fu
            }, r.createElement(Yu, null)))));
            (0,
            a.s)(Wu).render(r.createElement(Vu, null))
        },
        86128: function(e, t, n) {
            "use strict";
            n.d(t, {
                Af: function() {
                    return o
                },
                Hu: function() {
                    return a
                },
                I3: function() {
                    return r
                }
            });
            const r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return 0 === e.indexOf("nytimes://") || 0 === e.indexOf("nytxwd://")
            }
              , a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                if (!e)
                    return null;
                const n = t.createElement("a");
                n.href = e,
                n.click()
            }
              , o = (e, t) => {
                t({
                    isLoggedIn: e.isUserLoggedIn,
                    hasXwd: e.isSubscribed,
                    regiId: e.regiID,
                    isFreeTrial: e.isFreeTrial
                })
            }
        },
        64576: function(e, t, n) {
            "use strict";
            n.d(t, {
                qs: function() {
                    return d
                },
                ux: function() {
                    return m
                },
                zb: function() {
                    return p
                }
            });
            var r = n(65489)
              , a = n(83910)
              , o = n(31270)
              , i = n(89200);
            function s(e, t) {
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
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const c = {
                mockMode: "off",
                badges: {},
                shelf: {}
            }
              , u = "badges-alpha-mock"
              , d = () => {
                if ("prod" === r.OB.name)
                    return null;
                const e = (0,
                a.fp)(u, c);
                return "off" !== e.mockMode ? e : null
            }
              , m = (e, t, n) => "off" === e.mockMode ? [] : ("auto" === e.mockMode && t && (e.badges = (0,
            o.fT)(t, e),
            (e => {
                (0,
                a.rl)(u, e)
            }
            )(e)),
            Object.keys(e.badges).filter((t => {
                const {earned_at: r, notify: a} = e.badges[t]
                  , {games: i} = o.D$[t];
                return i.includes(n) && r && a && r[r.length - 1] > 0
            }
            )).map((t => {
                const {badge_type: n, games: r, levels: a} = o.D$[t]
                  , {earned_at: s=[], progress: l=0} = e.badges[t]
                  , c = s.length;
                return {
                    id: t,
                    badge_type: n,
                    games: r,
                    levels: a,
                    earned_at: s,
                    progress: l,
                    earned_level: "holiday" === n ? 2025 : a && a[c - 1],
                    puzzle_id: i._,
                    earned: !0
                }
            }
            )))
              , p = (e, t, n) => {
                const r = m(e, t, n).filter((t => !!e.shelf[t.id]))
                  , a = ( (e, t) => "off" === e.mockMode ? [] : Object.keys(e.shelf).filter((n => {
                    const {earned_at: r, notify: a} = e.shelf[n]
                      , {games: i} = o.D$[n];
                    return i.includes(t) && 0 === (null == r ? void 0 : r.length) && !a
                }
                )).map((t => {
                    const {badge_type: n, games: r, levels: a} = o.D$[t]
                      , {progress: s=0} = e.shelf[t];
                    return {
                        id: t,
                        badge_type: n,
                        games: r,
                        levels: a,
                        progress: s,
                        earned_at: [0],
                        puzzle_id: i._,
                        earned_level: s,
                        notify: !1
                    }
                }
                )))(e, n).filter((e => !r.some((t => t.id === e.id))));
                return [...r, ...a].map((t => {
                    var n;
                    return l(l({}, t), {}, {
                        earned_at: t.earned_at,
                        earned_years: (null === (n = e.badges[t.id]) || void 0 === n ? void 0 : n.earnedYears) || [],
                        last_earned_level: t.earned_level
                    })
                }
                ))
            }
        },
        36797: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return a
                }
            });
            var r = n(89526);
            const a = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)';
            t.Z = (e, t, n) => {
                (0,
                r.useEffect)(( () => {
                    const n = t.current;
                    if (e && n) {
                        const e = n.querySelectorAll(a);
                        if (!e)
                            return;
                        const t = e[0]
                          , r = e[e.length - 1]
                          , o = e => {
                            "Tab" === e.key && (e.shiftKey && document.activeElement === t ? (e.preventDefault(),
                            r.focus()) : e.shiftKey || document.activeElement !== r || (e.preventDefault(),
                            t.focus()))
                        }
                        ;
                        return n.addEventListener("keydown", o),
                        () => {
                            n.removeEventListener("keydown", o)
                        }
                    }
                }
                ), [e, t, n])
            }
        },
        53818: function(e, t, n) {
            "use strict";
            n.d(t, {
                oS: function() {
                    return r
                }
            });
            const r = e => {
                const t = null != e ? new Date(e) : new Date;
                t.setDate(t.getDate() - 1);
                let n = "".concat(t.getMonth() + 1)
                  , r = "".concat(t.getDate());
                const a = t.getFullYear();
                return n.length < 2 && (n = "0".concat(n)),
                r.length < 2 && (r = "0".concat(r)),
                [a, n, r].join("/")
            }
        },
        57256: function(e, t, n) {
            "use strict";
            var r = n(89526)
              , a = n(29684);
            t.Z = () => (0,
            r.useContext)(a.Z)
        },
        49369: function(e, t, n) {
            "use strict";
            n.d(t, {
                WN: function() {
                    return s
                },
                qy: function() {
                    return l
                }
            });
            var r = n(67522)
              , a = n(57256)
              , o = n(14237)
              , i = n(34458);
            const s = () => {
                const e = ( () => {
                    const {getVariant: e} = (0,
                    a.Z)()
                      , t = "1_Create"
                      , n = e("GAMES_createWordle_sub_0425")
                      , r = e("GAMES_createWordle_newSub_0425");
                    return n === t || r === t
                }
                )()
                  , {userType: {hasXwd: t}} = (0,
                o.aF)()
                  , {isWeb: n} = (0,
                r.vB)();
                return !(!n || !t) && e
            }
              , l = function() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                const {hasAbraLoadedWithUser: t} = (0,
                a.Z)()
                  , {isWeb: n} = (0,
                r.vB)()
                  , o = e && t && n;
                (0,
                i.qW)("createWordleSub", o),
                (0,
                i.qW)("createWordleNewSub", o)
            }
        },
        89064: function(e, t, n) {
            "use strict";
            var r = n(89526)
              , a = n(34458);
            t.Z = e => (0,
            r.useContext)(a.pG)[e]
        },
        88861: function(e, t, n) {
            "use strict";
            n.d(t, {
                nh: function() {
                    return a
                }
            });
            var r = n(67522);
            const a = () => {
                const {isNewsreaderApp: e, isGamesApp: t, meetsMinimumVersion: n} = (0,
                r.vB)();
                return !e && (!t || n("5.15"))
            }
        },
        65489: function(e, t, n) {
            "use strict";
            n.d(t, {
                $A: function() {
                    return s.$A
                },
                $g: function() {
                    return c.$g
                },
                Be: function() {
                    return w.B
                },
                Fg: function() {
                    return m.Fg
                },
                LW: function() {
                    return c.LW
                },
                Mk: function() {
                    return s.Mk
                },
                NT: function() {
                    return a.NT
                },
                OB: function() {
                    return a.OB
                },
                T0: function() {
                    return a.T0
                },
                Tv: function() {
                    return m.Tv
                },
                Xy: function() {
                    return y.Xy
                },
                abra: function() {
                    return p.Fi
                },
                ec: function() {
                    return s.ec
                },
                hX: function() {
                    return c.hX
                },
                iU: function() {
                    return a.iU
                },
                j: function() {
                    return c.j
                },
                j0: function() {
                    return a.j0
                },
                kh: function() {
                    return a.kh
                },
                kw: function() {
                    return _
                },
                lY: function() {
                    return m.lY
                },
                ob: function() {
                    return c.ob
                },
                vl: function() {
                    return a.vl
                },
                wC: function() {
                    return i.wC
                },
                xD: function() {
                    return s.xD
                }
            });
            var r = n(74395)
              , a = n(22042)
              , o = n(96303)
              , i = n(31069)
              , s = n(73649)
              , l = n(67719)
              , c = n(41586)
              , u = n(48198)
              , d = n(59234)
              , m = n(81239)
              , p = n(42714)
              , f = n(6756)
              , b = n(49808)
              , g = n(72811)
              , v = n(73972)
              , h = n(53212)
              , y = n(88093)
              , w = n(93251);
            (0,
            c.U9)(),
            (0,
            m.ZP)(u.win.sentryConfig),
            (0,
            g.Z)(u.win.datadogRumConfig),
            (0,
            r.Z)(),
            p.Fi.init(),
            "connections" === u.win.pageName && "prod" !== u.win.env.name && (0,
            h.Z)();
            try {
                localStorage.removeItem("pz-device"),
                localStorage.removeItem("pz-device-check")
            } catch (e) {}
            if ((0,
            s.t6)(),
            (0,
            l.q)(),
            a.G7)
                u.win.dataLayer = [];
            else {
                const e = (0,
                o.pg)();
                e || ((0,
                o.He)(),
                (0,
                o.I5)(p.Fi.getTests()),
                (0,
                f.Z)((0,
                o.Qx)()),
                (0,
                v.YU)(),
                (0,
                v.J5)()),
                u.win.addEventListener("load", ( () => {
                    (0,
                    i.IX)(),
                    (0,
                    d.Z)(),
                    e || (0,
                    o.YY)((0,
                    b.Z)(u.win), p.Fi.getTests()),
                    (0,
                    c.Sv)()
                }
                ))
            }
            const _ = () => u.win.gameData
        },
        65492: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fg: function() {
                    return i
                },
                Tv: function() {
                    return s
                },
                lY: function() {
                    return o
                }
            });
            var r = n(22272)
              , a = n(22042);
            const o = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e && e.message && r.$e((n => {
                    Object.keys(t).forEach((e => {
                        n.setTag(e, t[e])
                    }
                    )),
                    r.Tb(e)
                }
                ))
            }
              , i = (e, t) => {
                e && t && r.v(e, t)
            }
              , s = e => {
                let t = "anon";
                e.isLoggedIn && (t = "regi"),
                e.hasXwd ? (t = "sub",
                e.isLoggedIn || (t = "anon-sub")) : e.isFreeTrial && (t = "free-trial"),
                r.YA("userType", t),
                e.regiId && r.YA("regiId", e.regiId),
                r.av({
                    id: a.kh || window.btoa(Math.random().toString().substring(2))
                })
            }
        },
        41586: function(e, t, n) {
            "use strict";
            n.d(t, {
                $g: function() {
                    return g
                },
                LW: function() {
                    return _
                },
                Sv: function() {
                    return y
                },
                U9: function() {
                    return O
                },
                hX: function() {
                    return v
                },
                j: function() {
                    return b
                },
                ob: function() {
                    return w
                }
            });
            var r = n(26633)
              , a = n(48198)
              , o = n(10431)
              , i = n(22042)
              , s = n(12058)
              , l = n(93251);
            function c(e, t) {
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
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const d = "dataLayer"
              , m = "games-crosswords";
            a.win[d] = a.win[d] || [],
            window.isHybridWebView || a.win[d].push({
                event: "gtm.js",
                "gtm.start": (0,
                i.zO)()
            });
            const p = (0,
            o.R2)("link[rel=canonical]")
              , f = p ? p.href : a.JU.location.href
              , b = (e, t) => {
                if (void 0 !== typeof window)
                    if (window.isHybridWebView && window.NativeBridge) {
                        const n = "moduleInteraction" === e ? "interaction" : e;
                        if ("heartbeat" === n)
                            return;
                        window.NativeBridge.sendAnalytic(n, t)
                    } else
                        a.win[d].push(u({
                            event: e
                        }, t)),
                        (e => {
                            var t, n;
                            if (!i.l1)
                                return null;
                            switch (e) {
                            case "impression":
                            case "moduleInteraction":
                                null === (t = (n = window).nyt_et) || void 0 === t || t.call(n, {
                                    subject: "page_update",
                                    fastly_headers: {
                                        b2b: "delta"
                                    }
                                })
                            }
                        }
                        )(e)
            }
            ;
            window.foundationTrack = b;
            const g = (e, t, n, r, a, o, i) => {
                const s = {
                    module: u({
                        name: e,
                        context: t,
                        region: i || "",
                        element: {
                            name: n || "",
                            label: "string" == typeof r ? r : JSON.stringify(r)
                        }
                    }, a && {
                        label: a
                    }),
                    eventData: {
                        pageType: "game",
                        type: o ? "ob_click" : "click",
                        trigger: "module",
                        status: ""
                    }
                };
                b("moduleInteraction", s)
            }
              , v = (e, t, n, r) => {
                b("impression", {
                    module: {
                        name: e,
                        context: r,
                        region: t || "",
                        label: n
                    }
                })
            }
              , h = (0,
            i.y5)(( () => {
                if (window.isHybridWebView)
                    return null;
                const e = (0,
                i.B2)({
                    sourceApp: m,
                    referrer: a.JU.referrer,
                    assetUrl: f,
                    caller_id: m
                })
                  , t = "".concat(i.OB.tagx, "/svc/nyt/data-layer").concat(e);
                return l.B.get(t)
            }
            ))
              , y = () => {
                h.initialize();
                const e = e => {
                    e && b("userDataReady", e),
                    b("pageDataReady", {
                        application: {
                            name: m,
                            environment: i.OB.name
                        },
                        asset: {
                            url: f
                        },
                        pageview: {
                            id: s.Z.current
                        }
                    }),
                    ( () => {
                        const e = (0,
                        i.zO)();
                        setInterval(( () => {
                            a.JU.hasFocus() && b("heartbeat", {
                                pageview: {
                                    heartbeat: {
                                        timeSincePageDataReady: (0,
                                        i.zO)() - e,
                                        heartbeatInterval: 5e3
                                    }
                                }
                            })
                        }
                        ), 5e3)
                    }
                    )()
                }
                ;
                h.get().then(e).catch(( () => e()))
            }
              , w = e => {
                let {name: t, label: n, context: r, element: a=null, useBeacon: o=!1, medium: i=null, source: s=null, region: l=null, moduleName: c=null, moduleLabel: u=null} = e;
                "undefined" != typeof window && b("moduleInteraction", {
                    eventData: {
                        pagetype: "game",
                        trigger: "module",
                        type: o ? "ob_click" : "click"
                    },
                    module: {
                        type: "click",
                        element: a || {
                            name: t,
                            label: n
                        },
                        context: r,
                        label: u,
                        medium: i,
                        source: s,
                        region: l,
                        name: c
                    }
                })
            }
              , _ = e => {
                let {context: t, element: n, name: r, label: a, region: o, url: i, type: s="click", useBeacon: l} = e;
                "undefined" != typeof window && b("moduleInteraction", {
                    eventData: {
                        pagetype: "game",
                        trigger: "module",
                        type: l ? "ob_click" : "click"
                    },
                    module: {
                        type: s,
                        element: n,
                        context: t,
                        name: r,
                        label: a,
                        region: o,
                        url: i
                    }
                })
            }
              , E = e => {
                let {name: t, delta: n, id: r} = e;
                const a = {
                    eventAction: "Web Vitals",
                    eventLabel: r,
                    pageview: {
                        performance: {
                            [t.toLowerCase()]: Math.round("CLS" === t ? 1e3 * n : n)
                        }
                    }
                };
                b("performance", a)
            }
              , O = () => {
                (0,
                r.mw)(E),
                (0,
                r.Fu)(E),
                (0,
                r.NO)(E),
                (0,
                r.Yn)(E)
            }
        },
        22042: function(e, t, n) {
            "use strict";
            n.d(t, {
                B2: function() {
                    return f
                },
                G7: function() {
                    return v
                },
                NT: function() {
                    return y
                },
                OB: function() {
                    return o
                },
                T0: function() {
                    return m
                },
                iU: function() {
                    return u
                },
                j0: function() {
                    return a
                },
                kh: function() {
                    return g
                },
                l1: function() {
                    return h
                },
                vl: function() {
                    return w
                },
                y5: function() {
                    return b
                },
                zO: function() {
                    return p
                }
            });
            var r = n(48198);
            const a = () => {
                var e;
                return ((null === (e = window) || void 0 === e || null === (e = e.location) || void 0 === e ? void 0 : e.pathname) || "").startsWith("/christmas_word_puzzles/nyt_games/leaderboard/game/mini") && (r.win.pageName = "mini-page"),
                r.win.pageName || ""
            }
              , {env: o} = r.win
              , {featureFlags: i={}} = r.win
              , {version: s} = o
              , l = "pz-version"
              , c = s !== r.WL.getItem(l);
            try {
                r.WL.setItem(l, s)
            } catch (e) {
                console.error(e.error)
            }
            const u = e => "js-".concat(e)
              , d = ["nytimes://login", "nytimes://createAccount"]
              , m = (e, t) => d.some((t => e.startsWith(t))) ? e : "".concat(e).concat(t)
              , p = () => Date.now()
              , f = function(e) {
                const t = [];
                return Object.keys(e).forEach((n => {
                    t.push("".concat((0,
                    r.uL)(n), "=").concat((0,
                    r.uL)(e[n])))
                }
                )),
                "?".concat(t.join("&"))
            }
              , b = (e, t, n, r) => {
                const a = []
                  , o = "getItem"
                  , i = "setItem"
                  , s = "removeItem"
                  , l = "".concat(n, "-check");
                let u, d, m;
                t && n && c && (t[s](l),
                t[s](n));
                const p = e => {
                    for (; a.length; ) {
                        var t;
                        null === (t = a.shift()) || void 0 === t || t[e ? 1 : 0](e || u)
                    }
                }
                ;
                return {
                    get() {
                        return d ? Promise.resolve(u) : new Promise(( (e, t) => a.push([e, t])))
                    },
                    initialize() {
                        return t && n && t[o](l) === r && (m = t[o](n)),
                        Promise.resolve(m && JSON.parse(m) || e()).then((e => {
                            if (d = !0,
                            u = e,
                            t && r && n && !m)
                                try {
                                    t[i](l, r),
                                    t[i](n, JSON.stringify(u))
                                } catch (e) {
                                    console.error(e.error)
                                }
                            p()
                        }
                        )).catch(p)
                    }
                }
            }
              , g = (/nyt-a=([^;]+)/.exec(r.JU.cookie || "") || [])[1]
              , v = (/NYT-NO-ADS=([^;]+)/.exec(r.JU.cookie || "") || [])[1]
              , h = (/nyt-delta=([^;]+)/.exec(r.JU.cookie || "") || [])[1]
              , y = (/nyt-geo=([^;]+)/.exec(r.JU.cookie || "") || [])[1]
              , w = ((/nyt-gv=([^;]+)/.exec(r.JU.cookie || "") || [])[1],
            (e, t) => {
                const n = t || r.win.location.href
                  , a = e.replace(/[[\]]/g, "\\$&")
                  , o = new RegExp("[?&]".concat(a, "(=([^&#]*)|&|#|$)")).exec(n);
                return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : "" : null
            }
            )
        },
        93251: function(e, t, n) {
            "use strict";
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
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            n.d(t, {
                B: function() {
                    return l
                }
            });
            const o = "json"
              , i = {
                withCredentials: !0,
                responseType: o
            }
              , s = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const r = a(a({}, i), n)
                  , {isSync: s=!1} = r;
                return new Promise(( (n, a) => {
                    var i;
                    if (!(null !== (i = window) && void 0 !== i && i.isHybridWebView || navigator.onLine))
                        return a(new Error("No internet"));
                    const l = new XMLHttpRequest;
                    // console.log("OPEN", e, t)
                    if (t=="https://www.nytimes.com/svc/christmas_word_puzzles/nyt_games/leaderboard/v6/puzzle/mini.json") {
                        t = "/christmas_word_puzzles/nyt_games/mini.json";
                    }
                    console.log("OPEN", t)
                    if (l.open(e, t, !s),
                    l.withCredentials = false, //!!r.withCredentials,
                    s || (l.timeout = 5e3),
                    l.ontimeout = () => {
                        a(new Error("".concat(e, " request to ").concat(t, " timed out")))
                    }
                    ,
                    l.setRequestHeader("Content-type", r.data ? "application/json" : "application/x-www-form-urlencoded"),
                    r.headers) {
                        const {headers: e} = r;
                        Object.keys(e).forEach((t => {
                            l.setRequestHeader(t, e[t])
                        }
                        ))
                    }
                    l.onload = () => {
                        try {
                            const e = l.responseText;
                            if (e && r.responseType === o) {
                                const t = JSON.parse(e);
                                r.withStatus && (t.status = l.status),
                                n(t)
                            } else
                                n(e)
                        } catch (e) {
                            a(new Error("Something went wrong"))
                        }
                    }
                    ,
                    l.addEventListener("error", (e => a((e => {
                        console.log("ERRROR", e)
                        if (e.status < 400 && e.status > 0)
                            return;
                        const t = new Error(0 === e.status ? "Network error" : "bad req");
                        return t.status = e.status,
                        t
                    }
                    )({
                        status: l.status
                    })))),
                    l.send(r.data && JSON.stringify(r.data))
                }
                ))
            }
              , l = {
                get: (e, t) => s("GET", e, t),
                post: (e, t, n) => s("POST", e, a(a({}, n), {}, {
                    data: t
                })),
                put: (e, t, n) => s("PUT", e, a(a({}, n), {}, {
                    data: t
                })),
                delete: (e, t) => s("DELETE", e, t),
                request: s
            }
        },
        85229: function(e, t, n) {
            "use strict";
            n.d(t, {
                AU: function() {
                    return i
                },
                BF: function() {
                    return m
                },
                JU: function() {
                    return d
                },
                Jg: function() {
                    return p
                },
                kx: function() {
                    return c
                },
                tF: function() {
                    return u
                }
            });
            var r = n(54988)
              , a = n(65308)
              , o = n(11620);
            function i(e) {
                return "sub" === e || "cr" === e
            }
            function s(e) {
                if (e && e.search) {
                    const t = e.search("date-override");
                    if (t > -1) {
                        const n = e.substring(t);
                        return new URLSearchParams(n).get("date-override")
                    }
                    const n = e.search("now")
                      , r = e.substring(n);
                    return new URLSearchParams(r).get("now")
                }
            }
            function l(e) {
                const t = s(e);
                return t ? new Date(t).getTime() : (new Date).getTime()
            }
            function c(e) {
                const t = l(e);
                return t >= r.ne && t < r.cr
            }
            const u = e => {
                const t = l(e);
                return t >= a.mQ && t < a.IQ
            }
              , d = e => {
                const t = l(e);
                return t >= o.sL && t < o.t7
            }
            ;
            function m(e) {
                const t = s(e)
                  , n = t ? new Date(t).getTime() : (new Date).getTime()
                  , r = a.C1.find((e => {
                    let {startDate: t} = e;
                    return n >= t && n < a.IQ
                }
                ));
                return r ? r.copy : ""
            }
            function p() {
                const e = s(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href)
                  , t = e ? new Date(e).getTime() : (new Date).getTime()
                  , n = r.sN.urgency.find((e => {
                    let {startDate: n} = e;
                    return t >= n && t < r.cr
                }
                ));
                return (null == n ? void 0 : n.copy) || ""
            }
        },
        88595: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(19164);
            const a = 21;
            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const {isGamesSaleActive: t, acqMessage: n, shortMessage: o, getUrgencyMessage: i} = (0,
                r.Z)();
                return {
                    isGamesSaleActive: t,
                    getButtonText: () => {
                        let r = t ? n : "Subscribe";
                        return t && e && (r.length > a && (r = o),
                        r.length > a && console.warn("Subscribe button messaging for games sale exceeds character limit of ".concat(a, " characters. Please modify the length."))),
                        r
                    }
                    ,
                    getUrgencyMessage: i
                }
            }
        },
        19406: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return a
                },
                Q: function() {
                    return r
                }
            });
            let r = function(e) {
                return e.OPEN = "OPEN",
                e.METERING = "METERING",
                e.BUCKET_LIMIT = "BUCKET_LIMIT",
                e.METER_LIMIT = "METER_LIMIT",
                e.FREE_CLICK = "FREE_CLICK",
                e.COUNTED = "COUNTED",
                e.FB_TOP = "FB_TOP",
                e.UNLOCKED_ARTICLE_CODE = "UNLOCKED_ARTICLE_CODE",
                e.WHITELISTED = "WHITELISTED",
                e.SUBSCRIBER = "SUBSCRIBER",
                e.IP = "IP",
                e.REFERRER = "REFERRER",
                e.FREETIME = "FREETIME",
                e
            }({})
              , a = function(e) {
                return e.WEB = "Games-web",
                e.ANDROID_NEWS = "Games-Android-NR",
                e.ANDROID_XWD = "Games-Android",
                e.IOS_NEWS = "Games-iOS-NR",
                e.IOS_XWD = "Games-iOS",
                e
            }({})
        },
        46098: function(e, t, n) {
            "use strict";
            n.d(t, {
                CL: function() {
                    return c
                },
                Or: function() {
                    return m
                },
                VM: function() {
                    return u
                },
                wv: function() {
                    return d
                }
            });
            var r = n(65489)
              , a = n(64576);
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
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function s(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i)
                      , l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(r, a)
            }
            function l(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);
                        function i(e) {
                            s(o, r, a, i, l, "next", e)
                        }
                        function l(e) {
                            s(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
            }
            const c = function() {
                var e = l((function*(e, t) {
                    const n = t.join(",")
                      , o = yield r.Be.get("".concat(r.OB.moogle, "/svc/christmas_word_puzzles/nyt_games/state/").concat(e, "/latests?puzzle_ids=").concat(n));
                    if ("forbidden" === o.error)
                        throw new Error("not authenticated");
                    if (!o.states)
                        throw new Error("fetchMultiStates: ".concat(o.error || "Invalid response"));
                    const s = (0,
                    a.qs)();
                    if (s && "off" !== s.mockMode) {
                        const t = (0,
                        a.ux)(s, o.player || null, e)
                          , n = (0,
                        a.zb)(s, o.player || null, e);
                        return i(i({}, o), {}, {
                            earned_badges: t,
                            badges_trophy_shelf: n
                        })
                    }
                    return o
                }
                ));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , u = function() {
                var e = l((function*(e) {
                    const t = yield r.Be.post("".concat(r.OB.moogle, "/svc/christmas_word_puzzles/nyt_games/state"), e, {
                        withStatus: !0,
                        headers: {
                            "x-games-client-time": (new Date).toISOString(),
                            "x-games-aws": (n = e.game,
                            "connections" === n ? "cxn" : "strands" === n ? "strands" : "wordleV2" === n ? "wrd" : "spelling_bee" === n ? "sb" : "")
                        }
                    });
                    var n;
                    if (null != t && t.error)
                        throw new Error(t.error);
                    if (!t || !t.version)
                        throw new Error("missing version in games-state POST response");
                    const o = (0,
                    a.qs)();
                    if (o && "off" !== o.mockMode) {
                        const n = (0,
                        a.ux)(o, t.player || null, e.game)
                          , r = (0,
                        a.zb)(o, t.player || null, e.game);
                        return i(i({}, t), {}, {
                            earned_badges: n,
                            badges_trophy_shelf: r
                        })
                    }
                    return t
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , d = function() {
                var e = l((function*(e) {
                    const t = yield r.Be.get("".concat(r.OB.moogle, "/svc/christmas_word_puzzles/nyt_games/settings/").concat(e));
                    if ("forbidden" === t.error)
                        throw new Error("not authenticated");
                    if (t.user_id)
                        return t;
                    throw new Error("fetchSettings: ".concat(t.error || "Invalid response"))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , m = function() {
                var e = l((function*(e) {
                    const t = yield r.Be.post("".concat(r.OB.moogle, "/svc/christmas_word_puzzles/nyt_games/settings"), e, {
                        withStatus: !0
                    });
                    if (null != t && t.error)
                        throw new Error(t.error);
                    if (201 !== (null == t ? void 0 : t.status))
                        throw new Error("status code ".concat(t.status, " from settings POST"));
                    return t
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        42101: function(e, t, n) {
            "use strict";
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
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
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
                    return l
                },
                X: function() {
                    return i
                },
                eV: function() {
                    return d
                },
                g2: function() {
                    return o
                },
                gQ: function() {
                    return c
                },
                qQ: function() {
                    return u
                },
                wG: function() {
                    return s
                }
            });
            const o = e => "settings" === e
              , i = (e, t) => o(e.selectPuzzleIdOrSettings(t))
              , s = (e, t) => {
                const n = i(e, t)
                  , r = ( (e, t) => {
                    const n = e.selectPuzzleIdOrSettings(t);
                    return e.selectMoogleState(t).getPuzzleProgress.statesByPuzzleId[n] || null
                }
                )(e, t)
                  , o = ( (e, t) => e.selectMoogleState(t).getRemoteSettings.data || null)(e, t);
                return n && null != o && o.settings ? a({
                    timestamp: o.timestamp,
                    schemaVersion: o.schema_version || ""
                }, o.settings) : !n && null != r && r.game_data ? a({
                    timestamp: r.timestamp,
                    schemaVersion: r.schema_version
                }, r.game_data) : null
            }
              , l = (e, t) => e.selectMoogleState(t).regiId
              , c = (e, t) => {
                const {postRequest: n} = e.selectMoogleState(t);
                return Object.keys(n).some((e => n[e].isLoading))
            }
              , u = (e, t) => e.selectMoogleState(t).pendingSaves
              , d = (e, t) => u(e, t).length > 0
              , m = (e, t) => {
                var n;
                const {postRequest: r} = e.selectMoogleState(t);
                return null === (n = r[e.selectPuzzleIdOrSettings(t)]) || void 0 === n ? void 0 : n.isErrorRetry
            }
        },
        69537: function(e, t, n) {
            "use strict";
            n.d(t, {
                I6: function() {
                    return l
                },
                Nw: function() {
                    return c
                }
            });
            var r = n(97281);
            function a(e, t) {
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
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        var r, a, o, i;
                        r = e,
                        a = t,
                        o = n[t],
                        (a = "symbol" == typeof (i = function(e, t) {
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
                        }(a)) ? i : i + "")in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            const i = (e, t) => {
                null == t || t.forEach((t => {
                    const n = e.badges.earned.findIndex((e => e.id === t.id));
                    n > -1 ? e.badges.earned[n] = t : e.badges.earned.push(t)
                }
                ))
            }
              , s = (0,
            r.createSlice)({
                name: "moogle",
                initialState: {
                    regiId: null,
                    getPuzzleProgress: {
                        isLoading: !1,
                        error: !1,
                        errorMessage: null,
                        statesByPuzzleId: {}
                    },
                    getRemoteSettings: {
                        isLoading: !1,
                        error: !1,
                        errorMessage: null,
                        data: null
                    },
                    postRequest: {},
                    pendingSaves: [],
                    player: null,
                    badges: {
                        earned: [],
                        detail: null,
                        seen: {},
                        shelf: []
                    },
                    game: null
                },
                reducers: {
                    setGame: (e, t) => {
                        e.game = t.payload
                    }
                    ,
                    loadMultiStates: e => {
                        e.getPuzzleProgress.isLoading = !0
                    }
                    ,
                    multiStatesSuccess: (e, t) => {
                        const {data: n, regiId: r=null, player: a=null, earnedBadges: s, shelf: l} = t.payload
                          , c = n.reduce(( (e, t) => (e[t.puzzle_id] = t,
                        e)), {});
                        e.regiId = r,
                        e.getPuzzleProgress.isLoading = !1,
                        e.getPuzzleProgress.error = !1,
                        e.getPuzzleProgress.statesByPuzzleId = o(o({}, e.getPuzzleProgress.statesByPuzzleId), c),
                        a && (e.player = a),
                        i(e, s),
                        l && (e.badges.shelf = l)
                    }
                    ,
                    multiStatesError: (e, t) => {
                        e.regiId = null,
                        e.getPuzzleProgress.isLoading = !1,
                        e.getPuzzleProgress.error = !0,
                        e.getPuzzleProgress.errorMessage = t.payload.message
                    }
                    ,
                    loadSettings: e => {
                        e.getRemoteSettings.isLoading = !0
                    }
                    ,
                    settingsSuccess: (e, t) => {
                        const {data: n, regiId: r=null} = t.payload;
                        e.regiId = r,
                        e.getRemoteSettings.isLoading = !1,
                        e.getRemoteSettings.error = !1,
                        e.getRemoteSettings.data = n
                    }
                    ,
                    settingsError: (e, t) => {
                        e.getRemoteSettings.isLoading = !1,
                        e.getRemoteSettings.error = !0,
                        e.getRemoteSettings.errorMessage = t.payload.message
                    }
                    ,
                    loadMooglePost: (e, t) => {
                        const {puzzleId: n} = t.payload;
                        e.postRequest[n] = e.postRequest[n] || {
                            isLoading: !1,
                            error: !1,
                            errorMessage: null,
                            isErrorRetry: !1
                        },
                        e.postRequest[n].isLoading = !0
                    }
                    ,
                    mooglePostSuccess: (e, t) => {
                        const {puzzleId: n, player: r=null, earnedBadges: a, shelf: o} = t.payload;
                        e.postRequest[n] = e.postRequest[n] || {
                            isLoading: !1,
                            error: !1,
                            errorMessage: null,
                            isErrorRetry: !1
                        },
                        e.postRequest[n].isLoading = !1,
                        e.postRequest[n].error = !1,
                        r && (e.player = r),
                        i(e, a),
                        o && (e.badges.shelf = o)
                    }
                    ,
                    mooglePostError: (e, t) => {
                        const {puzzleId: n, message: r} = t.payload;
                        e.postRequest[n] = e.postRequest[n] || {
                            isLoading: !1,
                            error: !1,
                            errorMessage: null,
                            isErrorRetry: !1
                        },
                        e.postRequest[n].isLoading = !1,
                        e.postRequest[n].error = !0,
                        e.postRequest[n].errorMessage = r
                    }
                    ,
                    enqueuePendingSave: (e, t) => {
                        e.pendingSaves.push(t.payload)
                    }
                    ,
                    dequeuePendingSave: e => {
                        e.pendingSaves.shift()
                    }
                    ,
                    setErrorRetry: (e, t) => {
                        const {puzzleId: n, value: r} = t.payload;
                        e.postRequest[n] = e.postRequest[n] || {
                            isLoading: !1,
                            error: !1,
                            errorMessage: null,
                            isErrorRetry: !1
                        },
                        e.postRequest[n].isErrorRetry = r
                    }
                    ,
                    forceSave: (e, t) => {}
                    ,
                    openBadgeDetail: (e, t) => {
                        e.badges.detail = {
                            badge: t.payload.detail,
                            returnMoment: t.payload.returnMoment,
                            isOpeningUnearned: t.payload.isOpeningUnearned
                        }
                    }
                    ,
                    notifyBadges: (e, t) => {
                        const {badgeIds: n, location: r} = t.payload;
                        n.forEach((t => {
                            e.badges.seen[t] = r
                        }
                        ))
                    }
                }
            })
              , {reducer: l, actions: c} = s
        },
        14237: function(e, t, n) {
            "use strict";
            n.d(t, {
                aF: function() {
                    return r.Z
                },
                ns: function() {
                    return a.Z
                }
            }),
            n(89526),
            n(73961),
            n(65489),
            n(43373),
            n(34797),
            n(29954),
            n(89385),
            n(46147);
            var r = n(71687)
              , a = n(40679)
        },
        40679: function(e, t, n) {
            "use strict";
            var r = n(89526)
              , a = n(71687);
            function o() {
                return o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                o.apply(this, arguments)
            }
            t.Z = e => t => {
                const n = (0,
                a.Z)();
                return r.createElement(e, o({
                    user: n
                }, t))
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
        },
        80569: function(e) {
            "use strict";
            e.exports = JSON.parse('{"t3":[{"uniqueId":"cx1","displayName":"Solve with Purple First","descriptionBody":"successfully completing a Connections puzzle after getting the purple category first.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/cx_milestone_purple-first_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/cx_milestone_purple-first_{LEVEL}_unearned.svg","requiresSubscription":false},{"uniqueId":"cx2","displayName":"Perfect Puzzles","descriptionBody":"completing {LEVEL} Connections puzzles without any mistakes.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/cx_milestone_perfect_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/cx_milestone_perfect_{LEVEL}_unearned.svg","requiresSubscription":false},{"uniqueId":"cx3","displayName":"{LEVEL}-day Streak","descriptionBody":"completing {LEVEL} consecutive daily Connections puzzles without losing.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/cx_streak_streak_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/streak_{LEVEL}_unearned.svg","requiresSubscription":false},{"uniqueId":"sb1","displayName":"First Genius","descriptionBody":"reaching the Genius rank in Spelling Bee.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_challenge_genius.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_challenge_genius_unearned.svg","requiresSubscription":true},{"uniqueId":"sb2","displayName":"First Queen Bee","descriptionBody":"reaching the Queen Bee rank in Spelling Bee.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_challenge_queen-bee.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_challenge_queen-bee_unearned.svg","requiresSubscription":true},{"uniqueId":"sb3","displayName":"First Pangram","descriptionBody":"finding a Pangram in Spelling Bee.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_challenge_pangram.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_challenge_pangram_unearned.svg","isEarnableMidGame":true,"requiresSubscription":false},{"uniqueId":"sb4","displayName":"Genius","descriptionBody":"reaching the Genius rank in Spelling Bee {LEVEL} times.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_genius_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_genius_{LEVEL}_unearned.svg","requiresSubscription":true},{"uniqueId":"sb5","displayName":"Queen Bee","descriptionBody":"reaching the Queen Bee rank in Spelling Bee {LEVEL} times.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_queen-bee_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_queen-bee_{LEVEL}_unearned.svg","requiresSubscription":true},{"uniqueId":"sb6","displayName":"Pangrams","descriptionBody":"finding {LEVEL} Pangrams in Spelling Bee.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_pangrams_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_pangrams_{LEVEL}_unearned.svg","isEarnableMidGame":true,"requiresSubscription":false},{"uniqueId":"sb7","displayName":"Found Pangram First","descriptionBody":"finding the Pangram as your first word in Spelling Bee {LEVEL} times.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_pangram-first_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_pangram-first_{LEVEL}_unearned.svg","isEarnableMidGame":true,"requiresSubscription":false},{"uniqueId":"sb8","displayName":"Long Word","descriptionBody":"finding {LEVEL} words in Spelling Bee that are 10+ letters long.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_long-word_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_milestone_long-word_{LEVEL}_unearned.svg","isEarnableMidGame":true,"requiresSubscription":false},{"uniqueId":"sb9","displayName":"New Year Hat","descriptionBody":"reaching the Genius rank in Spelling Bee on January 1, {LEVEL}.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_holiday_new-years_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_holiday_new-years_{LEVEL}_unearned.svg","earnType":"end-game","requiresSubscription":true},{"uniqueId":"sb10","displayName":"Halloween Hat","descriptionBody":"reaching the Genius rank in Spelling Bee on October 31, {LEVEL}.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/sb_holiday_halloween_{LEVEL}.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/sb_holiday_halloween_{LEVEL}_unearned.svg","earnType":"end-game","requiresSubscription":true},{"uniqueId":"wr1","displayName":"Hard mode","descriptionBody":"successfully completing a Wordle puzzle in Hard Mode. Turn on Hard Mode in Wordle\'s settings menu.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/wr_challenge_hard-mode.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/wr_challenge_hard-mode_unearned.svg","requiresSubscription":false},{"uniqueId":"wr2","displayName":"Wordle in 1","descriptionBody":"solving a Wordle puzzle in 1 guess.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/wr_progress_wordle-in-1.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/wr_progress_wordle-in-1_unearned.svg","requiresSubscription":false},{"uniqueId":"wr3","displayName":"Wordle in 2","descriptionBody":"solving a Wordle puzzle in 2 guesses.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/wr_progress_wordle-in-2.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/wr_progress_wordle-in-2_unearned.svg","requiresSubscription":false},{"uniqueId":"wr4","displayName":"1000 Wordles","descriptionBody":"completing 1000 Wordle puzzles, on any date, win or lose.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/wr_milestone_puzzles_1000.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/wr_milestone_puzzles_1000_unearned.svg","requiresSubscription":false},{"uniqueId":"wr5","displayName":"1500 Wordles","descriptionBody":"completing 1500 Wordle puzzles, on any date, win or lose.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/wr_milestone_puzzles_1500.svg","imageUrlUnearned":"/christmas_word_puzzles/assets/badges/svgs/wr_milestone_puzzles_1500_unearned.svg","requiresSubscription":false},{"uniqueId":"wr6","displayName":"{LEVEL}-day Streak","descriptionBody":"completing {LEVEL} consecutive daily Wordle puzzles without losing.","imageUrl":"/christmas_word_puzzles/assets/badges/svgs/wr_streak_streak_{LEVEL}.svg","imageUrlUnearned":"/assets/badges/svgs/streak_{LEVEL}_unearned.svg","requiresSubscription":false}]}')
        }
    }, i = {};
    function s(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var n = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return o[e].call(n.exports, n, n.exports, s),
        n.loaded = !0,
        n.exports
    }
    s.m = o,
    e = [],
    s.O = function(t, n, r, a) {
        if (!n) {
            var o = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0],
                r = e[u][1],
                a = e[u][2];
                for (var i = !0, l = 0; l < n.length; l++)
                    (!1 & a || o >= a) && Object.keys(s.O).every((function(e) {
                        return s.O[e](n[l])
                    }
                    )) ? n.splice(l--, 1) : (i = !1,
                    a < o && (o = a));
                if (i) {
                    e.splice(u--, 1);
                    var c = r();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--)
            e[u] = e[u - 1];
        e[u] = [n, r, a]
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return s.d(t, {
            a: t
        }),
        t
    }
    ,
    n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    s.t = function(e, r) {
        if (1 & r && (e = this(e)),
        8 & r)
            return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule)
                return e;
            if (16 & r && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        s.r(a);
        var o = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var i = 2 & r && e; "object" == typeof i && !~t.indexOf(i); i = n(i))
            Object.getOwnPropertyNames(i).forEach((function(t) {
                o[t] = function() {
                    return e[t]
                }
            }
            ));
        return o.default = function() {
            return e
        }
        ,
        s.d(a, o),
        a
    }
    ,
    s.d = function(e, t) {
        for (var n in t)
            s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    s.f = {},
    s.e = function(e) {
        return Promise.all(Object.keys(s.f).reduce((function(t, n) {
            return s.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    s.u = function(e) {
        return e + ".e945b93c0c845fb22848.js"
    }
    ,
    s.miniCssF = function(e) {}
    ,
    s.miniCssF = function(e) {}
    ,
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r = {},
    a = "@xwords/phoenix:",
    s.l = function(e, t, n, o) {
        if (r[e])
            r[e].push(t);
        else {
            var i, l;
            if (void 0 !== n)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == a + n) {
                        i = d;
                        break
                    }
                }
            i || (l = !0,
            (i = document.createElement("script")).charset = "utf-8",
            i.timeout = 120,
            s.nc && i.setAttribute("nonce", s.nc),
            i.setAttribute("data-webpack", a + n),
            i.src = e),
            r[e] = [t];
            var m = function(t, n) {
                i.onerror = i.onload = null,
                clearTimeout(p);
                var a = r[e];
                if (delete r[e],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((function(e) {
                    return e(n)
                }
                )),
                t)
                    return t(n)
            }
              , p = setTimeout(m.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
            i.onerror = m.bind(null, i.onerror),
            i.onload = m.bind(null, i.onload),
            l && document.head.appendChild(i)
        }
    }
    ,
    s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    function() {
        var e;
        s.g.importScripts && (e = s.g.location + "");
        var t = s.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && !e; )
                    e = n[r--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        s.p = e
    }(),
    function() {
        var e = {
            630: 0,
            7268: 0,
            7445: 0,
            243: 0
        };
        s.f.j = function(t, n) {
            var r = s.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else if (/^(243|7268|7445)$/.test(t))
                    e[t] = 0;
                else {
                    var a = new Promise((function(n, a) {
                        r = e[t] = [n, a]
                    }
                    ));
                    n.push(r[2] = a);
                    var o = s.p + s.u(t)
                      , i = new Error;
                    s.l(o, (function(n) {
                        if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var a = n && ("load" === n.type ? "missing" : n.type)
                              , o = n && n.target && n.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")",
                            i.name = "ChunkLoadError",
                            i.type = a,
                            i.request = o,
                            r[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        s.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var r, a, o = n[0], i = n[1], l = n[2], c = 0;
            if (o.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in i)
                    s.o(i, r) && (s.m[r] = i[r]);
                if (l)
                    var u = l(s)
            }
            for (t && t(n); c < o.length; c++)
                a = o[c],
                s.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return s.O(u)
        }
          , n = self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var l = s.O(void 0, [5247, 8178, 3842, 8806, 7268, 2376, 7974, 6105, 2552, 8790, 4352, 7281, 2628, 5094, 6171, 3050, 7089, 2452, 3108, 1314, 7445, 2288, 5236, 1784, 243, 7671, 8040], (function() {
        return s(84969)
    }
    ));
    l = s.O(l)
}();
//# sourceMappingURL=crossword.e8faf7966d188dbfa7b6.js.map
