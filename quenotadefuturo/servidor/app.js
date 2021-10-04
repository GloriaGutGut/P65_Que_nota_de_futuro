import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

/*Las líneas const se reemplazan por import luego de haber instalado babel
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');*/

const app = express();

// CONEXION A BASE DE DATOS
const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/NOMBRE_BDF_DEL_PROYECTO'; **MODIFICAR
const options = {useNewUrlParser: true, useUnifiedTopology: true};
// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
/* Para acceder al directorio actual
app.use(express.static(path.join(__dirname, 'public')));*/


//RUTAS
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Usamos las rutas
app.use('/', indexRouter);
app.use('/usuarios', usariosRouter);
app.use('/login', require('./routes/login'));


// Middleware para Vue.js router modo history
// para simular las rutas de un sitio web, ya que al ser SPA es un simple HTML
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

/*PUERTO FIJO
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});*/

//PUERTO DINAMICO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('app listening on port'+ app.get('puerto'));
});