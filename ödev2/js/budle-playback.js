// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 9)
}([function(e, t, n) {
    "use strict";
    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, (i = r.key,
            s = void 0,
            s = function(e, t) {
                if ("object" !== o(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== o(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(i, "string"),
            "symbol" === o(s) ? s : String(s)), r)
        }
        var i, s
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e)
    }
    function a(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (a = function(e) {
            if (null === e || (n = e,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return e;
            var n;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, o)
            }
            function o() {
                return l(e, arguments, h(this).constructor)
            }
            return o.prototype = Object.create(e.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            u(o, e)
        }
        )(e)
    }
    function l(e, t, n) {
        return (l = c() ? Reflect.construct.bind() : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var r = new (Function.bind.apply(e, o));
            return n && u(r, n.prototype),
            r
        }
        ).apply(null, arguments)
    }
    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function u(e, t) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    if (n.d(t, "a", (function() {
        return p
    }
    )),
    n.d(t, "d", (function() {
        return d
    }
    )),
    n.d(t, "c", (function() {
        return m
    }
    )),
    n.d(t, "b", (function() {
        return y
    }
    )),
    "undefiend" != typeof window.XMLHttpRequest) {
        var f = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && u(e, t)
            }(p, e);
            var t, n, o, a, l, f = (t = p,
            n = c(),
            function() {
                var e, o = h(t);
                if (n) {
                    var r = h(this).constructor;
                    e = Reflect.construct(o, arguments, r)
                } else
                    e = o.apply(this, arguments);
                return s(this, e)
            }
            );
            function p() {
                return i(this, p),
                f.apply(this, arguments)
            }
            return o = p,
            a && r(o.prototype, a),
            l && r(o, l),
            Object.defineProperty(o, "prototype", {
                writable: !1
            }),
            o
        }(a(XMLHttpRequest));
        Object.defineProperty(f.prototype, "responseURL", Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "responseURL"))
    }
    function p(e, t, n, o, r) {
        var i;
        if ((i = window.XMLHttpRequest ? new f : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function() {
            4 == this.readyState && n(i)
        }
        ,
        i.open(e, t, !0),
        o)
            for (var s in o)
                o.hasOwnProperty(s) && i.setRequestHeader(s, o[s]);
        i.withCredentials = !0,
        i.send(r)
    }
    function d(e) {
        return void 0 !== e && e && e.constructor === Array
    }
    function m(e) {
        return document.cookie.search(e) >= 0
    }
    function v(e, t) {
        var n = window["HTML".concat(e, "Element")];
        if (void 0 !== n) {
            var o = Object.getOwnPropertyDescriptor(n.prototype, t);
            void 0 !== o && Object.defineProperty(n.prototype, "_wm_".concat(t), o)
        }
    }
    function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "src"
          , n = "_wm_".concat(t);
        return n in e.__proto__ ? e[n] : e[t]
    }
    v("Image", "src"),
    v("Media", "src"),
    v("Embed", "src"),
    v("IFrame", "src"),
    v("Script", "src"),
    v("Link", "href"),
    v("Anchor", "href")
}
, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "a", (function() {
        return l
    }
    ));
    var o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      , r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      , i = {
        Y: function(e) {
            return e.getUTCFullYear()
        },
        m: function(e) {
            return e.getUTCMonth() + 1
        },
        b: function(e) {
            return r[e.getUTCMonth()]
        },
        B: function(e) {
            return o[e.getUTCMonth()]
        },
        d: function(e) {
            return e.getUTCDate()
        },
        H: function(e) {
            return ("0" + e.getUTCHours()).slice(-2)
        },
        M: function(e) {
            return ("0" + e.getUTCMinutes()).slice(-2)
        },
        S: function(e) {
            return ("0" + e.getUTCSeconds()).slice(-2)
        },
        "%": function() {
            return "%"
        }
    };
    function s(e) {
        var t = function(e) {
            return "number" == typeof e && (e = e.toString()),
            [e.slice(-14, -10), e.slice(-10, -8), e.slice(-8, -6), e.slice(-6, -4), e.slice(-4, -2), e.slice(-2)]
        }(e);
        return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))
    }
    function a(e) {
        return r[e]
    }
    function l(e, t) {
        return t.replace(/%./g, (function(t) {
            var n = i[t[1]];
            return n ? n(s(e)) : t
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "a", (function() {
        return l
    }
    ));
    var o = n(0);
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, (i = o.key,
            s = void 0,
            s = function(e, t) {
                if ("object" !== r(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== r(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(i, "string"),
            "symbol" === r(s) ? s : String(s)), o)
        }
        var i, s
    }
    var s = JSON;
    function a(e, t, n, r) {
        return r = r || {},
        Object(o.a)("POST", "/__wb/web-archive/", (function(e) {
            401 === e.status ? r.userNotLoggedIn && r.userNotLoggedIn(e) : e.status >= 400 ? r.failure && r.failure(e) : r.success && r.success(e)
        }
        ), {
            "Content-Type": "application/json"
        }, s.stringify({
            url: e,
            snapshot: t,
            tags: n || []
        })),
        !1
    }
    var l = function() {
        function e(t, n, r) {
            var i = this;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.el = t,
            this.url = n,
            this.timestamp = r,
            t.onclick = this.save.bind(this),
            document.addEventListener("DOMContentLoaded", (function() {
                i.enableSaveSnapshot(Object(o.c)("logged-in-user"))
            }
            ))
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "save",
            value: function(e) {
                this.start(),
                a(this.url, this.timestamp, [], {
                    failure: this.failure.bind(this),
                    success: this.success.bind(this)
                })
            }
        }, {
            key: "start",
            value: function() {
                this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-open", "wm-save-snapshot-success"]),
                this.show(["wm-save-snapshot-in-progress"])
            }
        }, {
            key: "failure",
            value: function(e) {
                401 == e.status ? this.userNotLoggedIn(e) : (this.hide(["wm-save-snapshot-in-progress", "wm-save-snapshot-success"]),
                this.show(["wm-save-snapshot-fail", "wm-save-snapshot-open"]),
                console.log("You have got an error."),
                console.log("If you think something wrong here please send it to support."),
                console.log('Response: "' + e.responseText + '"'),
                console.log('status: "' + e.status + '"'))
            }
        }, {
            key: "success",
            value: function(e) {
                this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-in-progress"]),
                this.show(["wm-save-snapshot-open", "wm-save-snapshot-success"])
            }
        }, {
            key: "enableSaveSnapshot",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                e ? (this.show("wm-save-snapshot-open"),
                this.hide("wm-sign-in")) : (this.hide(["wm-save-snapshot-open", "wm-save-snapshot-in-progress"]),
                this.show("wm-sign-in"))
            }
        }, {
            key: "show",
            value: function(e) {
                this.setDisplayStyle(e, "inline-block")
            }
        }, {
            key: "hide",
            value: function(e) {
                this.setDisplayStyle(e, "none")
            }
        }, {
            key: "setDisplayStyle",
            value: function(e, t) {
                var n = this;
                (Object(o.d)(e) ? e : [e]).forEach((function(e) {
                    var o = n.el.getRootNode().getElementById(e);
                    o && (o.style.display = t)
                }
                ))
            }
        }]) && i(t.prototype, n),
        r && i(t, r),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e
    }()
}
, , , , , , , function(e, t, n) {
    "use strict";
    var o;
    n.r(t);
    var r, i = {
        createElementNS: document.createElementNS
    };
    var s = !0;
    function a(e) {
        !function(e, t, n) {
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                var r = "; expires=" + o.toGMTString()
            } else
                r = "";
            document.cookie = e + "=" + t + r + "; path=/"
        }(e, "", -1)
    }
    var l = n(0)
      , c = n(1)
      , u = window.Date;
    function h(e, t) {
        return (e = e.toString()).length >= t ? e : "00000000".substring(0, t - e.length) + e
    }
    function f(e) {
        for (var t = 0, n = 0; n < e.length; n++)
            t = Math.max(t, Math.max.apply(null, e[n][1]));
        if (function(e) {
            for (var t = 0, n = 1e3, o = 0; o < e.length; o++) {
                var r = e[o];
                t = Math.max(t, Math.max.apply(null, r[1])),
                n = Math.min(n, Math.min.apply(null, r[1].filter(Boolean)))
            }
            return Math.log1p(t) - Math.log1p(n) > 3
        }(e)) {
            var o = [];
            for (n = 0; n < e.length; n++) {
                var r = e[n];
                o.push([r[0], r[1].map(Math.log1p)])
            }
            e = o,
            t = Math.log1p(t)
        }
        return [e, t]
    }
    function p(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return d(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var o = 0
                  , r = function() {};
                return {
                    s: r,
                    n: function() {
                        return o >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[o++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s = !0, a = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return s = e.done,
                e
            },
            e: function(e) {
                a = !0,
                i = e
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a)
                        throw i
                }
            }
        }
    }
    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++)
            o[n] = e[n];
        return o
    }
    function m(e, t, n) {
        var o = n("wm-capresources");
        o.innerHTML = "";
        var r = n("wm-capresources-loading");
        r.style.display = "block";
        var i = c.c(e).getTime()
          , s = 0;
        t = window.location.origin + t;
        var a = [];
        function u(e, n) {
            var o, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "src", i = window.location.origin, s = b(window, e), c = p(s);
            try {
                for (c.s(); !(o = c.n()).done; ) {
                    var u = o.value;
                    if (!n || n(u)) {
                        var h = Object(l.b)(u, r);
                        h && !h.startsWith(t) && h.startsWith(i) && (h.startsWith("data:") || a.push(h))
                    }
                }
            } catch (e) {
                c.e(e)
            } finally {
                c.f()
            }
        }
        u("img"),
        u("frame"),
        u("iframe", (function(e) {
            return "playback" !== e.id
        }
        )),
        u("script"),
        u("link", (function(e) {
            return "stylesheet" === e.rel
        }
        ), "href");
        var h = a.filter((function(e, t, n) {
            return n.indexOf(e) === t
        }
        ));
        h.length > 0 ? (s = 0,
        h.map((function(e) {
            e.match("^https?://") && (s++,
            Object(l.a)("HEAD", e, (function(e) {
                if (200 == e.status) {
                    var t = e.getResponseHeader("Memento-Datetime");
                    if (null == t)
                        console.log("%s: no Memento-Datetime", u);
                    else {
                        var n = document.createElement("span")
                          , a = function(e, t) {
                            var n = new Date(e).getTime() - t
                              , o = "";
                            n < 0 ? (o += "-",
                            n = Math.abs(n)) : o += "+";
                            var r = !1;
                            if (n < 1e3)
                                return {
                                    delta: n,
                                    text: "",
                                    highlight: r
                                };
                            var i = n
                              , s = Math.floor(n / 1e3 / 60 / 60 / 24 / 30 / 12);
                            n -= 1e3 * s * 60 * 60 * 24 * 30 * 12;
                            var a = Math.floor(n / 1e3 / 60 / 60 / 24 / 30);
                            n -= 1e3 * a * 60 * 60 * 24 * 30;
                            var l = Math.floor(n / 1e3 / 60 / 60 / 24);
                            n -= 1e3 * l * 60 * 60 * 24;
                            var c = Math.floor(n / 1e3 / 60 / 60);
                            n -= 1e3 * c * 60 * 60;
                            var u = Math.floor(n / 1e3 / 60);
                            n -= 1e3 * u * 60;
                            var h = Math.floor(n / 1e3)
                              , f = [];
                            s > 1 ? (f.push(s + " years"),
                            r = !0) : 1 == s && (f.push(s + " year"),
                            r = !0);
                            a > 1 ? (f.push(a + " months"),
                            r = !0) : 1 == a && (f.push(a + " month"),
                            r = !0);
                            l > 1 ? f.push(l + " days") : 1 == l && f.push(l + " day");
                            c > 1 ? f.push(c + " hours") : 1 == c && f.push(c + " hour");
                            u > 1 ? f.push(u + " minutes") : 1 == u && f.push(u + " minute");
                            h > 1 ? f.push(h + " seconds") : 1 == h && f.push(h + " second");
                            f.length > 2 && (f = f.slice(0, 2));
                            return {
                                delta: i,
                                text: o + f.join(" "),
                                highlight: r
                            }
                        }(t, i)
                          , l = a.highlight ? "color:red;" : "";
                        n.innerHTML = " " + a.text,
                        n.title = t,
                        n.setAttribute("style", l);
                        var c = e.getResponseHeader("Content-Type")
                          , u = e.responseURL.replace(window.location.origin, "")
                          , h = document.createElement("a");
                        h.innerHTML = u.split("/").splice(3).join("/"),
                        h._wm_href = u,
                        h.title = c,
                        h.onmouseover = g,
                        h.onmouseout = w;
                        var f = document.createElement("div");
                        f.setAttribute("data-delta", a.delta),
                        f.appendChild(h),
                        f.append(n),
                        o.appendChild(f);
                        var p = Array.prototype.slice.call(o.childNodes, 0);
                        p.sort((function(e, t) {
                            return t.getAttribute("data-delta") - e.getAttribute("data-delta")
                        }
                        )),
                        o.innerHTML = "";
                        for (var d = 0, m = p.length; d < m; d++)
                            o.appendChild(p[d])
                    }
                }
                0 == --s && (r.style.display = "none")
            }
            )))
        }
        ))) : (o.innerHTML = "There are no sub-resources in the page.",
        r.style.display = "none")
    }
    function v(e, t) {
        for (var n = t.split("/").splice(6).join("/"), o = e.document.querySelectorAll("img[src$='" + n + "'], iframe[src$='" + n + "'], frame[src$='" + n + "']"), r = Array.prototype.slice.call(o), i = 0; i < e.frames.length; i++)
            try {
                var s = v(e.frames[i].window, t);
                r = r.concat(s)
            } catch (e) {}
        return r
    }
    function y(e) {
        return "FRAME" == e.tagName || "IFRAME" == e.tagName ? e.contentWindow.document.documentElement : e
    }
    function g(e) {
        var t = v(window, e.target.href);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++)
                y(t[n]).classList.add("wb-highlight")
    }
    function w(e) {
        var t = v(window, e.target.href);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++)
                y(t[n]).classList.remove("wb-highlight")
    }
    function b(e, t) {
        for (var n = e.document.getElementsByTagName(t), o = Array.prototype.slice.call(n), r = 0; r < e.frames.length; r++)
            try {
                var i = b(e.frames[r].window, t);
                o = o.concat(i)
            } catch (e) {}
        return o
    }
    function S(e) {
        return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function _(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, (r = o.key,
            i = void 0,
            i = function(e, t) {
                if ("object" !== S(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== S(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(r, "string"),
            "symbol" === S(i) ? i : String(i)), o)
        }
        var r, i
    }
    function M(e, t, n) {
        return t && T(e.prototype, t),
        n && T(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function k(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    }
    function C(e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
    }
    function x(e, t, n) {
        e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n)
    }
    function O(e, t, n, o) {
        C(o || document, t, (function(t) {
            for (var o, r = t.target || t.srcElement; r && !(o = k(r, e)); )
                r = r.parentElement;
            o && n.call(r, t)
        }
        ))
    }
    var H, E, j = function() {
        function e(t, n) {
            _(this, e),
            this.input = t,
            this.source = 0,
            this.minChars = 3,
            this.delay = 150,
            this.offsetLeft = 0,
            this.offsetTop = 0,
            this.cache = !0,
            this.menuClass = "",
            Object.assign(this, n),
            this.root = this.input.getRootNode(),
            this.cache && (this.cache = {}),
            this.sc = document.createElement("div"),
            this.sc.className = "wb-autocomplete-suggestions " + this.menuClass,
            this.root.appendChild(this.sc);
            this.selector;
            this.autocompleteAttr = t.getAttribute("autocomplete"),
            t.setAttribute("autocomplete", "off"),
            this.last_val = "",
            this.updateSC = this.updateSC.bind(this),
            this.blurHandler = this.blurHandler.bind(this),
            this.keydownHandler = this.keydownHandler.bind(this),
            this.keyupHandler = this.keyupHandler.bind(this),
            this.focusHandler = this.focusHandler.bind(this),
            C(window, "resize", this.updateSC),
            C(t, "blur", this.blurHandler),
            C(t, "keydown", this.keydownHandler),
            C(t, "keyup", this.keyupHandler),
            this.minChars || C(t, "focus", this.focusHandler);
            var o = this;
            O("wb-autocomplete-suggestion", "mouseleave", (function(e) {
                var t = o.sc.querySelector(".autocomplete-suggestion.selected");
                t && setTimeout((function() {
                    t.className = t.className.replace("selected", "")
                }
                ), 20)
            }
            ), this.sc),
            O("wb-autocomplete-suggestion", "mouseover", (function(e) {
                var t = o.sc.querySelector(".wb-autocomplete-suggestion.selected");
                t && (t.className = t.className.replace("selected", "")),
                this.className += " selected"
            }
            ), this.sc),
            O("wb-autocomplete-suggestion", "mousedown", (function(e) {
                if (k(this, "wb-autocomplete-suggestion")) {
                    var t = this.getAttribute("data-val");
                    o.input.value = t,
                    o.onSelect(e, t, this),
                    o.sc.style.display = "none"
                }
            }
            ), this.sc)
        }
        return M(e, [{
            key: "unload",
            value: function() {
                x(window, "resize", this.updateSC),
                x(this.input, "blur", this.blurHandler),
                x(this.input, "focus", this.focusHandler),
                x(this.input, "keydown", this.keydownHandler),
                x(this.input, "keyup", this.keyupHandler),
                this.autocompleteAttr ? this.setAttribute("autocomplete", this.autocompleteAttr) : this.removeAttribute("autocomplete"),
                this.root.removeChild(this.sc)
            }
        }, {
            key: "updateSC",
            value: function(e, t) {
                var n = this.input.getBoundingClientRect();
                if (this.sc.style.left = Math.round(n.left + (window.pageXOffset || document.documentElement.scrollLeft) + this.offsetLeft) + "px",
                this.sc.style.top = Math.round(n.bottom + (window.pageYOffset || document.documentElement.scrollTop) + this.offsetTop) + "px",
                this.sc.style.width = Math.round(n.right - n.left) + "px",
                !e)
                    if (this.sc.style.display = "block",
                    this.sc.maxHeight || (this.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(this.sc, null) : this.sc.currentStyle).maxHeight)),
                    this.sc.suggestionHeight || (this.sc.suggestionHeight = this.sc.querySelector(".wb-autocomplete-suggestion").offsetHeight),
                    this.sc.suggestionHeight)
                        t || (this.sc.scrollTop = 0);
                    else {
                        var o = this.sc.scrollTop
                          , r = t.getBoundingClientRect().top - this.sc.getBoundingClientRect().top;
                        r + this.sc.suggestionHeight - this.sc.maxHeight > 0 ? this.sc.scrollTop = r + this.sc.suggestionHeight + o - this.sc.maxHeight : r < 0 && (this.sc.scrollTop = r + o)
                    }
            }
        }, {
            key: "blurHandler",
            value: function() {
                var e = this;
                try {
                    var t = this.root.querySelector(".wb-autocomplete-suggestions:hover")
                } catch (e) {
                    t = null
                }
                t ? this.input !== document.activeElement && setTimeout((function() {
                    return e.focus()
                }
                ), 20) : (this.last_val = this.input.value,
                this.sc.style.display = "none",
                setTimeout((function() {
                    return e.sc.style.display = "none"
                }
                ), 350))
            }
        }, {
            key: "suggest",
            value: function(e) {
                var t = this.input.value;
                if (this.cache[t] = e,
                e.length && t.length >= this.minChars) {
                    for (var n = "", o = 0; o < e.length; o++)
                        n += this.renderItem(e[o], t);
                    this.sc.innerHTML = n,
                    this.updateSC(0)
                } else
                    this.sc.style.display = "none"
            }
        }, {
            key: "keydownHandler",
            value: function(e) {
                var t, n = this, o = window.event ? e.keyCode : e.which;
                if ((40 == o || 38 == o) && this.sc.innerHTML)
                    return (r = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) ? (t = 40 == o ? r.nextSibling : r.previousSibling) ? (r.className = r.className.replace("selected", ""),
                    t.className += " selected",
                    this.input.value = t.getAttribute("data-val")) : (r.className = r.className.replace("selected", ""),
                    this.input.value = this.last_val,
                    t = 0) : ((t = 40 == o ? this.sc.querySelector(".wb-autocomplete-suggestion") : this.sc.childNodes[this.sc.childNodes.length - 1]).className += " selected",
                    this.input.value = t.getAttribute("data-val")),
                    this.updateSC(0, t),
                    !1;
                if (27 == o)
                    this.value = this.last_val,
                    this.sc.style.display = "none";
                else if (13 == o || 9 == o) {
                    var r;
                    (r = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) && "none" != this.sc.style.display && (this.onSelect(e, r.getAttribute("data-val"), r),
                    setTimeout((function() {
                        n.sc.style.display = "none"
                    }
                    ), 20))
                }
            }
        }, {
            key: "keyupHandler",
            value: function(e) {
                var t = this
                  , n = window.event ? e.keyCode : e.which;
                if (!n || (n < 35 || n > 40) && 13 != n && 27 != n) {
                    var o = this.input.value;
                    if (o.length >= this.minChars) {
                        if (o != this.last_val) {
                            if (this.last_val = o,
                            clearTimeout(this.timer),
                            this.cache) {
                                if (o in this.cache)
                                    return void this.suggest(this.cache[o]);
                                for (var r = 1; r < o.length - this.minChars; r++) {
                                    var i = o.slice(0, o.length - r);
                                    if (i in this.cache && !this.cache[i].length)
                                        return void this.suggest([])
                                }
                            }
                            this.timer = setTimeout((function() {
                                t.source(o, t.suggest.bind(t))
                            }
                            ), this.delay)
                        }
                    } else
                        this.last_val = o,
                        this.sc.style.display = "none"
                }
            }
        }, {
            key: "focusHandler",
            value: function(e) {
                this.last_val = "\n",
                this.keyupHandler(e)
            }
        }, {
            key: "renderItem",
            value: function(e, t) {
                t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                var n = new RegExp("(" + t.split(" ").join("|") + ")","gi");
                return '<div class="wb-autocomplete-suggestion" data-val="' + e + '">' + e.replace(n, "<b>$1</b>") + "</div>"
            }
        }, {
            key: "onSelect",
            value: function(e, t, n) {}
        }]),
        e
    }(), L = function() {
        function e(t, n) {
            _(this, e);
            var o = t.getRootNode();
            if (o.querySelector) {
                var r = "object" == S(t) ? [t] : o.querySelectorAll(t);
                this.elems = r.map((function(e) {
                    return new j(e,n)
                }
                ))
            }
        }
        return M(e, [{
            key: "destroy",
            value: function() {
                for (; this.elems.length > 0; )
                    this.elems.pop().unload()
            }
        }]),
        e
    }(), R = n(2), A = window.JSON, N = window.open, U = window.Date, P = document, D = document, I = function(e) {
        return D.getElementById(e)
    };
    var q, B = "/static/";
    function F(e) {
        H.classList.contains("wm-closed") ? (e && E.classList.add("notice-only"),
        H.classList.replace("wm-closed", "wm-open"),
        E.style.display = "block",
        m(q, B, I)) : (H.classList.replace("wm-open", "wm-closed"),
        E.style.display = "none",
        E.classList.remove("notice-only"))
    }
    function W(e, t) {
        var n = I(e);
        n && (n.style.visibility = t ? "visible" : "hidden")
    }
    function X(e, t) {
        Object(l.d)(e) || (e = [e]);
        for (var n = 0; n < e.length; n++)
            W(e[n], t)
    }
    var Y = /web\/(\d*)\/http:\/\/web\.archive\.org\/screenshot/g;
    function $(e, t, n) {
        !function(e, t) {
            Object(l.a)("HEAD", e, (function(e) {
                t(e.status < 300, e.responseURL)
            }
            ))
        }("/web/" + t + "/http://web.archive.org/screenshot/" + e, (function(e, o) {
            if (!e)
                return n(!1);
            var r = function(e) {
                var t = Y.exec(e);
                return t && t[1] ? t[1] : null
            }(o);
            if (!r)
                return console.warn("failed to extract timestamp from %s", o),
                void n(!1);
            var i = (c.c(r).getTime() - c.c(t).getTime()) / 1e3;
            console.log("screen shot delta: " + i + "s"),
            n(i > 0 && i < 60, i)
        }
        ))
    }
    window.__wm = {
        init: function(e) {
            !function() {
                var e = document.cookie.split(";");
                if (e.length > 40)
                    for (var t = 0; t < e.length; t++) {
                        a(e[t].split("=")[0].trim())
                    }
            }(),
            o = e,
            document.createElementNS = function(e, t) {
                return 0 == e.indexOf(o) && (e = e.substring(o.length).replace(/\/?[0-9]+\//, "")),
                i.createElementNS.call(this, e, t)
            }
        },
        wombat: function(e, t, n, o, i, a) {
            var l = "".concat(n).concat(o, "/")
              , c = l.replace(/^https?:/, "")
              , u = new URL(e)
              , h = {
                url: e,
                timestamp: t,
                prefix: l,
                coll: o,
                static_prefix: i,
                request_ts: t,
                proxy_magic: "",
                mod: "",
                is_framed: !1,
                is_live: !1,
                enable_auto_fetch: !0,
                auto_fetch_worker_prefix: l,
                wombat_ts: t,
                wombat_sec: a,
                wombat_scheme: (u.protocol || "http").replace(/:$/, ""),
                wombat_host: u.host,
                wombat_opts: {
                    no_rewrite_prefixes: ["/__wb/", i, "".concat(n).concat(i.substring(1)), "/web/", l, c, "http://analytics.archive.org/", "https://analytics.archive.org/", "//analytics.archive.org/"]
                }
            };
            if ("undefined" != typeof _WBWombat) {
                var f = _WBWombat.prototype.rewriteUrl;
                return _WBWombat.prototype.rewriteUrl = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                        n[o - 1] = arguments[o];
                    return s ? f.call.apply(f, [this, e].concat(n)) : e
                }
                ,
                (r = _WBWombat(window, h)).actual = !0,
                window._wb_wombat = r.wombatInit(),
                window._wb_wombat.actual = !0,
                r
            }
        },
        rw: function(e) {
            s = e
        },
        bt: function(e, t, n, o, r, i, s, a, p, d, m) {
            var v;
            B = p || "/static/",
            q = s;
            var y, g, w, b = "/" + (r || "web") + "/", S = c.c(q), _ = S.getUTCFullYear(), T = S.getUTCMonth() + 1, M = S.getUTCDate(), k = -1, C = -1, x = I("wm-ipp-base");
            if (x.attachShadow) {
                var O = x.attachShadow({
                    mode: "closed"
                });
                for (D = O; x.children.length > 0; )
                    O.appendChild(x.children[0]);
                if (d)
                    for (var j = 0; j < d.length; j++) {
                        var W = P.createElement("link");
                        W.setAttribute("rel", "stylesheet"),
                        W.setAttribute("type", "text/css"),
                        W.setAttribute("href", d[j]),
                        O.appendChild(W)
                    }
            }
            function Y() {
                var e = I("donato").offsetHeight + (I("wm-ipp-inside").offsetHeight - I("wm-capinfo").offsetHeight);
                console.debug("adjustHeight: baseHeight=%s", e + "px"),
                x.style.height = e + "px"
            }
            window.top == window.self && (x.style.display = "block");
            var J = !1
              , G = !0
              , z = null === (v = I("donato-if")) || void 0 === v ? void 0 : v.contentWindow
              , V = I("donato");
            if (console.debug("$donato = %o", V),
            V)
                if (window.top != window.self)
                    V.style.display = "none",
                    console.debug("hid $donato as window.top != window.self");
                else {
                    var K = I("donato-base");
                    window.addEventListener("message", (function(e) {
                        if (e.source === z) {
                            var t = "string" == typeof e.data ? A.parse(e.data) : e.data;
                            if (console.log("got message %o", t),
                            "set height" == t.event) {
                                var n = t.value
                                  , o = t.bannerHeight;
                                if ("number" != typeof n || n <= 0)
                                    return;
                                if (!G)
                                    return;
                                if (t.value,
                                J)
                                    return;
                                V.style.height = o + "px",
                                K.style.height = n + "px",
                                Y()
                            } else if ("open modal" == t.event)
                                K.style.height = "",
                                document.body.classList.add("wm-modal"),
                                window.scrollTo(0, 0),
                                J = !0;
                            else if ("close modal" == t.event)
                                V.style.marginBottom = "0px",
                                document.body.classList.remove("wm-modal"),
                                J = !1;
                            else if ("hide banner" == t.event) {
                                V.style.height = 0,
                                V.style.visibility = "hidden";
                                var r = new U(U.now() + 24 * t.value * 3600 * 1e3);
                                document.cookie = "donation=x; domain=archive.org; path=/; expires=" + r.toUTCString(),
                                G = !1,
                                J = !1,
                                0,
                                Y()
                            }
                        }
                    }
                    ), !1),
                    console.debug("installed message listener to #donato-base: %o", K)
                }
            I("wm-tb-close").addEventListener("click", (function(e) {
                I("wm-ipp-inside").style.display = "none",
                e.preventDefault(),
                Y()
            }
            ));
            var Q = I("wm-ipp-sparkline");
            function Z(e) {
                var t = "mouseenter" == e.type ? 1 : 0;
                if (t !== y) {
                    var n = I("wm-ipp")
                      , o = I("displayYearEl")
                      , r = I("displayMonthEl")
                      , i = I("displayDayEl");
                    t ? n.className = "hi" : (n.className = "",
                    o.innerHTML = _,
                    r.innerHTML = c.b(T - 1),
                    i.innerHTML = h(M, 2)),
                    g.style.display = t ? "inline" : "none",
                    w.style.display = t ? "inline" : "none",
                    y = t
                }
            }
            H = I("wm-expand"),
            E = I("wm-capinfo"),
            I("wm-graph-anchor")._no_rewrite = !0,
            (g = P.createElement("div")).className = "yt",
            g.style.display = "none",
            g.style.width = n + "px",
            g.style.height = t + "px",
            (w = P.createElement("div")).className = "mt",
            w.style.display = "none",
            w.style.width = o + "px",
            w.style.height = t + "px",
            Q.appendChild(g),
            Q.appendChild(w);
            var ee = I("wm-sparkline-canvas");
            Q.onmouseenter = Z,
            Q.onmouseleave = Z,
            Q.onmousemove = function(t) {
                var r, s, l = Q, u = function(e) {
                    var t = 0;
                    return e.pageX || e.pageY ? t = e.pageX : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft),
                    t
                }(t), f = (r = l,
                s = P.documentElement,
                ("undefied" != typeof r.getBoundingClientRect ? r.getBoundingClientRect() : {
                    top: 0,
                    left: 0
                }).left + (window.pageXOffset || s.scrollLeft) - (s.clientLeft || 0)), p = Math.min(Math.max(0, u - f), e), d = p % n, m = Math.floor(p / n), v = Math.min(11, Math.floor(d / o)), y = 12 * m + v, S = d % 2 == 1 ? 15 : 1, _ = h(m + a) + h(v + 1, 2) + h(S, 2) + "000000";
                I("displayYearEl").innerHTML = m + a,
                I("displayMonthEl").innerHTML = c.b(v);
                var T = b + _ + "/" + i;
                if (I("wm-graph-anchor").href = T,
                k != m) {
                    var M = m * n;
                    g.style.left = M + "px",
                    k = m
                }
                if (C != y) {
                    var x = m + y * o + 1;
                    w.style.left = x + "px",
                    C = y
                }
            }
            ;
            var te = I("wm-sparkline-canvas");
            if (te.getContext && te.getContext("2d")) {
                var ne = "/__wb/sparkline?output=json&url=" + encodeURIComponent(i) + (r && "&collection=" + r || "");
                Object(l.a)("GET", ne, (function(n) {
                    if (200 == n.status) {
                        for (var o = A.parse(n.responseText), r = o.years, s = Object.getOwnPropertyNames(r), l = o.years = [], h = 0; h < s.length; h++) {
                            var p = s[h];
                            r[p] && l.push([p, r[p]])
                        }
                        !function(e) {
                            for (var t = I("wm-nav-captures"), n = 0, o = e.years, r = e.first_ts, s = e.last_ts, a = 0; a < o.length; a++)
                                for (var l = o[a][1], u = 0; u < l.length; u++)
                                    n += l[u];
                            var h = '<a class="t" href="' + b + "*/" + i + '" title="See a list of every capture for this URL">' + (("" + n).replace(/\B(?=(\d{3})+$)/g, ",") + " ") + (n > 1 ? "captures" : "capture") + "</a>"
                              , f = c.a(r, "%d %b %Y");
                            s != r && (f += " - " + c.a(s, "%d %b %Y")),
                            h += '<div class="r" title="Timespan for captures of this URL">' + f + "</div>",
                            t.innerHTML = h
                        }(o),
                        function(e, t, n, o, r, i, s) {
                            var a = o.getContext("2d");
                            if (a) {
                                a.fillStyle = "#FFF";
                                var l = (new u).getUTCFullYear()
                                  , c = t / (l - r + 1)
                                  , h = f(e.years)
                                  , p = h[0]
                                  , d = n / h[1];
                                if (i >= r) {
                                    var m = M(i);
                                    a.fillStyle = "#FFFFA5",
                                    a.fillRect(m, 0, c, n)
                                }
                                for (var v = r; v <= l; v++) {
                                    m = M(v);
                                    a.beginPath(),
                                    a.moveTo(m, 0),
                                    a.lineTo(m, n),
                                    a.lineWidth = 1,
                                    a.strokeStyle = "#CCC",
                                    a.stroke()
                                }
                                s = parseInt(s) - 1;
                                for (var y = (c - 1) / 12, g = 0; g < p.length; g++) {
                                    v = p[g][0];
                                    for (var w = p[g][1], b = M(v) + 1, S = 0; S < 12; S++) {
                                        var _ = w[S];
                                        if (_ > 0) {
                                            var T = Math.ceil(_ * d);
                                            a.fillStyle = v == i && S == s ? "#EC008C" : "#000",
                                            a.fillRect(Math.round(b), Math.ceil(n - T), Math.ceil(y), Math.round(T))
                                        }
                                        b += y
                                    }
                                }
                            }
                            function M(e) {
                                return Math.ceil((e - r) * c) + .5
                            }
                        }(o, e, t, te, a, _, T)
                    }
                }
                ))
            } else {
                var oe = new Image;
                oe.src = "/__wb/sparkline?url=" + encodeURIComponent(i) + "&width=" + e + "&height=" + t + "&selected_year=" + _ + "&selected_month=" + T + (r && "&collection=" + r || ""),
                oe.alt = "sparkline",
                oe.width = e,
                oe.height = t,
                oe.id = "sparklineImgId",
                oe.border = "0",
                ee.parentNode.replaceChild(oe, ee)
            }
            function re(e) {
                for (var t = [], n = e.length, o = 0; o < n; o++)
                    void 0 === e[o].excluded && t.push(e[o].display_name);
                return t
            }
            I("wm-share-facebook").onclick = function(e) {
                var t = this.dataset.url;
                return N("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t), "", "height=400,width=600"),
                e.preventDefault(),
                !1
            }
            ,
            I("wm-share-twitter").onclick = function(e) {
                var t = this.dataset.url;
                return N("https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&via=internetarchive", "", "height=446,width=600"),
                e.preventDefault(),
                !1
            }
            ,
            new L(I("wmtbURL"),{
                delay: 400,
                source: function(e, t) {
                    Object(l.a)("GET", "/__wb/search/host?q=" + encodeURIComponent(e), (function(n) {
                        if (void 0 !== (n = A.parse(n.response)).hosts && n.hosts.length > 0) {
                            var o = re(n.hosts);
                            t(o)
                        } else
                            void 0 !== n.isUrl && !0 === n.isUrl && void 0 === n.excluded ? t([e]) : Object(l.a)("GET", "/__wb/search/anchor?q=" + encodeURIComponent(e), (function(e) {
                                if (void 0 !== (e = A.parse(e.response)) && e.length > 0) {
                                    var n = re(e.slice(0, 5));
                                    t(n)
                                }
                            }
                            ))
                    }
                    ))
                },
                onSelect: function(e, t, n) {
                    I("wmtb").submit()
                }
            }),
            I("wmtb").onsubmit = function(e) {
                var t = I("wmtbURL").value;
                if (0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") && !t.match(/[\w\.]{2,256}\.[a-z]{2,4}/gi))
                    return document.location.href = "/web/*/" + I("wmtbURL").value,
                    e.preventDefault(),
                    !1
            }
            ,
            function(e, t) {
                $(e, t, (function(e, t) {
                    e ? (I("wm-screenshot").title = "screen shot (delta: " + t + "s)",
                    X("wm-screenshot", !0)) : X("wm-screenshot", !1)
                }
                ))
            }(i, q),
            m && function(e, t) {
                !function(e, t, n) {
                    var o = "/web/" + t + "id_/http://wayback-metadata.archive.org/youtube-dl/" + e;
                    Object(l.a)("GET", o, n)
                }(e, t, (function(e) {
                    if (e.status < 300) {
                        var t = A.parse(e.responseText);
                        X("wm-video", !0),
                        I("wm-video").href = t.url,
                        I("wm-video").title = "Video: " + t.title
                    } else
                        X("wm-video", !1)
                }
                ))
            }(i, q),
            I("wm-capinfo-notice") && F(!0),
            new R.a(I("wm-save-snapshot-open"),i,q)
        },
        ex: function(e) {
            e.stopPropagation(),
            F(!1)
        },
        ajax: l.a,
        sp: function() {
            return B
        }
    }
}
]);
// @license-end
