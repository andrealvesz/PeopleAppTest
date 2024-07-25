import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import RNFImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

const { contain } = RNFImage.resizeMode;

type ListItemProps = {
  type: 'default' | 'brand' | 'promotional';
};

const imageModifiers = {
  default: () => css`
    height: ${width}px;
    width: ${width - 24}px;
  `,
  brand: () => css`
    height: 300px;
    width: ${width * 0.45}px;
  `,
  promotional: () => css`
    height: 350px;
    width: ${width - 24}px;
  `,
};

export const ListItemContainer = styled.View<ListItemProps>`
  align-self: center;
  flex-direction: row;
  justify-content: center;
  width: ${width - 24}px;

  ${({ type }) =>
    type === 'brand' &&
    css`
      justify-content: space-between;
    `};
`;

export const ListItem = styled.View``;

export const ListButton = styled(TouchableNativeFeedback)``;

export const ListImage = styled(RNFImage).attrs(() => ({
  resizeMode: contain,
}))<ListItemProps>`
  ${({ type }) => imageModifiers[type]};
`;
