import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../service/grid-service.service';
import { PagerService } from '../service/pager.service';
import { GridFilterPipe } from '../pipe/grid-filter.pipe';

@Component({
  selector: 'ng-awesome-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input()
  gridData: any;

  public header: any = [];
  public pager: any = {};
  public pagedItems: any[];
  private headerClick: any = [];
  public searchText: any = '';
  public headerName: any = '';

  // tslint:disable-next-line:max-line-length
  constructor(private gridServiceService: GridService, private pagerService: PagerService, private gridFilterPipe: GridFilterPipe) { }

  ngOnInit() {
    if (this.gridData.url !== '' ) {
      this.gridServiceService.list(this.gridData.url).subscribe(res => {
        this.gridData.data = res;
        this.initOperation(this.gridData.pagination);
      });
    } else {
      this.initOperation(this.gridData.pagination);
    }
  }
  initOperation(pagination) {
    this.setHeader(Object.keys(this.gridData.data[0]));
    if (pagination) {
      this.setPage(1, this.gridData.data);
    } else {
      this.pagedItems = this.gridData.data;
    }
  }
  setHeader(key) {
    for (let i = 0; i < key.length; i++) {
      this.header.push({'name': key[i], 'sort': 'default'});
    }
  }
  setPage(page: number, gridData) {
    // get pager object from service.
    if (gridData === undefined) {
      gridData = this.gridData.data;
    }
    this.pager = this.pagerService.getPager(gridData.length, page);
    //console.log(this.searchByName('Tiger', this.gridData.data));

    // get current page of items
    this.pagedItems = gridData.slice(this.pager.startIndex, this.pager.endIndex + 1);
    //console.log(this.pagedItems);
  }
  globalSearch() {
    let data = {};
    data['name'] = this.searchText;
    data['position'] = this.searchText;
    data['place'] = this.searchText;
    const searchData = this.gridFilterPipe.transform(this.gridData.data, data, false);
    this.setPage(1, searchData);
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
      this.setPage(1, this.gridData.data.sort(this.GetSortOrder(key.name, this.header[i].sort)));
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
}
