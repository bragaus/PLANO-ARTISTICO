import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import history from '../../history';

import { Container, Section } from './styles';
import Loading from '../../components/Loading';

export default ({ match: { params: { chave } } }) => {

    // Armazena a resposta da api
    const [artwork, setArtwork] = useState({})

    const [imagemCarregada, setImagemCarregada] = useState(false);
    const [imagemPreviewCarregada, setImagemPreviewCarregada] = useState(false);
    
    const [zoom, setZoom] = useState(false);

    const [verso, setVerso] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {

            const {

                data: { length },
                data: [{ titulo, url, urlFrente, urlVerso, blobPreview, blobFrente, blobVerso }],
                status

            } = await api.get(`/artworks/${chave}`);

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

                setLoading(false);
            }

            document.body.style.overflowX = 'auto'
            
            return function cleanup() {
                document.body.style.overflowX = 'hidden'
            };            

        })()

    }, [chave])

    return (<>

        { loading && <Loading /> }

        <Container 
            imagemCarregada={imagemCarregada} 
            imagemPreviewCarregada={imagemPreviewCarregada} 
            zoom={zoom}
        >

            {!verso ? (<>

                <img 

                    className="img--half" 
                    src={ artwork.blobFrente === '' ? artwork.blobPreview : artwork.blobFrente } 
                    alt={ artwork.titulo || chave }
                    onLoad={() => setImagemPreviewCarregada(true)}

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

            {!imagemCarregada && (<h3>LOADING...</h3>)}


            <Section>
                <button onClick={() => history.goBack()}> <span>GO BACK</span> </button>
                
                {artwork.blobFrente && (
                    <button onClick={() => {
                        setVerso(!verso);
                        setImagemCarregada(false);
                    }}> <span>FRONT/BACK</span> </button>
                )}     
            </Section>              
        </Container>
       
    </>);
}