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

describe('User API', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/api/users'); // Prefixed with /api
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users') // Prefixed with /api
      .send({
        username: 'testuser',
        email: 'testuser@example.com'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get a single user', async () => {
    const user = await request(app)
      .post('/api/users') // Prefixed with /api
      .send({
        username: 'testuser',
        email: 'testuser@example.com'
      });

    const res = await request(app).get(`/api/users/${user.body.id}`); // Prefixed with /api
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', user.body.id);
  });

  it('should delete a user', async () => {
    const user = await request(app)
      .post('/api/users') // Prefixed with /api
      .send({
        username: 'testuser',
        email: 'testuser@example.com'
      });

    const res = await request(app).delete(`/api/users/${user.body.id}`); // Prefixed with /api
    expect(res.statusCode).toBe(204);
  });
});
