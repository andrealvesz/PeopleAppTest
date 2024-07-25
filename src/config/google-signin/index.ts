import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  iosClientId: Config.GOOGLE_SIGNIN_IOS_CLIENT_ID,
  webClientId: Config.GOOGLE_SIGNIN_WEB_CLIENT_ID,
  scopes: ['profile', 'email'],
});
