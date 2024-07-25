import styled, { css } from 'styled-components/native';

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light['lime-950']};
  padding-vertical: 50px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color:  ${({ theme }) => theme.colors.light['lime-950']};
  background:  ${({ theme }) => theme.colors.light['lime-300']};
  width: 100%;
  text-align: center;
`;

export const ProductList = styled.FlatList.attrs({
  removeClippedSubviews: true,
  numColumns: 2,
  columnWrapperStyle: {
    marginBottom: 20,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  contentContainerStyle: { backgroundColor: '#FFF' },
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
