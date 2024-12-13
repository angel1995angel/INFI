import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as feather from 'feather-icons';
import { DataTable } from 'simple-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menudeo',
  templateUrl: './menudeo.component.html',
  styleUrls: ['./menudeo.component.scss'],
})
export class MenudeoComponent implements OnInit, AfterViewInit {
  menudeoForm: FormGroup;
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
      advanced: true, // Marcar como filtro avanzado
    },
    {
      name: 'fecha',
      label: 'Fecha',
      type: 'date',
      placeholder: 'yyyy-mm-dd',
      validations: [{ validator: Validators.required }],
      value: new Date().toISOString().split('T')[0], // Establecer la fecha actual como valor predeterminado
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

  layout: any[] = [
    'col-sm-3', // Cedula
    'col-sm-3', // Fecha
    'col-sm-3', // Estatus
  ];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.menudeoForm = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      fecha: [new Date().toISOString().split('T')[0], Validators.required], // Establecer la fecha actual como valor predeterminado
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
    return this.menudeoForm.controls;
  }

  onSubmit(formValue: any) {
    if (this.menudeoForm.invalid) {
      this.menudeoForm.markAllAsTouched();
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
