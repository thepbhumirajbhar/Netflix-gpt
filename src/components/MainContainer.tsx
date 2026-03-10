import { useSelector } from "react-redux";
import type { RootState } from "./utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";




const MainContainer = () => {

  //Getting data from the store 
  const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies)

  //Early return 
  if(movies === null) return;
  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle />
      <VideoBG />
    </div>
  )
}

export default MainContainer;