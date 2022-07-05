const request = require('supertest');

const app = require('../app');

describe('Users CRUD feature', () => {
    it('should return users', async () => {
        const res = await request(app).get('/users');
        expect(res.status).toEqual(200);
    });

    it('should return one user', async () => {
        const res = await request(app).get('/users/1');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            id: 1,
            lastname: 'DOE',
            firstname: 'John',
            birthdate: '1970-01-01',
        });
        expect(res.body).toHaveProperty('lastname', 'DOE');
        expect(res.body).toHaveProperty('firstname', 'John');
    });

    it('should delete one user', async () => {
        const res = await request(app).delete('/users/1');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveLength(2);
    });

    it('should create new User', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                id: Math.floor(Math.random() * 99),
                lastname: 'Personne',
                firstname: 'Nicolas',
                birthdate: '1970-01-01',
            });
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should update User', async () => {
        const res = await request(app).patch('/users/1').send({
            birthdate: '1991-01-01',
        });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('birthdate', '1991-01-01');
    });
});
