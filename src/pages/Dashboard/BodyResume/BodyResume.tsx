import { Grid } from "@mui/material"
import { MyCard } from "./Cards"

export const BodyResume = () => {
    return (
        <Grid spacing={3}
              container
              justifyContent='space-between'
              display='flex'
              >
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="@natanf" followers={1987} today={12} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="@nathanf" followers={1044} today={99} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="@realnathanf" followers={11000} today={1099} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard at="Nathan F." followers={8239} today={-144} />
            </Grid>
        </Grid>
    )
}