import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50?a=1'}
            fotoPost={'https://picsum.photos/200/150?a=1'}
          />

          <Post
            nomeUsuario={'laurinha'}
            fotoUsuario={'https://picsum.photos/50/50?a=2'}
            fotoPost={'https://picsum.photos/200/150?a=2'}
          />

          <Post
            nomeUsuario={'flavinha'}
            fotoUsuario={'https://picsum.photos/50/50?a=3'}
            fotoPost={'https://picsum.photos/200/150?a=3'}
          />
        </MainContainer>
)

}


export default App;
