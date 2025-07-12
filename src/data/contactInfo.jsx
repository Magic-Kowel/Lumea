import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
export const contactInfo = {
  socialMedias: [
    {
      icon: <InstagramIcon color="main" sx={{ mx: 2 }} />,
      title: "Instagram",
      url: "https://www.instagram.com/lumea.studio.oficial/",
    },
    {
      icon: <FacebookIcon color="main" sx={{ mx: 2 }} />,
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61576848305204",
    },
    {
      icon: <YouTubeIcon color="main" sx={{ mx: 2 }} />,
      title: "Youtube",
      url: "https://www.youtube.com/@LumeaStudio-i7g",
    },
    // {
    //   icon:  "",
    //   title: "Tiktok",
    //   url: "https://www.tiktok.com/@lumea.studio.mexico",
    // },
  ],
  contactInfo: [
    {
      icon: <MailOutlineIcon color="main" sx={{ mx: 2 }} />,
      title: "Correo",
      info: "Lumea-Studio@outlook.com",
    },
    {
      icon: <PhoneIcon color="main" sx={{ mx: 2 }} />,
      title: "Telefono",
      info: " +52 1 314 124 6842",
    },
  ],
};
