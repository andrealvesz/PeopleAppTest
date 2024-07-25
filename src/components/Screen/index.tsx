import * as React from 'react';

import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

import * as S from './styles';

type ScreenProps = NativeSafeAreaViewProps & {
  title?: string;
  showBackButton?: boolean;
  showShippingRuler?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  handleBackToHome?: () => void;
};

const Screen = ({
  title,
  showBackButton = true,
  loading = false,
  children,
  handleBackToHome,
  ...props
}: ScreenProps): JSX.Element => (
  <S.Screen {...props}>
    {children}
  </S.Screen>
);

export default Screen;
