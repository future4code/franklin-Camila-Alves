import React from "react";
import MegaSenaTheme from "../../constants/Themes/MegaSenaTheme";
import Header from "../../components/Header/Header";
import ResultadoConcurso from "../../components/ResultadosConcursos/ResultadoConcurso";

const MegaSena = () => {
       
    return (
        <div>
            <Header 
                theme={MegaSenaTheme}
                concurso={"MEGA-SENA"}
                idConcurso={"CONCURSO Nº 4560"}
            />

            <ResultadoConcurso 
                theme={MegaSenaTheme}
            />
        </div>
    )
}

export default MegaSena
