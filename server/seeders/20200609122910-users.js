'use strict';

// password : test123

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullName: 'Violet Evergarden',
        email: 'violet@gmail.com',
        password: '$2a$10$Y2cje.KF5COhcCPCuu.8iOhLO6G7WXhwWyhTsDE.Dgy2TBNI92YZG',
        gender: 'female',
        phone: '083896831233',
        address: 'Jln. Marvel Universe, RT.21 RW.69',
        subscribe: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: 'Lucius Artorius',
        email: 'lucius@gmail.com',
        password: '$2a$10$Y2cje.KF5COhcCPCuu.8iOhLO6G7WXhwWyhTsDE.Dgy2TBNI92YZG',
        gender: 'male',
        phone: '083896831232',
        address: 'Jln. Marvel Universe, RT.30 RW.66',
        subscribe: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: 'Super Admin',
        email: 'admin@dumbflix.com',
        password: '$2a$10$Y2cje.KF5COhcCPCuu.8iOhLO6G7WXhwWyhTsDE.Dgy2TBNI92YZG',
        gender: 'male',
        phone: '083896831231',
        address: 'Jln. Marvel Universe, RT.30 RW.80',
        subscribe: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
