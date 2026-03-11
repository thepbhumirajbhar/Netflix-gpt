import MovieCard from "./MovieCard";



interface MovieListProps {
  title: string;
  movies: any[] | null;
}


const MovieList = ({title, movies}: MovieListProps) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCard />
        </div>
      </div>
    </div>
  )
}

export default MovieList;