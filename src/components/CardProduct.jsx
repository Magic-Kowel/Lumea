import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, CardMedia, CardActionArea, Box } from "@mui/material";
import LumeaLogo from "../assets/IconoFoco.svg";
function CardProduct({ productItem }) {
  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image={LumeaLogo}
              alt="LumeaLogo"
              sx={{ width: 40 }}
            />
          </Box>
          <CardContent>
            <Typography
              textAlign="center"
              variant="h4"
              gutterBottom
              sx={{ color: "text.secondary", fontSize: "1.5em" }}
            >
              {productItem.title}
            </Typography>

            <Typography textAlign="center" variant="body2" component="p">
              {productItem.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default CardProduct;
