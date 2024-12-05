import { Component } from '@angular/core';

@Component({
  selector: 'app-procesos-operativo',
  templateUrl: './procesos-operativo.component.html',
  styleUrls: ['./procesos-operativo.component.scss'],
})
export class ProcesosOperativoComponent {
  procesos = [
    {
      nombre: 'Menudeo',
      descripcion: 'Descripción breve de Menudeo.',
      activo: false,
    },
    {
      nombre: 'Intervención',
      descripcion: 'Descripción breve de Intervención.',
      activo: false,
    },
    {
      nombre: 'Mesa de Cambio',
      descripcion: 'Descripción breve de Mesa de Cambio.',
      activo: false,
    },
  ];

  toggleActivo(proceso: any): void {
    proceso.activo = !proceso.activo;
  }
}
