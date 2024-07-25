import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  token: string;
}

const initialState: UserState = {
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
    },
  },
});

export const { addToken } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
