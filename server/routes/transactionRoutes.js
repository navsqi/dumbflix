const express = require('express');

const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { protect, allowTo } = require('../controllers/authController');
const { uploadSingle } = require('../utils/uploadImage');

router
  .route('/')
  .get(protect, transactionController.getTransactions)
  .post(
    protect,
    uploadSingle('transaction', 'attachment'),
    transactionController.createTransaction
  );

router
  .route('/:id')
  .get(protect, transactionController.getTransaction)
  .patch(protect, allowTo('admin'), transactionController.updateTransaction)
  .delete(protect, allowTo('admin'), transactionController.deleteTransaction);

router.route('/expires').patch(transactionController.checkExpired);

module.exports = router;
