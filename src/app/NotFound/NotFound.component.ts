import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-NotFound',
    templateUrl: './NotFound.component.html',
    styleUrls: ['./NotFound.component.css']
})
export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() {
      // 要不要自动跳转到登录页面或者主页呢？
      setTimeout(() => {}, 2000);
    }
}
