import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

const Root = () => {
    return (
      <App />
    );
  };


ReactDOM.render( <Root /> , document.getElementById('app'));