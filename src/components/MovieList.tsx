import MovieCard from "./MovieCard";



interface MovieListProps {
  title: string;
  movies: any[] | null;
}


const MovieList = ({title, movies}: MovieListProps) => {

  if(movies === null) return null;
  console.log("MovieList: ",movies)

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          {movies.map((movie) => (
            <MovieCard key = {movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;