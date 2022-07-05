import { useNavigate } from "react";

const navigate = useNavigate()

export const goToLogin = () => {
    navigate("/login")
}

export const goToSignUp = () => {
    navigate("/cadastro")
}

export const goToRecipesLis = () => {
    navigate("/")
}

export const goToAddRecipe = () => {
    navigate("/adicionar-receita")
}

export const goToRecipeDetail = () => {
    navigate(`/detalhe/${id}`)
}