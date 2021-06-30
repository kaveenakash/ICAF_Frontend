import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

export default function Presentation() {
    const classes = useStyles();
    return (
        <div>
             <Typography
              variant="h4"
              align="center"
              className={classes.presentationHeader}
            >
              Presentation
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    
    presentationHeader: {
      fontFamily: "Raleway",
      fontWeight: 800,
      color: theme.palette.common.blue,
    },
    divider: {
        backgroundColor: theme.palette.common.yellow,
        height: "0.2rem",
      },
  }));
  
