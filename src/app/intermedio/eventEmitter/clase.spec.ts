import { Jugador2 } from './clase2';
import { Jugador } from 'src/app/basicos/clases/clase';


describe("pruebas jugador2 emit", () => {

    //evitar tener que definirlo en cada prueba
    //pero claro las modificaciones siguen vigentes de una a otra
    //por lo que el jugador no llega virgen de una a otra
    let player: Jugador2;

    //ciclo de vida de las pruebas
    //beforeAll
    beforeEach( () => player = new Jugador2());

    //afterAll
    //afterEach

    it("Debe emitir un evento cuando recibe daño", () =>{

        let nuevoHP=0;
        //aunke es asincrona en la prueba espera a que termine para seguir... ¿?
        player.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        });

        player.recibeDano(80);
        expect(nuevoHP).toBe(20);
    });

   /* it("Jugador resta vida > 100", () =>{

        const player = new Jugador();
        player.recibeDano(180);
        expect(player.hp).toBe(0);
    });
*/


});

