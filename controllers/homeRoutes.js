const router = require('express').Router();
const { User, Page } = require('../models');
const withAuth = require('../utils/auth');

// Get homepage handlebar, blogs, navbar and login.

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Page,
          attributes: {
            include: ['title', 'createdAt', 'id'],
            exclude: ['updatedAt', 'user_id'],
          },
        },
      ],
    });

    const pagesData = userData.pages.map((page) => page.get({ plain: true }));
    pagesData.map((page) => {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const date = new Date(page.createdAt);
      let lets;
      switch (date.getDate().toString()[date.getDate().toString().length - 1]) {
        case 1:
          lets = 'st';
        case 2:
          lets = 'nd';
        case 3:
          lets = 'rd';

        default:
          lets = 'th';
      }
      page.createdAt =
        date.getDate() +
        lets +
        ' ' +
        months[date.getMonth()] +
        ', ' +
        date.getFullYear();
      return page;
    });

    res.render('dashboard', {
      pages: pagesData,
      name: req.session.name,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, (req, res) => {
  res.redirect('/dashboard');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup', { logged_in: req.session.logged_in });
});

router.get('/create', withAuth, (req, res) => {
  res.render('edit', { logged_in: req.session.logged_in });
});

router.get('/pageview', withAuth, async (req, res) => {
  try {
    res.render('pageview', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
