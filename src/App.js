import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Comprei from './components/Comprei';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Inicio from './components/Inicio';
import Servicos from './components/Servicos';
import Precos from './components/Precos';
import Contatos from './components/Contatos';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
            <Cabecalho />

            <Route path='/' exact component={Inicio} />
            <Route path='/login' component={Login}/>
            <Route path='/cadastro' component={Cadastro}/>
            <Route path='/comprei' component={Comprei}/>
            <Route path='/servicos' component={Servicos}/>
            <Route path='/precos' component={Precos}/>
            <Route path='/contatos' component={Contatos}/>

            <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
