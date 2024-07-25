import { configureStore } from '@reduxjs/toolkit';
import { favoriteReducer } from '../features/favorites-slice';
import { userReducer } from '../features/user-slice';
import { cardReducer } from '../features/cards-slice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    user: userReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
