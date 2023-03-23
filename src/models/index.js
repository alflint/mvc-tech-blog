const Post = require('./post');
const Comment = require('./comment');
const User = require('./user');

Post.belongsTo(User);
Comment.belongsTo(User);

module.exports = {
  Post,
  Comment,
  User,
};
