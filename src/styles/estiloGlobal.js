import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        font-family: 'Arial', sans-serif; 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
        
        color: var(--preto);
    }

    *, button, input {
        border: 0;
        background: none;
        outline: none;
    }    

    :root {
        --vermelho: #ff0000;
        --azul: #001eff;
        --branco: #fff;
        --preto: #000000;    
    }
`;
