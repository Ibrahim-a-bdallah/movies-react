import axios from "axios";
import type { SimpleMovieData } from "../types/data.type";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (searchTerm: string) => {
  const getMovies = async (): Promise<SimpleMovieData[]> => {
    const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: { query: searchTerm },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return res.data.results.map((movie: SimpleMovieData) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
    }));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["searchMovies", searchTerm],
    queryFn: getMovies,
    enabled: !!searchTerm,
  });

  return { data, isLoading };
};
