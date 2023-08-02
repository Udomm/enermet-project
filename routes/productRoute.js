const express = require('express');
const Device = require('../models/productModel');
const {getDevice, getDevices, createDevice, updateDevice, deleteDevice} = require('../controller/productController')

const router = express.Router();

router.get('/', getDevices);

router.get('/:id', getDevice);

router.post('/', createDevice);

router.put('/:id', updateDevice);

router.delete('/:id', deleteDevice);

module.exports = router;