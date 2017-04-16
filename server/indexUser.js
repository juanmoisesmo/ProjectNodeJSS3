var mongoose = require('mongoose')
var oCrearUsuario = require('./createUser.js')

var url = "mongodb://localhost/projectnodejs"

mongoose.connect(url)
oCrearUsuario.crearUsuario((error, result) => {
    if (error) console.log(error)
    console.log(result)
})