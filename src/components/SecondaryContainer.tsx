import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import type { RootState } from "./utils/appStore";






const SecondaryContainer = () => {

  const movies = useSelector((store: RootState) => store.movies)


  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      
    
  
          {/*
            - movielist : popular
                 moviecard * n
            - movielist : now playing
                 moviecard * n
            - movielist : trending
                moviecard * n
            - movielist : horror
                moviecard * n
          */}
     </div> 
   
  )
}

export default SecondaryContainer;