module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {  // OPTIONAL, default is tsconfig.spec.json
    'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json'
      }
  },
  // coverageDirectory: 'jest-coverage',  // OPTIONAL, default is "coverage" directory
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};