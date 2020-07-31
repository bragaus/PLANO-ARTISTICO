import React from 'react';

import { 
    Main,
    Titulo,
    Flex,
    Ilustracao,
    ArteDeCapa,
    Colagem,
    DivEmail,
    Portateis,
    Figure,
    Painel,
    Lista,
} from './estilo';


import Controladores, { zIndex } from '../Controladores/Controladores';

import { Link } from 'react-router-dom';

const Figura = ({ autenticado, visualizarComoUsuario, artes, setArtes, auxiliar, setAuxiliar, tipo }) => {
    return (
        <section>
            <header>
                <Titulo 
                    id={tipo}
                    autenticado={autenticado} 
                    visualizarComoUsuario={visualizarComoUsuario}
                >
                    {tipo}
                </Titulo>
            </header>

            {artes.map(arte => (
                <Figure
                    arte={artes}
                    id_DaArte={arte.ID}                
                >

                    <figcaption>
                        <h5>{arte.titulo} - {arte.descricao}</h5>
                    </figcaption>

                    {autenticado && !visualizarComoUsuario && (
                        <Controladores
                            id_daArte={arte.ID} 
                            tipo={tipo} 
                            arte={artes}
                            setArte={setArtes}
                            auxiliar={auxiliar}
                            setAuxiliar={setAuxiliar}
                        />  
                    )}                          

                    {autenticado && !visualizarComoUsuario ? (
                        <Ilustracao
                            onClick={() => zIndex(
                                arte.ID, 
                                tipo,
                                artes,
                                setAuxiliar,
                                auxiliar
                            )}
                            src={arte.url || arte.urlPreview }
                            alt={arte.titulo}
                        />
                    ) : (
                        <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}}>
                            <Ilustracao 
                                src={arte.url || arte.urlPreview }
                                alt={arte.titulo}
                            />
                        </Link>
                    )}                                               

                </Figure>
            ))}
        </section>        
    );
};

export default Figura;