import { Typography } from "@mui/material";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddRecipesForm from "./AddRecipesForm";

const AddRecipePage = () => {

    useProtectedPage()

    return(
        <div>
            <Typography>Adicionar nova receita</Typography>
            <AddRecipesForm />
        </div>
    )
}

export default AddRecipePage;