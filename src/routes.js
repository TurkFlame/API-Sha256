const express = require('express')
const routes = express.Router()
const crypto = require('crypto');
const sha256 = require('crypto-js/sha256');

let string_in_sha256 = ""

//Inserir dados
routes.post('/:string',(req, res)=>{
    string_in_sha256 = sha256(req.params.string)
    return res.json({ hash: string_in_sha256.toString() })
})

module.exports = routes
