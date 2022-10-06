import React from "react";
import QuinaTheme from "../../constants/Themes/QuinaTheme";
import ConcursoStyle from "../../components/Header/Header";
import ResultadoConcurso from "../../components/ResultadosConcursos/ResultadoConcurso";

const Quina = () => {
       
    return (
        <div>
            <ConcursoStyle 
                theme={QuinaTheme}
                concurso={"QUINA"}
                idConcurso={"CONCURSO Nº 4560"}
            />

            <ResultadoConcurso 
                theme={QuinaTheme}
            />

        </div>
    )
}

export default Quina