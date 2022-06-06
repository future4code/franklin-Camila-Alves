import React, { useState } from "react";
import styled from 'styled-components';

const CampoMensagem = styled.div `
    display: flex;
    flex-direction: column;
    background: bisque;
`

const LabelMensagem = styled.div `
    margin: 8px 8px 0 4px;
    padding: 0 0 1px 10px;
`

const InserirMensagem = styled.input `
    width: 600px;
    padding: 10px;
    margin: 0 8px 8px 4px;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
`

const InputMensagem = () => {

    

    return (
        <CampoMensagem>
            <LabelMensagem>mensagem</LabelMensagem>
            <InserirMensagem></InserirMensagem>
        </CampoMensagem>
    )
}

export default InputMensagem;