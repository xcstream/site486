var express = require('express')
var app = express()
app.set("views engine", 'pug');
app.set('views', __dirname + '/views');

var index = require('./controllers/index')
var signin = require('./controllers/signin')

app.get('/',index)
app.get('/signin',signin)

var server = app.listen(7000, function() {
    console.log(`http://localhost:${ server.address().port}`);
});

