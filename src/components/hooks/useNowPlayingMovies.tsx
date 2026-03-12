import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";



//PURPOSE : fetch data from TMDB API and update store

const useNowPlayingMovies = () => {

  const disptach = useDispatch();
  const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies)


  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);

    const json = await data.json();
    //console.log(json.results)

    //pushing movieData to the store
    disptach(addNowPlayingMovies(json.results));

 };

 useEffect(() => {
  !nowPlayingMovies && getNowPlayingMovies();
 }, [])

}


export default useNowPlayingMovies;