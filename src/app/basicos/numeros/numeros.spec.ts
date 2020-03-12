import { incrementar } from "./numeros";


describe("pruebas de numeros", () => {

    it("debe devolver 100 si el ingresado es mayor a 100", () =>{

        const resp = incrementar(250);
        expect(resp).toBe(100);
    });

    it("debe devolver num+1 si es menor a 100", () =>{

        let num = 80;
        const resp = incrementar(num);
        expect(resp).toBe(num+1);
    });



});

