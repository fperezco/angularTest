import { MedicoComponent } from './medico.component';
import { MedicosService } from './medico.service';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import {EMPTY} from 'rxjs';

/**
 * VALE, estamos en pruebas unitarias, el objectivo no es salir y que se 
 * testeen los webservices ni nada por lo que usaremos los espias
 * que te permiten hacer peticiones falsas
 */

describe("pruebas mediante espias de Medicos", () => {

    let componente:MedicoComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => componente = new MedicoComponent(servicio));

    it("Init debe cargar medicos", () =>{

        //espia al servicio y cuando llamen a getmedicos ejecuta esta funcion k te digo
        const medicos = ['medico1','medico2','medico3'];
        spyOn(servicio,'getMedicos').and.callFake( () => {
            return from (medicos); //he de devolver un observable pk lo hace el servicio
        });

        componente.ngOnInit(); //hay que llamarlo explicitamente pk forma parte del ciclo de vida del componente en ejecucion
        expect( componente.medicos.length).toBeGreaterThan(0);


    });

    it("Agregar Medico debe llamar al server", () =>{

        //espia al servicio agregar medico y lo sustituye por empty
        const espia = spyOn(servicio,'agregarMedico').and.callFake( medico => {
           return EMPTY; //he de devolver un observable pk lo hace el servicio
        });

        componente.agregarMedico(); 
        //simplemente testeo que se ha llamado al metodo agregarMedico del servicio
        expect(espia).toHaveBeenCalled();


    });

   /* it("Agregar Medico agregar un nuevo medico al arreglo", () =>{

        const medico: any = { id:1 , nombre:'Juan'};

        //espia al servicio agregar medico y lo sustituye por empty
        spyOn(servicio,'agregarMedico').and.returnValue(
            from(medico) //he de devolver un observable pk lo hace el servicio
        );

        componente.agregarMedico(); 
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);


    });*/


    //simular pulsacion en confirmacion de usuario:
    it("Borrar Medico debe llamar al server al pulsar en si", () =>{

        //para automatizar el pulsar el ok en el emergente
        spyOn(window,'confirm').and.returnValue(true);

        //espia al servicio borrar medico y lo sustituye por empty
        const espia = spyOn(servicio,'borrarMedico').and.callFake( medico => {
           return EMPTY; //he de devolver un observable pk lo hace el servicio
        });


        componente.borrarMedico('1'); 
        //simplemente testeo que se ha llamado al metodo agregarMedico del servicio
        expect(espia).toHaveBeenCalled();


    });

    //no debe simular pulsacion en confirmacion de usuario:
    it("No debe Borrar Medico al pulsar en NO", () =>{

        //para automatizar el pulsar el ok en el emergente
        spyOn(window,'confirm').and.returnValue(false);

        //espia al servicio borrar medico y lo sustituye por empty
        const espia = spyOn(servicio,'borrarMedico').and.callFake( medico => {
            return EMPTY; //he de devolver un observable pk lo hace el servicio
        });


        componente.borrarMedico('1'); 
        //simplemente testeo que se ha llamado al metodo agregarMedico del servicio
        expect(espia).not.toHaveBeenCalled();


    });







});

