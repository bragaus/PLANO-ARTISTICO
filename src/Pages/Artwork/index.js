import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import history from '../../history';

import { Container, Section, Logo } from './styles';

export default ({ match: { params: { chave } } }) => {

    // Armazena a resposta da api
    const [artwork, setArtwork] = useState({})

    const [imagemCarregada, setImagemCarregada] = useState(false);
    const [zoom, setZoom] = useState(false);

    const [verso, setVerso] = useState(false);

    useEffect(() => {

        (async () => {

            const {

                data,
                data: { length },
                data: [{ titulo, url, urlFrente, urlVerso, blobPreview, blobFrente, blobVerso }],
                status

            } = await api.get(`/artworks/${chave}`);

            console.log(data);

            if (status === 200 && length > 0) {
                setArtwork({ 
                    titulo: titulo,
                    url: url, 
                    urlFrente: urlFrente, 
                    urlVerso: urlVerso,
                    blobPreview: `data:image/png;base64,${blobPreview}`,
                    blobFrente: blobFrente !== null ? `data:image/png;base64,${blobFrente}` : '',
                    blobVerso: blobVerso !== null ? `data:image/png;base64,${blobVerso}` : '',
                });
            }

            document.body.style.overflowX = 'auto'
            
            return function cleanup() {
                document.body.style.overflowX = 'hidden'
            };            

        })()

    }, [chave])

    return (
        <Container imagemCarregada={imagemCarregada} zoom={zoom}>

            {!verso ? (<>

                <img 

                    className="img--half" 
                    src={ artwork.blobFrente === '' ? artwork.blobPreview : artwork.blobFrente } 
                    alt={ artwork.titulo || chave }

                />

                <img

                    className="img--full" 
                    src={ artwork.url || artwork.urlFrente } 
                    alt={ artwork.titulo || chave }
                    onLoad={() => setImagemCarregada(true)}
                    onClick={() => setZoom(!zoom)}

                />

            </>) : (<>

                <img 

                    className="img--half" 
                    src={ artwork.blobVerso } 
                    alt={ artwork.titulo || chave }

                />

                <img

                    className="img--full" 
                    src={ artwork.urlVerso } 
                    alt={ artwork.titulo || chave }
                    onLoad={() => setImagemCarregada(true)}
                    onClick={() => setZoom(!zoom)}

                />

            </>)}

            <Section>
                <button onClick={() => history.goBack()}> <span>GO BACK</span> </button>
                
                {artwork.blobFrente && (
                    <button onClick={() => {
                        setVerso(!verso);
                        setImagemCarregada(false);
                    }}> <span>FRONT/BACK</span> </button>
                )}     
            </Section>            


            {!imagemCarregada && (<Logo />)}
        </Container>
    );
}