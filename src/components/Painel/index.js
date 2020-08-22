import React, { useState } from 'react';
import history from '../../history';

import { Section, Lista } from './styles';

const Painel = ({ visualizarComoUsuario, setVisualizarComoUsuario, salvar }) => {

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
                    <li onClick={salvar}>SAVE</li>
                    <li onClick={() => history.push('/upload')}>UPLOAD</li>
                </>)}

                <li onClick={() => setPainel(!painel)}>DASHBOARD</li>

            </Lista>
        </Section>       

    );

}

export default Painel;