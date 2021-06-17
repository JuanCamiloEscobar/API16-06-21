const { request,response }=require('express');

const ReservaModelo=require('../models/ReservaModelo.js');


async function buscarReserva(req=request,res=response){
    
    let consulta=await ReservaModelo.find();

    res.json({        
        status: true,
        mensaje:consulta
    });

}

async function agregarReserva(req=request,res=response){

    let datosReserva=req.body;
    let reserva = new ReservaModelo(datosReserva);
    await reserva.save();

    res.json({        
        status: true,
        mensaje:'Reserva lista!!',
        datos:reserva   
    });

}

async function editarReserva(req=request,res=response){

    let id=req.params.id;
    let datosReserva=req.body;

    await ReservaModelo.findByIdAndUpdate(id,datosReserva);

    res.json({
        status: true,
        mensaje:'Reserva modificada con exito!!'  
    });

}

async function eliminarReserva(req=request,res=response){

    let id=req.params.id;

    await ReservaModelo.findByIdAndDelete(id,datosReserva);

    res.json({        
        status: true,
        mensaje:'Reserva eliminada con exito!!'    
    });

}

module.exports={
    buscarReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva
} 