import { Component, Input } from '@angular/core';

import { AdComponent } from './dynamic';
// import { LocalDataSource  } from '../../table';
@Component({
  template: `
    <div class="control_button control-form" >
      <button (click)="hhh(data.event)">{{data.text}}</button>
    </div>
  `,
  styleUrls:['./control.css']
})
export class ButtonComponent implements AdComponent {
  @Input() data: any;

hhh(e){
 console.log(e);
  switch(e){
    
    case 'add':this.data.source.append({
      id:'111',
      name:'jkf',
      email:'sdfsdf',
      tel:'1231'
    });
    this.data.source.refresh;
    
    break;
    case 'remove':this.data.source.remove();break;
    case 'update':this.data.source.update();break;
  }
  
  
}


}
