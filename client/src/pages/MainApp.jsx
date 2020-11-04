import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer';

// Styled components
import StyledMainApp from './StyledMainApp';

// React components
import Sidebar from '../components/Sidebar/Sidebar';
import MainChat from '../components/MainChat/MainChat';
import Login from './Login/Login';

const MainApp = ({ messages }) => {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <StyledMainApp>
            {user ? (
                <div className='mainApp'>
                    <Router>
                        <Sidebar />
                        <Route exact path='/chats/:chatId' component={MainChat} />
                    </Router>
                </div>
            ) : (
                <Login />
            )}
        </StyledMainApp>
    );
};

export default MainApp;
