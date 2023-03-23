const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Find all the posts in the database and pass them to the handlebars template
    // const postData = await Post.findAll();
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName'],
        },
      ],
    });
    const posts = postData.map((post) => {
      let posted_date = new Date(post.createdAt)
      return {
        id: post.id,
        title: post.title,
        user: `${post.user.firstName} ${post.user.lastName}`,
        date: `${posted_date.getMonth() + 1}/${posted_date.getDate()}/${posted_date.getFullYear()}`, 
        trimmed_content: `${post.content.slice(0,20)}...`
      }
    });
    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username,
      initials: req.session.initials,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
})

module.exports = router
