import React from "react";
import { Button } from "@mui/material";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipesListPage = () => {

    useProtectedPage()

    return(
        <div>
            <h1>RecipeListPage</h1>
            <Button variant="contained" color="primary">ME APERTE!</Button>
        </div>
    )
}

export default RecipesListPage;