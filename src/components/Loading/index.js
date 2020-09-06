import React from 'react'
import { Container } from './styles';
import gif from './Logo-3d.gif';

export default ({ showGif }, ...props) => (
    <Container propriedades={props}>
        {showGif && <img src={gif} alt="logo"/>}
    </Container>
)