import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import GlobalStyles from './styledcomponents/GlobalStyles';
import { lightTheme, darkTheme } from './styledcomponents/Themes';
import { ThemeProvider } from 'styled-components';
import axios from './axios';

// React components
import MainApp from './pages/MainApp';

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

    useEffect(() => {
        axios
            .get('/messages/sync')
            .then((response) => setMessages(response.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const pusher = new Pusher('950a3be25fe26045eb39', {
            cluster: 'ap2',
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        localStorage.setItem('theme', themeState);

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
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
