import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Tracklists = () => {

  const [tracklists, setTracklists] = useState([])
  
//   const [inputName, setInputName] = useState('')
//   const [inputArtist, setInputArtist] = useState('')
//   const [inputUrl, setInputUrl] = useState('')

  const pegaTracklist = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/904a806d-8ad5-4e90-acfa-a202ab4f3a87/tracks`, {
      headers: {
        Authorization: "camila-yung-franklin"
      }
    }).then( (response) => {
      console.log(response.data.result)
      setTracklists(response.data.result.tracks)
    }).catch( (error) => {
      console.log(error.code)
    })
  }

  

//--------------------------------------------------------------------------------------------------------------------

//   const addTrack = (playlistId) => {
    
//     const body = {
//       "name": inputName,
//       "artist": inputArtist,
//       "url": inputUrl
//     }
    
//     axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, {
//       headers: {
//         Authorization: "camila-yung-franklin"
//       }
//     }).then( (response) => {
//       console.log(response)
//       pegaTracklist()
//     }).catch( (error) => {
//       console.log(error)
//     })
//   }

//   const handleInputName = (event) => {
//     setInputName(event.target.value)
//   }

//   const handleInputArtist = (event) => {
//     setInputArtist(event.target.value)
//   }

//   const handleInputUrl = (event) => {
//     setInputUrl(event.target.value)
//   }

//--------------------------------------------------------------------------------------------------------------------

//   const [delTrack, setDelTrack] = useState('')

//     const deletaTrack = (playlistId) => {

//         axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
//             headers: {
//                 Authorization: "camila-yung-franklin"
//             }
//         }).then( (response) => {
//             console.log(response.data)
//             pegaPlaylist()
//         }).catch( (error) => {
//             console.log(error.code)
//         })
//     }

  useEffect(pegaTracklist, [])

    return (
        <div> 

            {/* <input value={inputName} onChange={handleInputName}></input>
            <input value={inputArtist} onChange={handleInputArtist}></input>
            <input value={inputUrl} onChange={handleInputUrl}></input>
            <button onClick={addTrack}>Criar nova playlist</button> */}

            
            
            {tracklists.map( (tracklist) => {
                return <p key={tracklist.id}>{tracklist.name}</p>
            })}

           

        </div>
    )
}

export default Tracklists;