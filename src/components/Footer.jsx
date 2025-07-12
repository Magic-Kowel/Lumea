import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Grid } from "@mui/material";
import { contactInfo } from "../data/contactInfo";
import horizontalLogo from "./../assets/Horizontal.svg";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        p: 6,
        flexShrink: 0,
      }}
      component="footer"
    >
      <Grid container size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <Grid
          container
          size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          direction="column"
          spacing={1}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12 }}>
            <Typography
              textAlign="center"
              component="p"
              gutterBottom
              sx={{ color: "white", fontSize: "1.3em" }}
            >
              Redes
            </Typography>
          </Grid>
          {contactInfo?.socialMedias?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              display="flex"
              alignItems="center"
            >
              {item.icon}
              <Typography
                key={index}
                variant="body2"
                color="white"
                textAlign="center"
              >
                <Link underline="none" color="inherit" href={item.url}>
                  {item.title}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          direction="column"
          size={{ xs: 12, sm: 12, md: 6, lg: 5 }}
          spacing={1}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12 }}>
            <Typography
              textAlign="center"
              component="p"
              gutterBottom
              sx={{ color: "white", fontSize: "1.3em" }}
            >
              CONTACTO
            </Typography>
          </Grid>
          {contactInfo.contactInfo.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
              sx={{
                display: "flex",
                alignContent: "center",
                direction: "row",
              }}
            >
              <Typography key={index} variant="body2" color="white">
                {item.icon}
              </Typography>
              <Typography
                key={index}
                overflow="hidden"
                textOverflow="ellipsis"
                noWrap="true"
                variant="body2"
                color="white"
              >
                {item.info}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          direction="column"
          size={{ xs: 12, sm: 12, md: 12, lg: 3 }}
          spacing={2}
        >
          <Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginY: 8,
              }}
            >
              <img
                src={horizontalLogo}
                alt="footer logo"
                srcset={horizontalLogo}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Container maxWidth="sm">
        <Typography variant="body2" color="white" align="center">
          {"Creado por: "}
          <Link
            underline="none"
            color="inherit"
            href="https://josuefierromorfin.netlify.app/"
          >
            Josue Morfin
          </Link>{" "}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
