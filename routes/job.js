var express = require('express');
var router = express.Router();

const {Job} = require('../models')

router.get('/', async (req, res) => {
    const job = await Job.findAll();

    res.json(job);
})


module.exports = router;
