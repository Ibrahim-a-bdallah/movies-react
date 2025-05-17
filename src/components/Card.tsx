import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type TProps = {
  title: string;
  img: string;
  overviwe: string;
};

const CardComponent = ({ img, title, overviwe }: TProps) => {
  return (
    <Card
      className="card"
      sx={{ maxWidth: 345, height: "330px", overflow: "hidden" }}
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
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {overviwe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
