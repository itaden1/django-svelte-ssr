"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function t() { }
function e(t) { return t(); }
function n(t) { t.forEach(e); }
function o(e) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    if (null == e)
        return t;
    var o = e.subscribe.apply(e, n);
    return o.unsubscribe ? function () { return o.unsubscribe(); } : o;
}
var r;
function u(t) { r = t; }
function a() { if (!r)
    throw new Error("Function called outside component initialization"); return r; }
function i() { var t = a(); return function (e, n) { var o = t.$$.callbacks[e]; if (o) {
    var r_1 = function (t, e) { var n = document.createEvent("CustomEvent"); return n.initCustomEvent(t, !1, !1, e), n; }(e, n);
    o.slice().forEach((function (e) { e.call(t, r_1); }));
} }; }
function c(t, e) { a().$$.context.set(t, e); }
function s(t) { return a().$$.context.get(t); }
var l = new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]), p = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
var F = { '"': "&quot;", "'": "&#39;", "&": "&amp;", "<": "&lt;", ">": "&gt;" };
function d(t) { return String(t).replace(/["'&<>]/g, (function (t) { return F[t]; })); }
var f = { $$render: function () { return ""; } };
function h(t, e) { if (!t || !t.$$render)
    throw "svelte:component" === e && (e += " this={...}"), new Error("<" + e + "> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules"); return t; }
var m;
function $(t) { function e(e, n, o, a, i) { var c = r; u({ $$: { on_destroy: m, context: new Map(c ? c.$$.context : i || []), on_mount: [], before_update: [], after_update: [], callbacks: Object.create(null) } }); var s = t(e, n, o, a); return u(c), s; } return { render: function (t, _a) {
        if (t === void 0) { t = {}; }
        var _b = _a === void 0 ? {} : _a, _c = _b.$$slots, o = _c === void 0 ? {} : _c, _d = _b.context, r = _d === void 0 ? new Map : _d;
        m = [];
        var u = { title: "", head: "", css: new Set }, a = e(u, t, {}, o, r);
        return n(m), { html: a, css: { code: Array.from(u.css).map((function (t) { return t.code; })).join("\n"), map: null }, head: u.title + u.head };
    }, $$render: e }; }
var v = [];
function g(e, n) {
    if (n === void 0) { n = t; }
    var o;
    var r = [];
    function u(t) { if (u = t, ((n = e) != n ? u == u : n !== u || n && "object" == typeof n || "function" == typeof n) && (e = t, o)) {
        var t_1 = !v.length;
        for (var t_2 = 0; t_2 < r.length; t_2 += 1) {
            var n_1 = r[t_2];
            n_1[1](), v.push(n_1, e);
        }
        if (t_1) {
            for (var t_3 = 0; t_3 < v.length; t_3 += 2)
                v[t_3][0](v[t_3 + 1]);
            v.length = 0;
        }
    } var n, u; }
    return { set: u, update: function (t) { u(t(e)); }, subscribe: function (a, i) {
            if (i === void 0) { i = t; }
            var c = [a, i];
            return r.push(c), 1 === r.length && (o = n(u) || t), a(e), function () { var t = r.indexOf(c); -1 !== t && r.splice(t, 1), 0 === r.length && (o(), o = null); };
        } };
}
function b(e, r, u) { var a = !Array.isArray(e), i = a ? [e] : e, c = r.length < 2; return { subscribe: g(u, (function (e) { var u = !1; var s = []; var l = 0, p = t; var F = function () { if (l)
        return; p(); var n = r(a ? s[0] : s, e); c ? e(n) : p = "function" == typeof n ? n : t; }, d = i.map((function (t, e) { return o(t, (function (t) { s[e] = t, l &= ~(1 << e), u && F(); }), (function () { l |= 1 << e; })); })); return u = !0, F(), function () { n(d), p(); }; })).subscribe }; }
var E = {}, y = {};
function w(t) { return __assign(__assign({}, t.location), { state: t.history.state, key: t.history.state && t.history.state.key || "initial" }); }
var x = function (t, e) { var n = []; var o = w(t); return { get location() { return o; }, listen: function (e) { n.push(e); var r = function () { o = w(t), e({ location: o, action: "POP" }); }; return t.addEventListener("popstate", r), function () { t.removeEventListener("popstate", r); var o = n.indexOf(e); n.splice(o, 1); }; }, navigate: function (e, _a) {
        var _b = _a === void 0 ? {} : _a, r = _b.state, _c = _b.replace, u = _c === void 0 ? !1 : _c;
        r = __assign(__assign({}, r), { key: Date.now() + "" });
        try {
            u ? t.history.replaceState(r, null, e) : t.history.pushState(r, null, e);
        }
        catch (n) {
            t.location[u ? "replace" : "assign"](e);
        }
        o = w(t), n.forEach((function (t) { return t({ location: o, action: "PUSH" }); }));
    } }; }(Boolean("undefined" != typeof window && window.document && window.document.createElement) ? window : function (t) {
    if (t === void 0) { t = "/"; }
    var e = 0;
    var n = [{ pathname: t, search: "" }], o = [];
    return { get location() { return n[e]; }, addEventListener: function (t, e) { }, removeEventListener: function (t, e) { }, history: { get entries() { return n; }, get index() { return e; }, get state() { return o[e]; }, pushState: function (t, r, u) { var _a = u.split("?"), a = _a[0], _b = _a[1], i = _b === void 0 ? "" : _b; e++, n.push({ pathname: a, search: i }), o.push(t); }, replaceState: function (t, r, u) { var _a = u.split("?"), a = _a[0], _b = _a[1], i = _b === void 0 ? "" : _b; n[e] = { pathname: a, search: i }, o[e] = t; } } };
}()), k = /^:(.+)/;
function R(t, e) { return t.substr(0, e.length) === e; }
function S(t) { return "*" === t[0]; }
function j(t) { return t.replace(/(^\/+|\/+$)/g, "").split("/"); }
function C(t) { return t.replace(/(^\/+|\/+$)/g, ""); }
function P(t, e) { return { route: t, score: t.default ? 0 : j(t.path).reduce((function (t, e) { return (t += 4, !function (t) { return "" === t; }(e) ? !function (t) { return k.test(t); }(e) ? S(e) ? t -= 5 : t += 3 : t += 2 : t += 1, t); }), 0), index: e }; }
function O(t, e) { var n, o; var r = e.split("?")[0], u = j(r), a = "" === u[0], i = function (t) { return t.map(P).sort((function (t, e) { return t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index; })); }(t); for (var t_4 = 0, r_2 = i.length; t_4 < r_2; t_4++) {
    var r_3 = i[t_4].route;
    var c_1 = !1;
    if (r_3.default) {
        o = { route: r_3, params: {}, uri: e };
        continue;
    }
    var s_1 = j(r_3.path), l_1 = {}, p_1 = Math.max(u.length, s_1.length);
    var F_1 = 0;
    for (; F_1 < p_1; F_1++) {
        var t_5 = s_1[F_1], e_1 = u[F_1];
        if (void 0 !== t_5 && S(t_5)) {
            l_1["*" === t_5 ? "*" : t_5.slice(1)] = u.slice(F_1).map(decodeURIComponent).join("/");
            break;
        }
        if (void 0 === e_1) {
            c_1 = !0;
            break;
        }
        var n_2 = k.exec(t_5);
        if (n_2 && !a) {
            var t_6 = decodeURIComponent(e_1);
            l_1[n_2[1]] = t_6;
        }
        else if (t_5 !== e_1) {
            c_1 = !0;
            break;
        }
    }
    if (!c_1) {
        n = { route: r_3, params: l_1, uri: "/" + u.slice(0, F_1).join("/") };
        break;
    }
} return n || o || null; }
function _(t, e) { return t + (e ? "?" + e : ""); }
function A(t, e) { return C("/" === e ? t : C(t) + "/" + C(e)) + "/"; }
var L = $((function (t, e, n, r) { var u, i, l, p, F, d, _a = e.basepath, f = _a === void 0 ? "/" : _a, _b = e.url, h = _b === void 0 ? null : _b; var m = s(E), $ = s(y), v = g([]); d = o(v, (function (t) { return F = t; })); var w = g(null); var k = !1; var R = m || g(h ? { pathname: h } : x.location); p = o(R, (function (t) { return l = t; })); var S = $ ? $.routerBase : g({ path: f, uri: f }); i = o(S, (function (t) { return u = t; })); var j = b([S, w], (function (_a) {
    var t = _a[0], e = _a[1];
    if (null === e)
        return t;
    var n = t.path, o = e.route, r = e.uri;
    return { path: o.default ? n : o.path.replace(/\*.*$/, ""), uri: r };
})); var C; m || (C = function () { return x.listen((function (t) { R.set(t.location); })); }, a().$$.on_mount.push(C), c(E, R)), c(y, { activeRoute: w, base: S, routerBase: j, registerRoute: function (t) { var e = u.path; var n = t.path; if (t._path = n, t.path = A(e, n), "undefined" == typeof window) {
        if (k)
            return;
        var e_2 = function (t, e) { return O([t], e); }(t, l.pathname);
        e_2 && (w.set(e_2), k = !0);
    }
    else
        v.update((function (e) { return (e.push(t), e); })); }, unregisterRoute: function (t) { v.update((function (e) { var n = e.indexOf(t); return e.splice(n, 1), e; })); } }), void 0 === e.basepath && n.basepath && void 0 !== f && n.basepath(f), void 0 === e.url && n.url && void 0 !== h && n.url(h); {
    var t_7 = u.path;
    v.update((function (e) { return (e.forEach((function (e) { return e.path = A(t_7, e._path); })), e); }));
} {
    var t_8 = O(F, l.pathname);
    w.set(t_8);
} return i(), p(), d(), "" + (r.default ? r.default({}) : ""); })), D = $((function (t, e, n, r) { var u, i, c, l, _a = e.path, p = _a === void 0 ? "" : _a, _b = e.component, F = _b === void 0 ? null : _b; var _c = s(y), d = _c.registerRoute, m = _c.unregisterRoute, $ = _c.activeRoute; i = o($, (function (t) { return u = t; })); l = o(s(E), (function (t) { return c = t; })); var v = { path: p, default: "" === p }; var g = {}, b = {}; var w; d(v), "undefined" != typeof window && (w = function () { m(v); }, a().$$.on_destroy.push(w)), void 0 === e.path && n.path && void 0 !== p && n.path(p), void 0 === e.component && n.component && void 0 !== F && n.component(F), u && u.route === v && (g = u.params); {
    var t_9 = e.path, n_3 = e.component, o_1 = __rest(e, ["path", "component"]);
    b = o_1;
} return i(), l(), "" + (null !== u && u.route === v ? "" + (null !== F ? "" + h(F || f, "svelte:component").$$render(t, Object.assign({ location: c }, g, b), {}, {}) : "" + (r.default ? r.default({ params: g, location: c }) : "")) : ""); })), B = $((function (t, e, n, r) { var u, a, c, F, f, h = function (t, e) { var n = {}; e = new Set(e); for (var o_2 in t)
    e.has(o_2) || "$" === o_2[0] || (n[o_2] = t[o_2]); return n; }(e, ["to", "replace", "state", "getProps"]), _a = e.to, m = _a === void 0 ? "#" : _a, _b = e.replace, $ = _b === void 0 ? !1 : _b, _c = e.state, v = _c === void 0 ? {} : _c, _d = e.getProps, g = _d === void 0 ? (function () { return ({}); }) : _d; var b = s(y).base; c = o(b, (function (t) { return a = t; })); var w, x, k, S; return f = o(s(E), (function (t) { return F = t; })), i(), void 0 === e.to && n.to && void 0 !== m && n.to(m), void 0 === e.replace && n.replace && void 0 !== $ && n.replace($), void 0 === e.state && n.state && void 0 !== v && n.state(v), void 0 === e.getProps && n.getProps && void 0 !== g && n.getProps(g), w = "/" === m ? a.uri : function (t, e) { if (R(t, "/"))
    return t; var _a = t.split("?"), n = _a[0], o = _a[1], r = e.split("?")[0], u = j(n), a = j(r); if ("" === u[0])
    return _(r, o); if (!R(u[0], "."))
    return _(("/" === r ? "" : "/") + a.concat(u).join("/"), o); var i = a.concat(u), c = []; return i.forEach((function (t) { ".." === t ? c.pop() : "." !== t && c.push(t); })), _("/" + c.join("/"), o); }(m, a.uri), x = R(F.pathname, w), k = w === F.pathname, u = k ? "page" : void 0, S = g({ location: F, href: w, isPartiallyCurrent: x, isCurrent: k }), c(), f(), "<a" + function (t, e) { var n = Object.assign.apply(Object, __spreadArray([{}], t)); e && (null == n.class ? n.class = e : n.class += " " + e); var o = ""; return Object.keys(n).forEach((function (t) { if (p.test(t))
    return; var e = n[t]; !0 === e ? o += " " + t : l.has(t.toLowerCase()) ? e && (o += " " + t) : null != e && (o += " " + t + "=\"" + String(e).replace(/"/g, "&#34;").replace(/'/g, "&#39;") + "\""); })), o; }([{ href: d(w) }, { "aria-current": d(u) }, S, h]) + ">" + (r.default ? r.default({}) : "") + "</a>"; })), M = $((function (t, e, n, o) { return "<h1>Home</h1>"; })), q = $((function (t, e, n, o) { return "<h1>About Me</h1>"; })), H = $((function (t, e, n, o) { var r = e.title, u = e.url; return void 0 === e.title && n.title && void 0 !== r && n.title(r), void 0 === e.url && n.url && void 0 !== u && n.url(u), (t.head += "" + (t.title = "<title>" + d(r) + "</title>", ""), "") + "\n\n" + h(L, "Router").$$render(t, { url: u }, {}, { default: function () { return "<nav>" + h(B, "Link").$$render(t, { to: "/" }, {}, { default: function () { return "Home"; } }) + "\n\t\t" + h(B, "Link").$$render(t, { to: "/about" }, {}, { default: function () { return "About"; } }) + "</nav>\n\t<div>" + h(D, "Route").$$render(t, { path: "/", component: M }, {}, {}) + "\n\t\t" + h(D, "Route").$$render(t, { path: "/about", component: q }, {}, {}) + "</div>"; } }); }));
module.exports = H;
