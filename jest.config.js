module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/fileMock.ts"
  }
};
