import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  today: Date;
  cost: number;
  actor: any;
  text: string;

  constructor() { }

  ngOnInit() {
    this.message = 'hELlo WOrlD';
    this.today = new Date();
    this.cost = 23.5;
    this.actor = {
      name: 'Amitabh Bachhan', city: 'Mumbai'
    };
    this.text = '';
  }

}
