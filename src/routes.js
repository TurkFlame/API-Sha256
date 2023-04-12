const express = require('express')
const routes = express.Router()
const crypto = require('crypto');
const sha256 = require('crypto-js/sha256');

//Inserir dados

routes.post('/', (req, res) => {
    const string_1 = req.body.string_1
    const string_2 = req.body.string_2
    const string_3 = req.body.string_3
    const string_4 = req.body.string_4
    const string_5 = req.body.string_5
    const string_6 = req.body.string_6
    const string_7 = req.body.string_7
    const string_8 = req.body.string_8
    const string_9 = req.body.string_9

    let response = {}

    if (string_1) {
        response.string_1 = sha256(string_1).toString()
    }
    if (string_2) {
        response.string_2 = sha256(string_2).toString()
    }
    if (string_3) {
        response.string_3 = sha256(string_3).toString()
    }
    if (string_4) {
        response.string_4 = sha256(string_4).toString()
    }
    if (string_5) {
        response.string_5 = sha256(string_5).toString()
    }
    if (string_6) {
        response.string_6 = sha256(string_6).toString()
    }
    if (string_7) {
        response.string_7 = sha256(string_7).toString()
    }
    if (string_8) {
        response.string_8 = sha256(string_8).toString()
    }
    if (string_9) {
        response.string_9 = sha256(string_9).toString()
    }

    return res.json(response)
})

routes.post('/signature', (req, res) => {

    let secret_key = req.body.secretKey
    let data = req.body.data
    let region = req.body.region
    let service = req.body.service
    let string_to_sign = req.body.stringToSign

    let kData = sha256("AWS4" + secret_key, data).toString()
    let kRegion = sha256(kDate, region).toString()
    let kService = sha256(kRegion, service).toString()
    let Ksigning = sha256(kService, "aws4_request").toString()
    let signature = sha256(Ksigning, string_to_sign).toString()

    let corpo = {}
    corpo.signature = signature 
    
    return res.json(corpo)

})

module.exports = routes
