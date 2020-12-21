import React from "react";
import Lottie from "react-lottie";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent
} from "@material-ui/core";
import animations from "../animations/landinganimation/data";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import ButtonArrow from "../components/UI/ButtonArrow";
import MobilesAppsIcons from "../assets/mobileIcon.svg";
import WebsiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from '../assets/repeatingBackground.svg'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    maxHeight: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    marginBottom: "12em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      marginBottom: 0,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    background: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    fontFamily: "Pacifico",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginRight: "1em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground:{
    backgroundImage: 'url(' + revolutionBackground +')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard:{
    textAlign: 'center',
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]:{
      padding: '8em 0 8em 0',
      borderRadius: 0,
      width: '100%'
    
    }
  }

}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {/*-----Hero Block----- */}
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm className={classes.heroContainer} item>
              <Typography variant="h2" align="center">
                Bring west coast technology <br /> to the mid-west
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                  >
                    Free Esitmate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm className={classes.animation} item>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*----Custom Software Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>

            <Typography variant="subtitle1">
              Complete digital solution, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custome software icon"
              src={CustomSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*----iso/Android Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>

            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform{" "}
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="iOS/Android icon"
              src={MobilesAppsIcons}
            />
          </Grid>
        </Grid>
      </Grid>


      <Grid item>
        {" "}
        {/*----Custom Software Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Reach More. Discover More. Sell More
            </Typography>

            <Typography variant="subtitle1">
              Optimized for search engines built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="Websit edevelopment icon"
              src={WebsiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container alignItems='center' justify='center' style={{height:'100em', marginTOp:'12em'}}>
        <Card variant='outlined' className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h3' gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle1'>
                    Visionary insight coupled with cutting-edge technology is a recipe for revolution
                </Typography>
                <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground} />
        </Grid>
        
      </Grid>

    </Grid>
  );
};

export default LandingPage;
