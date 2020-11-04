import React from 'react';

// Styled components
import StyledAvatar from './StyledAvatar';

const Avatar = ({ imgUrl, altText, width, height }) => {
    return (
        <StyledAvatar width={width ? width : '50px'} height={height ? height : '50px'}>
            <img
                src={
                    imgUrl
                        ? imgUrl
                        : 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
                }
                alt={altText ? altText : ''}
            />
        </StyledAvatar>
    );
};

export default Avatar;
