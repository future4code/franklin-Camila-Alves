import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate("/listaDeViagens")
    }

    const goToLogin = () => {
        navigate("/login")
    }    

    return(
        <div>
            <p>Você está em home!</p>
            <button onClick={goToListTrips}>Ver viagens</button>
            <button onClick={goToLogin}>Login</button>
        </div>
    )
}

export default Home;