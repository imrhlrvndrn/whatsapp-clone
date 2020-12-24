import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import CloseIcon from '../../React icons/CloseIcon';

// Styled components
import StyledChatInfo from './StyledChatInfo';

// Images
import WhatsAppDefault from '../../React icons/whatsapp_default.svg';

const ChatInfo = (props) => {
    const [{ chatInfo, chatDetails }, dispatch] = useDataLayerValue();

    return (
        <StyledChatInfo chatInfo={chatInfo}>
            <div className='chat_info_header'>
                <CloseIcon
                    onClick={() => dispatch({ type: 'SET_CHAT_INFO', chatInfo: !chatInfo })}
                />
                <h2>{chatDetails?.members?.length > 2 ? 'Group info' : 'Chat info'}</h2>
            </div>
            <div className='chat_info_body'>
                <img src={chatDetails?.photoURL || WhatsAppDefault} alt={chatDetails?.name} />
                <div className='chat_info_content_group'>
                    <h3>{}</h3>
                </div>
            </div>
        </StyledChatInfo>
    );
};

export default ChatInfo;
