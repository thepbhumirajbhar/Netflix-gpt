// PURPOSE: fetch data from api and update the store

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import type { RootState } from "../utils/appStore";




const useTopRatedMovies = () => {

  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store: RootState) => store.movies.topRatedMovies)


  const getTopRatedMovies = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);

    const json = await data.json();
    //console.log("top rated movies",json)

    //dispatch the data to the store
    dispatch(addTopRatedMovies(json.results))
  };

  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
  },[])
  

};



export default useTopRatedMovies;