import { Component, OnInit } from '@angular/core';
import { GridServiceService } from '../service/grid-service.service';
import { PagerService } from '../service/pager.service';
import { GridFilterPipe } from '../pipe/grid-filter.pipe';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridData: any = [];
  public pager: any = {};
  public pagedItems: any[];
  private element: any = {};
  private allItems: any[];
  public searchText: any = '';

  // tslint:disable-next-line:max-line-length
  constructor(private gridServiceService: GridServiceService, private pagerService: PagerService, private gridFilterPipe: GridFilterPipe) { }

  ngOnInit() {
    this.gridServiceService.list().subscribe(res => {
      res.keys = Object.keys(res.data[0]);
      this.gridData = res;
      // this.allItems = this.gridData;
      this.setPage(1, this.gridData.data);
    });

  }
  setPage(page: number, gridData) {
    // get pager object from service
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
}
