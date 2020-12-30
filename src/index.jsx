import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import App from './components/App/App';

const Root = () => {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  };


ReactDOM.render( <Root /> , document.getElementById('app'));