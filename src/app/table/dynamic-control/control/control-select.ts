
import { Component, Input } from '@angular/core';

import { AdComponent } from './dynamic';

@Component({
  template: `
  <div class="control-select control-form">
     <select class="select" (change)="hhh($event)">
          <option value="">请选择</option>
          <option *ngFor="let hero of data.data" [value]="hero.name" >{{hero.name}}</option>
      </select>
    </div>
  `,
  styleUrls:['./control.css']
})
export class SelectComponent implements AdComponent {
  @Input() data: any;
value:any;

  hhh(e){
    switch(e.target.value){
      case '正序':this.data.source.setSort([{ field: 'id', direction: 'asc' }]);break;
      case '倒序':this.data.source.setSort([{ field: 'id', direction: 'desc' }]);break;
      default:this.data.source.setSort([{ field: 'id', direction: 'null' }]);
    }
    
  }
}