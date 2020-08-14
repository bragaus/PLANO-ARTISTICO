import styled from 'styled-components';
import { ArameNormalSVG, ArameLargoSVG } from '../../styles/Icones';

export const Main = styled.main`
    margin-top: min(10%, 40px);         

    @media only screen and (min-width: 768px) {
        ${({ autenticado, visualizarComoUsuario }) => {
            if (autenticado && !visualizarComoUsuario) {
                return {marginTop: '0'}
            } else if (autenticado && visualizarComoUsuario || !autenticado) {
                return {marginTop: '5%'}
            }
        }}
    }
`;

export const Portateis = styled.section`
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

export const DivEmail = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;

    z-index: 1000000000;


    font-size: min(6vw, 25px);
    color: var(--azul);
    font-weight: bold;

    background: var(--branco);
    border: 2px solid var(--vermelho);
    padding: 5px;
`;

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