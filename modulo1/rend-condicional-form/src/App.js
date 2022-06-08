import React, { useState } from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';

const Saudacoes = styled.div `
  text-align: center;
  background: antiquewhite;
`

const Botao = styled.button `
  text-decoration: none;
  border: none;
  border-radius: 30px;
  background: azure;
  padding: 20px;
  cursor: pointer;
`

function App() {

  const VaiParaEtapa1 = () => {
    return <Etapa1 />
  }

  return (
    <div>
      <Saudacoes>
        <h1>Olá</h1>
        <p>Obrigada por responder a nossa pesquisa</p>
        <p>(prometemos que ela será rápida)</p>
        <Botao onClick={VaiParaEtapa1}>Clique aqui para começar a nossa pesquisa</Botao>
      </Saudacoes>
      <Etapa1 />
      <Etapa2 />
      <Etapa3 />
      <Etapa4 />
    </div>
  );
}

export default App;
