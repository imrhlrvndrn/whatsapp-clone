import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: ${(props) => (props.chatInfo === false ? '70%' : '50%')};

    .mainChat__header {
        padding: 1rem;
        display: flex;
        align-items: center;
        background-color: rgb(${(props) => props.theme.constants.colorBackground});
        border-left: 1px solid rgb(${(props) => props.theme.lightestBackground});

        * {
            color: white;
        }

        img {
            margin-right: 1rem;
        }

        svg {
            cursor: pointer;
        }

        &__info {
            flex: 1;

            &__lastSeen {
                margin-top: 0.5rem;
                font-size: 0.8rem;
            }
        }

        &__icons {
            position: relative;
            display: flex;

            svg {
                cursor: pointer;
                margin-left: 2rem;
                fill: black;
            }

            .chatOptionsModal {
                background-color: rgb(${(props) => props.theme.mediumBackground});
                position: absolute;
                top: calc(100% + 1.6rem);
                right: 0;
                width: max-content;
                z-index: 5;

                &__options {
                    display: block;
                    padding: 1rem 2rem;
                    width: 100%;
                    font-size: 1rem;
                    transition: all 0.4s ease-in-out;
                    cursor: pointer;
                    color: rgb(${(props) => props.theme.constants.darkText});

                    &:hover {
                        background-color: rgb(${(props) => props.theme.darkBackground});
                    }
                }
            }
        }
    }

    .mainChat__body {
        width: 100%;
        padding: 0 1rem;
        background: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow-y: auto;
        overflow-x: hidden;
        flex: 1;
        height: calc(100% - 225px);

        /* width */
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    .mainChat__chatbarContainer {
        display: flex;
        position: relative;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: rgb(${(props) => props.theme.mediumBackground});

        svg {
            cursor: pointer;
            fill: rgb(${(props) => props.theme.icon});
        }

        &__chatForm {
            flex: 1;
            border-radius: 30px;
            margin: 0 0 0 1rem;
            padding: 0 0 0 1rem;
            background-color: rgb(${(props) => props.theme.lightestBackground});
            display: flex;
            align-items: center;

            input {
                flex: 1;
                width: 80%;
            }

            button {
                display: none;
            }

            svg {
                display: inline-block;
                height: 35px;
                /* width: 35px; */
                object-fit: contain;
                margin: 0 1rem;
            }
        }

        &__joinChatGroupButton {
            cursor: pointer;
            text-align: center;
            position: absolute;
            top: calc(-100% - 1rem);
            left: 0;
            padding: 1rem;
            width: 100%;
            height: calc(100% + 2rem);
            background-color: rgb(${(props) => props.theme.constants.colorBackground});
            color: white;
        }
    }

    @media screen and (${(props) => props.theme.breakpoints.lg_tablet}) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: ${(props) => (props.appState === 'mainChat' ? '999' : '0')};
        width: 100%;
        height: 100%;

        .mainChat__chatbarContainer {
            &__chatForm {
                button {
                    display: none;
                }
            }
        }
    }

    @media screen and (${(props) => props.theme.breakpoints.mobile}) {
        .mainChat__header {
            svg {
                height: 20px;
                width: 20px;
                object-fit: contain;
            }

            &__icons {
                svg {
                    margin-left: 0.5rem;
                }
            }
        }
    }
`;
