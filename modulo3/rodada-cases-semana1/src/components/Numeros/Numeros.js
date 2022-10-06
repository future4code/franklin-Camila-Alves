import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";

const Numeros = (props) => {

    
       
    return (
        <ThemeProvider theme={props.theme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    transform: "scaleX(0.5)"
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: "primary.contrastText",
                        color: "secondary.contrastText",
                        margin: 1, 
                        width: 76, 
                        height: 76, 
                        fontSize: 20
                    }}
                >
                    1
                </Avatar>

                <Avatar
                    sx={{
                        bgcolor: "primary.contrastText",
                        color: "secondary.contrastText",
                        margin: 1, 
                        width: 76, 
                        height: 76, 
                        fontSize: 20
                    }}
                >
                    2
                </Avatar>

                <Avatar
                    sx={{
                        bgcolor: "primary.contrastText",
                        color: "secondary.contrastText", 
                        margin: 1, 
                        width: 76, 
                        height: 76, 
                        fontSize: 20
                    }}
                >
                    3
                </Avatar>

                <Avatar
                    sx={{
                        bgcolor: "primary.contrastText",
                        color: "secondary.contrastText", 
                        margin: 1, 
                        width: 76, 
                        height: 76, 
                        fontSize: 20
                    }}
                >
                    4
                </Avatar>
            </Box>

            <Box
                 sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    transform: "scaleX(0.5)"
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: "primary.contrastText",
                        color: "secondary.contrastText",
                        margin: 1, 
                        width: 76, 
                        height: 76, 
                        fontSize: 20
                    }}
                >
                    5
                </Avatar>

                <Avatar
                    sx={{
                        bgcolor: "primary.contrastText",
                        color: "secondary.contrastText",
                        margin: 1, 
                        width: 76, 
                        height: 76, 
                        fontSize: 20
                    }}
                >
                    6
                </Avatar>
            </Box>
        </ThemeProvider>
    )
}

export default Numeros