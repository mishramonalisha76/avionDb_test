const express = require('express');
const router = express.Router();
const AvionDB = require('aviondb')

const voterFetch = require('../controller/voterFetch.js');
const voterUpload = require('../controller/voterUpload.js');

router.post('/',voterUpload.voterUpload);
router.get('/voterfetch',voterFetch.voterFetch);




module.exports = router
