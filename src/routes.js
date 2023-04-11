const express = require('express')
const routes = express.Router()
const crypto = require('crypto');
const sha256 = require('crypto-js/sha256');

//Inserir dados

routes.post('/', (req, res) => {
    const { data, access_key, secret_key } = req.body

    const dataHash = sha256(data)
    const accessKeyHash = sha256(access_key)
    const secretKeyHash = sha256(secret_key)

    return res.json({
        data: dataHash.toString(),
        access_key: accessKeyHash.toString(),
        secret_key: secretKeyHash.toString()
    })
})

module.exports = routes
