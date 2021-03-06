// seeders/some-tags.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          name: "Cocktails",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jazz",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oldenhof",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "whisky",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cocktailbar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
