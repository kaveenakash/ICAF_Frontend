import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography'
import theme from "./ui/Theme";
import Header from './ui/Header'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}/>
          <Route exact path="/keynotes" component={() => <div>keynotes</div>}/>
          <Route exact path="/precentations" component={() => <div>precentations</div>}/>
          <Route exact path="/downloads" component={() => <div>downloads</div>}/>
          <Route exact path="/registration" component={() => <div>registration</div>}/>
          <Route exact path="/workshops" component={() => <div>workshops</div>}/>
          <Route exact path="/contact-us" component={() => <div>Contact us</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
