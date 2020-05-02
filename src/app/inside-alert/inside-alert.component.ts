import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-alert',
  // templateUrl: './inside-alert.component.html',
  template: '<h5> This is nested inside other alerts</h5>',
  styleUrls: ['./inside-alert.component.scss']
})
export class InsideAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
