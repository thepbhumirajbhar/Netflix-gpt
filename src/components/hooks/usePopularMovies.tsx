import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";



//PURPOSE : fetch data from TMDB API and update store

const usePopularMovies = () => {

  const disptach = useDispatch();
  const popularMovies = useSelector((store: RootState) => store.movies.topRatedMovies)


  const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);

    const json = await data.json();
    //console.log(json.results)

    //pushing movieData to the store
    disptach(addPopularMovies(json.results));

 };

 useEffect(() => {
  !popularMovies && getPopularMovies();
 }, [])

}


export default usePopularMovies;