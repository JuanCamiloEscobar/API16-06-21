const express = require('express');
const cors = require('cors');
const rutas = require('../routes/rutas.reservas');
const {conectarBD}=require('../database/conexion.js');

class ServidorModelo{

    constructor(){

        this.app=express();
        this.despertarBD();
        this.crearMiddlewares();
        this.llamarRutasAPI();

    }

    despliegueServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log(`Esta conectado al puerto ${process.env.PORT}`);
        });
    }

    llamarRutasAPI(){

        this.app.use('/',rutas);

    }

    despertarBD(){
        conectarBD();
    }

    crearMiddlewares(){

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));

    }
}

module.exports=ServidorModelo;