import React, { useState } from 'react';
import { Link, animateScroll } from "react-scroll";
import { Link as Ancora } from 'react-router-dom';
import { Superior, Auxiliar } from './estilo';
import LogoImg from '../../estaticos/logo.png';
import TelaEmail from '../TelaEmail/TelaEmail';
import TelaEmailCelular from '../TelaEmail/TelaEmailCelular';

const Cabecalho = () => {

    const [telaDeEmail, setTelaDeEmail] = useState(true);
    const [telaDeEmailCelular, setTelaDeEmailCelular] = useState(false);
    
    return (<>
        <Superior>
            
            <nav className="celular">
                <ul>
                    <li>
                        <Ancora to="/sobre">
                            <b>INFO&#8599;</b>
                        </Ancora>                    
                    </li>
                    <li>
                        <button
                            onClick={() => setTelaDeEmailCelular(true)}
                        >
                            <b>CONTACT</b>
                        </button>             
                    </li>
                </ul>
            </nav>    

            <Ancora to="/sobre" className="info">
                <b>INFO&#8599;</b>
            </Ancora>               

            <img src={LogoImg} onClick={animateScroll.scrollToTop}/>

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
        {telaDeEmailCelular && <TelaEmailCelular/>}

    </>);
};

export default Cabecalho;