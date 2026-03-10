import express from 'express';
const router = express.Router();
import { getProducts,getProductById } from '../controllers/productController.js';
// import products from '../data/products.js';
// import {
//   getProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
//   createProductReview,
//   getTopProducts,
// } from '../controllers/productController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';
// import checkObjectId from '../middleware/checkObjectId.js';

 router.route('/').get(getProducts);
 router.route('/:id').get(getProductById);
// router.get('/top', getTopProducts);
// router
//   .route('/:id')
//   .get(checkObjectId, getProductById)
//   .put(protect, admin, checkObjectId, updateProduct)
//   .delete(protect, admin, checkObjectId, deleteProduct);

export default router;