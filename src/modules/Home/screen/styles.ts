import styled, { css } from 'styled-components/native';

export const HeaderView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-vertical: 50px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.light['lime-950']};
  background: ${({ theme }) => theme.colors.light['lime-300']};
  width: 100%;
`;
export const HeaderAvatarProfileView = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.light['zinc-400']};
  margin-bottom: 10px;
`;

export const HeaderAvatarProfileImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
  border-radius: 40px;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light['lime-950']};
`;

export const ProductList = styled.FlatList.attrs({
  removeClippedSubviews: true,
  numColumns: 2,
  columnWrapperStyle: {
    marginBottom: 20,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
})``;

export const EmptyWrapper = styled.View`
  margin-top: 200px;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light['lime-950']};
    font-size: 16px;
  `}
`;
