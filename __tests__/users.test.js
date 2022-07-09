/* eslint-disable no-underscore-dangle */
const request = require('supertest');
require('dotenv').config();
const mongoose = require('mongoose');

const getDbInstance = require('../helper/database');

const app = require('../app');

const usersFaker = require('../constants/usersFaker');

const User = require('../models/users');

beforeAll(async () => {
    jest.setTimeout(100000);
    const db = await getDbInstance();
    await db.connection.close();

    await mongoose.connect(process.env.DB_TEST_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await User.insertMany(usersFaker);
});

afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
});

describe('Users CRUD feature', () => {
    let id;
    // let token;
    it('should return users', async () => {
        const res = await request(app).get('/users');
        expect(res.status).toEqual(200);

        id = res.body[0]._id;
    });

    it('should return one user', async () => {
        const res = await request(app).get(`/users/${id}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('lastname', 'DOE');
        expect(res.body).toHaveProperty('firstname', 'John');
    });

    it('should create new User at POST /users', async () => {
        const res = await request(app).post('/users').send({
            lastname: 'Personne',
            firstname: 'Nicolas',
            birthdate: '1970-01-01',
            password: 'secret',
            email: 'nicolas.personne@example.com',
            phone: '0600000000',
        });
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    it('should update User', async () => {
        const res = await request(app).patch(`/users/${id}`).send({
            lastname: 'Dupont',
        });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('lastname', 'Dupont');
    });

    it('should delete one user', async () => {
        const res = await request(app).delete(`/users/${id}`);
        expect(res.status).toEqual(200);
    });
});
