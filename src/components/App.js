import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography'
import theme from "./ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant="h2" color="primary">Hello This is Base</Typography>
    </ThemeProvider>
  );
};
export default App;
