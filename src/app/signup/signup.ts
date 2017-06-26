import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from '../dynamic-form/containers/dynamic-form/dynamic-form.component';

interface FormItemOption {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: string[]
}

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  styleUrls: [ './signup.scss' ]
})
export class Signup implements AfterViewInit{
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(public router: Router, public http: Http) {
  }

  config: FormItemOption[] = [
    {
      type: 'input',
      label: '姓名',
      name: 'name',
      inputtype: 'text',
      placeholder: '输入姓名',
      styles: {
        color: 'red',
        background: '#ff0'
      },
      validation:
        [Validators.required, Validators.minLength(6)]
    }, {
      type: 'input',
      label: '密码',
      name: 'psword',
      inputtype: 'password',
      placeholder: '输入密码'
    }, {
      type: 'textarea',
      label: '简介',
      name: 'old',
      placeholder: '输入个人简介'
    }, {
      type: 'select',
      label: '性别',
      name: 'sex',
      placeholder: '选择一个选项',
      options: ['男', '女']
    }, {
      type: 'button',
      label: '确定',
      name: 'submit'
    }
  ];

  formSubmitted(value: any, vaild: boolean) {
    console.log(value)
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
  }

  signup(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:8080/users', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}
