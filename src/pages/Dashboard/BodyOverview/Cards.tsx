import { Card, Grid, Typography } from "@mui/material"

interface MyCardProps {
    title: string,
    icon: string,
    number: number,
    today: number,
}

export const MyCard = ({title, icon, number, today}:MyCardProps) => {
    return (
        <Card sx={{padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', backgroundColor: '#cfcbcb7c'}}>
            <Grid display='flex' justifyContent='space-between' width='90%' padding='5px'>
                <Typography fontSize={11}>{title}</Typography>
                <Typography fontSize={16}>{icon }</Typography>
            </Grid>  
            <Grid display='flex' justifyContent='space-between' width='90%'>
                <Typography fontSize={22}>{number}</Typography>
                <Typography fontSize={12} color={today > 0 ? 'green' : 'red'}>{today > 0 ? `+${today}` : today}%</Typography>
            </Grid>
        </Card>
    )
}