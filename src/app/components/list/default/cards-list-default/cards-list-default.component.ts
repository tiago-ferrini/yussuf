import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list-default',
  templateUrl: './cards-list-default.component.html',
  styleUrls: ['./cards-list-default.component.scss'],
})
export class CardsListDefaultComponent implements OnInit {
  @Input('records') records: any[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.records);
  }
}
