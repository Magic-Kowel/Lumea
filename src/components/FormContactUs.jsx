import InputIcon from "./InputIcon";
import { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { TextField, Grid, Button } from "@mui/material";
function FormContactUs() {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <Grid
        container
        spacing={2}
        rowSpacing={2}
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <InputIcon
            textInput={formContact.name}
            SetTextInput={(e) =>
              setFormContact((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            label="Nombre"
            icon={<PersonOutlineIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <InputIcon
            textInput={formContact.email}
            SetTextInput={(e) =>
              setFormContact((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            label="Correo"
            icon={<MailOutlineIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <TextField
            fullWidth
            sx={{
              backgroundColor: "#fff",
            }}
            placeholder="Texto"
            multiline
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }} sx={{ textAlign: "center" }}>
          <Button variant="outlined" color="main">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default FormContactUs;
