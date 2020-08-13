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

export const Button = styled.button`
    background: var(--preto);
    width: 20%;
    padding: 2%;
    color: #fff;
    font: bold 2.4rem Arial;
    cursor: pointer;
`;

export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 5%;

    > span {
        margin-right: 1%;
        font: bold 2rem Arial;
    }
`;