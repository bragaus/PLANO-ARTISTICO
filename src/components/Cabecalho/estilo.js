import styled, { keyframes } from 'styled-components';

const rotacao = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Superior = styled.header.attrs(props => ({
    className: props.className
}))`

    & .info {
        font-size: 4vw;
        text-decoration: none;
        color: #000000;
        position: fixed;
        top: -1%;
        left: 0%;
        z-index: 2;             
        &:hover {
            color: #ff0000;
            background: #ff0000;
        }

    }

    ul {
        position: fixed;
        right: 0%;
        top: -1%;
        z-index: 2;
        li {
            text-align: right;
            font-size: 4vw;
            list-style: none;
            z-index: 3;

            a {
                text-decoration: none;
                color: #000000;
                &:hover{
                    background: #ff0000;
                    color: #ff0000;
                    cursor: pointer;
                }
            }
            
            button {
                font-size: 4vw;
                color: #000000;
                background: none;
                border: none;
                outline: inherit;
                cursor: pointer;
                &:hover{
                    background: #ff0000;
                    color: #ff0000;
                }
            }
        }
    }

    img {
        position: fixed;
        left: 20%;
        top: 1%;
        z-index: 2;
        width: 15%;
        cursor: pointer;
        -webkit-animation:${rotacao} 8s linear infinite;
        -moz-animation:${rotacao} 8s linear infinite;
        animation:${rotacao} 8s linear infinite;

        @media only screen and (max-width: 768px) {
            left: 55%;
            width: 35%;
            top: 1%;   
            /* display: none; */
        }           
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }    
`;