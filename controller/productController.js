const Device = require('../models/productModel')
const asyncHandler = require('express-async-handler')


const getDevices = asyncHandler(async(req, res) =>{
    try{
        const devices = await Device.find({});
        res.status(200).json(devices);

    } catch(error){
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: errror.message})
    }
})
const getDevice = asyncHandler(async(req, res) =>{
    try{
        const {id} = req.params;
        const device = await Device.findById(id);
        res.status(200).json(device);

    } catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
const createDevice = asyncHandler(async(req, res)=>{
    try{
        const device = await Device.create(req.body);
        res.status(200).json(device);

    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
const updateDevice = asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const device = await Product.findByIdAndUpdate(id, req.body);
        if(!device){
            res.status(404);
            throw new Error(`cannot find any product ID ${id}`);
        }
        const updateDevice = await Device.findById(id);
        res.status(200).json(updateDevice);
    } catch(error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const deleteDevice = asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const device = await Device.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product ID ${id}`);
            
        }
        res.status(200).json(Device);
    } catch(error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getDevice,
    getDevices,
    createDevice,
    updateDevice,
    deleteDevice
}