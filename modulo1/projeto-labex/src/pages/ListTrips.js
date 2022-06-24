import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListTrips = () => {

    // **********NAVIGATE**********
    
    const navigate = useNavigate()

    const goToApplicationForm = () => {
        navigate("/appForm")
    }

    const goToHome = () => {
        navigate(-1)
    }

    // **********AXIOS**********

    return(
        <div>
            <p>Lista de Viagens</p>



            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToApplicationForm}>Inscreva-se!</button>
        </div>
    )
}

export default ListTrips;