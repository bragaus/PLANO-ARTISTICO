import styled, { keyframes } from 'styled-components';
import { LogoSVG } from '../../styles/Icones';

const rotacao = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  } 
`;

export const Container = styled.div`
    top:0;
    left:0;

    position: fixed;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #000;

    z-index: 1000000000000;
`;

export const Logo = styled(LogoSVG)`
    display: none;

    @media only screen and (min-width: 1024px) {
        /* position: fixed; */
        display: initial;

        fill: #fff;

        /* left: 20%;
        top: 1%; */

        width: 20%;
        -webkit-animation:${rotacao} 8s linear infinite;
        -moz-animation:${rotacao} 8s linear infinite;
        animation:${rotacao} 8s linear infinite;
        
        /* cursor: pointer; */
    }
`;