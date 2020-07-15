import styled from 'styled-components';
import {StarIcon} from '../../styles/Icones';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #686868;
`;

export const Principal = styled.main`
    background:  #686868;

    > p {
        font-size: 5em;
        color: #fff;
        margin-left: 2%;
        margin-right: 2%;
        word-break: break-word;
        padding-top: 5%;
    }

    & .criadores {
        text-align: right;
        font-family: 'Times New Roman';
        color: #000;
        > b {
            font-family: 'Times New Roman';
        }
    }

    & .niceDay {
        text-align: center;
        color: #000cff;
        font-family: 'Times New Roman';
    }
`;

export const Star = styled(StarIcon)`
    width: 20%;
    margin: 20% 39%;
`;