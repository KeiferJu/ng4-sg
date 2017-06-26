/**
 * Created by wangfudong on 2017/6/23.
 */
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-textarea',
  styleUrls: ['form-textarea.component.scss'],
  template: `
    <div
      class="dynamic-field form-button"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <textarea cols="30" rows="3"
        [formControlName]="config.name"
        [ngStyle]="config.styles"
        [attr.placeholder]="config.placeholder"
      ></textarea>
    </div>
  `
})
export class FormTextareaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
