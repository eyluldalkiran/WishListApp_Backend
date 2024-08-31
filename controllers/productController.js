import Product from "..models/Prduct";

exports.addProduct = async (req, res) => {
  const { productName, productUrl, currentPrice } = req.body;

  try {
    const newProduct = new Product({
      userId: req.user.id,
      productName,
      productUrl,
      currentPrice,
    });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
