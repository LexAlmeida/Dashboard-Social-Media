import { Box, Grid } from "@mui/material"
import { Title } from "./Title"
import { Followers } from "./TotalFollowers"
import { Switcher } from "./SwitchTheme"

interface HeaderProps {
    isDark: boolean,
    onToggle: () => void}

export const Header = ({isDark, onToggle}: HeaderProps) => {
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
                    <Switcher isDark={isDark} onToggle={onToggle}/>
                </Grid>
            </Grid>
        </Box> 
    )
}