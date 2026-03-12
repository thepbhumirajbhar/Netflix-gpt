import { useSelector } from "react-redux";
import type { RootState } from "./utils/appStore";




const GptMovieSuggestions = () => {

  const {movieNames, movieResults} = useSelector((store:RootState) => store.gpt)
  if (!movieNames) return null;


  return (
    <div className="bg-black text-white m-5 p-4">
      {movieNames.join(", ")}
    </div>
  )
}


export default GptMovieSuggestions;