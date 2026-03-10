//TODO: make API call to fetch Trailer. Since getNowPlayingMovies API doesnot have videos

import { useEffect } from "react";
import { API_OPTIONS } from "./utils/constants";

interface VideoBgProp {
  movieId: number;
}

const VideoBG = ({movieId}: VideoBgProp) => {

  
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
    const json = await data.json()
    //console.log(json);

    const filterData = json.results. filter((video:any) => video.type === "Trailer")
    console.log("Filtering Trailer from all videos",filterData)
       // multiple videos have type = trailer -> take 0th element if no type then 0th element from list 
    const trailer = filterData.length ? filterData[0] : json.results[0];

  };

  useEffect(() =>{
    getMovieVideos();
  }, [])







  return (
    <div>
     <h1>hi</h1>
    </div>
  )
}


export default VideoBG;