import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";



//PURPOSE : fetch data from TMDB API and update store

const usePopularMovies = () => {

  const disptach = useDispatch();

  const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);

    const json = await data.json();
    //console.log(json.results)

    //pushing movieData to the store
    disptach(addPopularMovies(json.results));

 };

 useEffect(() => {
  getPopularMovies();
 }, [])

}


export default usePopularMovies;