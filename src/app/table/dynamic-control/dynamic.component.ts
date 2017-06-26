import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';


import { AdComponent } from './control/dynamic';


import { AdDirective } from './dynamic.directive';
import { AdItem }      from './dynamic-item';



@Component({
  selector: 'add-banner',
  template:`
  <div>
  <ng-template ad-host></ng-template>
  <div>
  `,
  styles: [
    `
    div.control-form {
      display: inline-block;
    }
   
    `
  ]
})
export class AdBannerComponent implements AfterViewInit {
  @Input() ads: AdItem[];
  @Input() source: any;


  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    // this.getAds();
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }

  loadComponent() {
    // this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    // let adItem = this.ads[this.currentAddIndex];
let componentFactory;
let viewContainerRef;
let componentRef;
for(var adItem of this.ads) {
  console.log(adItem)
      componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

     viewContainerRef = this.adHost.viewContainerRef;
    // viewContainerRef.clear();

     componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
    (<AdComponent>componentRef.instance).data.source = this.source;
   }

    
  }

  getAds() {
    this.interval =  this.loadComponent();
    //循环器
    // setInterval(() => {
    //   this.loadComponent();
    // }, 3000);
  }
}
