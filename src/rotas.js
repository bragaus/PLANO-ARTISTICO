import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Contexto } from './Contexto/ContextoDeAutorizacao';


import PainelDeControle from './components/PaginaDeControle/PainelDeControle';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import VisualizarArte from './components/VisualizarArte/VisualizarArte';
import Login from './components/PaginaDeLogin/Login';
import Sobre from './components/Sobre/Sobre';
import Temporario from './components/PaginaInicial/temporario';


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
            <Rota exact path="/" component={Home}/>
            <Rota exact path="/about" component={Sobre}/>
            <Rota exact path="/visualizarArte/:id" component={VisualizarArte}/>            

            <Rota path="/login" component={Login}/>
            <Rota rotaPrivada exact path="/upload" component={Upload}/>
            
            <Redirect from='*' to='/' />         
        </Switch>
    );
}