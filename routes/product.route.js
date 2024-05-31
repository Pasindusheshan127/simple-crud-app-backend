const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {
  getProducts,
  getProduct,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

//Read a product
router.get("/", getProducts);
router.get("/:id", getProduct);

//create a product
router.post("/", createProducts);

//update a product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
