import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './utils/GlobalStyles';
import Theme from './utils/Theme';

import App from './App';

ReactDOM.render(
<ThemeProvider theme={Theme}>
    <>
        <App/>
        <GlobalStyles/>
    </>
</ThemeProvider>
, document.getElementById('root'));

