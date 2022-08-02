import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm.js";

const Login = () => {

    const { form, onChange, cleanFields } = useForm({email: "", password: ""})

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const [form, setForm] = useState({
    //     email: "",
    //     password: ""
    // })

    // const handleInputEmail = (event) => {
    //     setForm({...form, email: event.target.value})
    // }

    // const handleInputPassword = (event) => {
    //     setForm({...form, password: event.target.value})
    // }

    // const onChange = (event) => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // }

    const navigate = useNavigate()

    const Logar = (event) => {

        event.preventDefault()
        
        // const body = {
        //     email: email,
        //     password: password
        // }

        console.log(form)
        
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-yung-franklin/login`, form)
        .then((response) => {
            console.log('Deu certo: ', response.data.token)
            localStorage.setItem('token', response.data.token)
            navigate("/adminHome")
        }).catch((error) => {
            console.log('Deu errado: ', error.response)
            alert(error.response.data.message)
        })

        cleanFields()
    }

    const goToHome = () => {
        navigate(-1)
    }

    return(
        <div>
            <p>Você está em Login!</p>

            <form onSubmit={Logar}>

            <input name="email" placeholder="E-mail" type="email" value={form.email} onChange={onChange} required/>
            <input name="password" placeholder="Senha" type="password" value={form.password} onChange={onChange} pattern={".{3,}"} title={"Sua senha deve ter, no mínimo, três caracteres."} required/>
            <br/>
            <button onClick={goToHome}>Voltar</button>
            <button>Enviar</button>
    
            </form>

            
        </div>
    )
}

export default Login;