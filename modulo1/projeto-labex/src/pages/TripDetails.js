import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            alert('É preciso estar logado para acessar essa página.')
            navigate("/login")
        }
    }, [])
}

const TripDetails = () => {

    useProtectedPage()

    useEffect(() => {

        const token = localStorage.getItem('token')

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-yung-franklin/trip/9EAjnzfY5d7tBION3qgP`, {
            headers: {
                auth: token

            }
        })
        .then((response) => {
            console.log('Deu certo: ', response.data)
        }).catch((error) => {
            console.log('Deu erro: ', error.response)
        })
    }, [])

    return(
        <div>
            <p>Detalhes da viagem!</p>
        </div>
    )
}

export default TripDetails;