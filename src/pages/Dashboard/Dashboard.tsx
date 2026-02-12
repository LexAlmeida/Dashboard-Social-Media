
import { Box } from "@mui/material"
import { Header } from "./Header/Header"
import { BodyResume } from "./BodyResume/BodyResume"

export const Dashboard = () => {
    return (
        <Box sx={{padding: '0 10%'}}>
            <Header/>
            <BodyResume/>
        </Box>
    )
}