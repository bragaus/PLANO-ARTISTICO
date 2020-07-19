import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Principal, Star, ParteDeCima, ParteDeBaixo, Tesoura } from './estilo';

const Sobre = () => {
    return (

        <Container>

            <ParteDeCima>
                <div>
                    <Link to="/">
                        <h1>PLANO ARTÍSTICO</h1>                    
                    </Link>

                    <ul>
                        <li>&#128412;</li>
                        <li>&#9787;</li>
                        <li>&#10231;</li>
                        <li>&#9843;</li>
                        <li>&#8605;</li>
                        <li>&#x2623;</li>
                    </ul>

                </div>

                <hr />
            </ParteDeCima>

            <Principal>

                <p>
                    hi, my name is cesar
                </p>

                <p>
                    I’m a graphic designer, illustrator and 
                    also a regular person.
                    I like creating visual stuff, yea uh, 
                    art you know?  
                </p>

                <p>
                    plano artístico was created in 2017
                    for experimental study, i wanted like a 
                    company name, so i came up with this.
                    PLANO like a flat empty space, very far,
                    as far as the eye can see.
                    currently based in Brazil, influenced 
                    by the influence, Jean Giraud and
                    Henry Chinaski. 
                    motivated to do something
                    bigger than myself.                               
                </p>

                <p>
                    an ironic, dark and twisted sense of humor,
                    a mind-expanding kind of optimism that
                    seems out of date, no smell, no colors,
                    just light.                    
                </p>

                <p className="como40Paginas">
                    como 40 páginas de um romance ruim.                    
                </p>

                <Star />

                <p className="criadores">
                    CODED BY <b>BM</b>
                </p>

                <p className="criadores">
                    CREATIVE DIRECTION BY <b>AC</b>                                        
                </p>

                <Star />

                <p className="haveANiceDay">
                    HAVE A NICE DAY! <br />
                    SOMEWHERE ELSE
                </p>

            </Principal>

            <ParteDeBaixo>
                <hr />
                <h3>PLANO ARTÍSTICO. A WORLDWIDE OPERATION.&trade; 2020</h3>
            </ParteDeBaixo>

        </Container>


    );
}

export default Sobre;