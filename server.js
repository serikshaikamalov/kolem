// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
const PORT = 3000;

const { ngExpressEngine } = require('@nguniversal/express-engine');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

// create express app
const app = express();

// import server module bundle
var { ServerAppModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

// set up engine for .html file
app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', 'dist-browser');

// server static files
app.use(express.static(__dirname + '/dist-browser', { index: false }));

// return rendered index.html on every request
app.get('*', (req, res) => {
    res.render('index', { req, res });
    console.log(`new GET request at : ${req.originalUrl}`);
});

// start server and listen
app.listen(3000, () => {
    console.log('Listening on 3000');
});