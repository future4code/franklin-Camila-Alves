import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={props.Comentario}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}

{/* <Cartao>
        <GlobalStyle />
        <Info>Nome| {inputNome}</Info>
        <Info>Número| {inputNumero}</Info>
        <Info>Nome| {inputCVV}</Info>
      </Cartao>
      
      <input value={inputNome} onChange={handleInputNome} /><br />
      <input value={inputNumero} onChange={handleInputNumero} /><br />
      <input value={inputCVV} onChange={handleInputCVV} /><br />
      <button onClick={limparCampo}>Limpar campo</button>
       */}