import React, { useState } from "react";
import styled from 'styled-components';

const Etp3 = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    background: lightcyan;
`

const Etapa3 = () => {
    return(
        <Etp3>
            <h1>Etapa 3 | Informações Complementares</h1>
            <label>Por que você não terminou um curso de graduação?</label>
            <input></input>

            <p>Você fez algum curso complementar?</p>

        </Etp3>
    )
}

export default Etapa3;