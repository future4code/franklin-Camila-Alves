import React from 'react';
import './App.css';

function App() {

    const reproduzVideo = () => {
      alert("O vídeo está sendo reproduzido")
  }
    
  return (
    <div className="App" >
        <header className="App-header">
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
    </div>
  );
}

export default App;
/*
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
*/