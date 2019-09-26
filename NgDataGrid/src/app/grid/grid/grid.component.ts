import { Component, OnInit, Input, DoCheck, AfterViewInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { GridService } from '../service/grid-service.service';
import { PagerService } from '../service/pager.service';
import { GridFilterPipe } from '../pipe/grid-filter.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit, DoCheck, AfterViewInit {
  @Input()
  gridData: any;

  @Input()
  tableHeader: any;

  @Input() set rowData(val: any) {
   this.gridData.data = val;
   console.log(this.gridData.data , val);
  }
  @Output()
  rowEvent: EventEmitter <any> = new EventEmitter<any>();

  public header: any = [];
  public pager: any = {};
  public pagedItems: any[];
  public rowClicked: Number;
  public searchText: any = '';
  public headerName: any = '';
  public pages = 0;


  // tslint:disable-next-line:max-line-length
  constructor(private gridServiceService: GridService, private pagerService: PagerService, private gridFilterPipe: GridFilterPipe) { }

  ngOnInit() {
    console.log(this.pages);
    if (this.gridData.url !== '' ) {
      this.gridServiceService.list(this.gridData.url).subscribe(res => {
        this.gridData.data = res;
       this.initOperation(this.gridData.pagination);
      });
    } else {
      this.initOperation(this.gridData.pagination);
    }
    console.log(this.gridData.data );
    this.setHeader();
  }
  ngOnChanges() {
    this.gridData.pages !== undefined ? this.pages = this.gridData.pages[0] : this.pages = 5;
    this.initOperation(this.gridData.pagination);
    this.rowClicked = -1;
  }
  ngDoCheck() {

  }
  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.gridData.data);
  }
  initOperation(pagination) {
    if (pagination) {
      this.setPage(1, this.gridData.data);
    } else {
      this.pagedItems = this.gridData.data;
    }
    // console.log(this.gridData.pages[0]);
  }
  setHeader() {
    for (let i = 0; i < this.tableHeader.length; i++) {
      this.header.push({'name': this.tableHeader[i].name, 'value': this.tableHeader[i].value, 'sort': 'default'});
    }
  }
  setPage(page: number, gridData) {
    // get pager object from service.
    if (gridData === undefined) {
      gridData = this.gridFilterPipe.transform(this.gridData.data, this.setSearchText(this.searchText), false);
    }
    this.pager = this.pagerService.getPager(gridData.length, page, Number(this.pages));

    // get current page of items
    this.pagedItems = gridData.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.rowClicked = -1;
    console.log(this.pages);
  }
  globalSearch() {
   this.dataFilter(this.gridData.data, this.searchText);
  }
  dataFilter(globalData, txt) {
    const searchData = this.gridFilterPipe.transform(globalData, this.setSearchText(txt), false);
    this.setPage(1, searchData);
  }
  setSearchText(txt) {
    const data = {};
    for (let i = 0; i < this.header.length; i++) {
      data[this.header[i].value] = txt;
    }
    return data;
  }
  sorting(key, i) {
    if (this.gridData.sorting) {
      if (this.header[i].sort === 'default') {
        this.setDefault();
        this.header[i].sort = 'asc';
      } else if (this.header[i].sort === 'asc') {
        this.header[i].sort = 'dsc';
      } else if (this.header[i].sort === 'dsc') {
        this.header[i].sort = 'asc';
      }
      this.headerName = key;
      this.dataFilter(this.gridData.data.sort(this.GetSortOrder(key.value, this.header[i].sort)), this.searchText);
     // this.setPage(1, this.gridData.data.sort(this.GetSortOrder(key.value, this.header[i].sort)));
      console.log(this.searchText);
    }
  }
  setDefault() {
    for (let i = 0; i < this.header.length; i++) {
      this.header[i].sort = 'default';
    }
  }
  GetSortOrder(prop, sortOrder) {
    return function(a, b) {
       if ( a[prop] > b[prop]) {
           return sortOrder === 'asc' ? 1 : -1;
       } else if ( a[prop] < b[prop] ) {
           return sortOrder === 'asc' ? -1 : 1;
       }
       return 0;
   };
 }
 rowClickFn(i, data, event) {
   const rowData: any = {};
   rowData['index'] = i;
   rowData['data'] = data;
   this.rowEvent.emit(rowData);
  if (this.rowClicked === i) {
    this.rowClicked = -1;
  } else {
    this.rowClicked = i;
  }
 }
 changesPages() {
  this.setPage(1, this.gridData.data);
 }
}
