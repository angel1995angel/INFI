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
  @Input() submitLabel: string = 'Submit';
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.fields.forEach((field) => {
      const control = this.fb.control(
        field.value || '',
        this.bindValidations(field.validations || [])
      );
      this.form.addControl(field.name, control);
    });
  }

  bindValidations(
    validations: { validator: ValidatorFn }[]
  ): ValidatorFn | null {
    if (validations.length > 0) {
      const validList: ValidatorFn[] = [];
      validations.forEach((valid) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}