var server = 'http://127.0.0.1:3000';
var socket = io.connect(server);

socket.on('news', function (data) {
    console.log('hola');
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

$('#apagar').on('click', function(){
    var socket = io.connect(server);
    socket.emit('apagar', { my: 'data' });
});
$('#prender').on('click', function(){
    var socket = io.connect(server);
    socket.emit('prender', { my: 'data' });
});