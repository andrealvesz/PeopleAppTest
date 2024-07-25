import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import RNFImage from 'react-native-fast-image';
import { metrics } from '../../utils/metrics';

export const Wrapper = styled.TouchableOpacity`
  width: 46%;
  height: 100%;
  border-color: #f1f1f1;
  border-width: 1.5px;
  border-radius: 8px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 10px;
  padding-horizontal: 10px;
`;

export const Image = styled(RNFImage).attrs({
  resizeMode: RNFImage.resizeMode.cover,
})`
  width: 100%;
  height: ${metrics.px(150)}px;
`;

export const ButtonFavorited = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: Platform.OS === 'ios' ? 'tail' : 'clip',
})`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.fonts.regular};
    letter-spacing: 1px;
    font-size: 12px;
    margin-left: 10px;
  `}
`;
