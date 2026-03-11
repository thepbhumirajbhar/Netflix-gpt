import { IMG_CDN_URL } from "./utils/constants";

interface MovoeCardProps{
  posterPath: string;
}

const MovieCard = ({posterPath}: MovoeCardProps) => {
  return (
    <div className="w-40">
      <img src={IMG_CDN_URL + posterPath} alt= "Movie Poster"/>
    </div>
  )
}

export default MovieCard;