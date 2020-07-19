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
            font-size: 2.2rem;
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
`;

export const ParteDeBaixo = styled.footer`
    > hr {
        border-top: 2px dashed var(--preto);
    }

    > h3 {
        font-size: 1rem;
        padding-top: 1rem;
        text-align: center;
    }

    @media only screen and (min-width: 320px) {
        > h3 {
            font-size: 1.5rem;
        }
    }

    @media only screen and (min-width: 360px) {
        > h3 {
            font-size: 2rem;
        }
    }
   
    @media only screen and (min-width: 490px) {
        > h3 {
            font-size: 2.5rem;            
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