import styled from 'styled-components';

export default styled.div`
    margin-bottom: 0.3rem;
    padding: 0.5rem 1rem;
    background-color: rgb(${(props) => props.theme.lightestBackground});
    width: max-content;
    max-width: 50%;
    border-radius: 10px;
    position: relative;

    &.chat__receiver {
        margin: 0 0 0.3rem auto;
        background-color: rgb(${(props) => props.theme.constants.lightColorBackground});

        &:first-of-type {
            margin: 1rem 0 0.3rem auto;
        }
    }

    &:first-child {
        margin-top: 0.3rem;
    }

    .userName {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-transform: capitalize;
        color: rgb(${(props) => props.theme.constants.colorBackground});
    }

    .message {
        margin-bottom: 0.5rem;
        color: rgb(${(props) => props.theme.constants.darkText});
    }

    .timestamp {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        p {
            font-size: 0.8rem;
            opacity: ${(props) => (props.read ? '.8' : '.2')};
            fill: ${(props) => (props.read ? 'blue' : 'black')};
            color: rgb(${(props) => props.theme.constants.darkText});
        }

        svg {
            opacity: 0.2;
            margin-left: 1rem;
        }
    }
`;
