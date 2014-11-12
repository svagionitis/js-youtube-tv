window.labels = {
    'default': '051606bd'
};
(function() {
    var a = window.labels;
    window.jstiming && window.jstiming.load && window.jstiming.load.tick("ld_s");
    var b = window.devjs,
        e = /[?&]debugjs=1/.exec(window.location.href),
        f = /[?&]localPlayer=1/.exec(window.location.href),
        g = /[?&]mediaDiagnostics=1/.exec(window.location.href),
        h = window.local_label,
        k = /[?&]reversePairingCode=/.exec(window.location.href),
        l = /[?&]launch=preload/.exec(window.location.href),
        m = /[?&]v=[\w\+\/\-_=]+/.exec(window.location.href);
    window.label = h ? h : a && a["default"] ? a["default"] : "unknown";
    var n = window.appRoot + window.label;

    function p(c) {
        document.write('<script src="' + c + '">\x3c/script>')
    }

    function q(c) {
        document.write("<script>" + c + "\x3c/script>")
    }

    function r(c) {
        var d = document.createElement("link");
        d.setAttribute("rel", "stylesheet");
        d.setAttribute("type", "text/css");
        d.setAttribute("href", c);
        document.head.appendChild(d)
    }
    window.initializeOrRedirect = function(c) {
        window.jstiming.load.tick("js_r");
        yt && yt.tv && yt.tv.initializer ? yt.tv.initializer(c) : window.location = "http://www.youtube.com/error?src=404"
    };
    b ? (window.CLOSURE_BASE_PATH = "/javascript/closure/", window.loadStylesheets = function() {
        window.h5CssList.forEach(r)
    }, p(n + "/lasagna-parse.js"), p(CLOSURE_BASE_PATH + "base.js"), p("/i18n/input/javascript/deps.js"), p("/video/youtube/src/web/javascript/deps-runfiles.js"), p(n + "/deps.js"), p(n + "/js/base_initializer.js"), p(n + "/js/initializer.js"), p(n + "/css-list.js"), q("loadStylesheets()")) : e ? (window.CLOSURE_NO_DEPS = !0, r(n + "/app-prod.css"), p(n + "/app-concat-bundle.js")) : (r(n + "/app-prod.css"), p(n + "/app-prod.js"), (k || l || m) && p(window.environment.player_url));
    window.checkBrokenLabel = function() {
        "undefined" == typeof yt && h && (window.location.href = window.location.href.replace(/([?&])label=[^&]+&?/, "$1stick=0&"))
    };
    q("checkBrokenLabel()");
    f && (window.environment.player_url = e || b ? "/video/youtube/src/web/javascript/debug-tv-player-en_US.js" : "/video/youtube/src/web/javascript/tv-player-en_US.js");
    g && (e || b ? p(n + "/modules/media-diagnostics-debug.js") : p(n + "/modules/media-diagnostics.js"));
    q("initializeOrRedirect('" + n + "');");
})();
