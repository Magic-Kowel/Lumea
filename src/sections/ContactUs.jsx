import { Box, Typography, Divider } from "@mui/material";
import FormContactUs from "../components/FormContactUs";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function ContactUs() {
  return (
    <>
      <Box sx={{ backgroundColor: "#242729", padding: "4rem" }}>
        <Typography
          textAlign="center"
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ color: "white", fontSize: "1.5em" }}
        >
          Contacta con nosotros
        </Typography>
        <Box display="flex" margin="2rem" alignItems="center">
          <Divider sx={{ flex: 1, backgroundColor: "white" }} />
          <MailOutlineIcon color="main" sx={{ mx: 2 }} />
          <Divider sx={{ flex: 1, backgroundColor: "white" }} />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            textAlign="center"
            component="p"
            gutterBottom
            marginY="1rem"
            sx={{ color: "white", fontSize: 13, width: "35rem" }}
          >
            Cuéntanos tu idea, dinos qué es lo que necesitas o directamente
            escríbenos para tomarnos un café y hablamos en persona sobre tu
            proyecto.
          </Typography>
        </Box>
        <FormContactUs />
      </Box>
    </>
  );
}
export default ContactUs;
