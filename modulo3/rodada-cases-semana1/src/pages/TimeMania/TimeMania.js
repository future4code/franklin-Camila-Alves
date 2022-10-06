import React from "react";
import TimeManiaTheme from "../../constants/Themes/TimeManiaTheme";
import ConcursoStyle from "../../components/Header/Header";
import ResultadoConcurso from "../../components/ResultadosConcursos/ResultadoConcurso";

const TimeMania = () => {
       
    return (
        <div>
            <ConcursoStyle 
                theme={TimeManiaTheme}
                concurso={"TIME MANIA"}
                idConcurso={"CONCURSO Nº 4560"}
            />

            <ResultadoConcurso 
                theme={TimeManiaTheme}
            />
        </div>
    )
}

export default TimeMania