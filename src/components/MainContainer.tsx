import { useSelector } from "react-redux";
import type { RootState } from "./utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";




const MainContainer = () => {

  //Getting data from the store 
  const movies = useSelector((store: RootState) => store.movies?.nowPlayingMovies)

  //Early return 
  if(!movies) return;
  const mainMovie = movies[0];
  //console.log("Main movie", mainMovie)

  //extracting data from mainMovie
  const {original_title, overview, id} = mainMovie;



  return (
    <div className="pt-[45%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBG movieId={id}/>
    </div>
  )
}

export default MainContainer;