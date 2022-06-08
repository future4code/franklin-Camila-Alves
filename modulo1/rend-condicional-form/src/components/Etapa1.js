import React, { useState } from "react";
import styled from 'styled-components';

const Etp1 = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    background: pink;
`

const Etapa1 = () => {
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

        </Etp1>
    )
}

export default Etapa1;