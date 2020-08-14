import React, { useState, useEffect, useContext } from 'react';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import Header from '../../components/Header';
import Email from '../../components/Email';
import Figure from '../../components/Artwork';
import Painel from '../../components/Painel';

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

    const [auxiliar, setAuxiliar] = useState(0);

    // Controla a visibilidade do menu, no componente Header,
    // foi passado por aqui porque o "NEW MESSAGE..." precisa se esconder
    // quando o menu estiver visivel
    const [menuDispositivoMovel, setMenuDispositivoMovel] = useState(false);

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

            <Figure 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={ilustracoes}
                setArtes={setIlustracoes}
                auxiliar={auxiliar}
                setAuxiliar={setAuxiliar}
                tipo="ILLUSTRATION"
            />

            <Figure 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={artesDeCapa}
                setArtes={setArtesDeCapa}
                auxiliar={auxiliar}
                setAuxiliar={setAuxiliar}
                tipo="ALBUM COVER"
            />

            <Figure 
                autenticado={autenticado}
                visualizarComoUsuario={visualizarComoUsuario}
                artes={colagens}
                setArtes={setColagens}
                auxiliar={auxiliar}
                setAuxiliar={setAuxiliar}
                tipo="COLLAGE"
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