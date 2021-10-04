const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useCreateIndex: true};
// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';

const app = express();

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/nota'));

//CONECTAR CON LA BASE DE DATOS
mongoose.connect(uri, options).then(
    () => { console.log('Base de datos conectada')},
    err => { console.log(err)}
);

//RUTA
app.get('/', (req, res) => { 
    res.send('Hola Mundo!'); 
});

//MIDDLEWARE PARA VUE.JS ROUTER MODO HISTORY
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO PRUEBA
// app.listen(3000, function () { 
//      console.log('El servidor escucha por el puerto 3000'); 
// });

//PUERTO AUTOMÁTICO
app.set('puerto', process.env.PORT || 3000);

//SERVIDOR ESCUCHANDO
app.listen(app.get('puerto'), function() { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});