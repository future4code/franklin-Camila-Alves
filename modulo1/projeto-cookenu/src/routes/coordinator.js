
export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToRecipesList = (navigate) => {
    navigate("/")
}

export const goToAddRecipe = (navigate) => {
    navigate("/adicionar-receita")
}

export const goToRecipeDetail = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}
