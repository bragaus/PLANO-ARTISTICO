import styled, { css } from 'styled-components';

const zoomInCss = css`
    width: 200vw;
    height: 200vh;
    
    img {
        top:0;
        left:0;
    }

    button, span {
        display: none; 
    }

    @media only screen and (min-width: 500px) {
        width: auto;
        img {
            left:auto;
        }        
    }
`;

const zoomOutCss = css`
    width: 100vw;
    height: 100vh;

    @media only screen and (min-width: 500px) {
        width: auto;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background-color: var(--preto);

    img {
        position: absolute;
        width: 100%;
        transition: opacity ease 0.7s; 
        margin: auto;    

        @media only screen and (min-width: 375px) {
            width: 80%;
        }

        @media only screen and (min-width: 500px) {
            width: auto;
            height: 100%;
        }

        cursor:  ${({zoom}) => zoom ? 'zoom-out' : 'zoom-in'};      
    }

    .img--half {
        filter: blur(8px);
        -webkit-filter: blur(8px);
        opacity: ${({ imagemCarregada }) => !imagemCarregada ? '100' : '0' };
    }

    .img--full  {
        opacity: ${({ imagemCarregada }) => !imagemCarregada ? '0' : '100' };
    }

    ${({zoom}) => zoom ? zoomInCss : zoomOutCss};

    h3 {
        color: var(--branco);
        z-index: 100000;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    span {
        font-weight: 1000;
        font-size: 20px;
        color: var(--branco);

        &:hover {
            color: var(--vermelho);
            background-color: var(--vermelho);
            cursor: pointer;
        }

        @media only screen and (min-width: 1024px) {
            font-size: 30px;
        }
    }    

    @media only screen and (min-width: 260px) {
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
    }

    @media only screen and (min-width: 1000px) {
        left: initial;
        width: 90%;
    }

`;

// const imagemNaoCarregada = css`
//     opacity: 0;
// `;

// const imagemCarregadaCss = css`
//     opacity: 100;
// `;

// const zoomIn = css`
//     top: 0;
//     height: 150%;
//     cursor: zoom-out;
// `;

// const zoomOut = css`
//     top: 0;
//     height: 100%;
//     cursor: zoom-in;
// `;

// export const Container = styled.div`

//     width: 100vw;
//     height: ${({zoom}) => zoom ? '150vh' : '100vh'}; 

//     background-color: #141414;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     transition: opacity ease 0.7s;

//     img {
//         position: absolute;
//         transition: opacity ease 0.7s;
//         cursor: zoom-in;
//         ${({zoom}) => zoom ? zoomIn : zoomOut}
//     }

//     .img--half {
//         filter: blur(8px);
//         -webkit-filter: blur(8px);
//         ${({ imagemCarregada }) => !imagemCarregada ? imagemCarregadaCss : imagemNaoCarregada }
//     }

//     .img--full  {
//         ${({ imagemCarregada }) => !imagemCarregada ? imagemNaoCarregada : imagemCarregadaCss}
//     }

//     h3 {
//         color: white;
//         z-index: 100000;
//         font-weight: 1000;         
//     }  
// `;

// export const Section = styled.section`

//     position: fixed;

//     width: 100vw;
//     height: 10vh;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-self: flex-start;

//     @media only screen and (min-width: 240px) {
//         flex-direction: row;
//         justify-content: space-between;

//         width: 95vw;
//     }

//     button {
//         color: #fff;
//         white-space: nowrap;
//         font-weight: bold;
//         cursor: pointer;

//         span {
//             color: white;
//             z-index: 100000;
//             font-weight: 1000;            
//             &:hover{
//                 color: var(--vermelho);;
//                 background-color: var(--vermelho);
//             }
//         }

//         @media only screen and (min-width: 240px){

//             font-size: 100%;

//         }

//         @media only screen and (min-width: 1024px){

//             font-size: 200%;

//         }        
//     }
// `;