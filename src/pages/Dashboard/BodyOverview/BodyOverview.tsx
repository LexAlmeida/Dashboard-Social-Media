import { Grid } from "@mui/material"
import { MyCard } from "./Cards"
import iconFacebook from "../../../assets/iconFacebook.svg"
import IconInstagram from "../../../assets/iconInstagram.svg"
import IconTwitter from "../../../assets/iconTwitter.svg"
import IconYoutube from "../../../assets/iconYoutube.svg"


export const BodyOverview = () => {
    return (
        <Grid spacing={3}
              rowSpacing={2}
              container
              justifyContent='space-between'
              display='flex'
              >
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Page Views" icon={iconFacebook} number={87} today={3} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon={iconFacebook} number={52} today={-2} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon={IconInstagram} number={5462} today={2257} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Profile Views" icon={IconInstagram} number={52000} today={1375} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Retweets" icon={IconTwitter} number={117} today={303} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon={IconTwitter} number={507} today={553} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Likes" icon={IconYoutube} number={107} today={-19} />
            </Grid>
            <Grid size={ {xs:12, sm:6, md:3}}>
                <MyCard title="Total Views" icon={IconYoutube} number={1407} today={-12} />
            </Grid>
        </Grid>
    )
}