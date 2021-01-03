import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { db } from '../../firebase';

// Styled components
import StyledContextMenu from './StyledContextMenu';

const ContextMenu = ({ menu, id, position: { xPos, yPos } }) => {
    const [{ chatDetails }, dispatch] = useDataLayerValue();

    const deleteMessage = (messageId) => {
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
            messageId: ${id}
        `);
    };

    return (
        <>
            <StyledContextMenu style={{ top: yPos, left: xPos }}>
                {menu.map(({ name, onClickFn }) => (
                    <div
                        onClick={() => {
                            dispatch({ type: 'SET_SHOW_CONTEXT_MENU', showContextMenu: false });
                            deleteMessage(id);
                            console.log('Message delete initiated');
                        }}
                        className='contextMenu_item'
                    >
                        {name}
                    </div>
                ))}
            </StyledContextMenu>
        </>
    );
};

export default ContextMenu;
