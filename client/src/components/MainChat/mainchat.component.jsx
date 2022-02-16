import React, { useState } from 'react';
import { axios } from '../../config';

// React icons
import AttachmentIcon from '../../React icons/AttachmentIcon';
import MoreOptionsIcon from '../../React icons/MoreOptionsIcon';
import SearchIcon from '../../React icons/SearchIcon';
import SmileIcon from '../../React icons/SmileIcon';
import MicIcon from '../../React icons/MicIcon';

// Styled components
import StyledMainChat from './mainchat.styledcomponent';

// React components
import { Avatar, Messages } from '../';

export const MainChat = ({ messages }) => {
    const [input, setInput] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();

        if (input === '') return;

        axios
            .post('/messages/new', {
                message: input,
                name: 'Rahul Ravindran',
                received: true,
            })
            .then(() => {
                setInput('');
            });
    };

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

            <div className='mainChat__body'>
                {messages.map((message) => (
                    <Messages message={message} />
                ))}
                <div id='messagesEnd' style={{ visibility: 'hidden' }}></div>
            </div>

            <div className='mainChat__chatbarContainer'>
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
            </div>
        </StyledMainChat>
    );
};
