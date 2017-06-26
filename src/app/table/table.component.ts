import { Component,OnInit ,enableProdMode} from '@angular/core';

enableProdMode();
/**
 * table
 */
import { LocalDataSource  } from './dynamic-table';

/**
 * dy-co
 */
import { AdItem } from './dynamic-control/dynamic-item';
import { TextComponent } from './dynamic-control/control/control-text';
import { ButtonComponent } from './dynamic-control/control/control-button';
import { InputComponent } from './dynamic-control/control/control-input';
import { SelectComponent } from './dynamic-control/control/control-select';
import { CheckboxComponent } from './dynamic-control/control/control-checkbox';


@Component({
  selector: 'dynamic-table',
  template:`
    <add-banner [source]="source" [ads]="ads"></add-banner>
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
   `
})


export class DynamicTableComponent{


//  ngOnInit() {
//     console.log(this.adService.getAds());
//     this.ads = this.adService.getAds();
//   }

source: LocalDataSource; // add a property to the component


/**
 * 表格数据源
 */
  data  =  [
    {
      id: 4,
      name: '张三',
      email: 'zhangsan@qq.com',
      tel:18832058029

    },
    {
      id: 5,
      name: '李四',
      email: 'zhaosi@qq.com',
      tel:18832058029
    },
    {
      id: 6,
      name: '王五',
      email: 'wangwu@qq.com',
      tel:18832058029

    },
    {
      id: 7,
      name: '赵六',
      email: 'zhaoliu@qq.com',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    },
    {
      id: 8,
      name: '尼古拉斯.赵四',
      email: 'Sherwood@rosamond.me',
      tel:18832058029
    }
  ];

  /**
 * 设置数据源
 */
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter:false
      },
      name: {
        title: 'Name',
        filter:false
      },
      email: {
        title: 'Email',
        filter:false

      },
      tel: {
        title: 'tel',
        filter:false
      },
    }
    
  };

/**
 * 控件数据源
 */

ads: AdItem[] =[
      // new AdItem(TextComponent, {text: '我是文本'}),
      new AdItem(ButtonComponent,{text: '设置',event:'add'}),
      new AdItem(InputComponent, {text: '咱先搜一个',type:'text'}),
      new AdItem(SelectComponent, {
        data: [
          {name:'正序'},
          {name:'倒序'},
          ]})
];



constructor( ) {
  this.source = new LocalDataSource(this.data); // create the source
}


/**
 * 删除回调
 */
  onDeleteConfirm(event) {
    console.log('删除')
    if (window.confirm('你真的想要删除此条记录吗?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
