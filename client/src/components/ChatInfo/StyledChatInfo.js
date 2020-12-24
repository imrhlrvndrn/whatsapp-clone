import styled from 'styled-components';

export default styled.div`
    width: 25%;
    /* display: flex; */
    /* flex-direction: column; */

    .chat_info_header {
        display: flex;
        height: 81px;
        align-items: center;
        padding: 0 1rem;
        background-color: rgb(${(props) => props.theme.mediumBackground});
        border-left: 1px solid white;

        svg {
            cursor: pointer;
            fill: rgb(${(props) => props.theme.darkBackground});
            margin-right: 1rem;
        }
    }

    .chat_info_body {
        padding: 1rem 0;

        img {
            display: block;
            margin: 0 auto;
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
    }
`;
