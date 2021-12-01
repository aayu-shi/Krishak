const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

exports.createProduct = (req, res) => {
  let { name, description, price, image, contact, creator } = req.body;
  const newProduct = new Product({
    name: name,
    description: description,
    price: price,
    image: image,
    contact: contact,
    creator: creator,
  });
  newProduct
    .save()
    .then((response) => {
      res.status(201).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(409).json({ errors: err });
    });
};

exports.deleteProduct = (req, res) => {
  res.status(200).json("product deleted");
};