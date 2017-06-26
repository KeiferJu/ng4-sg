import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['./ng2-smart-table.component.scss'],
  templateUrl: './ng2-smart-table.component.html',
})
export class Ng2SmartTableComponent implements OnChanges {

  @Input() source: any;
  @Input() settings: Object = {};

  @Output() rowSelect = new EventEmitter<any>();
  @Output() userRowSelect = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() deleteConfirm = new EventEmitter<any>();
  @Output() editConfirm = new EventEmitter<any>();
  @Output() createConfirm = new EventEmitter<any>();
  @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();

  tableClass: string;
  tableId: string;
  isHideHeader: boolean;
  isHideSubHeader: boolean;
  isPagerDisplay: boolean;
  rowClassFunction: Function;


  grid: Grid;
  defaultSettings: Object = {
    mode: 'external', // inline|external|click-to-edit
    selectMode: 'multi', // single|multi
    hideHeader: false,
    // hideSubHeader: false,
    // actions: {
    //   columnTitle: '操作',
    //   add: true,
    //   edit: true,
    //   delete: true,
    //   custom: [],
    //   position: 'left', // left|right
    // },
    // filter: {
    //   inputClass: '',
    // },
    // edit: {
    //   inputClass: '',
    //   editButtonContent: '修改',
    //   saveButtonContent: '确认',
    //   cancelButtonContent: '取消',
    //   confirmSave: false,
    // },
    // add: {
    //   inputClass: '',
    //   addButtonContent: '添加',
    //   createButtonContent: '确认',
    //   cancelButtonContent: '取消',
    //   confirmCreate: false,
    // },
    // delete: {
    //   deleteButtonContent: '删除',
    //   confirmDelete: false,
    // },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: '未检索到数据...',
    columns: {},
    pager: {
      display: true,
      perPage: 10,
    },
    rowClassFunction: () => ""
  };

  isAllSelected: boolean = false;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid) {
      if (changes['settings']) {
        this.grid.setSettings(this.prepareSettings());
      }
      if (changes['source']) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
    this.tableId = this.grid.getSetting('attr.id');
    this.tableClass = this.grid.getSetting('attr.class');
    this.isHideHeader = this.grid.getSetting('hideHeader');
    this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    this.isPagerDisplay = this.grid.getSetting('pager.display');
    this.rowClassFunction = this.grid.getSetting('rowClassFunction');
  }

  editRowSelect(row: Row) {
    if (this.grid.getSetting('selectMode') === 'multi') {
      this.onMultipleSelectRow(row);
    } else {
      this.onSelectRow(row);
    }
  }

  onUserSelectRow(row: Row) {
    this.isValid_u = true;
    this.currentData = row.getData();
    if (this.grid.getSetting('selectMode') !== 'multi') {
      this.grid.selectRow(row);
      this.emitUserSelectRow(row);
      this.emitSelectRow(row);
    }
  }

  onRowHover(row: Row) {
    this.rowHover.emit(row);
  }

  multipleSelectRow(row: Row) {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
    this.emitSelectRow(row);
  }



  onSelectRow(row: Row) {
    this.grid.selectRow(row);
    this.emitSelectRow(row);
  }

  onMultipleSelectRow(row: Row) {
    this.emitSelectRow(row);
  }

  initGrid() {
    this.source = this.prepareSource();
    this.grid = new Grid(this.source, this.prepareSettings());
    this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
  }

  prepareSource(): DataSource {
    if (this.source instanceof DataSource) {
      return this.source;
    } else if (this.source instanceof Array) {
      return new LocalDataSource(this.source);
    }

    return new LocalDataSource();
  }

  prepareSettings(): Object {
    return deepExtend({}, this.defaultSettings, this.settings);
  }

  changePage($event: any) {
    console.log("6")
    this.resetAllSelector();
  }

  sort($event: any) {
    console.log("5")
    this.resetAllSelector();
  }

  filter($event: any) {
    console.log("4")
    this.resetAllSelector();
  }

  private resetAllSelector() {
    console.log("3")
    this.isAllSelected = false;
  }

/**
 *
 * @param row
 */
  private emitUserSelectRow(row: Row) {
    const selectedRows = this.grid.getSelectedRows();

    this.userRowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
      selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
    });
  }


  selectData:any=[];
  currentData:any;
  isValid_d = false;
  isValid_u = false;
/**
 *
 * @param  全选
 */
  onSelectAllRows($event: any) {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);

   //初始化选中数据源
    this.selectData = [];
    this.isValid_d  = $event.target.checked;
    //选中
    if($event.target.checked){
      //选中
      for(var data of this.source.data){
        this.selectData.push(
          {
            data: data,
            isSelected:$event.target.checked,
          }
        )
      }
    }

    // this.emitUserSelectRow(null);
    // this.emitSelectRow(null);
  }

/**
 *
 * @param row 单选
 */
  private emitSelectRow(row: Row) {
    if(row.getIsSelected()){

      //打开删除按钮
      this.isValid_d  = true;

      this.selectData.push(
            {
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null
      });

      // this.currentData = row.getData();
    }else{
      for (var i = 0; i < this.selectData.length; i++) {
        if(this.selectData[i].data.id == row.getData().id){
          this.selectData[i].isSelected = row.getIsSelected();
          this.selectData.splice(i,1);
          break;
        }
      }


      if(this.selectData.length == 0){
        this.isValid_d  = false;
      }

}

    // this.rowSelect.emit({
    //   data: row ? row.getData() : null,
    //   isSelected: row ? row.getIsSelected() : null,
    //   source: this.source,
    // });
  }

/**
 *增
 */
  addData():void{
    let newdata:object = {
      id:'新',
      name:'我是新元素',
      email:'jkf19980216@qq.com',
      tel:'18510049345'
    };
    this.source.append(newdata);
    //todo request server
  }
  /**
   * 删
   */
  deletData():void{
      for (var data of this.selectData) {
            if(data.isSelected){
              this.source.remove(data.data)
        }
    }
    //todo request server
    //初始化选中数据源
    this.selectData = [];
    this.isValid_d = false;

  }
  /**
   * 改
   * @param e
   */
  updateData():void{
    let newdata:object = {
      id:'新',
      name:'我是新元素',
      email:'jkf19980216@qq.com',
      tel:'18510049345'
    };
    this.source.update(this.currentData,newdata)
    //初始化当前数据
    this.currentData = {};
    this.isValid_u = false;
  }


  //button statu
  isValidForm_d() {
    return this.isValid_d;
  }
  isValidForm_u() {
    return this.isValid_u;
  }
}
