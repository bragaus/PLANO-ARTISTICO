import React from 'react';
import { Link } from 'react-router-dom';
import { Cabecalho, Principal, Rodape } from './estilo';

const Sobre = () => {
    return(
        <>
        <Cabecalho>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <b>PLANO ARTÍSTICO</b>
                        </Link>
                    </li>
                    <li>&#128412;</li>
                    <li>&#9787;</li>					
                    <li>&#10231;</li>
                    <li>&#9843;</li>
                    <li>&#8605;</li>
                    <li>&#10085;</li>
                </ul>
            </nav>
            <hr />
	    </Cabecalho>

        <Principal>
            <p>
                Plano Artístico is a graphic design and illustration company from Brazil, 
                currently based on Rio de Janeiro. Created in 2017, plano art is trying to 
                find his way on art.
            </p>
        </Principal>

        <Rodape>
            <hr />
            <h2>PLANO ARTÍSTICO, AN WORLDWIDE OPERATION (copyright  symbol) 2019</h2>
	    </Rodape>       
        </>      
    );
};

export default Sobre;