require('svelte/register');

const { createServer } = require('http')

const App = require('./app/bundle.js');

const PORT = 3000;

createServer((req, res) => {
	console.log(req.url);
	const {head, html, css} = App.render({
		url: req.url
	})
	const content = JSON.stringify({content: html})
	res.setHeader("Content-Type", "application/json");
	res.write(content);
	res.end()
}).listen(PORT);
