import React, { useState, useEffect } from 'react';
import moment from 'moment';
import firebase from 'firebase';
import { db } from '../../firebase';
import { useDataLayerValue } from '../../DataLayer';

// React icons
import AttachmentIcon from '../../React icons/AttachmentIcon';
import MoreOptionsIcon from '../../React icons/MoreOptionsIcon';
import SearchIcon from '../../React icons/SearchIcon';
import SmileIcon from '../../React icons/SmileIcon';
import MicIcon from '../../React icons/MicIcon';

// Styled components
import StyledMainChat from './StyledMainChat';

// React components
import Avatar from '../Avatar/Avatar';
import Messages from './Messages/Messages';

const MainChat = ({ match }) => {
    const [{ user }, dispatch] = useDataLayerValue();
    const chatId = match.params.chatId;
    const [messages, setMessages] = useState([]);
    const [chatDetails, setChatDetails] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        if (chatId) {
            db.collection('chats')
                .doc(chatId)
                .onSnapshot((snapshot) => {
                    setChatDetails([snapshot?.data()]);

                    if (snapshot?.data()?.members?.includes(user?.uid)) {
                        db.collection('chats')
                            .doc(chatId)
                            .collection('messages')
                            .orderBy('timestamp', 'asc')
                            .onSnapshot((snapshot) =>
                                setMessages(
                                    snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
                                )
                            );
                    }
                });
        }
    }, [chatId]);

    const joinChatGroup = () => {
        if (chatDetails[0]?.members?.includes(user?.uid)) {
            return;
        } else {
            db.collection('chats')
                .doc(chatId)
                .set(
                    {
                        members: [...chatDetails[0]?.members, user?.uid],
                    },
                    { merge: true }
                );
        }
    };

    const sendMessage = (event) => {
        event.preventDefault();
        if (input === '') return;

        db.collection('chats').doc(chatId).collection('messages').add({
            message: input,
            name: user?.name,
            userId: user?.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };
    console.log(chatDetails);

    // fetchChatMessages(chatId);
    return (
        <StyledMainChat>
            <div className='mainChat__header'>
                <Avatar width='45px' height='45px' imgUrl={chatDetails[0]?.photoURL} />
                <div className='mainChat__header__info'>
                    <h2>{chatDetails[0]?.name}</h2>
                    {messages.length > 0 && (
                        <p className='mainChat__header__info__lastSeen'>
                            Last message on{' '}
                            {moment(
                                new Date(messages[messages.length - 1]?.data?.timestamp?.toDate())
                            ).format('hh:mm A')}
                        </p>
                    )}
                </div>
                <div className='mainChat__header__icons'>
                    {/* <AttachmentIcon /> */}
                    <SearchIcon />
                    <MoreOptionsIcon />
                </div>
            </div>

            <div className='mainChat__body'>
                {messages.map((message) => (
                    <Messages key={message.id} message={message} />
                ))}
                <div id='messagesEnd' style={{ visibility: 'hidden' }}></div>
            </div>

            <div className='mainChat__chatbarContainer'>
                {messages.length > 0 ? (
                    <>
                        <SmileIcon />
                        <form className='mainChat__chatbarContainer__chatForm'>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type='text'
                                name='chatbarInput'
                                id='chatbarInput'
                                placeholder='Type a message'
                            />
                            <button onClick={sendMessage} type='submit'>
                                Send a message
                            </button>
                        </form>
                        <MicIcon />
                    </>
                ) : (
                    <div
                        className='mainChat__chatbarContainer__joinChatGroupButton'
                        onClick={joinChatGroup}
                    >
                        Join Group
                    </div>
                )}
            </div>
        </StyledMainChat>
    );
};

export default MainChat;
