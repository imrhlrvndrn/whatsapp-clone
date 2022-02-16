import React from 'react';
import Avatar from '../../Avatar/Avatar';

// Styled components
import StyledSidebarChat from './card.styledcomponent';

export const ChatCard = (props) => {
    return (
        <StyledSidebarChat>
            <Avatar imgUrl='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' />
            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p className='lastText'>This will be the last message</p>
            </div>
        </StyledSidebarChat>
    );
};
