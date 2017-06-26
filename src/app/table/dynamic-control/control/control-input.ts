import { Component, Input } from '@angular/core';

import { AdComponent } from './dynamic';

@Component({
  template: `
    <div class="control-input control-form">
     <input name={{data.text}} type="{{data.type}}" placeholder={{data.text}} (keyDown.enter)= "hhh($event)">
    </div>
  `,
  styleUrls:['./control.css']
})
export class InputComponent implements AdComponent {
  @Input() data: any;

  hhh(e){
    console.log(e.target.value);
    this.data.source.addFilter({
      field:'id',
      search:e.target.value
    })
  }
}