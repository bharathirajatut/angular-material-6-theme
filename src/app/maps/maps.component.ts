import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Ampersand Academy';
  lat: number = 13.039306;
  lng: number = 80.216040;
}