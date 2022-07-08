import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolBar } from './styled';
import { goToRecipesList, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = ({rightButton, setRightButton}) => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    

    const logout = () => {
        localStorage.removeItem("token")
    }
    
    const rightButtonAction = () => {
        if(token) {
            logout()
            setRightButton("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <StyledToolBar>
                <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButton}</Button>
            </StyledToolBar>
        </AppBar>
        </Box>
    );
}

export default Header;