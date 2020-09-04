import React, { useState, useContext } from 'react';
import history from '../../history';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import { Section, Lista, Div, Container } from './styles';

const Painel = ({ 
    visualizarComoUsuario, 
    setVisualizarComoUsuario, 
    salvar, 
    resposta, 
    arteSalva 
}) => {

    const { lidarComLogout } = useContext(Contexto);
    const [painel, setPainel] = useState(false);
    const [descartarMudanca, setDescartarMudanca] = useState(false);
    const [origem, setOrigem] = useState('');

    return(<>

        <Section>
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
                    <li onClick={salvar}>{resposta}</li>
                    <li onClick={() => {
                        if (arteSalva){
                            history.push('/upload');
                        } else {
                            setDescartarMudanca(true);
                            setOrigem('upload');
                        }
                    }}>UPLOAD</li>
                    <li onClick={() => {
                        if (arteSalva){
                            lidarComLogout();
                        } else {
                            setDescartarMudanca(true);
                            setOrigem('exit');
                        }
                    } }>EXIT</li>                    
                </>)}

                <li onClick={() => setPainel(!painel)}>DASHBOARD</li>
            </Lista>
        </Section>
        
        {descartarMudanca && (
        <Container>
            <Div>
                <h1>DESCARTAR ALTERAÇÕES</h1>
                <p>Tem certeza de que deseja descartar as alterações?</p>
                <div className="buttons">
                    <button onClick={() => setDescartarMudanca(false)}>CANCELAR</button> 
                    <button onClick={() => {
                        if(origem === 'upload') {
                            history.push('/upload');
                        } else {
                            lidarComLogout();
                        }
                    }}>DESCARTAR</button> 
                </div>
            </Div>
        </Container>
        )}

    </>);

}

export default Painel;