const express = require('express');
const router = express.Router();
const AvionDB = require('aviondb')

const publisherFetch = require('../controller/publisherFetch.js');
const publisherUpload = require('../controller/publisherUpload.js');

router.post('/',publisherUpload.publisherUpload);
router.get('/publisherfetch',publisherFetch.publisherFetch);




module.exports = router
