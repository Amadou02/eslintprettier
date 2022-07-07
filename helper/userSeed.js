require('dotenv').config();
const getDbInstance = require('./database');
const User = require('./../models/users');

const users = [
    {
        lastname: 'DOE',
        firstname: 'John',
        birthdate: '1970-01-01',
        password: '$2a$10$2ufc/nN25Z/hFIEcexdX9uQyleAcAL71qJGAo0dCiNjhDT1tUoOmy',
        email: 'johndoe@gmail.com',
        phone: '0600000000',
    },
    {
        lastname: 'DOE',
        firstname: 'Jane',
        birthdate: '1970-01-01',
        password: '$2a$10$2ufc/nN25Z/hFIEcexdX9uQyleAcAL71qJGAo0dCiNjhDT1tUoOmy',
        email: 'janedoe@gmail.com',
        phone: '0600000000',
    },
    {
        lastname: 'Loper',
        firstname: 'Dev',
        birthdate: '1970-01-01',
        password: '$2a$10$2ufc/nN25Z/hFIEcexdX9uQyleAcAL71qJGAo0dCiNjhDT1tUoOmy',
        email: 'devloper@gmail.com',
        phone: '0600000000',
    },
];

// connexion à la bdd

const runSeed = async () => {
    const db = await getDbInstance();
    await User.deleteMany({});
    await User.insertMany(users);

    db.connection.close();
};

runSeed();
