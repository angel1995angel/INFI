import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as feather from 'feather-icons';
import { DataTable } from 'simple-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mesa-cambio',
  templateUrl: './mesa-cambio.component.html',
  styleUrls: ['./mesa-cambio.component.scss'],
})
export class MesaCambioComponent implements OnInit, AfterViewInit {
  mesaCambioForm: FormGroup;
  operaciones: any[] = [];
  page = 1;
  dropdownOpen = false;
  dataTable: DataTable | undefined;
  loading = false;
  showTables = false; // Variable para controlar la visibilidad de las tablas
  selectedOperacion: any = null; // Variable para almacenar la operación seleccionada

  fields: any[] = [
    {
      name: 'cedula',
      label: 'Cedula',
      type: 'text',
      placeholder: 'Ingrese la cédula',
      validations: [{ validator: Validators.required }],
    },
    {
      name: 'moneda',
      label: 'Tipo pacto',
      type: 'select',
      options: [
        { value: 'OCAOCA', label: 'OCAOCA' },
        { value: 'OCACLI', label: 'OCACLI' },
        { value: 'CLIOCA', label: 'CLIOCA' },
      ],
      validations: [{ validator: Validators.required }],
    },
    {
      name: 'fecha',
      label: 'Fecha',
      type: 'date',
      placeholder: 'yyyy-mm-dd',
      validations: [{ validator: Validators.required }],
    },
    {
      name: 'estatus',
      label: 'Estatus',
      type: 'select',
      options: [
        { value: '1', label: 'Todas' },
        { value: '2', label: 'Enviadas' },
        { value: '3', label: 'Rechazadas' },
        { value: '4', label: 'Por enviar' },
      ],
      validations: [{ validator: Validators.required }],
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.mesaCambioForm = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      moneda: ['', Validators.required],
      fecha: ['', Validators.required],
      estatus: ['', Validators.required],
    });

    this.operaciones = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      cedula: `12345678${i}`,
      nombre: `Nombre ${i}`,
      montoAComprar: Math.floor(Math.random() * 1000),
      tasaCambio: Math.random() * 20,
      estatusNotificacion: ['Enviada', 'Rechazada', 'Por enviar'][i % 3],
    }));
  }

  ngAfterViewInit(): void {
    feather.replace();
    this.initializeDataTable();
  }

  initializeDataTable() {
    const table: any = document.querySelector('#dataTableExample');
    if (table) {
      this.dataTable = new DataTable(table);
    }
  }

  get f() {
    return this.mesaCambioForm.controls;
  }

  onSubmit(formValue: any) {
    if (this.mesaCambioForm.invalid) {
      this.mesaCambioForm.markAllAsTouched();
      return;
    }

    this.operaciones = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      cedula: `12345678${i}`,
      nombre: `Nombre ${i}`,
      montoAComprar: Math.floor(Math.random() * 1000),
      tasaCambio: Math.random() * 20,
      estatusNotificacion: ['Enviada', 'Rechazada', 'Por enviar'][i % 3],
    }));

    if (this.dataTable) {
      this.dataTable.destroy();
    }
    this.initializeDataTable();
    this.showTables = true; // Mostrar las tablas después de la búsqueda
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openExportModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openUploadModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  handleFileUpload(format: string, modal: any) {
    console.log(`Cargando archivo en formato ${format}`);
    modal.close();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 10000);
  }

  exportar() {
    console.log('Exportar');
    // Lógica para exportar
  }

  cargar() {
    console.log('Cargar');
    // Lógica para cargar
  }

  anular() {
    console.log('Anular');
    // Lógica para anular
  }

  getEstatusClass(estatus: string): string {
    switch (estatus) {
      case 'Enviada':
        return 'status-enviada';
      case 'Rechazada':
        return 'status-rechazada';
      case 'Por enviar':
        return 'status-por-enviar';
      default:
        return '';
    }
  }

  editOperacion(operacion: any) {
    this.selectedOperacion = operacion;
    // Aquí puedes abrir un modal o redirigir a una página de edición
    console.log('Editar operación:', operacion);
  }

  closeModal(reason: string, modal: any) {
    modal.close(reason);
  }

  closeExportModal(modal: any) {
    this.closeModal('by: close button', modal);
  }

  saveExportModal(modal: any) {
    this.closeModal('by: save button', modal);
  }

  closeUploadModal(modal: any) {
    this.closeModal('by: close button', modal);
  }
}
