import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
type Data = {
  title: string;
  description: string;
  image: any;
};

const Course = (props : Data) => {
  return (
    <div>
      <Card >
        <CardMedia sx={{ height: 140 }} image={props.image} title={props.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Course;
