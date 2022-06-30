import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const InputUsuario = styled.div `
    display: flex;
`

const Item = styled.p `
    padding: 0 5px 0 0 ;
`

const PrimeiraTela = () => {

  const [inputUser, setInputUser] = useState('')
  const [inputUserMail, setInputUserMail] = useState('')

  const criaUser = () => {
    
    const body = {
      "name": inputUser,
      "email": inputUserMail
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "camila-yung-franklin"
      }
    }).then( (response) => {
      console.log(response)
    }).catch( (error) => {
      console.log(error)
    })
  }

  const handleInputUser = (event) => {
    setInputUser(event.target.value)
  }

  const handleInputUserMail = (event) => {
    setInputUserMail(event.target.value)
  }

    return (
        <div> 

            <InputUsuario>
                <Item><input value={inputUser} onChange={handleInputUser} ></input></Item>
                <Item><input value={inputUserMail} onChange={handleInputUserMail} ></input></Item>
                <Item><button onClick={criaUser}>Criar usuário</button></Item>
            </InputUsuario>

        </div>
    )
}

export default PrimeiraTela;