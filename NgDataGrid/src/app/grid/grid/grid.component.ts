import { Component, OnInit } from '@angular/core';
import { GridServiceService } from '../service/grid-service.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridData: any = [];
  private element: any = {};

  constructor(private gridServiceService: GridServiceService) { }

  ngOnInit() {
    this.gridServiceService.list().subscribe(res => {
      res.keys =  Object.keys(res.data[0]);
      this.gridData = res;
    });

  }

}
