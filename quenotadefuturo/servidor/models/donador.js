import mongoose from 'mongoose';

//var mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email invalido. Corregir!!';

// Tipo Identificacion
const tipoId = {
    values: ['Cedula', 'Cedula de Extranjeria'],
    message: '{VALUE} no es un Tipo de Identificación Válido'
  }

// Tipo Constitución Empresa
const tipoPersona = {
    values: ['Natural', 'Juridica'],
    message: '{VALUE} no es un dato Válido'
  }

const Schema = mongoose.Schema;

const donadorSchema = new Schema({
    //_id: {type: Number, min: 11, max: 9999999999, unique: true, required: [true, 'El número de Identificación es Requerido']},
    _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', autopopulate: true,
        unique: true, required: [true, 'El número de Identificación es Requerido']},
    tipoId: {type: String, enum: tipoId, required: [true, 'El Tipo de Identificación es Requerido']},
    tipoPersona: {type: String, enum: tipoPersona, required: [true, 'El tipo de Empresa es Requerido']},
    nombre: {type: String, maxlength: 50, trim: true, required: [true, 'El Nombre es Requerido']},
    apellido: {type: String, maxlength: 50, trim: true, required: [true, 'El Apellido es Requerido']},
    fijo: {type: Number},
    celular: {type: Number, min: 1000000000, max: 99999999999999, required: [true, 'El número Celular es Requerido']},
    email: {type: mongoose.SchemaTypes.Email, correctTld: true, required: [true, 'Email Requerido']},
    direccion: {type: String, maxlength: 50, trim: true, required: [true, 'La Dirección es Requerida']}
    //creado:{type: Date, default: Date.now},
    //activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Donador = mongoose.model('Donador', donadorSchema);

export default Donador;


/*import * as mongoose from 'mongoose';
 
export const StudentSchema = new mongoose.Schema({
 name: String,
 surname: String,
 courses: [
   {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Course',
     autopopulate: true,
   },
 ],
});
 
StudentSchema.plugin(require('mongoose-autopopulate'));*/