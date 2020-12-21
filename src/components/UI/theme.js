import { createMuiTheme } from "@material-ui/core";

const dapBlue = "#0b72b9";
const dapOrange = "#FFba60";
const dapgrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${dapBlue}`,
      orange: `${dapOrange}`,
    },
    primary: {
      main: `${dapBlue}`,
    },
    secondary: {
      main: `${dapOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacificon",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.2rem",
      color: dapBlue,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: dapBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      color: dapBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: dapgrey,
    },
    learnButton: {
      borderColor: dapBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadiuis: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
