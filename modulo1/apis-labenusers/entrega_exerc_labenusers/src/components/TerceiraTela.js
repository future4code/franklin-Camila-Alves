import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PesquisaUsuario = styled.div `
    display: flex;
`

const Item = styled.p `
    padding: 0 5px 0 0 ;
`

const SegundaTela = (props) => {

    const { insereUsuario } = props

    const [users, setUsers] = useState([])

    const [delUserId, setDelUserId] = useState('')

    const deletaUser = (id) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            // params: {
            //     "id": delUserId
            // },
            headers: {
                Authorization: "camila-yung-franklin"
            }
        }).then( (response) => {
            console.log(response.data)
            pegaUsers()
        }).catch( (error) => {
            console.log(error.code)
        })
    }

    const [cadeUser, setCadeUser] = useState('')

    const searchUser = () => {

        const body = {
            "name": inputUser,
            "email": inputUserMail
          }

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${inputUser}&email=${inputUserMail}`, body, {
            headers: {
                Authorization: "camila-yung-franklin"
            }
        }).then( (response) => {
            console.log(response.data)
            setCadeUser(response.data)
        }).catch( (error) => {
            console.log(error.code)
        })
        }

    useEffect(pegaUsers, [])
    //useEffect(searchUser, [])

    return (
        <div>
           
            {users.map( (user) => {
                return (
                    <p key={user.id}>{user.name}<button onClick={() => {setDelUserId(user);deletaUser(user.id)}}>Deletar usuário</button></p>
                )
            })}

            

            <h3>Procurar usuário</h3>

            <PesquisaUsuario>
                <Item><input ></input></Item>
                <Item><input type="button" onClick={insereUsuario} onChange={searchUser} >Salvar edição</input></Item>
            </PesquisaUsuario>
        </div>
    )
}

export default SegundaTela;