const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD4",
            email: "contato@apad.com",
            whatsapp: "4700000000",
            city: "Rio do Sul",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})

/**
 * DigitalOcean
 * Horoku
 * Deploy de Nodejs
 * Netlify
 * Gerando APK e IPA
 * Padrões de código ESLint, Prettier
 * Autenticação JWT
 * Styled Components
 * GitHub
 * LinkdIn
 */