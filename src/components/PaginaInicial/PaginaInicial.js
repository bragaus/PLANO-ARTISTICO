import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import history from '../../history';

import { Contexto } from '../../Contexto/ContextoDeAutorizacao';
import Controladores, { zIndex } from '../Controladores/Controladores';

import Header from '../Header';
import Footer from '../Footer';
import TelaEmail from '../TelaEmail';
import Figura from './Figura';

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
    const [visualizarComoUsuario, setVisualizarComoUsuario] = useState(true);


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
        api.post('/controlesDaArte', artesDeCapa).then((e) => {
            console.log(e)
        })
        api.post('/controlesDaArte', colagens).then((e) => {
            console.log(e)
        })
    }    
    

    return (<>
    
        {!autenticado && (
            <Header 
                setMenuDispositivoMovel={setMenuDispositivoMovel}
                menuDispositivoMovel={menuDispositivoMovel}
            />
        ) || autenticado && visualizarComoUsuario && (
            <Header 
                setMenuDispositivoMovel={setMenuDispositivoMovel}
                menuDispositivoMovel={menuDispositivoMovel}
            />
        )}

        <Main autenticado={autenticado} visualizarComoUsuario={visualizarComoUsuario}> 

            <Figura 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={ilustracoes}
                setArtes={setIlustracoes}
                auxiliar={auxiliar}
                setAuxiliar={setAuxiliar}
                tipo="ILLUSTRATION"
            />

            <Figura 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={artesDeCapa}
                setArtes={setArtesDeCapa}
                auxiliar={auxiliar}
                setAuxiliar={setAuxiliar}
                tipo="ALBUM COVER"
            />            

            {/* <section>
                <header>
                    <Titulo 
                        id="ilustracoes" 
                        autenticado={autenticado} 
                        visualizarComoUsuario={visualizarComoUsuario}
                    >
                        ILLUSTRATION
                    </Titulo>
                </header>

                {ilustracoes.map(arte => (
                    <Figure
                        arte={ilustracoes}
                        id_DaArte={arte.ID}                
                    >

                        <figcaption>
                            <h5>{arte.titulo} - {arte.descricao}</h5>
                        </figcaption>

                        {autenticado && !visualizarComoUsuario && (
                            <Controladores
                                id_daArte={arte.ID} 
                                tipo={'Ilustracao'} 
                                arte={ilustracoes}
                                setArte={setIlustracoes}
                                auxiliar={auxiliar}
                                setAuxiliar={setAuxiliar}
                            />  
                        )}                          

                        {autenticado && !visualizarComoUsuario ? (
                            <Ilustracao
                                onClick={() => zIndex(
                                    arte.ID, 
                                    'Ilustracao',
                                    ilustracoes,
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

            <section>
                <header>
                    <Titulo 
                        id="artesDeCapa" 
                        autenticado={autenticado} 
                        visualizarComoUsuario={visualizarComoUsuario}
                    >
                        ALBUM COVER
                    </Titulo>
                </header>

                {artesDeCapa.map(arte => (
                    <Figure
                        arte={artesDeCapa}
                        id_DaArte={arte.ID}                
                    >

                        <figcaption>
                            <h5>{arte.titulo} - {arte.descricao}</h5>
                        </figcaption>

                        {autenticado && !visualizarComoUsuario && (
                            <Controladores
                                id_daArte={arte.ID} 
                                tipo={'ArteDeCapa'} 
                                arte={artesDeCapa}
                                setArte={setIlustracoes}
                                auxiliar={auxiliar}
                                setAuxiliar={setAuxiliar}
                            />  
                        )}                          

                        {autenticado && !visualizarComoUsuario ? (
                            <Ilustracao
                                onClick={() => zIndex(
                                    arte.ID, 
                                    'ArteDeCapa',
                                    artesDeCapa,
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
            </section>             */}
 
        </Main>

        {/* seção de email para dispositivos portateis */}
        {!telaDeEmail && !menuDispositivoMovel && (
        <Portateis>
            <DivEmail onClick={() => {setTelaDeEmail(true)}}>
                <span>NEW EMAIL...</span>
            </DivEmail>
        </Portateis> )}

        {/* tela de email para desktop. */}
        {telaDeEmail && <TelaEmail setTelaDeEmail={setTelaDeEmail}/>}

        {/* painel de controle para usuário autenticado. */}
        {autenticado && (
            <Painel>
                <Lista>

                    {painel && (<>
                        <li 
                            onClick={() => {
                                setVisualizarComoUsuario(!visualizarComoUsuario)
                                setPainel(!painel)
                            }}
                        >
                            {visualizarComoUsuario ? 'ADM VIEW' : 'USER VIEW' }
                        </li>
                        <li onClick={salvar}>SAVE</li>
                        <li onClick={() => history.push('/postar_arte')}>UPLOAD</li>
                    </>)}

                    <li onClick={() => setPainel(!painel)}>DASHBOARD</li>

                </Lista>
            </Painel>
        )}

        <Footer />

    </>);       
};

export default PaginaInicial;