import React from 'react';
import styled from 'styled-components';

const CardPequenoContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 5px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const CardPequenoContainerImg = styled.img `
    width: 30px;
    margin-right: 10px;
`

const CardPequenoContainerDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <CardPequenoContainerImg src={ props.imagem } alt=" "/>
            <CardPequenoContainerDiv>
                <h4>{ props.info }</h4>
                <p>{ props.descricao }</p>
            </CardPequenoContainerDiv>
        </CardPequenoContainer>
    )
}

export default CardPequeno;