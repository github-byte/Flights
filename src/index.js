import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0,0,0)'  //'#428bfe'
    },
    secondary: {
      main: '#428bfe'
    },
    text: {
      primary: '#212121',  //'#212121',  //'#7c3647',  //'rgba(124, 54, 71, 1)',
      secondary: '#212121',  //'#384E89',  //'#FBAD23',  //'#ffffff',   //'rgba(255, 255, 255, 1)',
      paragraph: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.54)',
    }
  },
  typography: {
    fontFamily: 'Roboto, "Titillium Web", sans-serif',
  },
  // overrides: {
  //     MuiCssBaseline: {
  //       '@global': {
  //         '@font-face': ['Titillium Web', 'sans-serif'],
  //       },
  //     },
  //   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
