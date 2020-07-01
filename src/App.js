import React from 'react';
import Rotas from './rotas';
import { Router } from 'react-router-dom';
import history from './history';
import { ProvedorDeAutorizacao } from './Contexto/ContextoDeAutorizacao';

function App() {

	return (
		<ProvedorDeAutorizacao>
			<Router history={history}>
				<Rotas />
			</Router>
		</ProvedorDeAutorizacao>
    );	
}

export default App;