import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {

    const onClickBotao = () => {
      alert('Botão foi clicado!');
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <p>Aprenda React com a Labenu!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.labenu.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da Labenu
        </a>
        <button onClick={onClickBotao}>Clique aqui!</button>
      </header>
    </div>
  );
}

export default App;
