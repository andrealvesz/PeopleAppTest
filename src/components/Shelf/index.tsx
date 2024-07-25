import React from 'react';

import FFIcon from '../../assets/svg/favorite-filled.svg';
import FIcon from '../../assets/svg/favorite.svg';
import { CardsState } from '../../redux/features/cards-slice';
import { useAppSelector } from '../../redux/hooks';
import { svgProperties } from '../../utils/svg';
import * as S from './styles';

interface ShelfProps {
  data: CardsState;
  handleFavourited: (id: string) => void;
  handleRemoveFavourite(id: string): void;
}

const Shelf = ({
  data,
  handleFavourited,
  handleRemoveFavourite,
}: ShelfProps): JSX.Element => {
  const favorites = useAppSelector(state => state.favorite);
  const { alternative_slugs, urls, id } = data;

  const isFavorited = favorites.find(favorite => favorite.id === id);

  return (
    <S.Wrapper>
      <S.Image source={{ uri: urls.regular }} />

      <S.Content>
        <S.ButtonFavorited
          onPress={
            !isFavorited
              ? () => handleFavourited(id)
              : () => handleRemoveFavourite(id)
          }>
          {isFavorited ? (
            <FFIcon {...svgProperties} />
          ) : (
            <FIcon {...svgProperties} />
          )}
        </S.ButtonFavorited>
        <S.ProductName>
          {alternative_slugs ? alternative_slugs.pt : null}
        </S.ProductName>
      </S.Content>
    </S.Wrapper>
  );
};

export default Shelf;
