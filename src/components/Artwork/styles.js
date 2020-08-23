import styled from 'styled-components';

export const Titulo = styled.h1`
margin-top: 2%;
margin-left: -2%;

font-size: 15.2vw;
text-align: center;
white-space: nowrap;
color: #e6e6e6;

@media only screen and (min-width: 1024px) {
    font-size: 14.010vw;
}

&#ILLUSTRATION {
    @media only screen and (min-width: 1024px) {
        ${({ autenticado, visualizarComoUsuario }) => {
            if (autenticado && !visualizarComoUsuario) {
                return {marginTop: '0'}
            } else if ((autenticado && visualizarComoUsuario) || !autenticado) {
                return {marginTop: '17%'}
            }
        }}
    }
}

&#COLLAGE {
    font-size: 21vw;

    @media only screen and (min-width: 1024px) {
        font-size: 20.8vw;
    }        
}
`;

export const Figure = styled.figure`
    width: 100%;
    margin-top: -1rem;
    overflow: hidden;

    img {
        width: 100%;
        margin-bottom: -2%;        
    }

    > figcaption {
        position: absolute;
        margin-top: 2%;

        text-transform: uppercase;


        > h5 {
            font-size: max(1vw, 0.5rem);
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &:hover {
                white-space: normal;
            }            
        }

        @media only screen and (min-width: 768px) {
            position: initial;
            font-size: 1.5rem;         
        }     
    }

    @media only screen and (min-width: 768px) {

        height: 100%;

        ${({ arte, id_DaArte }) => {

            const [{ 
                largura, 
                esquerda, 
                direita, 
                cima, 
                baixo, 
                zIndex 
            }] = arte.filter(({ ID }) => ID === id_DaArte)
            
            return ({
                position: 'relative',
                width: `${largura}%`,
                left: `${esquerda}%`,
                right: `${direita}%`,
                bottom: `${cima}vw`,
                top: `${baixo}vw`,
                zIndex: `${zIndex}` 
            })
        }}
    }
`;