import { getAuth, signOut } from "firebase/auth";
import {auth} from "./utils/firebase";
import { useNavigate } from "react-router-dom";





const Header = () => {

  const navigate = useNavigate();
  


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








  return(
    <div className="absolute top-0 left-0 px-20 py-5 w-full z-10 bg-linear-to-b from-black flex justify-between">
      <img
      className="w-48"
      src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>

      <div className="p-2 flex flex-col gap-1 items-center">
        <img
          className="w-10 h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user-icon"/>

        <button 
          className="bg-red-700 p-1 text-white font-bold border-2 border-red-800"
          onClick={handleSignOut}>
            Sign Out
        </button>
      </div>
      
    </div>
  )
}

export default Header;