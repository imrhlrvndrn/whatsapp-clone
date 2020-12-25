import styled from 'styled-components';

export default styled.div`
    background-color: ${(props) => (props.color ? `rgba(${props.color}, 0.2)` : 'white')};
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    .copy {
        flex: 0.8;

        * {
            color: ${(props) => props.color && `rgb(${props.color})`};
        }

        h3 {
            width: max-content;
            font-size: 0.8rem;
        }

        p {
            width: 90%;
        }

        &_participants {
            padding: 1rem 0;
            border-bottom: 1px solid rgb(${(props) => props.theme.mediumBackground});
        }
    }

    svg {
        fill: ${(props) => props.color && `rgb(${props.color})`};
        flex: 0.2;
    }
`;
