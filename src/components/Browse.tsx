import GptSearch from "./GptSearch";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import type { RootState } from "./utils/appStore";
import { useSelector } from "react-redux";




const Browse = () => {

  // getting status of showGptSearch from store -> if true: show gpt page otherwise no
  const showGptSearch = useSelector((store: RootState)=> store.gpt.showGptSearch)

 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();

return(
  <div> 
    <Header/>
    {/* //if true: show gpt page otherwise no */}
    {
      showGptSearch ? <GptSearch /> : 
                                      <>
                                        <MainContainer />
                                        <SecondaryContainer />
                                      </>
    }
    
    

    {/*
       Main Container 
       - Video in the BG
       - Movie title
       Secondary Container
       - MovieList * n
       - cards * n
     */}

  </div>
)};


export default Browse;