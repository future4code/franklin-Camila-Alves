import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator";


export const login = (form, clear, navigate, setRightButton) => {
    axios.post(`${BASE_URL}/user/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToRecipesList(navigate)
      setRightButton("Logout")
    })
    .catch((err) => alert(err.response.data.message))
}

export const signUp = (form, clear, navigate) => {
  axios.post(`${BASE_URL}/user/signup`, form)
    .then((res) => {
      localStorage.getItem("token", res.data.token)
      clear()
      goToRecipesList(navigate)
    })
    .catch((err) => alert("Erro no Cadastro"))
}

