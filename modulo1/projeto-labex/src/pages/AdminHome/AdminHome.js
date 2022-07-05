import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TripDetails from "../TripDetails/TripDetails";

const AdminHome = () => {

    const navigate = useNavigate()

    const goToCreateTrip = () => {
        navigate("/createTrip")
    }

    const goToLogin = () => {
        navigate(-1)
    }

    return(
        <div>
            <p>Você está em AdminHome!</p>

            <TripDetails />

            <button onClick={goToLogin}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar viagem</button>
            <button >Logout</button>
        </div>
    )
}

export default AdminHome;