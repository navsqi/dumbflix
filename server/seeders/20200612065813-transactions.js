'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', [
      {
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 600)),
        userId: 1,
        attachment: 'bca.jpg',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 600)),
        userId: 2,
        attachment: 'mandiri.jpg',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        startDate: new Date(),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 600)),
        userId: 3,
        attachment: 'bni.jpg',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};
