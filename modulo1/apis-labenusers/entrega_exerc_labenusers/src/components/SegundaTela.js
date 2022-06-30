import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PesquisaUsuario = styled.div `
    display: flex;
`

const Item = styled.p `
    padding: 0 5px 0 0 ;
`

const SegundaTela = () => {

    const [users, setUsers] = useState([])
    
    const pegaUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "camila-yung-franklin"
            }
        }).then( (response) => {
            console.log(response.data)
            setUsers(response.data)
        }).catch( (error) => {
            console.log(error.code)
        })
    }

    const [delUserId, setDelUserId] = useState('')

    const deletaUser = (id) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
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

    const [procuraUser, setProcuraUser] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const searchUser = (name) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}&email=`, {
            headers: {
                Authorization: "camila-yung-franklin"
            }
        }).then((response) => {
            console.log(response)
            setProcuraUser(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const hangleUserProcurado = (event) => {
        setSearchInput(event.target.value)
    }

    useEffect(pegaUsers, [])

    return (
        <div>
           
            {users.map( (user) => {
                return (
                    <p key={user.id}>{user.name}<button onClick={() => {setDelUserId(user);deletaUser(user.id)}} >Deletar usuário</button></p>
                )
            })}

            

            <h3>Procurar usuário</h3>

            <PesquisaUsuario>
                <Item><input value={searchInput} onChange={hangleUserProcurado}></input></Item>
                <Item><button onClick={() => {searchUser(searchInput)}}>Procuar usuário</button></Item>
                {procuraUser.map((achei) => {
                    return <p key={achei.id}>{achei.name}</p>
                })}
            </PesquisaUsuario>
        </div>
    )
}

export default SegundaTela;