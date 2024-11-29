import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as feather from 'feather-icons';
import { DataTable } from 'simple-datatables';

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
  dataTable: DataTable;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.menudeoForm = this.formBuilder.group({
      cedula: ['', Validators.required],
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
    this.dataTable = new DataTable(table);
  }

  get f() {
    return this.menudeoForm.controls;
  }

  onSubmit() {
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

    this.dataTable.destroy();
    this.initializeDataTable();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
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
}
