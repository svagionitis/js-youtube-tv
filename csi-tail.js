(function() {
    if (window.jstiming) {
        window.jstiming.a = {};
        window.jstiming.b = 1;
        var m = function(c, b, e) {
                var a = c.t[b],
                    f = c.t.start;
                if (a && (f || e)) return a = c.t[b][0], void 0 != e ? f = e : f = f[0], a - f
            },
            p = function(c, b, e) {
                var a = "";
                window.jstiming.srt && (a += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (a += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? a += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? a += "&tran=" + window.gtbExternal.tran() :
                        window.chrome && window.chrome.csi && (a += "&tran=" + window.chrome.csi().tran)
                } catch (f) {}
                var d = window.chrome;
                if (d && (d = d.loadTimes)) {
                    d().wasFetchedViaSpdy && (a += "&p=s");
                    if (d().wasNpnNegotiated) {
                        var a = a + "&npn=1",
                            h = d().npnNegotiatedProtocol;
                        h && (a += "&npnv=" + (encodeURIComponent || escape)(h))
                    }
                    d().wasAlternateProtocolAvailable && (a += "&apa=1")
                }
                var k = c.t,
                    q = k.start,
                    d = [],
                    h = [],
                    g;
                for (g in k)
                    if ("start" != g && 0 != g.indexOf("_")) {
                        var l = k[g][1];
                        l ? k[l] && h.push(g + "." + m(c, g, k[l][0])) : q && d.push(g + "." + m(c, g))
                    }
                delete k.start;
                if (b)
                    for (var n in b) a +=
                        "&" + n + "=" + b[n];
                (b = e) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "youtube_tv") + "&action=", c.name, h.length ? "&it=" + h.join(",") : "", a, "&rt=", d.join(",")].join("")
            },
            r = function(c, b, e) {
                c = p(c, b, e);
                if (!c) return "";
                b = new Image;
                var a = window.jstiming.b++;
                window.jstiming.a[a] = b;
                b.onload = b.onerror = function() {
                    window.jstiming && delete window.jstiming.a[a]
                };
                b.src = c;
                b = null;
                return c
            };
        window.jstiming.report = function(c, b,
            e) {
            if ("prerender" == document.webkitVisibilityState) {
                var a = !1,
                    f = function() {
                        if (!a) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var d;
                            "prerender" == document.webkitVisibilityState ? d = !1 : (r(c, b, e), d = !0);
                            d && (a = !0, document.removeEventListener("webkitvisibilitychange", f, !1))
                        }
                    };
                document.addEventListener("webkitvisibilitychange", f, !1);
                return ""
            }
            return r(c, b, e)
        }
    };
})();
