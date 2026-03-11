import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";





const appStore = configureStore({
  reducer:{
    user: useReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  }
});



export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;