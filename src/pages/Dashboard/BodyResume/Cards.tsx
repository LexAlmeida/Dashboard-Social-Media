import { Card, Typography } from "@mui/material"

interface MyCardProps {
    at: string,
    followers: number,
    today: number,
}

export const MyCard = ({at, followers, today}:MyCardProps) => {
    return (
        <Card sx={{
            padding: '20px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '5px',
            backgroundColor: 'background.paper',
            boxShadow: 'none',
            color: 'text.primary',}}>
            <Typography 
                color="text.secondary"
                fontSize={12}>
                    {at}
            </Typography>
            <Typography
                fontSize={60} 
                fontWeight='bold'>
                    {followers}
            </Typography>
            <Typography 
                marginTop={-1.5}
                fontSize={10} 
                color="text.secondary" 
                letterSpacing={5}>
                    FOLLOWERS
            </Typography>  
            <Typography 
                marginTop={3}
                fontSize={12} 
                color={today > 0 ? 'green' : 'red'}>
                    {today > 0 ? `+${today}` : today} Today
            </Typography>
        </Card>
    )
}