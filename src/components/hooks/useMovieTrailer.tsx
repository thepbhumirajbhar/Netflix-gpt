//TODO: make API call to fetch Trailer and update the store. Since getNowPlayingMovies API doesnot have videos


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import type { RootState } from "../utils/appStore";





const useMovieTrailer = (movieId:number) => {

  const dispatch = useDispatch()
  const movieTrailer = useSelector((store: RootState) => store.movies.trailerVideo)


  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
    const json = await data.json()
    //console.log(json);

    const filterData = json.results. filter((video:any) => video.type === "Trailer")
    //console.log("Filtering Trailer from all videos",filterData)

       // multiple videos have type = trailer -> take 0th element if no type then 0th element from list 
    const trailer = filterData.length ? filterData[0] : json.results[0];
       //console.log("trailer",trailer)

    //adding trailer to store
    dispatch(addTrailerVideo(trailer))   

  };

  useEffect(() =>{
    !movieTrailer && getMovieVideos();
  }, [])
}



export default useMovieTrailer;