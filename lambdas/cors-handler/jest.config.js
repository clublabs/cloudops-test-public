const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testEnvironment: 'node',
};
