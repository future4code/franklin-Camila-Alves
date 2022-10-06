import React from "react";
import LotoFacilTheme from "../../constants/Themes/LotoFacilTheme";
import ConcursoStyle from "../../components/Header/Header";
import ResultadoConcurso from "../../components/ResultadosConcursos/ResultadoConcurso";

const LotoFacil = () => {
       
    return (
        <div>
            <ConcursoStyle 
                theme={LotoFacilTheme}
                concurso={"LOTO FÁCIL"}
                idConcurso={"CONCURSO Nº 4560"}
            />

            <ResultadoConcurso 
                theme={LotoFacilTheme}
            />
        </div>
    )
}

export default LotoFacil