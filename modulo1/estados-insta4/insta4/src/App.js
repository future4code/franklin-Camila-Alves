import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {

  const [listaPost, setListaPost] = useState([
    {
      user: 'paulinha',
      fotoUser: 'https://picsum.photos/50/50?a=1',
      fotoPost: 'https://picsum.photos/200/150?a=1'
    },
    {
      user: 'laurinha',
      fotoUser: 'https://picsum.photos/50/50?a=2',
      fotoPost: 'https://picsum.photos/200/150?a=2'
     },
     {
      user: 'flavinha',
      fotoUser: 'https://picsum.photos/50/50?a=3',
      fotoPost: 'https://picsum.photos/200/150?a=3'
     }
  ])

  const [inputUser, setInputUser] = useState("")
  const [inputFotoUser, setInputFotoUser] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")

  const handleInputUser = (event) => {
    setInputUser(event.target.value)
  }

  const handleInputFotoUser = (event) => {
    setInputFotoUser(event.target.value)
  }

  const handleInputFotoPost = (event) => {
    setInputFotoPost(event.target.value)
  }

  const insta = listaPost.map((post) => {
    return <Post
        nomeUsuario={post.user}
        fotoUsuario={post.fotoUser}
        fotoPost={post.fotoPost}
      />
    }
  )

  const inserirPost = () => {
    const inputPost = {user: inputUser, fotoUser: inputFotoUser, fotoPost: inputFotoPost}
    
    // const novaListaPessoas = [...pessoas]
    // novaListaPessoas.push(inputPessoa)
    // setPessoas(novaListaPessoas)

    // const novaListaPessoas = [...pessoas, inputPessoa]
    // setPessoas(novaListaPessoas)

    setListaPost([...listaPost, inputPost])
  }

  return(
    <MainContainer>
      <label>@user</label><input value={inputUser} onChange={handleInputUser}></input>
      <label>foto de perfil</label><input value={inputFotoUser} onChange={handleInputFotoUser}></input>
      <label>foto do post</label><input value={inputFotoPost} onChange={handleInputFotoPost}></input>
      <button onClick={inserirPost}>carregar post</button>
      {insta}
    </MainContainer>
  )

}


export default App;
