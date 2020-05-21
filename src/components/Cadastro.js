import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import api from './api';

import './styles.css';

import logoImg from './guinchao.png';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar</h1>
                    <p>Cadastre-se agora, simples assim! </p>
                    <Link className="back-link" to="/login">
                        Fazer login  
                        <FiArrowRight size={16} color="#007bff" />
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                <div className='col-sm-7 '>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                    <input className='form-control'
                     placeholder="     Nome"
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     />
                     <input className='form-control'
                      placeholder="   Telefone"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                      />
                    <input className='form-control'
                     placeholder="     Senha"
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                     />
                       </div>
                    </div>
                </div>
                <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )    
}
