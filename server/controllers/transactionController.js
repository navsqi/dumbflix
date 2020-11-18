const { transactions: Transaction, users: User, categories: Category } = require('../models/index');
const { appError } = require('../utils/appError');
const { Op } = require('sequelize');
// const multer = require('multer');

// TODO: Get All Transactions
exports.getTransactions = async (req, res) => {
  let userId = null;
  if (req.user.role !== 'admin') {
    userId = { userId: req.user.id };
  }
  try {
    let transactions = await Transaction.findAll({
      where: userId,
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'fullName', 'email', 'phone', 'subscribe'],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        transactions,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get All Transaction
exports.getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        transaction,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Create a New Transaction
exports.createTransaction = async (req, res) => {
  if (req.file) req.body.attachment = req.file.filename;
  if (req.user.id) req.body.userId = req.user.id;
  try {
    const transaction = await Transaction.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        transaction,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Transaction
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const getTransaction = await Transaction.findByPk(req.params.id);

    if (transaction > 0 && req.body.status !== undefined) {
      const user = await User.update(
        { subscribe: req.body.status },
        {
          where: {
            id: getTransaction.userId,
          },
        }
      );

      res.status(200).json({
        status: 'success',
        data: {
          transaction: getTransaction,
        },
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Delete Transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (transaction > 0) {
      res.status(200).json({
        status: 'success',
        message: `Data with id: ${req.params.id} has been deleted successfully`,
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.checkExpired = async (req, res, next) => {
  try {
    const today = new Date();
    const transaction = await Transaction.update(
      { subscribe: false },
      {
        where: {
          dueDate: {
            [Op.lte]: today,
          },
        },
      }
    );

    if (transaction > 0) {
      res.status(200).json({
        status: 'success',
        message: `${transaction} Data(s) has been updated`,
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};
