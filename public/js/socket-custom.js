

    let socket = io();

    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });


    socket.on('disconnect', function () {
        console.log('Perdimos conexion con el servidor');
    });


    //Emits son para enviar informacion

    socket.emit('enviarMensaje',{
        usuario:'Alex',
        mensaje:'Hola mundo'
    },function (resp) {
        console.log('Respuesta server',resp);
    });


    //Escuchar informacion

    socket.on('enviarMensaje', function (mensaje) {
        console.log('servidor', mensaje);
    })