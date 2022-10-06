import React from "react";
import logo from "../../assets/Logo_Sena.svg";
import { Avatar, Box, Typography } from "@mui/material";

const Logo = (props) => {
    
    return (    
        <Box
            sx={{
                paddingBottom: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Avatar
                src={logo}
                sx={{ width: 63.99, height: 62.4 }}
                variant="square"
                alt="Logo Loterias da Caixa, representado por um trevo de quatro folhas na cor branca"
            />
            
            <Typography 
                sx={{
                    color: "primary.contrastText",
                    fontWeight: 700,
                    fontSize: 30
                }}
            >
                {props.concurso}
            </Typography>
        </Box>
    )
}

export default Logo