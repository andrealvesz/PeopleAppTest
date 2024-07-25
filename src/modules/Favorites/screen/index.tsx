import React, { useMemo, useState } from 'react';
import { removeFavourite } from '../../../redux/features';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Layout } from './layout';

type TResponse = {
  id: string;
  alternative_slugs: {
    pt: string;
  };
  urls: {
    regular: string;
  };
  likes: number;
};

export const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorite);
  const cards = useAppSelector(state => state.card);
  const userToken = useAppSelector(state => state.user.token);

  const handleRemoveFavourite = (id: string) => {
    dispatch(removeFavourite({ id }));
  };

  const favoritePhotos = useMemo(() => {
    const fav = favorites.map(favorite => {
      return cards.filter(card => card.id === favorite.id);
    });
    return fav.flatMap(item => item);
  }, [favorites]);

  return (
    <Layout
      data={{
        favoritePhotos,
      }}
      actions={{
        handleRemoveFavourite,
      }}
    />
  );
};
