import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Contexto } from './Contexto/ContextoDeAutorizacao';

import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Login from './Pages/Login';
import Artwork from './Pages/Artwork';

import Loading from './components/Loading';
import Sobre from './components/Sobre/Sobre';

import googleAnalytics from './services/googleAnalytics';


function Rota({ rotaPrivada, ...rest }) {
    const { carregando, autenticado } = useContext(Contexto);

    if (carregando) {
        return <Loading showGif={false} />
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
            <Rota exact path="/" component={googleAnalytics(Home)}/>
            <Rota exact path="/about" component={googleAnalytics(Sobre)}/>
            <Rota exact path="/artworks/:chave" component={Artwork}/>            

            <Rota path="/login" component={Login}/>
            <Rota rotaPrivada exact path="/upload" component={Upload}/>
            
            <Redirect from='*' to='/' />         
        </Switch>
    );
}