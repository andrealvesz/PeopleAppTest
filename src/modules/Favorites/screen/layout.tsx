import React, { useCallback } from 'react';
import { View } from 'react-native';
import Screen from '../../../components/Screen';
import Shelf from '../../../components/Shelf';
import * as S from './styles';

import { CardsState } from '../../../redux/features/cards-slice';

interface ActionsProps {
  handleRemoveFavourite(id: string): void;
}
interface DataProps {
  favoritePhotos: CardsState[];
}

export const Layout = ({
  actions,
  data,
}: {
  actions: ActionsProps;
  data: DataProps;
}) => {
  const { favoritePhotos } = data;

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
        <S.EmptyText>Não existem favoritos</S.EmptyText>
      </S.EmptyWrapper>
    ),
    [],
  );

  const renderItem = useCallback(({ item }) => {
    return (
      <Shelf
        data={item}
        handleRemoveFavourite={id => actions.handleRemoveFavourite(id)}
        handleFavourited={() => null}
      />
    );
  }, []);

  return (
    <Screen>
      <S.HeaderText>Favoritos</S.HeaderText>

      <View
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 15,
        }}>
        <S.ProductList
          data={favoritePhotos}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={2}
          initialNumToRender={14}
          maxToRenderPerBatch={14}
          windowSize={600}
          getItemLayout={getItemLayout}
        />
      </View>
    </Screen>
  );
};
