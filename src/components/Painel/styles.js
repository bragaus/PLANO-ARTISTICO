import styled from 'styled-components';

export const Section = styled.section`
    position: fixed;
    bottom: 0;
    width: 15%;
    z-index: 10000;

    @media only screen and (max-width: 1023px) {
        display: none;
    }
`;

export const Lista = styled.ul`
    > li {
        border: 1px solid var(--preto);
        background: var(--amarelo);
        padding: 2%;
        cursor: pointer;

        font-size: max(1.5vw, 2rem);
        text-align: center;     
    }

    > li:hover {
        background: var(--amareloEscuro);
    }
`;

export const Div = styled.div`


    @media only screen and (max-width: 1023px) {
        display: none;
    }

    position: fixed;

    background-color: var(--amarelo);
    border: 1px solid var(--preto);
    z-index: 1000000;

    h1, p {
        text-align: center;
    }

    padding: 1%;

    .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;

        margin-top: 5%;

        button {
            cursor: pointer;
            border: 1px solid black;
            padding: 10px;
            margin-left: 2%;

            &:hover{
                background-color: var(--amareloEscuro);
            }
        }        
    }

`;

export const Flex = styled.div`

`;

export const Container = styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;

    top:0;

    display: flex;
    justify-content: center;
    align-items: center;
`;