import * as React from 'react';
import ReactDOM from 'react-dom';
import { PortofolioApp } from './containers/PortofolioApp';
import {ThemeProvider} from "styled-components";


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
      <ThemeProvider theme={theme}>
          <PortofolioApp />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

