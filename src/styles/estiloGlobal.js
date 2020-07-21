import styled, { createGlobalStyle } from 'styled-components';
import { MiraSVG } from '../styles/Icones';

export default createGlobalStyle`
    * {
        font-family: 'Arial', sans-serif; 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;        
    }

    h1, a {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: var(--preto);
    }

    html {
        /* a cada 1 rem será considerado 10px */
        font-size: 62.5%;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
        
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;        
        color: var(--preto);
    }

    body {
        font-size: 1.6rem;
    }

    *, button, input {
        border: 0;
        background: none;
        outline: none;
    }

    ul, li {
        list-style: none;
    }

    :root {
        --vermelho: #ff0000;
        --azul: #001eff;
        --branco: #fff;
        --preto: #000000;
        --segundos: 0.2s;
        --tamanho: 2vw;
        --borda: 0.2vw;
        --cinza: #686868;
    }
`;

export const Mira = styled(MiraSVG)`
    width: 10%;
    position: absolute;
    transform: translate(-49.5%, -48%);

    stroke: red;
    stroke-miterlimit: 10;
    stroke-width: 6px;
`;