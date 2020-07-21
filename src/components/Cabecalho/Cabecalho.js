import React, { useState } from 'react';
import { Link, animateScroll } from "react-scroll";
import { Link as Ancora } from 'react-router-dom';

import TelaEmail from '../TelaEmail/TelaEmail';
import { Superior, Logo, Seta, Pictograma, Menu, Container } from './estilo';

const Cabecalho = () => {

    const [telaDeEmail, setTelaDeEmail] = useState(false);
    const [menuDispositivoMovel, setMenuDispositivoMovel] = useState(false);

    // Esconder e mostrar a barra de rolagem
    if (menuDispositivoMovel) {
        document.body.style.overflow = 'hidden'
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera     
    } else {
        document.body.style.overflow = 'initial'
    }

    return (<>
        <Superior>

            <section className="dispositivo-movel">
                <Pictograma />
                <Menu
                    onClick={() => setMenuDispositivoMovel(!menuDispositivoMovel)}
                >
                    MENU
                </Menu>
            </section>

            <section className="desktop">
                <Ancora to="/sobre" className="info">
                    INFO
                    <Seta />   
                </Ancora>

                <Logo onClick={animateScroll.scrollToTop}/>

                <nav>
                    <ul>                                           
                        <li>
                            <Link
                                activeClass="active"
                                to="ilustrações"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                               ILLUSTRATIONS
                            </Link>
                        </li>                    
                        <li>
                            <Link
                                activeClass="active"
                                to="artesDeCapa"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                ALBUM COVER
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="colagens"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                COLLAGES
                            </Link>
                        </li>    
                        <li 
                            onClick={() => telaDeEmail ? setTelaDeEmail(false) : setTelaDeEmail(true)}
                        >
                            <span>CONTACT</span>
                        </li>
                    </ul>   
                </nav> 
            </section>         

        </Superior>

        {/* estou passando setTelaDeEmail para escutar quando for clicado no fechar email */}
        {telaDeEmail && <TelaEmail setTelaDeEmail={setTelaDeEmail}/>}

        {menuDispositivoMovel && (<>
        <Container>
            <nav>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="ilustrações"
                            offset={-70}
                            onClick={() => {
                                setMenuDispositivoMovel(false)
                            }}                                
                        >
                            ILLUSTRATIONS
                        </Link>                      
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="artesDeCapa"
                            offset={-70}
                            onClick={() => {
                                setMenuDispositivoMovel(false)
                            }}                                 
                        >
                            ALBUM COVER
                        </Link>                            
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="colagens"
                            offset={-70}
                            onClick={() => {
                                setMenuDispositivoMovel(false)
                            }}                                
                        >
                            COLLAGES
                        </Link>                            
                    </li>
                    <li>
                        <Ancora 
                            to="/sobre" 
                            className="info"                             
                        >
                            INFO 
                        </Ancora>                            
                    </li>
                </ul>
            </nav>
        </Container>
        </>)}
    </>);
};

export default Cabecalho;