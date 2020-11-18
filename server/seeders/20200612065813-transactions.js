'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', [
      {
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        userId: 1,
        attachment: 'bca.jpg',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        userId: 2,
        attachment: 'mandiri.jpg',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        userId: 3,
        attachment: 'bni.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};
