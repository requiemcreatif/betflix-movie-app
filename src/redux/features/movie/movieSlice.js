import { createSlice } from "@reduxjs/toolkit";
import movieItems from "../../../data/movieItems";

const initialState = {
  movieItems: movieItems,
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
});

export default movieSlice.reducer;
