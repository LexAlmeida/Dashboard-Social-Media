
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { Header } from "./Header/Header"
import { BodyResume } from "./BodyResume/BodyResume"
import { BodyOverview } from "./BodyOverview/BodyOverview"
import { Title } from "./BodyOverview/Title"
import { LightTheme } from "../../themes/light"
import { DarkTheme } from "../../themes/dark"

const theme = DarkTheme

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
        <Box sx={{padding: {xs: '0 5%', sm: '0 8%', md:'0 10%'}}}>
            <Header/>
            <BodyResume/>
            <Title/>
            <BodyOverview/>
        </Box>
        </ThemeProvider>
    )
}