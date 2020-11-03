import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// Styled components
import StyledMainApp from './StyledMainApp';

// React components
import Sidebar from '../components/Sidebar/Sidebar';
import MainChat from '../components/MainChat/MainChat';

const MainApp = ({ messages }) => {
    return (
        <StyledMainApp>
            <div className='mainApp'>
                <Router>
                    <Sidebar />
                    <Route exact path='/chats/:chatId' component={MainChat} />
                </Router>
            </div>
        </StyledMainApp>
    );
};

export default MainApp;
