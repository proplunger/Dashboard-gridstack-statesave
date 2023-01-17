const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPage = require('./pageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPage();

  process.exit(0);
};

seedAll();
