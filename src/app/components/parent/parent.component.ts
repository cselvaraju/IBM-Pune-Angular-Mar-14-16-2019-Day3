import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favMovie: string;
  favMovie4Child: string;
  childFavCountry: string;

  constructor() { }

  ngOnInit() {
    this.favMovie = '';
    this.favMovie4Child = '';
    this.childFavCountry = '';
  }

  sendData2Child() {
    this.favMovie4Child = this.favMovie;
  }

  handleCountryEvent(event) {
    // console.log(event);
    this.childFavCountry = event;
  }

}
