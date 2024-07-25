import '~/__mocks__/@react-native-community/google-signin';

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform',
  );
  return {
    ...platform,
    constants: {
      ...platform.constants,
      reactNativeVersion: {
        major: 0,
        minor: 65,
        patch: 1,
      },
    },
  };
});
