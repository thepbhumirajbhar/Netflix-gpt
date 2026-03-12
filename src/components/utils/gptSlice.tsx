import { createSlice } from "@reduxjs/toolkit";


// Tell TypeScript exactly what this slice holds
interface gptState {
  showGptSearch: boolean,
  movieNames: string [] | null,
  movieResults: any[][] | null
}

// Apply the blueprint right here
const initialState: gptState = {
  showGptSearch: false,
  movieNames: null,
  movieResults: null
}



const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers:{
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieResults} = action.payload
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  }
})


export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer; 