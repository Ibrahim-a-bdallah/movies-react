import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type TProps = {
  title: string;
  img: string;
  release_date: string;
};

const CardComponent = ({ img, title, release_date }: TProps) => {
  return (
    <Card
      className="card"
      sx={{ width: 260, maxWidth: "100%", height: "330px", overflow: "hidden" }}
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
  );
};

export default CardComponent;
