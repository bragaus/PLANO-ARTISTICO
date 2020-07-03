import styled from 'styled-components';

export const CabecalhoCelular = styled.header`
    @media only screen and (min-width: 768px) {
        display: none;
    }

    nav {
        margin: 1% 1% 1% 3%;

        a {
            text-decoration: none;
            color: black;
            border: 0.2vw solid white;
            font-size: 10vw;
            &:hover{
                color: red;
                background: red;
                border: 0.2vw solid red;
            }
        }         
    }

    ul li {       
        display: inline;
        font-size: 10vw;
        padding: 3vw;        
    }

    hr {
        border: none;
        border-top: 0.3vh solid black;
    }
`;

export const CabecalhoDesktop = styled.header`
    nav {
        margin: 1% 1% 1% 3%;
    }

    ul li {       
        display: inline;
        font-size: 6vw;
        a {
            text-decoration: none;
            color: black;
            border: 0.2vw solid white;
            &:hover{
                color: red;
                background: red;
                border: 0.2vw solid red;
            }
        }          
    }

    hr {
        border: none;
        border-top: 0.3vh solid black;
    }

    @media only screen and (max-width: 768px) {
        display: none;
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
        border: none;
        border-top:  0.3vw dashed black;
    }

    h2 {
        font-size: 4vh;
        text-align: center;
        margin: 1%;        
    }
`;