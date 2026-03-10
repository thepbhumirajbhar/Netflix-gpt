//TODO: make API call to fetch Trailer. Since getNowPlayingMovies API doesnot have videos

import { useEffect } from "react";
import { API_OPTIONS } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "./utils/movieSlice";
import type { RootState } from "./utils/appStore";



interface VideoBgProp {
  movieId: number;
}

const VideoBG = ({movieId}: VideoBgProp) => {

  const dispatch = useDispatch()

  //Getting trailerVideo from store
  const trailerVideo = useSelector((store: RootState)=> store.movies?.trailerVideo)
  

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
    getMovieVideos();
  }, [])





  return (
    <div>
     <iframe 
        className="w-full aspect-video border-none"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=E1lK2fsyFSmyZM74`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
     </iframe>
    </div>
  )
}


export default VideoBG;