import React from 'react';
import Rotas from './rotas';
import { Router } from 'react-router-dom';
import history from './history';
import { ProvedorDeAutorizacao } from './Contexto/ContextoDeAutorizacao';
import EstiloGlobal, { Mira } from './styles/estiloGlobal';

function App() {

	function quandoMover(e) {
		const cursor = document.querySelector(".cursor")
		cursor.style.left = `${e.pageX}px`
		cursor.style.top = `${e.pageY}px`
	}

	window.addEventListener("mousemove", quandoMover)

	return (<>
		<ProvedorDeAutorizacao>
			<Router history={history}>
				<Mira className="cursor"/>	
				<Rotas />
			</Router>
		</ProvedorDeAutorizacao>
		<EstiloGlobal />
    </>);	
}

export default App;