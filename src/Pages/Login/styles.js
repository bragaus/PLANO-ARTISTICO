import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const Section = styled.section`
    margin-top: 5%;
`;

export const Fieldset = styled.fieldset`
    border: 3px solid var(--preto);
    padding: 0 10% 0 10%;

    width: 350px;
    height: 400px;

    h1 {
        text-align: center;
        padding: 15%;
        font: 1000 2.5rem Arial;
    }

    input {
        border-bottom: 2px solid var(--preto);
        width: 100%;
        padding: 5% 0 5% 0;
    }

    label {
        font: bold 1.5rem Arial;  
    }
`;

export const Button = styled.button`
    width: 100%;
    background: var(--preto);
    border-radius: 25px;
    color: #fff;
    padding: 3%;

    cursor: pointer;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 60%;
    width: 100%;
`;