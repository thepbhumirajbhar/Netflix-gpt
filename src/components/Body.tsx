import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";


const Body = () =>{

  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])




//? Signup/in: add data to redux store ? --> user data can be needed anywhere 
  //* API for.? whenever user signin/up: add him to the store, signOut: remove from store
  //* after signin/up -> navigate the user to Browse page
     //? why in useEffect.? call 1 baar krna h sirf

    useEffect(() => {
       onAuthStateChanged(auth, (user) => {
       if (user) {

         //! User is signed in,
         //* const uid = user.uid;

         // for email, name: 
         const {uid, email, displayName} = user;


         //TODO: dispatch the action
         dispatch(addUser({uid: uid, email: email, Name: displayName}))}


       else {
         // User is signed out
         dispatch(removeUser());
       }
       });
    }, [])


  

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;