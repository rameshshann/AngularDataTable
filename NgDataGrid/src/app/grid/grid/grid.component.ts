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

  // tslint:disable-next-line:max-line-length
  constructor(private gridServiceService: GridServiceService, private pagerService: PagerService, private gridFilterPipe: GridFilterPipe) { }

  ngOnInit() {
    this.gridServiceService.list().subscribe(res => {
      res.keys =  Object.keys(res.data[0]);
      this.gridData = res;
     // this.allItems = this.gridData;
      this.setPage(1);
    });

  }
  setPage(page: number) {
   // console.log(this.gridFilterPipe.transform(this.gridData.data, this.gridData.data[0].name='tiger', true));
    // get pager object from service
     this.pager = this.pagerService.getPager(this.gridData.data.length, page);
     //console.log(this.pager);

    // get current page of items
    this.pagedItems = this.gridData.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    //console.log(this.pagedItems);
}
}
