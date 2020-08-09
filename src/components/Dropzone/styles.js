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
    width: 25%;

    padding: 5%;
    border: 3px solid ${props => getColor(props)};

    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;

    > p {
        text-align: center;
    }
`;