import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { addToken } from '../../../redux/features';
import { useAppDispatch } from '../../../redux/hooks';
import {
  ERROR_SOCIAL_LOGIN,
  PLAY_SERVICES_NOT_AVAILABLE,
} from '../../../utils/alerts';
import { Layout } from './layout';
import { resetStateCard } from '../../../redux/features/cards-slice';

type GoogleError = {
  code: keyof typeof statusCodes;
};

export const Login: React.FC = () => {
  const { navigate, reset } = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleVisitant = () => {
    dispatch(
      addToken({
        token: '',
      }),
    );
    dispatch(resetStateCard([]));

    navigate('AppNavigation');
  };

  const handleGoogleSignin = useCallback(async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const { accessToken } = await GoogleSignin.getTokens();

      dispatch(resetStateCard([]));
      dispatch(
        addToken({
          token: accessToken,
        }),
      );

      reset({
        index: 0,
        routes: [{ name: 'AppNavigation' }],
      });
    } catch (error) {
      console.log('🚀 ~ handleGoogleSignin ~ error:', error);
      const { code } = error as GoogleError;
      if (code === 'PLAY_SERVICES_NOT_AVAILABLE') {
        const { title, message } = PLAY_SERVICES_NOT_AVAILABLE;
        Alert.alert(title, message);
      } else {
        Alert.alert(ERROR_SOCIAL_LOGIN.title, ERROR_SOCIAL_LOGIN.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Layout
      handleVisitant={handleVisitant}
      handleSocialLogin={handleGoogleSignin}
      loading={loading}
    />
  );
};
