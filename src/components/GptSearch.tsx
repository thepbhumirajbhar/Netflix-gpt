import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { HOME_BG_IMAGE } from "./utils/constants";




const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover"
          src = {HOME_BG_IMAGE}
          alt="Bg image"/>
      </div> 
      <div className=" ">
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    </>
  )
}


export default GptSearch;