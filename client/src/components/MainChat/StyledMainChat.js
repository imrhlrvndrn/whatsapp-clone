import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    .mainChat__header {
        padding: 1rem;
        display: flex;
        align-items: center;
        background-color: rgb(${(props) => props.theme.mediumBackground});
        border-left: 1px solid rgb(${(props) => props.theme.lightestBackground});

        img {
            margin-right: 1rem;
        }

        &__info {
            flex: 1;

            &__lastSeen {
                margin-top: 0.5rem;
                font-size: 0.8rem;
            }
        }

        &__icons {
            svg {
                margin-left: 2rem;
                fill: rgb(${(props) => props.theme.icon});
            }
        }
    }
`;
