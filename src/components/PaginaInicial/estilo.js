import styled from 'styled-components';

export const Main = styled.main`
    margin-top: min(10%, 40px);         

    @media only screen and (min-width: 768px) {
        margin-top: 5%;
    } 
`;

export const Titulo = styled.h1`
    margin-top: 2%;
    font-size: 15vw;
    margin-left: -2%;

    white-space: nowrap;

    &#ilustracoes {
        @media only screen and (min-width: 1024px) {
            padding-top: 12%;
        }
    }

    &#colagens {
        font-size: 20vw;
    }
`; 

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    figure {
        width: 100%;
        margin-top: -1rem;
        overflow: hidden;

        > figcaption {
            position: absolute;       
            margin-top: 2%;

            text-transform: uppercase;
            font-size: min(7vw, 2rem);
        }
    }

    @media only screen and (min-width: 768px) {
        figure {
            width: 45%;
            margin: 1%;
        }
    }    
`;

export const Ilustracao = styled.img`
    width: 100%;
`;

export const ArteDeCapa = styled.img`
    width: 100%;
`;

export const Colagem = styled.img`
    width: 100%;
`;

export const Portateis = styled.section`
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

export const DivEmail = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;

    z-index: 2;

    font-size: min(6vw, 25px);
    color: var(--azul);
    font-weight: bold;

    background: var(--branco);
    border: 2px solid var(--vermelho);
    padding: 5px;
`;

// export const DivisorDeSecao = styled.div`
//     /* Define o elemento como um flex container, tornando os seus filhos flex-itens */
//     display: flex;

//     /* Cria um espaçamento igual entre os elementos */
//     justify-content: start;    

//     /* quando um dos flex itens atinge o limite do conteúdo, 
//      * o último item passa para a coluna debaixo e assim por diante. */
//     flex-wrap: wrap;
// `;

// export const DivisorDeArte = styled.div`
//     width: 45%;

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//     }
// `;

// export const Titulo = styled.h1`
//     font-family: 'Arial', sans-serif;
//     white-space: nowrap;
//     position: relative;
//     user-select: none;
//     font-size: 13.5vw;
//     text-align: center;

//     z-index: 0;

//     @media only screen and (max-width: 768px) {
//         text-align: left;
//         left: -2%;
//         font-size: 13.5vw;
//     }
// `;

// export const Controlador = styled.button`
//     position: relative;
//     font-size: 2vh;
//     border: none;
//     display: inline-block;
// `;

// export const Painel = styled.div`
//     display: flex;
//     justify-content: flex-end; 
//     position: fixed;      
//     bottom: 0px;
//     background: black;
//     z-index: 90000000000000000;  
// `;

// export const IlustracaoDescricao = styled.p`
//     /* ${(props) => {
//         const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
//         return ({
//             position: 'relative',
//             width: `${arte.largura}%`,
//             left: `${arte.esquerda}%`,
//             right: `${arte.direita}%`,
//             bottom: `${arte.cima}vw`,
//             top: `${arte.baixo}vw`,             
//         })
//     }}
//     font-size: 50%;
//     user-select: none;
    

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//         left: 0%;
//         right: 0%;
//         bottom: 0vw;
//         top: 0vw;
//     }     */
// `;

// export const Ilustracao = styled.img`
//     width: min(100%, 500px);


//     /* ${(props) => {
//         const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
//         return ({
//             position: 'relative',
//             width: `${arte.largura}%`,
//             left: `${arte.esquerda}%`,
//             right: `${arte.direita}%`,
//             bottom: `${arte.cima}vw`,
//             top: `${arte.baixo}vw`,          
//         })
//     }}
//     z-index: 1;

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//         left: 0%;
//         right: 0%;
//         bottom: 0vw;
//         top: 0vw;
//     }     */
// `;

// export const CapaDescricao = styled.p`
//     ${(props) => {
//         const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
//         return ({
//             position: 'relative',
//             width: `${arte.largura}%`,
//             left: `${arte.esquerda}%`,
//             right: `${arte.direita}%`,
//             bottom: `${arte.cima}vw`,
//             top: `${arte.baixo}vw`,              
//         })
//     }}
//     font-size: 50%;

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//         left: 0%;
//         right: 0%;
//         bottom: 0vw;
//         top: 0vw;
//     }
// `;

// export const ArteDeCapa = styled.img`
//     ${(props) => {
//         const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
//         return ({
//             position: 'relative',
//             width: `${arte.largura}%`,
//             left: `${arte.esquerda}%`,
//             right: `${arte.direita}%`,
//             bottom: `${arte.cima}vw`,
//             top: `${arte.baixo}vw`,                
//         })
//     }}
//     z-index: 1;

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//         left: 0%;
//         right: 0%;
//         bottom: 0vw;
//         top: 0vw;
//     }    
// `;

// export const ColagemDescricao = styled.p`
//     ${(props) => {
//         const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
//         return ({
//             position: 'relative',
//             width: `${arte.largura}%`,
//             left: `${arte.esquerda}%`,
//             right: `${arte.direita}%`,
//             bottom: `${arte.cima}vw`,
//             top: `${arte.baixo}vw`,             
//         })
//     }}
//     font-size: 50%;    

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//         left: 0%;
//         right: 0%;
//         bottom: 0vw;
//         top: 0vw;
//     }        
// `;

// export const Colagem = styled.img`
//     ${(props) => {
//         const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
//         return ({
//             position: 'relative',
//             width: `${arte.largura}%`,
//             left: `${arte.esquerda}%`,
//             right: `${arte.direita}%`,
//             bottom: `${arte.cima}vw`,
//             top: `${arte.baixo}vw`,     
//         })
//     }}
//     z-index: 1;

//     @media only screen and (max-width: 768px) {
//         width: 100%;
//         left: 0%;
//         right: 0%;
//         bottom: 0vw;
//         top: 0vw;
//     }        
// `;

// export const DivTemporario = styled.div`
//     background-color: #000;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     text-align: center;
//     font-size: 5vh;
//     color: white;

//     h1 {
//         margin: auto;
//     }
// `;