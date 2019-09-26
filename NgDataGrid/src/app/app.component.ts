import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Ng Awesome Grid';
  header = [{
    'name': 'Name',
    'value': 'name'
  },
  {
    'name': 'Designation',
    'value': 'position'
  }
];
  tableData = [ {
    "name": "Tiger Nixon",
    "position": "System Architect",
    "place": "Edinburgh",
    "extn": "5421",
    "startDate": "2011/04/25",
    "salary": "$320,800"
  },
  {
    "name": "Aiger Nixon",
    "position": "System Architect",
    "place": "Edinburgh",
    "extn": "5421",
    "startDate": "2011/04/25",
    "salary": "$320,800"
  },
{
  "name": "Tiger Nixon",
  "position": "System Architect",
  "place": "Edinburgh",
  "extn": "5421",
  "startDate": "2011/04/25",
  "salary": "$320,800"
},
{
  "name": "Garrett Winters",
  "position": "Accountant",
  "place": "Tokyo",
  "extn": "8422",
  "startDate": "2011/07/25",
  "salary": "$170,750"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
},
{
  "name": "Ashton Cox",
  "position": "Junior Technical Author",
  "place": "San Francisco",
  "extn": "1562",
  "startDate": "2009/01/12",
  "salary": "$86,000"
}];
  sampleData = {
    'url' : '../assets/json/employee.json',
    'data' :  [],
    'pages' : ['5', '10', '15', '20'],
    'theme': 'dark',
    'pagination': true,
    'sorting' : true
  };

  changeData() {
    this.tableData = [  {
    "name": "Tiger Nixon",
    "position": "System Architect",
    "place": "Edinburgh",
    "extn": "5421",
    "startDate": "2011/04/25",
    "salary": "$320,800"
  },
  {
    "name": "Garrett Winters",
    "position": "Accountant",
    "place": "Tokyo",
    "extn": "8422",
    "startDate": "2011/07/25",
    "salary": "$170,750"
  },
  {
    "name": "Ashton Cox",
    "position": "Junior Technical Author",
    "place": "San Francisco",
    "extn": "1562",
    "startDate": "2009/01/12",
    "salary": "$86,000"
  }];
  }
  customEvent(data) {
    console.log(data);
  }
}
