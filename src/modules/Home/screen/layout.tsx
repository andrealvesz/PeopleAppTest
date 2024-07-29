import React, { useCallback } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';
import Screen from '../../../components/Screen';
import Shelf from '../../../components/Shelf';
import { useAppSelector } from '../../../redux/hooks';
import * as S from './styles';
import { User } from '../../../common/models/users';

interface ActionsProps {
  onEndReached(): void;
  onRefresh(): void;
  handleFavourited(id: string): void;
  handleRemoveFavourite(id: string): void;
}

interface DataProps {
  loading: boolean;
  userToken?: string;
  user?: User;
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

  const { loading, user } = data;

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
      <S.HeaderView>
        {user &&
          <S.HeaderAvatarProfileView>
            <S.HeaderAvatarProfileImage source={{ uri: user?.photo }} />
          </S.HeaderAvatarProfileView>
        }
        <S.HeaderText>
          {user
            ? `${user.name}`
            : `VISITANTE - ${card.length} CARDS`}
        </S.HeaderText>
      </S.HeaderView>

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
