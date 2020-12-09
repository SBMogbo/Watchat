import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    search: null,
    movieId: 'test',
  },
  reducers: {
    setSearch: (state, action) => ({...state, search: action.payload}),
    setMovieId: (state, action) => ({...state, movieId: action.payload}),
  }
});

const { actions, reducer } = appSlice;

export const {
  setSearch,
  setMovieId,
} = actions;

export default reducer;