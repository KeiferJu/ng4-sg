import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicTableComponent  } from './table.component';



import { DynamiModule } from './dynamic-control/dynamic.module';
import { Ng2SmartTableModule  } from './dynamic-table/ng2-smart-table.module';

@NgModule({
  imports: [BrowserModule,Ng2SmartTableModule,DynamiModule],
  declarations: [
    DynamicTableComponent,
    ],
  exports: [
    DynamicTableComponent,
  ]
})
export class DynamicTableModule { }