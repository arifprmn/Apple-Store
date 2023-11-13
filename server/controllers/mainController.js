const { Category, Image, Product, User } = require("../models/index");

class mainController {
  static async fetchProducts(req, res, next) {
    try {
      let dataProduct = await Product.findAll();
      if (!dataProduct) {
        throw new Error("Data_Not_Found");
      }
      res.status(200).json({
        data: dataProduct,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = mainController;
