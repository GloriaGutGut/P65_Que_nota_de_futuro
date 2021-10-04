import mongoose from 'mongoose';

const uniqueValidator = require('mongoose-unique-validator');
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email invalido. Corregir!!';


// Roles
const roles = {
  values: ['ADMIN', 'DONADOR'],
  message: '{VALUE} no es un Rol válido'
}
// Tipo Identificacion
const tipoId = {
    values: ['CC', 'CE', 'RUT', 'NIT'],
    message: '{VALUE} no es un Tipo de Identificación Válido'
  }
// Tipo Constitución Empresa
const tipoPersona = {
    values: ['Natural', 'Juridica'],
    message: '{VALUE} no es un dato Válido'
  }

const Schema = mongoose.Schema;

const usuarioSchema = new mongoose.Schema ({
    _id: {type: Number, min: 11, max: 9999999999, unique: true, required: [true, 'El número de Identificación es Requerido']},
    tipoId: {type: String, enum: tipoId, required: [true, 'El Tipo de Identificación es Requerido']},
    clave: {type: String, required: [true, 'Clave es Requerida'] },
    rol: {type: String, default: 'DONADOR', enum: roles, required: [true, 'Rol es Requerido'] },
    activado: {type: Date, default: Date.now },
    desactivado: {type: Date},
    activo: {type: Boolean, default: true },
    fijo: {type: Number},
    celular: {type: Number, min: 1000000000, max: 99999999999999, required: [true, 'El número Celular es Requerido']},
    correo: {type: mongoose.SchemaTypes.Email, correctTld: true, required: [true, 'Email Requerido']},
    direccion: {type: String, maxlength: 50, trim: true, required: [true, 'La Dirección es Requerida']},
    tipoPersona: {type: String, default: 'Natutal', enum: tipoPersona, required: [true, 'El tipo de Empresa es Requerido']},
    natural: {
        nombre: {type: String, maxlength: 50, trim: true, required: [true, 'El Nombre es Requerido']},
        apellido: {type: String, maxlength: 50, trim: true, required: [true, 'El Apellido es Requerido']}
    },
    juridica: {
        razonSocial: {type: String, maxlength: 70, trim: true, required: [true, 'Razónn Social Requerida']}
    }
});

/*const usuarioSchema = new Schema({
    _id: {type: Number, min: 11, max: 9999999999, unique: true, required: [true, 'El número de Identificación es Requerido']},
    tipoId: {type: String, enum: tipoId, required: [true, 'El Tipo de Identificación es Requerido']},
    clave: { type: String, required: [true, 'Clave es Requerida'] },
    role: { type: String, default: 'USER', enum: roles },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});*/

// Validator
usuarioSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Eliminar clave de respuesta JSON
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.clave;
    return obj;
}


// Convertir a modelo
const Usuario = mongoose.model('Usuario', userSchema);

export default Usuario;