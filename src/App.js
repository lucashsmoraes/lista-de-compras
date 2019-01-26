import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import "./App.css";
import Header from "./common/Header";
import Home from "./home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3"
    },
    secondary: {
      main: "#b2ebf2"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
