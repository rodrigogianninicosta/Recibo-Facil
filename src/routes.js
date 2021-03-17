import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Negocios from './pages/Negocios';
import NovoNegocio from './pages/NovoNegocio';
import Recibos from './pages/Recibos';
import NovoRecibo from './pages/NovoRecibo';
import NovoRecibo2 from './pages/NovoRecibo2';
import MeusRecibos from './pages/MeusRecibos';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/cadastrar" exact component={Cadastro}/>
            <Route path="/entrar" exact component={Login}/>
            <Route path="/negocios" exact component={Negocios}/>
            <Route path="/novoNegocio" exact component={NovoNegocio}/>
            <Route path="/recibos" exact component={Recibos}/>
            <Route path="/novoRecibo" exact component={NovoRecibo}/>
            <Route path="/novoRecibo2" exact component={NovoRecibo2}/>
            <Route path="/meusRecibos" exact component={MeusRecibos}/>
        </BrowserRouter>
    )
}