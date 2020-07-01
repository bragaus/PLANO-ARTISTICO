import styled, { css } from 'styled-components';

/** Quando é carregada a arte o estado zoom vem como True
 * endo assim eu coloquei o ZoomIn com apenas o cursor de lupa para aumentar 
 * mas quem realmente faz o zoom é o zoomOut. Porque como o estado vem como true
 * se o zoomIn ficasse responsavel por fazer o zoom a imagem ja iria carregar 
 * com o zoom então o zoomOut faz o zoom-in e transforma o cursor para 
 * lupa de diminuir e quando volta para o zoom-in o cursor fica como 
 * lupa para aumentar e a imagem fica com o tamanho normal 
*/

const zoomOut = css`
    cursor: zoom-out;
    height: 200%;
`;

const zoomIn = css`
    cursor: zoom-in;
`;

const mostrarImagem = css`
    display: block;
`;

const esconderImagem = css`
    display: none;
`;

export const Auxiliar = styled.div`
    width: 70%;
`;

export const Navegacao = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    button {
        margin: 2%;
        font-size: 4vh;
        color: white;
        background: none;
        border: none;
        outline: inherit;
        &:hover{
            background: red;
            color: red;
            cursor: pointer;
        }
    }
`;

export const CaixaDaImagem = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0e0e0e;  
    ${props => props.zoom ? zoomIn : zoomOut}    
`;

export const ImagemFrente = styled.img`
    margin-left: auto;
    margin-right: auto;
    height: 100%;   
    ${props => props.mostrar ? mostrarImagem : esconderImagem}
`;

export const ImagemVerso = styled.img`
    margin-left: auto;
    margin-right: auto;
    height: 100%;    
    ${props => props.mostrar ? esconderImagem : mostrarImagem}
`;

export const Voltar = styled.button`
    position: relative;
    float: right;  
    font-size: 3vw;
    text-decoration: none;
    color: white;
    border: none;
    background: none;  
    z-index: 1000;
    &:Hover{
        background: red;
        color: red;
        cursor: pointer;
    }
`;

export const FrenteVerso = styled.button`
    position: absolute;
    z-index: 1001;
    right: 0px;
    top: 0px;
`;