import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";

const TripDetails = () => {

    useProtectedPage()

    // const [trips, setTrips] = useState([])

    useEffect(() => {

        const token = localStorage.getItem('token')

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-yung-franklin/trip/9EAjnzfY5d7tBION3qgP`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log('Deu certo: ', response.data.trip)
            // setTrips(response.data)
        }).catch((error) => {
            console.log('Deu erro: ', error.response)
        })
    }, [])

    // const ImprimeViagens = () => {
    //     {trips.map((trip) => {
    //         return(
    //             <p key={trip.id}>{trip.name}</p>
    //         )
    //     })}
    // }

    return(
        <div>
            <p>Detalhes da viagem!</p>
        </div>
    )
}

export default TripDetails;