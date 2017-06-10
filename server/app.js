/**
 * Setting up express server and requirements for server to run. Server can be started by
 * doing 'npm start node'
 */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Settings global variables
global.app = app;

require('./upto.js');

app.get('*', function (req, res, next) {
	if (req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production') {
		if (req.headers.host.match(/^www/) !== null ) {
			res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
		} else {
			res.redirect('https://' + req.hostname + req.url)
		}
	} else {
		if (req.headers.host.match(/^www/) !== null ) {
			res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
		} else {
			next()
		}
	}
});

/**
 * Serving client directory so that server has access to all JavaScript and CSS files.
 *
 * Directing all routes to index.html, hence the '*'
 */
app.use('/client', express.static(__dirname + '/../client'));
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.get('/apple', function (req, res) {
	res.sendFile(path.join(__dirname, '../apple', 'index.html'));
});

/**
 * Setting port to default port if one is set, if not (local), set port to 3000 and start
 * server.
 */
let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Listening on port " + port);
});

module.exports = app;