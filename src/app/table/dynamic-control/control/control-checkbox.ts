import { Component, Input } from '@angular/core';

import { AdComponent } from './dynamic';

@Component({
  template: `
    <div class="control-checkbox control-form" >
        <div *ngFor="let data of data.data">
             <input name={{data.name}} value={{data.name}} type="checkbox" >{{data.name}}
         </div>
    <div>
 
  `,
  styleUrls:['./control.css']
})
export class CheckboxComponent implements AdComponent {
  @Input() data: any;
}