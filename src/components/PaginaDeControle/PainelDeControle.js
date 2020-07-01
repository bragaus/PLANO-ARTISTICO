import React, { useState, useEffect } from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/Rodape';
import { Link } from 'react-router-dom';
import Controladores from '../Controladores/Controladores';
import api from '../../services/api';

import { 
    DivisorDeSecao, 
    DivisorDeArte,
    Titulo,
    IlustracaoDescricao, 
    Ilustracao,
    ArteDeCapa,
    CapaDescricao,
    ColagemDescricao,
    Colagem,
    Painel,
} from './estilo';

const PainelDeControle = () => {

    // Esses estados armazenam as artes separadas pelos tipos
    const [ilustracoes, setIlustracoes] = useState([]);
    const [artesDeCapa, setArtesDeCapa] = useState([]);
    const [colagens, setColagens] = useState([]);   
    
    // Esse estado serve para força a renderização do component para movimentação da arte em tempo real
    const [auxiliar, setAuxiliar] = useState(0);

    useEffect(() => {

        // Requisições das artes
        async function carregarArtes() {

            const requisicaoIlustracao = await api.get('/ilustracao');
            const requisicaoArteDeCapa = await api.get('/arteDeCapa');
            const requisicaoColagem = await api.get('/colagem');
            
            setIlustracoes(requisicaoIlustracao.data);
            setArtesDeCapa(requisicaoArteDeCapa.data);
            setColagens(requisicaoColagem.data);

        }

        carregarArtes();
    }, []);

    function salvar() {
        api.post('/controlesDaArte', ilustracoes)
        api.post('/controlesDaArte', artesDeCapa)
        api.post('/controlesDaArte', colagens)
    }    

    return (
        <>
            <Cabecalho />

                {/* Seção de Ilustrações */}
                <Titulo id="ilustrações">ILLUSTRATION</Titulo>                
                <DivisorDeSecao>

                    {ilustracoes.map(arte => (
                    <DivisorDeArte key={arte.ID}>          

                        {/** Pagina individual da arte */}             
                        <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}}>
                            <Ilustracao 
                                src={arte.url || arte.urlPreview} 
                                alt={arte.titulo}
                                arte={ilustracoes} 
                                id_daArte={arte.ID}
                            />
                        </Link>
                        
                        <IlustracaoDescricao arte={ilustracoes} id_daArte={arte.ID}>
                            {arte.titulo}<br/>{arte.descricao}
                        </IlustracaoDescricao>


                        <Controladores 
                            id_daArte={arte.ID} 
                            tipo={'Ilustracao'} 
                            arte={ilustracoes}
                            setArte={setIlustracoes}
                            auxiliar={auxiliar}
                            setAuxiliar={setAuxiliar}
                        />
                    </DivisorDeArte>                             
                    ))}

                </DivisorDeSecao>

                {/* Seção de CoverArts */}
                <Titulo id="artesDeCapa">ALBUM COVER</Titulo>   
                <DivisorDeSecao>

                    {artesDeCapa.map(arte => (
                    <DivisorDeArte key={arte.ID}>          

                            <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}} >
                                <ArteDeCapa 
                                    src={arte.url || arte.urlPreview} 
                                    alt={arte.titulo}
                                    arte={artesDeCapa} 
                                    id_daArte={arte.ID}
                                />
                            </Link>

                            <CapaDescricao arte={artesDeCapa} id_daArte={arte.ID}>
                                {arte.titulo}<br/>{arte.descricao}
                            </CapaDescricao>


                        <Controladores 
                            id_daArte={arte.ID} 
                            tipo={'ArteDeCapa'}
                            arte={artesDeCapa}
                            setArte={setArtesDeCapa}
                            auxiliar={auxiliar}
                            setAuxiliar={setAuxiliar}                                                       
                        />
                    </DivisorDeArte>                             
                    ))}

                </DivisorDeSecao>                
    
                {/* Seção de Colagens */}
                <Titulo id="colagens">COLLAGE</Titulo>  
                <DivisorDeSecao>

                    {colagens.map(arte => (
                    <DivisorDeArte key={arte.ID}>

                            <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}} >
                                <Colagem 
                                    src={arte.url || arte.urlPreview} 
                                    alt={arte.titulo}
                                    arte={colagens} 
                                    id_daArte={arte.ID}
                                />
                            </Link>

                            <ColagemDescricao arte={colagens} id_daArte={arte.ID}>
                                {arte.titulo}<br/>{arte.descricao}
                            </ColagemDescricao>

                        <Controladores 
                            id_daArte={arte.ID} 
                            tipo={'Colagem'}
                            arte={colagens}
                            setArte={setColagens}
                            auxiliar={auxiliar}
                            setAuxiliar={setAuxiliar}                                                       
                        />

                    </DivisorDeArte>                             
                    ))}

                </DivisorDeSecao>

                <Painel>
                    <Link to="/postar_arte">upload</Link>
                    <Link to="/">Index</Link>
                    <button onClick={salvar}>salvar</button>
                </Painel>             

            <Rodape />
        </>
    );
};

export default PainelDeControle;