import styled from 'styled-components';
import { StarIcon } from '../../styles/Icones';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #686868;

    div {
        position: relative;
        background: #686868;

        & .haveANiceDay {
            position: absolute;
            font-size: 6.125vw;
            left: 23%;
            bottom: 63%;
            color: #000cff;
            font-family: 'Times New Roman';
        }

        & .someWhereElse {
            font-size: 6vw;
            text-align: center;
            color: #000cff;
            font-family: 'Times New Roman';
        }
    }


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

    & .como40Paginas {
        padding-top: 30% !important;
    }
`;

export const Star = styled(StarIcon)`
    width: 20%;
    margin: 20% 39%;
`;

export const ParteDeCima = styled.header`

    width: 100%;

    > div {
        display: flex;
        justify-content: space-between;

        > h1 {
            font-size: 7vw; 
            margin-left: 0.5%;
            margin-top: 0.2%;
            white-space: nowrap;
        }

        > ul {
            display: flex;
            font-size: 5.5vw;
            margin-right: 1%;
            margin-top: 0.5%;
        }
    }

    > hr {
        border-top: 0.3vw solid black;
    }
`;

export const ParteDeBaixo = styled.footer`
    background:  #686868;

    > span {
        position: absolute;
        font-size: 5vw;
    }

    > p {
        font-size: 5vw;
        white-space: nowrap;
    }
`;