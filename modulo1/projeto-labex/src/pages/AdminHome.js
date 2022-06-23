import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {

    const navigate = useNavigate()

    const goToCreateTrip = () => {
        navigate("/createTrip")
    }

    return(
        <div>
            <p>Você está em AdminHome!</p>
            <button onClick={goToCreateTrip}>Criar viagem</button>
        </div>
    )
}

export default AdminHome;