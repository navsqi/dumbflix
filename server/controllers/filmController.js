const { films: Film, categories: Category, episodes: Episode } = require('../models/index');
const { appError } = require('../utils/appError');

// TODO: Get All Films
exports.getFilms = async (req, res) => {
  const limit = req.query.limit ? { limit: Number(req.query.limit) } : false;
  const page = req.query.page
    ? { page: Number(req.query.page) > 0 ? Number(req.query.page) : 1 }
    : false;
  const offset = page ? { offset: (Number(req.query.page) - 1) * Number(req.query.limit) } : false;
  const order = req.query.order ? req.query.order.split(':') : false;

  try {
    const films = await Film.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
      ...limit,
      ...offset,
      order: [order ? [order[0], order[1]] : ['id', 'DESC']],
      attributes: {
        exclude: ['categoryId', 'createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        films,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get All Film
exports.getFilm = async (req, res) => {
  try {
    const film = await Film.findOne({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Episode,
          as: 'episodes',
          attributes: {
            exclude: ['filmId', 'createdAt', 'updatedAt'],
          },
        },
      ],
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ['categoryId', 'createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        film,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Create a New Film
exports.createFilm = async (req, res) => {
  if (req.file) req.body.thumbnailFilm = req.file.filename;
  try {
    const film = await Film.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        film,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Category
exports.updateFilm = async (req, res) => {
  try {
    const film = await Film.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (film > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          film: await Film.findByPk(req.params.id, {
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
          }),
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

// TODO: Delete User
exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (film > 0) {
      res.status(200).json({
        status: 'success',
        message: `Data with id: ${req.params.id} has been deleted successfully`,
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

// TODO: Get Episodes by Film
exports.getEpisodesByFilm = async (req, res) => {
  try {
    const episodesByFilm = await Film.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Episode,
          as: 'episodes',
          attributes: ['id', 'title', 'thumbnailEp', 'linkEp'],
        },
      ],
      attributes: {
        exclude: ['categoryId', 'createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        film: episodesByFilm,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get Episode by Film
exports.getEpisodeByFilm = async (req, res) => {
  try {
    const episodesByFilm = await Episode.findOne({
      where: {
        id: req.params.idEp,
      },
      include: [
        {
          model: Film,
          as: 'film',
          attributes: ['id', 'title', 'thumbnailFilm', 'year', 'categoryId', 'description'],
          where: {
            id: req.params.idFilm,
          },
        },
      ],
      attributes: {
        exclude: ['filmId', 'createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        episode: episodesByFilm,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};
