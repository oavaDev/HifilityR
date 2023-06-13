import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    name: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, name } = action.payload;
      state.user.id = id;
      state.user.name = name;
    },
    clearUser: (state) => {
      state.user.id = null;
      state.user.name = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userId = (state) => state.user.id;
export default userSlice.reducer;
