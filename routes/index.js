var express = require('express');
const formController = require('../controllers/formController');
var router = express.Router();
const {check} = require("express-validator")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/formulario", formController.formularioRender)
router.post("/formulario", 
[  check("name").notEmpty().withMessage("Debes poner tu nombre"),
  check("colores").notEmpty().withMessage("Este campo es obligatorio"),
  check("mail").isEmail().withMessage("El formato debe ser tipo email"),
  check("age").isInt().withMessage("Debes insertar tu edad con numeros")
] ,formController.formularioProcces)

module.exports = router;
