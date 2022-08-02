import styled from "styled-components";
import { Fab } from "@mui/material";

export const RecipeListContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 50px 80px;
`

export const AddRecipeButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`