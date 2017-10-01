"use strict";

const express = require('express');
// can add server side rendering here const ssr_1 = require('./src/lib/ssr');
// const config_1 = require('./config/config');
const app = express();
const compress = require('compression');
app.use(compress());
// app.use(express.compress());

app.use('/', express.static('./build'));

app.all('*' , function(req, res, next){
// 	console.log('here is my url', req.url)
// 	req.url = req.url + '.gz';
//     res.set('Content-Encoding', 'gzip');
//     next();
})
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => console.log(`Started Server on port:`+ app.get('port')));
