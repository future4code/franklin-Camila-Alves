import { render } from "@testing-library/react";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import ConcursoPage from "./ConcursoPage";

describe ("ConcursoPage", () => {

    const loteryData = {
        id:"5534",
        loteria:1,
        numeros:["17","32","41","58","69"],
        data:"2022-10-09T01:40:29.606Z"
    }

    const NomeLoteria = () => {
        return "LOTOMANIA"
    }

    const concursoPageRender = () => {

        const loterias = useRequestData([], `${BASE_URL}/loterias`)

        const loteria = {
            id: 1,
            nome: "quina"
        }

        render(
            <StyleItem
                key={loteria.id}
                value={loteria.id}
            >
                {loteria.nome.toUpperCase()}
            </StyleItem>
        )
    } 

    it ("testando se quando o payload é quina renderiza a tela quina", () => {
        concursoPageRender()
        const component = screen.getByText("quina")
        expect(component).toBeInTheDocument
    })
})