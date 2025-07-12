import { Paper, InputBase, IconButton, Grid } from "@mui/material";
function InputIcon({ textInput, SetTextInput, icon, label }) {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label={label}>
        {icon}
      </IconButton>
      <InputBase
        onChange={SetTextInput} // Pasas el evento completo
        value={textInput || ""}
        margin="dense"
        type="text"
        sx={{ ml: 1, flex: 1 }}
        placeholder={label}
        inputProps={{ "aria-label": label }}
      />
    </Paper>
  );
}

export default InputIcon;
