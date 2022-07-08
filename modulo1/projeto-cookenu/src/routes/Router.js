import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import ErrorPage from "../pages/ErrorPage.js/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SingUpPage from "../pages/SignUpPage/SignUpPage";

const Router = ({rightButton, setRightButton}) => {


    return (
            <Routes>

                <Route path="login" element={<LoginPage rightButton={rightButton} setRightButton={setRightButton} />} />

                <Route path="cadastro" element={<SingUpPage />} />
                    
                <Route index element={<RecipesListPage />} />

                <Route path="adicionar-receita" element={<AddRecipePage />} />
                    
                <Route path="detalhe/:id" element={<RecipeDetailPage />} />

                <Route element={<ErrorPage />} />
                    
            </Routes>
    )
}

export default Router;