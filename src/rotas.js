import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PainelDeControle from './components/PaginaDeControle/PainelDeControle';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import PaginaDeUpload from './components/PaginaDeUpoad/PaginaDeUpload';
import VisualizarArte from './components/VisualizarArte/VisualizarArte';
import Login from './components/PaginaDeLogin/Login';
import Sobre from './components/Sobre/Sobre';
import Temporario from './components/PaginaInicial/temporario';
import { Contexto } from './Contexto/ContextoDeAutorizacao';

function Rota({ rotaPrivada, ...rest }) {
    const { carregando, autenticado } = useContext(Contexto);

    if (carregando) {
        return <h1>Loading....</h1>
    }

    // Se a rota for privada e o usuário não estiver autorizado
    if (rotaPrivada && !autenticado) {
        return <Redirect to="/login" />
    };

    return <Route {...rest} />;
}

export default function Rotas() {
    return (
        <Switch>
            <Rota path="/login" component={Login}/>
            <Rota exact path="/" component={PaginaInicial}/>
            <Rota exact path="/sobre" component={Sobre}/>
            <Rota exact path="/visualizarArte/:id" component={VisualizarArte}/>
            <Rota exact path="/workinprogress" component={Temporario}/>
            <Rota rotaPrivada exact path="/painelDeControle" component={PainelDeControle}/>
            <Rota rotaPrivada exact path="/postar_arte" component={PaginaDeUpload}/>
            <Redirect from='*' to='/' />         
        </Switch>
    );
}