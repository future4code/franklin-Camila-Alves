import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListTrips = () => {

    const navigate = useNavigate()

    const goToApplicationForm = () => {
        navigate("/appForm")
    }

    return(
        <div>
            <p>Você está em ListTrips!</p>
            <button onClick={goToApplicationForm}>Inscreva-se!</button>
        </div>
    )
}

export default ListTrips;