/**
 * Created by Stoian Catalin on 03.08.2015.
 */


var express = require('express');
app = express();
var path = require('path');
var erc = require('express-route-controller');

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application run now on http://%s:%s", host, port);
});
var bodyParser = require('body-parser');
function rendomRoom()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

app.set('settings', {
    domain: 'http://localhost:8000',
    title: 'Play Ping Pong Keys',
    description: '',
    keywords: ''

});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './views');

erc(app, {
    controllers: __dirname+"/controllers",
    routes: require('./routes.json')
});
