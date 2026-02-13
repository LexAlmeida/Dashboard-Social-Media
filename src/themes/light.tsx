import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        background: {
            default: 'hsl(0, 100%, 100%)',
            paper: 'hsl(227, 47%, 96%)',
        },
        text: {
            primary: 'hsl(230, 17%, 14%)',
            secondary: 'hsl(228, 12%, 44%)'
        },

    }
})