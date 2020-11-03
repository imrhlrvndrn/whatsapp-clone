import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';

// Styled conponents
import StyledSidebar from './StyledSidebar';

// React icons
import StoriesIcon from '../../React icons/StoriesIcon';

// React components
import Avatar from '../Avatar/Avatar';
import MessageIcon from '../../React icons/MessageIcon';
import MoreOptionsIcon from '../../React icons/MoreOptionsIcon';
import SearchIcon from '../../React icons/SearchIcon';
import SidebarChat from './SidebarChat/SidebarChat';

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) => {
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });

        return () => unsubscribe();
    }, []);

    const createNewChat = () => {
        const newChatName = prompt('Enter a name for the new chat');

        if (newChatName) db.collection('chats').add({ name: newChatName });
    };

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
                <div className='addNewRoom' onClick={createNewChat}>
                    Start new chat
                </div>
                <SidebarChat />
                {rooms?.map((room) => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;
