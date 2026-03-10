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
       // if multiple videos have type = trailer
    const trailer = filterData[0];

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