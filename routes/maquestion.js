var express = require('express');
var router = express.Router();

const {QuestionMa} = require('../models')

router.get('/', async (req, res) => {
    const questionMa = await QuestionMa.findAll();

    res.json(questionMa);
})


module.exports = router;
