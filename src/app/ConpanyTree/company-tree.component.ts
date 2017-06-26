import { Component,OnInit } from '@angular/core';
import { TreeData} from './bean/treedata';
import { NgTree } from './tree';

@Component({
  selector: 'conpany-tree',
  template:`
    <h2>{{title}}</h2>
    <ngTree [treeData]="treeData" [treeConfig]="treeConfig"></ngTree>
  ` ,
  styles:[
    `
      h2{
        color: #369;
        font-weight:bold ;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 150%;
      }
      ngTree{
        color: #369;
        font-weight:bold ;
        font-size: 25px;
      }
    `
  ]
})
export class ConpanyTree  {



title = '集团组织结构';

/**
 * 数据源
 */
treeData = [{
  id:1,name: "本部", iconClass: true, isOpen: true,
  children: [
    {id:11,name: '研发部', iconClass: true, isOpen: true,
      children:[
        {id:111,name:'地图',iconClass: true, isOpen: true,},
        {id:112,name:'导航',iconClass: true, isOpen: true,},
        {id:113,name:'定位',iconClass: true, isOpen: true,}
      ]
    },
    {id:12,name: '产品', iconClass: true, isOpen: true },
    {id:13,name: '测试', iconClass: true, isOpen: true}
  ]
},

  {
    id:2,name: "市场部", iconClass: true, isOpen: true,
    children: [
      { id:21,name: "市场", iconClass: true, isOpen:true},
      { id:22,name: "销售", iconClass: true ,isOpen:true},
      { id:23,name: "法务", iconClass: true ,isOpen:true},
      { id:24,name: "人事", iconClass: true ,isOpen:true},
      { id:25,name: "其它", iconClass: true ,isOpen:true}
    ]
  }
];



  /**
   * 增删改查
   * @type {{tools: [{name: string; iconClass: boolean; title: string},{name: string; iconClass: boolean; title: string},{name: string; iconClass: boolean; title: string}]; onToolClick: ((node:any, name:any)=>any)}}
   */
  public treeConfig : any = {
    tools:[
      {name:"icon-plus", iconClass: true ,title:"添加"},
      {name:"icon-edit", iconClass: true ,title:"编辑"},
      {name:"icon-bin", iconClass: true ,title:"删除"},
    ],

    /**
     * 事件处理
     * @param node
     * @param name
     * @return {boolean}
     */
    onToolClick:(node:any, name:any)=>{

      if(name=="icon-plus"){

        name = prompt("请输入新部门名称", ""); //将输入的内容赋给变量 name ，
          //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
          if (name)//如果返回的有内容
          {
            node.children = node.children || [];

            node.children.push({
              id:24365,
              name:name,
              iconClass:true,
              isOpen:true
            });
          }

      } else if(name=="icon-edit"){
        name = prompt("请输入部门新名称", ""); //将输入的内容赋给变量 name ，
        //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
        if (name)//如果返回的有内容
        {
          node.name = name;
        }

      } else {
        for(var i=0;i < this.treeData.length;i++){
          if(node.id == this.treeData[i].id){
            this.treeData.splice(i,1);
            break;
          }
        }

      }
    }
  }

}
