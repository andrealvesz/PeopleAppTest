import React from 'react';
import { ButtonLogin } from '../../../components/ButtonLogin';
import Screen from '../../../components/Screen';
import * as S from './styles';

type LayoutProps = {
  loading?: boolean;
  handleVisitant(): void;
  handleSocialLogin(): void;
};

export const Layout = ({
  handleVisitant,
  handleSocialLogin,
  loading,
}: LayoutProps) => {
  return (
    <Screen>
      <S.LogoView>
        <S.LogoImage source={require('../../../assets/images/logo.png')} />
      </S.LogoView>
      <ButtonLogin
        onPress={handleSocialLogin}
        value="Acessar com Google"
        isSocialLogin
        disabled={loading}
        loading={loading}
      />
      <ButtonLogin onPress={handleVisitant} value="Entrar como visitante" />
    </Screen>
  );
};
