import { createMuiTheme } from "@material-ui/core/styles";

const mainBlue = "#001F3D";
const mainPurple = "#EBAC26";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${mainBlue}`,
      purple: `${mainPurple}`,
    },
    primary: {
      main: `${mainBlue}`,
    },
    secondary: {
      main: `${mainPurple}`,
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
