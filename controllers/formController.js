const {validationResult} = require("express-validator")


module.exports = {
formularioRender: (req, res)=>{
res.render("form")
},

formularioProcces: (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.render('form', { errors: errors.array() });
  }else{
  const name = req.body.name;
  const color = req.body.color;
  const email = req.body.mail;
  const age = req.body.age;
  
  req.session.color = color;
  req.session.usuario = name;

  if(color == "green"){
  document.getElementsByTagName("body").className = "verde"
  }else if (color == "rojo"){
    document.getElementsByTagName("body").className = "rojo"
  }else{
    document.getElementsByTagName("body").className = "azul"
  }
 

  res.render('formulario', {
    name: name,
    color: color,
    email: email,
    age: age,
    mensaje: `Hola ${name}, elegiste el color ${color}, tu email es ${email} y tu edad es ${age}.`

})
}}}
