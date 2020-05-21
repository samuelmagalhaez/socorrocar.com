import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

const Precos = props => {
    return( 
        <div id='pricing' className='container-fluid'>
            <div className='text-center'>
                <h2>Nossos Planos</h2>
                <h4>Escolha a opção perfeita para você!</h4>
            </div>
            <div className='row '>
                <div className='col-sm-44 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Pequeno/Familiar</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>7</strong> Guinchadas</p>
                            <p><strong>2</strong> Outra Coisa</p>
                            <p><strong>Inclui</strong> Feriados</p>
                        <div className='panel-footer'>
                            <h3>R$66,00</h3>
                            <h4>por mês</h4>
                            <Link to="/comprei">
                            <button className='buttona'>Comprar</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Grande/SUV e Utilitário</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>8</strong> Guinchadas</p>
                            <p><strong>10</strong> Outra Coisa</p>
                            <p><strong>Inclui</strong> Feriados</p>
                        <div className='panel-footer'>
                            <h3>R$75,00</h3>
                            <h4>por mês</h4>
                            <Link to="/comprei">
                            <button className='buttona'>Comprar</button>
                            </Link>                        </div>
                        </div>

                    </div>

                </div><div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Carro de Frota/Empresa</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>9</strong> Guinchadas</p>
                            <p><strong>10</strong> Outra Coisa</p>
                            <p><strong>Inclui</strong> Feriados</p>
                        <div className='panel-footer'>
                            <h3>R$92,00</h3>
                            <h4>por mês</h4>
                            <Link to="/comprei">
                            <button className='buttona'>Comprar</button>
                            </Link>                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Precos