import styled, { css } from 'styled-components';

import {
    LupaAumentarSVG,
    LupaDiminuirSVG,
    SetaEsquerdaSVG,
    SetaDireitaSVG,
    SetaBaixoSVG,
    SetaCimaSVG, 
    LixeiraSVG 
} from '../../styles/Icones';

export const DivInput = styled.div`
    position: absolute;
    top: 0;
    overflow: auto;

    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    width: 100%;
    flex-direction: column;

    input, textarea, button {
        font-size: max(1vw, 0.5rem);
        background-color: var(--amarelo); 
        resize: none;
        border: 1px solid var(--preto);
        padding: 2%;
    }

    button {
        ${({erro}) => erro ? 'disabled' : null}
        &:hover {
            background-color: var(--amareloEscuro);
            cursor: pointer;
        }
    }
`;

export const Section = styled.section`

    position: absolute;
    bottom: 0;

    overflow: auto;
    
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const Lista = styled.ul`
    display: flex;

    > li {
        border: 1px solid black;
        padding: 2%;
        background: var(--branco);

        cursor: pointer;
        &:hover{
           background-color: gray; 
        }
    }
`;

export const Container = styled.div`

    position: relative;
    padding: 2%;

    border: 1px solid var(--preto);
    background: var(--branco);

    font-size: 1.5rem;

        > div {
            display: flex;
            justify-content: flex-end;

            > button {
            margin-right: 2%;
            margin-top: 2%;
            border: 1px solid var(--preto);
            padding: 1% 2% 1% 0;
            width: 30%;
            font-weight: bold;
            color: var(--vermelho);

            &:hover {
                cursor: pointer;
            }
        }

        > button + button {
            color: var(--azul);
        }        
    }
`;

const EstiloCSS = css`
    width: 100%;
    height: 100%;

    min-width: 20px;

    fill: var(--preto);
`;

export const LupaAumentar = styled(LupaAumentarSVG)`
    ${EstiloCSS}
`;

export const LupaDiminuir = styled(LupaDiminuirSVG)`
    ${EstiloCSS}
`;

export const SetaEsquerda = styled(SetaEsquerdaSVG)`
    ${EstiloCSS}
`;

export const SetaDireita = styled(SetaDireitaSVG)`
    ${EstiloCSS}
`;

export const SetaBaixo = styled(SetaBaixoSVG)`
    ${EstiloCSS}
`;

export const SetaCima = styled(SetaCimaSVG)`
    ${EstiloCSS}
`; 

export const Lixeira = styled(LixeiraSVG)`
    ${EstiloCSS}
`; 
