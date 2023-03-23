const seedUsers = require('./users');
const seedPosts = require('./posts');
const seedComments = require('./comments');

const sequelize = require('../../config/connection');

const seedingProcess = {
  sequelize_sync: async function(){
    await sequelize.sync({ force: true });
  },
  seed_users: async function(){
    await seedUsers();
  },
  seed_posts: async function(){
    await seedPosts();
  },
  seed_comments: async function(){
    await seedComments();
  },
}

const seedAll = async () => {
  for (const [key, func] of Object.entries(seedingProcess)) {
    await func()
  }
};

module.exports = seedAll
