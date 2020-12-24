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
    const [{ user, chatDetails, messages, chatInfo }, dispatch] = useDataLayerValue();
    const chatId = match.params.chatId;
    const [chatOptionsModal, setChatOptionsModal] = useState(false);
    const [input, setInput] = useState('');
    const [isMember, setIsMember] = useState(false);

    useEffect(() => {
        if (chatId) {
            let snapshotData = {};
            const unsubscribe = db
                .collection('chats')
                .doc(chatId)
                .onSnapshot(async (snapshot) => {
                    // Check if the chat is a DM or a Group
                    if (snapshot?.data()?.members.length === 2) {
                        const chatMember = snapshot
                            ?.data()
                            ?.members.filter((member) => member?.memberId !== user?.uid);

                        const fetchMember = async () => {
                            const fetchedMember = await db
                                .collection('members')
                                .doc(chatMember[0]?.memberId)
                                .get();

                            snapshotData = {
                                ...snapshot?.data(),
                                photoURL: fetchedMember?.data()?.photoURL,
                                name: fetchedMember?.data()?.name,
                            };
                            console.log('Members data: ', fetchedMember?.data());
                            console.log('Constructed snapshot data: ', snapshotData);
                        };

                        await fetchMember();
                    } else {
                        snapshotData = snapshot?.data();
                    }

                    console.log('Snapshot data: ', snapshotData);

                    dispatch({ type: 'SET_CHAT_DETAILS', chatDetails: snapshotData });
                    dispatch({ type: 'SET_CHAT_MESSAGES', messages: [] });

                    // Check if the logged in user is a member of the chat
                    let isMemberOfChat = snapshot
                        ?.data()
                        ?.members?.filter((member) => member?.memberId === user?.uid);

                    console.log(isMemberOfChat.length);

                    if (isMemberOfChat?.length >= 1) {
                        setIsMember(true);
                        db.collection('chats')
                            .doc(chatId)
                            .collection('messages')
                            .orderBy('timestamp', 'desc')
                            .limit(4)
                            .onSnapshot((messageSnapshot) =>
                                dispatch({
                                    type: 'SET_CHAT_MESSAGES',
                                    messages: messageSnapshot.docs
                                        .map((doc) => ({
                                            id: doc.id,
                                            data: doc.data(),
                                        }))
                                        .reverse(),
                                })
                            );
                    } else {
                        setIsMember(false);
                    }
                });

            return () => unsubscribe();
        }
    }, [chatId]);

    const joinChatGroup = () => {
        if (chatDetails === undefined) return;
        let memberExists = chatDetails?.members?.filter((member) => member?.memberId === user?.uid);
        if (memberExists.length > 0) {
            return;
        } else {
            db.collection('chats')
                .doc(chatId)
                .set(
                    {
                        members: [...chatDetails?.members, { memberId: user?.uid, roles: [] }],
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
    console.log('chatId: ', chatId);
    return (
        <StyledMainChat chatInfo={chatInfo}>
            <div className='mainChat__header'>
                <Avatar width='45px' height='45px' imgUrl={chatDetails?.photoURL} />
                <div className='mainChat__header__info'>
                    <h2>{chatDetails?.name}</h2>
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
                    <div onClick={() => setChatOptionsModal(!chatOptionsModal)}>
                        <MoreOptionsIcon />
                    </div>
                    {chatOptionsModal && (
                        <div className='chatOptionsModal'>
                            <span
                                onClick={() => {
                                    setChatOptionsModal(false);
                                    dispatch({ type: 'SET_CHAT_INFO', chatInfo: !chatInfo });
                                }}
                                className='chatOptionsModal__options'
                            >
                                {chatDetails?.members?.length > 2 ? 'Group info' : 'User info'}
                            </span>
                            <span
                                onClick={() => setChatOptionsModal(false)}
                                className='chatOptionsModal__options'
                            >
                                Clear messages
                            </span>
                            <span
                                onClick={() => setChatOptionsModal(false)}
                                className='chatOptionsModal__options'
                            >
                                {chatDetails?.members?.length > 2 ? 'Exit group' : 'Delete chat'}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className='mainChat__body'>
                {messages.map((message) => (
                    <Messages key={message.id} message={message} />
                ))}
                <div id='messagesEnd' style={{ visibility: 'hidden' }}></div>
            </div>

            <div className='mainChat__chatbarContainer'>
                {isMember ? (
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
                    <button
                        disabled={chatId === undefined}
                        className='mainChat__chatbarContainer__joinChatGroupButton'
                        onClick={joinChatGroup}
                    >
                        Join Group
                    </button>
                )}
            </div>
        </StyledMainChat>
    );
};

export default MainChat;
