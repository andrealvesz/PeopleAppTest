import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CardsState {
  id: string;
  alternative_slugs: {
    pt: string;
  };
  urls: {
    regular: string;
  };
  likes: number;
}

const initialState: CardsState[] = [];

const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getPhotos: (state, action: PayloadAction<CardsState>) => {
      return Array.from(new Set([...state, action.payload]));
    },
    resetStateCard: (state, action) => {
      return action.payload;
    },
  },
});

export const { getPhotos, resetStateCard } = cardsSlice.actions;
export const { reducer: cardReducer } = cardsSlice;
