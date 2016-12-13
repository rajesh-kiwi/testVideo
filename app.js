require('babel-register');
require("node-jsx").install({
    extension: '.jsx'
    , harmony: true
});
var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join(__dirname, 'layouts'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'client')));

app.use('/view', require("./routes/viewRoute.js"));

app.get('/', function(req, res){
	res.redirect("/view");
});

process.env.port = 4000;
var port = process.env.port;

app.listen(port, function(){
    console.log('Server listening at ' + port)
});