import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { HOME_BG_IMAGE } from "./utils/constants";




const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10 ">
            <img
              src = {HOME_BG_IMAGE}/>
        </div>      
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}


export default GptSearch;