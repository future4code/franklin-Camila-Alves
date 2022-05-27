import React from 'react';
import logo from './logo.png';
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

        <main className="App-main">
            <nav className="App-menu-vertical">
                <ul>
                    <li className="App-botoes-meunu-vertical">Início</li>
                    <li className="App-botoes-meunu-vertical">Em alta</li>
                    <li className="App-botoes-meunu-vertical">Inscrições</li>
                    <hr>
                    </hr>
                    <li className="App-botoes-meunu-vertical">Originais</li>
                    <li className="App-botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="App-painel-de-videos">
                <div className="App-box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
                <div className="App-box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>Título do vídeo</h4>
                </div>
            </section>
        </main>

        <footer className="App-footer">
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
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