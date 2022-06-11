import React, { useState } from "react";
import styled from 'styled-components';
import Etapa2 from './components/Etapa2';

const Etp1 = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    background: pink;
`

const Etapa1 = () => {

    const [state, setState] = useState({
        escolaridadeSelecionada: "---"
      });
      let ensino;
    
    switch (state.escolaridadeSelecionada) {
        case "Ensino Médio Completo":
            ensino = <p>Ensino Médio Completo</p>;
            break;
        case "Ensino Médio Incompleto":
            ensino = <p>Ensino Médio Incompleto</p>;
            break;
        case "Ensino Superior Completo":
            ensino = <p>Ensino Superior Completo</p>;
            break;
        case "Ensino Superior Incompleto":
            ensino = <p>Ensino Superior Incompleto</p>;
            break;
        default:
            ensino = null;
    }
    
    const options = ["Ensino Médio Completo", "Ensino Médio Incompleto", "Ensino Superior Completo", "Ensino Superior Incompleto"];

    const[etapaState, setEtapaState] = useState('')

   const proximaEtapa = () => {
    setEtapaState('etapa2')
   }

   const etapaRender = () => {
      switch (etapaState) {
        case 'etapa2':
          return (<Etapa2 />)
          break;

         default:
            break;
      }
   }

    return(
        <Etp1>
            <h1>Etapa 1 | Dados Gerais</h1>
            <label>Nome</label>
            <input></input>
            
            <label>Idade</label>
            <input></input>

            <label>Email</label>
            <input></input>

            <p>Grau de escolaridade</p>

            <select
                value={state.escolaridadeSelecionada}
                onChange={(e) => setState({ escolaridadeSelecionada: e.target.value })}
            >
                {options.map((optionValue) => (
                    <option value={optionValue}>{optionValue}</option>
                ))}
            </select>

            <button onClick={proximaEtapa}>Próxima etapa</button>

            {etapaRender()}

        </Etp1>
    )
}

export default Etapa1;