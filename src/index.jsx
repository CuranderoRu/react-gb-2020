import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { Provider } from 'react-redux';
import store from './store/store'


import App from './components/App/App';

const Root = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
};


ReactDOM.render(<Root />, document.getElementById('app'));