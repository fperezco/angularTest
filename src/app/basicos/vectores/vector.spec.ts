import { obtenerElementos } from "./vector";


describe("pruebas de arrays", () => {

    it("debe devolver 3 objetos", () =>{

        const resp = obtenerElementos();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it("debe de venir el elemento uno y el dos", () =>{

        const resp = obtenerElementos();
        expect(resp).toContain('uno');
        expect(resp).toContain('dos');
    });


});

