import MovieCard from "./MovieCard";



interface MovieListProps {
  title: string;
  movies: any[] | null;
}


const MovieList = ({title, movies}: MovieListProps) => {

  if(movies === null) return null;
  //console.log("MovieList: ",movies)

  return (
    <div className=" px-6">
      <h1 className="text-xl text-white pb-2 pt-7">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-5">
          {movies.map((movie) => (
            <MovieCard key = {movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;