import { Card, Grid, Typography } from "@mui/material"
import iconDown from "../../../assets/iconDown.svg"
import iconUp from "../../../assets/iconUp.svg"

interface MyCardProps {
    title: string,
    icon: string,
    number: number,
    today: number,
}

export const MyCard = ({title, icon, number, today}:MyCardProps) => {
    return (
        <Card sx={{
            padding: '15px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '4px', 
            backgroundColor: 'background.paper',
            boxShadow: 'none',}}>
            <Grid display='flex' justifyContent='space-between' width='90%' padding='5px'>
                <Typography fontSize={11}>{title}</Typography>
                <img src={icon} width={16} height={16} />
            </Grid>  
            <Grid display='flex' justifyContent='space-between' width='90%'>
                <Typography fontSize={22}>{number}</Typography>
                <Typography fontSize={12} color={today > 0 ? 'green' : 'red'}>
                    <img src={today > 0 ? iconUp : iconDown} width={6} height={6} />
                    {today > 0 ? `+${today}` : today}%</Typography>
            </Grid>
        </Card>
    )
}