import React, { useState } from "react";
import styled from 'styled-components';

const CampoUser = styled.div `
    display: flex;
    flex-direction: column;
    background: bisque;
`

const LabelUser = styled.label `
    margin: 8px 4px 0 8px;
    padding: 0 0 1px 10px;
`

const InserirUser = styled.input `
    padding: 10px;
    margin: 0 4px 8px 8px;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
`

const InputNome = () => {
    return (
        <CampoUser>
            <LabelUser>@user</LabelUser>
            <InserirUser></InserirUser>
        </CampoUser>
    )
}

export default InputNome;