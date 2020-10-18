

const {io} = require('../server');


io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicación'
    });

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });



    //Escuchar el cliente

    client.on('enviarMensaje',(data, callback)=>{

        console.log(data);

        client.broadcast.emit('enviarMensaje',data);
        //Disparar el callback mandado desd eel frontEnd
    //    if (data.usuario) {
    //        console.log(data);
    //        callback({
    //            resp:'TODO SALIO BIEN'
    //        });
    //    }else{
    //     callback({
    //         resp:'TODO SALIO MAL'
    //     });
    //    }
    });

});