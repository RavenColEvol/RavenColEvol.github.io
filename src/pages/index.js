import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet'
import GlobalStyles from '../utils/GlobalStyles';
import theme from '../utils/Theme';
import favicon from '../images/logo.ico'
import App from '../components/App';

export default function Index({data}) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Helmet>
                    <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
                    <title>Ravi Lamkoti | Full Stack Web developer</title>
                </Helmet>
                <App/>
                <GlobalStyles/>
            </>
        </ThemeProvider>
    )
};

