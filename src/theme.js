import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';
const theme = createTheme({
    palette: {
        main: {
            main: '#FF9900',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});
export default theme;