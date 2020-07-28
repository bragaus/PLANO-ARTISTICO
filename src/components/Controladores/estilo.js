import styled from 'styled-components';

export const Section = styled.section`
    display: none;

    @media only screen and (min-width: 1024px) {
        display: initial;
        position: absolute;
        bottom: 0;
        z-index: 10;
    }
`;

export const Lista = styled.ul`
    display: flex;

    > li {
        border: 1px solid black;
        padding: 2%;
        background: var(--branco);
    }
`;

export const Container = styled.div`

    position: absolute;
    padding: 2%;

    border: 1px solid var(--preto);
    background: var(--branco);

    font-size: 1.5rem;

        > div {
            display: flex;
            justify-content: flex-end;

            > button {
            margin-right: 2%;
            margin-top: 2%;
            border: 1px solid var(--preto);
            padding: 1% 2% 1% 0;
            width: 30%;
            font-weight: bold;
            color: var(--vermelho);
        }

        > button + button {
            color: var(--azul);
        }        
    }
`;