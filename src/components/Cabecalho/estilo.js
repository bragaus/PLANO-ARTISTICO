import styled, { keyframes } from 'styled-components';

import { 
    LogoSVG,
    SetaSVG,
    PictogramaSVG 
} from '../../styles/Icones';

export const Menu = styled.h1`
    position: absolute;
    font-size: 10vw;
    color: var(--preto);
    right: 2%;
    top: 0;
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

    @media only screen and (min-width: 768px) {
        position: fixed;
        display: initial;

        fill: #000;

        left: 20%;
        top: 1%;

        z-index: 2;

        width: 15%;
        -webkit-animation:${rotacao} 8s linear infinite;
        -moz-animation:${rotacao} 8s linear infinite;
        animation:${rotacao} 8s linear infinite;        
    }
`;

export const Pictograma = styled(PictogramaSVG)`
    width: 10%;
    fill: #000;
    margin: 2%;
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
        position: fixed;
        z-index: 2;
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        & .dispositivo-movel {
            display: none;
        }

        & .desktop {
            display: initial;
        }

        & .info {
            position: fixed;
            z-index: 2;
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
            text-align: right;
            z-index: 2;
            li {
                a {
                    &:hover {
                        background: var(--vermelho);
                        color: var(--vermelho);
                    }
                }
                span {
                    &:hover {
                        background: var(--vermelho);
                        color: var(--vermelho);
                    }
                }
            }
        }      
    }
`;