import React from "react";
import DiaDeSorteTheme from "../../constants/Themes/DiaDeSorteTheme";
import ConcursoStyle from "../../components/Header/Header";
import ResultadoConcurso from "../../components/ResultadosConcursos/ResultadoConcurso";

const DiaDeSorte = () => {
       
    return (
        <div>
            <ConcursoStyle 
                theme={DiaDeSorteTheme}
                concurso={"DIA DE SORTE"}
                idConcurso={"CONCURSO Nº 4560"}
            />

            <ResultadoConcurso 
                theme={DiaDeSorteTheme}
            />
        </div>
    )
}

export default DiaDeSorte