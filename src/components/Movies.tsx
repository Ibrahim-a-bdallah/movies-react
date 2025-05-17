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
    queryKey: [
      process.env.API_KEY ||
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlkNTU0MjBkNmJkMmMzNjEyN2E5YTAyNDg2ZTg3YSIsIm5iZiI6MTc0NzQ1MDQ5MC4zNjIsInN1YiI6IjY4MjdmYTdhN2UwN2Q2ZmZlYzllMmE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AL5NGCLc19hDqlLp-H7tkOh0bk_2swslsWdDCV9regE",
    ],
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
