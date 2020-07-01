import styled from 'styled-components';

export const DivisorDeSecao = styled.div`
    /* Define o elemento como um flex container, tornando os seus filhos flex-itens */
    display: flex;

    /* Cria um espaçamento igual entre os elementos */
    justify-content: start;    

    /* quando um dos flex itens atinge o limite do conteúdo, 
     * o último item passa para a coluna debaixo e assim por diante. */
    flex-wrap: wrap;
    border: 1px solid red;
`;

export const DivisorDeArte = styled.div`
    border: 1px solid blue;
    width: 45%;
`;

export const Titulo = styled.h1`
    white-space: nowrap;
    position: relative;
    font-size: 13.5vw;
    text-align: center;
`;

export const Painel = styled.div`
    display: flex;
    justify-content: space-between; 
    position: fixed;      
    bottom: 0px;
    width: 100%;
    background: black;
    color: pink;
`;

export const IlustracaoDescricao = styled.p`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,
            fontSize: `1vw`,
            zIndex: '1'               
        })
    }}
`;

export const Ilustracao = styled.img`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,                
        })
    }}
`;

export const CapaDescricao = styled.p`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,
            fontSize: `1vw`,
            zIndex: '1'               
        })
    }}
`;

export const ArteDeCapa = styled.img`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,                
        })
    }}
`;

export const ColagemDescricao = styled.p`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,
            fontSize: `1vw`,
            zIndex: '1'               
        })
    }}
`;

export const Colagem = styled.img`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,                
        })
    }}
`;