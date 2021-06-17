const {model, Schema}=require('mongoose');

const ReservaSchema=Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    tipoPaquete:{
        type:String,
        required:true
    }
});

module.exports=model('Reserva',ReservaSchema);
