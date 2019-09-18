import { Component, OnInit } from '@angular/core';
import { GridService } from '../app/grid/service/grid-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ng Awesome Grid';
  sampleData = {
    'url' : '../assets/json/employee.json',
    'data' :  [{id: 1, name: "a"},
    {id: 2, name: "b"},
    {id: 5, name: "c"},
    {id: 6, name: "f"},
    {id: 4, name: "e"},
    {id: 3, name: "d"},
    {id: 7, name: "g"},
    {id: 8, name: "h"}],
    'pagination': true,
    'sorting' : true
  };
}
