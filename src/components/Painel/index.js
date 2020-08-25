import React, { useState, useContext } from 'react';
import history from '../../history';
import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import { Section, Lista } from './styles';

const Painel = ({ visualizarComoUsuario, setVisualizarComoUsuario, salvar, resposta }) => {

    const { lidarComLogout } = useContext(Contexto);
    const [painel, setPainel] = useState(false);

    return(

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
                    <li onClick={() => history.push('/upload')}>UPLOAD</li>
                    <li onClick={lidarComLogout}>EXIT</li>                    
                </>)}

                <li onClick={() => setPainel(!painel)}>DASHBOARD</li>
            </Lista>
        </Section>       

    );

}

export default Painel;