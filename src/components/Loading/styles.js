import styled from 'styled-components';

export const Container = styled.div`
    top:0;
    left:0;

    position: fixed;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #000;

    z-index: 1000000000000; 

    img {
      padding-bottom: 2%;
      width: 70%;
    }
`;