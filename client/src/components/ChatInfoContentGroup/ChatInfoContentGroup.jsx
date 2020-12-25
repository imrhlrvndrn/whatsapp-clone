import React from 'react';
import { useDataLayerValue } from '../../DataLayer';

// Styled components
import StyledChatInfoContentGroup from './StyledChatInfoContentGroup';

const ChatInfoContentGroup = ({ title, content, Icon, color, onClick }) => {
    const [{ chatDetails }, dispatch] = useDataLayerValue();

    return (
        <StyledChatInfoContentGroup color={color} onClick={onClick}>
            <div className='copy'>
                <h3>{title}</h3>
                {Array.isArray(content) ? (
                    content.map((contentItem) => <p className='copy_participants'>{contentItem}</p>)
                ) : (
                    <p>{content === 'undefined' ? '' : content}</p>
                )}
            </div>
            {Icon && <Icon />}
        </StyledChatInfoContentGroup>
    );
};

export default ChatInfoContentGroup;
