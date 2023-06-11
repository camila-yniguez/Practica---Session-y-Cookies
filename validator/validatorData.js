const { check } = require("express-validator");

module.exports = [
      check("name")
      .notEmpty()
      .withMessage("Por favor ingrese su nombre")
      .bail()
      .isLength({ min: 5, max: 30 })
      .withMessage("En nombre debe tener entre 5 y 30 caracteres"),

      check("nameColor")
      .notEmpty()
      .withMessage("Por favor indique el color"),

      check("email")
      .notEmpty()
      .withMessage("Por favor indique su email")
      .bail()
      .isEmail()
      .withMessage("Email invalido"),

      check("age")
      .notEmpty()
      .withMessage("Por favor ingrese la edad")
      .isInt({ min: 0, max: 120 })
      .withMessage("La edad no es validad"),
];
