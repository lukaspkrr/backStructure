const app = require('express')(),
    consign = require('consign')

consign({cwd : 'src'})
    .include('libs/middlewares.js')
    .then('connection')
    .then('api')
	.then('routes')
    .then('libs/boot.js')
    .into(app);

module.exports = app;