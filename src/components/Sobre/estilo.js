import styled from 'styled-components';

export const Cabecalho = styled.header`
    nav {
        margin: 1% 1% 1% 3%;
    }

    ul li {       
        display: inline;
        font-size: 6vw;
        padding-right: 1%;
        a {
            text-decoration: none;
            color: black;
            border: 2px solid white;
            &:hover{
                color: red;
                background: red;
                border: 2px solid red;
            }
        }          
    }

    hr {
        border: 0.3vh solid black;
    }
`;

export const Principal = styled.main`
    p {
        margin: 3vw;
        font-size: 8vh;
        text-justify: justify;
    }
`;

export const Rodape = styled.footer`
    position: fixed;
    bottom: 0px;
    width: 100%;

    hr {
        border: 0.3vw dashed black;
    }

    h2 {
        font-size: 4vh;
        text-align: center;
        margin: 1%;        
    }
`;