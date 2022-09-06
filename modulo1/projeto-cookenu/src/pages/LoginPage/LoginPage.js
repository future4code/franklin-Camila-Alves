import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({rightButton, setRightButton}) => {

    useUnprotectedPage()
    
    const navigate = useNavigate()

    return(
        <ScreenContainer>

            <LogoImage src={logo} />

            <LoginForm rightButton={rightButton} setRightButton={setRightButton}/>

            <SignUpButtonContainer>
                <Button 
                    onClick={() => goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage;