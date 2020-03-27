import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from '../utils/GlobalStyles';
import Theme from '../utils/Theme';

import App from '../components/App';

export default () => (
    <ThemeProvider theme={Theme}>
        <>
            <App/>
            <GlobalStyles/>
        </>
    </ThemeProvider>
);

