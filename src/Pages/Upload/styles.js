import styled from 'styled-components';

export const Container = styled.form`
    padding: 2%;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 2%;
    margin-bottom: 2%;
`;

export const Section = styled.section`
    > label {
        font: bold 2.4rem Arial;
    }

    > input, textarea {
        border: 3px solid black;
        width: 100%;
        padding: 1%;
    }

    > textarea {
        resize: none; 
    }

    &.checkbox {

        input {
            display: none;
        }

        border: 3px solid black;
        width: 20%;
        text-align: center;

        background-color: ${({ checked }) => checked ? 'var(--vermelho)' : null}

    }

`;

export const Fieldset = styled.fieldset`
    margin-top: 2%;
    margin-bottom: 2%;

    > legend {
        font: bold 2.4rem Arial;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`;