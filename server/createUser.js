var User = require('./modelUser.js')

module.exports.crearUsuario = function(callback) {
    let ouser = new User({ nombres: "Juan Mori", usuario: "jmori", contrasena: "jmori" })

    ouser.save((error) => {
        if (error) callback(error)
        callback(null, "Se creo usuario exitosamente")
    })
}