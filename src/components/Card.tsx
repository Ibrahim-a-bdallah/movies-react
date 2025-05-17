import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ModalComp from "./Modal";
import React from "react";

type TProps = {
  title: string;
  img: string;
  release_date: string;
  overview: string;
  vote_average: number;
};

const CardComponent = ({
  img,
  title,
  release_date,
  overview,
  vote_average,
}: TProps) => {
  const [open, setOpen] = React.useState(false);
  const handelModal = () => {
    setOpen(true);
  };
  return (
    <>
      <ModalComp
        setOpen={setOpen}
        open={open}
        title={title}
        overview={overview}
        vote_average={vote_average}
      />
      <Card
        className="card"
        sx={{
          width: 260,
          maxWidth: "100%",
          height: "330px",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() => handelModal()}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/original${img}`}
            alt={title}
          />
          <CardContent sx={{ height: "100%" }}>
            <Typography gutterBottom variant="h5" component="div">
              Title: {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              release_date:{release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardComponent;
