import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AdBannerComponent } from './dynamic.component';
import { AdDirective } from './dynamic.directive';

//dy-ac
import { TextComponent } from './control/control-text';
import { ButtonComponent } from './control/control-button';
import { InputComponent } from './control/control-input';
import { SelectComponent } from './control/control-select';
import { CheckboxComponent } from './control/control-checkbox';




@NgModule({
  imports: [BrowserModule],
  declarations: [
    AdBannerComponent,
    AdDirective,
    ButtonComponent,
    InputComponent,
    TextComponent,
    SelectComponent,
    CheckboxComponent
    ],
  entryComponents: [
    TextComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent
    ],
  exports: [
    AdBannerComponent,
  ],
})
export class DynamiModule { }