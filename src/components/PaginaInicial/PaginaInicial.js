import React, { useState, useEffect, useContext } from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/Rodape';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

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
    Container
} from './estilo';

const PaginaInicial = () => {

    const { autenticado } = useContext(Contexto);

    // Esses estados armazenam as artes separadas pelos tipos
    const [ilustracoes, setIlustracoes] = useState([]);
    const [artesDeCapa, setArtesDeCapa] = useState([]);
    const [colagens, setColagens] = useState([]);

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

    return (
    <>
        <Cabecalho />

        <Container>

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

                </DivisorDeArte>                             
                ))}

            </DivisorDeSecao>

            {autenticado && <Painel>
                <Link 
                    to="PainelDeControle" 
                    style={{fontSize: '3vh'}}
                >
                    Dashboard
                </Link>
            </Painel>}
            
        </Container>

        <Rodape />
    </>
    );
};

export default PaginaInicial;