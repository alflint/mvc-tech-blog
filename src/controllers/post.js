const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username' ,'firstName', 'lastName'],
        },
      ],
    });
    let posted_date = new Date(postData.createdAt)
    const post = {
      id: postData.id,
      title: postData.title,
      user: `${postData.user.firstName} ${postData.user.lastName}`,
      date: `${posted_date.getMonth() + 1}/${posted_date.getDate()}/${posted_date.getFullYear()}`,
      content: postData.content
    }

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName'],
        },
      ],
    });


    const comments = commentData.map((comment) => {
      let posted_date = new Date(comment.createdAt)
      return {
        id: comment.id,
        user: `${comment.user.firstName} ${comment.user.lastName}`,
        date: `${posted_date.getMonth() + 1}/${posted_date.getDate()}/${posted_date.getFullYear()}`,
        text: comment.text,
        is_my_comment: comment.user_id === req.session.user_id
      }
    });

    res.render('post', {
      post,
      comments,
      logged_in: req.session.logged_in,
      username: req.session.username,
      initials: req.session.initials,
      post_id: req.params.id,
      user_id: req.session.user_id

    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
})

module.exports = router
