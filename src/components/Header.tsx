import {LOGO, SUPPORTED_LANGUAGES} from "./utils/constants";
import { signOut } from "firebase/auth";
import {auth} from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./utils/appStore";

import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";





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

    //! unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);






  
//susscribing to the store to get users info then using the photoURL to update the user-icon
  const user = useSelector((store: RootState) => store.user)
  


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }

  //console.log("Current user from Redux:", user);








  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  
  const handleLanguageChange = (e:any) => {
    dispatch(changeLanguage(e.target.value))
  }

  

  return(
    <div className="absolute top-0 left-0 px-20 py-5 w-full z-10 bg-linear-to-b from-black flex justify-between">
      <img
      className="w-48"
      alt="Logo"
      src = {LOGO}/>


     {/* Conditional Check : ONLY render this div if 'user' is NOT null */}
      {user?.uid && (
        <div className="flex gap-2 items-center">

          <select className="text-white" onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option value={lang.identifier} key={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        
          <button className="text-black text-sm gap-1 px-2 py-1 m-6 flex bg-gray-300 rounded-md"
                  onClick={handleGptSearchClick}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg> GPT Search

          </button>

          <img
            className="w-10 h-10"
            src={user.photoURL}
            alt="user-icon"/>

          <button 
            className="bg-red-700 text-white font-bold border-2 border-red-800 px-2"
            onClick={handleSignOut}>
              Sign Out
          </button>
        </div>
      )}
      
    </div>
  )
}

export default Header;






