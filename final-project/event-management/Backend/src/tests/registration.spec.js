jest.setTimeout(30000); // 30 seconds

const request = require('supertest');
const { app, sequelize } = require('../index');

let server;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  server = app.listen(3001); // Different port for testing
});

afterAll(async () => {
  await server.close();
  await sequelize.close();
});

describe('Registration API', () => {
  it('should get all registrations', async () => {
    const res = await request(app).get('/api/registrations'); // Prefixed with /api
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new registration', async () => {
    const user = await request(app)
      .post('/api/users') // Prefixed with /api
      .send({
        username: 'testuser',
        email: 'testuser@example.com'
      });

    const event = await request(app)
      .post('/api/events') // Prefixed with /api
      .send({
        name: 'testevent',
        date: '2023-01-01T00:00:00.000Z',
        location: 'testlocation'
      });

    const res = await request(app)
      .post('/api/registrations') // Prefixed with /api
      .send({
        userId: user.body.id,
        eventId: event.body.id
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get a single registration', async () => {
    const user = await request(app)
      .post('/api/users') // Prefixed with /api
      .send({
        username: 'testuser',
        email: 'testuser@example.com'
      });

    const event = await request(app)
      .post('/api/events') // Prefixed with /api
      .send({
        name: 'testevent',
        date: '2023-01-01T00:00:00.000Z',
        location: 'testlocation'
      });

    const registration = await request(app)
      .post('/api/registrations') // Prefixed with /api
      .send({
        userId: user.body.id,
        eventId: event.body.id
      });

    const res = await request(app).get(`/api/registrations/${registration.body.id}`); // Prefixed with /api
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', registration.body.id);
  });

  it('should delete a registration', async () => {
    const user = await request(app)
      .post('/api/users') // Prefixed with /api
      .send({
        username: 'testuser',
        email: 'testuser@example.com'
      });

    const event = await request(app)
      .post('/api/events') // Prefixed with /api
      .send({
        name: 'testevent',
        date: '2023-01-01T00:00:00.000Z',
        location: 'testlocation'
      });

    const registration = await request(app)
      .post('/api/registrations') // Prefixed with /api
      .send({
        userId: user.body.id,
        eventId: event.body.id
      });

    const res = await request(app).delete(`/api/registrations/${registration.body.id}`); // Prefixed with /api
    expect(res.statusCode).toBe(204);
  });
});

