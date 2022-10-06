import React from "react";
import { Box, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte, goToLotoFacil, goToLotoMania, goToMegaSena, goToQuina, goToTimeMania } from "../../router/coordinator";

const SelectComponent = () => {

    const [concurso, setConcurso] = React.useState('')
    const navigate = useNavigate()

    const handleChange = (event) => {
        setConcurso(event.target.value)
    }
       
    return (
        <Box
            sx={{
                paddingBottom: 15
            }}
        >
            <Select
                sx={{
                    backgroundColor: "primary.contrastText",
                    color: "text.secondary", 
                    width: 233,
                    height: 51, 
                    borderRadius: 2.5
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={concurso}
                label="Concurso"
                onChange={handleChange}
            >
                <MenuItem 
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "text.secondary"
                    }}
                    value={1}
                    onClick={() => goToMegaSena(navigate)}
                >
                    MEGA-SENA
                </MenuItem>
                <MenuItem 
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "text.secondary"
                    }}
                    value={2}
                    onClick={() => goToQuina(navigate)}
                >
                    QUINA
                </MenuItem>
                <MenuItem 
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "text.secondary"
                    }}
                    value={3}
                    onClick={() => goToLotoFacil(navigate)}
                >
                    LOTO-FÁCIL
                </MenuItem>
                <MenuItem 
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "text.secondary"
                    }}
                    value={4}
                    onClick={() => goToLotoMania(navigate)}
                >
                    LOTO-MANIA
                </MenuItem>
                <MenuItem 
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "text.secondary"
                    }}
                    value={5}
                    onClick={() => goToTimeMania(navigate)}
                >
                    TIME-MANIA
                </MenuItem>
                <MenuItem 
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "text.secondary"
                    }}
                    value={6}
                    onClick={() => goToDiaDeSorte(navigate)}
                >
                    DIA DE SORTE
                </MenuItem>
            </Select>
        </Box>
                
    )
}

export default SelectComponent
