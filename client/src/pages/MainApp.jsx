import React from 'react';

// Styled components
import StyledMainApp from './StyledMainApp';

// React components
import Sidebar from '../components/Sidebar/Sidebar';
import MainChat from '../components/MainChat/MainChat';

const MainApp = () => {
    return (
        <StyledMainApp>
            <div className='mainApp'>
                <Sidebar />
                <MainChat />
            </div>
        </StyledMainApp>
    );
};

export default MainApp;
