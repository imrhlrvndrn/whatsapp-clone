import React from 'react';

// Styled components
import StyledAvatar from './StyledAvatar';

const Avatar = ({ imgUrl, altText, width, height }) => {
    return (
        <StyledAvatar width={width ? width : '50px'} height={height ? height : '50px'}>
            <img src={imgUrl} alt={altText ? altText : ''} />
        </StyledAvatar>
    );
};

export default Avatar;
