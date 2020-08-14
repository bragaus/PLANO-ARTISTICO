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
`;