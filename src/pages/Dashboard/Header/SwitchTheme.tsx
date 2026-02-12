import { Switch, Typography } from "@mui/material"

export const Switcher = () => {
    return (
        <>
        <Typography>Dark Mode</Typography>
        <Switch sx={{
            m: 1,
          width: 49,
          height: 24,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            marginTop: "2px",
            marginLeft: "4.33px",
            transitionDuration: '300ms',
            '&.Mui-checked': {
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundImage: "linear-gradient(to right,hsl(210, 79%, 56%),hsl(146, 68%, 55%)) ",
                opacity: 1,
                border: 0
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '4px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.7,
            },
          },
          '& .MuiSwitch-thumb': {
            width: 20,
            height: 20,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: "hsl(230, 22%, 74%)",
            opacity: 1,
          },
        }}></Switch>
        </>
    )
}