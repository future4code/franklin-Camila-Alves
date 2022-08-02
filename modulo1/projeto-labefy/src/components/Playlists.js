import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Tracklists from "./Tracklist";

const Playlists = (props) => {
  const { veTracklist } = props;

  const [playlists, setPlaylists] = useState([]);

  const [inputPlaylist, setInputPlaylist] = useState("");

  const pegaPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "camila-yung-franklin"
          }
        }
      )
      .then((response) => {
        console.log(response.data.result);
        setPlaylists(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const criaPlaylist = () => {
    const body = {
      name: inputPlaylist
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "camila-yung-franklin"
          }
        }
      )
      .then((response) => {
        console.log(response);
        pegaPlaylist();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputPlaylist = (event) => {
    setInputPlaylist(event.target.value);
  };

  const [delPlaylist, setDelPlaylist] = useState("");

  const deletaPlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "camila-yung-franklin"
          }
        }
      )
      .then((response) => {
        console.log(response.data);
        pegaPlaylist();
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  // const listaMusicas = tracklists.map( (track) => {
  //     return (
  //         <p key={track.id}>{track.name}</p>
  //     )
  // })

  const [tracklists, setTracklists] = useState([]);

  const pegaTracklist = (playlistId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: "camila-yung-franklin"
          }
        }
      )
      .then((response) => {
        console.log(response.data.result);
        setTracklists(response.data.result.tracks);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const [procuraPlaylist, setProcuraPlaylist] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const searchPlaylist = (name) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`,
        {
          headers: {
            Authorization: "camila-yung-franklin"
          }
        }
      )
      .then((response) => {
        console.log(response);
        setProcuraPlaylist(response.data.result.playlist);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePlaylistProcurada = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(pegaPlaylist, []);
  useEffect(pegaTracklist, []);

  return (
    <div>
      <input value={inputPlaylist} onChange={handleInputPlaylist}></input>
      <button onClick={criaPlaylist}>Criar nova playlist</button>

      {playlists.map((playlist) => {
        return (
          <p key={playlist.id}>
            {playlist.name}
            <button
              onClick={() => {
                setDelPlaylist(playlist);
                deletaPlaylist(playlist.id);
              }}
            >
              Deletar Playlist
            </button>
            <button
              onClick={() => {
                pegaTracklist(playlist.id);
              }}
            >
              Ver Tracklist
            </button>
          </p>
        );
      })}

      <input value={searchInput} onChange={handlePlaylistProcurada}></input>
      <button
        onClick={() => {
          searchPlaylist(searchInput);
        }}
      >
        Procurar playlist
      </button>

      {tracklists.map((track) => {
        return (
          <div key={track.id}>
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.url}</p>
          </div>
        );
      })}

      {procuraPlaylist.map((achei) => {
        return <p key={achei.id}>{achei.name}</p>;
      })}
    </div>
  );
};

export default Playlists;
