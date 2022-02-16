import React from 'react';

// Styled components
import StyledAvatar from './avatar.styledcomponent';

export const Avatar = ({ imgUrl, altText, width, height }) => {
    return (
        <StyledAvatar width={width ? width : '50px'} height={height ? height : '50px'}>
            <img src={imgUrl} alt={altText ? altText : ''} />
        </StyledAvatar>
    );
};
