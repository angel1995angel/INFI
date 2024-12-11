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
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;
  showAdvancedFilters = false; // Variable para controlar la visibilidad de los filtros avanzados

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.fields.forEach((field) => {
      const control = this.formBuilder.control(
        field.value || '',
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
}
