import React, { useState } from 'react';

import { Titulo, Figure } from './styles';

import Controladores, { zIndex } from '../Controladores/Controladores';

import { Link } from 'react-router-dom';

const Artwork = ({ 
    autenticado, 
    visualizarComoUsuario, 
    artes, 
    setArtes,
    tipo,
    artesModificadas,
    setArtesModificadas
}) => {

    const [editar, setEditar] = useState(false);

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
                
                <Figure arte={artes} id_DaArte={arte.ID} key={arte.ID}>
                    
                    {!editar && (
                        <figcaption>
                            {autenticado && !visualizarComoUsuario && (
                                <button onClick={() => setEditar(true)}>EDIT</button>
                            )}
                            
                            <h5>{arte.titulo} {
                                // Se tiver titulo e descrição vai ser separado com (-)
                                // Se não vai mostrar so a descrição
                                (arte.titulo && arte.descricao) ? 
                                ('- ' + arte.descricao) : 
                                (!arte.titulo && arte.descricao) ? 
                                arte.descricao : null
                            }</h5>
                        </figcaption>
                    )}

                    {autenticado && !visualizarComoUsuario && (
                        <Controladores
                            id_daArte={arte.ID}
                            arte={artes}
                            setArte={setArtes}
                            artesModificadas={artesModificadas}
                            setArtesModificadas={setArtesModificadas}
                            titulo={arte.titulo}
                            descricao={arte.descricao}
                            editar={editar}
                            setEditar={setEditar}
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
                            src={`data:image/png;base64,${arte.blobPreview}`}
                            alt={arte.titulo}
                        />
                            
                    ) : (

                        <Link 
                            to={{pathname: `/artworks/${arte.chave}`, chave: arte.chave}}
                        >
                            <img
                                src={`data:image/png;base64,${arte.blobPreview}`}
                                alt={arte.titulo}
                            />
                        </Link>

                    )}                                               

                </Figure>
                          
            ))}
        </section>        
    );
};

export default Artwork;