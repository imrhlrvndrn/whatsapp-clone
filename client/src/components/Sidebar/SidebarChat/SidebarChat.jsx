import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase';
import Avatar from '../../Avatar/Avatar';

// Styled components
import StyledSidebarChat from './StyledSidebarChat';

const SidebarChat = ({ id, name }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            db.collection('chats')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
    }, [id]);

    return (
        <StyledSidebarChat>
            <Link to={`/chats/${id}`}>
                <Avatar imgUrl='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' />
                <div className='sidebarChat__info'>
                    <h2>{name ? name : 'Room name'}</h2>
                    <p className='lastText'>{messages[0]?.message}</p>
                </div>
            </Link>
        </StyledSidebarChat>
    );
};

export default SidebarChat;
