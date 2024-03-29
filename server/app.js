const { appError } = require('./utils/appError');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const cron = require('node-cron');
const axios = require('axios');

const express = require('express');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cron jobs in every 23:59
const task = cron.schedule('59 23 * * *', function () {
  const URL = 'http://localhost:5000/api/v1/transactions/expires';

  (async () => {
    try {
      await axios.patch(URL);
    } catch (err) {
      console.log(err.message);
    }
  })();
});

task.start();

app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const filmRouter = require('./routes/filmRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const episodeRouter = require('./routes/episodeRoutes');

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/films', filmRouter);
app.use('/api/v1/transactions', transactionRouter);
app.use('/api/v1/episodes', episodeRouter);

// Handling unhandled routes
app.all('*', (req, res, next) => {
  return appError(res, 404, `Can't find route ${req.originalUrl}`);
});

module.exports = app;
