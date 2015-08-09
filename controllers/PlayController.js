var http = require('http').createServer(app);
var io = require('socket.io')(http);
module.exports = {
    get_index: function(req, res) {
        res.render('play', { settings: req.app.get('settings')});
    },
    wait_for: function(req, res) {
        io.on('connection', function(socket) {
            socket.join('room'+rendomRoom());
            console.log("User joined in room");
        });
    }

};