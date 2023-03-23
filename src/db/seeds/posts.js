const { Post } = require('../../models');


const postData = [
    {
        title: 'Beauty',
        content: 'What a glorious world we live in?',
        user_id: 1,
    },
    {
        title: 'ChatGPT',
        content: 'A.I. or Skynet. What is OpenAI?',
        user_id: 1,
    },
    {
        title: 'What is up!',
        content: 'Time to get up and moving!',
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;