import { isExportDeclaration, textSpanEnd } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para [f, d, e, f]", () => {
        const resultado = checaItensDuplicados(["f", "d", "e", "f"]);

        expect(resultado).toEqual(true);
    });

    test("retorna false para [1, 2, 3]", () => {
        const resultado = checaItensDuplicados([1, 2, 3]);

        expect(resultado).toEqual(false);
    });

    test("retorna true para [1, 2, 1]", () => {
        const resultado = checaItensDuplicados([1, 2, 1]);

        expect(resultado).toEqual(true);
    });

    test("retorna false para [f, d, e]", () => {
        const resultado = checaItensDuplicados(["f", "d", "e"]);

        expect(resultado).toEqual(false);
    });

});
