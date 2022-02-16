import React from 'react';

// Styled components
import StyledMainApp from './app.styledcomponent';

// React components
import { Sidebar, MainChat } from '../../components';

export const MainApp = ({ messages }) => {
    return (
        <StyledMainApp>
            <div className='mainApp'>
                <Sidebar />
                <MainChat messages={messages} />
            </div>
        </StyledMainApp>
    );
};
