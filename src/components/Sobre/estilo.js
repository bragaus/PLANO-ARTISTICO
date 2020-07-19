import styled from 'styled-components';
import { StarIcon, TesouraIcon } from '../../styles/Icones';

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

        > ul {
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

            > ul {
                display: flex;

                > li {
                    font-size: 6vw;
                    white-space: nowrap;
                }
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
            
            > ul {
                margin-top: -10px !important;
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
            font-size: 2.150rem;
        }

        color: var(--azul);
        line-height: 1.5rem;
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
                font-size: 3.250rem;
            }

            line-height: 2.5rem;
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
                font-size: 4.3rem;
            }

            line-height: 3rem;
        }        
    }

    @media only screen and (min-width: 1024px) {
        > p {
            font-size: 8rem;
        }

        & .criadores {
            font-size: 7rem;
        }

        & .haveANiceDay {
            &::first-line { 
                font-size: 8.6rem;
            }

            line-height: 6rem;
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
`;

export const Tesoura = styled(TesouraIcon)`
    position: absolute;
    padding-top: 3.9%;
    right: 3%;
    width: 5%;
    fill: #000;
`;

export const Star = styled(StarIcon)`
    width: 20%;
    margin: 20% 39%;
`;