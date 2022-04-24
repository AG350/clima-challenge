const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

describe('GET /v1/location',() => {

    it('If no receive client\'s IP, should respond 404 status code', async () => {
        const response = await request.get('/v1/location')
                                .expect('Content-Type', /json/);;
        
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('location not found')
    });

    it('Should recive the client IP and respond with a 200 status code and json body', async () => {
        const response = await request.get('/v1/location')
                                .set('Accept','application/json')
                                .set('X-Forwarded-For','200.127.228.20')
                                .expect('Content-Type', /json/);
        
        expect(response.status).toBe(200);
    });
});

describe('GET /v1/current',() => {

    it('If no receive client\'s IP, should respond 404 status code', async () => {
        const response = await request.get('/v1/current');
        
        expect(response.status).toBe(404);
    });

    it('Should recive the client IP and respond with a 200 status code and json body', async () => {
        const response = await request.get('/v1/current')
                                .set('Accept','application/json')
                                .set('X-Forwarded-For','200.127.228.20')
                                .expect('Content-Type', /json/);
        
        expect(response.status).toBe(200);
    });

    it('Receiving an optional param that matches with a city name should respond with a 200 status code and json body', async () => {
        const response = await request.get('/v1/current/posadas')
            .set('Accept','application/json')
            .expect('Content-Type', /json/);
        
        expect(response.status).toBe(200);
    });
    
    it('Receiving an optional parameter that doesn\'t match a city name should respond with a 404 and error message', async () => {
        const response = await request.get('/v1/current/tierra del fuego')
                                    .set('Accept','application/json')
                                    .expect('Content-Type', /json/);
        
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('City not found');
    });
});

describe('GET /v1/forecast',() => {

    it('If no receive client\'s IP, should respond 404 status code', async () => {
        const response = await request.get('/v1/forecast');
        
        expect(response.status).toBe(404);
    });

    it('Should recive the client IP and respond with a 200 status code and json body', async () => {
        const response = await request.get('/v1/forecast')
                                .set('Accept','application/json')
                                .set('X-Forwarded-For','200.127.228.20')
                                .expect('Content-Type', /json/);
        
        expect(response.status).toBe(200);
    });

    it('Receiving an optional param that matches with a city name should respond with a 200 status code and json body', async () => {
        const response = await request.get('/v1/forecast/posadas')
            .set('Accept','application/json')
            .expect('Content-Type', /json/);
        
        expect(response.status).toBe(200);
    });

    it('Receiving an optional parameter that doesn\'t match a city name should respond with a 404 status code and an error message', async () => {
        const response = await request.get('/v1/forecast/tierra del fuego')
                                    .set('Accept','application/json')
                                    .expect('Content-Type', /json/);
        
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('City not found');
    });
});

describe('GET endpoint that does not exist',() => {

    it('Try a nonexistent endpoint shoud respond a 404 status and Not Found message', async () => {
        const response = await request.get('/testendpoint')
                                    .expect('Content-Type', /json/);;
        
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Not Found')
    });
});