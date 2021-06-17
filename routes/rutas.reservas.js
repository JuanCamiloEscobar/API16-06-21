const {Router}= require('express');

const { buscarReserva }= require('../controllers/controlador.reservas.js');
const { agregarReserva }= require('../controllers/controlador.reservas.js');
const { editarReserva }= require('../controllers/controlador.reservas.js');
const { eliminarReserva }= require('../controllers/controlador.reservas.js');

const {validarPeticion}=require('../validation/validations.js');
const {check}=require('express-validator');

let validaciones=Array(

    check('nombre',"Campo obligatorio").not().isEmpty(),
    check('apellido',"Campo obligatorio").not().isEmpty(),
    check('telefono',"Campo obligatorio").not().isEmpty(),
    check('checkIn',"Campo obligatorio").not().isEmpty(),
    check('checkOut',"Campo obligatorio").not().isEmpty(),
    check('numeroPersonas',"Campo obligatorio").not().isEmpty(),
    check('tipoPaquete',"Campo obligatorio").not().isEmpty(),
    validarPeticion
);



const rutas=Router();

rutas.get('/reservations',buscarReserva);
rutas.post('/make/reservation',validaciones,agregarReserva);
rutas.put('/update/reservation/:id',editarReserva);
rutas.delete('/delete/reservation/:id',eliminarReserva);

module.exports=rutas;