import * as React from 'react';
import ReactDOM from 'react-dom';
import { PortofolioApp } from './containers/PortofolioApp';
import {ThemeProvider} from "styled-components";
import {
    BrowserRouter as Router,
} from "react-router-dom";

export const theme = {
    colors: {
        darkerGrey: '#181818',
        darkGrey: '#252a33',
        darkGreyHover: '#a2a2a2',
        green: '#1db954'
    }
}

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <ThemeProvider theme={theme}>
              <PortofolioApp />
          </ThemeProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

