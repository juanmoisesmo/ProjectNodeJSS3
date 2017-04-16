const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
    nombres: { type: String, required: true },
    usuario: { type: String, required: true },
    contrasena: { type: String, required: true }
})
let UserModel = mongoose.model('Usuario', UserSchema)
module.exports = UserModel