import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { CaixaDaImagem, ImagemFrente, ImagemVerso, Navegacao } from './estilo';
import history from '../../history';
import Loading from '../../components/Loading';
// import ProgressiveImage from "react-progressive-image-loading";

// Pendências:
// Fazer zoom seguir o cursor igual quando faz zoom de uma imagem no whats

// Props para recuperar o ID da arte passado como parâmetro
const VisualizarArte = (props) => {

    // Esse estado recebe a arte requisitada a api
    const [arte, setArte] = useState([]);

    // Esse estado controla o zoom da imagem quando clicada
    const [zoom, setZoom] = useState(true);

    // Esse estado controla o tempo de carregamento da pagina (Ainda em faze de teste)
    const [carregando, setCarregando] = useState(true);

    // Esse estado controla quando vai ser mostrada a arte da frente ou o verso da arte
    const [mostrar, setMostrar] = useState(true);

    useEffect(() => {

        async function carregarArte() {
            // Chamando a api que busca arte de acordo com o id passado na url
            const arte = await api.get(`/visualizarArte/${props.match.params.id}`);
            setArte(arte.data)
            console.log(arte);

            // Fase de teste do carregamento da pagina
            setCarregando(false);
        }

        carregarArte()

        // Como padrão o site não tem rolagem horizontal 
        // exceto nessa pagina para visualizar arte.
        // Adicionando rolagem horizontal quando iniciar
        document.body.style.overflowX = 'auto'
        
        // Removendo rolagem horizontal quando finalizar
        return function cleanup() {
            document.body.style.overflowX = 'hidden'
        };

    }, [props.match.params.id])  

    // Estratégia para fazer o loading da página
    if (carregando) {
        return <Loading />
    } else {
        // src={`data:image/png;base64,${arte.arquivoBlob}`}
        // Desestruturando a arte carregada no estado
        var [{ url, urlFrente: arteFrenteVerso, urlVerso, arquivoBlob }] = arte

        return (
            <>
                <Navegacao>

                    <button onClick={() => history.goBack()}> 
                        <b>GO BACK</b>
                    </button>

                    {arteFrenteVerso && <button
                        onClick={() => mostrar ? setMostrar(false) : setMostrar(true)}
                    > 
                        <b>{mostrar && "FRONT/BACK"}</b>
                        <b>{!mostrar && "FRONT/BACK"}</b>
                    </button>}

                </Navegacao>
                
                {/* Arte única, que não tem verso */}
                {url && <CaixaDaImagem  zoom={zoom} mostrar={mostrar}>
                    <ImagemFrente 
                        src={url} 
                        mostrar={mostrar}
                        onClick={() => zoom ? setZoom(false) : setZoom(true)}
                    />
                    {/* <ProgressiveImage
                        // preview={`data:image/png;base64,${arquivoBlob}`}
                        src={url}
                        render={(src, style) => <img src={src} style={style} />}
                    />                                      */}
                </CaixaDaImagem>}

                {/* Arte com frente e verso */}
                {arteFrenteVerso && <CaixaDaImagem zoom={zoom}>
                    <ImagemFrente
                        src={arteFrenteVerso}
                        mostrar={mostrar}
                        // alternado o estado entre true e false quando clicado
                        onClick={() => zoom ? setZoom(false) : setZoom(true)}
                    />
                    <ImagemVerso
                        src={urlVerso}
                        mostrar={mostrar}
                        // alternado o estado entre true e false quando clicado
                        onClick={() => zoom ? setZoom(false) : setZoom(true)}
                    />
                </CaixaDaImagem>}
            </>
        );
    }
};

export default VisualizarArte;