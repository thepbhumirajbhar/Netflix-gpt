import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface UserType {
  uid: string;
  photoURL: string;
  displayName: string;
  email: string;
}

const initialState= null as UserType | null;




const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action:PayloadAction<UserType>) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    }
  }
})


export const{addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;