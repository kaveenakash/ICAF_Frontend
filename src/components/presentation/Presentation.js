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
  const bull = <span className={classes.bullet}>•</span>;



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
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="h2" className={classes.pos} >
              {bull}Advanced Instrumental Techniques and Future of Advanced Materials
            </Typography>
        
            <Typography variant="body2" component="p">
          
              {'"This presentation focuses on advance instrumental techniques and future advance materials. Advanced instrumental techniques, namely; scanning electron microscopy (SEM), transmission electron microscopy (TEM) based instrumental techniques are widely used in experimental research in various streams of science and engineering. The knowledge on the advanced instrumental techniques is crucial for experimental research, failure analysis, and quality assurance. Future advance materials open an avenue for design and development of new devices. The scope of this workshop is firstly to acquaint participants with a fundamental understanding of the theoretical basis as well as the practical applications of these instrumental techniques along with lectures and demonstrations on the techniques. Secondly to rise awareness on future advance materials for cutting-edge research and new developments along with lectures, research guidance, international collaboration, fundraising, and project investigations."'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"
              variant="contained"
              color="secondary">
               Download Presentation
            </Button>
          </CardActions>
        </Card>

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
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
}));

export default Presentation ;
