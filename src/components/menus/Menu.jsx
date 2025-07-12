import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { menuData } from "../../data/menuData";
import { colors } from "../../colors";
const Menu = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          top: "4rem",
          right: "3rem",
        }}
      >
        {menuData?.map((item, inex) => (
          <Typography
            key={inex}
            fontSize={14}
            sx={{
              color: "white",
              my: 2,
              display: "block",
              "&:hover": {
                color: colors.main,
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </>
  );
};
export default Menu;
