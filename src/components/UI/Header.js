import React, { useState, useEffect } from "react";
import {
  Toolbar,
  AppBar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logoContainer: {
    padding: "0px",
    "&:hover": {
      background: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover":{
      background: theme.palette.secondary.light
  }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: "0.7",
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      color: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  draweritem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelectedStyle: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const ElevationScroll = (props) => {
  const { children } = props;

  //an event lister for when a user is scrolling
  const trigger = useScrollTrigger({
    disableHysteresis: true, //delay when user is scrolling
    threshold: 0, //how far before the event trigger starts
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openMenu, setMenuOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setMenuOpen(false);
    props.setSelectedIndex(idx);
  };
  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "iOS/Android App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    const prop = props;
    switch (window.location.pathname) {
      case "/":
        if (prop.value !== 0) {
          props.setValue(0);
        }
        break;
      case "/services":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(0);
        }
        break;
      case "/revolution":
        if (props.value !== 2) {
          props.setValue(2);
        }
        break;
      case "/aboutus":
        if (props.value !== 3) {
          props.setValue(3);
        }
        break;
      case "/contact":
        if (props.value !== 4) {
          props.setValue(4);
        }
        break;
      case "/estimate":
        if (props.value !== 5) {
          props.setValue(5);
        }
        break;
      case "/customsoftware":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(3);
        }
        break;
      default:
        break;
    }
  });

  const tabs = (
    <React.Fragment>
      <Tabs
        indicatorColor="primary"
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(e) => handleClick(e)}
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
        />

        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/aboutus"
          label="About us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        elevation={0}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            selected={props.value === 0}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText
              className={
                props.value === 0
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
          >
            <ListItemText
              selected={props.value === 1}
              className={
                props.value === 1
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>

          <ListItem
            selected={props.value === 2}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
          >
            <ListItemText
              className={
                props.value === 2
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              {" "}
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            selected={props.value === 3}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(3);
            }}
            component={Link}
            to="/aboutus"
          >
            <ListItemText
              className={
                props.value === 3
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>

          <ListItem
            selected={props.value === 4}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
          >
            <ListItemText
              className={
                props.value === 4
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Contact
            </ListItemText>
          </ListItem>

          <ListItem
            selected={props.value === 5}
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText
              className={
                props.value === 5
                  ? [classes.drawerItemSelectedStyle, classes.draweritem]
                  : classes.draweritem
              }
              disableTypography
            >
              Esitame
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        disableTouchRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
              component={Link}
              to="/"
            >
              <img className={classes.logo} src={logo} alt="Logo for company" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
