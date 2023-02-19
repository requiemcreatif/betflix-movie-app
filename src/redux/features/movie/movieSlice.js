import { createSlice } from "@reduxjs/toolkit";
import movieItems from "../../../data/movieItems";

export const genres = [
  "action",
  "adventure",
  "comedy",
  "crime",
  "biography",
  "drama",
  "history",
  "sport",
  "mystery",
  "thriller",
  "scifi",
];

const initialState = {
  movieItems: movieItems,
  isLoading: false,
  selectedGenre: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});
export const { setSelectedGenre } = movieSlice.actions;
export default movieSlice.reducer;
