// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const pageRoutes = require('./pageRoutes');
const pageComponentRoutes = require('./pageComponentRoutes');

router.use('/users', userRoutes);
router.use('/pages', pageRoutes);
router.use('/page-components', pageComponentRoutes);

module.exports = router;
