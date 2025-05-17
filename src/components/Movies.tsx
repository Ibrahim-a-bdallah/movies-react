import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { SimpleMovieData } from "../types/data.type";
import CardComponent from "./Card";

const getMovies = async (): Promise<SimpleMovieData[]> => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  const movies = res.data.results.map((movie: SimpleMovieData) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    overview: movie.overview,
  }));
  return movies;
};

const Movies = () => {
  // const { results } = getMovies;
  const { data } = useQuery({
    queryKey: ["4f9d55420d6bd2c36127a9a02486e87a"],
    queryFn: getMovies,
  });
  console.log(data?.map((e) => e));
  return (
    <div>
      <ul>
        {data &&
          data?.map((movie) => {
            return (
              <li id={movie.id}>
                <CardComponent
                  title={movie.title}
                  img={movie.poster_path}
                  overviwe={movie.overview}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
