import React from 'react'

const Contatos = props => {
    return(
        <div id='contact' className='container-fluid'>
            <h2 className='text-center'>Fale com a gente</h2>
            <div className='row'>
                <div className='col-sm-5'>
                    <p>Deixe sua mensagem e responderemos o mais breve possível</p>
                    <p><span className='glyphicon glyphicon-map-marker'></span> Rua 558 nº70, Sala 103, Aterrado, Volta Redonda, RJ, CEP: 27215-120</p>
                    <p><span className='glyphicon glyphicon-phone'></span> 24 998311818</p>
                    <p><span className='glyphicon glyphicon-envelope'></span> socorrocarmotoristasassociados@gmail.com</p>
                </div>
                <div className='col-sm-7 '>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='name' name='name' placeholder='                                    Nome' type='text' required />
                        </div>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='email' name='email' placeholder='                                     Email' type='email' required />
                        </div>
                    </div>
                    <textarea className='form-control'
                    id='comments' name='comments' placeholder='                                                                                  Mensagem' rows='5'></textarea><br />
                    <div className='row'>
                        <div className='col-sm-12 form-group'>
                            <button className='button' type='submit'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

<div id='portfolio' className='container-fluid text-center'>
                <h2>Perguntas Frequentes</h2></div>


    <div class="row mb-5">
      <div class="col-md-4 col-sm-6 mb-3">
        <nav id="navbarVertical" class="navbar navbar-light bg-light">
          <nav class="nav nav-pills flex-column">
            <a class="nav-link btn-primary" href="#item1">Quanto custa cada guinchada?</a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link btn-primary" href="#item1-1">Quais são os planos?</a>
              <a class="nav-link btn-primary" href="#item1-2">Pergunta aleatória</a>
              <a class="nav-link btn-primary" href="#item2">Pergunta aleatória</a>
              <a class="nav-link btn-primary" href="#item3">Pergunta aleatória</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link btn-primary" href="#item3-1">Pergunta aleatória</a>
                <a class="nav-link btn-primary" href="#item3-2">Pergunta aleatória</a>
              </nav>
            </nav>
            </nav>
            </nav>
            </div>
      <div class="col-md-8 col-sm-6">
        <div data-spy="scroll" data-target="#navbarVertical" data-offset="0" class="scrollspySite">
          <h4 id="item1">Quanto custa cada guinchada?
          <h5>
            <p>
              <a class="text-primary">por João Victor
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>

           <h4 id="item1-1">Quais são os planos?
            <h5>
             <p>
              <a class="text-primary">por Diamante
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>

              <h4 id="item1-2">Pergunta aleatória
          <h5>
            <p>
              <a class="text-primary">por CR7
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>

              <h4 id="item2">Pergunta aleatória
          <h5>
            <p>
              <a class="text-primary">por CR7
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>

              <h4 id="item3">Pergunta aleatória
          <h5>
            <p>
              <a class="text-primary">por CR7
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>

              <h4 id="item3-1">Pergunta aleatória
          <h5>
            <p>
              <a class="text-primary">por CR7
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>

              <h4 id="item3-2">Pergunta aleatória
          <h5>
            <p>
              <a class="text-primary">por CR7
              </a>
              </p>
              </h5>
              </h4>
              <p>
              Resposta aleatória só p dar ênfase.
              </p><h4></h4>
        </div>
      </div>
    </div>
    </div>
    )
}
export default Contatos