const fileExts = ["ts", "tsx", "js", "jsx", "mjs"];

module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  // testRegex: "((\\.|/*.)(spec))\\.js?$",
  testMatch: [
    `<rootDir>/src/**/?(*.)spec.{${fileExts.join(',')}}`
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/build',
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: fileExts,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    `<rootDir>/src/**/*.{${fileExts.join(',')}}`,
    '!<rootDir>/src/**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    '/dist/',
    '/build/',
    '/node_modules/'
  ],
};