(function() {
    var d, aa = aa || {},
        h = this;

    function l(a) {
        return void 0 !== a
    }

    function ba(a, b, c) {
        a = a.split(".");
        c = c || h;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) !a.length && l(b) ? c[e] = b : c[e] ? c = c[e] : c = c[e] = {}
    }

    function p(a, b) {
        for (var c = a.split("."), e = b || h, f; f = c.shift();)
            if (null != e[f]) e = e[f];
            else return null;
        return e
    }

    function q() {}

    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function s(a) {
        return "array" == ca(a)
    }

    function da(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function v(a) {
        return "string" == typeof a
    }

    function ea(a) {
        return "number" == typeof a
    }

    function w(a) {
        return "function" == ca(a)
    }

    function ha(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0;

    function ka(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, e);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function y(a, b, c) {
        y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
        return y.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }

    function z(a, b) {
        for (var c in b) a[c] = b[c]
    }
    var A = Date.now || function() {
        return +new Date
    };

    function B(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.u = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.hW = function(a, c, g) {
            var k = Array.prototype.slice.call(arguments, 2);
            return b.prototype[c].apply(a, k)
        }
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return y.apply(null, c)
        }
        return y(this, a)
    };
    Function.prototype.h6 = function(a) {
        var b = Array.prototype.slice.call(arguments);
        b.unshift(this, null);
        return y.apply(null, b)
    };
    Function.prototype.C5 = function(a) {
        B(this, a)
    };
    Function.prototype.g6 = function(a) {
        z(this.prototype, a)
    };

    function na(a) {
        a = this.j(a);
        this.h = a + "-transform";
        this.i = a + "-transition"
    }
    na.prototype.j = function(a) {
        return a.Ya && a.ht() ? "-O" : a.rg ? "-moz" : a.Xp ? "-ms" : "-webkit"
    };
    var oa = /translate|scale|rotate/;
    na.prototype.g = function(a, b) {
        var c = void 0 !== b,
            e = [],
            f = [],
            g = [],
            k = "",
            m;
        for (m in a) "animation-timing-function" == m ? k = a[m] : oa.test(m) ? f.push(m + "(" + a[m] + ")") : (e.push(m + ": " + a[m] + ";"), c && g.push(m));
        0 < f.length && (e.push(this.h + ": " + f.join(" ") + ";"), c ? g.push(this.h) : (e.push(this.i + ": none 0s;"), e.push("transition: none 0s;")));
        c && 0 < g.length && (c = g.join(" " + b + ", "), k && (c = k + " " + c), c += " " + b, e.push(this.i + ": " + c + ";"), e.push("transition: " + c + ";"));
        return e.join(" ")
    };
    na.inject = ["environmentModel"];

    function pa(a, b) {
        this.p = a;
        this.l = b;
        this.isVertical = !1
    }
    pa.prototype.g = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) this.i(a, b[c], c, !0)
    };
    pa.prototype.h = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) this.i(a, b[c], c, !1)
    };
    pa.prototype.i = function(a, b, c, e) {
        c = a.Vd(c);
        b.D.style.cssText = this.l.g(c, e && this.j(a, c, b.se), this.isVertical);
        b.se = c
    };
    pa.prototype.j = function(a, b, c) {
        return !this.p.isLimitedAnimation && null !== c && a.Cy(b, c)
    };
    pa.inject = ["environmentModel", "slidingAnimation"];

    function qa() {
        this.i = ["", "", ""]
    }
    qa.prototype.g = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = b[c],
                g = a.Vd(c);
            this.j(f, c, void 0 === f.se ? g : f.se, g)
        }
    };
    qa.prototype.h = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = b[c],
                g = a.Vd(c);
            this.j(f, c, g, g)
        }
    };
    qa.prototype.j = function(a, b, c, e) {
        var f = this.i[b];
        f && a.Sa(f);
        c = "shelf" + (0 > c ? 2 : c) + "to" + (0 > e ? 2 : e);
        this.i[b] = c;
        a.Ma(c);
        a.se = e;
        a.H()
    };

    function ra(a, b) {
        this.l = a;
        this.j = b;
        this.p = -1
    }
    ra.prototype.g = function(a, b, c) {
        for (var e = 0, f = b.length; e < f; ++e) {
            var g = b[e],
                k = a.Vd(e);
            this.i(g, k, void 0 !== k && k + c == g.se)
        }
    };
    ra.prototype.h = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) this.i(b[c], a.Vd(c), !1)
    };
    ra.prototype.i = function(a, b, c) {
        a.D.style.cssText = this.j.j(b, c);
        a.se = b
    };
    ra.inject = ["environmentModel", "shelfAnimation"];

    function sa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, sa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    B(sa, Error);
    sa.prototype.name = "CustomError";
    var ta;

    function ua(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    function va(a, b) {
        for (var c = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;) e += c.shift() + f.shift();
        return e + c.join("%s")
    }
    var wa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function xa(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function ya(a, b) {
        if (b) a = a.replace(za, "&amp;").replace(Aa, "&lt;").replace(Ba, "&gt;").replace(Ca, "&quot;").replace(Da, "&#39;").replace(Ea, "&#0;");
        else {
            if (!Fa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(za, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"))
        }
        return a
    }
    var za = /&/g,
        Aa = /</g,
        Ba = />/g,
        Ca = /"/g,
        Da = /'/g,
        Ea = /\x00/g,
        Fa = /[\x00&<>"']/;

    function C(a, b) {
        return -1 != a.indexOf(b)
    }

    function Ga(a, b) {
        for (var c = 0, e = wa(String(a)).split("."), f = wa(String(b)).split("."), g = Math.max(e.length, f.length), k = 0; 0 == c && k < g; k++) {
            var m = e[k] || "",
                n = f[k] || "",
                r = RegExp("(\\d*)(\\D*)", "g"),
                u = RegExp("(\\d*)(\\D*)", "g");
            do {
                var t = r.exec(m) || ["", "", ""],
                    x = u.exec(n) || ["", "", ""];
                if (0 == t[0].length && 0 == x[0].length) break;
                var c = 0 == t[1].length ? 0 : parseInt(t[1], 10),
                    G = 0 == x[1].length ? 0 : parseInt(x[1], 10),
                    c = Ha(c, G) || Ha(0 == t[2].length, 0 == x[2].length) || Ha(t[2], x[2])
            } while (0 == c)
        }
        return c
    }

    function Ha(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    Math.random();

    function Ia(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function Ja(a, b) {
        var c = v(b) ? String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
            return b + c.toUpperCase()
        })
    };

    function Ka(a) {
        return a[a.length - 1]
    }
    var La = Array.prototype,
        Ma = La.indexOf ? function(a, b, c) {
            return La.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Na = La.forEach ? function(a, b, c) {
            La.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++) g in f && b.call(c, f[g], g, a)
        };

    function Oa(a, b, c) {
        for (var e = a.length, f = v(a) ? a.split("") : a, e = e - 1; 0 <= e; --e) e in f && b.call(c, f[e], e, a)
    }
    var Pa = La.filter ? function(a, b, c) {
            return La.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, f = [], g = 0, k = v(a) ? a.split("") : a, m = 0; m < e; m++)
                if (m in k) {
                    var n = k[m];
                    b.call(c, n, m, a) && (f[g++] = n)
                }
            return f
        },
        Qa = La.map ? function(a, b, c) {
            return La.map.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, f = Array(e), g = v(a) ? a.split("") : a, k = 0; k < e; k++) k in g && (f[k] = b.call(c, g[k], k, a));
            return f
        },
        Ra = La.some ? function(a, b, c) {
            return La.some.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                if (g in
                    f && b.call(c, f[g], g, a)) return !0;
            return !1
        },
        Sa = La.every ? function(a, b, c) {
            return La.every.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                if (g in f && !b.call(c, f[g], g, a)) return !1;
            return !0
        };

    function Ta(a, b, c) {
        t: {
            for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                if (g in f && b.call(c, f[g], g, a)) {
                    b = g;
                    break t
                }
            b = -1
        }
        return 0 > b ? null : v(a) ? a.charAt(b) : a[b]
    }

    function E(a, b) {
        return 0 <= Ma(a, b)
    }

    function Ua(a, b) {
        var c = Ma(a, b),
            e;
        (e = 0 <= c) && La.splice.call(a, c, 1);
        return e
    }

    function Va(a) {
        return La.concat.apply(La, arguments)
    }

    function Wa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
            return c
        }
        return []
    }

    function Xa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var e = arguments[c],
                f;
            if (s(e) || (f = da(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) a.push.apply(a, e);
            else if (f)
                for (var g = a.length, k = e.length, m = 0; m < k; m++) a[g + m] = e[m];
            else a.push(e)
        }
    }

    function ab(a, b, c) {
        return 2 >= arguments.length ? La.slice.call(a, b) : La.slice.call(a, b, c)
    }

    function bb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function cb(a, b) {
        for (var c = [], e = 0; e < b; e++) c[e] = a;
        return c
    };

    function db(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function eb(a, b) {
        l(b);
        return Math.floor(a + (b || 2E-15))
    };

    function fb(a, b, c, e) {
        e = e || 0;
        a = this.l(a.supportsTranslateZ);
        this.h = this.g(b.g(a, c + "ms"), e);
        this.i = this.g(b.g(a), e)
    }
    fb.prototype.g = function(a, b) {
        for (var c = [-11, 0, 100 + b, 2 * (100 + b)], e = [], f = 0; 4 > f; ++f) {
            var g = gb(0 == f ? -2 : 0, 1),
                k = gb(c[f], 1),
                m = 0 == f ? "0" : "1",
                n = 0 == f ? "0.75" : "1";
            e[f] = a.replace("%xposition", g).replace("%yposition", k).replace("%scale", n).replace("%opacity", m)
        }
        return e
    };
    fb.prototype.l = function(a) {
        var b = {
            translateX: "%xposition",
            translateY: "%yposition",
            scale: "%scale",
            opacity: "%opacity"
        };
        a && (b.translateZ = "0");
        return b
    };
    fb.prototype.j = function(a, b) {
        return (b ? this.h : this.i)[3 <= a ? 3 : 0 > a ? 0 : a + 1]
    };
    fb.inject = ["environmentModel", "animationBuilder", "animDuration", "opt_tileSpacing"];

    function hb(a, b, c, e, f) {
        this.j = e || 0;
        a = this.l(a.supportsTranslateZ, f);
        this.h = b.g(a, c + "ms");
        this.i = b.g(a)
    }
    hb.prototype.l = function(a, b) {
        var c = {
            "translate%variable": "%position"
        };
        a && (c.translateZ = "0");
        c["animation-timing-function"] = b || "cubic-bezier(0.4, 0.0, 0.2, 1)";
        return c
    };
    hb.prototype.g = function(a, b, c) {
        b = b ? this.h : this.i;
        a = gb(a * (100 + this.j), 1);
        c = c ? "Y" : "X";
        return b.replace("%position", a).replace("%variable", c)
    };
    hb.inject = ["environmentModel", "animationBuilder", "animDuration", "opt_tileSpacing", "opt_ease"];

    function ib(a, b, c) {
        this.g = a;
        this.i = b;
        this.h = c
    }
    ib.prototype.bb = function() {
        this.h.ac();
        this.g.isSupported() && this.g.clear();
        this.i.clear()
    };
    ib.inject = ["cookiesApi", "localStorage", "authService"];

    function jb(a, b, c) {
        this.i = a;
        this.g = b;
        this.h = c
    }
    jb.prototype.bb = function() {
        this.g.load();
        this.h.fH()
    };
    jb.inject = ["rootDispatcher", "clearWatchHistoryService", "watchModel"];
    var kb = {
            tW: "branding",
            Sy: "channel",
            wW: "channel_paid_info",
            H1: "video_like_value",
            VIDEO: "video",
            uY: "innertube"
        },
        lb = ["hi_IN"],
        mb = {
            name: "yttv_browse_under_watch",
            id: 948402
        },
        nb = {
            name: "CHANNEL_PAGE_COLLAPSED",
            id: 948400
        },
        ob = {
            name: "COLLAPSE_CHANNEL_PAGE_IF_SUBSCRIBED_OR_FROM_GUIDE",
            id: 955201
        },
        pb = {
            name: "yttv_do_not_use_sets_ui",
            id: 955202
        },
        qb = {
            name: "LIVE_PLAYBACK_LAUNCH",
            id: 943407
        },
        rb = {
            name: "yttv_lg_sets_ui_whitelist_launch",
            id: 932116
        },
        sb = {
            name: "NEW_END_SCREENS_LAUNCH",
            id: 957201
        },
        tb = {
            name: "yttv_no_onboarding",
            id: 932113
        },
        ub = {
            name: "SAMSUNG_SETS_UI_WHITELIST_LAUNCH",
            id: 938808
        },
        wb = {
            name: "yttv_search_over_watch_disabled",
            id: 959200
        },
        xb = {
            name: "search_history_suggestions_holdback",
            id: 943415
        },
        yb = {
            name: "search_keyboard_4_row",
            id: 959201
        },
        zb = {
            name: "SETS_UI_LAUNCH",
            id: 943410
        },
        Ab = {
            name: "SHOW_PAID_SCOPE_DIALOG",
            id: 938801
        },
        Bb = {
            name: "SUBSCRIBED_CHANNEL_PAGE_COLLAPSED",
            id: 948401
        },
        Cb = {
            name: "vvt_in_vss_pings_launch",
            id: 957103
        },
        Db = {
            name: "YTTV_MDX_TOAST_USER_AVATAR_LAUNCH",
            id: 952302
        },
        Eb = {
            name: "YTTV_MDX_TOAST_UPDATE_PLAYLIST_LAUNCH",
            id: 952901
        },
        Fb = {
            g: mb,
            h: nb,
            i: ob,
            j: pb,
            p: qb,
            l: rb,
            k: sb,
            o: tb,
            w: {
                name: "PREVIEW_NEXT_VIDEO",
                id: 927901
            },
            A: ub,
            U: wb,
            G: xb,
            L: yb,
            F: {
                name: "search_keyboard_qwerty",
                id: 959202
            },
            I: zb,
            J: Ab,
            O: Bb,
            Z: {
                name: "USE_INNER_TUBE_LAUNCH",
                id: 943402
            },
            na: {
                name: "USE_INNER_TUBE_EXPANDED_LAUNCH",
                id: 941416
            },
            W: {
                name: "USE_INNER_TUBE_EXPANDED_HOLDBACK",
                id: 941415
            },
            va: Cb,
            aa: Db,
            Ya: Eb
        },
        Gb = "AE AR AU BE BR CA CL CO CZ DE EG ES FR GB HK HU ID IE IL IN IT JO JP KR MA MX MY NL NZ PE PH PL RU SA SE SG TW ZA".split(" "),
        Hb = {
            GUIDE_CIRCULAR_MASK: "guide-circular-mask",
            LIKES_PLAYLIST: "icon-like",
            MUSIC: "icon-music",
            PLAYLISTS: "icon-playlist",
            PURCHASES: "icon-guide-purchases",
            SEARCH: "icon-search",
            SETTINGS: "icon-player-settings",
            SIGN_IN: "icon-people",
            SOCIAL: "icon-guide-social",
            SUBSCRIPTIONS: "icon-guide-my-subs",
            UPLOADS: "icon-upload",
            VIEW_ALL: "icon-wii-plus",
            WATCH_HISTORY: "icon-guide-history",
            WATCH_LATER: "icon-watch-later",
            WHAT_TO_WATCH: "icon-guide-what-to-watch"
        },
        Ib = {
            settings: "Sign In & Settings"
        },
        Jb = {
            help: "request-help-dialog"
        },
        Kb = ["\u309b", "\u309c", "\u5c0f"],
        Lb = {
            "\u3042": ["\u3044",
                "\u3046", "\u3048", "\u304a"
            ],
            "\u304b": ["\u304d", "\u304f", "\u3051", "\u3053"],
            "\u3055": ["\u3057", "\u3059", "\u305b", "\u305d"],
            "\u305f": ["\u3061", "\u3064", "\u3066", "\u3068"],
            "\u306a": ["\u306b", "\u306c", "\u306d", "\u306e"],
            "\u306f": ["\u3072", "\u3075", "\u3078", "\u307b"],
            "\u307e": ["\u307f", "\u3080", "\u3081", "\u3082"],
            "\u3084": ["\u3086", "\u3088"],
            "\u3089": ["\u308a", "\u308b", "\u308c", "\u308d"],
            "\u308f": ["\u3092", "\u3093"],
            "\u309b": ["\u309c", "\u5c0f", "\u30fc"]
        },
        Mb = {
            "\u3131": ["\u3132"],
            "\u3137": ["\u3138"],
            "\u3142": ["\u3143"],
            "\u3145": ["\u3146"],
            "\u3148": ["\u3149"]
        },
        Nb = {
            "\u3131": "\u1100",
            "\u3132": "\u1101",
            "\u3134": "\u1102",
            "\u3137": "\u1103",
            "\u3138": "\u1104",
            "\u314f": "\u1161",
            "\u3153": "\u1165",
            "\u3157": "\u1169",
            "\u3139": "\u1105",
            "\u3141": "\u1106",
            "\u3142": "\u1107",
            "\u3143": "\u1108",
            "\u3145": "\u1109",
            "\u3151": "\u1163",
            "\u3155": "\u1167",
            "\u315b": "\u116d",
            "\u3146": "\u110a",
            "\u3147": "\u110b",
            "\u3148": "\u110c",
            "\u3149": "\u110d",
            "\u314a": "\u110e",
            "\u3161": "\u1173",
            "\u3163": "\u1175",
            "\u315c": "\u116e",
            "\u314b": "\u110f",
            "\u314c": "\u1110",
            "\u314d": "\u1111",
            "\u314e": "\u1112",
            "\u3150": "\u1162",
            "\u3154": "\u1166",
            "\u3160": "\u1172",
            "\u3152": "\u1164",
            "\u3156": "\u1168"
        },
        Ob = {
            "\u5c0f": {
                "\u3042": "\u3041",
                "\u3041": "\u3042",
                "\u3044": "\u3043",
                "\u3043": "\u3044",
                "\u3048": "\u3047",
                "\u3047": "\u3048",
                "\u304a": "\u3049",
                "\u3049": "\u304a",
                "\u3084": "\u3083",
                "\u3083": "\u3084",
                "\u3086": "\u3085",
                "\u3085": "\u3086",
                "\u3088": "\u3087",
                "\u3087": "\u3088",
                "\u308f": "\u308e",
                "\u308e": "\u308f",
                "\u304b": "\u3095",
                "\u3095": "\u304b",
                "\u304c": "\u3095",
                "\u3051": "\u3096",
                "\u3096": "\u3051",
                "\u3052": "\u3096",
                "\u3064": "\u3063",
                "\u3063": "\u3064",
                "\u3065": "\u3063",
                "\u3046": "\u3045",
                "\u3045": "\u3046",
                "\u3094": "\u3045"
            },
            "\u309b": {
                "\u304d": "\u304e",
                "\u304e": "\u304d",
                "\u304f": "\u3050",
                "\u3050": "\u304f",
                "\u3053": "\u3054",
                "\u3054": "\u3053",
                "\u3055": "\u3056",
                "\u3056": "\u3055",
                "\u3057": "\u3058",
                "\u3058": "\u3057",
                "\u3059": "\u305a",
                "\u305a": "\u3059",
                "\u305b": "\u305c",
                "\u305c": "\u305b",
                "\u305d": "\u305e",
                "\u305e": "\u305d",
                "\u305f": "\u3060",
                "\u3060": "\u305f",
                "\u3061": "\u3062",
                "\u3062": "\u3061",
                "\u3066": "\u3067",
                "\u3067": "\u3066",
                "\u3068": "\u3069",
                "\u3069": "\u3068",
                "\u304b": "\u304c",
                "\u304c": "\u304b",
                "\u3095": "\u304c",
                "\u3051": "\u3052",
                "\u3052": "\u3051",
                "\u3096": "\u3052",
                "\u3064": "\u3065",
                "\u3065": "\u3064",
                "\u3063": "\u3065",
                "\u3046": "\u3094",
                "\u3045": "\u3094",
                "\u3094": "\u3046",
                "\u3071": "\u3070",
                "\u3070": "\u306f",
                "\u306f": "\u3070",
                "\u3074": "\u3073",
                "\u3073": "\u3072",
                "\u3072": "\u3073",
                "\u3077": "\u3076",
                "\u3076": "\u3075",
                "\u3075": "\u3076",
                "\u307a": "\u3079",
                "\u3079": "\u3078",
                "\u3078": "\u3079",
                "\u307d": "\u307c",
                "\u307c": "\u307b",
                "\u307b": "\u307c"
            },
            "\u309c": {
                "\u306f": "\u3071",
                "\u3071": "\u306f",
                "\u3070": "\u3071",
                "\u3072": "\u3074",
                "\u3074": "\u3072",
                "\u3073": "\u3074",
                "\u3075": "\u3077",
                "\u3077": "\u3075",
                "\u3076": "\u3077",
                "\u3078": "\u307a",
                "\u307a": "\u3078",
                "\u3079": "\u307a",
                "\u307b": "\u307d",
                "\u307d": "\u307b",
                "\u307c": "\u307d"
            }
        };
    ba("yt.tv.constants.SmartglassPlaybackStatus", {
        CLOSED: 0,
        vW: 1,
        STOPPED: 2,
        PLAYING: 3,
        PAUSED: 4
    }, void 0);
    ba("yt.tv.constants.SmartglassPlaybackRate", {
        PAUSED: 0,
        PLAYING: 1
    }, void 0);
    ba("yt.tv.constants.PlayerState", {
        BUFFERING: 3,
        BW: 0,
        ERROR: -1E3,
        PAUSED: 2,
        PLAYING: 1,
        F1: -1,
        MESSAGE: 1E3
    }, void 0);
    var Pb = 1E3 / 210,
        Qb = {
            EN: "abcdefghijklmnopqrstuvwxyz_",
            EN_4: "abcdefg\nhijklmn\nopqrstu\nvwxyz_",
            KO: "\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314a\u314b\u314c\u314d\u314e\n\u314f\u3151\u3153\u3155\u3157\u315b\u315c\u3160\u3161\u3163\u3150\u3152\u3154\u31561234567890_",
            RU: "\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f_",
            JP: "\u3042\u304b\u3055\u305f\u306a\u306f\u307e\u3084\u3089\u308f\u309b",
            UA: "\u0430\u0431\u0432\u0433\u0491\u0434\u0435\u0454\u0436\u0437\u0438\u0456\u0457\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044c\u044e\u044f_",
            NUMBERS: "1234567890_",
            NUMBERS_4: "123\n456\n789\n0_"
        },
        Rb = {
            sY: "HL",
            q1: "RC",
            D1: "SU",
            J1: "WL"
        },
        Sb = {
            mqdefault: [0, 1280],
            hqdefault: [1281, Number.MAX_VALUE]
        },
        Tb = {
            854: [0, 854],
            1280: [855, 1280],
            1920: [1281, Number.MAX_VALUE]
        },
        Wb = {
            FRIEND_ADDED: "[[{{username}} added a friend|The message that describes user activity. Displayed when a user has added a friend.]]",
            USER_SUBSCRIPTION_ADDED: "[[{{username}} added a subscription|The message that describes user activity. Displayed when a user subscribed to a channel.]]",
            VIDEO_ADDED_TO_LEGO: "[[{{username}} added a video|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
            VIDEO_ADDED_TO_PLAYLIST: "[[{{username}} added a video to a playlist|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
            VIDEO_COMMENTED: "[[{{username}} commented a video|The message that describes user activity. Displayed when a user has commented on a video.]]",
            VIDEO_FAVORITED: "[[{{username}} favorited a video|The message that describes user activity. Displayed when a user has favorited a video.]]",
            VIDEO_RATED: "[[{{username}} rated a video|The message that describes user activity. Displayed when a user has rated a video.]]",
            VIDEO_RECOMMENDED: "[[video recommended|The message that describes that a video has been recommended.]]",
            VIDEO_SHARED: "[[{{username}} shared a video|The message that describes user activity. Displayed when a user has shared a video.]]",
            VIDEO_UPLOADED: "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
        },
        Xb = {
            BACK: "back",
            xW: "close-guide",
            yW: "delete",
            DW: "exit",
            tY: "home",
            h1: "modify",
            i1: "more",
            FW: "guide",
            SEARCH: "search",
            A1: "space"
        },
        Yb = {
            back: {
                keyCode: 27,
                label: "[[Back|Speech command for going back from the current screen.|642229470]]"
            },
            "close-guide": {
                keyCode: 172,
                label: "[[Close guide|Speech command to close the guide.]]"
            },
            "delete": {
                keyCode: 172,
                label: "[[Delete|Speech command to delete a video from a user's playlist]]"
            },
            exit: {
                keyCode: 27,
                label: "[[Exit|Speech command to exit the application]]"
            },
            home: {
                keyCode: 71,
                label: "[[Go home|Speech command for going back to the home screen.]]"
            },
            modify: {
                keyCode: 172,
                label: "[[Modify|Speech command to open dialog allowing to edit or delete a video.]]"
            },
            more: {
                keyCode: 40,
                label: "[[More|Speech command to enable browse while watching a video|791341857]]"
            },
            guide: {
                keyCode: 172,
                label: "[[Guide|Speech command to open the guide.]]"
            },
            search: {
                keyCode: 83,
                label: "[[Search|Speech command to goto search.]]"
            },
            space: {
                keyCode: 170,
                label: "[[Space|Label for legend key that inserts a space character.]]"
            }
        },
        Zb = {
            title: "[[YouTube on TV is not supported on this device.|Error message informing the user that their device does not support the YouTube on TV application.]]",
            url: "www.youtube.com/devicepartners"
        };

    function $b(a, b, c) {
        this.i = a;
        this.h = b;
        this.g = c
    }
    $b.prototype.bb = function(a, b, c) {
        this.h.Cb(y(function(e) {
            if (e) a(!1);
            else {
                var f = !1;
                this.g.isPlaying && (f = !0, this.g.pause());
                var g = y(function() {
                        f && this.g.play()
                    }, this),
                    k = c || q;
                e = y(function() {
                    k();
                    g()
                }, this);
                var m = y(function() {
                    this.h.Ab() ? a(!0) : k();
                    g()
                }, this);
                this.i.B("request-login", m, e, b)
            }
        }, this))
    };
    $b.inject = ["rootDispatcher", "authService", "playerFacade"];

    function ac(a, b, c) {
        this.g = a;
        this.j = b;
        this.i = c
    }
    ac.prototype.bb = function() {
        if ("" == this.g.zq()) {
            var a = this.g.rb("q");
            a && (this.j.Bb(a), this.h())
        }
    };
    ac.prototype.h = function() {
        this.i.B("cmd-set-application-state", {
            state: "browse",
            mode: "search"
        })
    };
    ac.inject = ["applicationState", "searchQueryModel", "rootDispatcher"];

    function bc(a) {
        this.g = a
    }
    bc.prototype.bb = function() {
        this.g.isSupported() && this.g.hideSplashScreen()
    };
    bc.inject = ["systemApi"];

    function F() {
        this.Sh = this.Sh;
        this.Ya = this.Ya
    }
    d = F.prototype;
    d.Sh = !1;
    d.Xc = function() {
        return this.Sh
    };
    d.F3 = F.prototype.Xc;
    d.nc = function() {
        this.Sh || (this.Sh = !0, this.M())
    };
    d.mq = function(a) {
        this.rV(ma(cc, a))
    };
    d.rV = function(a, b) {
        this.Ya || (this.Ya = []);
        this.Ya.push(l(b) ? y(a, b) : a)
    };
    d.M = function() {
        if (this.Ya)
            for (; this.Ya.length;) this.Ya.shift()()
    };

    function cc(a) {
        a && "function" == typeof a.nc && a.nc()
    }

    function dc(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var e = arguments[b];
            da(e) ? dc.apply(null, e) : cc(e)
        }
    };

    function ec(a) {
        return function() {
            return a
        }
    }
    ec(!1);
    ec(!0);
    ec(null);

    function fc(a, b) {
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    }

    function gc(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (var a, f = 0; f < c; f++) a = b[f].apply(this, arguments);
            return a
        }
    };
    var hc = "StopIteration" in h ? h.StopIteration : Error("StopIteration");

    function ic() {}
    ic.prototype.next = function() {
        throw hc;
    };
    ic.prototype.gc = function() {
        return this
    };

    function jc(a) {
        if (a instanceof ic) return a;
        if ("function" == typeof a.gc) return a.gc(!1);
        if (da(a)) {
            var b = 0,
                c = new ic;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw hc;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function kc(a, b, c) {
        if (da(a)) try {
            Na(a, b, c)
        } catch (e) {
            if (e !== hc) throw e;
        } else {
            a = jc(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (f) {
                if (f !== hc) throw f;
            }
        }
    }

    function lc(a) {
        if (da(a)) return Wa(a);
        a = jc(a);
        var b = [];
        kc(a, function(a) {
            b.push(a)
        });
        return b
    };

    function mc(a, b, c) {
        for (var e in a) b.call(c, a[e], e, a)
    }

    function nc(a, b, c) {
        var e = {},
            f;
        for (f in a) e[f] = b.call(c, a[f], f, a);
        return e
    }

    function oc(a, b, c) {
        for (var e in a)
            if (b.call(c, a[e], e, a)) return !0;
        return !1
    }

    function pc(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function qc(a) {
        for (var b in a) return b
    }

    function rc(a) {
        var b = [],
            c = 0,
            e;
        for (e in a) b[c++] = a[e];
        return b
    }

    function sc(a) {
        var b = [],
            c = 0,
            e;
        for (e in a) b[c++] = e;
        return b
    }

    function tc(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function uc(a, b, c) {
        for (var e in a)
            if (b.call(c, a[e], e, a)) return e
    }

    function vc(a) {
        for (var b in a) return !1;
        return !0
    }

    function wc(a, b, c) {
        if (b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function H(a, b, c) {
        return b in a ? a[b] : c
    }

    function xc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }

    function yc(a) {
        var b = {},
            c;
        for (c in a) b[a[c]] = c;
        return b
    }
    var zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ac(a, b) {
        for (var c, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (c in e) a[c] = e[c];
            for (var g = 0; g < zc.length; g++) c = zc[g], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
        }
    }

    function Bc(a) {
        var b = arguments.length;
        if (1 == b && s(arguments[0])) return Bc.apply(null, arguments[0]);
        for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
        return c
    };

    function Cc(a, b) {
        this.h = {};
        this.g = [];
        this.j = this.i = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var e = 0; e < c; e += 2) this.Ac(arguments[e], arguments[e + 1])
        } else a && this.sC(a)
    }
    d = Cc.prototype;
    d.Da = function() {
        return this.i
    };
    d.Xa = function() {
        this.Bf();
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    d.vb = function() {
        this.Bf();
        return this.g.concat()
    };
    d.Aj = function(a) {
        return Dc(this.h, a)
    };
    d.Th = function(a) {
        for (var b = 0; b < this.g.length; b++) {
            var c = this.g[b];
            if (Dc(this.h, c) && this.h[c] == a) return !0
        }
        return !1
    };
    d.s5 = function(a, b) {
        if (this === a) return !0;
        if (this.i != a.Da()) return !1;
        var c = b || Ec;
        this.Bf();
        for (var e, f = 0; e = this.g[f]; f++)
            if (!c(this.get(e), a.get(e))) return !1;
        return !0
    };

    function Ec(a, b) {
        return a === b
    }
    d.qb = function() {
        return 0 == this.i
    };
    d.clear = function() {
        this.h = {};
        this.j = this.i = this.g.length = 0
    };
    d.remove = function(a) {
        return Dc(this.h, a) ? (delete this.h[a], this.i--, this.j++, this.g.length > 2 * this.i && this.Bf(), !0) : !1
    };
    d.Bf = function() {
        if (this.i != this.g.length) {
            for (var a = 0, b = 0; a < this.g.length;) {
                var c = this.g[a];
                Dc(this.h, c) && (this.g[b++] = c);
                a++
            }
            this.g.length = b
        }
        if (this.i != this.g.length) {
            for (var e = {}, b = a = 0; a < this.g.length;) c = this.g[a], Dc(e, c) || (this.g[b++] = c, e[c] = 1), a++;
            this.g.length = b
        }
    };
    d.get = function(a, b) {
        return Dc(this.h, a) ? this.h[a] : b
    };
    d.Ac = function(a, b) {
        Dc(this.h, a) || (this.i++, this.g.push(a), this.j++);
        this.h[a] = b
    };
    d.sC = function(a) {
        var b;
        a instanceof Cc ? (b = a.vb(), a = a.Xa()) : (b = sc(a), a = rc(a));
        for (var c = 0; c < b.length; c++) this.Ac(b[c], a[c])
    };
    d.forEach = function(a, b) {
        for (var c = this.vb(), e = 0; e < c.length; e++) {
            var f = c[e],
                g = this.get(f);
            a.call(b, g, f, this)
        }
    };
    d.clone = function() {
        return new Cc(this)
    };
    d.g7 = function() {
        for (var a = new Cc, b = 0; b < this.g.length; b++) {
            var c = this.g[b];
            a.Ac(this.h[c], c)
        }
        return a
    };
    d.f7 = function() {
        this.Bf();
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b];
            a[c] = this.h[c]
        }
        return a
    };
    d.R3 = function() {
        return this.gc(!0)
    };
    d.I4 = function() {
        return this.gc(!1)
    };
    d.gc = function(a) {
        this.Bf();
        var b = 0,
            c = this.g,
            e = this.h,
            f = this.j,
            g = this,
            k = new ic;
        k.next = function() {
            for (;;) {
                if (f != g.j) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw hc;
                var k = c[b++];
                return a ? k : e[k]
            }
        };
        return k
    };

    function Dc(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Hc(a, b) {
        this.i = a || null;
        this.j = !!b;
        this.h = new Cc;
        this.g = new Ic("", void 0);
        this.g.next = this.g.g = this.g
    }
    d = Hc.prototype;
    d.Cx = function(a) {
        (a = this.h.get(a)) && this.j && (a.remove(), this.Iw(a));
        return a
    };
    d.get = function(a, b) {
        var c = this.Cx(a);
        return c ? c.value : b
    };
    d.k6 = function(a, b) {
        var c = this.h.get(a);
        return c ? c.value : b
    };
    d.ah = function(a, b) {
        var c = this.Cx(a);
        c ? c.value = b : (c = new Ic(a, b), this.h.Ac(a, c), this.Iw(c))
    };
    d.i6 = function() {
        return this.g.next.value
    };
    d.j6 = function() {
        return this.g.g.value
    };
    d.shift = function() {
        return this.zw(this.g.next)
    };
    d.r5 = function() {
        return this.zw(this.g.g)
    };
    d.remove = function(a) {
        return (a = this.h.get(a)) ? (this.qm(a), !0) : !1
    };
    d.qm = function(a) {
        a.remove();
        this.h.remove(a.key)
    };
    d.Da = function() {
        return this.h.Da()
    };
    d.qb = function() {
        return this.h.qb()
    };
    d.K6 = function(a) {
        this.i = a || null;
        null != this.i && this.wm(this.i)
    };
    d.vb = function() {
        return this.map(function(a, b) {
            return b
        })
    };
    d.Xa = function() {
        return this.map(function(a) {
            return a
        })
    };
    d.contains = function(a) {
        return this.some(function(b) {
            return b == a
        })
    };
    d.q5 = function(a) {
        return this.h.Aj(a)
    };
    d.clear = function() {
        this.wm(0)
    };
    d.forEach = function(a, b) {
        for (var c = this.g.next; c != this.g; c = c.next) a.call(b, c.value, c.key, this)
    };
    d.map = function(a, b) {
        for (var c = [], e = this.g.next; e != this.g; e = e.next) c.push(a.call(b, e.value, e.key, this));
        return c
    };
    d.some = function(a, b) {
        for (var c = this.g.next; c != this.g; c = c.next)
            if (a.call(b, c.value, c.key, this)) return !0;
        return !1
    };
    d.every = function(a, b) {
        for (var c = this.g.next; c != this.g; c = c.next)
            if (!a.call(b, c.value, c.key, this)) return !1;
        return !0
    };
    d.Iw = function(a) {
        this.j ? (a.next = this.g.next, a.g = this.g, this.g.next = a, a.next.g = a) : (a.g = this.g.g, a.next = this.g, this.g.g = a, a.g.next = a);
        null != this.i && this.wm(this.i)
    };
    d.wm = function(a) {
        for (var b = this.h.Da(); b > a; b--) this.qm(this.j ? this.g.g : this.g.next)
    };
    d.zw = function(a) {
        this.g != a && this.qm(a);
        return a.value
    };

    function Ic(a, b) {
        this.key = a;
        this.value = b
    }
    Ic.prototype.remove = function() {
        this.g.next = this.next;
        this.next.g = this.g;
        delete this.g;
        delete this.next
    };

    function I() {
        F.call(this);
        this.ob = null;
        this.og = 0;
        this.$y()
    }
    B(I, F);
    I.prototype.$y = function() {
        this.ob = new Hc
    };
    I.prototype.C = function(a, b) {
        var c = this.ob,
            e = String(this.og++);
        c.ah(e, {
            OS: a,
            $d: b
        });
        return function() {
            c.remove(e)
        }
    };
    I.prototype.B = function(a, b) {
        if (void 0 !== this.ob)
            for (var c = Array.prototype.slice.call(arguments, 1), e = this.ob.Xa(), f = 0, g = e.length; f < g; ++f) {
                var k = e[f];
                k.OS === a && k.$d.apply(this, c)
            }
    };
    I.prototype.M = function() {
        this.ob && this.ob.clear();
        I.u.M.call(this)
    };

    function Jc(a) {
        this.i = a;
        this.g = {};
        this.h = []
    }
    Jc.prototype.get = function(a) {
        return this.g[a]
    };
    Jc.prototype.vb = function() {
        return this.h
    };
    Jc.prototype.add = function(a, b) {
        var c = this.get(a);
        this.g[a] = b;
        !c && this.h.push(a) > this.i && (c = this.h.shift(), delete this.g[c])
    };

    function Kc(a) {
        I.call(this);
        this.h = a;
        this.g = {};
        this.lH()
    }
    B(Kc, I);
    d = Kc.prototype;
    d.lH = function() {
        for (var a in kb) this.reset(kb[a])
    };
    d.reset = function(a) {
        var b = this.h.hH(a);
        this.g[a] = new Jc(b)
    };
    d.get = function(a, b) {
        return this.g[a] && this.g[a].get(b)
    };
    d.S3 = function(a) {
        return this.g[a] && this.g[a].vb()
    };
    d.add = function(a, b, c) {
        this.g[a] && (this.g[a].add(b, c), this.B("cache:changed", a))
    };
    d.U2 = function(a, b) {
        if (this.g[a]) {
            for (var c in b) this.g[a].add(c, b[c]);
            this.B("cache:changed", a)
        }
    };
    Kc.inject = ["environmentModel"];

    function Lc(a, b) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0
    }
    d = Lc.prototype;
    d.clone = function() {
        return new Lc(this.x, this.y)
    };
    d.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    d.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    d.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    d.d5 = function(a, b) {
        a instanceof Lc ? (this.x += a.x, this.y += a.y) : (this.x += a, ea(b) && (this.y += b));
        return this
    };
    d.c5 = function(a, b) {
        var c = ea(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    d.ZV = function(a, b) {
        var c = b || new Lc(0, 0),
            e = this.x,
            f = this.y,
            g = Math.cos(a),
            k = Math.sin(a);
        this.x = (e - c.x) * g - (f - c.y) * k + c.x;
        this.y = (e - c.x) * k + (f - c.y) * g + c.y
    };
    d.w6 = function(a, b) {
        this.ZV(a * Math.PI / 180, b)
    };

    function Mc(a, b) {
        this.width = a;
        this.height = b
    }
    d = Mc.prototype;
    d.clone = function() {
        return new Mc(this.width, this.height)
    };
    d.X3 = function() {
        return Math.max(this.width, this.height)
    };
    d.B4 = function() {
        return Math.min(this.width, this.height)
    };
    d.sV = function() {
        return this.width * this.height
    };
    d.l6 = function() {
        return 2 * (this.width + this.height)
    };
    d.qz = function() {
        return this.width / this.height
    };
    d.qb = function() {
        return !this.sV()
    };
    d.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    d.o3 = function(a) {
        return this.width <= a.width && this.height <= a.height
    };
    d.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    d.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    d.cV = function(a, b) {
        var c = ea(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    d.y6 = function(a) {
        a = this.qz() > a.qz() ? a.width / this.width : a.height / this.height;
        return this.cV(a)
    };
    var J;
    t: {
        var Nc = h.navigator;
        if (Nc) {
            var Oc = Nc.userAgent;
            if (Oc) {
                J = Oc;
                break t
            }
        }
        J = ""
    };
    var Pc, Qc = C(J, "Opera") || C(J, "OPR"),
        K = C(J, "Trident") || C(J, "MSIE"),
        Rc = C(J, "Gecko") && !C(J.toLowerCase(), "webkit") && !(C(J, "Trident") || C(J, "MSIE")),
        Sc = C(J.toLowerCase(), "webkit");
    Sc && C(J, "Mobile");
    var Tc = h.navigator || null,
        Uc = Tc && Tc.platform || "";
    Pc = C(Uc, "Mac");
    C(Uc, "Win");
    C(Uc, "Linux");
    var Vc = J;
    Vc && C(Vc, "Android");
    Vc && C(Vc, "iPhone");
    Vc && C(Vc, "iPad");
    var Wc = h.navigator || null;
    Wc && C(Wc.appVersion || "", "X11");

    function Xc() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var Yc = function() {
            var a = "",
                b;
            if (Qc && h.opera) return a = h.opera.version, w(a) ? a() : a;
            Rc ? b = /rv\:([^\);]+)(\)|;)/ : K ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Sc && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(J)) ? a[1] : "");
            return K && (b = Xc(), b > parseFloat(a)) ? String(b) : a
        }(),
        Zc = {};

    function $c(a) {
        return Zc[a] || (Zc[a] = 0 <= Ga(Yc, a))
    }

    function ad(a) {
        return K && bd >= a
    }
    var cd = h.document,
        bd = cd && K ? Xc() || ("CSS1Compat" == cd.compatMode ? parseInt(Yc, 10) : 5) : void 0;
    var dd = !K || ad(9),
        ed = !Rc && !K || K && ad(9) || Rc && $c("1.9.1"),
        fd = K && !$c("9"),
        gd = K || Qc || Sc;
    K && ad(9);

    function hd(a, b) {
        var c = b || document,
            e = null;
        c.querySelectorAll && c.querySelector ? e = c.querySelector("." + a) : e = id(document, "*", a, b)[0];
        return e || null
    }

    function id(a, b, c, e) {
        a = e || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                e = {};
                for (var f = 0, g = 0, k; k = a[g]; g++) b == k.nodeName && (e[f++] = k);
                e.length = f;
                return e
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            e = {};
            for (g = f = 0; k = a[g]; g++) b = k.className, "function" == typeof b.split && E(b.split(/\s+/), c) && (e[f++] = k);
            e.length = f;
            return e
        }
        return a
    }

    function jd(a, b) {
        mc(b, function(b, e) {
            "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in kd ? a.setAttribute(kd[e], b) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, b) : a[e] = b
        })
    }
    var kd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function ld(a) {
        a = a.document;
        a = md(a) ? a.documentElement : a.body;
        return new Mc(a.clientWidth, a.clientHeight)
    }

    function nd(a) {
        return !Sc && md(a) ? a.documentElement : a.body || a.documentElement
    }

    function od(a, b, c, e) {
        function f(c) {
            c && b.appendChild(v(c) ? a.createTextNode(c) : c)
        }
        for (; e < c.length; e++) {
            var g = c[e];
            da(g) && !pd(g) ? Na(qd(g) ? Wa(g) : g, f) : f(g)
        }
    }

    function rd(a, b) {
        var c = a.createElement("div");
        K ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (var e = a.createDocumentFragment(); c.firstChild;) e.appendChild(c.firstChild);
        return e
    }

    function md(a) {
        return "CSS1Compat" == a.compatMode
    }

    function sd(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function td(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    }

    function ud(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function vd(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function wd(a) {
        return ed && void 0 != a.children ? a.children : Pa(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }

    function xd(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function pd(a) {
        return ha(a) && 0 < a.nodeType
    }

    function yd(a) {
        return ha(a) && 1 == a.nodeType
    }

    function zd(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function Ad(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (var e = b; e.parentNode != c;) e = e.parentNode;
        return Bd(e, a)
    }

    function Bd(a, b) {
        for (var c = b; c = c.previousSibling;)
            if (c == a) return -1;
        return 1
    }

    function Cd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Dd(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function Ed(a, b, c, e) {
        if (null != a)
            for (a = a.firstChild; a;) {
                if (b(a) && (c.push(a), e) || Ed(a, b, c, e)) return !0;
                a = a.nextSibling
            }
        return !1
    }
    var Fd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Hd = {
            IMG: " ",
            BR: "\n"
        };

    function Id(a) {
        return Jd(a) && Kd(a)
    }

    function Jd(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }

    function Kd(a) {
        a = a.tabIndex;
        return ea(a) && 0 <= a && 32768 > a
    }

    function Ld(a) {
        if (fd && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Md(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        fd || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Md(a, b, c) {
        if (!(a.nodeName in Fd))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Hd) b.push(Hd[a.nodeName]);
        else
            for (a = a.firstChild; a;) Md(a, b, c), a = a.nextSibling
    }

    function qd(a) {
        if (a && "number" == typeof a.length) {
            if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (w(a)) return "function" == typeof a.item
        }
        return !1
    }

    function Nd(a, b, c, e) {
        if (!b && !c) return null;
        var f = b ? b.toUpperCase() : null;
        return Od(a, function(a) {
            return (!f || a.nodeName == f) && (!c || v(a.className) && E(a.className.split(/\s+/), c))
        }, !0, e)
    }

    function Od(a, b, c, e) {
        c || (a = a.parentNode);
        c = null == e;
        for (var f = 0; a && (c || f <= e);) {
            if (b(a)) return a;
            a = a.parentNode;
            f++
        }
        return null
    }

    function Pd(a) {
        this.g = a || h.document || document
    }
    d = Pd.prototype;
    d.J3 = function(a) {
        return a ? new Pd(Cd(a)) : ta || (ta = new Pd)
    };
    d.D6 = function(a) {
        this.g = a
    };
    d.Gx = function() {
        return this.g
    };
    d.yV = function(a) {
        var b = this.g;
        return v(a) ? b.getElementById(a) : a
    };
    d.u4 = function(a) {
        var b = this.g;
        return v(a) ? b.getElementById(a) : a
    };
    d.nW = Pd.prototype.yV;
    d.zV = function(a, b, c) {
        return id(this.g, a, b, c)
    };
    d.L3 = function(a, b) {
        var c = b || this.g,
            e = c || document;
        return e.querySelectorAll && e.querySelector ? e.querySelectorAll("." + a) : id(document, "*", a, c)
    };
    d.K3 = function(a, b) {
        return hd(a, b || this.g)
    };
    d.v4 = function(a, b) {
        return hd(a, b || this.g)
    };
    d.oW = Pd.prototype.zV;
    d.M6 = jd;
    d.L4 = function(a) {
        a = a || this.yz();
        return ld(a || window)
    };
    d.G3 = function() {
        var a;
        t: {
            var b = this.yz(),
                c = b.document;
            a = 0;
            if (c) {
                a = c.body;
                var e = c.documentElement;
                if (!e || !a) {
                    a = 0;
                    break t
                }
                b = ld(b).height;
                if (md(c) && e.scrollHeight) a = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
                else {
                    var c = e.scrollHeight,
                        f = e.offsetHeight;
                    e.clientHeight != f && (c = a.scrollHeight, f = a.offsetHeight);
                    a = c > b ? c > f ? c : f : c < f ? c : f
                }
            }
        }
        return a
    };
    d.uV = function(a, b, c) {
        var e = this.g,
            f = arguments,
            g = f[0],
            k = f[1];
        if (!dd && k && (k.name || k.type)) {
            g = ["<", g];
            k.name && g.push(' name="', ya(k.name), '"');
            if (k.type) {
                g.push(' type="', ya(k.type), '"');
                var m = {};
                Ac(m, k);
                delete m.type;
                k = m
            }
            g.push(">");
            g = g.join("")
        }
        g = e.createElement(g);
        k && (v(k) ? g.className = k : s(k) ? g.className = k.join(" ") : jd(g, k));
        2 < f.length && od(e, g, f, 2);
        return g
    };
    d.pW = Pd.prototype.uV;
    d.createElement = function(a) {
        return this.g.createElement(a)
    };
    d.U4 = function(a) {
        return this.g.createTextNode(String(a))
    };
    d.g3 = function(a, b, c) {
        var e = this.g,
            f = !!c;
        c = ["<tr>"];
        for (var g = 0; g < b; g++) c.push(f ? "<td>&nbsp;</td>" : "<td></td>");
        c.push("</tr>");
        c = c.join("");
        b = ["<table>"];
        for (g = 0; g < a; g++) b.push(c);
        b.push("</table>");
        a = e.createElement("DIV");
        a.innerHTML = b.join("");
        return a.removeChild(a.firstChild)
    };
    d.A5 = function(a) {
        return rd(this.g, a)
    };
    d.G5 = function() {
        return md(this.g)
    };
    d.yz = function() {
        var a = this.g;
        return a.parentWindow || a.defaultView
    };
    d.I3 = function() {
        return nd(this.g)
    };
    d.H3 = function() {
        var a = this.g,
            b = nd(a),
            a = a.parentWindow || a.defaultView;
        return K && $c("10") && a.pageYOffset != b.scrollTop ? new Lc(b.scrollLeft, b.scrollTop) : new Lc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    d.r3 = function(a) {
        var b;
        t: {
            a = a || this.g;
            try {
                b = a && a.activeElement;
                break t
            } catch (c) {}
            b = null
        }
        return b
    };
    d.appendChild = function(a, b) {
        a.appendChild(b)
    };
    d.xo = function(a, b) {
        od(Cd(a), a, arguments, 1)
    };
    d.T4 = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    d.r6 = sd;
    d.F5 = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    d.E5 = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    d.D5 = td;
    d.X4 = ud;
    d.t6 = vd;
    d.p3 = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (; b = a.firstChild;) c.insertBefore(b, a);
            return ud(a)
        }
    };
    d.V4 = wd;
    d.M3 = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : xd(a.firstChild, !0)
    };
    d.U3 = function(a) {
        return void 0 != a.lastElementChild ? a.lastElementChild : xd(a.lastChild, !1)
    };
    d.Z3 = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : xd(a.nextSibling, !0)
    };
    d.q4 = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : xd(a.previousSibling, !1)
    };
    d.a4 = function(a) {
        if (!a) return null;
        if (a.firstChild) return a.firstChild;
        for (; a && !a.nextSibling;) a = a.parentNode;
        return a ? a.nextSibling : null
    };
    d.r4 = function(a) {
        if (!a) return null;
        if (!a.previousSibling) return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
        return a
    };
    d.R5 = pd;
    d.J5 = yd;
    d.Y5 = function(a) {
        return ha(a) && a.window == a
    };
    d.n4 = function(a) {
        var b;
        if (gd && !(K && $c("9") && !$c("10") && h.SVGElement && a instanceof h.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return yd(b) ? b : null
    };
    d.contains = zd;
    d.d3 = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (K && !ad(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                e = 1 == b.nodeType;
            if (c && e) return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode,
                g = b.parentNode;
            return f == g ? Bd(a, b) : !c && zd(f, b) ? -1 * Ad(a, b) : !e && zd(g, a) ? Ad(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (e ? b.sourceIndex : g.sourceIndex)
        }
        e = Cd(a);
        c = e.createRange();
        c.selectNode(a);
        c.collapse(!0);
        e = e.createRange();
        e.selectNode(b);
        e.collapse(!0);
        return c.compareBoundaryPoints(h.Range.START_TO_END, e)
    };
    d.k3 = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var e = [],
            f = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], k = arguments[b]; k;) g.unshift(k), k = k.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var k = e[0][b], m = 1; m < c; m++)
                if (k != e[m][b]) return g;
            g = k
        }
        return g
    };
    d.j4 = Cd;
    d.N3 = Dd;
    d.O3 = function(a) {
        var b;
        (b = a.contentWindow) || (b = (a = Dd(a)) ? a.parentWindow || a.defaultView : window);
        return b
    };
    d.T6 = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            sd(a);
            var c = Cd(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    };
    d.i4 = function(a) {
        if ("outerHTML" in a) return a.outerHTML;
        var b = Cd(a).createElement("div");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    };
    d.l3 = function(a, b) {
        var c = [];
        return Ed(a, b, c, !0) ? c[0] : void 0
    };
    d.m3 = function(a, b) {
        var c = [];
        Ed(a, b, c, !1);
        return c
    };
    d.L5 = Id;
    d.F6 = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    };
    d.W4 = function(a) {
        var b;
        (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Jd(a) || Kd(a)) : Id(a)) && K ? (a = w(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        }, a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    };
    d.G4 = Ld;
    d.c4 = function(a) {
        return Ld(a).length
    };
    d.d4 = function(a, b) {
        for (var c = b || Cd(a).body, e = []; a && a != c;) {
            for (var f = a; f = f.previousSibling;) e.unshift(Ld(f));
            a = a.parentNode
        }
        return e.join("").replace(/^[\s\xa0]+/, "").replace(/ +/g, " ").length
    };
    d.b4 = function(a, b, c) {
        a = [a];
        for (var e = 0, f = null; 0 < a.length && e < b;)
            if (f = a.pop(), !(f.nodeName in Fd))
                if (3 == f.nodeType) var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                    e = e + g.length;
                else if (f.nodeName in Hd) e += Hd[f.nodeName].length;
        else
            for (g = f.childNodes.length - 1; 0 <= g; g--) a.push(f.childNodes[g]);
        ha(c) && (c.q6 = f ? f.nodeValue.length + b - e - 1 : 0, c.node = f);
        return f
    };
    d.S5 = qd;
    d.w3 = Nd;
    d.v3 = function(a, b, c) {
        return Nd(a, null, b, c)
    };
    d.u3 = Od;

    function Qd(a, b, c, e) {
        a = Cd(a).createEvent("Event");
        a.initEvent(b, c, !0);
        a.detail = e;
        return a
    }

    function Rd(a, b, c, e, f) {
        a = Qd(a, b, e);
        a.which = c;
        a.charCode = c;
        a.keyCode = c;
        f && (a.g = f, a.h = f.h);
        return a
    }

    function Sd(a, b, c) {
        a = Cd(a).createEvent("MouseEvents");
        a.initMouseEvent(b, !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        a.g = c;
        return a
    }

    function L(a, b, c) {
        a.stopPropagation();
        c && a.stopImmediatePropagation && a.stopImmediatePropagation();
        b || a.preventDefault()
    };

    function Td(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return v(a) && a.match(/\S+/g) || []
    }

    function Ud(a, b) {
        return a.classList ? a.classList.contains(b) : E(Td(a), b)
    }

    function Vd(a, b) {
        a.classList ? a.classList.add(b) : Ud(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function Wd(a, b) {
        if (a.classList) Na(b, function(b) {
            Vd(a, b)
        });
        else {
            var c = {};
            Na(Td(a), function(a) {
                c[a] = !0
            });
            Na(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var e in c) a.className += 0 < a.className.length ? " " + e : e
        }
    }

    function Xd(a, b) {
        a.classList ? a.classList.remove(b) : Ud(a, b) && (a.className = Pa(Td(a), function(a) {
            return a != b
        }).join(" "))
    }

    function Yd(a, b, c) {
        c ? Vd(a, b) : Xd(a, b)
    };

    function Zd(a) {
        for (var b = Array.prototype.slice.call(arguments), c; !c && b.length;) c = b.shift();
        for (var e = b.length, f, g = 0; g < e; ++g) f = b[g], f.id && !c.id && (c.id = f.id), Wd(c, Td(f));
        return c
    };

    function $d(a) {
        F.call(this);
        this.g = {};
        this.j = a && a.inject || []
    }
    B($d, F);
    $d.prototype.reset = function() {
        cc(this.wb);
        this.wb = null
    };
    $d.prototype.M = function() {
        this.reset();
        this.j = this.g = null;
        $d.u.M.call(this)
    };

    function ae(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            case 9:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
            case 10:
                return new a(b[0], b[1], b[2],
                    b[3], b[4], b[5], b[6], b[7], b[8], b[9]);
            case 11:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10]);
            case 12:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11]);
            case 13:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12]);
            case 14:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13]);
            case 15:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14]);
            default:
                var c = function() {};
                c.prototype = a.prototype;
                var c = new c,
                    e = a.apply(c, b);
                return Object(e) === e ? e : c
        }
    };

    function be(a, b) {
        $d.call(this, a);
        this.i = a;
        this.l = b;
        this.h = null
    }
    B(be, $d);
    be.prototype.k = function(a) {
        this.h = a;
        return this
    };
    be.prototype.p = function(a) {
        this.g = a;
        return this
    };
    be.prototype.get = function(a, b) {
        var c = ae(this.i, a);
        c.Ca = this.l;
        c.l = b;
        c.$I(b.get("focus"));
        c.initialize();
        if (this.h) {
            var e = b.get(this.h);
            e instanceof Function ? c.D = Zd(c.D, e()) : c.va = e
        }
        c.Jf();
        c.createElement();
        return c
    };
    be.prototype.M = function() {
        this.h = this.i = null;
        be.u.M.call(this)
    };

    function ce(a, b, c) {
        a && a.i && a.i(b, c)
    };

    function de(a, b) {
        for (var c = b.length, e = 0; e < c; ++e) {
            var f = a,
                g = b[e];
            ee(f, g);
            fe(f, g)
        }
    }

    function ee(a, b) {
        ge(b);
        a.prototype.__defineGetter__(b, function() {
            return this[b + "_"]
        })
    }

    function fe(a, b) {
        ge(b);
        var c = b + "_";
        a.prototype.__defineSetter__(b, function(a) {
            if (a !== this[c]) {
                var f = this[c];
                this[c] = a;
                this.B && w(this.B) && this.B(b + ":changed", a, f)
            }
        })
    }

    function ge(a) {
        if (!a.match(/^[a-zA-Z]+$/)) throw Error("Invalid property name");
    };

    function he() {
        I.call(this);
        this.Xb = !1;
        this.D = null
    }
    B(he, I);
    d = he.prototype;
    d.$y = function() {};
    d.C = function(a, b, c) {
        if (this.D) return this.D.addEventListener(a, b, !!c), y(this.D.removeEventListener, this.D, a, b, !!c);
        throw Error("Attempt to register event on " + a + " before DOM element is available.");
    };
    d.B = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        this.wz(a, !1, c)
    };
    d.X = function(a, b) {
        this.wz(a, !0, b)
    };
    d.wz = function(a, b, c) {
        this.Xb = this.Xb || !!this.D;
        if (this.D) a = Qd(this.D, a, b, c), this.D.dispatchEvent(a);
        else {
            if (this.Xb) throw Error("Attempt to dispatch " + a + " without DOM element.");
            if (!C(a, ":changed")) throw Error("Attempt to dispatch " + a + " before DOM element is available.");
        }
    };
    d.M = function() {
        ud(this.D);
        this.D = null;
        he.u.M.call(this)
    };

    function ie() {
        he.call(this);
        this.Ja = []
    }
    B(ie, he);
    d = ie.prototype;
    d.C = function(a, b, c, e) {
        return this.qy(ie.u.C.call(this, a, b, c), this, a, e ? "l" : void 0)
    };
    d.K = function(a, b, c, e) {
        return this.qy(a.C(b, c, e), a, b)
    };
    d.qy = function(a, b, c, e) {
        function f() {
            for (var b = 0, c = g.length; b < c; ++b)
                if (g[b].ap === f) {
                    g.splice(b, 1);
                    break
                }
            a()
        }
        var g = this.Ja;
        g.push({
            Ok: e,
            wb: b,
            event: c,
            ap: f
        });
        return f
    };
    d.ek = function(a) {
        a = a || null;
        for (var b = this.Ja.length - 1; 0 <= b; --b) {
            var c = this.Ja[b];
            c.Ok == a && c.ap()
        }
    };
    d.Td = function(a, b) {
        for (var c = this.Ja.length - 1; 0 <= c; --c) {
            var e = this.Ja[c];
            e.wb !== a || null != b && b != e.event || e.ap()
        }
    };
    d.M = function() {
        this.ek();
        this.ek("l");
        ie.u.M.call(this)
    };

    function je(a) {
        $d.call(this, a);
        this.i = this.l = !1;
        this.h = a
    }
    B(je, $d);
    d = je.prototype;
    d.CU = function() {
        this.l = !0;
        return this
    };
    d.fz = function(a) {
        this.g = a;
        return this
    };
    d.get = function(a) {
        return this.l ? (this.i || (this.i = !0, this.wb = this.h.apply(null, a)), this.wb) : this.h.apply(null, a)
    };
    d.reset = function() {
        je.u.reset.call(this);
        this.i = !1
    };
    d.M = function() {
        this.h = null;
        je.u.M.call(this)
    };

    function ke(a) {
        $d.call(this, a);
        this.h = a;
        this.i = !1
    }
    B(ke, $d);
    ke.prototype.p = function() {
        this.i = !0;
        return this
    };
    ke.prototype.l = function(a) {
        this.g = a;
        return this
    };
    ke.prototype.get = function(a) {
        var b = this.h;
        return this.i ? (this.wb || (this.wb = ae(b, a)), this.wb) : ae(b, a)
    };
    ke.prototype.M = function() {
        this.h = null;
        ke.u.M.call(this)
    };

    function le(a) {
        $d.call(this, a);
        this.wb = a
    }
    B(le, $d);
    le.prototype.get = function() {
        return this.wb
    };
    le.prototype.reset = q;
    le.prototype.M = function() {
        cc(this.wb);
        this.wb = null;
        le.u.M.call(this)
    };

    function me() {
        F.call(this);
        this.id = ++ne;
        this.g = {};
        this.h = [];
        this.register("injector", this)
    }
    B(me, F);
    var ne = 0;
    d = me.prototype;
    d.Va = function(a) {
        a.parent = this;
        this.h.push(a);
        return a
    };
    d.mP = function(a) {
        var b = null;
        a < this.h.length && (b = this.h[a], b.parent = null, this.h.splice(a, 1));
        return b
    };
    d.removeChild = function(a) {
        for (var b = 0, c = this.h.length; b < c; ++b)
            if (this.h[b] === a) return this.mP(b);
        return null
    };
    d.reset = function() {
        var a, b;
        for (b in this.g) a = this.g[b], a.wb !== this && a.reset();
        a = 0;
        for (b = this.h.length; a < b; ++a) this.h[a].reset()
    };
    d.M = function() {
        var a, b;
        for (b in this.g) a = this.g[b], a.wb !== this && cc(a);
        this.g = null;
        a = 0;
        for (b = this.h.length; a < b; ++a) cc(this.h[a]);
        this.parent = this.h = null;
        me.u.M.call(this)
    };
    d.BV = function() {
        return this.parent ? this.parent.BV() : this
    };
    d.f3 = function(a) {
        var b = new me;
        a && a(b);
        return this.Va(b)
    };
    d.ag = function(a, b) {
        cc(this.g[a]);
        return this.g[a] = b
    };
    d.register = function(a, b) {
        var c = new le(b);
        return this.ag(a, c)
    };
    d.Ue = function(a, b, c) {
        b = (new je(b)).CU();
        c && b.fz(c);
        return this.ag(a, b)
    };
    d.Nh = function(a, b, c) {
        b = new je(b);
        c && b.fz(c);
        return this.ag(a, b)
    };
    d.hk = function(a, b, c) {
        b = new ke(b);
        c && b.l(c);
        return this.ag(a, b)
    };
    d.Wb = function(a, b, c, e, f) {
        b = new be(b, a);
        c && b.k(c);
        e && b.p(e);
        this.ag(a, b);
        c && this.P(c, void 0, f);
        return b
    };
    d.P = function(a, b, c) {
        return this.get("templateResolver").register(a, b, c)
    };
    d.dG = function(a) {
        this.get("templateResolver").bb(a)
    };
    d.Fb = function(a, b, c) {
        b = (new ke(b)).p();
        c && b.l(c);
        return this.ag(a, b)
    };
    d.LQ = function(a, b) {
        return this.g[a] = this.g[b]
    };
    d.get = function(a, b, c) {
        function e(a, m) {
            var n = g.jv(a),
                r = g.UH(a, m, c);
            if (!r) {
                if ("opt_" == n.substr(0, 4)) return;
                r = 'Error, injector cannot find declaration for "' + a + '"';
                f !== a && (r += ' while attempting to create "' + f + '"');
                throw Error(r);
            }
            if (r.wb) return r.wb;
            var n = g.kv(r.g),
                u = {};
            Ac(u, m, n);
            var t = {};
            Ac(t, u, b);
            n = r.j.map(function(b) {
                if (b in t) return t[b];
                if (b === f) throw Error("Circular dependency found where " + f + " loaded " + a + " which then required " + b + ".");
                return e(b, u)
            });
            return r.get(n, g)
        }
        var f = this.jv(a),
            g = this;
        b = this.kv(b || {});
        return e(a, {})
    };
    d.jv = function(a) {
        return "string" === typeof a ? a : "temp"
    };
    d.kv = function(a) {
        var b = {};
        if (a)
            for (var c in a) {
                var e = a[c];
                "string" === typeof e && "$" == e.charAt(0) && (e = this.get(e.substr(1)));
                b[c] = e
            }
        return b
    };
    d.UH = function(a, b, c) {
        return "function" === typeof a ? new(c || ke)(a, b) : this.Vn(a)
    };
    d.Vn = function(a) {
        return this.g[a] ? this.g[a] : this.parent && this.parent.Vn instanceof Function ? this.parent.Vn(a) : null
    };
    d.C3 = function() {
        return sc(this.g)
    };
    d.contains = function(a) {
        return a ? !!(this.g[a] || this.parent && this.parent.contains(a)) : !1
    };

    function M() {
        ie.call(this);
        this.p = [];
        this.Kb = {};
        this.l = null;
        this.Ca = "";
        this.model = this.va = this.le = this.parent = null;
        this.isHidden = !1;
        this.onEnter = null;
        this.canBeFocusLeaf = this.isReady = this.isSpeakable = !1;
        this.h = null;
        this.ib = {};
        this.L = this.U = null;
        this.na = 0;
        this.se = this.sd = null
    }
    B(M, ie);
    d = M.prototype;
    d.be = function() {
        if (this.$w())
            if (this.h) this.h.cx();
            else
                for (var a = 0, b = this.p.length; a < b; ++a) this.p[a].be()
    };
    d.bd = function(a) {
        this.h && this.h.mi(a)
    };
    d.Zb = function() {
        if (this.$w())
            if (this.h) this.h.Ln();
            else
                for (var a = 0, b = this.p.length; a < b; ++a) this.p[a].Zb()
    };
    d.Gc = function(a) {
        this.h && this.h.li(a)
    };
    d.$w = function() {
        null === this.sd && (this.sd = this.l.get("environmentModel").Ka);
        return this.sd
    };
    de(M, ["isHidden", "isSpeakable", "model", "onEnter"]);
    d = M.prototype;
    d.$I = function(a) {
        this.U = a
    };
    d.initialize = function() {};
    d.Jf = function() {};
    d.createElement = function() {};
    d.ea = function() {};
    d.UF = function() {
        this.Sf();
        this.C("isHidden:changed", y(this.Sf, this), !1, !0);
        this.C("onEnter:changed", y(this.SR, this), !1, !0);
        this.C("model:changed", y(this.Y, this), !1, !0);
        this.model && this.Y({
            detail: [this.model]
        })
    };
    d.ready = function() {};
    d.Sf = function() {
        this.isHidden && this.ha() ? this.blur() : this.isReady && !this.Xc() && this.H()
    };
    d.SR = function(a) {
        var b = this.hS(a);
        this.C("keyup", y(function(a) {
            13 == a.keyCode && b.apply(this, arguments)
        }, this.yy()))
    };
    d.Y = function(a) {
        this.Td(a.detail[1])
    };
    d.Fd = function(a, b) {
        this.model instanceof I && this.K(this.model, a, b)
    };
    d.fb = function(a) {
        return !!this.parent && !this.isHidden && (0 < this.na || this.canBeFocusLeaf || a || !!this.dd())
    };
    d.ha = function() {
        return !!this.U && this.U.Yo(this)
    };
    d.fa = function() {
        this.U && this.U.IS(this)
    };
    d.blur = function() {
        this.U && this.U.blur(this)
    };
    d.wa = function() {};
    d.xa = function() {};
    d.Hd = function(a) {
        this.L = a
    };
    d.uo = function() {};
    d.Kg = function() {
        return this.U ? this.U.JS(this) : null
    };
    d.dd = function() {
        if (0 < this.na) return this.Kg();
        if (this.L && this.L.fb()) return this.L;
        for (var a = 0, b = this.p.length; a < b; ++a) {
            var c = this.p[a];
            if (c.fb()) return c
        }
        return null
    };
    d.jV = function() {
        this.na++
    };
    d.pV = function() {
        if (0 === this.na) throw Error("Focus is not locked");
        this.na--;
        if (0 === this.na && !this.Xc() && this.ha())
            if (this.fb()) {
                var a = this.dd();
                a && a.fa()
            } else this.blur()
    };
    d.Vf = function(a) {
        var b;
        this.jV();
        try {
            b = a()
        } finally {
            this.pV()
        }
        return b
    };
    d.QN = function(a) {
        return a.target.ad.parent === this
    };
    d.Ba = function() {
        this.isHidden = !1
    };
    d.ga = function() {
        this.isHidden = !0
    };
    d.fC = function(a) {
        this.parent ? this.parent.Vf(y(this.iz, this, a)) : this.iz(a)
    };
    d.iz = function(a) {
        var b = this.isHidden;
        this.isHidden = !0;
        try {
            a()
        } finally {
            this.isHidden = b
        }
    };
    d.Ma = function(a) {
        this.D && (this.ib[a] = !0)
    };
    d.Sa = function(a) {
        this.D && delete this.ib[a]
    };
    d.c3 = function() {
        this.D && (this.ib = {})
    };
    d.Va = function(a) {
        return this.Jy(a, this.vo())
    };
    d.Jy = function(a, b) {
        this.p.splice(b, 0, a);
        a.Cf() && (this.Kb[a.Cf()] = a);
        a.parent = this;
        return this
    };
    d.Lm = function(a) {
        return this.p[a]
    };
    d.Aa = function(a) {
        return this.Kb[a]
    };
    d.Bc = function(a) {
        return (a = this.D.querySelector(a)) && a.ad ? a.ad : null
    };
    d.removeChild = function(a) {
        a = this.p.indexOf(a); - 1 < a && this.dk(a);
        return a
    };
    d.dk = function(a) {
        if (-1 < a && a < this.p.length) {
            var b = this.p[a];
            b === this.L && (this.L = null);
            this.p.splice(a, 1);
            b.Cf() && delete this.Kb[b.Cf()];
            b.blur();
            cc(b);
            return b
        }
        return null
    };
    d.Ht = function() {
        return this.Vf(y(function() {
            for (var a = [], b = 0, c = this.vo(); b < c; ++b) a.push(this.dk(0));
            return a
        }, this))
    };
    d.vo = function() {
        return this.p ? this.p.length : 0
    };
    d.M = function() {
        dc(this.p);
        this.parent && this.parent.removeChild(this);
        this.parent = null;
        cc(this.h);
        this.D && (this.D.ad = null);
        this.U = null;
        delete this.l;
        M.u.M.call(this)
    };
    d.H = function(a) {
        ce(this.D, this, this.yy());
        a && this.Kj(a)
    };
    d.yy = function() {
        return this.parent || this.le || this
    };
    d.hS = function(a) {
        var b = a.detail && a.detail[0];
        a = a.detail && a.detail[1];
        if (b && a) throw Error("Cannot subscribe to press event more than once.");
        if (!w(b)) throw Error("Event handler must be a function.");
        return b
    };
    d.Kj = function(a) {
        for (var b = 0, c = this.p.length; b < c; ++b) this.p[b].H(a)
    };
    d.Ha = function(a, b) {
        if (a.ad) throw Error("showElementIf changes will be erased by the next component render execution");
        b ? Xd(a, "hidden") : Vd(a, "hidden")
    };
    d.mO = function(a, b) {
        if (a.ad) throw Error("makeElementInvisibleIf changes will be erased by the next component render execution");
        b ? Vd(a, "invisible") : Xd(a, "invisible")
    };
    d.Cf = function() {
        return this.D ? this.D.id : ""
    };
    d.ua = function() {
        var a = [];
        this.ha() && a.push("focused");
        this.isHidden && a.push("hidden");
        this.isSpeakable && a.push("speakable");
        this.model || a.push("no-model");
        return a.concat(sc(this.ib))
    };
    M.prototype.getClassName = function() {
        return this.ua().join(" ")
    };

    function oe(a, b, c, e) {
        M.call(this);
        a.CA(this);
        this.h = b;
        this.h.Tc(this);
        this.I = c;
        this.G = e;
        this.title = "";
        this.k = this.g = this.i = this.o = this.j = null;
        this.F = "";
        this.model = null;
        this.boundCancelClickHandler = y(this.hq, this);
        this.boundOkClickHandler = y(this.fq, this);
        this.w = this.A = q;
        this.canBeFocusLeaf = !0
    }
    B(oe, M);
    d = oe.prototype;
    d.ea = function() {
        this.C("keyup", y(this.gS, this));
        this.C("keydown", y(this.fS, this));
        this.C("request-close-dialog", y(this.Iy, this));
        this.C("dialog:complete", y(this.fq, this))
    };
    d.ready = function() {
        this.g = this.Aa("dialog-view");
        this.o = this.Aa("dialog-cancel-button");
        this.j = this.Aa("dialog-ok-button")
    };
    d.wa = function() {
        oe.u.wa.call(this);
        this.be();
        this.FR();
        this.ER()
    };
    d.xa = function() {
        this.Zb();
        this.ty();
        oe.u.xa.call(this)
    };
    d.FR = function() {
        this.zd() || (this.A(), this.A = this.G.Sv("back"))
    };
    d.ER = function() {
        this.model && this.model.$ && (this.w(), this.w = this.G.XQ("legend-for-dialog-" + this.model.$))
    };
    d.ty = function() {
        this.A();
        this.A = q;
        this.w();
        this.w = q
    };
    d.H = function(a) {
        if (this.model && this.l) {
            var b = this.model.$;
            b && b != this.F && (this.nj(), this.F = b, b = pe(b, this.l), b.model = this.model, this.g.Va(b), this.g.D.appendChild(b.D));
            !this.model.mj || this.k && this.k.D || (this.k = pe(this.model.mj, this.l), this.g.Va(this.k), this.D.querySelector(".buttons").appendChild(this.k.D));
            this.title = this.I.T(this.model.title);
            this.UE();
            this.ha() && this.TE()
        } else this.nj();
        oe.u.H.call(this, !1 === a ? !1 : !0)
    };
    d.M = function() {
        this.ty();
        this.nj();
        oe.u.M.call(this)
    };
    d.TE = function() {
        var a = this.model.Cc == this.j.Cf() ? this.j : this.o;
        this.i = a.isHidden ? null : a;
        this.$l() && this.g.fb() ? this.g.fa() : this.i && this.i.fa()
    };
    d.ua = function() {
        var a = oe.u.ua.call(this);
        this.model && this.model.className && a.push(this.model.className);
        return a
    };
    d.UE = function() {
        this.yx() ? (this.Ax(this.o, "dialog-cancel-button", this.model.Ne), this.Ax(this.j, "dialog-ok-button", this.model.Eb)) : (this.o.ga(), this.j.ga())
    };
    d.Ax = function(a, b, c) {
        c ? (a.model = new N(c, b), a.Ba()) : a.ga()
    };
    d.nj = function() {
        this.g.Ht();
        this.F = "";
        this.k = null
    };
    d.gS = function(a) {
        L(a);
        switch (a.keyCode) {
            case 8:
            case 27:
                this.zd() || this.hq()
        }
    };
    d.fS = function(a) {
        L(a);
        switch (a.keyCode) {
            case 39:
                this.j.isHidden || this.g.ha() || (this.i = this.j, this.i.fa());
                break;
            case 37:
                this.o.isHidden || this.g.ha() || (this.i = this.o, this.i.fa());
                break;
            case 38:
                this.$l() && this.g.fa();
                break;
            case 40:
                this.$l() && this.i && this.i.fa()
        }
    };
    d.hq = function() {
        this.model && this.model.Sb && this.model.Sb();
        this.Iy()
    };
    d.fq = function(a) {
        this.model && this.model.xb && this.model.xb(a && a.detail)
    };
    d.Iy = function(a) {
        this.nj();
        a || this.X("request-close-dialog")
    };
    d.$l = function() {
        return this.model && this.model.wf || !this.yx()
    };
    d.yx = function() {
        return !(!this.model || !this.model.lb)
    };
    d.zd = function() {
        return !(!this.model || !this.model.zd)
    };
    oe.inject = ["dialogService", "voiceHelper", "localeService", "legendModel"];

    function O(a, b) {
        this.subtitle = this.mainTitle = this.title = this.className = "";
        this.mj = this.$ = null;
        this.zd = this.lb = !1;
        this.xb = a || q;
        this.Sb = b || q;
        this.Eb = "[[OK|Standard button title in a dialog popup. Accepts changes made by a user.]]";
        this.Ne = "[[Cancel|Standard button title in a dialog popup. Usually closes the dialog without performing any action.]]";
        this.Cc = "dialog-cancel-button";
        this.wf = !1
    };

    function qe(a, b) {
        O.call(this, a, b);
        this.channel = null
    }
    B(qe, O);

    function re(a, b) {
        if (Rb[a] || !b) return a;
        if ("default" === b) return "";
        if ("PL" === a) return 16 === b.length || 32 === b.length ? a + b : b;
        if ("UU" === a) {
            if (22 === b.length) return a + b;
            if (24 === b.length) {
                var c = b.substr(0, 2);
                if (c === a) return b;
                if ("UC" === c) return a + b.substr(2)
            }
            return ""
        }
        return a + b
    };

    function se() {
        this.j = this.h = this.g = this.l = this.p = "";
        this.i = !1
    }
    se.CACHE_TYPE = "branding";

    function te(a, b) {
        this.kb = a || "";
        this.serviceQuery = b || "";
        this.$ = "channelTile";
        this.displayName = this.videoId = this.title = this.imageUrl = "";
        this.i = null;
        this.j = "";
        this.tH = 0;
        this.id = this.username = this.userId = this.l = this.subscribers = "";
        this.Jr = this.videoCount = 0;
        this.h = new se;
        this.oc = !1;
        this.platformUserIcon = this.platformUserName = ""
    }
    te.CACHE_TYPE = "channel";

    function ue(a, b, c, e) {
        this.kb = b;
        this.serviceQuery = c;
        this.Mb = e;
        this.qi = re(e, c);
        this.gi = "request-playback";
        this.activityDescription = "";
        this.gq = !1;
        this.jf = null;
        this.Lk = this.g = "";
        this.channel = null;
        this.durationLabel = this.description = this.Sk = this.i = this.Ok = "";
        this.errorCode = null;
        this.imageUrl = a + "/no_thumbnail.jpg";
        this.p = !1;
        this.uploadedDate = null;
        this.viewCountLabel = this.videoId = this.title = this.uploadedDateLabel = "";
        this.j = this.oc = !1;
        this.liveStartTime = this.liveStartDate = this.badgeText = this.liveBadgeText =
            "";
        this.$ = "videoTile";
        this.l = this.h = this.Ob = null;
        this.Kk = "UU" === this.Mb && "default" === this.serviceQuery;
        this.userAvatarUri = this.user = ""
    }
    ue.CACHE_TYPE = "video";
    ue.inject = ["imagePath", "serviceId", "serviceQuery", "listType"];

    function P(a, b, c) {
        this.id = "";
        this.w = a;
        this.A = b;
        this.o = c
    }

    function Q() {
        this.p = !1;
        this.g = null
    }
    d = Q.prototype;
    d.Wk = function() {
        return this.p
    };
    d.di = function(a) {
        if (this.Wk()) throw Error("Already running");
        this.p = !0;
        this.g = a;
        this.Tb()
    };
    d.Vh = q;
    d.cancel = function() {
        this.Vh();
        this.td()
    };
    d.Ga = function(a, b, c) {
        if (this.Wk()) {
            this.p = !1;
            var e = this.g.w || q,
                f = this.g.A || e,
                g = this.g.o || ma(f, null);
            this.pe();
            c ? g() : b ? f(b) : e(a)
        }
    };
    d.kc = function(a) {
        this.Ga(null, a || "error")
    };
    d.td = function() {
        this.Ga(null, null, !0)
    };
    d.pe = function() {
        this.p = !1;
        this.g = null
    };

    function ve(a, b, c, e) {
        P.call(this, b, c, e);
        this.id = "editVideoDetails";
        this.video = a
    }
    B(ve, P);

    function we(a) {
        this.h = a
    }
    B(we, Q);
    d = we.prototype;
    d.Tb = function() {
        this.Lt()
    };
    d.Vh = function() {
        this.h.B("request-cancel-dialog")
    };
    d.Lt = function(a) {
        this.h.B("request-video-upload-overview", this.g.video, y(this.fG, this), y(this.td, this), y(this.eG, this), a || !1)
    };
    d.eG = function() {
        this.h.B("request-video-privacy", this.g.video, y(this.Lt, this, !0), y(this.td, this))
    };
    d.fG = function() {
        this.hU();
        this.Ga()
    };
    d.hU = function() {
        this.h.B("request-close-dialog")
    };
    we.inject = ["rootDispatcher"];

    function xe(a) {
        P.call(this);
        this.id = "editVideo";
        this.video = a
    }
    B(xe, P);

    function ye(a, b, c) {
        Q.call(this);
        this.h = a;
        this.l = b;
        this.j = c;
        this.i = q
    }
    B(ye, Q);
    d = ye.prototype;
    d.Tb = function() {
        this.dr();
        this.i = this.l.get(this.g.video.videoId, y(this.VF, this), y(this.er, this))
    };
    d.dr = function() {
        this.h.B("request-loading-dialog", y(this.td, this))
    };
    d.VF = function(a) {
        a.channel = this.g.video.channel;
        this.g.video = a;
        this.i = y(this.j.cancel, this.j);
        a = new ve(a, y(this.bF, this), y(this.kc, this), y(this.td, this));
        this.j.di(a)
    };
    d.Vh = function() {
        this.h.B("request-cancel-dialog")
    };
    d.bF = function() {
        this.dr();
        this.h.B("invalidate-uploads");
        this.i = this.l.p(this.g.video, y(this.bC, this), y(this.er, this))
    };
    d.pe = function() {
        this.i();
        ye.u.pe.call(this)
    };
    d.iU = function() {
        this.h.B("request-close-dialog")
    };
    d.er = function() {
        this.h.B("request-video-edit-error", y(this.kc, this))
    };
    d.bC = function() {
        this.iU();
        this.Ga()
    };
    ye.inject = ["rootDispatcher", "apiaryVideos", "editVideoDetails", "environmentModel"];

    function N(a, b, c, e, f, g, k) {
        I.call(this);
        this.label = a;
        this.type = b || "";
        this.payload = c || null;
        this.$ = e || "button";
        this.buttonClass = f || "";
        this.isSpeakable = void 0 === g ? !0 : g;
        this.enabled = !0;
        this.rateLimit = 0;
        this.$g = k || this.label;
        this.aq = null
    }
    B(N, I);
    de(N, ["enabled"]);

    function ze(a) {
        I.call(this);
        this.length = 0;
        this.items = [];
        0 < arguments.length && this.push(a)
    }
    B(ze, I);
    d = ze.prototype;
    d.push = function(a) {
        this.uz("push", a)
    };
    d.unshift = function(a) {
        this.uz("unshift", a)
    };
    d.pf = function() {
        return this
    };
    d.Fa = function() {
        return this.items.slice()
    };
    d.ya = function(a) {
        return this.items[a]
    };
    d.Ef = function(a) {
        return Ma(this.items, a)
    };
    d.ma = function(a) {
        this.items = a.slice();
        this.length = a.length;
        this.ge(this.items)
    };
    d.J6 = function(a, b) {
        this.items[a] = b;
        this.length = this.items.length;
        this.ge(b)
    };
    d.S = function() {
        return this.length
    };
    d.slice = function(a, b) {
        var c = new ze,
            e;
        switch (arguments.length) {
            case 0:
                e = this.items.slice();
                break;
            case 1:
                e = this.items.slice(a);
                break;
            case 2:
                e = this.items.slice(a, b)
        }
        c.push(e);
        return c
    };
    d.splice = function(a, b, c) {
        var e;
        switch (arguments.length) {
            case 0:
                e = this.items.splice();
                break;
            case 1:
                e = this.items.splice(a);
                break;
            case 2:
                e = this.items.splice(a, b);
                break;
            default:
                e = this.items.splice.apply(this.items, arguments)
        }
        this.length = this.items.length;
        this.ge(this.items);
        return new ze(e)
    };
    d.clear = function() {
        this.length = this.items.length = 0;
        this.ge()
    };
    d.iO = function(a) {
        this.items.sort(a || bb);
        this.ge();
        return this
    };
    d.ge = function(a) {
        this.B("items:changed", a)
    };
    d.uz = function(a, b) {
        var c = s(b) ? b : [b],
            e = c.length;
        0 < e && (this.items[a].apply(this.items, c), this.length += e, this.ge(b))
    };

    function R() {
        ze.call(this);
        this.h = this.l = -1;
        this.j = !0;
        this.p = y(this.DJ, this)
    }
    B(R, ze);
    d = R.prototype;
    d.Ia = function(a) {
        if (!this.Yu(a)) return !1;
        var b = this.l;
        this.l = a;
        this.B("selectedIndex:changed", a, b);
        return !0
    };
    d.Fe = function(a) {
        a = this.Ef(a);
        return 0 <= a ? this.Ia(a) : !1
    };
    d.ra = function() {
        return this.l
    };
    d.ec = function(a, b) {
        if (0 === a) return !1;
        var c = this.S(),
            e = this.ra();
        if (0 == c || 0 > e) return !1;
        e += a;
        if (b) e = 0 <= e ? e % c : c + ((e + 1) % c - 1);
        else if (0 > e || e >= c) return !1;
        var f = e,
            g = 0 < a ? 1 : -1;
        do {
            if (this.Ia(e)) return !0;
            e += g;
            if (b) e += c, e %= c;
            else if (0 > e || e >= c) break
        } while (e !== f);
        return !1
    };
    d.Db = function() {
        return this.ya(this.ra())
    };
    d.dS = function() {
        return this.j
    };
    d.eS = function(a) {
        this.j != a && (this.j = a, this.Wn())
    };
    d.Yu = function(a) {
        return this.Uo(a) && a !== this.ra()
    };
    d.Uo = function(a) {
        return isNaN(a) || -1 > a || a >= this.S() ? !1 : -1 === a ? !this.j || !this.Vx() : this.ck(a)
    };
    d.ck = function(a) {
        return this.p(this.ya(a))
    };
    d.DJ = function(a) {
        return !(a instanceof N) || a.enabled
    };
    d.Vx = function() {
        for (var a = 0, b = this.S(); a < b; ++a)
            if (this.ck(a)) return !0;
        return !1
    };
    d.ge = function(a) {
        if (-1 < this.h) {
            var b = this.h;
            this.h = -1;
            this.jO(b)
        } else this.Wn();
        R.u.ge.call(this, a)
    };
    d.jO = function(a) {
        var b = this.S();
        if (a >= b)
            for (a = this.ra(); - 1 < b--;) {
                if (b === a)
                    if (this.Uo(b)) break;
                    else continue;
                if (this.Ia(b)) break
            } else this.Ia(a), this.Wn()
    };
    d.Wn = function() {
        if (!this.Uo(this.ra()))
            if (this.Vx())
                for (var a = 0, b = this.S(); a < b && !this.Ia(a); ++a);
            else this.Ia(-1)
    };
    d.ma = function(a, b) {
        this.h = ea(b) ? b : -1;
        R.u.ma.call(this, a)
    };

    function Ae(a) {
        O.call(this);
        this.title = "[[Modify|Title of a dialog where user can edit or delete an uploaded video]]";
        this.Eb = "";
        this.$ = "modifyVideo";
        this.wf = this.lb = !0;
        this.video = a;
        this.list = new R;
        this.h = new N("[[Edit video|Button that opens video editing dialog]]", "run-process", new xe(a), "labelButton", "modify-edit-button");
        this.g = new N("[[Delete video|Button that opens video deletion dialog]]", "request-delete-video-dialog", null, "labelButton", "modify-delete-button");
        this.list.ma([this.h, this.g])
    }
    B(Ae, O);

    function Be(a, b) {
        O.call(this, a, b);
        this.title = "[[Playback Error|Title of dialog displayed when a video cannot be played.|1376268536]]";
        this.$ = "playerErrorDialog";
        this.lb = !0;
        this.className = "player-error-dialog";
        this.Eb = "[[Next Video|Button title in a dialog popup. Proceeds playback to the next video.]]";
        this.Ne = "[[Back|Button title in a dialog popup. Closes the dialog.|951825159]]";
        this.hc = ""
    }
    B(Be, O);

    function Ce() {
        O.call(this);
        this.$ = "qrDialog";
        this.qrCodeUrl = this.baseUrl = ""
    }
    B(Ce, O);

    function De() {
        O.call(this);
        this.$ = "scrollPaneDialog";
        this.contentUrl = ""
    }
    B(De, O);

    function Ee(a, b) {
        O.call(this, a, b);
        this.bodyText = "";
        this.Cc = "dialog-ok-button";
        this.wf = !0;
        this.Eb = "[[Dismiss|Text on button that dismisses dialog]]";
        this.subtitle = this.mainTitle = this.title = "";
        this.$ = "sets-onboarding";
        this.zd = this.lb = !0
    }
    B(Ee, O);

    function Fe(a, b, c) {
        O.call(this, b, c);
        this.message = a
    }
    B(Fe, O);

    function Ge(a, b) {
        O.call(this, a, b);
        this.video = null
    }
    B(Ge, O);

    function He(a, b, c, e, f) {
        O.call(this, a, b);
        this.OH = c;
        this.title = "[[Basic info|Title of the video overview dialog.]]";
        this.Eb = "[[Upload|In the video overview dialog, the title of the button for proceeding with the upload process.]]";
        this.$ = "video-overview";
        this.mj = "uploadTerms";
        this.lb = !0;
        this.Cc = "dialog-ok-button";
        this.videoModel = e;
        this.BD = f;
        this.wf = !0
    }
    B(He, O);

    function Ie(a, b, c) {
        O.call(this, this.CB, b);
        this.l = a;
        this.title = "[[Privacy|Title of the dialog for setting the privacy status of a video.]]";
        this.$ = "video-privacy";
        this.Cc = "dialog-ok-button";
        this.lb = !0;
        this.video = c;
        this.g = this.i = this.j = this.h = null;
        this.privacyButtonGrid = this.DB();
        this.wf = !0
    }
    B(Ie, O);
    d = Ie.prototype;
    d.XV = function(a) {
        this.g = a.Ob;
        this.Fv()
    };
    d.Fv = function() {
        var a = this.g || this.video.Ob;
        this.i.g(a);
        this.j.g(a);
        this.h.g(a)
    };
    d.CB = function(a) {
        this.g && (this.video.Ob = this.g);
        this.l(a)
    };
    d.un = function(a) {
        var b = new Je;
        a.push(b);
        return b
    };
    d.DB = function() {
        var a = new Ke,
            b = [];
        this.i = this.un(b);
        this.j = this.un(b);
        this.h = this.un(b);
        this.i.Ob = "public";
        this.j.Ob = "unlisted";
        this.h.Ob = "private";
        a.Dl(b, 1);
        return a
    };

    function Le(a, b, c, e) {
        O.call(this, a, b);
        this.$ = "video-upload-status";
        this.className = "text-dialog";
        this.lb = !0;
        this.video = c;
        this.progress = e;
        this.message = ""
    }
    B(Le, O);

    function Me(a, b, c, e) {
        Le.call(this, a, b, c, e);
        this.title = "[[Upload complete!|Title of a dialog that is displayed once a video has been uploaded.]]";
        this.$ = "video-upload-status";
        this.className = "text-dialog";
        this.Eb = "[[Got it!|Confirmation button title, closes dialog acknowledging displayed message.]]";
        this.Ne = "";
        this.Cc = "dialog-ok-button";
        this.message = "[[Your video has now been uploaded, and will finish processing shortly.|Text message displayed after a video is being uploaded to YouTube servers.]]"
    }
    B(Me, Le);

    function Ne(a, b) {
        O.call(this, a, a);
        this.title = "[[Upload error|Displayed once a video uploaded has failed.]]";
        this.$ = "videoUploadError";
        this.errorCode = b
    }
    B(Ne, O);

    function Oe(a, b, c, e) {
        Le.call(this, a, b, c, e);
        this.title = "[[Uploading...|Title of a dialog that is displayed while a video being uploaded.]]";
        this.message = "[[Your video is being uploaded. Please do not turn off your console or close YouTube until uploading is complete.|Text message displayed while video is being uploaded.]]";
        this.Eb = ""
    }
    B(Oe, Le);

    function Pe(a, b) {
        O.call(this, a, b);
        this.title = "[[Choose video|Title of a dialog that allows uploading videos.]]";
        this.$ = "video-uploads";
        this.lb = !0;
        this.Eb = "";
        this.wf = !0
    }
    B(Pe, O);
    var Qe = /^-?(?:|0|[1-9][0-9]*)(?:\.[0-9]*)?$/;

    function Re(a) {
        var b = [];
        a = Se(a);
        for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }

    function Se(a) {
        var b = {},
            c;
        for (c in a) {
            var e = a[c];
            "undefined" !== typeof e && null !== e && "" !== e && (b[c] = Te(e || 0))
        }
        return b
    }

    function Te(a) {
        if ("number" === typeof a) return a;
        if (a && "string" === typeof a && Qe.test(a)) return Number(a);
        if ("string" === typeof a && "" === a.trim()) return a;
        var b = String(a).toLowerCase();
        return "true" === b || 1 == a ? !0 : "false" === b || 0 == a ? !1 : a
    }

    function Ue(a) {
        var b = {};
        if (a) {
            a = a.replace(/^\?/, "");
            a = a.split("&");
            for (var c, e = 0, f = a.length; e < f; ++e) c = a[e].split("="), b[c.shift()] = Te(c.join("="))
        }
        return b
    }

    function Ve(a, b) {
        vc(b) || (a += "?" + Re(b));
        return a
    };

    function We() {
        I.call(this)
    }
    B(We, I);
    We.prototype.zx = function() {};
    We.prototype.G = function(a) {
        return 401 == a.g || a.h
    };

    function S(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.k = this.h = !1;
        this.Xs = !0
    }
    S.prototype.EV = function() {};
    S.prototype.nc = function() {};
    S.prototype.stopPropagation = function() {
        this.h = !0
    };
    S.prototype.preventDefault = function() {
        this.k = !0;
        this.Xs = !1
    };

    function Xe(a) {
        Xe[" "](a);
        return a
    }
    Xe[" "] = q;
    var Ye = !K || ad(9),
        Ze = !K || ad(9),
        $e = K && !$c("9");
    !Sc || $c("528");
    Rc && $c("1.9b") || K && $c("8") || Qc && $c("9.5") || Sc && $c("528");
    Rc && !$c("8") || K && $c("9");

    function af(a) {
        return Sc ? "webkit" + a : Qc ? "o" + a.toLowerCase() : a.toLowerCase()
    }
    af("AnimationStart");
    af("AnimationEnd");
    af("AnimationIteration");
    af("TransitionEnd");

    function bf(a, b) {
        S.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.i = this.screenY = this.screenX = this.clientY = this.clientX = this.p = this.l = 0;
        this.j = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.o = !1;
        this.g = null;
        a && this.CC(a, b)
    }
    B(bf, S);
    var cf = [1, 4, 2];
    d = bf.prototype;
    d.CC = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (Rc) {
                var f;
                t: {
                    try {
                        Xe(e.nodeName);
                        f = !0;
                        break t
                    } catch (g) {}
                    f = !1
                }
                f || (e = null)
            }
        } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        this.l = Sc || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.p = Sc || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX ||
            0;
        this.screenY = a.screenY || 0;
        this.i = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.j = a.metaKey;
        this.o = Pc ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && this.preventDefault()
    };
    d.IV = function(a) {
        return Ye ? this.g.button == a : "click" == this.type ? 0 == a : !!(this.g.button & cf[a])
    };
    d.P5 = function() {
        return this.IV(0) && !(Sc && Pc && this.ctrlKey)
    };
    d.stopPropagation = function() {
        bf.u.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    d.preventDefault = function() {
        bf.u.preventDefault.call(this);
        var a = this.g;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, $e) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    d.y3 = function() {
        return this.g
    };
    d.EV = function() {};
    var df = "closure_listenable_" + (1E6 * Math.random() | 0);

    function ef(a) {
        return !(!a || !a[df])
    }
    var ff = 0;

    function gf(a, b, c, e, f, g) {
        this.listener = a;
        this.h = b;
        this.src = c;
        this.type = e;
        this.Rf = !!f;
        this.$d = g;
        this.key = ++ff;
        this.Qf = this.Bj = !1
    }
    gf.prototype.g = function() {
        this.Qf = !0;
        this.$d = this.src = this.h = this.listener = null
    };

    function jf(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    }
    d = jf.prototype;
    d.OG = function() {
        return this.h
    };
    d.b5 = function() {
        var a = 0,
            b;
        for (b in this.g) a += this.g[b].length;
        return a
    };
    d.add = function(a, b, c, e, f) {
        var g = a.toString();
        a = this.g[g];
        a || (a = this.g[g] = [], this.h++);
        var k = kf(a, b, e, f); - 1 < k ? (b = a[k], c || (b.Bj = !1)) : (b = new gf(b, null, this.src, g, !!e, f), b.Bj = c, a.push(b));
        return b
    };
    d.remove = function(a, b, c, e) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var f = this.g[a];
        b = kf(f, b, c, e);
        return -1 < b ? (f[b].g(), La.splice.call(f, b, 1), 0 == f.length && (delete this.g[a], this.h--), !0) : !1
    };
    d.Au = function(a) {
        var b = a.type;
        if (!(b in this.g)) return !1;
        var c = Ua(this.g[b], a);
        c && (a.g(), 0 == this.g[b].length && (delete this.g[b], this.h--));
        return c
    };
    d.lP = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.g)
            if (!a || c == a) {
                for (var e = this.g[c], f = 0; f < e.length; f++) ++b, e[f].g();
                delete this.g[c];
                this.h--
            }
        return b
    };
    d.Ix = function(a, b) {
        var c = this.g[a.toString()],
            e = [];
        if (c)
            for (var f = 0; f < c.length; ++f) {
                var g = c[f];
                g.Rf == b && e.push(g)
            }
        return e
    };
    d.$m = function(a, b, c, e) {
        a = this.g[a.toString()];
        var f = -1;
        a && (f = kf(a, b, c, e));
        return -1 < f ? a[f] : null
    };
    d.kP = function(a, b) {
        var c = l(a),
            e = c ? a.toString() : "",
            f = l(b);
        return oc(this.g, function(a) {
            for (var k = 0; k < a.length; ++k)
                if (!(c && a[k].type != e || f && a[k].Rf != b)) return !0;
            return !1
        })
    };

    function kf(a, b, c, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.Qf && g.listener == b && g.Rf == !!c && g.$d == e) return f
        }
        return -1
    };
    var lf = "closure_lm_" + (1E6 * Math.random() | 0),
        mf = {},
        nf = 0;

    function of(a, b, c, e, f) {
        if (s(b)) {
            for (var g = 0; g < b.length; g++) of(a, b[g], c, e, f);
            return null
        }
        c = pf(c);
        return ef(a) ? a.yd(b, c, e, f) : qf(a, b, c, !1, e, f)
    }

    function qf(a, b, c, e, f, g) {
        if (!b) throw Error("Invalid event type");
        var k = !!f,
            m = rf(a);
        m || (a[lf] = m = new jf(a));
        c = m.add(b, c, e, f, g);
        if (c.h) return c;
        e = sf();
        c.h = e;
        e.src = a;
        e.listener = c;
        a.addEventListener ? a.addEventListener(b.toString(), e, k) : a.attachEvent(tf(b.toString()), e);
        nf++;
        return c
    }

    function sf() {
        var a = uf,
            b = Ze ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function vf(a, b, c, e, f) {
        if (s(b)) {
            for (var g = 0; g < b.length; g++) vf(a, b[g], c, e, f);
            return null
        }
        c = pf(c);
        return ef(a) ? a.DV(b, c, e, f) : qf(a, b, c, !0, e, f)
    }

    function wf(a, b, c, e, f) {
        if (s(b)) {
            for (var g = 0; g < b.length; g++) wf(a, b[g], c, e, f);
            return null
        }
        c = pf(c);
        if (ef(a)) return a.Ej(b, c, e, f);
        if (!a) return !1;
        e = !!e;
        if (a = rf(a))
            if (b = a.$m(b, c, e, f)) return xf(b);
        return !1
    }

    function xf(a) {
        if (ea(a) || !a || a.Qf) return !1;
        var b = a.src;
        if (ef(b)) return b.qu(a);
        var c = a.type,
            e = a.h;
        b.removeEventListener ? b.removeEventListener(c, e, a.Rf) : b.detachEvent && b.detachEvent(tf(c), e);
        nf--;
        (c = rf(b)) ? (c.Au(a), 0 == c.OG() && (c.src = null, b[lf] = null)) : a.g();
        return !0
    }

    function tf(a) {
        return a in mf ? mf[a] : mf[a] = "on" + a
    }

    function yf(a, b, c, e) {
        var f = 1;
        if (a = rf(a))
            if (b = a.g[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.Rf == c && !g.Qf && (f &= !1 !== zf(g, e))
                }
            return Boolean(f)
    }

    function zf(a, b) {
        var c = a.listener,
            e = a.$d || a.src;
        a.Bj && xf(a);
        return c.call(e, b)
    }

    function uf(a, b) {
        if (a.Qf) return !0;
        if (!Ze) {
            var c = b || p("window.event"),
                e = new bf(c, this),
                f = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break t
                    } catch (k) {
                        g = !0
                    }
                    if (g || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (g = e.currentTarget; g; g = g.parentNode) c.push(g);
                for (var g = a.type, m = c.length - 1; !e.h && 0 <= m; m--) e.currentTarget = c[m],
                f &= yf(c[m], g, !0, e);
                for (m = 0; !e.h && m < c.length; m++) e.currentTarget = c[m],
                f &= yf(c[m], g, !1, e)
            }
            return f
        }
        return zf(a, new bf(b, this))
    }

    function rf(a) {
        a = a[lf];
        return a instanceof jf ? a : null
    }
    var Af = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function pf(a) {
        if (w(a)) return a;
        a[Af] || (a[Af] = function(b) {
            return a.handleEvent(b)
        });
        return a[Af]
    };

    function Bf() {
        F.call(this);
        this.h = new jf(this);
        this.na = this;
        this.O = null
    }
    B(Bf, F);
    Bf.prototype[df] = !0;
    d = Bf.prototype;
    d.rx = function() {
        return this.O
    };
    d.L6 = function(a) {
        this.O = a
    };
    d.addEventListener = function(a, b, c, e) {
        of(this, a, b, c, e)
    };
    d.removeEventListener = function(a, b, c, e) {
        wf(this, a, b, c, e)
    };
    d.dispatchEvent = function(a) {
        this.qx();
        var b, c = this.rx();
        if (c) {
            b = [];
            for (var e = 1; c; c = c.rx()) b.push(c), ++e
        }
        c = this.na;
        e = a.type || a;
        if (v(a)) a = new S(a, c);
        else if (a instanceof S) a.target = a.target || c;
        else {
            var f = a;
            a = new S(e, c);
            Ac(a, f)
        }
        var f = !0,
            g;
        if (b)
            for (var k = b.length - 1; !a.h && 0 <= k; k--) g = a.currentTarget = b[k], f = g.Zj(e, !0, a) && f;
        a.h || (g = a.currentTarget = c, f = g.Zj(e, !0, a) && f, a.h || (f = g.Zj(e, !1, a) && f));
        if (b)
            for (k = 0; !a.h && k < b.length; k++) g = a.currentTarget = b[k], f = g.Zj(e, !1, a) && f;
        return f
    };
    d.M = function() {
        Bf.u.M.call(this);
        this.WQ();
        this.O = null
    };
    d.yd = function(a, b, c, e) {
        this.qx();
        return this.h.add(String(a), b, !1, c, e)
    };
    d.DV = function(a, b, c, e) {
        return this.h.add(String(a), b, !0, c, e)
    };
    d.Ej = function(a, b, c, e) {
        return this.h.remove(String(a), b, c, e)
    };
    d.qu = function(a) {
        return this.h.Au(a)
    };
    d.WQ = function(a) {
        return this.h ? this.h.lP(a) : 0
    };
    d.Zj = function(a, b, c) {
        a = this.h.g[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var e = !0, f = 0; f < a.length; ++f) {
            var g = a[f];
            if (g && !g.Qf && g.Rf == b) {
                var k = g.listener,
                    m = g.$d || g.src;
                g.Bj && this.qu(g);
                e = !1 !== k.call(m, c) && e
            }
        }
        return e && 0 != c.Xs
    };
    d.Ix = function(a, b) {
        return this.h.Ix(String(a), b)
    };
    d.YG = function(a, b, c, e) {
        return this.h.$m(String(a), b, c, e)
    };
    d.a5 = function(a, b) {
        var c = l(a) ? String(a) : void 0;
        return this.h.kP(c, b)
    };
    d.S6 = function(a) {
        this.na = a
    };
    d.qx = function() {};

    function Cf(a) {
        h.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Df;

    function Ef() {
        var a = h.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                e = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = y(function(a) {
                        if (("*" == e || a.origin == e) && a.data == c) this.port1.onmessage()
                    },
                    this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, e)
                }
            }
        });
        if ("undefined" !== typeof a && !C(J, "Trident") && !C(J, "MSIE")) {
            var b = new a,
                c = {},
                e = c;
            b.port1.onmessage = function() {
                if (l(c.next)) {
                    c = c.next;
                    var a = c.vz;
                    c.vz = null;
                    a()
                }
            };
            return function(a) {
                e.next = {
                    vz: a
                };
                e = e.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
            var b = document.createElement("script");
            b.onreadystatechange =
                function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
            document.documentElement.appendChild(b)
        } : function(a) {
            h.setTimeout(a, 0)
        }
    };

    function Ff(a, b) {
        Gf || Hf();
        If || (Gf(), If = !0);
        Jf.push(new Kf(a, b))
    }
    var Gf;

    function Hf() {
        if (h.Promise && h.Promise.resolve) {
            var a = h.Promise.resolve();
            Gf = function() {
                a.then(Lf)
            }
        } else Gf = function() {
            var a = Lf;
            !w(h.setImmediate) || h.Window && h.Window.prototype.setImmediate == h.setImmediate ? (Df || (Df = Ef()), Df(a)) : h.setImmediate(a)
        }
    }
    var If = !1,
        Jf = [];

    function Lf() {
        for (; Jf.length;) {
            var a = Jf;
            Jf = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.ub.call(c.g)
                } catch (e) {
                    Cf(e)
                }
            }
        }
        If = !1
    }

    function Kf(a, b) {
        this.ub = a;
        this.g = b
    };

    function Mf(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }

    function Nf(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Of(a, b) {
        this.h = 0;
        this.p = void 0;
        this.g = this.i = null;
        this.j = this.l = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                c.uf(2, a)
            }, function(a) {
                c.uf(3, a)
            })
        } catch (e) {
            this.uf(3, e)
        }
    }
    Of.prototype.then = function(a, b, c) {
        return this.sz(w(a) ? a : null, w(b) ? b : null, c)
    };
    Mf(Of);
    d = Of.prototype;
    d.d7 = function(a, b) {
        function c() {
            try {
                a.call(b)
            } catch (c) {
                Pf.call(null, c)
            }
        }
        this.Px({
            Gf: null,
            Ao: c,
            zo: c
        });
        return this
    };
    d.e7 = function(a, b) {
        return this.sz(null, a, b)
    };
    d.cancel = function(a) {
        0 == this.h && Ff(function() {
            var b = new Qf(a);
            this.Du(b)
        }, this)
    };
    d.Du = function(a) {
        0 == this.h && (this.i ? this.i.GL(this, a) : this.uf(3, a))
    };
    d.GL = function(a, b) {
        if (this.g) {
            for (var c = 0, e = -1, f = 0, g; g = this.g[f]; f++)
                if (g = g.Gf)
                    if (c++, g == a && (e = f), 0 <= e && 1 < c) break;
            0 <= e && (0 == this.h && 1 == c ? this.Du(b) : (c = this.g.splice(e, 1)[0], this.Js(c, 3, b)))
        }
    };
    d.Px = function(a) {
        this.g && this.g.length || 2 != this.h && 3 != this.h || this.rt();
        this.g || (this.g = []);
        this.g.push(a)
    };
    d.sz = function(a, b, c) {
        var e = {
            Gf: null,
            zo: null,
            Ao: null
        };
        e.Gf = new Of(function(f, g) {
            e.zo = a ? function(b) {
                try {
                    var e = a.call(c, b);
                    f(e)
                } catch (n) {
                    g(n)
                }
            } : f;
            e.Ao = b ? function(a) {
                try {
                    var e = b.call(c, a);
                    !l(e) && a instanceof Qf ? g(a) : f(e)
                } catch (n) {
                    g(n)
                }
            } : g
        });
        e.Gf.i = this;
        this.Px(e);
        return e.Gf
    };
    d.dx = function(a) {
        this.h = 0;
        this.uf(2, a)
    };
    d.ex = function(a) {
        this.h = 0;
        this.uf(3, a)
    };
    d.uf = function(a, b) {
        if (0 == this.h) {
            if (this == b) a = 3, b = new TypeError("Promise cannot resolve to itself");
            else {
                if (Nf(b)) {
                    this.h = 1;
                    b.then(this.dx, this.ex, this);
                    return
                }
                if (ha(b)) try {
                    var c = b.then;
                    if (w(c)) {
                        this.fO(b, c);
                        return
                    }
                } catch (e) {
                    a = 3, b = e
                }
            }
            this.p = b;
            this.h = a;
            this.rt();
            3 != a || b instanceof Qf || Rf(this, b)
        }
    };
    d.fO = function(a, b) {
        function c(a) {
            g || (g = !0, f.ex(a))
        }

        function e(a) {
            g || (g = !0, f.dx(a))
        }
        this.h = 1;
        var f = this,
            g = !1;
        try {
            b.call(a, e, c)
        } catch (k) {
            c(k)
        }
    };
    d.rt = function() {
        this.l || (this.l = !0, Ff(this.hR, this))
    };
    d.hR = function() {
        for (; this.g && this.g.length;) {
            var a = this.g;
            this.g = [];
            for (var b = 0; b < a.length; b++) this.Js(a[b], this.h, this.p)
        }
        this.l = !1
    };
    d.Js = function(a, b, c) {
        2 == b ? a.zo(c) : (a.Gf && this.uU(), a.Ao(c))
    };
    d.W2 = function() {};
    d.pQ = function() {};
    d.uU = function() {
        var a;
        for (a = this; a && a.j; a = a.i) a.j = !1
    };

    function Rf(a, b) {
        a.j = !0;
        Ff(function() {
            a.j && (a.pQ(b), Pf.call(null, b))
        })
    }
    var Pf = Cf;

    function Qf(a) {
        sa.call(this, a)
    }
    B(Qf, sa);
    Qf.prototype.name = "cancel";

    function Sf(a, b) {
        Bf.call(this);
        this.g = a || 1;
        this.i = b || h;
        this.j = y(this.UD, this);
        this.l = A()
    }
    B(Sf, Bf);
    Sf.prototype.enabled = !1;
    d = Sf.prototype;
    d.uc = null;
    d.Ho = function() {
        return this.g
    };
    d.pi = function(a) {
        this.g = a;
        this.uc && this.enabled ? (this.stop(), this.Wd()) : this.uc && this.stop()
    };
    d.UD = function() {
        if (this.enabled) {
            var a = A() - this.l;
            0 < a && a < .8 * this.g ? this.uc = this.i.setTimeout(this.j, this.g - a) : (this.uc && (this.i.clearTimeout(this.uc), this.uc = null), this.SD(), this.enabled && (this.uc = this.i.setTimeout(this.j, this.g), this.l = A()))
        }
    };
    d.SD = function() {
        this.dispatchEvent("tick")
    };
    d.Wd = function() {
        this.enabled = !0;
        this.uc || (this.uc = this.i.setTimeout(this.j, this.g), this.l = A())
    };
    d.stop = function() {
        this.enabled = !1;
        this.uc && (this.i.clearTimeout(this.uc), this.uc = null)
    };
    d.M = function() {
        Sf.u.M.call(this);
        this.stop();
        delete this.i
    };

    function Tf(a, b, c) {
        if (w(a)) c && (a = y(a, c));
        else if (a && "function" == typeof a.handleEvent) a = y(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : h.setTimeout(a, b || 0)
    };

    function Uf(a, b, c) {
        F.call(this);
        this.g = a;
        this.j = b || 0;
        this.h = c;
        this.i = y(this.zr, this)
    }
    B(Uf, F);
    d = Uf.prototype;
    d.$b = 0;
    d.M = function() {
        Uf.u.M.call(this);
        this.stop();
        delete this.g;
        delete this.h
    };
    d.fm = function(a) {
        this.stop();
        this.$b = Tf(this.i, l(a) ? a : this.j)
    };
    d.stop = function() {
        this.Sn() && h.clearTimeout(this.$b);
        this.$b = 0
    };
    d.ZU = function() {
        this.stop();
        this.zr()
    };
    d.n3 = function() {
        this.Sn() && this.ZU()
    };
    d.Sn = function() {
        return 0 != this.$b
    };
    d.zr = function() {
        this.$b = 0;
        this.g && this.g.call(this.h)
    };

    function Vf(a, b) {
        F.call(this);
        this.i = a;
        this.h = b;
        this.g = new Uf(y(this.oE, this), 0, this)
    }
    B(Vf, F);
    d = Vf.prototype;
    d.lh = 0;
    d.hm = 0;
    d.gm = !1;
    d.M = function() {
        this.g.nc();
        delete this.i;
        delete this.h;
        Vf.u.M.call(this)
    };
    d.QJ = function(a, b) {
        this.stop();
        this.gm = !1;
        var c = b || 0;
        this.lh = Math.max(a || 0, 0);
        this.hm = 0 > c ? -1 : A() + c;
        this.g.fm(0 > c ? this.lh : Math.min(this.lh, c))
    };
    d.stop = function() {
        this.g.stop()
    };
    d.S4 = function() {
        return this.g.Sn()
    };
    d.I5 = function() {
        return this.gm
    };
    d.Dd = function() {};
    d.TD = function() {};
    d.oE = function() {
        if (this.i.call(this.h)) this.gm = !0, this.Dd();
        else if (0 > this.hm) this.g.fm(this.lh);
        else {
            var a = this.hm - A();
            0 >= a ? this.TD() : this.g.fm(Math.min(this.lh, a))
        }
    };

    function Wf(a, b, c) {
        F.call(this);
        this.j = a;
        this.i = b;
        this.h = c;
        this.g = y(this.uC, this)
    }
    B(Wf, F);
    d = Wf.prototype;
    d.gg = !1;
    d.Uh = 0;
    d.Ie = null;
    d.vv = function() {
        this.Ie || this.Uh ? this.gg = !0 : this.fp()
    };
    d.stop = function() {
        this.Ie && (h.clearTimeout(this.Ie), this.Ie = null, this.gg = !1)
    };
    d.pause = function() {
        this.Uh++
    };
    d.PH = function() {
        this.Uh--;
        this.Uh || !this.gg || this.Ie || (this.gg = !1, this.fp())
    };
    d.M = function() {
        Wf.u.M.call(this);
        this.stop()
    };
    d.uC = function() {
        this.Ie = null;
        this.gg && !this.Uh && (this.gg = !1, this.fp())
    };
    d.fp = function() {
        this.Ie = Tf(this.g, this.i);
        this.j.call(this.h)
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function Xf(a, b) {
        this.l = [];
        this.L = a;
        this.w = b || null;
        this.i = this.A = !1;
        this.h = void 0;
        this.o = this.U = this.k = !1;
        this.p = 0;
        this.g = null;
        this.j = 0
    }
    d = Xf.prototype;
    d.cancel = function(a) {
        if (this.yg()) this.h instanceof Xf && this.h.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : b.$E()
            }
            this.L ? this.L.call(this.w, this) : this.o = !0;
            this.yg() || this.tj(new Yf(this))
        }
    };
    d.$E = function() {
        this.j--;
        0 >= this.j && this.cancel()
    };
    d.jq = function(a, b) {
        this.k = !1;
        this.Jo(a, b)
    };
    d.Jo = function(a, b) {
        this.A = !0;
        this.h = b;
        this.i = !a;
        this.Qv()
    };
    d.ez = function() {
        if (this.yg()) {
            if (!this.o) throw new Zf(this);
            this.o = !1
        }
    };
    d.callback = function(a) {
        this.ez();
        this.dz(a);
        this.Jo(!0, a)
    };
    d.tj = function(a) {
        this.ez();
        this.dz(a);
        this.iq(a);
        this.Jo(!1, a)
    };
    d.iq = function() {};
    d.dz = function() {};
    d.Sd = function(a, b) {
        return this.ff(a, null, b)
    };
    d.Hg = function(a, b) {
        return this.ff(null, a, b)
    };
    d.V2 = function(a, b) {
        return this.ff(a, a, b)
    };
    d.ff = function(a, b, c) {
        this.l.push([a, b, c]);
        this.yg() && this.Qv();
        return this
    };
    d.then = function(a, b, c) {
        var e, f, g = new Of(function(a, b) {
            e = a;
            f = b
        });
        this.ff(e, function(a) {
            a instanceof Yf ? g.cancel() : f(a)
        });
        return g.then(a, b, c)
    };
    Mf(Xf);
    d = Xf.prototype;
    d.iI = function(a) {
        this.ff(a.callback, a.tj, a);
        return this
    };
    d.Y2 = function(a) {
        return a instanceof Xf ? this.Sd(y(a.EU, a)) : this.Sd(function() {
            return a
        })
    };
    d.EU = function(a) {
        var b = new Xf;
        this.iI(b);
        a && (b.g = this, this.j++);
        return b
    };
    d.yg = function() {
        return this.A
    };
    d.DA = function(a) {
        return a instanceof Error
    };
    d.kq = function() {
        return Ra(this.l, function(a) {
            return w(a[1])
        })
    };
    d.Qv = function() {
        if (this.p && this.yg() && this.kq()) {
            var a = this.p,
                b = $f[a];
            b && (b.EA(), delete $f[a]);
            this.p = 0
        }
        this.g && (this.g.j--, delete this.g);
        for (var a = this.h, c = b = !1; this.l.length && !this.k;) {
            var e = this.l.shift(),
                f = e[0],
                g = e[1],
                e = e[2];
            if (f = this.i ? g : f) try {
                var k = f.call(e || this.w, a);
                l(k) && (this.i = this.i && (k == a || this.DA(k)), this.h = a = k);
                Nf(a) && (this.k = c = !0)
            } catch (m) {
                a = m, this.i = !0, this.iq(a), this.kq() || (b = !0)
            }
        }
        this.h = a;
        c && (k = y(this.jq, this, !0), c = y(this.jq, this, !1), a instanceof Xf ? (a.ff(k, c), a.U = !0) : a.then(k,
            c));
        b && (a = new ag(a), $f[a.$b] = a, this.p = a.$b)
    };

    function Zf(a) {
        sa.call(this);
        this.g = a
    }
    B(Zf, sa);
    Zf.prototype.message = "Deferred has already fired";
    Zf.prototype.name = "AlreadyCalledError";

    function Yf(a) {
        sa.call(this);
        this.g = a
    }
    B(Yf, sa);
    Yf.prototype.message = "Deferred was canceled";
    Yf.prototype.name = "CanceledError";

    function ag(a) {
        this.$b = h.setTimeout(y(this.h, this), 0);
        this.g = a
    }
    ag.prototype.h = function() {
        delete $f[this.$b];
        throw this.g;
    };
    ag.prototype.EA = function() {
        h.clearTimeout(this.$b)
    };
    var $f = {};

    function bg(a, b) {
        var c = b || {},
            e = c.document || document,
            f = document.createElement("SCRIPT"),
            g = {
                bz: f,
                Yb: void 0
            },
            k = new Xf(cg, g),
            m = null,
            n = null != c.timeout ? c.timeout : 5E3;
        0 < n && (m = window.setTimeout(function() {
            dg(f, !0);
            k.tj(new eg(1, "Timeout reached for loading script " + a))
        }, n), g.Yb = m);
        f.onload = f.onreadystatechange = function() {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (dg(f, c.GG || !1, m), k.callback(null))
        };
        f.onerror = function() {
            dg(f, !0, m);
            k.tj(new eg(0, "Error while loading script " + a))
        };
        jd(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        fg(e).appendChild(f);
        return k
    }

    function fg(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }

    function cg() {
        if (this && this.bz) {
            var a = this.bz;
            a && "SCRIPT" == a.tagName && dg(a, !0, this.Yb)
        }
    }

    function dg(a, b, c) {
        null != c && h.clearTimeout(c);
        a.onload = q;
        a.onerror = q;
        a.onreadystatechange = q;
        b && window.setTimeout(function() {
            ud(a)
        }, 0)
    }

    function eg(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        sa.call(this, c);
        this.g = a
    }
    B(eg, sa);

    function gg(a) {
        return "function" == typeof a.Da ? a.Da() : da(a) || v(a) ? a.length : pc(a)
    }

    function hg(a) {
        if ("function" == typeof a.Xa) return a.Xa();
        if (v(a)) return a.split("");
        if (da(a)) {
            for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
            return b
        }
        return rc(a)
    }

    function ig(a) {
        if ("function" == typeof a.vb) return a.vb();
        if ("function" != typeof a.Xa) {
            if (da(a) || v(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return sc(a)
        }
    }

    function jg(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if (da(a) || v(a)) Na(a, b, c);
        else
            for (var e = ig(a), f = hg(a), g = f.length, k = 0; k < g; k++) b.call(c, f[k], e && e[k], a)
    }

    function kg(a, b, c) {
        if ("function" == typeof a.every) return a.every(b, c);
        if (da(a) || v(a)) return Sa(a, b, c);
        for (var e = ig(a), f = hg(a), g = f.length, k = 0; k < g; k++)
            if (!b.call(c, f[k], e && e[k], a)) return !1;
        return !0
    };

    function lg(a) {
        this.g = new Cc;
        a && this.Uv(a)
    }

    function mg(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ia] || (a[ia] = ++ja)) : b.substr(0, 1) + a
    }
    d = lg.prototype;
    d.Da = function() {
        return this.g.Da()
    };
    d.add = function(a) {
        this.g.Ac(mg(a), a)
    };
    d.Uv = function(a) {
        a = hg(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    d.GV = function(a) {
        a = hg(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    d.remove = function(a) {
        return this.g.remove(mg(a))
    };
    d.clear = function() {
        this.g.clear()
    };
    d.qb = function() {
        return this.g.qb()
    };
    d.contains = function(a) {
        return this.g.Aj(mg(a))
    };
    d.e3 = function(a) {
        return kg(a, this.contains, this)
    };
    d.u5 = function(a) {
        var b = new lg;
        a = hg(a);
        for (var c = 0; c < a.length; c++) {
            var e = a[c];
            this.contains(e) && b.add(e)
        }
        return b
    };
    d.Ws = function(a) {
        var b = this.clone();
        b.GV(a);
        return b
    };
    d.Xa = function() {
        return this.g.Xa()
    };
    d.clone = function() {
        return new lg(this)
    };
    d.t5 = function(a) {
        return this.Da() == gg(a) && this.cU(a)
    };
    d.cU = function(a) {
        var b = gg(a);
        if (this.Da() > b) return !1;
        !(a instanceof lg) && 5 < b && (a = new lg(a));
        return kg(this, function(b) {
            var e = a;
            return "function" == typeof e.contains ? e.contains(b) : "function" == typeof e.Th ? e.Th(b) : da(e) || v(e) ? E(e, b) : tc(e, b)
        })
    };
    d.gc = function() {
        return this.g.gc(!1)
    };
    var ng = {
            sW: "auto",
            E1: "tiny",
            e1: "light",
            y1: "small",
            g1: "medium",
            d1: "large",
            qY: "hd720",
            oY: "hd1080",
            pY: "hd1440",
            rY: "highres",
            UNKNOWN: "unknown"
        },
        og = {
            auto: 0,
            tiny: 144,
            light: 144,
            small: 240,
            medium: 360,
            large: 480,
            hd720: 720,
            hd1080: 1080,
            hd1440: 1440,
            highres: 2160
        };

    function pg(a, b) {
        var c = a.split(b),
            e = c.shift();
        c.forEach(function(a) {
            var b = e;
            a = a && a.length ? a.charAt(0).toUpperCase() + a.slice(1) : a;
            e = b + a
        });
        return e
    }

    function qg(a) {
        return a ? a.toLowerCase().replace(/(^\s+|\s+$)/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9_\-]/g, "") : ""
    }

    function gb(a, b) {
        if (isNaN(a)) return "0%";
        b = isNaN(b) ? 100 : b;
        return Math.round(a * b) + "%"
    }

    function rg(a, b, c, e) {
        return a.replace(/\{([^\{]*)\}([\/])*/gm, function(a, g, k) {
            (a = b[g]) && e && (a = encodeURIComponent(encodeURIComponent(a)));
            a && k && (a += "/");
            return void 0 !== a ? (c && (b[g] = null), a) : ""
        })
    }

    function sg(a) {
        return "/" == a.charAt(0) ? a.substr(1) : a
    };

    function tg(a) {
        this.V = a;
        this.g = {}
    }
    tg.prototype.initialize = function(a) {
        switch (a) {
            case 7:
                this.g = {
                    917525: 177,
                    917526: 176
                };
                break;
            case 1:
                this.g = {
                    412: 227,
                    413: 178,
                    415: 250,
                    417: 228,
                    424: 177,
                    425: 176,
                    461: 27
                };
                break;
            case 2:
                this.g = {
                    917507: 19,
                    917523: 227,
                    917524: 228,
                    917528: 250,
                    917777: 27
                };
                break;
            case 3:
                this.g = {
                    195: 227,
                    196: 228,
                    425: 176,
                    424: 177
                };
                break;
            case 4:
                this.g = {
                    29443: 13,
                    29460: 38,
                    29461: 40,
                    4: 37,
                    5: 39,
                    27: -1,
                    69: 227,
                    70: 178,
                    71: 250,
                    72: 228,
                    74: 19,
                    8: 27,
                    88: 27,
                    1078: 176,
                    1080: 177
                };
                break;
            case 5:
                this.g = {
                    415: 250,
                    19: 19,
                    413: 178,
                    465: 228,
                    417: 228,
                    412: 227,
                    425: 176,
                    463: 177,
                    424: 177
                };
                break;
            case 6:
                this.g = {
                    238: 227,
                    239: 228
                };
                break;
            case 8:
                this.g = {
                    461: 27,
                    415: 250,
                    413: 178,
                    417: 228,
                    412: 227,
                    48: 83,
                    424: 177,
                    425: 176
                };
                break;
            case 9:
                this.g = {
                    166: 27,
                    113: 227,
                    114: 228,
                    115: 177,
                    116: 176
                }
        }
        this.V.VK_FAST_FWD && (this.g[this.V.VK_FAST_FWD] = 228);
        this.V.VK_REWIND && (this.g[this.V.VK_REWIND] = 227);
        this.V.VK_TRACK_PREV && (this.g[this.V.VK_TRACK_PREV] = 177);
        this.V.VK_TRACK_NEXT && (this.g[this.V.VK_TRACK_NEXT] = 176);
        this.V.VK_PLAY && (this.g[this.V.VK_PLAY] = 250);
        this.V.VK_STOP && (this.g[this.V.VK_STOP] = 178)
    };
    tg.prototype.h = function(a) {
        return this.g[a] || a
    };
    tg.inject = ["window"];

    function ug(a, b, c, e, f, g, k, m, n) {
        this.V = a;
        this.O = b;
        this.Ye = c;
        this.na = e;
        this.Rz = f;
        this.Wp = m;
        this.sd = g;
        this.Hz = n;
        this.Yp = this.Ua = this.sa = "";
        this.Rc = [];
        this.Zp = [];
        this.eW = "TVHTML5";
        this.dW = "4";
        this.g = this.j = "";
        this.p = new lg;
        this.Xb = {};
        this.Ek = {};
        this.Hp = this.Qc = this.Gp = this.Nz = this.ng = this.Ck = this.mg = this.jg = this.Lz = this.Bp = this.Tp = this.Kz = this.Hb = this.Ap = this.Qp = this.Kb = this.Dp = this.A = this.Cp = this.Mz = this.Z = this.Pp = this.Rp = this.Op = this.Np = this.Jz = this.Jb = this.Mp = this.nd = this.L = this.la = this.Qz = this.rg =
            this.Xp = this.lg = !1;
        this.pg = this.Bk = this.Xh = this.F = this.Ak = this.pd = this.qd = "";
        this.sg = null;
        this.yc = 0;
        this.W = {};
        this.vp = this.ib = this.o = this.xp = this.cssPrefix = this.za = "";
        this.G = "www.youtube.com/tv_feedback";
        this.og = "www.youtube.com/tv_help";
        this.forcedExperiments = "";
        this.Fk = new lg;
        this.forcedOffAllExperiments = !1;
        this.forcedOffExperiments = "";
        this.Gk = new lg;
        this.forceSslStreaming = !1;
        this.initSearchQuery = this.initRow = this.initPlaylistId = this.initDialog = this.initChannelId = this.gdataRegionId = "";
        this.initTime =
            0;
        this.initReversePairingCode = this.initVideoId = "";
        this.theme = "cl";
        this.additionalDataUrlForDial = "";
        this.md = this.supportsAchievements = this.isChromelessContext = this.isPlayOnlyContext = this.i = this.w = this.aa = this.Pc = this.Ya = this.l = this.yp = this.Iz = this.hideWatermark = !1;
        this.Lp = !0;
        this.Sc = this.isLowPerformingSearch = this.kg = this.va = this.Ep = this.Fp = this.isLimitedMemory = this.isLimitedAnimation = this.useWebSpeech = this.usePaidScope = this.useReleaseInnerTube = this.useTestInnerTube = !1;
        this.k = [];
        this.fW = !1;
        this.keyMapId =
            0;
        this.supportsSingleVideoTag = !0;
        this.Fz = 10;
        this.reversedSelectionKeys = !1;
        this.zp = 300;
        this.gW = 1500;
        this.J = !1;
        this.Ib = q;
        this.supportsNetworkRetry = this.le = this.xk = this.supportsNativeOsk = this.Gz = this.od = this.mediaSourceDevelopment = this.zc = this.brokenLogin = this.Sp = this.supportsHardwareKeyboard = this.wp = this.U = this.Ea = this.Up = this.supportsCors = this.Kp = !1;
        this.supportsPairing = !0;
        this.supportsSearchSuggestion = this.supportsPointer = !1;
        this.supportsMouseOverSearch = !0;
        this.zk = this.Dk = this.supportsMp3 = this.supportsSounds = !1;
        this.supportedCastVersion = null;
        this.Ka = this.ob = !1;
        this.Ja = this.supportsTranslateZ = !0;
        this.supportsLive = this.useStageMdx = this.useStageGdata = !1;
        this.Pz = k;
        this.Jp = this.yk = this.Vp = this.supportsAccountManager = this.supportsUploads = this.supportsBackgrounds = !1;
        this.requestVideoQuality = "";
        this.kd = NaN;
        this.loopRows = !1;
        this.launch = "";
        this.rd = this.h = !1;
        this.qa = "mqdefault";
        this.yb = 854;
        this.forceShelfAnimation = this.disableShelfAnimation = this.useThreeShelves = this.useBrowseUnderWatch = this.showOnboarding = this.useSetsUi =
            this.qg = this.Ip = !1;
        this.zb = "";
        this.Oz = "debugjs env_brokenLogin env_cssPrefix env_disableShelfAnimation env_forcedExperiments env_forcedOffAllExperiments env_forcedOffExperiments env_forceShelfAnimation env_forceSslStreaming env_gdataRegionId env_hideWatermark env_isChromelessContext env_isLimitedAnimation env_isLimitedMemory env_isLowPerformingSearch env_isVideoInfoVisible env_keyMapId env_mediaSourceDevelopment env_requestVideoQuality env_reversedSelectionKeys env_showOnboarding env_supportsAccountManager env_supportsAchievements env_supportsBackgrounds env_supportsCors env_supportsHardwareKeyboard env_supportsLive env_supportsMouseOverSearch env_supportsMp3 env_supportsNetworkRetry env_supportsPairing env_supportsPointer env_supportsSearchSuggestion env_supportsSingleVideoTag env_supportsSounds env_supportsTranslateZ env_supportsUploads env_useBrowseUnderWatch env_useReleaseInnerTube env_useSetsUi env_useStageGdata env_useStageMdx env_useTestInnerTube env_useThreeShelves env_videoQualityRange label loader rc_code utest".split(" ");
        this.I = {
            additionalDataUrl: "additionalDataUrlForDial",
            castv: "supportedCastVersion",
            e: "initErrorCode",
            isChromelessContext: "isChromelessContext",
            launch: "launch",
            loopRows: "loopRows",
            pairingCode: "initReversePairingCode",
            reversePairingCode: "initReversePairingCode",
            theme: "theme"
        };
        this.I.c = "initChannelId";
        this.I.dialog = "initDialog";
        this.I.list = "initPlaylistId";
        this.I.q = "initSearchQuery";
        this.I.row = "initRow";
        this.I.t = "initTime";
        this.I.v = "initVideoId";
        this.Sz()
    }
    d = ug.prototype;
    d.Sz = function() {
        this.kT();
        this.YS();
        this.iT();
        this.aT();
        this.$S();
        this.jT();
        this.lT();
        this.hT();
        this.nT();
        this.dT();
        this.eT();
        this.bT();
        this.cT();
        this.mT();
        this.gT();
        this.fT();
        this.ZS()
    };
    d.kT = function() {
        this.Xh = this.V.loader;
        this.pg = this.V.label;
        var a = this.V.environment || {};
        this.F = a.platform;
        this.j = a.brand;
        this.g = a.model;
        this.sa = a.browser;
        this.Ua = a.browser_version;
        this.Yp = a.browser_engine;
        this.qd = a.os;
        this.pd = a.os_version;
        this.Ak = a.network;
        this.za = a.country;
        this.kd = a.start_time;
        this.zb = a.visitor_data;
        this.iG(a.experiments);
        this.zc = !!a.allow_progressive;
        this.Ek = a.varz || {};
        this.Xb = a;
        this.qg = "web-release-qa.youtube.com" == this.O.hostname;
        this.yp = window.devjs;
        this.gdataRegionId = E(Gb, this.za) ?
            this.za : ""
    };
    d.YS = function() {
        "Steel" == this.sa ? (this.nd = this.la = !0, 0 > Ga(this.Ua, "2.20") && (this.L = !0)) : this.qe("Opera") ? this.Ya = !0 : this.qe("Firefox") ? this.rg = !0 : this.qe("Mozilla") || this.rg ? this.Qz = !0 : this.qe("Chrome") || this.qe("GoogleTV") ? this.nd = !0 : this.qe("IE") && (this.Xp = !0)
    };
    d.iT = function() {
        this.Jb = !(!this.j && !this.g);
        this.o = "YouTube TV";
        switch (this.j && this.j.toLowerCase()) {
            case "boxee":
                this.lg = !0;
                this.o = "Boxee";
                break;
            case "cht":
                this.Mp = !0;
                break;
            case "grundig":
                this.Np = !0;
                break;
            case "humax":
            case "freesat":
            case "freesat/1.0":
                this.Op = !0;
                break;
            case "realtek":
                this.Mz = !0;
                break;
            case "roku":
                this.Cp = !0;
                this.G = "www.youtube.com/roku_feedback";
                break;
            case "sharp":
                this.Dp = !0;
                break;
            case "sony":
                this.Kb = !0;
                "PS3" !== this.g && "PS4" !== this.g && (this.Qp = !0);
                break;
            case "samsung":
                this.A = !0;
                break;
            case "lg":
                this.Z = !0;
                break;
            case "lgi":
                "D4A" === this.g && (this.Iz = !0);
                break;
            case "magnavox":
                this.Ap = !0;
                break;
            case "panasonic":
                this.Hb = !0;
                this.va || (this.Kz = !0);
                break;
            case "philipstv":
                this.Tp = !0;
                break;
            case "pioneer":
                this.Bp = !0;
                break;
            case "pure":
                this.Lz = !0;
                break;
            case "telecomitalia":
                this.Rp = !0;
                break;
            case "toshiba":
                this.jg = !0; - 1 < this.g.indexOf("13A_NAEU_") && (this.Ck = this.mg = !0);
                if (-1 < this.g.indexOf("14A_NAEU_") || -1 < this.g.indexOf("14A_AS_")) this.Ck = !0;
                break;
            case "tivo":
            case "virgin_media":
                this.ng = !0;
                break;
            case "vestel":
                this.Nz = !0;
                0 <= J.search(/\bMB9[0-9][A-Z]?\b/) && (this.Gp = !0);
                break;
            case "vizio":
                this.Qc = !0;
                break;
            case "wd":
                this.Hp = !0
        }
        switch (this.g && this.g.toLowerCase()) {
            case "ps3":
                this.Kb && (this.aa = !0, this.o = "Sony PS3", this.G = "www.youtube.com/ps3_feedback", this.og = "www.youtube.com/ps3_help");
                break;
            case "ps4":
                this.Kb && (this.w = !0, this.o = "Sony PS4", this.G = "www.youtube.com/ps4_feedback", this.og = "www.youtube.com/ps4_help");
                break;
            case "eureka":
                "Google" === this.j && (this.l = !0, this.o = "Chromecast", this.isChromelessContext = !0);
                break;
            case "nexus foo":
                this.Pc = !0;
                break;
            case "ipc1100":
            case "vms1100":
                this.Pp = "MMI" === this.j;
                break;
            case "viera":
                this.o = "Viera";
                break;
            case "wiiu":
                this.i = !0;
                this.o = "Wii U";
                this.G = "www.youtube.com/wiiu_feedback";
                break;
            case "xboxone":
                this.h = !0;
                this.o = "Xbox One";
                this.G = "www.youtube.com/xb1_feedback";
                break;
            case "xbox360":
                this.rd = !0, this.o = "Xbox 360", this.G = "www.youtube.com/xb360_feedback"
        }
        this.qe("GoogleTV") && (this.Jz = !0);
        this.nd = this.nd || this.Z || this.A;
        this.keyMapId = this.BA();
        this.sg = this.i ? "NINTENDO" :
            null;
        this.F && "tv" === this.F.toLowerCase() ? this.ib = "tv" : this.Jb || (this.ib = "desktop")
    };
    d.aT = function() {};
    d.$S = function() {
        this.Lp = !this.Hb;
        this.Up = this.aa || this.w || this.i || this.h;
        this.supportsSingleVideoTag = !this.lg;
        this.Ea = this.U = !!this.Xb.debug;
        this.wp = this.Jb;
        this.supportsHardwareKeyboard = this.Hb && !this.Ya || this.la || this.Z || !this.Jb || this.ng || this.Gp || this.Qc || this.Hp || this.dH();
        this.xk = this.supportsNativeOsk = this.i || this.Pc;
        this.le = this.Pc;
        this.supportsNetworkRetry = this.l;
        this.supportsPointer = this.Z;
        this.Dk = this.i;
        this.Ja = !this.Z;
        this.Ka = (this.useWebSpeech = (this.h || this.rd) && !this.L) || this.Wp && this.Wp.isSupported();
        this.Vp = this.w || this.h || !this.L && this.i;
        this.l && (this.zk = !0, this.supportedCastVersion || (this.supportedCastVersion = "1.0"));
        this.od = !!(this.V.MediaSource || this.V.WebKitMediaSource || HTMLMediaElement && HTMLMediaElement.prototype.webkitSourceAddId)
    };
    d.dH = function() {
        return this.Tp && this.g ? 2 <= parseInt(this.g, 10) : !1
    };
    d.jT = function() {
        this.brokenLogin = !!this.Xb.prevent_sign_in
    };
    d.lT = function() {
        this.sd.isSupported() && (this.reversedSelectionKeys = this.sd.areKeysReversed)
    };
    d.hT = function() {
        this.va = this.Hb && E(["DMP-BD79_89", "DMP-MS10"], this.g) || this.zg(["BD 13S01", "BD 13S02", "BDT220"]);
        this.Kb && (this.Sc = !this.g || "N/A" == this.g || this.zg(["BDP", "CTV", "Presto/2.10"]) || this.Wr("BRAVIA") && this.Wr("mips"));
        var a = this.Dp && E("LE750 LE751 LE752 LE650 LE651 LE652".split(" "), this.g),
            b = this.Qc && "ISV-B11" == this.g,
            c = this.mg || this.jg && E(["BDX3400KU", "BDX5400KU"], this.g),
            e = this.Bp && "BDP-160" === this.g;
        this.kg = this.A && E("BD-F5500 BD-F5700 BD-FM57C BD-HM57C BD-H5100 BD-HM51 BD-F5500 BD-F5500K HT-F4500 BD-H5500 BD-H5500K BD-H5900 BD-HM59 HT-H4200 HT-H4500 HT-H4500K HT-H5200 HT-H5500 HT-H5500K HT-H5500W HT-H5500WK HT-H4200R HT-H4500R".split(" "),
            this.g);
        var f = this.ng && this.Vr(this.g, "TCD746 TCD748 TCD750 TCD758 TCDA90 TCDA92 TCDC000 TCDC005 TCDC8A0 TCDC8A5 TCDCF00 TCDCF05".split(" ")),
            g = this.Ap && E(["MBP5520", "MBP5510"], this.g),
            k = this.jg && "DBP-S450" == this.g,
            m = this.Qc && E("E280i-A1 E390i-A1 M321i-A2 M401i-A3 M471i-A2 M551d-A2 E550i-A0".split(" "), this.g);
        this.Ep = g || k || m;
        g = "BSkyB" == this.j && "2400SK" == this.g;
        this.isLimitedMemory = this.Sc || this.va || c || e || this.lg || this.Cp || a || b || this.kg || f || g;
        this.Fp = this.Kb && !this.aa && !this.w;
        this.isLowPerformingSearch =
            this.va;
        this.supportsSearchSuggestion = !this.va && !this.i && !E(["zh_CN", "zh_HK", "zh_TW", "ja_JP", "ko_KR"], this.Ye.sb);
        if (this.Sc || this.va || c) this.zp = 1E3
    };
    d.nT = function() {
        if (this.O && (this.O.search || this.O.hash)) {
            var a = this.O.search || "",
                a = a + (this.O.hash || ""),
                a = a.replace(/\#[^\?]*\??/, "&");
            this.GS(a)
        }
    };
    d.dT = function() {
        this.forcedExperiments && (this.Ay(String(this.forcedExperiments), this.Fk), this.p.Uv(this.Fk));
        this.forcedOffAllExperiments && this.uR(this.vR().join(","));
        this.forcedOffExperiments && (this.Ay(String(this.forcedOffExperiments), this.Gk), this.p = this.p.Ws(this.Gk))
    };
    d.vR = function() {
        var a = [],
            b;
        for (b in Fb) a.push(Fb[b].id);
        return a
    };
    d.uR = function(a) {
        this.forcedOffExperiments = (this.forcedOffExperiments ? this.forcedOffExperiments + "," : "") + a
    };
    d.eT = function() {
        this.supportsLive = this.supportsLive || this.U || this.l || this.la || this.cb(qb) && this.Hb;
        this.usePaidScope = this.cb(Ab);
        this.supportsSounds = this.la ? this.supportsSounds || this.aa || this.w || this.h || this.i && !this.L : this.supportsSounds || "undefined" != typeof this.V.webkitAudioContext || "undefined" != typeof this.V.AudioContext;
        this.supportsMp3 = !this.la && this.supportsSounds;
        if (this.aa || this.w || this.i) this.Ip = !0;
        var a = this.zg("BTT400;Diga BD 12S02;Diga BD 13S02;Diga BD 14S02;Diga BD 12S01;Diga BD 13S01;Diga BD 14S01".split(";"));
        this.supportsMouseOverSearch = !(this.h || this.kg || a);
        this.md = this.md || this.h;
        this.supportsUploads = this.supportsUploads || this.h;
        this.supportsAchievements = this.supportsAchievements || this.h;
        this.supportsAccountManager = this.supportsAccountManager || this.Hz.isSupported();
        this.yk = this.h || this.rd;
        this.Jp = this.supportsAccountManager || this.yk;
        this.Sp = "preload" === this.launch || !!this.initReversePairingCode || !!this.initVideoId || !!this.initPlaylistId || !!this.initChannelId;
        this.isLimitedAnimation = this.isLimitedAnimation ||
            this.isLimitedMemory || this.Ep;
        this.supportsBackgrounds = !this.isLimitedMemory && !this.isPlayOnlyContext && !this.l;
        this.supportsTranslateZ = !this.isLimitedAnimation && !(this.Ya && this.ht());
        this.useBrowseUnderWatch = this.useBrowseUnderWatch || this.cb(mb);
        a = !!this.Xb.sets_capable_lg && this.cb(rb);
        this.useSetsUi || (this.h || this.w ? this.useSetsUi = !0 : this.cb(pb) || (this.useSetsUi = this.A && this.zg(["T-MST12", "T-MST14"]) && this.cb(ub) || a || this.la && !this.L && !this.i));
        this.useSetsUi && (this.isLimitedAnimation = this.isLimitedAnimation ||
            this.A && !this.zg(["T-MST12", "T-MST14"]) || a);
        this.useSetsUi ? this.p.add(zb.id) : this.p.remove(zb.id);
        this.Kp = this.useSetsUi;
        this.disableShelfAnimation = this.disableShelfAnimation || this.i && !this.forceShelfAnimation;
        this.Gz = this.od || this.zc || this.mediaSourceDevelopment;
        this.supportedCastVersion && (this.ob = 0 <= Ga(this.supportedCastVersion, "2.0"))
    };
    d.bT = function() {
        this.Z && this.V.NetCastBack ? (this.J = !0, this.Ib = y(this.V.NetCastBack, this.V)) : this.A && this.V.curWidget ? (this.J = !0, this.Ib = y(this.V.curWidget.setPreference, this.V.curWidget, "return", "true")) : this.h && this.sd.isSupported() ? (this.J = !0, this.Ib = y(this.sd.minimize, this.sd)) : !this.Jb || !this.V.close || this.aa || this.w || this.i || (this.J = !0, this.Ib = y(this.V.close, this.V))
    };
    d.cT = function() {
        var a = this.p.Xa(),
            b = {},
            c;
        for (c in Fb) b[Fb[c].id] = !0;
        c = [];
        for (var e = 0, f = a.length; e < f; ++e) {
            var g = a[e];
            b[g] && c.push("exp-" + g)
        }
        this.vp = c.join(" ")
    };
    d.mT = function() {
        var a = [],
            b = qg(this.j);
        b && a.push(b);
        (b = qg(this.g)) && a.push(b);
        this.ib && a.push(this.ib);
        this.Ya && a.push("opera");
        this.l && a.push("eureka");
        this.cb(sb) && a.push("new-end-screens");
        this.mg && a.push("toshiba-mstar");
        this.reversedSelectionKeys && a.push("reversed-keys");
        this.Ye && (b = this.Ye.sb, a.push("lang-" + b), -1 === lb.indexOf(b) && a.push("lang-case-sensitive"));
        this.isLimitedAnimation && a.push("limited-animation");
        this.isLimitedMemory && a.push("limited-memory");
        this.Ea && this.na.S() && a.push("debug");
        this.supportsPointer && a.push("pointer");
        this.useSetsUi && a.push("supports-guide");
        this.xp = a.join(" ")
    };
    d.gT = function() {
        this.Rz.initialize(this.keyMapId)
    };
    d.GM = function(a) {
        this.k = [];
        var b = /^(\d{1,4}),(\d{1,4})$/.exec(a);
        if (!b) return !1;
        a = [];
        a.push(parseInt(b[1], 10));
        a.push(parseInt(b[2], 10));
        var b = og.medium,
            c;
        for (c in ng) {
            var e = ng[c],
                f = og[e];
            if (f >= b)
                for (var g = a.indexOf(f); - 1 != g && 2 > this.k.length;) this.k.push(e), g = a.indexOf(f, g + 1)
        }
        if (2 > this.k.length) return this.k = [], !1;
        og[this.k[0]] > og[this.k[1]] && this.k.reverse();
        return !0
    };
    d.fT = function() {
        var a = p("screen.width", this.V);
        if (a) {
            var b = function(b) {
                return a >= b[0] && a <= b[1]
            };
            this.qa = uc(Sb, b) || this.qa;
            b = uc(Tb, b) || this.yb;
            this.yb = parseInt(b, 10)
        }
    };
    d.ZS = function() {
        "desktop" === this.ib ? (this.yc = 100, this.W = {}) : this.va || this.Sc ? (this.yc = 0, this.W = {}) : (this.yc = 0, this.W = {}, this.W.branding = 10);
        this.W.channel_paid_info = 200;
        this.W.video_like_value = 200
    };
    d.GS = function(a) {
        a = Ue(a);
        var b = [],
            c;
        for (c in a) {
            var e = 0 === c.indexOf("env_"),
                f = e ? c.substr(4) : c,
                g = decodeURIComponent(a[c]),
                g = Te(g);
            this.A && (f = this.HM(f, g)); - 1 < this.Oz.indexOf(c) ? (this.Ea = !0, "utest" === c ? b.push("domain=" + this.O.hostname) : "rc_code" === c ? b.push("loader=" + this.Xh) : "env_videoQualityRange" === c ? this.GM(g) || this.Rc.push(c) : this.U = !0, this.Zp.push(c), e ? "isVideoInfoVisible" == f ? this.Pz.h(g) : this[f] = g : "label" === c && (this.Bk = g)) : e ? this.Rc.push(c + "=" + g) : (e = "isPlayOnlyContext" == f ? f : this.I[f]) && (this[e] =
                g);
            b.push(c + "=" + g)
        }
        this.hideWatermark || (0 < this.Zp.length && (this.na.push("WARNING: REMOVE DEBUG QUERY PARAMETERS "), this.na.push("[" + b.join(", ") + "] "), this.na.push("BEFORE PRODUCTION RELEASE.")), 0 < this.Rc.length && (this.na.push("\n\n"), this.na.push("ERROR: UNEXPECTED PARAMETER(S): "), this.na.push(this.Rc.join(", "))))
    };
    d.HM = function(a, b) {
        return "isChromelessContext" == a || "launch" == a && ("search" == b || "social" == b) ? "isPlayOnlyContext" : a
    };
    d.Ay = function(a, b) {
        var c = decodeURIComponent(a).split(","),
            e;
        for (e in c) {
            var f = parseInt(c[e], 10);
            b.add(f)
        }
    };
    d.BA = function() {
        return this.Z || this.Op || this.Np ? 1 : this.A ? 4 : this.Rp ? 6 : this.Pp ? 2 : this.Qp ? 5 : this.aa || this.w || this.i || this.h ? 9 : this.Mp ? 7 : this.Ck ? 8 : this.Ya ? 3 : 0
    };
    d.iG = function(a) {
        if (a)
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                c && this.p.add(c)
            }
    };
    d.cb = function(a) {
        return this.p.contains(a.id)
    };
    d.V5 = function(a) {
        var b = Qa(arguments, function(a) {
            return a.id
        });
        return Ra(b, y(this.p.contains, this.p))
    };
    d.K5 = function(a) {
        return this.Fk.contains(a.id) && !this.Gk.contains(a.id)
    };
    d.bm = function(a) {
        return a in this.Ek && this.Ek[a]
    };
    d.qe = function(a) {
        return C(this.sa || J || "", a)
    };
    d.Wr = function(a) {
        return C(J || "", a)
    };
    d.zg = function(a) {
        return this.Vr(J || "", a)
    };
    d.Vr = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c)
            if (C(a, b[c])) return !0;
        return !1
    };
    d.ht = function() {
        return "Presto" === this.Yp
    };
    d.Gv = function() {
        return {
            c: "TVHTML5",
            cbr: this.sa,
            cbrand: this.j,
            cbrver: this.Ua,
            cmodel: this.g,
            cnetwork: this.Ak,
            cos: this.qd,
            cosver: this.pd,
            cplatform: this.F,
            cver: "4"
        }
    };
    d.iB = function() {
        var a = {};
        this.j && (a.cbrand = this.j);
        this.g && (a.cmodel = this.g);
        this.F && (a.cplatform = this.F);
        a.e = this.KH();
        a.l_mm = this.isLimitedMemory ? 1 : 0;
        a.l_an = this.isLimitedAnimation ? 1 : 0;
        return a
    };
    d.uO = function() {
        var a = {};
        this.j && (a.psd_brand = this.j);
        this.g && (a.psd_model = this.g);
        this.F && (a.psd_platform = this.F);
        a.psd_sets_ui = this.useSetsUi ? 1 : 0;
        a.hl = this.Ye.sb;
        return a
    };
    d.hH = function(a) {
        return this.W[a] || this.yc
    };
    d.MH = function() {
        var a = {
            "Loader, Label": this.Xh + ", " + this.pg,
            Href: this.O.href,
            Device: "Unknown",
            "User Agent": J,
            "Server User Agent": this.Xb.server_ua,
            "Key Map": "None"
        };
        this.Bk && (a["Loader, Label"] += " (" + this.Bk + ")");
        var b = [];
        this.V.VK_FAST_FWD && b.push(" VK_FAST_FWD=" + this.V.VK_FAST_FWD);
        this.V.VK_REWIND && b.push(" VK_REWIND=" + this.V.VK_REWIND);
        this.V.VK_TRACK_PREV && b.push(" VK_TRACK_PREV=" + this.V.VK_TRACK_PREV);
        this.V.VK_TRACK_NEXT && b.push(" VK_TRACK_NEXT=" + this.V.VK_TRACK_NEXT);
        this.V.VK_PLAY && b.push(" VK_PLAY=" +
            this.V.VK_PLAY);
        this.V.VK_STOP && b.push(" VK_STOP=" + this.V.VK_STOP);
        0 < b.length && (a["Key Map"] = b.join());
        b = [];
        b.push(this.F || "Unknown Platform");
        b.push(this.j || "Unknown Brand");
        b.push(this.g || "Unknown Model");
        var c = "Unknown Browser";
        this.sa && (c = this.sa, this.Ua && (c += " (" + this.Ua + ")"));
        b.push(c);
        c = "Unknown OS";
        this.qd && (c = this.qd, this.pd && (c += " (" + this.pd + ")"));
        b.push(c);
        b.push(this.Ak || "Unknown Network");
        a.Device = b.join(", ");
        var b = "",
            c = [],
            e = [],
            f;
        for (f in Fb) c.push(Fb[f].id), this.cb(Fb[f]) && (b += Fb[f].name +
            ", ");
        a["Active TV Experiments"] = b || "None";
        e = this.p.Ws(c);
        e = e.Xa();
        e.sort(bb);
        a["Desktop Experiments"] = e.join(", ");
        return a
    };
    d.KH = function() {
        return this.p && this.Ow().join() || ""
    };
    d.Ow = function() {
        return this.p.Xa()
    };
    ug.inject = "window location localeModel debugModel keyMapModel systemApi videoInfoVisibleFlag speechApi accountManager".split(" ");

    function vg(a) {
        this.h = a;
        this.video = null;
        this.startTime = 0;
        this.i = this.xd = !1;
        this.g = ""
    }
    vg.prototype.j = function(a, b, c) {
        var e = {
            start: this.startTime,
            video_id: this.video.videoId
        };
        this.video.qi && (e.list = this.video.qi);
        var f;
        f = this.h.supportsNetworkRetry && !!this.h.bm("network_retry");
        f = Te(f) ? "1" : "0";
        e.retryneterr = f;
        e.vq = this.h.requestVideoQuality;
        this.xd && (e.autoplay = "1");
        this.video.Sk && (e.itct = this.video.Sk);
        a && (e.oauth_token = a);
        this.video.jf && (e.vvt = this.video.jf, this.h.cb(Cb) && (e.vss_credentials_token = this.video.jf, e.vss_credentials_token_type = "vvt"));
        "RQ" == this.video.Mb && (e.ctrl = "mdx-" +
            (this.video.qi.substr(2) || "pair"), e.mdx = "1");
        b && b.length && (e.ytr = b.join(","));
        c && (e.is_fling = "1");
        this.g && (e[this.g] = 1);
        return e
    };
    vg.prototype.update = function(a, b, c, e) {
        this.reset();
        this.video = a;
        this.startTime = b || 0;
        this.xd = !!c;
        this.i = !!e
    };
    vg.prototype.reset = function() {
        this.videoId = "";
        this.startTime = 0;
        this.i = this.xd = !1;
        this.g = ""
    };
    vg.prototype.l = function(a) {
        this.g = a
    };
    vg.inject = ["environmentModel"];

    function wg(a, b) {
        this.hc = a;
        this.g = b;
        this.h = !1;
        this.j = null
    };

    function xg() {}
    xg.prototype.h = null;
    xg.prototype.j = function() {
        return this.h || (this.h = this.p())
    };
    var yg;

    function zg() {}
    B(zg, xg);
    zg.prototype.g = function() {
        var a = this.i();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    zg.prototype.p = function() {
        var a = {};
        this.i() && (a[0] = !0, a[1] = !0);
        return a
    };
    zg.prototype.i = function() {
        if (!this.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c), this.l = c
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return this.l
    };
    yg = new zg;

    function Ag(a) {
        this.k = a
    }
    B(Ag, zg);
    Ag.prototype.g = function() {
        var a = new XMLHttpRequest;
        a.upload.addEventListener("progress", this.k, !1);
        return a
    };

    function Bg(a, b) {
        this.h = a;
        this.g = b
    }
    d = Bg.prototype;
    d.get = function(a, b, c, e, f) {
        b = Se(b);
        a = rg(a, b, !0, !0);
        a = Ve(a, b);
        return this.Dj("GET", a, null, null, c, e, f)
    };
    d.fe = function(a, b, c, e, f, g) {
        return this.Dj("POST", a, b, c, e, f, g)
    };
    d.p7 = function(a, b, c, e, f) {
        return this.Dj("DELETE", a, b, null, c, e, f)
    };
    d.Dj = function(a, b, c, e, f, g, k, m) {
        f = this.vV(f, g, m);
        g = Se(e);
        e = !e || v(e) || e instanceof Blob ? e : Re(g);
        c = Se(c);
        b = rg(b, c, !0, !0);
        f.send(b, a, e, k);
        return y(f.abort, f)
    };
    d.dj = function(a, b, c, e, f) {
        b = Se(b);
        var g = !1;
        a = rg(a, b, !1, !0);
        var k = new this.g(a, f);
        k.SE(3E4);
        var m = k.send(b, c, function(a) {
            if (e && !g) {
                var b = new wg;
                b.h = !0;
                b.j = a;
                e(b)
            }
        });
        return function() {
            g = !0;
            k.cancel(m)
        }
    };
    d.vV = function(a, b, c) {
        c = c ? new Ag(y(this.NO, this, c)) : null;
        c = new this.h(c);
        c.addEventListener("success", y(function(b) {
            b = b.target;
            a && a(this.Bx(b), b.MO());
            b.nc()
        }, this));
        c.addEventListener("error", y(function(a) {
            a = a.target;
            b && b(new wg(a.hj(), a.getStatus()), this.Bx(a));
            a.nc()
        }, this));
        return c
    };
    d.NO = function(a, b) {
        a(b.loaded, b.total)
    };
    d.Bx = function(a) {
        var b = a.AU("content-type");
        if (null == b) return "";
        var c;
        if (0 <= b.indexOf("xml")) c = a.zU();
        else if (0 <= b.indexOf("html")) c = a.Ee();
        else if (0 > b.indexOf("image")) try {
            c = a.yU()
        } catch (e) {
            c = a.Ee()
        }
        return c
    };
    Bg.inject = ["xhrBackend", "jsonpBackend"];

    function Cg() {}
    d = Cg.prototype;
    d.KI = function(a, b) {
        return new Vf(a, b)
    };
    d.Zz = function(a, b, c) {
        return new Wf(a, b, c)
    };
    d.Uc = function() {
        return new Date
    };
    d.cf = function(a, b) {
        return setInterval(a, b)
    };
    d.Je = function(a) {
        clearInterval(a)
    };
    d.setTimeout = function(a, b) {
        return setTimeout(a, b)
    };
    d.clearTimeout = function(a) {
        clearTimeout(a)
    };

    function Dg(a, b, c, e) {
        this.V = a;
        this.p = c;
        this.l = e;
        this.g = {};
        this.i = b.iB();
        this.j = !1;
        this.h = [];
        this.V.jstiming && (this.g[this.V.jstiming.load.name] = this.V.jstiming.load, this.V.jstiming.load = null)
    }
    d = Dg.prototype;
    d.b7 = function(a) {
        var b = new this.V.jstiming.Timer;
        b.name = a;
        return this.g[a] = b
    };
    d.$P = function(a) {
        this.g[a] = null
    };
    d.Za = function(a) {
        return this.g[a] || null
    };
    d.Eo = function(a, b) {
        var c = this.Za(a);
        return c && (b ? y(c.tick, c, b) : y(c.tick, c)) || q
    };
    d.tick = function(a, b) {
        var c = this.g[a];
        c && c.tick(b)
    };
    d.report = function(a, b) {
        var c = this.g[a];
        if (c)
            if (this.iC()) {
                var e = b && z(b, this.i) || this.i;
                this.V.jstiming.report(c, e);
                this.g[a] = null
            } else this.h.push(y(this.report, this, a, b)), this.j || (this.j = !0, this.jC())
    };
    d.jC = function() {
        bg(this.l + "/csi-tail.js").Sd(y(this.gR, this))
    };
    d.gR = function() {
        for (var a = this.h.length - 1; 0 <= a; --a) {
            var b = this.h[a];
            w(b) && b()
        }
        this.h.length = 0
    };
    d.iC = function() {
        return !!p("jstiming.report", this.V)
    };
    Dg.inject = ["window", "environmentModel", "timeService", "applicationPath"];

    function Eg(a, b) {
        this.h = void 0 != a ? a : ",";
        this.g = void 0 != b ? b : "YYYY/MM/DD"
    }
    d = Eg.prototype;
    d.qP = function(a) {
        return a ? a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, this.h) : "0"
    };
    d.pP = function(a) {
        var b = this.dL(a),
            c = this.cL(a);
        a = this.eL(a);
        switch (this.g) {
            case "DD/MM/YYYY":
                return [c, b, a].join("/");
            case "DD.MM.YYYY":
                return [c, b, a].join(".");
            case "MM/DD/YYYY":
                return [b, c, a].join("/");
            default:
                return [a, b, c].join("/")
        }
    };
    d.cL = function(a) {
        return ("0" + a.getDate()).slice(-2)
    };
    d.dL = function(a) {
        return ("0" + (a.getMonth() + 1)).slice(-2)
    };
    d.eL = function(a) {
        return a.getFullYear().toString()
    };
    d.rP = function(a) {
        var b = a % 60;
        a /= 60;
        var c = 0;
        return 60 <= a ? (c = a / 60, [Math.floor(c), this.rp(a % 60), this.rp(b)].join(":")) : [Math.floor(a), this.rp(b)].join(":")
    };
    d.rp = function(a) {
        a = Math.floor(a);
        return 9 < a ? a : "0" + a
    };

    function Fg(a, b) {
        switch (a) {
            case "de":
                return new Eg(".", "DD.MM.YYYY");
            case "fr":
                return new Eg(" ", "DD/MM/YYYY");
            case "ru":
            case "uk":
                return new Eg(" ", "DD.MM.YYYY");
            case "nl":
            case "es":
            case "it":
            case "pt":
                return new Eg("", "DD/MM/YYYY");
            case "en":
                switch (b) {
                    case "GB":
                        return new Eg(",", "DD/MM/YYYY")
                }
                return new Eg(",", "MM/DD/YYYY");
            default:
                return new Eg(",", "YYYY/MM/DD")
        }
    };

    function Gg(a, b) {
        this.V = a;
        this.o = b;
        this.j = this.p = this.k = this.i = this.sb = this.g = null;
        this.l = 1;
        this.LB()
    }
    var Hg = {
        af: "af_ZA",
        "af-za": "af_ZA",
        am: "am_ET",
        "am-et": "am_ET",
        bg: "bg_BG",
        "bg-bg": "bg_BG",
        bn: "bn_BD",
        "bn-bd": "bn_BD",
        ca: "ca_ES",
        "ca-es": "ca_ES",
        cs: "cs_CZ",
        "cs-cz": "cs_CZ",
        da: "da_DK",
        "da-dk": "da_DK",
        de: "de_DE",
        "de-de": "de_DE",
        el: "el_GR",
        "el-gr": "el_GR",
        en: "en_US",
        "en-us": "en_US",
        "en-gb": "en_GB",
        "en-xc": "en_XC",
        es: "es_ES",
        "es-es": "es_ES",
        "es-419": "es_MX",
        "es-ar": "es_MX",
        "es-bo": "es_MX",
        "es-cl": "es_MX",
        "es-co": "es_MX",
        "es-cr": "es_MX",
        "es-do": "es_MX",
        "es-ec": "es_MX",
        "es-gt": "es_MX",
        "es-hn": "es_MX",
        "es-mx": "es_MX",
        "es-ni": "es_MX",
        "es-pa": "es_MX",
        "es-pe": "es_MX",
        "es-pr": "es_MX",
        "es-py": "es_MX",
        "es-sv": "es_MX",
        "es-us": "es_MX",
        "es-uy": "es_MX",
        "es-ve": "es_MX",
        et: "et_EE",
        "et-ee": "et_EE",
        eu: "eu_ES",
        "eu-es": "eu_ES",
        fi: "fi_FI",
        "fi-fi": "fi_FI",
        fil: "fil_PH",
        "fil-ph": "fil_PH",
        tl: "fil_PH",
        "tl-ph": "fil_PH",
        fr: "fr_FR",
        "fr-fr": "fr_FR",
        "fr-ca": "fr_CA",
        gl: "gl_ES",
        "gl-es": "gl_ES",
        gu: "gu_IN",
        "gu-in": "gu_IN",
        hi: "hi_IN",
        "hi-in": "hi_IN",
        hr: "hr_HR",
        "hr-hr": "hr_HR",
        hu: "hu_HU",
        "hu-hu": "hu_HU",
        id: "id_ID",
        "id-id": "id_ID",
        is: "is_IS",
        "is-is": "is_IS",
        it: "it_IT",
        "it-it": "it_IT",
        ja: "ja_JP",
        "ja-jp": "ja_JP",
        kn: "kn_IN",
        "kn-in": "kn_IN",
        ko: "ko_KR",
        "ko-kr": "ko_KR",
        lt: "lt_LT",
        "lt-lt": "lt_LT",
        lv: "lv_LV",
        "lv-lv": "lv_LV",
        ml: "ml_IN",
        "ml-in": "ml_IN",
        mr: "mr_IN",
        "mr-in": "mr_IN",
        ms: "ms_MY",
        "ms-my": "ms_MY",
        nl: "nl_NL",
        "nl-nl": "nl_NL",
        no: "nb_NO",
        "no-no": "nb_NO",
        nb: "nb_NO",
        "nb-no": "nb_NO",
        pl: "pl_PL",
        "pl-pl": "pl_PL",
        "pt-br": "pt_BR",
        pt: "pt_BR",
        "pt-pt": "pt_PT",
        ro: "ro_RO",
        "ro-ro": "ro_RO",
        mo: "ro_RO",
        ru: "ru_RU",
        "ru-ru": "ru_RU",
        sk: "sk_SK",
        "sk-sk": "sk_SK",
        sl: "sl_SI",
        "sl-si": "sl_SI",
        sr: "sr_RS",
        "sr-rs": "sr_RS",
        "sr-cyrl-rs": "sr_RS",
        sv: "sv_SE",
        "sv-se": "sv_SE",
        sw: "sw_TZ",
        "sw-tz": "sw_TZ",
        ta: "ta_IN",
        "ta-in": "ta_IN",
        te: "te_IN",
        "te-in": "te_IN",
        th: "th_TH",
        "th-th": "th_TH",
        tr: "tr_TR",
        "tr-tr": "tr_TR",
        uk: "uk_UA",
        "uk-ua": "uk_UA",
        vi: "vi_VN",
        "vi-vn": "vi_VN",
        "zh-cn": "zh_CN",
        zh: "zh_CN",
        "zh-hans": "zh_CN",
        "zh-hans-cn": "zh_CN",
        "zh-hk": "zh_HK",
        "zh-hant-hk": " zh_HK",
        "zh-tw": "zh_TW",
        "zh-hant": "zh_TW",
        "zh-hant-tw": "zh_TW",
        zu: "zu_ZA",
        "zu-za": "zu_ZA"
    };
    d = Gg.prototype;
    d.LB = function() {
        this.YQ();
        this.aR() ? this.l = 4 : this.ZQ() ? this.l = 2 : this.$Q() ? this.l = 3 : this.sb = "en_US";
        this.bR()
    };
    d.YQ = function() {
        this.k = Ue(this.o.search).hl || "";
        this.p = this.V.environment && this.V.environment.language || "";
        this.j = this.V.navigator && (this.V.navigator.language || this.V.navigator.userLanguage || this.V.navigator.systemLanguage || this.V.navigator.browserLanguage) || ""
    };
    d.aR = function() {
        return !!this.k && this.jo(this.k)
    };
    d.ZQ = function() {
        if (this.p)
            for (var a = ["en_us", "en", "en-us"], b = this.CR(this.p), c = 0; c < b.length; ++c) {
                var e = b[c];
                if (-1 < a.indexOf(e.toLowerCase())) break;
                if (this.jo(e)) return !0
            }
        return !1
    };
    d.CR = function(a) {
        return Qa(a.split(","), function(a) {
            return wa(a.split(";")[0])
        })
    };
    d.$Q = function() {
        return !!this.j && this.jo(this.j)
    };
    d.jo = function(a) {
        var b = this.yH(a);
        return b ? (this.g = a, this.sb = b, this.i = null, a && (b = a.replace("_", "-").split("-"), 1 != b.length && (b = b[b.length - 1].toUpperCase(), "XX" == b ? this.g = a.slice(0, -3) : 2 == b.length && "XC" != b && (this.i = b))), !0) : !1
    };
    d.yH = function(a) {
        if (/^[\s\xa0]*$/.test(null == a ? "" : String(a)) || 2 > a.length) return null;
        a = a.replace("_", "-").toLowerCase();
        for (var b = Hg[a]; !b && 1 < a.indexOf("-");) a = a.slice(0, a.lastIndexOf("-")), b = Hg[a];
        return b
    };
    d.RC = function() {
        var a = {
            a: "tv_locale"
        };
        a.param = this.k;
        a.header = this.p;
        a.navigator = this.j;
        a.extract = this.l;
        a.rawhl = this.g;
        a.hl = this.sb;
        a.gl = this.i;
        a.geo = this.V.environment && this.V.environment.country;
        return a
    };
    d.bR = function() {
        var a = this.sb.split("_");
        this.h = Fg.apply(null, a)
    };
    d.AQ = function() {
        return E(["zh_CN", "zh_HK", "zh_TW", "ja_JP"], this.sb)
    };
    Gg.inject = ["window", "location"];

    function Ig(a, b) {
        this.g = a;
        this.i = b;
        this.h = null;
        this.pE()
    }
    d = Ig.prototype;
    d.pE = function() {
        var a = this.g.sb.split("_");
        this.h = Fg.apply(null, a)
    };
    d.T = function(a) {
        if (!a) return "";
        if (-1 == a.indexOf("[[")) return a;
        var b = "",
            c, e = 0;
        do
            if (c = a.indexOf("[[", e), 0 < e && (e += 2), 0 <= c ? (b += a.slice(e, c), e = a.indexOf("]]", c)) : (b += a.slice(e), e = -1), 0 <= c && 0 <= e) var f = a.slice(c + 2, e),
                b = b + this.MV(f);
        while (0 <= c && 0 <= e);
        return b
    };
    d.MV = function(a) {
        var b = a.split("|");
        if (2 > b.length) return a;
        var c;
        (a = b[b.length - 1]) && !isNaN(a) && (c = b.pop());
        a = b.pop();
        b = b.join("|");
        return this.i.h(b, a, c)
    };
    d.nt = function(a) {
        return this.h.qP(a)
    };
    d.ef = function(a) {
        return this.h.rP(a)
    };
    d.$k = function(a) {
        return this.h.pP(a)
    };
    Ig.inject = ["localeModel", "messages"];

    function Jg() {}
    Jg.prototype.h = function(a, b) {
        var c = p("yt.player.embed");
        return c && c(a, b)
    };
    Jg.prototype.g = function() {
        return !!p("yt.player.embed")
    };

    function Kg() {
        I.call(this);
        this.L = -1;
        this.o = !1
    }
    B(Kg, I);
    Kg.prototype.Me = function() {
        return this.L
    };
    Kg.prototype.isMuted = function() {
        return this.o
    };
    Kg.prototype.Ka = function(a, b) {
        if (a !== this.L || b !== this.o) {
            var c = {
                volume: this.L,
                muted: this.o
            };
            this.L = a;
            this.o = b;
            this.B("volumeData:changed", {
                volume: a,
                muted: b
            }, c)
        }
    };
    Kg.prototype.Ua = function() {
        this.B("volumeData:changed", {
            volume: this.L,
            muted: this.o
        }, {
            volume: this.L,
            muted: this.o
        })
    };

    function Lg(a, b, c, e, f, g, k, m, n, r, u, t, x, G) {
        Kg.call(this);
        this.V = a;
        this.G = b;
        this.i = c;
        this.zb = e;
        this.za = f;
        this.ib = g;
        this.sa = k;
        this.k = m;
        this.h = n;
        this.Xb = r;
        this.yb = u;
        this.Kb = t;
        this.Jb = x;
        this.Hb = G;
        this.Ea = [];
        this.aa = !1;
        this.na = [];
        this.g = this.U = null;
        this.J = this.j = !1;
        this.la = null;
        this.Ja = this.isPlayingAd = this.isPlaying = this.needsLogin = !1;
        this.Z = this.w = this.state = -1;
        this.F = !1;
        this.A = {};
        this.l = NaN;
        this.O = this.k.Zz(this.$z, 800, this);
        this.W = -1;
        this.Ib = y(this.bi, this);
        this.va = this.p = q;
        this.qa = -1;
        this.I = q;
        if (a =
            this.G.Za("start_watch") || this.G.Za("start_cast") || this.G.Za("start_dial")) this.p = y(a.tick, a), this.va = y(this.G.report, this.G, a.name);
        this.i.l && document.addEventListener("webkitvisibilitychange", y(function() {
            document.webkitHidden ? this.pause() : 2 === this.state && this.play()
        }, this), !1);
        this.ai()
    }
    B(Lg, Kg);
    ba("yt.tv.services.PlayerService", Lg, void 0);
    de(Lg, ["isPlaying", "isPlayingAd", "state"]);
    d = Lg.prototype;
    d.ET = function(a) {
        this.Ea = a
    };
    d.vT = function() {
        this.Ja = !0
    };
    d.pw = function() {
        return this.HV("captions")
    };
    d.zT = function() {
        if (!this.pw()) return !1;
        this.g.loadModule("captions");
        return !0
    };
    d.HT = function() {
        var a = this.ae();
        a && a.unloadModule && (this.Gh("captions", "stickyLoading", !1), this.g.unloadModule("captions"))
    };
    d.yT = function() {
        return this.sp("captions", "tracklist", {
            includeAsr: 1
        }) || []
    };
    d.Uy = function(a) {
        return this.Gh("captions", "displaySettings", a)
    };
    d.BT = function() {
        this.Gh("captions", "displaySettings", {
            reset: 1
        })
    };
    d.xT = function() {
        return this.sp("captions", "displaySettings") || {}
    };
    d.FT = function(a) {
        this.Gh("captions", "sampleSubtitles", a)
    };
    d.wT = function() {
        return this.sp("captions", "track") || {}
    };
    d.DT = function(a) {
        a.style && this.Uy(a.style);
        return this.Gh("captions", "track", a)
    };
    d.Me = function() {
        if (!this.j) return this.Fj(), Lg.u.Me.call(this);
        var a = this.g.getVolume();
        return ea(a) ? a : Lg.u.Me.call(this)
    };
    d.isMuted = function() {
        return this.j ? this.g.isMuted() : (this.Fj(), Lg.u.isMuted.call(this))
    };
    d.setVolume = function(a) {
        this.ed(y(function() {
            this.g.setVolume(a)
        }, this))
    };
    d.Mf = function() {
        this.ed(y(function() {
            this.g.mute()
        }, this))
    };
    d.Ke = function() {
        this.ed(y(function() {
            this.g.unMute()
        }, this))
    };
    d.ae = function() {
        return this.j ? this.g : null
    };
    d.Fj = function() {
        this.g || (this.la = this.k.KI(this.sa.g), this.la.Dd = y(this.NI, this, "leanback-player-container", this.LI()), this.MI())
    };
    d.MI = function() {
        this.J ? this.wn() : this.sa.g() ? (this.J = !0, this.wn()) : (this.p("pljs_rq"), bg(this.V.environment.player_url, {
            timeout: 3E4
        }).Sd(y(this.yI, this)).Hg(y(this.Pk, this)))
    };
    d.yI = function() {
        this.J = !0;
        this.p("pljs_r");
        this.wn()
    };
    d.wn = function() {
        !this.g && this.J && this.la.QJ(0, 1E3)
    };
    d.NI = function(a, b) {
        this.g || (this.p("pem_rq"), this.g = this.sa.h(a, b))
    };
    d.LI = function() {
        var a = this.V.swfConfig;
        z(a.args, {
            autoplay: 0,
            BASE_YT_URL: null,
            controls: 0,
            el: "leanback",
            enablejsapi: 1,
            forced_experiments: this.i.forcedExperiments,
            ps: "leanback",
            jsapicallback: y(this.wJ, this),
            iv_load_policy: 3,
            cc_load_policy: 3,
            hl: this.Jb.sb,
            svt: this.i.supportsSingleVideoTag,
            canplaylive: this.i.supportsLive,
            store_user_volume: !1,
            use_media_volume: this.i.l && !this.i.zk
        });
        z(a.args, this.i.Gv());
        a.assets.css = null;
        a.html5 = !0;
        a.disable = {
            flash: !0
        };
        a.fallback = y(function() {
            this.Pk()
        }, this);
        this.i.h ||
            (a.args.video_container_override = this.vJ());
        this.i.forceSslStreaming && (a.args.ssl_stream = 1);
        return a
    };
    d.wU = function() {
        return this.V.innerWidth + "x" + this.V.innerHeight
    };
    d.vJ = function() {
        var a;
        this.yb.isSupported() && (a = this.yb.getVideoContainerSizeOverride());
        return a || this.wU()
    };
    d.Eg = function() {
        this.Sl();
        this.Yi();
        this.W = this.k.cf(this.Ib, 500)
    };
    d.Yi = function() {
        this.k.Je(this.W);
        this.W = -1
    };
    d.Uu = function() {
        this.U = null;
        this.l = NaN
    };
    d.ai = function() {
        this.h.timeLeft = 0;
        this.h.currentTime = 0;
        this.h.duration = 0;
        this.h.percentageLoaded = 0;
        this.h.percentagePlayed = 0
    };
    d.po = function() {
        return this.isPlayingAd ? 2 : 1
    };
    d.bi = function() {
        var a = this.ae();
        if (a && this.F) {
            var a = a.getVideoLoadedFraction(this.po()),
                b = this.pO(),
                c, e;
            0 == this.state ? (c = b, e = 1) : this.qj() ? (b = 0, a = e = 1, c = this.jx()) : (c = this.jx(), e = !isNaN(c) && isFinite(c) && !isNaN(b) && isFinite(b) && 0 !== b ? c / b : c = b = 0);
            this.qO(c);
            0 !== b && (this.h.duration = b);
            this.h.currentTime = c;
            this.h.timeLeft = Math.max(Math.round(this.h.duration - this.h.currentTime), 1);
            this.h.percentageLoaded = this.rj(a);
            this.h.percentagePlayed = this.rj(e)
        } else this.ai()
    };
    d.rj = function(a) {
        return isNaN(a) || !isFinite(a) ? 0 : Math.round(1E3 * a) / 1E3
    };
    d.wJ = function() {
        this.p("pem_r");
        this.j = !0;
        this.Nt();
        this.g.addEventListener("onStateChange", y(this.tm, this));
        this.g.addEventListener("onAdStateChange", y(this.Pt, this));
        this.g.addEventListener("onAdInfoChange", y(this.B, this, "adInfo:changed"));
        this.g.addEventListener("onDetailedError", y(this.Pk, this));
        this.g.addEventListener("onCaptionsTrackListChanged", y(this.B, this, "subtitlesTrackList:changed"));
        this.g.addEventListener("captionschanged", y(this.B, this, "subtitlesTrack:changed"));
        this.g.addEventListener("onVolumeChange",
            y(this.kG, this));
        this.g.addEventListener("onApiChange", y(this.B, this, "api:changed"));
        this.g.addEventListener("onFrescaStateChange", y(this.jG, this));
        this.Fl()
    };
    d.Pt = function(a) {
        this.Z = a;
        this.Zu()
    };
    d.tm = function(a) {
        if (-1 !== a || 0 !== this.w) {
            this.k.clearTimeout(this.qa);
            switch (a) {
                case 3:
                    3 !== this.w && this.O.pause();
                    break;
                case -1:
                case 0:
                    this.O.stop()
            }
            3 === this.w && 3 !== a && this.O.PH();
            0 === a && this.ed(y(function() {
                this.g.stopVideo()
            }, this));
            this.w = a;
            this.Zu();
            1 != this.state || this.isPlayingAd || (this.Ja = !1)
        }
    };
    d.jG = function(a) {
        a && a.messageText && a.messageText.length && (this.state = 1E3);
        8 === a.state && 0 !== this.w && this.TR()
    };
    d.TR = function() {
        this.k.clearTimeout(this.qa);
        var a = y(this.tm, this, 0);
        this.qa = this.k.setTimeout(a, 5E3)
    };
    d.LP = function() {
        var a = this.isPlayingAd;
        switch (this.Z) {
            case 0:
            case -1:
                this.isPlayingAd = !1;
                break;
            case 3:
            case 1:
                this.isPlayingAd = !0
        }
        return a != this.isPlayingAd
    };
    d.Zu = function() {
        var a = this.LP();
        this.state = this.isPlayingAd ? this.Z : this.w;
        var b = this.F;
        switch (this.state) {
            case 3:
                this.bl();
                break;
            case -1:
            case 0:
                this.bi();
                this.F = this.isPlaying = !1;
                this.Sl();
                this.Yi();
                break;
            case 2:
                this.isPlaying = !1;
                break;
            case 1:
                this.bl(), this.F = this.isPlaying = !0
        }
        if (b = this.F && !b) this.p("pb_r"), this.va(), this.va = this.p = q;
        if (a || b) this.bi(), -1 === this.W && this.Eg()
    };
    d.Pk = function(a) {
        this.Uu();
        this.ai();
        this.Yi();
        this.needsLogin = !!a && 1 == a.errorDetail;
        this.state = -1E3;
        a = new Mg(a);
        this.Hb.B("run-process", a)
    };
    d.bl = function() {
        this.needsLogin = !1
    };
    d.HV = function(a) {
        var b = this.ae();
        a = b && b.getOptions && b.getOptions(a);
        return !(!a || !a.length)
    };
    d.sp = function(a, b, c) {
        var e = this.ae();
        return e && e.getOption ? e.getOption(a, b, c) : null
    };
    d.Gh = function(a, b, c) {
        var e = this.ae();
        return e && e.setOption ? (e.setOption(a, b, c), !0) : !1
    };
    d.kG = function(a) {
        a.volume = Math.round(a.volume);
        this.Ka(a.volume, a.muted)
    };
    d.ed = function(a) {
        this.na.push(a);
        this.j ? this.Fl() : this.Fj()
    };
    d.tL = function(a) {
        this.j && this.ed(a)
    };
    d.Fl = function() {
        if (!this.aa) {
            this.aa = !0;
            for (var a = this.na.length, b = 0; b < a && this.j; ++b) this.na[b]();
            this.na.splice(0, b);
            this.aa = !1
        }
    };
    d.pO = function() {
        return Math.ceil(this.vj())
    };
    d.vj = function() {
        var a = this.ae();
        return a && a.getDuration ? a.getDuration(this.po()) : 0
    };
    d.Ih = function() {
        var a = this.ae(),
            b = 0;
        a && a.getCurrentTime && (b = this.rj(a.getCurrentTime(this.po())));
        return b
    };
    d.jx = function() {
        return isNaN(this.l) ? this.Ih() : this.l
    };
    d.$z = function() {
        if (this.U) {
            var a = this.U;
            this.U = null;
            this.ed(a)
        }
    };
    d.AT = function(a) {
        this.ib.startTime = a;
        this.Ry()
    };
    d.Ry = function() {
        this.stop(!0);
        this.ed(y(function() {
            this.j = !1;
            this.B("getting-token");
            this.za.Cb(y(function(a) {
                this.j = !0;
                this.bl();
                a = this.ib.j(a, this.Ea, this.Ja);
                this.ib.i ? this.g.cueVideoByPlayerVars(a) : this.g.loadVideoByPlayerVars(a);
                2 == this.i.k.length && this.g.setPlaybackQualityRange(this.i.k[0], this.i.k[1]);
                this.Kb.get() ? this.g.showVideoInfo() : this.g.hideVideoInfo();
                this.B("video:changed");
                this.Eg();
                this.Or();
                this.Fl()
            }, this))
        }, this))
    };
    d.GT = function() {
        this.isPlaying ? this.pause() : this.play()
    };
    d.play = function() {
        this.ed(y(function() {
            this.qj() && this.g.seekTo(Infinity);
            this.g.playVideo();
            this.Eg();
            this.Or()
        }, this))
    };
    d.Or = function() {
        this.I();
        this.I = this.za.C("oauth-expired", y(this.tR, this))
    };
    d.Sl = function() {
        this.I();
        this.I = q
    };
    d.stop = function(a) {
        if (this.j && this.g) {
            var b = 0 != this.state && -1 != this.state;
            this.Sl();
            this.Yi();
            this.Uu();
            this.ai();
            b && this.ed(y(function() {
                this.g.stopVideo()
            }, this));
            this.B("adInfo:changed", null);
            if (b || a) this.tm(-1), this.Pt(-1)
        }
    };
    d.tR = function() {
        this.za.Cb(y(function(a) {
            this.g.updateVideoData({
                oauth_token: a
            })
        }, this))
    };
    d.pause = function() {
        this.ed(y(function() {
            this.g.pauseVideo()
        }, this))
    };
    d.Uw = function(a, b) {
        this.qj() || this.isPlayingAd || (a = Math.max(a, 0), a = Math.min(a, this.vj()), a = this.rj(a), a = Math.max(a, .001), this.U = y(function() {
            this.l = NaN;
            this.Eg();
            this.g.seekTo(a, b)
        }, this), this.Eg(), this.l = a, this.bi(), this.O.vv())
    };
    d.CT = function(a) {
        var b = isNaN(this.l) ? this.h.currentTime : this.l;
        a = 0 < a ? Math.min(this.vj(), b + a) : Math.max(0, b + a);
        a != b && this.Uw(a, !0)
    };
    d.Nt = function() {
        this.tL(y(function() {
            this.g && this.g.updateLastActiveTime()
        }, this))
    };
    d.tT = function(a, b, c, e) {
        this.h.currentTime >= b ? c() : this.A[a] = {
            time: b,
            $d: c,
            mode: e || 1
        }
    };
    d.qO = function(a) {
        var b, c;
        for (c in this.A) b = this.A[c], (!this.isPlayingAd || 1 !== b.mode) && a >= b.time && (b.$d(), delete this.A[c])
    };
    d.v5 = function(a) {
        return a in this.A
    };
    d.uT = function() {
        this.A = {}
    };
    d.qj = function() {
        var a = this.ae();
        return a && !this.isPlayingAd ? (a = a.getVideoData()) && a.isLive : !1
    };
    Lg.inject = "window csiService environmentModel localeService authService playerVariablesModel playerFactoryService timeService progressModel ytHttp systemApi videoInfoVisibleFlag localeModel rootDispatcher".split(" ");

    function Ng(a, b) {
        this.h = a;
        this.j = b
    }
    Ng.prototype.i = function() {
        return this.h
    };
    Ng.prototype.g = function() {
        return this.j
    };

    function Og(a, b, c) {
        this.l = a;
        this.i = b || q;
        this.j = c || q;
        this.h = null;
        this.g = {}
    }
    d = Og.prototype;
    d.nL = function() {
        return this.i
    };
    d.oL = function() {
        return this.j
    };
    d.getName = function() {
        return this.l
    };
    d.hP = function(a) {
        this.h = a
    };
    d.s7 = function() {
        return this.h
    };
    d.r7 = function(a) {
        return this.ts(a.i(), a.g())
    };
    d.ts = function(a, b) {
        wc(this.g, a, new Ng(a, b));
        return this
    };
    d.f4 = function() {
        return pc(this.g)
    };
    d.z4 = function(a) {
        return this.g[a] || null
    };
    d.rs = function(a) {
        return !!this.g[a] || !(!this.h || !this.h.rs(a))
    };
    d.EH = function(a) {
        return this.Hu(a, this.getName())
    };
    d.Hu = function(a, b) {
        return this.g[a] ? this.g[a].g() : this.h ? this.h.Hu(a, b) : b
    };

    function Pg() {
        I.call(this);
        this.i = {};
        this.h = this.g = null;
        this.lE(this.kE(this.ss()))
    }
    B(Pg, I);
    d = Pg.prototype;
    d.initialize = function() {
        this.h && this.Ew(this.h)
    };
    d.lE = function(a) {
        this.i = a
    };
    d.ss = function() {
        return []
    };
    d.Oc = function(a, b, c) {
        return new Og(a, b, c)
    };
    d.Ew = function(a) {
        (a = this.i[a.getName()]) && this.Qu(a)
    };
    d.B3 = function() {
        return this.g
    };
    d.q7 = function(a) {
        return H(this.i, a) || null
    };
    d.Kh = function(a) {
        a = this.DH(a);
        if (!this.g.rs(a)) return !1;
        a = this.g.EH(a);
        return a != this.g.getName() ? (this.Qu(this.i[a]), !0) : !1
    };
    d.Qu = function(a) {
        var b = this.g;
        b && b.oL()(b, a);
        this.g = a;
        this.g.nL()(this.g, b)
    };
    d.DH = function(a) {
        return a
    };
    d.kE = function(a) {
        for (var b = {}, c = 0, e = a.length; c < e; ++c) {
            for (var f = a[c], g = H(f, "state"), k = H(f, "rules", []), m = 0, n = k.length; m < n; ++m) {
                var r = k[m],
                    u = H(r, "event"),
                    t = H(r, "nextState");
                if (void 0 != u && t) g.ts(u, t.getName());
                else throw Error("Attempting to parse malformed rule: " + r);
            }
            g.hP(H(f, "parent", null));
            if ("initial" in f) {
                if (this.h) throw Error("Attempting to parse duplicate initial state: " + g);
                this.h = g
            }
            wc(b, g.getName(), g)
        }
        return b
    };

    function Qg(a) {
        Pg.call(this);
        this.p = a;
        this.oa = null;
        this.l = -1;
        this.spinnerState = this.j = 0
    }
    B(Qg, Pg);
    de(Qg, ["spinnerState"]);
    Qg.prototype.k = function(a) {
        this.oa = a;
        this.oa.C("state:changed", y(this.Kh, this));
        this.oa.C("getting-token", y(this.Kh, this, "getting-token"))
    };
    var Rg = {
        IT: "buffering-confirmed",
        JT: "getting-token",
        KT: "getting-token-long",
        LT: "playing-confirmed"
    };
    d = Qg.prototype;
    d.ss = function() {
        for (var a = y(this.MT, this), b = y(this.QT, this), c = y(this.Vj, this), e = this.Oc("unstarted", a), f = this.Oc("gettingToken", y(this.PT, this), c), g = this.Oc("gettingTokenLong", b), k = this.Oc("confirmingPlaying", y(this.OT, this), c), m = this.Oc("confirmingBuffering", y(this.NT, this), c), n = this.Oc("playing", a), c = this.Oc("paused", a), r = this.Oc("buffering", b), b = this.Oc("error", a), u = this.Oc("ended", a), a = this.Oc("message", a), f = [{
                state: e,
                initial: !0,
                rules: [{
                    event: Rg.JT,
                    nextState: f
                }, {
                    event: 1,
                    nextState: k
                }, {
                    event: 3,
                    nextState: m
                }]
            }, {
                state: f,
                rules: [{
                    event: Rg.KT,
                    nextState: g
                }, {
                    event: 1,
                    nextState: k
                }, {
                    event: 3,
                    nextState: m
                }]
            }, {
                state: g,
                rules: [{
                    event: 1,
                    nextState: k
                }, {
                    event: 3,
                    nextState: m
                }]
            }, {
                state: b,
                rules: []
            }, {
                state: u,
                rules: [{
                    event: 1,
                    nextState: k
                }, {
                    event: 3,
                    nextState: m
                }]
            }, {
                state: k,
                rules: [{
                    event: Rg.LT,
                    nextState: n
                }, {
                    event: 3,
                    nextState: m
                }]
            }, {
                state: m,
                rules: [{
                    event: Rg.IT,
                    nextState: r
                }, {
                    event: 1,
                    nextState: k
                }, {
                    event: 1E3,
                    nextState: a
                }]
            }, {
                state: n,
                rules: [{
                    event: 3,
                    nextState: m
                }]
            }, {
                state: c,
                rules: [{
                    event: 1,
                    nextState: k
                }]
            }, {
                state: r,
                rules: [{
                    event: 1,
                    nextState: k
                }, {
                    event: 1E3,
                    nextState: a
                }]
            }, {
                state: a,
                rules: [{
                    event: 1,
                    nextState: k
                }]
            }], g = 0, k = f.length; g < k; ++g) a = f[g], a.state !== c && a.state !== b && a.rules.push({
            event: 2,
            nextState: c
        }), a.state !== e && a.rules.push({
            event: -1,
            nextState: e
        }), a.state !== u && a.state !== c && a.rules.push({
            event: 0,
            nextState: u
        }), a.state !== b && a.rules.push({
            event: -1E3,
            nextState: b
        });
        return f
    };
    d.PT = function() {
        var a = y(this.Kh, this, "getting-token-long");
        this.lp(a, 800)
    };
    d.OT = function() {
        this.lp(y(this.XU, this), 100)
    };
    d.NT = function(a, b) {
        this.lp(y(this.WU, this, b), 800)
    };
    d.lp = function(a, b) {
        this.Vj();
        this.j = this.oa.Ih();
        this.l = this.p.cf(a, b)
    };
    d.Vj = function() {
        this.p.Je(this.l)
    };
    d.WU = function(a) {
        this.Vj();
        this.oa.Ih() <= this.j ? this.Kh("buffering-confirmed") : this.Ew(a)
    };
    d.XU = function() {
        this.oa.Ih() > this.j && (this.Vj(), this.Kh("playing-confirmed"))
    };
    d.MT = function() {
        this.spinnerState = 0
    };
    d.QT = function() {
        this.spinnerState = 1
    };

    function Sg(a, b, c) {
        I.call(this);
        this.oa = a;
        this.l = b;
        this.h = c;
        this.spinnerShowing = !1;
        this.j = null;
        this.needsLogin = this.isPlaying = this.isPlayingAd = !1;
        this.state = -1;
        this.g = new Qg(b);
        this.i()
    }
    B(Sg, I);
    de(Sg, ["spinnerShowing"]);
    Sg.prototype.i = function() {
        this.WI();
        this.g.k(this.oa);
        this.g.initialize()
    };

    function Tg(a) {
        Sg.prototype.__defineGetter__(a, function() {
            return this.oa[a]
        });
        Sg.prototype.__defineSetter__(a, function(b) {
            this.oa[a] = b
        })
    }
    Tg("needsLogin");
    Tg("isPlaying");
    Tg("isPlayingAd");
    Tg("state");
    d = Sg.prototype;
    d.WI = function() {
        this.g.C("spinnerState:changed", y(this.GJ, this));
        for (var a = "subtitlesTrackList subtitlesTrack volumeData adInfo video isPlaying isPlayingAd api".split(" "), b = 0, c = a.length; b < c; ++b) {
            var e = a[b] + ":changed";
            this.oa.C(e, y(this.Yv, this, e))
        }
        e = "state:changed";
        this.oa.C(e, y(this.HJ, this, e))
    };
    d.Yv = function(a, b) {
        this.B.apply(this, arguments)
    };
    d.HJ = function(a, b) {
        2 == b && this.oa.Ih() == this.oa.vj() || this.Yv(a, b)
    };
    d.GJ = function(a) {
        this.spinnerShowing = 1 == a
    };
    d.Iv = function(a, b, c, e) {
        this.oa.tT(a, b, c, e)
    };
    d.Yl = function() {
        this.oa.uT()
    };
    d.IJ = function() {
        this.oa.vT()
    };
    d.Si = function() {
        return this.oa.wT()
    };
    d.Ji = function() {
        return this.oa.yT()
    };
    d.cr = function() {
        return this.oa.zT()
    };
    d.Wi = function() {
        this.oa.Ry()
    };
    d.pause = function() {
        this.oa.pause()
    };
    d.play = function() {
        this.oa.play()
    };
    d.yD = function(a) {
        this.oa.AT(a)
    };
    d.Ni = function(a, b) {
        this.oa.Uw(a, b)
    };
    d.av = function(a) {
        return this.oa.DT(a)
    };
    d.lj = function(a) {
        this.oa.ET(a)
    };
    d.Em = function(a) {
        return this.oa.Uy(a)
    };
    d.rJ = function() {
        this.oa.BT()
    };
    d.Dr = function() {
        return this.oa.xT()
    };
    d.Vm = function(a) {
        this.oa.FT(a)
    };
    d.stop = function(a) {
        this.oa.stop(a)
    };
    d.ln = function() {
        this.oa.HT()
    };
    d.ic = function() {
        this.oa.Nt();
        this.B("user:activity")
    };
    d.ul = function() {
        return this.oa.pw()
    };
    d.Om = function() {
        this.oa.GT()
    };
    d.Jj = function(a) {
        this.oa.CT(a)
    };
    d.setVolume = function(a) {
        this.oa.setVolume(a)
    };
    d.Me = function() {
        return this.oa.Me()
    };
    d.isMuted = function() {
        return this.oa.isMuted()
    };
    d.Mf = function() {
        this.oa.Mf()
    };
    d.Ke = function() {
        this.oa.Ke()
    };
    d.qK = function() {
        this.oa.Fj()
    };
    d.rf = function() {
        return this.oa.qj() || !this.isPlayingAd && !(!this.h.currentVideo || !this.h.currentVideo.liveBadgeText)
    };
    d.ii = function() {
        return !this.isPlayingAd && (1 == this.state || 3 == this.state || 2 == this.state)
    };
    Sg.inject = ["playerService", "timeService", "watchModel"];

    function Ug(a, b, c, e, f, g, k, m, n, r, u, t, x, G) {
        I.call(this);
        this.o = a;
        this.L = b;
        this.h = c;
        this.j = e;
        this.G = f;
        this.p = g;
        this.U = k;
        this.i = m;
        this.k = n;
        this.I = r;
        this.l = u;
        this.A = t;
        this.w = x;
        this.F = G;
        this.aC()
    }
    B(Ug, I);
    var Vg = {
            LIKE_DISLIKE: "[[Please sign in to like or dislike...|Dialog title asking a user to sign in before they can like or dislike this video.]]",
            STANDARD: "[[Sign in to YouTube:|Dialog title helping a user to sign in to YouTube via this application.]]",
            SUBSCRIBE: "[[Please sign in to subscribe...|Dialog title asking a user to sign in before they can subscribe.]]",
            UPLOAD: "[[Please sign in to upload a video...|Dialog title asking a user to sign to upload a video.]]"
        },
        Wg = {
            LIKE_DISLIKE: "like-dislike-login",
            PLAYER: "player-login",
            STANDARD: "standard-login",
            SUBSCRIBE: "subscribe-login",
            UPLOAD: "upload-login"
        };
    d = Ug.prototype;
    d.CA = function(a) {
        this.g = a
    };
    d.aC = function() {
        for (var a = [{
                eventName: "request-auth-error-dialog",
                handler: this.Pw
            }, {
                eventName: "request-cancel-dialog",
                handler: this.Ks
            }, {
                eventName: "request-clear-storage-dialog",
                handler: this.UM
            }, {
                eventName: "request-clear-watch-history-dialog",
                handler: this.VM
            }, {
                eventName: "request-close-dialog",
                handler: this.sc
            }, {
                eventName: "request-confirm-content",
                handler: this.XM
            }, {
                eventName: "request-flag-options-dialog",
                handler: this.hN
            }, {
                eventName: "request-flag-video-dialog",
                handler: this.iN
            }, {
                eventName: "request-flag-claim-dialog",
                handler: this.gN
            }, {
                eventName: "request-cc-options-dialog",
                handler: this.WM
            }, {
                eventName: "network-failure",
                handler: this.qN
            }, {
                eventName: "request-deeplink-video-error-dialog",
                handler: this.ZM
            }, {
                eventName: "request-debug-dialog",
                handler: this.YM
            }, {
                eventName: "request-delete-video-dialog",
                handler: this.$M
            }, {
                eventName: "request-eureka-authorization-dialog",
                handler: this.cN
            }, {
                eventName: "request-eureka-player-error-dialog",
                handler: this.dN
            }, {
                eventName: "request-logout-dialog",
                handler: this.nN
            }, {
                eventName: "request-ps4-logout",
                handler: this.vN
            }, {
                eventName: "request-delete-video-error",
                handler: this.aN
            }, {
                eventName: "request-delete-video-progress-dialog",
                handler: this.bN
            }, {
                eventName: "request-loading-dialog",
                handler: this.lN
            }, {
                eventName: "request-login-dialog",
                handler: this.mN
            }, {
                eventName: "request-missing-channel-dialog",
                handler: this.oN
            }, {
                eventName: "request-modify-video-dialog",
                handler: this.pN
            }, {
                eventName: "request-paid-channel-subscription-error-dialog",
                handler: this.ON
            }, {
                eventName: "request-paid-scope-dialog",
                handler: this.rN
            }, {
                eventName: "request-pairing-dialog",
                handler: this.sN
            }, {
                eventName: "request-platform-login",
                handler: this.tN
            }, {
                eventName: "request-player-error-dialog",
                handler: this.uN
            }, {
                eventName: "request-remote-reset-dialog",
                handler: this.wN
            }, {
                eventName: "request-subscription-error-dialog",
                handler: this.AN
            }, {
                eventName: "request-tos-dialog",
                handler: this.NN
            }, {
                eventName: "request-licenses-dialog",
                handler: this.MN
            }, {
                eventName: "request-kenko-dialog",
                handler: this.kN
            }, {
                eventName: "request-view-shiyojo",
                handler: this.zN
            }, {
                eventName: "request-help-dialog",
                handler: this.jN
            }, {
                eventName: "request-feedback-dialog",
                handler: this.fN
            }, {
                eventName: "request-server-unavailable",
                handler: this.xN
            }, {
                eventName: "request-video-edit-error",
                handler: this.CN
            }, {
                eventName: "request-video-processing",
                handler: this.FN
            }, {
                eventName: "request-video-privacy",
                handler: this.DN
            }, {
                eventName: "request-video-retrieval-error-dialog",
                handler: this.GN
            }, {
                eventName: "request-video-upload-overview",
                handler: this.JN
            }, {
                eventName: "request-video-upload-progress",
                handler: this.KN
            }, {
                eventName: "request-video-upload-complete",
                handler: this.HN
            }, {
                eventName: "request-video-upload-error",
                handler: this.IN
            }, {
                eventName: "request-video-uploads",
                handler: this.LN
            }, {
                eventName: "request-sets-onboarding",
                handler: this.yN
            }, {
                eventName: "request-exit-dialog",
                handler: this.eN
            }, {
                eventName: "request-system-error-dialog",
                handler: this.BN
            }], b = 0, c = a.length; b < c; ++b) this.i.C(a[b].eventName, y(a[b].handler, this));
        this.p.C("login-state-changed", y(this.Qw, this));
        this.p.vf(y(function(a, b) {
            this.Qw(a, b, !1)
        }, this))
    };
    d.ka = function(a) {
        this.g && (this.g.model = a, this.g.H());
        this.B("dialog:changed", !0)
    };
    d.sc = function() {
        this.g && (this.g.model = null, this.g.H());
        this.B("dialog:changed", !1)
    };
    d.Ks = function() {
        this.g ? this.g.boundCancelClickHandler() : this.sc()
    };
    d.O5 = function() {
        return this.g.zd()
    };
    d.E3 = function() {
        return this.g ? this.g.model : null
    };
    d.To = function(a, b) {
        var c = new De;
        c.title = a;
        c.contentUrl = b;
        this.pa(c, ["browse-sets-titled-dialog"]);
        this.ka(c)
    };
    d.hN = function(a) {
        var b = q;
        this.h.isPlaying && (b = y(this.h.play, this.h));
        this.h.pause();
        b = new O(b, b);
        b.title = "[[Flag This Video For:|Displayed in a dialog when a user decides to claim that a video is inappropriate. Followed by a list of options.]]";
        b.$ = "flagOptionsDialog";
        this.pa(b, ["browse-sets-titled-dialog"]);
        this.ka(b);
        a && L(a)
    };
    d.iN = function(a) {
        var b = q,
            c = y(this.sc, this);
        a.detail && (b = a.detail.xb || q, a.detail.Sb && (c = gc(a.detail.Sb, c)));
        b = new Ge(b, c);
        b.title = "[[To Flag this video|Tooltip helping a user to mark a video as inappropriate. Followed by a list of steps that needs to be performed.]]";
        b.$ = "flagVideoDialog";
        b.video = this.o.currentVideo;
        this.pa(b, ["browse-sets-titled-dialog"]);
        this.ka(b);
        L(a)
    };
    d.gN = function(a) {
        var b = this.o.currentVideo;
        b.title = this.l.T(b.title);
        var c = q,
            e = y(this.sc, this);
        a.detail && (c = a.detail.xb || q, a.detail.Sb && (e = gc(a.detail.Sb, e)));
        c = new Ge(c, e);
        c.title = "[[Submit a claim for:|Displayed in a dialog when a user decides to claim that a video infringes copyrights. Followed by a list of options.]]";
        c.$ = "flagClaimDialog";
        c.video = b;
        this.pa(c, ["browse-sets-titled-dialog"]);
        this.ka(c);
        L(a)
    };
    d.WM = function(a) {
        var b = y(this.yO, this, this.h.isPlaying),
            b = new O(b, b);
        b.title = "[[Captions Settings|Settings screen where the user can choose the language of subtitles or turn them off.]]";
        b.$ = "closedCaptionsDialog";
        this.pa(b, ["browse-sets-titled-dialog", "closed-captions"]);
        this.ka(b);
        a && L(a)
    };
    d.yO = function(a) {
        a && this.h.play()
    };
    d.ZM = function(a) {
        a = new Be(a.detail[0], a.detail[1]);
        a.hc = "[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]";
        a.Eb = "";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.YM = function() {
        var a = new O;
        a.title = "Debug Info";
        a.$ = "debugDialog";
        this.pa(a, ["browse-sets-titled-dialog", "text-dialog"]);
        this.ka(a)
    };
    d.CN = function(a) {
        a = a.detail[0];
        a = new Fe("[[An error has occurred while editing the video.|Error message displayed upon failure to edit a video.]]", a, a);
        a.title = "[[Edit error|Displayed once a video editing has failed.]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.FN = function() {
        var a = new Fe("[[Your file has been uploaded. We are now processing the video...|Message shown when a video file has finished uploading to YouTube and it is being processed for display]]");
        a.title = "[[Processing|Title of a dialog telling user that his/hers uploaded video is being processed.]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.DN = function(a) {
        a = new Ie(a.detail[1], a.detail[2], a.detail[0]);
        this.pa(a, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.GN = function() {
        var a = new O;
        a.title = "[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.JN = function(a) {
        var b = a.detail[0];
        a = new He(a.detail[1], a.detail[2], a.detail[3], b, a.detail[4]);
        b.videoId && (a.mj = null, a.Eb = "[[OK|Standard button title in a dialog popup. Accepts changes made by a user.]]");
        this.pa(a, ["browse-sets-titled-dialog", "browse-sets-video-info"]);
        this.ka(a)
    };
    d.$M = function(a) {
        var b = new Ge;
        b.title = "[[Delete video|Title of a dialog where user can delete an uploaded video on Xbox One]]";
        b.$ = "deleteVideoDialog";
        this.pa(b, ["text-dialog", "browse-sets-titled-dialog"]);
        b.lb = !0;
        b.Eb = "[[Yes, delete|Text on button to go ahead and delete a clip]]";
        b.Cc = "dialog-ok-button";
        b.video = a.detail[0];
        this.ka(b)
    };
    d.aN = function() {
        var a = new Fe("[[An error has occurred while deleting the video.|Error message displayed upon failure to delete an uploaded video.]]");
        a.title = "[[Delete error|Dialog title that tells the user that video was not deleted]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.bN = function(a) {
        var b = new Ge;
        b.title = "[[Deleting video...|Title of a dialog shown while video isbeing deleted]]";
        b.$ = "deleteVideoProgress";
        b.video = a.detail;
        this.pa(b, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(b)
    };
    d.pN = function(a) {
        a = new Ae(a.detail[0]);
        this.pa(a, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.ON = function(a) {
        a = a.detail && a.detail[0];
        var b = this.h.isPlaying;
        b && this.h.pause();
        var c = y(function() {
                b && this.h.play()
            }, this),
            c = new qe(null, c);
        c.title = "[[Payment Required|Title of a dialog that asks user to make a payment in order to play a video.]]";
        c.$ = "paidChannelDialog";
        c.channel = a;
        this.pa(c, ["browse-sets-titled-dialog"]);
        this.ka(c)
    };
    d.oN = function() {
        var a = new Fe("[[You need to create a channel for your account. Go to www.youtube.com/create_channel on your computer or mobile browser to get started.|Text message displayed when an error occurs while user tries to perform an action that requires YouTube channel. Happens to a user who has signed in using Google account but never visited YouTube website. Advises the user to visit YouTube website in order to complete creation of the channel.]]");
        a.title = "[[Video upload error|Title of a dialog that shows error message that occurs while user tries to upload a video.]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.nN = function(a) {
        (a = a.detail[0]) && this.w.isSupported() && (a.platformUserName = this.w.username, a.platformUserIcon = this.w.avatarUrl);
        var b = y(this.i.B, this.i, "logout:complete"),
            b = new qe(b);
        b.title = "[[Sign Out?|Dialog title asking a user if she wants to sign out from her YouTube account via this application.]]";
        b.$ = "logoutDialog";
        b.lb = !0;
        b.channel = a;
        this.pa(b, ["browse-sets-titled-dialog"]);
        this.ka(b)
    };
    d.vN = function() {
        var a = new O;
        a.title = "[[Sign Out|Title and voice command for action tile allowing users to sign out from the app.]]";
        a.$ = "ps4LogoutDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.Qw = function(a, b, c) {
        !a && b && c && this.Pw()
    };
    d.Pw = function() {
        var a = new Fe("[[Your account couldn't be accessed. Please sign in again or use a different account.|Error dialog that is shown when sign in credentials are no longer valid and user is automatically signed out]]");
        a.title = "[[Sign in error|Dialog title that tells the user that he is no longer signed into YouTube account on TV due to error]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.lN = function(a) {
        var b = new O;
        b.title = "[[Loading...|Tooltip displayed when some data is loading.]]";
        b.Sb = a.detail && a.detail[0];
        this.pa(b, ["browse-sets-titled-dialog"]);
        this.ka(b)
    };
    d.mN = function(a) {
        var b = a && w(a.detail[0]) ? a.detail[0] : q,
            c = a && w(a.detail[1]) ? a.detail[1] : null;
        a = this.LS(a && a.detail[2] || "STANDARD", a && a.detail[3]);
        a.xb = b;
        a.Sb = c;
        this.ka(a)
    };
    d.LS = function(a, b) {
        var c = new O;
        this.j.useSetsUi ? (c.subtitle = b || "", c.mainTitle = this.l.T("[[Sign in to YouTube|Dialog title helping a user to sign in to YouTube via this application.]]"), c.$ = "setsLoginDialog", this.pa(c, ["browse-sets-titled-dialog", "deluxe", "login", Wg[a]]), c.lb = !1, c.Ne = "[[Later|Text on the cancel button of the sign up dialog that the user clicks if they do not want to sign up now, but later]]", c.Cc = "dialog-cancel-button") : (c.title = "PLAYER" == a ? b || "" : this.l.T(Vg[a]), c.$ = "loginDialog");
        return c
    };
    d.UM = function() {
        var a = new O;
        a.title = "[[Are you sure you want to clear cookies on this device? You can't undo this.|Dialog title asking the user to confirm whether they want to delete their cookies in this device or not, and warning them that this action can not be undone]]";
        a.xb = y(function() {
            this.i.B("clear-storage");
            this.sc()
        }, this);
        a.lb = !0;
        a.Cc = "dialog-cancel-button";
        this.pa(a, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.VM = function() {
        var a = new O;
        a.Sb = y(this.ly, this, !1);
        a.xb = y(this.ly, this, !0);
        this.p.Ab() ? a.title = "[[The watch history for this YouTube account will be deleted on all devices. You can't undo this.|Dialog text that informs and asks the user to confirm whether or not they want to delete their watch history across all devices for the logged in account.|1876896813]]" : a.title = "[[Are you sure you want to clear your current watch history? You can't undo this.|Dialog text that asks the user to confirm whether or not they want to delete their current watch history, and warning them that this action can not be undone]]";
        a.lb = !0;
        a.Cc = "dialog-cancel-button";
        this.pa(a, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.ly = function(a) {
        var b = {
            a: "history"
        };
        b.outcome = a ? "complete" : "cancel";
        this.F.g("/gen_204", b);
        a && this.i.B("clear-watch-history");
        this.i.B("state-change");
        this.sc()
    };
    d.rN = function() {
        var a = new Fe("[[View and manage your rental and purchase history. Please note: This means your rental and purchase history may be displayed and accessible on this device.|This is a dialog subtitle that list a permission that the application is requesting.]]", y(this.B, this, "paidScope:changed", !0), y(this.B, this, "paidScope:changed", !1));
        a.title = "[[YouTube TV is requesting permission to:|Dialog title that tells users that the application is requestin new permissions. The list of permissions will follow this title.]]";
        a.$ = "simpleDialog";
        a.lb = !0;
        a.zd = !0;
        a.Eb = "[[Accept|Text on button that accepts new permissions]]";
        a.Ne = "[[Sign out|Text on button that signs user out of application]]";
        a.Cc = "dialog-ok-button";
        this.pa(a, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.sN = function() {
        var a = new O;
        a.title = "[[Pair your phone, tablet or laptop.|Tooltip helping a user to connect their mobile device with the application.]]";
        a.$ = "pairingDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.tN = function() {
        this.k.isSupported() && this.k.startPlatformAuthentication()
    };
    d.uN = function(a) {
        var b = new Be(a.detail[1], a.detail[2]);
        b.hc = a.detail[0];
        this.pa(b, ["browse-sets-titled-dialog"]);
        this.ka(b)
    };
    d.wN = function() {
        var a = new O(y(this.oS, this));
        a.title = "[[Remove Paired Devices?|Dialog title asking a user for a confirmation to disconnect any mobile devices paired with the application]]";
        a.$ = "remoteResetDialog";
        a.lb = !0;
        this.pa(a, ["remote-reset-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.AN = function() {
        var a = new O;
        a.title = "[[A subscription error has occurred please try again later.|Text message displayed when an error occurs while user tries to subscribe to a channel.]]";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.oS = function() {
        this.U.du();
        this.sc();
        this.L.cy()
    };
    d.qN = function() {
        this.h.stop();
        this.o.fo();
        var a = new Fe("[[A network error has occurred. Please check your network connection.|Dialog subtitle telling user that a network error has occurred, and asking the user to check their network connection]]");
        a.title = "[[A network error has occurred|Dialog title that tells the user that a network error has occurred]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.xN = function(a) {
        this.h.stop();
        this.o.fo();
        var b = a.detail[0];
        a = new Fe("[[YouTube is unavailable. Please try again later.|Dialog title that tells the user that a YouTube servers are inaccessible and asks to retry later.]]", a.detail[1]);
        a.title = "[[A network error has occurred|Dialog title that tells the user that a network error has occurred]]";
        a.$ = "simpleDialog";
        a.zd = !0;
        a.lb = !0;
        a.Eb = b;
        a.Ne = "";
        a.Cc = "dialog-ok-button";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.NN = function() {
        var a = new O;
        a.title = "[[Terms of Service and Privacy Policy|Dialog title that shows links to terms of use and privacy documents on youtube.com.]]";
        a.$ = "tosDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.MN = function() {
        this.To("[[Credits|Dialog title that shows credit information, giving credit to all open-source software used in building this product.]]", this.A + "/rebound/dialogs/licenses.html")
    };
    d.kN = function() {
        this.To("\u5065\u5eb7\u306e\u305f\u3081\u306e\u3054\u6ce8\u610f", this.A + "/rebound/dialogs/kenko_warning.html")
    };
    d.zN = function() {
        this.To("\u4f7f\u7528\u4e0a\u306e\u3054\u6ce8\u610f", this.A + "/rebound/dialogs/shiyojo_warning.html")
    };
    d.jN = function() {
        if (!this.k.isSupported() || !this.k.triggerHelp()) {
            var a = new Ce;
            a.title = "[[Get help with YouTube on TV|Title of a page where user can access to the help articles on how to use YouTube on TV application.]]";
            a.baseUrl = this.j.og;
            this.pa(a, ["qr-dialog", "help", "browse-sets-titled-dialog"]);
            this.ka(a)
        }
    };
    d.fN = function() {
        var a = this.j.uO();
        a.psd_logged_in = this.p.Ab() ? 1 : 0;
        var b = new Ce;
        b.title = "[[Tell us what you think or report an issue|Title of a page where user can submit their issue or provide a feedback.]]";
        b.baseUrl = this.j.G;
        b.qrCodeUrl = this.j.G + "?" + Re(a);
        this.pa(b, ["qr-dialog", "feedback", "browse-sets-titled-dialog"]);
        this.ka(b)
    };
    d.KN = function(a) {
        var b = a.detail[2];
        a = new Oe(b, b, a.detail[0], a.detail[1]);
        this.pa(a, ["text-dialog", "uploads-progress", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.HN = function(a) {
        a = new Me(a.detail[2], a.detail[3], a.detail[0], a.detail[1]);
        this.pa(a, ["text-dialog", "browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.IN = function(a) {
        a = new Ne(a.detail[1], a.detail[0]);
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.LN = function(a) {
        a = new Pe(a.detail[0], a.detail[1]);
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.yN = function(a) {
        a = gc(a.detail[0], y(this.sc, this));
        a = new Ee(a, q);
        a.Ne = "";
        a.mainTitle = this.l.T("[[Discover the new YouTube for TV|Dialog title inviting users to discover the new YouTube for TV]]");
        a.bodyText = this.l.T("[[The Guide makes it easy to find your subscriptions, recommendations, and what\u2019s popular on YouTube.|Dialog body text telling the user that the new guide feature makes it easier to find content they may like.]]");
        a.subtitle = this.l.T("[[Check out the Guide|Dialog title inviting the user to check out the new guide.]]");
        this.pa(a, ["browse-sets-titled-dialog", "deluxe"]);
        this.ka(a)
    };
    d.XM = function(a) {
        var b = a.detail[3];
        a = new Fe(a.detail[2], a.detail[0], a.detail[1]);
        a.lb = !0;
        a.Eb = b;
        a.title = "[[Playback Error|Title of dialog displayed when a video cannot be played.|1376268536]]";
        a.$ = "simpleDialog";
        this.pa(a, ["browse-sets-titled-dialog"]);
        this.ka(a)
    };
    d.cN = function() {
        var a = new O;
        a.title = "";
        a.$ = "eurekaAuthorizationDialog";
        this.pa(a, ["status-dialog"]);
        this.ka(a)
    };
    d.dN = function() {
        var a = new O;
        a.title = "";
        a.$ = "eurekaPlayerErrorDialog";
        this.pa(a, ["status-dialog"]);
        this.ka(a)
    };
    d.eN = function(a) {
        var b = y(this.sc, this),
            c = gc(a.detail[0] || q, b);
        a = gc(a.detail[1] || q, b);
        c = new O(c, a);
        c.className = "browse-sets exit";
        c.lb = !0;
        c.title = "[[Are you sure you want to exit YouTube?|Asks the user to confirm that they intend to exit the application.]]";
        c.Eb = "[[Exit|Button title in a exit application dialog. Triggers the application to exit.]]";
        this.ka(c)
    };
    d.BN = function(a) {
        a = a.detail[0];
        var b = new Ce;
        b.$ = "system-error";
        this.j.J ? b.Sb = y(this.i.B, this.i, "run-process", new Xg(!0)) : b.zd = !0;
        b.title = a.title;
        b.baseUrl = a.url;
        this.pa(b, ["qr-dialog", "system-error", "browse-sets-titled-dialog"]);
        this.ka(b)
    };
    d.pa = function(a, b) {
        this.j.useSetsUi && b.push("browse-sets");
        a.className = b.join(" ")
    };
    Ug.inject = "watchModel browseModel playerFacade environmentModel cacheService authService remoteService rootDispatcher systemApi localStorage localeService htmlPath accountApi reportingService".split(" ");

    function Yg(a, b, c, e, f) {
        this.p = a;
        this.j = b;
        this.i = c;
        this.h = e;
        this.l = f
    }
    Yg.prototype.bb = function(a, b) {
        if (this.j.Ab()) this.g(a, b);
        else {
            var c = y(this.g, this, a, b);
            this.p.B("ensure-logged-in", c, "LIKE_DISLIKE")
        }
    };
    Yg.prototype.g = function(a, b) {
        ("dislike" === b ? this.h : this.i).load({
            target: {
                videoId: a
            }
        });
        this.l.add("video_like_value", a, b)
    };
    Yg.inject = ["rootDispatcher", "authService", "likeService", "dislikeService", "cacheService"];

    function Zg(a, b) {
        P.call(this);
        this.id = "loadBrowse";
        this.i = a;
        this.payload = {
            browseId: a
        };
        b && (this.payload.params = b)
    }
    B(Zg, P);

    function $g(a, b) {
        this.i = a;
        this.h = b
    }
    B($g, Q);
    $g.prototype.Tb = function() {
        this.i.B("browse-loading", this.g.i);
        this.h.load(this.g.payload, y(this.Ga, this), y(this.kc, this))
    };
    $g.prototype.Ga = function(a) {
        this.Wk() && (this.i.B(a ? "browse-loaded" : "browse-load-error", a, this.h), $g.u.Ga.call(this))
    };
    $g.inject = ["rootDispatcher", "browseSetsService"];

    function ah(a, b) {
        this.g = a;
        this.h = b
    }
    ah.prototype.bb = function() {
        this.g.Vc() && (this.h.B("record-navigation", "browse-sets"), this.i() && this.j())
    };
    ah.prototype.i = function() {
        if (!this.g.Df()) return !1;
        if ("FEhistory" == this.g.Df()) return !0;
        var a = this.g.ev();
        if (a) {
            var b = this.g.Nm(),
                c = sc(b).length == sc(a).length;
            if (c)
                for (var e in b)
                    if (c = b[e] === a[e], !c) break;
            if (c) return !1
        }
        return !0
    };
    ah.prototype.j = function() {
        this.g.Nm();
        var a = new Zg(this.g.rb("c"), this.g.rb("params"));
        this.h.B("run-process", a)
    };
    ah.inject = ["applicationState", "rootDispatcher"];

    function bh(a, b) {
        this.g = a;
        this.j = b
    }
    bh.prototype.bb = function() {
        this.h() && this.i()
    };
    bh.prototype.h = function() {
        var a = this.g.rb("list");
        return !!a && a !== this.g.Fm("list")
    };
    bh.prototype.i = function() {
        this.j.B("cmd-playlist-playback", this.g.rb("list"), this.g.Ut())
    };
    bh.inject = ["applicationState", "rootDispatcher"];

    function Xg(a) {
        P.call(this);
        this.id = "exit";
        this.U = !!a
    }
    B(Xg, P);

    function ch(a, b) {
        Q.call(this);
        this.h = a;
        this.j = b
    }
    B(ch, Q);
    ch.prototype.Tb = function() {
        this.h.J ? this.g.U || !this.h.useSetsUi ? this.i() : this.j.B("request-exit-dialog", y(this.i, this), y(this.Ga, this)) : this.Ga()
    };
    ch.prototype.i = function() {
        this.h.Ib();
        this.Ga()
    };
    ch.inject = ["environmentModel", "rootDispatcher"];

    function dh() {
        P.call(this);
        this.id = "goHome"
    }
    B(dh, P);

    function eh(a, b, c) {
        Q.call(this);
        this.l = a;
        this.j = b;
        this.i = c
    }
    B(eh, Q);
    eh.prototype.Tb = function() {
        this.j.clear();
        this.l.B("cmd-set-application-state", this.h());
        this.Ga()
    };
    eh.prototype.h = function() {
        return this.i.useSetsUi ? {
            state: "browse-sets",
            mode: null,
            Pa: {
                c: "FEwhat_to_watch"
            }
        } : {
            state: "browse",
            mode: null
        }
    };
    eh.inject = ["rootDispatcher", "history", "environmentModel"];

    function fh(a) {
        P.call(this);
        this.id = "goBack";
        this.k = a || !1
    }
    B(fh, P);

    function gh(a, b, c, e) {
        Q.call(this);
        this.j = a;
        this.h = b;
        this.w = c;
        this.i = e
    }
    B(gh, Q);
    gh.prototype.Tb = function() {
        if (this.l()) this.j.B("cmd-set-application-state", this.o());
        else {
            var a = this.i.Vc() && this.g.k && "FEwhat_to_watch" === this.i.rb("c") ? new Xg : new dh;
            this.j.B("run-process", a)
        }
        this.Ga()
    };
    gh.prototype.l = function() {
        return 1 < this.h.Da()
    };
    gh.prototype.k = function() {
        this.h.Jx();
        return this.h.Jx()
    };
    gh.prototype.o = function() {
        var a = this.k();
        switch (a.Hv) {
            case "browse":
                return {
                    state: "browse",
                    mode: a.detail.mode || ""
                };
            case "watch":
                return {
                    state: "watch",
                    mode: "transport"
                };
            case "search":
                return {
                    state: "browse",
                    mode: "search"
                };
            case "browse-sets":
                return {
                    state: "browse-sets",
                    Pa: a.detail
                };
            case "post-play":
                return {
                    state: "post-play"
                }
        }
    };
    gh.inject = ["rootDispatcher", "history", "environmentModel", "applicationState"];

    function hh(a, b, c) {
        this.g = a;
        this.h = b;
        this.i = c
    }
    d = hh.prototype;
    d.bb = function(a, b, c, e) {
        this.h.ud(a, y(this.YO, this, b, c), null, y(this.XO, this, !!e))
    };
    d.YO = function(a, b, c) {
        if (c && c.ia && c.ia.ya(0)) {
            var e = c.ia.ya(0),
                f = new ih(this.h, e.title, e.channel.imageUrl);
            c.title = e.title;
            f.model = c;
            f.model.kf = e.channel.imageUrl;
            this.g.B("cmd-playback", e, f, a, b)
        } else this.Ct()
    };
    d.XO = function(a) {
        a ? this.fV() : this.Ct()
    };
    d.fV = function() {
        this.g.B("request-deeplink-video-error-dialog", q, y(this.JJ, this))
    };
    d.JJ = function() {
        this.i.sc();
        this.g.B("cmd-set-application-state", {
            state: "browse"
        })
    };
    d.Ct = function() {
        this.g.B("run-process", new fh);
        this.g.B("request-video-retrieval-error-dialog")
    };
    hh.inject = ["rootDispatcher", "videoPlaybackInfoService", "dialogService"];

    function jh(a, b, c, e) {
        this.l = a;
        this.k = b;
        this.g = c;
        this.p = e
    }
    jh.prototype.bb = function() {
        !this.h() && this.i() && this.j()
    };
    jh.prototype.h = function() {
        return !!this.l.initReversePairingCode
    };
    jh.prototype.i = function() {
        var a = this.g.rb("v");
        if (!a) return !1;
        var b = this.g.xe(),
            c = this.k.currentVideo;
        return "watch" !== b && !c && a ? !0 : "watch" == b ? this.g.Fm("v") != a && (!c || c.videoId != a) : !1
    };
    jh.prototype.j = function() {
        this.p.B("cmd-load-video-from-service", this.g.rb("v"), this.g.Ut(), this.g.OI(), !0)
    };
    jh.inject = ["environmentModel", "watchModel", "applicationState", "rootDispatcher"];

    function kh(a, b) {
        this.g = a;
        this.h = b
    }
    kh.prototype.bb = function(a, b, c) {
        a = {
            videoId: a
        };
        b && (a.playlistId = b);
        c && (a.playlistIndex = c);
        this.h.load(a, y(this.j, this), y(this.i, this))
    };
    kh.prototype.j = function(a) {
        this.g.B("watch-next-loaded", a)
    };
    kh.prototype.i = function() {
        this.g.B("watch-next-load-error")
    };
    kh.inject = ["rootDispatcher", "watchNextService"];

    function lh(a, b, c) {
        P.call(this);
        this.id = "openBrowse";
        this.i = a;
        this.Pa = b || "";
        this.F = c || ""
    }
    B(lh, P);

    function mh(a) {
        this.h = a
    }
    B(mh, Q);
    mh.prototype.Tb = function() {
        var a = {
            state: "browse-sets",
            Pa: {}
        };
        a.Pa.c = this.g.i;
        this.g.Pa && (a.Pa.params = this.g.Pa);
        "guide" == this.g.F && (a.Pa.fromGuide = !0);
        this.h.B("cmd-set-application-state", a);
        this.Ga()
    };
    mh.inject = ["rootDispatcher"];

    function nh() {
        I.call(this);
        this.completed = 0;
        this.total = NaN;
        this.percentage = 0;
        this.C("completed:changed", y(this.g, this));
        this.C("total:changed", y(this.g, this))
    }
    B(nh, I);
    de(nh, ["completed", "total", "percentage"]);
    nh.prototype.g = function() {
        this.percentage = !isNaN(this.completed) && !isNaN(this.total) && 0 < this.total ? db(Math.round(this.completed / this.total * 100), 0, 100) : 0
    };

    function oh(a, b, c, e, f) {
        P.call(this, c, e);
        this.id = "uploadDvrClip";
        this.p = a;
        this.video = b;
        this.h = f
    }
    B(oh, P);

    function ph(a) {
        Q.call(this);
        this.l = a;
        this.j = this.h = this.i = null
    }
    B(ph, Q);
    d = ph.prototype;
    d.Tb = function() {
        this.i = this.g.p.acquireContext();
        this.h = this.i.getFile(y(this.vD, this), y(this.kc, this), y(this.uD, this))
    };
    d.Vh = function() {
        this.h && this.h()
    };
    d.pe = function() {
        this.h = null;
        this.i.release();
        this.j = this.i = null;
        ph.u.pe.call(this)
    };
    d.rl = function() {
        return this.g.p.isRemote ? .5 : .01
    };
    d.uD = function(a, b) {
        var c = a && b ? a / b : 0;
        this.g.h(this.rl() * c)
    };
    d.vD = function(a) {
        this.g.h(this.rl());
        this.j = a;
        this.h = this.l.i(this.g.video, y(this.NB, this), y(this.Rq, this))
    };
    d.NB = function(a, b) {
        var c = this.BL(b, "location");
        c ? this.h = this.l.j(c, this.j, y(this.DL, this), y(this.Rq, this), y(this.CL, this)) : this.kc("noLocation")
    };
    d.BL = function(a, b) {
        var c = b.toLowerCase(),
            e;
        for (e in a)
            if (e.toLowerCase() === c) return a[e];
        return null
    };
    d.CL = function(a, b) {
        var c = a && b ? a / b : 0,
            e = this.rl();
        this.g.h(e + (1 - e) * c)
    };
    d.DL = function(a) {
        this.g.h(1);
        this.Ga(a.id)
    };
    d.Rq = function(a) {
        this.kc(a.i || a.hc || String(a.g))
    };
    ph.inject = ["apiaryUpload"];

    function qh() {
        P.call(this);
        this.id = "upload"
    }
    B(qh, P);

    function rh(a, b, c, e, f, g, k, m, n) {
        Q.call(this);
        this.h = a;
        this.w = b;
        this.o = c;
        this.I = f;
        this.L = g;
        this.G = k;
        this.F = n;
        this.U = m;
        this.l = this.A = this.j = this.i = null;
        this.k = q
    }
    B(rh, Q);
    d = rh.prototype;
    d.Tb = function() {
        this.L.Ab() ? this.bx() : this.h.B("ensure-logged-in", y(this.bx, this), "UPLOAD", y(this.td, this))
    };
    d.bx = function() {
        this.U.checkPrivilege(ytshell.constants.Dvr.PrivilegeID.XPRIVILEGE_SOCIAL_NETWORK_SHARING, !0, null, y(this.FS, this), y(this.kc, this))
    };
    d.Vh = function() {
        this.h.B("request-cancel-dialog")
    };
    d.pe = function() {
        this.k();
        this.k = q;
        this.l = this.i = this.j = null;
        rh.u.pe.call(this)
    };
    d.Rv = function() {
        this.h.B("request-close-dialog")
    };
    d.BU = function() {
        this.h.B("request-loading-dialog");
        this.I.get(y(this.eO, this))
    };
    d.FS = function(a) {
        a ? this.BU() : this.kc("privilege error")
    };
    d.eO = function(a) {
        a && a.id && a.username ? (this.A = a, this.h.B("request-video-uploads", y(this.RN, this), y(this.td, this))) : (this.Rv(), this.kc("user profile error"), this.h.B("request-missing-channel-dialog"))
    };
    d.RN = function(a) {
        this.i = a.data;
        this.j = this.SJ(a.title, a.Rk);
        this.k = y(this.w.cancel, this.w);
        a = new ve(this.j, y(this.TJ, this), y(this.kc, this), y(this.td, this));
        this.w.di(a)
    };
    d.SJ = function(a, b) {
        var c = this.F.get(ue, {
            serviceId: "",
            serviceQuery: "",
            listType: "UU"
        });
        c.title = a;
        c.Ob = "public";
        c.channel = this.A;
        c.i = "20";
        c.description = this.i.userCaption || "";
        c.imageUrl = b || c.imageUrl;
        c.l = this.SL();
        c.duration = this.i.durationSec;
        c.durationLabel = this.G.ef(this.i.durationSec);
        return c
    };
    d.SL = function() {
        var a = ["Xbox One"];
        this.i.titleName && a.push(this.i.titleName);
        return a
    };
    d.TJ = function() {
        this.l = new nh;
        this.l.total = 1;
        this.h.B("request-video-upload-progress", this.j, this.l, y(this.td, this));
        if (this.i && this.j) {
            this.k = y(this.o.cancel, this.o);
            var a = new oh(this.i, this.j, y(this.LE, this), y(this.JE, this), y(this.KE, this));
            this.o.di(a)
        } else this.kc("no clip or video")
    };
    d.KE = function(a) {
        this.l.completed = a
    };
    d.LE = function(a) {
        this.j.videoId = a;
        this.h.B("request-video-upload-complete", this.j, this.l, y(function() {
            this.h.B("invalidate-uploads");
            this.Rv();
            this.Ga()
        }, this), y(function() {
            this.h.B("invalidate-uploads");
            this.Ga()
        }, this))
    };
    d.JE = function(a) {
        this.h.B("request-video-upload-error", a, y(this.kc, this, a))
    };
    rh.inject = "rootDispatcher editVideoDetails uploadDvrClip environmentModel userProfileCache authService localeService dvrApi injector".split(" ");

    function sh(a, b) {
        this.g = a;
        this.h = b
    }
    d = sh.prototype;
    d.PV = function() {
        this.g.B("cmd-set-application-state", {
            state: "settings"
        })
    };
    d.NV = function(a, b) {
        var c = new lh(a.browseId, a.params, b);
        this.g.B("run-process", c)
    };
    d.OV = function(a) {
        (a = a.query) && this.h.Bb(a);
        this.g.B("cmd-set-application-state", {
            state: "browse",
            mode: "search"
        })
    };
    d.QV = function(a, b) {
        var c = a.nextEndpoint,
            e = "STANDARD",
            f = q;
        c && (f = y(this.g.B, this.g, "cmd-navigate-to-endpoint", c, b), c.uploadEndpoint && (e = "UPLOAD"));
        this.g.B("request-login", f, q, e)
    };
    d.RV = function() {
        this.g.B("run-process", new qh)
    };
    var th = {
        applicationSettingsEndpoint: sh.prototype.PV,
        browseEndpoint: sh.prototype.NV,
        searchEndpoint: sh.prototype.OV,
        signInEndpoint: sh.prototype.QV,
        uploadEndpoint: sh.prototype.RV
    };
    sh.prototype.bb = function(a, b) {
        for (var c in a)
            if (c in th) {
                th[c].call(this, a[c], b);
                break
            }
    };
    sh.inject = ["rootDispatcher", "searchQueryModel"];

    function uh(a, b) {
        this.h = a;
        this.g = b
    }
    d = uh.prototype;
    d.bb = function(a) {
        switch (a) {
            case "browse":
                this.GU();
                break;
            case "watch":
                this.IU();
                break;
            case "search":
                this.HU();
                break;
            case "browse-sets":
                this.FU()
        }
    };
    d.GU = function() {
        if (this.h.mc()) {
            var a = this.h.df() || "";
            "search" !== a && (a = {
                mode: a
            }, this.g.clear(), this.g.add("browse", a))
        }
    };
    d.IU = function() {
        var a = this.h.df();
        if ("" === a || "transport" === a) this.g.filter("watch"), this.g.add("watch")
    };
    d.HU = function() {
        "post-play" == this.h.xe() && this.g.filter("watch");
        this.g.filter("search");
        this.g.add("search")
    };
    d.FU = function() {
        var a = {};
        z(a, this.h.Nm());
        a.c || (a.c = "FEwhat_to_watch");
        this.g.filter("browse-sets", a);
        this.g.add("browse-sets", a);
        this.g.Fu(5, "browse-sets");
        this.g.Eu(2, "search");
        this.g.Eu(2, "watch")
    };
    uh.inject = ["applicationState", "history"];

    function vh(a, b, c, e) {
        I.call(this);
        this.l = a;
        this.p = b;
        this.A = c;
        this.w = e;
        this.h = null;
        this.k = !1;
        this.o = "";
        this.j = !1;
        this.g = null;
        this.i = -1
    }
    B(vh, We);
    d = vh.prototype;
    d.M = function() {
        this.Gs();
        this.g && (this.g.Xl(), this.g = null);
        this.pm();
        vh.u.M.call(this)
    };
    d.vf = function(a) {
        a(this.j, this.j)
    };
    d.Ab = function() {
        return this.j
    };
    d.Cb = function(a, b) {
        b && this.Ai();
        if (this.k) return a(this.h), q;
        a = y(a, null);
        this.g ? this.g.tb.push(a) : (this.g = this.zi(), this.g.tb.push(a), this.l.getAuthToken(y(this.yi, this, this.g)));
        return y(this.GE, this, a)
    };
    d.wo = function(a) {
        this.h && this.G(a) && this.ac(!0)
    };
    d.ac = function(a) {
        this.h && (this.Gs(), this.l.invalidateAuthToken(this.h));
        this.qn();
        this.pm();
        this.Bi(!1, a)
    };
    d.CD = function(a) {
        this.ac();
        this.g = this.zi();
        a && this.g.tb.push(a);
        this.l.requestPairing(y(this.yi, this, this.g))
    };
    d.u6 = function(a) {
        this.pm();
        this.g = this.zi();
        a && this.g.tb.push(a);
        this.l.requestUnpairing(y(this.yi, this, this.g))
    };
    d.Bi = function(a, b) {
        if (a != this.j) {
            var c = this.j;
            this.j = a;
            this.B("login-state-changed", a, c, !!b)
        }
    };
    d.qn = function() {
        this.h = null;
        this.k = !1
    };
    d.yi = function(a, b, c) {
        a == this.g && (b ? (c = this.p.Uc().getTime() + 900 * c, this.A.token = b, a.Xl = this.w.ud("default", y(this.YH, this, b, c), null, y(this.Qk, this))) : this.Qk())
    };
    d.Ai = function() {
        -1 != this.i ? (this.p.clearTimeout(this.i), this.Bq()) : this.qn()
    };
    d.Bq = function() {
        this.i = -1;
        this.qn();
        this.B("oauth-expired")
    };
    d.Gs = function() {
        -1 != this.i && (this.p.clearTimeout(this.i), this.i = -1)
    };
    d.YH = function(a, b, c) {
        if (c = c.userId) {
            var e = this.p.Uc().getTime();
            if (a && e >= b) this.l.getAuthToken(y(this.yi, this, this.g));
            else {
                var f;
                this.o && c != this.o ? (f = this.g, this.g = this.zi(), this.Ai(), this.Bi(!1), this.Xk(f)) : this.Ai();
                this.o = c;
                this.h = a;
                this.k = !0;
                this.i = this.p.setTimeout(y(this.Bq, this), b - e);
                f = this.g;
                this.g = null;
                this.Bi(!0);
                this.Xk(f)
            }
        } else this.Qk()
    };
    d.Qk = function() {
        this.Ai();
        this.o = "";
        this.k = !0;
        var a = this.g;
        this.g = null;
        this.Bi(!1);
        this.Xk(a)
    };
    d.Xk = function(a) {
        for (var b = 0, c = a.tb.length; b < c; ++b) a.tb[b](this.h)
    };
    d.zi = function() {
        return {
            tb: [],
            Xl: q
        }
    };
    d.pm = function() {
        if (this.g) {
            this.g.Xl();
            for (var a = this.g.tb; 0 < a.length;) a.shift()(this.h);
            this.g = null
        }
    };
    d.GE = function(a) {
        this.g && (a = this.g.tb.indexOf(a), 0 <= a && this.g.tb.splice(a, 1))
    };
    vh.inject = ["accountManager", "timeService", "authService", "userIdService"];

    function wh(a, b) {
        this.i = a;
        this.g = b
    }
    wh.prototype.bb = function(a, b, c, e) {
        this.g instanceof vh ? this.g.CD(y(this.h, this, a || q, b || q)) : this.i.B("request-login-dialog", a, b, c, e)
    };
    wh.prototype.h = function(a, b, c) {
        c ? a() : b()
    };
    wh.inject = ["rootDispatcher", "authService"];

    function xh(a, b) {
        this.g = a;
        this.h = b
    }
    xh.prototype.bb = function(a) {
        this.h instanceof vh ? this.g.B("request-ps4-logout") : this.g.B("request-logout-dialog", a && a.data && a.data.channel || null)
    };
    xh.inject = ["rootDispatcher", "authService"];

    function yh() {
        this.i = {};
        this.h = {};
        this.g = !1
    }
    d = yh.prototype;
    d.KM = function(a, b) {
        this.us(a, b, this.i);
        this.g = !0
    };
    d.h3 = function(a, b) {
        this.us(a, b, this.h);
        this.g = !0
    };
    d.us = function(a, b, c) {
        var e = c[a];
        e || (e = {
            capability: a,
            features: []
        }, c[a] = e);
        e.features.push(b)
    };
    d.JM = function() {
        return this.g
    };
    d.IM = function() {
        return {
            supportedCapabilities: rc(this.i),
            disabledCapabilities: rc(this.h)
        }
    };
    var zh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function Ah(a) {
        if (Bh) {
            Bh = !1;
            var b = h.location;
            if (b) {
                var c = b.href;
                if (c && (c = Ch(c)) && c != b.hostname) throw Bh = !0, Error();
            }
        }
        return a.match(zh)
    }
    var Bh = Sc;

    function Ch(a) {
        return (a = Ah(a)[3] || null) ? decodeURI(a) : a
    }

    function Dh(a, b, c) {
        if (s(b))
            for (var e = 0; e < b.length; e++) Dh(a, String(b[e]), c);
        else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Eh(a, b) {
        for (var c in b) Dh(c, b[c], a);
        return a
    }

    function Fh(a, b) {
        var c = Eh([a], b);
        if (c[1]) {
            var e = c[0],
                f = e.indexOf("#");
            0 <= f && (c.push(e.substr(f)), c[0] = e = e.substr(0, f));
            f = e.indexOf("?");
            0 > f ? c[1] = "?" : f == e.length - 1 && (c[1] = void 0)
        }
        return c.join("")
    };

    function Gh() {}
    Gh.prototype.Gy = function() {};

    function Hh(a, b, c, e, f, g, k, m, n, r, u, t) {
        this.id = a;
        this.va = b || "";
        this.k = e;
        this.o = c;
        this.g = f;
        this.W = g;
        this.Ya = k;
        this.A = r;
        this.w = m;
        this.Z = n;
        this.j = u;
        this.l = t || {};
        this.F = this.I = this.G = this.U = q
    }
    d = Hh.prototype;
    d.wh = function() {
        return "ot"
    };
    d.dg = function() {
        return ""
    };
    d.Id = function(a) {
        var b = this.dg() + this.va;
        return Fh(b, a || {})
    };
    d.Ph = function() {
        return "GET"
    };
    d.Mi = function(a, b, c, e) {
        this.U = y(this.o.$P, this.o, a);
        this.G = b ? this.o.Eo(a, b) : q;
        this.I = c ? this.o.Eo(a, c) : q;
        this.F = e ? this.o.Eo(a, e) : q
    };
    d.ao = function() {
        this.G();
        this.G = q
    };
    d.vn = function() {
        this.I();
        this.I = q
    };
    d.$n = function() {
        this.F();
        this.U = this.F = q
    };
    d.Ys = function() {
        this.U();
        this.U = this.F = this.I = this.G = q
    };
    d.load = function(a, b, c) {
        return this.Jh(a, b, c)
    };
    d.Jh = function(a, b, c, e, f, g) {
        var k = {};
        this.vx(this.l);
        this.HO(this.l);
        z(k, this.l);
        a && z(k, a);
        return this.j && (a = this.GO(k[this.j])) ? (b && b(a), q) : this.Rj(k, e, b, c, f, g)
    };
    d.Rj = function(a, b, c, e, f, g) {
        c = c || q;
        var k = y(this.xb, this, a, c, b);
        b = y(this.SQ, this, c, e, b);
        this.ao();
        return "GET" === this.Ph() ? this.k.get(this.Id(), a, k, b) : "JSONP" === this.Ph() ? this.k.dj(this.Id(), a, k, b) : "POST" == this.Ph() ? (a = g ? T(a) : a, this.k.fe(this.Id(), {}, a, k, b, f)) : q
    };
    d.xb = function(a, b, c, e) {
        this.vn();
        this.Z.Ex();
        c = this.A.parse(e, c);
        this.EP(this.j && a[this.j], c);
        this.$n();
        b(c)
    };
    d.SQ = function(a, b, c, e) {
        this.Ys();
        this.Z.ks(e.g);
        this.Ya.h(this.wh(), this.va, e.g);
        b ? b(e) : a(this.A.parse(null, c))
    };
    d.XP = function(a, b, c) {
        c[a] && (c[b] = c[a], delete c[a]);
        return c
    };
    d.vx = function(a) {
        a && "" === a.hl && (a.hl = this.w.sb, a.override_hl = 1)
    };
    d.HO = function(a) {
        a && "" === a.regionId && this.g.gdataRegionId && (a.regionId = this.g.gdataRegionId)
    };
    d.Qy = function() {
        return this.A.Gy()
    };
    d.GO = function(a) {
        if (a) {
            var b = this.Qy();
            if (b) return this.W.get(b, a)
        }
        return null
    };
    d.EP = function(a, b) {
        if (a) {
            var c = this.Qy();
            c && this.W.add(c, a, b)
        }
    };
    Hh.inject = "id path csiService ytHttp environmentModel cacheService backendErrorReporting localeModel networkStatus parser opt_paramKey opt_params".split(" ");

    function Ih(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }

    function Jh(a) {
        a = String(a);
        if (Ih(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function Kh(a) {
        return eval("(" + a + ")")
    }

    function T(a, b) {
        return (new Lh(b)).i(a)
    }

    function Lh(a) {
        this.g = a
    }
    Lh.prototype.i = function(a) {
        var b = [];
        this.h(a, b);
        return b.join("")
    };
    Lh.prototype.h = function(a, b) {
        switch (typeof a) {
            case "string":
                this.j(a, b);
                break;
            case "number":
                this.p(a, b);
                break;
            case "boolean":
                b.push(a);
                break;
            case "undefined":
                b.push("null");
                break;
            case "object":
                if (null == a) {
                    b.push("null");
                    break
                }
                if (s(a)) {
                    this.l(a, b);
                    break
                }
                this.k(a, b);
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof a);
        }
    };
    var Mh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Nh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Lh.prototype.j = function(a, b) {
        b.push('"', a.replace(Nh, function(a) {
            if (a in Mh) return Mh[a];
            var b = a.charCodeAt(0),
                f = "\\u";
            16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
            return Mh[a] = f + b.toString(16)
        }), '"')
    };
    Lh.prototype.p = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? a : "null")
    };
    Lh.prototype.l = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var e = "", f = 0; f < c; f++) b.push(e), e = a[f], this.h(this.g ? this.g.call(a, String(f), e) : e, b), e = ",";
        b.push("]")
    };
    Lh.prototype.k = function(a, b) {
        b.push("{");
        var c = "",
            e;
        for (e in a)
            if (Object.prototype.hasOwnProperty.call(a, e)) {
                var f = a[e];
                "function" != typeof f && (b.push(c), this.j(e, b), b.push(":"), this.h(this.g ? this.g.call(a, e, f) : f, b), c = ",")
            }
        b.push("}")
    };

    function Oh() {};

    function Ph() {}
    B(Ph, Oh);
    Ph.prototype.Da = function() {
        var a = 0;
        kc(this.gc(!0), function() {
            a++
        });
        return a
    };
    Ph.prototype.clear = function() {
        var a = lc(this.gc(!0)),
            b = this;
        Na(a, function(a) {
            b.remove(a)
        })
    };

    function Qh(a) {
        this.g = a
    }
    B(Qh, Ph);
    d = Qh.prototype;
    d.isAvailable = function() {
        if (!this.g) return !1;
        try {
            return this.g.setItem("__sak", "1"), this.g.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    d.Qj = function(a, b) {
        try {
            this.g.setItem(a, b)
        } catch (c) {
            if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    d.get = function(a) {
        a = this.g.getItem(a);
        if (!v(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    d.remove = function(a) {
        this.g.removeItem(a)
    };
    d.Da = function() {
        return this.g.length
    };
    d.gc = function(a) {
        var b = 0,
            c = this.g,
            e = new ic;
        e.next = function() {
            if (b >= c.length) throw hc;
            var e;
            e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if (!v(e)) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return e
    };
    d.clear = function() {
        this.g.clear()
    };
    d.key = function(a) {
        return this.g.key(a)
    };

    function Rh() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.g = a
    }
    B(Rh, Qh);

    function Sh(a, b) {
        if (K && !ad(9)) {
            Th || (Th = new Cc);
            this.Gb = Th.get(a);
            this.Gb || (b ? this.Gb = document.getElementById(b) : (this.Gb = document.createElement("userdata"), this.Gb.addBehavior("#default#userData"), document.body.appendChild(this.Gb)), Th.Ac(a, this.Gb));
            this.dp = a;
            try {
                this.WT()
            } catch (c) {
                this.Gb = null
            }
        }
    }
    B(Sh, Ph);
    var Uh = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Th = null;
    d = Sh.prototype;
    d.Gb = null;
    d.dp = null;

    function Vh(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
            return Uh[a]
        })
    }
    d.isAvailable = function() {
        return !!this.Gb
    };
    d.Qj = function(a, b) {
        this.Gb.setAttribute(Vh(a), b);
        this.hp()
    };
    d.get = function(a) {
        a = this.Gb.getAttribute(Vh(a));
        if (!v(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    d.remove = function(a) {
        this.Gb.removeAttribute(Vh(a));
        this.hp()
    };
    d.Da = function() {
        return this.pp().attributes.length
    };
    d.gc = function(a) {
        var b = 0,
            c = this.pp().attributes,
            e = new ic;
        e.next = function() {
            if (b >= c.length) throw hc;
            var e;
            e = c[b++];
            if (a) return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            if (!v(e)) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return e
    };
    d.clear = function() {
        for (var a = this.pp(), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        this.hp()
    };
    d.WT = function() {
        this.Gb.load(this.dp)
    };
    d.hp = function() {
        try {
            this.Gb.save(this.dp)
        } catch (a) {
            throw "Storage mechanism: Quota exceeded";
        }
    };
    d.pp = function() {
        return this.Gb.XMLDocument.documentElement
    };

    function Wh(a, b) {
        this.fg = a;
        this.Xe = b + "::"
    }
    B(Wh, Ph);
    d = Wh.prototype;
    d.fg = null;
    d.Xe = "";
    d.Qj = function(a, b) {
        this.fg.Qj(this.Xe + a, b)
    };
    d.get = function(a) {
        return this.fg.get(this.Xe + a)
    };
    d.remove = function(a) {
        this.fg.remove(this.Xe + a)
    };
    d.gc = function(a) {
        var b = this.fg.gc(!0),
            c = this,
            e = new ic;
        e.next = function() {
            for (var e = b.next(); e.substr(0, c.Xe.length) != c.Xe;) e = b.next();
            return a ? e.substr(c.Xe.length) : c.fg.get(e)
        };
        return e
    };

    function Xh(a) {
        this.g = a
    }
    Xh.prototype.h = function(a, b) {
        l(b) ? this.g.Qj(a, T(b)) : this.g.remove(a)
    };
    Xh.prototype.get = function(a) {
        var b;
        try {
            b = this.g.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return Jh(b)
        } catch (e) {
            throw "Storage: Invalid value was encountered";
        }
    };
    Xh.prototype.remove = function(a) {
        this.g.remove(a)
    };

    function Yh(a) {
        this.g = a
    }
    B(Yh, Xh);

    function Zh(a) {
        this.data = a
    }

    function $h(a) {
        return !l(a) || a instanceof Zh ? a : new Zh(a)
    }
    Yh.prototype.h = function(a, b) {
        Yh.u.h.call(this, a, $h(b))
    };
    Yh.prototype.i = function(a) {
        a = Yh.u.get.call(this, a);
        if (!l(a) || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Yh.prototype.get = function(a) {
        if (a = this.i(a)) {
            if (a = a.data, !l(a)) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function ai(a) {
        this.g = a
    }
    B(ai, Yh);
    ai.prototype.h = function(a, b, c) {
        if (b = $h(b)) {
            if (c) {
                if (c < A()) {
                    ai.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = A()
        }
        ai.u.h.call(this, a, b)
    };
    ai.prototype.i = function(a, b) {
        var c = ai.u.i.call(this, a);
        if (c) {
            var e;
            if (e = !b) {
                e = c.creation;
                var f = c.expiration;
                e = !!f && f < A() || !!e && e > A()
            }
            if (e) ai.prototype.remove.call(this, a);
            else return c
        }
    };

    function bi(a) {
        this.g = a
    }
    var ci = /\s*;\s*/;
    d = bi.prototype;
    d.k5 = function() {
        return navigator.cookieEnabled
    };
    d.PU = function(a) {
        return !/[;=\s]/.test(a)
    };
    d.QU = function(a) {
        return !/[;\r\n]/.test(a)
    };
    d.Gu = function(a, b, c, e, f, g) {
        if (!this.PU(a)) throw Error('Invalid cookie name "' + a + '"');
        if (!this.QU(b)) throw Error('Invalid cookie value "' + b + '"');
        l(c) || (c = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(A() + 1E3 * c)).toUTCString();
        this.SU(a + "=" + b + f + e + c + g)
    };
    d.get = function(a, b) {
        for (var c = a + "=", e = this.np(), f = 0, g; g = e[f]; f++) {
            if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
            if (g == a) return ""
        }
        return b
    };
    d.remove = function(a, b, c) {
        var e = this.dV(a);
        this.Gu(a, "", 0, b, c);
        return e
    };
    d.vb = function() {
        return this.qk().keys
    };
    d.Xa = function() {
        return this.qk().gz
    };
    d.qb = function() {
        return !this.op()
    };
    d.Da = function() {
        return this.op() ? this.np().length : 0
    };
    d.dV = function(a) {
        return l(this.get(a))
    };
    d.Th = function(a) {
        for (var b = this.qk().gz, c = 0; c < b.length; c++)
            if (b[c] == a) return !0;
        return !1
    };
    d.clear = function() {
        for (var a = this.qk().keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    d.SU = function(a) {
        this.g.cookie = a
    };
    d.op = function() {
        return this.g.cookie
    };
    d.np = function() {
        return (this.op() || "").split(ci)
    };
    d.qk = function() {
        for (var a = this.np(), b = [], c = [], e, f, g = 0; f = a[g]; g++) e = f.indexOf("="), -1 == e ? (b.push(""), c.push(f)) : (b.push(f.substring(0, e)), c.push(f.substring(e + 1)));
        return {
            keys: b,
            gz: c
        }
    };
    var di = new bi(document);
    di.h = 3950;

    function ei(a, b) {
        var c;
        b ? c = null : (c = new Rh, (c = c.isAvailable() ? a ? new Wh(c, a) : c : null) || (c = new Sh(a || "UserDataSharedStore"), c = c.isAvailable() ? c : null));
        this.g = c ? new ai(c) : null
    }
    ei.prototype.h = function() {
        return !!this.g
    };
    ei.prototype.i = function(a, b, c, e) {
        c = c || 31104E3;
        this.remove(a);
        if (this.h()) try {
            this.g.h(a, b, A() + 1E3 * c);
            return
        } catch (f) {}
        var g = "";
        if (e) try {
            g = escape(T(b))
        } catch (k) {
            return
        } else g = escape(b);
        a = "yt-dev." + a;
        di.Gu(a, g, c, "/", document.domain || "google.com")
    };
    ei.prototype.get = function(a, b) {
        var c = void 0,
            e = !this.h();
        if (!e) try {
            c = this.g.get(a)
        } catch (f) {
            e = !0
        }
        if (e && (c = "yt-dev." + a, c = di.get(c, void 0)) && (c = unescape(c), b)) try {
            c = Jh(c)
        } catch (g) {
            this.remove(a), c = void 0
        }
        return c
    };
    ei.prototype.remove = function(a) {
        this.h() && this.g.remove(a);
        a = "yt-dev." + a;
        di.remove(a, "/", document.domain || "google.com")
    };

    function fi(a) {
        this.g = a
    }
    fi.prototype.Lc = function() {};

    function gi(a) {
        this.g = a
    }
    B(gi, fi);
    gi.prototype.Lc = function() {
        var a = this.g.get("private_data");
        a && a["crash-data"] && (delete a["crash-data"], this.g.Oa("private_data", a))
    };

    function hi(a) {
        this.g = a
    }
    B(hi, fi);
    hi.prototype.Lc = function() {
        var a = this.g.get("recent-searches");
        if (a) {
            for (var b = 0, c = a.length; b < c; ++b) {
                var e = a[b];
                e.videoId = e.video ? e.video.videoId : null;
                delete e.video
            }
            this.g.Oa("recent-searches", a)
        }
    };

    function ii(a) {
        this.g = a
    }
    B(ii, fi);
    ii.prototype.Lc = function() {
        this.g.Oa("needs_rental_auth_dialog", !0);
        var a = this.g.get("sound-enabled", void 0, !0);
        a && this.g.Oa("sound-enabled", "false" !== a);
        for (var b = ["captions-settings", "mdx-paired-devices", "private_data", "device-retention-permission", "recent-searches"], a = 0, c = b.length; a < c; ++a) this.g.get(b[a], void 0);
        b = [
            ["mdx-device-id", void 0],
            ["tv-refresh-token", 15768E3]
        ];
        a = 0;
        for (c = b.length; a < c; ++a) {
            var e = this.g.get(b[a][0], void 0, !0);
            e && this.g.Oa(b[a][0], e, b[a][1])
        }
    };

    function ji(a) {
        this.g = a
    }
    B(ji, fi);
    ji.prototype.Lc = function() {
        this.g.remove("captions-settings")
    };

    function ki(a) {
        this.g = a
    }
    B(ki, fi);
    ki.prototype.Lc = function() {
        this.g.Oa("needs_rental_auth_dialog", !0)
    };

    function li(a) {
        this.g = a
    }
    B(li, fi);
    li.prototype.Lc = function() {
        this.g.Oa("needs-sets-onboarding", !0)
    };

    function mi(a) {
        this.g = a
    }
    B(mi, fi);
    mi.prototype.Lc = function() {
        for (var a = ["crash-count", "device-statistics", "activity-path", "spinner_log"], b = {}, c = a.length, e = 0; e < c; e++) b[a[e]] = this.g.get(a[e]);
        this.g.Oa("private_data", b)
    };

    function ni(a) {
        this.g = a
    }
    B(ni, fi);
    ni.prototype.Lc = function() {
        var a = this.g.get("private_data");
        if (a && a["crash-count"]) {
            var b = {
                startup: 0
            };
            b["crash-count"] = a["crash-count"];
            a["crash-data"] = b;
            delete a["crash-count"];
            this.g.Oa("private_data", a)
        }
    };

    function oi(a) {
        this.g = a
    }
    B(oi, fi);
    oi.prototype.Lc = function() {
        var a = this.g.get("leanback_oauth_renew");
        a && (this.g.get("tv-refresh-token") || this.g.Oa("tv-refresh-token", a, 15768E3), this.g.remove("leanback_oauth_renew"))
    };

    function pi(a) {
        this.g = a
    }
    B(pi, fi);
    pi.prototype.Lc = function() {
        for (var a = ["tv-access-token", "activity-path", "saved-searches", "spinner_log"], b = this.g.get("private_data"), c = 0, e = a.length; c < e; ++c) {
            var f = a[c];
            this.g.remove(f);
            b && delete b[f]
        }
        b && this.g.Oa("private_data", b)
    };
    var qi = {
            0: fi,
            1: fi,
            2: fi,
            3: fi,
            4: mi,
            5: fi,
            6: ni,
            7: fi,
            8: oi,
            9: pi,
            10: gi,
            11: fi,
            12: hi,
            13: ii,
            14: ji,
            15: fi,
            16: ki,
            17: li
        },
        ri = {
            vY: "innertube-visitor-data",
            f1: "mdx-device-id",
            j1: "needs_rental_auth_dialog",
            k1: "needs-sets-onboarding",
            m1: "mdx-paired-devices",
            o1: "private_data",
            p1: "device-retention-permission",
            r1: "recent-searches",
            s1: "tv-refresh-token",
            u1: "safe-mode-enabled",
            w1: "schema-version",
            z1: "sound-enabled",
            C1: "sticky-label",
            G1: "uploads-toast-shown"
        },
        si = {
            qW: "tv-access-token",
            rW: "activity-path",
            uW: "captions-settings",
            t1: "leanback_oauth_renew",
            v1: "saved-searches",
            B1: "spinner_log"
        };

    function ti(a, b) {
        this.h = a;
        this.g = new ei("yt.leanback");
        if (this.g.h()) {
            var c = new ei("yt.leanback", !0);
            b.Fp && !this.pu(this.g) ? this.g = c : this.pu(c) && this.ou(c)
        }
        for (var e, c = this.get("schema-version", 31536E4) || 0; 18 > c;) e = qi[c], e = new e(this), e.Lc(), c++, this.Oa("schema-version", c, 31536E4)
    }
    d = ti.prototype;
    d.pu = function(a) {
        return !!a.get("schema-version")
    };
    d.ou = function(a) {
        var b = ri,
            c = [],
            e;
        for (e in b) c.push(b[e]);
        b = si;
        for (e in b) c.push(b[e]);
        b = 0;
        for (e = c.length; b < e; ++b) a.remove(c[b])
    };
    d.clear = function() {
        this.ou(this.g);
        this.flush()
    };
    d.Oa = function(a, b, c, e) {
        this.g.i(a, b, c, !e)
    };
    d.get = function(a, b, c) {
        var e = this.g.get(a, !c);
        e && b && this.Oa(a, e, b, c);
        return e
    };
    d.remove = function(a) {
        this.g.remove(a)
    };
    d.flush = function(a) {
        this.h.isSupported() && this.h.flush(a)
    };
    d.NH = function() {
        var a = {},
            b;
        for (b in ri) {
            var c = ri[b],
                e = this.get(c);
            "tv-refresh-token" == c && e && (e = "XXXX-" + e.substr(e.length - 5));
            a[c] = e
        }
        return JSON.stringify(a, null, " ")
    };
    ti.inject = ["storageApi", "environmentModel"];

    function U(a, b, c, e, f, g, k, m, n, r, u, t, x, G, fa, ga) {
        this.J = g;
        this.p = u;
        this.h = "";
        f.Jp && n.isSupported() && (this.h = n.getApiKey());
        this.h || (this.h = f.Pc ? "AIzaSyDb2KRjVRgWfMh-_SDypYDa8WfAAV7b_LU" : "AIzaSyAd-YEOqZz9nXVzGtn3KWzYLbLaajhqIDA");
        g = {
            context: {
                client: {
                    clientName: "TVHTML5",
                    clientVersion: ga || "4"
                }
            }
        };
        f.za && (g.context.client.acceptRegion = f.za);
        f.U && (g.context.client.experimentIds = f.Ow());
        n = new yh;
        f.supportsUploads && n.KM(52299776, 63555155);
        n.JM() && (g.context.capabilities = n.IM());
        z(p("context.client", g), p("context.client",
            G));
        z(p("context", g), p("context", G));
        Hh.call(this, a, b, c, e, f, k, m, r, t, x, fa, g)
    }
    B(U, Hh);
    d = U.prototype;
    d.wh = function() {
        return this.g.useTestInnerTube ? "tin" : this.g.useReleaseInnerTube || this.g.qg && !this.g.L ? "sin" : "in"
    };
    d.dg = function() {
        return this.g.useTestInnerTube ? "//www-googleapis-test.sandbox.google.com/youtubei/vi" : this.g.useReleaseInnerTube || this.g.qg && !this.g.L ? "https://www-googleapis-staging.sandbox.google.com/youtubei/v1release" : "https://www.googleapis.com/youtubei/v1"
    };
    d.Id = function(a) {
        a = a || {};
        z(a, {
            key: this.h
        });
        return U.u.Id.call(this, a)
    };
    d.Ph = function() {
        return "POST"
    };
    d.load = function(a, b, c) {
        var e = !1,
            f, g = y(function(g) {
                if (!e) {
                    var m = a || {};
                    m.hasOwnProperty("innerTubeEndpointParams") && (z(m, m.innerTubeEndpointParams), delete m.innerTubeEndpointParams);
                    var n = {
                        "Content-Type": "application/json"
                    };
                    g && (n.Authorization = "Bearer " + g);
                    var r = m.query;
                    r && this.j && (m[this.j] = r);
                    f = this.Jh(m, function(a) {
                        a && (a.serviceQuery = r);
                        b && !e && b(a)
                    }, c, void 0, n, !0)
                }
            }, this);
        this.J.Cb(g);
        return function() {
            f ? f() : e = !0
        }
    };
    d.JU = function(a, b, c) {
        return this.load({
            continuation: a
        }, b, c)
    };
    d.Jh = function(a, b, c, e, f, g) {
        var k = this.xv();
        f = f || {};
        k && (f["X-Goog-Visitor-Id"] = k);
        return U.u.Jh.call(this, a, b, c, e, f, g)
    };
    d.xv = function() {
        this.g.zb || (this.g.zb = this.p.get("innertube-visitor-data"));
        return this.g.zb
    };
    d.xb = function(a, b, c, e) {
        var f = this.xv(),
            g = p("responseContext.visitorData", e);
        g && g != f && (this.p.Oa("innertube-visitor-data", g), this.g.zb = g);
        U.u.xb.call(this, a, b, c, e)
    };
    d.vx = function(a) {
        a && (this.w.g && (a.context.client.acceptLanguage = this.w.g), this.w.i && (a.context.client.acceptRegion = this.w.i))
    };
    U.inject = "id path csiService ytHttp environmentModel authService cacheService backendErrorReporting ssoApi localeModel localStorage networkStatus parser opt_params opt_paramKey opt_clientVersion".split(" ");

    function ui(a) {
        this.videoId = a;
        this.$ = "loadingTile"
    };

    function vi(a, b) {
        this.g = b.Ya && b.isLimitedMemory ? "http:" : a.location.protocol;
        this.h = /(lh[3-6].googleusercontent)/i;
        this.i = "yt3.ggpht"
    }
    d = vi.prototype;
    d.EG = function(a) {
        return "//" == a.substr(0, 2) ? this.g + a : a
    };
    d.bj = function(a) {
        return a.replace(this.h, "yt3.ggpht")
    };
    d.Pd = function(a) {
        return a ? this.rz(this.gV(a), "i", "1") : ""
    };
    d.ki = function(a, b) {
        return this.rz(a, "vi", b)
    };
    d.rz = function(a, b, c) {
        return this.g + "//i1.ytimg.com/" + b + "/" + a + "/" + c + ".jpg"
    };
    d.gV = function(a) {
        return 24 == a.length ? a.substr(2) : a
    };
    vi.inject = ["window", "environmentModel"];

    function wi(a, b, c) {
        this.videoId = a || "";
        this.playlistId = b || "";
        this.innerTubeEndpointParams = c || null
    };

    function xi(a, b) {
        ze.call(this);
        this.h = a;
        this.g = {};
        b && this.push(b)
    }
    B(xi, ze);
    d = xi.prototype;
    d.clear = function() {
        this.g = {};
        xi.u.clear.call(this)
    };
    d.slice = function(a, b) {
        return new xi(this.h, xi.u.slice.call(this, a, b).Fa())
    };
    d.push = function(a) {
        xi.u.push.call(this, this.Dy(a))
    };
    d.unshift = function(a) {
        xi.u.unshift.call(this, this.Dy(a, !0))
    };
    d.Dy = function(a, b) {
        return (s(a) ? a : [a]).filter(b ? this.kV : this.hV, this)
    };
    d.hV = function(a) {
        if ((a = a && a[this.h]) && this.g[a]) return !1;
        a && (this.g[a] = !0);
        return !0
    };
    d.kV = function(a) {
        if (a = a && a[this.h]) {
            if (this.g[a]) {
                var b = this.gH(a);
                if (0 > b) return !1;
                this.items.splice(b, 1);
                this.length = this.items.length
            }
            this.g[a] = !0
        }
        return !0
    };
    d.gH = function(a) {
        for (var b = 0; b < this.S(); ++b)
            if (this.items[b][this.h] === a) return b;
        return -1
    };

    function yi() {
        this.title = this.serviceQuery = this.kb = this.Mb = this.wi = this.ze = "";
        this.ue = 0;
        this.lf = !1;
        this.kf = "";
        this.ia = new xi("videoId");
        this.g = null
    }
    yi.prototype.S = function() {
        return this.ia.S()
    };
    yi.prototype.clone = function() {
        var a = new yi;
        a.ze = this.ze;
        a.wi = this.wi;
        a.Mb = this.Mb;
        a.kb = this.kb;
        a.serviceQuery = this.serviceQuery;
        a.title = this.title;
        a.ue = this.ue;
        a.lf = this.lf;
        a.ia = this.ia.slice(0, this.ia.S());
        return a
    };

    function ih(a, b, c, e, f) {
        I.call(this);
        this.model = new yi;
        this.Na = a;
        this.activeIndex = 0;
        this.j = f || new wi;
        this.$ = null;
        this.model.title = b || "";
        this.model.kf = c;
        this.model.kb = a.id;
        this.model.serviceQuery = e || ""
    }
    B(ih, I);
    de(ih, ["activeIndex", "model"]);
    d = ih.prototype;
    d.S = function() {
        return this.model ? this.model.ia.S() : 0
    };
    d.Am = function(a) {
        return !!(a && a.model && this.model && a.model.S() === this.model.S() && a.model.serviceQuery === this.model.serviceQuery && a.model.title === this.model.title)
    };
    d.at = function() {
        return this.ya(this.activeIndex)
    };
    d.load = function(a, b) {
        var c = {
            query: this.model.serviceQuery
        };
        z(c, this.j);
        b && this.Na.Mi && this.Na.Mi("start_browse", "fr_rq", "fr_rs", "fr_r");
        this.Na.load(c, y(function(b) {
            b.hc && (this.hc = b.hc);
            this.clear();
            this.model.ia.push(b.ia.Fa());
            a && a(b)
        }, this))
    };
    d.clear = function() {
        this.model.ia.clear()
    };
    d.ya = function(a) {
        return this.model && this.model.ia ? this.model.ia.ya(a) : null
    };
    d.Ko = function(a, b) {
        var c = -1;
        this.model && this.model.ia && this.model.ia.Fa().some(function(e, f) {
            if (e[a] === b) return c = f, !0
        });
        return c
    };
    d.Kn = function() {
        return this.model.ia
    };
    d.jk = function() {
        return !1
    };
    d.gf = function(a) {
        this.activeIndex = a
    };
    ih.inject = ["service", "title", "feedIconUrl", "opt_serviceQuery", "opt_params"];

    function zi(a, b, c, e, f) {
        ih.call(this, a, b, c, e, f);
        this.g = [];
        this.i = [];
        this.numLoadedPages = 0;
        this.userId = "";
        this.p = null
    }
    B(zi, ih);
    de(zi, ["numLoadedPages"]);
    d = zi.prototype;
    d.clear = function() {
        for (var a = 0, b = this.g.length; a < b; ++a) this.g[a] && (this.g[a].ve = null);
        a = 0;
        for (b = this.i.length; a < b; ++a) {
            var c = this.i[a];
            c.h && (c.h(), c.h = null)
        }
        this.numLoadedPages = 0;
        zi.u.clear.call(this)
    };
    d.reset = function() {
        this.clear();
        this.g = [];
        this.i = [];
        this.gf(0)
    };
    d.OB = function(a) {
        this.p = a
    };
    d.Aq = function(a) {
        return a.every(function(a) {
            a = this.g[a.index];
            return !(!a || !a.ve || a.error)
        }, this)
    };
    d.load = function(a, b) {
        var c = this.zH(),
            e = a || q;
        if (this.Aq(c)) e();
        else {
            var f, g = !!b;
            this.i = c;
            for (var k = 0, m = c.length; k < m; ++k) {
                var n = c[k];
                (f = this.g[n.index]) && f.ve && !f.error || this.AH(n, c, e, g);
                g && (g = !1)
            }
        }
    };
    d.AH = function(a, b, c, e) {
        var f = {},
            g = null;
        this.g.length && a.index && (g = this.g[a.index - 1]);
        g && g.i ? f.continuation = g.i : (f["start-index"] = 25 * a.index + 1, f["max-results"] = 25);
        f.continuation || (f.query = this.model.serviceQuery);
        z(f, this.j);
        e && this.Na.Mi && this.Na.Mi("start_browse", "fr_rq", "fr_rs", "fr_r");
        a.h = this.Na.load(f, y(this.Hi, this, a, b, c), y(this.mC, this, a, b, c))
    };
    d.Hi = function(a, b, c, e) {
        a.h = null;
        a.ve = e;
        a.g = e.ia.S();
        this.g[a.index] = a;
        a.error = !1;
        a.i = e.g;
        this.model.ue = e.ue;
        this.model.lf = e.lf;
        if (this.Aq(b)) {
            a = new xi("videoId");
            for (var f = 0, g = 0, k = this.g.length; g < k; ++g) {
                var m = this.g[g];
                m.j = a.S();
                if (m.ve && 0 < m.g) a.push(m.ve.ia.Fa());
                else
                    for (var n = 0; n < m.g; ++n) a.push(new ui(f.toString())), f++
            }
            this.model.ia.ma(a.Fa());
            this.numLoadedPages += b.length;
            this.i = [];
            c()
        }
        this.model.title || (e.ze && "UU" == e.Mb ? (this.model.title = e.ze, this.model.kf = this.p.Pd(e.wi), this.B("model:changed",
            this.model)) : e.title && (this.model.title = e.title, this.B("model:changed", this.model)))
    };
    d.mC = function(a, b, c) {
        this.Hi(a, b, c, new yi);
        this.g[a.index].error = !0;
        b.some(function(a) {
            return this.g[a.index].error
        }, this) && (this.i = [], c())
    };
    d.ww = function() {
        if (0 === this.activeIndex) return 0;
        for (var a = 0, b, c = 0, e = this.g.length; c < e; ++c)
            if (b = this.g[c])
                if (a += b.g, this.activeIndex < a) return b.index;
        return 0
    };
    d.jI = function() {
        return this.g[this.ww()]
    };
    d.zH = function() {
        var a = this.sm(),
            b = [a],
            c = this.activeIndex - a.j;
        a.index && 5 >= c && b.unshift(this.sm(-1));
        var e = !!a.i || !(this.Na instanceof U);
        a.g && e && c >= a.g - 5 && b.push(this.sm(1));
        return b.filter(function(a) {
            return a.error || !a.ve
        })
    };
    d.sm = function(a) {
        a = a || 0;
        a = this.ww() + a;
        var b = this.g[a];
        return b ? b : new Ai(a)
    };
    d.jk = function(a) {
        var b = this.jI(),
            c = this.activeIndex - b.j;
        return 0 < a ? c === b.g - 5 : 5 === c
    };

    function Ai(a) {
        this.ve = null;
        this.g = 0;
        this.h = null;
        this.index = a;
        this.j = 0;
        this.i = null
    };

    function Bi(a, b, c, e, f) {
        zi.call(this, a, b, c, e, f);
        this.h = []
    }
    B(Bi, zi);
    Bi.prototype.reset = function() {
        this.h.length = 0;
        Bi.u.reset.call(this)
    };
    Bi.prototype.l = function(a) {
        this.h.push(a)
    };
    Bi.prototype.Hi = function(a, b, c, e) {
        var f = y(function() {
            var a = this.h.concat(this.Kn().Fa());
            this.Kn().ma(a);
            c()
        }, this);
        Bi.u.Hi.call(this, a, b, f, e)
    };

    function Ci(a, b, c, e, f, g, k) {
        this.o = a;
        this.i = b;
        this.p = c;
        this.k = e;
        this.j = f;
        this.l = g;
        this.w = k;
        this.g = this.h = null
    }
    d = Ci.prototype;
    d.bb = function(a, b, c, e, f) {
        this.h = a;
        this.g = b;
        this.VG();
        this.TG() && this.WG();
        this.UG(c, e, f);
        this.XG()
    };
    d.VG = function() {
        var a = this.i.Za("start_watch") || this.i.Za("start_cast") || this.i.Za("start_dial") || this.i.Za("start_browse");
        a && a.tick("app_rq_ply")
    };
    d.TG = function() {
        return !this.g || "remoteQueueService" != this.g.Na.id && "playlistService" != this.g.Na.id
    };
    d.U5 = function(a) {
        return "postPlayTile" === a.$
    };
    d.WG = function() {
        this.j.Wa() ? this.eQ() : this.j.Wc() && this.dQ()
    };
    d.eQ = function() {
        this.g = new Bi(this.l, "[[Now Playing|Title for currently playing playlists.]]", "/icon-related.png", this.h.videoId);
        this.g.l(this.h)
    };
    d.dQ = function() {
        "RV" === this.h.Mb ? this.g = new zi(this.l, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", "/icon-related.png", this.h.videoId) : this.g = this.p.lc()
    };
    d.UG = function(a, b, c) {
        a = this.p.wg(this.h, this.g, a || 0, b || !1, c || !1);
        this.j.Wc() || this.k.Mk(a)
    };
    d.XG = function() {
        this.o.B("goto-watch", this.h.videoId)
    };
    Ci.inject = "rootDispatcher csiService watchModel remoteService applicationState relatedVideosService environmentModel".split(" ");

    function Di(a, b, c) {
        this.g = a;
        this.i = b;
        this.h = c
    }
    Di.prototype.bb = function(a, b) {
        this.g.ud(a, y(this.j, this, a, b || 0))
    };
    Di.prototype.j = function(a, b, c) {
        0 == c.S() ? (b = {
            a: "play_empty_playlist"
        }, b.id = a, this.h.g("/gen_204", b)) : (a = new zi(this.g, c.title, "", c.serviceQuery), c.kf = "icon-playlist", a.model = c, this.i.B("cmd-playback", a.ya(0), a, b))
    };
    Di.inject = ["playlistService", "rootDispatcher", "reportingService"];

    function Ei(a) {
        this.g = a
    }
    Ei.prototype.bb = function(a) {
        this.g.Cu(this.h(a))
    };
    Ei.prototype.h = function(a) {
        var b = this.g.Bg(),
            c = b.Qd();
        a.state && a.state !== b.Pb() ? (b.Of(a.state), c.clear()) : "browse-sets" === a.state && c.clear();
        void 0 !== a.mode && (void 0 !== a.Pa ? a.Pa.mode = a.mode : a.Pa = {
            mode: a.mode
        });
        if (void 0 !== a.Pa)
            for (var e in a.Pa) null === a.Pa[e] || "" === a.Pa[e] ? c.remove(e) : c.gw(e, a.Pa[e]);
        return b
    };
    Ei.inject = ["router"];

    function Fi() {
        P.call(this);
        this.id = "setsOnboarding"
    }
    B(Fi, P);

    function Gi(a, b, c, e) {
        Q.call(this);
        this.l = a;
        this.h = b;
        this.i = c;
        this.j = e
    }
    B(Gi, Q);
    Gi.prototype.Tb = function() {
        this.i.Oa("needs-sets-onboarding", !1);
        this.l.B("request-sets-onboarding", y(this.k, this))
    };
    Gi.prototype.k = function() {
        this.o();
        this.Ga()
    };
    Gi.prototype.o = function() {
        var a = {
            outcome: "single",
            a: "tv_sets_onboarding"
        };
        a.logged_in = this.h.Ab();
        this.j.g("/gen_204", a)
    };
    Gi.inject = ["rootDispatcher", "authService", "localStorage", "reportingService"];

    function Hi(a, b, c, e, f) {
        this.j = a;
        this.k = b;
        this.h = c;
        this.g = e;
        this.i = f
    }
    Hi.prototype.bb = function() {
        this.p() ? (this.h.h(!0), this.j.B("request-paid-scope-dialog")) : this.l() && this.j.B("run-process", new Fi)
    };
    Hi.prototype.p = function() {
        return !!(this.g.usePaidScope && this.k.Ab() && this.i.get("needs_rental_auth_dialog"))
    };
    Hi.prototype.l = function() {
        return this.h.get() || !this.g.useSetsUi ? !1 : this.g.showOnboarding || !this.g.cb(tb) && !!this.i.get("needs-sets-onboarding")
    };
    Hi.inject = ["rootDispatcher", "authService", "hasShownScopeDialog", "environmentModel", "localStorage"];

    function Ii(a, b) {
        this.h = a;
        this.g = [{
            event: "cmd-load-video-from-service",
            command: hh
        }, {
            event: "ensure-logged-in",
            command: $b
        }, {
            event: "external-state-change",
            command: jh
        }, {
            event: "external-state-change",
            command: bh
        }, {
            event: "external-state-change",
            command: ac
        }, {
            event: "clear-storage",
            command: ib
        }, {
            event: "clear-watch-history",
            command: jb
        }, {
            event: "cmd-load-watch-next",
            command: kh
        }, {
            event: "cmd-playback",
            command: Ci
        }, {
            event: "cmd-playlist-playback",
            command: Di
        }, {
            event: "cmd-set-application-state",
            command: Ei
        }, {
            event: "request-login",
            command: wh
        }, {
            event: "request-logout",
            command: xh
        }, {
            event: "request-like-video",
            command: Yg
        }, {
            event: "record-navigation",
            command: uh
        }, {
            event: "show-startup-dialogs",
            command: Hi,
            St: !0
        }, {
            event: "cmd-navigate-to-endpoint",
            command: sh
        }];
        b.useSetsUi && this.g.push({
            event: "state-change",
            command: ah
        });
        b.la && !b.L && this.g.push({
            event: "hide-splash-screen",
            command: bc,
            St: !0
        })
    }
    Ii.prototype.initialize = function() {
        for (var a = 0; a < this.g.length; ++a) {
            var b = this.g[a];
            this.h.register(b.event, b.command, b.fc, b.St)
        }
    };
    Ii.inject = ["commandCenter", "environmentModel"];

    function Ji(a) {
        return function(b, c, e) {
            var f = 0,
                g = 1E3 / b,
                k = 0;
            return function(b) {
                var n = a.Uc().getTime(),
                    r = n - f;
                if (!e || e.apply(this, arguments))
                    if (!b.doNotLimit && !isNaN(r) && r <= g) {
                        L(b);
                        a.clearTimeout(k);
                        var u = b.srcElement;
                        u && (k = a.setTimeout(function() {
                            var a;
                            if ("keyup" == b.type || "keydown" == b.type) a = Rd(u, b.type, b.keyCode, b.bubbles, b);
                            else if (b instanceof MouseEvent) a = Sd(u, b.type, b);
                            else {
                                a = Qd(u, b.type, b.bubbles, b);
                                for (var c in b) a[c] = b[c]
                            }
                            u.dispatchEvent(a)
                        }, g - r + 1))
                    } else c.apply(this, arguments), f = n
            }
        }
    }

    function Ki(a) {
        var b = {};
        a.forEach(function(a) {
            b[a] = !0
        });
        return function(a) {
            return !!b[a.keyCode]
        }
    }
    Ji.inject = ["timeService"];

    function Li(a) {
        this.l = a;
        this.g = null;
        this.i = [];
        this.h = null;
        this.j = 0
    }
    d = Li.prototype;
    d.hL = function(a) {
        this.g = a;
        this.Cn()
    };
    d.Cn = function() {
        this.mL();
        this.g && this.g.model && this.kL()
    };
    d.mL = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.i[a]();
        this.i.length = 0
    };
    d.kL = function() {
        this.g.catchKeyPress && this.jL();
        this.g.catchMouseMove && this.lL()
    };
    d.jL = function() {
        var a = y(this.qJ, this);
        if (this.g.rateLimit) var b = Ki(this.g.isVertical ? [40, 38] : [39, 37]),
            a = this.l(this.g.rateLimit, a, b);
        this.Lj("keydown", a)
    };
    d.qJ = function(a) {
        (this.j = this.mQ(a)) && (this.nQ() ? L(a, !1, !0) : this.mv("same-heavy"))
    };
    d.nQ = function() {
        var a = this.g.model.ec(this.j, this.g.loop) || this.g.consumeEvents;
        a && this.mv(this.g.isVertical ? "same-light" : "same-toggle");
        return a
    };
    d.mQ = function(a) {
        var b = a.keyCode;
        a = a.detail && a.detail.Oe ? a.detail.Oe : 1;
        return 40 == b && this.g.isVertical || 39 == b && !this.g.isVertical ? a : 38 == b && this.g.isVertical || 37 == b && !this.g.isVertical ? -a : 0
    };
    d.lL = function() {
        this.g.mouseAutoScroll && this.Lj("mouseover", this.Un);
        this.Lj("click", this.Un);
        this.Lj("button-enter", this.Un)
    };
    d.Lj = function(a, b) {
        this.i.push(this.g.C(a, y(b, this)))
    };
    d.mv = function(a) {
        this.g.enableSounds && this.g.X("play-sound", a)
    };
    d.Un = function(a) {
        for (a = a.target; a && a.parentNode != this.g.D;) a = a.parentNode;
        (a = a && a.ad && a.ad.model) && this.g.model.Fe(a)
    };
    d.cw = function() {
        var a;
        if (a = this.g) {
            a = this.g.model;
            var b;
            if (b = !!a && w(a.ra) && w(a.Db) && w(a.Fe) && w(a.ec)) b = !!a && w(a.pf) && w(a.S) && w(a.Fa) && w(a.ya) && w(a.Ef);
            a = b
        }
        a && (b = this.g.model, a = b.ra(), b = b.ya(a), this.AJ(b ? this.g.Lm(a) : null))
    };
    d.ow = function() {
        return this.h
    };
    d.AJ = function(a) {
        if (this.h != a) {
            var b = !this.g.ha();
            this.h && !this.h.Xc() && (this.h.Sa("selected"), b && this.h.H());
            if (this.h = a) this.h.Ma("selected"), b && this.h.H()
        }
    };
    Li.inject = ["rateLimit"];

    function Mi(a, b) {
        M.call(this);
        this.g = a;
        this.i = b;
        this.rateLimit = this.j = this.model = null;
        this.catchMouseMove = !1;
        this.catchKeyPress = this.mouseAutoScroll = !0;
        this.elementLimit = -1;
        this.scrollOnFocus = this.consumeEvents = this.loop = this.isVertical = !1;
        this.enableSounds = !0
    }
    B(Mi, M);
    de(M, ["itemName", "rateLimit", "catchMouseMove", "mouseAutoScroll", "catchKeyPress"]);
    d = Mi.prototype;
    d.ea = function() {
        this.D.children.length && this.pR();
        this.C("itemName:changed", y(this.qR, this), !1, !0);
        var a = y(this.oR, this);
        this.C("catchKeyPress:changed", a, !1, !0);
        this.C("catchMouseMove:changed", a, !1, !0);
        this.C("mouseAutoScroll:changed", a, !1, !0);
        this.C("rateLimit:changed", a, !1, !0)
    };
    d.dd = function() {
        return 0 < this.na ? this.Kg() : this.g.ow()
    };
    d.sL = function() {
        return this.g.ow()
    };
    d.qR = function() {
        v(this.itemName) && this.itemName ? this.re(y(this.i.h, this.i, this.itemName)) : this.re(null)
    };
    d.eD = function() {
        return this.j
    };
    d.re = function(a, b) {
        this.j = a;
        b || this.Vf(y(function() {
            this.Ht();
            this.$u()
        }, this))
    };
    d.oR = function() {
        this.g.Cn()
    };
    d.pR = function() {
        for (var a = null, b = wd(this.D), c = 0, e = b.length; c < e; ++c)
            if (yd(b[c])) {
                a = ud(b[c]);
                break
            }
        a && (-1 == a.className.indexOf("$") && Vd(a, "$component"), this.re(y(this.i.l, this.i, a.outerHTML)))
    };
    d.$u = function() {
        var a = this.zy();
        0 <= this.elementLimit && (a = this.elementLimit);
        var b = this.D ? this.D.children : [];
        if (a > b.length) {
            if (this.model)
                for (b = b.length; b < a; ++b) {
                    var c = this.model.ya(b);
                    c && (c = this.Go(c), this.by(c), c.H(!0))
                }
        } else
            for (; a < b.length;) this.dk(b.length - 1)
    };
    d.zy = function() {
        return this.model ? this.model.S() : 0
    };
    d.by = function(a, b) {
        l(b) ? (td(this.D, a.D, b), this.Jy(a, b)) : (this.D.appendChild(a.D), this.Va(a))
    };
    d.Go = function(a, b) {
        return this.j ? this.j(a, b) : this.i.g(a, b)
    };
    d.ready = function() {
        this.g.hL(this);
        this.Bn()
    };
    d.Hd = function(a) {
        Mi.u.Hd.call(this, a);
        this.scrollOnFocus && this.QR(a)
    };
    d.H = function(a, b) {
        this.Vf(y(function() {
            M.prototype.H.call(this, a);
            b || this.g.cw()
        }, this))
    };
    d.Y = function(a) {
        Mi.u.Y.call(this, a);
        this.g.Cn();
        this.model && (this.K(this.model.pf(), "selectedIndex:changed", y(this.An, this)), this.K(this.model.pf(), "items:changed", y(this.Bn, this)), this.Bn())
    };
    d.An = function() {
        this.H()
    };
    d.Bn = function() {
        this.Vf(y(function() {
            this.$u();
            this.H(!1, !0);
            this.Kj();
            this.g.cw()
        }, this))
    };
    d.Kj = function(a) {
        for (var b = 0, c = this.p.length; b < c; ++b) {
            var e = this.p[b],
                f = this.model ? this.model.ya(b) : null,
                g = e,
                k = g ? g.model : null,
                m = !f;
            f ? (g = this.Go(f, e), m = k !== g.model, g !== e && (this.dk(b), this.by(g, b))) : g.model = null;
            (m || a) && g.H(!0)
        }
    };
    d.QR = function(a) {
        a = a.D;
        var b = this.isVertical ? "offsetTop" : "offsetLeft",
            c = this.isVertical ? "offsetHeight" : "offsetWidth",
            e = this.isVertical ? "scrollTop" : "scrollLeft",
            f = a[b] >= this.D[e],
            g = a[b] + a[c] <= this.D[e] + this.D[c];
        f && g || (this.D[e] = f ? a[b] + a[c] - this.D[c] : a[b])
    };
    Mi.inject = ["listSelectionManager", "componentFactory"];

    function Ni(a) {
        I.call(this);
        this.l = a;
        this.j = this.h = 0;
        this.k = null;
        this.w = [];
        this.w.push(a.pf().C("items:changed", y(function() {
            this.xh()
        }, this)));
        this.w.push(a.pf().C("selectedIndex:changed", y(function(a, c) {
            this.yh(a, c)
        }, this)))
    }
    B(Ni, I);
    d = Ni.prototype;
    d.$a = function() {
        return this.l
    };
    d.Ij = function() {
        return this.h
    };
    d.Gd = function(a) {
        return this.h + a
    };
    d.lx = function(a) {
        return a - this.h
    };
    d.h4 = function() {
        return this.k
    };
    d.qF = function(a) {
        this.k = a
    };
    d.Le = function(a, b) {
        var c = void 0 !== b ? b : this.j;
        if (a != this.h || c != this.j) {
            var e = this.h,
                f = this.j;
            this.h = a;
            this.j = c;
            this.B("items:changed", !0);
            this.B("projectionWindow:changed", a, c, e, f)
        }
    };
    d.xh = function() {
        this.B("items:changed", !1)
    };
    d.yh = function(a, b) {
        a = this.Ve(a);
        b = this.Ve(b);
        a != b && this.B("selectedIndex:changed", a, b)
    };
    d.Ve = function(a) {
        return 0 > a || a < this.h || a >= this.h + this.S() ? -1 : this.lx(a)
    };
    d.M = function() {
        for (; 0 < this.w.length;) this.w.pop()();
        Ni.u.M.call(this)
    };
    d.pf = function() {
        return this
    };
    d.S = function() {
        return this.j
    };
    d.Fa = function() {
        for (var a = [], b = 0, c = this.S(); b < c; ++b) a.push(this.ya(b));
        return a
    };
    d.ya = function(a) {
        a = this.Gd(a);
        var b = this.$a();
        if (0 > a || a >= b.S()) {
            if (this.k) return this.k(a)
        } else return b.ya(a)
    };
    d.Ef = function(a) {
        for (var b = 0, c = this.S(); b < c; ++b)
            if (this.ya(b) === a) return b;
        return -1
    };
    d.ra = function() {
        return this.Ve(this.l.ra())
    };
    d.Db = function() {
        var a = this.ra();
        return 0 > a ? void 0 : this.ya(a)
    };
    d.Fe = function(a) {
        a = this.Ef(a);
        return 0 > a ? !1 : this.l.Ia(this.Gd(a))
    };
    d.ec = function(a, b) {
        return this.l.ec(a, b)
    };

    function Oi(a, b, c) {
        Ni.call(this, a);
        this.g = b || 0;
        this.Qt(void 0 !== c ? c : 3)
    }
    B(Oi, Ni);
    Oi.prototype.Qt = function(a) {
        this.Le(this.$a().ra() - this.g, a)
    };
    Oi.prototype.ra = function() {
        return this.g
    };
    Oi.prototype.Ia = function(a) {
        if (a !== this.g) {
            this.Le(this.$a().ra() - a);
            var b = this.g;
            this.g = a;
            this.B("selectedIndex:changed", a, b)
        }
    };
    Oi.prototype.yh = function(a) {
        this.Le(a - this.g)
    };

    function Pi(a, b, c, e) {
        N.call(this, a, c, e, "subtitled-button");
        this.subtitle = b || ""
    }
    B(Pi, N);

    function Qi(a, b) {
        M.call(this);
        this.g = a;
        this.G = b;
        this.j = new R;
        this.A = new R;
        this.w = new R;
        this.F = new R;
        this.i = new R;
        this.displayPropertiesProjection = this.Hc(this.i);
        this.o = this.k = null
    }
    B(Qi, M);
    var Ri = {
            uH: "background-color",
            KK: "color",
            vH: "font-color",
            LK: "display-option",
            MK: "language",
            NK: "off",
            l1: "on",
            wH: "window-color"
        },
        Si = {
            monoSerif: "[[Monospaced Serif|This is the text of the Monospaced Serif option for captions font family.]]",
            propSerif: "[[Proportional Serif|This is the text of the Proportional Serif option for captions font family.]]",
            monoSans: "[[Monospaced Sans-Serif|This is the text of the Monospaced Sans-Serif option for captions font family.]]",
            propSans: "[[Proportional Sans-Serif|This is the text of the Proportional Sans-Serif option for captions font family.]]",
            casual: "[[Casual|This is the text of the Casual option for captions font family.]]",
            cursive: "[[Cursive|This is the text of the Cursive option for captions font family.]]",
            smallCaps: "[[Small Capitals|This is the text of the Small Capitals option for captions font family.]]",
            none: "[[None|This is the text of the None option for character edge styles.]]",
            dropShadow: "[[Drop Shadow|This is the text of the Drop Shadow option for character edge styles.]]",
            raised: "[[Raised|This is the text of the Raised option for character edge styles.]]",
            depressed: "[[Depressed|This is the text of the Depressed option for character edge styles.]]",
            uniform: "[[Uniform|This is the text of the Uniform option for character edge styles.]]"
        },
        Ti = {
            "-2": "50%",
            "-1": "75%",
            0: "100%",
            2: "200%",
            4: "300%"
        },
        Ui = {
            0: "0%",
            "0.25": "25%",
            "0.5": "50%",
            "0.75": "75%",
            1: "100%"
        },
        Vi = {
            "#080808": {
                className: "black",
                text: "[[Black|The color black.]]"
            },
            "#f00": {
                className: "red",
                text: "[[Red|The color red.]]"
            },
            "#f0f": {
                className: "magenta",
                text: "[[Magenta|The color magenta.]]"
            },
            "#00f": {
                className: "blue",
                text: "[[Blue|The color blue.]]"
            },
            "#0ff": {
                className: "cyan",
                text: "[[Cyan|The color cyan.]]"
            },
            "#0f0": {
                className: "green",
                text: "[[Green|The color green.]]"
            },
            "#ff0": {
                className: "yellow",
                text: "[[Yellow|The color yellow.]]"
            },
            "#fff": {
                className: "white",
                text: "[[White|The color white.]]"
            }
        },
        Wi = {
            DE: "display-properties-list",
            EE: "options-list"
        };
    d = Qi.prototype;
    d.initialize = function() {
        this.K(this.g, "subtitlesTrackList:changed", y(this.mm, this));
        this.K(this.g, "api:changed", y(this.mm, this));
        this.dK();
        this.cK()
    };
    d.ea = function() {
        this.C("button-enter", y(this.jS, this));
        this.C("keyup", y(this.kS, this))
    };
    d.ready = function() {
        this.k = this.Aa(Wi.DE);
        this.o = this.Aa(Wi.EE);
        this.K(this.i, "selectedIndex:changed", y(this.o.H, this.o, !0));
        if (this.g.ul()) {
            this.FE();
            var a = this.g.Ji();
            a && a.length ? this.mm() : this.g.cr()
        } else this.Cr()
    };
    d.xa = function() {
        this.g.Vm(!1);
        Qi.u.xa.call(this)
    };
    d.Hc = function(a) {
        return new Oi(a, 1)
    };
    d.dK = function() {
        var a = this.g.Si() || {},
            a = H(a, "displayName", ""),
            b = this.g.Dr(),
            c = b.fontFamilyOption,
            e = b.color,
            f = b.background,
            g = b.windowColor,
            k = b.charEdgeStyle,
            m = b.textOpacity,
            n = b.backgroundOpacity,
            r = b.windowOpacity,
            b = b.fontSizeIncrement;
        this.mD(e, f, g);
        this.i.ma([new Pi("[[Captions|Menu item to the captions settings.]]", a, "", this.Hc(this.j)), new Pi("[[Font family|Menu item to select font family of the captions.]]", H(Si, c, ""), "", this.Hc(this.oD(c))), new Pi("[[Font color|Menu item to select font color.]]",
            H(H(Vi, e) || {}, "text", ""), "font-color", this.Hc(this.A)), new Pi("[[Font size|Menu item to select size of the captions.]]", H(Ti, b, ""), "", this.Hc(this.pD(b))), new Pi("[[Background color|Menu item to select background color.]]", H(H(Vi, f) || {}, "text", ""), "background-color", this.Hc(this.w)), new Pi("[[Background opacity|Menu item for changing background opacity for caption text.]]", H(Ui, n, ""), "", this.Hc(this.lD(n))), new Pi("[[Window color|Menu item to select the window color.]]", H(H(Vi, g) || {}, "text", ""), "window-color",
            this.Hc(this.F)), new Pi("[[Window opacity|Menu item for changing window opacity for caption text]]", H(Ui, r, ""), "", this.Hc(this.rD(r))), new Pi("[[Character edge style|Menu item to select character edge styles of the captions.]]", H(Si, k, ""), "", this.Hc(this.nD(k))), new Pi("[[Text opacity|Menu item to select text opacity of the captions.]]", H(Ui, m, ""), "", this.Hc(this.qD(m)))])
    };
    d.RK = function(a) {
        this.k.QN(a) || (this.i.Db().subtitle = a.detail.label, this.k.H(!0))
    };
    Qi.prototype.getDisplayPropertyOptions = function() {
        return this.i.Db().payload
    };
    d = Qi.prototype;
    d.mm = function() {
        var a = this.g.Ji(),
            b = this.g.Si() || {};
        this.g.Vm(!!a.length);
        if (a.length) {
            for (var c, e = [], f = 0; f < a.length; ++f) {
                var g = a[f],
                    k = new N(g.displayName, "language", g);
                b && g.id === b.id && (c = k);
                e.push(k)
            }
            e.unshift(new N("[[Off|Title of a button that turns subtitles off.]]", "off"));
            this.j.ma(e);
            c && this.j.Fe(c)
        } else this.Cr();
        this.H(!0)
    };
    d.jS = function(a) {
        switch (a.detail.type) {
            case Ri.MK:
                this.g.av(a.detail.payload);
                this.g.Vm(!0);
                break;
            case Ri.LK:
                this.g.Em(a.detail.payload);
                break;
            case Ri.NK:
                this.g.ln();
                break;
            case Ri.KK:
                this.QK(a.detail.payload.color)
        }
        this.RK(a);
        L(a)
    };
    d.QK = function(a) {
        var b = this.i.Db(),
            c;
        b.type === Ri.vH ? c = "color" : b.type === Ri.uH ? c = "background" : b.type === Ri.wH && (c = "windowColor");
        b = {};
        b[c] = a;
        b[c + "Override"] = 1;
        this.g.Em(b)
    };
    d.kS = function(a) {
        switch (a.keyCode) {
            case 39:
                this.o.fa();
                break;
            case 37:
                this.k.fa()
        }
    };
    d.cK = function() {
        this.j.ma(cb(new N(""), 6))
    };
    d.Cr = function() {
        this.j.ma([new N("[[Not available|Title that is displayed when subtitles are not available.]]")])
    };
    d.FE = function() {
        this.j.ma([new N("[[Loading...|Tooltip displayed when some data is loading.]]")])
    };
    d.mD = function(a, b, c) {
        for (var e = "#080808 #f00 #f0f #00f #0ff #0f0 #ff0 #fff".split(" "), f = [], g = 0, k = e.length; g < k; ++g) {
            var m = e[g];
            f.push(new N(Vi[m].text, "color", {
                color: m,
                "class": Vi[m].className
            }, "color-button"))
        }
        this.w.ma(f);
        this.w.Ia(e.indexOf(b));
        this.F.ma(f);
        this.F.Ia(e.indexOf(c));
        b = f.reverse().map(function(a) {
            a = new N(a.label, a.type, xc(a.payload), a.$);
            a.payload["class"] += " rounded";
            return a
        });
        this.A.ma(b);
        this.A.Ia(e.reverse().indexOf(a))
    };
    d.oD = function(a) {
        return this.ig("fontFamilyOption", "monoSerif propSerif monoSans propSans casual cursive smallCaps".split(" "), Si, a)
    };
    d.nD = function(a) {
        return this.ig("charEdgeStyle", ["none", "dropShadow", "raised", "depressed", "uniform"], Si, a)
    };
    d.qD = function(a) {
        return this.ig("textOpacity", [.5, .75, 1], Ui, a)
    };
    d.lD = function(a) {
        return this.ig("backgroundOpacity", [0, .25, .75, 1], Ui, a)
    };
    d.rD = function(a) {
        return this.ig("windowOpacity", [0, .25, .75, 1], Ui, a)
    };
    d.pD = function(a) {
        return this.ig("fontSizeIncrement", [-2, -1, 0, 2, 4], Ti, a)
    };
    d.ig = function(a, b, c, e) {
        var f = new R;
        f.ma(this.NS(a, b, c));
        f.Ia(b.indexOf(e));
        return f
    };
    d.NS = function(a, b, c) {
        for (var e = [], f = 0, g = b.length; f < g; f++) {
            var k = b[f],
                m = {};
            m[a] = k;
            e.push(new N(c[k] || k, "display-option", m))
        }
        return e
    };
    Qi.inject = ["playerFacade", "environmentModel"];

    function Xi(a, b) {
        M.call(this);
        this.g = a;
        this.j = b;
        this.environmentProperties = new ze
    }
    B(Xi, M);
    Xi.prototype.ready = function() {
        this.i()
    };
    Xi.prototype.fb = function() {
        return !1
    };
    Xi.prototype.i = function() {
        var a = this.g.MH(),
            b = [];
        this.g.U && (a.Storage = this.j.NH());
        for (var c in a) b.push({
            key: c,
            value: a[c]
        });
        this.environmentProperties.ma(b)
    };
    Xi.inject = ["environmentModel", "localStorage"];

    function Yi() {
        M.call(this);
        this.model = null
    }
    B(Yi, M);
    Yi.prototype.Y = function(a) {
        Yi.u.Y.call(this, a);
        this.model && (this.model.xb = y(this.X, this, "request-delete-video-progress-dialog", this.model.video), this.H(!0))
    };

    function Zi(a) {
        M.call(this);
        this.j = a;
        this.k = this.model = null
    }
    B(Zi, M);
    Zi.prototype.Y = function(a) {
        Zi.u.Y.call(this, a);
        this.model && this.j.l(this.model.video.videoId, y(this.g, this), y(this.i, this))
    };
    Zi.prototype.g = function() {
        this.X("invalidate-uploads");
        this.X("request-close-dialog")
    };
    Zi.prototype.i = function() {
        this.X("request-delete-video-error")
    };
    Zi.inject = ["apiaryVideos"];

    function Ke() {
        R.call(this);
        this.i = [];
        this.g = !0;
        this.C("selectedIndex:changed", y(this.Wt, this));
        this.C("selection:changed", y(this.lu, this));
        this.C("items:changed", y(this.FG, this));
        this.C("items:changed", y(this.lu, this))
    }
    B(Ke, R);
    d = Ke.prototype;
    d.Dl = function(a, b) {
        for (var c = [], e; a.length;) e = new R, e.ma(a.splice(0, Math.max(b || a.length, 1))), c.push(e);
        this.ma(c)
    };
    d.CV = function() {
        var a = this.Db();
        return a ? a.Db() : null
    };
    d.Tl = function(a) {
        for (var b = 0, c = this.S(); b < c; ++b) {
            var e = this.ya(b);
            0 <= e.Ef(a) && (this.g = !1, e.Fe(a), this.g = !0)
        }
    };
    d.Ia = function(a) {
        if (!this.Yu(a)) return !1;
        var b = this.ya(a);
        return this.g && b && b.Ia(this.Tv()) ? !0 : Ke.u.Ia.call(this, a)
    };
    d.Tv = function() {
        return this.Db() ? this.Db().ra() : -1
    };
    d.pS = function(a, b) {
        var c = this.ya(a);
        return c ? c.Ia(b) : !1
    };
    d.rO = function(a, b) {
        a == this.ra() ? this.Wt() : -1 != b && (this.g = !1, this.Ia(a), this.g = !0)
    };
    d.Wt = function() {
        this.B("selection:changed")
    };
    d.FG = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.i[a]();
        a = this.i.length = 0;
        for (b = this.S(); a < b; ++a) {
            var c = this.ya(a);
            this.i.push(c.C("selectedIndex:changed", y(this.rO, this, a)))
        }
    };
    d.lu = function() {
        for (var a = 0, b = this.S(); a < b; ++a) {
            var c = this.ya(a),
                e = a == this.ra();
            c.eS(e && this.dS());
            e || c.Ia(-1)
        }
    };
    d.ck = function(a) {
        a = this.ya(a);
        return !!a && a.ck(this.Tv())
    };

    function $i() {
        M.call(this);
        this.flagData = new Ke;
        this.flagData.Dl([new N("[[Sexual Content|GTGC4NgMTyty-lg7bvKq5g]]", "flag-normal"), new N("[[Child Abuse|IngFQG4SEoOLkyKZJEPR6g]]", "flag-normal"), new N("[[Violent or Repulsive Content|qhVb-TasMDalcVlh0-bVNQ]]", "flag-normal"), new N("[[Spam|Pnw-OErhkCrqYT5klcLesw]]", "flag-normal"), new N("[[Hateful or Abusive Content|VlY1sRyrA4TwmawjC86xFw]]", "flag-normal"), new N("[[Infringes My Rights|GwQ2vMHBH9Ls3VHHIixT-Q]]", "flag-rights"), new N("[[Harmful Dangerous Acts|rCIBQRDFyfIBja9x497u6A]]",
            "flag-normal")], 2)
    }
    B($i, M);
    $i.prototype.ea = function() {
        $i.u.ea.call(this);
        this.C("button-enter", y(this.g, this))
    };
    $i.prototype.g = function(a) {
        switch (a.detail.type) {
            case "flag-normal":
                this.X("request-flag-video-dialog", {
                    xb: this.model.xb,
                    Sb: this.model.Sb
                });
                L(a);
                break;
            case "flag-rights":
                this.X("request-flag-claim-dialog", {
                    xb: this.model.xb,
                    Sb: this.model.Sb
                }), L(a)
        }
    };

    function aj(a, b, c) {
        M.call(this);
        this.j = a;
        this.k = c;
        this.activationCode = b.T("[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]");
        this.g = q;
        this.i = 0
    }
    B(aj, M);
    d = aj.prototype;
    d.ready = function() {
        this.Vw()
    };
    d.M = function() {
        this.j.$C();
        this.k.clearTimeout(this.i);
        this.g();
        this.g = q;
        aj.u.M.call(this)
    };
    d.Vw = function() {
        this.g = this.j.cI(y(this.aI, this), y(this.bI, this), y(this.dI, this))
    };
    d.bI = function() {
        this.X("dialog:complete");
        this.X("request-close-dialog")
    };
    d.aI = function(a, b) {
        this.activationCode = a;
        this.H();
        this.i = this.k.setTimeout(y(this.Vw, this), 1E3 * b)
    };
    d.dI = function() {
        this.Ha(this.D.querySelector(".connection-steps"), !1);
        this.Ha(this.D.querySelector(".connection-error"), !0)
    };
    aj.inject = ["authService", "localeService", "timeService"];

    function bj(a) {
        a && (this.id = a.id || a.name, this.name = a.name, this.g = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.i = a.userAvatarUri || "", this.theme = a.theme || "u")
    }
    bj.prototype.id = "";
    bj.prototype.name = "";
    bj.prototype.g = "";
    bj.prototype.type = "REMOTE_CONTROL";
    bj.prototype.username = "";
    bj.prototype.i = "";
    bj.prototype.h = !1;
    bj.prototype.theme = "u";
    bj.prototype.gx = function() {
        return {
            id: this.id,
            name: this.name,
            app: this.g,
            type: this.type,
            user: this.username,
            userAvatarUri: this.i,
            theme: this.theme
        }
    };
    bj.prototype.j = function(a) {
        return a ? this.id == a.id : !1
    };

    function cj(a) {
        var b = a.name || "";
        a.username && (b = b + " (" + a.username + ")");
        this.displayString = b;
        var b = a.h ? "connected" : "disconnected",
            c = "mdx-unknown ";
        "LOUNGE_SCREEN" == a.type ? c = "mdx-screen " : a.g && (c = 0 < a.g.search(/tablet|ipad/g) ? "mdx-tablet " : "mdx-mobile ");
        this.deviceClass = c + b
    };

    function dj(a, b, c, e) {
        this.name = "pair";
        M.call(this);
        this.i = b;
        this.o = a;
        this.O = e;
        this.G = this.g = 0;
        this.W = !0;
        this.context = "pair";
        this.showDialUpsell = !1;
        this.displayPairingCode = this.I = c.T("[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]");
        this.j = q;
        this.codeImageUrl = "";
        this.J = this.A = this.F = this.w = null;
        this.connectedDevices = new ze;
        this.k = !1;
        this.K(this.i.Yh(), "items:changed", y(this.rq, this));
        this.canBeFocusLeaf = !0
    }
    B(dj, M);
    d = dj.prototype;
    d.ea = function() {
        dj.u.ea.call(this);
        this.F = this.D.querySelector(".dial-upsell");
        this.A = this.D.querySelector(".connection-steps");
        this.J = this.D.querySelector(".qr-code-wrapper");
        this.w = this.D.querySelector(".connected-list")
    };
    d.ready = function() {
        dj.u.ready.call(this);
        this.rq()
    };
    d.xa = function() {
        this.rn(!1);
        dj.u.xa.call(this)
    };
    d.wa = function() {
        dj.u.wa.call(this);
        this.rn(!0)
    };
    d.rn = function(a) {
        this.k !== a && ((this.k = a) ? (this.G = 0, this.i.Vk(y(this.Zq, this))) : 0 != this.g && (this.o.clearTimeout(this.g), this.g = 0))
    };
    d.H = function(a) {
        dj.u.H.call(this, a);
        this.Ha(this.F, this.showDialUpsell);
        this.Ha(this.A, !this.showDialUpsell);
        this.Ha(this.J, !this.showDialUpsell)
    };
    d.EC = function(a) {
        return a.match(/.../g).join(" ")
    };
    d.Zq = function() {
        this.displayPairingCode = this.I;
        this.codeImageUrl = "";
        this.g && (this.o.clearTimeout(this.g), this.g = 0);
        if (4 < ++this.G) this.X("request-close-dialog");
        else if (!this.showDialUpsell) {
            var a = this.context;
            0 < this.i.ug().S() && (a += "-ytr");
            this.g = this.o.setTimeout(y(this.Zq, this), 3E5);
            this.j = this.i.FC(a, y(function(a) {
                a && (this.displayPairingCode = this.EC(a), this.codeImageUrl = this.O.g("https://m.youtube.com/pair?pairingCode=" + a), this.H())
            }, this))
        }
    };
    d.rq = function() {
        var a = this.i.Yh().Fa();
        this.Ha(this.w, 0 < a.length);
        this.connectedDevices.clear();
        for (var b = 0, c = a.length; b < c; ++b) this.connectedDevices.push(new cj(a[b]));
        this.H()
    };
    d.M = function() {
        this.j();
        this.j = q;
        dj.u.M.call(this)
    };
    dj.inject = ["timeService", "remoteService", "localeService", "qrCodeService"];

    function ej(a) {
        M.call(this);
        this.g = a;
        this.model = null;
        this.localizedErrorMessage = ""
    }
    B(ej, M);
    ej.prototype.Y = function(a) {
        ej.u.Y.call(this, a);
        this.model && (this.localizedErrorMessage = this.g.T(this.model.hc))
    };
    ej.inject = ["localeService"];

    function fj(a) {
        M.call(this);
        this.g = a;
        this.model = null;
        this.imageUrl = this.displayUrl = ""
    }
    B(fj, M);
    fj.prototype.Y = function(a) {
        fj.u.Y.call(this, a);
        this.displayUrl = this.model.baseUrl;
        this.imageUrl = this.g.g(this.model.qrCodeUrl || this.model.baseUrl)
    };
    fj.inject = ["qrCodeService"];

    function gj(a) {
        M.call(this);
        this.i = a;
        this.devices = new ze
    }
    B(gj, M);
    gj.prototype.ready = function() {
        this.g()
    };
    gj.prototype.g = function() {
        for (var a = this.i.ug().Fa(), b = [], c = 0, e = a.length; c < e; ++c) b.push(new cj(a[c]));
        this.devices.ma(b)
    };
    gj.inject = ["remoteService"];

    function hj(a, b) {
        M.call(this);
        this.j = a;
        this.k = b;
        this.g = this.i = null;
        this.canBeFocusLeaf = !0
    }
    B(hj, M);
    d = hj.prototype;
    d.ea = function() {
        hj.u.ea.call(this);
        this.C("keydown", y(this.oF, this));
        this.i = this.D.querySelector(".handle");
        this.g = this.D.querySelector(".scrolling-text")
    };
    d.Y = function(a) {
        hj.u.Y.call(this, a);
        if (a = this.model.contentUrl) {
            this.g.innerHTML = "";
            var b;
            try {
                b = this.k.get(a)
            } catch (c) {
                this.j.get(a, null, y(this.gt, this))
            }
            b && this.gt(b())
        }
    };
    d.gt = function(a) {
        "string" == typeof a ? this.g.innerHTML = a : this.g.appendChild(a)
    };
    d.oF = function(a) {
        switch (a.keyCode) {
            case 40:
                this.Cz(1);
                break;
            case 38:
                this.Cz(-1)
        }
    };
    d.Cz = function(a) {
        this.nV(a);
        this.mV()
    };
    d.nV = function(a) {
        var b = Math.min(this.g.scrollHeight / 100, .5 * this.g.offsetHeight);
        this.g.scrollTop += a * b
    };
    d.mV = function() {
        var a = this.g.scrollHeight - this.g.offsetHeight;
        this.i.style.top = Math.floor(.01 * (this.D.offsetHeight - this.i.offsetHeight) * (0 == a ? 0 : 100 * this.g.scrollTop / a)) + "px"
    };
    hj.inject = ["ytHttp", "injector"];

    function ij(a) {
        this.imageUrl = a + "/img_guide.gif";
        M.call(this)
    }
    B(ij, M);
    ij.inject = ["imagePath"];

    function jj(a) {
        M.call(this);
        this.g = a;
        this.model = null;
        this.message = ""
    }
    B(jj, M);
    jj.prototype.Y = function(a) {
        jj.u.Y.call(this, a);
        this.model && (this.message = this.g.T(this.model.message))
    };
    jj.inject = ["localeService"];

    function kj(a, b, c, e) {
        M.call(this);
        this.k = a;
        this.j = b;
        this.w = c;
        this.o = e;
        this.advertiser = this.title = this.advertiserAvatar = this.remainingDuration = "";
        this.i = this.g = null;
        this.ga();
        this.K(this.k, "isPlayingAd:changed", y(this.pC, this));
        this.K(this.o, "currentAd:changed", y(this.oC, this))
    }
    B(kj, M);
    d = kj.prototype;
    d.H = function(a) {
        this.Ha(this.i, !!this.title);
        this.Ha(this.g, !this.title);
        kj.u.H.call(this, a)
    };
    d.ea = function() {
        this.i = this.D.querySelector(".youtube-hosted");
        this.g = this.D.querySelector(".third-party");
        kj.u.ea.call(this)
    };
    d.oC = function(a) {
        this.advertiser = a && a.channel ? a.channel.displayName : "";
        this.advertiserAvatar = a && a.channel ? a.channel.imageUrl : "";
        this.title = a ? a.title : "";
        this.H(!0)
    };
    d.pC = function(a) {
        a ? (this.K(this.j, "timeLeft:changed", y(this.Wx, this)), this.Wx(this.j.timeLeft)) : (this.Td(this.j, "timeLeft:changed"), this.ga())
    };
    d.Wx = function(a) {
        !this.k.isPlayingAd || 0 >= a || (this.remainingDuration = this.w.ef(a), this.isHidden ? this.Ba() : this.H())
    };
    d.M = function() {
        this.g = this.i = null;
        kj.u.M.call(this)
    };
    kj.inject = ["playerFacade", "progressModel", "localeService", "adModel"];

    function lj() {
        I.call(this);
        this.rows = [];
        this.Nb = 0
    }
    B(lj, I);
    d = lj.prototype;
    d.Ag = function() {
        this.B("rows:changed")
    };
    d.Dc = function() {
        return this.rows[this.Nb]
    };
    d.Hy = function(a) {
        return this.rows[a]
    };
    d.sO = function() {
        return this.rows
    };
    d.S = function() {
        return this.rows.length
    };
    d.wQ = function(a) {
        this.rows.push(a);
        this.Ag()
    };
    d.clear = function() {
        this.rows.length = 0;
        this.Ag()
    };
    d.xQ = function(a) {
        return this.rows.indexOf(a)
    };
    d.vw = function(a) {
        for (var b = this.S(), c = 0; c < b; ++c)
            if (a === this.rows[c].model.title) return c;
        return -1
    };

    function mj(a, b, c, e, f, g, k, m) {
        lj.call(this);
        this.A = b;
        this.F = g;
        this.p = a;
        this.U = f;
        this.w = e;
        this.L = c;
        this.k = k;
        this.o = m;
        this.g = this.h = this.i = null;
        this.j = this.l = !1;
        c.C("search-history-added", y(this.eq, this))
    }
    B(mj, lj);
    d = mj.prototype;
    d.load = function(a) {
        this.p.tick("start_browse", "ar_rq");
        this.o.load({}, y(this.zQ, this, a || q))
    };
    d.zQ = function(a, b) {
        this.GR(b);
        this.p.tick("start_browse", "ar_r");
        a()
    };
    d.GR = function(a) {
        var b = this.rows[this.Nb];
        this.rows = a;
        this.h || (this.h = this.w.k());
        this.rows.push(this.h);
        a = this.A.initChannelId;
        !this.i && a && (this.i = new zi(this.F, "", this.k.Pd(a), a), this.i.OB(this.k));
        this.i && this.rows.unshift(this.i);
        this.g || (this.g = this.U.PB());
        this.g.clear();
        this.rows.push(this.g);
        void 0 !== b && (this.Nb = this.MB(b));
        this.Ag()
    };
    d.MB = function(a) {
        for (var b = 0, c = this.rows.length; b < c; ++b)
            if (a.Am(this.rows[b])) return b;
        return -1
    };
    d.cy = function() {
        this.g && this.g.load()
    };
    d.UQ = function() {
        this.L.clear();
        this.eq()
    };
    d.eq = function() {
        this.h && (this.h.load(), this.h.gf(0))
    };
    mj.inject = "csiService environmentModel searchHistoryService searchRowService settingsRowService userUploadsService ytThumbnails browseGuideService".split(" ");

    function nj(a, b, c) {
        lj.call(this);
        this.j = a;
        this.g = b;
        this.l = c;
        this.h = !1
    }
    B(nj, lj);
    nj.prototype.load = function() {
        if (this.g.currentVideo) {
            this.clear();
            var a = this.g.lc(),
                b = a.model.title,
                c = this.g.vg(),
                b = new Bi(this.j, b, "", this.g.currentVideo.videoId);
            b.$ = "postPlayTile";
            ("remoteQueueService" != a.model.kb || a.activeIndex < a.S() - 1) && b.model.ia.C("items:changed", y(function() {
                this.h = !0
            }, this));
            c && b.l(c);
            this.rows.push(b)
        }
    };
    nj.prototype.i = function() {
        var a = this.Dc();
        return !!a && !!a.h && 0 < a.h.length
    };
    nj.inject = ["relatedVideosService", "watchModel", "environmentModel"];

    function oj() {
        I.call(this);
        this.g = {}
    }
    B(oj, I);
    d = oj.prototype;
    d.xi = function(a, b) {
        this.g[a] = !!b
    };
    d.jB = function(a) {
        delete this.g[a]
    };
    d.clear = function() {
        this.g = {}
    };
    d.XK = function() {
        for (var a in this.g)
            if (!this.g[a]) return !0;
        return !1
    };
    d.py = function(a) {
        return void 0 !== this.g[a]
    };

    function pj() {
        this.g = new Hc(25, !0)
    }
    pj.prototype.load = function(a, b) {
        var c = new yi;
        c.ia.push(this.g.Xa());
        b && b(c);
        return c
    };
    pj.prototype.h = function(a) {
        "RQ" == a.Mb || this.g.get(a.videoId) || this.g.ah(a.videoId, a)
    };
    pj.prototype.S = function() {
        return this.g.Da()
    };
    pj.prototype.clear = function() {
        this.g.clear()
    };

    function qj(a, b, c, e, f, g) {
        lj.call(this);
        this.l = a;
        this.k = b;
        this.o = c;
        this.h = e;
        this.j = f;
        this.currentVideo = null;
        this.i = this.FA();
        this.p = g;
        this.g = null
    }
    B(qj, lj);
    d = qj.prototype;
    d.m7 = function() {
        var a = this.Dc();
        return a ? a.at() : null
    };
    d.FA = function() {
        var a = new ih(this.h, "[[Current Watch History|Displays previously watched videos.]]", "icon-hourglass");
        a.model.Mb = "HL";
        return a
    };
    d.wg = function(a, b, c, e, f) {
        this.currentVideo = a;
        this.j.update(this.currentVideo, c, e, f);
        c = this.nH(a);
        e = null;
        a && a.channel && a.channel.userId && (e = this.oH(a.channel));
        b && (b.Na !== this.l || b instanceof Bi) || (e ? (e.l(a), b = e) : b = c);
        a = [];
        this.rows.length = 1;
        b !== this.lc() && (this.rows[0] = b, b.load(q));
        this.currentVideo && this.pH(this.currentVideo.videoId);
        b !== c && a.push(c);
        e && a.push(e);
        0 < this.h.S() && a.push(this.xm());
        this.mH(a, this.rows);
        this.lq([c, this.i]);
        this.Ag();
        return b
    };
    d.vQ = function() {
        var a = this.lc();
        this.currentVideo && a && this.h.h(this.currentVideo, a)
    };
    d.fo = function() {
        this.g = this.currentVideo;
        this.currentVideo = null
    };
    d.WC = function() {
        this.g && (this.currentVideo = this.g)
    };
    d.TC = function() {
        this.g = null
    };
    d.VC = function() {
        return !!this.g
    };
    d.fH = function() {
        this.h.clear()
    };
    d.mH = function(a, b) {
        for (var c, e = a.length, f = 0; f < e; ++f)(c = a[f]) && (b.some(function(a) {
            return c.model.title === a.model.title
        }) || b.push(c))
    };
    d.oH = function(a) {
        return new Bi(this.k, "[[Uploads for channel:|sWqBGwb2WdBVvjLS_6hayw]] " + a.displayName, a.imageUrl, a.userId)
    };
    d.nH = function(a) {
        return new zi(this.l, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", "icon-related", a ? a.videoId : "")
    };
    d.p4 = function() {
        return this.j
    };
    d.pH = function(a) {
        var b = this.lc();
        a = b.Ko("videoId", a);
        b.gf(Math.max(a, 0))
    };
    d.xm = function() {
        return this.i
    };
    d.xD = function() {
        var a = this.lc();
        return a ? a.model : null
    };
    d.lc = function() {
        return this.rows[0]
    };
    d.vg = function() {
        var a = this.lc();
        if (!a) return null;
        var b = -1;
        this.currentVideo && (b = a.Ko("videoId", this.currentVideo.videoId)); - 1 == b && (b = a.activeIndex);
        return b < a.S() - 1 ? this.Mo(a, b + 1) : this.p.loopRows ? this.Mo(a, 0) : null
    };
    d.ql = function() {
        var a = this.lc();
        if (!a) return null;
        var b = -1;
        this.currentVideo && (b = a.Ko("videoId", this.currentVideo.videoId)); - 1 == b && (b = a.activeIndex);
        return 0 < b ? this.Mo(a, b - 1) : null
    };
    d.Mo = function(a, b) {
        var c = a.ya(b);
        return c instanceof ue ? c : null
    };
    d.next = function(a) {
        var b = this.vg();
        if (b) {
            var c = this.lc();
            this.wg(b, c, 0, a);
            c.jk(1) && c.load(q);
            return this.currentVideo.videoId
        }
        return ""
    };
    d.UR = function() {
        var a = this.ql();
        if (a) {
            var b = this.lc();
            this.wg(a, b);
            b.jk(-1) && b.load(q);
            return this.currentVideo.videoId
        }
        return ""
    };
    d.lq = function(a) {
        (a || [this.xm()]).forEach(function(a) {
            a.gf(0)
        });
        this.Nb = 0
    };
    qj.inject = "relatedVideosService userUploadsService vevoPlaylistService watchHistoryModel playerVariablesModel environmentModel".split(" ");

    function rj(a) {
        this.V = a;
        if (a.requestAnimationFrame && (a.cancelAnimationFrame || a.cancelRequestAnimationFrame)) a.cancelAnimationFrame = a.cancelAnimationFrame || a.cancelRequestAnimationFrame;
        else {
            for (var b = ["webkit", "moz", "o", "ms"], c = 0; c < b.length; ++c) {
                var e = b[c],
                    f = e + "RequestAnimationFrame",
                    g = e + "CancelAnimationFrame",
                    e = e + "CancelRequestAnimationFrame";
                a[f] && (a[g] || a[e]) && (a.requestAnimationFrame = a[f], a.cancelAnimationFrame = a[g] || a[e])
            }
            a.requestAnimationFrame && a.cancelAnimationFrame || (a.requestAnimationFrame =
                function(b) {
                    return a.setTimeout(function() {
                        b((new Date).getTime())
                    }, 16)
                }, a.cancelAnimationFrame = a.clearTimeout)
        }
    }
    rj.prototype.g = function(a) {
        return this.V.requestAnimationFrame(a)
    };
    rj.prototype.h = function(a) {
        this.V.cancelAnimationFrame(a)
    };
    rj.inject = ["window"];

    function sj(a, b, c) {
        c = c || h;
        var e = c.onerror,
            f = !!b;
        Sc && !$c("535.3") && (f = !f);
        c.onerror = function(b, c, m, n, r) {
            e && e(b, c, m, n, r);
            a({
                message: b,
                fileName: c,
                iV: m,
                aP: n,
                error: r
            });
            return f
        }
    }

    function tj(a) {
        var b = p("window.location.href");
        if (v(a)) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c, e, f = !1;
        try {
            c = a.lineNumber || a.iV || "Not available"
        } catch (g) {
            c = "Not available", f = !0
        }
        try {
            e = a.fileName || a.filename || a.sourceURL || h.$googDebugFname || b
        } catch (k) {
            e = "Not available", f = !0
        }
        return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
            message: a.message || "Not available",
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: e,
            stack: a.stack ||
                "Not available"
        }
    };

    function uj(a, b) {
        this.name = a;
        this.value = b
    }
    uj.prototype.toString = function() {
        return this.name
    };
    new uj("OFF", Infinity);
    new uj("SHOUT", 1200);
    new uj("SEVERE", 1E3);
    new uj("WARNING", 900);
    new uj("INFO", 800);
    new uj("CONFIG", 700);
    new uj("FINE", 500);
    new uj("FINER", 400);
    new uj("FINEST", 300);
    new uj("ALL", 0);

    function vj() {};

    function wj(a, b) {
        Bf.call(this);
        this.j = l(a) ? a : !0;
        this.g = b || xj;
        this.i = this.g(this.ph)
    }
    B(wj, Bf);
    d = wj.prototype;
    d.vc = null;
    d.nh = null;
    d.oh = void 0;
    d.rm = !1;
    d.ph = 0;
    d.uj = null;
    d.l5 = null;

    function xj(a) {
        a = 1E3 * Math.pow(2, a);
        return Math.min(a, 6E4)
    }
    d.open = function(a, b) {
        this.Wj();
        this.Vy();
        this.nh = a;
        this.vc = (this.oh = b) ? new WebSocket(this.nh, this.oh) : new WebSocket(this.nh);
        this.vc.onopen = y(this.sT, this);
        this.vc.onclose = y(this.pT, this);
        this.vc.onmessage = y(this.rT, this);
        this.vc.onerror = y(this.qT, this)
    };
    d.close = function() {
        this.Vy();
        this.vc && (this.rm = !0, this.vc.close(), this.vc = null)
    };
    d.send = function(a) {
        this.Wj();
        this.vc.send(a)
    };
    d.Wj = function() {
        return !!this.vc && 1 == this.vc.readyState
    };
    d.sT = function() {
        this.dispatchEvent("d");
        this.ph = 0;
        this.i = this.g(this.ph)
    };
    d.pT = function() {
        this.dispatchEvent("a");
        this.vc = null;
        this.rm ? (this.nh = null, this.oh = void 0) : this.j && (this.uj = Tf(y(this.open, this, this.nh, this.oh), this.i, this), this.ph++, this.i = this.g(this.ph));
        this.rm = !1
    };
    d.rT = function(a) {
        this.dispatchEvent(new yj(a.data))
    };
    d.qT = function(a) {
        this.dispatchEvent(new zj(a.data))
    };
    d.Vy = function() {
        null != this.uj && h.clearTimeout(this.uj);
        this.uj = null
    };
    d.M = function() {
        wj.u.M.call(this);
        this.close()
    };

    function yj(a) {
        S.call(this, "c");
        this.message = a
    }
    B(yj, S);

    function zj(a) {
        S.call(this, "b");
        this.data = a
    }
    B(zj, S);
    var Aj = window.yt && window.yt.config_ || {};
    ba("yt.config_", Aj, void 0);
    ba("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    ba("yt.msgs_", window.yt && window.yt.msgs_ || {}, void 0);

    function Bj(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            Aj[c] = b[1]
        } else
            for (c in b = b[0], b) Aj[c] = b[c]
    }

    function Cj(a, b) {
        return a in Aj ? Aj[a] : b
    }

    function Dj(a, b) {
        w(a) && (a = Ej(a));
        return window.setTimeout(a, b)
    }

    function Ej(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                var c = b,
                    e = p("yt.www.errors.log");
                e ? e(c, void 0) : (e = Cj("ERRORS") || [], e.push([c, void 0]), Bj("ERRORS", e));
                throw b;
            }
        } : a
    };

    function Fj(a, b) {
        F.call(this);
        this.J = a;
        this.i = this.va = null;
        this.k = "";
        var c = Math.pow(2, 30);
        this.O = Math.floor(c * Math.random() + c);
        this.h = this.j = this.l = this.p = null;
        this.L = [];
        this.A = NaN;
        this.o = {};
        this.w = {};
        this.F = null;
        this.W = 0;
        this.Z = b || wj;
        this.na = this.I = 0;
        this.G = NaN;
        this.U = [];
        this.g = {
            level: 1,
            muted: !1
        }
    }
    B(Fj, F);
    d = Fj.prototype;
    d.Wz = function(a) {
        this.i = a;
        this.o[1] = cast.receiver.media.PlayerState.PLAYING;
        this.o[2] = cast.receiver.media.PlayerState.PAUSED;
        this.o[3] = cast.receiver.media.PlayerState.BUFFERING;
        this.w[0] = cast.receiver.media.IdleReason.FINISHED;
        this.w[-1E3] = cast.receiver.media.IdleReason.ERROR;
        this.W = cast.receiver.media.Command.PAUSE | cast.receiver.media.Command.SEEK;
        this.p = cast.receiver.CastReceiverManager.getInstance();
        if (a = p("cast.mdx_state")) this.j = a.mBus, this.l = a.ytBus;
        else {
            var b = function(a, b) {
                var f = b.replace(/"currentTime":(\d+),(\d+)/,
                    '"currentTime":$1.$2');
                return a(f)
            };
            this.j = this.p.getCastMessageBus(cast.receiver.media.MEDIA_NAMESPACE, cast.receiver.CastMessageBus.MessageType.JSON);
            this.j.deserializeMessage = ma(b, y(this.j.deserializeMessage, this.j));
            this.l = this.p.getCastMessageBus("urn:x-cast:com.google.youtube.mdx", cast.receiver.CastMessageBus.MessageType.JSON);
            this.l.deserializeMessage = ma(b, y(this.l.deserializeMessage, this.l))
        }
        this.p.onReady = y(this.gv, this);
        this.p.onSenderConnected = y(this.QH, this);
        this.p.onSystemVolumeChanged =
            y(this.hv, this);
        this.j.onMessage = y(this.fv, this);
        this.l.onMessage = y(this.iv, this);
        a ? (a.volume && this.hv(a.volume), this.Bm() && this.gv(null), Na(a.ytBuffer, y(this.iv, this)), Na(a.mBuffer, this.fv, this), ba("cast.mdx_state", void 0, void 0)) : this.p.start();
        this.Nu()
    };
    d.Bm = function() {
        return this.p ? this.p.isSystemReady() : !1
    };
    d.$h = function(a) {
        this.k != a && (this.k = a, this.Bm() && (this.oy(), this.Uj()))
    };
    d.so = function(a) {
        this.F = a || null;
        this.Te(!0)
    };
    d.Io = function(a) {
        this.Te(!1, a)
    };
    d.setVolume = function(a) {
        a = db(Math.round(a) / 100, 0, 1);
        this.$v("SET_VOLUME", {
            level: a
        });
        if (this.g.level != a) {
            var b = {
                volume: Math.floor(100 * this.g.level),
                muted: this.g.muted
            };
            this.g.level = a;
            this.B("volumeData:changed", {
                volume: Math.floor(100 * this.g.level),
                muted: this.g.muted
            }, b)
        }
    };
    d.Me = function() {
        return Math.floor(100 * this.g.level)
    };
    d.Mf = function() {
        this.Bz(!0)
    };
    d.Ke = function() {
        this.Bz(!1)
    };
    d.isMuted = function() {
        return !!this.g.muted
    };
    d.M = function() {
        cc(this.l);
        cc(this.j);
        cc(this.h);
        Fj.u.M.call(this)
    };
    d.C = function(a, b) {
        return this.J.C(a, b)
    };
    d.B = function(a, b) {
        this.J.B.apply(this.J, Array.prototype.slice.call(arguments))
    };
    d.Bz = function(a) {
        this.$v("SET_MUTED", {
            muted: a
        });
        if (this.g.muted != a) {
            var b = {
                volume: Math.floor(100 * this.g.level),
                muted: this.g.muted
            };
            this.g.muted = a;
            this.B("volumeData:changed", {
                volume: Math.floor(100 * this.g.level),
                muted: this.g.muted
            }, b)
        }
    };
    d.Qo = function(a, b) {
        this.j && this.j.send(a, b)
    };
    d.wR = function(a) {
        this.j && this.j.broadcast(a)
    };
    d.dR = function(a, b, c) {
        this.l && (b = {
            type: b
        }, ha(c) && (b.data = c), this.l.send(a, b))
    };
    d.cR = function(a, b) {
        if (this.l) {
            var c = {
                type: a
            };
            ha(b) && (c.data = b);
            this.l.broadcast(c)
        }
    };
    d.oy = function() {
        this.p.setLegacyApplicationState("YouTube TV", this.DR())
    };
    d.gv = function() {
        this.k && (this.oy(), this.Uj());
        this.Te(!0)
    };
    d.QH = function(a) {
        a = a.data;
        this.k && this.Uj(a);
        this.Te(!0, void 0, a, 0)
    };
    d.hv = function(a) {
        a = a.data;
        if (this.g.level != a.level || this.g.muted != a.muted) {
            var b = {
                volume: Math.floor(100 * this.g.level),
                muted: this.g.muted
            };
            this.g = a;
            this.B("volumeData:changed", {
                volume: Math.floor(100 * this.g.level),
                muted: this.g.muted
            }, b)
        }
    };
    d.fv = function(a) {
        var b = a.senderId,
            c = a.data,
            e = c.type;
        a = c.requestId;
        if (ea(a) && a == Math.floor(a))
            if (void 0 !== c.mediaSessionId && c.mediaSessionId != this.O) this.yo(b, a, cast.receiver.media.ErrorType.INVALID_REQUEST, cast.receiver.media.ErrorReason.INVALID_MEDIA_SESSION_ID);
            else switch (T(c), e) {
                case "GET_STATUS":
                    this.Te(!0, void 0, b, a);
                    break;
                case "PLAY":
                    this.ak(b, a);
                    this.i.play();
                    break;
                case "PAUSE":
                    this.ak(b, a);
                    this.i.pause();
                    break;
                case "STOP":
                    this.ak(b, a);
                    this.i.stop();
                    break;
                case "SEEK":
                    e = c.currentTime;
                    c = c.resumeState;
                    c == cast.receiver.media.SeekResumeState.PLAYBACK_PAUSE && this.i.pause();
                    void 0 === e || null === e ? this.i.Cg(604800) : this.i.Cg(e);
                    c == cast.receiver.media.SeekResumeState.PLAYBACK_START && this.i.play();
                    this.ak(b, a);
                    break;
                case "LOAD":
                    this.yo(b, a, cast.receiver.media.ErrorType.INVALID_PLAYER_STATE);
                    break;
                default:
                    this.yo(b, a, cast.receiver.media.ErrorType.INVALID_REQUEST, cast.receiver.media.ErrorReason.INVALID_COMMAND)
            }
    };
    d.iv = function(a) {
        var b = a.senderId,
            c = a.data;
        a = c.type;
        c = c.data;
        T(c);
        switch (a) {
            case "flingVideo":
                this.F && 0 != this.i.Md() ? this.Te(!0, void 0, b, 0) : this.i.Kl(c.videoId, c.currentTime);
                break;
            case "getMdxSessionStatus":
                this.k && this.Uj(b)
        }
    };
    d.oO = function() {
        for (var a = this.I = 0, b = this.U.length; a < b; ++a) this.h.send(this.U[a]);
        this.U.length = 0
    };
    d.ix = function() {
        this.I++;
        2 < this.I || (this.G = Dj(y(this.Nu, this), 1E3))
    };
    d.nO = function() {};
    d.$v = function(a, b) {
        var c = b || {};
        c.cmd_id = this.na++;
        c.type = a;
        c = T(c);
        this.h && this.h.Wj() ? this.h.send(c) : this.U.push(c)
    };
    d.Nu = function() {
        window.clearTimeout(this.G);
        this.G = NaN;
        this.h ? this.h.Wj() && this.h.close() : (this.h = new this.Z(!1), of(this.h, "d", this.oO, !1, this), of(this.h, "a", this.ix, !1, this), of(this.h, "b", this.ix, !1, this), of(this.h, "c", this.nO, !1, this));
        this.h.open("ws://localhost:8008/system/control")
    };
    d.Uj = function(a) {
        l(a) ? this.dR(a, "mdxSessionStatus", {
            screenId: this.k
        }) : this.cR("mdxSessionStatus", {
            screenId: this.k
        })
    };
    d.yo = function(a, b, c, e) {
        b = {
            type: c,
            requestId: b
        };
        e && (b.reason = e);
        this.Qo(a, b)
    };
    d.Te = function(a, b, c, e) {
        if (this.Bm())
            if (a = this.xR(a, b), e && c) e = {
                type: "MEDIA_STATUS",
                requestId: e,
                status: [a]
            }, this.Qo(c, e);
            else {
                window.clearTimeout(this.A);
                this.A = NaN;
                c = 0;
                for (b = this.L.length; c < b; ++c) {
                    var f = this.L[c];
                    e = {
                        type: "MEDIA_STATUS",
                        requestId: f.requestId,
                        status: [a]
                    };
                    this.Qo(f.senderId, e)
                }
                this.L.length = 0;
                e = {
                    type: "MEDIA_STATUS",
                    status: [a]
                };
                this.wR(e)
            }
    };
    d.ak = function(a, b) {
        this.L.push({
            senderId: a,
            requestId: b
        });
        isNaN(this.A) && (this.A = Dj(y(this.Te, this, !1), 2E3))
    };
    d.xR = function(a, b) {
        var c = void 0 !== b ? b : this.i.Md(),
            e = cast.receiver.media.PlayerState.IDLE;
        this.F && c in this.o && (e = this.o[c]);
        var f = {
            mediaSessionId: this.O,
            playbackRate: 1,
            supportedMediaCommands: this.W,
            volume: this.g,
            playerState: e,
            customData: {
                playerState: c
            }
        };
        c in this.w && (f.idleReason = this.w[c]);
        e != cast.receiver.media.PlayerState.IDLE && (f.currentTime = this.i.me());
        a && (f.media = this.F); - 1E3 == c && (c = this.i.Al(), f.customData.errorReason = c.h);
        return f
    };
    d.DR = function() {
        var a = "<additionalData>";
        this.k && (a += "<screenId>" + this.k + "</screenId>");
        return a + "</additionalData>"
    };
    var Gj = p("yt.dom.getNextId_");
    if (!Gj) {
        Gj = function() {
            return ++Hj
        };
        ba("yt.dom.getNextId_", Gj, void 0);
        var Hj = 0
    };

    function Ij(a) {
        if (a = a || window.event) {
            for (var b in a) b in Jj || (this[b] = a[b]);
            this.CM = a.scale;
            this.BM = a.rotation;
            this.Nc = a;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            (b = a.relatedTarget) ? b = this.AM(b): "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" ==
                this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX =
                a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3);
            this.i = a.pageX;
            this.j = a.pageY
        }
    }
    d = Ij.prototype;
    d.AM = function(a) {
        try {
            return a.nodeName ? a : null
        } catch (b) {
            return null
        }
    };
    d.Mw = function() {
        if (document.body && document.documentElement) {
            var a = document.body.scrollTop + document.documentElement.scrollTop;
            this.i = this.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            this.j = this.clientY + a
        }
    };
    d.k4 = function() {
        l(this.i) || this.Mw();
        return this.i
    };
    d.l4 = function() {
        l(this.j) || this.Mw();
        return this.j
    };
    d.Nc = null;
    Ij.prototype.type = "";
    d = Ij.prototype;
    d.target = null;
    d.relatedTarget = null;
    d.currentTarget = null;
    d.data = null;
    d.source = null;
    Ij.prototype.state = null;
    d = Ij.prototype;
    d.keyCode = 0;
    d.charCode = 0;
    d.altKey = !1;
    d.ctrlKey = !1;
    d.shiftKey = !1;
    d.clientX = 0;
    d.clientY = 0;
    d.wheelDeltaX = 0;
    d.wheelDeltaY = 0;
    d.BM = 0;
    d.CM = 1;
    d.j7 = null;
    d.changedTouches = null;
    d.preventDefault = function() {
        this.Nc.returnValue = !1;
        this.Nc.preventDefault && this.Nc.preventDefault()
    };
    d.H5 = function() {
        return !1 === this.Nc.returnValue
    };
    d.stopPropagation = function() {
        this.Nc.cancelBubble = !0;
        this.Nc.stopPropagation && this.Nc.stopPropagation()
    };
    d.stopImmediatePropagation = function() {
        this.Nc.cancelBubble = !0;
        this.Nc.stopImmediatePropagation && this.Nc.stopImmediatePropagation()
    };
    d.w5 = function() {
        return this.altKey || this.ctrlKey || this.shiftKey
    };
    var Jj = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var Kj = p("yt.events.listeners_") || {};
    ba("yt.events.listeners_", Kj, void 0);
    var Lj = p("yt.events.counter_") || {
        count: 0
    };
    ba("yt.events.counter_", Lj, void 0);

    function Mj(a, b, c, e) {
        return uc(Kj, function(f) {
            return f[0] == a && f[1] == b && f[2] == c && f[4] == !!e
        })
    }

    function Nj(a, b, c, e) {
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        e = !!e;
        var f = Mj(a, b, c, e);
        if (f) return f;
        var f = ++Lj.count + "",
            g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document),
            k;
        k = g ? function(e) {
            e = new Ij(e);
            if (!Od(e.relatedTarget, function(b) {
                    return b == a
                }, !0)) return e.currentTarget = a, e.type = b, c.call(a, e)
        } : function(b) {
            b = new Ij(b);
            b.currentTarget = a;
            return c.call(a, b)
        };
        k = Ej(k);
        Kj[f] = [a, b, c, k, e];
        a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover",
            k, e) : "mouseleave" == b && g ? a.addEventListener("mouseout", k, e) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", k, e) : a.addEventListener(b, k, e) : a.attachEvent("on" + b, k);
        return f
    }

    function Oj(a) {
        a && ("string" == typeof a && (a = [a]), Na(a, function(a) {
            if (a in Kj) {
                var c = Kj[a],
                    e = c[0],
                    f = c[1],
                    g = c[3],
                    c = c[4];
                e.removeEventListener ? e.removeEventListener(f, g, c) : e.detachEvent && e.detachEvent("on" + f, g);
                delete Kj[a]
            }
        }))
    };

    function Pj() {
        F.call(this);
        this.g = new cast.receiver.Receiver("YouTube", ["ramp"]);
        this.h = new cast.receiver.ChannelHandler("ramp");
        this.jH()
    }
    B(Pj, F);
    d = Pj.prototype;
    d.jH = function() {
        this.h.addChannelFactory(this.g.createChannelFactory("ramp"))
    };
    d.JB = function() {
        this.g.start()
    };
    d.yd = function(a, b) {
        Nj(this.h, a, b)
    };
    d.FP = function() {
        return this.h.getChannels()
    };
    d.hO = function() {
        return this.g.getConnectionService().isConnected()
    };
    d.fx = function(a) {
        this.g.getConnectionService().setAppData(a)
    };
    d.M = function() {
        var a = this.h,
            b;
        for (b in Kj) Kj[b][0] == a && Oj(b);
        Pj.u.M.call(this)
    };
    Bc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));

    function Qj() {
        this.g = "";
        this.i = Rj
    }
    Qj.prototype.j = !0;
    var Rj = {};
    Qj.prototype.h = function() {
        return this.g
    };
    (new Qj).g = "";

    function Sj() {
        this.i = "";
        this.l = Tj;
        this.g = null
    }
    Sj.prototype.k = !0;
    Sj.prototype.p = function() {
        return this.g
    };
    Sj.prototype.j = !0;
    Sj.prototype.h = function() {
        return this.i
    };
    Bc("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    Bc("link", "script", "style");
    var Tj = {};
    new Sj;

    function Uj() {
        this.g = A()
    }
    var Vj = new Uj;
    Uj.prototype.h = function(a) {
        this.g = a
    };
    Uj.prototype.reset = function() {
        this.h(A())
    };
    Uj.prototype.get = function() {
        return this.g
    };

    function Wj(a) {
        this.h = a || "";
        this.g = Vj
    }
    d = Wj.prototype;
    d.X2 = !0;
    d.W6 = !0;
    d.Z6 = !0;
    d.Y6 = !0;
    d.X6 = !1;
    d.a7 = !1;
    d.Q6 = function(a) {
        this.g = a
    };
    d.E4 = function() {
        return this.g
    };
    d.v6 = function() {
        this.g.reset()
    };

    function Xj(a) {
        a = new Date(a.g());
        return Yj(a.getFullYear() - 2E3) + Yj(a.getMonth() + 1) + Yj(a.getDate()) + " " + Yj(a.getHours()) + ":" + Yj(a.getMinutes()) + ":" + Yj(a.getSeconds()) + "." + Yj(Math.floor(a.getMilliseconds() / 10))
    }

    function Yj(a) {
        return 10 > a ? "0" + a : String(a)
    }

    function Zj(a, b) {
        var c = (a.g() - b) / 1E3,
            e = c.toFixed(3),
            f = 0;
        if (1 > c) f = 2;
        else
            for (; 100 > c;) f++, c *= 10;
        for (; 0 < f--;) e = " " + e;
        return e
    }

    function ak(a) {
        Wj.call(this, a)
    }
    B(ak, Wj);
    ak.prototype.i = function(a) {
        var b = [];
        b.push(this.h, " ");
        b.push("[", Xj(a), "] ");
        b.push("[", Zj(a, this.g.get()), "s] ");
        b.push("[", a.h(), "] ");
        b.push(a.getMessage());
        b.push("\n");
        return b.join("")
    };

    function bk(a, b) {
        this.h = new Lh(a);
        this.g = b ? Kh : Jh
    }
    bk.prototype.i = function(a) {
        return this.h.i(a)
    };
    bk.prototype.parse = function(a) {
        return this.g(a)
    };

    function fk(a) {
        this.h = 0;
        this.i = a || 100;
        this.g = []
    }
    d = fk.prototype;
    d.add = function(a) {
        var b = this.g[this.h];
        this.g[this.h] = a;
        this.h = (this.h + 1) % this.i;
        return b
    };
    d.get = function(a) {
        a = this.yw(a);
        return this.g[a]
    };
    d.p5 = function(a, b) {
        a = this.yw(a);
        this.g[a] = b
    };
    d.Da = function() {
        return this.g.length
    };
    d.qb = function() {
        return 0 == this.g.length
    };
    d.clear = function() {
        this.h = this.g.length = 0
    };
    d.Xa = function() {
        return this.aU(this.Da())
    };
    d.aU = function(a) {
        var b = this.Da(),
            c = [];
        for (a = this.Da() - a; a < b; a++) c.push(this.get(a));
        return c
    };
    d.vb = function() {
        for (var a = [], b = this.Da(), c = 0; c < b; c++) a[c] = c;
        return a
    };
    d.o5 = function(a) {
        return a < this.Da()
    };
    d.Th = function(a) {
        for (var b = this.Da(), c = 0; c < b; c++)
            if (this.get(c) == a) return !0;
        return !1
    };
    d.T3 = function() {
        return 0 == this.Da() ? null : this.get(this.Da() - 1)
    };
    d.yw = function(a) {
        if (a >= this.g.length) throw Error("Out of bounds exception");
        return this.g.length < this.i ? a : (this.h + Number(a)) % this.i
    };

    function gk(a, b) {
        var c;
        a instanceof gk ? (this.ee = l(b) ? b : a.jK(), this.Oj(a.In()), this.Pj(a.Jn()), this.Ch(a.Qe()), this.Dh(a.Xf()), this.Of(a.Pb()), this.Eh(a.Qd().clone()), this.Nj(a.Hn())) : a && (c = Ah(String(a))) ? (this.ee = !!b, this.Oj(c[1] || "", !0), this.Pj(c[2] || "", !0), this.Ch(c[3] || "", !0), this.Dh(c[4]), this.Of(c[5] || "", !0), this.Eh(c[6] || "", !0), this.Nj(c[7] || "", !0)) : (this.ee = !!b, this.g = new hk(null, null, this.ee))
    }
    d = gk.prototype;
    d.hg = "";
    d.mp = "";
    d.ip = "";
    d.pk = null;
    d.kp = "";
    d.jp = "";
    d.tp = !1;
    d.ee = !1;
    d.toString = function() {
        var a = [],
            b = this.In();
        b && a.push(ik(b, jk, !0), ":");
        if (b = this.Qe()) {
            a.push("//");
            var c = this.Jn();
            c && a.push(ik(c, jk, !0), "@");
            a.push(kk(encodeURIComponent(String(b))));
            b = this.Xf();
            null != b && a.push(":", String(b))
        }
        if (b = this.Pb()) this.Rh() && "/" != b.charAt(0) && a.push("/"), a.push(ik(b, "/" == b.charAt(0) ? lk : mk, !0));
        (b = this.Ty()) && a.push("?", b);
        (b = this.Hn()) && a.push("#", ik(b, nk));
        return a.join("")
    };
    d.P4 = function(a) {
        var b = this.clone(),
            c = a.wS();
        c ? b.Oj(a.In()) : c = a.xS();
        c ? b.Pj(a.Jn()) : c = a.Rh();
        c ? b.Ch(a.Qe()) : c = a.Xo();
        var e = a.Pb();
        if (c) b.Dh(a.Xf());
        else if (c = a.Oy()) {
            if ("/" != e.charAt(0))
                if (this.Rh() && !this.Oy()) e = "/" + e;
                else {
                    var f = b.Pb().lastIndexOf("/"); - 1 != f && (e = b.Pb().substr(0, f + 1) + e)
                }
            f = e;
            if (".." == f || "." == f) e = "";
            else if (C(f, "./") || C(f, "/.")) {
                for (var e = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], k = 0; k < f.length;) {
                    var m = f[k++];
                    "." == m ? e && k == f.length && g.push("") : ".." == m ? ((1 < g.length || 1 == g.length && "" !=
                        g[0]) && g.pop(), e && k == f.length && g.push("")) : (g.push(m), e = !0)
                }
                e = g.join("/")
            } else e = f
        }
        c ? b.Of(e) : c = a.vS();
        c ? b.Eh(a.tS()) : c = a.uS();
        c && b.Nj(a.Hn());
        return b
    };
    d.clone = function() {
        return new gk(this)
    };
    d.In = function() {
        return this.hg
    };
    d.Oj = function(a, b) {
        this.Mc();
        if (this.hg = b ? ok(a, !0) : a) this.hg = this.hg.replace(/:$/, "");
        return this
    };
    d.wS = function() {
        return !!this.hg
    };
    d.Jn = function() {
        return this.mp
    };
    d.Pj = function(a, b) {
        this.Mc();
        this.mp = b ? ok(a) : a;
        return this
    };
    d.xS = function() {
        return !!this.mp
    };
    d.Qe = function() {
        return this.ip
    };
    d.Ch = function(a, b) {
        this.Mc();
        this.ip = b ? ok(a, !0) : a;
        return this
    };
    d.Rh = function() {
        return !!this.ip
    };
    d.Xf = function() {
        return this.pk
    };
    d.Dh = function(a) {
        this.Mc();
        if (a) {
            a = Number(a);
            if (isNaN(a) || 0 > a) throw Error("Bad port number " + a);
            this.pk = a
        } else this.pk = null;
        return this
    };
    d.Xo = function() {
        return null != this.pk
    };
    d.Pb = function() {
        return this.kp
    };
    d.Of = function(a, b) {
        this.Mc();
        this.kp = b ? ok(a, !0) : a;
        return this
    };
    d.Oy = function() {
        return !!this.kp
    };
    d.vS = function() {
        return "" !== this.g.toString()
    };
    d.Eh = function(a, b) {
        this.Mc();
        a instanceof hk ? (this.g = a, this.g.tw(this.ee)) : (b || (a = ik(a, pk)), this.g = new hk(a, null, this.ee));
        return this
    };
    d.R4 = function(a, b) {
        return this.Eh(a, b)
    };
    d.Ty = function() {
        return this.g.toString()
    };
    d.tS = function() {
        return this.g.wL()
    };
    d.Qd = function() {
        return this.g
    };
    d.O4 = function() {
        return this.Ty()
    };
    d.eb = function(a, b) {
        this.Mc();
        this.g.gw(a, b);
        return this
    };
    d.tf = function(a, b) {
        this.Mc();
        s(b) || (b = [String(b)]);
        this.g.mu(a, b);
        return this
    };
    d.m4 = function(a) {
        return this.g.Xa(a)
    };
    d.hb = function(a) {
        return this.g.get(a)
    };
    d.Hn = function() {
        return this.jp
    };
    d.Nj = function(a, b) {
        this.Mc();
        this.jp = b ? ok(a) : a;
        return this
    };
    d.uS = function() {
        return !!this.jp
    };
    d.x5 = function(a) {
        return (!this.Rh() && !a.Rh() || this.Qe() == a.Qe()) && (!this.Xo() && !a.Xo() || this.Xf() == a.Xf())
    };
    d.Wf = function() {
        this.Mc();
        this.eb("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ A()).toString(36));
        return this
    };
    d.s6 = function(a) {
        this.Mc();
        this.g.remove(a);
        return this
    };
    d.N6 = function(a) {
        this.tp = a;
        return this
    };
    d.T5 = function() {
        return this.tp
    };
    d.Mc = function() {
        if (this.tp) throw Error("Tried to modify a read-only Uri");
    };
    d.Q4 = function(a) {
        this.ee = a;
        this.g && this.g.tw(a);
        return this
    };
    d.jK = function() {
        return this.ee
    };

    function qk(a, b) {
        return a instanceof gk ? a.clone() : new gk(a, b)
    }

    function rk(a, b, c, e, f, g, k, m) {
        m = new gk(null, m);
        a && m.Oj(a);
        b && m.Pj(b);
        c && m.Ch(c);
        e && m.Dh(e);
        f && m.Of(f);
        g && m.Eh(g);
        k && m.Nj(k);
        return m
    }

    function ok(a, b) {
        return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
    }

    function ik(a, b, c) {
        return v(a) ? (a = encodeURI(a).replace(b, sk), c && (a = kk(a)), a) : null
    }

    function sk(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }

    function kk(a) {
        return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
    }
    var jk = /[#\/\?@]/g,
        mk = /[\#\?:]/g,
        lk = /[\#\?]/g,
        pk = /[\#\?@]/g,
        nk = /#/g;

    function hk(a, b, c) {
        this.g = a || null;
        this.h = !!c
    }
    d = hk.prototype;
    d.jd = function() {
        if (!this.Ta && (this.Ta = new Cc, this.Vb = 0, this.g))
            for (var a = this.g.split("&"), b = 0; b < a.length; b++) {
                var c = a[b].indexOf("="),
                    e = null,
                    f = null;
                0 <= c ? (e = a[b].substring(0, c), f = a[b].substring(c + 1)) : e = a[b];
                e = xa(e);
                e = this.Re(e);
                this.add(e, f ? xa(f) : "")
            }
    };
    d.Ta = null;
    d.Vb = null;
    d.Da = function() {
        this.jd();
        return this.Vb
    };
    d.add = function(a, b) {
        this.jd();
        this.$f();
        a = this.Re(a);
        var c = this.Ta.get(a);
        c || this.Ta.Ac(a, c = []);
        c.push(b);
        this.Vb++;
        return this
    };
    d.remove = function(a) {
        this.jd();
        a = this.Re(a);
        return this.Ta.Aj(a) ? (this.$f(), this.Vb -= this.Ta.get(a).length, this.Ta.remove(a)) : !1
    };
    d.clear = function() {
        this.$f();
        this.Ta = null;
        this.Vb = 0
    };
    d.qb = function() {
        this.jd();
        return 0 == this.Vb
    };
    d.Mn = function(a) {
        this.jd();
        a = this.Re(a);
        return this.Ta.Aj(a)
    };
    d.Th = function(a) {
        var b = this.Xa();
        return E(b, a)
    };
    d.vb = function() {
        this.jd();
        for (var a = this.Ta.Xa(), b = this.Ta.vb(), c = [], e = 0; e < b.length; e++)
            for (var f = a[e], g = 0; g < f.length; g++) c.push(b[e]);
        return c
    };
    d.Xa = function(a) {
        this.jd();
        var b = [];
        if (v(a)) this.Mn(a) && (b = Va(b, this.Ta.get(this.Re(a))));
        else {
            a = this.Ta.Xa();
            for (var c = 0; c < a.length; c++) b = Va(b, a[c])
        }
        return b
    };
    d.gw = function(a, b) {
        this.jd();
        this.$f();
        a = this.Re(a);
        this.Mn(a) && (this.Vb -= this.Ta.get(a).length);
        this.Ta.Ac(a, [b]);
        this.Vb++;
        return this
    };
    d.get = function(a, b) {
        var c = a ? this.Xa(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    d.mu = function(a, b) {
        this.remove(a);
        0 < b.length && (this.$f(), this.Ta.Ac(this.Re(a), Wa(b)), this.Vb += b.length)
    };
    d.toString = function() {
        if (this.g) return this.g;
        if (!this.Ta) return "";
        for (var a = [], b = this.Ta.vb(), c = 0; c < b.length; c++)
            for (var e = b[c], f = encodeURIComponent(String(e)), e = this.Xa(e), g = 0; g < e.length; g++) {
                var k = f;
                "" !== e[g] && (k += "=" + encodeURIComponent(String(e[g])));
                a.push(k)
            }
        return this.g = a.join("&")
    };
    d.wL = function() {
        return ok(this.toString())
    };
    d.$f = function() {
        this.g = null
    };
    d.j3 = function(a) {
        this.jd();
        this.Ta.forEach(function(b, c) {
            E(a, c) || this.remove(c)
        }, this);
        return this
    };
    d.clone = function() {
        var a = new hk;
        a.g = this.g;
        this.Ta && (a.Ta = this.Ta.clone(), a.Vb = this.Vb);
        return a
    };
    d.Re = function(a) {
        a = String(a);
        this.h && (a = a.toLowerCase());
        return a
    };
    d.tw = function(a) {
        a && !this.h && (this.jd(), this.$f(), this.Ta.forEach(function(a, c) {
            var e = c.toLowerCase();
            c != e && (this.remove(c), this.mu(e, a))
        }, this));
        this.h = a
    };
    d.N4 = function(a) {
        for (var b = 0; b < arguments.length; b++) jg(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };

    function tk(a) {
        F.call(this);
        this.h = a;
        this.g = {}
    }
    B(tk, F);
    var uk = [];
    d = tk.prototype;
    d.yd = function(a, b, c, e) {
        return this.Az(a, b, c, e)
    };
    d.a6 = function(a, b, c, e, f) {
        return this.Az(a, b, c, e, f)
    };
    d.Az = function(a, b, c, e, f) {
        s(b) || (b && (uk[0] = b.toString()), b = uk);
        for (var g = 0; g < b.length; g++) {
            var k = of(a, b[g], c || this.handleEvent, e || !1, f || this.h || this);
            if (!k) break;
            this.g[k.key] = k
        }
        return this
    };
    d.Z4 = function(a, b, c, e) {
        return this.an(a, b, c, e)
    };
    d.Z5 = function(a, b, c, e, f) {
        return this.an(a, b, c, e, f)
    };
    d.an = function(a, b, c, e, f) {
        if (s(b))
            for (var g = 0; g < b.length; g++) this.an(a, b[g], c, e, f);
        else {
            a = vf(a, b, c || this.handleEvent, e, f || this.h || this);
            if (!a) return this;
            this.g[a.key] = a
        }
        return this
    };
    d.b6 = function(a, b, c, e) {
        return this.zz(a, b, c, e)
    };
    d.c6 = function(a, b, c, e, f) {
        return this.zz(a, b, c, e, f)
    };
    d.zz = function(a, b, c, e, f) {
        b.yd(a, c, e, f || this.h || this, this);
        return this
    };
    d.Y4 = function() {
        var a = 0,
            b;
        for (b in this.g) Object.prototype.hasOwnProperty.call(this.g, b) && a++;
        return a
    };
    d.Ej = function(a, b, c, e, f) {
        if (s(b))
            for (var g = 0; g < b.length; g++) this.Ej(a, b[g], c, e, f);
        else c = c || this.handleEvent, f = f || this.h || this, c = pf(c), e = !!e, b = ef(a) ? a.YG(b, c, e, f) : a ? (a = rf(a)) ? a.$m(b, c, e, f) : null : null, b && (xf(b), delete this.g[b.key]);
        return this
    };
    d.h7 = function(a, b, c, e, f) {
        b.Ej(a, c, e, f || this.h || this, this);
        return this
    };
    d.Hx = function() {
        mc(this.g, xf);
        this.g = {}
    };
    d.M = function() {
        tk.u.M.call(this);
        this.Hx()
    };
    d.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function vk(a, b, c, e, f) {
        this.h = a;
        this.g = b;
        this.l = c;
        this.i = e;
        this.j = f || 1;
        this.Yb = 45E3;
        this.k = new tk(this);
        this.p = new Sf;
        this.p.pi(250)
    }
    d = vk.prototype;
    d.fl = null;
    d.qc = !1;
    d.Zf = null;
    d.Rn = null;
    d.Di = null;
    d.rh = null;
    d.ye = null;
    d.Qb = null;
    d.qf = null;
    d.gb = null;
    d.Mg = 0;
    d.Fc = null;
    d.nf = null;
    d.Bd = null;
    d.Mq = -1;
    d.xq = !0;
    d.De = !1;
    d.il = 0;
    d.si = null;

    function wk(a, b) {
        switch (a) {
            case 0:
                return "Non-200 return code (" + b + ")";
            case 1:
                return "XMLHTTP failure (no data)";
            case 2:
                return "HttpConnection timeout";
            default:
                return "Unknown error"
        }
    }
    var xk = {},
        yk = {};
    d = vk.prototype;
    d.bh = function(a) {
        this.fl = a
    };
    d.setTimeout = function(a) {
        this.Yb = a
    };
    d.HH = function(a) {
        this.il = a
    };
    d.bv = function(a, b, c) {
        this.rh = 1;
        this.ye = a.clone().Wf();
        this.qf = b;
        this.o = c;
        this.xy(null)
    };
    d.cm = function(a, b, c, e) {
        this.rh = 1;
        this.ye = a.clone().Wf();
        this.qf = null;
        this.o = b;
        e && (this.xq = !1);
        this.xy(c)
    };
    d.xy = function(a) {
        this.Di = A();
        this.mf();
        this.Qb = this.ye.clone();
        this.Qb.tf("t", this.j);
        this.Mg = 0;
        var b = this.h.Ei();
        this.gb = this.h.cl(b ? a : null);
        0 < this.il && (this.si = new Wf(y(this.Hq, this, this.gb), this.il));
        this.k.yd(this.gb, "readystatechange", this.xB);
        a = this.fl ? xc(this.fl) : {};
        this.qf ? (this.nf = "POST", a["Content-Type"] = "application/x-www-form-urlencoded", this.gb.send(this.Qb, this.nf, this.qf, a)) : (this.nf = "GET", this.xq && !Sc && (a.Connection = "close"), this.gb.send(this.Qb, this.nf, null, a));
        this.h.Ec(1);
        this.g.yB(this.nf,
            this.Qb, this.i, this.j, this.qf)
    };
    d.xB = function(a) {
        a = a.target;
        var b = this.si;
        b && 3 == a.Rd() ? (this.g.ba("Throttling readystatechange."), b.vv()) : this.Hq(a)
    };
    d.Hq = function(a) {
        try {
            a == this.gb ? this.mK() : this.g.Og("Called back with an unexpected xmlhttp")
        } catch (b) {
            this.g.ba("Failed call to OnXmlHttpReadyStateChanged_"), this.gb && this.gb.Ee() ? this.g.Yd(b, "ResponseText: " + this.gb.Ee()) : this.g.Yd(b, "No response text")
        } finally {}
    };
    d.mK = function() {
        var a = this.gb.Rd(),
            b = this.gb.zB(),
            c = this.gb.getStatus();
        if (K && !ad(10) || Sc && !$c("420+")) {
            if (4 > a) return
        } else if (3 > a || 3 == a && !Qc && !this.gb.Ee()) return;
        this.De || 4 != a || 7 == b || (8 == b || 0 >= c ? this.h.Ec(3) : this.h.Ec(2));
        this.oi();
        this.Mq = b = this.gb.getStatus();
        (c = this.gb.Ee()) || this.g.ba("No response text for uri " + this.Qb + " status " + b);
        this.qc = 200 == b;
        this.g.BB(this.nf, this.Qb, this.i, this.j, a, b);
        this.qc ? (4 == a && this.Ud(), this.o ? (this.Lq(a, c), Qc && this.qc && 3 == a && this.AB()) : (this.g.Rg(this.i, c, null),
            this.jl(c)), this.qc && !this.De && (4 == a ? this.h.Pg(this) : (this.qc = !1, this.mf()))) : (400 == b && 0 < c.indexOf("Unknown SID") ? (this.Bd = 3, V(13), this.g.Og("XMLHTTP Unknown SID (" + this.i + ")")) : (this.Bd = 0, V(14), this.g.Og("XMLHTTP Bad status " + b + " (" + this.i + ")")), this.Ud(), this.Ng())
    };
    d.Lq = function(a, b) {
        for (var c = !0; !this.De && this.Mg < b.length;) {
            var e = this.sH(b);
            if (e == yk) {
                4 == a && (this.Bd = 4, V(15), c = !1);
                this.g.Rg(this.i, null, "[Incomplete Response]");
                break
            } else if (e == xk) {
                this.Bd = 4;
                V(16);
                this.g.Rg(this.i, b, "[Invalid Chunk]");
                c = !1;
                break
            } else this.g.Rg(this.i, e, null), this.jl(e)
        }
        4 == a && 0 == b.length && (this.Bd = 1, V(17), c = !1);
        this.qc = this.qc && c;
        c || (this.g.Rg(this.i, b, "[Invalid Chunked Response]"), this.Ud(), this.Ng())
    };
    d.sQ = function() {
        var a = this.gb.Rd(),
            b = this.gb.Ee();
        this.Mg < b.length && (this.oi(), this.Lq(a, b), this.qc && 4 != a && this.mf())
    };
    d.AB = function() {
        this.k.yd(this.p, "tick", this.sQ);
        this.p.Wd()
    };
    d.Z2 = function() {
        this.qc && this.g.Ad("Received browser offline event even though request completed successfully");
        this.g.wK(this.Qb);
        this.Ud();
        this.Bd = 6;
        V(21);
        this.Ng()
    };
    d.sH = function(a) {
        var b = this.Mg,
            c = a.indexOf("\n", b);
        if (-1 == c) return yk;
        b = a.substring(b, c);
        b = Number(b);
        if (isNaN(b)) return xk;
        c += 1;
        if (c + b > a.length) return yk;
        a = a.substr(c, b);
        this.Mg = c + b;
        return a
    };
    d.qs = function(a, b) {
        this.rh = 3;
        this.ye = a.clone().Wf();
        this.mU(b)
    };
    d.mU = function(a) {
        this.Di = A();
        this.mf();
        var b = a ? window.location.hostname : "";
        this.Qb = this.ye.clone();
        this.Qb.eb("DOMAIN", b);
        this.Qb.eb("t", this.j);
        try {
            this.Fc = new ActiveXObject("htmlfile")
        } catch (c) {
            this.g.Ad("ActiveX blocked");
            this.Ud();
            this.Bd = 7;
            V(22);
            this.Ng();
            return
        }
        var e = "<html><body>";
        a && (e += '<script>document.domain="' + b + '"\x3c/script>');
        e += "</body></html>";
        this.Fc.open();
        this.Fc.write(e);
        this.Fc.close();
        this.Fc.parentWindow.m = y(this.cC, this);
        this.Fc.parentWindow.d = y(this.gr, this, !0);
        this.Fc.parentWindow.rpcClose =
            y(this.gr, this, !1);
        a = this.Fc.createElement("div");
        this.Fc.parentWindow.document.body.appendChild(a);
        a.innerHTML = '<iframe src="' + this.Qb + '"></iframe>';
        this.g.dC("GET", this.Qb, this.i, this.j);
        this.h.Ec(1)
    };
    d.cC = function(a) {
        zk(y(this.UV, this, a), 0)
    };
    d.UV = function(a) {
        this.De || (this.g.xH(this.i, a), this.oi(), this.jl(a), this.mf())
    };
    d.gr = function(a) {
        zk(y(this.TV, this, a), 0)
    };
    d.TV = function(a) {
        this.De || (this.g.OD(this.i, a), this.Ud(), this.qc = a, this.h.Pg(this), this.h.Ec(4))
    };
    d.rF = function(a) {
        this.rh = 2;
        this.ye = a.clone().Wf();
        this.lU()
    };
    d.lU = function() {
        (new Image).src = this.ye;
        this.Di = A();
        this.mf()
    };
    d.cancel = function() {
        this.De = !0;
        this.Ud()
    };
    d.mf = function() {
        this.Rn = A() + this.Yb;
        this.rw(this.Yb)
    };
    d.rw = function(a) {
        if (null != this.Zf) throw Error("WatchDog timer not null");
        this.Zf = zk(y(this.KU, this), a)
    };
    d.oi = function() {
        this.Zf && (h.clearTimeout(this.Zf), this.Zf = null)
    };
    d.KU = function() {
        this.Zf = null;
        var a = A();
        0 <= a - this.Rn ? this.VK() : (this.g.Og("WatchDog timer called too early"), this.rw(this.Rn - a))
    };
    d.VK = function() {
        this.qc && this.g.Ad("Received watchdog timeout even though request loaded successfully");
        this.g.DG(this.Qb);
        2 != this.rh && this.h.Ec(3);
        this.Ud();
        this.Bd = 2;
        V(18);
        this.Ng()
    };
    d.Ng = function() {
        this.h.Dx() || this.De || this.h.Pg(this)
    };
    d.Ud = function() {
        this.oi();
        cc(this.si);
        this.si = null;
        this.p.stop();
        this.k.Hx();
        if (this.gb) {
            var a = this.gb;
            this.gb = null;
            a.abort();
            a.nc()
        }
        this.Fc && (this.Fc = null)
    };
    d.vs = function() {
        return this.qc
    };
    d.hj = function() {
        return this.Bd
    };
    d.Fi = function() {
        return this.Mq
    };
    d.j5 = function() {
        return this.l
    };
    d.QI = function() {
        return this.i
    };
    d.Pl = function() {
        return this.qf
    };
    d.lm = function() {
        return this.Di
    };
    d.jl = function(a) {
        try {
            this.h.Bu(this, a), this.h.Ec(4)
        } catch (b) {
            this.g.Yd(b, "Error in httprequest callback")
        }
    };

    function Ak() {
        this.g = null
    }
    d = Ak.prototype;
    d.i5 = function() {
        return null
    };
    d.wK = function(a) {
        this.Ub("BROWSER_OFFLINE: " + a)
    };
    d.yB = function(a, b, c, e, f) {
        this.Ub("XMLHTTP REQ (" + c + ") [attempt " + e + "]: " + a + "\n" + b + "\n" + this.xU(f))
    };
    d.BB = function(a, b, c, e, f, g) {
        this.Ub("XMLHTTP RESP (" + c + ") [ attempt " + e + "]: " + a + "\n" + b + "\n" + f + " " + g)
    };
    d.Rg = function(a, b, c) {
        this.Ub("XMLHTTP TEXT (" + a + "): " + this.cz(b) + (c ? " " + c : ""))
    };
    d.dC = function(a, b, c, e) {
        this.Ub("TRIDENT REQ (" + c + ") [ attempt " + e + "]: " + a + "\n" + b)
    };
    d.xH = function(a, b) {
        this.Ub("TRIDENT TEXT (" + a + "): " + this.cz(b))
    };
    d.OD = function(a, b) {
        this.Ub("TRIDENT TEXT (" + a + "): " + b ? "success" : "failure")
    };
    d.DG = function(a) {
        this.Ub("TIMEOUT: " + a)
    };
    d.ba = function(a) {
        this.Ub(a)
    };
    d.Yd = function(a, b) {
        this.Ad((b || "Exception") + a)
    };
    d.Ub = function() {};
    d.Og = function() {};
    d.Ad = function() {};
    d.cz = function(a) {
        if (!a || "y2f%" == a) return a;
        try {
            var b = Kh(a);
            if (b)
                for (var c = 0; c < b.length; c++) s(b[c]) && this.WS(b[c]);
            return T(b)
        } catch (e) {
            return this.ba("Exception parsing expected JS array - probably was not JS"), a
        }
    };
    d.WS = function(a) {
        if (!(2 > a.length || (a = a[1], !s(a) || 1 > a.length))) {
            var b = a[0];
            if ("noop" != b && "stop" != b)
                for (b = 1; b < a.length; b++) a[b] = ""
        }
    };
    d.xU = function(a) {
        if (!a) return null;
        var b = "";
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var e = a[c].split("=");
            if (1 < e.length) var f = e[0],
                e = e[1],
                g = f.split("_"),
                b = 2 <= g.length && "type" == g[1] ? b + (f + "=" + e + "&") : b + (f + "=redacted&")
        }
        return b
    };

    function Bk(a, b, c, e, f) {
        (new Ak).ba("TestLoadImageWithRetries: " + f);
        if (0 == e) c(!1);
        else {
            var g = f || 0;
            e--;
            Ck(a, b, function(f) {
                f ? c(!0) : h.setTimeout(function() {
                    Bk(a, b, c, e, g)
                }, g)
            })
        }
    }

    function Ck(a, b, c) {
        var e = new Ak;
        e.ba("TestLoadImage: loading " + a);
        var f = new Image;
        f.onload = function() {
            try {
                e.ba("TestLoadImage: loaded"), Dk(f), c(!0)
            } catch (a) {
                e.Yd(a)
            }
        };
        f.onerror = function() {
            try {
                e.ba("TestLoadImage: error"), Dk(f), c(!1)
            } catch (a) {
                e.Yd(a)
            }
        };
        f.onabort = function() {
            try {
                e.ba("TestLoadImage: abort"), Dk(f), c(!1)
            } catch (a) {
                e.Yd(a)
            }
        };
        f.ontimeout = function() {
            try {
                e.ba("TestLoadImage: timeout"), Dk(f), c(!1)
            } catch (a) {
                e.Yd(a)
            }
        };
        h.setTimeout(function() {
            if (f.ontimeout) f.ontimeout()
        }, b);
        f.src = a
    }

    function Dk(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    };

    function Ek(a, b) {
        this.g = a;
        this.h = b;
        this.i = new bk(null, !0)
    }
    d = Ek.prototype;
    d.Qm = null;
    d.Rb = null;
    d.aj = !1;
    d.iu = null;
    d.$i = null;
    d.Vl = null;
    d.Rm = null;
    d.dc = null;
    d.ih = -1;
    d.gh = null;
    d.fh = null;
    d.tJ = function(a) {
        this.Qm = a
    };
    d.uJ = function(a) {
        this.i = a
    };
    d.sJ = function(a) {
        this.Rm = a;
        a = this.g.Tt(this.Rm);
        V(3);
        this.iu = A();
        var b = this.g.zG();
        null != b ? (this.gh = this.g.Il(b[0]), (this.fh = b[1]) ? (this.dc = 1, this.Ot()) : (this.dc = 2, this.Pm())) : (a.tf("MODE", "init"), this.Rb = new vk(this, this.h, void 0, void 0, void 0), this.Rb.bh(this.Qm), this.Rb.cm(a, !1, null, !0), this.dc = 0)
    };
    d.Ot = function() {
        var a = this.g.On(this.fh, "/mail/images/cleardot.gif");
        a.Wf();
        Bk(a.toString(), 5E3, y(this.SK, this), 3, 2E3);
        this.Ec(1)
    };
    d.SK = function(a) {
        a ? (this.dc = 2, this.Pm()) : (V(4), this.g.TK(this));
        a && this.Ec(2)
    };
    d.Pm = function() {
        this.h.ba("TestConnection: starting stage 2");
        var a = this.g.yG();
        null != a ? (this.h.ba("TestConnection: skipping stage 2, precomputed result is " + a ? "Buffered" : "Unbuffered"), V(5), a ? (V(11), this.g.hh(this, !1)) : (V(12), this.g.hh(this, !0))) : (this.Rb = new vk(this, this.h, void 0, void 0, void 0), this.Rb.bh(this.Qm), a = this.g.Ms(this.gh, this.Rm), V(5), !K || ad(10) ? (a.tf("TYPE", "xmlhttp"), this.Rb.cm(a, !1, this.gh, !1)) : (a.tf("TYPE", "html"), this.Rb.qs(a, Boolean(this.gh))))
    };
    d.cl = function(a) {
        return this.g.cl(a)
    };
    d.abort = function() {
        this.Rb && (this.Rb.cancel(), this.Rb = null);
        this.ih = -1
    };
    d.Dx = function() {
        return !1
    };
    d.Bu = function(a, b) {
        this.ih = a.Fi();
        if (0 == this.dc)
            if (this.h.ba("TestConnection: Got data for stage 1"), b) {
                try {
                    var c = this.i.parse(b)
                } catch (e) {
                    this.h.Yd(e);
                    this.g.Wl(this, 4);
                    return
                }
                this.gh = this.g.Il(c[0]);
                this.fh = c[1]
            } else this.h.ba("TestConnection: Null responseText"), this.g.Wl(this, 4);
        else 2 == this.dc && (this.aj ? (V(7), this.Vl = A()) : "11111" == b ? (V(6), this.aj = !0, this.$i = A(), this.ED() && (this.ih = 200, this.Rb.cancel(), this.h.ba("Test connection succeeded; using streaming connection"), V(12), this.g.hh(this, !0))) :
            (V(8), this.$i = this.Vl = A(), this.aj = !1))
    };
    d.Pg = function() {
        this.ih = this.Rb.Fi();
        if (!this.Rb.vs()) this.h.ba("TestConnection: request failed, in state " + this.dc), 0 == this.dc ? V(9) : 2 == this.dc && V(10), this.g.Wl(this, this.Rb.hj());
        else if (0 == this.dc) this.h.ba("TestConnection: request complete for initial check"), this.fh ? (this.dc = 1, this.Ot()) : (this.dc = 2, this.Pm());
        else if (2 == this.dc) {
            this.h.ba("TestConnection: request complete for stage 2");
            var a = !1;
            (a = !K || ad(10) ? this.aj : 200 > this.Vl - this.$i ? !1 : !0) ? (this.h.ba("Test connection succeeded; using streaming connection"), V(12),
                this.g.hh(this, !0)) : (this.h.ba("Test connection failed; not using streaming"), V(11), this.g.hh(this, !1))
        }
    };
    d.Nn = function() {
        return this.ih
    };
    d.Ei = function() {
        return this.g.Ei()
    };
    d.h5 = function() {
        return this.g.lw()
    };
    d.ED = function() {
        var a = this.$i - this.iu;
        return !K || ad(10) || 500 > a
    };
    d.Ec = function(a) {
        this.g.Ec(a)
    };

    function Fk(a) {
        Bf.call(this);
        this.headers = new Cc;
        this.G = a || null;
        this.i = !1;
        this.F = this.g = null;
        this.Z = this.o = "";
        this.k = 0;
        this.j = "";
        this.l = this.J = this.L = this.I = !1;
        this.p = 0;
        this.A = null;
        this.w = "";
        this.U = this.W = !1
    }
    B(Fk, Bf);
    Fk.prototype.va = null;
    var Gk = /^https?$/i,
        Hk = ["POST", "PUT"],
        Ik = [];
    d = Fk.prototype;
    d.b3 = function() {
        this.nc();
        Ua(Ik, this)
    };
    d.H4 = function() {
        return this.p
    };
    d.U6 = function(a) {
        this.p = Math.max(0, a)
    };
    d.O6 = function(a) {
        this.w = a
    };
    d.y4 = function() {
        return this.w
    };
    d.TU = function(a) {
        this.W = a
    };
    d.M4 = function() {
        return this.W
    };
    d.send = function(a, b, c, e) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.o + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.o = a;
        this.j = "";
        this.k = 0;
        this.Z = b;
        this.I = !1;
        this.i = !0;
        this.g = this.KA();
        this.F = this.G ? this.G.j() : yg.j();
        this.g.onreadystatechange = y(this.nq, this);
        try {
            vj(null, this.vd("Opening Xhr")), this.J = !0, this.g.open(b, String(a), !0), this.J = !1
        } catch (f) {
            vj(null, this.vd("Error opening Xhr: " + f.message));
            this.pq(5, f);
            return
        }
        a = c || "";
        var g = this.headers.clone();
        e &&
            jg(e, function(a, b) {
                g.Ac(b, a)
            });
        e = Ta(g.vb(), Jk);
        c = h.FormData && a instanceof h.FormData;
        !E(Hk, b) || e || c || g.Ac("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function(a, b) {
            this.g.setRequestHeader(b, a)
        }, this);
        this.w && (this.g.responseType = this.w);
        "withCredentials" in this.g && (this.g.withCredentials = this.W);
        try {
            this.oq(), 0 < this.p && (this.U = Kk(this.g), vj(null, this.vd("Will abort after " + this.p + "ms if incomplete, xhr2 " + this.U)), this.U ? (this.g.timeout = this.p, this.g.ontimeout = y(this.Yb,
                this)) : this.A = Tf(this.Yb, this.p, this)), vj(null, this.vd("Sending request")), this.L = !0, this.g.send(a), this.L = !1
        } catch (k) {
            vj(null, this.vd("Send error: " + k.message)), this.pq(5, k)
        }
    };

    function Kk(a) {
        return K && $c(9) && ea(a.timeout) && l(a.ontimeout)
    }

    function Jk(a) {
        return "content-type" == a.toLowerCase()
    }
    d.KA = function() {
        return this.G ? this.G.g() : yg.g()
    };
    d.Yb = function() {
        "undefined" != typeof aa && this.g && (this.j = "Timed out after " + this.p + "ms, aborting", this.k = 8, this.vd(this.j), this.dispatchEvent("timeout"), this.abort(8))
    };
    d.pq = function(a, b) {
        this.i = !1;
        this.g && (this.l = !0, this.g.abort(), this.l = !1);
        this.j = b;
        this.k = a;
        this.vr();
        this.Ii()
    };
    d.vr = function() {
        this.I || (this.I = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"))
    };
    d.abort = function(a) {
        this.g && this.i && (this.vd("Aborting"), this.i = !1, this.l = !0, this.g.abort(), this.l = !1, this.k = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.Ii())
    };
    d.M = function() {
        this.g && (this.i && (this.i = !1, this.l = !0, this.g.abort(), this.l = !1), this.Ii(!0));
        Fk.u.M.call(this)
    };
    d.nq = function() {
        this.Xc() || (this.J || this.L || this.l ? this.ey() : this.yQ())
    };
    d.yQ = function() {
        this.ey()
    };
    d.ey = function() {
        if (this.i && "undefined" != typeof aa)
            if (this.F[1] && 4 == this.Rd() && 2 == this.getStatus()) this.vd("Local request error detected and ignored");
            else if (this.L && 4 == this.Rd()) Tf(this.nq, 0, this);
        else if (this.dispatchEvent("readystatechange"), this.Ql()) {
            this.vd("Request complete");
            this.i = !1;
            try {
                this.PJ() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.k = 6, this.j = this.OJ() + " [" + this.getStatus() + "]", this.vr())
            } finally {
                this.Ii()
            }
        }
    };
    d.Ii = function(a) {
        if (this.g) {
            this.oq();
            var b = this.g,
                c = this.F[0] ? q : null;
            this.F = this.g = null;
            a || this.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (e) {}
        }
    };
    d.oq = function() {
        this.g && this.U && (this.g.ontimeout = null);
        ea(this.A) && (h.clearTimeout(this.A), this.A = null)
    };
    d.m5 = function() {
        return !!this.g
    };
    d.Ql = function() {
        return 4 == this.Rd()
    };
    d.PJ = function() {
        var a = this.getStatus(),
            b;
        t: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                b = !0;
                break t;
            default:
                b = !1
        }
        return b || 0 === a && !this.JV()
    };
    d.JV = function() {
        var a;
        a = Ah(String(this.o))[1] || null;
        !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
        a = a ? a.toLowerCase() : "";
        return Gk.test(a)
    };
    d.Rd = function() {
        return this.g ? this.g.readyState : 0
    };
    d.getStatus = function() {
        try {
            return 2 < this.Rd() ? this.g.status : -1
        } catch (a) {
            return -1
        }
    };
    d.OJ = function() {
        try {
            return 2 < this.Rd() ? this.g.statusText : ""
        } catch (a) {
            return ""
        }
    };
    d.V3 = function() {
        return String(this.o)
    };
    d.Ee = function() {
        try {
            return this.g ? this.g.responseText : ""
        } catch (a) {
            return ""
        }
    };
    d.x4 = function() {
        try {
            if (this.g && "responseBody" in this.g) return this.g.responseBody
        } catch (a) {}
        return null
    };
    d.zU = function() {
        try {
            return this.g ? this.g.responseXML : null
        } catch (a) {
            return null
        }
    };
    d.yU = function(a) {
        if (this.g) {
            var b = this.g.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return Jh(b)
        }
    };
    d.w4 = function() {
        try {
            if (!this.g) return null;
            if ("response" in this.g) return this.g.response;
            switch (this.w) {
                case "":
                case "text":
                    return this.g.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.g) return this.g.mozResponseArrayBuffer
            }
            return null
        } catch (a) {
            return null
        }
    };
    d.AU = function(a) {
        return this.g && this.Ql() ? this.g.getResponseHeader(a) : void 0
    };
    d.FV = function() {
        return this.g && this.Ql() ? this.g.getAllResponseHeaders() : ""
    };
    d.MO = function() {
        for (var a = {}, b = this.FV().split("\r\n"), c = 0; c < b.length; c++)
            if (!/^[\s\xa0]*$/.test(b[c])) {
                var e;
                e = 2;
                for (var f = b[c].split(": "), g = []; 0 < e && f.length;) g.push(f.shift()), e--;
                f.length && g.push(f.join(": "));
                e = g;
                a[e[0]] = a[e[0]] ? a[e[0]] + (", " + e[1]) : e[1]
            }
        return a
    };
    d.zB = function() {
        return this.k
    };
    d.hj = function() {
        return v(this.j) ? this.j : String(this.j)
    };
    d.vd = function(a) {
        return a + " [" + this.Z + " " + this.o + " " + this.getStatus() + "]"
    };

    function Lk(a, b, c) {
        this.o = a || null;
        this.h = 1;
        this.i = [];
        this.j = [];
        this.g = new Ak;
        this.p = new bk(null, !0);
        this.w = b || null;
        this.A = null != c ? c : null
    }

    function Mk(a, b, c) {
        this.g = a;
        this.map = b;
        this.context = c || null
    }
    d = Lk.prototype;
    d.Nf = null;
    d.Fh = null;
    d.mb = null;
    d.ab = null;
    d.ym = null;
    d.oj = null;
    d.ls = null;
    d.ej = null;
    d.ep = !0;
    d.mh = 0;
    d.WD = 0;
    d.fw = !1;
    d.Qa = null;
    d.Kc = null;
    d.Jd = null;
    d.Se = null;
    d.ce = null;
    d.jn = null;
    d.Pn = !0;
    d.jh = -1;
    d.iw = -1;
    d.Cd = -1;
    d.Xd = 0;
    d.If = 0;
    d.kw = 5E3;
    d.mw = 1E4;
    d.nz = 2;
    d.xn = 2E4;
    d.Xu = 0;
    d.tk = !1;
    d.we = 8;
    var Nk = new Bf;

    function Ok(a, b) {
        S.call(this, "statevent", a);
        this.g = b
    }
    B(Ok, S);

    function Pk(a, b, c, e) {
        S.call(this, "timingevent", a);
        this.g = b;
        this.j = c;
        this.i = e
    }
    B(Pk, S);

    function Qk(a, b) {
        S.call(this, "serverreachability", a);
        this.g = b
    }
    B(Qk, S);
    d = Lk.prototype;
    d.A3 = function() {
        return this.g
    };
    d.C6 = function(a) {
        null != a && (this.g = a)
    };
    d.El = function(a, b, c, e, f) {
        this.g.ba("connect()");
        V(0);
        this.ym = b;
        this.Fh = c || {};
        e && l(f) && (this.Fh.OSID = e, this.Fh.OAID = f);
        this.xK(a)
    };
    d.Ns = function() {
        this.g.ba("disconnect()");
        this.Rs();
        if (3 == this.h) {
            var a = this.mh++,
                b = this.oj.clone();
            b.eb("SID", this.l);
            b.eb("RID", a);
            b.eb("TYPE", "terminate");
            this.eh(b);
            (new vk(this, this.g, this.l, a, void 0)).rF(b)
        }
        this.Ss()
    };
    d.kr = function() {
        return this.l
    };
    d.xK = function(a) {
        this.g.ba("connectTest_()");
        this.dl() && (this.ce = new Ek(this, this.g), this.ce.tJ(this.Nf), this.ce.uJ(this.p), this.ce.sJ(a))
    };
    d.rK = function() {
        this.g.ba("connectChannel_()");
        this.vK(1, 0);
        this.oj = this.Tt(this.ym);
        this.zl()
    };
    d.Rs = function() {
        this.ce && (this.ce.abort(), this.ce = null);
        this.ab && (this.ab.cancel(), this.ab = null);
        this.Jd && (h.clearTimeout(this.Jd), this.Jd = null);
        this.Xi();
        this.mb && (this.mb.cancel(), this.mb = null);
        this.Kc && (h.clearTimeout(this.Kc), this.Kc = null)
    };
    d.pL = function() {
        return this.Nf
    };
    d.qL = function(a) {
        this.Nf = a
    };
    d.g5 = function(a) {
        this.Xu = a
    };
    d.R6 = function(a) {
        this.tk = a
    };
    d.P3 = function() {
        return this.Qa
    };
    d.lr = function(a) {
        this.Qa = a
    };
    d.t3 = function() {
        return this.ep
    };
    d.B6 = function(a) {
        this.ep = a
    };
    d.uw = function() {
        return !this.jn
    };
    d.s3 = function() {
        return this.Pn
    };
    d.A6 = function(a) {
        this.Pn = a
    };
    d.$r = function(a, b) {
        if (0 == this.h) throw Error("Invalid operation: sending map when state is closed");
        1E3 == this.i.length && this.g.Ad("Already have 1000 queued maps upon queueing " + T(a));
        this.i.push(new Mk(this.WD++, a, b));
        2 != this.h && 3 != this.h || this.zl()
    };
    d.E6 = function(a) {
        this.fw = a;
        this.g.Ub("setFailFast: " + a);
        (this.mb || this.Kc) && this.Xd > this.Tm() && (this.g.Ub("Retry count " + this.Xd + " > new maxRetries " + this.Tm() + ". Fail immediately!"), this.mb ? (this.mb.cancel(), this.Pg(this.mb)) : (h.clearTimeout(this.Kc), this.Kc = null, this.bc(2)))
    };
    d.Tm = function() {
        return this.fw ? 0 : this.nz
    };
    d.G6 = function(a) {
        this.nz = a
    };
    d.H6 = function(a) {
        this.xn = a
    };
    d.II = function() {
        return 3
    };
    d.Dx = function() {
        return 0 == this.h
    };
    d.yf = function() {
        return this.h
    };
    d.yu = function() {
        return this.Cd
    };
    d.jr = function() {
        return this.jh
    };
    d.ir = function() {
        return 0 != this.VV()
    };
    d.e5 = function(a) {
        this.p = a
    };
    d.VV = function() {
        var a = 0;
        this.ab && a++;
        this.mb && a++;
        return a
    };
    d.zl = function() {
        this.mb || this.Kc || (this.Kc = zk(y(this.cu, this), 0), this.Xd = 0)
    };
    d.zE = function(a) {
        if (this.mb || this.Kc) return this.g.Ad("Request already in progress"), !1;
        if (1 == this.h || this.Xd >= this.Tm()) return !1;
        this.g.ba("Going to retry POST");
        this.Kc = zk(y(this.cu, this, a), this.Os(this.Xd));
        this.Xd++;
        return !0
    };
    d.cu = function(a) {
        this.Kc = null;
        this.ot(a)
    };
    d.ot = function(a) {
        this.g.ba("startForwardChannel_");
        this.dl() && (1 == this.h ? a ? this.g.Ad("Not supposed to retry the open") : (this.JD(), this.h = 2) : 3 == this.h && (a ? this.fs(a) : 0 == this.i.length ? this.g.ba("startForwardChannel_ returned: nothing to send") : this.mb ? this.g.Ad("startForwardChannel_ returned: connection already in progress") : (this.fs(), this.g.ba("startForwardChannel_ finished, sent request"))))
    };
    d.JD = function() {
        this.g.ba("open_()");
        this.mh = Math.floor(1E5 * Math.random());
        var a = this.mh++,
            b = new vk(this, this.g, "", a, void 0);
        b.bh(this.Nf);
        var c = this.nn(),
            e = this.oj.clone();
        e.eb("RID", a);
        this.o && e.eb("CVER", this.o);
        this.eh(e);
        b.bv(e, c, !0);
        this.mb = b
    };
    d.fs = function(a) {
        var b;
        a ? 6 < this.we ? (this.RI(), b = this.mh - 1, a = this.nn()) : (b = a.QI(), a = a.Pl()) : (b = this.mh++, a = this.nn());
        var c = this.oj.clone();
        c.eb("SID", this.l);
        c.eb("RID", b);
        c.eb("AID", this.jh);
        this.eh(c);
        b = new vk(this, this.g, this.l, b, this.Xd + 1);
        b.bh(this.Nf);
        b.setTimeout(Math.round(.5 * this.xn) + Math.round(.5 * this.xn * Math.random()));
        this.mb = b;
        b.bv(c, a, !0)
    };
    d.eh = function(a) {
        if (this.Qa) {
            var b = this.Qa.Wy(this);
            b && mc(b, function(b, e) {
                a.eb(e, b)
            })
        }
    };
    d.nn = function() {
        var a = Math.min(this.i.length, 1E3),
            b = ["count=" + a],
            c;
        6 < this.we && 0 < a ? (c = this.i[0].g, b.push("ofs=" + c)) : c = 0;
        for (var e = 0; e < a; e++) {
            var f = this.i[e].g,
                g = this.i[e].map,
                f = 6 >= this.we ? e : f - c;
            try {
                jg(g, function(a, c) {
                    b.push("req" + f + "_" + c + "=" + encodeURIComponent(a))
                })
            } catch (k) {
                b.push("req" + f + "_type=" + encodeURIComponent("_badmap")), this.Qa && this.Qa.aF(this, g)
            }
        }
        this.j = this.j.concat(this.i.splice(0, a));
        return b.join("&")
    };
    d.RI = function() {
        this.i = this.j.concat(this.i);
        this.j.length = 0
    };
    d.Pr = function() {
        this.ab || this.Jd || (this.k = 1, this.Jd = zk(y(this.Bv, this), 0), this.If = 0)
    };
    d.km = function() {
        if (this.ab || this.Jd) return this.g.Ad("Request already in progress"), !1;
        if (this.If >= this.II()) return !1;
        this.g.ba("Going to retry GET");
        this.k++;
        this.Jd = zk(y(this.Bv, this), this.Os(this.If));
        this.If++;
        return !0
    };
    d.Bv = function() {
        this.Jd = null;
        this.DU()
    };
    d.DU = function() {
        if (this.dl()) {
            this.g.ba("Creating new HttpRequest");
            this.ab = new vk(this, this.g, this.l, "rpc", this.k);
            this.ab.bh(this.Nf);
            this.ab.HH(this.Xu);
            var a = this.ls.clone();
            a.eb("RID", "rpc");
            a.eb("SID", this.l);
            a.eb("CI", this.jn ? "0" : "1");
            a.eb("AID", this.jh);
            this.eh(a);
            !K || ad(10) ? (a.eb("TYPE", "xmlhttp"), this.ab.cm(a, !0, this.ej, !1)) : (a.eb("TYPE", "html"), this.ab.qs(a, Boolean(this.ej)));
            this.g.ba("New Request created")
        }
    };
    d.dl = function() {
        if (this.Qa) {
            var a = this.Qa.pK(this);
            if (0 != a) return this.g.ba("Handler returned error code from okToMakeRequest"), this.bc(a), !1
        }
        return !0
    };
    d.hh = function(a, b) {
        this.g.ba("Test Connection Finished");
        this.jn = this.Pn && b;
        this.Cd = a.Nn();
        this.rK()
    };
    d.Wl = function(a) {
        this.g.ba("Test Connection Failed");
        this.Cd = a.Nn();
        this.bc(2)
    };
    d.TK = function() {
        this.g.ba("Test Connection Blocked");
        this.Cd = this.ce.Nn();
        this.bc(9)
    };
    d.Bu = function(a, b) {
        if (0 != this.h && (this.ab == a || this.mb == a))
            if (this.Cd = a.Fi(), this.mb == a && 3 == this.h)
                if (7 < this.we) {
                    var c;
                    try {
                        c = this.p.parse(b)
                    } catch (e) {
                        c = null
                    }
                    s(c) && 3 == c.length ? this.tF(c) : (this.g.ba("Bad POST response data returned"), this.bc(11))
                } else "y2f%" != b && (this.g.ba("Bad data returned - missing/invald magic cookie"), this.bc(11));
        else this.ab == a && this.Xi(), /^[\s\xa0]*$/.test(b) || (c = this.p.parse(b), s(c), this.uF(c))
    };
    d.tF = function(a) {
        if (0 == a[0]) this.sK();
        else {
            this.iw = a[1];
            var b = this.iw - this.jh;
            0 < b && (a = a[2], this.g.ba(a + " bytes (in " + b + " arrays) are outstanding on the BackChannel"), this.uK(a) && !this.Se && (this.Se = zk(y(this.tK, this), 6E3)))
        }
    };
    d.sK = function() {
        this.g.ba("Server claims our backchannel is missing.");
        if (this.Jd) this.g.ba("But we are currently starting the request.");
        else {
            if (this.ab)
                if (this.ab.lm() + 3E3 < this.mb.lm()) this.Xi(), this.ab.cancel(), this.ab = null;
                else return;
            else this.g.Og("We do not have a BackChannel established");
            this.km();
            V(19)
        }
    };
    d.uK = function(a) {
        return 37500 > a && !this.uw() && 0 == this.If
    };
    d.Il = function(a) {
        return this.ep ? this.Qa ? this.Qa.bU(a) : a : null
    };
    d.tK = function() {
        null != this.Se && (this.Se = null, this.ab.cancel(), this.ab = null, this.km(), V(20))
    };
    d.Xi = function() {
        null != this.Se && (h.clearTimeout(this.Se), this.Se = null)
    };
    d.Pg = function(a) {
        this.g.ba("Request complete");
        var b;
        if (this.ab == a) this.Xi(), this.ab = null, b = 2;
        else if (this.mb == a) this.mb = null, b = 1;
        else return;
        this.Cd = a.Fi();
        if (0 != this.h)
            if (a.vs()) 1 == b ? (b = a.Pl() ? a.Pl().length : 0, a = A() - a.lm(), Nk.dispatchEvent(new Pk(Nk, b, a, this.Xd)), this.zl(), this.yE(), this.j.length = 0) : this.Pr();
            else {
                var c = a.hj();
                if (3 == c || 7 == c || 0 == c && 0 < this.Cd) this.g.ba("Not retrying due to error type");
                else {
                    this.g.ba("Maybe retrying, last error: " + wk(c, this.Cd));
                    if (1 == b && this.zE(a) || 2 == b && this.km()) return;
                    this.g.ba("Exceeded max number of retries")
                }
                this.g.ba("Error: HTTP request failed");
                switch (c) {
                    case 1:
                        this.bc(5);
                        break;
                    case 4:
                        this.bc(10);
                        break;
                    case 3:
                        this.bc(6);
                        break;
                    case 7:
                        this.bc(12);
                        break;
                    default:
                        this.bc(2)
                }
            }
    };
    d.Os = function(a) {
        var b = this.kw + Math.floor(Math.random() * this.mw);
        this.lw() || (this.g.ba("Inactive channel"), b *= 2);
        return b * a
    };
    d.P6 = function(a, b) {
        this.kw = a;
        this.mw = b
    };
    d.uF = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            this.jh = c[0];
            c = c[1];
            2 == this.h ? "c" == c[0] ? (this.l = c[1], this.ej = this.Il(c[2]), c = c[3], null != c ? this.we = c : this.we = 6, this.h = 3, this.Qa && this.Qa.Sw(this), this.ls = this.Ms(this.ej, this.ym), this.Pr()) : "stop" == c[0] && this.bc(7) : 3 == this.h && ("stop" == c[0] ? this.bc(7) : "noop" != c[0] && this.Qa && this.Qa.Rw(this, c), this.If = 0)
        }
    };
    d.vK = function(a) {
        if (!E(arguments, this.h)) throw Error("Unexpected channel state: " + this.h);
    };
    d.bc = function(a) {
        this.g.Ub("Error code " + a);
        if (2 == a || 9 == a) {
            var b = null;
            this.Qa && (b = this.Qa.AK(this));
            var c = y(this.CK, this);
            b || (b = new gk("//www.google.com/images/cleardot.gif"), b.Wf());
            Ck(b.toString(), 1E4, c)
        } else V(2);
        this.nw(a)
    };
    d.CK = function(a) {
        a ? (this.g.Ub("Successfully pinged google.com"), V(2)) : (this.g.Ub("Failed to ping google.com"), V(1), this.nw(8))
    };
    d.yE = function() {
        this.Qa && this.Qa.hQ(this, this.j)
    };
    d.nw = function(a) {
        this.g.ba("HttpChannel: error - " + a);
        this.h = 0;
        this.Qa && this.Qa.ju(this, a);
        this.Ss();
        this.Rs()
    };
    d.Ss = function() {
        this.h = 0;
        this.Cd = -1;
        if (this.Qa)
            if (0 == this.j.length && 0 == this.i.length) this.Qa.Cl(this);
            else {
                this.g.ba("Number of undelivered maps, pending: " + this.j.length + ", outgoing: " + this.i.length);
                var a = Wa(this.j),
                    b = Wa(this.i);
                this.j.length = 0;
                this.i.length = 0;
                this.Qa.Cl(this, a, b)
            }
    };
    d.Tt = function(a) {
        a = this.On(null, a);
        this.g.ba("GetForwardChannelUri: " + a);
        return a
    };
    d.zG = function() {
        return this.w
    };
    d.yG = function() {
        return this.A
    };
    d.Ms = function(a, b) {
        var c = this.On(this.Ei() ? a : null, b);
        this.g.ba("GetBackChannelUri: " + c);
        return c
    };
    d.On = function(a, b, c) {
        var e = qk(b);
        if ("" != e.Qe()) a && e.Ch(a + "." + e.Qe()), e.Dh(c || e.Xf());
        else var f = window.location,
            e = rk(f.protocol, null, a ? a + "." + f.hostname : f.hostname, c || f.port, b);
        this.Fh && mc(this.Fh, function(a, b) {
            e.eb(b, a)
        });
        e.eb("VER", this.we);
        this.eh(e);
        return e
    };
    d.cl = function(a) {
        if (a && !this.tk) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new Fk;
        a.TU(this.tk);
        return a
    };
    d.lw = function() {
        return !!this.Qa && this.Qa.kU(this)
    };

    function zk(a, b) {
        if (!w(a)) throw Error("Fn must not be null and must be a function");
        return h.setTimeout(function() {
            a()
        }, b)
    }
    d.Ec = function(a) {
        Nk.dispatchEvent(new Qk(Nk, a))
    };

    function V(a) {
        Nk.dispatchEvent(new Ok(Nk, a))
    }
    d.Ei = function() {
        return this.tk || !(!K || ad(10))
    };
    new fk(1E3);
    new ak;

    function Rk() {}
    d = Rk.prototype;
    d.a3 = null;
    d.pK = function() {
        return 0
    };
    d.Sw = function() {};
    d.Rw = function() {};
    d.hQ = function() {};
    d.ju = function() {};
    d.Cl = function() {};
    d.Wy = function() {
        return {}
    };
    d.AK = function() {
        return null
    };
    d.kU = function() {
        return !0
    };
    d.aF = function() {};
    d.bU = function(a) {
        return a
    };

    function Sk(a, b) {
        this.g = a;
        this.Pa = b || null
    };

    function Tk() {
        F.call(this);
        this.g = [];
        this.h = {}
    }
    B(Tk, F);
    d = Tk.prototype;
    d.Iu = 1;
    d.ij = 0;
    d.Rx = function(a, b, c) {
        var e = this.h[a];
        e || (e = this.h[a] = []);
        var f = this.Iu;
        this.g[f] = a;
        this.g[f + 1] = b;
        this.g[f + 2] = c;
        this.Iu = f + 3;
        e.push(f);
        return f
    };
    d.c7 = function(a, b, c) {
        var e = this.Rx(a, function(a) {
            b.apply(c, arguments);
            this.Hf(e)
        }, this);
        return e
    };
    d.HP = function(a, b, c) {
        if (a = this.h[a]) {
            var e = this.g;
            if (a = Ta(a, function(a) {
                    return e[a + 1] == b && e[a + 2] == c
                })) return this.Hf(a)
        }
        return !1
    };
    d.Hf = function(a) {
        if (0 != this.ij) return this.i || (this.i = []), this.i.push(a), !1;
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            c && Ua(c, a);
            delete this.g[a];
            delete this.g[a + 1];
            delete this.g[a + 2]
        }
        return !!b
    };
    d.GP = function(a, b) {
        var c = this.h[a];
        if (c) {
            this.ij++;
            for (var e = ab(arguments, 1), f = 0, g = c.length; f < g; f++) {
                var k = c[f];
                this.g[k + 1].apply(this.g[k + 2], e)
            }
            this.ij--;
            if (this.i && 0 == this.ij)
                for (; c = this.i.pop();) this.Hf(c);
            return 0 != f
        }
        return !1
    };
    d.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (Na(b, this.Hf, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    d.Da = function(a) {
        if (a) {
            var b = this.h[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.h) a += this.Da(b);
        return a
    };
    d.M = function() {
        Tk.u.M.call(this);
        delete this.g;
        delete this.h;
        delete this.i
    };

    function Uk(a, b) {
        Sf.call(this);
        if (w(a)) b && (a = y(a, b));
        else if (a && w(a.handleEvent)) a = y(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        this.p = a;
        of(this, "tick", y(this.By, this));
        this.as()
    }
    B(Uk, Sf);
    d = Uk.prototype;
    d.Ro = 0;
    d.By = function() {
        if (this.yR()) {
            var a = this.Ho();
            24E4 > 2 * a && (a *= 2);
            this.pi(a)
        }
        this.p()
    };
    d.jP = function() {
        this.enabled && (this.stop(), this.Wd(), this.By())
    };
    d.Wd = function() {
        Uk.u.Wd.call(this);
        this.Ro = A() + this.Ho()
    };
    d.stop = function() {
        this.Ro = 0;
        Uk.u.stop.call(this)
    };
    d.cP = function() {
        return this.Ro
    };
    d.as = function() {
        this.stop();
        var a = 5E3 + 2E4 * Math.random();
        this.pi(a)
    };
    d.Et = function() {
        this.stop();
        this.pi(500)
    };
    d.yR = function() {
        return 500 < this.Ho()
    };

    function Vk(a, b) {
        this.L = a;
        this.j = b;
        this.i = new Tk;
        this.h = new Uk(this.AA, this);
        this.g = this.U = null;
        this.A = !1;
        this.p = null;
        this.w = "";
        this.o = this.l = 0;
        this.k = []
    }
    B(Vk, Rk);
    d = Vk.prototype;
    d.Rl = function(a, b, c) {
        return this.i.Rx(a, b, c)
    };
    d.k7 = function(a, b, c) {
        return this.i.HP(a, b, c)
    };
    d.Hf = function(a) {
        return this.i.Hf(a)
    };
    d.Ui = function(a, b) {
        return this.i.GP.apply(this.i, arguments)
    };
    d.nc = function() {
        this.A || (this.A = !0, this.i.clear(), this.Nv(), cc(this.i))
    };
    d.Xc = function() {
        return this.A
    };
    d.x3 = function() {
        return {
            firstTestResults: [""],
            secondTestResults: this.g.uw(),
            sessionId: this.g.kr(),
            arrayId: this.g.jr()
        }
    };
    d.bs = function(a) {
        return 2 == a && 401 == this.g.yu()
    };
    d.Br = function(a, b, c) {
        if (!this.g || 2 != this.g.yf()) {
            this.w = "";
            this.h.stop();
            this.p = a || null;
            this.l = b || 0;
            a = this.L + "/test";
            b = this.L + "/bind";
            var e = this.lC(c),
                f = this.g;
            f && f.lr(null);
            e.lr(this);
            this.g = e;
            f ? ((3 == f.yf() || f.ir()) && f.yf(), this.g.El(a, b, this.j, f.kr(), f.jr())) : c ? this.g.El(a, b, this.j, c.sessionId, c.arrayId) : this.g.El(a, b, this.j)
        }
    };
    d.lC = function(a) {
        return new Lk("1", a ? a.firstTestResults : null, a ? a.secondTestResults : null)
    };
    d.Nv = function(a) {
        this.o = a || 0;
        this.h.stop();
        this.g && (3 == this.g.yf() && this.g.ot(), this.g.Ns());
        this.o = 0
    };
    d.CO = function(a, b) {
        var c = {
            _sc: a
        };
        b && Ac(c, b);
        this.Ti() || 2 == this.ur() ? this.k.push(c) : this.aJ() && this.g.$r(c)
    };
    d.Sw = function() {
        this.h.as();
        this.p = null;
        this.l = 0;
        if (this.k.length) {
            var a = this.k;
            this.k = [];
            for (var b = 0, c = a.length; b < c; ++b) this.g.$r(a[b])
        }
        this.Ui("handlerOpened")
    };
    d.ju = function(a, b) {
        var c = this.bs(b);
        4 == b || c || (6 != b && 410 != this.g.yu() || this.h.Et(), this.h.Wd());
        this.Ui("handlerError", b)
    };
    d.Cl = function(a, b, c) {
        if (!this.Ti()) this.Ui("handlerClosed");
        else if (c)
            for (a = 0, b = c.length; a < b; ++a) this.k.push(c[a].map)
    };
    d.Wy = function() {
        var a = {
            v: 2
        };
        this.w && (a.gsessionid = this.w);
        0 != this.l && (a.ui = "" + this.l);
        0 != this.o && (a.ui = "" + this.o);
        this.p && Ac(a, this.p);
        return a
    };
    d.Rw = function(a, b) {
        if ("S" == b[0]) this.w = b[1];
        else if ("gracefulReconnect" == b[0]) this.h.Et(), this.h.Wd(), this.g.Ns();
        else {
            var c = this.ZF(b[0], b[1]);
            this.Ui("handlerMessage", c)
        }
    };
    d.aJ = function() {
        return !!this.g && 3 == this.g.yf()
    };
    d.ur = function() {
        return this.g ? this.g.yf() : 0
    };
    d.Sr = function(a) {
        if (this.g) {
            var b = this.g.pL() || {};
            a ? b.Authorization = a : delete b.Authorization;
            this.g.qL(b)
        }
    };
    d.ZF = function(a, b) {
        return new Sk(a, b)
    };
    d.jD = function(a) {
        (this.j.loungeIdToken = a) || this.h.stop()
    };
    d.Y3 = function() {
        return this.j.loungeIdToken
    };
    d.D3 = function() {
        return this.j.id
    };
    d.t4 = function() {
        return this.Ti() ? this.h.cP() - A() : NaN
    };
    d.Ti = function() {
        return this.h.enabled
    };
    d.n6 = function() {
        this.h.jP()
    };
    d.AA = function() {
        this.h.stop();
        this.g.ir() ? this.h.Wd() : this.Br(this.p, this.l)
    };
    var Wk = "default monoSerif propSerif monoSans propSans casual cursive smallCaps".split(" ");

    function Xk(a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || ""
    }

    function Yk(a) {
        return {
            name: a.name,
            screenId: a.id,
            loungeToken: a.token,
            dialId: a.uuid
        }
    };
    A();
    navigator.userAgent.indexOf(" (CrKey ");

    function Zk(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, e = a.length; c < e; c++) {
            var f = a[c].split("=");
            if (1 == f.length && f[0] || 2 == f.length) {
                var g = xa(f[0] || ""),
                    f = xa(f[1] || "");
                g in b ? s(b[g]) ? Xa(b[g], f) : b[g] = [b[g], f] : b[g] = f
            }
        }
        return b
    }

    function $k(a) {
        a = Eh([], a);
        a[0] = "";
        return a.join("")
    }
    var al = Ch;

    function bl(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : "",
            e = a.split("?", 2);
        a = e[0];
        var e = Zk(e[1] || ""),
            f;
        for (f in b) e[f] = b[f];
        return Fh(a, e) + c
    };
    var cl = null;
    "undefined" != typeof XMLHttpRequest ? cl = function() {
        return new XMLHttpRequest
    } : "undefined" != typeof ActiveXObject && (cl = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });

    function dl(a, b, c, e, f, g, k) {
        function m() {
            4 == (n && "readyState" in n ? n.readyState : 0) && b && Ej(b)(n)
        }
        var n = cl && cl();
        if (!("open" in n)) return null;
        "onloadend" in n ? n.addEventListener("loadend", m, !1) : n.onreadystatechange = m;
        c = (c || "GET").toUpperCase();
        e = e || "";
        n.open(c, a, !0);
        g && (n.responseType = g);
        k && (n.withCredentials = !0);
        g = "POST" == c;
        if (f = el(a, f))
            for (var r in f) n.setRequestHeader(r, f[r]), "content-type" == r.toLowerCase() && (g = !1);
        g && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        n.send(e);
        return n
    }

    function el(a, b) {
        b = b || {};
        for (var c in fl) {
            var e = Cj(fl[c]),
                f;
            if (f = e) {
                f = a;
                var g = void 0;
                g = window.location.href;
                var k = Ah(f)[1] || null,
                    m = al(f);
                k && m ? (f = Ah(f), g = Ah(g), f = f[3] == g[3] && f[1] == g[1] && f[4] == g[4]) : f = m ? al(g) == m && (Number(Ah(g)[4] || null) || null) == (Number(Ah(f)[4] || null) || null) : !0;
                f || (k = a, f = c, g = Cj("CORS_HEADER_WHITELIST") || {}, f = (k = al(k)) ? (g = g[k]) ? E(g, f) : !1 : !0)
            }
            f && (b[c] = e)
        }
        return b
    }

    function gl(a, b) {
        var c = Cj("XSRF_FIELD_NAME"),
            e;
        b.headers && (e = b.headers["Content-Type"]);
        return !b.mW && (!al(a) || al(a) == document.location.hostname) && "POST" == b.method && (!e || "application/x-www-form-urlencoded" == e) && !(b.Ld && b.Ld[c])
    }

    function hl(a, b) {
        var c = b.format || "JSON";
        b.iW && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var e = Cj("XSRF_FIELD_NAME"),
            f = Cj("XSRF_TOKEN"),
            g = b.YT;
        g && (g[e] && delete g[e], a = bl(a, g));
        var k = b.jW || "",
            g = b.Ld;
        gl(a, b) && (g || (g = {}), g[e] = f);
        g && v(k) && (e = Zk(k), Ac(e, g), k = $k(e));
        var m = !1,
            n, r = dl(a, function(a) {
                if (!m) {
                    m = !0;
                    n && window.clearTimeout(n);
                    var e;
                    t: switch (a && "status" in a ? a.status : -1) {
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 304:
                            e = !0;
                            break t;
                        default:
                            e = !1
                    }
                    var f = null;
                    if (e || 400 <= a.status && 500 > a.status) f = il(c, a);
                    if (e) t: {
                        e = f;
                        switch (c) {
                            case "XML":
                                e = 0 == parseInt(e && e.return_code, 10);
                                break t;
                            case "RAW":
                                e = !0;
                                break t
                        }
                        e = !!e
                    }
                    var f = f || {},
                        g = b.context || h;
                    e ? b.Dd && b.Dd.call(g, a, f) : b.onError && b.onError.call(g, a, f);
                    b.ZT && b.ZT.call(g, a, f)
                }
            }, b.method, k, b.headers, b.responseType, b.withCredentials);
        b.Xy && 0 < b.timeout && (n = Dj(function() {
            m || (m = !0, r.abort(), window.clearTimeout(n), b.Xy.call(b.context || h, r))
        }, b.timeout));
        return r
    }

    function il(a, b) {
        var c = null;
        switch (a) {
            case "JSON":
                var e = b.responseText,
                    f = b.getResponseHeader("Content-Type") || "";
                e && 0 <= f.indexOf("json") && (c = Kh(e));
                break;
            case "XML":
                if (e = (e = b.responseXML) ? jl(e) : null) c = {}, e = e.getElementsByTagName("*"), Na(e, function(a) {
                    c[a.tagName] = kl(a)
                })
        }
        return c
    }

    function jl(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function kl(a) {
        var b = "";
        Na(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    }
    var fl = {
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Timestamp": "PAGE_BUILD_TIMESTAMP",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    };

    function ll(a, b) {
        this.p = a;
        this.j = b || new ei("yt.leanback");
        this.g = null;
        this.h = [];
        this.i = [];
        this.l = q;
        var c = this.j.get("yt_mdx_screen", !0);
        c && (this.g = new Xk(c), this.g.id || this.qq());
        this.Cq()
    }
    d = ll.prototype;
    d.Xn = function() {
        return this.g
    };
    d.qh = function(a) {
        if (0 < this.h.length) this.h.push(a);
        else {
            var b = y(function(a) {
                !a && this.g && (this.g.token = "");
                this.g && this.j.i("yt_mdx_screen", Yk(this.g), 0, !0);
                a = this.h;
                this.h = [];
                Na(a, function(a) {
                    a(this.g)
                }, this)
            }, this);
            this.g ? "" == this.g.token ? (this.h.push(a), this.yr(this.g.id, b)) : a(this.g) : (this.h.push(a), this.tC(y(function(a) {
                this.yr(a, b)
            }, this)))
        }
    };
    d.tE = function(a, b, c, e) {
        this.i.push(e);
        if (1 < this.i.length) return y(this.Ou, this);
        var f = y(function(a) {
            var b = this.i;
            this.i = [];
            Na(b, function(b) {
                b(a)
            })
        }, this);
        this.qh(y(this.Pu, this, a, b, c, y(function(e) {
            e ? f(e) : (this.g.token = "", this.qh(y(this.Pu, this, a, b, c, f)))
        }, this)));
        return y(this.Ou, this)
    };
    d.Ou = function() {
        this.l();
        this.i = []
    };
    d.hF = function(a, b, c, e) {
        this.qh(y(this.MU, this, a, b, c, e))
    };
    d.CP = function(a, b) {
        var c = b;
        60 < c ? c = 60 * Math.floor((5 + c) / 60) : 10 < c && (c = 10 * Math.floor((1 + c) / 10));
        this.qh(y(this.NU, this, a, c))
    };
    d.qq = function(a) {
        if (a && this.g) {
            var b = this.Pf("/screens") + "/" + this.g.id;
            hl(b, {
                method: "DELETE",
                context: this,
                format: "RAW",
                headers: {
                    Authorization: "OAuth " + a
                }
            })
        }
        this.j.remove("yt_mdx_screen");
        this.g = null
    };
    d.Pf = function(a, b) {
        return this.p.my(a, b)
    };
    d.Cq = function() {
        this.g && (this.g.token = "");
        Dj(y(this.Cq, this), 864E5)
    };
    d.tC = function(a) {
        hl(this.Pf("/pairing/generate_screen_id"), {
            method: "GET",
            format: "RAW",
            Dd: function(b) {
                a(b.responseText)
            },
            onError: ma(a, "")
        })
    };
    d.Pu = function(a, b, c, e) {
        a = {
            access_type: "permanent",
            app: b,
            lounge_token: this.g.token,
            screen_id: this.g.id || "",
            screen_name: a
        };
        this.l = (c = hl(this.Pf("/pairing/get_pairing_code", {
            ctx: c
        }), {
            Ld: a,
            method: "POST",
            format: "RAW",
            Dd: function(a) {
                e(a.responseText)
            },
            onError: ma(e, "")
        })) ? y(c.abort, c) : q
    };
    d.MU = function(a, b, c, e) {
        this.g ? hl(this.Pf("/pairing/register_pairing_code"), {
            Ld: {
                access_type: "permanent",
                app: c,
                pairing_code: a,
                screen_id: this.g.id,
                screen_name: b
            },
            method: "POST",
            format: "RAW",
            Dd: y(e, this, !0),
            onError: y(e, this, !1)
        }) : e(!1)
    };
    d.NU = function(a, b) {
        this.g && hl(this.Pf("/pairing/unregister_pairing_code", {
            s: b
        }), {
            Ld: {
                screen_id: this.g.id,
                pairing_code: a
            },
            method: "POST"
        })
    };
    d.yr = function(a, b) {
        var c = y(function(c) {
            c = Jh(c.responseText);
            var f = !1;
            c.screens && Na(c.screens, function(b) {
                b.screenId == a && (this.g ? this.g.token = b.loungeToken : this.g = new Xk(b), f = !0)
            }, this);
            b(f)
        }, this);
        hl(this.Pf("/pairing/get_lounge_token_batch"), {
            Ld: {
                screen_ids: a
            },
            method: "POST",
            Dd: c,
            onError: ma(b, !1)
        })
    };

    function ml(a, b, c, e, f, g) {
        F.call(this);
        this.F = a;
        this.i = f;
        this.o = e;
        this.g = c;
        this.p = g;
        this.j = new ll(this.F, b);
        this.A = "";
        this.U = 0;
        this.h = null;
        this.l = {};
        this.L = !1;
        this.w = !0;
        this.k = []
    }
    B(ml, F);
    d = ml.prototype;
    d.iD = function(a) {
        return new Vk(this.F.my("/bc"), a)
    };
    d.kj = function() {
        var a = {},
            b = [],
            c, e, f;
        for (f in this.l) c = this.l[f], e = f.indexOf("#"), 0 < e && (f = f.substr(0, e)), a[f] || (a[f] = !0, b.push(c));
        return b.sort()
    };
    d.co = function(a) {
        this.p = a;
        this.h && this.h.Sr(a ? "OAuth " + a : "")
    };
    d.Fs = function() {
        return !!this.p
    };
    d.tx = function() {
        return this.h && this.j.Xn() ? this.j.Xn().id || null : null
    };
    d.mn = function(a) {
        this.j.qh(a)
    };
    d.fP = function(a) {
        a && this.k.push(a);
        this.k.length < (a ? 2 : 1) && this.mn(y(this.Xv, this))
    };
    d.iP = function() {
        this.Fn(!1)
    };
    d.Fn = function(a) {
        this.h && (this.h.Nv(), this.h.nc(), this.h = null);
        this.l = {};
        a || this.sf(!1)
    };
    d.M = function() {
        this.k.length = 0;
        this.h && this.h.nc();
        ml.u.M.call(this)
    };
    d.WE = function() {
        this.Fn(!1);
        this.j.qq(this.p);
        this.o.B("remote:status", [])
    };
    d.nP = function(a, b) {
        return this.j.tE(this.i.name, this.i.g, a, y(function(a) {
            this.A = a;
            this.U = A();
            b(a)
        }, this))
    };
    d.oP = function() {
        var a = this.A;
        if (a) {
            this.A = "";
            var b = Math.floor((A() - this.U) / 1E3);
            300 > b && this.j.CP(a, b)
        }
    };
    d.gP = function(a, b) {
        this.j.hF(a, this.i.name, this.i.g, b)
    };
    d.kJ = function(a) {
        if (this.g.jc()) {
            var b = a; - 1E3 == a && (b = -1);
            var b = {
                    currentTime: this.g.me(),
                    state: b
                },
                c; - 1E3 == a && (c = this.g.Al(), b.currentError = T(c.g()));
            this.gd("onStateChange", b); - 1E3 == a && this.gd("onError", {
                errors: T([c.g()])
            })
        }
    };
    d.DO = function(a) {
        this.gd("onAdStateChange", a)
    };
    d.Lv = function() {
        this.zt()
    };
    d.Ig = function(a, b) {
        this.gd("onVolumeChanged", {
            volume: a,
            muted: b
        }, !0)
    };
    d.zs = function(a) {
        this.xt(a || [])
    };
    d.HG = function(a) {
        for (var b = [], c = 0, e = a.length; c < e; ++c) b.push(a[c].g());
        return T(b)
    };
    d.Eq = function(a, b) {
        var c = {
            videoId: a
        };
        if (b && !vc(b)) {
            var e = b.languageCode || "";
            Ac(c, {
                trackName: b.name || "",
                languageCode: e,
                sourceLanguageCode: b.sourceLanguageCode || e,
                languageName: b.languageName,
                format: b.format || 1,
                kind: b.kind || ""
            })
        }(e = this.g.WK()) && (c.style = T(e));
        this.gd("onSubtitlesTrackChanged", c)
    };
    d.ux = function(a, b) {
        this.gd("updateUser", {
            username: a,
            authToken: b
        }, !0)
    };
    d.gd = function(a, b, c) {
        (c || this.L) && this.h && this.h.CO(a, b)
    };
    d.zt = function(a, b) {
        if (this.h) {
            var c = {},
                e = this.g.Ol(),
                f = this.g.jc();
            if (f || e.length) f && 0 > e.indexOf(f) && console.warn("MDx send nowPlaying: Queue does not contain current video: " + f + " not in " + T(e)), this.su(c);
            this.Ym(c, a);
            this.gd("nowPlaying", c, b)
        }
    };
    d.Er = function(a, b) {
        if (this.h) {
            var c = {};
            this.g.SG(c);
            this.Ym(c, a);
            this.gd("adPlaying", c, b)
        }
    };
    d.xt = function(a, b, c) {
        if (this.h) {
            var e = {},
                f = this.g.Ol(),
                g = this.g.jc();
            if (g || 0 < f.length) g && 0 > f.indexOf(g) && (console.warn("MDx send nowPlayingPlaylist: Queue does not contain current video: " + g + " not in " + T(f) + ". Adding to the end of queue."), f = Wa(f), f.push(g)), e.video_ids = f.join(","), this.su(e), a.length && (e.errors = this.HG(a));
            this.Ym(e, b);
            this.gd("nowPlayingPlaylist", e, c)
        }
    };
    d.sf = function(a) {
        if (0 < this.k.length) {
            var b = this.k;
            this.k = [];
            for (var c = 0, e = b.length; c < e; ++c) b[c](a)
        }
    };
    d.Xv = function(a) {
        if (a)
            if (this.h) switch (this.h.ur()) {
                case 3:
                    this.sf(!0);
                    break;
                case 0:
                    this.sf(!1)
            } else this.h = this.iD({
                device: "LOUNGE_SCREEN",
                id: this.i.id,
                name: this.i.name,
                app: this.i.g,
                hasCc: "",
                theme: this.i.theme
            }), this.h.jD(a.token), this.h.Rl("handlerOpened", this.hD, this), this.h.Rl("handlerError", this.gD, this), this.h.Rl("handlerMessage", this.kD, this), this.h.Br(), this.p && this.h.Sr("OAuth " + this.p);
            else this.sf(!1)
    };
    d.hD = function() {
        this.sf(!0)
    };
    d.gD = function(a) {
        this.h.Ti() || (this.h.bs(a) && this.p ? (this.p = "", this.j.Xn().token = "", this.Fn(!0), this.mn(y(this.Xv, this))) : this.sf(!1))
    };
    d.kD = function(a) {
        var b = a.Pa || {};
        switch (a.g) {
            case "play":
                this.g.play();
                break;
            case "pause":
                this.g.pause();
                break;
            case "seekTo":
                this.g.Cg(this.Im(b));
                break;
            case "stopVideo":
                this.g.stop();
                break;
            case "setVideo":
                var c = this.Jm(b),
                    e = this.Im(b),
                    b = this.g.Ol(),
                    f = b.indexOf(c);
                0 <= f ? this.g.SF(c, f, e) : console.warn("MDx received setVideo without currently playing video: " + c + " not in " + T(b));
                this.w = !1;
                break;
            case "setPlaylist":
                var c = this.wt(b),
                    e = this.Im(b),
                    g = parseInt(b.currentIndex, 10),
                    f = this.vt(b),
                    b = this.ut(b);
                isNaN(g) &&
                    (g = 0);
                this.g.Nl(y(this.tt, this, b), c, f, g, e, this.w);
                this.w = !1;
                break;
            case "updatePlaylist":
                c = this.wt(b);
                f = this.vt(b);
                e = !0;
                (g = this.g.jc()) && (e = 0 <= c.indexOf(g));
                e ? ((b = this.ut(b)) && "VIDEO_REMOVED" === b.eventType && this.o.B("playlist:updated", this.g.st(b)), this.g.Nl(y(this.tt, this, b), c, f)) : console.warn("MDx received updatePlaylist without currently playing video: " + g + " not in " + T(c));
                this.w = !1;
                this.gd("confirmPlaylistUpdate", {
                    updated: e
                }, !0);
                break;
            case "setVolume":
                e = this.g.Hm();
                c = parseInt(b.volume, 10) || 0;
                "delta" in
                b && (f = parseInt(b.delta, 10), 0 <= e && !isNaN(f) && (c = Math.max(0, Math.min(e + f, 100))));
                this.g.setVolume(c);
                "true" == b.muted || "1" == b.muted ? this.g.Pq() : this.g.Qq();
                break;
            case "getVolume":
                this.Ig(this.g.Hm(), this.g.isMuted());
                break;
            case "setSubtitlesTrack":
                c = this.Jm(b);
                if (c === this.g.jc()) {
                    f = {};
                    if (b.trackName || b.languageCode) f.name = b.trackName, f.languageName = b.languageName, f.languageCode = b.languageCode, f.format = parseInt(b.format, 10) || 1, f.kind = b.kind;
                    this.g.RF(c, f)
                }
                if ("style" in b)
                    if (v(b.style)) {
                        try {
                            e = Jh(b.style)
                        } catch (k) {
                            console.warn("Caption style not JSON, trying broken iOS style parsing for rich captions instead."),
                                e = this.OF(b.style || "")
                        }
                        e.fontFamilyOption || (e.fontFamilyOption = Wk[4]);
                        this.yj(e, "fontSizeRelative");
                        this.yj(e, "windowOpacity");
                        this.yj(e, "backgroundOpacity");
                        this.yj(e, "textOpacity");
                        b = e.fontSizeRelative;
                        l(b) && (c = 0, c = 1 > b ? eb(2 * b - 2) : eb(4 * b - 4), e.fontSizeIncrement = c);
                        this.g.At(e)
                    } else this.g.At(null);
                break;
            case "getSubtitlesTrack":
                f = this.g.Dq();
                e = this.g.jc();
                c = this.Jm(b) || e;
                c != e && (f = null);
                this.Eq(c, f);
                break;
            case "getNowPlaying":
                this.zt(a, !0);
                1081 == this.g.Md() && this.Er(a, !0);
                break;
            case "skipAd":
                this.g.TF();
                break;
            case "getPlaylist":
                this.g.PF(y(function(b) {
                    this.xt(b, a, !0)
                }, this));
                break;
            case "remoteConnected":
                e = new bj(Jh(b.device));
                b = !!b.ui;
                this.L = !0;
                vc(this.l) && b && (this.w = !0);
                this.l[e.id] = e.g;
                this.o.B("remote:connected", e, b);
                break;
            case "remoteDisconnected":
                e = new bj(Jh(b.device));
                b = !!b.ui;
                delete this.l[e.id];
                this.o.B("remote:disconnected", e, b);
                break;
            case "loungeStatus":
                c = [];
                b = Jh(b.devices);
                if (s(b))
                    for (f = 0, g = b.length; f < g; ++f) e = new bj(b[f]), "REMOTE_CONTROL" == e.type && c.push(e);
                this.QF(c);
                this.o.B("remote:status",
                    c)
        }
    };
    d.Ym = function(a, b) {
        b && b.Pa && b.Pa.recipientDevice && (a.recipientDevice = b.Pa.recipientDevice)
    };
    d.OF = function(a) {
        a = a.replace(/;\n}.*/, "");
        a = a.replace(/.*{/, "");
        a = a.split(/;\n/g);
        for (var b = {}, c, e, f = 0, g = a.length; f < g; ++f) c = a[f].split(/ = /), e = c.shift().trim(), c = c.shift().trim(), c = c.replace(/^"/, ""), c = c.replace(/"$/, ""), b[e] = c;
        return b
    };
    d.yj = function(a, b) {
        b in a && (a[b] = parseFloat(a[b]))
    };
    d.Jm = function(a) {
        return a.videoId || a.video_id || ""
    };
    d.ut = function(a) {
        return a.eventDetails ? Jh(a.eventDetails) : null
    };
    d.wt = function(a) {
        a = a.videoIds || a.video_ids || "";
        return 0 < a.length ? a.split(",") : []
    };
    d.vt = function(a) {
        var b = a.vvts || "";
        a = {};
        if (0 < b.length)
            for (var b = b.split(","), c = 0, e = b.length; c < e; ++c) {
                var f = b[c].split(":");
                a[f[0]] = f[1]
            }
        return a
    };
    d.Im = function(a) {
        a = parseFloat(a.currentTime || a.newTime);
        if (isNaN(a) || 0 > a) a = 0;
        return a
    };
    d.QF = function(a) {
        this.l = {};
        for (var b = 0, c = a.length; b < c; ++b) this.L = !0, this.l[a[b].id] = a[b].g
    };
    d.su = function(a) {
        var b = this.g.jc();
        if (b) {
            var c = this.g.Md();
            a.video_id = b;
            a.current_time = this.g.me();
            a.state = c; - 1E3 == c && (b = this.g.Al(), a.currentError = T(b.g()))
        }
    };
    d.tt = function(a, b) {
        if (!b.length && a) switch (this.g.st(a), a.eventType) {
            case "PLAYLIST_ADDED":
            case "VIDEO_ADDED":
                this.o.B("playlist:updated", a)
        }
    };
    var nl = {
        "-1000": 0,
        "-1": 1,
        0: 1,
        1: 2,
        2: 1,
        3: 2,
        5: 1,
        1081: 1
    };

    function ol(a, b) {
        F.call(this);
        this.g = a;
        this.i = b;
        this.j = 0;
        this.h = null;
        this.l = "";
        this.i.yd(cast.receiver.Channel.EventType.OPEN, y(this.IB, this));
        this.i.yd(cast.receiver.Channel.EventType.MESSAGE, y(this.HB, this));
        this.i.JB()
    }
    B(ol, F);
    d = ol.prototype;
    d.M = function() {
        cc(this.i);
        ol.u.M.call(this)
    };
    d.$h = function(a) {
        this.l = a;
        this.i.hO() && (a ? this.i.fx('<additionalData xmlns="http://www.youtube.com/dial"><screenId>' + a + "</screenId></additionalData>") : this.i.fx(""))
    };
    d.IB = function(a) {
        this.xf(a.target, {
            cmd_id: 0,
            type: "STATUS",
            status: this.Ff()
        });
        this.$h(this.l)
    };
    d.HB = function(a) {
        var b = a.target;
        a = a.message;
        l(a.cmd_id) && l(a.type) && this.cW(b, a)
    };
    d.xf = function(a, b) {
        try {
            a.send(b)
        } catch (c) {}
    };
    d.Fx = function(a) {
        for (var b = this.i.FP(), c = b.length, e = 0; e < c; ++e) b[e].isOpen() && this.xf(b[e], a)
    };
    d.om = function() {
        var a = this.g.Hm();
        return 0 <= a ? a / 100 : 1
    };
    d.Ff = function(a, b) {
        var c = this.g.jc(),
            e = l(a) ? a : this.g.Md();
        if (!ha(this.h) || !c || this.h.contentId != c) return {
            event_sequence: this.j++,
            state: 0,
            muted: this.g.isMuted(),
            volume: this.om()
        };
        if (-1E3 == e) return {
            event_sequence: this.j++,
            content_id: this.g.jc(),
            state: 0,
            error: {
                domain: "YouTube.MDx",
                code: 2
            }
        };
        var f = nl[e] || 0,
            c = {
                event_sequence: this.j++,
                state: f,
                content_id: c,
                current_time: this.g.me(),
                duration: this.h.duration,
                muted: this.g.isMuted(),
                time_progress: 1 == e,
                title: this.h.metadata.title,
                volume: this.om()
            };
        this.h.metadata.images.length &&
            (c.image_url = this.h.metadata.images[0].url);
        ha(b) && Ac(c, b);
        return c
    };
    d.Io = function(a) {
        this.Fx({
            cmd_id: 0,
            type: "STATUS",
            status: this.Ff(a)
        })
    };
    d.so = function(a) {
        this.h = a || null;
        this.Fx({
            cmd_id: 0,
            type: "STATUS",
            status: this.Ff()
        })
    };
    d.cW = function(a, b) {
        switch (b.type) {
            case "PLAY":
                var c = this.g.Md(),
                    e = 3;
                if (this.h && l(b.position) && ea(b.position)) {
                    var f = Math.max(0, Math.min(b.position, this.h.duration));
                    this.g.Cg(f);
                    2 == c && this.g.play()
                } else this.g.play();
                if (2 == c || 1 == c) e = 1;
                this.xf(a, {
                    cmd_id: b.cmd_id,
                    type: "RESPONSE",
                    status: this.Ff(e)
                });
                break;
            case "STOP":
                this.g.pause();
                break;
            case "INFO":
                this.xf(a, {
                    cmd_id: b.cmd_id,
                    type: "RESPONSE",
                    status: this.Ff()
                });
                break;
            case "VOLUME":
                c = this.om();
                l(b.volume) && ea(b.volume) && (this.g.setVolume(Math.round(100 *
                    b.volume)), c = b.volume);
                e = this.g.isMuted();
                l(b.muted) && (b.muted ? this.g.Pq() : this.g.Qq(), e = b.muted);
                this.xf(a, {
                    cmd_id: b.cmd_id,
                    type: "RESPONSE",
                    status: this.Ff(void 0, {
                        volume: c,
                        muted: e
                    })
                });
                break;
            default:
                this.xf(a, {
                    cmd_id: b.cmd_id,
                    type: "RESPONSE",
                    status: {
                        event_sequence: this.j++,
                        original_operation: b.type,
                        error: {
                            domain: "YouTube.MDx",
                            code: 1
                        }
                    }
                })
        }
    };

    function pl(a, b, c) {
        this.videoId = a;
        this.h = b;
        this.error = c
    }
    pl.prototype.g = function() {
        return {
            videoId: this.videoId,
            reason: this.h,
            error: this.error
        }
    };

    function ql(a) {
        this.l = "https";
        this.j = this.i = "";
        this.g = "/api/lounge";
        this.h = !0;
        a = a || document.location.href;
        var b = Number(Ah(a)[4] || null) || null || "";
        b && (this.j = ":" + b);
        this.i = Ch(a) || "";
        a = J;
        0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > Ga(a, "10.0") && (this.h = !1))
    }
    d = ql.prototype;
    d.my = function(a, b, c) {
        var e = this.g;
        if (l(c) ? c : this.h) e = "https://" + this.i + this.j + this.g;
        return Fh(e + a, b || {})
    };
    d.z6 = function(a, b, c, e, f, g, k) {
        a = {
            format: g ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!k,
            Dd: ma(this.fU, e, !g),
            onError: ma(this.eU, f),
            Xy: ma(this.dU, f)
        };
        c && (a.Ld = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return hl(b, a)
    };
    d.fU = function(a, b, c, e) {
        b ? a(e) : a({
            text: c.responseText
        })
    };
    d.eU = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    d.dU = function(a) {
        a(Error("request timed out"))
    };

    function rl() {
        I.call(this);
        this.currentAd = null;
        this.g = !1;
        this.skipState = 1;
        this.timeUntilSkippable = -1
    }
    B(rl, I);
    de(rl, ["currentAd", "skipState", "timeUntilSkippable"]);

    function sl() {
        I.call(this);
        this.timeLeft = this.percentagePlayed = this.percentageLoaded = this.percentagePlayedStyle = this.percentageLoadedStyle = this.duration = this.currentTime = 0
    }
    B(sl, I);
    de(sl, "currentTime duration percentageLoadedStyle percentagePlayedStyle percentageLoaded percentagePlayed timeLeft".split(" "));

    function tl() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    };

    function ul(a) {
        this.i = a || Array;
        this.j = {}
    }
    B(ul, Gh);
    d = ul.prototype;
    d.parse = function(a, b) {
        var c = b || new this.i;
        a && this.IP(c, a);
        return c
    };
    d.Gy = function() {
        return this.i.CACHE_TYPE
    };
    d.jb = function(a, b) {
        this.j[a] = b
    };
    d.IP = function(a, b) {
        var c = null,
            e;
        for (e in b) c = this.AV(e), c.call(this, a, e, b[e])
    };
    d.AV = function(a) {
        return this.j[a] || this.qQ
    };
    d.qQ = function(a, b, c) {
        b = pg(b, "_");
        b in a && (a[b] = this.Ra(c))
    };
    d.Ra = function(a) {
        return a
    };

    function vl(a) {
        ul.call(this, a);
        this.jb("feed", this.RT);
        this.jb("entry", this.eg);
        this.jb("openSearch$startIndex", this.UT);
        this.jb("openSearch$totalResults", this.VT);
        this.jb("link", this.ST);
        this.jb("openSearch$itemsPerPage", this.TT)
    }
    B(vl, ul);
    d = vl.prototype;
    d.RT = function(a, b, c) {
        return this.parse(c, a)
    };
    d.VT = function(a, b, c) {
        a.ue = this.Ra(c);
        return a
    };
    d.ST = function(a, b, c) {
        b = this.$j(c);
        a.lf = b && "next" == b.rel;
        return a
    };
    d.UT = function(a, b, c) {
        a.lW = this.Ra(c);
        return a
    };
    d.TT = function(a, b, c) {
        a.kW = this.Ra(c);
        return a
    };
    d.eg = function(a, b, c) {
        a.i3 = c;
        return a
    };
    d.$j = function(a) {
        return s(a) ? a[0] : a
    };
    d.Ra = function(a) {
        return (ha(a) || s(a)) && (a = this.$j(a)) && a.$t ? a.$t : ""
    };

    function wl(a, b, c, e, f, g, k, m, n, r, u, t, x) {
        var G = {
            alt: "json",
            key: "AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            v: "2.1"
        };
        x && z(G, x);
        this.h = g;
        Hh.call(this, a, b, c, e, f, k, m, n, r, u, t, G)
    }
    B(wl, Hh);
    d = wl.prototype;
    d.wh = function() {
        return this.g.useStageGdata ? "sgd" : "gd"
    };
    d.dg = function() {
        return this.g.useStageGdata ? "//stage.gdata.youtube.com/feeds/api" : "//gdata.youtube.com/feeds/api"
    };
    d.Ph = function() {
        return this.g.supportsCors ? "GET" : "JSONP"
    };
    d.load = function(a, b, c) {
        var e;
        a && (e = a.query, delete a.query);
        return this.ud(e, b, a, c)
    };
    d.ud = function(a, b, c, e, f) {
        c = c || {};
        c[this.j] = a;
        this.JO(c, this.l);
        var g = b;
        f || (g = function(c) {
            c && (c.serviceQuery = a);
            b && b(c)
        });
        return this.Jh(c, g, e, f)
    };
    d.Rj = function(a, b, c, e) {
        var f = !1,
            g;
        this.h.Cb(y(function(k) {
            if (!f) {
                k && (a.access_token = k);
                k = y(function(a) {
                    c && c(a);
                    this.h.zx()
                }, this);
                var m = y(function(a) {
                    e && e(a);
                    this.h.wo(a)
                }, this);
                g = Hh.prototype.Rj.call(this, a, b, k, m)
            }
        }, this));
        return function() {
            g ? g() : f = !0
        }
    };
    d.JO = function(a, b) {
        b && b.fields && this.oV(b.fields) && (a.fields = this.lV(b.fields))
    };
    d.oV = function(a) {
        return !!Ta(xl, function(b) {
            return C(a, b[0])
        })
    };
    d.lV = function(a) {
        Na(xl, function(b) {
            a = a.replace(b[0], this.tV(b[1]))
        }, this);
        return a
    };
    d.tV = function(a) {
        a = rc(nc(a, function(a) {
            return w(a) ? a.call(this) : a
        }, this));
        return Pa(a, Boolean).join(" and ")
    };
    var xl = [
        ["$default-filter", {
            qV: "not(app:control/yt:state)",
            AW: "media:group/yt:duration/@seconds>0"
        }],
        ["$inline-filter", {
            qV: "not(link/entry/app:control/yt:state)",
            zW: "not(link/entry/app:control/app:draft)"
        }],
        ["$banner-quality", {
            DEFAULT: function() {
                return this.g.yb
            }
        }]
    ];
    wl.inject = "id path csiService ytHttp environmentModel authService cacheService backendErrorReporting localeModel networkStatus parser opt_paramKey opt_params".split(" ");

    function yl(a, b, c, e) {
        this.j = a;
        this.g = b;
        this.p = c;
        this.k = e;
        this.i = this.l = q;
        this.h = null;
        this.p.C("adInfo:changed", y(this.IA, this));
        this.p.C("isPlayingAd:changed", y(this.JA, this))
    }
    d = yl.prototype;
    d.IA = function(a) {
        this.l();
        this.g.currentAd = null;
        (this.h = a) ? ((this.g.g = a.isSkippable) ? (this.g.skipState = 2, this.g.timeUntilSkippable = a.skipTime) : (this.g.skipState = 1, this.g.timeUntilSkippable = -1), this.l = this.k.ud(a.videoId, y(this.IE, this, a.videoId), void 0, q)) : (this.l = q, this.g.g = !1, this.g.skipState = 1, this.g.timeUntilSkippable = -1)
    };
    d.$x = function() {
        3 == this.g.skipState && (this.h.skip(), this.g.skipState = 4)
    };
    d.iQ = function(a) {
        this.h && (this.h.videoId && (a.adVideoId = this.h.videoId), this.h.videoUrl && (a.adVideoUri = this.h.videoUrl), a.isSkippable = this.h.isSkippable, a.isSkipEnabled = 3 == this.g.skipState, a.duration = this.j.duration, a.currentTime = this.j.currentTime, a.clickThroughUrl = this.h.clickThroughUrl)
    };
    d.IE = function(a, b) {
        this.h && this.h.videoId === a && (this.g.currentAd = b.ia.ya(0))
    };
    d.RE = function() {
        this.i == q && (this.i = this.j.C("currentTime:changed", y(this.br, this)))
    };
    d.Hs = function() {
        this.i();
        this.i = q
    };
    d.JA = function(a) {
        a && this.g.g && this.h ? (this.RE(), this.br(this.j.currentTime)) : this.Hs()
    };
    d.br = function(a) {
        a = this.h.skipTime - a;
        0 > a ? (this.g.skipState = 3, this.g.timeUntilSkippable = -1, this.Hs(), this.h.skipShown()) : this.g.timeUntilSkippable = Math.ceil(a)
    };
    yl.inject = ["progressModel", "adModel", "playerFacade", "videoPlaybackInfoService"];

    function zl(a, b) {
        Kg.call(this);
        this.i = q;
        var c = a.Za("start_watch") || a.Za("start_cast") || a.Za("start_dial");
        c && (this.i = y(c.tick, c));
        this.l = b;
        this.h = [];
        this.j = !1;
        this.g = null
    }
    B(zl, Kg);
    d = zl.prototype;
    d.Vz = function(a) {
        this.l.supportedCastVersion && (this.j ? a() : (this.h.push(a), 1 < this.h.length || (this.l.ob ? p("cast.receiver") ? this.Wu() : bg("https://www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js", {
            timeout: 3E4
        }).Sd(y(this.Wu, this)).Hg(function() {
            console.log("Failed to load cast v2 SDK")
        }) : bg("https://www.gstatic.com/cast/js/receiver/1.0/cast_receiver.js", {
            timeout: 3E4
        }).Sd(y(this.GH, this)).Hg(function() {
            console.log("Failed to load cast SDK")
        }), this.i("r_c_srq"))))
    };
    d.GH = function() {
        this.i("r_c_sld");
        if (p("cast.receiver.Receiver")) {
            var a = p("cast.receiver.logger.setLevelValue");
            a && a(900);
            if (this.g = p("cast.receiver.platform")) this.g.addEventListener(cast.receiver.Platform.EventType.VOLUME_CHANGED, y(this.Su, this)), this.g.isReady() && this.Su();
            this.Ru()
        }
    };
    d.Wu = function() {
        this.i("r_c_sld");
        this.Ru()
    };
    d.Ru = function() {
        var a = this.h;
        this.h = [];
        this.j = !0;
        for (var b = a.length, c = 0; c < b; ++c) a[c]()
    };
    d.Su = function() {
        var a = this.g.getVolume(),
            b = !!this.g.getMuted(),
            a = ea(a) ? db(Math.round(100 * a), 0, 100) : -1;
        this.Ka(a, b)
    };
    d.setVolume = function(a) {
        this.g ? this.g.setVolume(a / 100) : this.Ua()
    };
    d.Ez = function(a) {
        this.g ? this.g.setMuted(a) : this.Ua()
    };
    d.Mf = function() {
        this.Ez(!0)
    };
    d.Ke = function() {
        this.Ez(!1)
    };
    zl.inject = ["csiService", "environmentModel"];

    function Al(a, b) {
        for (var c in b) b.hasOwnProperty(c) && a.setAttribute(c, b[c])
    }

    function Bl() {
        var a = new ActiveXObject("MSXML2.DOMDocument");
        if (a) {
            a.resolveExternals = !1;
            a.validateOnParse = !1;
            try {
                a.setProperty("ProhibitDTD", !0), a.setProperty("MaxXMLSize", 2048), a.setProperty("MaxElementDepth", 256)
            } catch (b) {}
        }
        return a
    };

    function Cl(a) {
        var b = {};
        if (1 == a.nodeType && 0 < a.attributes.length)
            for (var c = 0; c < a.attributes.length; ++c) {
                var e = a.attributes.item(c);
                b[e.nodeName.replace(":", "$")] = e.nodeValue
            }
        if (a.hasChildNodes())
            for (a = a.firstChild; a;) 3 == a.nodeType ? (c = "$t", e = a.nodeValue) : (c = a.nodeName.replace(":", "$"), e = Cl(a)), c in b ? (s(b[c]) || (b[c] = [b[c]]), b[c].push(e)) : b[c] = e, a = a.nextSibling;
        return b
    };

    function Dl(a, b, c, e, f, g, k, m, n, r, u, t, x, G, fa) {
        this.ob = f;
        this.la = g;
        this.qa = n;
        this.Ja = x;
        this.O = new Hc;
        this.p = [];
        this.na = 1;
        this.J = 0;
        this.i = {};
        this.L = {};
        this.aa = 1;
        t: if (document.implementation && document.implementation.createDocument) g = document.implementation.createDocument("http://www.w3.org/2005/Atom", "feed", null);
            else {
                if ("undefined" != typeof ActiveXObject && (g = Bl())) {
                    g.appendChild(g.createNode(1, "feed", "http://www.w3.org/2005/Atom"));
                    break t
                }
                throw Error("Your browser does not support creating new documents");
            }
        this.h = new Pd(g);
        Hh.call(this, a, b, c, e, f, k, m, r, u, t, G, fa)
    }
    B(Dl, Hh);
    d = Dl.prototype;
    d.$q = function(a) {
        this.p = a
    };
    d.UB = function(a) {
        Ac(this.i, a);
        a = 0;
        for (var b = this.p.length; a < b; ++a) {
            var c = this.p[a];
            if (this.i[c]) {
                var e = this.Uf(c);
                if (e = this.O.get(e)) e.jf = this.i[c]
            }
        }
    };
    d.Sj = function() {
        return this.p
    };
    d.Id = function(a) {
        a = a || {};
        a.vpsid = this.id;
        return Dl.u.Id.call(this, a)
    };
    d.wh = function() {
        return this.g.useStageGdata ? "sgd" : "gd"
    };
    d.dg = function() {
        return this.ob.useStageGdata ? "//stage.gdata.youtube.com/feeds/api" : "//gdata.youtube.com/feeds/api"
    };
    d.WR = function(a, b, c, e) {
        var f = this.na++,
            g = q,
            k = !1;
        this.la.Cb(y(function(m) {
            k || (m && (b.access_token = m), g = this.zS(b, c, y(this.yS, this, e, a, f)))
        }, this));
        return function() {
            k = !0;
            g()
        }
    };
    d.yS = function(a, b, c, e) {
        if (this.J > c) this.Ys(), a(!1);
        else {
            this.J = c;
            c = 0;
            for (var f = e.length; c < f; ++c)
                if (e[c]) try {
                    var g, k = e[c];
                    if ("string" == typeof k) {
                        var m = k;
                        if ("undefined" != typeof DOMParser) k = (new DOMParser).parseFromString(m, "application/xml");
                        else if ("undefined" != typeof ActiveXObject) {
                            var n = Bl();
                            n.loadXML(m);
                            k = n
                        } else throw Error("Your browser does not support loading xml documents");
                    }
                    g = Cl(k);
                    this.A.parse(g, b)
                } catch (r) {}
                this.$n();
            a(!0)
        }
    };
    d.Rj = function(a, b, c) {
        var e = b || new yi,
            f = {};
        b = this.VR(f);
        e.serviceQuery = a.query;
        e.Mb = this.qa;
        if (0 < b.length) return this.WR(e, a, b, y(function(a, b, c) {
            c && this.Ey(e, b, f);
            a(e)
        }, this, c || q, this.Sj()));
        this.J = this.na++;
        this.Ey(e, this.Sj(), f);
        c && c(e);
        return q
    };
    d.Uf = function(a, b) {
        var c = this.dg() + "/videos/" + a,
            e = xc(this.l || {});
        b && Ac(e, b);
        return Fh(c, e)
    };
    d.VR = function(a) {
        for (var b = [], c = 0, e = this.p.length; c < e; ++c) {
            var f = this.p[c],
                g = this.Uf(f),
                k = this.O.get(g);
            k && "private" != k.errorCode && "unknown" != k.errorCode ? a[g] = k : b.push(f)
        }
        return b
    };
    d.zS = function(a, b, c) {
        for (var e = [], f = [], g = 0, k = b.length; g < k; ++g) {
            var m = b[g],
                n = {};
            m in this.i ? e.push({
                video: m,
                token: this.i[m]
            }) : f.push(m)
        }
        for (k = 0; k < f.length;) n = Math.min(k + 50, f.length), e.push({
            Zw: f.slice(k, n)
        }), k += 50;
        var r = 0,
            u = [],
            f = y(function(a, b) {
                u[a] = b;
                ++r == e.length && (this.vn(), c(u))
            }, this);
        b = {
            v: a.v
        };
        k = {
            v: a.v
        };
        k.access_token = a.access_token;
        a = {
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "Content-Type": "application/atom+xml"
        };
        g = this.Id(k);
        m = [];
        this.ao();
        for (var t = 0, k = e.length; t < k; ++t) {
            var n = e[t],
                x = ma(f, t);
            n.Zw ? m.push(this.k.fe(g, null, this.$N(g, n.Zw), x, null, a)) : m.push(this.aO(n.video, b, n.token, x))
        }
        return ma(function(a) {
            for (var b = 0, c = a.length; b < c; ++b) a[b]()
        }, m)
    };
    d.aO = function(a, b, c, e) {
        a = this.Uf(a, b);
        b = c + ":" + a;
        var f = this.aa++,
            g;
        b in this.L ? (g = this.L[b], g.fk.push(f), g.tb[f] = e) : (g = {
            fk: [f],
            tb: {},
            cancel: q
        }, g.tb[f] = e, this.L[b] = g, e = y(function(a, b, c) {
            delete this.L[b];
            b = 0;
            for (var e = a.fk.length; b < e; ++b) {
                var f = a.fk[b];
                if (f in a.tb) a.tb[f](c)
            }
            a.fk.length = 0;
            a.tb = {}
        }, this, g, b), c = {
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "X-YouTube-VVT": c
        }, g.cancel = this.k.get(a, null, e, ma(e, null), c));
        return y(function(a,
            b, c) {
            delete a.tb[b];
            vc(a.tb) && (delete this.L[c], a.cancel())
        }, this, g, f, b)
    };
    d.tO = function(a, b) {
        var c = this.Ja.get(ue, {
            serviceId: this.id,
            serviceQuery: b,
            listType: "RQ"
        });
        c.channel = new te(this.id, b);
        c.videoId = a;
        c.errorCode = "unknown";
        c.channel.videoId = a;
        return c
    };
    d.Ey = function(a, b, c) {
        if (0 < a.ia.S()) {
            for (var e = a.ia.Fa(), f = 0, g = e.length; f < g; ++f) {
                var k = e[f],
                    m = this.Uf(k.videoId);
                this.O.ah(m, k);
                c[m] = k
            }
            a.ia.clear()
        }
        f = 0;
        for (g = b.length; f < g; ++f) e = b[f], m = this.Uf(e), m in c ? (k = c[m], "notAvailable" != k.errorCode || this.i[e] || (k.errorCode = "private")) : k = this.tO(e, a.serviceQuery), this.i[e] && (k.jf = this.i[e]), a.ia.push(k);
        a.title = "[[Queued Videos|Title above a list of videos that are queued up to be viewed.]]";
        a.kf = "icon-playlist"
    };
    d.createElement = function(a, b) {
        var c = this.h.Gx();
        return c.createElementNS(b || c.documentElement.namespaceURI, a)
    };
    d.bP = function(a) {
        var b = this.Uf(a),
            c = this.createElement("entry"),
            e = this.createElement("id");
        this.h.xo(e, b);
        var f = this.createElement("batch:id", "http://schemas.google.com/gdata/batch");
        this.h.xo(f, a);
        a = this.createElement("link");
        Al(a, {
            rel: "http://schemas.google.com/g/2005#batch",
            type: "application/atom+xml",
            href: b
        });
        this.h.appendChild(c, e);
        this.h.appendChild(c, f);
        this.h.appendChild(c, a);
        return c
    };
    d.$N = function(a, b) {
        var c = this.h.Gx().documentElement;
        sd(c);
        var e = this.createElement("id");
        this.h.xo(e, a);
        var f = this.createElement("batch:operation", "http://schemas.google.com/gdata/batch");
        Al(f, {
            type: "query"
        });
        this.h.appendChild(c, e);
        this.h.appendChild(c, f);
        e = 0;
        for (f = b.length; e < f; ++e) this.h.appendChild(c, this.bP(b[e]));
        if ("undefined" != typeof XMLSerializer) c = (new XMLSerializer).serializeToString(c);
        else if (c = c.xml, !c) throw Error("Your browser does not support serializing XML documents");
        return '<?xml version="1.0" encoding="UTF-8"?>' +
            c
    };
    Dl.inject = "id path csiService ytHttp environmentModel authService cacheService backendErrorReporting listType localeModel networkStatus parser injector opt_paramKey opt_params".split(" ");

    function El(a, b, c, e, f, g, k, m, n, r, u, t, x, G, fa, ga) {
        I.call(this);
        this.zb = a;
        this.Z = b;
        this.g = c;
        this.Ua = e;
        this.Ja = f;
        this.na = g;
        this.ib = k;
        this.W = m;
        this.sa = n;
        this.Kb = r;
        this.l = u;
        this.qa = t;
        this.va = x;
        this.Xb = G;
        this.k = fa;
        this.G = ga;
        this.w = this.Ea = null;
        this.za = !1;
        this.i = null;
        this.j = "";
        this.o = null;
        this.I = new ze;
        this.yb = !1;
        this.L = new ze;
        this.F = this.Ka = "";
        this.p = -1;
        this.la = 0;
        this.U = this.Jb = null;
        this.J = this.g;
        this.A = this.h = this.aa = null;
        this.Ib = this.l.initReversePairingCode;
        this.O = q;
        if (a = a.Za("start_watch") || a.Za("start_cast") ||
            a.Za("start_dial")) this.O = y(a.tick, a);
        this.l.ob ? this.J = this.A = new Fj(this) : this.l.zk && (this.J = this.Ua);
        this.Uz();
        this.Xz();
        this.l.supportedCastVersion && this.Ua.Vz(y(function() {
            this.l.ob ? this.A.Wz(this) : this.A = new ol(this, new Pj);
            this.A.$h(this.Zh() || "");
            this.Tz();
            this.$p(this.o)
        }, this));
        this.Hk()
    }
    B(El, I);
    d = El.prototype;
    d.Uz = function() {
        var a = this.Z.get("mdx-device-id");
        a || (a = tl(), this.Z.Oa("mdx-device-id", a));
        this.Ka = a;
        var a = new bj({
                id: this.Ka,
                name: this.l.o,
                type: "LOUNGE_SCREEN",
                app: "lb-v4",
                theme: this.l.theme
            }),
            b = new ql;
        this.l.useStageMdx && (b.g = "/api/loungedev");
        this.h = new ml(b, this.Z.g, this, this, a, "");
        if (a = this.Z.get("mdx-paired-devices", 31536E3)) this.L.ma(a.map(function(a) {
            return new bj(a)
        })), this.Vi(null)
    };
    d.Bh = function(a, b) {
        this.g.C(a + ":changed", y(b, this))
    };
    d.Xz = function() {
        this.va.C("mdxClearVideo", y(this.dJ, this));
        this.va.C("mdxPlaylistChange", y(this.iJ, this));
        this.Bh("subtitlesTrackList", this.yq);
        this.Bh("subtitlesTrack", this.hJ);
        this.Bh("state", this.Ki);
        this.Bh("isPlayingAd", this.bJ);
        this.Bh("video", this.cJ);
        this.sa.C("skipState:changed", y(function(a) {
            3 == a ? this.Jg(this.ti()) : 4 == a && this.Jg(1082)
        }, this));
        this.l.Ja && this.J.C("volumeData:changed", y(function(a) {
            this.h.Ig(a.volume, a.muted)
        }, this));
        this.C("currentVideoId:changed", y(this.h.Lv, this.h));
        this.C("currentPlayerState:changed",
            y(this.h.kJ, this.h));
        this.C("remote:connected", y(this.eJ, this));
        this.C("remote:disconnected", y(this.fJ, this));
        this.C("remote:status", y(this.gJ, this));
        this.Ja.C("currentTime:changed", y(function() {
            var a = this.me();
            2 <= Math.abs(this.la - a) && this.Ki(this.p);
            this.Hk();
            this.la = a
        }, this));
        this.k.isSupported() && this.k.setSeekCallback(y(this.jJ, this));
        this.ib.C("login-state-changed", y(this.lJ, this))
    };
    d.initialize = function() {
        this.ib.Cb(y(function(a) {
            this.sx(a)
        }, this))
    };
    d.Tz = function() {
        this.J.C("volumeData:changed", y(function() {
            this.A.Io()
        }, this));
        this.C("currentPlayerState:changed", y(this.A.Io, this.A));
        this.C("currentVideoModel:changed", y(this.$p, this))
    };
    d.WL = function() {
        this.h.Lv();
        this.h.iP()
    };
    d.sx = function(a) {
        this.h.co(a);
        if (!this.Zh() && (a = this.Ib, this.Ib = "", a || this.h.Fs() || this.l.ob || this.L.S() || this.l.additionalDataUrlForDial)) {
            this.ku(a);
            return
        }
        this.nm()
    };
    d.Vk = function(a) {
        this.h.fP(y(function(b) {
            a && a(b);
            this.nm()
        }, this))
    };
    d.nm = function() {
        var a = this.Zh() || "";
        this.A && this.A.$h(a);
        if (this.l.additionalDataUrlForDial) {
            var b = decodeURIComponent(this.l.additionalDataUrlForDial);
            b.match(/^https?:\/\/localhost(:\d+)?(\?|\/).*$/) ? a ? this.Nw(b, a) : this.h.mn(y(function(a) {
                this.Nw(b, a ? a.id : "")
            }, this)) : console.warn("Given additionalDataUrl with non-localhost domain: " + b)
        }
    };
    d.Nw = function(a, b) {
        this.Xb.fe(a, null, {
            screenId: b
        });
        this.Xb.get(Fh(a, {
            screenId: b
        }))
    };
    d.ku = function(a) {
        this.Vk(y(function() {
            a && this.h.gP(a, q)
        }, this))
    };
    d.$p = function(a) {
        a ? this.A.so({
            contentId: a.videoId,
            streamType: a.liveBadgeText ? "LIVE" : "BUFFERED",
            contentType: "x-youtube/video",
            metadata: {
                metadataType: 0,
                title: a.title,
                images: [{
                    url: a.imageUrl
                }]
            },
            customData: {
                listId: a.qi,
                currentIndex: this.i ? this.i.activeIndex : 0
            },
            duration: a.duration
        }) : this.A.so()
    };
    d.jJ = function(a) {
        this.Cg(a / 1E3)
    };
    d.du = function() {
        this.Z.remove("mdx-paired-devices");
        this.Z.flush();
        this.L.clear();
        this.I.clear();
        this.h.WE();
        this.g.lj(this.h.kj());
        this.l.additionalDataUrlForDial || this.h.Fs() ? this.Vk() : this.nm()
    };
    d.TF = function() {
        this.Kb.$x()
    };
    d.SG = function(a) {
        this.Kb.iQ(a);
        a.adState = this.ti();
        a.contentVideoId = this.j
    };
    d.play = function() {
        this.xl();
        this.g.ic();
        this.g.isPlayingAd ? this.g.play() : this.Be(this.jc()) && this.Ce()
    };
    d.pause = function() {
        this.g.ic();
        this.g.pause();
        this.Ce()
    };
    d.stop = function() {
        this.g.ic();
        this.g.stop();
        this.Be("")
    };
    d.Cg = function(a) {
        this.g.ic();
        var b = this.Md();
        1081 != b && (0 == b || -1 == b ? this.Be(this.jc(), a) && this.Ce() : this.g.rf() ? this.Ki(this.p) : (this.g.Ni(a, !0), this.Ce()))
    };
    d.SF = function(a, b, c) {
        this.xl();
        this.g.ic();
        this.Be(a, c) && this.Ce()
    };
    d.setVolume = function(a) {
        this.g.ic();
        this.l.Ja ? this.J.setVolume(a) : this.h.Ig(-1, !1)
    };
    d.Hm = function() {
        return this.l.Ja ? this.J.Me() : -1
    };
    d.isMuted = function() {
        return this.l.Ja ? this.J.isMuted() : !1
    };
    d.Pq = function() {
        this.g.ic();
        this.l.Ja ? this.J.Mf() : this.h.Ig(-1, !1)
    };
    d.Qq = function() {
        this.g.ic();
        this.l.Ja ? this.J.Ke() : this.h.Ig(-1, !1)
    };
    d.RF = function(a, b) {
        this.g.ic();
        this.j && this.j == a && (b.name || b.languageCode ? (this.U = b, this.U.videoId = a, this.Is()) : (this.U = null, this.g.ln()))
    };
    d.At = function(a) {
        this.l.l && (a ? this.g.Em(a) : this.g.rJ())
    };
    d.WK = function() {
        var a = null;
        this.l.l && (a = this.g.Dr(), vc(a) && (a = null));
        return a
    };
    d.Dq = function() {
        var a = xc(this.g.Si());
        return !vc(a) && a || null
    };
    d.me = function() {
        return this.j != this.F || this.g.isPlayingAd ? 0 : 1 == this.p || 2 == this.p || 3 == this.p || 0 == this.p ? this.Ja.currentTime : 0
    };
    d.Md = function() {
        return this.g.isPlayingAd ? 1081 : this.j != this.F ? 3 : -1E3 == this.p ? -1E3 : this.p
    };
    d.jc = function() {
        return this.j || ""
    };
    d.FC = function(a, b) {
        return this.h.nP(a, b)
    };
    d.Zh = function() {
        return this.h.tx() || ""
    };
    d.tD = function() {
        this.h.oP()
    };
    d.$e = function(a, b) {
        this.O("r_s_vid");
        return a != this.j ? (this.p = (this.j = a) ? 3 : -1, this.la = 0, this.U = null, b || this.B("currentVideoId:changed", this.j), this.Od(this.Nd()), !0) : !1
    };
    d.Kl = function(a, b) {
        this.O("r_f");
        this.w && (this.w.model.serviceQuery = this.l.ob ? "cast" : "dial");
        this.Nl(y(this.h.zs, this.h), [a], {}, 0, b, !0, !0)
    };
    d.st = function(a) {
        var b = a.videoIds || [];
        a.videoId && b.push(a.videoId);
        this.Tj(function(c) {
            for (var e = 0; e < b.length; e++)
                if (c.videoId == b[e]) {
                    0 == e && (a.videoTitle = c.title, a.videoImageUri = c.imageUrl);
                    c.user = a.user;
                    c.userAvatarUri = a.userAvatarUri;
                    break
                }
        });
        return a
    };
    d.Nl = function(a, b, c, e, f, g, k) {
        this.O("r_s_plylst");
        this.g.ic();
        this.aa && (this.aa(), this.aa = null);
        if (0 == b.length) this.stop(), this.na.$q([]), this.w && this.w.load(q), this.i = null, a([]);
        else {
            if (!this.w) {
                var m = "pair";
                if (this.l.ob) m = "cast";
                else if (this.l.initReversePairingCode || k) m = "dial";
                this.w = new ih(this.na, "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]", "icon-remote", m)
            }
            var n = "",
                m = !1;
            this.i && this.i === this.w || (this.i = this.w, m = !0);
            var r = !1;
            if (void 0 === e) {
                var u = this.jc();
                e = u ? b.indexOf(u) : -1;
                m && u && this.W.wg(this.W.currentVideo, this.i)
            } else 0 > e ? (this.F = "", this.Be("")) : (this.xl(), n = b[e], r = this.$e(n, !0) || !!g);
            0 <= e && this.w.gf(e);
            c && this.na.UB(c);
            this.na.$q(b);
            r && (this.B("currentVideoId:changed", this.j), this.Od(this.Nd()));
            this.w.load(y(function() {
                n && n == this.j && (this.Od(this.Nd()), this.Be(n, f, g, k) && this.Ce());
                a(this.Nk())
            }, this))
        }
    };
    d.Tj = function(a) {
        if (this.i)
            if (this.i instanceof Bi && 0 == this.i.numLoadedPages)
                for (var b = this.i.h, c = 0, e = b.length; c < e; ++c) {
                    var f = b[c];
                    if (f instanceof ue && a(f)) break
                } else
                    for (b = this.i.Kn().Fa(), c = 0, e = b.length; c < e && !(f = b[c], f instanceof ue && a(f)); ++c);
    };
    d.Ol = function() {
        var a = [];
        this.i && (this.i.Na && this.i.Na.id == this.na.id ? a = this.na.Sj() : this.Tj(function(b) {
            a.push(b.videoId)
        }));
        return a
    };
    d.PF = function(a) {
        this.i ? a(this.Nk()) : a([])
    };
    d.Al = function() {
        var a = "unknown";
        this.g.needsLogin ? a = "needsLogin" : this.o && (this.o.errorCode || (this.o.errorCode = "html5.unsupportedlive" == this.g.errorCode ? "liveNotSupported" : "notAvailable"), a = this.o.errorCode);
        return new pl(this.j, a, "PLAYER_ERROR")
    };
    d.bJ = function(a) {
        if (a) {
            this.za = !1;
            var b = this.Ja.C("currentTime:changed", y(function() {
                b();
                this.h.Er();
                this.za = !0;
                this.Jg(this.ti());
                this.vl()
            }, this))
        } else 4 != this.sa.skipState && this.Jg(0)
    };
    d.Jg = function(a) {
        this.za && this.h.DO({
            adState: a,
            currentTime: this.Ja.currentTime,
            isSkipEnabled: 3 == this.sa.skipState
        })
    };
    d.ti = function() {
        if (!this.g.isPlayingAd) return -1;
        if (4 == this.sa.skipState) return 1082;
        switch (this.g.state) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2
        }
        return -1
    };
    d.Ki = function(a) {
        this.F == this.j && this.j && (this.g.isPlayingAd ? this.Jg(this.ti()) : -1E3 == this.p && -1 == a || this.cF(a) || (this.la = this.me(), this.p = a, this.qa.clearTimeout(this.Hb), 0 == a ? this.vl() : this.Hb = this.qa.setTimeout(y(this.vl, this), 50), 1 != a && 2 != a && 3 != a || this.Is(), !this.l.l || (null !== this.Ea && this.qa.clearTimeout(this.Ea), 2 != a && -1E3 != a)) || (this.Ea = this.qa.setTimeout(y(this.dF, this), 36E5)))
    };
    d.dF = function() {
        0 == this.I.S() && this.va.X("exit-application")
    };
    d.cF = function(a) {
        if (-1E3 == a && this.i && this.i == this.w) {
            a = this.na.Sj();
            var b = a.indexOf(this.j);
            if (a = 0 <= b && a[b + 1] || "") return this.Be(a, 0) && this.Ce(), !0
        }
        return !1
    };
    d.vl = function() {
        this.Hb = 0;
        if (this.F == this.j) {
            var a = this.Md();
            1 == a && this.o && this.o.errorCode && (this.o.errorCode = null);
            this.Hk();
            this.B("currentPlayerState:changed", a)
        }
    };
    d.cJ = function() {
        var a = this.W.currentVideo;
        this.la = (this.F = a = a ? a.videoId : "") ? this.me() : 0;
        this.$e(a) || (this.Od(this.Nd()), this.Ki(this.p))
    };
    d.Hk = function() {
        if (this.k.isSupported()) {
            var a = this.o,
                b = 0,
                c = 2;
            1 == this.p ? (b = 1, c = 3) : 2 == this.p ? (b = 0, c = 4) : -1 == this.p && (b = 0, c = 1); - 1 != this.p || this.o || (c = 2);
            2 == c && (a = null);
            var e = this.G.ne();
            this.k.status = c;
            this.k.appMediaId = a && a.videoId || "";
            this.k.videoTitle = a && a.title || "";
            this.k.playbackRate = b;
            this.k.minSeekTime = 0;
            this.k.mediaStartTime = 0;
            this.k.mediaEndTime = a ? 1E3 * this.Ja.duration : 0;
            this.k.maxSeekTime = e ? 0 : this.k.mediaEndTime;
            this.k.playbackPosition = a ? 1E3 * this.Ja.currentTime : 0;
            this.k.sendMediaInfo();
            this.Zn()
        }
    };
    d.Zn = function() {
        if (this.k.isSupported()) {
            var a = this.g.isPlaying,
                b = this.g.isPlayingAd,
                c = this.G.ne(),
                e = {};
            e.PLAY = c ? !1 : !a;
            e.PAUSE = c ? !1 : a;
            e.REWIND = c ? !1 : !b;
            e.FASTFORWARD = c ? !1 : !b;
            e.PREVIOUS = c ? !1 : !b;
            e.NEXT = c ? !1 : !b;
            e.BACK = !0;
            this.k.updateButtonState(e)
        }
    };
    d.dJ = function() {
        this.F = "";
        this.$e("")
    };
    d.iJ = function(a) {
        this.Mk(a.detail)
    };
    d.Mk = function(a) {
        var b = !1;
        if (!this.i || !this.i.Am(a)) {
            var c = "";
            c = a && a != this.w ? (b = a.at()) ? b.videoId || "" : "" : this.j;
            b = this.$e(c, !0);
            this.F = c;
            this.la = 0;
            this.aa && (this.aa(), this.aa = null);
            a instanceof zi && (this.aa = a.C("numLoadedPages:changed", y(this.Mk, this, a)))
        }
        c = !(!a.Na || a.Na.id != this.na.id);
        this.i = a;
        a = this.Nk();
        c ? b && this.B("currentVideoId:changed", this.j) : this.h.zs(a);
        this.Od(this.Nd())
    };
    d.lJ = function(a, b) {
        if (a) {
            var c = !1;
            this.ib.Cb(y(function(a) {
                c || (c = !0, this.h.tx() ? (this.h.co(a), b || this.h.ux("default", a)) : this.sx(a))
            }, this))
        } else this.h.co(""), b && this.h.ux("", "")
    };
    d.Ur = function(a, b, c, e) {
        this.O("r_rq_ply");
        e && a && this.g.IJ();
        this.va.X("request-playback", {
            data: a,
            Ge: b,
            startTime: c
        })
    };
    d.xJ = function(a, b) {
        this.O("r_a_ply");
        var c = this.W.xD();
        c && c.kb && c.kb != this.i.Na.id && this.W.wg(this.W.currentVideo, this.i);
        c = this.g.state;
        if ((0 == c || -1 == c || 2 == c) && this.G.Qi()) {
            this.W.currentVideo = null;
            this.Ir();
            this.va.B("request-close-dialog");
            var e = this.i,
                f = this.Nd();
            if (!f) return !1;
            this.qa.setTimeout(y(function() {
                f.videoId == this.j && this.Ur(f, e, a, b)
            }, this), 250);
            return !0
        }
        if (0 == c) return this.g.yD(a || 0), !1;
        this.g.ii() && this.g.play();
        return !1
    };
    d.Ir = function() {
        var a;
        this.l.useSetsUi ? a = {
            state: "browse-sets",
            Pa: this.G.ev()
        } : a = {
            state: "browse",
            mode: null
        };
        this.va.B("cmd-set-application-state", a)
    };
    d.Wv = function(a, b, c, e, f) {
        this.O("r_m_ply");
        e && f && (a.oc && !a.j || "private" == a.errorCode) && !a.jf || this.Ur(a, b, c, e)
    };
    d.Be = function(a, b, c, e) {
        this.O("r_p_f");
        if (!a) {
            this.$e("", !0);
            this.B("currentVideoId:changed", "");
            this.Od(null);
            if (this.G.La() || this.G.Wc()) this.Ir(), this.va.B("request-close-dialog");
            return !1
        }
        if (!this.i) return !1;
        this.$e(a);
        if ((this.G.La() || this.G.Qi()) && this.W.currentVideo && this.W.currentVideo.videoId == a) return !this.xJ(b, c);
        var f = this.Nd();
        if (!f) {
            var g = this.i;
            this.w.load(y(function() {
                if (a == this.j && g == this.i) {
                    var f = this.Nd();
                    this.Od(f);
                    f ? this.Wv(f, g, b, c, e) : console.warn("MDx ensurePlayerFocus failed to load video for playback request: " +
                        a + ", time=" + b)
                }
            }, this));
            return !1
        }
        this.Od(f);
        this.Wv(f, this.i, b, c, e);
        return !1
    };
    d.Nk = function() {
        var a = [];
        this.Tj(function(b) {
            b.errorCode && "limitedSyndication" != b.errorCode && "private" != b.errorCode && a.push(new pl(b.videoId, b.errorCode, "NOT_PLAYABLE"))
        });
        return a
    };
    d.Nd = function() {
        var a = null,
            b = this.j;
        this.Tj(function(c) {
            if (c.videoId == b) return a = c, !0
        });
        return a
    };
    d.Od = function(a) {
        this.O("r_u_v");
        this.o && a && this.o.videoId == a.videoId || !this.o && !a || (this.o = a, this.B("currentVideoModel:changed", a))
    };
    d.Ce = function() {
        this.G.La() && this.G.Qg() && this.va.B("cmd-set-application-state", {
            mode: "transport"
        })
    };
    d.Vi = function(a) {
        if (a) {
            var b = new bj(a.gx());
            a = b.id.indexOf("#");
            0 < a && (b.id = b.id.substr(0, a));
            var c = !1;
            a = this.L.Fa();
            this.L.ma(a.map(function(a) {
                return a.id == b.id ? (c = !0, b) : a
            }));
            c || (this.L.unshift(b), this.Z.Oa("mdx-paired-devices", this.L.Fa().map(function(a) {
                return a.gx()
            }), 31536E3), this.Z.flush())
        }
        this.L.iO(function(a, b) {
            var c = (a.h ? 0 : 1) - (b.h ? 0 : 1);
            if (0 != c) return c;
            var k = (new cj(a)).displayString,
                c = (new cj(b)).displayString,
                k = String(k).toLowerCase(),
                c = String(c).toLowerCase();
            return k < c ? -1 : k == c ? 0 : 1
        })
    };
    d.gJ = function(a) {
        for (var b = this.L.Fa(), c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            f.h = !1
        }
        this.I.ma(a);
        a = this.I.Fa();
        c = 0;
        for (e = a.length; c < e; ++c) f = a[c], f.h = !0, this.Vi(f);
        this.g.lj(this.h.kj());
        this.B("pairing:changed")
    };
    d.eJ = function(a) {
        var b = this.I.Fa().filter(function(b) {
            return b.id != a.id
        });
        a.h = !0;
        b.unshift(a);
        this.I.ma(b);
        this.Vi(a);
        this.g.lj(this.h.kj());
        this.B("pairing:changed")
    };
    d.fJ = function(a) {
        this.I.ma(this.I.Fa().filter(function(b) {
            return b.id != a.id
        }));
        for (var b = this.L.Fa(), c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            f.id == a.id && (f.h = !1)
        }
        this.Vi(null);
        this.g.lj(this.h.kj());
        this.B("pairing:changed")
    };
    d.hJ = function() {
        if (!this.U && this.j && this.j == this.F) {
            var a = this.Dq();
            !a || a.name || a.languageCode || (a = null);
            this.em(this.Jb, a, !0) || (this.Jb = a, this.h.Eq(this.j, a))
        }
    };
    d.em = function(a, b, c) {
        return a && b ? a.id && b.id && a.id == b.id ? !0 : c ? a.type === b.type && a.format === b.format && a.name === b.name && a.languageCode === b.languageCode : (!a.type || !b.type || a.type === b.type) && (!a.format || !b.format || a.format === b.format) && (!a.name || !b.name || a.name === b.name) && a.languageCode === b.languageCode : !a == !b
    };
    d.yq = function() {
        var a = this.U;
        this.U = null;
        if (a && a.videoId && a.videoId == this.j) {
            for (var b = this.g.Ji(), c = null, e = 0, f = b.length; e < f && (!this.em(b[e], a) || (c = b[e], !this.em(c, a, !0))); ++e);
            c ? this.g.av(c) : this.g.ln()
        }
    };
    d.Is = function() {
        if (this.U && this.j && this.j == this.F)
            if (this.U.videoId != this.j) this.U = null;
            else if (this.g.ul()) {
            var a = this.g.Ji();
            a && a.length ? this.yq() : this.g.cr()
        } else this.U = null
    };
    d.Yh = function() {
        return this.I
    };
    d.ug = function() {
        return this.L
    };
    d.xl = function() {
        this.yb || (this.yb = !0, this.zb.tick("start_dial", "rply_rqd"))
    };
    El.inject = "csiService localStorage playerFacade eurekaService progressModel remoteQueueService authService watchModel adModel adService environmentModel timeService rootDispatcher ytHttp remoteApi applicationState".split(" ");

    function Fl(a, b, c) {
        if (v(b))(b = Gl(a, b)) && (a.style[b] = c);
        else
            for (var e in b) {
                c = a;
                var f = b[e],
                    g = Gl(c, e);
                g && (c.style[g] = f)
            }
    }

    function Gl(a, b) {
        var c = Ia(b);
        if (void 0 === a.style[c]) {
            var e = (Sc ? "Webkit" : Rc ? "Moz" : K ? "ms" : Qc ? "O" : null) + Ja(c);
            if (void 0 !== a.style[e]) return e
        }
        return c
    };

    function Hl() {
        F.call(this);
        this.g = null
    }
    B(Hl, F);
    Hl.prototype.i = function(a, b, c) {
        Fl(a, "background-image", "");
        this.h(a, b, c)
    };
    Hl.prototype.h = function(a, b, c) {
        b && !c || Fl(a, "background-image", "");
        c && Yd(a, c, !0);
        this.g || (this.g = new Image);
        this.g.onload = function() {
            c && Yd(a, c, !1);
            Fl(a, "background-image", "url(" + this.src + ")")
        };
        this.g.src = "";
        this.g.src = b
    };
    Hl.prototype.j = function(a, b) {
        return a && b ? a.replace(/\/[a-z0-9]+\.jpg/, "/" + b + ".jpg") : a
    };
    Hl.prototype.M = function() {
        this.g && (this.g.src = "", this.g = this.g.onload = null);
        Hl.u.M.call(this)
    };

    function Il(a, b, c, e, f, g, k, m, n, r, u, t, x, G, fa, ga, Ya, Fc, Za, Ub, $a, Vb, Oq, hf, Pq, Qq, Rq, Sq) {
        M.call(this);
        this.rd = a;
        this.Ka = b;
        this.i = c;
        this.kd = e;
        this.od = f;
        this.G = g;
        this.qa = k;
        this.O = m;
        this.k = n;
        this.Ua = r;
        this.mg = u;
        this.qd = t;
        this.nd = x;
        this.aa = G;
        this.o = fa;
        this.j = ga;
        this.jg = Ya;
        this.ng = Fc;
        this.pg = Za;
        this.md = Ub;
        this.Lb = $a;
        this.qg = Vb;
        this.g = Oq;
        this.W = hf;
        this.lg = Pq;
        this.Xh = Qq;
        this.rg = Rq;
        this.Sc = -1;
        this.zb = this.GA();
        this.pd = Sq;
        this.Pc = null;
        this.Ea = this.zc = !1;
        this.sa = q;
        this.la = this.Z = this.Ye = this.F = this.J = this.yc = this.kg =
            this.w = this.I = this.A = null;
        this.Rc = this.HA();
        this.za = q
    }
    B(Il, M);
    d = Il.prototype;
    d.ea = function() {
        this.Pc = this.D.querySelector("#spinner-container");
        this.K(this.o, "spinnerShowing:changed", y(this.dM, this));
        this.K(this.o, "state:changed", y(this.vM, this));
        this.C("keydown", y(this.qM, this));
        this.C("keyup", y(this.rM, this));
        this.C("mousemove", this.jg(2, y(this.tM, this)));
        this.C("toggle-loading", y(this.mM, this));
        this.C("row-loaded", y(this.yM, this));
        this.C("next-video", y(fc(this.Af), this));
        this.C("previous-video", y(this.cM, this));
        this.C("request-recent-search", y(this.hM, this));
        this.C("request-search",
            y(this.Jw, this));
        this.C("request-clear-searches", y(this.eM, this));
        this.C("request-settings", y(this.iM, this));
        this.C("request-close-guide", y(this.ZL, this));
        this.C("request-open-guide", y(this.bM, this));
        this.K(this.aa, "dialog:changed", y(this.$L, this));
        this.K(this.aa, "paidScope:changed", y(this.Mu, this));
        this.K(this.Ka, "login-state-changed", y(this.sM, this));
        this.K(this.kd, "pairing:changed", y(this.uM, this));
        this.K(this.W, "update-background", y(this.Gw, this));
        this.K(this.j, "state-change", y(this.zM, this));
        this.K(this.j, "resume", y(this.jM, this));
        this.K(this.j, "suspend", y(this.kM, this));
        this.K(this.j, "request-playback", y(this.wM, this));
        this.K(this.j, "request-playlist-playback", y(this.xM, this));
        this.K(this.j, "engage-change", y(this.oM, this));
        this.K(this.j, "exit-application", y(this.Li, this));
        this.K(this.j, "goto-watch", y(this.pM, this));
        this.K(this.j, "resize-complete", y(this.Fw, this));
        this.K(this.j, "window-focus", y(this.nM, this));
        this.K(this.j, "request-playback-authorization", y(this.fM, this));
        this.K(this.j,
            "request-player-error", y(this.gM, this));
        this.K(this.j, "logout:complete", y(this.aM, this));
        this.K(this.j, "request-debug-console", y(this.lM, this))
    };
    d.ready = function() {
        var a = this.qa.Za("start_watch") || this.qa.Za("start_cast") || this.qa.Za("start_dial") || this.qa.Za("start_browse");
        this.sa = y(a.tick, a);
        this.sa("app_i");
        this.cS();
        this.Gw(this.W.$R());
        this.ZR();
        this.qg.bS();
        this.YR();
        this.Fw();
        this.aS();
        this.sa("app_rdy")
    };
    d.ua = function() {
        var a = Il.u.ua.call(this),
            b = this.Kg(),
            c = (this.g.ci() || "no") + "-state",
            e = (this.g.df() || "no") + "-mode",
            b = (b ? b.Cf() : "no") + "-focused",
            f = this.i.vp,
            g = this.zc ? "engaged" : "",
            k = this.g.Wg() ? "snapped" : "";
        return a.concat([f, c, e, b, g, k, this.Rc ? "" : "blurred"])
    };
    d.cS = function() {
        if (this.i.supportsAccountManager) this.lo(!1);
        else {
            var a = 0;
            this.i.rd && (a = window.loadTimestamp, a = void 0 !== a ? this.O.Uc().getTime() - a : 0, a = Math.max(0, 3E3 - a));
            var b = this.rd.getElementById("loader");
            this.O.setTimeout(function() {
                ud(b)
            }, a)
        }
    };
    d.ZR = function() {
        this.A = this.Aa("browse");
        this.Ye = this.Aa("call-to-cast");
        this.Qc = this.Aa("watch");
        this.F = this.Aa("snap-controls");
        this.yc = this.Aa("search");
        this.kg = this.Aa("dialog");
        this.i.useSetsUi && this.l && (this.w = pe("guide", this.l), this.w.D.id = "guide", this.Va(this.w), this.D.replaceChild(this.w.D, this.D.querySelector("#guide-placeholder")));
        if (this.i.Ka && this.l) {
            var a = pe("voice-footer", this.l);
            this.D.replaceChild(a.D, this.D.querySelector("#voice-footer-placeholder"))
        }
        this.i.md && this.l && (this.la =
            pe("contextMenu", this.l), this.Va(this.la), this.D.replaceChild(this.la.D, this.D.querySelector("#context-menu-placeholder")), this.K(this.la, "contextMenu:changed", y(this.UJ, this)))
    };
    d.fb = function() {
        return !this.isHidden
    };
    d.gK = function() {
        var a = this.k.l;
        if (!this.i.useSetsUi && !a || this.k.j) this.k.load(y(function() {
            this.i.initRow && Ib[this.i.initRow] && this.Fq(Ib[this.i.initRow]);
            this.Fg();
            a || this.rg.g(y(function() {
                this.qa.tick("start_browse", "b_rn")
            }, this))
        }, this)), this.k.l = !0, this.k.j = !1
    };
    d.aS = function() {
        if (this.i.useSetsUi && !this.g.Df()) {
            var a = new lh("FEwhat_to_watch");
            this.X("run-process", a)
        }
    };
    d.Fq = function(a) {
        a = this.k.vw(a); - 1 < a && (this.k.Nb = a)
    };
    d.GA = function() {
        var a = {
            browse: {
                search: {
                    esc: this.Nx
                },
                none: {
                    esc: this.vP
                }
            },
            "browse-sets": {
                none: {
                    esc: this.Kx
                },
                search: {
                    esc: this.Nx
                }
            },
            watch: {
                browse: {
                    esc: this.zP
                },
                search: {
                    esc: this.yP
                },
                title: {
                    down: this.bk,
                    esc: this.Yc,
                    enter: this.xc,
                    fastforward: this.xc,
                    rewind: this.xc
                },
                transport: {
                    up: this.Lx,
                    down: this.bk,
                    esc: this.Lx
                },
                none: {
                    up: this.xc,
                    down: this.bk,
                    esc: this.xP,
                    enter: this.xc,
                    pause: this.xc,
                    fastforward: this.xc,
                    rewind: this.xc,
                    mousemove: this.xc
                }
            },
            dialog: {
                none: {
                    esc: this.bk
                }
            },
            "post-play": {
                none: {
                    esc: this.wP
                }
            },
            settings: {
                none: {
                    esc: this.Kx
                }
            }
        };
        if (this.i.useSetsUi) {
            var b = y(this.pc, this, "guide"),
                c = a.browse.search;
            c.left = b;
            c.right = y(this.Mx, this, "search");
            c = a["browse-sets"].none;
            c.left = b;
            c.right = y(this.Mx, this, "browse-sets");
            c = a.settings.none;
            c.left = b;
            c.right = y(this.pc, this, "settings")
        }
        return a
    };
    d.Mx = function(a) {
        this.w && this.w.ha() && this.pc(a)
    };
    d.vM = function(a) {
        switch (a) {
            case 1:
                this.pd.Ex();
                this.ES();
                break;
            case 0:
                this.DS(), this.W.pj()
        }
    };
    d.dM = function() {
        this.g.La() && this.Hj()
    };
    d.mM = function(a) {
        this.g.La() || (this.Ea = !!a.detail, this.Hj())
    };
    d.Hj = function() {
        var a = this.g.La() ? this.o.spinnerShowing : this.Ea;
        this.Ha(this.Pc, a);
        this.Qc && this.Qc.mJ(a)
    };
    d.ES = function() {
        this.g.mc() ? this.Ul() : (this.O.setTimeout(y(function() {
            var a = this.mg.duration;
            0 < a && (a = Math.min(a / 4, 10), this.o.Iv("add-to-history", a, y(this.YI, this)))
        }, this), 500), this.o.Iv("first-progress", .01, y(this.ZI, this), 2))
    };
    d.YI = function() {
        this.G.vQ();
        var a = this.G.xm(); - 1 == this.k.xQ(a) && 0 < this.od.S() && this.k.wQ(a)
    };
    d.ZI = function() {
        this.W.HS();
        this.hd(!1)
    };
    d.yM = function() {
        (this.g.Wc() || this.g.Sg() && !this.g.Wa() && !this.g.$c()) && this.ew()
    };
    d.cd = function(a) {
        var b = this.g.ci(),
            c = this.g.df() || "none";
        this.zb[b] && this.zb[b][c] && ("esc" === a && this.X("play-sound", "cross-back"), (b = this.zb[b][c][a]) && b.call(this, a))
    };
    d.eK = function() {
        this.Vg();
        this.Ug();
        this.A.ga();
        this.pc("search")
    };
    d.lM = function() {
        this.Z ? this.Z.isHidden = !this.Z.isHidden : this.l && (this.Z = pe("debugConsole", this.l), this.Va(this.Z), this.D.appendChild(this.Z.D))
    };
    d.hK = function() {
        if (!this.I) {
            if (!this.l || !this.i.useSetsUi) return;
            this.I = pe("browse-sets", this.l);
            this.I.D.id = "browse-sets";
            this.Va(this.I);
            this.D.replaceChild(this.I.D, this.D.querySelector("#browse-sets-placeholder"))
        }
        this.pc("browse-sets");
        this.Ug();
        this.A.ga();
        this.j.B("show-startup-dialogs")
    };
    d.Vg = function() {
        this.I && !this.I.isHidden && this.I.ga()
    };
    d.iK = function() {
        if (!this.J) {
            if (!this.l || !this.i.useSetsUi) return;
            this.J = pe("settings", this.l);
            this.J.D.id = "settings";
            this.Va(this.J);
            this.D.replaceChild(this.J.D, this.D.querySelector("#settings-placeholder"))
        }
        this.pc("settings");
        this.Vg();
        this.A.ga()
    };
    d.Ug = function() {
        this.J && !this.J.isHidden && this.J.ga()
    };
    d.Kx = function() {
        this.Yc(!0)
    };
    d.bM = function() {
        this.w && this.w.fa()
    };
    d.ZL = function() {
        this.w && this.w.ha() && this.Dg()
    };
    d.ew = function() {
        this.pc("browse");
        this.Vg();
        this.Ug();
        this.j.B("show-startup-dialogs")
    };
    d.Mu = function(a) {
        this.ng.Oa("needs_rental_auth_dialog", !1);
        a ? this.hd(!1) : this.Ka.ac()
    };
    d.UJ = function(a) {
        a.detail[0] ? this.la.fa() : this.Dg()
    };
    d.fK = function() {
        this.g.Wg() ? (this.F.Ba(), this.F.fa()) : (this.A.ga(), this.Vg(), this.Ug(), this.pc("watch"))
    };
    d.q3 = function() {
        this.g.Wg() ? (this.F.Ba(), this.F.fa()) : (this.A.ga(), this.Vg(), this.Ug(), this.pc("post-play"))
    };
    d.xP = function() {
        this.i.isChromelessContext ? (this.X("mdxClearVideo"), this.Wm()) : this.i.isPlayOnlyContext ? this.Li() : this.g.$c() ? this.aa.Ks() : (this.X("mdxClearVideo"), this.Yc())
    };
    d.wP = function() {
        this.A.ga();
        this.A.Ft();
        this.Yc()
    };
    d.Nx = function() {
        this.j.X("report-search-outcome", "back");
        this.Yc()
    };
    d.fd = function(a) {
        this.j.B("cmd-set-application-state", a)
    };
    d.kl = function() {
        var a = this.g.Vc() || this.g.hf() || this.g.Wc() || this.i.cb(wb) ? "browse" : void 0;
        this.fd({
            state: a,
            mode: "search"
        });
        this.w && this.w.ha() && this.yc.fa()
    };
    d.Nq = function(a) {
        this.fd({
            state: "browse",
            mode: a
        })
    };
    d.bk = function() {
        this.i.isPlayOnlyContext || this.i.isChromelessContext || this.o.isPlayingAd || this.fd({
            mode: "browse"
        })
    };
    d.xc = function() {
        this.O.clearTimeout(this.Sc);
        this.Sc = this.O.setTimeout(y(function() {
            !this.g.La() || this.g.$c() || this.g.Wa() || this.fd({
                mode: "transport"
            })
        }, this), 250)
    };
    d.BH = function() {
        this.fd({
            state: "post-play"
        })
    };
    d.DS = function() {
        !this.g.La() || this.g.Sg() || this.g.Wa() || this.BK()
    };
    d.BK = function() {
        this.i.isPlayOnlyContext || this.i.isChromelessContext || this.g.Wg() ? this.Af(!0) : this.BH()
    };
    d.yP = function() {
        0 === this.o.state ? this.Af() : this.Yc()
    };
    d.zP = function(a) {
        0 === this.o.state ? this.Af(a) : this.xc()
    };
    d.cM = function() {
        var a = this.G.UR();
        a && (this.W.pj(), this.qo(a))
    };
    d.Af = function(a) {
        (a = this.G.next(a)) ? (this.W.pj(), this.qo(a)) : this.i.isPlayOnlyContext ? this.Li() : this.i.useSetsUi ? this.Yc() : this.Nq()
    };
    d.Lx = function() {
        this.fd({
            mode: null
        })
    };
    d.qM = function(a) {
        switch (a.keyCode) {
            case 40:
                this.cd("down");
                break;
            case 38:
                this.cd("up");
                break;
            case 37:
                this.cd("left");
                break;
            case 39:
                this.cd("right");
                break;
            case 75:
            case 19:
            case 32:
                this.cd("pause");
                break;
            case 228:
            case 76:
                this.cd("fastforward");
                break;
            case 227:
            case 74:
                this.cd("rewind");
                break;
            case 8:
            case 27:
                this.g.Yq() || L(a)
        }
    };
    d.rM = function(a) {
        switch (a.keyCode) {
            case 170:
            case 83:
                this.g.Wa() || this.kl();
                break;
            case 172:
            case 71:
                this.j.B("run-process", new dh);
                break;
            case 8:
            case 27:
                this.g.Yq() || L(a);
                this.g.Ze() && a.h ? this.j.B("run-process", new dh) : this.cd("esc");
                break;
            case 13:
                L(a);
                this.cd("enter");
                break;
            case 178:
                this.g.La() && (this.i.useSetsUi ? this.Yc() : this.Nq());
                break;
            case 181:
                this.j.B("show-context-menu")
        }
    };
    d.tM = function() {
        this.cd("mousemove")
    };
    d.bW = function() {
        this.k.cy()
    };
    d.qo = function(a) {
        this.sa("app_s_w_st");
        var b = {};
        b.v = a;
        this.fd({
            state: "watch",
            mode: null,
            Pa: b
        });
        this.Fg();
        this.Ea = !1
    };
    d.jM = function() {
        this.k.j = !0;
        this.i.supportsAccountManager && (this.za = this.Ka.Cb(y(this.EL, this), !0))
    };
    d.EL = function() {
        this.za = q;
        this.lo(!1)
    };
    d.kM = function() {
        this.o.isPlaying && this.o.pause();
        this.i.supportsAccountManager && (this.za(), this.za = q, this.lo(!0))
    };
    d.zM = function() {
        this.Vf(y(this.LU, this))
    };
    d.LU = function() {
        if (this.g.Wc() && !this.G.lc()) this.fd({
            state: "browse"
        });
        else {
            var a = this.g.rb("q");
            a && this.g.Wa() && this.Ua.Bb(decodeURI(a));
            this.g.Wa() || this.yc.ga();
            var a = this.g.rb("dialog"),
                b = this.g.rb("row");
            this.g.mc() && (a || b) && ((a = Jb[a]) && !this.g.$c() && this.X(a), b = Ib[b]) && (this.Fq(b), this.hd(!1));
            this.Dg();
            this.w && (this.w.isHidden = !this.JH());
            if (this.g.mc() || this.g.Vc() || this.g.hf()) this.Ul(), this.g.Wa() || this.G.lq();
            this.IH() && this.Fg();
            this.Hj();
            this.H();
            this.g.vu() && this.W.pj()
        }
    };
    d.JH = function() {
        var a = this.g;
        return a.mc() && a.Wa() || a.Vc() || a.hf()
    };
    d.Dg = function() {
        this.g.Wa() ? this.eK() : this.g.$c() ? this.g.Qi() ? this.Wm() : this.pc("dialog") : this.g.Qi() ? this.Wm() : this.g.Sg() || this.g.Wc() ? (this.gK(), this.ew()) : this.g.Vc() ? this.hK() : this.g.hf() ? this.iK() : this.fK()
    };
    d.IH = function() {
        var a = this.g.zf(),
            b = this.g.xe();
        return this.A && this.g.vu() || this.FJ(b) || this.EJ(a) || this.g.Wc()
    };
    d.EJ = function(a) {
        return this.g.Wa() || "search" === a
    };
    d.FJ = function(a) {
        return this.g.La() && "post-play" == a
    };
    d.YR = function() {
        this.sa("app_p");
        var a = this.i.initVideoId || this.g.rb("v");
        if (this.i.initErrorCode || this.g.La() && !a) this.j.B("request-video-retrieval-error-dialog");
        else {
            a && this.i.initReversePairingCode && this.kd.Kl(a, this.i.initTime);
            if (a = this.i.initSearchQuery) this.Ua.Bb(decodeURIComponent(a)), this.kl();
            this.i.initDialog && this.X(Jb[this.i.initDialog])
        }
    };
    d.Yc = function(a) {
        this.j.B("run-process", new fh(a))
    };
    d.Ul = function() {
        this.o.stop();
        this.G.fo()
    };
    d.lo = function(a) {
        var b = this.rd.getElementById("loader");
        b && Yd(b, "hidden", !a)
    };
    d.Gw = function(a) {
        this.D && this.lg.h(this.D, a)
    };
    d.Zs = function() {
        this.k.UQ();
        this.Ua.Bb("")
    };
    d.hd = function(a, b) {
        a && b ? this.aa.ka(b) : this.g.$c() && this.aa.sc()
    };
    d.$L = function(a) {
        a ? this.pc("dialog") : (this.g.Dv(!1), this.Dg());
        this.g.La() && !a && this.fd({
            state: "watch",
            mode: "transport"
        });
        this.H()
    };
    d.pc = function(a) {
        this.F.isHidden && (this.g.Dv("dialog" === a), a = this.Aa(a), a.Ba(), a.fa(), this.H(), a.fa())
    };
    d.Wm = function() {
        this.Ea = !1;
        this.Hj();
        this.hd(!1);
        this.pc("call-to-cast")
    };
    d.fM = function(a) {
        this.i.l ? this.j.B("request-eureka-authorization-dialog") : (this.j.B("request-login", y(this.PK, this), y(this.OK, this), "PLAYER", a.detail[0]), this.i.loopRows && this.Yr())
    };
    d.PK = function() {
        this.o.Yl();
        this.o.Wi()
    };
    d.OK = function() {
        this.hd(!1);
        this.Yc()
    };
    d.sF = function() {
        this.Mu(!0);
        if (!this.i.useSetsUi) {
            var a;
            this.k.Dc() && (a = this.k.Dc().model.title);
            this.k.load(y(function() {
                this.k.j = this.Lb.XK();
                var b = a ? this.k.vw(a) : -1;
                this.k.Nb = -1 != b ? b : this.k.S() - 1;
                this.k.Ag();
                this.Fg()
            }, this))
        }
        this.jw()
    };
    d.aM = function() {
        this.hd(!1);
        this.Ka.ac();
        this.jw()
    };
    d.jw = function() {
        this.g.La() && this.G.currentVideo && (0 < this.o.state ? this.o.play() : this.o.Wi())
    };
    d.wM = function(a) {
        this.j.B("cmd-playback", a.detail.data, a.detail.Ge, a.detail.startTime, a.detail.xd)
    };
    d.xM = function(a) {
        this.j.B("cmd-playlist-playback", a.detail.data.id, 0, a.detail.Ge)
    };
    d.oM = function(a) {
        (this.zc = !!a.detail[0]) && this.g.La() && this.xc();
        this.H()
    };
    d.pM = function(a) {
        this.hd(!1);
        this.qo(a.detail[0]);
        this.xc()
    };
    d.Fg = function() {
        this.g.La() ? this.A.model = this.G : this.g.Wc() ? (this.qd.load(), this.A.model = this.qd) : this.A.model = this.k
    };
    d.hM = function(a) {
        this.Jw(a);
        this.pg.Ev("history")
    };
    d.Jw = function(a) {
        (a = a.detail) && a.data instanceof Jl && this.Ua.Bb(a.data ? a.data.title : "");
        this.kl()
    };
    d.eM = function() {
        this.Zs()
    };
    d.iM = function() {
        this.fd({
            state: "settings",
            mode: null
        })
    };
    d.uM = function() {
        this.bW()
    };
    d.gM = function(a) {
        this.g.La() && (this.i.l ? this.j.B("request-eureka-player-error-dialog") : this.pd.Gq() && this.j.B("request-player-error-dialog", a.detail, y(this.AD, this), y(this.zD, this)));
        L(a);
        this.i.loopRows && this.Yr()
    };
    d.AD = function() {
        this.hd(!1);
        this.Af()
    };
    d.zD = function() {
        this.hd(!1);
        this.Yc()
    };
    d.Fw = function() {
        this.md.isSupported() && this.i.supportsUploads && ("Snapped" == this.md.getViewState() ? (this.F.Ba(), this.F.fa()) : this.F.isHidden || (this.F.ga(), this.Dg(), this.i.h && this.g.Sg() && this.k && this.k.Dc() && 1 == this.k.Dc().S() && this.O.setTimeout(y(this.H, this), 1)), this.H())
    };
    d.HA = function() {
        return this.i.h && w(document.hasFocus) ? document.hasFocus() : !0
    };
    d.nM = function(a) {
        this.Rc = !!a.detail[0];
        this.H()
    };
    d.Yr = function() {
        this.O.clearTimeout(this.sg);
        this.sg = this.O.setTimeout(y(function() {
            this.hd(!1);
            this.Af(!0)
        }, this), 5E3)
    };
    d.sM = function(a, b) {
        !a && b ? (this.k.load(y(function() {
            this.k.Nb = this.k.S() - 1;
            this.Fg()
        }, this)), this.nd.reset("video_like_value"), this.nd.reset("channel"), this.Lb.clear(), this.od.clear(), this.Zs(), this.g.mc() || this.g.Vc() || this.g.hf() || this.j.B("run-process", new dh)) : a && !b && this.sF()
    };
    d.vP = function() {
        this.g.$c() ? this.aa.sc() : this.Li()
    };
    d.Li = function() {
        this.Ul();
        this.j.B("run-process", new Xg)
    };
    Il.inject = "document authService environmentModel remoteService watchHistoryModel watchModel csiService timeService browseModel searchQueryModel progressModel postPlayModel cacheService dialogService playerFacade rootDispatcher rateLimit localStorage searchReporting systemApi subscriptionsModel router applicationState backgroundService imageUtility searchApi animationFrameService networkStatus".split(" ");

    function Kl(a, b) {
        M.call(this);
        this.i = a;
        this.j = b;
        this.message = ""
    }
    B(Kl, M);
    Kl.prototype.ready = function() {
        this.K(this.j, "update-message", y(this.g, this))
    };
    Kl.prototype.g = function(a) {
        this.message = this.i.T(a.detail || "");
        this.H()
    };
    Kl.inject = ["localeService", "rootDispatcher"];

    function Ll() {
        this.o = this.videoId = this.w = this.title = this.l = this.k = this.p = this.j = this.i = this.description = this.h = this.g = ""
    };

    function Ml() {
        this.h = this.imageUrl = this.g = this.title = ""
    };

    function Nl() {
        this.j = new Ml;
        this.i = new Ll;
        this.h = 0;
        this.hc = "";
        this.g = !1
    };
    /*


     The MIT License.

     Copyright (c) 2010-2012 Google, Inc. http://angularjs.org

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.

     @fileoverview JavaScript parser originally found in Angular.js. Modified for
     Google3 style and Closure integration. Where possible, methods that were
     defined inside of deeper, looped lexical scopes have been pulled up to only
     be defined once. Many definitions require the inner lexical scope to work
     properly and have therefore been left in place.
    */
    var Ol;
    (function() {
        function a(a) {
            if (Vb.hasOwnProperty(a)) return Vb[a];
            var b, c = "var l, fn, p;\n";
            b = a.split(".");
            for (var e = b.length, f = 0; f < e; ++f) var g = b[f],
                c = c + ("if(!s) return s;\nl=s;\ns=" + (f ? "s" : '((k&&k.hasOwnProperty("' + g + '"))?k:s)') + '["' + g + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n');
            c += "return s;";
            b = Function("s", "k", c);
            b.toString = function() {
                return c
            };
            return Vb[a] = b
        }

        function b(a, b, c) {
            b = b.split(".");
            for (var e = 0; 1 < b.length; e++) {
                var f =
                    b.shift(),
                    g = a[f];
                g || (g = {}, a[f] = g);
                a = g
            }
            return a[b.shift()] = c
        }

        function c(c) {
            function e(a) {
                var b = n;
                n++;
                for (var f = "", g = a, m = !1; n < c.length;) {
                    var r = c.charAt(n),
                        g = g + r;
                    if (m) "u" == r ? (r = c.substring(n + 1, n + 5), r.match(/[\da-f]{4}/i) || u("Invalid unicode escape [\\u" + r + "]", c, n), n += 4, f += String.fromCharCode(parseInt(r, 16))) : f = (m = Za[r]) ? f + m : f + r, m = !1;
                    else if ("\\" == r) m = !0;
                    else {
                        if (r == a) {
                            n++;
                            k.push({
                                index: b,
                                text: g,
                                $T: f,
                                je: !0,
                                ub: function() {
                                    return f
                                }
                            });
                            return
                        }
                        f += r
                    }
                    n++
                }
                u("Unterminated quote", c, n, b)
            }

            function f() {
                for (var e = "",
                        g = n, m, r, hf; n < c.length;) {
                    var u = c.charAt(n);
                    if ("." == u || G(u) || ga(u)) "." == u && (m = n), e += u;
                    else break;
                    n++
                }
                if (m)
                    for (r = n; r < c.length;) {
                        u = c.charAt(r);
                        if ("(" == u) {
                            hf = e.substr(m - g + 1);
                            e = e.substr(0, m - g);
                            n = r;
                            break
                        }
                        if (fa(u)) r++;
                        else break
                    }
                g = {
                    index: g,
                    text: e
                };
                if ($a.hasOwnProperty(e)) g.ub = g.je = $a[e];
                else {
                    var t = a(e);
                    g.ub = Fc(function(a, b) {
                        return t(a, b)
                    }, {
                        assign: function(a, c) {
                            return b(a, e, c)
                        }
                    })
                }
                k.push(g);
                hf && (k.push({
                    index: m,
                    text: ".",
                    je: !1
                }), k.push({
                    index: m + 1,
                    text: hf,
                    je: !1
                }))
            }

            function g() {
                for (var a = "", b = n; n < c.length;) {
                    var e =
                        t(c.charAt(n));
                    if ("." == e || ga(e)) a += e;
                    else {
                        var f = n + 1 < c.length ? c.charAt(n + 1) : !1;
                        if ("e" == e && x(f)) a += e;
                        else if (x(e) && f && ga(f) && "e" == a.charAt(a.length - 1)) a += e;
                        else if (!x(e) || f && ga(f) || "e" != a.charAt(a.length - 1)) break;
                        else u("Invalid exponent", c, n)
                    }
                    n++
                }
                a = 1 * a;
                k.push({
                    index: b,
                    text: a,
                    je: !0,
                    ub: function() {
                        return a
                    }
                })
            }
            for (var k = [], m, n = 0, r = [], X, vb = ":"; n < c.length;) {
                X = c.charAt(n);
                if (-1 != "\"'".indexOf(X)) e(X);
                else if (ga(X) || -1 != ".".indexOf(X) && ga(n + 1 < c.length ? c.charAt(n + 1) : !1)) g();
                else if (G(X)) f(), -1 != "{,".indexOf(vb) &&
                    "{" == r[0] && (m = k[k.length - 1]) && (m.je = -1 == m.text.indexOf("."));
                else if (-1 != "(){}[].,;:".indexOf(X)) k.push({
                    index: n,
                    text: X,
                    je: -1 != ":[,".indexOf(vb) && -1 != "{[".indexOf(X) || -1 != "}]:,".indexOf(X)
                }), -1 != "{[".indexOf(X) && r.unshift(X), -1 != "}]".indexOf(X) && r.shift(), n++;
                else if (fa(X)) {
                    n++;
                    continue
                } else {
                    var Ya = X + (n + 1 < c.length ? c.charAt(n + 1) : !1),
                        Gd = $a[X],
                        Ub = $a[Ya];
                    Ub ? (k.push({
                        index: n,
                        text: Ya,
                        ub: Ub
                    }), n += 2) : Gd ? (vb = -1 != "[,:".indexOf(vb) && -1 != "+-".indexOf(X), k.push({
                        index: n,
                        text: X,
                        ub: Gd,
                        je: vb
                    }), n += 1) : u("Unexpected next character ",
                        c, n, n, n + 1)
                }
                vb = X
            }
            return k
        }

        function e(a, b, c) {
            return function(e, f) {
                return b(e, f, a, c)
            }
        }

        function f(a, b) {
            return function(c, e) {
                return a(c, e, b)
            }
        }

        function g(a, b, c, e) {
            k(a, b, c, e) || r("is unexpected, expecting [" + e + "]", c, n(b))
        }

        function k(a, b, c, e, f, g, k) {
            return (e = n(b, e, f, g, k)) ? (a && !e.je && r("is not valid json", c, e), b.shift(), e) : !1
        }

        function m(a) {
            if (0 === a.length) throw Error("Unexpected end of expression.");
            return a[0]
        }

        function n(a, b, c, e, f) {
            if (0 < a.length) {
                a = a[0];
                var g = a.text;
                if (g == b || g == c || g == e || g == f || !(b || c || e || f)) return a
            }
            return !1
        }

        function r(a, b, c) {
            throw Error('Syntax Error: Token "' + c.text + '" ' + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }

        function u(a, b, c, e, f) {
            f = f || c;
            throw Error("Lexer Error: " + a + " at column" + (void 0 !== e ? "s " + e + "-" + c + " [" + b.substring(e, f) + "]" : " " + f) + " in expression [" + b + "].");
        }

        function t(a) {
            return a.toLowerCase()
        }

        function x(a) {
            return "-" == a || "+" == a || ga(a)
        }

        function G(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" == a || "$" == a
        }

        function fa(a) {
            return " " == a || "\r" ==
                a || "\t" == a || "\n" == a || "\v" == a || "\u00a0" == a
        }

        function ga(a) {
            return "0" <= a && "9" >= a
        }

        function Ya() {}

        function Fc(a, b) {
            for (var c = Array.prototype.slice.call(arguments, 1), e = c.length, f = 0; f < e; ++f) {
                var g = c[f],
                    k;
                for (k in g) a[k] = g[k]
            }
            return a
        }
        var Za = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "\t",
                v: "\v",
                "'": "'",
                '"': '"'
            },
            Ub = function(a) {
                return function() {
                    return a
                }
            }(0),
            $a = {
                "null": function() {
                    return null
                },
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                },
                undefined: Ya,
                "+": function(a, b, c, e) {
                    c = c(a, b);
                    e = e(a, b);
                    return (void 0 !== c ? c : 0) +
                        (void 0 !== e ? e : 0)
                },
                "-": function(a, b, c, e) {
                    c = c(a, b);
                    e = e(a, b);
                    return (void 0 !== c ? c : 0) - (void 0 !== e ? e : 0)
                },
                "*": function(a, b, c, e) {
                    return c(a, b) * e(a, b)
                },
                "/": function(a, b, c, e) {
                    return c(a, b) / e(a, b)
                },
                "%": function(a, b, c, e) {
                    return c(a, b) % e(a, b)
                },
                "^": function(a, b, c, e) {
                    return c(a, b) ^ e(a, b)
                },
                "=": Ya,
                "==": function(a, b, c, e) {
                    return c(a, b) == e(a, b)
                },
                "!=": function(a, b, c, e) {
                    return c(a, b) != e(a, b)
                },
                "<": function(a, b, c, e) {
                    return c(a, b) < e(a, b)
                },
                ">": function(a, b, c, e) {
                    return c(a, b) > e(a, b)
                },
                "<=": function(a, b, c, e) {
                    return c(a, b) <= e(a,
                        b)
                },
                ">=": function(a, b, c, e) {
                    return c(a, b) >= e(a, b)
                },
                "&&": function(a, b, c, e) {
                    return c(a, b) && e(a, b)
                },
                "||": function(a, b, c, e) {
                    return c(a, b) || e(a, b)
                },
                "&": function(a, b, c, e) {
                    return c(a, b) & e(a, b)
                },
                "|": function(a, b, c, e) {
                    return e(a, b) | c(a, b)
                },
                "!": function(a, b, c) {
                    return !c(a, b)
                }
            },
            Vb = {};
        Ol = function(t, x, G) {
            function fa() {
                var a = [];
                if ("}" != m(D).text) {
                    do {
                        var b = k(x, D, t),
                            b = b.$T || b.text;
                        g(x, D, t, ":");
                        var c = Gc();
                        a.push({
                            key: b,
                            value: c
                        })
                    } while (k(x, D, t, ","))
                }
                g(x, D, t, "}");
                return function(b, c) {
                    for (var e = {}, f = 0; f < a.length; f++) {
                        var g =
                            a[f],
                            k = g.value(b, c);
                        e[g.key] = k
                    }
                    return e
                }
            }

            function ga() {
                var a = [];
                if ("]" != m(D).text) {
                    do a.push(Gc()); while (k(x, D, t, ","))
                }
                g(x, D, t, "]");
                return function(b, c) {
                    for (var e = [], f = 0; f < a.length; f++) e.push(a[f](b, c));
                    return e
                }
            }

            function $a() {
                var a;
                if (k(x, D, t, "(")) a = ck(), g(x, D, t, ")");
                else if (k(x, D, t, "[")) a = ga();
                else if (k(x, D, t, "{")) a = fa();
                else {
                    var b = k(x, D, t);
                    a = b.ub;
                    a || (b || (b = {
                        index: 1
                    }), r("not a primary expression", t, b))
                }
                for (var c; b = k(x, D, t, "(", "[", ".");) "(" === b.text ? (a = jo(a, c), c = null) : "[" === b.text ? (c = a, a = ho(a)) :
                    "." === b.text ? (c = a, a = io(a)) : r("IMPOSSIBLE", t);
                return a
            }

            function Za() {
                var a;
                return k(x, D, t, "+") ? $a() : (a = k(x, D, t, "-")) ? e(Ub, a.ub, Za()) : (a = k(x, D, t, "!")) ? f(a.ub, Za()) : $a()
            }

            function Vb() {
                for (var a = Za(), b; b = k(x, D, t, "*", "/", "%");) a = e(a, b.ub, Za());
                return a
            }

            function X() {
                var a;
                a = Vb();
                for (var b; b = k(x, D, t, "+", "-");) a = e(a, b.ub, Vb());
                if (b = k(x, D, t, "<", ">", "<=", ">=")) a = e(a, b.ub, X());
                return a
            }

            function vb() {
                var a = X(),
                    b;
                if (b = k(x, D, t, "==", "!=")) a = e(a, b.ub, vb());
                return a
            }

            function ek() {
                var a = vb(),
                    b;
                if (b = k(x, D, t, "&&")) a =
                    e(a, b.ub, ek());
                return a
            }

            function Gd() {
                for (var a = ek(), b;;)
                    if (b = k(x, D, t, "||")) a = e(a, b.ub, ek());
                    else return a
            }

            function Xq() {
                for (var a = [];;)
                    if (0 < D.length && !n(D, "}", ")", ";", "]") && a.push(ck()), !k(x, D, t, ";")) return 1 == a.length ? a[0] : function(b, c) {
                        for (var e, f = 0; f < a.length; f++) {
                            var g = a[f];
                            g && (e = g(b, c))
                        }
                        return e
                    }
            }

            function ho(a) {
                var b = Gc();
                g(x, D, t, "]");
                return Fc(function(c, e) {
                    var f = a(c, e),
                        g = b(c, e),
                        k;
                    if (f) return (f = f[g]) && f.then && (k = f, "$$v" in f || (k.Yy = void 0, k.then(function(a) {
                        k.Yy = a
                    })), f = f.Yy), f
                }, {
                    assign: function(c,
                        e, f) {
                        return a(c, f)[b(c, f)] = e
                    }
                })
            }

            function io(c) {
                var e = k(x, D, t).text,
                    f = a(e);
                return Fc(function(a, b) {
                    return f(c(a, b), b)
                }, {
                    assign: function(a, f, g) {
                        return b(c(a, g), e, f)
                    }
                })
            }

            function jo(a, b) {
                var c = [];
                if (")" != m(D).text) {
                    do c.push(Gc()); while (k(x, D, t, ","))
                }
                g(x, D, t, ")");
                return function(e, f) {
                    for (var g = [], k = b ? b(e, f) : e, m = 0; m < c.length; m++) g.push(c[m](e, f));
                    m = a(e, f) || Ya;
                    return m.apply ? m.apply(k, g) : m(g[0], g[1], g[2], g[3], g[4])
                }
            }

            function Gc() {
                var a = Gd(),
                    b, c;
                return (c = k(x, D, t, "=")) ? (a.assign || u("implies assignment but [" +
                    t.substring(0, c.index) + "] can not be assigned to", t, c.index, c), b = Gd(), function(c, e) {
                    return a.assign(c, b(c, e), e)
                }) : a
            }

            function ck() {
                for (var a = Gc(), b;;)
                    if (b = k(x, D, t, "|")) a = e(a, b.ub, Wq());
                    else return a
            }

            function Wq() {
                for (var a = k(x, D, t), b = G(a.text), c = [];;)
                    if (a = k(x, D, t, ":")) c.push(Gc());
                    else {
                        var e = function(a, e, f) {
                            f = [f];
                            for (var g = 0; g < c.length; g++) f.push(c[g](a, e));
                            return b.apply(a, f)
                        };
                        return function() {
                            return e
                        }
                    }
            }
            var D = c(t),
                dk;
            x ? (Gc = Gd, jo = io = ho = ck = function() {
                    r("is not valid JSON", t, {
                        text: t,
                        index: 0
                    })
                }, dk =
                $a()) : dk = Xq();
            0 !== D.length && r("is an unexpected token", t, D[0]);
            return dk
        }
    })();

    function Pl(a, b, c) {
        if (!a || !a.children) return null;
        var e;
        if (!c && (e = b(a), void 0 !== e && !e)) return a;
        e = a.children;
        for (var f = e.length, g = 0; g < f; ++g) Pl(e[g], b, c);
        c && b(a);
        return a
    };

    function Ql(a) {
        if (!a.g && !a.i) {
            var b = [];
            Pl(a, function(c) {
                var e = [];
                if (c !== a && -1 < c.className.indexOf("$")) return !1;
                var f = c.dataset || {},
                    g;
                for (g in f) e.push(Rl(g, f[g]));
                f = c.attributes;
                g = "IMG" == c.tagName;
                for (var k = 0, m = f.length; k < m; ++k) {
                    var n = f.item(k),
                        r = n.nodeName,
                        n = n.nodeValue,
                        u = Sl,
                        t = Tl;
                    g && "x-src" == r && (r = "src");
                    n && !t.test(r) && u.test(n) && e.push(Ul(r, n))
                }
                0 === c.children.length && c.textContent && (f = c.textContent) && "SCRIPT" !== c.nodeName && Sl.test(f) && e.push(Vl(f));
                0 < e.length && b.push(Wl(c, e))
            });
            Xl(a, b)
        }
    }

    function Xl(a, b) {
        a.h = b;
        a.i = function(b, e) {
            for (var f = 0, g = a.h.length; f < g; ++f) a.h[f](b, e)
        }
    }

    function Wl(a, b) {
        a.g = b;
        return function(b, e) {
            for (var f = 0, g = a.g.length; f < g; f++) a.g[f](a, b, e)
        }
    }

    function Yl(a, b, c) {
        a.g && c.push(Wl(b, a.g));
        a = a.children;
        for (var e = 0, f = a.length; e < f; ++e) {
            var g = a[e]; - 1 == g.className.indexOf("$") && Yl(g, b.children[e], c)
        }
    }
    var Sl = /\{\{(.*)\}\}/m,
        Tl = /^data-/,
        Zl = /^\{\{([^\{]*)\}\}$/,
        $l = /\{\{([^\{]*)\}\}/gm;

    function Ul(a, b) {
        var c = am(b);
        return function(b, f) {
            b.setAttribute(a, c(f))
        }
    }

    function Vl(a) {
        var b = am(a);
        return function(a, e) {
            var f = b ? b(e) : null;
            f != a.textContent && (a.textContent = f)
        }
    }

    function am(a) {
        if (!a || !Sl.test(a)) return null;
        var b = Zl.exec(a);
        return b ? function(a) {
            a = Ol(b[1], !1)(a);
            return null != a ? a : ""
        } : function(b) {
            return a.replace($l, function(a, f) {
                var g = Ol(f, !1)(b);
                return null != g ? g : ""
            })
        }
    }

    function bm(a) {
        if ("true" === a) return !0;
        if ("false" === a) return !1;
        var b = parseInt(a, 10);
        return isNaN(b) ? a : b
    }

    function Rl(a, b) {
        if (Sl.test(b)) {
            var c = am(b);
            return function(b, e, k) {
                e[a] = c(k)
            }
        }
        var e = bm(b);
        return function(b, c) {
            c && b && !b["data-bound-for-" + a] && (c[a] = e, b["data-bound-for-" + a] = !0)
        }
    };

    function cm(a) {
        a = a && a.trim();
        if (!a) throw Error("Can not create Element from empty markup.");
        var b = rd(document, a);
        if (!(b instanceof Element)) throw Error("Element must have a single root, but instead: " + a);
        return b
    };

    function dm(a, b, c, e, f) {
        v(a) && (a = cm(a));
        if (a.ad && b) return ce(b.D), null;
        var g = null;
        if (-1 < a.className.indexOf("$")) {
            if (!c) throw Error("Cannot create components without an injector.");
            var k = em(a);
            if (!k) return null;
            g = fm(a, c, k, b, f);
            if (!g) return null;
            a = g.D
        }
        a.i || Ql(a);
        Pl(a, function(b) {
            if (a !== b && -1 < b.className.indexOf("$")) return dm(b, g, c, null, f), !1;
            c && c.contains(b.nodeName) && !b.EO && (c.get(b.nodeName, {
                element: b
            }), b.EO = !0)
        });
        !g && b && (g = b);
        ce(a, g, b);
        e && g && e.appendChild(g.D);
        g && g.ready instanceof Function && (g.ready(),
            g.isReady = !0);
        return g
    }

    function fm(a, b, c, e, f) {
        var g = c.substr(1);
        Xd(a, c);
        Vd(a, "{{getClassName()}}");
        Vd(a, String(g).replace(/([A-Z])/g, "-$1").toLowerCase());
        b = b.get(g, f);
        b.va && !b.D && (v(b.va) ? b.D = cm(b.va) : b.va instanceof Function && (b.D = b.va()));
        a && b.D ? (vd(b.D, a), Zd(b.D, a), a.className = b.D.className, Ql(a), c = b.D, a.g && 0 < a.g.length && c.h && (c.g ? c.g = a.g.concat(c.g) : c.h.unshift(Wl(c, a.g)))) : b.D = a;
        b.D.ad || (b.D.ad = b);
        b.D.tabIndex = -1;
        b.ea();
        b.UF();
        e && e.Va instanceof Function ? e.Va(b) : b.le = e || null;
        return b
    }

    function em(a) {
        a = Td(a);
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (0 === c.indexOf("$") && "$" !== c) return c
        }
        return ""
    };

    function pe(a, b, c, e, f) {
        b = dm('<div class="$' + a + '"></div>', c, b, e, f);
        if (!b) throw Error("Can not render " + a);
        return b
    };

    function gm(a, b) {
        F.call(this);
        this.l = a;
        this.p = b;
        this.g = null;
        this.i = {};
        this.j = {};
        this.h = null
    }
    B(gm, F);
    gm.prototype.isSupported = function() {
        return this.l.isSupported()
    };
    d = gm.prototype;
    d.Sm = function() {
        return this.l.vy()
    };
    d.Tc = function(a) {
        this.g = a;
        this.g.isSpeakable = this.Km()
    };
    d.pb = function(a, b, c, e, f) {
        c = "boolean" == typeof c ? c : !0;
        this.li(a);
        a = this.p.T(a);
        this.i[a] = this.l.Kw(a, b, e, f);
        c && this.mi(a)
    };
    d.Km = function() {
        return !vc(this.j)
    };
    d.cx = function() {
        for (var a in this.i) this.Bt(this.i[a], a);
        this.g && (this.dm(this.g, !0), this.g.isSpeakable = this.Km())
    };
    d.mi = function(a) {
        a = this.p.T(a);
        var b = this.En(a);
        b && (this.Bt(b, a), this.g && (this.g.isSpeakable = !0))
    };
    d.Bt = function(a, b) {
        a && (!this.j[b] && this.h && this.h.push(b), this.l.addCommand(a), this.j[b] = a)
    };
    d.Ln = function() {
        for (var a in this.i) this.Dt(this.i[a], a);
        this.g && (this.dm(this.g, !1), this.g.isSpeakable = !1)
    };
    d.li = function(a) {
        a = this.p.T(a);
        var b = this.En(a);
        b && (this.Dt(b, a), this.g && (this.g.isSpeakable = this.Km()))
    };
    d.Dt = function(a, b) {
        a && (this.j[b] && this.h && this.h.splice(this.h.Ef(b), 1), this.l.removeCommand(a), delete this.j[b])
    };
    d.ri = function() {
        this.Ln();
        this.i = {}
    };
    d.D4 = function(a) {
        return this.En(this.p.T(a))
    };
    d.En = function(a) {
        return this.i[a] || null
    };
    d.tg = function() {
        this.h || (this.h = new ze(sc(this.j)));
        return this.h
    };
    d.dm = function(a, b) {
        for (var c = 0, e = a.vo(); c < e; ++c) {
            var f = a.Lm(c);
            b ? f.be() : f.Zb();
            f.h || this.dm(f, b)
        }
    };
    d.M = function() {
        this.ri();
        this.g = null;
        this.i = {};
        this.j = {};
        gm.u.M.call(this)
    };
    gm.inject = ["voiceService", "localeService"];

    function W(a, b, c) {
        M.call(this);
        this.i = a;
        this.w = -1;
        this.h = b;
        this.h.Tc(this);
        this.enabled = !0;
        this.A = b.Sm();
        this.j = null;
        this.h.isSupported() && this.K(c, "engage-change", y(this.qa, this))
    }
    B(W, M);
    de(W, ["enabled"]);
    d = W.prototype;
    d.ea = function() {
        W.u.ea.call(this);
        this.j = pe("tile-focus-target", this.l);
        this.j.canBeFocusLeaf = !0;
        this.Va(this.j);
        this.D.insertBefore(this.j.D, this.D.firstChild)
    };
    d.ready = function() {
        W.u.ready.call(this);
        this.C("keyup", y(this.Fo, this));
        this.C("isSpeakable:changed", y(this.la, this));
        this.Ma("tile")
    };
    d.Y = function(a) {
        W.u.Y.call(this, a);
        this.isHidden = !this.model
    };
    d.dd = function() {
        return this.j
    };
    d.Fo = function(a) {
        this.enabled && 13 === a.keyCode && (L(a), this.model && (this.ha() || a.g && ("mouseup" === a.g.type || "touchend" === a.g.type)) && this.Kf())
    };
    d.Kf = function() {
        this.So();
        if (this.model) {
            var a = this.model.gi;
            if (a) switch (a) {
                case "run-process":
                    this.X(a, this.model.processArgs);
                    break;
                case "cmd-navigate-to-endpoint":
                    this.X(a, [this.model.navEndpoint, this.Ca]);
                    break;
                default:
                    this.X(a, {
                        data: this.model
                    })
            }
        }
    };
    d.So = function() {
        this.X("play-sound", "cross-enter")
    };
    d.Lh = function(a, b) {
        var c = !1;
        if (this.h.isSupported()) {
            this.h.ri();
            this.w = b;
            if (this.enabled && a) {
                var e = this.getSpeechPhrase();
                e && (this.h.pb(e, y(this.Kf, this)), c = !0)
            }
            this.A && this.H()
        }
        return c
    };
    W.prototype.getSpeechPhrase = function() {
        return this.enabled && this.model ? this.model.getTitle ? this.model.getTitle() : this.model.title : ""
    };
    W.prototype.la = function() {
        this.A && this.H()
    };
    W.prototype.ua = function() {
        var a = W.u.ua.call(this);
        this.enabled || a.push("disabled");
        return a
    };
    W.prototype.qa = function(a) {
        (this.A = !!a.detail[0]) && this.H()
    };
    W.inject = ["localeService", "voiceHelper", "rootDispatcher"];

    function hm(a, b, c, e, f, g, k, m) {
        W.call(this, a, b, f);
        this.F = c;
        this.aa = e;
        this.J = f;
        this.W = g;
        this.Z = k;
        this.O = m;
        this.I = this.G = null;
        this.countdown = 0;
        this.o = -1;
        this.k = 0;
        this.g = !1;
        this.vF()
    }
    B(hm, W);
    d = hm.prototype;
    d.vF = function() {
        this.W.h && this.K(this.J, "mousemove", y(this.Pe, this));
        this.K(this.J, "engage-change", y(this.Pe, this))
    };
    d.ready = function() {
        hm.u.ready.call(this);
        this.Ma("post-play-tile")
    };
    d.ea = function() {
        hm.u.ea.call(this);
        this.G = this.D.querySelector(".default-title");
        this.I = this.D.querySelector(".next-up-title");
        this.C("keydown", y(this.PP, this))
    };
    d.M = function() {
        this.F.Je(this.o);
        hm.u.M.call(this)
    };
    d.Y = function(a) {
        hm.u.Y.call(this, a);
        this.Pe();
        this.k && (this.countdown = this.k, this.SP());
        this.H(!0)
    };
    d.H = function(a) {
        hm.u.H.call(this, a);
        this.Ha(this.I, this.O.g);
        this.Ha(this.G, !this.O.g)
    };
    hm.prototype.getRowTitle = function() {
        var a = this.Z.lc();
        return this.i.T(a && a.model.title || "")
    };
    d = hm.prototype;
    d.$V = function(a) {
        this.k = a
    };
    d.SP = function() {
        this.o = this.F.cf(y(this.UI, this), 1E3);
        this.g = !0
    };
    d.Lh = function(a, b) {
        a && 1 == b || this.Pe();
        return this.p[0].Lh(a, b)
    };
    d.PP = function() {
        this.Pe()
    };
    d.Pe = function() {
        this.g && (this.g = !1, this.countdown = 0, this.F.Je(this.o), this.H())
    };
    d.UI = function() {
        this.model ? (--this.countdown, 0 === this.countdown ? (this.Pe(), this.X("request-playback", {
            data: this.model,
            autoPlay: !0
        })) : this.H()) : this.Pe()
    };
    d.ua = function() {
        var a = hm.u.ua.call(this);
        this.g && a.push("countdown-active");
        return a
    };
    hm.inject = "localeService voiceHelper timeService document rootDispatcher environmentModel watchModel watchNextModel".split(" ");

    function im() {
        I.call(this);
        this.i = new ze;
        this.h = []
    }
    B(im, I);
    im.prototype.l = function() {
        return this.i
    };
    im.prototype.g = function(a) {
        a.C("items:changed", y(this.j, this));
        this.h.push(a);
        this.j()
    };
    im.prototype.j = function() {
        for (var a = this.i.Fa(), b = [], c = 0, e = this.h.length; c < e; ++c)
            for (var f = this.h[c], g = 0, k = f.S(); g < k; ++g) {
                var m = f.ya(g); - 1 == b.indexOf(m) && b.push(m)
            }
        b.sort();
        t: if (da(a) && da(b) && a.length == b.length) {
            c = a.length;
            for (e = 0; e < c; e++)
                if (a[e] !== b[e]) {
                    a = !1;
                    break t
                }
            a = !0
        } else a = !1;
        a || (this.i.ma(b), this.B("actionsChanged"))
    };

    function jm() {
        this.h = !1;
        this.i = 0;
        this.g = "";
        this.j = 0
    }
    d = jm.prototype;
    d.EM = function(a) {
        a && !this.h ? (this.Ar(), this.h = !0) : !a && this.h && (this.h = !1)
    };
    d.Ar = function() {
        this.j = this.i = 0
    };
    d.Xx = function(a) {
        this.h && (this.i += Math.abs(a))
    };
    d.wC = function(a) {
        a ? a.Na instanceof km ? this.g = "settings" : a.Na instanceof lm ? this.g = "search" : a.Na instanceof mm ? this.g = this.TH(a) : a.Na instanceof U ? this.g = a.j.innerTubeEndpointParams.browseId : this.g = a.Na instanceof pj ? "localHistory" : "unknown" : this.g = ""
    };
    d.TH = function(a) {
        var b = a.Na.jU();
        a = a.model.serviceQuery;
        return re(b, a) || b + a
    };
    d.wy = function(a) {
        this.h && (this.j = a)
    };
    d.wI = function() {
        var a = {};
        a.kpc = this.i;
        a.index = this.j;
        a.row = this.g;
        this.Ar();
        return a
    };

    function nm(a, b, c) {
        Oi.call(this, a, b, c)
    }
    B(nm, Oi);
    nm.prototype.Gd = function(a) {
        var b = this.$a().S();
        if (0 >= b) return 0;
        a = nm.u.Gd.call(this, a);
        return 0 <= a ? a % b : b + ((a + 1) % b - 1)
    };
    nm.prototype.ec = function(a) {
        return nm.u.ec.call(this, a, !0)
    };

    function om() {
        M.call(this);
        this.j = this.model = null;
        this.g = !0;
        this.i = new R;
        this.projection = new nm(this.i, 2, 12)
    }
    B(om, M);
    d = om.prototype;
    d.Y = function(a) {
        om.u.Y.call(this, a);
        this.model && (this.ry(), this.K(this.model, "rows:changed", y(this.ry, this)))
    };
    d.fb = function() {
        return !1
    };
    d.ry = function() {
        var a = this.model.S(),
            b = Math.min(a, 12);
        1 < a && this.projection.S() != b && (this.projection.Ia(9 >= b ? 0 : 2), this.projection.Qt(b), this.H(!0));
        this.i.ma(this.model.sO());
        this.update()
    };
    d.update = function() {
        this.i.Ia(this.model.Nb)
    };
    d.VP = function() {
        this.g = !1;
        this.H()
    };
    d.vC = function() {
        this.g = !0;
        this.H()
    };
    d.ua = function() {
        var a = om.u.ua.call(this);
        this.g && a.push("labels-hidden");
        9 >= this.projection.S() && a.push("mediocre-scroller");
        return a
    };

    function pm(a, b, c, e, f, g, k, m, n, r, u, t, x) {
        M.call(this);
        this.o = b;
        this.aa = a;
        this.G = c;
        this.I = e;
        this.sa = k;
        this.Ka = m;
        this.g = n;
        this.F = r;
        this.qa = u;
        this.za = t;
        this.Ua = x;
        this.Ea = f;
        this.Z = 0;
        this.J = !0;
        this.O = !1;
        this.A = 2;
        this.j = 1;
        this.model = this.i = this.k = null;
        this.W = 0;
        this.w = q;
        this.h = g.get("voiceHelper");
        this.h.isSupported() && this.tA();
        this.K(this.o, "invalidate-uploads", y(this.uA, this));
        this.canBeFocusLeaf = !0
    }
    B(pm, M);
    d = pm.prototype;
    d.ea = function() {
        this.C("keyup", y(this.WN, this));
        this.h.isSupported() && this.C("keyup", y(this.UN, this));
        this.C("button-enter", y(this.VN, this));
        this.C("request-playback", y(this.XN, this));
        this.C("request-playlist-playback", y(this.YN, this));
        this.Ww(100, this.TN, !0);
        this.Ww(8, this.SN, !1);
        this.D.addEventListener("scroll", y(function() {
            this.D.scrollTop = 0;
            this.D.scrollLeft = 0
        }, this), !1)
    };
    d.ready = function() {
        this.i = this.p[0];
        this.k = this.p[1];
        var a = this.Aa("pointer-overlay");
        a.Hb = this.j;
        a.yb = this.j;
        a.Ib = this.A;
        a.Jb = this.A
    };
    d.M = function() {
        this.w();
        this.w = q;
        pm.u.M.call(this)
    };
    d.wa = function() {
        pm.u.wa.call(this);
        this.o.B("record-navigation", "browse");
        this.Ka.Zn();
        this.Lg();
        this.Tx();
        this.K(this.o, "state-change", y(this.Tx, this))
    };
    d.xa = function() {
        pm.u.xa.call(this);
        this.Lg();
        this.Ci();
        this.Td(this.o, "state-change");
        this.w();
        this.w = q
    };
    d.Tx = function() {
        var a;
        this.g.Wa() ? (a = ["back"], this.I.useSetsUi && this.g.mc() ? a.push("guide") : a.push("home")) : a = this.g.mc() ? ["search"] : this.g.La() ? ["back", "home", "search"] : this.g.Wc() ? ["back", this.I.useSetsUi ? "guide" : "home", "search"] : [];
        this.w();
        this.w = this.za.of(a)
    };
    d.tA = function() {
        this.h.pb("[[Scroll left|Speech command to move selection left.]]", y(this.gj, this, -this.A), !1);
        this.h.pb("[[Scroll right|Speech command to move selection back.]]", y(this.gj, this, this.A), !1);
        this.h.pb("[[Scroll down|Speech command to move selection down.]]", y(this.kh, this, this.j), !1);
        this.h.pb("[[Scroll up|Speech command to move selection up.]]", y(this.kh, this, -this.j), !1);
        this.Ua.g(this.h.tg());
        this.h.Tc(this)
    };
    d.Ci = function(a) {
        this.X("update-message", a)
    };
    d.Lg = function() {
        this.h.isSupported() && (this.Mj() ? (this.i.be(), this.FL()) : this.Zb())
    };
    d.FL = function() {
        this.pz();
        this.Ky()
    };
    d.pz = function() {
        1 < this.gU() && this.Mj() ? (this.bd("[[Scroll up|Speech command to move selection up.]]"), this.bd("[[Scroll down|Speech command to move selection down.]]")) : (this.Gc("[[Scroll up|Speech command to move selection up.]]"), this.Gc("[[Scroll down|Speech command to move selection down.]]"))
    };
    d.Ky = function() {
        var a = this.Zc();
        a && (0 < a.activeIndex && this.Mj() ? this.bd("[[Scroll left|Speech command to move selection left.]]") : this.Gc("[[Scroll left|Speech command to move selection left.]]"), a.activeIndex + this.A < a.S() && this.Mj() ? this.bd("[[Scroll right|Speech command to move selection back.]]") : this.Gc("[[Scroll right|Speech command to move selection back.]]"))
    };
    d.uA = function() {
        var a = this.model.Dc();
        a && (a.clear(), this.sj())
    };
    d.Mj = function() {
        return this.g.Wa() || this.ha()
    };
    d.Y = function(a) {
        pm.u.Y.call(this, a);
        this.model && (a = this.model != a.detail[1] || this.k && this.k.model != this.model, this.k.model = this.model, (a || this.model.Nb != this.Z) && this.Qn(), this.K(this.model, "rows:changed", y(this.RL, this)), this.i.model = this.Zc(), this.Lg())
    };
    d.RL = function() {
        this.Lg();
        this.Qn()
    };
    d.xC = function() {
        this.i.Ba()
    };
    d.RG = function() {
        this.i.ga()
    };
    d.WN = function(a) {
        if (this.I.useSetsUi && this.g.mc() && this.g.Wa()) switch (a.keyCode) {
            case 71:
            case 172:
                this.X("request-open-guide"), L(a)
        }
    };
    d.UN = function(a) {
        switch (a.keyCode) {
            case 27:
                this.pz()
        }
    };
    d.VN = function(a) {
        a = a.detail;
        for (var b = 0, c = this.model.S(), e; b < c; b++)
            if (e = this.model.Hy(b), e.Am(a)) {
                a = b - this.model.Nb;
                0 != a && this.kh(a);
                break
            }
    };
    d.Ww = function(a, b, c) {
        c = Ki(c ? [40, 38] : [39, 37]);
        this.C("keydown", this.Ea(a, y(b, this), c))
    };
    d.SN = function(a) {
        var b = !1,
            c = this.j;
        a.detail && a.detail.Oe && (c = a.detail.Oe);
        switch (a.keyCode) {
            case 37:
                b = this.gj(-c);
                break;
            case 39:
                b = this.gj(c)
        }
        b && L(a)
    };
    d.gj = function(a) {
        var b = this.Zc();
        if (!b) return !1;
        var c = this.lR(),
            e = c + a;
        if (0 <= e && e < b.S()) return this.X("play-sound", "same-toggle"), this.mR(c + a), b.jk(a) && this.sj(), this.F.wy(c + a), this.F.Xx(a), !0;
        0 > e && this.X("play-sound", "same-heavy");
        return !1
    };
    d.TN = function(a) {
        switch (a.keyCode) {
            case 38:
            case 33:
                this.kh(-this.j);
                break;
            case 40:
            case 34:
                this.kh(this.j)
        }
    };
    d.kh = function(a) {
        !this.model || 1 >= this.model.S() || (this.O = !0, this.k.VP(), this.X("play-sound", "same-light"), this.Qn(a), this.F.Xx(a))
    };
    d.Qn = function(a) {
        if (this.model) {
            var b = this.model.Nb + (a || 0);
            a = this.model.S();
            b = b % a || 0;
            0 > b && (b += a);
            b != this.model.Nb && (this.RG(), this.g.La() && 0 === this.model.Nb || (this.Ft(), this.o.B("browse-row-change", null)), this.model.Nb = b);
            this.Z = b;
            this.k.update();
            this.sj()
        }
    };
    d.Zc = function() {
        return this.model ? this.model.Dc() : null
    };
    d.gU = function() {
        return this.model ? this.model.S() : 0
    };
    d.lR = function() {
        var a = this.Zc();
        return a ? a.activeIndex : 0
    };
    d.Ft = function() {
        var a = this.Zc();
        a && (a.clear(), this.fa())
    };
    d.mR = function(a) {
        this.Zc().gf(a);
        this.Ky();
        this.F.wy(a)
    };
    d.sj = function() {
        this.G.clearTimeout(this.la);
        this.la = this.G.setTimeout(y(function() {
            this.nR()
        }, this), this.I.zp);
        this.ha() && this.Ci()
    };
    d.nR = function() {
        var a = this.Zc();
        a && (this.O && this.sa.EQ() ? this.sj() : (this.O = !1, this.G.clearTimeout(this.W), this.W = this.G.setTimeout(y(function() {
            this.ha() && this.X("toggle-loading", !0)
        }, this), 500), a.load(y(this.DQ, this), this.J)))
    };
    d.DQ = function() {
        var a = this.Zc();
        this.F.wC(a);
        this.X("row-loaded", a);
        0 == a.S() && this.ha() ? this.Ci(a.hc || "[[No videos are available|The message shown when a row has no videos to show.]]") : 0 < a.S() && this.Ci();
        this.k.vC();
        this.i.model = a;
        this.G.clearTimeout(this.W);
        this.X("toggle-loading", !1);
        this.o.B("browse-row-change", a);
        this.ha() ? a.S() && (this.i.Ba(), this.i.fa()) : this.xC();
        this.J && (this.J = !1, this.qa.g(y(function() {
            this.aa.tick("start_browse", "fr_rn");
            this.aa.report("start_browse")
        }, this)), this.o.B("hide-splash-screen"));
        this.Lg()
    };
    d.XN = function(a) {
        if (a.target != this.D) {
            L(a);
            var b = a.detail.Ge || this.Zc();
            b && this.X("request-playback", {
                data: a.detail.data,
                Ge: b,
                startTime: a.detail.startTime,
                xd: a.detail.xd
            })
        }
    };
    d.YN = function(a) {
        if (a.target !== this.D) {
            L(a);
            var b = a.detail.Ge || this.Zc();
            this.X("request-playlist-playback", {
                data: a.detail.data,
                Ge: b
            })
        }
    };
    pm.inject = "csiService rootDispatcher timeService environmentModel rateLimit injector gestureService remoteService applicationState browseActivity animationFrameService legendModel voiceFooterModel".split(" ");

    function qm(a, b) {
        this.g = a;
        this.h = b
    }
    qm.prototype.parse = function(a, b) {
        var c, e = p("banner.thumbnails", a),
            f = p("thumbnail.thumbnails", a) || p("thumbnails.0.thumbnails", a) || e;
        if (f)
            for (var g = f.length - 1; 0 <= g; --g) {
                var k = f[g].width;
                c = this.h.bj(f[g].url);
                if (0 <= c.indexOf(this.g.qa) || e && k && k === this.g.yb) break;
                k && k > this.g.yb && (c = "")
            }!c && b && (c = this.h.ki(b, this.g.qa));
        return c ? this.h.EG(c) : ""
    };
    qm.inject = ["environmentModel", "ytThumbnails"];

    function rm(a, b) {
        P.call(this);
        this.id = "changeSubscription";
        this.channel = a;
        this.l = b
    }
    B(rm, P);

    function sm(a, b, c, e, f, g) {
        Q.call(this);
        this.i = a;
        this.A = b;
        this.o = c;
        this.w = e;
        this.Lb = f;
        this.L = g;
        this.h = !1
    }
    B(sm, Q);
    sm.prototype.Tb = function() {
        this.g.channel.oc ? (this.i.B("request-paid-channel-subscription-error-dialog", this.g.channel), this.Ga()) : (this.h = !this.A.Ab()) ? this.i.B("ensure-logged-in", y(this.l, this), "SUBSCRIBE") : this.l()
    };
    sm.prototype.l = function() {
        (this.g.l ? this.o : this.w).load({
            channelIds: [this.g.channel.userId]
        }, y(this.j, this), y(this.k, this))
    };
    sm.prototype.j = function() {
        this.g.l ? this.Lb.xi(this.g.channel.username, !1) : this.Lb.jB(this.g.channel.username);
        this.h || (this.L.j = !0);
        this.i.B("subscription-change", this.g.channel.userId, this.g.l);
        this.Ga()
    };
    sm.prototype.k = function(a) {
        this.h && a && 400 === a.g ? this.j() : (this.i.B("request-subscription-error-dialog"), this.Ga())
    };
    sm.inject = "rootDispatcher authService subscribeService unsubscribeService subscriptionsModel browseModel".split(" ");

    function tm(a) {
        M.call(this);
        this.G = a;
        this.F = this.imageUrl = "";
        this.o = q
    }
    B(tm, M);
    tm.prototype.H = function(a) {
        tm.u.H.call(this, a);
        this.D && this.imageUrl && this.imageUrl != this.F && (this.F = this.imageUrl, this.Ma("preloaded"), Vd(this.D, "preloaded"), Fl(this.D, "background-image", ""), this.o(), this.o = this.G.vO(this.imageUrl, y(this.J, this)))
    };
    tm.prototype.J = function() {
        this.Sa("preloaded");
        Xd(this.D, "preloaded");
        Fl(this.D, "background-image", "url(" + this.imageUrl + ")")
    };
    tm.prototype.M = function() {
        this.o();
        this.o = q;
        tm.u.M.call(this)
    };
    tm.inject = ["imageCacheService"];

    function um(a, b, c, e) {
        tm.call(this, a);
        this.k = b;
        this.I = e;
        this.avatarImageURL = this.title = "";
        this.j = !1;
        this.A = !0;
        this.w = this.i = this.g = null;
        this.canBeFocusLeaf = !0;
        this.K(c, "subscription-change", y(this.yC, this))
    }
    B(um, tm);
    d = um.prototype;
    d.ready = function() {
        um.u.ready.call(this);
        this.C("keydown", y(this.ZE, this));
        this.g = this.Bc(".browse-header-trailer");
        this.K(this.g, "button-enter", y(this.YE, this));
        this.i = this.Bc(".browse-header-subscribe");
        this.K(this.i, "button-enter", y(this.XE, this));
        this.w = this.Bc(".browse-header-button-bar")
    };
    d.Gn = function() {
        return this.j
    };
    d.Vq = function(a) {
        this.j !== a && (this.j = a, this.H())
    };
    d.fb = function() {
        return this.A && um.u.fb.call(this)
    };
    d.Cs = function(a) {
        this.A = a;
        a || (this.j = !0)
    };
    d.eC = function() {
        this.g && !this.g.isHidden && this.g.fa()
    };
    d.ZE = function(a) {
        var b = !1;
        switch (a.keyCode) {
            case 37:
            case 39:
                var c = 37 === a.keyCode ? this.g : this.i;
                c.ha() || (c.fa(), b = c.ha());
                break;
            default:
                return
        }
        b && L(a)
    };
    d.Jc = function(a) {
        this.title = vm(a.title);
        this.avatarImageURL = a.avatar.thumbnails[0].url;
        this.imageUrl = a.banner ? this.I.parse(a) : "";
        this.Cs(!(!p("trailerEndpoint", a) && !p("subscribeButton.subscribeButtonRenderer.enabled", a)));
        this.EF(a);
        this.DF(a);
        this.w.isHidden = this.g.isHidden && this.i.isHidden;
        this.$s();
        this.H(!0)
    };
    d.ua = function() {
        var a = um.u.ua.call(this);
        this.Gn() && a.push("collapsed");
        return a
    };
    d.$s = function() {
        this.k.NF(!this.g.isHidden);
        this.k.MF(!this.i.isHidden)
    };
    d.YE = function() {
        this.k.ft("trailer");
        this.X("cmd-load-video-from-service", [this.g.model.payload, 0, !1])
    };
    d.XE = function() {
        var a = this.i.model;
        a && (a.selected || this.k.ft("subscribe"), a = new rm(a.payload, !a.selected), this.X("run-process", a))
    };
    d.EF = function(a) {
        var b = vm(p("trailerButtonText", a)),
            c = null;
        b && (c = new N(b), c.payload = p("trailerEndpoint.watchEndpoint.videoId", a));
        this.g.model = c;
        this.g.isHidden = !c
    };
    d.DF = function(a) {
        var b = null;
        if (a = p("subscribeButton.subscribeButtonRenderer", a)) {
            var b = vm(a.subscribedButtonText),
                c = vm(a.unsubscribedButtonText),
                e = vm(a.unsubscribeButtonText),
                f = new te;
            f.userId = a.channelId;
            f.oc = "PAID" == a.type;
            b = new wm(b, c, "", f, a.subscribed, void 0, !0, e);
            b.enabled = a.enabled;
            b.Xr = !1
        }
        this.i.model = b;
        this.i.isHidden = !b
    };
    d.yC = function(a) {
        var b = a.detail[0];
        a = a.detail[1];
        var c = this.i.model;
        c && c.payload && c.payload.userId === b && c.cc(a)
    };
    um.inject = ["imageCacheService", "browseSetsActivity", "rootDispatcher", "thumbnailParser"];

    function xm(a) {
        Ni.call(this, a)
    }
    B(xm, Ni);
    xm.prototype.Gd = function(a) {
        var b = this.S(),
            c = this.Ij(),
            e = Math.floor(c / b) * b;
        a += e;
        a - Math.floor(a / b) * b < c - e && (a += b);
        return a
    };
    xm.prototype.lx = function(a) {
        var b = this.S(),
            c = this.Ij(),
            e = Math.floor(c / b) * b;
        a - Math.floor(a / b) * b < c - e && (a -= b);
        return a - e
    };
    xm.prototype.Cy = function(a, b) {
        return a !== b && 2 > Math.abs(a - b)
    };

    function ym(a, b, c) {
        Ni.call(this, a);
        this.i = this.g = 0;
        this.p = c || 4;
        this.cj(b || 4)
    }
    B(ym, xm);
    d = ym.prototype;
    d.e4 = function() {
        return this.p
    };
    d.g4 = function() {
        return this.g
    };
    d.z3 = function() {
        return this.i
    };
    d.cj = function(a, b) {
        var c = void 0 !== b ? b : .5 * a;
        if (a !== this.g || c !== this.i) this.g = a, this.i = c, this.um(Math.max(Math.ceil(this.g), 2) + this.p)
    };
    d.um = function(a) {
        a = void 0 !== a ? a : this.S();
        var b = this.$a(),
            c = b.ra() - (this.i - .5),
            c = Math.floor(c - .5 * (a - this.g)),
            c = Math.min(c, b.S() - a),
            c = Math.max(c, 0);
        this.Le(c, a)
    };
    d.xh = function() {
        this.um();
        ym.u.xh.call(this)
    };
    d.yh = function(a, b) {
        b = this.Ve(b);
        this.um();
        a = this.Ve(a);
        a !== b && this.B("selectedIndex:changed", a, b)
    };
    d.Vd = function(a) {
        var b = this.$a(),
            c = b.S();
        if (c <= this.g) return this.Gd(a);
        var b = b.ra(),
            e = this.i - .5;
        if (b <= e) return this.Gd(a);
        e + (c - b) < this.g && (e = this.g - (c - b));
        return e + (this.Gd(a) - b)
    };
    d.Cy = function(a, b) {
        return a !== b && Math.abs(a - b) < this.g
    };

    function zm(a, b, c, e, f) {
        M.call(this);
        this.o = a;
        this.F = b;
        this.G = c;
        this.J = e;
        this.I = f || 0;
        this.g = this.model = null;
        this.j = new R;
        this.i = null;
        this.A = q;
        this.w = !0;
        this.k = null;
        this.canBeFocusLeaf = !0
    }
    B(zm, M);
    d = zm.prototype;
    d.Jf = function() {
        this.l && (this.o.isLimitedAnimation ? this.i = new Oi(this.j, 0, 3) : this.i = new ym(this.j), this.o.useSetsUi && !this.o.isLimitedAnimation && (this.k = pe("sliding-highlighter", this.l, void 0, void 0, {
            opt_tileSpacing: this.I
        }), this.Va(this.k), this.k.model = this.i), this.g = this.J(), this.g.catchKeyPress = !1, this.g.model = this.i, this.Va(this.g))
    };
    d.ea = function() {
        this.K(this.F, "resize-complete", y(this.BG, this));
        this.o.Ka && (this.K(this.F, "engage-change", y(this.AG, this)), this.K(this.F, "state-change", y(this.CG, this)));
        this.k && this.D.appendChild(this.k.D);
        this.D.appendChild(this.g.D)
    };
    d.H = function(a) {
        this.w && (this.dy(), this.w = !1);
        zm.u.H.call(this, a)
    };
    d.AG = function(a) {
        a.detail[0] && this.G.Wa() && this.g instanceof Am && this.g.Oi(!0)
    };
    d.CG = function() {
        this.G.Wa() && this.g instanceof Am && this.g.Oi(!0)
    };
    d.dy = function() {
        if (this.i instanceof ym) {
            for (var a = this; a; a = a.parent)
                if (a.isHidden) return;
            for (var b = this.D; b.offsetParent;) b = b.offsetParent;
            var a = this.D.getBoundingClientRect(),
                b = b.getBoundingClientRect(),
                c = Math.min(a.right, b.right) - a.left,
                e = this.D.offsetHeight * (1 + .01 * this.I),
                f = 0,
                g = 0;
            0 < e && (f = c / e, 1 < f ? (g = (b.left + .5 * b.width - a.left) / e, g = Math.min(Math.max(g, .5), f - .5)) : g = .5 * f);
            this.i.cj(f, g)
        }
    };
    d.Y = function(a) {
        zm.u.Y.call(this, a);
        this.A();
        this.model && (this.K(this.model, "activeIndex:changed", y(this.mI, this)), this.g.itemName = this.model.$ || "", this.jm())
    };
    d.mI = function(a) {
        this.j.Ia(a)
    };
    d.jm = function() {
        if (this.model && this.model.model) {
            var a = this.model.model.ia,
                b = a.Fa(),
                c = !(!b || !b.length);
            this.A();
            this.A = a.C("items:changed", y(this.jm, this));
            c ? (this.j.ma(b, this.model.activeIndex), this.ha() && this.g.fa()) : this.j.clear()
        }
    };
    d.BG = function() {
        this.w || (this.dy(), this.jm())
    };
    zm.inject = ["environmentModel", "rootDispatcher", "applicationState", "listFactory", "opt_tileSpacing"];

    function Bm(a, b, c, e, f, g, k, m, n, r, u, t) {
        M.call(this);
        this.G = a;
        this.w = b;
        this.la = c;
        this.o = e;
        this.aa = f;
        this.za = m;
        this.qa = g;
        this.Z = k;
        this.h = n;
        this.I = r;
        this.i = this.g = this.j = null;
        this.J = !1;
        this.A = !0;
        this.k = q;
        this.F = !1;
        this.platformUserIcon = "";
        this.Ea = "nav-arrows-enabled";
        this.sa = u;
        this.O = t
    }
    B(Bm, M);
    d = Bm.prototype;
    d.ea = function() {
        this.K(this.w, "browse-loading", y(this.fQ, this));
        this.K(this.w, "browse-loaded", y(this.bQ, this));
        this.K(this.w, "browse-load-error", y(this.aQ, this));
        this.C("scroll", y(function() {
            this.D.scrollLeft = 0;
            this.D.scrollTop = 0
        }, this));
        this.K(this.aa, "login-state-changed", y(this.cQ, this));
        this.C("mousemove", this.sa(2, y(this.gQ, this)))
    };
    d.cQ = function(a, b) {
        a !== b && (this.F = !this.jy())
    };
    d.ready = function() {
        Bm.u.ready.call(this);
        this.h.isSupported() && (this.h.pb("[[Scroll up|Speech command to move selection up.]]", y(this.tq, this), !1), this.h.pb("[[Scroll down|Speech command to move selection down.]]", y(this.sq, this), !1), this.za.g(this.h.tg()), this.h.Tc(this));
        this.j = this.Aa("browse-search-bar");
        this.K(this.j, "button-enter", y(this.X, this, "request-search"));
        this.g = this.Aa("browse-header");
        this.i = this.Aa("shelves");
        this.C("keydown", y(this.cB, this));
        this.ni();
        this.C("keyup", y(this.dB, this));
        var a = this.Aa("platform-user-icon");
        this.I.isSupported() && this.I.avatarUrl ? (this.platformUserIcon = this.I.avatarUrl, a.Ba(), a.H()) : a.ga();
        a = this.Aa("pointer-overlay");
        a.Hb = 1;
        a.yb = 1;
        a.Ib = 1;
        a.Jb = 1
    };
    d.wa = function() {
        Bm.u.wa.call(this);
        this.Gg(!this.model);
        this.Jq();
        this.Kq();
        this.ni();
        this.F && this.model && (this.F = !1, this.jy())
    };
    d.jy = function() {
        return "FEwhat_to_watch" === this.o.rb("c") && this.o.Vc() ? (this.w.B("run-process", new Zg("FEwhat_to_watch")), !0) : !1
    };
    d.ZG = function() {
        return this.G.cb(nb) ? !0 : this.G.cb(Bb) ? this.J : this.G.cb(ob) ? this.J || !!this.o.rb("fromGuide") : !1
    };
    d.xa = function() {
        this.Xc() || this.Gg(!1);
        this.Zb();
        this.k();
        this.k = q;
        Bm.u.xa.call(this)
    };
    d.dd = function() {
        return this.g.fb() ? this.L ? this.L : this.g.fb() && !this.ZG() ? this.g : this.i : this.i
    };
    d.Hd = function(a) {
        Bm.u.Hd.call(this, a);
        this.ni();
        this.g.Vq(a !== this.g);
        this.H()
    };
    d.ni = function() {
        this.h.isSupported() && (this.Kg() === this.g || this.Kg() === this.j ? (this.Gc("[[Scroll up|Speech command to move selection up.]]"), this.bd("[[Scroll down|Speech command to move selection down.]]")) : (this.i && 0 >= this.i.g.ra() ? this.bd("[[Scroll up|Speech command to move selection up.]]") : this.Gc("[[Scroll up|Speech command to move selection up.]]"), this.Gc("[[Scroll down|Speech command to move selection down.]]")))
    };
    d.Gg = function(a, b) {
        this.X("toggle-loading", a);
        this.X("update-message", b);
        this.ar(a || !!b);
        a && this.Ma("no-background")
    };
    d.ar = function(a) {
        a = 1 == a;
        this.j.isHidden = a || "FEwhat_to_watch" !== this.o.Df() || this.A;
        this.g.isHidden = a || !this.A;
        this.i.isHidden = a
    };
    d.hC = function(a, b) {
        this.F = !1;
        this.model = a;
        this.J = !!p("header.tvChannelHeaderRenderer.subscribeButton.subscribeButtonRenderer.subscribed", a);
        var c = p("header.tvChannelHeaderRenderer", a);
        this.A = !!c;
        this.Ma("no-background");
        this.A ? (this.g.Jc(c), this.Ma("has-header-content"), this.g.imageUrl && this.Sa("no-background")) : (this.g.Cs(!1), this.Sa("has-header-content"));
        this.i.Jc(this.xF(a), b);
        this.i.wF(p("header.playlistHeaderRenderer", a))
    };
    d.xF = function(a) {
        a = p("contents.sectionListRenderer", a);
        if (!a) return {};
        var b = a.contents;
        if (!b) return {};
        for (var c = [], e = 0; e < b.length; ++e) {
            var f = b[e].shelfRenderer,
                g = p("content.horizontalListRenderer.items", f || {});
            (g && 0 < g.length || !f) && c.push(b[e])
        }
        a.contents = c;
        return a
    };
    d.Jq = function() {
        this.la.DK(!this.g.Gn());
        this.g.$s()
    };
    d.gC = function() {
        this.ni()
    };
    d.cB = function(a) {
        switch (a.keyCode) {
            case 38:
                this.tq();
                break;
            case 40:
                this.sq();
                break;
            default:
                return
        }
        L(a)
    };
    d.tq = function() {
        !this.g.isHidden && this.g.fb() ? this.g.fa() : this.j.isHidden || this.j.fa()
    };
    d.sq = function() {
        this.i.fa()
    };
    d.dB = function(a) {
        switch (a.keyCode) {
            case 71:
            case 172:
                this.X("request-open-guide");
                L(a);
                break;
            case 38:
            case 40:
            case 37:
            case 39:
                L(a);
                this.uy();
                break;
            case 13:
                this.MS(a.target)
        }
    };
    d.ua = function() {
        var a = Bm.u.ua.call(this);
        this.g && this.g.fb() && !this.g.Gn() && a.push("collapsed");
        return a
    };
    d.fQ = function() {
        this.model = null;
        this.Gg(!0)
    };
    d.bQ = function(a) {
        this.L = null;
        this.fC(y(function() {
            this.hC(a.detail[0], a.detail[1]);
            this.ar();
            this.g.Vq(this.dd() !== this.g);
            this.ha() && this.Kq();
            this.i.H();
            this.H();
            this.w.B("hide-splash-screen")
        }, this));
        this.ha() && (this.Gg(!1), this.Jq(), this.dd() == this.g && this.g.eC());
        this.h.isSupported() && this.i.g && this.K(this.i.g, "selectedIndex:changed", y(this.gC, this))
    };
    d.Kq = function() {
        var a = ["search", "guide"];
        this.o.sP() && 2 > this.Z.Da() ? this.G.J && a.push("exit") : a.push("back");
        this.k();
        this.k = this.qa.of(a)
    };
    d.M = function() {
        this.k();
        this.k = q;
        Bm.u.M.call(this)
    };
    d.aQ = function() {
        this.ha() && this.Gg(!1, "[[Unable to load channel|The error message shown when channel page fails to load.]]")
    };
    d.kz = function() {
        this.Ma("nav-arrows-enabled");
        this.H();
        this.O.clearTimeout(this.W);
        this.W = this.O.setTimeout(y(this.uy, this), 3E3)
    };
    d.gQ = function() {
        this.kz()
    };
    d.uy = function() {
        this.O.clearTimeout(this.W);
        this.Sa("nav-arrows-enabled");
        this.H()
    };
    d.rk = function(a) {
        a = Rd(document.activeElement, "keydown", a, !0);
        document.activeElement.dispatchEvent(a)
    };
    d.MS = function(a) {
        this.kz();
        switch (a.id) {
            case "up-arrow":
                this.rk(38);
                break;
            case "down-arrow":
                this.rk(40);
                break;
            case "left-arrow":
                this.rk(37);
                break;
            case "right-arrow":
                this.rk(39)
        }
    };
    Bm.inject = "environmentModel rootDispatcher browseSetsActivity applicationState authService legendModel history voiceFooterModel voiceHelper accountApi rateLimit timeService".split(" ");

    function Cm(a, b, c, e) {
        M.call(this);
        this.A = a;
        this.g = b;
        this.w = c;
        this.k = e;
        this.canBeFocusLeaf = this.j = !0
    }
    B(Cm, M);
    d = Cm.prototype;
    d.wa = function() {
        Cm.u.wa.call(this);
        var a = this.A.cb(sb);
        this.ys();
        this.F = this.g.setTimeout(y(this.AE, this), 3E5);
        a && (this.xs(), this.o = this.g.cf(y(this.BE, this), 15E3), this.CE());
        this.j && (this.j = !1, this.w.report("start_browse"), a && this.Ma("new-end-screens"))
    };
    d.xa = function() {
        Cm.u.xa.call(this);
        this.xs();
        this.ys()
    };
    d.xs = function() {
        this.g.Je(this.o)
    };
    d.ys = function() {
        this.g.clearTimeout(this.F)
    };
    d.CE = function() {
        var a = this.D.querySelectorAll(".end-screen"),
            b = Math.floor(Math.random() * a.length);
        Yd(a[b], "active", !0);
        this.i = b
    };
    d.BE = function() {
        var a = this.D.querySelectorAll(".end-screen"),
            b = (this.i + 1) % a.length;
        Yd(a[this.i], "active", !1);
        Yd(a[b], "active", !0);
        this.i = b
    };
    d.AE = function() {
        this.k.isPlaying || this.k.isPlayingAd || this.X("exit-application")
    };
    Cm.inject = ["environmentModel", "timeService", "csiService", "playerFacade"];

    function Dm(a, b, c, e) {
        W.call(this, a, b, e);
        this.model = null;
        this.decorationClass = c ? "" : "hidden"
    }
    B(Dm, W);
    Dm.prototype.getSpeechPhrase = function() {
        return this.enabled && this.h.isSupported() ? this.i.T("[[Open channel {{n}}|Speech command to open channel number n.]]").replace("{{n}}", String(this.w)) : ""
    };
    Dm.prototype.Kf = function() {
        if (this.model) {
            this.So();
            var a = new lh(this.model.id);
            this.X("run-process", a)
        }
    };
    Dm.inject = ["localeService", "voiceHelper", "showChannelBadge", "rootDispatcher"];

    function Em(a, b, c, e) {
        M.call(this);
        this.k = a;
        this.i = b;
        this.j = c;
        this.model = new R;
        this.g = q;
        this.isHidden = !0;
        this.K(e, "show-context-menu", y(this.DD, this))
    }
    B(Em, M);
    d = Em.prototype;
    d.DD = function(a) {
        0 < a.detail.length && (this.g = a.detail[0]);
        this.Ba()
    };
    d.Hh = function(a, b, c) {
        return new N(a, b, void 0, void 0, c)
    };
    d.HQ = function() {
        var a = [this.Hh("[[Search|Speech command to goto search.]]", "request-search", "icon-search"), this.Hh("[[Settings|Menu item title that allows a user to change settings of the application.|1030265337]]", "request-settings", "icon-player-settings"), this.Hh("[[Help|Context menu title to show help.]]", "request-help-dialog", "icon-player-info"), this.Hh("[[Exit YouTube|Context menu title to exit the app.]]", "exit-application", "icon-exit")];
        this.k.h && a.push(this.Hh("[[Switch Xbox Live Account|Context menu title to let users switch the Xbox Live account they are signed in as.]]",
            "request-platform-login", "icon-platform-switch-users"));
        return a
    };
    d.H = function() {
        Em.u.H.call(this);
        var a = this.Bc(".icon-platform-switch-users"),
            b = this.i.isSupported() ? this.i.avatarUrl : null;
        a && a.D && b && this.j.h(a.D, b)
    };
    d.wa = function() {
        Em.u.wa.call(this);
        this.model.Ia(0)
    };
    d.ea = function() {
        Em.u.ea.call(this);
        this.model.ma(this.HQ());
        this.C("button-enter", y(this.IQ, this));
        this.C("keyup", y(this.KQ, this));
        this.C("keydown", y(this.JQ, this))
    };
    d.Sf = function() {
        Em.u.Sf.call(this);
        this.isHidden && (this.g(), this.g = q);
        this.B("contextMenu:changed", !this.isHidden)
    };
    d.IQ = function(a) {
        L(a);
        this.ga();
        this.X(a.detail.type)
    };
    d.KQ = function(a) {
        L(a);
        switch (a.keyCode) {
            case 27:
            case 181:
                L(a), this.ga()
        }
    };
    d.JQ = function(a) {
        L(a)
    };
    Em.inject = ["environmentModel", "accountApi", "imageUtility", "rootDispatcher"];
    var Fm = {
        DEBUG: "DBG",
        ERROR: "ERR",
        INFO: "INF",
        LOG: "LOG",
        WARN: "WRN"
    };

    function Gm(a) {
        function b(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }
        sc(Fm).forEach(function(c) {
            var e = c.toLowerCase(),
                f = "native" + b(e);
            console[f] = console[e];
            console[e] = function() {
                a(Fm[c], arguments, console[f], console)
            }
        });
        console.info("Console override installed.")
    };

    function Hm(a) {
        M.call(this);
        this.g = new ze;
        a.cf(y(this.j, this), 1E3)
    }
    B(Hm, M);
    Hm.prototype.ready = function() {
        Hm.u.ready.call(this);
        Gm(y(this.i, this))
    };
    Hm.prototype.j = function() {
        this.D.scrollTop = this.D.scrollHeight
    };
    Hm.prototype.i = function(a, b, c, e) {
        a = ab(b, 0).join(" ");
        this.g.push(a);
        b = this.g.S();
        50 < b && (this.g.Fa(), this.g.ma(this.g.slice(b - 50).Fa()));
        c && c.call(e, a);
        c = this.g.Fa().join("<br/>");
        this.D.innerHTML = c
    };
    Hm.inject = ["timeService"];

    function Im(a) {
        M.call(this);
        this.model = a
    }
    B(Im, M);
    Im.prototype.Y = function(a) {
        Im.u.Y.call(this, a);
        this.K(this.model, "items:changed", y(this.H, this))
    };
    Im.prototype.ua = function() {
        var a = Im.u.ua.call(this);
        0 < this.model.S() && a.push("visible");
        return a
    };
    Im.prototype.getText = function() {
        return this.model.Fa().join("")
    };
    Im.inject = ["debugModel"];

    function Jm() {
        M.call(this);
        this.model = null;
        this.message = this.iconClass = ""
    }
    B(Jm, M);
    Jm.prototype.Y = function(a) {
        Jm.u.Y.call(this, a);
        this.model && (this.iconClass = this.g(), this.message = this.getMessage(), this.Fd("isBeingRemoved:changed", y(this.H, this)), this.H())
    };
    Jm.prototype.ua = function() {
        var a = Jm.u.ua.call(this);
        this.model && this.model.isBeingRemoved && a.push("toast-removing");
        return a
    };
    Jm.prototype.g = function() {
        return ""
    };
    Jm.prototype.getMessage = function() {
        return ""
    };

    function Km() {
        Jm.call(this);
        this.model = null;
        this.j = this.i()
    }
    B(Km, Jm);
    Km.prototype.g = function() {
        var a = this.model.device;
        if (this.model.userAvatarUri) return "avatar";
        var b = a.g.match(/^[^-]+-[^-]+/);
        return (b = this.j[b ? b[0] : ""]) ? b[a.h] : a.h ? "remote-connected" : "remote-disconnected"
    };
    Km.prototype.getMessage = function() {
        return this.model.userAvatarUri ? this.model.localizedMessage : (new cj(this.model.device)).displayString
    };
    Km.prototype.i = function() {
        return {
            "android-phone": {
                "true": "android-phone-connected",
                "false": "android-phone-disconnected"
            },
            "android-tablet": {
                "true": "android-tablet-connected",
                "false": "android-tablet-disconnected"
            },
            "youtube-desktop": {
                "true": "laptop-connected",
                "false": "laptop-disconnected"
            },
            "ytios-phone": {
                "true": "ios-phone-connected",
                "false": "ios-phone-disconnected"
            },
            "ytios-tablet": {
                "true": "ios-tablet-connected",
                "false": "ios-tablet-disconnected"
            }
        }
    };

    function Lm(a, b, c, e) {
        W.call(this, a, b, e);
        this.o = this.k = this.F = this.model = null;
        this.g = c;
        this.G = null;
        this.clipTitle = ""
    }
    B(Lm, W);
    d = Lm.prototype;
    d.ea = function() {
        Lm.u.ea.call(this);
        this.F = this.D.querySelector(".video-thumb")
    };
    d.Y = function(a) {
        Lm.u.Y.call(this, a);
        this.vh();
        this.model && (this.Xt(""), this.AP(), this.k = this.model.acquireContext(), this.o = this.k.getThumbnail(y(this.BP, this), y(this.Lu, this)))
    };
    d.Kf = function() {
        this.So();
        this.X("button-enter", {
            data: this.model,
            Rk: this.G,
            title: this.clipTitle
        })
    };
    d.M = function() {
        this.vh();
        this.G = null;
        this.g = this.g.onload = null;
        Lm.u.M.call(this)
    };
    d.vh = function() {
        w(this.o) && this.o();
        this.k && this.k.release();
        this.g && this.g.abort()
    };
    d.BP = function(a) {
        this.g && a ? (this.g.onload = this.g.onload || y(this.iL, this), this.g.readAsDataURL(a)) : this.Lu()
    };
    d.Lu = function() {
        this.vh()
    };
    d.iL = function() {
        var a = this.g.result;
        this.vh();
        this.F && v(a) && (this.Xt(a), this.vh())
    };
    d.Xt = function(a) {
        this.G = a;
        Fl(this.F, "background-image", a ? "url(" + a + ")" : "")
    };
    d.AP = function() {
        var a = this.model;
        a && (this.clipTitle = a.titleName && a.clipName ? a.titleName + " - " + a.clipName : a.titleName || a.clipName || this.i.T("[[Video|Label describing a single video.]]"))
    };
    Lm.prototype.getFormattedDuration = function() {
        return this.model ? this.i.ef(this.model.durationSec) : ""
    };
    Lm.prototype.getFormattedRecordedDate = function() {
        return this.model && this.model.dateRecorded ? this.i.$k(this.model.dateRecorded) : ""
    };
    Lm.prototype.getSpeechPhrase = function() {
        return this.h.isSupported() ? this.i.T("[[Upload video {{n}}|Speech command to upload video number n.]]").replace("{{n}}", String(this.w)) : ""
    };
    Lm.inject = ["localeService", "voiceHelper", "fileReader", "rootDispatcher"];

    function Mm(a) {
        M.call(this);
        this.stopPhrase = a.T("[[Stop listening|Speech command spoken to stop voice engagement.]]");
        this.goBackPhrase = a.T("[[Back|Speech command for going back from the current screen.|642229470]]")
    }
    B(Mm, M);
    Mm.inject = ["localeService"];

    function Nm(a, b) {
        M.call(this);
        this.model = null;
        this.iconClass = "icon";
        this.title = this.iconBackground = "";
        this.i = a;
        this.g = b
    }
    B(Nm, M);
    d = Nm.prototype;
    d.ready = function() {
        this.onEnter || (this.onEnter = y(this.SV, this))
    };
    d.Y = function(a) {
        Nm.u.Y.call(this, a);
        (a = this.model ? this.model.model : null) && !a.title && this.Fd("model:changed", y(this.VQ, this));
        this.ky(a);
        this.H()
    };
    d.VQ = function() {
        if (this.model) {
            var a = this.model.model;
            a && a.title && this.Td(this.model);
            this.ky(a);
            this.H()
        }
    };
    d.ky = function(a) {
        this.title = "";
        this.iconClass = "icon";
        this.iconBackground = "";
        a && (this.title = this.i.T(a.title), this.uP(a.kf))
    };
    d.uP = function(a) {
        this.iconClass = "icon";
        this.iconBackground = "";
        a && (0 == a.lastIndexOf("/", 0) && 0 != a.lastIndexOf("//", 0) ? this.iconBackground = "url(" + this.g + a + ")" : ua(a, ".jpg") || ua(a, ".png") ? this.iconBackground = "url(" + a + ")" : this.iconClass += " " + a)
    };
    d.SV = function(a) {
        Ud(a.target, "icon") && (this.X("button-enter", this.model), L(a))
    };
    Nm.inject = ["localeService", "imagePath"];

    function Om(a, b, c) {
        M.call(this);
        this.V = a;
        this.o = b;
        this.w = c || 100;
        this.k = [];
        this.j = this.i = 0;
        this.g = -1
    }
    B(Om, M);
    Om.prototype.ea = function() {
        /[?&]fps=1/.test(this.V.location.href) ? this.A() : this.ga()
    };
    Om.prototype.A = function() {
        var a = y(function(b) {
            this.j ? this.F(b) : this.j = b;
            this.g = this.o.g(a)
        }, this);
        this.g = this.o.g(a)
    };
    Om.prototype.F = function(a) {
        var b = a - this.j;
        this.k.push(b);
        this.i += b;
        b = this.k.length;
        b == this.w + 1 && (b = this.w, this.i -= this.k.shift());
        b = (1E3 * b / this.i).toFixed(0);
        this.D.textContent = "~" + b + " fps";
        this.j = a
    };
    Om.prototype.M = function() {
        -1 != this.g && (this.o.h(this.g), this.g = -1);
        Om.u.M.call(this)
    };
    Om.inject = ["window", "animationFrameService", "opt_meanCount"];

    function Pm(a, b, c, e) {
        Ni.call(this, a);
        this.o = 0;
        this.g = 1;
        this.p = this.i = 0;
        this.Ls(b, c, e);
        this.qF(y(this.pF, this));
        this.Us(0)
    }
    B(Pm, Ni);
    d = Pm.prototype;
    d.pF = function() {
        return 0 == this.$a().S() ? null : {
            placeholderTileRenderer: {},
            $: "placeholderTile"
        }
    };
    d.ra = function() {
        return this.g
    };
    d.yh = function(a, b) {
        a !== b && this.Us(a)
    };
    d.Ls = function(a, b, c) {
        this.o = b;
        this.p = c;
        this.i = Math.floor((a - this.o) / 2);
        this.Le(this.Ij(), a)
    };
    d.Us = function(a) {
        var b = this.$a(),
            c = this.g,
            e = this.S();
        a < this.i + this.p ? this.g = a + this.o : a >= b.S() - this.i + this.p ? this.g = e - this.o - (b.S() - a) : this.g = this.i + this.p;
        this.Le(a - this.g);
        this.g !== c && this.B("selectedIndex:changed", this.g, c)
    };

    function Qm(a, b) {
        M.call(this);
        this.i = a;
        this.model = null;
        this.isVertical = !1;
        this.selectText = b.T("[[Select|Voice command for selecting the currently highlighted item.]]");
        this.ga()
    }
    B(Qm, M);
    Qm.prototype.Y = function(a) {
        Qm.u.Y.call(this, a);
        this.g(!1);
        this.Fd("selectedIndex:changed", y(this.g, this, !0));
        this.Fd("items:changed", y(this.j, this))
    };
    Qm.prototype.g = function(a) {
        if (this.model && 0 <= this.model.ra()) {
            var b = this.model.Vd(this.model.ra());
            this.D.style.cssText = this.i.g(b, a, this.isVertical);
            this.Ba()
        } else this.ga();
        this.H()
    };
    Qm.prototype.j = function(a) {
        this.g(!!a)
    };
    Qm.inject = ["slidingAnimation", "localeService"];

    function Rm(a, b, c, e, f, g, k, m, n, r, u, t, x, G) {
        M.call(this);
        this.J = a;
        this.W = b;
        this.Z = c;
        this.za = e;
        this.I = f;
        this.sa = g;
        this.O = k;
        this.aa = m;
        this.A = n;
        this.Lb = r;
        this.h = t;
        this.h.Tc(this);
        x.g(this.h.tg());
        this.la = G;
        this.userName = this.userAvatar = "";
        this.g = null;
        this.k = new R;
        this.qa = u;
        this.i = null;
        this.w = !1;
        this.j = q;
        this.canBeFocusLeaf = !0;
        this.k.p = y(this.pA, this);
        this.o = "";
        this.G = this.F = !1;
        this.h.isSupported() && (this.h.pb("[[Scroll down|Speech command to move selection down.]]", y(this.bq, this, 1), !1), this.h.pb("[[Scroll up|Speech command to move selection up.]]",
            y(this.bq, this, -1), !1), this.h.pb("[[Select|Voice command for selecting the currently highlighted item.]]", y(this.qA, this), !1))
    }
    B(Rm, M);
    d = Rm.prototype;
    d.Jf = function() {
        var a;
        this.J.isLimitedAnimation ? a = new Pm(this.k, 10, 0, -1) : a = new ym(this.k, 9.5);
        var b;
        this.J.isLimitedAnimation || (b = {
            animDuration: 50,
            opt_ease: "linear"
        }, this.i = this.iF("sliding-highlighter", b), this.i.isVertical = !0, this.i.model = a, this.Va(this.i));
        this.g = this.la(b);
        this.g.isHidden = !0;
        this.g.isVertical = !0;
        this.g.rateLimit = 20;
        this.g.model = a;
        this.g.re(y(this.Z.g, this.Z, this.W), !0);
        this.Va(this.g)
    };
    d.iF = function(a, b) {
        return pe(a, this.l, void 0, void 0, b)
    };
    d.ea = function() {
        this.i && this.D.appendChild(this.i.D);
        this.D.appendChild(this.g.D);
        this.C("button-enter", y(this.kF, this));
        this.C("keyup", y(this.Qs, this));
        this.C("keydown", y(this.Qs, this));
        this.K(this.I, "login-state-changed", y(this.Ps, this));
        this.K(this.O, "subscription-change", y(this.Ps, this));
        this.K(this.O, "browse-loaded", y(this.Es, this));
        this.K(this.O, "browse-loading", y(this.jF, this));
        this.C("scroll", y(function() {
            this.D.scrollLeft = 0;
            this.D.scrollTop = 0
        }, this))
    };
    d.wa = function() {
        Rm.u.wa.call(this);
        this.Es();
        this.to();
        this.AR();
        this.be()
    };
    d.xa = function() {
        Rm.u.xa.call(this);
        this.g.ga();
        this.j();
        this.j = q;
        var a = {
            a: "guide_closed"
        };
        a.act = this.F ? "nav" : "cancel";
        a.act = this.G ? "searchloop" : a.act;
        a.state = this.A.ci();
        a.mode = this.A.df();
        this.G = this.F = !1;
        this.qa.g("/gen_204", a);
        this.Zb()
    };
    d.AR = function() {
        var a = ["close-guide"];
        this.A.Wa() || a.push("search");
        this.j();
        this.j = this.aa.of(a)
    };
    d.jF = function(a) {
        this.o = a.detail[0];
        this.mx()
    };
    d.mx = function() {
        var a = this.g.model.Db();
        if (this.model && this.o && this.dv(a) != this.o)
            for (var a = this.k.Fa(), b = 0, c = a.length; b < c; ++b)
                if (this.dv(a[b]) == this.o) {
                    this.g.model.$a().Ia(b);
                    break
                }
    };
    d.dv = function(a) {
        return p("guideEntryRenderer.navigationEndpoint.browseEndpoint.browseId", a)
    };
    d.Ps = function() {
        this.model = null;
        this.userName = this.userAvatar = "";
        this.Yx()
    };
    d.bq = function(a) {
        this.g.model.ec(a)
    };
    d.qA = function() {
        var a = this.g.sL();
        a && a.rL()
    };
    d.Es = function() {
        this.model || this.w || (this.w = !0, this.Ma("no-transition"), this.OR(y(this.NR, this)))
    };
    d.NR = function() {
        this.Sa("error");
        this.W.load({}, y(this.BS, this), y(this.AS, this))
    };
    d.OR = function(a) {
        this.I.Ab() ? this.sa.get(y(this.nS, this, a)) : a()
    };
    d.nS = function(a, b) {
        b && (this.userName = b.title, this.userAvatar = b.imageUrl);
        a()
    };
    d.Yx = function() {
        var a = this.I.Ab();
        a ? this.Ma("logged-in") : this.Sa("logged-in");
        this.zR(a);
        this.H()
    };
    d.zR = function(a) {
        var b = this.g.model;
        this.J.isLimitedAnimation ? b.Ls(a ? 8 : 10, a ? 0 : 1, a ? -1 : 0) : b.cj(a ? 7.75 : 9.5)
    };
    d.BS = function(a) {
        this.model = a;
        this.w = !1;
        a = this.TP(a.items);
        this.Yx();
        this.k.ma(a);
        this.mx();
        this.to();
        this.Sa("no-transition");
        this.H()
    };
    d.TP = function(a) {
        for (var b = [], c = 0; c < a.length; ++c) {
            var e;
            t: {
                e = a[c];
                var f = void 0;
                for (f in e) {
                    e = e[f];
                    break t
                }
                e = void 0
            }
            if (e = p("items", e))
                for (0 < c && b.push(a[c]), f = 0; f < e.length; f++) {
                    var g = e[f],
                        k = p("guideEntryRenderer.navigationEndpoint.watchEndpoint", g);
                    g && "guideEntryRenderer" === qc(g) && !k && (b.push(g), (g = p("guideEntryRenderer.navigationEndpoint.browseEndpoint.browseId", g)) && this.Lb.xi(g, !0))
                }
        }
        return b
    };
    d.pA = function(a) {
        return !!a.guideEntryRenderer
    };
    d.to = function() {
        this.ha() && (this.g.Ba(), this.g.fa())
    };
    d.Qs = function(a) {
        switch (a.keyCode) {
            case 38:
            case 40:
                L(a);
                break;
            case 8:
            case 172:
            case 27:
            case 71:
                "keyup" == a.type && this.X("request-close-guide"), L(a)
        }
    };
    d.kF = function(a) {
        a = a.detail.payload;
        this.F = !0;
        a && a.searchEndpoint && this.A.Wa() && (this.G = !0);
        this.X("cmd-navigate-to-endpoint", [a, this.Ca]);
        this.X("request-close-guide")
    };
    d.AS = function() {
        this.model = {};
        this.w = !1;
        this.Ma("error");
        this.H(!1);
        this.to()
    };
    d.M = function() {
        this.j();
        this.j = q;
        Rm.u.M.call(this)
    };
    Rm.inject = "environmentModel guideService inflater localeService authService userProfileCache rootDispatcher legendModel applicationState subscriptionsModel reportingService voiceHelper voiceFooterModel listFactory".split(" ");

    function vm(a) {
        if (v(a)) return a;
        if (!a || !p("runs.length", a)) return "";
        for (var b = "", c = 0, e = a.runs.length; c < e; ++c) b += a.runs[c].text;
        return b
    };

    function Y(a, b, c) {
        M.call(this);
        this.g = a;
        this.h = b;
        this.w = c;
        this.model = null;
        this.iconClass = "";
        this.k = q;
        this.h.Tc(this);
        this.canBeFocusLeaf = !0
    }
    B(Y, M);
    d = Y.prototype;
    d.ready = function() {
        this.Mv()
    };
    d.Ba = function() {
        Y.u.Ba.call(this);
        this.be()
    };
    d.ga = function() {
        Y.u.ga.call(this);
        this.Zb()
    };
    d.fb = function(a) {
        return !this.Qh() && Y.u.fb.call(this, a)
    };
    d.Y = function(a) {
        Y.u.Y.call(this, a);
        this.model && (this.model.label = this.g.T(this.model.label), this.Fd("enabled:changed", y(this.Ah, this)), this.Mv());
        this.Ah()
    };
    d.Mv = function() {
        this.k();
        this.k = this.model && this.model.rateLimit ? this.C("keydown", this.w(this.model.rateLimit, y(this.Zx, this))) : this.C("keyup", y(this.Zx, this))
    };
    d.Zx = function(a) {
        13 == a.keyCode && this.We(a)
    };
    d.Ah = function() {
        this.h.ri();
        this.model && this.model.$g && this.model.isSpeakable && this.model.enabled && this.h.pb(this.model.$g, y(this.LO, this), void 0, void 0, this.model.aq)
    };
    d.LO = function() {
        if (this.D) {
            if (w(this.onEnter)) this.onEnter();
            this.We()
        }
    };
    d.rL = function() {
        this.We()
    };
    d.We = function(a) {
        a && L(a);
        this.Qh() || this.X("button-enter", this.model)
    };
    d.Qh = function() {
        return !!this.model && !this.model.enabled
    };
    d.ua = function() {
        var a = Y.u.ua.call(this);
        this.Qh() && a.push("disabled");
        this.model && this.model.buttonClass && a.push(this.model.buttonClass);
        return a
    };
    Y.inject = ["localeService", "voiceHelper", "rateLimit"];

    function Sm(a, b, c, e) {
        Y.call(this, a, b, c);
        this.i = e;
        this.iconUrl = ""
    }
    B(Sm, Y);
    Sm.prototype.Y = function(a) {
        Sm.u.Y.call(this, a);
        this.model || (this.iconClass = this.iconUrl = "", this.H())
    };
    Sm.prototype.We = function(a) {
        this.Qh() || this.X("play-sound", "cross-enter");
        Sm.u.We.call(this, a)
    };
    Sm.prototype.Jc = function(a) {
        var b = p("thumbnail.thumbnails.0.url", a);
        b ? (this.iconUrl = this.i.bj(b), this.Ma("has-image")) : (this.iconUrl = "", this.Sa("has-image"));
        b = p("icon.iconType", a);
        this.iconClass = Hb[b];
        b = new N(vm(a.formattedTitle));
        b.payload = a.navigationEndpoint;
        b.isSpeakable = !1;
        this.model = b
    };
    Sm.inject = ["localeService", "voiceHelper", "rateLimit", "ytThumbnails"];

    function Tm(a, b, c) {
        Y.call(this, a, b, c)
    }
    B(Tm, Y);
    Tm.prototype.Jc = function(a) {
        a = vm(a.formattedTitle);
        a = new N(a);
        a.enabled = !1;
        a.isSpeakable = !1;
        this.model = a
    };
    Tm.inject = ["localeService", "voiceHelper", "rateLimit"];

    function Um(a) {
        this.g = a
    };

    function Vm(a, b) {
        this.i = b;
        this.h = {};
        for (var c = 0; c < a.g.length; ++c) {
            var e = a.g[c];
            this.h[e.name] = e
        }
    }
    Vm.prototype.g = function(a, b, c) {
        if (!b) throw Error("Missing source parameter.");
        var e = qc(b);
        if (!e) throw Error("Missing or empty component type ID.");
        var f = this.h[e];
        if (!f) throw Error('Unrecognized component type ID: "' + e + '".');
        c && this.j(c, f) || (c = pe(f.Ca, this.i));
        return this.l(c, b[e], a, f)
    };
    Vm.prototype.j = function(a, b) {
        return !!a.Ca && a.Ca === b.Ca
    };
    Vm.prototype.l = function(a, b, c, e) {
        e.tc ? this.i.get(e.tc, {
            component: a,
            source: b,
            inflater: this,
            service: c
        }, je) : w(a.Jc) && a.Jc(b, this, c);
        return a
    };
    Vm.inject = ["inflaterConfig", "injector"];

    function Wm(a) {
        if (!a) return null;
        for (var b = 0, c = a.length; b < c; ++b) {
            var e = a[b];
            if (e.hasOwnProperty("nextContinuationData")) return e.nextContinuationData || null
        }
        return null
    };

    function Xm(a, b, c, e, f, g, k, m, n, r, u, t, x, G, fa) {
        U.call(this, "seededShelf", "/browse", a, b, c, e, f, g, k, r, m, t, n, {}, "", "5.20140923");
        this.O = x;
        this.i = new yi;
        this.i.ia.ma(this.L(G));
        fa && (this.i.g = p("nextContinuationData.continuation", fa[0]))
    }
    B(Xm, U);
    Xm.prototype.L = function(a) {
        for (var b = [], c = 0; c < a.length; ++c) {
            var e = a[c].gridVideoRenderer || a[c].videoRenderer || a[c].compactVideoRenderer;
            e && (e["@videoModel"] || (e["@videoModel"] = this.O.Vo(e, {})), b.push(e["@videoModel"]))
        }
        return b
    };
    Xm.prototype.load = function(a, b, c) {
        return a && a.continuation ? Xm.u.load.call(this, a, b, c) : (b && b(this.i), q)
    };
    Xm.inject = "csiService ytHttp environmentModel authService cacheService backendErrorReporting ssoApi localStorage browseParser localeModel safeModeFlag networkStatus innerTubeVideoParser seeds opt_continuations".split(" ");

    function Ym(a, b, c, e, f, g, k, m, n, r) {
        M.call(this);
        this.k = a;
        this.O = b;
        this.V = c;
        this.A = e;
        this.G = f;
        this.i = null;
        this.F = m;
        this.J = n;
        this.I = r || 0;
        this.j = this.g = null;
        this.W = g;
        this.o = this.w = q;
        this.h = k;
        this.noContentMessage = this.G.T("[[No videos are available|The message shown when a row has no videos to show.]]");
        this.canBeFocusLeaf = !0
    }
    B(Ym, M);
    var Zm = 455 / 1080,
        $m = 576 / 1080,
        an = 192 / 1080,
        bn = 220 / 1080,
        cn = 25 / 1080;
    d = Ym.prototype;
    d.ready = function() {
        Ym.u.ready.call(this);
        this.h.isSupported() && (this.h.pb("[[Scroll left|Speech command to move selection left.]]", y(this.jt, this, -1), !1), this.h.pb("[[Scroll right|Speech command to move selection back.]]", y(this.jt, this, 1), !1), this.W.g(this.h.tg()), this.h.Tc(this))
    };
    d.Jf = function() {
        Ym.u.Jf.call(this);
        if (this.l) {
            var a = {
                animDuration: 200,
                opt_tileSpacing: this.I
            };
            !this.k.isLimitedAnimation && this.k.useSetsUi && (this.j = this.lI("sliding-highlighter", a), this.Va(this.j));
            this.i = this.J(a);
            this.i.rateLimit = 5;
            this.Va(this.i)
        }
    };
    d.lI = function(a, b) {
        return pe(a, this.l, void 0, void 0, b)
    };
    d.ea = function() {
        Ym.u.ea.call(this);
        var a = this.D.querySelector(".content");
        this.K(this.O, "resize-complete", y(this.ol, this));
        this.j && a.appendChild(this.j.D);
        a.appendChild(this.i.D);
        this.C("request-playback", y(this.zJ, this))
    };
    d.ua = function() {
        var a = Ym.u.ua.call(this);
        this.g && 0 !== this.g.$a().S() || a.push("no-content");
        return a
    };
    d.ol = function() {
        if (this.g && this.g instanceof ym) {
            var a = 0,
                b = 0,
                c = this.V.innerHeight;
            if (1 <= c) {
                b = this.V.innerWidth / c;
                c = an;
                a = Zm;
                this.k.useSetsUi || (c = bn, a = $m);
                var e = a * this.I * .01,
                    f = a + e,
                    a = (b - c - (cn - e)) / f;
                1 < a ? (b = .5 * b - c + .5 * e, b /= f, b = Math.min(Math.max(b, .5), a - .5)) : (b = .5 * a, a = Math.max(a, 0))
            }
            this.g.cj(a, b)
        }
    };
    d.Jc = function(a, b, c) {
        if (this.model !== a) {
            this.model = a;
            var e = this.g,
                f = a["@listModel"];
            if (!f) {
                var f = new R,
                    g = a.items || a.contents || [];
                if (g.length && g[0].itemSectionRenderer) {
                    for (var k = [], m = 0, n = g.length; m < n; ++m) {
                        var r = p("itemSectionRenderer.contents", g[m]);
                        if (r)
                            for (var u = 0, t = r.length; u < t; ++u) k.push(r[u])
                    }
                    g = k
                }
                f.ma(g);
                f = this.F(f);
                a["@listModel"] = f;
                (a = Wm(a.continuations)) && this.l.get("collectionContinuer", {
                    projection: f,
                    continuationData: a,
                    interpretRawResponse: y(this.fD, this),
                    service: c
                })
            }
            a = this.i.eD();
            a && a["@inflater"] ===
                b && a["@service"] === c || (this.i.model = null, a = this.dD(b, c), a["@inflater"] = b, a["@service"] = c, this.i.re(a, !0));
            this.g = f;
            this.i.model = f;
            this.j && (this.j.model = f);
            f && f !== e && this.ol();
            this.Qr();
            this.ha() && this.i.fa()
        }
    };
    d.Qr = function() {
        this.h.isSupported() && (this.w(), this.w = this.g.$a().C("selectedIndex:changed", y(this.fj, this)), this.o(), this.o = this.g.$a().C("items:changed", y(this.fj, this)), this.fj())
    };
    d.dD = function(a, b) {
        var c = y(a.g, a, b);
        return y(this.A.g, this.A, c)
    };
    d.fD = function(a) {
        for (var b = ["horizontalList", "itemSection", "playlistVideoList", "sectionList"], c, e, f = 0; f < b.length && !(e = b[f], c = p("continuationContents." + e + "Continuation", a)); ++f);
        if (!c) return {
            hz: [],
            jz: null
        };
        a = c.items || c.contents || [];
        if ("sectionList" === e) {
            e = [];
            f = 0;
            for (b = a.length; f < b; ++f) a[f].itemSectionRenderer ? e.push.apply(e, p("itemSectionRenderer.contents", a[f])) : e.push(a[f]);
            a = e
        }
        c = Wm(c.continuations);
        return {
            hz: a,
            jz: c
        }
    };
    d.TL = function(a) {
        if (this.model !== a) {
            this.model = a;
            var b = new R;
            b.ma(a);
            this.g = this.F(b);
            this.i.re(null);
            this.i.model = this.g;
            this.j && (this.j.model = this.g);
            this.ol();
            this.Qr();
            this.ha() && this.i.fa()
        }
    };
    d.zJ = function(a) {
        if (a.target !== this.D && a.detail.data instanceof ue) {
            L(a);
            var b = {
                    seeds: this.i.model.$a().Fa(),
                    opt_continuations: this.model.continuations
                },
                b = this.l.get("seededShelfService", b),
                c = this.parent.title || this.G.T("[[Current videos|Default title for the current set of videos a user is watching when no title is provided by the server.]]"),
                b = new zi(b, c, "icon-guide-my-subs");
            b.j.innerTubeEndpointParams = {};
            this.X("request-playback", {
                data: a.detail.data,
                Ge: b,
                startTime: a.detail.startTime,
                xd: a.detail.xd
            })
        }
    };
    d.wa = function() {
        Ym.u.wa.call(this);
        this.fj()
    };
    d.xa = function() {
        Ym.u.xa.call(this);
        this.Zb()
    };
    d.fj = function() {
        if (this.h.isSupported() && this.g && this.ha()) {
            var a = this.g.$a();
            a.ra() && a.S() ? this.bd("[[Scroll left|Speech command to move selection left.]]") : this.Gc("[[Scroll left|Speech command to move selection left.]]");
            a.ra() < a.S() - 1 ? this.bd("[[Scroll right|Speech command to move selection back.]]") : this.Gc("[[Scroll right|Speech command to move selection back.]]")
        }
    };
    d.jt = function(a) {
        this.g.ec(a)
    };
    d.ra = function() {
        return this.g ? this.g.$a().ra() : -1
    };
    Ym.inject = "environmentModel rootDispatcher window mixedFactory localeService voiceFooterModel voiceHelper projectionFactory listFactory opt_tileSpacing".split(" ");

    function dn(a, b, c, e) {
        I.call(this);
        this.l = c;
        this.w = a;
        this.k = b;
        this.p = e;
        this.o = 1500;
        this.j = 0;
        this.g = "";
        this.i = !1;
        this.h = q
    }
    B(dn, I);
    d = dn.prototype;
    d.reset = function() {
        this.g = ""
    };
    d.SB = function() {
        this.g && (this.i = !0, this.h = this.l.load({
            query: this.g
        }, this.bD(this.g)))
    };
    d.qb = function() {
        return !this.g
    };
    d.bD = function(a) {
        return y(function(b) {
            this.i = !1;
            this.g === a && this.B("results:changed", b)
        }, this)
    };
    d.wd = function() {
        return this.g
    };
    d.Bb = function(a) {
        a != this.g && (this.h(), a && (a = a.replace("\n", "")), this.g = (a = this.k.TB(a) ? "" : a) || "", this.B("query:changed", this.g), this.l.serviceQuery = this.g, this.p.clearTimeout(this.j), this.j = this.p.setTimeout(y(this.SB, this), 1500))
    };
    d.au = function(a) {
        this.Bb(this.g + a)
    };
    d.bu = function() {
        this.g.length && this.Bb(this.g.slice(0, -1))
    };
    dn.inject = ["environmentModel", "debugCallService", "searchService", "timeService"];

    function en(a, b) {
        this.h = a;
        this.g = b;
        this.i = [a, b].join("|")
    }
    var fn = {};

    function gn(a, b) {
        "iw" == a ? a = "he" : "iw" == b && (b = "he");
        var c = [a, b].join("|");
        return fn[c] || (fn[c] = new en(a, b))
    }
    en.prototype.toString = function() {
        return this.i
    };
    en.prototype.j = function() {
        return gn(this.g, this.h)
    };

    function hn(a, b, c) {
        this.name = a;
        this.PR = b;
        this.rows = c
    };

    function jn(a, b, c) {
        N.call(this, a, "", null, "", b, !1);
        this.g = c
    }
    B(jn, N);

    function kn(a, b, c) {
        this.i = a;
        this.j = b;
        this.h = c;
        this.Ae = !1;
        this.g = this.rC();
        this.layout = null;
        this.pr(this.g[0])
    }
    d = kn.prototype;
    d.pr = function(a) {
        return this.layout != a ? (this.layout = a, !0) : !1
    };
    d.bp = function() {
        return this.layout.rows.CV()
    };
    d.oT = function(a) {
        for (var b = [], c = 0, e = a.length; c < e; ++c) {
            var f = new N(a[c]);
            f.isSpeakable = !1;
            b.push(f)
        }
        return b
    };
    d.RJ = function(a) {
        return this.pr(this.bV(a))
    };
    d.bV = function(a) {
        for (var b = 0, c = this.g.length; b < c; ++b) {
            var e = this.g[b];
            if (e.name === a) return e
        }
        return null
    };
    d.rC = function() {
        var a = [],
            b = this.IO();
        if (b) {
            var c = "UA" === b || "RU" === b;
            a.push(this.wx(b, c, "EN"));
            c && a.push(this.xx(b))
        }
        this.Ae = this.h.cb(yb) && !b;
        a.push(this.wx("EN", !0, b, !!b));
        a.push(this.xx("EN"));
        return a
    };
    d.wx = function(a, b, c, e) {
        this.Ae && (a = "EN_4");
        var f = this.My(a),
            g = f.ya(f.S() - 1),
            k = new jn("123", "numbers-toggle-tile", this.Ny(a));
        this.Ae ? (f.ya(0).push(this.mk()), f.ya(1).push(this.lk()), g.push(k)) : (b && g.push(k), g.push(this.mk()), g.push(this.lk()));
        c && (g.push(new jn("\u00a0", "language-toggle-tile", c)), e && f.pS(f.S() - 1, g.S() - 1));
        return new hn(a, a, f)
    };
    d.xx = function(a) {
        var b = this.Ae ? "NUMBERS_4" : "NUMBERS";
        this.Ae && (a = "EN_4");
        var b = this.My(b),
            c = b.ya(b.S() - 1),
            e = new jn(Qb[a].substr(0, 3), "numbers-toggle-tile", a);
        this.Ae ? (b.ya(0).push(this.mk()), b.ya(1).push(this.lk()), c.push(e)) : (c.push(e), c.Fe(e), c.push(this.mk()), c.push(this.lk()));
        return new hn(this.Ny(a), "NUMBERS", b)
    };
    d.mk = function() {
        return new N("\u00a0", "", null, "", "delete-tile", !1)
    };
    d.lk = function() {
        return new N(this.j.T("[[Clear|Clear the search query input field]]"), "", null, "", "clear-query-tile", !1)
    };
    d.Ny = function(a) {
        return a + "_NUMBERS"
    };
    d.My = function(a) {
        a = Qb[a].split("\n");
        var b = new Ke;
        b.ma(Qa(a, y(function(a) {
            var b = new R;
            b.ma(this.oT(a.split("")));
            return b
        }, this)));
        return b
    };
    d.IO = function() {
        switch (this.i.sb) {
            case "ja_JP":
                return "JP";
            case "ko_KR":
                return "KO";
            case "ru_RU":
                return "RU";
            case "uk_UA":
                return "UA";
            default:
                return null
        }
    };
    kn.inject = ["localeModel", "localeService", "environmentModel"];

    function ln(a, b, c, e, f) {
        M.call(this);
        this.w = b;
        this.F = c;
        this.model = f;
        this.J = e;
        this.letterSuggestions = new R;
        this.A = q;
        this.catchMouseMove = a.supportsMouseOverSearch;
        this.gridRateLimit = a.isLowPerformingSearch ? 4 : 20;
        this.k = this.g = this.i = null
    }
    B(ln, M);
    d = ln.prototype;
    d.ready = function() {
        this.g = this.Aa("keyboard-grid");
        this.i = this.Aa("letter-suggest");
        this.catchMouseMove && (this.g.C("mouseover", y(this.fu, this, this.g)), this.i.C("mouseover", y(this.fu, this, this.i)));
        this.Gt()
    };
    d.ea = function() {
        this.C("keyup", y(this.LR, this));
        this.C("keydown", this.J(20, y(this.KR, this)), !0);
        this.C("button-enter", y(this.gk, this))
    };
    d.wa = function() {
        ln.u.wa.call(this);
        this.Jv();
        this.Zd();
        this.Ed()
    };
    d.xa = function() {
        this.wc();
        ln.u.xa.call(this)
    };
    d.Zd = function() {
        this.g.fa()
    };
    d.Kv = function() {
        this.i.fa()
    };
    d.nk = function() {
        return []
    };
    d.fu = function(a) {
        a && a.fa()
    };
    d.M5 = function() {
        return this.g.ha()
    };
    d.Lf = function() {
        return this.i.ha()
    };
    d.Dn = function() {
        return !this.i.isHidden && !!this.letterSuggestions.S()
    };
    d.LR = function(a) {
        switch (a.keyCode) {
            case 83:
                this.wc();
                break;
            case 8:
            case 27:
                this.Dn() && (L(a), this.wc())
        }
    };
    d.KR = function(a) {
        switch (a.keyCode) {
            case 37:
                this.ok(-1) && L(a);
                break;
            case 39:
                this.ok(1) && L(a);
                break;
            case 228:
                this.ok(8, !0) && L(a);
                break;
            case 227:
                this.ok(-8, !0) && L(a);
                break;
            case 40:
                this.Mh() && L(a);
                break;
            case 38:
                this.sh() && L(a);
                break;
            case 172:
            case 71:
                this.wc()
        }
    };
    d.gk = function(a) {
        this.wc();
        this.Lo(a) || (a = a.detail, a != this.model.bp() && this.model.layout.rows.Tl(a), this.Ed())
    };
    d.jR = function() {
        this.ha() && (this.Ed(), this.F.pn(!0))
    };
    d.ok = function(a, b) {
        this.F.pn(!0);
        return this.Lf() ? (this.model.layout.rows.Db().ec(a, !0), this.Ed(), this.Dn() ? this.Kv() : this.Zd(), !0) : b ? (this.model.layout.rows.Db().ec(a, !0), !0) : !1
    };
    d.Lo = function(a) {
        var b = a.detail;
        return b instanceof jn && this.model.RJ(b.g) ? (this.Gt(), this.H(!0), this.Jv(), this.Ed(), L(a), !0) : !1
    };
    d.Gt = function() {
        this.A();
        this.A = this.model.layout.rows.C("selection:changed", y(this.jR, this))
    };
    d.wc = function() {
        this.Zv(0);
        this.Py(!1)
    };
    d.Zv = function(a) {
        this.letterSuggestions.Ia(a)
    };
    d.Mh = function() {
        return this.g.ha() && this.Dn() ? (this.Zv(0), this.Kv(), !0) : this.Lf() && this.letterSuggestions.ra() == this.letterSuggestions.S() - 1 ? (this.wc(), this.Zd(), this.model.layout.rows.ec(1), !0) : !1
    };
    d.sh = function() {
        return this.Lf() && 0 == this.letterSuggestions.ra() ? (this.wc(), this.Zd(), !0) : !1
    };
    d.CS = function() {
        this.g.H(!0);
        var a = this.g.D.querySelector(".button.selected");
        a && this.i && (a = a.getBoundingClientRect(), Fl(this.i.D, {
            left: a.left + "px",
            top: a.bottom + "px"
        }))
    };
    d.Ed = function() {
        this.nk().length ? (this.Py(!0), this.CS()) : this.wc();
        this.letterSuggestions.ma(this.nk(), this.letterSuggestions.ra())
    };
    d.Py = function(a) {
        this.i && (a ? (this.Ma("letter-suggest-visible"), this.i.Ba()) : (this.Sa("letter-suggest-visible"), this.i.ga(), this.Lf() && this.Zd()), this.H())
    };
    d.Jv = function() {
        this.k && this.g.Sa(this.k);
        this.k = "lang-" + this.model.layout.name.toLowerCase();
        this.g.Ma(this.k);
        this.g.H()
    };
    ln.inject = ["environmentModel", "searchQueryModel", "searchReporting", "rateLimit", "keyboardModel"];

    function mn(a, b, c, e, f, g) {
        ln.call(this, a, b, c, e, f);
        this.langCodePair = g;
        this.o = "keyboard-grid";
        this.j = null
    }
    B(mn, ln);
    d = mn.prototype;
    d.ready = function() {
        mn.u.ready.call(this);
        this.Ma("transliterable");
        this.C("transliteration-selected", y(this.BO, this));
        this.j = this.Aa("transliteration")
    };
    d.BO = function() {
        this.Zd();
        this.Ed()
    };
    d.bt = function() {
        return this.j.ha()
    };
    d.wa = function() {
        mn.u.wa.call(this);
        "transliteration" === this.o && (this.wc(), this.j.fa())
    };
    d.Mh = function() {
        if (this.bt()) return this.Zd(), this.Ed(), !0;
        this.o = "keyboard-grid";
        return mn.u.Mh.call(this)
    };
    d.sh = function() {
        if (this.g.ha() && this.j.transliterations.S()) return this.wc(), this.j.fa(), !0;
        if (this.bt()) return this.o = "transliteration", !1;
        this.o = "keyboard-grid";
        return mn.u.sh.call(this)
    };
    mn.inject = "environmentModel searchQueryModel searchReporting rateLimit keyboardModel langCodePair".split(" ");

    function nn(a, b, c, e, f, g) {
        mn.call(this, a, b, c, e, f, g)
    }
    B(nn, mn);
    nn.prototype.gk = function(a) {
        this.Lo(a) || (this.I(a), this.Ed())
    };
    nn.prototype.nk = function() {
        var a = [],
            b = this.model.bp();
        if (b = b && Lb[b.label])
            for (var c = 0; c < b.length; ++c) {
                var e = new N(b[c]);
                e.isSpeakable = !1;
                a.push(e)
            }
        return a
    };
    nn.prototype.I = function(a) {
        var b = a.detail;
        if (b) {
            var c = b.label;
            if (c && this.G(c)) {
                var b = this.w.wd(),
                    e = b.slice(-1);
                if (c = Ob[c][e]) b = b.slice(0, b.length - 1) + c, this.w.Bb(b), this.X("button-enter");
                L(a)
            }
        }
    };
    nn.prototype.G = function(a) {
        return E(Kb, a)
    };
    nn.inject = "environmentModel searchQueryModel searchReporting rateLimit keyboardModel langCodePair".split(" ");
    for (var on = "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" "), pn = {
            "\u1104": "\u1104",
            "\u1108": "\u1108",
            "\u110d": "\u110d"
        }, qn = 0; qn < on.length; ++qn) pn[on[qn]] = String.fromCharCode(4520 + qn);
    var rn = {
            "\u1169\u1161": "\u116a",
            "\u1169\u1162": "\u116b",
            "\u1169\u1175": "\u116c",
            "\u116e\u1165": "\u116f",
            "\u116e\u1166": "\u1170",
            "\u116e\u1175": "\u1171",
            "\u1173\u1175": "\u1174"
        },
        sn = /[\u11a8-\u11c3]/g,
        tn = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g"),
        un = /[\uac00-\ud7af]/g,
        vn = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g,
        wn = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])", "g"),
        xn = RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))",
            "g"),
        yn = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))", "g"),
        zn = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))", "g");

    function An(a) {
        a = a.charCodeAt(0) - 44032;
        var b = 4449 + a % 588 / 28,
            c = 4519 + a % 28;
        return String.fromCharCode(4352 + a / 588) + String.fromCharCode(b) + (4519 == c ? "" : String.fromCharCode(c))
    }

    function Bn(a) {
        return a.replace(sn, function(a) {
            return on[a.charCodeAt(0) - 4519 - 1]
        })
    }

    function Cn(a) {
        return a.replace(tn, function(a) {
            return rn[a]
        })
    }

    function Dn(a) {
        return a.replace(un, An)
    }

    function En(a) {
        var b = a.charCodeAt(0) - 4352,
            c = a.charCodeAt(1) - 4449;
        a = 3 <= a.length ? a.charCodeAt(2) - 4519 : 0;
        return String.fromCharCode(28 * (21 * b + c) + a + 44032)
    }

    function Fn(a) {
        return a.replace(vn, En)
    }

    function Gn(a, b, c, e) {
        return b + pn[c] + e
    }

    function Hn(a) {
        return Cn(Bn(a)).replace(wn, Gn).replace(wn, Gn).replace(xn, Gn).replace(yn, Gn).replace(zn, Gn)
    };

    function In(a, b, c, e, f) {
        ln.call(this, a, b, c, e, f);
        this.j = yc(Nb);
        this.w.C("query:changed", y(this.FO, this))
    }
    B(In, ln);
    d = In.prototype;
    d.FO = function(a) {
        a = Qa(a.split(""), function(a) {
            return Nb[a] || a
        }).join("");
        a = Fn(Hn(Dn(a.replace("\u001d", ""))));
        a = Qa(a.split(""), function(a) {
            return this.j[a] || a
        }, this).join("");
        this.w.Bb(a)
    };
    d.Mh = function() {
        return this.Lf() && this.Vv(1) || In.u.Mh.call(this)
    };
    d.sh = function() {
        return this.g.ha() && this.Vv(-1) || In.u.sh.call(this)
    };
    d.Vv = function(a) {
        return this.Lf() && this.letterSuggestions.ra() == this.letterSuggestions.S() - 1 ? (this.wc(), this.Zd(), this.model.layout.rows.ec(a)) : !1
    };
    d.nk = function() {
        var a = [],
            b = this.model.bp();
        if (b = b && Mb[b.label])
            for (var c = 0; c < b.length; ++c) {
                var e = new N(b[c]);
                e.isSpeakable = !1;
                a.push(e)
            }
        return a
    };
    d.gk = function(a) {
        "KO" === this.model.layout.PR ? (this.wc(), this.Lo(a)) : In.u.gk.call(this, a)
    };
    In.inject = ["environmentModel", "searchQueryModel", "searchReporting", "rateLimit", "keyboardModel"];

    function Jn(a, b, c, e) {
        M.call(this);
        this.model = a;
        this.j = b;
        this.mq(this.j);
        this.w = c;
        this.o = e;
        this.g = this.model.or();
        this.g.sort(bb);
        this.k = this.model.nr();
        this.k.sort(bb);
        this.i = 0;
        if (this.j.isSupported())
            for (var f in Yb) a = Yb[f].label, b = 0 <= this.g.indexOf(f), this.j.pb(a, y(this.BC, this, f), b)
    }
    B(Jn, M);
    d = Jn.prototype;
    d.M = function() {
        0 != this.i && (this.o.h(this.i), this.i = 0);
        Jn.u.M.call(this)
    };
    d.ready = function() {
        Jn.u.ready.call(this);
        this.hx();
        this.K(this.model, "keyVisibility:changed", y(this.No, this));
        this.K(this.model, "additionalClass:added", y(this.No, this));
        this.K(this.model, "additionalClass:removed", y(this.No, this))
    };
    d.No = function() {
        0 == this.i && (this.i = this.o.g(y(this.gG, this)))
    };
    d.gG = function() {
        this.i = 0;
        this.hx()
    };
    d.hx = function() {
        var a = this.model.or();
        a.sort(bb);
        var b = this.Mt(a, this.g),
            c = this.model.nr();
        c.sort(bb);
        if (b || this.Mt(c, this.k)) {
            if (b && this.j.isSupported()) {
                for (b = 0; b < a.length; ++b) {
                    var e = a[b];
                    0 > this.g.indexOf(e) && this.j.mi(Yb[e].label)
                }
                for (b = 0; b < this.g.length; ++b) e = this.g[b], 0 > a.indexOf(e) && this.j.li(Yb[e].label)
            }
            this.g = a;
            this.k = c;
            this.H()
        }
    };
    d.Mt = function(a, b) {
        if (a.length != b.length) return !0;
        for (var c = 0; c < a.length; ++c)
            if (a[c] !== b[c]) return !0;
        return !1
    };
    d.BC = function(a) {
        this.w.Vu(Yb[a].keyCode)
    };
    d.ua = function() {
        return Jn.u.ua.call(this).concat(this.g).concat(this.k)
    };
    Jn.inject = ["legendModel", "voiceHelper", "gestureService", "animationFrameService"];

    function Kn(a, b, c, e, f, g, k) {
        this.i = a;
        this.k = b;
        this.g = c;
        this.o = e;
        this.j = f;
        this.A = g;
        this.w = k;
        this.kC()
    }
    d = Kn.prototype;
    d.kC = function() {
        this.Kd("keydown", this.zv);
        this.Kd("keyup", this.zv);
        this.Kd("mousedown", this.Av);
        this.Kd("mouseup", this.Av);
        this.Kd("mousewheel", this.o(10, y(this.zI, this)));
        this.Kd("mousemove", this.HI);
        this.Kd("touchstart", y(this.g.ns, this.g));
        this.Kd("touchmove", y(this.g.GI, this.g));
        this.Kd("touchend", y(this.g.FI, this.g));
        this.g.C("tap", y(this.EI, this));
        this.g.C("swipedown", y(this.AI, this));
        this.g.C("swipeleft", y(this.BI, this));
        this.g.C("swiperight", y(this.CI, this));
        this.g.C("swipeup", y(this.DI,
            this))
    };
    d.Kd = function(a, b) {
        this.i.addEventListener(a, y(b, this), !0)
    };
    d.zv = function(a) {
        this.j.ic();
        var b = this.k.h(a.keyCode);
        16 === b ? L(a, !1, !0) : a.g || b == a.keyCode || (b = Rd(a.target, a.type, b, !0, a), L(a, !1, !0), a.target.dispatchEvent(b))
    };
    d.EQ = function() {
        return this.g.o
    };
    d.Av = function(a) {
        if (this.h) this.h = !1;
        else {
            var b = a.type.replace("mouse", "key");
            this.he(a, 13, b)
        }
    };
    d.zI = function(a) {
        this.he(a, 0 < a.wheelDelta ? 38 : 40)
    };
    d.HI = function(a) {
        this.l === a.clientX && this.p === a.clientY ? L(a) : (this.l = a.clientX, this.p = a.clientY)
    };
    d.EI = function(a) {
        this.h = !0;
        this.$O(a, "click");
        this.he(a, 13, "keydown");
        this.he(a, 13, "keyup")
    };
    d.AI = function(a) {
        this.h = !0;
        this.he(a, 38)
    };
    d.DI = function(a) {
        this.h = !0;
        this.he(a, 40)
    };
    d.BI = function(a) {
        this.h = !0;
        this.he(a, 39)
    };
    d.CI = function(a) {
        this.h = !0;
        this.he(a, 37)
    };
    d.he = function(a, b, c) {
        b = Rd(a.target, c ? c : "keydown", b, !0, a);
        L(a, !1, !0);
        a.target.dispatchEvent(b)
    };
    d.$O = function(a, b) {
        var c = Sd(a.target, b, a);
        L(a, !1, !0);
        a.target.dispatchEvent(c)
    };
    d.Vu = function(a) {
        this.Yf("keydown", a);
        this.Yf("keyup", a)
    };
    d.Yf = function(a, b, c) {
        this.j.ic();
        var e = this.i.activeElement || this.i;
        a = Rd(e, a, b, !0);
        a.h = !0;
        c && (a.detail = c);
        e.dispatchEvent(a)
    };
    Kn.inject = "document keyMapModel gestureRecognizer rateLimit playerFacade rootDispatcher localeService".split(" ");

    function Ln(a, b, c) {
        M.call(this);
        this.j = a;
        this.k = b;
        this.i = c;
        this.o = !1;
        this.label = "";
        this.legendType = "back";
        this.iconClass = ""
    }
    B(Ln, M);
    d = Ln.prototype;
    d.ea = function() {
        Ln.u.ea.call(this);
        this.C("keydown", y(this.QQ, this));
        this.C("keyup", y(this.RQ, this))
    };
    d.ready = function() {
        Ln.u.ready.call(this);
        var a = Yb[this.legendType];
        a && (this.label = this.k.T(a.label));
        this.H()
    };
    d.QQ = function(a) {
        this.g || 13 != a.keyCode || L(a, !1, !0)
    };
    d.RQ = function(a) {
        this.g || 13 != a.keyCode || (this.g = !0, this.j.Vu(this.eI()), L(a, !1, !0), this.g = !1)
    };
    d.eI = function() {
        var a = Yb[this.legendType],
            a = a ? a.keyCode : 27;
        27 === a && this.i.A && (a = 8);
        return a
    };
    Ln.inject = ["gestureService", "localeService", "environmentModel"];

    function Mn(a) {
        M.call(this);
        this.model = null;
        this.g = a
    }
    B(Mn, M);
    Mn.prototype.ea = function() {
        Mn.u.ea.call(this);
        this.C("button-enter", y(this.i, this))
    };
    Mn.prototype.Y = function(a) {
        Mn.u.Y.call(this, a);
        this.model && this.H(!0)
    };
    Mn.prototype.i = function(a) {
        this.g.B("request-close-dialog");
        a = a.detail;
        this.g.B(a.type, a.payload || this.model.video)
    };
    Mn.inject = ["rootDispatcher"];

    function Nn(a, b, c, e, f) {
        M.call(this);
        this.w = a;
        this.k = b;
        this.o = c;
        this.i = e;
        this.g = f;
        this.Jb = this.Ib = this.yb = this.Hb = 1
    }
    B(Nn, M);
    d = Nn.prototype;
    d.ea = function() {
        this.k.addEventListener("mousemove", this.o(2, y(this.OP, this)));
        this.k.addEventListener("keyup", y(this.NP, this));
        this.C("keyup", y(this.MP, this))
    };
    d.hw = function() {
        this.Ma("enabled");
        this.H();
        this.i.clearTimeout(this.j);
        this.j = this.i.setTimeout(y(this.Hw, this), 3E3)
    };
    d.Hw = function() {
        this.i.clearTimeout(this.j);
        this.Sa("enabled");
        this.H()
    };
    d.OP = function() {
        this.hw()
    };
    d.NP = function(a) {
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                L(a), this.Hw()
        }
    };
    d.MP = function(a) {
        13 == a.keyCode && (this.hw(), a.target.classList.contains("up-arrow") ? this.g.Yf("keydown", 38, {
            Oe: this.Hb
        }) : a.target.classList.contains("down-arrow") ? this.g.Yf("keydown", 40, {
            Oe: this.yb
        }) : a.target.classList.contains("left-arrow") ? this.g.Yf("keydown", 37, {
            Oe: this.Ib
        }) : a.target.classList.contains("right-arrow") && this.g.Yf("keydown", 39, {
            Oe: this.Jb
        }))
    };
    Nn.inject = ["environmentModel", "document", "rateLimit", "timeService", "gestureService"];

    function On(a, b, c, e) {
        M.call(this);
        this.j = b;
        this.w = a;
        this.o = e;
        this.i = this.g = null;
        this.k = c;
        this.ga()
    }
    B(On, M);
    d = On.prototype;
    d.ea = function() {
        this.K(this.j, "watch-next-loaded", y(this.UP, this))
    };
    d.ready = function() {
        On.u.ready.call(this);
        this.i = this.Aa("post-play-list")
    };
    d.Ba = function() {
        this.g && (On.u.Ba.call(this), this.yJ(this.g[0], this.g[1]))
    };
    d.W3 = function() {
        return this.i
    };
    d.UP = function(a) {
        this.g = a.detail
    };
    d.yJ = function(a, b) {
        this.model = a;
        var c = p("contents.singleColumnWatchNextResults.results.results.contents", a);
        if (c)
            if ((c = this.cO(c)) && c.items && c.items.length) {
                var e = this.bO(a);
                this.dO(c.items, e);
                c.items.splice(3);
                "continuations" in c && delete c.continuations;
                this.i.Jc(c, this.k, b)
            } else this.ax();
        else this.ax()
    };
    d.cO = function(a) {
        for (var b = null, c = 0, e = a.length; c < e && !(b = p("shelfRenderer.content.horizontalListRenderer", a[c])); c++);
        return b
    };
    d.dO = function(a, b) {
        var c = b ? p("autoplayVideoRenderer.compactVideoRenderer.videoId", b) : null,
            e = p("compactVideoRenderer.videoId", a[0]);
        c && e && c == e && a.shift();
        c && a.unshift(b);
        this.o.g = c != e
    };
    d.bO = function(a) {
        a = p("contents.singleColumnWatchNextResults.autoplay.autoplay", a);
        if (!a) return null;
        var b = p("sets", a);
        if (!b || !b.length) return null;
        for (var c, e = 0, f = b.length; e < f && ("NORMAL" != p("mode", b[e]) || !(c = p("autoplayVideoRenderer", b[e]))); ++e);
        if (!c) return null;
        c.countDownSecs = p("countDownSecs", a);
        return {
            autoplayVideoRenderer: c
        }
    };
    d.ax = function() {
        this.j.B("run-process", new dh)
    };
    On.inject = ["environmentModel", "rootDispatcher", "inflater", "watchNextModel"];

    function Pn(a, b, c, e, f, g) {
        W.call(this, a, b, f);
        this.F = c;
        this.g = e;
        this.W = f;
        this.J = g;
        this.countdown = this.G = this.O = this.I = null;
        this.o = -1;
        this.k = !1;
        this.LF()
    }
    B(Pn, W);
    d = Pn.prototype;
    d.LF = function() {
        this.J.h && this.K(this.W, "mousemove", y(this.He, this));
        this.K(this.W, "engage-change", y(this.He, this))
    };
    d.ea = function() {
        Pn.u.ea.call(this);
        this.I = this.D.querySelector(".default-title");
        this.O = this.D.querySelector(".next-up-title");
        this.C("keydown", y(this.WP, this))
    };
    d.ready = function() {
        Pn.u.ready.call(this);
        this.G = this.Bc(".video-tile")
    };
    d.M = function() {
        this.F.Je(this.o);
        Pn.u.M.call(this)
    };
    d.Y = function(a) {
        Pn.u.Y.call(this, a);
        this.He();
        this.wq() && this.g.h && (this.g.h = !1, this.countdown = this.J.Fz, this.o = this.F.cf(y(this.SC, this), 1E3), this.k = !0);
        this.H(!0)
    };
    d.H = function(a) {
        Pn.u.H.call(this, a);
        this.Ha(this.O, this.wq() && this.g.i());
        this.Ha(this.I, this.Vs(this.g.i() ? 1 : 0))
    };
    d.wq = function() {
        return this.Vs(0)
    };
    d.Vs = function(a) {
        var b = this.g.Dc();
        return b && this.model ? b.ya(a) == this.model : !1
    };
    d.Lh = function(a, b) {
        a && 1 == b || this.He();
        return this.G.Lh(a, b)
    };
    d.WP = function() {
        this.He()
    };
    d.He = function() {
        this.k && (this.k = !1, this.countdown = 0, this.F.Je(this.o), this.H())
    };
    d.SC = function() {
        this.model ? (--this.countdown, 0 === this.countdown ? (this.He(), this.X("request-playback", {
            data: this.model,
            xd: !0
        })) : this.H()) : this.He()
    };
    Pn.prototype.getRowTitle = function() {
        var a = this.g.Dc();
        return this.i.T(a && a.model.title || "")
    };
    Pn.prototype.ua = function() {
        var a = Pn.u.ua.call(this);
        this.k && a.push("countdown-active");
        this.g.Dc().h.length || a.push("last-video");
        return a
    };
    Pn.inject = "localeService voiceHelper timeService postPlayModel rootDispatcher environmentModel".split(" ");

    function Je(a) {
        N.call(this, "");
        this.isSpeakable = void 0 === a ? !0 : a;
        this.description = this.stateName = "";
        this.Rt = !1;
        this.Ob = "public";
        this.$ = "privacyButton"
    }
    B(Je, N);
    Je.prototype.j = function(a) {
        this.Ob = a;
        this.B("privacy-state-changed")
    };
    Je.prototype.g = function(a) {
        this.Rt = a == this.Ob;
        this.B("privacy-state-changed")
    };
    Je.prototype.FH = function() {
        var a = Qn;
        switch (this.Ob) {
            case "public":
                a = Rn;
                break;
            case "unlisted":
                a = Sn
        }
        return a
    };
    var Rn = {
            dn: "[[Anyone can search and view.|Describes what it means for a video to be public.]]",
            fn: "[[Public|Label for the public video state.]]",
            Tf: "public-state"
        },
        Sn = {
            dn: "[[Anyone with a link can view.|Describes what it means for a video to be unlisted.]]",
            fn: "[[Unlisted|Label for the unlisted video state.]]",
            Tf: "unlisted-state"
        },
        Qn = {
            dn: "[[Only people you choose can view.|Describes what it means for a video to be private.]]",
            fn: "[[Private|Label for the private video state.]]",
            Tf: "private-state"
        };

    function Tn(a, b, c) {
        Y.call(this, a, b, c);
        this.model = null
    }
    B(Tn, Y);
    Tn.prototype.Y = function(a) {
        Tn.u.Y.call(this, a);
        this.model.C("privacy-state-changed", y(this.i, this));
        this.i()
    };
    Tn.prototype.j = function() {
        this.Sa(Rn.Tf);
        this.Sa(Sn.Tf);
        this.Sa(Qn.Tf);
        this.Sa("checked")
    };
    Tn.prototype.i = function() {
        var a = this.model.FH();
        this.model.stateName = this.g.T(a.fn);
        this.model.description = this.g.T(a.dn);
        this.j();
        this.Ma(a.Tf);
        this.model.Rt && this.Ma("checked");
        this.H()
    };
    Tn.inject = ["localeService", "voiceHelper", "rateLimit"];

    function Un(a, b) {
        M.call(this);
        this.model = a;
        this.g = b;
        this.percentageLoaded = this.percentagePlayed = ""
    }
    B(Un, M);
    d = Un.prototype;
    d.Ds = function() {
        this.Wo();
        this.H();
        this.rS()
    };
    d.AO = function() {
        this.ek()
    };
    d.rS = function() {
        this.ek();
        this.K(this.model, "percentageLoaded:changed", y(this.HR, this));
        this.K(this.model, "percentagePlayed:changed", y(this.IR, this));
        this.C("keyup", y(this.JR, this))
    };
    d.HR = function() {
        this.Wo();
        this.H()
    };
    d.IR = function() {
        this.Wo();
        this.H()
    };
    d.Wo = function() {
        this.percentagePlayed = gb(this.model.percentagePlayed);
        this.percentageLoaded = gb(this.model.percentageLoaded)
    };
    d.JR = function(a) {
        L(a);
        if (!this.g.isPlayingAd) {
            a = a.g;
            var b = 0,
                c = 0;
            a instanceof MouseEvent ? (b = a.target.clientWidth, c = a.offsetX) : (c = a.target.getBoundingClientRect(), b = c.width, c = a.changedTouches[0].pageX - c.left);
            this.g.Ni(c / b * this.model.duration, !0)
        }
    };
    Un.inject = ["progressModel", "playerFacade"];

    function Z(a, b, c) {
        this.i = a;
        this.I = b;
        this.W = null;
        this.la = c || null
    }
    Z.prototype.aa = function(a) {
        return a ? (a = this.i.bm(a), !!a && 100 * Math.random() < a) : !0
    };
    Z.prototype.oo = function() {
        null === this.W && (this.W = this.aa(this.la));
        return this.W
    };
    Z.prototype.g = function(a, b, c, e) {
        this.oo() && (z(b, this.i.Gv()), this.I.ZO(a, b, c, e))
    };
    Z.inject = ["environmentModel", "privateDataService", "opt_variant"];

    function Vn(a, b, c, e) {
        Z.call(this, a, b);
        this.na = c;
        this.ob = e;
        this.l = !1;
        this.o = this.Z = this.Ya = this.J = this.O = 0;
        this.j = [];
        this.h = [];
        this.G = 0;
        this.p = "";
        this.F = 0;
        this.L = -1;
        this.U = this.k = 0;
        this.va = null;
        this.w = this.A = !1
    }
    B(Vn, Z);
    var Wn = {
            Um: "a",
            wG: "tt",
            uG: "qt",
            pG: "hwl",
            oG: "features",
            nG: "ed",
            tG: "ql",
            sG: "oc",
            rG: "kpc",
            qG: "kb",
            EW: "flt",
            xG: "slot",
            lG: "clk",
            mG: "digitClk",
            vG: "qsEdit"
        },
        Xn = {
            BACK: "back",
            oQ: "clear",
            x1: "select"
        };
    d = Vn.prototype;
    d.CQ = function() {
        this.l || (this.J = this.O = this.na.Uc().getTime(), this.o = 0, this.p = "", this.L = -1, this.h.length = 0, this.j.length = 0, this.l = !0, this.F = this.U = this.k = 0, this.w = this.A = !1)
    };
    d.Zr = function() {
        return this.l
    };
    d.e6 = function(a) {
        var b = this.h.length;
        0 != b && this.h[b - 1] == a || this.h.push(a)
    };
    d.sD = function() {
        var a = this.h.length;
        1 < a && (this.h[0] = this.h[a - 1], this.h.length = 1)
    };
    d.MQ = function() {
        this.l && (this.p = "", this.kx(), this.l = !1)
    };
    d.SI = function(a) {
        var b = this.na.Uc().getTime();
        this.Ya = b - this.J;
        this.J = b;
        this.p = a;
        this.kx();
        0 == a.length && (this.w = this.A = !1)
    };
    d.kx = function() {
        this.Z = this.o;
        this.o = 0
    };
    d.LH = function() {
        ++this.F
    };
    d.pn = function(a) {
        ++this.o;
        a && ++this.G;
        this.w && !a && (this.A = !0)
    };
    d.KC = function() {
        ++this.k
    };
    d.XI = function() {
        ++this.U
    };
    d.Tr = function(a) {
        a == Xn.BACK && 1 >= this.k || a == Xn.oQ && !this.p.length || (this.va = a, this.rQ())
    };
    d.Rr = function() {
        this.G = 0
    };
    d.Ev = function(a) {
        "qs" == a && (this.w = !0);
        for (var b = 0, c = this.j.length; b < c; ++b)
            if (this.j[b] == a) return;
        this.j.push(a)
    };
    d.ZN = function(a) {
        this.L = a
    };
    d.zL = function() {
        var a = {};
        a[Wn.Um] = "tv_search";
        a[Wn.wG] = this.na.Uc() - this.O;
        a[Wn.uG] = this.Ya;
        a[Wn.rG] = this.Z;
        0 < this.j.length && (a[Wn.oG] = this.j.join(","));
        a[Wn.nG] = this.G;
        a[Wn.tG] = this.p.length;
        a[Wn.sG] = this.va;
        a[Wn.pG] = this.F;
        a[Wn.qG] = this.h.join(",");
        a[Wn.lG] = this.k;
        a[Wn.mG] = this.U;
        this.A && (a[Wn.vG] = !0); - 1 != this.L && (a[Wn.xG] = this.L);
        return a
    };
    d.rQ = function() {
        this.g("/gen_204", this.zL())
    };
    Vn.inject = ["environmentModel", "privateDataService", "timeService", "localeService"];

    function Yn(a, b, c, e, f, g, k, m, n, r, u, t) {
        M.call(this);
        this.la = a;
        this.j = b;
        this.Ka = c;
        this.g = e;
        this.za = f;
        this.k = g;
        this.Z = k;
        this.G = m;
        this.sa = n;
        this.Ea = r;
        this.qa = u;
        this.aa = t;
        this.I = !1;
        this.O = !this.j.le && this.j.supportsHardwareKeyboard || this.j.supportsNativeOsk;
        this.o = this.w = this.W = this.A = this.i = null;
        this.displayedQuery = "";
        this.shouldShowDialUpsell = this.j.Ip;
        this.F = q;
        this.J = 0
    }
    B(Yn, M);
    d = Yn.prototype;
    d.ready = function() {
        this.C("keydown", y(this.OC, this));
        this.C("keyup", y(this.PC, this));
        this.C("keydown", y(this.k.KC, this.k), !0);
        this.C("button-enter", y(this.NC, this));
        this.o = this.Aa("search-input");
        this.j.xk || (this.w = this.Aa("search-keyboard"), this.Kr(this.w));
        this.A = this.Aa("search-suggestions");
        this.j.supportsSearchSuggestion ? this.Kr(this.A) : (this.removeChild(this.A), this.A = null);
        if (!this.O) {
            this.o.D.setAttribute("disabled", "true");
            var a = this.D.querySelector("#search-query");
            this.Ha(a, !0)
        }
        this.K(this.o,
            "keydown", y(this.IC, this), !0);
        this.K(this.o, "keyup", y(this.JC, this), !0);
        this.K(this.o, "input", y(this.HC, this), !0);
        this.K(this.g, "query:changed", y(this.Lr, this));
        this.K(this.g, "results:changed", y(this.LC, this));
        this.C("suggest", y(this.MC, this));
        this.C("request-playback", y(this.Mr, this));
        this.C("request-playlist-playback", y(this.Mr, this));
        this.C("run-process", y(this.QC, this));
        this.j.le && this.Ma("hide-input");
        this.GC();
        this.g.qb() || this.Lr(this.g.wd())
    };
    d.Sf = function() {
        Yn.u.Sf.call(this);
        this.ei();
        this.isHidden && (this.L = this.w)
    };
    d.GC = function() {
        this.j.i || (this.W = this.Aa("pairing"))
    };
    d.ei = function() {
        if (this.W) {
            var a = !this.isHidden && this.g.qb();
            this.Ha(this.D.querySelector(".search-pairing"), a);
            this.Ha(this.D.querySelector(".search-hint"), a);
            this.W.rn(a)
        }
    };
    d.IC = function(a) {
        this.Ll(a.keyCode) && (this.k.LH(), L(a, !0));
        this.O && !this.o.ha() && (this.Ml(a.g) || a.g instanceof MouseEvent) && this.Gi()
    };
    d.Ml = function(a) {
        return "undefined" !== typeof TouchEvent && a instanceof TouchEvent
    };
    d.JC = function(a) {
        this.Ll(a.keyCode) && (this.o.canBeFocusLeaf = !0, L(a, !0));
        switch (a.keyCode) {
            case 8:
                L(a, !0);
                break;
            case 13:
            case 27:
                if (this.j.i && !this.g.qb() && !(a.g instanceof MouseEvent || this.Ml(a.g))) {
                    var b = Rd(a.target, "keydown", 40, !0, a.g);
                    a.target.dispatchEvent(b);
                    this.ha() || L(a)
                }
        }
    };
    d.M = function() {
        this.F();
        this.F = q;
        Yn.u.M.call(this)
    };
    d.wa = function() {
        Yn.u.wa.call(this);
        !this.j.le && this.j.supportsNativeOsk && this.Ka.setTimeout(y(this.vE, this), 0);
        this.ei();
        this.uq();
        this.k.Zr() || this.xE();
        this.G.isSupported() && this.G.doBindSearchBarService(y(this.wE, this));
        this.I || this.g.qb() || this.ji("[[No videos are available|The message shown when a row has no videos to show.]]");
        this.Z.B("record-navigation", "search")
    };
    d.vE = function() {
        this.ha() && this.Gi()
    };
    d.xa = function() {
        Yn.u.xa.call(this);
        this.ji();
        this.ei();
        this.k.Zr() && this.Qx();
        this.G.isSupported() && this.G.doUnbindSearchBarService();
        this.F();
        this.F = q
    };
    d.Hd = function(a) {
        Yn.u.Hd.call(this, a);
        this.iR();
        this.H()
    };
    d.iR = function() {
        this.F();
        var a;
        a = this.Cj() || this.j.supportsNativeOsk ? this.j.useSetsUi && !this.la.La() ? ["guide", "back"] : ["back"] : ["delete", "back", "space"];
        this.F = this.sa.of(a)
    };
    d.Cj = function() {
        return !!this.i && this.i.ha()
    };
    d.wE = function(a) {
        this.g.Bb(a)
    };
    d.HC = function(a) {
        this.g.Bb(a.target.value)
    };
    d.Ll = function(a) {
        return 27 != a && 172 != a && 40 != a && 37 != a && 39 != a && 170 != a && 181 != a && 13 != a
    };
    d.MC = function(a) {
        var b = "qs";
        this.g.wd() || (b = "history");
        this.g.Bb(a.detail);
        this.k.Ev(b);
        this.k.Rr()
    };
    d.Kr = function(a) {
        this.j.supportsMouseOverSearch && a.C("mouseover", y(this.KP, this, a))
    };
    d.xE = function() {
        this.k.CQ();
        this.K(this.Z, "report-search-outcome", y(this.BQ, this))
    };
    d.Qx = function() {
        this.k.MQ();
        this.Td(this.Z, "report-search-outcome")
    };
    d.Mr = function(a) {
        this.aw();
        a.detail.data && this.aa.im(this.g.wd(), a.detail.data, this.J)
    };
    d.QC = function(a) {
        a.detail instanceof lh && (this.aw(), this.aa.im(this.g.wd(), null, this.J))
    };
    d.aw = function() {
        this.i && this.i.ra && this.k.ZN(this.i.ra());
        this.Yw("select")
    };
    d.BQ = function(a) {
        this.Yw(a.detail)
    };
    d.Yw = function(a) {
        this.k.Tr(a);
        this.Qx()
    };
    d.PC = function(a) {
        switch (a.keyCode) {
            case 13:
            case 172:
            case 71:
                L(a, !0), this.j.useSetsUi && this.Cj() && this.X("request-open-guide")
        }
    };
    d.OC = function(a) {
        switch (a.keyCode) {
            case 40:
                this.RH();
                L(a);
                break;
            case 38:
                this.SH();
                L(a);
                break;
            case 172:
                this.Cj() || (L(a, !0), this.j.supportsNativeOsk || this.g.bu());
                break;
            case 170:
                L(a, !0);
                this.Cj() || this.g.au(" ");
                break;
            default:
                this.j.supportsHardwareKeyboard && this.Ll(a.keyCode) && (13 != a.keyCode || a.g && !(a.g instanceof MouseEvent || this.Ml(a.g))) && (this.j.Lp || 8 != a.keyCode) && this.Gi()
        }
    };
    d.KP = function(a) {
        a && a.fa()
    };
    d.Cw = function() {
        return !!this.w && this.w.ha()
    };
    d.Bw = function() {
        return !!this.o && this.o.ha()
    };
    d.TM = function() {
        return !!this.A && this.A.ha()
    };
    d.RH = function() {
        if (this.Bw()) {
            if (this.Aw()) {
                this.A.fa();
                return
            }
            if (this.w) {
                this.w.fa();
                return
            }
        } else if (this.TM() && this.w) {
            this.w.fa();
            return
        }
        this.I && this.i ? this.i.fa() : this.Cw() && this.w.Ed()
    };
    d.SH = function() {
        this.Cw() && this.Aw() ? this.A.fa() : this.i && this.i.ha() && this.w ? this.w.fa() : this.o.canBeFocusLeaf && !this.Bw() ? this.Gi() : this.G.isSupported() && this.G.focusToSearchBar()
    };
    d.Aw = function() {
        return this.j.supportsSearchSuggestion && 0 < this.A.model.suggestions.S()
    };
    d.NC = function(a) {
        var b = a.detail;
        b && (this.k.pn(!1), "delete-tile" === b.buttonClass ? this.g.bu() : "clear-query-tile" === b.buttonClass ? this.g.Bb("") : b.label && this.g.au(b.label.replace("_", " ")), -1 < "1234567890_".indexOf(a.target.textContent) && y(this.k.XI, this.k))
    };
    d.Lr = function() {
        var a = this.g.wd();
        this.o.isHidden = !this.g.qb() && !this.O;
        if (this.O) {
            var b = this.o.D;
            b.value != a && (b.value = a, b.scrollLeft = b.scrollWidth - b.clientWidth)
        } else this.displayedQuery = a, this.H();
        this.i && this.i.ga();
        this.I = !1;
        this.ei();
        this.ji();
        this.uq();
        this.X("toggle-loading", !this.g.qb());
        this.g.qb() ? (this.k.Tr("clear"), this.k.Rr(), this.k.sD()) : this.za.tD()
    };
    d.uq = function() {
        this.j.supportsSearchSuggestion && this.A.update(this.g.wd())
    };
    d.LC = function(a) {
        this.k.SI(this.g.wd());
        this.X("toggle-loading", !1);
        this.TI(a)
    };
    d.TI = function(a) {
        this.J = a && a.estimatedResults || 0;
        var b = p("contents.sectionListRenderer.contents.0", a),
            c = b ? p("itemSectionRenderer.contents", b) : null;
        c && 1 == c.length && (b = p("contents", a));
        (this.I = 0 < this.J && !!b) || this.g.qb() || this.ji("[[No videos are available|The message shown when a row has no videos to show.]]");
        b && (a = this.qa.g(this.Ea, b, this.i), a != this.i && (b = this.i ? this.i.D : this.D.querySelector("#results-placeholder"), this.D.replaceChild(a.D, b), this.i && this.removeChild(this.i), a.D.id = "search-results",
            this.Va(a), this.i = a), a.isHidden ? a.Ba() : a.H())
    };
    d.Gi = function() {
        this.o.canBeFocusLeaf = !0;
        this.o.fa();
        var a = this.o.D.value.length;
        this.o.D.setSelectionRange(a, a)
    };
    d.ji = function(a) {
        !this.ha() && a || this.X("update-message", a)
    };
    d.ua = function() {
        var a = Yn.u.ua.call(this);
        this.w && this.w.model.Ae && (a.push("multi-row-keyboard"), this.i && this.L == this.i && a.push("input-collapsed"));
        return a
    };
    Yn.inject = "applicationState environmentModel timeService searchQueryModel remoteService searchReporting rootDispatcher searchApi legendModel searchService inflater searchHistoryService".split(" ");

    function Zn() {
        P.call(this);
        this.id = "loginAndLoadW2W"
    }
    B(Zn, P);

    function $n(a, b) {
        Q.call(this);
        this.h = a;
        this.j = b;
        this.i = q
    }
    B($n, Q);
    $n.prototype.Tb = function() {
        this.i = this.j.C("authentication-complete", y(this.l, this));
        this.h.B("request-login")
    };
    $n.prototype.l = function(a) {
        a && (a = new lh("FEwhat_to_watch"), this.h.B("run-process", a));
        this.Ga()
    };
    $n.prototype.Ga = function(a, b, c) {
        $n.u.Ga.call(this, a, b, c);
        this.i()
    };
    $n.inject = ["rootDispatcher", "authService"];

    function ao(a, b, c) {
        M.call(this);
        this.j = a;
        this.o = b;
        this.k = c;
        this.title = "";
        this.i = null;
        this.g = q
    }
    B(ao, M);
    d = ao.prototype;
    d.ea = function() {
        this.K(this.j, "state:changed", y(this.Pv, this));
        this.C("request-login", y(this.DP, this))
    };
    d.ready = function() {
        ao.u.ready.call(this);
        this.title = this.o.T("[[Settings|Menu item title that allows a user to change settings of the application.|1030265337]]");
        this.i = this.Aa("settings-items");
        this.Pv()
    };
    d.M = function() {
        this.g();
        this.g = q;
        ao.u.M.call(this)
    };
    d.wa = function() {
        ao.u.wa.call(this);
        this.MR()
    };
    d.xa = function() {
        ao.u.xa.call(this);
        this.g();
        this.g = q
    };
    d.MR = function() {
        this.g();
        this.g = this.k.of(["back", "search"])
    };
    d.Pv = function() {
        this.i && this.j.Dw(y(function(a) {
            this.i.TL(a);
            this.i.H()
        }, this))
    };
    d.DP = function(a) {
        L(a);
        this.X("run-process", new Zn)
    };
    ao.inject = ["settingsRowService", "localeService", "legendModel"];

    function bo() {
        M.call(this);
        this.titleAnnotation = this.title = "";
        this.g = this.j = null;
        this.k = !1;
        this.i = null
    }
    B(bo, M);
    d = bo.prototype;
    d.ready = function() {
        bo.u.ready.call(this);
        this.j = this.D.querySelector("#content-container")
    };
    d.Y = function(a) {
        bo.u.Y.call(this, a);
        this.isHidden = !this.model
    };
    d.d6 = function() {
        this.k = !0;
        return y(this.eR, this)
    };
    d.eR = function() {
        this.k = !1;
        this.i && (this.Jc(this.i.source, this.i.tc, this.i.Na), this.i = null)
    };
    d.Jc = function(a, b, c) {
        this.k ? this.i = {
            source: a,
            tc: b,
            Na: c
        } : this.model !== a && (this.model = a, this.title = vm(a.title), this.titleAnnotation = vm(a.titleAnnotation), b = (a = a.content) && b.g(c, a, this.g), b !== this.g && (this.g && (this.j.removeChild(this.g.D), this.removeChild(this.g)), b && (this.Va(b), this.j.appendChild(b.D)), this.g = b))
    };

    function co(a, b, c) {
        Ni.call(this, a);
        this.g = void 0 !== c ? c : 2;
        this.zn(void 0 !== b ? b : 7)
    }
    B(co, xm);
    d = co.prototype;
    d.A4 = function() {
        return this.g
    };
    d.zn = function(a) {
        var b;
        a = void 0 !== a ? a : this.S();
        b = this.$a();
        var c = b.S();
        a < c ? (b = b.ra() - this.g, 0 > b ? b = 0 : b + a > c && (b = c - a)) : b = 0;
        this.Le(b, a)
    };
    d.xh = function() {
        this.zn();
        co.u.xh.call(this)
    };
    d.yh = function(a, b) {
        b = this.Ve(b);
        this.zn();
        a = this.Ve(a);
        a !== b && this.B("selectedIndex:changed", a, b)
    };
    d.Vd = function(a) {
        return this.Gd(a) - this.$a().ra()
    };

    function eo(a, b, c) {
        b = {
            items: b
        };
        a = {
            shelfRenderer: {
                title: {
                    runs: [{
                        text: a
                    }]
                },
                content: {
                    horizontalListRenderer: b
                }
            }
        };
        c && (b.continuations = c);
        return a
    };

    function fo(a, b, c, e, f, g, k, m, n, r) {
        M.call(this);
        this.G = a;
        this.O = b;
        this.k = c;
        this.A = e;
        this.w = f;
        this.o = g;
        this.J = k;
        this.I = n;
        this.F = r;
        this.title = "";
        this.noContentMessage = this.o.T("[[No videos are available|The message shown when a row has no videos to show.]]");
        this.g = this.i = null;
        this.j = q;
        this.h = m;
        this.canBeFocusLeaf = !0
    }
    B(fo, M);
    d = fo.prototype;
    d.Jf = function() {
        if (this.l) {
            this.g = new R;
            this.i = this.I({
                carouselAnimator: "$shelfAnimator"
            });
            var a;
            this.G.isLimitedAnimation ? (this.i.elementLimit = 2, a = new Oi(this.g, 0, 2)) : a = new co(this.g, this.F, 1);
            this.i.isVertical = !0;
            this.i.rateLimit = Pb;
            this.i.model = a;
            this.Va(this.i);
            this.K(this.g, "selectedIndex:changed", y(this.HE, this))
        }
    };
    d.ready = function() {
        fo.u.ready.call(this);
        this.h.isSupported() && (this.h.pb("[[Scroll up|Speech command to move selection up.]]", y(this.dt, this, -1), !1), this.h.pb("[[Scroll down|Speech command to move selection down.]]", y(this.dt, this, 1), !1), this.J.g(this.h.tg()), this.h.Tc(this))
    };
    d.ea = function() {
        this.D.appendChild(this.i.D)
    };
    d.ua = function() {
        var a = fo.u.ua.call(this);
        this.g && 0 !== this.g.S() || a.push("no-content");
        return a
    };
    d.Jc = function(a, b) {
        this.model = a;
        this.i.re(y(this.A.g, this.A, b), !0);
        this.g.ma(this.$F(a.contents, a.continuations), 0);
        this.Bl();
        this.H()
    };
    d.wF = function(a) {
        this.title = "";
        a && (this.title = vm(a.title))
    };
    d.$F = function(a, b) {
        var c = [];
        if (!a || !s(a)) return c;
        for (var e = [], f, g = 0; g < a.length; ++g) {
            var k = a[g];
            f = qc(k);
            "shelfRenderer" === f || "playlistVideoListRenderer" === f ? c.push(k) : "itemSectionRenderer" === f && (f = p("itemSectionRenderer.contents", k)) && 0 < f.length && ("shelfRenderer" === qc(f[0]) ? c.push(f[0]) : e.push.apply(e, f))
        }
        0 === c.length && 0 < e.length && (g = "", "FEsubscriptions" == this.w.Df() ? g = this.o.T("[[My Subscriptions|Title for a feed of videos from the channels that the user is subscribed to.]]") : "FEhistory" == this.w.Df() &&
            (g = this.o.T("[[History|Title for the list of videos that the user has watched.]]")), c.push(eo(g, e, b)));
        return c
    };
    d.HE = function(a, b) {
        this.Jt(a, b);
        this.k.bG(this.g.ra());
        this.j();
        var c = this.g.Db();
        c instanceof R ? this.j = this.K(c, "selectedIndex:changed", y(this.aG, this)) : this.j = q;
        this.Kt();
        this.Bl()
    };
    d.aG = function(a, b) {
        this.Jt(a, b);
        this.Kt()
    };
    d.Kt = function() {
        var a = -1,
            b = this.g.Db();
        b instanceof R && (a = b.ra());
        this.k.VI(a)
    };
    d.Jt = function(a, b) {
        -1 != a && -1 != b && this.k.fR()
    };
    d.wa = function() {
        fo.u.wa.call(this);
        this.Bl()
    };
    d.xa = function() {
        fo.u.xa.call(this);
        this.Zb()
    };
    d.Bl = function() {
        this.h.isSupported() && this.g && this.ha() && (this.g.ra() && this.g.S() ? this.bd("[[Scroll up|Speech command to move selection up.]]") : this.Gc("[[Scroll up|Speech command to move selection up.]]"), this.g.ra() < this.g.S() - 1 ? this.bd("[[Scroll down|Speech command to move selection down.]]") : this.Gc("[[Scroll down|Speech command to move selection down.]]"))
    };
    d.dt = function(a) {
        this.g.ec(a)
    };
    fo.inject = "environmentModel rootDispatcher browseSetsActivity inflater applicationState localeService voiceFooterModel voiceHelper listFactory shelfCount".split(" ");

    function go(a, b, c, e, f, g, k) {
        Y.call(this, a, b, c);
        this.A = e;
        this.j = f;
        this.i = g;
        this.o = k;
        this.model = new N("");
        this.keepEnabled = !1;
        this.isHidden = !0;
        this.K(this.A, "isPlayingAd:changed", y(this.zK, this));
        this.K(this.i, "timeUntilSkippable:changed", y(this.Nr, this));
        this.K(this.i, "skipState:changed", y(this.yK, this))
    }
    B(go, Y);
    d = go.prototype;
    d.ea = function() {
        this.C("button-enter", y(this.o.$x, this.o));
        go.u.ea.call(this)
    };
    d.zK = function(a) {
        a && this.i.g ? (this.Nr(this.i.timeUntilSkippable), this.K(this.j, "currentTime:changed", y(this.uE, this))) : (this.Td(this.j, "currentTime:changed"), this.ga(), this.H())
    };
    d.yK = function(a) {
        3 == a ? (this.model.label = this.g.T("[[Skip Ad|Label indicating action that the user can take to skip thead.]]"), this.model.enabled = !0, this.model.$g = this.model.label, this.Ah(), this.Ma("canskip")) : (this.model.enabled = this.keepEnabled, this.model.$g = "", this.Ah(), this.Sa("canskip"));
        this.H()
    };
    d.uE = function() {
        0 < this.j.currentTime && (this.Ba(), this.Td(this.j, "currentTime:changed"))
    };
    d.Nr = function(a) {
        2 == this.i.skipState && (this.model.label = this.g.T("[[You can skip ad in {{n}}s|Label indicating the number ofseconds until an ad can be skipped.]]").replace("{{n}}", String(a)), this.H())
    };
    go.inject = "localeService voiceHelper rateLimit playerFacade progressModel adModel adService".split(" ");

    function wm(a, b, c, e, f, g, k, m, n) {
        N.call(this, "", g, e, "toggleButton", c, k);
        this.selected = !!f;
        this.Xr = !0;
        this.Yg = a || "";
        this.Ri = b || this.Yg || "";
        this.i = m || this.Yg;
        this.h = n || this.Ri;
        this.g()
    }
    B(wm, N);
    wm.prototype.toggle = function() {
        this.selected = !this.selected;
        this.g()
    };
    wm.prototype.cc = function(a) {
        a != this.selected && (this.selected = a, this.g())
    };
    wm.prototype.g = function() {
        this.label = this.selected ? this.Yg : this.Ri;
        this.$g = this.selected ? this.i : this.h;
        this.B("toggle:changed")
    };

    function ko(a, b, c, e, f, g, k) {
        M.call(this);
        this.A = a;
        this.O = b;
        this.g = c;
        this.I = e;
        this.j = f;
        this.J = g;
        this.o = k;
        this.i = !1;
        this.nextVideo = this.currentVideo = null;
        this.w = new wm(this.j.T("[[pause|Voice command to pause the video.]]"), this.j.T("[[play|Voice command to play the video]]"), "icon-player-play", this.hB);
        this.k = new wm(this.j.T("[[unmute|Voice command to unmute the video.]]"), this.j.T("[[mute|Voice command to mute the video.]]"), "icon-mute", this.gB);
        this.F = new N(this.j.T("[[fullscreen|Voice command to enter fullscreen mode on Xbox One.]]"),
            void 0, this.fB, "labelButton", "icon-fullscreen");
        this.buttonCollection = new R;
        this.buttonCollection.ma([this.k, this.w, this.F]);
        this.G = null;
        this.canBeFocusLeaf = !0
    }
    B(ko, M);
    d = ko.prototype;
    d.wa = function() {
        ko.u.wa.call(this);
        this.Gm()
    };
    d.xa = function() {
        ko.u.xa.call(this);
        this.isHidden || this.fa()
    };
    d.initialize = function() {
        this.isHidden = !this.A.isSupported() || "Snapped" != this.A.getViewState()
    };
    d.ga = function() {
        this.g.isMuted() && this.g.Ke();
        ko.u.ga.call(this)
    };
    d.ready = function() {
        this.G = this.D.querySelector("#unsupported-mode");
        this.Aa("snap-progress-bar").Ds();
        this.C("keyup", y(this.xu, this));
        this.C("keydown", y(this.xu, this));
        this.C("button-enter", y(this.NG, this));
        this.K(this.O, "route-change", y(this.wu, this));
        this.K(this.J, "dialog:changed", y(this.wu, this));
        this.K(this.g, "isPlaying:changed", y(this.LG, this));
        this.K(this.g, "isPlayingAd:changed", y(this.Gm, this));
        this.K(this.g, "volumeData:changed", y(this.MG, this));
        this.K(this.o, "rows:changed", y(this.Gm, this))
    };
    ko.prototype.getTitleTrayHidden = function() {
        return !this.i || this.g.isPlayingAd
    };
    d = ko.prototype;
    d.wu = function() {
        this.i = this.I.La() && !this.I.$c();
        this.w.enabled = this.i;
        this.k.enabled = this.i;
        this.buttonCollection.Fe(this.i ? this.k : this.F);
        this.H(!0)
    };
    d.H = function(a) {
        ko.u.H.call(this, a);
        this.Ha(this.G, !this.i);
        this.Ha(this.D.querySelector(".up-next"), !!this.nextVideo && this.i)
    };
    d.NG = function(a) {
        w(a.detail.payload) && a.detail.payload.call(this)
    };
    d.LG = function(a) {
        this.w.cc(1 == a)
    };
    d.MG = function(a) {
        this.k.cc(a.muted)
    };
    d.xu = function(a) {
        L(a)
    };
    d.hB = function() {
        this.g.Om()
    };
    d.gB = function() {
        this.g.isMuted() ? this.g.Ke() : this.g.Mf()
    };
    d.fB = function() {
        this.A.tryUnsnapToFullscreen()
    };
    d.Gm = function() {
        this.g.isPlayingAd ? (this.currentVideo = null, this.nextVideo = this.o.currentVideo) : (this.currentVideo = this.o.currentVideo, this.nextVideo = this.o.vg());
        this.H(!0)
    };
    ko.inject = "systemApi router playerFacade applicationState localeService dialogService watchModel".split(" ");

    function lo(a, b, c) {
        Y.call(this, a, b, c)
    }
    B(lo, Y);
    lo.prototype.Y = function(a) {
        lo.u.Y.call(this, a);
        this.model && this.model.subtitle && (this.model.subtitle = this.g.T(this.model.subtitle))
    };
    lo.inject = ["localeService", "voiceHelper", "rateLimit"];

    function mo(a, b, c, e, f, g, k, m, n, r, u) {
        Hh.call(this, n, r, a, b, c, e, f, g, k, m, u, {
            client: "youtube",
            ds: "yt",
            hl: g.sb
        })
    }
    B(mo, Hh);
    mo.prototype.load = function(a, b) {
        var c = [],
            e = {};
        z(e, this.l);
        a && z(e, this.XP("query", "q", a));
        this.ao();
        var f = this.Id();
        return this.k.dj(f, e, y(function(a) {
            this.vn();
            a = a[1];
            for (var e = 0, f = a.length; e < f; ++e) c.push(a[e][0]);
            this.$n();
            b && b(c)
        }, this))
    };
    mo.prototype.wh = function() {
        return "c1"
    };
    mo.prototype.dg = function() {
        return "//clients1.google.com"
    };
    mo.inject = "csiService ytHttp environmentModel cacheService backendErrorReporting localeModel networkStatus videoParser id path paramKey".split(" ");

    function no(a, b) {
        this.label = a;
        this.$ = b || "searchSuggestion"
    };

    function oo(a, b, c, e, f) {
        I.call(this);
        this.p = a;
        this.j = b;
        this.l = c;
        this.k = e;
        this.o = f;
        this.suggestions = new R;
        this.g = q;
        this.l.C("search-history-cleared", y(this.update, this, ""))
    }
    B(oo, I);
    oo.prototype.update = function(a) {
        this.g();
        this.g = q;
        if (a) this.g = this.p.load({
            query: a
        }, y(this.h, this), y(function() {
            this.h([])
        }, this));
        else if (this.k.cb(xb)) this.suggestions.clear();
        else {
            a = this.i(this.l.eB());
            if (0 < a.length) {
                var b = this.o.T("[[Clear history|Label for a button used to clear search history.]]");
                a.push(new no(b, "clearSearchSuggestion"))
            }
            this.suggestions.ma(a)
        }
    };
    oo.prototype.h = function(a) {
        this.suggestions.ma(this.i(a));
        this.j.isSupported() && this.j.setSuggestions(a)
    };
    oo.prototype.i = function(a) {
        for (var b = [], c = 0, e = a.length; c < e; ++c) b.push(new no(a[c]));
        return b
    };
    oo.inject = ["suggestionService", "searchApi", "searchHistoryService", "environmentModel", "localeService"];

    function po(a, b) {
        M.call(this);
        this.model = a;
        this.catchMouseMove = b.supportsMouseOverSearch;
        this.g = null
    }
    B(po, M);
    d = po.prototype;
    d.ea = function() {
        this.C("keyup", y(this.Ly, this));
        this.C("keydown", y(this.iS, this));
        this.C("click", y(this.Ly, this))
    };
    d.ready = function() {
        this.g = this.Aa("suggest-list")
    };
    d.update = function(a) {
        this.model.update(a)
    };
    d.Ly = function(a) {
        ("click" == a.type || 13 == a.keyCode) && 0 <= this.model.suggestions.ra() && (L(a), this.X("suggest", this.model.suggestions.Db().label))
    };
    d.iS = function(a) {
        39 == a.keyCode && L(a)
    };
    d.dd = function() {
        return this.g && this.g.model && this.g.model.S() ? this.g : null
    };
    po.inject = ["suggestionsModel", "environmentModel"];

    function qo(a) {
        M.call(this);
        this.g = a
    }
    B(qo, M);
    qo.prototype.Y = function(a) {
        qo.u.Y.call(this, a);
        this.model && this.g.B("request-system-error-dialog", this.model)
    };
    qo.inject = ["rootDispatcher"];

    function ro(a, b) {
        I.call(this);
        this.id = a;
        this.$ = b;
        this.isBeingRemoved = !1
    }
    B(ro, I);
    de(ro, ["isBeingRemoved"]);

    function so(a, b) {
        ro.call(this, a, "deviceToast");
        this.device = b;
        this.localizedMessage = this.userAvatarUri = ""
    }
    B(so, ro);

    function to(a) {
        ro.call(this, "updatePlaylistToastId", "updatePlaylistToast");
        this.user = a.user || "";
        this.userAvatarUri = a.userAvatarUri || "";
        this.videoImageUri = a.videoImageUri || "";
        this.videoTitle = a.videoTitle || "";
        this.videoCount = a.videoIds ? a.videoIds.length : 0;
        this.hidePlaylistOverlay = "PLAYLIST_ADDED" === a.eventType ? "" : "hidden";
        this.localizedMessage = "";
        if (this.userAvatarUri && this.user) switch (a.eventType) {
            case "VIDEO_ADDED":
                this.localizedMessage = "[[{{username}} added video|Toast message indicating that a signed-in user has added a video to the TV Queue.]]";
                break;
            case "VIDEO_REMOVED":
                this.localizedMessage = "[[{{username}} removed video|Toast message indicating that a signed-in user has removed a video from the TV Queue.]]";
                break;
            case "PLAYLIST_ADDED":
                this.localizedMessage = "[[{{username}} added playlist|Displayed when a signed-in user added a playlist to the TV queue]]"
        } else switch (a.eventType) {
            case "VIDEO_ADDED":
                this.localizedMessage = "[[Video was added|Toast message indicating that a signed-out user has added a video to the TV Queue.]]";
                break;
            case "VIDEO_REMOVED":
                this.localizedMessage =
                    "[[Video was removed|Toast message indicating that a signed-out user has removed a video from the TV Queue.]]";
                break;
            case "PLAYLIST_ADDED":
                this.localizedMessage = "[[Playlist was added|Displayed when a signed-out user added a playlist to the TV queue]]"
        }
    }
    B(to, ro);

    function uo(a, b) {
        ro.call(this, "volumeToastId", "volumeToast");
        this.volume = a;
        this.isMuted = b
    }
    B(uo, ro);

    function vo(a, b, c, e, f, g) {
        M.call(this);
        this.k = a;
        this.g = b;
        this.A = c;
        this.j = e;
        this.o = f;
        this.w = g;
        this.i = {};
        this.model = new ze
    }
    B(vo, M);
    d = vo.prototype;
    d.ready = function() {
        this.g.l || this.K(this.A, "volumeData:changed", y(this.KF, this));
        this.K(this.j, "remote:connected", y(this.mt, this));
        this.K(this.j, "remote:disconnected", y(this.mt, this));
        this.K(this.j, "playlist:updated", y(this.IF, this));
        this.HF() && this.JF()
    };
    d.HF = function() {
        return this.g.h && this.g.supportsUploads && !this.o.get("uploads-toast-shown")
    };
    d.JF = function() {
        this.Tg("uploadsToastId");
        var a = new ro("uploadsToastId", "uploadsToast");
        this.Pi(a, 15E3);
        this.model.push(a);
        this.o.Oa("uploads-toast-shown", !0)
    };
    d.IF = function(a) {
        this.g.cb(Eb) && (this.Tg("updatePlaylistToastId"), a = new to(a), a.localizedMessage = this.w.T(a.localizedMessage).replace("{{username}}", a.user), this.Pi(a, 5E3), this.model.push(a))
    };
    d.KF = function(a, b) {
        var c = -1 == b.volume,
            e = Number(a.volume),
            f = !ea(e) || isNaN(e) || 0 > e || 100 < e;
        c || f || (this.Tg("volumeToastId"), c = new uo(e, a.muted), this.Pi(c, 7500), this.model.unshift(c))
    };
    d.Pi = function(a, b) {
        this.i[a.id] = this.k.setTimeout(y(this.gO, this, a), b)
    };
    d.sS = function(a) {
        this.k.clearTimeout(this.i[a.id]);
        delete this.i[a.id]
    };
    d.mt = function(a, b) {
        if (b) {
            this.Tg(a.id);
            var c = new so(a.id, a);
            this.g.cb(Db) && a.i && a.username && (c.userAvatarUri = a.i, c.localizedMessage = this.w.T(a.h ? "[[{{username}} joined|Toast message indicating that a user has joined a session]]" : "[[{{username}} left|Toast message indicating that a user has left a session]]").replace("{{username}}", c.device.username));
            this.Pi(c, 5E3);
            this.model.push(c)
        }
    };
    d.gO = function(a) {
        a.isBeingRemoved = !0;
        this.i[a.id] = this.k.setTimeout(y(this.Tg, this, a.id), 700)
    };
    d.Tg = function(a) {
        for (var b = 0, c = this.model.S(); b < c; ++b) {
            var e = this.model.ya(b);
            if (e.id === a) {
                this.sS(e);
                this.model.splice(b, 1);
                break
            }
        }
    };
    vo.inject = "timeService environmentModel playerFacade remoteService localStorage localeService".split(" ");

    function wo(a, b, c) {
        W.call(this, a, b, c);
        this.model = null;
        this.g = q
    }
    B(wo, W);
    wo.prototype.Y = function(a) {
        wo.u.Y.call(this, a);
        this.g();
        this.model && this.model.Zg ? this.g = this.model.Zg.C("value:changed", y(this.H, this)) : this.g = q
    };
    wo.prototype.Kf = function() {
        wo.u.Kf.call(this);
        if (this.model) {
            var a = this.model.Zg;
            a.h(!a.get())
        }
    };
    wo.inject = ["localeService", "voiceHelper", "rootDispatcher"];

    function xo(a, b, c, e) {
        M.call(this);
        this.o = b;
        this.A = a;
        this.i = 0;
        this.k = this.j = "";
        this.F = c;
        this.w = e;
        this.langCodePair = null;
        this.transliterations = new R;
        this.g = null
    }
    B(xo, M);
    d = xo.prototype;
    d.initialize = function() {
        this.F.AQ() && (this.gy(this.o.wd()), this.K(this.o, "query:changed", y(this.gy, this)))
    };
    d.ea = function() {
        this.C("button-enter", y(this.lS, this))
    };
    d.gy = function(a) {
        this.i && (this.w.clearTimeout(this.i), this.i = 0);
        for (var b = this.j; b.length && a.substr(0, b.length) !== b;) b = b.substr(0, b.length - 1);
        a = a.substr(b.length);
        this.j = b;
        a != this.k && (this.k = a, this.g && (this.g(), this.g = null), this.Hl(), a && (this.i = this.w.setTimeout(y(this.wD, this), 500)))
    };
    d.wD = function() {
        this.i = 0;
        this.g && (this.g(), this.g = null);
        this.g = this.A.h(this.k, this.langCodePair, y(this.DC, this))
    };
    d.DC = function(a) {
        if (this.k) {
            for (var b = [], c = 0, e = a.length; c < e; ++c) b.push(new N(a[c]));
            this.transliterations.ma(b)
        } else this.Hl()
    };
    d.Hl = function() {
        this.transliterations.clear()
    };
    d.lS = function(a) {
        this.j += a.detail.label;
        this.k = "";
        this.o.Bb(this.j);
        this.Hl();
        this.X("transliteration-selected");
        L(a)
    };
    d.M = function() {
        this.i && (this.w.clearTimeout(this.i), this.i = 0);
        this.g && (this.g(), this.g = null);
        xo.u.M.call(this)
    };
    xo.inject = ["transliterationService", "searchQueryModel", "localeModel", "timeService"];

    function yo(a, b, c, e, f, g, k, m, n, r, u, t) {
        M.call(this);
        this.i = a;
        this.aa = b;
        this.g = c;
        this.k = e;
        this.qa = f;
        this.md = g;
        this.Lb = k;
        this.Qc = m;
        this.od = n;
        this.Pc = r;
        this.kd = u;
        this.totalTime = this.elapsedTime = "";
        this.nd = this.o = this.Ea = null;
        this.I = 0;
        this.sa = !1;
        this.buttonCollection = new R;
        this.j = [];
        this.Sc = new N(this.i.T("[[more actions|Voice command to show the other set of actions.]]"), void 0, this.kA, "labelButton", "icon-player-more");
        this.zc = new N(this.i.T("[[Go home|Speech command for going back to the home screen.]]"),
            void 0, this.eA, "labelButton", "icon-home");
        this.Rc = new N(this.i.T("[[skip backward|Voice command skip back to previous video.]]"), void 0, this.hA, "labelButton", "icon-player-prev");
        this.Ka = new N(this.i.T("[[rewind|Voice command to jump the video backward.]]"), void 0, this.iA, "labelButton", "icon-player-rew");
        this.Ka.rateLimit = 20;
        this.W = new wm(this.i.T("[[pause|Voice command to pause the video.]]"), this.i.T("[[play|Voice command to play the video]]"), "icon-player-play", this.mA);
        this.O = new N(this.i.T("[[forward|Voice command to jump the video forward.]]"),
            void 0, this.cA, "labelButton", "icon-player-ff");
        this.O.rateLimit = 20;
        this.O.aq = .65;
        this.yc = new N(this.i.T("[[skip forward|Voice command to skip to the next video.]]"), void 0, this.gA, "labelButton", "icon-player-next");
        this.J = new wm(this.i.T("[[captions|Voice command choose the state of closed captions.]]"), void 0, "icon-player-closedcaptions", this.aA);
        this.G = new N("", void 0, q, "skip-ad-button", "skip-ad-button");
        a = new N("", void 0, void 0, "labelButton", "spacer", !1);
        a.enabled = !1;
        this.Z = [this.Sc, this.zc, this.Rc,
            this.Ka, this.W, this.O, this.yc, this.J, a, this.G
        ];
        this.za = Ma(this.Z, this.W);
        this.Ua = Ma(this.Z, this.G);
        this.buttonCollection.ma(this.Z, this.za);
        this.pd = new N(this.i.T("[[more actions|Voice command to show the other set of actions.]]"), void 0, this.Ik, "labelButton", "icon-player-less");
        this.la = new wm(this.i.T("[[subscribe|Voice command to subscribe to the video's channel]]"), void 0, "icon-logo-lozenge", this.lA);
        this.A = new wm(this.i.T('[[like|Voice command to "like" the video.]]'), void 0, "icon-like", this.fA);
        this.w = new wm(this.i.T('[[dislike|Voice command to "dislike" the video.]]'), void 0, "icon-dislike", this.bA);
        this.zb = new N(this.i.T("[[flag|Voice command to flag the video.]]"), void 0, this.dA, "labelButton", "icon-flag");
        this.rd = new N(this.i.T("[[search|Voice command to go to the search page.]]"), void 0, this.jA, "labelButton", "icon-search");
        this.qd = [this.pd, this.la, this.A, this.w, this.zb, this.rd, a, a, a];
        this.F = null;
        this.h = t
    }
    B(yo, M);
    d = yo.prototype;
    d.initialize = function() {
        this.Pc.Ka && this.K(this.Qc, "engage-change", y(this.qS, this))
    };
    d.ready = function() {
        this.nd = this.D.querySelector(".player-controls");
        this.Ea = this.Aa("progress-bar");
        this.o = this.Aa("button-list");
        this.C("button-enter", y(this.QP, this));
        this.K(this.buttonCollection, "selectedIndex:changed", y(this.Xj, this));
        this.C("keyup", y(this.RP, this));
        this.Ba()
    };
    d.Ba = function() {
        0 === this.j.length && this.hG();
        this.sa = !1;
        this.kt();
        this.ct(this.g.isPlaying);
        this.zm();
        this.isHidden && (this.Ik(), this.buttonCollection.Ia(this.G.enabled ? this.Ua : this.za));
        yo.u.Ba.call(this)
    };
    d.ga = function() {
        yo.u.ga.call(this);
        for (var a = 0, b = this.j.length; a < b; ++a) this.j[a]();
        this.j.length = 0;
        this.Ea.AO();
        this.qa.clearTimeout(this.I);
        this.io()
    };
    d.M = function() {
        this.qa.clearTimeout(this.I);
        this.io();
        yo.u.M.call(this)
    };
    d.hG = function() {
        this.j.push(this.K(this.g, "isPlaying:changed", y(this.ct, this)));
        this.j.push(this.K(this.g, "isPlayingAd:changed", y(this.qH, this)));
        this.j.push(this.K(this.g, "state:changed", y(this.zm, this)));
        this.j.push(this.K(this.aa, "duration:changed", y(this.Ju, this)));
        this.j.push(this.K(this.aa, "currentTime:changed", y(this.Ku, this)));
        this.j.push(this.K(this.G, "enabled:changed", y(this.rH, this)));
        this.Ku(this.aa.currentTime);
        this.Ju(this.aa.duration);
        this.Ea.Ds()
    };
    d.qH = function(a) {
        a ? this.Ik() : this.buttonCollection.ra() === this.Ua && this.buttonCollection.Ia(this.za);
        this.kt();
        this.zm();
        this.H()
    };
    d.rH = function(a) {
        a && (this.buttonCollection.Ia(this.Ua), this.o.H(!0))
    };
    d.kt = function() {
        this.g.isPlayingAd ? this.Ma("ad-active") : this.Sa("ad-active")
    };
    d.ct = function(a) {
        this.W.cc(a);
        a && this.Xj();
        this.H()
    };
    d.qS = function(a) {
        this.kd.La() && (a.detail[0] ? (this.Ba(), this.fa()) : this.ga())
    };
    d.RP = function(a) {
        switch (a.keyCode) {
            case 37:
            case 39:
                L(a)
        }
    };
    d.Ku = function(a) {
        this.elapsedTime = this.i.ef(a);
        this.H()
    };
    d.Ju = function(a) {
        this.g.rf() || (this.totalTime = this.i.ef(a), this.H())
    };
    d.QP = function(a) {
        this.Xj();
        a && a.detail.payload && a.detail.payload.call(this)
    };
    d.wO = function() {
        this.I = 0;
        this.io();
        this.ha() && (this.sa = !0, this.X("transport-user-input-expired"))
    };
    d.cG = function() {
        return this.sa
    };
    d.Xj = function() {
        this.qa.clearTimeout(this.I);
        this.I = this.qa.setTimeout(y(this.wO, this), this.h.isSupported() && this.h.Sm() ? 1E4 : 3E3);
        this.xO()
    };
    d.xO = function() {
        if (!this.F) {
            var a = this.od(2, y(this.Xj, this));
            this.F = this.Qc.C("mousemove", a)
        }
    };
    d.io = function() {
        this.F && (this.F(), this.F = null)
    };
    d.zm = function() {
        var a = this.g.ii(),
            b = this.g.isPlayingAd,
            c = 1E3 === this.g.state;
        this.W.enabled = !c;
        this.Sc.enabled = !b;
        this.zc.enabled = !b;
        this.Rc.enabled = (a || c) && !b && !!this.k.ql();
        this.Ka.enabled = a && !this.g.rf() && !b;
        this.O.enabled = a && !this.g.rf() && !b;
        this.yc.enabled = (a || c) && !b && !!this.k.vg();
        this.J.enabled = a && !b;
        b || (this.G.enabled = !1);
        b = this.Pc.brokenLogin;
        this.la.enabled = a && !b && this.NE();
        this.A.enabled = a && !b;
        this.w.enabled = a && !b;
        this.zb.enabled = a;
        this.OE();
        this.o.H(!0)
    };
    d.OE = function() {
        var a = this.g.ul() && !this.g.isPlayingAd;
        this.J.enabled = a;
        this.J.cc(a && !vc(this.g.Si()))
    };
    d.FQ = function() {
        this.k.currentVideo && (this.A.cc(this.Do()), this.w.cc(this.Co()))
    };
    d.kA = function() {
        this.FQ();
        this.la.cc(this.Ox());
        this.buttonCollection.ma(this.qd);
        this.o.H(!0)
    };
    d.Ik = function() {
        this.buttonCollection.ma(this.Z);
        this.o.H(!0)
    };
    d.eA = function() {
        this.X("run-process", new dh)
    };
    d.hA = function() {
        this.ga();
        this.X("previous-video")
    };
    d.iA = function() {
        this.g.Jj(-10)
    };
    d.mA = function() {
        this.g.Om()
    };
    d.cA = function() {
        this.g.Jj(10)
    };
    d.gA = function() {
        this.ga();
        this.X("next-video")
    };
    d.aA = function() {
        this.g.pause();
        this.X("request-cc-options-dialog")
    };
    d.lA = function() {
        var a = this.k.currentVideo;
        if (a && a.channel) {
            var b = !this.Ox();
            this.la.cc(b);
            a = new rm(a.channel, b);
            this.X("run-process", a)
        }
    };
    d.NE = function() {
        var a = this.k.currentVideo;
        return !(!a || !a.channel || !a.channel.username && !a.channel.userId)
    };
    d.Ox = function() {
        var a = this.k.currentVideo;
        return a && a.channel ? this.Lb.py(a.channel.username) || this.Lb.py(a.channel.userId) : !1
    };
    d.fA = function() {
        this.A.cc(!0);
        this.Do() || (this.w.cc(!1), this.iy(!0))
    };
    d.bA = function() {
        this.w.cc(!0);
        this.Co() || (this.A.cc(!1), this.iy(!1))
    };
    d.iy = function(a) {
        a && this.Do() || !a && this.Co() || this.k.currentVideo && this.X("request-like-video", [this.k.currentVideo.videoId, a ? "like" : "dislike"])
    };
    d.dA = function() {
        this.X("request-flag-options-dialog")
    };
    d.jA = function() {
        this.X("request-search")
    };
    d.Do = function() {
        return this.xz("like")
    };
    d.Co = function() {
        return this.xz("dislike")
    };
    d.xz = function(a) {
        var b = this.k.currentVideo && this.k.currentVideo.videoId;
        return !!b && this.md.get("video_like_value", b) == a
    };
    d.ua = function() {
        var a = yo.u.ua.call(this);
        this.g.rf() && a.push("live-playback");
        return a
    };
    yo.inject = "localeService progressModel playerFacade watchModel timeService cacheService subscriptionsModel rootDispatcher rateLimit environmentModel applicationState voiceHelper".split(" ");

    function zo() {
        Jm.call(this);
        this.model = null
    }
    B(zo, Jm);
    zo.prototype.g = function() {
        return this.model.userAvatarUri ? "avatar" : "no-user-avatar"
    };
    zo.prototype.getMessage = function() {
        return this.model.localizedMessage
    };

    function Ao() {
        M.call(this)
    }
    B(Ao, M);
    Ao.prototype.Y = function(a) {
        Ao.u.Y.call(this, a);
        this.model && this.Fd("percentage:changed", y(this.H, this))
    };

    function Bo(a, b) {
        M.call(this);
        this.k = a;
        this.o = b;
        this.i = this.j = this.g = this.model = null;
        this.videoOverviewData = this.cD()
    }
    B(Bo, M);
    d = Bo.prototype;
    d.ea = function() {
        this.C("button-enter", y(this.mS, this))
    };
    d.Y = function(a) {
        Bo.u.Y.call(this, a);
        a = this.model.videoModel.Ob;
        if (!a) throw Error("Overview component got a video model with null privacy.");
        this.j.j(a);
        this.g.label = this.model.videoModel.title;
        this.g.buttonClass = "title-button";
        this.i.payload = this.model.videoModel.channel;
        this.model.BD && this.videoOverviewData.Tl(this.j);
        this.H(!0)
    };
    d.cD = function() {
        var a = new Ke,
            b = [],
            c;
        c = new N("[[Title|Label next to field allowing user to edit video title.]]");
        c.enabled = !1;
        c.isSpeakable = !1;
        b.push(c);
        this.g = new N("");
        this.g.isSpeakable = !1;
        b.push(this.g);
        c = new N("[[Privacy|Label next to field allowing user to set video privacy, during editing or uploading a video.]]");
        c.enabled = !1;
        c.isSpeakable = !1;
        b.push(c);
        this.j = new Je;
        this.j.isSpeakable = !1;
        b.push(this.j);
        c = new N("[[Channel|Label next to field allowing user to see and select a channel for uploading a video.]]");
        c.enabled = !1;
        c.isSpeakable = !1;
        b.push(c);
        this.i = new N("");
        this.i.$ = "channel-button";
        this.i.enabled = !1;
        this.i.isSpeakable = !1;
        b.push(this.i);
        a.Dl(b, 2);
        a.Tl(this.g);
        return a
    };
    d.mS = function(a) {
        switch (a.detail) {
            case this.g:
                this.fI();
                break;
            case this.j:
                this.model.OH()
        }
    };
    d.fI = function() {
        this.o.queryVirtualKeyboard(ytshell.constants.Input.KeyboardType.DEFAULT, y(this.ZP, this), y(this.YP, this), this.k.T("[[Enter title|Title of a dialog where user can edit title of a video.]]"), this.k.T("[[80 characters max|Text message that informs user about limitation of a video title.]]"), this.model.videoModel.title)
    };
    d.ZP = function(a) {
        a && (this.model.videoModel.title = a, this.g.label = a, this.H(!0))
    };
    d.YP = function() {};
    Bo.inject = ["localeService", "inputApi"];

    function Co() {
        M.call(this);
        this.model = null
    }
    B(Co, M);
    Co.prototype.ready = function() {
        this.C("button-enter", y(this.g, this))
    };
    Co.prototype.g = function(a) {
        this.model.XV(a.detail)
    };
    Co.prototype.Y = function(a) {
        Co.u.Y.call(this, a);
        this.model.Fv();
        this.H(!0)
    };

    function Do(a, b) {
        this.imageUrl = "";
        this.kb = a;
        this.serviceQuery = b;
        this.videoId = this.title = "";
        this.h = [];
        this.videoCount = this.i = this.id = this.ze = "";
        this.gi = "request-playlist-playback";
        this.channel = null;
        this.videoPosition = this.firstVideoTitle = "";
        this.$ = "playlistTile"
    };

    function Eo(a, b, c, e, f, g) {
        W.call(this, a, b, e);
        this.sa = c;
        this.Ea = e;
        this.W = f;
        this.za = g;
        this.G = this.F = this.o = this.J = this.O = this.Z = this.I = this.aa = null;
        this.g = q;
        this.model = null;
        this.k = !1
    }
    B(Eo, W);
    d = Eo.prototype;
    d.ea = function() {
        Eo.u.ea.call(this);
        this.aa = this.D.querySelector(".details");
        this.Z = this.D.querySelector(".activity");
        this.I = this.D.querySelector(".duration");
        this.O = this.D.querySelector(".text-badge");
        this.J = this.D.querySelector(".live-badge");
        this.F = (this.o = this.D.querySelector(".overlay")) ? this.o.querySelector(".icon") : null;
        this.G = this.D.querySelector(".by")
    };
    d.Y = function(a) {
        Eo.u.Y.call(this, a);
        this.k = this.sa.supportsUploads && this.model instanceof ue && this.model.Kk;
        this.model && this.model.channel && !this.model.gq && (a = this.model.channel.userId == this.model.channel.serviceQuery ? this.model.Lk || this.model.channel.displayName : this.i.T(this.model.activityDescription), this.model.activityDescription = a, this.model.gq = !0, this.model.activityDescription = this.model.activityDescription.replace("{{username}}", this.model.Lk || this.model.channel.displayName))
    };
    d.H = function(a) {
        this.isHidden = !this.model;
        Eo.u.H.call(this, a);
        if (this.model) {
            a = this.model instanceof ue;
            var b = this.model instanceof Do;
            this.Ha(this.I, a && this.model.durationLabel);
            this.Ha(this.J, a && this.model.liveBadgeText);
            this.Ha(this.O, a && this.model.badgeText);
            this.Ha(this.o, b);
            this.mO(this.G, !this.model.channel || !this.model.channel.displayName);
            b ? Vd(this.F, "icon-playlist") : Xd(this.F, "icon-playlist")
        }
    };
    d.M = function() {
        this.g();
        this.g = q;
        Eo.u.M.call(this)
    };
    d.wa = function() {
        Eo.u.wa.call(this);
        this.k && this.uQ()
    };
    d.xa = function() {
        Eo.u.xa.call(this);
        this.k && (this.g(), this.g = q)
    };
    d.Cv = function() {
        return this.k && (this.W.mc() || this.W.Vc())
    };
    d.uQ = function() {
        this.g();
        this.Cv() ? this.g = this.za.Sv("modify") : this.g = q
    };
    d.Fo = function(a) {
        172 !== a.keyCode && 71 !== a.keyCode || !this.Cv() ? Eo.u.Fo.call(this, a) : (L(a), this.Ea.B("request-modify-video-dialog", this.model))
    };
    Eo.prototype.getDescriptionText = function() {
        var a;
        if (this.model) {
            a = this.model.description;
            var b = 86;
            a = a || "";
            if (!(a.length < b || 0 > b)) {
                for (var c = b; 0 < c; c--)
                    if (" " == a[c]) {
                        b = c;
                        break
                    }
                a = a.substr(0, b) + "..."
            }
        } else a = "";
        return a
    };
    Eo.prototype.getSpeechPhrase = function() {
        return this.enabled && this.h.isSupported() ? this.i.T("[[Play video {{n}}|Speech command to play video number n.]]").replace("{{n}}", String(this.w)) : ""
    };
    Eo.inject = "localeService voiceHelper environmentModel rootDispatcher applicationState legendModel".split(" ");

    function Fo(a) {
        M.call(this);
        this.g = a;
        this.message = ""
    }
    B(Fo, M);
    Fo.prototype.Y = function(a) {
        Fo.u.Y.call(this, a);
        this.message = this.g.T(Go[this.model.errorCode]) || this.model.errorCode;
        this.H()
    };
    var Go = {
        invalidTitle: "[[A valid title is required.|Error message informing user that provided video title is invalid or empty]]",
        forbiddenPrivacySetting: "[[Selected privacy setting can not be used for this channel.|Error message informing user that selected video privacy setting is forbidden for selected channel.]]"
    };
    Fo.inject = ["localeService"];

    function Ho(a) {
        M.call(this);
        this.g = a;
        this.model = null
    }
    B(Ho, M);
    Ho.prototype.Y = function(a) {
        Ho.u.Y.call(this, a);
        this.H(!0)
    };
    Ho.prototype.getMessage = function() {
        return this.model && this.model.message ? this.g.T(this.model.message) : ""
    };
    Ho.prototype.getVideoUrl = function() {
        return this.model && this.model.video && this.model.video.videoId ? "youtu.be/" + this.model.video.videoId : ""
    };
    Ho.inject = ["localeService"];

    function Io(a, b) {
        M.call(this);
        this.o = a;
        this.i = new R;
        this.clipsProjection = new ym(this.i, b.useSetsUi ? 3.13 : 3.95);
        this.g = this.j = this.k = null;
        this.rateLimit = 8
    }
    B(Io, M);
    d = Io.prototype;
    d.ea = function() {
        Io.u.ea.call(this);
        this.C("button-enter", y(this.TQ, this))
    };
    d.ready = function() {
        this.k = this.Bc(".error");
        this.j = this.Bc(".empty");
        this.g = this.Bc(".carousel");
        this.o.isSupported() && this.o.getClips(y(this.FF, this), y(this.GF, this))
    };
    d.FF = function(a) {
        this.Xc() || (a.length ? (this.i.ma(a), this.g.fa()) : this.j.Ba())
    };
    d.GF = function() {
        this.Xc() || this.k.Ba()
    };
    d.TQ = function(a) {
        this.X("dialog:complete", a.detail)
    };
    Io.inject = ["dvrApi", "environmentModel"];

    function Jo(a, b, c, e, f) {
        Mi.call(this, c, e);
        this.A = a;
        this.w = !1;
        this.k = f;
        this.K(a, "actionsChanged", y(this.o, this));
        this.K(b, "engage-change", y(this.F, this));
        this.isHidden = !0
    }
    B(Jo, Mi);
    Jo.prototype.F = function(a) {
        this.w = !!a.detail[0];
        this.o()
    };
    Jo.prototype.o = function() {
        this.w && (this.k.mc() || this.k.Vc() || this.k.hf() || this.k.ne()) ? (this.model = this.A.l(), this.Ba()) : this.ga()
    };
    Jo.inject = ["voiceFooterModel", "rootDispatcher", "listSelectionManager", "componentFactory", "applicationState"];

    function Ko() {
        Jm.call(this);
        this.model = null
    }
    B(Ko, Jm);
    Ko.prototype.g = function() {
        var a = this.model.volume;
        return this.model.isMuted ? "volume-muted" : 40 > a ? "volume-low" : 80 > a ? "volume-mid" : "volume-high"
    };
    Ko.prototype.getMessage = function() {
        return String(Math.round(this.model.volume / 10))
    };

    function Lo(a, b, c, e) {
        this.j = a;
        this.w = b;
        this.o = c;
        this.G = e;
        this.i = this.g = this.p = "";
        this.h = {};
        this.U = this.k = "";
        this.F = {};
        this.l = this.A = !1;
        this.L = null;
        this.w.C("route-change", y(this.oA, this));
        this.w.C("external-route-change", y(this.nA, this))
    }
    d = Lo.prototype;
    d.oA = function() {
        this.k = this.g;
        this.U = this.i;
        this.F = this.h;
        this.FB();
        this.EB();
        this.o.B("state-change")
    };
    d.nA = function() {
        this.o.B("external-state-change")
    };
    d.FB = function() {
        var a = this.w.Bg(),
            b = a.Qd();
        "browse-sets" === this.g && (this.L = this.h);
        this.i = b.get("mode", "");
        this.h = {};
        for (var c = b.vb(), e = 0, f = c.length; e < f; ++e) {
            var g = c[e];
            "mode" != g && "suspend" != g && "resume" != g && (this.h[g] = b.get(g))
        }
        this.p = sg(a.Pb());
        switch (this.p) {
            case "pause":
            case "play":
            case "watch":
                this.g = "watch";
                break;
            case "browse-sets":
                this.g = this.Fr();
                break;
            case "settings":
                this.g = this.zC();
                break;
            case "browse":
                this.g = this.Zk();
                break;
            case "post-play":
                this.g = "post-play";
                break;
            default:
                this.g = this.Fr()
        }
    };
    d.EB = function() {
        var a = this.w.Bg().Qd();
        void 0 !== a.get("suspend") ? this.l || (this.l = !0, this.o.B("suspend")) : void 0 !== a.get("resume") && this.l && (this.l = !1, this.o.B("resume"))
    };
    d.Zk = function() {
        return this.j.isChromelessContext ? "call-to-cast" : "browse"
    };
    d.Fr = function() {
        return this.j.useSetsUi && !this.j.isChromelessContext ? "browse-sets" : this.Zk()
    };
    d.zC = function() {
        return this.j.useSetsUi && !this.j.isChromelessContext ? "settings" : this.Zk()
    };
    d.zq = function() {
        return this.p
    };
    d.Df = function() {
        return this.rb("c")
    };
    d.ci = function() {
        return this.g
    };
    d.xe = function() {
        return this.k
    };
    d.df = function() {
        return this.i
    };
    d.zf = function() {
        return this.U
    };
    d.rb = function(a) {
        return this.h[a]
    };
    d.Nm = function() {
        return xc(this.h)
    };
    d.ev = function() {
        return xc(this.L)
    };
    d.Fm = function(a) {
        return this.F[a]
    };
    d.vu = function() {
        return !!this.k && this.g !== this.k
    };
    d.Dv = function(a) {
        this.A = a
    };
    d.Qi = function() {
        return "call-to-cast" === this.g
    };
    d.mc = function() {
        return "browse" === this.g
    };
    d.Vc = function() {
        return "browse-sets" === this.g
    };
    d.hf = function() {
        return "settings" === this.g
    };
    d.Wa = function() {
        return "search" === this.i
    };
    d.$c = function() {
        return this.A
    };
    d.Sg = function() {
        return "browse" === this.g || this.ne() && !this.j.isChromelessContext
    };
    d.La = function() {
        return "watch" === this.g
    };
    d.Wc = function() {
        return "post-play" === this.g
    };
    d.Ze = function() {
        return this.La() && "transport" === this.i
    };
    d.Yq = function() {
        return this.Sg() && !this.Wa() && !this.$c() && !this.La()
    };
    d.ne = function() {
        return "browse" === this.i
    };
    d.Qg = function() {
        return "" === this.i
    };
    d.Wg = function() {
        return this.G.isSupported() && "Snapped" == this.G.getViewState()
    };
    d.Ut = function() {
        var a = parseInt(this.h.t, 10);
        return isNaN(a) ? 0 : a
    };
    d.OI = function() {
        var a = this.h.autoplay;
        return void 0 !== a && 0 == parseInt(a, 10) || "pause" == this.p
    };
    d.sP = function() {
        return "FEwhat_to_watch" === this.h.c
    };
    d.W5 = function() {
        return this.l
    };
    Lo.inject = ["environmentModel", "router", "rootDispatcher", "systemApi"];

    function Mo(a, b, c, e, f, g, k, m, n, r, u, t, x, G) {
        M.call(this);
        this.J = b;
        this.la = c;
        this.k = e;
        this.A = f;
        this.Z = g;
        this.za = k;
        this.g = a;
        this.aa = m;
        this.sa = r;
        this.i = t;
        this.I = x;
        this.qa = G;
        this.O = 0;
        this.F = "";
        this.G = this.j = null;
        this.w = this.W = q;
        if (a = u.Za("start_watch") || u.Za("start_cast") || u.Za("start_dial")) this.W = y(a.tick, a);
        this.h = n.get("voiceHelper");
        this.h.Tc(this);
        this.canBeFocusLeaf = !0
    }
    B(Mo, M);
    d = Mo.prototype;
    d.ea = function() {
        this.K(this.I, "state-change", y(this.oI, this));
        this.K(this.A, "skipState:changed", y(this.nI, this));
        this.C("transport-user-input-expired", y(this.wv, this));
        this.C("keyup", y(this.Jl, this));
        this.C("keydown", this.aa(5, y(this.pI, this), function(a) {
            return 228 === a.keyCode || 76 === a.keyCode || 227 === a.keyCode || 74 === a.keyCode || 38 === a.keyCode || 40 === a.keyCode
        }));
        this.K(this.g, "state:changed", y(this.qI, this))
    };
    d.ready = function() {
        (this.j = this.Aa("transport-controls")) && this.K(this.j, "isHidden:changed", y(this.H, this, !1));
        this.G = this.Bc(".skip-ad-button")
    };
    d.M = function() {
        this.w();
        this.w = q;
        Mo.u.M.call(this)
    };
    d.dd = function() {
        return this.ws() || !this.i.Qg() && 1 !== this.Gl() ? this.g.isPlayingAd && this.A.g ? this.G : this.j : null
    };
    d.wa = function() {
        Mo.u.wa.call(this);
        this.be();
        this.sa.Zn();
        this.I.B("record-navigation", "watch");
        this.yn()
    };
    d.xa = function() {
        Mo.u.xa.call(this);
        this.X("toggle-loading", 0);
        this.Zb();
        this.w();
        this.w = q
    };
    d.yn = function() {
        this.w();
        if (!this.i.La() || this.i.Qg() || this.i.Wa() || this.i.ne()) this.w = q;
        else {
            var a = ["search", "back"];
            this.g.isPlayingAd || a.push("more");
            this.w = this.qa.of(a)
        }
    };
    d.Hd = function(a) {
        Mo.u.Hd.call(this, a);
        a === this.j && this.Sx()
    };
    d.uo = function(a) {
        Mo.u.uo.call(this, a);
        a === this.j && this.Mm()
    };
    d.yl = function() {
        this.W("w_ld_vid");
        this.oK();
        this.nK();
        this.g.Yl();
        this.g.Wi()
    };
    d.l7 = function() {
        return this.j.ha()
    };
    d.oI = function() {
        this.i.La() ? this.zO() : this.F = "";
        this.ha() && this.yn()
    };
    d.nI = function(a) {
        3 != a || this.i.Ze() || this.G.fa()
    };
    d.YC = function() {
        this.j.Ba();
        this.j.fa()
    };
    d.zO = function() {
        this.k.currentVideo && this.k.currentVideo.videoId !== this.F && (this.F = this.k.currentVideo.videoId, this.yl(), this.k.TC());
        this.i.Wg() || (this.i.Ze() ? this.YC() : this.i.Qg() ? this.j.blur() : this.j.isHidden || this.j.ga(), (this.XC() || !this.i.$c() && this.i.Qg() || 1 === this.Gl()) && this.fa());
        var a = this.Gl(); - 1 != a && this.k.currentVideo && this.UC(a);
        this.ZC() && this.k.VC() && (this.k.WC(), this.F = this.k.currentVideo.videoId, this.g.play());
        a = this.i.zq();
        "pause" == a ? this.g.pause() : this.k.currentVideo && "play" ===
            a && this.g.play();
        a = parseInt(this.i.rb("t"), 10);
        !isNaN(a) && this.k.currentVideo && (this.g.ii() && this.g.Ni(a, !0), this.wl({
            Pa: {
                t: null
            }
        }))
    };
    d.Gl = function() {
        var a = this.i.rb("autoplay"),
            a = parseInt(a, 10);
        return isNaN(a) ? -1 : a
    };
    d.wl = function(a) {
        this.X("cmd-set-application-state", [a])
    };
    d.ZC = function() {
        return "search" === this.i.zf()
    };
    d.XC = function() {
        return this.i.Ze() || this.ws()
    };
    d.ws = function() {
        var a = this.i.Fm("autoplay"),
            a = parseInt(a, 10),
            a = isNaN(a) ? -1 : a;
        return 0 === a
    };
    d.UC = function(a) {
        1 === a ? (0 === this.g.state && this.g.Ni(0, !0), this.g.play()) : 0 === a && this.g.pause();
        this.wl({
            Pa: {
                autoplay: null
            }
        })
    };
    d.Mm = function() {
        this.O = this.J.Uc().getTime();
        this.ha() && this.i.Ze() && this.wl({
            mode: null
        });
        this.g.isPlayingAd && this.A.g && this.G.fa()
    };
    d.Sx = function() {};
    d.wv = function() {};
    d.qI = function(a) {
        switch (a) {
            case 2:
                this.Ux(!1);
                break;
            case 1:
                this.Ux(!0);
                break;
            case 1E3:
                this.j.ga()
        }
        this.yn();
        this.H()
    };
    d.nK = function() {
        this.Sa("play");
        this.Sa("pause");
        this.H()
    };
    d.Ux = function(a) {
        a ? (this.Ma("play"), this.Sa("pause")) : (this.Sa("play"), this.Ma("pause"));
        this.H()
    };
    d.mJ = function(a) {
        Yd(this.D, "loading", a)
    };
    d.pI = function(a) {
        switch (a.keyCode) {
            case 228:
            case 76:
                this.g.Jj(10);
                this.j.fa();
                break;
            case 227:
            case 74:
                this.g.Jj(-10)
        }
    };
    d.Jl = function(a) {
        switch (a.keyCode) {
            case 75:
            case 179:
            case 32:
                this.g.Om();
                L(a);
                break;
            case 19:
                this.g.pause();
                break;
            case 250:
                this.g.play();
                L(a);
                break;
            case 27:
            case 8:
                this.j.cG() && this.O + 1E3 > this.J.Uc().getTime() && L(a);
                break;
            case 71:
            case 172:
                L(a);
                break;
            case 181:
                if (this.la.md) {
                    var b = q;
                    this.g.isPlaying && (this.g.pause(), b = y(this.g.play, this.g));
                    this.I.B("show-context-menu", b);
                    L(a)
                }
        }
    };
    d.oK = function() {
        var a = this.getCurrentVideo();
        a && a.oc && a.channel.userId && this.Z.ud(a.channel.userId, y(this.KS, this, a.channel))
    };
    d.KS = function(a, b) {
        a.oc = !!b && b.oc
    };
    Mo.prototype.getCurrentVideo = function() {
        return this.g.isPlayingAd ? this.A.currentAd : this.k.currentVideo
    };
    Mo.prototype.ua = function() {
        var a = Mo.u.ua.call(this);
        1E3 == this.g.state && a.push("message");
        this.j && !this.j.isHidden && a.push("transport-showing");
        return a
    };
    Mo.inject = "playerFacade timeService environmentModel watchModel adModel channelPaidInfoService ytThumbnails rateLimit injector remoteService csiService applicationState rootDispatcher legendModel".split(" ");

    function No(a, b, c, e, f, g, k, m, n, r, u, t, x, G) {
        Mo.call(this, a, b, c, e, f, g, k, m, n, r, u, t, x, G);
        this.o = null
    }
    B(No, Mo);
    d = No.prototype;
    d.ready = function() {
        No.u.ready.call(this);
        this.o = this.Aa("title-tray")
    };
    d.xa = function() {
        this.o.ga();
        No.u.xa.call(this)
    };
    d.wv = function() {
        this.g.isPlaying && this.j.ga()
    };
    d.yl = function() {
        this.i.zf() || this.o.PN();
        No.u.yl.call(this)
    };
    d.Mm = function() {
        this.o.autoHide = !0;
        1E3 !== this.g.state && this.o.ga();
        this.j.ga();
        No.u.Mm.call(this)
    };
    d.Sx = function() {
        this.o.autoHide = !1;
        this.g.isPlayingAd || this.o.Ba()
    };
    d.Jl = function(a) {
        No.u.Jl.call(this, a);
        switch (a.keyCode) {
            case 27:
            case 8:
                this.i.Ze() || this.o.isHidden || (L(a), this.o.ga());
                break;
            case 39:
            case 176:
                !this.g.isPlayingAd && this.k.vg() && this.X("next-video");
                L(a);
                break;
            case 37:
            case 177:
                !this.g.isPlayingAd && this.k.ql() && this.X("previous-video"), L(a)
        }
    };
    No.inject = "playerFacade timeService environmentModel watchModel adModel channelPaidInfoService ytThumbnails rateLimit injector remoteService csiService applicationState rootDispatcher legendModel".split(" ");

    function Oo(a, b, c, e) {
        M.call(this);
        this.g = a;
        this.W = b;
        this.Z = c;
        this.O = e;
        this.i = NaN;
        this.model = null;
        this.j = q;
        this.autoHide = !0;
        this.viewCountLabel = this.uploadedDate = this.channelName = this.videoTitle = this.channelAvatarUrl = "";
        this.videoCount = this.videoIndex = 0;
        this.playlistTitle = "";
        this.w = this.G = this.J = this.I = this.F = this.A = this.o = this.k = null
    }
    B(Oo, M);
    d = Oo.prototype;
    d.ready = function() {
        this.G = this.Bc(".player-video-avatar");
        this.w = this.Bc(".image.avatar")
    };
    d.ea = function() {
        this.o = this.D.querySelector(".username");
        this.J = this.D.querySelector(".view-count");
        this.F = this.D.querySelector(".uploaded-date");
        this.A = this.D.querySelector(".set-context");
        this.k = this.D.querySelector(".badges");
        this.I = this.D.querySelector(".user-details")
    };
    d.initialize = function() {
        this.K(this.g, "isPlayingAd:changed", y(this.kK, this));
        this.K(this.g, "state:changed", y(this.lK, this))
    };
    d.fb = function() {
        return !1
    };
    d.kK = function(a) {
        a ? this.ga() : this.XS()
    };
    d.lK = function() {
        var a = this.g.rf();
        this.Ha(this.k, a);
        this.Ha(this.F, this.g.ii() && !a)
    };
    d.Ba = function() {
        this.Zi();
        Oo.u.Ba.call(this);
        this.H()
    };
    d.XS = function() {
        this.Ba();
        this.Gj()
    };
    d.PN = function() {
        this.j();
        this.Ba();
        this.g.isPlaying ? this.Gj() : this.j = this.g.C("isPlaying:changed", y(this.Gj, this))
    };
    d.ga = function() {
        this.j();
        this.Zi();
        Oo.u.ga.call(this);
        this.H()
    };
    d.Gj = function() {
        this.autoHide && (this.Zi(), this.i = this.O.setTimeout(y(this.tP, this), 3E3))
    };
    d.Zi = function() {
        isNaN(this.i) || (this.O.clearTimeout(this.i), this.i = NaN)
    };
    d.tP = function() {
        this.autoHide && (this.g.isPlaying ? this.ga() : (this.Zi(), this.Gj()))
    };
    d.Y = function(a) {
        Oo.u.Y.call(this, a);
        this.model && (this.channelAvatarUrl = this.model.channel.imageUrl, this.videoTitle = this.model.title, this.eo() ? (a = this.ny(), this.playlistTitle = a.model.title, this.videoIndex = a.activeIndex + 1, this.videoCount = a.model.lf ? a.model.ue : Math.min(a.model.ue, a.S())) : this.channelName = this.model.channel.displayName || "", this.uploadedDate = this.model.uploadedDateLabel, this.viewCountLabel = this.model.viewCountLabel)
    };
    d.H = function() {
        Oo.u.H.call(this);
        this.model && (this.Ha(this.A, this.eo()), this.Ha(this.o, !this.eo()), this.Ha(this.J, !!this.model.Jr), this.Ha(this.I, !!(this.Z.cb(Eb) && this.model.user && this.model.userAvatarUri)), this.G.H(), this.w.H())
    };
    d.ny = function() {
        return this.W && this.W.Hy(0)
    };
    d.eo = function() {
        var a = this.ny();
        return !(!a || !a.Na || "playlistService" != a.Na.id)
    };
    Oo.inject = ["playerFacade", "watchModel", "environmentModel", "timeService"];

    function Po(a) {
        I.call(this);
        this.i = this.h = this.l = this.j = this.p = null;
        this.k = !1;
        this.g = null;
        this.L = 150;
        this.w = a.Dk ? 75 : 300;
        this.A = a.Dk ? 75 : 200;
        this.U = 20;
        this.o = !1;
        this.Jk()
    }
    B(Po, I);
    var Qo = {
            yF: 0,
            zF: -90,
            AF: 90,
            BF: -180,
            CF: 180
        },
        Ro = {
            Dm: "V",
            Cm: "H"
        };
    d = Po.prototype;
    d.ns = function(a, b) {
        this.Jk();
        b || (this.i = a);
        this.cn(a);
        this.o = !0
    };
    d.GI = function(a) {
        this.cn(a)
    };
    d.FI = function(a) {
        this.o = !1;
        this.i ? (150 >= a.timeStamp - this.i.timeStamp || this.j <= this.w && this.p <= this.A && !this.k) && this.B("tap", a) : this.cn(a);
        this.Jk();
        this.i = null
    };
    d.Jk = function() {
        this.j = this.p = 0;
        this.h = this.l = this.g = null;
        this.k = !1
    };
    d.uh = function(a) {
        return null === this.l ? !0 : 20 >= Math.abs(this.l - a)
    };
    d.cn = function(a) {
        var b = a && a.changedTouches && a.changedTouches[0] ? a.changedTouches[0] : a,
            b = {
                x: b.screenX,
                y: b.screenY
            };
        this.h || (this.h = b);
        this.p = Math.abs(this.h.y - b.y);
        this.j = Math.abs(this.h.x - b.x);
        b = this.BJ(this.h, b);
        this.CJ(a);
        this.l = b
    };
    d.CJ = function(a) {
        (this.g === Ro.Cm || !this.g) && this.j >= this.w && (this.uh(Qo.AF) ? (this.wj("swiperight", a), this.g = Ro.Cm) : this.uh(Qo.zF) && (this.wj("swipeleft", a), this.g = Ro.Cm));
        if ((this.g === Ro.Dm || !this.g) && this.p >= this.A)
            if (this.uh(Qo.yF)) this.wj("swipedown", a), this.g = Ro.Dm;
            else if (this.uh(Qo.CF) || this.uh(Qo.BF)) this.wj("swipeup", a), this.g = Ro.Dm
    };
    d.wj = function(a, b) {
        this.B(a, this.i);
        this.ns(b, !0);
        this.k = !0
    };
    d.xV = function(a, b) {
        return a && b ? {
            x: b.x - a.x,
            y: b.y - a.y
        } : {
            x: 0,
            y: 0
        }
    };
    d.BJ = function(a, b) {
        if (a && b) {
            var c = this.xV(a, b);
            return Math.round(180 * Math.atan2(c.x, c.y) / Math.PI)
        }
        return null
    };
    Po.inject = ["environmentModel"];

    function So(a, b, c, e, f) {
        this.h = a;
        this.l = b;
        this.p = c;
        this.j = e;
        this.i = f;
        this.g = vm
    }
    d = So.prototype;
    d.rr = function(a, b) {
        var c = this.Vo(b, a);
        a && a.ia && c && a.ia.push(c)
    };
    d.Vo = function(a, b) {
        var c = b.kb || "",
            e = b.serviceQuery || "",
            f = this.i.get(ue, {
                serviceId: c,
                serviceQuery: e,
                listType: b.Mb || ""
            }),
            c = new te(c, e),
            e = this.cE(a);
        if (!e) return f.title = "Not a video renderer.", f.channel = c, console.error("InnerTube video parser: not a video!", qc(p("data.target", a))), f;
        f.activityDescription = this.XD();
        f.description = this.aE(a);
        f.channel = this.$D(c, a);
        f.durationLabel = this.bE(a);
        f.g = f.channel.imageUrl;
        f.imageUrl = this.j.parse(a, e);
        f.p = this.YD(a);
        f.Kk = f.Kk || !!a.editMetadataEndpoint;
        f.Sk = this.ZD(a);
        f.title = this.dE(a);
        f.videoId = e;
        f.viewCountLabel = this.eE(a);
        f.uploadedDateLabel = this.iE(a);
        this.gE(f, a);
        this.hE(f, a);
        this.fE(f, a);
        if (c = p("app$control.yt$state", a))
            for (var c = s(c) ? c : [c], e = 0, g = c.length; e < g; ++e)
                if (c[e] && "restricted" == c[e].name) {
                    f.errorCode = c[e].reasonCode;
                    break
                }
        return f
    };
    d.aE = function(a) {
        return (a = this.g(p("descriptionSnippet", a))) && a.slice(0, 165) || ""
    };
    d.$D = function(a, b) {
        a.userId = p("longBylineText.runs.1.navigationEndpoint.browseEndpoint.browseId", b);
        a.username = p("ownerText.runs.0.text", b);
        a.displayName = this.g(p("shortBylineText", b));
        a.imageUrl = p("channelThumbnail.thumbnails.0.url", b);
        a.title = a.username;
        return a
    };
    d.bE = function(a) {
        return this.g(p("lengthText", a))
    };
    d.cE = function(a) {
        return p("videoId", a)
    };
    d.YD = function() {
        return !1
    };
    d.ZD = function(a) {
        return p("navigationEndpoint.clickTrackingParams", a)
    };
    d.dE = function(a) {
        return this.g(p("title", a))
    };
    d.eE = function(a) {
        return this.g(p("viewCountText", a))
    };
    d.iE = function(a) {
        return this.g(p("publishedTimeText", a))
    };
    d.XD = function() {
        return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    };
    d.gE = function(a) {
        a.oc = !1;
        a.j = !1
    };
    d.K4 = function() {
        return !1
    };
    d.hE = function(a, b) {
        var c = p("upcomingEventData.startTime", b);
        c && (c = new Date(1E3 * parseInt(c, 10)), a.liveStartDate = this.h.$k(c), a.liveStartTime = c.toLocaleTimeString(), c = this.h.T("[[Upcoming: {{liveStartDate}} {{liveStartTime}}|Label indicating that a live event is upcoming and shows the start date and time.]]"), c = c.replace("{{liveStartDate}}", a.liveStartDate), c = c.replace("{{liveStartTime}}", a.liveStartTime), a.badgeText = c)
    };
    d.fE = function(a, b) {
        var c = p("badges", b);
        if (c)
            for (var e = 0, f = c.length; e < f; ++e) c[e].liveBadge && (a.liveBadgeText = this.g(p("liveBadge.label", c[e])))
    };
    So.inject = ["localeService", "environmentModel", "ytThumbnails", "thumbnailParser", "injector"];

    function To(a, b, c) {
        var e = b.compactVideoRenderer;
        e && Uo(a, e, c);
        a.$V(b.countDownSecs || 0);
        return a
    }
    To.inject = ["component", "source", "innerTubeVideoParser"];

    function $(a, b, c, e, f, g, k, m, n) {
        this.g = a;
        this.$ = b;
        this.title = e || "";
        this.iconClass = f || "";
        this.description = g || "";
        this.tileClass = k || "";
        this.gi = c;
        this.processArgs = m || null;
        this.navEndpoint = n || null;
        this.T()
    }
    $.prototype.T = function() {
        this.title = this.g.T(this.title);
        this.description = this.g.T(this.description)
    };

    function Vo(a, b, c) {
        var e = b["@actionModel"];
        e || (e = Vo.parse(b, c), b["@actionModel"] = e);
        a.model = e;
        return a
    }
    Vo.parse = function(a, b) {
        var c = p("icon.iconType", a);
        return new $(b, "actionTile", "cmd-navigate-to-endpoint", vm(a.title), Hb[c], vm(a.subtitle), "", null, a.navigationEndpoint)
    };
    Vo.inject = ["component", "source", "localeService"];

    function Wo() {}
    Wo.prototype.h = function(a, b) {
        a.ia && a.ia.push(this.g(b))
    };
    Wo.prototype.g = function(a) {
        var b = new te;
        b.id = a.channelId;
        b.title = vm(a.title);
        b.subscribers = vm(a.subscriberCountText);
        (a = p("thumbnail.thumbnails", a)) && 0 < a.length && (b.imageUrl = a[a.length - 1].url);
        return b
    };

    function Xo(a, b, c) {
        var e = b["@channelModel"];
        e || (e = c.g(b), b["@channelModel"] = e);
        a.model = e;
        return a
    }
    Xo.inject = ["component", "source", "innerTubeChannelParser"];

    function Yo(a, b, c, e, f) {
        this.j = a;
        this.h = b;
        this.p = c;
        this.i = e;
        this.l = f;
        this.g = vm
    }
    d = Yo.prototype;
    d.qr = function(a, b) {
        var c = this.$o(a, b);
        a && a.ia && c && a.ia.push(c)
    };
    d.$o = function(a, b) {
        var c = new Do(a.kb, a.serviceQuery),
            e = new te(a.kb, a.serviceQuery),
            f = this.hs(b);
        if (!f) return c.title = "Not a playlist renderer.", c.channel = e, console.error("InnerTube playlist parser: not a playlist!", qc(p("data.target", b))), c;
        c.videoCount = this.QD(b);
        if ("0" == c.videoCount) return null;
        c.h = this.RD(b, e, a);
        c.channel = this.PD(e, b);
        c.title = this.gs(b);
        c.id = f;
        c.imageUrl = this.i.parse(b, c.id);
        if (e = c.h[0]) c.firstVideoTitle = e.title, c.videoId = e.videoId;
        c.g = this.h.Pd(p("shortBylineText.runs.0.navigationEndpoint.browseEndpoint.browseId",
            b));
        c.uploadedDateLabel = this.js(b);
        return c
    };
    d.WV = function(a) {
        var b = new Do("", "");
        b.id = this.hs(a);
        b.channel = this.CH(a);
        b.imageUrl = this.i.parse(a, b.id);
        b.title = this.gs(a);
        b.videoCount = this.g(p("videoCountShortText", a));
        b.g = b.channel.imageUrl;
        b.uploadedDateLabel = this.js(a);
        return b
    };
    d.PD = function(a, b) {
        a.userId = p("owner.channelId", b);
        a.username = p("owner.title", b);
        a.displayName = this.g(p("shortBylineText", b));
        a.userId && (a.imageUrl = this.h.Pd(a.userId));
        return a
    };
    d.CH = function(a) {
        var b = new te;
        b.userId = p("shortBylineText.runs.0.navigationEndpoint.browseEndpoint.browseId", a);
        b.username = this.g(p("shortBylineText", a));
        b.displayName = b.username;
        b.userId && (b.imageUrl = this.h.Pd(b.userId));
        return b
    };
    d.hs = function(a) {
        return p("playlistId", a)
    };
    d.js = function(a) {
        return this.g(p("publishedTimeText", a))
    };
    d.RD = function(a, b, c) {
        a = p("videos", a);
        var e = [];
        if (a)
            for (var f = 0, g = a.length; f < g; ++f) {
                var k = this.l.get(ue, {
                    serviceId: c.kb,
                    serviceQuery: c.serviceQuery,
                    listType: c.Mb
                });
                k.videoId = p("childVideoRenderer.videoId", a[f]);
                k.title = this.g(p("childVideoRenderer.title", a[f]));
                k.channel = b;
                k.durationLabel = this.g(p("childVideoRenderer.lengthText", a[f]));
                k.videoId && (k.imageUrl = this.h.ki(k.videoId, this.j.qa));
                e.push(k)
            }
        return e
    };
    d.gs = function(a) {
        return this.g(p("title", a))
    };
    d.QD = function(a) {
        return a.videoCountShortText ? this.g(a.videoCountShortText) : a.videoCount
    };
    Yo.inject = ["environmentModel", "ytThumbnails", "localeService", "thumbnailParser", "injector"];

    function Zo(a, b, c) {
        var e = b["@playlistModel"];
        e || (e = c.WV(b), b["@playlistModel"] = e);
        a.model = e;
        return a
    }
    Zo.inject = ["component", "source", "innerTubePlaylistParser"];

    function Uo(a, b, c) {
        var e = b["@videoModel"];
        e || (e = c.Vo(b, {}), b["@videoModel"] = e);
        a.model = e;
        return a
    }
    Uo.inject = ["component", "source", "innerTubeVideoParser"];

    function $o() {
        return new Um([{
            name: "autoplayVideoRenderer",
            Ca: "auto-play-tile",
            tc: To
        }, {
            name: "compactChannelRenderer",
            Ca: "channelTile",
            tc: Xo
        }, {
            name: "compactPlaylistRenderer",
            Ca: "videoTile",
            tc: Zo
        }, {
            name: "compactRadioRenderer",
            Ca: "component"
        }, {
            name: "compactVideoRenderer",
            Ca: "videoTile",
            tc: Uo
        }, {
            name: "gridButtonRenderer",
            Ca: "actionTile",
            tc: Vo
        }, {
            name: "gridChannelRenderer",
            Ca: "channelTile",
            tc: Xo
        }, {
            name: "gridPlaylistRenderer",
            Ca: "videoTile",
            tc: Zo
        }, {
            name: "gridVideoRenderer",
            Ca: "videoTile",
            tc: Uo
        }, {
            name: "guideEntryRenderer",
            Ca: "guideButton"
        }, {
            name: "guideLogoRenderer",
            Ca: "guideLogo"
        }, {
            name: "guideSectionRenderer",
            Ca: "guideSectionButton"
        }, {
            name: "guideSubscriptionsSectionRenderer",
            Ca: "guideSectionButton"
        }, {
            name: "horizontalListRenderer",
            Ca: "horizontalList"
        }, {
            name: "itemSectionRenderer",
            Ca: "horizontalList"
        }, {
            name: "placeholderTileRenderer",
            Ca: "placeholderTile"
        }, {
            name: "playlistVideoListRenderer",
            Ca: "horizontalList"
        }, {
            name: "sectionListRenderer",
            Ca: "horizontalList"
        }, {
            name: "shelfRenderer",
            Ca: "shelf"
        }, {
            name: "videoRenderer",
            Ca: "videoTile",
            tc: Uo
        }, {
            name: "videoOwnerRenderer",
            Ca: "component"
        }, {
            name: "videoMetadataRenderer",
            Ca: "component"
        }])
    }
    $o.inject = ["environmentModel"];

    function ap(a, b, c) {
        if (!a) return null;
        var e = a.continuation;
        return e ? function(a, g) {
            var k = a || q;
            return b.JU(e, function(a) {
                a = c(a);
                var e = ap(a.jz, b, c);
                k(a.hz, e)
            }, g || q)
        } : null
    }
    ap.inject = ["continuationData", "service", "interpretRawResponse"];

    function bp(a, b, c, e, f) {
        this.h = a;
        this.g = b;
        this.i = c;
        this.j = e;
        this.l = f
    }
    B(bp, Gh);
    d = bp.prototype;
    d.parse = function(a, b) {
        var c = b || new yi;
        if (!a) return c;
        var e = p("contents.sectionListRenderer", a) || p("continuationContents.sectionListContinuation", a) || p("continuationContents.horizontalListContinuation", a) || p("continuationContents.itemSectionContinuation", a),
            f = p("contents", e) || p("continuationContents.horizontalListContinuation.items", a) || [p("continuationContents", a)];
        this.eV(c, f);
        (e = p("continuations", e)) && this.fy(c, e);
        return c
    };
    d.eV = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = p("playlistVideoListRenderer", b[c]) || p("playlistVideoListContinuation", b[c]) || p("itemSectionRenderer", b[c]);
            f ? (this.Iq(a, f), (f = p("continuations", f)) && this.fy(a, f)) : this.hy(a, b[c])
        }
        a.S() || (a.hc = this.l.T("[[No videos are available|The message shown when a row has no videos to show.]]"))
    };
    d.Iq = function(a, b) {
        var c = b.contents;
        if (c)
            for (var e = 0, f = c.length; e < f; ++e) this.hy(a, c[e])
    };
    d.hy = function(a, b) {
        if (b)
            if (b.videoRenderer || b.playlistVideoRenderer) this.h.rr(a, b.videoRenderer || b.playlistVideoRenderer);
            else if (b.playlistRenderer) this.g.qr(a, b.playlistRenderer);
        else if (b.compactPlaylistRenderer) this.g.qr(a, b.compactPlaylistRenderer);
        else if (b.compactChannelRenderer) this.j.Kp && this.i.h(a, b.compactChannelRenderer);
        else if (b.playlistVideoListRenderer) this.Iq(a, b.playlistVideoListRenderer);
        else
            for (var c in b)
                if (0 <= c.indexOf("Renderer")) {
                    this.h.rr(a, b[c]);
                    break
                }
    };
    d.fy = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) b[c].nextContinuationData && (a.g = p("nextContinuationData.continuation", b[c]))
    };
    bp.inject = ["innerTubeVideoParser", "innerTubePlaylistParser", "innerTubeChannelParser", "environmentModel", "localeService"];

    function cp(a, b, c, e) {
        this.g = a;
        this.i = b;
        this.Lb = c;
        this.h = e
    }
    B(cp, Gh);
    d = cp.prototype;
    d.parse = function(a, b) {
        var c = b || [];
        if (!a) return c;
        var e = a.contents || a.items;
        if (!e) return c;
        for (var f = 0, g = e.length; f < g; ++f) {
            var k = "guideSubscriptionsSectionRenderer" in e[f],
                m = e[f].guideSectionRenderer || e[f].guideSubscriptionsSectionRenderer;
            m ? Array.prototype.push.apply(c, this.uu(m, k)) : c.push(new ih({}, 'UNSUPPORTED "' + qc(e[f]) + '"', ""))
        }
        return c
    };
    d.uu = function(a, b) {
        var c = a.items;
        if (!c) return [];
        for (var e = [], f = 0, g = c.length; f < g; ++f) {
            var k = null,
                k = {},
                m = c[f].guideEntryRenderer || c[f];
            if (m.hasOwnProperty("guideCollectionEntryRenderer")) var n = this.uu(m.guideCollectionEntryRenderer, !1),
                e = e.concat(n);
            else n = m.navigationEndpoint, (!n || "FEpurchases" != p("browseEndpoint.browseId", n) || !this.h.get("needs_rental_auth_dialog")) && n && "browseEndpoint" in n && (k.title = this.JG(m), k.Rk = this.IG(m), m = new wi, m.innerTubeEndpointParams = n.browseEndpoint, k = new zi(this.g, k.title,
                k.Rk, "", m), k.userId = this.KG(n), b && k.userId && this.Lb.xi("UC" + k.userId, !0), e.push(k))
        }
        return e
    };
    d.IG = function(a) {
        var b = p("icon.iconType", a),
            b = Hb[b];
        return b ? b : (a = p("thumbnail.thumbnails.0.url", a) || "", this.i.bj(a))
    };
    d.JG = function(a) {
        return vm(a.formattedTitle)
    };
    d.KG = function(a) {
        var b = "";
        (a = p("browseEndpoint.browseId", a)) && 0 == a.indexOf("UC") && (b = a.substr(2));
        return b
    };
    cp.inject = ["browseService", "ytThumbnails", "subscriptionsModel", "localStorage"];

    function lm(a, b, c, e, f, g, k, m, n, r, u, t) {
        U.call(this, "searchService", "/search", a, b, c, e, f, g, k, u, m, n, r, {}, void 0, c.useSetsUi ? "5.20140923" : void 0);
        this.i = t
    }
    B(lm, U);
    lm.prototype.load = function(a, b, c) {
        if (!a || !a.query && !a.continuation) return b && b(this.A.parse(null)), q;
        if (this.i.get()) {
            var e;
            a.filterOptions ? e = a.filterOptions : (e = {}, a.filterOptions = e);
            e.restrictSafeSearch = "STRICT_FILTERING"
        }
        return lm.u.load.call(this, a, b, c)
    };
    lm.inject = "csiService ytHttp environmentModel authService cacheService backendErrorReporting ssoApi localStorage networkStatus parser localeModel safeModeFlag".split(" ");

    function dp(a, b, c, e) {
        this.deviceCount = e;
        this.j = this.h = "";
        $.call(this, a, b, c)
    }
    B(dp, $);
    dp.prototype.T = function() {
        dp.u.T.call(this);
        this.h = this.g.T("[[PAIR DEVICE|Title of menu item that allows a user to pair one mobile device with the application.]]");
        this.i = this.g.T("[[PAIR ANOTHER DEVICE|Title of menu item that allows a user to pair an additional mobile device with the application.]]")
    };
    dp.prototype.getTitle = function() {
        return 0 < this.deviceCount ? this.i : this.h
    };
    dp.prototype.getTitleClass = function() {
        return 0 < this.deviceCount ? "long-title" : ""
    };

    function Jl(a, b, c, e, f, g) {
        this.h = f;
        this.imageUrl = g;
        this.totalResultsLocalized = "";
        $.call(this, a, b, c, e)
    }
    B(Jl, $);
    Jl.prototype.T = function() {
        Jl.u.T.call(this);
        this.totalResultsLocalized = this.g.nt(this.h)
    };

    function ep(a, b, c, e, f) {
        $.call(this, a, b, c, e);
        this.deviceCount = f
    }
    B(ep, $);

    function fp(a, b, c, e) {
        this.searchCount = e;
        $.call(this, a, b, c)
    }
    B(fp, $);

    function gp(a, b, c, e) {
        this.channel = e || null;
        $.call(this, a, b, c)
    }
    B(gp, $);
    gp.prototype.getTitle = function() {
        return this.g.T("[[Sign Out|Title and voice command for action tile allowing users to sign out from the app.]]")
    };
    gp.prototype.getUserName = function() {
        return this.channel && this.channel.displayName || ""
    };

    function hp(a, b, c, e, f) {
        this.Zg = c;
        this.i = this.h = null;
        $.call(this, a, b, "", e, "", f)
    }
    B(hp, $);
    hp.prototype.T = function() {
        hp.u.T.call(this);
        this.h = this.g.T("[[Enabled|Explanatory text that says a feature is currently enabled.]]");
        this.i = this.g.T("[[Disabled|Explanatory text that says a feature is currently Disabled.]]")
    };
    hp.prototype.getToggleStatus = function() {
        return (this.Zg.get() ? this.h : this.i) || ""
    };
    hp.prototype.getToggleClass = function() {
        return this.Zg.get() ? "toggle-selected icon-settings-check" : "icon-settings-uncheck"
    };

    function ip(a) {
        wg.call(this);
        this.i = null;
        if (a = a && a.error) this.hc = a.message, this.g = a.code, this.i = p("errors.0.reason", a)
    }
    B(ip, wg);

    function jp() {
        this.oc = !1
    }
    jp.CACHE_TYPE = "channel_paid_info";

    function kp(a) {
        a.C("login-state-changed", y(this.NJ, this));
        this.g = []
    }
    d = kp.prototype;
    d.add = function(a, b) {
        var c = {};
        b && z(c, b);
        this.g.push({
            Hv: a,
            detail: c
        })
    };
    d.Fu = function(a, b, c) {
        for (var e = [], f = 0, g = this.g.length - 1; 0 <= g; --g) {
            var k = this.g[g];
            (!this.xw(k, b, c) || f++ < a) && e.unshift(k)
        }
        this.g = e
    };
    d.filter = function(a, b) {
        this.Fu(0, a, b)
    };
    d.Eu = function(a, b, c) {
        for (var e = [], f = this.g.length - 1, g = f; 0 <= g; --g) {
            var k = this.g[g];
            (!this.xw(k, b, c) || f - g < a) && e.unshift(k)
        }
        this.g = e
    };
    d.xw = function(a, b, c) {
        if (a.Hv !== b) return !1;
        if (c)
            for (var e in c)
                if (a.detail[e] !== c[e]) return !1;
        return !0
    };
    d.Jx = function() {
        return this.g.pop()
    };
    d.clear = function() {
        this.g.length = 0
    };
    d.Da = function() {
        return this.g.length
    };
    d.NJ = function(a) {
        a || this.clear()
    };
    kp.inject = ["authService"];

    function lp(a) {
        I.call(this);
        this.h = {};
        this.i = {};
        this.g = {};
        this.l = {};
        this.j = [];
        this.GB(a.ib)
    }
    B(lp, I);
    d = lp.prototype;
    d.GB = function(a) {
        for (var b in Xb) {
            var c = Xb[b];
            this.h[c] = 0;
            this.i[c] = 0
        }
        "desktop" == a ? this.j = ["delete"] : "tv" == a && (this.j = "delete home search guide close-guide space".split(" "));
        this.l.modify = ["guide"]
    };
    d.Zm = function(a) {
        return 0 < this.h[a] && 0 == this.i[a]
    };
    d.or = function() {
        var a = [],
            b;
        for (b in this.h) this.Zm(b) && a.push(b);
        return a
    };
    d.nr = function() {
        return sc(this.g)
    };
    d.Sv = function(a) {
        var b = [];
        this.mz(a, b);
        return y(this.lz, this, b)
    };
    d.of = function(a) {
        for (var b = [], c = 0; c < a.length; ++c) this.mz(a[c], b);
        return y(this.lz, this, b)
    };
    d.mz = function(a, b) {
        if (!(0 <= this.j.indexOf(a))) {
            var c = 0 < this.h[a];
            ++this.h[a];
            b.push(a);
            if (!c && (0 == this.i[a] && this.B("keyVisibility:changed", a, !0, !1), c = this.l[a]))
                for (var e = 0, f = c.length; e < f; ++e) {
                    var g = c[e],
                        k = !this.Zm(g);
                    ++this.i[g];
                    k || this.B("keyVisibility:changed", g, !1, !0)
                }
        }
    };
    d.XQ = function(a) {
        if (!a) return q;
        this.g[a] ? ++this.g[a] : (this.g[a] = 1, this.B("additionalClass:added", a));
        return y(this.KJ, this, [a])
    };
    d.lz = function(a) {
        for (; 0 < a.length;) {
            var b = a.pop();
            --this.h[b];
            if (0 == this.h[b] && (0 == this.i[b] && this.B("keyVisibility:changed", b, !1, !0), b = this.l[b]))
                for (var c = 0, e = b.length; c < e; ++c) {
                    var f = b[c];
                    --this.i[f];
                    this.Zm(f) && this.B("keyVisibility:changed", f, !0, !1)
                }
        }
    };
    d.KJ = function(a) {
        for (; 0 < a.length;) {
            var b = a.pop();
            --this.g[b];
            0 == this.g[b] && (delete this.g[b], this.B("additionalClass:removed", b))
        }
    };
    lp.inject = ["environmentModel"];

    function mp(a, b, c) {
        I.call(this);
        this.g = void 0;
        this.l = a;
        this.i = b;
        this.p = void 0 !== c ? c : null
    }
    B(mp, I);
    mp.prototype.get = function() {
        this.j();
        return this.g
    };
    mp.prototype.h = function(a) {
        this.j();
        if (a !== this.g) {
            var b = this.g;
            this.g = a;
            this.i.Oa(this.l, this.g);
            this.B("value:changed", a, b);
            this.i.flush()
        }
    };
    mp.prototype.j = function() {
        void 0 === this.g && (this.g = this.i.get(this.l), void 0 === this.g && (this.g = this.p))
    };

    function np(a) {
        I.call(this);
        this.g = a
    }
    B(np, I);
    np.prototype.get = function() {
        return this.g
    };
    np.prototype.h = function(a) {
        if (a !== this.g) {
            var b = this.g;
            this.g = a;
            this.B("value:changed", a, b)
        }
    };
    np.inject = ["opt_initial"];

    function op(a) {
        this.V = a;
        this.responseType = ""
    }
    op.prototype.get = function(a, b, c) {
        var e = new I,
            f = new XMLHttpRequest;
        f.responseType = this.responseType;
        var g = q,
            k = q;
        f.onreadystatechange = function() {
            if (f.readyState === XMLHttpRequest.DONE) {
                b && (g = e.C("success", b));
                c && (k = e.C("failure", c));
                var a = f.getResponseHeader("content-type");
                if (a) {
                    var n;
                    a.match(/json/) ? n = this.V.JSON.parse(f.response) : a.match(/xml/) ? n = f.responseXML : "arraybuffer" === f.responseType ? n = f.response : n = f.responseText;
                    e.B("success", n)
                }
            }
        };
        f.open("GET", a, !0);
        f.send();
        return function() {
            g();
            k()
        }
    };

    function pp(a) {
        this.g = null;
        this.i = a
    }
    pp.prototype.h = function(a, b) {
        var c = new op(window);
        c.responseType = "arraybuffer";
        c.get(this.i, y(function(c) {
            a.decodeAudioData(c, y(function(a) {
                this.g = a;
                b()
            }, this), function(a) {
                console.error("Error in loading sound:", a)
            })
        }, this))
    };

    function qp(a) {
        this.id = tl();
        this.k = this.w = a.kd;
        this.l = 0;
        this.o = a.za;
        this.p = this.g = this.h = this.j = 0;
        this.i = ""
    }
    qp.prototype.A = function() {
        return T({
            id: this.id,
            recentActive: this.w,
            firstActive: this.k,
            prevActive: this.l,
            firstActiveGeo: this.o,
            loginState: this.j,
            recentLogin: this.h,
            firstLogin: this.g,
            prevLogin: this.p,
            uga: this.i
        })
    };

    function rp(a, b, c, e, f) {
        vl.call(this, yi);
        this.g = a;
        this.l = b;
        this.h = c;
        this.p = e;
        this.k = f;
        this.jb("author", this.GD);
        this.jb("logo", this.HD);
        this.jb("title", this.ID)
    }
    B(rp, vl);
    d = rp.prototype;
    d.GD = function(a, b, c) {
        c && (a.ze = this.Ra(c[0].name), a.wi = this.Ra(c[0].yt$userId));
        return a
    };
    d.ID = function(a, b, c) {
        a.title = this.Ra(c);
        return a
    };
    d.HD = function(a, b, c) {
        a.imageUrl = this.Ra(c);
        return a
    };
    d.eg = function(a, b, c) {
        if (s(c)) {
            b = 0;
            for (var e = c.length; b < e; ++b) this.Dz(a, c[b])
        } else this.Dz(a, c);
        return a
    };
    d.Dz = function(a, b) {
        var c = this.xj(a, b);
        a && a.ia && c && a.ia.push(c)
    };
    d.xj = function(a, b) {
        var c = this.k.get(ue, {
                serviceId: a.kb,
                serviceQuery: a.serviceQuery,
                listType: a.Mb
            }),
            e = new te(a.kb, a.serviceQuery);
        if (this.tB(b)) return this.lB(c, b), this.kB(e, b), c.channel = e, c;
        c.activityDescription = this.Tk();
        c.description = this.qB(b);
        c.channel = this.pB(e, b);
        c.Ok = this.oB(b);
        c.durationLabel = this.g.ef(this.Uk(b));
        c.imageUrl = this.h.ki(this.al(b), this.l.qa);
        c.p = this.mB(b);
        c.title = this.rB(b);
        c.videoId = this.al(b);
        c.viewCountLabel = this.uB(this.sB(b));
        c.uploadedDate = this.nB(b);
        c.uploadedDateLabel =
            c.uploadedDate ? this.l.i ? this.g.$k(c.uploadedDate) : this.vB(c.uploadedDate) : "";
        this.wB(c, b);
        if (b.app$control && b.app$control.yt$state)
            for (var e = s(b.app$control.yt$state) ? b.app$control.yt$state : [b.app$control.yt$state], f = 0, g = e.length; f < g; ++f) {
                var k = e[f];
                if (k)
                    if (c.h = k.name, "processing" === c.h) c.gi = "request-video-processing", c.badgeText = this.g.T("[[Processing|Badge text on video tile indicating video status]]");
                    else if ("processing" === c.h) {
                    c.errorCode = k.reasonCode;
                    break
                }
            }
        return c
    };
    d.uB = function(a) {
        a = this.g.nt(a);
        return this.g.T("[[{{views}} views|Number of YouTube views a video has.]]").replace("{{views}}", a)
    };
    d.wB = function(a, b) {
        a.oc = !!b.yt$paidContent;
        a.j = !!b.yt$paidContent && "free" === b.yt$paidContent.type
    };
    d.Tk = function() {
        return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    };
    d.nB = function(a) {
        return a && a.media$group && a.media$group.yt$uploaded ? new Date(this.Ra(a.media$group.yt$uploaded)) : null
    };
    d.vB = function(a) {
        return this.p.h(new Date, a)
    };
    d.al = function(a) {
        return a && a.media$group && a.media$group.yt$videoid ? a.media$group.yt$videoid.$t : ""
    };
    d.qB = function(a) {
        return a && a.media$group && a.media$group.media$description && a.media$group.media$description.$t ? a.media$group.media$description.$t.slice(0, 165) : ""
    };
    d.rB = function(a) {
        return a && a.title ? a.title.$t : ""
    };
    d.Uk = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration.seconds, 10) : 0
    };
    d.J4 = function(a) {
        return !!a.yt$hd
    };
    d.mB = function(a) {
        return !!a.yt$claimed
    };
    d.pB = function(a, b) {
        b.yt$channelId && (a.id = b.yt$channelId);
        b.media$group && b.media$group.yt$uploaderId && (a.userId = b.media$group.yt$uploaderId.$t);
        b.media$group && b.media$group.media$credit && (a.username = this.$j(b.media$group.media$credit).$t, a.displayName = this.$j(b.media$group.media$credit).yt$display);
        a.userId && (a.imageUrl = this.h.Pd(a.userId));
        b.yt$paidContent && b.yt$paidContent.link && b.yt$paidContent.link.length && (a.oc = Ra(b.yt$paidContent.link, function(a) {
            return a.rel && -1 < a.rel.indexOf("channel.indirectOffer")
        }));
        return a
    };
    d.oB = function(a) {
        if (a && a.category && a.category.length) {
            a = a.category;
            for (var b = 0; b < a.length; b++)
                if (a[b] && a[b].term && -1 == a[b].term.indexOf("http")) return a[b].term
        }
        return ""
    };
    d.sB = function(a) {
        return a.yt$statistics ? a.yt$statistics.viewCount : 0
    };
    d.tB = function(a) {
        return a.batch$status && "200" != a.batch$status.code
    };
    d.lB = function(a, b) {
        a.videoId = b.batch$id.$t;
        a.errorCode = "notAvailable"
    };
    d.kB = function(a, b) {
        a.videoId = b.batch$id.$t
    };
    rp.inject = ["localeService", "environmentModel", "ytThumbnails", "elapsedTime", "injector"];

    function sp(a, b, c, e, f) {
        rp.call(this, a, b, c, e, f);
        this.jb("videoFromEntry", this.xj)
    }
    B(sp, rp);
    d = sp.prototype;
    d.xj = function(a, b) {
        for (var c = this.XF(b), e = c.length, f = 0; f < e; ++f) {
            var g = c[f];
            if (this.YF(g)) return c = sp.u.xj.call(this, a, g.entry[0]), c.activityDescription = this.Tk(b), c.Lk = this.qt(b), e = this.WF(b), c.g = this.h.Pd(e), c
        }
        return null
    };
    d.WF = function(a) {
        return a.author && a.author[0] ? this.Ra(a.author[0].yt$userId) : ""
    };
    d.qt = function(a) {
        return a.author && a.author[0] ? this.Ra(a.author[0].name) : ""
    };
    d.al = function(a) {
        return a && a.id && a.id.$t || ""
    };
    d.Uk = function(a) {
        var b = this.RR(a);
        return isNaN(b) ? sp.u.Uk.call(this, a) : b
    };
    d.RR = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration, 10) : 0
    };
    d.YF = function(a) {
        return a.rel && "http://gdata.youtube.com/schemas/2007#video" === a.rel
    };
    d.XF = function(a) {
        return a && a.link || []
    };
    d.Tk = function(a) {
        if (!a) return "";
        var b = this.qt(a),
            c = a.category && a.category[1] && a.category[1].term && a.category[1].term.toUpperCase();
        return b && c && Wb[c] || this.Ra(a.title)
    };
    sp.inject = ["localeService", "environmentModel", "ytThumbnails", "elapsedTime", "injector"];

    function tp() {
        ul.call(this, jp);
        this.jb("entry", this.g);
        this.jb("yt$paidContent", this.h)
    }
    B(tp, ul);
    tp.prototype.g = function(a, b, c) {
        this.parse(c, a)
    };
    tp.prototype.h = function(a, b, c) {
        a.oc = !!c
    };

    function up() {
        vl.call(this, yi)
    }
    B(up, vl);
    up.prototype.eg = function(a, b, c) {
        c.forEach(function(b) {
            var c = new te(a.kb, a.serviceQuery);
            this.parse(b, c);
            a.ia.push(this.Zo(c, b))
        }, this);
        return a
    };
    up.prototype.Zo = function(a, b) {
        a.displayName = this.g(b) || a.username;
        a.id = this.h(b);
        return a
    };
    up.prototype.g = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.Ra(a.content.entry[0].title) : ""
    };
    up.prototype.h = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.Ra(a.content.entry[0].yt$channelId) : ""
    };

    function vp(a, b) {
        ul.call(this);
        this.p = a;
        this.k = b;
        this.g = {
            trends: "icon-trends",
            music: "icon-music",
            gaming: "icon-gaming",
            sports: "icon-sports",
            film: "icon-film",
            entertainment: "icon-entertainment",
            comedy: "icon-lol",
            news: "icon-news",
            people: "icon-people",
            tech: "icon-rocket",
            howto: "icon-lips",
            education: "icon-education",
            animals: "icon-pets",
            popular: "icon-star",
            featured: "/icon-music-awards.png"
        };
        this.jb("sets", this.l)
    }
    B(vp, ul);
    vp.prototype.l = function(a, b, c) {
        c.forEach(function(b) {
            this.LV(a, b)
        }, this);
        return a
    };
    vp.prototype.LV = function(a, b) {
        var c = b.title,
            e = b.gdata_list_id,
            f = e.substr(0, 2),
            g = e.substr(2);
        try {
            var k = this.p.get(f),
                m = this.h(e, g, b.icon),
                n = new zi(k, c || "", m, g);
            a.push(n)
        } catch (r) {}
    };
    vp.prototype.h = function(a, b, c) {
        c = this.g[c];
        !c && a.match(/^UU.+/) && (c = this.k.Pd(b));
        return c || "icon-star"
    };
    vp.inject = ["injector", "ytThumbnails"];

    function wp() {}
    B(wp, Gh);
    wp.prototype.parse = function(a, b) {
        return b || a
    };

    function xp() {
        vl.call(this, yi)
    }
    B(xp, vl);
    d = xp.prototype;
    d.eg = function(a, b, c) {
        c.forEach(function(b) {
            var c = new Do(a.kb, a.serviceQuery);
            this.parse(b, c);
            a.ia.push(this.$o(c, b))
        }, this);
        return a
    };
    d.$o = function(a, b) {
        a.id = this.tU(b);
        a.serviceQuery = a.id;
        a.imageUrl = this.pU(b);
        a.videoCount = this.rU(b);
        a.ze = this.qU(b);
        a.imageUrl && (a.videoId = this.oU(a));
        return a
    };
    d.tU = function(a) {
        return this.Ra(a.yt$playlistId)
    };
    d.pU = function(a) {
        return a.media$group && a.media$group.media$thumbnail && a.media$group.media$thumbnail[0].url || ""
    };
    d.rU = function(a) {
        return this.Ra(a.yt$countHint)
    };
    d.qU = function(a) {
        return a.author && a.author[0].name ? this.Ra(a.author[0].name) : ""
    };
    d.oU = function(a) {
        a = a.imageUrl.split("/");
        return a[a.length - 2]
    };

    function yp(a) {
        vl.call(this, yi);
        this.Lb = a
    }
    B(yp, vl);
    d = yp.prototype;
    d.eg = function(a, b, c) {
        c.forEach(function(b) {
            var c = new te(a.kb, a.serviceQuery);
            this.parse(b, c);
            c = this.Zo(c, b);
            c.displayName && (a.ia.push(c), this.Lb.xi(c.username, !0))
        }, this);
        return a
    };
    d.Zo = function(a, b) {
        a.id = this.VU(b);
        a.username = this.OU(b);
        a.displayName = this.UU(b) || a.username;
        return a
    };
    d.OU = function(a) {
        return this.Ra(a.yt$username)
    };
    d.UU = function(a) {
        return a && a.yt$username && a.yt$username.display ? a.yt$username.display : ""
    };
    d.VU = function(a) {
        return this.Ra(a.yt$channelId)
    };
    d.F4 = function(a) {
        return this.Ra(a.id)
    };
    yp.inject = ["subscriptionsModel"];

    function zp(a) {
        vl.call(this, te);
        this.g = a;
        this.jb("yt$username", this.IK);
        this.jb("title", this.JK);
        this.jb("media$thumbnail", this.FK);
        this.jb("yt$statistics", this.GK);
        this.jb("yt$channelId", this.EK);
        this.jb("yt$userId", this.HK)
    }
    B(zp, vl);
    d = zp.prototype;
    d.eg = function(a, b, c) {
        this.parse(c, a);
        a.displayName || (a.displayName = a.title);
        return a
    };
    d.EK = function(a, b, c) {
        a.id = this.Ra(c)
    };
    d.IK = function(a, b, c) {
        a.username = this.Ra(c);
        c.display && (a.displayName = c.display)
    };
    d.JK = function(a, b, c) {
        a.title = this.Ra(c)
    };
    d.FK = function(a, b, c) {
        a.imageUrl = this.g.bj(c.url)
    };
    d.GK = function(a, b, c) {
        a.tH = c.subscriberCount;
        a.Jr = c.totalUploadViews
    };
    d.HK = function(a, b, c) {
        a.userId = this.Ra(c)
    };
    zp.inject = ["ytThumbnails"];

    function Ap() {
        P.call(this);
        this.id = "loadFonts"
    }
    B(Ap, P);

    function Bp(a, b) {
        Q.call(this);
        this.l = a;
        this.i = b
    }
    B(Bp, Q);
    Bp.prototype.Tb = function() {
        this.l.useSetsUi ? this.h(Cp) : this.h(Dp);
        this.Ga()
    };
    var Dp = [{
            name: "roboto-condensed-regular",
            file: "RobotoCondensed-Regular-20140804.ttf",
            format: "truetype",
            Bo: ["html", "body", ".action-tile .remote-count"]
        }, {
            name: "roboto-light",
            file: "Roboto-Light-20140804.ttf",
            format: "truetype",
            Bo: ".super-scroller .feed-icon h2;.call-to-cast-text;.engaged .snap-controls .speakable:not(.disabled) span;.player-controls .toggle-button span;.player-controls .label-button span;.player-controls .toggle-button.disabled span;.player-controls .label-button.disabled span".split(";")
        }],
        Cp = [{
            name: "roboto-regular",
            file: "Roboto-Regular-20140804.ttf",
            format: "truetype",
            Bo: ["html", "body", ".exp-943410.watch-state.browse-mode .feed-icon h2"]
        }];
    Bp.prototype.h = function(a) {
        for (var b = 0; b < a.length; ++b) this.j(a[b])
    };
    Bp.prototype.j = function(a) {
        this.i.add("@font-face", {
            "font-family": a.name,
            src: va("url('/s/tv/html5/misc/fonts/%s') format('%s')", a.file, a.format)
        });
        var b = {
            "font-family": a.name
        };
        a = a.Bo;
        for (var c = 0; c < a.length; ++c) this.i.add(a[c], b)
    };
    Bp.inject = ["environmentModel", "styles"];

    function Mg(a) {
        P.call(this);
        this.id = "playerError";
        this.message = a && a.message || "";
        var b = !(!a || "auth" !== a.errorCode);
        this.L = !a || -1 != Ep.indexOf(a.errorCode);
        this.needsLogin = b && "1" === a.errorDetail;
        this.j = this.g = "";
        b && "2" === a.errorDetail ? (this.g = "cco", this.j = "[[Continue|Button which a user selects if they wish to view controversial content.]]") : b && "3" === a.errorDetail && (this.g = "rco", this.j = "[[I wish to proceed|Button which a user selects if they wish to view racy content.]]")
    }
    B(Mg, P);
    var Ep = ["net.badstatus", "net.closed", "net.connect", "net.retryexhausted"];

    function Fp(a, b, c, e, f) {
        Q.call(this);
        this.h = a;
        this.j = b;
        this.l = f;
        this.i = c;
        this.k = e
    }
    B(Fp, Q);
    d = Fp.prototype;
    d.Tb = function() {
        this.g.needsLogin ? this.fL() : this.g.g ? this.bL() : this.gL()
    };
    d.fL = function() {
        this.h.B(this.j.brokenLogin ? "request-player-error" : "request-playback-authorization", this.g.message);
        this.Ga()
    };
    d.gL = function() {
        this.g.L && this.l.ks();
        this.h.B("request-player-error", this.g.message);
        this.Ga()
    };
    d.bL = function() {
        this.h.B("request-confirm-content", y(this.rE, this), y(this.qE, this), this.g.message, this.g.j)
    };
    d.rE = function() {
        this.k.l(this.g.g);
        this.i.Yl();
        this.i.Wi();
        this.Ga()
    };
    d.qE = function() {
        this.h.B("run-process", new fh);
        this.Ga()
    };
    Fp.inject = ["rootDispatcher", "environmentModel", "playerFacade", "playerVariablesModel", "networkStatus"];

    function Gp(a, b, c) {
        this.l = b;
        this.g = [];
        this.h = c.C(a, y(this.i, this))
    }
    B(Gp, F);
    Gp.prototype.register = function(a, b) {
        var c = {
            N: a,
            JI: b,
            Ts: q,
            cv: q
        };
        c.cv = y(function() {
            Ua(this.g, c)
        }, this);
        this.g.push(c);
        return c
    };
    Gp.prototype.j = function() {
        return this.g.length
    };
    Gp.prototype.i = function(a) {
        for (var b = 0; b < this.g.length; ++b) {
            var c = this.g[b],
                e = this.l.get(c.N, c.JI),
                f = s(a.detail) ? a.detail : [a.detail];
            e.bb.apply(e, f);
            c.Ts()
        }
    };
    Gp.prototype.M = function() {
        this.h();
        this.h = q;
        this.g.length = 0;
        Gp.u.M.call(this)
    };

    function Hp(a, b) {
        F.call(this);
        this.i = a;
        this.j = b;
        this.g = {}
    }
    B(Hp, F);
    Hp.prototype.register = function(a, b, c, e) {
        var f = this.h(a);
        b = f.register(b, c);
        a = y(this.l, this, a, f, b);
        e && (b.Ts = a);
        return a
    };
    Hp.prototype.h = function(a) {
        var b = this.g[a];
        b || (b = new Gp(a, this.i, this.j), this.g[a] = b);
        return b
    };
    Hp.prototype.l = function(a, b, c) {
        c.cv();
        0 == b.j() && (b.nc(), delete this.g[a])
    };
    Hp.prototype.M = function() {
        for (var a in this.g) cc(this.g[a]), delete this.g[a];
        Hp.u.M.call(this)
    };
    Hp.inject = ["injector", "rootDispatcher"];

    function Am(a, b, c, e) {
        Mi.call(this, a, b);
        this.w = c;
        this.o = e;
        this.model = null;
        this.k = !1
    }
    B(Am, Mi);
    d = Am.prototype;
    d.Y = function(a) {
        Am.u.Y.call(this, a);
        (a = a.detail[1]) && this.Td(a.$a());
        this.model && (this.K(this.model.$a(), "selectedIndex:changed", y(this.PQ, this)), this.Fd("items:changed", y(this.NQ, this)), this.Fd("projectionWindow:changed", y(this.OQ, this)), this.ik(0))
    };
    d.PQ = function(a, b) {
        this.ik(a - b)
    };
    d.NQ = function(a) {
        a || this.ik(0)
    };
    d.OQ = function(a, b, c, e) {
        b !== e && this.ik(0)
    };
    d.Lm = function(a) {
        return this.p[a % this.model.S()]
    };
    d.zy = function() {
        return this.model && this.model.S() || 0
    };
    d.ik = function(a) {
        this.o.isVertical = this.isVertical;
        a ? this.o.g(this.model, this.p, a) : this.o.h(this.model, this.p);
        this.Oi(this.k)
    };
    d.Oi = function(a) {
        this.k = a;
        for (a = 0; a < this.p.length; ++a) this.tQ(this.p[a], a)
    };
    d.tQ = function(a, b) {
        if (a instanceof W && this.k) {
            var c = this.model.Vd(b),
                e = !a.isHidden && -.7 < c && 4 > c,
                c = Math.ceil(c + .7);
            a.Lh(e, c)
        } else a instanceof Y && a.be()
    };
    d.Zb = function() {
        this.k = !1;
        Am.u.Zb.call(this)
    };
    d.xa = function() {
        Am.u.xa.call(this);
        this.Zb()
    };
    d.wa = function() {
        Am.u.wa.call(this);
        this.Oi(this.w.Ka)
    };
    Am.inject = ["listSelectionManager", "componentFactory", "environmentModel", "carouselAnimator"];

    function Ip(a) {
        M.call(this);
        this.g = a;
        this.canBeFocusLeaf = !0
    }
    B(Ip, M);
    Ip.prototype.ready = function() {
        Ip.u.ready.call(this);
        this.C("keyup", y(this.i, this));
        this.C("click", L)
    };
    Ip.prototype.i = function(a) {
        13 == a.keyCode && (this.g.clear(), L(a))
    };
    Ip.inject = ["searchHistoryService", "suggestionsModel"];

    function Jp(a, b) {
        Mi.call(this, a, b);
        this.isVertical = !0;
        this.loopRows = this.catchRowMouseMove = !1
    }
    B(Jp, Mi);
    Jp.prototype.Go = function(a, b) {
        var c = b || dm('<ul class="$list" data-catch-mouse-move="{{catchRowMouseMove}}"data-item-factory="{{itemFactory}}" data-item-name="{{itemName}}" data-is-vertical="false" data-loop="{{loopRows}}" data-consume-events="{{consumeEvents}}" data-rate-limit="{{rateLimit}}"></ul>', null, this.l);
        if (!c) throw Error("Unable to create Grid child component");
        c.model = a;
        return c
    };
    Jp.prototype.An = function(a) {
        this.Kj(!0);
        Jp.u.An.call(this, a)
    };
    Jp.inject = ["listSelectionManager", "componentFactory"];

    function Kp(a, b, c) {
        Y.call(this, a, b, c);
        this.model = null
    }
    B(Kp, Y);
    Kp.prototype.Y = function(a) {
        this.model && (this.model.Yg = this.g.T(this.model.Yg), this.model.Ri = this.g.T(this.model.Ri), this.Fd("toggle:changed", y(this.i, this)));
        Kp.u.Y.call(this, a)
    };
    Kp.prototype.i = function() {
        this.Ah();
        this.H()
    };
    Kp.prototype.We = function(a) {
        this.model && this.model.Xr && !this.Qh() && this.model.toggle();
        Kp.u.We.call(this, a)
    };
    Kp.prototype.ua = function() {
        var a = Kp.u.ua.call(this);
        this.model && this.model.selected && a.push("toggle-selected");
        return a
    };
    Kp.inject = ["localeService", "voiceHelper", "rateLimit"];

    function Lp(a, b) {
        a = b.get("templatePreprocessor", {
            markup: a
        });
        var c = cm(a);
        Ql(c);
        return function() {
            var a = c.cloneNode(!0),
                b = [];
            Yl(c, a, b);
            Xl(a, b);
            return a
        }
    }
    Lp.inject = ["markup", "injector"];

    function Mp(a, b) {
        ie.call(this);
        this.g = a;
        this.K(b, "run-process", y(this.h, this))
    }
    B(Mp, ie);
    Mp.prototype.h = function(a) {
        a = a.detail[0] || a.detail;
        if (a instanceof P) {
            var b = this.g.get(a.id);
            b instanceof Q && b.di(a)
        }
    };
    Mp.inject = ["injector", "rootDispatcher"];

    function Np(a, b, c, e) {
        this.name = a;
        this.g = b;
        this.data = c || {};
        this.h = e || null
    };

    function Op(a, b, c) {
        b = new gk(b);
        var e = sg(b.Pb());
        this.o = a;
        this.h = c || "";
        a = e.match(Pp);
        if (null == a) a = [];
        else
            for (c = 0; c < a.length; ++c) a[c] = a[c].substr(1);
        this.i = a;
        this.l = new RegExp(e.replace(Pp, "([^/]+)"));
        b = b.Qd();
        e = {};
        a = b.vb();
        for (c = 0; c < a.length; ++c) {
            var f = a[c];
            e[f] = new RegExp(b.get(f).replace(Qp, ".*?"))
        }
        this.g = e
    }
    var Pp = /:\w+/g,
        Qp = /\*/g;
    Op.prototype.map = function(a) {
        var b = sg(a.Pb()),
            c = a.Qd();
        return (b = this.l.exec(b)) && this.k(c) ? new Np(this.o, a, this.j(b), this.p(a)) : null
    };
    Op.prototype.k = function(a) {
        for (var b in this.g)
            if (!a.Mn(b) || !this.g[b].exec(a.get(b))) return !1;
        return !0
    };
    Op.prototype.j = function(a) {
        for (var b = {}, c = 0; c < this.i.length; ++c) b[this.i[c]] = a[c + 1];
        return b
    };
    Op.prototype.p = function(a) {
        return this.h ? (a = new gk(a), a.Of(this.h), a) : null
    };

    function Rp(a) {
        this.j = a;
        this.g = [];
        this.h = null;
        this.i = 0
    }
    d = Rp.prototype;
    d.IS = function(a) {
        this.Yo(a) || this.vU(a) || this.az(this.gp(a));
        this.Zy()
    };
    d.blur = function(a) {
        this.Yo(a) && !this.sU(a) && (a = this.nU(a), this.az(this.gp(a)), this.Zy())
    };
    d.m6 = function(a) {
        return !!this.gp(a)
    };
    d.Yo = function(a) {
        return 0 <= this.g.indexOf(a)
    };
    d.Pb = function() {
        return this.g.concat()
    };
    d.JS = function(a) {
        a = this.g.indexOf(a);
        var b = a + 1;
        return 0 <= a && b < this.g.length ? this.g[b] : null
    };
    d.vU = function(a) {
        return !!this.h && 0 <= this.h.indexOf(a)
    };
    d.sU = function(a) {
        return !!this.h && -1 === this.h.indexOf(a)
    };
    d.nU = function(a) {
        for (a = this.g.indexOf(a) - 1; 0 <= a; --a) {
            var b = this.g[a];
            if (b.fb()) return b
        }
        return null
    };
    d.az = function(a) {
        if (a && !(10 <= this.i)) {
            var b = !!this.h;
            this.h = a;
            if (b) this.i++;
            else {
                for (a = 0; 100 > a && (this.IL() || this.HL()); ++a);
                this.h = null;
                this.i = 0
            }
        }
    };
    d.Zy = function() {
        this.h || (0 < this.g.length ? Ka(this.g).D.focus() : this.j.activeElement.blur())
    };
    d.IL = function() {
        return this.g.length && Ka(this.g) !== this.h[this.g.length - 1] ? (this.eH(this.g.pop()), !0) : !1
    };
    d.HL = function() {
        if (this.g.length < this.h.length) {
            var a = this.h[this.g.length];
            if (a.fb()) return this.g.push(a), this.QG(a), !0
        }
        return !1
    };
    d.eH = function(a) {
        a.xa();
        a.parent && a.parent.uo(a);
        a.Xc() || a.H()
    };
    d.QG = function(a) {
        a.wa();
        a.parent && a.parent.Hd(a);
        a.H()
    };
    d.gp = function(a) {
        if (!a) return [];
        for (var b = a; b;) {
            if (!b.fb(b !== a)) return null;
            b = b.parent
        }
        for (;
            (b = a.dd()) && b.fb();) a = b;
        return this.XT(a)
    };
    d.XT = function(a) {
        for (var b = []; a;) b.unshift(a), a = a.parent;
        return b
    };
    Rp.inject = ["document"];

    function Sp(a) {
        F.call(this);
        this.i = a;
        this.h = this.nE();
        this.g = this.mE(this.h)
    }
    B(Sp, F);
    d = Sp.prototype;
    d.nE = function() {
        var a = this.i.createElement("style");
        a.type = "text/css";
        document.head.appendChild(a);
        return a
    };
    d.mE = function(a) {
        return a.sheet ? a.sheet : a.styleSheet
    };
    d.add = function(a, b) {
        var c = this.uL(b);
        this.g.addRule ? this.g.addRule(a, c) : this.g.insertRule && this.g.insertRule(a + " {" + c + "}", this.g.cssRules.length)
    };
    d.uL = function(a) {
        var b = [],
            c;
        for (c in a) b.push(c + ": " + a[c] + ";");
        return b.join(" ")
    };
    d.M = function() {
        this.i.head.removeChild(this.h);
        Sp.u.M.call(this)
    };
    Sp.inject = ["document"];

    function Tp(a, b) {
        this.h = a;
        this.j = b;
        this.g = {}
    }
    Tp.prototype.register = function(a, b, c) {
        b ? (this.g[a] && (this.g[a] = null), this.i(a, b, c)) : this.l(a, b, c)
    };
    Tp.prototype.i = function(a, b, c) {
        b = {
            markup: b,
            injector: this.h
        };
        v(c) && (c = this.h.get(c, b));
        this.h.Ue(a, c || Lp, b)
    };
    Tp.prototype.l = function(a, b, c) {
        this.g[a] = {
            name: a,
            content: b,
            fF: c
        }
    };
    Tp.prototype.bb = function(a) {
        function b() {
            0 === --c && a && a()
        }
        var c = 0,
            e;
        for (e in this.g) {
            c++;
            var f = this.g[e];
            if (f) {
                var g = y(function(a, c) {
                    this.i(a.name, c, a.fF);
                    b()
                }, this, f);
                this.j.get(f.name, g, b)
            }
        }
    };
    Tp.inject = ["injector", "xhr"];

    function Up() {}
    B(Up, gm);
    Up.prototype.isSupported = function() {
        return !1
    };
    d = Up.prototype;
    d.Sm = function() {
        return !1
    };
    d.Tc = q;
    d.pb = q;
    d.ri = q;
    d.cx = q;
    d.mi = q;
    d.Ln = q;
    d.li = q;

    function Vp(a, b, c) {
        F.call(this);
        this.h = a;
        this.j = null;
        this.l = c;
        this.i = this.g = null;
        b && this.Sq(b)
    }
    B(Vp, F);
    d = Vp.prototype;
    d.M = function() {
        this.g && (this.g(), this.g = null);
        this.i && (this.i(), this.i = null);
        Vp.u.M.call(this)
    };
    d.Sq = function(a) {
        this.j = a;
        this.Bs() ? this.As() : this.g = this.h.C("projectionWindow:changed", y(this.sE, this))
    };
    d.sE = function() {
        this.Bs() && (this.g(), this.g = null, this.As())
    };
    d.Bs = function() {
        var a = this.h.Ij() + this.h.S();
        return this.h.$a().S() - a < this.l
    };
    d.As = function() {
        var a = this.j;
        this.j = null;
        this.i = a(y(this.FM, this), q)
    };
    d.FM = function(a, b) {
        this.h.$a().push(a);
        b && this.Sq(b)
    };
    Vp.inject = ["projection", "continuation", "thresholdDistance"];

    function Wp(a) {
        this.i = a
    }
    Wp.prototype.g = function(a, b) {
        var c = a && a.$;
        if (!c) throw Error("Attempt to create a component without a specified component renderer.");
        return this.h(String(c), a, b)
    };
    Wp.prototype.h = function(a, b, c) {
        if (c && this.j(c, a)) return c.model = b, c;
        a = pe(a, this.i);
        a.model = b;
        return a
    };
    Wp.prototype.j = function(a, b) {
        return a.Ca && a.Ca === b ? !0 : !(!a.model || a.model.$ !== b)
    };
    Wp.prototype.l = function(a, b, c) {
        a = c || dm(a, null, this.i);
        a.model = b;
        return a
    };
    Wp.inject = ["injector"];

    function Xp(a) {
        this.h = a
    }
    Xp.prototype.g = function() {
        var a = this.i(this.h.hash);
        return new gk(a)
    };
    Xp.prototype.j = function(a) {
        a = this.i(a.toString());
        this.h.hash = "/" + a
    };
    Xp.prototype.i = function(a) {
        return a.replace(/^#?\/*/, "")
    };
    Xp.inject = ["location"];

    function Yp(a) {
        me.call(this);
        this.i(a)
    }
    B(Yp, me);
    Yp.prototype.i = function(a) {
        function b(a) {
            return a
        }
        a = a || {};
        this.register("window", a);
        this.register("document", a.document || {});
        this.register("location", a.location || {});
        b.inject = ["markup"];
        this.Nh("templatePreprocessor", b);
        this.Fb("focus", Rp);
        this.Fb("xhr", op);
        this.Fb("templateResolver", Tp)
    };

    function Zp(a, b) {
        I.call(this);
        this.i = b;
        this.h = [];
        this.g = this.i.g();
        this.j = new Np("", this.g);
        this.l = (new tk(this)).yd(a, ["popstate", "hashchange"], this.KB);
        this.mq(this.l)
    }
    B(Zp, I);
    d = Zp.prototype;
    d.reset = function() {
        this.h.length = 0
    };
    d.Bg = function() {
        return this.g.clone()
    };
    d.p6 = function(a, b) {
        var c = new Op(b, a);
        this.h.push(c)
    };
    d.o6 = function(a, b) {
        var c = new Op("", a, b);
        this.h.push(c)
    };
    d.Cu = function(a) {
        a.toString() != this.g.toString() && (this.g = a, this.gn(a, !1))
    };
    d.KB = function() {
        var a = this.i.g();
        a.toString() != this.g.toString() && this.gn(a, !0)
    };
    d.gn = function(a, b) {
        var c = this.OO(a) || new Np(a.Pb(), a);
        c.h ? this.Cu(c.h) : this.PO(c, a, b)
    };
    d.OO = function(a) {
        for (var b = 0; b < this.h.length; ++b) {
            var c = this.h[b].map(a);
            if (c) return c
        }
        return null
    };
    d.PO = function(a, b, c) {
        var e = this.j;
        this.j = a;
        this.g = b;
        this.i.j(b);
        this.B("route-change", a, e);
        c && this.B("external-route-change", a, e)
    };
    d.bS = function() {
        this.gn(this.g, !0)
    };
    Zp.inject = ["window", "locationFacade"];

    function $p() {}
    $p.prototype.g = function(a) {
        var b = {
            kind: "youtube#video",
            snippet: {
                title: a.title,
                categoryId: a.i,
                description: a.description,
                tags: a.l
            },
            status: {
                privacyStatus: a.Ob
            }
        };
        a.videoId && (b.id = a.videoId);
        return T(b)
    };

    function aq() {
        this.enabled = !1
    }
    aq.prototype.g = function() {
        this.enabled = !this.enabled
    };

    function bq() {}
    bq.prototype.isSupported = function() {
        return !1
    };

    function cq(a, b, c, e, f, g, k, m, n) {
        this.L = e;
        this.F = m;
        this.g = b;
        this.o = 0;
        this.h = [];
        this.U = g;
        this.k = n;
        this.w = f;
        this.i = c;
        this.A = k;
        this.p = this.j = "";
        this.l = !1;
        a.supportsAchievements && b.isSupported() && this.zA()
    }
    d = cq.prototype;
    d.zA = function() {
        this.L.C("login-state-changed", y(this.JL, this));
        this.w.C("pairing:changed", y(this.LL, this));
        this.i.C("watch-next-loaded", y(this.OL, this));
        this.i.C("request-like-video", y(this.KL, this));
        this.i.C("request-video-upload-complete", y(this.NL, this));
        this.i.C("subscription-change", y(this.QL, this));
        this.U.C("state:changed", y(this.PL, this));
        this.k.C("percentagePlayed:changed", y(this.ML, this))
    };
    d.JL = function(a) {
        a && this.g.traceSignedIn()
    };
    d.ML = function() {
        var a = this.A.currentVideo;
        a && .01 <= this.k.percentagePlayed && this.j !== a.videoId && (this.j = a.videoId, this.i.B("cmd-load-watch-next", this.j))
    };
    d.LL = function() {
        0 < this.w.ug().S() && this.g.tracePairingComplete()
    };
    d.QL = function(a) {
        a.detail[1] && this.g.traceChannelSubscribed()
    };
    d.KL = function(a) {
        var b = a.detail[0];
        a = a.detail[1];
        if (b && a) {
            var c = this.h.indexOf(b);
            "like" == a && -1 == c && this.h.push(b);
            "dislike" == a && -1 != c && this.h.splice(c, 1);
            this.o < this.h.length && (this.o = this.h.length, this.g.traceVideoLiked())
        }
    };
    d.PL = function(a) {
        if (0 == a) {
            a = this.A.currentVideo;
            var b = Math.round(this.k.duration / 60) || 0;
            this.g.traceVideoWatched(b, "mdx" == a.serviceQuery, this.p, this.l);
            this.p = "";
            this.l = !1
        }
    };
    d.NL = function() {
        this.g.traceVideoUploaded()
    };
    d.OL = function(a) {
        if (a = p("contents.singleColumnWatchNextResults.results.results.contents", a.detail[0]))
            for (var b = 0, c = a.length; b < c; ++b) {
                var e = p("itemSectionRenderer.contents", a[b]);
                if (e)
                    for (var f = 0, g = e.length; f < g; ++f) {
                        var k = p("videoMetadataRenderer", e[f]);
                        if (k && this.j === k.videoId) {
                            this.p = p("achievements.genreAchievementsRenderer.genre", k) || "other";
                            this.l = p("achievements.viewsAchievementsRenderer.below_threshold", k) || !1;
                            return
                        }
                    }
            }
    };
    cq.inject = "environmentModel eventReporter rootDispatcher authService remoteService playerFacade watchModel dialogService progressModel".split(" ");

    function dq(a, b, c, e, f, g, k, m, n, r) {
        Z.call(this, a, b, "activity_sw");
        this.U = c;
        this.l = e;
        this.G = f;
        this.h = g;
        this.w = k;
        this.o = m;
        this.F = n;
        this.j = null;
        this.p = !1;
        this.L = r.C("user:activity", y(this.lF, this));
        this.A = this.l.setTimeout(y(this.mF, this), 3E5);
        this.w.C("route-change", y(this.nF, this))
    }
    B(dq, Z);
    d = dq.prototype;
    d.lF = function() {
        this.l.clearTimeout(this.A);
        this.L()
    };
    d.mF = function() {
        this.qp("noActivity5m")
    };
    d.nF = function() {
        var a = this.h.mc() && !this.h.Wa() || this.h.ne();
        this.o.EM(a);
        (this.h.xe() != this.h.ci() || this.h.zf() != this.h.df() && (this.h.Wa() || this.h.ne() || "browse" === this.h.zf())) && this.DM(this.w.Bg())
    };
    d.gI = function() {
        var a = this.k;
        this.k = this.l.Uc();
        return a ? ((this.k - a) / 1E3).toFixed(1) : null
    };
    d.DM = function(a) {
        this.qp(this.$U(a))
    };
    d.YL = function() {
        this.qp("exit")
    };
    d.qp = function(a) {
        var b = this.hI(a, this.gI());
        this.g("/gen_204", b);
        this.j = a
    };
    d.hI = function(a, b) {
        var c = eq,
            e = {
                a: "tv_activity"
            };
        e[c.tI] = a;
        e.logged_in = this.U.Ab() ? 1 : 0;
        null != this.j && (e[c.sI] = this.j);
        null != b && (e.t = b);
        !this.p && this.G.uI() && (e[c.rI] = 1, this.p = !0);
        ("browse" === this.h.xe() || this.vI()) && z(e, this.o.wI());
        "browse-sets" === this.h.xe() && z(e, this.F.xI());
        return e
    };
    d.vI = function() {
        return "watch" == this.h.xe() && "browse" == this.h.zf()
    };
    d.$U = function(a) {
        var b = sg(a.Pb());
        return (a = a.Qd().get("mode", "")) ? b + ":" + a : b
    };
    var eq = {
        rI: "first_activation",
        sI: "prev",
        tI: "state"
    };
    dq.inject = "environmentModel privateDataService authService timeService statsService applicationState router browseActivity browseSetsActivity playerFacade".split(" ");

    function fq(a, b) {
        this.h = a;
        this.g = b
    }
    d = fq.prototype;
    d.get = function(a, b, c, e, f) {
        return this.wk("GET", a, b, null, c, e, f)
    };
    d.kH = function(a, b, c, e, f, g) {
        return this.wk("POST", a, b, c, e, f, g)
    };
    d.Tu = function(a, b, c, e, f, g, k) {
        return this.wk("PUT", a, b, c, e, f, g, k)
    };
    d.yL = function(a, b, c, e, f) {
        return this.wk("DELETE", a, b, null, c, e, f)
    };
    d.wk = function(a, b, c, e, f, g, k, m) {
        var n = !1,
            r = null;
        this.g.Cb(y(function(u) {
            n || (-1 == b.indexOf("//") && (b = "//www.googleapis.com" + b, c = c || {}, c.key = "AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA", b = Ve(b, c)), u && (k = k || {}, k.Authorization = "Bearer " + u), u = y(this.PG, this, g), r = this.h.Dj(a, b, null, e, f, u, k, m))
        }, this));
        return function() {
            n = !0;
            r && r()
        }
    };
    d.PG = function(a, b, c) {
        a(new ip(c))
    };
    fq.inject = ["ytHttp", "authService"];

    function gq(a, b) {
        this.g = a;
        this.h = b
    }
    gq.prototype.i = function(a, b, c) {
        a = this.h.g(a);
        return this.g.kH("/upload/youtube/v3/videos", {
            alt: "json",
            part: "snippet,status",
            uploadType: "resumable"
        }, a, b, c, {
            "Content-Type": "application/json"
        })
    };
    gq.prototype.j = function(a, b, c, e, f) {
        return this.g.Tu(a, null, b, c, e, {
            "Content-Type": b.type
        }, f)
    };
    gq.inject = ["apiary", "apiaryVideoSerializer"];

    function hq(a, b, c) {
        this.g = a;
        this.i = b;
        this.j = c
    }
    hq.prototype.get = function(a, b, c) {
        a = {
            id: a,
            part: "snippet,status"
        };
        b = y(this.h, this, b);
        return this.g.get("/youtube/v3/videos", a, b, c)
    };
    hq.prototype.h = function(a, b) {
        var c = this.j.get(ue, {
                serviceId: "",
                serviceQuery: "",
                listType: "UU"
            }),
            e = b.items[0];
        c.videoId = e.id;
        c.title = p("snippet.title", e);
        c.i = p("snippet.categoryId", e);
        c.description = p("snippet.description", e);
        c.Ob = p("status.privacyStatus", e);
        c.h = p("status.processingStatus", e);
        c.l = p("snippet.tags", e);
        c.imageUrl = p("snippet.thumbnails.high.url", e) || p("snippet.thumbnails.medium.url", e) || p("snippet.thumbnails.default.url", e) || c.imageUrl;
        a(c)
    };
    hq.prototype.p = function(a, b, c) {
        a = this.i.g(a);
        return this.g.Tu("/youtube/v3/videos", {
            part: "snippet,status"
        }, a, b, c, {
            "Content-Type": "application/json"
        })
    };
    hq.prototype.l = function(a, b, c) {
        return this.g.yL("/youtube/v3/videos", {
            id: a
        }, b, c)
    };
    hq.inject = ["apiary", "apiaryVideoSerializer", "injector"];

    function iq(a, b, c) {
        Z.call(this, a, b, "audio_config_sw");
        this.h = c
    }
    B(iq, Z);
    iq.prototype.j = function() {
        var a = this.h.isSupported() ? this.h.items : [];
        if (0 != a.length) {
            for (var b = {
                    a: "tv_audio_config"
                }, c = 0, e = a.length; c < e; ++c) {
                var f = a[c],
                    g = "item" + c,
                    f = [f.codingType, f.connector, f.numberOfChannels].join();
                b[g] = f
            }
            this.g("/gen_204", b)
        }
    };
    iq.inject = ["environmentModel", "privateDataService", "audioConfigApi"];

    function jq(a, b, c) {
        Z.call(this, a, b, "backend_error_sw");
        this.j = c
    }
    B(jq, Z);
    var kq = {
        VH: "be",
        WH: "path",
        XH: "rcode"
    };
    jq.prototype.h = function(a, b, c) {
        var e = {
            a: "tv_berror"
        };
        e[kq.VH] = a;
        e[kq.WH] = b;
        c && (e[kq.XH] = c);
        e.logged_in = this.j.Ab() ? 1 : 0;
        this.g("/gen_204", e)
    };
    jq.inject = ["environmentModel", "privateDataService", "authService"];

    function lq(a, b, c) {
        I.call(this);
        this.j = a;
        this.l = -1;
        this.i = this.QB(b, c);
        this.h = (this.g = a.supportsBackgrounds) ? this.i : ""
    }
    B(lq, I);
    d = lq.prototype;
    d.QB = function(a, b) {
        return this.j.useSetsUi ? b : a + "/bg" + Math.floor(115 * Math.random() + 1) + ".jpg"
    };
    d.$R = function() {
        return this.h
    };
    d.pj = function() {
        !this.g && this.j.supportsBackgrounds && (this.g = !0, this.rv())
    };
    d.HS = function() {
        this.g && (this.g = !1, this.rv())
    };
    d.rv = function() {
        var a = "";
        this.g && (a = this.i);
        this.h != a && (this.h = a, this.B("update-background", a))
    };
    lq.inject = ["environmentModel", "imagePath", "defaultBackground"];

    function mq(a, b, c) {
        this.h = a;
        this.g = b;
        this.j = c
    }
    mq.prototype.initialize = function() {
        var a = y(this.i, this);
        this.g.C("login-state-changed", a);
        this.g.vf(a)
    };
    mq.prototype.i = function(a) {
        a && this.h.sg && this.g.Cb(y(function(a) {
            a && this.j.get("/vendor_signin", {
                access_token: a,
                vendor: this.h.sg
            })
        }, this))
    };
    mq.inject = ["environmentModel", "authService", "ytHttp"];

    function nq(a, b) {
        Z.call(this, a, b);
        this.o = "crash-data";
        this.p = this.j = this.h = this.l = 0;
        this.k = !1
    }
    B(nq, Z);
    d = nq.prototype;
    d.initialize = function() {
        this.YK();
        this.ZK() && this.g("/gen_204", this.aL());
        this.$K()
    };
    d.YK = function() {
        var a = this.I.nv("crash-data");
        a && (this.l = a["startup-count"], this.h = a["clean-exits"], this.j = a["crash-count"], this.p = a.startup, this.k = !0)
    };
    d.ZK = function() {
        return this.k && this.j < this.yv()
    };
    d.$K = function() {
        this.j = this.yv();
        this.l++;
        this.p = this.i.kd;
        this.Vt()
    };
    d.yv = function() {
        return this.l - this.h
    };
    d.XL = function() {
        this.h++;
        this.Vt()
    };
    d.aL = function() {
        var a = {
            a: "tv_crash"
        };
        a.startups = this.l;
        a.exits = this.h;
        a.last_count = this.j;
        a.start = this.p;
        return a
    };
    d.Vt = function() {
        var a = {};
        a["startup-count"] = this.l;
        a["clean-exits"] = this.h;
        a["crash-count"] = this.j;
        a.startup = this.p;
        this.I.xr("crash-data", a)
    };
    nq.inject = ["environmentModel", "privateDataService"];

    function oq(a, b, c) {
        Z.call(this, a, b);
        this.j = c
    }
    B(oq, Z);
    oq.prototype.h = function() {
        var a = {};
        z(a, this.j.kI());
        this.g("//www.youtube-nocookie.com/device_204", a, null, !0)
    };
    oq.inject = ["environmentModel", "privateDataService", "statsService"];

    function pq(a, b, c, e, f) {
        this.V = a;
        this.p = b;
        this.j = c;
        this.l = e;
        this.k = f;
        this.g = !1
    }
    pq.prototype.initialize = function() {
        var a = y(this.h, this);
        this.V.addEventListener("beforeunload", a, !1);
        this.V.addEventListener("unload", a, !1)
    };
    pq.prototype.i = function() {
        this.l.XL();
        this.j.YL();
        this.k.WL();
        this.p.flush()
    };
    pq.prototype.h = function() {
        this.g || (this.i(), this.g = !0)
    };
    pq.inject = ["window", "localStorage", "activityReportingService", "crashReportingService", "remoteService"];

    function qq(a, b) {
        this.j = a;
        this.g = b;
        this.i = !1
    }
    d = qq.prototype;
    d.initialize = function() {
        if (!this.h && this.g.isSupported()) try {
            this.g.isInAppServer() ? (this.h = this.g.createInAppServer("YouTube"), this.h.addRequestHandler("GET", "/", y(this.aH, this)), this.h.addRequestHandler("POST", "/", y(this.cH, this)), this.h.addRequestHandler("DELETE", "/run", y(this.$G, this))) : this.g.isNative() && (this.h = this.g.createNativeServiceHandler(y(this.bH, this)))
        } catch (a) {
            console.error("Steel Dial Server Creation exception: " + a)
        }
    };
    d.$G = function(a, b) {
        b.responseCode = 501;
        b.body = "";
        return !0
    };
    d.aH = function(a, b) {
        var c = this.j.Zh(),
            e = '<?xml version="1.0" encoding="UTF-8"?><service xmlns="urn:dial-multiscreen-org:schemas:dial"><name>YouTube</name><options allowStop="false" /><state>' + (null != c || this.i ? "running" : "stopped") + "</state>";
        this.i && (e += '<link rel="run" href="' + this.Lw(a) + '" />');
        null != c && (e += '<additionalData xmlns="http://www.youtube.com/dial"><screenId>' + c + "</screenId></additionalData>");
        b.mimeType = 'text/xml; charset="utf-8"';
        b.responseCode = 200;
        b.body = e + "</service>";
        return !0
    };
    d.cH = function(a, b) {
        var c = Ue(a.body);
        return this.oz(c) ? (b.responseCode = 201, b.addHeader("LOCATION", this.Lw(a)), b.mimeType = 'text/plain; charset="utf-8"', b.body = "", !0) : !1
    };
    d.bH = function(a) {
        a = Ue(a);
        this.oz(a)
    };
    d.oz = function(a) {
        if (a.hasOwnProperty("pairingCode") && a.pairingCode) {
            this.j.ku(a.pairingCode);
            this.i = !0;
            if (a.v) {
                var b = parseFloat(a.t);
                this.j.Kl(a.v, isNaN(b) ? 0 : b)
            }
            return !0
        }
        return !1
    };
    d.Lw = function(a) {
        return "http://" + a.host + a.path + "/run"
    };
    qq.inject = ["remoteService", "dialApi"];

    function rq(a, b, c, e, f, g, k, m, n, r, u, t, x, G, fa, ga, Ya, Fc, Za, Ub) {
        this.G = a;
        this.h = b;
        this.k = c;
        this.j = e;
        this.F = f;
        this.g = g;
        this.l = k;
        this.w = m;
        this.J = n;
        this.o = r;
        this.i = u;
        this.p = t;
        this.W = x;
        this.U = G;
        this.I = fa;
        this.Z = ga;
        this.na = Ya;
        this.O = Fc;
        this.A = Za;
        this.L = Ub
    }
    d = rq.prototype;
    d.PE = function(a) {
        this.p.initialize();
        this.RM();
        this.OM();
        this.PM();
        this.MM();
        this.SM();
        this.J.flush();
        var b = this.L.h();
        b ? a = y(a, null, b) : (this.QM(), this.LM());
        this.NM(a)
    };
    d.RM = function() {
        this.G.body.className = this.g.xp
    };
    d.OM = function() {
        for (var a = "gestureService resizeService soundService achievements editVideo exceptionLogger windowFocus processMediator activityReportingService fragmentReportingService playbackReporter".split(" "), b = 0, c = a.length; b < c; ++b) this.h.get(a[b])
    };
    d.PM = function() {
        this.Z.B("run-process", new Ap)
    };
    d.MM = function() {
        this.l.initialize();
        this.w.initialize();
        this.o.initialize();
        this.i.initialize();
        this.A.initialize()
    };
    d.SM = function() {
        this.g.brokenLogin && (this.U.ac(), this.i.du())
    };
    d.QM = function() {
        this.k.h();
        this.j.j();
        this.F.initialize();
        this.na.g("/gen_204", this.O.RC())
    };
    d.LM = function() {
        this.g.Sp && this.W.qK()
    };
    d.NM = function(a) {
        if (this.g.yp) this.h.dG(a);
        else {
            var b = this.h,
                c = this.I;
            b.P(c + "/rebound/advertisement_info.html", '<div>  <div class="advertisement-info-top">    <div class="youtube-hosted">      <div class="$image advertisement-avatar" data-image-url="{{advertiserAvatar}}"></div>      <div class="advertisement-title">        {{title}}      </div>      <div class="advertisement-advertiser">        <span class="ad-badge">[[AD|Badge indicating that this is an advertisement.]]</span>        <span>[[by {{advertiser}}|Label preceeding the name of the advertiser, indicating that the        advertiser is the author of the advertisement.]]</span> &nbsp;&#x2022;&nbsp;        <span class="remaining-duration">{{remainingDuration}}</span>      </div>    </div>    <div class="third-party">      <span class="ad-badge">[[AD|Badge indicating that this is an advertisement.]]</span>      &nbsp;&#x2022;&nbsp;<span class="remaining-duration">{{remainingDuration}}</span>    </div>  </div></div>');
            b.P(c +
                "/rebound/app.html", '<div id="app-markup">  <div id="watch" class="$watch"></div>  <div id="browse" class="$browse"></div>  <div id="browse-sets-placeholder"></div>  <div id="settings-placeholder"></div>  <div id="search" class="$search" data-is-hidden="true"></div>  <div id="guide-placeholder" class="hidden"></div>  <div class="$call-to-cast" id="call-to-cast"></div>  <div class="logo-container icon-youtube-logo"></div>  <div class="$applicationMessage"></div>  <div id="spinner-container" class="hidden">    <div class="fallback-loading-indicator">[[LOADING...|Indicator that content is loading from the network.]]</div>    <div class="carousel-loading-indicator"></div>  </div>  <div class="$debug-watermark"></div>  <div id="dialog" class="$dialog"></div>  <div id="voice-footer-placeholder"></div>  <div class="$legend" id="legend"></div>  <div class="$toaster"></div>  <div class="$engagement-indicator"></div>  <div class="$snapControls" id="snap-controls"></div>  <div id="context-menu-placeholder" class="hidden"></div>  <div class="$fps"></div></div>');
            b.P(c + "/rebound/application_message.html", "<div>{{message}}</div>");
            b.P(c + "/rebound/browse.html", '<div>  <div class="$browse-list"></div>  <div class="$super-scroller"></div>  <div id="scroller-background"></div>  <div id="pointer-overlay" class="$pointer-overlay"></div></div>');
            b.P(c + "/rebound/browse_header.html", '<div>  <div class="browse-header-gradient"></div>  <div class="browse-header-content">    <div class="$image browse-header-avatar" data-image-url="{{avatarImageURL}}"></div>    <div class="title"><span class="title-background">{{title}}</span></div>  </div>  <div class="$component browse-header-button-bar">    <div class="$iconButton button browse-header-trailer" data-icon-class="icon-player-play"></div>    <div class="$subscribeButton button browse-header-subscribe" data-icon-class="icon-logo-lozenge"></div>  </div></div>');
            b.P(c + "/rebound/browse_sets.html", '<div>  <div id="browse-search-bar" class="$iconButton" data-icon-class="icon-search"></div>  <div class="browse-search-youtube-logo icon-youtube-logo"></div>  <div id="browse-header" class="$browse-header"></div>  <div id="platform-user-icon" class="$image" data-image-url="{{platformUserIcon}}"></div>  <div class="browse-content">    <div id="shelves" class="$shelves"></div>  </div>  <div id="pointer-overlay" class="$pointer-overlay"></div></div>');
            b.P(c + "/rebound/button.html",
                "<div>{{model.label}}</div>");
            b.P(c + "/rebound/call_to_cast.html", '<div>  <div class="legacy-end-screen">    <h2 class="call-to-cast-text">[[Ready to watch?|Title of the instructions screen encouraging user to take action.]]</h2>    <h3 class="call-to-cast-text">[[Choose a YouTube video on your mobile device or laptop, then watch it here.|Steps to be taken on paired device such as phone, laptop or tablet, to trigger a playback on TV, acting as a screen.]]</h3>  </div>  <div class="end-screen multi-user left">    <h2 class="call-to-cast-text">[[Everyone\'s connected.|Title of the end screen highlighting the multi-user experience.|1944634015]]</h2>    <h3 class="call-to-cast-text">[[Friends and family can <em>join in</em> and add videos to your TV Queue.|Description of the end screen highlighting the multi-user experience.|1174157928]]</h3>    <div class="yt-logo"></div>  </div>  <div class="end-screen yt-mix right">    <h2 class="call-to-cast-text">[[Find the perfect mix.|Title of the end screen highlighting YouTube mixes.]]</h2>    <h3 class="call-to-cast-text">[[Play a nonstop <em>YouTube Mix</em> inspired by your favorite artist or video.|Description of the end screen highlighting YouTube mixes.]]</h3>    <div class="yt-logo"></div>  </div>  <div class="end-screen tv-queue left">    <h2 class="call-to-cast-text">[[What\'s up next?|Title of the end screen highlighting the TV Queue.]]</h2>    <h3 class="call-to-cast-text">[[Browse and add videos to your <em>TV Queue</em> while your current video keeps playing.|Description of the end screen highlighting the TV Queue.]]</h3>    <div class="yt-logo"></div>  </div></div>');
            b.P(c + "/rebound/channel_button.html", '<div class="button" style="background-image: url({{model.payload.imageUrl}})">{{model.payload.displayName}}</div>');
            b.P(c + "/rebound/color_button.html", '<div class="button">  <div class="preview {{model.payload.class}}"></div>  <span>{{model.label}}</span></div>');
            b.P(c + "/rebound/context_menu.html", '<div id="context-menu" class="context-menu-defocuser">  <div class="$list context-menu-list" data-model="{{model}}"      data-consume-events="true" data-is-vertical="true"      data-loop="false" data-enable-sounds="true">  </div></div>');
            b.P(c + "/rebound/debug_watermark.html", "<h1>{{getText()}}</h1>");
            b.P(c + "/rebound/dialog.html", '<div>  <div id="dialog-wrapper">    <div class="dialog-icon"></div>    <div class="dialog-contents">      <div class="header">        <div class="title">{{title}}</div>      </div>      <div class="$component" id="dialog-view"></div>      <div class="buttons">        <div class="$button" id="dialog-cancel-button" data-on-enter="{{boundCancelClickHandler}}"></div>        <div class="$button" id="dialog-ok-button" data-on-enter="{{boundOkClickHandler}}"></div>      </div>    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/closed_captions.html", '<div>  <div class="$list" id="display-properties-list" data-model="{{displayPropertiesProjection}}" data-is-vertical="true" data-element-limit="6" data-catch-mouse-move="true" data-mouse-auto-scroll="false"></div>  <div class="$list" id="options-list" data-model="{{getDisplayPropertyOptions()}}" data-is-vertical="true" data-element-limit="6" data-catch-mouse-move="true" data-mouse-auto-scroll="false"></div></div>');
            b.P(c + "/rebound/dialogs/debug.html",
                '<div>  <ul class="$list" data-model="{{environmentProperties}}">    <li><span class="label">{{model.key}}: </span><span>{{model.value}}</span></li>  </ul></div>');
            b.P(c + "/rebound/dialogs/delete_video.html", '<div>  <div class="dialog-contents">    [[Are you sure you would like to delete this video?|Asks user if they are sure they want to do the video deletion.]]  </div>  <div class="video-tile-container">    <div class="$videoTile" data-model="{{model.video}}"></div>  </div></div>');
            b.P(c + "/rebound/dialogs/eureka_authorization.html",
                '<div>  <div class="icon"></div>  <div class="info">    <div class="title">[[This video can\'t be played on this device.|Informs the user that this video can\'t be played on this device.]]</div>    <div class="message">[[Please choose another video.|Informs the user to please choose another video for playback.]]    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/eureka_player_error.html", '<div>  <div class="icon"></div>  <div class="info">    <div class="title">[[There was an error playing this video.|Informs the user of a video playback error.]]</div>    <div class="message">[[Please choose another video.|Informs the user to please choose another video for playback.]]    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/flag_claim.html", '<div class="flag-claim">  <div class="metadata">    <span class="text">{{model.video.title}}</span>    <div class="url">youtu.be/{{model.video.videoId}}</div>  </div>  <div class="copyright-infringment">    [[<div class="subtitle">Infringes my copyright</div> youtube.com/t/dmca_policy <div class="email">or email</div> copyright@youtube.com|Provides a way, via email or web site, to claim that a video infringes the current user\'s copyright.]]  </div>  <div class="privacy-invasion">    [[<div class="subtitle">Invades my privacy</div> youtube.com/t/privacy_guidelines|Provides a way to claim, via email or web site, that a given video invades the current user\'s privacy.]]  </div></div>');
            b.P(c + "/rebound/dialogs/flag_options.html", '<div class="flag-list-container">  <div class="$grid flag-list" data-model="{{flagData}}" data-consume-events="true"></div></div>');
            b.P(c + "/rebound/dialogs/flag_video.html", '<div class="flag-video">  <div>    [[Visit this video on your computer or laptop and click the flag icon to submit a claim:|Provides a URL which a user can access in order to flag the video as inappropriate. Followed by actual URL.]]    <span class="url">youtu.be/{{model.video.videoId}}</span>  </div>  <div class="flag-example"></div></div>');
            b.P(c + "/rebound/dialogs/kenko_warning.html", '<div>  <div id="kenko">    <div>      <p><div class="warning"></div>\u8b66\u544a</p>      <p>\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u5f15\u304d\u8d77\u3053\u3055\u308c\u308b\u767a\u4f5c\u306b\u3064\u3044\u3066</p>      <p>\u70b9\u6ec5\u3092\u7e70\u308a\u8fd4\u3059\u753b\u9762\u3084\u3001\u305d\u306e\u4ed6\u306e\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u3001\u307e\u308c\u306b\u3001\u76ee\u306e\u75db\u307f\u3001\u8996\u899a\u7570\u5e38\u3001\u504f\u982d\u75db\u3001\u3051\u3044\u308c\u3093\u3084\u610f\u8b58\u969c\u5bb3\uff08\u5931\u795e\u306a\u3069\uff09\u306a\u3069\u306e\u75c7\u72b6\uff08\u5149\u611f\u53d7\u6027\u767a\u4f5c\uff09\u304c\u8d77\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3057\u305f\u75c7\u72b6\u306e\u3042\u308b\u65b9\u306f\u3001\u4e8b\u524d\u306b\u5fc5\u305a\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044</p>    </div>    <div>      <p><div class="warning"></div>\u6ce8\u610f</p>      <p>\u3053\u3093\u306a\u3068\u304d\u306f\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3059\u308b</p>      <p>\u4e0a\u8a18\u306e\u75c7\u72b6\u306b\u52a0\u3048\u3001\u982d\u75db\u3001\u3081\u307e\u3044\u3001\u5410\u304d\u6c17\u3001\u75b2\u52b4\u611f\u3001\u4e57\u308a\u7269\u9154\u3044\u306b\u4f3c\u305f\u75c7\u72b6\u306a\u3069\u3092\u611f\u3058\u305f\u3068\u304d\u3084\u3001\u76ee\u3001\u8033\u3001\u624b\u3001\u8155\u3001\u8db3\u306a\u3069\u3001\u8eab\u4f53\u306e\u4e00\u90e8\u306b\u4e0d\u5feb\u611f\u3084\u75db\u307f\u3092\u611f\u3058\u305f\u3068\u304d\u306f\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u3082\u6cbb\u3089\u306a\u3044\u3068\u304d\u306f\u3001\u533b\u5e2b\u306e\u8a3a\u5bdf\u3092\u53d7\u3051\u3066\u304f\u3060\u3055\u3044\u3002</p>    </div>    <div>      <p>3D\u6620\u50cf\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u306b\u3064\u3044\u3066</p>    3D\u6620\u50cf\u306e\u898b\u3048\u65b9\u306b\u306f\u500b\u4eba\u5dee\u304c\u3042\u308a\u307e\u3059\u3002\u9055\u548c\u611f\u3092\u611f\u3058\u305f\u308a\u3001\u7acb\u4f53\u306b\u898b\u3048\u306a\u3044\u5834\u5408\u306f\u30013D\u6a5f\u80fd\u306e\u3054\u4f7f\u7528\u3092\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002\u6700\u65b0\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18URL\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002      <p>http://www.jp.playstation.com/support/</p>      <p>\u306a\u304a\u3001\u304a\u5b50\u3055\u307e\uff08\u7279\u306b6\u6b73\u672a\u6e80\u306e\u5b50\uff09\u306e\u8996\u899a\u306f\u767a\u9054\u6bb5\u968e\u306b\u3042\u308a\u307e\u3059\u3002\u304a\u5b50\u3055\u307e\u304c3D\u6620\u50cf\u3092\u8996\u8074\u3057\u305f\u308a\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u3092\u30d7\u30ec\u30a4\u3059\u308b\u524d\u306b\u3001\u5c0f\u5150\u79d1\u3084\u773c\u79d1\u306a\u3069\u306e\u533b\u5e2b\u306b\u3054\u76f8\u8ac7\u3044\u305f\u3060\u304f\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002</p>    </div>    <div>      <p>\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u632f\u52d5\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u3064\u3044\u3066</p>      <p>\u632f\u52d5\u969c\u5bb3\u306e\u3042\u308b\u65b9\u306f\u3001\u30d0\u30a4\u30d6\u30ec\u30fc\u30b7\u30e7\u30f3\uff08\u632f\u52d5\uff09\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</p>      <p>\u203b\u632f\u52d5\u6a5f\u80fd\u306e\u5165\uff0f\u5207\u306f\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306ePS\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>    </div>    <div>      <ul class="ul">        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u3001\u90e8\u5c4b\u3092\u660e\u308b\u304f\u3057\u3001\u3067\u304d\u308b\u3060\u3051\u753b\u9762\u304b\u3089\u96e2\u308c\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u75b2\u308c\u3066\u3044\u308b\u3068\u304d\u3084\u7761\u7720\u4e0d\u8db3\u306e\u3068\u304d\u306f\u3001\u30d7\u30ec\u30a4\u3092\u907f\u3051\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u5065\u5eb7\u306e\u305f\u3081\u30011\u6642\u9593\u3054\u3068\u306b15\u5206\u7a0b\u5ea6\u306e\u4f11\u61a9\u3092\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u4e2d\u306b\u4f53\u8abf\u304c\u60aa\u304f\u306a\u3063\u305f\u3089\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u3084\u3081\u3066\u304f\u3060\u3055\u3044\u3002</li>      </ul>    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/login.html", '<div>  <div class="connection-instructions">    <div class="icon-settings-pair"/></div>    <div class="connection-steps">      [[<div class="step1">Go To</div>      <div class="activation-url">youtube.com/activate</div>|Tells user that there\'s a URL here to navigate to]]      [[<div class="step2">and enter</div>      <div class="activation-code">{{activationCode}}</div>|Tells user this is the string to enter into the device.]]    </div>    <div class="connection-error hidden">[[Sign in is temporarily unavailable.<br/><br/>Please try again later.|Error message displayed when device fails to load activation code.]]</div>  </div></div>');
            b.P(c + "/rebound/dialogs/logout.html", '<div>  <div class="logout-authenticated-info">    <div class="login-user-info">      <div class="login-user-icon" style="background-image:url({{model.channel.imageUrl}})"></div>      <h3 class="display-name">{{model.channel.displayName}}</h3>      <div class="platform-container">        <div class="platform-user-icon" style="background-image:url({{model.channel.platformUserIcon}})"></div>        <span class="platform-user-name">{{model.channel.platformUserName}}</span>      </div>      <div class="signed-in-message">[[You\'re signed in as <strong>{{model.channel.displayName}}&nbsp;</strong>|Tooltip displaying the YouTube username of the currently signed-in user.]]</div>    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/logout_ps4.html", '<div>  <div class="logout-prompt">[[To sign out, select <strong>[Settings] > [PSN\u2120] > [Link with Other Services] > [YouTube]</strong>, and then select [Sign Out].|[PS4] Platform specific instructions to log out of the user\'s account using the native system UI. The phrases in the brackets [] are intended to match the actual wording used in the PS4 system UI.|2136496489]]</div></div>');
            b.P(c + "/rebound/dialogs/modify_video.html", '<div>  <div id="modify-list" class="$list" data-model="{{model.list}}"></div>  <div class="video-tile-container">    <div class="$videoTile" data-model="{{model.video}}" data-enabled="false"></div>  </div></div>');
            b.P(c + "/rebound/dialogs/paid_channel.html", '<div class="paid-channel-info">[[This is a paid channel, which requires a recurring subscription payment to view the content. To find out more about this channel visit <span class="channel-url">www.youtube.com/user/{{model.channel.userId}}</span> on your computer.|Message that is displayed when user tries to subscribe to a paid channel.]]</div>');
            b.P(c + "/rebound/dialogs/pairing.html", '<div class="pairing">  <div class="connection-instructions">    <div class="icon-settings-pair"/></div>    <div class="dial-upsell">      [[Connect your mobile device to the same WiFi network, open YouTube and tap the <div class="cast-icon">&nbsp;</div> icon.|        A message hinting the user about the possibility to use the automatically detected send-to-TV function of the YouTube mobile client to connect.]]    </div>    <div class="connection-steps">      [[<div class="step1">Go to</div>        <div class="pair-url">youtube.com/pair</div>|Tells user that there\'s a URL here to navigate to]]      [[<div class="step2">and enter</div>        <div class="pair-code">{{displayPairingCode}}</div>|Tells user this is the string to enter into the device]]    </div>    <div class="qr-code-wrapper">      <div class="qr-code">        <div class="scan">[[Or scan|Title above QR code telling a user that it is possible to sign into account by using QR-code scanner.]]</div>        <img class="qr-code-image" x-src="{{codeImageUrl}}" />      </div>    </div>    <div class="connected-list">      <div class="connected-header">[[Connected|Heading for a list of devices connected to the application.]]</div>      <ul class="$list devices" data-model="{{connectedDevices}}">        <li class="{{model.deviceClass}}">{{model.displayString}}</li>      </ul>    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/player_error.html", '<div class="player-error">{{localizedErrorMessage}}</div>');
            b.P(c + "/rebound/dialogs/qr.html", '<div>  <div class="box">[[On your phone, tablet or laptop, go to: <a class="base-url">{{displayUrl}}</a>|Explanation on how to access help and feedback web pages.]]</div>  <div class="box qr-code-wrapper">[[Or scan: <br><img class="qr" x-src="{{imageUrl}}"/>|Explains alternative way of accessing help and feedback pages by scanning QR code.]]</div></div>');
            b.P(c +
                "/rebound/dialogs/remote_reset.html", '<div>  <div class="connected-list">    <div>      <div class="connected-header">[[Paired Devices|Tooltip showing status of paired devices, connected to the application or not.]]</div>      <ul class="$list devices" data-model="{{devices}}">          <li class="{{model.deviceClass}}">{{model.displayString}}</li>      </ul>    </div>  </div>  <span class="reset-help">[[Selecting \'OK\' will disconnect all paired devices.|Tooltip displayed when a user is going to disconnect her mobile device from the application.]]</span></div>');
            b.P(c + "/rebound/dialogs/scroll_pane.html", '<div>  <div class="scrolling-text"></div>  <div class="scrollbar">    <div class="handle"></div>  </div></div>');
            b.P(c + "/rebound/dialogs/sets_login.html", '<div>  <div class="dialog-image"></div>  <div class="body-text">    <div class="main-title">{{model.mainTitle}}</div>    <div class="connection-instructions">      <div class="standard-message connection-steps">        [[<div class="step1">To sign in, go to</div><div class="activation-url">youtube.com/activate</div><div class="step2">and enter</div><div class="activation-code">{{activationCode}}</div>|Tells user that, in order to sign in to the application, they should use a device to navigate to the given URL and enter the given code on the resulting site.]]      </div>      <div class="like-dislike-message connection-steps">        [[<div class="step1">To like or dislike, go to</div><div class="activation-url">youtube.com/activate</div><div class="step2">and enter</div><div class="activation-code">{{activationCode}}</div>|Tells user that, in order to like or dislike a video, they must first sign in to the application by using a device to navigate to the given URL and enter the given code on the resulting site.]]      </div>      <div class="subscribe-message connection-steps">        [[<div class="step1">To subscribe, go to</div><div class="activation-url">youtube.com/activate</div><div class="step2">and enter</div><div class="activation-code">{{activationCode}}</div>|Tells user that, in order to sign in to the application, they should use a device to navigate to the given URL and enter the given code on the resulting site.]]      </div>      <div class="upload-message connection-steps">        [[<div class="step1">To upload a video, go to</div><div class="activation-url">youtube.com/activate</div><div class="step2">and enter</div><div class="activation-code">{{activationCode}}</div>|Tells user that, in order to sign in to the application, they should use a device to navigate to the given URL and enter the given code on the resulting site.]]      </div>      <div class="player-message connection-steps">        <div class="step1">{{model.subtitle}}</div>        [[<div class="step2">Go to</div><div class="activation-url">youtube.com/activate</div><div class="step2">and enter</div><div class="activation-code">{{activationCode}}</div>|Tells user to use a device to navigate to the given URL and enter the given code on the resulting site.]]      </div>      <div class="connection-error hidden">[[Sign in is temporarily unavailable.<br/><br/>Please try again later.|Error message displayed when device fails to load activation code.]]</div>    </div>  </div></div>');
            b.P(c + "/rebound/dialogs/sets_onboarding.html", '<div>  <div class="dialog-image $image" data-image-url="{{imageUrl}}"></div>  <div class="body-text">    <div class="main-title">{{model.mainTitle}}</div>    <h2>{{model.subtitle}}</h2>    <p>{{model.bodyText}}</p>  </div></div>');
            b.P(c + "/rebound/dialogs/shiyojo_warning.html", '<div id="shiyojo">  <ul>    <li>\u3053\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306fPlayStation&#174;3\u5c02\u7528\u3067\u3059\u3002</li>    <li>PlayStation&#174;3\u3092\u30d7\u30e9\u30ba\u30de\u30c6\u30ec\u30d3\u3084\u3001\u6db2\u6676\u65b9\u5f0f\u4ee5\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30c6\u30ec\u30d3\uff08\u30b9\u30af\u30ea\u30fc\u30f3\u6295\u5f71\u65b9\u5f0f\u30c6\u30ec\u30d3\uff09\u306b\u3064\u306a\u3050\u3068\u3001\u753b\u50cf\u306e\u713c\u304d\u4ed8\u304d\uff08\u6b8b\u50cf\u6620\u50cf\uff09\u304c\u8d77\u3053\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u306b\u3001\u9759\u6b62\u753b\u3092\u30c6\u30ec\u30d3\u753b\u9762\u306b\u8868\u793a\u3057\u305f\u307e\u307e\u9577\u6642\u9593\u653e\u7f6e\u3059\u308b\u3068\u3001\u713c\u304d\u4ed8\u304d\u304c\u8d77\u3053\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002</li>    <li>PlayStation&#174;3\u306e\u30b7\u30b9\u30c6\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u5e38\u306b\u6700\u65b0\u306e\u3082\u306e\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002</li>  </ul>  <div class="small-print">    "<div class="playstation-logo"></div>", "PlayStation", "<div class="ps3-logo"></div>", "PSN logo", "DUALSHOCK" and "SIXAXIS" are registered trademarks of Sony Computer Entertainment Inc.    <p>"XMB" and "\u30af\u30ed\u30b9\u30e1\u30c7\u30a3\u30a2\u30d0\u30fc" are trademarks of Sony Corporation and Sony Computer Entertainment Inc.</p>    <p>Library programs &#169;Sony Computer Entertainment Inc.</p>    "<div class="playstation-logo"></div>"&#169;1994 Sony Computer Entertainment Inc.</p>  </div></div>');
            b.P(c + "/rebound/dialogs/simple.html", "<div>{{message}}</div>");
            b.P(c + "/rebound/dialogs/system_error.html", '<div>  <div class="box">[[For more info, go to: <a class="base-url">{{displayUrl}}</a>|Prompt directing the user to a website containing more information on the error they have encountered.|704868202]]</div>  <div class="box qr-code-wrapper">[[Or scan: <br><img class="qr" x-src="{{imageUrl}}"/>|Explains alternative way of accessing help and feedback pages by scanning QR code.]]</div></div>');
            b.P(c + "/rebound/dialogs/tos.html", "<div>  <div>[[To view the Terms of Service go to:|Dialog subtitle telling user to go to the following URL to view youtube terms of service.]]</div>  <div class='url'>http://www.youtube.com/terms</div>  <div>[[To view the Privacy Policy go to:|Dialog subtitle telling user to go to the following URL to view youtube privacy policy document]]</div>  <div class='url'>http://www.youtube.com/privacy</div></div>");
            b.P(c + "/rebound/dialogs/upload_terms.html", "<div>  <div>[[By uploading you agree to<br>the youtube.com/terms|Message telling user that uploading constitutes an agreement to the terms of service availble via the URL.]]</div></div>");
            b.P(c + "/rebound/dialogs/video_overview.html", '<div>  <div class="dialog-contents">    <div class="$grid" data-model="{{videoOverviewData}}" data-catch-mouse-move="true"></div>  </div>  <div class="video-tile-container">    <div class="$videoTile" data-model="{{model.videoModel}}" data-enabled="false"></div>  </div></div>');
            b.P(c + "/rebound/dialogs/video_privacy.html", '<div>  <div class="dialog-contents">    <div class="$grid" data-model="{{model.privacyButtonGrid}}" data-catch-mouse-move="true"></div>  </div>  <div class="video-tile-container">    <div class="$videoTile" data-model="{{model.video}}"></div>  </div></div>');
            b.P(c + "/rebound/dialogs/video_upload_error.html", '<div>  <div>[[An error has occurred while uploading the video.|Error message displayed upon failure to upload a video.]]</div>  <div class="error-container">{{message}}</div></div>');
            b.P(c + "/rebound/dialogs/video_upload_status.html", '<div>  <div class="dialog-contents">    <div class="$uploadProgress" data-model="{{model.progress}}"></div>    <div>{{getMessage()}}</div>    <div class="video-url">{{getVideoUrl()}}</div>  </div>  <div class="video-tile-container">    <div class="$videoTile" data-model="{{model.video}}"></div>  </div></div>');
            b.P(c + "/rebound/dialogs/video_uploads.html", '<div>  <div class="$component error" data-is-hidden="true">[[There was an error showing available videos. Please try again later.|Message displayed when an error occurs while fetching available for upload video clips.]]</div>  <div class="$component empty" data-is-hidden="true">[[There are no available videos for upload.|Message displayed when user has no videos available for uploading.]]</div>  <div class="$sliding-highlighter" data-model="{{clipsProjection}}"></div>  <div class="$carousel" data-model="{{clipsProjection}}" data-item-name="dvrClipTile" data-catch-mouse-move="true" data-mouse-auto-scroll="false" data-rate-limit={{rateLimit}}></div></div>');
            b.P(c + "/rebound/empty.html", "<div></div>");
            b.P(c + "/rebound/engagement_indicator.html", '<div>  <div class="stop-listening">    <span class="icon"></span>    <span class="title">{{stopPhrase}}</span>  </div></div>');
            b.P(c + "/rebound/feed_icon.html", '<div>  <div class="{{iconClass}}" style="background-image:{{iconBackground}}"></div>  <h2>{{title}}</h2></div>');
            b.P(c + "/rebound/guide.html", '<div>  <div id="user-info-background">    <div class="user-info-container">      <div id="guide-user-avatar" style="background-image: url({{userAvatar}})"></div>      <div class="guide-user-name">{{userName}}</div>    </div>  </div>  <div class="guide-carousel-background"></div>  <div id="error-message">[[Sorry, the rest of this Guide isn\u2019t available right now.|An error message displayed when the guide cannot be fully displayed.]]</div></div>');
            b.P(c + "/rebound/guide_button.html", '<div>  <div class="guide-button-icon {{iconClass}}">    <div class="$image" data-image-url="{{iconUrl}}"></div>  </div>  <div class="guide-button-title">{{model.label}}</div></div>');
            b.P(c + "/rebound/horizontal_list.html", '<div>  <div class="no-content-message">    <div class="text">{{noContentMessage}}</div>  </div>  <div class="content"></div></div>');
            b.P(c + "/rebound/icon_button.html", '<div><span class="icon {{iconClass}}"></span><span>{{model.label}}</span></div>');
            b.P(c + "/rebound/keyboard.html", '<div>  <div id="transliteration-container">    <div id="transliteration" class="$transliteration" data-lang-code-pair="{{langCodePair}}"></div>  </div>  <div id="keyboard-grid" class="$grid" data-model="{{model.layout.rows}}" data-catch-row-mouse-move="{{catchMouseMove}}" data-loop-rows="true" data-rate-limit="{{gridRateLimit}}"></div>  <div id="letter-suggest" class="$list" data-is-vertical="true" data-catch-mouse-move="true" data-model="{{letterSuggestions}}"></div></div>');
            b.P(c + "/rebound/label_button.html", "<div><span>{{model.label}}</span></div>");
            b.P(c + "/rebound/legend.html", '<div>  <div class="$legendItem more" data-legend-type="more" data-icon-class="icon-player-more"></div>  <div class="$legendItem back" data-legend-type="back"></div>  <div class="$legendItem exit" data-legend-type="exit"></div>  <div class="$legendItem reversed-back" data-legend-type="back"></div>  <div class="$legendItem search" data-legend-type="search"></div>  <div class="$legendItem space" data-legend-type="space"></div>  <div class="$legendItem home" data-legend-type="home"></div>  <div class="$legendItem modify" data-legend-type="modify"></div>  <div class="$legendItem delete" data-legend-type="delete"></div>  <div class="$legendItem guide" data-legend-type="guide"></div>  <div class="$legendItem close-guide" data-legend-type="close-guide"></div></div>');
            b.P(c + "/rebound/legend_item.html", '<div>  <span class="icon {{iconClass}}"></span>  <span class="title">{{label}}</span></div>');
            b.P(c + "/rebound/pointer_overlay.html", '<div>  <div class="nav-arrow up-arrow"></div>  <div class="nav-arrow down-arrow"></div>  <div class="nav-arrow left-arrow"></div>  <div class="nav-arrow right-arrow"></div></div>');
            b.P(c + "/rebound/post_play.html", '<div>  <div id="post-play-list" class="$horizontalList"></div></div>');
            b.P(c + "/rebound/privacy_button.html", '<div class="button">  <div class="name">{{model.stateName}}</div>  <div class="description">{{model.description}}</div>  <div class="checkbox"></div></div>');
            b.P(c + "/rebound/progress_bar.html", '<div>  <div class="progress-bar-line">    <div class="progress-bar-background"></div>    <div class="progress-bar-loaded" style="width:{{percentageLoaded}}"></div>    <div class="progress-bar-played" style="width:{{percentagePlayed}}"></div>  </div>  <div class="progress-bar-playhead">    <div class="progress-bar-disc" style="left:{{percentagePlayed}}"></div>  </div></div>');
            b.P(c + "/rebound/search.html", '<div>  <div class="controls">    <div id="text-box-background">      <div id="search-text-box">        <span class="icon-search"></span>        <input id="search-input" autocomplete="off" class="$component" title="search" placeholder="[[Search...|Placeholder indicating that a user can start searching within a text box]]"/>        <span id="search-query" class="hidden">{{displayedQuery}}</span>      </div>    </div>    <div id="search-text-entry">      <div id="search-suggestions" class="$suggestions"></div>      <div id="search-keyboard" class="$keyboard"></div>    </div>  </div>  <div class="search-hint">    [[Voice search is not supported.|Message that tells Xbox One users that voice doesn\'t work for search.|1391152342]]  </div>  <div class="search-pairing">    <div class="search-message">      <div class="title">[[Search Faster|Search pairing hint title]]</div>      [[Find videos with your mobile device or laptop and watch them here.|Search pairing hint that you can search on the remote and play on the TV screen.]]    </div>    <div id="pairing" class="$pairingDialog" data-context="search" data-limit-pairing-code-refreshes="false" data-show-dial-upsell="{{shouldShowDialUpsell}}"></div>  </div>  <div id="results-placeholder"></div></div>');
            b.P(c + "/rebound/search_suggestion.html", '<li data-can-be-focus-leaf="true">{{model.label}}</li>');
            b.P(c + "/rebound/settings.html", '<div>  <div class="settings-shelf">    <div class="settings-title">{{title}}</div>    <div id="settings-items" class="$horizontalList"></div>  </div></div>');
            b.P(c + "/rebound/shelf.html", '<div>  <div class="title">    <span>{{title}}</span>    <span class="annotation">{{titleAnnotation}}</span>  </div>  <div id="content-container"></div></div>');
            b.P(c + "/rebound/shelf_list.html",
                '<div>  <div class="title">{{title}}</div>  <div class="no-content-message">    <div class="text">{{noContentMessage}}</div>  </div></div>');
            b.P(c + "/rebound/skip_ad_button.html", '<div class="button">  <div class="label">    <span>{{model.label}}</span>    <span class="skip-symbol icon-player-next"></span>  </div></div>');
            b.P(c + "/rebound/sliding_highlighter.html", '<div>  <div class="select">{{selectText}}</div></div>');
            b.P(c + "/rebound/snap_controls.html", '<div>  <div id="unsupported-mode" class="hidden">[[Go fullscreen to find a YouTube video or playlist|Message that is displayed to user to switch the app into fullscreen mode.]]</div>  <div id="snap-progress-bar" class="$progress-bar"></div>  <div id="snap-title-tray" class="$watch-title-tray" data-model="{{currentVideo}}" data-is-hidden="{{getTitleTrayHidden()}}" data-auto-hide="false"></div>  <div class="up-next">    <div class="title">[[Up Next:|Message above next video to be played.]]</div>    <div class="video-thumb $image" data-image-url="{{nextVideo.imageUrl}}"></div>    <div class="video-title">{{nextVideo.title}}</div>  </div>  <div id="snap-buttons" class="$list" data-model="{{buttonCollection}}" data-catch-mouse-move="true"></div></div>');
            b.P(c + "/rebound/subtitled_button.html", '<div class="button">  <span>{{model.label}}</span>  <span class="subtitle">{{model.subtitle}}</span></div>');
            b.P(c + "/rebound/suggestions.html", '<div>  <ul id="suggest-list" class="$list" data-model="{{model.suggestions}}" data-catch-mouse-move="{{catchMouseMove}}" data-scroll-on-focus="true"></ul></div>');
            b.P(c + "/rebound/super_scroller.html", '<div>  <div class="$list" data-model="{{projection}}" data-item-name="feed-icon">  </div></div>');
            b.P(c + "/rebound/system_error.html",
                '<div id="error-markup">  <div id="dialog" class="$dialog"></div></div>');
            b.P(c + "/rebound/tiles/action.html", '<div class="item action-tile">  <div class="content {{model.tileClass}}">    <div class="title">{{model.title}}</div>    <div class="large-action-icon {{model.iconClass}}"></div>    <div class="description">{{model.description}}</div>  </div></div>');
            b.P(c + "/rebound/tiles/channel_tile.html", '<div>  <div class="channel-top">    <div class="video-thumb $image" data-image-url="{{model.imageUrl}}"></div>    <div class="voice-command">{{getSpeechPhrase()}}</div>    <div class="decoration {{decorationClass}}">      <div class="badge">[[Channel|A label to indicate that this is a channel tile.]]</div>    </div>  </div>  <div class="channel-bottom">    <div class="title">{{model.title}}</div>    <div class="details">      <div class="subscribers">{{model.subscribers}}</div>    </div>  </div></div>');
            b.P(c + "/rebound/tiles/dvr_clip.html", '<div class="item video-tile">  <div class="tile-top">    <div class="video-thumb preloaded"></div>    <div class="voice-command">{{getSpeechPhrase()}}</div>    <div class="decoration">      <div class="duration">{{getFormattedDuration()}}</div>    </div>  </div>  <div class="tile-bottom">    <div class="title">{{clipTitle}}</div>    <div class="details">      <div class="recorded">[[Published on <span class="updated">{{getFormattedRecordedDate()}}</span>|Label that represents the date when a video was uploaded.]]</div>    </div>  </div></div>');
            b.P(c + "/rebound/tiles/kenko.html", '<div class="item action-tile">  <div class="content">    <div class="title">\u5065\u5eb7\u306e\u305f\u3081\u306e<br>\u3054\u6ce8\u610f</div>  </div></div>');
            b.P(c + "/rebound/tiles/loading_tile.html", '<div class="item video-tile loading-tile">  <div class="tile-top">    <div class="video-thumb preloaded"></div>  </div>  <div class="tile-bottom">    <div class="title">[[Loading...|Tooltip displayed when some data is loading.]]</div>  </div></div>');
            b.P(c + "/rebound/tiles/post_play_tile.html",
                '<div>  <div class="post-play-title">    <span class="next-up-title">[[Next up in <span class="row-title">{{getRowTitle()}}</span>|Informs the user of the next video that will play in this playlist. This is followed by the title of the playlist.]]</span>    <span class="default-title">[[You may also like...|Label informing the user that they may enjoy these videos.]]</span>  </div>  <div class="$videoTile" data-model="{{model}}"></div>  <div class="post-play-countdown">{{countdown}}</div></div>');
            b.P(c + "/rebound/tiles/recent_search.html", '<div class="item">  <div class="tile-top">    <div class="video-thumb $image" data-image-url="{{model.imageUrl}}"></div>  </div>  <div class="tile-bottom">    <div class="title">{{model.title.toLowerCase()}}</div>    <div class="details">      <div class="results">[[{{model.totalResultsLocalized}} results|Displays how many different searches a user has performed.]]</div>    </div>  </div></div>');
            b.P(c + "/rebound/tiles/remote_pairing.html", '<div class="item action-tile">  <div class="content">    <div class="title {{model.getTitleClass()}}">{{model.getTitle()}}</div>    <div class="icon-settings-pair"></div>    <div class="remote-pair-text">[[Find videos on your mobile device and watch on your TV.|Tooltip explains that a user will be able to use their mobile device to find videos and watch them via the application.]]</div>  </div></div>');
            b.P(c + "/rebound/tiles/reset_pairing.html", '<div class="item action-tile">  <div class="content">    <div class="title">{{model.title}}</div>    <div class="remote-reset-phone icon-settings-phone">      <div class="remote-count">{{model.deviceCount}}</div>    </div>    <div class="remote-reset-help">[[Delete all paired devices?|Button that allows a user to disconnect mobile phones from the application.]]</div>  </div></div>');
            b.P(c + "/rebound/tiles/search.html", '<div class="item action-tile">  <div class="content search-tile">    <div class="title">[[Search|Clicking this launches the search interface.]]</div>    <div class="large-action-icon icon-search"></div>    <div class="description">[[{{model.searchCount}} recent search(es)|Displays how many search a user has performed recently.]]</div>  </div></div>');
            b.P(c + "/rebound/tiles/shiyojo.html", '<div class="item action-tile">  <div class="content">    <div class="title">\u4f7f\u7528\u4e0a\u306e<br>\u3054\u6ce8\u610f</div>  </div></div>');
            b.P(c + "/rebound/tiles/sign_out.html", '<div class="item action-tile">  <div class="content">    <div class="title display-name">{{model.getTitle()}}</div>    <div class="platform-container">      <div class="platform-user-icon" style="background-image:url({{model.channel.platformUserIcon}})"></div>      <span class="platform-user-name">{{model.channel.platformUserName}}</span>    </div>    <div class="sign-out-user-icon" style="background-image:url({{model.channel.imageUrl}})"></div>    <div class="sign-out-username">{{model.getUserName()}}</div>  </div></div>');
            b.P(c + "/rebound/tiles/togglable.html", '<div class="item action-tile">  <div class="content">    <div class="title">{{model.title}}</div>    <div class="status">      <div>{{model.getToggleStatus()}}</div>      <div class="icon {{model.getToggleClass()}}"></div>    </div>    <div class="description">{{model.description}}</div>  </div></div>');
            b.P(c + "/rebound/tiles/video_tile.html", '<div class="item">  <div class="tile-top">    <div class="video-thumb $image" data-image-url="{{model.imageUrl}}"></div>    <div class="voice-command">{{getSpeechPhrase()}}</div>    <div class="decoration">      <div class="live-badge badge hidden">{{model.liveBadgeText}}</div>      <div class="text-badge badge hidden">{{model.badgeText}}</div>      <div class="duration">{{model.durationLabel}}</div>    </div>  </div>  <div class="overlay">    <div class="count">[[<strong>{{model.videoCount}}</strong><br/>videos|A label on two lines, for how many videos are in a playlist.]]</div>    <div class="icon"></div>  </div>  <div class="tile-bottom">    <div class="title">{{model.title}}</div>    <div class="details">      <div class="by">[[by {{model.channel.displayName}}|Label identifying who uploaded the video]]</div>      <div class="views">{{model.viewCountLabel}}</div>      <div class="age">{{model.uploadedDateLabel}}</div>    </div>  </div></div>');
            b.P(c + "/rebound/toaster.html", '<div>  <ul class="$list" data-model="{{model}}"></ul></div>');
            b.P(c + "/rebound/toasts/device_toast.html", '<div class="toast">  <div class="toast-container">    <div class="toast-icon {{iconClass}}">      <div class="$image" data-image-url="{{model.userAvatarUri}}"></div>    </div>    <div class="toast-msg">{{message}}</div>  </div></div>');
            b.P(c + "/rebound/toasts/update_playlist_toast.html", '<div class="toast">  <div class="toast-container update-playlist-toast">    <div class="toast-item">      <div class="tile-top">        <div class="video-thumb $image" data-image-url="{{model.videoImageUri}}"></div>      </div>      <div class="overlay {{model.hidePlaylistOverlay}}">        <div class="video-count">{{model.videoCount}}</div>        <div class="icon icon-playlist"></div>      </div>      <div class="contrast-container">        <div class="video-title truncate">{{model.videoTitle}}</div>        <div class="wrapper">          <div class="toast-icon {{iconClass}}">            <div class="$image" data-image-url="{{model.userAvatarUri}}"></div>          </div>          <div class="toast-msg truncate {{iconClass}}">{{message}}</div>        </div>      </div>    </div>  </div></div>');
            b.P(c + "/rebound/toasts/uploads_toast.html", '<div class="toast">  <div class="toast-container">[[Want to upload your epic gaming moments to YouTube?<br/>Select <strong>My Uploads</strong> to get started.|Promotional text for Uploads feature in TV application.]]</div></div>');
            b.P(c + "/rebound/toasts/volume_toast.html", '<div class="toast">  <div class="toast-container">    <div class="toast-icon {{iconClass}}">&nbsp;</div>    <div class="toast-progress">      <div class="progress" style="width: {{model.volume}}%">&nbsp;</div>    </div>    <div class="toast-msg">{{message}}</div>  </div></div>');
            b.P(c + "/rebound/transliteration.html", '<div>  <div class="$list" data-model="{{transliterations}}">  </div></div>');
            b.P(c + "/rebound/transport_controls.html", '<div>  <div class="player-controls-widget">    <div id="player-controls" class="player-controls">      <div id="button-list" class="$list" data-model="{{buttonCollection}}" data-enable-sounds="false"></div>    </div>    <div class="player-seekbar">      <div id="progress-bar" class="$progress-bar"></div>      <div class="player-time-elapsed">{{elapsedTime}}</div>      <div class="player-time-total">{{totalTime}}</div>      <div class="live-indicator">[[Live|Label indicating that this is a live video.]]</div>    </div>  </div></div>');
            b.P(c + "/rebound/upload_progress.html", '<div>  <div class="upload-progress-value">    <span style="left: {{model.percentage}}%;">{{model.percentage}}%</span>  </div>  <div class="upload-progress-bar"><div class="completed" style="width: {{model.percentage}}%;"></div></div></div>');
            b.P(c + "/rebound/voice_footer.html", "<ul>  <li>{{model}}</li></ul>");
            b.P(c + "/rebound/watch_legacy.html", '<div>  <div id="leanback-player-container"></div>  <div id="title-tray" class="$watch-title-tray" data-model="{{getCurrentVideo()}}"></div>  <div id="eureka-player-controls-container">    <div id="eureka-player-controls"></div>  </div>  <div id="bottom-half">    <div class="$skip-ad-button" data-keep-enabled="true"></div>    <div id="transport-controls" class="$transport-controls"></div>    <div class="$advertisement-info"></div>  </div></div>');
            b.P(c + "/rebound/watch_title_tray.html", '<div class="title-card">  <div class="player-meta">    <div class="user-details hidden">      <div class="message">[[Added by {{model.user}}|The user who added the currently playing video to queue.|1934618278]]</div>      <div class="$image avatar" data-image-url="{{model.userAvatarUri}}"></div>    </div>    <div class="$image player-video-avatar" data-image-url="{{channelAvatarUrl}}"></div>    <div class="player-video-title">{{videoTitle}}</div>    <div class="player-video-details">      <div class="username">{{channelName}}</div>      <div class="set-context hidden">[[{{playlistTitle}}: {{videoIndex}} of {{videoCount}}|The playlist title and the index of the current video in the playlist.]]</div>      <div class="uploaded-date hidden">{{uploadedDate}}</div>      <div class="view-count"><span class="view-count-label">{{viewCountLabel}}</span></div>      <div id="badges" class="badges hidden">        <span class="live-badge">[[Live|Label indicating that this is a live video.]]</span>      </div>    </div>  </div></div>');
            b.P(c + "/rebound/watch_with_browse_under_watch.html", '<div>  <div id="leanback-player-container"></div>  <div id="eureka-player-controls-container">    <div id="eureka-player-controls"></div>  </div>  <div id="bottom-half">    <div class="$skip-ad-button" data-keep-enabled="true"></div>    <div id="transport-controls" class="$transport-controls"></div>    <div class="$advertisement-info"></div>  </div></div>');
            a()
        }
    };
    rq.inject = "document injector retentionReportingService audioConfigReporting crashReportingService environmentModel bountyService steelDialService localStorage shutdownService remoteService commandCenterInitializer playerFacade authService htmlPath rootDispatcher reportingService localeModel steelReportingService systemRequirements".split(" ");

    function sq() {
        this.g = 0;
        this.j = this.l = -1;
        this.k = this.h = this.i = !1;
        this.p = {}
    }
    d = sq.prototype;
    d.bB = function() {
        this.g = 0;
        this.j = this.l = -1;
        this.h = this.i = !1;
        this.p = {}
    };
    d.fR = function() {
        this.g += 1
    };
    d.bG = function(a) {
        this.l = a
    };
    d.VI = function(a) {
        this.j = a
    };
    d.DK = function(a) {
        this.i = a
    };
    d.NF = function(a) {
        this.h = a
    };
    d.MF = function(a) {
        this.k = a
    };
    d.ft = function(a) {
        this.p[a] = !0
    };
    d.xI = function() {
        var a = {};
        a.features = sc(this.p).join(",");
        a.has_subscribe = this.k ? 1 : 0;
        a.has_trailer = this.h ? 1 : 0;
        a.heos = this.i ? 1 : 0;
        a.kpc = this.g;
        a.index = this.j;
        a.row = this.l;
        this.bB();
        return a
    };

    function tq(a) {
        I.call(this);
        this.h = a;
        this.g = new Hc(10, !0);
        this.iH()
    }
    B(tq, I);
    d = tq.prototype;
    d.im = function(a, b, c) {
        this.g.ah(a, this.It(a, b ? b.videoId : null, c, b && b.videoCount ? b.imageUrl : null));
        a = this.g.map(function(a, b) {
            return this.It(b, a.videoId, a.totalResults, a.imageUrl)
        }, this);
        this.h.Oa("recent-searches", a);
        this.B("search-history-added")
    };
    d.load = function() {
        return this.g.Xa()
    };
    d.eB = function() {
        return this.g.vb()
    };
    d.clear = function() {
        this.g.clear();
        this.h.remove("recent-searches");
        this.h.flush();
        this.B("search-history-cleared")
    };
    d.It = function(a, b, c, e) {
        return {
            query: a,
            videoId: b,
            totalResults: c,
            imageUrl: e
        }
    };
    d.iH = function() {
        var a = this.h.get("recent-searches") || [];
        Oa(a, function(a) {
            this.g.ah(a.query, a)
        }, this)
    };
    tq.inject = ["localStorage"];

    function uq(a, b, c, e, f, g) {
        I.call(this);
        this.V = a;
        this.g = b;
        this.k = c;
        this.i = e;
        this.p = f;
        this.j = g;
        this.h = {
            auto: y(this.WA, this),
            console: y(this.$A, this),
            exp: y(this.OA, this),
            f5: y(this.SA, this),
            hl: y(this.VA, this),
            http: y(this.TA, this),
            keys: y(this.QA, this),
            lbl: y(this.PA, this),
            lclr: y(this.NA, this),
            ld: y(this.MA, this),
            llock: y(this.ZA, this),
            mcvpanta: y(this.LA, this),
            mdiag: y(this.RA, this),
            rc: y(this.XA, this),
            stagegdata: y(this.aB, this),
            wr: y(this.YA, this)
        };
        this.l = ["mcvpanta", "rc", "wr"]
    }
    B(uq, I);
    var vq = /[-_]/,
        wq = /^[a-z]+$/,
        xq = /^[a-f0-9]{8}$/,
        yq = /^[a-z]+$/;
    d = uq.prototype;
    d.Zl = function() {
        return !!this.g.U
    };
    d.TB = function(a) {
        if (a && " " == a[a.length - 1]) {
            var b = a.toLowerCase().split(" "),
                c = b[0],
                b = b.slice(1, b.length - 1);
            if (c in this.h && (this.Zl() || -1 < this.l.indexOf(c))) return (c = this.h[c](b)) && this.k.im(a, null, 0), c
        }
        return !1
    };
    d.LA = function() {
        var a = this.Zl();
        this.g.U = !0;
        this.g.Ea = !0;
        this.B("state:changed");
        return a !== this.Zl()
    };
    d.SA = function() {
        this.V.location.hash = "";
        this.V.location.reload(!0);
        return !0
    };
    d.VA = function(a) {
        a = a[0];
        if (!a) return !1;
        a = a.replace(vq, "");
        if (!wq.test(a)) return !1;
        3 < a.length && (a = a.substr(0, 2) + "_" + a.substr(2).toUpperCase());
        this.Wh(Ve("/tv", {
            hl: a
        }));
        return !0
    };
    d.TA = function() {
        this.Wh("http://www.youtube.com/tv");
        return !0
    };
    d.QA = function() {
        this.Wh("https://kcdsfrdvcs.appspot.com");
        return !0
    };
    d.PA = function(a) {
        return this.vk(a, "label", xq)
    };
    d.MA = function(a) {
        return this.vk(a, "loader", yq)
    };
    d.RA = function() {
        bg(this.i + "/modules/media-diagnostics.js");
        return !0
    };
    d.aB = function() {
        return this.g.useStageGdata = !0
    };
    d.Wh = function(a) {
        this.V.location.href = a
    };
    d.OA = function(a) {
        var b = 0 < a.length && "" === a.pop() && a;
        return s(b) && !Ra(b, isNaN) ? (a = Ve("/tv", {
            env_forcedExperiments: a.join(",")
        }), this.Wh(a), !0) : !1
    };
    d.ZA = function(a) {
        return 1 == a.length && (a = a[0], xq.test(a)) ? (this.j.Oa("sticky-label", a), !0) : !1
    };
    d.NA = function() {
        this.j.remove("sticky-label");
        return !0
    };
    d.XA = function(a) {
        return this.vk(a, "rc_code", xq)
    };
    d.YA = function(a) {
        return this.vk(a, "wr_code", xq)
    };
    d.vk = function(a, b, c) {
        return 1 == a.length && (a = a[0], c.test(a)) ? (c = {}, c[b] = a, b = Ve("/tv", c), this.Wh(b), !0) : !1
    };
    d.WA = function(a) {
        var b = {
            b: "Browse",
            bw: "BrowseWatch",
            bf: "BrowseFL",
            bwf: "BrowseWatchFL"
        }[a[0]];
        return b ? (bg(this.i + "/modules/automation.js").Sd(function() {
            p("yt.tv.modules.automation.run")(b)
        }), !0) : !1
    };
    d.$A = function() {
        this.p.B("request-debug-console")
    };
    uq.inject = "window environmentModel searchHistoryService applicationPath rootDispatcher localStorage".split(" ");

    function zq(a, b, c, e) {
        I.call(this);
        this.o = a;
        this.h = b;
        this.w = c;
        this.na = e;
        this.F = this.J = 0;
        this.W = "SboVhoG9s0rNafixCSGGKXAT";
        this.O = [];
        this.L = null;
        this.U = 0;
        this.j = !!this.xg();
        this.l = !1;
        this.A = 0;
        this.g = null;
        this.i = -1
    }
    B(zq, We);
    d = zq.prototype;
    d.vf = function(a) {
        a(!!this.xg(), this.j)
    };
    d.Cb = function(a, b) {
        b && this.uv();
        var c = this.xg();
        if (!c) return a(null), q;
        var e = this.hn();
        if (e) return a(e), q;
        a = y(a, null);
        this.g ? this.g.push(a) : (this.g = [a], this.qv(c));
        return y(this.qw, this, a)
    };
    d.Ab = function() {
        return this.j
    };
    d.ac = function(a) {
        this.bo();
        this.Fy();
        this.XR();
        this.ho();
        this.sy(!1, a);
        this.A = 0
    };
    d.bo = function() {
        this.h.clearTimeout(this.J);
        this.h.clearTimeout(this.F)
    };
    d.$C = function(a) {
        a = a || 15;
        this.h.clearTimeout(this.F);
        this.F = this.h.setTimeout(y(function() {
            this.bo()
        }, this), 1E3 * a)
    };
    d.qv = function(a) {
        a = {
            client_id: this.kk(),
            client_secret: this.Oo(),
            refresh_token: a,
            grant_type: "refresh_token"
        };
        this.o.fe("/o/oauth2/token", null, a, y(this.dh, this), y(this.zj, this))
    };
    d.dh = function(a) {
        this.l && (this.l = !1, this.A++);
        var b = a.access_token;
        a = Math.round(.9 * a.expires_in);
        this.pJ(b, a);
        this.tv();
        this.i = this.h.setTimeout(y(this.Ov, this), 1E3 * a);
        this.Hr(b)
    };
    d.uv = function() {
        -1 != this.i && (this.h.clearTimeout(this.i), this.Ov())
    };
    d.tv = function() {
        -1 != this.i && (this.h.clearTimeout(this.i), this.i = -1)
    };
    d.Ov = function() {
        this.i = -1;
        this.ho();
        this.B("oauth-expired")
    };
    d.zj = function(a) {
        this.l = !1;
        a && 400 != a.g || this.ac(!0);
        this.Hr(null)
    };
    d.Hr = function(a) {
        if (this.g) {
            var b = this.g;
            this.g = null;
            for (var c = 0, e = b.length; c < e; c++) b[c](a)
        }
    };
    d.cI = function(a, b, c) {
        this.bo();
        var e = {
                client_id: this.kk(),
                scope: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content"
            },
            f = y(function(a) {
                b(!!a);
                this.Po()
            }, this),
            g = this.o.fe("/o/oauth2/device/code", null, e, y(function(b) {
                this.rR(b, a, f)
            }, this), y(function() {
                c();
                this.Po()
            }, this));
        return y(function() {
            g();
            this.Po()
        }, this)
    };
    d.Po = function() {
        this.B("authentication-complete", this.j)
    };
    d.wo = function(a) {
        this.G(a) && (a = this.xg()) && !this.l && (5 <= this.A ? this.ac(!0) : (this.l = !0, this.qv(a)))
    };
    d.zx = function() {
        this.A = 0
    };
    d.rR = function(a, b, c) {
        this.Yt(a.device_code, 1E3 * a.interval, c);
        b(a.user_code, .9 * Number(a.expires_in))
    };
    d.Yt = function(a, b, c) {
        var e = {
                client_id: this.kk(),
                client_secret: this.Oo(),
                code: a,
                grant_type: "http://oauth.net/grant_type/device/1.0"
            },
            f = y(function(e) {
                this.sR(e, a, b, c)
            }, this);
        this.o.fe("/o/oauth2/token", null, e, f)
    };
    d.sR = function(a, b, c, e) {
        var f = a.error,
            g = "slow_down" == f,
            k = a.refresh_token;
        "authorization_pending" == f || g ? (g && (c *= 2), this.J = this.h.setTimeout(y(function() {
            this.Yt(b, c, e)
        }, this), c)) : k ? (this.Zt(k), this.g = [e], this.dh(a)) : e(null)
    };
    d.Zt = function(a) {
        this.w.Oa("tv-refresh-token", a, 15768E3);
        this.w.flush()
    };
    d.xg = function() {
        return this.w.get("tv-refresh-token", 15768E3)
    };
    d.XR = function() {
        this.w.remove("tv-refresh-token");
        this.w.flush()
    };
    d.Fy = function() {
        var a = this.xg();
        a && this.o.fe("/o/oauth2/revoke", null, {
            token: a
        })
    };
    d.pJ = function(a, b) {
        this.L = a;
        this.U = A() + 1E3 * b;
        this.sy(!0)
    };
    d.hn = function() {
        if (this.L && this.U > A()) return this.L;
        this.ho();
        return ""
    };
    d.ho = function() {
        this.L = null;
        this.U = 0
    };
    d.sy = function(a, b) {
        var c = this.j;
        this.j = a;
        this.B("login-state-changed", a, c, b || !1)
    };
    d.Oo = function() {
        return "SboVhoG9s0rNafixCSGGKXAT"
    };
    d.kk = function() {
        return "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com"
    };
    d.M = function() {
        this.tv();
        zq.u.M.call(this)
    };
    d.qw = function(a) {
        this.g && (a = this.g.indexOf(a), 0 <= a && this.g.splice(a, 1))
    };
    zq.inject = ["ytHttp", "timeService", "localStorage", "environmentModel"];

    function Aq(a, b, c) {
        this.p = a;
        this.h = b;
        this.k = c;
        this.i = [];
        this.g = (a = this.h.get("device-retention-permission", 31536E4)) ? a.enabled : !0;
        this.j = 0;
        this.o = "private_data";
        this.l = new Bq(this)
    }

    function Bq(a) {
        I.call(this);
        this.g = a
    }
    B(Bq, I);
    Bq.prototype.get = function() {
        return this.g.g
    };
    Bq.prototype.h = function(a) {
        this.g.vL(!!a)
    };
    d = Aq.prototype;
    d.o4 = function() {
        return this.g
    };
    d.AC = function() {
        return this.l
    };
    d.vL = function(a) {
        var b = this.g !== a;
        this.g = a;
        this.h.Oa("device-retention-permission", {
            enabled: a
        }, 31536E4);
        this.nC();
        this.j && this.k.clearTimeout(this.j);
        this.j = this.k.setTimeout(y(this.h.flush, this.h), 1E3);
        b && this.l.B("value:changed", this.g, !this.g)
    };
    d.VB = function(a) {
        this.i.push(a)
    };
    d.nC = function() {
        this.h.remove("private_data");
        for (var a = 0, b = this.i.length; a < b; ++a) this.i[a]()
    };
    d.xr = function(a, b) {
        this.g && this.xL(a, b)
    };
    d.nv = function(a) {
        var b = this.h.get("private_data", 31536E3);
        return b ? b[a] : null
    };
    d.xL = function(a, b) {
        var c = this.h.get("private_data") || {};
        c[a] = b;
        this.h.Oa("private_data", c, 31536E3)
    };
    d.ZO = function(a, b, c, e) {
        this.g ? e ? this.p.dj(a, b, c) : this.p.get(a, b, c) : c && c()
    };
    Aq.inject = ["ytHttp", "localStorage", "timeService"];

    function Cq(a, b, c, e, f) {
        Z.call(this, c, e, "h5_exceptions_sw");
        this.j = a;
        this.V = b;
        this.l = f;
        this.h = {};
        sj(y(this.UK, this))
    }
    B(Cq, Z);
    d = Cq.prototype;
    d.oo = function() {
        return this.i.wp && Cq.u.oo.call(this) || this.i.U
    };
    d.UK = function(a) {
        this.wV(a.error, a)
    };
    d.wV = function(a, b) {
        var c = this.dP(a),
            e = b ? b.aP : "",
            f = tj(b || a),
            g = f.message;
        console.error(c ? c : g);
        this.h[g] || (this.eP(f.name, g, f.fileName, f.lineNumber, e, c), this.h[g] = !0)
    };
    d.dP = function(a) {
        return a ? a.stacktrace || a.stack || a.name + "\n" + a.message : ""
    };
    d.eP = function(a, b, c, e, f, g) {
        var k = {
                a: "logerror"
            },
            m = this.j.get("watchModel");
        k.type = a;
        k.msg = b;
        k.vid = m.currentVideo ? m.currentVideo.videoId : "";
        k.screen = this.VE();
        k.t = "jserror";
        k.file = c;
        k.line = e;
        k.col = f;
        k.url = this.V.location.href;
        k.label = this.i.pg;
        a = Se(k);
        a = 2047 - Ve("/gen_204", a).length + 26;
        g = encodeURIComponent(g);
        g = g.substr(0, a);
        a = g.lastIndexOf("%");
        2 >= g.length - a && (g = g.substr(0, a));
        k.stack = decodeURIComponent(g);
        this.g("/gen_204", k)
    };
    d.VE = function() {
        var a = this.j.get("router").Bg(),
            b = a.Pb();
        return (a = a.Qd().get("mode", "")) ? b + ":" + a : b
    };
    Cq.inject = ["injector", "window", "environmentModel", "privateDataService", "activityReportingService"];

    function Dq(a, b, c) {
        Z.call(this, a, b);
        this.h = {};
        c.C("external-route-change", y(this.l, this))
    }
    B(Dq, Z);
    Dq.prototype.p = function(a, b) {
        var c = Eq,
            e = {
                a: "tv_fragment"
            };
        a && (e[c.nx] = a);
        b.hb("launch") && (e[c.Yj] = b.hb("launch"));
        b.hb("v") && (e[c.VS] = b.hb("v"));
        b.hb("c") && (e[c.Sy] = b.hb("c"));
        b.hb("list") && (e[c.PS] = b.hb("list"));
        b.hb("q") && (e[c.SS] = b.hb("q"));
        b.hb("t") && (e[c.US] = b.hb("t"));
        b.hb("row") && (e[c.px] = b.hb("row"));
        b.hb("dialog") && (e[c.ox] = b.hb("dialog"));
        b.hb("pairingCode") && (e[c.QS] = 1);
        b.hb("reversePairingCode") && (e[c.TS] = 1);
        b.hb("promo") && (e[c.RS] = b.hb("promo"), e[c.Yj] || (e[c.Yj] = "promo"));
        return e
    };
    Dq.prototype.l = function(a) {
        var b = Eq,
            c = a.g.Pb();
        switch (c) {
            case "start":
                c = b.LD;
                break;
            case "suspend":
                c = b.MD;
                break;
            case "resume":
                c = b.KD;
                break;
            case "play":
                c = b.PLAY;
                break;
            default:
                c = ""
        }
        a = this.p(c, a.g);
        this.j(a) && (this.g("/gen_204", a), this.h = a)
    };
    Dq.prototype.j = function(a) {
        for (var b = Eq, b = [b.nx, b.Yj, b.ox, b.px], c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            if (a[f] !== this.h[f]) return !0
        }
        return !1
    };
    var Eq = {
        Sy: "channel",
        nx: "cmd",
        ox: "d",
        Yj: "la",
        PS: "l",
        QS: "pc",
        PAUSE: "pa",
        PLAY: "pl",
        n1: "pr",
        RS: "promo",
        SS: "q",
        KD: "re",
        TS: "rpc",
        px: "r",
        LD: "st",
        MD: "su",
        US: "t",
        VS: "v"
    };
    Dq.inject = ["environmentModel", "privateDataService", "router"];

    function Fq(a) {
        F.call(this);
        this.i = a;
        this.g = {};
        this.h = null
    }
    B(Fq, F);
    d = Fq.prototype;
    d.M = function() {
        null !== this.h && (this.i.clearTimeout(this.h), this.h = null);
        this.g = {};
        Fq.u.M.call(this)
    };
    d.vO = function(a, b) {
        if (!a) return b(a), q;
        var c = this.g[a];
        c || (c = new Image, c.onload = y(this.ZH, this, a), c.src = "", c.src = a, c = {
            j: c,
            ov: !1,
            Xg: []
        }, this.g[a] = c);
        var e = {
            on: b
        };
        c.Xg.push(e);
        c.ov && (e.on = q, b(a));
        return y(this.$H, this, a, e)
    };
    d.$H = function(a, b) {
        var c = this.g[a];
        c && (Ua(c.Xg, b), 0 == c.Xg.length && null === this.h && (this.h = this.i.setTimeout(y(this.jE, this), 0)))
    };
    d.ZH = function(a) {
        var b = this.g[a];
        if (b) {
            b.ov = !0;
            for (var b = b.Xg, c = 0, e = b.length; c < e; ++c) {
                var f = b[c],
                    g = f.on;
                f.on = q;
                g(a)
            }
        }
    };
    d.jE = function() {
        this.h = null;
        var a = [],
            b;
        for (b in this.g) 0 == this.g[b].Xg.length && a.push(b);
        for (; 0 < a.length;) delete this.g[a.pop()]
    };
    Fq.inject = ["timeService"];

    function Gq(a, b) {
        this.l = a;
        this.p = b;
        this.g = null
    }
    Gq.prototype.load = function(a, b) {
        var c = y(function(a) {
                this.j(a);
                b()
            }, this),
            e = this.l + a.replace(/(.*)/, "/locale/messages-$1.json");
        this.p.get(e, null, y(c, this), y(fc(c), this))
    };
    Gq.prototype.h = function(a, b, c) {
        var e = a;
        vc(this.g) || (b = this.i(a, b), c && a == this.g[b] && this.g[c] ? e = this.g[c] : this.g[b] && (e = this.g[b]));
        return e
    };
    Gq.prototype.j = function(a) {
        this.g = a || {}
    };
    Gq.prototype.i = function(a, b) {
        var c = String(a + b).toLowerCase(),
            c = c.replace(/\n|\r/g, ""),
            e = 0,
            f, g;
        for (f = 0; f < c.length; ++f) g = c.charCodeAt(f), e = (e << 5) - e + g, e &= -2147483649;
        return String(e)
    };
    Gq.inject = ["applicationPath", "ytHttp"];

    function Hq(a, b, c, e) {
        this.p = c;
        this.j = a;
        this.l = b;
        this.V = e;
        this.g = -1;
        this.i = c.Vp;
        this.h = 3
    }
    d = Hq.prototype;
    d.Ex = function() {
        this.i && -1 !== this.g && (this.l.clearTimeout(this.g), this.g = -1, this.h = 3)
    };
    d.ks = function(a) {
        this.i && 401 !== a && 402 !== a && 403 !== a && (--this.h, this.Gq() || -1 !== this.g || (this.g = this.l.setTimeout(y(this.aD, this), 1E3)))
    };
    d.Gq = function() {
        return !this.i || 0 < this.h
    };
    d.aD = function() {
        var a, b;
        this.p.J ? (a = y(this.kO, this), b = "[[Close|Text on button that closes the app.]]") : (a = y(this.lO, this), b = "[[Try again.|After an error, asking the user to try loading the appplication again.|1490451696]]");
        this.j.B("request-server-unavailable", b, a)
    };
    d.kO = function() {
        this.j.B("exit-application")
    };
    d.lO = function() {
        this.V.location.reload(!0)
    };
    Hq.inject = ["rootDispatcher", "timeService", "environmentModel", "window"];

    function Iq(a, b, c) {
        this.g = a;
        this.h = -1;
        this.i = b;
        this.isSupported() && c.C("state:changed", y(this.B, this))
    }
    Iq.prototype.isSupported = function() {
        return this.i.supportsAchievements && this.g.isSupported()
    };
    Iq.prototype.B = function(a) {
        switch (this.h) {
            case 0:
            case -1E3:
            case -1:
                1 == a && this.g.traceMediaPlaybackSessionStart();
                break;
            case 2:
                switch (a) {
                    case 0:
                    case -1E3:
                    case -1:
                        this.g.traceMediaPlaybackSessionResume();
                        this.g.traceMediaPlaybackSessionEnd();
                        break;
                    case 1:
                        this.g.traceMediaPlaybackSessionResume()
                }
                break;
            case 1:
                switch (a) {
                    case 0:
                    case -1E3:
                    case -1:
                        this.g.traceMediaPlaybackSessionEnd();
                        break;
                    case 2:
                        this.g.traceMediaPlaybackSessionPause()
                }
        }
        3 != a && (this.h = a)
    };
    Iq.inject = ["eventReporter", "environmentModel", "playerFacade"];

    function Jq(a) {
        this.h = a
    }
    Jq.prototype.g = function(a) {
        return (this.h.L ? "http://chart.apis.google.com" : "https://chart.googleapis.com") + "/chart?cht=qr&chs=350x350&chl=" + encodeURIComponent(a)
    };
    Jq.inject = ["environmentModel"];

    function Kq(a, b) {
        this.g = a.document.body;
        this.i = b;
        a.addEventListener("resize", y(this.h, this), !1);
        this.h()
    }
    Kq.prototype.h = function() {
        Fl(this.g, "fontSize", gb(this.g.offsetHeight / 720));
        this.i.B("resize-complete")
    };
    Kq.inject = ["window", "rootDispatcher"];

    function Lq(a, b, c, e) {
        this.l = a;
        this.h = b;
        this.j = c;
        this.p = e;
        this.g = new fp(b, "searchTile", "request-search", 0);
        this.i = new $(b, "actionTile", "request-clear-searches", "[[CLEAR|A button that clears all of a users recent searches.]]", "icon-search-clear", "[[Clear search history|Displayed as menu item subtitle. Explains to a user that this item will clear previous search history.]]", "search-tile")
    }
    Lq.prototype.load = function(a, b) {
        var c = new yi,
            e = this.l.load();
        this.g.searchCount = e.length;
        c.ia.push(this.g);
        for (var f = this.j.qa, g = 0, k = e.length; g < k; ++g) {
            var m = e[g];
            c.ia.push(new Jl(this.h, "recentSearchTile", "request-recent-search", m.query, m.totalResults, m.videoId ? this.p.ki(m.videoId, f) : m.imageUrl || ""))
        }
        0 < e.length && c.ia.push(this.i);
        b && b(c)
    };
    Lq.prototype.k = function() {
        var a = this.h.T("[[Search|Clicking this launches the search interface.]]");
        return new ih(this, a, "icon-search", "searchRow")
    };
    Lq.inject = ["searchHistoryService", "localeService", "environmentModel", "ytThumbnails"];

    function km(a, b, c, e, f, g, k, m, n, r, u, t) {
        I.call(this);
        this.w = a;
        this.J = b;
        this.j = c;
        this.i = e;
        this.G = f;
        this.U = g;
        this.h = k;
        this.A = m;
        this.I = n;
        this.O = r;
        this.F = u;
        this.p = t;
        this.L = new $(k, "actionTile", "request-login", "[[Sign in|Title of menu item which allows a user to sign in to the application with a YouTube account and see personalized content.]]", "icon-people", "[[View your subscriptions, uploads, playlists, likes and more.|Explanatory text on a menu item. Explains access to what features a user will get access when she logs in.]]");
        this.o = new gp(k, "signOutTile", "request-logout");
        this.k = this.i.supportsPairing && new dp(k, "pairTile", "request-pairing-dialog", this.j.Yh().S()) || null;
        this.l = this.i.supportsPairing && new ep(k, "resetPairingTile", "request-remote-reset-dialog", "[[DELETE|Title of the button that disconnects mobile phones from the application]]", this.j.ug().S()) || null;
        this.g = null;
        this.i.supportsPairing && this.j.C("pairing:changed", y(this.Yz, this));
        this.F.C("state:changed", y(this.B, this, "state:changed"));
        this.w.C("login-state-changed",
            y(this.B, this, "state:changed"))
    }
    B(km, I);
    d = km.prototype;
    d.FD = function() {
        this.g = [];
        if (this.i.supportsSounds) {
            var a = new hp(this.h, "toggleTile", this.U.h, "[[Sounds|Title for a tile that toggles sounds.]]", "[[Turn on or off application sounds.|Description for a tile that toggles sounds made by the YouTube TV application]]");
            this.g.push(a)
        }
        a = new $(this.h, "actionTile", "request-help-dialog", "[[Help|A button title that provides an access to the help page.]]", "icon-settings-help");
        this.g.push(a);
        a = new $(this.h, "actionTile", "request-feedback-dialog", "[[Feedback|A button title that provides an access to the feedback page.]]",
            "icon-settings-feedback");
        this.g.push(a);
        a = new hp(this.h, "toggleTile", this.G.AC(), "[[Improve YouTube|Title for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]", "[[Help improve YouTube by sending anonymous usage data.|Description for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]");
        this.g.push(a);
        a = new hp(this.h, "toggleTile", this.I, '[[Safe Search|Title for settings tile that toggles "Safe Mode".]]',
            '[[Enable or disable Safe Search.|Description for tile that toggles "Safe Mode".]]');
        this.g.push(a);
        a = new $(this.h, "actionTile", "request-clear-watch-history-dialog", "[[Clear watch history|A button that clears a users history of watched videos]]", "icon-guide-history");
        this.g.push(a);
        a = new $(this.h, "actionTile", "request-clear-storage-dialog", "[[Clear cookies|A button that clears the user cookies.]]", "icon-settings-clear-cookies");
        this.g.push(a);
        if (this.i.Ea) {
            var a = new hp(this.h, "toggleTile", this.O,
                    "Show Video Info", ""),
                b = new $(this.h, "actionTile", "request-debug-dialog", "SHOW DEBUG INFO", "warning");
            this.g.push(a);
            this.g.push(b)
        }
        this.i.Up && (a = new $(this.h, "actionTile", "request-licenses-dialog", "[[CREDITS|Button that shows credit information, giving credit to all open-source software used in building this product.]]"), this.g.push(a));
        this.A.isSupported() && this.A.showUsageWarning && (a = new $(this.h, "kenkoTile", "request-kenko-dialog"), b = new $(this.h, "shiyojoTile", "request-view-shiyojo"), this.g.push(a),
            this.g.push(b));
        a = new $(this.h, "actionTile", "request-tos-dialog", "[[Terms of Service and Privacy|Title of menu item which shows links to terms of service and privacy documents on youtube.com]]", "icon-player-info", "", "terms-tile");
        this.g.push(a)
    };
    d.Yz = function() {
        this.k.deviceCount = this.j.Yh().S();
        this.l.deviceCount = this.j.ug().S();
        this.B("state:changed")
    };
    d.Dw = function(a) {
        var b = a || q;
        this.w.Cb(y(function(a) {
            a ? this.J.get(y(this.kR, this, b)) : this.ay(b, null)
        }, this))
    };
    d.load = function(a, b) {
        this.Dw(function(a) {
            var e = new yi;
            e.ia.ma(a);
            b && b(e)
        })
    };
    d.kR = function(a, b) {
        b || (b = new te("", ""));
        this.p.isSupported() && (b.platformUserName = this.p.username, b.platformUserIcon = this.p.avatarUrl);
        this.ay(a, b)
    };
    d.ay = function(a, b) {
        this.o.channel = b;
        var c = [];
        this.i.brokenLogin || c.push(b ? this.o : this.L);
        this.i.supportsPairing && (c.push(this.k), 0 < this.l.deviceCount && c.push(this.l));
        this.g && !this.i.Ea || this.FD();
        a(c.concat(this.g))
    };
    d.PB = function() {
        var a = this.h.T("[[Sign In & Settings|Menu item title that allows a user to sign in or change settings of the application.]]");
        return new ih(this, a, "icon-player-settings", "settingsRowService")
    };
    km.inject = "authService userProfileCache remoteService environmentModel privateDataService soundService localeService systemApi safeModeFlag videoInfoVisibleFlag debugCallService accountApi".split(" ");

    function Mq() {
        I.call(this);
        this.token = null
    }
    B(Mq, We);
    d = Mq.prototype;
    d.vf = function(a) {
        var b = !!this.token;
        a(b, b)
    };
    d.Ab = function() {
        return !!this.token
    };
    d.Cb = function(a) {
        a(this.token);
        return q
    };
    d.wo = function() {};
    d.ac = function() {
        this.token = null
    };

    function Nq(a, b, c, e, f) {
        this.p = e;
        this.k = f;
        this.j = new Jc(50);
        this.h = new mp("sound-enabled", b, !0);
        b = typeof a.webkitAudioContext;
        a = typeof a.AudioContext;
        if ("function" == b || "object" == b) this.g = new webkitAudioContext;
        else if ("function" == a || "object" == a) this.g = new AudioContext;
        this.g ? c.C("play-sound", y(this.l, this)) : console.error("Sound Service was created, but the platform has no audio context!")
    }
    Nq.prototype.l = function(a) {
        if (this.h.get()) {
            a = a.detail;
            var b = this.j.get(a);
            b ? this.i(b) : (b = new pp(this.p + "/sound/" + a + (this.k.supportsMp3 ? ".mp3" : ".wav")), this.j.add(a, b), b.h(this.g, y(this.i, this, b)))
        }
    };
    Nq.prototype.i = function(a) {
        if (a.g) {
            var b = this.g.createBufferSource();
            b.buffer = a.g;
            b.connect(this.g.destination);
            b.start(0)
        }
    };
    Nq.inject = ["window", "localStorage", "rootDispatcher", "applicationPath", "environmentModel"];

    function Tq(a, b, c) {
        Z.call(this, a, b);
        this.l = c;
        this.h = !1;
        this.j = []
    }
    B(Tq, Z);
    var Uq = {
        Um: "a",
        TEXT: "t",
        lQ: "s",
        kQ: "alt"
    };
    d = Tq.prototype;
    d.AL = function() {
        var a = {};
        a[Uq.Um] = "tv_speech";
        var b = this.j.shift();
        a[Uq.TEXT] = b.text;
        a[Uq.lQ] = b.UL;
        a[Uq.kQ] = b.alternates;
        return a
    };
    d.n7 = function() {
        return this.h
    };
    d.Tw = function(a) {
        if (this.h) {
            var b;
            a && a.text && 0 < a.confidenceScore ? (b = a.text.toLowerCase(), a = (100 * a.confidenceScore).toFixed()) : (b = "", a = 0);
            this.j.push({
                text: b,
                UL: a
            });
            this.VL()
        }
    };
    d.xA = function() {
        this.h = !0
    };
    d.o7 = function() {
        this.h = !1
    };
    d.VL = function() {
        this.g("/gen_204", this.AL())
    };
    Tq.inject = ["environmentModel", "privateDataService", "timeService"];

    function Vq(a, b, c, e, f) {
        I.call(this);
        this.F = b;
        this.A = c;
        this.G = e;
        this.U = f;
        this.I = y(this.sA, this);
        this.k = -1;
        this.h = [];
        this.o = {};
        this.g = a;
        this.g.continuous = !0;
        this.g.interimResults = !0;
        this.g.onstart = y(this.dq, this, !0);
        this.g.onend = y(this.dq, this, !1);
        this.g.onspeechstart = y(this.cq, this, !0);
        this.g.onspeechend = y(this.cq, this, !1);
        this.g.onresult = y(this.rA, this);
        this.L = 0;
        this.p = this.j = this.l = this.w = !1;
        this.i = {}
    }
    B(Vq, I);
    Vq.prototype.isSupported = function() {
        return !0
    };
    d = Vq.prototype;
    d.vy = function() {
        return this.w
    };
    d.Kw = function(a, b, c, e) {
        a = {
            text: a,
            callback: b,
            pronunciation: c,
            confidence: e || .8
        };
        this.Yn(a) || this.YU(a);
        return a
    };
    d.addCommand = function(a) {
        if (!E(this.h, a)) {
            var b = a.text,
                c = this.i[b] || 0;
            this.i[b] = c + 1;
            this.h.push(a);
            if (0 == c) {
                if (b = this.Yn(a)) b.weight = a.confidence;
                this.Xm()
            }
        }
    };
    d.removeCommand = function(a) {
        if (E(this.h, a)) {
            var b = a.text;
            --this.i[b];
            Ua(this.h, a);
            if (0 == this.i[b]) {
                if (a = this.Yn(a)) a.weight = 0;
                this.Xm()
            }
        }
    };
    d.nJ = function(a) {
        return '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE grammar PUBLIC "-//W3C//DTD GRAMMAR 1.0//EN" "http://www.w3.org/TR/speech-grammar/grammar.dtd"><grammar xml:lang="' + this.U.g + '" xmlns="http://www.w3.org/2001/06/grammar" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.w3.org/2001/06/grammar http://www.w3.org/TR/speech-grammar/grammar.xsd" version="1.0">' + a.join("") + "</grammar>"
    };
    d.oJ = function(a, b, c, e) {
        return '<rule id="' + a + '"><action>' + b + "</action><phrase>" + c + "</phrase>" + ("" !== e ? "<pronunciation>" + e + "</pronunciation>" : "") + "</rule>"
    };
    d.rA = function(a) {
        if (a) {
            for (var b = String(a.interpretation), c, e = 0, f = a.results.length; e < f; ++e)
                if (a.results[e].isFinal) {
                    c = a.results[e];
                    break
                }
            b = {
                text: b,
                confidenceScore: Number(c[0].confidence),
                alternates: []
            };
            this.G.Tw(b);
            c = this.h.slice();
            e = 0;
            for (f = c.length; e < f; ++e) {
                var g = c[e];
                E(this.h, g) && g.text == a.interpretation && g.callback(g, b)
            }
        }
    };
    d.Yn = function(a) {
        return this.o[a.text] || null
    };
    d.YU = function(a) {
        var b = a.text,
            c = (this.L++).toString(16),
            e = this.g.grammars.length;
        a = this.nJ([this.oJ(c, b, a.text, a.pronunciation || "")]);
        this.g.grammars.addFromString(a, 0);
        e = this.g.grammars[e];
        return this.o[b] = e
    };
    d.cq = function(a) {
        this.w = a;
        this.F.B("engage-change", a)
    };
    d.Xm = function() {
        -1 != this.k && this.A.clearTimeout(this.k);
        this.k = this.A.setTimeout(this.I, 1E3)
    };
    d.sA = function() {
        this.j || this.p || (this.l ? (this.p = !0, this.g.stop()) : (this.j = !0, this.g.start()))
    };
    d.dq = function(a) {
        this.l = a;
        this.p = this.j = !1;
        this.l || this.Xm()
    };
    Vq.inject = ["webSpeechApi", "rootDispatcher", "timeService", "speechReporting", "localeModel"];

    function Yq(a, b, c, e, f) {
        zq.call(this, a, b, c, e);
        this.p = this.k = !1;
        this.I = f
    }
    B(Yq, zq);
    var Zq = {
        "X-STS-RelyingPartyId": "https://www.youtube.com/"
    };
    d = Yq.prototype;
    d.vf = function(a) {
        this.k ? a(this.p, this.j) : this.Xw(y(function(a, c) {
            a(!!c, !!c)
        }, this, a))
    };
    d.Cb = function(a, b) {
        b && this.uv();
        var c = this.hn();
        if (!c && this.p || !this.k) return this.Xw(a);
        a(c);
        return q
    };
    d.ac = function() {
        this.p = !1;
        Yq.u.ac.call(this)
    };
    d.Fy = function() {
        this.Tn("/api/xbox/deregister")
    };
    d.Zt = function(a) {
        this.Tn("/api/xbox/register", {
            token: a
        })
    };
    d.dh = function(a) {
        this.k = !0;
        Yq.u.dh.call(this, a);
        this.p = !!this.hn()
    };
    d.zj = function(a) {
        this.k && this.ac();
        this.k = !0;
        this.p = !1;
        Yq.u.zj.call(this, a)
    };
    d.Oo = function() {
        return this.I.getOauthClientSecret()
    };
    d.kk = function() {
        return this.I.getOauthClientId()
    };
    d.Xw = function(a) {
        a = y(a, null);
        this.g ? this.g.push(a) : (this.g = [a], this.Tn("/api/xbox/refresh", {
            style: "json"
        }, y(this.dh, this), y(this.zj, this)));
        return y(this.qw, this, a)
    };
    d.Tn = function(a, b, c, e) {
        this.o.fe(a, null, b, c, e, Zq)
    };
    Yq.inject = ["ytHttp", "timeService", "localStorage", "environmentModel", "ssoApi"];

    function $q(a, b, c) {
        this.g = new qp(a);
        this.j = a;
        this.h = b;
        this.i = c;
        (a = this.YB()) && this.ZB(Jh(a));
        this.Oq();
        this.h.VB(y(this.WB, this));
        a = y(this.XB, this);
        this.i.C("login-state-changed", a);
        this.i.vf(a)
    }
    d = $q.prototype;
    d.uI = function() {
        return !this.g.l
    };
    d.XB = function(a) {
        this.aW(a)
    };
    d.aW = function(a, b) {
        this.g.j = a ? 1 : 0;
        a && (this.g.i = b || this.g.i, this.g.p = this.g.h, this.g.h = this.j.kd, this.g.g || (this.g.g = this.g.h));
        this.Oq()
    };
    d.kI = function() {
        return {
            app_anon_id: this.g.id,
            firstactive: this.g.k,
            prevactive: this.g.l,
            firstactivegeo: this.g.o,
            loginstate: this.g.j,
            firstlogin: this.g.g,
            prevlogin: this.g.p,
            uga: this.g.i
        }
    };
    d.Oq = function() {
        this.h.xr("device-statistics", this.g.A())
    };
    d.YB = function() {
        return this.h.nv("device-statistics")
    };
    d.ZB = function(a) {
        this.g.id = a.id;
        this.g.k = a.firstActive;
        this.g.o = a.firstActiveGeo;
        this.g.h = a.recentLogin;
        this.g.g = a.firstLogin;
        this.g.p = a.prevLogin;
        this.g.i = a.uga;
        this.g.j = a.loginState ? 1 : 0;
        this.g.l = a.recentActive
    };
    d.WB = function() {
        this.g = new qp(this.j)
    };
    $q.inject = ["environmentModel", "privateDataService", "authService"];

    function ar(a, b, c) {
        Z.call(this, a, b, "steel_whitelist_sw");
        this.h = c
    }
    B(ar, Z);
    ar.prototype.initialize = function() {
        this.h.isSupported() && this.h.registerErrorCallback(y(function(a) {
            this.g("/gen_204", Ue(a))
        }, this))
    };
    ar.inject = ["environmentModel", "privateDataService", "loggingApi"];

    function br(a, b) {
        this.j = a;
        this.g = b
    }
    br.prototype.h = function() {
        var a = null,
            b = {
                a: "tv_reqs"
            };
        this.i(b) || (b.fail = "mse", a = Zb);
        this.j.g("/gen_204", b);
        return a
    };
    br.prototype.i = function(a) {
        var b = !!this.g.bm("prevent_progressive");
        a.mse_pp = b;
        a.mse_m = this.g.od;
        a.mse_w = this.g.zc;
        a.mse_dw = this.g.mediaSourceDevelopment;
        return !b || this.g.od || this.g.zc || this.g.mediaSourceDevelopment
    };
    br.inject = ["reportingService", "environmentModel"];
    !K || $c(9);
    var cr = {
        wY: "zh-hant-t-i0-array-1992",
        xY: "zh-hans-t-i0-cangjie-1982",
        yY: "zh-hant-t-i0-cangjie-1982",
        zY: "zh-hans-t-i0-cangjie-1987",
        AY: "zh-hant-t-i0-cangjie-1987",
        BY: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
        CY: "yue-hant-t-i0-und",
        DY: "zh-hant-t-i0-dayi-1988",
        FY: "zh-t-i0-pinyin",
        GY: "zh-hant-t-i0-pinyin",
        EY: "ko-t-i0-und",
        HY: "am-t-i0-und",
        IY: "ar-t-i0-und",
        JY: "be-t-i0-und",
        KY: "bn-t-i0-und",
        LY: "bg-t-i0-und",
        MY: "nl-t-i0-und",
        NY: "en-t-i0-und",
        OY: "fr-t-i0-und",
        PY: "de-t-i0-und",
        QY: "el-t-i0-und",
        RY: "gu-t-i0-und",
        SY: "he-t-i0-und",
        TY: "hi-t-i0-und",
        UY: "ja-hira-t-i0-und",
        VY: "it-t-i0-und",
        WY: "ja-t-ja-hira-i0-und",
        XY: "kn-t-i0-und",
        YY: "ml-t-i0-und",
        ZY: "mr-t-i0-und",
        $Y: "ne-t-i0-und",
        aZ: "or-t-i0-und",
        bZ: "fa-t-i0-und",
        cZ: "pl-t-i0-und",
        dZ: "pt-t-i0-und",
        eZ: "pt-br-t-i0-und",
        fZ: "pt-pt-t-i0-und",
        gZ: "pa-t-i0-und",
        hZ: "ru-t-i0-und",
        iZ: "sa-t-i0-und",
        jZ: "sr-t-i0-und",
        kZ: "si-t-i0-und",
        lZ: "es-t-i0-und",
        mZ: "ta-t-i0-und",
        nZ: "te-t-i0-und",
        oZ: "ti-t-i0-und",
        pZ: "tr-t-i0-und",
        qZ: "uk-t-i0-und",
        rZ: "ur-t-i0-und",
        sZ: "vi-t-i0-und",
        tZ: "zh-t-i0-wubi-1986",
        uZ: "zh-hant-t-i0-und",
        vZ: "zh-hant-t-i0-bopomofo",
        wZ: "sq-t-k0-und",
        xZ: "ar-t-k0-und",
        yZ: "hy-hyr-t-k0-und",
        zZ: "hy-hyt-t-k0-und",
        AZ: "eu-t-k0-und",
        BZ: "be-t-k0-und",
        CZ: "bn-t-k0-und",
        DZ: "bn-t-und-latn-k0-und",
        EZ: "bs-t-k0-und",
        FZ: "pt-br-t-k0-und",
        GZ: "bg-t-k0-und",
        HZ: "bg-t-k0-qwerty",
        IZ: "ca-t-k0-und",
        JZ: "chr-t-k0-und",
        KZ: "chr-t-und-latn-k0-und",
        LZ: "hr-t-k0-und",
        MZ: "cs-t-k0-und",
        NZ: "cs-t-k0-qwertz",
        OZ: "da-t-k0-und",
        PZ: "prs-t-k0-und",
        QZ: "hi-t-k0-qwerty",
        RZ: "nl-t-k0-und",
        SZ: "nl-t-k0-intl",
        TZ: "dz-t-k0-und",
        UZ: "en-t-k0-und",
        VZ: "en-t-k0-dvorak",
        WZ: "et-t-k0-und",
        XZ: "und-ethi-t-k0-und",
        O0: "ti-ethi-t-k0-und",
        YZ: "fi-t-k0-und",
        ZZ: "fr-t-k0-und",
        $Z: "fr-t-k0-intl",
        a_: "gl-t-k0-und",
        b_: "ka-t-k0-und",
        c_: "ka-t-k0-legacy",
        d_: "de-t-k0-und",
        e_: "de-t-k0-intl",
        f_: "el-t-k0-und",
        g_: "gu-t-k0-und",
        h_: "gu-t-und-latn-k0-qwerty",
        i_: "pa-guru-t-k0-und",
        j_: "pa-guru-t-und-latn-k0-und",
        k_: "ht-t-k0-und",
        l_: "he-t-k0-und",
        m_: "hi-t-k0-und",
        n_: "hu-t-k0-101key",
        o_: "is-t-k0-und",
        p_: "id-t-k0-und",
        q_: "iu-t-k0-nunavik",
        r_: "iu-t-k0-nunavut",
        s_: "ga-t-k0-und",
        t_: "it-t-k0-und",
        u_: "it-t-k0-intl",
        v_: "jw-t-k0-und",
        w_: "kn-t-k0-und",
        x_: "kn-t-und-latn-k0-und",
        y_: "kk-t-k0-und",
        z_: "km-t-k0-und",
        A_: "ko-t-k0-und",
        B_: "ky-cyrl-t-k0-und",
        C_: "lo-t-k0-und",
        D_: "lv-t-k0-und",
        E_: "lt-t-k0-und",
        F_: "mk-t-k0-und",
        G_: "ms-t-k0-und",
        H_: "ml-t-k0-und",
        I_: "ml-t-und-latn-k0-und",
        J_: "mt-t-k0-und",
        K_: "mi-t-k0-und",
        L_: "mr-t-k0-und",
        M_: "mn-cyrl-t-k0-und",
        N_: "srp-t-k0-und",
        O_: "my-t-k0-und",
        P_: "my-t-k0-myansan",
        Q_: "nv-t-k0-und",
        R_: "nv-t-k0-std",
        S_: "ne-t-k0-und",
        T_: "ne-t-und-latn-k0-und",
        U_: "no-t-k0-und",
        V_: "or-t-k0-und",
        W_: "or-t-und-latn-k0-und",
        X_: "latn-002-t-k0-und",
        Y_: "ps-t-k0-und",
        Z_: "fa-t-k0-und",
        $_: "pl-t-k0-und",
        a0: "pt-pt-t-k0-und",
        b0: "pt-br-t-k0-intl",
        c0: "pt-pt-t-k0-intl",
        d0: "rom-t-k0-und",
        e0: "ro-t-k0-und",
        f0: "ro-t-k0-legacy",
        g0: "ro-t-k0-extended",
        h0: "ru-t-k0-und",
        i0: "ru-t-k0-qwerty",
        j0: "ru-t-k0-aatseel",
        k0: "ru-t-k0-yazhert",
        l0: "sa-t-und-latn-k0-und",
        m0: "see-t-k0-und",
        n0: "sr-cyrl-t-k0-und",
        o0: "sr-latn-t-k0-und",
        p0: "si-t-k0-und",
        q0: "sk-t-k0-und",
        r0: "sk-t-k0-qwerty",
        s0: "sl-t-k0-und",
        t0: "ckb-t-k0-ar",
        u0: "ckb-t-k0-en",
        v0: "uzs-t-k0-und",
        w0: "es-t-k0-und",
        x0: "es-t-k0-intl",
        y0: "sw-t-k0-und",
        z0: "sv-t-k0-und",
        A0: "de-ch-t-k0-und",
        B0: "tl-t-k0-und",
        C0: "ta-t-k0-ta99",
        D0: "ta-t-k0-und",
        E0: "ta-t-k0-itrans",
        F0: "ta-t-und-latn-k0-und",
        G0: "ta-t-k0-typewriter",
        H0: "tt-t-k0-und",
        I0: "te-t-k0-und",
        J0: "te-t-und-latn-k0-und",
        K0: "th-t-k0-und",
        L0: "th-t-k0-pattajoti",
        M0: "th-t-k0-tis",
        N0: "ti-t-k0-und",
        P0: "tr-t-k0-legacy",
        Q0: "tr-t-k0-und",
        R0: "ug-t-k0-und",
        S0: "uk-t-k0-101key",
        T0: "ur-t-k0-und",
        U0: "en-us-t-k0-intl",
        V0: "uz-cyrl-t-k0-und",
        W0: "uz-cyrl-t-k0-legacy",
        X0: "uz-latn-t-k0-und",
        Y0: "vi-t-k0-und",
        Z0: "vi-t-k0-legacy",
        $0: "vi-t-k0-viqr",
        a1: "vi-t-k0-vni",
        b1: "cy-t-k0-und",
        c1: "yi-t-k0-und",
        GW: "af-t-i0-handwrit",
        HW: "sq-t-i0-handwrit",
        IW: "ar-t-i0-handwrit",
        JW: "az-t-i0-handwrit",
        KW: "eu-t-i0-handwrit",
        LW: "be-t-i0-handwrit",
        MW: "bs-t-i0-handwrit",
        NW: "bg-t-i0-handwrit",
        OW: "zh-yue-t-i0-handwrit",
        PW: "ca-t-i0-handwrit",
        QW: "ceb-t-i0-handwrit",
        RW: "zh-t-i0-handwrit",
        SW: "zh-hans-t-i0-handwrit",
        TW: "zh-hant-t-i0-handwrit",
        UW: "hr-t-i0-handwrit",
        VW: "cs-t-i0-handwrit",
        WW: "da-t-i0-handwrit",
        XW: "nl-t-i0-handwrit",
        YW: "en-t-i0-handwrit",
        ZW: "eo-t-i0-handwrit",
        $W: "et-t-i0-handwrit",
        aX: "fil-t-i0-handwrit",
        bX: "fi-t-i0-handwrit",
        cX: "fr-t-i0-handwrit",
        dX: "gl-t-i0-handwrit",
        eX: "de-t-i0-handwrit",
        fX: "el-t-i0-handwrit",
        gX: "gu-t-i0-handwrit",
        hX: "ht-t-i0-handwrit",
        iX: "he-t-i0-handwrit",
        jX: "hi-t-i0-handwrit",
        kX: "hmn-t-i0-handwrit",
        lX: "hu-t-i0-handwrit",
        mX: "is-t-i0-handwrit",
        nX: "id-t-i0-handwrit",
        oX: "ga-t-i0-handwrit",
        pX: "it-t-i0-handwrit",
        qX: "ja-t-i0-handwrit",
        rX: "jv-t-i0-handwrit",
        sX: "kn-t-i0-handwrit",
        tX: "km-t-i0-handwrit",
        uX: "ko-t-i0-handwrit",
        vX: "ku-t-i0-handwrit",
        wX: "ky-t-i0-handwrit",
        xX: "lo-t-i0-handwrit",
        yX: "la-t-i0-handwrit",
        zX: "lv-t-i0-handwrit",
        AX: "lt-t-i0-handwrit",
        BX: "mk-t-i0-handwrit",
        CX: "mg-t-i0-handwrit",
        DX: "ms-t-i0-handwrit",
        EX: "mt-t-i0-handwrit",
        FX: "mi-t-i0-handwrit",
        GX: "mr-t-i0-handwrit",
        HX: "mn-t-i0-handwrit",
        IX: "mul-t-i0-handwrit",
        JX: "ne-t-i0-handwrit",
        KX: "no-t-i0-handwrit",
        LX: "nb-t-i0-handwrit",
        MX: "nn-t-i0-handwrit",
        NX: "ny-t-i0-handwrit",
        OX: "or-t-i0-handwrit",
        PX: "fa-t-i0-handwrit",
        QX: "pl-t-i0-handwrit",
        RX: "pt-t-i0-handwrit",
        SX: "pt-br-t-i0-handwrit",
        TX: "pt-pt-t-i0-handwrit",
        UX: "pa-t-i0-handwrit",
        VX: "ro-t-i0-handwrit",
        WX: "ru-t-i0-handwrit",
        XX: "sr-t-i0-handwrit",
        YX: "sk-t-i0-handwrit",
        ZX: "sl-t-i0-handwrit",
        $X: "so-t-i0-handwrit",
        aY: "es-t-i0-handwrit",
        bY: "su-t-i0-handwrit",
        cY: "sw-t-i0-handwrit",
        dY: "sv-t-i0-handwrit",
        eY: "ta-t-i0-handwrit",
        fY: "te-t-i0-handwrit",
        gY: "th-t-i0-handwrit",
        hY: "tr-t-i0-handwrit",
        iY: "uk-t-i0-handwrit",
        jY: "ur-t-i0-handwrit",
        kY: "vi-t-i0-handwrit",
        lY: "cy-t-i0-handwrit",
        mY: "xh-t-i0-handwrit",
        nY: "zu-t-i0-handwrit",
        I1: "en-t-i0-voice",
        K1: "xkb:am:phonetic:arm",
        L1: "xkb:be::fra",
        M1: "xkb:be::ger",
        N1: "xkb:be::nld",
        O1: "xkb:bg::bul",
        P1: "xkb:bg:phonetic:bul",
        Q1: "xkb:br::por",
        R1: "xkb:by::bel",
        T1: "xkb:ca::fra",
        S1: "xkb:ca:eng:eng",
        U1: "xkb:ca:multix:fra",
        W1: "xkb:ch::ger",
        V1: "xkb:ch:fr:fra",
        X1: "xkb:cz::cze",
        Y1: "xkb:cz:qwerty:cze",
        Z1: "xkb:de::ger",
        a2: "xkb:de:neo:ger",
        b2: "xkb:dk::dan",
        c2: "xkb:ee::est",
        e2: "xkb:es::spa",
        d2: "xkb:es:cat:cat",
        f2: "xkb:fi::fin",
        g2: "xkb:fr::fra",
        h2: "xkb:gb:dvorak:eng",
        i2: "xkb:gb:extd:eng",
        j2: "xkb:ge::geo",
        k2: "xkb:gr::gre",
        l2: "xkb:hr::scr",
        m2: "xkb:hu::hun",
        n2: "xkb:ie::ga",
        o2: "xkb:il::heb",
        p2: "xkb:is::ice",
        q2: "xkb:it::ita",
        r2: "xkb:jp::jpn",
        s2: "xkb:latam::spa",
        t2: "xkb:lt::lit",
        u2: "xkb:lv:apostrophe:lav",
        v2: "xkb:mn::mon",
        w2: "xkb:mt::mlt",
        x2: "xkb:no::nob",
        y2: "xkb:pl::pol",
        z2: "xkb:pt::por",
        A2: "xkb:ro::rum",
        B2: "xkb:rs::srp",
        D2: "xkb:ru::rus",
        C2: "xkb:ru:phonetic:rus",
        E2: "xkb:se::swe",
        F2: "xkb:si::slv",
        G2: "xkb:sk::slo",
        H2: "xkb:tr::tur",
        I2: "xkb:ua::ukr",
        M2: "xkb:us::eng",
        N2: "xkb:us::fil",
        O2: "xkb:us::ind",
        S2: "xkb:us::msa",
        J2: "xkb:us:altgr-intl:eng",
        K2: "xkb:us:colemak:eng",
        L2: "xkb:us:dvorak:eng",
        P2: "xkb:us:intl:eng",
        Q2: "xkb:us:intl:nld",
        R2: "xkb:us:intl:por"
    };

    function dr(a) {
        this.g = a;
        this.type = null;
        this.j = this.i = "en";
        this.gF()
    }
    var er = "ar-t-k0-und prs-t-k0-und he-t-k0-und ps-t-k0-und fa-t-k0-und uzs-t-k0-und ug-t-k0-und ur-t-k0-und yi-t-k0-und".split(" "),
        fr = ["ar-t-i0-und", "he-t-i0-und", "fa-t-i0-und", "ur-t-i0-und"],
        gr = {
            arm: "hy",
            bel: "be",
            bul: "bg",
            cat: "ca",
            cze: "cs",
            dan: "da",
            eng: "en",
            est: "et",
            fin: "fi",
            fra: "fr",
            geo: "ka",
            ger: "de",
            gre: "el",
            heb: "he",
            hun: "hu",
            ice: "is",
            ind: "id",
            ita: "it",
            jpn: "ja",
            lav: "lv",
            lit: "lt",
            mlt: "mt",
            mon: "mn",
            msa: "ms",
            nld: "nl",
            nob: "no",
            pol: "pl",
            por: "pt",
            rum: "ro",
            rus: "ru",
            scr: "hr",
            slo: "sk",
            slv: "sl",
            spa: "es",
            srp: "sr",
            swe: "sv",
            tur: "tr",
            ukr: "uk"
        },
        hr = {};

    function ir(a) {
        if (!a) return null;
        tc(cr, a) || (a = jr(a));
        a = a.replace(/_/g, "-");
        tc(cr, a) || (a = jr(a + "-und"));
        return hr[a] ? hr[a] : tc(cr, a) ? (hr[a] = new dr(a), hr[a]) : null
    }
    var kr = "bn gu pa kn ml or sa ta te ne".split(" "),
        lr = {
            im_pinyin_zh_hans: "zh-t-i0-pinyin",
            im_pinyin_zh_hant: "zh-hant-t-i0-pinyin",
            im_t13n_ja: "ja-t-ja-hira-i0-und",
            "im_t13n_ja-Hira": "ja-hira-t-i0-und",
            im_wubi_zh_hans: "zh-t-i0-wubi-1986",
            im_zhuyin_zh_hant: "zh-hant-t-i0-und",
            vkd_bg_phone: "bg-t-k0-qwerty",
            vkd_chr_phone: "chr-t-und-latn-k0-und",
            vkd_cs_qwertz: "cs-t-k0-qwertz",
            vkd_deva_phone: "hi-t-k0-qwerty",
            vkd_en_dvorak: "en-t-k0-dvorak",
            vkd_es_es: "es-t-k0-und",
            vkd_ethi: "und-ethi-t-k0-und",
            vkd_gu_phone: "gu-t-und-latn-k0-qwerty",
            vkd_guru_inscript: "pa-guru-t-k0-und",
            vkd_guru_phone: "pa-guru-t-und-latn-k0-und",
            vkd_hu_101: "hu-t-k0-101key",
            vkd_hy_east: "hy-hyr-t-k0-und",
            vkd_hy_west: "hy-hyt-t-k0-und",
            vkd_ka_qwerty: "ka-t-k0-und",
            vkd_ka_typewriter: "ka-t-k0-legacy",
            vkd_ro_sr13392_primary: "ro-t-k0-legacy",
            vkd_ro_sr13392_secondary: "ro-t-k0-extended",
            vkd_ru_phone: "ru-t-k0-qwerty",
            vkd_ru_phone_aatseel: "ru-t-k0-aatseel",
            vkd_ru_phone_yazhert: "ru-t-k0-yazhert",
            vkd_sk_qwerty: "sk-t-k0-qwerty",
            vkd_ta_itrans: "ta-t-k0-itrans",
            vkd_ta_tamil99: "ta-t-k0-ta99",
            vkd_ta_typewriter: "ta-t-k0-typewriter",
            vkd_th_pattajoti: "th-t-k0-pattajoti",
            vkd_th_tis: "th-t-k0-tis",
            vkd_tr_f: "tr-t-k0-legacy",
            vkd_tr_q: "tr-t-k0-und",
            vkd_uk_101: "uk-t-k0-101key",
            vkd_us_intl: "fr-t-k0-intl",
            vkd_uz_cyrl_phone: "uz-cyrl-t-k0-und",
            vkd_uz_cyrl_type: "uz-cyrl-t-k0-legacy",
            vkd_vi_tcvn: "vi-t-k0-und",
            vkd_vi_telex: "vi-t-k0-legacy"
        },
        mr = yc(lr),
        nr = {
            "nl-t-k0-intl": "us_intl",
            "fr-t-k0-intl": "us_intl",
            "de-t-k0-intl": "us_intl",
            "ht-t-k0-und": "fr",
            "id-t-k0-und": "latn_002",
            "ga-t-k0-und": "latn_002",
            "it-t-k0-intl": "us_intl",
            "jw-t-k0-und": "latn_002",
            "mr-t-k0-und": "deva_phone",
            "ms-t-k0-und": "latn_002",
            "pt-br-t-k0-intl": "us_intl",
            "pt-pt-t-k0-intl": "us_intl",
            "es-t-k0-intl": "us_intl",
            "sw-t-k0-und": "latn_002",
            "tl-t-k0-und": "latn_002",
            "ti-t-k0-und": "ethi",
            "cy-t-k0-und": "latn_002"
        };

    function jr(a) {
        if (lr[a]) return lr[a];
        if ("vkd_iw" == a) return "he-t-k0-und";
        if ("im_t13n_iw" == a) return "he-t-i0-und";
        if ("tr-t-k0-lagacy" == a) return "tr-t-k0-legacy";
        var b = a.split("_"),
            c = "";
        0 == a.lastIndexOf("im_t13n", 0) ? c = b[2] + "-t-i0-und" : 0 == a.lastIndexOf("vkd_", 0) && (2 == b.length ? c = b[1] + "-t-k0-und" : E(kr, b[1]) ? c = "inscript" == b[2] ? b[1] + "-t-k0-und" : b[1] + "-t-und-latn-k0-und" : (c = b[1] + "-t-k0-" + b[2], tc(cr, c) || (c = b[1] + "-" + b[2] + "-t-k0-und")));
        return tc(cr, c) ? c : a
    }
    d = dr.prototype;
    d.eF = function() {
        if (nr[this.g]) this.h = nr[this.g];
        else if (mr[this.g]) this.h = mr[this.g].slice(4);
        else {
            var a = this.g.split("-t-"),
                b = a[0],
                a = a[1],
                b = b.replace(/-/g, "_");
            "en_us" == b && (b = "us");
            !E(kr, b) || "und-latn-k0-und" != a && "k0-und" != a ? "k0-und" == a ? this.h = b : (a = a.match(/k0-(.*)/), a[1] && (this.h = b + "_" + a[1].replace("qwerty", "phone"))) : this.h = b + ("k0-und" == a ? "_inscript" : "_phone")
        }
    };
    d.gF = function() {
        0 <= this.g.indexOf("-i0") ? (this.type = "im", ua(this.g, "-handwrit") ? this.type = "hw" : ua(this.g, "-voice") && (this.type = "vo")) : 0 <= this.g.indexOf("-k0") ? this.type = "vkd" : 0 == this.g.lastIndexOf("xkb", 0) && (this.type = "xkb");
        var a = this.g.split(/-t|-i0|-k0|:/);
        "yue-hant" == a[0] && (a[0] = "zh-Hant");
        switch (this.g) {
            case "yue-hant-t-i0-und":
                a[0] = "zh-Hant";
                break;
            case "zh-t-i0-pinyin":
            case "zh-t-i0-wubi-1986":
                a[0] = "zh-Hans"
        }
        "xkb" == this.type ? this.i = this.vm(a[a.length - 1]) : (this.i = this.vm(a[0]), a[1] && (this.j =
            this.vm(a[1])));
        "vkd" == this.type && this.eF()
    };
    d.toString = function() {
        return this.g
    };
    d.B5 = function() {
        return this.KV() ? "rtl" : "ltr"
    };
    d.KV = function() {
        return E(fr, this.g) || E(er, this.g)
    };
    d.y5 = function() {
        return "im" == this.type ? /^(zh|yue)/.test(this.g) : !1
    };
    d.vm = function(a) {
        if ("und-ethi" == a) return "et";
        a = a.split("-");
        return 2 == a.length ? 2 == a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() + a[1].slice(1) : a[0] in gr ? gr[a[0]] : a[0]
    };
    d.X5 = function() {
        var a = /^(am|ar|bn|el|gu|he|hi|kn|ml|mr|ne|or|fa|pa|ru|sa|sr|si|ta|te|ti|ur|uk|be|bg)/;
        return "im" == this.type && a.test(this.g)
    };
    d.N5 = function() {
        return "im" == this.type && /^(en|fr|de|it|es|nl|pt|tr|sv|da|fi|no)/.test(this.g)
    };
    var or, pr, qr, rr, sr, tr, ur;
    ur = tr = sr = rr = qr = pr = or = !1;
    var vr = J;
    vr && (-1 != vr.indexOf("Firefox") ? or = !0 : -1 != vr.indexOf("Camino") ? pr = !0 : -1 != vr.indexOf("iPad") ? rr = !0 : -1 != vr.indexOf("iPhone") || -1 != vr.indexOf("iPod") ? qr = !0 : -1 != vr.indexOf("Chrome") ? tr = !0 : -1 != vr.indexOf("Android") ? sr = !0 : -1 != vr.indexOf("Safari") && (ur = !0));
    var wr = or,
        xr = pr,
        yr = qr,
        zr = rr,
        Ar = sr,
        Br = tr,
        Cr = ur;

    function Dr(a) {
        return (a = a.exec(J)) ? a[1] : ""
    }(function() {
        if (wr) return Dr(/Firefox\/([0-9.]+)/);
        if (K || Qc) return Yc;
        if (Br) return Dr(/Chrome\/([0-9.]+)/);
        if (Cr) return Dr(/Version\/([0-9.]+)/);
        if (yr || zr) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(J)) return a[1] + "." + a[2]
        } else {
            if (Ar) return (a = Dr(/Android\s+([0-9.]+)/)) ? a : Dr(/Version\/([0-9.]+)/);
            if (xr) return Dr(/Camino\/([0-9.]+)/)
        }
        return ""
    })();

    function Er(a, b, c) {
        this.url = a;
        this.payload = b;
        this.data = c ? c : null
    };

    function Fr(a, b) {
        null != a && this.Ic.apply(this, arguments)
    }
    d = Fr.prototype;
    d.ke = "";
    d.n5 = function(a) {
        this.ke = "" + a
    };
    d.Ic = function(a, b, c) {
        this.ke += a;
        if (null != b)
            for (var e = 1; e < arguments.length; e++) this.ke += arguments[e];
        return this
    };
    d.clear = function() {
        this.ke = ""
    };
    d.S = function() {
        return this.ke.length
    };
    d.toString = function() {
        return this.ke
    };

    function Gr(a, b, c) {
        this.text = s(a) ? a : [a];
        this.p = !!b;
        this.k = void 0 == c ? 0 : c;
        this.status = "i"
    }
    Gr.prototype.getText = function() {
        return this.text[0]
    };
    Gr.prototype.A = function() {
        return "s" == this.status || "f" == this.status
    };

    function Hr(a, b, c, e, f) {
        Gr.call(this, a, c);
        this.h = this.i = 1;
        this.l = !!e;
        this.U = this.L = !1;
        this.j = "";
        this.w = !0;
        this.g = null;
        this.o = f ? Wa(f) : null;
        b instanceof dr ? this.g = b : (a = b.g, this.g = "zh" == a || "zh-Hans" == a ? ir("zh-t-i0-pinyin") : "zh-Hant" == a ? ir("zh-hant-t-i0-und") : "ja" == a ? ir("ja-t-ja-hira-i0-und") : ir(a + "-t-i0-und"))
    }
    B(Hr, Gr);
    d = Hr.prototype;
    d.Q5 = function() {
        return !1
    };
    d.i7 = function() {
        return this.w
    };
    d.V6 = function(a) {
        this.w = a
    };
    d.I6 = function(a) {
        this.j = a
    };
    d.s4 = function() {
        return this.h || 0
    };
    d.Gr = function(a) {
        this.h = 0 < a ? a : 0
    };
    d.jj = function() {
        return this.i || 0
    };
    d.Wq = function(a) {
        this.i = 0 < a ? a : 0
    };
    Hr.prototype.getText = function() {
        return Hr.u.getText.call(this)
    };
    d = Hr.prototype;
    d.z5 = function() {
        return [this.g.toString()]
    };
    d.f6 = function(a) {
        return !(this.g != a.g || this.l || a.l || this.p || a.p) && 5 > this.text.length + a.text.length && 0 == this.k && 0 == a.k ? (E(this.text, a.text) || Xa(this.text, a.text), a.jj() > this.jj() && this.Wq(a.jj()), !0) : !1
    };
    d.x6 = function(a) {
        return Sa(a.text, function(b) {
            return E(this.text, b) && 0 == a.k
        }, this) && this.i >= a.jj()
    };
    d.Q3 = function() {
        return this.g.g
    };
    d.Xq = function(a) {
        for (var b = new Fr, c = 0; c < a.length; c++) {
            var e = a.charAt(c);
            switch (e) {
                case ",":
                    b.Ic("%2C");
                    break;
                case "|":
                    b.Ic("%7C");
                    break;
                case "%":
                    b.Ic("%25");
                    break;
                default:
                    b.Ic(e)
            }
        }
        return b.toString()
    };
    d.aV = function(a, b) {
        var c = "";
        switch (this.g.i) {
            case "ja-Hira":
            case "ja":
                c = ",||t:1"
        }
        var e = new Fr;
        this.j && (e.Ic("|"), e.Ic(this.Xq(this.j)), e.Ic(","));
        Na(this.text, function(a, b) {
            e.Ic(this.Xq(a));
            b != this.text.length - 1 && e.Ic(",")
        }, this);
        e.Ic(c);
        c = {
            text: e.toString(),
            itc: this.g.g,
            num: this.h,
            cp: "0",
            cs: "1",
            ie: "utf-8",
            oe: "utf-8",
            app: "jsapi"
        };
        a.RB && (c.sct = a.RB);
        Ac(c, b);
        var f = this.o ? {
            feedback: Qa(this.o, function(a) {
                return a.toJSON()
            })
        } : null;
        return new Er("/request", c, f)
    };
    d.C4 = function(a) {
        var b = "";
        0 <= a && a < this.text.length && (b = this.text[a]);
        a = new Hr(b, this.g, this.p, this.l);
        a.Gr(this.h);
        a.Wq(this.i);
        return a
    };

    function Ir(a) {
        this.i = a
    }
    Ir.prototype.g = function(a, b) {
        var c = new Hr(a, b);
        c.Gr(15);
        c = c.aV({}, {});
        c.payload.app = "youtubetv";
        return bl("//inputtools.google.com" + c.url, c.payload)
    };
    Ir.prototype.h = function(a, b, c) {
        return this.i.dj(this.g(a, b), null, function(a) {
            var b = [];
            if (0 < a[1][0].length) {
                a = a[1][0][1];
                for (var g = 0, k = a.length; g < k; ++g) b.push(a[g])
            }
            c(b)
        }, null, "cb")
    };
    Ir.inject = ["ytHttp"];

    function Jr(a, b) {
        this.i = a;
        this.j = b;
        this.g = null;
        this.h = [];
        this.i.C("login-state-changed", y(this.$B, this))
    }
    d = Jr.prototype;
    d.$B = function() {
        this.g = null
    };
    d.get = function(a) {
        this.g || !this.i.Ab() ? a(this.g) : (this.h.push(a), 1 === this.h.length && this.VD())
    };
    d.VD = function() {
        this.j.ud("default", y(this.jQ, this), null, y(this.pv, this))
    };
    d.jQ = function(a) {
        this.g = a;
        this.pv()
    };
    d.pv = function() {
        var a = this.h;
        this.h = [];
        for (var b = this.g, c = 0, e = a.length; c < e; c++) a[c](b)
    };
    Jr.inject = ["authService", "userProfileService"];

    function Kr(a, b) {
        this.g = a;
        this.h = b
    }
    Kr.prototype.load = function(a, b) {
        var c = b || q,
            e = new yi;
        this.g.load({
            query: a.playlistId
        }, y(function(b) {
            e.ia.push(b.ia.Fa());
            this.h.load({
                query: a.videoId
            }, y(function(a) {
                e.ia.push(a.ia.Fa());
                c(e)
            }, this), y(function() {
                c(e)
            }, this))
        }, this), ma(c, e))
    };
    Kr.inject = ["playlistService", "relatedVideosService"];

    function mm(a, b, c, e, f, g, k, m, n, r, u, t, x, G) {
        wl.call(this, a, b, c, e, f, g, k, m, r, u, t, x, G);
        this.i = n
    }
    B(mm, wl);
    mm.prototype.ud = function(a, b, c, e, f) {
        f || (f = new yi, f.serviceQuery = a);
        f.Mb = this.i;
        return mm.u.ud.call(this, a, b, c, e, f)
    };
    mm.prototype.jU = function() {
        return this.i
    };
    mm.inject = "id path csiService ytHttp environmentModel authService cacheService backendErrorReporting listType localeModel networkStatus parser opt_paramKey opt_params".split(" ");

    function Lr(a, b, c, e, f) {
        I.call(this);
        this.j = {};
        this.k = {};
        this.h = {};
        this.i = {};
        this.L = f;
        this.U = e;
        this.g = a;
        this.o = c;
        this.F = y(this.yA, this);
        this.w = b;
        this.l = 0;
        this.p = !1;
        this.A = y(this.wA, this);
        this.o.xA();
        this.g.isSupported() && this.vA()
    }
    B(Lr, I);
    d = Lr.prototype;
    d.vA = function() {
        this.g.setMinimalConfidence(.8);
        this.g.createEngagementCommand("You Tube", y(this.LJ, this), "jutub", .8);
        this.g.setEngagementTimeout(1E4);
        this.g.addCommand(this.g.createCommand(this.L.T("[[Stop listening|Speech command spoken to stop voice engagement.]]"), y(this.MJ, this)))
    };
    d.LJ = function(a, b) {
        this.p = a;
        this.U.B("engage-change", a);
        b && this.tn(b)
    };
    d.vy = function() {
        return this.p
    };
    d.MJ = function(a, b) {
        this.g.exitEngagementMode();
        this.tn(b)
    };
    d.Tq = function(a) {
        return !!this.i[a.rulename]
    };
    Lr.prototype.isSupported = function() {
        return this.g.isSupported()
    };
    d = Lr.prototype;
    d.Kw = function(a, b, c, e) {
        return this.g.createCommand(a, b, c, e)
    };
    d.addCommand = function(a) {
        if (!this.Tq(a)) {
            this.Uq();
            if (!this.j[a.text]) {
                var b = this.g.createCommand(a.text, this.A, a.pronunciation, a.minimalConfidence);
                this.j[a.text] = b
            }
            this.h[a.text] = this.h[a.text] || 0;
            this.h[a.text] ++;
            this.i[a.rulename] = this.C(a.text, a.callback)
        }
    };
    d.removeCommand = function(a) {
        this.Tq(a) && (this.Uq(), this.h[a.text] = this.h[a.text] || 0, this.h[a.text] --, this.i[a.rulename](), delete this.i[a.rulename])
    };
    d.Uq = function() {
        this.w.clearTimeout(this.l);
        this.l = this.w.setTimeout(this.F, 200)
    };
    d.yA = function() {
        for (var a in this.h) {
            var b = this.h[a],
                c = this.k[a] || 0,
                e = c + b,
                f = this.j[a];
            this.k[a] = c + b;
            f && (0 < e && 0 == c ? this.g.addCommand(f) : 0 >= e && (this.g.removeCommand(f), this.j[a] = null))
        }
        this.h = {}
    };
    d.wA = function(a, b) {.8 <= b.confidenceScore && a && this.B(a.text, a);
        b && this.tn(b)
    };
    d.tn = function(a) {
        this.o.Tw(a)
    };
    Lr.inject = ["speechApi", "timeService", "speechReporting", "rootDispatcher", "localeService"];

    function Mr(a, b, c) {
        this.h = b;
        c.h && (a.addEventListener("blur", y(this.g, this, !1)), a.addEventListener("focus", y(this.g, this, !0)))
    }
    Mr.prototype.g = function(a) {
        this.h.B("window-focus", a)
    };
    Mr.inject = ["window", "rootDispatcher", "environmentModel"];

    function Nr(a) {
        this.g = a
    }
    Nr.prototype.h = function(a, b) {
        var c = Or,
            e = y(this.g.T, this.g),
            f = new Date;
        f.setTime(a - b);
        var g = f.getUTCFullYear() - 1970;
        if (2 < g) return e(c.bK).replace("{{years}}", g.toString());
        if (1 == g) return g = f.getUTCMonth() + 12, e(c.dw).replace("{{months}}", g.toString());
        g = f.getUTCMonth();
        if (1 < g) return e(c.dw).replace("{{months}}", g.toString());
        if (1 == g) return e(c.aK);
        g = f.getUTCDate() - 1;
        if (1 < g) return e(c.WJ).replace("{{days}}", g.toString());
        if (1 == g) return e(c.VJ);
        g = f.getUTCHours();
        if (1 < g) return e(c.YJ).replace("{{hours}}", g.toString());
        if (1 == g) return e(c.XJ);
        f = f.getUTCMinutes();
        return 1 < f ? e(c.$J).replace("{{minutes}}", f.toString()) : e(c.ZJ)
    };
    var Or = {
        T2: "[[1 year ago|Label for 1 year having elapsed.]]",
        bK: "[[{{years}} years ago|Label for n years having elapsed.]]",
        aK: "[[1 month ago|Label for 1 month having elapsed.]]",
        dw: "[[{{months}} months ago|Label for n months having elapsed.]]",
        VJ: "[[1 day ago|Label for 1 day having elapsed.]]",
        WJ: "[[{{days}} days ago|Label for n days having elapsed.]]",
        XJ: "[[1 hour ago|Label for 1 hour having elapsed.]]",
        YJ: "[[{{hours}} hours ago|Label for n hours having elapsed.]]",
        ZJ: "[[1 minute ago|Label for 1 minute having elapsed.]]",
        $J: "[[{{minutes}} minutes ago|Label for n minutes having elapsed.]]"
    };
    Nr.inject = ["localeService"];

    function Pr(a) {
        this.h = a
    }
    Pr.prototype.g = function(a, b, c) {
        return b && b.$ ? this.h.g(b, c) : a(b, c)
    };
    Pr.inject = ["componentFactory"];

    function Qr(a, b) {
        if (a && window && window.yterr && !(5 <= Rr)) {
            var c = a.stacktrace,
                e = a.columnNumber;
            a = tj(a);
            var c = c || a.stack,
                f = b || "ERROR",
                g = a.lineNumber.toString();
            isNaN(g) || isNaN(e) || (g = g + ":" + e);
            Sr[a.message] || (e = a.fileName, f = {
                YT: {
                    a: "logerror",
                    t: "jserror",
                    type: a.name,
                    msg: a.message.substr(0, 1E3),
                    line: g,
                    level: f
                },
                Ld: {
                    url: window.location.href,
                    file: e
                },
                method: "POST"
            }, c && (f.Ld.stack = c), hl("/gen_204", f), Sr[a.message] = !0, Rr++)
        }
    }
    var Sr = {},
        Rr = 0;

    function Tr(a, b) {
        this.i = a;
        this.g = b;
        this.h = null;
        this.j = {
            ll: 0,
            qC: 0
        }
    }
    d = Tr.prototype;
    d.initialize = function() {
        this.h = this.RO();
        this.WO();
        this.QO() || (this.UO(), this.VO(), this.TO(), this.SO())
    };
    d.RO = function() {
        var a = this.i,
            b = this.i + "/html",
            c = this.i + "/img",
            e = new Yp(this.g);
        e.Fb("localeModel", Gg);
        e.Fb("messages", Gq);
        e.Fb("timeService", Cg);
        e.Fb("ytHttp", Bg);
        e.register("xhrBackend", Fk);
        e.register("jsonpBackend", Ur);
        e.register("applicationPath", a);
        e.register("htmlPath", b);
        e.register("imagePath", c);
        e.register("defaultBackground", c + "/default_bg.jpg");
        return e
    };
    d.WO = function() {
        var a = "start_browse";
        this.g.location.href.match(/[?&]v=[\w\+\/\-_=]+/) ? a = "start_watch" : this.g.location.href.match(/[?&]reversePairingCode=/) ? a = "start_dial" : this.g.location.href.match(/[?&]castv=/) && (a = "start_cast");
        this.g.jstiming.load.name = a
    };
    d.QO = function() {
        var a = this.g.localStorage.getItem("yt.leanback::sticky-label") || null,
            b = Jh(a);
        if (b)
            if (0 <= this.g.location.href.indexOf("stick=0")) this.g.localStorage.removeItem("yt.leanback::sticky-label");
            else if (b.data && !this.g.location.href.match("label=")) return this.h.get("timeService").setTimeout(y(function() {
            this.g.location.assign(this.g.location.href.replace(/\/tv\??/, "/tv?label=" + b.data + "&"))
        }, this), 5E3), !0;
        return !1
    };
    d.UO = function() {
        Kh = Jh = JSON.parse;
        T = JSON.stringify;
        bk.prototype.parse = function(a) {
            return JSON.parse(a)
        }
    };
    d.TO = function() {
        this.j.ll++;
        var a = this.h.get("localeModel"),
            b = y(this.ME, this);
        this.g.jstiming.load.tick("msg_rq");
        a.sb && "en_US" != a.sb ? this.h.get("messages").load(a.sb, b) : this.h.get("timeService").setTimeout(b, 0)
    };
    d.ME = function() {
        this.g.jstiming.load.tick("msg_r");
        this.tu()
    };
    d.SO = function() {
        ba("yt.www.errors.log", Qr, void 0)
    };
    d.tu = function() {
        this.j.ll > ++this.j.qC || (this.g.jstiming.load.tick("app_r"), this.h.get("bootstrapService").PE(y(this.QE, this)))
    };
    d.QE = function(a) {
        var b = "application",
            c = "leanback";
        a && (b = "systemError", c = "loader");
        b = this.YV(b, c);
        a && b && (b.model = a)
    };
    d.YV = function(a, b) {
        if (!this.h) return null;
        var c = this.g.document.getElementById(b);
        return pe(a, this.h, void 0, c)
    };

    function Vr() {
        this.ytBuffer = [];
        this.mBuffer = [];
        this.volume = null;
        var a = cast.receiver.CastReceiverManager.getInstance();
        a.onSystemVolumeChanged = this.h.bind(this);
        this.ytBus = a.getCastMessageBus("urn:x-cast:com.google.youtube.mdx", cast.receiver.CastMessageBus.MessageType.JSON);
        this.mBus = a.getCastMessageBus(cast.receiver.media.MEDIA_NAMESPACE, cast.receiver.CastMessageBus.MessageType.JSON);
        this.ytBus.onMessage = this.i.bind(this);
        this.mBus.onMessage = this.g.bind(this);
        a.start()
    }
    Vr.prototype.h = function(a) {
        this.volume = a
    };
    Vr.prototype.i = function(a) {
        this.ytBuffer.push(a)
    };
    Vr.prototype.g = function(a) {
        var b = a.data;
        "GET_STATUS" == b.type ? this.mBus.send(a.senderId, {
            type: "MEDIA_STATUS",
            requestId: b.requestId,
            status: [new cast.receiver.media.MediaStatus]
        }) : this.mBuffer.push(a)
    };
    window.cast && cast.receiver && !cast.mdx_state && (window.cast.mdx_state = new Vr);

    function Ur(a, b) {
        this.h = new gk(a);
        this.g = b ? b : "callback";
        this.Yb = 5E3
    }
    var Wr = 0;
    Ur.prototype.SE = function(a) {
        this.Yb = a
    };
    Ur.prototype.i = function() {
        return this.Yb
    };
    Ur.prototype.send = function(a, b, c, e) {
        a = a || null;
        e = e || "_" + (Wr++).toString(36) + A().toString(36);
        h._callbacks_ || (h._callbacks_ = {});
        var f = this.h.clone();
        if (a)
            for (var g in a) a.hasOwnProperty && !a.hasOwnProperty(g) || f.tf(g, a[g]);
        b && (b = Xr(e, b), h._callbacks_[e] = b, f.tf(this.g, "_callbacks_." + e));
        b = bg(f.toString(), {
            timeout: this.Yb,
            GG: !0
        });
        c = Yr(e, a, c);
        b.Hg(c);
        return {
            $b: e,
            nu: b
        }
    };
    Ur.prototype.cancel = function(a) {
        a && (a.nu && a.nu.cancel(), a.$b && Zr(a.$b, !1))
    };

    function Yr(a, b, c) {
        return function() {
            Zr(a, !1);
            c && c(b)
        }
    }

    function Xr(a, b) {
        return function(c) {
            Zr(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function Zr(a, b) {
        h._callbacks_[a] && (b ? delete h._callbacks_[a] : h._callbacks_[a] = q)
    };

    function $r(a) {
        var b, c = a.get("window");
        p("environment.ytshell", c) || (b = new bq);
        for (var e = [{
                name: "accountApi",
                source: "environment.ytshell.accountInfo"
            }, {
                name: "accountManager",
                source: "environment.ytshell.accountManager"
            }, {
                name: "audioConfigApi",
                source: "environment.ytshell.audioConfig"
            }, {
                name: "cookiesApi",
                source: "environment.ytshell.storage.cookies"
            }, {
                name: "dialApi",
                source: "environment.ytshell.dial"
            }, {
                name: "dvrApi",
                source: "environment.ytshell.dvr"
            }, {
                name: "eventReporter",
                source: "environment.ytshell.eventReporter"
            }, {
                name: "inputApi",
                source: "environment.ytshell.input"
            }, {
                name: "loggingApi",
                source: "environment.ytshell.logging"
            }, {
                name: "searchApi",
                source: "environment.ytshell.search"
            }, {
                name: "speechApi",
                source: "environment.ytshell.speech"
            }, {
                name: "ssoApi",
                source: "environment.ytshell.sso"
            }, {
                name: "storageApi",
                source: "environment.ytshell.storage"
            }, {
                name: "systemApi",
                source: "environment.ytshell.system"
            }, {
                name: "remoteApi",
                source: "environment.ytshell.remote"
            }], f = 0, g = e.length; f < g; ++f) {
            var k = e[f];
            a.register(k.name, b || p(k.source,
                c))
        }
        a.get("dvrApi").isSupported() && (b = function(a) {
            return new(p("FileReader", a))
        }, b.inject = ["window"], a.Nh("fileReader", b));
        as(a);
        return a
    }

    function bs(a) {
        function b(a, b) {
            return b.T(a)
        }
        for (var c = [{
                name: "activityParser",
                constructor: sp
            }, {
                name: "activityReportingService",
                constructor: dq
            }, {
                name: "adModel",
                constructor: rl
            }, {
                name: "adService",
                constructor: yl
            }, {
                name: "animationBuilder",
                constructor: na
            }, {
                name: "animationFrameService",
                constructor: rj
            }, {
                name: "apiary",
                constructor: fq
            }, {
                name: "apiaryUpload",
                constructor: gq
            }, {
                name: "apiaryVideoSerializer",
                constructor: $p
            }, {
                name: "apiaryVideos",
                constructor: hq
            }, {
                name: "applicationState",
                constructor: Lo
            }, {
                name: "audioConfigReporting",
                constructor: iq
            }, {
                name: "backendErrorReporting",
                constructor: jq
            }, {
                name: "backgroundService",
                constructor: lq
            }, {
                name: "bootstrapService",
                constructor: rq
            }, {
                name: "bountyService",
                constructor: mq
            }, {
                name: "browseActivity",
                constructor: jm
            }, {
                name: "browseModel",
                constructor: mj
            }, {
                name: "browseParser",
                constructor: bp
            }, {
                name: "browseSetsActivity",
                constructor: sq
            }, {
                name: "cacheService",
                constructor: Kc
            }, {
                name: "channelPaidInfoParser",
                constructor: tp
            }, {
                name: "channelSuggestionParser",
                constructor: up
            }, {
                name: "commandCenter",
                constructor: Hp
            }, {
                name: "commandCenterInitializer",
                constructor: Ii
            }, {
                name: "componentFactory",
                constructor: Wp
            }, {
                name: "crashReportingService",
                constructor: nq
            }, {
                name: "csiService",
                constructor: Dg
            }, {
                name: "debugModel",
                constructor: ze
            }, {
                name: "debugCallService",
                constructor: uq
            }, {
                name: "elapsedTime",
                constructor: Nr
            }, {
                name: "environmentModel",
                constructor: ug
            }, {
                name: "exceptionLogger",
                constructor: Cq
            }, {
                name: "eurekaService",
                constructor: zl
            }, {
                name: "featuredParser",
                constructor: vp
            }, {
                name: "fragmentReportingService",
                constructor: Dq
            }, {
                name: "gestureRecognizer",
                constructor: Po
            }, {
                name: "gestureService",
                constructor: Kn
            }, {
                name: "guideParser",
                constructor: cp
            }, {
                name: "history",
                constructor: kp
            }, {
                name: "identityParser",
                constructor: wp
            }, {
                name: "imageCacheService",
                constructor: Fq
            }, {
                name: "inflater",
                constructor: Vm
            }, {
                name: "keyboardModel",
                constructor: kn
            }, {
                name: "keyMapModel",
                constructor: tg
            }, {
                name: "legendModel",
                constructor: lp
            }, {
                name: "localeService",
                constructor: Ig
            }, {
                name: "localStorage",
                constructor: ti
            }, {
                name: "locationFacade",
                constructor: Xp
            }, {
                name: "mixedFactory",
                constructor: Pr
            }, {
                name: "networkStatus",
                constructor: Hq
            }, {
                name: "thumbnailParser",
                constructor: qm
            }, {
                name: "playerFacade",
                constructor: Sg
            }, {
                name: "playerFactoryService",
                constructor: Jg
            }, {
                name: "playerService",
                constructor: Lg
            }, {
                name: "playerVariablesModel",
                constructor: vg
            }, {
                name: "playlistParser",
                constructor: xp
            }, {
                name: "playbackReporter",
                constructor: Iq
            }, {
                name: "postPlayModel",
                constructor: nj
            }, {
                name: "privateDataService",
                constructor: Aq
            }, {
                name: "processMediator",
                constructor: Mp
            }, {
                name: "progressModel",
                constructor: sl
            }, {
                name: "qrCodeService",
                constructor: Jq
            }, {
                name: "remoteService",
                constructor: El
            }, {
                name: "reportingService",
                constructor: Z
            }, {
                name: "resizeService",
                constructor: Kq
            }, {
                name: "retentionReportingService",
                constructor: oq
            }, {
                name: "router",
                constructor: Zp
            }, {
                name: "searchReporting",
                constructor: Vn
            }, {
                name: "speechReporting",
                constructor: Tq
            }, {
                name: "searchRowService",
                constructor: Lq
            }, {
                name: "searchService",
                constructor: lm,
                fc: {
                    parser: "$identityParser"
                }
            }, {
                name: "settingsRowService",
                constructor: km
            }, {
                name: "searchHistoryService",
                constructor: tq
            }, {
                name: "searchQueryModel",
                constructor: dn
            }, {
                name: "shutdownService",
                constructor: pq
            }, {
                name: "statsService",
                constructor: $q
            }, {
                name: "steelDialService",
                constructor: qq
            }, {
                name: "steelReportingService",
                constructor: ar
            }, {
                name: "styles",
                constructor: Sp
            }, {
                name: "subscriptionsModel",
                constructor: oj
            }, {
                name: "subscriptionsParser",
                constructor: yp
            }, {
                name: "suggestionsModel",
                constructor: oo
            }, {
                name: "systemRequirements",
                constructor: br
            }, {
                name: "userProfileCache",
                constructor: Jr
            }, {
                name: "transliterationService",
                constructor: Ir
            }, {
                name: "userProfileParser",
                constructor: zp
            }, {
                name: "vevoPlaylistService",
                constructor: Kr
            }, {
                name: "videoParser",
                constructor: rp
            }, {
                name: "voiceFooterModel",
                constructor: im
            }, {
                name: "innerTubeVideoParser",
                constructor: So
            }, {
                name: "innerTubePlaylistParser",
                constructor: Yo
            }, {
                name: "innerTubeChannelParser",
                constructor: Wo
            }, {
                name: "watchHistoryModel",
                constructor: pj
            }, {
                name: "watchNextModel",
                constructor: Nl
            }, {
                name: "watchModel",
                constructor: qj
            }, {
                name: "windowFocus",
                constructor: Mr
            }, {
                name: "ytThumbnails",
                constructor: vi
            }], e = 0, f = c.length; e < f; ++e) {
            var g = c[e];
            a.Fb(g.name, g.constructor, g.fc)
        }
        cs(a, [{
            name: "application",
            N: Il,
            R: "/rebound/app.html"
        }, {
            name: "applicationMessage",
            N: Kl,
            R: "/rebound/application_message.html"
        }, {
            name: "advertisement-info",
            N: kj,
            R: "/rebound/advertisement_info.html"
        }, {
            name: "browse-sets",
            N: Bm,
            R: "/rebound/browse_sets.html"
        }, {
            name: "browse-header",
            N: um,
            R: "/rebound/browse_header.html"
        }, {
            name: "browse-list",
            N: zm,
            fc: {
                opt_tileSpacing: 7
            }
        }, {
            name: "button",
            N: Y,
            R: "/rebound/button.html"
        }, {
            name: "buttonDecorator",
            N: Y
        }, {
            name: "call-to-cast",
            N: Cm,
            R: "/rebound/call_to_cast.html"
        }, {
            name: "carousel",
            N: Am,
            fc: {
                opt_tileSpacing: 7
            }
        }, {
            name: "channel-button",
            N: Y,
            R: "/rebound/channel_button.html"
        }, {
            name: "clearSearchSuggestion",
            N: Ip,
            R: "/rebound/search_suggestion.html"
        }, {
            name: "color-button",
            N: Y,
            R: "/rebound/color_button.html"
        }, {
            name: "component",
            N: M
        }, {
            name: "contextMenu",
            N: Em,
            R: "/rebound/context_menu.html"
        }, {
            name: "debugConsole",
            N: Hm,
            R: "/rebound/empty.html"
        }, {
            name: "debug-watermark",
            N: Im,
            R: "/rebound/debug_watermark.html"
        }, {
            name: "deviceToast",
            N: Km,
            R: "/rebound/toasts/device_toast.html"
        }, {
            name: "fps",
            N: Om,
            R: "/rebound/empty.html"
        }, {
            name: "feed-icon",
            N: Nm,
            R: "/rebound/feed_icon.html"
        }, {
            name: "grid",
            N: Jp
        }, {
            name: "guide",
            N: Rm,
            R: "/rebound/guide.html"
        }, {
            name: "guideButton",
            N: Sm,
            R: "/rebound/guide_button.html"
        }, {
            name: "guideLogo",
            N: M
        }, {
            name: "guideSectionButton",
            N: Tm,
            R: "/rebound/button.html"
        }, {
            name: "horizontalList",
            N: Ym,
            R: "/rebound/horizontal_list.html",
            fc: {
                opt_tileSpacing: 7
            }
        }, {
            name: "iconButton",
            N: Y,
            R: "/rebound/icon_button.html"
        }, {
            name: "image",
            N: tm
        }, {
            name: "labelButton",
            N: Y,
            R: "/rebound/label_button.html"
        }, {
            name: "list",
            N: Mi
        }, {
            name: "legendItem",
            N: Ln,
            R: "/rebound/legend_item.html"
        }, {
            name: "placeholderTile",
            N: M
        }, {
            name: "postPlay",
            N: On,
            R: "/rebound/post_play.html"
        }, {
            name: "privacyButton",
            N: Tn,
            R: "/rebound/privacy_button.html"
        }, {
            name: "progress-bar",
            N: Un,
            R: "/rebound/progress_bar.html"
        }, {
            name: "searchSuggestion",
            N: M,
            R: "/rebound/search_suggestion.html"
        }, {
            name: "settings",
            N: ao,
            R: "/rebound/settings.html"
        }, {
            name: "shelf",
            N: bo,
            R: "/rebound/shelf.html"
        }, {
            name: "shelves",
            N: fo,
            R: "/rebound/shelf_list.html",
            fc: {
                opt_tileSpacing: 6
            }
        }, {
            name: "skip-ad-button",
            N: go,
            R: "/rebound/skip_ad_button.html"
        }, {
            name: "sliding-highlighter",
            N: Qm,
            R: "/rebound/sliding_highlighter.html"
        }, {
            name: "snapControls",
            N: ko,
            R: "/rebound/snap_controls.html"
        }, {
            name: "subscribeButton",
            N: Kp,
            R: "/rebound/icon_button.html"
        }, {
            name: "subtitled-button",
            N: lo,
            R: "/rebound/subtitled_button.html"
        }, {
            name: "suggestions",
            N: po,
            R: "/rebound/suggestions.html"
        }, {
            name: "super-scroller",
            N: om,
            R: "/rebound/super_scroller.html"
        }, {
            name: "systemError",
            N: qo,
            R: "/rebound/system_error.html"
        }, {
            name: "tile-focus-target",
            N: M
        }, {
            name: "toaster",
            N: vo,
            R: "/rebound/toaster.html"
        }, {
            name: "toggleButton",
            N: Kp,
            R: "/rebound/label_button.html"
        }, {
            name: "transliteration",
            N: xo,
            R: "/rebound/transliteration.html"
        }, {
            name: "transport-controls",
            N: yo,
            R: "/rebound/transport_controls.html"
        }, {
            name: "updatePlaylistToast",
            N: zo,
            R: "/rebound/toasts/update_playlist_toast.html"
        }, {
            name: "uploadProgress",
            N: Ao,
            R: "/rebound/upload_progress.html"
        }, {
            name: "uploadsToast",
            N: M,
            R: "/rebound/toasts/uploads_toast.html"
        }, {
            name: "voice-footer",
            N: Jo,
            R: "/rebound/voice_footer.html"
        }, {
            name: "volumeToast",
            N: Ko,
            R: "/rebound/toasts/volume_toast.html"
        }, {
            name: "watch",
            N: No,
            R: "/rebound/watch_legacy.html"
        }, {
            name: "watch-title-tray",
            N: Oo,
            R: "/rebound/watch_title_tray.html"
        }]);
        cs(a, [{
            name: "actionTile",
            R: "/rebound/tiles/action.html"
        }, {
            name: "channelTile",
            N: Dm,
            R: "/rebound/tiles/channel_tile.html",
            fc: {
                showChannelBadge: !1
            }
        }, {
            name: "kenkoTile",
            R: "/rebound/tiles/kenko.html"
        }, {
            name: "pairTile",
            R: "/rebound/tiles/remote_pairing.html"
        }, {
            name: "postPlayTile",
            N: Pn,
            R: "/rebound/tiles/post_play_tile.html"
        }, {
            name: "auto-play-tile",
            N: hm,
            R: "/rebound/tiles/post_play_tile.html"
        }, {
            name: "recentSearchTile",
            R: "/rebound/tiles/recent_search.html"
        }, {
            name: "resetPairingTile",
            R: "/rebound/tiles/reset_pairing.html"
        }, {
            name: "searchTile",
            R: "/rebound/tiles/search.html"
        }, {
            name: "signOutTile",
            R: "/rebound/tiles/sign_out.html"
        }, {
            name: "shiyojoTile",
            R: "/rebound/tiles/shiyojo.html"
        }, {
            name: "toggleTile",
            N: wo,
            R: "/rebound/tiles/togglable.html"
        }, {
            name: "videoTile",
            N: Eo,
            R: "/rebound/tiles/video_tile.html"
        }, {
            name: "playlistTile",
            N: Eo,
            R: "/rebound/tiles/video_tile.html"
        }, {
            name: "loadingTile",
            R: "/rebound/tiles/loading_tile.html"
        }, {
            name: "dvrClipTile",
            N: Lm,
            R: "/rebound/tiles/dvr_clip.html"
        }], W);
        g = [{
            name: "rootDispatcher",
            cg: function(a) {
                var b = new ie;
                b.D = a;
                return b
            },
            Oh: ["document"]
        }, {
            name: "rateLimit",
            cg: Ji,
            Oh: Ji.inject
        }, {
            name: "soundService",
            cg: function(a, b) {
                return a.get(b.supportsSounds ? Nq : aq)
            },
            Oh: ["injector", "environmentModel"]
        }, {
            name: "authService",
            cg: function(a, b, c, e) {
                return c.yk && b.isSupported() ? a.get(Yq) : c.supportsAccountManager ? a.get(vh, {
                    authService: e
                }) : a.get(zq)
            },
            Oh: ["injector", "ssoApi", "environmentModel", "simpleAuthService"]
        }, {
            name: "safeModeFlag",
            cg: function(a) {
                return new mp("safe-mode-enabled", a)
            },
            Oh: ["localStorage"]
        }];
        e = 0;
        for (f = g.length; e < f; ++e) c = g[e], c.cg.inject = c.Oh, a.Ue(c.name, c.cg);
        a.Ue("inflaterConfig", $o);
        a.Fb("videoInfoVisibleFlag", np, {
            opt_initial: !1
        });
        a.Fb("hasShownScopeDialog", np, {
            opt_initial: !1
        });
        a.Nh("continuation", ap);
        b.inject = ["markup", "localeService"];
        a.Nh("templatePreprocessor", b);
        g = [{
            name: "carouselAnimator",
            constructor: pa
        }, {
            name: "collectionContinuer",
            constructor: Vp,
            fc: {
                thresholdDistance: 4
            }
        }, {
            name: "imageUtility",
            constructor: Hl
        }, {
            name: "listSelectionManager",
            constructor: Li
        }, {
            name: "shelfAnimation",
            constructor: fb,
            fc: {
                animDuration: 200
            }
        }, {
            name: "simpleAuthService",
            constructor: Mq
        }, {
            name: "slidingAnimation",
            constructor: hb,
            fc: {
                animDuration: 200
            }
        }, {
            name: "seededShelfService",
            constructor: Xm
        }, {
            name: "userIdService",
            constructor: wl,
            fc: {
                id: "userIdService",
                parser: "$userProfileParser",
                path: "/users/{userName}",
                opt_paramKey: "userName",
                opt_params: {
                    fields: "yt:userId"
                }
            }
        }];
        e = 0;
        for (f = g.length; e < f; ++e) c = g[e], a.hk(c.name, c.constructor,
            c.fc);
        g = [{
            name: "changeSubscription",
            constructor: sm
        }, {
            name: "editVideo",
            constructor: ye
        }, {
            name: "editVideoDetails",
            constructor: we
        }, {
            name: "exit",
            constructor: ch
        }, {
            name: "goBack",
            constructor: gh
        }, {
            name: "goHome",
            constructor: eh
        }, {
            name: "loadBrowse",
            constructor: $g
        }, {
            name: "loadFonts",
            constructor: Bp
        }, {
            name: "loginAndLoadW2W",
            constructor: $n
        }, {
            name: "openBrowse",
            constructor: mh
        }, {
            name: "playerError",
            constructor: Fp
        }, {
            name: "setsOnboarding",
            constructor: Gi
        }, {
            name: "upload",
            constructor: rh
        }, {
            name: "uploadDvrClip",
            constructor: ph
        }];
        e = 0;
        for (f = g.length; e < f; ++e) c = g[e], a.hk(c.name, c.constructor);
        c = [{
            constructor: mo,
            id: "suggestionService",
            paramKey: "q",
            path: "/complete/search"
        }, {
            constructor: Dl,
            id: "remoteQueueService",
            listType: "RQ",
            parser: "$videoParser",
            path: "/videos/batch",
            opt_params: {
                v: "2.1"
            }
        }, {
            altId: "UU",
            constructor: mm,
            id: "userUploadsService",
            listType: "UU",
            parser: "$videoParser",
            path: "/users/{userName}/uploads",
            opt_paramKey: "userName",
            opt_params: {
                fields: "author,title,logo,entry[$default-filter](author,title,category/@term,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults,link[@rel='next'](@rel)"
            }
        }, {
            altId: "SF",
            constructor: mm,
            id: "videoService",
            listType: "SF",
            parser: "$videoParser",
            path: "/standardfeeds/{regionId}/{feedName}",
            opt_paramKey: "feedName",
            opt_params: {
                fields: "author,title,logo,entry[$default-filter](author,title,category/@term,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults,link[@rel='next'](@rel)",
                regionId: ""
            }
        }, {
            constructor: mm,
            id: "newSubscriptionsService",
            listType: "SU",
            parser: "$videoParser",
            path: "/users/default/newsubscriptionvideos",
            opt_paramKey: "noParamKeyRequired",
            opt_params: {
                fields: "author,title,logo,entry[$default-filter](author,title,category/@term,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults,link[@rel='next'](@rel)"
            }
        }, {
            altId: "PL",
            constructor: mm,
            id: "playlistService",
            listType: "PL",
            parser: "$videoParser",
            path: "/playlists/{playlistId}",
            opt_paramKey: "playlistId",
            opt_params: {
                fields: "author,title,logo,entry[$default-filter](author,title,category/@term,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults,link[@rel='next'](@rel)"
            }
        }, {
            constructor: mm,
            id: "videoPlaybackInfoService",
            listType: "VI",
            parser: "$videoParser",
            path: "/videos/{videoId}",
            opt_paramKey: "videoId",
            opt_params: {
                fields: "title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)"
            }
        }, {
            constructor: mm,
            id: "relatedVideosService",
            listType: "RV",
            parser: "$videoParser",
            path: "/videos/{relatedId}/related",
            opt_paramKey: "relatedId",
            opt_params: {
                fields: "author,title,logo,entry[$default-filter](author,title,category/@term,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults,link[@rel='next'](@rel)"
            }
        }, {
            constructor: wl,
            id: "channelPaidInfoService",
            parser: "$channelPaidInfoParser",
            path: "/channels/{channelId}",
            opt_paramKey: "channelId",
            opt_params: {
                fields: "yt:paidContent"
            }
        }, {
            constructor: wl,
            id: "userProfileService",
            parser: "$userProfileParser",
            path: "/users/{userName}",
            opt_paramKey: "userName",
            opt_params: {
                fields: "yt:userId,yt:username,title,media:thumbnail,yt:statistics,yt:channelId"
            }
        }, {
            constructor: U,
            id: "browseGuideService",
            parser: "$guideParser",
            path: "/guide"
        }, {
            constructor: U,
            id: "browseService",
            parser: "$browseParser",
            path: "/browse"
        }, {
            constructor: U,
            id: "clearWatchHistoryService",
            parser: "$identityParser",
            path: "/history/clear_watch_history"
        }, {
            constructor: U,
            id: "guideService",
            parser: "$identityParser",
            path: "/guide",
            opt_clientVersion: "5.20140923"
        }, {
            constructor: U,
            id: "browseSetsService",
            path: "/browse",
            parser: "$identityParser",
            opt_clientVersion: "5.20140923"
        }, {
            constructor: U,
            id: "likeService",
            parser: "$identityParser",
            path: "/like/like"
        }, {
            constructor: U,
            id: "dislikeService",
            parser: "$identityParser",
            path: "/like/dislike"
        }, {
            constructor: U,
            id: "subscribeService",
            parser: "$identityParser",
            path: "/subscription/subscribe"
        }, {
            constructor: U,
            id: "unsubscribeService",
            parser: "$identityParser",
            path: "/subscription/unsubscribe"
        }, {
            constructor: U,
            id: "watchNextService",
            parser: "$identityParser",
            path: "/next",
            opt_clientVersion: "5.20140923"
        }, {
            constructor: cq,
            id: "achievements"
        }];
        e = 0;
        for (f = c.length; e < f; ++e) g = c[e], a.Fb(g.id, g.constructor, g), g.altId && a.LQ(g.altId, g.id);
        ds(a);
        es(a)
    }

    function es(a) {
        function b(b, c) {
            var e;
            e = b.isLimitedAnimation ? "list" : "carousel";
            return function(b, f, g) {
                var t = {
                    opt_tileSpacing: c
                };
                z(t, b);
                return pe(e, a, f, g, t)
            }
        }

        function c(a) {
            return a.isLimitedAnimation ? a.useSetsUi ? function(a) {
                return new Pm(a, 5, 1, 0)
            } : function(a) {
                return new Oi(a, 0, 5)
            } : function(b) {
                return new ym(b, void 0, a.useSetsUi ? 3 : 4)
            }
        }

        function e(a, b) {
            return a.get(b.useThreeShelves ? qa : ra, {
                animDuration: b.disableShelfAnimation ? 0 : 210
            })
        }

        function f(a) {
            return a.useThreeShelves ? 3 : 4
        }
        f.inject = ["environmentModel"];
        a.Ue("shelfCount", f);
        e.inject = ["injector", "environmentModel"];
        a.Ue("shelfAnimator", e);
        c.inject = ["environmentModel"];
        a.Ue("projectionFactory", c);
        b.inject = ["environmentModel", "opt_tileSpacing"];
        a.Nh("listFactory", b)
    }

    function ds(a) {
        a.Fb("dialogService", Ug);
        cs(a, [{
            name: "dialog",
            N: oe,
            R: "/rebound/dialog.html"
        }, {
            name: "closedCaptionsDialog",
            N: Qi,
            R: "/rebound/dialogs/closed_captions.html"
        }, {
            name: "debugDialog",
            N: Xi,
            R: "/rebound/dialogs/debug.html"
        }, {
            name: "deleteVideoDialog",
            N: Yi,
            R: "/rebound/dialogs/delete_video.html"
        }, {
            name: "deleteVideoProgress",
            N: Zi,
            R: "/rebound/empty.html"
        }, {
            name: "eurekaAuthorizationDialog",
            N: M,
            R: "/rebound/dialogs/eureka_authorization.html"
        }, {
            name: "eurekaPlayerErrorDialog",
            N: M,
            R: "/rebound/dialogs/eureka_player_error.html"
        }, {
            name: "exitDialog",
            N: M,
            R: "/rebound/empty.html"
        }, {
            name: "flagClaimDialog",
            N: M,
            R: "/rebound/dialogs/flag_claim.html"
        }, {
            name: "flagOptionsDialog",
            N: $i,
            R: "/rebound/dialogs/flag_options.html"
        }, {
            name: "flagVideoDialog",
            N: M,
            R: "/rebound/dialogs/flag_video.html"
        }, {
            name: "loginDialog",
            N: aj,
            R: "/rebound/dialogs/login.html"
        }, {
            name: "logoutDialog",
            N: M,
            R: "/rebound/dialogs/logout.html"
        }, {
            name: "modifyVideo",
            N: Mn,
            R: "/rebound/dialogs/modify_video.html"
        }, {
            name: "paidChannelDialog",
            N: M,
            R: "/rebound/dialogs/paid_channel.html"
        }, {
            name: "pairingDialog",
            N: dj,
            R: "/rebound/dialogs/pairing.html"
        }, {
            name: "playerErrorDialog",
            N: ej,
            R: "/rebound/dialogs/player_error.html"
        }, {
            name: "ps4LogoutDialog",
            N: M,
            R: "/rebound/dialogs/logout_ps4.html"
        }, {
            name: "qrDialog",
            N: fj,
            R: "/rebound/dialogs/qr.html"
        }, {
            name: "remoteResetDialog",
            N: gj,
            R: "/rebound/dialogs/remote_reset.html"
        }, {
            name: "scrollPaneDialog",
            N: hj,
            R: "/rebound/dialogs/scroll_pane.html"
        }, {
            name: "setsLoginDialog",
            N: aj,
            R: "/rebound/dialogs/sets_login.html"
        }, {
            name: "sets-onboarding",
            N: ij,
            R: "/rebound/dialogs/sets_onboarding.html"
        }, {
            name: "simpleDialog",
            N: jj,
            R: "/rebound/dialogs/simple.html"
        }, {
            name: "system-error",
            N: fj,
            R: "/rebound/dialogs/system_error.html"
        }, {
            name: "tosDialog",
            N: M,
            R: "/rebound/dialogs/tos.html"
        }, {
            name: "uploadTerms",
            N: M,
            R: "/rebound/dialogs/upload_terms.html"
        }, {
            name: "video-overview",
            N: Bo,
            R: "/rebound/dialogs/video_overview.html"
        }, {
            name: "video-privacy",
            N: Co,
            R: "/rebound/dialogs/video_privacy.html"
        }, {
            name: "videoUploadError",
            N: Fo,
            R: "/rebound/dialogs/video_upload_error.html"
        }, {
            name: "video-upload-status",
            N: Ho,
            R: "/rebound/dialogs/video_upload_status.html"
        }, {
            name: "video-uploads",
            N: Io,
            R: "/rebound/dialogs/video_uploads.html"
        }])
    }

    function cs(a, b, c) {
        for (var e = a.get("htmlPath"), f = 0, g = b.length; f < g; ++f) {
            var k = b[f];
            a.Wb(k.name, k.N ? k.N : c, k.R ? e + k.R : "", k.fc)
        }
    }

    function as(a) {
        var b = a.get("speechApi");
        a.get("environmentModel").useWebSpeech ? (a.register("speechApi", new bq), a.Ue("webSpeechApi", function() {
            return new webkitSpeechRecognition
        }), a.Fb("voiceService", Vq), a.Wb("engagement-indicator", M), a.hk("voiceHelper", gm)) : b.isSupported() ? (a.hk("voiceHelper", gm), a.Wb("engagement-indicator", Mm, a.get("htmlPath") + "/rebound/engagement_indicator.html"), a.Fb("voiceService", Lr)) : (a.Fb("voiceHelper", Up), a.Wb("engagement-indicator", M))
    };

    function fs(a, b) {
        Tr.call(this, a, b);
        this.l = null;
        this.p = "Steel" === p("environment.browser", this.g)
    }
    B(fs, Tr);
    ba("yt.tv.initializer", function(a) {
        (new fs(a, window)).initialize()
    }, void 0);
    d = fs.prototype;
    d.initialize = function() {
        fs.u.initialize.call(this);
        this.p && this.GQ()
    };
    d.VO = function() {
        this.h && (bs(this.h), this.p || this.Yk())
    };
    d.GQ = function() {
        var a = this.i + "/api-compiled.js";
        this.j.ll++;
        this.g.jstiming.load.tick("yts_rq");
        this.l = bg(a);
        this.l.Sd(y(function() {
            ytshell.ready(y(this.ND, this))
        }, this));
        this.l.Hg(y(this.Yk, this, !0))
    };
    d.ND = function(a) {
        this.g.jstiming.load.tick("yts_r");
        null == p("environment.ytshell", this.g) && (this.g.environment.ytshell = a);
        this.Yk(!0)
    };
    d.Yk = function(a) {
        if (this.h) {
            $r(this.h);
            var b = this.h,
                c = b.get("environmentModel"),
                e = b.get("htmlPath");
            c.isChromelessContext ? (b.Wb("browse", M), b.Wb("search", M), b.Wb("legend", M)) : (b.Wb("browse", pm, e + "/rebound/browse.html"), b.Wb("search", Yn, e + "/rebound/search.html"), b.Wb("legend", Jn, e + "/rebound/legend.html"));
            c.supportsPointer ? b.Wb("pointer-overlay", Nn, e + "/rebound/pointer_overlay.html") : b.Wb("pointer-overlay", M);
            e = b.get("environmentModel");
            c = b.get("htmlPath");
            if (e.xk) b.Wb("keyboard", M, c + "/rebound/empty.html");
            else {
                var e = ln,
                    f, g;
                switch (b.get("localeModel").sb) {
                    case "ja_JP":
                        e = nn;
                        g = gn("ja-Hira", "ja");
                        break;
                    case "ko_KR":
                        e = In;
                        break;
                    case "zh_CN":
                    case "zh_HK":
                    case "zh_TW":
                        e = mn, g = gn("en", "zh-Hans")
                }
                g && (f = {
                    langCodePair: g
                });
                b.Wb("keyboard", e, c + "/rebound/keyboard.html", f)
            }
        }
        a && this.tu()
    };
})();
