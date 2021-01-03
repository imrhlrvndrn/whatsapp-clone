import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.chatInfo === false ? '30%' : '25%')};

    .sidebar__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        height: max-content;
        background-color: rgb(${(props) => props.theme.mediumBackground});

        &__icons {
            svg {
                cursor: pointer;
                margin-left: 2rem;
                fill: rgb(${(props) => props.theme.icon});
            }
        }
    }

    .sidebarSearchContainer {
        width: 100%;
        padding: 0.5rem 0;
        background-color: rgb(${(props) => props.theme.lightBackground});

        &__input {
            width: 90%;
            margin: 0 auto;
            border-radius: 30px;
            background-color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            svg {
                flex: 0.2;
                fill: rgb(${(props) => props.theme.icon});
            }

            input {
                flex: 0.8;
                padding: 1rem 0;
            }
        }
    }

    .sidebarChat {
        flex: 1;
        background-color: rgb(${(props) => props.theme.lightestBackground});
        height: auto;
        overflow-y: auto;

        .addNewChat {
            padding: 2rem 1rem;
            text-align: center;
            background-color: rgba(${(props) => props.theme.constants.colorBackground}, 0.2);
        }
    }

    @media screen and (${(props) => props.theme.breakpoints.lg_tablet}) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: ${(props) => (props.appState === 'sidebar' ? '999' : '0')};
        width: 100%;
        height: 100%;
    }
`;
