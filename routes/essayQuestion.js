var express = require('express');
var router = express.Router();

const {EssayQuestion} = require('../models')

router.get('/', async (req, res) => {
    const essayQuestion = await EssayQuestion.findAll();

    res.json(essayQuestion);
})


module.exports = router;
