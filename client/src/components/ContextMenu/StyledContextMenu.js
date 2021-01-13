import styled from 'styled-components';

export default styled.div`
    position: absolute;
    right: 20px;
    top: 40px;
    z-index: 999;
    background-color: black;

    .contextMenu_item {
        color: #eee;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: 1rem 2rem;
        transition: all 0.4s ease-in-out;
        &:hover {
            background-color: #222;
            cursor: pointer;
        }
    }
`;
