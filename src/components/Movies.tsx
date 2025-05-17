import CardComponent from "./Card";
// import { Item } from "./styled";
import ResponsiveGrid from "./Grid";
import { useMovie } from "../hooks/useMovie";
import { motion } from "framer-motion";

type Props = {
  searchTerm: string;
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Movies = ({ searchTerm }: Props) => {
  const { data, isLoading } = useMovie(searchTerm);

  if (isLoading) return <p>Loading...</p>;

  const products =
    data &&
    data.map((movie) => {
      return (
        <motion.div key={movie.id} variants={item}>
          {/* <Item> */}
          <CardComponent
            title={movie.title}
            img={movie.poster_path}
            overviwe={movie.overview}
          />
          {/* </Item> */}
        </motion.div>
      );
    });

  return (
    <div>
      <ResponsiveGrid>{products}</ResponsiveGrid>
    </div>
  );
};

export default Movies;
