import { signOut } from "firebase/auth";
import {auth} from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./utils/appStore";

import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";





const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  //? Signup/in: add data to redux store ? --> user data can be needed anywhere 
  //* API for.? whenever user signin/up: add him to the store, signOut: remove from store
  //* after signin/up -> navigate the user to Browse page
     //? why in useEffect.? call 1 baar krna h sirf

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email || "",
            displayName: displayName || "",
            photoURL: photoURL || "",
          })
        );
        // ! This forces logged-in users to the Browse page
        navigate("/browse"); 
      } else {
        dispatch(removeUser());
        // ! This forces logged-out users back to the Login page
        navigate("/"); 
      }
    });

    return () => unsubscribe();
  }, []);






  
//susscribing to the store to get users info then using the photoURL to update the user-icon
  const user = useSelector((store: RootState) => store.user)
  


  const handleSignOut = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
    //TODO: navigate to home page
    navigate("/")


    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }





  console.log("Current user from Redux:", user);


  return(
    <div className="absolute top-0 left-0 px-20 py-5 w-full z-10 bg-linear-to-b from-black flex justify-between">
      <img
      className="w-48"
      alt="Logo"
      src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>


     {/* Conditional Check : ONLY render this div if 'user' is NOT null */}
      {user?.uid && (
        <div className="p-2 flex flex-col gap-1 items-center">
          <img
            className="w-10 h-10"
            src={user.photoURL}
            alt="user-icon"/>

          <button 
            className="bg-red-700 p-1 text-white font-bold border-2 border-red-800"
            onClick={handleSignOut}>
              Sign Out
          </button>
        </div>
      )}
      
    </div>
  )
}

export default Header;