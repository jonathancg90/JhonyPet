var j5 = require("johnny-five");
var board = new j5.Board();
var servo;

module.exports.actions = function(socket){
    var LEDPIN = 13;

    board.on("ready", function(){
        servo = new j5.Servo(2);
        servo.center();

        var led = new j5.Led(LEDPIN);
        led.on();
        //Ciclos
//        board.loop( 3000, function() {
//            servo.sweep();
//        });
    });

    socket.on('apagar', function(data){
        console.log('Apagado');
        var led = new j5.Led(LEDPIN);
        led.off();
        servo.stop();
    });

    socket.on('prender', function(data){
        console.log('Prendido');
        var led = new j5.Led(LEDPIN);
        led.on();
        servo.sweep();
    });


    return board;
};