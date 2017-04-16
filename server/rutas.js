const Router = require('express').Router();
const Users = require('./modelUser.js')
const Events = require('./modelEvent.js')

Router.post('/login', function(req, res) {
    let user = req.body.user
    let pass = req.body.pass

    console.log(user)
    console.log(pass)

    Users.findOne({ usuario: user, contrasena: pass }).exec(function(err, doc) {
        if (err) {
            res.status(500)
            res.json(err)
        } else {

            if (doc !== null) {
                res.send("Validado")
            } else {
                res.send("No Autorizado")
            }
        }

    })
})

Router.get('/events/all', function(req, res) {
    Events.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

Router.post('/events/new', function(req, res) {
    let event = new Events({
        eventid: Math.floor(Math.random() * 1000),
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })
    event.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Se registro evento correctamente")
    })
})

Router.post('/events/update', function(req, res) {

    console.log(req.body.idevent)

    let where = {
        eventid: req.body.idevent
    }

    let event = {
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    }

    Events.update(where, event, {}, (error, event) => {
        if (error) {
            res.status(500)
            res.json(error)
            console.log(error)
        } else {
            console.log(event)
            res.send("Se actualizo evento correctamente")
        }
    })
})

Router.post('/events/delete/:id', function(req, res) {
    let eid = req.body.id
    Events.remove({ eventid: eid }, function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Se elimino el evento seleccionado")
    })
})

module.exports = Router