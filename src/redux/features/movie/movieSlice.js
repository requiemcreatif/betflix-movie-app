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
  searchQuery: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const { setSelectedGenre, setSearchQuery } = movieSlice.actions;
export default movieSlice.reducer;
