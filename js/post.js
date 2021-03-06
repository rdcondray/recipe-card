(function() {
    var DEBUG = !1,
        HOST = DEBUG ? "http://test.yumprint.com" : "http://yumprint.com",
        SECURE_HOST = DEBUG ? "https://test.yumprint.com" : "https://yumprint.com",
        API_HOST = DEBUG ? "http://testapi.yumprint.com" : "http://api.yumprint.com",
        SECURE_API_HOST = DEBUG ? "https://testapi.yumprint.com" : "https://api.yumprint.com",
        ANIMATION_TIME = 200,
        MESSAGE_TIME = 1E3,
        TOUCH = "undefined" !== typeof window && "ontouchstart" in window || "undefined" !== typeof navigator && (0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints);
    (function(a, e) {
        function c(n) {
            var a = n.length,
                b = j.type(n);
            return j.isWindow(n) ? !1 : 1 === n.nodeType && a ? !0 : "array" === b || "function" !== b && (0 === a || "number" === typeof a && 0 < a && a - 1 in n)
        }

        function b(n, a, b, c) {
            if (j.acceptData(n)) {
                var f = j.expando,
                    d = "string" === typeof a,
                    h = n.nodeType,
                    g = h ? j.cache : n,
                    k = h ? n[f] : n[f] && f;
                if (k && g[k] && (c || g[k].data) || !(d && b === e)) {
                    k || (h ? n[f] = k = wa.pop() || j.guid++ : k = f);
                    g[k] || (g[k] = {}, h || (g[k].toJSON = j.noop));
                    if ("object" === typeof a || "function" === typeof a) c ? g[k] = j.extend(g[k], a) : g[k].data = j.extend(g[k].data,
                        a);
                    n = g[k];
                    c || (n.data || (n.data = {}), n = n.data);
                    b !== e && (n[j.camelCase(a)] = b);
                    d ? (b = n[a], null == b && (b = n[j.camelCase(a)])) : b = n;
                    return b
                }
            }
        }

        function d(n, a, b) {
            if (j.acceptData(n)) {
                var c, f, d, h = n.nodeType,
                    g = h ? j.cache : n,
                    e = h ? n[j.expando] : j.expando;
                if (g[e]) {
                    if (a && (d = b ? g[e] : g[e].data)) {
                        j.isArray(a) ? a = a.concat(j.map(a, j.camelCase)) : a in d ? a = [a] : (a = j.camelCase(a), a = a in d ? [a] : a.split(" "));
                        c = 0;
                        for (f = a.length; c < f; c++) delete d[a[c]];
                        if (!(b ? l : j.isEmptyObject)(d)) return
                    }
                    if (!b && (delete g[e].data, !l(g[e]))) return;
                    h ? j.cleanData([n], !0) : j.support.deleteExpando || g != g.window ? delete g[e] : g[e] = null
                }
            }
        }

        function g(n, a, b) {
            if (b === e && 1 === n.nodeType)
                if (b = "data-" + a.replace(Fb, "-$1").toLowerCase(), b = n.getAttribute(b), "string" === typeof b) {
                    try {
                        b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : Gb.test(b) ? j.parseJSON(b) : b
                    } catch (c) {}
                    j.data(n, a, b)
                } else b = e;
            return b
        }

        function l(n) {
            for (var a in n)
                if (!("data" === a && j.isEmptyObject(n[a])) && "toJSON" !== a) return !1;
            return !0
        }

        function f() {
            return !0
        }

        function h() {
            return !1
        }

        function k(n, a) {
            do n = n[a];
            while (n && 1 !== n.nodeType);
            return n
        }

        function m(n, a, b) {
            a = a || 0;
            if (j.isFunction(a)) return j.grep(n, function(n, c) {
                return !!a.call(n, c, n) === b
            });
            if (a.nodeType) return j.grep(n, function(n) {
                return n === a === b
            });
            if ("string" === typeof a) {
                var c = j.grep(n, function(n) {
                    return 1 === n.nodeType
                });
                if (Tc.test(a)) return j.filter(a, c, !b);
                a = j.filter(a, c)
            }
            return j.grep(n, function(n) {
                return 0 <= j.inArray(n, a) === b
            })
        }

        function p(n) {
            var a = rc.split("|"),
                n = n.createDocumentFragment();
            if (n.createElement)
                for (; a.length;) n.createElement(a.pop());
            return n
        }

        function t(n) {
            var a = n.getAttributeNode("type");
            n.type = (a && a.specified) + "/" + n.type;
            return n
        }

        function q(n) {
            var a = Uc.exec(n.type);
            a ? n.type = a[1] : n.removeAttribute("type");
            return n
        }

        function r(n, a) {
            for (var b, c = 0; null != (b = n[c]); c++) j._data(b, "globalEval", !a || j._data(a[c], "globalEval"))
        }

        function v(n, a) {
            if (1 === a.nodeType && j.hasData(n)) {
                var b, c, f;
                c = j._data(n);
                var d = j._data(a, c),
                    h = c.events;
                if (h)
                    for (b in delete d.handle, d.events = {}, h) {
                        c = 0;
                        for (f = h[b].length; c < f; c++) j.event.add(a, b, h[b][c])
                    }
                d.data && (d.data =
                    j.extend({}, d.data))
            }
        }

        function u(n, a) {
            var b, c, f = 0,
                d = typeof n.getElementsByTagName !== E ? n.getElementsByTagName(a || "*") : typeof n.querySelectorAll !== E ? n.querySelectorAll(a || "*") : e;
            if (!d) {
                d = [];
                for (b = n.childNodes || n; null != (c = b[f]); f++) !a || j.nodeName(c, a) ? d.push(c) : j.merge(d, u(c, a))
            }
            return a === e || a && j.nodeName(n, a) ? j.merge([n], d) : d
        }

        function y(n) {
            Hb.test(n.type) && (n.defaultChecked = n.checked)
        }

        function x(n, a) {
            if (a in n) return a;
            for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = a, f = sc.length; f--;)
                if (a = sc[f] +
                    b, a in n) return a;
            return c
        }

        function B(n, a) {
            n = a || n;
            return "none" === j.css(n, "display") || !j.contains(n.ownerDocument, n)
        }

        function I(n, a) {
            for (var b, c, f, d = [], h = 0, g = n.length; h < g; h++)
                if (c = n[h], c.style)
                    if (d[h] = j._data(c, "olddisplay"), b = c.style.display, a) !d[h] && "none" === b && (c.style.display = ""), "" === c.style.display && B(c) && (d[h] = j._data(c, "olddisplay", L(c.nodeName)));
                    else if (!d[h] && (f = B(c), b && "none" !== b || !f)) j._data(c, "olddisplay", f ? b : j.css(c, "display"));
            for (h = 0; h < g; h++)
                if (c = n[h], c.style && (!a || "none" === c.style.display ||
                        "" === c.style.display)) c.style.display = a ? d[h] || "" : "none";
            return n
        }

        function s(n, a, b) {
            return (n = Vc.exec(a)) ? Math.max(0, n[1] - (b || 0)) + (n[2] || "px") : a
        }

        function z(n, a, b, c, f) {
            for (var a = b === (c ? "border" : "content") ? 4 : "width" === a ? 1 : 0, d = 0; 4 > a; a += 2) "margin" === b && (d += j.css(n, b + Ba[a], !0, f)), c ? ("content" === b && (d -= j.css(n, "padding" + Ba[a], !0, f)), "margin" !== b && (d -= j.css(n, "border" + Ba[a] + "Width", !0, f))) : (d += j.css(n, "padding" + Ba[a], !0, f), "padding" !== b && (d += j.css(n, "border" + Ba[a] + "Width", !0, f)));
            return d
        }

        function C(n, a, b) {
            var c = !0,
                f = "width" === a ? n.offsetWidth : n.offsetHeight,
                d = Ca(n),
                h = j.support.boxSizing && "border-box" === j.css(n, "boxSizing", !1, d);
            if (0 >= f || null == f) {
                f = Da(n, a, d);
                if (0 > f || null == f) f = n.style[a];
                if (jb.test(f)) return f;
                c = h && (j.support.boxSizingReliable || f === n.style[a]);
                f = parseFloat(f) || 0
            }
            return f + z(n, a, b || (h ? "border" : "content"), c, d) + "px"
        }

        function L(n) {
            var a = A,
                b = tc[n];
            if (!b) {
                b = M(n, a);
                if ("none" === b || !b) Ua = (Ua || j("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(a.documentElement),
                    a = (Ua[0].contentWindow || Ua[0].contentDocument).document, a.write("<!doctype html><html><body>"), a.close(), b = M(n, a), Ua.detach();
                tc[n] = b
            }
            return b
        }

        function M(n, a) {
            var b = j(a.createElement(n)).appendTo(a.body),
                c = j.css(b[0], "display");
            b.remove();
            return c
        }

        function da(n, a, b, c) {
            var f;
            if (j.isArray(a)) j.each(a, function(a, f) {
                b || Wc.test(n) ? c(n, f) : da(n + "[" + ("object" === typeof f ? a : "") + "]", f, b, c)
            });
            else if (!b && "object" === j.type(a))
                for (f in a) da(n + "[" + f + "]", a[f], b, c);
            else c(n, a)
        }

        function K(n) {
            return function(a, b) {
                "string" !==
                typeof a && (b = a, a = "*");
                var c, f = 0,
                    d = a.toLowerCase().match(ia) || [];
                if (j.isFunction(b))
                    for (; c = d[f++];) "+" === c[0] ? (c = c.slice(1) || "*", (n[c] = n[c] || []).unshift(b)) : (n[c] = n[c] || []).push(b)
            }
        }

        function V(n, a, b, c) {
            function f(g) {
                var e;
                d[g] = !0;
                j.each(n[g] || [], function(n, g) {
                    var k = g(a, b, c);
                    if ("string" === typeof k && !h && !d[k]) return a.dataTypes.unshift(k), f(k), !1;
                    if (h) return !(e = k)
                });
                return e
            }
            var d = {},
                h = n === Ib;
            return f(a.dataTypes[0]) || !d["*"] && f("*")
        }

        function G(n, a) {
            var b, c, f = j.ajaxSettings.flatOptions || {};
            for (c in a) a[c] !==
                e && ((f[c] ? n : b || (b = {}))[c] = a[c]);
            b && j.extend(!0, n, b);
            return n
        }

        function Y() {
            try {
                return new a.XMLHttpRequest
            } catch (n) {}
        }

        function sa() {
            setTimeout(function() {
                Ha = e
            });
            return Ha = j.now()
        }

        function ma(n, a, b) {
            var c, f, d = 0,
                h = kb.length,
                g = j.Deferred().always(function() {
                    delete e.elem
                }),
                e = function() {
                    if (f) return !1;
                    for (var a = Ha || sa(), a = Math.max(0, k.startTime + k.duration - a), b = 1 - (a / k.duration || 0), c = 0, d = k.tweens.length; c < d; c++) k.tweens[c].run(b);
                    g.notifyWith(n, [k, b, a]);
                    if (1 > b && d) return a;
                    g.resolveWith(n, [k]);
                    return !1
                },
                k =
                g.promise({
                    elem: n,
                    props: j.extend({}, a),
                    opts: j.extend(!0, {
                        specialEasing: {}
                    }, b),
                    originalProperties: a,
                    originalOptions: b,
                    startTime: Ha || sa(),
                    duration: b.duration,
                    tweens: [],
                    createTween: function(a, b) {
                        var c = j.Tween(n, k.opts, a, b, k.opts.specialEasing[a] || k.opts.easing);
                        k.tweens.push(c);
                        return c
                    },
                    stop: function(a) {
                        var b = 0,
                            c = a ? k.tweens.length : 0;
                        if (f) return this;
                        for (f = !0; b < c; b++) k.tweens[b].run(1);
                        a ? g.resolveWith(n, [k, a]) : g.rejectWith(n, [k, a]);
                        return this
                    }
                }),
                a = k.props,
                b = k.opts.specialEasing,
                l, m, s, p;
            for (c in a)
                if (m =
                    j.camelCase(c), s = b[m], l = a[c], j.isArray(l) && (s = l[1], l = a[c] = l[0]), c !== m && (a[m] = l, delete a[c]), (p = j.cssHooks[m]) && "expand" in p)
                    for (c in l = p.expand(l), delete a[m], l) c in a || (a[c] = l[c], b[c] = s);
                else b[m] = s;
            for (; d < h; d++)
                if (c = kb[d].call(k, n, a, k.opts)) return c;
            var w = k;
            j.each(a, function(n, a) {
                for (var b = (Va[n] || []).concat(Va["*"]), c = 0, f = b.length; c < f && !b[c].call(w, n, a); c++);
            });
            j.isFunction(k.opts.start) && k.opts.start.call(n, k);
            j.fx.timer(j.extend(e, {
                elem: n,
                anim: k,
                queue: k.opts.queue
            }));
            return k.progress(k.opts.progress).done(k.opts.done,
                k.opts.complete).fail(k.opts.fail).always(k.opts.always)
        }

        function N(n, a, b, c, f) {
            return new N.prototype.init(n, a, b, c, f)
        }

        function ja(n, a) {
            for (var b, c = {
                    height: n
                }, f = 0, a = a ? 1 : 0; 4 > f; f += 2 - a) b = Ba[f], c["margin" + b] = c["padding" + b] = n;
            a && (c.opacity = c.width = n);
            return c
        }

        function ga(n) {
            return j.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
        }
        var W, aa, E = typeof e,
            A = a.document,
            J = a.location,
            ba = a.jQuery,
            ka = a.$,
            P = {},
            wa = [],
            lb = wa.concat,
            Wa = wa.push,
            ta = wa.slice,
            mb = wa.indexOf,
            Jb = P.toString,
            Ea = P.hasOwnProperty,
            Xa =
            "1.9.1".trim,
            j = function(n, a) {
                return new j.fn.init(n, a, aa)
            },
            Ia = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ia = /\S+/g,
            Kb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            Lb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            nb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Mb = /^[\],:{}\s]*$/,
            Nb = /(?:^|:|,)(?:\s*\[)+/g,
            Ob = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            Pb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            Qb = /^-ms-/,
            Rb = /-([\da-z])/gi,
            Sb = function(n, a) {
                return a.toUpperCase()
            },
            na = function(n) {
                if (A.addEventListener || "load" === n.type ||
                    "complete" === A.readyState) ob(), j.ready()
            },
            ob = function() {
                A.addEventListener ? (A.removeEventListener("DOMContentLoaded", na, !1), a.removeEventListener("load", na, !1)) : (A.detachEvent("onreadystatechange", na), a.detachEvent("onload", na))
            };
        j.fn = j.prototype = {
            jquery: "1.9.1",
            constructor: j,
            init: function(n, a, b) {
                var c;
                if (!n) return this;
                if ("string" === typeof n) {
                    if ((c = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && 3 <= n.length ? [null, n, null] : Lb.exec(n)) && (c[1] || !a)) {
                        if (c[1]) {
                            if (a = a instanceof j ? a[0] : a, j.merge(this, j.parseHTML(c[1],
                                    a && a.nodeType ? a.ownerDocument || a : A, !0)), nb.test(c[1]) && j.isPlainObject(a))
                                for (c in a)
                                    if (j.isFunction(this[c])) this[c](a[c]);
                                    else this.attr(c, a[c])
                        } else {
                            if ((a = A.getElementById(c[2])) && a.parentNode) {
                                if (a.id !== c[2]) return b.find(n);
                                this.length = 1;
                                this[0] = a
                            }
                            this.context = A;
                            this.selector = n
                        }
                        return this
                    }
                    return !a || a.jquery ? (a || b).find(n) : this.constructor(a).find(n)
                }
                if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
                if (j.isFunction(n)) return b.ready(n);
                n.selector !== e && (this.selector = n.selector, this.context =
                    n.context);
                return j.makeArray(n, this)
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return ta.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a) {
                a = j.merge(this.constructor(), a);
                a.prevObject = this;
                a.context = this.context;
                return a
            },
            each: function(a, b) {
                return j.each(this, a, b)
            },
            ready: function(a) {
                j.ready.promise().done(a);
                return this
            },
            slice: function() {
                return this.pushStack(ta.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    a = +a + (0 > a ? b : 0);
                return this.pushStack(0 <= a && a < b ? [this[a]] : [])
            },
            map: function(a) {
                return this.pushStack(j.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Wa,
            sort: [].sort,
            splice: [].splice
        };
        j.fn.init.prototype = j.fn;
        j.extend = j.fn.extend = function() {
            var a, b, c, f, d, h = arguments[0] || {},
                g = 1,
                k = arguments.length,
                l = !1;
            "boolean" === typeof h && (l = h, h = arguments[1] || {}, g = 2);
            "object" !==
            typeof h && !j.isFunction(h) && (h = {});
            k === g && (h = this, --g);
            for (; g < k; g++)
                if (null != (d = arguments[g]))
                    for (f in d) a = h[f], c = d[f], h !== c && (l && c && (j.isPlainObject(c) || (b = j.isArray(c))) ? (b ? (b = !1, a = a && j.isArray(a) ? a : []) : a = a && j.isPlainObject(a) ? a : {}, h[f] = j.extend(l, a, c)) : c !== e && (h[f] = c));
            return h
        };
        j.extend({
            noConflict: function(n) {
                a.$ === j && (a.$ = ka);
                n && a.jQuery === j && (a.jQuery = ba);
                return j
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? j.readyWait++ : j.ready(!0)
            },
            ready: function(a) {
                if (!(!0 === a ? --j.readyWait : j.isReady)) {
                    if (!A.body) return setTimeout(j.ready);
                    j.isReady = !0;
                    !0 !== a && 0 < --j.readyWait || (W.resolveWith(A, [j]), j.fn.trigger && j(A).trigger("ready").off("ready"))
                }
            },
            isFunction: function(a) {
                return "function" === j.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === j.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? String(a) : "object" === typeof a || "function" === typeof a ? P[Jb.call(a)] || "object" : typeof a
            },
            isPlainObject: function(a) {
                if (!a || "object" !==
                    j.type(a) || a.nodeType || j.isWindow(a)) return !1;
                try {
                    if (a.constructor && !Ea.call(a, "constructor") && !Ea.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (b) {
                    return !1
                }
                for (var c in a);
                return c === e || Ea.call(a, c)
            },
            isEmptyObject: function(a) {
                for (var b in a) return !1;
                return !0
            },
            error: function(a) {
                throw Error(a);
            },
            parseHTML: function(a, b, c) {
                if (!a || "string" !== typeof a) return null;
                "boolean" === typeof b && (c = b, b = !1);
                var b = b || A,
                    f = nb.exec(a),
                    c = !c && [];
                if (f) return [b.createElement(f[1])];
                f = j.buildFragment([a], b,
                    c);
                c && j(c).remove();
                return j.merge([], f.childNodes)
            },
            parseJSON: function(n) {
                if (a.JSON && a.JSON.parse) return a.JSON.parse(n);
                if (null === n) return n;
                if ("string" === typeof n && (n = j.trim(n)) && Mb.test(n.replace(Ob, "@").replace(Pb, "]").replace(Nb, ""))) return (new Function("return " + n))();
                j.error("Invalid JSON: " + n)
            },
            parseXML: function(n) {
                var b, c;
                if (!n || "string" !== typeof n) return null;
                try {
                    a.DOMParser ? (c = new DOMParser, b = c.parseFromString(n, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(n))
                } catch (f) {
                    b =
                        e
                }(!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && j.error("Invalid XML: " + n);
                return b
            },
            noop: function() {},
            globalEval: function(n) {
                n && j.trim(n) && (a.execScript || function(n) {
                    a.eval.call(a, n)
                })(n)
            },
            camelCase: function(a) {
                return a.replace(Qb, "ms-").replace(Rb, Sb)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, f) {
                var d, h = 0,
                    g = a.length;
                d = c(a);
                if (f)
                    if (d)
                        for (; h < g && !(d = b.apply(a[h], f), !1 === d); h++);
                    else
                        for (h in a) {
                            if (d = b.apply(a[h],
                                    f), !1 === d) break
                        } else if (d)
                            for (; h < g && !(d = b.call(a[h], h, a[h]), !1 === d); h++);
                        else
                            for (h in a)
                                if (d = b.call(a[h], h, a[h]), !1 === d) break;
                return a
            },
            trim: Xa && !Xa.call("\ufeff\u00a0") ? function(a) {
                return null == a ? "" : Xa.call(a)
            } : function(a) {
                return null == a ? "" : (a + "").replace(Kb, "")
            },
            makeArray: function(a, b) {
                var f = b || [];
                null != a && (c(Object(a)) ? j.merge(f, "string" === typeof a ? [a] : a) : Wa.call(f, a));
                return f
            },
            inArray: function(a, b, c) {
                var f;
                if (b) {
                    if (mb) return mb.call(b, a, c);
                    f = b.length;
                    for (c = c ? 0 > c ? Math.max(0, f + c) : c : 0; c < f; c++)
                        if (c in
                            b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = b.length,
                    f = a.length,
                    d = 0;
                if ("number" === typeof c)
                    for (; d < c; d++) a[f++] = b[d];
                else
                    for (; b[d] !== e;) a[f++] = b[d++];
                a.length = f;
                return a
            },
            grep: function(a, b, c) {
                for (var f, d = [], h = 0, g = a.length, c = !!c; h < g; h++) f = !!b(a[h], h), c !== f && d.push(a[h]);
                return d
            },
            map: function(a, b, f) {
                var d, h = 0,
                    g = a.length,
                    e = [];
                if (c(a))
                    for (; h < g; h++) d = b(a[h], h, f), null != d && (e[e.length] = d);
                else
                    for (h in a) d = b(a[h], h, f), null != d && (e[e.length] = d);
                return lb.apply([], e)
            },
            guid: 1,
            proxy: function(a,
                b) {
                var c, f;
                "string" === typeof b && (f = a[b], b = a, a = f);
                if (!j.isFunction(a)) return e;
                c = ta.call(arguments, 2);
                f = function() {
                    return a.apply(b || this, c.concat(ta.call(arguments)))
                };
                f.guid = a.guid = a.guid || j.guid++;
                return f
            },
            access: function(a, b, c, f, d, h, g) {
                var k = 0,
                    l = a.length,
                    m = null == c;
                if ("object" === j.type(c))
                    for (k in d = !0, c) j.access(a, b, k, c[k], !0, h, g);
                else if (f !== e && (d = !0, j.isFunction(f) || (g = !0), m && (g ? (b.call(a, f), b = null) : (m = b, b = function(a, n, b) {
                        return m.call(j(a), b)
                    })), b))
                    for (; k < l; k++) b(a[k], c, g ? f : f.call(a[k], k, b(a[k],
                        c)));
                return d ? a : m ? b.call(a) : l ? b(a[0], c) : h
            },
            now: function() {
                return (new Date).getTime()
            }
        });
        j.ready.promise = function(n) {
            if (!W)
                if (W = j.Deferred(), "complete" === A.readyState) setTimeout(j.ready);
                else if (A.addEventListener) A.addEventListener("DOMContentLoaded", na, !1), a.addEventListener("load", na, !1);
            else {
                A.attachEvent("onreadystatechange", na);
                a.attachEvent("onload", na);
                var b = !1;
                try {
                    b = null == a.frameElement && A.documentElement
                } catch (c) {}
                b && b.doScroll && function Sc() {
                    if (!j.isReady) {
                        try {
                            b.doScroll("left")
                        } catch (a) {
                            return setTimeout(Sc,
                                50)
                        }
                        ob();
                        j.ready()
                    }
                }()
            }
            return W.promise(n)
        };
        j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            P["[object " + b + "]"] = b.toLowerCase()
        });
        aa = j(A);
        var pb = {};
        j.Callbacks = function(a) {
            var b;
            if ("string" === typeof a) {
                if (!(b = pb[a])) {
                    b = a;
                    var c = pb[b] = {};
                    j.each(b.match(ia) || [], function(a, n) {
                        c[n] = !0
                    });
                    b = c
                }
            } else b = j.extend({}, a);
            var a = b,
                f, d, h, g, k, l, m = [],
                s = !a.once && [],
                p = function(b) {
                    d = a.memory && b;
                    h = !0;
                    k = l || 0;
                    l = 0;
                    g = m.length;
                    for (f = !0; m && k < g; k++)
                        if (!1 === m[k].apply(b[0], b[1]) &&
                            a.stopOnFalse) {
                            d = !1;
                            break
                        }
                    f = !1;
                    m && (s ? s.length && p(s.shift()) : d ? m = [] : w.disable())
                },
                w = {
                    add: function() {
                        if (m) {
                            var b = m.length;
                            (function Xc(b) {
                                j.each(b, function(b, c) {
                                    var f = j.type(c);
                                    "function" === f ? (!a.unique || !w.has(c)) && m.push(c) : c && (c.length && "string" !== f) && Xc(c)
                                })
                            })(arguments);
                            f ? g = m.length : d && (l = b, p(d))
                        }
                        return this
                    },
                    remove: function() {
                        m && j.each(arguments, function(a, b) {
                            for (var n; - 1 < (n = j.inArray(b, m, n));) m.splice(n, 1), f && (n <= g && g--, n <= k && k--)
                        });
                        return this
                    },
                    has: function(a) {
                        return a ? -1 < j.inArray(a, m) : !(!m ||
                            !m.length)
                    },
                    empty: function() {
                        m = [];
                        return this
                    },
                    disable: function() {
                        m = s = d = e;
                        return this
                    },
                    disabled: function() {
                        return !m
                    },
                    lock: function() {
                        s = e;
                        d || w.disable();
                        return this
                    },
                    locked: function() {
                        return !s
                    },
                    fireWith: function(a, n) {
                        n = n || [];
                        n = [a, n.slice ? n.slice() : n];
                        if (m && (!h || s)) f ? s.push(n) : p(n);
                        return this
                    },
                    fire: function() {
                        w.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return w
        };
        j.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", j.Callbacks("once memory"), "resolved"],
                        ["reject", "fail",
                            j.Callbacks("once memory"), "rejected"
                        ],
                        ["notify", "progress", j.Callbacks("memory")]
                    ],
                    c = "pending",
                    f = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            d.done(arguments).fail(arguments);
                            return this
                        },
                        then: function() {
                            var a = arguments;
                            return j.Deferred(function(n) {
                                j.each(b, function(b, c) {
                                    var h = c[0],
                                        g = j.isFunction(a[b]) && a[b];
                                    d[c[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        if (a && j.isFunction(a.promise)) a.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                                        else n[h + "With"](this === f ? n.promise() : this,
                                            g ? [a] : arguments)
                                    })
                                });
                                a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? j.extend(a, f) : f
                        }
                    },
                    d = {};
                f.pipe = f.then;
                j.each(b, function(a, n) {
                    var h = n[2],
                        g = n[3];
                    f[n[1]] = h.add;
                    g && h.add(function() {
                        c = g
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                    d[n[0]] = function() {
                        d[n[0] + "With"](this === d ? f : this, arguments);
                        return this
                    };
                    d[n[0] + "With"] = h.fireWith
                });
                f.promise(d);
                a && a.call(d, d);
                return d
            },
            when: function(a) {
                var b = 0,
                    c = ta.call(arguments),
                    f = c.length,
                    d = 1 !== f || a && j.isFunction(a.promise) ? f : 0,
                    h = 1 === d ? a : j.Deferred(),
                    g = function(a, n, b) {
                        return function(c) {
                            n[a] =
                                this;
                            b[a] = 1 < arguments.length ? ta.call(arguments) : c;
                            b === e ? h.notifyWith(n, b) : --d || h.resolveWith(n, b)
                        }
                    },
                    e, k, l;
                if (1 < f) {
                    e = Array(f);
                    k = Array(f);
                    for (l = Array(f); b < f; b++) c[b] && j.isFunction(c[b].promise) ? c[b].promise().done(g(b, l, c)).fail(h.reject).progress(g(b, k, e)) : --d
                }
                d || h.resolveWith(l, c);
                return h.promise()
            }
        });
        var Tb = j,
            Ya;
        var O, Ja, oa, X, Ka, La, Ma, Za, qb, $a, D = A.createElement("div");
        D.setAttribute("className", "t");
        D.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        Ja = D.getElementsByTagName("*");
        oa = D.getElementsByTagName("a")[0];
        if (!Ja || !oa || !Ja.length) Ya = {};
        else {
            Ka = A.createElement("select");
            Ma = Ka.appendChild(A.createElement("option"));
            X = D.getElementsByTagName("input")[0];
            oa.style.cssText = "top:1px;float:left;opacity:.5";
            O = {
                getSetAttribute: "t" !== D.className,
                leadingWhitespace: 3 === D.firstChild.nodeType,
                tbody: !D.getElementsByTagName("tbody").length,
                htmlSerialize: !!D.getElementsByTagName("link").length,
                style: /top/.test(oa.getAttribute("style")),
                hrefNormalized: "/a" === oa.getAttribute("href"),
                opacity: /^0.5/.test(oa.style.opacity),
                cssFloat: !!oa.style.cssFloat,
                checkOn: !!X.value,
                optSelected: Ma.selected,
                enctype: !!A.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== A.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === A.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            };
            X.checked = !0;
            O.noCloneChecked = X.cloneNode(!0).checked;
            Ka.disabled = !0;
            O.optDisabled = !Ma.disabled;
            try {
                delete D.test
            } catch (uc) {
                O.deleteExpando = !1
            }
            X = A.createElement("input");
            X.setAttribute("value", "");
            O.input = "" === X.getAttribute("value");
            X.value = "t";
            X.setAttribute("type", "radio");
            O.radioValue = "t" === X.value;
            X.setAttribute("checked", "t");
            X.setAttribute("name", "t");
            La = A.createDocumentFragment();
            La.appendChild(X);
            O.appendChecked = X.checked;
            O.checkClone = La.cloneNode(!0).cloneNode(!0).lastChild.checked;
            D.attachEvent && (D.attachEvent("onclick", function() {
                O.noCloneEvent = !1
            }), D.cloneNode(!0).click());
            for ($a in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) D.setAttribute(Za =
                "on" + $a, "t"), O[$a + "Bubbles"] = Za in a || !1 === D.attributes[Za].expando;
            D.style.backgroundClip = "content-box";
            D.cloneNode(!0).style.backgroundClip = "";
            O.clearCloneStyle = "content-box" === D.style.backgroundClip;
            j(function() {
                var b, c, f = A.getElementsByTagName("body")[0];
                f && (b = A.createElement("div"), b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(b).appendChild(D), D.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = D.getElementsByTagName("td"),
                    c[0].style.cssText = "padding:0;margin:0;border:0;display:none", qb = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", O.reliableHiddenOffsets = qb && 0 === c[0].offsetHeight, D.innerHTML = "", D.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing = 4 === D.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, a.getComputedStyle && (O.pixelPosition =
                        "1%" !== (a.getComputedStyle(D, null) || {}).top, O.boxSizingReliable = "4px" === (a.getComputedStyle(D, null) || {
                            width: "4px"
                        }).width, c = D.appendChild(A.createElement("div")), c.style.cssText = D.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", c.style.marginRight = c.style.width = "0", D.style.width = "1px", O.reliableMarginRight = !parseFloat((a.getComputedStyle(c, null) || {}).marginRight)), typeof D.style.zoom !== E && (D.innerHTML = "",
                        D.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === D.offsetWidth, D.style.display = "block", D.innerHTML = "<div></div>", D.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== D.offsetWidth, O.inlineBlockNeedsLayout && (f.style.zoom = 1)), f.removeChild(b), D = null)
            });
            Ja = Ka = La = Ma = oa = X = null;
            Ya = O
        }
        Tb.support = Ya;
        var Gb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Fb = /([A-Z])/g;
        j.extend({
            cache: {},
            expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? j.cache[a[j.expando]] : a[j.expando];
                return !!a && !l(a)
            },
            data: function(a, c, f) {
                return b(a, c, f)
            },
            removeData: function(a, b) {
                return d(a, b)
            },
            _data: function(a, c, f) {
                return b(a, c, f, !0)
            },
            _removeData: function(a, b) {
                return d(a, b, !0)
            },
            acceptData: function(a) {
                if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
                var b = a.nodeName &&
                    j.noData[a.nodeName.toLowerCase()];
                return !b || !0 !== b && a.getAttribute("classid") === b
            }
        });
        j.fn.extend({
            data: function(a, b) {
                var c, f, d = this[0],
                    h = 0,
                    k = null;
                if (a === e) {
                    if (this.length && (k = j.data(d), 1 === d.nodeType && !j._data(d, "parsedAttrs"))) {
                        for (c = d.attributes; h < c.length; h++) f = c[h].name, f.indexOf("data-") || (f = j.camelCase(f.slice(5)), g(d, f, k[f]));
                        j._data(d, "parsedAttrs", !0)
                    }
                    return k
                }
                return "object" === typeof a ? this.each(function() {
                    j.data(this, a)
                }) : j.access(this, function(b) {
                    if (b === e) return d ? g(d, a, j.data(d, a)) : null;
                    this.each(function() {
                        j.data(this, a, b)
                    })
                }, null, b, 1 < arguments.length, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    j.removeData(this, a)
                })
            }
        });
        j.extend({
            queue: function(a, b, c) {
                var f;
                if (a) return b = (b || "fx") + "queue", f = j._data(a, b), c && (!f || j.isArray(c) ? f = j._data(a, b, j.makeArray(c)) : f.push(c)), f || []
            },
            dequeue: function(a, b) {
                var b = b || "fx",
                    c = j.queue(a, b),
                    f = c.length,
                    d = c.shift(),
                    h = j._queueHooks(a, b),
                    g = function() {
                        j.dequeue(a, b)
                    };
                "inprogress" === d && (d = c.shift(), f--);
                if (h.cur = d) "fx" === b && c.unshift("inprogress"),
                    delete h.stop, d.call(a, g, h);
                !f && h && h.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return j._data(a, c) || j._data(a, c, {
                    empty: j.Callbacks("once memory").add(function() {
                        j._removeData(a, b + "queue");
                        j._removeData(a, c)
                    })
                })
            }
        });
        j.fn.extend({
            queue: function(a, b) {
                var c = 2;
                "string" !== typeof a && (b = a, a = "fx", c--);
                return arguments.length < c ? j.queue(this[0], a) : b === e ? this : this.each(function() {
                    var c = j.queue(this, a, b);
                    j._queueHooks(this, a);
                    "fx" === a && "inprogress" !== c[0] && j.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    j.dequeue(this,
                        a)
                })
            },
            delay: function(a, b) {
                a = j.fx ? j.fx.speeds[a] || a : a;
                return this.queue(b || "fx", function(b, c) {
                    var f = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(f)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, f = 1,
                    d = j.Deferred(),
                    h = this,
                    g = this.length,
                    k = function() {
                        --f || d.resolveWith(h, [h])
                    };
                "string" !== typeof a && (b = a, a = e);
                for (a = a || "fx"; g--;)
                    if ((c = j._data(h[g], a + "queueHooks")) && c.empty) f++, c.empty.add(k);
                k();
                return d.promise(b)
            }
        });
        var xa, rb, ab = /[\t\r\n]/g,
            Ub = /\r/g,
            Vb = /^(?:input|select|textarea|button|object)$/i,
            Wb = /^(?:a|area)$/i,
            sb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            bb = /^(?:checked|selected)$/i,
            ua = j.support.getSetAttribute,
            cb = j.support.input;
        j.fn.extend({
            attr: function(a, b) {
                return j.access(this, j.attr, a, b, 1 < arguments.length)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    j.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return j.access(this, j.prop, a, b, 1 < arguments.length)
            },
            removeProp: function(a) {
                a = j.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] =
                            e, delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, c, f, d, h, g = 0,
                    e = this.length;
                b = "string" === typeof a && a;
                if (j.isFunction(a)) return this.each(function(b) {
                    j(this).addClass(a.call(this, b, this.className))
                });
                if (b)
                    for (b = (a || "").match(ia) || []; g < e; g++)
                        if (c = this[g], f = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                            for (h = 0; d = b[h++];) 0 > f.indexOf(" " + d + " ") && (f += d + " ");
                            c.className = j.trim(f)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, f, d, h, g = 0,
                    e = this.length;
                b = 0 === arguments.length ||
                    "string" === typeof a && a;
                if (j.isFunction(a)) return this.each(function(b) {
                    j(this).removeClass(a.call(this, b, this.className))
                });
                if (b)
                    for (b = (a || "").match(ia) || []; g < e; g++)
                        if (c = this[g], f = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                            for (h = 0; d = b[h++];)
                                for (; 0 <= f.indexOf(" " + d + " ");) f = f.replace(" " + d + " ", " ");
                            c.className = a ? j.trim(f) : ""
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    f = "boolean" === typeof b;
                return j.isFunction(a) ? this.each(function(c) {
                    j(this).toggleClass(a.call(this,
                        c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var d, h = 0, g = j(this), e = b, k = a.match(ia) || []; d = k[h++];) e = f ? e : !g.hasClass(d), g[e ? "addClass" : "removeClass"](d);
                    else if (c === E || "boolean" === c) this.className && j._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : j._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)
                    if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(ab, " ").indexOf(a)) return !0;
                return !1
            },
            val: function(a) {
                var b, c, f, d = this[0];
                if (arguments.length) return f = j.isFunction(a), this.each(function(b) {
                    var d = j(this);
                    if (1 === this.nodeType && (b = f ? a.call(this, b, d.val()) : a, null == b ? b = "" : "number" === typeof b ? b += "" : j.isArray(b) && (b = j.map(b, function(a) {
                            return null == a ? "" : a + ""
                        })), c = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], !c || !("set" in c) || c.set(this, b, "value") === e)) this.value = b
                });
                if (d) {
                    if ((c = j.valHooks[d.type] || j.valHooks[d.nodeName.toLowerCase()]) && "get" in c && (b = c.get(d, "value")) !==
                        e) return b;
                    b = d.value;
                    return "string" === typeof b ? b.replace(Ub, "") : null == b ? "" : b
                }
            }
        });
        j.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c = a.options, f = a.selectedIndex, d = (a = "select-one" === a.type || 0 > f) ? null : [], h = a ? f + 1 : c.length, g = 0 > f ? h : a ? f : 0; g < h; g++)
                            if (b = c[g], (b.selected || g === f) && (j.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !j.nodeName(b.parentNode, "optgroup"))) {
                                b =
                                    j(b).val();
                                if (a) return b;
                                d.push(b)
                            }
                        return d
                    },
                    set: function(a, b) {
                        var c = j.makeArray(b);
                        j(a).find("option").each(function() {
                            this.selected = 0 <= j.inArray(j(this).val(), c)
                        });
                        c.length || (a.selectedIndex = -1);
                        return c
                    }
                }
            },
            attr: function(a, b, c) {
                var f, d, h;
                d = a.nodeType;
                if (a && !(3 === d || 8 === d || 2 === d)) {
                    if (typeof a.getAttribute === E) return j.prop(a, b, c);
                    if (d = 1 !== d || !j.isXMLDoc(a)) b = b.toLowerCase(), f = j.attrHooks[b] || (sb.test(b) ? rb : xa);
                    if (c !== e)
                        if (null === c) j.removeAttr(a, b);
                        else {
                            if (f && d && "set" in f && (h = f.set(a, c, b)) !== e) return h;
                            a.setAttribute(b, c + "");
                            return c
                        } else {
                        if (f && d && "get" in f && null !== (h = f.get(a, b))) return h;
                        typeof a.getAttribute !== E && (h = a.getAttribute(b));
                        return null == h ? e : h
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, f, d = 0,
                    h = b && b.match(ia);
                if (h && 1 === a.nodeType)
                    for (; c = h[d++];) f = j.propFix[c] || c, sb.test(c) ? !ua && bb.test(c) ? a[j.camelCase("default-" + c)] = a[f] = !1 : a[f] = !1 : j.attr(a, c, ""), a.removeAttribute(ua ? c : f)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!j.support.radioValue && "radio" === b && j.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type",
                                b);
                            c && (a.value = c);
                            return b
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, c) {
                var f, d, h;
                h = a.nodeType;
                if (a && !(3 === h || 8 === h || 2 === h)) {
                    if (h = 1 !== h || !j.isXMLDoc(a)) b = j.propFix[b] || b, d = j.propHooks[b];
                    return c !== e ? d && "set" in d && (f = d.set(a, c, b)) !== e ? f : a[b] = c : d && "get" in
                        d && null !== (f = d.get(a, b)) ? f : a[b]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Vb.test(a.nodeName) || Wb.test(a.nodeName) && a.href ? 0 : e
                    }
                }
            }
        });
        rb = {
            get: function(a, b) {
                var c = j.prop(a, b),
                    f = "boolean" === typeof c && a.getAttribute(b);
                return (c = "boolean" === typeof c ? cb && ua ? null != f : bb.test(b) ? a[j.camelCase("default-" + b)] : !!f : a.getAttributeNode(b)) && !1 !== c.value ? b.toLowerCase() : e
            },
            set: function(a, b, c) {
                !1 === b ? j.removeAttr(a, c) : cb && ua || !bb.test(c) ?
                    a.setAttribute(!ua && j.propFix[c] || c, c) : a[j.camelCase("default-" + c)] = a[c] = !0;
                return c
            }
        };
        if (!cb || !ua) j.attrHooks.value = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return j.nodeName(a, "input") ? a.defaultValue : c && c.specified ? c.value : e
            },
            set: function(a, b, c) {
                if (j.nodeName(a, "input")) a.defaultValue = b;
                else return xa && xa.set(a, b, c)
            }
        };
        ua || (xa = j.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && ("id" === b || "name" === b || "coords" === b ? "" !== c.value : c.specified) ? c.value : e
            },
            set: function(a, b,
                c) {
                var f = a.getAttributeNode(c);
                f || a.setAttributeNode(f = a.ownerDocument.createAttribute(c));
                f.value = b += "";
                return "value" === c || b === a.getAttribute(c) ? b : e
            }
        }, j.attrHooks.contenteditable = {
            get: xa.get,
            set: function(a, b, c) {
                xa.set(a, "" === b ? !1 : b, c)
            }
        }, j.each(["width", "height"], function(a, b) {
            j.attrHooks[b] = j.extend(j.attrHooks[b], {
                set: function(a, c) {
                    if ("" === c) return a.setAttribute(b, "auto"), c
                }
            })
        }));
        j.support.hrefNormalized || (j.each(["href", "src", "width", "height"], function(a, b) {
            j.attrHooks[b] = j.extend(j.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return null == a ? e : a
                }
            })
        }), j.each(["href", "src"], function(a, b) {
            j.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }));
        j.support.style || (j.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || e
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        j.support.optSelected || (j.propHooks.selected = j.extend(j.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
                return null
            }
        }));
        j.support.enctype || (j.propFix.enctype =
            "encoding");
        j.support.checkOn || j.each(["radio", "checkbox"], function() {
            j.valHooks[this] = {
                get: function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            }
        });
        j.each(["radio", "checkbox"], function() {
            j.valHooks[this] = j.extend(j.valHooks[this], {
                set: function(a, b) {
                    if (j.isArray(b)) return a.checked = 0 <= j.inArray(j(a).val(), b)
                }
            })
        });
        var db = /^(?:input|select|textarea)$/i,
            Xb = /^key/,
            Yb = /^(?:mouse|contextmenu)|click/,
            tb = /^(?:focusinfocus|focusoutblur)$/,
            ub = /^([^.]*)(?:\.(.+)|)$/;
        j.event = {
            global: {},
            add: function(a,
                b, c, f, d) {
                var h, g, k, l, m, s, p, w, z;
                if (k = j._data(a)) {
                    c.handler && (l = c, c = l.handler, d = l.selector);
                    c.guid || (c.guid = j.guid++);
                    if (!(g = k.events)) g = k.events = {};
                    if (!(m = k.handle)) m = k.handle = function(a) {
                        return typeof j !== E && (!a || j.event.triggered !== a.type) ? j.event.dispatch.apply(m.elem, arguments) : e
                    }, m.elem = a;
                    b = (b || "").match(ia) || [""];
                    for (k = b.length; k--;) {
                        h = ub.exec(b[k]) || [];
                        w = s = h[1];
                        z = (h[2] || "").split(".").sort();
                        h = j.event.special[w] || {};
                        w = (d ? h.delegateType : h.bindType) || w;
                        h = j.event.special[w] || {};
                        s = j.extend({
                            type: w,
                            origType: s,
                            data: f,
                            handler: c,
                            guid: c.guid,
                            selector: d,
                            needsContext: d && j.expr.match.needsContext.test(d),
                            namespace: z.join(".")
                        }, l);
                        if (!(p = g[w]))
                            if (p = g[w] = [], p.delegateCount = 0, !h.setup || !1 === h.setup.call(a, f, z, m)) a.addEventListener ? a.addEventListener(w, m, !1) : a.attachEvent && a.attachEvent("on" + w, m);
                        h.add && (h.add.call(a, s), s.handler.guid || (s.handler.guid = c.guid));
                        d ? p.splice(p.delegateCount++, 0, s) : p.push(s);
                        j.event.global[w] = !0
                    }
                    a = null
                }
            },
            remove: function(a, b, c, f, d) {
                var h, g, e, k, l, m, s, p, w, z, t, C = j.hasData(a) &&
                    j._data(a);
                if (C && (m = C.events)) {
                    b = (b || "").match(ia) || [""];
                    for (l = b.length; l--;)
                        if (e = ub.exec(b[l]) || [], w = t = e[1], z = (e[2] || "").split(".").sort(), w) {
                            s = j.event.special[w] || {};
                            w = (f ? s.delegateType : s.bindType) || w;
                            p = m[w] || [];
                            e = e[2] && RegExp("(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            for (k = h = p.length; h--;)
                                if (g = p[h], (d || t === g.origType) && (!c || c.guid === g.guid) && (!e || e.test(g.namespace)) && (!f || f === g.selector || "**" === f && g.selector)) p.splice(h, 1), g.selector && p.delegateCount--, s.remove && s.remove.call(a, g);
                            k && !p.length &&
                                ((!s.teardown || !1 === s.teardown.call(a, z, C.handle)) && j.removeEvent(a, w, C.handle), delete m[w])
                        } else
                            for (w in m) j.event.remove(a, w + b[l], c, f, !0);
                    j.isEmptyObject(m) && (delete C.handle, j._removeData(a, "events"))
                }
            },
            trigger: function(b, c, f, d) {
                var h, g, k, l, m, s, p = [f || A],
                    w = Ea.call(b, "type") ? b.type : b;
                m = Ea.call(b, "namespace") ? b.namespace.split(".") : [];
                k = h = f = f || A;
                if (!(3 === f.nodeType || 8 === f.nodeType) && !tb.test(w + j.event.triggered))
                    if (0 <= w.indexOf(".") && (m = w.split("."), w = m.shift(), m.sort()), g = 0 > w.indexOf(":") && "on" +
                        w, b = b[j.expando] ? b : new j.Event(w, "object" === typeof b && b), b.isTrigger = !0, b.namespace = m.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = e, b.target || (b.target = f), c = null == c ? [b] : j.makeArray(c, [b]), m = j.event.special[w] || {}, d || !(m.trigger && !1 === m.trigger.apply(f, c))) {
                        if (!d && !m.noBubble && !j.isWindow(f)) {
                            l = m.delegateType || w;
                            tb.test(l + w) || (k = k.parentNode);
                            for (; k; k = k.parentNode) p.push(k), h = k;
                            if (h === (f.ownerDocument || A)) p.push(h.defaultView || h.parentWindow ||
                                a)
                        }
                        for (s = 0;
                            (k = p[s++]) && !b.isPropagationStopped();) b.type = 1 < s ? l : m.bindType || w, (h = (j._data(k, "events") || {})[b.type] && j._data(k, "handle")) && h.apply(k, c), (h = g && k[g]) && (j.acceptData(k) && h.apply && !1 === h.apply(k, c)) && b.preventDefault();
                        b.type = w;
                        if (!d && !b.isDefaultPrevented() && (!m._default || !1 === m._default.apply(f.ownerDocument, c)) && !("click" === w && j.nodeName(f, "a")) && j.acceptData(f) && g && f[w] && !j.isWindow(f)) {
                            (h = f[g]) && (f[g] = null);
                            j.event.triggered = w;
                            try {
                                f[w]()
                            } catch (z) {}
                            j.event.triggered = e;
                            h && (f[g] = h)
                        }
                        return b.result
                    }
            },
            dispatch: function(a) {
                var a = j.event.fix(a),
                    b, c, f, d, h = [],
                    g = ta.call(arguments);
                b = (j._data(this, "events") || {})[a.type] || [];
                var k = j.event.special[a.type] || {};
                g[0] = a;
                a.delegateTarget = this;
                if (!(k.preDispatch && !1 === k.preDispatch.call(this, a))) {
                    h = j.event.handlers.call(this, a, b);
                    for (b = 0;
                        (f = h[b++]) && !a.isPropagationStopped();) {
                        a.currentTarget = f.elem;
                        for (d = 0;
                            (c = f.handlers[d++]) && !a.isImmediatePropagationStopped();)
                            if (!a.namespace_re || a.namespace_re.test(c.namespace))
                                if (a.handleObj = c, a.data = c.data, c = ((j.event.special[c.origType] || {}).handle || c.handler).apply(f.elem, g), c !== e && !1 === (a.result = c)) a.preventDefault(), a.stopPropagation()
                    }
                    k.postDispatch && k.postDispatch.call(this, a);
                    return a.result
                }
            },
            handlers: function(a, b) {
                var c, f, d, h, g = [],
                    k = b.delegateCount,
                    l = a.target;
                if (k && l.nodeType && (!a.button || "click" !== a.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== a.type)) {
                            d = [];
                            for (h = 0; h < k; h++) f = b[h], c = f.selector + " ", d[c] === e && (d[c] = f.needsContext ? 0 <= j(c, this).index(l) : j.find(c, this, null, [l]).length),
                                d[c] && d.push(f);
                            d.length && g.push({
                                elem: l,
                                handlers: d
                            })
                        }
                k < b.length && g.push({
                    elem: this,
                    handlers: b.slice(k)
                });
                return g
            },
            fix: function(a) {
                if (a[j.expando]) return a;
                var b, c, f;
                b = a.type;
                var d = a,
                    h = this.fixHooks[b];
                h || (this.fixHooks[b] = h = Yb.test(b) ? this.mouseHooks : Xb.test(b) ? this.keyHooks : {});
                f = h.props ? this.props.concat(h.props) : this.props;
                a = new j.Event(d);
                for (b = f.length; b--;) c = f[b], a[c] = d[c];
                a.target || (a.target = d.srcElement || A);
                3 === a.target.nodeType && (a.target = a.target.parentNode);
                a.metaKey = !!a.metaKey;
                return h.filter ?
                    h.filter(a, d) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: ["char", "charCode", "key", "keyCode"],
                filter: function(a, b) {
                    null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, f, d = b.button,
                        h = b.fromElement;
                    null ==
                        a.pageX && null != b.clientX && (c = a.target.ownerDocument || A, f = c.documentElement, c = c.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0));
                    !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h);
                    !a.which && d !== e && (a.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
                    return a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (j.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== A.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === A.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== e && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, f) {
                a = j.extend(new j.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                f ? j.event.trigger(a, null, b) : j.event.dispatch.call(b, a);
                a.isDefaultPrevented() &&
                    c.preventDefault()
            }
        };
        j.removeEvent = A.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            b = "on" + b;
            a.detachEvent && (typeof a[b] === E && (a[b] = null), a.detachEvent(b, c))
        };
        j.Event = function(a, b) {
            if (!(this instanceof j.Event)) return new j.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? f : h) : this.type = a;
            b && j.extend(this, b);
            this.timeStamp =
                a && a.timeStamp || j.now();
            this[j.expando] = !0
        };
        j.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = f;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = f;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = f;
                this.stopPropagation()
            }
        };
        j.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            j.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, f = a.relatedTarget,
                        d = a.handleObj;
                    if (!f || f !== this && !j.contains(this, f)) a.type = d.origType, c = d.handler.apply(this, arguments), a.type = b;
                    return c
                }
            }
        });
        j.support.submitBubbles || (j.event.special.submit = {
            setup: function() {
                if (j.nodeName(this, "form")) return !1;
                j.event.add(this, "click._submit keypress._submit", function(a) {
                    a = a.target;
                    if ((a = j.nodeName(a, "input") || j.nodeName(a, "button") ?
                            a.form : e) && !j._data(a, "submitBubbles")) j.event.add(a, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), j._data(a, "submitBubbles", !0)
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && j.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (j.nodeName(this, "form")) return !1;
                j.event.remove(this, "._submit")
            }
        });
        j.support.changeBubbles || (j.event.special.change = {
            setup: function() {
                if (db.test(this.nodeName)) {
                    if ("checkbox" === this.type || "radio" ===
                        this.type) j.event.add(this, "propertychange._change", function(a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                    }), j.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1);
                        j.event.simulate("change", this, a, !0)
                    });
                    return !1
                }
                j.event.add(this, "beforeactivate._change", function(a) {
                    a = a.target;
                    db.test(a.nodeName) && !j._data(a, "changeBubbles") && (j.event.add(a, "change._change", function(a) {
                        this.parentNode && (!a.isSimulated && !a.isTrigger) && j.event.simulate("change",
                            this.parentNode, a, !0)
                    }), j._data(a, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                j.event.remove(this, "._change");
                return !db.test(this.nodeName)
            }
        });
        j.support.focusinBubbles || j.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                f = function(a) {
                    j.event.simulate(b, a.target, j.event.fix(a), !0)
                };
            j.event.special[b] = {
                setup: function() {
                    0 === c++ &&
                        A.addEventListener(a, f, !0)
                },
                teardown: function() {
                    0 === --c && A.removeEventListener(a, f, !0)
                }
            }
        });
        j.fn.extend({
            on: function(a, b, c, f, d) {
                var g, k;
                if ("object" === typeof a) {
                    "string" !== typeof b && (c = c || b, b = e);
                    for (g in a) this.on(g, b, c, a[g], d);
                    return this
                }
                null == c && null == f ? (f = b, c = b = e) : null == f && ("string" === typeof b ? (f = c, c = e) : (f = c, c = b, b = e));
                if (!1 === f) f = h;
                else if (!f) return this;
                1 === d && (k = f, f = function(a) {
                    j().off(a);
                    return k.apply(this, arguments)
                }, f.guid = k.guid || (k.guid = j.guid++));
                return this.each(function() {
                    j.event.add(this,
                        a, f, c, b)
                })
            },
            one: function(a, b, c, f) {
                return this.on(a, b, c, f, 1)
            },
            off: function(a, b, c) {
                var f;
                if (a && a.preventDefault && a.handleObj) return f = a.handleObj, j(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                if ("object" === typeof a) {
                    for (f in a) this.off(f, b, a[f]);
                    return this
                }
                if (!1 === b || "function" === typeof b) c = b, b = e;
                !1 === c && (c = h);
                return this.each(function() {
                    j.event.remove(this, a, c, b)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a,
                    null, b)
            },
            delegate: function(a, b, c, f) {
                return this.on(b, a, c, f)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    j.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c) return j.event.trigger(a, b, c, !0)
            }
        });
        var eb = a,
            fb = function() {
                var a, b = [];
                return a = function(c, f) {
                    b.push(c += " ") > F.cacheLength && delete a[b.shift()];
                    return a[c] = f
                }
            },
            ea = function(a) {
                a[Q] = !0;
                return a
            },
            pa = function(a) {
                var b = ca.createElement("div");
                try {
                    return a(b)
                } catch (c) {
                    return !1
                } finally {}
            },
            H = function(a, b, c, f) {
                var d, h, g, e, k;
                (b ? b.ownerDocument || b : Fa) !== ca && Na(b);
                b = b || ca;
                c = c || [];
                if (!a || "string" !== typeof a) return c;
                if (1 !== (e = b.nodeType) && 9 !== e) return [];
                if (!la && !f) {
                    if (d = Yc.exec(a))
                        if (g = d[1])
                            if (9 === e)
                                if ((h = b.getElementById(g)) && h.parentNode) {
                                    if (h.id === g) return c.push(h), c
                                } else return c;
                    else {
                        if (b.ownerDocument && (h = b.ownerDocument.getElementById(g)) && gb(b, h) && h.id === g) return c.push(h), c
                    } else {
                        if (d[2]) return Oa.apply(c, Pa.call(b.getElementsByTagName(a),
                            0)), c;
                        if ((g = d[3]) && T.getByClassName && b.getElementsByClassName) return Oa.apply(c, Pa.call(b.getElementsByClassName(g), 0)), c
                    }
                    if (T.qsa && !qa.test(a)) {
                        d = !0;
                        h = Q;
                        g = b;
                        k = 9 === e && a;
                        if (1 === e && "object" !== b.nodeName.toLowerCase()) {
                            e = va(a);
                            (d = b.getAttribute("id")) ? h = d.replace(Zc, "\\$&"): b.setAttribute("id", h);
                            h = "[id='" + h + "'] ";
                            for (g = e.length; g--;) e[g] = h + Z(e[g]);
                            g = Zb.test(a) && b.parentNode || b;
                            k = e.join(",")
                        }
                        if (k) try {
                            return Oa.apply(c, Pa.call(g.querySelectorAll(k), 0)), c
                        } catch (j) {} finally {
                            d || b.removeAttribute("id")
                        }
                    }
                }
                var l;
                a: {
                    a = a.replace(vb, "$1");
                    h = va(a);
                    if (!f && 1 === h.length) {
                        d = h[0] = h[0].slice(0);
                        if (2 < d.length && "ID" === (l = d[0]).type && 9 === b.nodeType && !la && F.relative[d[1].type]) {
                            b = F.find.ID(l.matches[0].replace(ya, za), b)[0];
                            if (!b) {
                                l = c;
                                break a
                            }
                            a = a.slice(d.shift().value.length)
                        }
                        for (e = wb.needsContext.test(a) ? 0 : d.length; e--;) {
                            l = d[e];
                            if (F.relative[g = l.type]) break;
                            if (g = F.find[g])
                                if (f = g(l.matches[0].replace(ya, za), Zb.test(d[0].type) && b.parentNode || b)) {
                                    d.splice(e, 1);
                                    a = f.length && Z(d);
                                    if (!a) {
                                        Oa.apply(c, Pa.call(f, 0));
                                        l = c;
                                        break a
                                    }
                                    break
                                }
                        }
                    }
                    $b(a,
                        h)(f, b, la, c, Zb.test(a));
                    l = c
                }
                return l
            },
            xb = function(a, b) {
                var c = b && a,
                    f = c && (~b.sourceIndex || vc) - (~a.sourceIndex || vc);
                if (f) return f;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            },
            ac = function(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a
                }
            },
            bc = function(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            },
            w = function(a) {
                return ea(function(b) {
                    b = +b;
                    return ea(function(c, f) {
                        for (var d, h = a([], c.length, b), g = h.length; g--;)
                            if (c[d =
                                    h[g]]) c[d] = !(f[d] = c[d])
                    })
                })
            },
            va = function(a, b) {
                var c, f, d, h, g, e, k;
                if (g = wc[a + " "]) return b ? 0 : g.slice(0);
                g = a;
                e = [];
                for (k = F.preFilter; g;) {
                    if (!c || (f = $c.exec(g))) f && (g = g.slice(f[0].length) || g), e.push(d = []);
                    c = !1;
                    if (f = ad.exec(g)) c = f.shift(), d.push({
                        value: c,
                        type: f[0].replace(vb, " ")
                    }), g = g.slice(c.length);
                    for (h in F.filter)
                        if ((f = wb[h].exec(g)) && (!k[h] || (f = k[h](f)))) c = f.shift(), d.push({
                            value: c,
                            type: h,
                            matches: f
                        }), g = g.slice(c.length);
                    if (!c) break
                }
                return b ? g.length : g ? H.error(a) : wc(a, e).slice(0)
            },
            Z = function(a) {
                for (var b =
                        0, c = a.length, f = ""; b < c; b++) f += a[b].value;
                return f
            },
            cc = function(a, b, c) {
                var f = b.dir,
                    d = c && "parentNode" === f,
                    h = bd++;
                return b.first ? function(b, c, h) {
                    for (; b = b[f];)
                        if (1 === b.nodeType || d) return a(b, c, h)
                } : function(b, c, g) {
                    var e, k, j, l = ra + " " + h;
                    if (g)
                        for (; b = b[f];) {
                            if ((1 === b.nodeType || d) && a(b, c, g)) return !0
                        } else
                            for (; b = b[f];)
                                if (1 === b.nodeType || d)
                                    if (j = b[Q] || (b[Q] = {}), (k = j[f]) && k[0] === l) {
                                        if (!0 === (e = k[1]) || e === yb) return !0 === e
                                    } else if (k = j[f] = [l], k[1] = a(b, c, g) || yb, !0 === k[1]) return !0
                }
            },
            dc = function(a) {
                return 1 < a.length ? function(b,
                    c, f) {
                    for (var d = a.length; d--;)
                        if (!a[d](b, c, f)) return !1;
                    return !0
                } : a[0]
            },
            zb = function(a, b, c, f, d) {
                for (var h, g = [], e = 0, k = a.length, j = null != b; e < k; e++)
                    if (h = a[e])
                        if (!c || c(h, f, d)) g.push(h), j && b.push(e);
                return g
            },
            ec = function(a, b, c, f, d, h) {
                f && !f[Q] && (f = ec(f));
                d && !d[Q] && (d = ec(d, h));
                return ea(function(h, g, e, k) {
                    var j, l, m = [],
                        s = [],
                        p = g.length,
                        w;
                    if (!(w = h)) {
                        w = b || "*";
                        for (var U = e.nodeType ? [e] : e, z = [], t = 0, C = U.length; t < C; t++) H(w, U[t], z);
                        w = z
                    }
                    w = a && (h || !b) ? zb(w, m, a, e, k) : w;
                    U = c ? d || (h ? a : p || f) ? [] : g : w;
                    c && c(w, U, e, k);
                    if (f) {
                        j = zb(U, s);
                        f(j, [], e, k);
                        for (e = j.length; e--;)
                            if (l = j[e]) U[s[e]] = !(w[s[e]] = l)
                    }
                    if (h) {
                        if (d || a) {
                            if (d) {
                                j = [];
                                for (e = U.length; e--;)
                                    if (l = U[e]) j.push(w[e] = l);
                                d(null, U = [], j, k)
                            }
                            for (e = U.length; e--;)
                                if ((l = U[e]) && -1 < (j = d ? fc.call(h, l) : m[e])) h[j] = !(g[j] = l)
                        }
                    } else U = zb(U === g ? U.splice(p, U.length) : U), d ? d(null, g, U, k) : Oa.apply(g, U)
                })
            },
            gc = function(a) {
                var b, c, f, d = a.length,
                    h = F.relative[a[0].type];
                c = h || F.relative[" "];
                for (var g = h ? 1 : 0, e = cc(function(a) {
                        return a === b
                    }, c, !0), k = cc(function(a) {
                        return -1 < fc.call(b, a)
                    }, c, !0), j = [function(a, c, f) {
                        return !h &&
                            (f || c !== Ab) || ((b = c).nodeType ? e(a, c, f) : k(a, c, f))
                    }]; g < d; g++)
                    if (c = F.relative[a[g].type]) j = [cc(dc(j), c)];
                    else {
                        c = F.filter[a[g].type].apply(null, a[g].matches);
                        if (c[Q]) {
                            for (f = ++g; f < d && !F.relative[a[f].type]; f++);
                            return ec(1 < g && dc(j), 1 < g && Z(a.slice(0, g - 1)).replace(vb, "$1"), c, g < f && gc(a.slice(g, f)), f < d && gc(a = a.slice(f)), f < d && Z(a))
                        }
                        j.push(c)
                    }
                return dc(j)
            },
            xc = function() {},
            Qa, yb, F, Bb, yc, $b, Ra, Ab, Na, ca, fa, la, qa, Sa, Cb, gb, hc, Q = "sizzle" + -new Date,
            Fa = eb.document,
            T = {},
            ra = 0,
            bd = 0,
            zc = fb(),
            wc = fb(),
            Ac = fb(),
            vc = -2147483648,
            Db = [],
            cd = Db.pop,
            Oa = Db.push,
            Pa = Db.slice,
            fc = Db.indexOf || function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (this[b] === a) return b;
                return -1
            },
            Bc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            Cc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Bc + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            ic = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + Cc.replace(3, 8) + ")*)|.*)\\)|)",
            vb = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            $c = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ad = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
            dd = RegExp(ic),
            ed = RegExp("^" + Bc + "$"),
            wb = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                NAME: /^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/,
                TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: RegExp("^" + Cc),
                PSEUDO: RegExp("^" + ic),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                    "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            },
            Zb = /[\x20\t\r\n\f]*[+~]/,
            jc = /^[^{]+\{\s*\[native code/,
            Yc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            fd = /^(?:input|select|textarea|button)$/i,
            gd = /^h\d$/i,
            Zc = /'|\\/g,
            hd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            ya = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            za = function(a, b) {
                var c = "0x" + b - 65536;
                return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) :
                    String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320)
            };
        try {
            Pa.call(Fa.documentElement.childNodes, 0)[0].nodeType
        } catch (Gd) {
            Pa = function(a) {
                for (var b, c = []; b = this[a++];) c.push(b);
                return c
            }
        }
        yc = H.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        Na = H.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : Fa;
            if (b === ca || 9 !== b.nodeType || !b.documentElement) return ca;
            ca = b;
            fa = b.documentElement;
            la = yc(b);
            T.tagNameNoComments = pa(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            T.attributes = pa(function(a) {
                a.innerHTML = "<select></select>";
                a = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== a && "string" !== a
            });
            T.getByClassName = pa(function(a) {
                a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!a.getElementsByClassName || !a.getElementsByClassName("e").length) return !1;
                a.lastChild.className = "e";
                return 2 === a.getElementsByClassName("e").length
            });
            T.getByName = pa(function(a) {
                a.id = Q + 0;
                a.innerHTML = "<a name='" + Q + "'></a><div name='" + Q + "'></div>";
                fa.insertBefore(a,
                    fa.firstChild);
                var c = b.getElementsByName && b.getElementsByName(Q).length === 2 + b.getElementsByName(Q + 0).length;
                T.getIdNotName = !b.getElementById(Q);
                fa.removeChild(a);
                return c
            });
            F.attrHandle = pa(function(a) {
                a.innerHTML = "<a href='#'></a>";
                return a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href")
            }) ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            };
            T.getIdNotName ? (F.find.ID = function(a, b) {
                if ("undefined" !==
                    typeof b.getElementById && !la) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, F.filter.ID = function(a) {
                var b = a.replace(ya, za);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (F.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && !la) {
                    var c = b.getElementById(a);
                    return c ? c.id === a || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === a ? [c] : void 0 : []
                }
            }, F.filter.ID = function(a) {
                var b = a.replace(ya, za);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode &&
                        a.getAttributeNode("id")) && a.value === b
                }
            });
            F.find.TAG = T.tagNameNoComments ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a)
            } : function(a, b) {
                var c, f = [],
                    d = 0,
                    h = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = h[d++];) 1 === c.nodeType && f.push(c);
                    return f
                }
                return h
            };
            F.find.NAME = T.getByName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByName) return b.getElementsByName(name)
            };
            F.find.CLASS = T.getByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName &&
                    !la) return b.getElementsByClassName(a)
            };
            Sa = [];
            qa = [":focus"];
            if (T.qsa = jc.test(b.querySelectorAll + "")) pa(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length || qa.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                a.querySelectorAll(":checked").length || qa.push(":checked")
            }), pa(function(a) {
                a.innerHTML = "<input type='hidden' i=''/>";
                a.querySelectorAll("[i^='']").length && qa.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
                a.querySelectorAll(":enabled").length || qa.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                qa.push(",.*:")
            });
            var a = T,
                c;
            c = Cb = fa.matchesSelector || fa.mozMatchesSelector || fa.webkitMatchesSelector || fa.oMatchesSelector || fa.msMatchesSelector;
            c = jc.test(c + "");
            (a.matchesSelector = c) && pa(function(a) {
                T.disconnectedMatch = Cb.call(a, "div");
                Cb.call(a, "[s!='']:x");
                Sa.push("!=", ic)
            });
            qa = RegExp(qa.join("|"));
            Sa = RegExp(Sa.join("|"));
            gb = jc.test(fa.contains + "") || fa.compareDocumentPosition ? function(a, b) {
                var c = 9 ===
                    a.nodeType ? a.documentElement : a,
                    f = b && b.parentNode;
                return a === f || !(!f || !(1 === f.nodeType && (c.contains ? c.contains(f) : a.compareDocumentPosition && a.compareDocumentPosition(f) & 16)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            hc = fa.compareDocumentPosition ? function(a, c) {
                var f;
                return a === c ? (Ra = !0, 0) : (f = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c)) ? f & 1 || a.parentNode && 11 === a.parentNode.nodeType ? a === b || gb(Fa, a) ? -1 : c === b || gb(Fa, c) ? 1 : 0 : f & 4 ? -1 : 1 : a.compareDocumentPosition ?
                    -1 : 1
            } : function(a, c) {
                var f, d = 0;
                f = a.parentNode;
                var h = c.parentNode,
                    g = [a],
                    n = [c];
                if (a === c) return Ra = !0, 0;
                if (!f || !h) return a === b ? -1 : c === b ? 1 : f ? -1 : h ? 1 : 0;
                if (f === h) return xb(a, c);
                for (f = a; f = f.parentNode;) g.unshift(f);
                for (f = c; f = f.parentNode;) n.unshift(f);
                for (; g[d] === n[d];) d++;
                return d ? xb(g[d], n[d]) : g[d] === Fa ? -1 : n[d] === Fa ? 1 : 0
            };
            Ra = !1;
            [0, 0].sort(hc);
            T.detectDuplicates = Ra;
            return ca
        };
        H.matches = function(a, b) {
            return H(a, null, null, b)
        };
        H.matchesSelector = function(a, b) {
            (a.ownerDocument || a) !== ca && Na(a);
            b = b.replace(hd, "='$1']");
            if (T.matchesSelector && !la && (!Sa || !Sa.test(b)) && !qa.test(b)) try {
                var c = Cb.call(a, b);
                if (c || T.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch (f) {}
            return 0 < H(b, ca, null, [a]).length
        };
        H.contains = function(a, b) {
            (a.ownerDocument || a) !== ca && Na(a);
            return gb(a, b)
        };
        H.attr = function(a, b) {
            var c;
            (a.ownerDocument || a) !== ca && Na(a);
            la || (b = b.toLowerCase());
            return (c = F.attrHandle[b]) ? c(a) : la || T.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && !0 === a[b] ? b : c && c.specified ? c.value :
                null
        };
        H.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        H.uniqueSort = function(a) {
            var b, c = [],
                f = 1,
                d = 0;
            Ra = !T.detectDuplicates;
            a.sort(hc);
            if (Ra) {
                for (; b = a[f]; f++) b === a[f - 1] && (d = c.push(f));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        };
        Bb = H.getText = function(a) {
            var b, c = "",
                f = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" === typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += Bb(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                } else
                for (; b = a[f]; f++) c += Bb(b);
            return c
        };
        F = H.selectors = {
            cacheLength: 50,
            createPseudo: ea,
            match: wb,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ya, za);
                    a[3] = (a[4] || a[5] || "").replace(ya, za);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || H.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] +
                        a[8] || "odd" === a[3])) : a[3] && H.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    if (wb.CHILD.test(a[0])) return null;
                    if (a[4]) a[2] = a[4];
                    else if (c && dd.test(c) && (b = va(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length)) a[0] = a[0].slice(0, b), a[2] = c.slice(0, b);
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    if ("*" === a) return function() {
                        return !0
                    };
                    a = a.replace(ya, za).toLowerCase();
                    return function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                },
                CLASS: function(a) {
                    var b = zc[a + " "];
                    return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" +
                        a + "([\\x20\\t\\r\\n\\f]|$)")) && zc(a, function(a) {
                        return b.test(a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(f) {
                        f = H.attr(f, a);
                        if (null == f) return "!=" === b;
                        if (!b) return !0;
                        f += "";
                        return "=" === b ? f === c : "!=" === b ? f !== c : "^=" === b ? c && 0 === f.indexOf(c) : "*=" === b ? c && -1 < f.indexOf(c) : "$=" === b ? c && f.slice(-c.length) === c : "~=" === b ? -1 < (" " + f + " ").indexOf(c) : "|=" === b ? f === c || f.slice(0, c.length + 1) === c + "-" : !1
                    }
                },
                CHILD: function(a, b, c, f, d) {
                    var h = "nth" !== a.slice(0,
                            3),
                        g = "last" !== a.slice(-4),
                        e = "of-type" === b;
                    return 1 === f && 0 === d ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, k) {
                        var j, l, m, s, R, c = h !== g ? "nextSibling" : "previousSibling",
                            p = b.parentNode,
                            S = e && b.nodeName.toLowerCase(),
                            k = !k && !e;
                        if (p) {
                            if (h) {
                                for (; c;) {
                                    for (l = b; l = l[c];)
                                        if (e ? l.nodeName.toLowerCase() === S : 1 === l.nodeType) return !1;
                                    R = c = "only" === a && !R && "nextSibling"
                                }
                                return !0
                            }
                            R = [g ? p.firstChild : p.lastChild];
                            if (g && k) {
                                k = p[Q] || (p[Q] = {});
                                j = k[a] || [];
                                s = j[0] === ra && j[1];
                                m = j[0] === ra && j[2];
                                for (l = s && p.childNodes[s]; l = ++s && l && l[c] ||
                                    (m = s = 0) || R.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [ra, s, m];
                                        break
                                    }
                            } else if (k && (j = (b[Q] || (b[Q] = {}))[a]) && j[0] === ra) m = j[1];
                            else
                                for (; l = ++s && l && l[c] || (m = s = 0) || R.pop();)
                                    if ((e ? l.nodeName.toLowerCase() === S : 1 === l.nodeType) && ++m)
                                        if (k && ((l[Q] || (l[Q] = {}))[a] = [ra, m]), l === b) break;
                            m -= d;
                            return m === f || 0 === m % f && 0 <= m / f
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, f = F.pseudos[a] || F.setFilters[a.toLowerCase()] || H.error("unsupported pseudo: " + a);
                    return f[Q] ? f(b) : 1 < f.length ? (c = [a, a, "", b], F.setFilters.hasOwnProperty(a.toLowerCase()) ?
                        ea(function(a, c) {
                            for (var d, h = f(a, b), g = h.length; g--;) d = fc.call(a, h[g]), a[d] = !(c[d] = h[g])
                        }) : function(a) {
                            return f(a, 0, c)
                        }) : f
                }
            },
            pseudos: {
                not: ea(function(a) {
                    var b = [],
                        c = [],
                        f = $b(a.replace(vb, "$1"));
                    return f[Q] ? ea(function(a, b, c, d) {
                        for (var d = f(a, null, d, []), h = a.length; h--;)
                            if (c = d[h]) a[h] = !(b[h] = c)
                    }) : function(a, d, h) {
                        b[0] = a;
                        f(b, null, h, c);
                        return !c.pop()
                    }
                }),
                has: ea(function(a) {
                    return function(b) {
                        return 0 < H(a, b).length
                    }
                }),
                contains: ea(function(a) {
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || Bb(b)).indexOf(a)
                    }
                }),
                lang: ea(function(a) {
                    ed.test(a || "") || H.error("unsupported lang: " + a);
                    a = a.replace(ya, za).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = la ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(a) {
                    var b = eb.location && eb.location.hash;
                    return b && b.slice(1) === a.id
                },
                root: function(a) {
                    return a === fa
                },
                focus: function(a) {
                    return a === ca.activeElement && (!ca.hasFocus || ca.hasFocus()) && !(!a.type &&
                        !a.href && !~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !F.pseudos.empty(a)
                },
                header: function(a) {
                    return gd.test(a.nodeName)
                },
                input: function(a) {
                    return fd.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: w(function() {
                    return [0]
                }),
                last: w(function(a, b) {
                    return [b - 1]
                }),
                eq: w(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: w(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: w(function(a, b) {
                    for (var c = 1; c < b; c +=
                        2) a.push(c);
                    return a
                }),
                lt: w(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: w(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        for (Qa in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) F.pseudos[Qa] = ac(Qa);
        for (Qa in {
                submit: !0,
                reset: !0
            }) F.pseudos[Qa] = bc(Qa);
        $b = H.compile = function(a, b) {
            var c, f = [],
                d = [],
                h = Ac[a + " "];
            if (!h) {
                b || (b = va(a));
                for (c = b.length; c--;) h = gc(b[c]), h[Q] ? f.push(h) : d.push(h);
                var g = 0,
                    e = 0 < f.length,
                    k = 0 < d.length;
                c = function(a, b, c, h, n) {
                    var j, l, m = [],
                        s = 0,
                        p = "0",
                        R =
                        a && [],
                        w = null != n,
                        S = Ab,
                        z = a || k && F.find.TAG("*", n && b.parentNode || b),
                        t = ra += null == S ? 1 : Math.random() || 0.1;
                    w && (Ab = b !== ca && b, yb = g);
                    for (; null != (n = z[p]); p++) {
                        if (k && n) {
                            for (j = 0; l = d[j++];)
                                if (l(n, b, c)) {
                                    h.push(n);
                                    break
                                }
                            w && (ra = t, yb = ++g)
                        }
                        e && ((n = !l && n) && s--, a && R.push(n))
                    }
                    s += p;
                    if (e && p !== s) {
                        for (j = 0; l = f[j++];) l(R, m, b, c);
                        if (a) {
                            if (0 < s)
                                for (; p--;) !R[p] && !m[p] && (m[p] = cd.call(h));
                            m = zb(m)
                        }
                        Oa.apply(h, m);
                        w && (!a && 0 < m.length && 1 < s + f.length) && H.uniqueSort(h)
                    }
                    w && (ra = t, Ab = S);
                    return R
                };
                c = e ? ea(c) : c;
                h = Ac(a, c)
            }
            return h
        };
        F.pseudos.nth = F.pseudos.eq;
        F.filters = xc.prototype = F.pseudos;
        F.setFilters = new xc;
        Na();
        H.attr = j.attr;
        j.find = H;
        j.expr = H.selectors;
        j.expr[":"] = j.expr.pseudos;
        j.unique = H.uniqueSort;
        j.text = H.getText;
        j.isXMLDoc = H.isXML;
        j.contains = H.contains;
        var id = /Until$/,
            jd = /^(?:parents|prev(?:Until|All))/,
            Tc = /^.[^:#\[\.,]*$/,
            Dc = j.expr.match.needsContext,
            kd = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        j.fn.extend({
            find: function(a) {
                var b, c, f, d = this.length;
                if ("string" !== typeof a) return f = this, this.pushStack(j(a).filter(function() {
                    for (b = 0; b < d; b++)
                        if (j.contains(f[b],
                                this)) return !0
                }));
                c = [];
                for (b = 0; b < d; b++) j.find(a, this[b], c);
                c = this.pushStack(1 < d ? j.unique(c) : c);
                c.selector = (this.selector ? this.selector + " " : "") + a;
                return c
            },
            has: function(a) {
                var b, c = j(a, this),
                    f = c.length;
                return this.filter(function() {
                    for (b = 0; b < f; b++)
                        if (j.contains(this, c[b])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(m(this, a, !1))
            },
            filter: function(a) {
                return this.pushStack(m(this, a, !0))
            },
            is: function(a) {
                return !!a && ("string" === typeof a ? Dc.test(a) ? 0 <= j(a, this.context).index(this[0]) : 0 < j.filter(a, this).length :
                    0 < this.filter(a).length)
            },
            closest: function(a, b) {
                for (var c, f = 0, d = this.length, h = [], g = Dc.test(a) || "string" !== typeof a ? j(a, b || this.context) : 0; f < d; f++)
                    for (c = this[f]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                        if (g ? -1 < g.index(c) : j.find.matchesSelector(c, a)) {
                            h.push(c);
                            break
                        }
                        c = c.parentNode
                    }
                return this.pushStack(1 < h.length ? j.unique(h) : h)
            },
            index: function(a) {
                return !a ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof a ? j.inArray(this[0], j(a)) : j.inArray(a.jquery ? a[0] : a, this)
            },
            add: function(a,
                b) {
                var c = "string" === typeof a ? j(a, b) : j.makeArray(a && a.nodeType ? [a] : a),
                    c = j.merge(this.get(), c);
                return this.pushStack(j.unique(c))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });
        j.fn.andSelf = j.fn.addBack;
        j.each({
            parent: function(a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null
            },
            parents: function(a) {
                return j.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return j.dir(a, "parentNode", c)
            },
            next: function(a) {
                return k(a, "nextSibling")
            },
            prev: function(a) {
                return k(a,
                    "previousSibling")
            },
            nextAll: function(a) {
                return j.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return j.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return j.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return j.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return j.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return j.sibling(a.firstChild)
            },
            contents: function(a) {
                return j.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : j.merge([], a.childNodes)
            }
        }, function(a,
            b) {
            j.fn[a] = function(c, f) {
                var d = j.map(this, b, c);
                id.test(a) || (f = c);
                f && "string" === typeof f && (d = j.filter(f, d));
                d = 1 < this.length && !kd[a] ? j.unique(d) : d;
                1 < this.length && jd.test(a) && (d = d.reverse());
                return this.pushStack(d)
            }
        });
        j.extend({
            filter: function(a, b, c) {
                c && (a = ":not(" + a + ")");
                return 1 === b.length ? j.find.matchesSelector(b[0], a) ? [b[0]] : [] : j.find.matches(a, b)
            },
            dir: function(a, b, c) {
                for (var f = [], a = a[b]; a && 9 !== a.nodeType && (c === e || 1 !== a.nodeType || !j(a).is(c));) 1 === a.nodeType && f.push(a), a = a[b];
                return f
            },
            sibling: function(a,
                b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var rc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ld = / jQuery\d+="(?:null|\d+)"/g,
            Ec = RegExp("<(?:" + rc + ")[\\s/>]", "i"),
            kc = /^\s+/,
            Fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Gc = /<([\w:]+)/,
            Hc = /<tbody/i,
            md = /<|&#?\w+;/,
            nd = /<(?:script|style|link)/i,
            Hb = /^(?:checkbox|radio)$/i,
            od = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ic = /^$|\/(?:java|ecma)script/i,
            Uc = /^true\/(.*)/,
            pd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ha = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: j.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            lc = p(A).appendChild(A.createElement("div"));
        ha.optgroup = ha.option;
        ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
        ha.th = ha.td;
        j.fn.extend({
            text: function(a) {
                return j.access(this, function(a) {
                    return a === e ? j.text(this) : this.empty().append((this[0] && this[0].ownerDocument || A).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (j.isFunction(a)) return this.each(function(b) {
                    j(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = j(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode &&
                        b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return j.isFunction(a) ? this.each(function(b) {
                    j(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = j(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = j.isFunction(a);
                return this.each(function(c) {
                    j(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    j.nodeName(this,
                        "body") || j(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, f = 0; null != (c = this[f]); f++)
                    if (!a || 0 < j.filter(a, [c]).length) !b && 1 === c.nodeType && j.cleanData(u(c)), c.parentNode && (b && j.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && j.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && j.nodeName(a, "select") && (a.options.length =
                        0)
                }
                return this
            },
            clone: function(a, b) {
                a = null == a ? !1 : a;
                b = null == b ? a : b;
                return this.map(function() {
                    return j.clone(this, a, b)
                })
            },
            html: function(a) {
                return j.access(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        f = this.length;
                    if (a === e) return 1 === b.nodeType ? b.innerHTML.replace(ld, "") : e;
                    if ("string" === typeof a && !nd.test(a) && (j.support.htmlSerialize || !Ec.test(a)) && (j.support.leadingWhitespace || !kc.test(a)) && !ha[(Gc.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Fc, "<$1></$2>");
                        try {
                            for (; c < f; c++) b = this[c] || {}, 1 === b.nodeType &&
                                (j.cleanData(u(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (d) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                !j.isFunction(a) && "string" !== typeof a && (a = j(a).not(this).detach());
                return this.domManip([a], !0, function(a) {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    c && (j(this).remove(), c.insertBefore(a, b))
                })
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, c) {
                var a = lb.apply([], a),
                    f, d, h, g, k = 0,
                    l = this.length,
                    m = this,
                    s = l - 1,
                    p = a[0],
                    w = j.isFunction(p);
                if (w || !(1 >= l || "string" !==
                        typeof p || j.support.checkClone || !od.test(p))) return this.each(function(f) {
                    var d = m.eq(f);
                    w && (a[0] = p.call(this, f, b ? d.html() : e));
                    d.domManip(a, b, c)
                });
                if (l && (g = j.buildFragment(a, this[0].ownerDocument, !1, this), f = g.firstChild, 1 === g.childNodes.length && (g = f), f)) {
                    b = b && j.nodeName(f, "tr");
                    h = j.map(u(g, "script"), t);
                    for (d = h.length; k < l; k++) f = g, k !== s && (f = j.clone(f, !0, !0), d && j.merge(h, u(f, "script"))), c.call(b && j.nodeName(this[k], "table") ? this[k].getElementsByTagName("tbody")[0] || this[k].appendChild(this[k].ownerDocument.createElement("tbody")) :
                        this[k], f, k);
                    if (d) {
                        g = h[h.length - 1].ownerDocument;
                        j.map(h, q);
                        for (k = 0; k < d; k++)
                            if (f = h[k], Ic.test(f.type || "") && !j._data(f, "globalEval") && j.contains(g, f)) f.src ? j.ajax({
                                url: f.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : j.globalEval((f.text || f.textContent || f.innerHTML || "").replace(pd, ""))
                    }
                    g = f = null
                }
                return this
            }
        });
        j.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            j.fn[a] = function(a) {
                for (var c = 0, f = [], d = j(a),
                        h = d.length - 1; c <= h; c++) a = c === h ? this : this.clone(!0), j(d[c])[b](a), Wa.apply(f, a.get());
                return this.pushStack(f)
            }
        });
        j.extend({
            clone: function(a, b, c) {
                var f, d, h, g, e, k = j.contains(a.ownerDocument, a);
                j.support.html5Clone || j.isXMLDoc(a) || !Ec.test("<" + a.nodeName + ">") ? h = a.cloneNode(!0) : (lc.innerHTML = a.outerHTML, lc.removeChild(h = lc.firstChild));
                if ((!j.support.noCloneEvent || !j.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !j.isXMLDoc(a)) {
                    f = u(h);
                    e = u(a);
                    for (g = 0; null != (d = e[g]); ++g)
                        if (f[g]) {
                            var l = f[g],
                                m = void 0,
                                s = void 0,
                                p = void 0;
                            if (1 === l.nodeType) {
                                m = l.nodeName.toLowerCase();
                                if (!j.support.noCloneEvent && l[j.expando]) {
                                    p = j._data(l);
                                    for (s in p.events) j.removeEvent(l, s, p.handle);
                                    l.removeAttribute(j.expando)
                                }
                                if ("script" === m && l.text !== d.text) t(l).text = d.text, q(l);
                                else if ("object" === m) l.parentNode && (l.outerHTML = d.outerHTML), j.support.html5Clone && (d.innerHTML && !j.trim(l.innerHTML)) && (l.innerHTML = d.innerHTML);
                                else if ("input" === m && Hb.test(d.type)) l.defaultChecked = l.checked = d.checked, l.value !== d.value && (l.value =
                                    d.value);
                                else if ("option" === m) l.defaultSelected = l.selected = d.defaultSelected;
                                else if ("input" === m || "textarea" === m) l.defaultValue = d.defaultValue
                            }
                        }
                }
                if (b)
                    if (c) {
                        e = e || u(a);
                        f = f || u(h);
                        for (g = 0; null != (d = e[g]); g++) v(d, f[g])
                    } else v(a, h);
                f = u(h, "script");
                0 < f.length && r(f, !k && u(a, "script"));
                return h
            },
            buildFragment: function(a, b, c, f) {
                for (var d, h, g, e, k, l, m = a.length, s = p(b), w = [], z = 0; z < m; z++)
                    if ((h = a[z]) || 0 === h)
                        if ("object" === j.type(h)) j.merge(w, h.nodeType ? [h] : h);
                        else if (md.test(h)) {
                    g = g || s.appendChild(b.createElement("div"));
                    e = (Gc.exec(h) || ["", ""])[1].toLowerCase();
                    l = ha[e] || ha._default;
                    g.innerHTML = l[1] + h.replace(Fc, "<$1></$2>") + l[2];
                    for (d = l[0]; d--;) g = g.lastChild;
                    !j.support.leadingWhitespace && kc.test(h) && w.push(b.createTextNode(kc.exec(h)[0]));
                    if (!j.support.tbody)
                        for (d = (h = "table" === e && !Hc.test(h) ? g.firstChild : "<table>" === l[1] && !Hc.test(h) ? g : 0) && h.childNodes.length; d--;) j.nodeName(k = h.childNodes[d], "tbody") && !k.childNodes.length && h.removeChild(k);
                    j.merge(w, g.childNodes);
                    for (g.textContent = ""; g.firstChild;) g.removeChild(g.firstChild);
                    g = s.lastChild
                } else w.push(b.createTextNode(h));
                g && s.removeChild(g);
                j.support.appendChecked || j.grep(u(w, "input"), y);
                for (z = 0; h = w[z++];)
                    if (!(f && -1 !== j.inArray(h, f)) && (a = j.contains(h.ownerDocument, h), g = u(s.appendChild(h), "script"), a && r(g), c))
                        for (d = 0; h = g[d++];) Ic.test(h.type || "") && c.push(h);
                return s
            },
            cleanData: function(a, b) {
                for (var c, f, d, h, g = 0, e = j.expando, k = j.cache, l = j.support.deleteExpando, m = j.event.special; null != (c = a[g]); g++)
                    if (b || j.acceptData(c))
                        if (h = (d = c[e]) && k[d]) {
                            if (h.events)
                                for (f in h.events) m[f] ?
                                    j.event.remove(c, f) : j.removeEvent(c, f, h.handle);
                            k[d] && (delete k[d], l ? delete c[e] : typeof c.removeAttribute !== E ? c.removeAttribute(e) : c[e] = null, wa.push(d))
                        }
            }
        });
        var Ua, Ca, Da, mc = /alpha\([^)]*\)/i,
            qd = /opacity\s*=\s*([^)]*)/,
            rd = /^(top|right|bottom|left)$/,
            sd = /^(none|table(?!-c[ea]).+)/,
            Jc = /^margin/,
            Vc = RegExp("^(" + Ia + ")(.*)$", "i"),
            jb = RegExp("^(" + Ia + ")(?!px)[a-z%]+$", "i"),
            td = RegExp("^([+-])=(" + Ia + ")", "i"),
            tc = {
                BODY: "block"
            },
            ud = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Kc = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Ba = ["Top", "Right", "Bottom", "Left"],
            sc = ["Webkit", "O", "Moz", "ms"];
        j.fn.extend({
            css: function(a, b) {
                return j.access(this, function(a, b, c) {
                    var f, d = {},
                        h = 0;
                    if (j.isArray(b)) {
                        f = Ca(a);
                        for (c = b.length; h < c; h++) d[b[h]] = j.css(a, b[h], !1, f);
                        return d
                    }
                    return c !== e ? j.style(a, b, c) : j.css(a, b)
                }, a, b, 1 < arguments.length)
            },
            show: function() {
                return I(this, !0)
            },
            hide: function() {
                return I(this)
            },
            toggle: function(a) {
                var b = "boolean" === typeof a;
                return this.each(function() {
                    (b ? a : B(this)) ? j(this).show(): j(this).hide()
                })
            }
        });
        j.extend({
            cssHooks: {
                opacity: {
                    get: function(a,
                        b) {
                        if (b) {
                            var c = Da(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": j.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, f) {
                if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
                    var d, h, g, k = j.camelCase(b),
                        l = a.style,
                        b = j.cssProps[k] || (j.cssProps[k] = x(l, k));
                    g = j.cssHooks[b] || j.cssHooks[k];
                    if (c !== e) {
                        h = typeof c;
                        if ("string" === h && (d = td.exec(c))) c = (d[1] + 1) * d[2] + parseFloat(j.css(a,
                            b)), h = "number";
                        if (!(null == c || "number" === h && isNaN(c)))
                            if ("number" === h && !j.cssNumber[k] && (c += "px"), !j.support.clearCloneStyle && ("" === c && 0 === b.indexOf("background")) && (l[b] = "inherit"), !g || !("set" in g) || (c = g.set(a, c, f)) !== e) try {
                                l[b] = c
                            } catch (m) {}
                    } else return g && "get" in g && (d = g.get(a, !1, f)) !== e ? d : l[b]
                }
            },
            css: function(a, b, c, f) {
                var d, h;
                h = j.camelCase(b);
                b = j.cssProps[h] || (j.cssProps[h] = x(a.style, h));
                (h = j.cssHooks[b] || j.cssHooks[h]) && "get" in h && (d = h.get(a, !0, c));
                d === e && (d = Da(a, b, f));
                "normal" === d && b in Kc && (d =
                    Kc[b]);
                return "" === c || c ? (a = parseFloat(d), !0 === c || j.isNumeric(a) ? a || 0 : d) : d
            },
            swap: function(a, b, c, f) {
                var d, h = {};
                for (d in b) h[d] = a.style[d], a.style[d] = b[d];
                c = c.apply(a, f || []);
                for (d in b) a.style[d] = h[d];
                return c
            }
        });
        a.getComputedStyle ? (Ca = function(b) {
            return a.getComputedStyle(b, null)
        }, Da = function(a, b, c) {
            var f, d = (c = c || Ca(a)) ? c.getPropertyValue(b) || c[b] : e,
                h = a.style;
            c && ("" === d && !j.contains(a.ownerDocument, a) && (d = j.style(a, b)), jb.test(d) && Jc.test(b) && (a = h.width, b = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth =
                h.width = d, d = c.width, h.width = a, h.minWidth = b, h.maxWidth = f));
            return d
        }) : A.documentElement.currentStyle && (Ca = function(a) {
            return a.currentStyle
        }, Da = function(a, b, c) {
            var f, d, h = (c = c || Ca(a)) ? c[b] : e,
                g = a.style;
            null == h && (g && g[b]) && (h = g[b]);
            if (jb.test(h) && !rd.test(b)) {
                c = g.left;
                if (d = (f = a.runtimeStyle) && f.left) f.left = a.currentStyle.left;
                g.left = "fontSize" === b ? "1em" : h;
                h = g.pixelLeft + "px";
                g.left = c;
                d && (f.left = d)
            }
            return "" === h ? "auto" : h
        });
        j.each(["height", "width"], function(a, b) {
            j.cssHooks[b] = {
                get: function(a, c, f) {
                    if (c) return 0 ===
                        a.offsetWidth && sd.test(j.css(a, "display")) ? j.swap(a, ud, function() {
                            return C(a, b, f)
                        }) : C(a, b, f)
                },
                set: function(a, c, f) {
                    var d = f && Ca(a);
                    return s(a, c, f ? z(a, b, f, j.support.boxSizing && "border-box" === j.css(a, "boxSizing", !1, d), d) : 0)
                }
            }
        });
        j.support.opacity || (j.cssHooks.opacity = {
            get: function(a, b) {
                return qd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    f = a.currentStyle,
                    d = j.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    h = f && f.filter ||
                    c.filter || "";
                c.zoom = 1;
                if ((1 <= b || "" === b) && "" === j.trim(h.replace(mc, "")) && c.removeAttribute)
                    if (c.removeAttribute("filter"), "" === b || f && !f.filter) return;
                c.filter = mc.test(h) ? h.replace(mc, d) : h + " " + d
            }
        });
        j(function() {
            j.support.reliableMarginRight || (j.cssHooks.marginRight = {
                get: function(a, b) {
                    if (b) return j.swap(a, {
                        display: "inline-block"
                    }, Da, [a, "marginRight"])
                }
            });
            !j.support.pixelPosition && j.fn.position && j.each(["top", "left"], function(a, b) {
                j.cssHooks[b] = {
                    get: function(a, c) {
                        if (c) return c = Da(a, b), jb.test(c) ? j(a).position()[b] +
                            "px" : c
                    }
                }
            })
        });
        j.expr && j.expr.filters && (j.expr.filters.hidden = function(a) {
            return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !j.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || j.css(a, "display"))
        }, j.expr.filters.visible = function(a) {
            return !j.expr.filters.hidden(a)
        });
        j.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            j.cssHooks[a + b] = {
                expand: function(c) {
                    for (var f = 0, d = {}, c = "string" === typeof c ? c.split(" ") : [c]; 4 > f; f++) d[a + Ba[f] + b] = c[f] || c[f - 2] || c[0];
                    return d
                }
            };
            Jc.test(a) || (j.cssHooks[a +
                b].set = s)
        });
        var vd = /%20/g,
            Wc = /\[\]$/,
            Lc = /\r?\n/g,
            wd = /^(?:submit|button|image|reset|file)$/i,
            xd = /^(?:input|select|textarea|keygen)/i;
        j.fn.extend({
            serialize: function() {
                return j.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = j.prop(this, "elements");
                    return a ? j.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !j(this).is(":disabled") && xd.test(this.nodeName) && !wd.test(a) && (this.checked || !Hb.test(a))
                }).map(function(a, b) {
                    var c = j(this).val();
                    return null == c ? null : j.isArray(c) ? j.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Lc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Lc, "\r\n")
                    }
                }).get()
            }
        });
        j.param = function(a, b) {
            var c, f = [],
                d = function(a, b) {
                    b = j.isFunction(b) ? b() : null == b ? "" : b;
                    f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            b === e && (b = j.ajaxSettings && j.ajaxSettings.traditional);
            if (j.isArray(a) || a.jquery && !j.isPlainObject(a)) j.each(a, function() {
                d(this.name, this.value)
            });
            else
                for (c in a) da(c, a[c], b, d);
            return f.join("&").replace(vd,
                "+")
        };
        j.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            j.fn[b] = function(a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
        j.fn.hover = function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        };
        var Ga, Aa, nc = j.now(),
            oc = /\?/,
            yd = /#.*$/,
            Mc = /([?&])_=[^&]*/,
            zd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Ad = /^(?:GET|HEAD)$/,
            Bd = /^\/\//,
            Nc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Oc = j.fn.load,
            Pc = {},
            Ib = {},
            Qc = "*/".concat("*");
        try {
            Aa = J.href
        } catch (Hd) {
            Aa = A.createElement("a"), Aa.href = "", Aa = Aa.href
        }
        Ga = Nc.exec(Aa.toLowerCase()) || [];
        j.fn.load = function(a, b, c) {
            if ("string" !== typeof a && Oc) return Oc.apply(this, arguments);
            var f, d, h, g = this,
                k = a.indexOf(" ");
            0 <= k && (f = a.slice(k, a.length), a = a.slice(0, k));
            j.isFunction(b) ? (c = b, b = e) : b && "object" === typeof b && (h = "POST");
            0 < g.length && j.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: b
            }).done(function(a) {
                d =
                    arguments;
                g.html(f ? j("<div>").append(j.parseHTML(a)).find(f) : a)
            }).complete(c && function(a, b) {
                g.each(c, d || [a.responseText, b, a])
            });
            return this
        };
        j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            j.fn[b] = function(a) {
                return this.on(b, a)
            }
        });
        j.each(["get", "post"], function(a, b) {
            j[b] = function(a, c, f, d) {
                j.isFunction(c) && (d = d || f, f = c, c = e);
                return j.ajax({
                    url: a,
                    type: b,
                    dataType: d,
                    data: c,
                    success: f
                })
            }
        });
        j.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Aa,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ga[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": j.parseJSON,
                    "text xml": j.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? G(G(a, j.ajaxSettings), b) : G(j.ajaxSettings, a)
            },
            ajaxPrefilter: K(Pc),
            ajaxTransport: K(Ib),
            ajax: function(a, b) {
                function c(a, b, f, d) {
                    var n, s, q, L, r = b;
                    if (2 !== Z) {
                        Z = 2;
                        k && clearTimeout(k);
                        m = e;
                        g = d || "";
                        x.readyState = 0 < a ? 4 : 0;
                        if (f) {
                            L = p;
                            var d = x,
                                u, R, v, B, da = L.contents,
                                M = L.dataTypes,
                                I = L.responseFields;
                            for (B in I) B in f && (d[I[B]] = f[B]);
                            for (;
                                "*" === M[0];) M.shift(), R === e && (R = L.mimeType || d.getResponseHeader("Content-Type"));
                            if (R)
                                for (B in da)
                                    if (da[B] && da[B].test(R)) {
                                        M.unshift(B);
                                        break
                                    }
                            if (M[0] in f) v = M[0];
                            else {
                                for (B in f) {
                                    if (!M[0] || L.converters[B + " " + M[0]]) {
                                        v = B;
                                        break
                                    }
                                    u || (u = B)
                                }
                                v = v || u
                            }
                            v ? (v !== M[0] && M.unshift(v), L = f[v]) : L = void 0
                        }
                        if (200 <= a && 300 > a || 304 === a)
                            if (p.ifModified && ((f = x.getResponseHeader("Last-Modified")) && (j.lastModified[h] = f), (f = x.getResponseHeader("etag")) && (j.etag[h] = f)), 204 === a) n = !0, r = "nocontent";
                            else if (304 === a) n = !0, r = "notmodified";
                        else {
                            a: {
                                s = p;
                                q = L;
                                var ib, S, r = {};
                                u = 0;
                                R = s.dataTypes.slice();
                                v = R[0];
                                s.dataFilter && (q = s.dataFilter(q, s.dataType));
                                if (R[1])
                                    for (S in s.converters) r[S.toLowerCase()] =
                                        s.converters[S];
                                for (; f = R[++u];)
                                    if ("*" !== f) {
                                        if ("*" !== v && v !== f) {
                                            S = r[v + " " + f] || r["* " + f];
                                            if (!S)
                                                for (ib in r)
                                                    if (n = ib.split(" "), n[1] === f && (S = r[v + " " + n[0]] || r["* " + n[0]])) {
                                                        !0 === S ? S = r[ib] : !0 !== r[ib] && (f = n[0], R.splice(u--, 0, f));
                                                        break
                                                    }
                                            if (!0 !== S)
                                                if (S && s["throws"]) q = S(q);
                                                else try {
                                                    q = S(q)
                                                } catch (K) {
                                                    n = {
                                                        state: "parsererror",
                                                        error: S ? K : "No conversion from " + v + " to " + f
                                                    };
                                                    break a
                                                }
                                        }
                                        v = f
                                    }
                                n = {
                                    state: "success",
                                    data: q
                                }
                            }
                            r = n.state;s = n.data;q = n.error;n = !q
                        } else if (q = r, a || !r) r = "error", 0 > a && (a = 0);
                        x.status = a;
                        x.statusText = (b || r) + "";
                        n ?
                            t.resolveWith(w, [s, r, x]) : t.rejectWith(w, [x, r, q]);
                        x.statusCode(va);
                        va = e;
                        l && z.trigger(n ? "ajaxSuccess" : "ajaxError", [x, p, n ? s : q]);
                        C.fireWith(w, [x, r]);
                        l && (z.trigger("ajaxComplete", [x, p]), --j.active || j.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof a && (b = a, a = e);
                var b = b || {},
                    f, d, h, g, k, l, m, s, p = j.ajaxSetup({}, b),
                    w = p.context || p,
                    z = p.context && (w.nodeType || w.jquery) ? j(w) : j.event,
                    t = j.Deferred(),
                    C = j.Callbacks("once memory"),
                    va = p.statusCode || {},
                    q = {},
                    L = {},
                    Z = 0,
                    r = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === Z) {
                                if (!s)
                                    for (s = {}; b = zd.exec(g);) s[b[1].toLowerCase()] = b[2];
                                b = s[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === Z ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            Z || (a = L[c] = L[c] || a, q[a] = b);
                            return this
                        },
                        overrideMimeType: function(a) {
                            Z || (p.mimeType = a);
                            return this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > Z)
                                    for (b in a) va[b] = [va[b], a[b]];
                                else x.always(a[x.status]);
                            return this
                        },
                        abort: function(a) {
                            a = a || r;
                            m && m.abort(a);
                            c(0, a);
                            return this
                        }
                    };
                t.promise(x).complete =
                    C.add;
                x.success = x.done;
                x.error = x.fail;
                p.url = ((a || p.url || Aa) + "").replace(yd, "").replace(Bd, Ga[1] + "//");
                p.type = b.method || b.type || p.method || p.type;
                p.dataTypes = j.trim(p.dataType || "*").toLowerCase().match(ia) || [""];
                null == p.crossDomain && (f = Nc.exec(p.url.toLowerCase()), p.crossDomain = !(!f || !(f[1] !== Ga[1] || f[2] !== Ga[2] || (f[3] || ("http:" === f[1] ? 80 : 443)) != (Ga[3] || ("http:" === Ga[1] ? 80 : 443)))));
                p.data && (p.processData && "string" !== typeof p.data) && (p.data = j.param(p.data, p.traditional));
                V(Pc, p, b, x);
                if (2 === Z) return x;
                (l = p.global) && 0 === j.active++ && j.event.trigger("ajaxStart");
                p.type = p.type.toUpperCase();
                p.hasContent = !Ad.test(p.type);
                h = p.url;
                p.hasContent || (p.data && (h = p.url += (oc.test(h) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Mc.test(h) ? h.replace(Mc, "$1_=" + nc++) : h + (oc.test(h) ? "&" : "?") + "_=" + nc++));
                p.ifModified && (j.lastModified[h] && x.setRequestHeader("If-Modified-Since", j.lastModified[h]), j.etag[h] && x.setRequestHeader("If-None-Match", j.etag[h]));
                (p.data && p.hasContent && !1 !== p.contentType || b.contentType) &&
                x.setRequestHeader("Content-Type", p.contentType);
                x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Qc + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(w, x, p) || 2 === Z)) return x.abort();
                r = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[d](p[d]);
                if (m = V(Ib, p, b, x)) {
                    x.readyState = 1;
                    l && z.trigger("ajaxSend", [x, p]);
                    p.async && 0 < p.timeout && (k = setTimeout(function() {
                            x.abort("timeout")
                        },
                        p.timeout));
                    try {
                        Z = 1, m.send(q, c)
                    } catch (u) {
                        if (2 > Z) c(-1, u);
                        else throw u;
                    }
                } else c(-1, "No Transport");
                return x
            },
            getScript: function(a, b) {
                return j.get(a, e, b, "script")
            },
            getJSON: function(a, b, c) {
                return j.get(a, b, c, "json")
            }
        });
        j.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    j.globalEval(a);
                    return a
                }
            }
        });
        j.ajaxPrefilter("script", function(a) {
            a.cache === e && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
        j.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = A.head || j("head")[0] || A.documentElement;
                return {
                    send: function(f, d) {
                        b = A.createElement("script");
                        b.async = !0;
                        a.scriptCharset && (b.charset = a.scriptCharset);
                        b.src = a.url;
                        b.onload = b.onreadystatechange = function(a, c) {
                            if (c || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success")
                        };
                        c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        if (b) b.onload(e, !0)
                    }
                }
            }
        });
        var Rc = [],
            pc = /(=)\?(?=&|$)|\?\?/;
        j.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Rc.pop() || j.expando + "_" + nc++;
                this[a] = !0;
                return a
            }
        });
        j.ajaxPrefilter("json jsonp", function(b, c, f) {
            var d, h, g, k = !1 !== b.jsonp && (pc.test(b.url) ? "url" : "string" === typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && pc.test(b.data) && "data");
            if (k || "jsonp" === b.dataTypes[0]) return d = b.jsonpCallback = j.isFunction(b.jsonpCallback) ? b.jsonpCallback() :
                b.jsonpCallback, k ? b[k] = b[k].replace(pc, "$1" + d) : !1 !== b.jsonp && (b.url += (oc.test(b.url) ? "&" : "?") + b.jsonp + "=" + d), b.converters["script json"] = function() {
                    g || j.error(d + " was not called");
                    return g[0]
                }, b.dataTypes[0] = "json", h = a[d], a[d] = function() {
                    g = arguments
                }, f.always(function() {
                    a[d] = h;
                    b[d] && (b.jsonpCallback = c.jsonpCallback, Rc.push(d));
                    g && j.isFunction(h) && h(g[0]);
                    g = h = e
                }), "script"
        });
        var Ta, hb, Cd = 0,
            qc = a.ActiveXObject && function() {
                for (var a in Ta) Ta[a](e, !0)
            };
        j.ajaxSettings.xhr = a.ActiveXObject ? function() {
            var b;
            if (!(b = !this.isLocal && Y())) a: {
                try {
                    b = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (c) {}
                b = void 0
            }
            return b
        } : Y;
        hb = j.ajaxSettings.xhr();
        j.support.cors = !!hb && "withCredentials" in hb;
        (hb = j.support.ajax = !!hb) && j.ajaxTransport(function(b) {
            if (!b.crossDomain || j.support.cors) {
                var c;
                return {
                    send: function(f, d) {
                        var h, g, k = b.xhr();
                        b.username ? k.open(b.type, b.url, b.async, b.username, b.password) : k.open(b.type, b.url, b.async);
                        if (b.xhrFields)
                            for (g in b.xhrFields) k[g] = b.xhrFields[g];
                        b.mimeType && k.overrideMimeType &&
                            k.overrideMimeType(b.mimeType);
                        !b.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (g in f) k.setRequestHeader(g, f[g])
                        } catch (l) {}
                        k.send(b.hasContent && b.data || null);
                        c = function(a, f) {
                            var g, l, m, p;
                            try {
                                if (c && (f || 4 === k.readyState))
                                    if (c = e, h && (k.onreadystatechange = j.noop, qc && delete Ta[h]), f) 4 !== k.readyState && k.abort();
                                    else {
                                        p = {};
                                        g = k.status;
                                        l = k.getAllResponseHeaders();
                                        "string" === typeof k.responseText && (p.text = k.responseText);
                                        try {
                                            m = k.statusText
                                        } catch (s) {
                                            m = ""
                                        }!g && b.isLocal &&
                                            !b.crossDomain ? g = p.text ? 200 : 404 : 1223 === g && (g = 204)
                                    }
                            } catch (w) {
                                f || d(-1, w)
                            }
                            p && d(g, m, p, l)
                        };
                        b.async ? 4 === k.readyState ? setTimeout(c) : (h = ++Cd, qc && (Ta || (Ta = {}, j(a).unload(qc)), Ta[h] = c), k.onreadystatechange = c) : c()
                    },
                    abort: function() {
                        c && c(e, !0)
                    }
                }
            }
        });
        var Ha, Eb, Dd = /^(?:toggle|show|hide)$/,
            Ed = RegExp("^(?:([+-])=|)(" + Ia + ")([a-z%]*)$", "i"),
            Fd = /queueHooks$/,
            kb = [function(a, b, c) {
                var f, d, h, g, e, k, l = this,
                    m = a.style,
                    p = {},
                    s = [],
                    w = a.nodeType && B(a);
                c.queue || (e = j._queueHooks(a, "fx"), null == e.unqueued && (e.unqueued = 0, k = e.empty.fire,
                    e.empty.fire = function() {
                        e.unqueued || k()
                    }), e.unqueued++, l.always(function() {
                    l.always(function() {
                        e.unqueued--;
                        j.queue(a, "fx").length || e.empty.fire()
                    })
                }));
                if (1 === a.nodeType && ("height" in b || "width" in b)) c.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === j.css(a, "display") && "none" === j.css(a, "float") && (!j.support.inlineBlockNeedsLayout || "inline" === L(a.nodeName) ? m.display = "inline-block" : m.zoom = 1);
                c.overflow && (m.overflow = "hidden", j.support.shrinkWrapBlocks || l.always(function() {
                    m.overflow = c.overflow[0];
                    m.overflowX = c.overflow[1];
                    m.overflowY = c.overflow[2]
                }));
                for (d in b) h = b[d], Dd.exec(h) && (delete b[d], f = f || "toggle" === h, h !== (w ? "hide" : "show") && s.push(d));
                if (b = s.length) {
                    h = j._data(a, "fxshow") || j._data(a, "fxshow", {});
                    "hidden" in h && (w = h.hidden);
                    f && (h.hidden = !w);
                    w ? j(a).show() : l.done(function() {
                        j(a).hide()
                    });
                    l.done(function() {
                        var b;
                        j._removeData(a, "fxshow");
                        for (b in p) j.style(a, b, p[b])
                    });
                    for (d = 0; d < b; d++) f = s[d], g = l.createTween(f, w ? h[f] : 0), p[f] = h[f] || j.style(a, f), f in h || (h[f] = g.start, w && (g.end = g.start, g.start =
                        "width" === f || "height" === f ? 1 : 0))
                }
            }],
            Va = {
                "*": [function(a, b) {
                    var c, f, d = this.createTween(a, b),
                        h = Ed.exec(b),
                        g = d.cur(),
                        e = +g || 0,
                        k = 1,
                        l = 20;
                    if (h) {
                        c = +h[2];
                        f = h[3] || (j.cssNumber[a] ? "" : "px");
                        if ("px" !== f && e) {
                            e = j.css(d.elem, a, !0) || c || 1;
                            do k = k || ".5", e /= k, j.style(d.elem, a, e + f); while (k !== (k = d.cur() / g) && 1 !== k && --l)
                        }
                        d.unit = f;
                        d.start = e;
                        d.end = h[1] ? e + (h[1] + 1) * c : c
                    }
                    return d
                }]
            };
        j.Animation = j.extend(ma, {
            tweener: function(a, b) {
                j.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, f = 0, d = a.length; f < d; f++) c = a[f], Va[c] = Va[c] || [],
                    Va[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? kb.unshift(a) : kb.push(a)
            }
        });
        j.Tween = N;
        N.prototype = {
            constructor: N,
            init: function(a, b, c, f, d, h) {
                this.elem = a;
                this.prop = c;
                this.easing = d || "swing";
                this.options = b;
                this.start = this.now = this.cur();
                this.end = f;
                this.unit = h || (j.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = N.propHooks[this.prop];
                return a && a.get ? a.get(this) : N.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = N.propHooks[this.prop];
                this.pos = this.options.duration ? b = j.easing[this.easing](a, this.options.duration *
                    a, 0, 1, this.options.duration) : b = a;
                this.now = (this.end - this.start) * b + this.start;
                this.options.step && this.options.step.call(this.elem, this.now, this);
                c && c.set ? c.set(this) : N.propHooks._default.set(this);
                return this
            }
        };
        N.prototype.init.prototype = N.prototype;
        N.propHooks = {
            _default: {
                get: function(a) {
                    if (null != a.elem[a.prop] && (!a.elem.style || null == a.elem.style[a.prop])) return a.elem[a.prop];
                    a = j.css(a.elem, a.prop, "");
                    return !a || "auto" === a ? 0 : a
                },
                set: function(a) {
                    if (j.fx.step[a.prop]) j.fx.step[a.prop](a);
                    else a.elem.style &&
                        (null != a.elem.style[j.cssProps[a.prop]] || j.cssHooks[a.prop]) ? j.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        };
        N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        };
        j.each(["toggle", "show", "hide"], function(a, b) {
            var c = j.fn[b];
            j.fn[b] = function(a, f, d) {
                return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(ja(b, !0), a, f, d)
            }
        });
        j.fn.extend({
            fadeTo: function(a, b, c, f) {
                return this.filter(B).css("opacity", 0).show().end().animate({
                        opacity: b
                    },
                    a, c, f)
            },
            animate: function(a, b, c, f) {
                var d = j.isEmptyObject(a),
                    h = j.speed(b, c, f),
                    g = function() {
                        var b = ma(this, j.extend({}, a), h);
                        g.finish = function() {
                            b.stop(!0)
                        };
                        (d || j._data(this, "finish")) && b.stop(!0)
                    };
                g.finish = g;
                return d || !1 === h.queue ? this.each(g) : this.queue(h.queue, g)
            },
            stop: function(a, b, c) {
                var f = function(a) {
                    var b = a.stop;
                    delete a.stop;
                    b(c)
                };
                "string" !== typeof a && (c = b, b = a, a = e);
                b && !1 !== a && this.queue(a || "fx", []);
                return this.each(function() {
                    var b = !0,
                        d = null != a && a + "queueHooks",
                        h = j.timers,
                        g = j._data(this);
                    if (d) g[d] &&
                        g[d].stop && f(g[d]);
                    else
                        for (d in g) g[d] && (g[d].stop && Fd.test(d)) && f(g[d]);
                    for (d = h.length; d--;)
                        if (h[d].elem === this && (null == a || h[d].queue === a)) h[d].anim.stop(c), b = !1, h.splice(d, 1);
                        (b || !c) && j.dequeue(this, a)
                })
            },
            finish: function(a) {
                !1 !== a && (a = a || "fx");
                return this.each(function() {
                    var b, c = j._data(this),
                        f = c[a + "queue"];
                    b = c[a + "queueHooks"];
                    var d = j.timers,
                        h = f ? f.length : 0;
                    c.finish = !0;
                    j.queue(this, a, []);
                    b && (b.cur && b.cur.finish) && b.cur.finish.call(this);
                    for (b = d.length; b--;) d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0),
                        d.splice(b, 1));
                    for (b = 0; b < h; b++) f[b] && f[b].finish && f[b].finish.call(this);
                    delete c.finish
                })
            }
        });
        j.each({
            slideDown: ja("show"),
            slideUp: ja("hide"),
            slideToggle: ja("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            j.fn[a] = function(a, c, f) {
                return this.animate(b, a, c, f)
            }
        });
        j.speed = function(a, b, c) {
            var f = a && "object" === typeof a ? j.extend({}, a) : {
                complete: c || !c && b || j.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !j.isFunction(b) && b
            };
            f.duration = j.fx.off ? 0 : "number" ===
                typeof f.duration ? f.duration : f.duration in j.fx.speeds ? j.fx.speeds[f.duration] : j.fx.speeds._default;
            if (null == f.queue || !0 === f.queue) f.queue = "fx";
            f.old = f.complete;
            f.complete = function() {
                j.isFunction(f.old) && f.old.call(this);
                f.queue && j.dequeue(this, f.queue)
            };
            return f
        };
        j.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            }
        };
        j.timers = [];
        j.fx = N.prototype.init;
        j.fx.tick = function() {
            var a, b = j.timers,
                c = 0;
            for (Ha = j.now(); c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || j.fx.stop();
            Ha = e
        };
        j.fx.timer = function(a) {
            a() && j.timers.push(a) && j.fx.start()
        };
        j.fx.interval = 13;
        j.fx.start = function() {
            Eb || (Eb = setInterval(j.fx.tick, j.fx.interval))
        };
        j.fx.stop = function() {
            clearInterval(Eb);
            Eb = null
        };
        j.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        j.fx.step = {};
        j.expr && j.expr.filters && (j.expr.filters.animated = function(a) {
            return j.grep(j.timers, function(b) {
                return a === b.elem
            }).length
        });
        j.fn.offset = function(a) {
            if (arguments.length) return a === e ? this : this.each(function(b) {
                j.offset.setOffset(this,
                    a, b)
            });
            var b, c, f = {
                    top: 0,
                    left: 0
                },
                d = (c = this[0]) && c.ownerDocument;
            if (d) {
                b = d.documentElement;
                if (!j.contains(b, c)) return f;
                typeof c.getBoundingClientRect !== E && (f = c.getBoundingClientRect());
                c = ga(d);
                return {
                    top: f.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: f.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }
            }
        };
        j.offset = {
            setOffset: function(a, b, c) {
                var f = j.css(a, "position");
                "static" === f && (a.style.position = "relative");
                var d = j(a),
                    h = d.offset(),
                    g = j.css(a, "top"),
                    e = j.css(a, "left"),
                    k = {},
                    l = {};
                ("absolute" ===
                    f || "fixed" === f) && -1 < j.inArray("auto", [g, e]) ? (l = d.position(), f = l.top, e = l.left) : (f = parseFloat(g) || 0, e = parseFloat(e) || 0);
                j.isFunction(b) && (b = b.call(a, c, h));
                null != b.top && (k.top = b.top - h.top + f);
                null != b.left && (k.left = b.left - h.left + e);
                "using" in b ? b.using.call(a, k) : d.css(k)
            }
        };
        j.fn.extend({
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        f = this[0];
                    "fixed" === j.css(f, "position") ? b = f.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), j.nodeName(a[0], "html") || (c = a.offset()), c.top += j.css(a[0],
                        "borderTopWidth", !0), c.left += j.css(a[0], "borderLeftWidth", !0));
                    return {
                        top: b.top - c.top - j.css(f, "marginTop", !0),
                        left: b.left - c.left - j.css(f, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || A.documentElement; a && !j.nodeName(a, "html") && "static" === j.css(a, "position");) a = a.offsetParent;
                    return a || A.documentElement
                })
            }
        });
        j.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            j.fn[a] = function(f) {
                return j.access(this, function(a,
                    f, d) {
                    var h = ga(a);
                    if (d === e) return h ? b in h ? h[b] : h.document.documentElement[f] : a[f];
                    h ? h.scrollTo(!c ? d : j(h).scrollLeft(), c ? d : j(h).scrollTop()) : a[f] = d
                }, a, f, arguments.length, null)
            }
        });
        j.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            j.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, f) {
                j.fn[f] = function(f, d) {
                    var h = arguments.length && (c || "boolean" !== typeof f),
                        g = c || (!0 === f || !0 === d ? "margin" : "border");
                    return j.access(this, function(b, c, f) {
                        return j.isWindow(b) ? b.document.documentElement["client" +
                            a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : f === e ? j.css(b, c, g) : j.style(b, c, f, g)
                    }, b, h ? f : e, h, null)
                }
            })
        });
        a.jQuery = a.$ = j;
        "function" === typeof define && (define.amd && define.amd.jQuery) && define("jquery", [], function() {
            return j
        })
    })(window);
    var $ = window.$.noConflict(!0),
        jQuery = $;
    (function(a, e) {
        function c(c, d) {
            var g, e;
            g = c.nodeName.toLowerCase();
            if ("area" === g) {
                g = c.parentNode;
                e = g.name;
                if (!c.href || !e || "map" !== g.nodeName.toLowerCase()) return !1;
                g = a("img[usemap=#" + e + "]")[0];
                return !!g && b(g)
            }
            return (/input|select|textarea|button|object/.test(g) ? !c.disabled : "a" === g ? c.href || d : d) && b(c)
        }

        function b(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        var d = 0,
            g = /^ui-id-\d+$/;
        a.ui = a.ui || {};
        a.extend(a.ui, {
            version: "1.10.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        });
        a.fn.extend({
            focus: function(b) {
                return function(c, d) {
                    return "number" === typeof c ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus();
                            d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            scrollParent: function() {
                var b;
                b =
                    a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                    }).eq(0) : this.parents().filter(function() {
                        return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                    }).eq(0);
                return /fixed/.test(this.css("position")) || !b.length ? a(document) :
                    b
            },
            zIndex: function(b) {
                if (b !== e) return this.css("zIndex", b);
                if (this.length)
                    for (var b = a(this[0]), c; b.length && b[0] !== document;) {
                        c = b.css("position");
                        if ("absolute" === c || "relative" === c || "fixed" === c)
                            if (c = parseInt(b.css("zIndex"), 10), !isNaN(c) && 0 !== c) return c;
                        b = b.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++d)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    g.test(this.id) && a(this).removeAttr("id")
                })
            }
        });
        a.extend(a.expr[":"], {
            data: a.expr.createPseudo ?
                a.expr.createPseudo(function(b) {
                    return function(c) {
                        return !!a.data(c, b)
                    }
                }) : function(b, c, d) {
                    return !!a.data(b, d[3])
                },
            focusable: function(b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var d = a.attr(b, "tabindex"),
                    g = isNaN(d);
                return (g || 0 <= d) && c(b, !g)
            }
        });
        a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
            function d(b, c, f, h) {
                a.each(g, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0;
                    f && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
                    h && (c -= parseFloat(a.css(b, "margin" +
                        this)) || 0)
                });
                return c
            }
            var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                l = c.toLowerCase(),
                t = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + c] = function(b) {
                return b === e ? t["inner" + c].call(this) : this.each(function() {
                    a(this).css(l, d(this, b) + "px")
                })
            };
            a.fn["outer" + c] = function(b, f) {
                return "number" !== typeof b ? t["outer" + c].call(this, b) : this.each(function() {
                    a(this).css(l, d(this, b, !0, f) + "px")
                })
            }
        });
        a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null ==
                a ? this.prevObject : this.prevObject.filter(a))
        });
        if (a("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
            var l = a.fn.removeData;
            a.fn.removeData = function(b) {
                return arguments.length ? l.call(this, a.camelCase(b)) : l.call(this)
            }
        }
        a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        a.support.selectstart = "onselectstart" in document.createElement("div");
        a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        });
        a.extend(a.ui, {
            plugin: {
                add: function(b, c, d) {
                    var g, b = a.ui[b].prototype;
                    for (g in d) b.plugins[g] = b.plugins[g] || [], b.plugins[g].push([c, d[g]])
                },
                call: function(a, b, c) {
                    var d = a.plugins[b];
                    if (d && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                        for (b = 0; b < d.length; b++) a.options[d[b][0]] && d[b][1].apply(a.element, c)
                }
            },
            hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    g = !1;
                if (0 < b[d]) return !0;
                b[d] = 1;
                g = 0 < b[d];
                b[d] = 0;
                return g
            }
        })
    })(jQuery);
    (function(a, e) {
        var c = 0,
            b = Array.prototype.slice,
            d = a.cleanData;
        a.cleanData = function(b) {
            for (var c = 0, f; null != (f = b[c]); c++) try {
                a(f).triggerHandler("remove")
            } catch (h) {}
            d(b)
        };
        a.widget = function(b, c, f) {
            var d, e, m, p, t = {},
                q = b.split(".")[0],
                b = b.split(".")[1];
            d = q + "-" + b;
            f || (f = c, c = a.Widget);
            a.expr[":"][d.toLowerCase()] = function(b) {
                return !!a.data(b, d)
            };
            a[q] = a[q] || {};
            e = a[q][b];
            m = a[q][b] = function(a, b) {
                if (!this._createWidget) return new m(a, b);
                arguments.length && this._createWidget(a, b)
            };
            a.extend(m, e, {
                version: f.version,
                _proto: a.extend({}, f),
                _childConstructors: []
            });
            p = new c;
            p.options = a.widget.extend({}, p.options);
            a.each(f, function(b, f) {
                if (a.isFunction(f)) {
                    var d = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        h = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    t[b] = function() {
                        var a = this._super,
                            b = this._superApply,
                            c;
                        this._super = d;
                        this._superApply = h;
                        c = f.apply(this, arguments);
                        this._super = a;
                        this._superApply = b;
                        return c
                    }
                } else t[b] = f
            });
            m.prototype = a.widget.extend(p, {
                widgetEventPrefix: e ? p.widgetEventPrefix : b
            }, t, {
                constructor: m,
                namespace: q,
                widgetName: b,
                widgetFullName: d
            });
            e ? (a.each(e._childConstructors, function(b, c) {
                var f = c.prototype;
                a.widget(f.namespace + "." + f.widgetName, m, c._proto)
            }), delete e._childConstructors) : c._childConstructors.push(m);
            a.widget.bridge(b, m)
        };
        a.widget.extend = function(c) {
            for (var d = b.call(arguments, 1), f = 0, h = d.length, k, m; f < h; f++)
                for (k in d[f]) m = d[f][k], d[f].hasOwnProperty(k) && m !== e && (c[k] = a.isPlainObject(m) ? a.isPlainObject(c[k]) ? a.widget.extend({}, c[k], m) : a.widget.extend({}, m) : m);
            return c
        };
        a.widget.bridge =
            function(c, d) {
                var f = d.prototype.widgetFullName || c;
                a.fn[c] = function(h) {
                    var k = "string" === typeof h,
                        m = b.call(arguments, 1),
                        p = this,
                        h = !k && m.length ? a.widget.extend.apply(null, [h].concat(m)) : h;
                    k ? this.each(function() {
                        var b, d = a.data(this, f);
                        if (!d) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + h + "'");
                        if (!a.isFunction(d[h]) || "_" === h.charAt(0)) return a.error("no such method '" + h + "' for " + c + " widget instance");
                        b = d[h].apply(d, m);
                        if (b !== d && b !== e) return p = b && b.jquery ?
                            p.pushStack(b.get()) : b, !1
                    }) : this.each(function() {
                        var b = a.data(this, f);
                        b ? b.option(h || {})._init() : a.data(this, f, new d(h, this))
                    });
                    return p
                }
            };
        a.Widget = function() {};
        a.Widget._childConstructors = [];
        a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0];
                this.element = a(d);
                this.uuid = c++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.options = a.widget.extend({}, this.options,
                    this._getCreateOptions(), b);
                this.bindings = a();
                this.hoverable = a();
                this.focusable = a();
                d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
                this._create();
                this._trigger("create", null, this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy();
                this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
                this.bindings.unbind(this.eventNamespace);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(b, c) {
                var f = b,
                    d, k, m;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" === typeof b)
                    if (f = {}, d = b.split("."), b = d.shift(), d.length) {
                        k = f[b] = a.widget.extend({}, this.options[b]);
                        for (m = 0; m < d.length - 1; m++) k[d[m]] = k[d[m]] || {}, k = k[d[m]];
                        b = d.pop();
                        if (c === e) return k[b] === e ? null : k[b];
                        k[b] = c
                    } else {
                        if (c === e) return this.options[b] === e ? null : this.options[b];
                        f[b] = c
                    }
                this._setOptions(f);
                return this
            },
            _setOptions: function(a) {
                for (var b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a,
                b) {
                this.options[a] = b;
                "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
                return this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(b, c, f) {
                var d, e = this;
                "boolean" !== typeof b && (f = c, c = b, b = !1);
                f ? (c = d = a(c), this.bindings = this.bindings.add(c)) : (f = c, c = this.element, d =
                    this.widget());
                a.each(f, function(f, p) {
                    function t() {
                        if (b || !(!0 === e.options.disabled || a(this).hasClass("ui-state-disabled"))) return ("string" === typeof p ? e[p] : p).apply(e, arguments)
                    }
                    "string" !== typeof p && (t.guid = p.guid = p.guid || t.guid || a.guid++);
                    var q = f.match(/^(\w+)\s*(.*)$/),
                        r = q[1] + e.eventNamespace;
                    (q = q[2]) ? d.delegate(q, r, t): c.bind(r, t)
                })
            },
            _off: function(a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                var c = this;
                return setTimeout(function() {
                    return ("string" ===
                        typeof a ? c[a] : a).apply(c, arguments)
                }, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b);
                this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b);
                this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, f) {
                var d,
                    e = this.options[b],
                    f = f || {},
                    c = a.Event(c);
                c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
                c.target = this.element[0];
                if (b = c.originalEvent)
                    for (d in b) d in c || (c[d] = b[d]);
                this.element.trigger(c, f);
                return !(a.isFunction(e) && !1 === e.apply(this.element[0], [c].concat(f)) || c.isDefaultPrevented())
            }
        };
        a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(f, d, e) {
                "string" === typeof d && (d = {
                    effect: d
                });
                var m, p = !d ? b : !0 === d || "number" === typeof d ? c : d.effect || c,
                    d =
                    d || {};
                "number" === typeof d && (d = {
                    duration: d
                });
                m = !a.isEmptyObject(d);
                d.complete = e;
                d.delay && f.delay(d.delay);
                if (m && a.effects && a.effects.effect[p]) f[b](d);
                else if (p !== b && f[p]) f[p](d.duration, d.easing, e);
                else f.queue(function(c) {
                    a(this)[b]();
                    e && e.call(f[0]);
                    c()
                })
            }
        })
    })(jQuery);
    (function(a) {
        var e = !1;
        a(document).mouseup(function() {
            e = !1
        });
        a.widget("ui.mouse", {
            version: "1.10.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var c = this;
                this.element.bind("mousedown." + this.widgetName, function(a) {
                    return c._mouseDown(a)
                }).bind("click." + this.widgetName, function(b) {
                    if (!0 === a.data(b.target, c.widgetName + ".preventClickEvent")) return a.removeData(b.target, c.widgetName + ".preventClickEvent"), b.stopImmediatePropagation(), !1
                });
                this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName);
                this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(c) {
                if (!e) {
                    this._mouseStarted && this._mouseUp(c);
                    this._mouseDownEvent = c;
                    var b = this,
                        d = 1 === c.which,
                        g = "string" === typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                    if (!d || g || !this._mouseCapture(c)) return !0;
                    this.mouseDelayMet = !this.options.delay;
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        b.mouseDelayMet = !0
                    }, this.options.delay));
                    if (this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = !1 !== this._mouseStart(c), !this._mouseStarted)) return c.preventDefault(), !0;
                    !0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent");
                    this._mouseMoveDelegate = function(a) {
                        return b._mouseMove(a)
                    };
                    this._mouseUpDelegate = function(a) {
                        return b._mouseUp(a)
                    };
                    a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                    c.preventDefault();
                    return e = !0
                }
            },
            _mouseMove: function(c) {
                if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !c.button) return this._mouseUp(c);
                if (this._mouseStarted) return this._mouseDrag(c), c.preventDefault();
                this._mouseDistanceMet(c) && this._mouseDelayMet(c) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, c)) ? this._mouseDrag(c) : this._mouseUp(c));
                return !this._mouseStarted
            },
            _mouseUp: function(c) {
                a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c));
                return !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    })(jQuery);
    (function(a, e) {
        function c(a, b, c) {
            return [parseFloat(a[0]) * (p.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (p.test(a[1]) ? c / 100 : 1)]
        }
        a.ui = a.ui || {};
        var b, d = Math.max,
            g = Math.abs,
            l = Math.round,
            f = /left|center|right/,
            h = /top|center|bottom/,
            k = /[\+\-]\d+(\.[\d]+)?%?/,
            m = /^\w+/,
            p = /%$/,
            t = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
                if (b !== e) return b;
                var c, f, d = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                f = d.children()[0];
                a("body").append(d);
                c = f.offsetWidth;
                d.css("overflow", "scroll");
                f = f.offsetWidth;
                c === f && (f = d[0].clientWidth);
                d.remove();
                return b = c - f
            },
            getScrollInfo: function(b) {
                var c = b.isWindow ? "" : b.element.css("overflow-x"),
                    f = b.isWindow ? "" : b.element.css("overflow-y"),
                    c = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
                return {
                    width: "scroll" === f || "auto" === f && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                    height: c ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(b) {
                var b = a(b || window),
                    c = a.isWindow(b[0]);
                return {
                    element: b,
                    isWindow: c,
                    offset: b.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: b.scrollLeft(),
                    scrollTop: b.scrollTop(),
                    width: c ? b.width() : b.outerWidth(),
                    height: c ? b.height() : b.outerHeight()
                }
            }
        };
        a.fn.position = function(b) {
            if (!b || !b.of) return t.apply(this, arguments);
            var b = a.extend({}, b),
                e, p, s, z, C, q, r = a(b.of),
                u = a.position.getWithinInfo(b.within),
                v = a.position.getScrollInfo(u),
                y = (b.collision || "flip").split(" "),
                G = {};
            q = r;
            var Y = q[0];
            q = 9 === Y.nodeType ? {
                width: q.width(),
                height: q.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(Y) ? {
                width: q.width(),
                height: q.height(),
                offset: {
                    top: q.scrollTop(),
                    left: q.scrollLeft()
                }
            } : Y.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: Y.pageY,
                    left: Y.pageX
                }
            } : {
                width: q.outerWidth(),
                height: q.outerHeight(),
                offset: q.offset()
            };
            r[0].preventDefault && (b.at = "left top");
            p = q.width;
            s = q.height;
            z = q.offset;
            C = a.extend({}, z);
            a.each(["my", "at"], function() {
                var a = (b[this] || "").split(" "),
                    c, d;
                1 === a.length && (a = f.test(a[0]) ? a.concat(["center"]) : h.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
                a[0] = f.test(a[0]) ? a[0] : "center";
                a[1] = h.test(a[1]) ?
                    a[1] : "center";
                c = k.exec(a[0]);
                d = k.exec(a[1]);
                G[this] = [c ? c[0] : 0, d ? d[0] : 0];
                b[this] = [m.exec(a[0])[0], m.exec(a[1])[0]]
            });
            1 === y.length && (y[1] = y[0]);
            "right" === b.at[0] ? C.left += p : "center" === b.at[0] && (C.left += p / 2);
            "bottom" === b.at[1] ? C.top += s : "center" === b.at[1] && (C.top += s / 2);
            e = c(G.at, p, s);
            C.left += e[0];
            C.top += e[1];
            return this.each(function() {
                var f, h, k = a(this),
                    m = k.outerWidth(),
                    q = k.outerHeight(),
                    t = parseInt(a.css(this, "marginLeft"), 10) || 0,
                    L = parseInt(a.css(this, "marginTop"), 10) || 0,
                    Y = m + t + (parseInt(a.css(this, "marginRight"),
                        10) || 0) + v.width,
                    A = q + L + (parseInt(a.css(this, "marginBottom"), 10) || 0) + v.height,
                    J = a.extend({}, C),
                    ba = c(G.my, k.outerWidth(), k.outerHeight());
                "right" === b.my[0] ? J.left -= m : "center" === b.my[0] && (J.left -= m / 2);
                "bottom" === b.my[1] ? J.top -= q : "center" === b.my[1] && (J.top -= q / 2);
                J.left += ba[0];
                J.top += ba[1];
                a.support.offsetFractions || (J.left = l(J.left), J.top = l(J.top));
                f = {
                    marginLeft: t,
                    marginTop: L
                };
                a.each(["left", "top"], function(c, d) {
                    if (a.ui.position[y[c]]) a.ui.position[y[c]][d](J, {
                        targetWidth: p,
                        targetHeight: s,
                        elemWidth: m,
                        elemHeight: q,
                        collisionPosition: f,
                        collisionWidth: Y,
                        collisionHeight: A,
                        offset: [e[0] + ba[0], e[1] + ba[1]],
                        my: b.my,
                        at: b.at,
                        within: u,
                        elem: k
                    })
                });
                b.using && (h = function(a) {
                    var c = z.left - J.left,
                        f = c + p - m,
                        h = z.top - J.top,
                        e = h + s - q,
                        l = {
                            target: {
                                element: r,
                                left: z.left,
                                top: z.top,
                                width: p,
                                height: s
                            },
                            element: {
                                element: k,
                                left: J.left,
                                top: J.top,
                                width: m,
                                height: q
                            },
                            horizontal: 0 > f ? "left" : 0 < c ? "right" : "center",
                            vertical: 0 > e ? "top" : 0 < h ? "bottom" : "middle"
                        };
                    p < m && g(c + f) < p && (l.horizontal = "center");
                    s < q && g(h + e) < s && (l.vertical = "middle");
                    l.important =
                        d(g(c), g(f)) > d(g(h), g(e)) ? "horizontal" : "vertical";
                    b.using.call(this, a, l)
                });
                k.offset(a.extend(J, {
                    using: h
                }))
            })
        };
        a.ui.position = {
            fit: {
                left: function(a, b) {
                    var c = b.within,
                        f = c.isWindow ? c.scrollLeft : c.offset.left,
                        h = c.width,
                        g = a.left - b.collisionPosition.marginLeft,
                        c = f - g,
                        e = g + b.collisionWidth - h - f;
                    b.collisionWidth > h ? 0 < c && 0 >= e ? (f = a.left + c + b.collisionWidth - h - f, a.left += c - f) : a.left = 0 < e && 0 >= c ? f : c > e ? f + h - b.collisionWidth : f : a.left = 0 < c ? a.left + c : 0 < e ? a.left - e : d(a.left - g, a.left)
                },
                top: function(a, b) {
                    var c = b.within,
                        f = c.isWindow ?
                        c.scrollTop : c.offset.top,
                        h = b.within.height,
                        g = a.top - b.collisionPosition.marginTop,
                        c = f - g,
                        e = g + b.collisionHeight - h - f;
                    b.collisionHeight > h ? 0 < c && 0 >= e ? (f = a.top + c + b.collisionHeight - h - f, a.top += c - f) : a.top = 0 < e && 0 >= c ? f : c > e ? f + h - b.collisionHeight : f : a.top = 0 < c ? a.top + c : 0 < e ? a.top - e : d(a.top - g, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var c = b.within,
                        f = c.offset.left + c.scrollLeft,
                        d = c.width,
                        h = c.isWindow ? c.scrollLeft : c.offset.left,
                        e = a.left - b.collisionPosition.marginLeft,
                        c = e - h,
                        k = e + b.collisionWidth - d - h,
                        e = "left" === b.my[0] ? -b.elemWidth :
                        "right" === b.my[0] ? b.elemWidth : 0,
                        l = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                        m = -2 * b.offset[0];
                    if (0 > c) {
                        if (f = a.left + e + l + m + b.collisionWidth - d - f, 0 > f || f < g(c)) a.left += e + l + m
                    } else if (0 < k && (f = a.left - b.collisionPosition.marginLeft + e + l + m - h, 0 < f || g(f) < k)) a.left += e + l + m
                },
                top: function(a, b) {
                    var c = b.within,
                        f = c.offset.top + c.scrollTop,
                        d = c.height,
                        h = c.isWindow ? c.scrollTop : c.offset.top,
                        e = a.top - b.collisionPosition.marginTop,
                        c = e - h,
                        k = e + b.collisionHeight - d - h,
                        e = "top" === b.my[1] ? -b.elemHeight : "bottom" ===
                        b.my[1] ? b.elemHeight : 0,
                        l = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                        m = -2 * b.offset[1];
                    if (0 > c) {
                        if (f = a.top + e + l + m + b.collisionHeight - d - f, a.top + e + l + m > c && (0 > f || f < g(c))) a.top += e + l + m
                    } else if (0 < k && (f = a.top - b.collisionPosition.marginTop + e + l + m - h, a.top + e + l + m > k && (0 < f || g(f) < k))) a.top += e + l + m
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments);
                    a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments);
                    a.ui.position.fit.top.apply(this,
                        arguments)
                }
            }
        };
        var q, r, v, u, y = document.getElementsByTagName("body")[0];
        v = document.createElement("div");
        q = document.createElement(y ? "div" : "body");
        r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        y && a.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (u in r) q.style[u] = r[u];
        q.appendChild(v);
        r = y || document.documentElement;
        r.insertBefore(q, r.firstChild);
        v.style.cssText = "position: absolute; left: 10.7432222px;";
        v = a(v).offset().left;
        a.support.offsetFractions = 10 < v &&
            11 > v;
        q.innerHTML = "";
        r.removeChild(q)
    })(jQuery);
    (function(a) {
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper &&
                    !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative");
                this.options.addClasses && this.element.addClass("ui-draggable");
                this.options.disabled && this.element.addClass("ui-draggable-disabled");
                this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var c = this.options;
                if (this.helper || c.disabled || 0 < a(e.target).closest(".ui-resizable-handle").length) return !1;
                this.handle = this._getHandle(e);
                if (!this.handle) return !1;
                a(!0 === c.iframeFix ? "iframe" : c.iframeFix).each(function() {
                    a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1E3
                    }).css(a(this).offset()).appendTo("body")
                });
                return !0
            },
            _mouseStart: function(e) {
                var c = this.options;
                this.helper = this._createHelper(e);
                this.helper.addClass("ui-draggable-dragging");
                this._cacheHelperProportions();
                a.ui.ddmanager && (a.ui.ddmanager.current = this);
                this._cacheMargins();
                this.cssPosition = this.helper.css("position");
                this.scrollParent = this.helper.scrollParent();
                this.offset = this.positionAbs = this.element.offset();
                this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                };
                a.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                });
                this.originalPosition = this.position = this._generatePosition(e);
                this.originalPageX = e.pageX;
                this.originalPageY = e.pageY;
                c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
                c.containment && this._setContainment();
                if (!1 === this._trigger("start", e)) return this._clear(), !1;
                this._cacheHelperProportions();
                a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, e);
                this._mouseDrag(e, !0);
                a.ui.ddmanager && a.ui.ddmanager.dragStart(this, e);
                return !0
            },
            _mouseDrag: function(e, c) {
                this.position = this._generatePosition(e);
                this.positionAbs = this._convertPositionTo("absolute");
                if (!c) {
                    var b = this._uiHash();
                    if (!1 === this._trigger("drag", e, b)) return this._mouseUp({}), !1;
                    this.position = b.position
                }
                if (!this.options.axis || "y" !== this.options.axis) this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || "x" !== this.options.axis) this.helper[0].style.top = this.position.top + "px";
                a.ui.ddmanager && a.ui.ddmanager.drag(this, e);
                return !1
            },
            _mouseStop: function(e) {
                var c, b = this,
                    d = !1,
                    g = !1;
                a.ui.ddmanager && !this.options.dropBehaviour && (g = a.ui.ddmanager.drop(this, e));
                this.dropped && (g =
                    this.dropped, this.dropped = !1);
                for (c = this.element[0]; c && (c = c.parentNode);) c === document && (d = !0);
                if (!d && "original" === this.options.helper) return !1;
                "invalid" === this.options.revert && !g || "valid" === this.options.revert && g || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, g) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== b._trigger("stop", e) && b._clear()
                }) : !1 !== this._trigger("stop", e) && this._clear();
                return !1
            },
            _mouseUp: function(e) {
                a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                });
                a.ui.ddmanager && a.ui.ddmanager.dragStop(this, e);
                return a.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
                return this
            },
            _getHandle: function(e) {
                return this.options.handle ? !!a(e.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(e) {
                var c = this.options,
                    e = a.isFunction(c.helper) ?
                    a(c.helper.apply(this.element[0], [e])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo);
                e[0] !== this.element[0] && !/(fixed|absolute)/.test(e.css("position")) && e.css("position", "absolute");
                return e
            },
            _adjustOffsetFromHelper: function(e) {
                "string" === typeof e && (e = e.split(" "));
                a.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                });
                "left" in e && (this.offset.click.left = e.left + this.margins.left);
                "right" in
                e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left);
                "top" in e && (this.offset.click.top = e.top + this.margins.top);
                "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                "absolute" === this.cssPosition && (this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) && (e.left += this.scrollParent.scrollLeft(),
                    e.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) e = {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e,
                    c, b;
                e = this.options;
                "parent" === e.containment && (e.containment = this.helper[0].parentNode);
                if ("document" === e.containment || "window" === e.containment) this.containment = ["document" === e.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === e.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === e.containment ? 0 : a(window).scrollLeft()) + a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? 0 : a(window).scrollTop()) + (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                if (!/^(document|window|parent)$/.test(e.containment) && e.containment.constructor !== Array) {
                    if (c = a(e.containment), b = c[0]) e = "hidden" !== a(b).css("overflow"), this.containment = [(parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0), (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"),
                        10) || 0), (e ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderRightWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderBottomWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
                } else e.containment.constructor === Array &&
                    (this.containment = e.containment)
            },
            _convertPositionTo: function(e, c) {
                c || (c = this.position);
                var b = "absolute" === e ? 1 : -1,
                    d = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    g = /(html|body)/i.test(d[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : d.scrollTop()) * b,
                    left: c.left + this.offset.relative.left * b + this.offset.parent.left *
                        b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : d.scrollLeft()) * b
                }
            },
            _generatePosition: function(e) {
                var c, b, d, g = this.options,
                    l = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    f = /(html|body)/i.test(l[0].tagName);
                d = e.pageX;
                b = e.pageY;
                this.originalPosition && (this.containment && (this.relative_container ? (c = this.relative_container.offset(), c = [this.containment[0] + c.left, this.containment[1] +
                    c.top, this.containment[2] + c.left, this.containment[3] + c.top
                ]) : c = this.containment, e.pageX - this.offset.click.left < c[0] && (d = c[0] + this.offset.click.left), e.pageY - this.offset.click.top < c[1] && (b = c[1] + this.offset.click.top), e.pageX - this.offset.click.left > c[2] && (d = c[2] + this.offset.click.left), e.pageY - this.offset.click.top > c[3] && (b = c[3] + this.offset.click.top)), g.grid && (b = g.grid[1] ? this.originalPageY + Math.round((b - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, b = c ? b - this.offset.click.top >= c[1] ||
                    b - this.offset.click.top > c[3] ? b : b - this.offset.click.top >= c[1] ? b - g.grid[1] : b + g.grid[1] : b, d = g.grid[0] ? this.originalPageX + Math.round((d - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, d = c ? d - this.offset.click.left >= c[0] || d - this.offset.click.left > c[2] ? d : d - this.offset.click.left >= c[0] ? d - g.grid[0] : d + g.grid[0] : d));
                return {
                    top: b - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : l.scrollTop()),
                    left: d - this.offset.click.left -
                        this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : l.scrollLeft())
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging");
                this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
                this.helper = null;
                this.cancelHelperRemoval = !1
            },
            _trigger: function(e, c, b) {
                b = b || this._uiHash();
                a.ui.plugin.call(this, e, [c, b]);
                "drag" === e && (this.positionAbs = this._convertPositionTo("absolute"));
                return a.Widget.prototype._trigger.call(this,
                    e, c, b)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        });
        a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, c) {
                var b = a(this).data("ui-draggable"),
                    d = b.options,
                    g = a.extend({}, c, {
                        item: b.element
                    });
                b.sortables = [];
                a(d.connectToSortable).each(function() {
                    var c = a.data(this, "ui-sortable");
                    c && !c.options.disabled && (b.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }), c.refreshPositions(), c._trigger("activate",
                        e, g))
                })
            },
            stop: function(e, c) {
                var b = a(this).data("ui-draggable"),
                    d = a.extend({}, c, {
                        item: b.element
                    });
                a.each(b.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, b.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === b.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, d))
                })
            },
            drag: function(e, c) {
                var b = a(this).data("ui-draggable"),
                    d = this;
                a.each(b.sortables, function() {
                    var g = !1,
                        l = this;
                    this.instance.positionAbs = b.positionAbs;
                    this.instance.helperProportions = b.helperProportions;
                    this.instance.offset.click = b.offset.click;
                    this.instance._intersectsWith(this.instance.containerCache) && (g = !0, a.each(b.sortables, function() {
                        this.instance.positionAbs = b.positionAbs;
                        this.instance.helperProportions = b.helperProportions;
                        this.instance.offset.click =
                            b.offset.click;
                        this !== l && (this.instance._intersectsWith(this.instance.containerCache) && a.contains(l.instance.element[0], this.instance.element[0])) && (g = !1);
                        return g
                    }));
                    g ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(d).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                            return c.helper[0]
                        }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = b.offset.click.top, this.instance.offset.click.left = b.offset.click.left, this.instance.offset.parent.left -= b.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= b.offset.parent.top - this.instance.offset.parent.top, b._trigger("toSortable", e), b.dropped = this.instance.element, b.currentItem = b.element, this.instance.fromOutside = b), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver &&
                        (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), b._trigger("fromSortable", e), b.dropped = !1)
                })
            }
        });
        a.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var e = a("body"),
                    c = a(this).data("ui-draggable").options;
                e.css("cursor") && (c._cursor = e.css("cursor"));
                e.css("cursor", c.cursor)
            },
            stop: function() {
                try {
                    var e = a(this).data("ui-draggable").options;
                    e._cursor && a("body").css("cursor", e._cursor)
                } catch (c) {
                    a("body").css("cursor", "")
                }
            }
        });
        a.ui.plugin.add("draggable", "opacity", {
            start: function(e, c) {
                var b = a(c.helper),
                    d = a(this).data("ui-draggable").options;
                b.css("opacity") && (d._opacity = b.css("opacity"));
                b.css("opacity", d.opacity)
            },
            stop: function(e, c) {
                var b = a(this).data("ui-draggable").options;
                b._opacity && a(c.helper).css("opacity",
                    b._opacity)
            }
        });
        a.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var e = a(this).data("ui-draggable");
                e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
            },
            drag: function(e) {
                var c = a(this).data("ui-draggable"),
                    b = c.options,
                    d = !1;
                if (c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName) {
                    if (!b.axis || "x" !== b.axis) c.overflowOffset.top + c.scrollParent[0].offsetHeight - e.pageY < b.scrollSensitivity ? c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop +
                        b.scrollSpeed : e.pageY - c.overflowOffset.top < b.scrollSensitivity && (c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop - b.scrollSpeed);
                    if (!b.axis || "y" !== b.axis) c.overflowOffset.left + c.scrollParent[0].offsetWidth - e.pageX < b.scrollSensitivity ? c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft + b.scrollSpeed : e.pageX - c.overflowOffset.left < b.scrollSensitivity && (c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft - b.scrollSpeed)
                } else {
                    if (!b.axis || "x" !== b.axis) e.pageY - a(document).scrollTop() <
                        b.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (e.pageY - a(document).scrollTop()) < b.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed));
                    if (!b.axis || "y" !== b.axis) e.pageX - a(document).scrollLeft() < b.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) : a(window).width() - (e.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + b.scrollSpeed))
                }!1 !==
                    d && (a.ui.ddmanager && !b.dropBehaviour) && a.ui.ddmanager.prepareOffsets(c, e)
            }
        });
        a.ui.plugin.add("draggable", "snap", {
            start: function() {
                var e = a(this).data("ui-draggable"),
                    c = e.options;
                e.snapElements = [];
                a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                    var b = a(this),
                        c = b.offset();
                    this !== e.element[0] && e.snapElements.push({
                        item: this,
                        width: b.outerWidth(),
                        height: b.outerHeight(),
                        top: c.top,
                        left: c.left
                    })
                })
            },
            drag: function(e, c) {
                var b, d, g, l, f, h, k, m, p, t, q = a(this).data("ui-draggable"),
                    r = q.options,
                    v = r.snapTolerance,
                    u = c.offset.left,
                    y = u + q.helperProportions.width,
                    x = c.offset.top,
                    B = x + q.helperProportions.height;
                for (p = q.snapElements.length - 1; 0 <= p; p--) f = q.snapElements[p].left, h = f + q.snapElements[p].width, k = q.snapElements[p].top, m = k + q.snapElements[p].height, f - v < u && u < h + v && k - v < x && x < m + v || f - v < u && u < h + v && k - v < B && B < m + v || f - v < y && y < h + v && k - v < x && x < m + v || f - v < y && y < h + v && k - v < B && B < m + v ? ("inner" !== r.snapMode && (b = Math.abs(k - B) <= v, d = Math.abs(m - x) <= v, g = Math.abs(f - y) <= v, l = Math.abs(h - u) <= v, b && (c.position.top = q._convertPositionTo("relative", {
                        top: k - q.helperProportions.height,
                        left: 0
                    }).top - q.margins.top), d && (c.position.top = q._convertPositionTo("relative", {
                        top: m,
                        left: 0
                    }).top - q.margins.top), g && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: f - q.helperProportions.width
                    }).left - q.margins.left), l && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - q.margins.left)), t = b || d || g || l, "outer" !== r.snapMode && (b = Math.abs(k - x) <= v, d = Math.abs(m - B) <= v, g = Math.abs(f - u) <= v, l = Math.abs(h - y) <= v, b && (c.position.top = q._convertPositionTo("relative", {
                        top: k,
                        left: 0
                    }).top - q.margins.top), d && (c.position.top = q._convertPositionTo("relative", {
                        top: m - q.helperProportions.height,
                        left: 0
                    }).top - q.margins.top), g && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: f
                    }).left - q.margins.left), l && (c.position.left = q._convertPositionTo("relative", {
                        top: 0,
                        left: h - q.helperProportions.width
                    }).left - q.margins.left)), !q.snapElements[p].snapping && (b || d || g || l || t) && q.options.snap.snap && q.options.snap.snap.call(q.element, e, a.extend(q._uiHash(), {
                        snapItem: q.snapElements[p].item
                    })),
                    q.snapElements[p].snapping = b || d || g || l || t) : (q.snapElements[p].snapping && q.options.snap.release && q.options.snap.release.call(q.element, e, a.extend(q._uiHash(), {
                    snapItem: q.snapElements[p].item
                })), q.snapElements[p].snapping = !1)
            }
        });
        a.ui.plugin.add("draggable", "stack", {
            start: function() {
                var e, c = this.data("ui-draggable").options,
                    c = a.makeArray(a(c.stack)).sort(function(b, c) {
                        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                    });
                c.length && (e = parseInt(a(c[0]).css("zIndex"), 10) || 0, a(c).each(function(b) {
                    a(this).css("zIndex",
                        e + b)
                }), this.css("zIndex", e + c.length))
            }
        });
        a.ui.plugin.add("draggable", "zIndex", {
            start: function(e, c) {
                var b = a(c.helper),
                    d = a(this).data("ui-draggable").options;
                b.css("zIndex") && (d._zIndex = b.css("zIndex"));
                b.css("zIndex", d.zIndex)
            },
            stop: function(e, c) {
                var b = a(this).data("ui-draggable").options;
                b._zIndex && a(c.helper).css("zIndex", b._zIndex)
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.droppable", {
            version: "1.10.2",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var e = this.options,
                    c = e.accept;
                this.isover = !1;
                this.isout = !0;
                this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                };
                this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                };
                a.ui.ddmanager.droppables[e.scope] =
                    a.ui.ddmanager.droppables[e.scope] || [];
                a.ui.ddmanager.droppables[e.scope].push(this);
                e.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var e = 0, c = a.ui.ddmanager.droppables[this.options.scope]; e < c.length; e++) c[e] === this && c.splice(e, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(e, c) {
                "accept" === e && (this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                });
                a.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(e) {
                var c =
                    a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass);
                c && this._trigger("activate", e, this.ui(c))
            },
            _deactivate: function(e) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass);
                c && this._trigger("deactivate", e, this.ui(c))
            },
            _over: function(e) {
                var c = a.ui.ddmanager.current;
                if (c && (c.currentItem || c.element)[0] !== this.element[0])
                    if (this.accept.call(this.element[0], c.currentItem || c.element)) this.options.hoverClass &&
                        this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(c))
            },
            _out: function(e) {
                var c = a.ui.ddmanager.current;
                if (c && (c.currentItem || c.element)[0] !== this.element[0])
                    if (this.accept.call(this.element[0], c.currentItem || c.element)) this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(c))
            },
            _drop: function(e, c) {
                var b = c || a.ui.ddmanager.current,
                    d = !1;
                if (!b || (b.currentItem || b.element)[0] === this.element[0]) return !1;
                this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var c =
                        a.data(this, "ui-droppable");
                    if (c.options.greedy && !c.options.disabled && c.options.scope === b.options.scope && c.accept.call(c.element[0], b.currentItem || b.element) && a.ui.intersect(b, a.extend(c, {
                            offset: c.element.offset()
                        }), c.options.tolerance)) return d = !0, !1
                });
                return d ? !1 : this.accept.call(this.element[0], b.currentItem || b.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e,
                    this.ui(b)), this.element) : !1
            },
            ui: function(a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        });
        a.ui.intersect = function(a, c, b) {
            if (!c.offset) return !1;
            var d = (a.positionAbs || a.position.absolute).left,
                g = d + a.helperProportions.width,
                l = (a.positionAbs || a.position.absolute).top,
                f = l + a.helperProportions.height,
                h = c.offset.left,
                k = h + c.proportions.width,
                m = c.offset.top,
                p = m + c.proportions.height;
            switch (b) {
                case "fit":
                    return h <= d && g <= k && m <= l && f <= p;
                case "intersect":
                    return h <
                        d + a.helperProportions.width / 2 && g - a.helperProportions.width / 2 < k && m < l + a.helperProportions.height / 2 && f - a.helperProportions.height / 2 < p;
                case "pointer":
                    return b = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, a = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, a > m && a < m + c.proportions.height && b > h && b < h + c.proportions.width;
                case "touch":
                    return (l >= m && l <= p || f >= m && f <= p || l < m && f > p) && (d >= h && d <= k || g >= h && g <= k || d < h && g > k);
                default:
                    return !1
            }
        };
        a.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(e, c) {
                var b, d, g = a.ui.ddmanager.droppables[e.options.scope] || [],
                    l = c ? c.type : null,
                    f = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                b = 0;
                a: for (; b < g.length; b++)
                    if (!(g[b].options.disabled || e && !g[b].accept.call(g[b].element[0], e.currentItem || e.element))) {
                        for (d = 0; d < f.length; d++)
                            if (f[d] === g[b].element[0]) {
                                g[b].proportions.height = 0;
                                continue a
                            }
                        g[b].visible = "none" !== g[b].element.css("display");
                        g[b].visible && ("mousedown" === l && g[b]._activate.call(g[b],
                            c), g[b].offset = g[b].element.offset(), g[b].proportions = {
                            width: g[b].element[0].offsetWidth,
                            height: g[b].element[0].offsetHeight
                        })
                    }
            },
            drop: function(e, c) {
                var b = !1;
                a.each((a.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                    if (this.options && (!this.options.disabled && (this.visible && a.ui.intersect(e, this, this.options.tolerance)) && (b = this._drop.call(this, c) || b), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element))) this.isout = !0, this.isover = !1, this._deactivate.call(this,
                        c)
                });
                return b
            },
            dragStart: function(e, c) {
                e.element.parentsUntil("body").bind("scroll.droppable", function() {
                    e.options.refreshPositions || a.ui.ddmanager.prepareOffsets(e, c)
                })
            },
            drag: function(e, c) {
                e.options.refreshPositions && a.ui.ddmanager.prepareOffsets(e, c);
                a.each(a.ui.ddmanager.droppables[e.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var b, d, g;
                        g = a.ui.intersect(e, this, this.options.tolerance);
                        var l = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        l && (this.options.greedy &&
                            (d = this.options.scope, g = this.element.parents(":data(ui-droppable)").filter(function() {
                                return a.data(this, "ui-droppable").options.scope === d
                            }), g.length && (b = a.data(g[0], "ui-droppable"), b.greedyChild = "isover" === l)), b && "isover" === l && (b.isover = !1, b.isout = !0, b._out.call(b, c)), this[l] = !0, this["isout" === l ? "isover" : "isout"] = !1, this["isover" === l ? "_over" : "_out"].call(this, c), b && "isout" === l && (b.isout = !1, b.isover = !0, b._over.call(b, c)))
                    }
                })
            },
            dragStop: function(e, c) {
                e.element.parentsUntil("body").unbind("scroll.droppable");
                e.options.refreshPositions || a.ui.ddmanager.prepareOffsets(e, c)
            }
        }
    })(jQuery);
    (function(a) {
        function e(a) {
            return parseInt(a, 10) || 0
        }

        function c(a) {
            return !isNaN(parseInt(a, 10))
        }
        a.widget("ui.resizable", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var b, c, g, e, f, h = this,
                    k = this.options;
                this.element.addClass("ui-resizable");
                a.extend(this, {
                    _aspectRatio: !!k.aspectRatio,
                    aspectRatio: k.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null
                });
                this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"),
                    this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize());
                this.handles = k.handles || (!a(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                });
                if (this.handles.constructor === String) {
                    "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    b = this.handles.split(",");
                    this.handles = {};
                    for (c = 0; c < b.length; c++) g = a.trim(b[c]), f = "ui-resizable-" + g, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                        zIndex: k.zIndex
                    }), "se" === g && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[g] = ".ui-resizable-" + g, this.element.append(e)
                }
                this._renderAxis = function(b) {
                    var c, f, d, b = b || this.element;
                    for (c in this.handles) this.handles[c].constructor ===
                        String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (f = a(this.handles[c], this.element), d = /sw|ne|nw|se|n|s/.test(c) ? f.outerHeight() : f.outerWidth(), f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(f, d), this._proportionallyResize()), a(this.handles[c])
                };
                this._renderAxis(this.element);
                this._handles = a(".ui-resizable-handle", this.element).disableSelection();
                this._handles.mouseover(function() {
                    h.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), h.axis = e && e[1] ? e[1] : "se")
                });
                k.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    k.disabled || (a(this).removeClass("ui-resizable-autohide"), h._handles.show())
                }).mouseleave(function() {
                    !k.disabled && !h.resizing && (a(this).addClass("ui-resizable-autohide"), h._handles.hide())
                }));
                this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var b, c = function(b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove());
                this.originalElement.css("resize", this.originalResizeStyle);
                c(this.originalElement);
                return this
            },
            _mouseCapture: function(b) {
                var c, g, e = !1;
                for (c in this.handles)
                    if (g = a(this.handles[c])[0], g === b.target || a.contains(g, b.target)) e = !0;
                return !this.options.disabled && e
            },
            _mouseStart: function(b) {
                var c, g, l;
                l = this.options;
                c = this.element.position();
                var f = this.element;
                this.resizing = !0;
                /absolute/.test(f.css("position")) ? f.css({
                    position: "absolute",
                    top: f.css("top"),
                    left: f.css("left")
                }) : f.is(".ui-draggable") && f.css({
                    position: "absolute",
                    top: c.top,
                    left: c.left
                });
                this._renderProxy();
                c = e(this.helper.css("left"));
                g = e(this.helper.css("top"));
                l.containment && (c += a(l.containment).scrollLeft() || 0, g += a(l.containment).scrollTop() || 0);
                this.offset = this.helper.offset();
                this.position = {
                    left: c,
                    top: g
                };
                this.size = this._helper ? {
                    width: f.outerWidth(),
                    height: f.outerHeight()
                } : {
                    width: f.width(),
                    height: f.height()
                };
                this.originalSize = this._helper ? {
                    width: f.outerWidth(),
                    height: f.outerHeight()
                } : {
                    width: f.width(),
                    height: f.height()
                };
                this.originalPosition = {
                    left: c,
                    top: g
                };
                this.sizeDiff = {
                    width: f.outerWidth() - f.width(),
                    height: f.outerHeight() -
                        f.height()
                };
                this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                };
                this.aspectRatio = "number" === typeof l.aspectRatio ? l.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                l = a(".ui-resizable-" + this.axis).css("cursor");
                a("body").css("cursor", "auto" === l ? this.axis + "-resize" : l);
                f.addClass("ui-resizable-resizing");
                this._propagate("start", b);
                return !0
            },
            _mouseDrag: function(b) {
                var c, g = this.helper,
                    e = {};
                c = this.originalMousePosition;
                var f = this.position.top,
                    h = this.position.left,
                    k = this.size.width,
                    m = this.size.height,
                    p = this._change[this.axis];
                if (!p) return !1;
                c = p.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]);
                this._updateVirtualBoundaries(b.shiftKey);
                if (this._aspectRatio || b.shiftKey) c = this._updateRatio(c, b);
                c = this._respectSize(c, b);
                this._updateCache(c);
                this._propagate("resize", b);
                this.position.top !== f && (e.top = this.position.top + "px");
                this.position.left !== h && (e.left = this.position.left + "px");
                this.size.width !== k && (e.width = this.size.width + "px");
                this.size.height !== m && (e.height = this.size.height + "px");
                g.css(e);
                !this._helper &&
                    this._proportionallyResizeElements.length && this._proportionallyResize();
                a.isEmptyObject(e) || this._trigger("resize", b, this.ui());
                return !1
            },
            _mouseStop: function(b) {
                this.resizing = !1;
                var c, g, e, f = this.options;
                this._helper && (c = this._proportionallyResizeElements, c = (g = c.length && /textarea/i.test(c[0].nodeName)) && a.ui.hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, g = g ? 0 : this.sizeDiff.width, g = {
                    width: this.helper.width() - g,
                    height: this.helper.height() - c
                }, c = parseInt(this.element.css("left"), 10) + (this.position.left -
                    this.originalPosition.left) || null, e = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, f.animate || this.element.css(a.extend(g, {
                    top: e,
                    left: c
                })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !f.animate && this._proportionallyResize());
                a("body").css("cursor", "auto");
                this.element.removeClass("ui-resizable-resizing");
                this._propagate("stop", b);
                this._helper && this.helper.remove();
                return !1
            },
            _updateVirtualBoundaries: function(a) {
                var d,
                    g, e, f;
                f = this.options;
                f = {
                    minWidth: c(f.minWidth) ? f.minWidth : 0,
                    maxWidth: c(f.maxWidth) ? f.maxWidth : Infinity,
                    minHeight: c(f.minHeight) ? f.minHeight : 0,
                    maxHeight: c(f.maxHeight) ? f.maxHeight : Infinity
                };
                if (this._aspectRatio || a) a = f.minHeight * this.aspectRatio, g = f.minWidth / this.aspectRatio, d = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, a > f.minWidth && (f.minWidth = a), g > f.minHeight && (f.minHeight = g), d < f.maxWidth && (f.maxWidth = d), e < f.maxHeight && (f.maxHeight = e);
                this._vBoundaries = f
            },
            _updateCache: function(a) {
                this.offset =
                    this.helper.offset();
                c(a.left) && (this.position.left = a.left);
                c(a.top) && (this.position.top = a.top);
                c(a.height) && (this.size.height = a.height);
                c(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function(a) {
                var d = this.position,
                    g = this.size,
                    e = this.axis;
                c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio);
                "sw" === e && (a.left = d.left + (g.width - a.width), a.top = null);
                "nw" === e && (a.top = d.top + (g.height - a.height), a.left = d.left + (g.width - a.width));
                return a
            },
            _respectSize: function(a) {
                var d =
                    this._vBoundaries,
                    g = this.axis,
                    e = c(a.width) && d.maxWidth && d.maxWidth < a.width,
                    f = c(a.height) && d.maxHeight && d.maxHeight < a.height,
                    h = c(a.width) && d.minWidth && d.minWidth > a.width,
                    k = c(a.height) && d.minHeight && d.minHeight > a.height,
                    m = this.originalPosition.left + this.originalSize.width,
                    p = this.position.top + this.size.height,
                    t = /sw|nw|w/.test(g),
                    g = /nw|ne|n/.test(g);
                h && (a.width = d.minWidth);
                k && (a.height = d.minHeight);
                e && (a.width = d.maxWidth);
                f && (a.height = d.maxHeight);
                h && t && (a.left = m - d.minWidth);
                e && t && (a.left = m - d.maxWidth);
                k && g && (a.top = p - d.minHeight);
                f && g && (a.top = p - d.maxHeight);
                !a.width && !a.height && !a.left && a.top ? a.top = null : !a.width && (!a.height && !a.top && a.left) && (a.left = null);
                return a
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var a, c, g, e, f, h = this.helper || this.element;
                    for (a = 0; a < this._proportionallyResizeElements.length; a++) {
                        f = this._proportionallyResizeElements[a];
                        if (!this.borderDif) {
                            this.borderDif = [];
                            g = [f.css("borderTopWidth"), f.css("borderRightWidth"), f.css("borderBottomWidth"),
                                f.css("borderLeftWidth")
                            ];
                            e = [f.css("paddingTop"), f.css("paddingRight"), f.css("paddingBottom"), f.css("paddingLeft")];
                            for (c = 0; c < g.length; c++) this.borderDif[c] = (parseInt(g[c], 10) || 0) + (parseInt(e[c], 10) || 0)
                        }
                        f.css({
                            height: h.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: h.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var b = this.options;
                this.elementOffset = this.element.offset();
                this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() -
                        1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++b.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, c) {
                    return {
                        width: this.originalSize.width + c
                    }
                },
                w: function(a, c) {
                    return {
                        left: this.originalPosition.left + c,
                        width: this.originalSize.width - c
                    }
                },
                n: function(a, c, g) {
                    return {
                        top: this.originalPosition.top + g,
                        height: this.originalSize.height - g
                    }
                },
                s: function(a, c, g) {
                    return {
                        height: this.originalSize.height +
                            g
                    }
                },
                se: function(b, c, g) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, g]))
                },
                sw: function(b, c, g) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, g]))
                },
                ne: function(b, c, g) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, g]))
                },
                nw: function(b, c, g) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, g]))
                }
            },
            _propagate: function(b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]);
                "resize" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        });
        a.ui.plugin.add("resizable", "animate", {
            stop: function(b) {
                var c = a(this).data("ui-resizable"),
                    g = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    h = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    f = {
                        width: c.size.width - (f ? 0 : c.sizeDiff.width),
                        height: c.size.height - h
                    },
                    h = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(f, k && h ? {
                    top: k,
                    left: h
                } : {}), {
                    duration: g.animateDuration,
                    easing: g.animateEasing,
                    step: function() {
                        var f = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"),
                                10)
                        };
                        e && e.length && a(e[0]).css({
                            width: f.width,
                            height: f.height
                        });
                        c._updateCache(f);
                        c._propagate("resize", b)
                    }
                })
            }
        });
        a.ui.plugin.add("resizable", "containment", {
            start: function() {
                var b, c, g, l, f, h = a(this).data("ui-resizable"),
                    k = h.element;
                g = h.options.containment;
                if (k = g instanceof a ? g.get(0) : /parent/.test(g) ? k.parent().get(0) : g) h.containerElement = a(k), /document/.test(g) || g === document ? (h.containerOffset = {
                    left: 0,
                    top: 0
                }, h.containerPosition = {
                    left: 0,
                    top: 0
                }, h.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (b = a(k), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, f) {
                    c[a] = e(b.css("padding" + f))
                }), h.containerOffset = b.offset(), h.containerPosition = b.position(), h.containerSize = {
                    height: b.innerHeight() - c[3],
                    width: b.innerWidth() - c[1]
                }, g = h.containerOffset, l = h.containerSize.height, f = h.containerSize.width, f = a.ui.hasScroll(k, "left") ? k.scrollWidth : f, l = a.ui.hasScroll(k) ? k.scrollHeight : l, h.parentData = {
                    element: k,
                    left: g.left,
                    top: g.top,
                    width: f,
                    height: l
                })
            },
            resize: function(b) {
                var c, g, e, f, h = a(this).data("ui-resizable");
                c = h.options;
                g = h.containerOffset;
                e = h.position;
                b = h._aspectRatio || b.shiftKey;
                f = {
                    top: 0,
                    left: 0
                };
                var k = h.containerElement;
                k[0] !== document && /static/.test(k.css("position")) && (f = g);
                if (e.left < (h._helper ? g.left : 0)) h.size.width += h._helper ? h.position.left - g.left : h.position.left - f.left, b && (h.size.height = h.size.width / h.aspectRatio), h.position.left = c.helper ? g.left : 0;
                if (e.top < (h._helper ? g.top : 0)) h.size.height += h._helper ? h.position.top - g.top :
                    h.position.top, b && (h.size.width = h.size.height * h.aspectRatio), h.position.top = h._helper ? g.top : 0;
                h.offset.left = h.parentData.left + h.position.left;
                h.offset.top = h.parentData.top + h.position.top;
                c = Math.abs(h.offset.left - f.left + h.sizeDiff.width);
                g = Math.abs((h._helper ? h.offset.top - f.top : h.offset.top - g.top) + h.sizeDiff.height);
                e = h.containerElement.get(0) === h.element.parent().get(0);
                f = /relative|absolute/.test(h.containerElement.css("position"));
                e && f && (c -= h.parentData.left);
                c + h.size.width >= h.parentData.width &&
                    (h.size.width = h.parentData.width - c, b && (h.size.height = h.size.width / h.aspectRatio));
                g + h.size.height >= h.parentData.height && (h.size.height = h.parentData.height - g, b && (h.size.width = h.size.height * h.aspectRatio))
            },
            stop: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    g = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    h = a(b.helper),
                    k = h.offset(),
                    m = h.outerWidth() - b.sizeDiff.width,
                    h = h.outerHeight() - b.sizeDiff.height;
                b._helper && (!c.animate && /relative/.test(f.css("position"))) && a(this).css({
                    left: k.left -
                        e.left - g.left,
                    width: m,
                    height: h
                });
                b._helper && (!c.animate && /static/.test(f.css("position"))) && a(this).css({
                    left: k.left - e.left - g.left,
                    width: m,
                    height: h
                })
            }
        });
        a.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var b = a(this).data("ui-resizable").options,
                    c = function(b) {
                        a(b).each(function() {
                            var b = a(this);
                            b.data("ui-resizable-alsoresize", {
                                width: parseInt(b.width(), 10),
                                height: parseInt(b.height(), 10),
                                left: parseInt(b.css("left"), 10),
                                top: parseInt(b.css("top"), 10)
                            })
                        })
                    };
                "object" === typeof b.alsoResize && !b.alsoResize.parentNode ?
                    b.alsoResize.length ? (b.alsoResize = b.alsoResize[0], c(b.alsoResize)) : a.each(b.alsoResize, function(a) {
                        c(a)
                    }) : c(b.alsoResize)
            },
            resize: function(b, c) {
                var g = a(this).data("ui-resizable"),
                    e = g.options,
                    f = g.originalSize,
                    h = g.originalPosition,
                    k = {
                        height: g.size.height - f.height || 0,
                        width: g.size.width - f.width || 0,
                        top: g.position.top - h.top || 0,
                        left: g.position.left - h.left || 0
                    },
                    m = function(b, f) {
                        a(b).each(function() {
                            var b = a(this),
                                h = a(this).data("ui-resizable-alsoresize"),
                                g = {},
                                e = f && f.length ? f : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            a.each(e, function(a, b) {
                                var c = (h[b] || 0) + (k[b] || 0);
                                c && 0 <= c && (g[b] = c || null)
                            });
                            b.css(g)
                        })
                    };
                "object" === typeof e.alsoResize && !e.alsoResize.nodeType ? a.each(e.alsoResize, function(a, b) {
                    m(a, b)
                }) : m(e.alsoResize)
            },
            stop: function() {
                a(this).removeData("resizable-alsoresize")
            }
        });
        a.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    g = b.size;
                b.ghost = b.originalElement.clone();
                b.ghost.css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: g.height,
                    width: g.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" === typeof c.ghost ? c.ghost : "");
                b.ghost.appendTo(b.helper)
            },
            resize: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function() {
                var b = a(this).data("ui-resizable");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        });
        a.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var b = a(this).data("ui-resizable"),
                    c = b.options,
                    g = b.size,
                    e = b.originalSize,
                    f = b.originalPosition,
                    h = b.axis,
                    k = "number" === typeof c.grid ? [c.grid, c.grid] : c.grid,
                    m = k[0] || 1,
                    p = k[1] || 1,
                    t = Math.round((g.width - e.width) / m) * m,
                    g = Math.round((g.height - e.height) / p) * p,
                    q = e.width + t,
                    e = e.height + g,
                    r = c.maxWidth && c.maxWidth < q,
                    v = c.maxHeight && c.maxHeight < e,
                    u = c.minWidth && c.minWidth > q,
                    y = c.minHeight && c.minHeight > e;
                c.grid = k;
                u && (q += m);
                y && (e += p);
                r && (q -= m);
                v && (e -= p);
                /^(se|s|e)$/.test(h) ? (b.size.width = q, b.size.height = e) : /^(ne)$/.test(h) ? (b.size.width = q, b.size.height = e,
                    b.position.top = f.top - g) : (/^(sw)$/.test(h) ? (b.size.width = q, b.size.height = e) : (b.size.width = q, b.size.height = e, b.position.top = f.top - g), b.position.left = f.left - t)
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.selectable", a.ui.mouse, {
            version: "1.10.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var e, c = this;
                this.element.addClass("ui-selectable");
                this.dragged = !1;
                this.refresh = function() {
                    e = a(c.options.filter, c.element[0]);
                    e.addClass("ui-selectee");
                    e.each(function() {
                        var b = a(this),
                            c = b.offset();
                        a.data(this, "selectable-item", {
                            element: this,
                            $element: b,
                            left: c.left,
                            top: c.top,
                            right: c.left + b.outerWidth(),
                            bottom: c.top + b.outerHeight(),
                            startselected: !1,
                            selected: b.hasClass("ui-selected"),
                            selecting: b.hasClass("ui-selecting"),
                            unselecting: b.hasClass("ui-unselecting")
                        })
                    })
                };
                this.refresh();
                this.selectees = e.addClass("ui-selectee");
                this._mouseInit();
                this.helper = a("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item");
                this.element.removeClass("ui-selectable ui-selectable-disabled");
                this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var c = this,
                    b = this.options;
                this.opos = [e.pageX, e.pageY];
                this.options.disabled || (this.selectees = a(b.filter, this.element[0]), this._trigger("start", e), a(b.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), b.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var b = a.data(this, "selectable-item");
                    b.startselected = !0;
                    !e.metaKey && !e.ctrlKey && (b.$element.removeClass("ui-selected"), b.selected = !1, b.$element.addClass("ui-unselecting"), b.unselecting = !0, c._trigger("unselecting", e, {
                        unselecting: b.element
                    }))
                }), a(e.target).parents().addBack().each(function() {
                    var b, g = a.data(this, "selectable-item");
                    if (g) return b = !e.metaKey && !e.ctrlKey || !g.$element.hasClass("ui-selected"), g.$element.removeClass(b ? "ui-unselecting" : "ui-selected").addClass(b ? "ui-selecting" : "ui-unselecting"), g.unselecting = !b, g.selecting = b, (g.selected = b) ? c._trigger("selecting", e, {
                        selecting: g.element
                    }) : c._trigger("unselecting", e, {
                        unselecting: g.element
                    }), !1
                }))
            },
            _mouseDrag: function(e) {
                this.dragged = !0;
                if (!this.options.disabled) {
                    var c, b = this,
                        d = this.options,
                        g = this.opos[0],
                        l = this.opos[1],
                        f = e.pageX,
                        h = e.pageY;
                    g > f && (c = f, f = g, g = c);
                    l > h && (c = h, h = l, l = c);
                    this.helper.css({
                        left: g,
                        top: l,
                        width: f - g,
                        height: h - l
                    });
                    this.selectees.each(function() {
                        var c = a.data(this, "selectable-item"),
                            m = !1;
                        c && c.element !== b.element[0] && ("touch" === d.tolerance ? m = !(c.left > f || c.right < g || c.top > h || c.bottom < l) : "fit" === d.tolerance && (m = c.left > g && c.right < f && c.top > l && c.bottom < h), m ? (c.selected && (c.$element.removeClass("ui-selected"),
                            c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, b._trigger("selecting", e, {
                            selecting: c.element
                        }))) : (c.selecting && ((e.metaKey || e.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), b._trigger("unselecting",
                            e, {
                                unselecting: c.element
                            }))), c.selected && (!e.metaKey && !e.ctrlKey && !c.startselected) && (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, b._trigger("unselecting", e, {
                            unselecting: c.element
                        }))))
                    });
                    return !1
                }
            },
            _mouseStop: function(e) {
                var c = this;
                this.dragged = !1;
                a(".ui-unselecting", this.element[0]).each(function() {
                    var b = a.data(this, "selectable-item");
                    b.$element.removeClass("ui-unselecting");
                    b.unselecting = !1;
                    b.startselected = !1;
                    c._trigger("unselected",
                        e, {
                            unselected: b.element
                        })
                });
                a(".ui-selecting", this.element[0]).each(function() {
                    var b = a.data(this, "selectable-item");
                    b.$element.removeClass("ui-selecting").addClass("ui-selected");
                    b.selecting = !1;
                    b.selected = !0;
                    b.startselected = !0;
                    c._trigger("selected", e, {
                        selected: b.element
                    })
                });
                this._trigger("stop", e);
                this.helper.remove();
                return !1
            }
        })
    })(jQuery);
    (function(a) {
        function e(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        }
        a.widget("ui.sortable", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1E3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var a = this.options;
                this.containerCache = {};
                this.element.addClass("ui-sortable");
                this.refresh();
                this.floating = this.items.length ? "x" === a.axis || e(this.items[0].item) : !1;
                this.offset = this.element.offset();
                this._mouseInit();
                this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled");
                this._mouseDestroy();
                for (var a = this.items.length - 1; 0 <= a; a--) this.items[a].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(c, b) {
                "disabled" === c ? (this.options[c] = b, this.widget().toggleClass("ui-sortable-disabled", !!b)) : a.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(c, b) {
                var d = null,
                    g = !1,
                    e = this;
                if (this.reverting || this.options.disabled || "static" === this.options.type) return !1;
                this._refreshItems(c);
                a(c.target).parents().each(function() {
                    if (a.data(this, e.widgetName + "-item") ===
                        e) return d = a(this), !1
                });
                a.data(c.target, e.widgetName + "-item") === e && (d = a(c.target));
                if (!d || this.options.handle && !b && (a(this.options.handle, d).find("*").addBack().each(function() {
                        this === c.target && (g = !0)
                    }), !g)) return !1;
                this.currentItem = d;
                this._removeCurrentsFromItems();
                return !0
            },
            _mouseStart: function(c, b, d) {
                var g, b = this.options;
                this.currentContainer = this;
                this.refreshPositions();
                this.helper = this._createHelper(c);
                this._cacheHelperProportions();
                this._cacheMargins();
                this.scrollParent = this.helper.scrollParent();
                this.offset = this.currentItem.offset();
                this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                };
                a.extend(this.offset, {
                    click: {
                        left: c.pageX - this.offset.left,
                        top: c.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                });
                this.helper.css("position", "absolute");
                this.cssPosition = this.helper.css("position");
                this.originalPosition = this._generatePosition(c);
                this.originalPageX = c.pageX;
                this.originalPageY = c.pageY;
                b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
                this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                };
                this.helper[0] !== this.currentItem[0] && this.currentItem.hide();
                this._createPlaceholder();
                b.containment && this._setContainment();
                b.cursor && "auto" !== b.cursor && (g = this.document.find("body"), this.storedCursor = g.css("cursor"), g.css("cursor", b.cursor), this.storedStylesheet = a("<style>*{ cursor: " + b.cursor + " !important; }</style>").appendTo(g));
                b.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                    this.helper.css("opacity", b.opacity));
                b.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", b.zIndex));
                this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
                this._trigger("start", c, this._uiHash());
                this._preserveHelperProportions || this._cacheHelperProportions();
                if (!d)
                    for (d = this.containers.length - 1; 0 <= d; d--) this.containers[d]._trigger("activate", c, this._uiHash(this));
                a.ui.ddmanager &&
                    (a.ui.ddmanager.current = this);
                a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c);
                this.dragging = !0;
                this.helper.addClass("ui-sortable-helper");
                this._mouseDrag(c);
                return !0
            },
            _mouseDrag: function(c) {
                var b, d, g, e;
                b = this.options;
                d = !1;
                this.position = this._generatePosition(c);
                this.positionAbs = this._convertPositionTo("absolute");
                this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
                this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight - c.pageY < b.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + b.scrollSpeed : c.pageY - this.overflowOffset.top < b.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - b.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - c.pageX < b.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + b.scrollSpeed : c.pageX - this.overflowOffset.left < b.scrollSensitivity && (this.scrollParent[0].scrollLeft =
                        d = this.scrollParent[0].scrollLeft - b.scrollSpeed)) : (c.pageY - a(document).scrollTop() < b.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (c.pageY - a(document).scrollTop()) < b.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed)), c.pageX - a(document).scrollLeft() < b.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) : a(window).width() - (c.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() +
                    b.scrollSpeed))), !1 !== d && (a.ui.ddmanager && !b.dropBehaviour) && a.ui.ddmanager.prepareOffsets(this, c));
                this.positionAbs = this._convertPositionTo("absolute");
                if (!this.options.axis || "y" !== this.options.axis) this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || "x" !== this.options.axis) this.helper[0].style.top = this.position.top + "px";
                for (b = this.items.length - 1; 0 <= b; b--)
                    if (d = this.items[b], g = d.item[0], (e = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && g !== this.currentItem[0] &&
                        this.placeholder[1 === e ? "next" : "prev"]()[0] !== g && !a.contains(this.placeholder[0], g) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], g) : 1)) {
                        this.direction = 1 === e ? "down" : "up";
                        if ("pointer" === this.options.tolerance || this._intersectsWithSides(d)) this._rearrange(c, d);
                        else break;
                        this._trigger("change", c, this._uiHash());
                        break
                    }
                this._contactContainers(c);
                a.ui.ddmanager && a.ui.ddmanager.drag(this, c);
                this._trigger("sort", c, this._uiHash());
                this.lastPositionAbs = this.positionAbs;
                return !1
            },
            _mouseStop: function(c,
                b) {
                if (c) {
                    a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, c);
                    if (this.options.revert) {
                        var d = this,
                            g = this.placeholder.offset(),
                            e = this.options.axis,
                            f = {};
                        if (!e || "x" === e) f.left = g.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
                        if (!e || "y" === e) f.top = g.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
                        this.reverting = !0;
                        a(this.helper).animate(f, parseInt(this.options.revert,
                            10) || 500, function() {
                            d._clear(c)
                        })
                    } else this._clear(c, b);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    });
                    "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var c = this.containers.length - 1; 0 <= c; c--) this.containers[c]._trigger("deactivate", null, this._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, this._uiHash(this)), this.containers[c].containerCache.over =
                        0)
                }
                this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && (this.helper && this.helper[0].parentNode) && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem));
                return this
            },
            serialize: function(c) {
                var b = this._getItemsAsjQuery(c && c.connected),
                    d = [],
                    c = c || {};
                a(b).each(function() {
                    var b = (a(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[\-=_](.+)/);
                    b && d.push((c.key || b[1] + "[]") + "=" + (c.key && c.expression ? b[1] : b[2]))
                });
                !d.length && c.key && d.push(c.key + "=");
                return d.join("&")
            },
            toArray: function(c) {
                var b = this._getItemsAsjQuery(c && c.connected),
                    d = [],
                    c = c || {};
                b.each(function() {
                    d.push(a(c.item || this).attr(c.attribute || "id") || "")
                });
                return d
            },
            _intersectsWith: function(a) {
                var b = this.positionAbs.left,
                    d = b + this.helperProportions.width,
                    g = this.positionAbs.top,
                    e = g + this.helperProportions.height,
                    f = a.left,
                    h = f + a.width,
                    k = a.top,
                    m = k + a.height,
                    p = this.offset.click.top,
                    t = this.offset.click.left;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? g + p > k && g + p < m && b + t > f && b + t < h : f < b + this.helperProportions.width / 2 && d - this.helperProportions.width / 2 < h && k < g + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 <
                    m
            },
            _intersectsWithPointer: function(a) {
                var b = "y" === this.options.axis || this.positionAbs.left + this.offset.click.left > a.left && this.positionAbs.left + this.offset.click.left < a.left + a.width,
                    a = ("x" === this.options.axis || this.positionAbs.top + this.offset.click.top > a.top && this.positionAbs.top + this.offset.click.top < a.top + a.height) && b,
                    b = this._getDragVerticalDirection(),
                    d = this._getDragHorizontalDirection();
                return !a ? !1 : this.floating ? d && "right" === d || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1)
            },
            _intersectsWithSides: function(a) {
                var b =
                    this.positionAbs.top + this.offset.click.top > a.top + a.height / 2 && this.positionAbs.top + this.offset.click.top < a.top + a.height / 2 + a.height,
                    a = this.positionAbs.left + this.offset.click.left > a.left + a.width / 2 && this.positionAbs.left + this.offset.click.left < a.left + a.width / 2 + a.width,
                    d = this._getDragVerticalDirection(),
                    g = this._getDragHorizontalDirection();
                return this.floating && g ? "right" === g && a || "left" === g && !a : d && ("down" === d && b || "up" === d && !b)
            },
            _getDragVerticalDirection: function() {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== a && (0 < a ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== a && (0 < a ? "right" : "left")
            },
            refresh: function(a) {
                this._refreshItems(a);
                this.refreshPositions();
                return this
            },
            _connectWith: function() {
                var a = this.options;
                return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
            },
            _getItemsAsjQuery: function(c) {
                var b, d, g, e = [],
                    f = [],
                    h = this._connectWith();
                if (h && c)
                    for (c = h.length - 1; 0 <= c; c--) {
                        d = a(h[c]);
                        for (b = d.length - 1; 0 <= b; b--)(g =
                            a.data(d[b], this.widgetFullName)) && (g !== this && !g.options.disabled) && f.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g])
                    }
                f.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                for (c = f.length - 1; 0 <= c; c--) f[c][0].each(function() {
                    e.push(this)
                });
                return a(e)
            },
            _removeCurrentsFromItems: function() {
                var c = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function(a) {
                    for (var d = 0; d < c.length; d++)
                        if (c[d] === a.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(c) {
                this.items = [];
                this.containers = [this];
                var b, d, g, e, f, h = this.items,
                    k = [
                        [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], c, {
                            item: this.currentItem
                        }) : a(this.options.items, this.element), this]
                    ];
                if ((f = this._connectWith()) && this.ready)
                    for (b =
                        f.length - 1; 0 <= b; b--) {
                        g = a(f[b]);
                        for (d = g.length - 1; 0 <= d; d--)
                            if ((e = a.data(g[d], this.widgetFullName)) && e !== this && !e.options.disabled) k.push([a.isFunction(e.options.items) ? e.options.items.call(e.element[0], c, {
                                item: this.currentItem
                            }) : a(e.options.items, e.element), e]), this.containers.push(e)
                    }
                for (b = k.length - 1; 0 <= b; b--) {
                    c = k[b][1];
                    g = k[b][0];
                    d = 0;
                    for (f = g.length; d < f; d++) e = a(g[d]), e.data(this.widgetName + "-item", c), h.push({
                        item: e,
                        instance: c,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            },
            refreshPositions: function(c) {
                this.offsetParent &&
                    this.helper && (this.offset.parent = this._getParentOffset());
                var b, d, g;
                for (b = this.items.length - 1; 0 <= b; b--) d = this.items[b], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (g = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, c || (d.width = g.outerWidth(), d.height = g.outerHeight()), g = g.offset(), d.left = g.left, d.top = g.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (b =
                        this.containers.length - 1; 0 <= b; b--) g = this.containers[b].element.offset(), this.containers[b].containerCache.left = g.left, this.containers[b].containerCache.top = g.top, this.containers[b].containerCache.width = this.containers[b].element.outerWidth(), this.containers[b].containerCache.height = this.containers[b].element.outerHeight();
                return this
            },
            _createPlaceholder: function(c) {
                var c = c || this,
                    b, d = c.options;
                if (!d.placeholder || d.placeholder.constructor === String) b = d.placeholder, d.placeholder = {
                    element: function() {
                        var d =
                            c.currentItem[0].nodeName.toLowerCase(),
                            e = a(c.document[0].createElement(d)).addClass(b || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        "tr" === d ? e.append("<td colspan='99'>&#160;</td>") : "img" === d && e.attr("src", c.currentItem.attr("src"));
                        b || e.css("visibility", "hidden");
                        return e
                    },
                    update: function(a, e) {
                        if (!b || d.forcePlaceholderSize) e.height() || e.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") ||
                            0, 10)), e.width() || e.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
                    }
                };
                c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem));
                c.currentItem.after(c.placeholder);
                d.placeholder.update(c, c.placeholder)
            },
            _contactContainers: function(c) {
                var b, d, g, l, f, h, k, m, p, t = d = null;
                for (b = this.containers.length - 1; 0 <= b; b--)
                    if (!a.contains(this.currentItem[0], this.containers[b].element[0]))
                        if (this._intersectsWith(this.containers[b].containerCache)) {
                            if (!d ||
                                !a.contains(this.containers[b].element[0], d.element[0])) d = this.containers[b], t = b
                        } else this.containers[b].containerCache.over && (this.containers[b]._trigger("out", c, this._uiHash(this)), this.containers[b].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[t].containerCache.over || (this.containers[t]._trigger("over", c, this._uiHash(this)), this.containers[t].containerCache.over = 1);
                    else {
                        b = 1E4;
                        g = null;
                        l = (p = d.floating || e(this.currentItem)) ? "left" : "top";
                        f = p ? "width" : "height";
                        h = this.positionAbs[l] +
                            this.offset.click[l];
                        for (d = this.items.length - 1; 0 <= d; d--)
                            if (a.contains(this.containers[t].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (!p || this.positionAbs.top + this.offset.click.top > this.items[d].top && this.positionAbs.top + this.offset.click.top < this.items[d].top + this.items[d].height)) k = this.items[d].item.offset()[l], m = !1, Math.abs(k - h) > Math.abs(k + this.items[d][f] - h) && (m = !0, k += this.items[d][f]), Math.abs(k - h) < b && (b = Math.abs(k - h), g = this.items[d], this.direction = m ? "up" :
                                "down");
                        if ((g || this.options.dropOnEmpty) && this.currentContainer !== this.containers[t]) g ? this._rearrange(c, g, null, !0) : this._rearrange(c, null, this.containers[t].element, !0), this._trigger("change", c, this._uiHash()), this.containers[t]._trigger("change", c, this._uiHash(this)), this.currentContainer = this.containers[t], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[t]._trigger("over", c, this._uiHash(this)), this.containers[t].containerCache.over = 1
                    }
            },
            _createHelper: function(c) {
                var b =
                    this.options,
                    c = a.isFunction(b.helper) ? a(b.helper.apply(this.element[0], [c, this.currentItem])) : "clone" === b.helper ? this.currentItem.clone() : this.currentItem;
                c.parents("body").length || a("parent" !== b.appendTo ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0]);
                c[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                });
                (!c[0].style.width || b.forceHelperSize) && c.width(this.currentItem.width());
                (!c[0].style.height || b.forceHelperSize) && c.height(this.currentItem.height());
                return c
            },
            _adjustOffsetFromHelper: function(c) {
                "string" === typeof c && (c = c.split(" "));
                a.isArray(c) && (c = {
                    left: +c[0],
                    top: +c[1] || 0
                });
                "left" in c && (this.offset.click.left = c.left + this.margins.left);
                "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left);
                "top" in c && (this.offset.click.top = c.top + this.margins.top);
                "bottom" in
                c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var c = this.offsetParent.offset();
                "absolute" === this.cssPosition && (this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() &&
                    a.ui.ie) c = {
                    top: 0,
                    left: 0
                };
                return {
                    top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var a = this.currentItem.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var c, b, d;
                b = this.options;
                "parent" === b.containment && (b.containment = this.helper[0].parentNode);
                if ("document" === b.containment || "window" === b.containment) this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top -
                    this.offset.parent.top, a("document" === b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
                /^(document|window|parent)$/.test(b.containment) || (c = a(b.containment)[0], b = a(b.containment).offset(), d = "hidden" !== a(c).css("overflow"), this.containment = [b.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"),
                        10) || 0) - this.margins.left, b.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, b.left + (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, b.top + (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height -
                    this.margins.top
                ])
            },
            _convertPositionTo: function(c, b) {
                b || (b = this.position);
                var d = "absolute" === c ? 1 : -1,
                    e = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    l = /(html|body)/i.test(e[0].tagName);
                return {
                    top: b.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : e.scrollTop()) * d,
                    left: b.left + this.offset.relative.left * d + this.offset.parent.left *
                        d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function(c) {
                var b, d, e = this.options;
                d = c.pageX;
                b = c.pageY;
                var l = "absolute" === this.cssPosition && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    f = /(html|body)/i.test(l[0].tagName);
                "relative" === this.cssPosition && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
                this.originalPosition && (this.containment && (c.pageX - this.offset.click.left < this.containment[0] && (d = this.containment[0] + this.offset.click.left), c.pageY - this.offset.click.top < this.containment[1] && (b = this.containment[1] + this.offset.click.top), c.pageX - this.offset.click.left > this.containment[2] && (d = this.containment[2] + this.offset.click.left), c.pageY - this.offset.click.top > this.containment[3] && (b = this.containment[3] + this.offset.click.top)), e.grid && (b = this.originalPageY + Math.round((b - this.originalPageY) / e.grid[1]) *
                    e.grid[1], b = this.containment ? b - this.offset.click.top >= this.containment[1] && b - this.offset.click.top <= this.containment[3] ? b : b - this.offset.click.top >= this.containment[1] ? b - e.grid[1] : b + e.grid[1] : b, d = this.originalPageX + Math.round((d - this.originalPageX) / e.grid[0]) * e.grid[0], d = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d));
                return {
                    top: b - this.offset.click.top - this.offset.relative.top -
                        this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : l.scrollTop()),
                    left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : l.scrollLeft())
                }
            },
            _rearrange: function(a, b, d, e) {
                d ? d[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling);
                var l = this.counter = this.counter ? ++this.counter : 1;
                this._delay(function() {
                    l ===
                        this.counter && this.refreshPositions(!e)
                })
            },
            _clear: function(a, b) {
                this.reverting = !1;
                var d, e = [];
                !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
                this._noFinalSort = null;
                if (this.helper[0] === this.currentItem[0]) {
                    for (d in this._storedCSS)
                        if ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) this._storedCSS[d] = "";
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                this.fromOutside && !b && e.push(function(a) {
                    this._trigger("receive",
                        a, this._uiHash(this.fromOutside))
                });
                (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !b && e.push(function(a) {
                    this._trigger("update", a, this._uiHash())
                });
                this !== this.currentContainer && !b && (e.push(function(a) {
                    this._trigger("remove", a, this._uiHash())
                }), e.push(function(a) {
                    return function(b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), e.push(function(a) {
                    return function(b) {
                        a._trigger("update",
                            b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)));
                for (d = this.containers.length - 1; 0 <= d; d--) b || e.push(function(a) {
                    return function(b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[d])), this.containers[d].containerCache.over && (e.push(function(a) {
                    return function(b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[d])), this.containers[d].containerCache.over = 0);
                this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove());
                this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
                this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex);
                this.dragging = !1;
                if (this.cancelHelperRemoval) {
                    if (!b) {
                        this._trigger("beforeStop", a, this._uiHash());
                        for (d = 0; d < e.length; d++) e[d].call(this, a);
                        this._trigger("stop", a, this._uiHash())
                    }
                    return this.fromOutside = !1
                }
                b || this._trigger("beforeStop", a, this._uiHash());
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                this.helper[0] !== this.currentItem[0] &&
                    this.helper.remove();
                this.helper = null;
                if (!b) {
                    for (d = 0; d < e.length; d++) e[d].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                this.fromOutside = !1;
                return !0
            },
            _trigger: function() {
                !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(c) {
                var b = c || this;
                return {
                    helper: b.helper,
                    placeholder: b.placeholder || a([]),
                    position: b.position,
                    originalPosition: b.originalPosition,
                    offset: b.positionAbs,
                    item: b.currentItem,
                    sender: c ? c.element : null
                }
            }
        })
    })(jQuery);
    (function(a) {
        var e = 0,
            c = {},
            b = {};
        c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
        b.height = b.paddingTop = b.paddingBottom = b.borderTopWidth = b.borderBottomWidth = "show";
        a.widget("ui.accordion", {
            version: "1.10.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var b = this.options;
                this.prevShow = this.prevHide = a();
                this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
                if (!b.collapsible && (!1 === b.active || null == b.active)) b.active = 0;
                this._processPanels();
                0 > b.active && (b.active += this.headers.length);
                this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: !this.active.length ? a() : this.active.next(),
                    content: !this.active.length ? a() : this.active.next()
                }
            },
            _createIcons: function() {
                var b = this.options.icons;
                b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " +
                    b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var a;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
                this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) &&
                        this.removeAttribute("id")
                });
                this._destroyIcons();
                a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                });
                "content" !== this.options.heightStyle && a.css("height", "")
            },
            _setOption: function(a, b) {
                "active" === a ? this._activate(b) :
                    ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" === a && (!b && !1 === this.options.active) && this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b))
            },
            _keydown: function(b) {
                if (!b.altKey && !b.ctrlKey) {
                    var c = a.ui.keyCode,
                        e = this.headers.length,
                        f = this.headers.index(b.target),
                        h = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            h =
                                this.headers[(f + 1) % e];
                            break;
                        case c.LEFT:
                        case c.UP:
                            h = this.headers[(f - 1 + e) % e];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._eventHandler(b);
                            break;
                        case c.HOME:
                            h = this.headers[0];
                            break;
                        case c.END:
                            h = this.headers[e - 1]
                    }
                    h && (a(b.target).attr("tabIndex", -1), a(h).attr("tabIndex", 0), h.focus(), b.preventDefault())
                }
            },
            _panelKeyDown: function(b) {
                b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
            },
            refresh: function() {
                var b = this.options;
                this._processPanels();
                if (!1 === b.active && !0 === b.collapsible || !this.headers.length) b.active = !1, this.active = a();
                !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active);
                this._destroyIcons();
                this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
                this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var b, c = this.options,
                    l = c.heightStyle,
                    f = this.element.parent(),
                    h = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
                this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
                this.active.next().addClass("ui-accordion-content-active").show();
                this.headers.attr("role", "tab").each(function(b) {
                    var c = a(this),
                        f = c.attr("id"),
                        d = c.next(),
                        e = d.attr("id");
                    f || (f = h + "-header-" + b, c.attr("id", f));
                    e || (e = h + "-panel-" +
                        b, d.attr("id", e));
                    c.attr("aria-controls", e);
                    d.attr("aria-labelledby", f)
                }).next().attr("role", "tabpanel");
                this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide();
                this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0);
                this._createIcons();
                this._setupEvents(c.event);
                "fill" === l ? (b = f.height(), this.element.siblings(":visible").each(function() {
                    var c =
                        a(this),
                        f = c.css("position");
                    "absolute" === f || "fixed" === f || (b -= c.outerHeight(!0))
                }), this.headers.each(function() {
                    b -= a(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === l && (b = 0, this.headers.next().each(function() {
                    b = Math.max(b, a(this).css("height", "").height())
                }).height(b))
            },
            _activate: function(b) {
                b = this._findActive(b)[0];
                b !== this.active[0] && (b = b || this.active[0], this._eventHandler({
                    target: b,
                    currentTarget: b,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return "number" === typeof b ? this.headers.eq(b) : a()
            },
            _setupEvents: function(b) {
                var c = {
                    keydown: "_keydown"
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                });
                this._off(this.headers.add(this.headers.next()));
                this._on(this.headers, c);
                this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                });
                this._hoverable(this.headers);
                this._focusable(this.headers)
            },
            _eventHandler: function(b) {
                var c = this.options,
                    e = this.active,
                    f = a(b.currentTarget),
                    h =
                    f[0] === e[0],
                    k = h && c.collapsible,
                    m = k ? a() : f.next(),
                    p = e.next(),
                    m = {
                        oldHeader: e,
                        oldPanel: p,
                        newHeader: k ? a() : f,
                        newPanel: m
                    };
                b.preventDefault();
                h && !c.collapsible || !1 === this._trigger("beforeActivate", b, m) || (c.active = k ? !1 : this.headers.index(f), this.active = h ? a() : f, this._toggle(m), e.removeClass("ui-accordion-header-active ui-state-active"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), h || (f.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
                    c.icons && f.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), f.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(b) {
                var c = b.newPanel,
                    e = this.prevShow.length ? this.prevShow : b.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0);
                this.prevShow = c;
                this.prevHide = e;
                this.options.animate ? this._animate(c, e, b) : (e.hide(), c.show(), this._toggleComplete(b));
                e.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                e.prev().attr("aria-selected", "false");
                c.length && e.length ? e.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1);
                c.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _animate: function(a, e, l) {
                var f, h, k, m = this,
                    p = 0,
                    t = a.length && (!e.length || a.index() < e.index()),
                    q = this.options.animate || {},
                    t = t && q.down || q,
                    r = function() {
                        m._toggleComplete(l)
                    };
                "number" === typeof t && (k = t);
                "string" === typeof t && (h = t);
                h = h || t.easing || q.easing;
                k = k ||
                    t.duration || q.duration;
                if (!e.length) return a.animate(b, k, h, r);
                if (!a.length) return e.animate(c, k, h, r);
                f = a.show().outerHeight();
                e.animate(c, {
                    duration: k,
                    easing: h,
                    step: function(a, b) {
                        b.now = Math.round(a)
                    }
                });
                a.hide().animate(b, {
                    duration: k,
                    easing: h,
                    complete: r,
                    step: function(a, b) {
                        b.now = Math.round(a);
                        "height" !== b.prop ? p += b.now : "content" !== m.options.heightStyle && (b.now = Math.round(f - e.outerHeight() - p), p = 0)
                    }
                })
            },
            _toggleComplete: function(a) {
                var b = a.oldPanel;
                b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
                b.length && (b.parent()[0].className = b.parent()[0].className);
                this._trigger("activate", null, a)
            }
        })
    })(jQuery);
    (function(a) {
        var e = 0;
        a.widget("ui.autocomplete", {
            version: "1.10.2",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var c, b, d, e = this.element[0].nodeName.toLowerCase(),
                    l = "textarea" === e,
                    e = "input" === e;
                this.isMultiLine = l ? !0 : e ? !1 : this.element.prop("isContentEditable");
                this.valueMethod = this.element[l ||
                    e ? "val" : "text"];
                this.isNewMenu = !0;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                this._on(this.element, {
                    keydown: function(f) {
                        if (this.element.prop("readOnly")) b = d = c = !0;
                        else {
                            b = d = c = !1;
                            var h = a.ui.keyCode;
                            switch (f.keyCode) {
                                case h.PAGE_UP:
                                    c = !0;
                                    this._move("previousPage", f);
                                    break;
                                case h.PAGE_DOWN:
                                    c = !0;
                                    this._move("nextPage", f);
                                    break;
                                case h.UP:
                                    c = !0;
                                    this._keyEvent("previous", f);
                                    break;
                                case h.DOWN:
                                    c = !0;
                                    this._keyEvent("next", f);
                                    break;
                                case h.ENTER:
                                case h.NUMPAD_ENTER:
                                    this.menu.active &&
                                        (c = !0, f.preventDefault(), this.menu.select(f));
                                    break;
                                case h.TAB:
                                    this.menu.active && this.menu.select(f);
                                    break;
                                case h.ESCAPE:
                                    this.menu.element.is(":visible") && (this._value(this.term), this.close(f), f.preventDefault());
                                    break;
                                default:
                                    b = !0, this._searchTimeout(f)
                            }
                        }
                    },
                    keypress: function(f) {
                        if (c) c = !1, f.preventDefault();
                        else if (!b) {
                            var d = a.ui.keyCode;
                            switch (f.keyCode) {
                                case d.PAGE_UP:
                                    this._move("previousPage", f);
                                    break;
                                case d.PAGE_DOWN:
                                    this._move("nextPage", f);
                                    break;
                                case d.UP:
                                    this._keyEvent("previous", f);
                                    break;
                                case d.DOWN:
                                    this._keyEvent("next",
                                        f)
                            }
                        }
                    },
                    input: function(a) {
                        d ? (d = !1, a.preventDefault()) : this._searchTimeout(a)
                    },
                    focus: function() {
                        this.selectedItem = null;
                        this.previous = this._value()
                    },
                    blur: function(a) {
                        this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                    }
                });
                this._initSource();
                this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    input: a(),
                    role: null
                }).hide().data("ui-menu");
                this._on(this.menu.element, {
                    mousedown: function(b) {
                        b.preventDefault();
                        this.cancelBlur = !0;
                        this._delay(function() {
                            delete this.cancelBlur
                        });
                        var c = this.menu.element[0];
                        a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                            var b = this;
                            this.document.one("mousedown", function(f) {
                                f.target !== b.element[0] && (f.target !== c && !a.contains(c, f.target)) && b.close()
                            })
                        })
                    },
                    menufocus: function(b, c) {
                        if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(b.target).trigger(b.originalEvent)
                            });
                            return
                        }
                        var d =
                            c.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", b, {
                            item: d
                        }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                    },
                    menuselect: function(a, b) {
                        var c = b.item.data("ui-autocomplete-item"),
                            d = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                            this.previous = d;
                            this.selectedItem = c
                        }));
                        !1 !== this._trigger("select", a, {
                            item: c
                        }) && this._value(c.value);
                        this.term = this._value();
                        this.close(a);
                        this.selectedItem = c
                    }
                });
                this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching);
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                this.menu.element.remove();
                this.liveRegion.remove()
            },
            _setOption: function(a, b) {
                this._super(a, b);
                "source" === a && this._initSource();
                "appendTo" ===
                a && this.menu.element.appendTo(this._appendTo());
                "disabled" === a && (b && this.xhr) && this.xhr.abort()
            },
            _appendTo: function() {
                var c = this.options.appendTo;
                c && (c = c.jquery || c.nodeType ? a(c) : this.document.find(c).eq(0));
                c || (c = this.element.closest(".ui-front"));
                c.length || (c = this.document[0].body);
                return c
            },
            _initSource: function() {
                var c, b, d = this;
                a.isArray(this.options.source) ? (c = this.options.source, this.source = function(b, d) {
                    d(a.ui.autocomplete.filter(c, b.term))
                }) : "string" === typeof this.options.source ? (b = this.options.source,
                    this.source = function(c, e) {
                        d.xhr && d.xhr.abort();
                        d.xhr = a.ajax({
                            url: b,
                            data: c,
                            dataType: "json",
                            success: function(a) {
                                e(a)
                            },
                            error: function() {
                                e([])
                            }
                        })
                    }) : this.source = this.options.source
            },
            _searchTimeout: function(a) {
                clearTimeout(this.searching);
                this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                }, this.options.delay)
            },
            search: function(a, b) {
                a = null != a ? a : this._value();
                this.term = this._value();
                if (a.length < this.options.minLength) return this.close(b);
                if (!1 !== this._trigger("search",
                        b)) return this._search(a)
            },
            _search: function(a) {
                this.pending++;
                this.element.addClass("ui-autocomplete-loading");
                this.cancelSearch = !1;
                this.source({
                    term: a
                }, this._response())
            },
            _response: function() {
                var a = this,
                    b = ++e;
                return function(d) {
                    b === e && a.__response(d);
                    a.pending--;
                    a.pending || a.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(a) {
                a && (a = this._normalize(a));
                this._trigger("response", null, {
                    content: a
                });
                !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) :
                    this._close()
            },
            close: function(a) {
                this.cancelSearch = !0;
                this._close(a)
            },
            _close: function(a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
            },
            _change: function(a) {
                this.previous !== this._value() && this._trigger("change", a, {
                    item: this.selectedItem
                })
            },
            _normalize: function(c) {
                return c.length && c[0].label && c[0].value ? c : a.map(c, function(b) {
                    return "string" === typeof b ? {
                        label: b,
                        value: b
                    } : a.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function(c) {
                var b = this.menu.element.empty();
                this._renderMenu(b, c);
                this.isNewMenu = !0;
                this.menu.refresh();
                b.show();
                this._resizeMenu();
                b.position(a.extend({
                    of: this.element
                }, this.options.position));
                this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(c, b) {
                var d = this;
                a.each(b, function(a, b) {
                    d._renderItemData(c, b)
                })
            },
            _renderItemData: function(a, b) {
                return this._renderItem(a,
                    b).data("ui-autocomplete-item", b)
            },
            _renderItem: function(c, b) {
                return a("<li>").append(a("<a>").text(b.label)).appendTo(c)
            },
            _move: function(a, b) {
                if (this.menu.element.is(":visible"))
                    if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a)) this._value(this.term), this.menu.blur();
                    else this.menu[a](b);
                else this.search(null, b)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(a, b) {
                if (!this.isMultiLine ||
                    this.menu.element.is(":visible")) this._move(a, b), b.preventDefault()
            }
        });
        a.extend(a.ui.autocomplete, {
            escapeRegex: function(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(c, b) {
                var d = RegExp(a.ui.autocomplete.escapeRegex(b), "i");
                return a.grep(c, function(a) {
                    return d.test(a.label || a.value || a)
                })
            }
        });
        a.widget("ui.autocomplete", a.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(a) {
                        return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(a) {
                var b;
                this._superApply(arguments);
                !this.options.disabled && !this.cancelSearch && (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
            }
        })
    })(jQuery);
    (function(a) {
        var e, c, b, d, g = function() {
                var b = a(this).find(":ui-button");
                setTimeout(function() {
                    b.button("refresh")
                }, 1)
            },
            l = function(b) {
                var c = b.name,
                    d = b.form,
                    e = a([]);
                c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function() {
                    return !this.form
                }));
                return e
            };
        a.widget("ui.button", {
            version: "1.10.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" +
                    this.eventNamespace).bind("reset" + this.eventNamespace, g);
                "boolean" !== typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
                this._determineButtonType();
                this.hasTitle = !!this.buttonElement.attr("title");
                var f = this,
                    h = this.options,
                    k = "checkbox" === this.type || "radio" === this.type,
                    m = !k ? "ui-state-active" : "";
                null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
                this._hoverable(this.buttonElement);
                this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    h.disabled || this === e && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    h.disabled || a(this).removeClass(m)
                }).bind("click" + this.eventNamespace, function(a) {
                    h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                });
                this.element.bind("focus" + this.eventNamespace, function() {
                    f.buttonElement.addClass("ui-state-focus")
                }).bind("blur" +
                    this.eventNamespace,
                    function() {
                        f.buttonElement.removeClass("ui-state-focus")
                    });
                k && (this.element.bind("change" + this.eventNamespace, function() {
                    d || f.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(a) {
                    h.disabled || (d = !1, c = a.pageX, b = a.pageY)
                }).bind("mouseup" + this.eventNamespace, function(a) {
                    if (!h.disabled && (c !== a.pageX || b !== a.pageY)) d = !0
                }));
                "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (h.disabled || d) return !1
                }) : "radio" === this.type ? this.buttonElement.bind("click" +
                    this.eventNamespace,
                    function() {
                        if (h.disabled || d) return !1;
                        a(this).addClass("ui-state-active");
                        f.buttonElement.attr("aria-pressed", "true");
                        var b = f.element[0];
                        l(b).not(b).map(function() {
                            return a(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    if (h.disabled) return !1;
                    a(this).addClass("ui-state-active");
                    e = this;
                    f.document.one("mouseup", function() {
                        e = null
                    })
                }).bind("mouseup" + this.eventNamespace, function() {
                    if (h.disabled) return !1;
                    a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(b) {
                    if (h.disabled) return !1;
                    (b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active")
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                }));
                this._setOption("disabled", h.disabled);
                this._resetButton()
            },
            _determineButtonType: function() {
                var a, b;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
                "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", a)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible");
                this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
                this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(a, b) {
                this._super(a, b);
                "disabled" === a ? b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1) : this._resetButton()
            },
            refresh: function() {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b);
                "radio" === this.type ? l(this.element[0]).each(function() {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
                        "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) this.options.label && this.element.val(this.options.label);
                else {
                    var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                        c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                        d = this.options.icons,
                        e = d.primary && d.secondary,
                        g = [];
                    d.primary || d.secondary ? (this.options.text && g.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (g.push(e ? "ui-button-icons-only" :
                        "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : g.push("ui-button-text-only");
                    b.addClass(g.join(" "))
                }
            }
        });
        a.widget("ui.buttonset", {
            version: "1.10.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(a, b) {
                "disabled" === a && this.buttons.button("option", a, b);
                this._super(a, b)
            },
            refresh: function() {
                var b =
                    "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset");
                this.buttons.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    })(jQuery);
    (function(a, e) {
        function c() {
            this._curInst = null;
            this._keyEvent = !1;
            this._disabledInputs = [];
            this._inDialog = this._datepickerShowing = !1;
            this._mainDivId = "ui-datepicker-div";
            this._inlineClass = "ui-datepicker-inline";
            this._appendClass = "ui-datepicker-append";
            this._triggerClass = "ui-datepicker-trigger";
            this._dialogClass = "ui-datepicker-dialog";
            this._disableClass = "ui-datepicker-disabled";
            this._unselectableClass = "ui-datepicker-unselectable";
            this._currentClass = "ui-datepicker-current-day";
            this._dayOverClass = "ui-datepicker-days-cell-over";
            this.regional = [];
            this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: "January February March April May June July August September October November December".split(" "),
                monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            };
            a.extend(this._defaults, this.regional[""]);
            this.dpDiv = b(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function b(b) {
            return b.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
                a(this).removeClass("ui-state-hover"); - 1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"); - 1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
            }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", function() {
                if (!a.datepicker._isDisabledDatepicker(l.inline ? b.parent()[0] : l.input[0])) a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover")
            })
        }

        function d(b, c) {
            a.extend(b, c);
            for (var d in c) null == c[d] && (b[d] = c[d]);
            return b
        }
        a.extend(a.ui, {
            datepicker: {
                version: "1.10.2"
            }
        });
        var g = (new Date).getTime(),
            l;
        a.extend(c.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                d(this._defaults,
                    a || {});
                return this
            },
            _attachDatepicker: function(b, c) {
                var d, e, g;
                d = b.nodeName.toLowerCase();
                e = "div" === d || "span" === d;
                b.id || (this.uuid += 1, b.id = "dp" + this.uuid);
                g = this._newInst(a(b), e);
                g.settings = a.extend({}, c || {});
                "input" === d ? this._connectDatepicker(b, g) : e && this._inlineDatepicker(b, g)
            },
            _newInst: function(c, d) {
                return {
                    id: c[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: c,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: d,
                    dpDiv: !d ? this.dpDiv : b(a("<div class='" + this._inlineClass +
                        " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
                }
            },
            _connectDatepicker: function(b, c) {
                var d = a(b);
                c.append = a([]);
                c.trigger = a([]);
                d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
            },
            _attachments: function(b, c) {
                var d, e;
                d = this._get(c, "appendText");
                var g = this._get(c,
                    "isRTL");
                c.append && c.append.remove();
                d && (c.append = a("<span class='" + this._appendClass + "'>" + d + "</span>"), b[g ? "before" : "after"](c.append));
                b.unbind("focus", this._showDatepicker);
                c.trigger && c.trigger.remove();
                d = this._get(c, "showOn");
                ("focus" === d || "both" === d) && b.focus(this._showDatepicker);
                if ("button" === d || "both" === d) d = this._get(c, "buttonText"), e = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: e,
                    alt: d,
                    title: d
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(!e ?
                    d : a("<img/>").attr({
                        src: e,
                        alt: d,
                        title: d
                    }))), b[g ? "before" : "after"](c.trigger), c.trigger.click(function() {
                    a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : (a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] && a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0]));
                    return !1
                })
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b, c, d, e, g = new Date(2009, 11, 20),
                        l = this._get(a, "dateFormat");
                    l.match(/[DM]/) && (b = function(a) {
                        for (e =
                            d = c = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
                        return d
                    }, g.setMonth(b(this._get(a, l.match(/MM/) ? "monthNames" : "monthNamesShort"))), g.setDate(b(this._get(a, l.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - g.getDay()));
                    a.input.attr("size", this._formatDate(a, g).length)
                }
            },
            _inlineDatepicker: function(b, c) {
                var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c),
                    c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(b, c, e, g, l) {
                var t, b = this._dialogInst;
                b || (this.uuid += 1, b = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + b + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), b = this._dialogInst = this._newInst(this._dialogInput, !1), b.settings = {}, a.data(this._dialogInput[0], "datepicker", b));
                d(b.settings, g || {});
                c =
                    c && c.constructor === Date ? this._formatDate(b, c) : c;
                this._dialogInput.val(c);
                this._pos = l ? l.length ? l : [l.pageX, l.pageY] : null;
                this._pos || (c = document.documentElement.clientWidth, g = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, t = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, g / 2 - 150 + t]);
                this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
                b.settings.onSelect = e;
                this._inDialog = !0;
                this.dpDiv.addClass(this._dialogClass);
                this._showDatepicker(this._dialogInput[0]);
                a.blockUI && a.blockUI(this.dpDiv);
                a.data(this._dialogInput[0], "datepicker", b);
                return this
            },
            _destroyDatepicker: function(b) {
                var c, d = a(b),
                    e = a.data(b, "datepicker");
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup",
                    this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(b) {
                var c, d = a(b),
                    e = a.data(b, "datepicker");
                if (d.hasClass(this.markerClassName)) {
                    c = b.nodeName.toLowerCase();
                    if ("input" === c) b.disabled = !1, e.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" === c || "span" === c) c = d.children("." + this._inlineClass), c.children().removeClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                    this._disabledInputs = a.map(this._disabledInputs, function(a) {
                        return a === b ? null : a
                    })
                }
            },
            _disableDatepicker: function(b) {
                var c, d = a(b),
                    e = a.data(b, "datepicker");
                if (d.hasClass(this.markerClassName)) {
                    c = b.nodeName.toLowerCase();
                    if ("input" === c) b.disabled = !0, e.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" === c || "span" === c) c = d.children("." + this._inlineClass), c.children().addClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                    this._disabledInputs = a.map(this._disabledInputs, function(a) {
                        return a === b ? null : a
                    });
                    this._disabledInputs[this._disabledInputs.length] = b
                }
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; b < this._disabledInputs.length; b++)
                    if (this._disabledInputs[b] === a) return !0;
                return !1
            },
            _getInst: function(b) {
                try {
                    return a.data(b, "datepicker")
                } catch (c) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(b, c, g) {
                var l, p, t, q, r = this._getInst(b);
                if (2 === arguments.length && "string" ===
                    typeof c) return "defaults" === c ? a.extend({}, a.datepicker._defaults) : r ? "all" === c ? a.extend({}, r.settings) : this._get(r, c) : null;
                l = c || {};
                "string" === typeof c && (l = {}, l[c] = g);
                r && (this._curInst === r && this._hideDatepicker(), p = this._getDateDatepicker(b, !0), t = this._getMinMaxDate(r, "min"), q = this._getMinMaxDate(r, "max"), d(r.settings, l), null !== t && (l.dateFormat !== e && l.minDate === e) && (r.settings.minDate = this._formatDate(r, t)), null !== q && (l.dateFormat !== e && l.maxDate === e) && (r.settings.maxDate = this._formatDate(r, q)), "disabled" in
                    l && (l.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), r), this._autoSize(r), this._setDate(r, p), this._updateAlternate(r), this._updateDatepicker(r))
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                (a = this._getInst(a)) && this._updateDatepicker(a)
            },
            _setDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function(a, b) {
                var c =
                    this._getInst(a);
                c && !c.inline && this._setDateFromField(c, b);
                return c ? this._getDate(c) : null
            },
            _doKeyDown: function(b) {
                var c, d = a.datepicker._getInst(b.target);
                c = !0;
                var e = d.dpDiv.is(".ui-datepicker-rtl");
                d._keyEvent = !0;
                if (a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker();
                        c = !1;
                        break;
                    case 13:
                        return c = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", d.dpDiv), c[0] && a.datepicker._selectDay(b.target, d.selectedMonth, d.selectedYear, c[0]), (b = a.datepicker._get(d,
                            "onSelect")) ? (c = a.datepicker._formatDate(d), b.apply(d.input ? d.input[0] : null, [c, d])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(d, "stepBigMonths") : -a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(d, "stepBigMonths") : +a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target);
                        c = b.ctrlKey || b.metaKey;
                        break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target);
                        c = b.ctrlKey || b.metaKey;
                        break;
                    case 37:
                        if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, e ? 1 : -1, "D");
                        c = b.ctrlKey || b.metaKey;
                        b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(d, "stepBigMonths") : -a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D");
                        c = b.ctrlKey || b.metaKey;
                        break;
                    case 39:
                        if (b.ctrlKey ||
                            b.metaKey) a.datepicker._adjustDate(b.target, e ? -1 : 1, "D");
                        c = b.ctrlKey || b.metaKey;
                        b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(d, "stepBigMonths") : +a.datepicker._get(d, "stepMonths"), "M");
                        break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D");
                        c = b.ctrlKey || b.metaKey;
                        break;
                    default:
                        c = !1
                } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : c = !1;
                c && (b.preventDefault(), b.stopPropagation())
            },
            _doKeyPress: function(b) {
                var c, d;
                c = a.datepicker._getInst(b.target);
                if (a.datepicker._get(c, "constrainInput")) return c = a.datepicker._possibleChars(a.datepicker._get(c, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || -1 < c.indexOf(d)
            },
            _doKeyUp: function(b) {
                var c, b = a.datepicker._getInst(b.target);
                if (b.input.val() !== b.lastVal) try {
                    if (c = a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, a.datepicker._getFormatConfig(b))) a.datepicker._setDateFromField(b), a.datepicker._updateAlternate(b),
                        a.datepicker._updateDatepicker(b)
                } catch (d) {}
                return !0
            },
            _showDatepicker: function(b) {
                b = b.target || b;
                "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]);
                if (!(a.datepicker._isDisabledDatepicker(b) || a.datepicker._lastInput === b)) {
                    var c, e, g, l;
                    c = a.datepicker._getInst(b);
                    a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0]));
                    e = (e = a.datepicker._get(c, "beforeShow")) ?
                        e.apply(b, [b, c]) : {};
                    if (!1 !== e && (d(c.settings, e), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                                g |= "fixed" === a(this).css("position");
                                return !g
                            }), e = {
                                left: a.datepicker._pos[0],
                                top: a.datepicker._pos[1]
                            }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }),
                            a.datepicker._updateDatepicker(c), e = a.datepicker._checkOffset(c, e, g), c.dpDiv.css({
                                position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                                display: "none",
                                left: e.left + "px",
                                top: e.top + "px"
                            }), !c.inline)) {
                        e = a.datepicker._get(c, "showAnim");
                        l = a.datepicker._get(c, "duration");
                        c.dpDiv.zIndex(a(b).zIndex() + 1);
                        a.datepicker._datepickerShowing = !0;
                        if (a.effects && a.effects.effect[e]) c.dpDiv.show(e, a.datepicker._get(c, "showOptions"), l);
                        else c.dpDiv[e || "show"](e ? l : null);
                        c.input.is(":visible") && !c.input.is(":disabled") &&
                            c.input.focus();
                        a.datepicker._curInst = c
                    }
                }
            },
            _updateDatepicker: function(b) {
                this.maxRows = 4;
                l = b;
                b.dpDiv.empty().append(this._generateHTML(b));
                this._attachHandlers(b);
                b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var c, d = this._getNumberOfMonths(b),
                    e = d[1];
                b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                1 < e && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
                b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
                b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
                b === a.datepicker._curInst && (a.datepicker._datepickerShowing && b.input && b.input.is(":visible") && !b.input.is(":disabled") && b.input[0] !== document.activeElement) && b.input.focus();
                b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                    c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
                    c = b.yearshtml = null
                }, 0))
            },
            _getBorders: function(a) {
                var b = function(a) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[a] ||
                    a
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
            },
            _checkOffset: function(b, c, d) {
                var e = b.dpDiv.outerWidth(),
                    g = b.dpDiv.outerHeight(),
                    l = b.input ? b.input.outerWidth() : 0,
                    q = b.input ? b.input.outerHeight() : 0,
                    r = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    v = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                c.left -= this._get(b, "isRTL") ? e - l : 0;
                c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0;
                c.top -= d && c.top ===
                    b.input.offset().top + q ? a(document).scrollTop() : 0;
                c.left -= Math.min(c.left, c.left + e > r && r > e ? Math.abs(c.left + e - r) : 0);
                c.top -= Math.min(c.top, c.top + g > v && v > g ? Math.abs(g + q) : 0);
                return c
            },
            _findPos: function(b) {
                for (var c = this._getInst(b), c = this._get(c, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[c ? "previousSibling" : "nextSibling"];
                b = a(b).offset();
                return [b.left, b.top]
            },
            _hideDatepicker: function(b) {
                var c, d, e = this._curInst;
                if (e && !(b && e !== a.data(b, "datepicker")) && this._datepickerShowing) {
                    b =
                        this._get(e, "showAnim");
                    c = this._get(e, "duration");
                    d = function() {
                        a.datepicker._tidyDialog(e)
                    };
                    if (a.effects && (a.effects.effect[b] || a.effects[b])) e.dpDiv.hide(b, a.datepicker._get(e, "showOptions"), c, d);
                    else e.dpDiv["slideDown" === b ? "slideUp" : "fadeIn" === b ? "fadeOut" : "hide"](b ? c : null, d);
                    b || d();
                    this._datepickerShowing = !1;
                    (b = this._get(e, "onClose")) && b.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]);
                    this._lastInput = null;
                    this._inDialog && (this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        }),
                        a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv)));
                    this._inDialog = !1
                }
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(b) {
                if (a.datepicker._curInst) {
                    var b = a(b.target),
                        c = a.datepicker._getInst(b[0]);
                    (b[0].id !== a.datepicker._mainDivId && 0 === b.parents("#" + a.datepicker._mainDivId).length && !b.hasClass(a.datepicker.markerClassName) && !b.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog ||
                        !a.blockUI) || b.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== c) && a.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(b, c, d) {
                var b = a(b),
                    e = this._getInst(b[0]);
                this._isDisabledDatepicker(b[0]) || (this._adjustInstDate(e, c + ("M" === d ? this._get(e, "showCurrentAtPos") : 0), d), this._updateDatepicker(e))
            },
            _gotoToday: function(b) {
                var c = a(b),
                    d = this._getInst(c[0]);
                this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear =
                    d.currentYear) : (b = new Date, d.selectedDay = b.getDate(), d.drawMonth = d.selectedMonth = b.getMonth(), d.drawYear = d.selectedYear = b.getFullYear());
                this._notifyChange(d);
                this._adjustDate(c)
            },
            _selectMonthYear: function(b, c, d) {
                var b = a(b),
                    e = this._getInst(b[0]);
                e["selected" + ("M" === d ? "Month" : "Year")] = e["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
                this._notifyChange(e);
                this._adjustDate(b)
            },
            _selectDay: function(b, c, d, e) {
                var g;
                g = a(b);
                !a(e).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(g[0]) &&
                    (g = this._getInst(g[0]), g.selectedDay = g.currentDay = a("a", e).html(), g.selectedMonth = g.currentMonth = c, g.selectedYear = g.currentYear = d, this._selectDate(b, this._formatDate(g, g.currentDay, g.currentMonth, g.currentYear)))
            },
            _clearDate: function(b) {
                b = a(b);
                this._selectDate(b, "")
            },
            _selectDate: function(b, c) {
                var d;
                d = a(b);
                var e = this._getInst(d[0]),
                    c = null != c ? c : this._formatDate(e);
                e.input && e.input.val(c);
                this._updateAlternate(e);
                (d = this._get(e, "onSelect")) ? d.apply(e.input ? e.input[0] : null, [c, e]): e.input && e.input.trigger("change");
                e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" !== typeof e.input[0] && e.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(b) {
                var c, d, e, g = this._get(b, "altField");
                g && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(g).each(function() {
                    a(this).val(e)
                }))
            },
            noWeekends: function(a) {
                a = a.getDay();
                return [0 < a && 6 > a, ""]
            },
            iso8601Week: function(a) {
                var b = new Date(a.getTime());
                b.setDate(b.getDate() +
                    4 - (b.getDay() || 7));
                a = b.getTime();
                b.setMonth(0);
                b.setDate(1);
                return Math.floor(Math.round((a - b) / 864E5) / 7) + 1
            },
            parseDate: function(b, c, d) {
                if (null == b || null == c) throw "Invalid arguments";
                c = "object" === typeof c ? c.toString() : c + "";
                if ("" === c) return null;
                var e, g, l, q = 0;
                g = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                g = "string" !== typeof g ? g : (new Date).getFullYear() % 100 + parseInt(g, 10);
                l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort;
                var r = (d ? d.dayNames : null) || this._defaults.dayNames,
                    v = (d ? d.monthNamesShort :
                        null) || this._defaults.monthNamesShort,
                    u = (d ? d.monthNames : null) || this._defaults.monthNames,
                    y = d = -1,
                    x = -1,
                    B = -1,
                    I = !1,
                    s, z = function(a) {
                        (a = e + 1 < b.length && b.charAt(e + 1) === a) && e++;
                        return a
                    },
                    C = function(a) {
                        var b = z(a),
                            a = RegExp("^\\d{1," + ("@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2) + "}"),
                            a = c.substring(q).match(a);
                        if (!a) throw "Missing number at position " + q;
                        q += a[0].length;
                        return parseInt(a[0], 10)
                    },
                    L = function(b, d, f) {
                        var e = -1,
                            b = a.map(z(b) ? f : d, function(a, b) {
                                return [
                                    [b, a]
                                ]
                            }).sort(function(a, b) {
                                return -(a[1].length - b[1].length)
                            });
                        a.each(b, function(a, b) {
                            var d = b[1];
                            if (c.substr(q, d.length).toLowerCase() === d.toLowerCase()) return e = b[0], q += d.length, !1
                        });
                        if (-1 !== e) return e + 1;
                        throw "Unknown name at position " + q;
                    },
                    M = function() {
                        if (c.charAt(q) !== b.charAt(e)) throw "Unexpected literal at position " + q;
                        q++
                    };
                for (e = 0; e < b.length; e++)
                    if (I) "'" === b.charAt(e) && !z("'") ? I = !1 : M();
                    else switch (b.charAt(e)) {
                        case "d":
                            x = C("d");
                            break;
                        case "D":
                            L("D", l, r);
                            break;
                        case "o":
                            B = C("o");
                            break;
                        case "m":
                            y = C("m");
                            break;
                        case "M":
                            y = L("M", v, u);
                            break;
                        case "y":
                            d = C("y");
                            break;
                        case "@":
                            s = new Date(C("@"));
                            d = s.getFullYear();
                            y = s.getMonth() + 1;
                            x = s.getDate();
                            break;
                        case "!":
                            s = new Date((C("!") - this._ticksTo1970) / 1E4);
                            d = s.getFullYear();
                            y = s.getMonth() + 1;
                            x = s.getDate();
                            break;
                        case "'":
                            z("'") ? M() : I = !0;
                            break;
                        default:
                            M()
                    }
                    if (q < c.length && (l = c.substr(q), !/^\s+/.test(l))) throw "Extra/unparsed characters found in date: " + l; - 1 === d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= g ? 0 : -100));
                if (-1 < B) {
                    y = 1;
                    x = B;
                    do {
                        g = this._getDaysInMonth(d, y - 1);
                        if (x <=
                            g) break;
                        y++;
                        x -= g
                    } while (1)
                }
                s = this._daylightSavingAdjust(new Date(d, y - 1, x));
                if (s.getFullYear() !== d || s.getMonth() + 1 !== y || s.getDate() !== x) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d,
                    e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    g = (c ? c.dayNames : null) || this._defaults.dayNames,
                    l = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    c = (c ? c.monthNames : null) || this._defaults.monthNames,
                    r = function(b) {
                        (b = d + 1 < a.length && a.charAt(d + 1) === b) && d++;
                        return b
                    },
                    v = function(a, b, c) {
                        b = "" + b;
                        if (r(a))
                            for (; b.length < c;) b = "0" + b;
                        return b
                    },
                    u = "",
                    y = !1;
                if (b)
                    for (d = 0; d < a.length; d++)
                        if (y) "'" === a.charAt(d) && !r("'") ? y = !1 : u += a.charAt(d);
                        else switch (a.charAt(d)) {
                            case "d":
                                u += v("d", b.getDate(), 2);
                                break;
                            case "D":
                                var x;
                                x = b.getDay();
                                var B = e,
                                    I = g;
                                x = r("D") ? I[x] : B[x];
                                u += x;
                                break;
                            case "o":
                                u += v("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                                break;
                            case "m":
                                u += v("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                x = b.getMonth();
                                B = l;
                                I = c;
                                x = r("M") ? I[x] : B[x];
                                u += x;
                                break;
                            case "y":
                                u += r("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                u += b.getTime();
                                break;
                            case "!":
                                u += 1E4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                r("'") ?
                                    u += "'" : y = !0;
                                break;
                            default:
                                u += a.charAt(d)
                        }
                        return u
            },
            _possibleChars: function(a) {
                var b, c = "",
                    d = !1,
                    e = function(c) {
                        (c = b + 1 < a.length && a.charAt(b + 1) === c) && b++;
                        return c
                    };
                for (b = 0; b < a.length; b++)
                    if (d) "'" === a.charAt(b) && !e("'") ? d = !1 : c += a.charAt(b);
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            e("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += a.charAt(b)
                    }
                    return c
            },
            _get: function(a, b) {
                return a.settings[b] !== e ? a.settings[b] : this._defaults[b]
            },
            _setDateFromField: function(a,
                b) {
                if (a.input.val() !== a.lastVal) {
                    var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        e = this._getDefaultDate(a),
                        g = e,
                        l = this._getFormatConfig(a);
                    try {
                        g = this.parseDate(c, d, l) || e
                    } catch (r) {
                        d = b ? "" : d
                    }
                    a.selectedDay = g.getDate();
                    a.drawMonth = a.selectedMonth = g.getMonth();
                    a.drawYear = a.selectedYear = g.getFullYear();
                    a.currentDay = d ? g.getDate() : 0;
                    a.currentMonth = d ? g.getMonth() : 0;
                    a.currentYear = d ? g.getFullYear() : 0;
                    this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a,
                    this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(b, c, d) {
                if (null == c || "" === c) c = d;
                else {
                    var e;
                    if ("string" === typeof c) a: {
                        try {
                            e = a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                            break a
                        } catch (g) {}
                        var l = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date,
                            b = l.getFullYear();
                        e = l.getMonth();
                        for (var l = l.getDate(), q = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = q.exec(c); r;) {
                            switch (r[2] || "d") {
                                case "d":
                                case "D":
                                    l += parseInt(r[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    l +=
                                        7 * parseInt(r[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    e += parseInt(r[1], 10);
                                    l = Math.min(l, a.datepicker._getDaysInMonth(b, e));
                                    break;
                                case "y":
                                case "Y":
                                    b += parseInt(r[1], 10), l = Math.min(l, a.datepicker._getDaysInMonth(b, e))
                            }
                            r = q.exec(c)
                        }
                        e = new Date(b, e, l)
                    } else "number" === typeof c ? isNaN(c) ? c = d : (b = new Date, b.setDate(b.getDate() + c), c = b) : c = new Date(c.getTime()), e = c;
                    c = e
                }
                if (c = c && "Invalid Date" === c.toString() ? d : c) c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0);
                return this._daylightSavingAdjust(c)
            },
            _daylightSavingAdjust: function(a) {
                if (!a) return null;
                a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
                return a
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    g = a.selectedYear,
                    b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = b.getDate();
                a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
                a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
                (e !== a.selectedMonth || g !== a.selectedYear) && !c && this._notifyChange(a);
                this._adjustInstDate(a);
                a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                return !a.currentYear ||
                    a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
            },
            _attachHandlers: function(b) {
                var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() {
                    a(this).bind(this.getAttribute("data-event"), {
                        prev: function() {
                            window["DP_jQuery_" + g].datepicker._adjustDate(d, -c, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + g].datepicker._adjustDate(d, +c, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + g].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + g].datepicker._gotoToday(d)
                        },
                        selectDay: function() {
                            window["DP_jQuery_" + g].datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                            return !1
                        },
                        selectMonth: function() {
                            window["DP_jQuery_" + g].datepicker._selectMonthYear(d, this, "M");
                            return !1
                        },
                        selectYear: function() {
                            window["DP_jQuery_" + g].datepicker._selectMonthYear(d, this, "Y");
                            return !1
                        }
                    }[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(a) {
                var b, c, d, e, g, l, r, v, u, y, x, B, I,
                    s, z, C, L, M, da, K, V, G, Y, sa, ma, N, ja, ga = new Date,
                    ga = this._daylightSavingAdjust(new Date(ga.getFullYear(), ga.getMonth(), ga.getDate())),
                    W = this._get(a, "isRTL");
                l = this._get(a, "showButtonPanel");
                d = this._get(a, "hideIfNoPrevNext");
                g = this._get(a, "navigationAsDateFormat");
                var aa = this._getNumberOfMonths(a),
                    E = this._get(a, "showCurrentAtPos");
                e = this._get(a, "stepMonths");
                var A = 1 !== aa[0] || 1 !== aa[1],
                    J = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)),
                    ba = this._getMinMaxDate(a,
                        "min"),
                    ka = this._getMinMaxDate(a, "max"),
                    E = a.drawMonth - E,
                    P = a.drawYear;
                0 > E && (E += 12, P--);
                if (ka) {
                    b = this._daylightSavingAdjust(new Date(ka.getFullYear(), ka.getMonth() - aa[0] * aa[1] + 1, ka.getDate()));
                    for (b = ba && b < ba ? ba : b; this._daylightSavingAdjust(new Date(P, E, 1)) > b;) E--, 0 > E && (E = 11, P--)
                }
                a.drawMonth = E;
                a.drawYear = P;
                b = this._get(a, "prevText");
                b = !g ? b : this.formatDate(b, this._daylightSavingAdjust(new Date(P, E - e, 1)), this._getFormatConfig(a));
                b = this._canAdjustMonth(a, -1, P, E) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                    b + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + b + "</span></a>" : d ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + b + "</span></a>";
                c = this._get(a, "nextText");
                c = !g ? c : this.formatDate(c, this._daylightSavingAdjust(new Date(P, E + e, 1)), this._getFormatConfig(a));
                d = this._canAdjustMonth(a, 1, P, E) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" +
                    (W ? "w" : "e") + "'>" + c + "</span></a>" : d ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + c + "</span></a>";
                e = this._get(a, "currentText");
                c = this._get(a, "gotoCurrent") && a.currentDay ? J : ga;
                e = !g ? e : this.formatDate(e, c, this._getFormatConfig(a));
                g = !a.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") +
                    "</button>" : "";
                l = l ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? g : "") + (this._isInRange(a, c) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + e + "</button>" : "") + (W ? "" : g) + "</div>" : "";
                g = parseInt(this._get(a, "firstDay"), 10);
                g = isNaN(g) ? 0 : g;
                e = this._get(a, "showWeek");
                c = this._get(a, "dayNames");
                r = this._get(a, "dayNamesMin");
                v = this._get(a, "monthNames");
                u = this._get(a, "monthNamesShort");
                y = this._get(a,
                    "beforeShowDay");
                x = this._get(a, "showOtherMonths");
                B = this._get(a, "selectOtherMonths");
                I = this._getDefaultDate(a);
                s = "";
                z;
                for (C = 0; C < aa[0]; C++) {
                    L = "";
                    this.maxRows = 4;
                    for (M = 0; M < aa[1]; M++) {
                        da = this._daylightSavingAdjust(new Date(P, E, a.selectedDay));
                        z = " ui-corner-all";
                        K = "";
                        if (A) {
                            K += "<div class='ui-datepicker-group";
                            if (1 < aa[1]) switch (M) {
                                case 0:
                                    K += " ui-datepicker-group-first";
                                    z = " ui-corner-" + (W ? "right" : "left");
                                    break;
                                case aa[1] - 1:
                                    K += " ui-datepicker-group-last";
                                    z = " ui-corner-" + (W ? "left" : "right");
                                    break;
                                default:
                                    K +=
                                        " ui-datepicker-group-middle", z = ""
                            }
                            K += "'>"
                        }
                        K += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + z + "'>" + (/all|left/.test(z) && 0 === C ? W ? d : b : "") + (/all|right/.test(z) && 0 === C ? W ? b : d : "") + this._generateMonthYearHeader(a, E, P, ba, ka, 0 < C || 0 < M, v, u) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                        V = e ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                        for (z = 0; 7 > z; z++) G = (z + g) % 7, V += "<th" + (5 <= (z + g + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + c[G] +
                            "'>" + r[G] + "</span></th>";
                        K += V + "</tr></thead><tbody>";
                        V = this._getDaysInMonth(P, E);
                        P === a.selectedYear && E === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, V));
                        z = (this._getFirstDayOfMonth(P, E) - g + 7) % 7;
                        V = Math.ceil((z + V) / 7);
                        this.maxRows = V = A ? this.maxRows > V ? this.maxRows : V : V;
                        G = this._daylightSavingAdjust(new Date(P, E, 1 - z));
                        for (Y = 0; Y < V; Y++) {
                            K += "<tr>";
                            sa = !e ? "" : "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(G) + "</td>";
                            for (z = 0; 7 > z; z++) ma = y ? y.apply(a.input ? a.input[0] : null, [G]) : [!0, ""],
                                ja = (N = G.getMonth() !== E) && !B || !ma[0] || ba && G < ba || ka && G > ka, sa += "<td class='" + (5 <= (z + g + 6) % 7 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (G.getTime() === da.getTime() && E === a.selectedMonth && a._keyEvent || I.getTime() === G.getTime() && I.getTime() === da.getTime() ? " " + this._dayOverClass : "") + (ja ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !x ? "" : " " + ma[1] + (G.getTime() === J.getTime() ? " " + this._currentClass : "") + (G.getTime() === ga.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!N || x) && ma[2] ?
                                    " title='" + ma[2].replace(/'/g, "&#39;") + "'" : "") + (ja ? "" : " data-handler='selectDay' data-event='click' data-month='" + G.getMonth() + "' data-year='" + G.getFullYear() + "'") + ">" + (N && !x ? "&#xa0;" : ja ? "<span class='ui-state-default'>" + G.getDate() + "</span>" : "<a class='ui-state-default" + (G.getTime() === ga.getTime() ? " ui-state-highlight" : "") + (G.getTime() === J.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G);
                            K += sa + "</tr>"
                        }
                        E++;
                        11 < E && (E = 0, P++);
                        K += "</tbody></table>" + (A ? "</div>" + (0 < aa[0] && M === aa[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                        L += K
                    }
                    s += L
                }
                a._keyEvent = !1;
                return s + l
            },
            _generateMonthYearHeader: function(a, b, c, d, e, g, l, r) {
                var v, u, y, x = this._get(a, "changeMonth"),
                    B = this._get(a, "changeYear"),
                    I = this._get(a, "showMonthAfterYear"),
                    s = "<div class='ui-datepicker-title'>",
                    z = "";
                if (g || !x) z += "<span class='ui-datepicker-month'>" + l[b] + "</span>";
                else {
                    l = d && d.getFullYear() === c;
                    v = e && e.getFullYear() === c;
                    z += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                    for (u = 0; 12 > u; u++)
                        if ((!l || u >= d.getMonth()) && (!v || u <= e.getMonth())) z += "<option value='" + u + "'" + (u === b ? " selected='selected'" : "") + ">" + r[u] + "</option>";
                    z += "</select>"
                }
                I || (s += z + (g || !x || !B ? "&#xa0;" : ""));
                if (!a.yearshtml)
                    if (a.yearshtml = "", g || !B) s += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else {
                        r = this._get(a, "yearRange").split(":");
                        y = (new Date).getFullYear();
                        l = function(a) {
                            a = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? y + parseInt(a, 10) : parseInt(a, 10);
                            return isNaN(a) ? y : a
                        };
                        b = l(r[0]);
                        r = Math.max(b, l(r[1] || ""));
                        b = d ? Math.max(b, d.getFullYear()) : b;
                        r = e ? Math.min(r, e.getFullYear()) : r;
                        for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; b <= r; b++) a.yearshtml += "<option value='" + b + "'" + (b === c ? " selected='selected'" : "") + ">" + b + "</option>";
                        a.yearshtml += "</select>";
                        s += a.yearshtml;
                        a.yearshtml = null
                    }
                s += this._get(a, "yearSuffix");
                I && (s += (g || !x || !B ? "&#xa0;" : "") + z);
                return s + "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" === c ? b : 0),
                    e = a.drawMonth +
                    ("M" === c ? b : 0),
                    b = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                    d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, b)));
                a.selectedDay = d.getDate();
                a.drawMonth = a.selectedMonth = d.getMonth();
                a.drawYear = a.selectedYear = d.getFullYear();
                ("M" === c || "Y" === c) && this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    c = c && b < c ? c : b;
                return d && c > d ? d : c
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ?
                    a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                a = this._get(a, "numberOfMonths");
                return null == a ? [1, 1] : "number" === typeof a ? [1, a] : a
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return (new Date(a, b, 1)).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var e = this._getNumberOfMonths(a),
                    c = this._daylightSavingAdjust(new Date(c,
                        d + (0 > b ? b : e[0] * e[1]), 1));
                0 > b && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
                return this._isInRange(a, c)
            },
            _isInRange: function(a, b) {
                var c, d, e = this._getMinMaxDate(a, "min"),
                    g = this._getMinMaxDate(a, "max"),
                    l = null,
                    r = null;
                if (c = this._get(a, "yearRange")) c = c.split(":"), d = (new Date).getFullYear(), l = parseInt(c[0], 10), r = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (l += d), c[1].match(/[+\-].*/) && (r += d);
                return (!e || b.getTime() >= e.getTime()) && (!g || b.getTime() <= g.getTime()) && (!l || b.getFullYear() >= l) && (!r ||
                    b.getFullYear() <= r)
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff"),
                    b = "string" !== typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
                return {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                b = b ? "object" === typeof b ? b : this._daylightSavingAdjust(new Date(d,
                    c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
            }
        });
        a.fn.datepicker = function(b) {
            if (!this.length) return this;
            a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0);
            0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" === typeof b && ("isDisabled" ===
                b || "getDate" === b || "widget" === b) || "option" === b && 2 === arguments.length && "string" === typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
                "string" === typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
            })
        };
        a.datepicker = new c;
        a.datepicker.initialized = !1;
        a.datepicker.uuid = (new Date).getTime();
        a.datepicker.version = "1.10.2";
        window["DP_jQuery_" + g] = a
    })(jQuery);
    (function(a) {
        var e = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            c = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        a.widget("ui.dialog", {
            version: "1.10.2",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                };
                this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                };
                this.originalTitle = this.element.attr("title");
                this.options.title = this.options.title || this.originalTitle;
                this._createWrapper();
                this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
                this._createTitlebar();
                this._createButtonPane();
                this.options.draggable && a.fn.draggable && this._makeDraggable();
                this.options.resizable && a.fn.resizable && this._makeResizable();
                this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var b =
                    this.options.appendTo;
                return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
            },
            _destroy: function() {
                var a, c = this.originalPosition;
                this._destroyOverlay();
                this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
                this.uiDialog.stop(!0, !0).remove();
                this.originalTitle && this.element.attr("title", this.originalTitle);
                a = c.parent.children().eq(c.index);
                a.length && a[0] !== this.element[0] ? a.before(this.element) : c.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: a.noop,
            enable: a.noop,
            close: function(b) {
                var c = this;
                this._isOpen && !1 !== this._trigger("beforeClose", b) && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                    c._trigger("close", b)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(a, c) {
                var e = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                e && !c && this._trigger("focus", a);
                return e
            },
            open: function() {
                var b = this;
                this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                    b._focusTabbable();
                    b._trigger("focus")
                }), this._trigger("open"))
            },
            _focusTabbable: function() {
                var a = this.element.find("[autofocus]");
                a.length || (a = this.element.find(":tabbable"));
                a.length ||
                    (a = this.uiDialogButtonPane.find(":tabbable"));
                a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
                a.length || (a = this.uiDialog);
                a.eq(0).focus()
            },
            _keepFocus: function(b) {
                function c() {
                    var b = this.document[0].activeElement;
                    this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable()
                }
                b.preventDefault();
                c.call(this);
                this._delay(c)
            },
            _createWrapper: function() {
                this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo());
                this._on(this.uiDialog, {
                    keydown: function(b) {
                        if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) b.preventDefault(), this.close(b);
                        else if (b.keyCode === a.ui.keyCode.TAB) {
                            var c = this.uiDialog.find(":tabbable"),
                                e = c.filter(":first"),
                                c = c.filter(":last");
                            if ((b.target === c[0] || b.target === this.uiDialog[0]) && !b.shiftKey) e.focus(1), b.preventDefault();
                            else if ((b.target === e[0] || b.target === this.uiDialog[0]) && b.shiftKey) c.focus(1),
                                b.preventDefault()
                        }
                    },
                    mousedown: function(a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                });
                this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var b;
                this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
                this._on(this.uiDialogTitlebar, {
                    mousedown: function(b) {
                        a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                });
                this.uiDialogTitlebarClose = a("<button></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
                this._on(this.uiDialogTitlebarClose, {
                    click: function(a) {
                        a.preventDefault();
                        this.close(a)
                    }
                });
                b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
                this._title(b);
                this.uiDialog.attr({
                    "aria-labelledby": b.attr("id")
                })
            },
            _title: function(a) {
                this.options.title || a.html("&#160;");
                a.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
                this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
                this._createButtons()
            },
            _createButtons: function() {
                var b = this,
                    c = this.options.buttons;
                this.uiDialogButtonPane.remove();
                this.uiButtonSet.empty();
                a.isEmptyObject(c) || a.isArray(c) && !c.length ? this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function(c,
                    d) {
                    var e, h, d = a.isFunction(d) ? {
                            click: d,
                            text: c
                        } : d,
                        d = a.extend({
                            type: "button"
                        }, d);
                    e = d.click;
                    d.click = function() {
                        e.apply(b.element[0], arguments)
                    };
                    h = {
                        icons: d.icons,
                        text: d.showText
                    };
                    delete d.icons;
                    delete d.showText;
                    a("<button></button>", d).button(h).appendTo(b.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var c = this,
                    e = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(e, f) {
                        a(this).addClass("ui-dialog-dragging");
                        c._blockFrames();
                        c._trigger("dragStart", e, b(f))
                    },
                    drag: function(a, e) {
                        c._trigger("drag", a, b(e))
                    },
                    stop: function(l, f) {
                        e.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()];
                        a(this).removeClass("ui-dialog-dragging");
                        c._unblockFrames();
                        c._trigger("dragStop", l, b(f))
                    }
                })
            },
            _makeResizable: function() {
                function b(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                var c = this,
                    e = this.options,
                    l = e.resizable,
                    f = this.uiDialog.css("position"),
                    l = "string" === typeof l ? l : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: e.maxWidth,
                    maxHeight: e.maxHeight,
                    minWidth: e.minWidth,
                    minHeight: this._minHeight(),
                    handles: l,
                    start: function(e, f) {
                        a(this).addClass("ui-dialog-resizing");
                        c._blockFrames();
                        c._trigger("resizeStart", e, b(f))
                    },
                    resize: function(a, e) {
                        c._trigger("resize",
                            a, b(e))
                    },
                    stop: function(f, l) {
                        e.height = a(this).height();
                        e.width = a(this).width();
                        a(this).removeClass("ui-dialog-resizing");
                        c._unblockFrames();
                        c._trigger("resizeStop", f, b(l))
                    }
                }).css("position", f)
            },
            _minHeight: function() {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function() {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show();
                this.uiDialog.position(this.options.position);
                a || this.uiDialog.hide()
            },
            _setOptions: function(b) {
                var d = this,
                    g = !1,
                    l = {};
                a.each(b,
                    function(a, b) {
                        d._setOption(a, b);
                        a in e && (g = !0);
                        a in c && (l[a] = b)
                    });
                g && (this._size(), this._position());
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", l)
            },
            _setOption: function(a, c) {
                var e, l = this.uiDialog;
                "dialogClass" === a && l.removeClass(this.options.dialogClass).addClass(c);
                "disabled" !== a && (this._super(a, c), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                        label: "" + c
                    }), "draggable" ===
                    a && ((e = l.is(":data(ui-draggable)")) && !c && l.draggable("destroy"), !e && c && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && ((e = l.is(":data(ui-resizable)")) && !c && l.resizable("destroy"), e && "string" === typeof c && l.resizable("option", "handles", c), !e && !1 !== c && this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var a, c, e, l = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                });
                l.minWidth >
                    l.width && (l.width = l.minWidth);
                a = this.uiDialog.css({
                    height: "auto",
                    width: l.width
                }).outerHeight();
                c = Math.max(0, l.minHeight - a);
                e = "number" === typeof l.maxHeight ? Math.max(0, l.maxHeight - a) : "none";
                "auto" === l.height ? this.element.css({
                    minHeight: c,
                    maxHeight: e,
                    height: "auto"
                }) : this.element.height(Math.max(0, l.height - a));
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var b =
                        a(this);
                    return a("<div>").css({
                        position: "absolute",
                        width: b.outerWidth(),
                        height: b.outerHeight()
                    }).appendTo(b.parent()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(b) {
                return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var b = this,
                        c = this.widgetFullName;
                    a.ui.dialog.overlayInstances || this._delay(function() {
                        a.ui.dialog.overlayInstances &&
                            this.document.bind("focusin.dialog", function(e) {
                                b._allowInteraction(e) || (e.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())
                            })
                    });
                    this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                    this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    });
                    a.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function() {
                this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
                    this.overlay.remove(), this.overlay = null)
            }
        });
        a.ui.dialog.overlayInstances = 0;
        !1 !== a.uiBackCompat && a.widget("ui.dialog", a.ui.dialog, {
            _position: function() {
                var b = this.options.position,
                    c = [],
                    e = [0, 0],
                    l;
                if (b) {
                    if ("string" === typeof b || "object" === typeof b && "0" in b) c = b.split ? b.split(" ") : [b[0], b[1]], 1 === c.length && (c[1] = c[0]), a.each(["left", "top"], function(a, b) {
                        +c[a] === c[a] && (e[a] = c[a], c[a] = b)
                    }), b = {
                        my: c[0] + (0 > e[0] ? e[0] : "+" + e[0]) + " " + c[1] + (0 > e[1] ? e[1] : "+" + e[1]),
                        at: c.join(" ")
                    };
                    b = a.extend({}, a.ui.dialog.prototype.options.position,
                        b)
                } else b = a.ui.dialog.prototype.options.position;
                (l = this.uiDialog.is(":visible")) || this.uiDialog.show();
                this.uiDialog.position(b);
                l || this.uiDialog.hide()
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.menu", {
            version: "1.10.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element;
                this.mouseHandled = !1;
                this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" +
                    this.eventNamespace, a.proxy(function(a) {
                        this.options.disabled && a.preventDefault()
                    }, this));
                this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                this._on({
                    "mousedown .ui-menu-item > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(a) {
                        a.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(e) {
                        var c = a(e.target).closest(".ui-menu-item");
                        !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), c.has(".ui-menu").length ?
                            this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        var c = a(e.currentTarget);
                        c.siblings().children(".ui-state-active").removeClass("ui-state-active");
                        this.focus(e, c)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(a, c) {
                        var b = this.active || this.element.children(".ui-menu-item").eq(0);
                        c || this.focus(a, b)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            a.contains(this.element[0],
                                this.document[0].activeElement) || this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                });
                this.refresh();
                this._on(this.document, {
                    click: function(e) {
                        a(e.target).closest(".ui-menu").length || this.collapseAll(e);
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var e = a(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                });
                this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(e) {
                function c(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                        "\\$&")
                }
                var b, d, g, l, f = !0;
                switch (e.keyCode) {
                    case a.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case a.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case a.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case a.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case a.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case a.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case a.ui.keyCode.ENTER:
                    case a.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case a.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        f = !1, b = this.previousFilter || "", d = String.fromCharCode(e.keyCode), g = !1, clearTimeout(this.filterTimer), d === b ? g = !0 : d = b + d, l = RegExp("^" + c(d), "i"), b = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return l.test(a(this).children("a").text())
                            }), b = g && -1 !== b.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : b, b.length || (d = String.fromCharCode(e.keyCode), l = RegExp("^" + c(d), "i"), b = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return l.test(a(this).children("a").text())
                            })),
                            b.length ? (this.focus(e, b), 1 < b.length ? (this.previousFilter = d, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
                }
                f && e.preventDefault()
            },
            _activate: function(a) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
            },
            refresh: function() {
                var e, c = this.options.icons.submenu;
                e = this.element.find(this.options.menus);
                e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var b = a(this),
                        d = b.prev("a"),
                        e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                    d.attr("aria-haspopup", "true").prepend(e);
                    b.attr("aria-labelledby", d.attr("id"))
                });
                e = e.add(this.element);
                e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
                e.children(":not(.ui-menu-item)").each(function() {
                    var b =
                        a(this);
                    /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
                });
                e.children(".ui-state-disabled").attr("aria-disabled", "true");
                this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(a, c) {
                "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu);
                this._super(a, c)
            },
            focus: function(a, c) {
                var b;
                this.blur(a, a &&
                    "focus" === a.type);
                this._scrollIntoView(c);
                this.active = c.first();
                b = this.active.children("a").addClass("ui-state-focus");
                this.options.role && this.element.attr("aria-activedescendant", b.attr("id"));
                this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
                a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay);
                b = c.children(".ui-menu");
                b.length && /^mouse/.test(a.type) && this._startOpening(b);
                this.activeMenu = c.parent();
                this._trigger("focus",
                    a, {
                        item: c
                    })
            },
            _scrollIntoView: function(e) {
                var c, b, d;
                this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, b = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, c = e.offset().top - this.activeMenu.offset().top - c - b, b = this.activeMenu.scrollTop(), d = this.activeMenu.height(), e = e.height(), 0 > c ? this.activeMenu.scrollTop(b + c) : c + e > d && this.activeMenu.scrollTop(b + c - d + e))
            },
            blur: function(a, c) {
                c || clearTimeout(this.timer);
                this.active && (this.active.children("a").removeClass("ui-state-focus"),
                    this.active = null, this._trigger("blur", a, {
                        item: this.active
                    }))
            },
            _startOpening: function(a) {
                clearTimeout(this.timer);
                "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close();
                    this._open(a)
                }, this.delay))
            },
            _open: function(e) {
                var c = a.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer);
                this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
            },
            collapseAll: function(e,
                c) {
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    var b = c ? this.element : a(e && e.target).closest(this.element.find(".ui-menu"));
                    b.length || (b = this.element);
                    this._close(b);
                    this.blur(e);
                    this.activeMenu = b
                }, this.delay)
            },
            _close: function(a) {
                a || (a = this.active ? this.active.parent() : this.element);
                a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(a) {
                var c = this.active && this.active.parent().closest(".ui-menu-item",
                    this.element);
                c && c.length && (this._close(), this.focus(a, c))
            },
            expand: function(a) {
                var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                c && c.length && (this._open(c.parent()), this._delay(function() {
                    this.focus(a, c)
                }))
            },
            next: function(a) {
                this._move("next", "first", a)
            },
            previous: function(a) {
                this._move("prev", "last", a)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(a, c, b) {
                var d;
                this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
                if (!d || !d.length || !this.active) d = this.activeMenu.children(".ui-menu-item")[c]();
                this.focus(b, d)
            },
            nextPage: function(e) {
                var c, b, d;
                this.active ? this.isLastItem() || (this._hasScroll() ? (b = this.active.offset().top, d = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    c = a(this);
                    return 0 > c.offset().top - b -
                        d
                }), this.focus(e, c)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())) : this.next(e)
            },
            previousPage: function(e) {
                var c, b, d;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (b = this.active.offset().top, d = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    c = a(this);
                    return 0 < c.offset().top - b + d
                }), this.focus(e, c)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())) : this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() <
                    this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || a(e.target).closest(".ui-menu-item");
                var c = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0);
                this._trigger("select", e, c)
            }
        })
    })(jQuery);
    (function(a, e) {
        a.widget("ui.progressbar", {
            version: "1.10.2",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue();
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                });
                this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
                this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.valueDiv.remove()
            },
            value: function(a) {
                if (a === e) return this.options.value;
                this.options.value = this._constrainedValue(a);
                this._refreshValue()
            },
            _constrainedValue: function(a) {
                a === e && (a = this.options.value);
                this.indeterminate = !1 === a;
                "number" !== typeof a && (a = 0);
                return this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
            },
            _setOptions: function(a) {
                var b = a.value;
                delete a.value;
                this._super(a);
                this.options.value = this._constrainedValue(b);
                this._refreshValue()
            },
            _setOption: function(a, b) {
                "max" ===
                a && (b = Math.max(this.min, b));
                this._super(a, b)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var c = this.options.value,
                    b = this._percentage();
                this.valueDiv.toggle(this.indeterminate || c > this.min).toggleClass("ui-corner-right", c === this.options.max).width(b.toFixed(0) + "%");
                this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
                this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv ||
                    (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": c
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
                this.oldValue !== c && (this.oldValue = c, this._trigger("change"));
                c === this.options.max && this._trigger("complete")
            }
        })
    })(jQuery);
    (function(a) {
        a.widget("ui.slider", a.ui.mouse, {
            version: "1.10.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._mouseSliding = this._keySliding = !1;
                this._animateOff = !0;
                this._handleIndex = null;
                this._detectOrientation();
                this._mouseInit();
                this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
                this._refresh();
                this._setOption("disabled", this.options.disabled);
                this._animateOff = !1
            },
            _refresh: function() {
                this._createRange();
                this._createHandles();
                this._setupEvents();
                this._refreshValue()
            },
            _createHandles: function() {
                var e, c;
                e = this.options;
                var b = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    d = [];
                c = e.values && e.values.length || 1;
                b.length > c && (b.slice(c).remove(), b = b.slice(0, c));
                for (e = b.length; e < c; e++) d.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
                this.handles = b.add(a(d.join("")).appendTo(this.element));
                this.handle = this.handles.eq(0);
                this.handles.each(function(b) {
                    a(this).data("ui-slider-handle-index", b)
                })
            },
            _createRange: function() {
                var e = this.options,
                    c = "";
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : a.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), !this.range || !this.range.length ? (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all") :
                    this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }), this.range.addClass(c + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = a([])
            },
            _setupEvents: function() {
                var a = this.handles.add(this.range).filter("a");
                this._off(a);
                this._on(a, this._handleEvents);
                this._hoverable(a);
                this._focusable(a)
            },
            _destroy: function() {
                this.handles.remove();
                this.range.remove();
                this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
                this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var c, b, d, g, l, f = this,
                    h = this.options;
                if (h.disabled) return !1;
                this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                };
                this.elementOffset = this.element.offset();
                c = this._normValueFromMouse({
                    x: e.pageX,
                    y: e.pageY
                });
                b = this._valueMax() - this._valueMin() + 1;
                this.handles.each(function(e) {
                    var l = Math.abs(c - f.values(e));
                    if (b > l || b === l && (e === f._lastChangedValue || f.values(e) === h.min)) b = l, d = a(this), g = e
                });
                if (!1 === this._start(e, g)) return !1;
                this._mouseSliding = !0;
                this._handleIndex = g;
                d.addClass("ui-state-active").focus();
                l = d.offset();
                this._clickOffset = !a(e.target).parents().addBack().is(".ui-slider-handle") ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - d.width() / 2,
                    top: e.pageY - l.top - d.height() / 2 - (parseInt(d.css("borderTopWidth"), 10) || 0) - (parseInt(d.css("borderBottomWidth"), 10) || 0) + (parseInt(d.css("marginTop"), 10) || 0)
                };
                this.handles.hasClass("ui-state-hover") || this._slide(e, g, c);
                return this._animateOff = !0
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(a) {
                var c =
                    this._normValueFromMouse({
                        x: a.pageX,
                        y: a.pageY
                    });
                this._slide(a, this._handleIndex, c);
                return !1
            },
            _mouseStop: function(a) {
                this.handles.removeClass("ui-state-active");
                this._mouseSliding = !1;
                this._stop(a, this._handleIndex);
                this._change(a, this._handleIndex);
                this._clickOffset = this._handleIndex = null;
                return this._animateOff = !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(a) {
                var c;
                "horizontal" === this.orientation ? (c = this.elementSize.width,
                    a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0));
                c = a / c;
                1 < c && (c = 1);
                0 > c && (c = 0);
                "vertical" === this.orientation && (c = 1 - c);
                a = this._valueMax() - this._valueMin();
                c = this._valueMin() + c * a;
                return this._trimAlignValue(c)
            },
            _start: function(a, c) {
                var b = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                return this._trigger("start", a, b)
            },
            _slide: function(a, c, b) {
                var d;
                if (this.options.values && this.options.values.length) {
                    d = this.values(c ? 0 : 1);
                    if (2 === this.options.values.length && !0 === this.options.range && (0 === c && b > d || 1 === c && b < d)) b = d;
                    b !== this.values(c) && (d = this.values(), d[c] = b, a = this._trigger("slide", a, {
                        handle: this.handles[c],
                        value: b,
                        values: d
                    }), this.values(c ? 0 : 1), !1 !== a && this.values(c, b, !0))
                } else b !== this.value() && (a = this._trigger("slide", a, {
                    handle: this.handles[c],
                    value: b
                }), !1 !== a && this.value(b))
            },
            _stop: function(a,
                c) {
                var b = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                this._trigger("stop", a, b)
            },
            _change: function(a, c) {
                if (!this._keySliding && !this._mouseSliding) {
                    var b = {
                        handle: this.handles[c],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (b.value = this.values(c), b.values = this.values());
                    this._lastChangedValue = c;
                    this._trigger("change", a, b)
                }
            },
            value: function(a) {
                if (arguments.length) this.options.value =
                    this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
                else return this._value()
            },
            values: function(e, c) {
                var b, d, g;
                if (1 < arguments.length) this.options.values[e] = this._trimAlignValue(c), this._refreshValue(), this._change(null, e);
                else if (arguments.length)
                    if (a.isArray(arguments[0])) {
                        b = this.options.values;
                        d = arguments[0];
                        for (g = 0; g < b.length; g += 1) b[g] = this._trimAlignValue(d[g]), this._change(null, g);
                        this._refreshValue()
                    } else return this.options.values && this.options.values.length ? this._values(e) : this.value();
                else return this._values()
            },
            _setOption: function(e, c) {
                var b, d = 0;
                "range" === e && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
                a.isArray(this.options.values) && (d = this.options.values.length);
                a.Widget.prototype._setOption.apply(this, arguments);
                switch (e) {
                    case "orientation":
                        this._detectOrientation();
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" +
                            this.orientation);
                        this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._change(null, 0);
                        this._animateOff = !1;
                        break;
                    case "values":
                        this._animateOff = !0;
                        this._refreshValue();
                        for (b = 0; b < d; b += 1) this._change(null, b);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function(a) {
                var c, b;
                if (arguments.length) return c = this.options.values[a], c = this._trimAlignValue(c);
                if (this.options.values && this.options.values.length) {
                    c = this.options.values.slice();
                    for (b = 0; b < c.length; b += 1) c[b] = this._trimAlignValue(c[b]);
                    return c
                }
                return []
            },
            _trimAlignValue: function(a) {
                if (a <= this._valueMin()) return this._valueMin();
                if (a >= this._valueMax()) return this._valueMax();
                var c = 0 < this.options.step ? this.options.step : 1,
                    b = (a - this._valueMin()) % c,
                    a = a - b;
                2 * Math.abs(b) >= c && (a += 0 < b ? c : -c);
                return parseFloat(a.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var e, c, b, d, g, l = this.options.range,
                    f = this.options,
                    h = this,
                    k = !this._animateOff ? f.animate : !1,
                    m = {};
                if (this.options.values && this.options.values.length) this.handles.each(function(b) {
                    c = 100 * ((h.values(b) - h._valueMin()) / (h._valueMax() - h._valueMin()));
                    m["horizontal" === h.orientation ? "left" : "bottom"] = c + "%";
                    a(this).stop(1, 1)[k ? "animate" : "css"](m, f.animate);
                    if (!0 === h.options.range)
                        if ("horizontal" ===
                            h.orientation) {
                            if (0 === b) h.range.stop(1, 1)[k ? "animate" : "css"]({
                                left: c + "%"
                            }, f.animate);
                            if (1 === b) h.range[k ? "animate" : "css"]({
                                width: c - e + "%"
                            }, {
                                queue: !1,
                                duration: f.animate
                            })
                        } else {
                            if (0 === b) h.range.stop(1, 1)[k ? "animate" : "css"]({
                                bottom: c + "%"
                            }, f.animate);
                            if (1 === b) h.range[k ? "animate" : "css"]({
                                height: c - e + "%"
                            }, {
                                queue: !1,
                                duration: f.animate
                            })
                        }
                    e = c
                });
                else {
                    b = this.value();
                    d = this._valueMin();
                    g = this._valueMax();
                    c = g !== d ? 100 * ((b - d) / (g - d)) : 0;
                    m["horizontal" === this.orientation ? "left" : "bottom"] = c + "%";
                    this.handle.stop(1, 1)[k ?
                        "animate" : "css"](m, f.animate);
                    if ("min" === l && "horizontal" === this.orientation) this.range.stop(1, 1)[k ? "animate" : "css"]({
                        width: c + "%"
                    }, f.animate);
                    if ("max" === l && "horizontal" === this.orientation) this.range[k ? "animate" : "css"]({
                        width: 100 - c + "%"
                    }, {
                        queue: !1,
                        duration: f.animate
                    });
                    if ("min" === l && "vertical" === this.orientation) this.range.stop(1, 1)[k ? "animate" : "css"]({
                        height: c + "%"
                    }, f.animate);
                    if ("max" === l && "vertical" === this.orientation) this.range[k ? "animate" : "css"]({
                        height: 100 - c + "%"
                    }, {
                        queue: !1,
                        duration: f.animate
                    })
                }
            },
            _handleEvents: {
                keydown: function(e) {
                    var c, b, d, g = a(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, a(e.target).addClass("ui-state-active"), c = this._start(e, g), !1 === c)) return
                    }
                    d = this.options.step;
                    c = this.options.values && this.options.values.length ?
                        b = this.values(g) : b = this.value();
                    switch (e.keyCode) {
                        case a.ui.keyCode.HOME:
                            b = this._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            b = this._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            b = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / 5);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            b = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / 5);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (c === this._valueMax()) return;
                            b = this._trimAlignValue(c + d);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (c ===
                                this._valueMin()) return;
                            b = this._trimAlignValue(c - d)
                    }
                    this._slide(e, g, b)
                },
                click: function(a) {
                    a.preventDefault()
                },
                keyup: function(e) {
                    var c = a(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, c), this._change(e, c), a(e.target).removeClass("ui-state-active"))
                }
            }
        })
    })(jQuery);
    (function(a) {
        function e(a) {
            return function() {
                var b = this.element.val();
                a.apply(this, arguments);
                this._refresh();
                b !== this.element.val() && this._trigger("change")
            }
        }
        a.widget("ui.spinner", {
            version: "1.10.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max);
                this._setOption("min", this.options.min);
                this._setOption("step", this.options.step);
                this._value(this.element.val(), !0);
                this._draw();
                this._on(this._events);
                this._refresh();
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var c = {},
                    b = this.element;
                a.each(["min", "max", "step"], function(a, e) {
                    var l = b.attr(e);
                    void 0 !== l && l.length && (c[e] = l)
                });
                return c
            },
            _events: {
                keydown: function(a) {
                    this._start(a) && this._keydown(a) && a.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(a) {
                    this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a))
                },
                mousewheel: function(a, b) {
                    if (b) {
                        if (!this.spinning && !this._start(a)) return !1;
                        this._spin((0 < b ? 1 : -1) * this.options.step, a);
                        clearTimeout(this.mousewheelTimer);
                        this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(a)
                        }, 100);
                        a.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(c) {
                    function b() {
                        this.element[0] !==
                            this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                                this.previous = d
                            }))
                    }
                    var d;
                    d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                    c.preventDefault();
                    b.call(this);
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur;
                        b.call(this)
                    });
                    !1 !== this._start(c) && this._repeat(null, a(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(c) {
                    if (a(c.currentTarget).hasClass("ui-state-active")) {
                        if (!1 ===
                            this._start(c)) return !1;
                        this._repeat(null, a(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
                    }
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton");
                this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
                this.buttons.height() > Math.ceil(0.5 * a.height()) && 0 < a.height() &&
                    a.height(a.height());
                this.options.disabled && this.disable()
            },
            _keydown: function(c) {
                var b = this.options,
                    d = a.ui.keyCode;
                switch (c.keyCode) {
                    case d.UP:
                        return this._repeat(null, 1, c), !0;
                    case d.DOWN:
                        return this._repeat(null, -1, c), !0;
                    case d.PAGE_UP:
                        return this._repeat(null, b.page, c), !0;
                    case d.PAGE_DOWN:
                        return this._repeat(null, -b.page, c), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
                    this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(a) {
                if (!this.spinning && !1 === this._trigger("start", a)) return !1;
                this.counter || (this.counter = 1);
                return this.spinning = !0
            },
            _repeat: function(a, b, d) {
                a = a || 500;
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    this._repeat(40, b, d)
                }, a);
                this._spin(b * this.options.step, d)
            },
            _spin: function(a, b) {
                var d = this.value() || 0;
                this.counter ||
                    (this.counter = 1);
                d = this._adjustValue(d + a * this._increment(this.counter));
                if (!this.spinning || !1 !== this._trigger("spin", b, {
                        value: d
                    })) this._value(d), this.counter++
            },
            _increment: function(c) {
                var b = this.options.incremental;
                return b ? a.isFunction(b) ? b(c) : Math.floor(c * c * c / 5E4 - c * c / 500 + 17 * c / 200 + 1) : 1
            },
            _precision: function() {
                var a = this._precisionOf(this.options.step);
                null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
                return a
            },
            _precisionOf: function(a) {
                var a = a.toString(),
                    b = a.indexOf(".");
                return -1 === b ? 0 : a.length - b - 1
            },
            _adjustValue: function(a) {
                var b, d = this.options;
                b = null !== d.min ? d.min : 0;
                a = Math.round((a - b) / d.step) * d.step;
                a = b + a;
                a = parseFloat(a.toFixed(this._precision()));
                return null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
            },
            _stop: function(a) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
            },
            _setOption: function(a, b) {
                if ("culture" === a || "numberFormat" === a) {
                    var d = this._parse(this.element.val());
                    this.options[a] =
                        b;
                    this.element.val(this._format(d))
                } else {
                    if ("max" === a || "min" === a || "step" === a) "string" === typeof b && (b = this._parse(b));
                    "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down));
                    this._super(a, b);
                    "disabled" === a && (b ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
                }
            },
            _setOptions: e(function(a) {
                this._super(a);
                this._value(this.element.val())
            }),
            _parse: function(a) {
                "string" === typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a);
                return "" === a || isNaN(a) ? null : a
            },
            _format: function(a) {
                return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(a, b) {
                var d;
                "" !== a && (d = this._parse(a), null !== d && (b || (d = this._adjustValue(d)), a = this._format(d)));
                this.element.val(a);
                this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function(a) {
                this._stepUp(a)
            }),
            _stepUp: function(a) {
                this._start() && (this._spin((a || 1) * this.options.step),
                    this._stop())
            },
            stepDown: e(function(a) {
                this._stepDown(a)
            }),
            _stepDown: function(a) {
                this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
            },
            pageUp: e(function(a) {
                this._stepUp((a || 1) * this.options.page)
            }),
            pageDown: e(function(a) {
                this._stepDown((a || 1) * this.options.page)
            }),
            value: function(a) {
                if (!arguments.length) return this._parse(this.element.val());
                e(this._value).call(this, a)
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    })(jQuery);
    (function(a, e) {
        function c(a) {
            return 1 < a.hash.length && decodeURIComponent(a.href.replace(d, "")) === decodeURIComponent(location.href.replace(d, ""))
        }
        var b = 0,
            d = /#.*$/;
        a.widget("ui.tabs", {
            version: "1.10.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var b = this,
                    c = this.options;
                this.running = !1;
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",
                    c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                });
                this._processTabs();
                c.active = this._initialActive();
                a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                    return b.tabs.index(a)
                }))).sort());
                this.active = !1 !== this.options.active &&
                    this.anchors.length ? this._findActive(c.active) : a();
                this._refresh();
                this.active.length && this.load(c.active)
            },
            _initialActive: function() {
                var b = this.options.active,
                    c = this.options.collapsible,
                    d = location.hash.substring(1);
                if (null === b && (d && this.tabs.each(function(c, e) {
                        if (a(e).attr("aria-controls") === d) return b = c, !1
                    }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null === b || -1 === b)) b = this.tabs.length ? 0 : !1;
                !1 !== b && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0));
                !c && (!1 === b && this.anchors.length) &&
                    (b = 0);
                return b
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: !this.active.length ? a() : this._getPanelForTab(this.active)
                }
            },
            _tabKeydown: function(b) {
                var c = a(this.document[0].activeElement).closest("li"),
                    d = this.tabs.index(c),
                    e = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                            d++;
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.LEFT:
                            e = !1;
                            d--;
                            break;
                        case a.ui.keyCode.END:
                            d = this.anchors.length - 1;
                            break;
                        case a.ui.keyCode.HOME:
                            d = 0;
                            break;
                        case a.ui.keyCode.SPACE:
                            b.preventDefault();
                            clearTimeout(this.activating);
                            this._activate(d);
                            return;
                        case a.ui.keyCode.ENTER:
                            b.preventDefault();
                            clearTimeout(this.activating);
                            this._activate(d === this.options.active ? !1 : d);
                            return;
                        default:
                            return
                    }
                    b.preventDefault();
                    clearTimeout(this.activating);
                    d = this._focusNextTab(d, e);
                    b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", d)
                    }, this.delay))
                }
            },
            _panelKeydown: function(b) {
                !this._handlePageNav(b) && (b.ctrlKey &&
                    b.keyCode === a.ui.keyCode.UP) && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(b) {
                if (b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
                if (b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
            },
            _findNextTab: function(b, c) {
                function d() {
                    b > e && (b = 0);
                    0 > b && (b = e);
                    return b
                }
                for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function(a, b) {
                a = this._findNextTab(a, b);
                this.tabs.eq(a).focus();
                return a
            },
            _setOption: function(a, b) {
                "active" === a ? this._activate(b) : "disabled" === a ? this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), !b && !1 === this.options.active && this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b))
            },
            _tabId: function(a) {
                return a.attr("aria-controls") || "ui-tabs-" + ++b
            },
            _sanitizeSelector: function(a) {
                return a ?
                    a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var b = this.options,
                    c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                    return c.index(a)
                });
                this._processTabs();
                !1 === b.active || !this.anchors.length ? (b.active = !1, this.active = a()) : this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active =
                    this.tabs.index(this.active);
                this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled);
                this._setupEvents(this.options.event);
                this._setupHeightStyle(this.options.heightStyle);
                this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                });
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
                this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                });
                this.anchors = this.tabs.map(function() {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                });
                this.panels =
                    a();
                this.anchors.each(function(d, e) {
                    var h, k, m, p = a(e).uniqueId().attr("id"),
                        t = a(e).closest("li"),
                        q = t.attr("aria-controls");
                    c(e) ? (h = e.hash, k = b.element.find(b._sanitizeSelector(h))) : (m = b._tabId(t), h = "#" + m, k = b.element.find(h), k.length || (k = b._createPanel(m), k.insertAfter(b.panels[d - 1] || b.tablist)), k.attr("aria-live", "polite"));
                    k.length && (b.panels = b.panels.add(k));
                    q && t.data("ui-tabs-aria-controls", q);
                    t.attr({
                        "aria-controls": h.substring(1),
                        "aria-labelledby": p
                    });
                    k.attr("aria-labelledby", p)
                });
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role",
                    "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c = 0, d; d = this.tabs[c]; c++) !0 === b || -1 !== a.inArray(c, b) ? a(d).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function(b) {
                var c = {
                    click: function(a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                });
                this._off(this.anchors.add(this.tabs).add(this.panels));
                this._on(this.anchors, c);
                this._on(this.tabs, {
                    keydown: "_tabKeydown"
                });
                this._on(this.panels, {
                    keydown: "_panelKeydown"
                });
                this._focusable(this.tabs);
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(b) {
                var c, d = this.element.parent();
                "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(),
                    this.element.siblings(":visible").each(function() {
                        var b = a(this),
                            d = b.css("position");
                        "absolute" === d || "fixed" === d || (c -= b.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        c -= a(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                    }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget).closest("li"),
                    k = e[0] === d[0],
                    m = k && c.collapsible,
                    p = m ? a() : this._getPanelForTab(e),
                    t = !d.length ? a() : this._getPanelForTab(d),
                    d = {
                        oldTab: d,
                        oldPanel: t,
                        newTab: m ? a() : e,
                        newPanel: p
                    };
                b.preventDefault();
                if (!e.hasClass("ui-state-disabled") && !e.hasClass("ui-tabs-loading") && !this.running && !(k && !c.collapsible || !1 === this._trigger("beforeActivate", b, d))) c.active = m ? !1 : this.tabs.index(e), this.active = k ? a() : e, this.xhr && this.xhr.abort(), !t.length && !p.length && a.error("jQuery UI Tabs: Mismatching fragment identifier."),
                    p.length && this.load(this.tabs.index(e), b), this._toggle(b, d)
            },
            _toggle: function(b, c) {
                function d() {
                    k.running = !1;
                    k._trigger("activate", b, c)
                }

                function e() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                    m.length && k.options.show ? k._show(m, k.options.show, d) : (m.show(), d())
                }
                var k = this,
                    m = c.newPanel,
                    p = c.oldPanel;
                this.running = !0;
                p.length && this.options.hide ? this._hide(p, this.options.hide, function() {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                    p.hide(), e());
                p.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });
                c.oldTab.attr("aria-selected", "false");
                m.length && p.length ? c.oldTab.attr("tabIndex", -1) : m.length && this.tabs.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1);
                m.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                });
                c.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(b) {
                b = this._findActive(b);
                b[0] !== this.active[0] && (b.length || (b = this.active), b = b.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: b,
                    currentTarget: b,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return !1 === b ? a() : this.tabs.eq(b)
            },
            _getIndex: function(a) {
                "string" === typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']")));
                return a
            },
            _destroy: function() {
                this.xhr && this.xhr.abort();
                this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
                this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
                this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
                this.tabs.add(this.panels).each(function() {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                });
                this.tabs.each(function() {
                    var b = a(this),
                        c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                });
                this.panels.show();
                "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(b) {
                var c = this.options.disabled;
                !1 !== c && (b === e ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                    return a !== b ? a : null
                }) : a.map(this.tabs, function(a, c) {
                    return c !== b ? c : null
                })), this._setupDisabled(c))
            },
            disable: function(b) {
                var c = this.options.disabled;
                if (!0 !== c) {
                    if (b === e) c = !0;
                    else {
                        b = this._getIndex(b);
                        if (-1 !== a.inArray(b, c)) return;
                        c = a.isArray(c) ? a.merge([b], c).sort() : [b]
                    }
                    this._setupDisabled(c)
                }
            },
            load: function(b, d) {
                var b = this._getIndex(b),
                    e = this,
                    h = this.tabs.eq(b),
                    k = h.find(".ui-tabs-anchor"),
                    m = this._getPanelForTab(h),
                    p = {
                        tab: h,
                        panel: m
                    };
                if (!c(k[0]) && (this.xhr = a.ajax(this._ajaxSettings(k, d, p))) && "canceled" !== this.xhr.statusText) h.addClass("ui-tabs-loading"), m.attr("aria-busy", "true"), this.xhr.success(function(a) {
                    setTimeout(function() {
                        m.html(a);
                        e._trigger("load", d, p)
                    }, 1)
                }).complete(function(a, b) {
                    setTimeout(function() {
                        "abort" ===
                        b && e.panels.stop(!1, !0);
                        h.removeClass("ui-tabs-loading");
                        m.removeAttr("aria-busy");
                        a === e.xhr && delete e.xhr
                    }, 1)
                })
            },
            _ajaxSettings: function(b, c, d) {
                var e = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function(b, g) {
                        return e._trigger("beforeLoad", c, a.extend({
                            jqXHR: b,
                            ajaxSettings: g
                        }, d))
                    }
                }
            },
            _getPanelForTab: function(b) {
                b = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + b))
            }
        })
    })(jQuery);
    (function(a) {
        var e = 0;
        a.widget("ui.tooltip", {
            version: "1.10.2",
            options: {
                content: function() {
                    var c = a(this).attr("title") || "";
                    return a("<a>").text(c).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                });
                this.tooltips = {};
                this.parents = {};
                this.options.disabled && this._disable()
            },
            _setOption: function(c, b) {
                var d = this;
                "disabled" ===
                c ? (this[b ? "_disable" : "_enable"](), this.options[c] = b) : (this._super(c, b), "content" === c && a.each(this.tooltips, function(a, b) {
                    d._updateContent(b)
                }))
            },
            _disable: function() {
                var c = this;
                a.each(this.tooltips, function(b, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0];
                    c.close(e, !0)
                });
                this.element.find(this.options.items).addBack().each(function() {
                    var b = a(this);
                    b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var c =
                        a(this);
                    c.data("ui-tooltip-title") && c.attr("title", c.data("ui-tooltip-title"))
                })
            },
            open: function(c) {
                var b = this,
                    d = a(c ? c.target : this.element).closest(this.options.items);
                d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), c && "mouseover" === c.type && d.parents().each(function() {
                    var c = a(this),
                        d;
                    c.data("ui-tooltip-open") && (d = a.Event("blur"), d.target = d.currentTarget = this, b.close(d, !0));
                    c.attr("title") && (c.uniqueId(), b.parents[this.id] = {
                        element: this,
                        title: c.attr("title")
                    }, c.attr("title", ""))
                }), this._updateContent(d, c))
            },
            _updateContent: function(a, b) {
                var d;
                d = this.options.content;
                var e = this,
                    l = b ? b.type : null;
                if ("string" === typeof d) return this._open(b, a, d);
                (d = d.call(a[0], function(d) {
                    a.data("ui-tooltip-open") && e._delay(function() {
                        b && (b.type = l);
                        this._open(b, a, d)
                    })
                })) && this._open(b, a, d)
            },
            _open: function(c, b, d) {
                function e(a) {
                    h.of = a;
                    l.is(":hidden") || l.position(h)
                }
                var l, f, h = a.extend({}, this.options.position);
                if (d)
                    if (l = this._find(b), l.length) l.find(".ui-tooltip-content").html(d);
                    else {
                        b.is("[title]") && (c && "mouseover" === c.type ? b.attr("title", "") : b.removeAttr("title"));
                        l = this._tooltip(b);
                        var k = l.attr("id"),
                            m = (b.attr("aria-describedby") || "").split(/\s+/);
                        m.push(k);
                        b.data("ui-tooltip-id", k).attr("aria-describedby", a.trim(m.join(" ")));
                        l.find(".ui-tooltip-content").html(d);
                        this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {
                            mousemove: e
                        }), e(c)) : l.position(a.extend({
                            of: b
                        }, this.options.position));
                        l.hide();
                        this._show(l, this.options.show);
                        this.options.show && this.options.show.delay &&
                            (f = this.delayedShow = setInterval(function() {
                                l.is(":visible") && (e(h.of), clearInterval(f))
                            }, a.fx.interval));
                        this._trigger("open", c, {
                            tooltip: l
                        });
                        d = {
                            keyup: function(c) {
                                c.keyCode === a.ui.keyCode.ESCAPE && (c = a.Event(c), c.currentTarget = b[0], this.close(c, !0))
                            },
                            remove: function() {
                                this._removeTooltip(l)
                            }
                        };
                        if (!c || "mouseover" === c.type) d.mouseleave = "close";
                        if (!c || "focusin" === c.type) d.focusout = "close";
                        this._on(!0, b, d)
                    }
            },
            close: function(c) {
                var b = this,
                    d = a(c ? c.currentTarget : this.element),
                    e = this._find(d);
                if (!this.closing) {
                    clearInterval(this.delayedShow);
                    d.data("ui-tooltip-title") && d.attr("title", d.data("ui-tooltip-title"));
                    var l = d.data("ui-tooltip-id"),
                        f = (d.attr("aria-describedby") || "").split(/\s+/),
                        l = a.inArray(l, f); - 1 !== l && f.splice(l, 1);
                    d.removeData("ui-tooltip-id");
                    (f = a.trim(f.join(" "))) ? d.attr("aria-describedby", f): d.removeAttr("aria-describedby");
                    e.stop(!0);
                    this._hide(e, this.options.hide, function() {
                        b._removeTooltip(a(this))
                    });
                    d.removeData("ui-tooltip-open");
                    this._off(d, "mouseleave focusout keyup");
                    d[0] !== this.element[0] && this._off(d, "remove");
                    this._off(this.document, "mousemove");
                    c && "mouseleave" === c.type && a.each(this.parents, function(c, d) {
                        a(d.element).attr("title", d.title);
                        delete b.parents[c]
                    });
                    this.closing = !0;
                    this._trigger("close", c, {
                        tooltip: e
                    });
                    this.closing = !1
                }
            },
            _tooltip: function(c) {
                var b = "ui-tooltip-" + e++,
                    d = a("<div>").attr({
                        id: b,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                a("<div>").addClass("ui-tooltip-content").appendTo(d);
                d.appendTo(this.document[0].body);
                this.tooltips[b] =
                    c;
                return d
            },
            _find: function(c) {
                return (c = c.data("ui-tooltip-id")) ? a("#" + c) : a()
            },
            _removeTooltip: function(a) {
                a.remove();
                delete this.tooltips[a.attr("id")]
            },
            _destroy: function() {
                var c = this;
                a.each(this.tooltips, function(b, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0];
                    c.close(e, !0);
                    a("#" + b).remove();
                    d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                })
            }
        })
    })(jQuery);
    (function(a, e) {
        a.effects = {
            effect: {}
        };
        var c = jQuery,
            b = function(a, b, c) {
                var d = m[b.type] || {};
                if (null == a) return c || !b.def ? null : b.def;
                a = d.floor ? ~~a : parseFloat(a);
                return isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a
            },
            d = function(a) {
                var b = h(),
                    d = b._rgba = [],
                    a = a.toLowerCase();
                r(f, function(c, e) {
                    var f, g = e.re.exec(a);
                    f = g && e.parse(g);
                    g = e.space || "rgba";
                    if (f) return f = b[g](f), b[k[g].cache] = f[k[g].cache], d = b._rgba = f._rgba, !1
                });
                return d.length ? ("0,0,0,0" === d.join() && c.extend(d, q.transparent), b) : q[a]
            },
            g = function(a,
                b, c) {
                c = (c + 1) % 1;
                return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
            },
            l = /^([\-+])=\s*(\d+\.?\d*)/,
            f = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(a) {
                    return [parseInt(a[1],
                        16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }],
            h = c.Color = function(a, b, d, e) {
                return new c.Color.fn.parse(a, b, d, e)
            },
            k = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            m = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            p = h.support = {},
            t = c("<p>")[0],
            q, r = c.each;
        t.style.cssText = "background-color:rgba(1,1,1,.5)";
        p.rgba = -1 < t.style.backgroundColor.indexOf("rgba");
        r(k, function(a, b) {
            b.cache = "_" + a;
            b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        h.fn = c.extend(h.prototype, {
            parse: function(a, e, f, g) {
                if (void 0 === a) return this._rgba = [null,
                    null, null, null
                ], this;
                if (a.jquery || a.nodeType) a = c(a).css(e), e = void 0;
                var l = this,
                    m = c.type(a),
                    p = this._rgba = [];
                void 0 !== e && (a = [a, e, f, g], m = "array");
                if ("string" === m) return this.parse(d(a) || q._default);
                if ("array" === m) return r(k.rgba.props, function(c, d) {
                    p[d.idx] = b(a[d.idx], d)
                }), this;
                if ("object" === m) return a instanceof h ? r(k, function(b, c) {
                    a[c.cache] && (l[c.cache] = a[c.cache].slice())
                }) : r(k, function(d, e) {
                    var f = e.cache;
                    r(e.props, function(c, d) {
                        if (!l[f] && e.to) {
                            if ("alpha" === c || null == a[c]) return;
                            l[f] = e.to(l._rgba)
                        }
                        l[f][d.idx] =
                            b(a[c], d, !0)
                    });
                    l[f] && 0 > c.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, e.from && (l._rgba = e.from(l[f])))
                }), this
            },
            is: function(a) {
                var b = h(a),
                    c = !0,
                    d = this;
                r(k, function(a, e) {
                    var f, g = b[e.cache];
                    g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], r(e.props, function(a, b) {
                        if (null != g[b.idx]) return c = g[b.idx] === f[b.idx]
                    }));
                    return c
                });
                return c
            },
            _space: function() {
                var a = [],
                    b = this;
                r(k, function(c, d) {
                    b[d.cache] && a.push(c)
                });
                return a.pop()
            },
            transition: function(a, c) {
                var d = h(a),
                    e = d._space(),
                    f = k[e],
                    g = 0 === this.alpha() ? h("transparent") :
                    this,
                    l = g[f.cache] || f.to(g._rgba),
                    p = l.slice(),
                    d = d[f.cache];
                r(f.props, function(a, e) {
                    var f = e.idx,
                        g = l[f],
                        h = d[f],
                        k = m[e.type] || {};
                    null !== h && (null === g ? p[f] = h : (k.mod && (h - g > k.mod / 2 ? g += k.mod : g - h > k.mod / 2 && (g -= k.mod)), p[f] = b((h - g) * c + g, e)))
                });
                return this[e](p)
            },
            blend: function(a) {
                if (1 === this._rgba[3]) return this;
                var b = this._rgba.slice(),
                    d = b.pop(),
                    e = h(a)._rgba;
                return h(c.map(b, function(a, b) {
                    return (1 - d) * e[b] + d * a
                }))
            },
            toRgbaString: function() {
                var a = "rgba(",
                    b = c.map(this._rgba, function(a, b) {
                        return null == a ? 2 < b ? 1 : 0 : a
                    });
                1 === b[3] && (b.pop(), a = "rgb(");
                return a + b.join() + ")"
            },
            toHslaString: function() {
                var a = "hsla(",
                    b = c.map(this.hsla(), function(a, b) {
                        null == a && (a = 2 < b ? 1 : 0);
                        b && 3 > b && (a = Math.round(100 * a) + "%");
                        return a
                    });
                1 === b[3] && (b.pop(), a = "hsl(");
                return a + b.join() + ")"
            },
            toHexString: function(a) {
                var b = this._rgba.slice(),
                    d = b.pop();
                a && b.push(~~(255 * d));
                return "#" + c.map(b, function(a) {
                    a = (a || 0).toString(16);
                    return 1 === a.length ? "0" + a : a
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        h.fn.parse.prototype =
            h.fn;
        k.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 255,
                c = a[1] / 255,
                d = a[2] / 255,
                a = a[3],
                e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                g = e - f,
                h = e + f,
                k = 0.5 * h;
            return [Math.round(f === e ? 0 : b === e ? 60 * (c - d) / g + 360 : c === e ? 60 * (d - b) / g + 120 : 60 * (b - c) / g + 240) % 360, 0 === g ? 0 : 0.5 >= k ? g / h : g / (2 - h), k, null == a ? 1 : a]
        };
        k.hsla.from = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 360,
                c = a[1],
                d = a[2],
                a = a[3],
                c = 0.5 >= d ? d * (1 + c) : d + c - d * c,
                d = 2 * d - c;
            return [Math.round(255 *
                g(d, c, b + 1 / 3)), Math.round(255 * g(d, c, b)), Math.round(255 * g(d, c, b - 1 / 3)), a]
        };
        r(k, function(a, d) {
            var e = d.props,
                f = d.cache,
                g = d.to,
                k = d.from;
            h.fn[a] = function(a) {
                g && !this[f] && (this[f] = g(this._rgba));
                if (void 0 === a) return this[f].slice();
                var d, l = c.type(a),
                    m = "array" === l || "object" === l ? a : arguments,
                    p = this[f].slice();
                r(e, function(a, c) {
                    var d = m["object" === l ? a : c.idx];
                    null == d && (d = p[c.idx]);
                    p[c.idx] = b(d, c)
                });
                return k ? (d = h(k(p)), d[f] = p, d) : h(p)
            };
            r(e, function(b, d) {
                h.fn[b] || (h.fn[b] = function(e) {
                    var f = c.type(e),
                        g = "alpha" === b ?
                        this._hsla ? "hsla" : "rgba" : a,
                        h = this[g](),
                        k = h[d.idx];
                    if ("undefined" === f) return k;
                    "function" === f && (e = e.call(this, k), f = c.type(e));
                    if (null == e && d.empty) return this;
                    "string" === f && (f = l.exec(e)) && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1));
                    h[d.idx] = e;
                    return this[g](h)
                })
            })
        });
        h.hook = function(a) {
            a = a.split(" ");
            r(a, function(a, b) {
                c.cssHooks[b] = {
                    set: function(a, e) {
                        var f, g = "";
                        if ("transparent" !== e && ("string" !== c.type(e) || (f = d(e)))) {
                            e = h(f || e);
                            if (!p.rgba && 1 !== e._rgba[3]) {
                                for (f = "backgroundColor" === b ? a.parentNode : a;
                                    ("" ===
                                        g || "transparent" === g) && f && f.style;) try {
                                    g = c.css(f, "backgroundColor"), f = f.parentNode
                                } catch (k) {}
                                e = e.blend(g && "transparent" !== g ? g : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            a.style[b] = e
                        } catch (l) {}
                    }
                };
                c.fx.step[b] = function(a) {
                    a.colorInit || (a.start = h(a.elem, b), a.end = h(a.end), a.colorInit = !0);
                    c.cssHooks[b].set(a.elem, a.start.transition(a.end, a.pos))
                }
            })
        };
        h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        c.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                r(["Top", "Right", "Bottom", "Left"], function(c, d) {
                    b["border" + d + "Color"] = a
                });
                return b
            }
        };
        q = c.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        };
        var v = function(b) {
                var c, d = b.ownerDocument.defaultView ?
                    b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                    e = {};
                if (d && d.length && d[0] && d[d[0]])
                    for (b = d.length; b--;) c = d[b], "string" === typeof d[c] && (e[a.camelCase(c)] = d[c]);
                else
                    for (c in d) "string" === typeof d[c] && (e[c] = d[c]);
                return e
            },
            u = ["add", "remove", "toggle"],
            y = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
            a.fx.step[c] = function(a) {
                if ("none" !==
                    a.end && !a.setAttr || 1 === a.pos && !a.setAttr) jQuery.style(a.elem, c, a.end), a.setAttr = !0
            }
        });
        a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        });
        a.effects.animateClass = function(b, c, d, e) {
            var f = a.speed(c, d, e);
            return this.queue(function() {
                var c = a(this),
                    d = c.attr("class") || "",
                    e, g = f.children ? c.find("*").addBack() : c,
                    g = g.map(function() {
                        return {
                            el: a(this),
                            start: v(this)
                        }
                    });
                e = function() {
                    a.each(u, function(a, d) {
                        if (b[d]) c[d + "Class"](b[d])
                    })
                };
                e();
                g = g.map(function() {
                    this.end =
                        v(this.el[0]);
                    var b = this.start,
                        c = this.end,
                        d = {},
                        e, f;
                    for (e in c)
                        if (f = c[e], b[e] !== f && !y[e] && (a.fx.step[e] || !isNaN(parseFloat(f)))) d[e] = f;
                    this.diff = d;
                    return this
                });
                c.attr("class", d);
                g = g.map(function() {
                    var b = this,
                        c = a.Deferred(),
                        d = a.extend({}, f, {
                            queue: !1,
                            complete: function() {
                                c.resolve(b)
                            }
                        });
                    this.el.animate(this.diff, d);
                    return c.promise()
                });
                a.when.apply(a, g.get()).done(function() {
                    e();
                    a.each(arguments, function() {
                        var b = this.el;
                        a.each(this.diff, function(a) {
                            b.css(a, "")
                        })
                    });
                    f.complete.call(c[0])
                })
            })
        };
        a.fn.extend({
            addClass: function(b) {
                return function(c,
                    d, e, f) {
                    return d ? a.effects.animateClass.call(this, {
                        add: c
                    }, d, e, f) : b.apply(this, arguments)
                }
            }(a.fn.addClass),
            removeClass: function(b) {
                return function(c, d, e, f) {
                    return 1 < arguments.length ? a.effects.animateClass.call(this, {
                        remove: c
                    }, d, e, f) : b.apply(this, arguments)
                }
            }(a.fn.removeClass),
            toggleClass: function(b) {
                return function(c, d, f, g, h) {
                    return "boolean" === typeof d || d === e ? f ? a.effects.animateClass.call(this, d ? {
                        add: c
                    } : {
                        remove: c
                    }, f, g, h) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                        toggle: c
                    }, d, f, g)
                }
            }(a.fn.toggleClass),
            switchClass: function(b, c, d, e, f) {
                return a.effects.animateClass.call(this, {
                    add: c,
                    remove: b
                }, d, e, f)
            }
        });
        var x = function(b, c, d, e) {
                a.isPlainObject(b) && (c = b, b = b.effect);
                b = {
                    effect: b
                };
                null == c && (c = {});
                a.isFunction(c) && (e = c, d = null, c = {});
                if ("number" === typeof c || a.fx.speeds[c]) e = d, d = c, c = {};
                a.isFunction(d) && (e = d, d = null);
                c && a.extend(b, c);
                d = d || c.duration;
                b.duration = a.fx.off ? 0 : "number" === typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default;
                b.complete = e || c.complete;
                return b
            },
            B = function(b) {
                return !b || ("number" ===
                    typeof b || a.fx.speeds[b]) || "string" === typeof b && !a.effects.effect[b] || a.isFunction(b) || "object" === typeof b && !b.effect ? !0 : !1
            };
        a.extend(a.effects, {
            version: "1.10.2",
            save: function(a, b) {
                for (var c = 0; c < b.length; c++) null !== b[c] && a.data("ui-effects-" + b[c], a[0].style[b[c]])
            },
            restore: function(a, b) {
                var c, d;
                for (d = 0; d < b.length; d++) null !== b[d] && (c = a.data("ui-effects-" + b[d]), c === e && (c = ""), a.css(b[d], c))
            },
            setMode: function(a, b) {
                "toggle" === b && (b = a.is(":hidden") ? "show" : "hide");
                return b
            },
            getBaseline: function(a, b) {
                var c,
                    d;
                switch (a[0]) {
                    case "top":
                        c = 0;
                        break;
                    case "middle":
                        c = 0.5;
                        break;
                    case "bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case "left":
                        d = 0;
                        break;
                    case "center":
                        d = 0.5;
                        break;
                    case "right":
                        d = 1;
                        break;
                    default:
                        d = a[1] / b.width
                }
                return {
                    x: d,
                    y: c
                }
            },
            createWrapper: function(b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                        width: b.outerWidth(!0),
                        height: b.outerHeight(!0),
                        "float": b.css("float")
                    },
                    d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    e = {
                        width: b.width(),
                        height: b.height()
                    },
                    f = document.activeElement;
                try {
                    f.id
                } catch (g) {
                    f = document.body
                }
                b.wrap(d);
                (b[0] === f || a.contains(b[0], f)) && a(f).focus();
                d = b.parent();
                "static" === b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                    c[d] = b.css(d);
                    isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                }));
                b.css(e);
                return d.css(c).show()
            },
            removeWrapper: function(b) {
                var c = document.activeElement;
                b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus());
                return b
            },
            setTransition: function(b, c, d, e) {
                e = e || {};
                a.each(c, function(a, c) {
                    var f = b.cssUnit(c);
                    0 < f[0] && (e[c] = f[0] * d + f[1])
                });
                return e
            }
        });
        a.fn.extend({
            effect: function() {
                function b(d) {
                    function e() {
                        a.isFunction(h) && h.call(g[0]);
                        a.isFunction(d) && d()
                    }
                    var g = a(this),
                        h = c.complete,
                        k = c.mode;
                    (g.is(":hidden") ?
                        "hide" === k : "show" === k) ? (g[k](), e()) : f.call(g[0], c, e)
                }
                var c = x.apply(this, arguments),
                    d = c.mode,
                    e = c.queue,
                    f = a.effects.effect[c.effect];
                return a.fx.off || !f ? d ? this[d](c.duration, c.complete) : this.each(function() {
                    c.complete && c.complete.call(this)
                }) : !1 === e ? this.each(b) : this.queue(e || "fx", b)
            },
            show: function(a) {
                return function(b) {
                    if (B(b)) return a.apply(this, arguments);
                    var c = x.apply(this, arguments);
                    c.mode = "show";
                    return this.effect.call(this, c)
                }
            }(a.fn.show),
            hide: function(a) {
                return function(b) {
                    if (B(b)) return a.apply(this,
                        arguments);
                    var c = x.apply(this, arguments);
                    c.mode = "hide";
                    return this.effect.call(this, c)
                }
            }(a.fn.hide),
            toggle: function(a) {
                return function(b) {
                    if (B(b) || "boolean" === typeof b) return a.apply(this, arguments);
                    var c = x.apply(this, arguments);
                    c.mode = "toggle";
                    return this.effect.call(this, c)
                }
            }(a.fn.toggle),
            cssUnit: function(b) {
                var c = this.css(b),
                    d = [];
                a.each(["em", "px", "%", "pt"], function(a, b) {
                    0 < c.indexOf(b) && (d = [parseFloat(c), b])
                });
                return d
            }
        });
        var I = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, b) {
            I[b] =
                function(b) {
                    return Math.pow(b, a + 2)
                }
        });
        a.extend(I, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(a) {
                return a * a * (3 * a - 2)
            },
            Bounce: function(a) {
                for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        });
        a.each(I, function(b, c) {
            a.easing["easeIn" + b] = c;
            a.easing["easeOut" + b] = function(a) {
                return 1 - c(1 - a)
            };
            a.easing["easeInOut" + b] = function(a) {
                return 0.5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
            }
        })
    })(jQuery);
    (function(a) {
        var e = /up|down|vertical/,
            c = /up|left|vertical|horizontal/;
        a.effects.effect.blind = function(b, d) {
            var g = a(this),
                l = "position top bottom left right height width".split(" "),
                f = a.effects.setMode(g, b.mode || "hide"),
                h = b.direction || "up",
                k = e.test(h),
                m = k ? "height" : "width",
                p = k ? "top" : "left",
                h = c.test(h),
                t = {},
                q = "show" === f,
                r, v, u;
            g.parent().is(".ui-effects-wrapper") ? a.effects.save(g.parent(), l) : a.effects.save(g, l);
            g.show();
            r = a.effects.createWrapper(g).css({
                overflow: "hidden"
            });
            v = r[m]();
            u = parseFloat(r.css(p)) ||
                0;
            t[m] = q ? v : 0;
            h || (g.css(k ? "bottom" : "right", 0).css(k ? "top" : "left", "auto").css({
                position: "absolute"
            }), t[p] = q ? u : v + u);
            q && (r.css(m, 0), h || r.css(p, u + v));
            r.animate(t, {
                duration: b.duration,
                easing: b.easing,
                queue: !1,
                complete: function() {
                    "hide" === f && g.hide();
                    a.effects.restore(g, l);
                    a.effects.removeWrapper(g);
                    d()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.bounce = function(e, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = a.effects.setMode(b, e.mode || "effect"),
                l = "hide" === g,
                f = "show" === g,
                h = e.direction || "up",
                g = e.distance,
                k = e.times || 5,
                m = 2 * k + (f || l ? 1 : 0),
                p = e.duration / m,
                t = e.easing,
                q = "up" === h || "down" === h ? "top" : "left",
                h = "up" === h || "left" === h,
                r, v, u = b.queue(),
                y = u.length;
            (f || l) && d.push("opacity");
            a.effects.save(b, d);
            b.show();
            a.effects.createWrapper(b);
            g || (g = b["top" === q ? "outerHeight" : "outerWidth"]() / 3);
            f &&
                (v = {
                    opacity: 1
                }, v[q] = 0, b.css("opacity", 0).css(q, h ? 2 * -g : 2 * g).animate(v, p, t));
            l && (g /= Math.pow(2, k - 1));
            v = {};
            for (f = v[q] = 0; f < k; f++) r = {}, r[q] = (h ? "-=" : "+=") + g, b.animate(r, p, t).animate(v, p, t), g = l ? 2 * g : g / 2;
            l && (r = {
                opacity: 0
            }, r[q] = (h ? "-=" : "+=") + g, b.animate(r, p, t));
            b.queue(function() {
                l && b.hide();
                a.effects.restore(b, d);
                a.effects.removeWrapper(b);
                c()
            });
            1 < y && u.splice.apply(u, [1, 0].concat(u.splice(y, m + 1)));
            b.dequeue()
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.clip = function(e, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = "show" === a.effects.setMode(b, e.mode || "hide"),
                l = "vertical" === (e.direction || "vertical"),
                f = l ? "height" : "width",
                l = l ? "top" : "left",
                h = {},
                k, m;
            a.effects.save(b, d);
            b.show();
            k = a.effects.createWrapper(b).css({
                overflow: "hidden"
            });
            k = "IMG" === b[0].tagName ? k : b;
            m = k[f]();
            g && (k.css(f, 0), k.css(l, m / 2));
            h[f] = g ? m : 0;
            h[l] = g ? 0 : m / 2;
            k.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    g ||
                        b.hide();
                    a.effects.restore(b, d);
                    a.effects.removeWrapper(b);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.drop = function(e, c) {
            var b = a(this),
                d = "position top bottom left right opacity height width".split(" "),
                g = a.effects.setMode(b, e.mode || "hide"),
                l = "show" === g,
                f = e.direction || "left",
                h = "up" === f || "down" === f ? "top" : "left",
                f = "up" === f || "left" === f ? "pos" : "neg",
                k = {
                    opacity: l ? 1 : 0
                },
                m;
            a.effects.save(b, d);
            b.show();
            a.effects.createWrapper(b);
            m = e.distance || b["top" === h ? "outerHeight" : "outerWidth"](!0) / 2;
            l && b.css("opacity", 0).css(h, "pos" === f ? -m : m);
            k[h] = (l ? "pos" === f ? "+=" : "-=" : "pos" === f ? "-=" : "+=") +
                m;
            b.animate(k, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === g && b.hide();
                    a.effects.restore(b, d);
                    a.effects.removeWrapper(b);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.explode = function(e, c) {
            function b() {
                p.push(this);
                p.length === d * g && (l.css({
                    visibility: "visible"
                }), a(p).remove(), f || l.hide(), c())
            }
            var d = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                g = d,
                l = a(this),
                f = "show" === a.effects.setMode(l, e.mode || "hide"),
                h = l.show().css("visibility", "hidden").offset(),
                k = Math.ceil(l.outerWidth() / g),
                m = Math.ceil(l.outerHeight() / d),
                p = [],
                t, q, r, v, u, y;
            for (t = 0; t < d; t++) {
                v = h.top + t * m;
                y = t - (d - 1) / 2;
                for (q = 0; q < g; q++) r = h.left + q * k, u = q - (g - 1) / 2, l.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -q * k,
                    top: -t * m
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: k,
                    height: m,
                    left: r + (f ? u * k : 0),
                    top: v + (f ? y * m : 0),
                    opacity: f ? 0 : 1
                }).animate({
                    left: r + (f ? 0 : u * k),
                    top: v + (f ? 0 : y * m),
                    opacity: f ? 1 : 0
                }, e.duration || 500, e.easing, b)
            }
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.fade = function(e, c) {
            var b = a(this),
                d = a.effects.setMode(b, e.mode || "toggle");
            b.animate({
                opacity: d
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: c
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.fold = function(e, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = a.effects.setMode(b, e.mode || "hide"),
                l = "show" === g,
                f = "hide" === g,
                g = e.size || 15,
                h = /([0-9]+)%/.exec(g),
                k = !!e.horizFirst,
                m = l !== k,
                p = m ? ["width", "height"] : ["height", "width"],
                t = e.duration / 2,
                q, r = {},
                v = {};
            a.effects.save(b, d);
            b.show();
            q = a.effects.createWrapper(b).css({
                overflow: "hidden"
            });
            m = m ? [q.width(), q.height()] : [q.height(), q.width()];
            h && (g = parseInt(h[1], 10) / 100 * m[f ? 0 : 1]);
            l && q.css(k ? {
                height: 0,
                width: g
            } : {
                height: g,
                width: 0
            });
            r[p[0]] = l ? m[0] : g;
            v[p[1]] = l ? m[1] : 0;
            q.animate(r, t, e.easing).animate(v, t, e.easing, function() {
                f && b.hide();
                a.effects.restore(b, d);
                a.effects.removeWrapper(b);
                c()
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.highlight = function(e, c) {
            var b = a(this),
                d = ["backgroundImage", "backgroundColor", "opacity"],
                g = a.effects.setMode(b, e.mode || "show"),
                l = {
                    backgroundColor: b.css("backgroundColor")
                };
            "hide" === g && (l.opacity = 0);
            a.effects.save(b, d);
            b.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(l, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === g && b.hide();
                    a.effects.restore(b, d);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.pulsate = function(e, c) {
            var b = a(this),
                d = a.effects.setMode(b, e.mode || "show"),
                g = "show" === d,
                l = "hide" === d,
                d = 2 * (e.times || 5) + (g || "hide" === d ? 1 : 0),
                f = e.duration / d,
                h = 0,
                k = b.queue(),
                m = k.length;
            if (g || !b.is(":visible")) b.css("opacity", 0).show(), h = 1;
            for (g = 1; g < d; g++) b.animate({
                opacity: h
            }, f, e.easing), h = 1 - h;
            b.animate({
                opacity: h
            }, f, e.easing);
            b.queue(function() {
                l && b.hide();
                c()
            });
            1 < m && k.splice.apply(k, [1, 0].concat(k.splice(m, d + 1)));
            b.dequeue()
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.puff = function(e, c) {
            var b = a(this),
                d = a.effects.setMode(b, e.mode || "hide"),
                g = "hide" === d,
                l = parseInt(e.percent, 10) || 150,
                f = l / 100,
                h = {
                    height: b.height(),
                    width: b.width(),
                    outerHeight: b.outerHeight(),
                    outerWidth: b.outerWidth()
                };
            a.extend(e, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: d,
                complete: c,
                percent: g ? l : 100,
                from: g ? h : {
                    height: h.height * f,
                    width: h.width * f,
                    outerHeight: h.outerHeight * f,
                    outerWidth: h.outerWidth * f
                }
            });
            b.effect(e)
        };
        a.effects.effect.scale = function(e, c) {
            var b = a(this),
                d = a.extend(!0, {}, e),
                g = a.effects.setMode(b, e.mode || "effect"),
                l = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === g ? 0 : 100),
                f = e.direction || "both",
                h = e.origin,
                k = {
                    height: b.height(),
                    width: b.width(),
                    outerHeight: b.outerHeight(),
                    outerWidth: b.outerWidth()
                },
                m = "horizontal" !== f ? l / 100 : 1,
                l = "vertical" !== f ? l / 100 : 1;
            d.effect = "size";
            d.queue = !1;
            d.complete = c;
            "effect" !== g && (d.origin = h || ["middle", "center"], d.restore = !0);
            d.from = e.from || ("show" === g ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : k);
            d.to = {
                height: k.height * m,
                width: k.width *
                    l,
                outerHeight: k.outerHeight * m,
                outerWidth: k.outerWidth * l
            };
            d.fade && ("show" === g && (d.from.opacity = 0, d.to.opacity = 1), "hide" === g && (d.from.opacity = 1, d.to.opacity = 0));
            b.effect(d)
        };
        a.effects.effect.size = function(e, c) {
            var b, d, g, l, f, h, k = a(this),
                m = "position top bottom left right width height overflow opacity".split(" ");
            f = "position top bottom left right overflow opacity".split(" ");
            var p = ["width", "height", "overflow"],
                t = ["fontSize"],
                q = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                r = ["borderLeftWidth",
                    "borderRightWidth", "paddingLeft", "paddingRight"
                ],
                v = a.effects.setMode(k, e.mode || "effect"),
                u = e.restore || "effect" !== v,
                y = e.scale || "both";
            h = e.origin || ["middle", "center"];
            var x = k.css("position"),
                B = u ? m : f,
                I = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === v && k.show();
            f = {
                height: k.height(),
                width: k.width(),
                outerHeight: k.outerHeight(),
                outerWidth: k.outerWidth()
            };
            "toggle" === e.mode && "show" === v ? (k.from = e.to || I, k.to = e.from || f) : (k.from = e.from || ("show" === v ? I : f), k.to = e.to || ("hide" === v ? I : f));
            g = k.from.height / f.height;
            l = k.from.width / f.width;
            b = k.to.height / f.height;
            d = k.to.width / f.width;
            if ("box" === y || "both" === y) g !== b && (B = B.concat(q), k.from = a.effects.setTransition(k, q, g, k.from), k.to = a.effects.setTransition(k, q, b, k.to)), l !== d && (B = B.concat(r), k.from = a.effects.setTransition(k, r, l, k.from), k.to = a.effects.setTransition(k, r, d, k.to));
            if (("content" === y || "both" === y) && g !== b) B = B.concat(t).concat(p), k.from = a.effects.setTransition(k, t, g, k.from), k.to = a.effects.setTransition(k, t, b, k.to);
            a.effects.save(k, B);
            k.show();
            a.effects.createWrapper(k);
            k.css("overflow", "hidden").css(k.from);
            h && (h = a.effects.getBaseline(h, f), k.from.top = (f.outerHeight - k.outerHeight()) * h.y, k.from.left = (f.outerWidth - k.outerWidth()) * h.x, k.to.top = (f.outerHeight - k.to.outerHeight) * h.y, k.to.left = (f.outerWidth - k.to.outerWidth) * h.x);
            k.css(k.from);
            if ("content" === y || "both" === y) q = q.concat(["marginTop", "marginBottom"]).concat(t), r = r.concat(["marginLeft", "marginRight"]), p = m.concat(q).concat(r), k.find("*[width]").each(function() {
                var c = a(this),
                    f = c.height(),
                    h = c.width(),
                    k = c.outerHeight(),
                    m = c.outerWidth();
                u && a.effects.save(c, p);
                c.from = {
                    height: f * g,
                    width: h * l,
                    outerHeight: k * g,
                    outerWidth: m * l
                };
                c.to = {
                    height: f * b,
                    width: h * d,
                    outerHeight: f * b,
                    outerWidth: h * d
                };
                g !== b && (c.from = a.effects.setTransition(c, q, g, c.from), c.to = a.effects.setTransition(c, q, b, c.to));
                l !== d && (c.from = a.effects.setTransition(c, r, l, c.from), c.to = a.effects.setTransition(c, r, d, c.to));
                c.css(c.from);
                c.animate(c.to, e.duration, e.easing, function() {
                    u && a.effects.restore(c, p)
                })
            });
            k.animate(k.to, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    0 === k.to.opacity && k.css("opacity", k.from.opacity);
                    "hide" === v && k.hide();
                    a.effects.restore(k, B);
                    u || ("static" === x ? k.css({
                        position: "relative",
                        top: k.to.top,
                        left: k.to.left
                    }) : a.each(["top", "left"], function(a, b) {
                        k.css(b, function(b, c) {
                            var d = parseInt(c, 10),
                                e = a ? k.to.left : k.to.top;
                            return "auto" === c ? e + "px" : d + e + "px"
                        })
                    }));
                    a.effects.removeWrapper(k);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.shake = function(e, c) {
            var b = a(this),
                d = "position top bottom left right height width".split(" "),
                g = a.effects.setMode(b, e.mode || "effect"),
                l = e.direction || "left",
                f = e.distance || 20,
                h = e.times || 3,
                k = 2 * h + 1,
                m = Math.round(e.duration / k),
                p = "up" === l || "down" === l ? "top" : "left",
                t = "up" === l || "left" === l,
                l = {},
                q = {},
                r = {},
                v = b.queue(),
                u = v.length;
            a.effects.save(b, d);
            b.show();
            a.effects.createWrapper(b);
            l[p] = (t ? "-=" : "+=") + f;
            q[p] = (t ? "+=" : "-=") + 2 * f;
            r[p] = (t ? "-=" : "+=") + 2 * f;
            b.animate(l, m, e.easing);
            for (f = 1; f <
                h; f++) b.animate(q, m, e.easing).animate(r, m, e.easing);
            b.animate(q, m, e.easing).animate(l, m / 2, e.easing).queue(function() {
                "hide" === g && b.hide();
                a.effects.restore(b, d);
                a.effects.removeWrapper(b);
                c()
            });
            1 < u && v.splice.apply(v, [1, 0].concat(v.splice(u, k + 1)));
            b.dequeue()
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.slide = function(e, c) {
            var b = a(this),
                d = "position top bottom left right width height".split(" "),
                g = a.effects.setMode(b, e.mode || "show"),
                l = "show" === g,
                f = e.direction || "left",
                h = "up" === f || "down" === f ? "top" : "left",
                f = "up" === f || "left" === f,
                k, m = {};
            a.effects.save(b, d);
            b.show();
            k = e.distance || b["top" === h ? "outerHeight" : "outerWidth"](!0);
            a.effects.createWrapper(b).css({
                overflow: "hidden"
            });
            l && b.css(h, f ? isNaN(k) ? "-" + k : -k : k);
            m[h] = (l ? f ? "+=" : "-=" : f ? "-=" : "+=") + k;
            b.animate(m, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === g && b.hide();
                    a.effects.restore(b, d);
                    a.effects.removeWrapper(b);
                    c()
                }
            })
        }
    })(jQuery);
    (function(a) {
        a.effects.effect.transfer = function(e, c) {
            var b = a(this),
                d = a(e.to),
                g = "fixed" === d.css("position"),
                l = a("body"),
                f = g ? l.scrollTop() : 0,
                l = g ? l.scrollLeft() : 0,
                h = d.offset(),
                d = {
                    top: h.top - f,
                    left: h.left - l,
                    height: d.innerHeight(),
                    width: d.innerWidth()
                },
                h = b.offset(),
                k = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                    top: h.top - f,
                    left: h.left - l,
                    height: b.innerHeight(),
                    width: b.innerWidth(),
                    position: g ? "fixed" : "absolute"
                }).animate(d, e.duration, e.easing, function() {
                    k.remove();
                    c()
                })
        }
    })(jQuery);
    (function() {
        function a(a, c, b, d) {
            if (a.addEventListener) return a.addEventListener(c, b, d), {
                destroy: function() {
                    a.removeEventListener(c, b, d)
                }
            };
            var g = function() {
                b.handleEvent(window.event, b)
            };
            a.attachEvent("on" + c, g);
            return {
                destroy: function() {
                    a.detachEvent("on" + c, g)
                }
            }
        }
        this.FastButton = function(e, c, b) {
            this.events = [];
            this.touchEvents = [];
            this.element = e;
            this.handler = c;
            this.useCapture = b;
            TOUCH && this.events.push(a(e, "touchstart", this, this.useCapture));
            this.events.push(a(e, "click", this, this.useCapture))
        };
        this.FastButton.prototype.destroy =
            function() {
                for (i = this.events.length - 1; 0 <= i; i -= 1) this.events[i].destroy();
                this.events = this.touchEvents = this.element = this.handler = this.fastButton = null
            };
        this.FastButton.prototype.handleEvent = function(a) {
            switch (a.type) {
                case "touchstart":
                    this.onTouchStart(a);
                    break;
                case "touchmove":
                    this.onTouchMove(a);
                    break;
                case "touchend":
                    this.onClick(a);
                    break;
                case "click":
                    this.onClick(a)
            }
        };
        this.FastButton.prototype.onTouchStart = function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
            this.touchEvents.push(a(this.element,
                "touchend", this, this.useCapture));
            this.touchEvents.push(a(document.body, "touchmove", this, this.useCapture));
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY
        };
        this.FastButton.prototype.onTouchMove = function(a) {
            (10 < Math.abs(a.touches[0].clientX - this.startX) || 10 < Math.abs(a.touches[0].clientY - this.startY)) && this.reset()
        };
        this.FastButton.prototype.onClick = function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            this.reset();
            var c = this.handler.call(this.element, a);
            "touchend" ==
            a.type && clickbuster.preventGhostClick(this.startX, this.startY);
            return c
        };
        this.FastButton.prototype.reset = function() {
            for (i = this.touchEvents.length - 1; 0 <= i; i -= 1) this.touchEvents[i].destroy();
            this.touchEvents = []
        };
        this.clickbuster = function() {};
        this.clickbuster.preventGhostClick = function(a, c) {
            clickbuster.coordinates.push(a, c);
            window.setTimeout(clickbuster.pop, 2500)
        };
        this.clickbuster.pop = function() {
            clickbuster.coordinates.splice(0, 2)
        };
        this.clickbuster.onClick = function(a) {
            for (var c = 0; c < clickbuster.coordinates.length; c +=
                2) {
                var b = clickbuster.coordinates[c + 1];
                25 > Math.abs(a.clientX - clickbuster.coordinates[c]) && 25 > Math.abs(a.clientY - b) && (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            }
        };
        TOUCH && (document.addEventListener("click", clickbuster.onClick, !0), clickbuster.coordinates = [])
    })(this);
    (function(a) {
        a.event.special.fastClick = {
            setup: function() {
                a(this).data("fastClick", new FastButton(this, a.event.special.fastClick.handler))
            },
            teardown: function() {
                a(this).data("fastClick").destroy();
                a(this).removeData("fastClick")
            },
            handler: function(e) {
                e = a.event.fix(e);
                e.type = "fastClick";
                a.event.dispatch.apply(this, arguments)
            }
        };
        a.fn.fastClick = function(e) {
            return a(this).each(function() {
                return e ? a(this).bind("fastClick", e) : a(this).trigger("fastClick")
            })
        }
    })(jQuery);
    var messenger = function(a) {
        a = a || {};
        a.isWebWorker = a.isWebWorker || !1;
        a.origin = a.origin || "*";
        a.target = a.target || (a.isWebWorker ? self : window.parent);
        var e = [],
            c = Math.round(1E9 * Math.random()) % 1E9,
            b = function(b) {
                if (a.isWebWorker || !("*" !== a.origin && a.origin !== b.origin)) try {
                    var c = JSON.parse(b.data),
                        g = c.type,
                        k = c.data,
                        m = c.id;
                    if ("yumprint messenger" === c.protocol) {
                        var p = e[g];
                        if (p) {
                            var t = a.isWebWorker ? a.target : b.source;
                            p(k, function(a, b) {
                                d(t, "callback", {
                                    id: m,
                                    data: a
                                }, b)
                            })
                        }
                    }
                } catch (q) {}
            };
        a.isWebWorker ? a.target.addEventListener("message",
            b, !1) : window.addEventListener("message", b);
        var d = function(b, d, e, k) {
                var m = c;
                c = (c + 1) % 1E9;
                "function" === typeof e && (k = e, e = null);
                void 0 === e && (e = null);
                d = {
                    id: m,
                    type: d,
                    data: e,
                    protocol: "yumprint messenger",
                    version: 1
                };
                k && (g[m] = k);
                a.isWebWorker ? b.postMessage(JSON.stringify(d)) : b.postMessage(JSON.stringify(d), a.origin)
            },
            g = {};
        e.callback = function(a, b) {
            var c = g[a.id];
            c && (delete g[a.id], c(a.data, b))
        };
        return {
            postMessage: function(b, c, e) {
                d(a.target, b, c, e)
            },
            addHandler: function(a, b) {
                "callback" !== a && ("string" === typeof a &&
                    "function" === typeof b) && (e[a] = b)
            },
            close: function() {
                a.isWebWorker ? (a.target.removeEventListener("message", b), a.target.terminate()) : window.removeEventListener("message", b);
                e = []
            }
        }
    };

    function wordpress(a, e, c, b) {
        "function" === typeof e ? (b = e, c = e = void 0) : "function" === typeof c && (b = c, c = void 0);
        void 0 === c && (c = !0);
        void 0 === e && (e = {});
        b = b || function() {};
        $.ajax({
            url: window.ajaxurl || window.yumprintRecipeAjaxUrl,
            dataType: "json",
            async: c,
            data: {
                action: a,
                data: e
            },
            type: "POST",
            success: b,
            error: function() {
                b(!1)
            }
        })
    };

    function createStars(a) {
        var e = a.size || 32,
            c = a.prefix || "",
            b = a.hasText || void 0 === a.hasText,
            d = void 0 === a.clear || a.clear,
            g = void 0 === a.clickable || a.clickable ? $("<div class='" + c + "star-container " + c + "brown-text'></div>") : $("<div class='" + c + "star-container " + c + "brown-text-nh'></div>"),
            l = a.selected || void 0,
            f;
        l && !a.constant && (l = Math.round(l));
        !a.constant && d && $("<div class='" + c + "x'></div>").css({
            width: e + "px",
            height: e + "px",
            backgroundSize: 2 * e + "px " + e + "px"
        }).hover(function() {
            b && a.text && f.text("Clear rating").addClass(c +
                "instruction");
            for (var d = 0; d < h.length; ++d) h[d].addClass(c + "off")
        }, function() {
            b && a.text && (l ? f.text(a.text[l]).removeClass(c + "instruction") : f.text(a.text[0]).addClass(c + "instruction"));
            for (var d = 0; d < h.length; ++d) h[d].removeClass(c + "on " + c + "off")
        }).fastClick(function() {
            l = void 0;
            g.change();
            for (var a = 0; a < h.length; ++a) h[a].removeClass(c + "selected " + c + "unselected")
        }).appendTo(g);
        for (var h = [], d = 0; d < a.stars; ++d)(function(d) {
            var k = $("<div class='" + c + "star'></div>").css({
                width: e + "px",
                height: e + "px",
                backgroundSize: 2 *
                    e + "px " + e + "px"
            }).appendTo(g);
            a.constant || k.addClass(c + "selectable").hover(function() {
                b && a.text && f.text(a.text[d + 1]);
                for (var e = 0; e < h.length; ++e) e <= d ? h[e].addClass(c + "on") : h[e].addClass(c + "off");
                f.removeClass(c + "instruction")
            }, function() {
                b && a.text && (l ? f.text(a.text[l]).addClass(c + "instruction") : f.text(a.text[0]).addClass(c + "instruction"));
                for (var d = 0; d < h.length; ++d) h[d].removeClass(c + "on" + c + " off")
            }).fastClick(function() {
                l = d + 1;
                g.change();
                for (var a = 0; a < h.length; ++a) a <= d ? h[a].removeClass(c + "unselected").addClass(c +
                    "selected") : h[a].removeClass(c + "selected").addClass(c + "unselected");
                f.addClass(c + "instruction")
            });
            h.push(k)
        })(d);
        b && (a.text ? (f = $("<div class='" + c + "text instruction'></div>").appendTo(g), l ? f.text(a.text[l]) : f.text(a.text[0])) : a.constant && (void 0 === a.selected || null === a.selected ? $("<div class='" + c + "text " + c + "unrated'>Not rated</div>").appendTo(g) : (d = Math.round(10 * (a.selected || 0)) / 10, f = $("<div class='" + c + "text " + c + "rated'></div>").text(d + (1 === d ? " star" : " stars") + (a.ratings ? " (" + a.ratings + ")" : "")).appendTo(g))));
        if (l)
            for (var k = Math.floor(l), m = l - k, d = 0; d < h.length; ++d)
                if (d < k) h[d].addClass(c + "selected");
                else if (d === k && 0 !== m) {
            h[d].addClass(c + "partial");
            var p = 0.5 > m ? 0.5 * Math.sin(m * Math.PI) : 1 - 0.5 * Math.sin((1 - m) * Math.PI),
                p = Math.round(p * e),
                t = e - p,
                q = 2 * e + "px " + e + "px",
                r = -e + "px 0px",
                v = -p + "px 0px";
            $("<div class='" + c + "star-left'></div>").css({
                height: e + "px",
                width: p + "px",
                backgroundSize: q,
                backgroundPosition: r
            }).appendTo(h[d]);
            $("<div class='" + c + "star-right'></div>").css({
                height: e + "px",
                width: t + "px",
                backgroundSize: q,
                backgroundPosition: v
            }).appendTo(h[d])
        } else h[d].addClass(c +
            "unselected");
        b && g.find("." + c + "text").height(e).css({
            height: e + "px",
            lineHeight: e + "px",
            fontSize: Math.round(0.8 * e) + "px"
        });
        g.selected = function() {
            return l
        };
        return g
    };
    var JSON;
    JSON || (JSON = {});
    (function() {
        function a(a) {
            return 10 > a ? "0" + a : a
        }

        function e(a) {
            d.lastIndex = 0;
            return d.test(a) ? '"' + a.replace(d, function(a) {
                var b = f[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function c(a, b) {
            var d, f, q, r, v = g,
                u, y = b[a];
            y && ("object" === typeof y && "function" === typeof y.toJSON) && (y = y.toJSON(a));
            "function" === typeof h && (y = h.call(b, a, y));
            switch (typeof y) {
                case "string":
                    return e(y);
                case "number":
                    return isFinite(y) ? String(y) : "null";
                case "boolean":
                case "null":
                    return String(y);
                case "object":
                    if (!y) return "null";
                    g += l;
                    u = [];
                    if ("[object Array]" === Object.prototype.toString.apply(y)) {
                        r = y.length;
                        for (d = 0; d < r; d += 1) u[d] = c(d, y) || "null";
                        q = 0 === u.length ? "[]" : g ? "[\n" + g + u.join(",\n" + g) + "\n" + v + "]" : "[" + u.join(",") + "]";
                        g = v;
                        return q
                    }
                    if (h && "object" === typeof h) {
                        r = h.length;
                        for (d = 0; d < r; d += 1) "string" === typeof h[d] && (f = h[d], (q = c(f, y)) && u.push(e(f) + (g ? ": " : ":") + q))
                    } else
                        for (f in y) Object.prototype.hasOwnProperty.call(y, f) && (q = c(f, y)) && u.push(e(f) + (g ? ": " : ":") + q);
                    q = 0 === u.length ? "{}" : g ? "{\n" + g + u.join(",\n" + g) + "\n" + v + "}" : "{" + u.join(",") +
                        "}";
                    g = v;
                    return q
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            g, l, f = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            h;
        "function" !== typeof JSON.stringify && (JSON.stringify = function(a, b, d) {
            var e;
            l = g = "";
            if ("number" === typeof d)
                for (e = 0; e < d; e += 1) l += " ";
            else "string" === typeof d && (l = d);
            if ((h = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
            return c("", {
                "": a
            })
        });
        "function" !== typeof JSON.parse && (JSON.parse = function(a, c) {
            function d(a, b) {
                var e, f, g = a[b];
                if (g && "object" === typeof g)
                    for (e in g) Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), void 0 !== f ? g[e] = f : delete g[e]);
                return c.call(a, b, g)
            }
            var e, a = String(a);
            b.lastIndex = 0;
            b.test(a) && (a = a.replace(b, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse");
        })
    })();

    function rec(a) {
        var e;
        return e = function() {
            a(e)
        }
    }

    function timer(a, e) {
        var c = setTimeout(e, a);
        return function() {
            clearTimeout(c)
        }
    }

    function rectimer(a, e) {
        var c = [],
            b = function(a) {
                c.push(timer(a, function() {
                    e(b)
                }))
            };
        b(a);
        return function() {
            for (var a = 0; a < c.length; ++a) c[a]();
            c = []
        }
    }
    var async = function() {
        var a = {},
            e, c = [];
        a.await = function(a) {
            c ? c.push(a) : a(e)
        };
        a.set = function(a) {
            if (c) {
                e = a;
                for (a = 0; a < c.length; ++a) c[a](e);
                c = void 0
            }
        };
        return a
    };
    async.whenAny = function() {
        for (var a = async(), e = !1, c = 0; c < arguments.length; ++c)(function(b, c) {
            b.await(function(g) {
                e || (e = !0, a.set({
                    index: c,
                    async: b,
                    result: g
                }))
            })
        })(arguments[c], c);
        return a
    };
    async.whenAll = function() {
        for (var a = async(), e = Array(arguments.length), c = 0, b = 0; b < e.length; ++b)(function(b, g) {
            b.await(function(b) {
                c++;
                e[g] = b;
                c == e.length && a.set(e)
            })
        })(arguments[b], b);
        return a
    };
    var api = function() {
        var a = ("api.yumprint.com" === window.location.host || "testapi.yumprint.com" === window.location.host) && "/proxy" === window.location.pathname,
            e = function(a) {
                return function(b) {
                    return function() {
                        for (var c, d, e = b, f = 0; f < arguments.length; ++f) {
                            var h = typeof arguments[f];
                            if ("function" === h) {
                                d = arguments[f];
                                break
                            }
                            if (!c && "object" === h) c = arguments[f];
                            else if (c) break;
                            else e = e.replace(RegExp("\\$" + f, "g"), arguments[f])
                        }
                        c = c || {};
                        for (var j in c) c[j] = JSON.stringify(c[j]);
                        g ? g(e, a, c, function(a) {
                            d && d(a)
                        }) : $.ajax({
                            url: e,
                            type: a,
                            async: !0,
                            dataType: "json",
                            data: c,
                            success: function(a) {
                                d && d(a)
                            },
                            error: function() {
                                d && d(!1)
                            }
                        })
                    }
                }
            },
            c = e("POST"),
            b = e("GET"),
            d = {},
            g;
        if (!("withCredentials" in new XMLHttpRequest) && !a) {
            if (!window.addEventListener) return;
            var l;
            $(function() {
                l = $("<iframe class='hide-it'></iframe>").attr("src", SECURE_API_HOST + "/proxy").appendTo("body").get(0)
            });
            var f = 1,
                h = [],
                k = async();
            window.addEventListener("message", function(a) {
                if (a.origin === SECURE_API_HOST)
                    if ("yumprint-proxy-ready" === a.data) k.set();
                    else try {
                        var b = JSON.parse(a.data),
                            c = b.id;
                        if (c) {
                            var d = h[c];
                            delete h[c];
                            d && d(b.data)
                        }
                    } catch (e) {}
            });
            g = function(a, b, c, d) {
                k.await(function() {
                    var e = f++;
                    h[e] = d;
                    l.contentWindow.postMessage(JSON.stringify({
                        id: e,
                        url: a,
                        method: b,
                        data: c
                    }), SECURE_API_HOST)
                })
            }
        }
        var m = function(a) {
                return function(b) {
                    a && (b.success ? "result" in b ? a(b.result) : a(!0) : a(!1))
                }
            },
            p = function(a) {
                if ("object" === typeof a) {
                    if ("start" in a) {
                        var c = a.start,
                            d = b(c);
                        a.start = function(a) {
                            d(t(a))
                        };
                        a.startUrl = c
                    }
                    if ("next" in a) {
                        var c = a.next,
                            e = b(c);
                        a.next = function(a) {
                            var b;
                            b = m(function(b) {
                                p(b);
                                a && a(b)
                            });
                            e(b)
                        };
                        a.nextUrl = c
                    }
                }
            },
            t = function(a) {
                return m(function(b) {
                    if (b && b.feeds && b.feeds.length)
                        for (var c = 0; c < b.feeds.length; ++c) p(b.feeds[c]);
                    a && a(b)
                })
            },
            q = c(SECURE_API_HOST + "/user/$0/token/create/");
        d.createTemporaryToken = function(a, b) {
            q(a, {}, m(b))
        };
        var r = b(SECURE_API_HOST + "/user/$0/token/");
        d.getUserWithTemporaryToken = function(a, b) {
            r(a, {}, m(b))
        };
        var v = b(SECURE_API_HOST + "/feeds/$0/");
        d.feeds = function(a, b, c, d) {
            c = c || {};
            c.user_token = b || null;
            v(a, c, t(d))
        };
        var u = b(SECURE_API_HOST + "/ping/");
        d.ping = function(a) {
            u({},
                m(a))
        };
        var y = b(SECURE_API_HOST + "/user/$0/friends/facebook/");
        d.friendsFacebook = function(a, b, c, d) {
            y(a, {
                access_token: b,
                facebook_token: c
            }, m(d))
        };
        var x = b(SECURE_API_HOST + "/user/$0/friends/gmail/");
        d.friendsGmail = function(a, b, c) {
            x(a, {
                access_token: b
            }, m(c))
        };
        var B = c(SECURE_API_HOST + "/user/request/");
        d.request = function(a, b) {
            B({
                email: a
            }, m(b))
        };
        var I = c(SECURE_API_HOST + "/user/$0/object/$1/view/");
        d.viewObject = function(a, b, c) {
            I(a, b, m(c))
        };
        var s = c(SECURE_API_HOST + "/user/$0/object/$1/dmca/");
        d.markAsDmca = function(a,
            b, c) {
            s(a, b, m(c))
        };
        var z = c(SECURE_API_HOST + "/log/");
        d.log = function(a, b, c, d, e) {
            z({
                cookie: a,
                session: b,
                user_id: c,
                action: d
            }, m(e))
        };
        var C = c(SECURE_API_HOST + "/log-batch/");
        d.logBatch = function(a, b) {
            C({
                logs: a
            }, m(b))
        };
        var L = c(SECURE_API_HOST + "/user/$0/object/$1/link/");
        d.addObject = function(a, b, c, d) {
            L(a, b, {
                container_id: c
            }, m(d))
        };
        var M = c(SECURE_API_HOST + "/user/$0/object/$1/remove/");
        d.removeObject = function(a, b, c, d) {
            M(a, b, {
                container_id: c
            }, m(d))
        };
        var da = c(SECURE_API_HOST + "/user/$0/object/$1/title/");
        d.changeObjectTitle =
            function(a, b, c, d) {
                da(a, b, {
                    title: c
                }, m(d))
            };
        var K = c(SECURE_API_HOST + "/user/$0/object/$1/image/");
        d.changeObjectImageWithUrl = function(a, b, c, d) {
            K(a, b, {
                url: c
            }, m(d))
        };
        var V = c(SECURE_API_HOST + "/user/$0/object/$1/image/");
        d.changeObjectImageWithId = function(a, b, c, d) {
            V(a, b, {
                image_id: c
            }, m(d))
        };
        var G = b(SECURE_API_HOST + "/object/$0/images/");
        d.imagesInCookbook = function(a, b) {
            G(a, {}, m(b))
        };
        var Y = c(SECURE_API_HOST + "/user/$0/collection/add/");
        d.createCollection = function(a, b, c, d, e) {
            "function" == typeof c ? (e = c, d = c = null) :
                "function" == typeof d && (e = d, d = null);
            Y(a, {
                title: b,
                container_id: c,
                image_url: d
            }, m(e))
        };
        var sa = c(SECURE_API_HOST + "/recipe/info/");
        d.recipeInfo = function(a, b, c) {
            "function" == typeof b && (c = b, b = null);
            sa({
                recipe_data: a,
                location_ids: b
            }, m(c))
        };
        var ma = c(SECURE_API_HOST + "/user/$0/recipe/add/");
        d.createRecipe = function(a, b, c, d) {
            "function" == typeof c && (d = c, c = null);
            ma(a, {
                recipeData: b,
                container_id: c
            }, m(d))
        };
        var N = c(SECURE_API_HOST + "/widget/recipe/");
        d.createWidgetRecipe = function(a, b) {
            N({
                recipeData: a
            }, m(b))
        };
        var ja = b(SECURE_API_HOST +
            "/user/$0/object/$1/replace/");
        d.canReplace = function(a, b, c) {
            ja(a, b, {}, m(c))
        };
        var ga = b(SECURE_API_HOST + "/user/$0/");
        d.userInfo = function(a, b) {
            ga(a, {}, m(b))
        };
        var W = b(SECURE_API_HOST + "/user/login/facebook/");
        d.loginFacebook = function(a, b) {
            W({
                token: a
            }, m(b))
        };
        var aa = c(SECURE_API_HOST + "/user/login/yumprint/");
        d.loginYumprint = function(a, b, c) {
            aa({
                email: a,
                password: b
            }, m(c))
        };
        var E = c(SECURE_API_HOST + "/user/reset/yumprint/");
        d.resetYumprint = function(a, b) {
            E({
                email: a
            }, m(b))
        };
        var A = c(SECURE_API_HOST + "/user/$0/follow/$1/");
        d.follow = function(a, b, c) {
            A(a, b, {}, m(c))
        };
        var J = c(SECURE_API_HOST + "/user/$0/unfollow/$1/");
        d.unfollow = function(a, b, c) {
            J(a, b, {}, m(c))
        };
        var ba = c(SECURE_API_HOST + "/user/register/facebook/");
        d.registerFacebook = function(a, b, c) {
            "function" === typeof b && (c = b, b = null);
            b = b || {};
            ba({
                token: a,
                type: b.type || null,
                value: b.value || null
            }, m(c))
        };
        var ka = c(SECURE_API_HOST + "/user/register/yumprint/");
        d.registerYumprint = function(a, b) {
            a.type = a.type || null;
            a.value = a.value || null;
            ka({
                email_address: a.email,
                password: a.password,
                first_name: a.firstName,
                last_name: a.lastName,
                gender: a.gender,
                photo: a.photo,
                type: a.type,
                value: a.value
            }, m(b))
        };
        var P = b(SECURE_API_HOST + "/query/top/$0/");
        d.top = function(a, b, c) {
            "function" === typeof b && (c = b, b = null);
            P(a, {
                user_id: b || null
            }, m(c))
        };
        var wa = b(SECURE_API_HOST + "/user/$0/collection/list/");
        d.getCollections = function(a, b) {
            wa(a, m(b))
        };
        var lb = c(SECURE_API_HOST + "/user/$0/quest/");
        d.completeQuest = function(a, b, c) {
            lb(a, {
                quest_name: b
            }, m(c))
        };
        var Wa = b(SECURE_API_HOST + "/user/$0/quest/list/");
        d.quests = function(a, b) {
            Wa(a, {}, m(b))
        };
        var ta = b(SECURE_API_HOST + "/user/$0/collection/all/");
        d.getAll = function(a, b) {
            ta(a, m(b))
        };
        var mb = b(SECURE_API_HOST + "/recipe/$0/review/");
        d.getReview = function(a, b) {
            mb(a, {}, m(b))
        };
        var Jb = c(SECURE_API_HOST + "/user/$0/recipe/$1/cook/");
        d.cook = function(a, b, c, d, e, f, g) {
            "function" === typeof d ? (g = d, e = d = null) : "function" === typeof e ? (g = e, e = null) : "function" === typeof f && (g = f, f = null);
            Jb(a, b, {
                date: c,
                rating: d,
                review_text: e,
                share: f
            }, m(g))
        };
        var Ea = b(SECURE_API_HOST + "/user/$0/recipe/$1/review/");
        d.getCook = function(a, b, c) {
            Ea(a,
                b, {}, m(c))
        };
        var Xa = c(SECURE_API_HOST + "/admin/$0/email/");
        d.sendEmail = function(a, b, c) {
            Xa(a, b, m(c))
        };
        var j = c(SECURE_API_HOST + "/user/$0/invite/");
        d.sendInvite = function(a, b, c, d) {
            j(a, {
                emails: b,
                message: c
            }, m(d))
        };
        var Ia = b(SECURE_API_HOST + "/query/stats/");
        d.stats = function(a) {
            Ia({}, m(a))
        };
        var ia = b(SECURE_API_HOST + "/person/$0/following/");
        d.getFollowing = function(a, b, c) {
            ia(a, {
                user_token: b || null
            }, t(c))
        };
        var Kb = b(SECURE_API_HOST + "/person/$0/");
        d.person = function(a, b) {
            Kb(a, {}, m(b))
        };
        var Lb = b(SECURE_API_HOST + "/person/$0/followers/");
        d.getFollowers = function(a, b, c) {
            Lb(a, {
                user_token: b || null
            }, t(c))
        };
        var nb = b(SECURE_API_HOST + "/person/$0/schedule/");
        d.getSchedule = function(a, b, c) {
            nb(a, {
                days: b
            }, m(c))
        };
        var Mb = b(SECURE_API_HOST + "/person/$0/day/");
        d.getDay = function(a, b, c, d) {
            Mb(a, {
                day: b,
                user_token: c || null
            }, m(d))
        };
        var Nb = c(SECURE_API_HOST + "/user/$0/schedule/$1/");
        d.schedule = function(a, b, c, d, e) {
            Nb(a, b, {
                day: c,
                try_soon_id: d
            }, m(e))
        };
        var Ob = c(SECURE_API_HOST + "/user/$0/schedule/$1/position/");
        d.positionSchedule = function(a, b, c, d) {
            Ob(a, b, {
                    position: c
                },
                m(d))
        };
        var Pb = c(SECURE_API_HOST + "/user/$0/schedule/$1/remove/");
        d.removeSchedule = function(a, b, c) {
            Pb(a, b, m(c))
        };
        var Qb = c(SECURE_API_HOST + "/user/$0/schedule/$1/move/");
        d.moveSchedule = function(a, b, c, d) {
            Qb(a, b, {
                day: c
            }, m(d))
        };
        var Rb = c(SECURE_API_HOST + "/user/$0/try-soon/$1/add/");
        d.trySoon = function(a, b, c) {
            Rb(a, b, {}, m(c))
        };
        var Sb = c(SECURE_API_HOST + "/user/$0/try-soon/$1/remove/");
        d.removeTrySoon = function(a, b, c) {
            Sb(a, b, {}, m(c))
        };
        var na = b(SECURE_API_HOST + "/user/$0/try-soon/summary/");
        d.trySoonSummary = function(a,
            b) {
            na(a, {}, m(b))
        };
        var ob = b(SECURE_API_HOST + "/user/$0/person/$1/info/");
        d.personInfo = function(a, b, c) {
            ob(a, b, {}, m(c))
        };
        var pb = c(SECURE_API_HOST + "/user/$0/try-soon/schedule/$1/");
        d.trySoonFromSchedule = function(a, b, c) {
            pb(a, b, m(c))
        };
        var Tb = b(SECURE_API_HOST + "/user/$0/nutrition/");
        d.nutrition = function(a, b) {
            Tb(a, {}, m(b))
        };
        var Ya = c(SECURE_API_HOST + "/user/$0/nutrition/recipes/");
        d.recipesNutrition = function(a, b, c) {
            Ya(a, {
                ids: b
            }, m(c))
        };
        var O = b(SECURE_API_HOST + "/nutrition/recipe/$0/");
        d.recipeNutrition = function(a,
            b, c) {
            O(b, {
                user_token: a || null
            }, m(c))
        };
        var Ja = b(SECURE_API_HOST + "/user/available/");
        d.emailAvailable = function(a, b) {
            Ja({
                email: a
            }, m(b))
        };
        var oa = c(SECURE_API_HOST + "/user/password/reset/");
        d.resetPassword = function(a, b, c) {
            oa({
                token: a,
                password: b
            }, m(c))
        };
        var X = b(SECURE_API_HOST + "/user/$0/settings/");
        d.getSettings = function(a, b) {
            X(a, {}, m(b))
        };
        var Ka = c(SECURE_API_HOST + "/user/$0/settings/change/");
        d.setSettings = function(a, b, c) {
            Ka(a, {
                settings: b
            }, m(c))
        };
        var La = c(SECURE_API_HOST + "/user/$0/password/change/");
        d.changePassword =
            function(a, b, c, d) {
                La(a, {
                    old: b,
                    password: c
                }, m(d))
            };
        var Ma = c(SECURE_API_HOST + "/user/$0/password/set/");
        d.setPassword = function(a, b, c) {
            Ma(a, {
                password: b
            }, m(c))
        };
        var Za = b(SECURE_API_HOST + "/search/");
        d.search = function(a, b, c) {
            Za({
                user_token: a || null,
                text: b
            }, m(c))
        };
        var qb = b(SECURE_API_HOST + "/search/summary/");
        d.searchSummary = function(a, b, c) {
            qb({
                user_token: a || null,
                text: b
            }, t(c))
        };
        d.searchRecipes = function(a, b, c) {
            d.feeds("search-recipes", a, {
                text: b
            }, c)
        };
        d.searchMyRecipes = function(a, b, c) {
            d.feeds("search-cookbook",
                a, {
                    text: b
                }, c)
        };
        d.searchFriendsRecipes = function(a, b, c) {
            d.feeds("search-friends", a, {
                text: b
            }, c)
        };
        d.searchPeople = function(a, b, c) {
            d.feeds("search-people", a, {
                text: b
            }, c)
        };
        var $a = b(SECURE_API_HOST + "/user/$0/shopping/");
        d.getShoppingList = function(a, b) {
            $a(a || null, {}, m(b))
        };
        var D = c(SECURE_API_HOST + "/user/$0/shopping/add/recipe/");
        d.addRecipeToShoppingList = function(a, b, c) {
            D(a || null, {
                object_id: b
            }, m(c))
        };
        var uc = c(SECURE_API_HOST + "/user/$0/shopping/clear/");
        d.clearShoppingList = function(a, b) {
            uc(a || null, {}, m(b))
        };
        var Gb = c(SECURE_API_HOST + "/user/$0/shopping/check/");
        d.checkAllShoppingList = function(a, b) {
            Gb(a || null, {}, m(b))
        };
        var Fb = c(SECURE_API_HOST + "/user/$0/shopping/item/check/");
        d.checkShoppingListItem = function(a, b, c) {
            Fb(a || null, {
                item_id: b
            }, m(c))
        };
        var xa = c(SECURE_API_HOST + "/user/$0/shopping/item/undo/");
        d.undoShoppingListItem = function(a, b, c) {
            xa(a || null, {
                item_id: b
            }, m(c))
        };
        var rb = c(SECURE_API_HOST + "/user/$0/shopping/clear/remove/");
        d.clearRemoveShoppingList = function(a, b) {
            rb(a || null, {}, m(b))
        };
        var ab = c(SECURE_API_HOST +
            "/user/$0/shopping/item/remove/");
        d.removeShoppingListItem = function(a, b, c) {
            ab(a || null, {
                item_id: b
            }, m(c))
        };
        var Ub = c(SECURE_API_HOST + "/user/$0/shopping/item/undo/remove/");
        d.undoRemoveShoppingListItem = function(a, b, c) {
            Ub(a || null, {
                item_id: b
            }, m(c))
        };
        var Vb = b(SECURE_API_HOST + "/shopping/category/");
        d.getShoppingListCategories = function(a) {
            Vb({}, m(a))
        };
        var Wb = c(SECURE_API_HOST + "/user/$0/shopping/subitem/category/");
        d.setShoppingListSubItemCategory = function(a, b, c, d) {
            Wb(a || null, {
                sub_item_id: b,
                category: c
            }, m(d))
        };
        var sb = c(SECURE_API_HOST + "/user/$0/shopping/item/name/");
        d.setShoppingListItemName = function(a, b, c, d) {
            sb(a || null, {
                item_id: b,
                name: c
            }, m(d))
        };
        var bb = c(SECURE_API_HOST + "/user/$0/shopping/item/amount/");
        d.setShoppingListItemAmount = function(a, b, c, d) {
            bb(a || null, {
                item_id: b,
                amount: c
            }, m(d))
        };
        var ua = c(SECURE_API_HOST + "/user/$0/shopping/group/remove/");
        d.removeShoppingListGroup = function(a, b, c) {
            ua(a || null, {
                group_id: b
            }, m(c))
        };
        var cb = c(SECURE_API_HOST + "/user/$0/shopping/add/ingredient/");
        d.addIngredientToShoppingList =
            function(a, b, c) {
                cb(a || null, {
                    text: b
                }, m(c))
            };
        var db = c(SECURE_API_HOST + "/user/$0/shopping/add/sale/");
        d.addSaleToShoppingList = function(a, b, c) {
            db(a || null, {
                sale_id: b
            }, m(c))
        };
        var Xb = c(SECURE_API_HOST + "/user/$0/shopping/add/menu/");
        d.addMenuToShoppingList = function(a, b) {
            Xb(a || null, {}, m(b))
        };
        var Yb = c(SECURE_API_HOST + "/user/$0/shopping/add/menu-item/");
        d.addScheduleToShoppingList = function(a, b, c) {
            Yb(a || null, {
                schedule_id: b
            }, m(c))
        };
        var tb = c(SECURE_API_HOST + "/user/$0/shopping/share/email/");
        d.emailShoppingList =
            function(a, b, c, d) {
                "function" === typeof b ? (d = b, c = b = null) : "function" === typeof c && (d = c, c = null);
                tb(a || null, {
                    email: b || null,
                    text: c || null
                }, m(d))
            };
        var ub = c(SECURE_API_HOST + "/user/$0/pin/mark/");
        d.markPins = function(a, b, c) {
            ub(a, {
                pins: b
            }, m(c))
        };
        var eb = c(SECURE_API_HOST + "/user/$0/pin/marked/");
        d.markedPins = function(a, b) {
            eb(a, m(b))
        };
        var fb = b(SECURE_API_HOST + "/user/$0/pin/proxy/");
        d.proxy = function(a, b, c, d) {
            fb(a, {
                url: b,
                timeout: c
            }, m(d))
        };
        var ea = b(SECURE_API_HOST + "/webrequest/");
        d.webRequest = function(a, b, c) {
            ea({
                url: a,
                timeout: b
            }, m(c))
        };
        var pa = b(SECURE_API_HOST + "/webrequests/");
        d.webRequests = function(a, b, c) {
            pa({
                urls: a,
                timeout: b
            }, m(c))
        };
        var H = b(SECURE_API_HOST + "/feed/home/"),
            xb = b(SECURE_API_HOST + "/user/$0/feed/home/");
        d.home = function(a, b) {
            a ? "function" === typeof a ? H(t(a)) : xb(a, t(b)) : H(t(b))
        };
        var ac = b(SECURE_API_HOST + "/feed/object/$0/");
        d.getObject = function(a, b, c) {
            ac(b, {
                user_token: a || null
            }, t(c))
        };
        var bc = b(SECURE_API_HOST + "/feed/person/$0/try-soon/");
        d.getTrySoon = function(a, b, c) {
            bc(a, {
                user_token: b || null
            }, t(c))
        };
        DEBUG &&
            (window.yumprintApi = d);
        return d
    }();

    function loadReviews(a, e, c) {
        api.getReview(e, function(b) {
            if (b)
                for (var d = 0; d < b.length; ++d)(function(b) {
                    var d = $("<div class='blog-yumprint-recipe-review-item'><div class='blog-yumprint-review-owner blog-yumprint-brown-text'><div class='blog-yumprint-image'></div><div class='blog-yumprint-text'></div></div><div class='blog-yumprint-star-container'></div><div class='blog-yumprint-time blog-yumprint-green-text-nh'></div><div class='blog-yumprint-review blog-yumprint-brown-text-nh'></div></div>").appendTo(a.find(".blog-yumprint-dialog-contents"));
                    d.find(".blog-yumprint-star-container").replaceWith(createStars({
                        stars: 4,
                        selected: b.rating,
                        constant: !0,
                        size: 18,
                        clickable: !1,
                        hasText: !1,
                        prefix: c
                    }));
                    d.find(".blog-yumprint-review-owner .blog-yumprint-image").css("background-image", "url(" + b.image + ")");
                    d.find(".blog-yumprint-review-owner .blog-yumprint-text").text(b.name);
                    d.find(".blog-yumprint-time").text(b.at);
                    d.find(".blog-yumprint-review").text(b.review || "");
                    d.find(".blog-yumprint-review-owner").fastClick(function() {
                        window.open(HOST + "/app/object/" +
                            b.shelf)
                    })
                })(b[d])
        })
    }

    function showDialog(a) {
        var e = function(c) {
            var b = function() {
                    $(".ui-draggable-dragging.dragging").remove();
                    d.stop().fadeOut(ANIMATION_TIME, function() {
                        d.remove();
                        a.close && a.close()
                    })
                },
                d = $("<div class='blog-yumprint-overlay-dialog'><div class='blog-yumprint-dialog-wrapper'></div></div>").hide().appendTo($("body")),
                e = $("<div class='blog-yumprint-dialog blog-yumprint-box-shadow blog-yumprint-reading'><div class='blog-yumprint-dialog-title blog-yumprint-brown-text-nh blog-yumprint-reading'></div><div class='blog-yumprint-gray blog-yumprint-close'><span class='blog-yumprint-cancel'>Cancel</span></div><div class='blog-yumprint-dialog-contents blog-yumprint-brown-text-nh'></div></div>").hide().click(function() {
                    return !1
                }).appendTo(d.find(".blog-yumprint-dialog-wrapper"));
            d.click(b).show("fade",
                ANIMATION_TIME,
                function() {
                    e.close = b;
                    a.id && e.attr("id", a.id);
                    a.width && e.css({
                        width: a.width + "px"
                    });
                    a.height && e.css({
                        height: a.height + "px"
                    });
                    e.find(".blog-yumprint-dialog-contents").html(c);
                    e.find(".blog-yumprint-dialog-title").text(a.title);
                    e.find(".blog-yumprint-close").click(e.close);
                    a.show && a.show(e);
                    e.show("fade", ANIMATION_TIME, function() {
                        a.ready && a.ready(e)
                    }).css("display", "inline-block");
                    $(document).keydown(function(a) {
                        if (27 === a.which) return e.close(), !1
                    })
                })
        };
        a.url ? $.get(a.url, e) : e("")
    }

    function star(a, e, c, b, d, g, l, f) {
        l.save();
        l.strokeStyle = g;
        f && (l.fillStyle = g);
        l.beginPath();
        l.translate(a, e);
        l.moveTo(0, 0 - c);
        for (a = 0; a < b; ++a) l.rotate(Math.PI / b), l.lineTo(0, 0 - c * d), l.rotate(Math.PI / b), l.lineTo(0, 0 - c);
        f && l.fill();
        l.stroke();
        l.restore()
    }

    function drawStars(a, e, c, b, d) {
        a = $(a);
        a.find(".blog-yumprint-star-container canvas").remove();
        if (0 < e) {
            var g = $("<canvas class='blog-yumprint-stars-filled' width='84' height='20'></canvas>").appendTo(a.find(".blog-yumprint-star-container")).get(0);
            g.width = 21 * e;
            g = g.getContext("2d");
            g.clearRect(0, 0, 84, 20);
            star(10, 10, 10, 5, 0.5, c, g, !0);
            star(31, 10, 10, 5, 0.5, c, g, !0);
            star(52, 10, 10, 5, 0.5, c, g, !0);
            star(73, 10, 10, 5, 0.5, c, g, !0);
            c = $("<canvas class='blog-yumprint-stars-filled-hover' width='84' height='20'></canvas>").appendTo(a.find(".blog-yumprint-star-container")).get(0);
            c.width = 21 * e;
            e = c.getContext("2d");
            e.clearRect(0, 0, 84, 20);
            star(10, 10, 10, 5, 0.5, b, e, !0);
            star(31, 10, 10, 5, 0.5, b, e, !0);
            star(52, 10, 10, 5, 0.5, b, e, !0);
            star(73, 10, 10, 5, 0.5, b, e, !0)
        }
        a = $("<canvas class='blog-yumprint-stars-empty' width='84' height='20'></canvas>").appendTo(a.find(".blog-yumprint-star-container")).get(0).getContext("2d");
        a.clearRect(0, 0, 84, 20);
        star(10, 10, 10, 5, 0.5, d, a);
        star(31, 10, 10, 5, 0.5, d, a);
        star(52, 10, 10, 5, 0.5, d, a);
        star(73, 10, 10, 5, 0.5, d, a)
    }

    function getPixels(a) {
        return (a = /^(\d+)px$/.exec(a)) && a[0] || null
    }

    function initRecipe(a) {
        a.find(".blog-yumprint-print").click(function() {
            for (var b = {
                    title: a.find(".blog-yumprint-recipe-title").text(),
                    image: a.find(".blog-yumprint-google-image").attr("src"),
                    link: a.find(".blog-yumprint-recipe-source").text(),
                    serves: a.find(".blog-yumprint-serves").text(),
                    sections: [],
                    stats: []
                }, c = 0; c < a.find(".blog-yumprint-ingredient-section").length; ++c) {
                for (var d = $(a.find(".blog-yumprint-ingredient-section")[c]),
                        e = {
                            title: d.find(".blog-yumprint-subheader").text(),
                            type: "ingredient",
                            items: []
                        }, f = 0; f < d.find(".blog-yumprint-ingredient-item").length; ++f) e.items.push($(d.find(".blog-yumprint-ingredient-item")[f]).text());
                b.sections.push(e)
            }
            for (c = 0; c < a.find(".blog-yumprint-method-section").length; ++c) {
                d = $(a.find(".blog-yumprint-method-section")[c]);
                e = {
                    title: d.find(".blog-yumprint-subheader").text(),
                    type: "method",
                    items: []
                };
                for (f = 0; f < d.find(".blog-yumprint-method-item").length; ++f) e.items.push($(d.find(".blog-yumprint-method-item")[f]).text());
                b.sections.push(e)
            }
            for (c = 0; c < a.find(".blog-yumprint-note-section").length; ++c) {
                d = $(a.find(".blog-yumprint-note-section")[c]);
                e = {
                    title: d.find(".blog-yumprint-subheader").text(),
                    type: "note",
                    items: []
                };
                for (f = 0; f < d.find(".blog-yumprint-note-item").length; ++f) e.items.push($(d.find(".blog-yumprint-note-item")[f]).text());
                b.sections.push(e)
            }
            for (c = 0; c < a.find(".blog-yumprint-infobar-section").length; ++c) d = $(a.find(".blog-yumprint-infobar-section")[c]), e = {
                title: d.find(".blog-yumprint-infobar-section-title").text(),
                data: d.find(".blog-yumprint-infobar-section-data").text()
            }, b.stats.push(e);
            c = window.open("");
            b = JSON.stringify(b);
            c.document.write("<!DOCTYPE html><html><head><title>Print - " + a.find(".blog-yumprint-recipe-title").text() + "</title><link href='https://fonts.googleapis.com/css?family=Lato:300,700' rel='stylesheet' type='text/css'><link rel='stylesheet' type='text/css' media='all' href='" + window.yumprintRecipePlugin + "/css/print.css' /><link rel='stylesheet' type='text/css' media='print' href='" + window.yumprintRecipePlugin +
                "/css/print-only.css' /></head><body><script type='text/javascript' src='" + window.yumprintRecipePlugin + "/js/print.js'><\/script><script>renderRecipe(" + b + ");<\/script></body></html>");
            c.document.close()
        });
        a.find(".blog-yumprint-nutrition-bar").click(function() {
            var b = a.find(".blog-yumprint-nutrition-box");
            showDialog({
                id: "blog-yumprint-nutrition-card",
                show: function(a) {
                    var c = a.find(".blog-yumprint-dialog-contents").css("overflow", "hidden");
                    b.clone().appendTo(c).show().css({
                        "float": "none"
                    });
                    a.find(".blog-yumprint-report-error-wrapper").click(function() {
                        window.open($(".blog-yumprint-report-error").attr("href"))
                    })
                }
            })
        });
        if (window.yumprintRecipeDisabled) a.find(".blog-yumprint-stars-reviews, .blog-yumprint-save, .blog-yumprint-print").remove();
        else {
            var c = a.attr("yumprintrecipe"),
                e = a.find(".blog-yumprint-stars-reviews");
            if (e.is(":visible")) {
                var b = e.attr("color"),
                    d = e.attr("highlightcolor"),
                    g = e.attr("emptycolor"),
                    l = parseFloat(e.attr("rating")),
                    f = parseInt(e.attr("count"));
                e.removeAttr("rating").removeAttr("count");
                drawStars(e, l, b, d, g);
                0 < f && a.find(".blog-yumprint-star-wrapper").addClass("has-reviews")
            }
            e = a.find(".blog-yumprint-infobar-section");
            e.length && e.css("width", 100 / e.length + "%");
            a.find(".blog-yumprint-save").click(function() {
                showDialog({
                    width: 700,
                    height: 468,
                    show: function(a) {
                        var b = "objectId=" + c + "&page=save&blog=" + encodeURIComponent(window.yumprintRecipeUrl);
                        $("<iframe class='blog-yumprint-iframe' src='" + HOST + "/wordpress?" + b + "'></iframe>").appendTo(a)
                    }
                });
                return !1
            });
            a.find(".blog-yumprint-write-review").click(function() {
                showDialog({
                    width: 700,
                    height: 468,
                    show: function(a) {
                        var b = "objectId=" + c + "&page=cook&blog=" + encodeURIComponent(window.yumprintRecipeUrl);
                        $("<iframe class='blog-yumprint-iframe' src='" + HOST + "/wordpress?" + b + "'></iframe>").appendTo(a)
                    }
                });
                return !1
            });
            a.find(".blog-yumprint-star-wrapper").click(function() {
                $(this).hasClass("has-reviews") && showDialog({
                    height: 400,
                    width: 600,
                    id: "blog-yumprint-reviews-dialog",
                    show: function(b) {
                        b.find(".blog-yumprint-dialog-title").text(a.find(".blog-yumprint-recipe-title").text());
                        loadReviews(b, c, "blog-yumprint-")
                    }
                })
            })
        }
    }
    $(function() {
        window.yumprintRecipeDisabled || messenger().addHandler("new review", function(a) {
            $(".blog-yumprint-recipe[yumprintrecipe='" + a.id + "']").each(function() {
                var e = $(this),
                    c = e.find(".blog-yumprint-stars-reviews");
                if (c.is(":visible")) {
                    var b = c.attr("color"),
                        d = c.attr("highlightcolor"),
                        g = c.attr("emptycolor");
                    drawStars(c, a.rating, b, d, g);
                    0 < a.count && e.find(".blog-yumprint-star-wrapper").addClass("has-reviews")
                }
                $(".blog-yumprint-dialog .blog-yumprint-close").click()
            });
            wordpress("yumprint_recipe_update_reviews",
                a)
        });
        $(".blog-yumprint-recipe").each(function() {
            initRecipe($(this))
        })
    });
})();