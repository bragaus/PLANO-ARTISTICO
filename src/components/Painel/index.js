import React, { useState, useContext } from 'react';
import history from '../../history';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import { Section, Lista, Absolute } from './styles';

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
        
        {descartarMudanca && (
            <Absolute>
                asdasdasd
            </Absolute>
        )}

    </>);

}

export default Painel;