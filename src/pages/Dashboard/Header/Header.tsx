import { Box } from "@mui/material"
import { Title } from "./Title"
import { Followers } from "./TotalFollowers"
import { Switcher } from "./SwitchTheme"

export const Header = () => {
    return (
        <Box sx={{background: '#ccc9c9aa'}}>
            <Title/>
            <Followers/>
            <Switcher/>
        </Box>
    )
}