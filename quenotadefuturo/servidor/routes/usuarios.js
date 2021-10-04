var express = require('express');
var router = express.Router();

// Importamos modelo Usuario
import Usuario from '../models/usuario';

// Filtrar campos de PUT
const _ = require('underscore');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Middlewares
//const {verificarAuth} = require('../middlewares/autenticacion.js');
const {verificarAuth, verificaRol} = require('../middlewares/autenticacion');


//POST crear nuevo usuario
//router.post('/nuevo-usuario', async (req, res) => {
router.post('/nuevo-usuario', [verificarAuth, verificaRol], async (req, res) => {
    const body = req.body
    /*const body = {
        _id: req.body._id,
        tipoId: req.body.tipoId,
        clave: req.body.clave,
        rol: req.body.rol,
        fijo: req.body.fijo,
        celular: req.body.celular,
        correo: req.body.correo,
        direccion: req.body.direccion,
        tipoPersona: req.body.tipoPersona,
        natural: {nombre: req.body.nombre, apellido: req.body.apellido},
        juridica: {razonSocial: req.body.razonSocial}
    }*/

    body.clave = bcrypt.hashSync(req.body.clave, saltRounds);

    try {
        const usuarioDB = await Usuario.create(body);
        return res.json(usuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

/* GET users listing. */
//router.get('/', function(req, res, next) {
router.get('/usuario', verificarAuth , async(req, res) => {
    res.send('respond with a resource');
});

//PUT modificar Usuario
//router.put('/usuario/:id', async(req, res) => {
router.put('/usuario/:_id', [verificarAuth, verificaRol], async(req, res) => {
    let _id = req.params.id;
    let body = _.pick(req.body, [
        'tipoId', 'clave', 'rol', 'activado', 'desactivado', 'activo', 'fijo', 'celular',
        'correo', 'direccion', 'tipoPersona', 'natural', 'juridica'
    ]);
    if(body.clave){
      body.clave = bcrypt.hashSync(req.body.clave, saltRounds);
    }
    try {
        // {new:true} nos devuelve el usuario actualizado y verifica que los Roles sean válidos
        const usuarioDB = await Usuario.findByIdAndUpdate(_id, body, {new: true, runValidators: true});
        return res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//DELETE Usuario
//router.delete('/usuario/:id', async(req, res) => {   
router.delete('/usuario/:_id', [verificarAuth, verificaRol], async(req, res) => {
    let _id = req.params.id;
    try {
        const usuarioDelete = await Usuario.findByIdAndRemove(_id);
        if(!usuarioDelete){
            return res.status(400).json({
                mensaje: 'Usuario no encontrado'
            })
        }
        return res.json(usuarioDelete);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;