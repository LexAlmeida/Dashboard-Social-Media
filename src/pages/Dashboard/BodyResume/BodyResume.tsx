import { Grid } from "@mui/material"
import { MyCard } from "./Cards"

export const BodyResume = () => {
    const colors ={
        facebook:'#178ff5',
        youtube:'#c4032a',
        instagram: 'linear-gradient(225deg, #DF4896 0%, #EE877E 50%, #FDC03E 100%)',
        twitter:'#1ca1f1'
    }
    return (
        <Grid spacing={3}
              container
              justifyContent='space-between'
              display='flex'
              >
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="@natanf" followers={1987} today={12} 
                socialColor={colors.facebook}/>
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="@nathanf" followers={1044} today={99} 
                socialColor={colors.twitter}/>
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="@realnathanf" followers={11000} today={1099} 
                socialColor={colors.instagram}/>
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="Nathan F." followers={8239} today={-144} 
                socialColor={colors.youtube}/>
            </Grid>
        </Grid>
    )
}