import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Avatar/Avatar';

// Styled components
import StyledSidebarChat from './StyledSidebarChat';

const SidebarChat = ({ id, name }) => {
    return (
        <StyledSidebarChat>
            <Link to={`/chats/${id}`}>
                <Avatar imgUrl='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' />
                <div className='sidebarChat__info'>
                    <h2>{name ? name : 'Room name'}</h2>
                    <p className='lastText'>This will be the last message</p>
                </div>
            </Link>
        </StyledSidebarChat>
    );
};

export default SidebarChat;
