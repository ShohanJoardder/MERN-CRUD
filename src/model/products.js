const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

    name: {type: String},
    code: {type: String},
    image: {type: String},
    price: {type: String},
    quantity: {type: String},
    totalPrice: {type: String}

},{
    timestamps: true,
    versionKey: false
});

const productModel = mongoose.model("products", productSchema)
module.exports = productModel;