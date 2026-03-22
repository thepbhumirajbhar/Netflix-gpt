import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "./utils/appStore";






const SecondaryContainer = () => {

  const movies = useSelector((store: RootState) => store.movies)


  return (
    <div className="bg-black pl-10 md:pl-12">
      <div className="mt-0 md:-mt-52 relative z-30">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
      
  
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