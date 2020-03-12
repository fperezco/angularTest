import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';


describe("Formularios", () => {

    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder());
    });

    it("Debe crear un formulario con dos campos", () =>{

        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });


    it("Email debe ser obligatorio", () =>{

        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it("Email detecta un un correo invalido", () =>{

        const control = componente.form.get('email');
        control.setValue('sdfefes');
        expect(control.valid).toBeFalsy();
    });

    it("Email debe ser un correo valido", () =>{

        const control = componente.form.get('email');
        control.setValue('sdfefes@asdf.com');
        expect(control.valid).toBeTruthy();
    });

});

