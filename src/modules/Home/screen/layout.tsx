import React, { useCallback } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';
import Screen from '../../../components/Screen';
import Shelf from '../../../components/Shelf';
import { useAppSelector } from '../../../redux/hooks';
import * as S from './styles';

interface ActionsProps {
  onEndReached(): void;
  onRefresh(): void;
  handleFavourited(id: string): void;
  handleRemoveFavourite(id: string): void;
}
interface DataProps {
  loading: boolean;
  userToken?: string;
}

export const Layout = ({
  actions,
  data,
}: {
  actions: ActionsProps;
  data: DataProps;
}) => {
  const card = useAppSelector(state => state.card);

  const theme = useTheme();

  const { loading, userToken } = data;

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: 400,
      offset: 400 * index,
      index,
    }),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  const renderEmpty = useCallback(
    () => (
      <S.EmptyWrapper>
        <S.EmptyText>Nenhum produto encontrado.</S.EmptyText>
      </S.EmptyWrapper>
    ),
    [],
  );

  const renderItem = useCallback(({ item }) => {
    return (
      <Shelf
        data={item}
        handleFavourited={id => actions.handleFavourited(id)}
        handleRemoveFavourite={id => actions.handleRemoveFavourite(id)}
      />
    );
  }, []);

  return (
    <Screen>
      <S.HeaderText>
        {userToken
          ? `LOGADO - ${card.length} CARDS`
          : `VISITANTE - ${card.length} CARDS`}
      </S.HeaderText>

      <S.ProductList
        data={card}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: card.length > 4 ? 50 : 300,
        }}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              color={theme.colors.light['lime-950']}
              size="large"
              style={{ marginBottom: 50 }}
            />
          ) : null
        }
        onEndReached={actions.onEndReached}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={actions.onRefresh} />
        }
        initialNumToRender={6}
        getItemLayout={getItemLayout}
      />
    </Screen>
  );
};
