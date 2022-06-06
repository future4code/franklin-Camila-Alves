import React, { useState } from "react";
import styled from 'styled-components';
import icone from './icone.png';

const BotaoContainer = styled.div `
    background: bisque;
`

const Botao = styled.button `
    padding: 15px;
    background: bisque;
    border: none;
    border-radius: 50%;
    text-decoration: none;
    cursor: pointer;
`

const IconeEnviar = styled.img `
    width: 45px;
    background: bisque;
`

const BotaoEnviar = (props) => {

    const { atualizaEstado } = props

    return (
        <BotaoContainer>
            <Botao onClick={atualizaEstado} ><IconeEnviar src={icone}/></Botao>
        </BotaoContainer>
    )
}

export default BotaoEnviar;