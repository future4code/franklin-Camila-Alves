import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [playlists, setPlaylists] = useState([])

  const [inputPlaylist, setInputPlaylist] = useState('')
  
  const pegaPlaylist = () => {
    
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: "camila-yung-franklin"
      }
    }).then( (response) => {
      console.log(response.data.result)
      setPlaylists(response.data.result.list)
    }).catch( (error) => {
      console.log(error.code)
    })

  }

  const criaPlaylist = () => {
    
    const body = {
      "name": inputPlaylist
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: "camila-yung-franklin"
      }
    }).then( (response) => {
      console.log(response)
      pegaPlaylist()
    }).catch( (error) => {
      console.log(error)
    })
  }

  const handleInputNome = (event) => {
    setInputPlaylist(event.target.value)
  }

  useEffect(pegaPlaylist, [])

  return (
    <div className="App">

      <input value={inputPlaylist} onChange={handleInputNome}></input>
      <button onClick={criaPlaylist}>Criar nova playlist</button>

      {playlists.map( (playlist) => {
        return <p key={playlist.id}>{playlist.name}</p>
      })}

    </div>
  );
}

export default App;
