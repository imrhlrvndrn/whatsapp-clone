import React, { useState, useEffect } from 'react';
import GlobalStyles from './styledcomponents/GlobalStyles';
import { lightTheme, darkTheme } from './styledcomponents/Themes';
import { ThemeProvider } from 'styled-components';
import { axios } from './config';

// React components
import { MainApp } from './pages';

const App = () => {
    const [themeState, setThemeState] = useState('light');
    const [messages, setMessages] = useState([]);
    const theme = {
        ...(themeState === 'light' ? lightTheme : darkTheme),
        breakpoints: {
            lg_tablet: 'max-width: 1100px',
            tablet: 'max-width: 770px',
            mobile: 'max-width: 510px',
            sm_mobile: 'max-width: 350px',
        },
    };

    // useEffect(() => {
    //     axios
    //         .get('/messages/sync')
    //         .then((response) => setMessages(response.data))
    //         .catch((err) => console.log(err));
    // }, []);

    useEffect(() => {
        localStorage.setItem('theme', themeState);
    }, [themeState, messages]);

    const toggleTheme = () => {
        themeState === 'light' ? setThemeState('dark') : setThemeState('light');
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainApp messages={messages} />
        </ThemeProvider>
    );
};

export default App;
