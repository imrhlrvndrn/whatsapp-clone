import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDataLayerValue } from '../../../DataLayer';

// React icons
import ReadIcon from '../../../React icons/ReadIcon';

// Styled components
import StyledMessages from './StyledMessages';

const Messages = ({ message }) => {
    const [read, setRead] = useState(false);
    const [{ user }, dispatch] = useDataLayerValue();

    useEffect(() => {
        setRead(true);
    }, []);

    const convertTime = (timestamp) => {
        let theDate = new Date(timestamp);
        console.log(timestamp);
        let hours = Math.floor(timestamp?.seconds / 86400);
        let minutes = Math.floor((timestamp?.seconds % 3600) / 60);
        // let hours = theDate.getHours().toString().padStart(2, '0');
        // let minutes = theDate.getMinutes().toString().padStart(2, '0');

        let dateString = `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

        return dateString;
    };

    return (
        <StyledMessages
            read={read}
            className={`${message?.userId === user?.uid && 'chat__receiver'}`}
        >
            <p className='userName'>{message?.name}</p>
            <p className='message'>{message?.message}</p>
            <div className='timestamp'>
                <p>{moment(new Date(message?.timestamp?.toDate())).format('hh:mm A')}</p>
                <ReadIcon fill='black' width='20px' height='20px' />
            </div>
        </StyledMessages>
    );
};

export default Messages;
