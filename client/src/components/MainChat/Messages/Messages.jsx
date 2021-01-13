import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { db } from '../../../firebase';
import { useDataLayerValue } from '../../../DataLayer';

// React icons
import ReadIcon from '../../../React icons/ReadIcon';

// Styled components
import StyledMessages from './StyledMessages';

// React component
import ContextMenu from '../../ContextMenu/ContextMenu';
import MoreOptionsIcon from '../../../React icons/MoreOptionsIcon';

const Messages = ({ message }) => {
    const [read, setRead] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);
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
                <div className='messageHeader'>
                    <p className='userName'>{message?.data?.name}</p>
                    {user?.userId === message?.data?.userId && (
                        <MoreOptionsIcon onClick={() => setShowContextMenu(!showContextMenu)} />
                    )}
                </div>
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
                        menu={[
                            {
                                name: 'Delete',
                                onClick: (messageId) => {
                                    db.collection('chats')
                                        .doc(`${chatDetails?.id}`)
                                        .collection('messages')
                                        .doc(`${messageId}`)
                                        .delete()
                                        .then(() => console.log('Message deleted'))
                                        .catch((error) => console.error(error));

                                    console.log(`
                                        Message delete initiated:
                                        chatId: ${chatDetails?.id},
                                        messageId: ${message?.id}
                                    `);
                                },
                            },
                            { name: 'Edit' },
                            { name: 'Reply' },
                        ]}
                        setShowContextMenu={setShowContextMenu}
                    />
                )}
            </StyledMessages>
        </>
    );
};

export default Messages;
