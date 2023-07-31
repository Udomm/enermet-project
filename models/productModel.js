const mongoose = require('mongoose')

const productShema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please inter product name: "]

        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product',productShema);

module.exports = Product;