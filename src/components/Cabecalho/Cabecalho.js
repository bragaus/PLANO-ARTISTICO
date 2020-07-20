import React, { useState } from 'react';
import { Link, animateScroll } from "react-scroll";
import { Link as Ancora } from 'react-router-dom';
import { Superior, Auxiliar, Logo, Seta, Pictograma, Menu } from './estilo';
import TelaEmail from '../TelaEmail/TelaEmail';

const Cabecalho = () => {

    const [telaDeEmail, setTelaDeEmail] = useState(false);
    
    return (<>
        <Superior>

            <section className="dispositivo-movel">
                <Pictograma />
                <Menu>
                    MENU
                </Menu>
            </section>

            <Ancora to="/sobre" className="info">
                <b>INFO</b>
                <Seta />                
            </Ancora>

            <Logo onClick={animateScroll.scrollToTop}/>

            <nav className="desktop">
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
                            <b>ILLUSTRATIONS</b>
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
                            <b>ALBUM COVER</b>
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
                            <b>COLLAGES</b>
                        </Link>
                    </li>    
                    <li>
                        <button 
                            onClick={() => telaDeEmail ? setTelaDeEmail(false) : setTelaDeEmail(true)}
                        >
                            <b>CONTACT</b>
                        </button>
                    </li>

                </ul>            
            </nav>          

        </Superior>

        <Auxiliar />

        {telaDeEmail && <TelaEmail setTelaDeEmail={setTelaDeEmail}/>}

    </>);
};

export default Cabecalho;