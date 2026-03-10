# Netflix-gpt 
- using Vite Bundler
- configured tailwindCSS
- Header
- Login Form (Sign In form)
- Sign Up Form
- Form Validation
- useRef hook
- Firebase setup
- Deploying app to production [3 commands(after FB CLI installation): firebase login, firebase init, firebase   deploy]
- Create SignUp User account on firebase
- Implement Sign In user API
- Redux store Setup-UserSlice (to store user data after signIn/signUp)
- Implemented sign out feature
- Update Profile
- BugFix: Signup user display name & profile picture update
- Unsubscribed to the onAuthStateChanged call back
- BugFix: Redirect user to browse page if logged in and home page if not logged in
- Add hardcoded values to the CONSTANT folder



# Features
- LogIn/ SignUp 
    -> Signin/singup form
    -> redirect to browse page

- Browse (after authentication)
    -> Header
    -> Main Movie
    -> Trailer in Bg
    -> Title & Description 
    -> Movie Suggestions
            -> Movie List * (n): vertically scrollable

- NetflixGPT
    -> SeachBar
    -> Movie Suggestions



# Recommendations
1. 'formik' library: helps in large form handling.
