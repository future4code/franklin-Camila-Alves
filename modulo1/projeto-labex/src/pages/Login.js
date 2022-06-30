import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleInputPassword = (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate()

    const Logar = () => {
        console.log(email, password)
        
        const body = {
            email: email,
            password: password
        }
        
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-yung-franklin/login`, body)
        .then((response) => {
            console.log('Deu certo: ', response.data.token)
            localStorage.setItem('token', response.data.token)
            navigate("/adminHome")
        }).catch((error) => {
            console.log('Deu errado: ', error.response)
            alert(error.response.data.message)
        })
    }

    const goToHome = () => {
        navigate(-1)
    }

    return(
        <div>
            <p>Você está em Login!</p>

            <input placeholder="email" type="email" value={email} onChange={handleInputEmail} />
            <input placeholder="password" type="password" value={password} onChange={handleInputPassword} />
            <button onClick={Logar}>Enviar</button>
            <br/>

            <button onClick={goToHome}>Voltar</button>
        </div>
    )
}

export default Login;