import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentFavMovie: string;

  @Output() countryEvent = new EventEmitter();

  favCountry: string;

  constructor() { }

  ngOnInit() {
    this.favCountry = '';
  }

  sendData2Parent() {
    this.countryEvent.emit(this.favCountry);
  }
}
