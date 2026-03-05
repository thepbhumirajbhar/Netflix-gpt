export const checkValidData = (email: string, password: string) => {
   
  // validating email via regex : return true when valid
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

  // validating pswd via regex : returns true when valid
  const isPswdValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


  // error msg
  if(!isEmailValid) return "Email Address is not valid";
  if (!isPswdValid) return "Password is incorrect";


  return null;

}

/*
* to validate email n pswd: 
  ? will have to track what has been entered by the user in input boxes
  ? refrence is created : useRef()
  ? reference created is reffered to the input boxes
  ? data entered 

*/