import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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
      frecuencias: [
        { diaria: true, hora: '08', minuto: '00' },
        { diaria: false, hora: '12', minuto: '30' },
      ],
    },
    {
      nombre: 'Intervención',
      descripcion: 'Descripción breve de Intervención.',
      activo: false,
      frecuencias: [{ diaria: true, hora: '09', minuto: '00' }],
    },
    {
      nombre: 'Mesa de Cambio',
      descripcion: 'Descripción breve de Mesa de Cambio.',
      activo: false,
      frecuencias: [{ diaria: false, hora: '10', minuto: '00' }],
    },
  ];

  selectedProceso: any = null;
  nuevaFrecuencia: { diaria: boolean; hora: string; minuto: string } = {
    diaria: true,
    hora: '00',
    minuto: '00',
  };

  constructor(private modalService: NgbModal) {}

  toggleActivo(proceso: any): void {
    proceso.activo = !proceso.activo;
  }

  openDetalleModal(proceso: any, content: any): void {
    this.selectedProceso = { ...proceso };
    this.modalService.open(content, { centered: true });
  }

  agregarFrecuencia(): void {
    this.selectedProceso.frecuencias.push({ ...this.nuevaFrecuencia });
    this.nuevaFrecuencia = { diaria: true, hora: '00', minuto: '00' };
  }

  eliminarFrecuencia(index: number): void {
    this.selectedProceso.frecuencias.splice(index, 1);
  }

  guardarCambios(modal: NgbModalRef): void {
    const index = this.procesos.findIndex(
      (p) => p.nombre === this.selectedProceso.nombre
    );
    if (index !== -1) {
      this.procesos[index] = { ...this.selectedProceso };
    }
    modal.close();
  }
}
