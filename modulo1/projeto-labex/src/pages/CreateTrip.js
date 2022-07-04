import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import useProtectedPage from "../hooks/useProtectedPage";

// 1. Copiar o custom hook useForm para a pasta de hooks
// 2. Importar o hook na tela que desejar 
// 3. Criar os meus inputs
// 4. Criar um botão de enviar formulário
// 5. Colocar os inputs e os botões dentro da tag form
// 6. Criar função de sumissão e colocar o event.preventeDefault() nela
// 7. Colocar função de submissão no onSubmit da tag form
// 8. Usar o hook useForm: colocar os parâmetros recebidos { form, onChangem, cleanFields }
// 9. Usar o hook useForme: passar o objeto com o estado inicial como parâmetro
    // OBS: O objeto  de estado inicial deve ser igual ao pedido de sua API, caso vá enviar o form para ela
// 10. Colocar o estado nas propriedades value dos inputs {form.nomeDaPropriedade}
// 11. Colocar a propriedade name nos inputs, seguindo os nomes escolhidos no estado inicial
// 12. Colocar a função de onChange na propriedade onChange dos inputs
// 13. Fazer as validações
    // - Se o campo é obrigatório adicionar propriedade required
    // - Colocar o tipo de cada campo
    // - Colocar patterns e titles nos campos onde precisar de uma validação específica

const CreateTrip = () => {

    useProtectedPage()

    const [form, setForm] = useState({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const Cadastrar = (event) => {
        event.preventDefault()

        const token = localStorage.getItem('token')
        
        console.log("Formulário enviado!", form)

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-yung-franklin/trips`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log('Deu certo: ', response)

        }).catch((error) => {
            console.log('Deu errado: ', error.response)
        
        })
    }

    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate(-1)
    }

    return(
        <div>
            <p>Você está em CreateTrip!</p>
            <form>
                <input placeholder="Nome" value={form.name} name="name" onChange={onChange} pattern={".{3,}"} title={"O nome deve ter, no mínimo, três letras."}/>
                <input placeholder="Planeta" value={form.planet} name="planet" onChange={onChange} />
                <input placeholder="Data" value={form.date} name="date" onChange={onChange} type={"date"} />
                <input placeholder="Descrição" value={form.description} name="description" onChange={onChange} />
                <input placeholder="Duração (em dias)" value={form.durationInDays} name="durationInDays" onChange={onChange} type={"number"} min={50} />
                
                <button onClick={goToAdminHome}>Voltar</button>
                <button onClick={Cadastrar}>Criar viagem</button>
            </form>

            
        </div>
    )
}

export default CreateTrip;