import styled from 'styled-components';

export default styled.div`
    width: max-content;
    height: max-content;

    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
`;
