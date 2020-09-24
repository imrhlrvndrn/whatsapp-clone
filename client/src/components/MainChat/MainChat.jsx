import React from 'react';

// React icons
import AttachmentIcon from '../../React icons/AttachmentIcon';
import MoreOptionsIcon from '../../React icons/MoreOptionsIcon';
import SearchIcon from '../../React icons/SearchIcon';

// Styled components
import StyledMainChat from './StyledMainChat';

// React components
import Avatar from '../Avatar/Avatar';

const MainChat = () => {
    return (
        <StyledMainChat>
            <div className='mainChat__header'>
                <Avatar
                    width='45px'
                    height='45px'
                    imgUrl='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
                />
                <div className='mainChat__header__info'>
                    <h2>Room name</h2>
                    <p className='mainChat__header__info__lastSeen'>Last seen at ...</p>
                </div>
                <div className='mainChat__header__icons'>
                    {/* <AttachmentIcon /> */}
                    <SearchIcon />
                    <MoreOptionsIcon />
                </div>
            </div>

            <div className='mainChat__chatbar'></div>
        </StyledMainChat>
    );
};

export default MainChat;
