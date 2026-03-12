import { useRef } from "react";
import type { RootState } from "./utils/appStore";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";



const GptSearchBar = () => {

  const langKey = useSelector((store: RootState) => store.config.lang) as keyof typeof lang;
  const searchText = useRef<HTMLInputElement>(null);

  const handleGptSearchClick = () => {

    //early return
    if (!searchText.current) return;

    // console.log(searchText.current?.value)

    //TODO: Make an api call to GPT API and get movie results
  }


 


  return (
    <div className="pt-[12%] flex justify-center">
      <form className= "bg-black grid grid-cols-12 w-1/2 "
            onSubmit={(e)=>e.preventDefault()}>

        <input  
          ref = {searchText}
          type="text" 
          className="m-2 p-2 bg-amber-50 col-span-9"
          placeholder={lang[langKey].gptPlaceHolderText}/>

        <button className="px-2 m-2 bg-red-700 text-white rounded-md col-span-3"
                onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>

      </form>
    </div>
  )
}


export default GptSearchBar;