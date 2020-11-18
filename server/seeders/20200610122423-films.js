'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('films', [
      {
        title: 'The Witcher',
        thumbnailFilm: 'film1.png',
        year: 2019,
        categoryId: 1,
        description:
          'The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Touch',
        thumbnailFilm: 'film2.png',
        year: 2006,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Persona 3',
        thumbnailFilm: 'film3.png',
        year: 2016,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Game of Thrones',
        thumbnailFilm: 'film4.png',
        year: 2013,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Money Heist',
        thumbnailFilm: 'film5.png',
        year: 2017,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Arrow',
        thumbnailFilm: 'film6.png',
        year: 2012,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'You',
        thumbnailFilm: 'film7.png',
        year: 2018,
        categoryId: 1,
        description:
          'The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Castlevania',
        thumbnailFilm: 'film8.png',
        year: 2007,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The OA',
        thumbnailFilm: 'film9.png',
        year: 2017,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Locke & Key',
        thumbnailFilm: 'film10.png',
        year: 2015,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Reply 1998',
        thumbnailFilm: 'film11.png',
        year: 2013,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Panji Manusia Milenium',
        thumbnailFilm: 'film12.png',
        year: 2002,
        categoryId: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The God Father ',
        thumbnailFilm: 'film13.png',
        year: 1998,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Dark Knight ',
        thumbnailFilm: 'film14.png',
        year: 2006,
        categoryId: 2,
        description:
          'Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Avengers: End Game ',
        thumbnailFilm: 'film15.png',
        year: 2016,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Joker ',
        thumbnailFilm: 'film16.png',
        year: 2019,
        categoryId: 2,
        description:
          'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. Arthur Fleck works as a clown and is an aspiring stand-up comic.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ghisaengchung ',
        thumbnailFilm: 'film17.png',
        year: 2017,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Chernobyl ',
        thumbnailFilm: 'film18.png',
        year: 2012,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Serigala Terakhir',
        thumbnailFilm: 'film19.png',
        year: 2004,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Grave of The Fireflies',
        thumbnailFilm: 'film20.png',
        year: 2006,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'My Neighboor Totoro',
        thumbnailFilm: 'film21.png',
        year: 2016,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Quite Place: Part II',
        thumbnailFilm: 'film22.png',
        year: 2019,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Frozen II',
        thumbnailFilm: 'film23.png',
        year: 2019,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Suicide Squad',
        thumbnailFilm: 'film24.png',
        year: 2016,
        categoryId: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat dolore rerum porro at accusamus a Ab autem repudiandae commodi quisquam dignissimos doloribus alias eligendi, nulla libero quod ad nihil.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('films', null, {});
  },
};
