import styled, { keyframes } from 'styled-components';

export const Superior = styled.header`
    display: flex;
    
    /* Cria um espaçamento entre os elementos. 
     * Os espaçamentos do meio são duas vezes maiores que o inicial e final */
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;

    @media only screen and (max-width: 768px) {
        justify-content: flex-end;
        z-index: 0;
    }  

`;

export const Lista = styled.li`
    text-align: right;
    font-size: 3vw;
    list-style: none;

    a {
        text-decoration: none;
        color: black;
        &:hover{
            background: red;
            color: red;
            cursor: pointer;
        }
    }
    
    button {
        margin: 2%;
        font-size: 3vw;
        color: black;
        background: none;
        border: none;
        outline: inherit;
        cursor: pointer;
        &:hover{
            background: red;
            color: red;
        }
    }

    @media only screen and (max-width: 768px) {
        writing-mode: vertical-rl;
        font-size: 3vh;
        padding: 1vh;

        button b {
            writing-mode: vertical-rl;
            font-size: 3vh;          
        }
    }

`;

export const Salvar = styled.button`
    font-size: 2vw;
    border: 0;
`;

const rotacao = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
    position: fixed;
    left: 10%;
    top: 5%;
    z-index: 2;
    width: 15%;
    -webkit-animation:${rotacao} 8s linear infinite;
    -moz-animation:${rotacao} 8s linear infinite;
    animation:${rotacao} 8s linear infinite;

    @media only screen and (max-width: 768px) {
        left: 55%;
        width: 35%;
        top: 1%;   
        /* display: none; */
    }      
`;

export const Navegacao = styled.nav`
    position: fixed;
    right: 10%;
    z-index: 2;

    @media only screen and (max-width: 768px) {
        right: 1%;
    }       
`;