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

    return (
        <StyledMessages
            read={read}
            className={`${message?.data?.userId === user?.uid && 'chat__receiver'}`}
        >
            <p className='userName'>{message?.data?.name}</p>
            <p className='message'>{message?.data?.message}</p>
            <div className='timestamp'>
                <p>{moment(new Date(message?.data?.timestamp?.toDate())).format('hh:mm A')}</p>
                {message?.userId === user?.uid && (
                    <ReadIcon fill='black' width='20px' height='20px' />
                )}
            </div>
        </StyledMessages>
    );
};

export default Messages;
