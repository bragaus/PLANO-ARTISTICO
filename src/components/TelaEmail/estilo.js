import styled, { css } from 'styled-components';

const restaurar = css`
    width: 40%;
    position: fixed;
    top: 17%;
    left: 17%;
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
        display: none;
    }
    & .aparecerMinimizado {
        display: contents !important;
        li {
            border: 0.3vw solid #ff0000;
            border-radius: 2vw;
        }
    }    
`;

const desminimizar = css`
    main {
        display: initial;
    }
`;

const maximizar = css`
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0%;
    left: 0%;
    z-index: 3;
    border-radius: 0px !important;

    ul {
        font-size: 3vw !important;
        border-radius: 0% !important;        
        li {
            span {
                font-size: 2vw !important;
            }
            text { 
                font-size: 3vw !important;
            }

            img {
                width: 4% !important;
            }

            input {
                font-size: 3vw !important;

                ::placeholder {
                    font-size: 3vw !important;
                }

                ::-webkit-input-placeholder {
                    font-size: 3vw !important;
                }

                :-ms-input-placeholder {
                    font-size: 3vw !important;
                } 
            }
        }     
    }

    textarea {
        height: 33vh;

        font-size: 3vw !important;  
        ::placeholder {
            font-size: 3vw !important;
        }

        ::-webkit-input-placeholder {
            font-size: 3vw !important;
        }

        :-ms-input-placeholder {
            font-size: 3vw !important;
        }               
    }

    & .aparecerMinimizado {
        display: none !important;
    }    

    & .botaoEnviar {
        img {
            width: 20% !important;
        }
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
        border: none;
        img {
            width: 30%;
            float: none;
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

            padding: 1% 2% 1% 2%;
            border-bottom: 0.3vw solid #ff0000;         

            img {
                width: 5%;
                margin: 0% 1% 0% 1%;
                float: right;
            }

            input {
                width: 100%;
                border: none;
                font-size: 1.5vw;
                font-weight: 1000;
                outline: inherit;
                color: #001eff;

                ::placeholder {
                    color: #ff0000
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
                font-weight: 1000; 
                box-sizing: border-box;
                border: none;
                resize: none;   
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
        }
    }

    /* header {
        display: flex;
        justify-content: space-between;
        background-color: black;
        cursor: move;

        ul {
            display: flex;
            align-items: center;
            li {
                list-style-type: none;
                padding-right: 1vw;
                button {
                    color: white;
                    font-size: 1vw;
                    cursor: pointer;
                }
            }
        }
    }

    h2 {
        font-size: 3vw;
        margin: 2% 0%;

        @media only screen and (max-width: 768px) {
            font-size: 2vw;
        }          
    }

    h1 {
        color: white;
        font-size: 3vw;        
    }

    span {
        font-size: 3vw;
    }

    button {
        margin: 2%;
        font-size: 3vw;
        color: black;
        background: none;
        border: none;
        outline: inherit;
        &:hover{
            background: red;
            color: red !important;
        }
    }

    a {
        margin: 1% !important;
        font-size: 2vw !important; 
        color: white !important;
        background: none;
        border: none;
        outline: inherit;
        text-decoration: none;
        &:hover{
            background: red;
            color: red !important;
        }         
    }    

    input {
        width: 100%;
        padding: 2%;
        box-sizing: border-box;
        border: none;
        border-bottom: 0.3vw solid black;
        font-size: 2vw;            
        margin-bottom: 1%; 
        outline: inherit;        
    }

    textarea {
        width: 100%;
        font-size: 2vw;
        padding: 2%;
        box-sizing: border-box;
        border: none;
        border-bottom: 0.3vw solid black;
        background-color: #f8f8f8;
        resize: none;   
        outline: inherit;                  
    }     */
`;

// export const DivisorFlexivel = styled.div`
//     display: flex;
//     justify-content: space-between;    
//     align-items: center;
// `;