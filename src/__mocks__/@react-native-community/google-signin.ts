import { NativeModules } from 'react-native';

const signInReturn = {
  name: 'Usuário Teste',
  email: 'usueario.teste@epocacosmeticos.com.br',
};

const getTokensReturn = {
  idToken: 'idToken',
  accessToken: 'accessToken',
};

jest.mock('@react-native-community/google-signin', () => {
  const originalModule = jest.requireActual(
    '@react-native-community/google-signin',
  );

  return {
    __esModule: true,
    ...originalModule,
    hasPlayServices: () => Promise.resolve(true),
    configure: () => Promise.resolve(),
    signIn: () => Promise.resolve(signInReturn),
    getTokens: () => Promise.resolve(getTokensReturn),
  };
});

NativeModules.RNGoogleSignin = {
  BUTTON_SIZE_ICON: 0,
  BUTTON_SIZE_STANDARD: 0,
  BUTTON_SIZE_WIDE: 0,
  BUTTON_COLOR_AUTO: 0,
  BUTTON_COLOR_LIGHT: 0,
  BUTTON_COLOR_DARK: 0,
  SIGN_IN_CANCELLED: '0',
  IN_PROGRESS: '1',
  PLAY_SERVICES_NOT_AVAILABLE: '2',
  SIGN_IN_REQUIRED: '3',
  configure: jest.fn(),
  signIn: jest.fn().mockResolvedValue(signInReturn),
  getTokens: jest.fn().mockResolvedValue(getTokensReturn),
};

export { NativeModules };
