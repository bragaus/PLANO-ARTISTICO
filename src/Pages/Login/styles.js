import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const Section = styled.section`

`;

export const Fieldset = styled.fieldset`
    border: 3px solid var(--preto);
    padding: 10%;

    width: 30vw;
    height: 50vh;

    legend {
        font: 1000 2rem Arial;
    }

    input {
        border-bottom: 2px solid var(--preto);
        width: 100%;
    }

    label {
        font: bold 2rem Arial;  
    }

`;