import { createMuiTheme } from "@material-ui/core";

const dapBlue = "#0b72b9";
const dapOrange = "#FFba60";

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
  },
});
