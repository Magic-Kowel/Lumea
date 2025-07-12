import { Grid } from "@mui/material";
import CardProduct from "../components/CardProduct";
import { productsData } from "../data/productsData";
function Products() {
  return (
    <>
      <Grid
        boxShadow={0}
        marginY={12}
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
        spacing={2}
      >
        {productsData.map((productItem, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <CardProduct productItem={productItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Products;
