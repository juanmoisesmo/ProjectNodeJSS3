const mongoose = require('mongoose')

const Schema = mongoose.Schema

let EventSchema = new Schema({
    eventid: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    start: { type: String },
    end: { type: String }
})
let EventModel = mongoose.model('Evento', EventSchema)
module.exports = EventModel