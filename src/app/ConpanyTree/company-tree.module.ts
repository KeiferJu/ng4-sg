import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {  NgTree } from './tree';
import {  ConpanyTree } from './company-tree.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    NgTree,ConpanyTree
    ],
  exports: [ConpanyTree]
})
export class CompanyTreeModule { }
