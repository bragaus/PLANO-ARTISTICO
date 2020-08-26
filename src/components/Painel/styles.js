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

export const Absolute = styled.div`
    position: fixed;
    width: 50%;
    height: 100px;
    top: 40%;
    left: 22%;
    background-color: var(--amarelo);
    border: 1px solid var(--preto);
    z-index: 1000000;
`;