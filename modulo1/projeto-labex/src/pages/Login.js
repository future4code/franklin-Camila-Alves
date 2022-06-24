import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate("/adminHome")
    }

    const goToHome = () => {
        navigate(-1)
    }

    return(
        <div>
            <p>Você está em Login!</p>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToAdminHome}>Fazer login</button>
        </div>
    )
}

export default Login;