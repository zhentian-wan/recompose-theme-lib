import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  {ThemeProvider} from 'styled-components';

import theme from './themes/default';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);
