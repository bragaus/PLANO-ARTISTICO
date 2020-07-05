import styled, { css } from 'styled-components';

const restaurar = css`
    width: 40%;
    position: fixed;
    top: 15%;
    left: 27%;
    z-index: 2;

    & .aparecerMinimizado {
        display: none;
    }

    textarea {
        height: 30vh;        
    }       
`;

const minimizar = css` 
    ul {
        li {
            display: none !important;
        }
    }

    & #arrastavel {
        display: contents !important;
        div {
            text {
                margin: 3%;
            }
        }
    }
`;

const desminimizar = css`
    display: initial;
`;

const maximizar = css`
    & .aparecerMinimizado {
        display: none !important;
    }

    position: fixed !important;
    top: 5%;
    left: 1%;
    width: 95vw;
    margin: auto;
    z-index: 3;

    ul {
        font-size: 1.5vw !important;
        li {
            text {
                font-size: 1.5vw !important;
            }
            input {
                font-size: 1.5vw !important;
                width: 10vh;
                ::placeholder {
                    font-size: 1.5vw !important;
                }

                ::-webkit-input-placeholder {
                    font-size: 1.5vw !important;
                }

                :-ms-input-placeholder {
                    font-size: 1.5vw !important;
                }                
            }
            textarea {
                font-size: 1.5vw !important;
                height: 35vh;
                ::placeholder {
                    font-size: 1.5vw !important;
                }

                ::-webkit-input-placeholder {
                    font-size: 1.5vw !important;
                }

                :-ms-input-placeholder {
                    font-size: 1.5vw !important;
                }                   
            }
        }
    }

    & .flexivel {

        div:first-child {
            width: 90vh !important;
        }
        div {
            width: 30vh !important;
        }
    }

    & .botaoEnviar {
        width: 30vh !important;
    }
    
    & .botaoAnexo {
        width: 10vh !important;
    }    
`;

export const Divisor = styled.div.attrs(props => ({
    className: props.className
}))`

    ${props => props.maximizador ? maximizar : restaurar}
    ${props => props.minimizador ? minimizar : desminimizar}
    
    background-color: #fff;
    border-radius: 2vw;

    & .mensagem {
        border-bottom: none;
    }

    & .botaoEnviar {
        width: 30%;
        margin: 0% !important;
    }
    
    & .botaoAnexo {
        width: 10%;
    }

    & .flexivel {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div:first-child {
            width: 80%;
        }
        div {
            width: 30%;
        }
    }

    ul {     
        list-style: none;
        border: 0.3vw solid #ff0000;
        border-radius: 2vw;
        font-size: 1.5vw;
        font-weight: 1000;
        color: #ff0000;

        li {

            text {
                font-size: 1.5vw;
            }

            &:first-child {
                color: #001eff;
            }
            &:last-child {
                border: none;
            }

            padding: 1% 2% 1% 2%;
            border-bottom: 0.3vw solid #ff0000;         

            img {
                width: 20%;
                margin: 3% 0% 0% 10%;
            }

            input {
                width: 100%;
                border: none;
                font-size: 1.5vw;
                font-weight: 1000;
                outline: inherit;
                color: #001eff;

                ::placeholder {
                    color: #ff0000;
                }

                ::-webkit-input-placeholder {
                    color: #ff0000;
                }

                :-ms-input-placeholder {
                    color: #ff0000;
                }                
            }

            span {
                color: #ff0000;
                font-size: 1vw;
                font-weight: normal;
                margin: 1%;
            }

            textarea {
                width: 100%;
                font-size: 1.5vw;
                font-weight: normal; 
                box-sizing: border-box;
                border: none;
                resize: none;   
                outline: inherit;
                color: #001eff;              
                ::placeholder {
                    font-weight: 1000;
                    color: #001eff;
                }

                ::-webkit-input-placeholder {
                    font-weight: 1000;
                    color: #001eff;
                }

                :-ms-input-placeholder {
                    font-weight: 1000;
                    color: #001eff;
                }                                 
            }             
        }
    }
`;