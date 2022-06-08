import React, { useState } from "react";
import styled from 'styled-components';

const Etp2 = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    background: lightblue;
`

const Etapa2 = () => {
    return(
        <Etp2>
            <h1>Etapa 2 | Informações Educacionais</h1>
            <label>Qual curso?</label>
            <input></input>
            
            <label>Qual unidade de ensino?</label>
            <input></input>

        </Etp2>
    )
}

export default Etapa2;