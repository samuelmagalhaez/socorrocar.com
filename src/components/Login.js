import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';

import api from './api';

import './styles.css';

import logoImg from './guinchao.png';

const Login = props => {

    return (

            <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Faça o Login</h1>
                    <p>Simples assim! </p>
                </section>

                <form>

                    <div className='col-sm-7 '>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='name' name='name' placeholder='   telefone' type='text' required />
                        </div>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='email' name='email' placeholder='     senha' type='email' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 form-group'>
                            <button className='button' type='submit'>Entrar</button>
                            <Link className="back-link" to="/cadastro">
                        <FiArrowLeft size={16} color="#007bff" />
                        Não tenho cadastro
                    </Link>
                        </div>


                    </div>
                </div>
                </form>
            </div>
            </div>

       )}

export default Login