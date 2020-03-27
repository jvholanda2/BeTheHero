import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();//serve para fazer a navegação atraves de uma função JS, quando nao se pode colocar o link do react router dom

    //sempre que utilizar o await tem que se por o async antes da função
    async function handleRegister(e){
        e.preventDefault();//para evitar que a pagina recarregue com o submit vazio
       
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try{
            const response = await api.post('ongs', data);
            
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');//enviando para rota raiz
        } catch (err){
            console.log(err);
            alert('Erro no cadastro, tente novamente');
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link  className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <input
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                     
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            />
                        <input 
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                            style={{width: 80}}
                            />
                    </div>
                    
                    <button className="button" type="submit"> Cadastrar </button>

                </form>
            </div>
        </div>



    ); 
}