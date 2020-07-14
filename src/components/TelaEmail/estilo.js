import styled, { css } from 'styled-components';

import { 
    FecharIcon, 
    MinimizarIcon, 
    MaximizarIcon, 
    EnviarIcon, 
    AnexoIcon 
} from '../../styles/Icones';

const minimizar = css`
    @media (max-width: 768px) {
        height: 12vw !important;
    }

    height: 3.4vw;

    > form {
        display: none !important;
    }
`;

const maximizar = css`

    @media (min-width: 768px) {
        width: 95% !important;
        top: 2%;
        left: 2%;

        > form {
            height: 85vh !important;
            > input, textarea {
                padding: 1% !important;
            }

            > div {
                & #labelEnviar {
                    width: 12vw;
                    margin-right: 1% !important;
                    > svg {
                        width: 100%;
                    }
                }
                & #labelAnexo {
                    margin-right: 1% !important;
                    width: 4vw;
                }
            }
        }
        
        & .arquivosUpados {
            padding: 0% 1% 0% 1% !important;

            > span, button {
                margin-bottom: 1% !important;
            }
        }

        & #parteDeCima {
            /* Titulo NEW MESSAGE */
            > div {

                > h1 {
                    margin-left: 2% !important;
                }

                > label {
                    margin-top: 1% !important;
                    margin-right: 2% !important;     
                }

            }

            > div + div {
                margin-right: 0.3%;
            }
        }
    }
`;

export const Container = styled.div`
    @media (max-width: 768px) {

        width: 100%;
        top: 0;
        left: 0;
        border-radius: 4vw !important;

        > form {
            > textarea {
                height: 20vw !important;
            }

            > input, textarea {
                font-size: 4.5vw !important;
            }

            & .arquivosUpados {
                > span {
                    font-size: 4.5vw !important;
                }
                > button {
                    font-size: 7vw !important;
                }
            }            
        }
    }    

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
        height: 100%;

        > textarea {
            height: 100%;
        }

        > input, textarea {
            border-top: var(--borda) solid var(--vermelho);
            padding: 2% 0% 2% 2%;
            resize: none;

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

        & .arquivosUpados {
            border-bottom: var(--borda) solid var(--vermelho);
            padding: 0% 2% 0% 2%;

            > span, button {
                font-size: 1.5vw;
                margin-bottom: 2%;
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
    @media (max-width: 768px) {
        div {
            > h1 {
                font-size: 7vw !important;
            }

            > label {
                width: 10vw !important;            
            }

            & #labelMaximizar {
                display: none;
            }
        }
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        width: 100%;

        > h1 {
            font-size: var(--tamanho);
            font-weight: 1000;
            margin-left: 4%;
            color: var(--azul);
            white-space: nowrap;
        }

        > label {
            width: 3vw;
            margin-right: 4%;
            margin-top: 3%;
        }

        button {
            display: none;
        }
    }

    > div + div {
        width: 30%;
        display: flex;
        justify-content: flex-end;
    }
`;

export const Flex = styled.div`
    @media (max-width: 768px) {
        /* Botão de enviar */
        & #labelEnviar {
            width: 25vw !important;
        }

        /* botão de anexo */
        & #labelAnexo {
            width: 10vw !important;
        }

        > div {
            > ul {
                > li {
                    font-size: 5vw !important;
                }
            }
        }        
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        > ul {
            > li {
                font-size: 1.5vw;

                color: var(--vermelho);

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }

    /* Botão de enviar */
    & #labelEnviar {
        width: 12vw;
        justify-content: flex-start;
        margin-right: 2%;
        margin-left: 1%;
    }

    /* botão de anexo */
    & #labelAnexo {
        display: flex;
        align-items: center;
        width: 4vw;
        margin-right: 2%;
    }

    > input {
        display: none;
    }
`;

const iconCSS = css`
    @media (max-width: 768px) {
        width: 100%;
    }

    width: 80%;

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
    @media (max-width: 768px) {
        display: none;
    }

    ${props => props.maximizador ? Transacao : null}
    transition: transform var(--segundos);
    
    ${iconCSS}
`;

export const Anexo = styled(AnexoIcon)`
    width: 100%;

    > path {
        fill: var(--azul) !important;
    }
`;

export const Enviar = styled(EnviarIcon)`
    width: 100%;
    margin: 3% 2% 2% 2%;

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
