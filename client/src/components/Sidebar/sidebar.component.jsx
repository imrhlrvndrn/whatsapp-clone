import React from 'react';

// Styled conponents
import StyledSidebar from './sidebar.styledcomponent';

// React icons
import StoriesIcon from '../../React icons/StoriesIcon';

// React components
import { Avatar, ChatCard } from '../';
import MessageIcon from '../../React icons/MessageIcon';
import MoreOptionsIcon from '../../React icons/MoreOptionsIcon';
import SearchIcon from '../../React icons/SearchIcon';

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <div className='sidebar__header'>
                <Avatar
                    width='45px'
                    height='45px'
                    imgUrl='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
                />
                <div className='sidebar__header__icons'>
                    <StoriesIcon />
                    <MessageIcon />
                    <MoreOptionsIcon />
                </div>
            </div>
            <div className='sidebarSearchContainer'>
                <div className='sidebarSearchContainer__input'>
                    <SearchIcon />
                    <input
                        type='text'
                        name='searchBar'
                        id='searchBar'
                        placeholder='Search or start a new chat'
                    />
                </div>
            </div>
            <div className='sidebarChat'>
                <ChatCard />
            </div>
        </StyledSidebar>
    );
};
