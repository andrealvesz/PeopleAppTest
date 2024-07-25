import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FavoriteState {
  id: string;
}

const initialState: FavoriteState[] = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<FavoriteState>) => {
      state.push({
        id: action.payload.id,
      });
    },

    removeFavourite: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFavourite, removeFavourite } = favoriteSlice.actions;
export const { reducer: favoriteReducer } = favoriteSlice;
