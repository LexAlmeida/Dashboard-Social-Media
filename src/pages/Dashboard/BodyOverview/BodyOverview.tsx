import { Grid } from "@mui/material"
import { MyCard } from "./Cards"

export const BodyOverview = () => {
    return (
        <Grid spacing={3}
              rowSpacing={2}
              container
              justifyContent='space-between'
              display='flex'
              >
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Page Views" icon="facebook" number={87} today={3} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon="facebook" number={52} today={-2} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon="instagram" number={5462} today={2257} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Profile Views" icon="instagram" number={52000} today={1375} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Retweets" icon="twitter" number={117} today={303} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon="twitter" number={507} today={553} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon="youtube" number={107} today={-19} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Total Views" icon="youtube" number={1407} today={-12} />
            </Grid>
        </Grid>
    )
}