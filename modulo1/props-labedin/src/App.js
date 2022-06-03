import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/perfil.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Camila Yung Alves" 
          descricao="Oi, me chamo Camila e atualmente sou aluna da Labenu. Após dois anos, finalmente fiz a minha transição de carreira para a área de tecnologia como programadadora FullStack. Apesar de puxado tenho me apaixonado cada vez mais por essa função <3. "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/6381/6381539.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/7187/7187727.png"
          info="E-mail: "
          descricao="camila_aluna@labenu.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/7187/7187743.png"
          info="Endereço: "
          descricao="Rua dos Bobos, 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/7017/7017475.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/7017/7017474.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
