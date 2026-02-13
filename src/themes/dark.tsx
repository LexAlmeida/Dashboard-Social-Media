import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        background: {
            default: 'hsl(225, 17%, 14%)',
            paper: 'hsl(228, 29%, 20%)',
        },
        text: {
            primary: 'hsl(300, 100%, 100%)',
            secondary: 'hsl(233, 27%, 66%)'
        },

    }
})