import { mensaje } from "./string";

//sirve para agrupar pruebas
//describe("pruebas de strings");
//es una prueba, una evaluacion en concreto
//it("debe regresar un string");


describe("pruebas de string", () => {

    it("debe regresar un string", () =>{

        const resp = mensaje("pakito");

        //expect( (typeof resp) ==='string')
        expect( typeof resp).toBe('string');
    });

    it("debe retornar un saludo con el nombre", () =>{

        const nombre = "pakito";
        const resp = mensaje(nombre);

        //expect(resp).toBe('Saludos '+ nombre);
        expect(resp).toContain(nombre);
    });


});

