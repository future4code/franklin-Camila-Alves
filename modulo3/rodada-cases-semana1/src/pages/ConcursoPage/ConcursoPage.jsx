import React from "react"
import logo from "../../assets/Logo_Sena.svg"
import { backgroundColors } from "../../constants/colors"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { 
    Concurso,
    ContainerDesktop,
    ContainerLogo, 
    ContainerPage, 
    ContainerResult, 
    ContainerSelect, 
    Footer, 
    Logo, 
    Loteria, 
    Number, 
    Numbers, 
    StyleItem, 
    StyleSelect 
} from "./style"

const ConcursoPage = () => {

    const [loteriaSelecionada, setLoteriaSelecionada] = React.useState('')

    const loterias = useRequestData([], `${BASE_URL}/loterias`)
    const concursos = useRequestData([], `${BASE_URL}/loterias-concursos`)

    const handleChange = (event) => {
        setLoteriaSelecionada(event.target.value)
    }

    const selecionaLoteria = loterias.map ((loteria) => {
        return (
            <StyleItem
                key={loteria.id}
                value={loteria.id}
            >
                {loteria.nome.toUpperCase()}
            </StyleItem>
        )
    })

    const pegaIdConcurso = () => {
        const resultado = concursos.find((concurso) => concurso.loteriaId == loteriaSelecionada)

        return resultado?.concursoId
    }

    const resultadoConcurso = useRequestData({}, `${BASE_URL}/concursos/${pegaIdConcurso()}`)

    const NomeLoteria = () => {
          const nomeEscolhido = loterias.find((loteria) => loteria?.id == loteriaSelecionada)

          return nomeEscolhido?.nome.toUpperCase()
      }
    
    return (
        <ContainerPage bgColor={backgroundColors[loteriaSelecionada].backgroundColor} >
            {/* backgroundColors={backgroundColors[loteriaSelecionada].backgroundColor} */}

            <ContainerSelect>

                {loterias && 
                <StyleSelect
                    value={loteriaSelecionada}
                    onChange={handleChange}
                >
                    {selecionaLoteria}
                </StyleSelect>}

                <ContainerLogo>
                    <ContainerDesktop>
                        <Logo 
                            src={logo}
                            variant="square"
                            alt="Logo Loterias da Caixa, representado por um trevo de quatro folhas na cor branca" 
                        />
                    {loterias && <Loteria>{NomeLoteria()}</Loteria>}
                    </ContainerDesktop>
                    {loterias && <Concurso>CONCURSO Nº {pegaIdConcurso()}</Concurso>}
                </ContainerLogo>

            </ContainerSelect>

            <ContainerResult>
                <Numbers>
                    {resultadoConcurso?.numeros && resultadoConcurso.numeros.map((numero) => <Number key={numero}>{numero}</Number>)}
                    <Footer>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Footer>
                </Numbers>
            </ContainerResult>
        </ContainerPage>
    )
}

export default ConcursoPage

