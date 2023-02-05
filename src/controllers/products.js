const productModel = require("../model/products")

// Create
exports.createProduct = (req, res)=>{

    let reqBody = req.body;

    productModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

// Read
exports.readProduct = (req, res)=>{
    productModel.find((err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            res.status(200).json({status: "success", data: data})
        }
    })
}


// Read Product By ID:

exports.readProductById = (req, res)=>{
    let id =  req.params.id
    let Query = {_id:id}

    productModel.find(Query, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            res.status(200).json({status: "success", data: data})
        }
    })
}


// Update

exports.updateProduct = (req, res)=>{
    let id = req.params.id
    let Query = {_id:id}
    let reqBody = req.body

    productModel.updateOne(Query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            res.status(200).json({status: "success", data: data})
        }
    })
}

// Delete
exports.deleteProduct = (req, res)=>{
    let id = req.params.id
    let Query = {_id:id}

    productModel.remove(Query, (err, data)=>{
        if(err){
            res.status(400).json({status: "fail", data: err})
        }else{
            res.status(200).json({status: "success", data: data})
        }
    })
}