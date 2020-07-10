import styled from 'styled-components';
import {FecharIcon} from '../../styles/Icons/FecharIcon';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    z-index: 2;

    width: 45%;

    background: var(--branco);
    border: 0.8vh solid var(--vermelho);
    border-radius: 5vh;
`;

export const ParteDeCima = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Fechar = styled(FecharIcon)`
    width: 50%;

    > path, rect {
        fill: var(--vermelho);
    }
`;
