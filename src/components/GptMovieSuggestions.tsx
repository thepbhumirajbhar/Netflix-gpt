import { useSelector } from "react-redux";
import type { RootState } from "./utils/appStore";
import MovieList from "./MovieList";




const GptMovieSuggestions = () => {

  const {movieNames, movieResults} = useSelector((store:RootState) => store.gpt)
  if (!movieNames || !movieResults) return null;


  return (
    <div className="bg-black/70 text-white m-5 p-4">
       <div>
         {movieNames.map((movieName, index) => (
              <MovieList 
                key={movieName} 
                title={movieName} 
                movies={movieResults[index]}/>))}
       </div>
    </div>
  ) 
}


export default GptMovieSuggestions;