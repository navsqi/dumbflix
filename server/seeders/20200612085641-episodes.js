'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'The Witcher: Episode 1',
        thumbnailEp: 'episode-1.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Witcher: Episode 2',
        thumbnailEp: 'episode-2.png',
        linkEp: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        filmId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Witcher: Episode 3',
        thumbnailEp: 'episode-3.png',
        linkEp: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        filmId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Touch',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Persona 3',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Game of Thrones',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Money Heist',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Arrow',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'You',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Castlevania',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The OA',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Locke & Key',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Reply 1998',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Panji Manusia Milenium',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The God Father',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Dark Knight ',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Avengers: End Game ',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Joker',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ghisaengchung',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Chernobyl ',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Serigala Terakhir',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Grave of The Fireflies',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'My Neighboor Totoro',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Quite Place: Part II',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Frozen II',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Suicide Squad',
        thumbnailEp: 'episode-2.png',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
