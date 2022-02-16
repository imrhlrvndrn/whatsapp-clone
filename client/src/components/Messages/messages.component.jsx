import React, { useState, useEffect } from 'react';

// React icons
import ReadIcon from '../../../React icons/ReadIcon';

// Styled components
import StyledMessages from './messages.styledcomponent';

export const Messages = ({ message }) => {
    const [read, setRead] = useState(false);

    useEffect(() => {
        setRead(true);
    }, []);

    const convertTime = (timestamp) => {
        let theDate = new Date(timestamp);
        let hours = theDate.getHours().toString().padStart(2, '0');
        let minutes = theDate.getMinutes().toString().padStart(2, '0');

        let dateString = `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

        return dateString;
    };

    return (
        <StyledMessages read={read} className={`${message.received && 'chat__receiver'}`}>
            <p className='userName'>{message.name}</p>
            <p className='message'>{message.message}</p>
            <div className='timestamp'>
                <p>{convertTime(message.createdAt)}</p>
                <ReadIcon fill='black' width='20px' height='20px' />
            </div>
        </StyledMessages>
    );
};
