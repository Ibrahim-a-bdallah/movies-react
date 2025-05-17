import CardComponent from "../components/Card";
import ResponsiveGrid from "../components/Grid";
import { useMovie } from "../hooks/useMovie";
import { motion } from "framer-motion";
import LottieHandler from "../components/feedback/LottieHandler";

type Props = {
  searchTerm: string;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Movies = ({ searchTerm }: Props) => {
  const { data, isLoading, error } = useMovie(searchTerm);

  const products =
    data &&
    data.map((movie) => {
      return (
        <motion.div key={movie.id} variants={item}>
          {/* <Item> */}
          <CardComponent
            title={movie.title}
            img={movie.poster_path}
            release_date={movie.release_date}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
          {/* </Item> */}
        </motion.div>
      );
    });

  return (
    <div>
      {error && <LottieHandler type={"error"} />}
      {isLoading ? (
        <LottieHandler type={"loading"} styled={"margin:10px auto"} />
      ) : !data?.length ? (
        <LottieHandler type={"empty"} message="NOT FOUND MOVIE" />
      ) : (
        <ResponsiveGrid>{products}</ResponsiveGrid>
      )}
    </div>
  );
};

export default Movies;
