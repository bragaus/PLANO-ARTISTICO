import React from 'react';
import Rotas from './rotas';
import { Router } from 'react-router-dom';
import history from './history';
import { ProvedorDeAutorizacao } from './Contexto/ContextoDeAutorizacao';
import EstiloGlobal from './styles/estiloGlobal';

function App() {

	return (<>
		<ProvedorDeAutorizacao>
			<Router history={history}>
				<Rotas />
			</Router>
		</ProvedorDeAutorizacao>
		<EstiloGlobal />
    </>);	
}

export default App;