import styled from 'styled-components';

export default styled.div`
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgb(${(props) => props.theme.lightestBackground});
    width: max-content;
    max-width: 50%;
    border-radius: 10px;
    position: relative;

    &.chat__receiver {
        margin: 0 0 0.5rem auto;
        background-color: rgb(${(props) => props.theme.constants.lightColorBackground});

        &:first-of-type {
            margin: 0.5rem 0 0.5rem auto;
        }
    }

    &:first-child {
        margin-top: 0.3rem;
    }

    .messageHeader {
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .userName {
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: capitalize;
            color: rgb(${(props) => props.theme.constants.colorBackground});
        }

        svg {
            margin-left: 2rem;
            cursor: pointer;
        }
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

    @media screen and (${(props) => props.theme.breakpoints.mobile}) {
        max-width: 90%;
    }
`;
