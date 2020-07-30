import React, { useState } from 'react';
import { Link, animateScroll } from "react-scroll";
import { Link as Ancora } from 'react-router-dom';

import { Superior, Logo, Seta, Pictograma, Menu, Container } from './estilo';

import TelaEmail from '../TelaEmail';

const Header = ({setMenuDispositivoMovel, menuDispositivoMovel}) => {

    const [telaDeEmail, setTelaDeEmail] = useState(false);

    // Esconder e mostrar a barra de rolagem
    if (menuDispositivoMovel) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera 
        document.body.style.overflowY = 'hidden'    
        document.body.style.overflowX = 'hidden'    
    } else {
        document.body.style.overflowY = 'initial'
        document.body.style.overflowX = 'hidden'
    }

    return (<>
        <Superior>

            <section className="dispositivo-movel">

                    <Pictograma onClick={animateScroll.scrollToTop}/>
                    <Ancora 
                        to="/sobre" 
                        className="info"                             
                    >
                        ?
                    </Ancora> 
           
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
                        <li>
                            <span
                                onClick={() => setTelaDeEmail(!telaDeEmail)}
                            >
                                CONTACT
                            </span>
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
                </ul>
            </nav>
        </Container>
        </>)}
    </>);
};

export default Header;