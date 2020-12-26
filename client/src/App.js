import React, { useState, useEffect } from 'react';
import GlobalStyles from './styledcomponents/GlobalStyles';
import { lightTheme, darkTheme } from './styledcomponents/Themes';
import { ThemeProvider } from 'styled-components';

// React components
import MainApp from './pages/MainApp';

const App = () => {
    const [themeState, setThemeState] = useState('dark');
    const theme = {
        ...(themeState === 'light' ? lightTheme : darkTheme),
        breakpoints: {
            lg_tablet: 'max-width: 1100px',
            tablet: 'max-width: 770px',
            mobile: 'max-width: 510px',
            sm_mobile: 'max-width: 350px',
        },
    };

    useEffect(() => {
        localStorage.setItem('theme', themeState);
    }, [themeState]);

    const toggleTheme = () => {
        themeState === 'light' ? setThemeState('dark') : setThemeState('light');
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainApp />
        </ThemeProvider>
    );
};

export default App;
