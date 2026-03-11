import type { RootState } from "./utils/appStore";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";



const GptSearchBar = () => {

  const langKey = useSelector((store: RootState) => store.config.lang) as keyof typeof lang;

  return (
    <div className="pt-[12%] flex justify-center">
      <form className= "bg-black grid grid-cols-12 w-1/2 ">

        <input 
          type="text" 
          className="m-2 p-2 bg-amber-50 col-span-9"
          placeholder={lang[langKey].gptPlaceHolderText}/>

        <button className="px-2 m-2 bg-red-700 text-white rounded-md col-span-3">
          {lang[langKey].search}
        </button>

      </form>
    </div>
  )
}


export default GptSearchBar;