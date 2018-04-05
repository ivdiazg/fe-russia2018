import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-day',
  templateUrl: './match-day.component.html',
  styleUrls: ['./match-day.component.css']
})
export class MatchDayComponent implements OnInit {

  cols = 6;
  tiles = [
    { text: 'One', cols: 2, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 2, color: 'lightpink' },
    // { text: 'Four', cols: 2, rows: 2, color: '#DDBDF1' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
