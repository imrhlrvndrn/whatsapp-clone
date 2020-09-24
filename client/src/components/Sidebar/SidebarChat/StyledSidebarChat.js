import styled from 'styled-components';

export default styled.div`
    padding: 1rem;
    display: flex;
    transition: 0.4s linear;
    cursor: pointer;

    &:hover {
        background-color: rgb(${(props) => props.theme.mediumBackground});
    }

    img {
        margin-right: 1rem;
    }

    .sidebarChat__info {
        h2 {
            margin-bottom: 0.5rem;
        }

        .lastText {
            font-size: 0.8rem;
        }
    }
`;
