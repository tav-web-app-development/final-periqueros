module.exports = {
  testEnvironment: 'node',
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: [
    '**/src/tests/**/*.test.js',
    '**/src/tests/**/*.spec.js'
  ],
  testTimeout: 30000 // 30 seconds
};
