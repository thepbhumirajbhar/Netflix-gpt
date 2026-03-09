import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";





const appStore = configureStore({
  reducer:{
    user: useReducer,
  }
});

export type RootStore = ReturnType<typeof appStore.getState>;
export default appStore;