import React from 'react';
import styled from 'styled-components';

const CardGrandeContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const CardGrandeImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const CardGrandeTexto = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const CardGrandeNome = styled.h4 `
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <CardGrandeImg src={ props.imagem } alt=" " />
            <CardGrandeTexto>
                <CardGrandeNome>{ props.nome }</CardGrandeNome>
                <p>{ props.descricao }</p>
            </CardGrandeTexto>
        </CardGrandeContainer>
    )
}

export default CardGrande;