import { useSelector } from "react-redux";
import type { RootState } from "./utils/appStore";
import useMovieTrailer from "./hooks/useMovieTrailer";


interface VideoBgProp {
  movieId: number;
}




const VideoBG = ({movieId}: VideoBgProp) => {

  //Getting trailerVideo from store
  const trailerVideo = useSelector((store: RootState)=> store.movies?.trailerVideo)
  

  useMovieTrailer(movieId);


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