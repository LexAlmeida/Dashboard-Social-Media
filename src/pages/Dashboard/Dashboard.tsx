
import { Box, Typography } from "@mui/material"
import { Header } from "./Header/Header"
import { BodyResume } from "./BodyResume/BodyResume"
import { BodyOverview } from "./BodyOverview/BodyOverview"
import { Title } from "./BodyOverview/Title"

export const Dashboard = () => {
    return (
        <Box sx={{padding: {xs: '0 5%', sm: '0 8%', md:'0 10%'}}}>
            <Header/>
            <BodyResume/>
            <Title/>
            <BodyOverview/>
        </Box>
    )
}