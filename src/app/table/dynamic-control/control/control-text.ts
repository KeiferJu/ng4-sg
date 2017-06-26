import { Component, Input } from '@angular/core';

import { AdComponent }      from './dynamic';

@Component({
  template: `
    <div class="control-text control-form" style="display:inline-block;">
      {{data.text}} 
    </div>
  `,
  styleUrls:['./control.css']
})
export class TextComponent implements AdComponent {
  @Input() data: any;  
}

