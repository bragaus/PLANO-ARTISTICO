import styled from 'styled-components';
import { StarIcon, TesouraIcon } from '../../styles/Icones';

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
    @media (max-width: 768px) {
        > p {
            font-size: 2em !important;
        }        
    }


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
        font-size: 3em;
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
    @media (max-width: 768px) {
        > div {
            justify-content: flex-start !important;

            > a {
                > h1 {
                    margin-left: 0 !important;
                }
            }

            > ul {
                margin-right: 0 !important;
            }
        }
    }
    width: 100%;

    > div {
        display: flex;
        justify-content: space-between;

        > a {
            > h1 {
                font-size: 7vw; 
                margin-left: 0.5%;
                margin-top: 0.2%;
                white-space: nowrap;
            }
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

export const Tesoura = styled(TesouraIcon)`
    position: absolute;
    padding-top: 3.9%;
    right: 3%;
    width: 5%;
    fill: #000;
`;

export const ParteDeBaixo = styled.footer`
    background:  #686868;

    > hr {
        border-top: 0.3vw dashed #000;
    }

    > p {
        font-size: 1.5em;
        font-weight: bold;    
        text-align: center;
        word-break: break-word;                                    
        padding-bottom: 1%;
        padding-top: 1%;
    }
`;