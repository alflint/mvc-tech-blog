const { Comment } = require('../../models');

const commentData = [
  {
    text: 'Great post!',
    user_id: 3,
    post_id: 1,
  },
  {
    text: 'Thanks for sharing!',
    user_id: 2,
    post_id: 1,
  },
  {
    text: 'So incredible!',
    user_id: 1,
    post_id: 1,
  },
  {
    text: 'This moved me!',
    user_id: 4,
    post_id: 1,
  },
  {
    text: 'I love this blog',
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
