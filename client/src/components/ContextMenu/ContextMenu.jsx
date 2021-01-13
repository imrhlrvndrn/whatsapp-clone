import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { db } from '../../firebase';

// Styled components
import StyledContextMenu from './StyledContextMenu';

const ContextMenu = ({ menu, id, setShowContextMenu }) => {
    const [{ chatDetails }, dispatch] = useDataLayerValue();

    return (
        <>
            <StyledContextMenu>
                {menu.map(({ name, onClick }) => (
                    <div
                        onClick={() => {
                            if (onClick) onClick(id);
                            setShowContextMenu(false);
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
