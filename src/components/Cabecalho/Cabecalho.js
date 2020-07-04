import React, { useState } from 'react';
import { Link, animateScroll } from "react-scroll";
import { Link as Ancora } from 'react-router-dom';
import { Lista, Logo, Navegacao, Superior } from './estilo';
import LogoImg from '../../estaticos/logo.png';
import TelaEmail from '../TelaEmail/TelaEmail';

const Cabecalho = () => {

    const [telaDeEmail, setTelaDeEmail] = useState(false);
    
    return (<>
        <Superior>
            
            <Ancora to="/sobre" className="info">
                <b>INFO&#8599;</b>
            </Ancora>    

            <img src={LogoImg} onClick={animateScroll.scrollToTop}/>

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

            <div style={{height: '35vh'}}></div>            

        </Superior>

        {telaDeEmail && <TelaEmail setTelaDeEmail={setTelaDeEmail}/>}        
    </>);
};

export default Cabecalho;