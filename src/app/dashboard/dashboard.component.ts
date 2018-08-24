import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cv:any=[]
bugs=
['Sign contract for "What are conference organizers afraid of?"', 
'Lines From Great Russian Literature? Or E-mails From My Boss?', 
'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit', 
'Create 4 Invisible User Experiences you Never Knew About']
website=['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit', 
'Sign contract for "What are conference organizers afraid of?"']
server=['Lines From Great Russian Literature? Or E-mails From My Boss?', 
'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit', 
'Sign contract for "What are conference organizers afraid of?"']

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor:"white" ,
        pointRadius:5,
        pointBackgroundColor:"white"    ,
        lineTension:0,
        fill:false,
      }
    ]
  };
  
  type1 = 'bar';
  data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 25],
        backgroundColor: "white",        
        borderColor:"white" ,
        pointRadius:5,
        pointBackgroundColor:"white"    ,
        lineTension:0,
        fill:false,
      }
    ]
  }; 
  options = {  
    
    chartArea:{
      backgroundColor:"white",
    },
    legends:{
      label:{
        fontColor:"white",
      }
    },
    title:{
      fontColor:"white"
    },
    responsive: true,
    maintainAspectRatio: false, 
    scales:{
      xAxes:[
     
        {ticks:{fontColor:'white'}
      }],
      yAxes:[
     
        {ticks:{fontColor:'white'}
      }]
    }
  };
  constructor() {

    this.getBugs()
   }

  ngOnInit() {
  }

  getBugs()
  {
    this.cv=this.bugs
  }

  getWeb(){
    this.cv=this.website
  }

  getServer()
  {
    this.cv=this.server
  }

}
const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},  
];