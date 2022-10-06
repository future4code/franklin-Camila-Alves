import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import SelectComponent from "../Select/Select";
import Logo from "../Logo/Logo";
import IdConcurso from "../IdConcurso/IdConcurso";

const Header = (props) => {

    return (
        <ThemeProvider theme={props.theme}>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    width: 524,
                    height: 450, 
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <SelectComponent />
                
                <Logo concurso={props.concurso} />

                <IdConcurso idConcurso={props.idConcurso} />
            </Box>
        </ThemeProvider>
    )
}

export default Header
