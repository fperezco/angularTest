import { MedicosService } from './medico.service';
import { OnInit, Component } from '@angular/core';
@Component({
  selector: "app-medico",
  template: `
  <p>
  medico works!
  </p>
  `,
  styleUrls: []
})
export class MedicoComponent implements OnInit {
  public medicos: any[] = [];
  public mensajeError: string;

  constructor(private _medicoService: MedicosService) {}

  ngOnInit() {
    this._medicoService
      .getMedicos()
      .subscribe(medicos => (this.medicos = medicos));
  }

  // simulacion de peticiones
  agregarMedico() {
    const medico = { nombre: "juan medico" };

    this._medicoService.agregarMedico(medico).subscribe(
      medicoDB => this.medicos.push(medicoDB),
      err => (this.mensajeError = err)
    );
  }

  borrarMedico(id: string) {
    const confirmar = confirm("Esta seguro de borrar medico");

    if (confirmar) {
      this._medicoService.borrarMedico(id);
    }
  }
}
