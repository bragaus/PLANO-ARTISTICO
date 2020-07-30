import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import history from '../../history';

import { Contexto } from '../../Contexto/ContextoDeAutorizacao';
import Controladores from '../Controladores/Controladores';

import Header from '../Header';
import Footer from '../Footer';
import TelaEmail from '../TelaEmail';

import { 
    // DivisorDeSecao, 
    // DivisorDeArte,
    // Titulo,
    // IlustracaoDescricao, 
    // Ilustracao,
    // ArteDeCapa,
    // CapaDescricao,
    // ColagemDescricao,
    // Colagem,
    // Painel,

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

const PaginaInicial = () => {

    const { autenticado } = useContext(Contexto);

    // Esses estados armazenam as artes separadas pelos tipos
    const [ilustracoes, setIlustracoes] = useState([]);
    const [artesDeCapa, setArtesDeCapa] = useState([]);
    const [colagens, setColagens] = useState([]);

    const [telaDeEmail, setTelaDeEmail] = useState(false);

    const [auxiliar, setAuxiliar] = useState(0);

    // Controla a visibilidade do menu, no componente Header,
    // foi passado por aqui porque o "NEW MESSAGE..." precisa se esconder
    // quando o menu estiver visivel
    const [menuDispositivoMovel, setMenuDispositivoMovel] = useState(false);

    const [painel, setPainel] = useState(false);

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
        api.post('/controlesDaArte', ilustracoes).then((e) => {
            console.log(e)
        })
        // api.post('/controlesDaArte', artesDeCapa).then((e) => {
        //     console.log(e)
        // })
        // api.post('/controlesDaArte', colagens).then((e) => {
        //     console.log(e)
        // })
    }    
    

    return (<>
    
        {!autenticado && (
            <Header 
                setMenuDispositivoMovel={setMenuDispositivoMovel}
                menuDispositivoMovel={menuDispositivoMovel}
            />
        )}

        <Main autenticado={autenticado}>

            <section>
                <header>
                    <Titulo id="ilustracoes" autenticado={autenticado}>ILLUSTRATION</Titulo>
                </header>

                <Flex>

                    {ilustracoes.map(ilustracao => (
                        <Figure
                            ilustracoes={ilustracoes}
                            id_DaArte={ilustracao.ID}                        
                        >

                            <figcaption>
                                <h5>{ilustracao.titulo} - {ilustracao.descricao}</h5>
                            </figcaption>

                            {autenticado && (
                                <Controladores
                                    id_daArte={ilustracao.ID} 
                                    tipo={'Ilustracao'} 
                                    arte={ilustracoes}
                                    setArte={setIlustracoes}
                                    auxiliar={auxiliar}
                                    setAuxiliar={setAuxiliar}
                                />  
                            )}                          

                            <Link to={{pathname: `/visualizarArte/${ilustracao.ID}`, id: ilustracao.ID}}>
                                <Ilustracao 
                                    src={ilustracao.url || ilustracao.urlPreview }
                                    alt={ilustracao.titulo}
                                />
                            </Link>                            

                        </Figure>
                    ))}

                </Flex>
            </section>

            {/* <section>
                <header>
                    <Titulo id="artesDeCapa">ALBUM COVER</Titulo>
                </header>

                <Flex> 

                    {artesDeCapa.map(arteDeCapa => (
                        <figure>

                            <figcaption>
                                <h5>{arteDeCapa.titulo} - {arteDeCapa.descricao}</h5>
                            </figcaption>     

                            <Link to={{pathname: `/visualizarArte/${arteDeCapa.ID}`, id: arteDeCapa.ID}}>
                                <ArteDeCapa 
                                    src={arteDeCapa.url || arteDeCapa.urlPreview }
                                    alt={arteDeCapa.titulo}
                                />
                            </Link>

                        </figure>
                    ))}

                </Flex>
            </section>

            <section>
                <header>
                    <Titulo id="colagens">COLLAGES</Titulo>
                </header>

                <Flex>

                    {colagens.map(colagem => (
                        <figure>

                            <figcaption>
                                <h5>{colagem.titulo} - {colagem.descricao}</h5>
                            </figcaption>  

                            <Link to={{pathname: `/visualizarArte/${colagem.ID}`, id: colagem.ID}}>
                                <Colagem 
                                    src={colagem.url || colagem.urlPreview }
                                    alt={colagem.titulo}
                                />
                            </Link>
                            
                        </figure>
                    ))}

                </Flex>
            </section>             */}
 
        </Main>

        {/* Section para dispositivos portateis */}
        {!telaDeEmail && !menuDispositivoMovel && (
        <Portateis>
            <DivEmail onClick={() => {setTelaDeEmail(true)}}>
                <span>NEW EMAIL...</span>
            </DivEmail>
        </Portateis> )}

        {telaDeEmail && <TelaEmail setTelaDeEmail={setTelaDeEmail}/>}

        {autenticado && (
            <Painel>
                <Lista>

                    {painel && (<>
                        <li onClick={() => history.push('/')}>INDEX</li>
                        <li onClick={salvar}>SAVE</li>
                        <li onClick={() => history.push('/postar_arte')}>UPLOAD</li>
                    </>)}

                    <li onClick={() => setPainel(!painel)}>DASHBOARD</li>

                </Lista>
            </Painel>
        )}

        <Footer />

    </>);        

{/*
            
            <Titulo id="ilustrações">ILLUSTRATION</Titulo>                
            <DivisorDeSecao>

                {ilustracoes.map(arte => (
                <DivisorDeArte key={arte.ID}>          

                        
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
*/}        
};

export default PaginaInicial;