import styled from 'styled-components';
import { StarIcon, TesouraIcon, InfoIcon, ArameIcon } from '../../styles/Icones';

export const Container = styled.div`
    background: var(--cinza);
`;

export const ParteDeCima = styled.header`
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > a {
            color: var(--preto);

            > h1 {
                font-size: 11vw;
                white-space: nowrap;
                margin-left: 3px;
            }
        }

        > svg {
            display: none;
        }
    } 

    hr {
        border: 1px solid var(--preto);
    }

    @media only screen and (min-width: 424px) {
        > div {
            flex-direction: initial;

            > a {
                > h1 {
                    font-size: 7vw;
                }
            }

            > svg {
                display: block;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        > div {
            justify-content: space-between;
            align-items: flex-start;
            > a {
                > h1 {
                    font-size: 6vw;
                    margin-left: 0;
                }
            }
        }
    }    
`;

export const Principal = styled.main`
    > p {
        font-size: 2rem;
        color: var(--preto);

        padding-top: 2rem;
        margin: 0px 3px;
    }

    & .criadores {
        font-size: 1.5rem;
        text-align: right;
    }

    & .haveANiceDay {
        &::first-line { 
            font-size: 10.8vw;
        }

        font-size: 10vw;
        color: var(--azul);
        line-height: 80%;
        text-align: center;

        padding-bottom: 2rem;
    }
    
    @media only screen and (min-width: 320px) {
        > p {
            font-size: 3rem;
        }

        & .criadores {
            font-size: 2rem;
        }        

        & .haveANiceDay {
            &::first-line { 
                font-size: 10.8vw;
            }

            font-size: 10vw;
        }
    }

    @media only screen and (min-width: 425px) {
        & .criadores {
            font-size: 2.8rem;
        }        
    }  

    @media only screen and (min-width: 768px) {
        > p {
            font-size: 4rem;
        }

        & .criadores {
            font-size: 4rem;
        }

        & .haveANiceDay {
            &::first-line { 
                font-size: 6vw;
            }

            font-size: 5.5vw;
        }        
    }

    @media only screen and (min-width: 1024px) {
        > p {
            font-size: 8rem;
        }

        > p + p {
            font-size: 8rem;
            padding-top: 15rem;
        }

        & .como40Paginas {
            padding-top: 40rem;
        }

        & .criadores {
            font-size: 4rem;
            padding-top: 7rem;
        }

        & .haveANiceDay {
            &::first-line { 
                font-size: 7.6rem;
            }

            font-size: 7rem;
            line-height: 5.5rem;
        }         
    }
`;

export const ParteDeBaixo = styled.footer`
    > hr {
        border-top: 2px dashed var(--preto);
    }

    > h3 {
        font-size: 5vw;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
    }
   
    @media only screen and (min-width: 425px) {
        > h3 {
            font-size: 3vw;            
        }
    }   

    @media only screen and (min-width: 768px) {
        > h3 {
            font-size: 2vw;            
        }
    } 
    
    @media only screen and (min-width: 1024px) {
        > hr {
            border-top: 5px dashed var(--preto);
        }

        > h3 {
            font-size: 1.5vw;                     
        }        
    }    
`;

export const Tesoura = styled(TesouraIcon)`
    position: absolute;
    padding-top: 3.9%;
    right: 3%;
    width: 5%;
    fill: #000;
`;

export const IconesDeCima = styled(InfoIcon)`
    width: 41%;
    fill: #000;
    padding-top: 3px;
    padding-right: 4px;
`;

export const Arame = styled(ArameIcon)`
    padding-top: 10px;
    width: 100%;
    fill: #000;
`;

export const Star = styled(StarIcon)`
    width: 20%;
    margin: 20% 39%;
`;