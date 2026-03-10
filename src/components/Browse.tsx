import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";




const Browse = () => {
  
 useNowPlayingMovies();

return(
  <div> 
    <Header/>
    Browser 
  </div>
)};


export default Browse;