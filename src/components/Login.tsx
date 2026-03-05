import Header from "./Header";
import { useState } from "react";

const Login = () => {


  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }


return(
  <div> 
    <Header/>
    <div className="relative w-full h-screen">
      <img
        src = "https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"/>

     <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 bg-black/80 w-3/12 h-7/12 p-10">
        <h1 className="text-white text-3xl font-bold pb-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        <input 
          type="text"
          className="my-2 p-3 pl-5 text-sm bg-gray-800 text-white rounded-sm"
          placeholder="Email or phone number" /> 
        <input
          type="text"
          className="my-2 p-3 pl-5 text-sm bg-gray-800 text-white rounded-sm"
          placeholder="Password"/>
        <button
          className="my-5 p-2 bg-red-700 text-white rounded-sm">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p 
          className="text-gray-400 text-sm cursor-pointer"
          onClick={toggleSignInForm}>
            {isSignInForm 
              ? 'New to Netflix? Sign Up now' 
              : 'Already a User? Sign In'}
        </p>
     </form>
    </div>

  </div>
)};


export default Login;