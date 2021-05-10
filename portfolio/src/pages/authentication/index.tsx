import  React, { useState, FormEvent } from "react"
import {useHistory} from 'react-router-dom'
import logo from '../../assets/logo.svg';
import api from "../../services/api";
import Home from "../home";

import './style.css';



// PAGINA DE AUTTENTICAÇÃO DO SERVIÇO

// Componente sempre com letra maiúscula--
function Authentication() {
  // O userState guarda váriaveis dinamicamente
  const [nome, setNome] = useState('');
  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const enviar = async(e: FormEvent) => {
    e.preventDefault();
    
    // pegar a hora atual
    const time = new Date();
    const data =  {
      nome, time
    }; 
    console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    api.post('/rota da minha api', data)
    // depois que rodar o post, roda o then
    // CASO SUCESSO
    .then(() => { 
      alert("Cadastrado com sucesso");
      
      // como eu nao sei se ele acessou a pagina home, estou forçando
      // ele ir pra home
      history.push('/home')
    })
    // CASO ERRO
    .catch(() => {
      alert("erro na criação");
    })

  };
  return (
    // importante, sempre retornar um componente
    // exemplo: ou uma div inteira, ou um h1
    // tambem posso só abrir ou fechar uma tag <></>
    <div>
      <h1>AUTHENTICATION</h1>
      <form onSubmit={enviar}>
        <div className='input'>
          <label htmlFor="nome"> Nome do Serviço</label>
          <input type="text" id="nome" onChange={e => setNome(e.target.value)}/>
        </div>
        <button type='submit'> Enviar</button>
      </form>
  </div>
  );
}

export default Authentication;
