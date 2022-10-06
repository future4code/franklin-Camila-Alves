import React from "react";
import LotoManiaTheme from "../../constants/Themes/LotoManiaTheme";
import ConcursoStyle from "../../components/Header/Header";
import ResultadoConcurso from "../../components/ResultadosConcursos/ResultadoConcurso";

const LotoMania = () => {
       
    return (
        <div>
            <ConcursoStyle 
                theme={LotoManiaTheme}
                concurso={"LOTO MANIA"}
                idConcurso={"CONCURSO Nº 4560"}
            />

            <ResultadoConcurso 
                theme={LotoManiaTheme}
            />
        </div>
    )
}

export default LotoMania