import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignComponent } from './sign.component';
import { SignService } from './sign.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignComponent],
  providers: [SignService]
})
export class SignModule { }
