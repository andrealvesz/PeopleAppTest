import React from 'react';
import * as S from './styles';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

type ButtonProps = {
  value: string;
  onPress(): void;
  isSocialLogin?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

export const ButtonLogin = ({
  value,
  onPress,
  isSocialLogin = false,
  disabled = false,
  loading = false,
}: ButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <S.ButtonArea
      onPress={onPress}
      isSocialLogin={isSocialLogin}
      disabled={disabled}>
      {loading && <ActivityIndicator color={theme.colors.light.white} />}
      {!loading && <S.ButtonText>{value}</S.ButtonText>}
    </S.ButtonArea>
  );
};
