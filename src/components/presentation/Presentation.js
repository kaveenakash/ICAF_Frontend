import React,{useEffect,useContext} from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const Presentation = (props) => {
  const classes = useStyles();
  const history = useHistory();



  return (
    <React.Fragment>
      <Grid container className={classes.presentationContainer} direction="column">
        <Grid container alignItems="center" direction="column" item>
          <Grid item>
            <Typography
              variant="h4"
              className={classes.presentationHeader}
              align="center"
            >
              PRESENTATION
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.presentationBodyContainer}
        >   
          

        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  presentationContainer: {
    marginTop: "6rem",
    marginBottom: "2rem",
  },
  presentationHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.2rem",
  },
  presentationBodyContainer: {
    marginTop: theme.spacing(8),
  },
  workshopContent: {
    marginTop: theme.spacing(3),
  },
  
}));

export default Presentation ;
