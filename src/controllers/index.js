const router = require('express').Router();

const homeController = require('./home');
const postController = require('./post');
const loginController = require('./login');
const dashboardController = require('./dashboard');
const apiController = require('./api');

router.use('/', homeController);
router.use('/posts', postController);
router.use('/login', loginController);
router.use('/dashboard', dashboardController);
router.use('/api', apiController);

module.exports = router;
