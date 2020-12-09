import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    search: null,
    movieId: 'test',
    user: null
  },
  reducers: {
    setSearch: (state, action) => ({...state, search: action.payload}),
    setMovieId: (state, action) => ({...state, movieId: action.payload}),
    setUser: (state, action) => ({...state, user: action.payload})
  }
});

const {actions, reducer} = appSlice;

export const {
  setSearch,
  setMovieId,
  setUser,
} = actions;

export default reducer;