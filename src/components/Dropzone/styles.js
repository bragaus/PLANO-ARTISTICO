import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return 'var(--verde)';
    }
    if (props.isDragReject) {
        return 'var(--vermelho)';
    }
    if (props.isDragActive) {
        return 'var(--preto)';
    }
    return 'var(--preto)';
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;

    position: relative;

    width: 400px;
    height: 200px;

    border: 3px solid ${props => getColor(props)};

    background-color: #fafafa;

    color: var(--preto);
    font: bold 1.5rem Arial;

    outline: none;
    transition: border .24s ease-in-out;

    > p {
        text-align: center;
    }

    > input {
        display: none;
    }

    cursor: pointer;
`;

export const Figure = styled.figure`

    height: 100%;

    > img {
        height: 100%;
    }
`;