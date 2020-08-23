const express = require('express');
const router = express.Router();
const AvionDB = require('aviondb')

const solverFetch = require('../controller/solverFetch.js');
const solverUpload = require('../controller/solverUpload.js');

router.post('/',solverUpload.solverUpload);
router.get('/solverfetch',solverFetch.solverFetch);




module.exports = router
