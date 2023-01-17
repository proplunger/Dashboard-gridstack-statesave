const { User } = require('../models');

const userData = [
  {
    first_name: 'Liz',
    last_name: 'Mackle',
    email: 'liz.mackle@hotmail.com',
    password: 'password12345',
  },
  {
    first_name: 'Kyle',
    last_name: 'Bario',
    email: 'kyle.bario@hotmail.com',
    password: 'password12345',
  },
  {
    first_name: 'Jackson',
    last_name: 'Wray',
    email: 'jackson_wrayhotmail.com',
    password: 'password12345',
  },
  {
    first_name: 'Jane',
    last_name: 'Stephenson',
    email: 'jane-stephenson@hotmail.com',
    password: 'password12345',
  },
  {
    first_name: 'John',
    last_name: 'Jones',
    email: 'john_jones@hotmail.com',
    password: 'password12345',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
