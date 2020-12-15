import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Link } from 'react-router-dom'
import FB from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "24em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "17em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "13em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: 'none'
  },
  gridItem:{
      margin: '3em'
  },
  icon:{
      height: '4em',
      width: '4em',
      [theme.breakpoints.down('xs')]:{
          height:'2.5em',
          width:'2.5em'
      }
  },
  socialContainer:{
      position: 'absolute',
      marginTop:'-6em',
      right: '1.5em',
      [theme.breakpoints.down('xs')]:{
       right: '0.6em'
    }
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Hidden mdDown>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(0)} to='/' className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem} item>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} to='/services' className={classes.link}>
              Services
            </Grid>
            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} to='/customsoftware' className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} to='/mobileapps' className={classes.link}>
              Mobile App Development
            </Grid>
            <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} to='/website' className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem} item>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(2)} to='/revolution' className={classes.link}>
              The Revolution
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(2)} to='/revolution' className={classes.link}>
              Vision
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(2)} to='/revolution' className={classes.link}>
              Technology
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(2)} to='/revolution' className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem} item>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={() => props.setValue(3)} to='/aboutus' className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(3)} className={classes.link} to='/about'>
              History
            </Grid>
            <Grid item component={Link} onClick={() => props.setValue(3)}  to='/about'className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem} item>
          <Grid container direction="column" spacing={2}> 
            <Grid item component={Link} to='/contact' onClick={() => props.setValue(4)} className={classes.link}>Contact Us</Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>


      <img
        className={classes.adornment}
        alt="black decorative slash"
        src={footerAdornment}
      />

      <Grid container spacing={2} justify='flex-end' className={classes.socialContainer}>
          <Grid item component={"a"} href='http://www.facebook.com' rel='no-opener noreferrer' target='_blank'>
              <img className={classes.icon}  alt='facebook icon' src={FB}  />
          </Grid>
          <Grid item component={"a"} href='http://www.twitter.com' rel='no-opener noreferrer' target='_blank'>
              <img className={classes.icon}  alt='twitter icon' src={Twitter}  />
          </Grid>
          <Grid item component={"a"} href='http://www.instagram.com' rel='no-opener noreferrer' target='_blank'>
              <img className={classes.icon} alt='instagram' src={Instagram} />
          </Grid>

      </Grid>
    </footer>
  );
};

export default Footer;
