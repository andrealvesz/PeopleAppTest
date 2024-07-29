import React, { useCallback, useEffect, useState } from 'react';
import { getPhotos } from '../../../redux/features/cards-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import api from '../../../services/api';
import { PHOTOS } from '../../../utils/endpoints';
import { Layout } from './layout';
import { addFavourite, removeFavourite } from '../../../redux/features';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { User } from '../../../common/models/users';

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

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.card);
  const userToken = useAppSelector(state => state.user.token);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const onEndReached = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  const onRefresh = () => {
    setPage(1);
  };

  const handleFavourited = (id: string) => {
    dispatch(addFavourite({ id }));
  };

  const handleRemoveFavourite = (id: string) => {
    dispatch(removeFavourite({ id }));
  };

  const getCurrentUser = async () => {
    const currentUser = GoogleSignin.getCurrentUser();
    setUser(currentUser?.user);
  };

  const photoList = useCallback(
    async (limit: number) => {
      setLoading(true);
      try {
        if (loading || !hasMore) return;

        const { data } = await api.get<TResponse[]>(
          `${PHOTOS.GET_PHOTOS}?per_page=${limit}&page=${page}`,
        );

        if (data.length < limit) {
          setHasMore(false);
        }

        const existingCard = new Set(cards.map(card => card.id));

        data.forEach(photo => {
          const { id, alternative_slugs, urls, likes } = photo;

          if (!existingCard.has(id)) {
            existingCard.add(id);
            dispatch(getPhotos({ id, alternative_slugs, urls, likes }));
          }
        });

      } catch (error) {
        console.error('photoList::ERROR', JSON.stringify(error));
      } finally {
        setLoading(false);
      }
    },
    [page, cards],
  );

  useEffect(() => {
    if (userToken) {
      photoList(6);
      getCurrentUser();
    }
    if (!userToken) {
      photoList(4);
    }
  }, [page]);

  return (
    <Layout
      data={{
        loading,
        userToken,
        user
      }}
      actions={{
        onEndReached,
        onRefresh,
        handleFavourited,
        handleRemoveFavourite,
      }}
    />
  );
};
