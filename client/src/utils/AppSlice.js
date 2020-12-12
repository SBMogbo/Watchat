import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    search: null,
    movieId: 'test',
    poster:null,
    movieTitle:null,
    user: {
      id: null,
      username:null,
    },
    recommendedId: null,
    reviewTitle: null,
    review: null,
  },
  reducers: {
    setSearch: (state, action) => ({...state, search: action.payload}),
    setMovieId: (state, action) => ({...state, movieId: action.payload}),
    setPoster: (state, action) => ({...state, poster: action.payload}),
    setMovieTitle: (state, action) => ({...state, movieTitle: action.payload}),
    setUser: (state, action) => ({...state, user: action.payload}),
    setRecommendedId:(state, action) => ({...state, recommendedId: action.payload}),
    setReviewTitle: (state, action) => ({...state, reviewTitle: action.payload}),
    setReview: (state, action) => ({...state, review: action.payload})
  }
});

const {actions, reducer} = appSlice;

export const {
  setSearch,
  setMovieId,
  setPoster,
  setMovieTitle,
  setUser,
  setRecommendedId,
  setReviewTitle,
  setReview,
} = actions;

export default reducer;