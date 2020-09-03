import styled, { keyframes } from 'styled-components';

import { 
    LogoSVG,
    SetaSVG,
    PictogramaSVG 
} from '../../styles/Icones';

export const Menu = styled.span`
    text-align: right;
    top: 0;

    font-size: min(10vw, 40px);
    color: var(--preto);
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;

    height: 100%;

    > nav {
        text-align: center;
        font-size: min(10vw, 50px);
        font-weight: bold;
        z-index: 10;
    }

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

const rotacao = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  } 
`;

export const Logo = styled(LogoSVG)`
    display: none;

    @media only screen and (min-width: 1024px) {
        position: fixed;
        display: initial;

        fill: #000;

        left: 20%;
        top: 1%;

        z-index: 100000;

        width: 15%;
        -webkit-animation:${rotacao} 8s linear infinite;
        -moz-animation:${rotacao} 8s linear infinite;
        animation:${rotacao} 8s linear infinite;
        
        cursor: pointer;
    }
`;

export const Pictograma = styled(PictogramaSVG)`
    width: min(12%, 40px);
    top: 0;

    fill: #000;
`;

export const Seta = styled(SetaSVG)`
    width: 20%;
    fill: #000;
`;

export const Superior = styled.header`
    font-weight: bold;
    font-size: 4vw; 

    & .desktop {
        display: none;
    }

    & .dispositivo-movel {
        display: flex;
        justify-content: space-between;
        position: fixed;
        z-index: 10000000000000;
        width: 100%;
        top: 0;
        
        a {
            font-size: min(10vw, 40px);
            color: var(--preto);            
        }
    }


    @media only screen and (min-width: 1024px) {

        & .dispositivo-movel {
            display: none;
        }

        & .desktop {
            display: initial;
        }

        & .info {
            position: fixed;
            z-index: 100000000;
            top: 0;
            width: 14%;

            &:hover {
                color: #ff0000;
                background: #ff0000;
                > svg {
                    fill: #ff0000;
                }
            }
        }

        ul {
            position: fixed;
            right: 0;
            top: 0;
            text-align: right;
            z-index: 1000000000;

            li {
                a {
                    &:hover {
                        background: var(--vermelho);
                        color: var(--vermelho);
                        cursor: pointer;
                    }
                }
                span {
                    &:hover {
                        background: var(--vermelho);
                        color: var(--vermelho);
                        cursor: pointer;
                    }
                }
            }
        }      
    }
`;