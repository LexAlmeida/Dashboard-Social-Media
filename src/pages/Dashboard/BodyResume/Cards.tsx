import { Card, Typography } from "@mui/material"

interface MyCardProps {
    at: string,
    followers: number,
    today: number,
}

export const MyCard = ({at, followers, today}:MyCardProps) => {
    return (
        <Card sx={{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}   >
            <Typography fontSize={12}>{at}</Typography>
            <Typography fontSize={30}>{followers}</Typography>
            <Typography fontSize={16}>Followers</Typography>  
            <Typography fontSize={12} color={today > 0 ? 'green' : 'red'}>{today > 0 ? `+${today}` : today} Today</Typography>
        </Card>
    )
}