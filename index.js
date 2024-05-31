const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

/*
app.get("/", (req, res) => {
  res.send("hello from node API Server Updated");
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create a product
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update a product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updadetedProduct = await Product.findById(id);
    res.status(200).json(updadetedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product delete Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
*/

mongoose
  .connect(
    "mongodb+srv://pasinduhettiarachchi201:Pasindu123@backenddb.3mnx58b.mongodb.net/NODE-API-CRUD?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("connect mongoDB");
    app.listen(3001, () => {
      console.log("Server is running on part 3001");
    });
  })
  .catch(() => console.log("connection failed"));
