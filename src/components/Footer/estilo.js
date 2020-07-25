import styled from 'styled-components';
import { ArameNormalSVG, ArameLargoSVG } from '../../styles/Icones';

export const Rodape = styled.footer`
    > h3 {
        font-size: 5vw;
        margin-top: 0.1%;
        padding-bottom: 13%;
        text-align: center;
    } 

    @media only screen and (min-width: 768px) {
        > h3 {
            font-size: 2vw;      
            padding-bottom: 7%;                  
        }
    } 
    
    @media only screen and (min-width: 1024px) {
        > h3 {
            font-size: 1.5vw;    
            padding-bottom: 1%;                 
        }
    }
`;

export const ArameComputadorDeMesa = styled(ArameLargoSVG)`
    display: none;

    @media only screen and (min-width: 500px) {
        display: initial;
        margin-top: 10px;
        width: 100%;
        fill: #000;
    }
`;

export const ArameDispositivoMovel = styled(ArameNormalSVG)`
    display: initial;
    margin-top: 5%;
    width: 100%;
    fill: #000;

    @media only screen and (min-width: 500px) {
        display: none;
    }
`;