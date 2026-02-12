import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1e202a',
            paper: '#1e202a',
        },
        text: {
            primary: '#fff',
            secondary: '#ffffff8e',
        },

    }
})