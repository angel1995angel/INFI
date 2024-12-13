import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent implements OnInit {
  @Input() fields: any[] = [];
  @Input() layout: any[] = []; // Nueva propiedad para definir el diseño
  @Input() submitLabel: string = 'Submit';
  @Input() showDropdown: boolean = false; // Nueva propiedad para mostrar u ocultar el dropdown
  @Output() formSubmit = new EventEmitter<any>();
  @Output() exportClick = new EventEmitter<void>(); // Evento de salida para exportar
  @Output() uploadClick = new EventEmitter<void>(); // Evento de salida para cargar
  form: FormGroup;
  showAdvancedFilters = false; // Variable para controlar la visibilidad de los filtros avanzados

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.initializeForm();
  }

  initializeForm(): void {
    const today = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato yyyy-mm-dd
    this.fields.forEach((field) => {
      const control = this.formBuilder.control(
        field.type === 'date' && !field.value ? today : field.value || '',
        field.validations.map((v: { validator: ValidatorFn }) => v.validator)
      );
      this.form.addControl(field.name, control);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  onExportClick() {
    this.exportClick.emit();
  }

  onUploadClick() {
    this.uploadClick.emit();
  }
}
