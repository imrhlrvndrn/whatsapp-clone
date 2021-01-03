import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { db } from '../../../firebase';
import useContextMenu from '../../../utils/useContextMenu';
import { useDataLayerValue } from '../../../DataLayer';

// React icons
import ReadIcon from '../../../React icons/ReadIcon';

// Styled components
import StyledMessages from './StyledMessages';

// React component
import ContextMenu from '../../ContextMenu/ContextMenu';

const Messages = ({ message }) => {
    const [read, setRead] = useState(false);
    const { xPos, yPos, showContextMenu } = useContextMenu();
    const [{ user, chatDetails }, dispatch] = useDataLayerValue();

    useEffect(() => {
        setRead(true);
    }, []);

    console.log('Message details: ', message);

    return (
        <>
            <StyledMessages
                read={read}
                className={`${
                    message?.data?.userId === user?.userId && 'chat__receiver'
                } messageContainer`}
            >
                <p className='userName'>{message?.data?.name}</p>
                <p className='message'>{message?.data?.message}</p>
                <div className='timestamp'>
                    <p>{moment(new Date(message?.data?.timestamp?.toDate())).format('hh:mm A')}</p>
                    {message?.userId === user?.userId && (
                        <ReadIcon fill='black' width='20px' height='20px' />
                    )}
                </div>
                {showContextMenu && (
                    <ContextMenu
                        id={message?.id}
                        position={{ xPos, yPos }}
                        menu={[{ name: 'Delete' }, { name: 'Edit' }, { name: 'Reply' }]}
                    />
                )}
            </StyledMessages>
        </>
    );
};

export default Messages;
