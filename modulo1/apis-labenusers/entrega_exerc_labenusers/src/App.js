import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import SegundaTela from './components/SegundaTela';

const Container = styled.div `
  padding: 10px;
`


function App() {

  const [logTela1, setLogTela1] = useState(true)

  const trocaTela = () => {
     setLogTela1(!logTela1)
  }

  const homeRender = () => {
     switch (logTela1) {
        case true :
           return (<PrimeiraTela />)
           break;
     
        case false :
           return (<SegundaTela />)
           break;

        default:
           break;
     }
  }



  return (
    <Container>

      <button onClick={trocaTela}>Troca tela</button>
      {homeRender()}
      
    </Container>
  );
}

export default App;
