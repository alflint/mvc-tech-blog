const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all the posts created by that user
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });

    // Serialize the data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      posts,
      has_posts: posts.length > 0,
      logged_in: req.session.logged_in,
      username: req.session.username,
      fullname: req.session.fullname,
      initials: req.session.initials,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router
