const express = require('express')
const order = require('../model/orderModel')

const server = express.Router()

server.get('/', async(req, res) =>{
    const session = req.sessionID
    const doo = await order.find({
        sessionID: session
    })
    res.render('orderSlip', { doo })
})

module.exports = server