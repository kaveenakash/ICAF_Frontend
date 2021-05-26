import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { colors } from "@material-ui/core";
import { aboutDetailsOne, aboutDetailsTwo } from "../../store/data";
import { useMediaQuery } from "@material-ui/core";

const BlockThree = (props) => {
  const classes = useStyles();

  return (
    <Grid item direction="column">

    <Grid item container direction="column" className={classes.newsContainer} alignItems="center">
      <Grid item>
        <center>
          <Typography variant="h4" className={classes.newsHeader}>
            Latest News
          </Typography>
        </center>
        <Divider variant="middle" className={classes.divider} light />
      </Grid>

    </Grid>
    <Grid item container>

    </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  newsHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.125rem",
  },
}));

export default BlockThree;
