const express = require("express")
const productController = require("../controllers/products")
const router = express.Router();

// Create
router.post("/create", productController.createProduct)


// Read 
router.get("/read", productController.readProduct)


// Read Product By Id:
router.get("/readProductById/:id", productController.readProductById)


// Update
router.post("/update/:id", productController.updateProduct)


// Delete
router.get("/delete/:id", productController.deleteProduct)



module.exports = router;