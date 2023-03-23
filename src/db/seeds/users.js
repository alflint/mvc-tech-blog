const { User } = require('../../models');


const userData = [
    {
        username: 'jd-1',
        firstName: "John",
        lastName: "Doe",
        password: 'password1',
    },
    {
        username: 'pluto',
        firstName: "Yohan",
        lastName: "Bach",
        password: 'pass',
    },
    {
        username: 'billm',
        firstName: "Bill",
        lastName: "Murray",
        password: 'pass',
    },
    {
        username: 'theone',
        firstName: "Kanye",
        lastName: "West",
        password: 'pass',
    },
    {
        username: 'dansmith',
        firstName: "Dan",
        lastName: "Smith",
        password: 'pass',
    },
    {
        username: 'mariahcarey',
        firstName: "Mariah",
        lastName: "Carey",
        password: 'ssap',
    },
];

const seedUsers = async () => User.bulkCreate(userData, {individualHooks: true, returning: true,});

module.exports = seedUsers;