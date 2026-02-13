import { Box, Grid } from "@mui/material"
import { Title } from "./Title"
import { Followers } from "./TotalFollowers"
import { Switcher } from "./SwitchTheme"

export const Header = () => {
    return (
        <Box sx={{
            flexGrow:1,
            margin: '20px 0'}}>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Title/>
                    <Followers/>
                </Grid>
                <Grid size={6} alignItems="center" justifyContent="flex-end" display="flex">
                    <Switcher/>
                </Grid>
            </Grid>
        </Box> 
    )
}