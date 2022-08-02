import React, { useState } from "react";
import styled from 'styled-components';

const Etp3 = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    background: lightcyan;
`

const Etapa3 = () => {

    const [state, setState] = useState({
        cursoSelecionado: "---"
      });
      let ensino;
    
    switch (state.cursoSelecionado) {
        case "Curso técnico":
            ensino = <p>Curso técnico</p>;
            break;
        case "Curso de inglês":
            ensino = <p>Curso de inglês</p>;
            break;
        case "Não fiz curso complementar":
            ensino = <p>Não fiz curso complementar</p>;
            break;
        default:
            ensino = null;
    }
    
    const options = ["Curso técnico", "Curso de inglês", "Não fiz curso complementar"];


    return(
        <Etp3>
            <h1>Etapa 3 | Informações Complementares</h1>
            <label>Por que você não terminou um curso de graduação?</label>
            <input></input>

            <p>Você fez algum curso complementar?</p>
            <select
                value={state.cursoSelecionado}
                onChange={(e) => setState({ cursoSelecionado: e.target.value })}
            >
                {options.map((optionValue) => (
                    <option value={optionValue}>{optionValue}</option>
                ))}
            </select>

            
        </Etp3>
    )
}

export default Etapa3;