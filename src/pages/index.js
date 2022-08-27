import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet'
import GlobalStyles from '../utils/GlobalStyles';
import theme from '../utils/Theme';
import favicon from '../images/logo.ico'
import App from '../components/App';
import { ThemeSwitchProvider } from '../utils/themeContext';


export default function Index() {
    const [currTheme, setTheme] = useState('light');
    theme['currTheme'] = currTheme;
    return (
        <ThemeProvider key={currTheme} theme={theme} >
            <ThemeSwitchProvider value={{currTheme, setTheme}}>
                <Helmet>
                    <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
                    <title>Ravi Lamkoti | Full Stack Web developer</title>
                </Helmet>
                <App/>
                <GlobalStyles/>
            </ThemeSwitchProvider>
        </ThemeProvider>
    )
};

