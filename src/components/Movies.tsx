import CardComponent from "./Card";
import ResponsiveGrid from "./Grid";
import { useMovie } from "../hooks/useMovie";
import { motion } from "framer-motion";
import LottieHandler from "./feedback/LottieHandler";

type Props = {
  searchTerm: string;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Movies = ({ searchTerm }: Props) => {
  const { data, isLoading, error } = useMovie(searchTerm);
  console.log(data?.length);
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
        <LottieHandler type={"empty"} />
      ) : (
        <ResponsiveGrid>{products}</ResponsiveGrid>
      )}
    </div>
  );
};

export default Movies;
