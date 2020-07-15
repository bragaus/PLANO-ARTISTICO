import React from 'react';
import { Container, Principal, Star } from './estilo';

const Sobre = () => {
    return (

        <Container>
            <Principal>
                <p>
                    hi, my name is .....
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
                    currently based in brazil, influenced 
                    by the influence, Jean Giraud and
                    Henry Chinaski. 
                    motivated to do something                                    
                </p>

                <p>
                    an ironic, dark and twisted sense of humor,
                    a mind-expanding kind of optimism that
                    seems out of date, no smell, no colors,
                    just light.                    
                </p>

                <p>
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

                <p className="niceDay">
                    HAVE A NICE DAY!
                    <br />
                    SOMEWHERE ELSE              
                </p>                
            </Principal>
        </Container>


    );
}

export default Sobre;