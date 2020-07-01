import styled, { css } from 'styled-components';

const maximizar = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 3;

    h2 {
        
    }

    textarea {
        height: 50vh;
        @media only screen and (max-width: 768px) {
            height: 60vh;
        }         
    }
`;

const restaurar = css`
    width: 50%;
    position: fixed;
    top: 17%;
    left: 17%;
    z-index: 2;

    textarea {
        height: 30vh;        
    }       
`;

const minimizar = css`
    width: 30%;
    height: 0%;

    main{
        display: none;
    }

    h2:hover{
        color: red;
        background-color: red;
    }
`;

const desminimizar = css`
    main{
        display: initial;
    }
`;

export const Divisor = styled.div`

    ${props => props.maximizador ? maximizar : restaurar}
    ${props => props.minimizador ? minimizar : desminimizar}
    
    background-color: grey;

    header {
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
    }    
`;

export const DivisorFlexivel = styled.div`
    display: flex;
    justify-content: space-between;    
    align-items: center;
`;