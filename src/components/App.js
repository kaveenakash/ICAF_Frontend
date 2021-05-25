import React,{useState} from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography'
import theme from "./ui/Theme";
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Precentation from './Precentation'

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
        <Header value={value} setValue={setValue}/>
        <Switch>
          <Route exact path="/" component={() => <div >Home</div>}/>
          <Route exact path="/keynotes" component={() => <div>keynotes</div>}/>
          <Route exact path="/precentations" component={Precentation}/>
          <Route exact path="/downloads" component={() => <div>downloads</div>}/>
          <Route exact path="/registration" component={() => <div>registration</div>}/>
          <Route exact path="/workshops" component={() => <div>workshops</div>}/>
          <Route exact path="/contact-us" component={() => <div>Contact us</div>}/>
        </Switch>
        <Footer value={value} setValue={setValue}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
