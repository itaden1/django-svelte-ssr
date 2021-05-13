require('svelte/register');
const express = require('express');

const SvelteApp = require('./public/build/server/ssr-bundle.js');

const server = express()
const PORT = 3000;

server.get('/', function(req, res){
	console.log(req.query);
	const { head, html, css } = SvelteApp.render({
		name: req.query.q,
	});	
	const data = {
		head, html, css
	}
	res.send(data);
})

server.listen(PORT, () => {
	console.log(`server listeneing on port:${PORT}`)
});
