import React from 'react';
import { Container } from './estilo';

export const DeletarArte = () => {

    return (
        <section>
            <Container>
                <h1>are you sure you want to delete? </h1>
                <div>                
                    <button>YES</button>
                    <button>NO</button>
                </div>
            </Container>
        </section>
    );

}

export default DeletarArte;