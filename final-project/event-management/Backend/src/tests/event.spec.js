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

describe('Event API', () => {
  it('should get all events', async () => {
    const res = await request(app).get('/api/events'); // Prefixed with /api
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new event', async () => {
    const res = await request(app)
      .post('/api/events') // Prefixed with /api
      .send({
        name: 'testevent',
        date: '2023-01-01T00:00:00.000Z',
        location: 'testlocation'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get a single event', async () => {
    const event = await request(app)
      .post('/api/events') // Prefixed with /api
      .send({
        name: 'testevent',
        date: '2023-01-01T00:00:00.000Z',
        location: 'testlocation'
      });

    const res = await request(app).get(`/api/events/${event.body.id}`); // Prefixed with /api
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', event.body.id);
  });

  it('should delete an event', async () => {
    const event = await request(app)
      .post('/api/events') // Prefixed with /api
      .send({
        name: 'testevent',
        date: '2023-01-01T00:00:00.000Z',
        location: 'testlocation'
      });

    const res = await request(app).delete(`/api/events/${event.body.id}`); // Prefixed with /api
    expect(res.statusCode).toBe(204);
  });
});
