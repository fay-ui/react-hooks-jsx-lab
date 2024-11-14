// src/setupTests.js
import '@testing-library/jest-dom';
// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // points to your setupTests.js file
  };
  