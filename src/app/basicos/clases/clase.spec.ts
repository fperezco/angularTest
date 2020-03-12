import { Jugador } from "./clase";


describe("pruebas de  clases", () => {

    //evitar tener que definirlo en cada prueba
    //pero claro las modificaciones siguen vigentes de una a otra
    //por lo que el jugador no llega virgen de una a otra
    //const player = new Jugador();

    //ciclo de vida de las pruebas
    //beforeAll
    //beforeEach

    //afterAll
    //afterEach

    it("Jugador inicial con vida = 100", () =>{

        const player = new Jugador();
        expect(player.hp).toBe(100);
    });

    it("Jugador resta vida < 100", () =>{

        const player = new Jugador();
        player.recibeDano(80);
        expect(player.hp).toBe(20);
    });

   /* it("Jugador resta vida > 100", () =>{

        const player = new Jugador();
        player.recibeDano(180);
        expect(player.hp).toBe(0);
    });
*/


});

