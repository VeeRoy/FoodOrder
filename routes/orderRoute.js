const express = require('express')
const order = require('../model/orderModel')

const server = express.Router()

server.get('/', (req, res) =>{
    res.render('open')
})

server.post('/', async (req, res) =>{
   const body = req.body.cart
   const user = req.body.user
   
    id = req.sessionID

    const prod = await order.create({
        // user: user,
        sessionID: id,
        item: body
    })
    res.redirect('/orderSlip')
})

module.exports = server