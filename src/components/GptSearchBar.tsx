import { useRef } from "react";
import type { RootState } from "./utils/appStore";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";
import client from "./utils/openai";
import { API_OPTIONS } from "./utils/constants";



const GptSearchBar = () => {

  const langKey = useSelector((store: RootState) => store.config.lang) as keyof typeof lang;
  const searchText = useRef<HTMLInputElement>(null);

  //TODO: Search movie in TMDB (fetching search API)
  const searchMovieTMDB = async (movie : string) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)

    const json = await data.json()

    return json.returns;
  }


  const handleGptSearchClick = async () => {
    //early return
    if (!searchText.current) return;

    // console.log(searchText.current?.value)

    //TODO: Make an api call to GPT API and get movie results(!..PAID..!)
    // const gptResults = await client.chat.completions.create({
    //         model: 'gpt-5.2',
    //         messages: [
    //                     { role: 'developer', content: 'Talk like a pirate.' },
    //                     { role: 'user', content: searchText.current?.value },
    //                   ],
    // });
    //console.log(gptResults.choices[0].message.content);

    //! Pretend this is what the AI responded with!
    const dummyGptMovies = ["Hera Pheri", "Andaz Apna Apna", "Chup Chup Ke", "Dhamaal", "Golmaal"];
    console.log("Mock AI Response: ", dummyGptMovies);
    

    // TODO: Search TMDB for these 5 movies one by one...
    const data = dummyGptMovies.map((movie: string) => {
      searchMovieTMDB(movie)
    })
    //? Since searchMovieTMDB is an async function -> returns array of promises & not result of Movie Search 
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