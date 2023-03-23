const router = require('express').Router();
const auth = require('./auth');
const comment = require('./comment');
const post = require('./post');

router.use('/auth', auth);
router.use('/comment', comment);
router.use('/post', post);

module.exports = router;
