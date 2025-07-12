import "./../css/herro.css";
import { Box, Typography, Grid, Container } from "@mui/material";
import loogoHerro from "../assets/LogoNormal.svg";
import Menu from "./../components/menus/Menu";
import MenuDesktop from "../components/menus/MenuDesktop";
import useScroll from "../hooks/useScroll";

function Herro() {
  const hasScrolled = useScroll(110);
  return (
    <>
      {hasScrolled && <MenuDesktop />}
      <Container maxWidth="xl" className="herro">
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {!hasScrolled && <Menu />}

          <Grid
            height="100%"
            container
            direction="column"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid size={12}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <img
                  src={loogoHerro}
                  width="150px"
                  alt="nav bar logo"
                  srcset={loogoHerro}
                />
              </Box>
            </Grid>
            <Grid size={12}>
              <Typography
                textAlign="center"
                component="h1"
                marginTop={8}
                sx={{
                  color: "white",
                  fontSize: "clamp(1rem, 2.5vw, 3rem)",
                }}
              >
                PRODUCCIONES AUDIOVISUALES
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Herro;
