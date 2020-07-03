import React, { useState } from 'react';
import { Link } from "react-scroll";
import { Link as Ancora } from 'react-router-dom';
import { Lista, Logo, Navegacao } from './estilo';
import LogoImg from '../../estaticos/logo.png';
import TelaEmail from '../TelaEmail/TelaEmail';

const Cabecalho = () => {

    const [telaDeEmail, setTelaDeEmail] = useState(false);
    
    return (<>

        <Logo src={LogoImg} />

        <Navegacao>
            <ul>                                           
                <Lista>
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
                </Lista>                    
                <Lista>
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
                </Lista>
                <Lista>
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
                </Lista>    
                <Lista>
                    <button 
                        onClick={() => telaDeEmail ? setTelaDeEmail(false) : setTelaDeEmail(true)}
                    >
                        <b>CONTACT</b>
                    </button>
                </Lista>                                    
                <Lista>
                    <Ancora to="/sobre">
                        <b>ABOUT</b>
                    </Ancora>
                </Lista>  

            </ul>            
        </Navegacao>

        <div style={{height: '35vh'}}></div>

        {telaDeEmail && <TelaEmail setTelaDeEmail={setTelaDeEmail}/>}

    </>);
};

export default Cabecalho;