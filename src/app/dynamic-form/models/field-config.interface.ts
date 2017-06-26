import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  type: string,
  inputtype?: string,
  styles?: Object,
  validation?: ValidatorFn[],
  value?: any,
  title?: string
}
