import React, { useState, useEffect, useContext } from 'react';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import Header from '../../components/Header';
import Email from '../../components/Email';
import Artwork from '../../components/Artwork';
import Painel from '../../components/Painel';
import Loading from '../../components/Loading';

import api from '../../services/api';

import { 
    Main,
    Portateis,    
    DivEmail,
    Rodape, 
    ArameComputadorDeMesa, 
    ArameDispositivoMovel,
} from './styles';

const Home = () => {

    const { autenticado } = useContext(Contexto);

    // Esses estados armazenam as artes separadas pelos tipos
    const [ilustracoes, setIlustracoes] = useState([]);
    const [artesDeCapa, setArtesDeCapa] = useState([]);
    const [colagens, setColagens] = useState([]);

    const [telaDeEmail, setTelaDeEmail] = useState(false);

    // Controla a visibilidade do menu, no componente Header,
    // foi passado por aqui porque o "NEW MESSAGE..." precisa se esconder
    // quando o menu estiver visivel
    const [menuDispositivoMovel, setMenuDispositivoMovel] = useState(false);

    const [visualizarComoUsuario, setVisualizarComoUsuario] = useState(true);

    const [artesModificadas, setArtesModificadas] = useState([]);

    const [resposta, setResposta] = useState('SAVE');

    const [arteSalva, setArteSalva] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Requisições das artes
        (async function carregarArtes() {

            const { data } = await api.get('/artworks');

            setIlustracoes(data.filter(file => file.tipo === "ILLUSTRATION"));
            setArtesDeCapa(data.filter(file => file.tipo === "COVER ART"));
            setColagens(data.filter(file => file.tipo === "COLLAGE"));
            setLoading(false);

        })();

        document.body.style.overflowY = 'hidden';

    }, []);

    useEffect(() => {
        
        if(artesModificadas.length > 0) setArteSalva(false)

    }, [artesModificadas])
    
    function salvar() {

        if (artesModificadas.length > 0) {
            setResposta('Saving...');

            const dados = artesModificadas.map(e => {
                return {
                    ID: e.ID,
                    baixo: e.baixo,
                    cima: e.cima,
                    descricao: e.descricao,
                    direita: e.direita,
                    esquerda: e.esquerda,
                    largura: e.largura,
                    titulo: e.titulo,
                    zIndex: e.zIndex,
                }
            });

            api.post('/controlesDaArte', dados)
            .then((resposta) => {

                if (resposta.status === 200) {
                    setArteSalva(true);
                    setResposta('SAVED SUCCESSFULLY!');
                    setTimeout(() => {
                        setResposta('SAVE')
                    }, 3000);
                } else {
                    setResposta('UNEXPECTED ERROR');
                }

            })
            .catch(() => {
                setResposta('UNEXPECTED ERROR');
            });

        } else {
            setResposta('NO MODIFIED DATA')
            setTimeout(() => {
                setResposta('SAVE')
            }, 2000);
        }

    }

    return (<>
    
        {loading && (<Loading showGif={true} color="#000" />)}
        {/* <Loading showGif={true} color="#000" /> */}

        {(!autenticado && (
            <Header 
                setMenuDispositivoMovel={setMenuDispositivoMovel}
                menuDispositivoMovel={menuDispositivoMovel}
            />)
        ) || (autenticado && visualizarComoUsuario && (
            <Header 
                setMenuDispositivoMovel={setMenuDispositivoMovel}
                menuDispositivoMovel={menuDispositivoMovel}
            />
        ))}

        <Main autenticado={autenticado} visualizarComoUsuario={visualizarComoUsuario}> 

            <Artwork
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={ilustracoes}
                setArtes={setIlustracoes}
                tipo="ILLUSTRATION"
                artesModificadas={artesModificadas}
                setArtesModificadas={setArtesModificadas}
            />

            <Artwork 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={artesDeCapa}
                setArtes={setArtesDeCapa}
                tipo="ALBUM COVER"
                artesModificadas={artesModificadas}
                setArtesModificadas={setArtesModificadas}             
            />

            <Artwork 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={colagens}
                setArtes={setColagens}
                tipo="COLLAGE"
                artesModificadas={artesModificadas}
                setArtesModificadas={setArtesModificadas}               
            />
 
        </Main>

        {/* seção de email para dispositivos portateis */}
        {!telaDeEmail && !menuDispositivoMovel && (
        <Portateis>
            <DivEmail onClick={() => {setTelaDeEmail(true)}}>
                <span>NEW EMAIL...</span>
            </DivEmail>
        </Portateis> )}

        {/* tela de email para desktop. */}
        {telaDeEmail && <Email setTelaDeEmail={setTelaDeEmail}/>}

        {autenticado && (
            <Painel 
                visualizarComoUsuario={visualizarComoUsuario}
                setVisualizarComoUsuario={setVisualizarComoUsuario}
                salvar={salvar}
                resposta={resposta}
                arteSalva={arteSalva}
            />
        )}

        <Rodape>
            <ArameDispositivoMovel />
            <ArameComputadorDeMesa />
            <h3>PLANO ARTÍSTICO. A WORLDWIDE OPERATION.&trade; 2020</h3>
        </Rodape>

    </>);
};

export default Home;