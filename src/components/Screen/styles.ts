import styled from 'styled-components/native';
import {
    SafeAreaView
  } from 'react-native-safe-area-context';
  

export const Screen = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.light.white};
`;
