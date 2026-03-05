import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "./utils/validate";

const Login = () => {


  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }



  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleButtonClick = () =>{
    //! either login the user or signup the user
    // Validate the form data -> if fails: give error msg

    //* returns the value of ref variable in the form of Object
    //? console.log(email)
    //? console.log(password)
  
    //* extracting email pswd from the Object
    //? console.log(email.current.value);
    //? console.log(password.current.value);

  // SAFETY CHECK: If either ref is still null, stop the function right here
    if (!email.current || !password.current) return;
     
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message)
  }







return(
  <div> 
    <Header/>
    <div className="relative w-full h-screen">
      <img
        src = "https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"/>

     <form 
        onSubmit={(e) => e.preventDefault()}                    //prevents the form from submitting
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 bg-black/80 w-3/12 h-7/12 p-10">

        <h1 className="text-white text-3xl font-bold pb-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input 
          type="text"
          className="my-2 p-3 pl-5 text-sm bg-gray-800 text-white rounded-sm"
          placeholder="Name" /> )}

        <input 
          ref={email}
          type="text"
          className="my-2 p-3 pl-5 text-sm bg-gray-800 text-white rounded-sm"
          placeholder="Email or phone number" /> 

        <input
          ref={password}
          type="password"
          className="my-2 p-3 pl-5 text-sm bg-gray-800 text-white rounded-sm"
          placeholder="Password"/>

        <button
          className="my-5 p-2 bg-red-700 text-white rounded-sm"
          onClick={handleButtonClick}>
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