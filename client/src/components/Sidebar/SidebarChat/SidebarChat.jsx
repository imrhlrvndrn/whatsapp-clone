import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../../../DataLayer';
import { db } from '../../../firebase';
import Avatar from '../../Avatar/Avatar';

// Styled components
import StyledSidebarChat from './StyledSidebarChat';

const SidebarChat = ({ id, name, imgUrl }) => {
    const [messages, setMessages] = useState([]);
    const [{ appState }, dispatch] = useDataLayerValue();

    useEffect(() => {
        if (id) {
            db.collection('chats')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                // ! Optimize the below query to only limit retrieving one message i.e. the last one
                .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
    }, [id]);

    return (
        <StyledSidebarChat
            onClick={() => dispatch({ type: 'SET_APP_STATE', appState: 'mainChat' })}
        >
            <Link to={`/chats/${id}`}>
                <Avatar imgUrl={imgUrl} />
                <div className='sidebarChat__info'>
                    <h2>{name ? name : 'Room name'}</h2>
                    {messages?.length > 1 && (
                        <p className='lastText'>{`${messages[0]?.message.slice(0, 25)}...`}</p>
                    )}
                </div>
            </Link>
        </StyledSidebarChat>
    );
};

export default SidebarChat;
