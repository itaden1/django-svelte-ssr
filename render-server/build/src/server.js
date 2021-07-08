"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('svelte/register');
var http_1 = require("http");
var bundle_js_1 = __importDefault(require("../app/bundle.js"));
var PORT = 3000;
var RenderData = /** @class */ (function () {
    function RenderData(head, html, css) {
        this.head = head;
        this.html = html;
        this.css = css;
    }
    return RenderData;
}());
http_1.createServer(function (req, res) {
    console.log(req.url);
    var _a = bundle_js_1.default.render({
        url: req.url
    }), head = _a.head, html = _a.html, css = _a.css;
    var renderedData = new RenderData(head, html, css);
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(renderedData));
    res.end();
}).listen(PORT);
