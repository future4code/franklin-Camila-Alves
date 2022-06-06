import React, { useState } from "react";
import styled from 'styled-components';

const DesignTela = styled.div `
    padding: 20px;
`

const Tela = (props) => {

    const { enviaMensagem } = props

    return (
        <DesignTela>
            {enviaMensagem}
        </DesignTela>
    )
}

export default Tela;