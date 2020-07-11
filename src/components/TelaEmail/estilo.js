import styled, { css } from 'styled-components';

import { 
    FecharIcon, 
    MinimizarIcon, 
    MaximizarIcon, 
    EnviarIcon, 
    AnexoIcon 
} from '../../styles/Icones';

const minimizar = css`
    height: 3.5vw;

    > form {
        display: none !important;
    }
`;

const maximizar = css`
    height: 95%;
    width: 95% !important;
    top: 2%;
    left: 2%;

    > form {
        > input, textarea {
            padding: 1% !important;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 15%;
    left: 25%;

    z-index: 2;

    ${props => props.minimizador ? minimizar : null}
    ${props => props.maximizador ? maximizar : null}
    width: 45%;

    background: var(--branco);
    border: var(--borda) solid var(--vermelho);
    border-radius: 1.5vw;

    > form {
        display: flex;
        flex-direction: column;

        > input, textarea {
            border-top: var(--borda) solid var(--vermelho);
            padding: 2% 0% 2% 2%;

            font-size: var(--tamanho);
            color: var(--azul);

            ::placeholder {
                color: var(--vermelho);
            }

            ::-webkit-input-placeholder {
                color: var(--vermelho);
            }

            :-ms-input-placeholder {
                color: var(--vermelho);
            }
        }

        & .anexo {
            border-bottom: var(--borda) solid var(--vermelho);

            > span, button {
                font-size: 1.5vw;
                margin: 2%;
            }
            > span {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;                
            }            
        }
    }
`;

export const ParteDeCima = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        width: 50%;
        > h1 {
            font-size: var(--tamanho);
            font-weight: 1000;
            margin: 0 0 0 4%;

            color: var(--azul);
        }
    }

    > div + div {
        display: flex;
        justify-content: flex-end;
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
        font-size: 1.5vw;
        width: 100%;

        color: var(--vermelho);

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;


const iconCSS = css`
    width: 10%;
    margin: 2% 4% 2% 0%;

    > path, rect {
        fill: var(--vermelho);
    }

    > ellipse {
        fill: var(--azul);
    }
`;

const Transacao = css`
    transform: rotateZ(180deg);
`;

export const Fechar = styled(FecharIcon)`
    ${iconCSS}
`;

export const Minimizar = styled(MinimizarIcon)`
    ${props => props.minimizador ? Transacao : null}
    transition: transform var(--segundos);

    ${iconCSS}
`;

export const Maximizar = styled(MaximizarIcon)`
    ${props => props.maximizador ? Transacao : null}
    transition: transform var(--segundos);
    
    ${iconCSS}
`;

export const Anexo = styled(AnexoIcon)`
    width: 10%;
    margin: 2%;

    > path {
        fill: var(--azul) !important;
    }
`;

export const Enviar = styled(EnviarIcon)`
    width: 40%;
    margin: 1% 2% 2% 2%;

    > text {
        font-size: 50px;
        font-family: 'Arial-ItalicMT', Arial;
        font-style: italic;  
        fill: var(--branco);
    }

    > ellipse {
        fill: var(--azul);
    }
`;
