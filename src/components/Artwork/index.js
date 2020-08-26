import React from 'react';

import { Titulo, Figure } from './styles';

import Controladores, { zIndex } from '../Controladores/Controladores';

import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

const Artwork = ({ 
    autenticado, 
    visualizarComoUsuario, 
    artes, 
    setArtes,
    tipo,
    artesModificadas,
    setArtesModificadas
}) => {

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
                <Fade bottom distance={'10%'}>
                    <Figure arte={artes} id_DaArte={arte.ID} key={arte.ID}>

                        <figcaption>
                            <h5>{arte.titulo} {arte.descricao && ('- ' + arte.descricao)}</h5>
                        </figcaption>

                        {autenticado && !visualizarComoUsuario && (
                            <Controladores
                                id_daArte={arte.ID}
                                arte={artes}
                                setArte={setArtes}
                                artesModificadas={artesModificadas}
                                setArtesModificadas={setArtesModificadas}
                            />  
                        )}                          

                        {autenticado && !visualizarComoUsuario ? (
                            <img
                                onClick={() => zIndex(
                                    arte.ID,
                                    artes,
                                    setArtes,
                                    artesModificadas,
                                    setArtesModificadas
                                )}
                                src={`data:image/png;base64,${arte.arquivoBlob}`}
                                alt={arte.titulo}
                            />
                        ) : (
                            
                            <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}}>
                                <img
                                    src={`data:image/png;base64,${arte.arquivoBlob}`}
                                    alt={arte.titulo}
                                />
                            </Link>
                        )}                                               

                    </Figure>
                </Fade>                
            ))}
        </section>        
    );
};

export default Artwork;