import React from 'react';
import { Link } from 'react-router-dom';
import Img from './logosa.png';

const Cabecalho = props => {

    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary">
    <div class="container">

      <a class="navbar-brand h1 mb-0" href="#"><img src={Img}/></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
            <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSite">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link"><Link to ='/'>Inicio</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link"><Link to ='/servicos'>Serviços</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link"><Link to ='/precos'>Preços</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link"><Link to ='/contatos'>Contato</Link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link"><Link to ='/login'>Login</Link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    )
}

export default Cabecalho