// sockets.js
var socketio = require('socket.io');



module.exports.listen = function(app){
    io = socketio.listen(app);

    io.sockets.on('connection', function (socket) {
        require('../lib/johnny').actions(socket);

        socket.emit('news', { hello: 'world' });

        socket.on('my other event', function (data) {
            console.log(data);
        });
    });

    return io;
};