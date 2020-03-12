import { Jugador } from "./clase";


describe("pruebas de  clases", () => {


    it("Jugador resta vida < 100", () =>{

        const player = new Jugador();
        player.recibeDano(80);
        expect(player.hp).toBe(20);
    });

    it("Jugador resta vida > 100", () =>{

        const player = new Jugador();
        player.recibeDano(180);
        expect(player.hp).toBe(0);
    });



});

