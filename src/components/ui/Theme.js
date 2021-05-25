import { createMuiTheme } from "@material-ui/core/styles";

const mainBlue = "#001F3D";
const mainYellow = "#EBAC26";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${mainBlue}`,
      yellow: `${mainYellow}`,
    },
    primary: {
      main: `${mainBlue}`,
    },
    secondary: {
      main: `${mainYellow}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
});
