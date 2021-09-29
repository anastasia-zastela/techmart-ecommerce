const express = require('express');
const router = express.Router();
const passport = require('passport');
// const multer = require("multer"); // multer for parsing multipart form data (files)
const fse = require('fs-extra');

const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');

//Import controllers
const {
  addImages,
  addProduct,
  updateProduct,
  getProducts,
  getProductById,
  getProductsFilterParams,
  searchProducts,
} = require('../controllers/products');

router.post(
  '/images',
  // passport.authenticate('jwt-admin', { session: false }),
  upload.single('image'),
  async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      res.send(result.secure_url);
    } catch (err) {
      console.log(err);
    }
  }
);

// @route   POST /products
// @desc    Create new product
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt-admin', { session: false }),
  addProduct
);

// @route   PUT /products/:id
// @desc    Update existing product
// @access  Private
router.put(
  '/:id',
  passport.authenticate('jwt-admin', { session: false }),
  updateProduct
);

// @route   GET /products
// @desc    GET existing products
// @access  Public
router.get('/', getProducts);

// @route   GET /products/filter
// @desc    GET appropriate filtered products
// @access  Public
router.get('/filter', getProductsFilterParams);

// @route   POST /products/search
// @desc    POST appropriate to search query products
// @access  Public
router.post('/search', searchProducts);

// @route   GET /products/:id
// @desc    GET existing product by id
// @access  Public
router.get('/:itemNo', getProductById);

module.exports = router;
