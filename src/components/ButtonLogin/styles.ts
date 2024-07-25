import styled, { css } from 'styled-components/native';

type ButtonAreaProps = {
  isSocialLogin?: boolean;
};

export const ButtonArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonAreaProps>`
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.light['lime-300']};
  width: 200px;
  padding-vertical: 10px;
  border-radius: 8px;
  ${({ isSocialLogin }) =>
    isSocialLogin &&
    css`
      margin-bottom: 10px;
    `}
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
