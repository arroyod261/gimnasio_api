'use strict';

const express = require('express');
const router_1 = express.Router();
const Usuario = require('../models/usuario.model');

router_1.post('/registra-usuario', (req, res) => {
    let usuario = new Usuario({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        edad: req.body.edad,
        estatura: req.body.estatura,
        peso: req.body.peso
    });

    usuario.save((err, usuario_bd) => {
        if (err) {
            res.json({
                msj: 'El usuario no se puedo registrar',
                err
            })
        } else {
            res.json({
                msj: 'Usuario registrado con éxito',
                usuario_bd
            })
        }
    });
});

module.exports = router;