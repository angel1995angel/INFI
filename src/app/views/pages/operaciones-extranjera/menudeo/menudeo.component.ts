import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menudeo',
  templateUrl: './menudeo.component.html',
  styleUrls: ['./menudeo.component.scss'],
})
export class MenudeoComponent implements OnInit {
  menudeoForm: FormGroup;
  operaciones: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.menudeoForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      fecha: ['', Validators.required],
      estatus: ['', Validators.required],
    });
  }

  get f() {
    return this.menudeoForm.controls;
  }

  onSubmit() {
    if (this.menudeoForm.invalid) {
      // Marcar todos los controles como "tocados" para mostrar los mensajes de error
      this.menudeoForm.markAllAsTouched();
      return;
    }

    // Simular la búsqueda de operaciones
    this.operaciones = [
      {
        id: 1,
        cedula: '12345678',
        nombre: 'Juan Perez',
        montoAComprar: 1000,
        tasaCambio: 20,
        estatusNotificacion: 'Enviada',
      },
      // Agrega más datos de ejemplo según sea necesario
    ];
  }
}
