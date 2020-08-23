const express = require('express');
const router = express.Router();
const AvionDB = require('aviondb')

const dappFetch = require('../controller/dappFetch.js');
const dappUpload = require('../controller/dappUpload.js');

router.post('/',dappUpload.dappUpload);
router.get('/dappfetch',dappFetch.dappFetch);




module.exports = router
