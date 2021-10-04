import express from 'express';
const router = express.Router();

// importar el modelo usuario
import Usuario from '../models/usuario';

// Agregar un usuario
router.post('/nuevo-usuario', async(req, res) => {
  const body = req.body;  
  try {
    const usuarioDB = await Usuario.create(body);
    res.status(200).json(usuarioDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;