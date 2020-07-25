import styled from 'styled-components';
import { ArameNormalSVG, ArameLargoSVG } from '../../styles/Icones';

export const Rodape = styled.footer`
    margin-top: 10%;
    margin-bottom: 15%;

    font-size: 5vw;
    text-align: center;

    @media only screen and (min-width: 500px) {
        > h3 {
            font-size: min(3vw, 20px);            
        }
    }   

    @media only screen and (min-width: 768px) {
        margin-top: 3%;
        margin-bottom: 7%;
    } 
    
    @media only screen and (min-width: 1024px) {
        margin-bottom: 2%;

        > h3 {
            font-size: 1.5vw;                     
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