import styled, { css, keyframes } from 'styled-components';

import {  LogoSVG } from '../../styles/Icones';

const imagemNaoCarregada = css`
    opacity: 0;
`;

const imagemCarregadaCss = css`
    opacity: 100;
`;

const zoomIn = css`
    top: 0;
    height: 150%;
    cursor: zoom-out;
`;

const zoomOut = css`
    top: 0;
    height: 100%;
    cursor: zoom-in;
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

    position: fixed;

    fill: #fff;

    width: 15%;
    -webkit-animation:${rotacao} 8s linear infinite;
    -moz-animation:${rotacao} 8s linear infinite;
    animation:${rotacao} 8s linear infinite;

`;

export const Container = styled.div`
    width: 100vw;
    height: ${({zoom}) => zoom ? '150vh' : '100vh'};

    background-color: #141414;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all ease 0.7s;
    
    img {
        height: 100%;
        position: absolute;
        transition: all ease 0.7s;
        cursor: zoom-in;
        ${({zoom}) => zoom ? zoomIn : zoomOut}
    }

    .img--half {
        filter: blur(8px);
        -webkit-filter: blur(8px);
        ${({ imagemCarregada }) => !imagemCarregada ? imagemCarregadaCss : imagemNaoCarregada }
    }

    .img--full  {
        ${({ imagemCarregada }) => !imagemCarregada ? imagemNaoCarregada : imagemCarregadaCss}
    }


`;

export const Section = styled.section`

    position: fixed;

    width: 100vw;
    height: 10vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;

    @media only screen and (min-width: 240px) {
        flex-direction: row;
        justify-content: space-between;

        width: 95vw;
    }

    button {
        color: #fff;
        white-space: nowrap;
        font-weight: bold;
        cursor: pointer;

        span {
            color: white;
            z-index: 100000;
            font-weight: 1000;            
            &:hover{
                color: var(--vermelho);;
                background-color: var(--vermelho);
            }
        }

        @media only screen and (min-width: 240px){

            font-size: 100%;

        }

        @media only screen and (min-width: 1024px){

            font-size: 200%;

        }        
    }
`;
