import { IMG_CDN_URL } from "./utils/constants";

interface MovoeCardProps{
  posterPath: string;
}

const MovieCard = ({posterPath}: MovoeCardProps) => {
  // it wont show movies whose poster is absent 
  if(!posterPath) return null;

  return (
    <div className="w-36 md:w-40">
      <img src={IMG_CDN_URL + posterPath} alt= "Movie Poster"/>
    </div>
  )
}

export default MovieCard;