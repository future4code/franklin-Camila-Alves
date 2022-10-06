import React from "react";
import { Box, Typography } from "@mui/material";

const IdConcurso = (props) => {

    return (
        <Box>
            <Typography 
                sx={{
                    color: "primary.contrastText",
                    paddingBottom: 5
                }} 
            >
                {props.idConcurso}
            </Typography>
        </Box>
    )
}

export default IdConcurso
