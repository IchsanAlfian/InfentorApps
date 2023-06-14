var express = require('express');
var router = express.Router();
var Validator = require('fastest-validator');

const v = new Validator();
const {ResultAnswerMa} = require('../models')

router.post('/', async (req, res) => {
    const schema = {
        typeIntelegentResult: 'string'
    }

    const validate = v.validate(req.body, schema);
    if(validate.length){
      return res.status(400).json(validate);
    }

    const resultAnswer = await ResultAnswerMa.create(req.body);

    res.json(resultAnswer);
})

module.exports = router;