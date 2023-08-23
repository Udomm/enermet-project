const mongoose = require('mongoose')

const productShema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please inter product name: "]

        },
        kwh: {
            type: Number,
            required: true,
            default: 0
        },
        voltage: {
            type: Number,
            required: true,
        },
        current: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


const Device = mongoose.model('Device',productShema);

module.exports = Device;
