import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import moviesReducer from "./movieSlice";





const appStore = configureStore({
  reducer:{
    user: useReducer,
    movies: moviesReducer,
  }
});



export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;