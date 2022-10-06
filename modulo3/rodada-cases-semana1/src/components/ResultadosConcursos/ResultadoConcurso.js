import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Numeros from "../Numeros/Numeros";

const ResultadoConcurso = (props) => {

    
       
    return (
        <ThemeProvider theme={props.theme}>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "secondary.main",
                        width: 524,
                        height: 500, 
                        display: "flex", 
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        borderRadius: '50% 50% 0 0',
                        transform: "scaleX(2)"
                    }}
                >
                    
                    <Numeros />

                    <Typography
                        sx={{
                            textAlign: 'center', 
                            paddingLeft: 13,
                            paddingRight: 13,
                            paddingTop: 10.5,
                            transform: "scaleX(0.5)"
                        }}
                    >
                        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default ResultadoConcurso
