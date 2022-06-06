import React, { useState } from "react";
import styled from 'styled-components';
//import Input from "./components/Input/Input";
//import Tela from "./components/Tela/Tela";
import icone from './icone.png';

/********** ---WHATSLAB--- **********/
const WhatsLab = styled.div `
  
  width: 940px;
  background: antiquewhite;
  padding: 20px;
`

/********** ---TELA--- **********/
const Tela = styled.div `
    height: 500px;
    width: 470px;
    padding: 20px;
    color: brown;
    font-weight: lighter;
    font-size: 24px;
`

const Conversa = styled.li `
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 70px;
  background: seashell;
  border-radius: 20px;
  margin: 10px 0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

const User = styled.p `
  font-weight: bold;
  font-size: 10px;
  padding: 10px 0 0 15px;
  margin: 0px;
`

const Mensagem = styled.p `
  padding: 0 0 5px 15px;
  margin: 1px 0 0 0;
`

/********** ---INPUT--- **********/
const Input = styled.div `
    display: flex;
    flex-direction: row;
    width: 900px;
    padding: 20px;
    border-radius: 60px;
    background: bisque;
`

/********** ---INPUT USER--- **********/
const CampoUser = styled.div `
    display: flex;
    flex-direction: column;
    background: bisque;
`

const LabelUser = styled.label `
    margin: 8px 4px 0 8px;
    padding: 0 0 1px 10px;
    color: brown;
    font-weight: lighter;
`

const InserirUser = styled.input `
    padding: 10px;
    margin: 0 4px 8px 8px;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
`

/********** ---INPUT MENSAGEM--- **********/
const CampoMensagem = styled.div `
    display: flex;
    flex-direction: column;
    background: bisque;
`

const LabelMensagem = styled.div `
    margin: 8px 8px 0 4px;
    padding: 0 0 1px 10px;
    color: brown;
    font-weight: lighter;
`

const InserirMensagem = styled.input `
    width: 600px;
    padding: 10px;
    margin: 0 8px 8px 4px;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
`

/********** ---BOTÃO ENVIAR--- **********/
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

function App() {
  
  const [inputUser, setInputUser] = useState("")
  const [inputMensagem, setInputMensagem] = useState("")

  const [batePapo, setBatePapo] = useState([
    {
      user: 'Camila',
      mensagem: 'Olá :)'
    }
  ])

  const handleInputUser = (event) => {
    setInputUser(event.target.value)
  }

  const handleInputMensagem = (event) => {
    setInputMensagem(event.target.value)
  }

  const enviarMensagem = () => {
    const inputBatePapo = {user: inputUser, mensagem: inputMensagem}
    
    const chegouMensagem = [...batePapo]
    chegouMensagem.push(inputBatePapo)
    setBatePapo(chegouMensagem)

    // const novaListaPessoas = [...pessoas, inputPessoa]
    // setPessoas(novaListaPessoas)

    //setInputConversa([...conversa, inputConversa])
  }

  const imprimeBatePapo = batePapo.map( (novaMensagem) => {
    return <Conversa><User>{novaMensagem.user}</User><Mensagem>{novaMensagem.mensagem}</Mensagem></Conversa>
  })



  return (
    <WhatsLab>

      <Tela>
          {imprimeBatePapo}
      </Tela>

      <Input>
        <CampoUser>
          <LabelUser>@user</LabelUser>
          <InserirUser value={inputUser} onChange={handleInputUser}></InserirUser>
        </CampoUser>

        <CampoMensagem>
          <LabelMensagem>mensagem</LabelMensagem>
          <InserirMensagem value={inputMensagem} onChange={handleInputMensagem} ></InserirMensagem>
        </CampoMensagem>

        <BotaoContainer>
          <Botao onClick={enviarMensagem}><IconeEnviar src={icone} /></Botao>
        </BotaoContainer>
      </Input>

    </WhatsLab>
  );
}

export default App;
