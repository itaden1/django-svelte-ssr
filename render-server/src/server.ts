require('svelte/register');

import { createServer } from 'http';

import App from '../app/bundle.js';

const PORT = 3000;

class RenderData{
	head: string;
	html: string;
	css: string;
	constructor(head, html, css){
		this.head = head;
		this.html = html;
		this.css = css;
	}
}

createServer((req, res) => {
	console.log(req.url);
	const {head, html, css} = App.render({
		url: req.url
	})
	const renderedData = new RenderData(head, html, css);
	res.setHeader("Content-Type", "application/json");
	res.write(JSON.stringify(renderedData));
	res.end()
}).listen(PORT);
