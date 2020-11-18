const { categories: Category, films: Film } = require('../models/index');
const { appError } = require('../utils/appError');

// TODO: Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Create Category
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (category > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          category: {
            id: req.params.id,
            name: req.body.name,
          },
        },
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (category > 0) {
      res.status(200).json({
        status: 'success',
        message: `Data with id: ${req.params.id} has been deleted successfully`,
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

// TODO: Get Films by Category
exports.getFilmsByCategory = async (req, res) => {
  const limit = req.query.limit ? { limit: Number(req.query.limit) } : false;
  const page = req.query.page
    ? { page: Number(req.query.page) > 0 ? Number(req.query.page) : 1 }
    : false;
  const offset = page ? { offset: (Number(req.query.page) - 1) * Number(req.query.limit) } : false;
  const order = req.query.order ? req.query.order.split(':') : false;

  try {
    const filmsByCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Film,
          as: 'films',
          attributes: ['id', 'title', 'thumbnailFilm', 'year', 'description'],
          ...limit,
          ...offset,
          order: [order ? [order[0], order[1]] : ['id', 'DESC']],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        category: filmsByCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};
