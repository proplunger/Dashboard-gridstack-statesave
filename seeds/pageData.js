const { Page } = require('../models');

const pageData = [
  {
    title: 'My First Page',
    user_id: '1',
  },
  {
    title: 'Coding Newsletter',
    user_id: '2',
  },
];

const seedPage = () => Page.bulkCreate(pageData);

module.exports = seedPage;
