import React, { useState, useContext } from 'react';
import history from '../../history';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import { Section, Lista, Div, Flex } from './styles';

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
                        }

                    }}>UPLOAD</li>
                    <li onClick={lidarComLogout}>EXIT</li>                    
                </>)}

                <li onClick={() => setPainel(!painel)}>DASHBOARD</li>
            </Lista>
        </Section>
        
        {/* {descartarMudanca && (
            <Absolute>
                asdasdasd
            </Absolute>
        )} */}

        
            <Div>
                <h1>DESCARTAR ALTERAÇÕES</h1>
                <p>Tem certeza de que deseja descartar as alterações?</p>
                <Flex>
                    <button>CANCELAR</button> 
                    <button>DESCARTAR</button> 
                </Flex>
            </Div>
    

    </>);

}

export default Painel;